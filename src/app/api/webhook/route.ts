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
  } catch {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      // Store subscription in Firebase (you can expand this)
      // For now, the client will verify the session and update localStorage
      break;
    }

    case "customer.subscription.created": {
      // Subscription created - trial or direct subscription
      break;
    }

    case "customer.subscription.updated": {
      // Handle trial ending and converting to paid, status changes, etc.
      break;
    }

    case "customer.subscription.trial_will_end": {
      // Sent 3 days before trial ends
      // TODO: Send reminder email to user about trial ending
      break;
    }

    case "customer.subscription.deleted": {
      // Subscription cancelled
      // TODO: Revoke access for user
      break;
    }

    case "invoice.payment_succeeded": {
      // This fires when trial ends and first payment is collected
      break;
    }

    case "invoice.payment_failed": {
      // TODO: Handle failed payment (send email, revoke access after grace period)
      break;
    }

    default:
      // Unhandled event type
      break;
  }

  return NextResponse.json({ received: true });
}
