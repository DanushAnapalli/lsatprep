// Reading Comprehension Questions Bank - Set 17
// Science - Neuroscience & Brain

import { Question } from "../lsat-types";

// PASSAGE 1: Neuroplasticity and Learning
const passage1 = `The concept of neuroplasticity—the brain's ability to reorganize itself by forming new neural connections throughout life—has fundamentally transformed neuroscience's understanding of learning, recovery, and cognitive development. Earlier models of brain function posited that neural architecture was largely fixed after critical developmental periods in childhood, with adult brains possessing limited capacity for structural change. This view implied that cognitive abilities and functional capacities were essentially determined early in life, with minimal potential for meaningful modification in adulthood.

Contemporary research has decisively refuted this static model. Neuroimaging studies demonstrate that adult brains exhibit remarkable structural adaptations in response to experience. London taxi drivers, who must memorize the city's complex street network, show measurable enlargement of the hippocampus—a brain region crucial for spatial navigation—compared to control subjects. Musicians display enhanced cortical representation of fingers used in playing their instruments. Even short-term interventions, such as intensive juggling practice over several months, produce detectable changes in brain structure that partially reverse when practice ceases.

These findings have profound implications for education and rehabilitation. If neural circuits retain significant plasticity throughout life, then cognitive enhancement and skill acquisition remain possible at any age. This challenges age-based limitations on learning and suggests that appropriate interventions might help maintain cognitive function in aging populations. Similarly, stroke patients' recovery may depend not merely on surviving neurons compensating for lost tissue, but on systematic reorganization of neural networks—a process that therapeutic interventions might facilitate.

However, the plasticity literature requires careful interpretation. Not all neural changes are beneficial; maladaptive plasticity can reinforce detrimental patterns. Chronic pain often involves plastic changes that amplify pain signals, creating self-perpetuating suffering even after initial injuries heal. Addiction involves neural adaptations that make craving and relapse more likely. The brain's plasticity makes it not merely capable of improvement but also vulnerable to persistent dysfunction.

Moreover, while adult plasticity is greater than previously believed, it operates differently than developmental plasticity. Young children learn languages with native-like proficiency far more readily than adults, suggesting that certain forms of plasticity may be constrained by critical periods. The mechanisms underlying adult plasticity—involving factors like myelination, neurotransmitter systems, and the balance between excitatory and inhibitory signaling—differ from those in developing brains. Understanding these mechanistic differences is crucial for designing interventions that effectively harness adult plasticity.

The translation of plasticity research into practical applications also faces significant challenges. Laboratory demonstrations of structural brain changes do not automatically indicate functional improvements in real-world contexts. The hippocampal enlargement in taxi drivers reflects their expertise, but does not prove that inducing similar structural changes in others would confer comparable navigational abilities. The relationship between neural structure and cognitive function is complex, and interventions must be designed with sophisticated understanding of this relationship rather than simplistic assumptions about "exercising the brain."`;

const rcQuestions1: Question[] = [
  {
    id: "rc-set17-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Adult brains are completely incapable of structural change" },
      { letter: "B", text: "Neuroplasticity research demonstrates significant adult brain adaptability but requires careful interpretation regarding beneficial applications" },
      { letter: "C", text: "Neuroplasticity only occurs in young children during critical periods" },
      { letter: "D", text: "All neural changes are beneficial and should be maximized" },
      { letter: "E", text: "London taxi drivers have superior brains to other people" },
    ],
    correctAnswer: "B",
    explanation: "The passage establishes that adult brains show remarkable plasticity (contrary to older models) but emphasizes the need for careful interpretation, noting maladaptive plasticity, differences from developmental plasticity, and challenges in practical application. The main point balances plasticity's promise with cautions about its interpretation.",
    difficulty: "medium",
    passageId: "rc17-p1",
  },
  {
    id: "rc-set17-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions chronic pain primarily in order to",
    answerChoices: [
      { letter: "A", text: "recommend a treatment for pain conditions" },
      { letter: "B", text: "illustrate that neuroplasticity can be maladaptive and reinforce detrimental patterns" },
      { letter: "C", text: "argue that pain is purely psychological" },
      { letter: "D", text: "demonstrate that the brain never changes in adulthood" },
      { letter: "E", text: "criticize patients who suffer from chronic pain" },
    ],
    correctAnswer: "B",
    explanation: "Chronic pain is introduced to support the point that 'not all neural changes are beneficial; maladaptive plasticity can reinforce detrimental patterns,' with pain involving 'plastic changes that amplify pain signals, creating self-perpetuating suffering.'",
    difficulty: "easy",
    passageId: "rc17-p1",
  },
  {
    id: "rc-set17-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which of the following can be most reasonably inferred about the relationship between neural structure and cognitive function?",
    answerChoices: [
      { letter: "A", text: "Any structural brain change automatically produces functional improvement" },
      { letter: "B", text: "The relationship is complex, and structural changes do not guarantee functional benefits" },
      { letter: "C", text: "Neural structure is completely irrelevant to cognitive function" },
      { letter: "D", text: "Only structural changes in the hippocampus affect cognition" },
      { letter: "E", text: "Cognitive function is purely determined by genetics" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph warns that 'laboratory demonstrations of structural brain changes do not automatically indicate functional improvements in real-world contexts' and states that 'the relationship between neural structure and cognitive function is complex.'",
    difficulty: "medium",
    passageId: "rc17-p1",
  },
  {
    id: "rc-set17-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, what happened to brain structure changes observed after juggling practice?",
    answerChoices: [
      { letter: "A", text: "They became permanent regardless of continued practice" },
      { letter: "B", text: "They partially reversed when practice ceased" },
      { letter: "C", text: "They never occurred in the first place" },
      { letter: "D", text: "They only occurred in children, not adults" },
      { letter: "E", text: "They required decades of practice to appear" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'intensive juggling practice over several months, produce detectable changes in brain structure that partially reverse when practice ceases.'",
    difficulty: "easy",
    passageId: "rc17-p1",
  },
  {
    id: "rc-set17-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that children's superior language learning abilities compared to adults most likely result from",
    answerChoices: [
      { letter: "A", text: "children having more free time to practice" },
      { letter: "B", text: "developmental plasticity during critical periods that differs from adult plasticity" },
      { letter: "C", text: "adults lacking motivation to learn languages" },
      { letter: "D", text: "language being impossible to learn after age five" },
      { letter: "E", text: "children having larger brains than adults" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'young children learn languages with native-like proficiency far more readily than adults, suggesting that certain forms of plasticity may be constrained by critical periods' and that developmental plasticity mechanisms 'differ from those in developing brains.'",
    difficulty: "medium",
    passageId: "rc17-p1",
  },
];

// PASSAGE 2: Consciousness and Neural Correlates
const passage2 = `The "hard problem" of consciousness—explaining how and why subjective experiences arise from physical brain processes—remains one of philosophy and neuroscience's most vexing challenges. While researchers have made substantial progress identifying neural correlates of consciousness (NCCs), the specific patterns of brain activity associated with conscious experiences, this correlational research leaves fundamental questions unresolved. The discovery that certain brain states reliably accompany conscious perception does not explain why those brain states produce subjective experience rather than operating unconsciously, as many brain processes do.

The integrated information theory (IIT), developed by neuroscientist Giulio Tononi, represents one ambitious attempt to address this explanatory gap. IIT proposes that consciousness corresponds to integrated information: a system is conscious to the degree that it integrates information across its components in a way that cannot be decomposed into independent parts. According to IIT, consciousness is not merely correlated with certain brain activities but is identical to a particular kind of information structure. The theory generates quantitative predictions, assigning consciousness a numerical value (phi) based on system architecture.

IIT has attracted both enthusiasm and skepticism. Supporters note that it explains several consciousness features that other theories struggle with, such as why consciousness appears unified rather than fragmented, and why certain brain structures contribute more to consciousness than others despite handling comparable information volumes. The cerebral cortex, with its dense interconnections, generates high integrated information, while the cerebellum, though containing more neurons, has a more modular architecture that produces less integration.

Critics raise several objections. First, IIT's mathematical complexity makes it difficult to calculate phi for anything approaching actual brain complexity, limiting empirical testing. Second, the theory appears to imply that many non-brain systems—possibly including properly organized silicon computer chips—could be conscious if they achieve sufficient integration, a conclusion some find implausible. Third, and most fundamentally, critics argue that IIT merely restates rather than solves the hard problem: granting that consciousness correlates with integrated information, why does integrated information feel like anything?

An alternative approach, global workspace theory (GWT), emphasizes functional rather than intrinsic properties. GWT proposes that consciousness arises when information becomes globally available to multiple cognitive systems—perception, memory, reasoning, and action planning. Conscious information is "broadcast" throughout the brain, accessible to various processes, while unconscious processing remains localized. This theory aligns well with empirical findings: brain activity associated with conscious perception shows widespread activation, while unconscious processing exhibits more limited, localized patterns.

However, GWT faces its own challenges. It describes information processing architecture without explaining why global availability should produce subjective experience. Many computational systems broadcast information widely without being conscious. Moreover, GWT and IIT make different predictions about which systems can be conscious. GWT suggests consciousness requires specific functional organization, while IIT allows that diverse physical systems could be conscious if they achieve appropriate integration. These differences are not merely theoretical; they have practical implications for questions like whether patients in vegetative states might be conscious, or whether artificial systems could achieve genuine sentience.

The persistence of these debates reflects deeper uncertainty about what would constitute an adequate explanation of consciousness. Researchers disagree not only about which theory is correct but about what theories of consciousness should accomplish. Some believe that identifying precise neural correlates—mapping exactly which brain processes produce which experiences—exhausts what neuroscience can contribute. Others insist that genuine understanding requires explaining why those processes produce subjective experience. This meta-level disagreement about explanatory standards may itself need resolution before the hard problem yields to scientific investigation.`;

const rcQuestions2: Question[] = [
  {
    id: "rc-set17-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Integrated information theory has definitively solved the hard problem of consciousness" },
      { letter: "B", text: "Consciousness research has made no progress and the problem is unsolvable" },
      { letter: "C", text: "Theories like IIT and GWT attempt to explain consciousness but face significant challenges and reflect deeper disagreements about explanatory standards" },
      { letter: "D", text: "Global workspace theory is clearly superior to integrated information theory" },
      { letter: "E", text: "Neural correlates of consciousness are impossible to identify" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents IIT and GWT as attempts to explain consciousness, discusses objections to each, and concludes that deeper disagreement exists about 'what would constitute an adequate explanation of consciousness' and 'explanatory standards.' The main point addresses both the theories and the meta-level disagreements.",
    difficulty: "medium",
    passageId: "rc17-p2",
  },
  {
    id: "rc-set17-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses the cerebellum primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that the cerebellum is more important than the cortex" },
      { letter: "B", text: "illustrate IIT's explanation for why some brain structures contribute more to consciousness despite having many neurons" },
      { letter: "C", text: "prove that consciousness is located exclusively in the cerebellum" },
      { letter: "D", text: "demonstrate that neuron count is the only factor determining consciousness" },
      { letter: "E", text: "criticize integrated information theory" },
    ],
    correctAnswer: "B",
    explanation: "The cerebellum example supports IIT's explanatory power: it shows why the theory 'explains...why certain brain structures contribute more to consciousness than others despite handling comparable information volumes,' with the cerebellum's modular architecture producing less integration than the cortex.",
    difficulty: "medium",
    passageId: "rc17-p2",
  },
  {
    id: "rc-set17-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following represents a key difference between IIT and GWT?",
    answerChoices: [
      { letter: "A", text: "IIT focuses on intrinsic information structure while GWT emphasizes functional organization" },
      { letter: "B", text: "Only IIT can be tested empirically" },
      { letter: "C", text: "GWT denies that consciousness exists" },
      { letter: "D", text: "IIT was developed before any neuroscience research existed" },
      { letter: "E", text: "They make identical predictions about all systems" },
    ],
    correctAnswer: "A",
    explanation: "The passage contrasts GWT as emphasizing 'functional rather than intrinsic properties,' while IIT proposes consciousness 'is identical to a particular kind of information structure.' This intrinsic versus functional distinction is a key difference highlighted in the passage.",
    difficulty: "medium",
    passageId: "rc17-p2",
  },
  {
    id: "rc-set17-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, what does integrated information theory use to assign consciousness a numerical value?",
    answerChoices: [
      { letter: "A", text: "The number of neurons in the brain" },
      { letter: "B", text: "A measure called phi based on system architecture" },
      { letter: "C", text: "The brain's total electrical activity" },
      { letter: "D", text: "The speed of neural transmission" },
      { letter: "E", text: "The brain's physical weight" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that IIT 'generates quantitative predictions, assigning consciousness a numerical value (phi) based on system architecture.'",
    difficulty: "easy",
    passageId: "rc17-p2",
  },
  {
    id: "rc-set17-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward current theories of consciousness can best be described as",
    answerChoices: [
      { letter: "A", text: "complete dismissal of all theories as worthless" },
      { letter: "B", text: "uncritical acceptance of integrated information theory" },
      { letter: "C", text: "analytical assessment of theories' strengths and limitations without advocating for a particular solution" },
      { letter: "D", text: "certainty that consciousness can never be scientifically explained" },
      { letter: "E", text: "exclusive endorsement of global workspace theory" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both IIT and GWT, discusses supporters' and critics' arguments for each, and notes meta-level disagreements about explanatory standards, without endorsing any particular position. The approach is balanced analytical assessment.",
    difficulty: "medium",
    passageId: "rc17-p2",
  },
];

// PASSAGE 3: Memory Consolidation and Sleep
const passage3 = `The relationship between sleep and memory consolidation—the process by which newly acquired information becomes stabilized in long-term memory—has emerged as one of neuroscience's most compelling research areas. While the restorative functions of sleep have long been recognized, recent evidence suggests that sleep plays an active, perhaps essential, role in transforming fragile short-term memories into durable long-term representations. This active consolidation view challenges earlier passive theories that saw sleep's benefit for memory as merely protecting memories from interference that occurs during waking activity.

Multiple lines of evidence support sleep's active role in consolidation. Studies consistently show that sleep following learning enhances subsequent memory performance compared to equivalent periods of wakefulness. Neuroimaging reveals that brain regions activated during learning show renewed activity during subsequent sleep, suggesting that memories are being "replayed." Remarkably, this replay is not random; it reflects the temporal structure of the original experience and can even be detected in coordinated firing patterns of individual neurons recorded in animals. The hippocampus, crucial for forming new memories, shows distinctive patterns of activity during sleep that appear to facilitate the transfer of memories to the neocortex for long-term storage.

Different sleep stages appear to serve distinct consolidation functions. Slow-wave sleep (SWS), characterized by large, synchronized neural oscillations, seems particularly important for declarative memory—memories for facts and events. The slow oscillations may coordinate the replay of hippocampal memories with neocortical plasticity, enabling stable long-term storage. In contrast, REM sleep, with its wake-like brain activity patterns, may preferentially consolidate procedural memories for skills and habits. Some researchers propose that REM sleep also contributes to emotional memory processing, helping to integrate emotional experiences while reducing their affective intensity—essentially preserving the memory while dulling the emotional sting.

However, the sleep-memory relationship is more nuanced than simple enhancement. Not all memories benefit equally from sleep, and sleep may even facilitate forgetting of irrelevant information. Recent theories propose that sleep serves a selection function, strengthening important memories while allowing less relevant information to decay. Tags or markers established during initial learning may signal which memories warrant consolidation during sleep. This selective process suggests that sleep contributes not merely to preservation but to cognitive efficiency, maintaining accessibility to important information while preventing memory systems from becoming overwhelmed with minutiae.

The molecular mechanisms underlying sleep-dependent consolidation remain incompletely understood but appear to involve the same plasticity processes that support initial learning. Sleep may provide a unique neurochemical environment—with specific patterns of neurotransmitter release and neuromodulator activity—that is particularly conducive to synaptic modification. Some researchers emphasize sleep's role in reducing interference: with sensory input minimized during sleep, consolidation processes can proceed without competition from new encoding. Others focus on sleep's potential to actively enhance plasticity through molecular cascades triggered by sleep-specific neural activity patterns.

These findings have practical implications, particularly for educational practices and clinical interventions. The common student strategy of cramming before exams followed by sleep deprivation may be counterproductive if sleep loss impairs consolidation. Conversely, strategic timing of sleep after learning might optimize retention. Clinical applications are also being explored: disrupted sleep is common in psychiatric and neurological conditions, and memory impairments in these conditions might partly reflect impaired sleep-dependent consolidation. Techniques to enhance consolidation during sleep—such as targeted memory reactivation using sensory cues—show promise in experimental settings, though their real-world effectiveness remains to be established.`;

const rcQuestions3: Question[] = [
  {
    id: "rc-set17-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Sleep is completely unnecessary for memory formation" },
      { letter: "B", text: "Sleep plays an active role in memory consolidation, with different stages serving distinct functions, though mechanisms remain incompletely understood" },
      { letter: "C", text: "Only slow-wave sleep contributes to memory consolidation" },
      { letter: "D", text: "All memories benefit equally from sleep" },
      { letter: "E", text: "Sleep impairs memory rather than enhancing it" },
    ],
    correctAnswer: "B",
    explanation: "The passage establishes sleep's active role in consolidation (challenging passive theories), discusses how different sleep stages serve different memory functions, notes that mechanisms are 'incompletely understood,' and describes practical implications. The main point encompasses sleep's active role, differential functions, and remaining questions.",
    difficulty: "medium",
    passageId: "rc17-p3",
  },
  {
    id: "rc-set17-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage mentions the hippocampus primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all memory is stored permanently in the hippocampus" },
      { letter: "B", text: "illustrate a brain region showing activity patterns during sleep that appear to facilitate memory transfer" },
      { letter: "C", text: "demonstrate that the hippocampus is the only brain region involved in memory" },
      { letter: "D", text: "prove that sleep has no effect on memory" },
      { letter: "E", text: "criticize earlier memory research" },
    ],
    correctAnswer: "B",
    explanation: "The hippocampus is mentioned to support sleep's active consolidation role: 'The hippocampus, crucial for forming new memories, shows distinctive patterns of activity during sleep that appear to facilitate the transfer of memories to the neocortex for long-term storage.'",
    difficulty: "easy",
    passageId: "rc17-p3",
  },
  {
    id: "rc-set17-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following best describes the relationship between slow-wave sleep and REM sleep in memory consolidation?",
    answerChoices: [
      { letter: "A", text: "They serve identical functions for all types of memory" },
      { letter: "B", text: "Slow-wave sleep appears particularly important for declarative memory, while REM sleep may preferentially consolidate procedural memory" },
      { letter: "C", text: "Only slow-wave sleep contributes to memory; REM sleep has no memory function" },
      { letter: "D", text: "REM sleep erases all memories formed during slow-wave sleep" },
      { letter: "E", text: "Neither stage contributes to memory consolidation" },
    ],
    correctAnswer: "B",
    explanation: "The passage states: 'Slow-wave sleep...seems particularly important for declarative memory—memories for facts and events,' while 'REM sleep...may preferentially consolidate procedural memories for skills and habits.' This describes distinct, complementary functions.",
    difficulty: "medium",
    passageId: "rc17-p3",
  },
  {
    id: "rc-set17-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, what type of evidence supports the claim that memories are 'replayed' during sleep?",
    answerChoices: [
      { letter: "A", text: "Surveys asking people what they dream about" },
      { letter: "B", text: "Neuroimaging showing that brain regions activated during learning show renewed activity during sleep" },
      { letter: "C", text: "Measurements of total sleep duration" },
      { letter: "D", text: "Analysis of sleep position changes" },
      { letter: "E", text: "Studies of room temperature during sleep" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Neuroimaging reveals that brain regions activated during learning show renewed activity during subsequent sleep, suggesting that memories are being \"replayed.\"'",
    difficulty: "easy",
    passageId: "rc17-p3",
  },
  {
    id: "rc-set17-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the common student practice of cramming before exams followed by sleep deprivation is",
    answerChoices: [
      { letter: "A", text: "the most effective study strategy available" },
      { letter: "B", text: "potentially counterproductive if sleep loss impairs consolidation" },
      { letter: "C", text: "completely irrelevant to memory performance" },
      { letter: "D", text: "only problematic for procedural but not declarative memory" },
      { letter: "E", text: "beneficial because wakefulness prevents memory decay" },
    ],
    correctAnswer: "B",
    explanation: "The passage states in the practical implications section: 'The common student strategy of cramming before exams followed by sleep deprivation may be counterproductive if sleep loss impairs consolidation.'",
    difficulty: "easy",
    passageId: "rc17-p3",
  },
];

// PASSAGE 4: Brain-Computer Interfaces and Neural Prosthetics
const passage4 = `Brain-computer interfaces (BCIs)—systems that translate neural activity into commands for external devices—have progressed from science fiction to clinical reality over the past two decades. Paralyzed patients have controlled robotic limbs using signals recorded from motor cortex, and blind individuals have gained rudimentary visual perception through direct electrical stimulation of visual cortex. These achievements demonstrate that neural signals can be decoded with sufficient precision to enable meaningful interaction with technology, and that the brain retains remarkable capacity to learn to control artificial devices and interpret artificial sensory inputs.

The most successful current BCIs use invasive recording techniques, with electrode arrays implanted directly into brain tissue. These systems can record from individual neurons or small populations, providing the temporal precision and signal quality necessary for fine motor control. Recent demonstrations include paralyzed individuals achieving relatively naturalistic reaching and grasping movements with robotic arms, even incorporating rudimentary tactile feedback through electrical stimulation of somatosensory cortex. However, invasive recording carries significant risks: brain surgery itself poses dangers, and foreign bodies implanted in brain tissue trigger immune responses that can degrade signal quality over time.

Non-invasive BCIs, which record brain activity from outside the skull using electroencephalography (EEG) or functional imaging, avoid surgical risks but face severe limitations. Skull and other tissues attenuate and blur neural signals, reducing both spatial and temporal resolution. Current non-invasive BCIs can detect relatively coarse signals—such as imagining movement of different body parts—but lack the precision for fine control. Despite decades of research, non-invasive BCIs have not achieved the functionality necessary for most practical applications, though they may serve niche uses where minimal functionality suffices.

A fundamental challenge facing all BCIs concerns long-term stability. Neural signals are not static; neurons' recording properties change over time, surrounding tissue responds to implanted electrodes, and the brain's own plasticity means that the same neurons may participate in different computations at different times. Consequently, BCIs require frequent recalibration to maintain performance. Developing "plug and play" systems that function reliably over years without constant adjustment represents a major engineering challenge. Some researchers explore adaptive algorithms that continuously adjust to changing neural signals, while others investigate more biocompatible electrode designs that minimize tissue response.

The broader promise of BCIs extends beyond replacing lost function to potentially enhancing normal capabilities. Could BCIs enable faster communication than speech or typing? Might direct brain-to-brain connections revolutionize how humans share information? These transhumanist visions face both technical and conceptual obstacles. Technically, reading out complex thoughts appears far more difficult than detecting relatively simple signals like motor commands. The brain's neural code—how patterns of activity represent information—remains poorly understood, particularly for abstract concepts. Conceptually, it is unclear whether circumventing normal communication channels would genuinely enhance understanding or merely provide a different modality with its own limitations and distortions.

Ethical considerations surrounding BCIs have received increasing attention. For medical applications, standard frameworks of risk-benefit analysis and informed consent generally apply, though questions arise about appropriate risk tolerance when interventions aim to enhance rather than restore function. More profound issues concern personal identity and agency. If neural prosthetics become tightly integrated with brain function, do they become part of the person? Who controls BCIs—the user, device manufacturers, or potentially external hackers? The prospect of reading neural activity also raises privacy concerns: could BCIs inadvertently reveal thoughts the user wishes to keep private? As BCIs advance from laboratory demonstrations to commercial products, these ethical questions demand serious engagement from neuroscientists, ethicists, policymakers, and the broader public.`;

const rcQuestions4: Question[] = [
  {
    id: "rc-set17-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Brain-computer interfaces have made no progress and are purely fictional" },
      { letter: "B", text: "BCIs have achieved significant progress but face technical challenges regarding stability and precision, as well as ethical considerations" },
      { letter: "C", text: "Non-invasive BCIs are always superior to invasive approaches" },
      { letter: "D", text: "BCIs should be immediately banned due to ethical concerns" },
      { letter: "E", text: "Transhumanist enhancement is the only legitimate application of BCI technology" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents BCI achievements (paralyzed patients controlling devices), discusses technical challenges (invasive vs non-invasive trade-offs, stability problems), explores enhancement possibilities and their obstacles, and addresses ethical considerations. The central concern encompasses both technical progress/challenges and ethical dimensions.",
    difficulty: "medium",
    passageId: "rc17-p4",
  },
  {
    id: "rc-set17-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage mentions immune responses to implanted electrodes primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all brain surgery should be prohibited" },
      { letter: "B", text: "illustrate a risk of invasive BCIs that can degrade signal quality over time" },
      { letter: "C", text: "demonstrate that the immune system is dysfunctional" },
      { letter: "D", text: "prove that invasive BCIs are completely non-functional" },
      { letter: "E", text: "support the claim that non-invasive approaches are always preferable" },
    ],
    correctAnswer: "B",
    explanation: "The immune response is mentioned when discussing invasive BCI risks: 'foreign bodies implanted in brain tissue trigger immune responses that can degrade signal quality over time.' This illustrates a specific challenge facing invasive approaches.",
    difficulty: "easy",
    passageId: "rc17-p4",
  },
  {
    id: "rc-set17-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following best characterizes the trade-off between invasive and non-invasive BCIs?",
    answerChoices: [
      { letter: "A", text: "Invasive BCIs provide better signal quality but carry surgical risks and long-term stability challenges" },
      { letter: "B", text: "Non-invasive BCIs are always more effective than invasive approaches" },
      { letter: "C", text: "There is no difference between invasive and non-invasive BCIs" },
      { letter: "D", text: "Invasive BCIs are completely risk-free" },
      { letter: "E", text: "Non-invasive BCIs have achieved all practical applications" },
    ],
    correctAnswer: "A",
    explanation: "The passage contrasts invasive BCIs' advantages ('temporal precision and signal quality necessary for fine motor control') with their risks ('brain surgery itself poses dangers...immune responses') and stability challenges, while non-invasive approaches 'avoid surgical risks but face severe limitations' in resolution.",
    difficulty: "medium",
    passageId: "rc17-p4",
  },
  {
    id: "rc-set17-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, what is a major engineering challenge for BCIs mentioned in relation to long-term stability?",
    answerChoices: [
      { letter: "A", text: "Making electrodes physically larger" },
      { letter: "B", text: "Reducing the cost of manufacturing" },
      { letter: "C", text: "Developing systems that function reliably over years without constant recalibration" },
      { letter: "D", text: "Increasing the size of brain surgery incisions" },
      { letter: "E", text: "Making BCIs heavier and more visible" },
    ],
    correctAnswer: "C",
    explanation: "The passage states: 'Developing \"plug and play\" systems that function reliably over years without constant adjustment represents a major engineering challenge,' discussing this in the context of long-term stability issues.",
    difficulty: "easy",
    passageId: "rc17-p4",
  },
  {
    id: "rc-set17-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward transhumanist visions of using BCIs for enhancement can best be described as",
    answerChoices: [
      { letter: "A", text: "uncritically enthusiastic and promoting immediate implementation" },
      { letter: "B", text: "presenting the possibilities while noting significant technical and conceptual obstacles" },
      { letter: "C", text: "completely dismissive and hostile" },
      { letter: "D", text: "certain that enhancement is impossible" },
      { letter: "E", text: "advocating that enhancement is the only legitimate use of BCIs" },
    ],
    correctAnswer: "B",
    explanation: "The author presents enhancement possibilities (faster communication, brain-to-brain connections) but immediately notes 'these transhumanist visions face both technical and conceptual obstacles,' discussing difficulties with reading complex thoughts and conceptual questions about genuine enhancement. The attitude is balanced acknowledgment of possibilities alongside obstacles.",
    difficulty: "medium",
    passageId: "rc17-p4",
  },
];

export const rcQuestionsSet17: Question[] = [
  ...rcQuestions1,
  ...rcQuestions2,
  ...rcQuestions3,
  ...rcQuestions4,
];
