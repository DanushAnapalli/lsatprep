// Achievement system for tracking user milestones and badges

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  category: "practice" | "score" | "streak" | "mastery" | "special";
  unlockedAt?: string; // ISO date string
  progress?: number;
  maxProgress?: number;
}

export interface UserAchievements {
  unlockedAchievements: string[]; // Array of achievement IDs
  achievementDates: Record<string, string>; // achievement ID -> unlock date
  streakData: {
    currentStreak: number;
    longestStreak: number;
    lastStudyDate?: string;
  };
}

// All available achievements
export const ACHIEVEMENTS: Achievement[] = [
  // Practice milestones
  {
    id: "first_test",
    name: "First Steps",
    description: "Complete your first practice test",
    icon: "Footprints",
    category: "practice",
    maxProgress: 1,
  },
  {
    id: "tests_10",
    name: "Getting Serious",
    description: "Complete 10 practice tests",
    icon: "Target",
    category: "practice",
    maxProgress: 10,
  },
  {
    id: "tests_25",
    name: "Dedicated Learner",
    description: "Complete 25 practice tests",
    icon: "BookOpen",
    category: "practice",
    maxProgress: 25,
  },
  {
    id: "tests_50",
    name: "Test Warrior",
    description: "Complete 50 practice tests",
    icon: "Sword",
    category: "practice",
    maxProgress: 50,
  },
  {
    id: "tests_100",
    name: "Century Club",
    description: "Complete 100 practice tests",
    icon: "Crown",
    category: "practice",
    maxProgress: 100,
  },
  {
    id: "questions_500",
    name: "Question Hunter",
    description: "Answer 500 questions",
    icon: "Crosshair",
    category: "practice",
    maxProgress: 500,
  },
  {
    id: "questions_1000",
    name: "Question Master",
    description: "Answer 1000 questions",
    icon: "Zap",
    category: "practice",
    maxProgress: 1000,
  },

  // Score achievements
  {
    id: "perfect_section",
    name: "Flawless",
    description: "Get 100% on any section",
    icon: "Star",
    category: "score",
    maxProgress: 1,
  },
  {
    id: "score_160",
    name: "Rising Star",
    description: "Achieve a score equivalent to 160+",
    icon: "TrendingUp",
    category: "score",
    maxProgress: 1,
  },
  {
    id: "score_165",
    name: "Excellence",
    description: "Achieve a score equivalent to 165+",
    icon: "Award",
    category: "score",
    maxProgress: 1,
  },
  {
    id: "score_170",
    name: "Elite Performer",
    description: "Achieve a score equivalent to 170+",
    icon: "Trophy",
    category: "score",
    maxProgress: 1,
  },
  {
    id: "score_175",
    name: "Top Tier",
    description: "Achieve a score equivalent to 175+",
    icon: "Gem",
    category: "score",
    maxProgress: 1,
  },
  {
    id: "improvement_10",
    name: "Growth Mindset",
    description: "Improve your average score by 10%",
    icon: "ArrowUpRight",
    category: "score",
    maxProgress: 1,
  },

  // Streak achievements
  {
    id: "streak_3",
    name: "On a Roll",
    description: "Study for 3 days in a row",
    icon: "Flame",
    category: "streak",
    maxProgress: 3,
  },
  {
    id: "streak_7",
    name: "Week Warrior",
    description: "Study for 7 days in a row",
    icon: "Calendar",
    category: "streak",
    maxProgress: 7,
  },
  {
    id: "streak_14",
    name: "Two Week Champion",
    description: "Study for 14 days in a row",
    icon: "CalendarCheck",
    category: "streak",
    maxProgress: 14,
  },
  {
    id: "streak_30",
    name: "Monthly Master",
    description: "Study for 30 days in a row",
    icon: "CalendarHeart",
    category: "streak",
    maxProgress: 30,
  },

  // Mastery achievements
  {
    id: "lr_master",
    name: "Logic Guru",
    description: "Score 90%+ on 5 Logical Reasoning tests",
    icon: "Brain",
    category: "mastery",
    maxProgress: 5,
  },
  {
    id: "rc_master",
    name: "Reading Pro",
    description: "Score 90%+ on 5 Reading Comprehension tests",
    icon: "BookText",
    category: "mastery",
    maxProgress: 5,
  },
  {
    id: "all_types",
    name: "Well Rounded",
    description: "Complete at least one test in each section type",
    icon: "Layers",
    category: "mastery",
    maxProgress: 2, // LR and RC
  },

  // Special achievements
  {
    id: "night_owl",
    name: "Night Owl",
    description: "Complete a test after midnight",
    icon: "Moon",
    category: "special",
    maxProgress: 1,
  },
  {
    id: "early_bird",
    name: "Early Bird",
    description: "Complete a test before 7 AM",
    icon: "Sunrise",
    category: "special",
    maxProgress: 1,
  },
  {
    id: "weekend_warrior",
    name: "Weekend Warrior",
    description: "Study on both Saturday and Sunday",
    icon: "PartyPopper",
    category: "special",
    maxProgress: 1,
  },
];

const STORAGE_KEY = "lsatprep_achievements";

function getUserStorageKey(userId?: string): string {
  return userId ? `${STORAGE_KEY}_${userId}` : STORAGE_KEY;
}

export function getDefaultAchievements(): UserAchievements {
  return {
    unlockedAchievements: [],
    achievementDates: {},
    streakData: {
      currentStreak: 0,
      longestStreak: 0,
    },
  };
}

export function getUserAchievements(userId?: string): UserAchievements {
  if (typeof window === "undefined") return getDefaultAchievements();

  try {
    const stored = localStorage.getItem(getUserStorageKey(userId));
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Silent fail
  }
  return getDefaultAchievements();
}

export function saveUserAchievements(achievements: UserAchievements, userId?: string): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(getUserStorageKey(userId), JSON.stringify(achievements));
  } catch {
    // Silent fail
  }
}

export function unlockAchievement(achievementId: string, userId?: string): boolean {
  const userAchievements = getUserAchievements(userId);

  if (userAchievements.unlockedAchievements.includes(achievementId)) {
    return false; // Already unlocked
  }

  userAchievements.unlockedAchievements.push(achievementId);
  userAchievements.achievementDates[achievementId] = new Date().toISOString();

  saveUserAchievements(userAchievements, userId);
  return true;
}

export function getAchievementProgress(
  achievementId: string,
  testsCompleted: number,
  questionsAnswered: number,
  currentStreak: number,
  highScores: { lr: number; rc: number }
): number {
  const achievement = ACHIEVEMENTS.find((a) => a.id === achievementId);
  if (!achievement) return 0;

  switch (achievementId) {
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
      return Math.min(currentStreak, 3);
    case "streak_7":
      return Math.min(currentStreak, 7);
    case "streak_14":
      return Math.min(currentStreak, 14);
    case "streak_30":
      return Math.min(currentStreak, 30);
    default:
      return 0;
  }
}

export function updateStreak(userId?: string): { newStreak: number; isNewDay: boolean } {
  const userAchievements = getUserAchievements(userId);
  const today = new Date().toISOString().split("T")[0];
  const lastStudy = userAchievements.streakData.lastStudyDate;

  let newStreak = userAchievements.streakData.currentStreak;
  let isNewDay = false;

  if (!lastStudy) {
    // First time studying
    newStreak = 1;
    isNewDay = true;
  } else if (lastStudy === today) {
    // Already studied today, no change
    isNewDay = false;
  } else {
    const lastDate = new Date(lastStudy);
    const todayDate = new Date(today);
    const diffDays = Math.floor(
      (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 1) {
      // Consecutive day
      newStreak = userAchievements.streakData.currentStreak + 1;
      isNewDay = true;
    } else {
      // Streak broken
      newStreak = 1;
      isNewDay = true;
    }
  }

  userAchievements.streakData.currentStreak = newStreak;
  userAchievements.streakData.lastStudyDate = today;

  if (newStreak > userAchievements.streakData.longestStreak) {
    userAchievements.streakData.longestStreak = newStreak;
  }

  saveUserAchievements(userAchievements, userId);

  return { newStreak, isNewDay };
}

export function checkAndUnlockAchievements(
  userId: string | undefined,
  stats: {
    testsCompleted: number;
    questionsAnswered: number;
    correctAnswers: number;
    currentStreak: number;
    highestScore: number;
    lrTestsCompleted: number;
    rcTestsCompleted: number;
    lrHighScores: number[]; // Array of LR test scores
    rcHighScores: number[]; // Array of RC test scores
  }
): string[] {
  const newlyUnlocked: string[] = [];
  const userAchievements = getUserAchievements(userId);

  // Practice milestones
  if (stats.testsCompleted >= 1 && !userAchievements.unlockedAchievements.includes("first_test")) {
    if (unlockAchievement("first_test", userId)) newlyUnlocked.push("first_test");
  }
  if (stats.testsCompleted >= 10 && !userAchievements.unlockedAchievements.includes("tests_10")) {
    if (unlockAchievement("tests_10", userId)) newlyUnlocked.push("tests_10");
  }
  if (stats.testsCompleted >= 25 && !userAchievements.unlockedAchievements.includes("tests_25")) {
    if (unlockAchievement("tests_25", userId)) newlyUnlocked.push("tests_25");
  }
  if (stats.testsCompleted >= 50 && !userAchievements.unlockedAchievements.includes("tests_50")) {
    if (unlockAchievement("tests_50", userId)) newlyUnlocked.push("tests_50");
  }
  if (stats.testsCompleted >= 100 && !userAchievements.unlockedAchievements.includes("tests_100")) {
    if (unlockAchievement("tests_100", userId)) newlyUnlocked.push("tests_100");
  }
  if (stats.questionsAnswered >= 500 && !userAchievements.unlockedAchievements.includes("questions_500")) {
    if (unlockAchievement("questions_500", userId)) newlyUnlocked.push("questions_500");
  }
  if (stats.questionsAnswered >= 1000 && !userAchievements.unlockedAchievements.includes("questions_1000")) {
    if (unlockAchievement("questions_1000", userId)) newlyUnlocked.push("questions_1000");
  }

  // Perfect score
  if (stats.highestScore >= 100 && !userAchievements.unlockedAchievements.includes("perfect_section")) {
    if (unlockAchievement("perfect_section", userId)) newlyUnlocked.push("perfect_section");
  }

  // Streak achievements
  if (stats.currentStreak >= 3 && !userAchievements.unlockedAchievements.includes("streak_3")) {
    if (unlockAchievement("streak_3", userId)) newlyUnlocked.push("streak_3");
  }
  if (stats.currentStreak >= 7 && !userAchievements.unlockedAchievements.includes("streak_7")) {
    if (unlockAchievement("streak_7", userId)) newlyUnlocked.push("streak_7");
  }
  if (stats.currentStreak >= 14 && !userAchievements.unlockedAchievements.includes("streak_14")) {
    if (unlockAchievement("streak_14", userId)) newlyUnlocked.push("streak_14");
  }
  if (stats.currentStreak >= 30 && !userAchievements.unlockedAchievements.includes("streak_30")) {
    if (unlockAchievement("streak_30", userId)) newlyUnlocked.push("streak_30");
  }

  // Mastery - LR
  const lrHighScoreCount = stats.lrHighScores.filter((s) => s >= 90).length;
  if (lrHighScoreCount >= 5 && !userAchievements.unlockedAchievements.includes("lr_master")) {
    if (unlockAchievement("lr_master", userId)) newlyUnlocked.push("lr_master");
  }

  // Mastery - RC
  const rcHighScoreCount = stats.rcHighScores.filter((s) => s >= 90).length;
  if (rcHighScoreCount >= 5 && !userAchievements.unlockedAchievements.includes("rc_master")) {
    if (unlockAchievement("rc_master", userId)) newlyUnlocked.push("rc_master");
  }

  // Well Rounded
  if (stats.lrTestsCompleted > 0 && stats.rcTestsCompleted > 0 &&
      !userAchievements.unlockedAchievements.includes("all_types")) {
    if (unlockAchievement("all_types", userId)) newlyUnlocked.push("all_types");
  }

  // Time-based achievements
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 5 && !userAchievements.unlockedAchievements.includes("night_owl")) {
    if (unlockAchievement("night_owl", userId)) newlyUnlocked.push("night_owl");
  }
  if (hour >= 5 && hour < 7 && !userAchievements.unlockedAchievements.includes("early_bird")) {
    if (unlockAchievement("early_bird", userId)) newlyUnlocked.push("early_bird");
  }

  return newlyUnlocked;
}

export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find((a) => a.id === id);
}

export function getCategoryAchievements(category: Achievement["category"]): Achievement[] {
  return ACHIEVEMENTS.filter((a) => a.category === category);
}
