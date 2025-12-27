import { Question } from "../lsat-types";

export const lrQuestionsSet5: Question[] = [
  {
    id: "lr5-001",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `A recent study found that cities with more public parks have lower crime rates than cities with fewer parks. The city council therefore concluded that building more parks in our city will reduce our crime rate.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that a correlation between two factors indicates that one causes the other" },
      { letter: "B", text: "fails to consider that park maintenance costs might exceed the benefits" },
      { letter: "C", text: "generalizes from too small a sample of cities" },
      { letter: "D", text: "presumes that all cities have similar demographic compositions" },
      { letter: "E", text: "overlooks the possibility that crime rates affect park usage rather than the reverse" }
    ],
    correctAnswer: "A",
    explanation: "The argument commits the correlation-causation fallacy. Just because parks correlate with lower crime doesn't mean parks cause lower crime rates. Both could be caused by a third factor, like economic prosperity.",
    wrongAnswerExplanations: {
      "B": "Cost considerations are irrelevant to whether the causal logic is sound.",
      "C": "The argument doesn't specify sample size, and this isn't the primary flaw.",
      "D": "While demographics matter, the main flaw is the causal assumption.",
      "E": "This reverses causation but doesn't address the fundamental correlation-causation error."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-002",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Restaurant industry experts predict that restaurants offering exclusively plant-based menus will fail within two years. They note that such restaurants have limited customer appeal and cannot compete with traditional restaurants on variety. However, the new restaurant Verdant Grove, which serves only plant-based dishes, will likely succeed.`,
    questionStem: "Which one of the following, if true, most strengthens the argument?",
    answerChoices: [
      { letter: "A", text: "The owner of Verdant Grove has previous experience running successful restaurants" },
      { letter: "B", text: "Verdant Grove is located in a neighborhood where 70% of residents identify as vegan or vegetarian" },
      { letter: "C", text: "Plant-based food costs have decreased significantly in recent years" },
      { letter: "D", text: "Many traditional restaurants have started adding plant-based options to their menus" },
      { letter: "E", text: "Verdant Grove has received positive reviews from local food critics" }
    ],
    correctAnswer: "B",
    explanation: "If 70% of the local population is vegan or vegetarian, the restaurant's target market is much larger than typical, directly countering the 'limited customer appeal' concern.",
    wrongAnswerExplanations: {
      "A": "Experience helps but doesn't address the specific concerns about plant-based restaurants.",
      "C": "Lower costs help profit margins but don't address customer appeal.",
      "D": "This actually suggests more competition for Verdant Grove.",
      "E": "Reviews are encouraging but don't address the fundamental market concerns."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-003",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `The effectiveness of a new cancer treatment should be measured by the five-year survival rate of patients who receive it. Treatment X has a five-year survival rate of 60%, while Treatment Y has a rate of only 40%. Therefore, Treatment X is more effective than Treatment Y.`,
    questionStem: "Which one of the following, if true, most weakens the argument?",
    answerChoices: [
      { letter: "A", text: "Treatment X has more severe side effects than Treatment Y" },
      { letter: "B", text: "Treatment X is typically given to patients with early-stage cancer, while Treatment Y is given to those with late-stage cancer" },
      { letter: "C", text: "Treatment X costs significantly more than Treatment Y" },
      { letter: "D", text: "Treatment Y was developed more recently than Treatment X" },
      { letter: "E", text: "More hospitals offer Treatment X than Treatment Y" }
    ],
    correctAnswer: "B",
    explanation: "If treatments are given to patients at different cancer stages, comparing survival rates is misleading. Early-stage patients naturally have higher survival rates regardless of treatment effectiveness.",
    wrongAnswerExplanations: {
      "A": "Side effects matter but don't address whether survival rate comparisons are valid.",
      "C": "Cost is irrelevant to comparing medical effectiveness.",
      "D": "When developed doesn't indicate which is more effective.",
      "E": "Availability doesn't affect the effectiveness comparison."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-004",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Some philosophers argue that free will is an illusion because all our decisions are determined by prior causes—genetics, environment, and past experiences. If this deterministic view is correct, then no one can be held morally responsible for their actions, since responsibility requires the ability to have chosen otherwise.`,
    questionStem: "The argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "All human decisions are influenced by genetics and environment" },
      { letter: "B", text: "Moral responsibility cannot exist if determinism is true" },
      { letter: "C", text: "The ability to have chosen otherwise is required for moral responsibility" },
      { letter: "D", text: "Philosophers universally agree about the nature of free will" },
      { letter: "E", text: "Determinism is the correct view of human decision-making" }
    ],
    correctAnswer: "C",
    explanation: "The argument's logic requires that moral responsibility needs the ability to have chosen otherwise. Without this assumption, the conclusion about no moral responsibility doesn't follow from determinism.",
    wrongAnswerExplanations: {
      "A": "This is stated in the argument, not assumed.",
      "B": "This is the conclusion, not an assumption.",
      "D": "The argument doesn't require universal agreement.",
      "E": "The argument is conditional on determinism being true; it doesn't assume it is."
    },
    difficulty: "hard"
  },
  {
    id: "lr5-005",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All senior partners at the law firm have at least 15 years of experience. Maria has been practicing law for 20 years and works at the firm. However, Maria is not a senior partner.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Maria will never become a senior partner at the firm" },
      { letter: "B", text: "Having 15 years of experience is not sufficient to become a senior partner" },
      { letter: "C", text: "Maria lacks other qualifications required for senior partnership" },
      { letter: "D", text: "The firm has stricter requirements for senior partnership than other firms" },
      { letter: "E", text: "Senior partners must have more than 20 years of experience" }
    ],
    correctAnswer: "B",
    explanation: "Maria has 20 years of experience (more than 15) but is not a senior partner. This proves that having 15+ years of experience is necessary but not sufficient for senior partnership.",
    wrongAnswerExplanations: {
      "A": "We can't infer anything about Maria's future status.",
      "C": "We know she lacks something, but not necessarily 'other qualifications'—she might just not have been promoted yet.",
      "D": "We have no information about other firms.",
      "E": "We know 15 years is necessary; we can't conclude more than 20 is required."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-006",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `All successful entrepreneurs are risk-takers. Some risk-takers are not good financial managers. Therefore, some successful entrepreneurs are not good financial managers.`,
    questionStem: "The flawed pattern of reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "All teachers are patient. Some patient people are not well-paid. Therefore, some teachers are not well-paid." },
      { letter: "B", text: "All dogs are mammals. Some mammals are endangered. Therefore, all dogs are endangered." },
      { letter: "C", text: "No birds are mammals. Some mammals can fly. Therefore, no birds can fly." },
      { letter: "D", text: "All squares are rectangles. All rectangles have four sides. Therefore, all squares have four sides." },
      { letter: "E", text: "Some athletes are students. All students are young. Therefore, some athletes are young." }
    ],
    correctAnswer: "A",
    explanation: "Both arguments have the same invalid structure: All A are B. Some B are not C. Therefore, some A are not C. The 'some B' in the second premise might not include any A, making the conclusion unwarranted.",
    wrongAnswerExplanations: {
      "B": "This concludes 'all' rather than 'some' from a 'some' premise—different flaw.",
      "C": "This involves negative statements—different structure.",
      "D": "This is a valid syllogism with a true conclusion.",
      "E": "This has a different structure starting with 'some.'"
    },
    difficulty: "hard"
  },
  {
    id: "lr5-007",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Nutritionist: My clients often ask whether they should take vitamin supplements. I tell them that if they eat a balanced diet including fruits, vegetables, whole grains, and lean proteins, supplements are unnecessary. However, many people don't eat balanced diets and therefore should consider supplements. The key is to evaluate one's actual diet rather than following general rules about supplements.`,
    questionStem: "The nutritionist's response employs which one of the following argumentative strategies?",
    answerChoices: [
      { letter: "A", text: "Rejecting a general claim by citing specific counterexamples" },
      { letter: "B", text: "Arguing that the answer to a question depends on individual circumstances" },
      { letter: "C", text: "Providing statistical evidence to support a recommendation" },
      { letter: "D", text: "Criticizing the assumptions underlying the question asked" },
      { letter: "E", text: "Appealing to professional expertise to justify a conclusion" }
    ],
    correctAnswer: "B",
    explanation: "The nutritionist argues that whether supplements are needed depends on individual circumstances—specifically, whether someone eats a balanced diet. There's no one-size-fits-all answer.",
    wrongAnswerExplanations: {
      "A": "No counterexamples are provided to reject a general claim.",
      "C": "No statistical evidence is cited.",
      "D": "The nutritionist doesn't criticize the question's assumptions.",
      "E": "The nutritionist doesn't appeal to credentials but to logical reasoning."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-008",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `When the city's oldest movie theater was scheduled for demolition to make way for a shopping center, local historians organized protests. They argued that the theater, built in 1925, was a cultural landmark that should be preserved. The city council agreed to designate the theater as a historic site, halting the demolition.`,
    questionStem: "Which one of the following principles, if established, most helps to justify the city council's decision?",
    answerChoices: [
      { letter: "A", text: "Economic development should never be pursued at the expense of existing businesses" },
      { letter: "B", text: "The preferences of organized interest groups should determine urban planning decisions" },
      { letter: "C", text: "Buildings with significant historical or cultural value should be protected from demolition" },
      { letter: "D", text: "All buildings over 50 years old should automatically receive historic designation" },
      { letter: "E", text: "Private property rights should yield to public opinion in matters of urban development" }
    ],
    correctAnswer: "C",
    explanation: "The council's decision was based on the theater's status as a cultural landmark. The principle that culturally significant buildings should be protected directly justifies this reasoning.",
    wrongAnswerExplanations: {
      "A": "This is about existing businesses, not historic preservation.",
      "B": "The decision was based on cultural value, not just because a group protested.",
      "D": "Age alone isn't the criterion—cultural significance is.",
      "E": "This is too broad and doesn't capture the specific rationale."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-009",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A pharmaceutical company's new pain medication was shown in clinical trials to be significantly more effective than existing treatments. However, after the medication was approved and marketed, patient satisfaction surveys showed that users rated it no higher than they rated older, less effective medications.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent discrepancy?",
    answerChoices: [
      { letter: "A", text: "The new medication costs more than older alternatives" },
      { letter: "B", text: "Clinical trial participants knew they might be receiving either the new drug or a placebo" },
      { letter: "C", text: "The new medication has more pronounced side effects that negatively affect overall satisfaction" },
      { letter: "D", text: "Many patients using the older medications had been doing so for years" },
      { letter: "E", text: "The pharmaceutical company conducted extensive marketing for the new medication" }
    ],
    correctAnswer: "C",
    explanation: "If the new medication has worse side effects, patients might rate overall satisfaction similarly despite better pain relief. Satisfaction encompasses more than just effectiveness.",
    wrongAnswerExplanations: {
      "A": "Cost might affect purchase decisions but not satisfaction ratings of those already using it.",
      "B": "This explains trial conditions but not post-approval user satisfaction.",
      "D": "Familiarity might affect preference but doesn't explain equal satisfaction with a less effective drug.",
      "E": "Marketing might increase awareness but doesn't explain satisfaction ratings."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-010",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Manager: Our company should switch to a four-day workweek. Studies show that employees at companies with four-day weeks report higher job satisfaction and lower stress. Since happy, less-stressed employees are more productive, this change would benefit our company.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the manager's argument?",
    answerChoices: [
      { letter: "A", text: "Whether the company's competitors use a four-day workweek" },
      { letter: "B", text: "Whether employees at this company have expressed interest in a four-day week" },
      { letter: "C", text: "Whether the relationship between satisfaction and productivity holds across different industries" },
      { letter: "D", text: "How long the companies in the studies have used a four-day workweek" },
      { letter: "E", text: "Whether the manager personally prefers a four-day workweek" }
    ],
    correctAnswer: "C",
    explanation: "The argument assumes the satisfaction-productivity link applies to this company's industry. Knowing whether this relationship holds across industries would help evaluate whether the benefits would materialize here.",
    wrongAnswerExplanations: {
      "A": "What competitors do doesn't determine whether this change would be beneficial.",
      "B": "Employee interest is nice but doesn't affect whether the argument's logic is sound.",
      "D": "Duration of implementation is less relevant than whether the benefits apply generally.",
      "E": "The manager's personal preference is irrelevant to evaluating the argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-011",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Critic: The government claims that its new education policy will improve student performance because the policy was developed by a committee of education experts. But this claim should be rejected. The committee members were all appointed by the government, so naturally they would design a policy that the government would favor.`,
    questionStem: "The reasoning in the critic's argument is flawed because the argument",
    answerChoices: [
      { letter: "A", text: "fails to consider whether the education experts have relevant qualifications" },
      { letter: "B", text: "assumes without justification that the experts' recommendations were influenced by their appointers" },
      { letter: "C", text: "confuses an attack on the source of a claim with an attack on the claim itself" },
      { letter: "D", text: "fails to provide an alternative explanation for the committee's recommendations" },
      { letter: "E", text: "generalizes from the behavior of some committees to all government-appointed committees" }
    ],
    correctAnswer: "C",
    explanation: "This is an ad hominem fallacy. The critic attacks the source (government-appointed experts) rather than addressing the actual merits of the policy. Even if the experts were biased, the policy could still be effective.",
    wrongAnswerExplanations: {
      "A": "The argument assumes experts have relevant qualifications; that's not the flaw.",
      "B": "This captures part of the problem but not the core logical flaw.",
      "D": "Not providing alternatives isn't a logical flaw in this context.",
      "E": "The critic doesn't generalize to all committees."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-012",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Archaeologists discovered that an ancient city was abandoned suddenly around 1200 BCE. No signs of warfare, earthquake, or epidemic were found. The archaeologists concluded that the abandonment was likely due to a prolonged drought that made agriculture impossible in the region.`,
    questionStem: "Which one of the following, if true, most strengthens the archaeologists' conclusion?",
    answerChoices: [
      { letter: "A", text: "Written records from neighboring civilizations mention refugee populations arriving from the city's region" },
      { letter: "B", text: "Tree ring data from the region shows significantly reduced rainfall beginning around 1200 BCE" },
      { letter: "C", text: "The city had a sophisticated irrigation system" },
      { letter: "D", text: "Other cities in the region were abandoned at different times" },
      { letter: "E", text: "The city's population had been growing steadily before the abandonment" }
    ],
    correctAnswer: "B",
    explanation: "Tree ring data providing direct evidence of reduced rainfall strongly supports the drought hypothesis. This is independent scientific evidence corroborating the archaeologists' conclusion.",
    wrongAnswerExplanations: {
      "A": "Refugees arriving elsewhere confirms abandonment but not specifically drought as the cause.",
      "C": "Irrigation suggests water management but doesn't confirm drought occurred.",
      "D": "Different timing suggests factors other than regional drought.",
      "E": "Population growth before abandonment doesn't indicate why it happened."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-013",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `A wildlife management agency argues that hunting helps control deer populations and prevents overgrazing that damages forest ecosystems. They cite the fact that in areas where hunting is permitted, deer populations remain stable and forests maintain diverse plant species.`,
    questionStem: "Which one of the following, if true, most weakens the agency's argument?",
    answerChoices: [
      { letter: "A", text: "Some hunters do not comply with bag limits set by the agency" },
      { letter: "B", text: "Areas where hunting is permitted also have more natural predators of deer" },
      { letter: "C", text: "Hunting licenses generate significant revenue for conservation programs" },
      { letter: "D", text: "Deer populations in non-hunted areas sometimes stabilize on their own" },
      { letter: "E", text: "Some plant species benefit from moderate deer grazing" }
    ],
    correctAnswer: "B",
    explanation: "If areas with hunting also have more natural predators, the stable populations might be due to predation, not hunting. This alternative explanation weakens the claim that hunting specifically is responsible.",
    wrongAnswerExplanations: {
      "A": "Non-compliance might reduce effectiveness but doesn't undermine the basic argument.",
      "C": "Revenue benefits are irrelevant to whether hunting controls populations.",
      "D": "Some populations stabilizing doesn't show that hunting isn't effective where permitted.",
      "E": "Benefits of moderate grazing don't address whether hunting controls populations."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-014",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The museum's board has established that any new exhibit must either focus on local history or receive at least 80% approval from the curatorial committee. The proposed contemporary art exhibit does not focus on local history. Therefore, it must receive at least 80% approval from the curatorial committee.`,
    questionStem: "The conclusion follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "The contemporary art exhibit will be approved as a new exhibit" },
      { letter: "B", text: "The curatorial committee has not yet voted on the contemporary art exhibit" },
      { letter: "C", text: "Contemporary art exhibits are less popular than local history exhibits" },
      { letter: "D", text: "The museum has not featured contemporary art before" },
      { letter: "E", text: "No exhibit can receive exactly 80% approval" }
    ],
    correctAnswer: "A",
    explanation: "The rule applies to new exhibits. If the contemporary art exhibit will be approved as a new exhibit, and it doesn't focus on local history, then the rule requires 80% approval.",
    wrongAnswerExplanations: {
      "B": "Whether they've voted yet doesn't establish that the rule applies.",
      "C": "Popularity is irrelevant to the logical requirement.",
      "D": "Past features don't determine whether the rule applies now.",
      "E": "The exact percentage threshold is already stated in the premises."
    },
    difficulty: "hard"
  },
  {
    id: "lr5-015",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Some economists argue that minimum wage increases lead to job losses because businesses cannot afford to pay higher wages. However, studies have shown that moderate minimum wage increases often have little to no effect on employment levels. Moreover, higher wages can reduce employee turnover, which saves businesses money on training costs. The real issue is not whether to raise the minimum wage, but by how much and how quickly.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Minimum wage increases do not lead to job losses" },
      { letter: "B", text: "Higher wages reduce employee turnover" },
      { letter: "C", text: "Some economists' arguments against minimum wage increases are flawed" },
      { letter: "D", text: "The important question about minimum wage is not whether to raise it but by how much" },
      { letter: "E", text: "Moderate minimum wage increases have little effect on employment" }
    ],
    correctAnswer: "D",
    explanation: "The final sentence presents the main point: the debate should focus on the magnitude and pace of increases, not whether to have them. The earlier points support this conclusion.",
    wrongAnswerExplanations: {
      "A": "This is supporting evidence, not the main conclusion.",
      "B": "This is a supporting benefit mentioned, not the main point.",
      "C": "Critiquing economists is part of the argument but not its main conclusion.",
      "E": "This is cited evidence, not the argument's ultimate point."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-016",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The city orchestra requires all musicians to audition annually, regardless of how long they have been with the orchestra. Any musician who fails to appear for their annual audition is automatically dismissed. Last year, three violinists were dismissed from the orchestra.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "At least three violinists failed their auditions last year" },
      { letter: "B", text: "The three dismissed violinists failed to appear for their auditions" },
      { letter: "C", text: "The three dismissed violinists either failed their auditions or failed to appear" },
      { letter: "D", text: "No violinist who appeared for an audition was dismissed" },
      { letter: "E", text: "The orchestra has strict standards for violin performance" }
    ],
    correctAnswer: "C",
    explanation: "Musicians can be dismissed for either failing an audition or not appearing. Since three violinists were dismissed, they must have been dismissed for one of these two reasons (or both).",
    wrongAnswerExplanations: {
      "A": "Some might have been dismissed for not appearing, not for failing.",
      "B": "Some might have appeared and failed their auditions.",
      "D": "We can't conclude this—those who appeared might have failed.",
      "E": "Strictness of standards isn't established by the given information."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-017",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Chen: Artists who create works purely for commercial success cannot produce truly meaningful art. The drive for profit inevitably compromises artistic integrity and leads to superficial work designed to appeal to the lowest common denominator.

Rodriguez: That's an outdated view. Many commercially successful artists have created profoundly meaningful work. Shakespeare wrote plays to make money, yet his works are considered among the greatest in literature.`,
    questionStem: "Chen and Rodriguez disagree about whether",
    answerChoices: [
      { letter: "A", text: "Shakespeare's works are meaningful" },
      { letter: "B", text: "commercial motivation is compatible with creating meaningful art" },
      { letter: "C", text: "most contemporary art is created for commercial purposes" },
      { letter: "D", text: "artistic integrity is important for meaningful art" },
      { letter: "E", text: "the desire for profit influences artistic choices" }
    ],
    correctAnswer: "B",
    explanation: "Chen argues commercial motivation prevents meaningful art; Rodriguez argues it doesn't, citing Shakespeare as an example of commercial motivation producing great art.",
    wrongAnswerExplanations: {
      "A": "Both would likely agree Shakespeare's works are meaningful.",
      "C": "Neither discusses the proportion of contemporary art that is commercial.",
      "D": "Both might agree integrity matters; they disagree on whether profit compromises it.",
      "E": "Both seem to accept that profit influences choices—they disagree on the consequences."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-018",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Every great civilization in history has eventually declined. Our civilization has achieved greatness by any historical measure. Therefore, our civilization will inevitably decline.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "treats a probable outcome as if it were certain" },
      { letter: "B", text: "assumes that historical patterns must necessarily continue" },
      { letter: "C", text: "fails to define what constitutes 'greatness' in a civilization" },
      { letter: "D", text: "ignores the possibility that our civilization is different from past civilizations" },
      { letter: "E", text: "provides no evidence that past civilizations were truly great" }
    ],
    correctAnswer: "B",
    explanation: "The argument assumes past patterns must continue into the future. Just because all past great civilizations declined doesn't mean future ones must—circumstances might differ.",
    wrongAnswerExplanations: {
      "A": "The argument does present it as inevitable, but the flaw is deeper—the pattern itself might not hold.",
      "C": "The definition of greatness isn't the key issue with the logic.",
      "D": "This is close but less precise than B—the core issue is assuming patterns continue.",
      "E": "The argument doesn't require proving past greatness to be flawed."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-019",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Researchers found that people who regularly practice meditation show increased activity in brain regions associated with empathy and emotional regulation. The researchers concluded that meditation causes these neurological changes.`,
    questionStem: "Which one of the following, if true, most strengthens the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "People with naturally high empathy are more likely to be attracted to meditation" },
      { letter: "B", text: "The study included thousands of participants from diverse backgrounds" },
      { letter: "C", text: "Non-meditators who began a meditation practice showed increased activity in these brain regions after eight weeks" },
      { letter: "D", text: "Other activities like yoga also show correlation with increased empathy" },
      { letter: "E", text: "The researchers used state-of-the-art brain imaging technology" }
    ],
    correctAnswer: "C",
    explanation: "Showing that non-meditators who start meditating develop these changes provides evidence for causation—it's not just that empathetic people choose to meditate.",
    wrongAnswerExplanations: {
      "A": "This actually weakens the argument by suggesting selection bias.",
      "B": "Large sample size improves reliability but doesn't establish causation.",
      "D": "Other activities having similar effects doesn't show meditation causes changes.",
      "E": "Better technology improves accuracy but doesn't establish causation."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-020",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Health officials recommend that adults get at least seven hours of sleep per night. A study found that adults who consistently sleep fewer than seven hours have higher rates of heart disease. This confirms that insufficient sleep causes heart disease.`,
    questionStem: "Which one of the following, if true, most weakens the argument?",
    answerChoices: [
      { letter: "A", text: "Some adults function well on less than seven hours of sleep" },
      { letter: "B", text: "People with underlying heart conditions often experience sleep disturbances that reduce their sleep duration" },
      { letter: "C", text: "The study controlled for age and gender differences" },
      { letter: "D", text: "Adults who sleep more than nine hours also have elevated heart disease rates" },
      { letter: "E", text: "Sleep duration tends to decrease as people age" }
    ],
    correctAnswer: "B",
    explanation: "This suggests reverse causation—heart conditions might cause sleep problems rather than sleep problems causing heart disease. This alternative explanation weakens the causal claim.",
    wrongAnswerExplanations: {
      "A": "Individual variation doesn't undermine the statistical finding.",
      "C": "Controlling for factors strengthens, not weakens, the study.",
      "D": "Long sleep also being problematic doesn't weaken the short sleep finding.",
      "E": "Age correlation doesn't explain away the sleep-heart disease link."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-021",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The mayor argues that the city should not build a new sports stadium because the money would be better spent on schools. However, the funds proposed for the stadium come from a special tax on hotel rooms, revenue that by law can only be used for tourism promotion and cannot be redirected to schools.`,
    questionStem: "The argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "A new stadium would promote tourism in the city" },
      { letter: "B", text: "The hotel room tax generates sufficient revenue for a stadium" },
      { letter: "C", text: "The mayor's argument treats the stadium funds as if they could be used for schools" },
      { letter: "D", text: "Schools in the city need additional funding" },
      { letter: "E", text: "Tourism promotion benefits the city's residents" }
    ],
    correctAnswer: "C",
    explanation: "The counterargument works only if the mayor is incorrectly assuming the stadium funds could be redirected to schools. Without this assumption about what the mayor's argument presupposes, the counterargument has no force.",
    wrongAnswerExplanations: {
      "A": "Whether a stadium promotes tourism isn't key to this specific rebuttal.",
      "B": "Revenue sufficiency isn't the point—it's about what the money can be used for.",
      "D": "Whether schools need funding doesn't affect the legal funding argument.",
      "E": "Benefits to residents aren't the focus of this logical rebuttal."
    },
    difficulty: "hard"
  },
  {
    id: "lr5-022",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A newspaper published an article naming a private citizen as a suspect in a financial fraud investigation, even though no charges had been filed. The citizen sued the newspaper for defamation. The court ruled in favor of the newspaper, noting that the article was based on official police sources and accurately reported the investigation status.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify the court's ruling?",
    answerChoices: [
      { letter: "A", text: "Newspapers should never identify suspects before formal charges are filed" },
      { letter: "B", text: "Accurate reporting of official proceedings and investigations is protected from defamation claims" },
      { letter: "C", text: "Public interest in crime reporting outweighs individual privacy concerns" },
      { letter: "D", text: "Police should not release names of suspects to the media" },
      { letter: "E", text: "Citizens should not be able to sue newspapers for reporting facts" }
    ],
    correctAnswer: "B",
    explanation: "The court's reasoning focused on the accuracy of the report and its basis in official sources. The principle that accurate reporting of official matters is protected directly justifies this ruling.",
    wrongAnswerExplanations: {
      "A": "This would support the plaintiff, not the newspaper.",
      "C": "While relevant, this is broader than what the ruling was based on.",
      "D": "This addresses police conduct, not newspaper liability.",
      "E": "This is too broad—defamation law does protect against some fact-based harms."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-023",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A manufacturing company invested heavily in automation, reducing its workforce by 40%. Despite paying fewer workers, the company's total labor costs increased the following year.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent paradox?",
    answerChoices: [
      { letter: "A", text: "The automation equipment required expensive maintenance" },
      { letter: "B", text: "The remaining workers received significant raises and required extensive retraining" },
      { letter: "C", text: "The company expanded its operations to new markets" },
      { letter: "D", text: "Other companies in the industry did not adopt similar automation" },
      { letter: "E", text: "The company's overall profits increased after automation" }
    ],
    correctAnswer: "B",
    explanation: "If the remaining 60% of workers received substantial raises and costly retraining, total labor costs could increase even with fewer employees. Higher per-worker costs offset headcount reduction.",
    wrongAnswerExplanations: {
      "A": "Maintenance costs aren't labor costs.",
      "C": "Expansion might increase labor costs, but this doesn't explain the automation scenario.",
      "D": "Competitors' actions don't explain this company's labor costs.",
      "E": "Profits don't explain why labor costs increased."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-024",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Lawyer: My client is charged with being in the bank at the time of the robbery. But records show he made a purchase at a store five miles away just ten minutes after the robbery occurred. It would have been impossible for anyone to travel that distance in that time during rush hour traffic. Therefore, my client could not have been at the bank during the robbery.`,
    questionStem: "The lawyer's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "demonstrating that the prosecution's key witness is unreliable" },
      { letter: "B", text: "showing that the physical circumstances make the alleged action impossible" },
      { letter: "C", text: "establishing an alibi through witness testimony" },
      { letter: "D", text: "questioning the legality of the evidence-gathering procedures" },
      { letter: "E", text: "arguing that similar cases have resulted in acquittals" }
    ],
    correctAnswer: "B",
    explanation: "The lawyer argues that given the physical constraints (distance, time, traffic), it was impossible for the client to be at the bank. This is an impossibility argument based on physical circumstances.",
    wrongAnswerExplanations: {
      "A": "No witness reliability is discussed.",
      "C": "The alibi is established through records, not witness testimony per se.",
      "D": "No procedural challenges are raised.",
      "E": "No precedents or similar cases are mentioned."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-025",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Company executive: We should relocate our headquarters from the city center to the suburbs. Our employees spend an average of 90 minutes commuting each day, and a suburban location would reduce this average to 45 minutes. This would improve employee satisfaction and productivity.`,
    questionStem: "The answer to which one of the following questions would be most useful in evaluating the executive's argument?",
    answerChoices: [
      { letter: "A", text: "What percentage of employees currently commute from suburban areas versus urban areas?" },
      { letter: "B", text: "How much would the company save on rent at a suburban location?" },
      { letter: "C", text: "Do any competing companies have suburban headquarters?" },
      { letter: "D", text: "Would the company continue to attract qualified job applicants at a suburban location?" },
      { letter: "E", text: "Is 45 minutes considered a long commute by industry standards?" }
    ],
    correctAnswer: "A",
    explanation: "If most employees currently commute from the city, moving to suburbs might increase their commutes. The overall average would only decrease if employees disproportionately come from suburbs. This directly affects the argument's premise.",
    wrongAnswerExplanations: {
      "B": "Rent savings are a separate consideration from commute times.",
      "C": "Competitors' locations don't affect the commute calculation.",
      "D": "While important for hiring, this doesn't evaluate the commute time argument.",
      "E": "Industry standards don't determine whether this move helps these specific employees."
    },
    difficulty: "hard"
  },
  {
    id: "lr5-026",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Letter to the editor: The proposed tax increase to fund public transportation is unnecessary. I drive to work every day and have never once needed to use a bus or train. The city should not raise taxes for services that many residents, like myself, will never use.`,
    questionStem: "The reasoning in the letter is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "ignores the possibility that the tax increase might benefit the writer indirectly" },
      { letter: "B", text: "assumes that a service is unnecessary if the writer personally does not use it" },
      { letter: "C", text: "fails to consider whether the current transportation system is adequate" },
      { letter: "D", text: "does not provide evidence that other residents share the writer's view" },
      { letter: "E", text: "overlooks the environmental benefits of public transportation" }
    ],
    correctAnswer: "B",
    explanation: "The writer commits the fallacy of generalizing from personal experience. Just because the writer doesn't use public transit doesn't mean it's unnecessary for others or the city as a whole.",
    wrongAnswerExplanations: {
      "A": "While true, this is a secondary issue to the main logical flaw.",
      "C": "Adequacy isn't addressed but isn't the core flaw either.",
      "D": "The argument's flaw isn't about consensus but about personal experience as basis.",
      "E": "Environmental benefits are beside the point of the logical flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-027",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Psychologists theorize that children who are read to frequently develop larger vocabularies than children who are not. To test this, researchers surveyed parents about their reading habits and then tested their children's vocabulary. Children whose parents reported reading to them daily scored significantly higher on vocabulary tests.`,
    questionStem: "Which one of the following, if true, would most strengthen the support for the psychologists' theory?",
    answerChoices: [
      { letter: "A", text: "Parents who read to their children frequently tend to have larger vocabularies themselves" },
      { letter: "B", text: "The vocabulary tests were standardized and widely validated" },
      { letter: "C", text: "Children who listened to audiobooks daily showed similar vocabulary gains as those who were read to" },
      { letter: "D", text: "Video recordings confirmed that parents who claimed to read daily actually did so" },
      { letter: "E", text: "The study included children from diverse socioeconomic backgrounds" }
    ],
    correctAnswer: "D",
    explanation: "Verifying that parental reports were accurate strengthens the study's reliability. Self-reported data can be unreliable, so confirmation eliminates this weakness.",
    wrongAnswerExplanations: {
      "A": "This actually introduces a confounding variable—maybe parental vocabulary, not reading, is the cause.",
      "B": "Valid tests are important but don't strengthen the specific causal claim.",
      "C": "Audiobooks support exposure to words, not specifically reading being the mechanism.",
      "E": "Diversity improves generalizability but doesn't strengthen the specific causal link."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-028",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A technology company has a policy that all employees must complete cybersecurity training within their first month of employment. Any employee who does not complete the training is not allowed access to the company's internal network. Recently, several new employees were granted network access.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "The new employees who were granted access have been employed for more than one month" },
      { letter: "B", text: "All employees who complete cybersecurity training are granted network access" },
      { letter: "C", text: "The new employees who were granted access completed cybersecurity training" },
      { letter: "D", text: "Cybersecurity training takes less than one month to complete" },
      { letter: "E", text: "Network access is essential for all jobs at the company" }
    ],
    correctAnswer: "C",
    explanation: "Network access requires completing cybersecurity training. Since these employees were granted access, they must have completed the training.",
    wrongAnswerExplanations: {
      "A": "They could have completed training early in their first month.",
      "B": "The rule states training is necessary for access, not that it's sufficient—other requirements might exist.",
      "D": "The training must be completed within a month; we don't know how long it takes.",
      "E": "Nothing indicates network access is essential for all positions."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-029",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `If a restaurant receives a health code violation, it must close for inspection. Giuseppe's received a health code violation last week. Therefore, Giuseppe's had to close for inspection.`,
    questionStem: "The reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "If it rains, the parade will be cancelled. It rained yesterday. So the parade was cancelled." },
      { letter: "B", text: "Students who fail the exam must retake the course. Alex failed the exam. Therefore, some students must retake the course." },
      { letter: "C", text: "All birds can fly. Penguins are birds. Therefore, penguins can fly." },
      { letter: "D", text: "If the museum is crowded, admission will be free. Admission was free today. So the museum was crowded." },
      { letter: "E", text: "Books that are overdue incur fines. This book is overdue. Therefore, many books incur fines." }
    ],
    correctAnswer: "A",
    explanation: "Both arguments follow valid modus ponens: If P then Q; P is true; therefore Q. The original and A both apply a conditional rule to a specific instance.",
    wrongAnswerExplanations: {
      "B": "This shifts from a specific case to a general statement about 'some students.'",
      "C": "This has a false conclusion and involves a universal that doesn't apply to all members.",
      "D": "This is affirming the consequent—a logical fallacy (Q is true, so P must be true).",
      "E": "This shifts from a specific case to 'many books.'"
    },
    difficulty: "medium"
  },
  {
    id: "lr5-030",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `A city council member argues that building a new community center will reduce youth crime. She points out that in other cities, youth crime rates dropped after community centers were built, and youth who participated in community center programs were less likely to engage in criminal activity.`,
    questionStem: "Which one of the following, if true, most weakens the council member's argument?",
    answerChoices: [
      { letter: "A", text: "The proposed community center would be located in a low-crime neighborhood" },
      { letter: "B", text: "Youth who participate in community programs are generally already less inclined toward criminal activity" },
      { letter: "C", text: "Building a community center costs more than expanding existing youth programs" },
      { letter: "D", text: "Some community centers in other cities have experienced vandalism" },
      { letter: "E", text: "The city already has several recreational facilities for youth" }
    ],
    correctAnswer: "B",
    explanation: "This suggests selection bias: youth who use community centers might already be less crime-prone. The programs don't reduce crime; they just attract non-criminal youth.",
    wrongAnswerExplanations: {
      "A": "Building in a low-crime area reduces potential impact but doesn't weaken the general argument.",
      "C": "Cost comparison doesn't address whether community centers reduce crime.",
      "D": "Vandalism at some centers doesn't undermine the crime-reduction claim.",
      "E": "Existing facilities don't address whether a new center would reduce crime."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-031",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `In the past decade, the average age of first-time home buyers has increased from 28 to 34. This proves that young people today are less financially responsible than previous generations, preferring to spend money on luxuries rather than save for important investments like homes.`,
    questionStem: "The argument's conclusion depends on the assumption that",
    answerChoices: [
      { letter: "A", text: "home ownership is an important financial goal for young people" },
      { letter: "B", text: "young people today have similar income levels to young people in the past" },
      { letter: "C", text: "rising home prices and other economic factors are not primarily responsible for the delayed home buying" },
      { letter: "D", text: "previous generations of young people were more interested in home ownership" },
      { letter: "E", text: "spending on luxuries has increased among young people" }
    ],
    correctAnswer: "C",
    explanation: "The argument attributes delayed home buying to irresponsibility. But if economic factors (prices, wages, debt) explain the delay, the irresponsibility conclusion doesn't follow. The argument assumes these aren't the primary cause.",
    wrongAnswerExplanations: {
      "A": "Whether it's a goal doesn't affect whether the delay indicates irresponsibility.",
      "B": "Similar incomes would actually support the irresponsibility claim if true.",
      "D": "Interest levels of previous generations aren't directly relevant to the logic.",
      "E": "Increased luxury spending is the conclusion's claim, not an assumption it relies on."
    },
    difficulty: "hard"
  },
  {
    id: "lr5-032",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A doctor informed a patient that the patient's genetic test revealed a hereditary condition that affects the patient's siblings as well. The doctor recommended that the patient inform the siblings so they could be tested. The patient refused, citing privacy concerns. The doctor then contacted the siblings directly to recommend testing.`,
    questionStem: "Which one of the following principles, if valid, would most help justify the doctor's action?",
    answerChoices: [
      { letter: "A", text: "Doctors should always follow their patients' wishes regarding disclosure of medical information" },
      { letter: "B", text: "When a patient's genetic information has direct health implications for identifiable family members, doctors may disclose relevant information to protect those family members" },
      { letter: "C", text: "Patient privacy should be protected in all circumstances" },
      { letter: "D", text: "Doctors are not obligated to inform family members of genetic conditions" },
      { letter: "E", text: "Genetic testing results should be shared with all interested parties" }
    ],
    correctAnswer: "B",
    explanation: "This principle directly justifies the doctor's action: when genetic information affects identifiable family members' health, disclosure to protect them is permissible.",
    wrongAnswerExplanations: {
      "A": "This would condemn the doctor's action, not justify it.",
      "C": "This would also condemn the doctor's action.",
      "D": "This doesn't justify the action; it says doctors aren't obligated but doesn't permit it.",
      "E": "This is too broad—'interested parties' is vague and not specifically about health protection."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-033",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A study found that students who take notes by hand retain information better than students who type notes on laptops. Surprisingly, the handwriting students took fewer and less detailed notes than the typing students.`,
    questionStem: "Which one of the following, if true, most helps explain the surprising finding?",
    answerChoices: [
      { letter: "A", text: "Students who prefer typing tend to have faster reading speeds" },
      { letter: "B", text: "The slower pace of handwriting forces students to process and summarize information rather than transcribe it verbatim" },
      { letter: "C", text: "Some students in the study had poor handwriting" },
      { letter: "D", text: "Laptop screens can cause eye strain during long lectures" },
      { letter: "E", text: "The study was conducted over a single semester" }
    ],
    correctAnswer: "B",
    explanation: "Handwriting is slower, so students must actively process and select key information. This deeper processing improves retention compared to the passive transcription that typing enables.",
    wrongAnswerExplanations: {
      "A": "Reading speed doesn't explain why fewer notes lead to better retention.",
      "C": "Poor handwriting doesn't explain superior retention.",
      "D": "Eye strain might affect attention but doesn't explain the notes-retention relationship.",
      "E": "Study duration doesn't explain the mechanism."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-034",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Politician: My opponent says we should invest more in renewable energy. But she drives a gasoline-powered car and has not installed solar panels on her home. Clearly, she does not really believe that renewable energy is important, and we should disregard her policy recommendations.`,
    questionStem: "The politician's argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "attacks the opponent's character rather than addressing the merits of her policy position" },
      { letter: "B", text: "assumes that all politicians must personally practice what they advocate" },
      { letter: "C", text: "ignores evidence that renewable energy investments are economically beneficial" },
      { letter: "D", text: "fails to consider that the opponent might support renewable energy for reasons other than personal use" },
      { letter: "E", text: "presumes that personal lifestyle choices are relevant to evaluating policy arguments" }
    ],
    correctAnswer: "A",
    explanation: "This is an ad hominem fallacy. The politician attacks the opponent's personal choices rather than evaluating the actual policy argument for renewable energy.",
    wrongAnswerExplanations: {
      "B": "While related, the specific flaw is attacking the person rather than the argument.",
      "C": "Ignoring evidence is a separate issue from the ad hominem attack.",
      "D": "This is close but doesn't capture the essential logical flaw.",
      "E": "This restates the flaw but doesn't identify it as ad hominem."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-035",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Marine biologists have proposed establishing marine protected areas where fishing is prohibited to help depleted fish populations recover. Critics argue that this will simply shift fishing pressure to unprotected areas. The biologists maintain that the protected areas will still benefit overall fish populations.`,
    questionStem: "Which one of the following, if true, most strengthens the marine biologists' position?",
    answerChoices: [
      { letter: "A", text: "Some fish species migrate between protected and unprotected waters" },
      { letter: "B", text: "Fish populations in protected areas grow large enough that adults and larvae spill over into surrounding fishing grounds" },
      { letter: "C", text: "The proposed protected areas include important fish breeding habitats" },
      { letter: "D", text: "Similar protection programs have been implemented for terrestrial wildlife" },
      { letter: "E", text: "Commercial fishing operations oppose the establishment of protected areas" }
    ],
    correctAnswer: "B",
    explanation: "The spillover effect directly addresses the critics' concern. If protected populations grow and spread to fishing areas, overall populations benefit even if fishing pressure shifts.",
    wrongAnswerExplanations: {
      "A": "Migration could go either way and doesn't clearly help the argument.",
      "C": "Breeding habitats matter but doesn't directly counter the fishing pressure concern.",
      "D": "Terrestrial programs don't directly support marine program effectiveness.",
      "E": "Industry opposition doesn't indicate whether the policy will work."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-036",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Art historians often attribute unsigned Renaissance paintings to specific artists based on stylistic analysis. However, recent technical studies using X-rays and chemical analysis of pigments have sometimes contradicted these attributions. While style remains important, the field must increasingly integrate scientific methods with traditional connoisseurship to make reliable attributions.`,
    questionStem: "Which one of the following most accurately states the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Scientific analysis has proven stylistic attributions to be unreliable" },
      { letter: "B", text: "Technical studies have contradicted some traditional attributions" },
      { letter: "C", text: "Reliable art attribution requires combining scientific methods with stylistic analysis" },
      { letter: "D", text: "X-rays and chemical analysis are superior to stylistic analysis" },
      { letter: "E", text: "Art historians should abandon traditional connoisseurship" }
    ],
    correctAnswer: "C",
    explanation: "The main point is that reliable attribution requires integrating both approaches. The argument doesn't dismiss style but argues for combining methods.",
    wrongAnswerExplanations: {
      "A": "The argument doesn't say stylistic analysis is unreliable, just that it needs supplementation.",
      "B": "This is supporting evidence, not the main conclusion.",
      "D": "The argument doesn't claim superiority of one method.",
      "E": "The opposite—the argument says style 'remains important.'"
    },
    difficulty: "medium"
  },
  {
    id: "lr5-037",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `Every undergraduate philosophy major at the university is required to take a logic course. Some philosophy majors also take courses in the history of science. No student who takes a logic course is permitted to use a calculator during exams.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "No philosophy major is permitted to use a calculator during any exam" },
      { letter: "B", text: "Some students who take history of science courses cannot use calculators during exams" },
      { letter: "C", text: "All undergraduate philosophy majors are not permitted to use calculators during at least one exam" },
      { letter: "D", text: "Students who take logic courses never take history of science courses" },
      { letter: "E", text: "Calculator use is prohibited in all undergraduate courses" }
    ],
    correctAnswer: "C",
    explanation: "All philosophy majors must take logic, and logic students can't use calculators during exams. So all philosophy majors will have at least one exam (the logic exam) where calculators are prohibited.",
    wrongAnswerExplanations: {
      "A": "The restriction is for logic exams specifically, not all exams.",
      "B": "We know some philosophy majors take history of science, but they might not all be in those courses.",
      "D": "There's no prohibition on taking both courses.",
      "E": "The restriction applies to logic courses, not all courses."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-038",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A health insurance company reports that its customers who participate in the company's wellness program have, on average, 30% lower healthcare costs than customers who do not participate. The company concludes that the wellness program is effective at reducing healthcare costs.`,
    questionStem: "Which one of the following would it be most important to know in order to evaluate the company's conclusion?",
    answerChoices: [
      { letter: "A", text: "Whether the wellness program is expensive to administer" },
      { letter: "B", text: "Whether customers who choose to participate in the wellness program are generally healthier to begin with" },
      { letter: "C", text: "Whether other insurance companies offer similar wellness programs" },
      { letter: "D", text: "How long the wellness program has been in operation" },
      { letter: "E", text: "Whether customers are required to participate in the program" }
    ],
    correctAnswer: "B",
    explanation: "If healthier people self-select into wellness programs, lower costs could reflect pre-existing health differences rather than program effectiveness. This is crucial for evaluating the causal claim.",
    wrongAnswerExplanations: {
      "A": "Administrative costs affect cost-benefit but not whether the program causes health improvements.",
      "C": "Other companies' offerings don't help evaluate this program's effectiveness.",
      "D": "Duration is less critical than determining if the comparison is valid.",
      "E": "Voluntary vs. required participation matters less than who chooses to participate."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-039",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Educators have long believed that class size significantly affects student learning, with smaller classes producing better outcomes. However, a recent large-scale study found that students in classes of 30 performed just as well on standardized tests as students in classes of 15. This proves that class size is not an important factor in student achievement.`,
    questionStem: "Which one of the following, if true, most weakens the argument?",
    answerChoices: [
      { letter: "A", text: "Teachers in larger classes often have more years of teaching experience" },
      { letter: "B", text: "Standardized tests measure only a narrow range of skills and do not capture many important learning outcomes" },
      { letter: "C", text: "The study was conducted in well-funded suburban school districts" },
      { letter: "D", text: "Class sizes have been decreasing nationally over the past two decades" },
      { letter: "E", text: "Many educators believe standardized tests are the best measure of student achievement" }
    ],
    correctAnswer: "B",
    explanation: "If standardized tests don't measure all important outcomes, equal test scores don't prove equal learning. Smaller classes might benefit students in ways not captured by these tests.",
    wrongAnswerExplanations: {
      "A": "More experienced teachers in larger classes is a confounding factor but strengthens that class size doesn't matter.",
      "C": "Study context matters but doesn't directly challenge the class size conclusion.",
      "D": "Historical trends don't address this study's findings.",
      "E": "This supports using test scores as the measure, strengthening the argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-040",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Studies show that 90% of successful entrepreneurs credit hard work as the key to their success. Therefore, if you work hard enough, you will become a successful entrepreneur.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "fails to consider that many hard-working people do not become successful entrepreneurs" },
      { letter: "B", text: "assumes that success as an entrepreneur is entirely within an individual's control" },
      { letter: "C", text: "relies on self-reported data from entrepreneurs" },
      { letter: "D", text: "does not define what counts as 'successful'" },
      { letter: "E", text: "ignores the role of luck in entrepreneurial success" }
    ],
    correctAnswer: "A",
    explanation: "This is survivor bias/confusion of necessary and sufficient conditions. Successful entrepreneurs may credit hard work, but that doesn't mean everyone who works hard succeeds. Many hard workers fail.",
    wrongAnswerExplanations: {
      "B": "While related, the core flaw is the logical error about necessity vs. sufficiency.",
      "C": "Self-reporting might be unreliable, but that's not the main logical flaw.",
      "D": "Definition of success isn't the primary logical error.",
      "E": "Luck is a factor, but the core flaw is assuming hard work is sufficient."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-041",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `The ancient Romans built aqueducts that transported water over long distances using gravity alone, without any pumps. Some of these aqueducts are still functional today. Modern engineers argue that contemporary infrastructure projects could learn from Roman techniques to create more durable and sustainable water systems.`,
    questionStem: "Which one of the following, if true, most strengthens the engineers' argument?",
    answerChoices: [
      { letter: "A", text: "Roman aqueducts required large workforces to construct" },
      { letter: "B", text: "Modern water systems that incorporate Roman design principles require less energy and maintenance than conventional systems" },
      { letter: "C", text: "The Romans did not have access to modern construction materials" },
      { letter: "D", text: "Some Roman aqueducts collapsed during earthquakes" },
      { letter: "E", text: "The Romans also built roads that influenced modern highway design" }
    ],
    correctAnswer: "B",
    explanation: "Direct evidence that modern systems using Roman principles perform better (less energy, less maintenance) strongly supports the argument that we can learn from Roman techniques.",
    wrongAnswerExplanations: {
      "A": "Large workforce requirements might make the techniques impractical today.",
      "C": "Lack of modern materials doesn't support or weaken the sustainability argument.",
      "D": "Some failures might weaken rather than strengthen the argument.",
      "E": "Success in road design doesn't directly support water system improvements."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-042",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The town's historical society argues that the 150-year-old courthouse should be preserved rather than demolished for new development. They point out that the building has distinctive architectural features not found in modern construction and serves as a tangible connection to the town's past.`,
    questionStem: "The historical society's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "The courthouse is the oldest building in town" },
      { letter: "B", text: "Modern buildings cannot replicate the architectural features of the courthouse" },
      { letter: "C", text: "A tangible connection to the past has value that justifies preservation" },
      { letter: "D", text: "The cost of preservation is less than the cost of demolition and new construction" },
      { letter: "E", text: "Most town residents support preservation of the courthouse" }
    ],
    correctAnswer: "C",
    explanation: "The argument's force depends on the assumption that having tangible historical connections is valuable enough to justify preserving the building. Without this value assumption, the facts cited don't support preservation.",
    wrongAnswerExplanations: {
      "A": "Being the oldest isn't necessary for the preservation argument.",
      "B": "Replication difficulty is mentioned but isn't the core assumption.",
      "D": "The argument doesn't rely on cost comparisons.",
      "E": "Public support isn't the basis of the argument presented."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-043",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Economist A: Universal basic income would reduce poverty by providing everyone with a financial safety net. People would have money for basic necessities regardless of employment status.

Economist B: Universal basic income would increase poverty in the long run. It would reduce the incentive to work, leading to lower productivity and economic decline that would ultimately hurt everyone, especially the poor.`,
    questionStem: "The economists' statements provide the most support for the claim that they disagree about",
    answerChoices: [
      { letter: "A", text: "whether poverty exists in the current economic system" },
      { letter: "B", text: "whether providing a financial safety net would help reduce poverty" },
      { letter: "C", text: "the long-term effects of universal basic income on poverty rates" },
      { letter: "D", text: "whether everyone deserves access to basic necessities" },
      { letter: "E", text: "the importance of work in a healthy economy" }
    ],
    correctAnswer: "C",
    explanation: "Economist A says UBI would reduce poverty; Economist B says it would increase poverty in the long run. Their core disagreement is about UBI's long-term effects on poverty.",
    wrongAnswerExplanations: {
      "A": "Both seem to acknowledge poverty exists.",
      "B": "A discusses safety nets, but B's concern is about long-term effects, not whether safety nets help in principle.",
      "D": "Neither addresses whether people deserve basic necessities.",
      "E": "B mentions work incentives but A doesn't directly discuss work's importance."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-044",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A car manufacturer introduced a new fuel-efficient model that gets 50 miles per gallon, much better than its standard model at 30 miles per gallon. However, customers who bought the fuel-efficient model reported higher annual fuel costs than customers with the standard model.`,
    questionStem: "Which one of the following, if true, best explains this apparent paradox?",
    answerChoices: [
      { letter: "A", text: "The fuel-efficient model costs more to purchase than the standard model" },
      { letter: "B", text: "Customers who bought the fuel-efficient model drove significantly more miles because they felt less guilt about fuel consumption" },
      { letter: "C", text: "The fuel-efficient model requires premium gasoline while the standard model uses regular" },
      { letter: "D", text: "Insurance rates for the fuel-efficient model are higher than for the standard model" },
      { letter: "E", text: "The fuel-efficient model was purchased by environmentally conscious customers" }
    ],
    correctAnswer: "B",
    explanation: "If customers drove much more because the car was efficient, they could use more total fuel despite better mileage. This is the 'rebound effect' where efficiency gains are offset by increased usage.",
    wrongAnswerExplanations: {
      "A": "Purchase price is different from fuel costs.",
      "C": "Premium gas costs more per gallon but the efficiency would need to overcome only a ~30% price difference, not create higher costs.",
      "D": "Insurance isn't fuel cost.",
      "E": "Customer motivation doesn't explain higher fuel costs."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-045",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Some argue that artificial intelligence will never achieve true creativity because creativity requires consciousness, and machines cannot be conscious. However, this argument assumes we understand what consciousness is and can determine whether machines possess it. Since we lack a scientific definition of consciousness and cannot even confirm consciousness in other humans through direct observation, we cannot definitively claim that machines lack it.`,
    questionStem: "The argument proceeds by",
    answerChoices: [
      { letter: "A", text: "providing an alternative definition of creativity" },
      { letter: "B", text: "questioning whether the premises of an argument are known to be true" },
      { letter: "C", text: "showing that the conclusion contradicts established scientific findings" },
      { letter: "D", text: "demonstrating that machines have already achieved creative outputs" },
      { letter: "E", text: "arguing that consciousness is not necessary for creativity" }
    ],
    correctAnswer: "B",
    explanation: "The argument challenges whether we actually know the premises are true—specifically, whether we can determine that machines lack consciousness, since we don't have a clear definition or test for it.",
    wrongAnswerExplanations: {
      "A": "No alternative definition of creativity is offered.",
      "C": "No scientific findings are cited.",
      "D": "No examples of machine creativity are given.",
      "E": "The argument doesn't deny the creativity-consciousness link, just our ability to evaluate it."
    },
    difficulty: "hard"
  },
  {
    id: "lr5-046",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A software company discovered that an employee had been secretly downloading proprietary code to sell to a competitor. The company fired the employee and filed a civil lawsuit but did not report the crime to police. When asked, the company explained that a criminal investigation would have required revealing trade secrets in public court records.`,
    questionStem: "Which one of the following principles most helps to justify the company's decision not to report the crime?",
    answerChoices: [
      { letter: "A", text: "All crimes should be reported to law enforcement regardless of consequences" },
      { letter: "B", text: "Companies are justified in prioritizing protection of intellectual property over criminal prosecution" },
      { letter: "C", text: "Employees who steal from employers should face criminal charges" },
      { letter: "D", text: "Trade secrets should be protected under all circumstances" },
      { letter: "E", text: "Civil remedies are always preferable to criminal prosecution" }
    ],
    correctAnswer: "B",
    explanation: "This principle directly justifies the company's choice: protecting intellectual property can take priority over pursuing criminal charges when prosecution would compromise trade secrets.",
    wrongAnswerExplanations: {
      "A": "This would condemn the company's action.",
      "C": "This would support reporting to police.",
      "D": "'All circumstances' is too strong—the company did reveal secrets in civil court.",
      "E": "'Always' is too broad; the principle should be specific to IP protection situations."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-047",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The library has a policy that books may only be checked out if the borrower has a valid library card and no overdue materials. James attempted to check out a novel yesterday but was denied. James does have a valid library card.`,
    questionStem: "If the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "James had overdue materials yesterday" },
      { letter: "B", text: "The novel James wanted was not available for checkout" },
      { letter: "C", text: "James's library card was expired" },
      { letter: "D", text: "James violated the library's checkout policy" },
      { letter: "E", text: "Either James had overdue materials or some other condition prevented checkout" }
    ],
    correctAnswer: "E",
    explanation: "James has a valid card but was denied. Either he had overdue materials (violating a stated condition) or another unstated condition prevented checkout. We can't be certain which, but one of these must be true.",
    wrongAnswerExplanations: {
      "A": "We can't be certain this is the reason—there might be other conditions.",
      "B": "This is possible but not the only explanation.",
      "C": "The stimulus says James does have a valid card.",
      "D": "James didn't violate the policy; he was prevented from checking out."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-048",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Critics of space exploration argue that the billions spent on missions to Mars could be better used to solve problems here on Earth. But the technological innovations developed for space exploration have led to numerous practical applications, including improvements in medical imaging, water purification, and communications. The benefits of space exploration extend far beyond space itself.`,
    questionStem: "Which one of the following, if true, most weakens the response to the critics?",
    answerChoices: [
      { letter: "A", text: "Space exploration inspires young people to pursue careers in science" },
      { letter: "B", text: "Similar technological innovations could have been developed more efficiently through direct research funding" },
      { letter: "C", text: "Some space exploration technologies have military applications" },
      { letter: "D", text: "Private companies have begun participating in space exploration" },
      { letter: "E", text: "Not all space missions have yielded significant technological innovations" }
    ],
    correctAnswer: "B",
    explanation: "If direct research would produce the same innovations more efficiently, the argument that space exploration provides valuable spin-offs loses force—we could get those benefits cheaper without space missions.",
    wrongAnswerExplanations: {
      "A": "This strengthens the case for space exploration.",
      "C": "Military applications don't weaken the argument about practical benefits.",
      "D": "Private participation doesn't address the spin-off benefits argument.",
      "E": "Some missions lacking innovations doesn't disprove that many produce them."
    },
    difficulty: "hard"
  },
  {
    id: "lr5-049",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `A recent survey found that 80% of respondents who exercise regularly reported being happy, while only 50% of those who do not exercise regularly reported being happy. This proves that regular exercise causes happiness.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "relies on a sample that may not be representative of the general population" },
      { letter: "B", text: "fails to consider that happy people may be more likely to exercise rather than exercise causing happiness" },
      { letter: "C", text: "does not specify how much exercise is required to be considered 'regular'" },
      { letter: "D", text: "assumes that happiness can be measured objectively" },
      { letter: "E", text: "ignores other factors that might contribute to happiness" }
    ],
    correctAnswer: "B",
    explanation: "This is the correlation-causation fallacy with potential reverse causation. Happy people might be more motivated to exercise rather than exercise causing happiness.",
    wrongAnswerExplanations: {
      "A": "Sample representativeness is a concern but not the primary logical flaw.",
      "C": "Definition of 'regular' is secondary to the causal reasoning error.",
      "D": "Self-reported happiness is a standard measure; this isn't the main issue.",
      "E": "Other factors matter, but the primary flaw is the reverse causation possibility."
    },
    difficulty: "medium"
  },
  {
    id: "lr5-050",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Researchers found that cities with more green spaces have lower rates of depression among residents. They hypothesize that exposure to nature has direct psychological benefits that reduce depression. The researchers recommend that urban planners incorporate more parks and green areas into city designs.`,
    questionStem: "Which one of the following, if true, most strengthens the researchers' hypothesis?",
    answerChoices: [
      { letter: "A", text: "People who live near green spaces have higher incomes on average" },
      { letter: "B", text: "Studies show that even brief walks in nature reduce cortisol levels and improve mood" },
      { letter: "C", text: "Cities with more green spaces also tend to have better public transportation" },
      { letter: "D", text: "Depression rates have been increasing in highly urbanized areas" },
      { letter: "E", text: "Some people prefer urban environments without many green spaces" }
    ],
    correctAnswer: "B",
    explanation: "Direct evidence of a biological mechanism (cortisol reduction, mood improvement) connecting nature exposure to psychological benefits strongly supports the hypothesis that nature itself reduces depression.",
    wrongAnswerExplanations: {
      "A": "Income as a confounding variable would actually weaken the hypothesis.",
      "C": "Another confounding variable—transportation might explain lower depression.",
      "D": "Increasing depression in urban areas is consistent with but doesn't specifically support the nature hypothesis.",
      "E": "Preferences don't affect whether nature has psychological benefits."
    },
    difficulty: "medium"
  }
];
