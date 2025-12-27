"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Pause,
  Play,
  BookOpen,
  Scale,
  Eye,
  EyeOff,
  Home,
  BarChart3,
  Lock,
  Crown,
  ArrowRight,
} from "lucide-react";
import {
  Question,
  Section,
  SectionType,
  UserAnswer,
  SectionResult,
  calculateScaledScore,
  getPercentile,
  LR_TYPE_DESCRIPTIONS,
  RC_TYPE_DESCRIPTIONS,
  LogicalReasoningQuestionType,
  ReadingComprehensionQuestionType,
} from "@/lib/lsat-types";
import {
  logicalReasoningQuestions,
  readingComprehensionQuestions,
} from "@/lib/sample-questions";
import {
  loadUserProgress,
  saveUserProgress,
  recordCompletedTest,
  recordImprovementTest,
  UserProgress,
  CompletedTest,
  CompletedSection,
  AnsweredQuestion,
  setCurrentUserId,
} from "@/lib/user-progress";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { getUserTier, canStartLRTest, canStartRCTest, TIER_LIMITS, SubscriptionTier } from "@/lib/subscription";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

type TestType = "full" | "lr-only" | "rc-only" | "improvement" | "targeted" | "custom";

// ============================================
// HELPER FUNCTIONS
// ============================================

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateTestId(): string {
  return `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function buildTestSections(
  testType: TestType,
  progress: UserProgress,
  specificQuestionIds?: string[],
  allowRepeats: boolean = false,
  weakTypes?: string[]
): Section[] {
  const allLR = [...logicalReasoningQuestions];
  const allRC = [...readingComprehensionQuestions];
  const allQuestions = [...allLR, ...allRC];

  // Get unseen questions
  const unseenLR = allLR.filter((q) => !progress.seenQuestionIds.includes(q.id));
  const unseenRC = allRC.filter((q) => !progress.seenQuestionIds.includes(q.id));

  // If allowRepeats is true, use all questions shuffled
  // Otherwise, use unseen first, then fall back to all questions only if no unseen remain
  let availableLR: Question[];
  let availableRC: Question[];

  if (allowRepeats) {
    // User explicitly allows repeats - use all questions
    availableLR = shuffleArray(allLR);
    availableRC = shuffleArray(allRC);
  } else {
    // Default: prioritize unseen questions, fall back to all if none remain
    availableLR = unseenLR.length > 0 ? shuffleArray(unseenLR) : shuffleArray(allLR);
    availableRC = unseenRC.length > 0 ? shuffleArray(unseenRC) : shuffleArray(allRC);
  }

  switch (testType) {
    case "improvement": {
      if (!specificQuestionIds || specificQuestionIds.length === 0) {
        return [];
      }
      const questions = allQuestions.filter((q) => specificQuestionIds.includes(q.id));
      if (questions.length === 0) return [];
      return [
        {
          id: "improvement-section",
          type: "logical-reasoning" as SectionType,
          questions: shuffleArray(questions),
          timeLimit: Math.max(questions.length * 90, 300), // 1.5 min per question, min 5 min
          isScored: true,
        },
      ];
    }

    case "targeted": {
      if (!weakTypes || weakTypes.length === 0) {
        return [];
      }
      // Get unseen questions from weak topic types
      const targetedQuestions = allQuestions.filter(
        (q) => weakTypes.includes(q.type) && !progress.seenQuestionIds.includes(q.id)
      );
      if (targetedQuestions.length === 0) return [];

      // Shuffle and limit to a reasonable number (max 25 questions)
      const shuffled = shuffleArray(targetedQuestions);
      const questions = shuffled.slice(0, Math.min(25, shuffled.length));

      // Separate into LR and RC sections if we have both types
      const lrQuestions = questions.filter((q) => q.sectionType === "logical-reasoning");
      const rcQuestions = questions.filter((q) => q.sectionType === "reading-comprehension");

      const sections: Section[] = [];

      if (lrQuestions.length > 0) {
        sections.push({
          id: "targeted-lr-section",
          type: "logical-reasoning" as SectionType,
          questions: lrQuestions,
          timeLimit: Math.max(lrQuestions.length * 90, 300), // 1.5 min per question, min 5 min
          isScored: true,
        });
      }

      if (rcQuestions.length > 0) {
        sections.push({
          id: "targeted-rc-section",
          type: "reading-comprehension" as SectionType,
          questions: rcQuestions,
          timeLimit: Math.max(rcQuestions.length * 90, 300), // 1.5 min per question, min 5 min
          isScored: true,
        });
      }

      return sections;
    }

    case "lr-only": {
      const questions = availableLR.slice(0, Math.min(25, availableLR.length));
      if (questions.length === 0) return [];
      const half = Math.ceil(questions.length / 2);
      const sections: Section[] = [];

      if (half > 0) {
        sections.push({
          id: "lr-section-1",
          type: "logical-reasoning",
          questions: questions.slice(0, half),
          timeLimit: 2100,
          isScored: true,
        });
      }

      if (questions.length > half) {
        sections.push({
          id: "lr-section-2",
          type: "logical-reasoning",
          questions: questions.slice(half),
          timeLimit: 2100,
          isScored: true,
        });
      }

      return sections;
    }

    case "rc-only": {
      const questions = availableRC.slice(0, Math.min(27, availableRC.length));
      if (questions.length === 0) return [];
      return [
        {
          id: "rc-section-1",
          type: "reading-comprehension",
          questions,
          timeLimit: 2100,
          isScored: true,
        },
      ];
    }

    case "full":
    default: {
      const lrQuestions = availableLR.slice(0, Math.min(50, availableLR.length));
      const rcQuestions = availableRC.slice(0, Math.min(27, availableRC.length));
      const sections: Section[] = [];

      const lrHalf = Math.ceil(lrQuestions.length / 2);

      if (lrHalf > 0) {
        sections.push({
          id: "section-1-lr",
          type: "logical-reasoning",
          questions: lrQuestions.slice(0, lrHalf),
          timeLimit: 2100,
          isScored: true,
        });
      }

      if (lrQuestions.length > lrHalf) {
        sections.push({
          id: "section-2-lr",
          type: "logical-reasoning",
          questions: lrQuestions.slice(lrHalf),
          timeLimit: 2100,
          isScored: true,
        });
      }

      if (rcQuestions.length > 0) {
        sections.push({
          id: "section-3-rc",
          type: "reading-comprehension",
          questions: rcQuestions,
          timeLimit: 2100,
          isScored: true,
        });
      }

      return sections;
    }
  }
}

// ============================================
// TIMER COMPONENT
// ============================================

function Timer({
  timeRemaining,
  isPaused,
  onPause,
  onResume,
}: {
  timeRemaining: number;
  isPaused: boolean;
  onPause: () => void;
  onResume: () => void;
}) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLowTime = timeRemaining < 300;

  return (
    <div
      className={cx(
        "flex items-center gap-3 rounded-sm border-2 px-4 py-2",
        isLowTime
          ? "border-red-500 bg-red-50 text-red-700 dark:border-red-500 dark:bg-red-900/20 dark:text-red-400"
          : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
      )}
    >
      <Clock size={20} className={isLowTime ? "animate-pulse" : ""} />
      <span className="font-mono text-lg font-bold tabular-nums">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
      <button
        onClick={isPaused ? onResume : onPause}
        className="rounded p-1 hover:bg-stone-100 dark:hover:bg-stone-700"
        type="button"
      >
        {isPaused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </div>
  );
}

// ============================================
// QUESTION NAVIGATOR
// ============================================

function QuestionNavigator({
  questions,
  currentIndex,
  answers,
  onSelect,
  showResults,
}: {
  questions: Question[];
  currentIndex: number;
  answers: Map<string, UserAnswer>;
  onSelect: (index: number) => void;
  showResults?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((q, i) => {
        const answer = answers.get(q.id);
        const isAnswered = answer?.selectedAnswer !== null && answer?.selectedAnswer !== undefined;
        const isFlagged = answer?.flagged;
        const isCurrent = i === currentIndex;
        const isCorrect = showResults && answer?.selectedAnswer === q.correctAnswer;
        const isWrong = showResults && answer?.selectedAnswer && answer.selectedAnswer !== q.correctAnswer;

        return (
          <button
            key={q.id}
            onClick={() => onSelect(i)}
            type="button"
            className={cx(
              "relative flex h-10 w-10 items-center justify-center rounded-sm border-2 text-sm font-bold transition",
              isCurrent
                ? "border-[#1a365d] bg-[#1a365d] text-white dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900"
                : showResults && isCorrect
                ? "border-green-500 bg-green-50 text-green-700 dark:border-green-500 dark:bg-green-900/20 dark:text-green-400"
                : showResults && isWrong
                ? "border-red-500 bg-red-50 text-red-700 dark:border-red-500 dark:bg-red-900/20 dark:text-red-400"
                : isAnswered
                ? "border-green-500 bg-green-50 text-green-700 dark:border-green-500 dark:bg-green-900/20 dark:text-green-400"
                : "border-stone-200 bg-white text-stone-600 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400"
            )}
          >
            {i + 1}
            {isFlagged && (
              <Flag size={10} className="absolute -right-1 -top-1 text-amber-500" fill="currentColor" />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ============================================
// ANSWER CHOICE
// ============================================

function AnswerChoice({
  letter,
  text,
  isSelected,
  isCorrect,
  isIncorrect,
  showResult,
  onSelect,
  disabled,
}: {
  letter: "A" | "B" | "C" | "D" | "E";
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  showResult: boolean;
  onSelect: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      type="button"
      className={cx(
        "flex w-full items-start gap-4 rounded-sm border-2 p-4 text-left transition",
        showResult && isCorrect
          ? "border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/20"
          : showResult && isIncorrect
          ? "border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-900/20"
          : isSelected
          ? "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/10"
          : "border-stone-200 bg-white hover:border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-stone-600",
        disabled && !showResult && "cursor-not-allowed opacity-50"
      )}
    >
      <span
        className={cx(
          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
          showResult && isCorrect
            ? "border-green-500 bg-green-500 text-white"
            : showResult && isIncorrect
            ? "border-red-500 bg-red-500 text-white"
            : isSelected
            ? "border-[#1a365d] bg-[#1a365d] text-white dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900"
            : "border-stone-300 bg-white dark:border-stone-600 dark:bg-stone-700"
        )}
      >
        {showResult && isCorrect ? (
          <CheckCircle2 size={16} />
        ) : showResult && isIncorrect ? (
          <XCircle size={16} />
        ) : (
          letter
        )}
      </span>
      <span className="flex-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{text}</span>
    </button>
  );
}

// ============================================
// MAIN PRACTICE CONTENT
// ============================================

function PracticeContent() {
  const searchParams = useSearchParams();

  const testType = (searchParams.get("type") as TestType) || "full";
  const questionIdsParam = searchParams.get("questionIds");
  const weakTypesParam = searchParams.get("weakTypes");
  const allowRepeatsParam = searchParams.get("allowRepeats") === "true";

  // Memoize the question IDs array to prevent infinite re-renders
  const specificQuestionIds = useMemo(() => {
    return questionIdsParam ? questionIdsParam.split(",").filter(Boolean) : undefined;
  }, [questionIdsParam]);

  // Memoize the weak types array
  const weakTypes = useMemo(() => {
    return weakTypesParam ? weakTypesParam.split(",").filter(Boolean) : undefined;
  }, [weakTypesParam]);

  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [testId] = useState(generateTestId);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, UserAnswer>>(new Map());
  const [timeRemaining, setTimeRemaining] = useState(2100);
  const [isPaused, setIsPaused] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [sectionResults, setSectionResults] = useState<SectionResult[]>([]);
  const [testStartTime] = useState(Date.now);
  const [isLoading, setIsLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  // Subscription tier state
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userTier, setUserTier] = useState<SubscriptionTier>("free");
  const [tierBlocked, setTierBlocked] = useState<string | null>(null);

  // Use refs to avoid stale closure issues in timer
  const sectionsRef = useRef<Section[]>([]);
  const currentSectionIndexRef = useRef(0);
  const answersRef = useRef<Map<string, UserAnswer>>(new Map());
  const timeRemainingRef = useRef(2100);

  // Listen to auth state and check tier
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      // Set current user ID for user-specific localStorage
      setCurrentUserId(firebaseUser?.uid || null);
      if (firebaseUser) {
        const tier = getUserTier(firebaseUser);
        setUserTier(tier);
      }
    });
    return () => unsubscribe();
  }, []);

  // Keep refs in sync
  useEffect(() => {
    sectionsRef.current = sections;
  }, [sections]);

  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    timeRemainingRef.current = timeRemaining;
  }, [timeRemaining]);

  // Initialize test ONCE
  useEffect(() => {
    if (initialized) return;

    const userId = user?.uid;
    const loadedProgress = loadUserProgress(userId);
    setProgress(loadedProgress);

    // Check tier limits for free users and guests
    const currentTier = user ? getUserTier(user) : "free";
    const isGuest = !user;

    // Count completed tests
    const completedTests = loadedProgress.completedTests.length;
    const completedLRTests = loadedProgress.completedTests.filter(
      (test) => test.sections.some((s) => s.type === "logical-reasoning")
    ).length;
    const completedRCTests = loadedProgress.completedTests.filter(
      (test) => test.sections.some((s) => s.type === "reading-comprehension")
    ).length;

    // Guests get 1 free test total, then must sign up
    if (isGuest && completedTests >= 1) {
      setTierBlocked("GUEST_LIMIT");
      setIsLoading(false);
      setInitialized(true);
      return;
    }

    // Check if free user has exceeded limits
    if (currentTier === "free" && !isGuest) {
      const tierLimits = TIER_LIMITS.free;

      if (testType === "lr-only" && completedLRTests >= tierLimits.lrSetsAllowed) {
        setTierBlocked("You've reached your free limit of 1 LR practice set. Upgrade to Pro for unlimited practice!");
        setIsLoading(false);
        setInitialized(true);
        return;
      }

      if (testType === "rc-only" && completedRCTests >= tierLimits.rcSetsAllowed) {
        setTierBlocked("You've reached your free limit of 1 RC practice set. Upgrade to Pro for unlimited practice!");
        setIsLoading(false);
        setInitialized(true);
        return;
      }

      if (testType === "full" && (completedLRTests >= tierLimits.lrSetsAllowed || completedRCTests >= tierLimits.rcSetsAllowed)) {
        setTierBlocked("You've reached your free practice limit. Upgrade to Pro for unlimited full practice tests!");
        setIsLoading(false);
        setInitialized(true);
        return;
      }
    }

    // Save current stats as the baseline for dashboard comparison
    // This way, after completing this test, dashboard will show the gains from THIS test
    const totalStudyTime = loadedProgress.completedTests.reduce((acc, test) => acc + test.timeUsed, 0);
    const dashboardStats = {
      averageScore: loadedProgress.averageScore,
      highestScore: loadedProgress.highestScore,
      totalQuestionsAnswered: loadedProgress.totalQuestionsAnswered,
      totalCorrect: loadedProgress.totalCorrect,
      testsCompleted: loadedProgress.completedTests.length,
      studyTimeSeconds: totalStudyTime,
      timestamp: Date.now(),
    };
    localStorage.setItem("lsatprep-dashboard-stats", JSON.stringify(dashboardStats));

    const builtSections = buildTestSections(testType, loadedProgress, specificQuestionIds, allowRepeatsParam, weakTypes);
    setSections(builtSections);
    sectionsRef.current = builtSections;

    if (builtSections.length > 0) {
      const initialTime = builtSections[0].timeLimit;
      setTimeRemaining(initialTime);
      timeRemainingRef.current = initialTime;
    }

    setIsLoading(false);
    setInitialized(true);
  }, [testType, specificQuestionIds, allowRepeatsParam, weakTypes, initialized, user]);

  const currentSection = sections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];

  // Handle section completion - using ref values to avoid closure issues
  const handleSectionComplete = useCallback(() => {
    const secs = sectionsRef.current;
    const secIndex = currentSectionIndexRef.current;
    const ans = answersRef.current;
    const timeRem = timeRemainingRef.current;

    const section = secs[secIndex];
    if (!section) return;

    const sectionQuestions = section.questions;
    let rawScore = 0;
    const sectionAnswers: UserAnswer[] = [];

    sectionQuestions.forEach((q) => {
      const answer = ans.get(q.id);
      if (answer?.selectedAnswer === q.correctAnswer) {
        rawScore++;
      }
      sectionAnswers.push(
        answer || {
          questionId: q.id,
          selectedAnswer: null,
          timeSpent: 0,
          flagged: false,
        }
      );
    });

    const result: SectionResult = {
      sectionId: section.id,
      answers: sectionAnswers,
      rawScore,
      totalQuestions: sectionQuestions.length,
      timeUsed: section.timeLimit - timeRem,
      completed: true,
    };

    setSectionResults((prev) => [...prev, result]);

    if (secIndex < secs.length - 1) {
      const nextSection = secs[secIndex + 1];
      setCurrentSectionIndex(secIndex + 1);
      currentSectionIndexRef.current = secIndex + 1;
      setCurrentQuestionIndex(0);
      setTimeRemaining(nextSection.timeLimit);
      timeRemainingRef.current = nextSection.timeLimit;
    } else {
      setTestCompleted(true);
    }
  }, []);

  // Timer effect - clean implementation
  useEffect(() => {
    if (isPaused || isReviewMode || testCompleted || !currentSection || isLoading) {
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Don't call handleSectionComplete here - use a separate effect
          return 0;
        }
        timeRemainingRef.current = prev - 1;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, isReviewMode, testCompleted, currentSection, isLoading]);

  // Handle time running out
  useEffect(() => {
    if (timeRemaining === 0 && !testCompleted && !isReviewMode) {
      handleSectionComplete();
    }
  }, [timeRemaining, testCompleted, isReviewMode, handleSectionComplete]);

  // Handle answer selection
  const handleSelectAnswer = useCallback(
    (answer: "A" | "B" | "C" | "D" | "E") => {
      if (!currentQuestion || isReviewMode) return;

      setAnswers((prev) => {
        const newAnswers = new Map(prev);
        const existing = newAnswers.get(currentQuestion.id);
        newAnswers.set(currentQuestion.id, {
          questionId: currentQuestion.id,
          selectedAnswer: answer,
          timeSpent: existing?.timeSpent || 0,
          flagged: existing?.flagged || false,
        });
        return newAnswers;
      });
    },
    [currentQuestion?.id, isReviewMode]
  );

  // Handle flag toggle
  const handleToggleFlag = useCallback(() => {
    if (!currentQuestion) return;

    setAnswers((prev) => {
      const newAnswers = new Map(prev);
      const existing = newAnswers.get(currentQuestion.id);
      newAnswers.set(currentQuestion.id, {
        questionId: currentQuestion.id,
        selectedAnswer: existing?.selectedAnswer || null,
        timeSpent: existing?.timeSpent || 0,
        flagged: !existing?.flagged,
      });
      return newAnswers;
    });
  }, [currentQuestion?.id]);

  // Navigate questions
  const goToQuestion = useCallback(
    (index: number) => {
      if (currentSection && index >= 0 && index < currentSection.questions.length) {
        setCurrentQuestionIndex(index);
        setShowExplanation(false);
      }
    },
    [currentSection?.questions?.length]
  );

  const goToPrevious = () => goToQuestion(currentQuestionIndex - 1);
  const goToNext = () => goToQuestion(currentQuestionIndex + 1);

  // Save results when test completes
  useEffect(() => {
    if (!testCompleted || !progress || sectionResults.length === 0) return;

    const totalTimeUsed = Math.floor((Date.now() - testStartTime) / 1000);
    let totalRaw = 0;
    let totalQuestions = 0;

    const completedSections: CompletedSection[] = sectionResults.map((result) => {
      const section = sections.find((s) => s.id === result.sectionId);
      const questions = section?.questions || [];

      const answeredQuestions: AnsweredQuestion[] = questions.map((q) => {
        const answer = answers.get(q.id);
        const isCorrect = answer?.selectedAnswer === q.correctAnswer;
        if (isCorrect) totalRaw++;
        totalQuestions++;

        return {
          questionId: q.id,
          selectedAnswer: answer?.selectedAnswer || null,
          correctAnswer: q.correctAnswer,
          isCorrect,
          timeSpent: answer?.timeSpent || 0,
          questionType: q.type,
          sectionType: q.sectionType,
        };
      });

      return {
        id: result.sectionId,
        type: section?.type || "logical-reasoning",
        questions: answeredQuestions,
        correctCount: result.rawScore,
        totalCount: result.totalQuestions,
        timeUsed: result.timeUsed,
      };
    });

    const scaledScore = calculateScaledScore(totalRaw, totalQuestions);
    const percentile = getPercentile(scaledScore);

    const completedTest: CompletedTest = {
      id: testId,
      testName:
        testType === "improvement"
          ? "Review Missed Questions"
          : testType === "targeted"
          ? "Targeted Practice"
          : testType === "lr-only"
          ? "Logical Reasoning Practice"
          : testType === "rc-only"
          ? "Reading Comprehension Practice"
          : "Full Practice Test",
      completedAt: new Date(),
      sections: completedSections,
      totalQuestions,
      correctAnswers: totalRaw,
      scaledScore,
      percentile,
      timeUsed: totalTimeUsed,
    };

    let updatedProgress = recordCompletedTest(progress, completedTest);

    if (testType === "improvement") {
      const questionResults = completedSections.flatMap((s) =>
        s.questions.map((q) => ({
          questionId: q.questionId,
          isCorrect: q.isCorrect,
        }))
      );
      updatedProgress = recordImprovementTest(updatedProgress, questionResults);
    }

    saveUserProgress(updatedProgress, user?.uid);
    setProgress(updatedProgress);
  }, [testCompleted, user]); // Only run when test completes

  // Calculate final results
  const finalResults = useMemo(() => {
    if (!testCompleted || sectionResults.length === 0) return null;

    let totalRaw = 0;
    let totalQuestions = 0;

    sectionResults.forEach((result) => {
      const section = sections.find((s) => s.id === result.sectionId);
      if (section?.isScored) {
        totalRaw += result.rawScore;
        totalQuestions += result.totalQuestions;
      }
    });

    const scaledScore = calculateScaledScore(totalRaw, totalQuestions);
    const percentile = getPercentile(scaledScore);

    return { rawScore: totalRaw, totalQuestions, scaledScore, percentile };
  }, [testCompleted, sectionResults, sections]);

  // Enter review mode
  const enterReviewMode = () => {
    setIsReviewMode(true);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <div className="text-center">
          <div className="text-xl text-stone-600 dark:text-stone-400">Loading test...</div>
        </div>
      </div>
    );
  }

  // Show tier blocked message for free users who exceeded limits
  if (tierBlocked) {
    const isGuestBlock = tierBlocked === "GUEST_LIMIT";

    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <div className={`mx-auto max-w-md rounded-sm border-2 bg-white p-8 text-center shadow-lg dark:bg-stone-900 ${isGuestBlock ? "border-[#1a365d] dark:border-amber-500" : "border-amber-400 dark:border-amber-500"}`}>
          <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${isGuestBlock ? "bg-[#1a365d]/10 dark:bg-amber-500/20" : "bg-amber-100 dark:bg-amber-500/20"}`}>
            {isGuestBlock ? (
              <CheckCircle2 size={32} className="text-[#1a365d] dark:text-amber-400" />
            ) : (
              <Lock size={32} className="text-amber-600 dark:text-amber-400" />
            )}
          </div>
          <h2 className="mb-2 font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            {isGuestBlock ? "Free Trial Complete!" : "Free Limit Reached"}
          </h2>
          <p className="mb-6 text-stone-600 dark:text-stone-400">
            {isGuestBlock
              ? "Great job on your practice test! Sign up for free to save your progress and continue practicing."
              : tierBlocked}
          </p>
          <div className="space-y-3">
            {isGuestBlock ? (
              <>
                <Link
                  href="/"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#1a365d] px-6 py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                >
                  Sign Up Free
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/dashboard"
                  className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  View Results
                </Link>
              </>
            ) : (
              <>
                <a
                  href="/#pricing"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
                >
                  <Crown size={18} />
                  Upgrade to Pro - $15/mo
                </a>
                <Link
                  href="/dashboard"
                  className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  <ArrowLeft size={18} />
                  Back to Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (sections.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <div className="text-center">
          <BookOpen size={48} className="mx-auto mb-4 text-stone-300 dark:text-stone-600" />
          <div className="text-xl font-semibold text-stone-600 dark:text-stone-400">
            No questions available
          </div>
          <p className="mt-2 text-stone-500">
            {testType === "improvement"
              ? "You don't have any questions to review. Complete some practice tests first!"
              : testType === "targeted"
              ? "No new questions available for your weak topics. Complete more tests to identify weak areas, or allow repeats."
              : "No questions available for this test type."}
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-6 py-3 font-semibold text-white dark:bg-amber-500 dark:text-stone-900"
          >
            <Home size={18} />
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Results Screen
  if (testCompleted && !isReviewMode) {
    return (
      <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-sm border-4 border-[#1a365d] bg-white p-8 shadow-xl dark:border-amber-500 dark:bg-stone-900"
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a365d] dark:bg-amber-500">
                <Scale size={32} className="text-white dark:text-stone-900" />
              </div>
              <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                {testType === "improvement"
                  ? "Review Complete"
                  : testType === "targeted"
                  ? "Targeted Practice Complete"
                  : "Practice Test Complete"}
              </h1>
              {testType === "improvement" && (
                <p className="mt-2 text-stone-600 dark:text-stone-400">
                  Questions answered correctly have been marked as mastered!
                </p>
              )}
              {testType === "targeted" && (
                <p className="mt-2 text-stone-600 dark:text-stone-400">
                  Great work practicing your weak areas! Keep it up to improve your scores.
                </p>
              )}
            </div>

            {finalResults && (
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-sm border-2 border-stone-200 p-6 text-center dark:border-stone-700">
                  <div className="text-4xl font-bold text-[#1a365d] dark:text-amber-400">
                    {finalResults.scaledScore}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Scaled Score
                  </div>
                </div>
                <div className="rounded-sm border-2 border-stone-200 p-6 text-center dark:border-stone-700">
                  <div className="text-4xl font-bold text-[#1a365d] dark:text-amber-400">
                    {finalResults.rawScore}/{finalResults.totalQuestions}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Raw Score
                  </div>
                </div>
                <div className="rounded-sm border-2 border-stone-200 p-6 text-center dark:border-stone-700">
                  <div className="text-4xl font-bold text-[#1a365d] dark:text-amber-400">
                    {finalResults.percentile}%
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Percentile
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 space-y-4">
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                Section Breakdown
              </h2>
              {sectionResults.map((result, i) => {
                const section = sections.find((s) => s.id === result.sectionId);
                return (
                  <div
                    key={result.sectionId}
                    className="flex items-center justify-between rounded-sm border-2 border-stone-200 p-4 dark:border-stone-700"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 dark:text-stone-100">
                        Section {i + 1}:{" "}
                        {section?.type === "logical-reasoning"
                          ? "Logical Reasoning"
                          : "Reading Comprehension"}
                      </div>
                      <div className="text-sm text-stone-500">
                        {section?.isScored ? "Scored" : "Experimental (Unscored)"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                        {result.rawScore}/{result.totalQuestions}
                      </div>
                      <div className="text-sm text-stone-500">
                        {Math.round((result.rawScore / result.totalQuestions) * 100)}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={enterReviewMode}
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] px-6 py-3 font-bold text-white transition hover:bg-[#153050] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                <Eye size={20} />
                Review Answers
              </button>
              <Link
                href="/dashboard"
                className="flex flex-1 items-center justify-center gap-2 rounded-sm border-2 border-stone-300 px-6 py-3 font-bold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                <BarChart3 size={20} />
                View Dashboard
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <div className="text-center">
          <div className="text-xl text-stone-600 dark:text-stone-400">Loading question...</div>
        </div>
      </div>
    );
  }

  const currentAnswer = answers.get(currentQuestion.id);
  const questionTypeInfo =
    currentQuestion.sectionType === "logical-reasoning"
      ? LR_TYPE_DESCRIPTIONS[currentQuestion.type as LogicalReasoningQuestionType]
      : RC_TYPE_DESCRIPTIONS[currentQuestion.type as ReadingComprehensionQuestionType];

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ArrowLeft size={16} />
              Exit
            </Link>
            <div className="h-6 w-px bg-stone-200 dark:bg-stone-700" />
            <div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                {testType === "improvement"
                  ? "Review Missed Questions"
                  : testType === "targeted"
                  ? "Targeted Practice"
                  : `Section ${currentSectionIndex + 1} of ${sections.length}`}
              </div>
              <div className="text-xs text-stone-500">
                {currentSection?.type === "logical-reasoning"
                  ? "Logical Reasoning"
                  : "Reading Comprehension"}
              </div>
            </div>
          </div>

          {!isReviewMode && (
            <Timer
              timeRemaining={timeRemaining}
              isPaused={isPaused}
              onPause={() => setIsPaused(true)}
              onResume={() => setIsPaused(false)}
            />
          )}

          {isReviewMode && (
            <div className="flex items-center gap-2 rounded-sm bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
              <Eye size={16} />
              Review Mode
            </div>
          )}
        </div>
      </header>

      {/* Pause Overlay */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm"
          >
            <div className="rounded-sm border-4 border-[#1a365d] bg-white p-8 text-center dark:border-amber-500 dark:bg-stone-900">
              <Pause size={48} className="mx-auto mb-4 text-[#1a365d] dark:text-amber-500" />
              <h2 className="mb-2 font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                Test Paused
              </h2>
              <p className="mb-6 text-stone-600 dark:text-stone-400">Your timer has been stopped.</p>
              <button
                onClick={() => setIsPaused(false)}
                type="button"
                className="flex items-center justify-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] px-6 py-3 font-bold text-white transition hover:bg-[#153050] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900"
              >
                <Play size={20} />
                Resume Test
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Question Area */}
          <div className="lg:col-span-2">
            {/* Question Type Badge */}
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-sm bg-[#1a365d]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1a365d] dark:bg-amber-500/10 dark:text-amber-400">
                {questionTypeInfo?.name || currentQuestion.type}
              </span>
              <span className="text-sm text-stone-500">
                Question {currentQuestionIndex + 1} of {currentSection?.questions?.length || 0}
              </span>
            </div>

            {/* Stimulus */}
            <div className="mb-6 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-800">
              <p className="whitespace-pre-wrap text-base leading-relaxed text-stone-800 dark:text-stone-200">
                {currentQuestion.stimulus}
              </p>
            </div>

            {/* Question Stem */}
            <div className="mb-6">
              <p className="text-base font-semibold text-stone-900 dark:text-stone-100">
                {currentQuestion.questionStem}
              </p>
            </div>

            {/* Answer Choices */}
            <div className="space-y-3">
              {currentQuestion.answerChoices.map((choice) => (
                <AnswerChoice
                  key={choice.letter}
                  letter={choice.letter}
                  text={choice.text}
                  isSelected={currentAnswer?.selectedAnswer === choice.letter}
                  isCorrect={isReviewMode && choice.letter === currentQuestion.correctAnswer}
                  isIncorrect={
                    isReviewMode &&
                    currentAnswer?.selectedAnswer === choice.letter &&
                    choice.letter !== currentQuestion.correctAnswer
                  }
                  showResult={isReviewMode}
                  onSelect={() => handleSelectAnswer(choice.letter)}
                  disabled={isReviewMode}
                />
              ))}
            </div>

            {/* Explanation (Review Mode) */}
            {isReviewMode && (
              <div className="mt-6">
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  type="button"
                  className="flex items-center gap-2 text-sm font-semibold text-[#1a365d] hover:underline dark:text-amber-400"
                >
                  {showExplanation ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showExplanation ? "Hide Explanations" : "Show Explanations"}
                </button>

                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-4 overflow-hidden"
                    >
                      {/* User's answer result */}
                      {currentAnswer?.selectedAnswer && (
                        <div
                          className={cx(
                            "rounded-sm border-2 p-4",
                            currentAnswer.selectedAnswer === currentQuestion.correctAnswer
                              ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                              : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                          )}
                        >
                          <h4
                            className={cx(
                              "mb-2 font-bold",
                              currentAnswer.selectedAnswer === currentQuestion.correctAnswer
                                ? "text-green-800 dark:text-green-400"
                                : "text-red-800 dark:text-red-400"
                            )}
                          >
                            {currentAnswer.selectedAnswer === currentQuestion.correctAnswer
                              ? "You answered correctly!"
                              : `Your Answer: ${currentAnswer.selectedAnswer} (Incorrect)`}
                          </h4>
                          <p
                            className={cx(
                              "text-sm",
                              currentAnswer.selectedAnswer === currentQuestion.correctAnswer
                                ? "text-green-700 dark:text-green-300"
                                : "text-red-700 dark:text-red-300"
                            )}
                          >
                            {currentAnswer.selectedAnswer === currentQuestion.correctAnswer
                              ? "Great job! Even if this was a guess, understanding why this answer is correct will help reinforce your knowledge."
                              : currentQuestion.wrongAnswerExplanations?.[currentAnswer.selectedAnswer] ||
                                "This answer is incorrect. See the correct answer explanation below."}
                          </p>
                        </div>
                      )}

                      {/* No answer given */}
                      {!currentAnswer?.selectedAnswer && (
                        <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                          <h4 className="mb-2 font-bold text-amber-800 dark:text-amber-400">
                            No Answer Selected
                          </h4>
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            You didn&apos;t answer this question. Review the correct answer below to learn from this question.
                          </p>
                        </div>
                      )}

                      {/* Correct answer explanation */}
                      <div className="rounded-sm border-2 border-[#1a365d]/20 bg-[#1a365d]/5 p-4 dark:border-amber-500/20 dark:bg-amber-500/5">
                        <h4 className="mb-2 font-bold text-[#1a365d] dark:text-amber-400">
                          Correct Answer: {currentQuestion.correctAnswer}
                        </h4>
                        <p className="text-sm text-stone-700 dark:text-stone-300">
                          {currentQuestion.explanation}
                        </p>
                      </div>

                      {/* All wrong answer explanations (collapsible) */}
                      {currentQuestion.wrongAnswerExplanations && (
                        <details className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800">
                          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-stone-700">
                            Why are the other answers wrong?
                          </summary>
                          <div className="space-y-3 border-t border-stone-200 p-4 dark:border-stone-700">
                            {Object.entries(currentQuestion.wrongAnswerExplanations).map(([letter, explanation]) => (
                              <div key={letter} className="text-sm">
                                <span className="font-semibold text-stone-600 dark:text-stone-400">
                                  ({letter})
                                </span>{" "}
                                <span className="text-stone-600 dark:text-stone-400">{explanation}</span>
                              </div>
                            ))}
                          </div>
                        </details>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={goToPrevious}
                disabled={currentQuestionIndex === 0}
                type="button"
                className={cx(
                  "flex items-center gap-2 rounded-sm border-2 px-4 py-2 font-semibold transition",
                  currentQuestionIndex === 0
                    ? "cursor-not-allowed border-stone-200 text-stone-400 dark:border-stone-700"
                    : "border-stone-300 text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                )}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              {!isReviewMode && (
                <button
                  onClick={handleToggleFlag}
                  type="button"
                  className={cx(
                    "flex items-center gap-2 rounded-sm border-2 px-4 py-2 font-semibold transition",
                    currentAnswer?.flagged
                      ? "border-amber-500 bg-amber-50 text-amber-700 dark:border-amber-500 dark:bg-amber-900/20 dark:text-amber-400"
                      : "border-stone-300 text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                  )}
                >
                  <Flag size={16} fill={currentAnswer?.flagged ? "currentColor" : "none"} />
                  {currentAnswer?.flagged ? "Flagged" : "Flag for Review"}
                </button>
              )}

              {currentQuestionIndex < (currentSection?.questions?.length || 0) - 1 ? (
                <button
                  onClick={goToNext}
                  type="button"
                  className="flex items-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#153050] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              ) : !isReviewMode ? (
                <button
                  onClick={handleSectionComplete}
                  type="button"
                  className="flex items-center gap-2 rounded-sm border-2 border-green-600 bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
                >
                  <CheckCircle2 size={20} />
                  {currentSectionIndex < sections.length - 1 ? "Next Section" : "Finish Test"}
                </button>
              ) : (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-sm border-2 border-stone-300 px-4 py-2 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  Done Reviewing
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Question Navigator */}
            <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800">
              <h3 className="mb-4 font-bold text-stone-900 dark:text-stone-100">Question Navigator</h3>
              <QuestionNavigator
                questions={currentSection?.questions || []}
                currentIndex={currentQuestionIndex}
                answers={answers}
                onSelect={goToQuestion}
                showResults={isReviewMode}
              />
            </div>

            {/* Question Type Info */}
            {questionTypeInfo && (
              <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800">
                <h3 className="mb-2 font-bold text-stone-900 dark:text-stone-100">
                  About This Question Type
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">{questionTypeInfo.description}</p>
                {"tips" in questionTypeInfo && (
                  <div className="mt-4">
                    <h4 className="mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300">Tips:</h4>
                    <ul className="space-y-1">
                      {(questionTypeInfo as { tips: string[] }).tips.map((tip: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-[#1a365d] dark:text-amber-500"
                          />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Section Progress */}
            <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800">
              <h3 className="mb-4 font-bold text-stone-900 dark:text-stone-100">Progress</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600 dark:text-stone-400">Answered</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    {
                      Array.from(answers.values()).filter(
                        (a) => currentSection?.questions?.some((q) => q.id === a.questionId) && a.selectedAnswer
                      ).length
                    }{" "}
                    / {currentSection?.questions?.length || 0}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600 dark:text-stone-400">Flagged</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">
                    {
                      Array.from(answers.values()).filter(
                        (a) => currentSection?.questions?.some((q) => q.id === a.questionId) && a.flagged
                      ).length
                    }
                  </span>
                </div>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                <div
                  className="h-full bg-[#1a365d] transition-all dark:bg-amber-500"
                  style={{
                    width: `${
                      currentSection?.questions?.length
                        ? (Array.from(answers.values()).filter(
                            (a) => currentSection.questions.some((q) => q.id === a.questionId) && a.selectedAnswer
                          ).length /
                            currentSection.questions.length) *
                          100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
          <div className="text-xl text-stone-600 dark:text-stone-400">Loading...</div>
        </div>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}
