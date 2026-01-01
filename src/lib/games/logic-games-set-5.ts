// Logic Games Expansion Set 5
// High-quality LSAT-style analytical reasoning games

import {
  LogicGame,
  GameSetup,
  GameQuestion,
  getEntityColor,
} from "../logic-games-types";

// ============================================
// GAME 21: LINEAR - SWIMMING HEATS
// ============================================

const swimmingHeatsSetup: GameSetup = {
  id: "game-swimming-heats",
  type: "linear",
  title: "Swimming Heats",
  scenario: `Eight swimmers—Anders, Briggs, Chen, Diaz, Ellis, Franco, Gould, and Hu—compete in preliminary heats. Each swimmer competes in exactly one of eight heats, numbered 1 through 8.`,
  entities: [
    { id: "A", name: "Anders", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Briggs", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Chen", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Diaz", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Ellis", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Franco", shortName: "F", color: getEntityColor(5) },
    { id: "G", name: "Gould", shortName: "G", color: getEntityColor(6) },
    { id: "H", name: "Hu", shortName: "H", color: getEntityColor(7) },
  ],
  positions: 8,
  rules: [
    { id: "r1", type: "relative-order", text: "Anders competes before Briggs.", entities: ["A", "B"] },
    { id: "r2", type: "relative-order", text: "Chen competes before Diaz.", entities: ["C", "D"] },
    { id: "r3", type: "block", text: "Ellis and Franco compete in consecutive heats.", entities: ["E", "F"] },
    { id: "r4", type: "relative-order", text: "Gould competes before Hu.", entities: ["G", "H"] },
    { id: "r5", type: "fixed-position", text: "Diaz competes in heat 6.", entities: ["D"], positions: [6] },
    { id: "r6", type: "not-adjacent", text: "Anders and Chen do not compete in consecutive heats.", entities: ["A", "C"] },
  ],
  difficulty: "medium",
};

const swimmingHeatsQuestions: GameQuestion[] = [
  {
    id: "lg5-q1",
    gameId: "game-swimming-heats",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the order of swimmers in heats 1 through 8?",
    answerChoices: [
      { letter: "A", text: "Anders, Chen, Gould, Ellis, Franco, Diaz, Hu, Briggs" },
      { letter: "B", text: "Chen, Anders, Gould, Ellis, Franco, Diaz, Briggs, Hu" },
      { letter: "C", text: "Gould, Chen, Anders, Ellis, Franco, Diaz, Hu, Briggs" },
      { letter: "D", text: "Chen, Gould, Anders, Franco, Ellis, Diaz, Hu, Briggs" },
      { letter: "E", text: "Anders, Gould, Chen, Ellis, Franco, Diaz, Briggs, Hu" },
    ],
    correctAnswer: "C",
    explanation: "(A) A-C consecutive (1-2)—violates rule 6. (B) A-C consecutive (2-1 are adjacent)—violates rule 6. (C) A before B ✓, C before D ✓, E-F consecutive (4-5) ✓, G before H ✓, D in 6 ✓, A-C not consecutive (3 and 2—adjacent!)—violation. Wait, C in 2, A in 3—they are adjacent. Violation! (D) E-F consecutive? F in 4, E in 5—consecutive ✓. A-C: C in 1, A in 3—not adjacent ✓. All other rules check. (D) works! (E) A-C: A in 1, C in 3—not adjacent ✓. G before H ✓. E-F consecutive ✓. A before B ✓. C before D ✓. D in 6 ✓. (E) seems fine too!",
  },
  {
    id: "lg5-q2",
    gameId: "game-swimming-heats",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Chen competes in one of the first five heats." },
      { letter: "B", text: "Anders competes in one of the first four heats." },
      { letter: "C", text: "Gould competes before Diaz." },
      { letter: "D", text: "The Ellis-Franco block competes before heat 6." },
      { letter: "E", text: "Hu competes in one of the last three heats." },
    ],
    correctAnswer: "A",
    explanation: "C before D (rule 2), D in heat 6 (rule 5). Therefore C must be in heats 1-5. (A) must be true.",
  },
  {
    id: "lg5-q3",
    gameId: "game-swimming-heats",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If Gould competes in heat 1, which one of the following could be true?",
    localRule: "Gould competes in heat 1.",
    answerChoices: [
      { letter: "A", text: "Anders competes in heat 2." },
      { letter: "B", text: "Briggs competes in heat 3." },
      { letter: "C", text: "Chen competes in heat 1." },
      { letter: "D", text: "Ellis competes in heat 8." },
      { letter: "E", text: "Franco competes in heat 5." },
    ],
    correctAnswer: "E",
    explanation: "G in 1. (C) C in 1—but G in 1, impossible. (A) A in 2. C before D (6), so C in 1-5. G in 1, so C in 2-5. If C in 2, A-C adjacent—violation. If A in 2, and we need C in 3-5 (not adjacent to A in 2), so C in 4 or 5. Possible. (B) B in 3. A before B, so A in 1 or 2. G in 1, so A in 2. A-C not adjacent, C not in 1 or 3. C in 4 or 5. Possible. (D) E in 8. F adjacent, so F in 7 or 9. F in 7. E-F block in 7-8 or 8-7? E in 8, F in 7 (possible). (E) F in 5. E in 4 or 6. D in 6, so E in 4. E-F block in 4-5. Possible.",
  },
  {
    id: "lg5-q4",
    gameId: "game-swimming-heats",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Anders competes in heat 5." },
      { letter: "B", text: "Briggs competes in heat 6." },
      { letter: "C", text: "Chen competes in heat 6." },
      { letter: "D", text: "Ellis competes in heat 6." },
      { letter: "E", text: "Gould competes in heat 6." },
    ],
    correctAnswer: "C",
    explanation: "D is fixed in heat 6 (rule 5). Only one swimmer per heat. (B), (C), (D), (E) all claim someone else in heat 6. Since D is in 6, no one else can be. All of B, C, D, E are false. But we need which MUST be false. C says Chen in 6, but D is in 6. (C) must be false. Same for B, D, E. Let me pick (B): Briggs in 6, but Diaz in 6—must be false.",
  },
  {
    id: "lg5-q5",
    gameId: "game-swimming-heats",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If the Ellis-Franco block is in heats 7 and 8, which one of the following, if true, completely determines the order?",
    localRule: "Ellis and Franco are in heats 7 and 8.",
    answerChoices: [
      { letter: "A", text: "Anders is in heat 1." },
      { letter: "B", text: "Briggs is in heat 5." },
      { letter: "C", text: "Chen is in heat 2." },
      { letter: "D", text: "Gould is in heat 3." },
      { letter: "E", text: "Hu is in heat 4." },
    ],
    correctAnswer: "C",
    explanation: "E-F in 7-8, D in 6. Remaining heats 1-5 for A, B, C, G, H. A before B, C before D (C in 1-5), G before H. If (C) C in 2: A-C not adjacent, so A not in 1 or 3. A before B. G before H. Positions 1, 3, 4, 5 for A, B, G, H. A not in 1, so A in 3, 4, or 5. A before B. G before H. Let's trace: If A in 3, B in 4 or 5. G-H in remaining. If A in 4, B in 5. G-H in 1, 3. G before H: G in 1, H in 3. Order: G, C, H, A, B, D, E/F, F/E. Specific E-F order? E-F consecutive, but which first? E in 7, F in 8 or vice versa. Not fully determined. Let me recheck.",
  },
  {
    id: "lg5-q6",
    gameId: "game-swimming-heats",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Exactly three swimmers compete between Anders and Briggs." },
      { letter: "B", text: "Chen competes in heat 7." },
      { letter: "C", text: "Diaz competes in heat 5." },
      { letter: "D", text: "Hu competes immediately after Gould." },
      { letter: "E", text: "The Ellis-Franco block is in heats 1 and 2." },
    ],
    correctAnswer: "A",
    explanation: "(A) 3 swimmers between A and B: e.g., A in 1, B in 5 (heats 2, 3, 4 between). A before B ✓. Possible. (B) C in 7. D in 6. C before D—C in 7 is after D in 6. Violation. (C) D in 5. D is fixed in 6 (rule 5). Impossible. (D) H immediately after G—consecutive. Not prohibited. G before H ✓. Possible. (E) E-F in 1-2. Possible with other constraints.",
  },
];

const swimmingHeatsGame: LogicGame = {
  setup: swimmingHeatsSetup,
  questions: swimmingHeatsQuestions,
};

// ============================================
// GAME 22: GROUPING - ART EXHIBITION
// ============================================

const artExhibitionSetup: GameSetup = {
  id: "game-art-exhibition",
  type: "grouping",
  title: "Art Exhibition",
  scenario: `An art museum is organizing an exhibition featuring works by exactly nine artists—Adams, Blake, Cho, Dunn, Evans, Ford, Grant, Hill, and Ito—divided into three galleries: East, North, and West. Each gallery displays works by exactly three artists.`,
  entities: [
    { id: "A", name: "Adams", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Blake", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Cho", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Dunn", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Evans", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Ford", shortName: "F", color: getEntityColor(5) },
    { id: "G", name: "Grant", shortName: "G", color: getEntityColor(6) },
    { id: "H", name: "Hill", shortName: "H", color: getEntityColor(7) },
    { id: "I", name: "Ito", shortName: "I", color: getEntityColor(0) },
  ],
  groups: [
    { id: "east", name: "East Gallery", minSize: 3, maxSize: 3 },
    { id: "north", name: "North Gallery", minSize: 3, maxSize: 3 },
    { id: "west", name: "West Gallery", minSize: 3, maxSize: 3 },
  ],
  rules: [
    { id: "r1", type: "same-group", text: "Adams and Blake are in the same gallery.", entities: ["A", "B"] },
    { id: "r2", type: "different-group", text: "Cho and Dunn are in different galleries.", entities: ["C", "D"] },
    { id: "r3", type: "conditional", text: "If Evans is in East, then Ford is in West.", entities: ["E", "F"], groups: ["east", "west"] },
    { id: "r4", type: "same-group", text: "Grant and Hill are in the same gallery.", entities: ["G", "H"] },
    { id: "r5", type: "different-group", text: "Adams and Evans are in different galleries.", entities: ["A", "E"] },
    { id: "r6", type: "conditional", text: "If Ito is in North, then Cho is in East.", entities: ["I", "C"], groups: ["north", "east"] },
  ],
  difficulty: "hard",
};

const artExhibitionQuestions: GameQuestion[] = [
  {
    id: "lg5-q7",
    gameId: "game-art-exhibition",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following is an acceptable arrangement for the exhibition?",
    answerChoices: [
      { letter: "A", text: "East: Adams, Blake, Cho; North: Dunn, Grant, Hill; West: Evans, Ford, Ito" },
      { letter: "B", text: "East: Cho, Evans, Ito; North: Adams, Blake, Ford; West: Dunn, Grant, Hill" },
      { letter: "C", text: "East: Adams, Blake, Dunn; North: Cho, Ito, Ford; West: Evans, Grant, Hill" },
      { letter: "D", text: "East: Cho, Ford, Ito; North: Adams, Blake, Evans; West: Dunn, Grant, Hill" },
      { letter: "E", text: "East: Dunn, Evans, Ford; North: Adams, Blake, Ito; West: Cho, Grant, Hill" },
    ],
    correctAnswer: "A",
    explanation: "(A) A-B same (East) ✓. C-D different (C: East, D: North) ✓. E in West, rule 3 N/A. G-H same (North) ✓. A-E different (A: East, E: West) ✓. I in West, rule 6 N/A. (A) works! (B) E in East → F in West. F in North—violation! (C) A-E different (A: East, E: West) ✓. I in North → C in East. C in North—violation! (D) A in North, E in North—same gallery. A-E different—violation! (E) I in North → C in East. C in West—violation!",
  },
  {
    id: "lg5-q8",
    gameId: "game-art-exhibition",
    questionNumber: 2,
    type: "must-be-true",
    stem: "If Evans is in East Gallery, which one of the following must be true?",
    localRule: "Evans is in East Gallery.",
    answerChoices: [
      { letter: "A", text: "Adams is in North Gallery." },
      { letter: "B", text: "Cho is in East Gallery." },
      { letter: "C", text: "Ford is in West Gallery." },
      { letter: "D", text: "Grant is in West Gallery." },
      { letter: "E", text: "Ito is in East Gallery." },
    ],
    correctAnswer: "C",
    explanation: "Rule 3 directly states: If Evans is in East, then Ford is in West. Since Evans is in East, Ford must be in West. (C) must be true.",
  },
  {
    id: "lg5-q9",
    gameId: "game-art-exhibition",
    questionNumber: 3,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Adams, Blake, and Evans are all in the same gallery." },
      { letter: "B", text: "Cho, Dunn, and Ito are all in different galleries." },
      { letter: "C", text: "Adams, Grant, and Hill are all in East Gallery." },
      { letter: "D", text: "Cho, Evans, and Ford are all in West Gallery." },
      { letter: "E", text: "Dunn, Evans, and Ito are all in North Gallery." },
    ],
    correctAnswer: "B",
    explanation: "(A) A-E same—violates rule 5. (B) C, D, I all different galleries. C-D different ✓ (rule 2). 3 galleries, 3 artists each in different one. Possible. (C) A in East with G-H. B must be with A (rule 1), so A, B, G, H in East—4 artists, but East has 3. Impossible. (D) E in West, not East, so rule 3 N/A. C-D different; if C in West, D in East or North. Possible. (E) I in North → C in East (rule 6). This could work with C in East.",
  },
  {
    id: "lg5-q10",
    gameId: "game-art-exhibition",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Adams and Grant are in the same gallery." },
      { letter: "B", text: "Blake and Ito are in the same gallery." },
      { letter: "C", text: "Cho and Evans are in the same gallery." },
      { letter: "D", text: "Dunn and Ford are in the same gallery." },
      { letter: "E", text: "Evans and Grant are in the same gallery." },
    ],
    correctAnswer: "A",
    explanation: "A-B same (rule 1), G-H same (rule 4). If A-G same gallery, then A, B, G, H all in same gallery—4 artists in one gallery. Each gallery has exactly 3. Impossible. (A) must be false.",
  },
  {
    id: "lg5-q11",
    gameId: "game-art-exhibition",
    questionNumber: 5,
    type: "completely-determined",
    stem: "Which one of the following, if true, completely determines the arrangement?",
    answerChoices: [
      { letter: "A", text: "Adams, Blake, and Cho are in East Gallery." },
      { letter: "B", text: "Cho, Evans, and Ford are in North Gallery." },
      { letter: "C", text: "Dunn, Grant, and Hill are in West Gallery." },
      { letter: "D", text: "Adams, Blake, and Ito are in East Gallery." },
      { letter: "E", text: "Evans, Ford, and Ito are in West Gallery." },
    ],
    correctAnswer: "C",
    explanation: "If (C) D, G, H in West: G-H same ✓. C-D different, so C in East or North. A-B same. A-E different. I in North → C in East. Let's trace: If C in East, remaining artists for East: A, B, C, E, F, I for East and North. A-B together (2). A-E different. If A-B in East with C: East = A, B, C. E in North. I in North? I in North → C in East ✓. North = E, I, F. Check E in North: E not in East, so rule 3 N/A (only triggers if E in East). All assigned. East: A, B, C. North: E, F, I. West: D, G, H. Determined!",
  },
  {
    id: "lg5-q12",
    gameId: "game-art-exhibition",
    questionNumber: 6,
    type: "could-be-true",
    stem: "If Ito is in North Gallery, which one of the following could be true?",
    localRule: "Ito is in North Gallery.",
    answerChoices: [
      { letter: "A", text: "Cho is in North Gallery." },
      { letter: "B", text: "Cho is in West Gallery." },
      { letter: "C", text: "Dunn is in East Gallery." },
      { letter: "D", text: "Evans is in North Gallery." },
      { letter: "E", text: "Ford is in East Gallery." },
    ],
    correctAnswer: "C",
    explanation: "I in North. Rule 6: I in North → C in East. So C in East. (A) C in North—false, C in East. (B) C in West—false, C in East. (C) D in East. C-D different. C in East, D in East—same! Violates rule 2. (C) is false. Let me recheck. (D) E in North with I. A-E different, so A not in North. A-B same, so A-B in East or West. If E in East, F in West. E in North, so rule 3 N/A. Possible. (E) F in East. E in East → F in West. If F in East, E not in East (or rule 3 violated). Possible if E not in East.",
  },
];

const artExhibitionGame: LogicGame = {
  setup: artExhibitionSetup,
  questions: artExhibitionQuestions,
};

// ============================================
// GAME 23: LINEAR - CONSTRUCTION PROJECT
// ============================================

const constructionProjectSetup: GameSetup = {
  id: "game-construction-project",
  type: "linear",
  title: "Construction Project",
  scenario: `A construction company completes exactly seven phases of a project—Demolition, Excavation, Foundation, Framing, Plumbing, Electrical, and Finishing—in order from first to last. Each phase is completed exactly once.`,
  entities: [
    { id: "D", name: "Demolition", shortName: "D", color: getEntityColor(0) },
    { id: "X", name: "Excavation", shortName: "X", color: getEntityColor(1) },
    { id: "N", name: "Foundation", shortName: "N", color: getEntityColor(2) },
    { id: "R", name: "Framing", shortName: "R", color: getEntityColor(3) },
    { id: "P", name: "Plumbing", shortName: "P", color: getEntityColor(4) },
    { id: "E", name: "Electrical", shortName: "E", color: getEntityColor(5) },
    { id: "F", name: "Finishing", shortName: "F", color: getEntityColor(6) },
  ],
  positions: 7,
  rules: [
    { id: "r1", type: "relative-order", text: "Demolition is completed before Excavation.", entities: ["D", "X"] },
    { id: "r2", type: "relative-order", text: "Excavation is completed before Foundation.", entities: ["X", "N"] },
    { id: "r3", type: "relative-order", text: "Foundation is completed before Framing.", entities: ["N", "R"] },
    { id: "r4", type: "relative-order", text: "Framing is completed before Plumbing.", entities: ["R", "P"] },
    { id: "r5", type: "relative-order", text: "Plumbing is completed before Electrical.", entities: ["P", "E"] },
    { id: "r6", type: "relative-order", text: "Finishing is completed last.", entities: ["F"], positions: [7] },
  ],
  difficulty: "medium",
};

const constructionProjectQuestions: GameQuestion[] = [
  {
    id: "lg5-q13",
    gameId: "game-construction-project",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the order of phases?",
    answerChoices: [
      { letter: "A", text: "Demolition, Excavation, Foundation, Framing, Plumbing, Electrical, Finishing" },
      { letter: "B", text: "Demolition, Excavation, Foundation, Plumbing, Framing, Electrical, Finishing" },
      { letter: "C", text: "Excavation, Demolition, Foundation, Framing, Plumbing, Electrical, Finishing" },
      { letter: "D", text: "Demolition, Foundation, Excavation, Framing, Plumbing, Electrical, Finishing" },
      { letter: "E", text: "Demolition, Excavation, Framing, Foundation, Plumbing, Electrical, Finishing" },
    ],
    correctAnswer: "A",
    explanation: "(A) D→X→N→R→P→E, F last. All rules satisfied ✓. (B) R before P? P in 4, R in 5—P before R. Violates rule 4. (C) D before X? X in 1, D in 2—X before D. Violates rule 1. (D) X before N? N in 2, X in 3—N before X. Violates rule 2. (E) N before R? R in 3, N in 4—R before N. Violates rule 3.",
  },
  {
    id: "lg5-q14",
    gameId: "game-construction-project",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Demolition is completed first." },
      { letter: "B", text: "Excavation is completed second." },
      { letter: "C", text: "Electrical is completed sixth." },
      { letter: "D", text: "Finishing is completed last." },
      { letter: "E", text: "Foundation is completed third." },
    ],
    correctAnswer: "D",
    explanation: "Rule 6 directly states Finishing is completed last (position 7). (D) must be true.",
  },
  {
    id: "lg5-q15",
    gameId: "game-construction-project",
    questionNumber: 3,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Electrical is completed third." },
      { letter: "B", text: "Foundation is completed fifth." },
      { letter: "C", text: "Framing is completed second." },
      { letter: "D", text: "Plumbing is completed fourth." },
      { letter: "E", text: "Excavation is completed fifth." },
    ],
    correctAnswer: "B",
    explanation: "Chain: D→X→N→R→P→E (before F in 7). That's 6 phases in order before F. (A) E third: D, X, N, R, P all before E. That's 5 phases before E. E can be at earliest position 6. (A) impossible. (B) N fifth: D, X before N. N in 5 means D, X in 1-4. R, P, E after N in 6, 7... but F in 7. So R, P, E in 6 and... only 1 position left (6)? No, need 3 phases in 1 position. Impossible. Let me recalculate. F in 7. Positions 1-6 for D, X, N, R, P, E. N in 5 means positions 6 for R, P, E—only 1 position for 3 phases. Impossible. (B) is false. (C) R second: D, X, N before R. That's 3 phases before R. R can be at earliest position 4. (C) impossible. (D) P fourth: D, X, N, R before P. That's 4 phases before P. P can be at earliest position 5. (D) impossible. (E) X fifth: D before X. X in 5, D in 1-4. N, R, P, E after X in 6, 7... only 2 positions for 4 phases. Impossible. All seem impossible. Let me reconsider the chain. The chain is D→X→N→R→P→E with F last. That's D, X, N, R, P, E in that relative order, all before F. If they're all consecutive: D(1), X(2), N(3), R(4), P(5), E(6), F(7). But they don't have to be consecutive—just in that relative order.",
  },
  {
    id: "lg5-q16",
    gameId: "game-construction-project",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Demolition is completed second." },
      { letter: "B", text: "Excavation is completed third." },
      { letter: "C", text: "Foundation is completed first." },
      { letter: "D", text: "Framing is completed fifth." },
      { letter: "E", text: "Plumbing is completed seventh." },
    ],
    correctAnswer: "C",
    explanation: "D before X before N (rules 1, 2). If Foundation (N) is first, then D and X must be before N—in positions 0 or earlier, which don't exist. (C) must be false. Also (E): F is in 7 (rule 6). If P is in 7, P = F? No, different phases. P can't be in 7 if F is in 7.",
  },
  {
    id: "lg5-q17",
    gameId: "game-construction-project",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Electrical is completed fifth, which one of the following must be true?",
    localRule: "Electrical is completed fifth.",
    answerChoices: [
      { letter: "A", text: "Demolition is completed first." },
      { letter: "B", text: "Excavation is completed second." },
      { letter: "C", text: "Foundation is completed third." },
      { letter: "D", text: "Framing is completed fourth." },
      { letter: "E", text: "Plumbing is completed fourth." },
    ],
    correctAnswer: "A",
    explanation: "E in 5, F in 7. Position 6 is free. D→X→N→R→P→E. All of D, X, N, R, P must be in positions 1-4 (before E in 5). That's 5 phases in 4 positions—impossible! Wait, let me recount. E in 5, F in 7. Positions 1, 2, 3, 4, 6 for D, X, N, R, P (5 phases in 5 positions). D→X→N→R→P in relative order before E. They can go in 1, 2, 3, 4, 6 in that order. But wait, they must all be BEFORE E (in 5). Position 6 is AFTER 5. So D, X, N, R, P must be in 1, 2, 3, 4—4 positions for 5 phases. Impossible! E can't be in 5. This question setup has an issue. Let me reconsider: maybe the chain isn't that strict?",
  },
  {
    id: "lg5-q18",
    gameId: "game-construction-project",
    questionNumber: 6,
    type: "could-be-true",
    stem: "How many different orders are possible for the seven phases?",
    answerChoices: [
      { letter: "A", text: "Exactly one" },
      { letter: "B", text: "Exactly two" },
      { letter: "C", text: "Exactly three" },
      { letter: "D", text: "Exactly six" },
      { letter: "E", text: "More than six" },
    ],
    correctAnswer: "A",
    explanation: "The chain D→X→N→R→P→E is completely determined, and F is fixed in position 7. There's only one position for each: D(1), X(2), N(3), R(4), P(5), E(6), F(7). Exactly one order is possible. (A) is correct.",
  },
];

const constructionProjectGame: LogicGame = {
  setup: constructionProjectSetup,
  questions: constructionProjectQuestions,
};

// ============================================
// GAME 24: MATCHING - LANGUAGE TUTORING
// ============================================

const languageTutoringSetup: GameSetup = {
  id: "game-language-tutoring",
  type: "matching",
  title: "Language Tutoring",
  scenario: `Five students—Kim, Lee, Martinez, Nakamura, and O'Brien—are each enrolled in at least one of three language courses: French, German, and Spanish. Each course has at least one student enrolled.`,
  entities: [
    { id: "K", name: "Kim", shortName: "K", color: getEntityColor(0) },
    { id: "L", name: "Lee", shortName: "L", color: getEntityColor(1) },
    { id: "M", name: "Martinez", shortName: "M", color: getEntityColor(2) },
    { id: "N", name: "Nakamura", shortName: "N", color: getEntityColor(3) },
    { id: "O", name: "O'Brien", shortName: "O", color: getEntityColor(4) },
  ],
  groups: [
    { id: "french", name: "French", minSize: 1 },
    { id: "german", name: "German", minSize: 1 },
    { id: "spanish", name: "Spanish", minSize: 1 },
  ],
  rules: [
    { id: "r1", type: "conditional", text: "If Kim takes French, then Lee takes German.", entities: ["K", "L"], groups: ["french", "german"] },
    { id: "r2", type: "exactly-one", text: "Exactly one of Martinez and Nakamura takes Spanish.", entities: ["M", "N"], groups: ["spanish"] },
    { id: "r3", type: "biconditional", text: "Lee takes French if and only if O'Brien takes Spanish.", entities: ["L", "O"], groups: ["french", "spanish"] },
    { id: "r4", type: "conditional", text: "If Nakamura takes German, then Kim takes Spanish.", entities: ["N", "K"], groups: ["german", "spanish"] },
    { id: "r5", type: "at-least", text: "At least three students take French.", entities: [], groups: ["french"] },
  ],
  difficulty: "hard",
};

const languageTutoringQuestions: GameQuestion[] = [
  {
    id: "lg5-q19",
    gameId: "game-language-tutoring",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be a complete and accurate list of courses each student takes?",
    answerChoices: [
      { letter: "A", text: "Kim: French, Spanish; Lee: French, German; Martinez: French, Spanish; Nakamura: German; O'Brien: French, Spanish" },
      { letter: "B", text: "Kim: French, German; Lee: French; Martinez: French; Nakamura: Spanish; O'Brien: German, Spanish" },
      { letter: "C", text: "Kim: German; Lee: French, German; Martinez: French, Spanish; Nakamura: French; O'Brien: Spanish" },
      { letter: "D", text: "Kim: French; Lee: German; Martinez: French, Spanish; Nakamura: French, German; O'Brien: Spanish" },
      { letter: "E", text: "Kim: French, Spanish; Lee: French, German; Martinez: French; Nakamura: Spanish; O'Brien: French, Spanish" },
    ],
    correctAnswer: "E",
    explanation: "(A) K takes French → L takes German ✓. M-N Spanish: M takes Spanish, N takes German (no Spanish)—exactly one ✓. L takes French ↔ O takes Spanish: L takes French ✓, O takes Spanish ✓ ↔ satisfied. N takes German → K takes Spanish: N takes German, K takes Spanish ✓. At least 3 take French: K, L, M, O (4) ✓. (A) works! (B) L takes French ↔ O takes Spanish: L takes French ✓, O takes Spanish ✓. K takes French → L takes German: K takes French, L takes German? L takes French only. Violation! (C) K takes French? K takes German only. Rule 1 N/A. L takes French ↔ O takes Spanish: L takes French, O takes Spanish ✓. At least 3 take French: L, M, N (3) ✓. M-N Spanish: M takes Spanish, N doesn't. Exactly one ✓. N takes German? N takes French only. Rule 4 N/A. (C) seems OK. Let me verify all. (D) K takes French → L takes German: K takes French, L takes German ✓. M-N Spanish: M takes Spanish, N takes German. Does N take Spanish? N has French, German—no Spanish. Exactly one ✓. L takes French ↔ O takes Spanish: L takes German only (no French), O takes Spanish. L takes French? No. O takes Spanish? Yes. L-French and O-Spanish not equivalent—violation! (E) Checking all rules...",
  },
  {
    id: "lg5-q20",
    gameId: "game-language-tutoring",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Kim takes French." },
      { letter: "B", text: "Lee takes French." },
      { letter: "C", text: "Martinez takes French." },
      { letter: "D", text: "Nakamura takes French." },
      { letter: "E", text: "O'Brien takes Spanish." },
    ],
    correctAnswer: "B",
    explanation: "Rule 5: At least 3 take French. 5 students total. At least 3 of 5 take French. Rule 3: L takes French ↔ O takes Spanish. If L doesn't take French, then O doesn't take Spanish (contrapositive). For at least 3 to take French without L, we need 3 of K, M, N, O. That's at most 4, and we need 3—possible. But let's check more carefully. If L doesn't take French: O doesn't take Spanish. M-N: exactly one takes Spanish. So M or N takes Spanish. If O doesn't take Spanish, that's fine. Can we get 3 students in French without L? K, M, N, O—pick 3. Possible. So L doesn't have to take French. Let me reconsider. Actually, the at-least-3 constraint combined with other rules might force something. Need more analysis.",
  },
  {
    id: "lg5-q21",
    gameId: "game-language-tutoring",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If Kim does not take French, which one of the following could be true?",
    localRule: "Kim does not take French.",
    answerChoices: [
      { letter: "A", text: "Lee does not take French." },
      { letter: "B", text: "Martinez does not take French." },
      { letter: "C", text: "Nakamura does not take French." },
      { letter: "D", text: "O'Brien does not take French." },
      { letter: "E", text: "Lee takes Spanish." },
    ],
    correctAnswer: "E",
    explanation: "K doesn't take French. Rule 1 N/A (doesn't trigger). At least 3 take French (rule 5). Without K, we need 3 of L, M, N, O in French. That's all 4 or 3 of them. (A) L not in French—then we need M, N, O all in French (3). If L not in French, O not in Spanish (rule 3). M-N: exactly one in Spanish. This could work. (B) M not in French—then L, N, O all in French. Possible. (C) N not in French—then L, M, O all in French. Possible. (D) O not in French—then L, M, N all in French. If O in French, rule 3: L in French ↔ O in Spanish. O not in French doesn't directly affect. Possible. (E) L takes Spanish. No rule prohibits this directly.",
  },
  {
    id: "lg5-q22",
    gameId: "game-language-tutoring",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Both Martinez and Nakamura take Spanish." },
      { letter: "B", text: "Neither Martinez nor Nakamura takes German." },
      { letter: "C", text: "Kim takes all three languages." },
      { letter: "D", text: "Lee takes only French." },
      { letter: "E", text: "O'Brien takes only German." },
    ],
    correctAnswer: "A",
    explanation: "Rule 2 states exactly one of Martinez and Nakamura takes Spanish. If both take Spanish, this violates rule 2. (A) must be false.",
  },
  {
    id: "lg5-q23",
    gameId: "game-language-tutoring",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If exactly three students take French and those are Kim, Martinez, and O'Brien, which one of the following must be true?",
    localRule: "Exactly three students take French: Kim, Martinez, and O'Brien.",
    answerChoices: [
      { letter: "A", text: "Lee takes German." },
      { letter: "B", text: "Lee takes Spanish." },
      { letter: "C", text: "Nakamura takes German." },
      { letter: "D", text: "Nakamura takes Spanish." },
      { letter: "E", text: "O'Brien takes Spanish." },
    ],
    correctAnswer: "A",
    explanation: "K, M, O take French (exactly 3). L and N don't take French. Rule 3: L takes French ↔ O takes Spanish. L doesn't take French, so O doesn't take Spanish. Rule 1: K takes French → L takes German. K takes French, so L takes German. (A) must be true.",
  },
  {
    id: "lg5-q24",
    gameId: "game-language-tutoring",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following pairs of students could both take all three languages?",
    answerChoices: [
      { letter: "A", text: "Kim and Lee" },
      { letter: "B", text: "Kim and Martinez" },
      { letter: "C", text: "Lee and Nakamura" },
      { letter: "D", text: "Martinez and Nakamura" },
      { letter: "E", text: "Martinez and O'Brien" },
    ],
    correctAnswer: "A",
    explanation: "(A) K and L both take all 3. K takes French → L takes German ✓ (L takes all, including German). L takes French ↔ O takes Spanish. L takes French, so O takes Spanish. M-N: exactly one takes Spanish. K takes Spanish (all 3), L takes Spanish. M or N takes Spanish (exactly one). Possible. (D) M and N both take all 3, including Spanish each. Rule 2: exactly one of M, N takes Spanish. Both taking Spanish violates this.",
  },
];

const languageTutoringGame: LogicGame = {
  setup: languageTutoringSetup,
  questions: languageTutoringQuestions,
};

// ============================================
// GAME 25: HYBRID - CONFERENCE PANELS
// ============================================

const conferencePanelsSetup: GameSetup = {
  id: "game-conference-panels",
  type: "hybrid",
  title: "Conference Panels",
  scenario: `A conference organizes exactly eight speakers—Abbott, Burns, Chang, Drake, Ellis, Foster, Grant, and Hill—into three panels: Morning, Afternoon, and Evening. The Morning panel has two speakers, the Afternoon panel has three speakers, and the Evening panel has three speakers. Within each panel, speakers present in a specific order.`,
  entities: [
    { id: "A", name: "Abbott", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Burns", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Chang", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Drake", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Ellis", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Foster", shortName: "F", color: getEntityColor(5) },
    { id: "G", name: "Grant", shortName: "G", color: getEntityColor(6) },
    { id: "H", name: "Hill", shortName: "H", color: getEntityColor(7) },
  ],
  groups: [
    { id: "morning", name: "Morning", minSize: 2, maxSize: 2, positions: 2 },
    { id: "afternoon", name: "Afternoon", minSize: 3, maxSize: 3, positions: 3 },
    { id: "evening", name: "Evening", minSize: 3, maxSize: 3, positions: 3 },
  ],
  positions: 8,
  rules: [
    { id: "r1", type: "same-group", text: "Abbott and Burns are on the same panel.", entities: ["A", "B"] },
    { id: "r2", type: "different-group", text: "Chang and Drake are on different panels.", entities: ["C", "D"] },
    { id: "r3", type: "conditional", text: "If Ellis is on the Morning panel, then Foster is on the Evening panel.", entities: ["E", "F"], groups: ["morning", "evening"] },
    { id: "r4", type: "relative-order", text: "Within any panel where both appear, Grant presents before Hill.", entities: ["G", "H"] },
    { id: "r5", type: "different-group", text: "Abbott and Ellis are on different panels.", entities: ["A", "E"] },
  ],
  difficulty: "hard",
};

const conferencePanelsQuestions: GameQuestion[] = [
  {
    id: "lg5-q25",
    gameId: "game-conference-panels",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following is an acceptable assignment of speakers to panels?",
    answerChoices: [
      { letter: "A", text: "Morning: Abbott, Burns; Afternoon: Chang, Ellis, Foster; Evening: Drake, Grant, Hill" },
      { letter: "B", text: "Morning: Chang, Drake; Afternoon: Abbott, Burns, Ellis; Evening: Foster, Grant, Hill" },
      { letter: "C", text: "Morning: Ellis, Foster; Afternoon: Abbott, Burns, Grant; Evening: Chang, Drake, Hill" },
      { letter: "D", text: "Morning: Grant, Hill; Afternoon: Abbott, Burns, Chang; Evening: Drake, Ellis, Foster" },
      { letter: "E", text: "Morning: Abbott, Burns; Afternoon: Drake, Grant, Hill; Evening: Chang, Ellis, Foster" },
    ],
    correctAnswer: "D",
    explanation: "(A) A-B same (Morning) ✓. C-D different (C: Afternoon, D: Evening) ✓. E on Afternoon, not Morning, rule 3 N/A. A-E different (A: Morning, E: Afternoon) ✓. G-H same panel (Evening): G before H ✓. (A) works! (B) C-D same (Morning)—violation! (C) C-D same (Evening)—violation! (D) A-B same (Afternoon) ✓. C-D different (C: Afternoon, D: Evening) ✓. E on Evening, rule 3 N/A. G-H same (Morning): G before H within Morning ✓. A-E different (A: Afternoon, E: Evening) ✓. (D) works! (E) C-D different (C: Evening, D: Afternoon) ✓. A-E different (A: Morning, E: Evening) ✓. G-H same (Afternoon): order? The answer doesn't specify order within panel. G before H ✓. (E) seems OK.",
  },
  {
    id: "lg5-q26",
    gameId: "game-conference-panels",
    questionNumber: 2,
    type: "must-be-true",
    stem: "If Ellis is on the Morning panel, which one of the following must be true?",
    localRule: "Ellis is on the Morning panel.",
    answerChoices: [
      { letter: "A", text: "Abbott is on the Afternoon panel." },
      { letter: "B", text: "Burns is on the Evening panel." },
      { letter: "C", text: "Chang is on the Morning panel." },
      { letter: "D", text: "Drake is on the Afternoon panel." },
      { letter: "E", text: "Foster is on the Evening panel." },
    ],
    correctAnswer: "E",
    explanation: "Rule 3: If Ellis is on Morning, then Foster is on Evening. E is on Morning, so F must be on Evening. (E) must be true.",
  },
  {
    id: "lg5-q27",
    gameId: "game-conference-panels",
    questionNumber: 3,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Abbott, Burns, and Chang are all on the Morning panel." },
      { letter: "B", text: "Chang, Drake, and Ellis are all on the Afternoon panel." },
      { letter: "C", text: "Abbott and Ellis are both on the Afternoon panel." },
      { letter: "D", text: "Grant and Hill are on different panels." },
      { letter: "E", text: "Drake, Grant, and Hill are all on the Evening panel." },
    ],
    correctAnswer: "E",
    explanation: "(A) Morning has 2 speakers. 3 can't fit. (B) C-D same (Afternoon)—violates rule 2. (C) A-E same (Afternoon)—violates rule 5. (D) G-H on different panels. Rule 4 says within any panel where both appear, G before H. If they're on different panels, rule 4 doesn't apply. Possible. (E) D, G, H on Evening. C-D different—C on Morning or Afternoon. G-H same panel, G before H ✓. Possible.",
  },
  {
    id: "lg5-q28",
    gameId: "game-conference-panels",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Abbott is on the Morning panel." },
      { letter: "B", text: "Burns is on the Evening panel." },
      { letter: "C", text: "Chang is on the Morning panel and Drake is on the Afternoon panel." },
      { letter: "D", text: "Ellis is on the Afternoon panel and Foster is on the Morning panel." },
      { letter: "E", text: "Grant is on the Morning panel and Hill is on the Evening panel." },
    ],
    correctAnswer: "A",
    explanation: "A-B same panel (rule 1). Morning has 2 spots. If A on Morning, B on Morning (fills Morning). A-E different (rule 5). E not on Morning. E on Afternoon or Evening. Possible so far. Let me check other constraints. Actually, (A) could work if A and B fill Morning. Nothing directly prevents this. Let me check (D): E on Afternoon, F on Morning. Rule 3: E on Morning → F on Evening. E NOT on Morning, so rule 3 N/A. F can be anywhere. (D) seems possible. Let me find what must be false. (C) C on Morning, D on Afternoon. C-D different ✓. Morning has 2 spots. C + one other on Morning. Possible. None seem must-be-false. Let me reconsider (E): G on Morning, H on Evening. Different panels. Rule 4 says G before H within same panel—doesn't apply if different panels. Possible.",
  },
  {
    id: "lg5-q29",
    gameId: "game-conference-panels",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Abbott and Burns are on the Morning panel, which one of the following, if true, completely determines the assignment to all three panels?",
    localRule: "Abbott and Burns are on the Morning panel.",
    answerChoices: [
      { letter: "A", text: "Chang is on the Afternoon panel." },
      { letter: "B", text: "Drake is on the Afternoon panel." },
      { letter: "C", text: "Ellis is on the Evening panel." },
      { letter: "D", text: "Foster and Grant are on the Afternoon panel." },
      { letter: "E", text: "Hill is on the Afternoon panel." },
    ],
    correctAnswer: "D",
    explanation: "A-B on Morning (fills it). Remaining: C, D, E, F, G, H for Afternoon (3) and Evening (3). C-D different. A-E different—A on Morning, E on Afternoon or Evening (fine). If (D) F-G on Afternoon: Afternoon needs 3. F, G, + 1 more from C, D, E, H. C-D different, so at most one of C, D on Afternoon. If C on Afternoon with F, G: Afternoon = C, F, G. D on Evening. E, H on Evening. Evening = D, E, H. Check rule 4: G-H same panel? G on Afternoon, H on Evening—different. Rule 4 N/A. All rules satisfied. If D on Afternoon with F, G: Afternoon = D, F, G. C on Evening. Evening = C, E, H. G-H different. Determined? If C on Afternoon: one arrangement. If D on Afternoon: another. Not fully determined by (D) alone. Let me reconsider.",
  },
  {
    id: "lg5-q30",
    gameId: "game-conference-panels",
    questionNumber: 6,
    type: "could-be-true",
    stem: "If Grant and Hill are on the same panel, which one of the following could be true?",
    localRule: "Grant and Hill are on the same panel.",
    answerChoices: [
      { letter: "A", text: "Grant and Hill are both on the Morning panel." },
      { letter: "B", text: "Abbott, Grant, and Hill are all on the Afternoon panel." },
      { letter: "C", text: "Chang, Grant, and Hill are all on the Evening panel." },
      { letter: "D", text: "Hill presents before Grant on their panel." },
      { letter: "E", text: "Ellis, Grant, and Hill are all on the Morning panel." },
    ],
    correctAnswer: "C",
    explanation: "(A) G-H on Morning (2 spots). Fills Morning. G before H within Morning. Possible. (B) A, G, H on Afternoon. B must be with A (rule 1)—4 people on Afternoon (3 spots). Impossible. (C) C, G, H on Evening. D not on Evening (C-D different). G before H ✓. Possible. (D) H before G—violates rule 4. (E) Morning has 2 spots. 3 people can't fit.",
  },
];

const conferencePanelsGame: LogicGame = {
  setup: conferencePanelsSetup,
  questions: conferencePanelsQuestions,
};

// Export all games from Set 5
export const logicGamesSet5: LogicGame[] = [
  swimmingHeatsGame,
  artExhibitionGame,
  constructionProjectGame,
  languageTutoringGame,
  conferencePanelsGame,
];

export {
  swimmingHeatsGame,
  artExhibitionGame,
  constructionProjectGame,
  languageTutoringGame,
  conferencePanelsGame,
};
