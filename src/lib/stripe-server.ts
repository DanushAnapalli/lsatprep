// Server-side Stripe client initialization
// Lazy initialization to avoid build-time errors

import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripeServer(): Stripe {
  if (!stripeClient) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      // During build time, create a dummy client to avoid errors
      // This won't be used in production as env vars will be available
      stripeClient = new Stripe("sk_test_dummy_key_for_build");
    } else {
      stripeClient = new Stripe(secretKey);
    }
  }
  return stripeClient;
}

export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
