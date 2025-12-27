import { Question } from "../lsat-types";

export const lrQuestionsSet16: Question[] = [
  {
    id: "lr-16-001",
    sectionType: "logical-reasoning",
    stimulus: "Scientist: The discovery of water on Mars has renewed interest in the possibility of Martian life. Some argue that where there is water, life inevitably follows. But Earth may be exceptional—the only place where the particular conditions necessary for life happened to converge. The presence of water is necessary but not sufficient for life.",
    questionStem: "The scientist's argument is most vulnerable to criticism on which one of the following grounds?",
    answerChoices: [
      { letter: "A", text: "It assumes that Martian life would require the same conditions as Earth life" },
      { letter: "B", text: "It does not provide evidence that Earth's conditions are unique" },
      { letter: "C", text: "It ignores the possibility that water on Mars was once more abundant" },
      { letter: "D", text: "It fails to consider life forms that do not require water" },
      { letter: "E", text: "It assumes that all life requires similar chemical processes" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "flaw",
    explanation: "The scientist assumes Martian life would need Earth-like conditions, but Martian life might have evolved with different requirements."
  },
  {
    id: "lr-16-002",
    sectionType: "logical-reasoning",
    stimulus: "Political commentator: Voters often claim to want politicians who will compromise for the common good. Yet when politicians do compromise, voters punish them in primaries for being insufficiently committed to party principles. This suggests that voters' stated preferences differ from their revealed preferences at the ballot box.",
    questionStem: "The commentator's argument relies on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Politicians always keep their campaign promises" },
      { letter: "B", text: "Primary voters are representative of all voters" },
      { letter: "C", text: "The voters who claim to want compromise are the same voters who punish compromise in primaries" },
      { letter: "D", text: "Compromise always serves the common good" },
      { letter: "E", text: "Party principles never align with the common good" }
    ],
    correctAnswer: "C",
    difficulty: "hard",
    type: "necessary-assumption",
    explanation: "The argument claims voters' stated and revealed preferences differ, but this requires the same voters to hold both positions."
  },
  {
    id: "lr-16-003",
    sectionType: "logical-reasoning",
    stimulus: "Nutritionist: The Mediterranean diet has been associated with longevity and reduced heart disease in observational studies. Some researchers attribute these benefits to olive oil, others to fish consumption, others to red wine in moderation. Most likely, no single component explains the benefits; rather, the overall dietary pattern matters.",
    questionStem: "The nutritionist's conclusion is best characterized as",
    answerChoices: [
      { letter: "A", text: "a claim that the Mediterranean diet has no health benefits" },
      { letter: "B", text: "a rejection of all proposed explanations for the diet's benefits" },
      { letter: "C", text: "an argument that the whole diet matters more than any individual component" },
      { letter: "D", text: "a prediction about future nutrition research" },
      { letter: "E", text: "a criticism of observational study methodology" }
    ],
    correctAnswer: "C",
    difficulty: "easy",
    type: "main-conclusion",
    explanation: "The nutritionist suggests the overall pattern, not any single component, explains the benefits—a holistic rather than reductionist view."
  },
  {
    id: "lr-16-004",
    sectionType: "logical-reasoning",
    stimulus: "Urban designer: Streets designed primarily for automobile traffic are dangerous for pedestrians and cyclists. When traffic lanes are narrowed and protected bike lanes are added, studies show accident rates decrease for all users, including drivers. Slower traffic and better sight lines benefit everyone.",
    questionStem: "Which one of the following, if true, most strengthens the urban designer's argument?",
    answerChoices: [
      { letter: "A", text: "Some drivers initially complain about narrowed lanes" },
      { letter: "B", text: "Cities that redesigned streets saw economic benefits from increased foot traffic" },
      { letter: "C", text: "Insurance companies have begun offering lower rates in redesigned areas" },
      { letter: "D", text: "The redesigned streets experienced significantly fewer severe injuries and fatalities" },
      { letter: "E", text: "Pedestrian and cyclist usage increased after redesigns" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence of fewer severe injuries directly supports the claim that redesigned streets are safer for all users."
  },
  {
    id: "lr-16-005",
    sectionType: "logical-reasoning",
    stimulus: "Every successful negotiation requires both parties to make concessions. The labor talks required the union to make concessions. Therefore, the labor talks were successful negotiations.",
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "fails to consider whether the employer also made concessions" },
      { letter: "B", text: "treats a necessary condition as if it were sufficient" },
      { letter: "C", text: "assumes that all negotiations involve labor unions" },
      { letter: "D", text: "does not define what constitutes a concession" },
      { letter: "E", text: "generalizes from a single example" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "flaw",
    explanation: "The argument notes that concessions are necessary for success, but concludes from concessions that success occurred—confusing necessity with sufficiency."
  },
  {
    id: "lr-16-006",
    sectionType: "logical-reasoning",
    stimulus: "Art historian: Renaissance painters developed mathematical perspective to create realistic depth on flat surfaces. Some view this as pure technical advancement. But perspective also served ideological purposes, placing the viewer at the center of a rational, ordered world. Technical and cultural developments were intertwined.",
    questionStem: "The art historian's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "refuting the claim that Renaissance painters developed perspective" },
      { letter: "B", text: "expanding a narrow technical explanation to include cultural significance" },
      { letter: "C", text: "arguing that ideology was more important than technique" },
      { letter: "D", text: "demonstrating that mathematical perspective was not actually realistic" },
      { letter: "E", text: "tracing the influence of Renaissance art on modern art" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The art historian adds cultural/ideological dimension to the purely technical understanding, broadening the explanation."
  },
  {
    id: "lr-16-007",
    sectionType: "logical-reasoning",
    stimulus: "Ecologist: Island ecosystems are particularly vulnerable to invasive species because native species evolved without exposure to mainland predators and competitors. Some conservationists advocate eradicating all non-native species. However, some introduced species have become integral to current ecosystems, and their removal could cause more harm than their presence.",
    questionStem: "The ecologist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Invasive species should never be removed from island ecosystems" },
      { letter: "B", text: "All non-native species are harmful to native ecosystems" },
      { letter: "C", text: "Decisions about removing non-native species should consider their current ecological role" },
      { letter: "D", text: "Native species will eventually adapt to invasive species" },
      { letter: "E", text: "Conservation efforts on islands are futile" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The ecologist's point about some introduced species being integral supports case-by-case evaluation considering current ecological function."
  },
  {
    id: "lr-16-008",
    sectionType: "logical-reasoning",
    stimulus: "Philosopher: Some argue that free will is incompatible with determinism—if every event is caused by prior events, our choices are predetermined and not truly free. But we experience making choices and feel responsible for our actions. This phenomenological reality should count for something in the debate.",
    questionStem: "The philosopher's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that determinism implies that human choices do not exist" },
      { letter: "B", text: "It does not address whether the experience of free choice could be illusory" },
      { letter: "C", text: "It relies on an overly technical definition of determinism" },
      { letter: "D", text: "It ignores evidence from neuroscience about decision-making" },
      { letter: "E", text: "It conflates feelings of responsibility with actual responsibility" }
    ],
    correctAnswer: "B",
    difficulty: "hard",
    type: "flaw",
    explanation: "The philosopher appeals to the experience of choice but doesn't address the possibility that this experience could be an illusion compatible with determinism."
  },
  {
    id: "lr-16-009",
    sectionType: "logical-reasoning",
    stimulus: "Principle: Medical decisions should be made jointly by doctors and patients, with doctors providing expertise and patients providing values and preferences.\n\nApplication: Dr. Patel was wrong to perform the surgery without discussing alternative treatments with the patient.",
    questionStem: "Which one of the following, if true, most undermines the application of the principle?",
    answerChoices: [
      { letter: "A", text: "Dr. Patel has extensive experience with this type of surgery" },
      { letter: "B", text: "The surgery was an emergency procedure necessary to save the patient's life" },
      { letter: "C", text: "Most surgeons would have made the same decision" },
      { letter: "D", text: "The patient had previously expressed trust in Dr. Patel's judgment" },
      { letter: "E", text: "Alternative treatments had lower success rates" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "Emergency situations may not allow time for discussion, making the joint decision-making principle inapplicable."
  },
  {
    id: "lr-16-010",
    sectionType: "logical-reasoning",
    stimulus: "Journalist: Anonymous online comments are often toxic and uncivil. Some platforms have required real-name verification, reducing incivility. Critics argue this chills legitimate speech by those who need anonymity. A middle ground might allow verified pseudonyms—real identity known to the platform but not other users.",
    questionStem: "The journalist's proposal is designed to",
    answerChoices: [
      { letter: "A", text: "eliminate all online incivility" },
      { letter: "B", text: "prevent platforms from knowing users' identities" },
      { letter: "C", text: "balance accountability with protection for those who need anonymity" },
      { letter: "D", text: "prove that real-name policies always reduce incivility" },
      { letter: "E", text: "argue against any form of user verification" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The verified pseudonym proposal aims to address both concerns—accountability (reducing toxicity) and privacy (protecting those needing anonymity)."
  },
  {
    id: "lr-16-011",
    sectionType: "logical-reasoning",
    stimulus: "Manager: Our customer satisfaction scores have declined since we implemented the new service protocol. The protocol was designed to increase efficiency by reducing average call time. Customers may be perceiving shorter calls as rushed service rather than efficient service.",
    questionStem: "The manager's explanation assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "All customers prefer longer service calls" },
      { letter: "B", text: "The new protocol has actually reduced average call time" },
      { letter: "C", text: "Customer satisfaction depends entirely on call duration" },
      { letter: "D", text: "The previous protocol was inefficient" },
      { letter: "E", text: "Employee satisfaction has also declined" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The explanation that shorter calls feel rushed requires the protocol to have actually shortened calls; if it hasn't, this explanation fails."
  },
  {
    id: "lr-16-012",
    sectionType: "logical-reasoning",
    stimulus: "Biologist: The peacock's elaborate tail seems to contradict natural selection—it's conspicuous to predators and makes flight difficult. Darwin proposed sexual selection: traits that increase mating success can spread even if they decrease survival odds. The tail's beauty attracts mates, offsetting survival costs.",
    questionStem: "Which one of the following, if true, most supports the biologist's explanation?",
    answerChoices: [
      { letter: "A", text: "Peacocks with larger, more colorful tails produce more offspring than those with smaller tails" },
      { letter: "B", text: "Peahens have dull coloring that provides camouflage" },
      { letter: "C", text: "Some predators are attracted to bright colors" },
      { letter: "D", text: "Other bird species also have elaborate male plumage" },
      { letter: "E", text: "Peacocks can shed tail feathers when threatened" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence that elaborate tails increase reproductive success directly supports the sexual selection explanation."
  },
  {
    id: "lr-16-013",
    sectionType: "logical-reasoning",
    stimulus: "Sociologist: Social media was expected to democratize public discourse by giving everyone a platform. Instead, a small number of accounts generate most engagement, and algorithms amplify already popular content. The promised democratization has produced new forms of concentration and hierarchy.",
    questionStem: "The sociologist's argument is best described as",
    answerChoices: [
      { letter: "A", text: "a prediction about the future of social media" },
      { letter: "B", text: "an observation that outcomes differ from initial expectations" },
      { letter: "C", text: "a recommendation for regulating social media platforms" },
      { letter: "D", text: "a defense of traditional media over social media" },
      { letter: "E", text: "an argument that democratization is undesirable" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "method-of-reasoning",
    explanation: "The sociologist contrasts what was expected (democratization) with what occurred (new concentration), observing unexpected outcomes."
  },
  {
    id: "lr-16-014",
    sectionType: "logical-reasoning",
    stimulus: "Attorney: My client could not have committed the robbery because she was at a restaurant across town at the time. The waiter remembers serving her because she left an unusually large tip. The receipt confirms a transaction at that time and location.",
    questionStem: "Which one of the following, if true, most seriously calls into question the attorney's alibi defense?",
    answerChoices: [
      { letter: "A", text: "The restaurant's credit card records show the transaction occurred 30 minutes earlier than the receipt suggests" },
      { letter: "B", text: "The defendant often eats at that restaurant" },
      { letter: "C", text: "The waiter has a clear memory of unusual events" },
      { letter: "D", text: "Credit card transactions can be declined for various reasons" },
      { letter: "E", text: "Large tips are uncommon at that restaurant" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If the transaction was 30 minutes earlier than claimed, the defendant might have had time to travel to the robbery location."
  },
  {
    id: "lr-16-015",
    sectionType: "logical-reasoning",
    stimulus: "All of the paintings selected for the exhibition were created by artists under forty. Some paintings created by artists under forty were not selected for the exhibition. Therefore, age alone did not determine selection.",
    questionStem: "The reasoning in the argument is",
    answerChoices: [
      { letter: "A", text: "flawed, because it ignores paintings by artists over forty" },
      { letter: "B", text: "valid, because the conclusion follows necessarily from the premises" },
      { letter: "C", text: "flawed, because it confuses necessary and sufficient conditions" },
      { letter: "D", text: "valid, but only if artistic quality was the selection criterion" },
      { letter: "E", text: "flawed, because it draws a conclusion about selection criteria from evidence about outcomes" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "evaluate",
    explanation: "The argument is valid: if being under forty was necessary but some under-forty paintings weren't selected, another factor must have determined selection."
  },
  {
    id: "lr-16-016",
    sectionType: "logical-reasoning",
    stimulus: "Music producer: Auto-tune and pitch correction are criticized for eliminating imperfections that make performances human and relatable. But recording has always involved manipulation—editing takes, adjusting levels, adding effects. Drawing a line at pitch correction is arbitrary when so many other manipulations are accepted.",
    questionStem: "Which one of the following, if true, most weakens the music producer's argument?",
    answerChoices: [
      { letter: "A", text: "Some successful recordings use no pitch correction" },
      { letter: "B", text: "Pitch correction directly alters the fundamental identity of a vocal performance in ways other manipulations do not" },
      { letter: "C", text: "Listeners cannot always detect the use of pitch correction" },
      { letter: "D", text: "Many performers support the use of pitch correction technology" },
      { letter: "E", text: "Recording technology continues to advance rapidly" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If pitch correction is qualitatively different from other manipulations, the line drawn against it would not be arbitrary."
  },
  {
    id: "lr-16-017",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Carbon taxes are intended to reduce emissions by increasing the cost of fossil fuels. But if consumers simply absorb higher prices without changing behavior, emissions continue while costs shift to households. The effectiveness of carbon taxes depends on how responsive consumers are to price changes.",
    questionStem: "The economist's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Carbon taxes should be abandoned as climate policy" },
      { letter: "B", text: "The environmental impact of carbon taxes is uncertain without knowing demand elasticity" },
      { letter: "C", text: "Consumers will always absorb higher fuel prices" },
      { letter: "D", text: "Fossil fuel companies should pay carbon taxes instead of consumers" },
      { letter: "E", text: "Higher prices always lead to reduced consumption" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The economist notes that effectiveness depends on consumer price responsiveness (elasticity), making outcomes uncertain without knowing this factor."
  },
  {
    id: "lr-16-018",
    sectionType: "logical-reasoning",
    stimulus: "Archaeologist: The ancient structure's alignment with celestial events suggests astronomical knowledge. Some interpret this as evidence of scientific sophistication. But astronomical alignment could serve religious rather than scientific purposes. The builders may have tracked the sun for ritual reasons without understanding the mechanics of planetary motion.",
    questionStem: "The archaeologist's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "denying that the structure has any astronomical alignment" },
      { letter: "B", text: "suggesting an alternative explanation for the observed evidence" },
      { letter: "C", text: "proving that ancient peoples had no scientific knowledge" },
      { letter: "D", text: "demonstrating that religious and scientific purposes are incompatible" },
      { letter: "E", text: "questioning the dating of the ancient structure" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "method-of-reasoning",
    explanation: "The archaeologist offers religious/ritual purpose as an alternative to scientific sophistication to explain the astronomical alignment."
  },
  {
    id: "lr-16-019",
    sectionType: "logical-reasoning",
    stimulus: "Teacher: Students perform better when teachers have high expectations for them—a finding known as the expectation effect. Some conclude from this that teachers should express confidence in all students. But expressing expectations you don't genuinely hold can backfire if students detect insincerity.",
    questionStem: "The teacher's argument is designed to show that",
    answerChoices: [
      { letter: "A", text: "the expectation effect does not actually exist" },
      { letter: "B", text: "high expectations always improve student performance" },
      { letter: "C", text: "applying research findings to practice requires careful consideration" },
      { letter: "D", text: "teachers should lower their expectations for struggling students" },
      { letter: "E", text: "sincerity is more important than expectations" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The teacher cautions that the straightforward application (express high expectations) may backfire, requiring thoughtful implementation."
  },
  {
    id: "lr-16-020",
    sectionType: "logical-reasoning",
    stimulus: "No experienced mountaineer would attempt that route without proper equipment. Chen attempted that route without proper equipment. Therefore, Chen is not an experienced mountaineer.",
    questionStem: "Which one of the following arguments exhibits a flawed pattern of reasoning most similar to that in the argument above, if any?",
    answerChoices: [
      { letter: "A", text: "No responsible driver would speed through a school zone. Martinez sped through a school zone. Therefore, Martinez is not a responsible driver." },
      { letter: "B", text: "All registered voters are citizens. Patel is a citizen. Therefore, Patel is a registered voter." },
      { letter: "C", text: "Some artists work in multiple media. Jackson works in multiple media. Therefore, Jackson might be an artist." },
      { letter: "D", text: "The original argument is valid and contains no flawed reasoning." },
      { letter: "E", text: "Every champion has trained intensively. Williams has trained intensively. Therefore, Williams is a champion." }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "The original argument is valid modus tollens: No X would do Y; Z did Y; therefore Z is not X. Answer A follows the same valid pattern."
  },
  {
    id: "lr-16-021",
    sectionType: "logical-reasoning",
    stimulus: "Veterinarian: Pet owners sometimes delay vaccinations, believing their indoor pets face no disease risk. But some diseases are airborne or can enter homes on clothing and shoes. Unvaccinated pets also pose risks to other animals if they escape or are surrendered to shelters. Indoor status does not eliminate the need for vaccination.",
    questionStem: "Which one of the following most accurately describes the role of the statement about diseases being airborne?",
    answerChoices: [
      { letter: "A", text: "It is the main conclusion the veterinarian is arguing for" },
      { letter: "B", text: "It provides evidence against the assumption that indoor pets face no disease risk" },
      { letter: "C", text: "It offers a compromise position between pro-vaccine and anti-vaccine views" },
      { letter: "D", text: "It concedes a point to those who oppose pet vaccination" },
      { letter: "E", text: "It demonstrates that outdoor pets need different vaccinations than indoor pets" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The airborne disease point directly counters the assumption that indoor pets are protected from disease, supporting the vaccination argument."
  },
  {
    id: "lr-16-022",
    sectionType: "logical-reasoning",
    stimulus: "Chef: Restaurant critics judge meals against absolute standards of culinary excellence. But a family diner should not be held to the same standards as a fine dining establishment. The relevant question is whether a restaurant succeeds at what it attempts—whether the diner serves excellent comfort food, not whether it rivals Michelin-starred cuisine.",
    questionStem: "The chef's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that critics are unfamiliar with different types of restaurants" },
      { letter: "B", text: "It does not provide evidence that critics actually apply absolute standards to all restaurants" },
      { letter: "C", text: "It ignores the fact that some family diners aspire to fine dining quality" },
      { letter: "D", text: "It fails to define what constitutes culinary excellence" },
      { letter: "E", text: "It assumes that readers prefer reviews that match their expectations" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "The chef assumes critics use absolute standards when they may already evaluate restaurants against genre-appropriate expectations."
  },
  {
    id: "lr-16-023",
    sectionType: "logical-reasoning",
    stimulus: "Statistician: Studies showing a correlation between breakfast consumption and academic performance have been widely cited as evidence that breakfast improves grades. But these studies do not control for household income, parental education, and sleep habits—all of which correlate with both breakfast consumption and academic success.",
    questionStem: "The statistician's argument is designed to show that",
    answerChoices: [
      { letter: "A", text: "breakfast has no effect on academic performance" },
      { letter: "B", text: "the cited studies do not establish that breakfast causes improved performance" },
      { letter: "C", text: "students from wealthy families perform better academically" },
      { letter: "D", text: "sleep is more important than nutrition for academic success" },
      { letter: "E", text: "correlation studies are never useful" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The statistician argues the studies have confounds that prevent drawing causal conclusions, not that there's no effect."
  },
  {
    id: "lr-16-024",
    sectionType: "logical-reasoning",
    stimulus: "Publisher: Physical bookstores are struggling against online retailers. Some predict bookstores will disappear entirely. But bookstores offer experiences online shopping cannot—browsing, community events, personal recommendations. Stores that emphasize these unique advantages can thrive despite online competition.",
    questionStem: "Which one of the following, if true, most strengthens the publisher's argument?",
    answerChoices: [
      { letter: "A", text: "Online retailers continue to offer steep discounts on books" },
      { letter: "B", text: "Independent bookstores that expanded their event programming saw increased sales" },
      { letter: "C", text: "Some consumers prefer the convenience of home delivery" },
      { letter: "D", text: "Large chain bookstores have closed many locations" },
      { letter: "E", text: "E-book sales have recently declined" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence that emphasizing unique advantages (events) increased sales supports the claim that such strategies can help stores thrive."
  },
  {
    id: "lr-16-025",
    sectionType: "logical-reasoning",
    stimulus: "Historian: The fall of empires is often attributed to external invasions. But invasions succeed only when empires are already weakened by internal factors—economic decline, political instability, loss of legitimacy. External shocks reveal rather than cause imperial weakness.",
    questionStem: "The historian's argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "All empires eventually fall" },
      { letter: "B", text: "Internal factors always precede successful invasions of empires" },
      { letter: "C", text: "Economic factors are more important than political factors in imperial decline" },
      { letter: "D", text: "Invasions never succeed against strong empires" },
      { letter: "E", text: "Historians have accurately identified the causes of past imperial falls" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The historian claims internal weakness precedes successful invasion; if invasions sometimes succeed against healthy empires, the argument fails."
  },
  {
    id: "lr-16-026",
    sectionType: "logical-reasoning",
    stimulus: "Psychologist: Memory is often compared to a recording that can be played back. But this metaphor is misleading. Memories are reconstructed each time they are recalled, incorporating current knowledge and beliefs. What we remember is shaped by who we are now, not just what happened then.",
    questionStem: "Which one of the following, if true, most strongly supports the psychologist's claim about memory reconstruction?",
    answerChoices: [
      { letter: "A", text: "People can generally distinguish their own memories from things they have only imagined" },
      { letter: "B", text: "Details of recalled memories often change based on questions asked during recall" },
      { letter: "C", text: "Some memories remain vivid throughout a person's lifetime" },
      { letter: "D", text: "Memories of emotional events tend to be more detailed" },
      { letter: "E", text: "Most people believe their memories are accurate" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If recall questions change memory details, this demonstrates the reconstructive process the psychologist describes."
  },
  {
    id: "lr-16-027",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Some argue that rent control is necessary to keep housing affordable for low-income residents. However, economists across the political spectrum agree that rent control reduces housing supply over time, ultimately making the affordability problem worse. There must be better approaches to housing affordability.",
    questionStem: "Which one of the following, if true, most weakens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Economists often disagree about other policy questions" },
      { letter: "B", text: "Some cities with rent control have experienced increases in housing construction" },
      { letter: "C", text: "Rent control policies vary significantly in their specific provisions" },
      { letter: "D", text: "Housing affordability affects people across income levels" },
      { letter: "E", text: "Many economists receive funding from real estate interests" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "Evidence that some rent-controlled cities saw increased construction challenges the claim that rent control reduces supply."
  },
  {
    id: "lr-16-028",
    sectionType: "logical-reasoning",
    stimulus: "Art critic: Modern museums often display artworks without any contextual information, believing viewers should experience art directly. But without context about when, where, and why a work was created, viewers may misunderstand it entirely. The most meaningful encounters with art balance direct experience with historical understanding.",
    questionStem: "The art critic's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "rejecting the value of direct experience with art" },
      { letter: "B", text: "arguing for a middle position between two approaches" },
      { letter: "C", text: "proving that historical context is more important than direct experience" },
      { letter: "D", text: "criticizing museums for political bias in their presentations" },
      { letter: "E", text: "demonstrating that all viewers misunderstand decontextualized art" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The critic advocates for balance between direct experience (acknowledged as valuable) and contextual information—a middle position."
  },
  {
    id: "lr-16-029",
    sectionType: "logical-reasoning",
    stimulus: "Sociologist: Income mobility—the chance of moving up the economic ladder—has declined in recent decades. Some attribute this to declining manufacturing jobs, others to changes in education. Whatever the cause, declining mobility challenges the belief that hard work reliably leads to advancement, potentially undermining social cohesion.",
    questionStem: "The sociologist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Hard work no longer has any effect on economic outcomes" },
      { letter: "B", text: "Manufacturing jobs should be restored to increase mobility" },
      { letter: "C", text: "Declining mobility may have social consequences beyond economics" },
      { letter: "D", text: "Education has no effect on economic mobility" },
      { letter: "E", text: "Social cohesion depends entirely on income mobility" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The sociologist links declining mobility to potentially undermined social cohesion, suggesting consequences beyond pure economics."
  },
  {
    id: "lr-16-030",
    sectionType: "logical-reasoning",
    stimulus: "Some marine mammals are endangered species. All endangered species require legal protection. Therefore, some marine mammals require legal protection.",
    questionStem: "The pattern of reasoning in the argument is most closely paralleled by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Some fruits are tropical. All tropical produce requires careful shipping. Therefore, some fruits require careful shipping." },
      { letter: "B", text: "All trees are plants. Some trees are deciduous. Therefore, some plants are deciduous." },
      { letter: "C", text: "No insects are mammals. All mammals are warm-blooded. Therefore, no insects are warm-blooded." },
      { letter: "D", text: "Most birds can fly. Penguins are birds. Therefore, penguins can probably fly." },
      { letter: "E", text: "Every lawyer passed the bar exam. Chang is a lawyer. Therefore, Chang passed the bar exam." }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Both arguments follow: Some X are Y; All Y require Z; therefore some X require Z. This is a valid pattern."
  },
  {
    id: "lr-16-031",
    sectionType: "logical-reasoning",
    stimulus: "Detective: The burglary occurred between 8 PM and midnight. The suspect claims to have been at a movie theater from 7:30 PM to 10:30 PM. However, the movie he claims to have seen ran only until 9:45 PM. Either he left before the movie ended, or he lied about which movie he saw.",
    questionStem: "The detective's reasoning depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "The suspect had a motive to commit the burglary" },
      { letter: "B", text: "The theater records show that the movie ended at 9:45 PM" },
      { letter: "C", text: "The suspect did not attend a different showing of the same movie" },
      { letter: "D", text: "The suspect did not watch a different movie that ended at 10:30 PM" },
      { letter: "E", text: "Theater ticket purchases are recorded electronically" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "If the suspect watched a different movie that ran until 10:30, his claim would be consistent; the detective assumes he didn't."
  },
  {
    id: "lr-16-032",
    sectionType: "logical-reasoning",
    stimulus: "Environmental scientist: Some argue that protecting wilderness areas is an economic luxury that developing nations cannot afford. But wilderness provides essential services—clean water, flood control, climate regulation—that would be expensive to replace. Conservation may be more cost-effective than destruction followed by technological substitution.",
    questionStem: "Which one of the following, if true, most strengthens the environmental scientist's argument?",
    answerChoices: [
      { letter: "A", text: "Some wilderness areas contain valuable mineral resources" },
      { letter: "B", text: "A major city's water costs increased significantly after upstream deforestation" },
      { letter: "C", text: "Developing nations have diverse economic challenges" },
      { letter: "D", text: "Some ecosystem services are difficult to measure in monetary terms" },
      { letter: "E", text: "Conservation efforts sometimes conflict with local land use practices" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "A concrete example of increased costs after wilderness loss supports the claim that conservation is cost-effective compared to replacement."
  },
  {
    id: "lr-16-033",
    sectionType: "logical-reasoning",
    stimulus: "Theater director: Critics of our diverse casting argue that we are prioritizing politics over quality. But we select from a wider talent pool by not restricting roles by race or gender. Greater competition for roles produces higher-quality performances, not lower ones. Our casting practices serve artistic excellence.",
    questionStem: "The theater director's argument would be most weakened by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Some audience members prefer traditional casting" },
      { letter: "B", text: "Diverse casting has been practiced for decades" },
      { letter: "C", text: "The most talented performers are not evenly distributed across demographic groups in the available pool" },
      { letter: "D", text: "Critics of diverse casting include some theater professionals" },
      { letter: "E", text: "Performance quality is subjective and difficult to measure" }
    ],
    correctAnswer: "C",
    difficulty: "hard",
    type: "weaken",
    explanation: "If top talent isn't evenly distributed, a larger pool doesn't guarantee better performances, weakening the quality argument."
  },
  {
    id: "lr-16-034",
    sectionType: "logical-reasoning",
    stimulus: "Nutritionist: Vitamin supplements are marketed as promoting health, but most studies find no benefit for healthy people who eat balanced diets. The supplement industry flourishes not because supplements work but because people are anxious about their health and want simple solutions.",
    questionStem: "The nutritionist's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "All supplement consumers eat balanced diets" },
      { letter: "B", text: "The supplement industry's success is due primarily to marketing rather than product efficacy" },
      { letter: "C", text: "Anxiety about health is irrational" },
      { letter: "D", text: "No supplements have any health benefits" },
      { letter: "E", text: "Simple solutions to health problems are never effective" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The nutritionist claims the industry thrives despite inefficacy due to consumer psychology, assuming marketing/anxiety drives sales more than actual benefits."
  },
  {
    id: "lr-16-035",
    sectionType: "logical-reasoning",
    stimulus: "Linguist: Some claim that learning a second language is difficult because it requires rewiring the brain. But children who grow up bilingual do so effortlessly, suggesting the brain naturally accommodates multiple languages. The difficulty adults experience may stem from reduced neural plasticity or interference from established language patterns, not fundamental incapacity.",
    questionStem: "The linguist's argument serves primarily to",
    answerChoices: [
      { letter: "A", text: "prove that adults can learn languages as easily as children" },
      { letter: "B", text: "challenge an explanation for why adult language learning is difficult" },
      { letter: "C", text: "argue that bilingualism is always beneficial" },
      { letter: "D", text: "demonstrate that brain rewiring is impossible" },
      { letter: "E", text: "explain why children learn languages faster than adults" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The linguist uses bilingual children as evidence against the 'brain rewiring' explanation, offering alternative explanations for adult difficulty."
  },
  {
    id: "lr-16-036",
    sectionType: "logical-reasoning",
    stimulus: "Journalist: Social media companies say they are neutral platforms that simply host user content. But their algorithms actively shape what users see, promoting some content and suppressing other content. Entities that shape discourse through algorithmic curation are not neutral platforms but active participants in public debate.",
    questionStem: "Which one of the following, if true, most weakens the journalist's argument?",
    answerChoices: [
      { letter: "A", text: "Social media companies do not employ human content moderators" },
      { letter: "B", text: "The algorithms primarily reflect users' own engagement patterns rather than company editorial decisions" },
      { letter: "C", text: "Other media companies also make editorial decisions" },
      { letter: "D", text: "Social media users can adjust their feed settings" },
      { letter: "E", text: "Some social media platforms have larger user bases than others" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If algorithms reflect user behavior rather than company decisions, the companies might still be considered platforms that amplify user preferences rather than editorializing."
  },
  {
    id: "lr-16-037",
    sectionType: "logical-reasoning",
    stimulus: "Political philosopher: Democracy assumes that citizens can make informed judgments about policy. But most citizens lack expertise in economics, science, and international relations—the domains where major policy decisions arise. Either we need mechanisms to ensure better-informed voting, or we should accept that democratic decisions will often be poorly informed.",
    questionStem: "The political philosopher's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Democracy should be abandoned in favor of expert rule" },
      { letter: "B", text: "Citizens should not be allowed to vote on technical matters" },
      { letter: "C", text: "Democratic theory faces a challenge regarding voter competence" },
      { letter: "D", text: "All policy decisions require specialized expertise" },
      { letter: "E", text: "Expert opinions are always more reliable than citizen judgments" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The philosopher identifies a tension between democratic assumptions and citizen expertise limitations, highlighting a theoretical challenge rather than resolving it."
  },
  {
    id: "lr-16-038",
    sectionType: "logical-reasoning",
    stimulus: "Architect: Modernist buildings from the mid-twentieth century are increasingly being demolished for new construction. Preservationists argue these buildings have historical and aesthetic value. But modernist structures were designed to be functional rather than permanent; their architects embraced the idea of replacing buildings as needs changed.",
    questionStem: "The architect's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It appeals to the original designers' intentions as a guide to current decisions" },
      { letter: "B", text: "It assumes all modernist buildings have similar characteristics" },
      { letter: "C", text: "It ignores the economic benefits of demolition" },
      { letter: "D", text: "It does not define what constitutes historical value" },
      { letter: "E", text: "It fails to consider environmental impacts of demolition" }
    ],
    correctAnswer: "A",
    difficulty: "hard",
    type: "flaw",
    explanation: "The architect uses original intent to justify demolition, but buildings may acquire value their designers didn't anticipate."
  },
  {
    id: "lr-16-039",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Basic income programs provide cash transfers to all citizens regardless of employment status. Skeptics argue these programs would reduce the incentive to work. But pilot programs in several locations found minimal effects on employment. Most participants continued working while using the income supplement for stability and opportunity.",
    questionStem: "Which one of the following, if true, most weakens the economist's use of the pilot program evidence?",
    answerChoices: [
      { letter: "A", text: "Pilot participants knew the program was temporary and would need to return to relying on employment" },
      { letter: "B", text: "Some pilot participants were already retired" },
      { letter: "C", text: "Basic income has been discussed for decades" },
      { letter: "D", text: "The pilot programs varied in payment amounts" },
      { letter: "E", text: "Some economists remain skeptical of basic income" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If participants worked because they knew the pilot was temporary, permanent programs might produce different employment effects."
  },
  {
    id: "lr-16-040",
    sectionType: "logical-reasoning",
    stimulus: "Biologist: The endangered status of many large predators raises ethical questions about their conservation. Predators kill prey, sometimes causing suffering. If we prevent predator extinction, we are ensuring that predation continues. Some argue that conservation thus perpetuates harm. But ecosystems with predators are healthier overall, with more biodiversity and stability.",
    questionStem: "The biologist's response to the ethical objection relies on which one of the following?",
    answerChoices: [
      { letter: "A", text: "The claim that predators do not actually cause suffering" },
      { letter: "B", text: "The view that ecosystem health outweighs individual animal welfare" },
      { letter: "C", text: "The assumption that all predators are endangered" },
      { letter: "D", text: "The argument that humans should not interfere with nature" },
      { letter: "E", text: "The belief that biodiversity has no ethical significance" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The biologist justifies predator conservation by citing ecosystem benefits, implying these outweigh the harm of individual predation events."
  },
  {
    id: "lr-16-041",
    sectionType: "logical-reasoning",
    stimulus: "Music historian: Jazz has been called America's classical music. Like European classical music, it has sophisticated harmony, complex structures, and a tradition of virtuoso performance. But jazz emerged from African American communities and carries cultural meanings distinct from European traditions. The classical music comparison illuminates some aspects while obscuring others.",
    questionStem: "The music historian's conclusion is best expressed as",
    answerChoices: [
      { letter: "A", text: "jazz is superior to European classical music" },
      { letter: "B", text: "jazz should not be compared to any other musical tradition" },
      { letter: "C", text: "the classical music analogy for jazz is both useful and limited" },
      { letter: "D", text: "European classical music has more sophisticated harmony than jazz" },
      { letter: "E", text: "jazz is essentially a form of classical music" }
    ],
    correctAnswer: "C",
    difficulty: "easy",
    type: "main-conclusion",
    explanation: "The historian notes both illuminating and obscuring aspects of the comparison—acknowledging its partial usefulness."
  },
  {
    id: "lr-16-042",
    sectionType: "logical-reasoning",
    stimulus: "Philosopher: Thought experiments are used throughout philosophy to test intuitions about hypothetical cases. Some argue these intuitions are unreliable because they vary across individuals and cultures. But variation doesn't imply unreliability—people also vary in perceptual judgments, yet we don't dismiss perception as useless.",
    questionStem: "The philosopher responds to the criticism by",
    answerChoices: [
      { letter: "A", text: "proving that philosophical intuitions never vary" },
      { letter: "B", text: "arguing that variation does not by itself demonstrate unreliability" },
      { letter: "C", text: "showing that perceptual judgments and philosophical intuitions are identical" },
      { letter: "D", text: "demonstrating that cultural differences in intuition can be eliminated" },
      { letter: "E", text: "claiming that philosophical intuitions are more reliable than perception" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The philosopher challenges the inference from variation to unreliability by noting that perception varies yet remains useful."
  },
  {
    id: "lr-16-043",
    sectionType: "logical-reasoning",
    stimulus: "Entrepreneur: Success in business requires both good ideas and effective execution. Some would-be entrepreneurs focus only on protecting their ideas through secrecy and patents, fearing theft. But ideas without execution are worthless, and execution requires sharing ideas with investors, partners, and employees.",
    questionStem: "The entrepreneur's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Patents are never worth pursuing for business ideas" },
      { letter: "B", text: "All business ideas should be shared publicly" },
      { letter: "C", text: "Excessive idea protection may impede the execution necessary for success" },
      { letter: "D", text: "Investors never steal business ideas" },
      { letter: "E", text: "Execution is more important than innovation in business" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The entrepreneur suggests that overemphasis on idea protection conflicts with the sharing needed for execution, potentially undermining success."
  },
  {
    id: "lr-16-044",
    sectionType: "logical-reasoning",
    stimulus: "Every member of the committee who attended the training received a certificate. Rodriguez is a member of the committee but did not receive a certificate. Therefore, Rodriguez did not attend the training.",
    questionStem: "The reasoning in the argument is",
    answerChoices: [
      { letter: "A", text: "flawed, because it assumes Rodriguez wanted to attend the training" },
      { letter: "B", text: "valid, because the conclusion follows necessarily from the premises" },
      { letter: "C", text: "flawed, because committee membership was not required for training attendance" },
      { letter: "D", text: "valid, but only if certificates were distributed to all attendees" },
      { letter: "E", text: "flawed, because certificates might have been withheld for other reasons" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "evaluate",
    explanation: "The argument is valid modus tollens: If training then certificate; no certificate; therefore no training (for committee members)."
  },
  {
    id: "lr-16-045",
    sectionType: "logical-reasoning",
    stimulus: "Urban planner: Some argue that adding bike lanes will increase traffic congestion by reducing car lanes. But bike infrastructure encourages some drivers to cycle instead, removing cars from the road. Studies in several cities show that adding bike lanes either had no effect on car travel times or reduced them.",
    questionStem: "Which one of the following, if true, most strengthens the urban planner's argument?",
    answerChoices: [
      { letter: "A", text: "Bike lane construction temporarily increases congestion" },
      { letter: "B", text: "Most new cyclists are people who previously drove for commutes under three miles" },
      { letter: "C", text: "Some cities have removed bike lanes due to public opposition" },
      { letter: "D", text: "Bike lanes are more expensive to maintain than car lanes" },
      { letter: "E", text: "Professional cyclists prefer training on roads without bike lanes" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If new cyclists previously drove (and for short trips easily replaced by cycling), this explains how bike lanes remove cars and reduce congestion."
  },
  {
    id: "lr-16-046",
    sectionType: "logical-reasoning",
    stimulus: "Medical ethicist: Clinical trials require informed consent, meaning participants must understand the risks and potential benefits of experimental treatments. But truly informed consent may be impossible when treatments are experimental—by definition, their risks and benefits are not yet known.",
    questionStem: "The medical ethicist's observation most strongly suggests which one of the following?",
    answerChoices: [
      { letter: "A", text: "Clinical trials should be discontinued" },
      { letter: "B", text: "Full informed consent is an ideal that clinical trials cannot perfectly achieve" },
      { letter: "C", text: "Participants in clinical trials are deceived about risks" },
      { letter: "D", text: "Experimental treatments are always more dangerous than established treatments" },
      { letter: "E", text: "Medical ethics requirements are impossible to satisfy" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The ethicist notes a fundamental tension: full information requires knowledge that experiments are designed to produce, suggesting perfect consent is unattainable."
  },
  {
    id: "lr-16-047",
    sectionType: "logical-reasoning",
    stimulus: "Anthropologist: Gift-giving rituals in many cultures serve social rather than economic functions. The value of gifts lies not in their utility but in the relationships they create and maintain. When we evaluate gifts by their economic value, we misunderstand their purpose and may damage the relationships they are meant to nurture.",
    questionStem: "The anthropologist's argument most strongly supports which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Expensive gifts are always inappropriate" },
      { letter: "B", text: "Gift-giving should be abolished in favor of cash transfers" },
      { letter: "C", text: "The social context of gift-giving should inform how we evaluate gifts" },
      { letter: "D", text: "All cultures have identical gift-giving practices" },
      { letter: "E", text: "Economic analysis has no value in understanding human behavior" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The anthropologist argues that understanding gifts' social function should guide evaluation, rather than purely economic criteria."
  },
  {
    id: "lr-16-048",
    sectionType: "logical-reasoning",
    stimulus: "Cognitive scientist: Human memory appears reliable in everyday contexts—we remember names, faces, and events with reasonable accuracy. But controlled studies reveal systematic biases and errors that people are unaware of. Our subjective sense of memory's reliability may not reflect its actual accuracy.",
    questionStem: "The cognitive scientist's argument is best described as",
    answerChoices: [
      { letter: "A", text: "a claim that memory is completely unreliable" },
      { letter: "B", text: "an observation that appearance and reality may diverge regarding memory" },
      { letter: "C", text: "an argument that controlled studies are more accurate than everyday experience" },
      { letter: "D", text: "a rejection of the usefulness of memory research" },
      { letter: "E", text: "a demonstration that systematic biases can be eliminated" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The scientist notes that subjective experience suggests reliability while studies reveal hidden errors—a gap between appearance and reality."
  },
  {
    id: "lr-16-049",
    sectionType: "logical-reasoning",
    stimulus: "Environmentalist: Single-use plastics should be banned because they persist in the environment for centuries. Critics argue that alternatives like paper have their own environmental impacts, including deforestation. But this objection proves too much—by this logic, we could never improve anything because alternatives always have some drawbacks.",
    questionStem: "The environmentalist's response to critics proceeds by",
    answerChoices: [
      { letter: "A", text: "demonstrating that paper has no environmental impact" },
      { letter: "B", text: "arguing that the critics' logic would make any improvement impossible" },
      { letter: "C", text: "proving that plastic persistence is worse than deforestation" },
      { letter: "D", text: "showing that plastic alternatives are available without drawbacks" },
      { letter: "E", text: "questioning the critics' expertise on environmental matters" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The environmentalist argues that requiring perfect alternatives (the critics' implied standard) would prevent any improvement."
  },
  {
    id: "lr-16-050",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Universal healthcare systems are sometimes criticized as reducing innovation in medical technology. But several countries with universal systems have thriving medical technology sectors. Innovation appears to depend more on research funding, intellectual property protection, and workforce training than on the structure of healthcare payment.",
    questionStem: "Which one of the following, if true, most strengthens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Some countries with universal healthcare have weak patent protections" },
      { letter: "B", text: "Medical technology companies in universal healthcare countries produce innovations at rates comparable to or exceeding those in private systems" },
      { letter: "C", text: "Universal healthcare reduces administrative costs" },
      { letter: "D", text: "Some innovative medical technologies were developed with government funding" },
      { letter: "E", text: "Healthcare workers prefer working in universal systems" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence that universal healthcare countries match or exceed private system innovation directly supports the claim that payment structure doesn't determine innovation."
  }
];
