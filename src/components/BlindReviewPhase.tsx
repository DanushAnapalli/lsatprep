"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Brain,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  BlindReviewAnswer,
  BlindReviewResult,
  BlindReviewAnalysis,
  createBlindReviewResult,
  saveBlindReviewResult,
} from "@/lib/blind-review";
import { Question } from "@/lib/lsat-types";
import { AnsweredQuestion } from "@/lib/user-progress";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// ============================================
// BLIND REVIEW PROMPT
// ============================================

interface BlindReviewPromptProps {
  flaggedCount: number;
  onStartReview: () => void;
  onSkip: () => void;
}

export function BlindReviewPrompt({
  flaggedCount,
  onStartReview,
  onSkip,
}: BlindReviewPromptProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-sm border-4 border-[#1a365d] bg-white p-8 shadow-xl dark:border-amber-500 dark:bg-stone-900"
    >
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a365d]/10 dark:bg-amber-500/10">
          <Flag size={32} className="text-[#1a365d] dark:text-amber-400" />
        </div>

        <h2 className="mb-2 font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
          Blind Review Available
        </h2>

        <p className="mb-6 text-stone-600 dark:text-stone-400">
          You flagged {flaggedCount} question{flaggedCount > 1 ? "s" : ""} for
          review. Would you like to review {flaggedCount > 1 ? "them" : "it"}{" "}
          now without time pressure?
        </p>

        <div className="mb-6 rounded-sm bg-stone-50 p-4 text-left dark:bg-stone-800">
          <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
            What is Blind Review?
          </h3>
          <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={16}
                className="mt-0.5 flex-shrink-0 text-green-500"
              />
              <span>Review flagged questions without time pressure</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={16}
                className="mt-0.5 flex-shrink-0 text-green-500"
              />
              <span>Answers are hidden until you submit your review</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={16}
                className="mt-0.5 flex-shrink-0 text-green-500"
              />
              <span>
                Identify if mistakes are due to time pressure or knowledge gaps
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onSkip}
            className="flex-1 rounded-sm border-2 border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            Skip for Now
          </button>
          <button
            onClick={onStartReview}
            className="flex-1 rounded-sm bg-[#1a365d] px-6 py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            Start Blind Review
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// BLIND REVIEW QUESTION VIEW
// ============================================

interface BlindReviewQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  timedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  selectedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  confidence: "low" | "medium" | "high";
  onSelectAnswer: (answer: "A" | "B" | "C" | "D" | "E") => void;
  onSetConfidence: (confidence: "low" | "medium" | "high") => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isFirst: boolean;
  isLast: boolean;
  elapsedTime: number;
}

function BlindReviewQuestion({
  question,
  questionNumber,
  totalQuestions,
  timedAnswer,
  selectedAnswer,
  confidence,
  onSelectAnswer,
  onSetConfidence,
  onPrevious,
  onNext,
  onSubmit,
  isFirst,
  isLast,
  elapsedTime,
}: BlindReviewQuestionProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="rounded-sm bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            BLIND REVIEW
          </span>
          <span className="text-sm text-stone-500">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <div className="flex items-center gap-2 text-stone-500">
          <Clock size={16} />
          <span className="font-mono text-sm">{formatTime(elapsedTime)}</span>
          <span className="text-xs">(no limit)</span>
        </div>
      </div>

      {/* Previous Answer Indicator */}
      <div className="rounded-sm border-2 border-stone-200 bg-stone-50 p-3 dark:border-stone-700 dark:bg-stone-800">
        <div className="flex items-center gap-2 text-sm">
          <AlertCircle size={16} className="text-stone-400" />
          <span className="text-stone-600 dark:text-stone-400">
            Your timed answer:{" "}
            <span className="font-bold">
              {timedAnswer || "Not answered"}
            </span>
          </span>
        </div>
      </div>

      {/* Question Text */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <p className="whitespace-pre-wrap text-stone-800 dark:text-stone-200">
          {question.stimulus}
        </p>
        <p className="mt-4 font-semibold text-stone-900 dark:text-stone-100">
          {question.questionStem}
        </p>
      </div>

      {/* Answer Choices */}
      <div className="space-y-3">
        {question.answerChoices.map((choice) => {
          const isSelected = selectedAnswer === choice.letter;

          return (
            <button
              key={choice.letter}
              onClick={() => onSelectAnswer(choice.letter)}
              className={cx(
                "w-full rounded-sm border-2 p-4 text-left transition",
                isSelected
                  ? "border-[#1a365d] bg-[#1a365d]/10 dark:border-amber-500 dark:bg-amber-500/10"
                  : "border-stone-200 bg-white hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-stone-600"
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cx(
                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold",
                    isSelected
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                  )}
                >
                  {choice.letter}
                </span>
                <span
                  className={cx(
                    "pt-1",
                    isSelected
                      ? "text-stone-900 dark:text-stone-100"
                      : "text-stone-700 dark:text-stone-300"
                  )}
                >
                  {choice.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Confidence Level */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
        <label className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-300">
          How confident are you in this answer?
        </label>
        <div className="flex gap-3">
          {(["low", "medium", "high"] as const).map((level) => (
            <button
              key={level}
              onClick={() => onSetConfidence(level)}
              className={cx(
                "flex-1 rounded-sm border-2 py-2 text-sm font-medium capitalize transition",
                confidence === level
                  ? level === "high"
                    ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : level === "medium"
                    ? "border-amber-500 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    : "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  : "border-stone-200 text-stone-600 hover:border-stone-300 dark:border-stone-700 dark:text-stone-400"
              )}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={cx(
            "flex items-center gap-2 rounded-sm border-2 px-4 py-2 font-semibold transition",
            isFirst
              ? "cursor-not-allowed border-stone-200 text-stone-400"
              : "border-stone-300 text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
          )}
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        {isLast ? (
          <button
            onClick={onSubmit}
            disabled={!selectedAnswer}
            className={cx(
              "flex items-center gap-2 rounded-sm px-6 py-2 font-semibold transition",
              selectedAnswer
                ? "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                : "cursor-not-allowed bg-stone-300 text-stone-500"
            )}
          >
            Finish Review
            <CheckCircle2 size={18} />
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            Next
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// BLIND REVIEW RESULTS
// ============================================

interface BlindReviewResultsProps {
  result: BlindReviewResult;
  questions: Question[];
  onViewDetails: () => void;
  onContinue: () => void;
}

export function BlindReviewResults({
  result,
  questions,
  onViewDetails,
  onContinue,
}: BlindReviewResultsProps) {
  const { analysis } = result;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a365d]/10 dark:bg-amber-500/10">
          <Brain size={32} className="text-[#1a365d] dark:text-amber-400" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
          Blind Review Complete
        </h2>
        <p className="mt-2 text-stone-600 dark:text-stone-400">
          Here's what we learned about your performance
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/20">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Clock size={20} />
            <span className="font-semibold">Timing Issues</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-amber-700 dark:text-amber-400">
            {analysis.summary.timingIssueCount}
          </div>
          <p className="mt-1 text-xs text-amber-600 dark:text-amber-500">
            Wrong timed, correct untimed
          </p>
        </div>

        <div className="rounded-sm border-2 border-red-200 bg-red-50 p-4 dark:border-red-700 dark:bg-red-900/20">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
            <XCircle size={20} />
            <span className="font-semibold">Knowledge Gaps</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-red-700 dark:text-red-400">
            {analysis.summary.knowledgeGapCount}
          </div>
          <p className="mt-1 text-xs text-red-600 dark:text-red-500">
            Wrong in both phases
          </p>
        </div>

        <div className="rounded-sm border-2 border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle2 size={20} />
            <span className="font-semibold">Solid Knowledge</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-green-700 dark:text-green-400">
            {analysis.summary.solidKnowledgeCount}
          </div>
          <p className="mt-1 text-xs text-green-600 dark:text-green-500">
            Correct in both phases
          </p>
        </div>

        <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/5 p-4 dark:border-amber-500 dark:bg-amber-500/10">
          <div className="flex items-center gap-2 text-[#1a365d] dark:text-amber-400">
            <TrendingUp size={20} />
            <span className="font-semibold">Score Potential</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-[#1a365d] dark:text-amber-400">
            +{analysis.summary.improvementPotential}
          </div>
          <p className="mt-1 text-xs text-[#1a365d]/70 dark:text-amber-500">
            Points if timing resolved
          </p>
        </div>
      </div>

      {/* Insights */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
          <Lightbulb size={20} className="text-amber-500" />
          Key Insights
        </h3>

        <div className="space-y-4">
          {analysis.summary.timingIssueCount > 0 && (
            <div className="flex items-start gap-3 rounded-sm bg-amber-50 p-4 dark:bg-amber-900/20">
              <Zap size={20} className="mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <div className="font-medium text-amber-800 dark:text-amber-300">
                  Time Management Opportunity
                </div>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  You got {analysis.summary.timingIssueCount} question
                  {analysis.summary.timingIssueCount > 1 ? "s" : ""} correct
                  during blind review that you missed during the timed test.
                  This suggests you know the material but need to work on pacing.
                </p>
              </div>
            </div>
          )}

          {analysis.summary.knowledgeGapCount > 0 && (
            <div className="flex items-start gap-3 rounded-sm bg-red-50 p-4 dark:bg-red-900/20">
              <Brain size={20} className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" />
              <div>
                <div className="font-medium text-red-800 dark:text-red-300">
                  Study Focus Areas
                </div>
                <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                  {analysis.summary.knowledgeGapCount} question
                  {analysis.summary.knowledgeGapCount > 1 ? "s were" : " was"}{" "}
                  missed in both phases. These represent genuine knowledge gaps
                  that require targeted study.
                </p>
              </div>
            </div>
          )}

          {analysis.summary.overthinkingCount > 0 && (
            <div className="flex items-start gap-3 rounded-sm bg-purple-50 p-4 dark:bg-purple-900/20">
              <AlertCircle size={20} className="mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
              <div>
                <div className="font-medium text-purple-800 dark:text-purple-300">
                  Watch for Overthinking
                </div>
                <p className="mt-1 text-sm text-purple-700 dark:text-purple-400">
                  You changed {analysis.summary.overthinkingCount} correct answer
                  {analysis.summary.overthinkingCount > 1 ? "s" : ""} to
                  incorrect during blind review. Trust your first instincts more.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={onViewDetails}
          className="flex-1 rounded-sm border-2 border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
        >
          View Question Details
        </button>
        <button
          onClick={onContinue}
          className="flex-1 rounded-sm bg-[#1a365d] px-6 py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
        >
          Continue to Results
          <ArrowRight size={18} className="ml-2 inline" />
        </button>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

interface BlindReviewPhaseProps {
  testId: string;
  flaggedQuestions: Question[];
  timedAnswers: AnsweredQuestion[];
  userId?: string;
  onComplete: (result: BlindReviewResult) => void;
  onSkip: () => void;
}

export default function BlindReviewPhase({
  testId,
  flaggedQuestions,
  timedAnswers,
  userId,
  onComplete,
  onSkip,
}: BlindReviewPhaseProps) {
  const [phase, setPhase] = useState<"prompt" | "review" | "results">("prompt");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, BlindReviewAnswer>>(
    new Map()
  );
  const [confidences, setConfidences] = useState<
    Map<string, "low" | "medium" | "high">
  >(new Map());
  const [startTime, setStartTime] = useState<number | null>(null);
  const [questionStartTimes, setQuestionStartTimes] = useState<Map<string, number>>(
    new Map()
  );
  const [elapsedTime, setElapsedTime] = useState(0);
  const [result, setResult] = useState<BlindReviewResult | null>(null);

  // Timer for current question
  useEffect(() => {
    if (phase !== "review") return;

    const timer = setInterval(() => {
      if (startTime) {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, startTime]);

  const currentQuestion = flaggedQuestions[currentIndex];
  const timedAnswerMap = useMemo(
    () => new Map(timedAnswers.map((a) => [a.questionId, a])),
    [timedAnswers]
  );

  const handleStartReview = () => {
    setPhase("review");
    setStartTime(Date.now());
    setQuestionStartTimes(new Map([[currentQuestion.id, Date.now()]]));
  };

  const handleSelectAnswer = (answer: "A" | "B" | "C" | "D" | "E") => {
    const timedAnswer = timedAnswerMap.get(currentQuestion.id);
    const questionStartTime = questionStartTimes.get(currentQuestion.id) || Date.now();
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);

    setAnswers((prev) => {
      const newMap = new Map(prev);
      newMap.set(currentQuestion.id, {
        questionId: currentQuestion.id,
        selectedAnswer: answer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: answer === currentQuestion.correctAnswer,
        timeSpent,
        confidence: confidences.get(currentQuestion.id) || "medium",
      });
      return newMap;
    });
  };

  const handleSetConfidence = (confidence: "low" | "medium" | "high") => {
    setConfidences((prev) => {
      const newMap = new Map(prev);
      newMap.set(currentQuestion.id, confidence);
      return newMap;
    });

    // Update answer if already set
    const existingAnswer = answers.get(currentQuestion.id);
    if (existingAnswer) {
      setAnswers((prev) => {
        const newMap = new Map(prev);
        newMap.set(currentQuestion.id, {
          ...existingAnswer,
          confidence,
        });
        return newMap;
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < flaggedQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      // Track start time for new question
      const nextQuestion = flaggedQuestions[currentIndex + 1];
      if (!questionStartTimes.has(nextQuestion.id)) {
        setQuestionStartTimes((prev) => {
          const newMap = new Map(prev);
          newMap.set(nextQuestion.id, Date.now());
          return newMap;
        });
      }
    }
  };

  const handleSubmit = () => {
    const blindReviewAnswers = Array.from(answers.values());
    const flaggedIds = flaggedQuestions.map((q) => q.id);

    const reviewResult = createBlindReviewResult(
      testId,
      timedAnswers.filter((a) => flaggedIds.includes(a.questionId)),
      flaggedIds,
      blindReviewAnswers
    );

    saveBlindReviewResult(reviewResult, userId);
    setResult(reviewResult);
    setPhase("results");
  };

  const handleViewDetails = () => {
    // Navigate to detailed review - for now just continue
    if (result) {
      onComplete(result);
    }
  };

  const handleContinue = () => {
    if (result) {
      onComplete(result);
    }
  };

  if (phase === "prompt") {
    return (
      <div className="mx-auto max-w-2xl">
        <BlindReviewPrompt
          flaggedCount={flaggedQuestions.length}
          onStartReview={handleStartReview}
          onSkip={onSkip}
        />
      </div>
    );
  }

  if (phase === "results" && result) {
    return (
      <div className="mx-auto max-w-4xl">
        <BlindReviewResults
          result={result}
          questions={flaggedQuestions}
          onViewDetails={handleViewDetails}
          onContinue={handleContinue}
        />
      </div>
    );
  }

  const timedAnswer = timedAnswerMap.get(currentQuestion.id);

  return (
    <div className="mx-auto max-w-3xl">
      <BlindReviewQuestion
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={flaggedQuestions.length}
        timedAnswer={timedAnswer?.selectedAnswer || null}
        selectedAnswer={answers.get(currentQuestion.id)?.selectedAnswer || null}
        confidence={confidences.get(currentQuestion.id) || "medium"}
        onSelectAnswer={handleSelectAnswer}
        onSetConfidence={handleSetConfidence}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleSubmit}
        isFirst={currentIndex === 0}
        isLast={currentIndex === flaggedQuestions.length - 1}
        elapsedTime={elapsedTime}
      />
    </div>
  );
}
