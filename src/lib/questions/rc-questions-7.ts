// Reading Comprehension Questions - Set 7 (Humanities: Philosophy)
import { Question } from "../lsat-types";

// Passage 1: Free Will and Determinism
const passage1 = `The debate over free will represents one of philosophy's most persistent and consequential problems. At stake is nothing less than the foundation of moral responsibility: if our choices are determined by prior causes over which we have no control, in what sense can we be held accountable for our actions? Three major positions have emerged in response to this challenge.

Hard determinists accept that all events, including human decisions, are the inevitable results of prior causes governed by natural laws. On this view, the feeling of freedom is an illusion produced by ignorance of the causes operating upon us. We could not have done otherwise than we did, any more than a ball could have rolled differently given the forces acting upon it. Hard determinism has found support in neuroscience research suggesting that brain activity predicting a decision can be detected before subjects report becoming aware of their choice.

Libertarians (in the metaphysical, not political sense) maintain that free will is real and incompatible with determinism. They argue that at least some human actions are not determined by prior causes but originate in the agent as an uncaused cause. This view preserves robust moral responsibility but faces the challenge of explaining how undetermined actions could be anything other than random—and random actions seem no more attributable to the agent than determined ones.

Compatibilists argue that free will and determinism are not mutually exclusive. On this view, freedom consists not in the absence of causation but in being moved by the right kinds of causes—namely, one's own desires, values, and deliberations rather than external coercion or internal compulsion. A decision is free if it flows from the agent's authentic self, regardless of whether that self was itself shaped by prior causes. Most contemporary philosophers identify as compatibilists, though critics argue that this position merely redefines freedom in a way that sidesteps the original problem.

The implications extend far beyond academic philosophy. Criminal law assumes that most defendants could have chosen otherwise; therapeutic interventions presuppose that people can change; and everyday interactions rely on holding each other responsible for choices. Whether these practices can be justified without libertarian free will remains deeply contested.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set7-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Hard determinism has been definitively proven by neuroscience" },
      { letter: "B", text: "The free will debate involves three major positions—hard determinism, libertarianism, and compatibilism—each with implications for moral responsibility" },
      { letter: "C", text: "Compatibilism is clearly the correct position on free will" },
      { letter: "D", text: "Free will is irrelevant to criminal law" },
      { letter: "E", text: "Libertarian free will has been disproven" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents three major positions on free will, explains each, and discusses their implications for moral responsibility and social practices.",
    difficulty: "medium",
    passageId: "rc7-p1",
  },
  {
    id: "rc-set7-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions neuroscience research primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that free will does not exist" },
      { letter: "B", text: "provide evidence that has been cited in support of hard determinism" },
      { letter: "C", text: "argue against compatibilism" },
      { letter: "D", text: "demonstrate the superiority of libertarianism" },
      { letter: "E", text: "criticize the methodology of brain imaging studies" },
    ],
    correctAnswer: "B",
    explanation: "The neuroscience research is presented as having 'found support' for hard determinism, not as definitive proof—it's cited as evidence used by one position.",
    difficulty: "medium",
    passageId: "rc7-p1",
  },
  {
    id: "rc-set7-003",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, compatibilists define freedom as",
    answerChoices: [
      { letter: "A", text: "the absence of all causation" },
      { letter: "B", text: "being moved by one's own desires and values rather than external coercion" },
      { letter: "C", text: "having actions that are entirely random" },
      { letter: "D", text: "complete independence from prior causes" },
      { letter: "E", text: "the ability to predict one's own choices" },
    ],
    correctAnswer: "B",
    explanation: "The passage states compatibilists view 'freedom consists not in the absence of causation but in being moved by the right kinds of causes—namely, one's own desires, values, and deliberations rather than external coercion.'",
    difficulty: "easy",
    passageId: "rc7-p1",
  },
  {
    id: "rc-set7-004",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, a critic of libertarian free will would most likely argue that",
    answerChoices: [
      { letter: "A", text: "all human actions are morally praiseworthy" },
      { letter: "B", text: "undetermined actions would be random rather than genuinely free" },
      { letter: "C", text: "determinism is false" },
      { letter: "D", text: "neuroscience research is unreliable" },
      { letter: "E", text: "compatibilism is incoherent" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes libertarianism 'faces the challenge of explaining how undetermined actions could be anything other than random—and random actions seem no more attributable to the agent than determined ones.'",
    difficulty: "medium",
    passageId: "rc7-p1",
  },
  {
    id: "rc-set7-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that the free will debate has practical significance because",
    answerChoices: [
      { letter: "A", text: "philosophers are paid to resolve it" },
      { letter: "B", text: "social practices like criminal law assume that people can choose otherwise" },
      { letter: "C", text: "determinism has been legally prohibited" },
      { letter: "D", text: "therapy never works without libertarian free will" },
      { letter: "E", text: "compatibilism is required by law" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'criminal law assumes that most defendants could have chosen otherwise' and notes that many social practices 'rely on holding each other responsible for choices.'",
    difficulty: "medium",
    passageId: "rc7-p1",
  },
];

// Passage 2: Ethics of Care
const passage2 = `Traditional ethical theories—utilitarianism, Kantian deontology, virtue ethics—share an emphasis on impartiality as a moral ideal. The just person, on these accounts, should evaluate actions without favoritism, giving equal consideration to all affected parties regardless of personal relationships. This conception of morality as impartial has been challenged by care ethicists who argue that it distorts the moral life by ignoring the significance of particular attachments.

Care ethics emerged in the 1980s from Carol Gilligan's research on moral development. Gilligan observed that while Lawrence Kohlberg's influential stage theory evaluated moral reasoning by its approximation to impartial principles, many women approached moral problems differently—not by applying abstract rules but by attending to relationships, responsibilities, and contexts. Rather than asking "what is the fair outcome?" they asked "how can I best respond to the needs of those I care about?"

Nel Noddings developed this insight into a systematic ethical theory. She argued that caring—the engrossment in another's well-being and motivation to respond to their needs—constitutes the fundamental moral phenomenon. Ethical obligation, on this view, arises not from rational principles but from the caring relationship itself. We are most obligated to those closest to us, and moral development involves expanding our capacity to care while maintaining depth in our closest relationships.

Critics have raised several objections. Some argue that care ethics is merely descriptive of how women have been socialized to think rather than normatively justified. Others worry that prioritizing particular relationships could justify neglecting strangers or even justify tribalism and discrimination. How, they ask, can care ethics address large-scale social issues where personal caring relationships are impossible?

Care ethicists have responded by distinguishing caring-about (general concern for welfare) from caring-for (direct responsive attention). They argue that social institutions can be designed to better facilitate caring relationships and that the values of care—attentiveness, responsibility, competence, responsiveness—can inform public policy even when direct personal care is impossible. The debate continues to shape discussions of health care, education, and social welfare policy.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set7-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Care ethics has completely replaced traditional ethical theories" },
      { letter: "B", text: "Care ethics emerged as an alternative to impartiality-focused theories, prioritizing relationships and responsiveness, though it faces objections about its normative status and scope" },
      { letter: "C", text: "Kohlberg's moral development theory is entirely correct" },
      { letter: "D", text: "Care ethics applies only to women" },
      { letter: "E", text: "Impartiality is the only legitimate moral standard" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces care ethics as challenging impartiality-based theories, explains its foundations and development, presents objections, and notes ongoing debates about its application.",
    difficulty: "medium",
    passageId: "rc7-p2",
  },
  {
    id: "rc-set7-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses Carol Gilligan's research primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Kohlberg's methodology" },
      { letter: "B", text: "explain the empirical observations that gave rise to care ethics" },
      { letter: "C", text: "prove that women are more moral than men" },
      { letter: "D", text: "defend traditional ethical theories" },
      { letter: "E", text: "argue against all psychological research" },
    ],
    correctAnswer: "B",
    explanation: "Gilligan's research is presented as the origin of care ethics, observing different approaches to moral problems that became the basis for the theory.",
    difficulty: "medium",
    passageId: "rc7-p2",
  },
  {
    id: "rc-set7-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, Nel Noddings argued that ethical obligation arises from",
    answerChoices: [
      { letter: "A", text: "rational principles applied impartially" },
      { letter: "B", text: "the caring relationship itself" },
      { letter: "C", text: "social contracts between strangers" },
      { letter: "D", text: "utilitarian calculations of overall welfare" },
      { letter: "E", text: "divine commands" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that for Noddings, 'ethical obligation...arises not from rational principles but from the caring relationship itself.'",
    difficulty: "easy",
    passageId: "rc7-p2",
  },
  {
    id: "rc-set7-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics who worry about care ethics justifying tribalism are concerned that",
    answerChoices: [
      { letter: "A", text: "caring too much is psychologically harmful" },
      { letter: "B", text: "prioritizing particular relationships could justify neglecting or discriminating against outsiders" },
      { letter: "C", text: "traditional ethical theories are too demanding" },
      { letter: "D", text: "Gilligan's research methods were flawed" },
      { letter: "E", text: "caring is impossible in modern societies" },
    ],
    correctAnswer: "B",
    explanation: "The passage states critics 'worry that prioritizing particular relationships could justify neglecting strangers or even justify tribalism and discrimination.'",
    difficulty: "medium",
    passageId: "rc7-p2",
  },
  {
    id: "rc-set7-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The distinction between 'caring-about' and 'caring-for' appears to be designed to address which concern?",
    answerChoices: [
      { letter: "A", text: "That care ethics is too impartial" },
      { letter: "B", text: "That care ethics cannot address large-scale social issues where personal relationships are impossible" },
      { letter: "C", text: "That traditional ethical theories are correct" },
      { letter: "D", text: "That caring is merely descriptive" },
      { letter: "E", text: "That men cannot engage in caring" },
    ],
    correctAnswer: "B",
    explanation: "The distinction is introduced as part of care ethicists' response to the question of 'how can care ethics address large-scale social issues where personal caring relationships are impossible?'",
    difficulty: "medium",
    passageId: "rc7-p2",
  },
];

// Passage 3: Philosophy of Language
const passage3 = `The ordinary understanding of linguistic meaning holds that words refer to things in the world and sentences describe states of affairs that may be true or false. This referential theory, while intuitive, faces significant challenges when confronted with the full complexity of language use.

Gottlob Frege observed that expressions with the same reference can differ in meaning. "The morning star" and "the evening star" both refer to Venus, yet the discovery that they refer to the same object was astronomically significant—it conveyed new information that could not have been obtained by merely knowing the references. Frege concluded that meaning has two components: reference (the object denoted) and sense (the mode of presentation through which reference is determined).

This distinction helped explain puzzles about identity statements and beliefs, but it raised new questions. Where exactly are senses located? How do speakers grasp them? Frege himself suggested that senses occupy a "third realm" distinct from both physical objects and mental states—an answer that many found metaphysically extravagant.

The later Wittgenstein offered a radically different approach. Rather than seeking the meaning of words in references or abstract senses, Wittgenstein argued that meaning lies in use. To understand what a word means is to know how it functions in various "language games"—the diverse practices in which language is embedded. There is no single essence of meaning shared by all uses of a word; rather, different uses share "family resemblances" without common features.

This pragmatic approach influenced ordinary language philosophy and later speech act theory, which emphasized that utterances do things as well as say things—promising, commanding, questioning, and performing countless other functions beyond mere description. The philosophy of language has since developed in multiple directions, but the basic tension between approaches emphasizing reference and truth conditions versus those emphasizing use and practice continues to shape the field.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set7-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The referential theory of meaning has been proven correct" },
      { letter: "B", text: "The philosophy of language has developed through tensions between referential approaches and use-based approaches, with both raising important insights and challenges" },
      { letter: "C", text: "Wittgenstein definitively solved all problems in the philosophy of language" },
      { letter: "D", text: "Frege's distinction between sense and reference has been universally rejected" },
      { letter: "E", text: "Ordinary language is too simple to require philosophical analysis" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces development from referential theory through Frege's sense/reference distinction to Wittgenstein's use-based approach, concluding that tension between these approaches 'continues to shape the field.'",
    difficulty: "medium",
    passageId: "rc7-p3",
  },
  {
    id: "rc-set7-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses 'the morning star' and 'the evening star' primarily in order to",
    answerChoices: [
      { letter: "A", text: "explain ancient astronomical discoveries" },
      { letter: "B", text: "illustrate Frege's observation that expressions with the same reference can differ in meaning" },
      { letter: "C", text: "argue that Venus is the most important planet" },
      { letter: "D", text: "criticize Wittgenstein's theory" },
      { letter: "E", text: "demonstrate that all words have multiple meanings" },
    ],
    correctAnswer: "B",
    explanation: "The example illustrates Frege's point that 'expressions with the same reference can differ in meaning'—both refer to Venus but convey different information.",
    difficulty: "easy",
    passageId: "rc7-p3",
  },
  {
    id: "rc-set7-013",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Wittgenstein argued that meaning lies in",
    answerChoices: [
      { letter: "A", text: "references to physical objects" },
      { letter: "B", text: "abstract senses in a 'third realm'" },
      { letter: "C", text: "use within various language games" },
      { letter: "D", text: "truth conditions of sentences" },
      { letter: "E", text: "mental images associated with words" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'Wittgenstein argued that meaning lies in use' and in 'language games—the diverse practices in which language is embedded.'",
    difficulty: "easy",
    passageId: "rc7-p3",
  },
  {
    id: "rc-set7-014",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, critics found Frege's notion of a 'third realm' problematic because",
    answerChoices: [
      { letter: "A", text: "it was too simple" },
      { letter: "B", text: "it was considered metaphysically extravagant" },
      { letter: "C", text: "Wittgenstein proved it false" },
      { letter: "D", text: "it conflicted with astronomy" },
      { letter: "E", text: "it made language learning impossible" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that Frege's suggestion of senses in a 'third realm' was 'an answer that many found metaphysically extravagant.'",
    difficulty: "medium",
    passageId: "rc7-p3",
  },
  {
    id: "rc-set7-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The concept of 'family resemblances' is introduced to explain how",
    answerChoices: [
      { letter: "A", text: "all uses of a word share a common essence" },
      { letter: "B", text: "different uses of a word can be related without sharing common features" },
      { letter: "C", text: "words refer to family members" },
      { letter: "D", text: "meanings are genetically inherited" },
      { letter: "E", text: "Frege's sense/reference distinction works" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that 'there is no single essence of meaning shared by all uses of a word; rather, different uses share family resemblances without common features.'",
    difficulty: "medium",
    passageId: "rc7-p3",
  },
];

// Passage 4: Personal Identity
const passage4 = `What makes a person the same individual over time? This question of personal identity has profound implications for moral responsibility, survival, and the rationality of self-interested concern for the future. If the person who will experience the consequences of my present actions is not really me, in what sense am I obligated to consider those consequences?

John Locke proposed that personal identity consists in psychological continuity—specifically, in the continuity of memory. A person at time T2 is identical to a person at time T1 if and only if the person at T2 remembers experiences had by the person at T1. This view captures the intuition that what matters in survival is the continuation of one's mental life, not merely biological persistence.

However, Locke's view faces the problem of transitivity. If person A remembers being person B, and person B remembered being person C, then A should be identical to C—even if A has no memory of being C. The view also struggles with amnesia: if memory loss breaks identity, then someone who forgets their past becomes a numerically different person, which seems counterintuitive.

Derek Parfit addressed these difficulties by reconceptualizing the question. He argued that personal identity is not what matters; what matters is psychological continuity and connectedness, which come in degrees. Rather than asking whether future persons are or are not identical to present persons, we should recognize that the relation between stages of a life can be more or less close. When connections are attenuated—as in the distant future self of a young child—self-interested concern appropriately diminishes.

Parfit's view has revisionary implications. If identity is not what matters, then whether a person survives a particular procedure (such as teleportation by disintegration and reconstruction) becomes less important than whether the resulting person is psychologically continuous with the original. Some philosophers argue that this defuses intuitive puzzles about personal identity by showing they rest on confused assumptions. Others worry that abandoning identity undermines crucial moral and practical distinctions.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set7-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Locke's memory theory perfectly solves the problem of personal identity" },
      { letter: "B", text: "Personal identity over time involves contested theories, with Locke's memory-based view facing problems that led Parfit to reconceptualize what matters in survival" },
      { letter: "C", text: "Personal identity is entirely determined by DNA" },
      { letter: "D", text: "Parfit proved that persons do not exist" },
      { letter: "E", text: "Amnesia makes personal identity impossible to maintain" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Locke's theory, its problems, and Parfit's reconceptualization as responses to the question of personal identity over time.",
    difficulty: "medium",
    passageId: "rc7-p4",
  },
  {
    id: "rc-set7-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses the problem of transitivity primarily in order to",
    answerChoices: [
      { letter: "A", text: "support Locke's memory theory" },
      { letter: "B", text: "illustrate a difficulty faced by Locke's view of personal identity" },
      { letter: "C", text: "explain Parfit's theory" },
      { letter: "D", text: "argue that memory is irrelevant to identity" },
      { letter: "E", text: "demonstrate that identity is always preserved" },
    ],
    correctAnswer: "B",
    explanation: "The transitivity problem is presented as one of the 'difficulties' that 'Locke's view faces,' showing how memory-based identity creates problematic implications.",
    difficulty: "medium",
    passageId: "rc7-p4",
  },
  {
    id: "rc-set7-018",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Parfit argued that personal identity",
    answerChoices: [
      { letter: "A", text: "is the most important thing in survival" },
      { letter: "B", text: "is not what matters; psychological continuity and connectedness matter" },
      { letter: "C", text: "depends entirely on biological continuity" },
      { letter: "D", text: "is determined by memory alone" },
      { letter: "E", text: "cannot be analyzed philosophically" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states 'Parfit argued that personal identity is not what matters; what matters is psychological continuity and connectedness.'",
    difficulty: "easy",
    passageId: "rc7-p4",
  },
  {
    id: "rc-set7-019",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, Parfit would likely hold that self-interested concern for one's distant future",
    answerChoices: [
      { letter: "A", text: "should be as strong as concern for tomorrow" },
      { letter: "B", text: "may appropriately diminish when psychological connections are attenuated" },
      { letter: "C", text: "is irrational in all cases" },
      { letter: "D", text: "depends only on biological survival" },
      { letter: "E", text: "is determined by memory alone" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Parfit believed 'when connections are attenuated—as in the distant future self of a young child—self-interested concern appropriately diminishes.'",
    difficulty: "medium",
    passageId: "rc7-p4",
  },
  {
    id: "rc-set7-020",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that the question of personal identity is significant because it affects",
    answerChoices: [
      { letter: "A", text: "only abstract philosophical debates" },
      { letter: "B", text: "moral responsibility and rational self-interest" },
      { letter: "C", text: "DNA testing procedures" },
      { letter: "D", text: "immigration law exclusively" },
      { letter: "E", text: "nothing of practical importance" },
    ],
    correctAnswer: "B",
    explanation: "The opening states the question 'has profound implications for moral responsibility, survival, and the rationality of self-interested concern for the future.'",
    difficulty: "easy",
    passageId: "rc7-p4",
  },
];

export const rcQuestionsSet7: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
