// Admissions Calculator
// Calculates admission chances based on LSAT and GPA

import { LawSchool, T14_SCHOOLS } from "./law-school-data";

export type ChanceCategory = "reach" | "target" | "safety" | "unlikely";

export interface AdmissionChance {
  school: LawSchool;
  category: ChanceCategory;
  chancePercentage: number;
  lsatDeviation: number;    // Difference from median
  gpaDeviation: number;     // Difference from median
  notes: string[];
}

export interface AdmissionProfile {
  lsat: number;
  gpa: number;
  chances: AdmissionChance[];
}

// ============================================
// CALCULATION ALGORITHM
// ============================================

/**
 * Calculate admission chance for a single school
 * This uses a simplified model based on:
 * - How the applicant's LSAT compares to the school's 25th-75th percentile
 * - How the applicant's GPA compares to the school's 25th-75th percentile
 * - General acceptance rate of the school
 */
function calculateSchoolChance(
  school: LawSchool,
  lsat: number,
  gpa: number
): AdmissionChance {
  const notes: string[] = [];

  // Calculate LSAT position relative to school's range
  const lsatLow = school.lsatRange[0];
  const lsatHigh = school.lsatRange[1];
  const lsatMedian = school.medianLSAT;
  const lsatDeviation = lsat - lsatMedian;

  // Calculate GPA position relative to school's range
  const gpaLow = school.gpaRange[0];
  const gpaHigh = school.gpaRange[1];
  const gpaMedian = school.medianGPA;
  const gpaDeviation = gpa - gpaMedian;

  // LSAT score (weight: 60%)
  let lsatScore = 0;
  if (lsat >= lsatHigh) {
    lsatScore = 100;
    notes.push("LSAT above 75th percentile");
  } else if (lsat >= lsatMedian) {
    lsatScore = 70 + ((lsat - lsatMedian) / (lsatHigh - lsatMedian)) * 30;
    notes.push("LSAT at or above median");
  } else if (lsat >= lsatLow) {
    lsatScore = 40 + ((lsat - lsatLow) / (lsatMedian - lsatLow)) * 30;
    notes.push("LSAT in range (25th-50th percentile)");
  } else if (lsat >= lsatLow - 2) {
    lsatScore = 20 + ((lsat - (lsatLow - 2)) / 2) * 20;
    notes.push("LSAT slightly below 25th percentile");
  } else {
    lsatScore = Math.max(0, (lsat - 140) / (lsatLow - 142) * 20);
    notes.push("LSAT significantly below range");
  }

  // GPA score (weight: 40%)
  let gpaScore = 0;
  if (gpa >= gpaHigh) {
    gpaScore = 100;
    notes.push("GPA above 75th percentile");
  } else if (gpa >= gpaMedian) {
    gpaScore = 70 + ((gpa - gpaMedian) / (gpaHigh - gpaMedian)) * 30;
  } else if (gpa >= gpaLow) {
    gpaScore = 40 + ((gpa - gpaLow) / (gpaMedian - gpaLow)) * 30;
    notes.push("GPA in range");
  } else if (gpa >= gpaLow - 0.1) {
    gpaScore = 20 + ((gpa - (gpaLow - 0.1)) / 0.1) * 20;
    notes.push("GPA slightly below 25th percentile");
  } else {
    gpaScore = Math.max(0, (gpa - 3.0) / (gpaLow - 3.0) * 20);
    notes.push("GPA below range - consider strong softs");
  }

  // Weighted score
  const combinedScore = lsatScore * 0.6 + gpaScore * 0.4;

  // Adjust for acceptance rate (more selective = harder)
  const selectivityFactor = 1 - (school.acceptanceRate / 100) * 0.3;
  const adjustedScore = combinedScore * selectivityFactor;

  // Convert to percentage (0-100)
  const chancePercentage = Math.min(95, Math.max(2, adjustedScore));

  // Determine category
  let category: ChanceCategory;
  if (chancePercentage >= 70) {
    category = "safety";
  } else if (chancePercentage >= 45) {
    category = "target";
  } else if (chancePercentage >= 20) {
    category = "reach";
  } else {
    category = "unlikely";
  }

  return {
    school,
    category,
    chancePercentage: Math.round(chancePercentage),
    lsatDeviation,
    gpaDeviation: Math.round(gpaDeviation * 100) / 100,
    notes,
  };
}

/**
 * Calculate admission chances for all T14 schools
 */
export function calculateAdmissionProfile(
  lsat: number,
  gpa: number
): AdmissionProfile {
  const chances = T14_SCHOOLS.map((school) =>
    calculateSchoolChance(school, lsat, gpa)
  );

  // Sort by chance percentage descending
  chances.sort((a, b) => b.chancePercentage - a.chancePercentage);

  return {
    lsat,
    gpa,
    chances,
  };
}

/**
 * Get schools by category
 */
export function getSchoolsByCategory(
  profile: AdmissionProfile,
  category: ChanceCategory
): AdmissionChance[] {
  return profile.chances.filter((c) => c.category === category);
}

/**
 * Get overall summary of admission chances
 */
export function getAdmissionSummary(profile: AdmissionProfile): {
  safetyCount: number;
  targetCount: number;
  reachCount: number;
  unlikelyCount: number;
  topSchool: AdmissionChance | null;
  recommendation: string;
} {
  const safetyCount = profile.chances.filter((c) => c.category === "safety").length;
  const targetCount = profile.chances.filter((c) => c.category === "target").length;
  const reachCount = profile.chances.filter((c) => c.category === "reach").length;
  const unlikelyCount = profile.chances.filter((c) => c.category === "unlikely").length;

  const topSchool = profile.chances[0] || null;

  let recommendation: string;
  if (safetyCount >= 3) {
    recommendation = "You have strong chances at multiple T14 schools. Consider focusing on schools that best fit your career goals.";
  } else if (targetCount >= 3) {
    recommendation = "You're competitive at several T14 schools. A strong application with good essays and letters could tip the scales.";
  } else if (reachCount >= 5) {
    recommendation = "T14 schools are reaches for you. Consider strengthening your LSAT score or applying to a broader range of schools.";
  } else {
    recommendation = "T14 schools may be challenging. Focus on maximizing your LSAT score and consider schools outside the T14.";
  }

  return {
    safetyCount,
    targetCount,
    reachCount,
    unlikelyCount,
    topSchool,
    recommendation,
  };
}

// ============================================
// CATEGORY DISPLAY HELPERS
// ============================================

export const CATEGORY_COLORS: Record<ChanceCategory, { bg: string; text: string; border: string }> = {
  safety: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-500 dark:border-green-400",
  },
  target: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-500 dark:border-blue-400",
  },
  reach: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-500 dark:border-amber-400",
  },
  unlikely: {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-500 dark:border-red-400",
  },
};

export const CATEGORY_NAMES: Record<ChanceCategory, string> = {
  safety: "Safety",
  target: "Target",
  reach: "Reach",
  unlikely: "Unlikely",
};

export const CATEGORY_DESCRIPTIONS: Record<ChanceCategory, string> = {
  safety: "Good chance of admission with your current stats",
  target: "Competitive - a strong application could get you in",
  reach: "Possible but challenging - aim high on your application",
  unlikely: "Very competitive - consider strengthening your profile",
};

// ============================================
// APPLICATION TIMELINE
// ============================================

export interface TimelineEvent {
  month: string;
  title: string;
  description: string;
  isImportant?: boolean;
}

export function getApplicationTimeline(testDate: Date): TimelineEvent[] {
  const testYear = testDate.getFullYear();
  const testMonth = testDate.getMonth();

  // Assuming they want to start law school the following fall
  const applicationYear = testMonth >= 6 ? testYear : testYear - 1;

  return [
    {
      month: "June - August",
      title: "LSAT Preparation",
      description: "Focus on intensive LSAT study. Take practice tests regularly.",
      isImportant: true,
    },
    {
      month: "September",
      title: "Take LSAT & Start Personal Statement",
      description: "Complete your LSAT and begin drafting your personal statement.",
      isImportant: true,
    },
    {
      month: "October",
      title: "Request Recommendations",
      description: "Ask professors/employers for letters of recommendation. Give them at least 4-6 weeks.",
    },
    {
      month: "November",
      title: "Finalize Applications",
      description: "Complete all application materials. Most schools open applications in September.",
      isImportant: true,
    },
    {
      month: "November - January",
      title: "Submit Applications",
      description: "Apply early for the best chances. Many schools use rolling admissions.",
      isImportant: true,
    },
    {
      month: "December - March",
      title: "Wait for Decisions",
      description: "Most decisions come between December and April. Prepare for interviews if applicable.",
    },
    {
      month: "April",
      title: "Make Your Decision",
      description: "Compare offers, visit schools, and make your deposit by the April 15 deadline.",
      isImportant: true,
    },
    {
      month: "August",
      title: "Start Law School",
      description: "Begin your 1L year!",
      isImportant: true,
    },
  ];
}

// ============================================
// LOCAL STORAGE
// ============================================

const ADMISSIONS_STORAGE_KEY = "lsatprep-admissions";

export interface SavedProfile {
  lsat: number;
  gpa: number;
  targetSchools: string[];
  savedAt: Date;
}

export function saveAdmissionsProfile(profile: SavedProfile, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${ADMISSIONS_STORAGE_KEY}_${userId}` : ADMISSIONS_STORAGE_KEY;
  localStorage.setItem(key, JSON.stringify(profile));
}

export function loadAdmissionsProfile(userId?: string): SavedProfile | null {
  if (typeof window === "undefined") return null;

  const key = userId ? `${ADMISSIONS_STORAGE_KEY}_${userId}` : ADMISSIONS_STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return null;

  const parsed = JSON.parse(stored);
  return {
    ...parsed,
    savedAt: new Date(parsed.savedAt),
  };
}
