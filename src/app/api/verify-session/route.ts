import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeServer } from "@/lib/stripe-server";
import { authenticateRequest, unauthorizedResponse } from "@/lib/auth-middleware";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!); // Replaced with lazy initialization

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    // Authenticate the request
    const authResult = await authenticateRequest(request);

    if (!authResult.authenticated || !authResult.user) {
      return unauthorizedResponse(authResult.error || "Authentication required");
    }

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

    // Verify the session belongs to the authenticated user
    if (session.customer_email?.toLowerCase() !== authResult.user.email?.toLowerCase()) {
      return NextResponse.json(
        { error: "Session does not belong to this user" },
        { status: 403 }
      );
    }

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

      // Get customer ID from session
      const customerId = typeof session.customer === "string"
        ? session.customer
        : session.customer?.id || null;

      // Get current period end from subscription
      const subData = subscription as unknown as { current_period_end?: number };
      const currentPeriodEnd = subData?.current_period_end
        ? new Date(subData.current_period_end * 1000).toISOString()
        : null;

      return NextResponse.json({
        success: true,
        userId: session.metadata?.userId,
        customerEmail: session.customer_email,
        customerId,
        subscriptionId:
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription?.id,
        isTrialing,
        trialEnd,
        subscriptionStatus: subscription?.status,
        currentPeriodEnd,
        billingPeriod: session.metadata?.billingPeriod || "monthly",
      });
    }

    return NextResponse.json({
      success: false,
      error: "Payment not completed",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to verify session" },
      { status: 500 }
    );
  }
}
