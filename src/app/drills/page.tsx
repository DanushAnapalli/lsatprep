"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Target,
  RotateCcw,
  Flame,
  ArrowLeft,
  ChevronRight,
  Trophy,
  Zap,
} from "lucide-react";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import {
  loadSpacedRepetitionData,
  getDueCount,
  getStats,
} from "@/lib/spaced-repetition";
import { loadGameProgress } from "@/lib/lr-games";
import { loadVocabProgress } from "@/lib/lsat-vocab";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DrillsPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [dueCount, setDueCount] = useState(0);

  // Auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((u) => setUser(u));
    return () => unsubscribe();
  }, []);
  const [streak, setStreak] = useState(0);
  const [gameStats, setGameStats] = useState({ played: 0, accuracy: 0 });
  const [vocabStats, setVocabStats] = useState({ reviewed: 0, mastered: 0 });

  useEffect(() => {
    // Load spaced repetition data
    const srData = loadSpacedRepetitionData(user?.uid);
    const stats = getStats(srData);
    setDueCount(stats.dueToday);
    setStreak(stats.currentStreak);

    // Load game progress
    const gameProgress = loadGameProgress(user?.uid);
    setGameStats({
      played: gameProgress.gamesPlayed,
      accuracy: gameProgress.totalQuestions > 0
        ? Math.round((gameProgress.totalCorrect / gameProgress.totalQuestions) * 100)
        : 0,
    });

    // Load vocab progress
    const vocabProgress = loadVocabProgress(user?.uid);
    setVocabStats({
      reviewed: vocabProgress.cardsReviewed,
      mastered: vocabProgress.masteredWords.length,
    });
  }, [user?.uid]);

  const drillOptions = [
    {
      id: "vocab",
      title: "Vocabulary Flashcards",
      description: "Swipe through LSAT vocabulary with spaced repetition",
      icon: BookOpen,
      href: "/drills/vocab",
      color: "bg-purple-500",
      stats: vocabStats.mastered > 0 ? `${vocabStats.mastered} mastered` : "90 words",
      duration: "Endless",
    },
    {
      id: "games",
      title: "Logic Games",
      description: "Quick reasoning drills to sharpen your skills",
      icon: Target,
      href: "/drills/games",
      color: "bg-blue-500",
      stats: gameStats.played > 0 ? `${gameStats.accuracy}% accuracy` : "4 game types",
      duration: "~5 min",
    },
    {
      id: "review",
      title: "Spaced Review",
      description: "Review questions you got wrong with optimal timing",
      icon: RotateCcw,
      href: "/drills/review",
      color: "bg-green-500",
      stats: `${dueCount} due`,
      duration: "~10 min",
      disabled: dueCount === 0,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                Daily Drills
              </h1>
              <p className="mt-1 text-stone-600 dark:text-stone-400">
                Build your skills with focused practice sessions
              </p>
            </div>
            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 dark:from-orange-900/30 dark:to-amber-900/30"
              >
                <Flame size={24} className="text-orange-500" />
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{streak}</div>
                  <div className="text-xs text-orange-600 dark:text-orange-400">day streak</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Drill Options */}
        <div className="space-y-4">
          {drillOptions.map((drill, index) => {
            const Icon = drill.icon;
            const isDisabled = drill.disabled;

            return (
              <motion.button
                key={drill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !isDisabled && router.push(drill.href)}
                disabled={isDisabled}
                className={cx(
                  "w-full flex items-center gap-6 rounded-xl border-2 bg-white p-6 text-left transition-all dark:bg-stone-900",
                  isDisabled
                    ? "border-stone-200 opacity-50 cursor-not-allowed dark:border-stone-700"
                    : "border-stone-200 hover:border-[#1a365d] hover:shadow-lg dark:border-stone-700 dark:hover:border-amber-500"
                )}
              >
                <div className={cx(
                  "flex h-16 w-16 items-center justify-center rounded-xl flex-shrink-0",
                  drill.color
                )}>
                  <Icon size={32} className="text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                    {drill.title}
                  </h3>
                  <p className="mt-1 text-stone-600 dark:text-stone-400">
                    {drill.description}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1 text-stone-500">
                      <Zap size={14} />
                      {drill.stats}
                    </span>
                    <span className="text-stone-400">
                      {drill.duration}
                    </span>
                  </div>
                </div>

                <ChevronRight size={24} className={cx(
                  isDisabled ? "text-stone-300 dark:text-stone-600" : "text-stone-400"
                )} />
              </motion.button>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="rounded-xl border-2 border-stone-200 bg-white p-4 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
              {vocabStats.reviewed}
            </div>
            <div className="text-sm text-stone-500">Words Reviewed</div>
          </div>
          <div className="rounded-xl border-2 border-stone-200 bg-white p-4 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
              {gameStats.played}
            </div>
            <div className="text-sm text-stone-500">Games Played</div>
          </div>
          <div className="rounded-xl border-2 border-stone-200 bg-white p-4 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
              {dueCount}
            </div>
            <div className="text-sm text-stone-500">Cards Due</div>
          </div>
        </div>
      </div>
    </div>
  );
}
