import { Question } from "../lsat-types";

export const lrQuestionsSet10: Question[] = [
  {
    id: "lr-10-001",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Magazine editor: Our readership survey shows that 85% of respondents want more articles about fitness and nutrition. We should therefore devote most of our pages to these topics to satisfy our readers.`,
    questionStem: "The editor's reasoning is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that respondents to the survey are representative of all readers" },
      { letter: "B", text: "confuses the preferences of current readers with potential new readers" },
      { letter: "C", text: "ignores the possibility that some readers want coverage of multiple topics" },
      { letter: "D", text: "fails to consider that current content already includes fitness and nutrition" },
      { letter: "E", text: "overlooks the difference between wanting more coverage and wanting most coverage" },
    ],
    correctAnswer: "E",
    explanation: "Readers wanting 'more' articles on these topics doesn't mean they want these topics to dominate. The editor conflates increasing coverage with making it the majority of content.",
    wrongAnswerExplanations: {
      A: "While potentially relevant, the main flaw is the interpretation of 'more.'",
      B: "The argument is about current readers, so this isn't the primary issue.",
      C: "This is related but the specific flaw is the 'more' vs 'most' conflation.",
      D: "Current content levels don't address the logical flaw in interpretation."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-002",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Zoologist: The decline in the local wolf population is likely due to reduced prey availability. Over the past decade, the deer population in this region has decreased by 40% due to habitat loss from suburban development.`,
    questionStem: "Which one of the following, if true, most strengthens the zoologist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Wolves in this region prey primarily on deer and have few alternative food sources" },
      { letter: "B", text: "Wolf populations in other regions have also experienced declines" },
      { letter: "C", text: "Suburban development has increased human-wolf encounters" },
      { letter: "D", text: "The deer population decline began before the wolf population decline" },
      { letter: "E", text: "Wolves can travel long distances to find food" },
    ],
    correctAnswer: "A",
    explanation: "If wolves depend primarily on deer with few alternatives, then deer decline would directly impact wolves through food scarcity, strengthening the prey-reduction explanation.",
    wrongAnswerExplanations: {
      B: "Other regions' declines don't explain this region's causal mechanism.",
      C: "Human encounters suggest an alternative cause, not strengthening the prey argument.",
      D: "Temporal sequence is consistent with causation but doesn't establish the mechanism.",
      E: "If wolves can travel far for food, prey reduction locally would be less impactful."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-003",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `City council member: We should invest in expanding our public bus system rather than building a new light rail line. Buses are more flexible since routes can be adjusted easily, and the initial investment is much lower than for rail infrastructure.`,
    questionStem: "Which one of the following, if true, most seriously weakens the council member's argument?",
    answerChoices: [
      { letter: "A", text: "Light rail systems in other cities have been popular with commuters" },
      { letter: "B", text: "Bus systems require road infrastructure that also needs maintenance" },
      { letter: "C", text: "Over a 30-year period, light rail systems have lower total operating costs per passenger" },
      { letter: "D", text: "Some residents prefer traveling by bus rather than by rail" },
      { letter: "E", text: "The city already has a basic bus system in operation" },
    ],
    correctAnswer: "C",
    explanation: "The council member emphasizes lower initial investment for buses. If light rail has lower long-term costs per passenger, the initial savings are offset, weakening the economic argument for buses.",
    wrongAnswerExplanations: {
      A: "Popularity elsewhere doesn't directly address the flexibility and cost arguments.",
      B: "Road maintenance costs don't directly compare to rail costs.",
      D: "Some residents' preferences don't address the main arguments made.",
      E: "An existing bus system doesn't weaken the argument for expanding it."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-004",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Music teacher: Learning to play a musical instrument improves children's mathematical abilities. A study showed that students who took piano lessons performed better on math tests than students who didn't. Therefore, schools should offer instrumental music classes to improve math performance.`,
    questionStem: "The music teacher's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Piano is the best instrument for improving mathematical ability" },
      { letter: "B", text: "The students in the study who took piano lessons were not already better at math before the lessons" },
      { letter: "C", text: "Musical training is more effective than additional math instruction for improving math skills" },
      { letter: "D", text: "All students would be interested in taking music classes" },
      { letter: "E", text: "The study was conducted by qualified researchers" },
    ],
    correctAnswer: "B",
    explanation: "The argument assumes piano lessons caused better math performance. If students who chose piano were already better at math, the correlation wouldn't show causation.",
    wrongAnswerExplanations: {
      A: "The argument doesn't require piano to be the best, just that instruments help.",
      C: "The argument doesn't claim music is better than more math instruction.",
      D: "Universal interest isn't required to justify offering the classes.",
      E: "Researcher qualifications aren't necessary for the logical connection made."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-005",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All licensed physicians have completed medical school. Some people who have completed medical school choose not to practice medicine. Dr. Park is a licensed physician.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Dr. Park currently practices medicine" },
      { letter: "B", text: "Dr. Park chose to practice medicine" },
      { letter: "C", text: "Dr. Park completed medical school" },
      { letter: "D", text: "Dr. Park will always practice medicine" },
      { letter: "E", text: "Most people who complete medical school become licensed physicians" },
    ],
    correctAnswer: "C",
    explanation: "All licensed physicians completed medical school. Dr. Park is a licensed physician. Therefore, Dr. Park completed medical school. This follows logically and necessarily.",
    wrongAnswerExplanations: {
      A: "Being licensed doesn't guarantee currently practicing.",
      B: "We know Park is licensed but not whether they actively chose to practice.",
      D: "Future behavior cannot be determined from these statements.",
      E: "This isn't inferable from the given statements."
    },
    difficulty: "easy"
  },
  {
    id: "lr-10-006",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A telecommunications company found that customers who bundle internet, phone, and television services are less likely to cancel their service than customers who subscribe to just one service. However, the company spends significantly more on customer support for bundled customers, who call more frequently with technical issues.`,
    questionStem: "If all the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "The company profits more from single-service customers than bundled customers" },
      { letter: "B", text: "Technical issues are more common with bundled services" },
      { letter: "C", text: "Bundled customers require more customer support interaction than single-service customers" },
      { letter: "D", text: "Customer retention is the company's top priority" },
      { letter: "E", text: "Bundled services are more technologically complex than single services" },
    ],
    correctAnswer: "C",
    explanation: "The passage states bundled customers call more frequently. More calls mean more customer support interaction, so bundled customers require more support than single-service customers.",
    wrongAnswerExplanations: {
      A: "Profit depends on many factors not specified (pricing, support costs, etc.).",
      B: "More calls don't necessarily mean more issues; customers might just seek more help.",
      D: "Company priorities aren't discussed.",
      E: "Technical complexity isn't established; bundled customers might just have more services to call about."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-007",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `If a student misses more than five classes, they will fail the course. Kim has not failed the course. Therefore, Kim has not missed more than five classes.`,
    questionStem: "Which one of the following arguments has a pattern of reasoning most similar to that in the argument above?",
    answerChoices: [
      { letter: "A", text: "If a machine overheats, it will shut down automatically. This machine hasn't shut down. Therefore, this machine has not overheated." },
      { letter: "B", text: "If it rains, the picnic will be canceled. It rained. Therefore, the picnic was canceled." },
      { letter: "C", text: "If a plant doesn't get water, it will die. This plant is alive. Therefore, this plant has been getting water." },
      { letter: "D", text: "If a company is profitable, its stock price rises. Company X's stock price has risen. Therefore, Company X is profitable." },
      { letter: "E", text: "If an animal is a mammal, it is warm-blooded. Dogs are mammals. Therefore, dogs are warm-blooded." },
    ],
    correctAnswer: "A",
    explanation: "Both use contrapositive reasoning: If P then Q. Not Q. Therefore, not P. The original: If miss classes → fail. Not fail → not miss classes. A: If overheat → shut down. Not shut down → not overheated.",
    wrongAnswerExplanations: {
      B: "This affirms the consequent is not contrapositive.",
      C: "This is also contrapositive and could match, but uses negation in the premise differently.",
      D: "This affirms the consequent (invalid reasoning).",
      E: "This is a valid syllogism but not contrapositive reasoning."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-008",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Economist: Some argue that minimum wage increases lead to unemployment because businesses cannot afford to pay higher wages. But this ignores that higher wages increase consumer spending power, which can boost demand for goods and services, potentially creating more jobs. The relationship between minimum wage and employment is more complex than critics suggest.`,
    questionStem: "The economist responds to the critics' argument by",
    answerChoices: [
      { letter: "A", text: "presenting statistical evidence that contradicts the critics' claim" },
      { letter: "B", text: "identifying a factor that complicates the critics' simple analysis" },
      { letter: "C", text: "questioning the critics' understanding of basic economic concepts" },
      { letter: "D", text: "arguing that job losses from minimum wage increases are acceptable" },
      { letter: "E", text: "denying that businesses face any cost increases from wage hikes" },
    ],
    correctAnswer: "B",
    explanation: "The economist doesn't deny the critics' premise but points to an additional factor (increased consumer spending) that makes the analysis more complex than the simple unemployment argument.",
    wrongAnswerExplanations: {
      A: "No statistical evidence is presented.",
      C: "The economist doesn't question the critics' understanding, just their completeness.",
      D: "The economist doesn't concede job losses are acceptable.",
      E: "The economist doesn't deny cost increases, just identifies offsetting factors."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-009",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: An action is morally justified only if the person performing it has considered the consequences for all those who would be affected.

    Case: Manager Chen decided to restructure her department without consulting the employees who would be reassigned to different roles.`,
    questionStem: "The principle, if valid, most helps to justify which one of the following judgments about the case?",
    answerChoices: [
      { letter: "A", text: "Chen's action may not be morally justified because she didn't consider consequences for affected employees" },
      { letter: "B", text: "Chen's action is morally justified if the restructuring benefits the company" },
      { letter: "C", text: "Chen acted appropriately because managers have authority to restructure departments" },
      { letter: "D", text: "Chen should have waited for employees to approve the restructuring" },
      { letter: "E", text: "Chen's action is morally unjustified only if employees object to the restructuring" },
    ],
    correctAnswer: "A",
    explanation: "The principle requires considering consequences for all affected. Chen didn't consult affected employees, suggesting she may not have properly considered consequences for them. This makes her action potentially unjustified under the principle.",
    wrongAnswerExplanations: {
      B: "Company benefit doesn't satisfy the requirement to consider all affected individuals.",
      C: "Authority doesn't override the moral consideration requirement.",
      D: "The principle requires consideration, not approval.",
      E: "The principle doesn't make justification contingent on objections."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-010",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Despite significant improvements in automobile safety features over the past two decades, including airbags, antilock brakes, and electronic stability control, the overall rate of fatal car accidents per mile driven has remained relatively stable.`,
    questionStem: "Which one of the following, if true, most helps to explain why the accident fatality rate has remained stable despite safety improvements?",
    answerChoices: [
      { letter: "A", text: "Many older vehicles without modern safety features are still on the road" },
      { letter: "B", text: "Drivers who feel safer take more risks, offsetting the benefits of safety technology" },
      { letter: "C", text: "Automobile insurance rates have increased over the past two decades" },
      { letter: "D", text: "Some safety features require proper maintenance to remain effective" },
      { letter: "E", text: "Public awareness campaigns about safe driving have increased" },
    ],
    correctAnswer: "B",
    explanation: "If feeling safer leads to riskier driving, the behavioral change offsets the technological improvements. This 'risk compensation' explains stable fatality rates despite better safety features.",
    wrongAnswerExplanations: {
      A: "Older vehicles on the road would make rates worse, not explain stability.",
      C: "Insurance rates don't explain accident rates.",
      D: "Maintenance issues might reduce effectiveness but wouldn't keep rates exactly stable.",
      E: "More awareness campaigns would suggest rates should improve, deepening the paradox."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-011",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Nutritional supplement company: Our vitamin D supplement has been shown to reduce the risk of depression in adults. In a recent study, people who took our supplement daily for six months reported fewer symptoms of depression than at the start of the study.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the strength of the company's claim?",
    answerChoices: [
      { letter: "A", text: "How the supplement compares in price to other vitamin D supplements" },
      { letter: "B", text: "Whether a control group that didn't take the supplement showed similar improvement" },
      { letter: "C", text: "How vitamin D is processed by the body" },
      { letter: "D", text: "Whether the company has made similar claims about other products" },
      { letter: "E", text: "How many people participated in the study" },
    ],
    correctAnswer: "B",
    explanation: "Without a control group, the improvement could be due to placebo effect, natural recovery, or other factors. A control comparison is essential for evaluating causal claims.",
    wrongAnswerExplanations: {
      A: "Price doesn't affect whether the supplement works.",
      C: "Biological mechanisms don't directly evaluate this study's claims.",
      D: "Past claims don't evaluate this specific study.",
      E: "Sample size matters but less than having a proper control group."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-012",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Parent: Video games are harmful to children because they promote violent behavior. Just look at my neighbor's son—he plays violent video games for hours every day and recently got into a fight at school.`,
    questionStem: "The reasoning in the parent's argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "generalizes from a single case to a broad conclusion" },
      { letter: "B", text: "assumes that all video games contain violent content" },
      { letter: "C", text: "ignores the potential benefits of video games" },
      { letter: "D", text: "relies on evidence provided by an unreliable source" },
      { letter: "E", text: "confuses a necessary condition with a sufficient condition" },
    ],
    correctAnswer: "A",
    explanation: "The parent uses one child's behavior to support a general claim about video games and children. This anecdotal evidence doesn't establish a pattern or causal relationship.",
    wrongAnswerExplanations: {
      B: "The parent specifically mentions violent video games, not all games.",
      C: "While true, ignoring benefits isn't the main logical flaw here.",
      D: "The parent isn't citing an external source; this is personal observation.",
      E: "No necessary/sufficient conditions are confused here."
    },
    difficulty: "easy"
  },
  {
    id: "lr-10-013",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Political scientist: Voter turnout in local elections is significantly lower than in national elections. I believe this is primarily because local media provides far less coverage of local candidates and issues than national media provides for national races.`,
    questionStem: "Which one of the following, if true, most strengthens the political scientist's argument?",
    answerChoices: [
      { letter: "A", text: "Local elections often occur at different times than national elections" },
      { letter: "B", text: "Voters who report being informed about local candidates are more likely to vote in local elections" },
      { letter: "C", text: "National elections receive extensive coverage on social media platforms" },
      { letter: "D", text: "Some local governments have implemented vote-by-mail to increase turnout" },
      { letter: "E", text: "Political parties spend less money on local campaigns than on national campaigns" },
    ],
    correctAnswer: "B",
    explanation: "If informed voters are more likely to vote locally, and information comes from media coverage, then less coverage would indeed lead to lower turnout—directly supporting the causal claim.",
    wrongAnswerExplanations: {
      A: "Different timing is an alternative explanation, not support for the media explanation.",
      C: "National election coverage doesn't explain local election turnout.",
      D: "Vote-by-mail is irrelevant to the media coverage hypothesis.",
      E: "Campaign spending is a separate factor from media coverage."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-014",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Fitness trainer: High-intensity interval training (HIIT) is the most time-efficient way to improve cardiovascular fitness. Studies show that 20 minutes of HIIT provides the same cardiovascular benefits as 60 minutes of moderate steady-state cardio.`,
    questionStem: "Which one of the following, if true, most seriously weakens the fitness trainer's claim?",
    answerChoices: [
      { letter: "A", text: "HIIT workouts can be performed without any special equipment" },
      { letter: "B", text: "Some people find HIIT workouts more enjoyable than steady-state cardio" },
      { letter: "C", text: "HIIT requires significantly longer recovery periods between sessions than moderate cardio" },
      { letter: "D", text: "Professional athletes often include both HIIT and steady-state cardio in their training" },
      { letter: "E", text: "The cardiovascular benefits of exercise accumulate over time with consistent practice" },
    ],
    correctAnswer: "C",
    explanation: "If HIIT requires much longer recovery time, a person can do fewer HIIT sessions per week than moderate cardio sessions. This could make HIIT less time-efficient overall when considering total weekly training.",
    wrongAnswerExplanations: {
      A: "Equipment requirements don't address time efficiency.",
      B: "Enjoyment doesn't affect time efficiency calculations.",
      D: "What athletes do doesn't address the comparative efficiency claim.",
      E: "Accumulation over time doesn't address the per-session efficiency comparison."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-015",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Art gallery owner: Original artworks are more valuable investments than prints because they are unique. Since there is only one original of each artwork, demand will always exceed supply, ensuring that prices increase over time.`,
    questionStem: "The gallery owner's argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Prints are never valuable as investments" },
      { letter: "B", text: "The demand for original artworks will remain constant or increase" },
      { letter: "C", text: "All original artworks are equally valuable" },
      { letter: "D", text: "Collectors prefer owning original artworks to owning prints" },
      { letter: "E", text: "Original artworks are always more aesthetically pleasing than prints" },
    ],
    correctAnswer: "B",
    explanation: "The argument claims demand exceeds supply for originals. If demand decreased significantly over time, prices wouldn't necessarily increase even with limited supply.",
    wrongAnswerExplanations: {
      A: "The argument compares relative value, not absolute value of prints.",
      C: "The argument doesn't require all originals to be equally valuable.",
      D: "While implied, this isn't necessary for the investment value argument.",
      E: "Aesthetic quality isn't discussed or required for the investment claim."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-016",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `No one who regularly practices meditation experiences chronic stress. Everyone who experiences chronic stress has difficulty concentrating. Therefore, no one who regularly practices meditation has difficulty concentrating due to stress.`,
    questionStem: "The conclusion of the argument follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "Meditation is the most effective way to reduce stress" },
      { letter: "B", text: "Difficulty concentrating is always caused by stress" },
      { letter: "C", text: "Everyone who has difficulty concentrating experiences chronic stress" },
      { letter: "D", text: "Regular meditation practitioners never experience any form of stress" },
      { letter: "E", text: "The conclusion follows logically from the premises as stated" },
    ],
    correctAnswer: "E",
    explanation: "The argument is actually valid as stated: Meditators don't have chronic stress. Chronic stress causes concentration difficulty. So meditators don't have stress-caused concentration difficulty.",
    wrongAnswerExplanations: {
      A: "Comparative effectiveness isn't needed.",
      B: "This is too strong; we only need the connection through stress.",
      C: "This reverses the conditional relationship.",
      D: "The argument only addresses chronic stress, not all stress."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-017",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A pharmaceutical company tested a new pain reliever against a placebo. In the trial, 60% of patients receiving the drug reported pain reduction, while 40% of patients receiving the placebo also reported pain reduction. The company concluded that the drug was effective because more patients in the treatment group experienced relief.`,
    questionStem: "If the information above is accurate, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "The drug is 50% more effective than the placebo" },
      { letter: "B", text: "The drug provides no real benefit beyond the placebo effect" },
      { letter: "C", text: "Some patients who received the drug may have improved due to the placebo effect rather than the drug itself" },
      { letter: "D", text: "The drug should be approved for general use" },
      { letter: "E", text: "60% of all patients would experience pain reduction from the drug" },
    ],
    correctAnswer: "C",
    explanation: "Since 40% of placebo patients improved, some improvement is due to placebo effect. Among the 60% who improved with the drug, some portion likely would have improved anyway from placebo effect.",
    wrongAnswerExplanations: {
      A: "This specific percentage comparison isn't properly calculable from the data given.",
      B: "The 20% difference suggests some real benefit beyond placebo.",
      D: "Approval decisions require more than this trial data.",
      E: "Trial results may not generalize to all patients."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-018",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `All of the paintings in this gallery are originals. Some originals are very expensive. Therefore, some paintings in this gallery are very expensive.`,
    questionStem: "The flawed pattern of reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "All members of this club are athletes. Some athletes are professionals. Therefore, some members of this club are professionals." },
      { letter: "B", text: "All roses are flowers. All flowers need water. Therefore, all roses need water." },
      { letter: "C", text: "Some students are hardworking. All hardworking people succeed. Therefore, some students succeed." },
      { letter: "D", text: "No fish are mammals. Some mammals are endangered. Therefore, no fish are endangered." },
      { letter: "E", text: "All lawyers passed the bar exam. Some who passed the bar exam are judges. Therefore, some lawyers are judges." },
    ],
    correctAnswer: "A",
    explanation: "Both arguments have the invalid form: All A are B. Some B are C. Therefore, some A are C. The 'some B' that are C might not overlap with the A that are B.",
    wrongAnswerExplanations: {
      B: "This is a valid syllogism (All A are B, All B are C, so All A are C).",
      C: "This has a different structure starting with 'some.'",
      D: "This involves negation and has a different logical form.",
      E: "This is essentially the same invalid pattern as the original and A."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-019",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Architect: Critics say my building designs are too expensive to construct. However, when you factor in the reduced maintenance costs over the building's 50-year lifespan and the higher rental income from premium design features, my buildings actually provide better value than conventional designs.`,
    questionStem: "The architect responds to the critics' objection by",
    answerChoices: [
      { letter: "A", text: "rejecting the premise that construction costs are higher" },
      { letter: "B", text: "arguing that cost should be evaluated over a longer time frame" },
      { letter: "C", text: "appealing to the opinions of other architects" },
      { letter: "D", text: "claiming that critics misunderstand architectural principles" },
      { letter: "E", text: "conceding that the buildings are too expensive" },
    ],
    correctAnswer: "B",
    explanation: "The architect doesn't deny higher construction costs but reframes the evaluation by considering lifetime costs and income, arguing for a longer time frame that shows better overall value.",
    wrongAnswerExplanations: {
      A: "The architect doesn't deny higher construction costs.",
      C: "No other architects' opinions are mentioned.",
      D: "The architect doesn't attack critics' understanding.",
      E: "The architect doesn't concede the buildings are too expensive overall."
    },
    difficulty: "easy"
  },
  {
    id: "lr-10-020",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: Employers should accommodate employees' religious practices unless doing so would impose an undue hardship on the business.

    Case: An employee requests to leave work two hours early every Friday for religious services. The employer refuses because the employee's absence during that time would require hiring a temporary replacement.`,
    questionStem: "The principle most helps to justify the employer's decision if which one of the following is true?",
    answerChoices: [
      { letter: "A", text: "Other employees have not made similar religious accommodation requests" },
      { letter: "B", text: "The employee could attend religious services at a different time" },
      { letter: "C", text: "Hiring a temporary replacement would be significantly costly and disruptive to operations" },
      { letter: "D", text: "The employer has previously accommodated other religious requests" },
      { letter: "E", text: "The employee is willing to make up the missed hours on other days" },
    ],
    correctAnswer: "C",
    explanation: "The principle allows refusal for 'undue hardship.' If replacement is significantly costly and disruptive, this establishes undue hardship, justifying the refusal under the principle.",
    wrongAnswerExplanations: {
      A: "Other employees' requests don't affect whether this one creates hardship.",
      B: "Alternative times don't establish undue hardship on the business.",
      D: "Past accommodations don't justify refusing this one.",
      E: "Willingness to make up hours suggests accommodation might be possible, weakening the refusal."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-021",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Consumer spending on home security systems has increased by 40% over the past five years. Yet during this same period, the number of home burglaries has also increased by 15%.`,
    questionStem: "Which one of the following, if true, most helps to explain the situation described above?",
    answerChoices: [
      { letter: "A", text: "Home security systems have become more affordable due to increased competition" },
      { letter: "B", text: "Most security system purchases are made by homeowners in previously safe neighborhoods" },
      { letter: "C", text: "Burglars have developed techniques to bypass many home security systems" },
      { letter: "D", text: "The increase in spending reflects purchases of more expensive systems rather than more systems" },
      { letter: "E", text: "Insurance companies offer discounts for homes with security systems" },
    ],
    correctAnswer: "B",
    explanation: "If security systems are bought mainly in safe neighborhoods, they wouldn't reduce burglaries in high-crime areas where burglaries are actually increasing. This explains why overall burglaries rise despite more security spending.",
    wrongAnswerExplanations: {
      A: "Affordability might increase adoption, deepening the paradox.",
      C: "This partially explains but doesn't account for why spending would still increase.",
      D: "This explains spending increases but not why burglaries would also increase.",
      E: "Insurance discounts don't explain the burglary trend."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-022",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Publisher: E-books have lower production and distribution costs than printed books. Therefore, publishers could increase profits by transitioning entirely to e-book publishing.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the publisher's reasoning?",
    answerChoices: [
      { letter: "A", text: "What percentage of current book sales are e-books versus printed books" },
      { letter: "B", text: "Whether authors prefer their work published in print or electronic format" },
      { letter: "C", text: "Whether readers are willing to pay the same price for e-books as for printed books" },
      { letter: "D", text: "How much investment would be needed to transition to e-book-only publishing" },
      { letter: "E", text: "Whether e-book technology has improved over the past decade" },
    ],
    correctAnswer: "C",
    explanation: "Lower costs increase profit only if revenue remains similar. If readers pay much less for e-books, the cost savings might be offset by lower revenue, undermining the profit claim.",
    wrongAnswerExplanations: {
      A: "Current sales mix shows the market, not whether transition would be profitable.",
      B: "Author preferences don't directly affect profitability calculations.",
      D: "Transition costs are one-time and don't address ongoing profitability comparison.",
      E: "Technological improvement doesn't address the profit calculation."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-023",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Political commentator: The senator claims to support environmental protection, but she owns two large SUVs. No one who truly cares about the environment would drive such fuel-inefficient vehicles. Therefore, her environmental policy positions must be insincere.`,
    questionStem: "The reasoning in the political commentator's argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "attacks the senator's character instead of addressing her policy positions" },
      { letter: "B", text: "assumes that personal behavior perfectly reflects political beliefs" },
      { letter: "C", text: "ignores the possibility that the senator has other environmentally friendly habits" },
      { letter: "D", text: "fails to consider why the senator might need large vehicles" },
      { letter: "E", text: "generalizes from the senator's case to all politicians" },
    ],
    correctAnswer: "A",
    explanation: "The commentator uses the senator's personal vehicle choice to dismiss her policy positions. This is ad hominem reasoning—attacking the person rather than evaluating the policies on their merits.",
    wrongAnswerExplanations: {
      B: "While related, the main flaw is using personal attacks to discredit policy positions.",
      C: "Other habits don't address the logical flaw in the argument structure.",
      D: "Vehicle necessity doesn't address the ad hominem nature of the argument.",
      E: "No generalization to other politicians is made."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-024",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Archaeologist: The obsidian tools found at this coastal site originated from a volcanic region 200 miles inland. This suggests that prehistoric peoples in this area had established trade networks extending far into the interior.`,
    questionStem: "Which one of the following, if true, most strengthens the archaeologist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Obsidian was highly valued for making sharp cutting tools" },
      { letter: "B", text: "The coastal site shows evidence of permanent settlement rather than temporary camps" },
      { letter: "C", text: "No obsidian sources exist within 150 miles of the coastal site" },
      { letter: "D", text: "Similar obsidian tools have been found at multiple coastal sites" },
      { letter: "E", text: "Other artifacts at the site were made from local materials" },
    ],
    correctAnswer: "C",
    explanation: "If there's no nearby obsidian, the tools must have traveled the full 200 miles from the inland source, strengthening the conclusion about long-distance trade networks.",
    wrongAnswerExplanations: {
      A: "Value explains desirability but not the trade network conclusion.",
      B: "Permanent settlement doesn't directly strengthen the trade network claim.",
      D: "Multiple sites having similar tools could suggest trade but doesn't specifically strengthen this argument.",
      E: "Local materials for other artifacts might weaken the trade argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-025",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Corporate trainer: Team-building retreats improve workplace collaboration. After our company's retreat last month, the marketing and sales departments began working together on a joint project that has been very successful.`,
    questionStem: "Which one of the following, if true, most weakens the corporate trainer's argument?",
    answerChoices: [
      { letter: "A", text: "The joint project was mandated by senior management before the retreat was planned" },
      { letter: "B", text: "Team-building retreats can be expensive for companies to organize" },
      { letter: "C", text: "Some employees were unable to attend the retreat due to scheduling conflicts" },
      { letter: "D", text: "The marketing department had collaborated successfully with other departments previously" },
      { letter: "E", text: "Similar retreats at other companies have had mixed results" },
    ],
    correctAnswer: "A",
    explanation: "If the joint project was already mandated before the retreat, the collaboration would have happened anyway. This undermines the claim that the retreat caused the improved collaboration.",
    wrongAnswerExplanations: {
      B: "Cost doesn't address whether retreats improve collaboration.",
      C: "Partial attendance doesn't explain away the observed improvement.",
      D: "Past collaboration doesn't explain this specific improvement after the retreat.",
      E: "Mixed results elsewhere don't address this specific case."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-026",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Environmentalist: Reusable shopping bags are better for the environment than disposable plastic bags. Therefore, stores should stop providing plastic bags and encourage customers to bring reusable bags instead.`,
    questionStem: "The environmentalist's argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "All customers are willing to switch to reusable bags" },
      { letter: "B", text: "Reusable bags are more convenient than plastic bags" },
      { letter: "C", text: "The environmental cost of producing reusable bags is less than the cumulative cost of the plastic bags they replace" },
      { letter: "D", text: "Stores would save money by not providing plastic bags" },
      { letter: "E", text: "Plastic bags cannot be recycled effectively" },
    ],
    correctAnswer: "C",
    explanation: "For reusable bags to be environmentally better, their production impact must be offset by replacing many plastic bags. If reusable bags have high production costs and aren't reused enough, they could be worse.",
    wrongAnswerExplanations: {
      A: "Universal willingness isn't required for the policy recommendation.",
      B: "Convenience isn't relevant to the environmental argument.",
      D: "Store savings aren't part of the environmental argument.",
      E: "Recyclability of plastic bags isn't necessary for the comparison made."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-027",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All championship-winning teams have excellent coaching. The Riverside Eagles have excellent coaching. Therefore, the Riverside Eagles will win the championship.`,
    questionStem: "The conclusion of the argument follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "The Riverside Eagles have the best coaching in the league" },
      { letter: "B", text: "Excellent coaching is sufficient for winning a championship" },
      { letter: "C", text: "No team without excellent coaching has ever won a championship" },
      { letter: "D", text: "The Riverside Eagles have other qualities of championship teams" },
      { letter: "E", text: "The conclusion does not follow even with additional assumptions" },
    ],
    correctAnswer: "B",
    explanation: "The argument commits the fallacy of affirming the consequent. For the conclusion to follow, we'd need: If excellent coaching, then championship win. Then Eagles have excellent coaching would guarantee a championship.",
    wrongAnswerExplanations: {
      A: "Having the best isn't sufficient if excellent coaching doesn't guarantee winning.",
      C: "This restates the original premise in contrapositive form.",
      D: "Other qualities aren't specified as sufficient.",
      E: "The conclusion can follow if excellent coaching is sufficient for winning."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-028",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A study found that employees who have plants in their offices report higher job satisfaction than those who don't. The study also found that employees with plants in their offices tend to be those who have been with the company longer. Senior employees are generally given more autonomy in decorating their workspaces.`,
    questionStem: "If the statements above are true, which one of the following is most strongly supported?",
    answerChoices: [
      { letter: "A", text: "Plants directly cause increased job satisfaction" },
      { letter: "B", text: "Newer employees would have higher job satisfaction if they had plants in their offices" },
      { letter: "C", text: "The correlation between plants and satisfaction might be explained by factors related to job tenure" },
      { letter: "D", text: "All senior employees have plants in their offices" },
      { letter: "E", text: "The company should provide plants to all employees" },
    ],
    correctAnswer: "C",
    explanation: "The study shows correlation between plants and satisfaction, but also that plant-havers are senior employees. Senior employees might be more satisfied for other reasons (autonomy, experience, etc.), not necessarily the plants.",
    wrongAnswerExplanations: {
      A: "The data doesn't establish direct causation.",
      B: "We can't predict outcomes for newer employees from this data.",
      D: "The passage says senior employees 'tend to' have plants, not all do.",
      E: "Policy recommendations aren't supported by correlation data."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-029",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Professor Quinn: Great literature should challenge readers with complex themes and innovative narrative techniques. Works that simply entertain without intellectual stimulation fail to qualify as great literature.

    Professor Torres: Literature achieves greatness by deeply connecting with readers' emotions and experiences. Many beloved classics succeed through compelling storytelling rather than experimental techniques.`,
    questionStem: "The main point at issue between Professor Quinn and Professor Torres is",
    answerChoices: [
      { letter: "A", text: "whether experimental narrative techniques are effective" },
      { letter: "B", text: "whether entertainment value is relevant to literary greatness" },
      { letter: "C", text: "whether great literature must include intellectual complexity" },
      { letter: "D", text: "whether classics are superior to contemporary works" },
      { letter: "E", text: "whether reader response determines literary quality" },
    ],
    correctAnswer: "C",
    explanation: "Quinn argues great literature requires complex themes and innovative techniques (intellectual stimulation). Torres argues greatness can come from emotional connection and compelling storytelling without experimental techniques. They disagree about whether intellectual complexity is necessary.",
    wrongAnswerExplanations: {
      A: "Effectiveness of techniques isn't the focus of disagreement.",
      B: "Entertainment value isn't the core issue; intellectual requirement is.",
      D: "Neither discusses classics vs. contemporary works.",
      E: "Reader response is implied but not the explicit point of disagreement."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-030",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Health blogger: Natural remedies are safer than pharmaceutical drugs because they come from plants and have been used for centuries. Pharmaceutical drugs, being synthetic, are more likely to cause harmful side effects.`,
    questionStem: "The reasoning in the health blogger's argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that longevity of use guarantees safety" },
      { letter: "B", text: "provides no evidence comparing actual side effect rates" },
      { letter: "C", text: "appeals to nature as evidence of safety without justification" },
      { letter: "D", text: "ignores the possibility that some natural substances are harmful" },
      { letter: "E", text: "all of the above flaws are present in the argument" },
    ],
    correctAnswer: "E",
    explanation: "The argument commits multiple fallacies: appeal to tradition (centuries of use), appeal to nature (natural = safe), and lack of evidence (no comparative data). All listed flaws apply.",
    wrongAnswerExplanations: {
      A: "This is one flaw, but not the only one.",
      B: "This is one flaw, but not the only one.",
      C: "This is one flaw, but not the only one.",
      D: "This is one flaw, but not the only one."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-031",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Ecologist: The reintroduction of wolves to Yellowstone National Park has led to a cascade of positive ecological effects. Since wolves returned, elk populations have become more mobile, allowing vegetation along streams to recover, which has stabilized riverbanks and improved habitats for fish and birds.`,
    questionStem: "Which one of the following, if true, most strengthens the ecologist's argument?",
    answerChoices: [
      { letter: "A", text: "Wolves were present in Yellowstone before being exterminated in the early 20th century" },
      { letter: "B", text: "The vegetation recovery began within two years of wolf reintroduction, before other management changes" },
      { letter: "C", text: "Wolves have been successfully reintroduced to other national parks as well" },
      { letter: "D", text: "Elk populations in areas without wolves have remained relatively stable" },
      { letter: "E", text: "Some visitors to Yellowstone have observed wolves hunting elk" },
    ],
    correctAnswer: "B",
    explanation: "If vegetation recovery began shortly after wolf reintroduction and before other changes, this supports the causal claim that wolves caused the cascade of effects.",
    wrongAnswerExplanations: {
      A: "Historical presence doesn't strengthen the causal claim about current effects.",
      C: "Success elsewhere doesn't strengthen the Yellowstone-specific argument.",
      D: "Stable elk elsewhere doesn't directly support the vegetation-riverbank-fish-bird causal chain.",
      E: "Observation of hunting confirms wolf presence but not the ecological cascade."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-032",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Financial advisor: Investing in index funds is the best strategy for most individual investors. Index funds have outperformed the majority of actively managed funds over the past 20 years while charging much lower fees.`,
    questionStem: "Which one of the following, if true, most seriously weakens the financial advisor's recommendation?",
    answerChoices: [
      { letter: "A", text: "Some actively managed funds have consistently outperformed index funds" },
      { letter: "B", text: "Index fund popularity has grown significantly in recent years" },
      { letter: "C", text: "Past performance of investments does not guarantee future results" },
      { letter: "D", text: "Index funds are designed to match market performance, not exceed it" },
      { letter: "E", text: "Financial advisors often earn commissions from actively managed funds" },
    ],
    correctAnswer: "C",
    explanation: "The recommendation is based entirely on past 20-year performance. If past performance doesn't predict future results, the historical data doesn't support the recommendation for future investing.",
    wrongAnswerExplanations: {
      A: "Some exceptions don't undermine the 'majority' comparison.",
      B: "Popularity growth doesn't address whether the strategy is best.",
      D: "Matching the market has been enough to beat most active funds.",
      E: "Advisor incentives don't address whether index funds are actually better."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-033",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Criminologist: The city should hire more police officers because increased police presence deters crime. Studies have shown that neighborhoods with more visible police patrols have lower crime rates.`,
    questionStem: "The criminologist's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Crime rates are the only measure of public safety" },
      { letter: "B", text: "Hiring more police officers will result in more visible police patrols" },
      { letter: "C", text: "Police patrols are more effective than other crime prevention methods" },
      { letter: "D", text: "All neighborhoods in the city have equal crime rates" },
      { letter: "E", text: "The studies were conducted in cities similar to this one" },
    ],
    correctAnswer: "B",
    explanation: "The argument connects hiring more officers to deterrence through visible patrols. This assumes that hiring more officers will actually result in increased patrol visibility, not just administrative staff.",
    wrongAnswerExplanations: {
      A: "The argument doesn't require crime to be the only safety measure.",
      C: "The argument doesn't claim patrols are better than all alternatives.",
      D: "Equal crime rates aren't assumed or necessary.",
      E: "While relevant to generalizability, this isn't strictly necessary for the logic."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-034",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Only licensed electricians can perform permitted electrical work. Any work that affects a building's main electrical panel requires a permit. Jorge replaced a circuit breaker in his building's main panel.`,
    questionStem: "Which one of the following can be properly concluded from the statements above?",
    answerChoices: [
      { letter: "A", text: "Jorge is a licensed electrician" },
      { letter: "B", text: "Jorge performed the work illegally" },
      { letter: "C", text: "Jorge should have obtained a permit for the work" },
      { letter: "D", text: "Jorge's work affected the building's electrical system" },
      { letter: "E", text: "Either Jorge is licensed or he performed the work without proper authorization" },
    ],
    correctAnswer: "E",
    explanation: "Jorge's work on the main panel requires a permit. Permitted work requires a licensed electrician. So Jorge either is licensed (authorized) or did permitted work without being licensed (unauthorized).",
    wrongAnswerExplanations: {
      A: "We can't conclude Jorge is licensed; he might have worked without authorization.",
      B: "We can't conclude illegality without knowing Jorge's license status.",
      C: "The work required a permit but we don't know if one was obtained.",
      D: "This is too vague and already implied by working on the panel."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-035",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A city's public transportation system offers both monthly passes and per-ride tickets. Monthly pass holders take an average of 45 rides per month, while per-ride ticket purchasers average 12 rides per month. The monthly pass costs $90, while individual rides cost $3 each.`,
    questionStem: "If the information above is true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Monthly pass holders save money compared to buying per-ride tickets" },
      { letter: "B", text: "The transportation system makes more money from per-ride ticket purchasers" },
      { letter: "C", text: "Per-ride ticket purchasers would save money by buying monthly passes" },
      { letter: "D", text: "Pass holders pay less per ride on average than per-ride ticket purchasers" },
      { letter: "E", text: "Most public transportation users buy monthly passes" },
    ],
    correctAnswer: "D",
    explanation: "Pass holders: $90 ÷ 45 rides = $2 per ride. Per-ride purchasers: $3 per ride. Pass holders definitively pay less per ride on average.",
    wrongAnswerExplanations: {
      A: "At 45 rides, pass holders pay $90 vs. $135 for tickets—this is true, but the question asks what MUST be true from the data.",
      B: "Revenue depends on number of each type of customer, not given.",
      C: "At only 12 rides, per-ride purchasers pay $36, less than $90 pass.",
      E: "The proportion of each type isn't given."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-036",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `The city council will approve the new park only if the environmental review is favorable. The environmental review will be favorable only if the proposed site doesn't contain protected wetlands. The proposed site does contain protected wetlands.`,
    questionStem: "Which one of the following arguments is most similar in its logical structure to the argument above?",
    answerChoices: [
      { letter: "A", text: "The contract will be signed only if both parties agree to the terms. Both parties will agree only if the price is reduced. The price will not be reduced. Therefore, the contract will not be signed." },
      { letter: "B", text: "The experiment will succeed if the hypothesis is correct. The hypothesis is correct. Therefore, the experiment will succeed." },
      { letter: "C", text: "All birds can fly. Penguins are birds. Therefore, penguins can fly." },
      { letter: "D", text: "The train will be on time unless there's bad weather. There's bad weather. Therefore, the train won't be on time." },
      { letter: "E", text: "If it rains, the game will be canceled. The game was not canceled. Therefore, it did not rain." },
    ],
    correctAnswer: "A",
    explanation: "Both use a chain of necessary conditions that fails: A only if B, B only if C, not C, therefore not A. The original: Approve only if favorable review, favorable only if no wetlands, there are wetlands → no approval.",
    wrongAnswerExplanations: {
      B: "This affirms the antecedent with a sufficient condition, different structure.",
      C: "This is a simple syllogism with a false premise.",
      D: "This uses 'unless' which has different logical structure.",
      E: "This is contrapositive reasoning, not a chain of necessary conditions."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-037",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Defense attorney: The prosecution claims my client was at the crime scene because his fingerprints were found there. But my client visited that location many times in the weeks before the crime as part of his job. The fingerprints prove nothing about his presence during the crime itself.`,
    questionStem: "The defense attorney counters the prosecution's argument by",
    answerChoices: [
      { letter: "A", text: "questioning the reliability of fingerprint evidence" },
      { letter: "B", text: "providing an alternative explanation for the evidence" },
      { letter: "C", text: "attacking the credibility of the prosecution's witnesses" },
      { letter: "D", text: "arguing that fingerprint evidence should not be admissible" },
      { letter: "E", text: "denying that the fingerprints belong to the defendant" },
    ],
    correctAnswer: "B",
    explanation: "The attorney doesn't deny the fingerprints are there or that they're the client's. Instead, he provides an innocent explanation—the client was there for work before the crime—to counter the incriminating interpretation.",
    wrongAnswerExplanations: {
      A: "The attorney doesn't question fingerprint reliability.",
      C: "No witnesses are mentioned or attacked.",
      D: "The attorney doesn't challenge admissibility.",
      E: "The attorney doesn't deny the fingerprints are the client's."
    },
    difficulty: "easy"
  },
  {
    id: "lr-10-038",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: A professional has an obligation to disclose potential conflicts of interest to clients before providing services.

    Case: Dr. Hernandez, a psychiatrist, recommended that her patient try a new medication. Dr. Hernandez did not mention that she receives consulting fees from the company that manufactures the medication.`,
    questionStem: "The principle, if valid, most strongly supports which one of the following judgments?",
    answerChoices: [
      { letter: "A", text: "Dr. Hernandez should not have recommended the medication" },
      { letter: "B", text: "Dr. Hernandez failed to meet her professional obligation" },
      { letter: "C", text: "The medication is unlikely to help the patient" },
      { letter: "D", text: "Dr. Hernandez's recommendation was influenced by the consulting fees" },
      { letter: "E", text: "Patients should always seek second opinions about medication" },
    ],
    correctAnswer: "B",
    explanation: "The consulting fees from the medication manufacturer create a potential conflict of interest. The principle requires disclosure before providing services (the recommendation). Dr. Hernandez didn't disclose, so she failed her obligation.",
    wrongAnswerExplanations: {
      A: "The principle requires disclosure, not avoidance of recommendations.",
      C: "The medication's effectiveness isn't addressed by the principle.",
      D: "The principle doesn't address whether fees influenced her; just that they should be disclosed.",
      E: "Second opinions aren't mentioned in the principle."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-039",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Restaurant owners consistently report that labor costs are their biggest expense and that minimum wage increases hurt their profitability. Yet economic studies of minimum wage increases show that restaurant industry employment and the number of restaurants have not declined in regions that raised their minimum wages.`,
    questionStem: "Which one of the following, if true, most helps to reconcile the restaurant owners' claims with the economic studies?",
    answerChoices: [
      { letter: "A", text: "Restaurants in higher minimum wage areas have reduced employee hours while maintaining staffing levels" },
      { letter: "B", text: "Some restaurants have offset wage increases by raising menu prices" },
      { letter: "C", text: "Restaurant owners tend to overestimate the impact of labor costs on their operations" },
      { letter: "D", text: "Minimum wage increases have been phased in gradually in most regions" },
      { letter: "E", text: "Customer demand for restaurant dining has increased in recent years" },
    ],
    correctAnswer: "B",
    explanation: "If restaurants raise prices to offset wage costs, they can remain profitable and stay in business. This reconciles 'wage increases hurt profitability' with 'employment and restaurant numbers haven't declined'—they adapted.",
    wrongAnswerExplanations: {
      A: "This suggests employment might decline through reduced hours, not reconciling the data.",
      C: "This contradicts owner claims rather than reconciling both sources.",
      D: "Gradual phasing explains adjustment but not the reconciliation of claims.",
      E: "Increased demand might help but doesn't specifically reconcile the labor cost claims."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-040",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `School administrator: Our new literacy program has been a success. Reading scores have improved by 15% since we implemented the program two years ago.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the administrator's claim?",
    answerChoices: [
      { letter: "A", text: "How much the program cost to implement" },
      { letter: "B", text: "Whether reading scores improved by similar amounts at schools without the program" },
      { letter: "C", text: "What specific methods the literacy program uses" },
      { letter: "D", text: "Whether teachers support the program" },
      { letter: "E", text: "How reading scores compare to math scores" },
    ],
    correctAnswer: "B",
    explanation: "If schools without the program also saw 15% improvement, the gains might be due to other factors (curriculum changes, demographic shifts, etc.) rather than the specific program. A comparison group is needed to evaluate causation.",
    wrongAnswerExplanations: {
      A: "Cost is relevant to value but not to whether the program caused improvement.",
      C: "Methods are interesting but don't help evaluate whether the program caused the improvement.",
      D: "Teacher support doesn't evaluate the causal claim.",
      E: "Math score comparison doesn't address whether the literacy program caused reading improvement."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-041",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Journalist: The mayor's proposal to reduce the city budget by 10% would be disastrous. The last time a mayor cut the budget significantly, public services deteriorated and crime increased. We cannot let history repeat itself.`,
    questionStem: "The reasoning in the journalist's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes that any budget cut will have the same effects as previous cuts" },
      { letter: "B", text: "fails to consider that the current fiscal situation may be different" },
      { letter: "C", text: "ignores the possibility that the previous mayor made other policy errors" },
      { letter: "D", text: "relies on an emotional appeal rather than factual analysis" },
      { letter: "E", text: "does not specify what services deteriorated or by how much" },
    ],
    correctAnswer: "A",
    explanation: "The journalist assumes the current proposal will have the same effects as past cuts. But circumstances, amounts, methods, and which services are cut could all differ, making the historical analogy potentially invalid.",
    wrongAnswerExplanations: {
      B: "This is related but A captures the flaw more directly.",
      C: "Other errors aren't the main issue; it's the assumption about this cut.",
      D: "The argument uses historical evidence, not just emotional appeal.",
      E: "Specificity would help but isn't the main logical flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-042",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Marine biologist: Coral reef bleaching events have become more frequent in recent decades. This increase correlates strongly with rising ocean temperatures. I believe that climate change is the primary driver of coral reef decline worldwide.`,
    questionStem: "Which one of the following, if true, most strengthens the marine biologist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Coral reefs in cooler waters have not experienced bleaching events" },
      { letter: "B", text: "Some coral species are more resistant to temperature changes than others" },
      { letter: "C", text: "Ocean acidification also poses a threat to coral reefs" },
      { letter: "D", text: "Coral reef tourism has declined in areas with bleaching" },
      { letter: "E", text: "Other potential causes of bleaching, such as pollution, have not increased in frequency" },
    ],
    correctAnswer: "E",
    explanation: "If other potential causes haven't increased while bleaching has, the temperature correlation becomes more likely to be causal. This rules out alternative explanations and strengthens the climate change conclusion.",
    wrongAnswerExplanations: {
      A: "This supports the temperature link but doesn't rule out other causes.",
      B: "Species variation doesn't strengthen the climate change causation claim.",
      C: "Additional threats don't strengthen the claim that temperature is the PRIMARY driver.",
      D: "Tourism decline is a consequence, not evidence of causation."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-043",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Technology entrepreneur: Artificial intelligence will create more jobs than it eliminates. While AI may automate some tasks, it will create entirely new industries and job categories that we cannot yet imagine, just as previous technological revolutions did.`,
    questionStem: "Which one of the following, if true, most seriously weakens the entrepreneur's argument?",
    answerChoices: [
      { letter: "A", text: "Some workers displaced by AI will need retraining to find new employment" },
      { letter: "B", text: "AI development requires highly specialized skills that most workers do not possess" },
      { letter: "C", text: "Previous technological revolutions occurred over decades, allowing gradual workforce adaptation" },
      { letter: "D", text: "New industries created by AI may require far fewer workers than the industries they replace" },
      { letter: "E", text: "AI technology is being developed faster than regulatory frameworks can keep pace" },
    ],
    correctAnswer: "D",
    explanation: "The entrepreneur assumes new industries will create comparable job numbers. If AI-created industries need fewer workers, the net job effect could still be negative despite new industry creation.",
    wrongAnswerExplanations: {
      A: "Retraining needs don't undermine the claim about total jobs created.",
      B: "Skill requirements explain who gets jobs but not whether there will be net job creation.",
      C: "This raises concerns about transition but doesn't challenge the ultimate job creation claim.",
      E: "Regulatory lag doesn't address job creation numbers."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-044",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Theater director: Live theater is struggling financially because audiences prefer movies and streaming services. To survive, theaters must offer experiences that cannot be replicated by film, such as interactive performances and post-show discussions with cast members.`,
    questionStem: "The director's recommendation assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Interactive performances are more profitable than traditional performances" },
      { letter: "B", text: "Audiences who prefer film would be attracted to unique theatrical experiences" },
      { letter: "C", text: "Post-show discussions significantly improve the artistic quality of performances" },
      { letter: "D", text: "Streaming services cannot offer interactive content" },
      { letter: "E", text: "Live theater has historically included interactive elements" },
    ],
    correctAnswer: "B",
    explanation: "The recommendation aims to attract audiences lost to film/streaming. It assumes these unique experiences will actually bring those audiences back. If movie-preferrers won't come regardless, the strategy fails.",
    wrongAnswerExplanations: {
      A: "Profitability comparison isn't necessary for the recommendation.",
      C: "Artistic quality isn't the basis for the recommendation; unique experience is.",
      D: "Streaming capabilities don't affect whether theaters can attract audiences.",
      E: "Historical practices aren't relevant to the current recommendation."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-045",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All successful entrepreneurs take calculated risks. Maya takes calculated risks. Therefore, Maya is a successful entrepreneur.`,
    questionStem: "Which one of the following indicates the flaw in the argument's reasoning?",
    answerChoices: [
      { letter: "A", text: "It assumes that Maya is the only person who takes calculated risks" },
      { letter: "B", text: "It confuses a necessary condition for success with a sufficient condition" },
      { letter: "C", text: "It fails to define what constitutes a calculated risk" },
      { letter: "D", text: "It overlooks the possibility that Maya might take uncalculated risks as well" },
      { letter: "E", text: "It assumes all risk-takers become entrepreneurs" },
    ],
    correctAnswer: "B",
    explanation: "Taking calculated risks is necessary for entrepreneurial success (all successful entrepreneurs do it) but not sufficient (not everyone who takes risks becomes successful). The argument treats the necessary condition as sufficient.",
    wrongAnswerExplanations: {
      A: "The argument doesn't assume Maya is unique in taking risks.",
      C: "Definition of calculated risks isn't the logical flaw.",
      D: "Additional risk-taking doesn't address the logical structure flaw.",
      E: "The argument doesn't claim all risk-takers become entrepreneurs."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-046",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `Research shows that students who participate in study groups perform better on exams than students who study alone. However, students who join study groups tend to be more social and outgoing. These same social traits are associated with better performance in class discussions, which often contribute to course grades.`,
    questionStem: "If all the statements above are true, which one of the following is most strongly supported?",
    answerChoices: [
      { letter: "A", text: "Study groups are an ineffective way to prepare for exams" },
      { letter: "B", text: "Social students would perform well even without study groups" },
      { letter: "C", text: "The exam performance difference may not be entirely due to study group participation itself" },
      { letter: "D", text: "Class discussion grades are more important than exam grades" },
      { letter: "E", text: "Introverted students should be required to join study groups" },
    ],
    correctAnswer: "C",
    explanation: "If study group participants are already more social/outgoing, and these traits help academic performance, the better exam results might be partly due to the traits rather than the groups themselves. There's a confounding variable.",
    wrongAnswerExplanations: {
      A: "The passage doesn't establish groups are ineffective, just that causation is unclear.",
      B: "This goes too far; we don't know they'd perform equally well.",
      D: "Grade importance isn't discussed.",
      E: "No recommendation for introverts is supported."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-047",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Scientist A: Space exploration should prioritize sending humans to Mars because human explorers can make observations and decisions that robots cannot. The scientific value of human presence far exceeds the additional cost and risk.

    Scientist B: The costs and risks of human Mars missions are prohibitive. Robotic probes can conduct most meaningful science at a fraction of the cost, allowing us to explore more of the solar system.`,
    questionStem: "Scientist A and Scientist B disagree about whether",
    answerChoices: [
      { letter: "A", text: "robots are capable of conducting scientific research on Mars" },
      { letter: "B", text: "human missions to Mars are technically feasible" },
      { letter: "C", text: "the scientific benefits of human Mars exploration justify the costs" },
      { letter: "D", text: "exploring Mars should be a priority for space agencies" },
      { letter: "E", text: "current robotic technology is sufficient for Mars exploration" },
    ],
    correctAnswer: "C",
    explanation: "Scientist A says human presence's scientific value exceeds the cost. Scientist B says costs are prohibitive and robots can do 'most meaningful science' cheaper. They directly disagree on whether human scientific benefits justify human costs.",
    wrongAnswerExplanations: {
      A: "Both seem to agree robots can do research; they disagree on comparative value.",
      B: "Technical feasibility isn't discussed; they focus on cost-benefit.",
      D: "Both seem to support Mars exploration; they disagree on how to do it.",
      E: "Sufficiency of robots is related but the core disagreement is cost-benefit of humans."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-048",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Consumer advocate: The pharmaceutical company claims its new drug is safe because clinical trials showed no serious side effects. However, the trials lasted only six months. Long-term effects cannot be ruled out. Therefore, the drug is dangerous and should not be approved.`,
    questionStem: "The reasoning in the consumer advocate's argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "concludes that something is dangerous merely because it hasn't been proven safe" },
      { letter: "B", text: "ignores the potential benefits of the drug for patients" },
      { letter: "C", text: "assumes that all drugs have long-term side effects" },
      { letter: "D", text: "fails to consider that some side effects manifest quickly" },
      { letter: "E", text: "relies on information provided by the drug company" },
    ],
    correctAnswer: "A",
    explanation: "The advocate moves from 'long-term effects cannot be ruled out' (uncertainty) to 'the drug is dangerous' (certainty of harm). Lack of proof of safety doesn't equal proof of danger.",
    wrongAnswerExplanations: {
      B: "Benefits are relevant but not the logical flaw in the reasoning.",
      C: "The advocate doesn't assume all drugs have long-term effects.",
      D: "Quick manifestation doesn't address the logical leap from uncertainty to danger.",
      E: "The advocate doesn't rely on company information for the danger claim."
    },
    difficulty: "medium"
  },
  {
    id: "lr-10-049",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Musicologist: Jazz music emerged in New Orleans in the early 20th century as a fusion of African rhythmic traditions, European harmonic structures, and blues influences. The unique cultural mixing pot of New Orleans was essential to jazz's development.`,
    questionStem: "Which one of the following, if true, most strengthens the musicologist's claim about New Orleans' importance?",
    answerChoices: [
      { letter: "A", text: "Many famous jazz musicians were born in New Orleans" },
      { letter: "B", text: "New Orleans had unusually diverse cultural communities living in close proximity" },
      { letter: "C", text: "Jazz has influenced many other musical genres" },
      { letter: "D", text: "Similar musical styles did not develop in other American cities at the same time" },
      { letter: "E", text: "European classical musicians visited New Orleans in the early 1900s" },
    ],
    correctAnswer: "D",
    explanation: "If similar music didn't emerge elsewhere, this supports the claim that New Orleans' specific conditions were essential. If jazz could have developed anywhere with these influences, New Orleans wouldn't be uniquely essential.",
    wrongAnswerExplanations: {
      A: "Famous musicians being from New Orleans doesn't prove the city was essential to jazz's development.",
      B: "This supports the cultural mix claim but D more directly supports New Orleans' essential role.",
      C: "Jazz's influence doesn't address why New Orleans was essential.",
      E: "European visitors don't uniquely explain why jazz developed in New Orleans."
    },
    difficulty: "hard"
  },
  {
    id: "lr-10-050",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Economist: Rent control policies help low-income residents afford housing in expensive cities. Cities with rent control have significant numbers of long-term residents who would not be able to afford market-rate apartments.`,
    questionStem: "Which one of the following, if true, most seriously weakens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Some landlords fail to maintain rent-controlled properties properly" },
      { letter: "B", text: "Rent control benefits primarily go to long-term residents regardless of income level" },
      { letter: "C", text: "Market-rate housing construction has increased in cities without rent control" },
      { letter: "D", text: "Some rent-controlled apartments remain vacant for extended periods" },
      { letter: "E", text: "Rent control policies vary significantly between different cities" },
    ],
    correctAnswer: "B",
    explanation: "If rent control benefits go to long-term residents regardless of income, wealthy long-term residents might benefit while low-income newcomers are excluded. This weakens the claim that rent control helps low-income residents specifically.",
    wrongAnswerExplanations: {
      A: "Maintenance issues are a side effect but don't address who benefits.",
      C: "Construction elsewhere doesn't address rent control's effects.",
      D: "Vacant apartments are inefficiency but don't address who benefits from occupied units.",
      E: "Policy variation doesn't address the core claim about helping low-income residents."
    },
    difficulty: "medium"
  }
];
