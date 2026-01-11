// Reading Comprehension Questions - Set 12 (Psychology & Cognitive Science)
import { Question } from "../lsat-types";

// Passage 1: Memory Reconsolidation and False Memories
const passage1 = `The traditional view of memory conceived it as a storage system analogous to video recording: experiences are encoded, stored unchanged, and retrieved when needed. This model pervaded both folk psychology and scientific understanding for decades, despite accumulating evidence that memory is far more dynamic, constructive, and malleable. The discovery of memory reconsolidation—the process by which retrieved memories become temporarily unstable and subject to modification before being stored again—has fundamentally challenged assumptions about memory's reliability and opened troubling questions about eyewitness testimony, therapeutic techniques, and the nature of personal identity.

Memory reconsolidation was initially observed in animal studies. When rats learned to associate a tone with a mild shock, they developed a fear response to the tone. Researchers discovered that blocking protein synthesis immediately after presenting the tone (which triggered memory retrieval) could eliminate the fear response, as if the original memory had been erased. The act of remembering apparently destabilized the memory trace, requiring reconsolidation through protein synthesis. If reconsolidation was prevented, the memory could not be restored.

The phenomenon extends to human memory, including autobiographical recollections. Each time we recall an event, the memory becomes labile—vulnerable to modification, distortion, or incorporation of new information. Details can be added, altered, or lost during reconsolidation. This plasticity has adaptive value: updating memories with current information allows learning from experience and integrating new knowledge. However, it also means that memory is not a faithful record but an ongoing reconstruction shaped by subsequent experiences, suggestions, and current beliefs.

Research on false memories demonstrates reconsolidation's implications. Elizabeth Loftus's experiments showed that asking misleading questions after an event can induce false memories for details that never occurred. Subjects who watched videos of automobile accidents "remembered" broken glass at the scene when questioned about cars that "smashed" into each other, even though no glass appeared in the videos. More disturbingly, extended suggestive questioning can implant entirely fabricated memories of traumatic childhood events that never happened.

These findings pose challenges for legal contexts that rely heavily on eyewitness testimony. If remembering an event makes that memory susceptible to modification, then repeated questioning, exposure to other witnesses' accounts, or suggestive interrogation techniques can contaminate memories without witnesses being aware of the alterations. The confidence with which a memory is reported—often treated as an indicator of accuracy—bears little relationship to its veracity. Vivid, emotionally charged memories may feel especially authentic yet prove entirely false.

The ethical implications for psychotherapy are equally profound. Certain therapeutic approaches encouraged "recovered memory" of repressed childhood trauma, sometimes through suggestive techniques like hypnosis or guided imagery. Some patients developed detailed memories of abuse that never occurred, leading to false accusations with devastating consequences for families. While genuine traumatic memories can be repressed and later recalled, distinguishing these from therapist-induced false memories proves extraordinarily difficult. The plasticity of memory during reconsolidation means that the very process of exploring past events can inadvertently create memories rather than uncovering them.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set12-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Memory functions exactly like video recording, providing perfect records of past events" },
      { letter: "B", text: "Memory reconsolidation demonstrates that memory is dynamic and malleable, raising questions about reliability in legal and therapeutic contexts" },
      { letter: "C", text: "All memories are entirely false and should never be trusted" },
      { letter: "D", text: "Eyewitness testimony is always completely accurate" },
      { letter: "E", text: "Psychotherapy can never uncover genuine traumatic memories" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains how reconsolidation demonstrates memory's malleability and 'opened troubling questions about eyewitness testimony, therapeutic techniques,' addressing both the scientific discovery and its practical implications.",
    difficulty: "medium",
    passageId: "rc12-p1",
  },
  {
    id: "rc-set12-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses rat experiments with tone and shock primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize all animal research as unethical" },
      { letter: "B", text: "illustrate the initial discovery that retrieved memories become destabilized and require reconsolidation" },
      { letter: "C", text: "prove that human and animal memory are completely identical" },
      { letter: "D", text: "argue that memory reconsolidation occurs only in animals" },
      { letter: "E", text: "demonstrate that protein synthesis has no relationship to memory" },
    ],
    correctAnswer: "B",
    explanation: "The rat experiments are presented as showing that 'the act of remembering apparently destabilized the memory trace, requiring reconsolidation through protein synthesis'—the initial discovery of this phenomenon.",
    difficulty: "easy",
    passageId: "rc12-p1",
  },
  {
    id: "rc-set12-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, memory's plasticity during reconsolidation has adaptive value because it",
    answerChoices: [
      { letter: "A", text: "makes all memories completely unreliable" },
      { letter: "B", text: "allows updating memories with current information and integrating new knowledge" },
      { letter: "C", text: "ensures memories never change once formed" },
      { letter: "D", text: "eliminates all possibility of learning from experience" },
      { letter: "E", text: "prevents any form of memory modification" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that plasticity 'has adaptive value: updating memories with current information allows learning from experience and integrating new knowledge.'",
    difficulty: "medium",
    passageId: "rc12-p1",
  },
  {
    id: "rc-set12-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Elizabeth Loftus's experiments demonstrated that",
    answerChoices: [
      { letter: "A", text: "memory is always perfectly accurate" },
      { letter: "B", text: "misleading questions after an event can induce false memories for details that never occurred" },
      { letter: "C", text: "eyewitness confidence is always correlated with accuracy" },
      { letter: "D", text: "memories cannot be modified once initially formed" },
      { letter: "E", text: "all automobile accident witnesses have identical memories" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Loftus's experiments 'showed that asking misleading questions after an event can induce false memories for details that never occurred,' using the broken glass example.",
    difficulty: "easy",
    passageId: "rc12-p1",
  },
  {
    id: "rc-set12-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that distinguishing genuine repressed memories from therapist-induced false memories is",
    answerChoices: [
      { letter: "A", text: "always straightforward and easy" },
      { letter: "B", text: "unnecessary since all recovered memories are false" },
      { letter: "C", text: "extraordinarily difficult due to memory's plasticity during reconsolidation" },
      { letter: "D", text: "impossible because genuine traumatic memories can never be repressed" },
      { letter: "E", text: "simple because false memories are always obviously inaccurate" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'distinguishing these from therapist-induced false memories proves extraordinarily difficult' and explains this is because 'the plasticity of memory during reconsolidation means that the very process of exploring past events can inadvertently create memories.'",
    difficulty: "hard",
    passageId: "rc12-p1",
  },
];

// Passage 2: Dual-Process Theory and Decision Making
const passage2 = `Dual-process theories of cognition propose that human thinking operates through two distinct systems: System 1, characterized by fast, automatic, intuitive processing, and System 2, characterized by slow, deliberate, analytical reasoning. This framework, popularized by Daniel Kahneman and others, has become influential in psychology, behavioral economics, and decision science. Yet while dual-process models capture important features of cognitive architecture, their theoretical status remains contentious, and their practical applications require more nuance than popularizations typically acknowledge.

System 1 processing enables rapid responses to environmental demands. Pattern recognition, emotional reactions, and habitual behaviors operate automatically, requiring minimal conscious attention or cognitive effort. When you instantly recognize a friend's face, intuitively sense danger, or automatically brake when a car ahead stops suddenly, System 1 is at work. These processes evolved to handle recurrent situations efficiently, freeing cognitive resources for novel challenges. However, System 1's speed comes at a cost: it relies on heuristics—mental shortcuts that usually work but can produce systematic errors or biases.

System 2 processing engages when situations require deliberation, calculation, or conscious reasoning. Solving mathematical problems, evaluating complex arguments, or making decisions that override intuitive impulses demand System 2's analytical capabilities. This processing is flexible and can handle novel situations, but it is slow, effortful, and capacity-limited. Because System 2 requires significant cognitive resources, we cannot engage it constantly; much of our mental life necessarily operates through System 1's automatic processes.

The interaction between systems generates many documented cognitive biases. Anchoring bias illustrates the pattern: when estimating quantities, people's judgments are influenced by arbitrary numbers they encounter first, even when those numbers are obviously irrelevant. System 1 automatically uses the number as a reference point, and System 2 often fails to adequately correct this initial influence, particularly when cognitive resources are depleted or time is limited. Similarly, confirmation bias—the tendency to seek information supporting existing beliefs—reflects System 1's pattern-matching operating uncorrected by System 2's critical evaluation.

However, critics question whether dual-process theories explain or merely redescribe phenomena. Labeling fast thinking "System 1" and slow thinking "System 2" may create an illusion of explanation without actually specifying mechanisms. How do the systems interact? What determines when System 2 intervenes to correct System 1? Under what conditions do people recognize that intuitive responses require scrutiny? These questions lack clear answers within the framework, suggesting it may be more descriptive taxonomy than explanatory theory.

Moreover, the sharp dichotomy between intuition and reasoning may oversimplify cognitive reality. Expertise demonstrates that intuition can be highly reliable when developed through extensive experience in stable environments—chess masters' intuitive pattern recognition, for instance, reflects thousands of hours analyzing positions, not mere guessing. Conversely, deliberate reasoning can produce errors when we lack relevant knowledge or apply inappropriate analytical frameworks. The contrast between good intuition (fast, accurate) and bad reasoning (slow, error-prone) troubles the simple equation of System 1 with bias and System 2 with rationality.

The practical implications also require care. If intuition is systematically biased, should we always distrust gut feelings and force ourselves to analyze decisions deliberately? Such advice ignores contexts where intuition proves superior—where analytical overthinking impairs performance by disrupting well-developed skills. The challenge lies not in universally favoring one system over the other, but in recognizing which situations call for intuitive response and which demand deliberate analysis, a meta-cognitive skill the dual-process framework itself does not directly provide.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set12-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Dual-process theory perfectly explains all human cognition with no limitations" },
      { letter: "B", text: "System 1 processing is always superior to System 2 reasoning" },
      { letter: "C", text: "Dual-process theory captures important cognitive features but faces theoretical challenges and requires nuanced application" },
      { letter: "D", text: "All intuitive thinking is inherently biased and should be eliminated" },
      { letter: "E", text: "Analytical reasoning never produces errors" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that while dual-process models 'capture important features of cognitive architecture,' their 'theoretical status remains contentious' and 'practical applications require more nuance,' then explores both contributions and limitations.",
    difficulty: "medium",
    passageId: "rc12-p2",
  },
  {
    id: "rc-set12-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses anchoring bias primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all numerical reasoning is impossible" },
      { letter: "B", text: "illustrate how System 1 and System 2 interaction generates cognitive biases" },
      { letter: "C", text: "argue that people should never use numbers" },
      { letter: "D", text: "demonstrate that System 2 always corrects System 1 errors" },
      { letter: "E", text: "show that dual-process theory has no explanatory value" },
    ],
    correctAnswer: "B",
    explanation: "Anchoring bias is presented as an example illustrating 'the pattern' where 'System 1 automatically uses the number as a reference point, and System 2 often fails to adequately correct this initial influence.'",
    difficulty: "easy",
    passageId: "rc12-p2",
  },
  {
    id: "rc-set12-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics of dual-process theory would most likely argue that",
    answerChoices: [
      { letter: "A", text: "the theory provides complete mechanistic explanations of all cognitive phenomena" },
      { letter: "B", text: "labeling fast and slow thinking as distinct systems may redescribe rather than explain phenomena" },
      { letter: "C", text: "no distinction exists between intuitive and analytical thinking" },
      { letter: "D", text: "the theory has no descriptive value whatsoever" },
      { letter: "E", text: "all questions about system interaction have clear answers" },
    ],
    correctAnswer: "B",
    explanation: "The passage states critics 'question whether dual-process theories explain or merely redescribe phenomena,' noting that 'labeling fast thinking \"System 1\" and slow thinking \"System 2\" may create an illusion of explanation without actually specifying mechanisms.'",
    difficulty: "medium",
    passageId: "rc12-p2",
  },
  {
    id: "rc-set12-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, System 2 processing is characterized by",
    answerChoices: [
      { letter: "A", text: "fast, automatic, intuitive responses" },
      { letter: "B", text: "slow, deliberate, analytical reasoning" },
      { letter: "C", text: "unlimited cognitive capacity" },
      { letter: "D", text: "pure emotional reactions" },
      { letter: "E", text: "exclusive reliance on heuristics" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly defines System 2 as 'characterized by slow, deliberate, analytical reasoning' and describes it engaging when situations 'require deliberation, calculation, or conscious reasoning.'",
    difficulty: "easy",
    passageId: "rc12-p2",
  },
  {
    id: "rc-set12-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that chess masters' intuitive pattern recognition demonstrates that",
    answerChoices: [
      { letter: "A", text: "all intuition is always unreliable" },
      { letter: "B", text: "System 1 processing is inherently biased in all contexts" },
      { letter: "C", text: "intuition can be highly reliable when developed through extensive experience in stable environments" },
      { letter: "D", text: "analytical reasoning is always superior to intuitive thinking" },
      { letter: "E", text: "expertise has no relationship to cognitive processing" },
    ],
    correctAnswer: "C",
    explanation: "The passage uses chess masters as an example demonstrating that 'intuition can be highly reliable when developed through extensive experience in stable environments,' challenging the simple equation of intuition with bias.",
    difficulty: "hard",
    passageId: "rc12-p2",
  },
];

// Passage 3: Theory of Mind and Autism
const passage3 = `The theory of mind hypothesis proposes that individuals with autism spectrum disorder experience fundamental difficulties in understanding that other people have mental states—beliefs, desires, intentions—that differ from their own and that guide those people's behavior. This cognitive account has dominated autism research for decades, shaping both scientific investigation and clinical practice. However, accumulating evidence suggests the theory of mind deficit model oversimplifies autism's cognitive profile and may reflect problematic assumptions about what constitutes social understanding.

Theory of mind is typically assessed through false belief tasks. In a classic version, children see a character place an object in location A, then witness another character move the object to location B while the first character is absent. Children are asked where the first character will look for the object. Neurotypical children above age four typically answer "location A," demonstrating understanding that the character holds a false belief about the object's location. Many autistic children fail this task, answering "location B," which researchers interpreted as inability to represent others' mental states.

Yet subsequent research has revealed complications. First, many autistic individuals do pass false belief tasks, particularly with age and verbal ability development. Those who fail as children often succeed as adolescents or adults, suggesting delayed rather than absent theory of mind. Second, performance varies dramatically across different versions of the task. Modifying task demands—reducing verbal complexity, using more naturalistic scenarios—substantially improves autistic individuals' performance, suggesting that difficulty may reflect information processing demands rather than conceptual incapacity.

More fundamentally, critics question whether false belief tasks actually measure social understanding in meaningful ways. These artificial laboratory scenarios bear little resemblance to real social interactions, which unfold dynamically with multiple contextual cues. Success on these tasks may depend heavily on executive function, language ability, and attention—capacities often affected in autism—rather than specifically on mental state attribution. Conversely, some autistic individuals who fail explicit false belief tasks demonstrate implicit social understanding in naturalistic contexts, suggesting dissociation between what these tasks measure and practical social cognition.

Alternative frameworks propose that autistic individuals process social information differently rather than lacking social understanding entirely. The intense world theory suggests that autism involves heightened perceptual sensitivity and emotional reactivity that can make social stimuli overwhelming, leading to withdrawal or avoidance that appears as social impairment. The monotropism theory emphasizes that autistic cognition involves intense focus on fewer interests or stimuli, making the rapid attention shifting required in social interaction particularly challenging. These accounts reframe autistic social differences as variations in processing style rather than deficits in core social capacities.

The implications extend beyond theoretical debates. Interventions based on the deficit model often aim to teach autistic individuals to behave more neurotypically, potentially pathologizing natural variations and ignoring autistic perspectives on their own experiences. Many autistic adults report that they understand social interactions but find the unwritten rules arbitrary, prefer different communication styles, or experience social settings as sensorily overwhelming—accounts that challenge the notion of fundamental mind-blindness. A neurodiversity perspective suggests that rather than viewing autism solely through a lens of impairment, we might recognize different cognitive styles that society often fails to accommodate. The challenge becomes not fixing deficient theory of mind but building mutual understanding across neurological differences.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set12-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The theory of mind deficit model completely explains all aspects of autism" },
      { letter: "B", text: "Autistic individuals entirely lack any form of social understanding" },
      { letter: "C", text: "The theory of mind hypothesis oversimplifies autism and alternative frameworks suggest different processing styles rather than deficits" },
      { letter: "D", text: "False belief tasks perfectly measure all dimensions of social cognition" },
      { letter: "E", text: "All autistic individuals perform identically on theory of mind tasks" },
    ],
    correctAnswer: "C",
    explanation: "The passage argues the deficit model 'oversimplifies autism's cognitive profile' and presents alternative frameworks proposing autistic individuals 'process social information differently rather than lacking social understanding entirely.'",
    difficulty: "medium",
    passageId: "rc12-p3",
  },
  {
    id: "rc-set12-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage describes the classic false belief task primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all autistic individuals completely lack theory of mind" },
      { letter: "B", text: "explain the standard assessment method that led to the deficit hypothesis" },
      { letter: "C", text: "demonstrate that neurotypical children never develop social understanding" },
      { letter: "D", text: "argue that all psychological testing is invalid" },
      { letter: "E", text: "show that theory of mind cannot be studied scientifically" },
    ],
    correctAnswer: "B",
    explanation: "The false belief task is presented as 'typically assessed' method where autistic children's failure 'researchers interpreted as inability to represent others' mental states'—explaining how the deficit hypothesis was developed.",
    difficulty: "easy",
    passageId: "rc12-p3",
  },
  {
    id: "rc-set12-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the finding that modifying task demands improves autistic individuals' performance suggests that",
    answerChoices: [
      { letter: "A", text: "all autistic individuals have identical cognitive profiles" },
      { letter: "B", text: "difficulty may reflect information processing demands rather than conceptual incapacity" },
      { letter: "C", text: "false belief tasks are the only valid measure of social understanding" },
      { letter: "D", text: "no autistic individuals ever pass theory of mind tasks" },
      { letter: "E", text: "social understanding is completely impossible for autistic people" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that improved performance with modified tasks 'suggesting that difficulty may reflect information processing demands rather than conceptual incapacity.'",
    difficulty: "medium",
    passageId: "rc12-p3",
  },
  {
    id: "rc-set12-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the intense world theory suggests that autism involves",
    answerChoices: [
      { letter: "A", text: "complete absence of emotional reactions" },
      { letter: "B", text: "heightened perceptual sensitivity and emotional reactivity making social stimuli overwhelming" },
      { letter: "C", text: "inability to perceive any sensory information" },
      { letter: "D", text: "reduced sensitivity to all environmental stimuli" },
      { letter: "E", text: "identical processing to neurotypical individuals in all contexts" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states the intense world theory 'suggests that autism involves heightened perceptual sensitivity and emotional reactivity that can make social stimuli overwhelming.'",
    difficulty: "easy",
    passageId: "rc12-p3",
  },
  {
    id: "rc-set12-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward interventions based solely on the deficit model can best be characterized as",
    answerChoices: [
      { letter: "A", text: "enthusiastic endorsement without reservation" },
      { letter: "B", text: "complete indifference to intervention approaches" },
      { letter: "C", text: "concern that they may pathologize natural variations and ignore autistic perspectives" },
      { letter: "D", text: "certainty that all interventions are equally effective" },
      { letter: "E", text: "hostility toward all forms of autism support" },
    ],
    correctAnswer: "C",
    explanation: "The passage states deficit-based interventions 'often aim to teach autistic individuals to behave more neurotypically, potentially pathologizing natural variations and ignoring autistic perspectives'—expressing critical concern.",
    difficulty: "hard",
    passageId: "rc12-p3",
  },
];

// Passage 4: Placebo Effects and Mind-Body Interaction
const passage4 = `Placebo effects—therapeutic improvements following treatments that lack specific pharmacological or physiological mechanisms—have long been dismissed as nuisances that complicate clinical trials or evidence of mere suggestion easily dismissed once patients know they received inactive treatments. Yet sophisticated research reveals placebo effects as genuine psychobiological phenomena involving measurable physiological changes that illuminate fundamental principles about how expectations, conditioning, and conscious beliefs modulate bodily processes. Understanding these mechanisms challenges simplistic mind-body dualism while raising complex ethical questions about clinical practice.

The magnitude and scope of placebo effects are impressive. In pain studies, placebo treatments can produce analgesia comparable to moderate doses of actual analgesics. Brain imaging reveals that placebo analgesia activates the same opioid and dopamine pathways as pharmacological pain relievers, with the body releasing its own endogenous opioids in response to the belief that pain relief is forthcoming. This is not imagination or faking pain reduction; measurable neurochemical changes occur. Similar mechanisms operate in Parkinson's disease, where placebo treatments trigger dopamine release in the striatum, temporarily reducing motor symptoms.

The mechanisms underlying placebo effects involve both conscious expectations and unconscious conditioning. Expectation-based placebo responses depend on beliefs about treatment efficacy: if you expect a pill to reduce pain, your brain initiates pain-reduction mechanisms even if the pill is inert. Classical conditioning also contributes—repeated pairings of environmental cues (like pill shape and color) with active drugs can lead the cues alone to trigger physiological responses previously elicited only by the drugs. Some researchers have demonstrated that placebo effects can persist even when patients are explicitly told they receive placebos, challenging assumptions that deception is necessary for such effects to operate.

However, the scope of placebo effects has important limits. While they can modulate subjective symptoms like pain, nausea, or fatigue, evidence for placebo effects on objective disease outcomes remains more controversial. Placebo treatments do not shrink tumors, lower cholesterol, or cure infections. The distinction between symptom relief and disease modification is crucial: placebos can make patients feel better without necessarily making them better in ways that alter disease progression. This distinction complicates evaluation of treatments for conditions where subjective experience constitutes the primary outcome.

The ethical implications prove complex. Standard medical ethics requires informed consent and prohibits deceiving patients. Yet if placebo effects depend on positive expectations, transparent disclosure that patients receive inactive treatments might undermine those effects—though recent research on open-label placebos suggests this concern may be overstated. Moreover, all effective treatments likely involve placebo components alongside specific mechanisms. The ritual of treatment, therapeutic relationship, and cultural expectations about medicine all contribute to outcomes. Optimizing these contextual factors could enhance treatment efficacy without deception.

Some bioethicists argue that physicians should intentionally harness placebo mechanisms through positive framing, confidence in treatment, and attention to the therapeutic relationship. Others warn that this risks paternalism and could erode trust if patients perceive manipulation. The challenge lies in honoring patient autonomy while acknowledging that how treatments are presented affects their efficacy. Perhaps the solution involves educating patients about placebo mechanisms, helping them understand that mind-body interactions are real phenomena worthy of cultivation rather than embarrassing irrationality to be eliminated. Placebo research ultimately reveals not the weakness of mind over matter but the profound integration of psychological and physiological processes that our categories often obscure.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set12-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that placebo effects are purely imaginary with no physiological basis" },
      { letter: "B", text: "demonstrate that all medical treatments are actually placebos" },
      { letter: "C", text: "describe placebo effects as genuine psychobiological phenomena while exploring their mechanisms, limits, and ethical implications" },
      { letter: "D", text: "prove that placebos can cure all diseases including cancer" },
      { letter: "E", text: "advocate deceiving all patients for therapeutic benefit" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents placebo effects as 'genuine psychobiological phenomena involving measurable physiological changes,' then systematically explores mechanisms, important limits, and complex ethical implications.",
    difficulty: "medium",
    passageId: "rc12-p4",
  },
  {
    id: "rc-set12-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses brain imaging of placebo analgesia primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all pain is imaginary" },
      { letter: "B", text: "demonstrate that placebo effects involve measurable neurochemical changes, not mere imagination" },
      { letter: "C", text: "prove that brain imaging technology is always inaccurate" },
      { letter: "D", text: "show that placebos are more effective than all actual medications" },
      { letter: "E", text: "argue against using brain imaging in research" },
    ],
    correctAnswer: "B",
    explanation: "Brain imaging evidence is presented to show that placebo analgesia 'activates the same opioid and dopamine pathways as pharmacological pain relievers'—establishing that 'this is not imagination or faking...measurable neurochemical changes occur.'",
    difficulty: "easy",
    passageId: "rc12-p4",
  },
  {
    id: "rc-set12-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that the distinction between symptom relief and disease modification is important because",
    answerChoices: [
      { letter: "A", text: "placebos can cure all diseases" },
      { letter: "B", text: "symptoms never matter to patients" },
      { letter: "C", text: "placebos can make patients feel better without necessarily altering disease progression" },
      { letter: "D", text: "objective disease outcomes are irrelevant to medical treatment" },
      { letter: "E", text: "placebo effects have no limits whatsoever" },
    ],
    correctAnswer: "C",
    explanation: "The passage states 'placebos can make patients feel better without necessarily making them better in ways that alter disease progression' and notes this 'distinction between symptom relief and disease modification is crucial.'",
    difficulty: "medium",
    passageId: "rc12-p4",
  },
  {
    id: "rc-set12-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, mechanisms underlying placebo effects involve",
    answerChoices: [
      { letter: "A", text: "only conscious expectations with no role for conditioning" },
      { letter: "B", text: "only unconscious conditioning with no role for expectations" },
      { letter: "C", text: "both conscious expectations and unconscious conditioning" },
      { letter: "D", text: "neither expectations nor conditioning" },
      { letter: "E", text: "exclusively genetic factors" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'mechanisms underlying placebo effects involve both conscious expectations and unconscious conditioning,' then explains each mechanism.",
    difficulty: "easy",
    passageId: "rc12-p4",
  },
  {
    id: "rc-set12-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward educating patients about placebo mechanisms can best be characterized as",
    answerChoices: [
      { letter: "A", text: "complete opposition" },
      { letter: "B", text: "viewing it as a potential solution that honors autonomy while acknowledging mind-body interactions" },
      { letter: "C", text: "certainty that education would eliminate all therapeutic benefits" },
      { letter: "D", text: "indifference to patient education" },
      { letter: "E", text: "conviction that patients should never understand treatment mechanisms" },
    ],
    correctAnswer: "B",
    explanation: "The passage suggests 'the solution involves educating patients about placebo mechanisms, helping them understand that mind-body interactions are real phenomena worthy of cultivation'—presenting education as constructive resolution.",
    difficulty: "hard",
    passageId: "rc12-p4",
  },
];

export const rcQuestionsSet12: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
