import { Question } from "../lsat-types";

export const lrQuestionsSet12: Question[] = [
  {
    id: "lr-12-001",
    sectionType: "logical-reasoning",
    stimulus: "Studies show that employees who work from home report higher job satisfaction than those who work in traditional offices. However, companies that have implemented mandatory work-from-home policies have seen no improvement in overall employee satisfaction scores. This suggests that the satisfaction associated with remote work comes not from the work arrangement itself but from the element of choice.",
    questionStem: "Which one of the following, if true, most strengthens the argument?",
    answerChoices: [
      { letter: "A", text: "Employees who chose to work from home before mandatory policies were implemented reported the highest satisfaction levels" },
      { letter: "B", text: "Many employees prefer working in offices because they value in-person collaboration" },
      { letter: "C", text: "Companies with flexible work policies tend to have better overall management practices" },
      { letter: "D", text: "Job satisfaction is influenced by many factors beyond work location" },
      { letter: "E", text: "Remote work technology has improved significantly in recent years" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Answer A strengthens by showing that voluntary remote workers had highest satisfaction, supporting the idea that choice, not location, drives satisfaction."
  },
  {
    id: "lr-12-002",
    sectionType: "logical-reasoning",
    stimulus: "The city council argues that building a new sports stadium will revitalize the downtown area. They point to Riverside City, where a new stadium led to increased economic activity. However, Riverside City's stadium was built near an already thriving entertainment district, while our proposed stadium site is in an isolated industrial zone.",
    questionStem: "The argument proceeds by",
    answerChoices: [
      { letter: "A", text: "questioning the credentials of those who support the stadium proposal" },
      { letter: "B", text: "arguing that economic revitalization is not a worthy goal" },
      { letter: "C", text: "showing that a cited example differs from the current situation in relevant ways" },
      { letter: "D", text: "demonstrating that stadium construction always fails to produce economic benefits" },
      { letter: "E", text: "appealing to the emotions of those who oppose development projects" }
    ],
    correctAnswer: "C",
    difficulty: "easy",
    type: "method-of-reasoning",
    explanation: "The argument identifies a key difference (location context) between the cited example and the current proposal, weakening the analogy."
  },
  {
    id: "lr-12-003",
    sectionType: "logical-reasoning",
    stimulus: "All professional musicians dedicate at least four hours daily to practice. Maria dedicates six hours daily to practice. Therefore, Maria is a professional musician.",
    questionStem: "The flawed reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "All birds have wings. Bats have wings. Therefore, bats are birds." },
      { letter: "B", text: "All squares are rectangles. This shape is a rectangle. Therefore, it is not a square." },
      { letter: "C", text: "No reptiles are warm-blooded. Snakes are reptiles. Therefore, snakes are not warm-blooded." },
      { letter: "D", text: "Some athletes are vegetarians. John is an athlete. Therefore, John might be a vegetarian." },
      { letter: "E", text: "All doctors have medical degrees. Sarah has a medical degree. Therefore, Sarah is a doctor." }
    ],
    correctAnswer: "E",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Both arguments commit the fallacy of affirming the consequent: concluding that meeting a necessary condition guarantees group membership."
  },
  {
    id: "lr-12-004",
    sectionType: "logical-reasoning",
    stimulus: "Political commentator: The proposed tax reform will simplify the tax code by reducing the number of brackets from seven to three. Critics argue this will benefit only the wealthy, but simplification itself benefits everyone by reducing compliance costs and the time spent on tax preparation.",
    questionStem: "Which one of the following, if true, most seriously weakens the commentator's defense of the tax reform?",
    answerChoices: [
      { letter: "A", text: "Most taxpayers use tax preparation software that handles complexity automatically" },
      { letter: "B", text: "The current seven-bracket system has been in place for over two decades" },
      { letter: "C", text: "Some economists support maintaining the current bracket structure" },
      { letter: "D", text: "Tax simplification has been a goal of reformers from both political parties" },
      { letter: "E", text: "Other countries have more tax brackets than the proposed three" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If software handles complexity automatically, the simplification benefit (reduced compliance costs and time) is minimal, weakening the defense."
  },
  {
    id: "lr-12-005",
    sectionType: "logical-reasoning",
    stimulus: "Nutritionist: People who eat breakfast regularly tend to have lower body mass indexes than those who skip breakfast. This demonstrates that eating breakfast helps prevent obesity.",
    questionStem: "The nutritionist's reasoning is flawed because it",
    answerChoices: [
      { letter: "A", text: "fails to consider that the relationship might be coincidental rather than causal" },
      { letter: "B", text: "assumes that lower body mass index is always healthier" },
      { letter: "C", text: "ignores the possibility that people with lower BMIs might be more likely to eat breakfast" },
      { letter: "D", text: "relies on self-reported data about eating habits" },
      { letter: "E", text: "does not define what constitutes a proper breakfast" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "flaw",
    explanation: "The argument assumes breakfast causes lower BMI, but the causal direction could be reversed: lower BMI individuals might simply be more likely to eat breakfast."
  },
  {
    id: "lr-12-006",
    sectionType: "logical-reasoning",
    stimulus: "Advertisement: Zymex Energy Drink contains twice the caffeine of regular coffee and has been shown in studies to improve alertness for up to eight hours. No other energy drink on the market can make this claim. Choose Zymex for all-day energy.",
    questionStem: "Which one of the following is an assumption on which the advertisement's reasoning depends?",
    answerChoices: [
      { letter: "A", text: "Improved alertness is the most important benefit consumers seek from energy drinks" },
      { letter: "B", text: "High caffeine content does not produce adverse health effects" },
      { letter: "C", text: "The duration of alertness improvement is a relevant factor in choosing an energy drink" },
      { letter: "D", text: "Other energy drinks have not conducted studies on alertness duration" },
      { letter: "E", text: "Regular coffee is the most common alternative to energy drinks" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument assumes that the eight-hour alertness claim is relevant to consumer choice; otherwise, the unique claim would not support choosing Zymex."
  },
  {
    id: "lr-12-007",
    sectionType: "logical-reasoning",
    stimulus: "Archaeologist: The ancient Minoan civilization on Crete had extensive trade networks, sophisticated plumbing systems, and multi-story buildings. Yet they left no decipherable written records of their political structure. Some scholars conclude the Minoans had no formal government, but complex infrastructure requires coordinated planning and resource allocation that only organized governance can provide.",
    questionStem: "Which one of the following most accurately expresses the main conclusion of the archaeologist's argument?",
    answerChoices: [
      { letter: "A", text: "The Minoan civilization was more advanced than previously believed" },
      { letter: "B", text: "Written records are not necessary to understand ancient political structures" },
      { letter: "C", text: "Complex infrastructure projects prove that organized societies existed" },
      { letter: "D", text: "The conclusion that Minoans had no formal government is likely incorrect" },
      { letter: "E", text: "Ancient civilizations should be judged by their technological achievements" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The archaeologist argues against the scholarly conclusion that Minoans had no formal government, using infrastructure evidence to support this counter-position."
  },
  {
    id: "lr-12-008",
    sectionType: "logical-reasoning",
    stimulus: "Marine biologist: Coral bleaching events have increased dramatically over the past three decades, with mass bleaching occurring during unusually warm ocean temperatures. While corals can recover from mild bleaching if temperatures return to normal quickly, repeated bleaching events prevent full recovery. Given current climate projections, most tropical coral reefs will experience annual bleaching within 20 years.",
    questionStem: "Which one of the following can be properly inferred from the marine biologist's statements?",
    answerChoices: [
      { letter: "A", text: "All coral reefs will be completely destroyed within 20 years" },
      { letter: "B", text: "Reducing ocean temperatures would eliminate coral bleaching entirely" },
      { letter: "C", text: "Annual bleaching would likely prevent most tropical coral reefs from fully recovering" },
      { letter: "D", text: "Coral reefs in non-tropical waters are not affected by rising temperatures" },
      { letter: "E", text: "Climate projections have accurately predicted coral bleaching in the past" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "Since repeated bleaching prevents full recovery, and annual bleaching is projected, it follows that most tropical reefs would be unable to fully recover."
  },
  {
    id: "lr-12-009",
    sectionType: "logical-reasoning",
    stimulus: "Gallery owner: Abstract expressionist paintings from the 1950s have appreciated in value more than any other art category over the past decade. Therefore, investors seeking strong returns should focus their art purchases on abstract expressionism.",
    questionStem: "The reasoning in the argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes past performance is indicative of future results" },
      { letter: "B", text: "fails to consider the aesthetic value of abstract expressionist art" },
      { letter: "C", text: "ignores the possibility that some abstract expressionist works have decreased in value" },
      { letter: "D", text: "does not specify which artists' works appreciated most" },
      { letter: "E", text: "conflates investment value with cultural significance" }
    ],
    correctAnswer: "A",
    difficulty: "easy",
    type: "flaw",
    explanation: "The argument uses past appreciation to predict future returns, a classic assumption that past performance guarantees future results."
  },
  {
    id: "lr-12-010",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Countries that adopt protectionist trade policies initially see growth in protected industries. However, these industries become less competitive over time due to lack of foreign competition, ultimately resulting in higher prices for consumers and reduced innovation. Countries with free trade policies, while experiencing short-term disruption in some sectors, develop more competitive and innovative economies overall.",
    questionStem: "The economist's argument is structured to lead to which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Protectionist policies should never be implemented under any circumstances" },
      { letter: "B", text: "Free trade policies produce better long-term economic outcomes than protectionism" },
      { letter: "C", text: "All countries should immediately eliminate all trade barriers" },
      { letter: "D", text: "Short-term economic disruption is always acceptable for long-term gain" },
      { letter: "E", text: "Innovation is more important than consumer prices in economic policy" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The argument contrasts protectionism's long-term negative effects with free trade's long-term benefits, supporting free trade as the better policy."
  },
  {
    id: "lr-12-011",
    sectionType: "logical-reasoning",
    stimulus: "School board member: Our district's test scores have declined for three consecutive years. The teachers' union blames inadequate funding, but our per-pupil spending has actually increased during this period. Clearly, funding is not the issue.",
    questionStem: "Which one of the following, if true, most weakens the school board member's argument?",
    answerChoices: [
      { letter: "A", text: "Test scores have declined in neighboring districts as well" },
      { letter: "B", text: "The increased spending was primarily allocated to administrative costs and building maintenance rather than instruction" },
      { letter: "C", text: "Some teachers in the district have won national teaching awards" },
      { letter: "D", text: "The tests used to measure scores have become more rigorous" },
      { letter: "E", text: "Student enrollment has remained relatively stable" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If increased spending went to non-instructional costs, the union's claim about inadequate instructional funding could still be valid despite higher total spending."
  },
  {
    id: "lr-12-012",
    sectionType: "logical-reasoning",
    stimulus: "Principle: A journalist should not publish information obtained through deception unless the information reveals matters of significant public interest that could not be uncovered through legitimate means.\n\nApplication: Journalist Martinez was justified in using a false identity to obtain documents showing a pharmaceutical company hid evidence of dangerous drug side effects.",
    questionStem: "Which one of the following, if true, most helps justify the application of the principle?",
    answerChoices: [
      { letter: "A", text: "Martinez's newspaper has a strong reputation for investigative journalism" },
      { letter: "B", text: "The pharmaceutical company had successfully blocked all previous attempts to access the documents through legal channels" },
      { letter: "C", text: "Other journalists have used similar methods in the past" },
      { letter: "D", text: "Martinez did not personally profit from publishing the story" },
      { letter: "E", text: "The pharmaceutical company later admitted the documents were authentic" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "The principle requires that information could not be obtained through legitimate means; B establishes this condition was met."
  },
  {
    id: "lr-12-013",
    sectionType: "logical-reasoning",
    stimulus: "Literary critic: Many readers dismiss genre fiction as inferior to literary fiction, but this distinction is increasingly artificial. Works like Cormac McCarthy's post-apocalyptic novels and Kazuo Ishiguro's science fiction have won major literary prizes, demonstrating that genre elements do not preclude literary merit.",
    questionStem: "Which one of the following best describes the role played in the argument by the claim that some genre works have won major literary prizes?",
    answerChoices: [
      { letter: "A", text: "It is the main conclusion the argument seeks to establish" },
      { letter: "B", text: "It provides evidence against the view that genre fiction lacks literary merit" },
      { letter: "C", text: "It identifies an exception to a general rule about fiction categories" },
      { letter: "D", text: "It establishes criteria for evaluating literary quality" },
      { letter: "E", text: "It challenges the qualifications of those who dismiss genre fiction" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The prize-winning examples serve as evidence that genre fiction can have literary merit, countering the dismissive view mentioned."
  },
  {
    id: "lr-12-014",
    sectionType: "logical-reasoning",
    stimulus: "Psychologist: Studies show that children who are praised for their intelligence tend to avoid challenging tasks and give up easily when they encounter difficulty. In contrast, children praised for their effort are more likely to persist and embrace challenges. This suggests that praising children for innate qualities may actually undermine their development.",
    questionStem: "Which one of the following, if true, provides the most support for the psychologist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Children who are never praised show similar patterns to those praised for intelligence" },
      { letter: "B", text: "Parents who praise effort also tend to provide more learning opportunities" },
      { letter: "C", text: "Children praised for intelligence believe that struggling indicates lack of ability" },
      { letter: "D", text: "The studies included children from diverse socioeconomic backgrounds" },
      { letter: "E", text: "Teachers are more likely to praise intelligence than effort" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Answer C explains the mechanism by which intelligence praise undermines development: it creates a belief that struggle indicates inability, causing avoidance."
  },
  {
    id: "lr-12-015",
    sectionType: "logical-reasoning",
    stimulus: "Urban planner: The proposed highway expansion will reduce commute times by 15 percent initially. However, research on induced demand shows that new road capacity generates additional traffic, as the improved conditions attract more drivers. Within five years, congestion typically returns to pre-expansion levels.",
    questionStem: "The urban planner's statements, if true, most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Highway expansion projects should never be approved" },
      { letter: "B", text: "Reducing commute times is not a valid justification for permanent highway expansion" },
      { letter: "C", text: "All traffic congestion is caused by inadequate road infrastructure" },
      { letter: "D", text: "Drivers are irrational in their transportation choices" },
      { letter: "E", text: "Public transportation is always superior to highway travel" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "If reduced commute times are temporary due to induced demand, then citing reduced commute times as a permanent benefit is not justified."
  },
  {
    id: "lr-12-016",
    sectionType: "logical-reasoning",
    stimulus: "Detective: The suspect claims he was at a restaurant at the time of the burglary. The restaurant's credit card records show a transaction from his card at that time. However, the suspect could have given his card to someone else to establish an alibi while he committed the crime.",
    questionStem: "The detective's response to the suspect's alibi",
    answerChoices: [
      { letter: "A", text: "proves that the suspect committed the burglary" },
      { letter: "B", text: "shows that the credit card evidence is unreliable" },
      { letter: "C", text: "indicates that the alibi does not conclusively establish the suspect's innocence" },
      { letter: "D", text: "demonstrates that the suspect has a history of dishonesty" },
      { letter: "E", text: "establishes that someone else used the suspect's credit card" }
    ],
    correctAnswer: "C",
    difficulty: "easy",
    type: "method-of-reasoning",
    explanation: "The detective points out an alternative explanation for the evidence, showing the alibi is not conclusive without proving guilt."
  },
  {
    id: "lr-12-017",
    sectionType: "logical-reasoning",
    stimulus: "Some effective teachers use traditional lecture methods. All effective teachers establish clear learning objectives. Therefore, some teachers who use traditional lecture methods establish clear learning objectives.",
    questionStem: "The pattern of reasoning in which one of the following is most similar to that in the argument above?",
    answerChoices: [
      { letter: "A", text: "Some mammals live in water. All mammals are warm-blooded. Therefore, some warm-blooded animals live in water." },
      { letter: "B", text: "All roses are flowers. Some flowers are red. Therefore, some roses are red." },
      { letter: "C", text: "No insects are mammals. Some mammals are endangered. Therefore, no insects are endangered." },
      { letter: "D", text: "All squares are rectangles. All rectangles have four sides. Therefore, all squares have four sides." },
      { letter: "E", text: "Some doctors are surgeons. No surgeons work part-time. Therefore, some doctors do not work part-time." }
    ],
    correctAnswer: "A",
    difficulty: "hard",
    type: "parallel-reasoning",
    explanation: "Both arguments follow: Some X are Y. All Y are Z. Therefore, some X are Z. Answer A matches this valid pattern."
  },
  {
    id: "lr-12-018",
    sectionType: "logical-reasoning",
    stimulus: "Historian: The conventional view holds that the printing press democratized knowledge by making books affordable. However, for the first century after its invention, printed books remained expensive luxury items. The true democratization of knowledge came only with later innovations in paper production and distribution that reduced costs dramatically.",
    questionStem: "Which one of the following most accurately describes the main point of the historian's argument?",
    answerChoices: [
      { letter: "A", text: "The printing press was not an important technological innovation" },
      { letter: "B", text: "The conventional view about when books became affordable is mistaken" },
      { letter: "C", text: "Paper production innovations were more important than the printing press" },
      { letter: "D", text: "Knowledge was not democratized until the twentieth century" },
      { letter: "E", text: "Luxury items eventually become affordable to everyone" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The historian challenges the conventional timeline, arguing that book affordability came later than typically claimed."
  },
  {
    id: "lr-12-019",
    sectionType: "logical-reasoning",
    stimulus: "Parent: My teenager insists that all her friends are allowed to stay out until midnight. But when I spoke with other parents, most said their children have a 10 PM curfew. My daughter must be exaggerating to persuade me to extend her curfew.",
    questionStem: "The parent's reasoning is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes that curfews should be determined by what other families do" },
      { letter: "B", text: "fails to consider that the daughter's friends might be different from the children of parents the parent spoke with" },
      { letter: "C", text: "ignores the possibility that teenagers sometimes need later curfews for legitimate activities" },
      { letter: "D", text: "presumes that the other parents were being truthful about their curfew rules" },
      { letter: "E", text: "does not consider the daughter's past behavior regarding curfew compliance" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "The parent's sample of other families may not include the daughter's actual friends, so the comparison may be invalid."
  },
  {
    id: "lr-12-020",
    sectionType: "logical-reasoning",
    stimulus: "Researcher: Previous studies found that bilingual individuals show delayed onset of dementia symptoms. However, these studies compared bilinguals to monolinguals in the general population without controlling for education level. Since bilingualism correlates with higher education, and education independently delays dementia symptoms, the apparent benefit of bilingualism may be attributable to education rather than language ability itself.",
    questionStem: "The researcher's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes without justification that education has no effect on dementia onset" },
      { letter: "B", text: "It fails to consider that bilingualism might contribute to educational attainment" },
      { letter: "C", text: "It ignores the possibility that both bilingualism and education independently delay dementia" },
      { letter: "D", text: "It does not cite specific studies supporting the correlation between bilingualism and education" },
      { letter: "E", text: "It assumes that all bilingual individuals have similar levels of language proficiency" }
    ],
    correctAnswer: "C",
    difficulty: "hard",
    type: "flaw",
    explanation: "The researcher assumes the benefit must be either bilingualism or education, but both factors could independently contribute to delayed dementia."
  },
  {
    id: "lr-12-021",
    sectionType: "logical-reasoning",
    stimulus: "Veterinarian: Pet owners often interpret their animals' behaviors in human terms, assuming that a dog wagging its tail is happy or that a cat purring is content. While these interpretations may sometimes be accurate, they can also lead owners to miss signs of illness or distress that manifest differently in animals than in humans.",
    questionStem: "The veterinarian's statements, if true, most strongly support which one of the following recommendations?",
    answerChoices: [
      { letter: "A", text: "Pet owners should never assume they understand their animals' emotional states" },
      { letter: "B", text: "All pet owners should receive training in animal behavior" },
      { letter: "C", text: "Pet owners should learn to recognize species-specific indicators of health and distress" },
      { letter: "D", text: "Veterinarians should not rely on owner reports of animal behavior" },
      { letter: "E", text: "Pets should be brought to veterinarians more frequently than currently recommended" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The veterinarian's concern about human interpretations missing animal-specific distress signals supports learning species-specific indicators."
  },
  {
    id: "lr-12-022",
    sectionType: "logical-reasoning",
    stimulus: "Art museum director: We should acquire the Hendricks collection even though it exceeds our budget. The collection includes several masterworks that would become centerpieces of our permanent collection. Furthermore, special exhibitions featuring these works would generate significant ticket revenue over time.",
    questionStem: "Which one of the following, if true, most strengthens the director's argument?",
    answerChoices: [
      { letter: "A", text: "The museum has successfully acquired collections exceeding its budget in the past" },
      { letter: "B", text: "Similar masterworks rarely become available for purchase" },
      { letter: "C", text: "The museum's current permanent collection already includes notable works" },
      { letter: "D", text: "Other museums have expressed interest in acquiring the Hendricks collection" },
      { letter: "E", text: "The projected exhibition revenue would exceed the amount by which the collection exceeds the budget" }
    ],
    correctAnswer: "E",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If exhibition revenue would exceed the budget shortfall, the acquisition becomes financially justified despite the initial overspend."
  },
  {
    id: "lr-12-023",
    sectionType: "logical-reasoning",
    stimulus: "Philosopher: Moral relativists argue that no moral principles are universally valid because moral beliefs vary across cultures. But the fact that beliefs vary does not prove that no belief is correct. After all, scientific beliefs also vary across cultures, yet we do not conclude that no scientific claims are objectively true.",
    questionStem: "The philosopher's argument employs which one of the following strategies?",
    answerChoices: [
      { letter: "A", text: "Demonstrating that moral relativism leads to contradictory conclusions" },
      { letter: "B", text: "Showing that the reasoning used to support moral relativism would also support an absurd conclusion in another domain" },
      { letter: "C", text: "Arguing that science provides the foundation for all moral knowledge" },
      { letter: "D", text: "Proving that universal moral principles do exist" },
      { letter: "E", text: "Appealing to the authority of scientific experts on moral questions" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The philosopher uses a parallel case (science) to show that the relativist's reasoning pattern would lead to an unacceptable conclusion if applied elsewhere."
  },
  {
    id: "lr-12-024",
    sectionType: "logical-reasoning",
    stimulus: "City official: The city's new recycling program has been a success. Since its implementation, the amount of waste sent to landfills has decreased by 30 percent.",
    questionStem: "Which one of the following, if true, most weakens the city official's argument?",
    answerChoices: [
      { letter: "A", text: "Neighboring cities without new recycling programs have seen similar decreases in landfill waste" },
      { letter: "B", text: "The cost of the recycling program exceeded initial projections" },
      { letter: "C", text: "Some residents have complained about the complexity of the new recycling guidelines" },
      { letter: "D", text: "The city's population has remained stable since the program began" },
      { letter: "E", text: "The recycling program requires households to sort materials into multiple categories" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If similar decreases occurred without new programs, the recycling program may not be responsible for the city's decrease."
  },
  {
    id: "lr-12-025",
    sectionType: "logical-reasoning",
    stimulus: "Consumer advocate: Food companies claim their products are healthy because they contain vitamins and minerals. However, these products also contain high levels of sugar and sodium. Adding vitamins to unhealthy foods does not make them healthy; it simply makes unhealthy foods appear healthy.",
    questionStem: "Which one of the following principles, if valid, most helps justify the consumer advocate's reasoning?",
    answerChoices: [
      { letter: "A", text: "Products should be judged by their overall nutritional profile rather than by selected positive attributes" },
      { letter: "B", text: "Food companies should not be allowed to add vitamins to processed foods" },
      { letter: "C", text: "Consumers are incapable of evaluating nutritional information accurately" },
      { letter: "D", text: "Sugar and sodium are more harmful than vitamins are beneficial" },
      { letter: "E", text: "Natural foods are always healthier than processed foods" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "The advocate argues against judging foods by positive attributes alone, supporting the principle that overall nutritional profile should determine healthiness."
  },
  {
    id: "lr-12-026",
    sectionType: "logical-reasoning",
    stimulus: "Ecologist: Invasive species are typically blamed for declining populations of native species. However, in many ecosystems, invasive species become established only after native habitats have been disrupted by human development or climate change. The invasives are often a symptom, not a cause, of ecosystem decline.",
    questionStem: "Which one of the following, if true, most supports the ecologist's position?",
    answerChoices: [
      { letter: "A", text: "Some native species have learned to prey on invasive species" },
      { letter: "B", text: "Invasive species often lack natural predators in their new environments" },
      { letter: "C", text: "Ecosystems with minimal human disturbance rarely experience successful invasions by non-native species" },
      { letter: "D", text: "Removing invasive species does not always restore native species populations" },
      { letter: "E", text: "Climate change affects ecosystems regardless of the presence of invasive species" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If undisturbed ecosystems resist invasion, this supports the claim that invasives succeed primarily in already-compromised environments."
  },
  {
    id: "lr-12-027",
    sectionType: "logical-reasoning",
    stimulus: "Journalist: Anonymous sources are essential to investigative journalism. Without the protection of anonymity, many whistleblowers would not come forward with information about corruption and wrongdoing. Critics who demand that journalists reveal their sources fail to understand that doing so would eliminate the flow of important information entirely.",
    questionStem: "The journalist assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "All anonymous sources provide accurate information" },
      { letter: "B", text: "Whistleblowers face significant risks for revealing information" },
      { letter: "C", text: "Critics of anonymous sources want to protect corrupt individuals" },
      { letter: "D", text: "Investigative journalism serves no purpose without anonymous sources" },
      { letter: "E", text: "Journalists always verify information from anonymous sources" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument that anonymity is necessary assumes whistleblowers face risks that anonymity mitigates; otherwise, anonymity would be unnecessary."
  },
  {
    id: "lr-12-028",
    sectionType: "logical-reasoning",
    stimulus: "Manager: Our department has consistently exceeded its quarterly targets for the past two years. During this time, I implemented a policy of flexible work hours. This policy has clearly been responsible for our success.",
    questionStem: "Which one of the following identifies a flaw in the manager's reasoning?",
    answerChoices: [
      { letter: "A", text: "It assumes that correlation between two phenomena establishes a causal relationship" },
      { letter: "B", text: "It generalizes from an atypical sample to a broader population" },
      { letter: "C", text: "It relies on ambiguous language that could be interpreted in multiple ways" },
      { letter: "D", text: "It appeals to the authority of the manager rather than to evidence" },
      { letter: "E", text: "It fails to consider whether the targets were set appropriately" }
    ],
    correctAnswer: "A",
    difficulty: "easy",
    type: "flaw",
    explanation: "The manager assumes the flexible hours policy caused the success just because both occurred together, a correlation-causation fallacy."
  },
  {
    id: "lr-12-029",
    sectionType: "logical-reasoning",
    stimulus: "Editorial: The proposed minimum wage increase would harm small businesses, which operate on thin profit margins. Large corporations can absorb increased labor costs, but small businesses cannot. If we value local businesses and the communities they support, we should oppose this measure.",
    questionStem: "The argument's conclusion follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "Large corporations provide fewer benefits to local communities than small businesses" },
      { letter: "B", text: "We should oppose measures that harm entities we value" },
      { letter: "C", text: "All minimum wage workers are employed by small businesses" },
      { letter: "D", text: "Small business owners earn less than minimum wage workers would after the increase" },
      { letter: "E", text: "Economic policy should prioritize business interests over worker interests" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "sufficient-assumption",
    explanation: "The argument moves from 'we value small businesses' to 'we should oppose measures that harm them.' This requires assuming we should oppose things that harm what we value."
  },
  {
    id: "lr-12-030",
    sectionType: "logical-reasoning",
    stimulus: "Botanist: The decline of native bee populations has been blamed primarily on pesticide use. However, habitat loss is likely a more significant factor. Native bees require specific plants for food and nesting sites. As these plants disappear due to development and agriculture, bee populations decline regardless of pesticide exposure.",
    questionStem: "The botanist's reasoning does which one of the following?",
    answerChoices: [
      { letter: "A", text: "Denies that pesticides have any effect on bee populations" },
      { letter: "B", text: "Proposes an alternative explanation for the phenomenon being discussed" },
      { letter: "C", text: "Argues that habitat loss and pesticide use have the same ultimate cause" },
      { letter: "D", text: "Questions the reliability of research on pesticide effects" },
      { letter: "E", text: "Suggests that native bee decline cannot be prevented" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "method-of-reasoning",
    explanation: "The botanist offers habitat loss as an alternative or more significant factor than the commonly cited pesticide explanation."
  },
  {
    id: "lr-12-031",
    sectionType: "logical-reasoning",
    stimulus: "Physician: Patients often request antibiotics for viral infections, even though antibiotics are ineffective against viruses. Prescribing unnecessary antibiotics can lead to antibiotic resistance, a serious public health threat. However, patients who feel their concerns are dismissed may not return for follow-up care when they have actual bacterial infections.",
    questionStem: "The physician's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Antibiotics should be prescribed whenever patients request them" },
      { letter: "B", text: "Physicians face competing considerations when patients request unnecessary antibiotics" },
      { letter: "C", text: "Patient education about antibiotics has been largely unsuccessful" },
      { letter: "D", text: "Antibiotic resistance is not as serious a threat as commonly believed" },
      { letter: "E", text: "Patients are generally unable to distinguish viral from bacterial infections" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The physician describes a dilemma: unnecessary prescribing causes resistance, but refusing may harm patient relationships and future care."
  },
  {
    id: "lr-12-032",
    sectionType: "logical-reasoning",
    stimulus: "Theater critic: Modern productions that update classic plays to contemporary settings often claim to make the works more relevant. However, these updates frequently strip away the historical context that gives the plays their meaning. A production of Julius Caesar set in a modern corporate boardroom loses the political complexity of Roman republican government that Shakespeare intended to explore.",
    questionStem: "Which one of the following, if true, most weakens the critic's argument?",
    answerChoices: [
      { letter: "A", text: "Some audiences prefer traditional productions of classic plays" },
      { letter: "B", text: "Shakespeare himself updated the settings of stories he borrowed from other sources" },
      { letter: "C", text: "Modern corporate power structures parallel Roman political dynamics in ways that illuminate both" },
      { letter: "D", text: "Many classic plays have themes that transcend their specific historical settings" },
      { letter: "E", text: "Directors of updated productions often discuss their artistic choices in program notes" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "weaken",
    explanation: "If corporate settings illuminate the same political dynamics, then the update preserves rather than loses the intended meaning."
  },
  {
    id: "lr-12-033",
    sectionType: "logical-reasoning",
    stimulus: "Climate scientist: Some argue that current global warming is part of a natural cycle because the Earth has experienced warm periods before. This argument ignores the rate of current temperature increase, which is unprecedented in the geological record and matches predictions based on human greenhouse gas emissions.",
    questionStem: "The climate scientist counters the natural cycle argument by",
    answerChoices: [
      { letter: "A", text: "questioning the credentials of those who make the argument" },
      { letter: "B", text: "showing that the argument overlooks a significant difference between past warming and current warming" },
      { letter: "C", text: "demonstrating that natural cycles have never caused temperature changes" },
      { letter: "D", text: "arguing that human activity is the only possible cause of any climate change" },
      { letter: "E", text: "providing evidence that past warm periods were actually cooler than previously believed" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The scientist points out that the rate of change distinguishes current warming from past natural cycles, showing a relevant difference."
  },
  {
    id: "lr-12-034",
    sectionType: "logical-reasoning",
    stimulus: "Sociologist: Studies find that children who participate in organized sports develop better teamwork skills than those who do not. Critics argue this merely reflects that children with good social skills are more likely to join sports teams. However, longitudinal studies tracking children before and after joining sports teams show improvement in teamwork skills over time.",
    questionStem: "The sociologist mentions the longitudinal studies in order to",
    answerChoices: [
      { letter: "A", text: "concede that the critics' explanation might be partially correct" },
      { letter: "B", text: "provide a response to the selection bias concern raised by critics" },
      { letter: "C", text: "suggest that more research on sports participation is needed" },
      { letter: "D", text: "demonstrate that teamwork skills can only be developed through sports" },
      { letter: "E", text: "argue that social skills and teamwork skills are identical" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The longitudinal studies address the critics' selection bias concern by showing improvement over time in the same children."
  },
  {
    id: "lr-12-035",
    sectionType: "logical-reasoning",
    stimulus: "All successful entrepreneurs take calculated risks. Some successful entrepreneurs have experienced significant failures early in their careers. Therefore, some people who take calculated risks have experienced significant failures early in their careers.",
    questionStem: "The reasoning in the argument is",
    answerChoices: [
      { letter: "A", text: "flawed, because it assumes that only entrepreneurs take calculated risks" },
      { letter: "B", text: "flawed, because it draws a conclusion about people in general from evidence about entrepreneurs" },
      { letter: "C", text: "valid, because the conclusion follows necessarily from the premises" },
      { letter: "D", text: "flawed, because it confuses necessary and sufficient conditions" },
      { letter: "E", text: "valid, but only if all people who take calculated risks are entrepreneurs" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "evaluate",
    explanation: "The argument is valid: if all successful entrepreneurs take risks, and some successful entrepreneurs failed early, then some risk-takers failed early."
  },
  {
    id: "lr-12-036",
    sectionType: "logical-reasoning",
    stimulus: "Museum curator: Our institution should return artifacts acquired during the colonial period to their countries of origin. While these objects have been preserved and studied here, they were often taken without consent from their original communities. Museums in wealthy nations should not continue to benefit from historical injustices.",
    questionStem: "Which one of the following, if true, provides the strongest support for the curator's position?",
    answerChoices: [
      { letter: "A", text: "Many countries of origin now have modern museum facilities capable of properly preserving these artifacts" },
      { letter: "B", text: "Some colonial-era acquisitions were made through legitimate purchases from authorized sellers" },
      { letter: "C", text: "Museum attendance might decrease if popular artifacts are returned" },
      { letter: "D", text: "International law does not currently require the return of colonial-era acquisitions" },
      { letter: "E", text: "Some artifacts have been displayed for over a century in their current locations" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Answer A addresses a potential concern that artifacts wouldn't be preserved if returned, strengthening the case for repatriation."
  },
  {
    id: "lr-12-037",
    sectionType: "logical-reasoning",
    stimulus: "Legal scholar: Critics argue that the constitutional right to counsel is inadequate because public defenders are overworked and cannot provide effective representation. While caseloads are indeed high, studies show that experienced public defenders achieve outcomes comparable to private attorneys in similar cases. The quality of representation depends more on experience than caseload.",
    questionStem: "Which one of the following is an assumption required by the legal scholar's argument?",
    answerChoices: [
      { letter: "A", text: "All public defenders have significant experience" },
      { letter: "B", text: "Private attorneys never have high caseloads" },
      { letter: "C", text: "Case outcomes are a valid measure of representation quality" },
      { letter: "D", text: "Constitutional rights should be evaluated based on average outcomes" },
      { letter: "E", text: "Public defenders receive the same training as private attorneys" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The scholar uses comparable outcomes as evidence of adequate representation, assuming outcomes validly measure representation quality."
  },
  {
    id: "lr-12-038",
    sectionType: "logical-reasoning",
    stimulus: "Dietician: Low-fat diets were recommended for decades as the best way to prevent heart disease. However, recent research shows that the type of fat consumed matters more than the total amount. Diets high in unsaturated fats from sources like nuts and olive oil are associated with better heart health than low-fat diets high in refined carbohydrates.",
    questionStem: "The dietician's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "High-fat diets are always healthier than low-fat diets" },
      { letter: "B", text: "The long-standing recommendation to limit total fat intake was misguided" },
      { letter: "C", text: "Refined carbohydrates are the primary cause of heart disease" },
      { letter: "D", text: "Nutritional science never provides reliable recommendations" },
      { letter: "E", text: "Nuts and olive oil can cure existing heart disease" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The dietician's evidence that fat type matters more than amount suggests the total-fat-focused recommendation missed what was truly important."
  },
  {
    id: "lr-12-039",
    sectionType: "logical-reasoning",
    stimulus: "Mayor: The city should invest in a new light rail system. Property values along rail lines in other cities have increased significantly. Higher property values mean increased tax revenue, which would help pay for the system.",
    questionStem: "The mayor's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "assumes that our city's experience would mirror that of other cities" },
      { letter: "B", text: "ignores the possibility that residents might oppose the construction" },
      { letter: "C", text: "fails to consider environmental impacts of light rail construction" },
      { letter: "D", text: "does not specify which other cities experienced increased property values" },
      { letter: "E", text: "presumes that increased tax revenue would be devoted to transportation" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "flaw",
    explanation: "The argument assumes results from other cities would necessarily occur here, without establishing that conditions are sufficiently similar."
  },
  {
    id: "lr-12-040",
    sectionType: "logical-reasoning",
    stimulus: "Biologist: Species that can adapt to a wide range of environmental conditions are sometimes called generalists, while those restricted to narrow conditions are called specialists. During periods of environmental stability, specialists often outcompete generalists in their preferred habitats. However, when conditions change rapidly, generalists are more likely to survive.",
    questionStem: "Which one of the following situations is most analogous to the pattern described by the biologist?",
    answerChoices: [
      { letter: "A", text: "Athletes who train in multiple sports often outperform single-sport athletes" },
      { letter: "B", text: "Companies with diverse product lines may be more resilient during economic downturns than single-product companies" },
      { letter: "C", text: "Students who study consistently throughout the semester perform better than those who cram" },
      { letter: "D", text: "Larger organizations typically have more resources than smaller ones" },
      { letter: "E", text: "Older technologies are always replaced by newer ones" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Answer B parallels the generalist/specialist dynamic: diverse companies (generalists) survive instability better, while focused companies (specialists) may excel in stable conditions."
  },
  {
    id: "lr-12-041",
    sectionType: "logical-reasoning",
    stimulus: "Political analyst: Voter turnout in midterm elections is typically much lower than in presidential elections. Some argue this is because voters find midterm elections less important. However, many of the government positions decided in midterm elections have more direct impact on citizens' daily lives than the presidency does.",
    questionStem: "The political analyst's statements, if true, provide the most support for which one of the following?",
    answerChoices: [
      { letter: "A", text: "Voters are irrational in their electoral participation decisions" },
      { letter: "B", text: "Presidential elections should be held more frequently" },
      { letter: "C", text: "Lower midterm turnout may not be explained by the lesser importance of those elections" },
      { letter: "D", text: "Citizens should be required to vote in all elections" },
      { letter: "E", text: "Midterm elections receive adequate media coverage" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "If midterm elections often have more direct impact, then lower turnout cannot simply be attributed to their being less important."
  },
  {
    id: "lr-12-042",
    sectionType: "logical-reasoning",
    stimulus: "Psychologist: People often claim they would behave ethically in difficult situations, but experiments show that situational pressures frequently lead people to act against their stated values. The implication is that moral character may be less stable than commonly believed, with behavior depending more on circumstances than on enduring traits.",
    questionStem: "Which one of the following, if true, most weakens the psychologist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Some individuals consistently behave ethically even under significant situational pressure" },
      { letter: "B", text: "People with strong moral education are more aware of situational pressures" },
      { letter: "C", text: "The experiments were conducted in laboratory settings rather than real-world environments" },
      { letter: "D", text: "Ethical behavior is difficult to measure objectively" },
      { letter: "E", text: "Most people believe they would behave more ethically than average" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If some individuals consistently act ethically despite pressure, this suggests stable moral character does exist for some people, weakening the universal conclusion."
  },
  {
    id: "lr-12-043",
    sectionType: "logical-reasoning",
    stimulus: "Archaeologist: Ancient societies are often judged by the monuments they left behind. However, many sophisticated civilizations built primarily with wood and other perishable materials, leaving few traces. Our understanding of the ancient world is biased toward stone-building cultures simply because their structures survived.",
    questionStem: "Which one of the following can be properly inferred from the archaeologist's statements?",
    answerChoices: [
      { letter: "A", text: "Stone-building cultures were less sophisticated than those that built with wood" },
      { letter: "B", text: "Archaeological evidence may underrepresent certain advanced civilizations" },
      { letter: "C", text: "Modern archaeologists should focus more resources on finding wooden structures" },
      { letter: "D", text: "All ancient civilizations achieved similar levels of technological development" },
      { letter: "E", text: "Written records are more reliable than physical structures for understanding ancient societies" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "If sophisticated civilizations using perishable materials left few traces, archaeological evidence likely underrepresents them."
  },
  {
    id: "lr-12-044",
    sectionType: "logical-reasoning",
    stimulus: "Music producer: Critics claim that auto-tune and digital correction have ruined popular music by eliminating the human imperfections that made recordings feel authentic. But recording technology has always involved manipulation. Multi-track recording, which has been standard since the 1960s, allows producers to combine the best parts of multiple takes—a form of correction that was once equally controversial.",
    questionStem: "The music producer's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "demonstrating that the critics lack musical expertise" },
      { letter: "B", text: "arguing that newer technologies are superior to older ones" },
      { letter: "C", text: "suggesting that the criticized practice is continuous with accepted historical practices" },
      { letter: "D", text: "providing evidence that auto-tune improves musical quality" },
      { letter: "E", text: "claiming that authenticity is not a valid criterion for evaluating music" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The producer defends auto-tune by placing it on a continuum with multi-track recording, a similar manipulation that is now accepted."
  },
  {
    id: "lr-12-045",
    sectionType: "logical-reasoning",
    stimulus: "Agricultural scientist: Genetically modified crops that produce their own insecticides have reduced the need for chemical pesticide applications. However, some insects have begun developing resistance to these built-in insecticides. If this resistance becomes widespread, farmers may need to return to chemical pesticides, potentially applying even more than before the adoption of GM crops.",
    questionStem: "The agricultural scientist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Genetically modified crops should be banned entirely" },
      { letter: "B", text: "Chemical pesticides are safer than genetically modified insecticides" },
      { letter: "C", text: "The long-term pesticide reduction benefits of GM crops are uncertain" },
      { letter: "D", text: "Insects cannot develop resistance to chemical pesticides" },
      { letter: "E", text: "Farmers prefer chemical pesticides to genetically modified crops" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "If resistance could return pesticide use to or above previous levels, the sustainability of GM crops' pesticide reduction benefit is questionable."
  },
  {
    id: "lr-12-046",
    sectionType: "logical-reasoning",
    stimulus: "Business consultant: Companies often hire consultants to provide objective outside perspectives. However, consultants who recommend major changes are more likely to be rehired than those who validate current practices. This creates an incentive for consultants to identify problems even when none exist, undermining the objectivity they are hired to provide.",
    questionStem: "The business consultant's reasoning relies on the assumption that",
    answerChoices: [
      { letter: "A", text: "companies always follow the recommendations of their consultants" },
      { letter: "B", text: "consultants who recommend changes are consciously aware of their incentive" },
      { letter: "C", text: "the desire for future work influences consultants' recommendations" },
      { letter: "D", text: "all consultants lack genuine expertise in their fields" },
      { letter: "E", text: "major organizational changes are always unnecessary" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument assumes consultants respond to the rehiring incentive, which requires that incentives actually influence their recommendations."
  },
  {
    id: "lr-12-047",
    sectionType: "logical-reasoning",
    stimulus: "Film historian: Classic Hollywood films from the 1930s and 1940s are often praised for their sophisticated dialogue. However, these films were produced under a strict censorship code that prohibited explicit content. Writers had to imply through clever dialogue what they could not show directly. The dialogue sophistication we admire was largely a creative response to restrictive constraints.",
    questionStem: "Which one of the following, if true, would most strengthen the film historian's argument?",
    answerChoices: [
      { letter: "A", text: "Some films from this era had dialogue that critics found simplistic" },
      { letter: "B", text: "Modern films without censorship restrictions often feature less witty dialogue" },
      { letter: "C", text: "The censorship code was inconsistently enforced across different studios" },
      { letter: "D", text: "Many classic Hollywood screenwriters had backgrounds in theater" },
      { letter: "E", text: "European films of the same era faced different censorship standards" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If modern unrestricted films have less sophisticated dialogue, this supports the link between censorship constraints and dialogue creativity."
  },
  {
    id: "lr-12-048",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Proponents of universal basic income argue it would eliminate poverty. Opponents counter that it would reduce the incentive to work. Both sides miss that such programs already exist in various forms, such as Social Security and the Alaska Permanent Fund dividend. These programs provide evidence that can inform the debate rather than mere speculation.",
    questionStem: "The economist's main point is that",
    answerChoices: [
      { letter: "A", text: "universal basic income would successfully eliminate poverty" },
      { letter: "B", text: "existing programs demonstrate universal basic income is feasible" },
      { letter: "C", text: "empirical evidence should guide the universal basic income debate" },
      { letter: "D", text: "both proponents and opponents of universal basic income are equally wrong" },
      { letter: "E", text: "the Alaska Permanent Fund dividend has been a successful program" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The economist criticizes both sides for speculating when evidence from existing programs could inform the discussion."
  },
  {
    id: "lr-12-049",
    sectionType: "logical-reasoning",
    stimulus: "Journalist: Social media companies claim to be neutral platforms that simply host user content. However, their algorithms actively curate what users see, promoting some content and suppressing other content. A company that shapes discourse through algorithmic curation is not a neutral platform but an active participant in public debate.",
    questionStem: "Which one of the following, if true, provides the strongest objection to the journalist's reasoning?",
    answerChoices: [
      { letter: "A", text: "Newspapers also make editorial decisions about which stories to feature" },
      { letter: "B", text: "Users can adjust their settings to modify algorithmic recommendations" },
      { letter: "C", text: "The algorithms are designed to show users content similar to what they have engaged with before" },
      { letter: "D", text: "Social media companies employ many people to review content" },
      { letter: "E", text: "Some social media platforms are more transparent about their algorithms than others" }
    ],
    correctAnswer: "C",
    difficulty: "hard",
    type: "weaken",
    explanation: "If algorithms simply reflect user preferences rather than imposing company preferences, the companies might still be considered relatively neutral facilitators."
  },
  {
    id: "lr-12-050",
    sectionType: "logical-reasoning",
    stimulus: "Philosophy professor: Students often ask why they should study ancient philosophers whose scientific understanding was limited. The value lies not in their conclusions but in their methods of inquiry and argumentation. Learning to analyze and critique arguments develops skills that remain valuable regardless of the specific content being analyzed.",
    questionStem: "The philosophy professor's argument would be most strengthened if which one of the following were true?",
    answerChoices: [
      { letter: "A", text: "Ancient philosophers agreed on most important philosophical questions" },
      { letter: "B", text: "Students who study ancient philosophy perform better on tests of critical reasoning across various domains" },
      { letter: "C", text: "Modern philosophy has rejected most conclusions of ancient philosophers" },
      { letter: "D", text: "Ancient philosophical texts are more accessible than modern ones" },
      { letter: "E", text: "Some ancient philosophers made accurate scientific predictions" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence that philosophy study improves broad critical reasoning supports the claim that the methods transfer beyond the specific content studied."
  }
];
