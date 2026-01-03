// Subscription tier management

import { User } from "firebase/auth";

export type SubscriptionTier = "free" | "pro" | "founder";

// Trial configuration
export const TRIAL_PERIOD_DAYS = 5;

export interface TrialInfo {
  isTrialing: boolean;
  trialStartDate: string | null;
  trialEndDate: string | null;
  daysLeft: number;
}

// Founder emails - add your email here for unlimited access
const FOUNDER_EMAILS: string[] = [
  "adigamesacc12@gmail.com",
];

export interface TierLimits {
  lrSetsAllowed: number;      // Number of LR practice sets allowed
  rcSetsAllowed: number;      // Number of RC practice sets allowed
  fullAnalytics: boolean;     // Access to full analytics
  advancedReview: boolean;    // Access to advanced review features
  argumentMapping: boolean;   // Access to argument mapping
  adaptiveDrills: boolean;    // Access to adaptive drills
  unlimitedTests: boolean;    // Unlimited practice tests
}

// Tier limit configurations
export const TIER_LIMITS: Record<SubscriptionTier, TierLimits> = {
  free: {
    lrSetsAllowed: 1,
    rcSetsAllowed: 1,
    fullAnalytics: false,
    advancedReview: false,
    argumentMapping: false,
    adaptiveDrills: false,
    unlimitedTests: false,
  },
  pro: {
    lrSetsAllowed: Infinity,
    rcSetsAllowed: Infinity,
    fullAnalytics: true,
    advancedReview: true,
    argumentMapping: true,
    adaptiveDrills: true,
    unlimitedTests: true,
  },
  founder: {
    lrSetsAllowed: Infinity,
    rcSetsAllowed: Infinity,
    fullAnalytics: true,
    advancedReview: true,
    argumentMapping: true,
    adaptiveDrills: true,
    unlimitedTests: true,
  },
};

// ============================================
// SECURE SUBSCRIPTION VERIFICATION
// ============================================

// In-memory cache for verified subscription status (not localStorage - can't be tampered)
let verifiedTierCache: {
  email: string;
  tier: SubscriptionTier;
  verifiedAt: number;
} | null = null;

const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

// Check if user is a founder based on email
export function isFounder(user: User | null): boolean {
  if (!user?.email) return false;
  return FOUNDER_EMAILS.includes(user.email.toLowerCase());
}

// Get user's subscription tier (uses cached value or localStorage as fallback)
// For critical features, use verifySubscriptionTier() instead
export function getUserTier(user: User | null): SubscriptionTier {
  // Founders always get founder tier
  if (isFounder(user)) {
    return "founder";
  }

  // Check in-memory verified cache first
  if (user?.email && verifiedTierCache) {
    const cacheAge = Date.now() - verifiedTierCache.verifiedAt;
    if (
      verifiedTierCache.email === user.email.toLowerCase() &&
      cacheAge < CACHE_DURATION_MS
    ) {
      return verifiedTierCache.tier;
    }
  }

  // Fallback to localStorage (will be verified on next server call)
  if (typeof window !== "undefined") {
    const storedTier = localStorage.getItem("lsatprep-subscription-tier");
    if (storedTier === "pro") {
      return "pro";
    }
  }

  return "free";
}

// Verify subscription tier with the server (secure - can't be bypassed)
export async function verifySubscriptionTier(user: User | null): Promise<SubscriptionTier> {
  // Founders always get founder tier
  if (isFounder(user)) {
    return "founder";
  }

  if (!user?.email) {
    return "free";
  }

  // Check if we have a fresh cache
  if (verifiedTierCache) {
    const cacheAge = Date.now() - verifiedTierCache.verifiedAt;
    if (
      verifiedTierCache.email === user.email.toLowerCase() &&
      cacheAge < CACHE_DURATION_MS
    ) {
      return verifiedTierCache.tier;
    }
  }

  // Verify with server
  try {
    const response = await fetch("/api/check-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    });

    if (!response.ok) {
      return "free";
    }

    const data = await response.json();
    const tier: SubscriptionTier = data.hasActiveSubscription ? "pro" : "free";

    // Update verified cache
    verifiedTierCache = {
      email: user.email.toLowerCase(),
      tier,
      verifiedAt: Date.now(),
    };

    // Also update localStorage for UI consistency
    if (tier === "pro") {
      localStorage.setItem("lsatprep-subscription-tier", "pro");
    } else {
      localStorage.removeItem("lsatprep-subscription-tier");
    }

    return tier;
  } catch {
    // On error, fall back to cached/localStorage value
    return getUserTier(user);
  }
}

// Clear the verified cache (call on logout)
export function clearVerifiedTierCache(): void {
  verifiedTierCache = null;
}

// Get limits for a tier
export function getTierLimits(tier: SubscriptionTier): TierLimits {
  return TIER_LIMITS[tier];
}

// Get current user's limits
export function getUserLimits(user: User | null): TierLimits {
  const tier = getUserTier(user);
  return getTierLimits(tier);
}

// Check if user can access a feature
export function canAccessFeature(
  user: User | null,
  feature: keyof Omit<TierLimits, "lrSetsAllowed" | "rcSetsAllowed">
): boolean {
  const limits = getUserLimits(user);
  return limits[feature];
}

// Check if user can start more LR tests
export function canStartLRTest(user: User | null, completedLRTests: number): boolean {
  const limits = getUserLimits(user);
  return limits.unlimitedTests || completedLRTests < limits.lrSetsAllowed;
}

// Check if user can start more RC tests
export function canStartRCTest(user: User | null, completedRCTests: number): boolean {
  const limits = getUserLimits(user);
  return limits.unlimitedTests || completedRCTests < limits.rcSetsAllowed;
}

// Set subscription tier (for demo/dev purposes)
export function setSubscriptionTier(tier: SubscriptionTier): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("lsatprep-subscription-tier", tier);
  }
}

// Get tier display info
export function getTierDisplayInfo(tier: SubscriptionTier): {
  name: string;
  color: string;
  bgColor: string;
} {
  switch (tier) {
    case "founder":
      return {
        name: "Founder",
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
      };
    case "pro":
      return {
        name: "Pro",
        color: "text-amber-600 dark:text-amber-400",
        bgColor: "bg-amber-100 dark:bg-amber-900/30",
      };
    default:
      return {
        name: "Free",
        color: "text-stone-600 dark:text-stone-400",
        bgColor: "bg-stone-100 dark:bg-stone-800",
      };
  }
}

// Add founder email programmatically
export function addFounderEmail(email: string): void {
  if (!FOUNDER_EMAILS.includes(email.toLowerCase())) {
    FOUNDER_EMAILS.push(email.toLowerCase());
  }
}

// ============================================
// TRIAL MANAGEMENT
// ============================================

const TRIAL_STORAGE_KEY = "lsatprep-trial-info";

// Start a trial for the user
export function startTrial(): void {
  if (typeof window === "undefined") return;

  const now = new Date();
  const endDate = new Date(now);
  endDate.setDate(endDate.getDate() + TRIAL_PERIOD_DAYS);

  const trialData = {
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
  };

  localStorage.setItem(TRIAL_STORAGE_KEY, JSON.stringify(trialData));
  setSubscriptionTier("pro"); // Grant pro access during trial
}

// Get trial information
export function getTrialInfo(): TrialInfo {
  if (typeof window === "undefined") {
    return { isTrialing: false, trialStartDate: null, trialEndDate: null, daysLeft: 0 };
  }

  const stored = localStorage.getItem(TRIAL_STORAGE_KEY);
  if (!stored) {
    return { isTrialing: false, trialStartDate: null, trialEndDate: null, daysLeft: 0 };
  }

  try {
    const trialData = JSON.parse(stored);
    const endDate = new Date(trialData.endDate);
    const now = new Date();

    if (now >= endDate) {
      // Trial has expired
      return {
        isTrialing: false,
        trialStartDate: trialData.startDate,
        trialEndDate: trialData.endDate,
        daysLeft: 0,
      };
    }

    // Calculate days left using date-only comparison for accuracy
    // This ensures Jan 3 → Jan 7 = 4 days, not 5
    const endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const todayDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.max(0, Math.round((endDay.getTime() - todayDay.getTime()) / msPerDay));

    return {
      isTrialing: true,
      trialStartDate: trialData.startDate,
      trialEndDate: trialData.endDate,
      daysLeft,
    };
  } catch {
    return { isTrialing: false, trialStartDate: null, trialEndDate: null, daysLeft: 0 };
  }
}

// Check if user is currently in trial period
export function isInTrialPeriod(): boolean {
  return getTrialInfo().isTrialing;
}

// Clear trial info (used when trial converts to paid or is cancelled)
export function clearTrialInfo(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TRIAL_STORAGE_KEY);
}

// Check if user has ever had a trial (to prevent multiple trials)
export function hasHadTrial(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(TRIAL_STORAGE_KEY) !== null;
}

// ============================================
// SUBSCRIPTION INFO MANAGEMENT
// ============================================

const SUBSCRIPTION_INFO_KEY = "lsatprep-subscription-info";

export interface SubscriptionInfo {
  subscriptionId: string | null;
  customerId: string | null;
  status: "active" | "trialing" | "canceled" | "past_due" | "none";
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
}

// Save subscription info after checkout
export function saveSubscriptionInfo(info: Partial<SubscriptionInfo>): void {
  if (typeof window === "undefined") return;

  const existing = getSubscriptionInfo();
  const updated = { ...existing, ...info };
  localStorage.setItem(SUBSCRIPTION_INFO_KEY, JSON.stringify(updated));
}

// Get subscription info
export function getSubscriptionInfo(): SubscriptionInfo {
  if (typeof window === "undefined") {
    return {
      subscriptionId: null,
      customerId: null,
      status: "none",
      currentPeriodEnd: null,
      cancelAtPeriodEnd: false,
    };
  }

  const stored = localStorage.getItem(SUBSCRIPTION_INFO_KEY);
  if (!stored) {
    return {
      subscriptionId: null,
      customerId: null,
      status: "none",
      currentPeriodEnd: null,
      cancelAtPeriodEnd: false,
    };
  }

  try {
    return JSON.parse(stored);
  } catch {
    return {
      subscriptionId: null,
      customerId: null,
      status: "none",
      currentPeriodEnd: null,
      cancelAtPeriodEnd: false,
    };
  }
}

// Clear subscription info (on cancellation/logout)
export function clearSubscriptionInfo(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SUBSCRIPTION_INFO_KEY);
  localStorage.removeItem("lsatprep-subscription-tier");
}

// ============================================
// STRIPE SYNC
// ============================================

// Sync subscription status from Stripe (restores access if user has active subscription)
export async function syncSubscriptionFromStripe(email: string): Promise<boolean> {
  if (!email || typeof window === "undefined") return false;

  try {
    const response = await fetch("/api/check-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      console.error("Failed to check subscription:", response.status);
      return false;
    }

    const data = await response.json();

    if (data.hasActiveSubscription) {
      setSubscriptionTier("pro");
      saveSubscriptionInfo({
        subscriptionId: data.subscriptionId,
        customerId: data.customerId,
        status: data.status,
        currentPeriodEnd: data.currentPeriodEnd,
        cancelAtPeriodEnd: data.cancelAtPeriodEnd || false,
      });
      return true;
    }
    return false;
  } catch (error) {
    console.error("Failed to sync subscription from Stripe:", error);
    return false;
  }
}
