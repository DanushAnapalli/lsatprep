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
      return unauthorizedResponse("Authentication required");
    }

    const { customerId } = await request.json();

    if (!customerId) {
      return NextResponse.json(
        { error: "Customer ID is required" },
        { status: 400 }
      );
    }

    // Verify the customer belongs to the authenticated user
    const customer = await stripe.customers.retrieve(customerId);

    // Type guard for deleted customer
    if ("deleted" in customer && customer.deleted) {
      return forbiddenResponse("Customer not found");
    }

    // Verify email matches authenticated user
    if (customer.email?.toLowerCase() !== authResult.user.email?.toLowerCase()) {
      return forbiddenResponse("Customer does not belong to this user");
    }

    // Create a billing portal session
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lsatprep.org';
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${baseUrl}/subscription`,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to create portal session" },
      { status: 500 }
    );
  }
}
