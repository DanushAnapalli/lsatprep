"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getUserTier, getTierDisplayInfo, getTrialInfo, getSubscriptionInfo, saveSubscriptionInfo, SubscriptionInfo, syncSubscriptionFromStripe } from "@/lib/subscription";
import { Check, Crown, Loader2, ArrowLeft, Gift, Calendar, CreditCard, AlertCircle, ExternalLink, X, RefreshCw } from "lucide-react";

const TRIAL_DAYS = 5;

export default function SubscriptionPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [currentTier, setCurrentTier] = useState<"free" | "pro" | "founder">("free");
  const [trialInfo, setTrialInfo] = useState<{ isTrialing: boolean; daysLeft: number } | null>(null);
  const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfo | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [restoreMessage, setRestoreMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setCurrentTier(getUserTier(user));
        setTrialInfo(getTrialInfo());
        setSubscriptionInfo(getSubscriptionInfo());
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
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.uid,
          userEmail: user.email,
          billingPeriod: billingPeriod,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        console.error("Checkout error:", data.error || response.statusText);
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
    } catch (error) {
      console.error("Checkout error:", error);
      alert(`Failed to start checkout: ${error instanceof Error ? error.message : "Unknown error"}`);
      setCheckoutLoading(false);
    }
  };

  const handleCancelSubscription = async () => {
    if (!subscriptionInfo?.subscriptionId) return;

    setIsCancelling(true);
    try {
      const response = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriptionId: subscriptionInfo.subscriptionId }),
      });

      const data = await response.json();

      if (data.success) {
        const updatedInfo: SubscriptionInfo = {
          ...subscriptionInfo,
          cancelAtPeriodEnd: true,
          currentPeriodEnd: data.subscription.currentPeriodEnd,
        };
        saveSubscriptionInfo(updatedInfo);
        setSubscriptionInfo(updatedInfo);
        setShowCancelConfirm(false);
      } else {
        alert("Failed to cancel subscription. Please try again.");
      }
    } catch (error) {
      console.error("Cancel error:", error);
      alert("Failed to cancel subscription. Please try again.");
    } finally {
      setIsCancelling(false);
    }
  };

  const handleManagePayment = async () => {
    if (!user?.email) return;

    setIsLoadingPortal(true);
    try {
      const response = await fetch("/api/customer-portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerEmail: user.email }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to open billing portal. Please try again.");
      }
    } catch (error) {
      console.error("Portal error:", error);
      alert("Failed to open billing portal. Please try again.");
    } finally {
      setIsLoadingPortal(false);
    }
  };

  const handleRestoreSubscription = async () => {
    if (!user?.email) return;

    setIsRestoring(true);
    setRestoreMessage(null);

    try {
      const restored = await syncSubscriptionFromStripe(user.email);
      if (restored) {
        setCurrentTier(getUserTier(user));
        setSubscriptionInfo(getSubscriptionInfo());
        setTrialInfo(getTrialInfo());
        setRestoreMessage({ type: "success", text: "Subscription restored! You now have Pro access." });
      } else {
        setRestoreMessage({ type: "error", text: "No active subscription found for this email." });
      }
    } catch (error) {
      console.error("Restore error:", error);
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
    { name: "All LR Question Sets", free: false, pro: true },
    { name: "All RC Question Sets", free: false, pro: true },
    { name: "Full Analytics Dashboard", free: false, pro: true },
    { name: "Advanced Review Features", free: false, pro: true },
    { name: "Argument Mapping", free: false, pro: true },
    { name: "Adaptive Drills", free: false, pro: true },
    { name: "1 LR Practice Set", free: true, pro: true },
    { name: "1 RC Practice Set", free: true, pro: true },
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
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto">
            Unlock your full LSAT potential with unlimited access to all practice materials and advanced features.
          </p>
          {user && (
            <div className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full ${tierInfo.bgColor}`}>
              <span className={`text-sm font-medium ${tierInfo.color}`}>
                Current Plan: {tierInfo.name}
              </span>
            </div>
          )}
        </div>

        {/* Current Subscription Management for Pro Users */}
        {isPro && subscriptionInfo && (
          <div className="mb-8 bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-6 border-2 border-amber-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Crown className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                  Your Current Subscription
                </h2>
              </div>
              {subscriptionInfo.cancelAtPeriodEnd && (
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full">
                  Cancels Soon
                </span>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800">
                <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-1">
                  <CreditCard className="w-4 h-4" />
                  Status
                </div>
                <p className="font-semibold text-stone-900 dark:text-stone-100">
                  {trialInfo?.isTrialing ? (
                    <span className="text-green-600 dark:text-green-400">Trial Active</span>
                  ) : subscriptionInfo.cancelAtPeriodEnd ? (
                    <span className="text-orange-600 dark:text-orange-400">Canceling</span>
                  ) : (
                    <span className="text-green-600 dark:text-green-400">Active</span>
                  )}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800">
                <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  {subscriptionInfo.cancelAtPeriodEnd ? "Access Until" : "Next Billing"}
                </div>
                <p className="font-semibold text-stone-900 dark:text-stone-100">
                  {subscriptionInfo.currentPeriodEnd
                    ? new Date(subscriptionInfo.currentPeriodEnd).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—"}
                </p>
              </div>
            </div>

            {subscriptionInfo.cancelAtPeriodEnd ? (
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-orange-800 dark:text-orange-300">
                      Your subscription will end on{" "}
                      {subscriptionInfo.currentPeriodEnd
                        ? new Date(subscriptionInfo.currentPeriodEnd).toLocaleDateString()
                        : "the current period end"}
                    </p>
                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                      You&apos;ll retain Pro access until then. To continue, you can resubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleManagePayment}
                disabled={isLoadingPortal}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors disabled:opacity-50"
              >
                {isLoadingPortal ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                Manage Payment
              </button>
              {!subscriptionInfo.cancelAtPeriodEnd && (
                <button
                  onClick={() => setShowCancelConfirm(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel Subscription
                </button>
              )}
            </div>

            {/* Cancel Confirmation Dialog */}
            {showCancelConfirm && (
              <div className="mt-4 p-4 rounded-xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-300">
                      Cancel your subscription?
                    </p>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                      You&apos;ll keep Pro access until the end of your current billing period, then revert to the Free plan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleCancelSubscription}
                    disabled={isCancelling}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium bg-red-600 hover:bg-red-700 text-white transition-colors disabled:opacity-50"
                  >
                    {isCancelling ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : null}
                    Yes, Cancel
                  </button>
                  <button
                    onClick={() => setShowCancelConfirm(false)}
                    className="px-4 py-2 rounded-xl font-medium bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
                  >
                    Keep Subscription
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Free Plan */}
          <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-8 border-2 border-stone-200 dark:border-stone-800">
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              Free
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Get started with basic features
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-stone-900 dark:text-stone-100">$0</span>
              <span className="text-stone-600 dark:text-stone-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {features.filter(f => f.free).map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600 dark:text-stone-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {feature.name}
                </li>
              ))}
              {features.filter(f => !f.free).map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-400 dark:text-stone-600 line-through">
                  <div className="w-5 h-5 flex-shrink-0" />
                  {feature.name}
                </li>
              ))}
            </ul>
            <button
              disabled
              className="w-full py-3 px-6 rounded-xl font-medium bg-stone-100 dark:bg-stone-800 text-stone-500 cursor-not-allowed"
            >
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-8 border-2 border-amber-500 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Crown className="w-6 h-6 text-amber-500" />
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
              <Gift className="w-3 h-3" />
              {TRIAL_DAYS}-DAY FREE TRIAL
            </div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              Pro
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Everything you need to ace the LSAT
            </p>

            {/* Billing Period Toggle */}
            <div className="mb-4 flex items-center justify-center gap-2 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all relative ${
                  billingPeriod === "yearly"
                    ? "bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  -25%
                </span>
              </button>
            </div>

            <div className="mb-2">
              <span className="text-4xl font-bold text-stone-900 dark:text-stone-100">$0</span>
              <span className="text-stone-600 dark:text-stone-400"> for {TRIAL_DAYS} days</span>
            </div>
            <div className="mb-6 text-sm text-stone-500 dark:text-stone-400">
              {billingPeriod === "monthly" ? (
                <>then <span className="font-semibold text-stone-700 dark:text-stone-300">$15/month</span> · Cancel anytime</>
              ) : (
                <>
                  then <span className="font-semibold text-stone-700 dark:text-stone-300">$135/year</span>
                  <span className="ml-2 text-green-600 dark:text-green-400 font-medium">(Save $45!)</span>
                </>
              )}
            </div>

            {/* Trial info box */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-300">
                    Try Pro free for {TRIAL_DAYS} days
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    Card required. You won&apos;t be charged until your trial ends.
                    {billingPeriod === "yearly" && " Then billed $135 annually."}
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {features.filter(f => f.pro).map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600 dark:text-stone-400">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  {feature.name}
                </li>
              ))}
            </ul>
            {isPro ? (
              trialInfo?.isTrialing ? (
                <div className="space-y-3">
                  <div className="w-full py-3 px-6 rounded-xl font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-center">
                    <Gift className="w-5 h-5 inline mr-2" />
                    Trial Active · {trialInfo.daysLeft} days left
                  </div>
                  <p className="text-xs text-center text-stone-500">
                    Your card will be charged when the trial ends
                  </p>
                </div>
              ) : (
                <button
                  disabled
                  className="w-full py-3 px-6 rounded-xl font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 cursor-not-allowed"
                >
                  <Check className="w-5 h-5 inline mr-2" />
                  Subscribed
                </button>
              )
            ) : (
              <button
                onClick={handleUpgrade}
                disabled={checkoutLoading || !user}
                className="w-full py-3 px-6 rounded-xl font-medium bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
              >
                {checkoutLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : !user ? (
                  "Sign in to Start Trial"
                ) : (
                  <>
                    <Gift className="w-5 h-5" />
                    Start Free Trial
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Restore Subscription for Free Users */}
        {currentTier === "free" && user && (
          <div className="mb-8 p-6 bg-white dark:bg-stone-900 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-800">
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors disabled:opacity-50"
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
              <div className={`mt-4 p-3 rounded-xl text-sm ${
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
