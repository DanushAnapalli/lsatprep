import { Question } from "../lsat-types";

export const lrQuestionsSet15: Question[] = [
  {
    id: "lr-15-001",
    sectionType: "logical-reasoning",
    stimulus: "Pharmaceutical companies argue that high drug prices are necessary to fund research and development of new treatments. However, these companies spend more on marketing and advertising than on research. If drug prices were primarily driven by research costs, we would expect research expenditures to exceed marketing expenditures.",
    questionStem: "Which one of the following, if true, most weakens the argument?",
    answerChoices: [
      { letter: "A", text: "Some pharmaceutical companies have reduced their marketing budgets in recent years" },
      { letter: "B", text: "Marketing costs may be necessary to recoup research investments by ensuring drugs reach patients who need them" },
      { letter: "C", text: "Generic drug manufacturers spend very little on research" },
      { letter: "D", text: "Some countries regulate pharmaceutical advertising" },
      { letter: "E", text: "Drug development timelines have lengthened over the past decade" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If marketing is necessary to recoup research investments, high marketing spending doesn't disprove that prices are driven by research costs."
  },
  {
    id: "lr-15-002",
    sectionType: "logical-reasoning",
    stimulus: "Museum curator: Our institution has been criticized for displaying artifacts acquired during the colonial era. We acknowledge the problematic circumstances of these acquisitions. However, removing them from display would deprive millions of visitors of the opportunity to learn about world cultures and would not undo historical injustices.",
    questionStem: "The curator's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "The educational value of displaying artifacts outweighs concerns about their acquisition" },
      { letter: "B", text: "All artifacts in the museum were acquired during the colonial era" },
      { letter: "C", text: "Visitors cannot learn about world cultures through other means" },
      { letter: "D", text: "Historical injustices should not influence current museum policies" },
      { letter: "E", text: "Countries of origin do not have adequate museum facilities" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The curator weighs educational value against acquisition concerns; this requires assuming the educational value is sufficient to outweigh the concerns."
  },
  {
    id: "lr-15-003",
    sectionType: "logical-reasoning",
    stimulus: "Sociologist: Income inequality has increased significantly over the past four decades. Some economists attribute this to technological change that rewards skilled workers. Others point to declining union membership and changes in tax policy. Most likely, all these factors have contributed, as each explanation has supporting evidence and none fully accounts for the trend on its own.",
    questionStem: "The sociologist's conclusion is best described as",
    answerChoices: [
      { letter: "A", text: "a rejection of all proposed explanations as inadequate" },
      { letter: "B", text: "an endorsement of technological change as the primary cause" },
      { letter: "C", text: "a synthesis that acknowledges multiple contributing factors" },
      { letter: "D", text: "a claim that the causes of inequality cannot be determined" },
      { letter: "E", text: "a prediction about future inequality trends" }
    ],
    correctAnswer: "C",
    difficulty: "easy",
    type: "main-conclusion",
    explanation: "The sociologist concludes that all mentioned factors likely contributed, synthesizing the various explanations rather than choosing one."
  },
  {
    id: "lr-15-004",
    sectionType: "logical-reasoning",
    stimulus: "Linguist: Children acquire language with remarkable speed and uniformity despite varying quality of input from adults. This suggests that humans have innate language-learning capacities that go beyond general intelligence. If language were learned purely through imitation and reinforcement, we would expect greater variation in acquisition patterns.",
    questionStem: "Which one of the following, if true, most strengthens the linguist's argument?",
    answerChoices: [
      { letter: "A", text: "Children in different cultures begin speaking at approximately the same age" },
      { letter: "B", text: "Adults who learn second languages show more variation in acquisition than children learning first languages" },
      { letter: "C", text: "Some languages have more complex grammar than others" },
      { letter: "D", text: "Children of highly verbal parents speak earlier than average" },
      { letter: "E", text: "Language acquisition involves areas of the brain not used for other cognitive tasks" }
    ],
    correctAnswer: "E",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Dedicated brain areas for language support the claim of specialized innate language capacities beyond general learning abilities."
  },
  {
    id: "lr-15-005",
    sectionType: "logical-reasoning",
    stimulus: "Editorial: The city should not fund a new sports stadium. Proponents cite economic benefits, but studies show that stadium subsidies rarely generate promised returns. The jobs created are mostly low-wage and seasonal. Meanwhile, the funding could be used for schools and infrastructure with more reliable and equitable benefits.",
    questionStem: "The editorial's argument would be most strengthened by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Professional sports teams generate civic pride" },
      { letter: "B", text: "Cities that built stadiums experienced no greater economic growth than comparable cities that did not" },
      { letter: "C", text: "The stadium proposal has support from local business owners" },
      { letter: "D", text: "Some stadium projects have been completed under budget" },
      { letter: "E", text: "The city's schools are currently ranked above the state average" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Comparative evidence that stadium cities don't show greater growth than non-stadium cities supports the claim that economic benefits don't materialize."
  },
  {
    id: "lr-15-006",
    sectionType: "logical-reasoning",
    stimulus: "Principle: Employers should not discriminate against job applicants based on factors unrelated to job performance.\n\nApplication: The company should not have rejected the applicant based on a credit check, as credit history does not predict job performance in this position.",
    questionStem: "Which one of the following, if true, most undermines the application of the principle?",
    answerChoices: [
      { letter: "A", text: "Many companies use credit checks in their hiring processes" },
      { letter: "B", text: "The position involves handling large sums of money, and employees with financial stress are statistically more likely to commit fraud" },
      { letter: "C", text: "The applicant's credit problems resulted from medical expenses" },
      { letter: "D", text: "Credit history is protected information in some jurisdictions" },
      { letter: "E", text: "The company has hired employees with poor credit in the past" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "If credit history predicts fraud risk for positions handling money, it is related to job performance, undermining the application."
  },
  {
    id: "lr-15-007",
    sectionType: "logical-reasoning",
    stimulus: "Naturalist: Wolves were reintroduced to Yellowstone National Park, and the elk population subsequently declined. Some attribute the decline entirely to wolf predation. But wolves prefer to prey on elk that are young, old, or sick. The resulting healthier elk population may actually be more sustainable than the previous larger but weaker herd.",
    questionStem: "The naturalist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Wolf reintroduction should not be judged solely by its effect on elk numbers" },
      { letter: "B", text: "Elk populations will eventually increase to pre-reintroduction levels" },
      { letter: "C", text: "Wolves benefit all species in the Yellowstone ecosystem" },
      { letter: "D", text: "Large elk populations are always unhealthy" },
      { letter: "E", text: "Predators should be reintroduced to all national parks" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "inference",
    explanation: "The naturalist suggests that population size alone misses the quality improvement, supporting a more nuanced evaluation of reintroduction effects."
  },
  {
    id: "lr-15-008",
    sectionType: "logical-reasoning",
    stimulus: "Attorney: The witness's testimony should be disregarded. She claims to have observed the defendant at the scene from 200 feet away, at night, in a poorly lit area. Visual identification under such conditions is notoriously unreliable, as numerous studies have demonstrated.",
    questionStem: "The attorney's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "questioning the witness's character and honesty" },
      { letter: "B", text: "citing research to challenge the reliability of the testimony under the specific conditions" },
      { letter: "C", text: "arguing that the defendant has an alibi" },
      { letter: "D", text: "demonstrating that the witness has a motive to lie" },
      { letter: "E", text: "showing that the testimony contradicts physical evidence" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "method-of-reasoning",
    explanation: "The attorney uses research on visual identification reliability under the specific conditions (distance, night, poor lighting) to challenge the testimony."
  },
  {
    id: "lr-15-009",
    sectionType: "logical-reasoning",
    stimulus: "Coffee retailer: We should source all our beans from fair trade certified suppliers. While these beans cost more, customers increasingly prefer ethically sourced products. The premium price will be offset by increased customer loyalty and willingness to pay higher prices for fair trade products.",
    questionStem: "The coffee retailer's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that customer preferences will remain constant" },
      { letter: "B", text: "It assumes that customers who express preference for ethical products will actually pay more for them" },
      { letter: "C", text: "It ignores the environmental impact of coffee farming" },
      { letter: "D", text: "It does not consider that some suppliers might falsely claim fair trade certification" },
      { letter: "E", text: "It fails to acknowledge that fair trade certification has varying standards" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "Customers may express ethical preferences in surveys but not actually pay premium prices when purchasing—a well-documented attitude-behavior gap."
  },
  {
    id: "lr-15-010",
    sectionType: "logical-reasoning",
    stimulus: "All members of the symphony orchestra have formal musical training. Some members of the symphony orchestra also teach at the conservatory. Therefore, some people who teach at the conservatory have formal musical training.",
    questionStem: "The reasoning in the argument is",
    answerChoices: [
      { letter: "A", text: "flawed, because it assumes that only orchestra members teach at the conservatory" },
      { letter: "B", text: "flawed, because it confuses necessary and sufficient conditions" },
      { letter: "C", text: "valid, because the conclusion follows necessarily from the premises" },
      { letter: "D", text: "flawed, because it draws a conclusion about all conservatory teachers from evidence about some" },
      { letter: "E", text: "valid, but only if all conservatory teachers are orchestra members" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "evaluate",
    explanation: "The argument is valid: if all orchestra members have training and some orchestra members teach at the conservatory, those some must have training."
  },
  {
    id: "lr-15-011",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Increasing the minimum wage is often opposed on grounds it would cause unemployment. But recent studies comparing neighboring counties with different minimum wages found no significant employment differences. The simplistic supply-demand model that predicts job losses may not accurately describe low-wage labor markets.",
    questionStem: "The economist's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "proving that minimum wage increases never cause unemployment" },
      { letter: "B", text: "citing empirical evidence that challenges a theoretical prediction" },
      { letter: "C", text: "arguing that all economic models are unreliable" },
      { letter: "D", text: "demonstrating that neighboring counties have identical economic conditions" },
      { letter: "E", text: "appealing to the authority of recent researchers" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The economist uses empirical findings (no employment difference) to challenge the theoretical prediction (minimum wage causes unemployment)."
  },
  {
    id: "lr-15-012",
    sectionType: "logical-reasoning",
    stimulus: "Parent: My teenager argues that since all of her friends have smartphones, she should have one too. But the popularity of something does not make it appropriate. Many teenagers also engage in risky behaviors that are clearly inappropriate. Parental judgment, not peer practices, should guide our decisions.",
    questionStem: "The parent's response addresses the teenager's argument by",
    answerChoices: [
      { letter: "A", text: "providing evidence that smartphones are harmful to teenagers" },
      { letter: "B", text: "demonstrating that the teenager's friends should not have smartphones" },
      { letter: "C", text: "rejecting the principle that peer practices should determine what is appropriate" },
      { letter: "D", text: "arguing that all popular activities among teenagers are risky" },
      { letter: "E", text: "questioning whether the teenager's claim about friends is accurate" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The parent challenges the implicit principle in the teenager's argument—that popularity among peers determines appropriateness."
  },
  {
    id: "lr-15-013",
    sectionType: "logical-reasoning",
    stimulus: "Historian: The conventional narrative credits a single inventor with transformative technologies. But major innovations typically build on prior work by many contributors and require favorable social conditions for adoption. The 'lone genius' model oversimplifies how technological change actually occurs.",
    questionStem: "Which one of the following, if true, most strengthens the historian's argument?",
    answerChoices: [
      { letter: "A", text: "Patent law assigns credit for inventions to individuals" },
      { letter: "B", text: "Many significant inventions were developed simultaneously by multiple researchers working independently" },
      { letter: "C", text: "Some inventors worked in isolation from the scientific community" },
      { letter: "D", text: "Historical records often focus on prominent individuals" },
      { letter: "E", text: "Technological change has accelerated in recent decades" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Simultaneous independent development suggests innovations emerge from broader conditions rather than unique individual genius."
  },
  {
    id: "lr-15-014",
    sectionType: "logical-reasoning",
    stimulus: "No truly innovative company relies solely on market research to develop products. TechStart relies heavily on market research to develop products. Therefore, TechStart is not a truly innovative company.",
    questionStem: "Which one of the following arguments contains a flaw most similar to that in the argument above, if any?",
    answerChoices: [
      { letter: "A", text: "No great artist creates work merely for commercial success. Rivera creates work for commercial success. Therefore, Rivera is not a great artist." },
      { letter: "B", text: "All successful restaurants have clean kitchens. This restaurant has a clean kitchen. Therefore, this restaurant is successful." },
      { letter: "C", text: "Some competitive athletes use visualization techniques. Chen is a competitive athlete. Therefore, Chen might use visualization techniques." },
      { letter: "D", text: "The original argument contains no flaw; it is logically valid." },
      { letter: "E", text: "Every published author has faced rejection. Martinez has faced rejection. Therefore, Martinez is a published author." }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "The original argument is valid modus tollens: No X does Y; Z does Y; therefore Z is not X. Answer A has similar structure and is also valid."
  },
  {
    id: "lr-15-015",
    sectionType: "logical-reasoning",
    stimulus: "Researcher: Participants in our study who were told they were drinking caffeinated coffee showed increased alertness, even though all coffee served was decaffeinated. This demonstrates that the expectation of caffeine can produce effects similar to actual caffeine consumption.",
    questionStem: "Which one of the following, if true, most strengthens the researcher's conclusion?",
    answerChoices: [
      { letter: "A", text: "Some participants reported not liking the taste of the coffee" },
      { letter: "B", text: "A control group told they were drinking decaf showed no alertness increase" },
      { letter: "C", text: "Caffeine typically produces alertness within 20 minutes of consumption" },
      { letter: "D", text: "The study was conducted in the morning when participants might naturally become more alert" },
      { letter: "E", text: "Alertness was measured using standardized psychological tests" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "A control group showing no alertness increase isolates the expectation as the cause, rather than other factors like time of day or general participation effects."
  },
  {
    id: "lr-15-016",
    sectionType: "logical-reasoning",
    stimulus: "Dance instructor: Traditional ballet training emphasizes rigid technique from an early age. Some argue this produces the best dancers. However, many successful contemporary dancers began training later and developed through more varied movement practices. Excellence in dance may not require early traditional training.",
    questionStem: "The dance instructor's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It does not define what constitutes excellence in dance" },
      { letter: "B", text: "It compares different dance forms that may have different requirements" },
      { letter: "C", text: "It assumes that all dance instructors agree on training methods" },
      { letter: "D", text: "It ignores the role of natural talent in dance achievement" },
      { letter: "E", text: "It fails to consider the experiences of unsuccessful dancers" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "Traditional ballet and contemporary dance may require different skills, making comparison of training paths potentially invalid."
  },
  {
    id: "lr-15-017",
    sectionType: "logical-reasoning",
    stimulus: "City engineer: The new bridge design uses a single-tower suspension system that some critics call untested. But every bridge design was untested at some point. The Brooklyn Bridge was among the first suspension bridges and is now celebrated as an engineering triumph. Innovation requires willingness to try new approaches.",
    questionStem: "The city engineer's response is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It appeals to the historical success of a different type of bridge" },
      { letter: "B", text: "It fails to address specific safety concerns about the proposed design" },
      { letter: "C", text: "It assumes that critics oppose all new bridge designs" },
      { letter: "D", text: "It does not explain how the new design differs from existing designs" },
      { letter: "E", text: "It ignores the fact that some innovative designs have failed" }
    ],
    correctAnswer: "E",
    difficulty: "medium",
    type: "flaw",
    explanation: "The engineer cites a successful innovation but ignores that many innovations fail, so past successful innovation doesn't guarantee this one will succeed."
  },
  {
    id: "lr-15-018",
    sectionType: "logical-reasoning",
    stimulus: "Environmental advocate: Bottled water generates enormous plastic waste when tap water is equally safe in most developed countries. Consumers pay hundreds of times more per gallon for bottled water than tap water. The popularity of bottled water demonstrates successful marketing rather than genuine consumer need.",
    questionStem: "Which one of the following, if true, most weakens the environmental advocate's argument?",
    answerChoices: [
      { letter: "A", text: "Some bottled water companies have improved their recycling programs" },
      { letter: "B", text: "Bottled water consumption has increased during periods when tap water contamination incidents received publicity" },
      { letter: "C", text: "The bottled water industry employs many people" },
      { letter: "D", text: "Some consumers prefer the taste of certain bottled water brands" },
      { letter: "E", text: "Tap water quality varies across different municipalities" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If bottled water consumption increases following contamination publicity, consumers may be responding to perceived safety concerns rather than just marketing."
  },
  {
    id: "lr-15-019",
    sectionType: "logical-reasoning",
    stimulus: "Literary critic: The novel has been praised for its realistic dialogue. But the characters speak in complete sentences with perfect grammar—no interruptions, no incomplete thoughts, no verbal tics. Real conversation is messy and fragmented. The dialogue is stylized, not realistic.",
    questionStem: "The literary critic's argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Stylized dialogue is inferior to realistic dialogue" },
      { letter: "B", text: "Readers prefer messy, fragmented dialogue in novels" },
      { letter: "C", text: "Realistic dialogue must resemble actual speech patterns" },
      { letter: "D", text: "The author was unaware of how people actually speak" },
      { letter: "E", text: "Other aspects of the novel are also unrealistic" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The critic defines realism by resemblance to actual speech; if realistic dialogue need not match actual speech patterns, the argument fails."
  },
  {
    id: "lr-15-020",
    sectionType: "logical-reasoning",
    stimulus: "Technology analyst: Some predict that autonomous vehicles will eliminate driving jobs within two decades. But previous automation predictions were consistently wrong about timing. The transition will likely take much longer as technology, regulations, and public acceptance all must align.",
    questionStem: "The technology analyst's conclusion is best described as",
    answerChoices: [
      { letter: "A", text: "a rejection of the possibility that autonomous vehicles will affect employment" },
      { letter: "B", text: "a prediction that autonomous vehicles will never be widely adopted" },
      { letter: "C", text: "a claim that the timeline for autonomous vehicle adoption is uncertain" },
      { letter: "D", text: "an argument that driving jobs should be protected" },
      { letter: "E", text: "a defense of previous automation predictions" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The analyst argues the transition will take longer than predicted, not that it won't happen—a claim about uncertain timing."
  },
  {
    id: "lr-15-021",
    sectionType: "logical-reasoning",
    stimulus: "Biologist: Species conservation efforts typically focus on large, charismatic animals like pandas and elephants. But small organisms—insects, fungi, bacteria—play essential roles in ecosystems. A collapsed insect population would cause far more ecological damage than the extinction of any single large mammal. Conservation priorities should reflect ecological importance, not public appeal.",
    questionStem: "Which one of the following, if true, most strengthens the biologist's argument?",
    answerChoices: [
      { letter: "A", text: "Conservation funding is limited and must be allocated strategically" },
      { letter: "B", text: "Insect populations have declined dramatically in recent decades" },
      { letter: "C", text: "Large mammals are often flagship species that attract conservation funding" },
      { letter: "D", text: "Some small organisms are more photogenic than others" },
      { letter: "E", text: "Public interest in conservation has increased" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Declining insect populations make the case for prioritizing them more urgent, strengthening the argument for redirecting conservation focus."
  },
  {
    id: "lr-15-022",
    sectionType: "logical-reasoning",
    stimulus: "Architect: Green building certifications assess energy efficiency, water use, and material sustainability. Some criticize these certifications for ignoring the carbon emissions embedded in construction materials—the energy used to manufacture and transport materials. These embedded emissions can equal years of operating emissions.",
    questionStem: "The architect's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Green building certifications should be eliminated" },
      { letter: "B", text: "Current green building certifications may present an incomplete picture of environmental impact" },
      { letter: "C", text: "Operating emissions are more important than embedded emissions" },
      { letter: "D", text: "All construction materials have similar embedded emissions" },
      { letter: "E", text: "Green buildings are no better for the environment than conventional buildings" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The criticism that certifications ignore significant embedded emissions suggests they provide an incomplete environmental assessment."
  },
  {
    id: "lr-15-023",
    sectionType: "logical-reasoning",
    stimulus: "Every exhibit in the museum's collection was donated by a private collector. The ancient Greek vase was purchased at auction. Therefore, the ancient Greek vase is not in the museum's collection.",
    questionStem: "The pattern of reasoning in the argument is most closely paralleled by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Every licensed physician completed medical school. Dr. Torres completed medical school. Therefore, Dr. Torres is a licensed physician." },
      { letter: "B", text: "Every recipe in the cookbook was developed by a professional chef. This recipe came from a home cook. Therefore, this recipe is not in the cookbook." },
      { letter: "C", text: "Some elected officials have law degrees. Governor Smith does not have a law degree. Therefore, Governor Smith is not an elected official." },
      { letter: "D", text: "All mammals are warm-blooded. Sharks are cold-blooded. Therefore, sharks are not mammals." },
      { letter: "E", text: "Most participants in the study were women. Chang is a man. Therefore, Chang did not participate in the study." }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Both arguments: Every X was Y; Z was not Y; therefore Z is not X. This is valid modus tollens."
  },
  {
    id: "lr-15-024",
    sectionType: "logical-reasoning",
    stimulus: "Consumer advocate: Extended warranty plans are rarely worth their cost. The products covered are typically reliable during the warranty period, and repair costs often do not exceed the warranty price. Retailers push these warranties because they are highly profitable—evidence that consumers are not benefiting.",
    questionStem: "The consumer advocate's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Retailers are aware that consumers rarely benefit from extended warranties" },
      { letter: "B", text: "All products are equally reliable" },
      { letter: "C", text: "Profitability for retailers indicates poor value for consumers" },
      { letter: "D", text: "Extended warranties never cover repair costs" },
      { letter: "E", text: "Consumers purchase extended warranties primarily due to retailer pressure" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The advocate uses retailer profitability as evidence consumers don't benefit, assuming a zero-sum relationship between retailer profits and consumer value."
  },
  {
    id: "lr-15-025",
    sectionType: "logical-reasoning",
    stimulus: "Music critic: The streaming era has democratized music distribution, allowing independent artists to reach audiences without major label support. Some celebrate this as liberating artists. However, with millions of tracks available, most independent artists earn negligible streaming income while platforms profit enormously. Democratized access has not meant equitable compensation.",
    questionStem: "The music critic's argument serves primarily to",
    answerChoices: [
      { letter: "A", text: "recommend that artists avoid streaming platforms" },
      { letter: "B", text: "argue that major labels treated artists more fairly" },
      { letter: "C", text: "qualify an optimistic view of streaming's impact on artists" },
      { letter: "D", text: "predict that streaming platforms will eventually fail" },
      { letter: "E", text: "demonstrate that independent artists prefer physical album sales" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The critic acknowledges streaming's democratization but adds important context about compensation, qualifying the celebratory view."
  },
  {
    id: "lr-15-026",
    sectionType: "logical-reasoning",
    stimulus: "Political theorist: Voting is often described as a civic duty. But in large elections, any individual vote has an infinitesimal probability of affecting the outcome. If the value of an action depends on its consequences, and one vote has virtually no consequences, why should voting be considered obligatory?",
    questionStem: "Which one of the following, if true, most directly addresses the theorist's challenge?",
    answerChoices: [
      { letter: "A", text: "Many elections are decided by narrow margins" },
      { letter: "B", text: "The value of voting may lie in expressing civic identity rather than affecting outcomes" },
      { letter: "C", text: "Some voters research candidates more thoroughly than others" },
      { letter: "D", text: "Compulsory voting exists in some democracies" },
      { letter: "E", text: "Voter turnout has declined in recent decades" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Answer B challenges the premise that value depends on consequences by offering an alternative source of voting's value—civic expression."
  },
  {
    id: "lr-15-027",
    sectionType: "logical-reasoning",
    stimulus: "Nutritionist: Many foods marketed as healthy are actually high in sugar. Yogurt, granola bars, and smoothies often contain as much sugar as candy bars. Consumers who believe they are making healthy choices based on marketing claims may inadvertently consume excessive sugar.",
    questionStem: "The nutritionist's statements most strongly support which one of the following recommendations?",
    answerChoices: [
      { letter: "A", text: "Consumers should avoid all yogurt, granola bars, and smoothies" },
      { letter: "B", text: "Consumers should read nutrition labels rather than relying on health marketing claims" },
      { letter: "C", text: "Sugar should be banned from all processed foods" },
      { letter: "D", text: "Marketing of food products should be prohibited" },
      { letter: "E", text: "Candy bars are healthier than commonly believed" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "inference",
    explanation: "The discrepancy between marketing claims and actual sugar content supports checking nutrition labels rather than trusting marketing."
  },
  {
    id: "lr-15-028",
    sectionType: "logical-reasoning",
    stimulus: "Scientist: Climate models have predicted rising temperatures, and observed temperatures have matched predictions. Some argue that model accuracy on temperature proves their other predictions—sea level rise, extreme weather—are equally reliable. But temperature is the most directly measurable variable and the one models are calibrated to match. Other predictions involve more complex processes with greater uncertainty.",
    questionStem: "The scientist's argument is most analogous to which one of the following?",
    answerChoices: [
      { letter: "A", text: "A student who scores well on multiple-choice tests may not write essays as well" },
      { letter: "B", text: "A mechanic who accurately diagnoses engine problems may be equally skilled at transmission repair" },
      { letter: "C", text: "A weather forecast that correctly predicts tomorrow's rain may be less reliable about next week's weather" },
      { letter: "D", text: "A calculator that accurately performs addition will accurately perform all mathematical operations" },
      { letter: "E", text: "An archer who hits targets at short range will hit targets at all distances" }
    ],
    correctAnswer: "A",
    difficulty: "hard",
    type: "parallel-reasoning",
    explanation: "Both situations involve accuracy on one type of task not guaranteeing accuracy on different, more complex tasks—format-specific competence."
  },
  {
    id: "lr-15-029",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Some argue that international trade agreements harm domestic workers by exposing them to foreign competition. But trade also creates jobs in export industries and lowers prices for consumers. The net effect on employment is often neutral or positive, and lower prices benefit all consumers, including workers.",
    questionStem: "The economist's argument would be most weakened by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Export industry jobs often require different skills than the jobs lost to imports" },
      { letter: "B", text: "Some countries have higher labor standards than others" },
      { letter: "C", text: "Trade agreements are negotiated by elected officials" },
      { letter: "D", text: "Consumer prices have risen in some sectors despite trade agreements" },
      { letter: "E", text: "Some economists disagree about trade's effects" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If export jobs require different skills, displaced workers may not be able to transition to new jobs, making the 'neutral employment effect' claim misleading."
  },
  {
    id: "lr-15-030",
    sectionType: "logical-reasoning",
    stimulus: "Philosopher: We often praise people for their achievements without considering the advantages that enabled those achievements. A person born into wealth with access to elite education has different opportunities than someone born into poverty. If circumstances largely determine outcomes, how can we attribute achievement primarily to individual merit?",
    questionStem: "The philosopher's question is primarily designed to",
    answerChoices: [
      { letter: "A", text: "prove that wealthy people never deserve praise for their achievements" },
      { letter: "B", text: "challenge an assumption underlying common practices of praise and attribution" },
      { letter: "C", text: "demonstrate that poverty makes achievement impossible" },
      { letter: "D", text: "argue for redistribution of wealth" },
      { letter: "E", text: "establish that circumstances fully determine all outcomes" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The philosopher questions the assumption that merit is primarily individual by highlighting the role of circumstances—challenging the basis for attribution practices."
  },
  {
    id: "lr-15-031",
    sectionType: "logical-reasoning",
    stimulus: "Film producer: Sequels to successful films are financially safer than original projects because they have built-in audiences. Studios have increasingly relied on sequels and franchise extensions. Critics blame this trend for declining creativity in mainstream cinema. But audiences vote with their tickets, and they consistently choose familiar franchises over original stories.",
    questionStem: "The film producer's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Original films are always more creative than sequels" },
      { letter: "B", text: "Audience choices at the box office reflect their genuine preferences rather than limited options" },
      { letter: "C", text: "Studios should prioritize profits over creativity" },
      { letter: "D", text: "Film critics are not representative of general audiences" },
      { letter: "E", text: "Franchise films require less talent to produce" }
    ],
    correctAnswer: "B",
    difficulty: "hard",
    type: "necessary-assumption",
    explanation: "The producer uses ticket sales as evidence of preference, but if audiences have limited options (mostly franchises offered), choices may not reflect true preferences."
  },
  {
    id: "lr-15-032",
    sectionType: "logical-reasoning",
    stimulus: "Archaeologist: The ancient settlement shows no signs of defensive walls or weapons stockpiles. Some conclude from this that the society was peaceful. But the absence of evidence is not evidence of absence. Defensive structures may have been built of perishable materials that did not survive, or weapons may have been made of materials that decomposed.",
    questionStem: "The archaeologist's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "providing evidence that the ancient society was violent" },
      { letter: "B", text: "showing that the conclusion drawn from the evidence is not logically certain" },
      { letter: "C", text: "demonstrating that archaeological methods are unreliable" },
      { letter: "D", text: "arguing that all ancient societies were equally violent" },
      { letter: "E", text: "questioning the qualifications of those who reached the peaceful society conclusion" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The archaeologist points out alternative explanations for the missing evidence, showing the peaceful conclusion is not certain."
  },
  {
    id: "lr-15-033",
    sectionType: "logical-reasoning",
    stimulus: "Educator: Students who learn to code in elementary school develop problem-solving skills that transfer to other academic subjects. Schools should therefore require coding instruction for all elementary students. The investment in technology and teacher training will yield dividends across the curriculum.",
    questionStem: "Which one of the following, if true, most weakens the educator's argument?",
    answerChoices: [
      { letter: "A", text: "Some coding curricula are more effective than others" },
      { letter: "B", text: "Problem-solving skills can be developed through many activities besides coding, some requiring less investment" },
      { letter: "C", text: "Not all students enjoy learning to code" },
      { letter: "D", text: "Elementary school curricula are already crowded with required subjects" },
      { letter: "E", text: "Some teachers are resistant to learning new technologies" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If other activities develop the same skills more cost-effectively, the investment in coding instruction may not be justified."
  },
  {
    id: "lr-15-034",
    sectionType: "logical-reasoning",
    stimulus: "Journalist: Newspapers have historically maintained a separation between news and advertising departments to preserve editorial independence. Digital media has blurred this line, with sponsored content designed to resemble news articles. Readers may not distinguish between journalism and advertising, undermining trust in media.",
    questionStem: "The journalist's argument most strongly supports which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Sponsored content should be banned entirely from digital media" },
      { letter: "B", text: "Clear distinction between sponsored and editorial content is important for maintaining media credibility" },
      { letter: "C", text: "Print newspapers are more trustworthy than digital media" },
      { letter: "D", text: "Advertising has no legitimate role in supporting journalism" },
      { letter: "E", text: "Readers are incapable of recognizing sponsored content" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The journalist's concern about blurred lines suggests that maintaining clear distinctions is necessary to preserve trust and credibility."
  },
  {
    id: "lr-15-035",
    sectionType: "logical-reasoning",
    stimulus: "Chef: Traditional recipes should be respected as cultural heritage. However, cuisine has always evolved through cultural exchange and experimentation. Dishes we consider traditional often incorporated ingredients from other cultures when they were introduced. The essence of culinary tradition is not rigid preservation but creative adaptation.",
    questionStem: "Which one of the following best describes the relationship between the two aspects of tradition the chef discusses?",
    answerChoices: [
      { letter: "A", text: "They are completely incompatible and cannot be reconciled" },
      { letter: "B", text: "The first is an incorrect understanding that the second corrects" },
      { letter: "C", text: "Respecting tradition actually requires allowing for evolution" },
      { letter: "D", text: "Creative adaptation makes respect for tradition unnecessary" },
      { letter: "E", text: "They represent views held by different groups in the culinary world" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The chef argues that tradition itself involves evolution, so respecting tradition means embracing adaptation, not rigid preservation."
  },
  {
    id: "lr-15-036",
    sectionType: "logical-reasoning",
    stimulus: "Some successful entrepreneurs have advanced degrees. All successful entrepreneurs have persistence. Therefore, some people with advanced degrees have persistence.",
    questionStem: "The reasoning in the argument is",
    answerChoices: [
      { letter: "A", text: "flawed, because it assumes that only entrepreneurs have persistence" },
      { letter: "B", text: "flawed, because it generalizes from entrepreneurs to all people with advanced degrees" },
      { letter: "C", text: "valid, because the conclusion follows necessarily from the premises" },
      { letter: "D", text: "flawed, because success in entrepreneurship is not precisely defined" },
      { letter: "E", text: "valid, but only if most people with advanced degrees are entrepreneurs" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "evaluate",
    explanation: "The argument is valid: some successful entrepreneurs have advanced degrees; all successful entrepreneurs have persistence; therefore those some have both advanced degrees and persistence."
  },
  {
    id: "lr-15-037",
    sectionType: "logical-reasoning",
    stimulus: "Oceanographer: Coral reefs cover less than one percent of the ocean floor but support about 25 percent of all marine species. Reef destruction affects not only the immediate ecosystem but global marine biodiversity. The disproportionate importance of coral reefs makes their conservation a priority beyond their small area.",
    questionStem: "Which one of the following, if true, most strengthens the oceanographer's argument for prioritizing coral reef conservation?",
    answerChoices: [
      { letter: "A", text: "Many marine species not found on reefs depend on reef ecosystems at some life stage" },
      { letter: "B", text: "Coral reefs provide economic benefits through tourism and fisheries" },
      { letter: "C", text: "Some coral species are more resilient than others" },
      { letter: "D", text: "Ocean temperatures have been rising in recent decades" },
      { letter: "E", text: "Coral reefs have existed for millions of years" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If non-reef species also depend on reefs, the impact of reef destruction extends beyond the 25% directly supported, strengthening the priority claim."
  },
  {
    id: "lr-15-038",
    sectionType: "logical-reasoning",
    stimulus: "Mayor: The city council's rejection of the affordable housing proposal is shortsighted. Without new affordable units, essential workers will be priced out of the city. Police officers, teachers, and nurses will commute from distant suburbs, or the city will be unable to fill these positions. The housing crisis threatens public services.",
    questionStem: "The mayor's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "All essential workers currently live within the city" },
      { letter: "B", text: "Essential workers cannot afford market-rate housing in the city" },
      { letter: "C", text: "The rejected proposal was the only possible solution to the housing crisis" },
      { letter: "D", text: "Suburban commutes make workers less effective at their jobs" },
      { letter: "E", text: "The city council opposes affordable housing in principle" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument that essential workers will be priced out assumes they cannot afford existing housing—if they could, new affordable units would be unnecessary."
  },
  {
    id: "lr-15-039",
    sectionType: "logical-reasoning",
    stimulus: "Psychologist: Children raised by authoritarian parents—those who are strict and demand obedience without explanation—often become either rigidly rule-following or rebellious. Neither outcome produces the flexible moral reasoning that democratic parenting, which explains rules and invites discussion, tends to foster.",
    questionStem: "Which one of the following, if true, most weakens the psychologist's argument?",
    answerChoices: [
      { letter: "A", text: "Some children thrive regardless of parenting style" },
      { letter: "B", text: "Authoritarian parenting is more common in some cultures than others" },
      { letter: "C", text: "The outcomes attributed to parenting style are primarily influenced by peer relationships" },
      { letter: "D", text: "Democratic parenting requires more time and patience" },
      { letter: "E", text: "Some authoritarian parents explain rules in certain situations" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "weaken",
    explanation: "If peer relationships primarily determine outcomes, parenting style may not cause the described differences, weakening the argument's causal claim."
  },
  {
    id: "lr-15-040",
    sectionType: "logical-reasoning",
    stimulus: "Wildlife biologist: Efforts to save endangered species sometimes focus on single charismatic animals—the last member of a species, for example. While emotionally compelling, this ignores that species survival requires viable breeding populations, not individuals. Conservation resources might be better spent protecting populations that can sustain themselves.",
    questionStem: "The wildlife biologist's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "criticizing the motives of those who focus on individual animals" },
      { letter: "B", text: "pointing out a tension between emotional appeals and biological reality" },
      { letter: "C", text: "arguing that endangered species should not be protected" },
      { letter: "D", text: "demonstrating that charismatic animals are less valuable than other species" },
      { letter: "E", text: "providing evidence that population-focused conservation always succeeds" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The biologist contrasts the emotional appeal of saving individuals with the biological requirement for viable populations—an emotional vs. rational tension."
  },
  {
    id: "lr-15-041",
    sectionType: "logical-reasoning",
    stimulus: "Legal scholar: Laws prohibiting employer discrimination based on criminal history are intended to help formerly incarcerated people reintegrate into society. However, if employers cannot consider criminal history at all, they may find other pretexts to reject applicants they suspect of having records. Well-designed laws allow consideration of relevant convictions while prohibiting blanket exclusions.",
    questionStem: "The legal scholar's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Absolute prohibitions on considering criminal history may not achieve their intended purpose" },
      { letter: "B", text: "Employers should be allowed to consider all criminal history in hiring decisions" },
      { letter: "C", text: "Former prisoners do not deserve employment opportunities" },
      { letter: "D", text: "Laws cannot effectively address employment discrimination" },
      { letter: "E", text: "Criminal history is always relevant to job performance" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "inference",
    explanation: "The scholar suggests absolute prohibitions lead to pretextual rejections, defeating the reintegration purpose—supporting nuanced rather than absolute approaches."
  },
  {
    id: "lr-15-042",
    sectionType: "logical-reasoning",
    stimulus: "Art historian: The Impressionists were initially rejected by the official Salon and had to organize independent exhibitions. Today they are celebrated masters, and their works command enormous prices. This pattern—initial rejection followed by eventual acceptance—has led some to conclude that critical rejection predicts future greatness.",
    questionStem: "The art historian would most likely agree that the conclusion mentioned is flawed because",
    answerChoices: [
      { letter: "A", text: "the Impressionists were never really rejected by critics" },
      { letter: "B", text: "many rejected artists never achieved acceptance, but we do not remember them" },
      { letter: "C", text: "contemporary critics have better judgment than nineteenth-century critics" },
      { letter: "D", text: "financial success is not an appropriate measure of artistic greatness" },
      { letter: "E", text: "the Impressionists were commercially successful from the beginning" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The conclusion commits survivorship bias—we remember rejected artists who became great but forget the many rejected artists who remained obscure."
  },
  {
    id: "lr-15-043",
    sectionType: "logical-reasoning",
    stimulus: "Every product in the premium line undergoes quality inspection. This widget underwent quality inspection. Therefore, this widget is in the premium line.",
    questionStem: "The reasoning in the argument is flawed because",
    answerChoices: [
      { letter: "A", text: "it ignores that quality inspection might be performed on products outside the premium line" },
      { letter: "B", text: "it does not define what constitutes quality inspection" },
      { letter: "C", text: "it assumes that quality inspection is sufficient for product quality" },
      { letter: "D", text: "it generalizes from one widget to all widgets" },
      { letter: "E", text: "it relies on an unrepresentative sample of products" }
    ],
    correctAnswer: "A",
    difficulty: "easy",
    type: "flaw",
    explanation: "The argument treats quality inspection as sufficient for premium line membership, but other products might also be inspected—affirming the consequent fallacy."
  },
  {
    id: "lr-15-044",
    sectionType: "logical-reasoning",
    stimulus: "Botanist: The Amazon rainforest produces approximately 20 percent of the world's oxygen. Some call it 'the lungs of the Earth.' However, the rainforest also consumes nearly all the oxygen it produces through respiration and decomposition. The net contribution to global oxygen is actually minimal.",
    questionStem: "The botanist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "The Amazon rainforest has no environmental value" },
      { letter: "B", text: "The common characterization of the rainforest as Earth's lungs is misleading" },
      { letter: "C", text: "Protecting the Amazon rainforest is not important" },
      { letter: "D", text: "Other ecosystems produce more oxygen than the Amazon" },
      { letter: "E", text: "Oxygen levels are decreasing globally" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "If the rainforest consumes nearly all the oxygen it produces, calling it 'Earth's lungs' overstates its contribution to global oxygen supply."
  },
  {
    id: "lr-15-045",
    sectionType: "logical-reasoning",
    stimulus: "Principle: A leader should not ask subordinates to take risks that the leader would not be willing to take personally.\n\nApplication: General Adams violated leadership principles by ordering troops into a dangerous situation while remaining safely at headquarters.",
    questionStem: "Which one of the following, if true, would most weaken the application of the principle to General Adams?",
    answerChoices: [
      { letter: "A", text: "General Adams has combat experience from earlier in his career" },
      { letter: "B", text: "The general's presence at headquarters was necessary for coordinating the overall operation" },
      { letter: "C", text: "Other generals in similar situations also remained at headquarters" },
      { letter: "D", text: "General Adams had offered to lead the troops personally" },
      { letter: "E", text: "The dangerous situation was less risky than it appeared" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "If Adams offered to take the risk personally, he was willing to do so—the principle concerns willingness, not actual risk-taking."
  },
  {
    id: "lr-15-046",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Housing affordability is often measured by comparing median home prices to median incomes. By this measure, housing has become dramatically less affordable over decades. But this measure ignores that homes have become larger and better equipped over time. Comparing price per square foot, adjusted for features, shows a smaller affordability decline.",
    questionStem: "The economist's argument is designed to show that",
    answerChoices: [
      { letter: "A", text: "housing affordability has not declined at all" },
      { letter: "B", text: "the standard affordability measure may overstate the decline in affordability" },
      { letter: "C", text: "larger homes are always more valuable than smaller homes" },
      { letter: "D", text: "home features are more important than location" },
      { letter: "E", text: "median income is an unreliable economic indicator" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The economist doesn't deny affordability decline but argues the standard measure overstates it by not accounting for increased home quality."
  },
  {
    id: "lr-15-047",
    sectionType: "logical-reasoning",
    stimulus: "Linguist: Languages with millions of speakers are well documented, while languages with few speakers often have limited documentation. If these smaller languages die out, humanity loses not only means of expression but also unique conceptual frameworks and ways of understanding the world encoded in their grammars and vocabularies.",
    questionStem: "Which one of the following, if true, most strengthens the linguist's argument about the loss from language death?",
    answerChoices: [
      { letter: "A", text: "Some endangered languages are being revitalized through education programs" },
      { letter: "B", text: "Concepts unique to endangered languages have provided insights for scientific research" },
      { letter: "C", text: "Many speakers of endangered languages are bilingual in major languages" },
      { letter: "D", text: "Languages evolve and change over time regardless of the number of speakers" },
      { letter: "E", text: "Most endangered languages are spoken by elderly community members" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence that unique linguistic concepts have yielded scientific insights demonstrates concrete value lost when languages die, strengthening the argument."
  },
  {
    id: "lr-15-048",
    sectionType: "logical-reasoning",
    stimulus: "Therapist: Patients often request specific diagnoses they've read about online. Self-diagnosis using internet resources can be valuable for encouraging people to seek professional help. However, it can also lead patients to fit their symptoms to a diagnosis rather than accurately describing symptoms and allowing professionals to assess them.",
    questionStem: "The therapist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Patients should never research their symptoms online" },
      { letter: "B", text: "Online health information has both potential benefits and drawbacks" },
      { letter: "C", text: "Professional diagnoses are always more accurate than self-diagnoses" },
      { letter: "D", text: "The internet contains mostly inaccurate health information" },
      { letter: "E", text: "Therapists should refuse to discuss diagnoses patients have researched" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "inference",
    explanation: "The therapist describes both a benefit (encouraging help-seeking) and a drawback (symptom distortion), supporting a balanced assessment of online research."
  },
  {
    id: "lr-15-049",
    sectionType: "logical-reasoning",
    stimulus: "Meteorologist: Some climate change skeptics point to record cold temperatures as evidence against global warming. But climate refers to long-term averages and patterns, while weather is short-term variation. Record cold spells can occur within an overall warming trend. Individual weather events do not refute climate patterns.",
    questionStem: "The meteorologist's argument is most analogous to which one of the following?",
    answerChoices: [
      { letter: "A", text: "A single lottery winner does not disprove that winning the lottery is unlikely" },
      { letter: "B", text: "One excellent meal does not make a restaurant consistently good" },
      { letter: "C", text: "A student's high test score proves they studied effectively" },
      { letter: "D", text: "A company's profitable quarter guarantees future profitability" },
      { letter: "E", text: "An athlete's personal best proves they are the best in their sport" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Both situations involve individual events (cold spell, lottery win) not disproving statistical patterns (warming trend, low probability)."
  },
  {
    id: "lr-15-050",
    sectionType: "logical-reasoning",
    stimulus: "Publisher: Literary fiction has declined in sales while genre fiction has grown. Some critics blame this on declining cultural literacy. But readers may simply be more honest about what they enjoy. When literary fiction held higher prestige, people bought books they never finished. The shift may reflect changing purchasing habits more than changing tastes.",
    questionStem: "The publisher's argument primarily serves to",
    answerChoices: [
      { letter: "A", text: "prove that genre fiction is superior to literary fiction" },
      { letter: "B", text: "offer an alternative explanation for a phenomenon attributed to cultural decline" },
      { letter: "C", text: "demonstrate that book sales accurately reflect reading habits" },
      { letter: "D", text: "argue that literary fiction should no longer be published" },
      { letter: "E", text: "criticize readers who bought books they did not intend to read" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The publisher offers an alternative explanation (honest purchasing) for declining literary fiction sales, countering the cultural literacy decline explanation."
  }
];
