// Logic Games (Analytical Reasoning) Types

export type GameType = "linear" | "grouping" | "matching" | "hybrid";

export type RuleType =
  | "fixed-position"      // X is in position 3
  | "relative-order"      // X comes before Y
  | "adjacent"            // X and Y are adjacent
  | "not-adjacent"        // X and Y are not adjacent
  | "same-group"          // X and Y are in the same group
  | "different-group"     // X and Y are in different groups
  | "conditional"         // If X, then Y
  | "biconditional"       // X if and only if Y
  | "either-or"           // Either X or Y (or both)
  | "exactly-one"         // Exactly one of X or Y
  | "block"               // X, Y, Z are consecutive (in some order)
  | "not-both"            // Not both X and Y
  | "at-most"             // At most N of a type
  | "at-least"            // At least N of a type
  | "range"               // X is between positions N and M
  | "custom";             // Free-form rule

export interface GameRule {
  id: string;
  type: RuleType;
  text: string;            // Human-readable rule text
  entities: string[];      // Entities involved in this rule
  positions?: number[];    // Positions involved (if applicable)
  groups?: string[];       // Groups involved (if applicable)
  isContrapositiveOf?: string; // ID of rule this is contrapositive of
}

export interface GameEntity {
  id: string;
  name: string;
  shortName: string;       // Single letter or abbreviation
  color?: string;          // For visual distinction
}

export interface GameGroup {
  id: string;
  name: string;
  minSize?: number;
  maxSize?: number;
  positions?: number;      // Number of ordered positions in group
}

export interface GameSetup {
  id: string;
  type: GameType;
  title: string;
  scenario: string;        // The passage/scenario description
  entities: GameEntity[];
  groups?: GameGroup[];    // For grouping/matching games
  positions?: number;      // For linear games
  rules: GameRule[];
  difficulty: "easy" | "medium" | "hard";
}

export interface GameQuestion {
  id: string;
  gameId: string;
  questionNumber: number;
  type: "acceptability" | "must-be-true" | "could-be-true" | "must-be-false" | "could-be-false" | "completely-determined" | "substitution" | "rule-change";
  stem: string;
  localRule?: string;      // Additional constraint for this question only
  answerChoices: GameAnswerChoice[];
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  explanation: string;
}

export interface GameAnswerChoice {
  letter: "A" | "B" | "C" | "D" | "E";
  text: string;
}

export interface LogicGame {
  setup: GameSetup;
  questions: GameQuestion[];
}

// ============================================
// BOARD STATE TYPES
// ============================================

export interface LinearBoardState {
  type: "linear";
  positions: (string | null)[];  // Entity ID at each position
}

export interface GroupingBoardState {
  type: "grouping";
  groups: Record<string, string[]>; // Group ID -> Entity IDs
}

export interface MatchingBoardState {
  type: "matching";
  matches: Record<string, Record<string, boolean>>; // Row entity -> Column entity -> matched
}

export type BoardState = LinearBoardState | GroupingBoardState | MatchingBoardState;

// ============================================
// GAME SESSION TYPES
// ============================================

export interface GameSession {
  id: string;
  gameId: string;
  startedAt: Date;
  completedAt?: Date;
  currentQuestionIndex: number;
  answers: Map<string, "A" | "B" | "C" | "D" | "E">;
  boardState?: BoardState;
  timeSpent: number;       // In seconds
  flaggedQuestions: string[];
}

export interface GameResult {
  gameId: string;
  correctCount: number;
  totalQuestions: number;
  timeSpent: number;
  questionResults: {
    questionId: string;
    selectedAnswer: "A" | "B" | "C" | "D" | "E" | null;
    isCorrect: boolean;
    timeSpent: number;
  }[];
}

// ============================================
// DISPLAY HELPERS
// ============================================

export const GAME_TYPE_NAMES: Record<GameType, string> = {
  "linear": "Linear/Sequencing",
  "grouping": "Grouping",
  "matching": "Matching",
  "hybrid": "Hybrid",
};

export const GAME_TYPE_DESCRIPTIONS: Record<GameType, string> = {
  "linear": "Put elements in order (first to last, left to right, etc.)",
  "grouping": "Divide elements into groups or categories",
  "matching": "Match elements from one set to another",
  "hybrid": "Combines elements of multiple game types",
};

export const QUESTION_TYPE_NAMES: Record<GameQuestion["type"], string> = {
  "acceptability": "Acceptability",
  "must-be-true": "Must Be True",
  "could-be-true": "Could Be True",
  "must-be-false": "Must Be False",
  "could-be-false": "Could Be False",
  "completely-determined": "Completely Determined",
  "substitution": "Substitution",
  "rule-change": "Rule Change",
};

// ============================================
// ENTITY COLORS
// ============================================

export const ENTITY_COLORS = [
  "#1a365d", // Navy
  "#16a34a", // Green
  "#dc2626", // Red
  "#7c3aed", // Purple
  "#ea580c", // Orange
  "#0891b2", // Cyan
  "#be185d", // Pink
  "#65a30d", // Lime
];

export function getEntityColor(index: number): string {
  return ENTITY_COLORS[index % ENTITY_COLORS.length];
}
