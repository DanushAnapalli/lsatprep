"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  ArrowLeft,
  Trophy,
  X,
  Check,
  RotateCcw,
  Flame,
} from "lucide-react";
import {
  VocabWord,
  MatchingGameQuestion,
  generateMatchingQuestions,
  loadVocabProgress,
  saveVocabProgress,
  updateVocabProgress,
  VOCAB_CATEGORIES,
} from "@/lib/lsat-vocab";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface FlashcardWord extends MatchingGameQuestion {
  timesWrong: number;
}

export default function VocabDrillPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // Auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((u) => setUser(u));
    return () => unsubscribe();
  }, []);
  const [deck, setDeck] = useState<FlashcardWord[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState<"correct" | "incorrect" | null>(null);

  // Initialize deck
  useEffect(() => {
    const questions = generateMatchingQuestions(10);
    setDeck(questions.map(q => ({ ...q, timesWrong: 0 })));
  }, []);

  const currentCard = deck[0];

  const handleAnswer = useCallback((index: number) => {
    if (isAnimating || !currentCard) return;

    setSelectedAnswer(index);
    setTotalAttempts(t => t + 1);

    const isCorrect = index === currentCard.correctIndex;

    // Update vocab progress
    const vocabProgress = loadVocabProgress(user?.uid);
    const updatedProgress = updateVocabProgress(vocabProgress, currentCard.word.id, isCorrect);
    saveVocabProgress(updatedProgress, user?.uid);

    if (isCorrect) {
      // Correct: show green flash, swipe right, remove from deck
      setShowFeedback("correct");
      setCorrectCount(c => c + 1);
      setSwipeDirection("right");
      setIsAnimating(true);

      setTimeout(() => {
        setDeck(prev => {
          const newDeck = prev.slice(1);
          if (newDeck.length === 0) {
            setIsComplete(true);
          }
          return newDeck;
        });
        setSelectedAnswer(null);
        setSwipeDirection(null);
        setIsAnimating(false);
        setShowFeedback(null);
      }, 600);
    } else {
      // Incorrect: show red flash, swipe left, move to back
      setShowFeedback("incorrect");
      setSwipeDirection("left");
      setIsAnimating(true);

      setTimeout(() => {
        setDeck(prev => {
          const [first, ...rest] = prev;
          // Move to back with incremented wrong count
          return [...rest, { ...first, timesWrong: first.timesWrong + 1 }];
        });
        setSelectedAnswer(null);
        setSwipeDirection(null);
        setIsAnimating(false);
        setShowFeedback(null);
      }, 600);
    }
  }, [isAnimating, currentCard, user?.uid]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating || !currentCard || isComplete) return;

      const keyMap: Record<string, number> = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
      const index = keyMap[e.key.toLowerCase()];

      if (index !== undefined && index < currentCard.options.length) {
        handleAnswer(index);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleAnswer, isAnimating, currentCard, isComplete]);

  if (isComplete) {
    const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="mx-auto max-w-2xl px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 mb-4"
            >
              <ArrowLeft size={20} />
              Back to Dashboard
            </button>
          </div>

          {/* Completion Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-lg border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900"
          >
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500">
                <Trophy size={40} className="text-white" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                Session Complete!
              </h1>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
                <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                  {correctCount}
                </div>
                <div className="text-sm text-stone-500">Words Mastered</div>
              </div>
              <div className="rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
                <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                  {accuracy}%
                </div>
                <div className="text-sm text-stone-500">Accuracy</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsComplete(false);
                  setCorrectCount(0);
                  setTotalAttempts(0);
                  const questions = generateMatchingQuestions(10);
                  setDeck(questions.map(q => ({ ...q, timesWrong: 0 })));
                }}
                className="w-full rounded-lg bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                <span className="flex items-center justify-center gap-2">
                  <RotateCcw size={18} />
                  Practice More
                </span>
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

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="animate-pulse text-stone-500">Loading flashcards...</div>
      </div>
    );
  }

  const categoryInfo = VOCAB_CATEGORIES[currentCard.word.category];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 mb-4"
          >
            <ArrowLeft size={20} />
            Exit
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen size={24} className="text-[#1a365d] dark:text-amber-400" />
              <h1 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                Vocabulary Flashcards
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-stone-500">
                <span className="font-semibold text-green-600">{correctCount}</span> mastered
              </div>
              <div className="text-sm text-stone-500">
                <span className="font-semibold text-stone-700 dark:text-stone-300">{deck.length}</span> remaining
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-2 w-full rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] dark:from-amber-500 dark:to-amber-400"
              initial={{ width: 0 }}
              animate={{ width: `${(correctCount / (correctCount + deck.length)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Flashcard Stack */}
        <div className="relative h-[500px] perspective-1000">
          {/* Background cards for stack effect */}
          {deck.slice(1, 3).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-xl border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
              style={{
                transform: `translateY(${(i + 1) * 8}px) scale(${1 - (i + 1) * 0.02})`,
                zIndex: -i - 1,
                opacity: 1 - (i + 1) * 0.2,
              }}
            />
          ))}

          {/* Main flashcard */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.word.id}
              initial={{ x: 0, opacity: 1, rotate: 0 }}
              animate={{
                x: swipeDirection === "right" ? 400 : swipeDirection === "left" ? -400 : 0,
                opacity: swipeDirection ? 0 : 1,
                rotate: swipeDirection === "right" ? 15 : swipeDirection === "left" ? -15 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={cx(
                "absolute inset-0 rounded-xl border-2 bg-white p-6 shadow-lg dark:bg-stone-800 overflow-hidden",
                showFeedback === "correct" && "border-green-500",
                showFeedback === "incorrect" && "border-red-500",
                !showFeedback && "border-stone-200 dark:border-stone-700"
              )}
            >
              {/* Feedback overlay */}
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cx(
                      "absolute inset-0 z-10 flex items-center justify-center",
                      showFeedback === "correct" && "bg-green-500/10",
                      showFeedback === "incorrect" && "bg-red-500/10"
                    )}
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={cx(
                        "flex h-24 w-24 items-center justify-center rounded-full",
                        showFeedback === "correct" && "bg-green-500",
                        showFeedback === "incorrect" && "bg-red-500"
                      )}
                    >
                      {showFeedback === "correct" ? (
                        <Check size={48} className="text-white" />
                      ) : (
                        <X size={48} className="text-white" />
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Category badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-400">
                  {categoryInfo.name}
                </span>
                {currentCard.timesWrong > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    <RotateCcw size={12} />
                    Review
                  </span>
                )}
              </div>

              {/* Word display */}
              <div className="mb-8 text-center">
                <motion.div
                  key={currentCard.word.word}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl font-bold text-[#1a365d] dark:text-amber-400 mb-2"
                >
                  {currentCard.word.word}
                </motion.div>
                <div className="text-sm text-stone-500">
                  Select the correct definition
                </div>
              </div>

              {/* Definition options */}
              <div className="space-y-3">
                {currentCard.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const letter = String.fromCharCode(65 + index);

                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: isAnimating ? 1 : 1.01 }}
                      whileTap={{ scale: isAnimating ? 1 : 0.99 }}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnimating}
                      className={cx(
                        "w-full text-left rounded-lg border-2 p-4 transition-all",
                        !isAnimating && "hover:border-[#1a365d] hover:bg-stone-50 dark:hover:border-amber-500 dark:hover:bg-stone-700",
                        !isSelected && "border-stone-200 dark:border-stone-600",
                        isSelected && showFeedback === "correct" && "border-green-500 bg-green-50 dark:bg-green-900/20",
                        isSelected && showFeedback === "incorrect" && "border-red-500 bg-red-50 dark:bg-red-900/20",
                        isAnimating && "cursor-not-allowed opacity-80"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <span className={cx(
                          "flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold flex-shrink-0",
                          isSelected && showFeedback === "correct" && "bg-green-500 text-white",
                          isSelected && showFeedback === "incorrect" && "bg-red-500 text-white",
                          !isSelected && "bg-stone-200 text-stone-600 dark:bg-stone-600 dark:text-stone-300"
                        )}>
                          {letter}
                        </span>
                        <span className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                          {option}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Keyboard hint */}
              <div className="mt-6 text-center text-xs text-stone-400">
                Press 1-4 or A-D to answer quickly
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center text-sm text-stone-500">
          <p>Correct answers are removed. Wrong answers go to the back of the deck.</p>
          <p className="mt-1">Keep going until you master all words!</p>
        </div>
      </div>
    </div>
  );
}
