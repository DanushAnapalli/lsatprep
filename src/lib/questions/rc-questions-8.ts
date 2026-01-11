// Reading Comprehension Questions - Set 8 (Social Science: Economics)
import { Question } from "../lsat-types";

// Passage 1: Behavioral Economics
const passage1 = `Traditional economic theory assumes that individuals are rational actors who consistently maximize their utility given available information. This model of homo economicus has proven remarkably powerful for analyzing markets, pricing, and policy. Yet decades of psychological research have documented systematic deviations from rationality that behavioral economics now seeks to incorporate into economic analysis.

Daniel Kahneman and Amos Tversky's prospect theory, which earned Kahneman the Nobel Prize in Economics, demonstrated that people evaluate outcomes relative to reference points rather than absolute values, and that losses loom larger than equivalent gains. A person who loses $100 experiences greater distress than the pleasure from gaining $100—a phenomenon called loss aversion. This asymmetry helps explain why people reject objectively favorable gambles and why endowment effects make people value objects more simply because they own them.

Bounded rationality extends beyond prospect theory. People employ mental shortcuts (heuristics) that often work well but can produce systematic errors. The availability heuristic leads us to overestimate the probability of dramatic events that come easily to mind; anchoring causes judgments to be influenced by arbitrary starting points; present bias leads to excessive discounting of future consequences. These cognitive limitations mean that choices may not reflect underlying preferences even when information is available.

The policy implications are significant. Traditional economics suggests that providing information and removing barriers to choice will produce optimal outcomes. Behavioral economics suggests that choice architecture—how options are presented—matters enormously. Default options, in particular, exert powerful influence because many people stick with whatever is chosen for them. Automatic enrollment in retirement savings plans dramatically increases participation compared to opt-in systems, even when opting in requires minimal effort.

Critics worry that behavioral interventions constitute paternalism, manipulating people into choices deemed better by policymakers. Defenders argue that choice architecture is unavoidable—some option must be the default—and that designing defaults to help people achieve their own stated goals respects rather than overrides autonomy. This debate over "libertarian paternalism" continues to shape policy discussions in areas ranging from health care to environmental protection.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set8-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Traditional economics has been completely replaced by behavioral economics" },
      { letter: "B", text: "Behavioral economics documents systematic deviations from rationality that have important policy implications, though the appropriate role of choice architecture remains debated" },
      { letter: "C", text: "Kahneman and Tversky's research has been disproven by subsequent studies" },
      { letter: "D", text: "All behavioral interventions are paternalistic and should be avoided" },
      { letter: "E", text: "Loss aversion is the only important finding in behavioral economics" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents behavioral economics as documenting deviations from rationality with policy implications, while noting ongoing debate about whether behavioral interventions constitute inappropriate paternalism.",
    difficulty: "medium",
    passageId: "rc8-p1",
  },
  {
    id: "rc-set8-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses automatic enrollment in retirement savings plans primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that people should save more for retirement" },
      { letter: "B", text: "illustrate how default options can significantly influence behavior" },
      { letter: "C", text: "criticize traditional economic theory" },
      { letter: "D", text: "demonstrate that behavioral economics is paternalistic" },
      { letter: "E", text: "explain prospect theory" },
    ],
    correctAnswer: "B",
    explanation: "The retirement savings example illustrates the point that 'default options...exert powerful influence because many people stick with whatever is chosen for them.'",
    difficulty: "easy",
    passageId: "rc8-p1",
  },
  {
    id: "rc-set8-003",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, loss aversion refers to the phenomenon whereby",
    answerChoices: [
      { letter: "A", text: "people prefer certainty over uncertainty" },
      { letter: "B", text: "losses produce greater psychological impact than equivalent gains" },
      { letter: "C", text: "people become more risk-seeking after losses" },
      { letter: "D", text: "default options influence choices" },
      { letter: "E", text: "people discount future consequences" },
    ],
    correctAnswer: "B",
    explanation: "The passage defines loss aversion as the phenomenon where 'losses loom larger than equivalent gains'—a person 'who loses $100 experiences greater distress than the pleasure from gaining $100.'",
    difficulty: "easy",
    passageId: "rc8-p1",
  },
  {
    id: "rc-set8-004",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, defenders of 'libertarian paternalism' would most likely argue that",
    answerChoices: [
      { letter: "A", text: "all government intervention in markets is wrong" },
      { letter: "B", text: "designing defaults to help people achieve their stated goals respects autonomy" },
      { letter: "C", text: "traditional economics is entirely correct" },
      { letter: "D", text: "people always make optimal choices" },
      { letter: "E", text: "choice architecture should be random" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that defenders argue 'designing defaults to help people achieve their own stated goals respects rather than overrides autonomy.'",
    difficulty: "medium",
    passageId: "rc8-p1",
  },
  {
    id: "rc-set8-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage implies that traditional economic theory differs from behavioral economics in that traditional theory",
    answerChoices: [
      { letter: "A", text: "ignores market behavior entirely" },
      { letter: "B", text: "assumes individuals consistently maximize utility rationally" },
      { letter: "C", text: "denies the importance of information" },
      { letter: "D", text: "focuses primarily on cognitive limitations" },
      { letter: "E", text: "was developed by Kahneman and Tversky" },
    ],
    correctAnswer: "B",
    explanation: "The passage opens by stating that 'traditional economic theory assumes that individuals are rational actors who consistently maximize their utility given available information.'",
    difficulty: "medium",
    passageId: "rc8-p1",
  },
];

// Passage 2: Income Inequality
const passage2 = `The dramatic increase in income inequality in developed economies over the past four decades has become one of the most debated economic phenomena of our time. In the United States, the share of income going to the top 1 percent roughly doubled from the 1970s to the 2010s, while median real wages stagnated. Similar trends, though often less extreme, occurred across most wealthy nations.

Explanations for rising inequality fall into several categories. Skill-biased technological change emphasizes how computerization and automation increased demand for high-skilled workers while reducing demand for routine tasks that historically provided middle-class employment. Globalization enabled firms to relocate production to lower-wage countries, putting pressure on manufacturing workers in wealthy nations. Institutional factors—including declining unionization, erosion of minimum wage values, and changes in corporate governance—may have weakened worker bargaining power.

The relative importance of these factors remains contested. Economists emphasizing technology point to the correlation between computer adoption and wage premiums for college-educated workers. Those emphasizing institutions note that inequality increased far more in the United States and United Kingdom than in continental Europe, despite similar technological and global trade exposures. This variation suggests that policy choices, not just impersonal market forces, shape distributional outcomes.

The consequences of inequality extend beyond income statistics. Research has linked inequality to reduced social mobility, diminished trust, political polarization, and even worse health outcomes. However, establishing causation is difficult: inequality might cause these problems, or common factors might cause both inequality and associated harms. Some economists argue that inequality within limits is a natural and perhaps beneficial consequence of market economies, providing incentives for innovation and effort.

Policy responses depend partly on diagnosis. If technology drives inequality, investment in education and training may help workers adapt. If institutional factors predominate, strengthening worker protections and rebuilding unions may be more effective. Redistributive taxation can address inequality regardless of its source but raises concerns about economic efficiency. Most economists now agree that addressing extreme inequality requires some combination of these approaches.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set8-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Technology alone explains the rise in income inequality" },
      { letter: "B", text: "Rising income inequality has multiple contested causes, wide-ranging consequences, and requires varied policy responses" },
      { letter: "C", text: "Income inequality is entirely beneficial for economic growth" },
      { letter: "D", text: "Globalization has been definitively proven to cause inequality" },
      { letter: "E", text: "Redistributive taxation should be the only policy response" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses multiple explanations for inequality, debates about their relative importance, various consequences, and different policy responses depending on diagnosis.",
    difficulty: "medium",
    passageId: "rc8-p2",
  },
  {
    id: "rc-set8-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage compares the United States to continental Europe primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that technology cannot explain inequality" },
      { letter: "B", text: "suggest that institutional and policy differences may affect inequality outcomes" },
      { letter: "C", text: "argue that European policies should be adopted everywhere" },
      { letter: "D", text: "prove that globalization has no effect on wages" },
      { letter: "E", text: "criticize American economic policy" },
    ],
    correctAnswer: "B",
    explanation: "The comparison shows that 'inequality increased far more in the United States and United Kingdom than in continental Europe, despite similar technological and global trade exposures,' suggesting policy choices matter.",
    difficulty: "medium",
    passageId: "rc8-p2",
  },
  {
    id: "rc-set8-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, which of the following is mentioned as a potential consequence of inequality?",
    answerChoices: [
      { letter: "A", text: "Increased technological innovation" },
      { letter: "B", text: "Reduced social mobility" },
      { letter: "C", text: "Higher median wages" },
      { letter: "D", text: "Stronger unions" },
      { letter: "E", text: "More effective government" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'research has linked inequality to reduced social mobility, diminished trust, political polarization, and even worse health outcomes.'",
    difficulty: "easy",
    passageId: "rc8-p2",
  },
  {
    id: "rc-set8-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, economists who emphasize institutional explanations for inequality would most likely",
    answerChoices: [
      { letter: "A", text: "oppose all labor market regulations" },
      { letter: "B", text: "view declining unionization and minimum wage erosion as significant factors" },
      { letter: "C", text: "focus exclusively on technological change" },
      { letter: "D", text: "deny that inequality has increased" },
      { letter: "E", text: "argue that globalization is the only cause" },
    ],
    correctAnswer: "B",
    explanation: "The passage lists 'declining unionization, erosion of minimum wage values, and changes in corporate governance' as institutional factors that 'may have weakened worker bargaining power.'",
    difficulty: "medium",
    passageId: "rc8-p2",
  },
  {
    id: "rc-set8-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that establishing a causal link between inequality and its supposed consequences is difficult because",
    answerChoices: [
      { letter: "A", text: "no research has been conducted" },
      { letter: "B", text: "common factors might cause both inequality and associated harms" },
      { letter: "C", text: "inequality has no consequences" },
      { letter: "D", text: "consequences vary by country" },
      { letter: "E", text: "only correlation can be measured" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'establishing causation is difficult: inequality might cause these problems, or common factors might cause both inequality and associated harms.'",
    difficulty: "medium",
    passageId: "rc8-p2",
  },
];

// Passage 3: Development Economics
const passage3 = `The question of why some nations are rich while others remain poor has occupied economists since Adam Smith. Despite decades of research and policy experimentation, no single formula for economic development has emerged. Yet several insights have reshaped how scholars and policymakers approach the problem.

The post-World War II consensus emphasized capital accumulation and industrialization. Poor countries, lacking the savings to finance investment, needed external capital flows and technology transfer. Development would follow a predictable sequence of stages, from traditional agriculture through manufacturing to modern service economies. This modernization framework guided massive aid programs and state-led development strategies.

The failures of many state-led approaches prompted a shift toward market-oriented policies in the 1980s. The "Washington Consensus" emphasized macroeconomic stability, trade liberalization, and privatization. Proponents argued that getting prices right and reducing government interference would unleash entrepreneurial energy. Critics contended that this one-size-fits-all approach ignored local conditions and imposed inappropriate Western models.

More recent scholarship has emphasized the foundational role of institutions—the formal rules and informal norms governing economic activity. Countries with secure property rights, impartial contract enforcement, and constraints on government predation tend to prosper; those with extractive institutions that concentrate power and resources tend to stagnate. This institutional perspective helps explain why aid and policy reforms often fail: they may provide resources or change formal rules without altering the underlying power structures that determine actual practice.

The current consensus, if one exists, is that development requires some combination of good institutions, appropriate policies, and favorable initial conditions—with the precise mix varying by context. Randomized controlled trials have brought new rigor to evaluating specific interventions, though their external validity remains debated. What works in one village may not work in another, let alone at national scale. The search for understanding continues, humbled by the complexity of the problem.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set8-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Washington Consensus definitively solved the problem of economic development" },
      { letter: "B", text: "Understanding economic development has evolved through different frameworks, with current thinking emphasizing institutions and context-specific approaches" },
      { letter: "C", text: "Randomized controlled trials are the only valid method for studying development" },
      { letter: "D", text: "Capital accumulation is the sole driver of economic development" },
      { letter: "E", text: "Development economics has failed to produce any useful insights" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces evolution from capital-focused to market-oriented to institutional approaches, concluding that development requires context-specific combinations of factors.",
    difficulty: "medium",
    passageId: "rc8-p3",
  },
  {
    id: "rc-set8-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses the Washington Consensus primarily in order to",
    answerChoices: [
      { letter: "A", text: "advocate for its implementation globally" },
      { letter: "B", text: "describe a market-oriented shift that followed state-led development failures" },
      { letter: "C", text: "prove that markets always produce optimal outcomes" },
      { letter: "D", text: "explain the current institutional framework" },
      { letter: "E", text: "criticize all economic policy" },
    ],
    correctAnswer: "B",
    explanation: "The Washington Consensus is presented as 'a shift toward market-oriented policies' prompted by 'failures of many state-led approaches.'",
    difficulty: "medium",
    passageId: "rc8-p3",
  },
  {
    id: "rc-set8-013",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the institutional perspective helps explain why aid and reforms often fail because",
    answerChoices: [
      { letter: "A", text: "aid is always wasted" },
      { letter: "B", text: "they may change formal rules without altering underlying power structures" },
      { letter: "C", text: "institutions are unimportant to development" },
      { letter: "D", text: "markets always allocate resources efficiently" },
      { letter: "E", text: "capital accumulation is sufficient for development" },
    ],
    correctAnswer: "B",
    explanation: "The passage states aid and reforms may 'provide resources or change formal rules without altering the underlying power structures that determine actual practice.'",
    difficulty: "easy",
    passageId: "rc8-p3",
  },
  {
    id: "rc-set8-014",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, critics of the Washington Consensus most likely believed that",
    answerChoices: [
      { letter: "A", text: "markets should be completely eliminated" },
      { letter: "B", text: "a single approach might not fit all contexts and local conditions matter" },
      { letter: "C", text: "state-led development had succeeded everywhere" },
      { letter: "D", text: "prices are irrelevant to economic outcomes" },
      { letter: "E", text: "institutions do not affect development" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics 'contended that this one-size-fits-all approach ignored local conditions and imposed inappropriate Western models.'",
    difficulty: "medium",
    passageId: "rc8-p3",
  },
  {
    id: "rc-set8-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the current state of development economics can best be described as",
    answerChoices: [
      { letter: "A", text: "confident that the problem is solved" },
      { letter: "B", text: "acknowledging progress while recognizing ongoing complexity and uncertainty" },
      { letter: "C", text: "completely dismissive of all prior research" },
      { letter: "D", text: "advocating for a return to 1950s approaches" },
      { letter: "E", text: "certain that randomized trials will resolve all questions" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes evolution of understanding while concluding that 'the search for understanding continues, humbled by the complexity of the problem.'",
    difficulty: "medium",
    passageId: "rc8-p3",
  },
];

// Passage 4: Monetary Policy
const passage4 = `Central banks wield enormous influence over modern economies through their control of monetary policy—primarily the setting of short-term interest rates and, more recently, through unconventional tools like quantitative easing. Yet the theoretical foundations and practical implementation of monetary policy remain contested, with the 2008 financial crisis and its aftermath exposing significant gaps in prevailing frameworks.

The pre-crisis consensus held that inflation targeting—maintaining price stability through interest rate adjustments—would automatically promote financial stability and sustainable growth. Central banks should focus narrowly on controlling inflation while financial regulation addressed banking risks through a separate channel. This framework appeared successful for the two decades preceding the crisis, a period some dubbed the "Great Moderation."

The crisis challenged these assumptions. Housing bubbles and financial fragility accumulated precisely while inflation remained low and stable. The zero lower bound on interest rates limited central banks' ability to stimulate economies through conventional rate cuts, forcing experimentation with quantitative easing and forward guidance. Whether these unconventional tools worked, and through what mechanisms, remains debated.

Post-crisis thinking has increasingly emphasized financial stability as an explicit objective for monetary policy, though how to incorporate it remains unclear. Some advocate "leaning against the wind"—raising rates preemptively to discourage asset bubbles even when inflation is contained. Others argue that interest rates are too blunt an instrument for addressing financial risks and that macroprudential regulation should handle stability concerns.

The relationship between monetary policy and inequality has also received attention. Ultra-low interest rates may boost asset prices, benefiting wealthy holders of stocks and real estate while reducing returns for savers. Whether this effect is substantial enough to warrant consideration in monetary policy decisions divides economists. Central bank independence, long considered essential for credible inflation control, faces populist challenges from those who view unelected technocrats as insufficiently accountable for decisions with profound distributional consequences.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set8-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Inflation targeting has proven to be a complete success" },
      { letter: "B", text: "The 2008 crisis revealed limitations in prevailing monetary policy frameworks, prompting debates about objectives, tools, and accountability" },
      { letter: "C", text: "Central banks should be abolished" },
      { letter: "D", text: "Quantitative easing has been proven ineffective" },
      { letter: "E", text: "Financial stability should never be a monetary policy concern" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes how the crisis challenged pre-crisis assumptions, prompted unconventional policy responses, and sparked ongoing debates about monetary policy objectives and implementation.",
    difficulty: "medium",
    passageId: "rc8-p4",
  },
  {
    id: "rc-set8-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage mentions the 'Great Moderation' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that pre-crisis policies should be restored" },
      { letter: "B", text: "describe the apparent success that preceded the crisis and made its lessons more striking" },
      { letter: "C", text: "criticize central bank independence" },
      { letter: "D", text: "explain the mechanics of quantitative easing" },
      { letter: "E", text: "demonstrate that inflation targeting prevents all crises" },
    ],
    correctAnswer: "B",
    explanation: "The Great Moderation is mentioned to show that the inflation-targeting framework 'appeared successful for the two decades preceding the crisis,' providing context for how the crisis challenged these assumptions.",
    difficulty: "medium",
    passageId: "rc8-p4",
  },
  {
    id: "rc-set8-018",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, 'leaning against the wind' refers to",
    answerChoices: [
      { letter: "A", text: "reducing interest rates during recessions" },
      { letter: "B", text: "raising rates preemptively to discourage asset bubbles even when inflation is contained" },
      { letter: "C", text: "eliminating central bank independence" },
      { letter: "D", text: "increasing regulation of banks" },
      { letter: "E", text: "lowering inflation targets" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly defines leaning against the wind as 'raising rates preemptively to discourage asset bubbles even when inflation is contained.'",
    difficulty: "easy",
    passageId: "rc8-p4",
  },
  {
    id: "rc-set8-019",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the crisis revealed that low and stable inflation",
    answerChoices: [
      { letter: "A", text: "guarantees financial stability" },
      { letter: "B", text: "does not automatically prevent housing bubbles and financial fragility" },
      { letter: "C", text: "is undesirable" },
      { letter: "D", text: "should be replaced with higher inflation targets" },
      { letter: "E", text: "eliminates the need for financial regulation" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'housing bubbles and financial fragility accumulated precisely while inflation remained low and stable,' showing that low inflation does not guarantee stability.",
    difficulty: "medium",
    passageId: "rc8-p4",
  },
  {
    id: "rc-set8-020",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that populist challenges to central bank independence arise from",
    answerChoices: [
      { letter: "A", text: "technical disagreements about interest rate levels" },
      { letter: "B", text: "concerns that unelected officials make decisions with distributional consequences without sufficient accountability" },
      { letter: "C", text: "support for higher inflation" },
      { letter: "D", text: "belief that central banks cause recessions" },
      { letter: "E", text: "desire for more quantitative easing" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that central bank independence 'faces populist challenges from those who view unelected technocrats as insufficiently accountable for decisions with profound distributional consequences.'",
    difficulty: "medium",
    passageId: "rc8-p4",
  },
];

export const rcQuestionsSet8: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
