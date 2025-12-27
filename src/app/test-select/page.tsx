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
  ListChecks,
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

  return (
    <button
      onClick={onSelect}
      disabled={disabled || !option.available}
      className={cx(
        "relative w-full rounded-sm border-2 p-6 text-left transition",
        selected
          ? "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/10"
          : "border-stone-200 bg-white hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-stone-600",
        !option.available && "cursor-not-allowed opacity-50",
        option.highlight && !selected && "border-amber-400 dark:border-amber-500/50"
      )}
    >
      {option.badge && (
        <div className="absolute -top-3 right-4 rounded-sm bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-900">
          {option.badge}
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className={cx(
            "rounded-sm p-3",
            selected
              ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
              : "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400"
          )}
        >
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              {option.title}
            </h3>
            {selected && (
              <CheckCircle2 size={20} className="text-[#1a365d] dark:text-amber-400" />
            )}
          </div>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{option.description}</p>
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-1 rounded-sm bg-stone-100 px-2 py-1 dark:bg-stone-800">
              <Layers size={12} />
              {option.sections}
            </span>
            <span className="flex items-center gap-1 rounded-sm bg-stone-100 px-2 py-1 dark:bg-stone-800">
              <Clock size={12} />
              {option.time}
            </span>
            <span className="flex items-center gap-1 rounded-sm bg-stone-100 px-2 py-1 dark:bg-stone-800">
              <ListChecks size={12} />
              {option.questionCount} questions
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
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

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

  if (isLoading || !progress) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-pulse text-stone-500">Loading...</div>
        </div>
      </div>
    );
  }

  const wrongAnswerIds = getWrongAnswerQuestionIds(progress);
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
      wrongAnswerIds.length > 0
        ? `Retry the ${wrongAnswerIds.length} question${wrongAnswerIds.length > 1 ? "s" : ""} you previously got wrong. Master them to mark as complete.`
        : "Complete some practice tests first. Questions you miss will appear here for review.",
    icon: RotateCcw,
    sections: "Custom",
    time: "Varies",
    questionCount: wrongAnswerIds.length,
    available: wrongAnswerIds.length > 0,
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

    const params = new URLSearchParams();
    params.set("type", selectedType);

    if (allowRepeats) {
      params.set("allowRepeats", "true");
    }

    if (selectedType === "improvement") {
      params.set("questionIds", wrongAnswerIds.join(","));
    }

    if (selectedType === "targeted") {
      // Pass the weak question types for targeted practice
      params.set("weakTypes", weakQuestionTypes.join(","));
    }

    router.push(`/practice?${params.toString()}`);
  };

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
            disabled={!selectedType}
            className={cx(
              "inline-flex items-center gap-2 rounded-sm px-8 py-3 font-bold transition",
              selectedType
                ? "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                : "cursor-not-allowed bg-stone-300 text-stone-500 dark:bg-stone-700 dark:text-stone-500"
            )}
          >
            Start Test
            <ArrowRight size={18} />
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
