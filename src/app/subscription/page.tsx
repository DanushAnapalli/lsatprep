"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getTierDisplayInfo, getSubscriptionInfo, saveSubscriptionInfo, SubscriptionInfo, syncSubscriptionFromStripe, verifySubscriptionTier } from "@/lib/subscription";
import { authenticatedFetch } from "@/lib/auth-client";
import { Check, Crown, Loader2, ArrowLeft, Calendar, CreditCard, ExternalLink, RefreshCw } from "lucide-react";

const TRIAL_DAYS = 5;

export default function SubscriptionPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [currentTier, setCurrentTier] = useState<"free" | "pro" | "founder">("free");
  const [trialInfo, setTrialInfo] = useState<{ isTrialing: boolean; daysLeft: number; trialEndDate: string | null } | null>(null);
  const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfo | null>(null);
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [restoreMessage, setRestoreMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      setUser(nextUser);

      if (!nextUser) {
        setSubscriptionInfo(getSubscriptionInfo());
        setTrialInfo({ isTrialing: false, daysLeft: 0, trialEndDate: null });
        setLoading(false);
        return;
      }

      setLoading(true);
      const tier = await verifySubscriptionTier(nextUser);
      setCurrentTier(tier);

      // For Pro users, sync subscription info from Stripe to get accurate dates
      if (tier === "pro" || tier === "founder") {
        try {
          const response = await authenticatedFetch("/api/check-subscription", {
            method: "POST",
          });

          if (response.ok) {
            const data = await response.json();
            if (data.hasActiveSubscription) {
              const updatedInfo: SubscriptionInfo = {
                subscriptionId: data.subscriptionId,
                customerId: data.customerId,
                status: data.status,
                currentPeriodEnd: data.currentPeriodEnd,
                cancelAtPeriodEnd: data.cancelAtPeriodEnd || false,
              };
              saveSubscriptionInfo(updatedInfo);
              setSubscriptionInfo(updatedInfo);

              // Calculate accurate trial info from Stripe data
              if (data.isTrialing && data.trialEnd) {
                const trialEndDate = new Date(data.trialEnd);
                const now = new Date();
                // Use date-only comparison to get accurate day count
                // This ensures Jan 3 → Jan 7 = 4 days, not 5
                const endDay = new Date(trialEndDate.getFullYear(), trialEndDate.getMonth(), trialEndDate.getDate());
                const todayDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const msPerDay = 1000 * 60 * 60 * 24;
                const daysLeft = Math.max(0, Math.round((endDay.getTime() - todayDay.getTime()) / msPerDay));
                setTrialInfo({
                  isTrialing: true,
                  daysLeft,
                  trialEndDate: data.trialEnd,
                });
              } else {
                setTrialInfo({ isTrialing: false, daysLeft: 0, trialEndDate: null });
              }
            } else {
              setSubscriptionInfo(getSubscriptionInfo());
              setTrialInfo({ isTrialing: false, daysLeft: 0, trialEndDate: null });
            }
          } else {
            setSubscriptionInfo(getSubscriptionInfo());
            setTrialInfo({ isTrialing: false, daysLeft: 0, trialEndDate: null });
          }
        } catch {
          setSubscriptionInfo(getSubscriptionInfo());
          setTrialInfo({ isTrialing: false, daysLeft: 0, trialEndDate: null });
        }
      } else {
        setSubscriptionInfo(getSubscriptionInfo());
        setTrialInfo({ isTrialing: false, daysLeft: 0, trialEndDate: null });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleUpgrade = async () => {
    if (!user) {
      router.push("/");
      return;
    }

    setCheckoutLoading(true);

    try {
      const response = await authenticatedFetch("/api/create-checkout-session", {
        method: "POST",
        body: JSON.stringify({
          billingPeriod: billingPeriod,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        alert(`Failed to start checkout: ${data.error || "Unknown error"}`);
        setCheckoutLoading(false);
        return;
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("No checkout URL received. Please try again.");
        setCheckoutLoading(false);
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
      setCheckoutLoading(false);
    }
  };

  const handleManagePayment = async () => {
    if (!subscriptionInfo?.customerId) {
      alert("No billing information found. Please contact support if you believe this is an error.");
      return;
    }

    setIsLoadingPortal(true);
    try {
      const response = await authenticatedFetch("/api/customer-portal", {
        method: "POST",
        body: JSON.stringify({ customerId: subscriptionInfo.customerId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to open billing portal. Please try again.");
      }
    } catch {
      alert("Failed to open billing portal. Please try again.");
    } finally {
      setIsLoadingPortal(false);
    }
  };

  const handleRestoreSubscription = async () => {
    if (!user) return;

    setIsRestoring(true);
    setRestoreMessage(null);

    try {
      const restored = await syncSubscriptionFromStripe();
      if (restored) {
        setCurrentTier(getUserTier(user));
        setSubscriptionInfo(getSubscriptionInfo());

        // Fetch accurate trial info from Stripe
        const response = await authenticatedFetch("/api/check-subscription", {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          if (data.isTrialing && data.trialEnd) {
            const trialEndDate = new Date(data.trialEnd);
            const now = new Date();
            // Use date-only comparison to get accurate day count
            const endDay = new Date(trialEndDate.getFullYear(), trialEndDate.getMonth(), trialEndDate.getDate());
            const todayDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const msPerDay = 1000 * 60 * 60 * 24;
            const daysLeft = Math.max(0, Math.round((endDay.getTime() - todayDay.getTime()) / msPerDay));
            setTrialInfo({
              isTrialing: true,
              daysLeft,
              trialEndDate: data.trialEnd,
            });
          } else {
            setTrialInfo({ isTrialing: false, daysLeft: 0, trialEndDate: null });
          }
        }

        setRestoreMessage({ type: "success", text: "Subscription restored! You now have Pro access." });
      } else {
        setRestoreMessage({ type: "error", text: "No active subscription found for this email." });
      }
    } catch {
      setRestoreMessage({ type: "error", text: "Failed to restore subscription. Please try again." });
    } finally {
      setIsRestoring(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
      </div>
    );
  }

  const tierInfo = getTierDisplayInfo(currentTier);
  const isPro = currentTier === "pro" || currentTier === "founder";

  const features = [
    { name: "Unlimited Practice Tests", free: false, pro: true },
    { name: "All 70+ LR Question Sets", free: false, pro: true },
    { name: "All 50+ RC Question Sets", free: false, pro: true },
    { name: "Full Analytics Dashboard", free: false, pro: true },
    { name: "Advanced Review Features", free: false, pro: true },
    { name: "Argument Mapping", free: false, pro: true },
    { name: "Adaptive Drills", free: false, pro: true },
    { name: "3 LR Practice Sets", free: true, pro: false },
    { name: "3 RC Practice Sets", free: true, pro: false },
    { name: "Basic Progress Tracking", free: true, pro: true },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            Subscription
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Manage your plan and billing
          </p>
          {user && (
            <div className={`inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-md ${tierInfo.bgColor}`}>
              <span className={`text-sm font-medium ${tierInfo.color}`}>
                {tierInfo.name}
              </span>
            </div>
          )}
        </div>

        {/* Founder Access - No billing needed */}
        {currentTier === "founder" && (
          <div className="mb-8 bg-white dark:bg-stone-900 rounded-lg p-6 border border-purple-500">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Founder Access
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Lifetime unlimited access to all features
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Current Subscription Management for Pro Users (not founders) */}
        {currentTier === "pro" && subscriptionInfo && subscriptionInfo.subscriptionId && (
          <div className="mb-8 bg-white dark:bg-stone-900 rounded-lg p-6 border border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                Your Subscription
              </h2>
              {subscriptionInfo.cancelAtPeriodEnd && (
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded">
                  Cancels Soon
                </span>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded-md bg-stone-50 dark:bg-stone-800">
                <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-xs mb-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  Status
                </div>
                <p className="font-medium text-stone-900 dark:text-stone-100">
                  {trialInfo?.isTrialing ? (
                    <span className="text-green-600 dark:text-green-400">
                      Trial Active ({trialInfo.daysLeft} {trialInfo.daysLeft === 1 ? "day" : "days"} left)
                    </span>
                  ) : subscriptionInfo.cancelAtPeriodEnd ? (
                    <span className="text-orange-600 dark:text-orange-400">Canceling</span>
                  ) : (
                    <span className="text-green-600 dark:text-green-400">Active</span>
                  )}
                </p>
              </div>
              <div className="p-3 rounded-md bg-stone-50 dark:bg-stone-800">
                <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {trialInfo?.isTrialing ? "Trial Ends" : subscriptionInfo.cancelAtPeriodEnd ? "Access Until" : "Next Billing"}
                </div>
                <p className="font-medium text-stone-900 dark:text-stone-100">
                  {trialInfo?.isTrialing && trialInfo.trialEndDate
                    ? new Date(trialInfo.trialEndDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : subscriptionInfo.currentPeriodEnd
                    ? new Date(subscriptionInfo.currentPeriodEnd).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—"}
                </p>
              </div>
            </div>

            {subscriptionInfo.cancelAtPeriodEnd && (
              <div className="p-3 rounded-md bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-4">
                <p className="text-sm text-orange-800 dark:text-orange-300">
                  Your subscription ends on{" "}
                  {subscriptionInfo.currentPeriodEnd
                    ? new Date(subscriptionInfo.currentPeriodEnd).toLocaleDateString()
                    : "the current period end"}
                  . You can resubscribe anytime.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleManagePayment}
                disabled={isLoadingPortal}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors disabled:opacity-50"
              >
                {isLoadingPortal ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                Manage Billing
              </button>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Free Plan */}
          <div className="bg-white dark:bg-stone-900 rounded-lg p-6 border border-stone-200 dark:border-stone-800">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-1">
              Free
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
              Basic access
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-stone-900 dark:text-stone-100">$0</span>
              <span className="text-stone-500 dark:text-stone-400 text-sm">/month</span>
            </div>
            <ul className="space-y-2 mb-6">
              {features.filter(f => f.free).map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {feature.name}
                </li>
              ))}
              {features.filter(f => !f.free).map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-stone-400 dark:text-stone-600 line-through">
                  <div className="w-4 h-4 flex-shrink-0" />
                  {feature.name}
                </li>
              ))}
            </ul>
            {currentTier === "free" ? (
              <button
                disabled
                className="w-full py-2.5 px-4 rounded-md text-sm font-medium bg-stone-100 dark:bg-stone-800 text-stone-500 cursor-not-allowed"
              >
                Current Plan
              </button>
            ) : (
              <div className="w-full py-2.5 px-4 rounded-md text-sm font-medium bg-stone-50 dark:bg-stone-800/50 text-stone-400 text-center">
                Free Tier
              </div>
            )}
          </div>

          {/* Pro Plan */}
          <div className="bg-white dark:bg-stone-900 rounded-lg p-6 border border-amber-500">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                Pro
              </h2>
              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded">
                {TRIAL_DAYS}-day trial
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
              Full access to all features
            </p>

            {/* Billing Period Toggle */}
            <div className="mb-4 flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800 rounded-md">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`flex-1 py-1.5 px-3 rounded text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                    : "text-stone-600 dark:text-stone-400"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`flex-1 py-1.5 px-3 rounded text-sm font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                    : "text-stone-600 dark:text-stone-400"
                }`}
              >
                Yearly <span className="text-green-600 dark:text-green-400">-25%</span>
              </button>
            </div>

            <div className="mb-1">
              <span className="text-3xl font-bold text-stone-900 dark:text-stone-100">$0</span>
              <span className="text-stone-500 dark:text-stone-400 text-sm"> for {TRIAL_DAYS} days</span>
            </div>
            <div className="mb-6 text-sm text-stone-500 dark:text-stone-400">
              {billingPeriod === "monthly" ? (
                <>then $25/month</>
              ) : (
                <>then $225/year <span className="text-green-600 dark:text-green-400">(save $75)</span></>
              )}
            </div>

            <ul className="space-y-2 mb-6">
              {features.filter(f => f.pro).map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {feature.name}
                </li>
              ))}
            </ul>
            {isPro ? (
              trialInfo?.isTrialing ? (
                <div className="text-center">
                  <div className="w-full py-2.5 px-4 rounded-md text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    Trial Active - {trialInfo.daysLeft} {trialInfo.daysLeft === 1 ? "day" : "days"} left
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    Billing starts {trialInfo.trialEndDate
                      ? new Date(trialInfo.trialEndDate).toLocaleDateString("en-US", { month: "long", day: "numeric" })
                      : "when trial ends"}
                  </p>
                </div>
              ) : (
                <button
                  disabled
                  className="w-full py-2.5 px-4 rounded-md text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Subscribed
                </button>
              )
            ) : (
              <button
                onClick={handleUpgrade}
                disabled={checkoutLoading || !user}
                className="w-full py-2.5 px-4 rounded-md text-sm font-medium bg-amber-500 hover:bg-amber-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {checkoutLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : !user ? (
                  "Sign in to Start Trial"
                ) : (
                  "Start Free Trial"
                )}
              </button>
            )}
          </div>
        </div>

        {/* Restore Subscription for Free Users */}
        {currentTier === "free" && user && (
          <div className="mb-8 p-6 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-stone-900 dark:text-stone-100">
                  Already subscribed?
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                  If you have an active subscription but lost access, click to restore it.
                </p>
              </div>
              <button
                onClick={handleRestoreSubscription}
                disabled={isRestoring}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors disabled:opacity-50"
              >
                {isRestoring ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
                Restore Access
              </button>
            </div>
            {restoreMessage && (
              <div className={`mt-4 p-3 rounded-md text-sm ${
                restoreMessage.type === "success"
                  ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
              }`}>
                {restoreMessage.text}
              </div>
            )}
          </div>
        )}

        {/* FAQ or Additional Info */}
        <div className="text-center text-stone-600 dark:text-stone-400 text-sm">
          <p>Cancel anytime. No questions asked.</p>
          <p className="mt-2">
            Questions? Contact us at{" "}
            <a href="mailto:support@lsatprep.org" className="text-amber-600 hover:underline">
              support@lsatprep.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
