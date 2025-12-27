import { Question } from "../lsat-types";

export const lrQuestionsSet13: Question[] = [
  {
    id: "lr-13-001",
    sectionType: "logical-reasoning",
    stimulus: "Research indicates that patients who believe a treatment will work experience better outcomes than those who are skeptical, even when receiving identical treatments. This placebo effect demonstrates that patient expectations can influence physical health. Therefore, physicians should always express confidence in their prescribed treatments.",
    questionStem: "Which one of the following, if true, most calls into question the recommendation made in the argument?",
    answerChoices: [
      { letter: "A", text: "Some treatments work regardless of patient expectations" },
      { letter: "B", text: "Expressing unwarranted confidence could damage physician credibility if treatments fail" },
      { letter: "C", text: "The placebo effect varies in strength across different medical conditions" },
      { letter: "D", text: "Patients can sometimes detect insincerity in their physicians" },
      { letter: "E", text: "Some physicians are naturally more optimistic than others" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If expressing unwarranted confidence damages credibility when treatments fail, the recommendation could backfire, harming future patient trust and outcomes."
  },
  {
    id: "lr-13-002",
    sectionType: "logical-reasoning",
    stimulus: "Ornithologist: Bird populations in urban areas have declined sharply over the past fifty years. Some blame pesticides, but pesticide use has actually decreased in most urban areas during this period. The real culprit is the replacement of native plants with ornamental species that do not support the insect populations birds depend on for food.",
    questionStem: "The argument proceeds by",
    answerChoices: [
      { letter: "A", text: "establishing a correlation and concluding that it represents a causal relationship" },
      { letter: "B", text: "rejecting one proposed explanation and offering an alternative" },
      { letter: "C", text: "appealing to expert authority to settle a disputed question" },
      { letter: "D", text: "generalizing from a sample to a conclusion about a larger population" },
      { letter: "E", text: "using an analogy to explain an unfamiliar phenomenon" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "method-of-reasoning",
    explanation: "The ornithologist dismisses the pesticide explanation with counter-evidence, then proposes habitat change as an alternative explanation."
  },
  {
    id: "lr-13-003",
    sectionType: "logical-reasoning",
    stimulus: "Every painting in the museum's Renaissance collection was created between 1400 and 1600. The painting attributed to Bellini was not created between 1400 and 1600. Therefore, the painting attributed to Bellini is not in the museum's Renaissance collection.",
    questionStem: "The pattern of reasoning in which one of the following arguments most closely parallels that in the argument above?",
    answerChoices: [
      { letter: "A", text: "All members of the committee voted for the proposal. Jenkins did not vote for the proposal. Therefore, Jenkins is not a member of the committee." },
      { letter: "B", text: "Some books in the library are first editions. This book is in the library. Therefore, this book might be a first edition." },
      { letter: "C", text: "No reptile is warm-blooded. All mammals are warm-blooded. Therefore, no mammal is a reptile." },
      { letter: "D", text: "Most students in the program complete their degrees. Chen is in the program. Therefore, Chen will probably complete the degree." },
      { letter: "E", text: "Every employee received a bonus. Martinez is an employee. Therefore, Martinez received a bonus." }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Both arguments use the pattern: All X have property P; Y does not have P; therefore Y is not X. This is valid modus tollens."
  },
  {
    id: "lr-13-004",
    sectionType: "logical-reasoning",
    stimulus: "Educator: Teaching critical thinking skills directly through dedicated courses is less effective than embedding critical thinking instruction within subject-matter courses. When students learn to think critically about history, science, or literature, they develop transferable skills while also mastering content knowledge.",
    questionStem: "Which one of the following, if true, most strengthens the educator's argument?",
    answerChoices: [
      { letter: "A", text: "Many schools lack resources to offer dedicated critical thinking courses" },
      { letter: "B", text: "Students in embedded critical thinking programs score higher on both subject tests and general reasoning assessments" },
      { letter: "C", text: "Critical thinking has different applications in different academic disciplines" },
      { letter: "D", text: "Teachers of subject-matter courses often lack training in critical thinking pedagogy" },
      { letter: "E", text: "Students generally prefer subject-matter courses to abstract courses" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence that embedded instruction improves both subject mastery and general reasoning supports the claim that it is more effective."
  },
  {
    id: "lr-13-005",
    sectionType: "logical-reasoning",
    stimulus: "Commentator: Critics of immigration argue that immigrants take jobs from native-born workers. Supporters counter that immigrants create jobs by starting businesses and consuming goods and services. Both sides treat immigration's economic impact as a simple net positive or negative, ignoring that impacts vary across different sectors, regions, and skill levels.",
    questionStem: "The commentator's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Immigration has no significant economic impact" },
      { letter: "B", text: "Economic analyses of immigration should be more nuanced" },
      { letter: "C", text: "Neither critics nor supporters of immigration have valid arguments" },
      { letter: "D", text: "Regional economic differences are the most important factor in immigration policy" },
      { letter: "E", text: "Immigration policy should focus exclusively on economic considerations" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The commentator criticizes both sides for oversimplification, supporting the need for more nuanced analysis that accounts for variation."
  },
  {
    id: "lr-13-006",
    sectionType: "logical-reasoning",
    stimulus: "Linguist: Languages change over time, with new words entering and old words falling out of use. Prescriptivists who condemn these changes as corruption of the language ignore that every language they consider correct was itself once a corrupted form of an earlier language. Modern English descends from forms that Latin speakers would have considered barbaric.",
    questionStem: "The linguist's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that historical examples are relevant to contemporary debates" },
      { letter: "B", text: "It does not consider that some language changes might be harmful while others are not" },
      { letter: "C", text: "It fails to define what constitutes corruption of a language" },
      { letter: "D", text: "It appeals to historical precedent to justify all possible changes" },
      { letter: "E", text: "It ignores the practical benefits of maintaining language standards" }
    ],
    correctAnswer: "D",
    difficulty: "hard",
    type: "flaw",
    explanation: "The linguist uses the fact that past changes are now accepted to suggest all changes should be accepted, but not all changes may be equally beneficial."
  },
  {
    id: "lr-13-007",
    sectionType: "logical-reasoning",
    stimulus: "Theater director: Our production will feature gender-blind casting, with actors selected solely on the basis of their audition performances rather than their gender. Some argue this approach is ahistorical for plays written in eras with strict gender roles, but theater has always involved suspension of disbelief. Audiences accept that a stage represents a forest or that an hour represents years.",
    questionStem: "The theater director responds to the criticism by",
    answerChoices: [
      { letter: "A", text: "questioning the expertise of those who raise the criticism" },
      { letter: "B", text: "showing that the criticism is based on a factual error" },
      { letter: "C", text: "arguing that theater already requires accepting conventions that depart from reality" },
      { letter: "D", text: "demonstrating that gender-blind casting was practiced historically" },
      { letter: "E", text: "claiming that historical accuracy is never important in theater" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The director argues that theater always requires conventions (stages as forests, time compression), making gender-blind casting consistent with existing practice."
  },
  {
    id: "lr-13-008",
    sectionType: "logical-reasoning",
    stimulus: "Scientist: The hypothesis that dinosaurs were warm-blooded is supported by evidence of fast growth rates in fossil bones. Cold-blooded animals grow slowly, while the bone structure of many dinosaurs shows rapid growth similar to modern warm-blooded mammals and birds.",
    questionStem: "Which one of the following, if true, most weakens the argument?",
    answerChoices: [
      { letter: "A", text: "Some modern cold-blooded reptiles have bone structures indicating rapid growth" },
      { letter: "B", text: "Not all mammals have identical bone growth patterns" },
      { letter: "C", text: "Some dinosaur species appear to have grown more slowly than others" },
      { letter: "D", text: "Birds are now classified as living dinosaurs" },
      { letter: "E", text: "The climate during the dinosaur era was warmer than today" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If some cold-blooded reptiles also show rapid growth bone structure, then such structure does not necessarily indicate warm-bloodedness."
  },
  {
    id: "lr-13-009",
    sectionType: "logical-reasoning",
    stimulus: "Marketing executive: Our competitor's new product has captured significant market share. Some in our company want to rush a competing product to market, but hastily developed products often fail to meet quality standards. We should instead focus on improving our existing products while thoroughly developing a superior competing product for release next year.",
    questionStem: "Which one of the following principles, if valid, most helps justify the marketing executive's recommendation?",
    answerChoices: [
      { letter: "A", text: "A company should always prioritize long-term success over short-term market share" },
      { letter: "B", text: "Maintaining product quality is more important than responding quickly to competitive threats" },
      { letter: "C", text: "Companies should avoid competing directly with successful products" },
      { letter: "D", text: "Customer loyalty depends primarily on product quality rather than availability" },
      { letter: "E", text: "Market share losses are always temporary if product quality is maintained" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "The executive prioritizes quality over speed, which is justified by the principle that quality matters more than quick competitive response."
  },
  {
    id: "lr-13-010",
    sectionType: "logical-reasoning",
    stimulus: "Urban planner: Cities that invest in public parks see increases in property values in surrounding neighborhoods. Opponents of park spending argue the money would be better spent on infrastructure. However, the property value increases generate additional tax revenue that often exceeds the initial park investment within a decade.",
    questionStem: "The urban planner's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Property values are the only valid measure of public investment success" },
      { letter: "B", text: "Infrastructure investments do not generate increased tax revenue" },
      { letter: "C", text: "The observed property value increases are caused by the park investments" },
      { letter: "D", text: "All neighborhoods benefit equally from park investments" },
      { letter: "E", text: "Property owners support increased taxes in exchange for parks" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument relies on parks causing property value increases; if the correlation is coincidental, the tax revenue argument fails."
  },
  {
    id: "lr-13-011",
    sectionType: "logical-reasoning",
    stimulus: "Ethicist: People often justify lying to protect others' feelings. However, such lies typically protect the liar from discomfort more than they protect the person being lied to. The lie denies the other person information they could use to make better decisions, which is ultimately a greater harm than temporary hurt feelings.",
    questionStem: "Which one of the following, if true, most seriously weakens the ethicist's argument?",
    answerChoices: [
      { letter: "A", text: "Many people prefer not to receive harsh truths about matters they cannot change" },
      { letter: "B", text: "Some lies are told with genuinely altruistic motives" },
      { letter: "C", text: "Hurt feelings can sometimes lead to long-lasting psychological harm" },
      { letter: "D", text: "People often overestimate how much a truth will hurt others" },
      { letter: "E", text: "Cultural norms about honesty vary across societies" }
    ],
    correctAnswer: "A",
    difficulty: "hard",
    type: "weaken",
    explanation: "If people prefer not to know truths about matters they cannot change, withholding such information may not deny them useful decision-making input."
  },
  {
    id: "lr-13-012",
    sectionType: "logical-reasoning",
    stimulus: "Astronomer: Dark matter must exist because the observed motion of stars and galaxies cannot be explained by the gravitational effects of visible matter alone. Without dark matter, galaxies would fly apart because visible matter provides insufficient gravitational force to hold them together.",
    questionStem: "Which one of the following, if true, most strengthens the astronomer's reasoning?",
    answerChoices: [
      { letter: "A", text: "Alternative theories that modify gravity equations have not successfully predicted galaxy behavior" },
      { letter: "B", text: "Dark matter has never been directly observed in laboratory conditions" },
      { letter: "C", text: "The concept of dark matter was first proposed in the 1930s" },
      { letter: "D", text: "Some galaxies contain more dark matter than others" },
      { letter: "E", text: "Visible matter constitutes only about 5 percent of the universe" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If alternative explanations (modified gravity) fail, this strengthens the case for dark matter as the explanation for observed galactic behavior."
  },
  {
    id: "lr-13-013",
    sectionType: "logical-reasoning",
    stimulus: "Art critic: The value of conceptual art lies not in the physical object created but in the idea it embodies. Yet galleries sell conceptual artworks for millions of dollars, treating ideas as if they were scarce commodities. This contradiction reveals that the art market has failed to grasp what makes conceptual art significant.",
    questionStem: "Which one of the following best describes the flaw, if any, in the art critic's reasoning?",
    answerChoices: [
      { letter: "A", text: "It assumes that commercial success is incompatible with artistic significance" },
      { letter: "B", text: "It fails to consider that physical embodiments of ideas may have legitimate value" },
      { letter: "C", text: "It generalizes from a small sample of expensive artworks to the entire market" },
      { letter: "D", text: "It relies on a definition of conceptual art that most artists would reject" },
      { letter: "E", text: "The reasoning is valid and contains no flaw" }
    ],
    correctAnswer: "B",
    difficulty: "hard",
    type: "flaw",
    explanation: "The critic assumes ideas cannot have commercial value embodied in objects, but unique physical expressions of ideas may legitimately be valued."
  },
  {
    id: "lr-13-014",
    sectionType: "logical-reasoning",
    stimulus: "Neuroscientist: People who meditate regularly show structural changes in brain regions associated with attention and emotional regulation. However, it is unclear whether meditation causes these changes or whether people with certain brain characteristics are more likely to take up and continue meditation practice.",
    questionStem: "The neuroscientist's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Meditation has no effect on brain structure" },
      { letter: "B", text: "The relationship between meditation and brain structure may not be causal" },
      { letter: "C", text: "Brain scans cannot accurately measure structural changes" },
      { letter: "D", text: "People should meditate to improve their brain structure" },
      { letter: "E", text: "Regular meditators have superior attention and emotional regulation" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "inference",
    explanation: "The neuroscientist explicitly raises the possibility that selection effects, not causation, could explain the observed correlation."
  },
  {
    id: "lr-13-015",
    sectionType: "logical-reasoning",
    stimulus: "Mayor: Our city's traffic congestion has worsened despite the opening of a new highway bypass. This was predictable. Research shows that new road capacity generates additional vehicle trips—a phenomenon called induced demand. Within a few years of opening, new roads typically fill to their designed capacity.",
    questionStem: "Which one of the following, if true, provides the most support for the mayor's explanation?",
    answerChoices: [
      { letter: "A", text: "The bypass was built below the capacity originally planned due to budget constraints" },
      { letter: "B", text: "Many residents reported changing their commute routes to use the new bypass" },
      { letter: "C", text: "Traffic surveys show that many bypass users previously traveled at off-peak hours or used alternative transportation" },
      { letter: "D", text: "Other cities have experienced similar increases in traffic after building new roads" },
      { letter: "E", text: "The city's population has remained stable since the bypass opened" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If bypass users previously avoided peak driving or used alternatives, the bypass induced new trips rather than just redistributing existing ones."
  },
  {
    id: "lr-13-016",
    sectionType: "logical-reasoning",
    stimulus: "Manager: Our company has a strict policy against employee dating. Some argue this infringes on personal freedom, but workplace romances create conflicts of interest and potential for favoritism. When such relationships end badly, the resulting workplace tension affects everyone's productivity.",
    questionStem: "Which one of the following, if true, most weakens the manager's defense of the policy?",
    answerChoices: [
      { letter: "A", text: "Employees who meet at work and marry have lower divorce rates than average" },
      { letter: "B", text: "Companies without dating policies have comparable productivity levels to those with such policies" },
      { letter: "C", text: "Most workplace relationships do not involve direct reporting relationships" },
      { letter: "D", text: "Some employees have successfully hidden workplace relationships from management" },
      { letter: "E", text: "The policy has been in place for over a decade" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If companies without such policies have comparable productivity, the claimed productivity harms from workplace relationships may not materialize."
  },
  {
    id: "lr-13-017",
    sectionType: "logical-reasoning",
    stimulus: "Principle: A journalist's primary obligation is to report the truth, even when the truth conflicts with the interests of the journalist's employer.\n\nApplication: Reporter Chen was wrong to suppress a story about her newspaper's advertising partnership with a company involved in a scandal.",
    questionStem: "Which one of the following, if true, most helps justify the application of the principle to the situation?",
    answerChoices: [
      { letter: "A", text: "Chen was directly pressured by her editor to suppress the story" },
      { letter: "B", text: "The story concerned matters of significant public interest and was factually accurate" },
      { letter: "C", text: "Other newspapers eventually reported on the scandal" },
      { letter: "D", text: "The newspaper's advertising revenue declined after the scandal became public" },
      { letter: "E", text: "Chen had previously reported stories critical of the newspaper's advertisers" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "The principle concerns truth-telling; if the suppressed story was true and newsworthy, suppressing it violated the truth-telling obligation."
  },
  {
    id: "lr-13-018",
    sectionType: "logical-reasoning",
    stimulus: "Biologist: The population of a certain butterfly species has declined by 90 percent over thirty years. Some attribute this decline to climate change, but the butterfly's range has not shifted as would be expected if climate were the cause. A more likely explanation is the decline of the specific milkweed plants on which this butterfly depends.",
    questionStem: "The biologist's reasoning is most similar to which one of the following?",
    answerChoices: [
      { letter: "A", text: "A patient's symptoms might indicate heart disease, but additional tests are needed before a diagnosis can be made" },
      { letter: "B", text: "The power outage was probably not caused by high demand since neighboring areas with similar demand retained power; a fallen tree likely damaged local lines" },
      { letter: "C", text: "This team has the best record, so they will probably win the championship" },
      { letter: "D", text: "Since no witnesses reported hearing a car alarm, the car was probably not stolen" },
      { letter: "E", text: "The painting appears to be a masterwork, but without provenance documentation, its authenticity cannot be confirmed" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Both arguments reject an explanation because an expected consequence didn't occur, then propose an alternative explanation."
  },
  {
    id: "lr-13-019",
    sectionType: "logical-reasoning",
    stimulus: "Political scientist: Democracies rarely go to war with each other. This is not because democratic leaders are more peaceful but because democratic processes make war-making more difficult. Leaders must build public support, and citizens are reluctant to bear the costs of war unless they perceive a genuine threat.",
    questionStem: "The political scientist's claim that democracies rarely go to war with each other is best supported if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "Non-democratic nations frequently go to war with each other" },
      { letter: "B", text: "Democratic citizens accurately assess threats from other democracies" },
      { letter: "C", text: "The costs of war are higher for democracies than for non-democracies" },
      { letter: "D", text: "Citizens in democracies rarely perceive other democracies as genuine threats" },
      { letter: "E", text: "Democratic leaders are more responsive to public opinion than non-democratic leaders" }
    ],
    correctAnswer: "D",
    difficulty: "hard",
    type: "sufficient-assumption",
    explanation: "If citizens are reluctant to support war without perceiving a threat, and they rarely perceive other democracies as threats, democracies would rarely war with each other."
  },
  {
    id: "lr-13-020",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Countries that rely heavily on natural resource exports often experience slower economic development than those without such resources—a pattern called the resource curse. Resource wealth can fund government activities without taxation, reducing the accountability that comes when citizens pay taxes. Additionally, resource industries can crowd out other sectors that might promote broader development.",
    questionStem: "Which one of the following, if true, most undermines the economist's explanation of the resource curse?",
    answerChoices: [
      { letter: "A", text: "Some resource-rich countries have achieved strong economic development" },
      { letter: "B", text: "The economies of resource-poor countries are often supported by foreign aid that similarly reduces taxation needs" },
      { letter: "C", text: "Resource extraction requires significant capital investment" },
      { letter: "D", text: "Countries without natural resources sometimes have authoritarian governments" },
      { letter: "E", text: "Resource prices are volatile, creating economic instability" }
    ],
    correctAnswer: "B",
    difficulty: "hard",
    type: "weaken",
    explanation: "If foreign aid similarly reduces taxation and accountability in resource-poor countries, they should show similar development problems, suggesting the mechanism doesn't explain the difference."
  },
  {
    id: "lr-13-021",
    sectionType: "logical-reasoning",
    stimulus: "Physician: Many patients request specific medications they have seen advertised, believing the ads reflect medical consensus. However, pharmaceutical advertising promotes the most profitable drugs, not necessarily the most effective ones. Physicians often prescribe these requested medications to maintain patient relationships, even when other treatments might be superior.",
    questionStem: "Which one of the following conclusions is most strongly supported by the physician's statements?",
    answerChoices: [
      { letter: "A", text: "Pharmaceutical advertising should be banned entirely" },
      { letter: "B", text: "Patient requests may influence prescribing in ways that do not optimize treatment" },
      { letter: "C", text: "All advertised medications are inferior to alternatives" },
      { letter: "D", text: "Physicians should never consider patient preferences in treatment decisions" },
      { letter: "E", text: "Patients cannot make informed decisions about their medical care" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The physician suggests that advertising-driven requests lead to prescriptions that may not be optimal, supporting B's moderate conclusion."
  },
  {
    id: "lr-13-022",
    sectionType: "logical-reasoning",
    stimulus: "Sociologist: Social media has been blamed for increasing polarization by creating echo chambers where people only encounter views similar to their own. However, research shows that social media users encounter more diverse viewpoints than non-users. The polarization may stem not from isolation but from the hostile reactions people experience when their views are challenged online.",
    questionStem: "The sociologist's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "rejecting a causal claim and proposing a different causal mechanism for the same effect" },
      { letter: "B", text: "demonstrating that polarization has not actually increased" },
      { letter: "C", text: "arguing that social media has more benefits than drawbacks" },
      { letter: "D", text: "questioning the methodology of research on social media effects" },
      { letter: "E", text: "showing that echo chambers existed before social media" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The sociologist accepts that polarization increased but proposes a different cause (hostile reactions to challenge) than the commonly cited one (echo chambers)."
  },
  {
    id: "lr-13-023",
    sectionType: "logical-reasoning",
    stimulus: "Architect: Modern buildings should incorporate passive solar design, which uses building orientation and materials to regulate temperature naturally. Passive solar buildings require less energy for heating and cooling. Critics argue that passive solar design limits architectural creativity, but the most interesting buildings often emerge from working within constraints.",
    questionStem: "Which one of the following, if true, most weakens the architect's response to the critics?",
    answerChoices: [
      { letter: "A", text: "Some architects have won awards for passive solar designs" },
      { letter: "B", text: "Passive solar design imposes more constraints than other sustainable building approaches" },
      { letter: "C", text: "Many building owners prioritize energy efficiency over architectural distinctiveness" },
      { letter: "D", text: "Traditional buildings often incorporated passive heating and cooling strategies" },
      { letter: "E", text: "The constraints of passive solar design primarily affect building orientation and window placement" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "The architect claims constraints foster creativity, but if passive solar imposes more constraints than alternatives, it may disproportionately limit creativity compared to other sustainable options."
  },
  {
    id: "lr-13-024",
    sectionType: "logical-reasoning",
    stimulus: "Some professional athletes are celebrities. All celebrities receive media attention. Therefore, some professional athletes receive media attention.",
    questionStem: "The reasoning in the argument is",
    answerChoices: [
      { letter: "A", text: "flawed, because it assumes all professional athletes are celebrities" },
      { letter: "B", text: "flawed, because it confuses necessary and sufficient conditions" },
      { letter: "C", text: "valid, because the conclusion necessarily follows from the premises" },
      { letter: "D", text: "flawed, because receiving media attention does not make someone a celebrity" },
      { letter: "E", text: "valid, but only if professional athletes want media attention" }
    ],
    correctAnswer: "C",
    difficulty: "easy",
    type: "evaluate",
    explanation: "The reasoning is valid: if some athletes are celebrities and all celebrities receive media attention, then some athletes (those who are celebrities) receive media attention."
  },
  {
    id: "lr-13-025",
    sectionType: "logical-reasoning",
    stimulus: "Investment advisor: My client wants to invest conservatively to preserve capital. I am recommending government bonds because they are backed by the full faith and credit of the government and have never defaulted. While returns are modest, the security is unmatched.",
    questionStem: "The investment advisor's recommendation assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Past performance of government bonds guarantees future performance" },
      { letter: "B", text: "All of the advisor's clients have similar investment goals" },
      { letter: "C", text: "Government bonds offer the highest returns available" },
      { letter: "D", text: "Conservative investing requires accepting lower returns" },
      { letter: "E", text: "The client's definition of conservative matches the advisor's" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The advisor uses the historical record of no defaults to recommend bonds for future capital preservation, assuming the past predicts the future."
  },
  {
    id: "lr-13-026",
    sectionType: "logical-reasoning",
    stimulus: "Literary scholar: Early critics dismissed science fiction as escapist entertainment unworthy of serious study. Yet the genre has produced works that explore profound questions about technology, society, and human nature. Dismissing an entire genre based on its weakest examples ignores the achievements of its best practitioners.",
    questionStem: "Which one of the following most accurately expresses the main point of the argument?",
    answerChoices: [
      { letter: "A", text: "Science fiction is the most important literary genre" },
      { letter: "B", text: "Literary genres should be judged by their best works rather than their weakest" },
      { letter: "C", text: "The dismissal of science fiction as unworthy of study was unjustified" },
      { letter: "D", text: "Early critics had poor judgment about all literary matters" },
      { letter: "E", text: "Entertainment value and literary merit are unrelated" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The scholar argues that science fiction was wrongly dismissed by pointing to its serious achievements and critiquing the dismissive reasoning."
  },
  {
    id: "lr-13-027",
    sectionType: "logical-reasoning",
    stimulus: "Automotive engineer: Electric vehicles are promoted as environmentally friendly, but their batteries require mining rare earth minerals, which causes significant environmental damage. Additionally, unless the electricity used to charge them comes from renewable sources, their total emissions may not be much lower than conventional vehicles.",
    questionStem: "The engineer's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Electric vehicles should not be manufactured" },
      { letter: "B", text: "The environmental benefits of electric vehicles may be overstated" },
      { letter: "C", text: "Conventional vehicles are better for the environment than electric vehicles" },
      { letter: "D", text: "Rare earth mineral mining will eventually be eliminated" },
      { letter: "E", text: "All vehicle transportation is equally harmful to the environment" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The engineer raises concerns about mining and electricity sources that suggest electric vehicles may not be as environmentally beneficial as claimed."
  },
  {
    id: "lr-13-028",
    sectionType: "logical-reasoning",
    stimulus: "Historian: The conventional view that medieval Europeans believed the Earth was flat is incorrect. Medieval scholars knew the Earth was spherical, as did the ancient Greeks. The flat-Earth myth was invented in the nineteenth century to contrast modern scientific thinking with supposed medieval ignorance.",
    questionStem: "The historian's claim that medieval scholars knew the Earth was spherical would be most undermined by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Evidence that some medieval peasants believed the Earth was flat" },
      { letter: "B", text: "Evidence that the nineteenth-century inventors of the myth had political motivations" },
      { letter: "C", text: "Evidence that medieval maps depicted the Earth as circular rather than spherical" },
      { letter: "D", text: "Evidence that medieval texts widely described the Earth as flat with edges" },
      { letter: "E", text: "Evidence that ancient Greek knowledge was not widely available in medieval Europe" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "weaken",
    explanation: "Direct evidence of flat-Earth beliefs in medieval texts would undermine the claim that scholars knew the Earth was spherical."
  },
  {
    id: "lr-13-029",
    sectionType: "logical-reasoning",
    stimulus: "Restaurant owner: Our competitor across the street lowered prices and saw their customer volume increase. Some of my staff suggest we should lower our prices too. However, our restaurant emphasizes quality and ambiance—attributes that justify our higher prices. Lowering prices might actually drive away customers who associate higher prices with higher quality.",
    questionStem: "The restaurant owner's reasoning relies on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "The competitor's restaurant offers lower quality food" },
      { letter: "B", text: "Price affects customers' perceptions of the restaurant's quality" },
      { letter: "C", text: "All customers prefer high-quality dining experiences" },
      { letter: "D", text: "The competitor's price reduction will fail in the long term" },
      { letter: "E", text: "Staff members do not understand the restaurant business" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The owner's concern about losing customers through price cuts assumes customers use price as a quality signal."
  },
  {
    id: "lr-13-030",
    sectionType: "logical-reasoning",
    stimulus: "Philosopher: Determinists argue that all events, including human decisions, are caused by prior events according to natural laws. Free will advocates counter that we have genuine choices not determined by prior causes. But this debate may rest on a false dichotomy. Our decisions could be influenced by prior causes without being entirely determined by them.",
    questionStem: "The philosopher's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "defending determinism against free will objections" },
      { letter: "B", text: "suggesting that both positions in a debate may overlook a middle position" },
      { letter: "C", text: "proving that free will is compatible with determinism" },
      { letter: "D", text: "demonstrating that the concept of causation is incoherent" },
      { letter: "E", text: "appealing to scientific evidence about brain function" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The philosopher suggests both sides present a false dichotomy, as influenced-but-not-determined decisions offer a middle ground."
  },
  {
    id: "lr-13-031",
    sectionType: "logical-reasoning",
    stimulus: "Environmental policy analyst: Carbon taxes are designed to reduce emissions by making fossil fuels more expensive. However, demand for energy is relatively inelastic in the short term because people need to heat their homes and travel to work regardless of price. Therefore, carbon taxes may generate revenue without significantly reducing emissions.",
    questionStem: "Which one of the following, if true, most weakens the analyst's argument?",
    answerChoices: [
      { letter: "A", text: "Carbon tax revenues can be used to fund renewable energy research" },
      { letter: "B", text: "Carbon taxes have been implemented in several countries over the past decade" },
      { letter: "C", text: "Long-term energy demand becomes more elastic as alternatives become available and behaviors adjust" },
      { letter: "D", text: "Some industries are exempt from carbon taxes" },
      { letter: "E", text: "Energy prices fluctuate due to many factors besides carbon taxes" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "weaken",
    explanation: "If long-term demand is more elastic, carbon taxes would eventually reduce emissions even if short-term effects are limited."
  },
  {
    id: "lr-13-032",
    sectionType: "logical-reasoning",
    stimulus: "Museum director: We have decided not to display an artwork that some community members find offensive. Critics accuse us of censorship, but a museum's role is to serve its community. We are not preventing the artist from showing the work elsewhere; we are simply choosing not to include it in our collection.",
    questionStem: "The museum director's defense would be most strengthened by which one of the following?",
    answerChoices: [
      { letter: "A", text: "The artwork in question has been displayed at other museums" },
      { letter: "B", text: "Museums regularly make decisions about which works to display based on various criteria" },
      { letter: "C", text: "The community members who complained represent a majority of museum visitors" },
      { letter: "D", text: "The artist has publicly criticized the museum's decision" },
      { letter: "E", text: "Some art critics consider the work to be of low quality" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If museums routinely exercise selection judgment based on various criteria, this decision is consistent with normal practice rather than exceptional censorship."
  },
  {
    id: "lr-13-033",
    sectionType: "logical-reasoning",
    stimulus: "All of the firm's senior partners graduated from elite law schools. Morrison is a senior partner at the firm. Therefore, Morrison graduated from an elite law school.",
    questionStem: "Which one of the following arguments exhibits a pattern of reasoning most similar to the argument above?",
    answerChoices: [
      { letter: "A", text: "All roses are flowers. Some flowers are red. Therefore, some roses are red." },
      { letter: "B", text: "Everyone on the expedition team speaks Spanish. Rodriguez is on the expedition team. Therefore, Rodriguez speaks Spanish." },
      { letter: "C", text: "Most students who study regularly pass the exam. Kim studies regularly. Therefore, Kim will probably pass the exam." },
      { letter: "D", text: "No mammals can fly. Bats are mammals. Therefore, bats cannot fly." },
      { letter: "E", text: "Some athletes are vegetarians. Some vegetarians are marathon runners. Therefore, some athletes are marathon runners." }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "parallel-reasoning",
    explanation: "Both arguments follow: All X have property P; Y is an X; therefore Y has property P. This is valid universal instantiation."
  },
  {
    id: "lr-13-034",
    sectionType: "logical-reasoning",
    stimulus: "City planner: Our proposed bike lane network will reduce traffic congestion. Critics argue that removing car lanes for bike lanes will increase congestion, but studies show that bike infrastructure encourages some drivers to switch to cycling. Every person who switches from driving to cycling removes a car from the road while taking up far less space.",
    questionStem: "The city planner's argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Bike lanes are less expensive to construct than car lanes" },
      { letter: "B", text: "A significant number of current drivers would switch to cycling if bike lanes were available" },
      { letter: "C", text: "Cyclists are safer in dedicated bike lanes than on regular roads" },
      { letter: "D", text: "Other cities have implemented similar bike lane networks" },
      { letter: "E", text: "Public transportation is not a viable alternative to driving" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument that removing car lanes reduces congestion requires enough drivers to switch to cycling to offset the lost car capacity."
  },
  {
    id: "lr-13-035",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Regulations requiring businesses to provide employee benefits such as healthcare and paid leave increase labor costs, which may lead some employers to reduce hiring. However, such benefits can also increase worker productivity and reduce turnover, potentially offsetting the cost increase.",
    questionStem: "The economist's statements, if true, most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Regulations mandating employee benefits always benefit the economy" },
      { letter: "B", text: "The net employment effect of benefit mandates is uncertain" },
      { letter: "C", text: "Employers should voluntarily provide benefits without regulatory requirements" },
      { letter: "D", text: "Worker productivity is more important than employment levels" },
      { letter: "E", text: "Regulations never achieve their intended purposes" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The economist presents both negative effects (reduced hiring) and offsetting positive effects (productivity, reduced turnover), suggesting net impact is unclear."
  },
  {
    id: "lr-13-036",
    sectionType: "logical-reasoning",
    stimulus: "Detective: The witness claims she saw the defendant at the crime scene at 9 PM. However, surveillance footage shows the defendant entering his office building at 8:45 PM, and his electronic badge records show he did not leave until 10:30 PM. Either the witness is mistaken or deliberately lying.",
    questionStem: "The detective's reasoning is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It fails to consider that electronic badge records can be falsified" },
      { letter: "B", text: "It assumes the surveillance footage has not been altered" },
      { letter: "C", text: "It does not establish a motive for the witness to lie" },
      { letter: "D", text: "It overlooks the possibility that the defendant left without using his badge" },
      { letter: "E", text: "It relies on the defendant's own testimony" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "flaw",
    explanation: "The detective assumes badge records are complete, but the defendant could have left the building without badging out."
  },
  {
    id: "lr-13-037",
    sectionType: "logical-reasoning",
    stimulus: "Magazine editor: Our fashion section has historically featured only clothing from luxury brands. We should expand coverage to include affordable fashion. Many readers cannot afford luxury items and feel excluded by our current coverage. Including affordable options would better serve our readership.",
    questionStem: "Which one of the following, if true, provides the strongest reason against adopting the editor's recommendation?",
    answerChoices: [
      { letter: "A", text: "The magazine's luxury brand advertisers generate most of its revenue and may withdraw support if affordable brands are featured" },
      { letter: "B", text: "Other fashion magazines already cover affordable fashion extensively" },
      { letter: "C", text: "Luxury fashion trends often influence affordable fashion design" },
      { letter: "D", text: "Some readers enjoy reading about luxury items they cannot afford" },
      { letter: "E", text: "The magazine's fashion editor specializes in luxury brands" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If luxury advertisers provide essential revenue and might leave, the recommendation could threaten the magazine's financial viability."
  },
  {
    id: "lr-13-038",
    sectionType: "logical-reasoning",
    stimulus: "Medical researcher: Clinical trials of a new drug showed it reduced symptoms in 60 percent of patients, compared to 40 percent for the existing treatment. However, the new drug costs ten times more than the existing treatment. Healthcare systems with limited budgets must consider whether the incremental benefit justifies the additional cost.",
    questionStem: "The researcher's statements most clearly suggest which one of the following?",
    answerChoices: [
      { letter: "A", text: "The new drug should not be approved for use" },
      { letter: "B", text: "Clinical trial results are an insufficient basis for healthcare policy decisions" },
      { letter: "C", text: "Cost-effectiveness should be a factor in healthcare decisions" },
      { letter: "D", text: "The existing treatment is superior to the new drug" },
      { letter: "E", text: "All patients should have access to the most effective treatments regardless of cost" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The researcher explicitly raises cost versus benefit as a relevant consideration for budget-limited healthcare systems."
  },
  {
    id: "lr-13-039",
    sectionType: "logical-reasoning",
    stimulus: "Book reviewer: This novel has been praised for its authentic portrayal of a marginalized community. However, the author is not a member of that community. While the portrayal may be well-researched and sympathetic, something is lost when stories about a community are told primarily by outsiders rather than by community members themselves.",
    questionStem: "Which one of the following best describes the reviewer's argumentative strategy?",
    answerChoices: [
      { letter: "A", text: "Claiming that the novel contains factual errors about the community" },
      { letter: "B", text: "Arguing that outsider perspectives, while valuable, cannot fully substitute for insider voices" },
      { letter: "C", text: "Asserting that only members of a community should write about that community" },
      { letter: "D", text: "Questioning whether the novel has actually been praised as claimed" },
      { letter: "E", text: "Suggesting that the author had malicious intentions in writing the novel" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The reviewer acknowledges the outsider portrayal may be sympathetic and well-researched but suggests insider voices offer something outsiders cannot."
  },
  {
    id: "lr-13-040",
    sectionType: "logical-reasoning",
    stimulus: "Archaeologist: The ancient city's walls were designed for defense, with towers positioned at regular intervals for observation. However, no evidence of weapons or battle damage has been found. The walls may have served primarily as symbols of power and territorial boundaries rather than as actual defensive structures.",
    questionStem: "Which one of the following, if true, most strengthens the archaeologist's alternative interpretation?",
    answerChoices: [
      { letter: "A", text: "Other ancient cities in the region had similar wall designs" },
      { letter: "B", text: "The city's gates were elaborate and decorated with symbols of royal authority" },
      { letter: "C", text: "Ancient texts describe the city as a peaceful trading center" },
      { letter: "D", text: "Modern archaeologists sometimes misidentify the function of ancient structures" },
      { letter: "E", text: "The walls were made of locally available stone" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Elaborate, symbolically decorated gates support the interpretation of walls as symbols of power rather than purely defensive structures."
  },
  {
    id: "lr-13-041",
    sectionType: "logical-reasoning",
    stimulus: "Software developer: Artificial intelligence can now generate functional code from natural language descriptions. Some worry this will eliminate programming jobs. However, each technological advance in software development has increased rather than decreased demand for developers by enabling new applications and making software development more accessible.",
    questionStem: "The developer's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that all technological advances have similar effects on employment" },
      { letter: "B", text: "It fails to consider that AI code generation might be of lower quality than human coding" },
      { letter: "C", text: "It ignores the possibility that future advances might differ qualitatively from past ones" },
      { letter: "D", text: "It does not provide specific data about past employment trends" },
      { letter: "E", text: "It conflates accessibility of software development with demand for developers" }
    ],
    correctAnswer: "C",
    difficulty: "hard",
    type: "flaw",
    explanation: "Past technological advances may not predict this one; AI that generates code from natural language could be qualitatively different in its employment effects."
  },
  {
    id: "lr-13-042",
    sectionType: "logical-reasoning",
    stimulus: "Sociologist: Young adults today delay traditional markers of adulthood—marriage, homeownership, stable careers—compared to previous generations. Some interpret this as extended adolescence, but it may reflect rational adaptation to changed economic conditions: longer education requirements, higher housing costs, and less stable employment make these milestones harder to achieve at traditional ages.",
    questionStem: "The sociologist's argument serves primarily to",
    answerChoices: [
      { letter: "A", text: "prove that young adults today are more mature than previous generations" },
      { letter: "B", text: "offer an alternative explanation for behavior that is often negatively characterized" },
      { letter: "C", text: "criticize economic policies that affect young adults" },
      { letter: "D", text: "demonstrate that traditional adulthood markers are no longer relevant" },
      { letter: "E", text: "argue that education requirements have become excessive" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The sociologist reframes delayed milestones as rational adaptation rather than extended adolescence, offering an alternative to a negative interpretation."
  },
  {
    id: "lr-13-043",
    sectionType: "logical-reasoning",
    stimulus: "Principle: Charitable organizations should allocate resources to interventions with the highest expected impact per dollar spent.\n\nApplication: The charity should fund mosquito net distribution rather than building a new community center, even though local leaders prefer the community center.",
    questionStem: "Which one of the following, if true, most helps justify the application?",
    answerChoices: [
      { letter: "A", text: "Mosquito nets have been proven effective at preventing malaria deaths" },
      { letter: "B", text: "The cost per life saved through mosquito net distribution is significantly lower than through community center programs" },
      { letter: "C", text: "Local leaders do not always represent the preferences of community members" },
      { letter: "D", text: "Many other charities fund community centers in the region" },
      { letter: "E", text: "The charity has successfully distributed mosquito nets in the past" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "The principle requires highest impact per dollar; evidence that mosquito nets save more lives per dollar directly applies the principle."
  },
  {
    id: "lr-13-044",
    sectionType: "logical-reasoning",
    stimulus: "Cognitive scientist: Human memory is reconstructive rather than reproductive. We do not replay memories like recordings but rebuild them each time, incorporating current knowledge and beliefs. This explains why eyewitness testimony can be unreliable—witnesses may genuinely believe false memories created through reconstruction.",
    questionStem: "Which one of the following, if true, provides the strongest support for the cognitive scientist's explanation of eyewitness unreliability?",
    answerChoices: [
      { letter: "A", text: "Eyewitnesses who are confident in their memories are more persuasive to juries" },
      { letter: "B", text: "Eyewitness testimony given shortly after an event tends to be more accurate than testimony given later" },
      { letter: "C", text: "Leading questions asked during investigations have been shown to alter witnesses' subsequent memories" },
      { letter: "D", text: "Some eyewitnesses have accurate memories that are later confirmed by physical evidence" },
      { letter: "E", text: "Memory accuracy varies significantly among individuals" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Leading questions altering subsequent memories demonstrates the reconstructive process and explains how false memories can be incorporated."
  },
  {
    id: "lr-13-045",
    sectionType: "logical-reasoning",
    stimulus: "Education reformer: Standardized tests measure only a narrow range of abilities and encourage teaching to the test at the expense of broader learning. We should replace them with portfolio assessments that evaluate diverse skills over time. Critics argue portfolios are subjective, but trained evaluators using clear rubrics achieve high inter-rater reliability.",
    questionStem: "The reformer's response to critics assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Standardized tests have no educational value" },
      { letter: "B", text: "High inter-rater reliability adequately addresses concerns about subjectivity" },
      { letter: "C", text: "All students would perform better on portfolio assessments than on standardized tests" },
      { letter: "D", text: "Training evaluators is less expensive than developing standardized tests" },
      { letter: "E", text: "Portfolio assessments measure the same abilities as standardized tests" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The reformer offers inter-rater reliability as a response to subjectivity concerns, assuming this adequately addresses those concerns."
  },
  {
    id: "lr-13-046",
    sectionType: "logical-reasoning",
    stimulus: "Legal theorist: Mandatory minimum sentences were intended to reduce judicial discretion and ensure consistent punishment. However, they have simply shifted discretion from judges to prosecutors, who now determine sentences through their charging decisions. The stated goal of consistency remains unachieved.",
    questionStem: "Which one of the following, if true, most strengthens the legal theorist's argument?",
    answerChoices: [
      { letter: "A", text: "Some judges support mandatory minimum sentences" },
      { letter: "B", text: "Prosecutorial charging practices vary significantly across jurisdictions" },
      { letter: "C", text: "Mandatory minimums have resulted in longer average sentences" },
      { letter: "D", text: "Public opinion generally favors consistent sentencing" },
      { letter: "E", text: "Some crimes have multiple possible charges with different mandatory minimums" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If prosecutorial practices vary across jurisdictions, the shift of discretion to prosecutors would indeed fail to achieve sentencing consistency."
  },
  {
    id: "lr-13-047",
    sectionType: "logical-reasoning",
    stimulus: "Psychologist: People who keep gratitude journals, regularly writing down things they are grateful for, report higher levels of well-being than those who do not. However, this correlation does not prove causation. People who are already happier may be more likely to maintain such practices.",
    questionStem: "The psychologist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Gratitude journals have no effect on well-being" },
      { letter: "B", text: "Experimental studies are needed to determine whether gratitude practices cause improved well-being" },
      { letter: "C", text: "People should not keep gratitude journals" },
      { letter: "D", text: "Well-being cannot be measured reliably" },
      { letter: "E", text: "Only people who are already happy benefit from gratitude practices" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The psychologist notes correlation doesn't prove causation and suggests selection effects; experiments that control for initial happiness would address this."
  },
  {
    id: "lr-13-048",
    sectionType: "logical-reasoning",
    stimulus: "Art historian: Museums displaying plaster casts of famous sculptures were once common and popular. These casts allowed people who could not travel to see reproductions of masterpieces. The practice fell out of favor as museums prioritized original objects. Perhaps we should reconsider this snobbery—casts democratized access to art in ways original-only displays cannot.",
    questionStem: "The art historian's argument relies on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Plaster casts are indistinguishable from original sculptures" },
      { letter: "B", text: "Experiencing reproductions has value even if originals are preferable" },
      { letter: "C", text: "Museums should prioritize accessibility over authenticity" },
      { letter: "D", text: "Original artworks are not significantly better than reproductions" },
      { letter: "E", text: "All museums should display plaster casts" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument for reviving cast displays depends on reproductions having value for those who cannot access originals."
  },
  {
    id: "lr-13-049",
    sectionType: "logical-reasoning",
    stimulus: "Traffic engineer: Reducing speed limits on residential streets improves pedestrian safety. Critics argue that lower limits increase travel times, but the actual increase is minimal—typically less than a minute per trip. The safety benefits far outweigh this minor inconvenience.",
    questionStem: "The traffic engineer's argument would be most weakened by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Some drivers exceed posted speed limits regardless of what they are" },
      { letter: "B", text: "Pedestrian accidents on residential streets are relatively rare" },
      { letter: "C", text: "Lower speed limits may cause frustrated drivers to use alternative routes through other neighborhoods" },
      { letter: "D", text: "Emergency vehicles are exempt from speed limits" },
      { letter: "E", text: "The cost of changing speed limit signs is substantial" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "weaken",
    explanation: "If lower limits divert traffic to other neighborhoods, safety might decrease there, potentially offsetting or eliminating overall benefits."
  },
  {
    id: "lr-13-050",
    sectionType: "logical-reasoning",
    stimulus: "Philosopher: We praise people for virtues like kindness and courage while blaming them for vices like cruelty and cowardice. But neuroscience shows that personality traits result from genetic and environmental factors beyond individual control. If people do not choose their characters, can we justify moral praise and blame?",
    questionStem: "The philosopher raises this question primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that moral praise and blame are never justified" },
      { letter: "B", text: "demonstrate that neuroscience has resolved long-standing philosophical debates" },
      { letter: "C", text: "suggest a tension between scientific findings and common moral practices" },
      { letter: "D", text: "prove that genetic factors are more important than environmental factors" },
      { letter: "E", text: "defend traditional moral practices against scientific criticism" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The philosopher highlights a potential conflict between scientific understanding of character formation and the moral practice of praise and blame."
  }
];
