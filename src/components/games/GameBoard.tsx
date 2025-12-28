"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogicGame,
  GameQuestion,
  GameSetup,
  BoardState,
  LinearBoardState,
  GroupingBoardState,
  GAME_TYPE_NAMES,
  QUESTION_TYPE_NAMES,
} from "@/lib/logic-games-types";
import { LinearBoard } from "./LinearBoard";
import { GroupingBoard } from "./GroupingBoard";
import { RuleDisplay, RuleSidebar } from "./RuleDisplay";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  Check,
  X,
  HelpCircle,
  BookOpen,
} from "lucide-react";

interface GameBoardProps {
  game: LogicGame;
  onComplete?: (results: GameResult) => void;
  showTimer?: boolean;
}

interface GameResult {
  correctCount: number;
  totalQuestions: number;
  answers: Record<string, string>;
  timeSpent: number;
}

export function GameBoard({ game, onComplete, showTimer = true }: GameBoardProps) {
  const { setup, questions } = game;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Use plain objects instead of Map/Set to avoid potential React serialization issues
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [showRules, setShowRules] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const [boardState, setBoardState] = useState<BoardState | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleFlagToggle = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleBoardChange = (state: (string | null)[] | Map<string, string[]>) => {
    if (Array.isArray(state)) {
      setBoardState({
        type: "linear",
        positions: state,
      } as LinearBoardState);
    } else {
      setBoardState({
        type: "grouping",
        groups: state,
      } as GroupingBoardState);
    }
  };

  const handleComplete = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    let correctCount = 0;

    questions.forEach((q) => {
      const userAnswer = answers[q.id];
      if (userAnswer === q.correctAnswer) {
        correctCount++;
      }
    });

    setIsComplete(true);
    onComplete?.({
      correctCount,
      totalQuestions: questions.length,
      answers,
      timeSpent,
    });
  };

  const navigateQuestion = (direction: "prev" | "next") => {
    if (direction === "prev" && currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (direction === "next" && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / questions.length) * 100;

  if (isComplete) {
    return (
      <GameResults
        game={game}
        answers={answers}
        onReview={() => setIsComplete(false)}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
      {/* Left sidebar: Scenario and Rules */}
      <div className="lg:w-80 lg:shrink-0">
        <div className="sticky top-4 space-y-4">
          {/* Game info */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                {GAME_TYPE_NAMES[setup.type]}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                {setup.difficulty}
              </span>
            </div>
            <h2 className="mb-3 font-bold text-stone-900 dark:text-stone-100">
              {setup.title}
            </h2>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {setup.scenario}
            </p>
          </div>

          {/* Rules */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <button
              onClick={() => setShowRules(!showRules)}
              className="mb-2 flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <BookOpen className="h-4 w-4" />
                Rules
              </span>
              <ChevronRight
                className={`h-4 w-4 text-stone-500 transition-transform ${showRules ? "rotate-90" : ""}`}
              />
            </button>

            <AnimatePresence>
              {showRules && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <RuleSidebar
                    rules={setup.rules}
                    localRule={currentQuestion.localRule}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-stone-600 dark:text-stone-400">
                Progress
              </span>
              <span className="font-medium text-stone-900 dark:text-stone-100">
                {answeredCount} / {questions.length}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Question dots */}
            <div className="mt-3 flex flex-wrap gap-1">
              {questions.map((q, i) => {
                const isAnswered = q.id in answers;
                const isCurrent = i === currentQuestionIndex;
                const isFlagged = flaggedQuestions[q.id];

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(i)}
                    className={`
                      relative h-6 w-6 rounded-sm text-xs font-medium transition-colors
                      ${isCurrent
                        ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                        : isAnswered
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400"
                      }
                    `}
                  >
                    {i + 1}
                    {isFlagged && (
                      <div className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 space-y-4">
        {/* Board */}
        <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Scratch Board
          </h3>
          {setup.type === "linear" && (
            <LinearBoard setup={setup} onBoardChange={handleBoardChange} />
          )}
          {setup.type === "grouping" && (
            <GroupingBoard setup={setup} onBoardChange={handleBoardChange} />
          )}
          {(setup.type === "matching" || setup.type === "hybrid") && (
            <div className="rounded-sm bg-stone-50 p-8 text-center dark:bg-stone-800">
              <HelpCircle className="mx-auto mb-2 h-8 w-8 text-stone-400" />
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Board coming soon for {GAME_TYPE_NAMES[setup.type]} games
              </p>
            </div>
          )}
        </div>

        {/* Current Question */}
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <span className="text-sm font-medium text-stone-500 dark:text-stone-400">
                Question {currentQuestion.questionNumber}
              </span>
              <span className="ml-2 rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-500 dark:bg-stone-800 dark:text-stone-400">
                {QUESTION_TYPE_NAMES[currentQuestion.type]}
              </span>
            </div>
            <button
              onClick={() => handleFlagToggle(currentQuestion.id)}
              className={`
                flex items-center gap-1 rounded-sm px-2 py-1 text-xs transition-colors
                ${flaggedQuestions[currentQuestion.id]
                  ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  : "text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800"
                }
              `}
            >
              <Flag className="h-3 w-3" />
              {flaggedQuestions[currentQuestion.id] ? "Flagged" : "Flag"}
            </button>
          </div>

          {/* Local rule if present */}
          {currentQuestion.localRule && (
            <div className="mb-4 rounded-sm border-2 border-dashed border-amber-400 bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                {currentQuestion.localRule}
              </p>
            </div>
          )}

          <p className="mb-6 text-lg font-medium text-stone-900 dark:text-stone-100">
            {currentQuestion.stem}
          </p>

          {/* Answer choices */}
          <div className="space-y-2">
            {currentQuestion.answerChoices.map((choice) => {
              const isSelected = answers[currentQuestion.id] === choice.letter;

              return (
                <button
                  key={choice.letter}
                  onClick={() => handleAnswerSelect(currentQuestion.id, choice.letter)}
                  className={`
                    flex w-full items-start gap-3 rounded-sm border-2 p-3 text-left transition-colors
                    ${isSelected
                      ? "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/10"
                      : "border-stone-200 hover:border-stone-300 dark:border-stone-700 dark:hover:border-stone-600"
                    }
                  `}
                >
                  <span
                    className={`
                      flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold
                      ${isSelected
                        ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                        : "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                      }
                    `}
                  >
                    {choice.letter}
                  </span>
                  <span className="text-stone-700 dark:text-stone-300">
                    {choice.text}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateQuestion("prev")}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-1 rounded-sm px-4 py-2 font-medium text-stone-600 hover:bg-stone-100 disabled:opacity-50 dark:text-stone-400 dark:hover:bg-stone-800"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleComplete}
                className="rounded-sm bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700"
              >
                Finish Game
              </button>
            ) : (
              <button
                onClick={() => navigateQuestion("next")}
                className="flex items-center gap-1 rounded-sm bg-[#1a365d] px-4 py-2 font-semibold text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Results component
interface GameResultsProps {
  game: LogicGame;
  answers: Record<string, string>;
  onReview: () => void;
}

function GameResults({ game, answers, onReview }: GameResultsProps) {
  const { setup, questions } = game;

  let correctCount = 0;
  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);

  return (
    <div className="space-y-6">
      {/* Score summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-sm border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900"
      >
        <h2 className="mb-4 text-2xl font-bold text-stone-900 dark:text-stone-100">
          {setup.title} - Results
        </h2>

        <div className="mb-4 text-6xl font-bold text-[#1a365d] dark:text-amber-500">
          {percentage}%
        </div>

        <p className="text-lg text-stone-600 dark:text-stone-400">
          You got <span className="font-bold text-green-600">{correctCount}</span> out of{" "}
          <span className="font-bold">{questions.length}</span> questions correct
        </p>

        <button
          onClick={onReview}
          className="mt-6 rounded-sm border-2 border-stone-300 px-6 py-2 font-semibold text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
        >
          Review Questions
        </button>
      </motion.div>

      {/* Question-by-question breakdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
          Question Breakdown
        </h3>

        {questions.map((q) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`
                rounded-sm border-2 p-4
                ${isCorrect
                  ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                  : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                }
              `}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">
                  Question {q.questionNumber}
                </span>
                {isCorrect ? (
                  <span className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                    <Check className="h-4 w-4" />
                    Correct
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
                    <X className="h-4 w-4" />
                    Incorrect
                  </span>
                )}
              </div>

              <p className="mb-2 text-sm text-stone-700 dark:text-stone-300">
                {q.stem}
              </p>

              {!isCorrect && (
                <div className="text-sm">
                  <span className="text-red-600 dark:text-red-400">
                    Your answer: {userAnswer || "None"}
                  </span>
                  <span className="mx-2 text-stone-400">|</span>
                  <span className="text-green-600 dark:text-green-400">
                    Correct: {q.correctAnswer}
                  </span>
                </div>
              )}

              <details className="mt-2">
                <summary className="cursor-pointer text-xs text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200">
                  Show explanation
                </summary>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                  {q.explanation}
                </p>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}
