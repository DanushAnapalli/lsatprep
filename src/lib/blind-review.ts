// Blind Review System
// Allows users to review flagged questions without time pressure to identify
// whether mistakes are due to timing issues or knowledge gaps

import { AnsweredQuestion } from "./user-progress";

// ============================================
// TYPES
// ============================================

export interface BlindReviewAnswer {
  questionId: string;
  selectedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  isCorrect: boolean;
  timeSpent: number; // Time spent during blind review (no limit)
  confidence: "low" | "medium" | "high";
}

export interface BlindReviewResult {
  testId: string;
  completedAt: Date;
  timedPhase: {
    totalQuestions: number;
    correct: number;
    flaggedQuestions: string[]; // Question IDs that were flagged
  };
  blindReviewPhase: {
    questionsReviewed: number;
    correct: number;
    answers: BlindReviewAnswer[];
  };
  analysis: BlindReviewAnalysis;
}

export interface BlindReviewAnalysis {
  // Questions answered wrong during timed but correct during blind review
  // These indicate timing/pressure issues, not knowledge gaps
  timingIssues: TimingIssue[];

  // Questions answered wrong in both phases
  // These indicate genuine knowledge gaps
  knowledgeGaps: KnowledgeGap[];

  // Questions answered correctly in both phases
  // Strong understanding
  solidKnowledge: string[];

  // Questions changed from correct to wrong (overthinking)
  overthinking: string[];

  // Summary statistics
  summary: {
    timingIssueCount: number;
    knowledgeGapCount: number;
    solidKnowledgeCount: number;
    overthinkingCount: number;
    improvementPotential: number; // Score improvement if timing issues were resolved
  };
}

export interface TimingIssue {
  questionId: string;
  timedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  blindReviewAnswer: "A" | "B" | "C" | "D" | "E" | null;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  timedTimeSpent: number;
  blindReviewTimeSpent: number;
  recommendation: string;
}

export interface KnowledgeGap {
  questionId: string;
  questionType: string;
  timedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  blindReviewAnswer: "A" | "B" | "C" | "D" | "E" | null;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  recommendation: string;
}

// ============================================
// ANALYSIS FUNCTIONS
// ============================================

/**
 * Analyzes timed answers vs blind review answers to identify patterns
 */
export function analyzeBlindReview(
  timedAnswers: AnsweredQuestion[],
  blindReviewAnswers: BlindReviewAnswer[],
  flaggedQuestionIds: string[]
): BlindReviewAnalysis {
  const timingIssues: TimingIssue[] = [];
  const knowledgeGaps: KnowledgeGap[] = [];
  const solidKnowledge: string[] = [];
  const overthinking: string[] = [];

  // Create a map for quick lookup
  const timedAnswerMap = new Map(timedAnswers.map(a => [a.questionId, a]));

  for (const blindAnswer of blindReviewAnswers) {
    const timedAnswer = timedAnswerMap.get(blindAnswer.questionId);
    if (!timedAnswer) continue;

    const timedCorrect = timedAnswer.isCorrect;
    const blindCorrect = blindAnswer.isCorrect;

    if (!timedCorrect && blindCorrect) {
      // Wrong during timed, correct during blind review = TIMING ISSUE
      timingIssues.push({
        questionId: blindAnswer.questionId,
        timedAnswer: timedAnswer.selectedAnswer,
        blindReviewAnswer: blindAnswer.selectedAnswer,
        correctAnswer: blindAnswer.correctAnswer,
        timedTimeSpent: timedAnswer.timeSpent,
        blindReviewTimeSpent: blindAnswer.timeSpent,
        recommendation: generateTimingRecommendation(timedAnswer.timeSpent, blindAnswer.timeSpent),
      });
    } else if (!timedCorrect && !blindCorrect) {
      // Wrong in both = KNOWLEDGE GAP
      knowledgeGaps.push({
        questionId: blindAnswer.questionId,
        questionType: timedAnswer.questionType,
        timedAnswer: timedAnswer.selectedAnswer,
        blindReviewAnswer: blindAnswer.selectedAnswer,
        correctAnswer: blindAnswer.correctAnswer,
        recommendation: generateKnowledgeRecommendation(timedAnswer.questionType),
      });
    } else if (timedCorrect && blindCorrect) {
      // Correct in both = SOLID KNOWLEDGE
      solidKnowledge.push(blindAnswer.questionId);
    } else if (timedCorrect && !blindCorrect) {
      // Correct during timed, wrong during blind review = OVERTHINKING
      overthinking.push(blindAnswer.questionId);
    }
  }

  // Calculate improvement potential
  // Each timing issue resolved would add ~1 raw point, which translates to ~0.5-1 scaled points
  const improvementPotential = Math.round(timingIssues.length * 0.75);

  return {
    timingIssues,
    knowledgeGaps,
    solidKnowledge,
    overthinking,
    summary: {
      timingIssueCount: timingIssues.length,
      knowledgeGapCount: knowledgeGaps.length,
      solidKnowledgeCount: solidKnowledge.length,
      overthinkingCount: overthinking.length,
      improvementPotential,
    },
  };
}

function generateTimingRecommendation(timedTime: number, blindTime: number): string {
  const timeDiff = blindTime - timedTime;

  if (timedTime < 60) {
    return "You rushed this question. Take at least 1-2 minutes to carefully read and analyze.";
  } else if (timeDiff > 120) {
    return "You needed significantly more time. Practice similar questions to build speed.";
  } else {
    return "A bit more time would help. Focus on efficient reading strategies.";
  }
}

function generateKnowledgeRecommendation(questionType: string): string {
  const recommendations: Record<string, string> = {
    "strengthen": "Review how to identify assumptions that support conclusions.",
    "weaken": "Practice finding flaws and counter-examples to arguments.",
    "necessary-assumption": "Focus on the negation test technique.",
    "sufficient-assumption": "Practice identifying what would guarantee the conclusion.",
    "flaw": "Study common logical fallacies and argument patterns.",
    "parallel-reasoning": "Focus on matching argument structures, not content.",
    "parallel-flaw": "Identify the flaw first, then match the pattern.",
    "method-of-reasoning": "Learn to describe argument strategies abstractly.",
    "inference": "Practice strict logical deductions from given information.",
    "most-strongly-supported": "Look for answers that must be true based on the text.",
    "resolve-paradox": "Find answers that explain how both facts can be true.",
    "main-point": "Identify the author's primary argument or thesis.",
    "author-attitude": "Look for tone indicators and evaluative language.",
  };

  return recommendations[questionType] || "Review fundamentals for this question type.";
}

/**
 * Creates a BlindReviewResult from completed review
 */
export function createBlindReviewResult(
  testId: string,
  timedAnswers: AnsweredQuestion[],
  flaggedQuestionIds: string[],
  blindReviewAnswers: BlindReviewAnswer[]
): BlindReviewResult {
  const timedCorrect = timedAnswers.filter(a => a.isCorrect).length;
  const blindCorrect = blindReviewAnswers.filter(a => a.isCorrect).length;
  const analysis = analyzeBlindReview(timedAnswers, blindReviewAnswers, flaggedQuestionIds);

  return {
    testId,
    completedAt: new Date(),
    timedPhase: {
      totalQuestions: timedAnswers.length,
      correct: timedCorrect,
      flaggedQuestions: flaggedQuestionIds,
    },
    blindReviewPhase: {
      questionsReviewed: blindReviewAnswers.length,
      correct: blindCorrect,
      answers: blindReviewAnswers,
    },
    analysis,
  };
}

// ============================================
// LOCAL STORAGE
// ============================================

const BLIND_REVIEW_STORAGE_KEY = "lsatprep-blind-reviews";

export function saveBlindReviewResult(result: BlindReviewResult, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${BLIND_REVIEW_STORAGE_KEY}_${userId}` : BLIND_REVIEW_STORAGE_KEY;
  const existing = loadBlindReviewResults(userId);
  const updated = [...existing, result];

  localStorage.setItem(key, JSON.stringify(updated));
}

export function loadBlindReviewResults(userId?: string): BlindReviewResult[] {
  if (typeof window === "undefined") return [];

  const key = userId ? `${BLIND_REVIEW_STORAGE_KEY}_${userId}` : BLIND_REVIEW_STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return parsed.map((result: BlindReviewResult) => ({
      ...result,
      completedAt: new Date(result.completedAt),
    }));
  } catch {
    return [];
  }
}

export function getBlindReviewForTest(testId: string, userId?: string): BlindReviewResult | null {
  const results = loadBlindReviewResults(userId);
  return results.find(r => r.testId === testId) || null;
}

// ============================================
// STATISTICS HELPERS
// ============================================

export interface BlindReviewStats {
  totalReviews: number;
  averageTimingIssues: number;
  averageKnowledgeGaps: number;
  totalImprovementPotential: number;
  mostCommonTimingQuestionTypes: string[];
  mostCommonKnowledgeGapTypes: string[];
}

export function calculateBlindReviewStats(userId?: string): BlindReviewStats {
  const results = loadBlindReviewResults(userId);

  if (results.length === 0) {
    return {
      totalReviews: 0,
      averageTimingIssues: 0,
      averageKnowledgeGaps: 0,
      totalImprovementPotential: 0,
      mostCommonTimingQuestionTypes: [],
      mostCommonKnowledgeGapTypes: [],
    };
  }

  const timingIssueCount = results.reduce(
    (sum, r) => sum + r.analysis.summary.timingIssueCount,
    0
  );
  const knowledgeGapCount = results.reduce(
    (sum, r) => sum + r.analysis.summary.knowledgeGapCount,
    0
  );
  const improvementPotential = results.reduce(
    (sum, r) => sum + r.analysis.summary.improvementPotential,
    0
  );

  // Count question types for knowledge gaps
  const knowledgeGapTypes = new Map<string, number>();
  results.forEach(r => {
    r.analysis.knowledgeGaps.forEach(gap => {
      const count = knowledgeGapTypes.get(gap.questionType) || 0;
      knowledgeGapTypes.set(gap.questionType, count + 1);
    });
  });

  const sortedKnowledgeGapTypes = Array.from(knowledgeGapTypes.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([type]) => type);

  return {
    totalReviews: results.length,
    averageTimingIssues: Math.round(timingIssueCount / results.length * 10) / 10,
    averageKnowledgeGaps: Math.round(knowledgeGapCount / results.length * 10) / 10,
    totalImprovementPotential: improvementPotential,
    mostCommonTimingQuestionTypes: [], // Would need question type data on timing issues
    mostCommonKnowledgeGapTypes: sortedKnowledgeGapTypes,
  };
}
