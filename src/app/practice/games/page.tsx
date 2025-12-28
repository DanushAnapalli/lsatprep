"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LogicGame,
  GameType,
  GAME_TYPE_NAMES,
  GAME_TYPE_DESCRIPTIONS,
} from "@/lib/logic-games-types";
import { getAllGames } from "@/lib/logic-games-questions";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { getUserTier, SubscriptionTier } from "@/lib/subscription";

// Dynamic import to avoid SSR issues with dnd-kit
const GameBoard = dynamic(
  () => import("@/components/games/GameBoard").then((mod) => mod.GameBoard),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-300 border-t-[#1a365d]" />
      </div>
    ),
  }
);
import {
  ArrowLeft,
  Layers,
  Grid3X3,
  Shuffle,
  ArrowRight,
  Lock,
  Play,
  Check,
  ChevronDown,
} from "lucide-react";

type GameFilter = "all" | GameType;
type DifficultyFilter = "all" | "easy" | "medium" | "hard";

export default function GamesPage() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionTier>("free");
  const [games, setGames] = useState<LogicGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<LogicGame | null>(null);
  const [typeFilter, setTypeFilter] = useState<GameFilter>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("all");
  const [completedGames, setCompletedGames] = useState<Set<string>>(new Set());
  const [freeGamesUsed, setFreeGamesUsed] = useState(0);

  const FREE_GAME_LIMIT = 2;

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Load subscription status
  useEffect(() => {
    if (user) {
      const tier = getUserTier(user);
      setSubscription(tier);
    }
  }, [user]);

  // Load games
  useEffect(() => {
    const allGames = getAllGames();
    setGames(allGames);
  }, []);

  // Load completed games from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const key = user ? `lsat-games-completed-${user.uid}` : "lsat-games-completed";
      const stored = localStorage.getItem(key);
      if (stored) {
        setCompletedGames(new Set(JSON.parse(stored)));
      }

      const freeKey = user ? `lsat-games-free-used-${user.uid}` : "lsat-games-free-used";
      const freeUsed = localStorage.getItem(freeKey);
      if (freeUsed) {
        setFreeGamesUsed(parseInt(freeUsed));
      }
    }
  }, [user]);

  // Filter games
  const filteredGames = games.filter((game) => {
    const matchesType = typeFilter === "all" || game.setup.type === typeFilter;
    const matchesDifficulty =
      difficultyFilter === "all" || game.setup.difficulty === difficultyFilter;
    return matchesType && matchesDifficulty;
  });

  const canPlayGame = (gameId: string): boolean => {
    if (subscription === "pro" || subscription === "founder") return true;
    if (completedGames.has(gameId)) return true; // Can replay completed games
    return freeGamesUsed < FREE_GAME_LIMIT;
  };

  const handleStartGame = (game: LogicGame) => {
    if (!canPlayGame(game.setup.id)) return;

    // Track free game usage
    if (subscription === "free" && !completedGames.has(game.setup.id)) {
      const newCount = freeGamesUsed + 1;
      setFreeGamesUsed(newCount);
      if (typeof window !== "undefined") {
        const key = user ? `lsat-games-free-used-${user.uid}` : "lsat-games-free-used";
        localStorage.setItem(key, newCount.toString());
      }
    }

    setSelectedGame(game);
  };

  const handleGameComplete = (result: {
    correctCount: number;
    totalQuestions: number;
  }) => {
    if (!selectedGame) return;

    const gameId = selectedGame.setup.id;
    const newCompleted = new Set(completedGames).add(gameId);
    setCompletedGames(newCompleted);

    if (typeof window !== "undefined") {
      const key = user ? `lsat-games-completed-${user.uid}` : "lsat-games-completed";
      localStorage.setItem(key, JSON.stringify(Array.from(newCompleted)));
    }
  };

  const handleBackToList = () => {
    setSelectedGame(null);
  };

  // Game type icons
  const getTypeIcon = (type: GameType) => {
    switch (type) {
      case "linear":
        return <ArrowRight className="h-4 w-4" />;
      case "grouping":
        return <Grid3X3 className="h-4 w-4" />;
      case "matching":
        return <Layers className="h-4 w-4" />;
      case "hybrid":
        return <Shuffle className="h-4 w-4" />;
    }
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-900">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-300 border-t-[#1a365d]" />
      </div>
    );
  }

  // Show game board when a game is selected
  if (selectedGame) {
    return (
      <main className="min-h-screen bg-stone-100 dark:bg-stone-900">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <button
            onClick={handleBackToList}
            className="mb-4 flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Games
          </button>

          <GameBoard game={selectedGame} onComplete={handleGameComplete} />
        </div>
      </main>
    );
  }

  // Game selection view
  return (
    <main className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">
            Logic Games Practice
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Master analytical reasoning with interactive game boards
          </p>

          {/* Free tier limit warning */}
          {subscription === "free" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-between rounded-sm border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20"
            >
              <div>
                <p className="font-medium text-amber-800 dark:text-amber-200">
                  Free tier: {FREE_GAME_LIMIT - freeGamesUsed} games remaining
                </p>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Upgrade to Pro for unlimited access to all games
                </p>
              </div>
              <Link
                href="/pricing"
                className="rounded-sm bg-amber-500 px-4 py-2 font-semibold text-stone-900 hover:bg-amber-400"
              >
                Upgrade
              </Link>
            </motion.div>
          )}
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          {/* Type filter */}
          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as GameFilter)}
              className="appearance-none rounded-sm border-2 border-stone-200 bg-white py-2 pl-4 pr-10 font-medium text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
            >
              <option value="all">All Types</option>
              <option value="linear">Linear/Sequencing</option>
              <option value="grouping">Grouping</option>
              <option value="matching">Matching</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
          </div>

          {/* Difficulty filter */}
          <div className="relative">
            <select
              value={difficultyFilter}
              onChange={(e) =>
                setDifficultyFilter(e.target.value as DifficultyFilter)
              }
              className="appearance-none rounded-sm border-2 border-stone-200 bg-white py-2 pl-4 pr-10 font-medium text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
          </div>
        </div>

        {/* Game type descriptions */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {(Object.keys(GAME_TYPE_NAMES) as GameType[]).map((type) => (
            <div
              key={type}
              className={`
                rounded-sm border-2 p-4 transition-colors cursor-pointer
                ${typeFilter === type
                  ? "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/10"
                  : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
                }
              `}
              onClick={() => setTypeFilter(typeFilter === type ? "all" : type)}
            >
              <div className="mb-2 flex items-center gap-2">
                <div
                  className={`
                    rounded p-1.5
                    ${typeFilter === type
                      ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-400"
                    }
                  `}
                >
                  {getTypeIcon(type)}
                </div>
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {GAME_TYPE_NAMES[type]}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {GAME_TYPE_DESCRIPTIONS[type]}
              </p>
            </div>
          ))}
        </div>

        {/* Games grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => {
            const isCompleted = completedGames.has(game.setup.id);
            const canPlay = canPlayGame(game.setup.id);

            return (
              <motion.div
                key={game.setup.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`
                  rounded-sm border-2 bg-white p-5 dark:bg-stone-800
                  ${isCompleted
                    ? "border-green-200 dark:border-green-800"
                    : "border-stone-200 dark:border-stone-700"
                  }
                  ${!canPlay ? "opacity-60" : ""}
                `}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`
                        rounded p-1.5
                        ${isCompleted
                          ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-400"
                        }
                      `}
                    >
                      {getTypeIcon(game.setup.type)}
                    </div>
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                      {GAME_TYPE_NAMES[game.setup.type]}
                    </span>
                  </div>

                  <span
                    className={`
                      rounded px-2 py-0.5 text-xs font-medium
                      ${game.setup.difficulty === "easy"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : game.setup.difficulty === "medium"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }
                    `}
                  >
                    {game.setup.difficulty}
                  </span>
                </div>

                <h3 className="mb-2 font-bold text-stone-900 dark:text-stone-100">
                  {game.setup.title}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-stone-600 dark:text-stone-400">
                  {game.setup.scenario.substring(0, 100)}...
                </p>

                <div className="mb-4 flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400">
                  <span>{game.setup.entities.length} entities</span>
                  <span>{game.setup.rules.length} rules</span>
                  <span>{game.questions.length} questions</span>
                </div>

                <button
                  onClick={() => handleStartGame(game)}
                  disabled={!canPlay}
                  className={`
                    flex w-full items-center justify-center gap-2 rounded-sm py-2 font-semibold transition-colors
                    ${canPlay
                      ? isCompleted
                        ? "border-2 border-green-500 text-green-600 hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-900/20"
                        : "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                      : "cursor-not-allowed bg-stone-200 text-stone-500 dark:bg-stone-700 dark:text-stone-500"
                    }
                  `}
                >
                  {!canPlay ? (
                    <>
                      <Lock className="h-4 w-4" />
                      Locked
                    </>
                  ) : isCompleted ? (
                    <>
                      <Check className="h-4 w-4" />
                      Play Again
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Start Game
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {filteredGames.length === 0 && (
          <div className="rounded-sm border-2 border-stone-200 bg-white py-12 text-center dark:border-stone-700 dark:bg-stone-800">
            <p className="text-stone-500 dark:text-stone-400">
              No games match your filters
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
