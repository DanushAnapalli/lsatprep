import { Question } from "../lsat-types";

export const lrQuestionsSet6: Question[] = [
  {
    id: "lr6-001",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `The candidate who wins the most debates typically wins the election. In the last election, Candidate Smith won more debates than any other candidate. Therefore, Candidate Smith won the election.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "confuses what usually happens with what must happen" },
      { letter: "B", text: "fails to define what constitutes winning a debate" },
      { letter: "C", text: "assumes that debates are the only factor in elections" },
      { letter: "D", text: "relies on evidence from a single election" },
      { letter: "E", text: "ignores the views of undecided voters" }
    ],
    correctAnswer: "A",
    explanation: "The argument moves from 'typically' (usually) to a certain conclusion about a specific case. What usually happens doesn't guarantee what will happen in any particular instance.",
    wrongAnswerExplanations: {
      "B": "The definition of debate winning isn't the core flaw.",
      "C": "The argument doesn't assume debates are the only factor.",
      "D": "The flaw is about the logical structure, not sample size.",
      "E": "Voters' views aren't relevant to this logical error."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-002",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Sleep scientists recommend that teenagers get 8-10 hours of sleep per night. However, most high schools start classes at 7:30 AM, requiring students to wake up early. Research suggests that adolescent circadian rhythms naturally shift toward later sleep and wake times. Moving school start times to 8:30 AM or later would allow teenagers to get adequate sleep.`,
    questionStem: "Which one of the following, if true, most strengthens the argument?",
    answerChoices: [
      { letter: "A", text: "Some teenagers are able to fall asleep early despite their circadian rhythms" },
      { letter: "B", text: "Schools that have implemented later start times report improvements in student attendance and academic performance" },
      { letter: "C", text: "Parents of teenagers often have work schedules that require early morning departures" },
      { letter: "D", text: "Teenagers who get more sleep tend to spend less time on social media" },
      { letter: "E", text: "Adult circadian rhythms also vary from person to person" }
    ],
    correctAnswer: "B",
    explanation: "Evidence that later start times actually produce positive outcomes directly supports the recommendation for later school times.",
    wrongAnswerExplanations: {
      "A": "Some exceptions don't support a general recommendation.",
      "C": "Parent schedules are logistical concerns, not support for the sleep argument.",
      "D": "Social media usage doesn't directly support the school timing argument.",
      "E": "Adult variation doesn't support teenager-specific recommendations."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-003",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `A pharmaceutical company claims its new allergy medication is superior because clinical trials showed it provided relief to 85% of patients, compared to 70% for the leading competitor. The company recommends that doctors prescribe their medication instead of the competitor.`,
    questionStem: "Which one of the following, if true, most weakens the company's argument?",
    answerChoices: [
      { letter: "A", text: "The new medication costs significantly more than the competitor" },
      { letter: "B", text: "The clinical trials for the two medications used different criteria for measuring relief" },
      { letter: "C", text: "The company's medication has been on the market for less time than the competitor" },
      { letter: "D", text: "Both medications are available without a prescription in some countries" },
      { letter: "E", text: "The company has other medications that are less effective than competitors" }
    ],
    correctAnswer: "B",
    explanation: "If different criteria were used, the percentages aren't comparable. The 85% vs 70% comparison is meaningless if they're measuring different things.",
    wrongAnswerExplanations: {
      "A": "Cost is a separate consideration from effectiveness.",
      "C": "Time on market doesn't affect the trial results' validity.",
      "D": "Prescription status doesn't affect the effectiveness comparison.",
      "E": "Other medications' performance doesn't affect this comparison."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-004",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The local government should ban single-use plastic bags. Such bags end up in landfills where they take hundreds of years to decompose, and many end up in oceans where they harm marine life. Reusable bags are readily available and provide a practical alternative.`,
    questionStem: "The argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Reusable bags are environmentally preferable to single-use plastic bags" },
      { letter: "B", text: "All consumers have access to affordable reusable bags" },
      { letter: "C", text: "Other single-use products also harm the environment" },
      { letter: "D", text: "Plastic bags are the primary source of marine pollution" },
      { letter: "E", text: "Consumers will comply with a plastic bag ban" }
    ],
    correctAnswer: "A",
    explanation: "The argument recommends switching to reusable bags. This only makes sense if reusable bags are better for the environment. If they're equally bad or worse, the ban wouldn't solve the problem.",
    wrongAnswerExplanations: {
      "B": "Universal access isn't assumed—'readily available' suggests general availability.",
      "C": "Other products aren't relevant to this specific argument.",
      "D": "Being the primary source isn't necessary—being a significant source suffices.",
      "E": "Compliance is a practical concern but not a logical assumption of the argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-005",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All professional athletes in this league are required to undergo drug testing. Anyone who fails a drug test is suspended for at least one game. Last season, twenty players were suspended. Of those suspended, fifteen were suspended for exactly one game.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Fifteen players failed drug tests last season" },
      { letter: "B", text: "Five players were suspended for reasons other than failing drug tests" },
      { letter: "C", text: "At least five players were suspended for more than one game" },
      { letter: "D", text: "Twenty players failed drug tests last season" },
      { letter: "E", text: "All suspensions in the league are due to failed drug tests" }
    ],
    correctAnswer: "C",
    explanation: "Twenty players were suspended, and fifteen were suspended for exactly one game. That means five were suspended for more than one game (at least two games).",
    wrongAnswerExplanations: {
      "A": "Players might be suspended for reasons other than drug tests.",
      "B": "We can't determine why the other five were suspended—it could still be drug-related but longer suspensions.",
      "D": "Not all suspensions are necessarily due to drug tests.",
      "E": "The argument doesn't state drug tests are the only reason for suspensions."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-006",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `If a company has honest leadership, it will maintain public trust. This company has lost public trust. Therefore, this company does not have honest leadership.`,
    questionStem: "The pattern of reasoning in the argument is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "If it snows, the schools will close. The schools are closed. So it must have snowed." },
      { letter: "B", text: "If a plant gets enough water, it will thrive. This plant is not thriving. Therefore, this plant is not getting enough water." },
      { letter: "C", text: "If John studies hard, he will pass. John passed. Therefore, John studied hard." },
      { letter: "D", text: "All cats are mammals. Felix is a cat. Therefore, Felix is a mammal." },
      { letter: "E", text: "If the alarm sounds, there is danger. There is danger. Therefore, the alarm will sound." }
    ],
    correctAnswer: "B",
    explanation: "Both arguments use modus tollens: If P then Q; not Q; therefore not P. The original: honest leadership → public trust; no trust; therefore no honest leadership. Answer B: enough water → thriving; not thriving; therefore not enough water.",
    wrongAnswerExplanations: {
      "A": "This affirms the consequent (If P then Q; Q; therefore P)—a fallacy.",
      "C": "This also affirms the consequent.",
      "D": "This is a simple categorical syllogism, not modus tollens.",
      "E": "This affirms the consequent."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-007",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Critic: The new museum exhibit has been praised for its innovative design. But this praise is unwarranted. The exhibit merely combines elements that have been used separately in previous exhibits. Placing familiar sculptures alongside interactive digital displays is not innovation—it's compilation.`,
    questionStem: "The critic's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "distinguishing between genuine innovation and mere recombination of existing elements" },
      { letter: "B", text: "comparing the exhibit unfavorably to previous exhibits" },
      { letter: "C", text: "questioning the qualifications of those who praised the exhibit" },
      { letter: "D", text: "pointing out financial motivations behind the exhibit's design" },
      { letter: "E", text: "providing examples of truly innovative exhibits" }
    ],
    correctAnswer: "A",
    explanation: "The critic argues that combining existing elements doesn't constitute innovation. The argument distinguishes between true innovation and compilation/recombination.",
    wrongAnswerExplanations: {
      "B": "No unfavorable comparison to specific previous exhibits is made.",
      "C": "The critics' qualifications aren't questioned.",
      "D": "No financial motivations are mentioned.",
      "E": "No examples of truly innovative exhibits are provided."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-008",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A tenant discovered mold in her apartment and reported it to the landlord. The landlord refused to address the problem, claiming the tenant caused the mold by not ventilating properly. The tenant stopped paying rent until the mold was removed. A court ruled that the tenant was within her rights to withhold rent.`,
    questionStem: "Which one of the following principles, if established, most helps to justify the court's ruling?",
    answerChoices: [
      { letter: "A", text: "Tenants are never responsible for building maintenance issues" },
      { letter: "B", text: "When a landlord fails to maintain habitable conditions, tenants may withhold rent until repairs are made" },
      { letter: "C", text: "Landlords are only responsible for structural repairs" },
      { letter: "D", text: "Tenants must continue paying rent regardless of living conditions" },
      { letter: "E", text: "Disputes between landlords and tenants should always go to court" }
    ],
    correctAnswer: "B",
    explanation: "This principle directly justifies the ruling: the landlord failed to address the mold (habitability issue), so the tenant could withhold rent.",
    wrongAnswerExplanations: {
      "A": "This is too broad and doesn't match the specific situation.",
      "C": "This might actually support the landlord's position on mold.",
      "D": "This would rule against the tenant.",
      "E": "This is about process, not the substance of the ruling."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-009",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A company implemented a generous parental leave policy, expecting it would help retain employees who become parents. However, employee turnover actually increased among new parents in the year after the policy was implemented.`,
    questionStem: "Which one of the following, if true, most helps to resolve this apparent paradox?",
    answerChoices: [
      { letter: "A", text: "The parental leave policy was more generous than those offered by competitors" },
      { letter: "B", text: "Many employees who took parental leave discovered they preferred staying home with their children" },
      { letter: "C", text: "The company also increased salaries during the same period" },
      { letter: "D", text: "Some employees without children felt the policy was unfair" },
      { letter: "E", text: "The cost of the parental leave policy exceeded initial projections" }
    ],
    correctAnswer: "B",
    explanation: "The leave gave parents time to bond with their children, and some decided they preferred full-time parenting. The policy inadvertently showed them an alternative they valued more than work.",
    wrongAnswerExplanations: {
      "A": "Being more generous should reduce turnover, not explain increased turnover.",
      "C": "Higher salaries would reduce turnover, deepening the paradox.",
      "D": "Non-parent dissatisfaction doesn't explain parent turnover.",
      "E": "Costs don't explain why parents left."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-010",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `The city's new bike-sharing program has been declared a success because the number of program members has doubled since last year. Officials claim this shows that residents are embracing cycling as a transportation option.`,
    questionStem: "Which one of the following would be most important to know in evaluating the officials' claim?",
    answerChoices: [
      { letter: "A", text: "How many cities have similar bike-sharing programs" },
      { letter: "B", text: "Whether the number of bike trips per member has also increased" },
      { letter: "C", text: "What the annual cost of operating the program is" },
      { letter: "D", text: "Whether any members have been injured while using program bikes" },
      { letter: "E", text: "How the cost of membership compares to bus fares" }
    ],
    correctAnswer: "B",
    explanation: "Membership numbers alone don't indicate actual cycling usage. Members might sign up but rarely ride. Knowing whether trips per member increased would show if residents actually embrace cycling.",
    wrongAnswerExplanations: {
      "A": "Other cities' programs don't evaluate this program's success.",
      "C": "Operating costs don't indicate whether residents embrace cycling.",
      "D": "Safety is important but doesn't address the 'embracing cycling' claim.",
      "E": "Cost comparison doesn't show actual usage patterns."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-011",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Senator: The proposed environmental regulations will devastate our state's economy. Local business owners have told me the regulations would force them to lay off workers. We cannot support any policy that would cost jobs.`,
    questionStem: "The senator's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "appeals to the authority of business owners without establishing their expertise in economic analysis" },
      { letter: "B", text: "assumes that what business owners say is necessarily true" },
      { letter: "C", text: "ignores the potential economic benefits of environmental regulations" },
      { letter: "D", text: "fails to consider that some job losses might be offset by job creation" },
      { letter: "E", text: "treats the claims of interested parties as objective evidence" }
    ],
    correctAnswer: "E",
    explanation: "Business owners have a financial interest in opposing regulations. Their claims might be exaggerated or self-serving. Treating interested parties' claims as objective evidence is flawed reasoning.",
    wrongAnswerExplanations: {
      "A": "This is close but doesn't capture that the issue is bias, not expertise.",
      "B": "This is part of it but doesn't identify why their claims might be unreliable.",
      "C": "While true, this is a different weakness than the source reliability issue.",
      "D": "This is also valid but doesn't address the biased source problem."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-012",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Studies have shown that children who learn to play a musical instrument tend to perform better in mathematics. Researchers believe that musical training improves the brain's ability to process patterns and sequences, skills that are essential for mathematics.`,
    questionStem: "Which one of the following, if true, most strengthens the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "Children who excel at mathematics often enjoy listening to music" },
      { letter: "B", text: "Brain imaging studies show increased activity in pattern-recognition areas among children after musical training" },
      { letter: "C", text: "Many professional mathematicians played instruments as children" },
      { letter: "D", text: "Musical instruction is offered in most elementary schools" },
      { letter: "E", text: "Children who play instruments tend to come from families that value education" }
    ],
    correctAnswer: "B",
    explanation: "Direct neurological evidence showing that musical training increases pattern-recognition brain activity strongly supports the proposed mechanism.",
    wrongAnswerExplanations: {
      "A": "Enjoying music is different from playing instruments; doesn't support the mechanism.",
      "C": "Correlation doesn't explain the mechanism.",
      "D": "Availability doesn't support the cognitive benefits.",
      "E": "This suggests a confounding variable (family values), weakening the argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-013",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Market analysts predict that electric vehicle sales will surpass gasoline vehicle sales within five years. They base this prediction on current growth trends showing electric vehicle sales increasing by 40% annually while gasoline vehicle sales remain flat.`,
    questionStem: "Which one of the following, if true, most weakens the analysts' prediction?",
    answerChoices: [
      { letter: "A", text: "Electric vehicles currently represent only 5% of total vehicle sales" },
      { letter: "B", text: "Government incentives for electric vehicles are scheduled to expire in two years" },
      { letter: "C", text: "Some consumers prefer the sound of gasoline engines" },
      { letter: "D", text: "Electric vehicle technology has improved significantly in recent years" },
      { letter: "E", text: "Gasoline prices have been relatively stable" }
    ],
    correctAnswer: "B",
    explanation: "If government incentives expire, the 40% growth rate might not continue, undermining the prediction based on current trends. This introduces a significant discontinuity in the trend.",
    wrongAnswerExplanations: {
      "A": "Starting small doesn't prevent rapid growth from eventually catching up.",
      "C": "Niche preferences don't undermine the overall trend.",
      "D": "Technology improvement supports continued EV growth.",
      "E": "Stable gas prices don't change the current sales trends."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-014",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `No one who lacks empathy can be a truly effective leader. Some effective communicators lack empathy. Therefore, some effective communicators cannot be truly effective leaders.`,
    questionStem: "The conclusion follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "All truly effective leaders are effective communicators" },
      { letter: "B", text: "Some people who lack empathy are effective communicators" },
      { letter: "C", text: "Effective communication requires empathy" },
      { letter: "D", text: "The argument's premises are true as stated" },
      { letter: "E", text: "Leadership and communication skills are related" }
    ],
    correctAnswer: "D",
    explanation: "The argument is already valid as stated. Premise 1: No empathy → no effective leadership. Premise 2: Some effective communicators lack empathy. Conclusion: Those communicators (lacking empathy) can't be effective leaders. Assuming the premises are true makes the conclusion follow.",
    wrongAnswerExplanations: {
      "A": "This isn't needed; the argument works without it.",
      "B": "This is already stated in the premises.",
      "C": "This would contradict the second premise.",
      "E": "This is vague and doesn't make the logic work."
    },
    difficulty: "hard"
  },
  {
    id: "lr6-015",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Film critics often dismiss popular movies as lacking artistic merit. However, a film's popularity indicates that it connects with audiences emotionally and culturally. The ability to create such connections is itself an artistic achievement. Therefore, popularity should be considered one measure of artistic success, not evidence against it.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Film critics are wrong to dismiss popular movies" },
      { letter: "B", text: "Connecting with audiences is an artistic achievement" },
      { letter: "C", text: "Popularity should be recognized as a legitimate measure of artistic success" },
      { letter: "D", text: "Popular movies are more artistic than critics acknowledge" },
      { letter: "E", text: "Critics should value emotional connection more than they do" }
    ],
    correctAnswer: "C",
    explanation: "The main conclusion is stated at the end: popularity should be considered a measure of artistic success. The argument builds to this point through the premises about emotional connection being artistic.",
    wrongAnswerExplanations: {
      "A": "This is implied but not the main point.",
      "B": "This is a supporting premise, not the main conclusion.",
      "D": "This is too vague and not the precise conclusion.",
      "E": "This isn't the argument's focus."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-016",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The company's vacation policy states that employees earn two weeks of vacation per year for the first five years, then three weeks per year thereafter. No employee may carry over more than one week of unused vacation to the following year. Janelle has worked at the company for seven years and currently has two weeks of vacation available.`,
    questionStem: "If the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "Janelle used all her vacation time last year" },
      { letter: "B", text: "Janelle used at least two weeks of vacation last year" },
      { letter: "C", text: "Janelle has never carried over vacation time" },
      { letter: "D", text: "Janelle will earn three weeks of vacation this year" },
      { letter: "E", text: "Janelle has used at least one week of vacation this year" }
    ],
    correctAnswer: "B",
    explanation: "Janelle earns 3 weeks/year (after 5 years), can carry over at most 1 week, and has 2 weeks now. If she had 3 weeks + 1 carry-over = 4 weeks maximum, and now has 2, she must have used at least 2 weeks (4-2=2 minimum used).",
    wrongAnswerExplanations: {
      "A": "She might have carried over one week.",
      "C": "She could have carried over and still have 2 weeks.",
      "D": "This is true but we're inferring from current facts, not future earnings.",
      "E": "The 2 weeks could be from this year's 3 weeks minus carry-over situations."
    },
    difficulty: "hard"
  },
  {
    id: "lr6-017",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Miranda: Online education is just as effective as traditional classroom education. Studies show that students in online programs achieve similar test scores and graduation rates as those in traditional programs.

Tyler: Online education cannot match traditional education. The social interactions and mentorship relationships that develop in physical classrooms are essential to a complete education that test scores cannot measure.`,
    questionStem: "Miranda and Tyler disagree about whether",
    answerChoices: [
      { letter: "A", text: "test scores are a valid measure of educational effectiveness" },
      { letter: "B", text: "social interaction has educational value" },
      { letter: "C", text: "online education can provide a complete education equivalent to traditional education" },
      { letter: "D", text: "graduation rates are important indicators of educational quality" },
      { letter: "E", text: "mentorship relationships can develop online" }
    ],
    correctAnswer: "C",
    explanation: "Miranda claims online is 'just as effective,' while Tyler says it 'cannot match' traditional education. They fundamentally disagree about whether online education can be equivalent to traditional education.",
    wrongAnswerExplanations: {
      "A": "Miranda uses test scores; Tyler doesn't reject them but says they're incomplete.",
      "B": "Tyler asserts this; Miranda doesn't deny it.",
      "D": "Both might agree graduation rates matter.",
      "E": "Neither specifically discusses whether mentorship can occur online."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-018",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `The committee must choose between two candidates for the position: Dr. Adams, who has 20 years of experience, and Dr. Brooks, who has won numerous awards. Since experience is more valuable than awards, the committee should choose Dr. Adams.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "assumes that years of experience correlates with quality of performance" },
      { letter: "B", text: "fails to consider that Dr. Brooks may also have substantial experience" },
      { letter: "C", text: "presents a false dilemma by ignoring other candidates" },
      { letter: "D", text: "does not specify what type of awards Dr. Brooks has won" },
      { letter: "E", text: "overlooks the possibility that some awards recognize experience" }
    ],
    correctAnswer: "B",
    explanation: "The argument mentions only one attribute of each candidate. Dr. Brooks' awards are mentioned but not her experience—she might have significant experience too, making the comparison incomplete.",
    wrongAnswerExplanations: {
      "A": "While a potential weakness, this isn't the primary flaw.",
      "C": "The false dilemma is between criteria, not candidates; there are only two candidates.",
      "D": "Award types are secondary to the comparison logic.",
      "E": "This is a minor point that doesn't address the main flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-019",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Economist: Government subsidies for solar energy will ultimately benefit the economy. As solar becomes cheaper due to increased production, energy costs for all businesses will decrease, spurring economic growth.`,
    questionStem: "Which one of the following, if true, most strengthens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Solar energy companies have lobbied for increased subsidies" },
      { letter: "B", text: "Some businesses have already switched to solar energy" },
      { letter: "C", text: "As solar energy production increases, the cost per unit of electricity generated decreases significantly" },
      { letter: "D", text: "Other forms of renewable energy also receive government subsidies" },
      { letter: "E", text: "Energy costs represent a small percentage of most businesses' expenses" }
    ],
    correctAnswer: "C",
    explanation: "The argument claims subsidies will make solar cheaper. Evidence that increased production actually reduces costs supports the mechanism the economist describes.",
    wrongAnswerExplanations: {
      "A": "Lobbying doesn't indicate economic benefits.",
      "B": "Current adoption doesn't prove broader economic benefits.",
      "D": "Other subsidies don't support this specific argument.",
      "E": "This actually weakens the argument—if energy is a small expense, cheaper energy won't spur much growth."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-020",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `A study found that employees who work from home are 15% more productive than those who work in offices. Company executives conclude that requiring all employees to work from home would increase overall company productivity.`,
    questionStem: "Which one of the following, if true, most weakens the executives' conclusion?",
    answerChoices: [
      { letter: "A", text: "Productivity is difficult to measure across different job types" },
      { letter: "B", text: "Employees who currently work from home are generally more self-motivated and disciplined than average" },
      { letter: "C", text: "Some employees prefer the social environment of an office" },
      { letter: "D", text: "The study was conducted during a period of unusually good weather" },
      { letter: "E", text: "Working from home reduces commuting time for employees" }
    ],
    correctAnswer: "B",
    explanation: "If current remote workers are already more self-motivated, their higher productivity reflects their traits, not remote work itself. Forcing less motivated workers home might not yield the same results.",
    wrongAnswerExplanations: {
      "A": "Measurement difficulty is a methodological concern but doesn't directly weaken the finding.",
      "C": "Preferences don't necessarily affect productivity.",
      "D": "Weather is a minor confounding factor.",
      "E": "Reduced commuting supports the productivity argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-021",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Digital textbooks are clearly superior to printed textbooks for students. Digital textbooks can be updated instantly when information changes, can include interactive features, and weigh nothing in a student's backpack.`,
    questionStem: "The argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "All students have access to devices capable of displaying digital textbooks" },
      { letter: "B", text: "The advantages of digital textbooks outweigh any disadvantages they may have" },
      { letter: "C", text: "Printed textbooks can never be updated" },
      { letter: "D", text: "Interactive features improve learning outcomes" },
      { letter: "E", text: "Students prefer lighter backpacks to heavier ones" }
    ],
    correctAnswer: "B",
    explanation: "To conclude digital is 'clearly superior,' the argument assumes the mentioned advantages outweigh potential disadvantages not mentioned (like screen fatigue, distraction, or needing devices).",
    wrongAnswerExplanations: {
      "A": "Access might affect feasibility but isn't logically required for the superiority argument.",
      "C": "The argument says 'instantly updated,' not that print can never be updated.",
      "D": "The argument lists interactivity as an advantage; it doesn't require proof it helps learning.",
      "E": "This is implied by mentioning weight but isn't the core assumption."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-022",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A journalist discovered that a prominent politician had accepted illegal campaign contributions 20 years ago, before entering public office. The journalist decided not to publish the story, reasoning that the events occurred too long ago to be relevant to the politician's current fitness for office.`,
    questionStem: "Which one of the following principles, if valid, most supports the journalist's decision?",
    answerChoices: [
      { letter: "A", text: "Journalists should only report on events that occurred within the past decade" },
      { letter: "B", text: "Illegal activities should always be reported regardless of when they occurred" },
      { letter: "C", text: "Past misconduct that occurred before a person's public career is not relevant to evaluating their public service" },
      { letter: "D", text: "Politicians deserve privacy regarding events from before their political careers" },
      { letter: "E", text: "Journalists should consider whether reporting would serve the public interest" }
    ],
    correctAnswer: "C",
    explanation: "The journalist's reasoning was that the events were too old and occurred before public office. The principle that pre-career conduct isn't relevant to evaluating public service directly supports this reasoning.",
    wrongAnswerExplanations: {
      "A": "This is too arbitrary and doesn't match the journalist's reasoning.",
      "B": "This would require publishing, contradicting the journalist's decision.",
      "D": "Privacy isn't the journalist's stated reason.",
      "E": "This is too general and doesn't specifically support the time-based reasoning."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-023",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A coffee shop raised its prices by 10%, expecting some decrease in sales. Surprisingly, both revenue and the number of customers increased after the price increase.`,
    questionStem: "Which one of the following, if true, most helps to explain this surprising outcome?",
    answerChoices: [
      { letter: "A", text: "Many customers use coffee shop loyalty programs" },
      { letter: "B", text: "The price increase coincided with the opening of a large office building nearby" },
      { letter: "C", text: "Competitor coffee shops did not change their prices" },
      { letter: "D", text: "The coffee shop also introduced new menu items" },
      { letter: "E", text: "Coffee prices generally fluctuate seasonally" }
    ],
    correctAnswer: "B",
    explanation: "A new office building would bring many new potential customers to the area, easily offsetting any customers lost due to higher prices and explaining the increase in both customers and revenue.",
    wrongAnswerExplanations: {
      "A": "Loyalty programs might retain customers but don't explain the increase.",
      "C": "Competitors' unchanged prices would make customers more likely to leave, not stay.",
      "D": "New menu items might help but doesn't fully explain increased customer numbers.",
      "E": "Seasonal fluctuation doesn't explain why this specific increase helped."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-024",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Archaeologist: The conventional dating of this artifact to 500 BCE must be wrong. Chemical analysis shows the artifact contains a compound that wasn't synthesized until 200 CE. Since an artifact cannot contain substances that didn't exist when it was made, this artifact must date from 200 CE or later.`,
    questionStem: "The archaeologist's argument relies on which one of the following reasoning techniques?",
    answerChoices: [
      { letter: "A", text: "Establishing a date by ruling out earlier possibilities based on material evidence" },
      { letter: "B", text: "Appealing to expert consensus about dating methods" },
      { letter: "C", text: "Comparing the artifact to similar artifacts from known time periods" },
      { letter: "D", text: "Assuming that conventional dating methods are generally unreliable" },
      { letter: "E", text: "Using statistical analysis to estimate the artifact's age" }
    ],
    correctAnswer: "A",
    explanation: "The archaeologist uses material evidence (the compound) to rule out dates before 200 CE. Since the compound didn't exist earlier, the artifact can't be from an earlier period.",
    wrongAnswerExplanations: {
      "B": "No appeal to expert consensus is made.",
      "C": "No comparison to similar artifacts is made.",
      "D": "The argument doesn't say conventional methods are generally unreliable, just wrong in this case.",
      "E": "No statistical analysis is mentioned."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-025",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A city claims its new traffic management system has reduced commute times. Data shows that the average commute time decreased from 45 minutes to 38 minutes in the six months after the system was implemented.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the city's claim?",
    answerChoices: [
      { letter: "A", text: "Whether commuters are satisfied with the new system" },
      { letter: "B", text: "Whether any other factors changed during those six months that might affect commute times" },
      { letter: "C", text: "How much the new system cost to implement" },
      { letter: "D", text: "What traffic management systems other cities use" },
      { letter: "E", text: "Whether the city plans to expand the system" }
    ],
    correctAnswer: "B",
    explanation: "To evaluate whether the system caused the reduction, we need to know if other factors (like fuel prices, construction, population changes) might have caused the change instead.",
    wrongAnswerExplanations: {
      "A": "Satisfaction doesn't determine if the system caused the time reduction.",
      "C": "Cost is irrelevant to whether the system reduced commute times.",
      "D": "Other cities' systems don't help evaluate this city's results.",
      "E": "Future plans don't affect evaluation of past results."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-026",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Clearly, the new mayor is responsible for the recent drop in crime rates. The mayor took office in January, and crime rates have fallen 20% since then. Before the new mayor, crime rates had been rising steadily for years.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes that because one event followed another, the first event caused the second" },
      { letter: "B", text: "relies on crime statistics that may be unreliable" },
      { letter: "C", text: "fails to consider the perspectives of law enforcement officials" },
      { letter: "D", text: "does not specify which of the mayor's policies reduced crime" },
      { letter: "E", text: "ignores crime rate changes in neighboring cities" }
    ],
    correctAnswer: "A",
    explanation: "This is the post hoc ergo propter hoc fallacy. Just because crime dropped after the mayor took office doesn't mean the mayor caused the drop. Many other factors could be responsible.",
    wrongAnswerExplanations: {
      "B": "Reliability of statistics isn't the main logical flaw.",
      "C": "Law enforcement perspectives don't address the causal reasoning error.",
      "D": "Unspecified policies don't explain why the causal claim is flawed.",
      "E": "Neighboring cities' crime rates are interesting but not the core flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-027",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `The fossils found in this rock layer are from marine organisms, even though the site is now hundreds of miles from any ocean. Geologists conclude that this area was once covered by a shallow sea.`,
    questionStem: "Which one of the following, if true, most strengthens the geologists' conclusion?",
    answerChoices: [
      { letter: "A", text: "The rock layer also contains minerals typically formed in saltwater environments" },
      { letter: "B", text: "Similar marine fossils have been found at other inland locations" },
      { letter: "C", text: "The marine organisms found in the fossils are now extinct" },
      { letter: "D", text: "Continental plates have shifted over geological time" },
      { letter: "E", text: "Some marine organisms can survive in freshwater for short periods" }
    ],
    correctAnswer: "A",
    explanation: "Minerals formed in saltwater provide independent evidence supporting the marine environment hypothesis. This corroborates the fossil evidence.",
    wrongAnswerExplanations: {
      "B": "Other inland marine fossils don't specifically support this location's history.",
      "C": "Extinction doesn't indicate the organisms were in a sea here.",
      "D": "Plate tectonics is relevant but doesn't specifically support this location.",
      "E": "Freshwater survival actually weakens the need for a sea explanation."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-028",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `In the chess tournament, every player who defeated a grandmaster received a trophy. Some players who received trophies did not defeat any grandmasters. No player received more than one trophy.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Some players defeated more than one grandmaster" },
      { letter: "B", text: "Trophies were awarded for accomplishments other than defeating grandmasters" },
      { letter: "C", text: "Every grandmaster in the tournament was defeated" },
      { letter: "D", text: "More trophies were given for defeating grandmasters than for other reasons" },
      { letter: "E", text: "The number of players who defeated grandmasters equals the number of grandmasters" }
    ],
    correctAnswer: "B",
    explanation: "Some players got trophies without defeating grandmasters. Since defeating grandmasters earns a trophy, these players must have received trophies for other accomplishments.",
    wrongAnswerExplanations: {
      "A": "We can't determine how many grandmasters any player defeated.",
      "C": "We have no information about whether all grandmasters were defeated.",
      "D": "We can't compare the numbers of trophies for different reasons.",
      "E": "There's no basis for this numerical relationship."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-029",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Some medications that are effective have serious side effects. All medications with serious side effects require prescriptions. Therefore, some medications that are effective require prescriptions.`,
    questionStem: "The pattern of reasoning in the argument is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "Some mammals live in the ocean. All ocean mammals are warm-blooded. Therefore, some warm-blooded animals live in the ocean." },
      { letter: "B", text: "All reptiles are cold-blooded. Some cold-blooded animals live in deserts. Therefore, some reptiles live in deserts." },
      { letter: "C", text: "Some fruits are citrus. All citrus fruits contain vitamin C. Therefore, some fruits contain vitamin C." },
      { letter: "D", text: "All roses are flowers. Some flowers are red. Therefore, some roses are red." },
      { letter: "E", text: "Some books are fiction. All fiction books are entertaining. Therefore, all books are entertaining." }
    ],
    correctAnswer: "C",
    explanation: "Both have the pattern: Some A are B. All B are C. Therefore, some A are C. The original: Some effective → side effects. All side effects → prescription. Therefore, some effective → prescription. Answer C: Some fruits → citrus. All citrus → vitamin C. Therefore, some fruits → vitamin C.",
    wrongAnswerExplanations: {
      "A": "This has a similar structure but rewords the conclusion differently (switches subject and predicate).",
      "B": "This has the pattern: All A are B. Some B are C. Therefore, some A are C—different starting point.",
      "D": "Same invalid pattern as B.",
      "E": "This draws an 'all' conclusion from 'some' premises—different and invalid."
    },
    difficulty: "hard"
  },
  {
    id: "lr6-030",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Researchers claim that a high-protein diet is the best way to lose weight because participants in their study who followed a high-protein diet lost more weight on average than participants who followed a low-fat diet.`,
    questionStem: "Which one of the following, if true, most weakens the researchers' claim?",
    answerChoices: [
      { letter: "A", text: "The high-protein diet was more expensive to follow than the low-fat diet" },
      { letter: "B", text: "Participants in the study who followed a moderate diet lost even more weight than those on the high-protein diet" },
      { letter: "C", text: "Some participants found the high-protein diet easier to follow" },
      { letter: "D", text: "The low-fat diet also resulted in significant weight loss" },
      { letter: "E", text: "High-protein diets have been studied more extensively than low-fat diets" }
    ],
    correctAnswer: "B",
    explanation: "If a moderate diet outperformed the high-protein diet, then high-protein isn't 'the best way' to lose weight. This directly contradicts the claim.",
    wrongAnswerExplanations: {
      "A": "Cost doesn't affect whether it's the best for weight loss.",
      "C": "Ease of following doesn't determine effectiveness.",
      "D": "Significant doesn't mean better—high-protein still could be best.",
      "E": "Research volume doesn't affect this specific comparison."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-031",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The proposed highway expansion will reduce traffic congestion. Traffic engineers predict the new lanes will increase capacity by 40%, and current traffic volume is only 10% above the highway's current capacity.`,
    questionStem: "The argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Traffic volume will not increase significantly after the expansion is completed" },
      { letter: "B", text: "The highway expansion will be completed on schedule" },
      { letter: "C", text: "Current traffic volume measurements are accurate" },
      { letter: "D", text: "No alternative routes are available to current highway users" },
      { letter: "E", text: "Highway expansions always reduce congestion" }
    ],
    correctAnswer: "A",
    explanation: "If traffic increases significantly after expansion, the new capacity might be overwhelmed. The argument assumes this induced demand won't negate the benefits.",
    wrongAnswerExplanations: {
      "B": "Timeline doesn't affect whether expansion will eventually reduce congestion.",
      "C": "Measurement accuracy is implied for any empirical argument but isn't the key assumption.",
      "D": "Alternative routes don't affect whether this highway's expansion reduces its congestion.",
      "E": "The argument is about this specific case, not all expansions."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-032",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A restaurant added a mandatory 20% service charge to all bills. When customers asked whether this charge went to the servers, the restaurant acknowledged that it went to the restaurant itself, not the servers. A consumer advocacy group criticized this practice as deceptive.`,
    questionStem: "Which one of the following principles, if valid, most supports the consumer advocacy group's criticism?",
    answerChoices: [
      { letter: "A", text: "Restaurants should not charge more than 15% for service" },
      { letter: "B", text: "Charges that customers might reasonably expect to go to employees should be clearly disclosed if they do not" },
      { letter: "C", text: "Restaurants should pay their servers at least minimum wage" },
      { letter: "D", text: "Customers should always be allowed to determine their own tip amounts" },
      { letter: "E", text: "Service charges should be optional, not mandatory" }
    ],
    correctAnswer: "B",
    explanation: "Customers reasonably expect a 'service charge' to go to servers. The criticism is that the restaurant didn't clearly disclose otherwise, making it deceptive. This principle captures that concern.",
    wrongAnswerExplanations: {
      "A": "The percentage isn't the issue—the deception is.",
      "C": "Minimum wage isn't the complaint being made.",
      "D": "Tipping flexibility isn't the main concern.",
      "E": "Optional vs. mandatory isn't the deception issue."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-033",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A bookstore reduced the prices of all its books by 30%. Although the number of books sold increased significantly, the bookstore's revenue from book sales decreased.`,
    questionStem: "Which one of the following, if true, best explains this outcome?",
    answerChoices: [
      { letter: "A", text: "The bookstore also sells coffee and snacks" },
      { letter: "B", text: "The price reduction attracted customers who bought mostly lower-priced paperbacks rather than expensive hardcovers" },
      { letter: "C", text: "Competitors did not match the price reduction" },
      { letter: "D", text: "The bookstore's rent increased during the same period" },
      { letter: "E", text: "Some customers bought multiple copies of the same book" }
    ],
    correctAnswer: "B",
    explanation: "If new customers bought mostly cheap books, the increase in volume couldn't compensate for both the 30% price cut and the shift to lower-priced items. Average revenue per book dropped dramatically.",
    wrongAnswerExplanations: {
      "A": "Other products don't explain book sales revenue.",
      "C": "Competitors not matching should help, not explain decreased revenue.",
      "D": "Rent is a separate expense from revenue.",
      "E": "Multiple copies would increase units sold and revenue."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-034",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Either we must accept some restrictions on internet freedom or we must tolerate increased cybercrime. Since we cannot tolerate increased cybercrime, we must accept restrictions on internet freedom.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes without justification that these are the only two options" },
      { letter: "B", text: "fails to define what counts as a restriction on internet freedom" },
      { letter: "C", text: "ignores the possibility that cybercrime might decrease without restrictions" },
      { letter: "D", text: "relies on an appeal to fear rather than logical reasoning" },
      { letter: "E", text: "does not consider who would impose the restrictions" }
    ],
    correctAnswer: "A",
    explanation: "This is a false dilemma. The argument presents only two options when others might exist (like better technology, education, or international cooperation to fight cybercrime without restricting freedom).",
    wrongAnswerExplanations: {
      "B": "Definition issues are secondary to the false dilemma.",
      "C": "This is subsumed under the false dilemma—other options exist.",
      "D": "There's some emotional appeal, but the main flaw is logical.",
      "E": "Who imposes restrictions isn't the core logical flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-035",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Art historians believe that a recently discovered painting is the work of the Renaissance master Caravaggio. The painting's style, subject matter, and use of light are consistent with Caravaggio's known works.`,
    questionStem: "Which one of the following, if true, most strengthens the attribution to Caravaggio?",
    answerChoices: [
      { letter: "A", text: "The painting is of a subject that Caravaggio was known to find interesting" },
      { letter: "B", text: "Analysis of the canvas and pigments shows they are from materials available only in Rome during Caravaggio's lifetime" },
      { letter: "C", text: "The painting was found in a collection that once belonged to one of Caravaggio's patrons" },
      { letter: "D", text: "Other paintings attributed to Caravaggio have sometimes been found to be copies" },
      { letter: "E", text: "Caravaggio's style influenced many later artists" }
    ],
    correctAnswer: "C",
    explanation: "Provenance connecting the painting to Caravaggio's patron provides strong circumstantial evidence supporting the attribution beyond just stylistic similarity.",
    wrongAnswerExplanations: {
      "A": "Subject interest is already mentioned (subject matter consistency).",
      "B": "Rome materials show the right era/place but not specifically Caravaggio.",
      "D": "This actually casts doubt on attributions generally.",
      "E": "His influence means others could have painted in his style."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-036",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Some argue that social media has damaged democracy by enabling the rapid spread of misinformation. While this concern has merit, social media has also allowed marginalized voices to be heard, enabled rapid organization of social movements, and increased political participation among young people. On balance, social media has been a net positive for democratic participation.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Social media spreads misinformation" },
      { letter: "B", text: "Social media amplifies marginalized voices" },
      { letter: "C", text: "Social media's benefits for democracy outweigh its drawbacks" },
      { letter: "D", text: "Young people are more politically engaged because of social media" },
      { letter: "E", text: "Social movements can organize more quickly through social media" }
    ],
    correctAnswer: "C",
    explanation: "The main conclusion is 'on balance, social media has been a net positive for democratic participation.' This is the overall judgment the argument reaches after weighing pros and cons.",
    wrongAnswerExplanations: {
      "A": "This is an acknowledged concern, not the conclusion.",
      "B": "This is one of the benefits cited, not the main conclusion.",
      "D": "This is supporting evidence.",
      "E": "This is supporting evidence."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-037",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The historical society awards its annual preservation prize only to buildings that meet all three criteria: they must be at least 100 years old, must retain original architectural features, and must currently be in active use. This year's prize was awarded to the Morrison Building.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "The Morrison Building is the oldest building in the city" },
      { letter: "B", text: "The Morrison Building was built before 1925" },
      { letter: "C", text: "The Morrison Building has never been renovated" },
      { letter: "D", text: "No building that has lost its original features can win the prize" },
      { letter: "E", text: "All buildings over 100 years old that are in use will eventually win the prize" }
    ],
    correctAnswer: "D",
    explanation: "The prize requires retaining original features. A building that lost its original features cannot meet this criterion, so it cannot win the prize.",
    wrongAnswerExplanations: {
      "A": "The prize doesn't require being the oldest, just 100+ years.",
      "B": "We don't know when the current year is relative to the Morrison Building's construction.",
      "C": "Renovation doesn't necessarily mean losing original features.",
      "E": "Meeting criteria doesn't guarantee winning; there might be selection among eligible buildings."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-038",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A pharmaceutical company argues that its new drug is safe because extensive clinical trials showed no serious adverse effects. The company tested the drug on 5,000 patients over a two-year period.`,
    questionStem: "Which one of the following would be most important to know in evaluating the company's claim about the drug's safety?",
    answerChoices: [
      { letter: "A", text: "Whether the company has developed other safe drugs in the past" },
      { letter: "B", text: "Whether any adverse effects might only appear after more than two years of use" },
      { letter: "C", text: "Whether patients in the trial were paid for their participation" },
      { letter: "D", text: "How the drug compares in effectiveness to existing treatments" },
      { letter: "E", text: "Whether the drug has been approved by regulatory authorities" }
    ],
    correctAnswer: "B",
    explanation: "Long-term effects wouldn't appear in a two-year trial. Knowing whether adverse effects could emerge later is crucial for evaluating overall safety.",
    wrongAnswerExplanations: {
      "A": "Past successes don't guarantee this drug's safety.",
      "C": "Payment might affect recruitment but not safety outcomes.",
      "D": "Effectiveness is separate from safety.",
      "E": "Regulatory approval is relevant but based on the same evidence."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-039",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Proponents of year-round schooling argue that it prevents the 'summer slide'—the learning loss students experience during long summer breaks. They cite studies showing that year-round students score higher on tests given in fall than students from traditional schools.`,
    questionStem: "Which one of the following, if true, most weakens the proponents' argument?",
    answerChoices: [
      { letter: "A", text: "Year-round schools often cost more to operate than traditional schools" },
      { letter: "B", text: "Many teachers prefer the traditional school calendar" },
      { letter: "C", text: "Year-round schools schedule tests in fall before students have had their longest break" },
      { letter: "D", text: "Some students in traditional schools attend summer learning programs" },
      { letter: "E", text: "Year-round schooling has been implemented in several countries" }
    ],
    correctAnswer: "C",
    explanation: "If year-round tests occur before the longest break, they don't measure summer slide at all. The comparison is unfair because it tests year-round students before their equivalent of 'summer' break.",
    wrongAnswerExplanations: {
      "A": "Cost doesn't address whether year-round prevents learning loss.",
      "B": "Teacher preferences don't affect educational outcomes.",
      "D": "Some summer programs don't explain the general test score difference.",
      "E": "International implementation doesn't address the evidence's validity."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-040",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Parents who limit their children's screen time are acting wisely. Children who spend less time on screens tend to have better physical health, better sleep, and better academic performance. Every parent should therefore eliminate screen time entirely for their children.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that what is beneficial in moderation is beneficial in extreme" },
      { letter: "B", text: "relies on correlation to establish causation" },
      { letter: "C", text: "appeals to authority without establishing credentials" },
      { letter: "D", text: "fails to consider the views of children themselves" },
      { letter: "E", text: "confuses necessary and sufficient conditions" }
    ],
    correctAnswer: "A",
    explanation: "The argument jumps from 'limiting screen time is good' to 'eliminating screen time entirely is best.' This assumes more restriction is always better, ignoring that some screen time might be beneficial.",
    wrongAnswerExplanations: {
      "B": "While correlation/causation is a potential issue, the main flaw is the extreme conclusion.",
      "C": "No authority figure is cited.",
      "D": "Children's views aren't the logical flaw.",
      "E": "Necessary/sufficient isn't the primary issue here."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-041",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `A wildlife reserve is considering reintroducing wolves to help control the deer population, which has grown so large that deer are destroying vegetation and causing erosion. Conservationists argue that wolf reintroduction will restore ecological balance.`,
    questionStem: "Which one of the following, if true, most strengthens the conservationists' argument?",
    answerChoices: [
      { letter: "A", text: "Wolves are a native species that were hunted to local extinction 80 years ago" },
      { letter: "B", text: "In Yellowstone, wolf reintroduction reduced deer overgrazing and allowed vegetation to recover" },
      { letter: "C", text: "Some local ranchers oppose wolf reintroduction" },
      { letter: "D", text: "Deer populations can also be controlled through hunting permits" },
      { letter: "E", text: "Wolves primarily hunt elk rather than deer in most ecosystems" }
    ],
    correctAnswer: "B",
    explanation: "Yellowstone provides direct evidence that wolf reintroduction can achieve the desired ecological outcome—reduced overgrazing and vegetation recovery.",
    wrongAnswerExplanations: {
      "A": "Native status supports reintroduction ethically but doesn't prove it will restore balance.",
      "C": "Rancher opposition is irrelevant to ecological effectiveness.",
      "D": "Hunting alternatives don't strengthen wolf reintroduction specifically.",
      "E": "This actually weakens the argument—if wolves prefer elk, they might not control deer."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-042",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The city's new noise ordinance will improve quality of life for residents. The ordinance prohibits loud music after 10 PM, and residents have consistently complained about nighttime noise from venues and parties.`,
    questionStem: "The argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "The noise ordinance will be enforced effectively" },
      { letter: "B", text: "Loud music is the only source of noise complaints" },
      { letter: "C", text: "All residents support the new ordinance" },
      { letter: "D", text: "The ordinance will eliminate all nighttime noise" },
      { letter: "E", text: "Quality of life was poor before the ordinance" }
    ],
    correctAnswer: "A",
    explanation: "For the ordinance to improve quality of life, it must actually reduce noise. This requires enforcement. Without effective enforcement, the law won't change behavior.",
    wrongAnswerExplanations: {
      "B": "The ordinance can help even if other noise sources exist.",
      "C": "Universal support isn't necessary for the ordinance to help.",
      "D": "Elimination isn't required—just improvement.",
      "E": "Quality of life can improve even if it wasn't 'poor' before."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-043",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Professor Smith: Historical research should focus primarily on political events and decisions by leaders, as these have the greatest impact on the course of history.

Professor Jones: That view is outdated. Social and economic conditions shape the lives of ordinary people far more than the decisions of leaders. Historical research should center on understanding these conditions.`,
    questionStem: "The professors' statements provide the most support for the claim that they disagree about",
    answerChoices: [
      { letter: "A", text: "whether history is an important field of study" },
      { letter: "B", text: "what should be the primary focus of historical research" },
      { letter: "C", text: "whether political decisions ever affect ordinary people" },
      { letter: "D", text: "the qualifications needed for historical research" },
      { letter: "E", text: "whether the views of ordinary people should be studied" }
    ],
    correctAnswer: "B",
    explanation: "Smith says focus on political events/leaders; Jones says focus on social/economic conditions. They directly disagree about what should be the primary focus of historical research.",
    wrongAnswerExplanations: {
      "A": "Both clearly value history; they disagree about focus, not importance.",
      "C": "Smith would agree politics affects people; Jones doesn't deny this.",
      "D": "Neither discusses qualifications.",
      "E": "Jones focuses on conditions affecting people, not necessarily their views."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-044",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A company's customer satisfaction scores improved significantly after it reduced its customer service staff by 25%. Management had expected satisfaction to decline with fewer service representatives available.`,
    questionStem: "Which one of the following, if true, most helps explain the unexpected improvement?",
    answerChoices: [
      { letter: "A", text: "Customer satisfaction surveys were redesigned during the same period" },
      { letter: "B", text: "The remaining staff were the company's most skilled representatives, and the reduction eliminated only the poorest performers" },
      { letter: "C", text: "The company's products became more popular after the staff reduction" },
      { letter: "D", text: "Other companies in the industry also reduced their customer service staff" },
      { letter: "E", text: "Customer service calls decreased by 10% during this period" }
    ],
    correctAnswer: "B",
    explanation: "If the staff reduction eliminated only poor performers, the remaining team's average quality improved. Customers now interact with more skilled representatives, increasing satisfaction despite fewer staff.",
    wrongAnswerExplanations: {
      "A": "Survey redesign might explain different scores but not genuine improvement.",
      "C": "Product popularity doesn't explain service satisfaction.",
      "D": "Industry trends don't explain this company's improvement.",
      "E": "Fewer calls don't explain higher satisfaction with the calls that do occur."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-045",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Athlete: People say that performance-enhancing drugs should be banned because they give users an unfair advantage. But the same could be said about expensive training facilities, personal coaches, and high-altitude training camps—all of which are available only to wealthy athletes. If we ban drugs for creating advantages, we should ban these resources too, which is absurd. Therefore, the argument for banning performance-enhancing drugs fails.`,
    questionStem: "The athlete's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "showing that the reasoning used to support a position leads to unacceptable conclusions" },
      { letter: "B", text: "questioning the motives of those who oppose performance-enhancing drugs" },
      { letter: "C", text: "providing evidence that performance-enhancing drugs are not actually effective" },
      { letter: "D", text: "arguing that rules against drugs cannot be enforced consistently" },
      { letter: "E", text: "demonstrating that banning drugs would harm athletes' careers" }
    ],
    correctAnswer: "A",
    explanation: "This is a reductio ad absurdum. The athlete shows that the 'unfair advantage' reasoning, if applied consistently, would require banning obviously acceptable things, making the original argument absurd.",
    wrongAnswerExplanations: {
      "B": "Motives aren't questioned; the logic is challenged.",
      "C": "Drug effectiveness isn't discussed.",
      "D": "Enforcement isn't the focus.",
      "E": "Career harm isn't mentioned."
    },
    difficulty: "hard"
  },
  {
    id: "lr6-046",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A company's top salesperson consistently used aggressive tactics that bordered on harassment. Despite customer complaints, management did not discipline the salesperson because their sales numbers were exceptional. Eventually, the salesperson's behavior resulted in a lawsuit against the company.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify criticism of the company's management?",
    answerChoices: [
      { letter: "A", text: "Companies should prioritize long-term reputation over short-term profits" },
      { letter: "B", text: "All employees should be held to the same standards regardless of their performance" },
      { letter: "C", text: "Sales targets should not be the only measure of employee success" },
      { letter: "D", text: "Customer complaints should always result in employee termination" },
      { letter: "E", text: "Companies are not responsible for the actions of individual employees" }
    ],
    correctAnswer: "B",
    explanation: "Management failed to discipline a high performer despite complaints. The principle that all employees should be held to the same standards regardless of performance directly criticizes this favoritism.",
    wrongAnswerExplanations: {
      "A": "While relevant, this focuses on financial consequences, not the ethical issue.",
      "C": "This is true but doesn't capture the discipline failure.",
      "D": "This is too extreme—not all complaints warrant termination.",
      "E": "This would absolve the company, not justify criticism."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-047",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The library's budget allows for purchasing either 200 new fiction books or 150 new non-fiction books per year, but not both. This year, the library purchased 180 new books, none of which were non-fiction.`,
    questionStem: "If the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "The library has a larger fiction collection than non-fiction collection" },
      { letter: "B", text: "The library did not spend its entire book budget this year" },
      { letter: "C", text: "Next year the library will purchase non-fiction books" },
      { letter: "D", text: "Fiction books cost less than non-fiction books" },
      { letter: "E", text: "The library patrons prefer fiction to non-fiction" }
    ],
    correctAnswer: "B",
    explanation: "The budget allows for 200 fiction books. The library bought 180 fiction books. Since they could have bought 200 but bought only 180, they didn't spend the full book budget.",
    wrongAnswerExplanations: {
      "A": "We have no information about the existing collection sizes.",
      "C": "We can't predict next year's purchases.",
      "D": "The budget figures suggest non-fiction costs more, not less, but we can't be certain.",
      "E": "We have no information about patron preferences."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-048",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `A fitness company claims that its new workout program produces faster results than competing programs. The company's study showed that participants lost an average of 15 pounds in 8 weeks on its program, compared to 10 pounds in 8 weeks on competitor programs.`,
    questionStem: "Which one of the following, if true, most weakens the company's claim?",
    answerChoices: [
      { letter: "A", text: "The company's program is more expensive than competitor programs" },
      { letter: "B", text: "Some participants in the company's program reported difficulty completing the workouts" },
      { letter: "C", text: "Participants in the company's study had a higher average starting weight than those in the competitor studies" },
      { letter: "D", text: "The company's program includes both exercise and dietary changes" },
      { letter: "E", text: "The company's study included more participants than competitor studies" }
    ],
    correctAnswer: "C",
    explanation: "People with higher starting weight typically lose weight faster initially. If the company's participants started heavier, the extra weight loss might reflect starting conditions, not program effectiveness.",
    wrongAnswerExplanations: {
      "A": "Cost doesn't affect whether results are faster.",
      "B": "Difficulty doesn't undermine the results achieved.",
      "D": "Including diet might explain effectiveness but doesn't weaken the claim.",
      "E": "More participants typically makes findings more reliable."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-049",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Journalist: The mayor claims the city's economy is improving because unemployment has dropped. But unemployment figures don't account for people who have stopped looking for work. The economy may actually be weakening as discouraged workers give up. Therefore, the economy is definitely not improving.`,
    questionStem: "The journalist's reasoning is flawed because it",
    answerChoices: [
      { letter: "A", text: "presents a possible alternative explanation as a definitive conclusion" },
      { letter: "B", text: "fails to provide evidence that discouraged workers exist" },
      { letter: "C", text: "assumes the mayor has access to better economic data" },
      { letter: "D", text: "ignores other indicators of economic health beyond unemployment" },
      { letter: "E", text: "attacks the mayor personally rather than addressing the argument" }
    ],
    correctAnswer: "A",
    explanation: "The journalist moves from 'the economy may actually be weakening' to 'the economy is definitely not improving.' A possible alternative interpretation doesn't prove the opposite conclusion definitely.",
    wrongAnswerExplanations: {
      "B": "The journalist raises discouraged workers as a possibility, not as proven fact.",
      "C": "The journalist doesn't assume this.",
      "D": "While true, this isn't the main flaw in the logic.",
      "E": "There's no personal attack on the mayor."
    },
    difficulty: "medium"
  },
  {
    id: "lr6-050",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Astronomers believe they have detected signs of water ice on a distant planet's moon. The spectral analysis of light reflected from the moon's surface shows patterns consistent with water ice. They conclude that the moon likely has water ice on its surface.`,
    questionStem: "Which one of the following, if true, most strengthens the astronomers' conclusion?",
    answerChoices: [
      { letter: "A", text: "The parent planet of the moon has been observed to have a dense atmosphere" },
      { letter: "B", text: "No other known substance produces the same spectral patterns as water ice" },
      { letter: "C", text: "Water ice has been confirmed on other moons in our solar system" },
      { letter: "D", text: "The telescope used for the observation is the most powerful available" },
      { letter: "E", text: "The moon's orbit suggests it has a stable surface temperature" }
    ],
    correctAnswer: "B",
    explanation: "If no other substance produces the same spectral patterns, then detecting those patterns strongly indicates water ice specifically. This eliminates alternative explanations for the data.",
    wrongAnswerExplanations: {
      "A": "The parent planet's atmosphere doesn't affect the moon's surface composition.",
      "C": "Ice elsewhere doesn't prove it's on this moon.",
      "D": "Telescope power supports data quality but not the specific conclusion.",
      "E": "Stable temperature is consistent with ice but doesn't prove it."
    },
    difficulty: "medium"
  }
];
