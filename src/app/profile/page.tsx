"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  User,
  Mail,
  Crown,
  Shield,
  ExternalLink,
  CheckCircle2,
  Moon,
  Sun,
  LogOut,
  Calendar,
  Clock,
  AlertCircle,
} from "lucide-react";
import { onAuthChange, logOut, User as FirebaseUser } from "@/lib/firebase";
import { useTheme } from "@/components/ThemeProvider";
import {
  verifySubscriptionTier,
  getTierDisplayInfo,
  getSubscriptionInfo,
  getTrialInfo,
  SubscriptionTier,
  SubscriptionInfo,
  TrialInfo,
} from "@/lib/subscription";
import HamburgerMenu from "@/components/HamburgerMenu";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfilePage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userTier, setUserTier] = useState<SubscriptionTier>("free");
  const [subscriptionInfo, setSubscriptionInfoState] = useState<SubscriptionInfo | null>(null);
  const [trialInfo, setTrialInfo] = useState<TrialInfo | null>(null);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);

      if (!firebaseUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Get subscription info (uses secure server verification)
  useEffect(() => {
    if (user) {
      verifySubscriptionTier(user).then((tier) => {
        setUserTier(tier);
      });
      setSubscriptionInfoState(getSubscriptionInfo());
      setTrialInfo(getTrialInfo());
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch {
      // Silent fail - user can retry
    }
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <div className="text-center">
          <Scale size={48} className="mx-auto mb-4 animate-pulse text-[#1a365d] dark:text-amber-400" />
          <p className="text-stone-600 dark:text-stone-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const tierInfo = getTierDisplayInfo(userTier);

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <HamburgerMenu />
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-stone-600 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full p-2 text-stone-600 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded-sm bg-red-100 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="mb-8 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
          Profile Settings
        </h1>

        <div className="space-y-6">
          {/* Account Info */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="mb-4 flex items-center gap-2">
              <User size={20} className="text-[#1a365d] dark:text-amber-400" />
              <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                Account Information
              </h2>
            </div>

            <div className="space-y-4">
              {/* Profile Picture & Name */}
              <div className="flex items-center gap-4">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="h-16 w-16 rounded-full border-2 border-stone-200 dark:border-stone-700"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a365d] text-2xl font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                    {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">
                    {user.displayName || "User"}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={cx("rounded-sm px-2 py-0.5 text-xs font-semibold", tierInfo.bgColor, tierInfo.color)}>
                      {tierInfo.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Mail size={16} />
                  Email Address
                </div>
                <div className="mt-1 font-medium text-stone-900 dark:text-stone-100">
                  {user.email}
                </div>
                {user.emailVerified && (
                  <div className="mt-1 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                    <CheckCircle2 size={12} />
                    Verified
                  </div>
                )}
              </div>

              {/* Auth Provider */}
              <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Shield size={16} />
                  Sign-in Method
                </div>
                <div className="mt-1 font-medium text-stone-900 dark:text-stone-100">
                  {user.providerData[0]?.providerId === "google.com" ? "Google" : "Email & Password"}
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Info */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="mb-4 flex items-center gap-2">
              <Crown size={20} className="text-[#1a365d] dark:text-amber-400" />
              <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                Subscription
              </h2>
            </div>

            <div className="space-y-4">
              {/* Current Plan */}
              <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-stone-500">Current Plan</div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xl font-bold text-stone-900 dark:text-stone-100">
                        {tierInfo.name}
                      </span>
                      {userTier === "pro" && trialInfo?.isTrialing && (
                        <span className="rounded-sm bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                          Trial
                        </span>
                      )}
                      {subscriptionInfo?.cancelAtPeriodEnd && (
                        <span className="rounded-sm bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                          Cancels Soon
                        </span>
                      )}
                    </div>
                  </div>
                  {userTier === "free" && (
                    <Link
                      href="/subscription"
                      className="rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                    >
                      Upgrade to Pro
                    </Link>
                  )}
                </div>
              </div>

              {/* Trial Info */}
              {trialInfo?.isTrialing && (
                <div className="rounded-sm border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                  <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-400">
                    <Clock size={16} />
                    Trial Period
                  </div>
                  <div className="mt-1 font-medium text-blue-900 dark:text-blue-100">
                    {trialInfo.daysLeft} days remaining
                  </div>
                  <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">
                    Your trial ends on {new Date(trialInfo.trialEndDate!).toLocaleDateString()}
                  </p>
                </div>
              )}

              {/* Billing Period */}
              {subscriptionInfo?.currentPeriodEnd && userTier !== "free" && (
                <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                  <div className="flex items-center gap-2 text-sm text-stone-500">
                    <Calendar size={16} />
                    {subscriptionInfo.cancelAtPeriodEnd ? "Access Until" : "Next Billing Date"}
                  </div>
                  <div className="mt-1 font-medium text-stone-900 dark:text-stone-100">
                    {new Date(subscriptionInfo.currentPeriodEnd).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              )}


              {/* Subscription Cancelled Notice */}
              {subscriptionInfo?.cancelAtPeriodEnd && (
                <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className="text-amber-600 dark:text-amber-400" />
                    <span className="font-medium text-amber-900 dark:text-amber-100">
                      Subscription Cancelled
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                    Your subscription has been cancelled. You'll retain access until{" "}
                    {subscriptionInfo.currentPeriodEnd
                      ? new Date(subscriptionInfo.currentPeriodEnd).toLocaleDateString()
                      : "the end of your billing period"}
                    .
                  </p>
                  <Link
                    href="/subscription"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300"
                  >
                    Resubscribe
                    <ExternalLink size={14} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
