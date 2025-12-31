// LSAT Vocabulary System
// Comprehensive vocabulary for LSAT preparation with 5 key categories

// ============================================
// TYPES
// ============================================

export type VocabCategory =
  | "argument-structure"
  | "lr-verbs"
  | "rc-tone"
  | "quantity-scope"
  | "precise-meaning";

export interface VocabWord {
  id: string;
  word: string;
  definition: string;
  example: string;
  category: VocabCategory;
  difficulty: "basic" | "intermediate" | "advanced";
}

export interface VocabFlashcardResult {
  wordId: string;
  correct: boolean;
  timestamp: Date;
}

export interface VocabProgress {
  cardsReviewed: number;
  correctCount: number;
  masteredWords: string[];  // Word IDs
  lastSession: Date | null;
  results: VocabFlashcardResult[];
}

// ============================================
// CATEGORY METADATA
// ============================================

export const VOCAB_CATEGORIES: Record<VocabCategory, { name: string; description: string }> = {
  "argument-structure": {
    name: "Argument Structure",
    description: "Words indicating logical relationships in arguments",
  },
  "lr-verbs": {
    name: "LR Verbs",
    description: "Key verbs used in Logical Reasoning questions",
  },
  "rc-tone": {
    name: "RC Tone Words",
    description: "Words describing author attitude and tone",
  },
  "quantity-scope": {
    name: "Quantity & Scope",
    description: "Words indicating scope, quantity, and degree",
  },
  "precise-meaning": {
    name: "Precise Meaning",
    description: "Commonly confused words with subtle distinctions",
  },
};

// ============================================
// ARGUMENT STRUCTURE & LOGIC WORDS
// ============================================

const ARGUMENT_STRUCTURE_WORDS: VocabWord[] = [
  {
    id: "as-1",
    word: "therefore",
    definition: "Indicates a conclusion follows from previous statements; signals the main point the author is arguing.",
    example: "All lawyers must pass the bar. John passed the bar. Therefore, John can practice law.",
    category: "argument-structure",
    difficulty: "basic",
  },
  {
    id: "as-2",
    word: "hence",
    definition: "Signals a conclusion or result; similar to 'therefore' but often used for more formal reasoning.",
    example: "The evidence is inconclusive; hence, we cannot make a determination.",
    category: "argument-structure",
    difficulty: "basic",
  },
  {
    id: "as-3",
    word: "thus",
    definition: "Indicates a conclusion drawn from the preceding information; marks the logical result.",
    example: "The defendant was at home during the crime. Thus, he could not have committed it.",
    category: "argument-structure",
    difficulty: "basic",
  },
  {
    id: "as-4",
    word: "since",
    definition: "Introduces a premise or reason supporting a conclusion; signals evidence.",
    example: "Since all mammals are warm-blooded, whales must be warm-blooded.",
    category: "argument-structure",
    difficulty: "basic",
  },
  {
    id: "as-5",
    word: "because",
    definition: "Introduces a premise or reason; explains why something is true.",
    example: "The policy failed because it lacked public support.",
    category: "argument-structure",
    difficulty: "basic",
  },
  {
    id: "as-6",
    word: "sufficient",
    definition: "Enough to guarantee an outcome; if the sufficient condition occurs, the necessary condition must follow.",
    example: "Being a mammal is sufficient for being warm-blooded.",
    category: "argument-structure",
    difficulty: "intermediate",
  },
  {
    id: "as-7",
    word: "necessary",
    definition: "Required for an outcome; must be present but alone may not guarantee the result.",
    example: "Oxygen is necessary for fire, but oxygen alone won't start a fire.",
    category: "argument-structure",
    difficulty: "intermediate",
  },
  {
    id: "as-8",
    word: "unless",
    definition: "Introduces a condition that prevents something; equivalent to 'if not' in conditional logic.",
    example: "You cannot enter unless you have a ticket. (No ticket = no entry)",
    category: "argument-structure",
    difficulty: "advanced",
  },
  {
    id: "as-9",
    word: "only if",
    definition: "Introduces a necessary condition; what follows is required but not sufficient.",
    example: "You can vote only if you are a citizen. (Voting requires citizenship)",
    category: "argument-structure",
    difficulty: "advanced",
  },
  {
    id: "as-10",
    word: "provided that",
    definition: "Introduces a sufficient condition; if this is met, the result follows.",
    example: "The contract is valid provided that both parties sign.",
    category: "argument-structure",
    difficulty: "intermediate",
  },
  {
    id: "as-11",
    word: "consequently",
    definition: "Signals a result or conclusion that follows logically from what precedes.",
    example: "The roads were icy; consequently, many accidents occurred.",
    category: "argument-structure",
    difficulty: "basic",
  },
  {
    id: "as-12",
    word: "moreover",
    definition: "Introduces additional supporting evidence; adds to the previous point.",
    example: "The study was flawed. Moreover, it was never replicated.",
    category: "argument-structure",
    difficulty: "basic",
  },
  {
    id: "as-13",
    word: "notwithstanding",
    definition: "Despite; in spite of; introduces a contrast that doesn't negate the main point.",
    example: "The project succeeded notwithstanding significant budget cuts.",
    category: "argument-structure",
    difficulty: "advanced",
  },
  {
    id: "as-14",
    word: "nevertheless",
    definition: "Despite what was just mentioned; introduces a contrast or concession.",
    example: "The evidence was weak. Nevertheless, the jury convicted.",
    category: "argument-structure",
    difficulty: "intermediate",
  },
  {
    id: "as-15",
    word: "albeit",
    definition: "Although; even though; introduces a concession within a larger argument.",
    example: "The solution, albeit imperfect, was widely adopted.",
    category: "argument-structure",
    difficulty: "advanced",
  },
  {
    id: "as-16",
    word: "insofar as",
    definition: "To the extent that; qualifies the scope of a claim.",
    example: "The theory is valid insofar as it applies to closed systems.",
    category: "argument-structure",
    difficulty: "advanced",
  },
  {
    id: "as-17",
    word: "inasmuch as",
    definition: "Because; since; introduces a reason or premise.",
    example: "Inasmuch as all citizens have rights, they also have responsibilities.",
    category: "argument-structure",
    difficulty: "advanced",
  },
  {
    id: "as-18",
    word: "given that",
    definition: "Assuming that; introduces a premise that is accepted as true for the argument.",
    example: "Given that resources are limited, we must prioritize.",
    category: "argument-structure",
    difficulty: "intermediate",
  },
];

// ============================================
// LOGICAL REASONING VERBS
// ============================================

const LR_VERBS: VocabWord[] = [
  {
    id: "lrv-1",
    word: "infer",
    definition: "To derive a conclusion from evidence and reasoning; to reach a logical conclusion not directly stated.",
    example: "From the smoke, we can infer that there is a fire.",
    category: "lr-verbs",
    difficulty: "basic",
  },
  {
    id: "lrv-2",
    word: "conclude",
    definition: "To reach a final judgment or decision based on reasoning and evidence.",
    example: "Based on the evidence, the jury concluded that the defendant was guilty.",
    category: "lr-verbs",
    difficulty: "basic",
  },
  {
    id: "lrv-3",
    word: "assume",
    definition: "To accept as true without proof; an unstated premise that the argument depends on.",
    example: "The argument assumes that all witnesses are telling the truth.",
    category: "lr-verbs",
    difficulty: "basic",
  },
  {
    id: "lrv-4",
    word: "presume",
    definition: "To suppose based on probability or reasonable evidence; similar to assume but with more basis.",
    example: "We presume innocence until proven guilty.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-5",
    word: "weaken",
    definition: "To reduce the strength of an argument by providing evidence against its conclusion or premises.",
    example: "Finding an alibi witness would weaken the prosecution's case.",
    category: "lr-verbs",
    difficulty: "basic",
  },
  {
    id: "lrv-6",
    word: "strengthen",
    definition: "To increase the support for an argument's conclusion by adding favorable evidence.",
    example: "DNA evidence would strengthen the case against the suspect.",
    category: "lr-verbs",
    difficulty: "basic",
  },
  {
    id: "lrv-7",
    word: "undermine",
    definition: "To damage or weaken gradually; to cast doubt on the foundation of an argument.",
    example: "New evidence undermines the traditional theory.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-8",
    word: "substantiate",
    definition: "To provide evidence to support or prove a claim; to verify.",
    example: "The documents substantiate the witness's testimony.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-9",
    word: "corroborate",
    definition: "To confirm or support with additional evidence; to provide independent verification.",
    example: "Multiple witnesses corroborated the victim's account.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-10",
    word: "refute",
    definition: "To prove a statement or argument to be wrong or false; to disprove completely.",
    example: "The experiment refuted the hypothesis that heat causes expansion.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-11",
    word: "rebut",
    definition: "To argue against; to offer opposing evidence (but not necessarily disprove).",
    example: "The defense attorney rebutted the prosecutor's claims.",
    category: "lr-verbs",
    difficulty: "advanced",
  },
  {
    id: "lrv-12",
    word: "contradict",
    definition: "To state the opposite of; to be inconsistent with.",
    example: "The witness's second statement contradicted her first.",
    category: "lr-verbs",
    difficulty: "basic",
  },
  {
    id: "lrv-13",
    word: "assert",
    definition: "To state or declare firmly and confidently as true.",
    example: "The author asserts that climate change is accelerating.",
    category: "lr-verbs",
    difficulty: "basic",
  },
  {
    id: "lrv-14",
    word: "contend",
    definition: "To argue or claim, especially in the face of opposition.",
    example: "The researcher contends that previous studies were flawed.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-15",
    word: "postulate",
    definition: "To suggest or assume as a basis for reasoning; to propose as a hypothesis.",
    example: "Einstein postulated that the speed of light is constant.",
    category: "lr-verbs",
    difficulty: "advanced",
  },
  {
    id: "lrv-16",
    word: "stipulate",
    definition: "To demand or specify as part of an agreement; to make a required condition.",
    example: "The contract stipulates a 30-day notice period.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-17",
    word: "preclude",
    definition: "To prevent or make impossible; to rule out.",
    example: "The alibi precludes the defendant's guilt.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
  {
    id: "lrv-18",
    word: "warrant",
    definition: "To justify or authorize; to provide sufficient grounds for.",
    example: "The evidence does not warrant such a strong conclusion.",
    category: "lr-verbs",
    difficulty: "intermediate",
  },
];

// ============================================
// READING COMPREHENSION TONE WORDS
// ============================================

const RC_TONE_WORDS: VocabWord[] = [
  {
    id: "rc-1",
    word: "skeptical",
    definition: "Doubting; questioning the truth or validity of claims.",
    example: "The author is skeptical of the study's methodology.",
    category: "rc-tone",
    difficulty: "basic",
  },
  {
    id: "rc-2",
    word: "dismissive",
    definition: "Showing contempt or lack of serious attention; rejecting as unworthy.",
    example: "The critic was dismissive of the new theory.",
    category: "rc-tone",
    difficulty: "basic",
  },
  {
    id: "rc-3",
    word: "laudatory",
    definition: "Expressing praise; highly complimentary.",
    example: "The review was laudatory, calling the work a masterpiece.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-4",
    word: "ambivalent",
    definition: "Having mixed feelings; seeing both positive and negative aspects.",
    example: "The author is ambivalent about technological progress.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-5",
    word: "indifferent",
    definition: "Having no particular interest or concern; neutral.",
    example: "The narrator remains indifferent to the outcome.",
    category: "rc-tone",
    difficulty: "basic",
  },
  {
    id: "rc-6",
    word: "sardonic",
    definition: "Mocking or cynical in a bitter or scornful way.",
    example: "The author's sardonic commentary criticizes modern politics.",
    category: "rc-tone",
    difficulty: "advanced",
  },
  {
    id: "rc-7",
    word: "reverent",
    definition: "Showing deep respect and admiration.",
    example: "The biographer takes a reverent approach to the subject.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-8",
    word: "didactic",
    definition: "Intended to teach or instruct, often excessively moralistic.",
    example: "The essay has a didactic tone, aiming to educate readers.",
    category: "rc-tone",
    difficulty: "advanced",
  },
  {
    id: "rc-9",
    word: "objective",
    definition: "Neutral and unbiased; based on facts rather than feelings.",
    example: "The report maintains an objective tone throughout.",
    category: "rc-tone",
    difficulty: "basic",
  },
  {
    id: "rc-10",
    word: "polemical",
    definition: "Strongly critical or controversial; intended to provoke argument.",
    example: "The author's polemical stance challenges mainstream views.",
    category: "rc-tone",
    difficulty: "advanced",
  },
  {
    id: "rc-11",
    word: "impartial",
    definition: "Treating all sides equally; not favoring one over another.",
    example: "The judge remained impartial throughout the trial.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-12",
    word: "condescending",
    definition: "Showing a patronizing superiority; talking down to others.",
    example: "The expert's condescending tone alienated the audience.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-13",
    word: "pragmatic",
    definition: "Practical and focused on results rather than theory.",
    example: "The author takes a pragmatic approach to policy reform.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-14",
    word: "equivocal",
    definition: "Deliberately ambiguous or unclear; open to multiple interpretations.",
    example: "The politician's equivocal response avoided commitment.",
    category: "rc-tone",
    difficulty: "advanced",
  },
  {
    id: "rc-15",
    word: "strident",
    definition: "Loud, harsh, and forceful; aggressively assertive.",
    example: "The activist's strident demands dominated the debate.",
    category: "rc-tone",
    difficulty: "advanced",
  },
  {
    id: "rc-16",
    word: "wry",
    definition: "Dryly humorous, often with a touch of irony.",
    example: "The author makes a wry observation about human nature.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-17",
    word: "dispassionate",
    definition: "Not influenced by emotion; calm and rational.",
    example: "The scientist maintained a dispassionate analysis of the data.",
    category: "rc-tone",
    difficulty: "intermediate",
  },
  {
    id: "rc-18",
    word: "earnest",
    definition: "Sincere and serious in intention; not joking.",
    example: "The author's earnest plea for change resonated with readers.",
    category: "rc-tone",
    difficulty: "basic",
  },
];

// ============================================
// QUANTITY & SCOPE WORDS
// ============================================

const QUANTITY_SCOPE_WORDS: VocabWord[] = [
  {
    id: "qs-1",
    word: "all",
    definition: "Every single one without exception; 100% of the group.",
    example: "All mammals are warm-blooded. (No exceptions)",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-2",
    word: "most",
    definition: "More than half but not all; the majority (>50%).",
    example: "Most students passed the exam. (More than half)",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-3",
    word: "some",
    definition: "At least one, possibly all; any non-zero quantity (1% to 100%).",
    example: "Some lawyers are politicians. (At least one)",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-4",
    word: "few",
    definition: "A small number; implies less than expected or desired.",
    example: "Few applicants met the requirements. (Small number)",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-5",
    word: "none",
    definition: "Zero; not any at all; 0% of the group.",
    example: "None of the witnesses saw the accident.",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-6",
    word: "only",
    definition: "Exclusively; nothing else but; creates a limiting condition.",
    example: "Only citizens can vote. (Non-citizens cannot)",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-7",
    word: "merely",
    definition: "Only; just; nothing more than; minimizes scope or importance.",
    example: "This is merely a suggestion, not a requirement.",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-8",
    word: "at least",
    definition: "A minimum of; no fewer than; sets a floor but not ceiling.",
    example: "At least ten people attended. (Could be more)",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-9",
    word: "at most",
    definition: "A maximum of; no more than; sets a ceiling but not floor.",
    example: "You may take at most three items. (Three or fewer)",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-10",
    word: "several",
    definition: "More than two but not very many; typically 3-7 items.",
    example: "Several witnesses testified at the trial.",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-11",
    word: "numerous",
    definition: "Many; a large but unspecified number.",
    example: "Numerous studies have confirmed this finding.",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-12",
    word: "exclusively",
    definition: "Only; solely; to the exclusion of all else.",
    example: "This program is exclusively for members.",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-13",
    word: "invariably",
    definition: "Always; without exception; in every case.",
    example: "She invariably arrives on time.",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-14",
    word: "predominantly",
    definition: "Mainly; for the most part; the majority.",
    example: "The audience was predominantly young adults.",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-15",
    word: "partially",
    definition: "To some extent but not completely; in part.",
    example: "The theory is only partially supported by evidence.",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-16",
    word: "seldom",
    definition: "Rarely; not often; infrequently.",
    example: "She seldom makes mistakes.",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
  {
    id: "qs-17",
    word: "typically",
    definition: "Usually; in most cases; as a general rule.",
    example: "Lawyers typically work long hours.",
    category: "quantity-scope",
    difficulty: "basic",
  },
  {
    id: "qs-18",
    word: "virtually",
    definition: "Almost entirely; for all practical purposes.",
    example: "The species is virtually extinct.",
    category: "quantity-scope",
    difficulty: "intermediate",
  },
];

// ============================================
// PRECISE MEANING WORDS
// ============================================

const PRECISE_MEANING_WORDS: VocabWord[] = [
  {
    id: "pm-1",
    word: "imply",
    definition: "To suggest indirectly; what the speaker/writer hints at (speaker implies).",
    example: "The author implies that the policy was a failure.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-2",
    word: "infer",
    definition: "To conclude from evidence; what the reader/listener derives (reader infers).",
    example: "We can infer from the data that sales are declining.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-3",
    word: "refute",
    definition: "To prove conclusively that something is wrong or false; to disprove.",
    example: "The evidence refutes the claim entirely.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-4",
    word: "rebut",
    definition: "To argue against or contradict; to offer opposing evidence (but not necessarily disprove).",
    example: "The defense rebutted each of the prosecutor's points.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-5",
    word: "comprise",
    definition: "To consist of; to be made up of (the whole comprises the parts).",
    example: "The committee comprises five members.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-6",
    word: "compose",
    definition: "To make up; to constitute (the parts compose the whole).",
    example: "Five members compose the committee.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-7",
    word: "continuous",
    definition: "Without interruption; unbroken in sequence.",
    example: "The rain was continuous for three days.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-8",
    word: "continual",
    definition: "Recurring frequently; happening repeatedly with breaks in between.",
    example: "The continual interruptions disrupted the meeting.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-9",
    word: "disinterested",
    definition: "Impartial; unbiased; having no stake in the outcome.",
    example: "A disinterested judge should decide the case.",
    category: "precise-meaning",
    difficulty: "advanced",
  },
  {
    id: "pm-10",
    word: "uninterested",
    definition: "Not interested; bored; lacking curiosity.",
    example: "The students seemed uninterested in the lecture.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-11",
    word: "affect",
    definition: "To influence or have an impact on (verb).",
    example: "The weather will affect our plans.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-12",
    word: "effect",
    definition: "A result or outcome (noun); to bring about (verb).",
    example: "The effect of the policy was unexpected.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-13",
    word: "complement",
    definition: "Something that completes or enhances; to make whole.",
    example: "The side dish complements the main course.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-14",
    word: "compliment",
    definition: "An expression of praise or admiration.",
    example: "She received many compliments on her presentation.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-15",
    word: "principle",
    definition: "A fundamental truth, rule, or belief (noun only).",
    example: "The principle of equal justice applies to all.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-16",
    word: "principal",
    definition: "Most important (adj); head of a school or main person (noun).",
    example: "The principal reason for the decision was cost.",
    category: "precise-meaning",
    difficulty: "basic",
  },
  {
    id: "pm-17",
    word: "mitigate",
    definition: "To make less severe or serious; to reduce the impact.",
    example: "Measures were taken to mitigate the damage.",
    category: "precise-meaning",
    difficulty: "intermediate",
  },
  {
    id: "pm-18",
    word: "militate",
    definition: "To work against; to have a significant effect (usually negative).",
    example: "Several factors militate against approval.",
    category: "precise-meaning",
    difficulty: "advanced",
  },
];

// ============================================
// COMBINED VOCABULARY
// ============================================

export const ALL_VOCAB: VocabWord[] = [
  ...ARGUMENT_STRUCTURE_WORDS,
  ...LR_VERBS,
  ...RC_TONE_WORDS,
  ...QUANTITY_SCOPE_WORDS,
  ...PRECISE_MEANING_WORDS,
];

export function getVocabByCategory(category: VocabCategory): VocabWord[] {
  return ALL_VOCAB.filter(word => word.category === category);
}

export function getRandomVocab(count: number = 10, category?: VocabCategory): VocabWord[] {
  const pool = category ? getVocabByCategory(category) : ALL_VOCAB;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ============================================
// MATCHING GAME - Word to Definition
// ============================================

export interface MatchingGameQuestion {
  word: VocabWord;
  options: string[];  // 4 definitions, one correct
  correctIndex: number;
}

export function generateMatchingQuestions(count: number = 5, category?: VocabCategory): MatchingGameQuestion[] {
  const words = getRandomVocab(count, category);
  const allDefs = (category ? getVocabByCategory(category) : ALL_VOCAB).map(w => w.definition);

  return words.map(word => {
    // Get 3 random wrong definitions
    const wrongDefs = allDefs
      .filter(d => d !== word.definition)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    // Combine and shuffle
    const options = [...wrongDefs, word.definition].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(word.definition);

    return {
      word,
      options,
      correctIndex,
    };
  });
}

// ============================================
// FILL IN THE BLANK GAME
// ============================================

export interface FillBlankQuestion {
  sentence: string;
  blankWord: VocabWord;
  options: string[];  // 4 word choices
  correctIndex: number;
}

export function generateFillBlankQuestions(count: number = 5, category?: VocabCategory): FillBlankQuestion[] {
  const words = getRandomVocab(count, category);
  const allWords = (category ? getVocabByCategory(category) : ALL_VOCAB).map(w => w.word);

  return words.map(word => {
    // Create sentence from example with blank
    const sentence = word.example.replace(
      new RegExp(word.word, 'gi'),
      '________'
    );

    // Get 3 random wrong words
    const wrongWords = allWords
      .filter(w => w.toLowerCase() !== word.word.toLowerCase())
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    // Combine and shuffle
    const options = [...wrongWords, word.word].sort(() => Math.random() - 0.5);
    const correctIndex = options.findIndex(o => o.toLowerCase() === word.word.toLowerCase());

    return {
      sentence,
      blankWord: word,
      options,
      correctIndex,
    };
  });
}

// ============================================
// PROGRESS STORAGE
// ============================================

const VOCAB_PROGRESS_KEY = "lsatprep-vocab-progress";

export function getInitialVocabProgress(): VocabProgress {
  return {
    cardsReviewed: 0,
    correctCount: 0,
    masteredWords: [],
    lastSession: null,
    results: [],
  };
}

export function loadVocabProgress(userId?: string): VocabProgress {
  if (typeof window === "undefined") return getInitialVocabProgress();

  const key = userId ? `${VOCAB_PROGRESS_KEY}_${userId}` : VOCAB_PROGRESS_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return getInitialVocabProgress();

  try {
    const parsed = JSON.parse(stored);
    return {
      ...parsed,
      lastSession: parsed.lastSession ? new Date(parsed.lastSession) : null,
      results: parsed.results.map((r: VocabFlashcardResult) => ({
        ...r,
        timestamp: new Date(r.timestamp),
      })),
    };
  } catch {
    return getInitialVocabProgress();
  }
}

export function saveVocabProgress(progress: VocabProgress, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${VOCAB_PROGRESS_KEY}_${userId}` : VOCAB_PROGRESS_KEY;
  localStorage.setItem(key, JSON.stringify(progress));
}

export function updateVocabProgress(
  progress: VocabProgress,
  wordId: string,
  correct: boolean
): VocabProgress {
  const result: VocabFlashcardResult = {
    wordId,
    correct,
    timestamp: new Date(),
  };

  // Check if word is mastered (3+ correct in a row)
  const recentResults = [...progress.results.slice(-50), result]
    .filter(r => r.wordId === wordId)
    .slice(-3);

  const isMastered = recentResults.length >= 3 && recentResults.every(r => r.correct);

  const masteredWords = isMastered && !progress.masteredWords.includes(wordId)
    ? [...progress.masteredWords, wordId]
    : progress.masteredWords;

  return {
    cardsReviewed: progress.cardsReviewed + 1,
    correctCount: progress.correctCount + (correct ? 1 : 0),
    masteredWords,
    lastSession: new Date(),
    results: [...progress.results.slice(-99), result], // Keep last 100
  };
}
