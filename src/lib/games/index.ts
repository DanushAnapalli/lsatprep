// Logic Games Expansion - Central Index
// This file exports all logic games from the expansion sets

import { LogicGame } from "../logic-games-types";

// Import all game sets
import { logicGamesSet1 } from "./logic-games-set-1";
import { logicGamesSet2 } from "./logic-games-set-2";
import { logicGamesSet3 } from "./logic-games-set-3";
import { logicGamesSet4 } from "./logic-games-set-4";
import { logicGamesSet5 } from "./logic-games-set-5";
import { logicGamesSet6 } from "./logic-games-set-6";
import { logicGamesSet7 } from "./logic-games-set-7";
import { logicGamesSet8 } from "./logic-games-set-8";
import { logicGamesSet9 } from "./logic-games-set-9";
import { logicGamesSet10 } from "./logic-games-set-10";
import { logicGamesSet11 } from "./logic-games-set-11";
import { logicGamesSet12 } from "./logic-games-set-12";
import { logicGamesSet13 } from "./logic-games-set-13";
import { logicGamesSet14 } from "./logic-games-set-14";
import { logicGamesSet15 } from "./logic-games-set-15";
import { logicGamesSet16 } from "./logic-games-set-16";
import { logicGamesSet17 } from "./logic-games-set-17";
import { logicGamesSet18 } from "./logic-games-set-18";
import { logicGamesSet19 } from "./logic-games-set-19";
import { logicGamesSet20 } from "./logic-games-set-20";

// Combine all games into a single array
export const allExpandedLogicGames: LogicGame[] = [
  ...logicGamesSet1,
  ...logicGamesSet2,
  ...logicGamesSet3,
  ...logicGamesSet4,
  ...logicGamesSet5,
  ...logicGamesSet6,
  ...logicGamesSet7,
  ...logicGamesSet8,
  ...logicGamesSet9,
  ...logicGamesSet10,
  ...logicGamesSet11,
  ...logicGamesSet12,
  ...logicGamesSet13,
  ...logicGamesSet14,
  ...logicGamesSet15,
  ...logicGamesSet16,
  ...logicGamesSet17,
  ...logicGamesSet18,
  ...logicGamesSet19,
  ...logicGamesSet20,
];

// Calculate statistics
export const expandedLogicGamesStats = {
  totalGames: allExpandedLogicGames.length,
  totalQuestions: allExpandedLogicGames.reduce(
    (sum, game) => sum + game.questions.length,
    0
  ),
  byType: {
    linear: allExpandedLogicGames.filter((g) => g.setup.type === "linear").length,
    grouping: allExpandedLogicGames.filter((g) => g.setup.type === "grouping").length,
    matching: allExpandedLogicGames.filter((g) => g.setup.type === "matching").length,
    hybrid: allExpandedLogicGames.filter((g) => g.setup.type === "hybrid").length,
  },
  byDifficulty: {
    easy: allExpandedLogicGames.filter((g) => g.setup.difficulty === "easy").length,
    medium: allExpandedLogicGames.filter((g) => g.setup.difficulty === "medium").length,
    hard: allExpandedLogicGames.filter((g) => g.setup.difficulty === "hard").length,
  },
};

// Export individual sets for flexibility
export { logicGamesSet1 } from "./logic-games-set-1";
export { logicGamesSet2 } from "./logic-games-set-2";
export { logicGamesSet3 } from "./logic-games-set-3";
export { logicGamesSet4 } from "./logic-games-set-4";
export { logicGamesSet5 } from "./logic-games-set-5";
export { logicGamesSet6 } from "./logic-games-set-6";
export { logicGamesSet7 } from "./logic-games-set-7";
export { logicGamesSet8 } from "./logic-games-set-8";
export { logicGamesSet9 } from "./logic-games-set-9";
export { logicGamesSet10 } from "./logic-games-set-10";
export { logicGamesSet11 } from "./logic-games-set-11";
export { logicGamesSet12 } from "./logic-games-set-12";
export { logicGamesSet13 } from "./logic-games-set-13";
export { logicGamesSet14 } from "./logic-games-set-14";
export { logicGamesSet15 } from "./logic-games-set-15";
export { logicGamesSet16 } from "./logic-games-set-16";
export { logicGamesSet17 } from "./logic-games-set-17";
export { logicGamesSet18 } from "./logic-games-set-18";
export { logicGamesSet19 } from "./logic-games-set-19";
export { logicGamesSet20 } from "./logic-games-set-20";

// Export individual games for direct access
export * from "./logic-games-set-1";
export * from "./logic-games-set-2";
export * from "./logic-games-set-3";
export * from "./logic-games-set-4";
export * from "./logic-games-set-5";
export * from "./logic-games-set-6";
export * from "./logic-games-set-7";
export * from "./logic-games-set-8";
export * from "./logic-games-set-9";
export * from "./logic-games-set-10";
export * from "./logic-games-set-11";
export * from "./logic-games-set-12";
export * from "./logic-games-set-13";
export * from "./logic-games-set-14";
export * from "./logic-games-set-15";
export * from "./logic-games-set-16";
export * from "./logic-games-set-17";
export * from "./logic-games-set-18";
export * from "./logic-games-set-19";
export * from "./logic-games-set-20";
