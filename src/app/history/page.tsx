"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  History,
  Calendar,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock,
  Target,
  Brain,
  FileText,
} from "lucide-react";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { loadUserProgress, UserProgress, CompletedTest } from "@/lib/user-progress";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function HistoryPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [filter, setFilter] = useState<"all" | "lr" | "rc">("all");

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);

      if (!firebaseUser) {
        router.push("/");
      } else {
        setUserProgress(loadUserProgress(firebaseUser.uid));
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Get tests for current month
  const monthTests = useMemo(() => {
    if (!userProgress) return new Map<string, CompletedTest[]>();

    const tests = new Map<string, CompletedTest[]>();
    userProgress.completedTests.forEach((test) => {
      const date = new Date(test.completedAt);
      if (
        date.getMonth() === currentMonth.getMonth() &&
        date.getFullYear() === currentMonth.getFullYear()
      ) {
        const dateKey = date.toISOString().split("T")[0];
        if (!tests.has(dateKey)) {
          tests.set(dateKey, []);
        }
        tests.get(dateKey)!.push(test);
      }
    });
    return tests;
  }, [userProgress, currentMonth]);

  // Get filtered and sorted tests for list view
  const filteredTests = useMemo(() => {
    if (!userProgress) return [];

    return userProgress.completedTests
      .filter((test) => {
        if (filter === "all") return true;
        // Check if test has sections of the filtered type
        return test.sections.some((s) => {
          if (filter === "lr") return s.type === "logical-reasoning";
          if (filter === "rc") return s.type === "reading-comprehension";
          return true;
        });
      })
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
  }, [userProgress, filter]);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: (number | null)[] = [];

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  }, [currentMonth]);

  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <Scale size={48} className="animate-pulse text-[#1a365d] dark:text-amber-400" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-[#1a365d] hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-amber-500 dark:hover:bg-stone-700"
            >
              <ArrowLeft size={18} className="text-stone-500 dark:text-stone-400" />
              <span>Menu</span>
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-xl font-bold text-[#1a365d] dark:text-amber-400">
              LSATPrep
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Study History
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Review your learning journey and track your progress over time.
          </p>
        </div>

        {/* Stats Overview */}
        {userProgress && (
          <div className="mb-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Target size={16} />
                Tests Completed
              </div>
              <div className="mt-1 text-2xl font-bold text-stone-900 dark:text-stone-100">
                {userProgress.completedTests.length}
              </div>
            </div>
            <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <TrendingUp size={16} />
                Average Score
              </div>
              <div className="mt-1 text-2xl font-bold text-stone-900 dark:text-stone-100">
                {userProgress.averageScore.toFixed(1)}%
              </div>
            </div>
            <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Clock size={16} />
                Questions Answered
              </div>
              <div className="mt-1 text-2xl font-bold text-stone-900 dark:text-stone-100">
                {userProgress.totalQuestionsAnswered}
              </div>
            </div>
            <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Target size={16} />
                Highest Score
              </div>
              <div className="mt-1 text-2xl font-bold text-amber-500">
                {userProgress.highestScore.toFixed(1)}%
              </div>
            </div>
          </div>
        )}

        {/* View Toggle */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setView("calendar")}
              className={cx(
                "flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition",
                view === "calendar"
                  ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                  : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              )}
            >
              <Calendar size={16} />
              Calendar
            </button>
            <button
              onClick={() => setView("list")}
              className={cx(
                "flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition",
                view === "list"
                  ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                  : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              )}
            >
              <History size={16} />
              List
            </button>
          </div>

          {view === "list" && (
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="rounded-sm border border-stone-200 bg-white px-3 py-2 text-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
            >
              <option value="all">All Sections</option>
              <option value="lr">Logical Reasoning</option>
              <option value="rc">Reading Comprehension</option>
            </select>
          )}
        </div>

        {/* Calendar View */}
        {view === "calendar" && (
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            {/* Month Navigation */}
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={goToPrevMonth}
                className="rounded-sm p-2 text-stone-600 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800"
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <button
                onClick={goToNextMonth}
                className="rounded-sm p-2 text-stone-600 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Day Headers */}
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="py-2 text-center text-sm font-semibold text-stone-500"
                >
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {calendarDays.map((day, index) => {
                const dateKey =
                  day !== null
                    ? `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                    : null;
                const dayTests = dateKey ? monthTests.get(dateKey) || [] : [];
                const isToday =
                  day === new Date().getDate() &&
                  currentMonth.getMonth() === new Date().getMonth() &&
                  currentMonth.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={index}
                    className={cx(
                      "min-h-[80px] rounded-sm border p-2",
                      day === null
                        ? "border-transparent"
                        : "border-stone-200 dark:border-stone-700",
                      isToday && "bg-amber-50 dark:bg-amber-900/20"
                    )}
                  >
                    {day !== null && (
                      <>
                        <div
                          className={cx(
                            "text-sm font-medium",
                            isToday
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-stone-600 dark:text-stone-400"
                          )}
                        >
                          {day}
                        </div>
                        {dayTests.length > 0 && (
                          <div className="mt-1 space-y-1">
                            {dayTests.slice(0, 2).map((test, i) => (
                              <div
                                key={i}
                                className="rounded-sm bg-[#1a365d]/10 px-1 py-0.5 text-xs text-[#1a365d] dark:bg-amber-500/20 dark:text-amber-400"
                              >
                                {Math.round((test.correctAnswers / test.totalQuestions) * 100)}%
                              </div>
                            ))}
                            {dayTests.length > 2 && (
                              <div className="text-xs text-stone-500">
                                +{dayTests.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* List View */}
        {view === "list" && (
          <div className="space-y-4">
            {filteredTests.length === 0 ? (
              <div className="rounded-sm border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900">
                <History size={48} className="mx-auto mb-4 text-stone-300 dark:text-stone-600" />
                <p className="text-stone-500">No tests completed yet. Start practicing to see your history!</p>
              </div>
            ) : (
              filteredTests.map((test) => (
                <div
                  key={test.id}
                  className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                        {test.testName}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-stone-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(test.completedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {formatTime(test.timeUsed)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                        {Math.round((test.correctAnswers / test.totalQuestions) * 100)}%
                      </div>
                      <div className="text-sm text-stone-500">
                        {test.correctAnswers} / {test.totalQuestions} correct
                      </div>
                    </div>
                  </div>

                  {/* Section Breakdown */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {test.sections.map((section, i) => (
                      <div
                        key={i}
                        className={cx(
                          "flex items-center gap-2 rounded-sm px-3 py-1.5",
                          section.type === "logical-reasoning"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        )}
                      >
                        {section.type === "logical-reasoning" ? (
                          <Brain size={14} />
                        ) : (
                          <FileText size={14} />
                        )}
                        <span className="text-sm font-medium">
                          {section.type === "logical-reasoning" ? "LR" : "RC"}:{" "}
                          {section.correctCount}/{section.totalCount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
