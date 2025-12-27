import { Question } from "../lsat-types";

export const lrQuestionsSet14: Question[] = [
  {
    id: "lr-14-001",
    sectionType: "logical-reasoning",
    stimulus: "A recent study found that employees who take short breaks every hour are more productive over the course of a workday than those who work continuously. Productivity was measured by the number of tasks completed accurately. Interestingly, the total time spent working was the same for both groups.",
    questionStem: "Which one of the following, if true, most helps to explain the finding described above?",
    answerChoices: [
      { letter: "A", text: "Employees who take breaks feel more satisfied with their jobs" },
      { letter: "B", text: "Mental fatigue from continuous work leads to more errors that must be corrected" },
      { letter: "C", text: "Managers prefer employees who take regular breaks" },
      { letter: "D", text: "The study was conducted in a technology company" },
      { letter: "E", text: "Some tasks require more concentration than others" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "resolve-paradox",
    explanation: "Answer B explains how break-takers complete more tasks accurately despite equal work time: continuous workers make more fatigue-induced errors requiring correction."
  },
  {
    id: "lr-14-002",
    sectionType: "logical-reasoning",
    stimulus: "Publisher: E-books have not replaced print books as many predicted. While e-book sales grew rapidly at first, they have plateaued at about 25 percent of the market. Print books offer tactile satisfaction and display value that e-books cannot match. Reports of print's death were premature.",
    questionStem: "The publisher's argument is most vulnerable to criticism on which one of the following grounds?",
    answerChoices: [
      { letter: "A", text: "It fails to consider that e-book technology may improve" },
      { letter: "B", text: "It assumes that current market share will remain stable indefinitely" },
      { letter: "C", text: "It ignores the environmental impact of print publishing" },
      { letter: "D", text: "It does not address the cost difference between print and e-books" },
      { letter: "E", text: "It relies on anecdotal evidence rather than sales data" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "The publisher uses current market share to conclude print will survive, but market share could shift significantly in the future."
  },
  {
    id: "lr-14-003",
    sectionType: "logical-reasoning",
    stimulus: "Columnist: Politicians often claim to represent the will of the people. But in our district, a recent poll showed that 70 percent of residents support expanding public transportation, while our representative voted against the expansion. This vote clearly did not represent the will of the people.",
    questionStem: "The columnist's reasoning is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that polls accurately reflect public opinion" },
      { letter: "B", text: "It fails to consider that the representative might have had reasons to vote against the majority preference" },
      { letter: "C", text: "It ignores that representatives serve multiple terms" },
      { letter: "D", text: "It does not establish that the poll was conducted properly" },
      { letter: "E", text: "It conflates public transportation with other policy issues" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "A representative might legitimately vote against majority opinion for various reasons (constituent interests, expertise, tradeoffs) not considered by the columnist."
  },
  {
    id: "lr-14-004",
    sectionType: "logical-reasoning",
    stimulus: "Nutritionist: Organic foods are not significantly more nutritious than conventionally grown foods. Multiple studies comparing vitamin and mineral content have found no meaningful differences. The main advantages of organic farming are environmental—reduced pesticide use and better soil management—not nutritional.",
    questionStem: "Which one of the following, if true, most weakens the nutritionist's argument?",
    answerChoices: [
      { letter: "A", text: "Organic foods typically cost more than conventional foods" },
      { letter: "B", text: "Some consumers prefer the taste of organic produce" },
      { letter: "C", text: "Pesticide residues on conventional produce may pose health risks independent of nutritional content" },
      { letter: "D", text: "Organic farming practices vary across different farms" },
      { letter: "E", text: "Some conventional farms use sustainable practices" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "weaken",
    explanation: "If pesticide residues pose health risks, organic foods may offer health benefits beyond basic nutritional content, weakening the narrow comparison."
  },
  {
    id: "lr-14-005",
    sectionType: "logical-reasoning",
    stimulus: "Historian: Ancient Rome had a sophisticated system of roads that facilitated trade and military movement. Some historians argue these roads caused Rome's expansion. But the roads were built after territories were conquered, not before. Rome's military success enabled road building, not the reverse.",
    questionStem: "The historian's argument employs which one of the following strategies?",
    answerChoices: [
      { letter: "A", text: "Using statistical evidence to refute a causal claim" },
      { letter: "B", text: "Pointing out that the proposed cause occurred after the alleged effect" },
      { letter: "C", text: "Showing that multiple factors contributed to the outcome" },
      { letter: "D", text: "Appealing to expert opinion to settle a historical dispute" },
      { letter: "E", text: "Demonstrating that the opposing view is based on incomplete evidence" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The historian argues that roads came after conquest, reversing the proposed causal direction by showing the timing was wrong."
  },
  {
    id: "lr-14-006",
    sectionType: "logical-reasoning",
    stimulus: "Every student who passed the final exam attended all review sessions. Some students who attended all review sessions did not pass the final exam. Therefore, attending review sessions is not sufficient for passing the exam.",
    questionStem: "Which one of the following most accurately describes the reasoning in the argument?",
    answerChoices: [
      { letter: "A", text: "It is flawed because it confuses necessary and sufficient conditions" },
      { letter: "B", text: "It validly concludes that a condition is necessary but not sufficient" },
      { letter: "C", text: "It is flawed because it generalizes from exceptional cases" },
      { letter: "D", text: "It validly identifies a condition that is neither necessary nor sufficient" },
      { letter: "E", text: "It is flawed because it ignores other factors that might affect exam performance" }
    ],
    correctAnswer: "B",
    difficulty: "hard",
    type: "evaluate",
    explanation: "The argument correctly identifies that attending sessions is necessary (all who passed attended) but not sufficient (some who attended didn't pass)."
  },
  {
    id: "lr-14-007",
    sectionType: "logical-reasoning",
    stimulus: "Political commentator: Critics claim our tax policy favors the wealthy. But under this policy, the top 10 percent of earners pay 70 percent of all income taxes. How can a policy that collects the vast majority of revenue from wealthy taxpayers be said to favor them?",
    questionStem: "Which one of the following, if true, most effectively counters the commentator's argument?",
    answerChoices: [
      { letter: "A", text: "The top 10 percent of earners receive more than 70 percent of total income" },
      { letter: "B", text: "Tax revenue is used to fund programs that benefit all citizens" },
      { letter: "C", text: "Some wealthy taxpayers use legal deductions to reduce their tax burden" },
      { letter: "D", text: "Other countries have different tax structures" },
      { letter: "E", text: "The definition of 'wealthy' varies among economists" }
    ],
    correctAnswer: "A",
    difficulty: "hard",
    type: "weaken",
    explanation: "If the wealthy earn more than 70% of income but pay only 70% of taxes, they actually pay at a lower effective rate, which could favor them."
  },
  {
    id: "lr-14-008",
    sectionType: "logical-reasoning",
    stimulus: "Researchers found that patients who received a new treatment for migraines reported fewer headaches than those who received a placebo. However, the new treatment group also reported more side effects, including nausea and dizziness. The researchers concluded that the treatment is effective but not without drawbacks.",
    questionStem: "The researchers' conclusion follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "Side effects are less serious than migraines" },
      { letter: "B", text: "The reduction in headaches was not caused by the side effects themselves" },
      { letter: "C", text: "All patients in the study reported their symptoms accurately" },
      { letter: "D", text: "The placebo group experienced no side effects" },
      { letter: "E", text: "Nausea and dizziness are common migraine symptoms" }
    ],
    correctAnswer: "B",
    difficulty: "hard",
    type: "sufficient-assumption",
    explanation: "If the side effects themselves caused the headache reduction (e.g., nausea preventing activities that trigger migraines), the treatment wouldn't be independently effective."
  },
  {
    id: "lr-14-009",
    sectionType: "logical-reasoning",
    stimulus: "Theater director: We should cast the most talented actors regardless of whether they physically resemble the characters as written. Great acting can transcend physical differences, and diverse casting opens opportunities for underrepresented performers. Authenticity in theater comes from emotional truth, not physical matching.",
    questionStem: "Which one of the following principles, if valid, most strongly supports the theater director's position?",
    answerChoices: [
      { letter: "A", text: "Theater should prioritize commercial success" },
      { letter: "B", text: "Artistic decisions should favor performance quality over literal interpretation" },
      { letter: "C", text: "All performers deserve equal opportunities in every production" },
      { letter: "D", text: "Directors should always follow the playwright's original intentions" },
      { letter: "E", text: "Physical appearance is irrelevant to acting ability" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "The director prioritizes acting talent (performance quality) over physical resemblance (literal interpretation), matching principle B."
  },
  {
    id: "lr-14-010",
    sectionType: "logical-reasoning",
    stimulus: "Coffee shop owner: We've noticed that customers who use our mobile ordering app spend 20 percent more per visit than those who order in person. Some staff members think this means the app encourages larger purchases. However, it's more likely that customers who make larger purchases find the app more worthwhile, while those with small orders prefer the personal interaction of in-store ordering.",
    questionStem: "The coffee shop owner's explanation, if true, would suggest that",
    answerChoices: [
      { letter: "A", text: "eliminating the app would increase average purchase size" },
      { letter: "B", text: "encouraging all customers to use the app would increase total revenue" },
      { letter: "C", text: "the app does not cause customers to spend more money" },
      { letter: "D", text: "customers who order in person are less satisfied with their purchases" },
      { letter: "E", text: "the app should only be available to frequent customers" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The owner suggests causation runs the other way: spending patterns determine app use, not vice versa, meaning the app doesn't cause higher spending."
  },
  {
    id: "lr-14-011",
    sectionType: "logical-reasoning",
    stimulus: "Physician: Patients often request tests that are unlikely to reveal useful information given their symptoms. Ordering these tests wastes resources and can lead to false positives that cause unnecessary anxiety. However, refusing a patient's request can damage the doctor-patient relationship and may expose the physician to liability if a rare condition is later discovered.",
    questionStem: "The physician's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Physicians should always order tests that patients request" },
      { letter: "B", text: "The decision whether to order a requested test involves competing considerations" },
      { letter: "C", text: "Patients cannot accurately assess their own medical needs" },
      { letter: "D", text: "False positive results are more harmful than unnecessary testing" },
      { letter: "E", text: "Medical liability laws should be reformed" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The physician describes competing factors: resource waste and false positives versus relationship damage and liability—a classic competing considerations scenario."
  },
  {
    id: "lr-14-012",
    sectionType: "logical-reasoning",
    stimulus: "All of the company's senior managers completed the leadership program. Rodriguez completed the leadership program but is not a senior manager. Therefore, completing the leadership program is not sufficient for becoming a senior manager.",
    questionStem: "The pattern of reasoning in the argument above is most closely paralleled in which one of the following?",
    answerChoices: [
      { letter: "A", text: "All championship teams have talented players. The Tigers have talented players but are not championship teams. Therefore, having talented players is not sufficient for becoming champions." },
      { letter: "B", text: "All fish live in water. Whales live in water but are not fish. Therefore, living in water is not sufficient for being a fish." },
      { letter: "C", text: "Some novels are bestsellers. This book is a bestseller. Therefore, this book might be a novel." },
      { letter: "D", text: "No reptiles are warm-blooded. Snakes are reptiles. Therefore, snakes are not warm-blooded." },
      { letter: "E", text: "All doctors have medical degrees. All surgeons are doctors. Therefore, all surgeons have medical degrees." }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "parallel-reasoning",
    explanation: "Both arguments show that a condition necessary for group membership (all X have property P) is not sufficient (Y has P but is not X)."
  },
  {
    id: "lr-14-013",
    sectionType: "logical-reasoning",
    stimulus: "Archaeologist: Cave paintings from 30,000 years ago demonstrate sophisticated artistic techniques, including perspective and shading. This challenges the view that early humans lacked complex cognitive abilities. The artists who created these works had mental capabilities comparable to modern humans.",
    questionStem: "Which one of the following is an assumption required by the archaeologist's argument?",
    answerChoices: [
      { letter: "A", text: "Artistic ability is a reliable indicator of overall cognitive capacity" },
      { letter: "B", text: "Cave paintings are the oldest known form of human art" },
      { letter: "C", text: "Modern artists could not replicate the techniques used in cave paintings" },
      { letter: "D", text: "Early humans had language capabilities similar to modern humans" },
      { letter: "E", text: "The cave paintings were created by multiple artists" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument moves from artistic sophistication to cognitive sophistication, requiring the assumption that artistic ability indicates cognitive capacity."
  },
  {
    id: "lr-14-014",
    sectionType: "logical-reasoning",
    stimulus: "Film critic: The sequel earned twice as much at the box office as the original film. Some claim this proves the sequel is a better film. However, the sequel benefited from the marketing built by the original's success, while the original had to attract audiences on its own merits. Box office performance is not a reliable measure of artistic quality.",
    questionStem: "The film critic's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "providing an alternative explanation for the evidence cited by opponents" },
      { letter: "B", text: "questioning the qualifications of those who made the claim" },
      { letter: "C", text: "demonstrating that the original film was actually more profitable" },
      { letter: "D", text: "showing that artistic quality cannot be measured objectively" },
      { letter: "E", text: "arguing that sequels are inherently inferior to original films" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The critic offers an alternative explanation (marketing advantage) for the sequel's higher earnings, undermining the quality inference."
  },
  {
    id: "lr-14-015",
    sectionType: "logical-reasoning",
    stimulus: "University administrator: Online courses allow us to serve more students without building additional classrooms. Critics argue that online learning is less effective than in-person instruction. But our data shows that students in online sections perform just as well on exams as those in traditional sections of the same courses.",
    questionStem: "Which one of the following, if true, most weakens the administrator's response to the critics?",
    answerChoices: [
      { letter: "A", text: "Students in online courses can review lecture recordings multiple times" },
      { letter: "B", text: "Students who choose online sections tend to be more self-motivated than average" },
      { letter: "C", text: "Some subjects are more suitable for online instruction than others" },
      { letter: "D", text: "Online courses require significant technology investment" },
      { letter: "E", text: "The same professors teach both online and in-person sections" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If online students are self-selected for motivation, comparable exam performance may reflect student characteristics rather than equivalent instruction quality."
  },
  {
    id: "lr-14-016",
    sectionType: "logical-reasoning",
    stimulus: "Ecologist: The introduction of wolves to the national park has been criticized for reducing the elk population. However, wolves have also caused elk to avoid certain areas, allowing vegetation to recover in those places. This has benefited songbirds, fish, and other species. The ecosystem as a whole is healthier.",
    questionStem: "The ecologist's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that ecosystem health can be measured objectively" },
      { letter: "B", text: "It does not establish that the benefits to other species outweigh the harm to elk" },
      { letter: "C", text: "It ignores the possibility that elk populations might recover naturally" },
      { letter: "D", text: "It relies on a small number of examples to make a broad claim" },
      { letter: "E", text: "It fails to consider the wolves' impact on other prey animals" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "The ecologist claims the ecosystem is healthier but doesn't establish that benefits to some species outweigh costs to elk, which would be needed to justify the overall claim."
  },
  {
    id: "lr-14-017",
    sectionType: "logical-reasoning",
    stimulus: "Principle: Public officials should not accept gifts from private parties that could create the appearance of impropriety, even if the gifts do not actually influence official decisions.\n\nApplication: Mayor Thompson should not have accepted free concert tickets from the construction company bidding for the city contract.",
    questionStem: "Which one of the following, if true, would most weaken the application of the principle to Mayor Thompson's case?",
    answerChoices: [
      { letter: "A", text: "Mayor Thompson has accepted similar gifts from other companies in the past" },
      { letter: "B", text: "The construction company has an excellent reputation for quality work" },
      { letter: "C", text: "The concert tickets were offered as part of a charity fundraiser open to all city officials" },
      { letter: "D", text: "Mayor Thompson ultimately voted against awarding the contract to the company" },
      { letter: "E", text: "Other members of the city council declined similar offers" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "principle-apply",
    explanation: "If the tickets were part of a public charity event available to all officials, they would not create the same appearance of impropriety as a private gift."
  },
  {
    id: "lr-14-018",
    sectionType: "logical-reasoning",
    stimulus: "Detective: Three people had access to the safe: the manager, the accountant, and the security guard. The accountant was on vacation during the theft. The security guard was on duty at the front entrance, monitored by cameras showing no absence. Therefore, the manager committed the theft.",
    questionStem: "The detective's reasoning is most vulnerable to criticism on which one of the following grounds?",
    answerChoices: [
      { letter: "A", text: "It does not consider that someone other than the three might have accessed the safe" },
      { letter: "B", text: "It assumes the accountant's vacation claim was truthful" },
      { letter: "C", text: "It relies on camera footage that could have been doctored" },
      { letter: "D", text: "It does not establish a motive for the manager" },
      { letter: "E", text: "It fails to consider that no theft may have occurred" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "flaw",
    explanation: "The detective assumes only three people had access, but someone else might have obtained access illegally or through unknown means."
  },
  {
    id: "lr-14-019",
    sectionType: "logical-reasoning",
    stimulus: "Marine biologist: Ocean acidification threatens coral reefs by making it harder for corals to build their calcium carbonate skeletons. Some corals have shown ability to adapt to more acidic conditions in laboratory settings. This suggests that coral reefs may be more resilient to acidification than previously feared.",
    questionStem: "Which one of the following, if true, most weakens the marine biologist's optimistic suggestion?",
    answerChoices: [
      { letter: "A", text: "Different coral species show varying levels of adaptability" },
      { letter: "B", text: "Laboratory conditions cannot replicate the complexity of ocean ecosystems where corals must also compete for space and resist disease" },
      { letter: "C", text: "Ocean acidification is occurring alongside rising water temperatures" },
      { letter: "D", text: "Some coral reefs are located in naturally more acidic waters" },
      { letter: "E", text: "Laboratory studies have been conducted on corals from various ocean regions" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If laboratory conditions omit important real-world stressors, laboratory adaptation may not translate to actual ocean resilience."
  },
  {
    id: "lr-14-020",
    sectionType: "logical-reasoning",
    stimulus: "Educator: Some argue that teaching cursive handwriting is obsolete in the digital age. But cursive engages fine motor skills and brain regions differently than typing or print writing. Studies suggest that taking notes by hand, particularly in cursive, improves retention and understanding compared to typing.",
    questionStem: "The educator's argument would be most strengthened by which one of the following?",
    answerChoices: [
      { letter: "A", text: "Many historical documents are written in cursive and would become inaccessible if cursive is not taught" },
      { letter: "B", text: "The cognitive benefits observed in studies of cursive persist into adulthood" },
      { letter: "C", text: "Some schools have already eliminated cursive from their curricula" },
      { letter: "D", text: "Typing speed improves with practice throughout one's life" },
      { letter: "E", text: "Children generally prefer learning cursive to learning print handwriting" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If cognitive benefits persist into adulthood, cursive instruction has lasting value beyond childhood, strengthening the case for teaching it."
  },
  {
    id: "lr-14-021",
    sectionType: "logical-reasoning",
    stimulus: "Every successful startup has a clear value proposition. TechVenture has a clear value proposition. Therefore, TechVenture will be a successful startup.",
    questionStem: "The reasoning in the argument is flawed because",
    answerChoices: [
      { letter: "A", text: "it assumes that only startups can have clear value propositions" },
      { letter: "B", text: "it treats a necessary condition for success as if it were sufficient" },
      { letter: "C", text: "it fails to define what constitutes a clear value proposition" },
      { letter: "D", text: "it generalizes from too small a sample of startups" },
      { letter: "E", text: "it ignores the possibility that success has multiple definitions" }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "flaw",
    explanation: "Having a clear value proposition is stated as necessary for success (all successful startups have one), but the argument treats it as sufficient for guaranteeing success."
  },
  {
    id: "lr-14-022",
    sectionType: "logical-reasoning",
    stimulus: "City planner: The proposed highway expansion will reduce commute times. However, induced demand typically causes expanded highways to fill to capacity within a few years, returning congestion to previous levels. Therefore, highway expansion is not a long-term solution to traffic problems.",
    questionStem: "Which one of the following, if true, would most weaken the city planner's argument?",
    answerChoices: [
      { letter: "A", text: "Some cities have successfully reduced traffic through improved public transportation" },
      { letter: "B", text: "The proposed expansion includes managed lanes with tolls that adjust based on traffic flow" },
      { letter: "C", text: "Highway maintenance costs have increased significantly in recent years" },
      { letter: "D", text: "Many commuters have no alternative to driving on the highway" },
      { letter: "E", text: "The highway was originally designed for a smaller population" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "Dynamic tolling can manage demand and prevent the highway from filling to capacity, potentially avoiding the induced demand problem."
  },
  {
    id: "lr-14-023",
    sectionType: "logical-reasoning",
    stimulus: "Art collector: Critics dismiss my collection as superficial because it includes popular contemporary artists rather than established old masters. But art's value lies in its emotional impact and cultural relevance, not merely its age or conventional prestige. Contemporary works that resonate with current audiences are as worthy of collection as historical masterpieces.",
    questionStem: "Which one of the following best describes the logical structure of the art collector's argument?",
    answerChoices: [
      { letter: "A", text: "It rejects a criterion used to criticize the collection and substitutes a different criterion" },
      { letter: "B", text: "It demonstrates that the critics lack expertise in art valuation" },
      { letter: "C", text: "It proves that contemporary art will appreciate in monetary value" },
      { letter: "D", text: "It shows that the critics' tastes are inconsistent" },
      { letter: "E", text: "It argues that popularity is the sole measure of artistic worth" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The collector rejects age/prestige as the criterion and substitutes emotional impact/cultural relevance as the proper measure of art's value."
  },
  {
    id: "lr-14-024",
    sectionType: "logical-reasoning",
    stimulus: "Psychologist: Children who grow up with pets show higher levels of empathy in adolescence than those who do not. Some researchers have concluded that pet ownership develops empathy. However, families who choose to have pets may already emphasize nurturing and emotional connection, qualities that independently foster empathy in children.",
    questionStem: "The psychologist's argument serves primarily to",
    answerChoices: [
      { letter: "A", text: "prove that pet ownership has no effect on empathy development" },
      { letter: "B", text: "suggest an alternative explanation for the observed correlation" },
      { letter: "C", text: "recommend that all families acquire pets" },
      { letter: "D", text: "question the accuracy of the empathy measurements used in research" },
      { letter: "E", text: "argue that family characteristics are the only factor in empathy development" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The psychologist offers family characteristics as an alternative explanation for the pet-empathy correlation, not denying it but questioning the causal direction."
  },
  {
    id: "lr-14-025",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Rent control policies are intended to keep housing affordable, but they often have unintended consequences. Landlords reduce maintenance when they cannot raise rents, leading to housing deterioration. Developers build fewer rental units when returns are limited, reducing supply. Over time, rent control can make the housing shortage worse.",
    questionStem: "Which one of the following, if true, most seriously undermines the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Some cities with rent control have successfully maintained housing quality through building code enforcement" },
      { letter: "B", text: "Rent control is popular among tenants in many cities" },
      { letter: "C", text: "Housing markets are influenced by many factors besides rent regulation" },
      { letter: "D", text: "Some landlords support rent control because it provides predictable income" },
      { letter: "E", text: "New construction is often exempt from rent control laws" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If building code enforcement can maintain quality despite rent control, the maintenance deterioration consequence is not inevitable."
  },
  {
    id: "lr-14-026",
    sectionType: "logical-reasoning",
    stimulus: "Some members of the committee support the proposal. All members who support the proposal attended the preliminary briefing. Therefore, some members who attended the preliminary briefing support the proposal.",
    questionStem: "The reasoning in the argument is",
    answerChoices: [
      { letter: "A", text: "flawed, because it confuses correlation with causation" },
      { letter: "B", text: "valid, because the conclusion necessarily follows from the premises" },
      { letter: "C", text: "flawed, because it assumes all who attended the briefing support the proposal" },
      { letter: "D", text: "valid, but only if the briefing was mandatory for supporters" },
      { letter: "E", text: "flawed, because some members might support the proposal without attending the briefing" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "evaluate",
    explanation: "The argument is valid: if some members support the proposal and all supporters attended the briefing, then some who attended support the proposal."
  },
  {
    id: "lr-14-027",
    sectionType: "logical-reasoning",
    stimulus: "Restaurant reviewer: This establishment serves what it calls authentic regional cuisine, but several dishes have been modified to suit local tastes. The chef adds sugar to traditionally savory dishes and reduces spice levels. An authentically regional restaurant would not make such accommodations.",
    questionStem: "The restaurant reviewer's argument depends on the assumption that",
    answerChoices: [
      { letter: "A", text: "local diners are incapable of appreciating authentic regional cuisine" },
      { letter: "B", text: "authentic cuisine cannot involve any modifications from original recipes" },
      { letter: "C", text: "the reviewer is an expert in the regional cuisine being discussed" },
      { letter: "D", text: "restaurants have an obligation to educate diners about authentic cuisine" },
      { letter: "E", text: "the modifications meaningfully compromise the dishes' authenticity" }
    ],
    correctAnswer: "E",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument requires that the specific modifications (sugar, reduced spice) actually compromise authenticity; otherwise, they might be acceptable adjustments."
  },
  {
    id: "lr-14-028",
    sectionType: "logical-reasoning",
    stimulus: "Legal scholar: The law distinguishes between intentional wrongdoing and negligence, with harsher penalties for intentional acts. This distinction makes sense because intentional wrongdoers are more culpable and more likely to reoffend without strong deterrence. However, the harm suffered by victims is often identical regardless of the wrongdoer's mental state.",
    questionStem: "Which one of the following conclusions is best supported by the legal scholar's statements?",
    answerChoices: [
      { letter: "A", text: "The law should not distinguish between intentional and negligent wrongdoing" },
      { letter: "B", text: "Victim compensation should be the same regardless of whether wrongdoing was intentional" },
      { letter: "C", text: "The penalty distinction is based on wrongdoer characteristics rather than harm caused" },
      { letter: "D", text: "Negligent wrongdoers should receive harsher penalties than they currently do" },
      { letter: "E", text: "Intentional wrongdoing causes more harm than negligence on average" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The scholar notes penalties differ based on culpability and deterrence needs (wrongdoer characteristics) while harm to victims is often identical."
  },
  {
    id: "lr-14-029",
    sectionType: "logical-reasoning",
    stimulus: "Environmentalist: Plastic bag bans force consumers to use reusable bags or paper alternatives. Critics argue that reusable bags have high carbon footprints due to manufacturing and that paper bags require more energy to produce than plastic. But these critiques ignore the primary purpose of plastic bans: reducing plastic waste that harms marine ecosystems.",
    questionStem: "The environmentalist responds to the critics by",
    answerChoices: [
      { letter: "A", text: "denying that reusable bags have higher carbon footprints" },
      { letter: "B", text: "arguing that marine ecosystems are more important than carbon emissions" },
      { letter: "C", text: "pointing out that the critics are addressing a different concern than the policy targets" },
      { letter: "D", text: "demonstrating that paper bags are superior to plastic in all respects" },
      { letter: "E", text: "claiming that manufacturing impacts are negligible" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The environmentalist notes that critics focus on carbon footprint while the policy targets marine plastic pollution—different concerns."
  },
  {
    id: "lr-14-030",
    sectionType: "logical-reasoning",
    stimulus: "Librarian: Physical books are superior to e-books for children's learning. Studies show that children retain more information from physical books and develop better spatial awareness from handling pages. Parents who rely primarily on tablets for their children's reading may be inadvertently hindering cognitive development.",
    questionStem: "Which one of the following, if true, most seriously weakens the librarian's argument?",
    answerChoices: [
      { letter: "A", text: "E-books are more affordable than physical books for many families" },
      { letter: "B", text: "The studies cited compared children who read frequently to those who read rarely, not physical books to e-books directly" },
      { letter: "C", text: "Some e-book platforms include interactive features that engage children" },
      { letter: "D", text: "Libraries offer free access to physical books" },
      { letter: "E", text: "Children who read e-books can read more books due to instant availability" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "weaken",
    explanation: "If the studies compared frequent readers to rare readers rather than medium type, they don't support claims about physical vs. digital formats."
  },
  {
    id: "lr-14-031",
    sectionType: "logical-reasoning",
    stimulus: "Botanist: Invasive plant species often outcompete native species because they lack natural predators in their new environment. Introducing biological control agents—insects or pathogens from the invasive plant's native habitat—can help restore balance. However, such introductions must be carefully studied to ensure the control agents do not themselves become problematic.",
    questionStem: "The botanist's statements most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Biological control is always preferable to chemical control of invasive species" },
      { letter: "B", text: "Biological control of invasive species carries potential risks that must be evaluated" },
      { letter: "C", text: "Native species can never compete successfully against invasive species" },
      { letter: "D", text: "All invasive species should be controlled through biological agents" },
      { letter: "E", text: "Control agents from an invasive plant's native habitat never become problematic" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The botanist notes that biological control introductions must be carefully studied to avoid control agents becoming problematic—acknowledging risks."
  },
  {
    id: "lr-14-032",
    sectionType: "logical-reasoning",
    stimulus: "Music historian: Jazz evolved from the blending of African rhythmic traditions with European harmonic structures. Some purists argue that jazz should maintain its original forms. But jazz has always been characterized by innovation and fusion with other genres. The very spirit of jazz requires continuous evolution.",
    questionStem: "Which one of the following, if true, most strengthens the music historian's argument against the purists?",
    answerChoices: [
      { letter: "A", text: "Many jazz musicians have formal training in European classical music" },
      { letter: "B", text: "The earliest jazz musicians themselves modified and experimented with existing musical forms" },
      { letter: "C", text: "Jazz audiences have diverse preferences for different styles" },
      { letter: "D", text: "Other musical genres have also evolved over time" },
      { letter: "E", text: "Some contemporary jazz musicians prefer traditional styles" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If early jazz musicians experimented and modified forms, innovation was present from the beginning, making it fundamental to jazz's nature."
  },
  {
    id: "lr-14-033",
    sectionType: "logical-reasoning",
    stimulus: "Meteorologist: Long-range weather forecasts beyond two weeks are notoriously unreliable because small variations in current conditions can produce dramatically different outcomes. This is known as sensitive dependence on initial conditions. Climate projections decades into the future, however, can be reliable because they predict average conditions rather than specific weather events.",
    questionStem: "The meteorologist's statements, if true, most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Weather forecasts and climate projections use entirely different scientific methods" },
      { letter: "B", text: "The reliability of a forecast depends in part on whether it predicts specific events or general trends" },
      { letter: "C", text: "Climate scientists should not attempt to predict average conditions" },
      { letter: "D", text: "Weather forecasts will eventually become as reliable as climate projections" },
      { letter: "E", text: "Sensitive dependence on initial conditions affects all types of scientific predictions" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The contrast between unreliable specific weather forecasts and reliable average climate projections shows prediction type affects reliability."
  },
  {
    id: "lr-14-034",
    sectionType: "logical-reasoning",
    stimulus: "Management consultant: Companies should promote employees based on performance in their current roles. Critics argue that excelling in one role does not predict success in a different role with different responsibilities. While this concern is valid, the alternative—promoting based on predicted future performance—is even more speculative and prone to bias.",
    questionStem: "The management consultant's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "demonstrating that the criticized approach has no drawbacks" },
      { letter: "B", text: "acknowledging a weakness in one approach while arguing the alternative is worse" },
      { letter: "C", text: "showing that critics misunderstand how performance-based promotion works" },
      { letter: "D", text: "providing evidence that performance predicts future success" },
      { letter: "E", text: "appealing to the authority of management theory" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The consultant concedes the critics' point is valid but argues the alternative approach is even more problematic—a 'lesser of two evils' argument."
  },
  {
    id: "lr-14-035",
    sectionType: "logical-reasoning",
    stimulus: "Philosopher: Some argue that morality requires religious foundation—that without belief in divine authority, there is no basis for moral obligation. But moral intuitions are remarkably consistent across cultures with different religious traditions. This suggests that morality has sources independent of any particular religion.",
    questionStem: "Which one of the following, if true, most weakens the philosopher's argument?",
    answerChoices: [
      { letter: "A", text: "Some moral philosophers are religious while others are not" },
      { letter: "B", text: "The consistent moral intuitions across cultures might stem from a shared religious heritage in human history" },
      { letter: "C", text: "Different cultures have different religious practices" },
      { letter: "D", text: "Moral intuitions are not always reliable guides to moral truth" },
      { letter: "E", text: "Some individuals lack strong moral intuitions" }
    ],
    correctAnswer: "B",
    difficulty: "hard",
    type: "weaken",
    explanation: "If consistent moral intuitions derive from shared religious heritage, they might still depend on religious foundation despite appearing cross-cultural."
  },
  {
    id: "lr-14-036",
    sectionType: "logical-reasoning",
    stimulus: "Political analyst: The senator claims to support environmental protection but voted against the Clean Energy Bill. Some defenders note the bill included provisions unrelated to the environment that the senator opposed. However, the senator did not propose amendments to remove those provisions or support alternative clean energy legislation.",
    questionStem: "The political analyst's argument is designed to show that",
    answerChoices: [
      { letter: "A", text: "the senator was justified in voting against the Clean Energy Bill" },
      { letter: "B", text: "the defense of the senator's vote is inadequate" },
      { letter: "C", text: "clean energy legislation should not include unrelated provisions" },
      { letter: "D", text: "senators should never oppose legislation in their stated priority areas" },
      { letter: "E", text: "the senator's opponents have political motivations" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The analyst shows that the defense (objection to unrelated provisions) is undercut by the senator's failure to seek alternatives or amendments."
  },
  {
    id: "lr-14-037",
    sectionType: "logical-reasoning",
    stimulus: "Psychologist: People with high emotional intelligence are better at managing workplace relationships. Training programs claim to increase emotional intelligence. If these claims are accurate, workplace relationship training should improve employee performance metrics that depend on collaboration.",
    questionStem: "Which one of the following is an assumption on which the psychologist's reasoning depends?",
    answerChoices: [
      { letter: "A", text: "Emotional intelligence is the only factor affecting workplace relationships" },
      { letter: "B", text: "All performance metrics depend on collaboration" },
      { letter: "C", text: "Improved workplace relationships lead to better performance on collaboration-dependent metrics" },
      { letter: "D", text: "Training programs are the only way to increase emotional intelligence" },
      { letter: "E", text: "People with high emotional intelligence always perform well at work" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument connects EI training to relationship management to performance, requiring that better relationships improve collaboration metrics."
  },
  {
    id: "lr-14-038",
    sectionType: "logical-reasoning",
    stimulus: "Veterinarian: Many pet owners request grain-free diets for their animals, believing grains cause allergies. But true grain allergies in dogs and cats are rare; proteins like beef and chicken are far more common allergens. Moreover, some grain-free formulas have been linked to heart disease in dogs. Pet owners should consult veterinarians rather than following marketing trends.",
    questionStem: "The veterinarian's argument most strongly supports which one of the following recommendations?",
    answerChoices: [
      { letter: "A", text: "Pet food manufacturers should not sell grain-free diets" },
      { letter: "B", text: "Pet owners should never feed their animals grain-free food" },
      { letter: "C", text: "Dietary decisions for pets should be based on medical evidence rather than popular beliefs" },
      { letter: "D", text: "All pet foods containing beef and chicken should be avoided" },
      { letter: "E", text: "Grain allergies in pets should not be treated" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "inference",
    explanation: "The veterinarian contrasts popular beliefs about grain with actual allergy data, recommending veterinary consultation over marketing trends."
  },
  {
    id: "lr-14-039",
    sectionType: "logical-reasoning",
    stimulus: "Publishing executive: Our company's decision to release books simultaneously in print and e-book formats has been questioned by traditionalists. But withholding digital versions only encourages piracy. By making legitimate e-books available immediately, we capture sales that would otherwise be lost to illegal downloads.",
    questionStem: "The publishing executive's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "All readers prefer e-books to print books" },
      { letter: "B", text: "Some potential purchasers would resort to piracy if legitimate e-books were not available" },
      { letter: "C", text: "E-book sales are more profitable than print sales" },
      { letter: "D", text: "Piracy cannot be stopped through legal enforcement" },
      { letter: "E", text: "Traditionalists are not concerned about piracy" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "necessary-assumption",
    explanation: "The argument that simultaneous release captures sales otherwise lost to piracy requires that some readers would pirate if e-books were unavailable."
  },
  {
    id: "lr-14-040",
    sectionType: "logical-reasoning",
    stimulus: "Agricultural scientist: Monoculture—planting large areas with a single crop—increases vulnerability to pests and diseases. Crop rotation and diversification reduce these risks. However, monoculture remains widespread because it simplifies mechanization and maximizes short-term yield per acre.",
    questionStem: "The agricultural scientist's statements most strongly support which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "All farmers should immediately switch from monoculture to diversified planting" },
      { letter: "B", text: "Short-term productivity considerations may conflict with long-term agricultural sustainability" },
      { letter: "C", text: "Mechanized farming is inherently unsustainable" },
      { letter: "D", text: "Crop rotation completely eliminates pest and disease problems" },
      { letter: "E", text: "Short-term yield is more important than long-term sustainability" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "Monoculture increases risks but remains widespread for short-term benefits, illustrating a conflict between short-term productivity and long-term sustainability."
  },
  {
    id: "lr-14-041",
    sectionType: "logical-reasoning",
    stimulus: "Architect: Buildings designed for energy efficiency often prioritize insulation and sealed construction. While this reduces heating and cooling costs, it can trap indoor air pollutants from materials, cleaning products, and human activities. Efficient buildings require careful ventilation design to maintain indoor air quality.",
    questionStem: "The architect's statements, if true, most strongly support which one of the following?",
    answerChoices: [
      { letter: "A", text: "Energy-efficient buildings are less healthy than traditional buildings" },
      { letter: "B", text: "Energy efficiency and indoor air quality must both be considered in building design" },
      { letter: "C", text: "Ventilation systems are the most important component of modern buildings" },
      { letter: "D", text: "Traditional buildings never have indoor air quality problems" },
      { letter: "E", text: "The benefits of energy efficiency are outweighed by air quality concerns" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "inference",
    explanation: "The architect's point that efficient buildings need ventilation for air quality shows both factors must be considered together in design."
  },
  {
    id: "lr-14-042",
    sectionType: "logical-reasoning",
    stimulus: "Educator: Our school district has implemented a new math curriculum emphasizing conceptual understanding over procedural fluency. Test scores have declined in the first year of implementation. Critics blame the new curriculum, but any major educational change requires adjustment time for teachers and students alike.",
    questionStem: "Which one of the following, if true, most strengthens the educator's response to the critics?",
    answerChoices: [
      { letter: "A", text: "The new curriculum was developed by mathematics education experts" },
      { letter: "B", text: "Other districts implementing the same curriculum saw initial declines followed by improvement" },
      { letter: "C", text: "Parents have expressed mixed reactions to the curriculum change" },
      { letter: "D", text: "The previous curriculum had been in place for over ten years" },
      { letter: "E", text: "Some teachers prefer the new curriculum to the old one" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "Evidence of initial declines followed by improvement elsewhere supports the adjustment-time explanation over blaming the curriculum itself."
  },
  {
    id: "lr-14-043",
    sectionType: "logical-reasoning",
    stimulus: "Theater producer: Ticket prices for Broadway shows have increased faster than inflation for decades. Some argue this makes theater inaccessible to ordinary audiences. Yet attendance figures remain strong, suggesting that audiences are willing to pay current prices. Price increases have not reduced demand.",
    questionStem: "The theater producer's reasoning is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that all potential audience members have equal access to information about ticket prices" },
      { letter: "B", text: "It fails to consider that current attendees may be a different demographic than past attendees" },
      { letter: "C", text: "It ignores the role of tourists in Broadway attendance figures" },
      { letter: "D", text: "It relies on attendance figures that may not be accurate" },
      { letter: "E", text: "It does not address whether the quality of productions has changed" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "flaw",
    explanation: "Strong attendance doesn't disprove accessibility concerns if the audience has shifted from ordinary people to wealthier ones who can afford higher prices."
  },
  {
    id: "lr-14-044",
    sectionType: "logical-reasoning",
    stimulus: "Economist: Progressive taxation, where higher incomes are taxed at higher rates, is sometimes criticized as discouraging work and investment. But countries with progressive tax systems have not shown lower economic growth than those with flat taxes. If progressive taxation significantly deterred productivity, we would expect to see this reflected in growth comparisons.",
    questionStem: "Which one of the following, if true, most weakens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Progressive tax countries may have other policies that stimulate growth, masking any tax-related deterrence" },
      { letter: "B", text: "Some flat-tax countries have low overall tax rates" },
      { letter: "C", text: "Economic growth depends on many factors besides taxation" },
      { letter: "D", text: "Progressive taxation is more common in developed countries" },
      { letter: "E", text: "Tax policy debates are influenced by political ideology" }
    ],
    correctAnswer: "A",
    difficulty: "medium",
    type: "weaken",
    explanation: "If other policies offset tax deterrence in progressive countries, comparable growth rates wouldn't prove progressive taxation has no deterrent effect."
  },
  {
    id: "lr-14-045",
    sectionType: "logical-reasoning",
    stimulus: "Chef: Culinary tradition should be respected, but not worshipped. The great dishes of the past were themselves innovations that violated earlier traditions. A cuisine that cannot evolve is a cuisine that is dying. We honor our culinary ancestors best by continuing their spirit of experimentation.",
    questionStem: "The chef's argument is best described as",
    answerChoices: [
      { letter: "A", text: "an appeal to authority to justify culinary innovation" },
      { letter: "B", text: "a rejection of all culinary traditions" },
      { letter: "C", text: "an argument that innovation is consistent with the tradition it seems to violate" },
      { letter: "D", text: "a claim that modern cuisines are superior to traditional ones" },
      { letter: "E", text: "a prediction that all cuisines will eventually merge" }
    ],
    correctAnswer: "C",
    difficulty: "medium",
    type: "method-of-reasoning",
    explanation: "The chef argues that innovation itself is the tradition—past great dishes were innovations, so innovating continues rather than violates tradition."
  },
  {
    id: "lr-14-046",
    sectionType: "logical-reasoning",
    stimulus: "Sociologist: Some claim that social media has made people more narcissistic. However, studies of narcissism levels over time show no increase since social media became widespread. The apparent narcissism may simply be that social media makes self-promotion visible in ways that previously private behavior was not.",
    questionStem: "The sociologist's argument most directly counters which one of the following claims?",
    answerChoices: [
      { letter: "A", text: "Social media platforms encourage users to share personal information" },
      { letter: "B", text: "Social media use has increased narcissistic behavior in the population" },
      { letter: "C", text: "Self-promotion on social media is sometimes appropriate" },
      { letter: "D", text: "Narcissism is difficult to measure accurately" },
      { letter: "E", text: "People used social media differently in the past than they do now" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "main-conclusion",
    explanation: "The sociologist directly counters the claim that social media increased narcissism by noting steady narcissism levels and an alternative explanation for visibility."
  },
  {
    id: "lr-14-047",
    sectionType: "logical-reasoning",
    stimulus: "Archaeologist: Ancient Roman concrete structures have survived for millennia, while modern concrete often degrades within decades. Analysis shows Roman concrete incorporated volcanic ash that creates a crystalline structure which strengthens over time through reaction with seawater. We could improve modern construction by studying ancient techniques.",
    questionStem: "Which one of the following, if true, most weakens the archaeologist's recommendation?",
    answerChoices: [
      { letter: "A", text: "Not all Roman concrete structures used volcanic ash" },
      { letter: "B", text: "Modern concrete can be reinforced with steel to improve durability" },
      { letter: "C", text: "Volcanic ash suitable for concrete is scarce and expensive to transport" },
      { letter: "D", text: "Roman concrete took years to reach full strength, incompatible with modern construction timelines" },
      { letter: "E", text: "Some Roman concrete structures have crumbled" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "weaken",
    explanation: "If Roman concrete required years to strengthen and modern construction timelines can't accommodate this, the ancient technique may be impractical despite its durability."
  },
  {
    id: "lr-14-048",
    sectionType: "logical-reasoning",
    stimulus: "Journalist: Newspapers once served as community watchdogs, investigating local government and holding officials accountable. As local papers have declined, communities have lost this oversight. Studies show corruption increases in areas where local journalism has disappeared. Supporting local news is supporting democratic accountability.",
    questionStem: "Which one of the following, if true, most strengthens the journalist's argument?",
    answerChoices: [
      { letter: "A", text: "National news outlets sometimes cover local government issues" },
      { letter: "B", text: "The corruption increase occurs specifically after local papers close, not before" },
      { letter: "C", text: "Some local journalists have transitioned to online-only publications" },
      { letter: "D", text: "Local television news has also declined in recent years" },
      { letter: "E", text: "Social media has become a source of community information" }
    ],
    correctAnswer: "B",
    difficulty: "medium",
    type: "strengthen",
    explanation: "If corruption increases specifically after papers close, this supports a causal link between losing local journalism and losing accountability."
  },
  {
    id: "lr-14-049",
    sectionType: "logical-reasoning",
    stimulus: "No experienced pilot would ignore cockpit warnings. Captain Rivera ignored a cockpit warning during the incident. Therefore, Captain Rivera is not an experienced pilot.",
    questionStem: "The pattern of reasoning in the argument above is most closely paralleled by which one of the following?",
    answerChoices: [
      { letter: "A", text: "All qualified applicants submitted portfolios. Martinez submitted a portfolio. Therefore, Martinez is a qualified applicant." },
      { letter: "B", text: "No responsible pet owner would leave a dog in a hot car. Thompson left a dog in a hot car. Therefore, Thompson is not a responsible pet owner." },
      { letter: "C", text: "Some successful entrepreneurs have advanced degrees. Johnson is a successful entrepreneur. Therefore, Johnson might have an advanced degree." },
      { letter: "D", text: "Every great chef uses fresh ingredients. Chen uses fresh ingredients. Therefore, Chen is a great chef." },
      { letter: "E", text: "Most marathon runners train daily. Kim is a marathon runner. Therefore, Kim probably trains daily." }
    ],
    correctAnswer: "B",
    difficulty: "easy",
    type: "parallel-reasoning",
    explanation: "Both arguments use valid modus tollens: No X would do Y; Z did Y; therefore Z is not X."
  },
  {
    id: "lr-14-050",
    sectionType: "logical-reasoning",
    stimulus: "City official: Our public transit system loses money every year and requires substantial taxpayer subsidies. Critics call this a failure. But roads also require taxpayer funding and no one calls the highway system a failure. Public transit should be judged as essential infrastructure, not as a business that must turn a profit.",
    questionStem: "The city official's argument is most vulnerable to which one of the following criticisms?",
    answerChoices: [
      { letter: "A", text: "It assumes that public transit and highways serve identical purposes" },
      { letter: "B", text: "It fails to consider that transit subsidies might be reduced through efficiency improvements" },
      { letter: "C", text: "It does not address whether the current level of transit subsidy is appropriate" },
      { letter: "D", text: "It relies on an analogy that may not hold if highways and transit are funded differently" },
      { letter: "E", text: "It assumes all taxpayers benefit equally from public transit" }
    ],
    correctAnswer: "D",
    difficulty: "medium",
    type: "flaw",
    explanation: "The analogy to highways might not hold if there are relevant differences in how the two are funded or evaluated, making the comparison potentially misleading."
  }
];
