"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowRight,
  ArrowLeft,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";
import { loadUserProgress, UserProgress, setCurrentUserId } from "@/lib/user-progress";
import { onAuthChange, logOut, User as FirebaseUser } from "@/lib/firebase";
import { useTheme } from "@/components/ThemeProvider";
import { getUserTier, getTierDisplayInfo, SubscriptionTier } from "@/lib/subscription";
import GoalTracker from "@/components/GoalTracker";
import ScorePredictor from "@/components/ScorePredictor";
import { loadUserGoal, UserGoal } from "@/lib/goal-tracking";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GoalsPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userTier, setUserTier] = useState<SubscriptionTier>("free");
  const [goal, setGoal] = useState<UserGoal | null>(null);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setCurrentUserId(firebaseUser?.uid || null);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Get user's subscription tier
  useEffect(() => {
    if (user) {
      const tier = getUserTier(user);
      setUserTier(tier);
    } else {
      setUserTier("free");
    }
  }, [user]);

  // Load progress and goal when user changes
  useEffect(() => {
    if (authLoading) return;

    const userId = user?.uid;
    const loaded = loadUserProgress(userId);
    const loadedGoal = loadUserGoal(userId);
    setProgress(loaded);
    setGoal(loadedGoal);
    setIsLoading(false);
  }, [user, authLoading]);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch {
      // Silent fail - user can retry
    }
  };

  if (authLoading || isLoading || !progress) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
              <Scale size={32} className="animate-pulse text-white dark:text-stone-900" />
            </div>
            <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">
              Loading goals...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
              <Scale size={20} className="text-white dark:text-stone-900" />
            </div>
            <span className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              LSATprep
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/test-select"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              Start Practice
              <ArrowRight size={16} />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-stone-600 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Tier Badge */}
            {user && (() => {
              const tierInfo = getTierDisplayInfo(userTier);
              return (
                <div className={cx(
                  "rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide",
                  tierInfo.bgColor,
                  tierInfo.color
                )}>
                  {tierInfo.name}
                </div>
              );
            })()}

            {/* User Profile or Sign In Button */}
            {user ? (
              <div className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700 dark:bg-stone-800">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="h-6 w-6 rounded-full"
                  />
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a365d] text-xs font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                    {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="hidden max-w-[100px] truncate text-sm font-medium text-stone-700 dark:text-stone-300 sm:block">
                  {user.displayName || user.email?.split("@")[0]}
                </span>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="ml-1 rounded p-1 text-stone-400 transition hover:bg-stone-200 hover:text-red-600 dark:hover:bg-stone-700 dark:hover:text-red-400"
                  title="Sign Out"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a365d] px-4 py-2 text-sm font-semibold text-[#1a365d] transition hover:bg-[#1a365d] hover:text-white dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-500 dark:hover:text-stone-900"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Back Link */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-700 dark:hover:text-stone-300"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Goals & Score Prediction
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Set your target score and track your progress toward achieving it.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Goal Tracker (Full View) */}
          <div className="lg:col-span-2">
            <GoalTracker progress={progress} user={user} />
          </div>

          {/* Score Predictor */}
          <div className="lg:col-span-2">
            <ScorePredictor
              progress={progress}
              user={user}
              targetScore={goal?.targetScore}
              showDetails
            />
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h3 className="mb-4 font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Tips for Reaching Your Goal
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
              <div className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Practice Consistently
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Regular practice is more effective than cramming. Aim for at least 30 minutes daily.
              </p>
            </div>
            <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
              <div className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Focus on Weak Areas
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Use targeted practice to improve question types where you score below 70%.
              </p>
            </div>
            <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
              <div className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Review Your Mistakes
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Understand why you got questions wrong. Each mistake is a learning opportunity.
              </p>
            </div>
            <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
              <div className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Simulate Test Conditions
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Practice under timed conditions to build stamina and time management skills.
              </p>
            </div>
            <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
              <div className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Learn the Question Types
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Recognize patterns in LR questions. Each type has specific strategies that work.
              </p>
            </div>
            <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
              <div className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Take Care of Yourself
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Get enough sleep, exercise, and take breaks. A healthy mind performs better.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {progress.completedTests.length < 3 && (
          <div className="mt-8 rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/5 p-6 text-center dark:border-amber-500 dark:bg-amber-500/10">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">
              Need More Data for Accurate Predictions
            </h3>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Complete at least 3 practice tests to get more accurate score predictions and trend analysis.
            </p>
            <Link
              href="/test-select"
              className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              Start Practice Test
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
