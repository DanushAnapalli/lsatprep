import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { authenticateRequest, unauthorizedResponse } from "@/lib/auth-middleware";
import { isFounderEmail } from "@/lib/subscription-server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticateRequest(request);

    if (!authResult.authenticated || !authResult.user) {
      return unauthorizedResponse("Authentication required");
    }

    // Use the authenticated user's email, not from request body
    const userEmail = authResult.user.email;

    if (!userEmail) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    // Check founder status first
    if (isFounderEmail(userEmail)) {
      return NextResponse.json({
        hasActiveSubscription: true,
        tier: "founder",
        status: "founder",
        isTrialing: false,
        trialEnd: null,
        currentPeriodEnd: null,
        cancelAtPeriodEnd: false,
      });
    }

    // Find customers by email
    const customers = await stripe.customers.list({ email: userEmail, limit: 1 });
    if (customers.data.length === 0) {
      return NextResponse.json({ hasActiveSubscription: false, tier: "free" });
    }

    const customerId = customers.data[0].id;

    // Check for active/trialing subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "all",
    });

    const activeSubscription = subscriptions.data.find(
      (sub) => sub.status === "active" || sub.status === "trialing"
    );

    if (activeSubscription) {
      // Access subscription fields directly
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sub = activeSubscription as any;
      const currentPeriodEnd = sub.current_period_end;
      const cancelAtPeriodEnd = sub.cancel_at_period_end;
      const trialEnd = sub.trial_end;
      const isTrialing = activeSubscription.status === "trialing";

      return NextResponse.json({
        hasActiveSubscription: true,
        tier: "pro",
        subscriptionId: activeSubscription.id,
        customerId: customerId,
        status: activeSubscription.status,
        isTrialing,
        trialEnd: trialEnd
          ? new Date(trialEnd * 1000).toISOString()
          : null,
        currentPeriodEnd: currentPeriodEnd
          ? new Date(currentPeriodEnd * 1000).toISOString()
          : null,
        cancelAtPeriodEnd: cancelAtPeriodEnd || false,
      });
    }

    return NextResponse.json({ hasActiveSubscription: false, tier: "free" });
  } catch {
    return NextResponse.json(
      { error: "Failed to check subscription" },
      { status: 500 }
    );
  }
}
