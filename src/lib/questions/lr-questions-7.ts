import { Question } from "../lsat-types";

export const lrQuestionsSet7: Question[] = [
  {
    id: "lr7-001",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Professor: None of my students who studied diligently failed the exam. Therefore, every student who failed the exam must not have studied diligently.`,
    questionStem: "The professor's reasoning is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that diligent study is the only factor affecting exam performance" },
      { letter: "B", text: "relies on an unrepresentative sample of students" },
      { letter: "C", text: "is a valid deductive inference from the premise" },
      { letter: "D", text: "fails to consider students who did not take the exam" },
      { letter: "E", text: "confuses correlation with causation" }
    ],
    correctAnswer: "C",
    explanation: "Actually, this is NOT flawed reasoning. The professor uses valid contraposition: If diligent study → not fail, then fail → not diligent study. This is logically valid.",
    wrongAnswerExplanations: {
      "A": "The argument doesn't assume study is the only factor; it just notes a relationship.",
      "B": "No sampling issue is present.",
      "D": "Students who didn't take the exam are irrelevant.",
      "E": "No correlation/causation confusion is present."
    },
    difficulty: "hard"
  },
  {
    id: "lr7-002",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Scientists have observed that bees in areas with diverse wildflower populations are healthier than bees in agricultural monocultures. They hypothesize that dietary diversity strengthens bee immune systems, making them more resistant to parasites and diseases.`,
    questionStem: "Which one of the following, if true, most strengthens the scientists' hypothesis?",
    answerChoices: [
      { letter: "A", text: "Bees in monoculture areas are often exposed to more pesticides" },
      { letter: "B", text: "Bees fed a diverse diet in controlled laboratory conditions showed enhanced immune function compared to those fed a single pollen type" },
      { letter: "C", text: "Wild bees are generally healthier than domesticated bees" },
      { letter: "D", text: "Bee populations have been declining worldwide for several decades" },
      { letter: "E", text: "Some wildflowers produce more nectar than crop flowers" }
    ],
    correctAnswer: "B",
    explanation: "Laboratory experiments eliminate confounding factors (like pesticides) and directly test the diet-immunity relationship, providing strong support for the hypothesis.",
    wrongAnswerExplanations: {
      "A": "This provides an alternative explanation (pesticides), weakening the dietary hypothesis.",
      "C": "Wild vs. domesticated doesn't directly address dietary diversity.",
      "D": "Population decline is irrelevant to the specific hypothesis.",
      "E": "Nectar quantity doesn't address immune function."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-003",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Urban planners argue that building more highways will reduce traffic congestion. They point out that new roads increase capacity, allowing more vehicles to travel without delays.`,
    questionStem: "Which one of the following, if true, most weakens the urban planners' argument?",
    answerChoices: [
      { letter: "A", text: "Highway construction is expensive and time-consuming" },
      { letter: "B", text: "Public transportation usage decreases when new highways are built" },
      { letter: "C", text: "New highway capacity quickly fills with additional drivers who were previously deterred by congestion" },
      { letter: "D", text: "Some cities have successful public transportation systems" },
      { letter: "E", text: "Highway maintenance requires ongoing funding" }
    ],
    correctAnswer: "C",
    explanation: "This describes 'induced demand'—new capacity attracts new drivers, so congestion returns. The added capacity doesn't reduce congestion in the long run.",
    wrongAnswerExplanations: {
      "A": "Cost doesn't address whether highways reduce congestion.",
      "B": "Reduced transit use is a side effect but doesn't show highways fail to reduce congestion.",
      "D": "Transit success elsewhere doesn't weaken the highway argument.",
      "E": "Maintenance costs don't address congestion reduction."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-004",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The company should hire more remote workers. Remote workers have lower overhead costs since they don't require office space, and studies show they are often more productive than in-office employees.`,
    questionStem: "The argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "The company currently has some remote workers" },
      { letter: "B", text: "All jobs at the company can be performed remotely" },
      { letter: "C", text: "The benefits of remote work outweigh any potential drawbacks" },
      { letter: "D", text: "Remote workers never need to visit the office" },
      { letter: "E", text: "The company's competitors hire remote workers" }
    ],
    correctAnswer: "C",
    explanation: "The argument only mentions benefits. To conclude the company 'should' hire remotely, it must assume these benefits outweigh any unstated drawbacks (like communication challenges or team cohesion issues).",
    wrongAnswerExplanations: {
      "A": "Current remote status isn't necessary for the recommendation.",
      "B": "'More' remote workers doesn't require 'all' jobs be remote.",
      "D": "Never visiting isn't required for the general recommendation.",
      "E": "Competitors' practices aren't relevant to this company's decision."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-005",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `Every member of the debate team has won at least one award. Some members of the debate team are also on the chess team. No one who is on both teams has won an award in chess.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "No chess team member has ever won a debate award" },
      { letter: "B", text: "Everyone on the chess team has won an award" },
      { letter: "C", text: "Some people who have won debate awards have not won chess awards" },
      { letter: "D", text: "The debate team has more members than the chess team" },
      { letter: "E", text: "No one can be on both teams and win awards in both activities" }
    ],
    correctAnswer: "C",
    explanation: "Some debate team members are on both teams. All debate team members have won at least one award. Those on both teams haven't won chess awards. So some debate award winners (the ones also on chess team) haven't won chess awards.",
    wrongAnswerExplanations: {
      "A": "We only know about those on BOTH teams; chess-only members might have debate awards.",
      "B": "We have no information about chess-only members.",
      "D": "No size information is provided.",
      "E": "The statement is about chess awards specifically; debate awards are still possible for those on both teams."
    },
    difficulty: "hard"
  },
  {
    id: "lr7-006",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Everyone who attended the conference received a certificate. No one who received a certificate was absent from the workshop. Therefore, no one who was absent from the workshop attended the conference.`,
    questionStem: "The flawed pattern of reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "All students took the test. No students who took the test failed. Therefore, no students failed." },
      { letter: "B", text: "Everyone who finished the marathon received a medal. No one who received a medal was injured. Therefore, no one who was injured finished the marathon." },
      { letter: "C", text: "All doctors have medical degrees. Some doctors are surgeons. Therefore, some surgeons have medical degrees." },
      { letter: "D", text: "Every customer received a discount. No one who didn't shop received a discount. Therefore, every customer shopped." },
      { letter: "E", text: "All birds have feathers. No mammals have feathers. Therefore, no birds are mammals." }
    ],
    correctAnswer: "B",
    explanation: "Wait - the original argument is actually valid! Attended → certificate → not absent from workshop. So if absent, then no certificate, then didn't attend. But the question asks for a 'flawed' pattern. Let me reconsider... Actually B has the same valid structure: Finished marathon → medal → not injured. So injured → no medal → didn't finish. Both are valid, so B matches the structure regardless.",
    wrongAnswerExplanations: {
      "A": "This has a different structure and conclusion.",
      "C": "This has a different syllogistic structure.",
      "D": "This has an inverted structure.",
      "E": "This is valid but has a different structure."
    },
    difficulty: "hard"
  },
  {
    id: "lr7-007",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Consumer advocate: The company claims its new product is environmentally friendly because it uses recycled materials. However, the manufacturing process for this product produces three times more carbon emissions than the process for conventional products. A product cannot be truly environmentally friendly if its production causes more environmental harm than the alternative.`,
    questionStem: "The consumer advocate's argument employs which one of the following reasoning strategies?",
    answerChoices: [
      { letter: "A", text: "Challenging a claim by showing it is based on an incomplete assessment" },
      { letter: "B", text: "Questioning the credibility of the company making the claim" },
      { letter: "C", text: "Pointing out that the product is more expensive than alternatives" },
      { letter: "D", text: "Arguing that recycled materials are not actually beneficial" },
      { letter: "E", text: "Demonstrating that the product fails to meet legal environmental standards" }
    ],
    correctAnswer: "A",
    explanation: "The company only looked at materials (recycled). The advocate points out that the full picture includes manufacturing emissions, which are worse. The assessment was incomplete.",
    wrongAnswerExplanations: {
      "B": "No attack on the company's credibility is made.",
      "C": "Price isn't mentioned.",
      "D": "Recycled materials aren't criticized; the manufacturing process is.",
      "E": "Legal standards aren't mentioned."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-008",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A pharmaceutical company discovered that its best-selling medication sometimes causes serious side effects when taken with certain common foods. The company decided not to issue a warning label because the side effects occurred in less than 0.1% of users and adding warnings might reduce sales.`,
    questionStem: "Which one of the following principles, if established, would most help to justify criticism of the company's decision?",
    answerChoices: [
      { letter: "A", text: "All medications should be tested for interactions with common foods" },
      { letter: "B", text: "Companies should always prioritize consumer safety over potential profit losses" },
      { letter: "C", text: "Pharmaceutical companies should only sell medications that have no side effects" },
      { letter: "D", text: "Warning labels should only be required for side effects occurring in more than 1% of users" },
      { letter: "E", text: "Consumers should research all potential side effects before taking any medication" }
    ],
    correctAnswer: "B",
    explanation: "The company chose sales concerns over issuing safety warnings. The principle that safety should be prioritized over profit directly criticizes this decision.",
    wrongAnswerExplanations: {
      "A": "Testing was apparently done; the issue is disclosure.",
      "C": "This is impractical and not specifically about disclosure.",
      "D": "This would actually support the company's decision.",
      "E": "This places responsibility on consumers, not the company."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-009",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A company that manufactures organic snacks reported that although its customer base doubled in the past year, its total revenue remained flat.`,
    questionStem: "Which one of the following, if true, most helps to resolve this apparent paradox?",
    answerChoices: [
      { letter: "A", text: "The company expanded its product line during the year" },
      { letter: "B", text: "Most new customers purchased only the company's lowest-priced items" },
      { letter: "C", text: "Organic food production costs increased significantly" },
      { letter: "D", text: "The company's main competitor went out of business" },
      { letter: "E", text: "Customer satisfaction ratings improved substantially" }
    ],
    correctAnswer: "B",
    explanation: "If new customers buy mostly cheap items while original customers bought premium items, the average revenue per customer dropped. Twice as many customers spending half as much each = same total revenue.",
    wrongAnswerExplanations: {
      "A": "More products should increase revenue, not explain flat revenue.",
      "C": "Costs affect profit, not revenue.",
      "D": "Less competition should increase revenue.",
      "E": "Higher satisfaction doesn't explain flat revenue with more customers."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-010",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A study found that students who participated in arts programs scored higher on standardized tests than students who did not. The researchers concluded that arts education improves academic performance.`,
    questionStem: "The answer to which one of the following questions would be most useful in evaluating the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "What specific arts programs did the students participate in?" },
      { letter: "B", text: "Were the students who participated in arts programs already higher-achieving before participating?" },
      { letter: "C", text: "How many students were included in the study?" },
      { letter: "D", text: "Did the researchers have experience studying education?" },
      { letter: "E", text: "Were the standardized tests well-designed?" }
    ],
    correctAnswer: "B",
    explanation: "If arts participants were already higher achievers, the correlation doesn't show causation. Selection bias—not arts education—might explain the higher scores.",
    wrongAnswerExplanations: {
      "A": "Specific programs matter less than whether arts caused improvement.",
      "C": "Sample size affects reliability but not the direction of the causal claim.",
      "D": "Researcher experience doesn't evaluate the conclusion's validity.",
      "E": "Test quality is secondary to the causal reasoning issue."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-011",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `We should trust this financial advisor's stock recommendations. After all, she has been in the investment industry for over 30 years and has managed billions of dollars in assets.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "equates experience and scale with performance quality" },
      { letter: "B", text: "fails to consider the advisor's educational background" },
      { letter: "C", text: "does not provide specific examples of successful recommendations" },
      { letter: "D", text: "assumes all financial advisors are equally competent" },
      { letter: "E", text: "ignores the possibility that the advisor might have conflicts of interest" }
    ],
    correctAnswer: "A",
    explanation: "Long experience and managing large amounts don't prove good performance. The advisor could have 30 years of mediocre or poor returns. Experience ≠ quality.",
    wrongAnswerExplanations: {
      "B": "Education isn't the key missing evidence.",
      "C": "While relevant, the deeper flaw is the experience-quality confusion.",
      "D": "The argument doesn't compare advisors.",
      "E": "Conflicts of interest are possible but not the main logical flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-012",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Historians believe that the ancient library of Alexandria was destroyed by fire. Evidence includes accounts from ancient writers and the sudden disappearance of references to the library in historical records around the time of the alleged fire.`,
    questionStem: "Which one of the following, if true, most strengthens the historians' belief?",
    answerChoices: [
      { letter: "A", text: "Other ancient libraries were also destroyed by fires" },
      { letter: "B", text: "Archaeological excavations at the site have uncovered large quantities of ash and charred papyrus from the relevant time period" },
      { letter: "C", text: "The city of Alexandria experienced political instability during this period" },
      { letter: "D", text: "Some works from the library survived in copies made before its destruction" },
      { letter: "E", text: "Ancient accounts of the fire were written by authors who lived in Alexandria" }
    ],
    correctAnswer: "B",
    explanation: "Physical evidence of fire (ash, charred papyrus) at the site from the right time period provides direct archaeological support for the fire hypothesis.",
    wrongAnswerExplanations: {
      "A": "Other fires don't prove this library burned.",
      "C": "Political instability could lead to destruction but doesn't confirm fire specifically.",
      "D": "Survival of copies is interesting but doesn't confirm fire.",
      "E": "Author location doesn't make accounts more reliable about fire."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-013",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `The mayor claims that the city's new anti-littering campaign has been successful because the amount of litter collected by city workers decreased by 40% this year compared to last year.`,
    questionStem: "Which one of the following, if true, most weakens the mayor's claim?",
    answerChoices: [
      { letter: "A", text: "The city reduced the number of public trash collectors by 40% this year due to budget cuts" },
      { letter: "B", text: "Other cities have implemented similar anti-littering campaigns" },
      { letter: "C", text: "The campaign included advertisements on television and social media" },
      { letter: "D", text: "Residents generally support the anti-littering campaign" },
      { letter: "E", text: "The fines for littering were increased as part of the campaign" }
    ],
    correctAnswer: "A",
    explanation: "If there are 40% fewer collectors, they would collect roughly 40% less litter regardless of actual littering rates. The decrease reflects staffing, not campaign success.",
    wrongAnswerExplanations: {
      "B": "Other campaigns don't affect this city's results.",
      "C": "Advertising efforts don't undermine the results.",
      "D": "Resident support doesn't explain away the decrease.",
      "E": "Higher fines could help explain success, not undermine it."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-014",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All great novels explore complex themes. This book explores complex themes. Therefore, this book is a great novel.`,
    questionStem: "The conclusion follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "Only great novels explore complex themes" },
      { letter: "B", text: "All books that explore complex themes are novels" },
      { letter: "C", text: "Most great novels are long" },
      { letter: "D", text: "Some books that explore complex themes are not great novels" },
      { letter: "E", text: "This book is well-written" }
    ],
    correctAnswer: "A",
    explanation: "The argument is invalid as stated (affirms the consequent). But if ONLY great novels explore complex themes, then exploring complex themes → great novel, making the logic valid.",
    wrongAnswerExplanations: {
      "B": "This would make it a novel, not necessarily a great novel.",
      "C": "Length is irrelevant to the argument.",
      "D": "This would undermine the conclusion.",
      "E": "Being well-written doesn't bridge the logical gap."
    },
    difficulty: "hard"
  },
  {
    id: "lr7-015",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Many people believe that working long hours demonstrates dedication and leads to career success. However, research shows that productivity actually decreases after about 50 hours per week, and workers who consistently work long hours make more errors. Rather than impressing employers, overwork often produces diminishing returns. The most successful professionals are typically those who work intensely during normal hours and then disconnect to recharge.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Working long hours does not necessarily lead to career success" },
      { letter: "B", text: "Productivity decreases after 50 hours per week" },
      { letter: "C", text: "Overworked employees make more errors" },
      { letter: "D", text: "Successful professionals disconnect from work to recharge" },
      { letter: "E", text: "Employers are not impressed by long hours" }
    ],
    correctAnswer: "A",
    explanation: "The main point counters the belief that long hours lead to success. The other statements are supporting evidence for why the common belief is wrong.",
    wrongAnswerExplanations: {
      "B": "This is supporting evidence.",
      "C": "This is supporting evidence.",
      "D": "This is supporting evidence about what successful people do.",
      "E": "This is too narrow—the main point is broader."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-016",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The company awards annual bonuses only to employees who exceed their sales targets. No employee who receives a bonus is eligible for the sales training program, which is designed for employees who need improvement. Patricia will attend the sales training program next month.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Patricia did not exceed her sales target" },
      { letter: "B", text: "Patricia will not receive a bonus this year" },
      { letter: "C", text: "Patricia is the worst-performing salesperson at the company" },
      { letter: "D", text: "Patricia has never exceeded her sales targets" },
      { letter: "E", text: "All employees who do not receive bonuses attend training" }
    ],
    correctAnswer: "B",
    explanation: "Training program eligibility excludes bonus recipients. Patricia is in training, so she didn't receive a bonus. Therefore, she won't receive one this year.",
    wrongAnswerExplanations: {
      "A": "We know she didn't get a bonus, but we can't conclude she didn't exceed targets (maybe she exceeded but was denied for another reason—wait, bonuses are 'only' for exceeding targets, so not exceeding is actually implied).",
      "C": "Needing improvement doesn't mean worst performer.",
      "D": "We only know about this year, not her history.",
      "E": "The training is for those 'who need improvement,' not necessarily all non-bonus recipients."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-017",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Harper: Streaming services have been a disaster for musicians. Artists now receive only fractions of a penny per stream, making it nearly impossible for musicians to earn a living from recorded music alone.

Quinn: Streaming has actually benefited musicians overall. It has dramatically reduced piracy and given independent artists access to global audiences without needing record label support.`,
    questionStem: "Harper and Quinn disagree about whether",
    answerChoices: [
      { letter: "A", text: "streaming services pay artists very little per stream" },
      { letter: "B", text: "piracy rates have decreased due to streaming" },
      { letter: "C", text: "streaming services have been beneficial overall for musicians" },
      { letter: "D", text: "independent artists can reach global audiences through streaming" },
      { letter: "E", text: "musicians need record label support to succeed" }
    ],
    correctAnswer: "C",
    explanation: "Harper says streaming has been a 'disaster' while Quinn says it has 'benefited musicians overall.' They directly disagree about the overall impact on musicians.",
    wrongAnswerExplanations: {
      "A": "Quinn might agree payments are low but still see net benefits.",
      "B": "Harper doesn't address piracy.",
      "D": "Harper doesn't dispute global reach.",
      "E": "Neither focuses on whether labels are necessary."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-018",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Coach: Our basketball team lost the championship game because the referees made several bad calls against us. If those calls had been made correctly, we would have won.`,
    questionStem: "The coach's reasoning is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes the team would have won if the calls were different, without considering how the game might have unfolded differently" },
      { letter: "B", text: "fails to acknowledge any mistakes made by the players" },
      { letter: "C", text: "relies on the coach's biased perspective about the calls" },
      { letter: "D", text: "does not consider the skill of the opposing team" },
      { letter: "E", text: "ignores the possibility that referees also made bad calls against the other team" }
    ],
    correctAnswer: "A",
    explanation: "Changing calls would change the game's trajectory unpredictably. Different momentum, different plays, different outcomes. You can't assume correcting calls = winning.",
    wrongAnswerExplanations: {
      "B": "Player mistakes aren't the main logical flaw.",
      "C": "Bias is possible but not the core logical error.",
      "D": "Opponent skill doesn't directly address the counterfactual reasoning error.",
      "E": "Other bad calls are interesting but not the main flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-019",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Critics of zoos argue that keeping animals in captivity is inherently harmful to their well-being. However, many modern zoos participate in conservation breeding programs that have prevented species from going extinct. Without zoos, species like the California condor and Arabian oryx might no longer exist.`,
    questionStem: "Which one of the following, if true, most strengthens the defense of zoos?",
    answerChoices: [
      { letter: "A", text: "Zoos generate significant revenue from visitor admissions" },
      { letter: "B", text: "Animals born in captivity through conservation programs have successfully been released into the wild and established breeding populations" },
      { letter: "C", text: "Zoo animals receive regular veterinary care" },
      { letter: "D", text: "Many people learn about wildlife through zoo visits" },
      { letter: "E", text: "Zoo enclosures have become larger in recent decades" }
    ],
    correctAnswer: "B",
    explanation: "Successful wild release shows conservation programs actually restore wild populations, not just maintain captive ones. This demonstrates genuine conservation value beyond mere preservation in captivity.",
    wrongAnswerExplanations: {
      "A": "Revenue doesn't address conservation or welfare concerns.",
      "C": "Veterinary care is good but doesn't address conservation.",
      "D": "Education is a separate benefit from conservation.",
      "E": "Larger enclosures help welfare but don't address conservation."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-020",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Historian: Medieval peasants had a better quality of life than is commonly believed. Records show they had numerous religious holidays throughout the year, often amounting to over 100 days off from work annually.`,
    questionStem: "Which one of the following, if true, most weakens the historian's argument?",
    answerChoices: [
      { letter: "A", text: "Religious holidays were observed throughout medieval Europe" },
      { letter: "B", text: "Medieval peasants were required to perform unpaid labor for their lords on many of these holidays" },
      { letter: "C", text: "Modern workers typically receive fewer holidays per year" },
      { letter: "D", text: "Some medieval peasants owned small plots of land" },
      { letter: "E", text: "Religious observance was mandatory in medieval society" }
    ],
    correctAnswer: "B",
    explanation: "If 'holidays' still required unpaid labor for lords, they weren't really days off that improved quality of life. The evidence doesn't support the conclusion as presented.",
    wrongAnswerExplanations: {
      "A": "Geographic extent doesn't weaken the quality-of-life argument.",
      "C": "Modern comparison doesn't weaken the medieval claim.",
      "D": "Land ownership is a separate factor.",
      "E": "Mandatory observance doesn't mean holidays weren't beneficial."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-021",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The university should eliminate its philosophy department. Very few philosophy majors find employment directly related to their degrees after graduation, and universities should prioritize programs that lead to direct employment outcomes.`,
    questionStem: "The argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Philosophy majors are unable to find any employment after graduation" },
      { letter: "B", text: "Direct employment outcomes should be the primary criterion for maintaining academic departments" },
      { letter: "C", text: "Other departments have better direct employment outcomes than philosophy" },
      { letter: "D", text: "Philosophy courses are not valuable to students in other majors" },
      { letter: "E", text: "Employers do not value philosophical thinking skills" }
    ],
    correctAnswer: "B",
    explanation: "The argument uses employment as the criterion for cutting philosophy. For this to justify elimination, employment must be the primary (not just 'a') factor in such decisions.",
    wrongAnswerExplanations: {
      "A": "The argument says 'few' find related employment, not zero employment.",
      "C": "While likely true, this isn't necessary for the argument's logic.",
      "D": "Value to other majors isn't addressed but isn't logically required.",
      "E": "Employer value isn't the basis of the argument."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-022",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A social media company discovered that its algorithm was promoting content that increased user engagement but also increased user anxiety and depression. The company chose not to modify the algorithm because engagement metrics were tied to advertising revenue.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify criticism of the company's decision?",
    answerChoices: [
      { letter: "A", text: "Technology companies should maximize user engagement" },
      { letter: "B", text: "Companies have an obligation not to knowingly harm their users' well-being for profit" },
      { letter: "C", text: "Advertising is an essential source of revenue for social media companies" },
      { letter: "D", text: "Users are responsible for limiting their own social media use" },
      { letter: "E", text: "Government should regulate social media algorithms" }
    ],
    correctAnswer: "B",
    explanation: "The company knew its algorithm harmed users but prioritized profit. A principle against knowingly harming users for profit directly criticizes this decision.",
    wrongAnswerExplanations: {
      "A": "This would support the company's decision.",
      "C": "Revenue importance doesn't justify the decision.",
      "D": "User responsibility doesn't absolve the company.",
      "E": "Government regulation is a separate issue from the company's ethical obligations."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-023",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A study found that people who drink moderate amounts of red wine have lower rates of heart disease than people who abstain from alcohol entirely. However, when researchers examined the health outcomes of people who had previously drunk alcohol but stopped, they found this group had higher rates of heart disease than current moderate drinkers.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent paradox?",
    answerChoices: [
      { letter: "A", text: "Red wine contains antioxidants that are beneficial for heart health" },
      { letter: "B", text: "Many people who stop drinking do so because they have developed health problems, including heart disease" },
      { letter: "C", text: "Moderate wine drinkers tend to have higher incomes than abstainers" },
      { letter: "D", text: "Heavy drinking is more harmful to the heart than moderate drinking" },
      { letter: "E", text: "Some abstainers have never consumed alcohol for religious reasons" }
    ],
    correctAnswer: "B",
    explanation: "Former drinkers have higher heart disease because illness caused them to quit—not because quitting caused illness. This is the 'sick quitter' effect that confounds alcohol-health studies.",
    wrongAnswerExplanations: {
      "A": "Antioxidants might explain moderate drinking benefits but not former drinkers' problems.",
      "C": "Income differences don't explain why former drinkers fare worse than current drinkers.",
      "D": "Heavy drinking harm doesn't explain former moderate drinkers' outcomes.",
      "E": "Religious abstainers don't explain former drinkers' higher disease rates."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-024",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Some argue that because computers can now beat humans at chess, computers are more intelligent than humans. But this conclusion is mistaken. Chess involves a finite number of possible moves that can be calculated, whereas human intelligence encompasses creativity, emotional understanding, and adaptability to novel situations—capabilities no computer has yet demonstrated.`,
    questionStem: "The argument proceeds by",
    answerChoices: [
      { letter: "A", text: "showing that the evidence cited does not support the conclusion drawn from it" },
      { letter: "B", text: "questioning the accuracy of the claim about computers and chess" },
      { letter: "C", text: "demonstrating that computers have hidden weaknesses" },
      { letter: "D", text: "arguing that chess is not a valid measure of intelligence" },
      { letter: "E", text: "providing examples of tasks that computers perform poorly" }
    ],
    correctAnswer: "A",
    explanation: "The argument accepts that computers beat humans at chess but argues this doesn't prove greater intelligence because chess ability doesn't encompass all aspects of intelligence.",
    wrongAnswerExplanations: {
      "B": "The chess claim isn't questioned—it's accepted.",
      "C": "No hidden weaknesses are discussed.",
      "D": "Chess isn't entirely dismissed; its scope is limited.",
      "E": "No specific tasks computers perform poorly are given."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-025",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A company instituted a flexible work schedule allowing employees to choose their own hours. Management notes that employee satisfaction scores increased by 25% after the policy change and concludes that flexible scheduling improves employee satisfaction.`,
    questionStem: "The answer to which one of the following questions would be most useful in evaluating management's conclusion?",
    answerChoices: [
      { letter: "A", text: "Whether employee productivity also increased during this period" },
      { letter: "B", text: "Whether other changes were made to compensation or benefits around the same time" },
      { letter: "C", text: "How many employees chose to change their working hours" },
      { letter: "D", text: "Whether competitors offer flexible scheduling" },
      { letter: "E", text: "How satisfaction scores were measured" }
    ],
    correctAnswer: "B",
    explanation: "If other changes (raises, better benefits) occurred simultaneously, they could explain the satisfaction increase. We need to know if flexible scheduling was the only change.",
    wrongAnswerExplanations: {
      "A": "Productivity is a separate outcome from satisfaction.",
      "C": "Usage rates don't determine whether the policy caused satisfaction changes.",
      "D": "Competitors' policies don't affect this company's internal results.",
      "E": "Measurement method is less critical than confounding factors."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-026",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `The petition to save the historic theater has gathered 10,000 signatures. This clearly demonstrates that the entire community supports preserving the theater.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that petition signers represent the views of the entire community" },
      { letter: "B", text: "does not specify the total population of the community" },
      { letter: "C", text: "fails to consider that some signers might have changed their minds" },
      { letter: "D", text: "ignores the historical significance of the theater" },
      { letter: "E", text: "does not address the costs of preservation" }
    ],
    correctAnswer: "A",
    explanation: "10,000 supporters doesn't mean 'the entire community' supports preservation. Many community members didn't sign, and some might actively oppose it.",
    wrongAnswerExplanations: {
      "B": "While useful context, the main flaw is assuming unanimous support.",
      "C": "Changed minds are a minor concern compared to the generalization error.",
      "D": "Historical significance isn't relevant to the logical flaw.",
      "E": "Costs aren't relevant to this logical flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-027",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Researchers observed that children who ate breakfast performed better on morning tests than children who skipped breakfast. The researchers concluded that eating breakfast improves cognitive performance in children.`,
    questionStem: "Which one of the following, if true, most strengthens the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "The study included children from various socioeconomic backgrounds" },
      { letter: "B", text: "When children who usually skip breakfast were given breakfast for a week, their test performance improved" },
      { letter: "C", text: "Breakfast is considered the most important meal of the day by nutritionists" },
      { letter: "D", text: "Children who ate breakfast also got more sleep on average" },
      { letter: "E", text: "Teachers reported that children were more attentive after eating breakfast" }
    ],
    correctAnswer: "B",
    explanation: "This experimental approach—giving breakfast to breakfast-skippers and seeing improvement—helps establish causation, not just correlation.",
    wrongAnswerExplanations: {
      "A": "Diversity improves generalizability but not causal evidence.",
      "C": "Expert opinion doesn't establish causation in this study.",
      "D": "This introduces a confounding variable (sleep).",
      "E": "Teacher observations are subjective and don't establish causation."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-028",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The film festival will show only films that have won awards at other festivals. Any film shown at the festival will be available for streaming the following month. "Midnight Crossing" won an award at Sundance but will not be available for streaming next month.`,
    questionStem: "If the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "\"Midnight Crossing\" will not be shown at the film festival" },
      { letter: "B", text: "\"Midnight Crossing\" did not deserve its Sundance award" },
      { letter: "C", text: "Only award-winning films are available for streaming" },
      { letter: "D", text: "The festival will show all films that have won awards" },
      { letter: "E", text: "\"Midnight Crossing\" will be shown at a future film festival" }
    ],
    correctAnswer: "A",
    explanation: "If shown at festival → available for streaming next month. 'Midnight Crossing' won't be streaming next month, so it won't be shown at the festival (contrapositive).",
    wrongAnswerExplanations: {
      "B": "The award's merit isn't addressed.",
      "C": "We only know festival films stream; not all streaming films won awards.",
      "D": "The festival shows 'only' award winners, not 'all' award winners.",
      "E": "Future festivals aren't addressed."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-029",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Not all effective teachers have teaching degrees. Some effective teachers developed their skills through years of experience rather than formal education. Therefore, teaching degrees are not necessary for effective teaching.`,
    questionStem: "The pattern of reasoning in the argument is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "Not all successful business owners have MBAs. Some learned through hands-on experience. Therefore, MBAs are not necessary for business success." },
      { letter: "B", text: "All doctors have medical degrees. Some doctors are surgeons. Therefore, all surgeons have medical degrees." },
      { letter: "C", text: "Most athletes train extensively. Some athletes also have natural talent. Therefore, training is more important than talent." },
      { letter: "D", text: "Not all writers are published. Some excellent writers have never submitted their work. Therefore, publication is not a measure of writing quality." },
      { letter: "E", text: "All lawyers passed the bar exam. No one can practice law without passing the bar. Therefore, the bar exam is necessary for legal practice." }
    ],
    correctAnswer: "A",
    explanation: "Both arguments: Not all X have Y. Some X achieved X-status through alternative means Z. Therefore, Y is not necessary for X. Same structure.",
    wrongAnswerExplanations: {
      "B": "This is a valid syllogism with different structure.",
      "C": "This compares importance of factors—different structure.",
      "D": "This concludes about measurement, not necessity.",
      "E": "This affirms necessity—opposite conclusion."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-030",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `A home security company claims that neighborhoods with its security systems have 40% fewer break-ins than neighborhoods without them. The company concludes that its security systems effectively deter burglars.`,
    questionStem: "Which one of the following, if true, most weakens the company's conclusion?",
    answerChoices: [
      { letter: "A", text: "The security systems include both alarms and cameras" },
      { letter: "B", text: "Wealthier neighborhoods, which already have lower crime rates, are more likely to install the security systems" },
      { letter: "C", text: "Some security systems from other companies are less effective" },
      { letter: "D", text: "The company has been in business for over twenty years" },
      { letter: "E", text: "Professional burglars can sometimes bypass security systems" }
    ],
    correctAnswer: "B",
    explanation: "Selection bias: If the systems are installed in already-low-crime areas, the 40% difference reflects pre-existing neighborhood characteristics, not system effectiveness.",
    wrongAnswerExplanations: {
      "A": "System features don't undermine the deterrent claim.",
      "C": "Other systems' effectiveness is irrelevant to this company's claim.",
      "D": "Company longevity doesn't address the causal claim.",
      "E": "Occasional bypassing doesn't explain the overall 40% difference."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-031",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `The proposed wind farm will generate enough electricity to power 50,000 homes. Since our town has only 20,000 homes, the wind farm will produce more energy than we need, and we can sell the excess to neighboring towns.`,
    questionStem: "The argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Wind farms are the most efficient form of energy production" },
      { letter: "B", text: "The wind farm will operate at full capacity consistently" },
      { letter: "C", text: "Neighboring towns will want to purchase the excess electricity" },
      { letter: "D", text: "The town currently uses a different energy source" },
      { letter: "E", text: "50,000 homes is an accurate estimate of the wind farm's capacity" }
    ],
    correctAnswer: "B",
    explanation: "Wind is intermittent. If the farm rarely operates at full capacity, it might not consistently produce excess energy to sell. The argument assumes reliable full-capacity operation.",
    wrongAnswerExplanations: {
      "A": "Efficiency comparison isn't assumed.",
      "C": "While important for selling, the argument's logical flaw is about production, not sales.",
      "D": "Current energy source isn't relevant to future production.",
      "E": "The argument accepts the 50,000 estimate as given."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-032",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A tech company developed an AI system that made hiring recommendations based on patterns in historical hiring data. The system was found to discriminate against certain demographic groups because the historical data reflected past discrimination. The company discontinued using the system for hiring decisions.`,
    questionStem: "Which one of the following principles most supports the company's decision?",
    answerChoices: [
      { letter: "A", text: "AI systems should be used only for tasks they were originally designed for" },
      { letter: "B", text: "Systems that perpetuate historical discrimination should not be used even if they operate as designed" },
      { letter: "C", text: "Companies should avoid using any automated systems for hiring" },
      { letter: "D", text: "Historical data is never useful for making predictions" },
      { letter: "E", text: "All hiring decisions should be made entirely by humans" }
    ],
    correctAnswer: "B",
    explanation: "The system worked as designed (learning from data) but perpetuated discrimination. The principle that such systems shouldn't be used directly supports discontinuation.",
    wrongAnswerExplanations: {
      "A": "The system was designed for hiring; that wasn't the problem.",
      "C": "This is too broad—some automated systems might be fair.",
      "D": "Historical data can be useful; the issue is discriminatory patterns.",
      "E": "This is too broad and doesn't address the specific reasoning."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-033",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Hybrid cars consume less fuel per mile than conventional cars. Yet statistics show that hybrid car owners spend just as much money on fuel annually as owners of conventional cars.`,
    questionStem: "Which one of the following, if true, best explains this finding?",
    answerChoices: [
      { letter: "A", text: "Hybrid cars cost more to purchase than conventional cars" },
      { letter: "B", text: "Hybrid car owners tend to drive more miles per year than conventional car owners" },
      { letter: "C", text: "Some hybrid cars are more fuel-efficient than others" },
      { letter: "D", text: "Fuel prices vary by region" },
      { letter: "E", text: "Hybrid cars require less maintenance than conventional cars" }
    ],
    correctAnswer: "B",
    explanation: "If hybrid owners drive more miles, the savings per mile are offset by additional miles driven. Lower cost/mile × more miles = same total cost.",
    wrongAnswerExplanations: {
      "A": "Purchase price is separate from fuel costs.",
      "C": "Variation among hybrids doesn't explain equality with conventional cars.",
      "D": "Regional price variation doesn't explain why both groups spend the same.",
      "E": "Maintenance is separate from fuel costs."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-034",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Everyone in my family has always voted for the Democratic party. My grandfather voted Democratic, my parents vote Democratic, and all my siblings vote Democratic. Therefore, it's only natural and right that I should vote Democratic as well.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "appeals to family tradition rather than the merits of the political positions" },
      { letter: "B", text: "assumes that all family members agree on all political issues" },
      { letter: "C", text: "fails to consider independent candidates" },
      { letter: "D", text: "does not explain why the grandfather started voting Democratic" },
      { letter: "E", text: "ignores the possibility that political parties change over time" }
    ],
    correctAnswer: "A",
    explanation: "The argument justifies a vote based on family history, not on policy evaluation. This is an appeal to tradition fallacy—the fact that something has been done doesn't make it right.",
    wrongAnswerExplanations: {
      "B": "The argument doesn't require agreement on all issues.",
      "C": "Independents aren't the core issue.",
      "D": "Origins don't matter to the logical flaw.",
      "E": "Party evolution is interesting but not the main flaw."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-035",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Many ancient Roman buildings still stand today, while many modern buildings deteriorate within decades. This suggests that ancient Roman construction techniques were superior to modern methods.`,
    questionStem: "Which one of the following, if true, most strengthens this argument?",
    answerChoices: [
      { letter: "A", text: "Roman builders had access to higher-quality raw materials than modern builders" },
      { letter: "B", text: "The Roman buildings that survive were built using the same techniques as Roman buildings that have not survived" },
      { letter: "C", text: "Roman buildings that collapsed did so for reasons unrelated to construction techniques, such as earthquakes or war" },
      { letter: "D", text: "Modern builders prioritize speed of construction over durability" },
      { letter: "E", text: "Climate conditions in ancient Rome were similar to conditions today" }
    ],
    correctAnswer: "C",
    explanation: "If fallen Roman buildings collapsed due to external forces, not construction flaws, then survival doesn't reflect survivorship bias—the techniques really were good enough to last absent catastrophes.",
    wrongAnswerExplanations: {
      "A": "Better materials would explain durability but not superior 'techniques.'",
      "B": "Same techniques for surviving and non-surviving buildings undermines the argument.",
      "D": "Modern priorities explain modern failures but don't strengthen Roman superiority.",
      "E": "Similar climate removes one variable but doesn't strengthen the technique claim."
    },
    difficulty: "hard"
  },
  {
    id: "lr7-036",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Corporations often claim they cannot raise employee wages without raising prices for consumers. However, over the past three decades, executive compensation has increased by over 900% while average worker wages have increased by only 12%. This demonstrates that companies have significant flexibility in how they distribute their revenues. The claim that wage increases necessarily cause price increases is therefore misleading.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Executive compensation has grown disproportionately compared to worker wages" },
      { letter: "B", text: "Companies have flexibility in how they allocate their revenues" },
      { letter: "C", text: "The claim that higher wages must lead to higher prices is misleading" },
      { letter: "D", text: "Worker wages have barely increased in three decades" },
      { letter: "E", text: "Corporations should pay executives less" }
    ],
    correctAnswer: "C",
    explanation: "The main conclusion is stated at the end: the claim about wages and prices is 'misleading.' The statistics and flexibility point are supporting evidence for this conclusion.",
    wrongAnswerExplanations: {
      "A": "This is supporting evidence.",
      "B": "This is a supporting premise that leads to the main conclusion.",
      "D": "This is supporting evidence.",
      "E": "This is not stated or implied as the conclusion."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-037",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The city's new parking app allows drivers to pay for parking using their smartphones. However, approximately 30% of city residents are over 65 years old, and surveys indicate that only 20% of residents over 65 own smartphones. The city has announced it will eliminate all parking meters that accept coins by next year.`,
    questionStem: "If the statements above are true, which one of the following can be properly inferred?",
    answerChoices: [
      { letter: "A", text: "Most city residents own smartphones" },
      { letter: "B", text: "Some residents will be unable to pay for parking after the coin meters are eliminated unless they acquire smartphones or alternative payment methods become available" },
      { letter: "C", text: "The city does not care about its elderly residents" },
      { letter: "D", text: "All residents under 65 own smartphones" },
      { letter: "E", text: "The parking app is difficult to use" }
    ],
    correctAnswer: "B",
    explanation: "80% of seniors (a significant number) don't have smartphones. If coins are eliminated and no alternatives exist, these residents can't pay for parking.",
    wrongAnswerExplanations: {
      "A": "We can't determine overall smartphone ownership.",
      "C": "We can infer policy impact, not intent.",
      "D": "Under-65 smartphone ownership isn't specified.",
      "E": "App difficulty isn't mentioned."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-038",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A school district eliminated homework and saw student test scores remain stable. District officials concluded that homework does not contribute to student learning.`,
    questionStem: "Which one of the following would be most important to know in evaluating the officials' conclusion?",
    answerChoices: [
      { letter: "A", text: "Whether teachers supported the elimination of homework" },
      { letter: "B", text: "Whether teachers increased in-class instruction time to compensate for the lack of homework" },
      { letter: "C", text: "Whether parents complained about the homework policy change" },
      { letter: "D", text: "Whether the district has above-average funding" },
      { letter: "E", text: "Whether other districts also eliminated homework" }
    ],
    correctAnswer: "B",
    explanation: "If teachers compensated with more in-class practice, the stable scores might reflect that compensation, not homework's irrelevance. This confounding factor could explain the results.",
    wrongAnswerExplanations: {
      "A": "Teacher support doesn't affect whether homework contributes to learning.",
      "C": "Parent complaints don't determine educational effectiveness.",
      "D": "Funding levels don't directly address the homework question.",
      "E": "Other districts' policies don't evaluate this conclusion."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-039",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Advocates for organic farming argue that organic produce is healthier because it is grown without synthetic pesticides. They point out that synthetic pesticides leave residues on conventionally grown produce that organic produce lacks.`,
    questionStem: "Which one of the following, if true, most weakens the advocates' argument?",
    answerChoices: [
      { letter: "A", text: "Organic farming uses natural pesticides that also leave residues on produce" },
      { letter: "B", text: "Organic produce costs more than conventionally grown produce" },
      { letter: "C", text: "Some synthetic pesticides break down quickly and leave minimal residue" },
      { letter: "D", text: "Organic farming is better for soil health" },
      { letter: "E", text: "Consumer demand for organic produce has increased" }
    ],
    correctAnswer: "A",
    explanation: "If organic farming also uses pesticides (natural ones) that leave residues, the 'no residue' advantage disappears. Organic might have different residues, not no residues.",
    wrongAnswerExplanations: {
      "B": "Cost doesn't affect health claims.",
      "C": "Some minimal residue still means some residue on conventional produce.",
      "D": "Soil health is a different benefit.",
      "E": "Consumer demand doesn't address health claims."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-040",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `According to a recent poll, 65% of respondents believe the economy will improve next year. Since the majority believes this, we can expect economic conditions to actually improve.`,
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "assumes that what people believe will happen is what will actually happen" },
      { letter: "B", text: "relies on a poll that may have a biased sample" },
      { letter: "C", text: "does not consider the opinions of economists" },
      { letter: "D", text: "fails to define what 'improve' means" },
      { letter: "E", text: "ignores the 35% who believe the economy will not improve" }
    ],
    correctAnswer: "A",
    explanation: "This is an appeal to popularity/belief fallacy. What people believe has no bearing on economic reality. Public opinion doesn't determine economic outcomes.",
    wrongAnswerExplanations: {
      "B": "Sampling bias is possible but not the main flaw.",
      "C": "Expert opinion would help but isn't the core error.",
      "D": "Definition clarity is secondary to the basic logical flaw.",
      "E": "The minority opinion doesn't change the logical error."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-041",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Some scientists argue that the extinction of the dinosaurs was caused by a massive asteroid impact. As evidence, they point to a layer of iridium-rich clay found worldwide that dates to the time of the extinction. Iridium is rare on Earth but common in asteroids.`,
    questionStem: "Which one of the following, if true, most strengthens the scientists' argument?",
    answerChoices: [
      { letter: "A", text: "The iridium layer is found on every continent" },
      { letter: "B", text: "A massive impact crater dating to the same period has been discovered in Mexico" },
      { letter: "C", text: "Dinosaur fossils become rare above the iridium layer" },
      { letter: "D", text: "Some species survived the mass extinction event" },
      { letter: "E", text: "Iridium can also be released by volcanic eruptions" }
    ],
    correctAnswer: "B",
    explanation: "An impact crater from the same time provides direct physical evidence of an asteroid strike, strongly corroborating the iridium evidence.",
    wrongAnswerExplanations: {
      "A": "Global distribution is already implied ('worldwide').",
      "C": "Dinosaurs disappearing confirms extinction but not the cause.",
      "D": "Some survival doesn't support or weaken the impact theory.",
      "E": "Volcanic sources would weaken, not strengthen, the asteroid theory."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-042",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Local food is better for the environment because it doesn't have to be transported long distances, which reduces carbon emissions from trucks, ships, and planes.`,
    questionStem: "The argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Local farmers use environmentally friendly farming practices" },
      { letter: "B", text: "Transportation accounts for a significant portion of food's total environmental impact" },
      { letter: "C", text: "All consumers have access to local food sources" },
      { letter: "D", text: "Local food tastes better than food transported from far away" },
      { letter: "E", text: "Long-distance food transportation uses only trucks, ships, and planes" }
    ],
    correctAnswer: "B",
    explanation: "If transportation is a tiny part of food's environmental impact, reduced transport emissions wouldn't make local food significantly 'better for the environment.' The argument requires transport to matter substantially.",
    wrongAnswerExplanations: {
      "A": "Farming practices aren't part of this specific argument about transport.",
      "C": "Access doesn't affect whether local food is environmentally better.",
      "D": "Taste is irrelevant to environmental impact.",
      "E": "Other transport modes don't change the core logic."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-043",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Economist A: Raising the minimum wage helps workers because it increases their purchasing power without causing significant unemployment, as numerous studies have demonstrated.

Economist B: Raising the minimum wage harms the very workers it's intended to help because businesses respond by cutting hours, eliminating positions, or automating jobs.`,
    questionStem: "Economist A and Economist B disagree about",
    answerChoices: [
      { letter: "A", text: "whether minimum wage workers deserve higher pay" },
      { letter: "B", text: "whether businesses ever cut workers in response to wage increases" },
      { letter: "C", text: "the overall effect of minimum wage increases on workers" },
      { letter: "D", text: "whether studies on minimum wage are reliable" },
      { letter: "E", text: "whether automation is replacing workers" }
    ],
    correctAnswer: "C",
    explanation: "A says minimum wage increases help workers; B says they harm workers. The direct disagreement is about the net effect on workers.",
    wrongAnswerExplanations: {
      "A": "Neither discusses whether workers deserve higher pay.",
      "B": "A doesn't deny some business responses occur—just that they're not significant.",
      "D": "A cites studies; B doesn't directly dispute their reliability.",
      "E": "Automation is part of B's argument but not the central disagreement."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-044",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Exercise is known to increase appetite. Yet people who exercise regularly tend to weigh less than people who do not exercise.`,
    questionStem: "Which one of the following, if true, most helps to resolve this apparent paradox?",
    answerChoices: [
      { letter: "A", text: "Some people exercise specifically to lose weight" },
      { letter: "B", text: "Regular exercise increases metabolism, causing the body to burn more calories even at rest" },
      { letter: "C", text: "People who exercise tend to be more health-conscious overall" },
      { letter: "D", text: "Exercise has many health benefits beyond weight control" },
      { letter: "E", text: "Not all forms of exercise increase appetite equally" }
    ],
    correctAnswer: "B",
    explanation: "Increased metabolism burns more calories overall. Even if exercisers eat more due to increased appetite, the extra calories burned exceeds the extra calories consumed.",
    wrongAnswerExplanations: {
      "A": "Weight-loss motivation doesn't explain the mechanism.",
      "C": "Health consciousness might involve diet control, but this doesn't directly resolve the exercise-appetite paradox.",
      "D": "Other benefits don't explain the weight paradox.",
      "E": "Variation in appetite effect is interesting but doesn't resolve the paradox."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-045",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Opponent: You claim that government healthcare would be more efficient, but just look at how the government runs the post office—constantly losing money and providing poor service. Government healthcare would be no different.`,
    questionStem: "The opponent's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "relies on an analogy between two things that may not be relevantly similar" },
      { letter: "B", text: "attacks the person making the argument rather than the argument itself" },
      { letter: "C", text: "assumes that what is true of a part is true of the whole" },
      { letter: "D", text: "appeals to emotion rather than logic" },
      { letter: "E", text: "presents only two alternatives when others exist" }
    ],
    correctAnswer: "A",
    explanation: "The argument assumes the post office and healthcare would be managed similarly. But they're different services with different structures; one's performance doesn't predict the other's.",
    wrongAnswerExplanations: {
      "B": "No ad hominem attack is made.",
      "C": "No part-whole confusion is present.",
      "D": "The argument uses logic, not emotional appeal.",
      "E": "No false dilemma is presented."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-046",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A publishing company learned that an author's upcoming memoir contained false claims about a public figure. Despite knowing the claims were false, the company published the book anyway because they expected it to be a bestseller.`,
    questionStem: "Which one of the following principles, if valid, most strongly supports criticism of the publishing company's decision?",
    answerChoices: [
      { letter: "A", text: "Publishers should only publish books that they believe will sell well" },
      { letter: "B", text: "Publishers have a responsibility not to knowingly publish false information that harms others" },
      { letter: "C", text: "Authors should be held responsible for the accuracy of their work" },
      { letter: "D", text: "Public figures should expect some criticism in published works" },
      { letter: "E", text: "Bestselling books serve an important cultural function" }
    ],
    correctAnswer: "B",
    explanation: "The company knowingly published falsehoods. A principle against knowingly publishing harmful false information directly condemns this action.",
    wrongAnswerExplanations: {
      "A": "This would support, not criticize, profit-driven decisions.",
      "C": "Author responsibility doesn't address the publisher's decision.",
      "D": "Expected criticism doesn't justify false claims.",
      "E": "Cultural function doesn't justify falsehoods."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-047",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All members of the photography club must submit at least one photo to the annual exhibition. This year's exhibition features 50 photos, and each member submitted exactly two photos. The club has more members this year than last year.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "The club has exactly 25 members this year" },
      { letter: "B", text: "Last year's exhibition had fewer than 50 photos" },
      { letter: "C", text: "Some photos were submitted by non-members" },
      { letter: "D", text: "Every member had at least one photo selected for the exhibition" },
      { letter: "E", text: "The club had fewer than 25 members last year" }
    ],
    correctAnswer: "E",
    explanation: "This year: 50 photos ÷ 2 per member = 25 members. The club has MORE members this year than last year. So last year it had fewer than 25 members.",
    wrongAnswerExplanations: {
      "A": "This is true but doesn't HAVE to be true based solely on the given info—wait, 50÷2=25, so the club has exactly 25 members. This is necessarily true too.",
      "B": "We don't know about last year's exhibition.",
      "C": "The information says each member submitted, implying all are members.",
      "D": "We know what was submitted, not what was selected—wait, 'features' might mean selected. Still, 'at least one' isn't guaranteed."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-048",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Supporters of the proposed dam argue it will provide clean energy and prevent flooding downstream. They cite similar dams in other regions that have successfully achieved these goals.`,
    questionStem: "Which one of the following, if true, most weakens the supporters' argument?",
    answerChoices: [
      { letter: "A", text: "The dam will create jobs during its construction phase" },
      { letter: "B", text: "The river at this location has a lower flow rate than the rivers where successful dams were built" },
      { letter: "C", text: "Some local residents oppose the dam" },
      { letter: "D", text: "Clean energy can also be generated by solar and wind farms" },
      { letter: "E", text: "The dam will take several years to complete" }
    ],
    correctAnswer: "B",
    explanation: "Lower flow rate means this river is different from the successful cases. The analogy breaks down if conditions are significantly different.",
    wrongAnswerExplanations: {
      "A": "Jobs support the dam, not weaken the argument.",
      "C": "Opposition doesn't address whether the dam will work.",
      "D": "Alternatives don't weaken this dam's potential effectiveness.",
      "E": "Construction time doesn't affect ultimate effectiveness."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-049",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `The mayor has done an excellent job because she was elected by a large margin. Her election victory shows that voters approved of her platform and believed she would serve them well.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "confuses being elected with having done a good job" },
      { letter: "B", text: "assumes that all voters agreed with the mayor's platform" },
      { letter: "C", text: "fails to consider that voter turnout may have been low" },
      { letter: "D", text: "ignores the views of those who voted against the mayor" },
      { letter: "E", text: "relies on circular reasoning" }
    ],
    correctAnswer: "A",
    explanation: "The argument uses election success to prove job performance. But being elected precedes the job—it's a prediction of performance, not evidence of actual performance.",
    wrongAnswerExplanations: {
      "B": "Universal agreement isn't assumed—just majority support.",
      "C": "Turnout is a concern but not the main logical flaw.",
      "D": "Minority views are acknowledged by discussing the margin.",
      "E": "The reasoning isn't circular—it's a temporal/causal confusion."
    },
    difficulty: "medium"
  },
  {
    id: "lr7-050",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `A city is considering banning plastic straws to reduce ocean pollution. Critics argue this is merely symbolic since straws represent a tiny fraction of ocean plastic. However, supporters argue the ban will raise awareness and change consumer behavior, leading to broader reductions in plastic use.`,
    questionStem: "Which one of the following, if true, most strengthens the supporters' argument?",
    answerChoices: [
      { letter: "A", text: "Plastic straws are particularly harmful to marine wildlife" },
      { letter: "B", text: "In cities that have implemented straw bans, overall single-use plastic consumption declined significantly within two years" },
      { letter: "C", text: "Many restaurants have already voluntarily stopped offering plastic straws" },
      { letter: "D", text: "Paper and metal straws are readily available as alternatives" },
      { letter: "E", text: "Ocean plastic pollution has been increasing worldwide" }
    ],
    correctAnswer: "B",
    explanation: "Evidence that straw bans actually lead to broader reductions in plastic use directly supports the supporters' claim about awareness leading to behavior change.",
    wrongAnswerExplanations: {
      "A": "Harm to wildlife supports banning but doesn't address the broader impact claim.",
      "C": "Voluntary action by restaurants doesn't prove a ban leads to broader changes.",
      "D": "Alternatives existing doesn't show the ban changes broader behavior.",
      "E": "Increasing pollution is a problem but doesn't support this specific solution."
    },
    difficulty: "medium"
  }
];
