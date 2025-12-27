// User Progress Management System
// Handles test history, wrong answers, and question tracking

import { Question, SectionType, LogicalReasoningQuestionType, ReadingComprehensionQuestionType } from "./lsat-types";

// ============================================
// TYPES
// ============================================

export interface CompletedTest {
  id: string;
  testName: string;
  completedAt: Date;
  sections: CompletedSection[];
  totalQuestions: number;
  correctAnswers: number;
  scaledScore: number;
  percentile: number;
  timeUsed: number; // in seconds
}

export interface CompletedSection {
  id: string;
  type: SectionType;
  questions: AnsweredQuestion[];
  correctCount: number;
  totalCount: number;
  timeUsed: number;
}

export interface AnsweredQuestion {
  questionId: string;
  selectedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  isCorrect: boolean;
  timeSpent: number;
  questionType: LogicalReasoningQuestionType | ReadingComprehensionQuestionType;
  sectionType: SectionType;
}

export interface UserProgress {
  completedTests: CompletedTest[];
  wrongAnswers: WrongAnswer[];
  seenQuestionIds: string[];
  improvementTestsTaken: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  averageScore: number;
  highestScore: number;
  lastActiveAt: Date;
  createdAt: Date;
}

export interface WrongAnswer {
  questionId: string;
  questionType: LogicalReasoningQuestionType | ReadingComprehensionQuestionType;
  sectionType: SectionType;
  selectedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  testId: string;
  timestamp: Date;
  reviewed: boolean; // Has user reviewed this in improvement test?
  masteredAt?: Date; // When user got it right in improvement test
}

export interface TestConfig {
  type: "full" | "single-section" | "improvement" | "custom";
  sectionTypes?: SectionType[];
  questionCount?: number;
  includeSeenQuestions?: boolean;
}

// ============================================
// LOCAL STORAGE KEYS
// ============================================

const STORAGE_KEY_PREFIX = "lsatprep_user_progress";
const VERSION_KEY = "lsatprep_version";
const CURRENT_USER_KEY = "lsatprep_current_user";
const CURRENT_VERSION = "1.0.0";

// Legacy storage key (before user-specific storage)
const LEGACY_STORAGE_KEY = "lsatprep_user_progress";

// Get user-specific storage key
function getUserStorageKey(userId?: string): string {
  const uid = userId || getCurrentUserId() || "guest";
  return `${STORAGE_KEY_PREFIX}_${uid}`;
}

// Get/set current user ID for storage
export function setCurrentUserId(userId: string | null): void {
  if (typeof window === "undefined") return;
  if (userId) {
    localStorage.setItem(CURRENT_USER_KEY, userId);
    // Migrate legacy data to user-specific storage if needed
    migrateLegacyData(userId);
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function getCurrentUserId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CURRENT_USER_KEY);
}

// Migrate data from old shared storage to user-specific storage
function migrateLegacyData(userId: string): void {
  if (typeof window === "undefined") return;

  const userStorageKey = `${STORAGE_KEY_PREFIX}_${userId}`;
  const userDataExists = localStorage.getItem(userStorageKey);
  const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);

  // Only migrate if user doesn't have data yet and legacy data exists
  if (!userDataExists && legacyData) {
    try {
      // Copy legacy data to user's storage
      localStorage.setItem(userStorageKey, legacyData);
      console.log(`Migrated legacy data to user ${userId}`);
    } catch (error) {
      console.error("Error migrating legacy data:", error);
    }
  }
}

// ============================================
// INITIALIZATION
// ============================================

export function getInitialProgress(): UserProgress {
  return {
    completedTests: [],
    wrongAnswers: [],
    seenQuestionIds: [],
    improvementTestsTaken: 0,
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    averageScore: 0,
    highestScore: 0,
    lastActiveAt: new Date(),
    createdAt: new Date(),
  };
}

// ============================================
// STORAGE FUNCTIONS
// ============================================

export function loadUserProgress(userId?: string): UserProgress {
  if (typeof window === "undefined") {
    return getInitialProgress();
  }

  try {
    const storageKey = getUserStorageKey(userId);
    let stored = localStorage.getItem(storageKey);

    // Check if we should migrate legacy data
    if (userId) {
      const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacyData) {
        // Check if current user data is empty or non-existent
        let shouldMigrate = !stored;
        if (stored) {
          try {
            const currentData = JSON.parse(stored);
            // If user has no completed tests, consider it "empty" and migrate
            shouldMigrate = !currentData.completedTests || currentData.completedTests.length === 0;
          } catch {
            shouldMigrate = true;
          }
        }

        if (shouldMigrate) {
          // Check if legacy data has actual content
          try {
            const legacyParsed = JSON.parse(legacyData);
            if (legacyParsed.completedTests && legacyParsed.completedTests.length > 0) {
              localStorage.setItem(storageKey, legacyData);
              stored = legacyData;
              console.log(`Migrated legacy data (${legacyParsed.completedTests.length} tests) to user ${userId}`);
            }
          } catch {
            // Legacy data is corrupted, ignore
          }
        }
      }
    }

    if (!stored) {
      return getInitialProgress();
    }

    const parsed = JSON.parse(stored);

    // Convert date strings back to Date objects
    const completedTests = parsed.completedTests.map((test: CompletedTest) => ({
      ...test,
      completedAt: new Date(test.completedAt),
    }));

    // Compute highestScore from existing tests if not present (migration)
    let highestScore = parsed.highestScore || 0;
    let needsMigration = false;
    if ((!parsed.highestScore || parsed.highestScore === 0) && completedTests.length > 0) {
      highestScore = Math.max(...completedTests.map((t: CompletedTest) => t.scaledScore));
      needsMigration = true;
    }

    const result: UserProgress = {
      ...parsed,
      completedTests,
      wrongAnswers: parsed.wrongAnswers.map((wa: WrongAnswer) => ({
        ...wa,
        timestamp: new Date(wa.timestamp),
        masteredAt: wa.masteredAt ? new Date(wa.masteredAt) : undefined,
      })),
      highestScore,
      lastActiveAt: new Date(parsed.lastActiveAt),
      createdAt: new Date(parsed.createdAt),
    };

    // Persist migration to localStorage
    if (needsMigration) {
      saveUserProgress(result, userId);
    }

    return result;
  } catch (error) {
    console.error("Error loading user progress:", error);
    return getInitialProgress();
  }
}

export function saveUserProgress(progress: UserProgress, userId?: string): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const storageKey = getUserStorageKey(userId);
    localStorage.setItem(storageKey, JSON.stringify(progress));
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
  } catch (error) {
    console.error("Error saving user progress:", error);
  }
}

// ============================================
// TEST COMPLETION
// ============================================

export function recordCompletedTest(
  progress: UserProgress,
  test: CompletedTest
): UserProgress {
  const newWrongAnswers: WrongAnswer[] = [];

  // Extract wrong answers from all sections
  test.sections.forEach((section) => {
    section.questions.forEach((q) => {
      if (!q.isCorrect) {
        newWrongAnswers.push({
          questionId: q.questionId,
          questionType: q.questionType,
          sectionType: q.sectionType,
          selectedAnswer: q.selectedAnswer,
          correctAnswer: q.correctAnswer,
          testId: test.id,
          timestamp: new Date(),
          reviewed: false,
        });
      }
    });
  });

  // Mark questions as seen
  const newSeenIds = test.sections.flatMap((s) =>
    s.questions.map((q) => q.questionId)
  );

  // Calculate new average score
  const allScores = [...progress.completedTests.map((t) => t.scaledScore), test.scaledScore];
  const newAverage = allScores.reduce((a, b) => a + b, 0) / allScores.length;

  // Calculate highest score (handle undefined for old data migration)
  const newHighest = Math.max(progress.highestScore || 0, test.scaledScore);

  return {
    ...progress,
    completedTests: [...progress.completedTests, test],
    wrongAnswers: [...progress.wrongAnswers, ...newWrongAnswers],
    seenQuestionIds: [...new Set([...progress.seenQuestionIds, ...newSeenIds])],
    totalQuestionsAnswered: progress.totalQuestionsAnswered + test.totalQuestions,
    totalCorrect: progress.totalCorrect + test.correctAnswers,
    averageScore: Math.round(newAverage),
    highestScore: newHighest,
    lastActiveAt: new Date(),
  };
}

// ============================================
// IMPROVEMENT TEST FUNCTIONS
// ============================================

export function getWrongAnswerQuestionIds(progress: UserProgress): string[] {
  // Get unique question IDs that haven't been mastered
  const unmasteredWrong = progress.wrongAnswers.filter((wa) => !wa.masteredAt);
  return [...new Set(unmasteredWrong.map((wa) => wa.questionId))];
}

export function markQuestionMastered(
  progress: UserProgress,
  questionId: string
): UserProgress {
  return {
    ...progress,
    wrongAnswers: progress.wrongAnswers.map((wa) =>
      wa.questionId === questionId
        ? { ...wa, masteredAt: new Date(), reviewed: true }
        : wa
    ),
    lastActiveAt: new Date(),
  };
}

export function recordImprovementTest(
  progress: UserProgress,
  questionResults: { questionId: string; isCorrect: boolean }[]
): UserProgress {
  let updatedProgress = { ...progress };

  questionResults.forEach((result) => {
    if (result.isCorrect) {
      updatedProgress = markQuestionMastered(updatedProgress, result.questionId);
    } else {
      // Mark as reviewed but not mastered
      updatedProgress = {
        ...updatedProgress,
        wrongAnswers: updatedProgress.wrongAnswers.map((wa) =>
          wa.questionId === result.questionId
            ? { ...wa, reviewed: true }
            : wa
        ),
      };
    }
  });

  return {
    ...updatedProgress,
    improvementTestsTaken: progress.improvementTestsTaken + 1,
    lastActiveAt: new Date(),
  };
}

// ============================================
// QUESTION SELECTION HELPERS
// ============================================

export function getUnseenQuestionIds(
  allQuestionIds: string[],
  progress: UserProgress
): string[] {
  return allQuestionIds.filter((id) => !progress.seenQuestionIds.includes(id));
}

export function getQuestionsByType(
  questions: Question[],
  sectionType: SectionType
): Question[] {
  return questions.filter((q) => q.sectionType === sectionType);
}

// ============================================
// STATISTICS HELPERS
// ============================================

export function getPerformanceByQuestionType(
  progress: UserProgress
): Map<string, { correct: number; total: number; percentage: number }> {
  const stats = new Map<string, { correct: number; total: number; percentage: number }>();

  progress.completedTests.forEach((test) => {
    test.sections.forEach((section) => {
      section.questions.forEach((q) => {
        const current = stats.get(q.questionType) || { correct: 0, total: 0, percentage: 0 };
        stats.set(q.questionType, {
          correct: current.correct + (q.isCorrect ? 1 : 0),
          total: current.total + 1,
          percentage: 0,
        });
      });
    });
  });

  // Calculate percentages
  stats.forEach((value, key) => {
    stats.set(key, {
      ...value,
      percentage: Math.round((value.correct / value.total) * 100),
    });
  });

  return stats;
}

export function getPerformanceBySectionType(
  progress: UserProgress
): Map<SectionType, { correct: number; total: number; percentage: number }> {
  const stats = new Map<SectionType, { correct: number; total: number; percentage: number }>();

  progress.completedTests.forEach((test) => {
    test.sections.forEach((section) => {
      const current = stats.get(section.type) || { correct: 0, total: 0, percentage: 0 };
      stats.set(section.type, {
        correct: current.correct + section.correctCount,
        total: current.total + section.totalCount,
        percentage: 0,
      });
    });
  });

  // Calculate percentages
  stats.forEach((value, key) => {
    stats.set(key, {
      ...value,
      percentage: Math.round((value.correct / value.total) * 100),
    });
  });

  return stats;
}

export function getScoreHistory(progress: UserProgress): { date: Date; score: number }[] {
  return progress.completedTests.map((test) => ({
    date: test.completedAt,
    score: test.scaledScore,
  }));
}

export function getRecentActivity(progress: UserProgress, days: number = 7): CompletedTest[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return progress.completedTests.filter((test) => test.completedAt >= cutoff);
}

// ============================================
// WEAK TOPIC ANALYSIS
// ============================================

export interface WeakTopic {
  questionType: string;
  sectionType: SectionType;
  correct: number;
  total: number;
  percentage: number;
}

/**
 * Analyzes user performance to identify weak topics (question types with < 70% accuracy)
 * Returns topics sorted by weakness (lowest percentage first)
 */
export function getWeakTopics(progress: UserProgress, threshold: number = 70): WeakTopic[] {
  const stats = new Map<string, { correct: number; total: number; sectionType: SectionType }>();

  // Aggregate stats from all completed tests
  progress.completedTests.forEach((test) => {
    test.sections.forEach((section) => {
      section.questions.forEach((q) => {
        const current = stats.get(q.questionType) || { correct: 0, total: 0, sectionType: q.sectionType };
        stats.set(q.questionType, {
          correct: current.correct + (q.isCorrect ? 1 : 0),
          total: current.total + 1,
          sectionType: q.sectionType,
        });
      });
    });
  });

  // Convert to array and filter for weak topics
  const weakTopics: WeakTopic[] = [];
  stats.forEach((value, questionType) => {
    const percentage = Math.round((value.correct / value.total) * 100);
    if (percentage < threshold && value.total >= 2) { // Only include if attempted at least 2 questions
      weakTopics.push({
        questionType,
        sectionType: value.sectionType,
        correct: value.correct,
        total: value.total,
        percentage,
      });
    }
  });

  // Sort by percentage (weakest first)
  return weakTopics.sort((a, b) => a.percentage - b.percentage);
}

/**
 * Gets the list of question types the user is weak in
 */
export function getWeakQuestionTypes(progress: UserProgress): string[] {
  return getWeakTopics(progress).map((t) => t.questionType);
}

// ============================================
// RESET FUNCTIONS
// ============================================

export function resetProgress(userId?: string): void {
  if (typeof window === "undefined") {
    return;
  }
  const storageKey = getUserStorageKey(userId);
  localStorage.removeItem(storageKey);
}

export function resetSeenQuestions(progress: UserProgress): UserProgress {
  return {
    ...progress,
    seenQuestionIds: [],
    lastActiveAt: new Date(),
  };
}
