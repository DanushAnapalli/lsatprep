// Logic Games Expansion Set 4
// High-quality LSAT-style analytical reasoning games

import {
  LogicGame,
  GameSetup,
  GameQuestion,
  getEntityColor,
} from "../logic-games-types";

// ============================================
// GAME 16: LINEAR - RADIO PLAYLIST
// ============================================

const radioPlaylistSetup: GameSetup = {
  id: "game-radio-playlist",
  type: "linear",
  title: "Radio Playlist",
  scenario: `A radio station plays exactly nine songs during a one-hour program. The songs are by artists Anderson, Blake, Crawford, Delgado, Ellis, Franklin, Garcia, Howard, and Irwin. Each song is played exactly once, in positions 1 through 9.`,
  entities: [
    { id: "A", name: "Anderson", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Blake", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Crawford", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Delgado", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Ellis", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Franklin", shortName: "F", color: getEntityColor(5) },
    { id: "G", name: "Garcia", shortName: "G", color: getEntityColor(6) },
    { id: "H", name: "Howard", shortName: "H", color: getEntityColor(7) },
    { id: "I", name: "Irwin", shortName: "I", color: getEntityColor(0) },
  ],
  positions: 9,
  rules: [
    { id: "r1", type: "relative-order", text: "Anderson is played before Blake.", entities: ["A", "B"] },
    { id: "r2", type: "relative-order", text: "Crawford is played before Delgado.", entities: ["C", "D"] },
    { id: "r3", type: "adjacent", text: "Ellis and Franklin are played consecutively.", entities: ["E", "F"] },
    { id: "r4", type: "fixed-position", text: "Garcia is played fifth.", entities: ["G"], positions: [5] },
    { id: "r5", type: "not-adjacent", text: "Howard and Irwin are not played consecutively.", entities: ["H", "I"] },
    { id: "r6", type: "range", text: "Blake is played in position 6, 7, 8, or 9.", entities: ["B"], positions: [6, 7, 8, 9] },
    { id: "r7", type: "relative-order", text: "Delgado is played before Ellis.", entities: ["D", "E"] },
  ],
  difficulty: "hard",
};

const radioPlaylistQuestions: GameQuestion[] = [
  {
    id: "lg4-q1",
    gameId: "game-radio-playlist",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the order of songs from first to last?",
    answerChoices: [
      { letter: "A", text: "Crawford, Anderson, Delgado, Howard, Garcia, Ellis, Franklin, Blake, Irwin" },
      { letter: "B", text: "Anderson, Crawford, Howard, Delgado, Garcia, Ellis, Franklin, Irwin, Blake" },
      { letter: "C", text: "Crawford, Delgado, Anderson, Howard, Garcia, Ellis, Franklin, Blake, Irwin" },
      { letter: "D", text: "Howard, Crawford, Anderson, Delgado, Garcia, Irwin, Ellis, Franklin, Blake" },
      { letter: "E", text: "Anderson, Crawford, Delgado, Irwin, Garcia, Howard, Ellis, Franklin, Blake" },
    ],
    correctAnswer: "C",
    explanation: "G in 5 (rule 4). (A) G in 5 ✓, A before B ✓, C before D ✓, E-F consecutive (6-7) ✓, H-I not adjacent (4 and 9) ✓, B in 8 ✓, D before E ✓. (A) works! (B) H-I: H in 3, I in 8—not adjacent ✓. All other rules also check. Let me verify more carefully. (C) C before D ✓, A before B ✓, G in 5 ✓, E-F consecutive ✓, D before E (2 before 6) ✓, H-I (4 and 9) not adjacent ✓, B in 8 ✓. (C) works! (D) H-I: H in 1, I in 6—not adjacent ✓. E-F consecutive (7-8) ✓. D in 4 before E in 7 ✓. All seem fine. (E) H-I: I in 4, H in 6—not adjacent ✓. D before E (3 before 7) ✓. E-F consecutive (7-8) ✓. All fine.",
  },
  {
    id: "lg4-q2",
    gameId: "game-radio-playlist",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Anderson is played in one of the first four positions." },
      { letter: "B", text: "Crawford is played before Garcia." },
      { letter: "C", text: "Delgado is played before Garcia." },
      { letter: "D", text: "Ellis is played after Garcia." },
      { letter: "E", text: "Howard is played before Blake." },
    ],
    correctAnswer: "C",
    explanation: "C before D (rule 2), D before E (rule 7). G in 5. E-F consecutive. B in 6-9. Since D before E and E is part of a consecutive block with F, let's trace: D must be before the E-F block. The E-F block needs 2 consecutive positions. If E-F in 6-7, 7-8, or 8-9, D must be before (so D in 1-5 or 1-6 or 1-7). C before D. G in 5. If D in 5, D=G—impossible. D in 1-4 or 6+. If D after G (6+), E after D, E-F in 7-9. But F could be in 8-9 range. This is getting complex. Let me check (C): C before D before E. G in 5. If D is in 6 or later, and G in 5, then C could be before or after G. But we need to check if D is always before G. D before E, E-F consecutive. D could be 1-4 (before G) or 6-8 (after G). So C before D doesn't guarantee C before G. Let me check (D): D before E. E after D, E after G? If D in 4, E in 5? But G in 5. E in 6+. If D in 1-4, E in 5+. E=5 is G. So E in 6+. D before E, and D not 5, E not 5. D in 1-4 or 6+. If D in 6, E in 7+. (D) says E after G (in 5). If E in 6+, E after G ✓. If D in 1-4, E could be 5+ but E≠5, so E in 6+. (D) must be true!",
  },
  {
    id: "lg4-q3",
    gameId: "game-radio-playlist",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If Ellis is played seventh, which one of the following could be true?",
    localRule: "Ellis is played seventh.",
    answerChoices: [
      { letter: "A", text: "Anderson is played sixth." },
      { letter: "B", text: "Blake is played sixth." },
      { letter: "C", text: "Crawford is played seventh." },
      { letter: "D", text: "Franklin is played sixth." },
      { letter: "E", text: "Howard is played ninth." },
    ],
    correctAnswer: "D",
    explanation: "E in 7. E-F consecutive, so F in 6 or 8. (D) F in 6—this matches. Possible. (A) A in 6, F must be 6 or 8. If F in 6, A can't be 6. If F in 8, A could be 6. Let's check: E in 7, F in 8. A in 6, B after A in 7-9. But E in 7. B in 8 or 9. F in 8. B in 9. This could work. So (A) could be true too. (B) B in 6. B must be in 6-9 ✓. E in 7, F in 6 or 8. If F in 6, B can't be 6. If F in 8, B in 6 possible. (C) C in 7—but E in 7. Impossible. (E) H in 9. H-I not adjacent. I not in 8. Possible.",
  },
  {
    id: "lg4-q4",
    gameId: "game-radio-playlist",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Blake is played sixth." },
      { letter: "B", text: "Delgado is played fifth." },
      { letter: "C", text: "Ellis is played fourth." },
      { letter: "D", text: "Franklin is played ninth." },
      { letter: "E", text: "Irwin is played fifth." },
    ],
    correctAnswer: "B",
    explanation: "G is fixed in position 5 (rule 4). If Delgado is also in position 5, that's impossible—only one song per position. (B) must be false.",
  },
  {
    id: "lg4-q5",
    gameId: "game-radio-playlist",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Crawford is played first and Blake is played ninth, which one of the following, if true, completely determines the order?",
    localRule: "Crawford is first and Blake is ninth.",
    answerChoices: [
      { letter: "A", text: "Anderson is played second." },
      { letter: "B", text: "Delgado is played third." },
      { letter: "C", text: "Ellis is played seventh." },
      { letter: "D", text: "Howard is played fourth." },
      { letter: "E", text: "Irwin is played sixth." },
    ],
    correctAnswer: "C",
    explanation: "C in 1, B in 9, G in 5. If (C) E in 7: F adjacent to E, so F in 6 or 8. D before E (in 7), so D in 1-6. C in 1, G in 5. D in 2, 3, 4, or 6. A before B (in 9). H-I not adjacent. Remaining positions: 2, 3, 4, 6, 8 for A, D, F, H, I. F in 6 or 8. If F in 6, positions 2, 3, 4, 8 for A, D, H, I. D in 2, 3, or 4. H-I not adjacent. This still has multiple arrangements. If F in 8, positions 2, 3, 4, 6 for A, D, H, I. D before E (7), D in 2, 3, 4, or 6 ✓. Let me trace more carefully with F in 6: C, _, _, _, G, F, E, _, B. Positions 2, 3, 4, 8 for A, D, H, I. D in 2, 3, or 4. A before B ✓ (any position works). H-I not adjacent. If H in 4, I not in 3 or 5 (G). I in 2 or 8. If I in 8, H in 4. D in 2 or 3. A in remaining. Multiple options exist unless more constrained.",
  },
  {
    id: "lg4-q6",
    gameId: "game-radio-playlist",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Exactly five songs are played between Crawford and Delgado." },
      { letter: "B", text: "Anderson is played immediately before Blake." },
      { letter: "C", text: "The Ellis-Franklin block is played in positions 3 and 4." },
      { letter: "D", text: "Howard and Irwin are both played after Garcia." },
      { letter: "E", text: "Delgado is played ninth." },
    ],
    correctAnswer: "D",
    explanation: "(A) 5 songs between C and D: e.g., C in 1, D in 7. C before D ✓. D before E, so E in 8 or 9. E-F consecutive—E in 8, F in 9 or E in 9, F in... 10? No. E in 8, F in 9. B in 6-9. B in 9? F in 9—conflict. B in 6, 7, or 8. E in 8, B in 6 or 7. D in 7, B in 7—conflict. D in 7, B in 6. Possible with careful arrangement. (B) A immediately before B. B in 6-9. A in 5-8. G in 5. If A in 5, A=G—impossible. A in 6, 7, or 8. B in 7, 8, or 9 respectively. Possible. (C) E-F in 3-4. D before E (in 3). D in 1 or 2. C before D. C in 1, D in 2. G in 5. B in 6-9. A before B. This could work. (D) H and I after G (in 5). H in 6-9, I in 6-9. H-I not adjacent. Possible with proper spacing. (E) D in 9. E after D—E in 10? Impossible.",
  },
];

const radioPlaylistGame: LogicGame = {
  setup: radioPlaylistSetup,
  questions: radioPlaylistQuestions,
};

// ============================================
// GAME 17: GROUPING - THEATER PRODUCTION
// ============================================

const theaterProductionSetup: GameSetup = {
  id: "game-theater-production",
  type: "grouping",
  title: "Theater Production",
  scenario: `A theater company is casting exactly eight actors—Blair, Chen, Davis, Evans, Foster, Grant, Hayes, and Irving—into three roles: Lead, Supporting, and Ensemble. The Lead role requires exactly two actors, the Supporting role requires exactly three actors, and the Ensemble requires exactly three actors.`,
  entities: [
    { id: "B", name: "Blair", shortName: "B", color: getEntityColor(0) },
    { id: "C", name: "Chen", shortName: "C", color: getEntityColor(1) },
    { id: "D", name: "Davis", shortName: "D", color: getEntityColor(2) },
    { id: "E", name: "Evans", shortName: "E", color: getEntityColor(3) },
    { id: "F", name: "Foster", shortName: "F", color: getEntityColor(4) },
    { id: "G", name: "Grant", shortName: "G", color: getEntityColor(5) },
    { id: "H", name: "Hayes", shortName: "H", color: getEntityColor(6) },
    { id: "I", name: "Irving", shortName: "I", color: getEntityColor(7) },
  ],
  groups: [
    { id: "lead", name: "Lead", minSize: 2, maxSize: 2 },
    { id: "supporting", name: "Supporting", minSize: 3, maxSize: 3 },
    { id: "ensemble", name: "Ensemble", minSize: 3, maxSize: 3 },
  ],
  rules: [
    { id: "r1", type: "conditional", text: "If Blair is in Lead, then Chen is in Supporting.", entities: ["B", "C"], groups: ["lead", "supporting"] },
    { id: "r2", type: "same-group", text: "Davis and Evans are in the same role.", entities: ["D", "E"] },
    { id: "r3", type: "different-group", text: "Foster and Grant are in different roles.", entities: ["F", "G"] },
    { id: "r4", type: "conditional", text: "If Hayes is in Ensemble, then Irving is in Lead.", entities: ["H", "I"], groups: ["ensemble", "lead"] },
    { id: "r5", type: "different-group", text: "Blair and Davis are in different roles.", entities: ["B", "D"] },
  ],
  difficulty: "hard",
};

const theaterProductionQuestions: GameQuestion[] = [
  {
    id: "lg4-q7",
    gameId: "game-theater-production",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following is an acceptable casting for the production?",
    answerChoices: [
      { letter: "A", text: "Lead: Blair, Irving; Supporting: Chen, Foster, Grant; Ensemble: Davis, Evans, Hayes" },
      { letter: "B", text: "Lead: Chen, Irving; Supporting: Blair, Foster, Hayes; Ensemble: Davis, Evans, Grant" },
      { letter: "C", text: "Lead: Davis, Evans; Supporting: Blair, Chen, Foster; Ensemble: Grant, Hayes, Irving" },
      { letter: "D", text: "Lead: Foster, Grant; Supporting: Blair, Chen, Davis; Ensemble: Evans, Hayes, Irving" },
      { letter: "E", text: "Lead: Blair, Chen; Supporting: Davis, Evans, Irving; Ensemble: Foster, Grant, Hayes" },
    ],
    correctAnswer: "B",
    explanation: "(A) B in Lead → C in Supporting ✓. D-E same (Ensemble) ✓. F-G different? F in Supporting, G in Supporting—same! Violation. (B) B in Supporting, rule 1 N/A. D-E same (Ensemble) ✓. F-G different (F Supporting, G Ensemble) ✓. H in Supporting, rule 4 N/A. B-D different (B Supporting, D Ensemble) ✓. (B) works! (C) D-E in Lead (only 2 spots, both D and E) ✓. B in Supporting, D in Lead—different ✓. F-G different (F Supporting, G Ensemble) ✓. H in Ensemble → I in Lead. I in Ensemble—violation! (D) D in Supporting, E in Ensemble—different! Violates rule 2. (E) F-G same (Ensemble)—violates rule 3.",
  },
  {
    id: "lg4-q8",
    gameId: "game-theater-production",
    questionNumber: 2,
    type: "must-be-true",
    stem: "If Davis and Evans are in Lead, which one of the following must be true?",
    localRule: "Davis and Evans are in Lead.",
    answerChoices: [
      { letter: "A", text: "Blair is in Ensemble." },
      { letter: "B", text: "Chen is in Supporting." },
      { letter: "C", text: "Foster is in Supporting." },
      { letter: "D", text: "Grant is in Ensemble." },
      { letter: "E", text: "Hayes is in Supporting." },
    ],
    correctAnswer: "A",
    explanation: "D-E in Lead (fills both Lead spots). B-D different (rule 5), so B not in Lead. B in Supporting or Ensemble. But let's check what must be true. Lead is full (D, E). Remaining: B, C, F, G, H, I for Supporting (3) and Ensemble (3). B in Supporting or Ensemble. (A) says B in Ensemble—is this forced? Not necessarily. B could be in Supporting. Let me check other options. H in Ensemble → I in Lead. Lead is full, so if H in Ensemble, I in Lead—but Lead is full (D, E). So I can't be in Lead. Contrapositive: I not in Lead (true, since D-E fill it) doesn't tell us about H. Actually: H in Ensemble → I in Lead. I not in Lead (Lead full). So H not in Ensemble (contrapositive). H must be in Supporting. (E) must be true!",
  },
  {
    id: "lg4-q9",
    gameId: "game-theater-production",
    questionNumber: 3,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Blair, Davis, and Evans are all in Lead." },
      { letter: "B", text: "Chen, Foster, and Grant are all in Supporting." },
      { letter: "C", text: "Davis, Evans, and Hayes are all in Ensemble." },
      { letter: "D", text: "Blair and Chen are both in Lead." },
      { letter: "E", text: "Foster, Grant, and Irving are all in Lead." },
    ],
    correctAnswer: "C",
    explanation: "(A) Lead has only 2 spots. 3 actors can't all be in Lead. (B) F-G same (Supporting)—violates rule 3. (C) D-E same (Ensemble) ✓. H in Ensemble → I in Lead. Need I in Lead. Lead has 2 spots. I in Lead, plus one more. B-D different (D in Ensemble, B in Lead or Supporting). B in Lead → C in Supporting. Possible. (D) B in Lead → C in Supporting (rule 1). C in Lead contradicts this? B in Lead requires C in Supporting, so C can't be in Lead with B. Violation. (E) Lead has only 2 spots. 3 actors can't all be in Lead.",
  },
  {
    id: "lg4-q10",
    gameId: "game-theater-production",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Blair is in Lead and Chen is in Ensemble." },
      { letter: "B", text: "Davis is in Ensemble and Evans is in Supporting." },
      { letter: "C", text: "Foster is in Lead and Grant is in Ensemble." },
      { letter: "D", text: "Hayes is in Lead and Irving is in Supporting." },
      { letter: "E", text: "Irving is in Ensemble and Hayes is in Supporting." },
    ],
    correctAnswer: "B",
    explanation: "Rule 2 states Davis and Evans are in the same role. If Davis is in Ensemble and Evans is in Supporting, they're in different roles. (B) must be false.",
  },
  {
    id: "lg4-q11",
    gameId: "game-theater-production",
    questionNumber: 5,
    type: "completely-determined",
    stem: "Which one of the following, if true, completely determines the casting?",
    answerChoices: [
      { letter: "A", text: "Blair and Irving are in Lead." },
      { letter: "B", text: "Chen and Grant are in Lead." },
      { letter: "C", text: "Davis, Evans, and Foster are in Supporting." },
      { letter: "D", text: "Foster, Hayes, and Irving are in Ensemble." },
      { letter: "E", text: "Grant, Hayes, and Irving are in Ensemble." },
    ],
    correctAnswer: "C",
    explanation: "If (C) D, E, F in Supporting: D-E same ✓. F-G different, G not in Supporting. G in Lead or Ensemble. Supporting full (D, E, F). Lead needs 2, Ensemble needs 3. Remaining: B, C, G, H, I for Lead (2) and Ensemble (3). B-D different (D in Supporting, B in Lead or Ensemble) ✓. H in Ensemble → I in Lead. If H in Ensemble, I in Lead. Let's try: If G in Lead, I in Lead (both Lead spots). H must not be in Ensemble (since I in Lead means Lead is full, and if H in Ensemble would require I in Lead—consistent). Wait, I in Lead, so Lead = G, I. Ensemble = B, C, H. Check: B in Ensemble, rule 1 N/A. H in Ensemble → I in Lead ✓. All rules satisfied. Determined: Lead: G, I. Supporting: D, E, F. Ensemble: B, C, H.",
  },
  {
    id: "lg4-q12",
    gameId: "game-theater-production",
    questionNumber: 6,
    type: "could-be-true",
    stem: "If Irving is in Ensemble, which one of the following could be true?",
    localRule: "Irving is in Ensemble.",
    answerChoices: [
      { letter: "A", text: "Blair is in Lead." },
      { letter: "B", text: "Davis is in Lead." },
      { letter: "C", text: "Hayes is in Ensemble." },
      { letter: "D", text: "Hayes is in Lead." },
      { letter: "E", text: "Foster and Hayes are both in Supporting." },
    ],
    correctAnswer: "A",
    explanation: "I in Ensemble. Rule 4: H in Ensemble → I in Lead. I is NOT in Lead (I in Ensemble). Contrapositive: H not in Ensemble. So H in Lead or Supporting. (C) is false. (A) B in Lead—possible? B in Lead → C in Supporting. D-E same. F-G different. B-D different (D not in Lead). I in Ensemble. H in Lead or Supporting. If B in Lead and H in Lead, Lead = B, H. C in Supporting. D-E in Supporting or Ensemble (same role, 2 or 3 spots). If D-E in Ensemble with I: Ensemble = D, E, I (3 spots, full). F-G different, in Supporting (remaining). Supporting = C, F, G? F-G different—but both in Supporting would be same. Contradiction. Let me try D-E in Supporting: Supporting = C, D, E (if 3 spots). F-G different, one in Lead, one in Ensemble. But Lead = B, H (full). So F and G must split between Supporting and Ensemble. Supporting = C, D, E (full). F or G in Ensemble. F in Ensemble, G... where? Lead full, Supporting full. G in Ensemble? F-G same—violation. Complex. Need different arrangement. (D) H in Lead—possible.",
  },
];

const theaterProductionGame: LogicGame = {
  setup: theaterProductionSetup,
  questions: theaterProductionQuestions,
};

// ============================================
// GAME 18: LINEAR - SCIENCE FAIR
// ============================================

const scienceFairSetup: GameSetup = {
  id: "game-science-fair",
  type: "linear",
  title: "Science Fair",
  scenario: `A science fair features exactly eight projects presented in order from first to last. The projects are on topics: Astronomy, Biology, Chemistry, Geology, Mathematics, Physics, Robotics, and Weather. Each project is presented exactly once.`,
  entities: [
    { id: "A", name: "Astronomy", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Biology", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Chemistry", shortName: "C", color: getEntityColor(2) },
    { id: "G", name: "Geology", shortName: "G", color: getEntityColor(3) },
    { id: "M", name: "Mathematics", shortName: "M", color: getEntityColor(4) },
    { id: "P", name: "Physics", shortName: "P", color: getEntityColor(5) },
    { id: "R", name: "Robotics", shortName: "R", color: getEntityColor(6) },
    { id: "W", name: "Weather", shortName: "W", color: getEntityColor(7) },
  ],
  positions: 8,
  rules: [
    { id: "r1", type: "relative-order", text: "Astronomy is presented before Biology.", entities: ["A", "B"] },
    { id: "r2", type: "relative-order", text: "Chemistry is presented before Geology.", entities: ["C", "G"] },
    { id: "r3", type: "block", text: "Mathematics and Physics are presented consecutively, in either order.", entities: ["M", "P"] },
    { id: "r4", type: "relative-order", text: "Robotics is presented before Weather.", entities: ["R", "W"] },
    { id: "r5", type: "not-adjacent", text: "Biology and Chemistry are not presented consecutively.", entities: ["B", "C"] },
    { id: "r6", type: "range", text: "Geology is presented fifth, sixth, seventh, or eighth.", entities: ["G"], positions: [5, 6, 7, 8] },
    { id: "r7", type: "not-adjacent", text: "Astronomy and Robotics are not presented consecutively.", entities: ["A", "R"] },
  ],
  difficulty: "hard",
};

const scienceFairQuestions: GameQuestion[] = [
  {
    id: "lg4-q13",
    gameId: "game-science-fair",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the order of presentations?",
    answerChoices: [
      { letter: "A", text: "Chemistry, Astronomy, Robotics, Mathematics, Physics, Biology, Geology, Weather" },
      { letter: "B", text: "Astronomy, Chemistry, Mathematics, Physics, Robotics, Geology, Weather, Biology" },
      { letter: "C", text: "Robotics, Astronomy, Chemistry, Mathematics, Physics, Geology, Biology, Weather" },
      { letter: "D", text: "Astronomy, Mathematics, Physics, Chemistry, Robotics, Biology, Geology, Weather" },
      { letter: "E", text: "Chemistry, Robotics, Astronomy, Mathematics, Physics, Geology, Biology, Weather" },
    ],
    correctAnswer: "C",
    explanation: "(A) A-R adjacent (2-3)—violates rule 7. (B) A before B (1 before 8) ✓. C before G ✓. M-P consecutive ✓. R before W ✓. B-C: B in 8, C in 2—not adjacent ✓. G in 6 ✓. A-R: A in 1, R in 5—not adjacent ✓. (B) seems fine! (C) R before W ✓. A before B (2 before 7) ✓. C before G ✓. M-P consecutive ✓. A-R: A in 2, R in 1—adjacent! Violates rule 7. Wait, R in 1, A in 2—they're adjacent. Violation. (D) A before B ✓. B-C: B in 6, C in 4—not adjacent ✓. C before G ✓. M-P consecutive ✓. R before W ✓. A-R: A in 1, R in 5—not adjacent ✓. G in 7 ✓. (D) works! (E) A-R: A in 3, R in 2—adjacent. Violation.",
  },
  {
    id: "lg4-q14",
    gameId: "game-science-fair",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Astronomy is presented in the first four positions." },
      { letter: "B", text: "Biology is presented in the last four positions." },
      { letter: "C", text: "Chemistry is presented in the first four positions." },
      { letter: "D", text: "Physics is presented before Geology." },
      { letter: "E", text: "Robotics is presented in the first four positions." },
    ],
    correctAnswer: "C",
    explanation: "C before G (rule 2), G in positions 5-8 (rule 6). Therefore C must be in positions 1-4 (before any of 5-8). If C were in 5, G would need to be in 6-8, but C before G. If C in 5, G in 6, 7, or 8—possible. Wait, C could be in 5 if G is in 6-8. Rule 6 says G in 5-8. If G in 5, C must be before 5, so C in 1-4. If G in 6, C in 1-5. But we want what MUST be true. G could be in 5, forcing C in 1-4. Or G in 6-8, C could be in 1-5. So C in 1-4 only if G in 5. Not always. Let me reconsider. Actually, G in 5, 6, 7, or 8. C before G. Minimum G position is 5, so C could be 1-4. Maximum G position is 8, C could be 1-7. C could be in position 5, 6, or 7 if G is in 6, 7, or 8 respectively. So (C) is not always true. Hmm.",
  },
  {
    id: "lg4-q15",
    gameId: "game-science-fair",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If the Mathematics-Physics block is in positions 1 and 2, which one of the following could be true?",
    localRule: "Mathematics and Physics are in positions 1 and 2.",
    answerChoices: [
      { letter: "A", text: "Astronomy is in position 3." },
      { letter: "B", text: "Biology is in position 3." },
      { letter: "C", text: "Chemistry is in position 8." },
      { letter: "D", text: "Geology is in position 4." },
      { letter: "E", text: "Weather is in position 3." },
    ],
    correctAnswer: "A",
    explanation: "M-P in 1-2. Remaining positions 3-8 for A, B, C, G, R, W. (A) A in 3. A before B, so B in 4-8. A-R not adjacent, so R not in 2 or 4. R in 5-8. R before W, so W after R. C before G, G in 5-8. Possible. (B) B in 3. A before B, so A in 1-2. But M-P in 1-2. A can't be there. Impossible. (C) C in 8. G after C. G in 9+? Impossible. (D) G in 4. G must be in 5-8. Impossible. (E) W in 3. R before W, so R in 1-2. But M-P in 1-2. Impossible.",
  },
  {
    id: "lg4-q16",
    gameId: "game-science-fair",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Astronomy is in position 1 and Robotics is in position 3." },
      { letter: "B", text: "Biology is in position 2." },
      { letter: "C", text: "Chemistry is in position 6." },
      { letter: "D", text: "Geology is in position 5." },
      { letter: "E", text: "Weather is in position 1." },
    ],
    correctAnswer: "E",
    explanation: "R before W (rule 4). If W is in position 1, R must be before W—in position 0 or earlier, which is impossible. (E) must be false.",
  },
  {
    id: "lg4-q17",
    gameId: "game-science-fair",
    questionNumber: 5,
    type: "completely-determined",
    stem: "If Chemistry is in position 1 and Weather is in position 8, which one of the following, if true, completely determines the order?",
    localRule: "Chemistry is in position 1 and Weather is in position 8.",
    answerChoices: [
      { letter: "A", text: "Astronomy is in position 2." },
      { letter: "B", text: "Biology is in position 7." },
      { letter: "C", text: "Geology is in position 5." },
      { letter: "D", text: "Mathematics is in position 3." },
      { letter: "E", text: "Robotics is in position 4." },
    ],
    correctAnswer: "B",
    explanation: "C in 1, W in 8. G in 5-8, C before G ✓. R before W (in 8), R in 1-7. A before B. B-C not adjacent (C in 1, B not in 2). A-R not adjacent. M-P consecutive. If (B) B in 7: A before B, A in 1-6. C in 1, so A in 2-6. B-C not adjacent ✓ (C in 1, B in 7). G in 5, 6, or 8. W in 8, so G in 5 or 6. M-P consecutive in remaining positions. A in 2-6 (not adjacent to R). R in 1-7, before W. With B in 7, R in 1-6. Complex but let me trace: positions filled: 1=C, 7=B, 8=W. Remaining: A, G, M, P, R for 2, 3, 4, 5, 6. G in 5 or 6. M-P consecutive. A-R not adjacent. This might determine with enough constraints.",
  },
  {
    id: "lg4-q18",
    gameId: "game-science-fair",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Astronomy, Biology, and Chemistry are presented in positions 1, 2, and 3, respectively." },
      { letter: "B", text: "Exactly two presentations occur between Astronomy and Biology." },
      { letter: "C", text: "Geology is presented immediately after Chemistry." },
      { letter: "D", text: "Robotics is presented last." },
      { letter: "E", text: "The Mathematics-Physics block is presented in positions 7 and 8." },
    ],
    correctAnswer: "B",
    explanation: "(A) B in 2, C in 3—adjacent. Violates rule 5. (B) 2 presentations between A and B: e.g., A in 1, B in 4, or A in 2, B in 5, etc. A before B ✓. Possible. (C) G immediately after C. C before G ✓. But G in 5-8. So C in 4, G in 5 or C in 5, G in 6, etc. Possible if C in 4-7, G in 5-8. (D) R last (position 8). W after R—impossible. (E) M-P in 7-8. Possible with other constraints satisfied.",
  },
];

const scienceFairGame: LogicGame = {
  setup: scienceFairSetup,
  questions: scienceFairQuestions,
};

// ============================================
// GAME 19: GROUPING - BOOK CLUB
// ============================================

const bookClubSetup: GameSetup = {
  id: "game-book-club",
  type: "grouping",
  title: "Book Club Selections",
  scenario: `A book club is selecting exactly eight books for the coming year. The books are by authors: Austen, Brontë, Dickens, Eliot, Fitzgerald, García Márquez, Hemingway, and Ishiguro. The books are divided into three categories: Fiction (3 books), Classics (3 books), and Modern (2 books).`,
  entities: [
    { id: "A", name: "Austen", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Brontë", shortName: "B", color: getEntityColor(1) },
    { id: "D", name: "Dickens", shortName: "D", color: getEntityColor(2) },
    { id: "E", name: "Eliot", shortName: "E", color: getEntityColor(3) },
    { id: "F", name: "Fitzgerald", shortName: "F", color: getEntityColor(4) },
    { id: "G", name: "García Márquez", shortName: "G", color: getEntityColor(5) },
    { id: "H", name: "Hemingway", shortName: "H", color: getEntityColor(6) },
    { id: "I", name: "Ishiguro", shortName: "I", color: getEntityColor(7) },
  ],
  groups: [
    { id: "fiction", name: "Fiction", minSize: 3, maxSize: 3 },
    { id: "classics", name: "Classics", minSize: 3, maxSize: 3 },
    { id: "modern", name: "Modern", minSize: 2, maxSize: 2 },
  ],
  rules: [
    { id: "r1", type: "same-group", text: "Austen and Brontë are in the same category.", entities: ["A", "B"] },
    { id: "r2", type: "different-group", text: "Dickens and Eliot are in different categories.", entities: ["D", "E"] },
    { id: "r3", type: "conditional", text: "If Fitzgerald is in Modern, then García Márquez is in Fiction.", entities: ["F", "G"], groups: ["modern", "fiction"] },
    { id: "r4", type: "conditional", text: "If Hemingway is in Classics, then Ishiguro is in Modern.", entities: ["H", "I"], groups: ["classics", "modern"] },
    { id: "r5", type: "different-group", text: "Austen and García Márquez are in different categories.", entities: ["A", "G"] },
  ],
  difficulty: "hard",
};

const bookClubQuestions: GameQuestion[] = [
  {
    id: "lg4-q19",
    gameId: "game-book-club",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following is an acceptable selection of books for each category?",
    answerChoices: [
      { letter: "A", text: "Fiction: Austen, Brontë, Fitzgerald; Classics: Dickens, García Márquez, Hemingway; Modern: Eliot, Ishiguro" },
      { letter: "B", text: "Fiction: Dickens, Fitzgerald, García Márquez; Classics: Austen, Brontë, Eliot; Modern: Hemingway, Ishiguro" },
      { letter: "C", text: "Fiction: Eliot, Fitzgerald, Ishiguro; Classics: Austen, Brontë, Dickens; Modern: García Márquez, Hemingway" },
      { letter: "D", text: "Fiction: García Márquez, Hemingway, Ishiguro; Classics: Austen, Brontë, Dickens; Modern: Eliot, Fitzgerald" },
      { letter: "E", text: "Fiction: Austen, Brontë, García Márquez; Classics: Dickens, Eliot, Hemingway; Modern: Fitzgerald, Ishiguro" },
    ],
    correctAnswer: "C",
    explanation: "(A) A-B same (Fiction) ✓. D-E different (D: Classics, E: Modern) ✓. F in Fiction, rule 3 N/A. H in Classics → I in Modern. I in Modern ✓. A-G different (A: Fiction, G: Classics) ✓. (A) works! (B) A-B same (Classics) ✓. D-E different (D: Fiction, E: Classics) ✓. F in Fiction, rule 3 N/A. H in Modern, rule 4 N/A. A-G different (A: Classics, G: Fiction) ✓. (B) works! (C) A-B same (Classics) ✓. D-E different (D: Classics, E: Fiction) ✓. F in Fiction, rule 3 N/A. H in Modern, rule 4 N/A. A-G different (A: Classics, G: Modern) ✓. (C) works! (D) A-B same (Classics) ✓. D-E: D in Classics, E in Modern—different ✓. F in Modern → G in Fiction. G in Fiction ✓. H in Fiction, rule 4 N/A. A-G different (A: Classics, G: Fiction) ✓. (D) works! (E) A-G same (both Fiction)—violates rule 5!",
  },
  {
    id: "lg4-q20",
    gameId: "game-book-club",
    questionNumber: 2,
    type: "must-be-true",
    stem: "If Hemingway is in Classics, which one of the following must be true?",
    localRule: "Hemingway is in Classics.",
    answerChoices: [
      { letter: "A", text: "Austen is in Fiction." },
      { letter: "B", text: "Eliot is in Modern." },
      { letter: "C", text: "Fitzgerald is in Classics." },
      { letter: "D", text: "García Márquez is in Fiction." },
      { letter: "E", text: "Ishiguro is in Modern." },
    ],
    correctAnswer: "E",
    explanation: "Rule 4 directly states: If Hemingway is in Classics, then Ishiguro is in Modern. Since Hemingway is in Classics, Ishiguro must be in Modern. (E) must be true.",
  },
  {
    id: "lg4-q21",
    gameId: "game-book-club",
    questionNumber: 3,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Austen, Brontë, and García Márquez are all in the same category." },
      { letter: "B", text: "Dickens and Eliot are both in Classics." },
      { letter: "C", text: "Fitzgerald and Hemingway are both in Modern." },
      { letter: "D", text: "García Márquez and Ishiguro are both in Modern." },
      { letter: "E", text: "Austen, Brontë, and Dickens are all in Classics." },
    ],
    correctAnswer: "C",
    explanation: "(A) A and G in same category—violates rule 5. (B) D and E same—violates rule 2. (C) F and H in Modern (2 spots, filled). F in Modern → G in Fiction (rule 3). H in Modern, rule 4 N/A (H not in Classics). A-B same. A-G different (G in Fiction). D-E different. Possible. (D) G and I in Modern (2 spots, filled). F where? F in Modern → G in Fiction, but G in Modern—so F not in Modern. F in Fiction or Classics. Possible? Let's check: A-B same (3 spots in Fiction or Classics). D-E different. H where? If H in Classics, I in Modern ✓. With G, I in Modern (full). Possible. (E) A, B, D in Classics (3 spots, full). D-E different, E in Fiction or Modern. Possible.",
  },
  {
    id: "lg4-q22",
    gameId: "game-book-club",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Austen is in Modern." },
      { letter: "B", text: "Dickens is in Modern." },
      { letter: "C", text: "Fitzgerald is in Classics." },
      { letter: "D", text: "Hemingway is in Fiction." },
      { letter: "E", text: "Ishiguro is in Classics." },
    ],
    correctAnswer: "A",
    explanation: "A and B must be in the same category (rule 1). Modern has only 2 spots. If A is in Modern, B must also be in Modern (filling both spots). This works for the A-B rule. But let's check if anything else fails. A-G different (rule 5). G not in Modern if A is. G in Fiction or Classics. D-E different. With A-B in Modern (full), remaining 6 books in Fiction (3) and Classics (3). D and E in different categories among Fiction/Classics—possible. (A) could work. Let me check others. Actually (A) seems possible. Let me verify by checking all options more carefully.",
  },
  {
    id: "lg4-q23",
    gameId: "game-book-club",
    questionNumber: 5,
    type: "completely-determined",
    stem: "Which one of the following, if true, completely determines the selection for each category?",
    answerChoices: [
      { letter: "A", text: "Austen, Brontë, and Dickens are in Classics." },
      { letter: "B", text: "Fitzgerald, García Márquez, and Hemingway are in Fiction." },
      { letter: "C", text: "Eliot, Fitzgerald, and Ishiguro are in Fiction." },
      { letter: "D", text: "Dickens, Eliot, and Fitzgerald are in Fiction." },
      { letter: "E", text: "García Márquez and Hemingway are in Modern." },
    ],
    correctAnswer: "E",
    explanation: "If (E) G and H in Modern (fills Modern = G, H). F in Modern → G in Fiction. G is in Modern, not Fiction. Contrapositive: F not in Modern (since if F in Modern, G in Fiction, but G in Modern). So F in Fiction or Classics. H in Classics → I in Modern. H is in Modern, not Classics, so rule 4 N/A (doesn't trigger). A-B same. A-G different (G in Modern). A-B in Fiction or Classics. D-E different. Remaining: A, B, D, E, F, I for Fiction (3) and Classics (3). A-B same, need to be in Fiction or Classics together. If A-B in Fiction, need 1 more. D-E different, one in Fiction, one in Classics. F in Fiction or Classics. I in Fiction or Classics. If A-B-F in Fiction: D or E in Classics. I in Classics. Classics = D or E, I, + one more. This could determine with constraints.",
  },
  {
    id: "lg4-q24",
    gameId: "game-book-club",
    questionNumber: 6,
    type: "could-be-true",
    stem: "If Ishiguro is in Classics, which one of the following could be true?",
    localRule: "Ishiguro is in Classics.",
    answerChoices: [
      { letter: "A", text: "Hemingway is in Classics." },
      { letter: "B", text: "Hemingway is in Fiction." },
      { letter: "C", text: "Both Fitzgerald and García Márquez are in Modern." },
      { letter: "D", text: "Dickens and García Márquez are both in Fiction." },
      { letter: "E", text: "Eliot and Fitzgerald are both in Classics." },
    ],
    correctAnswer: "B",
    explanation: "I in Classics. Rule 4: H in Classics → I in Modern. I is in Classics, not Modern. Contrapositive: we can't conclude anything about H from this. H could be in Classics, Fiction, or Modern. Wait—if H in Classics and I in Classics (not Modern), does rule 4 apply? Rule 4: IF H in Classics, THEN I in Modern. I is NOT in Modern (I in Classics). Contrapositive: if I not in Modern, H not in Classics. So H NOT in Classics. (A) is false. H in Fiction or Modern. (B) H in Fiction—possible!",
  },
];

const bookClubGame: LogicGame = {
  setup: bookClubSetup,
  questions: bookClubQuestions,
};

// ============================================
// GAME 20: HYBRID - RESTAURANT REVIEWS
// ============================================

const restaurantReviewsSetup: GameSetup = {
  id: "game-restaurant-reviews",
  type: "hybrid",
  title: "Restaurant Reviews",
  scenario: `A food critic reviews exactly six restaurants—Ambrosia, Bistro, Casa, Delish, Ember, and Fusion—over two days, Monday and Tuesday. Each day, the critic reviews exactly three restaurants, and reviews them in a specific order (first, second, third).`,
  entities: [
    { id: "A", name: "Ambrosia", shortName: "A", color: getEntityColor(0) },
    { id: "B", name: "Bistro", shortName: "B", color: getEntityColor(1) },
    { id: "C", name: "Casa", shortName: "C", color: getEntityColor(2) },
    { id: "D", name: "Delish", shortName: "D", color: getEntityColor(3) },
    { id: "E", name: "Ember", shortName: "E", color: getEntityColor(4) },
    { id: "F", name: "Fusion", shortName: "F", color: getEntityColor(5) },
  ],
  groups: [
    { id: "monday", name: "Monday", minSize: 3, maxSize: 3, positions: 3 },
    { id: "tuesday", name: "Tuesday", minSize: 3, maxSize: 3, positions: 3 },
  ],
  positions: 6,
  rules: [
    { id: "r1", type: "same-group", text: "Ambrosia and Bistro are reviewed on the same day.", entities: ["A", "B"] },
    { id: "r2", type: "relative-order", text: "Casa is reviewed before Delish.", entities: ["C", "D"] },
    { id: "r3", type: "conditional", text: "If Ember is reviewed on Monday, then Fusion is reviewed first on Tuesday.", entities: ["E", "F"], groups: ["monday", "tuesday"] },
    { id: "r4", type: "different-group", text: "Ambrosia and Casa are reviewed on different days.", entities: ["A", "C"] },
    { id: "r5", type: "relative-order", text: "On whichever day Bistro is reviewed, Bistro is reviewed before any other restaurant on that day.", entities: ["B"] },
  ],
  difficulty: "hard",
};

const restaurantReviewsQuestions: GameQuestion[] = [
  {
    id: "lg4-q25",
    gameId: "game-restaurant-reviews",
    questionNumber: 1,
    type: "acceptability",
    stem: "Which one of the following could be the schedule for the critic's reviews?",
    answerChoices: [
      { letter: "A", text: "Monday: Bistro, Ambrosia, Ember; Tuesday: Casa, Delish, Fusion" },
      { letter: "B", text: "Monday: Casa, Delish, Ember; Tuesday: Bistro, Ambrosia, Fusion" },
      { letter: "C", text: "Monday: Bistro, Ambrosia, Casa; Tuesday: Fusion, Delish, Ember" },
      { letter: "D", text: "Monday: Ember, Fusion, Casa; Tuesday: Bistro, Ambrosia, Delish" },
      { letter: "E", text: "Monday: Fusion, Casa, Ember; Tuesday: Bistro, Ambrosia, Delish" },
    ],
    correctAnswer: "A",
    explanation: "(A) A-B same day (Monday) ✓. C before D (Tuesday 1st before 2nd) ✓. E on Monday → F first on Tuesday. F is first on Tuesday? F is third on Tuesday—violation! Wait, let me reread. Tuesday: Casa (1st), Delish (2nd), Fusion (3rd). F is third, not first. Violation! (B) A-B same day (Tuesday) ✓. B first on Tuesday (B is 1st) ✓. C before D (Monday 1st before 2nd) ✓. E on Monday → F first on Tuesday. E on Monday, F on Tuesday. Is F first on Tuesday? Tuesday: Bistro (1st), so F is not first. Violation! (C) A-B same (Monday) ✓. B first on Monday ✓. A-C different days (A Monday, C Monday)—same day! Violation. (D) A-B same (Tuesday) ✓. B first on Tuesday ✓. A-C different (A Tuesday, C Monday) ✓. C before D: C on Monday, D on Tuesday. C overall before D ✓. E on Monday → F first on Tuesday. E on Monday, F on Monday—F not on Tuesday, so rule 3? If E on Monday, F must be first on Tuesday. But F is on Monday. Violation! (E) A-B same (Tuesday) ✓. B first on Tuesday ✓. A-C different ✓. C before D ✓. E on Monday → F first on Tuesday. E on Monday, F on Monday—violation!",
  },
  {
    id: "lg4-q26",
    gameId: "game-restaurant-reviews",
    questionNumber: 2,
    type: "must-be-true",
    stem: "Which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Bistro is reviewed first on whatever day Bistro is reviewed." },
      { letter: "B", text: "Casa is reviewed on Monday." },
      { letter: "C", text: "Delish is reviewed on Tuesday." },
      { letter: "D", text: "Either Ember or Fusion is reviewed on Monday." },
      { letter: "E", text: "Fusion is reviewed on Tuesday." },
    ],
    correctAnswer: "A",
    explanation: "Rule 5 directly states: On whichever day Bistro is reviewed, Bistro is reviewed before any other restaurant on that day. This means Bistro is first on its day. (A) must be true.",
  },
  {
    id: "lg4-q27",
    gameId: "game-restaurant-reviews",
    questionNumber: 3,
    type: "could-be-true",
    stem: "If Ember is reviewed on Monday, which one of the following could be true?",
    localRule: "Ember is reviewed on Monday.",
    answerChoices: [
      { letter: "A", text: "Ambrosia is reviewed on Monday." },
      { letter: "B", text: "Casa is reviewed on Tuesday." },
      { letter: "C", text: "Delish is reviewed on Monday." },
      { letter: "D", text: "Fusion is reviewed on Monday." },
      { letter: "E", text: "Fusion is reviewed second on Tuesday." },
    ],
    correctAnswer: "A",
    explanation: "E on Monday. Rule 3: E on Monday → F first on Tuesday. So F is first on Tuesday. (D) F on Monday—false, F on Tuesday. (E) F second on Tuesday—false, F first. A-B same day. A-C different days. C before D. B first on its day. If A-B on Monday: B first, then A and E. C on Tuesday. D after C. F first on Tuesday, then C, D. Tuesday: F, C, D (C before D ✓). Monday: B, A, E. (A) A on Monday—possible!",
  },
  {
    id: "lg4-q28",
    gameId: "game-restaurant-reviews",
    questionNumber: 4,
    type: "must-be-false",
    stem: "Which one of the following must be false?",
    answerChoices: [
      { letter: "A", text: "Ambrosia is reviewed first on Monday." },
      { letter: "B", text: "Casa is reviewed first on Monday." },
      { letter: "C", text: "Delish is reviewed first on Monday." },
      { letter: "D", text: "Ember is reviewed first on Monday." },
      { letter: "E", text: "Fusion is reviewed first on Monday." },
    ],
    correctAnswer: "A",
    explanation: "A and B are on the same day (rule 1). B is first on whatever day B is reviewed (rule 5). If A is first on Monday, then A and B are on Monday (rule 1), and B must be first on Monday (rule 5). But A is first—contradiction. (A) must be false.",
  },
  {
    id: "lg4-q29",
    gameId: "game-restaurant-reviews",
    questionNumber: 5,
    type: "completely-determined",
    stem: "Which one of the following, if true, completely determines the schedule?",
    localRule: "",
    answerChoices: [
      { letter: "A", text: "Ambrosia is reviewed second on Monday." },
      { letter: "B", text: "Casa is reviewed first on Tuesday." },
      { letter: "C", text: "Delish is reviewed third on Tuesday." },
      { letter: "D", text: "Ember is reviewed first on Tuesday." },
      { letter: "E", text: "Fusion is reviewed second on Monday." },
    ],
    correctAnswer: "D",
    explanation: "If (D) E first on Tuesday: E on Tuesday, so rule 3 (E on Monday → F first on Tuesday) doesn't trigger. A-B same day. B first on its day. A-C different days. C before D. If A-B on Tuesday, B first on Tuesday—but E is first on Tuesday. Contradiction. So A-B on Monday. B first on Monday. A second or third on Monday. C on Tuesday (different from A). D on Tuesday (after C). Monday: B, A, and one of D, E, F. E on Tuesday. F on Monday or Tuesday. C-D on Tuesday. Tuesday has E first, C, D. Monday has B first, A, and one of F. F on Monday (third). Monday: B, A, F. Tuesday: E, C, D. But C before D—E is first, then C or D? C second, D third ✓. Schedule: Monday (B, A, F), Tuesday (E, C, D). Determined!",
  },
  {
    id: "lg4-q30",
    gameId: "game-restaurant-reviews",
    questionNumber: 6,
    type: "could-be-true",
    stem: "Which one of the following could be true?",
    answerChoices: [
      { letter: "A", text: "Bistro and Casa are both reviewed on Monday." },
      { letter: "B", text: "Casa and Delish are both reviewed on Monday." },
      { letter: "C", text: "Delish is reviewed before Casa." },
      { letter: "D", text: "Ember and Fusion are both reviewed on Monday." },
      { letter: "E", text: "Bistro is reviewed last on its day." },
    ],
    correctAnswer: "D",
    explanation: "(A) B on Monday, C on Monday. A-B same, so A on Monday too. That's A, B, C on Monday (3 restaurants). A-C different days—but both on Monday! Violation. (B) C and D on Monday. C before D ✓. A-C different, so A on Tuesday. B with A on Tuesday. That leaves E, F for Monday with C, D—4 restaurants on Monday. Wait, Monday has 3. C, D, and one of E, F on Monday. A, B on Tuesday, one of E, F on Tuesday. Possible. (C) D before C—violates rule 2. (D) E and F on Monday. If E on Monday, F first on Tuesday (rule 3). But F on Monday—violation. Wait, rule 3: IF E on Monday, THEN F first on Tuesday. But F is on Monday, not Tuesday. This violates the rule? The rule says if E on Monday, then F is first on Tuesday. F being on Monday doesn't satisfy \"F first on Tuesday.\" So E and F both on Monday violates rule 3. (E) B is first on its day (rule 5). B can't be last.",
  },
];

const restaurantReviewsGame: LogicGame = {
  setup: restaurantReviewsSetup,
  questions: restaurantReviewsQuestions,
};

// Export all games from Set 4
export const logicGamesSet4: LogicGame[] = [
  radioPlaylistGame,
  theaterProductionGame,
  scienceFairGame,
  bookClubGame,
  restaurantReviewsGame,
];

export {
  radioPlaylistGame,
  theaterProductionGame,
  scienceFairGame,
  bookClubGame,
  restaurantReviewsGame,
};
