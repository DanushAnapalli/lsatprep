import { Question } from "../lsat-types";

export const lrQuestionsSet9: Question[] = [
  {
    id: "lr-9-001",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Researcher: Every study on caffeine consumption has found that moderate caffeine intake has no significant negative health effects in adults. Therefore, parents should not worry about their children's caffeine consumption, as it is clearly safe for everyone.`,
    questionStem: "The reasoning in the researcher's argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "relies on evidence about one population to draw conclusions about a different population" },
      { letter: "B", text: "assumes that what is true of a whole must be true of its parts" },
      { letter: "C", text: "confuses a correlation with a causal relationship" },
      { letter: "D", text: "fails to consider that moderate intake may be defined differently for different groups" },
      { letter: "E", text: "overlooks the possibility that caffeine has positive health effects" },
    ],
    correctAnswer: "A",
    explanation: "The argument extrapolates findings about adults to children without justification. Studies on adults cannot be automatically applied to children, who may metabolize substances differently.",
    wrongAnswerExplanations: {
      B: "The argument doesn't discuss parts and wholes.",
      C: "No correlation is being confused with causation here.",
      D: "While this could be a secondary issue, the main flaw is applying adult findings to children.",
      E: "Positive effects are irrelevant to the safety conclusion being drawn."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-002",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Art historian: The painting attributed to Vermeer was likely created by one of his students. The brushwork, while skillful, lacks the subtle gradations of light that characterize Vermeer's authenticated works. Additionally, the canvas material is consistent with those used in Vermeer's workshop during the 1660s.`,
    questionStem: "Which one of the following, if true, most strengthens the art historian's argument?",
    answerChoices: [
      { letter: "A", text: "Several of Vermeer's students became accomplished painters in their own right" },
      { letter: "B", text: "Vermeer closely supervised his students' work and often provided corrections" },
      { letter: "C", text: "The pigments used in the painting were commonly available throughout the Netherlands" },
      { letter: "D", text: "Workshop records indicate that students practiced by copying the master's compositions" },
      { letter: "E", text: "Chemical analysis shows the paint layers were applied in a manner inconsistent with Vermeer's technique" },
    ],
    correctAnswer: "E",
    explanation: "Additional evidence that the painting technique differs from Vermeer's authenticated works strengthens the conclusion that a student, not Vermeer, created the painting.",
    wrongAnswerExplanations: {
      A: "This doesn't help determine who painted this specific work.",
      B: "This might actually weaken the argument by suggesting student work would be more like Vermeer's.",
      C: "Common pigment availability doesn't help identify the painter.",
      D: "While relevant to workshop practices, this doesn't strengthen the specific attribution."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-003",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Company spokesperson: Our new productivity software has been shown to increase worker efficiency by 30% in controlled trials. We are confident that implementing this software company-wide will result in similar efficiency gains, leading to increased profitability.`,
    questionStem: "Which one of the following, if true, most seriously weakens the spokesperson's argument?",
    answerChoices: [
      { letter: "A", text: "The software requires significant training time before workers can use it effectively" },
      { letter: "B", text: "Competitors are developing similar productivity software" },
      { letter: "C", text: "The controlled trials involved workers who volunteered to test new technology" },
      { letter: "D", text: "The company has previously implemented software upgrades successfully" },
      { letter: "E", text: "Some departments have different workflow requirements than those tested" },
    ],
    correctAnswer: "C",
    explanation: "If the trial participants were volunteers who are naturally more receptive to new technology, the results may not generalize to the entire workforce, many of whom may be resistant to change.",
    wrongAnswerExplanations: {
      A: "Training time is a temporary cost, not a fundamental challenge to efficiency claims.",
      B: "Competitor actions don't affect this company's efficiency gains.",
      D: "Past success with different software doesn't address current claims.",
      E: "While this raises a concern, it's less damaging than selection bias in the trials."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-004",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Literary critic: Great novels challenge readers to reconsider their fundamental assumptions about human nature. Commercial fiction, by contrast, merely reinforces existing beliefs. Since contemporary bestsellers rarely receive critical acclaim, they must not challenge readers' assumptions.`,
    questionStem: "The argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Critical acclaim is given primarily to novels that challenge readers" },
      { letter: "B", text: "Commercial success and literary merit are mutually exclusive" },
      { letter: "C", text: "All great novels eventually become bestsellers" },
      { letter: "D", text: "Readers prefer novels that reinforce their existing beliefs" },
      { letter: "E", text: "Contemporary critics are reliable judges of literary merit" },
    ],
    correctAnswer: "A",
    explanation: "The argument moves from 'lacking critical acclaim' to 'not challenging assumptions.' This requires assuming that challenging assumptions is necessary for critical acclaim.",
    wrongAnswerExplanations: {
      B: "The argument allows for overlap; it just claims bestsellers 'rarely' receive acclaim.",
      C: "This contradicts the argument's implication.",
      D: "Reader preferences aren't relevant to the argument's logic.",
      E: "Critic reliability isn't necessary for the logical connection made."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-005",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All members of the chess club either competed in the regional tournament or served as judges. Anyone who competed in the regional tournament received a participation certificate. Marcus is a member of the chess club but did not receive a participation certificate.`,
    questionStem: "Which one of the following, if assumed, allows the conclusion to be properly drawn that Marcus served as a judge?",
    answerChoices: [
      { letter: "A", text: "Judges at the tournament did not receive participation certificates" },
      { letter: "B", text: "Only members of the chess club could serve as judges" },
      { letter: "C", text: "Everyone who served as a judge also competed in the tournament" },
      { letter: "D", text: "Marcus has served as a judge at previous tournaments" },
      { letter: "E", text: "The regional tournament was open to all chess club members" },
    ],
    correctAnswer: "A",
    explanation: "Marcus is a member who didn't get a certificate, so he didn't compete (since competitors get certificates). Since all members either competed or judged, Marcus must have judged. The assumption that judges don't get certificates isn't needed for the logic but confirms the conclusion.",
    wrongAnswerExplanations: {
      B: "This doesn't help determine Marcus's role.",
      C: "This would actually prevent the conclusion since it means judges compete and get certificates.",
      D: "Past judging doesn't establish his role at this tournament.",
      E: "Tournament openness doesn't affect the logical structure."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-006",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A survey of metropolitan commuters found that those who take public transit report higher stress levels than those who drive alone. However, public transit users also report higher satisfaction with their environmental impact and lower overall transportation costs. Commuters who carpool report stress levels similar to solo drivers but satisfaction levels similar to public transit users.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Carpoolers experience the benefits of public transit without the stress" },
      { letter: "B", text: "Solo drivers report lower environmental satisfaction than carpoolers" },
      { letter: "C", text: "Public transit is the most stressful form of commuting" },
      { letter: "D", text: "Cost savings are the primary motivation for using public transit" },
      { letter: "E", text: "Stress levels are determined solely by mode of transportation" },
    ],
    correctAnswer: "B",
    explanation: "Since carpoolers have satisfaction levels similar to public transit users, and public transit users have higher satisfaction with environmental impact than solo drivers, carpoolers must also have higher environmental satisfaction than solo drivers.",
    wrongAnswerExplanations: {
      A: "This overstates the comparison; we only know stress is similar to drivers, not that carpooling eliminates stress.",
      C: "The survey compared to driving; other forms aren't mentioned.",
      D: "Motivation isn't discussed, only reported satisfaction.",
      E: "The passage doesn't claim stress is solely determined by transportation mode."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-007",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Some professional athletes endorse products they don't personally use. All product endorsements by celebrities influence consumer purchasing decisions. Therefore, some consumer purchasing decisions are influenced by endorsements from people who don't use the products they endorse.`,
    questionStem: "Which one of the following arguments is most similar in its pattern of reasoning to the argument above?",
    answerChoices: [
      { letter: "A", text: "Some teachers assign books they haven't read. All assigned readings shape student perspectives. Therefore, some student perspectives are shaped by assignments from teachers unfamiliar with the material." },
      { letter: "B", text: "All doctors recommend treatments. Some treatments have side effects. Therefore, some doctor recommendations involve side effects." },
      { letter: "C", text: "Some restaurants serve food from frozen ingredients. All frozen food loses some nutritional value. Therefore, all restaurants serve food with reduced nutrition." },
      { letter: "D", text: "No honest politician accepts bribes. Some politicians accept bribes. Therefore, some politicians are dishonest." },
      { letter: "E", text: "All dogs are mammals. Some mammals are endangered. Therefore, some dogs are endangered." },
    ],
    correctAnswer: "A",
    explanation: "Both arguments follow the pattern: Some X are Y. All X are Z. Therefore, some Z are from Y sources. Athletes/teachers who don't use/read what they endorse/assign influence decisions/perspectives.",
    wrongAnswerExplanations: {
      B: "This has a different structure with 'all X' and 'some Y' not properly connected.",
      C: "This improperly concludes 'all' from 'some.'",
      D: "This uses a negation pattern different from the original.",
      E: "This commits an invalid inference from 'some mammals' to 'some dogs.'"
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-008",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Skeptic: You claim that meditation reduces anxiety, but the studies you cite were conducted by researchers at meditation centers who have a vested interest in positive results. Until independent researchers confirm these findings, we should remain skeptical of meditation's purported benefits.`,
    questionStem: "The skeptic's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "questioning the credibility of evidence based on its source" },
      { letter: "B", text: "providing alternative explanations for observed phenomena" },
      { letter: "C", text: "demonstrating logical inconsistencies in the opposing view" },
      { letter: "D", text: "appealing to the authority of independent researchers" },
      { letter: "E", text: "rejecting a claim because it cannot be definitively proven" },
    ],
    correctAnswer: "A",
    explanation: "The skeptic challenges the meditation claims by pointing out that the researchers have potential bias due to their affiliation with meditation centers, thus questioning the source's credibility.",
    wrongAnswerExplanations: {
      B: "No alternative explanations for anxiety reduction are offered.",
      C: "No logical inconsistencies are identified.",
      D: "The skeptic calls for independent research but doesn't cite existing independent authority.",
      E: "The skeptic isn't demanding definitive proof, just unbiased research."
    },
    difficulty: "easy"
  },
  {
    id: "lr-9-009",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: A government should not restrict citizens' freedoms unless such restrictions are necessary to prevent harm to others.

    Application: The government should not ban recreational drone flying in public parks.`,
    questionStem: "Which one of the following, if true, most justifies the application of the principle?",
    answerChoices: [
      { letter: "A", text: "Drone flying provides significant recreational benefits to enthusiasts" },
      { letter: "B", text: "Recreational drone flying in public parks does not endanger others" },
      { letter: "C", text: "Most citizens support the right to fly drones recreationally" },
      { letter: "D", text: "Drone technology has become increasingly affordable and accessible" },
      { letter: "E", text: "Some other countries allow unrestricted recreational drone use" },
    ],
    correctAnswer: "B",
    explanation: "The principle states restrictions require necessity to prevent harm. If drone flying doesn't endanger others, restrictions aren't necessary under this principle, justifying not banning it.",
    wrongAnswerExplanations: {
      A: "Benefits to enthusiasts don't address the harm criterion.",
      C: "Public support doesn't relate to the harm-prevention principle.",
      D: "Affordability and accessibility don't address harm concerns.",
      E: "Other countries' policies don't justify applying this principle."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-010",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Residents near the new wind farm reported that the turbines were extremely noisy and disturbing their sleep. However, sound measurements taken at various times showed that noise levels never exceeded those of normal conversation, which typically doesn't interfere with sleep.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent discrepancy described above?",
    answerChoices: [
      { letter: "A", text: "The wind farm was built in a previously very quiet rural area" },
      { letter: "B", text: "Wind turbines produce noise at low frequencies that are particularly disruptive to sleep" },
      { letter: "C", text: "Some residents had opposed the wind farm before it was built" },
      { letter: "D", text: "Sound measurements were taken only during daytime hours" },
      { letter: "E", text: "The turbines operate more frequently during high-wind periods" },
    ],
    correctAnswer: "B",
    explanation: "Standard sound measurements might not capture the full impact of low-frequency noise, which can be particularly disruptive to sleep even at lower decibel levels, explaining why residents report sleep disturbance despite moderate measurements.",
    wrongAnswerExplanations: {
      A: "This might explain sensitivity but not why conversation-level noise disrupts sleep.",
      C: "Prior opposition suggests bias but doesn't explain the objective sleep disruption.",
      D: "This could be relevant but doesn't explain why measured levels would disrupt sleep.",
      E: "Frequency of operation doesn't explain why moderate noise levels disrupt sleep."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-011",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Veterinarian: Dogs that receive regular dental cleanings live, on average, two years longer than dogs that don't. Pet owners who want to maximize their dogs' lifespans should therefore ensure their dogs receive regular dental cleanings.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the veterinarian's argument?",
    answerChoices: [
      { letter: "A", text: "How much professional dental cleanings for dogs typically cost" },
      { letter: "B", text: "Whether dogs that receive dental cleanings are also more likely to receive other preventive care" },
      { letter: "C", text: "What percentage of dog owners currently provide regular dental cleanings" },
      { letter: "D", text: "Whether certain dog breeds are more prone to dental problems" },
      { letter: "E", text: "How often veterinarians recommend dental cleanings for dogs" },
    ],
    correctAnswer: "B",
    explanation: "If dogs receiving dental cleanings also receive more overall preventive care, the longer lifespan might be due to the comprehensive care rather than dental cleanings specifically. This would undermine the causal claim.",
    wrongAnswerExplanations: {
      A: "Cost is relevant to practicality but not to evaluating the causal claim.",
      C: "Current rates don't help evaluate whether cleanings cause longer life.",
      D: "Breed differences don't address the general causal claim.",
      E: "Veterinarian recommendations don't help evaluate the lifespan claim."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-012",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Manager: Employee satisfaction surveys show that workers are most satisfied when they have autonomy over their schedules. Therefore, we should allow all employees to set their own hours, which will make everyone more satisfied and increase productivity.`,
    questionStem: "The reasoning in the manager's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes that what increases satisfaction will necessarily increase productivity" },
      { letter: "B", text: "ignores the possibility that schedule autonomy may not be practical for all positions" },
      { letter: "C", text: "fails to consider that satisfaction surveys may not accurately reflect employee preferences" },
      { letter: "D", text: "overlooks the distinction between correlation and causation" },
      { letter: "E", text: "generalizes from employees who value autonomy to all employees" },
    ],
    correctAnswer: "B",
    explanation: "The manager assumes all employees can have schedule autonomy, but some positions (customer service, shift work, collaborative teams) may require set schedules regardless of preference.",
    wrongAnswerExplanations: {
      A: "This is a secondary issue; the main flaw is the practicality assumption.",
      C: "The argument accepts the survey findings; the flaw is in application.",
      D: "The causal connection between autonomy and satisfaction is assumed but not the main flaw.",
      E: "The surveys show workers in general value autonomy, so this isn't the main issue."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-013",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Archaeologist: The ancient settlement we're excavating was abandoned suddenly around 1200 BCE. We've found no evidence of invasion or natural disaster. I believe the inhabitants left due to prolonged drought, which would have made agriculture impossible in this region.`,
    questionStem: "Which one of the following, if true, most strengthens the archaeologist's argument?",
    answerChoices: [
      { letter: "A", text: "Other settlements in the region from the same period show similar abandonment patterns" },
      { letter: "B", text: "Tree ring data from the area shows significantly reduced rainfall from 1250-1150 BCE" },
      { letter: "C", text: "The settlement had sophisticated irrigation systems" },
      { letter: "D", text: "Written records from a nearby civilization mention refugees during this period" },
      { letter: "E", text: "The settlers were known to practice both agriculture and animal husbandry" },
    ],
    correctAnswer: "B",
    explanation: "Direct evidence of reduced rainfall during the relevant time period strongly supports the drought hypothesis as the cause of abandonment.",
    wrongAnswerExplanations: {
      A: "Similar patterns could have many causes; this doesn't specifically support drought.",
      C: "Irrigation systems might suggest they could cope with some dryness.",
      D: "Refugees could be from any cause, not specifically drought.",
      E: "Diverse food sources might make them more drought-resistant."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-014",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Nutritionist: People who eat breakfast regularly have lower rates of obesity than those who skip breakfast. This shows that eating breakfast helps prevent weight gain, so anyone trying to lose weight should make sure to eat breakfast every day.`,
    questionStem: "Which one of the following, if true, most seriously weakens the nutritionist's argument?",
    answerChoices: [
      { letter: "A", text: "Some people who eat breakfast consume high-calorie, low-nutrition foods" },
      { letter: "B", text: "People who eat breakfast regularly tend to have overall healthier lifestyle habits" },
      { letter: "C", text: "Breakfast is considered the most important meal in many cultures" },
      { letter: "D", text: "Some weight loss programs recommend intermittent fasting, which often involves skipping breakfast" },
      { letter: "E", text: "The definition of 'breakfast' varies significantly among different studies" },
    ],
    correctAnswer: "B",
    explanation: "If breakfast eaters have healthier overall habits, the lower obesity rates might be due to those habits rather than breakfast itself. This confounding variable undermines the causal claim.",
    wrongAnswerExplanations: {
      A: "Some unhealthy breakfasts don't undermine the general statistical finding.",
      C: "Cultural importance doesn't address the causal claim about weight.",
      D: "Alternative weight loss methods don't disprove breakfast's benefits.",
      E: "Definition variations might affect precision but don't undermine the basic finding."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-015",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `City planner: Converting the downtown parking lots to green spaces would improve air quality and reduce urban heat. Property values in areas with more green space are typically higher. Therefore, this conversion would benefit local businesses by increasing property values.`,
    questionStem: "The city planner's argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Improved air quality is more valuable to businesses than parking availability" },
      { letter: "B", text: "Downtown businesses would not be significantly harmed by reduced parking" },
      { letter: "C", text: "Green spaces attract more visitors than parking lots" },
      { letter: "D", text: "Other cities have successfully implemented similar conversions" },
      { letter: "E", text: "Property owners would support the conversion plan" },
    ],
    correctAnswer: "B",
    explanation: "The argument assumes increasing property values would benefit businesses, but this requires that the loss of parking doesn't create greater harm. If reduced parking devastates foot traffic, businesses might suffer despite higher property values.",
    wrongAnswerExplanations: {
      A: "The argument doesn't weigh air quality against parking directly.",
      C: "Visitor attraction isn't necessary for the property value argument.",
      D: "Other cities' experiences aren't necessary for the logical structure.",
      E: "Owner support isn't necessary for the benefits to occur."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-016",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All great artists push the boundaries of their medium. Some boundary-pushing artists create works that are initially rejected by critics. Every artist whose work is initially rejected eventually gains recognition.`,
    questionStem: "Which one of the following can be properly concluded from the statements above?",
    answerChoices: [
      { letter: "A", text: "All great artists eventually gain recognition" },
      { letter: "B", text: "Some great artists have works initially rejected by critics" },
      { letter: "C", text: "All artists who gain recognition are great artists" },
      { letter: "D", text: "Some boundary-pushing artists never gain recognition" },
      { letter: "E", text: "No great artist creates work that is never rejected" },
    ],
    correctAnswer: "B",
    explanation: "All great artists push boundaries. Some boundary-pushers are initially rejected. So some great artists might be among those rejected. The third premise isn't needed to establish this possibility.",
    wrongAnswerExplanations: {
      A: "Only 'some' boundary pushers are rejected, so not all great artists need be.",
      C: "Recognition doesn't imply greatness based on these premises.",
      D: "This contradicts the third premise that rejected works eventually gain recognition.",
      E: "The premises don't establish that all great artists face rejection."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-017",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `Recent studies show that employees who work from home are, on average, 15% more productive than their office-based counterparts. However, managers consistently rate remote workers as less productive than office workers. These same managers report higher confidence in their ability to assess the productivity of employees they see in person daily.`,
    questionStem: "Which one of the following is most strongly supported by the information above?",
    answerChoices: [
      { letter: "A", text: "Managers are deliberately underrating remote workers' productivity" },
      { letter: "B", text: "Productivity measurements used in studies are flawed" },
      { letter: "C", text: "In-person visibility may not be a reliable indicator of employee productivity" },
      { letter: "D", text: "Remote workers should be required to work in offices occasionally" },
      { letter: "E", text: "Managers need better training in assessing remote work productivity" },
    ],
    correctAnswer: "C",
    explanation: "The discrepancy between measured productivity (higher for remote workers) and manager ratings (lower for remote workers) suggests that the visibility managers rely on doesn't accurately indicate actual productivity.",
    wrongAnswerExplanations: {
      A: "Deliberate underrating isn't supported; the bias may be unconscious.",
      B: "Nothing suggests the studies' methods are flawed.",
      D: "No policy recommendation is supported by the information.",
      E: "While possibly true, training needs aren't directly supported by the passage."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-018",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `No responsible pet owner allows their dog to roam unsupervised. Some dogs that roam unsupervised become aggressive. Therefore, responsible pet owners' dogs are less likely to become aggressive from roaming.`,
    questionStem: "The flawed pattern of reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "No cautious investor puts all their money in one stock. Some diversified portfolios underperform. Therefore, cautious investors' portfolios are less likely to underperform." },
      { letter: "B", text: "No good teacher ignores struggling students. Some struggling students drop out. Therefore, good teachers prevent all dropouts." },
      { letter: "C", text: "No experienced hiker ventures out without proper gear. Some hikers without proper gear get injured. Therefore, experienced hikers are less likely to be injured due to improper gear." },
      { letter: "D", text: "No ethical journalist fabricates sources. Some fabricated stories win awards. Therefore, ethical journalists never win awards." },
      { letter: "E", text: "No skilled chef uses low-quality ingredients. Some dishes made with low-quality ingredients taste good. Therefore, skilled chefs' dishes always taste better." },
    ],
    correctAnswer: "C",
    explanation: "Both arguments follow the same flawed pattern: Group A doesn't do X. Some who do X suffer consequence Y. Therefore, Group A is less likely to suffer Y from X. Both conclusions are actually true but trivially so—if you don't do X, you can't suffer consequences FROM X.",
    wrongAnswerExplanations: {
      A: "The conclusion about underperformance isn't specifically tied to diversification.",
      B: "The conclusion 'prevent all' is different from 'less likely.'",
      D: "The conclusion is about never winning, which is a different logical structure.",
      E: "The conclusion 'always taste better' is different from the original's comparative form."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-019",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Critic: The filmmaker claims her new documentary presents an unbiased view of the political situation. However, she exclusively interviewed members of one political party, used emotionally manipulative music, and omitted well-documented facts that contradict her thesis. Calling this work "unbiased" is simply inaccurate.`,
    questionStem: "The critic's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "attacking the filmmaker's character rather than her work" },
      { letter: "B", text: "providing specific evidence that contradicts a claim" },
      { letter: "C", text: "appealing to the authority of documentary standards" },
      { letter: "D", text: "questioning the filmmaker's expertise in political matters" },
      { letter: "E", text: "suggesting the documentary should not have been made" },
    ],
    correctAnswer: "B",
    explanation: "The critic refutes the filmmaker's claim of being unbiased by citing specific examples of bias: one-sided interviews, manipulative music, and omitted contradicting facts.",
    wrongAnswerExplanations: {
      A: "The critic attacks the work's methodology, not the filmmaker's character.",
      C: "No external standards or authorities are cited.",
      D: "The filmmaker's expertise isn't questioned.",
      E: "The critic doesn't suggest the documentary shouldn't exist, just that it's not unbiased."
    },
    difficulty: "easy"
  },
  {
    id: "lr-9-020",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: When resources are limited, they should be allocated to maximize overall benefit while ensuring that no group is made significantly worse off.

    Situation: The city has funds to either build a new library in the wealthy suburb or repair the deteriorating library in the lower-income neighborhood.`,
    questionStem: "Given the principle, which one of the following would be the most defensible allocation decision?",
    answerChoices: [
      { letter: "A", text: "Build the new suburban library because it would serve more residents" },
      { letter: "B", text: "Repair the existing library because the lower-income neighborhood has fewer alternative resources" },
      { letter: "C", text: "Split the funds equally between both projects" },
      { letter: "D", text: "Build the new library because new construction is more cost-effective than repairs" },
      { letter: "E", text: "Delay both projects until additional funding becomes available" },
    ],
    correctAnswer: "B",
    explanation: "The principle requires maximizing benefit while not making any group significantly worse off. The lower-income neighborhood with fewer alternatives would be made significantly worse off by losing their only library, making repair the better choice.",
    wrongAnswerExplanations: {
      A: "This ignores the principle's requirement not to make groups significantly worse off.",
      C: "Splitting funds might leave both projects incomplete, maximizing neither benefit.",
      D: "Cost-effectiveness alone doesn't address the principle's equity requirement.",
      E: "Delay doesn't address the current allocation decision."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-021",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `A study tracked eating habits and health outcomes over 20 years. Participants who reported eating chocolate regularly had lower rates of heart disease than those who rarely ate chocolate. Yet chocolate contains high amounts of saturated fat and sugar, both of which are known to increase heart disease risk.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent discrepancy?",
    answerChoices: [
      { letter: "A", text: "Dark chocolate contains compounds that have significant cardiovascular benefits" },
      { letter: "B", text: "Participants who ate chocolate exercised more frequently" },
      { letter: "C", text: "The study did not distinguish between different types of chocolate" },
      { letter: "D", text: "Heart disease rates have been declining overall during the study period" },
      { letter: "E", text: "Chocolate consumption has increased in recent decades" },
    ],
    correctAnswer: "A",
    explanation: "If chocolate contains cardiovascular benefits that outweigh the negative effects of its fat and sugar content, this explains how regular chocolate eaters could have lower heart disease rates.",
    wrongAnswerExplanations: {
      B: "This suggests a confounding variable but doesn't explain chocolate's apparent benefit.",
      C: "This points to a study limitation but doesn't resolve the paradox.",
      D: "Overall declining rates don't explain differences between chocolate eaters and non-eaters.",
      E: "Increased consumption trends don't explain the health outcome differences."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-022",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Economist: Countries that have adopted a four-day work week have seen increases in worker productivity and decreases in reported stress levels. Our country should adopt a four-day work week to achieve similar benefits.`,
    questionStem: "Evaluating the economist's recommendation requires knowing which one of the following?",
    answerChoices: [
      { letter: "A", text: "Whether the economist personally supports a four-day work week" },
      { letter: "B", text: "Whether the countries studied have similar economic structures to our country" },
      { letter: "C", text: "How many countries have adopted a four-day work week" },
      { letter: "D", text: "Whether workers prefer a four-day work week to a five-day week" },
      { letter: "E", text: "What the historical standard work week length has been" },
    ],
    correctAnswer: "B",
    explanation: "The argument assumes results from other countries will transfer to this country. Knowing whether the economies are similar would help evaluate whether this assumption is valid.",
    wrongAnswerExplanations: {
      A: "The economist's personal views don't affect the argument's validity.",
      C: "The number of countries doesn't determine transferability of results.",
      D: "Worker preferences don't determine whether the policy will be effective.",
      E: "Historical standards don't affect the current policy recommendation."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-023",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Pet store owner: I've sold hundreds of goldfish over the past year, and I've never had a customer return to complain that their fish died prematurely. This proves that goldfish are hardy pets that live long lives with minimal care.`,
    questionStem: "The reasoning in the pet store owner's argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "relies on a sample that may not represent all goldfish buyers" },
      { letter: "B", text: "assumes that the absence of complaints indicates satisfaction" },
      { letter: "C", text: "fails to consider why customers might not return to complain" },
      { letter: "D", text: "overlooks the possibility that some goldfish require specialized care" },
      { letter: "E", text: "treats the pet store owner as an authority on fish longevity" },
    ],
    correctAnswer: "C",
    explanation: "Customers whose fish died might not bother returning to complain about a low-cost pet. The absence of complaints doesn't prove the fish lived long lives—customers simply might not report deaths.",
    wrongAnswerExplanations: {
      A: "The issue isn't sample representativeness but rather interpreting lack of complaints.",
      B: "The argument is about longevity, not customer satisfaction.",
      D: "Care requirements aren't the focus of the flawed reasoning.",
      E: "The argument doesn't rely on authority claims."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-024",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Historian: The decline of the Roman Empire was primarily caused by economic factors rather than military defeats. As the empire expanded, the cost of defending its borders became unsustainable, forcing debasement of the currency and leading to inflation that undermined the economy.`,
    questionStem: "Which one of the following, if true, most strengthens the historian's argument?",
    answerChoices: [
      { letter: "A", text: "Roman military technology remained superior to that of invading forces" },
      { letter: "B", text: "Roman territories that experienced less inflation maintained stability longer" },
      { letter: "C", text: "Several Roman emperors attempted monetary reforms" },
      { letter: "D", text: "The Roman military was never decisively defeated in a single battle" },
      { letter: "E", text: "Trade routes remained open throughout most of the empire's decline" },
    ],
    correctAnswer: "B",
    explanation: "If areas with less inflation maintained stability longer, this supports the causal link between economic factors (specifically inflation) and the empire's decline.",
    wrongAnswerExplanations: {
      A: "Military superiority might suggest military factors weren't the cause but doesn't directly support economic causation.",
      C: "Reform attempts don't show that economic factors caused decline.",
      D: "This weakens the military explanation but doesn't directly support the economic one.",
      E: "Open trade routes might actually weaken the economic crisis argument."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-025",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Marketing executive: Our company's sales increased by 20% following our social media advertising campaign. Clearly, social media advertising is an effective way to boost sales, and we should invest more heavily in it.`,
    questionStem: "Which one of the following, if true, most seriously weakens the marketing executive's argument?",
    answerChoices: [
      { letter: "A", text: "The company's main competitor also runs social media advertising campaigns" },
      { letter: "B", text: "The sales increase coincided with the introduction of a popular new product" },
      { letter: "C", text: "Social media advertising costs less than traditional advertising" },
      { letter: "D", text: "The company's brand awareness increased during the campaign period" },
      { letter: "E", text: "Some customers reported discovering the company through social media" },
    ],
    correctAnswer: "B",
    explanation: "If a new product was introduced at the same time, the sales increase might be due to the product rather than the advertising. This alternative explanation undermines the causal claim about social media effectiveness.",
    wrongAnswerExplanations: {
      A: "Competitor activities don't explain away this company's sales increase.",
      C: "Cost efficiency doesn't address the effectiveness question.",
      D: "Increased brand awareness is consistent with, not contrary to, ad effectiveness.",
      E: "Customer reports actually support, not weaken, the advertising effectiveness claim."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-026",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Video games that reward players for violent actions desensitize players to violence. Such desensitization makes people more likely to act aggressively in real life. Therefore, violent video games contribute to real-world violence.`,
    questionStem: "The argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "All video games that depict violence reward players for violent actions" },
      { letter: "B", text: "The desensitization effect from video games persists outside of gaming contexts" },
      { letter: "C", text: "People who play violent video games are already predisposed to aggression" },
      { letter: "D", text: "Violent video games are more popular than non-violent games" },
      { letter: "E", text: "Reducing violent video game play would eliminate real-world violence" },
    ],
    correctAnswer: "B",
    explanation: "The argument claims games cause desensitization that causes real-world aggression. This requires that the desensitization experienced while gaming carries over to non-gaming situations.",
    wrongAnswerExplanations: {
      A: "The argument doesn't require all violent games to reward violence.",
      C: "Predisposition would actually weaken the game-causes-violence argument.",
      D: "Popularity is irrelevant to the causal mechanism.",
      E: "The argument claims games contribute to violence, not that they're the sole cause."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-027",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `No effective leaders avoid difficult decisions. Some managers in our company avoid difficult decisions. Therefore, some managers in our company are not effective leaders.`,
    questionStem: "The conclusion above follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "All managers in the company aspire to be effective leaders" },
      { letter: "B", text: "Effective leaders always make the correct decisions" },
      { letter: "C", text: "Managers who avoid difficult decisions are ineffective in other ways too" },
      { letter: "D", text: "The managers who avoid difficult decisions are identifiable" },
      { letter: "E", text: "The conclusion already follows without additional assumptions" },
    ],
    correctAnswer: "E",
    explanation: "The argument is actually valid as stated: No effective leaders avoid difficult decisions (contrapositive: those who avoid difficult decisions are not effective leaders). Some managers avoid difficult decisions. Therefore, those managers are not effective leaders.",
    wrongAnswerExplanations: {
      A: "Aspirations aren't relevant to the logical structure.",
      B: "Correct decisions aren't part of the argument.",
      C: "Additional ineffectiveness isn't needed for the conclusion.",
      D: "Identifiability isn't required for the logical validity."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-028",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The city's new recycling program requires residents to separate recyclables into five categories. Compliance rates have been low, with many residents placing items in incorrect bins. The previous program required only two categories and had much higher compliance rates. However, the new program, when followed correctly, diverts twice as much waste from landfills as the old program.`,
    questionStem: "If all the statements above are true, which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "The new program is diverting more waste from landfills than the old program" },
      { letter: "B", text: "Residents find the five-category system too complicated" },
      { letter: "C", text: "The old program was more effective at reducing landfill waste" },
      { letter: "D", text: "Perfect compliance with the new program would divert more waste than perfect compliance with the old program" },
      { letter: "E", text: "The city should return to the two-category system" },
    ],
    correctAnswer: "D",
    explanation: "The passage states the new program 'when followed correctly' diverts twice as much waste. This means at perfect compliance, the new program would outperform the old program at perfect compliance.",
    wrongAnswerExplanations: {
      A: "Low compliance might mean less actual waste diversion despite higher potential.",
      B: "The passage suggests this but doesn't prove it must be the reason.",
      C: "This can't be determined without knowing actual diversion amounts.",
      E: "No recommendation can be inferred from the facts given."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-029",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Dr. Patel: Clinical trials have shown that the new medication reduces symptoms in 70% of patients. This success rate justifies making it widely available to the public.

    Dr. Reyes: Those trials excluded patients with other health conditions. Until we understand how the medication interacts with other treatments, widespread distribution would be premature.`,
    questionStem: "The main point of disagreement between Dr. Patel and Dr. Reyes concerns",
    answerChoices: [
      { letter: "A", text: "whether the clinical trials were conducted properly" },
      { letter: "B", text: "whether a 70% success rate is sufficient for approval" },
      { letter: "C", text: "whether the medication should be made widely available now" },
      { letter: "D", text: "whether patients with other conditions would benefit from the medication" },
      { letter: "E", text: "whether more research on the medication is needed" },
    ],
    correctAnswer: "C",
    explanation: "Dr. Patel argues for wide availability now based on trial success. Dr. Reyes argues against wide availability now due to incomplete information. They disagree about the timing of distribution.",
    wrongAnswerExplanations: {
      A: "Neither questions whether the trials were conducted properly.",
      B: "The success rate itself isn't disputed; its sufficiency for distribution is.",
      D: "Benefits for other patients aren't directly discussed.",
      E: "While implied, the specific disagreement is about current availability, not research needs."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-030",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Film critic: This year's highest-grossing films were all sequels to existing franchises. Original films, meanwhile, struggled at the box office. This proves that audiences have lost interest in original storytelling and only want familiar characters and predictable plots.`,
    questionStem: "The reasoning in the film critic's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "confuses correlation with causation in explaining audience behavior" },
      { letter: "B", text: "overlooks factors other than content that might explain box office performance" },
      { letter: "C", text: "assumes that box office success accurately measures audience interest" },
      { letter: "D", text: "generalizes from a single year's data to a permanent shift in preferences" },
      { letter: "E", text: "ignores the possibility that this year's original films were of low quality" },
    ],
    correctAnswer: "B",
    explanation: "Box office performance is influenced by many factors beyond content preference: marketing budgets, release timing, theater distribution, star power. Sequels often have advantages in these areas regardless of audience preference for originality.",
    wrongAnswerExplanations: {
      A: "The issue isn't correlation vs. causation but rather alternative explanations.",
      C: "While relevant, the bigger issue is what factors drive box office success.",
      D: "While this is a flaw, the more fundamental issue is the interpretation of the data.",
      E: "This is too specific; the general issue is other factors affecting performance."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-031",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Psychologist: Early childhood exposure to diverse languages improves cognitive flexibility later in life. Children raised in multilingual households consistently score higher on tests measuring mental adaptability. I recommend that parents speak multiple languages at home, even if not fluently.`,
    questionStem: "Which one of the following, if true, most strengthens the psychologist's recommendation?",
    answerChoices: [
      { letter: "A", text: "Children in multilingual households also tend to have higher academic achievement" },
      { letter: "B", text: "Exposure to non-fluent language use still provides significant cognitive benefits" },
      { letter: "C", text: "Many parents are reluctant to use languages they don't speak fluently" },
      { letter: "D", text: "Cognitive flexibility is associated with professional success in adulthood" },
      { letter: "E", text: "The cognitive benefits of multilingual exposure persist into adulthood" },
    ],
    correctAnswer: "B",
    explanation: "The recommendation is specifically that parents should speak multiple languages 'even if not fluently.' If non-fluent exposure still provides benefits, this directly supports that recommendation.",
    wrongAnswerExplanations: {
      A: "Academic achievement is separate from the cognitive flexibility claim.",
      C: "Parental reluctance is a barrier but doesn't strengthen the recommendation's validity.",
      D: "Professional success adds value to flexibility but doesn't address fluency concerns.",
      E: "Persistence of benefits is valuable but doesn't address the fluency question."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-032",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Educational researcher: Schools that have eliminated homework have seen improvements in student well-being and family relationships. Since homework causes stress without significantly improving academic outcomes, more schools should eliminate homework requirements.`,
    questionStem: "Which one of the following, if true, most weakens the researcher's argument?",
    answerChoices: [
      { letter: "A", text: "Some parents believe homework teaches important study habits" },
      { letter: "B", text: "The schools that eliminated homework also made other significant changes to their programs" },
      { letter: "C", text: "Students at schools without homework spend more time on extracurricular activities" },
      { letter: "D", text: "Homework completion rates were already low at schools that eliminated it" },
      { letter: "E", text: "Teachers at schools without homework assign more in-class practice work" },
    ],
    correctAnswer: "B",
    explanation: "If schools made other changes alongside eliminating homework, the improvements might be due to those changes rather than the homework elimination. This confounding factor weakens the causal claim.",
    wrongAnswerExplanations: {
      A: "Parent beliefs don't affect whether homework actually improves outcomes.",
      C: "Increased extracurriculars might explain benefits but doesn't weaken the recommendation.",
      D: "Low completion rates don't address the causal claim about elimination.",
      E: "Substitute practice doesn't address whether the overall change was beneficial."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-033",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Restaurant critic: This restaurant claims to serve authentic Italian cuisine, but the chef trained in France and has never visited Italy. Therefore, the restaurant's claim to authenticity is questionable.`,
    questionStem: "The argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Authentic Italian cuisine cannot be learned outside of Italy" },
      { letter: "B", text: "French culinary training does not include Italian cooking techniques" },
      { letter: "C", text: "The chef's background is relevant to the authenticity of the cuisine" },
      { letter: "D", text: "Customers care about the authenticity of their dining experience" },
      { letter: "E", text: "The restaurant's Italian dishes differ from those served in Italy" },
    ],
    correctAnswer: "C",
    explanation: "The argument uses the chef's training location and travel history to question the food's authenticity. This only works if the chef's background is actually relevant to whether the food is authentic.",
    wrongAnswerExplanations: {
      A: "This is too strong; the argument questions, not denies, authenticity.",
      B: "This isn't necessary; the issue is Italian experience, not French curriculum.",
      D: "Customer preferences aren't relevant to the logical structure.",
      E: "The argument questions authenticity based on background, not proven differences."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-034",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All renewable energy sources have environmental impacts during manufacturing. Wind turbines require rare earth minerals. Solar panels require toxic materials in production.`,
    questionStem: "Which one of the following conclusions can be properly drawn from the statements above?",
    answerChoices: [
      { letter: "A", text: "Renewable energy is not truly environmentally friendly" },
      { letter: "B", text: "Wind turbines have greater environmental impact than solar panels" },
      { letter: "C", text: "Wind turbines and solar panels have environmental impacts during manufacturing" },
      { letter: "D", text: "Non-renewable energy has fewer manufacturing impacts than renewable energy" },
      { letter: "E", text: "The environmental impacts of renewable energy outweigh its benefits" },
    ],
    correctAnswer: "C",
    explanation: "Both wind turbines and solar panels are renewable energy sources. All renewable sources have manufacturing impacts. Therefore, both wind and solar have manufacturing impacts.",
    wrongAnswerExplanations: {
      A: "Manufacturing impacts don't necessarily make something 'not environmentally friendly.'",
      B: "The passage doesn't compare the magnitude of impacts.",
      D: "No information about non-renewable energy is provided.",
      E: "The passage doesn't discuss the overall balance of impacts and benefits."
    },
    difficulty: "easy"
  },
  {
    id: "lr-9-035",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `Museum attendance dropped 30% after the museum began charging admission fees. However, total revenue increased because the fees more than compensated for lost ticket sales. The museum used the additional revenue to acquire new exhibits, but visitor surveys indicate that the new exhibits were not the primary reason most visitors came to the museum.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "The museum should eliminate admission fees to increase attendance" },
      { letter: "B", text: "Most visitors would have come to the museum regardless of the new exhibits" },
      { letter: "C", text: "The admission fees caused some former visitors to stop visiting" },
      { letter: "D", text: "Revenue per visitor increased after admission fees were introduced" },
      { letter: "E", text: "The new exhibits attracted some visitors who would not otherwise have come" },
    ],
    correctAnswer: "D",
    explanation: "Attendance dropped 30% but total revenue increased. With fewer visitors generating more revenue, revenue per visitor must have increased.",
    wrongAnswerExplanations: {
      A: "Policy recommendations aren't supported by the facts alone.",
      B: "The surveys say exhibits weren't the 'primary' reason, not that they had no effect.",
      C: "While likely, the passage doesn't prove fees caused people to stop (vs. other factors).",
      E: "The surveys suggest exhibits weren't the primary draw; we can't conclude they attracted new visitors."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-036",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Since all professional athletes train daily, and some people who train daily suffer injuries, it follows that some professional athletes suffer injuries.`,
    questionStem: "The flawed pattern of reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "Since all musicians practice regularly, and some people who practice regularly develop repetitive strain injuries, some musicians must develop repetitive strain injuries." },
      { letter: "B", text: "Since all doctors study medicine, and all who study medicine learn anatomy, all doctors learn anatomy." },
      { letter: "C", text: "Since some teachers are patient, and all patient people make good parents, some teachers make good parents." },
      { letter: "D", text: "Since no lazy person succeeds, and some students are lazy, some students will not succeed." },
      { letter: "E", text: "Since all birds have wings, and penguins are birds, penguins have wings." },
    ],
    correctAnswer: "A",
    explanation: "Both arguments have the same invalid structure: All A are B. Some B are C. Therefore, some A are C. The conclusion doesn't follow because the 'some B' in the second premise might not overlap with the A that are B.",
    wrongAnswerExplanations: {
      B: "This is a valid syllogism (All A are B, All B are C, so All A are C).",
      C: "This has a different structure involving 'some' in the first premise.",
      D: "This involves negation and has a different logical form.",
      E: "This is a valid syllogism about class membership."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-037",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Professor: Some argue that standardized tests accurately measure intelligence. But consider: the tests are designed by humans who define what counts as 'intelligence,' administered in artificial conditions unlike real-world challenges, and scored using arbitrary cutoff points. Can such a flawed instrument really capture something as complex as human intelligence?`,
    questionStem: "The professor's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "providing an alternative definition of intelligence" },
      { letter: "B", text: "questioning the validity of the measurement tool itself" },
      { letter: "C", text: "appealing to expert opinion about standardized tests" },
      { letter: "D", text: "demonstrating that standardized tests produce inconsistent results" },
      { letter: "E", text: "arguing that intelligence cannot be measured by any means" },
    ],
    correctAnswer: "B",
    explanation: "The professor challenges the claim that tests measure intelligence by pointing out flaws in the tests themselves: human bias in design, artificial conditions, arbitrary scoring.",
    wrongAnswerExplanations: {
      A: "No alternative definition is provided.",
      C: "No expert opinions are cited.",
      D: "Inconsistent results aren't mentioned; design flaws are.",
      E: "The argument questions these tests, not all possible measurements."
    },
    difficulty: "easy"
  },
  {
    id: "lr-9-038",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Principle: Journalists should report information that is in the public interest, but they should not report private information unless it directly relates to a person's public responsibilities.

    Situation: A journalist discovers that a senator has been having an extramarital affair. The affair has no apparent connection to the senator's legislative duties.`,
    questionStem: "According to the principle, which one of the following should the journalist do?",
    answerChoices: [
      { letter: "A", text: "Report the affair because politicians' personal lives are always in the public interest" },
      { letter: "B", text: "Not report the affair because it does not directly relate to the senator's public responsibilities" },
      { letter: "C", text: "Report the affair but omit identifying details about the other person involved" },
      { letter: "D", text: "Report the affair only if other media outlets have already reported it" },
      { letter: "E", text: "Wait to report until determining whether voters would want to know" },
    ],
    correctAnswer: "B",
    explanation: "The principle states private information should only be reported if it directly relates to public responsibilities. Since the affair has no apparent connection to legislative duties, it shouldn't be reported.",
    wrongAnswerExplanations: {
      A: "This contradicts the principle's restriction on private information.",
      C: "The principle doesn't allow reporting with redactions; it says don't report private information unrelated to public duties.",
      D: "Other outlets' decisions aren't mentioned in the principle.",
      E: "Voter interest isn't the criterion in the principle."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-039",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Countries that spend the most on healthcare per capita do not have the best health outcomes. In fact, some countries that spend far less achieve better life expectancy, lower infant mortality, and better chronic disease management than the highest spenders.`,
    questionStem: "Which one of the following, if true, most helps to explain the situation described above?",
    answerChoices: [
      { letter: "A", text: "High-spending countries often spend disproportionately on end-of-life care rather than prevention" },
      { letter: "B", text: "Healthcare spending has increased in all countries over the past decade" },
      { letter: "C", text: "The highest-spending countries have the most advanced medical technology" },
      { letter: "D", text: "People in high-spending countries visit doctors more frequently" },
      { letter: "E", text: "Healthcare costs vary significantly between countries for the same procedures" },
    ],
    correctAnswer: "A",
    explanation: "If high spenders focus on costly end-of-life care rather than prevention, their spending is less efficient at improving population health outcomes, explaining why more spending doesn't produce better results.",
    wrongAnswerExplanations: {
      B: "Universal increases don't explain differences in outcomes.",
      C: "Advanced technology would suggest better outcomes, deepening the paradox.",
      D: "More doctor visits would suggest better care, not worse outcomes.",
      E: "Cost variations explain spending differences, not outcome differences."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-040",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Urban planner: Installing speed bumps on residential streets has been shown to reduce average vehicle speeds by 10-15 mph. To improve pedestrian safety in our neighborhood, we should install speed bumps on all residential streets.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the urban planner's recommendation?",
    answerChoices: [
      { letter: "A", text: "How much speed bumps cost to install and maintain" },
      { letter: "B", text: "Whether current vehicle speeds in the neighborhood pose a safety risk to pedestrians" },
      { letter: "C", text: "How many pedestrians use the residential streets daily" },
      { letter: "D", text: "Whether residents support the installation of speed bumps" },
      { letter: "E", text: "How other neighborhoods have addressed pedestrian safety" },
    ],
    correctAnswer: "B",
    explanation: "The recommendation assumes current speeds are dangerous. If vehicles already travel slowly enough to be safe, reducing speed further wouldn't improve safety, making the intervention unnecessary.",
    wrongAnswerExplanations: {
      A: "Cost is relevant to feasibility but not to whether the intervention would improve safety.",
      C: "Pedestrian numbers matter but baseline speed risk is more fundamental.",
      D: "Resident support affects implementation but not effectiveness.",
      E: "Other approaches don't help evaluate this specific recommendation."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-041",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Union representative: The company claims it cannot afford to give workers a raise, but the CEO received a $2 million bonus last year. If the company can afford to pay executives lavishly, it can afford to raise worker wages.`,
    questionStem: "The union representative's argument is vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "assumes that what is true for one expense category applies to all categories" },
      { letter: "B", text: "fails to consider that the CEO's bonus might be tied to performance metrics" },
      { letter: "C", text: "ignores the possibility that eliminating the bonus would not provide sufficient funds for significant raises" },
      { letter: "D", text: "attacks the company's character rather than its financial claims" },
      { letter: "E", text: "assumes all workers deserve raises regardless of performance" },
    ],
    correctAnswer: "C",
    explanation: "A $2 million bonus divided among many workers might amount to trivial raises. The argument assumes executive pay can fund meaningful wage increases without verifying the math.",
    wrongAnswerExplanations: {
      A: "Both are labor costs; the issue is whether one can fund the other.",
      B: "The bonus justification doesn't affect whether funds could be redirected.",
      D: "The argument is about finances, not character attacks.",
      E: "The argument doesn't claim all workers deserve raises."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-042",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Biologist: The recent decline in the local butterfly population is most likely due to the new pesticide that farmers began using last year. The pesticide is designed to kill crop-damaging insects but can also harm butterflies that visit treated fields.`,
    questionStem: "Which one of the following, if true, most strengthens the biologist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Butterfly populations in untreated areas nearby have remained stable" },
      { letter: "B", text: "The pesticide has been approved by environmental regulatory agencies" },
      { letter: "C", text: "Butterflies are important pollinators for many agricultural crops" },
      { letter: "D", text: "The farmers have noticed fewer crop-damaging insects since using the new pesticide" },
      { letter: "E", text: "Some butterfly species are more resistant to pesticides than others" },
    ],
    correctAnswer: "A",
    explanation: "If butterflies in untreated areas remain stable while those in treated areas decline, this supports the pesticide as the cause, ruling out other factors that would affect all areas equally.",
    wrongAnswerExplanations: {
      B: "Regulatory approval doesn't mean the pesticide doesn't harm butterflies.",
      C: "Butterflies' ecological importance doesn't explain their decline.",
      D: "Pesticide effectiveness on target insects doesn't address butterfly harm.",
      E: "Species variation doesn't explain the overall population decline."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-043",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Career counselor: Students who complete internships during college earn higher starting salaries than those who don't. To maximize earning potential, all students should complete at least one internship before graduating.`,
    questionStem: "Which one of the following, if true, most seriously weakens the career counselor's recommendation?",
    answerChoices: [
      { letter: "A", text: "Some internships are unpaid, requiring students to work without compensation" },
      { letter: "B", text: "Students who seek internships tend to be more career-focused and motivated than those who don't" },
      { letter: "C", text: "Internship availability varies significantly by field of study" },
      { letter: "D", text: "Many successful professionals did not complete internships during college" },
      { letter: "E", text: "The salary difference diminishes after five years of work experience" },
    ],
    correctAnswer: "B",
    explanation: "If students who do internships are already more career-focused, their higher salaries might be due to their motivation rather than the internships themselves. This selection bias undermines the causal claim.",
    wrongAnswerExplanations: {
      A: "Lack of pay doesn't undermine the salary benefit after graduation.",
      C: "Availability issues don't address whether internships cause higher salaries.",
      D: "Exceptions don't disprove a general statistical pattern.",
      E: "Long-term convergence doesn't undermine the starting salary benefit."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-044",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Parents should limit children's screen time because excessive screen use has been linked to sleep problems, obesity, and attention difficulties. Children who spend more than two hours per day on screens show significantly higher rates of these issues.`,
    questionStem: "The argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Two hours per day is the appropriate threshold for defining excessive screen use" },
      { letter: "B", text: "Screen time causes sleep problems, obesity, and attention difficulties rather than merely being associated with them" },
      { letter: "C", text: "All types of screen activities are equally harmful to children" },
      { letter: "D", text: "Children are unable to self-regulate their screen time" },
      { letter: "E", text: "Sleep problems, obesity, and attention difficulties are the only negative effects of screen time" },
    ],
    correctAnswer: "B",
    explanation: "The argument moves from 'linked to' problems to recommending limits. This requires that screen time causes these problems, not just that they occur together due to some other factor.",
    wrongAnswerExplanations: {
      A: "The specific threshold isn't essential to the general recommendation to limit.",
      C: "Differential harm isn't necessary for the general limiting recommendation.",
      D: "The recommendation to parents assumes they should limit, regardless of children's ability.",
      E: "The argument doesn't claim these are the only effects."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-045",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Some innovations that seem revolutionary at first turn out to have minimal long-term impact. Many current technologies are considered revolutionary. Therefore, at least one current technology that is considered revolutionary will have minimal long-term impact.`,
    questionStem: "The conclusion of the argument follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "All innovations are eventually evaluated for their long-term impact" },
      { letter: "B", text: "The pattern of past innovations applies to current technologies" },
      { letter: "C", text: "Current technologies are similar in nature to past innovations" },
      { letter: "D", text: "Most revolutionary-seeming innovations fail to make lasting changes" },
      { letter: "E", text: "At least one current technology considered revolutionary is like past revolutionary-seeming innovations in relevant respects" },
    ],
    correctAnswer: "E",
    explanation: "To conclude that at least one current technology will have minimal impact based on past patterns, we need to assume at least one current technology shares relevant characteristics with those past innovations that had minimal impact.",
    wrongAnswerExplanations: {
      A: "Evaluation doesn't establish that any will have minimal impact.",
      B: "This is vague about which patterns apply how.",
      C: "Similarity in nature is too vague to guarantee the specific conclusion.",
      D: "This is about 'most,' but we need something to connect current to past."
    },
    difficulty: "hard"
  },
  {
    id: "lr-9-046",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The company's employee satisfaction survey revealed that workers in the marketing department reported the highest job satisfaction, while workers in customer service reported the lowest. Both departments have similar salaries and benefits. The main differences are that marketing employees have flexible schedules and work independently, while customer service employees have fixed shifts and must follow strict scripts.`,
    questionStem: "Which one of the following is most strongly supported by the information above?",
    answerChoices: [
      { letter: "A", text: "Flexible schedules and autonomy may contribute to job satisfaction more than salary does" },
      { letter: "B", text: "Customer service employees should be given flexible schedules" },
      { letter: "C", text: "Marketing employees are more talented than customer service employees" },
      { letter: "D", text: "The company should prioritize improving customer service satisfaction" },
      { letter: "E", text: "Job satisfaction is primarily determined by working conditions" },
    ],
    correctAnswer: "A",
    explanation: "With similar pay but different satisfaction levels, the difference likely comes from the differing work conditions (flexibility, autonomy vs. fixed shifts, scripts). This supports that these factors may matter more than salary for satisfaction.",
    wrongAnswerExplanations: {
      B: "This is a recommendation not directly supported by the descriptive information.",
      C: "Talent isn't discussed or implied.",
      D: "Prioritization isn't supported by the survey information alone.",
      E: "'Primarily' is too strong; salary is equal here so we can't compare their importance."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-047",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Educator A: Technology in classrooms enhances learning by providing interactive, engaging content that captures students' attention. Students learn better when they're engaged, and technology achieves this better than traditional lectures.

    Educator B: While technology can be engaging, it often distracts students from deep learning. Students may interact with devices but fail to retain information long-term. Traditional teaching methods, though less flashy, promote better comprehension.`,
    questionStem: "Educator A and Educator B disagree about whether",
    answerChoices: [
      { letter: "A", text: "engagement is beneficial for learning" },
      { letter: "B", text: "technology makes learning more engaging" },
      { letter: "C", text: "technology ultimately improves learning outcomes" },
      { letter: "D", text: "traditional lectures are completely ineffective" },
      { letter: "E", text: "students enjoy using technology in class" },
    ],
    correctAnswer: "C",
    explanation: "Educator A claims technology enhances learning; Educator B claims it can distract from deep learning and hurt retention. They disagree about technology's net effect on learning outcomes.",
    wrongAnswerExplanations: {
      A: "Both seem to accept that engagement is good; they disagree about what produces better learning.",
      B: "Educator B seems to accept technology is engaging ('can be engaging').",
      D: "Neither claims traditional lectures are completely ineffective.",
      E: "Student enjoyment isn't directly discussed by either educator."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-048",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Economist: Free trade agreements have historically led to economic growth in participating countries. The proposed agreement with our largest trading partner will certainly boost our economy significantly.`,
    questionStem: "The reasoning in the economist's argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "ignores potential negative effects of the agreement on specific industries" },
      { letter: "B", text: "assumes that historical patterns will definitely continue" },
      { letter: "C", text: "fails to define what constitutes significant economic growth" },
      { letter: "D", text: "overlooks the interests of the trading partner" },
      { letter: "E", text: "relies on biased sources for information about trade agreements" },
    ],
    correctAnswer: "B",
    explanation: "The economist moves from 'historically led to growth' to 'will certainly boost.' This assumes past patterns guarantee future outcomes, which isn't warranted—circumstances may differ.",
    wrongAnswerExplanations: {
      A: "While potentially relevant, this isn't the main logical flaw in moving from historical trends to certainty.",
      C: "Definitional precision isn't the main issue.",
      D: "Partner interests aren't central to the logical structure.",
      E: "No biased sources are indicated."
    },
    difficulty: "easy"
  },
  {
    id: "lr-9-049",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Linguist: The rare language Xhosan is likely to become extinct within two generations. Currently, only 200 native speakers remain, all over the age of 60. The language has no written form and is not taught in schools. Without intervention, Xhosan will disappear.`,
    questionStem: "Which one of the following, if true, most strengthens the linguist's prediction?",
    answerChoices: [
      { letter: "A", text: "Several other languages in the region have already become extinct" },
      { letter: "B", text: "Young people in the community have shifted to speaking the national language exclusively" },
      { letter: "C", text: "Linguists have begun documenting Xhosan grammar and vocabulary" },
      { letter: "D", text: "The Xhosan-speaking community is geographically isolated" },
      { letter: "E", text: "Some efforts to revive endangered languages have been successful" },
    ],
    correctAnswer: "B",
    explanation: "If young people exclusively speak another language, there's no next generation of speakers. This confirms the extinction prediction by showing no language transmission is occurring.",
    wrongAnswerExplanations: {
      A: "Other extinctions don't directly strengthen this specific prediction.",
      C: "Documentation might preserve records but doesn't ensure living speakers.",
      D: "Isolation might actually help preserve the language by limiting outside influence.",
      E: "Revival successes might actually weaken the extinction prediction."
    },
    difficulty: "medium"
  },
  {
    id: "lr-9-050",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Restaurant owner: My restaurant's success proves that customers prefer locally sourced ingredients. Since we switched to local suppliers three years ago, our revenue has increased by 40% and customer reviews have improved significantly.`,
    questionStem: "Which one of the following, if true, most seriously weakens the restaurant owner's argument?",
    answerChoices: [
      { letter: "A", text: "Many other restaurants in the area also use locally sourced ingredients" },
      { letter: "B", text: "The restaurant also renovated its dining room and hired a new chef around the same time" },
      { letter: "C", text: "Some customers are unaware that the restaurant uses locally sourced ingredients" },
      { letter: "D", text: "Locally sourced ingredients are more expensive than alternatives" },
      { letter: "E", text: "The restaurant industry as a whole has seen revenue increases in recent years" },
    ],
    correctAnswer: "B",
    explanation: "Multiple changes (renovation, new chef, local sourcing) occurred simultaneously. The improved performance could be due to the other changes rather than local sourcing, undermining the causal claim.",
    wrongAnswerExplanations: {
      A: "Other restaurants' practices don't explain this restaurant's improvement.",
      C: "Customer awareness doesn't affect whether local sourcing caused the improvement.",
      D: "Higher costs don't undermine the popularity claim.",
      E: "Industry trends might contribute but don't explain this restaurant's 40% increase specifically."
    },
    difficulty: "medium"
  }
];
