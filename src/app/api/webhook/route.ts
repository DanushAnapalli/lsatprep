import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getAdminDb } from "@/lib/firebase-admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing signature or webhook secret" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  const db = getAdminDb();

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerEmail = session.customer_email;

      if (customerEmail) {
        // Store subscription record in Firestore
        await db.collection("subscriptions").doc(customerEmail.toLowerCase()).set({
          customerId: session.customer,
          subscriptionId: typeof session.subscription === "string"
            ? session.subscription
            : session.subscription?.id || null,
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, { merge: true });
      }
      break;
    }

    case "customer.subscription.created": {
      const subscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(subscription.customer as string);

      if (!("deleted" in customer) && customer.email) {
        await db.collection("subscriptions").doc(customer.email.toLowerCase()).set({
          customerId: subscription.customer,
          subscriptionId: subscription.id,
          status: subscription.status,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, { merge: true });
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(subscription.customer as string);

      if (!("deleted" in customer) && customer.email) {
        // Access subscription fields
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sub = subscription as any;

        await db.collection("subscriptions").doc(customer.email.toLowerCase()).update({
          status: subscription.status,
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
          currentPeriodEnd: sub.current_period_end
            ? new Date(sub.current_period_end * 1000)
            : null,
          updatedAt: new Date(),
        });
      }
      break;
    }

    case "customer.subscription.trial_will_end": {
      // Sent 3 days before trial ends
      // Could send reminder email here in the future
      const subscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(subscription.customer as string);

      if (!("deleted" in customer) && customer.email) {
        await db.collection("subscriptions").doc(customer.email.toLowerCase()).update({
          trialEndingReminder: true,
          updatedAt: new Date(),
        });
        // TODO: Integrate with email service to send reminder
      }
      break;
    }

    case "customer.subscription.deleted": {
      // Subscription cancelled - REVOKE ACCESS
      const subscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(subscription.customer as string);

      if (!("deleted" in customer) && customer.email) {
        await db.collection("subscriptions").doc(customer.email.toLowerCase()).update({
          status: "canceled",
          canceledAt: new Date(),
          updatedAt: new Date(),
        });
      }
      break;
    }

    case "invoice.payment_succeeded": {
      // Payment successful - ensure access is active
      const invoice = event.data.object as Stripe.Invoice;
      const customer = await stripe.customers.retrieve(invoice.customer as string);

      if (!("deleted" in customer) && customer.email) {
        await db.collection("subscriptions").doc(customer.email.toLowerCase()).update({
          status: "active",
          lastPaymentSucceeded: new Date(),
          updatedAt: new Date(),
        });
      }
      break;
    }

    case "invoice.payment_failed": {
      // Payment failed - mark as past_due (access will be revoked on subscription.deleted)
      const invoice = event.data.object as Stripe.Invoice;
      const customer = await stripe.customers.retrieve(invoice.customer as string);

      if (!("deleted" in customer) && customer.email) {
        await db.collection("subscriptions").doc(customer.email.toLowerCase()).update({
          status: "past_due",
          lastPaymentFailed: new Date(),
          updatedAt: new Date(),
        });
        // TODO: Integrate with email service to notify about payment failure
      }
      break;
    }

    default:
      // Unhandled event type - log for debugging
      break;
  }

  return NextResponse.json({ received: true });
}
