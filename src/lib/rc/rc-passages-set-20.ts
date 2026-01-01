// Reading Comprehension Expansion Set 20
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - BANKRUPTCY LAW AND CREDITOR RIGHTS
// ============================================

const passage1 = `Bankruptcy law occupies a unique position in the American legal landscape, balancing competing interests between debtors seeking relief and creditors pursuing legitimate claims. The fundamental tension underlying bankruptcy jurisprudence pits the policy of providing debtors with a "fresh start" against creditors' contractual and property rights. How courts and legislators resolve this tension reveals much about society's evolving attitudes toward debt, economic failure, and individual responsibility.

The Bankruptcy Code establishes a priority system that determines the order in which creditors receive payment from a debtor's estate. Secured creditors—those whose claims are backed by collateral—generally enjoy superior rights because they hold property interests that predate the bankruptcy filing. Unsecured creditors, by contrast, may receive only a fraction of their claims or nothing at all, depending on the assets available after secured claims and administrative expenses are satisfied. This hierarchy reflects the principle that creditors who bargained for security should not be subordinated to those who extended credit without such protections.

The automatic stay, triggered immediately upon a bankruptcy filing, halts all collection efforts against the debtor and the debtor's property. This powerful injunction prevents secured creditors from repossessing collateral and unsecured creditors from pursuing lawsuits or garnishments. While the automatic stay provides crucial breathing room for debtors to reorganize their affairs, critics argue it can be weaponized by debtors who file strategically to delay legitimate creditors. Courts have developed doctrines to address abusive filings, including dismissal for bad faith and relief from stay when creditors' interests are inadequately protected.

The treatment of executory contracts in bankruptcy presents particularly complex challenges. When a debtor has ongoing contractual obligations, the bankruptcy trustee may assume the contract (continuing performance and curing defaults) or reject it (treating the breach as a prepetition claim). This power fundamentally alters the contractual relationship, allowing debtors to escape unfavorable obligations while retaining beneficial ones. Counterparties to rejected contracts often recover far less than they would have received under state contract law, raising questions about whether bankruptcy policy should override ordinary contractual expectations.

Recent legislative reforms have restricted access to bankruptcy relief in ways that reflect shifting attitudes toward debtor protection. The Bankruptcy Abuse Prevention and Consumer Protection Act of 2005 introduced means testing to determine whether individual debtors qualify for Chapter 7 liquidation or must pursue a repayment plan under Chapter 13. Proponents argued these reforms addressed abuse by debtors who could afford to repay their debts, while critics contended they erected barriers that prevented legitimate debtors from obtaining relief. The ongoing debate about bankruptcy reform reflects broader societal disagreements about the appropriate balance between debtor rehabilitation and creditor rights.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp20-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Bankruptcy Abuse Prevention and Consumer Protection Act of 2005 successfully eliminated all bankruptcy abuse." },
      { letter: "B", text: "Bankruptcy law involves ongoing tension between providing debtor relief and protecting creditor rights, with various mechanisms reflecting how this balance is struck." },
      { letter: "C", text: "Secured creditors should always receive full payment before any other claims are addressed in bankruptcy proceedings." },
      { letter: "D", text: "The automatic stay is the most controversial aspect of bankruptcy law and should be eliminated." },
      { letter: "E", text: "Executory contracts are the primary focus of modern bankruptcy jurisprudence." },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically examines how bankruptcy law balances debtor relief against creditor rights through various mechanisms including the priority system, automatic stay, executory contract treatment, and legislative reforms. Answer B captures this central theme of competing interests and how the law mediates between them.",
    wrongAnswerExplanations: {
      "A": "The passage presents the 2005 Act as controversial with ongoing debate, not as having 'successfully eliminated' abuse.",
      "C": "While secured creditors have priority, the passage describes a more nuanced system and does not advocate for any particular position.",
      "D": "The passage discusses the automatic stay as one of several mechanisms, not as the most controversial aspect, and does not advocate for its elimination.",
      "E": "Executory contracts are discussed as one complex area, not as the 'primary focus' of bankruptcy jurisprudence."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p1",
  },
  {
    id: "rc-exp20-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the automatic stay in bankruptcy proceedings",
    answerChoices: [
      { letter: "A", text: "applies only to unsecured creditors" },
      { letter: "B", text: "halts all collection efforts against the debtor immediately upon filing" },
      { letter: "C", text: "was eliminated by the 2005 bankruptcy reforms" },
      { letter: "D", text: "provides more protection to creditors than to debtors" },
      { letter: "E", text: "only affects lawsuits and has no impact on repossession of collateral" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The automatic stay, triggered immediately upon a bankruptcy filing, halts all collection efforts against the debtor and the debtor's property.' This directly supports answer B.",
    wrongAnswerExplanations: {
      "A": "The passage states the stay 'prevents secured creditors from repossessing collateral and unsecured creditors from pursuing lawsuits,' indicating it applies to both types.",
      "C": "The passage does not indicate the automatic stay was eliminated; the 2005 reforms addressed means testing and access to Chapter 7.",
      "D": "The passage describes the stay as providing 'crucial breathing room for debtors,' suggesting it primarily protects debtors.",
      "E": "The passage explicitly states the stay 'prevents secured creditors from repossessing collateral,' contradicting this answer."
    },
    difficulty: "easy",
    passageId: "rc-exp20-p1",
  },
  {
    id: "rc-exp20-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, counterparties to rejected executory contracts would most likely view the bankruptcy system as",
    answerChoices: [
      { letter: "A", text: "providing them with greater protections than state contract law" },
      { letter: "B", text: "treating them more favorably than secured creditors" },
      { letter: "C", text: "potentially undermining the contractual rights they would otherwise enjoy" },
      { letter: "D", text: "having no impact on their ability to enforce contractual obligations" },
      { letter: "E", text: "fully compensating them for any losses resulting from rejection" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Counterparties to rejected contracts often recover far less than they would have received under state contract law,' which suggests these parties would view the system as undermining their contractual rights. This inference is further supported by the passage's note that this 'raising questions about whether bankruptcy policy should override ordinary contractual expectations.'",
    wrongAnswerExplanations: {
      "A": "The passage explicitly states counterparties recover 'far less than they would have received under state contract law,' indicating less protection, not more.",
      "B": "The priority system places secured creditors in a superior position; counterparties to rejected contracts become unsecured creditors.",
      "D": "The passage explicitly describes how the trustee's power to reject contracts 'fundamentally alters the contractual relationship.'",
      "E": "The passage states counterparties 'often recover far less' than under state law, indicating they are not fully compensated."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p1",
  },
  {
    id: "rc-exp20-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the principle that 'creditors who bargained for security should not be subordinated to those who extended credit without such protections' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the current priority system as unfair to unsecured creditors" },
      { letter: "B", text: "explain the rationale underlying the hierarchy of creditor claims in bankruptcy" },
      { letter: "C", text: "argue that all creditors should receive equal treatment in bankruptcy proceedings" },
      { letter: "D", text: "suggest that secured creditors rarely receive full payment in bankruptcy cases" },
      { letter: "E", text: "advocate for legislative reform to the Bankruptcy Code's priority provisions" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents this principle immediately after describing the priority system, stating 'This hierarchy reflects the principle that creditors who bargained for security should not be subordinated.' The author uses this principle to explain why secured creditors receive priority, not to criticize or advocate for change.",
    wrongAnswerExplanations: {
      "A": "The author presents this principle as an explanation, not a criticism. The passage maintains a neutral, analytical tone.",
      "C": "This principle explains differential treatment based on security, which is the opposite of arguing for equal treatment.",
      "D": "The principle relates to the order of payment, not whether secured creditors receive full payment.",
      "E": "The author does not advocate for any position; the principle is presented as the rationale for existing law."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p1",
  },
  {
    id: "rc-exp20-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the competing perspectives on bankruptcy reform is best described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of expanded debtor protections" },
      { letter: "B", text: "dismissive of creditor concerns as economically unsophisticated" },
      { letter: "C", text: "analytically neutral, presenting multiple viewpoints without endorsing any" },
      { letter: "D", text: "hostile toward the 2005 legislative reforms" },
      { letter: "E", text: "enthusiastically supportive of stricter means testing requirements" },
    ],
    correctAnswer: "C",
    explanation: "Throughout the passage, the author presents competing perspectives—debtor relief versus creditor rights, proponents versus critics of the 2005 reforms—without taking sides. The passage describes 'ongoing debate' and 'broader societal disagreements' in neutral terms, reflecting an analytical rather than advocacy-oriented approach.",
    wrongAnswerExplanations: {
      "A": "The author presents both debtor and creditor perspectives neutrally without advocating for either side.",
      "B": "The author presents creditor concerns as legitimate, discussing how 'critics argue' the automatic stay can be 'weaponized.'",
      "D": "The author presents both proponents' and critics' views of the 2005 reforms without expressing personal hostility.",
      "E": "The author describes debate about means testing without expressing support for stricter requirements."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p1",
  },
  {
    id: "rc-exp20-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the position of critics of the 2005 bankruptcy reforms as described in the passage?",
    answerChoices: [
      { letter: "A", text: "Studies show that most bankruptcy filers prior to 2005 had the financial means to repay significant portions of their debts." },
      { letter: "B", text: "Research indicates that bankruptcy filing rates among financially distressed households decreased substantially after 2005, even as consumer debt levels increased." },
      { letter: "C", text: "Surveys reveal that most creditors believe the 2005 reforms appropriately balanced debtor and creditor interests." },
      { letter: "D", text: "Data demonstrates that the administrative costs of means testing are minimal compared to the savings achieved." },
      { letter: "E", text: "Analysis shows that Chapter 13 repayment plans have higher success rates than Chapter 7 liquidations for debtors." },
    ],
    correctAnswer: "B",
    explanation: "Critics of the 2005 reforms 'contended they erected barriers that prevented legitimate debtors from obtaining relief.' If bankruptcy filings decreased among financially distressed households after 2005 while debt levels increased, this would support the critics' claim that the reforms prevented legitimate debtors from obtaining needed relief, rather than merely screening out those who could afford to repay.",
    wrongAnswerExplanations: {
      "A": "This would support proponents who argued the reforms addressed abuse by debtors who could afford to repay, not critics.",
      "C": "This would undermine critics' position by suggesting the reforms achieved an appropriate balance.",
      "D": "This would counter a potential argument about implementation costs but not address the core criticism about barriers to relief.",
      "E": "This addresses the relative merits of different bankruptcy chapters but not whether reforms prevented legitimate access."
    },
    difficulty: "hard",
    passageId: "rc-exp20-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
// ============================================

const passage2 = `Artificial intelligence has progressed from a theoretical curiosity to a transformative technology through advances in machine learning, particularly deep learning using neural networks. Unlike traditional programming, where human developers explicitly specify rules for every decision, machine learning systems derive patterns from data. This shift from rule-based to data-driven computation has enabled breakthroughs in image recognition, natural language processing, and strategic game playing that seemed impossible a decade ago.

Neural networks, inspired loosely by biological neurons, consist of interconnected nodes organized in layers. Information flows through the network, with each connection weighted to represent its importance. During training, the network adjusts these weights to minimize errors between its predictions and known correct answers—a process called gradient descent. Deep learning extends this approach by stacking many layers, allowing the network to build hierarchical representations: early layers might detect edges in an image, intermediate layers combine edges into shapes, and later layers recognize objects.

The remarkable performance of modern AI systems has been enabled by three converging factors: vast datasets for training, powerful computing hardware (particularly graphics processing units adapted for neural network calculations), and algorithmic innovations that allow networks to learn more effectively. The availability of massive datasets—millions of labeled images, billions of words of text—provides the examples from which patterns emerge. Without sufficient data, even sophisticated algorithms cannot generalize beyond their training examples.

Despite impressive achievements, current AI systems exhibit fundamental limitations that distinguish them from human intelligence. These systems excel at pattern matching within domains resembling their training data but struggle with novel situations requiring common-sense reasoning or causal understanding. A system trained to classify images may fail catastrophically when presented with slight perturbations invisible to humans—a vulnerability known as adversarial examples. Moreover, neural networks operate as "black boxes," making decisions through processes that resist human interpretation. This opacity raises concerns when AI systems are deployed in high-stakes contexts like medical diagnosis or criminal sentencing.

The development of artificial general intelligence—systems matching human cognitive flexibility across diverse domains—remains elusive despite predictions of imminent achievement dating back decades. Whether current approaches based on pattern recognition from data can ever yield genuine understanding, or whether fundamentally different architectures are required, divides researchers. Some argue that sufficient scale and data will eventually produce general intelligence, while others contend that machine learning as currently conceived will always lack the causal reasoning, embodied experience, and world knowledge that humans acquire through development and culture.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp20-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Machine learning has enabled remarkable AI advances through data-driven pattern recognition, but fundamental limitations distinguish current systems from human intelligence, and whether these approaches can achieve general intelligence remains uncertain." },
      { letter: "B", text: "Neural networks are strictly superior to traditional rule-based programming in all computing applications." },
      { letter: "C", text: "Artificial general intelligence has already been achieved through deep learning techniques." },
      { letter: "D", text: "The primary obstacle to AI development is the lack of sufficiently powerful computing hardware." },
      { letter: "E", text: "Adversarial examples prove that neural networks cannot be used in any practical applications." },
    ],
    correctAnswer: "A",
    explanation: "The passage traces AI's development through machine learning, explains how neural networks function, discusses enabling factors, describes fundamental limitations compared to human intelligence, and examines debates about achieving general intelligence. Answer A captures this comprehensive treatment of advances, limitations, and uncertainty about future capabilities.",
    wrongAnswerExplanations: {
      "B": "The passage does not claim neural networks are superior in 'all computing applications'; it discusses specific achievements and limitations.",
      "C": "The passage explicitly states that artificial general intelligence 'remains elusive,' directly contradicting this answer.",
      "D": "The passage identifies powerful hardware as one of three converging factors, not as 'the primary obstacle.'",
      "E": "The passage presents adversarial examples as a vulnerability in certain contexts, not as proof that neural networks lack practical utility."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p2",
  },
  {
    id: "rc-exp20-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, gradient descent is",
    answerChoices: [
      { letter: "A", text: "a method for collecting training data from internet sources" },
      { letter: "B", text: "a process by which networks adjust weights to minimize prediction errors" },
      { letter: "C", text: "a technique for explaining how neural networks make decisions" },
      { letter: "D", text: "a hardware innovation that enables faster computation" },
      { letter: "E", text: "a programming paradigm where developers explicitly specify rules" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'During training, the network adjusts these weights to minimize errors between its predictions and known correct answers—a process called gradient descent.' Answer B accurately paraphrases this definition.",
    wrongAnswerExplanations: {
      "A": "The passage does not associate gradient descent with data collection; it is a training process that adjusts network weights.",
      "C": "The passage describes neural networks as 'black boxes' that 'resist human interpretation,' suggesting gradient descent does not explain decisions.",
      "D": "The passage discusses hardware innovations separately; gradient descent is an algorithmic training process, not hardware.",
      "E": "This describes traditional rule-based programming, which the passage contrasts with machine learning approaches."
    },
    difficulty: "easy",
    passageId: "rc-exp20-p2",
  },
  {
    id: "rc-exp20-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, an AI system that fails when encountering adversarial examples would most likely be criticized for",
    answerChoices: [
      { letter: "A", text: "requiring too much computational power to operate efficiently" },
      { letter: "B", text: "being too transparent in its decision-making processes" },
      { letter: "C", text: "lacking robustness when faced with inputs that differ subtly from training data" },
      { letter: "D", text: "relying too heavily on explicit rules specified by human programmers" },
      { letter: "E", text: "failing to build hierarchical representations of information" },
    ],
    correctAnswer: "C",
    explanation: "The passage describes adversarial examples as 'slight perturbations invisible to humans' that cause systems to 'fail catastrophically,' and frames this as evidence that systems 'struggle with novel situations.' This indicates a lack of robustness to inputs differing from training data, which is what answer C describes.",
    wrongAnswerExplanations: {
      "A": "Adversarial examples concern the accuracy of predictions, not computational efficiency.",
      "B": "The passage describes neural networks as 'black boxes' that resist interpretation—the opposite of transparent.",
      "D": "Machine learning systems are contrasted with rule-based programming; vulnerability to adversarial examples is a feature of data-driven systems.",
      "E": "The passage attributes hierarchical representation to deep learning as a capability, not as related to adversarial vulnerabilities."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p2",
  },
  {
    id: "rc-exp20-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses early, intermediate, and later layers of deep networks primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that shallow networks are more effective than deep networks" },
      { letter: "B", text: "illustrate how deep learning builds hierarchical representations of increasing complexity" },
      { letter: "C", text: "explain why adversarial examples cause neural networks to fail" },
      { letter: "D", text: "compare deep learning unfavorably to traditional programming methods" },
      { letter: "E", text: "demonstrate that neural networks perfectly replicate biological brain function" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes how 'early layers might detect edges in an image, intermediate layers combine edges into shapes, and later layers recognize objects' immediately after introducing 'hierarchical representations.' This example illustrates the hierarchical nature of deep learning—progressively building complex representations from simpler features.",
    wrongAnswerExplanations: {
      "A": "The passage describes deep learning as an extension that enables 'hierarchical representations,' presenting this positively rather than arguing against it.",
      "C": "The layer discussion appears in the paragraph explaining how deep learning works, separate from the later discussion of adversarial examples.",
      "D": "The passage presents deep learning's achievements positively, not as inferior to traditional programming.",
      "E": "The passage notes neural networks are 'inspired loosely by biological neurons' but does not claim perfect replication."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p2",
  },
  {
    id: "rc-exp20-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage indicates that the author views claims about the imminent achievement of artificial general intelligence with",
    answerChoices: [
      { letter: "A", text: "complete acceptance based on recent breakthroughs" },
      { letter: "B", text: "skepticism, noting that such predictions have repeatedly failed to materialize" },
      { letter: "C", text: "indifference, considering the question unimportant" },
      { letter: "D", text: "certainty that it will never be achieved" },
      { letter: "E", text: "enthusiasm based on the success of deep learning" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that artificial general intelligence 'remains elusive despite predictions of imminent achievement dating back decades.' This phrasing—noting repeated failed predictions—conveys skepticism toward such claims without definitively asserting impossibility.",
    wrongAnswerExplanations: {
      "A": "The passage emphasizes that general intelligence 'remains elusive,' contradicting complete acceptance of imminent achievement.",
      "C": "The passage devotes significant attention to this question, including presenting researcher debates, indicating it is not considered unimportant.",
      "D": "The passage notes division among researchers and presents both perspectives, stopping short of asserting impossibility.",
      "E": "While acknowledging deep learning successes, the passage explicitly discusses 'fundamental limitations' and the elusiveness of general intelligence."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p2",
  },
  {
    id: "rc-exp20-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following scenarios would researchers who believe machine learning is insufficient for general intelligence most likely cite as evidence for their position?",
    answerChoices: [
      { letter: "A", text: "A neural network achieving superhuman performance on a specific image classification task" },
      { letter: "B", text: "An AI system that can accurately predict weather patterns based on historical data" },
      { letter: "C", text: "A machine learning system that cannot transfer its chess-playing ability to a novel board game despite similar strategic elements" },
      { letter: "D", text: "A deep learning system that requires extensive labeled data to learn a new category" },
      { letter: "E", text: "A natural language processing system that achieves high accuracy on standardized reading tests" },
    ],
    correctAnswer: "C",
    explanation: "Skeptics 'contend that machine learning as currently conceived will always lack the causal reasoning, embodied experience, and world knowledge' needed for general intelligence. They argue current systems excel within training domains but lack flexibility. A system unable to transfer skills to a novel but similar game would demonstrate this limitation—the inability to generalize beyond specific training that characterizes human flexibility.",
    wrongAnswerExplanations: {
      "A": "Superhuman performance on a specific task exemplifies what the passage says current AI can do well, not its limitations.",
      "B": "Pattern matching from historical data is precisely what the passage describes machine learning as capable of doing.",
      "D": "While this might be a practical limitation, it relates to data requirements rather than the conceptual inability to achieve understanding.",
      "E": "High accuracy on standardized tests represents success at pattern matching within a domain, not evidence of limitations."
    },
    difficulty: "hard",
    passageId: "rc-exp20-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - EXISTENTIALISM IN 20TH CENTURY LITERATURE
// ============================================

const passage3 = `The existentialist movement that flourished in post-World War II Europe found its most powerful expression not in philosophical treatises but in works of literature. Jean-Paul Sartre, Albert Camus, and Simone de Beauvoir crafted novels, plays, and essays that dramatized existentialist themes with an immediacy that abstract argumentation could not achieve. For these writers, literature was not merely a vehicle for pre-existing ideas but an essential mode of philosophical inquiry, exploring human existence through the particular rather than the universal.

Sartre's conception of "radical freedom" became a defining feature of existentialist literature. In his philosophical work, Sartre argued that humans are "condemned to be free"—that in the absence of a predetermined human nature or divine purpose, individuals must create meaning through their choices. His novel "Nausea" and play "No Exit" embodied this vision, presenting protagonists who confront the vertiginous responsibility of existence without essence. Sartre's characters cannot appeal to external authorities—God, nature, society—to justify their actions; they must accept full responsibility for who they become.

Camus, while resisting the existentialist label, explored overlapping terrain through his concept of the absurd—the confrontation between human longing for meaning and the universe's indifferent silence. His novel "The Stranger" depicts a protagonist whose emotional detachment and refusal of conventional consolations disturb readers precisely because they challenge comfortable assumptions about how humans ought to respond to life's fundamental questions. "The Myth of Sisyphus" extended this meditation, arguing that despite life's absurdity, suicide is not the answer; instead, one must imagine Sisyphus happy, affirming existence through perpetual struggle.

Beauvoir's contribution to existentialist literature has been increasingly recognized as distinct from Sartre's framework. Her novel "The Second Sex" pioneered what would become feminist existentialism, arguing that women have been constructed as "Other" to man's subject. Where Sartre emphasized abstract freedom, Beauvoir demonstrated how social conditions—particularly gender—constrain the exercise of freedom. Her fiction, including "She Came to Stay" and "The Mandarins," explored how individuals negotiate freedom within relationships marked by power, jealousy, and competing projects.

The influence of existentialist literature extended far beyond its French originators, shaping writers from Samuel Beckett to Ralph Ellison to Chinua Achebe. Its emphasis on individual responsibility, the construction of identity through action, and authentic engagement with mortality resonated with postcolonial and African American writers who explored how marginalized individuals create meaning in hostile social environments. Yet existentialism's focus on individual choice has also attracted criticism for potentially obscuring structural oppression—a tension that Beauvoir's work anticipated but that remains unresolved in the movement's legacy.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp20-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Sartre was the only significant existentialist writer, and all other figures merely imitated his ideas." },
      { letter: "B", text: "Existentialist literature, developed primarily by French writers, explored themes of freedom, meaning, and identity with broad influence, though its emphasis on individual choice has generated ongoing tensions." },
      { letter: "C", text: "Camus's concept of the absurd has been definitively proven superior to Sartre's radical freedom." },
      { letter: "D", text: "Existentialism failed to produce any significant literary works and remained purely philosophical." },
      { letter: "E", text: "Beauvoir's feminist existentialism completely replaced earlier existentialist frameworks." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces existentialist literature from its French origins through Sartre, Camus, and Beauvoir, discusses its influence on diverse writers, and notes the unresolved tension between individual choice and structural analysis. Answer B captures this scope, including both achievements and critical tensions.",
    wrongAnswerExplanations: {
      "A": "The passage discusses Camus, Beauvoir, and many other writers as making distinct contributions, not merely imitating Sartre.",
      "C": "The passage presents Sartre and Camus as exploring overlapping but different terrain without declaring either superior.",
      "D": "The passage explicitly argues that existentialism found 'its most powerful expression' in literature, not in philosophical treatises.",
      "E": "The passage describes Beauvoir's contribution as 'distinct' and 'increasingly recognized' but not as replacing earlier frameworks."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p3",
  },
  {
    id: "rc-exp20-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Sartre's concept of 'radical freedom' holds that",
    answerChoices: [
      { letter: "A", text: "humans are determined by their biological nature and social environment" },
      { letter: "B", text: "God provides the ultimate justification for human choices" },
      { letter: "C", text: "individuals must create meaning through choices in the absence of predetermined purpose" },
      { letter: "D", text: "society should establish clear moral guidelines for individual behavior" },
      { letter: "E", text: "freedom is an illusion created by philosophical confusion" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that Sartre argued humans are 'condemned to be free' and that 'in the absence of a predetermined human nature or divine purpose, individuals must create meaning through their choices.' Answer C accurately paraphrases this idea.",
    wrongAnswerExplanations: {
      "A": "The passage presents Sartre as arguing against determinism by emphasizing that characters 'cannot appeal to external authorities.'",
      "B": "The passage states that Sartre's characters cannot appeal to 'God, nature, society' to justify actions, rejecting divine justification.",
      "D": "Sartre's emphasis on individual creation of meaning through choices contradicts reliance on societally established guidelines.",
      "E": "The passage presents freedom as fundamental to Sartre's view, not as an illusion."
    },
    difficulty: "easy",
    passageId: "rc-exp20-p3",
  },
  {
    id: "rc-exp20-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Camus's protagonist in 'The Stranger' disturbs readers because he",
    answerChoices: [
      { letter: "A", text: "demonstrates excessive emotional attachment to social conventions" },
      { letter: "B", text: "adheres strictly to religious teachings about the meaning of life" },
      { letter: "C", text: "challenges assumptions about appropriate human responses to fundamental questions" },
      { letter: "D", text: "represents a typical model of psychological adjustment" },
      { letter: "E", text: "embraces suicide as the logical response to life's absurdity" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that the protagonist's 'emotional detachment and refusal of conventional consolations disturb readers precisely because they challenge comfortable assumptions about how humans ought to respond to life's fundamental questions.' Answer C accurately captures this idea.",
    wrongAnswerExplanations: {
      "A": "The passage describes 'emotional detachment' and refusal of 'conventional consolations,' the opposite of excessive attachment to conventions.",
      "B": "The passage discusses Camus's view of the universe's 'indifferent silence,' which contradicts adherence to religious teachings.",
      "C": "Correct—this is explicitly stated in the passage.",
      "D": "The character disturbs readers precisely because he deviates from typical expectations, not because he represents normalcy.",
      "E": "The passage explicitly states that in 'The Myth of Sisyphus' Camus argued 'suicide is not the answer.'"
    },
    difficulty: "medium",
    passageId: "rc-exp20-p3",
  },
  {
    id: "rc-exp20-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Samuel Beckett, Ralph Ellison, and Chinua Achebe primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these writers were more important than the French existentialists" },
      { letter: "B", text: "demonstrate the broad influence of existentialist literature beyond its French origins" },
      { letter: "C", text: "criticize existentialism for ignoring marginalized perspectives" },
      { letter: "D", text: "suggest that existentialism has no relevance outside of France" },
      { letter: "E", text: "compare their literary techniques to those of Sartre and Camus" },
    ],
    correctAnswer: "B",
    explanation: "These writers are mentioned in the paragraph discussing how 'The influence of existentialist literature extended far beyond its French originators.' The examples demonstrate existentialism's broad reach—to Irish (Beckett), African American (Ellison), and Nigerian (Achebe) writers.",
    wrongAnswerExplanations: {
      "A": "The passage does not compare the importance of these writers to the French existentialists; it shows influence, not superiority.",
      "C": "The passage suggests these writers found existentialist themes relevant to marginalized perspectives, not that existentialism ignored them.",
      "D": "The paragraph explicitly argues the opposite—that existentialism had broad influence beyond France.",
      "E": "The passage does not discuss their literary techniques; it focuses on thematic resonance with existentialist concerns."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p3",
  },
  {
    id: "rc-exp20-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the author views Beauvoir's contribution to existentialism as",
    answerChoices: [
      { letter: "A", text: "entirely derivative of Sartre's philosophical framework" },
      { letter: "B", text: "historically insignificant and now forgotten" },
      { letter: "C", text: "distinct and increasingly recognized for its unique insights, particularly regarding gender" },
      { letter: "D", text: "focused exclusively on abstract philosophical categories" },
      { letter: "E", text: "irrelevant to contemporary discussions of freedom and identity" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that Beauvoir's contribution 'has been increasingly recognized as distinct from Sartre's framework' and that she 'pioneered what would become feminist existentialism,' demonstrating 'how social conditions—particularly gender—constrain the exercise of freedom.' This indicates the author views her work as distinct and increasingly appreciated.",
    wrongAnswerExplanations: {
      "A": "The passage explicitly describes Beauvoir's contribution as 'distinct from Sartre's framework,' not derivative of it.",
      "B": "The passage notes her contribution is 'increasingly recognized,' indicating growing appreciation rather than historical obscurity.",
      "D": "The passage contrasts Beauvoir with Sartre, noting 'Where Sartre emphasized abstract freedom, Beauvoir demonstrated how social conditions' affect freedom—she focused on concrete rather than abstract.",
      "E": "The passage suggests her work 'anticipated' current tensions in the movement's legacy, indicating ongoing relevance."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p3",
  },
  {
    id: "rc-exp20-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A literary movement is introduced, key figures are examined with attention to their distinctive approaches, and the movement's broader influence and ongoing tensions are discussed." },
      { letter: "B", text: "A philosophical theory is proposed, evidence is presented to prove it, and alternative theories are definitively refuted." },
      { letter: "C", text: "Two competing literary movements are compared and one is shown to be superior." },
      { letter: "D", text: "A chronological history of French literature from the medieval period to the present is provided." },
      { letter: "E", text: "An author's complete bibliography is presented and each work is analyzed in detail." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces existentialist literature as a movement (paragraph 1), examines Sartre (paragraph 2), Camus (paragraph 3), and Beauvoir (paragraph 4) with attention to their distinctive contributions, and then discusses broader influence and ongoing tensions (paragraph 5). Answer A accurately describes this structure.",
    wrongAnswerExplanations: {
      "B": "The passage examines a literary movement, not a philosophical theory, and presents multiple perspectives rather than proving one and refuting alternatives.",
      "C": "The passage does not compare two competing movements or declare one superior; it traces one movement's development.",
      "D": "The passage focuses specifically on post-World War II existentialist literature, not medieval to present French literature.",
      "E": "The passage discusses select works from multiple authors, not a complete bibliography of any single author."
    },
    difficulty: "hard",
    passageId: "rc-exp20-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - COLLECTIVE MEMORY AND HISTORICAL CONSCIOUSNESS
// ============================================

const passage4 = `Collective memory—the shared representations of the past held by social groups—has emerged as a central concept in contemporary social science, illuminating how communities construct, maintain, and transform their understandings of history. The term, coined by sociologist Maurice Halbwachs in the 1920s, challenged the then-dominant view that memory was purely an individual psychological phenomenon. Halbwachs argued that even our most personal memories are socially framed: we remember within groups, using shared narratives and commemorative practices that shape what and how we recall.

The relationship between collective memory and historical scholarship presents persistent tensions. Professional historians aspire to reconstruct the past through rigorous analysis of evidence, following methodological standards designed to minimize bias. Collective memory, by contrast, serves present social needs—reinforcing group identity, legitimating current arrangements, or mobilizing political action. These functions may diverge from or even contradict the historian's conclusions. When a community's cherished origin story conflicts with documentary evidence, the collision between memory and history becomes visible and politically fraught.

Commemorative practices—monuments, museums, holidays, rituals—constitute the material infrastructure through which collective memory is produced and transmitted. These practices are rarely neutral; they embody particular interpretations while silencing others. The selection of which events deserve monuments, whose sacrifices merit holidays, and which narratives museums should tell reflects and reinforces power relations. Recent debates over Confederate monuments in the United States and colonial statues elsewhere demonstrate how commemorative objects become contested when the social conditions that produced them change.

The concept of "historical consciousness"—developed particularly by German scholars—extends beyond collective memory to examine how individuals and societies understand themselves as historically situated. Historical consciousness involves not merely knowing about the past but grasping the relationship between past, present, and future as continuous yet changing. This orientation enables both a sense of continuity with predecessors and recognition that present conditions differ from those of previous generations. Education plays a crucial role in developing historical consciousness, though debates persist about whether schools should primarily transmit established narratives or cultivate critical analysis of how historical accounts are constructed.

Digital technologies are transforming how collective memory operates. Social media enables rapid circulation of historical narratives outside traditional gatekeeping institutions, while digital archives make previously inaccessible sources available to non-specialists. These developments democratize engagement with history but also facilitate the spread of misinformation and the creation of alternative historical communities insulated from scholarly correction. Whether digital technologies ultimately strengthen or fragment collective memory remains an open question with significant implications for civic culture.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp20-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that collective memory should replace professional historical scholarship" },
      { letter: "B", text: "examine collective memory as a social phenomenon, including its relationship to history, its material expressions, and contemporary challenges" },
      { letter: "C", text: "prove that digital technologies have permanently destroyed collective memory" },
      { letter: "D", text: "provide a comprehensive biography of Maurice Halbwachs" },
      { letter: "E", text: "compare German and French approaches to historical scholarship" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces collective memory as a concept, examines tensions with historical scholarship, discusses commemorative practices, explores historical consciousness, and considers digital transformations. Answer B captures this comprehensive examination of collective memory from multiple angles.",
    wrongAnswerExplanations: {
      "A": "The passage presents tensions between collective memory and historical scholarship without advocating that either replace the other.",
      "C": "The passage describes digital technologies as transforming collective memory with uncertain outcomes, not as having 'permanently destroyed' it.",
      "D": "Halbwachs is mentioned briefly as the concept's originator; the passage does not focus on his biography.",
      "E": "While German scholars are mentioned regarding historical consciousness, the passage does not systematically compare national approaches."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p4",
  },
  {
    id: "rc-exp20-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Halbwachs's contribution to the study of memory was to argue that",
    answerChoices: [
      { letter: "A", text: "memory is purely an individual psychological phenomenon unaffected by social context" },
      { letter: "B", text: "even personal memories are socially framed through shared narratives and practices" },
      { letter: "C", text: "collective memory is always more accurate than individual memory" },
      { letter: "D", text: "historical scholarship should ignore memory entirely" },
      { letter: "E", text: "commemorative practices have no influence on what people remember" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Halbwachs 'argued that even our most personal memories are socially framed: we remember within groups, using shared narratives and commemorative practices that shape what and how we recall.' Answer B directly paraphrases this.",
    wrongAnswerExplanations: {
      "A": "The passage states Halbwachs 'challenged the then-dominant view that memory was purely an individual psychological phenomenon.'",
      "C": "The passage does not discuss accuracy comparisons; Halbwachs's point was about social framing, not accuracy.",
      "D": "The passage does not attribute this view to Halbwachs; the discussion of historian-memory tensions comes later.",
      "E": "The passage explicitly connects commemorative practices to memory formation, contradicting this answer."
    },
    difficulty: "easy",
    passageId: "rc-exp20-p4",
  },
  {
    id: "rc-exp20-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, debates over Confederate monuments most likely became contentious because",
    answerChoices: [
      { letter: "A", text: "the monuments were aesthetically displeasing to contemporary viewers" },
      { letter: "B", text: "the social conditions and power relations that produced them have changed" },
      { letter: "C", text: "historical scholarship proved they were erected in the wrong locations" },
      { letter: "D", text: "digital technologies made information about them newly available" },
      { letter: "E", text: "professional historians began demanding their removal" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'commemorative objects become contested when the social conditions that produced them change' and uses Confederate monument debates as an example of this dynamic. Answer B captures this explanation—the monuments became contested as the power relations and social conditions of their creation changed.",
    wrongAnswerExplanations: {
      "A": "The passage discusses monuments in terms of political meaning and power relations, not aesthetic qualities.",
      "C": "The passage does not mention location disputes; contestation stems from changed social conditions and differing interpretations.",
      "D": "The passage discusses digital technologies in a later paragraph as a separate phenomenon, not as the cause of monument debates.",
      "E": "The passage does not attribute monument debates to professional historians' demands."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p4",
  },
  {
    id: "rc-exp20-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses the relationship between professional historians and collective memory primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that collective memory is always superior to historical scholarship" },
      { letter: "B", text: "illustrate tensions between evidence-based historiography and memory's social functions" },
      { letter: "C", text: "argue that commemorative practices should be abolished" },
      { letter: "D", text: "explain why historical consciousness cannot develop in modern societies" },
      { letter: "E", text: "describe Maurice Halbwachs's research methodology" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes historians aspiring to 'reconstruct the past through rigorous analysis of evidence' while collective memory 'serves present social needs.' It notes these 'may diverge from or even contradict' each other, illustrating the tension between evidence-based methods and memory's social functions.",
    wrongAnswerExplanations: {
      "A": "The passage presents both historians' and collective memory's approaches without declaring either superior.",
      "C": "The passage describes commemorative practices without advocating their abolition.",
      "D": "The passage discusses historical consciousness as something that develops through education, not as impossible.",
      "E": "The discussion of historians and memory appears after Halbwachs is introduced and does not address his specific methodology."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p4",
  },
  {
    id: "rc-exp20-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that the democratizing potential of digital technologies for engagement with history is complicated by",
    answerChoices: [
      { letter: "A", text: "their inability to store large amounts of historical data" },
      { letter: "B", text: "the facilitation of misinformation and communities insulated from scholarly correction" },
      { letter: "C", text: "their exclusive use by professional historians" },
      { letter: "D", text: "their destruction of all commemorative practices" },
      { letter: "E", text: "their universal acceptance by educational institutions" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that digital developments 'democratize engagement with history but also facilitate the spread of misinformation and the creation of alternative historical communities insulated from scholarly correction.' Answer B accurately identifies these complicating factors.",
    wrongAnswerExplanations: {
      "A": "The passage mentions 'digital archives make previously inaccessible sources available,' suggesting expanded storage capacity, not limitations.",
      "C": "The passage emphasizes digital technologies enable engagement 'outside traditional gatekeeping institutions,' indicating non-exclusive access.",
      "D": "The passage discusses digital technologies and commemorative practices separately; it does not claim technologies destroy these practices.",
      "E": "The passage mentions debates about education's role but does not claim universal institutional acceptance of digital technologies."
    },
    difficulty: "medium",
    passageId: "rc-exp20-p4",
  },
  {
    id: "rc-exp20-024",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which one of the following educational approaches would most clearly reflect the debate about teaching historical consciousness?",
    answerChoices: [
      { letter: "A", text: "A curriculum focused exclusively on mathematical reasoning with no historical content" },
      { letter: "B", text: "A program debating whether to emphasize learning established national narratives or analyzing how historical accounts are constructed" },
      { letter: "C", text: "A course that teaches only contemporary events with no reference to the past" },
      { letter: "D", text: "A school that eliminates all commemorative activities" },
      { letter: "E", text: "A university that requires all students to major in professional history" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly mentions 'debates persist about whether schools should primarily transmit established narratives or cultivate critical analysis of how historical accounts are constructed.' Answer B directly reflects this educational debate about teaching historical consciousness.",
    wrongAnswerExplanations: {
      "A": "The passage discusses education's role in developing historical consciousness, which requires historical content, not just mathematics.",
      "C": "Historical consciousness involves understanding 'the relationship between past, present, and future,' requiring engagement with the past.",
      "D": "Commemorative activities are discussed separately from education debates about transmitting narratives versus critical analysis.",
      "E": "The debate is about approaches to teaching historical consciousness, not about requiring everyone to become professional historians."
    },
    difficulty: "hard",
    passageId: "rc-exp20-p4",
  },
];

// Export all RC questions from Set 20
export const rcQuestionsExpSet20: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet20 = {
  passage1: { id: "rc-exp20-p1", content: passage1, topic: "law", title: "Bankruptcy Law and Creditor Rights" },
  passage2: { id: "rc-exp20-p2", content: passage2, topic: "natural-sciences", title: "Artificial Intelligence and Machine Learning" },
  passage3: { id: "rc-exp20-p3", content: passage3, topic: "humanities", title: "Existentialism in 20th Century Literature" },
  passage4: { id: "rc-exp20-p4", content: passage4, topic: "social-sciences", title: "Collective Memory and Historical Consciousness" },
};
