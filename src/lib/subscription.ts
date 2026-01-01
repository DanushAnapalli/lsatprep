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

// Check if user is a founder based on email
export function isFounder(user: User | null): boolean {
  if (!user?.email) return false;
  return FOUNDER_EMAILS.includes(user.email.toLowerCase());
}

// Get user's subscription tier
export function getUserTier(user: User | null): SubscriptionTier {
  // Founders always get founder tier
  if (isFounder(user)) {
    return "founder";
  }

  // Check localStorage for pro subscription (for demo/dev purposes)
  // In production, this would check a payment provider or database
  if (typeof window !== "undefined") {
    const storedTier = localStorage.getItem("lsatprep-subscription-tier");
    if (storedTier === "pro") {
      return "pro";
    }
  }

  return "free";
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

    // Calculate days left
    const msLeft = endDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(msLeft / (1000 * 60 * 60 * 24));

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
