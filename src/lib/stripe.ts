import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
  }
  return stripePromise;
};

// Price ID will be created in Stripe Dashboard
// For now, we'll use Checkout with price_data
export const STRIPE_PRICES = {
  PRO_MONTHLY: {
    amount: 2500, // $25.00 in cents
    currency: "usd",
    interval: "month" as const,
    productName: "LSATprep Pro",
    description: "Unlimited access to all LSAT prep features",
  },
};
