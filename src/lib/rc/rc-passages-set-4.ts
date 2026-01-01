// Reading Comprehension Expansion Set 4
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - CRIMINAL PROCEDURE
// ============================================

const passage1 = `The exclusionary rule, which prohibits the use of illegally obtained evidence in criminal prosecutions, stands as one of the most consequential and controversial doctrines in American constitutional law. First applied to federal prosecutions in Weeks v. United States (1914) and extended to state courts in Mapp v. Ohio (1961), the rule serves as the primary remedy for violations of the Fourth Amendment's protection against unreasonable searches and seizures.

Proponents of the exclusionary rule offer several justifications. The deterrence rationale holds that suppressing illegally obtained evidence removes the incentive for police to violate constitutional rights; if evidence cannot be used, officers have nothing to gain from illegal searches. The judicial integrity rationale contends that courts should not become accomplices to constitutional violations by admitting their fruits. Some scholars additionally argue that exclusion is constitutionally required—that the Fourth Amendment right to be free from unreasonable searches would be meaningless without a remedy to enforce it.

Critics have challenged each of these justifications. Empirical research on deterrence has produced mixed results; police may be motivated by factors other than evidentiary value, and the rule imposes its costs—freeing guilty defendants—long after the constitutional violation occurs. The judicial integrity argument, critics contend, proves too much: if courts cannot touch tainted evidence, they also should not try defendants whose arrests resulted from constitutional violations. The constitutional argument faces the objection that the Fourth Amendment does not mention exclusion; other remedies, such as civil suits against offending officers, might equally vindicate the right.

The Supreme Court has significantly narrowed the exclusionary rule since Mapp. The good faith exception, established in United States v. Leon (1984), permits use of evidence obtained by officers reasonably relying on a warrant that later proves defective. The Court reasoned that exclusion could not deter police who believed they were acting lawfully. Subsequent decisions have expanded this exception and created others, limiting suppression to cases where deterrence benefits clearly outweigh the costs of letting guilty defendants go free.

This cost-benefit approach has drawn criticism for treating constitutional rights as mere interests to be balanced against law enforcement needs. Defenders respond that pragmatic balancing is inescapable: the Constitution protects both individual liberty and public safety, and courts must reconcile these sometimes competing values.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp4-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The exclusionary rule should be abolished because it allows guilty defendants to go free." },
      { letter: "B", text: "The exclusionary rule, which bars illegally obtained evidence, has been both defended and criticized, and has been significantly narrowed by the Supreme Court through various exceptions." },
      { letter: "C", text: "The deterrence rationale is the only valid justification for the exclusionary rule." },
      { letter: "D", text: "Mapp v. Ohio represents the most important Supreme Court decision in American history." },
      { letter: "E", text: "Civil suits against police officers would be more effective than the exclusionary rule." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the exclusionary rule's origins, various justifications and criticisms, and the Supreme Court's narrowing of the rule through exceptions. Answer B captures this balanced treatment.",
    difficulty: "medium",
    passageId: "rc-exp4-p1",
  },
  {
    id: "rc-exp4-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the good faith exception permits use of evidence when",
    answerChoices: [
      { letter: "A", text: "officers obtain a valid warrant before conducting a search" },
      { letter: "B", text: "officers reasonably rely on a warrant that later proves defective" },
      { letter: "C", text: "the defendant is clearly guilty of the crime charged" },
      { letter: "D", text: "the constitutional violation did not cause significant harm" },
      { letter: "E", text: "the evidence would have been discovered eventually through legal means" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the good faith exception 'permits use of evidence obtained by officers reasonably relying on a warrant that later proves defective.'",
    difficulty: "easy",
    passageId: "rc-exp4-p1",
  },
  {
    id: "rc-exp4-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, proponents of the judicial integrity rationale would most likely argue that",
    answerChoices: [
      { letter: "A", text: "courts have no role in enforcing constitutional rights" },
      { letter: "B", text: "courts should not validate constitutional violations by using their products" },
      { letter: "C", text: "police deterrence is the only purpose of the exclusionary rule" },
      { letter: "D", text: "good faith exceptions are appropriate in all cases" },
      { letter: "E", text: "civil suits are preferable to exclusion" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the judicial integrity rationale as contending 'that courts should not become accomplices to constitutional violations by admitting their fruits.'",
    difficulty: "medium",
    passageId: "rc-exp4-p1",
  },
  {
    id: "rc-exp4-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions United States v. Leon primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Supreme Court's approach to constitutional rights" },
      { letter: "B", text: "illustrate how the Court has narrowed the exclusionary rule" },
      { letter: "C", text: "argue that the exclusionary rule should be expanded" },
      { letter: "D", text: "compare American and European legal systems" },
      { letter: "E", text: "defend the original Mapp v. Ohio decision" },
    ],
    correctAnswer: "B",
    explanation: "Leon is cited in the paragraph discussing how 'The Supreme Court has significantly narrowed the exclusionary rule since Mapp,' establishing 'the good faith exception' that exemplifies this narrowing trend.",
    difficulty: "medium",
    passageId: "rc-exp4-p1",
  },
  {
    id: "rc-exp4-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Critics of the cost-benefit approach to the exclusionary rule, as described in the final paragraph, would most likely agree that",
    answerChoices: [
      { letter: "A", text: "constitutional rights should be treated as absolute rather than as interests to be balanced" },
      { letter: "B", text: "law enforcement needs should always take priority over individual liberty" },
      { letter: "C", text: "the exclusionary rule should be abolished entirely" },
      { letter: "D", text: "good faith exceptions should be expanded" },
      { letter: "E", text: "empirical research on deterrence is irrelevant" },
    ],
    correctAnswer: "A",
    explanation: "The passage states critics object to 'treating constitutional rights as mere interests to be balanced against law enforcement needs.' This suggests they believe rights should not be subject to such balancing.",
    difficulty: "medium",
    passageId: "rc-exp4-p1",
  },
  {
    id: "rc-exp4-006",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's presentation of the debate over the exclusionary rule can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of abolishing the rule" },
      { letter: "B", text: "dismissive of critics' arguments" },
      { letter: "C", text: "balanced and explanatory, presenting multiple perspectives" },
      { letter: "D", text: "nostalgic for the pre-Mapp era" },
      { letter: "E", text: "enthusiastically supportive of the good faith exception" },
    ],
    correctAnswer: "C",
    explanation: "The author presents justifications and criticisms of the exclusionary rule without advocating for either position, then describes how courts have balanced competing values. This reflects balanced, explanatory treatment.",
    difficulty: "medium",
    passageId: "rc-exp4-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - ECOLOGY
// ============================================

const passage2 = `The concept of ecosystem services—the benefits that natural systems provide to human societies—has fundamentally reshaped environmental policy debates over the past three decades. By framing nature's contributions in economic terms, proponents argue, the ecosystem services approach makes environmental protection legible to policymakers and provides a rational basis for land use decisions. Critics contend that this commodification of nature reflects problematic assumptions and may ultimately undermine conservation goals.

The ecosystem services framework categorizes nature's benefits into four types. Provisioning services include tangible goods like food, freshwater, timber, and fiber. Regulating services encompass nature's role in controlling climate, purifying water, pollinating crops, and controlling floods. Cultural services involve non-material benefits such as recreation, aesthetic appreciation, and spiritual fulfillment. Supporting services—such as nutrient cycling and soil formation—underpin all other categories.

Efforts to quantify these services in monetary terms have produced staggering figures. A widely cited 1997 study estimated the value of global ecosystem services at $33 trillion annually—nearly twice the global gross domestic product at the time. More recent assessments have produced even higher estimates. Proponents argue that such figures demonstrate the enormous economic stakes of environmental degradation and make a compelling case for conservation investment.

Critics raise several objections to monetizing nature. Some argue that placing dollar values on ecosystems inevitably understates their true importance, since many services are literally priceless—essential preconditions for human existence that cannot be substituted at any cost. Others worry that monetization encourages trade-offs that treat nature as expendable if sufficient compensation is paid: if a wetland is worth X dollars in flood control services, the logic goes, destroying it becomes acceptable as long as someone pays X dollars.

Perhaps most fundamentally, critics question whether economic framing can motivate the kinds of changes actually needed. The environmental crisis, they argue, stems from an economic system that systematically undervalues nature; responding by extending economic logic to more natural systems may reinforce rather than challenge that underlying problem. Alternative approaches emphasize nature's intrinsic value, the rights of non-human species, or obligations to future generations—ethical frameworks that resist reduction to cost-benefit calculation.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp4-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Ecosystem services are worth trillions of dollars annually." },
      { letter: "B", text: "The ecosystem services framework has reshaped environmental policy by framing nature in economic terms, though this approach faces significant criticism from multiple directions." },
      { letter: "C", text: "Monetizing nature is essential for effective environmental protection." },
      { letter: "D", text: "Critics of the ecosystem services approach have successfully prevented its adoption." },
      { letter: "E", text: "Regulating services are more important than provisioning services." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the ecosystem services framework, its categories, efforts at valuation, and various criticisms. Answer B captures this comprehensive treatment of both the approach and its critiques.",
    difficulty: "medium",
    passageId: "rc-exp4-p2",
  },
  {
    id: "rc-exp4-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the ecosystem services framework categorizes nature's benefits into",
    answerChoices: [
      { letter: "A", text: "two types: economic and non-economic" },
      { letter: "B", text: "four types: provisioning, regulating, cultural, and supporting services" },
      { letter: "C", text: "three types: environmental, social, and economic" },
      { letter: "D", text: "multiple types that cannot be systematically organized" },
      { letter: "E", text: "five types: provisioning, regulating, cultural, supporting, and recreational" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly identifies 'four types': 'Provisioning services,' 'Regulating services,' 'Cultural services,' and 'Supporting services.'",
    difficulty: "easy",
    passageId: "rc-exp4-p2",
  },
  {
    id: "rc-exp4-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics who argue that monetization understates nature's importance would most likely agree that",
    answerChoices: [
      { letter: "A", text: "ecosystem services have no economic value" },
      { letter: "B", text: "some natural services are essential in ways that cannot be captured by any dollar amount" },
      { letter: "C", text: "the 1997 study overestimated nature's value" },
      { letter: "D", text: "provisioning services are the most important category" },
      { letter: "E", text: "trade-offs between development and conservation are appropriate" },
    ],
    correctAnswer: "B",
    explanation: "The passage states these critics argue 'many services are literally priceless—essential preconditions for human existence that cannot be substituted at any cost.' This indicates some services transcend monetary valuation.",
    difficulty: "medium",
    passageId: "rc-exp4-p2",
  },
  {
    id: "rc-exp4-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions the 1997 study estimating ecosystem services at $33 trillion primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the methodology of economic valuation" },
      { letter: "B", text: "illustrate efforts to quantify nature's contributions in monetary terms" },
      { letter: "C", text: "argue that environmental protection is economically justified" },
      { letter: "D", text: "compare ecosystem services to manufacturing output" },
      { letter: "E", text: "support the view that nature is priceless" },
    ],
    correctAnswer: "B",
    explanation: "The 1997 study appears in the paragraph discussing 'Efforts to quantify these services in monetary terms.' It illustrates such quantification efforts rather than advocating for a particular position.",
    difficulty: "medium",
    passageId: "rc-exp4-p2",
  },
  {
    id: "rc-exp4-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the final paragraph, critics who question economic framing most likely believe that",
    answerChoices: [
      { letter: "A", text: "economic analysis should be applied more extensively to natural systems" },
      { letter: "B", text: "the environmental crisis arises from an economic system that already undervalues nature" },
      { letter: "C", text: "cost-benefit analysis is the best tool for environmental decisions" },
      { letter: "D", text: "future generations have no claims on present resources" },
      { letter: "E", text: "non-human species have no rights worth considering" },
    ],
    correctAnswer: "B",
    explanation: "The passage states these critics argue 'The environmental crisis...stems from an economic system that systematically undervalues nature' and that extending economic logic may 'reinforce rather than challenge that underlying problem.'",
    difficulty: "medium",
    passageId: "rc-exp4-p2",
  },
  {
    id: "rc-exp4-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the concern mentioned in paragraph four about trade-offs?",
    answerChoices: [
      { letter: "A", text: "Developers have paid to destroy wetlands after calculating that compensation costs were less than development profits." },
      { letter: "B", text: "Environmental groups have used ecosystem service valuations to prevent development projects." },
      { letter: "C", text: "The economic value of wetlands has increased over time." },
      { letter: "D", text: "Regulating services are difficult to measure precisely." },
      { letter: "E", text: "Cultural services are valued more highly than provisioning services." },
    ],
    correctAnswer: "A",
    explanation: "The concern is that monetization 'encourages trade-offs that treat nature as expendable if sufficient compensation is paid.' Evidence of developers actually paying to destroy wetlands because compensation was affordable would directly support this concern.",
    difficulty: "hard",
    passageId: "rc-exp4-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - PHILOSOPHY
// ============================================

const passage3 = `The problem of consciousness—explaining how and why physical processes in the brain give rise to subjective experience—remains one of the deepest puzzles in philosophy and science. Philosopher David Chalmers influentially distinguished the "easy" problems of consciousness from the "hard" problem. The easy problems, though scientifically challenging, involve explaining how the brain performs various functions: discriminating stimuli, reporting mental states, focusing attention. The hard problem asks why these processes are accompanied by subjective experience at all—why there is "something it is like" to be a conscious being.

Various philosophical approaches have attempted to address or dissolve the hard problem. Physicalist theories hold that consciousness can ultimately be explained in terms of physical processes, even if we do not yet understand how. Identity theorists argue that conscious states simply are brain states; functionalists contend that consciousness depends on the computational organization of mental processes rather than their physical substrate. These views face the challenge of explaining why certain physical or functional arrangements produce subjective experience rather than proceeding "in the dark."

Dualist approaches maintain that consciousness cannot be reduced to physical processes. Property dualism holds that while the world is fundamentally physical, consciousness involves non-physical properties that emerge from physical systems. Substance dualism, associated with Descartes, posits that mind and body are fundamentally different kinds of things. These views face challenges in explaining how non-physical consciousness could interact causally with the physical brain and why consciousness seems to depend on specific physical conditions.

Eliminativists take a more radical approach, arguing that consciousness as ordinarily conceived does not exist. Daniel Dennett, for instance, argues that the intuitions giving rise to the hard problem are systematically misleading. There is no inner theater where a unified self watches the play of experience; rather, multiple parallel processes create the illusion of unified consciousness. What needs explaining is not the existence of subjective experience but our confused beliefs about its nature.

Mysterianists like Colin McGinn suggest that human cognitive limitations may prevent us from ever solving the consciousness problem. Just as a chimpanzee cannot grasp quantum mechanics, humans may lack the conceptual resources to understand how consciousness arises from matter. This view offers a humbling alternative to both confident physicalism and dualism, suggesting that some questions may lie permanently beyond human comprehension.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp4-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The hard problem of consciousness has been definitively solved by physicalist theories." },
      { letter: "B", text: "The problem of consciousness has generated diverse philosophical approaches, including physicalism, dualism, eliminativism, and mysterianism, each with distinctive strengths and challenges." },
      { letter: "C", text: "Eliminativism is the only philosophically defensible position on consciousness." },
      { letter: "D", text: "Chalmers proved that the easy problems are more important than the hard problem." },
      { letter: "E", text: "Property dualism and substance dualism are identical theories." },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the hard problem of consciousness, then surveys various philosophical approaches (physicalism, dualism, eliminativism, mysterianism), noting challenges each faces. Answer B captures this comprehensive survey.",
    difficulty: "medium",
    passageId: "rc-exp4-p3",
  },
  {
    id: "rc-exp4-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Chalmers's 'hard problem' of consciousness asks",
    answerChoices: [
      { letter: "A", text: "how the brain discriminates between different stimuli" },
      { letter: "B", text: "why physical processes are accompanied by subjective experience" },
      { letter: "C", text: "whether computers can be conscious" },
      { letter: "D", text: "how consciousness evolved" },
      { letter: "E", text: "whether animals have consciousness" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The hard problem asks why these processes are accompanied by subjective experience at all—why there is \"something it is like\" to be a conscious being.'",
    difficulty: "easy",
    passageId: "rc-exp4-p3",
  },
  {
    id: "rc-exp4-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, functionalists would most likely agree that",
    answerChoices: [
      { letter: "A", text: "consciousness depends on having a brain made of biological neurons" },
      { letter: "B", text: "consciousness depends on computational organization rather than physical material" },
      { letter: "C", text: "consciousness cannot be explained scientifically" },
      { letter: "D", text: "the hard problem proves dualism is correct" },
      { letter: "E", text: "consciousness does not exist" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'functionalists contend that consciousness depends on the computational organization of mental processes rather than their physical substrate.' This indicates consciousness could exist in systems with the right organization regardless of material.",
    difficulty: "medium",
    passageId: "rc-exp4-p3",
  },
  {
    id: "rc-exp4-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Dennett's argument primarily in order to",
    answerChoices: [
      { letter: "A", text: "defend dualism against physicalist criticism" },
      { letter: "B", text: "illustrate the eliminativist approach that challenges ordinary intuitions about consciousness" },
      { letter: "C", text: "support the existence of the hard problem" },
      { letter: "D", text: "explain why physicalism has failed" },
      { letter: "E", text: "argue that mysterianism is correct" },
    ],
    correctAnswer: "B",
    explanation: "Dennett is cited in the paragraph on eliminativism, which 'take[s] a more radical approach.' His argument that intuitions about consciousness are 'systematically misleading' exemplifies the eliminativist challenge to ordinary conceptions of consciousness.",
    difficulty: "medium",
    passageId: "rc-exp4-p3",
  },
  {
    id: "rc-exp4-017",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, mysterianists like Colin McGinn would most likely respond to continued failures to solve the hard problem by arguing that",
    answerChoices: [
      { letter: "A", text: "we should try harder using existing methods" },
      { letter: "B", text: "the problem may be permanently beyond human cognitive capacities" },
      { letter: "C", text: "consciousness does not really exist" },
      { letter: "D", text: "dualism must be correct" },
      { letter: "E", text: "computers will eventually solve the problem" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes McGinn's view that 'humans may lack the conceptual resources to understand how consciousness arises from matter' and that 'some questions may lie permanently beyond human comprehension.'",
    difficulty: "medium",
    passageId: "rc-exp4-p3",
  },
  {
    id: "rc-exp4-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A problem is introduced, multiple approaches to addressing it are surveyed, and the author's preferred solution is defended." },
      { letter: "B", text: "A problem is introduced, and multiple philosophical approaches with their respective strengths and challenges are presented." },
      { letter: "C", text: "Two competing theories are compared and reconciled." },
      { letter: "D", text: "A historical development is traced from ancient to modern philosophy." },
      { letter: "E", text: "An experiment is described and its implications are analyzed." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces the hard problem, then surveys physicalism, dualism, eliminativism, and mysterianism, noting challenges each faces without advocating for a particular solution.",
    difficulty: "hard",
    passageId: "rc-exp4-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - PSYCHOLOGY
// ============================================

const passage4 = `The replication crisis in psychology—the discovery that many influential findings fail to replicate when experiments are repeated—has prompted fundamental reassessment of research practices in the field. A landmark 2015 study by the Open Science Collaboration attempted to replicate 100 psychology experiments published in leading journals; only 36 percent produced statistically significant results in the same direction as the original studies. This finding shook a discipline that had prided itself on scientific rigor.

Several factors have been identified as contributing to the crisis. Publication bias favors novel, statistically significant findings over null results or replications, creating incentives to report only "successful" experiments. Researcher degrees of freedom—the many decisions researchers make about data collection, analysis, and reporting—can be exploited, consciously or unconsciously, to achieve desired results. Small sample sizes, common in psychology, increase the likelihood that apparent effects are statistical flukes rather than genuine phenomena.

Questionable research practices (QRPs), while falling short of outright fraud, may be widespread. These include selectively reporting only those outcomes that reached significance, continuing data collection until results become significant, hypothesizing after results are known (HARKing), and excluding data points that would undermine the hypothesis. Surveys suggest that many researchers have engaged in at least some of these practices, often without recognizing them as problematic.

The replication crisis has catalyzed significant reforms. Pre-registration of studies—publicly committing to hypotheses, methods, and analysis plans before data collection—limits researcher degrees of freedom. Registered reports, in which journals commit to publish studies based on their methodology before results are known, address publication bias. Large-scale replication projects have become more common and more valued. These changes are gradually shifting incentive structures toward more reliable science.

However, some scholars argue that the reform movement may overcorrect. Emphasis on exact replication may undervalue conceptual replications that test the same hypothesis through different methods. Pre-registration may be less suitable for exploratory research that generates hypotheses rather than testing them. Statistical significance, the target of much criticism, may be replaced by other potentially flawed standards. The crisis has undoubtedly exposed real problems, but designing a scientific culture that balances reliability with innovation remains an ongoing challenge.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp4-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that psychology should be abandoned as a scientific discipline" },
      { letter: "B", text: "describe the replication crisis in psychology, its causes, reform responses, and remaining debates" },
      { letter: "C", text: "defend questionable research practices as necessary for scientific progress" },
      { letter: "D", text: "compare psychology unfavorably to other sciences" },
      { letter: "E", text: "advocate for abolishing statistical significance testing" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the replication crisis, identifies contributing factors, discusses reforms, and notes ongoing debates about potential overcorrection. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp4-p4",
  },
  {
    id: "rc-exp4-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the 2015 Open Science Collaboration study found that",
    answerChoices: [
      { letter: "A", text: "all psychology experiments replicate successfully" },
      { letter: "B", text: "approximately 36 percent of replicated experiments produced statistically significant results in the same direction as originals" },
      { letter: "C", text: "publication bias has been eliminated" },
      { letter: "D", text: "small sample sizes do not affect replication" },
      { letter: "E", text: "questionable research practices are extremely rare" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that in the study 'only 36 percent produced statistically significant results in the same direction as the original studies.'",
    difficulty: "easy",
    passageId: "rc-exp4-p4",
  },
  {
    id: "rc-exp4-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, HARKing is problematic because it",
    answerChoices: [
      { letter: "A", text: "involves collecting too much data" },
      { letter: "B", text: "presents post-hoc explanations as if they were pre-specified predictions" },
      { letter: "C", text: "requires too many participants" },
      { letter: "D", text: "is explicitly fraudulent" },
      { letter: "E", text: "prevents publication of research" },
    ],
    correctAnswer: "B",
    explanation: "HARKing is described as 'hypothesizing after results are known,' which the passage lists among questionable research practices that exploit researcher degrees of freedom. It presents after-the-fact hypotheses as if they were original predictions.",
    difficulty: "medium",
    passageId: "rc-exp4-p4",
  },
  {
    id: "rc-exp4-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses registered reports primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize journal publication practices" },
      { letter: "B", text: "illustrate a reform designed to address publication bias" },
      { letter: "C", text: "argue that all research should be exploratory" },
      { letter: "D", text: "explain why the replication crisis occurred" },
      { letter: "E", text: "compare psychology journals to journals in other fields" },
    ],
    correctAnswer: "B",
    explanation: "Registered reports are mentioned in the paragraph on reforms. They address publication bias by having 'journals commit to publish studies based on their methodology before results are known.'",
    difficulty: "medium",
    passageId: "rc-exp4-p4",
  },
  {
    id: "rc-exp4-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the final paragraph, some scholars worry that reform efforts may",
    answerChoices: [
      { letter: "A", text: "fail to address any of the problems causing the crisis" },
      { letter: "B", text: "create new problems while solving existing ones" },
      { letter: "C", text: "increase the prevalence of questionable research practices" },
      { letter: "D", text: "make psychology more popular with the public" },
      { letter: "E", text: "reduce funding for psychological research" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph notes that reforms 'may overcorrect,' undervalue conceptual replications, be unsuitable for exploratory research, and replace problematic standards with 'other potentially flawed standards'—suggesting new problems may emerge.",
    difficulty: "medium",
    passageId: "rc-exp4-p4",
  },
  {
    id: "rc-exp4-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the reforms described in the passage can best be characterized as",
    answerChoices: [
      { letter: "A", text: "entirely dismissive" },
      { letter: "B", text: "uncritically enthusiastic" },
      { letter: "C", text: "generally supportive while acknowledging potential limitations" },
      { letter: "D", text: "nostalgic for pre-crisis practices" },
      { letter: "E", text: "hostile to all methodological changes" },
    ],
    correctAnswer: "C",
    explanation: "The author describes reforms positively as 'shifting incentive structures toward more reliable science' while also noting concerns about overcorrection and remaining challenges. This reflects qualified support.",
    difficulty: "medium",
    passageId: "rc-exp4-p4",
  },
];

// Export all RC questions from Set 4
export const rcQuestionsExpSet4: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet4 = {
  passage1: { id: "rc-exp4-p1", content: passage1, topic: "law", title: "The Exclusionary Rule" },
  passage2: { id: "rc-exp4-p2", content: passage2, topic: "natural-sciences", title: "Ecosystem Services" },
  passage3: { id: "rc-exp4-p3", content: passage3, topic: "humanities", title: "The Problem of Consciousness" },
  passage4: { id: "rc-exp4-p4", content: passage4, topic: "social-sciences", title: "Psychology's Replication Crisis" },
};
