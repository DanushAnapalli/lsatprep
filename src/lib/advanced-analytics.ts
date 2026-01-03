// Advanced Analytics Library
// Provides detailed analysis of user performance for Pro users

import { UserProgress, CompletedTest, AnsweredQuestion } from "./user-progress";
import { LogicalReasoningQuestionType, ReadingComprehensionQuestionType, LR_TYPE_DESCRIPTIONS, RC_TYPE_DESCRIPTIONS } from "./lsat-types";

// ============================================
// TYPES
// ============================================

export interface QuestionTypeStats {
  type: string;
  displayName: string;
  sectionType: "logical-reasoning" | "reading-comprehension";
  correct: number;
  total: number;
  accuracy: number;
  avgTimeSeconds: number;
  isWeakness: boolean; // <70% accuracy with 3+ attempts
}

export interface TimeBucketStats {
  count: number;
  correct: number;
  accuracy: number;
}

// LSAT Standard Pacing Constants
export const LSAT_PACE_LR = 85;  // 1:25 per LR question
export const LSAT_PACE_RC = 100; // 1:40 per RC question (includes passage reading time)
export const LSAT_AMBER_THRESHOLD_LR = 105; // 25% over target
export const LSAT_AMBER_THRESHOLD_RC = 125; // 25% over target

export interface SectionTimeStats {
  avgTimePerQuestion: number;
  targetPace: number;
  questionsOnPace: number;
  questionsSlightlyOver: number;
  questionsOver: number;
  totalQuestions: number;
}

export interface TimeAnalytics {
  avgTimePerQuestion: number;
  recommendedPace: number; // 85 seconds for LR, varies for RC
  questionsOverPace: number; // >2 min
  questionsRushed: number; // <30 sec (kept for backwards compatibility)
  timeDistribution: {
    under30s: number;
    thirtyTo60s: number;
    sixtyTo90s: number;
    ninetyTo120s: number;
    over120s: number;
  };
  // Accuracy per time bucket - shows if speed correlates with accuracy
  accuracyByTime: {
    under30s: TimeBucketStats;
    thirtyTo60s: TimeBucketStats;
    sixtyTo90s: TimeBucketStats;
    ninetyTo120s: TimeBucketStats;
    over120s: TimeBucketStats;
  };
  overallAccuracy: number;
  slowestQuestionTypes: { type: string; avgTime: number }[];
  fastestQuestionTypes: { type: string; avgTime: number }[];
  // Section-specific pacing based on LSAT standards
  bySection: {
    logicalReasoning: SectionTimeStats;
    readingComprehension: SectionTimeStats;
  };
}

export interface ScoreTrend {
  date: string;
  score: number;
  testName: string;
}

export interface ScoreTrendAnalysis {
  trends: ScoreTrend[];
  currentScore: number;
  projectedScore: number;
  weeklyImprovement: number; // Points per week
  projectedTestDayScore: number;
  daysUntilTest: number;
  trend: "improving" | "stable" | "declining";
  confidenceLow: number;
  confidenceHigh: number;
}

export interface ErrorPattern {
  patternName: string;
  description: string;
  frequency: number; // Percentage of wrong answers with this pattern
  examples: string[];
  recommendation: string;
}

export interface FatigueAnalysis {
  firstHalfAccuracy: number;
  secondHalfAccuracy: number;
  performanceDrop: number; // Percentage points
  hasFatigueIssue: boolean; // >10% drop
  optimalSessionLength: number; // Questions before performance drops
  sectionBreakdown: {
    section: string;
    firstHalf: number;
    secondHalf: number;
    drop: number;
  }[];
}

// ============================================
// QUESTION TYPE PERFORMANCE
// ============================================

export function getDetailedQuestionTypeStats(progress: UserProgress): QuestionTypeStats[] {
  const stats: Map<string, {
    correct: number;
    total: number;
    totalTime: number;
    sectionType: "logical-reasoning" | "reading-comprehension";
  }> = new Map();

  // Aggregate from all completed tests
  for (const test of progress.completedTests) {
    for (const section of test.sections) {
      for (const q of section.questions) {
        const key = q.questionType;
        const existing = stats.get(key) || {
          correct: 0,
          total: 0,
          totalTime: 0,
          sectionType: section.type,
        };

        existing.total++;
        if (q.isCorrect) existing.correct++;
        existing.totalTime += q.timeSpent || 0;

        stats.set(key, existing);
      }
    }
  }

  // Convert to array with display names
  const result: QuestionTypeStats[] = [];

  for (const [type, data] of stats) {
    const isLR = data.sectionType === "logical-reasoning";
    const displayName = isLR
      ? LR_TYPE_DESCRIPTIONS[type as LogicalReasoningQuestionType]?.name || type
      : RC_TYPE_DESCRIPTIONS[type as ReadingComprehensionQuestionType]?.name || type;

    const accuracy = data.total > 0 ? (data.correct / data.total) * 100 : 0;
    const avgTime = data.total > 0 ? data.totalTime / data.total : 0;

    result.push({
      type,
      displayName,
      sectionType: data.sectionType,
      correct: data.correct,
      total: data.total,
      accuracy,
      avgTimeSeconds: avgTime,
      isWeakness: accuracy < 70 && data.total >= 3,
    });
  }

  // Sort by accuracy (weakest first)
  return result.sort((a, b) => a.accuracy - b.accuracy);
}

export function getTopWeaknesses(progress: UserProgress, limit: number = 3): QuestionTypeStats[] {
  const stats = getDetailedQuestionTypeStats(progress);
  return stats.filter(s => s.isWeakness).slice(0, limit);
}

export function getTopStrengths(progress: UserProgress, limit: number = 3): QuestionTypeStats[] {
  const stats = getDetailedQuestionTypeStats(progress);
  return stats
    .filter(s => s.total >= 3 && s.accuracy >= 80)
    .sort((a, b) => b.accuracy - a.accuracy)
    .slice(0, limit);
}

// ============================================
// TIME ANALYTICS
// ============================================

const RECOMMENDED_PACE_LR = 85; // 1:25 per question
const RECOMMENDED_PACE_RC = 100; // ~1:40 per question (includes reading time)

export function getTimeAnalytics(progress: UserProgress): TimeAnalytics {
  const allQuestions: { time: number; type: string; sectionType: string; isCorrect: boolean }[] = [];

  for (const test of progress.completedTests) {
    for (const section of test.sections) {
      for (const q of section.questions) {
        if (q.timeSpent && q.timeSpent > 0) {
          allQuestions.push({
            time: q.timeSpent,
            type: q.questionType,
            sectionType: section.type,
            isCorrect: q.isCorrect,
          });
        }
      }
    }
  }

  const emptyBucket: TimeBucketStats = { count: 0, correct: 0, accuracy: 0 };
  const emptySectionStats: SectionTimeStats = {
    avgTimePerQuestion: 0,
    targetPace: 0,
    questionsOnPace: 0,
    questionsSlightlyOver: 0,
    questionsOver: 0,
    totalQuestions: 0,
  };

  if (allQuestions.length === 0) {
    return {
      avgTimePerQuestion: 0,
      recommendedPace: RECOMMENDED_PACE_LR,
      questionsOverPace: 0,
      questionsRushed: 0,
      timeDistribution: {
        under30s: 0,
        thirtyTo60s: 0,
        sixtyTo90s: 0,
        ninetyTo120s: 0,
        over120s: 0,
      },
      accuracyByTime: {
        under30s: { ...emptyBucket },
        thirtyTo60s: { ...emptyBucket },
        sixtyTo90s: { ...emptyBucket },
        ninetyTo120s: { ...emptyBucket },
        over120s: { ...emptyBucket },
      },
      overallAccuracy: 0,
      slowestQuestionTypes: [],
      fastestQuestionTypes: [],
      bySection: {
        logicalReasoning: { ...emptySectionStats, targetPace: LSAT_PACE_LR },
        readingComprehension: { ...emptySectionStats, targetPace: LSAT_PACE_RC },
      },
    };
  }

  const totalTime = allQuestions.reduce((sum, q) => sum + q.time, 0);
  const avgTime = totalTime / allQuestions.length;

  // Count distribution and track accuracy per bucket
  const distribution = {
    under30s: 0,
    thirtyTo60s: 0,
    sixtyTo90s: 0,
    ninetyTo120s: 0,
    over120s: 0,
  };

  const accuracyBuckets = {
    under30s: { count: 0, correct: 0 },
    thirtyTo60s: { count: 0, correct: 0 },
    sixtyTo90s: { count: 0, correct: 0 },
    ninetyTo120s: { count: 0, correct: 0 },
    over120s: { count: 0, correct: 0 },
  };

  let overPace = 0;
  let rushed = 0;
  let totalCorrect = 0;

  for (const q of allQuestions) {
    if (q.isCorrect) totalCorrect++;

    if (q.time < 30) {
      distribution.under30s++;
      accuracyBuckets.under30s.count++;
      if (q.isCorrect) accuracyBuckets.under30s.correct++;
      rushed++;
    } else if (q.time < 60) {
      distribution.thirtyTo60s++;
      accuracyBuckets.thirtyTo60s.count++;
      if (q.isCorrect) accuracyBuckets.thirtyTo60s.correct++;
    } else if (q.time < 90) {
      distribution.sixtyTo90s++;
      accuracyBuckets.sixtyTo90s.count++;
      if (q.isCorrect) accuracyBuckets.sixtyTo90s.correct++;
    } else if (q.time < 120) {
      distribution.ninetyTo120s++;
      accuracyBuckets.ninetyTo120s.count++;
      if (q.isCorrect) accuracyBuckets.ninetyTo120s.correct++;
    } else {
      distribution.over120s++;
      accuracyBuckets.over120s.count++;
      if (q.isCorrect) accuracyBuckets.over120s.correct++;
      overPace++;
    }
  }

  // Calculate accuracy for each bucket
  const calcAccuracy = (bucket: { count: number; correct: number }): TimeBucketStats => ({
    count: bucket.count,
    correct: bucket.correct,
    accuracy: bucket.count > 0 ? Math.round((bucket.correct / bucket.count) * 100) : 0,
  });

  const accuracyByTime = {
    under30s: calcAccuracy(accuracyBuckets.under30s),
    thirtyTo60s: calcAccuracy(accuracyBuckets.thirtyTo60s),
    sixtyTo90s: calcAccuracy(accuracyBuckets.sixtyTo90s),
    ninetyTo120s: calcAccuracy(accuracyBuckets.ninetyTo120s),
    over120s: calcAccuracy(accuracyBuckets.over120s),
  };

  const overallAccuracy = allQuestions.length > 0
    ? Math.round((totalCorrect / allQuestions.length) * 100)
    : 0;

  // Calculate average time by question type
  const typeTimeTotals: Map<string, { total: number; count: number }> = new Map();
  for (const q of allQuestions) {
    const existing = typeTimeTotals.get(q.type) || { total: 0, count: 0 };
    existing.total += q.time;
    existing.count++;
    typeTimeTotals.set(q.type, existing);
  }

  const typeAvgTimes = Array.from(typeTimeTotals.entries())
    .filter(([_, data]) => data.count >= 2)
    .map(([type, data]) => ({
      type,
      avgTime: data.total / data.count,
    }))
    .sort((a, b) => b.avgTime - a.avgTime);

  // Calculate section-specific pacing stats based on LSAT standards
  const lrQuestions = allQuestions.filter(q => q.sectionType === "logical-reasoning");
  const rcQuestions = allQuestions.filter(q => q.sectionType === "reading-comprehension");

  const calculateSectionStats = (
    questions: typeof allQuestions,
    targetPace: number,
    amberThreshold: number
  ): SectionTimeStats => {
    if (questions.length === 0) {
      return {
        avgTimePerQuestion: 0,
        targetPace,
        questionsOnPace: 0,
        questionsSlightlyOver: 0,
        questionsOver: 0,
        totalQuestions: 0,
      };
    }

    const totalTime = questions.reduce((sum, q) => sum + q.time, 0);
    let onPace = 0;
    let slightlyOver = 0;
    let over = 0;

    for (const q of questions) {
      if (q.time <= targetPace) {
        onPace++;
      } else if (q.time <= amberThreshold) {
        slightlyOver++;
      } else {
        over++;
      }
    }

    return {
      avgTimePerQuestion: totalTime / questions.length,
      targetPace,
      questionsOnPace: onPace,
      questionsSlightlyOver: slightlyOver,
      questionsOver: over,
      totalQuestions: questions.length,
    };
  };

  const bySection = {
    logicalReasoning: calculateSectionStats(lrQuestions, LSAT_PACE_LR, LSAT_AMBER_THRESHOLD_LR),
    readingComprehension: calculateSectionStats(rcQuestions, LSAT_PACE_RC, LSAT_AMBER_THRESHOLD_RC),
  };

  return {
    avgTimePerQuestion: avgTime,
    recommendedPace: RECOMMENDED_PACE_LR,
    questionsOverPace: overPace,
    questionsRushed: rushed,
    timeDistribution: distribution,
    accuracyByTime,
    overallAccuracy,
    slowestQuestionTypes: typeAvgTimes.slice(0, 3),
    fastestQuestionTypes: typeAvgTimes.slice(-3).reverse(),
    bySection,
  };
}

// ============================================
// SCORE TREND ANALYSIS
// ============================================

export function getScoreTrendAnalysis(
  progress: UserProgress,
  targetTestDate?: Date
): ScoreTrendAnalysis {
  const tests = progress.completedTests
    .filter(t => t.scaledScore && t.scaledScore > 0)
    .sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime());

  if (tests.length === 0) {
    return {
      trends: [],
      currentScore: 120,
      projectedScore: 120,
      weeklyImprovement: 0,
      projectedTestDayScore: 120,
      daysUntilTest: 30,
      trend: "stable",
      confidenceLow: 120,
      confidenceHigh: 130,
    };
  }

  const trends: ScoreTrend[] = tests.map(t => ({
    date: new Date(t.completedAt).toISOString().split("T")[0],
    score: t.scaledScore,
    testName: t.testName || "Practice Test",
  }));

  // Current score is most recent
  const currentScore = tests[tests.length - 1].scaledScore;

  // Calculate weighted projected score (more recent = higher weight)
  const recentTests = tests.slice(-5);
  let totalWeight = 0;
  let weightedSum = 0;

  recentTests.forEach((test, i) => {
    const weight = Math.pow(1.5, i);
    weightedSum += test.scaledScore * weight;
    totalWeight += weight;
  });

  const projectedScore = Math.round(weightedSum / totalWeight);

  // Calculate weekly improvement
  let weeklyImprovement = 0;
  let trend: "improving" | "stable" | "declining" = "stable";

  if (tests.length >= 2) {
    const oldestDate = new Date(tests[0].completedAt);
    const newestDate = new Date(tests[tests.length - 1].completedAt);
    const weeksDiff = (newestDate.getTime() - oldestDate.getTime()) / (7 * 24 * 60 * 60 * 1000);

    if (weeksDiff > 0) {
      weeklyImprovement = (tests[tests.length - 1].scaledScore - tests[0].scaledScore) / weeksDiff;
    }

    // Determine trend from recent tests
    if (recentTests.length >= 3) {
      const firstHalf = recentTests.slice(0, Math.floor(recentTests.length / 2));
      const secondHalf = recentTests.slice(Math.floor(recentTests.length / 2));

      const firstAvg = firstHalf.reduce((sum, t) => sum + t.scaledScore, 0) / firstHalf.length;
      const secondAvg = secondHalf.reduce((sum, t) => sum + t.scaledScore, 0) / secondHalf.length;

      if (secondAvg - firstAvg > 2) trend = "improving";
      else if (firstAvg - secondAvg > 2) trend = "declining";
    }
  }

  // Calculate days until test (default 30 days)
  const daysUntilTest = targetTestDate
    ? Math.max(0, Math.ceil((targetTestDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000)))
    : 30;

  // Project test day score
  const weeksUntilTest = daysUntilTest / 7;
  const projectedTestDayScore = Math.min(180, Math.max(120,
    Math.round(projectedScore + weeklyImprovement * weeksUntilTest)
  ));

  // Calculate confidence interval
  const scores = tests.map(t => t.scaledScore);
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
  const variance = scores.reduce((sum, s) => sum + Math.pow(s - mean, 2), 0) / scores.length;
  const stdDev = Math.sqrt(variance);
  const confidenceRange = Math.min(10, Math.round(stdDev * 1.5));

  return {
    trends,
    currentScore,
    projectedScore,
    weeklyImprovement: Math.round(weeklyImprovement * 10) / 10,
    projectedTestDayScore,
    daysUntilTest,
    trend,
    confidenceLow: Math.max(120, projectedScore - confidenceRange),
    confidenceHigh: Math.min(180, projectedScore + confidenceRange),
  };
}

// ============================================
// ERROR PATTERN DETECTION
// ============================================

interface WrongAnswerAnalysis {
  questionType: string;
  selectedAnswer: string;
  correctAnswer: string;
  questionId: string;
}

export function detectErrorPatterns(progress: UserProgress): ErrorPattern[] {
  const wrongAnswers: WrongAnswerAnalysis[] = [];

  for (const test of progress.completedTests) {
    for (const section of test.sections) {
      for (const q of section.questions) {
        if (!q.isCorrect && q.selectedAnswer) {
          wrongAnswers.push({
            questionType: q.questionType,
            selectedAnswer: q.selectedAnswer,
            correctAnswer: q.correctAnswer,
            questionId: q.questionId,
          });
        }
      }
    }
  }

  if (wrongAnswers.length < 5) {
    return [];
  }

  const patterns: ErrorPattern[] = [];
  const totalWrong = wrongAnswers.length;

  // Pattern 1: Extreme answer preference
  // Check if user picks A or E more than expected when wrong
  const extremeAnswers = wrongAnswers.filter(
    w => w.selectedAnswer === "A" || w.selectedAnswer === "E"
  );
  const extremeRate = (extremeAnswers.length / totalWrong) * 100;

  if (extremeRate > 50) {
    patterns.push({
      patternName: "Extreme Answer Preference",
      description: `You chose the most extreme answers (A or E) in ${Math.round(extremeRate)}% of your wrong answers.`,
      frequency: Math.round(extremeRate),
      examples: ["Often picking the 'strongest' or 'weakest' option"],
      recommendation: "Extreme answers are often trap choices. Look for more moderate, nuanced options.",
    });
  }

  // Pattern 2: Consistent wrong answer type
  // E.g., always picking B when wrong
  const answerCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (const w of wrongAnswers) {
    if (w.selectedAnswer in answerCounts) {
      answerCounts[w.selectedAnswer as keyof typeof answerCounts]++;
    }
  }

  const mostCommonWrong = Object.entries(answerCounts).sort((a, b) => b[1] - a[1])[0];
  const mostCommonRate = (mostCommonWrong[1] / totalWrong) * 100;

  if (mostCommonRate > 35) {
    patterns.push({
      patternName: "Answer Position Bias",
      description: `You chose "${mostCommonWrong[0]}" in ${Math.round(mostCommonRate)}% of your wrong answers.`,
      frequency: Math.round(mostCommonRate),
      examples: [`Gravitating toward answer choice ${mostCommonWrong[0]}`],
      recommendation: `Be aware of your bias toward ${mostCommonWrong[0]}. Make sure you're evaluating each answer choice equally.`,
    });
  }

  // Pattern 3: Specific question type struggles
  const typeCounts: Record<string, { wrong: number; total: number }> = {};

  for (const test of progress.completedTests) {
    for (const section of test.sections) {
      for (const q of section.questions) {
        if (!typeCounts[q.questionType]) {
          typeCounts[q.questionType] = { wrong: 0, total: 0 };
        }
        typeCounts[q.questionType].total++;
        if (!q.isCorrect) {
          typeCounts[q.questionType].wrong++;
        }
      }
    }
  }

  // Find types with >50% error rate and at least 5 attempts
  const problematicTypes = Object.entries(typeCounts)
    .filter(([_, data]) => data.total >= 5 && (data.wrong / data.total) > 0.5)
    .map(([type, data]) => ({
      type,
      errorRate: (data.wrong / data.total) * 100,
    }))
    .sort((a, b) => b.errorRate - a.errorRate);

  if (problematicTypes.length > 0) {
    const topProblem = problematicTypes[0];
    patterns.push({
      patternName: "Question Type Weakness",
      description: `You miss ${Math.round(topProblem.errorRate)}% of "${topProblem.type.replace(/-/g, " ")}" questions.`,
      frequency: Math.round(topProblem.errorRate),
      examples: problematicTypes.slice(0, 3).map(p => `${p.type}: ${Math.round(p.errorRate)}% error rate`),
      recommendation: `Focus your study on ${topProblem.type.replace(/-/g, " ")} questions. Review the strategy for this question type.`,
    });
  }

  // Pattern 4: Second-guessing pattern
  // This would require tracking answer changes, which we don't have
  // Skip for now

  // Pattern 5: Near-miss pattern (picked answer next to correct one)
  const adjacentAnswers: Record<string, string[]> = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D"],
  };

  const nearMisses = wrongAnswers.filter(w => {
    const adjacent = adjacentAnswers[w.correctAnswer] || [];
    return adjacent.includes(w.selectedAnswer);
  });
  const nearMissRate = (nearMisses.length / totalWrong) * 100;

  if (nearMissRate > 40) {
    patterns.push({
      patternName: "Near-Miss Pattern",
      description: `${Math.round(nearMissRate)}% of your wrong answers were adjacent to the correct answer.`,
      frequency: Math.round(nearMissRate),
      examples: ["Often narrowing down to 2 choices but picking the wrong one"],
      recommendation: "You're good at eliminating obviously wrong answers. Focus on distinguishing between the final 2 contenders more carefully.",
    });
  }

  return patterns.sort((a, b) => b.frequency - a.frequency);
}

// ============================================
// FATIGUE ANALYSIS
// ============================================

export function analyzeFatigue(progress: UserProgress): FatigueAnalysis {
  const sectionData: {
    section: string;
    firstHalfCorrect: number;
    firstHalfTotal: number;
    secondHalfCorrect: number;
    secondHalfTotal: number;
  }[] = [];

  let overallFirstCorrect = 0;
  let overallFirstTotal = 0;
  let overallSecondCorrect = 0;
  let overallSecondTotal = 0;

  for (const test of progress.completedTests) {
    for (const section of test.sections) {
      const questions = section.questions;
      if (questions.length < 10) continue;

      const midpoint = Math.floor(questions.length / 2);
      const firstHalf = questions.slice(0, midpoint);
      const secondHalf = questions.slice(midpoint);

      const firstCorrect = firstHalf.filter(q => q.isCorrect).length;
      const secondCorrect = secondHalf.filter(q => q.isCorrect).length;

      // Aggregate by section type
      const existingSection = sectionData.find(s => s.section === section.type);
      if (existingSection) {
        existingSection.firstHalfCorrect += firstCorrect;
        existingSection.firstHalfTotal += firstHalf.length;
        existingSection.secondHalfCorrect += secondCorrect;
        existingSection.secondHalfTotal += secondHalf.length;
      } else {
        sectionData.push({
          section: section.type,
          firstHalfCorrect: firstCorrect,
          firstHalfTotal: firstHalf.length,
          secondHalfCorrect: secondCorrect,
          secondHalfTotal: secondHalf.length,
        });
      }

      overallFirstCorrect += firstCorrect;
      overallFirstTotal += firstHalf.length;
      overallSecondCorrect += secondCorrect;
      overallSecondTotal += secondHalf.length;
    }
  }

  const firstHalfAccuracy = overallFirstTotal > 0
    ? (overallFirstCorrect / overallFirstTotal) * 100
    : 0;
  const secondHalfAccuracy = overallSecondTotal > 0
    ? (overallSecondCorrect / overallSecondTotal) * 100
    : 0;
  const performanceDrop = firstHalfAccuracy - secondHalfAccuracy;

  const sectionBreakdown = sectionData.map(s => ({
    section: s.section,
    firstHalf: s.firstHalfTotal > 0 ? (s.firstHalfCorrect / s.firstHalfTotal) * 100 : 0,
    secondHalf: s.secondHalfTotal > 0 ? (s.secondHalfCorrect / s.secondHalfTotal) * 100 : 0,
    drop: s.firstHalfTotal > 0 && s.secondHalfTotal > 0
      ? (s.firstHalfCorrect / s.firstHalfTotal) * 100 - (s.secondHalfCorrect / s.secondHalfTotal) * 100
      : 0,
  }));

  // Estimate optimal session length (questions before accuracy drops significantly)
  // This is a simplified heuristic
  const optimalLength = performanceDrop > 10 ? 15 : performanceDrop > 5 ? 20 : 25;

  return {
    firstHalfAccuracy,
    secondHalfAccuracy,
    performanceDrop,
    hasFatigueIssue: performanceDrop > 10,
    optimalSessionLength: optimalLength,
    sectionBreakdown,
  };
}

// ============================================
// DIFFICULTY PROGRESSION ANALYTICS
// ============================================

export interface DifficultyStats {
  difficulty: "easy" | "medium" | "hard";
  correct: number;
  total: number;
  accuracy: number;
  avgTimeSeconds: number;
}

export interface DifficultyAnalytics {
  byDifficulty: DifficultyStats[];
  totalQuestions: number;
  overallPattern: "improving" | "consistent" | "struggling-with-hard";
}

export function getDifficultyAnalytics(progress: UserProgress): DifficultyAnalytics {
  const stats: Record<"easy" | "medium" | "hard", { correct: number; total: number; totalTime: number }> = {
    easy: { correct: 0, total: 0, totalTime: 0 },
    medium: { correct: 0, total: 0, totalTime: 0 },
    hard: { correct: 0, total: 0, totalTime: 0 },
  };

  // Aggregate from all completed tests
  for (const test of progress.completedTests) {
    for (const section of test.sections) {
      for (const q of section.questions) {
        const difficulty = (q as unknown as { difficulty?: "easy" | "medium" | "hard" }).difficulty;
        if (difficulty && stats[difficulty]) {
          stats[difficulty].total++;
          if (q.isCorrect) stats[difficulty].correct++;
          stats[difficulty].totalTime += q.timeSpent || 0;
        }
      }
    }
  }

  const byDifficulty: DifficultyStats[] = (["easy", "medium", "hard"] as const).map((difficulty) => {
    const data = stats[difficulty];
    return {
      difficulty,
      correct: data.correct,
      total: data.total,
      accuracy: data.total > 0 ? (data.correct / data.total) * 100 : 0,
      avgTimeSeconds: data.total > 0 ? data.totalTime / data.total : 0,
    };
  });

  const totalQuestions = byDifficulty.reduce((sum, d) => sum + d.total, 0);

  // Determine overall pattern
  const easyAcc = byDifficulty[0].accuracy;
  const mediumAcc = byDifficulty[1].accuracy;
  const hardAcc = byDifficulty[2].accuracy;

  let overallPattern: "improving" | "consistent" | "struggling-with-hard" = "consistent";

  if (totalQuestions >= 10) {
    // If accuracy drops significantly for hard questions
    if (easyAcc - hardAcc > 20 && hardAcc < 60) {
      overallPattern = "struggling-with-hard";
    }
    // If performance is relatively consistent across difficulties
    else if (Math.abs(easyAcc - hardAcc) < 15) {
      overallPattern = "consistent";
    }
    // If doing well across the board
    else if (easyAcc >= 70 && mediumAcc >= 60 && hardAcc >= 50) {
      overallPattern = "improving";
    }
  }

  return {
    byDifficulty,
    totalQuestions,
    overallPattern,
  };
}

// ============================================
// SUMMARY INSIGHTS
// ============================================

export interface AnalyticsSummary {
  totalQuestionsAnalyzed: number;
  totalTestsAnalyzed: number;
  overallAccuracy: number;
  topStrength: string | null;
  topWeakness: string | null;
  avgTimePerQuestion: number;
  hasFatigueIssue: boolean;
  topErrorPattern: string | null;
  scoreTrend: "improving" | "stable" | "declining";
  projectedScore: number;
}

export function getAnalyticsSummary(progress: UserProgress): AnalyticsSummary {
  const questionTypeStats = getDetailedQuestionTypeStats(progress);
  const timeAnalytics = getTimeAnalytics(progress);
  const scoreTrend = getScoreTrendAnalysis(progress);
  const fatigueAnalysis = analyzeFatigue(progress);
  const errorPatterns = detectErrorPatterns(progress);

  const strengths = questionTypeStats
    .filter(s => s.total >= 3 && s.accuracy >= 80)
    .sort((a, b) => b.accuracy - a.accuracy);

  const weaknesses = questionTypeStats.filter(s => s.isWeakness);

  return {
    totalQuestionsAnalyzed: progress.totalQuestionsAnswered,
    totalTestsAnalyzed: progress.completedTests.length,
    overallAccuracy: progress.totalQuestionsAnswered > 0
      ? (progress.totalCorrect / progress.totalQuestionsAnswered) * 100
      : 0,
    topStrength: strengths.length > 0 ? strengths[0].displayName : null,
    topWeakness: weaknesses.length > 0 ? weaknesses[0].displayName : null,
    avgTimePerQuestion: timeAnalytics.avgTimePerQuestion,
    hasFatigueIssue: fatigueAnalysis.hasFatigueIssue,
    topErrorPattern: errorPatterns.length > 0 ? errorPatterns[0].patternName : null,
    scoreTrend: scoreTrend.trend,
    projectedScore: scoreTrend.projectedScore,
  };
}
