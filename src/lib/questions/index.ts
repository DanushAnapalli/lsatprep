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
import { lrQuestionsSet17 } from "./lr-questions-17";
import { lrQuestionsSet18 } from "./lr-questions-18";
import { lrQuestionsSet19 } from "./lr-questions-19";
import { lrQuestionsSet20 } from "./lr-questions-20";
import { lrQuestionsSet21 } from "./lr-questions-21";
import { lrQuestionsSet22 } from "./lr-questions-22";
import { lrQuestionsSet23 } from "./lr-questions-23";
import { lrQuestionsSet24 } from "./lr-questions-24";
import { lrQuestionsSet25 } from "./lr-questions-25";
import { lrQuestionsSet26 } from "./lr-questions-26";
import { lrQuestionsSet27 } from "./lr-questions-27";
import { lrQuestionsSet28 } from "./lr-questions-28";
import { lrQuestionsSet29 } from "./lr-questions-29";
import { lrQuestionsSet30 } from "./lr-questions-30";
import { lrQuestionsSet31 } from "./lr-questions-31";
import { lrQuestionsSet32 } from "./lr-questions-32";
import { lrQuestionsSet33 } from "./lr-questions-33";
import { lrQuestionsSet34 } from "./lr-questions-34";
import { lrQuestionsSet35 } from "./lr-questions-35";
import { lrQuestionsSet36 } from "./lr-questions-36";
import { lrQuestionsSet37 } from "./lr-questions-37";
import { lrQuestionsSet38 } from "./lr-questions-38";
import { lrQuestionsSet39 } from "./lr-questions-39";
import { lrQuestionsSet40 } from "./lr-questions-40";
import { lrQuestionsSet41 } from "./lr-questions-41";
import { lrQuestionsSet42 } from "./lr-questions-42";
import { lrQuestionsSet43 } from "./lr-questions-43";
import { lrQuestionsSet44 } from "./lr-questions-44";
import { lrQuestionsSet45 } from "./lr-questions-45";
import { lrQuestionsSet46 } from "./lr-questions-46";
import { lrQuestionsSet47 } from "./lr-questions-47";
import { lrQuestionsSet48 } from "./lr-questions-48";
import { lrQuestionsSet49 } from "./lr-questions-49";
import { lrQuestionsSet50 } from "./lr-questions-50";
import { lrQuestionsSet51 } from "./lr-questions-51";
import { lrQuestionsSet52 } from "./lr-questions-52";
import { lrQuestionsSet53 } from "./lr-questions-53";
import { lrQuestionsSet54 } from "./lr-questions-54";
import { lrQuestionsSet55 } from "./lr-questions-55";
import { lrQuestionsSet56 } from "./lr-questions-56";
import { lrQuestionsSet57 } from "./lr-questions-57";
import { lrQuestionsSet58 } from "./lr-questions-58";
import { lrQuestionsSet59 } from "./lr-questions-59";
import { lrQuestionsSet60 } from "./lr-questions-60";
import { lrQuestionsSet61 } from "./lr-questions-61";
import { lrQuestionsSet62 } from "./lr-questions-62";
import { lrQuestionsSet63 } from "./lr-questions-63";
import { lrQuestionsSet64 } from "./lr-questions-64";
import { lrQuestionsSet65 } from "./lr-questions-65";
import { lrQuestionsSet66 } from "./lr-questions-66";
import { lrQuestionsSet67 } from "./lr-questions-67";
import { lrQuestionsSet68 } from "./lr-questions-68";
import { lrQuestionsSet69 } from "./lr-questions-69";
import { lrQuestionsSet70 } from "./lr-questions-70";
import { rcQuestionsSet1 } from "./rc-questions-1";
import { rcQuestionsSet2 } from "./rc-questions-2";
import { rcQuestionsSet3 } from "./rc-questions-3";
import { rcQuestionsSet4 } from "./rc-questions-4";
import { rcQuestionsSet5 } from "./rc-questions-5";
import { rcQuestionsSet6 } from "./rc-questions-6";
import { rcQuestionsSet7 } from "./rc-questions-7";
import { rcQuestionsSet8 } from "./rc-questions-8";
import { rcQuestionsSet9 } from "./rc-questions-9";
import { rcQuestionsSet10 } from "./rc-questions-10";
import { rcQuestionsSet11 } from "./rc-questions-11";
import { rcQuestionsSet12 } from "./rc-questions-12";
import { rcQuestionsSet13 } from "./rc-questions-13";
import { rcQuestionsSet14 } from "./rc-questions-14";
import { rcQuestionsSet15 } from "./rc-questions-15";
import { rcQuestionsSet16 } from "./rc-questions-16";
import { rcQuestionsSet17 } from "./rc-questions-17";
import { rcQuestionsSet18 } from "./rc-questions-18";
import { rcQuestionsSet19 } from "./rc-questions-19";
import { rcQuestionsSet20 } from "./rc-questions-20";
import { rcQuestionsSet21 } from "./rc-questions-21";
import { rcQuestionsSet22 } from "./rc-questions-22";
import { rcQuestionsSet23 } from "./rc-questions-23";
import { rcQuestionsSet24 } from "./rc-questions-24";
import { rcQuestionsSet25 } from "./rc-questions-25";
import { rcQuestionsSet26 } from "./rc-questions-26";
import { rcQuestionsSet27 } from "./rc-questions-27";
import { rcQuestionsSet28 } from "./rc-questions-28";
import { rcQuestionsSet29 } from "./rc-questions-29";
import { rcQuestionsSet30 } from "./rc-questions-30";
import { rcQuestionsSet31 } from "./rc-questions-31";
import { rcQuestionsSet32 } from "./rc-questions-32";
import { rcQuestionsSet33 } from "./rc-questions-33";
import { rcQuestionsSet34 } from "./rc-questions-34";
import { rcQuestionsSet35 } from "./rc-questions-35";
import { rcQuestionsSet36 } from "./rc-questions-36";
import { rcQuestionsSet37 } from "./rc-questions-37";
import { rcQuestionsSet38 } from "./rc-questions-38";
import { rcQuestionsSet39 } from "./rc-questions-39";
import { rcQuestionsSet40 } from "./rc-questions-40";
import { rcQuestionsSet41 } from "./rc-questions-41";
import { rcQuestionsSet42 } from "./rc-questions-42";
import { rcQuestionsSet43 } from "./rc-questions-43";
import { rcQuestionsSet44 } from "./rc-questions-44";
import { rcQuestionsSet45 } from "./rc-questions-45";
import { rcQuestionsSet46 } from "./rc-questions-46";
import { rcQuestionsSet47 } from "./rc-questions-47";

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
  ...lrQuestionsSet17,
  ...lrQuestionsSet18,
  ...lrQuestionsSet19,
  ...lrQuestionsSet20,
  ...lrQuestionsSet21,
  ...lrQuestionsSet22,
  ...lrQuestionsSet23,
  ...lrQuestionsSet24,
  ...lrQuestionsSet25,
  ...lrQuestionsSet26,
  ...lrQuestionsSet27,
  ...lrQuestionsSet28,
  ...lrQuestionsSet29,
  ...lrQuestionsSet30,
  ...lrQuestionsSet31,
  ...lrQuestionsSet32,
  ...lrQuestionsSet33,
  ...lrQuestionsSet34,
  ...lrQuestionsSet35,
  ...lrQuestionsSet36,
  ...lrQuestionsSet37,
  ...lrQuestionsSet38,
  ...lrQuestionsSet39,
  ...lrQuestionsSet40,
  ...lrQuestionsSet41,
  ...lrQuestionsSet42,
  ...lrQuestionsSet43,
  ...lrQuestionsSet44,
  ...lrQuestionsSet45,
  ...lrQuestionsSet46,
  ...lrQuestionsSet47,
  ...lrQuestionsSet48,
  ...lrQuestionsSet49,
  ...lrQuestionsSet50,
  ...lrQuestionsSet51,
  ...lrQuestionsSet52,
  ...lrQuestionsSet53,
  ...lrQuestionsSet54,
  ...lrQuestionsSet55,
  ...lrQuestionsSet56,
  ...lrQuestionsSet57,
  ...lrQuestionsSet58,
  ...lrQuestionsSet59,
  ...lrQuestionsSet60,
  ...lrQuestionsSet61,
  ...lrQuestionsSet62,
  ...lrQuestionsSet63,
  ...lrQuestionsSet64,
  ...lrQuestionsSet65,
  ...lrQuestionsSet66,
  ...lrQuestionsSet67,
  ...lrQuestionsSet68,
  ...lrQuestionsSet69,
  ...lrQuestionsSet70,
];

// Combine all Reading Comprehension questions
export const allRCQuestions: Question[] = [
  ...rcQuestionsSet1,
  ...rcQuestionsSet2,
  ...rcQuestionsSet3,
  ...rcQuestionsSet4,
  ...rcQuestionsSet5,
  ...rcQuestionsSet6,
  ...rcQuestionsSet7,
  ...rcQuestionsSet8,
  ...rcQuestionsSet9,
  ...rcQuestionsSet10,
  ...rcQuestionsSet11,
  ...rcQuestionsSet12,
  ...rcQuestionsSet13,
  ...rcQuestionsSet14,
  ...rcQuestionsSet15,
  ...rcQuestionsSet16,
  ...rcQuestionsSet17,
  ...rcQuestionsSet18,
  ...rcQuestionsSet19,
  ...rcQuestionsSet20,
  ...rcQuestionsSet21,
  ...rcQuestionsSet22,
  ...rcQuestionsSet23,
  ...rcQuestionsSet24,
  ...rcQuestionsSet25,
  ...rcQuestionsSet26,
  ...rcQuestionsSet27,
  ...rcQuestionsSet28,
  ...rcQuestionsSet29,
  ...rcQuestionsSet30,
  ...rcQuestionsSet31,
  ...rcQuestionsSet32,
  ...rcQuestionsSet33,
  ...rcQuestionsSet34,
  ...rcQuestionsSet35,
  ...rcQuestionsSet36,
  ...rcQuestionsSet37,
  ...rcQuestionsSet38,
  ...rcQuestionsSet39,
  ...rcQuestionsSet40,
  ...rcQuestionsSet41,
  ...rcQuestionsSet42,
  ...rcQuestionsSet43,
  ...rcQuestionsSet44,
  ...rcQuestionsSet45,
  ...rcQuestionsSet46,
  ...rcQuestionsSet47,
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
  lrQuestionsSet17,
  lrQuestionsSet18,
  lrQuestionsSet19,
  lrQuestionsSet20,
  lrQuestionsSet21,
  lrQuestionsSet22,
  lrQuestionsSet23,
  lrQuestionsSet24,
  lrQuestionsSet25,
  lrQuestionsSet26,
  lrQuestionsSet27,
  lrQuestionsSet28,
  lrQuestionsSet29,
  lrQuestionsSet30,
  lrQuestionsSet31,
  lrQuestionsSet32,
  lrQuestionsSet33,
  lrQuestionsSet34,
  lrQuestionsSet35,
  lrQuestionsSet36,
  lrQuestionsSet37,
  lrQuestionsSet38,
  lrQuestionsSet39,
  lrQuestionsSet40,
  lrQuestionsSet41,
  lrQuestionsSet42,
  lrQuestionsSet43,
  lrQuestionsSet44,
  lrQuestionsSet45,
  lrQuestionsSet46,
  lrQuestionsSet47,
  lrQuestionsSet48,
  lrQuestionsSet49,
  lrQuestionsSet50,
  lrQuestionsSet51,
  lrQuestionsSet52,
  lrQuestionsSet53,
  lrQuestionsSet54,
  lrQuestionsSet55,
  lrQuestionsSet56,
  lrQuestionsSet57,
  lrQuestionsSet58,
  lrQuestionsSet59,
  lrQuestionsSet60,
  lrQuestionsSet61,
  lrQuestionsSet62,
  lrQuestionsSet63,
  lrQuestionsSet64,
  lrQuestionsSet65,
  lrQuestionsSet66,
  lrQuestionsSet67,
  lrQuestionsSet68,
  lrQuestionsSet69,
  lrQuestionsSet70,
  rcQuestionsSet1,
  rcQuestionsSet2,
  rcQuestionsSet3,
  rcQuestionsSet4,
  rcQuestionsSet5,
  rcQuestionsSet6,
  rcQuestionsSet7,
  rcQuestionsSet8,
  rcQuestionsSet9,
  rcQuestionsSet10,
  rcQuestionsSet11,
  rcQuestionsSet12,
  rcQuestionsSet13,
  rcQuestionsSet14,
  rcQuestionsSet15,
  rcQuestionsSet16,
  rcQuestionsSet17,
  rcQuestionsSet18,
  rcQuestionsSet19,
  rcQuestionsSet20,
  rcQuestionsSet21,
  rcQuestionsSet22,
  rcQuestionsSet23,
  rcQuestionsSet24,
  rcQuestionsSet25,
  rcQuestionsSet26,
  rcQuestionsSet27,
  rcQuestionsSet28,
  rcQuestionsSet29,
  rcQuestionsSet30,
  rcQuestionsSet31,
  rcQuestionsSet32,
  rcQuestionsSet33,
  rcQuestionsSet34,
  rcQuestionsSet35,
  rcQuestionsSet36,
  rcQuestionsSet37,
  rcQuestionsSet38,
  rcQuestionsSet39,
  rcQuestionsSet40,
  rcQuestionsSet41,
  rcQuestionsSet42,
  rcQuestionsSet43,
  rcQuestionsSet44,
  rcQuestionsSet45,
  rcQuestionsSet46,
  rcQuestionsSet47,
};
