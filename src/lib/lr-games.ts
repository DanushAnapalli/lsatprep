// Logical Reasoning Mini-Games for LSAT Prep
// Fun, quick drills to build fundamental LR skills

// ============================================
// TYPES
// ============================================

export type GameType = "find-conclusion" | "contrapositive" | "spot-flaw" | "argument-parts";

export interface GameQuestion {
  id: string;
  type: GameType;
  stimulus: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface GameSession {
  gameType: GameType;
  questions: GameQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  startedAt: Date;
  completedAt: Date | null;
}

export interface GameResult {
  gameType: GameType;
  correct: number;
  total: number;
  timeSpent: number;
  completedAt: Date;
}

export interface GameProgress {
  gamesPlayed: number;
  totalCorrect: number;
  totalQuestions: number;
  bestStreaks: Record<GameType, number>;
  lastPlayed: Date | null;
  results: GameResult[];
}

// ============================================
// GAME METADATA
// ============================================

export const GAME_INFO: Record<GameType, { name: string; description: string; iconType: "target" | "refresh" | "search" | "layers" }> = {
  "find-conclusion": {
    name: "Find the Conclusion",
    description: "Identify the main conclusion in each argument",
    iconType: "target",
  },
  "contrapositive": {
    name: "Contrapositive Quiz",
    description: "Master conditional logic by finding contrapositives",
    iconType: "refresh",
  },
  "spot-flaw": {
    name: "Spot the Flaw",
    description: "Identify the logical fallacy in each argument",
    iconType: "search",
  },
  "argument-parts": {
    name: "Argument Anatomy",
    description: "Identify premises, conclusions, and assumptions",
    iconType: "layers",
  },
};

// ============================================
// FIND THE CONCLUSION QUESTIONS
// ============================================

const FIND_CONCLUSION_QUESTIONS: GameQuestion[] = [
  {
    id: "fc-1",
    type: "find-conclusion",
    stimulus: "All successful lawyers read extensively. Maria reads extensively. Therefore, Maria will be a successful lawyer.",
    question: "What is the main conclusion of this argument?",
    options: [
      "All successful lawyers read extensively",
      "Maria reads extensively",
      "Maria will be a successful lawyer",
      "Reading is important for lawyers",
    ],
    correctIndex: 2,
    explanation: "The conclusion is signaled by 'Therefore' - Maria will be a successful lawyer. The other statements are premises supporting this conclusion.",
    difficulty: "easy",
  },
  {
    id: "fc-2",
    type: "find-conclusion",
    stimulus: "Studies show that students who sleep 8 hours perform better on exams. Since exam performance is crucial for law school admission, prospective law students should prioritize getting adequate sleep.",
    question: "What is the main conclusion of this argument?",
    options: [
      "Students who sleep 8 hours perform better on exams",
      "Exam performance is crucial for law school admission",
      "Prospective law students should prioritize getting adequate sleep",
      "Sleep affects cognitive function",
    ],
    correctIndex: 2,
    explanation: "The conclusion is the recommendation: prospective law students should prioritize sleep. The studies and importance of exams are premises supporting this conclusion.",
    difficulty: "easy",
  },
  {
    id: "fc-3",
    type: "find-conclusion",
    stimulus: "The defendant could not have committed the crime because he was in another city at the time. Multiple witnesses confirmed his presence at a conference 200 miles away.",
    question: "What is the main conclusion of this argument?",
    options: [
      "The defendant was at a conference",
      "Multiple witnesses saw the defendant",
      "The defendant could not have committed the crime",
      "The crime occurred at a specific time",
    ],
    correctIndex: 2,
    explanation: "'The defendant could not have committed the crime' is the conclusion, supported by evidence of his alibi (being in another city with witnesses).",
    difficulty: "easy",
  },
  {
    id: "fc-4",
    type: "find-conclusion",
    stimulus: "It is clear that the new policy will fail. Previous similar policies have failed, the current economic conditions are unfavorable, and public support is minimal.",
    question: "What is the main conclusion of this argument?",
    options: [
      "Previous similar policies have failed",
      "The current economic conditions are unfavorable",
      "Public support is minimal",
      "The new policy will fail",
    ],
    correctIndex: 3,
    explanation: "'It is clear that' signals the conclusion: the new policy will fail. The three statements that follow are premises providing reasons for this prediction.",
    difficulty: "medium",
  },
  {
    id: "fc-5",
    type: "find-conclusion",
    stimulus: "Given that exercise reduces stress and stress impairs academic performance, students preparing for the LSAT would benefit from regular physical activity.",
    question: "What is the main conclusion of this argument?",
    options: [
      "Exercise reduces stress",
      "Stress impairs academic performance",
      "Students preparing for the LSAT would benefit from regular physical activity",
      "The LSAT is stressful",
    ],
    correctIndex: 2,
    explanation: "The conclusion is the practical recommendation for LSAT students. 'Given that' introduces the premises that lead to this conclusion.",
    difficulty: "medium",
  },
  {
    id: "fc-6",
    type: "find-conclusion",
    stimulus: "The museum should not acquire the painting. Although it is attributed to a famous artist, recent analysis suggests the attribution is incorrect. Furthermore, the asking price exceeds our budget.",
    question: "What is the main conclusion of this argument?",
    options: [
      "The painting is attributed to a famous artist",
      "Recent analysis suggests the attribution is incorrect",
      "The asking price exceeds the budget",
      "The museum should not acquire the painting",
    ],
    correctIndex: 3,
    explanation: "The conclusion appears first: 'The museum should not acquire the painting.' The reasons (questionable attribution and price) are premises supporting this recommendation.",
    difficulty: "medium",
  },
  {
    id: "fc-7",
    type: "find-conclusion",
    stimulus: "Some argue that standardized tests are unfair. However, these tests provide objective measures of academic ability, are cost-effective to administer, and allow for comparison across different schools. Thus, standardized tests remain valuable assessment tools.",
    question: "What is the main conclusion of this argument?",
    options: [
      "Some argue that standardized tests are unfair",
      "Standardized tests provide objective measures",
      "Standardized tests are cost-effective",
      "Standardized tests remain valuable assessment tools",
    ],
    correctIndex: 3,
    explanation: "'Thus' signals the conclusion: standardized tests remain valuable. The argument acknowledges an opposing view but concludes in favor of the tests.",
    difficulty: "hard",
  },
  {
    id: "fc-8",
    type: "find-conclusion",
    stimulus: "The witness testimony must be considered unreliable. The witness has a history of making false statements, was positioned too far from the incident to see clearly, and has a personal grudge against the defendant.",
    question: "What is the main conclusion of this argument?",
    options: [
      "The witness has made false statements before",
      "The witness was too far away to see clearly",
      "The witness has a grudge against the defendant",
      "The witness testimony must be considered unreliable",
    ],
    correctIndex: 3,
    explanation: "The conclusion comes first and is supported by three distinct reasons (premises) that follow: history of false statements, poor positioning, and personal bias.",
    difficulty: "medium",
  },
];

// ============================================
// CONTRAPOSITIVE QUESTIONS
// ============================================

const CONTRAPOSITIVE_QUESTIONS: GameQuestion[] = [
  {
    id: "cp-1",
    type: "contrapositive",
    stimulus: "If it rains, then the ground is wet.",
    question: "What is the contrapositive of this statement?",
    options: [
      "If the ground is wet, then it rains",
      "If it doesn't rain, then the ground is not wet",
      "If the ground is not wet, then it didn't rain",
      "If the ground is wet, then it didn't rain",
    ],
    correctIndex: 2,
    explanation: "The contrapositive negates and reverses: 'If NOT wet, then NOT rain.' This is logically equivalent to the original statement.",
    difficulty: "easy",
  },
  {
    id: "cp-2",
    type: "contrapositive",
    stimulus: "All lawyers must pass the bar exam.",
    question: "What is the contrapositive of this statement?",
    options: [
      "If you pass the bar, you are a lawyer",
      "If you don't pass the bar, you are not a lawyer",
      "If you are not a lawyer, you didn't pass the bar",
      "Some lawyers don't pass the bar",
    ],
    correctIndex: 1,
    explanation: "Rewritten as 'If lawyer, then passed bar.' Contrapositive: 'If NOT passed bar, then NOT lawyer.'",
    difficulty: "easy",
  },
  {
    id: "cp-3",
    type: "contrapositive",
    stimulus: "If a student studies diligently, they will improve their score.",
    question: "What is the contrapositive of this statement?",
    options: [
      "If a student improves their score, they studied diligently",
      "If a student doesn't study diligently, they won't improve their score",
      "If a student doesn't improve their score, they didn't study diligently",
      "All diligent students improve their scores",
    ],
    correctIndex: 2,
    explanation: "Contrapositive: 'If NOT improved score, then NOT studied diligently.' Note that the inverse (option B) is not logically equivalent.",
    difficulty: "easy",
  },
  {
    id: "cp-4",
    type: "contrapositive",
    stimulus: "No valid argument has false premises and a false conclusion.",
    question: "What is the contrapositive of this statement?",
    options: [
      "All valid arguments have true premises",
      "If an argument has false premises and a false conclusion, it is not valid",
      "If an argument is valid, it has true premises and true conclusion",
      "Some invalid arguments have true conclusions",
    ],
    correctIndex: 1,
    explanation: "The statement means: 'If valid, then NOT (false premises AND false conclusion).' Contrapositive: 'If false premises AND false conclusion, then NOT valid.'",
    difficulty: "medium",
  },
  {
    id: "cp-5",
    type: "contrapositive",
    stimulus: "Only citizens can vote in federal elections.",
    question: "What is the contrapositive of this statement?",
    options: [
      "All citizens can vote",
      "If you can vote, you are a citizen",
      "If you are not a citizen, you cannot vote",
      "If you cannot vote, you are not a citizen",
    ],
    correctIndex: 2,
    explanation: "'Only A can B' means 'If B, then A' (If you vote, then citizen). Contrapositive: 'If NOT citizen, then NOT vote.'",
    difficulty: "medium",
  },
  {
    id: "cp-6",
    type: "contrapositive",
    stimulus: "Whenever the alarm sounds, there is an emergency.",
    question: "What is the contrapositive of this statement?",
    options: [
      "If there is an emergency, the alarm sounds",
      "If the alarm doesn't sound, there is no emergency",
      "If there is no emergency, the alarm doesn't sound",
      "The alarm only sounds during emergencies",
    ],
    correctIndex: 2,
    explanation: "'Whenever A, B' means 'If A, then B.' Contrapositive: 'If NOT B (no emergency), then NOT A (alarm doesn't sound).'",
    difficulty: "medium",
  },
  {
    id: "cp-7",
    type: "contrapositive",
    stimulus: "Unless you have a ticket, you cannot enter the venue.",
    question: "What is the contrapositive of this statement?",
    options: [
      "If you have a ticket, you can enter",
      "If you enter, you have a ticket",
      "If you don't have a ticket, you cannot enter",
      "If you cannot enter, you don't have a ticket",
    ],
    correctIndex: 1,
    explanation: "'Unless A, NOT B' means 'If NOT A, then NOT B' OR equivalently 'If B, then A.' If you enter (B), then you have a ticket (A).",
    difficulty: "hard",
  },
  {
    id: "cp-8",
    type: "contrapositive",
    stimulus: "The contract is valid only if both parties signed it.",
    question: "What is the contrapositive of this statement?",
    options: [
      "If both parties signed, the contract is valid",
      "If the contract is valid, both parties signed",
      "If both parties didn't sign, the contract is not valid",
      "If the contract is not valid, both parties didn't sign",
    ],
    correctIndex: 2,
    explanation: "'A only if B' means 'If A, then B.' (If valid, then both signed). Contrapositive: 'If NOT both signed, then NOT valid.'",
    difficulty: "hard",
  },
];

// ============================================
// SPOT THE FLAW QUESTIONS
// ============================================

const SPOT_FLAW_QUESTIONS: GameQuestion[] = [
  {
    id: "sf-1",
    type: "spot-flaw",
    stimulus: "Everyone who exercises regularly is healthy. John is healthy. Therefore, John exercises regularly.",
    question: "What flaw does this argument commit?",
    options: [
      "Circular reasoning",
      "Confusing necessary and sufficient conditions",
      "False dichotomy",
      "Hasty generalization",
    ],
    correctIndex: 1,
    explanation: "The argument confuses a sufficient condition (exercise → healthy) for a necessary one. Being healthy doesn't mean you must exercise; there could be other reasons for health.",
    difficulty: "easy",
  },
  {
    id: "sf-2",
    type: "spot-flaw",
    stimulus: "This medication is natural, made entirely from plants. Therefore, it is safe to use.",
    question: "What flaw does this argument commit?",
    options: [
      "Appeal to authority",
      "Appeal to nature",
      "Straw man",
      "Ad hominem",
    ],
    correctIndex: 1,
    explanation: "The argument assumes that because something is natural, it must be safe. This is the 'appeal to nature' fallacy - many natural substances are harmful (e.g., poison ivy, arsenic).",
    difficulty: "easy",
  },
  {
    id: "sf-3",
    type: "spot-flaw",
    stimulus: "You should accept my argument because I have a PhD in philosophy.",
    question: "What flaw does this argument commit?",
    options: [
      "Appeal to authority",
      "Appeal to emotion",
      "False cause",
      "Slippery slope",
    ],
    correctIndex: 0,
    explanation: "This is an appeal to authority - the argument relies on credentials rather than providing actual reasons or evidence for the claim.",
    difficulty: "easy",
  },
  {
    id: "sf-4",
    type: "spot-flaw",
    stimulus: "Every time I wash my car, it rains the next day. My car washing must be causing the rain.",
    question: "What flaw does this argument commit?",
    options: [
      "Circular reasoning",
      "False dichotomy",
      "Post hoc (false cause)",
      "Equivocation",
    ],
    correctIndex: 2,
    explanation: "This is the 'post hoc ergo propter hoc' fallacy - assuming that because B follows A, A must have caused B. Correlation does not imply causation.",
    difficulty: "medium",
  },
  {
    id: "sf-5",
    type: "spot-flaw",
    stimulus: "Either we ban all cars from the city center, or air pollution will continue to worsen. Since we cannot ban all cars, pollution will get worse.",
    question: "What flaw does this argument commit?",
    options: [
      "Circular reasoning",
      "False dichotomy",
      "Straw man",
      "Hasty generalization",
    ],
    correctIndex: 1,
    explanation: "This is a false dichotomy - presenting only two options when others exist. There could be partial restrictions, electric vehicles, improved public transit, etc.",
    difficulty: "medium",
  },
  {
    id: "sf-6",
    type: "spot-flaw",
    stimulus: "My opponent argues for increased education funding. But we should not listen to someone who failed math in high school.",
    question: "What flaw does this argument commit?",
    options: [
      "Straw man",
      "Ad hominem",
      "Red herring",
      "Appeal to tradition",
    ],
    correctIndex: 1,
    explanation: "This is an ad hominem attack - attacking the person making the argument rather than addressing the argument itself. Past math grades are irrelevant to the funding argument.",
    difficulty: "medium",
  },
  {
    id: "sf-7",
    type: "spot-flaw",
    stimulus: "The witness claims the defendant is innocent. But the witness is the defendant's mother, so she would say that. Therefore, the defendant is guilty.",
    question: "What flaw does this argument commit?",
    options: [
      "Circular reasoning",
      "Dismissing evidence based on its source while drawing an unwarranted conclusion",
      "Equivocation",
      "Appeal to emotion",
    ],
    correctIndex: 1,
    explanation: "The argument dismisses testimony because of the source's bias, but then concludes guilt - which doesn't follow. Biased testimony might still be true, and dismissing it doesn't prove the opposite.",
    difficulty: "hard",
  },
  {
    id: "sf-8",
    type: "spot-flaw",
    stimulus: "Studies show that people who drink wine live longer. Therefore, drinking wine causes people to live longer.",
    question: "What flaw does this argument commit?",
    options: [
      "Confusing correlation with causation",
      "Hasty generalization",
      "Appeal to authority",
      "Slippery slope",
    ],
    correctIndex: 0,
    explanation: "The argument assumes causation from correlation. Wine drinkers might share other traits (income, lifestyle, diet) that actually cause longer life.",
    difficulty: "medium",
  },
];

// ============================================
// ARGUMENT PARTS QUESTIONS
// ============================================

const ARGUMENT_PARTS_QUESTIONS: GameQuestion[] = [
  {
    id: "ap-1",
    type: "argument-parts",
    stimulus: "All mammals are warm-blooded. Whales are mammals. Therefore, whales are warm-blooded.",
    question: "What role does 'All mammals are warm-blooded' play in this argument?",
    options: [
      "Main conclusion",
      "Intermediate conclusion",
      "Premise",
      "Background information",
    ],
    correctIndex: 2,
    explanation: "This is a premise - a statement offered as support for the conclusion. Together with 'Whales are mammals,' it leads to the conclusion about whales being warm-blooded.",
    difficulty: "easy",
  },
  {
    id: "ap-2",
    type: "argument-parts",
    stimulus: "The company's profits have increased for three consecutive quarters. This shows that the new management strategy is working. Therefore, we should continue with the current approach.",
    question: "What role does 'the new management strategy is working' play?",
    options: [
      "Main conclusion",
      "Intermediate conclusion",
      "Premise",
      "Assumption",
    ],
    correctIndex: 1,
    explanation: "This is an intermediate conclusion - it's supported by the profit data (a premise) and in turn supports the main conclusion (continue current approach).",
    difficulty: "medium",
  },
  {
    id: "ap-3",
    type: "argument-parts",
    stimulus: "Professional athletes train for hours daily. Success requires dedication. Maria wants to become a professional athlete, so she should be prepared to train extensively.",
    question: "What is the unstated assumption in this argument?",
    options: [
      "Maria is currently not training",
      "Training extensively is necessary for becoming a professional athlete",
      "All professional athletes are successful",
      "Maria has the physical ability to train extensively",
    ],
    correctIndex: 1,
    explanation: "The argument assumes that extensive training is necessary (not just common) for becoming a professional athlete. Without this link, the conclusion doesn't follow.",
    difficulty: "medium",
  },
  {
    id: "ap-4",
    type: "argument-parts",
    stimulus: "Historical evidence shows that economic recessions follow periods of rapid growth. The economy has grown rapidly for five years. Policymakers should prepare for a potential recession.",
    question: "What role does 'The economy has grown rapidly for five years' play?",
    options: [
      "Main conclusion",
      "Evidence supporting the main conclusion",
      "Background information",
      "A premise that applies the general principle to the current situation",
    ],
    correctIndex: 3,
    explanation: "This statement applies the general pattern (recessions follow growth) to the current situation, serving as a premise that helps establish the conclusion about preparing for recession.",
    difficulty: "hard",
  },
  {
    id: "ap-5",
    type: "argument-parts",
    stimulus: "Students learn better when engaged. Interactive lessons increase engagement. Our school should implement more interactive lessons to improve learning outcomes.",
    question: "What is the main conclusion of this argument?",
    options: [
      "Students learn better when engaged",
      "Interactive lessons increase engagement",
      "Our school should implement more interactive lessons",
      "Engagement leads to better learning outcomes",
    ],
    correctIndex: 2,
    explanation: "The main conclusion is the recommendation for action: implementing interactive lessons. The other statements are premises building toward this recommendation.",
    difficulty: "easy",
  },
  {
    id: "ap-6",
    type: "argument-parts",
    stimulus: "The defendant had motive, opportunity, and no alibi. The physical evidence places them at the scene. Given all this, the defendant must be guilty.",
    question: "What role does 'The physical evidence places them at the scene' play?",
    options: [
      "Main conclusion",
      "A premise supporting the conclusion",
      "An intermediate conclusion",
      "An assumption",
    ],
    correctIndex: 1,
    explanation: "This is one of several premises listed as evidence. Along with motive, opportunity, and lack of alibi, it supports the conclusion of guilt.",
    difficulty: "medium",
  },
];

// ============================================
// GAME FUNCTIONS
// ============================================

const ALL_QUESTIONS: Record<GameType, GameQuestion[]> = {
  "find-conclusion": FIND_CONCLUSION_QUESTIONS,
  "contrapositive": CONTRAPOSITIVE_QUESTIONS,
  "spot-flaw": SPOT_FLAW_QUESTIONS,
  "argument-parts": ARGUMENT_PARTS_QUESTIONS,
};

/**
 * Get a random selection of questions for a game
 */
export function getGameQuestions(type: GameType, count: number = 5): GameQuestion[] {
  const questions = [...ALL_QUESTIONS[type]];

  // Shuffle using Fisher-Yates
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions.slice(0, count);
}

/**
 * Create a new game session
 */
export function createGameSession(type: GameType, questionCount: number = 5): GameSession {
  return {
    gameType: type,
    questions: getGameQuestions(type, questionCount),
    currentIndex: 0,
    answers: [],
    startedAt: new Date(),
    completedAt: null,
  };
}

/**
 * Calculate game result
 */
export function calculateGameResult(session: GameSession): GameResult {
  const correct = session.questions.reduce((sum, q, i) => {
    return sum + (session.answers[i] === q.correctIndex ? 1 : 0);
  }, 0);

  return {
    gameType: session.gameType,
    correct,
    total: session.questions.length,
    timeSpent: session.completedAt
      ? (session.completedAt.getTime() - session.startedAt.getTime()) / 1000
      : 0,
    completedAt: session.completedAt || new Date(),
  };
}

// ============================================
// PROGRESS STORAGE
// ============================================

const GAME_PROGRESS_KEY = "lsatprep-lr-games";

export function getInitialGameProgress(): GameProgress {
  return {
    gamesPlayed: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    bestStreaks: {
      "find-conclusion": 0,
      "contrapositive": 0,
      "spot-flaw": 0,
      "argument-parts": 0,
    },
    lastPlayed: null,
    results: [],
  };
}

export function loadGameProgress(userId?: string): GameProgress {
  if (typeof window === "undefined") return getInitialGameProgress();

  const key = userId ? `${GAME_PROGRESS_KEY}_${userId}` : GAME_PROGRESS_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return getInitialGameProgress();

  try {
    const parsed = JSON.parse(stored);
    return {
      ...parsed,
      lastPlayed: parsed.lastPlayed ? new Date(parsed.lastPlayed) : null,
      results: parsed.results.map((r: GameResult) => ({
        ...r,
        completedAt: new Date(r.completedAt),
      })),
    };
  } catch {
    return getInitialGameProgress();
  }
}

export function saveGameProgress(progress: GameProgress, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${GAME_PROGRESS_KEY}_${userId}` : GAME_PROGRESS_KEY;
  localStorage.setItem(key, JSON.stringify(progress));
}

export function updateGameProgress(
  progress: GameProgress,
  result: GameResult
): GameProgress {
  // Calculate streak for this game type
  const currentStreak = result.correct;
  const bestStreak = Math.max(progress.bestStreaks[result.gameType], currentStreak);

  return {
    gamesPlayed: progress.gamesPlayed + 1,
    totalCorrect: progress.totalCorrect + result.correct,
    totalQuestions: progress.totalQuestions + result.total,
    bestStreaks: {
      ...progress.bestStreaks,
      [result.gameType]: bestStreak,
    },
    lastPlayed: result.completedAt,
    results: [...progress.results.slice(-49), result], // Keep last 50 results
  };
}
