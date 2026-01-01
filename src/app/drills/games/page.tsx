"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  ArrowLeft,
  Trophy,
  Check,
  X,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Search,
  Layers,
  Zap,
} from "lucide-react";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import {
  GameType,
  GameSession,
  GAME_INFO,
  createGameSession,
  calculateGameResult,
  loadGameProgress,
  saveGameProgress,
  updateGameProgress,
} from "@/lib/lr-games";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const GameIcon = ({ type, size = 20, className }: { type: string; size?: number; className?: string }) => {
  const iconProps = { size, className };
  switch (type) {
    case "target": return <Target {...iconProps} />;
    case "refresh": return <RefreshCw {...iconProps} />;
    case "search": return <Search {...iconProps} />;
    case "layers": return <Layers {...iconProps} />;
    default: return <Target {...iconProps} />;
  }
};

export default function GamesDrillPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);

  // Auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((u) => setUser(u));
    return () => unsubscribe();
  }, []);
  const [session, setSession] = useState<GameSession | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const startGame = (type: GameType) => {
    setSelectedGame(type);
    setSession(createGameSession(type, 5));
    setCorrectCount(0);
    setIsComplete(false);
  };

  const handleAnswer = (index: number) => {
    if (showResult || !session) return;
    setSelectedAnswer(index);
    setShowResult(true);

    const currentQ = session.questions[session.currentIndex];
    if (index === currentQ.correctIndex) {
      setCorrectCount(c => c + 1);
    }

    // Update session answers
    setSession({
      ...session,
      answers: [...session.answers, index],
    });
  };

  const handleNext = () => {
    if (!session) return;

    const isLastQuestion = session.currentIndex === session.questions.length - 1;

    if (isLastQuestion) {
      // Complete game
      const finalSession = { ...session, completedAt: new Date() };
      const result = calculateGameResult(finalSession);

      // Save progress
      const gameProgress = loadGameProgress(user?.uid);
      const updatedProgress = updateGameProgress(gameProgress, result);
      saveGameProgress(updatedProgress, user?.uid);

      setIsComplete(true);
    } else {
      setSession({
        ...session,
        currentIndex: session.currentIndex + 1,
      });
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  // Game selection view
  if (!selectedGame) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="mx-auto max-w-4xl px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => router.push('/drills')}
              className="flex items-center gap-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 mb-4"
            >
              <ArrowLeft size={20} />
              Back to Drills
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                <Target size={24} className="text-white" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Logic Games
                </h1>
                <p className="text-stone-600 dark:text-stone-400">
                  Choose a game type to practice
                </p>
              </div>
            </div>
          </div>

          {/* Game options */}
          <div className="grid gap-4 sm:grid-cols-2">
            {(Object.entries(GAME_INFO) as [GameType, typeof GAME_INFO[GameType]][]).map(([type, info]) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => startGame(type)}
                className="flex items-center gap-4 rounded-xl border-2 border-stone-200 bg-white p-6 text-left transition hover:border-[#1a365d] hover:shadow-lg dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-500"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-100 dark:bg-stone-700">
                  <GameIcon type={info.iconType} size={28} className="text-[#1a365d] dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    {info.name}
                  </h3>
                  <p className="text-sm text-stone-500 mt-1">
                    {info.description}
                  </p>
                  <div className="mt-2 text-xs text-stone-400">
                    5 questions · ~3 min
                  </div>
                </div>
                <ChevronRight size={20} className="text-stone-400" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Completion view
  if (isComplete && session) {
    const accuracy = Math.round((correctCount / session.questions.length) * 100);

    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="mx-auto max-w-2xl px-4 py-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-xl border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900"
          >
            <div className="mb-6">
              <div className={cx(
                "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full",
                accuracy >= 80 ? "bg-gradient-to-br from-green-400 to-emerald-500" :
                accuracy >= 60 ? "bg-gradient-to-br from-amber-400 to-orange-500" :
                "bg-gradient-to-br from-red-400 to-rose-500"
              )}>
                <Trophy size={40} className="text-white" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                Game Complete!
              </h1>
              <p className="mt-2 text-stone-600 dark:text-stone-400">
                {GAME_INFO[selectedGame].name}
              </p>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
                <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                  {correctCount}/{session.questions.length}
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

            <div className="flex flex-col gap-3">
              <button
                onClick={() => startGame(selectedGame)}
                className="w-full rounded-lg bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Play Again
              </button>
              <button
                onClick={() => setSelectedGame(null)}
                className="w-full rounded-lg border-2 border-stone-200 py-3 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                Choose Different Game
              </button>
              <button
                onClick={() => router.push('/drills')}
                className="w-full py-3 text-stone-500 transition hover:text-stone-700 dark:hover:text-stone-300"
              >
                Back to Drills
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Game play view
  if (!session) return null;

  const currentQ = session.questions[session.currentIndex];
  const gameInfo = GAME_INFO[selectedGame];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => setSelectedGame(null)}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 mb-4"
          >
            <ArrowLeft size={20} />
            Exit Game
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GameIcon type={gameInfo.iconType} size={24} className="text-[#1a365d] dark:text-amber-400" />
              <h1 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                {gameInfo.name}
              </h1>
            </div>
            <div className="text-sm text-stone-500">
              {session.currentIndex + 1} / {session.questions.length}
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {session.questions.map((_, i) => (
            <div
              key={i}
              className={cx(
                "w-3 h-3 rounded-full transition",
                i < session.currentIndex && session.answers[i] === session.questions[i].correctIndex && "bg-green-500",
                i < session.currentIndex && session.answers[i] !== session.questions[i].correctIndex && "bg-red-500",
                i === session.currentIndex && "bg-[#1a365d] dark:bg-amber-500",
                i > session.currentIndex && "bg-stone-200 dark:bg-stone-700"
              )}
            />
          ))}
        </div>

        {/* Question card */}
        <motion.div
          key={session.currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-xl border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900"
        >
          <div className="mb-4">
            <span className={cx(
              "inline-block rounded-full px-3 py-1 text-xs font-medium",
              currentQ.difficulty === "easy" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
              currentQ.difficulty === "medium" && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
              currentQ.difficulty === "hard" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            )}>
              {currentQ.difficulty}
            </span>
          </div>

          {/* Stimulus */}
          <div className="mb-6 rounded-lg bg-stone-50 p-4 text-stone-800 dark:bg-stone-800 dark:text-stone-200 italic border-l-4 border-[#1a365d] dark:border-amber-500">
            &ldquo;{currentQ.stimulus}&rdquo;
          </div>

          {/* Question */}
          <div className="mb-6 font-medium text-stone-900 dark:text-stone-100">
            {currentQ.question}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQ.correctIndex;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={cx(
                    "w-full text-left rounded-lg border-2 p-4 transition",
                    !showResult && "hover:border-[#1a365d] dark:hover:border-amber-500",
                    !showResult && "border-stone-200 dark:border-stone-600",
                    showResult && isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20",
                    showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-900/20",
                    showResult && !isSelected && !isCorrect && "border-stone-200 opacity-50 dark:border-stone-700"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className={cx(
                      "flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold flex-shrink-0",
                      showResult && isCorrect && "bg-green-500 text-white",
                      showResult && isSelected && !isCorrect && "bg-red-500 text-white",
                      !showResult && "bg-stone-200 text-stone-600 dark:bg-stone-600 dark:text-stone-300"
                    )}>
                      {showResult && isCorrect ? <Check size={14} /> : showResult && isSelected && !isCorrect ? <X size={14} /> : String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      {option}
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
                className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20"
              >
                <div className="flex items-center gap-2 font-medium text-blue-900 dark:text-blue-100 mb-2">
                  <Sparkles size={16} />
                  Explanation
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {currentQ.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Next button */}
        <AnimatePresence>
          {showResult && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="mt-6 w-full rounded-lg bg-[#1a365d] py-4 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              {session.currentIndex < session.questions.length - 1 ? "Next Question" : "See Results"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
