import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Find customers by email
    const customers = await stripe.customers.list({ email, limit: 1 });
    if (customers.data.length === 0) {
      return NextResponse.json({ hasActiveSubscription: false });
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

    return NextResponse.json({ hasActiveSubscription: false });
  } catch (error) {
    console.error("Error checking subscription:", error);
    return NextResponse.json(
      { error: "Failed to check subscription" },
      { status: 500 }
    );
  }
}
