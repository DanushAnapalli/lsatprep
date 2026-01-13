"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  Trophy,
  Lock,
  Star,
  Flame,
  Target,
  Brain,
  BookText,
  Crown,
  Zap,
  Award,
  Gem,
  TrendingUp,
  Calendar,
  Moon,
  Sunrise,
  PartyPopper,
  Layers,
  Footprints,
  BookOpen,
  Crosshair,
} from "lucide-react";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import {
  ACHIEVEMENTS,
  getUserAchievements,
  UserAchievements,
  Achievement,
} from "@/lib/achievements";
import { loadUserProgress, UserProgress } from "@/lib/user-progress";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Map icon names to components
const iconMap: Record<string, React.ReactNode> = {
  Footprints: <Footprints size={24} />,
  Target: <Target size={24} />,
  BookOpen: <BookOpen size={24} />,
  Sword: <Trophy size={24} />, // Using Trophy as fallback
  Crown: <Crown size={24} />,
  Crosshair: <Crosshair size={24} />,
  Zap: <Zap size={24} />,
  Star: <Star size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Award: <Award size={24} />,
  Trophy: <Trophy size={24} />,
  Gem: <Gem size={24} />,
  ArrowUpRight: <TrendingUp size={24} />,
  Flame: <Flame size={24} />,
  Calendar: <Calendar size={24} />,
  CalendarCheck: <Calendar size={24} />,
  CalendarHeart: <Calendar size={24} />,
  Brain: <Brain size={24} />,
  BookText: <BookText size={24} />,
  Layers: <Layers size={24} />,
  Moon: <Moon size={24} />,
  Sunrise: <Sunrise size={24} />,
  PartyPopper: <PartyPopper size={24} />,
};

const categoryColors: Record<Achievement["category"], { bg: string; border: string; text: string }> = {
  practice: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-600 dark:text-blue-400",
  },
  score: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-600 dark:text-amber-400",
  },
  streak: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-600 dark:text-red-400",
  },
  mastery: {
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-600 dark:text-purple-400",
  },
  special: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-600 dark:text-green-400",
  },
};

const categoryLabels: Record<Achievement["category"], string> = {
  practice: "Practice Milestones",
  score: "Score Achievements",
  streak: "Study Streaks",
  mastery: "Mastery",
  special: "Special",
};

export default function AchievementsPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userAchievements, setUserAchievements] = useState<UserAchievements | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Achievement["category"] | "all">("all");

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);

      if (!firebaseUser) {
        router.push("/");
      } else {
        setUserAchievements(getUserAchievements(firebaseUser.uid));
        setUserProgress(loadUserProgress(firebaseUser.uid));
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <Scale size={48} className="animate-pulse text-[#1a365d] dark:text-amber-400" />
      </div>
    );
  }

  if (!user || !userAchievements) {
    return null;
  }

  const unlockedCount = userAchievements.unlockedAchievements.length;
  const totalCount = ACHIEVEMENTS.length;
  const progressPercent = Math.round((unlockedCount / totalCount) * 100);

  const filteredAchievements =
    selectedCategory === "all"
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((a) => a.category === selectedCategory);

  const getProgress = (achievement: Achievement): number => {
    if (!userProgress) return 0;
    const testsCompleted = userProgress.completedTests.length;
    const questionsAnswered = userProgress.totalQuestionsAnswered;
    const streak = userAchievements.streakData.currentStreak;

    switch (achievement.id) {
      case "first_test":
        return Math.min(testsCompleted, 1);
      case "tests_10":
        return Math.min(testsCompleted, 10);
      case "tests_25":
        return Math.min(testsCompleted, 25);
      case "tests_50":
        return Math.min(testsCompleted, 50);
      case "tests_100":
        return Math.min(testsCompleted, 100);
      case "questions_500":
        return Math.min(questionsAnswered, 500);
      case "questions_1000":
        return Math.min(questionsAnswered, 1000);
      case "streak_3":
        return Math.min(streak, 3);
      case "streak_7":
        return Math.min(streak, 7);
      case "streak_14":
        return Math.min(streak, 14);
      case "streak_30":
        return Math.min(streak, 30);
      default:
        return userAchievements.unlockedAchievements.includes(achievement.id) ? (achievement.maxProgress || 1) : 0;
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-[#1a365d] hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-amber-500 dark:hover:bg-stone-700"
            >
              <ArrowLeft size={18} className="text-stone-500 dark:text-stone-400" />
              <span>Menu</span>
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-xl font-bold text-[#1a365d] dark:text-amber-400">
              LSATPrep
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Achievements
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Track your milestones and earn badges as you progress.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-stone-500">Total Progress</div>
              <div className="text-3xl font-bold text-stone-900 dark:text-stone-100">
                {unlockedCount} / {totalCount}
              </div>
              <div className="text-sm text-stone-500">achievements unlocked</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-stone-500">Current Streak</div>
                <div className="flex items-center gap-1 text-2xl font-bold text-amber-500">
                  <Flame size={24} />
                  {userAchievements.streakData.currentStreak}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-stone-500">Longest Streak</div>
                <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {userAchievements.streakData.longestStreak}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="h-3 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-1 text-right text-sm text-stone-500">{progressPercent}% complete</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cx(
              "rounded-sm px-3 py-1.5 text-sm font-medium transition",
              selectedCategory === "all"
                ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            )}
          >
            All ({ACHIEVEMENTS.length})
          </button>
          {(["practice", "score", "streak", "mastery", "special"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cx(
                "rounded-sm px-3 py-1.5 text-sm font-medium transition",
                selectedCategory === cat
                  ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                  : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              )}
            >
              {categoryLabels[cat]} ({ACHIEVEMENTS.filter((a) => a.category === cat).length})
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((achievement) => {
            const isUnlocked = userAchievements.unlockedAchievements.includes(achievement.id);
            const unlockDate = userAchievements.achievementDates[achievement.id];
            const colors = categoryColors[achievement.category];
            const progress = getProgress(achievement);
            const maxProgress = achievement.maxProgress || 1;
            const progressPercent = Math.round((progress / maxProgress) * 100);

            return (
              <div
                key={achievement.id}
                className={cx(
                  "relative rounded-sm border-2 p-4 transition",
                  isUnlocked
                    ? `${colors.bg} ${colors.border}`
                    : "border-stone-200 bg-white opacity-75 dark:border-stone-700 dark:bg-stone-900"
                )}
              >
                {/* Icon */}
                <div
                  className={cx(
                    "mb-3 flex h-12 w-12 items-center justify-center rounded-sm",
                    isUnlocked
                      ? `${colors.bg} ${colors.text}`
                      : "bg-stone-100 text-stone-400 dark:bg-stone-800"
                  )}
                >
                  {isUnlocked ? (
                    iconMap[achievement.icon] || <Trophy size={24} />
                  ) : (
                    <Lock size={24} />
                  )}
                </div>

                {/* Content */}
                <h3
                  className={cx(
                    "font-semibold",
                    isUnlocked ? "text-stone-900 dark:text-stone-100" : "text-stone-500"
                  )}
                >
                  {achievement.name}
                </h3>
                <p className="mt-1 text-sm text-stone-500">{achievement.description}</p>

                {/* Progress */}
                {!isUnlocked && maxProgress > 1 && (
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-xs text-stone-500">
                      <span>Progress</span>
                      <span>
                        {progress} / {maxProgress}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                      <div
                        className="h-full rounded-full bg-stone-400 transition-all"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Unlock Date */}
                {isUnlocked && unlockDate && (
                  <div className="mt-3 text-xs text-stone-500">
                    Unlocked {new Date(unlockDate).toLocaleDateString()}
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute right-3 top-3">
                  <span
                    className={cx(
                      "rounded-sm px-2 py-0.5 text-xs font-semibold",
                      isUnlocked
                        ? `${colors.bg} ${colors.text}`
                        : "bg-stone-100 text-stone-400 dark:bg-stone-800"
                    )}
                  >
                    {categoryLabels[achievement.category]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
