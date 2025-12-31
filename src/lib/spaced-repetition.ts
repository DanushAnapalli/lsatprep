// Spaced Repetition System for LSAT Prep
// Uses a modified SM-2 algorithm optimized for LSAT question review

import { UserProgress, WrongAnswer } from "./user-progress";

// ============================================
// TYPES
// ============================================

export interface ReviewCard {
  questionId: string;
  questionType: string;
  sectionType: "logical-reasoning" | "reading-comprehension";
  // SM-2 parameters
  easeFactor: number;      // Starts at 2.5, min 1.3
  interval: number;        // Days until next review
  repetitions: number;     // Successful review count
  lastReview: Date | null;
  nextReview: Date;
  // Performance tracking
  correctStreak: number;
  totalReviews: number;
  lastAnswer: "correct" | "incorrect" | null;
}

export interface ReviewSession {
  cardsToReview: ReviewCard[];
  cardsReviewed: number;
  correctCount: number;
  startedAt: Date;
}

export interface SpacedRepetitionData {
  cards: Record<string, ReviewCard>;
  lastSessionDate: Date | null;
  totalReviewSessions: number;
  currentStreak: number;        // Days in a row with reviews
  longestStreak: number;
  lastStreakDate: Date | null;  // For calculating streak
}

export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5;
// 0 - Complete blackout, no recall
// 1 - Incorrect, but recognized answer when shown
// 2 - Incorrect, but answer seemed easy to recall
// 3 - Correct with serious difficulty
// 4 - Correct after hesitation
// 5 - Perfect response, instant recall

// ============================================
// CONSTANTS
// ============================================

const STORAGE_KEY = "lsatprep-spaced-repetition";
const MIN_EASE_FACTOR = 1.3;
const INITIAL_EASE_FACTOR = 2.5;
const INITIAL_INTERVAL = 1; // 1 day

// ============================================
// SM-2 ALGORITHM
// ============================================

/**
 * Calculate next review interval using modified SM-2 algorithm
 */
export function calculateNextReview(
  card: ReviewCard,
  quality: ReviewQuality
): ReviewCard {
  const now = new Date();
  let { easeFactor, interval, repetitions, correctStreak } = card;

  if (quality >= 3) {
    // Correct response
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 3;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
    correctStreak++;

    // Update ease factor
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (easeFactor < MIN_EASE_FACTOR) {
      easeFactor = MIN_EASE_FACTOR;
    }
  } else {
    // Incorrect response - reset
    repetitions = 0;
    interval = 1;
    correctStreak = 0;
    // Decrease ease factor for difficult cards
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor - 0.2);
  }

  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ...card,
    easeFactor,
    interval,
    repetitions,
    correctStreak,
    lastReview: now,
    nextReview,
    totalReviews: card.totalReviews + 1,
    lastAnswer: quality >= 3 ? "correct" : "incorrect",
  };
}

// ============================================
// CARD MANAGEMENT
// ============================================

/**
 * Create a new review card from a wrong answer
 */
export function createCardFromWrongAnswer(wrongAnswer: WrongAnswer): ReviewCard {
  const now = new Date();
  return {
    questionId: wrongAnswer.questionId,
    questionType: wrongAnswer.questionType,
    sectionType: wrongAnswer.sectionType,
    easeFactor: INITIAL_EASE_FACTOR,
    interval: INITIAL_INTERVAL,
    repetitions: 0,
    lastReview: null,
    nextReview: now, // Due immediately
    correctStreak: 0,
    totalReviews: 0,
    lastAnswer: null,
  };
}

/**
 * Get cards that are due for review
 */
export function getDueCards(data: SpacedRepetitionData, limit: number = 10): ReviewCard[] {
  const now = new Date();
  const dueCards = Object.values(data.cards)
    .filter(card => new Date(card.nextReview) <= now)
    .sort((a, b) => {
      // Prioritize: overdue cards, then by ease factor (harder first)
      const aOverdue = now.getTime() - new Date(a.nextReview).getTime();
      const bOverdue = now.getTime() - new Date(b.nextReview).getTime();
      if (aOverdue !== bOverdue) return bOverdue - aOverdue;
      return a.easeFactor - b.easeFactor;
    });

  return dueCards.slice(0, limit);
}

/**
 * Get count of cards due today
 */
export function getDueCount(data: SpacedRepetitionData): number {
  const now = new Date();
  return Object.values(data.cards).filter(
    card => new Date(card.nextReview) <= now
  ).length;
}

/**
 * Sync cards with user's wrong answers
 */
export function syncCardsWithProgress(
  data: SpacedRepetitionData,
  progress: UserProgress
): SpacedRepetitionData {
  const updatedCards = { ...data.cards };

  // Add new wrong answers as cards
  for (const wrongAnswer of progress.wrongAnswers) {
    if (!wrongAnswer.masteredAt && !updatedCards[wrongAnswer.questionId]) {
      updatedCards[wrongAnswer.questionId] = createCardFromWrongAnswer(wrongAnswer);
    }
  }

  // Remove cards for mastered questions
  for (const wrongAnswer of progress.wrongAnswers) {
    if (wrongAnswer.masteredAt && updatedCards[wrongAnswer.questionId]) {
      delete updatedCards[wrongAnswer.questionId];
    }
  }

  return { ...data, cards: updatedCards };
}

// ============================================
// STREAK MANAGEMENT
// ============================================

/**
 * Update streak after completing a review session
 */
export function updateStreak(data: SpacedRepetitionData): SpacedRepetitionData {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (!data.lastStreakDate) {
    // First ever session
    return {
      ...data,
      currentStreak: 1,
      longestStreak: 1,
      lastStreakDate: today,
      lastSessionDate: now,
      totalReviewSessions: data.totalReviewSessions + 1,
    };
  }

  const lastDate = new Date(data.lastStreakDate);
  const lastDay = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
  const daysDiff = Math.floor((today.getTime() - lastDay.getTime()) / (1000 * 60 * 60 * 24));

  let newStreak = data.currentStreak;

  if (daysDiff === 0) {
    // Same day, streak unchanged
  } else if (daysDiff === 1) {
    // Consecutive day, increment streak
    newStreak++;
  } else {
    // Streak broken, reset to 1
    newStreak = 1;
  }

  return {
    ...data,
    currentStreak: newStreak,
    longestStreak: Math.max(data.longestStreak, newStreak),
    lastStreakDate: today,
    lastSessionDate: now,
    totalReviewSessions: data.totalReviewSessions + 1,
  };
}

// ============================================
// STORAGE
// ============================================

export function getInitialData(): SpacedRepetitionData {
  return {
    cards: {},
    lastSessionDate: null,
    totalReviewSessions: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastStreakDate: null,
  };
}

export function loadSpacedRepetitionData(userId?: string): SpacedRepetitionData {
  if (typeof window === "undefined") return getInitialData();

  const key = userId ? `${STORAGE_KEY}_${userId}` : STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return getInitialData();

  try {
    const parsed = JSON.parse(stored);
    // Convert date strings back to Date objects
    return {
      ...parsed,
      lastSessionDate: parsed.lastSessionDate ? new Date(parsed.lastSessionDate) : null,
      lastStreakDate: parsed.lastStreakDate ? new Date(parsed.lastStreakDate) : null,
      cards: Object.fromEntries(
        Object.entries(parsed.cards).map(([id, card]: [string, unknown]) => {
          const c = card as ReviewCard;
          return [id, {
            ...c,
            lastReview: c.lastReview ? new Date(c.lastReview) : null,
            nextReview: new Date(c.nextReview),
          }];
        })
      ),
    };
  } catch {
    return getInitialData();
  }
}

export function saveSpacedRepetitionData(data: SpacedRepetitionData, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${STORAGE_KEY}_${userId}` : STORAGE_KEY;
  localStorage.setItem(key, JSON.stringify(data));
}

// ============================================
// STATISTICS
// ============================================

export interface SRStats {
  totalCards: number;
  dueToday: number;
  masteredCards: number;      // Cards with 5+ correct streak
  learningCards: number;      // Cards with 1-4 correct streak
  newCards: number;           // Cards never reviewed
  averageEaseFactor: number;
  currentStreak: number;
  longestStreak: number;
}

export function getStats(data: SpacedRepetitionData): SRStats {
  const cards = Object.values(data.cards);
  const now = new Date();

  const dueToday = cards.filter(c => new Date(c.nextReview) <= now).length;
  const masteredCards = cards.filter(c => c.correctStreak >= 5).length;
  const learningCards = cards.filter(c => c.correctStreak >= 1 && c.correctStreak < 5).length;
  const newCards = cards.filter(c => c.totalReviews === 0).length;

  const totalEase = cards.reduce((sum, c) => sum + c.easeFactor, 0);
  const averageEaseFactor = cards.length > 0 ? totalEase / cards.length : INITIAL_EASE_FACTOR;

  return {
    totalCards: cards.length,
    dueToday,
    masteredCards,
    learningCards,
    newCards,
    averageEaseFactor,
    currentStreak: data.currentStreak,
    longestStreak: data.longestStreak,
  };
}
