// Central export point for all LSAT questions
// This file combines questions from all sources into unified exports

import { Question } from "../lsat-types";
import { lrQuestionsSet1 } from "./lr-questions-1";
import { lrQuestionsSet2 } from "./lr-questions-2";
import { lrQuestionsSet3 } from "./lr-questions-3";
import { lrQuestionsSet4 } from "./lr-questions-4";
import { lrQuestionsSet5 } from "./lr-questions-5";
import { lrQuestionsSet6 } from "./lr-questions-6";
import { lrQuestionsSet7 } from "./lr-questions-7";
import { lrQuestionsSet8 } from "./lr-questions-8";
import { lrQuestionsSet9 } from "./lr-questions-9";
import { lrQuestionsSet10 } from "./lr-questions-10";
import { lrQuestionsSet11 } from "./lr-questions-11";
import { lrQuestionsSet12 } from "./lr-questions-12";
import { lrQuestionsSet13 } from "./lr-questions-13";
import { lrQuestionsSet14 } from "./lr-questions-14";
import { lrQuestionsSet15 } from "./lr-questions-15";
import { lrQuestionsSet16 } from "./lr-questions-16";
import { rcQuestionsSet1 } from "./rc-questions-1";
import { rcQuestionsSet2 } from "./rc-questions-2";
import { rcQuestionsSet3 } from "./rc-questions-3";

// Combine all Logical Reasoning questions
export const allLRQuestions: Question[] = [
  ...lrQuestionsSet1,
  ...lrQuestionsSet2,
  ...lrQuestionsSet3,
  ...lrQuestionsSet4,
  ...lrQuestionsSet5,
  ...lrQuestionsSet6,
  ...lrQuestionsSet7,
  ...lrQuestionsSet8,
  ...lrQuestionsSet9,
  ...lrQuestionsSet10,
  ...lrQuestionsSet11,
  ...lrQuestionsSet12,
  ...lrQuestionsSet13,
  ...lrQuestionsSet14,
  ...lrQuestionsSet15,
  ...lrQuestionsSet16,
];

// Combine all Reading Comprehension questions
export const allRCQuestions: Question[] = [
  ...rcQuestionsSet1,
  ...rcQuestionsSet2,
  ...rcQuestionsSet3,
];

// Export combined totals
export const questionBankStats = {
  totalLR: allLRQuestions.length,
  totalRC: allRCQuestions.length,
  total: allLRQuestions.length + allRCQuestions.length,
};

// Re-export individual sets for flexibility
export {
  lrQuestionsSet1,
  lrQuestionsSet2,
  lrQuestionsSet3,
  lrQuestionsSet4,
  lrQuestionsSet5,
  lrQuestionsSet6,
  lrQuestionsSet7,
  lrQuestionsSet8,
  lrQuestionsSet9,
  lrQuestionsSet10,
  lrQuestionsSet11,
  lrQuestionsSet12,
  lrQuestionsSet13,
  lrQuestionsSet14,
  lrQuestionsSet15,
  lrQuestionsSet16,
  rcQuestionsSet1,
  rcQuestionsSet2,
  rcQuestionsSet3,
};
