"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Scale,
  ArrowRight,
  ArrowLeft,
  Clock,
  Brain,
  BookOpen,
  Layers,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
  RotateCcw,
} from "lucide-react";
import {
  loadUserProgress,
  UserProgress,
  getWrongAnswerQuestionIds,
  getUnseenQuestionIds,
  getWeakTopics,
  WeakTopic,
  setCurrentUserId,
} from "@/lib/user-progress";
import { logicalReasoningQuestions, readingComprehensionQuestions } from "@/lib/sample-questions";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { authenticatedFetch } from "@/lib/auth-client";
import { Crown, Lock } from "lucide-react";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================
// TYPES
// ============================================

type TestType = "full" | "lr-only" | "rc-only" | "improvement" | "targeted" | "custom";

interface TestOption {
  id: TestType;
  title: string;
  description: string;
  icon: React.ElementType;
  sections: string;
  time: string;
  questionCount: number;
  available: boolean;
  highlight?: boolean;
  badge?: string;
  limitReached?: boolean;
  limitMessage?: string;
}

// ============================================
// COMPONENTS
// ============================================

function TestOptionCard({
  option,
  selected,
  onSelect,
  disabled,
}: {
  option: TestOption;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}) {
  const Icon = option.icon;
  const isBlocked = option.limitReached;

  return (
    <button
      onClick={onSelect}
      disabled={disabled || !option.available || isBlocked}
      className={cx(
        "relative w-full rounded-sm border-2 p-6 text-left transition",
        selected && !isBlocked
          ? "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/10"
          : isBlocked
          ? "border-red-200 bg-red-50/50 dark:border-red-900/50 dark:bg-red-900/10 cursor-not-allowed"
          : "border-stone-200 bg-white hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-stone-600",
        !option.available && !isBlocked && "cursor-not-allowed opacity-50",
        option.highlight && !selected && !isBlocked && "border-amber-400 dark:border-amber-500/50"
      )}
    >
      {isBlocked && (
        <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-sm bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          <Lock size={12} />
          Limit Reached
        </div>
      )}
      {option.badge && !isBlocked && (
        <div className="absolute -top-3 right-4 rounded-sm bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-900">
          {option.badge}
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className={cx(
            "rounded-sm p-3",
            isBlocked
              ? "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
              : selected
              ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
              : "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400"
          )}
        >
          {isBlocked ? <Lock size={24} /> : <Icon size={24} />}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={cx(
              "font-serif text-lg font-bold",
              isBlocked ? "text-stone-500 dark:text-stone-500" : "text-stone-900 dark:text-stone-100"
            )}>
              {option.title}
            </h3>
            {selected && !isBlocked && (
              <CheckCircle2 size={20} className="text-[#1a365d] dark:text-amber-400" />
            )}
          </div>
          {isBlocked ? (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {option.limitMessage || "You've reached your free tier limit for this test type."}
            </p>
          ) : (
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{option.description}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            <span className={cx(
              "flex items-center gap-1 rounded-sm px-2 py-1",
              isBlocked ? "bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500" : "bg-stone-100 dark:bg-stone-800"
            )}>
              <Layers size={12} />
              {option.sections}
            </span>
            <span className={cx(
              "flex items-center gap-1 rounded-sm px-2 py-1",
              isBlocked ? "bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500" : "bg-stone-100 dark:bg-stone-800"
            )}>
              <Clock size={12} />
              {option.time}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

// ============================================
// MAIN COMPONENT (Content)
// ============================================

function TestSelectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedType = searchParams.get("type") as TestType | null;
  const mode = searchParams.get("mode"); // "full", "section", or null

  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [selectedType, setSelectedType] = useState<TestType | null>(
    preselectedType || (mode === "full" ? "full" : null)
  );
  const [isLoading, setIsLoading] = useState(true);
  const [allowRepeats, setAllowRepeats] = useState(false);
  const [isTimed, setIsTimed] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Limit checking state
  const [limitsLoading, setLimitsLoading] = useState(true);
  const [lrRemaining, setLrRemaining] = useState<number>(3);
  const [rcRemaining, setRcRemaining] = useState<number>(3);
  const [userTier, setUserTier] = useState<"free" | "pro" | "founder">("free");
  const [lrCompleted, setLrCompleted] = useState<number>(0);
  const [rcCompleted, setRcCompleted] = useState<number>(0);

  // Improvement test filters
  const [sectionFilter, setSectionFilter] = useState<"all" | "logical-reasoning" | "reading-comprehension">("all");
  const [questionTypeFilters, setQuestionTypeFilters] = useState<string[]>([]);
  const [showReviewedOnly, setShowReviewedOnly] = useState(false);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setCurrentUserId(firebaseUser?.uid || null);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Load progress when auth is determined
  useEffect(() => {
    if (authLoading) return;
    const loaded = loadUserProgress(user?.uid);
    setProgress(loaded);
    setIsLoading(false);
  }, [user, authLoading]);

  // Check limits from server when auth is loaded
  useEffect(() => {
    if (authLoading) return;

    const checkLimits = async () => {
      // For authenticated users, check limits from server
      if (user) {
        try {
          // Check for full test (this gives us both LR and RC remaining)
          const response = await authenticatedFetch("/api/check-limits", {
            method: "POST",
            body: JSON.stringify({ testType: "full" }),
          });

          if (response.ok) {
            const result = await response.json();
            if (!result.error) {
              setUserTier(result.tier);
              setLrRemaining(result.lrRemaining);
              setRcRemaining(result.rcRemaining);
              setLrCompleted(result.lrCompleted);
              setRcCompleted(result.rcCompleted);
            }
          }
        } catch {
          // On error, fall back to client-side progress counts
          const loaded = loadUserProgress(user?.uid);
          const lrTests = loaded.completedTests.filter(
            (test) => test.sections.some((s) => s.type === "logical-reasoning")
          ).length;
          const rcTests = loaded.completedTests.filter(
            (test) => test.sections.some((s) => s.type === "reading-comprehension")
          ).length;
          setLrCompleted(lrTests);
          setRcCompleted(rcTests);
          setLrRemaining(Math.max(0, 3 - lrTests));
          setRcRemaining(Math.max(0, 3 - rcTests));
        }
      } else {
        // For guests, use localStorage progress
        const loaded = loadUserProgress(undefined);
        const lrTests = loaded.completedTests.filter(
          (test) => test.sections.some((s) => s.type === "logical-reasoning")
        ).length;
        const rcTests = loaded.completedTests.filter(
          (test) => test.sections.some((s) => s.type === "reading-comprehension")
        ).length;
        setLrCompleted(lrTests);
        setRcCompleted(rcTests);
        setLrRemaining(Math.max(0, 3 - lrTests));
        setRcRemaining(Math.max(0, 3 - rcTests));
      }
      setLimitsLoading(false);
    };

    checkLimits();
  }, [user, authLoading]);

  if (isLoading || !progress || limitsLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-pulse text-stone-500">Loading...</div>
        </div>
      </div>
    );
  }

  // Determine which tests are blocked due to limits
  const isPro = userTier === "pro" || userTier === "founder";
  const lrBlocked = !isPro && lrRemaining <= 0;
  const rcBlocked = !isPro && rcRemaining <= 0;
  const fullBlocked = !isPro && (lrRemaining <= 0 || rcRemaining <= 0);
  const anyLimitReached = lrBlocked || rcBlocked;

  const wrongAnswerIds = getWrongAnswerQuestionIds(progress);

  // Apply filters to wrong answers for improvement tests
  const filteredWrongAnswers = progress.wrongAnswers.filter(wa => {
    // Exclude mastered questions
    if (wa.masteredAt) return false;

    // Apply section type filter
    if (sectionFilter !== "all" && wa.sectionType !== sectionFilter) return false;

    // Apply question type filters (if any selected)
    if (questionTypeFilters.length > 0 && !questionTypeFilters.includes(wa.questionType)) return false;

    // Apply reviewed status filter
    if (showReviewedOnly && !wa.reviewed) return false;

    return true;
  });

  const filteredWrongAnswerIds = [...new Set(filteredWrongAnswers.map(wa => wa.questionId))];

  // Count wrong answers by section for filter display
  const lrWrongCount = progress.wrongAnswers.filter(wa => !wa.masteredAt && wa.sectionType === "logical-reasoning").length;
  const rcWrongCount = progress.wrongAnswers.filter(wa => !wa.masteredAt && wa.sectionType === "reading-comprehension").length;

  const weakTopics = getWeakTopics(progress);
  const allQuestionIds = [
    ...logicalReasoningQuestions.map((q) => q.id),
    ...readingComprehensionQuestions.map((q) => q.id),
  ];
  const unseenIds = getUnseenQuestionIds(allQuestionIds, progress);

  const lrQuestionCount = logicalReasoningQuestions.length;
  const rcQuestionCount = readingComprehensionQuestions.length;
  const totalQuestionCount = lrQuestionCount + rcQuestionCount;

  // Get unseen questions for weak topics (for targeted practice)
  const weakQuestionTypes = weakTopics.map((t) => t.questionType);
  const allQuestions = [...logicalReasoningQuestions, ...readingComprehensionQuestions];
  const targetedQuestions = allQuestions.filter(
    (q) => weakQuestionTypes.includes(q.type) && !progress.seenQuestionIds.includes(q.id)
  );
  const targetedQuestionCount = targetedQuestions.length;

  // Base test options (always shown)
  const baseTestOptions: TestOption[] = [
    {
      id: "full",
      title: "Full Practice Test",
      description:
        "Complete LSAT practice test with 2 Logical Reasoning sections and 1 Reading Comprehension section.",
      icon: Target,
      sections: "3 sections",
      time: "~105 min",
      questionCount: Math.min(totalQuestionCount, 76),
      available: unseenIds.length >= 10 || totalQuestionCount >= 10,
      limitReached: fullBlocked,
      limitMessage: `You've used all ${3} free practice tests. Upgrade to Pro for unlimited tests!`,
    },
    {
      id: "lr-only",
      title: "Logical Reasoning Only",
      description: "Focus exclusively on Logical Reasoning questions to strengthen your argument analysis skills.",
      icon: Brain,
      sections: "1-2 sections",
      time: "~35-70 min",
      questionCount: lrQuestionCount,
      available: lrQuestionCount >= 5,
      limitReached: lrBlocked,
      limitMessage: `You've completed ${lrCompleted}/3 free LR practice sets. Upgrade to Pro for unlimited practice!`,
    },
    {
      id: "rc-only",
      title: "Reading Comprehension Only",
      description: "Practice Reading Comprehension passages and questions to improve your reading analysis.",
      icon: BookOpen,
      sections: "1 section",
      time: "~35 min",
      questionCount: rcQuestionCount,
      available: rcQuestionCount >= 4,
      limitReached: rcBlocked,
      limitMessage: `You've completed ${rcCompleted}/3 free RC practice sets. Upgrade to Pro for unlimited practice!`,
    },
  ];

  // Special test options (only shown when specifically navigated to)
  const targetedOption: TestOption = {
    id: "targeted",
    title: "Targeted Practice",
    description:
      weakTopics.length > 0
        ? `Practice NEW questions from your ${weakTopics.length} weakest topic${weakTopics.length > 1 ? "s" : ""}: ${weakTopics.slice(0, 3).map(t => t.questionType.replace(/-/g, " ")).join(", ")}${weakTopics.length > 3 ? "..." : ""}.`
        : "Complete some practice tests first to identify your weak areas for targeted practice.",
    icon: TrendingUp,
    sections: "Custom",
    time: "Varies",
    questionCount: targetedQuestionCount,
    available: weakTopics.length > 0 && targetedQuestionCount > 0,
    highlight: weakTopics.length > 0 && targetedQuestionCount > 0,
    badge: weakTopics.length > 0 && targetedQuestionCount > 0 ? "Recommended" : undefined,
  };

  const improvementOption: TestOption = {
    id: "improvement",
    title: "Review Missed Questions",
    description:
      filteredWrongAnswerIds.length > 0
        ? `Retry the ${filteredWrongAnswerIds.length} question${filteredWrongAnswerIds.length > 1 ? "s" : ""} you previously got wrong. Master them to mark as complete.`
        : wrongAnswerIds.length > 0
        ? "No questions match your current filters. Try adjusting your filter settings."
        : "Complete some practice tests first. Questions you miss will appear here for review.",
    icon: RotateCcw,
    sections: "Custom",
    time: "Varies",
    questionCount: filteredWrongAnswerIds.length,
    available: filteredWrongAnswerIds.length > 0,
  };

  // Filter options based on navigation mode
  const testOptions: TestOption[] = preselectedType === "targeted"
    ? [targetedOption]
    : preselectedType === "improvement"
    ? [improvementOption]
    : mode === "full"
    ? [baseTestOptions[0]] // Only Full Practice Test
    : mode === "section"
    ? [baseTestOptions[1], baseTestOptions[2]] // Only LR and RC
    : baseTestOptions;

  const handleStartTest = () => {
    if (!selectedType) return;

    // Double-check limits before starting (prevents race conditions)
    if (selectedType === "full" && fullBlocked) return;
    if (selectedType === "lr-only" && lrBlocked) return;
    if (selectedType === "rc-only" && rcBlocked) return;

    const params = new URLSearchParams();
    params.set("type", selectedType);

    if (allowRepeats) {
      params.set("allowRepeats", "true");
    }

    if (!isTimed) {
      params.set("untimed", "true");
    }

    if (selectedType === "improvement") {
      params.set("questionIds", filteredWrongAnswerIds.join(","));
    }

    if (selectedType === "targeted") {
      // Pass the weak question types for targeted practice
      params.set("weakTypes", weakQuestionTypes.join(","));
    }

    router.push(`/practice?${params.toString()}`);
  };

  // Check if the currently selected test is blocked
  const selectedTestBlocked =
    (selectedType === "full" && fullBlocked) ||
    (selectedType === "lr-only" && lrBlocked) ||
    (selectedType === "rc-only" && rcBlocked);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
              <Scale size={20} className="text-white dark:text-stone-900" />
            </div>
            <span className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              LSATprep
            </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <ArrowLeft size={16} />
            Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1a365d] dark:text-amber-400">
            <Sparkles size={14} />
            Choose Your Test
          </div>
          <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Select Practice Mode
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Choose how you want to practice. Questions won&apos;t repeat until you&apos;ve seen them all.
          </p>
        </div>

        {/* Upgrade Banner - shown when any limit is reached */}
        {anyLimitReached && !isPro && (
          <div className="mb-6 rounded-sm border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-amber-100 p-4 dark:border-amber-500/50 dark:from-amber-900/20 dark:to-amber-800/20">
            <div className="flex items-start gap-4">
              <div className="rounded-sm bg-amber-500 p-2 text-white">
                <Crown size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100">
                  Unlock Unlimited Practice
                </h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  You&apos;ve reached your free tier limit. Upgrade to Pro for unlimited practice tests,
                  advanced analytics, argument mapping, and more.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href="/subscription"
                    className="inline-flex items-center gap-2 rounded-sm bg-amber-500 px-4 py-2 text-sm font-bold text-stone-900 transition hover:bg-amber-400"
                  >
                    <Crown size={16} />
                    Upgrade to Pro
                  </Link>
                  <span className="text-xs text-stone-500 dark:text-stone-400">
                    LR: {lrCompleted}/3 used | RC: {rcCompleted}/3 used
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Free tier usage indicator - shown when not at limit */}
        {!isPro && !anyLimitReached && (lrCompleted > 0 || rcCompleted > 0) && (
          <div className="mb-6 rounded-sm border border-stone-200 bg-stone-50 p-3 dark:border-stone-700 dark:bg-stone-900">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-600 dark:text-stone-400">Free tier usage:</span>
              <span className="font-medium text-stone-700 dark:text-stone-300">
                LR: {lrCompleted}/3 | RC: {rcCompleted}/3
              </span>
            </div>
          </div>
        )}

        {/* Test Options */}
        <div className="space-y-4">
          {testOptions.map((option) => (
            <TestOptionCard
              key={option.id}
              option={option}
              selected={selectedType === option.id}
              onSelect={() => setSelectedType(option.id)}
            />
          ))}
        </div>

        {/* Improvement Test Filters - only shown when type=improvement */}
        {preselectedType === "improvement" && wrongAnswerIds.length > 0 && (
          <div className="mt-6 space-y-4">
            {/* Section Type Filter */}
            <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              <div className="mb-3">
                <div className="font-medium text-stone-900 dark:text-stone-100">Filter by Section</div>
                <p className="text-sm text-stone-500">Show questions from specific sections</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSectionFilter("all")}
                  className={cx(
                    "flex-1 rounded-sm px-4 py-2 text-sm font-medium transition",
                    sectionFilter === "all"
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  All ({wrongAnswerIds.length})
                </button>
                <button
                  onClick={() => setSectionFilter("logical-reasoning")}
                  className={cx(
                    "flex-1 rounded-sm px-4 py-2 text-sm font-medium transition",
                    sectionFilter === "logical-reasoning"
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  LR ({lrWrongCount})
                </button>
                <button
                  onClick={() => setSectionFilter("reading-comprehension")}
                  className={cx(
                    "flex-1 rounded-sm px-4 py-2 text-sm font-medium transition",
                    sectionFilter === "reading-comprehension"
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  RC ({rcWrongCount})
                </button>
              </div>
            </div>

            {/* Filtered Question Count Display */}
            {filteredWrongAnswerIds.length !== wrongAnswerIds.length && (
              <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-900/20">
                <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
                  {filteredWrongAnswerIds.length} of {wrongAnswerIds.length} questions match your filters
                </p>
              </div>
            )}
          </div>
        )}

        {/* Question Mode Toggle - shown for all modes */}
        {selectedType && (
          <div className="mt-6 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-stone-900 dark:text-stone-100">
                  Question Selection Mode
                </div>
                <p className="text-sm text-stone-500">
                  {allowRepeats
                    ? "Questions you've seen before may appear again"
                    : "Only questions you haven't seen will appear"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAllowRepeats(false)}
                  className={cx(
                    "rounded-sm px-4 py-2 text-sm font-medium transition",
                    !allowRepeats
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  New Only
                </button>
                <button
                  onClick={() => setAllowRepeats(true)}
                  className={cx(
                    "rounded-sm px-4 py-2 text-sm font-medium transition",
                    allowRepeats
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  Allow Repeats
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Timed/Untimed Toggle */}
        {selectedType && (
          <div className="mt-6 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 font-medium text-stone-900 dark:text-stone-100">
                  <Clock size={18} className="text-amber-500" />
                  Timer Mode
                </div>
                <p className="text-sm text-stone-500">
                  {isTimed
                    ? "Standard LSAT timing will be enforced"
                    : "No time limit - practice at your own pace"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsTimed(true)}
                  className={cx(
                    "rounded-sm px-4 py-2 text-sm font-medium transition",
                    isTimed
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  Timed
                </button>
                <button
                  onClick={() => setIsTimed(false)}
                  className={cx(
                    "rounded-sm px-4 py-2 text-sm font-medium transition",
                    !isTimed
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  Untimed
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
          <button
            onClick={handleStartTest}
            disabled={!selectedType || selectedTestBlocked}
            className={cx(
              "inline-flex items-center gap-2 rounded-sm px-8 py-3 font-bold transition",
              selectedType && !selectedTestBlocked
                ? "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                : "cursor-not-allowed bg-stone-300 text-stone-500 dark:bg-stone-700 dark:text-stone-500"
            )}
          >
            {selectedTestBlocked ? (
              <>
                <Lock size={18} />
                Upgrade to Start
              </>
            ) : (
              <>
                Start Test
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h3 className="mb-4 font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Quick Tips
          </h3>
          <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
            {preselectedType === "targeted" ? (
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Targeted Practice:</strong> Practice NEW questions from topics you struggle with
                  to improve your weak areas.
                </span>
              </li>
            ) : preselectedType === "improvement" ? (
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Review Missed Questions:</strong> Retry specific questions you got wrong
                  until you master them.
                </span>
              </li>
            ) : mode === "full" ? (
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Full Practice Test:</strong> Best for building test-day stamina and getting
                  an accurate score estimate.
                </span>
              </li>
            ) : mode === "section" ? (
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Section Practice:</strong> Focus on your weaker areas without time pressure
                  from other sections.
                </span>
              </li>
            ) : (
              <>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-green-600" />
                  <span>
                    <strong>Full Practice Test:</strong> Best for building test-day stamina and getting
                    an accurate score estimate.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-green-600" />
                  <span>
                    <strong>Section Practice:</strong> Focus on your weaker areas without time pressure
                    from other sections.
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

// ============================================
// MAIN COMPONENT (with Suspense)
// ============================================

export default function TestSelectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
          <div className="flex min-h-screen items-center justify-center">
            <div className="animate-pulse text-stone-500">Loading...</div>
          </div>
        </div>
      }
    >
      <TestSelectContent />
    </Suspense>
  );
}
