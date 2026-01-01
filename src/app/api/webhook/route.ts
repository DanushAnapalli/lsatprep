import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

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
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const customerEmail = session.customer_email;

      console.log(`Checkout completed for user: ${userId}, email: ${customerEmail}`);

      // Store subscription in Firebase (you can expand this)
      // For now, the client will verify the session and update localStorage
      break;
    }

    case "customer.subscription.created": {
      const subscription = event.data.object as Stripe.Subscription;
      const userId = subscription.metadata?.userId;

      if (subscription.status === "trialing") {
        console.log(`Trial started for user: ${userId}, subscription: ${subscription.id}`);
        console.log(`Trial ends: ${new Date((subscription.trial_end || 0) * 1000).toISOString()}`);
      } else {
        console.log(`Subscription created for user: ${userId}, subscription: ${subscription.id}`);
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const userId = subscription.metadata?.userId;

      console.log(`Subscription updated: ${subscription.id}, status: ${subscription.status}`);

      // Handle trial ending and converting to paid
      if (subscription.status === "active" && !subscription.trial_end) {
        console.log(`Trial converted to paid subscription for user: ${userId}`);
      }
      break;
    }

    case "customer.subscription.trial_will_end": {
      // Sent 3 days before trial ends
      const subscription = event.data.object as Stripe.Subscription;
      const userId = subscription.metadata?.userId;
      const trialEnd = subscription.trial_end;

      console.log(`Trial ending soon for user: ${userId}`);
      console.log(`Trial ends: ${new Date((trialEnd || 0) * 1000).toISOString()}`);

      // TODO: Send reminder email to user about trial ending
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const userId = subscription.metadata?.userId;

      console.log(`Subscription cancelled: ${subscription.id}, user: ${userId}`);

      // TODO: Revoke access for user
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice & { subscription?: string | Stripe.Subscription };
      const subscriptionId = typeof invoice.subscription === 'string'
        ? invoice.subscription
        : invoice.subscription?.id;

      // This fires when trial ends and first payment is collected
      if (invoice.billing_reason === "subscription_cycle") {
        console.log(`First payment collected after trial for subscription: ${subscriptionId}`);
      }
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice & { subscription?: string | Stripe.Subscription };
      const subscriptionId = typeof invoice.subscription === 'string'
        ? invoice.subscription
        : invoice.subscription?.id;

      console.log(`Payment failed for subscription: ${subscriptionId}`);

      // TODO: Handle failed payment (send email, revoke access after grace period)
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
