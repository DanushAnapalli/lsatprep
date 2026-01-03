// Goal Tracking & Score Prediction System

import { UserProgress, getPerformanceByQuestionType } from "./user-progress";
import { SectionType, LogicalReasoningQuestionType, ReadingComprehensionQuestionType } from "./lsat-types";

// ============================================
// TYPES
// ============================================

export interface UserGoal {
  targetScore: number;
  targetDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Milestone {
  score: number;
  label: string;
  description: string;
  achieved: boolean;
  achievedAt?: Date;
}

export interface ScoreProjection {
  currentScore: number;
  projectedScore: number;
  confidenceRange: { low: number; high: number };
  trend: "improving" | "stable" | "declining";
  recentTests: number;
  daysToGoal?: number;
}

export interface ImprovementArea {
  questionType: string;
  sectionType: SectionType;
  displayName: string;
  currentAccuracy: number;
  targetAccuracy: number;
  questionsAttempted: number;
  additionalCorrectNeeded: number;
  priority: "high" | "medium" | "low";
  recommendation: string;
}

export interface GoalProgress {
  goal: UserGoal;
  currentScore: number;
  pointsToGo: number;
  percentComplete: number;
  projection: ScoreProjection;
  milestones: Milestone[];
  improvementAreas: ImprovementArea[];
  estimatedDaysToGoal?: number;
  onTrack: boolean;
}

// ============================================
// CONSTANTS
// ============================================

// LSAT score distribution and percentiles
const SCORE_PERCENTILES: Record<number, number> = {
  180: 99.9, 179: 99.9, 178: 99.8, 177: 99.6, 176: 99.3,
  175: 99.0, 174: 98.5, 173: 97.8, 172: 97.0, 171: 96.0,
  170: 94.5, 169: 92.8, 168: 90.8, 167: 88.5, 166: 85.8,
  165: 82.8, 164: 79.5, 163: 76.0, 162: 72.3, 161: 68.5,
  160: 64.5, 159: 60.5, 158: 56.3, 157: 52.0, 156: 47.8,
  155: 43.5, 154: 39.3, 153: 35.3, 152: 31.3, 151: 27.5,
  150: 24.0, 149: 20.8, 148: 17.8, 147: 15.0, 146: 12.5,
  145: 10.3, 144: 8.3, 143: 6.5, 142: 5.0, 141: 3.8,
  140: 2.8, 139: 2.0, 138: 1.5, 137: 1.0, 136: 0.8,
  135: 0.5, 134: 0.3, 133: 0.2, 132: 0.1, 131: 0.1,
  130: 0.1, 129: 0.1, 128: 0.1, 127: 0.1, 126: 0.1,
  125: 0.1, 124: 0.1, 123: 0.1, 122: 0.1, 121: 0.1, 120: 0.1,
};

// Question type display names
const QUESTION_TYPE_NAMES: Record<string, string> = {
  // Logical Reasoning
  "strengthen": "Strengthen",
  "weaken": "Weaken",
  "necessary-assumption": "Necessary Assumption",
  "sufficient-assumption": "Sufficient Assumption",
  "flaw": "Flaw",
  "parallel-reasoning": "Parallel Reasoning",
  "parallel-flaw": "Parallel Flaw",
  "method-of-reasoning": "Method of Reasoning",
  "role": "Role of Statement",
  "point-at-issue": "Point at Issue",
  "inference": "Inference",
  "most-strongly-supported": "Most Strongly Supported",
  "resolve-paradox": "Resolve Paradox",
  "principle-identify": "Identify Principle",
  "principle-apply": "Apply Principle",
  "evaluate": "Evaluate Argument",
  "main-conclusion": "Main Conclusion",
  "complete-the-argument": "Complete the Argument",
  // Reading Comprehension
  "main-point": "Main Point",
  "author-attitude": "Author's Attitude",
  "explicit-detail": "Explicit Detail",
  "function": "Function",
  "vocabulary": "Vocabulary in Context",
  "organization": "Organization",
  "application": "Application",
  "analogy": "Analogy",
  "strengthen-weaken": "Strengthen/Weaken",
  "author-agreement": "Author Agreement",
  "comparative": "Comparative Reading",
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getPercentile(score: number): number {
  return SCORE_PERCENTILES[score] || (score > 180 ? 99.9 : 0.1);
}

export function getQuestionTypeName(type: string): string {
  return QUESTION_TYPE_NAMES[type] || type.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

// Generate milestone checkpoints
export function generateMilestones(currentScore: number, targetScore: number): Milestone[] {
  const milestones: Milestone[] = [];
  const range = targetScore - currentScore;

  if (range <= 0) return milestones;

  // Create milestones at meaningful intervals
  const intervals = [
    { offset: Math.ceil(range * 0.25), label: "First Steps", description: "25% of the way to your goal" },
    { offset: Math.ceil(range * 0.5), label: "Halfway There", description: "50% of the way to your goal" },
    { offset: Math.ceil(range * 0.75), label: "Almost There", description: "75% of the way to your goal" },
    { offset: range, label: "Goal Reached!", description: "You've hit your target score" },
  ];

  for (const interval of intervals) {
    const milestoneScore = currentScore + interval.offset;
    if (milestoneScore <= 180) {
      milestones.push({
        score: milestoneScore,
        label: interval.label,
        description: interval.description,
        achieved: false,
      });
    }
  }

  return milestones;
}

// ============================================
// SCORE PREDICTION
// ============================================

export function calculateProjectedScore(progress: UserProgress): ScoreProjection {
  const tests = progress.completedTests;

  if (tests.length === 0) {
    return {
      currentScore: 0,
      projectedScore: 0,
      confidenceRange: { low: 120, high: 180 },
      trend: "stable",
      recentTests: 0,
    };
  }

  // Get recent tests (last 5)
  const recentTests = tests.slice(-5);
  const allScores = tests.map(t => t.scaledScore);
  const recentScores = recentTests.map(t => t.scaledScore);

  // Calculate weighted average (recent tests weighted more heavily)
  let weightedSum = 0;
  let weightTotal = 0;

  for (let i = 0; i < recentScores.length; i++) {
    const weight = Math.pow(1.5, i); // Exponential weighting
    weightedSum += recentScores[i] * weight;
    weightTotal += weight;
  }

  const projectedScore = Math.round(weightedSum / weightTotal);

  // Calculate trend
  let trend: "improving" | "stable" | "declining" = "stable";
  if (recentScores.length >= 3) {
    const firstHalf = recentScores.slice(0, Math.ceil(recentScores.length / 2));
    const secondHalf = recentScores.slice(Math.ceil(recentScores.length / 2));

    const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;

    if (secondAvg > firstAvg + 2) trend = "improving";
    else if (secondAvg < firstAvg - 2) trend = "declining";
  }

  // Calculate confidence range based on variance
  const variance = allScores.reduce((sum, score) => {
    return sum + Math.pow(score - projectedScore, 2);
  }, 0) / allScores.length;

  const stdDev = Math.sqrt(variance);
  const confidence = Math.min(stdDev * 1.5, 10); // Cap at +/- 10 points

  return {
    currentScore: progress.highestScore || recentScores[recentScores.length - 1],
    projectedScore,
    confidenceRange: {
      low: Math.max(120, projectedScore - Math.ceil(confidence)),
      high: Math.min(180, projectedScore + Math.ceil(confidence)),
    },
    trend,
    recentTests: recentTests.length,
  };
}

// ============================================
// IMPROVEMENT ANALYSIS
// ============================================

export function calculateImprovementsNeeded(
  progress: UserProgress,
  targetScore: number
): ImprovementArea[] {
  const currentScore = progress.highestScore || progress.averageScore || 0;
  const pointsNeeded = targetScore - currentScore;

  if (pointsNeeded <= 0) return [];

  const typePerformance = getPerformanceByQuestionType(progress);
  const improvements: ImprovementArea[] = [];

  // Convert object to entries and filter for weak areas
  Object.entries(typePerformance).forEach(([questionType, stats]) => {
    if (stats.total < 2) return; // Need at least 2 attempts

    const currentAccuracy = stats.percentage;

    // Determine target accuracy (aim for 80%+ on weak areas, 90%+ on medium)
    let targetAccuracy: number;
    let priority: "high" | "medium" | "low";

    if (currentAccuracy < 50) {
      targetAccuracy = 70;
      priority = "high";
    } else if (currentAccuracy < 70) {
      targetAccuracy = 85;
      priority = "high";
    } else if (currentAccuracy < 80) {
      targetAccuracy = 90;
      priority = "medium";
    } else if (currentAccuracy < 90) {
      targetAccuracy = 95;
      priority = "low";
    } else {
      return; // Already performing well
    }

    // Calculate additional correct needed
    const currentCorrect = stats.correct;
    const total = stats.total;
    const neededCorrect = Math.ceil((targetAccuracy / 100) * total);
    const additionalCorrectNeeded = Math.max(0, neededCorrect - currentCorrect);

    // Determine section type from question type
    const lrTypes: string[] = [
      "strengthen", "weaken", "necessary-assumption", "sufficient-assumption",
      "flaw", "parallel-reasoning", "parallel-flaw", "method-of-reasoning",
      "role", "point-at-issue", "inference", "most-strongly-supported",
      "resolve-paradox", "principle-identify", "principle-apply", "evaluate",
      "main-conclusion", "complete-the-argument"
    ];

    const sectionType: SectionType = lrTypes.includes(questionType)
      ? "logical-reasoning"
      : "reading-comprehension";

    // Generate recommendation
    let recommendation: string;
    if (currentAccuracy < 50) {
      recommendation = `Review fundamentals of ${getQuestionTypeName(questionType)} questions. Focus on understanding the question type pattern.`;
    } else if (currentAccuracy < 70) {
      recommendation = `Practice more ${getQuestionTypeName(questionType)} questions. Pay attention to common trap answers.`;
    } else {
      recommendation = `Fine-tune your approach to ${getQuestionTypeName(questionType)} questions. Review your mistakes for patterns.`;
    }

    improvements.push({
      questionType,
      sectionType,
      displayName: getQuestionTypeName(questionType),
      currentAccuracy,
      targetAccuracy,
      questionsAttempted: total,
      additionalCorrectNeeded,
      priority,
      recommendation,
    });
  });

  // Sort by priority and accuracy (lowest first)
  improvements.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return a.currentAccuracy - b.currentAccuracy;
  });

  return improvements;
}

// ============================================
// GOAL PROGRESS
// ============================================

export function calculateGoalProgress(
  progress: UserProgress,
  goal: UserGoal
): GoalProgress {
  const projection = calculateProjectedScore(progress);
  const currentScore = projection.currentScore || progress.averageScore || 120;
  const pointsToGo = Math.max(0, goal.targetScore - currentScore);

  // Calculate percent complete using LSAT minimum (120) as baseline
  // This gives accurate progress for any starting score
  const LSAT_MIN = 120;
  const totalRange = goal.targetScore - LSAT_MIN; // e.g., 170 - 120 = 50 points possible
  const achieved = currentScore - LSAT_MIN; // e.g., 130 - 120 = 10 points achieved
  const percentComplete = totalRange > 0
    ? Math.min(100, Math.max(0, Math.round((achieved / totalRange) * 100)))
    : (currentScore >= goal.targetScore ? 100 : 0);

  // Generate and update milestones
  const milestones = generateMilestones(LSAT_MIN, goal.targetScore);
  milestones.forEach(m => {
    if (currentScore >= m.score) {
      m.achieved = true;
      m.achievedAt = new Date(); // In real app, track actual achievement date
    }
  });

  // Get improvement areas
  const improvementAreas = calculateImprovementsNeeded(progress, goal.targetScore);

  // Estimate days to goal based on trend
  let estimatedDaysToGoal: number | undefined;
  if (progress.completedTests.length >= 3 && projection.trend === "improving") {
    // Calculate average improvement per week
    const tests = progress.completedTests.slice(-6);
    if (tests.length >= 2) {
      const firstScore = tests[0].scaledScore;
      const lastScore = tests[tests.length - 1].scaledScore;
      const daysBetween = Math.max(1,
        (new Date(tests[tests.length - 1].completedAt).getTime() -
         new Date(tests[0].completedAt).getTime()) / (1000 * 60 * 60 * 24)
      );
      const improvementRate = (lastScore - firstScore) / daysBetween;

      if (improvementRate > 0) {
        estimatedDaysToGoal = Math.ceil(pointsToGo / improvementRate);
      }
    }
  }

  // Determine if on track
  const onTrack = projection.trend !== "declining" &&
    (percentComplete >= 50 || projection.projectedScore >= goal.targetScore - 3);

  return {
    goal,
    currentScore,
    pointsToGo,
    percentComplete,
    projection,
    milestones,
    improvementAreas,
    estimatedDaysToGoal,
    onTrack,
  };
}

// ============================================
// LOCAL STORAGE
// ============================================

const GOAL_STORAGE_KEY = "lsatprep-user-goal";

export function saveUserGoal(goal: UserGoal, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${GOAL_STORAGE_KEY}_${userId}` : GOAL_STORAGE_KEY;
  const goalData = {
    ...goal,
    targetDate: goal.targetDate?.toISOString(),
    createdAt: goal.createdAt.toISOString(),
    updatedAt: goal.updatedAt.toISOString(),
  };
  localStorage.setItem(key, JSON.stringify(goalData));

  // Sync to Firestore in background
  if (userId) {
    import("./firebase").then(({ saveGoalToFirestore }) => {
      saveGoalToFirestore(userId, {
        targetScore: goal.targetScore,
        targetDate: goal.targetDate?.toISOString(),
        createdAt: goal.createdAt.toISOString(),
        updatedAt: goal.updatedAt.toISOString(),
      });
    });
  }
}

export function loadUserGoal(userId?: string): UserGoal | null {
  if (typeof window === "undefined") return null;

  const key = userId ? `${GOAL_STORAGE_KEY}_${userId}` : GOAL_STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);
    return {
      ...parsed,
      targetDate: parsed.targetDate ? new Date(parsed.targetDate) : undefined,
      createdAt: new Date(parsed.createdAt),
      updatedAt: new Date(parsed.updatedAt),
    };
  } catch {
    return null;
  }
}

export function clearUserGoal(userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${GOAL_STORAGE_KEY}_${userId}` : GOAL_STORAGE_KEY;
  localStorage.removeItem(key);
}

// Sync goal from Firestore on login
export async function syncGoalFromFirestore(userId: string): Promise<UserGoal | null> {
  if (typeof window === "undefined" || !userId) return null;

  try {
    const { loadGoalFromFirestore } = await import("./firebase");
    const cloudGoal = await loadGoalFromFirestore(userId);

    if (!cloudGoal) return null;

    const goal: UserGoal = {
      targetScore: cloudGoal.targetScore,
      targetDate: cloudGoal.targetDate ? new Date(cloudGoal.targetDate) : undefined,
      createdAt: new Date(cloudGoal.createdAt),
      updatedAt: new Date(cloudGoal.updatedAt),
    };

    // Compare with localStorage - use the one that was updated more recently
    const localGoal = loadUserGoal(userId);

    if (!localGoal) {
      // No local goal, use cloud
      const key = `${GOAL_STORAGE_KEY}_${userId}`;
      localStorage.setItem(key, JSON.stringify({
        ...goal,
        targetDate: goal.targetDate?.toISOString(),
        createdAt: goal.createdAt.toISOString(),
        updatedAt: goal.updatedAt.toISOString(),
      }));
      return goal;
    }

    // Use whichever was updated more recently
    if (goal.updatedAt > localGoal.updatedAt) {
      const key = `${GOAL_STORAGE_KEY}_${userId}`;
      localStorage.setItem(key, JSON.stringify({
        ...goal,
        targetDate: goal.targetDate?.toISOString(),
        createdAt: goal.createdAt.toISOString(),
        updatedAt: goal.updatedAt.toISOString(),
      }));
      return goal;
    } else if (localGoal.updatedAt > goal.updatedAt) {
      // Local is newer, sync to cloud
      import("./firebase").then(({ saveGoalToFirestore }) => {
        saveGoalToFirestore(userId, {
          targetScore: localGoal.targetScore,
          targetDate: localGoal.targetDate?.toISOString(),
          createdAt: localGoal.createdAt.toISOString(),
          updatedAt: localGoal.updatedAt.toISOString(),
        });
      });
      return localGoal;
    }

    return localGoal;
  } catch {
    return null;
  }
}
