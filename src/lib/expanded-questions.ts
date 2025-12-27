import { Question } from "./lsat-types";

// ============================================
// EXPANDED LOGICAL REASONING QUESTIONS
// High-quality LSAT-style questions covering all question types
// ============================================

export const expandedLRQuestions: Question[] = [
  // FLAW QUESTIONS
  {
    id: "exp-lr-1",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Professor: Students who use laptops to take notes in class perform worse on exams than students who take notes by hand. This proves that laptop use interferes with learning. We should therefore ban laptops from all classrooms.`,
    questionStem: "The reasoning in the professor's argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "fails to consider that students who prefer laptops might differ in other ways from students who prefer handwriting" },
      { letter: "B", text: "assumes without justification that exam performance is the only measure of learning" },
      { letter: "C", text: "ignores the possibility that some subjects are more suited to laptop use than others" },
      { letter: "D", text: "relies on a sample of students that may not be representative of all students" },
      { letter: "E", text: "does not specify what types of exams were used to measure performance" },
    ],
    correctAnswer: "A",
    explanation: "The professor commits a correlation-causation fallacy. Students who choose laptops might already be different (perhaps less motivated, more easily distracted) from those who choose handwriting. The observed difference in exam performance might be due to these pre-existing differences, not the laptop use itself.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-2",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `City Council Member: Our city's new traffic cameras have been effective at reducing accidents. Since they were installed last year, accidents at monitored intersections have decreased by 35 percent. Clearly, we should install cameras at every intersection in the city.`,
    questionStem: "Which one of the following most accurately describes a flaw in the city council member's reasoning?",
    answerChoices: [
      { letter: "A", text: "It assumes that what works in some locations will necessarily work in all locations" },
      { letter: "B", text: "It fails to consider whether the cameras might have been installed at intersections with unusually high accident rates" },
      { letter: "C", text: "It overlooks the possibility that drivers might eventually ignore the cameras" },
      { letter: "D", text: "It does not account for the cost of installing cameras at every intersection" },
      { letter: "E", text: "It presumes that reducing accidents is the only goal of traffic management" },
    ],
    correctAnswer: "B",
    explanation: "This is regression to the mean. Cameras were likely installed at the most dangerous intersections. These locations would naturally see a decrease over time regardless of cameras. The 35% decrease might not replicate at average intersections.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-3",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Everyone I know who exercises regularly reports feeling healthier. My neighbor doesn't exercise at all. Therefore, my neighbor must not feel healthy.`,
    questionStem: "The reasoning in this argument is flawed in that it",
    answerChoices: [
      { letter: "A", text: "generalizes from a sample that is too small" },
      { letter: "B", text: "treats a sufficient condition as if it were a necessary condition" },
      { letter: "C", text: "confuses correlation with causation" },
      { letter: "D", text: "relies on an ambiguous use of the term 'healthy'" },
      { letter: "E", text: "draws a conclusion about an individual based on group statistics" },
    ],
    correctAnswer: "B",
    explanation: "The argument establishes that exercise is sufficient for feeling healthy (if exercise, then feels healthy), but then incorrectly concludes that without exercise, one cannot feel healthy. This treats the sufficient condition as necessary.",
    difficulty: "medium",
  },

  // STRENGTHEN QUESTIONS
  {
    id: "exp-lr-4",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Researchers found that children who learned to play a musical instrument before age seven had larger corpus callosums—the brain structure connecting the two hemispheres—than children who began later or never learned. The researchers concluded that early musical training causes enhanced brain development.`,
    questionStem: "Which one of the following, if true, most strengthens the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "Children with larger corpus callosums before any musical training showed no difference in size increase compared to those with smaller ones" },
      { letter: "B", text: "The type of musical instrument learned had no effect on the size of the corpus callosum" },
      { letter: "C", text: "Children who began musical training before age seven practiced more hours per week than those who started later" },
      { letter: "D", text: "Brain scans of identical twins showed similar corpus callosum sizes regardless of musical training" },
      { letter: "E", text: "Studies in animals have shown that sensory enrichment during early development leads to increased brain connectivity" },
    ],
    correctAnswer: "A",
    explanation: "This rules out reverse causation—the possibility that children with already-larger corpus callosums were more likely to take up music early. If pre-existing size didn't matter, the training itself is more likely the cause.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-5",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Detective: The suspect claims he was at home watching television when the crime occurred at 9 PM. However, I believe he is lying. The crime scene is only five minutes from his home, giving him ample time to commit the crime and return.`,
    questionStem: "Which one of the following, if true, most strengthens the detective's reasoning?",
    answerChoices: [
      { letter: "A", text: "The suspect has a prior criminal record for similar offenses" },
      { letter: "B", text: "When asked about specific details of the program he claimed to be watching, the suspect could not remember any" },
      { letter: "C", text: "No one else was home with the suspect at the time of the crime" },
      { letter: "D", text: "The suspect initially gave a different alibi before settling on the television story" },
      { letter: "E", text: "Forensic evidence places the suspect at the crime scene" },
    ],
    correctAnswer: "B",
    explanation: "If the suspect was actually watching TV, he should remember details. His inability to recall specifics directly supports the claim that he's lying about watching television, strengthening the detective's case.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-6",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Biologist: The recently discovered high-altitude Himalayan jumping spider can survive at elevations above 6,700 meters, where temperatures regularly drop below -40°C and oxygen levels are extremely low. This spider must have evolved special physiological adaptations for extreme cold tolerance.`,
    questionStem: "Which one of the following, if true, most strengthens the biologist's argument?",
    answerChoices: [
      { letter: "A", text: "The spider's closest genetic relatives live at much lower elevations and cannot survive freezing temperatures" },
      { letter: "B", text: "Other arthropods found at high altitudes have been shown to have antifreeze compounds in their blood" },
      { letter: "C", text: "The spider feeds on insects blown up from lower elevations by wind currents" },
      { letter: "D", text: "Laboratory experiments show the spider can survive being frozen for several hours" },
      { letter: "E", text: "The spider is active only during the warmest parts of the day when temperatures briefly rise above freezing" },
    ],
    correctAnswer: "A",
    explanation: "If close relatives cannot survive cold, but this spider can, the difference must be due to evolved adaptations specific to this species. This eliminates the possibility that cold tolerance is just a shared ancestral trait.",
    difficulty: "medium",
  },

  // WEAKEN QUESTIONS
  {
    id: "exp-lr-7",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Marketing Executive: Our company's new advertising campaign has been tremendously successful. Sales have increased 25 percent in the three months since we launched the campaign. This proves that creative advertising is the key to business success.`,
    questionStem: "Which one of the following, if true, most seriously weakens the marketing executive's argument?",
    answerChoices: [
      { letter: "A", text: "The company's main competitor went out of business two months before the campaign launched" },
      { letter: "B", text: "The advertising campaign cost more than originally budgeted" },
      { letter: "C", text: "Some employees felt the campaign did not accurately represent the company's values" },
      { letter: "D", text: "The company had not run a major advertising campaign in over five years" },
      { letter: "E", text: "Consumer surveys show that most customers were unaware of the advertising campaign" },
    ],
    correctAnswer: "A",
    explanation: "If a major competitor went out of business, sales would naturally increase regardless of advertising. This provides an alternative explanation for the 25% increase, undermining the claim that advertising caused the success.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-8",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Historian: Ancient Rome's decline was primarily caused by moral decay among its citizens. Contemporary accounts describe increasing decadence, corruption, and abandonment of traditional values in the final centuries of the empire.`,
    questionStem: "Which one of the following, if true, most weakens the historian's argument?",
    answerChoices: [
      { letter: "A", text: "Similar accounts of moral decay exist from periods when the Roman Empire was at its strongest" },
      { letter: "B", text: "Some modern historians dispute the accuracy of ancient Roman accounts" },
      { letter: "C", text: "The Byzantine Empire, which continued Roman traditions, lasted another thousand years" },
      { letter: "D", text: "Economic factors such as inflation also contributed to Rome's decline" },
      { letter: "E", text: "Roman morality was judged by standards different from those used today" },
    ],
    correctAnswer: "A",
    explanation: "If moral decay was also present during Rome's peak periods, it cannot be the primary cause of decline. The presence of the same condition during both strong and weak periods breaks the causal link.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-9",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Economist: Countries with more economic freedom consistently have higher rates of economic growth. Therefore, reducing government regulation of business is the best way for developing countries to improve their economies.`,
    questionStem: "Which one of the following, if true, most weakens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Some economically free countries have high levels of income inequality" },
      { letter: "B", text: "Countries that achieved rapid development, such as South Korea, initially had significant government involvement in the economy" },
      { letter: "C", text: "Economic freedom is measured differently by different international organizations" },
      { letter: "D", text: "Some regulations protect consumers from unsafe products" },
      { letter: "E", text: "Developing countries often lack the institutions necessary to enforce contracts" },
    ],
    correctAnswer: "B",
    explanation: "South Korea's success with government involvement directly contradicts the claim that reducing regulation is 'the best way' to develop. This shows an alternative successful path exists.",
    difficulty: "medium",
  },

  // NECESSARY ASSUMPTION QUESTIONS
  {
    id: "exp-lr-10",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Art Critic: True artistic genius cannot be taught. Mozart composed his first symphony at age eight, long before he could have received any formal compositional training. This demonstrates that great art comes from innate talent, not education.`,
    questionStem: "The argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Mozart did not receive any informal musical instruction before age eight" },
      { letter: "B", text: "Composing symphonies requires more talent than composing other types of music" },
      { letter: "C", text: "Other child prodigies have similarly demonstrated innate talent without formal training" },
      { letter: "D", text: "It is possible to achieve artistic genius without formal education" },
      { letter: "E", text: "Mozart's early compositions were of exceptional quality" },
    ],
    correctAnswer: "A",
    explanation: "The argument claims Mozart composed before he 'could have received formal training.' But if Mozart received extensive informal instruction from his father (a professional musician) before age eight, the argument fails. The assumption that no informal training occurred is necessary.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-11",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Researcher: Our study found that people who meditate daily have lower cortisol levels than non-meditators. Since cortisol is associated with stress, meditation must be an effective stress-reduction technique.`,
    questionStem: "The argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Cortisol levels are the most accurate measure of stress" },
      { letter: "B", text: "People with naturally low cortisol levels are not more likely to take up meditation" },
      { letter: "C", text: "The meditators in the study practiced the same type of meditation" },
      { letter: "D", text: "Lower cortisol levels are always beneficial for health" },
      { letter: "E", text: "The non-meditators in the study experienced high levels of stress" },
    ],
    correctAnswer: "B",
    explanation: "If people with naturally low cortisol (and thus naturally low stress) are more drawn to meditation, then the correlation doesn't prove meditation reduces stress. The direction of causation could be reversed.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-12",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Voter: I refuse to vote for Senator Williams because she accepted campaign contributions from the pharmaceutical industry. Politicians who accept money from industries they regulate cannot be trusted to represent the public interest.`,
    questionStem: "The voter's argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Senator Williams voted in favor of legislation beneficial to pharmaceutical companies" },
      { letter: "B", text: "Senator Williams has some regulatory authority over the pharmaceutical industry" },
      { letter: "C", text: "No politician can remain unbiased after accepting campaign contributions" },
      { letter: "D", text: "The pharmaceutical industry's interests are contrary to the public interest" },
      { letter: "E", text: "Campaign contributions from corporations should be illegal" },
    ],
    correctAnswer: "B",
    explanation: "The voter's principle is about politicians accepting money from industries they regulate. For this to apply to Senator Williams, she must have regulatory authority over pharmaceuticals. Without this assumption, the principle doesn't apply.",
    difficulty: "medium",
  },

  // SUFFICIENT ASSUMPTION QUESTIONS
  {
    id: "exp-lr-13",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `All mammals are warm-blooded. All warm-blooded animals have high metabolic rates. No reptiles have high metabolic rates. Therefore, no reptiles are mammals.`,
    questionStem: "The conclusion follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "Some warm-blooded animals are not mammals" },
      { letter: "B", text: "All animals with high metabolic rates are warm-blooded" },
      { letter: "C", text: "Some reptiles are cold-blooded" },
      { letter: "D", text: "The premises stated are true" },
      { letter: "E", text: "No cold-blooded animals are mammals" },
    ],
    correctAnswer: "D",
    explanation: "The argument is actually valid as stated: Mammals → Warm-blooded → High metabolic rate. Reptiles have no high metabolic rate, so working backwards, reptiles cannot be mammals. Assuming the premises are true makes the conclusion follow.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-14",
    type: "sufficient-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Any restaurant that serves excellent food will attract food critics. Any restaurant that attracts food critics will receive publicity. The Silver Fork restaurant has not received any publicity. Therefore, The Silver Fork does not serve excellent food.`,
    questionStem: "The conclusion above follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "The Silver Fork has not attracted any food critics" },
      { letter: "B", text: "Only restaurants that serve excellent food attract food critics" },
      { letter: "C", text: "Restaurants that receive publicity always serve excellent food" },
      { letter: "D", text: "No additional assumptions are needed; the argument is valid as stated" },
      { letter: "E", text: "Some restaurants that serve excellent food do not receive publicity" },
    ],
    correctAnswer: "D",
    explanation: "Excellent food → Critics → Publicity. Silver Fork has no publicity, so (contrapositive) no critics, so no excellent food. The chain of reasoning is complete without additional assumptions.",
    difficulty: "hard",
  },

  // INFERENCE QUESTIONS
  {
    id: "exp-lr-15",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `A recent study found that trees in urban areas grow significantly faster than trees of the same species in rural forests. Urban trees receive more carbon dioxide from vehicle emissions and often benefit from the urban heat island effect, which extends their growing season.`,
    questionStem: "Which one of the following can be properly inferred from the statements above?",
    answerChoices: [
      { letter: "A", text: "Urban trees are healthier than rural trees" },
      { letter: "B", text: "Vehicle emissions have some beneficial effects for plant growth" },
      { letter: "C", text: "Rural trees would grow faster if exposed to more carbon dioxide" },
      { letter: "D", text: "The urban heat island effect is primarily caused by vehicle emissions" },
      { letter: "E", text: "Trees grow best when exposed to high levels of carbon dioxide" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that urban trees grow faster partly because they receive more CO2 from vehicle emissions. This directly implies that vehicle emissions have some beneficial effects for plant growth, even if overall they may be harmful.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-16",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `No professional athlete who has been convicted of doping has been inducted into the Hall of Fame. Several athletes who were suspected but never convicted of doping have been inducted. Therefore, the Hall of Fame selection committee does not consider mere suspicion of doping to be disqualifying.`,
    questionStem: "The conclusion drawn above follows logically if which one of the following is assumed?",
    answerChoices: [
      { letter: "A", text: "The Hall of Fame selection committee was aware of the suspicions against the inducted athletes" },
      { letter: "B", text: "Some athletes who were convicted of doping were otherwise qualified for the Hall of Fame" },
      { letter: "C", text: "The suspicions against the inducted athletes were as serious as the charges against those convicted" },
      { letter: "D", text: "The Hall of Fame has clear written policies regarding doping" },
      { letter: "E", text: "All athletes suspected of doping who applied were inducted" },
    ],
    correctAnswer: "A",
    explanation: "For the committee to have decided that suspicion isn't disqualifying, they must have known about the suspicions. If they were unaware, their induction of these athletes tells us nothing about their policy on suspected dopers.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-17",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `Library records show that graphic novels are now borrowed more frequently than traditional novels at public libraries. However, traditional novels still account for a larger portion of total library inventory.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "The average graphic novel is borrowed more frequently than the average traditional novel" },
      { letter: "B", text: "Libraries should purchase more graphic novels" },
      { letter: "C", text: "Readers prefer graphic novels to traditional novels" },
      { letter: "D", text: "The number of graphic novels being published is increasing" },
      { letter: "E", text: "Some traditional novels in the library are never borrowed" },
    ],
    correctAnswer: "A",
    explanation: "If graphic novels are borrowed more in total but there are fewer of them in inventory, then each graphic novel must be borrowed more often on average than each traditional novel. This is a mathematical necessity.",
    difficulty: "medium",
  },

  // MAIN POINT QUESTIONS
  {
    id: "exp-lr-18",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `Critics argue that standardized testing narrows curriculum because teachers spend too much time on test preparation. However, without standardized measures, we would have no way to identify struggling schools or students who need additional help. Some narrowing of curriculum is an acceptable trade-off for the ability to ensure educational accountability.`,
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Standardized testing causes teachers to focus too much on test preparation" },
      { letter: "B", text: "Educational accountability requires some form of standardized measurement" },
      { letter: "C", text: "The benefits of standardized testing outweigh its negative effects on curriculum" },
      { letter: "D", text: "Struggling schools cannot be identified without standardized testing" },
      { letter: "E", text: "Critics of standardized testing are incorrect about its effects" },
    ],
    correctAnswer: "C",
    explanation: "The argument acknowledges the critics' point (curriculum narrowing) but concludes that this is 'an acceptable trade-off.' The main point is that the benefits justify the costs—not a denial of the costs or a claim about necessity alone.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-19",
    type: "main-point",
    sectionType: "logical-reasoning",
    stimulus: `People often claim that money cannot buy happiness. Research confirms that beyond a moderate income level, additional wealth does not increase reported well-being. However, this research only measures moment-to-moment happiness. When asked to evaluate their lives overall, wealthy individuals consistently report greater satisfaction. Clearly, money does contribute to at least one form of happiness.`,
    questionStem: "The main conclusion of the argument is that",
    answerChoices: [
      { letter: "A", text: "research on happiness is fundamentally flawed" },
      { letter: "B", text: "the common belief that money cannot buy happiness is entirely wrong" },
      { letter: "C", text: "wealthy people are happier than non-wealthy people" },
      { letter: "D", text: "money has some positive relationship with happiness" },
      { letter: "E", text: "moment-to-moment happiness differs from overall life satisfaction" },
    ],
    correctAnswer: "D",
    explanation: "The conclusion states 'money does contribute to at least one form of happiness.' This is more modest than saying money definitely buys happiness—it's the qualified claim that there is some positive relationship.",
    difficulty: "medium",
  },

  // METHOD OF REASONING QUESTIONS
  {
    id: "exp-lr-20",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Parent: You argue that video games improve hand-eye coordination. But even if that's true, spending hours playing games takes time away from homework, physical activity, and social interaction. Just because something has one benefit doesn't mean it's good overall.`,
    questionStem: "The parent responds to the argument by",
    answerChoices: [
      { letter: "A", text: "disputing the claim that video games improve hand-eye coordination" },
      { letter: "B", text: "arguing that hand-eye coordination is not a valuable skill" },
      { letter: "C", text: "pointing out that a single benefit does not establish overall value" },
      { letter: "D", text: "suggesting that there are better ways to improve hand-eye coordination" },
      { letter: "E", text: "questioning whether children should be allowed to play video games at all" },
    ],
    correctAnswer: "C",
    explanation: "The parent explicitly states 'just because something has one benefit doesn't mean it's good overall' and lists the costs. The method is acknowledging a point but arguing it's insufficient to establish the broader conclusion.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-21",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Scientist A: The universe must have a beginning because everything that exists has a cause. Scientist B: But if everything has a cause, then the universe's cause would also need a cause, leading to infinite regress. Therefore, either not everything has a cause, or the universe's existence is fundamentally inexplicable.`,
    questionStem: "Scientist B's response employs which one of the following argumentative techniques?",
    answerChoices: [
      { letter: "A", text: "Providing empirical evidence that contradicts Scientist A's premise" },
      { letter: "B", text: "Showing that Scientist A's principle leads to problematic implications" },
      { letter: "C", text: "Arguing that Scientist A has used a term ambiguously" },
      { letter: "D", text: "Offering an alternative explanation for the existence of the universe" },
      { letter: "E", text: "Questioning Scientist A's credentials to discuss cosmological matters" },
    ],
    correctAnswer: "B",
    explanation: "Scientist B takes A's principle ('everything has a cause') and shows that consistently applying it leads to infinite regress—a problematic implication. This is a reductio argument showing the principle's problematic consequences.",
    difficulty: "hard",
  },

  // PARALLEL REASONING QUESTIONS
  {
    id: "exp-lr-22",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Every student who passes the bar exam must have completed law school. Martinez has completed law school. Therefore, Martinez will pass the bar exam.`,
    questionStem: "The flawed pattern of reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "All members of the orchestra play instruments. Johnson plays an instrument. Therefore, Johnson is a member of the orchestra." },
      { letter: "B", text: "All squares are rectangles. This shape is a square. Therefore, this shape is a rectangle." },
      { letter: "C", text: "No reptiles are mammals. This animal is not a reptile. Therefore, this animal is a mammal." },
      { letter: "D", text: "Some doctors are surgeons. Smith is a doctor. Therefore, Smith is a surgeon." },
      { letter: "E", text: "All even numbers are divisible by two. This number is divisible by two. Therefore, this number is even." },
    ],
    correctAnswer: "A",
    explanation: "Both arguments affirm the consequent. The original: Pass bar → Completed law school; completed law school, so will pass (invalid). Answer A: Orchestra member → Plays instrument; plays instrument, so member (invalid). Same structure.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-23",
    type: "parallel-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `The bakery's profits have increased since hiring the new manager. The new manager must be doing something right. Therefore, the bakery should keep the new manager.`,
    questionStem: "Which one of the following arguments is most similar in its reasoning to the argument above?",
    answerChoices: [
      { letter: "A", text: "Crime rates decreased after the new police chief took office. The new chief must be effective. Therefore, the new chief should be retained." },
      { letter: "B", text: "The patient recovered after starting the new medication. The medication must work. Therefore, the medication should be approved for general use." },
      { letter: "C", text: "Productivity increased when the factory installed new equipment. The equipment must be beneficial. Therefore, more factories should install this equipment." },
      { letter: "D", text: "The team has won every game since the new coach arrived. The coach must be talented. Therefore, the coach deserves a raise." },
      { letter: "E", text: "Sales improved after the store moved to a new location. The new location must be better. Therefore, the store should not move again." },
    ],
    correctAnswer: "A",
    explanation: "Both arguments follow: Positive outcome after personnel change → personnel is responsible → retain personnel. Answer A has the identical structure with crime/police chief parallel to profits/manager.",
    difficulty: "medium",
  },

  // PRINCIPLE QUESTIONS
  {
    id: "exp-lr-24",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A journalist discovered that a local charity was spending only 30% of donations on actual charitable work, with the rest going to administrative costs and executive salaries. The journalist published this information even though it would likely harm the charity's reputation and reduce future donations.`,
    questionStem: "Which one of the following principles, if valid, most helps to justify the journalist's action?",
    answerChoices: [
      { letter: "A", text: "Journalists should avoid publishing information that harms organizations doing charitable work" },
      { letter: "B", text: "The public has a right to know how charitable organizations spend donated funds" },
      { letter: "C", text: "Charities should spend at least 75% of donations on charitable programs" },
      { letter: "D", text: "Journalists should only publish information that has been verified by multiple sources" },
      { letter: "E", text: "Organizations that deceive the public forfeit their right to privacy" },
    ],
    correctAnswer: "B",
    explanation: "If the public has a right to know how their donations are spent, then the journalist is obligated to provide this information regardless of consequences to the charity. This principle directly justifies the publication decision.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-25",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `Company policy states that employees may work from home if their job duties can be performed remotely and if their supervisor approves. Chen's job can be done remotely, but her supervisor has denied her request because of concerns about her productivity levels.`,
    questionStem: "The supervisor's decision is most consistent with which one of the following interpretations of the policy?",
    answerChoices: [
      { letter: "A", text: "The ability to work remotely is sufficient for approval of a work-from-home request" },
      { letter: "B", text: "Supervisors have discretion to consider factors beyond whether a job can be done remotely" },
      { letter: "C", text: "Productivity concerns automatically disqualify an employee from working from home" },
      { letter: "D", text: "The policy applies only to employees with demonstrated high productivity" },
      { letter: "E", text: "Supervisors must approve all requests from employees whose jobs can be done remotely" },
    ],
    correctAnswer: "B",
    explanation: "The policy requires both remote capability AND supervisor approval. The supervisor's consideration of productivity falls under the discretion implied by requiring approval. Answer B correctly interprets this as giving supervisors broader discretion.",
    difficulty: "medium",
  },

  // RESOLVE PARADOX QUESTIONS
  {
    id: "exp-lr-26",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Studies show that people who eat breakfast daily have lower rates of obesity than those who skip breakfast. However, clinical trials where participants were randomly assigned to eat or skip breakfast found no difference in weight loss between the two groups.`,
    questionStem: "Which one of the following, if true, most helps to resolve the apparent discrepancy between these findings?",
    answerChoices: [
      { letter: "A", text: "The clinical trials lasted only three months, while the observational studies followed participants for years" },
      { letter: "B", text: "People who naturally prefer to eat breakfast tend to have other habits that contribute to lower weight" },
      { letter: "C", text: "The clinical trial participants were already at a healthy weight when the study began" },
      { letter: "D", text: "Breakfast foods vary considerably in their nutritional content and caloric density" },
      { letter: "E", text: "Some participants in the 'skip breakfast' group occasionally ate breakfast anyway" },
    ],
    correctAnswer: "B",
    explanation: "This explains why correlation (breakfast eaters are thinner) doesn't equal causation (breakfast causes thinness). People who eat breakfast may have other healthy habits that explain their lower obesity rates—a confounding variable in observational studies that's controlled for in clinical trials.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-27",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Despite significant improvements in automotive safety technology over the past decade, the total number of traffic fatalities has remained essentially unchanged. Cars are demonstrably safer, yet just as many people die in car accidents as before.`,
    questionStem: "Which one of the following, if true, most helps to explain the apparent discrepancy?",
    answerChoices: [
      { letter: "A", text: "The improvements in safety technology have been unevenly distributed across different vehicle types" },
      { letter: "B", text: "Drivers in safer cars tend to engage in riskier behavior because they feel more protected" },
      { letter: "C", text: "Many older vehicles without modern safety features remain on the road" },
      { letter: "D", text: "Traffic fatalities among pedestrians and cyclists have increased during this period" },
      { letter: "E", text: "The definition of 'traffic fatality' has changed over the past decade" },
    ],
    correctAnswer: "B",
    explanation: "This is 'risk compensation'—if drivers feel safer, they may take more risks (speeding, texting), offsetting the safety improvements. The technology works, but behavior changes to maintain the same risk level.",
    difficulty: "medium",
  },

  // EVALUATE QUESTIONS
  {
    id: "exp-lr-28",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `A city official argues that the new public transit system will reduce traffic congestion because many commuters will switch from cars to trains. The official cites a survey showing that 60% of drivers would consider using public transit if it were more convenient.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the official's argument?",
    answerChoices: [
      { letter: "A", text: "How many people currently use public transit in the city" },
      { letter: "B", text: "What percentage of those who say they would consider transit actually switch when it becomes available" },
      { letter: "C", text: "How the new transit system compares in cost to other cities' systems" },
      { letter: "D", text: "Whether the survey respondents drive primarily for work commutes or other purposes" },
      { letter: "E", text: "How long it took to construct the new transit system" },
    ],
    correctAnswer: "B",
    explanation: "The gap between saying you would 'consider' something and actually doing it is crucial. If historically only 10% of people who 'would consider' transit actually switch, the argument is much weaker than if 80% do.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-29",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Pharmaceutical Executive: Our new drug reduces symptoms of the common cold by an average of two days compared to placebo. Given that the average cold lasts seven to ten days, this represents a significant improvement in patient outcomes.`,
    questionStem: "The answer to which one of the following questions would be most helpful in evaluating the executive's argument?",
    answerChoices: [
      { letter: "A", text: "What is the cost of the new drug compared to existing cold medications?" },
      { letter: "B", text: "Are there any side effects associated with the new drug?" },
      { letter: "C", text: "How does the two-day reduction compare to existing cold treatments?" },
      { letter: "D", text: "Was the clinical trial conducted using proper randomization procedures?" },
      { letter: "E", text: "What percentage of the population gets colds each year?" },
    ],
    correctAnswer: "C",
    explanation: "Whether two days is 'significant' depends on context. If existing treatments already provide similar or better results, the new drug isn't a significant advance. The comparison to alternatives is crucial for evaluating the claim of significance.",
    difficulty: "medium",
  },

  // POINT AT ISSUE QUESTIONS
  {
    id: "exp-lr-30",
    type: "point-at-issue",
    sectionType: "logical-reasoning",
    stimulus: `Alex: We should implement a four-day workweek because studies show employees are just as productive in four days as in five, while reporting higher job satisfaction.
Jordan: Reducing work hours is impractical. Many businesses need to maintain five days of operations, and customers expect availability throughout the week.`,
    questionStem: "Alex and Jordan's statements provide the most support for the claim that they disagree about whether",
    answerChoices: [
      { letter: "A", text: "employee productivity matters more than customer convenience" },
      { letter: "B", text: "studies accurately measure employee productivity" },
      { letter: "C", text: "a four-day workweek would be beneficial overall" },
      { letter: "D", text: "job satisfaction is important for employees" },
      { letter: "E", text: "businesses have an obligation to meet customer expectations" },
    ],
    correctAnswer: "C",
    explanation: "Alex explicitly supports the four-day week; Jordan opposes it as 'impractical.' They disagree on whether implementing the policy would be beneficial, considering all factors—not just productivity or satisfaction in isolation.",
    difficulty: "medium",
  },

  // MORE FLAW QUESTIONS
  {
    id: "exp-lr-31",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Since the unemployment rate has decreased every year for the past five years, it will continue to decrease next year.`,
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "fails to define what constitutes a meaningful decrease in unemployment" },
      { letter: "B", text: "assumes that past trends will necessarily continue into the future" },
      { letter: "C", text: "ignores the possibility that unemployment could remain constant" },
      { letter: "D", text: "does not specify the percentage of unemployment decrease each year" },
      { letter: "E", text: "overlooks the factors that have caused unemployment to decrease" },
    ],
    correctAnswer: "B",
    explanation: "This is the classic fallacy of extrapolating trends indefinitely. Past performance does not guarantee future results. Economic conditions change, and trends can reverse.",
    difficulty: "easy",
  },
  {
    id: "exp-lr-32",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Director: Our theater company should not produce any controversial plays this season. Last year's controversial play received negative reviews and sold fewer tickets than expected. Clearly, audiences don't want to see challenging material.`,
    questionStem: "The director's reasoning is questionable because it",
    answerChoices: [
      { letter: "A", text: "generalizes from a single instance to a universal claim about audience preferences" },
      { letter: "B", text: "confuses the cause and effect of the negative reviews" },
      { letter: "C", text: "assumes that ticket sales are the only measure of a play's success" },
      { letter: "D", text: "ignores the preferences of critics in favor of audience preferences" },
      { letter: "E", text: "fails to consider that different controversial plays might be received differently" },
    ],
    correctAnswer: "A",
    explanation: "One controversial play failing doesn't prove audiences don't want 'challenging material' generally. Perhaps that particular play was poorly executed, or its controversy was off-putting while other controversies might not be.",
    difficulty: "medium",
  },

  // MORE STRENGTHEN QUESTIONS
  {
    id: "exp-lr-33",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Ecologist: The population of wild salmon in the Pacific Northwest has declined sharply over the past three decades. Since salmon require cold, clean water to spawn, I believe climate change—by warming river temperatures—is the primary cause of this decline.`,
    questionStem: "Which one of the following, if true, most strengthens the ecologist's argument?",
    answerChoices: [
      { letter: "A", text: "Salmon populations have declined in rivers that have not been affected by dams or pollution" },
      { letter: "B", text: "Other fish species that prefer cold water have also declined in the region" },
      { letter: "C", text: "Rivers used by salmon have shown temperature increases consistent with climate models" },
      { letter: "D", text: "Salmon populations in rivers that have remained cold have not experienced the same decline" },
      { letter: "E", text: "The decline began around the same time that global temperatures started rising significantly" },
    ],
    correctAnswer: "D",
    explanation: "This provides a natural control group. If salmon thrive where water is still cold but decline where it warmed, this strongly supports temperature as the cause, ruling out other factors that would affect all rivers equally.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-34",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Sleep researcher: My studies indicate that people who get adequate sleep make better decisions than those who are sleep-deprived. Since many important business and political decisions are made by people who regularly get insufficient sleep, I believe that insufficient sleep is a significant factor in poor decision-making at high levels.`,
    questionStem: "Which one of the following, if true, most strengthens the researcher's reasoning?",
    answerChoices: [
      { letter: "A", text: "People who regularly get insufficient sleep often do not realize their decision-making is impaired" },
      { letter: "B", text: "Business executives and politicians work longer hours than most other professionals" },
      { letter: "C", text: "Decision-making ability can be improved through training regardless of sleep levels" },
      { letter: "D", text: "The effects of sleep deprivation on decision-making are similar across all types of decisions" },
      { letter: "E", text: "Some important decisions have been made successfully by people who were sleep-deprived" },
    ],
    correctAnswer: "D",
    explanation: "The researcher extrapolates from general decision-making to 'high-level' business and political decisions. If sleep deprivation affects all types of decisions similarly, this bridge is supported. Otherwise, the research might not apply to executive decisions.",
    difficulty: "hard",
  },

  // MORE WEAKEN QUESTIONS
  {
    id: "exp-lr-35",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Coach: Our team's new training regimen must be working. Since we implemented it six weeks ago, our players' performance metrics have improved significantly.`,
    questionStem: "Which one of the following, if true, most weakens the coach's argument?",
    answerChoices: [
      { letter: "A", text: "The team also changed its diet program around the same time as the new training regimen" },
      { letter: "B", text: "Some players complained that the new regimen was too demanding" },
      { letter: "C", text: "Other teams that adopted similar training methods did not see improvement" },
      { letter: "D", text: "The performance metrics being used are different from those used last season" },
      { letter: "E", text: "The improvement in metrics has been gradual rather than sudden" },
    ],
    correctAnswer: "A",
    explanation: "If the diet changed too, we can't attribute improvement solely to training. This presents a confounding variable—an alternative explanation for the improved metrics.",
    difficulty: "medium",
  },

  // MORE INFERENCE QUESTIONS
  {
    id: "exp-lr-36",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `All licensed electricians must pass a certification exam. Anyone who passes the certification exam must complete at least 8,000 hours of supervised training. Some apprentices complete 8,000 hours of supervised training but never take the certification exam.`,
    questionStem: "If the statements above are true, which one of the following must be true?",
    answerChoices: [
      { letter: "A", text: "Some apprentices are licensed electricians" },
      { letter: "B", text: "No apprentice who has completed 8,000 hours of training is a licensed electrician" },
      { letter: "C", text: "Not everyone who completes 8,000 hours of training becomes a licensed electrician" },
      { letter: "D", text: "All apprentices who take the certification exam pass it" },
      { letter: "E", text: "Licensed electricians complete more training than the minimum required" },
    ],
    correctAnswer: "C",
    explanation: "Some apprentices complete the training but never take the exam. Without the exam, they can't become licensed. Therefore, some people who complete the training (these apprentices) don't become licensed electricians.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-37",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `In Zenith County, any building over three stories must have an elevator. All buildings with elevators must have emergency generators. Some residential buildings in Zenith County have emergency generators, but many do not.`,
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "No residential building in Zenith County has more than three stories" },
      { letter: "B", text: "Some residential buildings in Zenith County have three or fewer stories" },
      { letter: "C", text: "All buildings with emergency generators in Zenith County have elevators" },
      { letter: "D", text: "Some residential buildings in Zenith County have elevators" },
      { letter: "E", text: "Buildings with fewer than three stories do not need emergency generators" },
    ],
    correctAnswer: "B",
    explanation: "Buildings over 3 stories → Elevator → Emergency generator. Many residential buildings don't have generators, so they don't have elevators, so they're not over 3 stories. Thus some residential buildings have 3 or fewer stories.",
    difficulty: "hard",
  },

  // MORE NECESSARY ASSUMPTION QUESTIONS
  {
    id: "exp-lr-38",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Film critic: Modern superhero movies lack the artistic merit of classic Hollywood films. While technical effects have improved, the stories are formulaic and the characters one-dimensional. These films do not deserve serious critical attention.`,
    questionStem: "The film critic's argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Technical improvements cannot compensate for weaknesses in storytelling and characterization" },
      { letter: "B", text: "Classic Hollywood films did not use formulaic plots" },
      { letter: "C", text: "Only films with artistic merit deserve critical attention" },
      { letter: "D", text: "All modern superhero movies have the same flaws" },
      { letter: "E", text: "Character development is the most important element of artistic merit in film" },
    ],
    correctAnswer: "A",
    explanation: "The critic acknowledges technical improvement but concludes the films lack merit due to story/character issues. This assumes that technical prowess cannot make up for narrative weaknesses—otherwise, technical excellence might grant merit despite other flaws.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-39",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Pet store owner: Goldfish are ideal first pets for children. They require minimal care, are inexpensive, and don't require much space. Therefore, parents looking to teach their children responsibility should start with goldfish.`,
    questionStem: "The argument above assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Children enjoy caring for goldfish more than for other pets" },
      { letter: "B", text: "The characteristics that make a pet easy to care for also make it suitable for teaching responsibility" },
      { letter: "C", text: "Goldfish require less space than any other type of pet" },
      { letter: "D", text: "Parents are primarily concerned with ease of care when selecting their children's first pet" },
      { letter: "E", text: "Children who learn to care for goldfish will be prepared to care for more demanding pets later" },
    ],
    correctAnswer: "B",
    explanation: "The argument jumps from 'minimal care, inexpensive, small' to 'teaches responsibility.' This assumes that these easy-care features are compatible with teaching responsibility—that they don't undermine the lesson by making the pet too easy to neglect.",
    difficulty: "hard",
  },

  // ADDITIONAL QUESTIONS TO REACH 50+ LR
  {
    id: "exp-lr-40",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Newspaper Editor: A recent poll shows that 85% of our readers want more local news coverage. Since our newspaper's primary obligation is to serve our readers, we should immediately reduce national and international news coverage to make room for more local stories.`,
    questionStem: "The reasoning in the editor's argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that readers' expressed preferences reflect their true interests" },
      { letter: "B", text: "ignores the possibility that readers might want more local news in addition to, rather than instead of, other coverage" },
      { letter: "C", text: "relies on a poll that may not have been conducted scientifically" },
      { letter: "D", text: "confuses the newspaper's commercial interests with its journalistic obligations" },
      { letter: "E", text: "overlooks the fact that different readers may have different preferences" },
    ],
    correctAnswer: "B",
    explanation: "Wanting 'more' local news doesn't necessarily mean wanting less of something else. Readers might want the paper to be longer or more frequently published. The editor assumes a zero-sum when readers might want addition, not substitution.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-41",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Psychologist: Contrary to popular belief, venting anger by hitting a punching bag or screaming into a pillow does not actually reduce aggressive feelings. In fact, such activities may reinforce aggressive tendencies by providing practice in aggressive behavior.`,
    questionStem: "Which one of the following, if true, most strengthens the psychologist's claim?",
    answerChoices: [
      { letter: "A", text: "People who regularly engage in 'venting' activities report feeling more irritable over time than those who use other coping strategies" },
      { letter: "B", text: "Physical exercise that is not aggressive in nature has been shown to reduce feelings of anger" },
      { letter: "C", text: "Many therapists have stopped recommending anger venting as a therapeutic technique" },
      { letter: "D", text: "People often feel temporarily better immediately after venting but report no long-term improvement" },
      { letter: "E", text: "Aggressive behavior in some contexts can be beneficial for achieving goals" },
    ],
    correctAnswer: "A",
    explanation: "If people who vent become MORE irritable over time, this directly supports both claims: that venting doesn't reduce aggression and that it may reinforce aggressive tendencies. This is evidence of the harmful pattern the psychologist describes.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-42",
    type: "weaken",
    sectionType: "logical-reasoning",
    stimulus: `Historian: Medieval peasants actually had more leisure time than modern workers. After accounting for holidays, festivals, and the agricultural off-season, a medieval peasant worked only about 150 days per year. The modern notion that our ancestors toiled endlessly is a myth.`,
    questionStem: "Which one of the following, if true, most seriously undermines the historian's conclusion?",
    answerChoices: [
      { letter: "A", text: "Medieval records of work days may not be entirely accurate" },
      { letter: "B", text: "Modern workers have access to labor-saving technologies that medieval peasants lacked" },
      { letter: "C", text: "Medieval 'non-work' days were often devoted to mandatory labor on landlords' estates or other obligatory tasks" },
      { letter: "D", text: "The definition of 'leisure time' varies across different historical periods" },
      { letter: "E", text: "Some medieval peasants worked considerably more than 150 days per year" },
    ],
    correctAnswer: "C",
    explanation: "If 'non-work' days weren't actually leisure but involved other mandatory labor, then the peasants didn't really have more leisure time. The 150 days figure is misleading because it only counts certain types of work.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-43",
    type: "principle-apply",
    sectionType: "logical-reasoning",
    stimulus: `A software company discovered a serious security vulnerability in its product that could allow hackers to access users' personal data. Rather than immediately notifying users, the company spent two weeks quietly developing a fix, then announced both the vulnerability and the patch simultaneously.`,
    questionStem: "Which one of the following principles, if valid, would most justify the company's approach?",
    answerChoices: [
      { letter: "A", text: "Companies should always prioritize user safety over corporate reputation" },
      { letter: "B", text: "Users should be notified of any security risk immediately upon its discovery" },
      { letter: "C", text: "Information about security vulnerabilities should only be disclosed when a remedy is available to prevent exploitation" },
      { letter: "D", text: "Software companies should be legally required to disclose all known security issues" },
      { letter: "E", text: "The timing of disclosure should be determined by the severity of the vulnerability" },
    ],
    correctAnswer: "C",
    explanation: "If disclosing vulnerabilities without a fix allows hackers to exploit them, then waiting until a patch exists protects users. This principle justifies delaying disclosure until the remedy is ready.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-44",
    type: "resolve-paradox",
    sectionType: "logical-reasoning",
    stimulus: `Professional athletes in high-contact sports such as football and hockey report higher levels of pain than athletes in low-contact sports. Yet high-contact athletes also report higher levels of physical well-being and body satisfaction than their low-contact counterparts.`,
    questionStem: "Which one of the following, if true, most helps to explain this apparent paradox?",
    answerChoices: [
      { letter: "A", text: "High-contact athletes are more likely to take pain medication than low-contact athletes" },
      { letter: "B", text: "Athletes in high-contact sports tend to have shorter careers due to injuries" },
      { letter: "C", text: "High-contact athletes often view pain as a sign of their strength and commitment to their sport" },
      { letter: "D", text: "Professional athletes in all sports receive similar quality of medical care" },
      { letter: "E", text: "Many athletes choose high-contact sports specifically because they enjoy physical competition" },
    ],
    correctAnswer: "C",
    explanation: "If pain is reframed as a positive—a badge of honor showing strength and dedication—then experiencing more pain could actually enhance body satisfaction and feelings of physical well-being. The pain becomes meaningful rather than merely negative.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-45",
    type: "inference",
    sectionType: "logical-reasoning",
    stimulus: `The city's new water conservation policy requires all new residential construction to include low-flow plumbing fixtures. The policy does not apply to commercial buildings or to existing homes. However, homeowners who voluntarily upgrade to low-flow fixtures are eligible for tax credits.`,
    questionStem: "Which one of the following can be properly inferred from the information above?",
    answerChoices: [
      { letter: "A", text: "Commercial buildings use more water than residential buildings" },
      { letter: "B", text: "Low-flow fixtures are more expensive than traditional fixtures" },
      { letter: "C", text: "Some residential buildings are not required to have low-flow fixtures" },
      { letter: "D", text: "Most homeowners will choose to upgrade to low-flow fixtures" },
      { letter: "E", text: "The tax credit is sufficient to cover the cost of upgrading fixtures" },
    ],
    correctAnswer: "C",
    explanation: "The policy only applies to new construction, not existing homes. Therefore, existing residential buildings are not required to have low-flow fixtures—only new ones are.",
    difficulty: "easy",
  },
  {
    id: "exp-lr-46",
    type: "method-of-reasoning",
    sectionType: "logical-reasoning",
    stimulus: `Critic: You argue that the death penalty deters crime, but consider: states with the death penalty do not have consistently lower murder rates than states without it. If the death penalty deterred murder, we would expect to see lower rates where it is applied. Therefore, the deterrence argument fails.`,
    questionStem: "The critic's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "presenting statistical evidence that directly contradicts the opposing view" },
      { letter: "B", text: "showing that a prediction derived from the opposing view is not borne out" },
      { letter: "C", text: "questioning the motives of those who advocate for the death penalty" },
      { letter: "D", text: "demonstrating that the deterrence argument contains a logical contradiction" },
      { letter: "E", text: "arguing that the burden of proof lies with those who support the death penalty" },
    ],
    correctAnswer: "B",
    explanation: "The critic reasons: if deterrence worked, we'd see lower rates (prediction). We don't see lower rates. Therefore, deterrence doesn't work. This is falsifying a prediction—a classic method of testing a hypothesis.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-47",
    type: "evaluate",
    sectionType: "logical-reasoning",
    stimulus: `Museum Director: Our new extended evening hours have been successful in attracting younger visitors. In the first month, visitors under 30 increased by 40 percent during evening hours compared to our previous closing time.`,
    questionStem: "Which one of the following would be most useful to know in evaluating the director's claim of success?",
    answerChoices: [
      { letter: "A", text: "What percentage of total museum visitors are under 30" },
      { letter: "B", text: "Whether the increase in young visitors during evening hours came at the expense of daytime visits" },
      { letter: "C", text: "How the evening hours affected visitors over 30" },
      { letter: "D", text: "Whether other museums in the area have extended their hours" },
      { letter: "E", text: "How much revenue the museum generates from visitors under 30" },
    ],
    correctAnswer: "B",
    explanation: "If young visitors are simply shifting from daytime to evening rather than increasing overall, the extended hours haven't truly attracted new visitors—just redistributed existing ones. True success would mean net new visitors.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-48",
    type: "flaw",
    sectionType: "logical-reasoning",
    stimulus: `Local Resident: The proposed highway expansion will destroy the character of our neighborhood. Every time a highway is built through a residential area, property values decline and crime increases. Since our neighborhood currently has high property values and low crime, the highway will certainly damage our community.`,
    questionStem: "The reasoning in the resident's argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "assumes that what has happened elsewhere will necessarily happen in this particular neighborhood" },
      { letter: "B", text: "provides no evidence that highways directly cause crime to increase" },
      { letter: "C", text: "fails to consider that property values might decline for other reasons" },
      { letter: "D", text: "does not account for potential benefits of improved transportation access" },
      { letter: "E", text: "presumes that the current character of the neighborhood is worth preserving" },
    ],
    correctAnswer: "A",
    explanation: "Even if past highways caused problems, this neighborhood might be different—better positioned, better designed highway, different demographics, etc. Generalizing from other cases to this specific situation without considering differences is a flaw.",
    difficulty: "medium",
  },
  {
    id: "exp-lr-49",
    type: "strengthen",
    sectionType: "logical-reasoning",
    stimulus: `Ornithologist: The migrating patterns of the Arctic tern have changed significantly over the past 50 years. Since the tern's migration is driven primarily by the location of its food sources, I believe these changes indicate that ocean ecosystems along the tern's traditional routes have been disrupted.`,
    questionStem: "Which one of the following, if true, most strengthens the ornithologist's reasoning?",
    answerChoices: [
      { letter: "A", text: "Arctic terns are capable of adapting their flight paths in response to changing conditions" },
      { letter: "B", text: "Other seabirds that feed on the same prey as Arctic terns have also changed their migration patterns" },
      { letter: "C", text: "Weather patterns along the tern's traditional routes have remained stable over the past 50 years" },
      { letter: "D", text: "The total population of Arctic terns has remained relatively constant" },
      { letter: "E", text: "Migration pattern changes have been observed in bird species worldwide" },
    ],
    correctAnswer: "C",
    explanation: "If weather hasn't changed, that rules out weather as an alternative explanation for the migration shift. With weather eliminated, food source disruption becomes more likely the cause. This strengthens the food-disruption explanation.",
    difficulty: "hard",
  },
  {
    id: "exp-lr-50",
    type: "necessary-assumption",
    sectionType: "logical-reasoning",
    stimulus: `Political Analyst: Voter turnout in local elections has declined steadily for decades. If this trend continues, local governments will increasingly lack legitimacy, as they will be chosen by an ever-smaller fraction of the eligible population.`,
    questionStem: "The analyst's argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "Eligible voters who do not vote have different political preferences than those who do vote" },
      { letter: "B", text: "The decline in voter turnout cannot be reversed through policy changes" },
      { letter: "C", text: "A government's legitimacy is at least partly a function of the proportion of citizens who participate in choosing it" },
      { letter: "D", text: "Local elections are more important than national elections" },
      { letter: "E", text: "Voter turnout has declined more in local elections than in national elections" },
    ],
    correctAnswer: "C",
    explanation: "The argument connects lower turnout to lower legitimacy. This requires assuming that legitimacy depends on participation levels. If legitimacy came from other sources (following laws, effective governance), turnout wouldn't affect it.",
    difficulty: "medium",
  },
];

// ============================================
// EXPANDED READING COMPREHENSION QUESTIONS
// ============================================

export const expandedRCQuestions: Question[] = [
  // PASSAGE 1: Legal Philosophy
  {
    id: "exp-rc-1",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Legal positivism, the theory that law is whatever rules are enacted by proper authority regardless of their moral content, has long dominated jurisprudential thinking. However, the atrocities of World War II prompted a revival of natural law theory, which holds that truly unjust rules cannot be considered valid law. The Nuremberg trials crystallized this tension: defendants argued they had followed valid German law, while prosecutors contended that laws mandating genocide could never be legitimate legal commands.

This debate has profound practical implications. If legal positivism is correct, citizens have a duty to obey even unjust laws unless and until they are changed through proper channels. Civil disobedience, while perhaps morally justified, remains illegal. But if natural law theory is correct, fundamentally unjust rules lack the authority that normally attaches to law, potentially justifying or even requiring resistance.

Contemporary legal theorists have sought middle ground. H.L.A. Hart defended a sophisticated positivism that acknowledges the importance of morality to legal systems while maintaining that the validity of specific rules depends on social facts, not moral criteria. Meanwhile, theorists like Lon Fuller argued that law has an "inner morality"—procedural requirements like clarity and consistency—that connects legal and moral validity without making law subject to external moral judgment.`,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The debate between legal positivism and natural law theory remains unresolved and continues to shape jurisprudence." },
      { letter: "B", text: "The Nuremberg trials exposed fatal flaws in legal positivism that have not been adequately addressed." },
      { letter: "C", text: "Contemporary legal theorists have developed sophisticated positions that attempt to mediate the traditional debate between positivism and natural law theory." },
      { letter: "D", text: "H.L.A. Hart's defense of legal positivism is more persuasive than natural law alternatives." },
      { letter: "E", text: "Civil disobedience is legally unjustifiable under any coherent theory of law." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the positivism/natural law debate, shows how WWII intensified it, and then focuses on contemporary attempts to find middle ground (Hart, Fuller). The main point is that modern theorists have developed nuanced positions between the traditional extremes.",
    difficulty: "medium",
  },
  {
    id: "exp-rc-2",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `Legal positivism, the theory that law is whatever rules are enacted by proper authority regardless of their moral content, has long dominated jurisprudential thinking. However, the atrocities of World War II prompted a revival of natural law theory, which holds that truly unjust rules cannot be considered valid law. The Nuremberg trials crystallized this tension: defendants argued they had followed valid German law, while prosecutors contended that laws mandating genocide could never be legitimate legal commands.

This debate has profound practical implications. If legal positivism is correct, citizens have a duty to obey even unjust laws unless and until they are changed through proper channels. Civil disobedience, while perhaps morally justified, remains illegal. But if natural law theory is correct, fundamentally unjust rules lack the authority that normally attaches to law, potentially justifying or even requiring resistance.

Contemporary legal theorists have sought middle ground. H.L.A. Hart defended a sophisticated positivism that acknowledges the importance of morality to legal systems while maintaining that the validity of specific rules depends on social facts, not moral criteria. Meanwhile, theorists like Lon Fuller argued that law has an "inner morality"—procedural requirements like clarity and consistency—that connects legal and moral validity without making law subject to external moral judgment.`,
    questionStem: "According to the passage, Hart's position on legal validity holds that",
    answerChoices: [
      { letter: "A", text: "moral criteria alone determine whether a rule is law" },
      { letter: "B", text: "social facts, not moral criteria, determine the validity of specific rules" },
      { letter: "C", text: "there is no connection between morality and legal systems" },
      { letter: "D", text: "natural law theory is fundamentally correct" },
      { letter: "E", text: "civil disobedience is legally justified when laws are immoral" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Hart 'maintain[ed] that the validity of specific rules depends on social facts, not moral criteria.' This is stated directly in the third paragraph.",
    difficulty: "easy",
  },
  {
    id: "exp-rc-3",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Legal positivism, the theory that law is whatever rules are enacted by proper authority regardless of their moral content, has long dominated jurisprudential thinking. However, the atrocities of World War II prompted a revival of natural law theory, which holds that truly unjust rules cannot be considered valid law. The Nuremberg trials crystallized this tension: defendants argued they had followed valid German law, while prosecutors contended that laws mandating genocide could never be legitimate legal commands.

This debate has profound practical implications. If legal positivism is correct, citizens have a duty to obey even unjust laws unless and until they are changed through proper channels. Civil disobedience, while perhaps morally justified, remains illegal. But if natural law theory is correct, fundamentally unjust rules lack the authority that normally attaches to law, potentially justifying or even requiring resistance.

Contemporary legal theorists have sought middle ground. H.L.A. Hart defended a sophisticated positivism that acknowledges the importance of morality to legal systems while maintaining that the validity of specific rules depends on social facts, not moral criteria. Meanwhile, theorists like Lon Fuller argued that law has an "inner morality"—procedural requirements like clarity and consistency—that connects legal and moral validity without making law subject to external moral judgment.`,
    questionStem: "It can be inferred from the passage that Fuller would likely agree with which one of the following statements?",
    answerChoices: [
      { letter: "A", text: "A rule that is enacted properly but that no citizen can understand due to its vagueness has a weaker claim to being law." },
      { letter: "B", text: "Whether a rule counts as law depends entirely on its moral content." },
      { letter: "C", text: "Clarity and consistency are unrelated to a rule's legal validity." },
      { letter: "D", text: "External moral judgments should determine which rules are valid laws." },
      { letter: "E", text: "Legal positivism is entirely correct in separating law from morality." },
    ],
    correctAnswer: "A",
    explanation: "Fuller argued that law has an 'inner morality' including 'procedural requirements like clarity.' A vague rule that citizens cannot understand would fail this clarity requirement, giving it a weaker claim to legal validity under Fuller's theory.",
    difficulty: "hard",
  },
  {
    id: "exp-rc-4",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `Legal positivism, the theory that law is whatever rules are enacted by proper authority regardless of their moral content, has long dominated jurisprudential thinking. However, the atrocities of World War II prompted a revival of natural law theory, which holds that truly unjust rules cannot be considered valid law. The Nuremberg trials crystallized this tension: defendants argued they had followed valid German law, while prosecutors contended that laws mandating genocide could never be legitimate legal commands.

This debate has profound practical implications. If legal positivism is correct, citizens have a duty to obey even unjust laws unless and until they are changed through proper channels. Civil disobedience, while perhaps morally justified, remains illegal. But if natural law theory is correct, fundamentally unjust rules lack the authority that normally attaches to law, potentially justifying or even requiring resistance.

Contemporary legal theorists have sought middle ground. H.L.A. Hart defended a sophisticated positivism that acknowledges the importance of morality to legal systems while maintaining that the validity of specific rules depends on social facts, not moral criteria. Meanwhile, theorists like Lon Fuller argued that law has an "inner morality"—procedural requirements like clarity and consistency—that connects legal and moral validity without making law subject to external moral judgment.`,
    questionStem: "The author's attitude toward the debate between legal positivism and natural law theory can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of both positions as outdated" },
      { letter: "B", text: "strongly supportive of legal positivism" },
      { letter: "C", text: "neutral and explanatory" },
      { letter: "D", text: "critical of natural law theory" },
      { letter: "E", text: "frustrated by the lack of progress in resolving the debate" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both sides fairly, explains the historical context, and describes contemporary attempts at synthesis without taking sides. The tone is expository rather than argumentative.",
    difficulty: "medium",
  },

  // PASSAGE 2: Science/Environment
  {
    id: "exp-rc-5",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The collapse of Atlantic cod stocks off the coast of Newfoundland in the early 1990s remains one of the most dramatic examples of fishery mismanagement in modern history. For 500 years, the Grand Banks had been one of the world's most productive fishing grounds, supporting enormous catches and entire regional economies. By 1992, cod populations had fallen to less than one percent of historical levels, forcing the Canadian government to impose a complete moratorium on cod fishing—a ban that remains largely in effect today.

Scientists and policymakers had access to data showing declining catch rates and fish sizes for decades before the collapse, yet fishing quotas remained high. Several factors explain this failure. First, fishery models consistently overestimated cod populations because they relied heavily on catch data from fishermen, who increasingly used sophisticated technology to maintain catches even as stocks declined. Second, political pressure from fishing communities dependent on the industry led officials to set quotas higher than scientists recommended. Third, the complex ecosystem dynamics of the Grand Banks were poorly understood; scientists failed to account for how changing ocean conditions and the removal of large predatory fish affected cod reproduction.

The Newfoundland cod collapse transformed fisheries science and management. The precautionary approach—which places the burden of proof on those who claim fishing levels are sustainable—has since become the standard paradigm. Scientists now recognize that fisheries management must account for ecosystem interactions and environmental variability, not just target species populations.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The collapse of Atlantic cod stocks was caused primarily by political interference in scientific management." },
      { letter: "B", text: "The Newfoundland cod collapse, caused by multiple management failures, led to fundamental changes in fisheries science and policy." },
      { letter: "C", text: "Fishery models are inherently unreliable because they depend on data from fishermen." },
      { letter: "D", text: "The precautionary approach to fisheries management was developed in response to overfishing in the Grand Banks." },
      { letter: "E", text: "Climate change and ecosystem disruption were the primary causes of the cod collapse." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the collapse, explains multiple causes (models, politics, ecosystem understanding), and then discusses how this transformed fisheries management. The main point connects the collapse to lasting changes in the field.",
    difficulty: "medium",
  },
  {
    id: "exp-rc-6",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The collapse of Atlantic cod stocks off the coast of Newfoundland in the early 1990s remains one of the most dramatic examples of fishery mismanagement in modern history. For 500 years, the Grand Banks had been one of the world's most productive fishing grounds, supporting enormous catches and entire regional economies. By 1992, cod populations had fallen to less than one percent of historical levels, forcing the Canadian government to impose a complete moratorium on cod fishing—a ban that remains largely in effect today.

Scientists and policymakers had access to data showing declining catch rates and fish sizes for decades before the collapse, yet fishing quotas remained high. Several factors explain this failure. First, fishery models consistently overestimated cod populations because they relied heavily on catch data from fishermen, who increasingly used sophisticated technology to maintain catches even as stocks declined. Second, political pressure from fishing communities dependent on the industry led officials to set quotas higher than scientists recommended. Third, the complex ecosystem dynamics of the Grand Banks were poorly understood; scientists failed to account for how changing ocean conditions and the removal of large predatory fish affected cod reproduction.

The Newfoundland cod collapse transformed fisheries science and management. The precautionary approach—which places the burden of proof on those who claim fishing levels are sustainable—has since become the standard paradigm. Scientists now recognize that fisheries management must account for ecosystem interactions and environmental variability, not just target species populations.`,
    questionStem: "The passage mentions that fishermen 'increasingly used sophisticated technology' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize fishermen for contributing to the collapse" },
      { letter: "B", text: "explain why catch data gave a misleading picture of population health" },
      { letter: "C", text: "demonstrate that technology cannot prevent fishery collapse" },
      { letter: "D", text: "suggest that fishing quotas should have been based on technology use rather than catches" },
      { letter: "E", text: "argue that fishermen were unaware of declining stocks" },
    ],
    correctAnswer: "B",
    explanation: "The point is that technology allowed fishermen to maintain catches despite declining populations, so catch data didn't reveal the true stock decline. Models relying on this data overestimated populations—technology masked the problem.",
    difficulty: "medium",
  },
  {
    id: "exp-rc-7",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The collapse of Atlantic cod stocks off the coast of Newfoundland in the early 1990s remains one of the most dramatic examples of fishery mismanagement in modern history. For 500 years, the Grand Banks had been one of the world's most productive fishing grounds, supporting enormous catches and entire regional economies. By 1992, cod populations had fallen to less than one percent of historical levels, forcing the Canadian government to impose a complete moratorium on cod fishing—a ban that remains largely in effect today.

Scientists and policymakers had access to data showing declining catch rates and fish sizes for decades before the collapse, yet fishing quotas remained high. Several factors explain this failure. First, fishery models consistently overestimated cod populations because they relied heavily on catch data from fishermen, who increasingly used sophisticated technology to maintain catches even as stocks declined. Second, political pressure from fishing communities dependent on the industry led officials to set quotas higher than scientists recommended. Third, the complex ecosystem dynamics of the Grand Banks were poorly understood; scientists failed to account for how changing ocean conditions and the removal of large predatory fish affected cod reproduction.

The Newfoundland cod collapse transformed fisheries science and management. The precautionary approach—which places the burden of proof on those who claim fishing levels are sustainable—has since become the standard paradigm. Scientists now recognize that fisheries management must account for ecosystem interactions and environmental variability, not just target species populations.`,
    questionStem: "The passage suggests that before the cod collapse, fisheries scientists",
    answerChoices: [
      { letter: "A", text: "intentionally provided inaccurate population estimates to support the fishing industry" },
      { letter: "B", text: "focused too narrowly on cod populations without adequately considering broader ecosystem factors" },
      { letter: "C", text: "lacked the technology necessary to accurately count fish populations" },
      { letter: "D", text: "recommended quotas that were consistently followed by policymakers" },
      { letter: "E", text: "fully understood the dynamics of the Grand Banks ecosystem" },
    ],
    correctAnswer: "B",
    explanation: "The passage states scientists 'failed to account for how changing ocean conditions and the removal of large predatory fish affected cod reproduction' and that management now must consider 'ecosystem interactions.' This implies previous narrow focus on just cod.",
    difficulty: "medium",
  },
  {
    id: "exp-rc-8",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: `The collapse of Atlantic cod stocks off the coast of Newfoundland in the early 1990s remains one of the most dramatic examples of fishery mismanagement in modern history. For 500 years, the Grand Banks had been one of the world's most productive fishing grounds, supporting enormous catches and entire regional economies. By 1992, cod populations had fallen to less than one percent of historical levels, forcing the Canadian government to impose a complete moratorium on cod fishing—a ban that remains largely in effect today.

Scientists and policymakers had access to data showing declining catch rates and fish sizes for decades before the collapse, yet fishing quotas remained high. Several factors explain this failure. First, fishery models consistently overestimated cod populations because they relied heavily on catch data from fishermen, who increasingly used sophisticated technology to maintain catches even as stocks declined. Second, political pressure from fishing communities dependent on the industry led officials to set quotas higher than scientists recommended. Third, the complex ecosystem dynamics of the Grand Banks were poorly understood; scientists failed to account for how changing ocean conditions and the removal of large predatory fish affected cod reproduction.

The Newfoundland cod collapse transformed fisheries science and management. The precautionary approach—which places the burden of proof on those who claim fishing levels are sustainable—has since become the standard paradigm. Scientists now recognize that fisheries management must account for ecosystem interactions and environmental variability, not just target species populations.`,
    questionStem: "Which one of the following, if true, would most strengthen the passage's explanation for why fishery models overestimated cod populations?",
    answerChoices: [
      { letter: "A", text: "Fishery managers were aware that catches were being maintained through technological improvements" },
      { letter: "B", text: "Independent population surveys conducted by research vessels consistently showed lower numbers than catch-based models predicted" },
      { letter: "C", text: "Similar patterns of technological intensification masking population decline have been observed in other collapsed fisheries" },
      { letter: "D", text: "Political officials rejected scientific recommendations for lower quotas" },
      { letter: "E", text: "Ocean temperatures during this period fluctuated significantly from historical norms" },
    ],
    correctAnswer: "C",
    explanation: "If the same pattern—technology maintaining catches while stocks decline—occurred in other collapses, this supports the claim that this phenomenon caused the overestimates in the cod case. It's not just a post-hoc explanation for one case.",
    difficulty: "hard",
  },

  // PASSAGE 3: Arts/Humanities
  {
    id: "exp-rc-9",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The Harlem Renaissance of the 1920s and early 1930s is typically characterized as a literary and artistic movement, but it was equally significant as a philosophical and political transformation. African American intellectuals of this era rejected the accommodationist approach of Booker T. Washington, who had urged African Americans to accept social segregation while pursuing economic self-improvement. Instead, thinkers like W.E.B. Du Bois, Alain Locke, and Zora Neale Hurston articulated a new vision of Black identity that demanded full social and political equality while celebrating distinctly African American cultural contributions.

Central to this new vision was what Locke called the "New Negro"—an identity that rejected the stereotypes and limitations imposed by white American society. The New Negro was sophisticated, educated, and artistically accomplished, but also connected to African heritage and the experiences of ordinary Black Americans. This dual consciousness, as Du Bois had theorized, was not a weakness to be overcome but a source of unique insight and creative power.

The movement's emphasis on cultural achievement as a path to equality was both its strength and its limitation. Writers and artists like Langston Hughes, Claude McKay, and Aaron Douglas produced works of lasting significance that challenged racist assumptions about Black intellectual and artistic capacity. However, the strategy of proving equality through cultural accomplishment implicitly accepted the terms of a debate it should have rejected—the idea that Black Americans needed to prove their worth rather than simply assert their rights.`,
    questionStem: "The passage is primarily concerned with",
    answerChoices: [
      { letter: "A", text: "comparing the literary achievements of different Harlem Renaissance writers" },
      { letter: "B", text: "exploring both the philosophical significance and the strategic limitations of the Harlem Renaissance" },
      { letter: "C", text: "arguing that the Harlem Renaissance was primarily a political rather than artistic movement" },
      { letter: "D", text: "criticizing Du Bois and Locke for accepting racist premises" },
      { letter: "E", text: "explaining why the Harlem Renaissance ended in the early 1930s" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the Harlem Renaissance as philosophically significant (rejecting accommodationism, the New Negro concept) while also critiquing its limitations (implicitly accepting that Black Americans must prove their worth). It explores both dimensions.",
    difficulty: "medium",
  },
  {
    id: "exp-rc-10",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The Harlem Renaissance of the 1920s and early 1930s is typically characterized as a literary and artistic movement, but it was equally significant as a philosophical and political transformation. African American intellectuals of this era rejected the accommodationist approach of Booker T. Washington, who had urged African Americans to accept social segregation while pursuing economic self-improvement. Instead, thinkers like W.E.B. Du Bois, Alain Locke, and Zora Neale Hurston articulated a new vision of Black identity that demanded full social and political equality while celebrating distinctly African American cultural contributions.

Central to this new vision was what Locke called the "New Negro"—an identity that rejected the stereotypes and limitations imposed by white American society. The New Negro was sophisticated, educated, and artistically accomplished, but also connected to African heritage and the experiences of ordinary Black Americans. This dual consciousness, as Du Bois had theorized, was not a weakness to be overcome but a source of unique insight and creative power.

The movement's emphasis on cultural achievement as a path to equality was both its strength and its limitation. Writers and artists like Langston Hughes, Claude McKay, and Aaron Douglas produced works of lasting significance that challenged racist assumptions about Black intellectual and artistic capacity. However, the strategy of proving equality through cultural accomplishment implicitly accepted the terms of a debate it should have rejected—the idea that Black Americans needed to prove their worth rather than simply assert their rights.`,
    questionStem: "According to the passage, Booker T. Washington's approach differed from that of Harlem Renaissance intellectuals in that Washington",
    answerChoices: [
      { letter: "A", text: "rejected the celebration of African American cultural contributions" },
      { letter: "B", text: "advocated accepting social segregation while pursuing economic advancement" },
      { letter: "C", text: "believed that African Americans should assimilate into white culture" },
      { letter: "D", text: "did not value education for African Americans" },
      { letter: "E", text: "opposed all forms of political activism" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states Washington 'urged African Americans to accept social segregation while pursuing economic self-improvement.' Harlem Renaissance thinkers 'rejected' this accommodationist approach and 'demanded full social and political equality.'",
    difficulty: "easy",
  },
  {
    id: "exp-rc-11",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The Harlem Renaissance of the 1920s and early 1930s is typically characterized as a literary and artistic movement, but it was equally significant as a philosophical and political transformation. African American intellectuals of this era rejected the accommodationist approach of Booker T. Washington, who had urged African Americans to accept social segregation while pursuing economic self-improvement. Instead, thinkers like W.E.B. Du Bois, Alain Locke, and Zora Neale Hurston articulated a new vision of Black identity that demanded full social and political equality while celebrating distinctly African American cultural contributions.

Central to this new vision was what Locke called the "New Negro"—an identity that rejected the stereotypes and limitations imposed by white American society. The New Negro was sophisticated, educated, and artistically accomplished, but also connected to African heritage and the experiences of ordinary Black Americans. This dual consciousness, as Du Bois had theorized, was not a weakness to be overcome but a source of unique insight and creative power.

The movement's emphasis on cultural achievement as a path to equality was both its strength and its limitation. Writers and artists like Langston Hughes, Claude McKay, and Aaron Douglas produced works of lasting significance that challenged racist assumptions about Black intellectual and artistic capacity. However, the strategy of proving equality through cultural accomplishment implicitly accepted the terms of a debate it should have rejected—the idea that Black Americans needed to prove their worth rather than simply assert their rights.`,
    questionStem: "It can be inferred from the passage that the author would most likely agree with which one of the following statements?",
    answerChoices: [
      { letter: "A", text: "The Harlem Renaissance's cultural achievements were ultimately insignificant because of the movement's strategic flaws." },
      { letter: "B", text: "African American rights should have been asserted without any reference to cultural or intellectual achievements." },
      { letter: "C", text: "Du Bois's concept of dual consciousness was more politically effective than Locke's New Negro identity." },
      { letter: "D", text: "The Harlem Renaissance produced valuable cultural work but pursued a problematic strategy for achieving equality." },
      { letter: "E", text: "Booker T. Washington's accommodationist approach was more effective than the Harlem Renaissance's confrontational stance." },
    ],
    correctAnswer: "D",
    explanation: "The author describes the cultural works as 'of lasting significance' (valuable) while criticizing the strategy of proving equality through achievement as accepting terms that 'should have been rejected' (problematic). This balanced assessment matches D.",
    difficulty: "hard",
  },
  {
    id: "exp-rc-12",
    type: "vocabulary",
    sectionType: "reading-comprehension",
    stimulus: `The Harlem Renaissance of the 1920s and early 1930s is typically characterized as a literary and artistic movement, but it was equally significant as a philosophical and political transformation. African American intellectuals of this era rejected the accommodationist approach of Booker T. Washington, who had urged African Americans to accept social segregation while pursuing economic self-improvement. Instead, thinkers like W.E.B. Du Bois, Alain Locke, and Zora Neale Hurston articulated a new vision of Black identity that demanded full social and political equality while celebrating distinctly African American cultural contributions.

Central to this new vision was what Locke called the "New Negro"—an identity that rejected the stereotypes and limitations imposed by white American society. The New Negro was sophisticated, educated, and artistically accomplished, but also connected to African heritage and the experiences of ordinary Black Americans. This dual consciousness, as Du Bois had theorized, was not a weakness to be overcome but a source of unique insight and creative power.

The movement's emphasis on cultural achievement as a path to equality was both its strength and its limitation. Writers and artists like Langston Hughes, Claude McKay, and Aaron Douglas produced works of lasting significance that challenged racist assumptions about Black intellectual and artistic capacity. However, the strategy of proving equality through cultural accomplishment implicitly accepted the terms of a debate it should have rejected—the idea that Black Americans needed to prove their worth rather than simply assert their rights.`,
    questionStem: "In context, the word 'accommodationist' most nearly means",
    answerChoices: [
      { letter: "A", text: "hospitable and welcoming" },
      { letter: "B", text: "willing to accept existing conditions in exchange for incremental gains" },
      { letter: "C", text: "focused primarily on providing housing and shelter" },
      { letter: "D", text: "committed to revolutionary change" },
      { letter: "E", text: "seeking reconciliation through compromise on core principles" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains Washington's approach as 'accept[ing] social segregation while pursuing economic self-improvement.' This describes accepting the current unjust system while working for limited improvements within it—accommodation of the status quo for incremental gains.",
    difficulty: "medium",
  },

  // ADDITIONAL RC QUESTIONS
  {
    id: "exp-rc-13",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Cryptography, once the exclusive domain of military and diplomatic communications, has become essential to modern digital life. Every time a consumer makes an online purchase, sends a private message, or accesses a bank account, cryptographic protocols protect the transaction. This transformation from government secrecy tool to consumer technology has created profound tensions between privacy advocates and law enforcement agencies.

The current standard for protecting digital communications is end-to-end encryption, which ensures that only the sender and recipient can read a message. Not even the technology company providing the service can access the content. Law enforcement officials argue that this creates a "going dark" problem: criminals and terrorists can communicate beyond the reach of lawful surveillance, even with proper court authorization.

Privacy advocates counter that any backdoor access for law enforcement would inevitably be exploited by hackers and hostile foreign governments. The math of encryption is unforgiving: either everyone's communications are secure, or no one's are. Furthermore, they argue, encryption protects not just criminals but journalists, activists, abuse victims, and ordinary citizens in authoritarian countries.

This debate reflects a deeper philosophical question about the relationship between individual privacy and collective security. Democratic societies have long balanced these values, but digital technology has changed the terms of that balance in ways we are only beginning to understand.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "End-to-end encryption should be banned because it enables criminal activity." },
      { letter: "B", text: "The widespread adoption of encryption for consumer technology has created difficult trade-offs between privacy and law enforcement access." },
      { letter: "C", text: "Privacy advocates have convincingly refuted law enforcement concerns about encryption." },
      { letter: "D", text: "Cryptography has evolved from military applications to become essential for consumer protection." },
      { letter: "E", text: "Democratic societies have always effectively balanced privacy and security concerns." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces encryption's evolution to consumer use, presents both law enforcement concerns and privacy counterarguments, and frames this as reflecting deeper questions about privacy vs. security. The main point is the difficulty of the trade-offs, not a resolution.",
    difficulty: "medium",
  },
  {
    id: "exp-rc-14",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Cryptography, once the exclusive domain of military and diplomatic communications, has become essential to modern digital life. Every time a consumer makes an online purchase, sends a private message, or accesses a bank account, cryptographic protocols protect the transaction. This transformation from government secrecy tool to consumer technology has created profound tensions between privacy advocates and law enforcement agencies.

The current standard for protecting digital communications is end-to-end encryption, which ensures that only the sender and recipient can read a message. Not even the technology company providing the service can access the content. Law enforcement officials argue that this creates a "going dark" problem: criminals and terrorists can communicate beyond the reach of lawful surveillance, even with proper court authorization.

Privacy advocates counter that any backdoor access for law enforcement would inevitably be exploited by hackers and hostile foreign governments. The math of encryption is unforgiving: either everyone's communications are secure, or no one's are. Furthermore, they argue, encryption protects not just criminals but journalists, activists, abuse victims, and ordinary citizens in authoritarian countries.

This debate reflects a deeper philosophical question about the relationship between individual privacy and collective security. Democratic societies have long balanced these values, but digital technology has changed the terms of that balance in ways we are only beginning to understand.`,
    questionStem: "The passage implies that privacy advocates would most likely agree with which one of the following statements?",
    answerChoices: [
      { letter: "A", text: "Law enforcement should never be permitted to access digital communications" },
      { letter: "B", text: "Criminals' use of encryption is a price worth paying for secure communications for legitimate users" },
      { letter: "C", text: "Only authoritarian governments are concerned with surveillance of digital communications" },
      { letter: "D", text: "The 'going dark' problem can be solved through improved investigative techniques" },
      { letter: "E", text: "Encryption technology should be restricted to governmental use" },
    ],
    correctAnswer: "B",
    explanation: "Privacy advocates argue that weakening encryption would harm 'journalists, activists, abuse victims, and ordinary citizens.' Their position implies that accepting some criminal misuse is preferable to making everyone's communications vulnerable. This trade-off is implicit in their argument.",
    difficulty: "hard",
  },
  {
    id: "exp-rc-15",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `Cryptography, once the exclusive domain of military and diplomatic communications, has become essential to modern digital life. Every time a consumer makes an online purchase, sends a private message, or accesses a bank account, cryptographic protocols protect the transaction. This transformation from government secrecy tool to consumer technology has created profound tensions between privacy advocates and law enforcement agencies.

The current standard for protecting digital communications is end-to-end encryption, which ensures that only the sender and recipient can read a message. Not even the technology company providing the service can access the content. Law enforcement officials argue that this creates a "going dark" problem: criminals and terrorists can communicate beyond the reach of lawful surveillance, even with proper court authorization.

Privacy advocates counter that any backdoor access for law enforcement would inevitably be exploited by hackers and hostile foreign governments. The math of encryption is unforgiving: either everyone's communications are secure, or no one's are. Furthermore, they argue, encryption protects not just criminals but journalists, activists, abuse victims, and ordinary citizens in authoritarian countries.

This debate reflects a deeper philosophical question about the relationship between individual privacy and collective security. Democratic societies have long balanced these values, but digital technology has changed the terms of that balance in ways we are only beginning to understand.`,
    questionStem: "The author mentions 'the math of encryption is unforgiving' primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate technical expertise in cryptography" },
      { letter: "B", text: "criticize privacy advocates for oversimplifying a complex issue" },
      { letter: "C", text: "explain why creating selective access to encrypted communications is technically infeasible" },
      { letter: "D", text: "suggest that law enforcement's concerns are based on misunderstanding of technology" },
      { letter: "E", text: "argue that encryption should be made easier for ordinary users to understand" },
    ],
    correctAnswer: "C",
    explanation: "The 'unforgiving math' point supports the claim that 'either everyone's communications are secure, or no one's are.' The author uses this to explain why backdoor access can't be limited to law enforcement—the technical reality doesn't allow selective access.",
    difficulty: "medium",
  },
];
