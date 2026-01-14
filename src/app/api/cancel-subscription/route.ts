import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeServer } from "@/lib/stripe-server";
import { authenticateRequest, unauthorizedResponse, forbiddenResponse } from "@/lib/auth-middleware";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!); // Replaced with lazy initialization

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    // Authenticate the request
    const authResult = await authenticateRequest(request);

    if (!authResult.authenticated || !authResult.user) {
      return unauthorizedResponse(authResult.error || "Authentication required");
    }

    const { subscriptionId } = await request.json();

    if (!subscriptionId) {
      return NextResponse.json(
        { error: "Subscription ID is required" },
        { status: 400 }
      );
    }

    // Verify the subscription belongs to the authenticated user
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const customer = await stripe.customers.retrieve(subscription.customer as string);

    // Type guard for deleted customer
    if ("deleted" in customer && customer.deleted) {
      return forbiddenResponse("Customer not found");
    }

    // Verify email matches authenticated user
    if (customer.email?.toLowerCase() !== authResult.user.email?.toLowerCase()) {
      return forbiddenResponse("Subscription does not belong to this user");
    }

    // Cancel the subscription at period end (user keeps access until end of billing period)
    const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });

    // Get the current period end timestamp
    const currentPeriodEnd = (updatedSubscription as unknown as { current_period_end?: number }).current_period_end;

    return NextResponse.json({
      success: true,
      subscription: {
        id: updatedSubscription.id,
        status: updatedSubscription.status,
        cancelAtPeriodEnd: updatedSubscription.cancel_at_period_end,
        currentPeriodEnd: currentPeriodEnd
          ? new Date(currentPeriodEnd * 1000).toISOString()
          : null,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to cancel subscription" },
      { status: 500 }
    );
  }
}
