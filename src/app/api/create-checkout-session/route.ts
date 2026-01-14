import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeServer } from "@/lib/stripe-server";
import { authenticateRequest, unauthorizedResponse } from "@/lib/auth-middleware";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!); // Replaced with lazy initialization

// 5-day free trial configuration
const TRIAL_PERIOD_DAYS = 5;

// Pricing configuration
const PRICING = {
  monthly: {
    amount: 2500, // $25.00 in cents
    interval: "month" as const,
    name: "LSATprep Pro (Monthly)",
    description: "Unlimited access to all LSAT prep features - billed monthly",
  },
  yearly: {
    amount: 22500, // $225.00 in cents ($18.75/month - save $75!)
    interval: "year" as const,
    name: "LSATprep Pro (Annual)",
    description: "Unlimited access to all LSAT prep features - billed annually (save $75!)",
  },
};

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    // Authenticate the request
    const authResult = await authenticateRequest(request);

    if (!authResult.authenticated || !authResult.user) {
      return unauthorizedResponse(authResult.error || "Authentication required");
    }

    const body = await request.json();
    const billingPeriod: "monthly" | "yearly" = body.billingPeriod === "yearly" ? "yearly" : "monthly";

    // Use authenticated user's data, not from request body
    const userId = authResult.user.uid;
    const userEmail = authResult.user.email;

    if (!userEmail) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    const pricing = PRICING[billingPeriod];

    // Use configured base URL, not origin header (security fix)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lsatprep.org';

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
      success_url: `${baseUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/subscription/cancel`,
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
      trialDays: TRIAL_PERIOD_DAYS,
      billingPeriod: billingPeriod,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
