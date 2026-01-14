// LSAT Test Structure Types
// Based on official LSAC format (August 2024+)

// ============================================
// LOGICAL REASONING QUESTION TYPES
// ============================================
// These are the standard question types that appear on the LSAT
// Each type tests a specific reasoning skill

export type LogicalReasoningQuestionType =
  | "strengthen"           // Which most strengthens the argument?
  | "weaken"               // Which most weakens the argument?
  | "necessary-assumption" // Which is an assumption required by the argument?
  | "sufficient-assumption"// Which, if assumed, allows the conclusion to be properly drawn?
  | "flaw"                 // The reasoning is flawed because it...
  | "parallel-reasoning"   // Which argument is most similar in pattern?
  | "parallel-flaw"        // Which contains a flaw most similar to the one above?
  | "method-of-reasoning"  // The argument proceeds by...
  | "role"                 // The claim plays which role in the argument?
  | "point-at-issue"       // About which do the speakers disagree?
  | "inference"            // Which must be true based on the statements?
  | "most-strongly-supported" // Which is most strongly supported by the statements?
  | "resolve-paradox"      // Which most helps to explain the discrepancy?
  | "principle-identify"   // Which principle underlies the argument?
  | "principle-apply"      // Which conforms to the principle stated above?
  | "evaluate"             // Which would be most useful to evaluate the argument?
  | "main-conclusion"      // Which is the main conclusion?
  | "complete-the-argument"; // Which most logically completes the argument?

// ============================================
// READING COMPREHENSION QUESTION TYPES
// ============================================

export type ReadingComprehensionQuestionType =
  | "main-point"           // Main idea or primary purpose
  | "author-attitude"      // Author's tone or attitude
  | "explicit-detail"      // Information explicitly stated
  | "inference"            // What can be inferred from the passage?
  | "function"             // Why does the author mention X?
  | "vocabulary"           // Meaning of word/phrase in context
  | "organization"         // How is the passage structured?
  | "application"          // Applying info to new context
  | "analogy"              // Which is most analogous to X?
  | "strengthen-weaken"    // Which strengthens/weakens the author's claim?
  | "author-agreement"     // Which would the author most likely agree with?
  | "comparative";         // Questions about relationships between passages

// ============================================
// QUESTION STEM PATTERNS
// ============================================
// These are the exact phrasings used on the LSAT

export const QUESTION_STEM_PATTERNS: Record<LogicalReasoningQuestionType, string[]> = {
  "strengthen": [
    "Which one of the following, if true, most strengthens the argument?",
    "Which one of the following, if true, most supports the argument above?",
    "Which one of the following, if true, provides the most support for the argument?",
  ],
  "weaken": [
    "Which one of the following, if true, most weakens the argument?",
    "Which one of the following, if true, most seriously undermines the argument?",
    "Which one of the following, if true, casts the most doubt on the argument above?",
  ],
  "necessary-assumption": [
    "Which one of the following is an assumption required by the argument?",
    "The argument depends on which one of the following assumptions?",
    "Which one of the following is an assumption on which the argument relies?",
    "The argument assumes which one of the following?",
  ],
  "sufficient-assumption": [
    "Which one of the following, if assumed, allows the conclusion to be properly drawn?",
    "The conclusion follows logically if which one of the following is assumed?",
    "Which one of the following, if assumed, enables the argument's conclusion to be properly inferred?",
  ],
  "flaw": [
    "The reasoning in the argument is flawed because the argument",
    "Which one of the following most accurately describes a flaw in the argument?",
    "The argument is vulnerable to criticism on the grounds that it",
    "A flaw in the argument is that it",
    "The reasoning above is flawed in that it",
  ],
  "parallel-reasoning": [
    "Which one of the following arguments is most similar in its pattern of reasoning?",
    "The pattern of reasoning in the argument above is most similar to that in which one of the following?",
    "Which one of the following is most similar in its logical features to the argument above?",
  ],
  "parallel-flaw": [
    "Which one of the following contains a flaw that is most similar to the one in the argument above?",
    "The flawed pattern of reasoning in which one of the following is most similar to that in the argument above?",
  ],
  "method-of-reasoning": [
    "The argument proceeds by",
    "Which one of the following most accurately describes the method of reasoning used in the argument?",
    "The argument employs which one of the following reasoning techniques?",
  ],
  "role": [
    "The claim that [X] plays which one of the following roles in the argument?",
    "Which one of the following most accurately describes the role played in the argument by the claim that [X]?",
  ],
  "point-at-issue": [
    "The main point at issue between [A] and [B] is",
    "[A] and [B] disagree about whether",
    "Which one of the following is a point of disagreement between [A] and [B]?",
  ],
  "inference": [
    "Which one of the following can be properly inferred from the statements above?",
    "If the statements above are true, which one of the following must also be true?",
    "Which one of the following follows logically from the statements above?",
  ],
  "most-strongly-supported": [
    "Which one of the following is most strongly supported by the information above?",
    "The statements above, if true, most strongly support which one of the following?",
    "Which one of the following can be most reasonably concluded from the information above?",
  ],
  "resolve-paradox": [
    "Which one of the following, if true, most helps to resolve the apparent discrepancy described above?",
    "Which one of the following, if true, most helps to explain the surprising finding described above?",
    "Which one of the following, if true, does most to reconcile the apparent conflict described above?",
  ],
  "principle-identify": [
    "Which one of the following principles, if valid, most helps to justify the reasoning above?",
    "The argument is based on which one of the following principles?",
  ],
  "principle-apply": [
    "Which one of the following most closely conforms to the principle stated above?",
    "Which one of the following judgments conforms most closely to the principle stated above?",
  ],
  "evaluate": [
    "Which one of the following would be most useful to know in order to evaluate the argument?",
    "The answer to which one of the following questions would be most helpful in evaluating the argument?",
  ],
  "main-conclusion": [
    "Which one of the following most accurately expresses the main conclusion of the argument?",
    "The main point of the argument is that",
    "Which one of the following most accurately expresses the conclusion of the argument?",
  ],
  "complete-the-argument": [
    "Which one of the following most logically completes the argument?",
    "Which one of the following best completes the passage?",
  ],
};

export const RC_QUESTION_STEM_PATTERNS: Record<ReadingComprehensionQuestionType, string[]> = {
  "main-point": [
    "Which one of the following most accurately expresses the main point of the passage?",
    "The primary purpose of the passage is to",
    "Which one of the following most accurately states the main idea of the passage?",
  ],
  "author-attitude": [
    "The author's attitude toward [X] can best be described as",
    "The passage suggests that the author would be most likely to agree with which one of the following?",
    "The author's tone in discussing [X] is best described as",
  ],
  "explicit-detail": [
    "According to the passage, which one of the following is true of [X]?",
    "The passage states that [X]",
    "Which one of the following is mentioned in the passage as [X]?",
  ],
  "inference": [
    "It can be inferred from the passage that",
    "The passage most strongly suggests which one of the following?",
    "Based on the passage, which one of the following can most reasonably be concluded?",
  ],
  "function": [
    "The author mentions [X] primarily in order to",
    "The author's discussion of [X] functions primarily to",
    "Which one of the following best describes the function of the [X] paragraph?",
  ],
  "vocabulary": [
    "The phrase '[X]' as used in the passage most nearly means",
    "In context, the word '[X]' most nearly means",
    "As used in the passage, '[X]' refers to",
  ],
  "organization": [
    "Which one of the following most accurately describes the organization of the passage?",
    "Which one of the following best describes the structure of the passage?",
  ],
  "application": [
    "Given the information in the passage, the author would be most likely to agree with which one of the following?",
    "Based on the passage, which one of the following situations is most analogous to [X]?",
  ],
  "analogy": [
    "Which one of the following is most analogous to [X] as described in the passage?",
    "The relationship between [X] and [Y] is most similar to the relationship between",
  ],
  "strengthen-weaken": [
    "Which one of the following, if true, would most strengthen the author's argument?",
    "Which one of the following, if true, would most weaken the author's claim that [X]?",
  ],
  "author-agreement": [
    "The author of the passage would be most likely to agree with which one of the following?",
    "Which one of the following views would the author of the passage most likely hold?",
  ],
  "comparative": [
    "The authors of the two passages would be most likely to disagree over",
    "Which one of the following is discussed in passage A but not in passage B?",
    "Both passages are concerned with answering which one of the following questions?",
  ],
};

// ============================================
// SECTION AND TEST STRUCTURES
// ============================================

export type SectionType = "logical-reasoning" | "reading-comprehension";

export interface Question {
  id: string;
  type: LogicalReasoningQuestionType | ReadingComprehensionQuestionType;
  sectionType: SectionType;
  stimulus: string;           // The passage or argument
  questionStem: string;       // The actual question being asked
  answerChoices: AnswerChoice[];
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  explanation: string;        // Detailed explanation of why correct answer is correct
  wrongAnswerExplanations?: Record<string, string>; // Why each wrong answer is wrong (optional for legacy)
  difficulty: "easy" | "medium" | "hard";
  passageId?: string;         // For RC questions linked to a passage
  source?: string;            // Where question came from (for tracking)

  // Enhanced explanation fields for better learning (all optional for backward compatibility)
  commonMistakes?: string[];  // Top 3-5 common errors students make on this question
  whyChosen?: Record<string, string>; // Map of answer letter → why students choose it (psychology, not just logic)
  strategyTip?: string;       // Strategic approach specific to this question instance
  thinkingSteps?: string[];   // Step-by-step walkthrough of correct reasoning process
  keyTerm?: string;           // Core LSAT concept being tested (e.g., "Correlation vs. Causation")
}

export interface AnswerChoice {
  letter: "A" | "B" | "C" | "D" | "E";
  text: string;
}

export interface ReadingPassage {
  id: string;
  content: string;
  title?: string;
  topic: "humanities" | "social-sciences" | "natural-sciences" | "law";
  isComparative: boolean;     // True if this is a Comparative Reading passage pair
  passageB?: string;          // Second passage for Comparative Reading
  questions: Question[];
}

export interface Section {
  id: string;
  type: SectionType;
  questions: Question[];
  passages?: ReadingPassage[]; // For RC sections
  timeLimit: number;          // In seconds (2100 = 35 minutes)
  isScored: boolean;          // False for experimental section
}

export interface Test {
  id: string;
  name: string;
  sections: Section[];
  createdAt: Date;
  totalTime: number;          // Total time in seconds
}

// ============================================
// USER PROGRESS AND SCORING
// ============================================

export interface UserAnswer {
  questionId: string;
  selectedAnswer: "A" | "B" | "C" | "D" | "E" | null;
  timeSpent: number;          // Time spent on this question in seconds
  flagged: boolean;           // User flagged for review
}

export interface SectionResult {
  sectionId: string;
  answers: UserAnswer[];
  rawScore: number;           // Number correct
  totalQuestions: number;
  timeUsed: number;           // Time used in seconds
  completed: boolean;
}

export interface TestResult {
  testId: string;
  userId: string;
  sections: SectionResult[];
  scaledScore: number;        // 120-180
  percentile: number;
  completedAt: Date;
  totalTime: number;
}

// ============================================
// SCORING CONVERSION
// ============================================
// Approximate raw-to-scaled score conversion
// Based on typical LSAT scoring curves

export function calculateScaledScore(rawScore: number, totalQuestions: number): number {
  // Current LSAT has approximately 75-76 scored questions
  // 2 LR sections (~25-26 questions each) + 1 RC section (~27 questions)
  const percentage = rawScore / totalQuestions;

  // Accurate LSAT score conversion based on actual scoring curves
  // Real LSAT percentages (approximate based on historical data):
  // 180: 98-100% correct (74-76 out of 76)
  // 170: 89-92% correct (68-70 out of 76)
  // 160: 74-77% correct (56-59 out of 76)
  // 150: 55-58% correct (42-44 out of 76)
  // 140: 38-42% correct (29-32 out of 76)
  // 130: 22-26% correct (17-20 out of 76)
  // 120: 0-10% correct (0-8 out of 76)

  if (percentage >= 0.98) return 180;
  if (percentage >= 0.96) return 179;
  if (percentage >= 0.94) return 177 + Math.round((percentage - 0.94) * 50);
  if (percentage >= 0.92) return 175 + Math.round((percentage - 0.92) * 100);
  if (percentage >= 0.89) return 170 + Math.round((percentage - 0.89) * 166.7);
  if (percentage >= 0.84) return 167 + Math.round((percentage - 0.84) * 60);
  if (percentage >= 0.79) return 164 + Math.round((percentage - 0.79) * 60);
  if (percentage >= 0.74) return 160 + Math.round((percentage - 0.74) * 80);
  if (percentage >= 0.67) return 156 + Math.round((percentage - 0.67) * 57.1);
  if (percentage >= 0.58) return 151 + Math.round((percentage - 0.58) * 55.6);
  if (percentage >= 0.50) return 147 + Math.round((percentage - 0.50) * 50);
  if (percentage >= 0.42) return 142 + Math.round((percentage - 0.42) * 62.5);
  if (percentage >= 0.34) return 137 + Math.round((percentage - 0.34) * 62.5);
  if (percentage >= 0.26) return 132 + Math.round((percentage - 0.26) * 62.5);
  if (percentage >= 0.18) return 127 + Math.round((percentage - 0.18) * 62.5);
  if (percentage >= 0.10) return 123 + Math.round((percentage - 0.10) * 50);
  if (percentage >= 0.05) return 121 + Math.round((percentage - 0.05) * 40);
  return 120;
}

// Approximate percentile based on scaled score
export function getPercentile(scaledScore: number): number {
  if (scaledScore >= 180) return 99.9;
  if (scaledScore >= 175) return 99;
  if (scaledScore >= 170) return 97;
  if (scaledScore >= 165) return 92;
  if (scaledScore >= 160) return 80;
  if (scaledScore >= 155) return 63;
  if (scaledScore >= 150) return 44;
  if (scaledScore >= 145) return 26;
  if (scaledScore >= 140) return 13;
  if (scaledScore >= 135) return 5;
  if (scaledScore >= 130) return 2;
  return 1;
}

// ============================================
// QUESTION TYPE DESCRIPTIONS
// ============================================
// For helping users understand what each type tests

export const LR_TYPE_DESCRIPTIONS: Record<LogicalReasoningQuestionType, { name: string; description: string; tips: string[] }> = {
  "strengthen": {
    name: "Strengthen",
    description: "Find the answer that provides the most additional support for the argument's conclusion.",
    tips: [
      "Identify the conclusion and the gap in reasoning",
      "The correct answer will make the conclusion more likely to be true",
      "Look for answers that address assumptions the argument relies on",
    ],
  },
  "weaken": {
    name: "Weaken",
    description: "Find the answer that most undermines the argument's conclusion.",
    tips: [
      "Identify the conclusion and the evidence",
      "The correct answer will make the conclusion less likely to be true",
      "Look for answers that attack unstated assumptions",
    ],
  },
  "necessary-assumption": {
    name: "Necessary Assumption",
    description: "Find the assumption that MUST be true for the argument to work.",
    tips: [
      "Use the negation test: if negating an answer destroys the argument, it's necessary",
      "The correct answer fills a gap between evidence and conclusion",
      "Be wary of answers that are too strong - they may be sufficient but not necessary",
    ],
  },
  "sufficient-assumption": {
    name: "Sufficient Assumption",
    description: "Find the assumption that, if true, would guarantee the conclusion.",
    tips: [
      "The correct answer will logically connect the premises to the conclusion",
      "This answer is often stronger than necessary assumptions",
      "Think: 'If I add this premise, does the conclusion follow with certainty?'",
    ],
  },
  "flaw": {
    name: "Flaw",
    description: "Identify the logical error in the argument's reasoning.",
    tips: [
      "Know common flaw types: ad hominem, circular reasoning, false dichotomy, etc.",
      "The correct answer describes HOW the reasoning fails, not just THAT it fails",
      "Match the abstract description to the specific argument",
    ],
  },
  "parallel-reasoning": {
    name: "Parallel Reasoning",
    description: "Find the argument with the same logical structure.",
    tips: [
      "Focus on the abstract structure, not the subject matter",
      "Match the type of evidence and conclusion (conditional, causal, etc.)",
      "Check if conclusions are the same type (definitely true, probably true, etc.)",
    ],
  },
  "parallel-flaw": {
    name: "Parallel Flaw",
    description: "Find the argument that makes the same logical error.",
    tips: [
      "First identify the flaw in the original argument",
      "Then find an argument that makes the same type of error",
      "The subject matter will be different, but the reasoning error will be the same",
    ],
  },
  "method-of-reasoning": {
    name: "Method of Reasoning",
    description: "Describe how the argument proceeds.",
    tips: [
      "Focus on the structure: does it use analogy, counterexample, elimination?",
      "The correct answer accurately describes the argumentative technique",
      "Be precise about what each part of the argument is doing",
    ],
  },
  "role": {
    name: "Role",
    description: "Identify what role a specific claim plays in the argument.",
    tips: [
      "Is the claim the conclusion, a premise, background info, or a counterpoint?",
      "Trace how the claim relates to other parts of the argument",
      "The correct answer accurately describes the claim's function",
    ],
  },
  "point-at-issue": {
    name: "Point at Issue",
    description: "Find what the two speakers explicitly disagree about.",
    tips: [
      "Both speakers must express a clear opinion on the correct answer",
      "Their opinions must be in direct conflict",
      "Avoid answers where only one speaker has expressed a view",
    ],
  },
  "inference": {
    name: "Inference (Must Be True)",
    description: "Find the statement that must be true based on the passage.",
    tips: [
      "The correct answer is fully supported by the passage",
      "Be conservative - the answer must follow necessarily",
      "Avoid answers that go beyond what is stated or implied",
    ],
  },
  "most-strongly-supported": {
    name: "Most Strongly Supported",
    description: "Find the statement that receives the most support from the passage.",
    tips: [
      "The standard is lower than 'must be true' - look for strong support",
      "The correct answer should be a reasonable inference",
      "Compare the strength of support for each answer",
    ],
  },
  "resolve-paradox": {
    name: "Resolve the Paradox",
    description: "Find the answer that explains the seemingly contradictory facts.",
    tips: [
      "Identify the two facts that seem to be in tension",
      "The correct answer shows how both facts can be true simultaneously",
      "Look for an answer that provides new information bridging the gap",
    ],
  },
  "principle-identify": {
    name: "Principle (Identify)",
    description: "Find the general principle that underlies the specific argument.",
    tips: [
      "The principle will be more general than the specific situation",
      "It should justify the reasoning used in the argument",
      "The principle, if valid, would support similar conclusions in similar cases",
    ],
  },
  "principle-apply": {
    name: "Principle (Apply)",
    description: "Find the situation that conforms to the stated principle.",
    tips: [
      "Understand the principle's conditions and requirements",
      "The correct answer will satisfy all conditions of the principle",
      "Apply the principle like a rule to each answer choice",
    ],
  },
  "evaluate": {
    name: "Evaluate the Argument",
    description: "Find the question whose answer would help assess the argument.",
    tips: [
      "The answer should be relevant to the argument's key assumption",
      "Different answers to the question should affect how strong the argument is",
      "The question tests whether the assumption holds",
    ],
  },
  "main-conclusion": {
    name: "Main Conclusion",
    description: "Identify the main point the argument is trying to establish.",
    tips: [
      "The conclusion is what the evidence is meant to prove",
      "Look for conclusion indicators: therefore, thus, hence, so",
      "Other claims should support this one, not the other way around",
    ],
  },
  "complete-the-argument": {
    name: "Complete the Argument",
    description: "Find the statement that best completes the passage's reasoning.",
    tips: [
      "Understand where the argument is going based on context",
      "The correct answer should follow logically from what comes before",
      "It often serves as the conclusion to the argument",
    ],
  },
};

export const RC_TYPE_DESCRIPTIONS: Record<ReadingComprehensionQuestionType, { name: string; description: string }> = {
  "main-point": {
    name: "Main Point/Primary Purpose",
    description: "Identify the central claim or goal of the passage.",
  },
  "author-attitude": {
    name: "Author's Attitude",
    description: "Determine the author's tone or perspective on the subject.",
  },
  "explicit-detail": {
    name: "Explicit Detail",
    description: "Find information directly stated in the passage.",
  },
  "inference": {
    name: "Inference",
    description: "Determine what can be reasonably concluded from the passage.",
  },
  "function": {
    name: "Function",
    description: "Explain why the author includes a particular element.",
  },
  "vocabulary": {
    name: "Vocabulary in Context",
    description: "Determine the meaning of a word or phrase as used in the passage.",
  },
  "organization": {
    name: "Organization/Structure",
    description: "Describe how the passage is organized.",
  },
  "application": {
    name: "Application",
    description: "Apply ideas from the passage to new situations.",
  },
  "analogy": {
    name: "Analogy",
    description: "Find a situation similar to one described in the passage.",
  },
  "strengthen-weaken": {
    name: "Strengthen/Weaken",
    description: "Find what would support or undermine the author's argument.",
  },
  "author-agreement": {
    name: "Author Agreement",
    description: "Determine what the author would likely agree or disagree with.",
  },
  "comparative": {
    name: "Comparative Reading",
    description: "Analyze relationships between two passages.",
  },
};
