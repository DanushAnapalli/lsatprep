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
      // Type assertion needed for Stripe SDK compatibility
      const subData = activeSubscription as unknown as {
        current_period_end?: number;
        cancel_at_period_end?: boolean;
      };

      return NextResponse.json({
        hasActiveSubscription: true,
        subscriptionId: activeSubscription.id,
        customerId: customerId,
        status: activeSubscription.status,
        currentPeriodEnd: subData.current_period_end
          ? new Date(subData.current_period_end * 1000).toISOString()
          : null,
        cancelAtPeriodEnd: subData.cancel_at_period_end || false,
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
