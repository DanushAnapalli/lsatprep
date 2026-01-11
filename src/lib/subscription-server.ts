// Server-side subscription verification
// Uses Firestore to check subscription status (updated by webhooks)

import { getAdminDb } from "./firebase-admin";

export type SubscriptionTier = "free" | "pro" | "founder";

export interface ServerSubscriptionStatus {
  hasActiveSubscription: boolean;
  tier: SubscriptionTier;
  status: string | null;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  customerId: string | null;
  subscriptionId: string | null;
}

// Founder emails - server-side only, not exposed to client
const FOUNDER_EMAILS = new Set([
  "adigamesacc12@gmail.com",
  // Add more founder emails here as needed
]);

// Check if an email is a founder
export function isFounderEmail(email: string | null): boolean {
  if (!email) return false;
  return FOUNDER_EMAILS.has(email.toLowerCase());
}

// Get subscription status from Firestore (set by webhooks)
export async function getServerSubscriptionStatus(
  email: string | null
): Promise<ServerSubscriptionStatus> {
  const defaultStatus: ServerSubscriptionStatus = {
    hasActiveSubscription: false,
    tier: "free",
    status: null,
    currentPeriodEnd: null,
    cancelAtPeriodEnd: false,
    customerId: null,
    subscriptionId: null,
  };

  if (!email) {
    return defaultStatus;
  }

  const normalizedEmail = email.toLowerCase();

  // Check founder status first
  if (isFounderEmail(normalizedEmail)) {
    return {
      hasActiveSubscription: true,
      tier: "founder",
      status: "founder",
      currentPeriodEnd: null,
      cancelAtPeriodEnd: false,
      customerId: null,
      subscriptionId: null,
    };
  }

  // Check Firestore subscription record
  try {
    const db = getAdminDb();
    const subDoc = await db.collection("subscriptions").doc(normalizedEmail).get();

    if (!subDoc.exists) {
      return defaultStatus;
    }

    const data = subDoc.data()!;
    const isActive = data.status === "active" || data.status === "trialing";

    return {
      hasActiveSubscription: isActive,
      tier: isActive ? "pro" : "free",
      status: data.status || null,
      currentPeriodEnd: data.currentPeriodEnd?.toDate() || null,
      cancelAtPeriodEnd: data.cancelAtPeriodEnd || false,
      customerId: data.customerId || null,
      subscriptionId: data.subscriptionId || null,
    };
  } catch {
    // Fallback to free on error
    return defaultStatus;
  }
}
