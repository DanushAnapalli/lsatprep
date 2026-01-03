"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, Loader2, Calendar } from "lucide-react";
import { setSubscriptionTier, startTrial, saveSubscriptionInfo, TRIAL_PERIOD_DAYS } from "@/lib/subscription";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTrialStart, setIsTrialStart] = useState(false);
  const [trialEndDate, setTrialEndDate] = useState<string>("");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      setError("No session ID found");
      setVerifying(false);
      return;
    }

    const verifySession = async () => {
      try {
        const response = await fetch("/api/verify-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        const data = await response.json();

        if (data.success) {
          // Save subscription info for billing portal access
          saveSubscriptionInfo({
            subscriptionId: data.subscriptionId,
            customerId: data.customerId,
            status: data.isTrialing ? "trialing" : "active",
            currentPeriodEnd: data.currentPeriodEnd,
            cancelAtPeriodEnd: false,
          });

          // Check if this is a trial subscription
          if (data.isTrialing) {
            setIsTrialStart(true);
            startTrial(); // Start local trial tracking
            if (data.trialEnd) {
              const endDate = new Date(data.trialEnd * 1000);
              setTrialEndDate(endDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              }));
            }
          } else {
            setSubscriptionTier("pro");
          }
          setVerifying(false);
        } else {
          setError(data.error || "Verification failed");
          setVerifying(false);
        }
      } catch (err) {
        console.error("Verification error:", err);
        setError("Failed to verify payment");
        setVerifying(false);
      }
    };

    verifySession();
  }, [searchParams]);

  if (verifying) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-amber-600 mx-auto mb-4" />
          <p className="text-stone-600 dark:text-stone-400">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-red-600 dark:text-red-400">!</span>
          </div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            Something went wrong
          </h1>
          <p className="text-stone-600 dark:text-stone-400 mb-6">{error}</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-md font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Trial success view
  if (isTrialStart) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            Your Free Trial Has Started
          </h1>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Enjoy {TRIAL_PERIOD_DAYS} days of unlimited access to all Pro features.
          </p>

          {/* Trial info box */}
          <div className="mb-6 p-4 rounded-md bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="font-medium text-amber-800 dark:text-amber-300">
                Trial ends {trialEndDate || `in ${TRIAL_PERIOD_DAYS} days`}
              </span>
            </div>
            <p className="text-xs text-amber-600 dark:text-amber-400">
              You&apos;ll be charged $15/month after your trial ends. Cancel anytime.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => router.push("/practice")}
              className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium transition-colors"
            >
              Start Practicing Now
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full px-6 py-3 bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-md font-medium hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Regular subscription success view
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          Welcome to Pro
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          Your subscription is now active. You have unlimited access to all LSAT prep features.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => router.push("/practice")}
            className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium transition-colors"
          >
            Start Practicing
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full px-6 py-3 bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-md font-medium hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SubscriptionSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-amber-600 mx-auto mb-4" />
            <p className="text-stone-600 dark:text-stone-400">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
