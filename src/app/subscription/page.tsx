"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getUserTier, getTierDisplayInfo } from "@/lib/subscription";
import { Check, Crown, Loader2, ArrowLeft } from "lucide-react";

export default function SubscriptionPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [currentTier, setCurrentTier] = useState<"free" | "pro" | "founder">("free");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setCurrentTier(getUserTier(user));
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
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              Pro
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Everything you need to ace the LSAT
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-stone-900 dark:text-stone-100">$15</span>
              <span className="text-stone-600 dark:text-stone-400">/month</span>
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
              <button
                disabled
                className="w-full py-3 px-6 rounded-xl font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 cursor-not-allowed"
              >
                <Check className="w-5 h-5 inline mr-2" />
                Subscribed
              </button>
            ) : (
              <button
                onClick={handleUpgrade}
                disabled={checkoutLoading || !user}
                className="w-full py-3 px-6 rounded-xl font-medium bg-amber-500 hover:bg-amber-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {checkoutLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : !user ? (
                  "Sign in to Subscribe"
                ) : (
                  "Get Pro"
                )}
              </button>
            )}
          </div>
        </div>

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
