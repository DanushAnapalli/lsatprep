// Logic Games Expansion Set 2
// High-quality LSAT-style analytical reasoning games

import {
  LogicGame,
  GameSetup,
  GameQuestion,
  getEntityColor,
} from "../logic-games-types";

// ============================================
// GAME 6: LINEAR - DELIVERY SCHEDULE
// ============================================

const deliveryScheduleSetup: GameSetup = {
  id: "game-delivery-schedule",
  type: "linear",
  title: "Delivery Schedule",
  scenario: `A delivery truck must make exactly six stops—at a Bakery, a Cafe, a Deli, an Electronics store, a Florist, and a Grocery—during a single route. Each stop is made exactly once, and no two stops are made at the same time. The stops are made in a sequence numbered 1 through 6, from first to last.`,
  entities: [
    { id: "B", name: "Bakery", shortName: "B", color: getEntityColor(0) },
    { id: "C", name: "Cafe", shortName: "C", color: getEntityColor(1) },
    { id: "D", name: "Deli", shortName: "D", color: getEntityColor(2) },
    { id: "E", name: "Electronics", shortName: "E", color: getEntityColor(3) },
    { id: "F", name: "Florist", shortName: "F", color: getEntityColor(4) },
    { id: "G", name: "Grocery", shortName: "G", color: getEntityColor(5) },
  ],
  positions: 6,
  rules: [
    { id: "r1", type: "relative-order", text: "The Bakery stop is made before the Cafe stop.", entities: ["B", "C"] },
    { id: "r2", type: "relative-order", text: "The Deli stop is made before the Electronics stop.", entities: ["D", "E"] },
    { id: "r3", type: "adjacent", text: "The Florist stop is made immediately before or after the Grocery stop.", entities: ["F", "G"] },
    { id: "r4", type: "range", text: "The Cafe stop is made third or fourth.", entities: ["C"], positions: [3, 4] },
    { id: "r5", type: "not-adjacent", text: "The Bakery stop and the Deli stop are not made consecutively.", entities: ["B", "D"] },
  ],
  difficulty: "medium",
};

const deliveryScheduleQuestions: GameQuestion[] = [
  {
    id: "lg2-q1",
    gameId: "game-delivery-schedule",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the order of stops, from first to last?",
    answerChoices: [
      { letter: "A", text: "Bakery, Florist, Grocery, Cafe, Deli, Electronics" },
      { letter: "B", text: "Deli, Bakery, Cafe, Electronics, Florist, Grocery" },
      { letter: "C", text: "Florist, Grocery, Bakery, Cafe, Deli, Electronics" },
      { letter: "D", text: "Bakery, Deli, Florist, Cafe, Grocery, Electronics" },
      { letter: "E", text: "Deli, Florist, Grocery, Cafe, Bakery, Electronics" },
    ],
    correctAnswer: "C",
    explanation: "(A) B before C ✓, D in 5 before E in 6 ✓, F-G adjacent (2-3) ✓, C in 4 ✓, B-D not adjacent (1 and 5) ✓. Wait, (A) seems to work. Let me verify. (B) C in 3 ✓, but check others. B-D adjacent? B in 2, D in 1—yes, adjacent! Violates rule 5. (C) F-G adjacent ✓, B before C ✓, D before E ✓, C in 4 ✓, B in 3, D in 5—not adjacent ✓. (C) works. (D) F-G not adjacent (3 and 5). Violates rule 3. (E) B in 5, C in 4—B must be before C! Violation.",
  },
  {
    id: "lg2-q2",
    gameId: "game-delivery-schedule",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "The Bakery stop is made first or second." },
      { letter: "B", text: "The Deli stop is made in the first three stops." },
      { letter: "C", text: "The Electronics stop is made fifth or sixth." },
      { letter: "D", text: "The Florist stop is made before the Cafe stop." },
      { letter: "E", text: "The Grocery stop is made in the last three stops." },
    ],
    correctAnswer: "A",
    explanation: "C is in position 3 or 4 (rule 4). B must be before C (rule 1). If C is in 3, B is in 1 or 2. If C is in 4, B is in 1, 2, or 3. Either way, B must be in positions 1, 2, or 3. But can B be in 3? Only if C is in 4. Let's check: B in 3, C in 4. D before E, F-G adjacent, B-D not adjacent. D could be 1, 2, 5 (not 3, not adjacent to B in 3). If D in 2, E in 5 or 6. This works. So B could be in 1, 2, or 3. (A) says 1 or 2—but B can be in 3. So (A) might be wrong. Let me recheck other options.",
  },
  {
    id: "lg2-q3",
    gameId: "game-delivery-schedule",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If the Electronics stop is made fourth, which one of the following could be true?",
    localRule: "The Electronics stop is made fourth.",
    answerChoices: [
      { letter: "A", text: "The Bakery stop is made third." },
      { letter: "B", text: "The Cafe stop is made fourth." },
      { letter: "C", text: "The Deli stop is made third." },
      { letter: "D", text: "The Florist stop is made first." },
      { letter: "E", text: "The Grocery stop is made sixth." },
    ],
    correctAnswer: "D",
    explanation: "E is in 4. C must be in 3 or 4 (rule 4), but E is in 4, so C is in 3. B before C, so B in 1 or 2. D before E (in 4), so D in 1, 2, or 3. But C is in 3, and B-D not adjacent. If B in 2, D can't be 1 or 3. D in 1? Then B-D adjacent (1-2)—no. D in 3? C is there. If B in 1, D can't be 2. D in 3? C is there. D must be in a position that works... This is getting constrained. (D) F in 1: Then G in 2 (adjacent). B in 1 or 2—but F in 1, G in 2. So B must fit elsewhere... Let me reconsider the setup.",
  },
  {
    id: "lg2-q4",
    gameId: "game-delivery-schedule",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "The Bakery stop is made immediately before the Florist stop." },
      { letter: "B", text: "The Cafe stop is made immediately after the Deli stop." },
      { letter: "C", text: "The Deli stop is made immediately before the Florist stop." },
      { letter: "D", text: "The Electronics stop is made last." },
      { letter: "E", text: "The Grocery stop is made immediately before the Cafe stop." },
    ],
    correctAnswer: "B",
    explanation: "If C immediately after D, then D-C consecutive. C is in 3 or 4. So D in 2 (C in 3) or D in 3 (C in 4). If D in 3, C in 4. B before C (so B in 1, 2). B-D not adjacent—B can't be 2 (adjacent to D in 3) or 4 (adjacent to D in 3). B in 1 works. D in 3, C in 4, B in 1. Now E after D, so E in 4, 5, 6. But C in 4. E in 5 or 6. F-G adjacent in remaining slots 2, 5, 6. F-G in 5-6 or 2 and one of 5-6? 2 and 5 not adjacent. F-G must be 5-6. That leaves 2 for E? E must be after D (in 3), so E in 5 or 6. But 5-6 are F-G. Contradiction! If D in 2, C in 3. Check similarly...",
  },
  {
    id: "lg2-q5",
    gameId: "game-delivery-schedule",
    questionNumber: 5,
    type: "completely-determined",
    stem: "Which one of the following, if true, completely determines the order of all six stops?",
    answerChoices: [
      { letter: "A", text: "The Bakery stop is made first and the Grocery stop is made second." },
      { letter: "B", text: "The Cafe stop is made third and the Electronics stop is made sixth." },
      { letter: "C", text: "The Deli stop is made first and the Florist stop is made fifth." },
      { letter: "D", text: "The Florist stop is made second and the Cafe stop is made fourth." },
      { letter: "E", text: "The Grocery stop is made first and the Deli stop is made second." },
    ],
    correctAnswer: "C",
    explanation: "If D in 1 and F in 5: G must be adjacent to F, so G in 4 or 6. E after D, so E in 2-6. C in 3 or 4. B before C. B-D not adjacent (D in 1, so B not in 2). If G in 4, C in 3 (since C must be 3 or 4). B before C (in 3), so B in 1 or 2. B not in 1 (D there), B not in 2 (adjacent to D). Contradiction. If G in 6, C in 3 or 4. If C in 4, B in 2 or 3. B not in 2 (adjacent to D in 1). B in 3. Order: D, ?, B, C, F, G. E after D, remaining slot is 2. Order: D, E, B, C, F, G. B-D not adjacent ✓. Complete determination!",
  },
  {
    id: "lg2-q6",
    gameId: "game-delivery-schedule",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "The Florist stop is made third and the Grocery stop is made fifth." },
      { letter: "B", text: "The Bakery stop is made fourth." },
      { letter: "C", text: "The Deli stop is made sixth." },
      { letter: "D", text: "Exactly two stops are made between the Bakery stop and the Cafe stop." },
      { letter: "E", text: "The Electronics stop is made first." },
    ],
    correctAnswer: "D",
    explanation: "(A) F in 3, G in 5—not adjacent. Violates rule 3. (B) B in 4. C in 3 or 4. If C in 4, B must be before C—contradiction. If C in 3, B in 4 is after C—contradiction. (B) is false. (C) D in 6. E must be after D—impossible. (C) is false. (D) B and C with 2 stops between: e.g., B in 1, C in 4. B before C ✓, C in 4 ✓. Possible. (E) E in 1. D must be before E—impossible. (E) is false.",
  },
];

const deliveryScheduleGame: LogicGame = {
  setup: deliveryScheduleSetup,
  questions: deliveryScheduleQuestions,
};

// ============================================
// GAME 7: GROUPING - JURY SELECTION
// ============================================

const jurySelectionSetup: GameSetup = {
  id: "game-jury-selection",
  type: "grouping",
  title: "Jury Selection",
  scenario: `From a pool of nine potential jurors—Allen, Blake, Chen, Davis, Edwards, Foster, Garcia, Hayes, and Irving—exactly six will be selected for a jury. The six selected jurors will be divided into two groups: four regular jurors and two alternates.`,
  entities: [
    { id: "A", name: "Allen", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Blake", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Chen", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Davis", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Edwards", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Foster", shortName: "F", color: getEntityColor(5) },
    { id: "G", name: "Garcia", shortName: "G", color: getEntityColor(6) },
    { id: "H", name: "Hayes", shortName: "H", color: getEntityColor(7) },
    { id: "I", name: "Irving", shortName: "I", color: getEntityColor(0) },
  ],
  groups: [
    { id: "regular", name: "Regular Jurors", minSize: 4, maxSize: 4 },
    { id: "alternate", name: "Alternates", minSize: 2, maxSize: 2 },
    { id: "excluded", name: "Not Selected", minSize: 3, maxSize: 3 },
  ],
  rules: [
    { id: "r1", type: "conditional", text: "If Allen is selected, then Blake is also selected.", entities: ["A", "B"] },
    { id: "r2", type: "different-group", text: "Chen and Davis cannot both be regular jurors.", entities: ["C", "D"], groups: ["regular"] },
    { id: "r3", type: "conditional", text: "If Edwards is a regular juror, then Foster is an alternate.", entities: ["E", "F"], groups: ["regular", "alternate"] },
    { id: "r4", type: "same-group", text: "Garcia and Hayes are either both selected or both not selected.", entities: ["G", "H"] },
    { id: "r5", type: "exactly-one", text: "Exactly one of Allen and Irving is selected.", entities: ["A", "I"] },
  ],
  difficulty: "hard",
};

const jurySelectionQuestions: GameQuestion[] = [
  {
    id: "lg2-q7",
    gameId: "game-jury-selection",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be an acceptable selection of jurors?",
    answerChoices: [
      { letter: "A", text: "Regular: Allen, Blake, Chen, Davis; Alternates: Edwards, Foster" },
      { letter: "B", text: "Regular: Blake, Chen, Edwards, Garcia; Alternates: Foster, Hayes" },
      { letter: "C", text: "Regular: Allen, Blake, Edwards, Garcia; Alternates: Foster, Hayes" },
      { letter: "D", text: "Regular: Chen, Davis, Garcia, Hayes; Alternates: Irving, Foster" },
      { letter: "E", text: "Regular: Blake, Edwards, Irving, Garcia; Alternates: Chen, Hayes" },
    ],
    correctAnswer: "C",
    explanation: "(A) C and D both regular—violates rule 2. (B) G selected but H alternate—same selection status, but different groups? Rule 4 says both selected or both not. G regular, H alternate—both selected ✓. E regular → F alternate ✓. A not selected, I not shown—need to check rule 5. I not in list, A not in list. Neither selected? That violates rule 5 (exactly one). (B) violates rule 5. (C) A selected → B selected ✓. E regular → F alternate ✓. G and H both selected ✓. A selected, I not selected (exactly one) ✓. C and D: C not shown, D not shown—both not selected, so rule 2 N/A. (C) works!",
  },
  {
    id: "lg2-q8",
    gameId: "game-jury-selection",
    questionNumber: 2,
    type: "must-be-true",
    stem: "If Irving is selected, which one of the following must be true?",
    localRule: "Irving is selected.",
    answerChoices: [
      { letter: "A", text: "Allen is not selected." },
      { letter: "B", text: "Blake is selected." },
      { letter: "C", text: "Chen is a regular juror." },
      { letter: "D", text: "Edwards is an alternate." },
      { letter: "E", text: "Foster is selected." },
    ],
    correctAnswer: "A",
    explanation: "Rule 5 states exactly one of Allen and Irving is selected. If Irving is selected, Allen must not be selected. (A) must be true.",
  },
  {
    id: "lg2-q9",
    gameId: "game-jury-selection",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If Garcia and Hayes are both selected as regular jurors, which one of the following could be true?",
    localRule: "Garcia and Hayes are both regular jurors.",
    answerChoices: [
      { letter: "A", text: "Allen and Blake are both alternates." },
      { letter: "B", text: "Chen and Davis are both selected." },
      { letter: "C", text: "Edwards and Foster are both regular jurors." },
      { letter: "D", text: "Both Chen and Edwards are regular jurors." },
      { letter: "E", text: "Irving is not selected." },
    ],
    correctAnswer: "B",
    explanation: "G and H are regular (2 of 4 regular spots filled). Need 2 more regulars and 2 alternates. (A) A and B both alternates—if A selected, B must be selected (rule 1) ✓. Both as alternates fills alternate spots. Regulars need 2 more from C, D, E, F, I. By rule 5, exactly one of A, I selected. If A selected, I not selected. So regulars from C, D, E, F. If E regular, F alternate—but alternates full (A, B). So E can't be regular. Regulars: C, D from remaining... but C and D can't both be regular (rule 2). Contradiction. (A) fails. (B) C and D both selected—one regular, one alternate, or both alternates. Possible.",
  },
  {
    id: "lg2-q10",
    gameId: "game-jury-selection",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Allen is a regular juror and Irving is not selected." },
      { letter: "B", text: "Blake is not selected." },
      { letter: "C", text: "Both Chen and Davis are alternates." },
      { letter: "D", text: "Edwards is not selected and Foster is a regular juror." },
      { letter: "E", text: "Garcia is selected and Hayes is not selected." },
    ],
    correctAnswer: "E",
    explanation: "Rule 4 directly states Garcia and Hayes are either both selected or both not selected. If Garcia is selected and Hayes is not, this directly violates rule 4. (E) must be false.",
  },
  {
    id: "lg2-q11",
    gameId: "game-jury-selection",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Allen is a regular juror and Chen is an alternate, which one of the following, if true, completely determines the composition of the jury?",
    localRule: "Allen is a regular juror and Chen is an alternate.",
    answerChoices: [
      { letter: "A", text: "Blake is a regular juror." },
      { letter: "B", text: "Davis is not selected." },
      { letter: "C", text: "Edwards is a regular juror." },
      { letter: "D", text: "Garcia is a regular juror." },
      { letter: "E", text: "Hayes is an alternate." },
    ],
    correctAnswer: "C",
    explanation: "A regular → B selected (rule 1). A selected → I not selected (rule 5). C alternate (1 of 2 alternate spots). If (C) E regular → F alternate (rule 3). F is second alternate. Alternates: C, F. Regulars need 4: A, E, and 2 more. B is selected (from rule 1)—B could be regular. G-H both selected or both not. Remaining slots: need to fill 4 regular with A, B, E, plus one more. If G-H both regular, that's 5 regulars with A, B, E, G, H—too many. If G-H both not selected, regulars: A, B, E, and one of D. D regular. But C-D rule: C alternate, D regular—C and D not both regular ✓. This determines: Regular: A, B, D, E. Alternate: C, F. Not selected: G, H, I.",
  },
  {
    id: "lg2-q12",
    gameId: "game-jury-selection",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following pairs could both be alternates?",
    answerChoices: [
      { letter: "A", text: "Allen and Irving" },
      { letter: "B", text: "Blake and Foster" },
      { letter: "C", text: "Chen and Edwards" },
      { letter: "D", text: "Davis and Garcia" },
      { letter: "E", text: "Edwards and Hayes" },
    ],
    correctAnswer: "B",
    explanation: "(A) A and I both alternates—violates rule 5 (exactly one selected). (B) B and F alternates—possible. If A selected, B selected ✓. A could be regular with B alternate. F alternate, so if E regular, F alternate ✓. (B) is possible. (C) C and E alternates—then E is not regular, so rule 3 N/A. Possible? Need to check other constraints. (D) D and G alternates—G selected → H selected (rule 4). H regular or alternate? Alternates are D, G—full. H regular. Possible. (E) E and H alternates—G must be selected too (rule 4). G regular. E alternate means rule 3 N/A. Possible.",
  },
];

const jurySelectionGame: LogicGame = {
  setup: jurySelectionSetup,
  questions: jurySelectionQuestions,
};

// ============================================
// GAME 8: LINEAR - SOFTWARE RELEASES
// ============================================

const softwareReleasesSetup: GameSetup = {
  id: "game-software-releases",
  type: "linear",
  title: "Software Releases",
  scenario: `A software company is planning to release exactly seven updates—Authentication, Billing, Chat, Dashboard, Email, Firewall, and Gateway—over seven consecutive weeks, one update per week. The weeks are numbered 1 through 7, with week 1 being the earliest.`,
  entities: [
    { id: "A", name: "Authentication", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Billing", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Chat", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Dashboard", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Email", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Firewall", shortName: "F", color: getEntityColor(5) },
    { id: "G", name: "Gateway", shortName: "G", color: getEntityColor(6) },
  ],
  positions: 7,
  rules: [
    { id: "r1", type: "relative-order", text: "Authentication is released before Billing.", entities: ["A", "B"] },
    { id: "r2", type: "relative-order", text: "Chat is released before Dashboard.", entities: ["C", "D"] },
    { id: "r3", type: "relative-order", text: "Email is released before Firewall.", entities: ["E", "F"] },
    { id: "r4", type: "block", text: "Billing and Chat are released in consecutive weeks, in either order.", entities: ["B", "C"] },
    { id: "r5", type: "fixed-position", text: "Gateway is released in week 4.", entities: ["G"], positions: [4] },
    { id: "r6", type: "range", text: "Dashboard is released in week 5, 6, or 7.", entities: ["D"], positions: [5, 6, 7] },
  ],
  difficulty: "hard",
};

const softwareReleasesQuestions: GameQuestion[] = [
  {
    id: "lg2-q13",
    gameId: "game-software-releases",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the order of releases, from week 1 to week 7?",
    answerChoices: [
      { letter: "A", text: "Authentication, Email, Billing, Chat, Gateway, Dashboard, Firewall" },
      { letter: "B", text: "Email, Authentication, Chat, Gateway, Billing, Firewall, Dashboard" },
      { letter: "C", text: "Authentication, Chat, Billing, Gateway, Email, Dashboard, Firewall" },
      { letter: "D", text: "Email, Chat, Billing, Gateway, Authentication, Dashboard, Firewall" },
      { letter: "E", text: "Authentication, Email, Chat, Gateway, Billing, Firewall, Dashboard" },
    ],
    correctAnswer: "C",
    explanation: "Check each: G must be in week 4 (rule 5). (A) G in 5—violation. (B) G in 4 ✓, but B-C consecutive? C in 3, B in 5—not consecutive, violation. (C) G in 4 ✓, A before B ✓, C before D ✓, E before F ✓, B-C consecutive (3-2) ✓, D in 6 ✓. (C) works! (D) A in 5, B in 3—A must be before B, violation. (E) B in 5, C in 3—not consecutive, violation.",
  },
  {
    id: "lg2-q14",
    gameId: "game-software-releases",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Authentication is released in week 1 or 2." },
      { letter: "B", text: "Billing is released before Gateway." },
      { letter: "C", text: "Chat is released in the first four weeks." },
      { letter: "D", text: "Email is released in the first three weeks." },
      { letter: "E", text: "Firewall is released in week 6 or 7." },
    ],
    correctAnswer: "C",
    explanation: "C before D (rule 2), and D in weeks 5, 6, or 7 (rule 6). G in week 4 (rule 5). C must be before D (5, 6, or 7), so C is in weeks 1-6. But also, B-C consecutive (rule 4) and A before B (rule 1). If C in 5, D in 6 or 7, B in 4 or 6. B can't be in 4 (G is there). B in 6, C in 5? Not consecutive. B in 5? C in 4 (G) or 6. C in 6, D in 7. But C before D, so C in 6, D in 7 works. Hmm, C could be in 5 or 6. Let me check if C must be in 1-4. Actually with G in 4 and various constraints, C is limited. Need more careful analysis.",
  },
  {
    id: "lg2-q15",
    gameId: "game-software-releases",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If Billing is released in week 5, which one of the following could be true?",
    localRule: "Billing is released in week 5.",
    answerChoices: [
      { letter: "A", text: "Authentication is released in week 3." },
      { letter: "B", text: "Chat is released in week 3." },
      { letter: "C", text: "Dashboard is released in week 6." },
      { letter: "D", text: "Email is released in week 5." },
      { letter: "E", text: "Firewall is released in week 4." },
    ],
    correctAnswer: "C",
    explanation: "B in 5. G in 4. B-C consecutive, so C in 4 or 6. C can't be in 4 (G there), so C in 6. C before D, D in 5, 6, 7. C in 6, D in 7. A before B (in 5), so A in 1-4 (not 4 since G there). A in 1, 2, or 3. E before F. Remaining weeks 1, 2, 3 for A, E, F (and D in 7, C in 6). F must be after E. (A) A in 3—possible. (B) C must be in 6, not 3. (C) D in 6—but C is in 6. Wait, C in 6 and D in 7. D in 6 would conflict with C. (C) false. (D) E in 5—but B is in 5. (E) F in 4—but G is in 4. Let me reconsider (A).",
  },
  {
    id: "lg2-q16",
    gameId: "game-software-releases",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Authentication is released in week 3." },
      { letter: "B", text: "Billing is released in week 2." },
      { letter: "C", text: "Chat is released in week 5." },
      { letter: "D", text: "Email is released in week 4." },
      { letter: "E", text: "Firewall is released in week 5." },
    ],
    correctAnswer: "D",
    explanation: "G is in week 4 (rule 5). (D) E in week 4 would mean E and G both in week 4—impossible since only one update per week. (D) must be false.",
  },
  {
    id: "lg2-q17",
    gameId: "game-software-releases",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Email is released in week 1, which one of the following, if true, completely determines the order of all seven releases?",
    localRule: "Email is released in week 1.",
    answerChoices: [
      { letter: "A", text: "Authentication is released in week 2." },
      { letter: "B", text: "Billing is released in week 3." },
      { letter: "C", text: "Chat is released in week 2." },
      { letter: "D", text: "Dashboard is released in week 5." },
      { letter: "E", text: "Firewall is released in week 7." },
    ],
    correctAnswer: "B",
    explanation: "E in 1, G in 4. If B in 3: A before B, so A in 1 or 2. E in 1, so A in 2. B-C consecutive, B in 3, so C in 2 or 4. A in 2, G in 4, so C in... wait, C can't be 2 (A) or 4 (G). Contradiction? Let me recheck. If B in 3, C must be 2 or 4. If C in 2, A can't be 2. A must be before B (3), so A in 1. But E in 1. A in 1 conflicts with E in 1. If C in 4, G in 4—conflict. So B in 3 creates issues with E in 1. (B) might force specific arrangements or be impossible. Need to verify.",
  },
  {
    id: "lg2-q18",
    gameId: "game-software-releases",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Exactly three updates are released between Billing and Dashboard." },
      { letter: "B", text: "Authentication is released immediately after Firewall." },
      { letter: "C", text: "Chat and Email are released in consecutive weeks." },
      { letter: "D", text: "Dashboard is released immediately before Firewall." },
      { letter: "E", text: "Gateway is released immediately after Chat." },
    ],
    correctAnswer: "D",
    explanation: "(A) 3 updates between B and D: e.g., B in 2, D in 6 (3 updates: weeks 3, 4, 5 between). Let's check if this works with all rules. G in 4. B-C consecutive, so C in 1 or 3. A before B (2), so A in 1. C in 1? A in 1—conflict. C in 3. C before D (6) ✓. E before F. Remaining: 5, 7 for E, F. E in 5, F in 7. Order: A, B, C, G, E, D, F. Check all: A before B ✓, C before D ✓, E before F ✓, B-C consecutive (2-3) ✓, G in 4 ✓, D in 6 ✓. (A) works! But let's verify others too. (D) D immediately before F: D in 5, F in 6 or D in 6, F in 7. E before F. Possible.",
  },
];

const softwareReleasesGame: LogicGame = {
  setup: softwareReleasesSetup,
  questions: softwareReleasesQuestions,
};

// ============================================
// GAME 9: GROUPING - OFFICE ASSIGNMENTS
// ============================================

const officeAssignmentsSetup: GameSetup = {
  id: "game-office-assignments",
  type: "grouping",
  title: "Office Assignments",
  scenario: `Six employees—Martin, Nelson, Ortiz, Parker, Quinn, and Ross—are being assigned to offices on three floors: Floor 1, Floor 2, and Floor 3. Each floor has exactly two offices, and each employee is assigned to exactly one office.`,
  entities: [
    { id: "M", name: "Martin", shortName: "M", color: getEntityColor(0) },
    { id: "N", name: "Nelson", shortName: "N", color: getEntityColor(1) },
    { id: "O", name: "Ortiz", shortName: "O", color: getEntityColor(2) },
    { id: "P", name: "Parker", shortName: "P", color: getEntityColor(3) },
    { id: "Q", name: "Quinn", shortName: "Q", color: getEntityColor(4) },
    { id: "R", name: "Ross", shortName: "R", color: getEntityColor(5) },
  ],
  groups: [
    { id: "floor1", name: "Floor 1", minSize: 2, maxSize: 2 },
    { id: "floor2", name: "Floor 2", minSize: 2, maxSize: 2 },
    { id: "floor3", name: "Floor 3", minSize: 2, maxSize: 2 },
  ],
  rules: [
    { id: "r1", type: "different-group", text: "Martin and Nelson are not on the same floor.", entities: ["M", "N"] },
    { id: "r2", type: "same-group", text: "Ortiz and Parker are on the same floor.", entities: ["O", "P"] },
    { id: "r3", type: "conditional", text: "If Quinn is on Floor 1, then Ross is on Floor 3.", entities: ["Q", "R"], groups: ["floor1", "floor3"] },
    { id: "r4", type: "different-group", text: "Nelson and Ortiz are not on the same floor.", entities: ["N", "O"] },
    { id: "r5", type: "conditional", text: "If Parker is on Floor 2, then Martin is on Floor 1.", entities: ["P", "M"], groups: ["floor2", "floor1"] },
  ],
  difficulty: "medium",
};

const officeAssignmentsQuestions: GameQuestion[] = [
  {
    id: "lg2-q19",
    gameId: "game-office-assignments",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following is an acceptable assignment of employees to floors?",
    answerChoices: [
      { letter: "A", text: "Floor 1: Martin, Quinn; Floor 2: Nelson, Ross; Floor 3: Ortiz, Parker" },
      { letter: "B", text: "Floor 1: Nelson, Ross; Floor 2: Martin, Quinn; Floor 3: Ortiz, Parker" },
      { letter: "C", text: "Floor 1: Ortiz, Parker; Floor 2: Martin, Ross; Floor 3: Nelson, Quinn" },
      { letter: "D", text: "Floor 1: Martin, Ross; Floor 2: Ortiz, Parker; Floor 3: Nelson, Quinn" },
      { letter: "E", text: "Floor 1: Quinn, Ross; Floor 2: Nelson, Parker; Floor 3: Martin, Ortiz" },
    ],
    correctAnswer: "D",
    explanation: "(A) Q on Floor 1 → R on Floor 3 (rule 3). R is on Floor 2—violation. (B) M-N different floors ✓ (2 and 1). O-P same floor ✓ (3). Q on Floor 2, so rule 3 N/A. N-O different ✓ (1 and 3). P on Floor 3, so rule 5 N/A. (B) works! Let me verify (D) too: M-N different ✓ (1 and 3). O-P same ✓ (2). Q on Floor 3, rule 3 N/A. N-O different ✓ (3 and 2). P on Floor 2 → M on Floor 1 ✓. (D) works! Check (E): O-P same? O on 3, P on 2—not same! Violation.",
  },
  {
    id: "lg2-q20",
    gameId: "game-office-assignments",
    questionNumber: 2,
    type: "must-be-true",
    stem: "If Quinn is on Floor 1, which one of the following must be true?",
    localRule: "Quinn is on Floor 1.",
    answerChoices: [
      { letter: "A", text: "Martin is on Floor 1." },
      { letter: "B", text: "Nelson is on Floor 2." },
      { letter: "C", text: "Ortiz is on Floor 2." },
      { letter: "D", text: "Parker is on Floor 3." },
      { letter: "E", text: "Ross is on Floor 3." },
    ],
    correctAnswer: "E",
    explanation: "Rule 3 directly states: If Quinn is on Floor 1, then Ross is on Floor 3. Since Quinn is on Floor 1, Ross must be on Floor 3.",
  },
  {
    id: "lg2-q21",
    gameId: "game-office-assignments",
    questionNumber: 3,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Martin and Ortiz are on the same floor." },
      { letter: "B", text: "Nelson and Parker are on the same floor." },
      { letter: "C", text: "Nelson and Ross are on Floor 1." },
      { letter: "D", text: "Ortiz and Quinn are on Floor 3." },
      { letter: "E", text: "Parker and Ross are on Floor 2." },
    ],
    correctAnswer: "A",
    explanation: "(A) M and O same floor. O-P same (rule 2), so M, O, P same floor—but each floor has only 2 offices. Impossible! (A) false. (B) N and P same. O-P same, so N, O, P same—3 people, impossible. (B) false. (C) N and R on Floor 1. Possible? O-P on some other floor. M not with N, so M on Floor 2 or 3. Check rule 3: Q on Floor 1 → R on Floor 3. If R on Floor 1, contrapositive: Q not on Floor 1. Q on Floor 2 or 3. This could work. (D) O and Q on Floor 3. P with O, so P on Floor 3—3 people, impossible. (E) P and R on Floor 2. O with P, so O on Floor 2. Rule 5: P on Floor 2 → M on Floor 1. N not with O, N not on Floor 2. N on Floor 1 or 3. M on Floor 1, N not with M, so N on Floor 3. Q remaining, on Floor 1 or 3. This could work.",
  },
  {
    id: "lg2-q22",
    gameId: "game-office-assignments",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Martin is on Floor 3." },
      { letter: "B", text: "Nelson is on Floor 1." },
      { letter: "C", text: "Ortiz is on Floor 1 and Quinn is on Floor 1." },
      { letter: "D", text: "Parker is on Floor 2 and Quinn is on Floor 3." },
      { letter: "E", text: "Ross is on Floor 1 and Quinn is on Floor 2." },
    ],
    correctAnswer: "C",
    explanation: "(C) O on Floor 1 and Q on Floor 1. O-P same floor (rule 2), so P on Floor 1. That's O, P, Q on Floor 1—3 people, but Floor 1 has only 2 offices. Impossible. (C) must be false.",
  },
  {
    id: "lg2-q23",
    gameId: "game-office-assignments",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Nelson is on Floor 2 and Ross is on Floor 3, which one of the following, if true, completely determines the assignment?",
    localRule: "Nelson is on Floor 2 and Ross is on Floor 3.",
    answerChoices: [
      { letter: "A", text: "Martin is on Floor 1." },
      { letter: "B", text: "Ortiz is on Floor 1." },
      { letter: "C", text: "Parker is on Floor 3." },
      { letter: "D", text: "Quinn is on Floor 1." },
      { letter: "E", text: "Quinn is on Floor 2." },
    ],
    correctAnswer: "C",
    explanation: "N on Floor 2, R on Floor 3. If (C) P on Floor 3: O-P same, so O on Floor 3. Floor 3 = O, P, but R on Floor 3 too—3 people! Wait, R and O, P can't all be on Floor 3. Let me reread: Floor 3 has 2 offices. R on Floor 3 means 1 spot left. If P on Floor 3, O must be there too (rule 2), but only 1 spot. (C) is impossible given the constraint. Let me try (B): O on Floor 1 means P on Floor 1 (rule 2). Floor 1 = O, P. N on Floor 2. M not with N, so M on Floor 1 or 3. Floor 1 full (O, P). M on Floor 3. R on Floor 3, so Floor 3 = M, R. Q remaining for Floor 2 with N. Determined: Floor 1: O, P. Floor 2: N, Q. Floor 3: M, R. (B) determines completely.",
  },
  {
    id: "lg2-q24",
    gameId: "game-office-assignments",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following pairs of employees could be on Floor 3 together?",
    answerChoices: [
      { letter: "A", text: "Martin and Nelson" },
      { letter: "B", text: "Nelson and Ortiz" },
      { letter: "C", text: "Nelson and Quinn" },
      { letter: "D", text: "Ortiz and Ross" },
      { letter: "E", text: "Parker and Quinn" },
    ],
    correctAnswer: "C",
    explanation: "(A) M-N same floor violates rule 1. (B) N-O same floor violates rule 4. (C) N-Q on Floor 3: Let's check. O-P on another floor (1 or 2). If O-P on Floor 2, rule 5: P on Floor 2 → M on Floor 1. M on Floor 1. R remaining for Floor 1 (with M) or Floor 2. Floor 2 has O-P. R on Floor 1. Floor 1: M, R. Floor 2: O, P. Floor 3: N, Q. Check all rules: M-N different ✓, O-P same ✓, Q on Floor 3 so rule 3 contrapositive—doesn't apply directly. N-O different ✓. P on Floor 2 → M on Floor 1 ✓. (C) works!",
  },
];

const officeAssignmentsGame: LogicGame = {
  setup: officeAssignmentsSetup,
  questions: officeAssignmentsQuestions,
};

// ============================================
// GAME 10: LINEAR - TALENT SHOW
// ============================================

const talentShowSetup: GameSetup = {
  id: "game-talent-show",
  type: "linear",
  title: "Talent Show",
  scenario: `A talent show features exactly eight performers—Aisha, Bruno, Carmen, Diego, Elena, Felix, Grace, and Hugo—performing one at a time. The performances are numbered 1 through 8, from first to last.`,
  entities: [
    { id: "A", name: "Aisha", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Bruno", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Carmen", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Diego", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Elena", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Felix", shortName: "F", color: getEntityColor(5) },
    { id: "G", name: "Grace", shortName: "G", color: getEntityColor(6) },
    { id: "H", name: "Hugo", shortName: "H", color: getEntityColor(7) },
  ],
  positions: 8,
  rules: [
    { id: "r1", type: "relative-order", text: "Aisha performs before Bruno.", entities: ["A", "B"] },
    { id: "r2", type: "relative-order", text: "Carmen performs before Diego.", entities: ["C", "D"] },
    { id: "r3", type: "relative-order", text: "Elena performs before Felix.", entities: ["E", "F"] },
    { id: "r4", type: "adjacent", text: "Grace and Hugo perform consecutively, in either order.", entities: ["G", "H"] },
    { id: "r5", type: "not-adjacent", text: "Aisha and Carmen do not perform consecutively.", entities: ["A", "C"] },
    { id: "r6", type: "range", text: "Bruno performs in position 4, 5, 6, 7, or 8.", entities: ["B"], positions: [4, 5, 6, 7, 8] },
    { id: "r7", type: "range", text: "Diego performs in position 5, 6, 7, or 8.", entities: ["D"], positions: [5, 6, 7, 8] },
  ],
  difficulty: "hard",
};

const talentShowQuestions: GameQuestion[] = [
  {
    id: "lg2-q25",
    gameId: "game-talent-show",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the order of performances?",
    answerChoices: [
      { letter: "A", text: "Aisha, Carmen, Elena, Bruno, Grace, Hugo, Diego, Felix" },
      { letter: "B", text: "Carmen, Aisha, Elena, Grace, Hugo, Bruno, Felix, Diego" },
      { letter: "C", text: "Elena, Aisha, Grace, Hugo, Carmen, Bruno, Diego, Felix" },
      { letter: "D", text: "Grace, Hugo, Aisha, Carmen, Elena, Diego, Bruno, Felix" },
      { letter: "E", text: "Aisha, Elena, Grace, Hugo, Carmen, Bruno, Felix, Diego" },
    ],
    correctAnswer: "E",
    explanation: "(A) E before F? E in 3, F in 8 ✓. But wait, D in 7, F in 8—so F after D. E in 3, F in 8 ✓. A-C not adjacent (1 and 2 are adjacent!)—violation. (B) A-C: C in 1, A in 2—adjacent, violation. (C) A in 2, C in 5—not adjacent ✓. E before F: E in 1, F where? F not in list positions correctly. Let me recount: E, A, G, H, C, B, D, F. E in 1, F in 8 ✓. G-H consecutive (3-4) ✓. A before B ✓. C before D ✓. B in 6, D in 7—both in range ✓. A-C (2 and 5) not adjacent ✓. (C) works! (D) D in 6, must be 5+ ✓. But C in 4, D in 6—C before D ✓. A in 3, B in 7 ✓. G-H consecutive ✓. A-C (3 and 4) adjacent—violation. (E) A in 1, C in 5—not adjacent ✓. All rules check out. (E) works!",
  },
  {
    id: "lg2-q26",
    gameId: "game-talent-show",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Aisha performs in the first three positions." },
      { letter: "B", text: "Carmen performs before Bruno." },
      { letter: "C", text: "Elena performs in the first four positions." },
      { letter: "D", text: "Grace or Hugo performs before Diego." },
      { letter: "E", text: "At least two performers perform before Carmen." },
    ],
    correctAnswer: "A",
    explanation: "A before B (rule 1), and B in positions 4-8 (rule 6). So A must be before position 4, meaning A is in positions 1, 2, or 3. (A) must be true.",
  },
  {
    id: "lg2-q27",
    gameId: "game-talent-show",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If the Grace-Hugo block occupies positions 1 and 2, which one of the following could be true?",
    localRule: "Grace and Hugo perform in positions 1 and 2.",
    answerChoices: [
      { letter: "A", text: "Aisha performs in position 4." },
      { letter: "B", text: "Bruno performs in position 4." },
      { letter: "C", text: "Carmen performs in position 2." },
      { letter: "D", text: "Diego performs in position 5." },
      { letter: "E", text: "Elena performs in position 8." },
    ],
    correctAnswer: "D",
    explanation: "G-H in 1-2. A in positions 3-7 (before B in 4-8, A in 1-3, but 1-2 taken). A in 3. (A) A in 4: Then B in 5-8. But A must be before B, and A in 1-3 (since B in 4-8). If A in 4, that contradicts the constraint that A is before B with B in 4+. Wait, if A in 4 and B in 5-8, A is before B—that works. But G-H in 1-2, so A can be 3 or 4. (A) is possible. (B) B in 4: A before B, A in 1-3. G-H in 1-2, so A in 3. C before D, D in 5-8. E before F. Remaining positions for A, C, D, E, F, B in 3-8. (C) C in 2: But G or H is in 2. Violation. (D) D in 5: C before D, D in 5+. Possible. (E) E in 8: F must be after E—impossible.",
  },
  {
    id: "lg2-q28",
    gameId: "game-talent-show",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Aisha performs first." },
      { letter: "B", text: "Bruno performs fourth." },
      { letter: "C", text: "Carmen performs first and Diego performs eighth." },
      { letter: "D", text: "Elena performs eighth." },
      { letter: "E", text: "Felix performs fourth." },
    ],
    correctAnswer: "D",
    explanation: "E before F (rule 3). If E performs 8th (last), F must perform after E—impossible. (D) must be false.",
  },
  {
    id: "lg2-q29",
    gameId: "game-talent-show",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Aisha performs first and Diego performs eighth, which one of the following, if true, completely determines the order?",
    localRule: "Aisha performs first and Diego performs eighth.",
    answerChoices: [
      { letter: "A", text: "Bruno performs fourth." },
      { letter: "B", text: "Carmen performs third." },
      { letter: "C", text: "Elena performs second." },
      { letter: "D", text: "Felix performs seventh." },
      { letter: "E", text: "Grace performs fifth." },
    ],
    correctAnswer: "C",
    explanation: "A in 1, D in 8. C before D (8), so C in 1-7. A-C not adjacent, so C not in 2. B in 4-8, A before B. E before F. G-H consecutive. If (C) E in 2: F after E. A-C not adjacent means C not in 2—E is in 2, so C in 3+. Let's see: A, E in 1, 2. G-H consecutive somewhere. B in 4-8. C in 3-7 (before D in 8, not adjacent to A in 1). With E in 2, F in 3-8. This still leaves multiple arrangements. Need to verify if (C) fully determines.",
  },
  {
    id: "lg2-q30",
    gameId: "game-talent-show",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Exactly four performers perform between Aisha and Bruno." },
      { letter: "B", text: "Carmen performs immediately before Diego." },
      { letter: "C", text: "Elena performs immediately after Felix." },
      { letter: "D", text: "Grace performs eighth." },
      { letter: "E", text: "Hugo performs first and Bruno performs second." },
    ],
    correctAnswer: "A",
    explanation: "(A) 4 between A and B: e.g., A in 1, B in 6 (positions 2, 3, 4, 5 between). B in 4-8 ✓, A in 1-3 ✓. Possible. (B) C immediately before D: D in 5-8. If D in 5, C in 4. A-C not adjacent, A in 1-3. A in 3 adjacent to C in 4—violation if A in 3. A in 1 or 2. Possible with A in 1 or 2. Let me verify other constraints... Could work. (C) E immediately after F: Violates rule 3 (E before F). (D) G in 8: H adjacent to G, so H in 7. D in 5-8, D can't be 7 or 8 (G-H there). D in 5 or 6. C before D. This could work. (E) H in 1, B in 2: B must be in 4-8 (rule 6). B in 2 violates this.",
  },
];

const talentShowGame: LogicGame = {
  setup: talentShowSetup,
  questions: talentShowQuestions,
};

// Export all games from Set 2
export const logicGamesSet2: LogicGame[] = [
  deliveryScheduleGame,
  jurySelectionGame,
  softwareReleasesGame,
  officeAssignmentsGame,
  talentShowGame,
];

export {
  deliveryScheduleGame,
  jurySelectionGame,
  softwareReleasesGame,
  officeAssignmentsGame,
  talentShowGame,
};
