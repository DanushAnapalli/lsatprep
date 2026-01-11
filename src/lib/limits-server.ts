// Server-side test limits checking
// Uses Firestore to track completed tests (cannot be bypassed)

import { getAdminDb } from "./firebase-admin";
import { isFounderEmail, getServerSubscriptionStatus } from "./subscription-server";
import { logger } from "./logger";

export interface TestCounts {
  lrCompleted: number;
  rcCompleted: number;
  fullCompleted: number;
  lastUpdated: Date | null;
}

export interface LimitCheckResult {
  canStart: boolean;
  reason?: string;
  tier: "free" | "pro" | "founder";
  lrRemaining: number;
  rcRemaining: number;
  lrCompleted: number;
  rcCompleted: number;
  error?: boolean; // Indicates if there was a server error (client should use fallback)
}

// Free tier limits
const FREE_LR_LIMIT = 3;
const FREE_RC_LIMIT = 3;

/**
 * Get the user's completed test counts from Firestore
 * Throws on error so caller can handle gracefully
 */
export async function getUserTestCounts(email: string | null): Promise<TestCounts> {
  if (!email) {
    return { lrCompleted: 0, rcCompleted: 0, fullCompleted: 0, lastUpdated: null };
  }

  const db = getAdminDb();
  const docRef = db.collection("userTestCounts").doc(email.toLowerCase());
  const doc = await docRef.get();

  if (!doc.exists) {
    return { lrCompleted: 0, rcCompleted: 0, fullCompleted: 0, lastUpdated: null };
  }

  const data = doc.data();
  return {
    lrCompleted: data?.lrCompleted || 0,
    rcCompleted: data?.rcCompleted || 0,
    fullCompleted: data?.fullCompleted || 0,
    lastUpdated: data?.lastUpdated?.toDate() || null,
  };
}

/**
 * Increment test count when a user completes a test
 * Called from the practice page after test completion
 */
export async function incrementTestCount(
  email: string,
  testType: "lr" | "rc" | "full"
): Promise<boolean> {
  if (!email) {
    return false;
  }

  try {
    const db = getAdminDb();
    const docRef = db.collection("userTestCounts").doc(email.toLowerCase());
    const doc = await docRef.get();

    const currentData = doc.exists ? doc.data() : {};
    const now = new Date();

    const updateData: Record<string, unknown> = {
      lastUpdated: now,
    };

    if (testType === "lr" || testType === "full") {
      updateData.lrCompleted = (currentData?.lrCompleted || 0) + 1;
    }
    if (testType === "rc" || testType === "full") {
      updateData.rcCompleted = (currentData?.rcCompleted || 0) + 1;
    }
    if (testType === "full") {
      updateData.fullCompleted = (currentData?.fullCompleted || 0) + 1;
    }

    await docRef.set(updateData, { merge: true });
    return true;
  } catch (error) {
    logger.error("Error incrementing test count:", error);
    return false;
  }
}

/**
 * Check if user can start a specific test type
 * This is the main function called by the check-limits API
 */
export async function checkUserLimits(
  email: string | null,
  testType: "lr-only" | "rc-only" | "full" | "improvement" | "targeted" | "custom"
): Promise<LimitCheckResult> {
  try {
    // Improvement and targeted tests don't count against limits
    if (testType === "improvement" || testType === "targeted" || testType === "custom") {
      return {
        canStart: true,
        tier: "free",
        lrRemaining: Infinity,
        rcRemaining: Infinity,
        lrCompleted: 0,
        rcCompleted: 0,
      };
    }

    // Check if founder (unlimited access)
    if (isFounderEmail(email)) {
      return {
        canStart: true,
        tier: "founder",
        lrRemaining: Infinity,
        rcRemaining: Infinity,
        lrCompleted: 0,
        rcCompleted: 0,
      };
    }

    // Check subscription status
    const subscription = await getServerSubscriptionStatus(email);
    if (subscription.hasActiveSubscription) {
      return {
        canStart: true,
        tier: "pro",
        lrRemaining: Infinity,
        rcRemaining: Infinity,
        lrCompleted: 0,
        rcCompleted: 0,
      };
    }

    // Free user - check limits
    const counts = await getUserTestCounts(email);
    const lrRemaining = Math.max(0, FREE_LR_LIMIT - counts.lrCompleted);
    const rcRemaining = Math.max(0, FREE_RC_LIMIT - counts.rcCompleted);

    // Check specific test type limits
    let canStart = true;
    let reason: string | undefined;

    if (testType === "lr-only" && lrRemaining <= 0) {
      canStart = false;
      reason = "You've reached your free limit of 3 LR practice sets. Upgrade to Pro for unlimited practice!";
    } else if (testType === "rc-only" && rcRemaining <= 0) {
      canStart = false;
      reason = "You've reached your free limit of 3 RC practice sets. Upgrade to Pro for unlimited practice!";
    } else if (testType === "full" && (lrRemaining <= 0 || rcRemaining <= 0)) {
      canStart = false;
      reason = "You've reached your free practice limit. Upgrade to Pro for unlimited full practice tests!";
    }

    return {
      canStart,
      reason,
      tier: "free",
      lrRemaining,
      rcRemaining,
      lrCompleted: counts.lrCompleted,
      rcCompleted: counts.rcCompleted,
    };
  } catch (error) {
    // On any error, return error flag so client uses fallback
    logger.error("Error checking user limits:", error);
    return {
      canStart: false,
      error: true,
      reason: "Unable to verify limits. Please try again.",
      tier: "free",
      lrRemaining: 0,
      rcRemaining: 0,
      lrCompleted: 0,
      rcCompleted: 0,
    };
  }
}
