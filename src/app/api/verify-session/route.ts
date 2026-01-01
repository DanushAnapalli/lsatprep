import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription"],
    });

    // For trial subscriptions, payment_status is "no_payment_required"
    // For regular subscriptions, payment_status is "paid"
    const isValidPayment =
      session.payment_status === "paid" ||
      session.payment_status === "no_payment_required";

    if (isValidPayment) {
      // Check if this is a trial subscription
      const subscription = session.subscription as Stripe.Subscription | null;
      const isTrialing = subscription?.status === "trialing";
      const trialEnd = subscription?.trial_end;

      return NextResponse.json({
        success: true,
        userId: session.metadata?.userId,
        customerEmail: session.customer_email,
        subscriptionId:
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription?.id,
        isTrialing,
        trialEnd,
        subscriptionStatus: subscription?.status,
      });
    }

    return NextResponse.json({
      success: false,
      error: "Payment not completed",
    });
  } catch (error) {
    console.error("Error verifying session:", error);
    return NextResponse.json(
      { error: "Failed to verify session" },
      { status: 500 }
    );
  }
}
