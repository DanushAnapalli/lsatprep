import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// 5-day free trial configuration
const TRIAL_PERIOD_DAYS = 5;

// Pricing configuration
const PRICING = {
  monthly: {
    amount: 1500, // $15.00 in cents
    interval: "month" as const,
    name: "LSATprep Pro (Monthly)",
    description: "Unlimited access to all LSAT prep features - billed monthly",
  },
  yearly: {
    amount: 13500, // $135.00 in cents
    interval: "year" as const,
    name: "LSATprep Pro (Annual)",
    description: "Unlimited access to all LSAT prep features - billed annually (save $45!)",
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userId = body.userId;
    const userEmail = body.userEmail;
    const billingPeriod: "monthly" | "yearly" = body.billingPeriod === "yearly" ? "yearly" : "monthly";

    if (!userId || !userEmail) {
      return NextResponse.json(
        { error: "User ID and email are required" },
        { status: 400 }
      );
    }

    const pricing = PRICING[billingPeriod];

    // Create Checkout Session with subscription and 5-day free trial
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: userEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: pricing.name,
              description: pricing.description,
            },
            unit_amount: pricing.amount,
            recurring: {
              interval: pricing.interval,
            },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: TRIAL_PERIOD_DAYS,
        metadata: {
          userId: userId,
          billingPeriod: billingPeriod,
        },
      },
      metadata: {
        userId: userId,
        billingPeriod: billingPeriod,
      },
      // Collect payment method upfront for post-trial billing
      payment_method_collection: "always",
      success_url: `${request.headers.get("origin")}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/subscription/cancel`,
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
      trialDays: TRIAL_PERIOD_DAYS,
      billingPeriod: billingPeriod,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to create checkout session: ${errorMessage}` },
      { status: 500 }
    );
  }
}
