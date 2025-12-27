import { Question } from "../lsat-types";

export const lrQuestionsSet11: Question[] = [
  {
    id: "lr-11-001",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Book reviewer: This novel has sold over one million copies and spent thirty weeks on the bestseller list. Anyone who claims it is not well-written is simply being elitist. True literary merit is demonstrated by commercial success.`,
    questionStem: "The book reviewer's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "fails to distinguish between popularity and quality" },
      { letter: "B", text: "ignores the opinions of literary critics" },
      { letter: "C", text: "assumes that all bestselling books are similar in style" },
      { letter: "D", text: "overlooks the role of marketing in book sales" },
      { letter: "E", text: "attacks critics personally rather than addressing their arguments" },
    ],
    correctAnswer: "A",
    explanation: "The reviewer equates commercial success (popularity) with literary merit (quality). These are distinct concepts—a book can be popular without being well-written, and vice versa.",
    wrongAnswerExplanations: {
      B: "The argument dismisses critics but that's not its main logical flaw.",
      C: "No assumption about stylistic similarity is made.",
      D: "Marketing is related but not the main logical flaw.",
      E: "The ad hominem is secondary to the confusion of popularity with quality."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-002",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Sociologist: Cities that invest heavily in public parks and green spaces tend to have lower crime rates than those that don't. This suggests that creating more green spaces can help reduce urban crime.`,
    questionStem: "Which one of the following, if true, most strengthens the sociologist's argument?",
    answerChoices: [
      { letter: "A", text: "Green spaces provide locations for community gatherings that build social cohesion" },
      { letter: "B", text: "Cities with lower crime rates have larger tax bases for public investments" },
      { letter: "C", text: "Some cities with extensive green spaces still experience high crime in certain neighborhoods" },
      { letter: "D", text: "Urban residents generally prefer living near parks and green spaces" },
      { letter: "E", text: "The maintenance of green spaces creates employment opportunities" },
    ],
    correctAnswer: "A",
    explanation: "If green spaces build social cohesion, this provides a causal mechanism explaining how they might reduce crime—stronger community bonds typically correlate with lower crime rates.",
    wrongAnswerExplanations: {
      B: "This suggests reverse causation (low crime leads to parks), weakening the argument.",
      C: "Exceptions in some neighborhoods don't strengthen the general argument.",
      D: "Preferences don't explain crime reduction.",
      E: "Employment opportunities don't directly connect to crime reduction."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-003",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Market analyst: Electric vehicle sales have increased by 300% over the past five years. At this rate, electric vehicles will completely replace gasoline-powered cars within the next two decades.`,
    questionStem: "Which one of the following, if true, most seriously weakens the market analyst's prediction?",
    answerChoices: [
      { letter: "A", text: "Electric vehicles currently represent less than 5% of total vehicle sales" },
      { letter: "B", text: "Some consumers have expressed interest in hybrid vehicles as an alternative" },
      { letter: "C", text: "The initial rapid growth rate of new technologies typically slows as market saturation increases" },
      { letter: "D", text: "Electric vehicle manufacturers are planning to expand production capacity" },
      { letter: "E", text: "Gasoline prices have fluctuated significantly over the past decade" },
    ],
    correctAnswer: "C",
    explanation: "The prediction assumes the current growth rate will continue. If new technologies typically slow their growth as markets mature, the 300% growth rate won't be sustained, undermining the complete replacement prediction.",
    wrongAnswerExplanations: {
      A: "Starting from a small base doesn't prevent eventual dominance.",
      B: "Hybrid interest doesn't directly undermine EV growth.",
      D: "Expanded production supports, not weakens, the prediction.",
      E: "Gas price fluctuations don't directly address EV adoption rates."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-004",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Education reformer: Standardized tests do not measure creativity or critical thinking skills. Since these skills are essential for success in the modern workforce, schools should reduce emphasis on standardized testing and focus on developing creativity and critical thinking.`,
    questionStem: "The reformer's argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Standardized tests have no educational value whatsoever" },
      { letter: "B", text: "Creativity and critical thinking can be effectively taught in schools" },
      { letter: "C", text: "All students have equal potential for creativity and critical thinking" },
      { letter: "D", text: "The modern workforce values creativity more than traditional skills" },
      { letter: "E", text: "Schools currently emphasize standardized testing at the expense of other skills" },
    ],
    correctAnswer: "E",
    explanation: "The argument recommends 'reducing emphasis' on testing to 'focus on' other skills. This assumes there's currently an emphasis on testing that limits development of other skills—otherwise, the recommendation makes no sense.",
    wrongAnswerExplanations: {
      A: "The argument says tests don't measure certain skills, not that they have no value.",
      B: "While relevant, this isn't strictly necessary—schools might focus without guaranteed success.",
      C: "Equal potential isn't assumed or required.",
      D: "The argument says these skills are essential, not that they're valued more than all others."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-005",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All successful entrepreneurs have failed at some point. Failure teaches resilience. Maria has never failed at anything.`,
    questionStem: "Which one of the following can be properly concluded from the statements above?",
    answerChoices: [
      { letter: "A", text: "Maria is not resilient" },
      { letter: "B", text: "Maria will never be a successful entrepreneur" },
      { letter: "C", text: "Maria has not yet become a successful entrepreneur" },
      { letter: "D", text: "Maria has not yet learned resilience from failure" },
      { letter: "E", text: "Successful entrepreneurs are more resilient than other people" },
    ],
    correctAnswer: "C",
    explanation: "All successful entrepreneurs have failed. Maria has never failed. Therefore, Maria cannot yet be a successful entrepreneur. (She might fail and succeed in the future, so we can't say 'never.')",
    wrongAnswerExplanations: {
      A: "Resilience might be learned through means other than failure.",
      B: "This is too strong—Maria might fail in the future and then become successful.",
      D: "This is likely true but says 'from failure'—Maria might have resilience from other sources.",
      E: "The passage doesn't compare entrepreneurs to others in resilience."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-006",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A survey of marathon runners found that those who trained with a coach completed the race faster on average than those who trained alone. However, the survey also found that runners who trained with coaches had, on average, been running for more years than self-trained runners.`,
    questionStem: "If all the statements above are true, which one of the following is most strongly supported?",
    answerChoices: [
      { letter: "A", text: "Coaching is effective only for experienced runners" },
      { letter: "B", text: "Self-trained runners could improve their times by hiring coaches" },
      { letter: "C", text: "The faster times of coached runners might be partly due to their greater experience" },
      { letter: "D", text: "All marathon runners should train with coaches" },
      { letter: "E", text: "Experience is more important than coaching for marathon success" },
    ],
    correctAnswer: "C",
    explanation: "The coached runners were faster but also more experienced. Their faster times might be due to experience rather than (or in addition to) coaching—the experience is a confounding variable.",
    wrongAnswerExplanations: {
      A: "The survey doesn't specify coaching effectiveness varies by experience level.",
      B: "The confounding variable makes this uncertain.",
      D: "Policy recommendations aren't supported given the confounding variable.",
      E: "We can't conclude experience is more important; we just know it's a factor."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-007",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Either the economy will improve next quarter, or consumer spending will decline. Consumer spending has not declined. Therefore, the economy has improved.`,
    questionStem: "The pattern of reasoning in the argument above is most closely paralleled by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Either the train will arrive on time, or I will miss my meeting. The train did not arrive on time. Therefore, I will miss my meeting." },
      { letter: "B", text: "If it rains, the picnic will be canceled. It did not rain. Therefore, the picnic was not canceled." },
      { letter: "C", text: "Either the defendant is guilty or innocent. The defendant is not guilty. Therefore, the defendant is innocent." },
      { letter: "D", text: "All mammals are warm-blooded. Dogs are mammals. Therefore, dogs are warm-blooded." },
      { letter: "E", text: "Some athletes are professionals. No amateurs are professionals. Therefore, some athletes are not amateurs." },
    ],
    correctAnswer: "C",
    explanation: "Both arguments use disjunctive syllogism: Either P or Q. Not Q. Therefore P. The original: Either economy improves or spending declines. Not decline. Therefore improve. C: Either guilty or innocent. Not guilty. Therefore innocent.",
    wrongAnswerExplanations: {
      A: "This is the same structure but with different outcome position.",
      B: "This involves conditional reasoning, not disjunctive syllogism.",
      D: "This is a categorical syllogism, not disjunctive.",
      E: "This involves 'some' and 'no' in a different logical form."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-008",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Physician: You argue that patients should have complete access to their medical records because they have a right to know about their own health. But consider: if patients read test results without proper context, they might become needlessly anxious or make harmful decisions based on misunderstanding the data. Rights must be balanced against potential harms.`,
    questionStem: "The physician responds to the argument by",
    answerChoices: [
      { letter: "A", text: "accepting the premise but questioning the conclusion's universality" },
      { letter: "B", text: "providing counterexamples to the general principle cited" },
      { letter: "C", text: "denying that patients have any right to their medical information" },
      { letter: "D", text: "appealing to consequences to challenge an absolute interpretation of a right" },
      { letter: "E", text: "questioning the credentials of those who made the original argument" },
    ],
    correctAnswer: "D",
    explanation: "The physician doesn't deny the right exists but argues it should be balanced against potential harmful consequences, challenging the absolute or unrestricted interpretation of the right to access records.",
    wrongAnswerExplanations: {
      A: "The physician doesn't fully accept the premise; they question the absoluteness of the right.",
      B: "No counterexamples to a principle are provided.",
      C: "The physician doesn't deny the right, just argues for balance.",
      E: "No credentials are questioned."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-009",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: A person should not be held responsible for events that they could not have reasonably foreseen.

    Case: A driver followed all traffic laws and was driving at the speed limit when a tree fell on the road. The driver was unable to stop in time and collided with another vehicle.`,
    questionStem: "If the principle above is applied to the case, which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "The driver should be held responsible because they should have been driving more slowly" },
      { letter: "B", text: "The driver should not be held responsible for the collision" },
      { letter: "C", text: "The driver should be held partially responsible for not anticipating the tree fall" },
      { letter: "D", text: "Only the other driver can be held responsible for the collision" },
      { letter: "E", text: "No one should be held responsible for the collision" },
    ],
    correctAnswer: "B",
    explanation: "The driver followed all traffic laws and could not reasonably foresee a tree falling. Under the principle, they should not be held responsible for an unforeseeable event.",
    wrongAnswerExplanations: {
      A: "The driver was following laws and speed limits; no basis for responsibility.",
      C: "A tree falling is not reasonably foreseeable; no partial responsibility applies.",
      D: "The principle doesn't address the other driver's responsibility.",
      E: "This goes beyond what the principle tells us about the first driver."
    },
    difficulty: "easy"
  },
  {
    id: "lr-11-010",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Studies show that moderate coffee consumption is associated with reduced risk of certain diseases. However, the same studies show that heavy coffee drinkers have similar health outcomes to non-coffee drinkers.`,
    questionStem: "Which one of the following, if true, most helps to explain the observation described above?",
    answerChoices: [
      { letter: "A", text: "Coffee contains both beneficial antioxidants and harmful compounds, with effects that cancel out at high doses" },
      { letter: "B", text: "Heavy coffee drinkers tend to be more health-conscious than moderate drinkers" },
      { letter: "C", text: "The definition of 'heavy' coffee consumption varies among studies" },
      { letter: "D", text: "Some people metabolize caffeine faster than others" },
      { letter: "E", text: "Non-coffee drinkers may consume other caffeinated beverages" },
    ],
    correctAnswer: "A",
    explanation: "If coffee has both beneficial and harmful compounds, moderate consumption might provide benefits while heavy consumption's benefits are offset by increased negative effects, explaining the U-shaped relationship.",
    wrongAnswerExplanations: {
      B: "More health-conscious heavy drinkers would suggest better outcomes, not similar to non-drinkers.",
      C: "Definition variation doesn't explain the pattern, just adds noise.",
      D: "Metabolic differences don't explain why heavy and non-drinkers have similar outcomes.",
      E: "Other caffeine sources don't explain the specific pattern observed."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-011",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Museum director: Offering free admission on weekends has increased our visitor numbers by 50%. This proves that eliminating admission fees entirely would double our attendance.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the museum director's reasoning?",
    answerChoices: [
      { letter: "A", text: "What percentage of the museum's budget comes from admission fees" },
      { letter: "B", text: "Whether the increased weekend visitors would have come on weekdays otherwise" },
      { letter: "C", text: "How other museums have fared after changing their admission policies" },
      { letter: "D", text: "Whether the 50% increase was primarily from first-time or repeat visitors" },
      { letter: "E", text: "How much additional staff is needed to handle increased visitor numbers" },
    ],
    correctAnswer: "B",
    explanation: "If weekend increases came from people shifting from weekdays, eliminating fees entirely might not add new visitors—they'd just redistribute. Knowing this helps evaluate whether the prediction is valid.",
    wrongAnswerExplanations: {
      A: "Budget concerns don't address the attendance prediction logic.",
      C: "Other museums' experiences are relevant but less directly than understanding this museum's pattern.",
      D: "First-time vs repeat is relevant but less critical than understanding substitution effects.",
      E: "Staffing needs don't evaluate the attendance prediction."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-012",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Politician: My opponent argues that we should raise taxes to fund infrastructure improvements. But my opponent inherited wealth and has never had to worry about making ends meet. How can someone so out of touch with ordinary citizens' financial concerns be trusted on tax policy?`,
    questionStem: "The politician's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "attacks the opponent's character rather than the merits of the proposal" },
      { letter: "B", text: "assumes that wealthy people cannot understand others' financial situations" },
      { letter: "C", text: "ignores the potential benefits of infrastructure improvements" },
      { letter: "D", text: "fails to consider that taxes could be structured to protect low-income citizens" },
      { letter: "E", text: "presumes that all citizens oppose tax increases" },
    ],
    correctAnswer: "A",
    explanation: "The politician commits an ad hominem fallacy, attacking the opponent's personal background rather than addressing whether the tax proposal for infrastructure is sound policy.",
    wrongAnswerExplanations: {
      B: "This is related but the main issue is the attack is irrelevant to the proposal's merits.",
      C: "Ignoring benefits isn't the structure of the flawed reasoning.",
      D: "Tax structure is a secondary issue not addressed in this argument.",
      E: "The argument doesn't assume universal opposition to taxes."
    },
    difficulty: "easy"
  },
  {
    id: "lr-11-013",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Environmental scientist: The mysterious die-off of bees in several counties is most likely caused by a new pesticide that was approved for agricultural use last year. The die-offs have occurred primarily in areas where this pesticide is being used.`,
    questionStem: "Which one of the following, if true, most strengthens the scientist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Bees in adjacent counties where the pesticide is not used have not experienced die-offs" },
      { letter: "B", text: "The new pesticide is chemically similar to older approved pesticides" },
      { letter: "C", text: "Bee populations fluctuate naturally from year to year" },
      { letter: "D", text: "Some farmers have voluntarily stopped using the new pesticide" },
      { letter: "E", text: "Other pesticides have been implicated in bee die-offs in the past" },
    ],
    correctAnswer: "A",
    explanation: "If bees are dying where the pesticide is used but thriving in adjacent areas without it, this strengthens the causal link between the pesticide and the die-offs by showing a control comparison.",
    wrongAnswerExplanations: {
      B: "Similarity to other pesticides doesn't strengthen the specific causation claim.",
      C: "Natural fluctuation would weaken, not strengthen, the specific cause claim.",
      D: "Voluntary cessation doesn't address whether the pesticide caused the die-offs.",
      E: "Past implications of other pesticides don't strengthen this specific claim."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-014",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Restaurant owner: Our new prix fixe menu has been a success. Since we introduced it, average customer spending has increased by 25%. This shows that customers prefer having a set-price option.`,
    questionStem: "Which one of the following, if true, most seriously weakens the restaurant owner's conclusion?",
    answerChoices: [
      { letter: "A", text: "Some customers order from the à la carte menu instead of the prix fixe menu" },
      { letter: "B", text: "Other restaurants in the area have not introduced prix fixe menus" },
      { letter: "C", text: "The prix fixe menu was introduced along with a general price increase across all menu items" },
      { letter: "D", text: "The restaurant's food costs have also increased since the new menu was introduced" },
      { letter: "E", text: "Customer traffic has remained stable since the new menu was introduced" },
    ],
    correctAnswer: "C",
    explanation: "If prices increased generally when the prix fixe was introduced, higher average spending might be due to the price increase, not customer preference for the prix fixe option.",
    wrongAnswerExplanations: {
      A: "Some customers choosing à la carte doesn't undermine the success of prix fixe.",
      B: "Other restaurants' actions don't explain this restaurant's results.",
      D: "Food costs don't affect the interpretation of customer spending preferences.",
      E: "Stable traffic doesn't address why spending increased."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-015",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Computer scientist: Artificial intelligence systems should be designed with transparency so that their decision-making processes can be understood and audited. Black-box AI systems that cannot be examined pose risks to accountability and public trust.`,
    questionStem: "The computer scientist's argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "All AI systems currently in use are black-box systems" },
      { letter: "B", text: "Accountability and public trust are important considerations in AI design" },
      { letter: "C", text: "Transparent AI systems are always more accurate than black-box systems" },
      { letter: "D", text: "It is technically possible to make all AI systems fully transparent" },
      { letter: "E", text: "Black-box AI systems have already caused significant harm" },
    ],
    correctAnswer: "B",
    explanation: "The argument recommends transparency because black-box systems 'pose risks to accountability and public trust.' This only matters if accountability and trust are important—otherwise, the risks aren't concerning.",
    wrongAnswerExplanations: {
      A: "The argument doesn't require all current systems to be black-box.",
      C: "Accuracy isn't mentioned or required for the transparency argument.",
      D: "Technical feasibility is relevant but not required for the principle.",
      E: "Past harm isn't required; future risks are the concern."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-016",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `No one who opposes funding for public education can truly claim to support equal opportunity. Senator Morrison voted against the education funding bill.`,
    questionStem: "Which one of the following, if assumed, enables the conclusion to be properly drawn that Senator Morrison cannot truly claim to support equal opportunity?",
    answerChoices: [
      { letter: "A", text: "Senator Morrison has previously supported other education initiatives" },
      { letter: "B", text: "Voting against the education funding bill constitutes opposing funding for public education" },
      { letter: "C", text: "Some senators who support equal opportunity voted for the education funding bill" },
      { letter: "D", text: "Senator Morrison is insincere in most of her public statements" },
      { letter: "E", text: "The education funding bill was the only proposal for increasing education funding" },
    ],
    correctAnswer: "B",
    explanation: "The argument needs to connect 'voting against the bill' to 'opposing funding for public education.' If voting against equals opposing funding, then Morrison opposes funding and thus cannot claim to support equal opportunity.",
    wrongAnswerExplanations: {
      A: "Previous support actually complicates the conclusion.",
      C: "What other senators did doesn't establish Morrison's position.",
      D: "General insincerity isn't the basis for this specific conclusion.",
      E: "Whether it was the only proposal doesn't establish that voting against equals opposing funding."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-017",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A study found that employees who take their full vacation time are more productive than those who do not. The same study found that employees who work more than 50 hours per week are less likely to take their full vacation time. Employees working more than 50 hours per week report feeling indispensable to their teams.`,
    questionStem: "If all the statements above are true, which one of the following is most strongly supported?",
    answerChoices: [
      { letter: "A", text: "Employees who feel indispensable should take more vacation time" },
      { letter: "B", text: "Working long hours makes employees less productive" },
      { letter: "C", text: "Some employees who feel indispensable may be less productive than those who take full vacation" },
      { letter: "D", text: "All employees who take vacation feel dispensable to their teams" },
      { letter: "E", text: "Employees who work fewer than 50 hours are more productive than those who work more" },
    ],
    correctAnswer: "C",
    explanation: "Long-hour employees feel indispensable, don't take vacations, and those who don't take vacations are less productive. So some indispensable-feeling employees may be less productive than full-vacation-takers.",
    wrongAnswerExplanations: {
      A: "This is a recommendation, not an inference from the facts.",
      B: "The study shows vacation correlation with productivity, not direct hours-productivity link.",
      D: "The study doesn't establish what full-vacation-takers feel.",
      E: "Direct hours-productivity comparison isn't established."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-018",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `All of the cookies in the jar were chocolate chip. The cookie Maria ate came from the jar. Therefore, the cookie Maria ate was chocolate chip.`,
    questionStem: "Which one of the following arguments has a pattern of reasoning most similar to that in the argument above?",
    answerChoices: [
      { letter: "A", text: "All of the guests at the party were friends of the host. James was a guest at the party. Therefore, James was a friend of the host." },
      { letter: "B", text: "Some of the books on the shelf were mysteries. The book Lisa read was from the shelf. Therefore, the book Lisa read was a mystery." },
      { letter: "C", text: "None of the students in the class failed the exam. Tom was not in the class. Therefore, Tom failed the exam." },
      { letter: "D", text: "Most of the cars in the lot were new. The car Raj bought was from the lot. Therefore, the car Raj bought was new." },
      { letter: "E", text: "All scientists use the scientific method. Dr. Chen is a scientist. Therefore, Dr. Chen might use the scientific method." },
    ],
    correctAnswer: "A",
    explanation: "Both have the valid form: All X in group G have property P. Item Y is from group G. Therefore, item Y has property P. Original: All cookies in jar are chocolate chip. Maria's cookie from jar. Therefore chocolate chip.",
    wrongAnswerExplanations: {
      B: "'Some' doesn't guarantee Lisa's book was a mystery—invalid form.",
      C: "Not being in the class doesn't establish Tom failed—invalid form.",
      D: "'Most' doesn't guarantee Raj's car was new—invalid form.",
      E: "The conclusion weakens to 'might' when it should be certain."
    },
    difficulty: "easy"
  },
  {
    id: "lr-11-019",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `City planner: Some argue that building more highways will reduce traffic congestion. But studies from multiple cities show that when highway capacity increases, more people choose to drive, eventually restoring previous congestion levels. This phenomenon, known as induced demand, undermines the case for highway expansion.`,
    questionStem: "The city planner's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "citing empirical evidence that challenges an expected outcome" },
      { letter: "B", text: "arguing from analogy to similar situations" },
      { letter: "C", text: "appealing to the authority of traffic engineers" },
      { letter: "D", text: "demonstrating a logical contradiction in the opposing view" },
      { letter: "E", text: "questioning the motives of highway proponents" },
    ],
    correctAnswer: "A",
    explanation: "The planner refutes the highway expansion claim by citing studies showing induced demand—empirical evidence that more capacity doesn't reduce congestion as expected, but rather induces more driving.",
    wrongAnswerExplanations: {
      B: "No analogy is drawn; direct evidence from multiple cities is cited.",
      C: "No appeal to authority is made; the studies are cited directly.",
      D: "No logical contradiction is identified; empirical results are used.",
      E: "No motives are questioned."
    },
    difficulty: "easy"
  },
  {
    id: "lr-11-020",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: A company should not collect personal data from users without their informed consent, and should only collect data necessary for providing its services.

    Case: A weather app collects users' location data to provide local forecasts, but also sells anonymized location data to advertising companies without informing users.`,
    questionStem: "According to the principle, which one of the following is true of the weather app company?",
    answerChoices: [
      { letter: "A", text: "The company violates the principle only if users did not consent to location collection" },
      { letter: "B", text: "The company acts in accordance with the principle because it anonymizes the data" },
      { letter: "C", text: "The company violates the principle by selling data without informed consent" },
      { letter: "D", text: "The company acts in accordance with the principle because location data is necessary for forecasts" },
      { letter: "E", text: "The company violates the principle because weather forecasts are not essential services" },
    ],
    correctAnswer: "C",
    explanation: "The principle requires informed consent for data collection. Selling data to advertisers is a use beyond providing weather services, and users weren't informed—violating the consent requirement.",
    wrongAnswerExplanations: {
      A: "The violation is about selling data without consent, not just collecting it.",
      B: "Anonymization doesn't satisfy the informed consent requirement.",
      D: "Necessity for forecasts doesn't justify selling to advertisers without consent.",
      E: "The principle doesn't address whether services are essential."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-021",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Financial studies show that lottery winners often end up no happier than before their win within just a few years. Yet these same winners typically report that winning was the most exciting event of their lives and say they would not trade the experience.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent paradox described above?",
    answerChoices: [
      { letter: "A", text: "Lottery winners tend to spend their winnings quickly" },
      { letter: "B", text: "People adapt to new circumstances and return to their baseline happiness levels" },
      { letter: "C", text: "Most lottery winners share their winnings with family members" },
      { letter: "D", text: "The odds of winning the lottery are extremely low" },
      { letter: "E", text: "Lottery winners often continue to work at their jobs" },
    ],
    correctAnswer: "B",
    explanation: "If people naturally adapt and return to baseline happiness regardless of circumstances, winners can be no happier overall while still valuing the experience as exciting. Adaptation explains no lasting happiness boost.",
    wrongAnswerExplanations: {
      A: "Quick spending might explain lack of lasting wealth, not the happiness pattern.",
      C: "Sharing doesn't explain the happiness-excitement paradox.",
      D: "Low odds don't explain post-win happiness levels.",
      E: "Continuing to work doesn't directly explain the happiness phenomenon."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-022",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Historian: The decline of the ancient kingdom was not caused by invasion, as previously thought, but by prolonged drought. Pollen records from the period show a shift from crop plants to drought-resistant vegetation.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the historian's conclusion?",
    answerChoices: [
      { letter: "A", text: "Whether the kingdom had diplomatic relations with neighboring states" },
      { letter: "B", text: "Whether the drought affected regions beyond the kingdom's borders" },
      { letter: "C", text: "Whether the pollen records could have been affected by post-decline conditions" },
      { letter: "D", text: "Whether the kingdom's architecture was sophisticated" },
      { letter: "E", text: "Whether written records from the period mention climate conditions" },
    ],
    correctAnswer: "C",
    explanation: "The pollen evidence is crucial to the argument. If the records could reflect post-decline conditions rather than the cause, the drought evidence might not support the causation claim.",
    wrongAnswerExplanations: {
      A: "Diplomatic relations don't directly address the drought vs. invasion question.",
      B: "Broader drought effects are relevant but less critical than evidence validity.",
      D: "Architecture sophistication doesn't address the cause of decline.",
      E: "Written records would help but the pollen evidence validity is more fundamental."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-023",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Editorial: Critics claim that our city's public transportation system is inefficient. But public transit employs over 3,000 workers and contributes millions to the local economy. These critics clearly don't care about jobs and economic growth.`,
    questionStem: "The reasoning in the editorial is flawed because it",
    answerChoices: [
      { letter: "A", text: "misrepresents the critics' position to make it easier to attack" },
      { letter: "B", text: "ignores possible solutions that could address efficiency without cutting jobs" },
      { letter: "C", text: "assumes that employment is more important than efficiency" },
      { letter: "D", text: "attributes motives to critics without evidence" },
      { letter: "E", text: "fails to define what constitutes an inefficient system" },
    ],
    correctAnswer: "D",
    explanation: "The editorial claims critics 'don't care about jobs' without evidence. Criticizing efficiency doesn't mean one opposes employment—the editorial attributes false motives without support.",
    wrongAnswerExplanations: {
      A: "The critics' position isn't misrepresented—inefficiency claims are acknowledged.",
      B: "This is a potential solution, not a flaw in the argument's logic.",
      C: "The argument doesn't argue employment over efficiency; it attacks critics' motives.",
      E: "Defining efficiency isn't the logical flaw here."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-024",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Psychologist: Patients who practice mindfulness meditation show reduced symptoms of anxiety and depression. I believe this is because meditation activates brain regions associated with emotional regulation while suppressing areas linked to stress response.`,
    questionStem: "Which one of the following, if true, most strengthens the psychologist's explanation?",
    answerChoices: [
      { letter: "A", text: "Brain imaging studies show the predicted activation and suppression patterns in meditating subjects" },
      { letter: "B", text: "Patients often report feeling calmer immediately after meditation sessions" },
      { letter: "C", text: "Ancient traditions have long recognized the benefits of meditation for mental health" },
      { letter: "D", text: "Other relaxation techniques also reduce anxiety and depression symptoms" },
      { letter: "E", text: "Mindfulness meditation has become increasingly popular in recent years" },
    ],
    correctAnswer: "A",
    explanation: "Brain imaging showing the predicted patterns provides direct evidence for the proposed mechanism—that meditation affects specific brain regions as the psychologist claims.",
    wrongAnswerExplanations: {
      B: "Subjective calm reports don't confirm the brain mechanism.",
      C: "Traditional recognition doesn't support the specific brain mechanism.",
      D: "Other techniques working doesn't support this specific mechanism for meditation.",
      E: "Popularity doesn't address the neurological explanation."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-025",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Food scientist: Organic produce is not more nutritious than conventionally grown produce. Laboratory analysis shows that vitamin and mineral content is essentially identical between organic and conventional versions of the same fruits and vegetables.`,
    questionStem: "Which one of the following, if true, most seriously weakens the food scientist's argument?",
    answerChoices: [
      { letter: "A", text: "Organic farming practices are more environmentally sustainable" },
      { letter: "B", text: "Organic produce typically costs more than conventional produce" },
      { letter: "C", text: "Nutritional value includes beneficial compounds not captured by standard vitamin and mineral tests" },
      { letter: "D", text: "Some consumers prefer the taste of organic produce" },
      { letter: "E", text: "Conventional produce may contain pesticide residues" },
    ],
    correctAnswer: "C",
    explanation: "If 'nutrition' includes beneficial compounds beyond vitamins and minerals, then testing only vitamins/minerals doesn't capture the full nutritional picture, potentially missing organic advantages.",
    wrongAnswerExplanations: {
      A: "Environmental sustainability is a separate issue from nutrition.",
      B: "Cost doesn't address nutritional content.",
      D: "Taste preference doesn't relate to nutritional content.",
      E: "Pesticide residues are a safety issue, not a nutrition comparison."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-026",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Journalist: In an era of declining newspaper readership, we must adapt to survive. Providing free online content will attract more readers, and larger audiences will attract more advertisers. Therefore, eliminating print editions and going fully digital is the best path forward.`,
    questionStem: "The journalist's argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Print advertising is less profitable than online advertising" },
      { letter: "B", text: "Readers prefer digital content to print content" },
      { letter: "C", text: "Advertising revenue from larger digital audiences will offset lost print revenue" },
      { letter: "D", text: "All newspapers will eventually eliminate their print editions" },
      { letter: "E", text: "Online readers spend more time reading than print readers" },
    ],
    correctAnswer: "C",
    explanation: "The argument concludes digital-only is best for survival. This requires that digital ad revenue compensates for abandoning print—otherwise, the transition might not be financially viable.",
    wrongAnswerExplanations: {
      A: "Comparative profitability isn't the issue; total revenue sustainability is.",
      B: "Reader preferences aren't required; the argument is about business viability.",
      D: "What other newspapers do isn't required for this newspaper's decision.",
      E: "Reading time doesn't directly address the financial viability argument."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-027",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Only students who maintain a 3.0 GPA are eligible for the honors program. Only students eligible for the honors program can apply for the research fellowship. Rachel is applying for the research fellowship.`,
    questionStem: "If the statements above are true, which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Rachel is in the honors program" },
      { letter: "B", text: "Rachel maintains a 3.0 GPA" },
      { letter: "C", text: "Rachel will receive the research fellowship" },
      { letter: "D", text: "Rachel is the only applicant for the fellowship" },
      { letter: "E", text: "The honors program guarantees access to fellowships" },
    ],
    correctAnswer: "B",
    explanation: "Fellowship applicants must be eligible for honors. Honors eligibility requires 3.0 GPA. Rachel is applying for the fellowship, so she must be eligible for honors, so she must have a 3.0 GPA.",
    wrongAnswerExplanations: {
      A: "Being eligible doesn't mean she's actually in the program.",
      C: "Applying doesn't guarantee receiving the fellowship.",
      D: "Nothing indicates Rachel is the only applicant.",
      E: "The passage doesn't establish what honors guarantees."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-028",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All smartphones sold by TechCorp include facial recognition technology. TechCorp's smartphones are the only ones that use the proprietary SecureLock system. The Z-Phone, which uses the SecureLock system, was just reviewed by a technology magazine.`,
    questionStem: "If all the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "The Z-Phone is sold by TechCorp" },
      { letter: "B", text: "The technology magazine specializes in smartphone reviews" },
      { letter: "C", text: "The Z-Phone is the best smartphone available" },
      { letter: "D", text: "All phones with facial recognition use the SecureLock system" },
      { letter: "E", text: "TechCorp is the leading smartphone manufacturer" },
    ],
    correctAnswer: "A",
    explanation: "Only TechCorp phones use SecureLock. The Z-Phone uses SecureLock. Therefore, the Z-Phone must be a TechCorp phone.",
    wrongAnswerExplanations: {
      B: "The magazine's specialty isn't indicated.",
      C: "Quality comparisons aren't made.",
      D: "SecureLock is only in TechCorp phones, but facial recognition might be in others too.",
      E: "Market leadership isn't established."
    },
    difficulty: "easy"
  },
  {
    id: "lr-11-029",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Economist Garcia: Universal basic income would reduce poverty and give workers bargaining power against exploitative employers. It would free people to pursue education, creative projects, and caregiving without financial anxiety.

    Economist Park: Universal basic income would reduce incentives to work, leading to labor shortages and economic stagnation. People need the structure and purpose that employment provides, and UBI would undermine social cohesion.`,
    questionStem: "Garcia and Park disagree about whether universal basic income would",
    answerChoices: [
      { letter: "A", text: "be affordable for governments to implement" },
      { letter: "B", text: "benefit workers and society overall" },
      { letter: "C", text: "change the nature of the employment relationship" },
      { letter: "D", text: "affect the amount of creative activity in society" },
      { letter: "E", text: "require restructuring of current welfare programs" },
    ],
    correctAnswer: "B",
    explanation: "Garcia sees UBI as beneficial (reducing poverty, empowering workers, enabling pursuits). Park sees it as harmful (reducing work incentives, causing stagnation, undermining cohesion). They disagree on overall benefit.",
    wrongAnswerExplanations: {
      A: "Neither discusses affordability.",
      C: "Both might agree it changes employment dynamics; they disagree on whether that's good.",
      D: "Garcia mentions creative projects; Park focuses on work, not creativity specifically.",
      E: "Neither discusses welfare program restructuring."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-030",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Sports commentator: Critics say professional athletes are overpaid, but consider how many children aspire to become athletes. If we reduce athlete salaries, fewer children will pursue sports, and the quality of professional athletics will decline. Therefore, current salary levels are justified.`,
    questionStem: "The commentator's reasoning is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes children's motivations are primarily financial" },
      { letter: "B", text: "fails to consider that critics might accept some salary reduction" },
      { letter: "C", text: "provides no evidence that reduced salaries would deter young athletes" },
      { letter: "D", text: "overlooks the role of college athletics in developing talent" },
      { letter: "E", text: "confuses the value of athletics with the value of entertainment" },
    ],
    correctAnswer: "A",
    explanation: "The argument assumes reducing salaries would reduce children's interest in sports. But children might pursue athletics for love of the game, competition, or other reasons, not primarily future earnings.",
    wrongAnswerExplanations: {
      B: "The degree of reduction isn't the main logical flaw.",
      C: "This is related but A captures the specific assumption flaw.",
      D: "College athletics is a separate pathway issue, not the core flaw.",
      E: "No such confusion is present in the argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-031",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Anthropologist: Early humans developed cooking as a food preparation method because it made nutrients more accessible and reduced the time and energy needed for digestion. The evolutionary advantages of cooking help explain the rapid increase in human brain size over the past million years.`,
    questionStem: "Which one of the following, if true, most strengthens the anthropologist's argument?",
    answerChoices: [
      { letter: "A", text: "Brain tissue requires significantly more energy to maintain than other body tissues" },
      { letter: "B", text: "Modern humans spend less time eating than other great apes" },
      { letter: "C", text: "Archaeological evidence of fire use dates back several hundred thousand years" },
      { letter: "D", text: "Raw food diets remain popular among some modern humans" },
      { letter: "E", text: "Cooking also made food safer by killing harmful bacteria" },
    ],
    correctAnswer: "A",
    explanation: "If brains require lots of energy, and cooking freed up energy from digestion, cooking would provide energy resources for supporting larger, energy-hungry brains—connecting cooking to brain growth.",
    wrongAnswerExplanations: {
      B: "Modern eating time doesn't establish the evolutionary connection.",
      C: "Dating of fire use confirms cooking happened but doesn't strengthen the brain-size link.",
      D: "Modern raw food diets don't support the evolutionary argument.",
      E: "Safety benefits are separate from the energy-brain connection."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-032",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Marketing director: Our new advertising campaign has been effective. Sales increased 15% in the month following the campaign launch.`,
    questionStem: "Which one of the following, if true, most seriously weakens the marketing director's conclusion?",
    answerChoices: [
      { letter: "A", text: "The advertising campaign cost more than previous campaigns" },
      { letter: "B", text: "Competitors also launched advertising campaigns during the same period" },
      { letter: "C", text: "Sales typically increase by 20% during this month due to seasonal factors" },
      { letter: "D", text: "The company released a new product line at the same time as the campaign" },
      { letter: "E", text: "Some customers who saw the ads did not make purchases" },
    ],
    correctAnswer: "D",
    explanation: "If a new product launched simultaneously, the sales increase might be due to the new products rather than the advertising. This alternative explanation weakens the campaign effectiveness claim.",
    wrongAnswerExplanations: {
      A: "Campaign cost doesn't affect whether it was effective at driving sales.",
      B: "Competitor campaigns don't directly explain this company's sales increase.",
      C: "If sales normally increase 20% but only increased 15%, the campaign might have underperformed—interesting but the new product is more directly challenging.",
      E: "Some non-purchases don't undermine overall effectiveness."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-033",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Environmental advocate: We must ban single-use plastic bags because they persist in the environment for hundreds of years and harm wildlife. Reusable bags are readily available and can be used hundreds of times.`,
    questionStem: "The advocate's argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "All types of single-use bags are equally harmful to the environment" },
      { letter: "B", text: "Consumers will actually use reusable bags repeatedly rather than discarding them" },
      { letter: "C", text: "Plastic bag manufacturers oppose environmental regulations" },
      { letter: "D", text: "No single-use bags are made from biodegradable materials" },
      { letter: "E", text: "Reusable bags are less expensive than single-use plastic bags" },
    ],
    correctAnswer: "B",
    explanation: "The argument assumes reusable bags solve the problem. If people don't actually reuse them, the environmental benefit doesn't materialize—they might discard reusable bags too.",
    wrongAnswerExplanations: {
      A: "The argument focuses on plastic bags, not comparing bag types.",
      C: "Manufacturer positions aren't relevant to the environmental argument.",
      D: "Biodegradable options aren't required to be nonexistent for the argument.",
      E: "Cost comparison isn't necessary for the environmental argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-034",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Anyone who is eligible for the scholarship must have either a perfect GPA or significant financial need. Tom has a perfect GPA but no financial need. Sarah has significant financial need but does not have a perfect GPA.`,
    questionStem: "Which one of the following can be properly concluded from the statements above?",
    answerChoices: [
      { letter: "A", text: "Tom will receive the scholarship" },
      { letter: "B", text: "Sarah will receive the scholarship" },
      { letter: "C", text: "Both Tom and Sarah are eligible for the scholarship" },
      { letter: "D", text: "Neither Tom nor Sarah is eligible for the scholarship" },
      { letter: "E", text: "Tom is eligible for the scholarship but Sarah is not" },
    ],
    correctAnswer: "C",
    explanation: "Eligibility requires perfect GPA OR significant need. Tom has perfect GPA (satisfies first condition). Sarah has significant need (satisfies second condition). Both meet the 'either/or' requirement.",
    wrongAnswerExplanations: {
      A: "Eligibility doesn't guarantee receiving the scholarship.",
      B: "Eligibility doesn't guarantee receiving the scholarship.",
      D: "Both satisfy at least one condition of the disjunction.",
      E: "Sarah also satisfies the eligibility requirement through need."
    },
    difficulty: "easy"
  },
  {
    id: "lr-11-035",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `An insurance company found that customers who file claims within the first year of their policy have a 40% higher likelihood of filing additional claims in subsequent years compared to those who don't file early claims. The company also found that customers who file early claims tend to have purchased the most comprehensive coverage options.`,
    questionStem: "If all the statements above are true, which one of the following is most strongly supported?",
    answerChoices: [
      { letter: "A", text: "Comprehensive coverage encourages customers to file more claims" },
      { letter: "B", text: "The company should refuse to insure customers who might file early claims" },
      { letter: "C", text: "Customers who purchase comprehensive coverage may represent higher risk" },
      { letter: "D", text: "Early claims are usually fraudulent" },
      { letter: "E", text: "The company's pricing for comprehensive coverage is too low" },
    ],
    correctAnswer: "C",
    explanation: "Comprehensive coverage buyers file early claims, and early claimants file more claims overall. This pattern suggests comprehensive coverage buyers may represent higher risk to the insurer.",
    wrongAnswerExplanations: {
      A: "'Encourages' is causal; the data only shows correlation.",
      B: "Policy recommendations aren't supported by descriptive data.",
      D: "Fraud isn't mentioned or implied.",
      E: "Pricing adequacy can't be determined from claim frequency alone."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-036",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `If a candidate does not campaign actively in rural areas, the candidate will lose rural voters. The candidate lost rural voters. Therefore, the candidate did not campaign actively in rural areas.`,
    questionStem: "The flawed reasoning in the argument above is most similar to the flawed reasoning in which one of the following?",
    answerChoices: [
      { letter: "A", text: "If a plant is not watered, it will die. This plant died. Therefore, this plant was not watered." },
      { letter: "B", text: "If a book is popular, it will be reprinted. This book was reprinted. Therefore, this book is popular." },
      { letter: "C", text: "If a student studies hard, the student will pass. The student passed. Therefore, the student studied hard." },
      { letter: "D", text: "If taxes increase, consumer spending decreases. Consumer spending decreased. Therefore, taxes increased." },
      { letter: "E", text: "If the alarm sounds, there is a fire. There is a fire. Therefore, the alarm will sound." },
    ],
    correctAnswer: "A",
    explanation: "Both commit affirming the consequent with a negative antecedent: If NOT P, then Q. Q. Therefore NOT P. Original: If not campaign, then lose voters. Lost voters. Therefore didn't campaign. But losing could have other causes.",
    wrongAnswerExplanations: {
      B: "This affirms the consequent but doesn't involve negation in the antecedent.",
      C: "Same as B—affirms consequent without negation pattern.",
      D: "Same pattern as C—affirms consequent without the negation structure.",
      E: "This reverses the conditional differently."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-037",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Consumer advocate: The tech company claims its devices are built to last, but I have documentation showing the company deliberately designs components to fail shortly after the warranty expires. Internal memos explicitly discuss optimizing 'product lifespan' to encourage replacement purchases.`,
    questionStem: "The consumer advocate makes the case by",
    answerChoices: [
      { letter: "A", text: "appealing to consumer emotions about wasted money" },
      { letter: "B", text: "presenting internal evidence that contradicts the company's public claims" },
      { letter: "C", text: "comparing the company's practices to those of competitors" },
      { letter: "D", text: "arguing that all technology companies engage in similar practices" },
      { letter: "E", text: "questioning the technical expertise of company engineers" },
    ],
    correctAnswer: "B",
    explanation: "The advocate uses internal documents (memos) that directly contradict the company's claim about durability, presenting insider evidence against the company's public position.",
    wrongAnswerExplanations: {
      A: "The argument relies on evidence, not emotional appeals.",
      C: "No competitor comparisons are made.",
      D: "No generalization to other companies is made.",
      E: "Engineering expertise isn't questioned."
    },
    difficulty: "easy"
  },
  {
    id: "lr-11-038",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: A researcher should not publish findings that could cause public harm unless the benefits of publication clearly outweigh the risks.

    Case: A cybersecurity researcher discovered a critical vulnerability in widely-used banking software. Publishing the details would allow criminals to exploit the vulnerability before banks could patch it, but the researcher published anyway, arguing that public pressure would force faster fixes.`,
    questionStem: "According to the principle, which one of the following judgments about the researcher's action is most defensible?",
    answerChoices: [
      { letter: "A", text: "The publication was justified because it increased public awareness" },
      { letter: "B", text: "The publication violated the principle if the risks of exploitation outweighed the benefit of faster patches" },
      { letter: "C", text: "The publication was justified because cybersecurity research should always be transparent" },
      { letter: "D", text: "The publication violated the principle because all vulnerability disclosures cause harm" },
      { letter: "E", text: "The publication was justified because banks are responsible for their own security" },
    ],
    correctAnswer: "B",
    explanation: "The principle allows harmful publication only if benefits clearly outweigh risks. If criminal exploitation risk exceeded the benefit of accelerated fixes, publication violated the principle.",
    wrongAnswerExplanations: {
      A: "Awareness alone doesn't satisfy 'benefits clearly outweigh risks.'",
      C: "Transparency isn't mentioned in the principle; it's about harm-benefit balance.",
      D: "The principle doesn't prohibit all harmful disclosures, only those where risks outweigh benefits.",
      E: "Bank responsibility doesn't affect the researcher's obligation under the principle."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-039",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A pharmaceutical company's clinical trial for a new pain medication showed that patients receiving the medication reported significantly less pain than those receiving a placebo. However, objective measurements of inflammation and tissue damage showed no difference between the two groups.`,
    questionStem: "Which one of the following, if true, most helps to explain the apparent discrepancy?",
    answerChoices: [
      { letter: "A", text: "The medication affects pain perception in the brain without reducing physical damage" },
      { letter: "B", text: "Clinical trials often have methodological limitations" },
      { letter: "C", text: "Pain is difficult to measure objectively" },
      { letter: "D", text: "The placebo group may have underreported their pain levels" },
      { letter: "E", text: "Inflammation is not always associated with pain" },
    ],
    correctAnswer: "A",
    explanation: "If the medication works by altering how pain is perceived rather than reducing physical damage, patients would feel less pain while having the same tissue damage—explaining both observations.",
    wrongAnswerExplanations: {
      B: "Methodological issues don't explain this specific pattern.",
      C: "Measurement difficulty doesn't explain the specific divergent findings.",
      D: "Underreporting in placebo group would decrease, not increase, the perceived gap.",
      E: "This could explain no pain without inflammation but not reduced pain with same damage."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-040",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `School principal: Our school's new anti-bullying program has been successful. Reports of bullying have decreased by 40% since the program was implemented.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the principal's claim?",
    answerChoices: [
      { letter: "A", text: "How much the anti-bullying program cost to implement" },
      { letter: "B", text: "Whether students have become less likely to report bullying incidents" },
      { letter: "C", text: "How the school's bullying rates compare to national averages" },
      { letter: "D", text: "Whether teachers support the anti-bullying program" },
      { letter: "E", text: "How many staff members were trained for the program" },
    ],
    correctAnswer: "B",
    explanation: "If students are reporting less due to fear or distrust rather than actual reduction in bullying, the 40% decrease in reports wouldn't mean actual bullying decreased—it would just be hidden.",
    wrongAnswerExplanations: {
      A: "Cost doesn't address whether bullying actually decreased.",
      C: "National comparison doesn't help evaluate change at this specific school.",
      D: "Teacher support doesn't indicate whether bullying actually decreased.",
      E: "Staff training numbers don't evaluate effectiveness."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-041",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Columnist: People who support space exploration say we should fund missions to Mars. But millions of people on Earth lack access to clean water and basic healthcare. How can we justify spending billions on space when we haven't solved problems at home?`,
    questionStem: "The reasoning in the columnist's argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "presents a false dichotomy between space funding and addressing earthly problems" },
      { letter: "B", text: "assumes space exploration provides no benefits to people on Earth" },
      { letter: "C", text: "ignores the historical achievements of space programs" },
      { letter: "D", text: "attacks the motives of space exploration supporters" },
      { letter: "E", text: "fails to specify how much should be spent on Earth-based problems" },
    ],
    correctAnswer: "A",
    explanation: "The columnist implies we must choose between space funding and addressing Earth problems. But societies can pursue both simultaneously; resources aren't necessarily zero-sum between these goals.",
    wrongAnswerExplanations: {
      B: "While the argument ignores space benefits, the structural flaw is the false choice.",
      C: "Historical achievements don't address the either/or framing.",
      D: "No attack on motives is made.",
      E: "Specific spending amounts aren't the issue."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-042",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Urban ecologist: The decline in urban bird populations is primarily due to outdoor cats. Free-roaming cats kill billions of birds annually. Cities should implement policies to keep cats indoors.`,
    questionStem: "Which one of the following, if true, most strengthens the ecologist's argument?",
    answerChoices: [
      { letter: "A", text: "Urban areas where cats are required to be kept indoors have higher bird populations" },
      { letter: "B", text: "Cats are the most popular pet in urban areas" },
      { letter: "C", text: "Some bird species have adapted to urban environments" },
      { letter: "D", text: "Indoor cats live longer on average than outdoor cats" },
      { letter: "E", text: "Bird feeders can attract more birds to urban areas" },
    ],
    correctAnswer: "A",
    explanation: "If cities with indoor-cat policies have more birds, this directly supports the claim that cats cause bird decline and that indoor policies work—strengthening both the cause and the solution.",
    wrongAnswerExplanations: {
      B: "Cat popularity doesn't strengthen the causal claim or policy recommendation.",
      C: "Adaptation doesn't address the cat-caused decline.",
      D: "Cat longevity is a separate benefit, not supporting the bird argument.",
      E: "Feeders attracting birds doesn't address the cat predation issue."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-043",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Efficiency consultant: Remote work increases employee productivity. A study showed that remote workers completed 13% more tasks per day than their office-based counterparts.`,
    questionStem: "Which one of the following, if true, most seriously weakens the consultant's conclusion?",
    answerChoices: [
      { letter: "A", text: "Remote workers often work longer hours than the standard workday" },
      { letter: "B", text: "The study was conducted by a company that sells remote work software" },
      { letter: "C", text: "Some industries are better suited to remote work than others" },
      { letter: "D", text: "Office-based workers have more opportunities for collaboration" },
      { letter: "E", text: "Remote work policies have become more common in recent years" },
    ],
    correctAnswer: "A",
    explanation: "If remote workers complete more tasks because they work longer hours rather than being more productive per hour, the 'productivity increase' is just increased labor, not greater efficiency.",
    wrongAnswerExplanations: {
      B: "Source bias suggests caution but doesn't directly weaken the findings.",
      C: "Industry variation doesn't undermine the overall productivity claim.",
      D: "Collaboration opportunities are a separate consideration.",
      E: "Policy prevalence doesn't address productivity claims."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-044",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Architect: Our design for the new community center uses extensive glass walls to maximize natural light. Buildings with more natural light have been shown to improve occupant wellbeing and reduce energy costs for artificial lighting.`,
    questionStem: "The architect's recommendation assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Glass walls are the only way to increase natural light in buildings" },
      { letter: "B", text: "The benefits of natural light outweigh any drawbacks of extensive glass walls" },
      { letter: "C", text: "All community members prefer buildings with natural light" },
      { letter: "D", text: "The building will never be used during nighttime hours" },
      { letter: "E", text: "Glass walls are less expensive than traditional walls" },
    ],
    correctAnswer: "B",
    explanation: "Glass walls might have drawbacks (heat gain, loss of privacy, structural issues, higher costs). The recommendation assumes these don't outweigh the natural light benefits.",
    wrongAnswerExplanations: {
      A: "Other methods aren't claimed impossible; glass is just the chosen method.",
      C: "Universal preference isn't required for the design choice.",
      D: "Nighttime use is irrelevant; the design addresses daytime lighting.",
      E: "Cost comparison to traditional walls isn't assumed."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-045",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `No member of the hiking club is afraid of heights. Some people who are afraid of heights enjoy rock climbing. Elena enjoys rock climbing.`,
    questionStem: "Which one of the following, if assumed, allows the conclusion to be properly drawn that Elena might not be a member of the hiking club?",
    answerChoices: [
      { letter: "A", text: "Elena is afraid of heights" },
      { letter: "B", text: "All rock climbers are afraid of heights" },
      { letter: "C", text: "Some members of the hiking club enjoy rock climbing" },
      { letter: "D", text: "No one who enjoys rock climbing is afraid of heights" },
      { letter: "E", text: "Elena's fear status regarding heights is unknown" },
    ],
    correctAnswer: "A",
    explanation: "If Elena is afraid of heights, and no club members fear heights, then Elena cannot be a club member. This assumption makes the conclusion follow definitely, not just 'might not.'",
    wrongAnswerExplanations: {
      B: "If all rock climbers fear heights and Elena climbs, Elena fears heights—this would work too but A is more direct.",
      C: "Club members climbing doesn't establish Elena's non-membership.",
      D: "This contradicts the premise that some height-fearers climb.",
      E: "Unknown status doesn't establish she might not be a member."
    },
    difficulty: "hard"
  },
  {
    id: "lr-11-046",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A hospital implemented a new hand hygiene protocol. In the first month, compliance rates were 95%. By the third month, compliance had dropped to 60%. However, hospital-acquired infection rates remained constant throughout the period.`,
    questionStem: "If all the statements above are true, which one of the following is most strongly supported?",
    answerChoices: [
      { letter: "A", text: "Hand hygiene has no effect on hospital-acquired infection rates" },
      { letter: "B", text: "The hospital should abandon the hand hygiene protocol" },
      { letter: "C", text: "Factors other than hand hygiene affect hospital-acquired infection rates" },
      { letter: "D", text: "Compliance rates will continue to decline in future months" },
      { letter: "E", text: "The infection rate measurements are inaccurate" },
    ],
    correctAnswer: "C",
    explanation: "If compliance dropped significantly but infection rates stayed constant, other factors must be influencing infection rates—otherwise, infections should have changed with compliance.",
    wrongAnswerExplanations: {
      A: "We can't conclude no effect; other factors might be compensating.",
      B: "Policy recommendations aren't supported by this data.",
      D: "Future trends can't be predicted from this information.",
      E: "No reason to suspect inaccurate measurements."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-047",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Scientist A: Climate models predict that global temperatures will rise by 2-4 degrees Celsius by 2100. These models have been validated against historical data and represent our best understanding of climate systems.

    Scientist B: Climate models are useful tools, but their predictions contain significant uncertainty. Natural climate variability, which is difficult to model, could either amplify or dampen warming trends. We should be cautious about treating model predictions as certainties.`,
    questionStem: "Scientist A and Scientist B disagree most directly about",
    answerChoices: [
      { letter: "A", text: "whether climate change is occurring" },
      { letter: "B", text: "whether climate models have any scientific value" },
      { letter: "C", text: "the degree of certainty warranted by climate model predictions" },
      { letter: "D", text: "whether natural climate variability exists" },
      { letter: "E", text: "whether action should be taken on climate change" },
    ],
    correctAnswer: "C",
    explanation: "A treats models as representing 'our best understanding' (implying high confidence). B emphasizes 'significant uncertainty' and counsels against treating predictions as certainties. They disagree on certainty level.",
    wrongAnswerExplanations: {
      A: "Both seem to accept climate change is occurring.",
      B: "B calls models 'useful tools'—both accept their value.",
      D: "Both acknowledge natural variability; they differ on its implications.",
      E: "Neither directly discusses action recommendations."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-048",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Advertisement: Our toothpaste contains MicroShield technology, which creates a protective barrier on teeth. In laboratory tests, teeth treated with MicroShield showed 40% less enamel erosion than untreated teeth. Therefore, using our toothpaste will prevent cavities.`,
    questionStem: "The reasoning in the advertisement is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes that laboratory conditions accurately reflect real-world use" },
      { letter: "B", text: "fails to explain how MicroShield technology works" },
      { letter: "C", text: "equates reduced enamel erosion with cavity prevention" },
      { letter: "D", text: "does not compare the toothpaste to competitor products" },
      { letter: "E", text: "ignores the role of diet in dental health" },
    ],
    correctAnswer: "C",
    explanation: "Enamel erosion and cavities are related but different dental issues. Cavities are caused by bacterial acid, while erosion can have other causes. Reducing erosion doesn't necessarily prevent cavities.",
    wrongAnswerExplanations: {
      A: "Lab-to-real-world is a concern but the erosion-to-cavity leap is more direct.",
      B: "The mechanism explanation isn't the logical flaw.",
      D: "Competitor comparison isn't required for the logic to be sound.",
      E: "Diet is relevant but not the specific flaw in this argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-049",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Historian: The ancient trading city of Palmyra prospered because of its location at the intersection of major trade routes. Its merchants served as intermediaries between Roman and Persian empires, profiting from the exchange of goods between East and West.`,
    questionStem: "Which one of the following, if true, most strengthens the historian's explanation for Palmyra's prosperity?",
    answerChoices: [
      { letter: "A", text: "Palmyra's architecture was influenced by both Roman and Persian styles" },
      { letter: "B", text: "Similar trading cities at route intersections also prospered during this period" },
      { letter: "C", text: "Palmyra's decline coincided with the shift of trade routes away from the city" },
      { letter: "D", text: "The Palmyrene language incorporated words from multiple regional languages" },
      { letter: "E", text: "Archaeological evidence shows luxury goods from many regions in Palmyra" },
    ],
    correctAnswer: "C",
    explanation: "If Palmyra declined when routes shifted away, this confirms the connection between location on trade routes and prosperity—when the cause disappeared, so did the effect.",
    wrongAnswerExplanations: {
      A: "Architectural influences show cultural mixing but not trade-based prosperity.",
      B: "Other cities prospering is supporting but less direct than Palmyra's own decline.",
      D: "Language incorporation shows cultural contact but not economic mechanism.",
      E: "Luxury goods confirm trade but don't explain why the location was key."
    },
    difficulty: "medium"
  },
  {
    id: "lr-11-050",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Dietitian: People who eat breakfast daily tend to have healthier body weights than those who skip breakfast. To maintain a healthy weight, everyone should eat breakfast every day.`,
    questionStem: "Which one of the following, if true, most seriously weakens the dietitian's recommendation?",
    answerChoices: [
      { letter: "A", text: "Some breakfast foods are high in sugar and provide little nutritional value" },
      { letter: "B", text: "People who naturally prefer eating breakfast may have other health-conscious habits" },
      { letter: "C", text: "Breakfast is considered the most important meal in many cultures" },
      { letter: "D", text: "Weight management depends on total daily caloric intake, not meal timing" },
      { letter: "E", text: "Some athletes skip breakfast as part of their training regimen" },
    ],
    correctAnswer: "B",
    explanation: "If breakfast eaters have other healthy habits, their healthy weight might be due to those habits rather than breakfast specifically. The correlation doesn't prove breakfast causes healthy weight.",
    wrongAnswerExplanations: {
      A: "Unhealthy breakfast options don't undermine the general recommendation.",
      C: "Cultural importance doesn't address the causal claim.",
      D: "While relevant, B more directly shows the correlation-causation problem.",
      E: "Athlete exceptions don't undermine the general population claim."
    },
    difficulty: "medium"
  }
];
