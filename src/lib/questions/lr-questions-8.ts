import { Question } from "../lsat-types";

export const lrQuestionsSet8: Question[] = [
  {
    id: "lr8-001",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `City official: Our city's new public transit system has been a failure. We invested $500 million in the project, yet only 15% of commuters use public transit. This proves that public investment in transportation infrastructure is wasteful.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "generalizes from the results of one transit system to all public transportation investments" },
      { letter: "B", text: "fails to consider whether 15% ridership might represent an improvement over previous rates" },
      { letter: "C", text: "ignores the environmental benefits of public transit" },
      { letter: "D", text: "does not explain why commuters choose not to use public transit" },
      { letter: "E", text: "assumes that $500 million is too much to spend on transit" }
    ],
    correctAnswer: "A",
    explanation: "The argument jumps from one failed project to concluding all public transportation investment is wasteful. This is hasty generalization—one case doesn't prove a universal principle.",
    wrongAnswerExplanations: {
      "B": "While relevant context, this isn't the core logical flaw.",
      "C": "Environmental benefits are a separate consideration.",
      "D": "Understanding reasons isn't the main logical issue.",
      "E": "The amount isn't assumed excessive; the waste claim is about results."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-002",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Neuroscientist: People who meditate regularly show increased gray matter density in brain regions associated with memory and emotional regulation. I hypothesize that meditation actually causes these structural brain changes.`,
    questionStem: "Which one of the following, if true, most strengthens the neuroscientist's hypothesis?",
    answerChoices: [
      { letter: "A", text: "People with naturally higher gray matter density tend to be more interested in meditation" },
      { letter: "B", text: "Non-meditators who began an 8-week meditation program showed measurable increases in gray matter density" },
      { letter: "C", text: "Gray matter density naturally decreases with age in most people" },
      { letter: "D", text: "Other contemplative practices like prayer show similar correlations" },
      { letter: "E", text: "Meditation has been practiced for thousands of years across many cultures" }
    ],
    correctAnswer: "B",
    explanation: "A prospective study showing that starting meditation leads to brain changes provides direct evidence of causation, not just correlation.",
    wrongAnswerExplanations: {
      "A": "This weakens by suggesting reverse causation.",
      "C": "Age-related decline doesn't address the causal claim.",
      "D": "Similar correlations don't prove causation.",
      "E": "Historical practice doesn't establish brain effects."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-003",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Marketing analyst: Our company should focus advertising on social media rather than television. A survey shows that 80% of our target demographic uses social media daily, while only 40% watch television daily.`,
    questionStem: "Which one of the following, if true, most weakens the analyst's argument?",
    answerChoices: [
      { letter: "A", text: "Television advertising costs more per impression than social media advertising" },
      { letter: "B", text: "Social media users typically scroll past advertisements without engaging with them" },
      { letter: "C", text: "The survey was conducted online" },
      { letter: "D", text: "Some television viewers also use social media" },
      { letter: "E", text: "The company's competitors advertise heavily on social media" }
    ],
    correctAnswer: "B",
    explanation: "If social media users ignore ads while scrolling, high usage rates don't translate to advertising effectiveness. Reaching users who don't engage is less valuable than reaching engaged TV viewers.",
    wrongAnswerExplanations: {
      "A": "Lower cost supports the analyst's recommendation.",
      "C": "Survey methodology bias is possible but not conclusive.",
      "D": "Overlap doesn't undermine the social media advantage.",
      "E": "Competitor behavior could argue for or against social media."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-004",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The school district should adopt year-round schooling because students forget much of what they learned over the long summer break. Shorter, more frequent breaks throughout the year would allow for regular review and reinforcement of material.`,
    questionStem: "The argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "All students forget the same amount of material over summer break" },
      { letter: "B", text: "Teachers support the year-round schooling schedule" },
      { letter: "C", text: "The shorter breaks in year-round schooling are sufficient for students to rest and recharge" },
      { letter: "D", text: "Year-round schooling would not cost more than traditional schooling" },
      { letter: "E", text: "Learning loss over summer vacation cannot be addressed through other means" }
    ],
    correctAnswer: "C",
    explanation: "The argument advocates replacing long breaks with shorter ones. For this to work, the shorter breaks must still provide adequate rest. Without this assumption, year-round schooling might create exhausted students.",
    wrongAnswerExplanations: {
      "A": "Variable forgetting rates don't undermine the general concern.",
      "B": "Teacher support is practical but not logically assumed.",
      "D": "Cost isn't addressed in the argument.",
      "E": "Alternative solutions aren't discussed or assumed impossible."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-005",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All participants in the marathon must register by Friday. Anyone who registers receives a race packet. The race packets include a timing chip, and no one can participate without wearing a timing chip. Sarah is participating in the marathon on Sunday.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Sarah registered by Friday" },
      { letter: "B", text: "Sarah has never participated in a marathon before" },
      { letter: "C", text: "Sarah will finish the marathon" },
      { letter: "D", text: "Everyone who registered will participate in the marathon" },
      { letter: "E", text: "Sarah is an experienced runner" }
    ],
    correctAnswer: "A",
    explanation: "Sarah is participating, so she must have a timing chip. To have a chip, she needs a race packet. To get a packet, she must have registered. Registration deadline is Friday, so she registered by Friday.",
    wrongAnswerExplanations: {
      "B": "Nothing indicates her marathon history.",
      "C": "Participation doesn't guarantee completion.",
      "D": "Some who register might not show up.",
      "E": "Experience isn't mentioned or implied."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-006",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `No great artist has ever been motivated purely by money. Some commercial artists are motivated purely by money. Therefore, no commercial artist is a great artist.`,
    questionStem: "The pattern of reasoning in the argument is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "No dedicated teacher neglects student welfare. Some substitute teachers neglect student welfare. Therefore, no substitute teacher is a dedicated teacher." },
      { letter: "B", text: "All successful entrepreneurs work hard. Some employees work hard. Therefore, some employees are successful entrepreneurs." },
      { letter: "C", text: "Every honest politician keeps promises. No one who breaks promises is trusted. Therefore, every honest politician is trusted." },
      { letter: "D", text: "Some musicians play guitar. All guitarists have musical talent. Therefore, some musicians have musical talent." },
      { letter: "E", text: "No reptile is warm-blooded. All mammals are warm-blooded. Therefore, no mammal is a reptile." }
    ],
    correctAnswer: "A",
    explanation: "Both arguments: No X has trait Y. Some Z have trait Y. Therefore, no Z is X. The structure is identical—the middle term connects through what groups don't have.",
    wrongAnswerExplanations: {
      "B": "This has a different structure with 'all' and 'some.'",
      "C": "This is a chain of conditionals, different pattern.",
      "D": "This is a standard syllogism with 'some.'",
      "E": "This has 'all' rather than 'some' in the second premise."
    },
    difficulty: "hard"
  },
  {
    id: "lr8-007",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Parent: You say children need more outdoor play time, but you let your own children spend hours playing video games inside. Your advice can't be taken seriously.`,
    questionStem: "The parent's response to the advice employs which one of the following argumentative strategies?",
    answerChoices: [
      { letter: "A", text: "Providing evidence that contradicts the claim about outdoor play" },
      { letter: "B", text: "Questioning the consistency between the advisor's claims and actions" },
      { letter: "C", text: "Arguing that video games provide benefits similar to outdoor play" },
      { letter: "D", text: "Presenting alternative activities that are superior to outdoor play" },
      { letter: "E", text: "Demonstrating that the advice has harmful consequences" }
    ],
    correctAnswer: "B",
    explanation: "The parent attacks the advisor's credibility by pointing out hypocrisy—saying one thing while doing another. This is questioning consistency between words and actions.",
    wrongAnswerExplanations: {
      "A": "No evidence against the play claim is provided.",
      "C": "No comparison of benefits is made.",
      "D": "No alternatives are offered.",
      "E": "No harmful consequences are mentioned."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-008",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A pharmaceutical company has developed a new medication that could save thousands of lives but would only be profitable if priced beyond what most patients could afford. The company chose to price it affordably and accept lower profits.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify the company's decision?",
    answerChoices: [
      { letter: "A", text: "Companies should maximize shareholder value above all other considerations" },
      { letter: "B", text: "When a company's product could prevent significant harm, accessibility should take priority over maximum profitability" },
      { letter: "C", text: "Pharmaceutical companies should only develop drugs that can be priced competitively" },
      { letter: "D", text: "Government should subsidize essential medications" },
      { letter: "E", text: "Companies have no ethical obligations beyond following the law" }
    ],
    correctAnswer: "B",
    explanation: "The company prioritized saving lives (preventing harm) over maximum profits. A principle that endorses accessibility over profit when lives are at stake directly justifies this choice.",
    wrongAnswerExplanations: {
      "A": "This would condemn, not justify, the decision.",
      "C": "Competitive pricing isn't the issue—it's affordable vs. profitable pricing.",
      "D": "Government action doesn't justify the company's own decision.",
      "E": "This would provide no justification for the altruistic choice."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-009",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A study found that people who own dogs live longer on average than those who don't. Paradoxically, the study also found that dog owners spend more time sitting on their couches than non-owners.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent paradox?",
    answerChoices: [
      { letter: "A", text: "Dog owners tend to have higher incomes than non-owners" },
      { letter: "B", text: "Dog owners also spend significantly more time walking their dogs, which more than compensates for increased sitting time" },
      { letter: "C", text: "Some dog breeds require more exercise than others" },
      { letter: "D", text: "Longevity is influenced by many factors besides physical activity" },
      { letter: "E", text: "People who sit less don't necessarily exercise more" }
    ],
    correctAnswer: "B",
    explanation: "More couch time seems bad for health, but if dog owners also walk much more (enough to offset the sitting), their overall activity level and longevity can still be higher.",
    wrongAnswerExplanations: {
      "A": "Income might explain longevity but not why sitting time is higher.",
      "C": "Breed differences don't explain the overall pattern.",
      "D": "This is vague and doesn't resolve the sitting paradox.",
      "E": "This doesn't explain dog owners' specific situation."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-010",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A city claims its new traffic light timing system has reduced accidents at major intersections by 30% since implementation last year.`,
    questionStem: "Which one of the following would be most important to know in evaluating the city's claim?",
    answerChoices: [
      { letter: "A", text: "Whether the city plans to expand the system to other intersections" },
      { letter: "B", text: "Whether traffic patterns changed for other reasons during the same period" },
      { letter: "C", text: "How the new system compares to systems used in other cities" },
      { letter: "D", text: "What the total cost of implementing the system was" },
      { letter: "E", text: "Whether citizens support the new traffic system" }
    ],
    correctAnswer: "B",
    explanation: "To evaluate if the system caused the reduction, we need to know if other factors (construction, gas prices, new routes, weather) might explain the change instead.",
    wrongAnswerExplanations: {
      "A": "Future plans don't evaluate past effectiveness.",
      "C": "Other cities' systems don't evaluate this city's results.",
      "D": "Cost is separate from effectiveness.",
      "E": "Public opinion doesn't determine whether the system reduced accidents."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-011",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Columnist: Recent polls show that 60% of voters oppose the proposed tax increase. Democratic principles require that policies reflect the will of the majority. Therefore, the tax increase should not be implemented.`,
    questionStem: "The columnist's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes that poll respondents understand the full implications of the tax increase" },
      { letter: "B", text: "ignores the possibility that the majority view might change over time" },
      { letter: "C", text: "fails to distinguish between direct democracy and representative democracy" },
      { letter: "D", text: "presumes that all voters have equal knowledge about tax policy" },
      { letter: "E", text: "does not consider whether the tax increase might benefit the majority" }
    ],
    correctAnswer: "C",
    explanation: "In representative democracy, elected officials make decisions that may not reflect immediate majority opinion—voters choose representatives to exercise judgment. The argument conflates direct and representative democracy.",
    wrongAnswerExplanations: {
      "A": "Understanding implications is a concern but not the main flaw.",
      "B": "Potential opinion changes don't address the current democratic argument.",
      "D": "Knowledge differences are secondary to the democracy question.",
      "E": "Benefits don't directly address the democratic principles argument."
    },
    difficulty: "hard"
  },
  {
    id: "lr8-012",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Researchers found that children who took music lessons showed improved mathematical abilities compared to children who didn't. The researchers concluded that musical training enhances mathematical cognition.`,
    questionStem: "Which one of the following, if true, most strengthens the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "Many professional mathematicians played instruments as children" },
      { letter: "B", text: "Children who already excelled at math were equally likely to take music lessons as those who didn't" },
      { letter: "C", text: "Music involves counting and pattern recognition" },
      { letter: "D", text: "The music lessons focused on classical composers" },
      { letter: "E", text: "Both groups attended the same schools" }
    ],
    correctAnswer: "B",
    explanation: "If math-talented kids were more likely to take music lessons, that would explain the correlation without music causing math improvement. Showing equal likelihood eliminates this selection bias.",
    wrongAnswerExplanations: {
      "A": "This is correlation among professionals, not evidence of causation.",
      "C": "Shared features suggest connection but don't prove causation.",
      "D": "The specific music type doesn't strengthen the causal claim.",
      "E": "Same schools is good control but doesn't eliminate selection bias."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-013",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Restaurant owner: My restaurant will succeed because it's located in a busy downtown area with lots of foot traffic. No restaurant in this location has ever failed due to lack of customers.`,
    questionStem: "Which one of the following, if true, most weakens the restaurant owner's reasoning?",
    answerChoices: [
      { letter: "A", text: "Several restaurants in this location have failed due to poor management" },
      { letter: "B", text: "The downtown area has many competing restaurants" },
      { letter: "C", text: "Foot traffic has recently decreased due to remote work trends" },
      { letter: "D", text: "Restaurant success requires more than just customer traffic" },
      { letter: "E", text: "The previous tenant was a different type of business" }
    ],
    correctAnswer: "C",
    explanation: "The owner assumes continued high foot traffic. If foot traffic has decreased, the historical success of restaurants in this location may no longer apply—circumstances have changed.",
    wrongAnswerExplanations: {
      "A": "Other failure causes don't undermine the foot traffic claim.",
      "B": "Competition exists everywhere; this doesn't specifically weaken the argument.",
      "D": "True but vague—doesn't provide specific countervailing information.",
      "E": "Previous tenant type is irrelevant."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-014",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Anyone who exercises regularly reduces their risk of heart disease. John doesn't exercise regularly. Therefore, John has not reduced his risk of heart disease.`,
    questionStem: "The conclusion follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "Exercise is the only way to reduce heart disease risk" },
      { letter: "B", text: "John has heart disease" },
      { letter: "C", text: "Regular exercise always prevents heart disease" },
      { letter: "D", text: "John does not want to reduce his heart disease risk" },
      { letter: "E", text: "People who don't exercise have higher heart disease rates" }
    ],
    correctAnswer: "A",
    explanation: "The argument is invalid as stated (denying the antecedent). But if exercise is the ONLY way to reduce risk, then not exercising guarantees not reducing risk.",
    wrongAnswerExplanations: {
      "B": "Having disease is separate from reducing risk.",
      "C": "Prevention isn't the same as risk reduction.",
      "D": "John's preferences don't affect whether he's reduced risk.",
      "E": "Higher rates don't mean he hasn't reduced his own risk somehow."
    },
    difficulty: "hard"
  },
  {
    id: "lr8-015",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Some critics argue that standardized tests are biased against certain demographic groups. While it's true that score gaps exist between groups, these gaps may reflect genuine differences in educational preparation rather than test bias. Tests are regularly reviewed to remove culturally biased items. The real problem isn't test bias but unequal educational opportunities that lead to different levels of preparation.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Score gaps exist between demographic groups on standardized tests" },
      { letter: "B", text: "Tests are regularly reviewed to remove biased items" },
      { letter: "C", text: "The score gaps are caused by unequal educational opportunities, not test bias" },
      { letter: "D", text: "Some critics believe standardized tests are biased" },
      { letter: "E", text: "Educational preparation varies across demographic groups" }
    ],
    correctAnswer: "C",
    explanation: "The main conclusion is stated at the end: the real problem is unequal opportunities, not test bias. The other statements support this conclusion.",
    wrongAnswerExplanations: {
      "A": "This is acknowledged fact, not the conclusion.",
      "B": "This is supporting evidence.",
      "D": "This is the opposing view being addressed.",
      "E": "This is an intermediate premise."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-016",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The company's policy requires all employees to complete safety training annually. Training sessions are offered monthly. Any employee who misses their scheduled session must wait until the next month. Carlos started working in March and completed his first safety training in April.`,
    questionStem: "If the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "Carlos missed his scheduled training session in March" },
      { letter: "B", text: "Carlos must complete safety training again by next April" },
      { letter: "C", text: "Training sessions are only offered once per month" },
      { letter: "D", text: "Carlos is currently in compliance with the training policy" },
      { letter: "E", text: "All employees who started in March completed training in April" }
    ],
    correctAnswer: "B",
    explanation: "Training is required annually. Carlos completed it in April. Therefore, he must complete it again within a year—by next April.",
    wrongAnswerExplanations: {
      "A": "He started in March; the April training might have been scheduled or he could have just attended the next available.",
      "C": "Sessions are 'offered monthly' but could be offered multiple times per month.",
      "D": "We don't know the current date; he might be overdue.",
      "E": "We have no information about other employees."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-017",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Journalist A: Social media companies should be held legally responsible for misinformation spread on their platforms. They have the technology to detect and remove false content but choose not to use it effectively.

Journalist B: Holding platforms legally responsible for user content would essentially require them to censor speech, violating free expression principles. Users, not platforms, should bear responsibility for what they post.`,
    questionStem: "Journalist A and Journalist B disagree about whether",
    answerChoices: [
      { letter: "A", text: "social media platforms have the technology to detect misinformation" },
      { letter: "B", text: "misinformation on social media is a serious problem" },
      { letter: "C", text: "social media companies should be legally liable for user-posted misinformation" },
      { letter: "D", text: "users post false information intentionally" },
      { letter: "E", text: "free expression is an important principle" }
    ],
    correctAnswer: "C",
    explanation: "A says platforms should be legally responsible; B says they shouldn't be. This is their direct point of disagreement.",
    wrongAnswerExplanations: {
      "A": "A claims they have the technology; B doesn't dispute this.",
      "B": "Neither explicitly states whether misinformation is serious.",
      "D": "User intent isn't discussed.",
      "E": "B invokes free expression; A doesn't deny its importance."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-018",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Movie critic: Action movies are mindless entertainment with no artistic merit. This new superhero film is an action movie. Therefore, it has no artistic merit.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "assumes that a general characterization applies to every individual case" },
      { letter: "B", text: "fails to define what constitutes artistic merit" },
      { letter: "C", text: "ignores the possibility that some viewers enjoy action movies" },
      { letter: "D", text: "relies on the critic's subjective opinion about entertainment" },
      { letter: "E", text: "does not consider that the film might be popular" }
    ],
    correctAnswer: "A",
    explanation: "Even if action movies are generally mindless, this particular superhero film might be an exception. The argument applies a generalization to a specific case without justification.",
    wrongAnswerExplanations: {
      "B": "Definition of artistic merit is not the core flaw.",
      "C": "Viewer enjoyment doesn't address the artistic merit claim.",
      "D": "Subjectivity is a concern but not the logical structure flaw.",
      "E": "Popularity is irrelevant to artistic merit."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-019",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Ancient agricultural practices often involved rotating crops to maintain soil fertility. Anthropologists believe this knowledge was developed through systematic observation over many generations, not from lucky accidents.`,
    questionStem: "Which one of the following, if true, most strengthens the anthropologists' belief?",
    answerChoices: [
      { letter: "A", text: "Ancient farmers had lower crop yields than modern farmers" },
      { letter: "B", text: "Records show that ancient farmers documented crop performance in different field rotations over decades" },
      { letter: "C", text: "Some ancient civilizations also developed irrigation systems" },
      { letter: "D", text: "Crop rotation remains an effective agricultural practice today" },
      { letter: "E", text: "Different crops deplete different soil nutrients" }
    ],
    correctAnswer: "B",
    explanation: "Documentation of systematic experimentation over decades directly supports the claim that knowledge came from 'systematic observation over many generations,' not accidents.",
    wrongAnswerExplanations: {
      "A": "Lower yields don't indicate how rotation knowledge was acquired.",
      "C": "Other developments don't address how rotation was learned.",
      "D": "Current effectiveness doesn't show how ancient farmers discovered it.",
      "E": "The science of nutrients doesn't prove systematic ancient observation."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-020",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Psychologist: Video games are beneficial for children because they improve problem-solving skills. Children who play video games regularly score higher on tests of logical reasoning than children who don't play.`,
    questionStem: "Which one of the following, if true, most weakens the psychologist's argument?",
    answerChoices: [
      { letter: "A", text: "Video games also provide entertainment and relaxation for children" },
      { letter: "B", text: "Children with stronger logical reasoning skills are more attracted to video games" },
      { letter: "C", text: "Some video games are designed specifically for educational purposes" },
      { letter: "D", text: "Excessive video game playing can interfere with homework completion" },
      { letter: "E", text: "Many children prefer outdoor activities to video games" }
    ],
    correctAnswer: "B",
    explanation: "If children with better reasoning skills are drawn to games, the correlation might reflect selection rather than games improving skills. Causation might be reversed.",
    wrongAnswerExplanations: {
      "A": "Additional benefits don't weaken the problem-solving claim.",
      "C": "Educational design supports, not weakens, the argument.",
      "D": "Homework interference is a separate issue from reasoning skills.",
      "E": "Preferences don't affect the reasoning skills argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-021",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Electric vehicles will eventually replace gasoline cars because they are better for the environment and have lower operating costs. As battery technology improves, the main disadvantage—limited range—will disappear.`,
    questionStem: "The argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Battery technology will continue to improve" },
      { letter: "B", text: "Environmental benefits are the most important consideration for car buyers" },
      { letter: "C", text: "Gasoline cars cannot be made more fuel-efficient" },
      { letter: "D", text: "Electric vehicles will become affordable for all consumers" },
      { letter: "E", text: "No other disadvantages of electric vehicles will emerge" }
    ],
    correctAnswer: "A",
    explanation: "The argument states battery technology will improve to solve the range problem. If technology doesn't improve, the range disadvantage remains and replacement is less certain.",
    wrongAnswerExplanations: {
      "B": "The argument doesn't assume environment is most important—cost matters too.",
      "C": "Gasoline efficiency isn't the focus of the argument.",
      "D": "Affordability isn't specifically assumed.",
      "E": "The argument addresses the 'main disadvantage,' not all possible issues."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-022",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A museum acquired a collection of ancient artifacts that had been looted from an archaeological site in another country 50 years ago. The museum decided to return the artifacts to the country of origin despite having legally purchased them from a legitimate dealer.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify the museum's decision?",
    answerChoices: [
      { letter: "A", text: "Museums should never acquire artifacts from private dealers" },
      { letter: "B", text: "Legal ownership does not override moral obligations to return illegally removed cultural heritage" },
      { letter: "C", text: "Artifacts should always remain in their country of origin" },
      { letter: "D", text: "Museums have a duty to maximize the size of their collections" },
      { letter: "E", text: "Cultural artifacts should be available to the widest possible audience" }
    ],
    correctAnswer: "B",
    explanation: "The museum legally owned the artifacts but recognized a moral obligation to return looted items. The principle that moral duties override legal ownership justifies this choice.",
    wrongAnswerExplanations: {
      "A": "The purchase was legal; the issue is the artifacts' original theft.",
      "C": "This is too absolute and doesn't capture the specific moral reasoning.",
      "D": "This would argue against returning artifacts.",
      "E": "This might argue for keeping artifacts in a major museum."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-023",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A hospital implemented a new electronic health records system designed to reduce medical errors. In the year following implementation, reported medical errors actually increased by 25%.`,
    questionStem: "Which one of the following, if true, most helps to explain this finding?",
    answerChoices: [
      { letter: "A", text: "The new system cost more than the previous paper-based system" },
      { letter: "B", text: "Staff required extensive training to use the new system" },
      { letter: "C", text: "The new system included automatic error detection that identified errors previously going unreported" },
      { letter: "D", text: "Other hospitals using similar systems have had mixed results" },
      { letter: "E", text: "Some doctors prefer paper records to electronic systems" }
    ],
    correctAnswer: "C",
    explanation: "If the system detects errors that were previously missed and unreported, 'reported errors' would increase even if actual errors decreased. Better detection, not more errors.",
    wrongAnswerExplanations: {
      "A": "Cost doesn't explain error rates.",
      "B": "Training challenges might increase actual errors but doesn't fully explain the paradox.",
      "D": "Other hospitals' results don't explain this hospital's pattern.",
      "E": "Preferences don't explain increased reported errors."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-024",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Historian: Some claim that the Roman Empire fell due to moral decay. However, the Eastern Roman Empire, sharing the same cultural values, lasted another thousand years. The Western Empire's fall must have had different causes—likely military and economic factors that affected the West more severely.`,
    questionStem: "The historian's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "providing a counterexample that undermines a proposed explanation" },
      { letter: "B", text: "questioning the expertise of those who hold the opposing view" },
      { letter: "C", text: "demonstrating that the proposed explanation is internally contradictory" },
      { letter: "D", text: "showing that the proposed explanation relies on false historical facts" },
      { letter: "E", text: "arguing that moral decay is impossible to measure objectively" }
    ],
    correctAnswer: "A",
    explanation: "The Eastern Empire surviving with the same values is a counterexample to the 'moral decay caused the fall' theory. If decay caused the fall, the East should have fallen too.",
    wrongAnswerExplanations: {
      "B": "No attack on opponents' credentials is made.",
      "C": "No internal contradiction in the moral decay theory is identified.",
      "D": "The historical facts (Eastern survival) aren't disputed.",
      "E": "Measurement of decay isn't discussed."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-025",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A fitness company claims that customers who use their app lose more weight than those who don't. They cite data showing that app users lost an average of 15 pounds over three months, compared to 8 pounds for non-users.`,
    questionStem: "Which one of the following would be most important to know in evaluating the company's claim?",
    answerChoices: [
      { letter: "A", text: "How much the app costs to subscribe to" },
      { letter: "B", text: "Whether customers who chose to use the app were already more motivated to lose weight" },
      { letter: "C", text: "What features the app includes" },
      { letter: "D", text: "How the company developed the app" },
      { letter: "E", text: "Whether the app is available on multiple platforms" }
    ],
    correctAnswer: "B",
    explanation: "If app users were already more motivated, their greater weight loss might reflect motivation rather than app effectiveness. Selection bias could explain the difference.",
    wrongAnswerExplanations: {
      "A": "Cost doesn't evaluate effectiveness.",
      "C": "Features are interesting but don't address the comparison validity.",
      "D": "Development history doesn't evaluate current effectiveness claims.",
      "E": "Platform availability is irrelevant to effectiveness."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-026",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Executive: Our company has never had a data security breach. Therefore, our current security measures must be adequate.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "fails to consider that absence of past breaches doesn't guarantee protection against future threats" },
      { letter: "B", text: "does not specify what security measures are currently in place" },
      { letter: "C", text: "assumes that all companies face the same security threats" },
      { letter: "D", text: "ignores the cost of implementing stronger security measures" },
      { letter: "E", text: "relies on the executive's potentially biased assessment" }
    ],
    correctAnswer: "A",
    explanation: "Past success doesn't prove future adequacy. Threats evolve; lucky avoidance of breaches doesn't mean measures are actually sufficient against current or future attacks.",
    wrongAnswerExplanations: {
      "B": "Specifying measures wouldn't fix the logical flaw.",
      "C": "This assumption isn't made in the argument.",
      "D": "Cost isn't relevant to the adequacy assessment.",
      "E": "Potential bias is possible but not the core logical flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-027",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `A study found that children who were praised for effort ('You worked hard!') performed better on subsequent tasks than children praised for ability ('You're so smart!'). Researchers concluded that effort-based praise promotes a growth mindset that enhances performance.`,
    questionStem: "Which one of the following, if true, most strengthens the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "Children praised for ability reported feeling more confident immediately after the praise" },
      { letter: "B", text: "Children praised for effort were more likely to choose challenging tasks and persist through difficulty" },
      { letter: "C", text: "The study was conducted with children from various socioeconomic backgrounds" },
      { letter: "D", text: "Adults respond to praise differently than children do" },
      { letter: "E", text: "Some teachers naturally use more effort-based praise than others" }
    ],
    correctAnswer: "B",
    explanation: "Choosing challenges and persisting through difficulty are hallmarks of a growth mindset. This behavioral evidence directly supports the 'growth mindset' explanation for improved performance.",
    wrongAnswerExplanations: {
      "A": "Confidence doesn't mean growth mindset; could even indicate a fixed mindset.",
      "C": "Diverse backgrounds improve generalizability but don't strengthen the mechanism.",
      "D": "Adult responses don't support the claim about children.",
      "E": "Teacher variation doesn't strengthen the causal mechanism."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-028",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `Every scholarship recipient at the university must maintain a 3.5 GPA. Students who fail to maintain this GPA lose their scholarship. Jennifer received a scholarship last year and still has it this year.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Jennifer has a 3.5 GPA or higher" },
      { letter: "B", text: "Jennifer is the top student in her class" },
      { letter: "C", text: "All students with a 3.5 GPA receive scholarships" },
      { letter: "D", text: "Jennifer has never received a grade below an A" },
      { letter: "E", text: "Scholarships are awarded based solely on academic performance" }
    ],
    correctAnswer: "A",
    explanation: "Jennifer still has her scholarship. Students who fail to maintain 3.5 lose their scholarship. Since she hasn't lost it, she must have maintained at least 3.5.",
    wrongAnswerExplanations: {
      "B": "Top student isn't required—just 3.5 GPA.",
      "C": "The rule states scholarship → 3.5, not 3.5 → scholarship.",
      "D": "3.5 GPA doesn't require all A's.",
      "E": "Scholarship criteria beyond GPA aren't specified."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-029",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Some effective managers are not good communicators. All good communicators are patient listeners. Therefore, some effective managers are not patient listeners.`,
    questionStem: "The pattern of reasoning in the argument is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "Some skilled writers are not organized thinkers. All organized thinkers plan carefully. Therefore, some skilled writers do not plan carefully." },
      { letter: "B", text: "All talented musicians practice daily. Some people who practice daily are not performers. Therefore, some talented musicians are not performers." },
      { letter: "C", text: "Some athletes are not team players. All team players cooperate well. Therefore, no athletes cooperate well." },
      { letter: "D", text: "Most successful businesspeople work long hours. Some people who work long hours are unhappy. Therefore, most successful businesspeople are unhappy." },
      { letter: "E", text: "All reptiles are cold-blooded. Some cold-blooded animals are aquatic. Therefore, some reptiles are aquatic." }
    ],
    correctAnswer: "A",
    explanation: "Both arguments: Some A are not B. All B are C. Therefore, some A are not C. The original and A share this valid pattern.",
    wrongAnswerExplanations: {
      "B": "Different structure: All A are B. Some B are not C.",
      "C": "Conclusion is 'no' rather than 'some... not.'",
      "D": "Uses 'most' instead of 'some' and 'all.'",
      "E": "Different structure: All A are B. Some B are C."
    },
    difficulty: "hard"
  },
  {
    id: "lr8-030",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Political commentator: The recent decline in voter turnout shows that citizens are increasingly apathetic about democracy and civic participation. This represents a crisis for democratic governance.`,
    questionStem: "Which one of the following, if true, most weakens the commentator's conclusion?",
    answerChoices: [
      { letter: "A", text: "Voter turnout has declined in many democracies around the world" },
      { letter: "B", text: "Participation in other forms of civic engagement, such as volunteering and activism, has increased during the same period" },
      { letter: "C", text: "Election day falls on a weekday in most countries" },
      { letter: "D", text: "Some voters have difficulty reaching polling stations" },
      { letter: "E", text: "Political advertising has become more negative in recent years" }
    ],
    correctAnswer: "B",
    explanation: "If civic engagement has increased through other means, citizens may not be apathetic—they're just participating differently. Voting isn't the only measure of civic interest.",
    wrongAnswerExplanations: {
      "A": "Global decline doesn't weaken—might even support the apathy claim.",
      "C": "Weekday voting is a structural barrier, not evidence against apathy.",
      "D": "Access difficulties suggest barriers, not apathy, but B is more direct.",
      "E": "Negative advertising might explain turnout but doesn't disprove apathy."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-031",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Art critic: This painting cannot be an authentic Van Gogh because it lacks the distinctive brushwork that characterizes all of Van Gogh's known works.`,
    questionStem: "The argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Van Gogh never experimented with different painting techniques" },
      { letter: "B", text: "The critic has examined all of Van Gogh's known works" },
      { letter: "C", text: "Other artists have successfully imitated Van Gogh's brushwork" },
      { letter: "D", text: "The painting was created during Van Gogh's lifetime" },
      { letter: "E", text: "Van Gogh's brushwork cannot be precisely replicated by forgers" }
    ],
    correctAnswer: "A",
    explanation: "The argument assumes Van Gogh always used his distinctive style. If he sometimes used different techniques, this painting could be an authentic but atypical Van Gogh.",
    wrongAnswerExplanations: {
      "B": "Personal examination isn't assumed—knowledge of his style is sufficient.",
      "C": "Imitation ability doesn't affect the argument's logic.",
      "D": "The timing isn't the issue—the style is.",
      "E": "Forgery difficulty isn't the basis of the argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-032",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A journalist learned that a popular politician had been unfaithful to their spouse. The journalist decided not to publish this information because it was not relevant to the politician's public duties.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify the journalist's decision?",
    answerChoices: [
      { letter: "A", text: "Journalists should report any information that readers would find interesting" },
      { letter: "B", text: "Private behavior that does not affect a public official's performance of duties should not be reported" },
      { letter: "C", text: "Politicians have no reasonable expectation of privacy" },
      { letter: "D", text: "News stories should be verified by multiple sources before publication" },
      { letter: "E", text: "Journalists should only report positive stories about public figures" }
    ],
    correctAnswer: "B",
    explanation: "The journalist's reasoning was that the affair wasn't relevant to public duties. The principle that irrelevant private behavior shouldn't be reported directly justifies this decision.",
    wrongAnswerExplanations: {
      "A": "This would support publishing—the public might find it interesting.",
      "C": "No privacy expectation would support publishing.",
      "D": "Verification isn't the stated reason for not publishing.",
      "E": "This is too extreme and not the journalist's reasoning."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-033",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Studies show that countries with higher chocolate consumption per capita have more Nobel Prize winners per capita. However, eating chocolate has not been shown to improve cognitive function in scientific experiments.`,
    questionStem: "Which one of the following, if true, most helps to explain the correlation described above?",
    answerChoices: [
      { letter: "A", text: "Nobel Prize winners tend to enjoy luxury goods including fine chocolate" },
      { letter: "B", text: "Countries with high chocolate consumption tend to be wealthy nations with better-funded research institutions" },
      { letter: "C", text: "Dark chocolate contains more antioxidants than milk chocolate" },
      { letter: "D", text: "The countries with the most Nobel winners are located in cooler climates" },
      { letter: "E", text: "Chocolate was first introduced to Europe in the sixteenth century" }
    ],
    correctAnswer: "B",
    explanation: "Wealth explains both high chocolate consumption (luxury consumption) and more Nobel winners (better research funding). The correlation is due to this third variable.",
    wrongAnswerExplanations: {
      "A": "This reverses the causation direction without explaining the country-level correlation.",
      "C": "Antioxidant content doesn't explain the correlation.",
      "D": "Climate might be a factor but doesn't explain the mechanism as well as B.",
      "E": "Historical introduction doesn't explain the current correlation."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-034",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Sociologist: Studies show that married people report higher levels of happiness than unmarried people. Therefore, getting married will make people happier.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "ignores the possibility that happier people are more likely to get married" },
      { letter: "B", text: "fails to consider that many marriages end in divorce" },
      { letter: "C", text: "does not specify how happiness was measured" },
      { letter: "D", text: "assumes all married people are equally happy" },
      { letter: "E", text: "overlooks cultural differences in attitudes toward marriage" }
    ],
    correctAnswer: "A",
    explanation: "The argument assumes marriage causes happiness, but causation might be reversed—happy people might be more successful at attracting partners and sustaining marriages.",
    wrongAnswerExplanations: {
      "B": "Divorce rates are relevant but not the core logical flaw.",
      "C": "Measurement specifics are secondary to the causation issue.",
      "D": "Variation in happiness isn't the main flaw.",
      "E": "Cultural differences don't address the direction of causation."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-035",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Economist: Raising the minimum wage will not lead to significant job losses. Countries that have increased their minimum wages recently have not experienced higher unemployment rates than countries that kept wages flat.`,
    questionStem: "Which one of the following, if true, most strengthens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Some businesses have publicly stated they would cut jobs if minimum wage increased" },
      { letter: "B", text: "The countries studied had similar economic conditions, labor markets, and were at comparable points in the business cycle" },
      { letter: "C", text: "Minimum wage workers spend most of their income immediately, boosting consumer demand" },
      { letter: "D", text: "Automation is replacing many minimum wage jobs regardless of wage levels" },
      { letter: "E", text: "Public support for minimum wage increases has grown in recent years" }
    ],
    correctAnswer: "B",
    explanation: "If the countries compared were economically similar, differences in unemployment are more likely due to wage policy rather than other factors. This makes the comparison more valid.",
    wrongAnswerExplanations: {
      "A": "Business statements actually contradict the economist.",
      "C": "Consumer demand effect is a separate argument for wage increases.",
      "D": "Automation complicates the analysis and doesn't strengthen the no-job-loss claim.",
      "E": "Public support is irrelevant to employment effects."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-036",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Some argue that zoos should be abolished because they confine wild animals in unnatural environments. However, many modern zoos focus primarily on conservation, breeding endangered species and educating the public about wildlife. Without zoos, some species might now be extinct. While the welfare of individual animals matters, the survival of entire species must also be considered. A blanket abolition of zoos would be misguided.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Modern zoos focus on conservation and education" },
      { letter: "B", text: "Some species have been saved from extinction by zoos" },
      { letter: "C", text: "Individual animal welfare is less important than species survival" },
      { letter: "D", text: "It would be wrong to eliminate all zoos" },
      { letter: "E", text: "Zoos confine animals in unnatural environments" }
    ],
    correctAnswer: "D",
    explanation: "The main conclusion is the final sentence: 'A blanket abolition of zoos would be misguided.' The other points support why elimination would be wrong.",
    wrongAnswerExplanations: {
      "A": "This is supporting evidence about modern zoos.",
      "B": "This is supporting evidence.",
      "C": "This is a premise about weighing considerations.",
      "E": "This is the opposing view being addressed."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-037",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All members of the committee must have at least five years of experience in the field. The committee currently has seven members. The organization recently added two new members to the committee, bringing total membership to nine.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "The organization has at least nine employees with five or more years of experience" },
      { letter: "B", text: "The two new members each have at least five years of experience" },
      { letter: "C", text: "The committee originally had too few members" },
      { letter: "D", text: "The new members are more experienced than the original members" },
      { letter: "E", text: "All nine members have exactly five years of experience" }
    ],
    correctAnswer: "B",
    explanation: "All committee members must have 5+ years experience. The two new additions are now members. Therefore, they must each have at least five years of experience.",
    wrongAnswerExplanations: {
      "A": "The organization might have exactly nine qualified people, or more non-committee qualified employees.",
      "C": "No indication the committee was insufficient before.",
      "D": "Nothing indicates relative experience levels.",
      "E": "They have 'at least' five years, not exactly five."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-038",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A software company claims its new programming course enables students to find jobs within three months of completion. They report that 85% of their graduates found employment in the field within this timeframe.`,
    questionStem: "Which one of the following would be most important to know in evaluating the company's claim?",
    answerChoices: [
      { letter: "A", text: "How the company's course differs from competitors' courses" },
      { letter: "B", text: "Whether 85% represents an improvement over employment rates before students took the course" },
      { letter: "C", text: "How long the course takes to complete" },
      { letter: "D", text: "What programming languages the course covers" },
      { letter: "E", text: "Whether the company offers job placement assistance" }
    ],
    correctAnswer: "B",
    explanation: "If 85% of students were already finding tech jobs before the course (high industry demand), the course might not be adding value. We need to know the counterfactual—what would have happened without the course.",
    wrongAnswerExplanations: {
      "A": "Competitor differences don't evaluate this course's effectiveness.",
      "C": "Course duration doesn't evaluate employment claims.",
      "D": "Languages taught don't evaluate employment outcomes.",
      "E": "Placement assistance is interesting but doesn't evaluate the core claim."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-039",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Historian: Medieval knights are often portrayed as chivalrous defenders of the weak. However, contemporary accounts describe knights frequently pillaging villages and mistreating peasants. The romantic image of knighthood is a myth created centuries later.`,
    questionStem: "Which one of the following, if true, most weakens the historian's argument?",
    answerChoices: [
      { letter: "A", text: "Medieval literature celebrated the ideal of chivalry" },
      { letter: "B", text: "Contemporary accounts tended to focus on newsworthy violent incidents rather than everyday honorable behavior" },
      { letter: "C", text: "Peasants had little recourse against mistreatment by knights" },
      { letter: "D", text: "Knights belonged to the nobility and had military training" },
      { letter: "E", text: "Some medieval kingdoms had codes of conduct for knights" }
    ],
    correctAnswer: "B",
    explanation: "If accounts focused on sensational violence while ignoring routine honor, they give a biased picture. The romantic image might reflect everyday reality that wasn't considered newsworthy.",
    wrongAnswerExplanations: {
      "A": "Literature celebrating ideals doesn't prove knights lived by them.",
      "C": "Peasant vulnerability supports the historian's argument.",
      "D": "Noble status and training don't address behavior.",
      "E": "Codes existing doesn't prove they were followed."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-040",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Parent: Our children should learn programming because technology jobs pay well and are in high demand. Teaching them to code now will ensure their financial success as adults.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "assumes that current job market conditions will persist for decades" },
      { letter: "B", text: "ignores that some children may not be interested in technology careers" },
      { letter: "C", text: "fails to specify which programming languages children should learn" },
      { letter: "D", text: "does not consider the cost of programming education" },
      { letter: "E", text: "overlooks other career paths that also pay well" }
    ],
    correctAnswer: "A",
    explanation: "The job market changes rapidly. Skills in demand now might be automated or outsourced by the time today's children enter the workforce. The argument assumes static conditions.",
    wrongAnswerExplanations: {
      "B": "Interest levels matter but aren't the logical flaw.",
      "C": "Language specifics are implementation details.",
      "D": "Cost is practical but not the logical error.",
      "E": "Other careers don't undermine the value of programming."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-041",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Nutritionist: Eating breakfast helps people maintain a healthy weight. Studies consistently show that people who eat breakfast weigh less on average than those who skip it.`,
    questionStem: "Which one of the following, if true, most strengthens the nutritionist's claim?",
    answerChoices: [
      { letter: "A", text: "Breakfast foods often contain important vitamins and minerals" },
      { letter: "B", text: "People who previously skipped breakfast and then started eating it reported losing weight" },
      { letter: "C", text: "Most nutrition experts recommend eating breakfast" },
      { letter: "D", text: "People who eat breakfast tend to have more energy in the morning" },
      { letter: "E", text: "Breakfast is considered the most important meal in many cultures" }
    ],
    correctAnswer: "B",
    explanation: "This provides evidence of causation: people who changed their behavior (started eating breakfast) saw weight changes. This supports that breakfast helps maintain weight, not just correlation.",
    wrongAnswerExplanations: {
      "A": "Nutrients don't directly support the weight claim.",
      "C": "Expert opinion doesn't establish causation.",
      "D": "Energy levels are separate from weight maintenance.",
      "E": "Cultural beliefs don't prove health effects."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-042",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The company should transition all employees to remote work because remote employees report higher job satisfaction. Higher job satisfaction leads to better employee retention.`,
    questionStem: "The argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Remote work is equally possible for all job functions at the company" },
      { letter: "B", text: "Employee retention is a priority for the company" },
      { letter: "C", text: "Remote employees are more productive than office-based employees" },
      { letter: "D", text: "The company has the technology to support remote work" },
      { letter: "E", text: "All employees prefer working from home" }
    ],
    correctAnswer: "B",
    explanation: "The argument concludes the company 'should' go remote based on retention benefits. But this only matters if retention is actually a company priority.",
    wrongAnswerExplanations: {
      "A": "Feasibility for all roles isn't assumed—'all employees' might exclude impossible roles.",
      "C": "Productivity isn't the basis of this argument.",
      "D": "Technology support is practical, not logically assumed.",
      "E": "Employee preferences aren't the stated reason—satisfaction data is."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-043",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Author A: The novel is superior to film because literature engages the imagination more deeply. Readers must visualize characters and settings, creating a personalized experience impossible with visual media.

Author B: Film is actually more engaging because it combines visual and auditory stimulation simultaneously. The collaborative art of cinematography, acting, and music creates emotional experiences that text alone cannot match.`,
    questionStem: "Author A and Author B disagree about",
    answerChoices: [
      { letter: "A", text: "whether visualization is part of the reading experience" },
      { letter: "B", text: "whether film combines visual and auditory elements" },
      { letter: "C", text: "which medium provides deeper engagement" },
      { letter: "D", text: "whether personalized experiences are valuable" },
      { letter: "E", text: "the importance of imagination in art appreciation" }
    ],
    correctAnswer: "C",
    explanation: "A claims literature 'engages...more deeply.' B claims film is 'more engaging.' They directly disagree about which medium provides deeper engagement.",
    wrongAnswerExplanations: {
      "A": "B doesn't deny that readers visualize.",
      "B": "A doesn't dispute film's multimedia nature.",
      "D": "Neither explicitly debates the value of personalization.",
      "E": "Imagination's importance isn't the direct debate."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-044",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Professional tennis players who reach the finals of major tournaments have won more matches than any other players that year. Yet these finalists often report higher levels of physical exhaustion than players eliminated in earlier rounds.`,
    questionStem: "Which one of the following, if true, most helps to explain the finalists' greater exhaustion?",
    answerChoices: [
      { letter: "A", text: "Tennis requires both physical endurance and mental focus" },
      { letter: "B", text: "Many matches at major tournaments are played in hot weather" },
      { letter: "C", text: "Finalists must play more matches with shorter recovery time between each match" },
      { letter: "D", text: "Some players specialize in particular court surfaces" },
      { letter: "E", text: "Prize money increases significantly for later rounds" }
    ],
    correctAnswer: "C",
    explanation: "More matches with less recovery time explains why winners are more exhausted—they've played more tennis in a concentrated period than eliminated players.",
    wrongAnswerExplanations: {
      "A": "Both factors affect all players equally.",
      "B": "Weather affects all players in the tournament.",
      "D": "Surface specialization doesn't explain exhaustion differences.",
      "E": "Prize money doesn't cause physical exhaustion."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-045",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Philosopher: Some argue that we cannot know anything with certainty because our senses sometimes deceive us. But if we cannot know anything with certainty, then we cannot know with certainty that our senses deceive us. The argument against certain knowledge undermines itself.`,
    questionStem: "The philosopher's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "showing that the skeptical position is internally inconsistent" },
      { letter: "B", text: "providing evidence that our senses are generally reliable" },
      { letter: "C", text: "arguing that some forms of knowledge are more reliable than sensory knowledge" },
      { letter: "D", text: "questioning the credentials of those who hold the skeptical view" },
      { letter: "E", text: "demonstrating that certainty has never been achieved" }
    ],
    correctAnswer: "A",
    explanation: "The philosopher shows that the skeptical claim ('we can't know anything certainly') contradicts itself—it claims certain knowledge of our inability to have certain knowledge.",
    wrongAnswerExplanations: {
      "B": "No evidence of sense reliability is given.",
      "C": "No comparison of knowledge types is made.",
      "D": "No attack on skeptics' credentials.",
      "E": "The opposite—the philosopher challenges the claim against certainty."
    },
    difficulty: "hard"
  },
  {
    id: "lr8-046",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A researcher discovered data supporting her hypothesis after accidentally using incorrect statistical methods. Rather than publishing the flawed analysis, she redid the study properly and obtained the same result, then published only the correct analysis.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify the researcher's actions?",
    answerChoices: [
      { letter: "A", text: "Researchers should publish any findings that support their hypotheses" },
      { letter: "B", text: "Scientific publications should be based on methodologically sound research, even when flawed methods happen to yield accurate conclusions" },
      { letter: "C", text: "Researchers should never repeat studies that have already been conducted" },
      { letter: "D", text: "Data supporting a hypothesis is valid regardless of how it was obtained" },
      { letter: "E", text: "Scientific mistakes should always be publicly disclosed" }
    ],
    correctAnswer: "B",
    explanation: "The researcher prioritized methodological integrity over expediency. Even though the flawed method got the 'right' answer, she redid it properly. The principle that methods matter justifies this.",
    wrongAnswerExplanations: {
      "A": "This would support publishing the flawed analysis.",
      "C": "She repeated her own study—this principle would condemn her.",
      "D": "This would justify publishing the flawed analysis.",
      "E": "She didn't disclose the mistake; she corrected it instead."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-047",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The library's late fee policy states that fines are charged only for items returned after their due date. No fine exceeds $10 per item. Last month, Marcus paid $25 in late fees at the library.`,
    questionStem: "If the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "Marcus returned at least three items late" },
      { letter: "B", text: "Marcus always returns items late" },
      { letter: "C", text: "Marcus paid the maximum fine for each late item" },
      { letter: "D", text: "The library's fees are too high" },
      { letter: "E", text: "Marcus borrowed more than three items last month" }
    ],
    correctAnswer: "A",
    explanation: "Max fine is $10/item. $25 total means at least 3 items (2 items max would be $20). So Marcus returned at least 3 items late.",
    wrongAnswerExplanations: {
      "B": "One month's data doesn't indicate habitual behavior.",
      "C": "We don't know the breakdown—could be various amounts.",
      "D": "Whether fees are appropriate is subjective and not inferable.",
      "E": "He might have borrowed 3 items that were all late; nothing requires more."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-048",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Art collector: This painting must be authentic because it has been in my family for three generations, and family tradition holds that my great-grandfather purchased it directly from the artist.`,
    questionStem: "Which one of the following, if true, most weakens the collector's reasoning?",
    answerChoices: [
      { letter: "A", text: "The painting's style is consistent with the artist's known works" },
      { letter: "B", text: "Many forgeries were sold as authentic works during the artist's lifetime" },
      { letter: "C", text: "The collector's family has always been interested in art" },
      { letter: "D", text: "The painting has never been professionally authenticated" },
      { letter: "E", text: "Art forgery is more common today than in the past" }
    ],
    correctAnswer: "B",
    explanation: "If forgeries were common when the great-grandfather bought it, he could have unknowingly purchased a fake 'directly from the artist' (or someone claiming to be). Family history doesn't guarantee authenticity.",
    wrongAnswerExplanations: {
      "A": "Style consistency supports authenticity.",
      "C": "Interest in art doesn't guarantee authentication ability.",
      "D": "Lack of authentication is concerning but less direct than forgery prevalence.",
      "E": "Modern forgery rates don't affect a generations-old purchase."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-049",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Critic: The government's new educational reform is destined to fail. Every major educational reform of the past fifty years has failed to significantly improve student outcomes.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "assumes that past failures necessarily predict future failures" },
      { letter: "B", text: "does not specify what 'significant improvement' means" },
      { letter: "C", text: "ignores the possibility that some reforms have had minor successes" },
      { letter: "D", text: "fails to explain why past reforms failed" },
      { letter: "E", text: "does not consider the views of educators on the new reform" }
    ],
    correctAnswer: "A",
    explanation: "Past failures don't guarantee future failure—this reform might be different, circumstances might have changed, or lessons from past failures might have been learned.",
    wrongAnswerExplanations: {
      "B": "Definition precision isn't the core flaw.",
      "C": "Minor successes don't address the main logical error.",
      "D": "Explaining past failures wouldn't fix the predictive leap.",
      "E": "Educator views don't address the logic of predicting from history."
    },
    difficulty: "medium"
  },
  {
    id: "lr8-050",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Climate scientist: The unusually severe hurricanes in recent years are due to climate change. Ocean surface temperatures have risen significantly, and warmer water provides more energy for storm development.`,
    questionStem: "Which one of the following, if true, most strengthens the scientist's argument?",
    answerChoices: [
      { letter: "A", text: "Hurricane tracking technology has improved, allowing better detection of storms" },
      { letter: "B", text: "Computer models that incorporate rising ocean temperatures accurately predict the observed increase in hurricane intensity" },
      { letter: "C", text: "Many coastal cities have inadequate infrastructure to handle severe hurricanes" },
      { letter: "D", text: "Hurricane seasons vary in intensity from year to year" },
      { letter: "E", text: "Some scientists believe other factors contribute to hurricane formation" }
    ],
    correctAnswer: "B",
    explanation: "Models using the proposed mechanism (warm water) predict the observed effects—this corroborates the causal explanation linking climate change to severe hurricanes.",
    wrongAnswerExplanations: {
      "A": "Better detection might explain perceived increases without climate change.",
      "C": "Infrastructure vulnerability doesn't address the cause of severity.",
      "D": "Year-to-year variation doesn't support the long-term climate trend argument.",
      "E": "Other factors don't strengthen the specific climate change argument."
    },
    difficulty: "medium"
  }
];
