// Reading Comprehension Expansion Set 33
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - MEDICAL MALPRACTICE AND STANDARD OF CARE
// ============================================

const passage1 = `Medical malpractice law rests on the concept of the "standard of care," which represents the degree of skill, care, and treatment that a reasonably competent healthcare provider in the same field would provide under similar circumstances. This legal standard attempts to balance two competing concerns: protecting patients from negligent treatment and preserving physicians' ability to exercise professional judgment without the constant threat of litigation. Courts have developed various approaches to defining and applying this standard, each with significant implications for medical practice and patient safety.

Traditionally, courts applied a locality rule, holding physicians to the standard of care customary in their own geographic community. This approach recognized that rural practitioners might lack access to the same resources, training, and specialists available in urban medical centers. However, the locality rule has been largely abandoned in favor of a national standard, reflecting the reality that modern medical education is standardized, clinical guidelines are nationally disseminated, and information technology has erased many geographic barriers to knowledge. Most jurisdictions now hold specialists, in particular, to a uniform national standard regardless of where they practice.

The determination of what constitutes the applicable standard of care typically requires expert testimony. Because courts lack the technical expertise to evaluate medical decisions independently, they rely on other physicians to describe what a competent practitioner would have done. This reliance on expert witnesses creates practical challenges: experts may disagree about proper treatment, their testimony may reflect hindsight bias, and the adversarial nature of litigation encourages partisan characterizations of medical judgment. Some commentators worry that the standard of care as articulated in courtrooms may diverge from standards applied in clinical practice.

The relationship between clinical practice guidelines and the legal standard of care remains contested. Professional organizations increasingly issue detailed guidelines specifying recommended diagnostic and treatment protocols. Some argue that adherence to such guidelines should establish compliance with the standard of care, while deviation should create at least a presumption of negligence. Others contend that guidelines cannot account for individual patient circumstances and that reducing medicine to algorithmic protocols would undermine professional judgment. Courts have generally declined to treat guidelines as determinative, viewing them as evidence relevant to but not conclusive of the standard of care.

Recent developments in medical malpractice law reflect broader debates about the relationship between law and medicine. Some states have implemented tort reform measures such as caps on noneconomic damages, requirements for expert certification before filing suit, or alternative dispute resolution mechanisms. Proponents argue these measures reduce defensive medicine and ensure healthcare access; critics respond that they deny just compensation to injured patients. The ongoing evolution of the standard of care doctrine illustrates how legal concepts must adapt to changes in medical knowledge, technology, and healthcare delivery.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp33-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The locality rule for determining medical malpractice should be restored because rural physicians cannot be expected to match urban standards." },
      { letter: "B", text: "The standard of care doctrine in medical malpractice law involves multiple complex elements and continues to evolve in response to changes in medicine, technology, and legal policy." },
      { letter: "C", text: "Expert witnesses in medical malpractice cases invariably provide unreliable testimony due to hindsight bias and adversarial pressures." },
      { letter: "D", text: "Clinical practice guidelines have now replaced expert testimony as the primary means of establishing the standard of care in medical malpractice litigation." },
      { letter: "E", text: "Tort reform measures have successfully resolved the tensions between protecting patients and preserving physician autonomy." },
    ],
    correctAnswer: "B",
    explanation: "The passage examines multiple aspects of the standard of care doctrine: its definition, the shift from locality to national standards, the role of expert testimony, the contested relationship with clinical guidelines, and ongoing legal developments. Answer B captures this comprehensive treatment of an evolving area of law. Answer A contradicts the passage's observation that the locality rule has been largely abandoned. Answer C overstates the criticism of expert testimony. Answer D misrepresents the passage's statement that courts have not treated guidelines as determinative. Answer E incorrectly suggests resolution rather than ongoing debate.",
    difficulty: "medium",
    passageId: "rc-exp33-p1",
  },
  {
    id: "rc-exp33-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the shift from a locality rule to a national standard of care was justified primarily by",
    answerChoices: [
      { letter: "A", text: "the increasing number of medical malpractice lawsuits in rural areas" },
      { letter: "B", text: "the standardization of medical education, national dissemination of guidelines, and technology's elimination of geographic knowledge barriers" },
      { letter: "C", text: "lobbying efforts by urban physicians seeking competitive advantages" },
      { letter: "D", text: "federal legislation mandating uniform standards across all states" },
      { letter: "E", text: "evidence that rural physicians were systematically underperforming compared to urban counterparts" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the locality rule was abandoned 'reflecting the reality that modern medical education is standardized, clinical guidelines are nationally disseminated, and information technology has erased many geographic barriers to knowledge.' Answer B directly paraphrases these stated justifications. The other answers introduce factors not mentioned in the passage.",
    difficulty: "easy",
    passageId: "rc-exp33-p1",
  },
  {
    id: "rc-exp33-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, those who argue that clinical practice guidelines should establish compliance with the standard of care would most likely also believe that",
    answerChoices: [
      { letter: "A", text: "physicians should never deviate from recommended protocols regardless of patient circumstances" },
      { letter: "B", text: "expert testimony should be completely eliminated from medical malpractice trials" },
      { letter: "C", text: "adherence to professional recommendations provides reliable evidence of competent medical practice" },
      { letter: "D", text: "the locality rule should be reinstated for rural practitioners" },
      { letter: "E", text: "courts are better positioned than physicians to evaluate medical decisions" },
    ],
    correctAnswer: "C",
    explanation: "Those who argue that following guidelines should establish compliance with the standard of care would logically believe that guidelines represent reliable benchmarks for competent practice. This belief underlies their position that adherence should be legally protective. Answer A is too extreme; the passage notes the opposing view about individual circumstances, suggesting even guideline proponents might acknowledge some flexibility. Answer B goes beyond what the passage suggests about this position. Answers D and E are not supported by the passage.",
    difficulty: "hard",
    passageId: "rc-exp33-p1",
  },
  {
    id: "rc-exp33-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions that 'experts may disagree about proper treatment' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that expert testimony should be prohibited in medical malpractice cases" },
      { letter: "B", text: "illustrate one of the practical challenges created by courts' reliance on expert witnesses" },
      { letter: "C", text: "suggest that there is no valid standard of care in medicine" },
      { letter: "D", text: "demonstrate that physicians are generally incompetent" },
      { letter: "E", text: "explain why the locality rule was originally adopted" },
    ],
    correctAnswer: "B",
    explanation: "The statement appears in a paragraph discussing 'practical challenges' created by reliance on expert witnesses. Expert disagreement is listed alongside hindsight bias and partisan characterizations as difficulties arising from the expert testimony system. The author is identifying problems with the current approach, not advocating its elimination or making broader claims about medicine itself.",
    difficulty: "medium",
    passageId: "rc-exp33-p1",
  },
  {
    id: "rc-exp33-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the ongoing debates about medical malpractice law can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of all concerns about the current system" },
      { letter: "B", text: "strongly advocating for immediate and comprehensive tort reform" },
      { letter: "C", text: "analytically engaged, presenting multiple perspectives without strongly endorsing a particular resolution" },
      { letter: "D", text: "nostalgic for the traditional locality rule" },
      { letter: "E", text: "certain that clinical practice guidelines should be legally determinative" },
    ],
    correctAnswer: "C",
    explanation: "Throughout the passage, the author presents competing viewpoints: balancing patient protection with physician autonomy, arguments for and against using guidelines as the standard, proponents and critics of tort reform. The author describes these debates without clearly advocating for one side, maintaining an analytical rather than partisan stance. The concluding reference to 'ongoing evolution' suggests continued engagement with unresolved questions rather than a predetermined answer.",
    difficulty: "medium",
    passageId: "rc-exp33-p1",
  },
  {
    id: "rc-exp33-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most weaken the argument that clinical practice guidelines should establish compliance with the standard of care?",
    answerChoices: [
      { letter: "A", text: "Most physicians report familiarity with the major clinical practice guidelines in their specialty." },
      { letter: "B", text: "A study found that patients with certain rare genetic conditions often respond poorly to treatments recommended by standard guidelines." },
      { letter: "C", text: "Clinical practice guidelines are typically developed by committees of recognized experts in the field." },
      { letter: "D", text: "Courts have generally been willing to admit clinical practice guidelines as evidence." },
      { letter: "E", text: "Insurance companies increasingly tie reimbursement to adherence to established guidelines." },
    ],
    correctAnswer: "B",
    explanation: "The argument for treating guideline adherence as compliance with the standard of care assumes that guidelines reliably indicate appropriate treatment. Answer B directly undermines this assumption by showing that guidelines may be inappropriate for patients with particular characteristics, supporting the counter-argument that 'guidelines cannot account for individual patient circumstances.' This evidence would suggest that blanket compliance with guidelines should not automatically shield physicians from liability when patient-specific factors warrant different treatment.",
    difficulty: "hard",
    passageId: "rc-exp33-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - BRAIN PLASTICITY AND LEARNING
// ============================================

const passage2 = `For much of the twentieth century, neuroscientists believed that the adult brain was essentially fixed in its structure and function. This view, sometimes called the "hardwired" model, held that while the developing brain exhibited considerable plasticity, adult neural circuits became static once maturation was complete. Critical periods for learning language, music, and other skills were thought to close irreversibly, leaving adults with whatever neural architecture they had developed earlier. This pessimistic view has been fundamentally revised by discoveries demonstrating that the brain retains remarkable plasticity throughout life.

Neuroplasticity refers to the brain's capacity to reorganize its structure and function in response to experience. At the cellular level, this reorganization involves multiple mechanisms: the strengthening or weakening of existing synaptic connections (synaptic plasticity), the growth of new dendritic spines and axonal branches, and even the generation of entirely new neurons in certain brain regions (neurogenesis). The hippocampus, critical for learning and memory, has become a focus of research on adult neurogenesis, with studies showing that new neurons continue to be generated in this region throughout adulthood and that this process is enhanced by physical exercise, enriched environments, and cognitive challenges.

Research on expert performers has revealed dramatic examples of experience-dependent plasticity. London taxi drivers, required to navigate the city's complex street layout from memory, show enlarged hippocampi compared to control subjects, with the degree of enlargement correlating with years of experience. Musicians who began training in childhood exhibit expanded cortical representations of the fingers used to play their instruments. Bilingual individuals demonstrate structural differences in brain regions associated with language processing. These findings suggest that intensive, prolonged engagement with complex tasks can reshape brain structure in measurable ways.

The mechanisms underlying learning-induced plasticity have been extensively studied at the molecular level. Long-term potentiation (LTP), a persistent strengthening of synaptic connections following repeated stimulation, is widely considered a cellular basis for learning and memory. LTP involves complex molecular cascades including receptor activation, calcium influx, and changes in gene expression that ultimately alter synaptic strength. Understanding these mechanisms has opened possibilities for enhancing learning through pharmacological or behavioral interventions that promote plasticity, though the translation of laboratory findings to practical applications remains challenging.

However, the recognition of adult plasticity has also complicated our understanding of learning and development. If the brain can change throughout life, why do critical periods exist at all? Research suggests that critical periods represent windows of heightened plasticity that are actively opened and closed through molecular mechanisms, possibly to stabilize learning and prevent later experiences from overwriting earlier, foundational knowledge. The balance between stability and plasticity appears carefully regulated, with implications for understanding both normal learning and neurological disorders characterized by either excessive rigidity or inappropriate plasticity.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp33-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The hardwired model of the adult brain has been replaced by an understanding of lifelong neuroplasticity, though the relationship between plasticity and critical periods requires further investigation." },
      { letter: "B", text: "London taxi drivers have larger hippocampi than other people because of their extensive navigation experience." },
      { letter: "C", text: "Long-term potentiation is the only mechanism by which learning occurs in the adult brain." },
      { letter: "D", text: "Critical periods for learning should be eliminated through pharmacological intervention." },
      { letter: "E", text: "The adult brain is completely static and incapable of any structural change." },
    ],
    correctAnswer: "A",
    explanation: "The passage traces the shift from the hardwired model to recognition of neuroplasticity, discusses mechanisms and examples of adult brain change, and concludes by examining how plasticity complicates understanding of critical periods. Answer A captures both the main thesis and the qualifying complexity. Answer B mentions only one example. Answer C overstates; LTP is described as 'a' not 'the only' cellular basis. Answer D is not supported. Answer E contradicts the passage's central argument.",
    difficulty: "medium",
    passageId: "rc-exp33-p2",
  },
  {
    id: "rc-exp33-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, adult neurogenesis in the hippocampus is enhanced by",
    answerChoices: [
      { letter: "A", text: "reduction of cognitive activity and mental rest" },
      { letter: "B", text: "physical exercise, enriched environments, and cognitive challenges" },
      { letter: "C", text: "pharmacological interventions that suppress synaptic plasticity" },
      { letter: "D", text: "the closing of critical periods during childhood" },
      { letter: "E", text: "the weakening of existing synaptic connections" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that neurogenesis in the hippocampus 'is enhanced by physical exercise, enriched environments, and cognitive challenges.' This is a direct quotation from the second paragraph.",
    difficulty: "easy",
    passageId: "rc-exp33-p2",
  },
  {
    id: "rc-exp33-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the research on London taxi drivers most strongly supports which one of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Navigation ability is entirely determined by hippocampal size at birth." },
      { letter: "B", text: "Prolonged, intensive cognitive demands can produce measurable changes in adult brain structure." },
      { letter: "C", text: "Only professional drivers are capable of neuroplasticity." },
      { letter: "D", text: "The hippocampus is the only brain region subject to experience-dependent change." },
      { letter: "E", text: "Musical training has no effect on brain structure." },
    ],
    correctAnswer: "B",
    explanation: "The taxi driver study is presented as one of several 'dramatic examples of experience-dependent plasticity.' The finding that hippocampal size correlates with years of navigation experience supports the broader claim that 'intensive, prolonged engagement with complex tasks can reshape brain structure in measurable ways.' The passage uses this as evidence for general principles of plasticity, not claims specific to taxi drivers or navigation.",
    difficulty: "medium",
    passageId: "rc-exp33-p2",
  },
  {
    id: "rc-exp33-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses long-term potentiation (LTP) primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all learning is impossible without pharmacological enhancement" },
      { letter: "B", text: "explain a molecular mechanism that underlies learning-induced changes in the brain" },
      { letter: "C", text: "criticize neuroscientists for focusing too much on cellular processes" },
      { letter: "D", text: "demonstrate that the hardwired model of the brain was correct" },
      { letter: "E", text: "suggest that critical periods should be extended through molecular intervention" },
    ],
    correctAnswer: "B",
    explanation: "LTP is introduced in the context of discussing 'mechanisms underlying learning-induced plasticity' at 'the molecular level.' The author describes LTP as a 'persistent strengthening of synaptic connections' that is 'widely considered a cellular basis for learning and memory.' The discussion explains how experience translates into lasting neural change.",
    difficulty: "medium",
    passageId: "rc-exp33-p2",
  },
  {
    id: "rc-exp33-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the potential for pharmacological enhancement of learning can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically certain that such interventions will soon transform education" },
      { letter: "B", text: "cautiously optimistic, acknowledging possibilities while noting translation challenges" },
      { letter: "C", text: "deeply skeptical that any practical applications will ever emerge" },
      { letter: "D", text: "morally opposed to any artificial enhancement of cognitive function" },
      { letter: "E", text: "indifferent to the practical implications of neuroscience research" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that understanding molecular mechanisms 'has opened possibilities for enhancing learning through pharmacological or behavioral interventions' but immediately notes that 'translation of laboratory findings to practical applications remains challenging.' This balanced formulation acknowledges potential while tempering expectations, characteristic of cautious optimism.",
    difficulty: "medium",
    passageId: "rc-exp33-p2",
  },
  {
    id: "rc-exp33-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the author would most likely agree that a disorder characterized by the inability to form new memories after brain injury",
    answerChoices: [
      { letter: "A", text: "could not possibly be improved by any intervention since the adult brain cannot change" },
      { letter: "B", text: "might potentially benefit from interventions that promote plasticity in relevant brain regions" },
      { letter: "C", text: "would be better treated by closing critical periods than by enhancing plasticity" },
      { letter: "D", text: "demonstrates that the hardwired model of the brain was correct all along" },
      { letter: "E", text: "has no connection to the mechanisms discussed in the passage" },
    ],
    correctAnswer: "B",
    explanation: "The passage establishes that the brain retains plasticity throughout life and that this plasticity can be enhanced. It also notes that understanding plasticity mechanisms has implications for 'neurological disorders characterized by either excessive rigidity or inappropriate plasticity.' Memory formation is associated with the hippocampus, which the passage identifies as a site of ongoing neurogenesis that can be enhanced. A disorder involving memory formation failure would logically be a candidate for plasticity-promoting interventions.",
    difficulty: "hard",
    passageId: "rc-exp33-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - THE ESSAY AS LITERARY FORM (MONTAIGNE)
// ============================================

const passage3 = `Michel de Montaigne's "Essais," first published in 1580 and continuously revised until his death in 1592, inaugurated a literary form that has proven remarkably durable: the personal essay. Before Montaigne, the term "essai" simply meant an attempt or trial. By applying it to his exploratory prose pieces, Montaigne transformed the word into a genre designation that persists in every European language. The essay as Montaigne conceived it was not a formal treatise or systematic argument but rather a provisional exploration of a topic, proceeding through digression, anecdote, and self-examination rather than logical demonstration.

Montaigne's innovation was fundamentally epistemic as well as formal. The essay form embodies skepticism about the possibility of certain knowledge. Rather than claiming to deliver truth, Montaigne presented his thoughts as experiments, tests of ideas against experience. His famous motto, "Que sais-je?" ("What do I know?"), captured this interrogative stance. By foregrounding his own limitations, uncertainties, and changes of mind, Montaigne created a mode of inquiry that acknowledged the partiality of all human perspectives. The essay became a vehicle for thinking rather than a repository for conclusions already reached.

Central to Montaigne's project was the examination of the self. "I am myself the matter of my book," he declared in his preface, warning readers that they would find only "a book consubstantial with its author." This focus on personal experience was not narcissistic self-absorption but rather a philosophical method. Montaigne believed that by examining himself honestly, including his contradictions and inconsistencies, he could discover truths about human nature generally. The particular self became a lens through which to view universal conditions. This inductive approach, reasoning from the concrete particular to broader principles, distinguished the essay from the deductive methods of scholastic philosophy.

The essay form has evolved considerably since Montaigne, branching into multiple sub-genres: the familiar essay emphasizing personal voice and intimate address; the critical essay engaging with texts, ideas, or cultural phenomena; the journalistic essay responding to current events; the lyric essay blending poetic techniques with prose exposition. Yet these diverse manifestations share certain features traceable to Montaigne: a tolerance for uncertainty, an investment in the writer's distinctive sensibility, a preference for exploration over conclusion. Even when contemporary essayists depart from Montaigne's methods, they often define their practice in relation to his founding example.

The essay's persistence raises questions about its cultural function. Some literary historians argue that the form flourishes in periods of epistemological uncertainty, when established systems of knowledge have been destabilized and individuals must construct meaning from personal resources. The essay's emphasis on the thinking self, on provisional rather than authoritative knowledge, may appeal particularly to modern and postmodern sensibilities skeptical of grand narratives and systematic philosophy. Whether the essay represents a retreat from collective knowledge or an honest acknowledgment of its limits remains a matter of interpretation.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp33-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Montaigne's essays were superior to all subsequent essays because he invented the form." },
      { letter: "B", text: "Montaigne's creation of the personal essay established a literary form characterized by skepticism, self-examination, and exploratory thinking that has evolved into multiple sub-genres while retaining certain core features." },
      { letter: "C", text: "The familiar essay is the only legitimate descendant of Montaigne's original form." },
      { letter: "D", text: "Contemporary essayists have completely abandoned Montaigne's methods and principles." },
      { letter: "E", text: "The essay form is declining in popularity due to its association with uncertainty." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces Montaigne's invention of the essay form, explains its epistemic and methodological characteristics, describes its evolution into sub-genres, and considers its cultural function. Answer B captures this arc: origin, defining features, evolution, and continuity. Answer A makes an unsupported evaluative claim. Answer C is contradicted by the discussion of multiple sub-genres. Answer D contradicts the statement that even departing essayists define themselves in relation to Montaigne. Answer E is not supported by the passage.",
    difficulty: "medium",
    passageId: "rc-exp33-p3",
  },
  {
    id: "rc-exp33-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Montaigne's motto 'Que sais-je?' reflects his",
    answerChoices: [
      { letter: "A", text: "certainty about the reliability of human knowledge" },
      { letter: "B", text: "interrogative stance and skepticism about the possibility of certain knowledge" },
      { letter: "C", text: "rejection of all personal experience as a source of insight" },
      { letter: "D", text: "commitment to systematic philosophical demonstration" },
      { letter: "E", text: "belief that the essay form was inappropriate for philosophical inquiry" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Montaigne's motto 'captured this interrogative stance' following discussion of how 'the essay form embodies skepticism about the possibility of certain knowledge.' The motto is presented as encapsulating his skeptical, questioning approach to knowledge.",
    difficulty: "easy",
    passageId: "rc-exp33-p3",
  },
  {
    id: "rc-exp33-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Montaigne would most likely agree that",
    answerChoices: [
      { letter: "A", text: "personal experience is irrelevant to understanding universal human conditions" },
      { letter: "B", text: "writers should conceal their uncertainties and present only firm conclusions" },
      { letter: "C", text: "honest examination of one's own contradictions can yield insights about human nature generally" },
      { letter: "D", text: "systematic deductive reasoning is the only valid method of philosophical inquiry" },
      { letter: "E", text: "essays should avoid all discussion of the author's personal life" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Montaigne believed that by examining himself honestly, including his contradictions and inconsistencies, he could discover truths about human nature generally.' Answer C directly reflects this belief. The other answers contradict the passage's characterization of Montaigne's methods and convictions.",
    difficulty: "medium",
    passageId: "rc-exp33-p3",
  },
  {
    id: "rc-exp33-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions the familiar essay, critical essay, journalistic essay, and lyric essay primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that only one of these forms is a legitimate descendant of Montaigne's essays" },
      { letter: "B", text: "demonstrate how the essay form has evolved into multiple sub-genres while retaining certain shared features" },
      { letter: "C", text: "criticize contemporary essayists for departing from Montaigne's original methods" },
      { letter: "D", text: "suggest that the essay form has become too fragmented to constitute a coherent genre" },
      { letter: "E", text: "explain why Montaigne's essays are no longer read today" },
    ],
    correctAnswer: "B",
    explanation: "These sub-genres are listed to illustrate how 'the essay form has evolved considerably since Montaigne, branching into multiple sub-genres.' The passage immediately adds that 'these diverse manifestations share certain features traceable to Montaigne,' emphasizing both evolution and continuity.",
    difficulty: "medium",
    passageId: "rc-exp33-p3",
  },
  {
    id: "rc-exp33-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the question of whether the essay represents a retreat from collective knowledge or an honest acknowledgment of its limits can best be described as",
    answerChoices: [
      { letter: "A", text: "firmly convinced that the essay represents intellectual retreat" },
      { letter: "B", text: "certain that the essay honestly acknowledges the limits of knowledge" },
      { letter: "C", text: "uninterested in this question and its implications" },
      { letter: "D", text: "recognizing it as an unresolved interpretive question rather than a matter with a definitive answer" },
      { letter: "E", text: "dismissive of both positions as irrelevant to understanding the essay" },
    ],
    correctAnswer: "D",
    explanation: "The passage concludes by stating that 'Whether the essay represents a retreat from collective knowledge or an honest acknowledgment of its limits remains a matter of interpretation.' This phrasing explicitly presents the question as unresolved, with the author declining to advocate for either position.",
    difficulty: "medium",
    passageId: "rc-exp33-p3",
  },
  {
    id: "rc-exp33-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A literary form's invention is described, its defining characteristics are explained, its historical evolution is traced, and questions about its cultural function are raised." },
      { letter: "B", text: "Two competing theories about the essay are presented and one is definitively refuted." },
      { letter: "C", text: "A chronological survey of major essayists from the sixteenth century to the present is provided." },
      { letter: "D", text: "The essay form is criticized for its lack of systematic rigor and a more logical alternative is proposed." },
      { letter: "E", text: "A series of unrelated observations about different literary genres are catalogued." },
    ],
    correctAnswer: "A",
    explanation: "The passage moves from Montaigne's invention of the essay form (paragraph 1), to its epistemic characteristics (paragraph 2), to its method of self-examination (paragraph 3), to its evolution into sub-genres (paragraph 4), and finally to questions about its cultural function (paragraph 5). Answer A accurately describes this progression from origin through development to interpretive questions.",
    difficulty: "hard",
    passageId: "rc-exp33-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - ENVIRONMENTAL JUSTICE
// ============================================

const passage4 = `Environmental justice emerged as a distinct movement and field of study in the 1980s, growing out of observations that environmental hazards were not randomly distributed across the population but rather concentrated in low-income communities and communities of color. Research documented that hazardous waste facilities, polluting industries, and contaminated sites were disproportionately located in minority neighborhoods, exposing residents to elevated health risks. This pattern suggested that environmental protection, despite its universal aspirations, had failed to benefit all communities equally and that environmental decision-making was shaped by the same structures of inequality that characterized other social domains.

The conceptual foundations of environmental justice draw from both the civil rights tradition and environmentalism while challenging certain assumptions of each. From civil rights, environmental justice borrows the language of rights, equality, and discrimination, insisting that exposure to environmental hazards constitutes a form of injustice that demands remedy. However, environmental justice advocates criticize the mainstream environmental movement for focusing primarily on wilderness preservation and aesthetic concerns while neglecting the disproportionate environmental burdens borne by marginalized communities. They argue that environmentalism must address where people live and work, not merely distant natural spaces.

Explanatory accounts of environmental injustice point to multiple causal mechanisms. Market dynamics play a role: land near industrial facilities is cheaper, attracting residents with fewer economic options. Political power disparities contribute: communities with less political influence are less able to resist the siting of unwanted facilities. Historical patterns of residential segregation have concentrated minority populations in areas later targeted for industrial development. Some researchers emphasize intentional discrimination, while others focus on structural processes that produce disparate impacts regardless of intent. These explanations are not mutually exclusive; environmental injustice likely results from multiple intersecting factors.

Policy responses to environmental injustice have taken various forms. Executive Order 12898, signed by President Clinton in 1994, directed federal agencies to identify and address disproportionate environmental and health effects of their programs on minority and low-income populations. Many states have enacted environmental justice legislation or established offices devoted to the issue. Community-based organizations have pursued both legal remedies, challenging discriminatory siting decisions under civil rights laws, and political strategies, organizing affected residents to participate in environmental decision-making. Despite these efforts, empirical evidence suggests that environmental disparities persist.

The environmental justice framework has expanded beyond its initial focus on toxic hazards to encompass a broader range of concerns. Climate change, researchers argue, exemplifies environmental injustice at global and local scales: those least responsible for greenhouse gas emissions often suffer the greatest impacts from rising temperatures, sea level rise, and extreme weather events. Access to environmental amenities such as parks, green spaces, and clean air and water has been recognized as an environmental justice issue alongside exposure to hazards. This expanded vision positions environmental justice not merely as a response to discrete wrongs but as a framework for reimagining the relationship between environmental quality and social equality.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp33-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that environmental justice concerns have been completely resolved through policy interventions" },
      { letter: "B", text: "examine the emergence, conceptual foundations, explanatory accounts, policy responses, and expanding scope of environmental justice as a movement and field of study" },
      { letter: "C", text: "prove that market dynamics are the sole cause of environmental injustice" },
      { letter: "D", text: "criticize the environmental justice movement for its lack of concrete achievements" },
      { letter: "E", text: "compare American and European approaches to environmental regulation" },
    ],
    correctAnswer: "B",
    explanation: "The passage provides a comprehensive overview of environmental justice: its emergence in the 1980s, its conceptual roots in civil rights and environmentalism, multiple explanatory accounts, policy responses, and its expanded scope to include climate and amenities. Answer B accurately describes this multi-faceted examination. The other answers either overstate claims (A, C), misrepresent the author's stance (D), or introduce topics not discussed (E).",
    difficulty: "medium",
    passageId: "rc-exp33-p4",
  },
  {
    id: "rc-exp33-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, environmental justice advocates criticize the mainstream environmental movement for",
    answerChoices: [
      { letter: "A", text: "focusing too much on the environmental burdens borne by marginalized communities" },
      { letter: "B", text: "prioritizing wilderness preservation while neglecting disproportionate burdens on marginalized communities" },
      { letter: "C", text: "rejecting the language of civil rights in environmental advocacy" },
      { letter: "D", text: "opposing Executive Order 12898 and related policy initiatives" },
      { letter: "E", text: "ignoring the role of market dynamics in environmental decision-making" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'environmental justice advocates criticize the mainstream environmental movement for focusing primarily on wilderness preservation and aesthetic concerns while neglecting the disproportionate environmental burdens borne by marginalized communities.' Answer B directly paraphrases this criticism.",
    difficulty: "easy",
    passageId: "rc-exp33-p4",
  },
  {
    id: "rc-exp33-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the author would most likely agree that environmental injustice",
    answerChoices: [
      { letter: "A", text: "results from a single, clearly identifiable cause that could be easily remedied" },
      { letter: "B", text: "affects all communities equally regardless of race or income" },
      { letter: "C", text: "likely results from multiple intersecting factors and persists despite policy efforts" },
      { letter: "D", text: "has been completely eliminated by Executive Order 12898" },
      { letter: "E", text: "is unrelated to historical patterns of residential segregation" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'environmental injustice likely results from multiple intersecting factors' and notes that 'despite these efforts, empirical evidence suggests that environmental disparities persist.' Answer C combines these two explicit claims from the passage. The other answers contradict specific statements in the passage.",
    difficulty: "medium",
    passageId: "rc-exp33-p4",
  },
  {
    id: "rc-exp33-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions climate change in the final paragraph primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that climate change is unrelated to environmental justice concerns" },
      { letter: "B", text: "illustrate how the environmental justice framework has expanded beyond its initial focus on toxic hazards" },
      { letter: "C", text: "criticize the environmental justice movement for ignoring climate issues until recently" },
      { letter: "D", text: "demonstrate that greenhouse gas emissions affect all communities equally" },
      { letter: "E", text: "explain why the civil rights tradition is irrelevant to environmental advocacy" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph opens by stating that 'The environmental justice framework has expanded beyond its initial focus on toxic hazards' and then presents climate change as an example of this expansion: 'Climate change, researchers argue, exemplifies environmental injustice at global and local scales.' The reference to climate change illustrates the broader scope of contemporary environmental justice.",
    difficulty: "medium",
    passageId: "rc-exp33-p4",
  },
  {
    id: "rc-exp33-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the various explanatory accounts of environmental injustice can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly committed to intentional discrimination as the sole explanation" },
      { letter: "B", text: "dismissive of structural explanations in favor of individual choice" },
      { letter: "C", text: "recognizing that multiple explanations may contribute and are not mutually exclusive" },
      { letter: "D", text: "uncertain about whether any explanation is valid" },
      { letter: "E", text: "convinced that market dynamics explain everything and other factors are irrelevant" },
    ],
    correctAnswer: "C",
    explanation: "After discussing various explanatory accounts including market dynamics, political power, historical segregation, intentional discrimination, and structural processes, the passage explicitly states that 'These explanations are not mutually exclusive; environmental injustice likely results from multiple intersecting factors.' This reflects an integrative rather than exclusive approach to explanation.",
    difficulty: "medium",
    passageId: "rc-exp33-p4",
  },
  {
    id: "rc-exp33-024",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, a proposal to site a new waste treatment facility would most clearly raise environmental justice concerns if",
    answerChoices: [
      { letter: "A", text: "the facility would be located in a wealthy, predominantly white suburb with strong political influence" },
      { letter: "B", text: "the facility would employ advanced pollution control technology" },
      { letter: "C", text: "the proposed location is in a low-income, minority community already hosting multiple industrial facilities" },
      { letter: "D", text: "environmental groups expressed opposition based on wilderness preservation concerns" },
      { letter: "E", text: "the facility would be subject to federal environmental regulations" },
    ],
    correctAnswer: "C",
    explanation: "The passage defines environmental justice concerns as arising when 'environmental hazards were not randomly distributed across the population but rather concentrated in low-income communities and communities of color.' A facility proposed for a community already bearing disproportionate environmental burdens would exemplify exactly this pattern of unequal distribution. Answer C describes the scenario most consistent with the concerns that motivated the environmental justice movement.",
    difficulty: "hard",
    passageId: "rc-exp33-p4",
  },
];

// Export all RC questions from Set 33
export const rcQuestionsExpSet33: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet33 = {
  passage1: { id: "rc-exp33-p1", content: passage1, topic: "law", title: "Medical Malpractice and Standard of Care" },
  passage2: { id: "rc-exp33-p2", content: passage2, topic: "natural-sciences", title: "Brain Plasticity and Learning" },
  passage3: { id: "rc-exp33-p3", content: passage3, topic: "humanities", title: "The Essay as Literary Form" },
  passage4: { id: "rc-exp33-p4", content: passage4, topic: "social-sciences", title: "Environmental Justice" },
};
