import { Test, Section, Question } from "./lsat-types";
import { additionalLRQuestions, additionalRCQuestions } from "./additional-questions";
import { expandedLRQuestions, expandedRCQuestions } from "./expanded-questions";
import { allLRQuestions, allRCQuestions, questionBankStats } from "./questions";

// ============================================
// SAMPLE LOGICAL REASONING QUESTIONS
// ============================================
// These are ORIGINAL questions written in the style of real LSAT questions
// They follow the exact format, difficulty, and reasoning patterns of the actual test

const lrQuestions1: Question[] = [
  {
    id: "lr1-q1",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Critic: The new municipal recycling program has been praised for increasing recycling rates by 40 percent. However, this praise is unwarranted. The program was implemented at the same time as a new state law requiring manufacturers to use more recyclable packaging. Therefore, the municipal program itself deserves no credit for the increased recycling rates.`,
    questionStem: "The reasoning in the critic's argument is flawed because the argument",
    answerChoices: [
      {
        letter: "A",
        text: "fails to consider that the state law might have been enacted in response to the success of municipal recycling programs",
      },
      {
        letter: "B",
        text: "overlooks the possibility that both the municipal program and the state law contributed to the increased recycling rates",
      },
      {
        letter: "C",
        text: "presumes, without providing justification, that increased recycling rates are desirable",
      },
      {
        letter: "D",
        text: "relies on evidence that is inconsistent with other claims made in the argument",
      },
      {
        letter: "E",
        text: "draws a conclusion about the__(intentions of policymakers based solely on the__(outcomes of their policies",
      },
    ],
    correctAnswer: "B",
    explanation: "The critic commits a false dichotomy by assuming that because the state law existed, the municipal program deserves NO credit. However, it's entirely possible that BOTH factors contributed to the 40% increase. The correct answer (B) identifies this flaw: the argument overlooks the possibility that both causes worked together to produce the effect.",
    wrongAnswerExplanations: {
      A: "While this is a possible consideration, the argument's main flaw is not about the sequence of events but about attributing cause.",
      C: "The argument doesn't need to justify that recycling is desirable; that's not the logical flaw.",
      D: "There is no inconsistency in the evidence presented.",
      E: "The argument doesn't discuss anyone's intentions.",
    },
    difficulty: "medium",
  },
  {
    id: "lr1-q2",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Archaeologist: The ancient Minoan civilization on Crete showed no signs of defensive fortifications, unlike other Mediterranean civilizations of the same era. This suggests that the Minoans must have had a powerful navy that protected their island from potential invaders, making land-based defenses unnecessary.`,
    questionStem: "Which one of the following, if true, most strengthens the archaeologist's argument?",
    answerChoices: [
      {
        letter: "A",
        text: "Ancient texts from neighboring civilizations describe Crete as being surrounded by a formidable fleet of ships",
      },
      {
        letter: "B",
        text: "The Minoans were known to be skilled metalworkers who could have constructed strong defensive walls if they had wanted to",
      },
      {
        letter: "C",
        text: "Other island civilizations of the same era that lacked navies were eventually conquered by mainland powers",
      },
      {
        letter: "D",
        text: "The Minoan civilization eventually collapsed around 1450 BCE, possibly due to a volcanic eruption",
      },
      {
        letter: "E",
        text: "Archaeological evidence shows that the Minoans engaged in extensive maritime trade throughout the Mediterranean",
      },
    ],
    correctAnswer: "A",
    explanation: "The archaeologist argues that the lack of defensive fortifications implies the existence of a powerful navy. Answer (A) directly strengthens this by providing independent evidence (ancient texts) confirming the existence of this navy. This corroborates the inference from the absence of walls.",
    wrongAnswerExplanations: {
      B: "This weakens the argument by suggesting they chose not to build walls, not that they didn't need them.",
      C: "This shows that lacking a navy leads to conquest, but doesn't directly support that the Minoans HAD a navy.",
      D: "Irrelevant to whether they had a navy or why they lacked fortifications.",
      E: "Maritime trade suggests ships but not necessarily a military navy for defense.",
    },
    difficulty: "medium",
  },
  {
    id: "lr1-q3",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Nutritionist: People who drink three or more cups of coffee daily have a 20 percent lower risk of developing type 2 diabetes than those who drink no coffee. Therefore, drinking coffee must provide some protection against diabetes.`,
    questionStem: "The argument depends on which one of the following assumptions?",
    answerChoices: [
      {
        letter: "A",
        text: "The people studied who drank three or more cups of coffee daily did not also engage in other behaviors that might reduce diabetes risk",
      },
      {
        letter: "B",
        text: "Coffee contains compounds that directly affect insulin production in the human body",
      },
      {
        letter: "C",
        text: "The lower diabetes risk observed in coffee drinkers is not entirely attributable to factors unrelated to their coffee consumption",
      },
      {
        letter: "D",
        text: "Drinking fewer than three cups of coffee daily provides no protection against diabetes",
      },
      {
        letter: "E",
        text: "The study that produced these findings followed participants for at least ten years",
      },
    ],
    correctAnswer: "C",
    explanation: "Use the negation test: If the lower diabetes risk WERE entirely attributable to factors unrelated to coffee consumption, then the conclusion that coffee provides protection would be unfounded. The argument assumes that at least SOME of the protective effect comes from coffee itself, not entirely from other factors. This is a necessary (not sufficient) assumption.",
    wrongAnswerExplanations: {
      A: "This is too strong. The argument can allow that coffee drinkers also do other healthy things, as long as coffee contributes SOME protection.",
      B: "The mechanism doesn't need to be known for the correlation to suggest causation.",
      D: "The argument doesn't depend on there being a threshold effect.",
      E: "The duration of the study is not essential to the logical structure of the argument.",
    },
    difficulty: "hard",
  },
  {
    id: "lr1-q4",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All of the candidates for the marketing position have MBAs. Some of the candidates have previous experience in digital advertising. None of the candidates with previous experience in digital advertising have worked in the nonprofit sector.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      {
        letter: "A",
        text: "No candidates with MBAs have worked in the nonprofit sector",
      },
      {
        letter: "B",
        text: "Some candidates with MBAs do not have previous experience in digital advertising",
      },
      {
        letter: "C",
        text: "Some candidates who have worked in the nonprofit sector do not have MBAs",
      },
      {
        letter: "D",
        text: "If a candidate has worked in the nonprofit sector, that candidate does not have previous experience in digital advertising",
      },
      {
        letter: "E",
        text: "All candidates without previous experience in digital advertising have worked in the nonprofit sector",
      },
    ],
    correctAnswer: "D",
    explanation: "From the third statement: No candidates with digital advertising experience have worked in the nonprofit sector. The contrapositive of this is: If a candidate HAS worked in the nonprofit sector, then that candidate does NOT have digital advertising experience. This is exactly what answer (D) states.",
    wrongAnswerExplanations: {
      A: "We only know about candidates for this position, not all MBA holders. Also, only SOME candidates have digital advertising experience.",
      B: "We know SOME have digital advertising experience, but 'some' could mean all. We can't infer that some don't.",
      C: "We have no information about people who worked in nonprofit who AREN'T candidates.",
      E: "This reverses the logic incorrectly. Lacking digital ad experience doesn't mean they HAVE nonprofit experience.",
    },
    difficulty: "medium",
  },
  {
    id: "lr1-q5",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Educational researcher: Students who use laptops to take notes in class perform worse on conceptual understanding tests than students who take notes by hand. This demonstrates that the act of handwriting, which requires students to process and condense information, leads to better learning than typing, which allows students to transcribe lectures verbatim without thinking.`,
    questionStem: "Which one of the following, if true, most weakens the researcher's argument?",
    answerChoices: [
      {
        letter: "A",
        text: "Students who take notes by hand report finding the process more physically tiring than typing",
      },
      {
        letter: "B",
        text: "In the study, students were not allowed to review their notes before taking the conceptual understanding tests",
      },
      {
        letter: "C",
        text: "The students who chose to use laptops in the study had lower grade point averages prior to the study than those who chose to write by hand",
      },
      {
        letter: "D",
        text: "Typing speed varies more widely among students than handwriting speed does",
      },
      {
        letter: "E",
        text: "Some students who type their notes do summarize and condense information rather than transcribing verbatim",
      },
    ],
    correctAnswer: "C",
    explanation: "The researcher assumes that the METHOD of note-taking (laptop vs. hand) caused the difference in test performance. But answer (C) reveals a confounding variable: students who CHOSE laptops already had lower GPAs. This suggests the performance difference might be due to pre-existing differences in the students themselves, not the note-taking method.",
    wrongAnswerExplanations: {
      A: "Physical tiredness doesn't address the learning outcome or challenge the causal claim.",
      B: "This applies to both groups equally, so it doesn't explain the difference between them.",
      D: "Variation in typing speed doesn't challenge the comparison between the two methods.",
      E: "While relevant, this doesn't weaken the main finding about the GROUPS of students.",
    },
    difficulty: "hard",
  },
];

const lrQuestions2: Question[] = [
  {
    id: "lr2-q1",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `If a restaurant serves fresh seafood, it must have reliable suppliers. Marina's Kitchen serves fresh seafood. Therefore, Marina's Kitchen must have reliable suppliers.`,
    questionStem: "The pattern of reasoning in which one of the following is most similar to that in the argument above?",
    answerChoices: [
      {
        letter: "A",
        text: "If a building is a skyscraper, it requires deep foundations. This building has deep foundations. Therefore, this building is a skyscraper.",
      },
      {
        letter: "B",
        text: "All championship teams have talented players. The Rovers are a championship team. Therefore, the Rovers have talented players.",
      },
      {
        letter: "C",
        text: "Some historical novels are well-researched. This book is a historical novel. Therefore, this book might be well-researched.",
      },
      {
        letter: "D",
        text: "If a movie wins an Oscar, its director becomes famous. This movie did not win an Oscar. Therefore, its director will not become famous.",
      },
      {
        letter: "E",
        text: "Most successful startups have experienced founders. This startup is successful. Therefore, this startup probably has experienced founders.",
      },
    ],
    correctAnswer: "B",
    explanation: "The original argument has the form: If A then B. A is true. Therefore, B is true. (Modus ponens) Answer (B) has the same structure: If championship team (A) then talented players (B). Rovers are a championship team (A). Therefore, Rovers have talented players (B).",
    wrongAnswerExplanations: {
      A: "This affirms the consequent (has deep foundations, therefore is a skyscraper) - a logical fallacy.",
      C: "Uses 'some' rather than 'all/if', leading to a tentative conclusion - different structure.",
      D: "This denies the antecedent (didn't win Oscar, therefore not famous) - a logical fallacy.",
      E: "Uses 'most' and a probabilistic conclusion - different structure from the categorical original.",
    },
    difficulty: "medium",
  },
  {
    id: "lr2-q2",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A recent study found that professional musicians have significantly better hearing than the general population, with particular sensitivity to subtle pitch variations. Surprisingly, the study also found that professional musicians have higher rates of hearing damage and hearing loss than non-musicians of the same age.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent discrepancy described above?",
    answerChoices: [
      {
        letter: "A",
        text: "Professional musicians often perform in environments where they are exposed to dangerously high sound levels",
      },
      {
        letter: "B",
        text: "The study measured hearing ability and hearing damage using different methodologies",
      },
      {
        letter: "C",
        text: "Many professional musicians receive training in how to protect their hearing during performances",
      },
      {
        letter: "D",
        text: "Musicians' specialized auditory training develops brain regions responsible for pitch perception, independently of the physical condition of their ears",
      },
      {
        letter: "E",
        text: "Hearing damage typically affects high-frequency sounds before affecting the middle frequencies used in most music",
      },
    ],
    correctAnswer: "D",
    explanation: "The paradox is: How can musicians have BETTER hearing ability but MORE hearing damage? Answer (D) resolves this by showing these are measuring different things: the brain's processing ability (enhanced by training) vs. the physical condition of the ears (damaged by exposure). Musicians' brains compensate for their damaged ears.",
    wrongAnswerExplanations: {
      A: "This explains the hearing damage but not how they still have better hearing ability.",
      B: "This questions the study's validity rather than explaining the findings.",
      C: "This would suggest they should have LESS damage, deepening the paradox.",
      E: "This is interesting but doesn't explain how damaged ears can still perform better.",
    },
    difficulty: "hard",
  },
  {
    id: "lr2-q3",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Historian: Some scholars argue that the Roman Empire fell primarily due to economic decline. But this view overlooks the fact that the Eastern Roman Empire, with essentially the same economic system, survived for another thousand years after the fall of Rome. Clearly, economic factors alone cannot explain the fall of the Western Empire.`,
    questionStem: "The historian's argument proceeds by",
    answerChoices: [
      {
        letter: "A",
        text: "questioning the__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(accuracy of the__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(data used to support a claim",
      },
      {
        letter: "B",
        text: "providing a__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(counterexample that demonstrates the__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(insufficiency of a proposed explanation",
      },
      {
        letter: "C",
        text: "arguing that because two events are correlated, one must have caused the other",
      },
      {
        letter: "D",
        text: "establishing a__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(general principle and then applying it to a specific case",
      },
      {
        letter: "E",
        text: "showing that an__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(__(opponent's argument leads to a contradiction",
      },
    ],
    correctAnswer: "B",
    explanation: "The historian attacks the 'economic decline' explanation by pointing to the Eastern Roman Empire as a counterexample. If economic factors were THE cause, then the East (with the same economy) should have also fallen - but it didn't. This counterexample shows the explanation is insufficient.",
    wrongAnswerExplanations: {
      A: "The historian doesn't question data accuracy but rather the explanatory power of the economic theory.",
      C: "The historian is REFUTING a causal claim, not making one based on correlation.",
      D: "The historian doesn't establish a general principle; they use a specific counterexample.",
      E: "The historian doesn't show a logical contradiction within the opponent's reasoning.",
    },
    difficulty: "medium",
  },
  {
    id: "lr2-q4",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: A government policy is justified only if it produces benefits for the majority of citizens and does not violate the fundamental rights of any citizen.`,
    questionStem: "Which one of the following judgments most closely conforms to the principle stated above?",
    answerChoices: [
      {
        letter: "A",
        text: "A policy requiring all citizens to wear seatbelts is justified because it saves lives, even though some citizens object to being told what to do.",
      },
      {
        letter: "B",
        text: "A policy providing free public education is justified because it benefits children, even though it requires higher taxes from citizens without children.",
      },
      {
        letter: "C",
        text: "A policy allowing warrantless searches of homes is not justified because it violates privacy rights, even though it would help police solve more crimes.",
      },
      {
        letter: "D",
        text: "A policy banning all automobile traffic in a city is not justified because most citizens need cars for work, even though it would improve air quality.",
      },
      {
        letter: "E",
        text: "A policy requiring citizens to donate blood is justified because the majority of citizens would benefit from increased blood supplies.",
      },
    ],
    correctAnswer: "C",
    explanation: "The principle requires BOTH: (1) benefits for the majority AND (2) no violation of fundamental rights. Answer (C) correctly applies this: even though warrantless searches might benefit the majority (more crimes solved), it violates fundamental privacy rights, so it's NOT justified. This is the only answer that correctly applies BOTH conditions of the principle.",
    wrongAnswerExplanations: {
      A: "Doesn't address whether 'being told what to do' constitutes a fundamental rights violation.",
      B: "Doesn't clearly establish that the majority (not just children) benefits.",
      D: "Correctly finds a policy unjustified for lacking majority benefit, but doesn't consider rights.",
      E: "Ignores the rights condition entirely - forced blood donation could violate bodily autonomy.",
    },
    difficulty: "hard",
  },
  {
    id: "lr2-q5",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Only those who have completed a graduate degree are eligible for the senior analyst position. Chen has completed a graduate degree. Therefore, Chen is eligible for the senior analyst position.`,
    questionStem: "The conclusion of the argument follows logically if which one of the following is assumed?",
    answerChoices: [
      {
        letter: "A",
        text: "Having a graduate degree is sufficient for eligibility for the senior analyst position",
      },
      {
        letter: "B",
        text: "Chen is the only person who has completed a graduate degree",
      },
      {
        letter: "C",
        text: "The senior analyst position is the only position that requires a graduate degree",
      },
      {
        letter: "D",
        text: "All eligible candidates for the senior analyst position have applied for it",
      },
      {
        letter: "E",
        text: "Chen wants to be considered for the senior analyst position",
      },
    ],
    correctAnswer: "A",
    explanation: "The argument states that a graduate degree is NECESSARY ('Only those who have...'). But to conclude Chen is eligible, we need the degree to be SUFFICIENT. The argument implicitly assumes that having the degree is enough to be eligible (not just a requirement). Answer (A) provides this missing sufficient condition.",
    wrongAnswerExplanations: {
      B: "Whether Chen is the ONLY one with a degree is irrelevant to whether Chen is eligible.",
      C: "Other positions' requirements don't affect Chen's eligibility for this position.",
      D: "Whether eligible people have applied doesn't affect whether Chen IS eligible.",
      E: "Chen's preferences don't affect eligibility status.",
    },
    difficulty: "medium",
  },
];

// ============================================
// SAMPLE READING COMPREHENSION QUESTIONS
// ============================================

const rcPassage1 = `The development of the printing press in fifteenth-century Europe is often credited to Johannes Gutenberg, who introduced movable type to the Western world around 1440. However, this narrative overlooks the significant technological precursors that made Gutenberg's innovation possible, as well as the social and economic conditions that determined its success.

The concept of movable type had been developed centuries earlier in East Asia. Chinese inventors created ceramic movable type as early as 1040 CE, and Korean craftsmen later developed metal movable type in the thirteenth century. While these innovations had limited impact in their original contexts—partly due to the thousands of characters required for Chinese and Korean writing systems—they demonstrated the feasibility of the concept that Gutenberg would later adapt.

What distinguished Gutenberg's contribution was not simply the idea of movable type, but rather the systematic integration of several technologies into a practical printing system. He developed a specialized alloy for casting durable type, a press mechanism adapted from wine and olive presses, and an oil-based ink that adhered properly to metal type. Most importantly, his system was well-suited to the Latin alphabet, which required only a few dozen distinct characters.

The success of the printing press also depended on existing social conditions. Rising literacy rates among the merchant class created demand for books, while the development of paper manufacturing in Europe provided an affordable medium for printing. The established network of trade routes facilitated the distribution of printed materials, and the relative political fragmentation of Europe meant that censorship was difficult to enforce uniformly, allowing controversial ideas to spread.

Thus, while Gutenberg's contribution was genuinely innovative, it should be understood as the successful synthesis and adaptation of existing technologies and ideas, enabled by favorable social and economic conditions. The printing press was less a sudden invention than a gradual development that reached a tipping point in fifteenth-century Europe.`;

const rcQuestions: Question[] = [
  {
    id: "rc1-q1",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: rcPassage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      {
        letter: "A",
        text: "Gutenberg's printing press was based entirely on technology that had been developed in East Asia centuries earlier.",
      },
      {
        letter: "B",
        text: "The success of the printing press should be attributed to the social and economic conditions of fifteenth-century Europe rather than to Gutenberg's innovations.",
      },
      {
        letter: "C",
        text: "Gutenberg's achievement was the integration and adaptation of existing technologies into a practical system, enabled by favorable social conditions.",
      },
      {
        letter: "D",
        text: "The development of movable type in East Asia demonstrates that printing technology could have succeeded anywhere under the right circumstances.",
      },
      {
        letter: "E",
        text: "Gutenberg has been unfairly credited with inventing the printing press when he merely copied Asian technology.",
      },
    ],
    correctAnswer: "C",
    explanation: "The passage's main argument, stated most clearly in the final paragraph, is that Gutenberg's contribution was 'the successful synthesis and adaptation of existing technologies and ideas, enabled by favorable social and economic conditions.' Answer (C) captures this nuanced view - acknowledging Gutenberg's innovation while contextualizing it.",
    wrongAnswerExplanations: {
      A: "Too extreme - the passage says the concept came from Asia but Gutenberg made significant innovations.",
      B: "Too one-sided - the passage credits both Gutenberg's innovations AND social conditions.",
      D: "The passage notes Asian movable type had 'limited impact' due to different writing systems.",
      E: "The passage explicitly says Gutenberg's contribution was 'genuinely innovative,' not merely copying.",
    },
    difficulty: "medium",
    passageId: "rc1",
  },
  {
    id: "rc1-q2",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: rcPassage1,
    questionStem: "The author's discussion of East Asian movable type in the second paragraph serves primarily to",
    answerChoices: [
      {
        letter: "A",
        text: "argue that Gutenberg should not receive credit for inventing movable type",
      },
      {
        letter: "B",
        text: "demonstrate that European technology was generally less advanced than Asian technology in this period",
      },
      {
        letter: "C",
        text: "establish that the concept of movable type predated Gutenberg's work, providing context for his innovation",
      },
      {
        letter: "D",
        text: "explain why the printing press failed to develop in East Asia before it developed in Europe",
      },
      {
        letter: "E",
        text: "suggest that Gutenberg was aware of and directly borrowed from Asian printing technology",
      },
    ],
    correctAnswer: "C",
    explanation: "The second paragraph introduces Asian movable type to show that 'the concept' existed earlier, 'demonstrat[ing] the feasibility' of what Gutenberg adapted. This provides historical context without denying Gutenberg's innovations (which are discussed in paragraph 3).",
    wrongAnswerExplanations: {
      A: "The passage still credits Gutenberg with 'genuinely innovative' contributions.",
      B: "The passage makes no broad comparison of European vs. Asian technological levels.",
      D: "The passage notes limited impact but doesn't claim the technology 'failed' in Asia.",
      E: "The passage doesn't claim Gutenberg knew of or borrowed from Asian technology.",
    },
    difficulty: "medium",
    passageId: "rc1",
  },
  {
    id: "rc1-q3",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: rcPassage1,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about the success of movable type printing?",
    answerChoices: [
      {
        letter: "A",
        text: "It would have succeeded in any culture with an alphabetic writing system.",
      },
      {
        letter: "B",
        text: "It required both technological innovation and favorable social conditions.",
      },
      {
        letter: "C",
        text: "It was primarily dependent on the development of paper manufacturing.",
      },
      {
        letter: "D",
        text: "It would have occurred even without Gutenberg's specific contributions.",
      },
      {
        letter: "E",
        text: "It was inevitable given the prior development of movable type in East Asia.",
      },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly discusses both Gutenberg's technological innovations (paragraph 3) and the 'social conditions' (paragraph 4) that 'the success of the printing press also depended on.' The conclusion emphasizes both factors, supporting answer (B).",
    wrongAnswerExplanations: {
      A: "Too strong - alphabetic writing helped but wasn't stated as sufficient.",
      C: "Paper was one of several social conditions, not the primary factor.",
      D: "The passage doesn't suggest printing would have succeeded without Gutenberg's specific synthesis.",
      E: "'Inevitable' is too strong; the passage emphasizes the importance of specific conditions.",
    },
    difficulty: "medium",
    passageId: "rc1",
  },
  {
    id: "rc1-q4",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: rcPassage1,
    questionStem: "The author's attitude toward the conventional view of Gutenberg's achievement can best be described as",
    answerChoices: [
      {
        letter: "A",
        text: "dismissive, viewing it as a complete misrepresentation of historical facts",
      },
      {
        letter: "B",
        text: "skeptical, suggesting it may be based on fabricated evidence",
      },
      {
        letter: "C",
        text: "accepting, while arguing that it needs to be supplemented with additional context",
      },
      {
        letter: "D",
        text: "ambivalent, unable to decide whether Gutenberg deserves credit for his work",
      },
      {
        letter: "E",
        text: "enthusiastic, celebrating Gutenberg as one of history's greatest innovators",
      },
    ],
    correctAnswer: "C",
    explanation: "The author says Gutenberg's contribution was 'genuinely innovative' but that the 'narrative overlooks' precursors and conditions. The author doesn't reject the conventional view but adds context to it - accepting while supplementing.",
    wrongAnswerExplanations: {
      A: "'Dismissive' and 'complete misrepresentation' are too strong.",
      B: "The author doesn't question any evidence, just the completeness of the narrative.",
      D: "The author clearly credits Gutenberg's innovation while contextualizing it.",
      E: "The author's tone is measured and analytical, not enthusiastic.",
    },
    difficulty: "medium",
    passageId: "rc1",
  },
];

// ============================================
// ASSEMBLE TEST
// ============================================

const section1: Section = {
  id: "section-1-lr",
  type: "logical-reasoning",
  questions: lrQuestions1,
  timeLimit: 2100, // 35 minutes
  isScored: true,
};

const section2: Section = {
  id: "section-2-lr",
  type: "logical-reasoning",
  questions: lrQuestions2,
  timeLimit: 2100,
  isScored: true,
};

const section3: Section = {
  id: "section-3-rc",
  type: "reading-comprehension",
  questions: rcQuestions,
  timeLimit: 2100,
  isScored: true,
};

// Note: In a real test, there would also be an unscored experimental section

export const sampleTest: Test = {
  id: "sample-test-1",
  name: "LSAT Practice Test 1",
  sections: [section1, section2, section3],
  createdAt: new Date(),
  totalTime: 6300, // 3 sections x 35 minutes = 105 minutes
};

// Export individual question sets for drill mode
// Includes original, additional, expanded, and bank questions for maximum variety (300+ questions)
export const logicalReasoningQuestions = [
  ...lrQuestions1,
  ...lrQuestions2,
  ...additionalLRQuestions,
  ...expandedLRQuestions,
  ...allLRQuestions,
];

export const readingComprehensionQuestions = [
  ...rcQuestions,
  ...additionalRCQuestions,
  ...expandedRCQuestions,
  ...allRCQuestions,
];

// Export question bank stats for UI display
export { questionBankStats };

// Total available questions for reference
export const totalQuestionCount = {
  lr: logicalReasoningQuestions.length,
  rc: readingComprehensionQuestions.length,
  total: logicalReasoningQuestions.length + readingComprehensionQuestions.length,
};
