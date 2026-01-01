// Reading Comprehension Expansion Set 34
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - PRODUCT LIABILITY AND STRICT LIABILITY
// ============================================

const passage1 = `Product liability law in the United States has undergone a dramatic transformation over the past century, moving from a regime that heavily favored manufacturers to one that provides substantial protections for consumers. Central to this transformation has been the adoption of strict liability for defective products, a doctrine that fundamentally altered the relationship between manufacturers and those injured by their products. Under strict liability, a manufacturer can be held responsible for injuries caused by defective products regardless of whether the manufacturer was negligent or took reasonable care in the production process.

The traditional approach to product liability required plaintiffs to prove that manufacturers had been negligent—that they had failed to exercise reasonable care in designing, manufacturing, or warning about their products. This negligence-based system posed formidable obstacles for injured consumers. They often lacked access to information about manufacturing processes and faced difficulty establishing exactly what the manufacturer did or failed to do. Moreover, the doctrine of privity—the requirement that plaintiffs have a direct contractual relationship with defendants—frequently barred recovery for consumers who purchased products through intermediaries rather than directly from manufacturers.

The watershed moment came with the California Supreme Court's 1963 decision in Greenman v. Yuba Power Products, which formally adopted strict liability in tort for defective products. Justice Roger Traynor, writing for the court, reasoned that manufacturers are in the best position to prevent defects, can distribute the costs of injuries through insurance and pricing, and have implicitly represented their products as safe by placing them in the stream of commerce. Strict liability, Traynor argued, promotes the paramount public policy of protecting consumers from dangerous products. The doctrine spread rapidly across American jurisdictions, and in 1965, the American Law Institute incorporated strict products liability into the Restatement (Second) of Torts.

Critics of strict liability contend that it creates excessive costs that ultimately harm consumers. Insurance premiums rise, manufacturers may withdraw products from the market, and innovation may be discouraged when companies fear liability for unforeseeable risks. Some scholars argue that strict liability has made American manufacturers less competitive internationally and has contributed to higher prices for goods. The pharmaceutical industry, in particular, has sought protection from strict liability claims, arguing that essential medications might never reach the market if manufacturers faced liability for side effects that could not have been anticipated.

Defenders respond that strict liability has made products demonstrably safer and that the costs are both justified and efficiently distributed. They point to empirical studies suggesting that product-related injuries have declined as manufacturers have improved design and quality control in response to liability incentives. Moreover, defenders argue that concentrating costs on manufacturers rather than dispersing them among injured consumers is both more efficient and more just. The ongoing debate reflects deeper tensions between economic efficiency and corrective justice that pervade tort law.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp34-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Strict liability for defective products has replaced negligence as the dominant approach in American product liability law, though the doctrine remains controversial due to competing concerns about consumer protection and economic effects." },
      { letter: "B", text: "The Greenman v. Yuba Power Products decision was incorrectly decided and should be overturned by the courts." },
      { letter: "C", text: "American manufacturers have become uncompetitive in international markets solely because of strict liability doctrine." },
      { letter: "D", text: "The pharmaceutical industry has successfully obtained complete immunity from product liability claims." },
      { letter: "E", text: "Negligence-based product liability was superior to strict liability in protecting consumer interests." },
    ],
    correctAnswer: "A",
    explanation: "The passage traces the evolution from negligence to strict liability, explains the rationale behind the shift, and presents arguments both for and against strict liability. Answer A captures this comprehensive treatment of how strict liability transformed product liability law while remaining contested.",
    difficulty: "medium",
    passageId: "rc-exp34-p1",
  },
  {
    id: "rc-exp34-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Justice Traynor's reasoning in Greenman v. Yuba Power Products included which of the following justifications for strict liability?",
    answerChoices: [
      { letter: "A", text: "Consumers are better positioned than manufacturers to prevent product defects." },
      { letter: "B", text: "Manufacturers can spread the costs of injuries through insurance and pricing mechanisms." },
      { letter: "C", text: "Strict liability will reduce insurance premiums for manufacturers." },
      { letter: "D", text: "The doctrine of privity should be strengthened rather than weakened." },
      { letter: "E", text: "International competition requires American manufacturers to face less liability." },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Justice Traynor reasoned that manufacturers 'can distribute the costs of injuries through insurance and pricing.' This is directly stated as one of his justifications for strict liability.",
    difficulty: "easy",
    passageId: "rc-exp34-p1",
  },
  {
    id: "rc-exp34-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, it can be inferred that under the traditional negligence-based approach to product liability, a plaintiff would need to",
    answerChoices: [
      { letter: "A", text: "demonstrate that the manufacturer intended to cause harm" },
      { letter: "B", text: "prove that the manufacturer failed to exercise reasonable care" },
      { letter: "C", text: "show that strict liability principles applied to the case" },
      { letter: "D", text: "establish that the product was sold at an unreasonably low price" },
      { letter: "E", text: "demonstrate that other consumers had also been injured by the same product" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'The traditional approach to product liability required plaintiffs to prove that manufacturers had been negligent—that they had failed to exercise reasonable care.' This is directly described as a requirement under the negligence-based system.",
    difficulty: "medium",
    passageId: "rc-exp34-p1",
  },
  {
    id: "rc-exp34-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's discussion of the doctrine of privity in the second paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "argue that privity should be reinstated as a requirement in product liability cases" },
      { letter: "B", text: "illustrate one of the obstacles that made the traditional negligence system unfavorable to injured consumers" },
      { letter: "C", text: "demonstrate that the Greenman decision was poorly reasoned" },
      { letter: "D", text: "provide evidence supporting the critics' concerns about strict liability" },
      { letter: "E", text: "explain why manufacturers should not be held liable for product defects" },
    ],
    correctAnswer: "B",
    explanation: "The privity doctrine is mentioned as an additional barrier consumers faced under the traditional system, alongside the difficulty of proving negligence. The author uses it to illustrate why the negligence-based system 'posed formidable obstacles for injured consumers.'",
    difficulty: "medium",
    passageId: "rc-exp34-p1",
  },
  {
    id: "rc-exp34-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate between critics and defenders of strict liability can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of the critics' position that strict liability should be abolished" },
      { letter: "B", text: "dismissive of both sides as failing to understand basic legal principles" },
      { letter: "C", text: "balanced and analytical, presenting both perspectives without clearly advocating for either" },
      { letter: "D", text: "enthusiastically endorsing the defenders' view that strict liability is unambiguously beneficial" },
      { letter: "E", text: "skeptical of all empirical claims made by both critics and defenders" },
    ],
    correctAnswer: "C",
    explanation: "The author presents critics' concerns about costs and innovation as well as defenders' arguments about safety and efficiency, concluding that the debate reflects 'deeper tensions' in tort law. The author does not advocate for either position.",
    difficulty: "medium",
    passageId: "rc-exp34-p1",
  },
  {
    id: "rc-exp34-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the defenders' argument that strict liability has made products safer?",
    answerChoices: [
      { letter: "A", text: "Insurance premiums for product liability coverage have increased substantially since 1963." },
      { letter: "B", text: "Several major pharmaceutical companies have ceased production of certain vaccines due to liability concerns." },
      { letter: "C", text: "A longitudinal study found that product recall rates and injury claims declined significantly in the decades following adoption of strict liability." },
      { letter: "D", text: "Many American manufacturers have moved production facilities to countries with less stringent liability laws." },
      { letter: "E", text: "Consumer prices for manufactured goods have increased more rapidly than inflation." },
    ],
    correctAnswer: "C",
    explanation: "The defenders claim that strict liability has made products 'demonstrably safer.' A longitudinal study showing declines in recalls and injury claims would directly support this claim with empirical evidence. The passage mentions that defenders 'point to empirical studies suggesting that product-related injuries have declined.'",
    difficulty: "hard",
    passageId: "rc-exp34-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - ANIMAL COGNITION AND INTELLIGENCE
// ============================================

const passage2 = `The study of animal cognition has transformed our understanding of intelligence, challenging the long-held assumption that sophisticated mental capacities are uniquely human. Research over the past several decades has revealed that many species possess cognitive abilities once thought to be the exclusive domain of Homo sapiens, including tool use, self-recognition, abstract reasoning, and even rudimentary forms of language. These discoveries have profound implications not only for comparative psychology but also for philosophy, ethics, and our conception of the human place in nature.

Tool use provides one of the most striking examples of animal intelligence. New Caledonian crows manufacture and use tools with a sophistication rivaling that of great apes. These birds create hooked tools from twigs and craft stepped-cut tools from pandanus leaves, modifying raw materials through a series of deliberate actions to produce implements suited to specific foraging tasks. Crucially, young crows learn these techniques from adults, suggesting cultural transmission of technological knowledge. Chimpanzees in different African populations have developed distinct tool-using traditions—some groups use stone hammers to crack nuts while others fish for termites with modified sticks—indicating that tool use in primates is shaped by social learning and local innovation rather than genetic programming alone.

The capacity for self-awareness, tested through mirror self-recognition experiments, has been demonstrated in great apes, elephants, dolphins, and magpies. In the classic paradigm, researchers surreptitiously place a mark on an animal's body that can only be seen in a mirror. Animals that touch or investigate the mark on their own bodies, rather than responding as if the reflection were another individual, are considered to demonstrate self-recognition. While critics have questioned whether this test truly measures self-awareness or merely learned behavior, proponents argue that passing the test requires understanding that the image in the mirror corresponds to oneself—a form of metacognition that implies an internal model of one's own appearance and actions.

Perhaps most provocatively, research on language-trained apes and dolphins has revealed capacities for symbolic representation and grammatical comprehension. Kanzi, a bonobo trained with lexigrams, can understand complex sentences and novel word combinations, demonstrating that ape comprehension extends beyond simple associations to grasp syntactic relationships. Similarly, dolphins trained with gestural languages can distinguish between different word orders that convey different meanings, such as differentiating commands to bring an object to a person versus bringing a person to an object. These abilities suggest that the cognitive architecture underlying language may have evolutionary precursors rather than emerging de novo in the human lineage.

The implications of animal cognition research extend beyond academic interest to questions of moral status and legal rights. If animals possess rich cognitive and emotional lives, the argument goes, they may deserve stronger protections than current law provides. Some legal scholars and activists have argued for recognizing certain animals as legal persons with fundamental rights, including the right not to be held in captivity. While such proposals remain controversial, the scientific evidence of animal intelligence has already influenced legislation in some jurisdictions, leading to bans on great ape research and enhanced welfare standards for cognitively complex species.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp34-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Animal cognition research has revealed sophisticated mental capacities in various species, challenging assumptions about human uniqueness and raising ethical and legal questions about animal status." },
      { letter: "B", text: "New Caledonian crows are more intelligent than great apes in their use of tools." },
      { letter: "C", text: "The mirror self-recognition test is the only valid method for measuring animal intelligence." },
      { letter: "D", text: "Legal scholars have successfully established that all animals should be recognized as legal persons." },
      { letter: "E", text: "Language research has conclusively proven that animals can communicate at the same level as humans." },
    ],
    correctAnswer: "A",
    explanation: "The passage systematically presents evidence of animal cognition (tool use, self-recognition, language) and discusses implications for ethics and law. Answer A captures both the scientific findings and their broader significance.",
    difficulty: "medium",
    passageId: "rc-exp34-p2",
  },
  {
    id: "rc-exp34-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the variation in tool-using traditions among different chimpanzee populations suggests that",
    answerChoices: [
      { letter: "A", text: "chimpanzees are incapable of learning new behaviors" },
      { letter: "B", text: "tool use in chimpanzees is entirely determined by genetic factors" },
      { letter: "C", text: "tool use is shaped by social learning and local innovation rather than genetics alone" },
      { letter: "D", text: "all chimpanzee populations use identical techniques for acquiring food" },
      { letter: "E", text: "stone hammers are more effective than modified sticks for foraging" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the different tool-using traditions among chimpanzee populations indicate 'that tool use in primates is shaped by social learning and local innovation rather than genetic programming alone.'",
    difficulty: "easy",
    passageId: "rc-exp34-p2",
  },
  {
    id: "rc-exp34-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, proponents of the mirror self-recognition test as a measure of self-awareness would most likely argue that",
    answerChoices: [
      { letter: "A", text: "animals that fail the test definitively lack any form of cognition" },
      { letter: "B", text: "the test measures only reflexive behavior rather than genuine understanding" },
      { letter: "C", text: "passing the test requires a form of metacognition involving an internal self-model" },
      { letter: "D", text: "the test can only be validly administered to great apes" },
      { letter: "E", text: "self-recognition is unrelated to any other cognitive capacity" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'proponents argue that passing the test requires understanding that the image in the mirror corresponds to oneself—a form of metacognition that implies an internal model of one's own appearance and actions.'",
    difficulty: "medium",
    passageId: "rc-exp34-p2",
  },
  {
    id: "rc-exp34-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions Kanzi, the bonobo trained with lexigrams, primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that bonobos are more intelligent than dolphins" },
      { letter: "B", text: "provide evidence that ape language comprehension extends beyond simple associations to syntactic understanding" },
      { letter: "C", text: "demonstrate that lexigrams are superior to gestural languages for animal communication" },
      { letter: "D", text: "criticize previous research on chimpanzee tool use" },
      { letter: "E", text: "explain why animal cognition research should be discontinued" },
    ],
    correctAnswer: "B",
    explanation: "Kanzi is introduced to illustrate that 'ape comprehension extends beyond simple associations to grasp syntactic relationships.' The example supports the broader argument about language capacities in animals.",
    difficulty: "medium",
    passageId: "rc-exp34-p2",
  },
  {
    id: "rc-exp34-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward proposals for recognizing certain animals as legal persons can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastic endorsement without reservation" },
      { letter: "B", text: "complete rejection of any ethical implications" },
      { letter: "C", text: "acknowledgment that the proposals are controversial while noting their scientific basis and some practical effects" },
      { letter: "D", text: "dismissal of the scientific evidence as irrelevant to legal questions" },
      { letter: "E", text: "insistence that all animals must immediately receive full legal rights" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that 'such proposals remain controversial' while also acknowledging that 'scientific evidence of animal intelligence has already influenced legislation in some jurisdictions.' This reflects balanced acknowledgment rather than strong advocacy or dismissal.",
    difficulty: "medium",
    passageId: "rc-exp34-p2",
  },
  {
    id: "rc-exp34-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the information in the passage, which of the following findings would most directly support the view that language capacities have evolutionary precursors?",
    answerChoices: [
      { letter: "A", text: "A study showing that humans learn language faster than any other species" },
      { letter: "B", text: "Evidence that a species of monkey can distinguish between different sequences of calls that convey different warnings" },
      { letter: "C", text: "Research demonstrating that language is controlled by brain regions unique to humans" },
      { letter: "D", text: "A finding that language-trained apes quickly forget the meanings of symbols" },
      { letter: "E", text: "Evidence that human infants babble before they can speak meaningful words" },
    ],
    correctAnswer: "B",
    explanation: "The passage suggests that dolphin and ape language abilities indicate 'the cognitive architecture underlying language may have evolutionary precursors.' A monkey species distinguishing different call sequences would provide additional evidence of proto-linguistic abilities in non-human species, supporting the evolutionary precursor hypothesis.",
    difficulty: "hard",
    passageId: "rc-exp34-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - NEOCLASSICISM IN 18TH CENTURY ART
// ============================================

const passage3 = `Neoclassicism emerged in the mid-eighteenth century as a deliberate repudiation of the Rococo style that had dominated European art and design. Where Rococo celebrated asymmetry, ornamentation, pastel colors, and playful subjects drawn from aristocratic leisure, Neoclassicism advocated for the austere grandeur of ancient Greece and Rome. This was not merely an aesthetic preference but a moral and political statement: Neoclassical artists and theorists believed that the art of antiquity embodied civic virtues that contemporary society had lost and desperately needed to recover. The movement thus represented both a backward glance at classical ideals and a forward-looking program for cultural and political reform.

The archaeological discoveries at Herculaneum and Pompeii, beginning in the 1730s and 1740s, provided crucial impetus for Neoclassical enthusiasm. For the first time, scholars and artists could study actual Roman domestic interiors, furnishings, and paintings rather than relying solely on literary descriptions and monumental ruins. Johann Joachim Winckelmann, the German art historian often called the father of art history, synthesized these discoveries into a coherent aesthetic theory. In his influential "History of Ancient Art" (1764), Winckelmann characterized Greek art as exemplifying "noble simplicity and quiet grandeur"—qualities he contrasted with what he saw as the excessive emotionalism and decorative frivolity of Baroque and Rococo styles. Winckelmann's idealization of Greek art, though based partly on Roman copies and his own projections, profoundly shaped how subsequent generations understood and sought to emulate classical aesthetics.

In painting, Jacques-Louis David became the preeminent practitioner of Neoclassical principles. His "Oath of the Horatii" (1784) epitomizes the movement's values: the composition is rigorously ordered, with figures arranged in clear geometric relationships; the subject matter depicts Roman citizens placing public duty above private emotion; the color palette is restrained compared to Rococo confections; and the moral message is unambiguous. David's paintings were political interventions as much as aesthetic achievements, and during the French Revolution, he became virtual artistic dictator, designing festivals, costumes, and propaganda for the revolutionary government. The connection between Neoclassical aesthetics and revolutionary politics was no accident—both claimed to restore ancient republican virtues against corrupt contemporary decadence.

Architecture underwent perhaps the most thoroughgoing Neoclassical transformation. Architects like Robert Adam in Britain and Claude-Nicolas Ledoux in France designed buildings that quoted directly from ancient temples and incorporated archaeological details from the latest excavations. The style became particularly associated with public and governmental buildings, its classical vocabulary connoting stability, rationality, and legitimate authority. In the newly formed United States, Thomas Jefferson championed Neoclassical architecture as appropriate for a republic that claimed descent from ancient democratic models. The Virginia State Capitol, modeled on the Maison Carrée at Nîmes, and Jefferson's own Monticello, with its Roman portico, embodied his belief that classical forms could inspire classical civic virtues.

Yet Neoclassicism contained internal tensions that would eventually contribute to its decline. The movement's claims to objective aesthetic standards based on eternal classical principles sat uneasily with the growing recognition that Greek and Roman art was more diverse than Winckelmann had suggested. The moralistic association between aesthetic simplicity and civic virtue proved difficult to sustain when Neoclassical forms were adopted by Napoleon's autocratic empire as readily as by democratic republics. By the early nineteenth century, Romanticism was challenging Neoclassical assumptions, celebrating emotion over reason, medieval over classical sources, and individual expression over universal rules. Neoclassicism's legacy, however, persists in academic training, museum architecture, and popular associations between classical forms and serious purpose.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp34-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Neoclassicism was an artistic movement that rejected Rococo in favor of classical aesthetics, carried moral and political significance, influenced multiple art forms, but contained tensions that led to its decline while leaving a lasting legacy." },
      { letter: "B", text: "Jacques-Louis David was the only important Neoclassical artist, and his work remains unsurpassed." },
      { letter: "C", text: "Winckelmann's theories about Greek art have been completely rejected by modern scholars." },
      { letter: "D", text: "Neoclassicism was solely an architectural movement with no impact on painting or design." },
      { letter: "E", text: "The French Revolution was caused entirely by Neoclassical aesthetic principles." },
    ],
    correctAnswer: "A",
    explanation: "The passage traces Neoclassicism from its origins as a reaction against Rococo, through its moral and political dimensions, its manifestations in various arts, and its eventual tensions and decline while noting its legacy. Answer A captures this comprehensive arc.",
    difficulty: "medium",
    passageId: "rc-exp34-p3",
  },
  {
    id: "rc-exp34-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Winckelmann characterized Greek art as exemplifying which of the following qualities?",
    answerChoices: [
      { letter: "A", text: "excessive emotionalism and decorative frivolity" },
      { letter: "B", text: "asymmetry and playful subjects" },
      { letter: "C", text: "noble simplicity and quiet grandeur" },
      { letter: "D", text: "political propaganda and revolutionary fervor" },
      { letter: "E", text: "medieval mysticism and religious devotion" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that Winckelmann 'characterized Greek art as exemplifying \"noble simplicity and quiet grandeur.\"' This is a direct quotation from the passage.",
    difficulty: "easy",
    passageId: "rc-exp34-p3",
  },
  {
    id: "rc-exp34-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, it can be inferred that the archaeological discoveries at Herculaneum and Pompeii were significant for Neoclassicism because they",
    answerChoices: [
      { letter: "A", text: "proved that Rococo style was based on ancient Roman precedents" },
      { letter: "B", text: "provided direct evidence of ancient domestic life previously known only through texts and ruins" },
      { letter: "C", text: "demonstrated that ancient art was primarily decorative rather than moralistic" },
      { letter: "D", text: "showed that Winckelmann's theories were entirely incorrect" },
      { letter: "E", text: "revealed that Greek art was identical to medieval art" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that these discoveries allowed scholars and artists to 'study actual Roman domestic interiors, furnishings, and paintings rather than relying solely on literary descriptions and monumental ruins.' This provided crucial new evidence about ancient life.",
    difficulty: "medium",
    passageId: "rc-exp34-p3",
  },
  {
    id: "rc-exp34-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author discusses Thomas Jefferson's architectural projects primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Jefferson's political views as inconsistent with his aesthetic choices" },
      { letter: "B", text: "illustrate how Neoclassical architecture was adopted in America to express republican ideals" },
      { letter: "C", text: "argue that American architecture was superior to European architecture" },
      { letter: "D", text: "demonstrate that Neoclassicism originated in the United States rather than Europe" },
      { letter: "E", text: "explain why Neoclassicism declined more rapidly in America than in Europe" },
    ],
    correctAnswer: "B",
    explanation: "Jefferson is presented as someone who 'championed Neoclassical architecture as appropriate for a republic that claimed descent from ancient democratic models,' with specific buildings cited as embodiments of his 'belief that classical forms could inspire classical civic virtues.' This illustrates Neoclassicism's connection to republican ideals in the American context.",
    difficulty: "medium",
    passageId: "rc-exp34-p3",
  },
  {
    id: "rc-exp34-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the author views Winckelmann's influence on Neoclassicism as",
    answerChoices: [
      { letter: "A", text: "entirely negative and misleading" },
      { letter: "B", text: "significant and lasting, though based partly on idealization rather than purely objective analysis" },
      { letter: "C", text: "irrelevant to the actual development of Neoclassical art" },
      { letter: "D", text: "wholly accurate and beyond any legitimate criticism" },
      { letter: "E", text: "important only for architecture but not for painting" },
    ],
    correctAnswer: "B",
    explanation: "The author notes that Winckelmann's theory 'profoundly shaped how subsequent generations understood and sought to emulate classical aesthetics' while also acknowledging it was 'based partly on Roman copies and his own projections.' This indicates significant influence tempered by recognition of its limitations.",
    difficulty: "medium",
    passageId: "rc-exp34-p3",
  },
  {
    id: "rc-exp34-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A movement is introduced and contrasted with its predecessor, key influences and practitioners are discussed, applications in different arts are examined, and the movement's tensions and legacy are assessed." },
      { letter: "B", text: "Two competing artistic theories are presented, evidence for each is evaluated, and one is declared superior." },
      { letter: "C", text: "A chronological biography of a single artist is presented from birth to death." },
      { letter: "D", text: "A scientific hypothesis is proposed, experiments are described, and the hypothesis is confirmed." },
      { letter: "E", text: "Multiple unrelated artistic movements are briefly surveyed without any connecting theme." },
    ],
    correctAnswer: "A",
    explanation: "The passage follows a clear structure: paragraph 1 introduces Neoclassicism against Rococo, paragraph 2 discusses archaeological influences and Winckelmann's theory, paragraph 3 examines David and painting, paragraph 4 covers architecture, and paragraph 5 addresses tensions and legacy.",
    difficulty: "hard",
    passageId: "rc-exp34-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - POVERTY MEASUREMENT AND POLICY
// ============================================

const passage4 = `The measurement of poverty, seemingly a straightforward empirical task, is in fact deeply contested and consequential. How societies define and count the poor shapes which individuals receive assistance, how much funding anti-poverty programs receive, and how success or failure in reducing poverty is evaluated. Behind technical debates about income thresholds and consumption baskets lie fundamental disagreements about what poverty means, whether it should be understood in absolute or relative terms, and what role government should play in addressing it.

The official poverty measure in the United States, developed in the 1960s by economist Mollie Orshansky, exemplifies an absolute approach. Orshansky calculated the cost of a minimally adequate diet and multiplied by three (since families then spent about one-third of income on food), adjusting for family size. Families with incomes below this threshold were counted as poor. This measure, updated annually for inflation but otherwise essentially unchanged, has been criticized on multiple grounds: the food-to-income ratio no longer reflects actual spending patterns; the measure ignores taxes, in-kind benefits, and geographic cost-of-living differences; and it fails to capture whether families can actually afford necessities like healthcare, childcare, and housing that have grown faster than general inflation.

An alternative approach, common in European social policy, defines poverty in relative terms—typically as income below a certain percentage (often 50 or 60 percent) of median national income. On this view, poverty is fundamentally about social exclusion: lacking the resources to participate in the activities, customs, and living conditions that are ordinary in one's society. A relative poverty line rises as a society becomes wealthier, acknowledging that what counts as deprivation depends on social context. Critics argue that relative measures conflate poverty with inequality and that one could, absurdly, reduce measured poverty simply by reducing median incomes without helping anyone.

The debate between absolute and relative approaches reflects deeper philosophical disagreements. Absolute poverty measures presuppose that basic human needs—for food, shelter, and minimal health—can be objectively specified independent of social context. Relative measures assume that needs are socially constructed and that poverty is meaningful only in relation to prevailing standards. Some scholars have proposed hybrid approaches that incorporate elements of both, establishing absolute floors for physical necessities while adding relative components for social participation. The Supplemental Poverty Measure, introduced by the U.S. Census Bureau in 2011, moves in this direction by accounting for in-kind benefits, taxes, work expenses, and geographic variations, though it retains an absolute threshold based on expenditure data.

The policy stakes of measurement choices are substantial. When the official poverty rate declines, political leaders may claim success and reduce program funding; when it rises, critics may demand new interventions. Different measures can tell radically different stories about the same period. During the 2008 recession, for example, the official poverty rate increased significantly, but a measure accounting for safety-net benefits showed a much smaller increase, suggesting that programs were cushioning the blow. Conversely, measures that include healthcare costs show higher and faster-growing poverty than official statistics indicate. The choice of measure thus shapes both our understanding of economic hardship and the political incentives for addressing it.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp34-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that relative poverty measures are definitively superior to absolute measures" },
      { letter: "B", text: "examine how poverty measurement involves contested choices with significant philosophical and policy implications" },
      { letter: "C", text: "provide a detailed biography of Mollie Orshansky" },
      { letter: "D", text: "demonstrate that poverty has been eliminated in developed countries" },
      { letter: "E", text: "criticize European social policy as uniformly misguided" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically explores different approaches to measuring poverty (absolute, relative, hybrid), the philosophical assumptions underlying each, and how measurement choices affect policy. Answer B captures this analytical purpose.",
    difficulty: "medium",
    passageId: "rc-exp34-p4",
  },
  {
    id: "rc-exp34-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the official U.S. poverty measure developed by Orshansky has been criticized because it",
    answerChoices: [
      { letter: "A", text: "uses relative rather than absolute criteria for determining poverty" },
      { letter: "B", text: "is updated too frequently to provide stable data over time" },
      { letter: "C", text: "ignores taxes, in-kind benefits, and geographic cost-of-living variations" },
      { letter: "D", text: "incorporates healthcare and childcare costs too generously" },
      { letter: "E", text: "was developed too recently to provide meaningful historical comparisons" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the Orshansky measure 'has been criticized on multiple grounds' including that 'the measure ignores taxes, in-kind benefits, and geographic cost-of-living differences.'",
    difficulty: "easy",
    passageId: "rc-exp34-p4",
  },
  {
    id: "rc-exp34-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, proponents of relative poverty measures would most likely argue that",
    answerChoices: [
      { letter: "A", text: "poverty should be defined without any reference to what is ordinary in a given society" },
      { letter: "B", text: "basic human needs can be objectively specified independent of social context" },
      { letter: "C", text: "the ability to participate in normal social activities is essential to what it means not to be poor" },
      { letter: "D", text: "reducing median income is an effective strategy for reducing poverty" },
      { letter: "E", text: "in-kind benefits should never be counted when measuring poverty" },
    ],
    correctAnswer: "C",
    explanation: "The passage describes the relative view as holding that 'poverty is fundamentally about social exclusion: lacking the resources to participate in the activities, customs, and living conditions that are ordinary in one's society.' Proponents would emphasize social participation as central to defining poverty.",
    difficulty: "medium",
    passageId: "rc-exp34-p4",
  },
  {
    id: "rc-exp34-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the 2008 recession and different poverty measures primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that the recession was not as severe as commonly believed" },
      { letter: "B", text: "demonstrate how different measures can lead to divergent conclusions about the same economic period" },
      { letter: "C", text: "criticize political leaders for ignoring poverty during economic downturns" },
      { letter: "D", text: "explain why the Supplemental Poverty Measure was introduced in 2011" },
      { letter: "E", text: "suggest that safety-net programs should be eliminated" },
    ],
    correctAnswer: "B",
    explanation: "The recession example illustrates that 'Different measures can tell radically different stories about the same period.' The official rate and measures accounting for benefits showed different pictures, demonstrating how measurement choices shape understanding.",
    difficulty: "medium",
    passageId: "rc-exp34-p4",
  },
  {
    id: "rc-exp34-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the debate between absolute and relative poverty measures can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly partisan in favor of absolute measures" },
      { letter: "B", text: "dismissive of all poverty measurement as pointless" },
      { letter: "C", text: "analytically engaged, presenting each approach's rationale and limitations without advocating for one" },
      { letter: "D", text: "enthusiastically endorsing relative measures while condemning absolute measures" },
      { letter: "E", text: "confused about the basic differences between the two approaches" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both absolute and relative approaches, explains the philosophical assumptions underlying each, notes criticisms of both, and discusses hybrid alternatives without clearly advocating for any single approach.",
    difficulty: "medium",
    passageId: "rc-exp34-p4",
  },
  {
    id: "rc-exp34-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the critique of relative poverty measures that they conflate poverty with inequality?",
    answerChoices: [
      { letter: "A", text: "Countries with higher inequality tend to have higher crime rates regardless of absolute income levels." },
      { letter: "B", text: "Research showing that the ability to participate in normal social activities has measurable effects on health and well-being independent of absolute income." },
      { letter: "C", text: "Evidence that food costs have remained stable while housing costs have increased dramatically." },
      { letter: "D", text: "Data showing that median incomes have risen faster than prices in most developed countries." },
      { letter: "E", text: "Studies indicating that absolute poverty measures are easier to administer than relative measures." },
    ],
    correctAnswer: "B",
    explanation: "The critique suggests relative measures merely capture inequality rather than real deprivation. Evidence that social participation (what relative measures try to capture) has independent effects on well-being would demonstrate that relative poverty represents genuine hardship, not merely inequality.",
    difficulty: "hard",
    passageId: "rc-exp34-p4",
  },
];

// Export all RC questions from Set 34
export const rcQuestionsExpSet34: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet34 = {
  passage1: { id: "rc-exp34-p1", content: passage1, topic: "law", title: "Product Liability and Strict Liability" },
  passage2: { id: "rc-exp34-p2", content: passage2, topic: "natural-sciences", title: "Animal Cognition and Intelligence" },
  passage3: { id: "rc-exp34-p3", content: passage3, topic: "humanities", title: "Neoclassicism in 18th Century Art" },
  passage4: { id: "rc-exp34-p4", content: passage4, topic: "social-sciences", title: "Poverty Measurement and Policy" },
};
