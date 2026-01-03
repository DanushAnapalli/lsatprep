"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Trash2,
  PlayCircle,
  AlertCircle,
} from "lucide-react";
import {
  loadAllInProgressTests,
  clearInProgressTest,
  clearAllInProgressTests,
  setCurrentUserId,
  InProgressTest,
} from "@/lib/user-progress";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  }
  if (diffHours > 0) {
    return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
  }
  if (diffMins > 0) {
    return diffMins === 1 ? "1 minute ago" : `${diffMins} minutes ago`;
  }
  return "Just now";
}

function getTestTypeLabel(type: string): string {
  switch (type) {
    case "full":
      return "Full Test";
    case "lr-only":
      return "Logical Reasoning";
    case "rc-only":
      return "Reading Comprehension";
    case "improvement":
      return "Review Missed";
    case "targeted":
      return "Targeted Practice";
    default:
      return "Practice Test";
  }
}

export default function UncompletedTestsPage() {
  const router = useRouter();
  const [tests, setTests] = useState<InProgressTest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [showClearAllConfirm, setShowClearAllConfirm] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setCurrentUserId(firebaseUser?.uid || null);

      const allTests = loadAllInProgressTests(firebaseUser?.uid);
      // Sort by most recently updated
      const sorted = allTests.sort(
        (a, b) =>
          new Date(b.lastUpdatedAt).getTime() -
          new Date(a.lastUpdatedAt).getTime()
      );
      setTests(sorted);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleDiscard = (testId: string) => {
    clearInProgressTest(user?.uid, testId);
    setTests((prev) => prev.filter((t) => t.testId !== testId));
  };

  const handleClearAll = () => {
    clearAllInProgressTests(user?.uid);
    setTests([]);
    setShowClearAllConfirm(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
              <Scale size={32} className="animate-pulse text-white dark:text-stone-900" />
            </div>
            <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">
              Loading...
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
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
              <Scale size={20} className="text-white dark:text-stone-900" />
            </div>
            <span className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              LSATprep
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Back Button */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Uncompleted Tests
            </h1>
            <p className="mt-1 text-stone-600 dark:text-stone-400">
              {tests.length === 0
                ? "No uncompleted tests"
                : `${tests.length} test${tests.length > 1 ? "s" : ""} in progress`}
            </p>
          </div>

          {tests.length > 1 && (
            <div className="relative">
              {!showClearAllConfirm ? (
                <button
                  onClick={() => setShowClearAllConfirm(true)}
                  className="flex items-center gap-2 rounded-sm border border-red-300 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  <Trash2 size={14} />
                  Clear All
                </button>
              ) : (
                <div className="flex items-center gap-2 rounded-sm border border-red-300 bg-red-50 p-2 dark:border-red-700 dark:bg-red-900/20">
                  <span className="text-xs text-red-700 dark:text-red-300">
                    Delete all?
                  </span>
                  <button
                    onClick={handleClearAll}
                    className="rounded-sm bg-red-600 px-2 py-1 text-xs font-medium text-white transition hover:bg-red-700"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowClearAllConfirm(false)}
                    className="rounded-sm bg-stone-200 px-2 py-1 text-xs font-medium text-stone-700 transition hover:bg-stone-300 dark:bg-stone-700 dark:text-stone-300"
                  >
                    No
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Empty State */}
        {tests.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-sm border-2 border-dashed border-stone-300 bg-stone-50 py-16 dark:border-stone-700 dark:bg-stone-900">
            <AlertCircle
              size={48}
              className="mb-4 text-stone-300 dark:text-stone-600"
            />
            <div className="mb-2 text-lg font-semibold text-stone-500">
              No Uncompleted Tests
            </div>
            <p className="mb-6 text-sm text-stone-400">
              All your tests have been completed or discarded.
            </p>
            <Link
              href="/test-select"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              Start New Test
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Test List */}
        <div className="space-y-4">
          {tests.map((test, index) => {
            const answeredCount = Object.keys(test.answers).length;
            const progress = Math.round(
              (answeredCount / test.totalQuestions) * 100
            );

            return (
              <div
                key={test.testId}
                className={cx(
                  "rounded-sm border-2 bg-white p-5 transition dark:bg-stone-900",
                  index === 0
                    ? "border-amber-400 dark:border-amber-500"
                    : "border-stone-200 dark:border-stone-700"
                )}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                        {test.testName}
                      </h3>
                      {index === 0 && (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-500/20 dark:text-amber-400">
                          Most Recent
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-stone-500">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {formatTimeAgo(new Date(test.lastUpdatedAt))}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        Started{" "}
                        {new Date(test.startedAt).toLocaleDateString()}
                      </span>
                      <span className="rounded-sm bg-stone-100 px-2 py-0.5 text-xs font-medium dark:bg-stone-800">
                        {getTestTypeLabel(test.testType)}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="mb-1 flex items-center justify-between text-xs text-stone-500">
                        <span>
                          {answeredCount}/{test.totalQuestions} questions
                          answered
                        </span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                        <div
                          className="h-full rounded-full bg-amber-500 transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:flex-col sm:items-end">
                    <Link
                      href={`/practice?type=${test.testType}&resume=true&testId=${test.testId}`}
                      className="inline-flex items-center gap-2 rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                    >
                      <PlayCircle size={16} />
                      Resume
                    </Link>
                    <button
                      onClick={() => handleDiscard(test.testId)}
                      className="rounded-sm border border-stone-300 px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-400 dark:hover:bg-stone-800"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {tests.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href="/test-select"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a365d] px-6 py-2 text-sm font-semibold text-[#1a365d] transition hover:bg-[#1a365d] hover:text-white dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-500 dark:hover:text-stone-900"
            >
              Start a New Test
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
