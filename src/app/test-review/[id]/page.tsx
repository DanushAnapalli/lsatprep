"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Brain,
  Award,
  Target,
} from "lucide-react";
import {
  loadUserProgress,
  CompletedTest,
  CompletedSection,
  AnsweredQuestion,
  setCurrentUserId,
} from "@/lib/user-progress";
import {
  logicalReasoningQuestions,
  readingComprehensionQuestions,
} from "@/lib/sample-questions";
import { Question } from "@/lib/lsat-types";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins >= 60) {
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours}h ${remainingMins}m`;
  }
  return `${mins}m ${secs}s`;
}

// Get question details from ID
function getQuestionById(id: string): Question | undefined {
  const allQuestions = [...logicalReasoningQuestions, ...readingComprehensionQuestions];
  return allQuestions.find((q) => q.id === id);
}

// Question Review Card Component
// Format time for individual questions (seconds to readable)
function formatQuestionTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

// Get time color based on whether it's fast, normal, or slow for LSAT
function getTimeColor(seconds: number, isCorrect: boolean): string {
  // LSAT average is about 1:30 per question (90 seconds)
  if (seconds <= 60) {
    return "text-green-600 dark:text-green-400"; // Fast
  } else if (seconds <= 120) {
    return "text-amber-600 dark:text-amber-400"; // Normal
  } else {
    return "text-red-600 dark:text-red-400"; // Slow
  }
}

// Get ordinal suffix for a number (1st, 2nd, 3rd, 4th, etc.)
function getOrdinalSuffix(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function QuestionReviewCard({
  answeredQuestion,
  questionNumber,
  isExpanded,
  onToggle,
  sectionType,
  averageTime,
  previousPassageId,
}: {
  answeredQuestion: AnsweredQuestion;
  questionNumber: number;
  isExpanded: boolean;
  onToggle: () => void;
  sectionType: "logical-reasoning" | "reading-comprehension";
  averageTime: number;
  previousPassageId?: string;
}) {
  const question = getQuestionById(answeredQuestion.questionId);

  if (!question) {
    return null;
  }

  const isCorrect = answeredQuestion.isCorrect;
  const timeSpent = answeredQuestion.timeSpent || 0;
  const timeColor = getTimeColor(timeSpent, isCorrect);

  return (
    <div
      className={cx(
        "rounded-sm border-2 transition-all duration-300",
        isCorrect
          ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30"
          : "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30"
      )}
    >
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={cx(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
              isCorrect
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            )}
          >
            {questionNumber}
          </div>
          <div>
            <div className="font-medium text-stone-900 dark:text-stone-100">
              {question.type.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
            </div>
            <div className="text-sm text-stone-500">
              Your answer: {answeredQuestion.selectedAnswer || "Skipped"} • Correct: {answeredQuestion.correctAnswer}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Time spent indicator */}
          <div className="flex items-center gap-1 text-sm">
            <Clock size={14} className={timeColor} />
            <span className={cx("font-medium", timeColor)}>
              {formatQuestionTime(timeSpent)}
            </span>
          </div>
          {isCorrect ? (
            <CheckCircle2 className="text-green-500" size={20} />
          ) : (
            <XCircle className="text-red-500" size={20} />
          )}
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-stone-200 dark:border-stone-700 p-4 space-y-4">
          {/* Stimulus */}
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase mb-2">Passage</div>
            <div className="text-sm leading-relaxed whitespace-pre-wrap text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-800 p-4 rounded border border-stone-200 dark:border-stone-700">
              {/* Same Passage indicator for RC questions */}
              {sectionType === "reading-comprehension" &&
               previousPassageId &&
               previousPassageId === question.passageId && (
                <div className="mb-3 inline-flex items-center gap-2 rounded bg-amber-100 px-3 py-1.5 dark:bg-amber-900/40">
                  <BookOpen size={14} className="text-amber-600 dark:text-amber-400" />
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">Same Passage</span>
                </div>
              )}
              {question.stimulus}
            </div>
          </div>

          {/* Question */}
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase mb-2">Question</div>
            <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
              {question.questionStem}
            </div>
          </div>

          {/* Answer Choices */}
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase mb-2">Answer Choices</div>
            <div className="space-y-2">
              {question.answerChoices.map((choice) => {
                const isSelected = answeredQuestion.selectedAnswer === choice.letter;
                const isCorrectAnswer = choice.letter === answeredQuestion.correctAnswer;

                return (
                  <div
                    key={choice.letter}
                    className={cx(
                      "p-3 rounded border text-sm",
                      isCorrectAnswer
                        ? "bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700"
                        : isSelected
                        ? "bg-red-100 border-red-300 dark:bg-red-900/30 dark:border-red-700"
                        : "bg-white border-stone-200 dark:bg-stone-800 dark:border-stone-700"
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={cx(
                          "font-bold",
                          isCorrectAnswer
                            ? "text-green-600 dark:text-green-400"
                            : isSelected
                            ? "text-red-600 dark:text-red-400"
                            : "text-stone-500"
                        )}
                      >
                        {choice.letter}.
                      </span>
                      <span className="text-stone-700 dark:text-stone-300">{choice.text}</span>
                      {isCorrectAnswer && (
                        <CheckCircle2 className="text-green-500 ml-auto shrink-0" size={16} />
                      )}
                      {isSelected && !isCorrectAnswer && (
                        <XCircle className="text-red-500 ml-auto shrink-0" size={16} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase mb-2">Explanation</div>
            <div className="text-sm text-stone-700 dark:text-stone-300 bg-amber-50 dark:bg-amber-900/20 p-3 rounded border border-amber-200 dark:border-amber-800">
              {question.explanation}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default function TestReviewPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.id as string;

  const [test, setTest] = useState<CompletedTest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<"all" | "correct" | "incorrect">("all");
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

  // Load test when auth is determined
  useEffect(() => {
    if (authLoading) return;
    const progress = loadUserProgress(user?.uid);
    const foundTest = progress.completedTests.find((t) => t.id === testId);
    setTest(foundTest || null);
    setIsLoading(false);
  }, [testId, user, authLoading]);

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => {
      const newState = { ...prev };
      if (newState[questionId]) {
        delete newState[questionId];
      } else {
        newState[questionId] = true;
      }
      return newState;
    });
  };

  const expandAll = () => {
    if (!test) return;
    const allIds = test.sections.flatMap((s) => s.questions.map((q) => q.questionId));
    const expanded: Record<string, boolean> = {};
    allIds.forEach(id => { expanded[id] = true; });
    setExpandedQuestions(expanded);
  };

  const collapseAll = () => {
    setExpandedQuestions({});
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <Scale size={48} className="mx-auto mb-4 text-[#1a365d] dark:text-amber-400 animate-pulse" />
          <div className="text-stone-600 dark:text-stone-400">Loading test review...</div>
        </div>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <XCircle size={48} className="mx-auto mb-4 text-red-500" />
          <div className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
            Test Not Found
          </div>
          <div className="text-stone-600 dark:text-stone-400 mb-4">
            This test could not be found in your history.
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const dateFormatted = new Date(test.completedAt).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Get all questions with their answers
  const allQuestions = test.sections.flatMap((section) =>
    section.questions.map((q) => ({
      ...q,
      sectionType: section.type,
    }))
  );

  const filteredQuestions = allQuestions.filter((q) => {
    if (filter === "all") return true;
    if (filter === "correct") return q.isCorrect;
    if (filter === "incorrect") return !q.isCorrect;
    return true;
  });

  const correctCount = allQuestions.filter((q) => q.isCorrect).length;
  const incorrectCount = allQuestions.filter((q) => !q.isCorrect).length;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900 sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
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
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Test Summary Card */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                {test.testName}
              </h1>
              <div className="flex items-center gap-4 mt-2 text-sm text-stone-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {dateFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {formatTime(test.timeUsed)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                  {test.scaledScore}
                </div>
                <div className="text-xs text-stone-500">Scaled Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stone-700 dark:text-stone-300">
                  {getOrdinalSuffix(test.percentile)}
                </div>
                <div className="text-xs text-stone-500">Percentile</div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-700">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-lg font-bold text-stone-900 dark:text-stone-100">
                <Target size={18} className="text-stone-400" />
                {test.correctAnswers}/{test.totalQuestions}
              </div>
              <div className="text-xs text-stone-500">Total Correct</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-lg font-bold text-green-600">
                <CheckCircle2 size={18} />
                {correctCount}
              </div>
              <div className="text-xs text-stone-500">Correct</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-lg font-bold text-red-600">
                <XCircle size={18} />
                {incorrectCount}
              </div>
              <div className="text-xs text-stone-500">Incorrect</div>
            </div>
          </div>
        </div>

        {/* Timing Analytics */}
        {(() => {
          const questionTimes = allQuestions.map(q => q.timeSpent || 0);
          const totalTime = questionTimes.reduce((a, b) => a + b, 0);
          const avgTime = questionTimes.length > 0 ? Math.round(totalTime / questionTimes.length) : 0;
          const fastQuestions = questionTimes.filter(t => t <= 60).length;
          const normalQuestions = questionTimes.filter(t => t > 60 && t <= 120).length;
          const slowQuestions = questionTimes.filter(t => t > 120).length;
          const correctTimes = allQuestions.filter(q => q.isCorrect).map(q => q.timeSpent || 0);
          const incorrectTimes = allQuestions.filter(q => !q.isCorrect).map(q => q.timeSpent || 0);
          const avgCorrectTime = correctTimes.length > 0 ? Math.round(correctTimes.reduce((a, b) => a + b, 0) / correctTimes.length) : 0;
          const avgIncorrectTime = incorrectTimes.length > 0 ? Math.round(incorrectTimes.reduce((a, b) => a + b, 0) / incorrectTimes.length) : 0;

          return (
            <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
                <Clock size={20} className="text-amber-500" />
                Timing Analytics
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-stone-50 dark:bg-stone-800 rounded">
                  <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {formatQuestionTime(avgTime)}
                  </div>
                  <div className="text-xs text-stone-500">Avg per Question</div>
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {fastQuestions}
                  </div>
                  <div className="text-xs text-stone-500">Fast (&lt;1min)</div>
                </div>
                <div className="text-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    {normalQuestions}
                  </div>
                  <div className="text-xs text-stone-500">Normal (1-2min)</div>
                </div>
                <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {slowQuestions}
                  </div>
                  <div className="text-xs text-stone-500">Slow (&gt;2min)</div>
                </div>
              </div>

              {/* Correct vs Incorrect timing comparison */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200 dark:border-stone-700">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm text-stone-600 dark:text-stone-400">Correct Answers</span>
                  </div>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {formatQuestionTime(avgCorrectTime)} avg
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded">
                  <div className="flex items-center gap-2">
                    <XCircle size={16} className="text-red-500" />
                    <span className="text-sm text-stone-600 dark:text-stone-400">Incorrect Answers</span>
                  </div>
                  <span className="font-bold text-red-600 dark:text-red-400">
                    {formatQuestionTime(avgIncorrectTime)} avg
                  </span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Filter and Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-stone-600 dark:text-stone-400">Filter:</span>
            <div className="flex rounded-sm border-2 border-stone-200 dark:border-stone-700 overflow-hidden">
              {[
                { value: "all", label: "All" },
                { value: "correct", label: "Correct" },
                { value: "incorrect", label: "Incorrect" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value as typeof filter)}
                  className={cx(
                    "px-3 py-1.5 text-sm font-medium transition-colors",
                    filter === option.value
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-white text-stone-600 hover:bg-stone-50 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-stone-500">
              No questions match the current filter.
            </div>
          ) : (
            (() => {
              const avgTime = allQuestions.length > 0
                ? Math.round(allQuestions.reduce((sum, q) => sum + (q.timeSpent || 0), 0) / allQuestions.length)
                : 90;
              return filteredQuestions.map((question, index) => {
                // Get previous question's passageId for "same passage" indicator
                const prevQuestion = index > 0 ? filteredQuestions[index - 1] : null;
                const prevQuestionData = prevQuestion ? getQuestionById(prevQuestion.questionId) : null;
                const previousPassageId = prevQuestionData?.passageId;

                return (
                  <QuestionReviewCard
                    key={question.questionId}
                    answeredQuestion={question}
                    questionNumber={index + 1}
                    isExpanded={!!expandedQuestions[question.questionId]}
                    onToggle={() => toggleQuestion(question.questionId)}
                    sectionType={question.sectionType as "logical-reasoning" | "reading-comprehension"}
                    averageTime={avgTime}
                    previousPassageId={previousPassageId}
                  />
                );
              });
            })()
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
