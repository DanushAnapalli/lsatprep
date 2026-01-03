"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  ArrowLeft,
  Trophy,
  Check,
  X,
  Flame,
  Brain,
} from "lucide-react";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { loadUserProgress, UserProgress } from "@/lib/user-progress";
import {
  SpacedRepetitionData,
  loadSpacedRepetitionData,
  saveSpacedRepetitionData,
  syncCardsWithProgress,
  getDueCards,
  getStats,
  calculateNextReview,
  ReviewCard,
  ReviewQuality,
  updateStreak,
} from "@/lib/spaced-repetition";
import { logicalReasoningQuestions, readingComprehensionQuestions } from "@/lib/sample-questions";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ReviewDrillPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [srData, setSrData] = useState<SpacedRepetitionData | null>(null);
  const [dueCards, setDueCards] = useState<ReviewCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const allQuestions = [...logicalReasoningQuestions, ...readingComprehensionQuestions];

  useEffect(() => {
    const progress = loadUserProgress(user?.uid);
    let data = loadSpacedRepetitionData(user?.uid);
    if (progress) {
      data = syncCardsWithProgress(data, progress);
      saveSpacedRepetitionData(data, user?.uid);
    }
    setSrData(data);
    const cards = getDueCards(data, 10);
    setDueCards(cards);

    // If no cards due, redirect back
    if (cards.length === 0) {
      router.push('/drills');
    }
  }, [user?.uid, router]);

  const currentCard = dueCards[currentIndex];
  const currentQuestion = currentCard ? allQuestions.find(q => q.id === currentCard.questionId) : null;

  const handleAnswer = (answer: string) => {
    if (showResult || !currentQuestion || !srData || !currentCard) return;

    setSelectedAnswer(answer);
    setShowResult(true);

    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectCount(c => c + 1);
    }

    // Update spaced repetition data
    const quality: ReviewQuality = isCorrect ? 4 : 1;
    const updatedCard = calculateNextReview(currentCard, quality);
    const newCards = { ...srData.cards, [currentCard.questionId]: updatedCard };
    const updatedData = { ...srData, cards: newCards };
    setSrData(updatedData);
    saveSpacedRepetitionData(updatedData, user?.uid);
  };

  const handleNext = () => {
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowResult(false);
      setSelectedAnswer(null);
    } else {
      // Update streak on completion
      if (srData) {
        const updatedData = updateStreak(srData);
        saveSpacedRepetitionData(updatedData, user?.uid);
      }
      setIsComplete(true);
    }
  };

  // Completion view
  if (isComplete) {
    const accuracy = dueCards.length > 0 ? Math.round((correctCount / dueCards.length) * 100) : 0;
    const stats = srData ? getStats(srData) : null;

    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="mx-auto max-w-2xl px-4 py-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-xl border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900"
          >
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                <Trophy size={40} className="text-white" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                Review Complete!
              </h1>
              {stats && stats.currentStreak > 0 && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 dark:bg-orange-900/30">
                  <Flame size={20} className="text-orange-500" />
                  <span className="font-bold text-orange-600 dark:text-orange-400">
                    {stats.currentStreak} day streak!
                  </span>
                </div>
              )}
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
                <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                  {correctCount}/{dueCards.length}
                </div>
                <div className="text-sm text-stone-500">Correct</div>
              </div>
              <div className="rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
                <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                  {accuracy}%
                </div>
                <div className="text-sm text-stone-500">Accuracy</div>
              </div>
            </div>

            {stats && (
              <div className="mb-8 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    {stats.masteredCards}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">Mastered</div>
                </div>
                <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <div className="text-lg font-bold text-amber-600 dark:text-amber-400">
                    {stats.learningCards}
                  </div>
                  <div className="text-xs text-amber-600 dark:text-amber-400">Learning</div>
                </div>
                <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {stats.newCards}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">New</div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push('/drills')}
                className="w-full rounded-lg bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Continue Drilling
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="w-full rounded-lg border-2 border-stone-200 py-3 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                Back to Dashboard
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Loading or no cards
  if (!currentQuestion || !currentCard) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <Brain size={48} className="mx-auto mb-4 text-stone-400 animate-pulse" />
          <p className="text-stone-500">Loading review cards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/drills')}
              className="flex items-center gap-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
            >
              <ArrowLeft size={20} />
              Exit Review
            </button>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <RotateCcw size={20} className="text-[#1a365d] dark:text-amber-400" />
                <span className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                  Spaced Review
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  {currentIndex + 1} / {dueCards.length}
                </span>
                <div className="w-32 h-2 bg-stone-200 rounded-full dark:bg-stone-700">
                  <div
                    className="h-full bg-[#1a365d] rounded-full transition-all dark:bg-amber-500"
                    style={{ width: `${((currentIndex + 1) / dueCards.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content - split pane layout */}
        <motion.div
          key={currentCard.questionId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900 overflow-hidden"
        >
          {/* Tags */}
          <div className="px-6 py-3 border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 flex items-center gap-2">
            <span className="rounded-full bg-stone-200 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-400">
              {currentCard.questionType.replace(/-/g, " ")}
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Review #{currentCard.totalReviews + 1}
            </span>
          </div>

          {/* Split pane: Passage | Question + Answers */}
          <div className="flex flex-col lg:flex-row lg:divide-x divide-stone-200 dark:divide-stone-700">
            {/* Left pane - Passage (scrollable) */}
            <div className="lg:w-1/2 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-3">
                Passage
              </div>
              <div className="max-h-[50vh] lg:max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-stone-300 dark:scrollbar-thumb-stone-600">
                <div className="text-stone-800 dark:text-stone-200 whitespace-pre-wrap leading-relaxed text-[15px]">
                  {currentQuestion.stimulus}
                </div>
              </div>
            </div>

            {/* Right pane - Question + Answers */}
            <div className="lg:w-1/2 p-6 border-t lg:border-t-0 border-stone-200 dark:border-stone-700">
              <div className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-3">
                Question
              </div>
              <div className="mb-5 font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
                {currentQuestion.questionStem}
              </div>

              {/* Answer choices */}
              <div className="space-y-2">
                {currentQuestion.answerChoices.map((choice) => {
                  const isSelected = selectedAnswer === choice.letter;
                  const isCorrect = choice.letter === currentQuestion.correctAnswer;

                  return (
                    <button
                      key={choice.letter}
                      onClick={() => handleAnswer(choice.letter)}
                      disabled={showResult}
                      className={cx(
                        "w-full text-left rounded-lg border-2 p-3 transition",
                        !showResult && "hover:border-[#1a365d] dark:hover:border-amber-500",
                        !showResult && "border-stone-200 dark:border-stone-600",
                        showResult && isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20",
                        showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-900/20",
                        showResult && !isSelected && !isCorrect && "border-stone-200 opacity-50 dark:border-stone-700"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <span className={cx(
                          "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold flex-shrink-0",
                          showResult && isCorrect && "bg-green-500 text-white",
                          showResult && isSelected && !isCorrect && "bg-red-500 text-white",
                          !showResult && "bg-stone-200 text-stone-600 dark:bg-stone-600 dark:text-stone-300"
                        )}>
                          {showResult && isCorrect ? <Check size={12} /> : showResult && isSelected && !isCorrect ? <X size={12} /> : choice.letter}
                        </span>
                        <span className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                          {choice.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 rounded-lg bg-stone-50 p-4 dark:bg-stone-800"
                  >
                    <div className="font-medium text-stone-900 dark:text-stone-100 mb-2 text-sm">
                      Explanation
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>

                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              <AnimatePresence>
                {showResult && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleNext}
                    className="mt-4 w-full rounded-lg bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                  >
                    {currentIndex < dueCards.length - 1 ? "Next Question" : "Complete Review"}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
