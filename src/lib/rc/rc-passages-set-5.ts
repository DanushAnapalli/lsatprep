// Reading Comprehension Expansion Set 5
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - INTERNATIONAL LAW
// ============================================

const passage1 = `The principle of state sovereignty has been the foundational concept of international law since the Peace of Westphalia in 1648. Under this principle, each state possesses supreme authority within its territory, free from external interference. Yet the twentieth and twenty-first centuries have witnessed significant challenges to absolute sovereignty, as the international community has developed doctrines permitting—and sometimes requiring—intervention in states' internal affairs.

The doctrine of humanitarian intervention emerged in response to mass atrocities that shocked the global conscience. When a state commits genocide, ethnic cleansing, or other grave human rights violations against its own population, some argue, other states may legitimately use force to protect victims even without the target state's consent. NATO's 1999 intervention in Kosovo proceeded on this basis, justified as necessary to halt Serbian atrocities against ethnic Albanians. Critics objected that the intervention lacked Security Council authorization and set a dangerous precedent for disguising geopolitical interests as humanitarian concern.

The Responsibility to Protect (R2P), endorsed by the United Nations World Summit in 2005, attempted to reconcile sovereignty with protection of human rights. R2P reconceptualized sovereignty as responsibility: states have primary responsibility to protect their populations, but when states manifestly fail to do so, the international community assumes residual responsibility. This responsibility encompasses prevention, reaction, and rebuilding, with military intervention only as a last resort after peaceful means have been exhausted.

R2P's implementation has been uneven and controversial. The 2011 intervention in Libya, authorized by Security Council resolution, was initially presented as an R2P success—protecting civilians from Muammar Gaddafi's threatened violence. But the intervention expanded into regime change, and Libya descended into chaos, leaving R2P advocates struggling to distinguish their doctrine from imperial overreach. Meanwhile, the failure to intervene meaningfully in Syria, where the Assad regime perpetrated massive atrocities, demonstrated R2P's dependence on great power consensus.

These debates reveal fundamental tensions between order and justice in international relations. Defenders of sovereignty emphasize that stable international order requires respecting state boundaries and limiting pretexts for intervention. Advocates of humanitarian intervention argue that sovereign rights cannot shield massive human rights violations. Finding a principled path between these imperatives remains one of international law's most pressing challenges.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp5-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "State sovereignty should be absolute and never subject to external interference." },
      { letter: "B", text: "The traditional principle of state sovereignty has been challenged by humanitarian intervention doctrines, but finding a principled balance between sovereignty and protection remains difficult." },
      { letter: "C", text: "The Responsibility to Protect doctrine has definitively resolved tensions between sovereignty and human rights." },
      { letter: "D", text: "NATO's intervention in Kosovo established binding international law." },
      { letter: "E", text: "The United Nations Security Council should authorize all military interventions." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces challenges to absolute sovereignty through humanitarian intervention and R2P, examines controversial implementations, and concludes that reconciling order and justice remains a pressing challenge. Answer B captures this trajectory.",
    difficulty: "medium",
    passageId: "rc-exp5-p1",
  },
  {
    id: "rc-exp5-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Responsibility to Protect doctrine reconceptualized sovereignty as",
    answerChoices: [
      { letter: "A", text: "an absolute right that cannot be limited" },
      { letter: "B", text: "a responsibility that states have to protect their populations" },
      { letter: "C", text: "a concept that should be abolished" },
      { letter: "D", text: "a principle that only applies to democratic states" },
      { letter: "E", text: "a barrier to all forms of international cooperation" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'R2P reconceptualized sovereignty as responsibility: states have primary responsibility to protect their populations.'",
    difficulty: "easy",
    passageId: "rc-exp5-p1",
  },
  {
    id: "rc-exp5-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of the Kosovo intervention would most likely argue that",
    answerChoices: [
      { letter: "A", text: "humanitarian concerns always justify military action" },
      { letter: "B", text: "the intervention could mask geopolitical motivations and set problematic precedents" },
      { letter: "C", text: "the Security Council should never authorize interventions" },
      { letter: "D", text: "state sovereignty is an outdated concept" },
      { letter: "E", text: "Serbia posed no threat to its population" },
    ],
    correctAnswer: "B",
    explanation: "The passage states critics of the Kosovo intervention 'objected that the intervention lacked Security Council authorization and set a dangerous precedent for disguising geopolitical interests as humanitarian concern.'",
    difficulty: "medium",
    passageId: "rc-exp5-p1",
  },
  {
    id: "rc-exp5-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the Libya intervention and its aftermath primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that R2P should be abandoned" },
      { letter: "B", text: "illustrate complications that arose when R2P was implemented" },
      { letter: "C", text: "praise the international community's response to humanitarian crisis" },
      { letter: "D", text: "compare European and American foreign policy approaches" },
      { letter: "E", text: "defend regime change as a legitimate goal" },
    ],
    correctAnswer: "B",
    explanation: "Libya is discussed in the paragraph on R2P's 'uneven and controversial' implementation. The expansion into regime change and subsequent chaos left 'R2P advocates struggling to distinguish their doctrine from imperial overreach.'",
    difficulty: "medium",
    passageId: "rc-exp5-p1",
  },
  {
    id: "rc-exp5-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that the failure to intervene in Syria demonstrated that",
    answerChoices: [
      { letter: "A", text: "humanitarian intervention is never justified" },
      { letter: "B", text: "R2P's implementation depends on great power agreement" },
      { letter: "C", text: "state sovereignty should always be respected" },
      { letter: "D", text: "the Assad regime committed no atrocities" },
      { letter: "E", text: "the United Nations should be abolished" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the failure to intervene in Syria 'demonstrated R2P's dependence on great power consensus,' indicating that without major power agreement, R2P cannot be effectively implemented.",
    difficulty: "medium",
    passageId: "rc-exp5-p1",
  },
  {
    id: "rc-exp5-006",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's tone in discussing the tensions between sovereignty and humanitarian intervention can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly advocating for unlimited intervention" },
      { letter: "B", text: "dismissive of humanitarian concerns" },
      { letter: "C", text: "analytically balanced while acknowledging ongoing challenges" },
      { letter: "D", text: "nostalgic for absolute sovereignty" },
      { letter: "E", text: "cynical about all international law" },
    ],
    correctAnswer: "C",
    explanation: "The author presents arguments from defenders of sovereignty and advocates of humanitarian intervention without clearly favoring either, concluding that finding a principled path 'remains one of international law's most pressing challenges.'",
    difficulty: "medium",
    passageId: "rc-exp5-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - NEUROSCIENCE
// ============================================

const passage2 = `The discovery of neuroplasticity—the brain's ability to reorganize itself by forming new neural connections throughout life—has overturned long-standing assumptions about the fixed nature of the adult brain. Early neuroscience held that the brain's structure was essentially established during childhood and remained static thereafter. We now understand that experience continuously shapes neural architecture, with implications for learning, recovery from injury, and mental health treatment.

The mechanisms of neuroplasticity operate at multiple levels. At the synaptic level, learning strengthens connections between neurons that fire together—a process summarized in the aphorism "neurons that fire together, wire together." This Hebbian plasticity underlies the formation of memories and acquisition of skills. Structural plasticity involves more dramatic changes, including the growth of new dendritic spines, axonal sprouting, and even, contrary to earlier beliefs, the generation of new neurons in certain brain regions.

Neuroplasticity's role in recovery from brain injury has transformed rehabilitation medicine. Following stroke, for instance, undamaged brain areas can sometimes take over functions previously handled by damaged regions. Constraint-induced movement therapy, which forces use of an impaired limb by constraining the healthy one, capitalizes on this plasticity to improve outcomes. Similarly, individuals who lose one sense often develop enhanced abilities in others, as neural territory originally devoted to the lost sense is recruited for alternative functions.

The therapeutic implications extend to mental health. Cognitive behavioral therapy, mindfulness practices, and other psychological interventions appear to produce measurable changes in brain structure and function. Depression, anxiety, and obsessive-compulsive disorder are increasingly understood as involving maladaptive patterns of neural connectivity that can potentially be rewired through appropriate interventions. This perspective offers hope but also raises questions about the extent to which voluntary effort can reshape deeply ingrained patterns.

However, neuroplasticity is not unlimited. Critical periods during development represent windows of heightened plasticity that, once closed, cannot be fully reopened. Age-related decline reduces the brain's adaptability, though exercise and cognitive engagement may partially counteract this decline. And while plasticity underlies beneficial adaptations, it also underlies harmful ones—chronic pain, addiction, and post-traumatic stress disorder may all involve maladaptive plastic changes that are difficult to reverse.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp5-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The brain cannot change after childhood." },
      { letter: "B", text: "Neuroplasticity has revolutionized understanding of the brain's adaptability, with implications for rehabilitation and mental health, though it has important limitations." },
      { letter: "C", text: "Constraint-induced movement therapy is the only effective treatment for stroke." },
      { letter: "D", text: "Critical periods are the most important aspect of brain development." },
      { letter: "E", text: "Neuroplasticity proves that all brain damage can be reversed." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes how neuroplasticity overturned assumptions about the fixed brain, examines mechanisms and therapeutic applications, and notes important limitations. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp5-p2",
  },
  {
    id: "rc-exp5-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, Hebbian plasticity involves",
    answerChoices: [
      { letter: "A", text: "the generation of new neurons" },
      { letter: "B", text: "the strengthening of connections between neurons that fire together" },
      { letter: "C", text: "the complete reorganization of brain structure" },
      { letter: "D", text: "the decline of neural connections with age" },
      { letter: "E", text: "the constraint of healthy limbs during therapy" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'learning strengthens connections between neurons that fire together' and that 'This Hebbian plasticity underlies the formation of memories and acquisition of skills.'",
    difficulty: "easy",
    passageId: "rc-exp5-p2",
  },
  {
    id: "rc-exp5-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, individuals who become blind might be expected to",
    answerChoices: [
      { letter: "A", text: "lose neural tissue in all brain regions" },
      { letter: "B", text: "develop enhanced abilities in other senses as visual brain areas are recruited" },
      { letter: "C", text: "experience no compensatory changes in brain organization" },
      { letter: "D", text: "require the same rehabilitation as stroke patients" },
      { letter: "E", text: "be unable to learn any new skills" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'individuals who lose one sense often develop enhanced abilities in others, as neural territory originally devoted to the lost sense is recruited for alternative functions.'",
    difficulty: "medium",
    passageId: "rc-exp5-p2",
  },
  {
    id: "rc-exp5-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions cognitive behavioral therapy and mindfulness practices primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize traditional approaches to mental health treatment" },
      { letter: "B", text: "illustrate how psychological interventions can produce measurable brain changes" },
      { letter: "C", text: "argue that medication is unnecessary for mental health conditions" },
      { letter: "D", text: "compare different types of psychotherapy" },
      { letter: "E", text: "explain the mechanisms of synaptic plasticity" },
    ],
    correctAnswer: "B",
    explanation: "These interventions are mentioned in the paragraph on mental health implications, noting they 'appear to produce measurable changes in brain structure and function.'",
    difficulty: "medium",
    passageId: "rc-exp5-p2",
  },
  {
    id: "rc-exp5-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that the relationship between neuroplasticity and chronic pain is",
    answerChoices: [
      { letter: "A", text: "entirely beneficial, allowing recovery from injury" },
      { letter: "B", text: "an example of how plasticity can produce maladaptive changes" },
      { letter: "C", text: "irrelevant to understanding pain conditions" },
      { letter: "D", text: "fully understood by current neuroscience" },
      { letter: "E", text: "identical to the relationship between plasticity and learning" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'plasticity underlies beneficial adaptations' but 'also underlies harmful ones—chronic pain, addiction, and post-traumatic stress disorder may all involve maladaptive plastic changes.'",
    difficulty: "medium",
    passageId: "rc-exp5-p2",
  },
  {
    id: "rc-exp5-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the author's claim about critical periods?",
    answerChoices: [
      { letter: "A", text: "Adults can learn new languages more easily than children." },
      { letter: "B", text: "Children who undergo surgical correction for vision impairments after age five often fail to develop normal visual abilities." },
      { letter: "C", text: "Exercise has no effect on brain plasticity at any age." },
      { letter: "D", text: "All forms of brain plasticity remain constant throughout life." },
      { letter: "E", text: "Neuroplasticity has no limitations whatsoever." },
    ],
    correctAnswer: "B",
    explanation: "The author claims that critical periods represent 'windows of heightened plasticity that, once closed, cannot be fully reopened.' Evidence that late correction of vision fails to restore normal abilities would support the existence and importance of such critical periods.",
    difficulty: "hard",
    passageId: "rc-exp5-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - ART HISTORY
// ============================================

const passage3 = `The emergence of abstract art in the early twentieth century represented one of the most radical departures in Western art history. By abandoning representation—the depiction of recognizable objects from the visible world—artists like Wassily Kandinsky, Kazimir Malevich, and Piet Mondrian sought to create a purely visual language that would communicate directly to the viewer's spirit without the mediation of subject matter.

Kandinsky, often credited as the first purely abstract painter, articulated a spiritual justification for abstraction in his 1911 treatise "Concerning the Spiritual in Art." He conceived of colors and forms as having direct psychological effects independent of any represented objects, analogous to music's capacity to evoke emotions without describing things. A yellow triangle or a blue circle, in Kandinsky's view, communicated specific spiritual vibrations that an enlightened viewer could feel without needing to ask "what does it represent?"

Malevich's Suprematism took abstraction in a more geometrically rigorous direction. His famous "Black Square" (1915), a black square painted on a white ground, eliminated not only representation but most aesthetic qualities typically valued in painting—no color relationships, no compositional complexity, no virtuosic brushwork. Malevich described the work as conveying "the supremacy of pure feeling," freed from the "ballast" of objectivity. The painting became a kind of icon of abstraction's utopian aspirations.

Critics of abstract art have questioned both its claims and its effects. Some argue that abstraction's spiritual claims are pretentious mystification concealing formal experimentation that could be justified on purely aesthetic grounds. Others contend that by abandoning representation, abstract art severed the connection between art and life that had given painting its significance. The ordinary viewer, unable to access the specialized discourse surrounding abstract work, may experience only confusion or alienation rather than spiritual elevation.

The relationship between abstraction and representation in subsequent art history has proved more complex than early abstractionists anticipated. Rather than representing the inevitable culmination of artistic progress, as some advocates claimed, abstraction became one option among many. Many significant artists have moved between abstraction and representation, or combined elements of both. The question is no longer whether abstraction is superior to representation but rather what each approach can accomplish and communicate.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp5-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Abstract art is superior to representational art in all respects." },
      { letter: "B", text: "Abstract art emerged from spiritual aspirations, faced significant criticism, and has come to be seen as one approach among many rather than art's inevitable culmination." },
      { letter: "C", text: "Kandinsky was the only important abstract artist." },
      { letter: "D", text: "Critics have definitively proven that abstract art is meaningless." },
      { letter: "E", text: "Malevich's Black Square is the greatest painting ever created." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes abstraction's emergence and spiritual justifications, examines criticisms, and notes that abstraction became 'one option among many' rather than art's inevitable direction. Answer B captures this trajectory.",
    difficulty: "medium",
    passageId: "rc-exp5-p3",
  },
  {
    id: "rc-exp5-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Kandinsky believed that",
    answerChoices: [
      { letter: "A", text: "art should always represent recognizable objects" },
      { letter: "B", text: "colors and forms have direct psychological effects independent of represented objects" },
      { letter: "C", text: "music cannot evoke emotions" },
      { letter: "D", text: "the viewer's interpretation is irrelevant" },
      { letter: "E", text: "geometric rigor is the highest artistic value" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Kandinsky 'conceived of colors and forms as having direct psychological effects independent of any represented objects.'",
    difficulty: "easy",
    passageId: "rc-exp5-p3",
  },
  {
    id: "rc-exp5-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Malevich would most likely view representational subject matter in painting as",
    answerChoices: [
      { letter: "A", text: "essential to artistic expression" },
      { letter: "B", text: "an obstacle to conveying pure feeling" },
      { letter: "C", text: "the highest achievement of Western art" },
      { letter: "D", text: "equivalent in value to abstraction" },
      { letter: "E", text: "useful for commercial purposes" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Malevich described his work as conveying 'the supremacy of pure feeling,' freed from the 'ballast' of objectivity. This suggests he viewed representation as weighing down or obscuring pure feeling.",
    difficulty: "medium",
    passageId: "rc-exp5-p3",
  },
  {
    id: "rc-exp5-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions the analogy between abstract painting and music primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that painting should become more like music" },
      { letter: "B", text: "explain how Kandinsky justified abstraction's capacity to communicate without representation" },
      { letter: "C", text: "criticize Kandinsky's theories" },
      { letter: "D", text: "compare the commercial success of different art forms" },
      { letter: "E", text: "demonstrate that all arts are fundamentally similar" },
    ],
    correctAnswer: "B",
    explanation: "The music analogy appears when explaining Kandinsky's view that colors and forms communicate 'analogous to music's capacity to evoke emotions without describing things.' It illustrates his justification for non-representational art.",
    difficulty: "medium",
    passageId: "rc-exp5-p3",
  },
  {
    id: "rc-exp5-017",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that critics who describe abstraction's spiritual claims as 'pretentious mystification' believe that",
    answerChoices: [
      { letter: "A", text: "abstract art has no aesthetic value" },
      { letter: "B", text: "spiritual justifications obscure what could be simpler aesthetic explanations" },
      { letter: "C", text: "Kandinsky's theories are entirely correct" },
      { letter: "D", text: "ordinary viewers can easily understand abstract art" },
      { letter: "E", text: "representation should be abolished from all art" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes critics arguing that abstraction's 'spiritual claims are pretentious mystification concealing formal experimentation that could be justified on purely aesthetic grounds'—suggesting simpler explanations would suffice.",
    difficulty: "medium",
    passageId: "rc-exp5-p3",
  },
  {
    id: "rc-exp5-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A movement is introduced, key figures and their ideas are discussed, criticisms are presented, and the movement's subsequent evolution is described." },
      { letter: "B", text: "Two artists are compared and one is shown to be superior." },
      { letter: "C", text: "A theory is proposed, experiments are described, and the theory is confirmed." },
      { letter: "D", text: "A problem is identified and multiple solutions are rejected." },
      { letter: "E", text: "A chronological history of art from ancient to modern times is presented." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces abstract art's emergence, discusses Kandinsky and Malevich, presents criticisms, and describes how abstraction came to be viewed as one option among many. This matches the structure in answer A.",
    difficulty: "hard",
    passageId: "rc-exp5-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - ANTHROPOLOGY
// ============================================

const passage4 = `Cultural relativism, the principle that beliefs and practices should be understood in terms of the cultural context in which they occur, has been fundamental to anthropological thought since Franz Boas established it as a methodological imperative in the early twentieth century. Against the evolutionary frameworks that had ranked societies along a developmental ladder from "primitive" to "civilized," Boas insisted that each culture must be understood on its own terms, evaluated by its own standards rather than judged against Western norms.

The relativist approach proved enormously valuable for ethnographic research. By suspending judgment and seeking to understand how practices made sense within their cultural context, anthropologists could produce richer, more accurate accounts of human diversity. Practices that appeared irrational or barbaric to outsiders often revealed sophisticated logic when understood in relation to environmental conditions, social structures, and symbolic systems. This methodology challenged ethnocentrism and contributed to greater appreciation of human cultural achievement across societies.

However, cultural relativism has faced persistent challenges when confronted with practices widely condemned by international human rights standards. Female genital cutting, honor killing, caste discrimination, and other practices violate what many consider universal human rights. Strict cultural relativism seems to require withholding moral judgment, since these practices make sense within their cultural contexts and cannot be evaluated by external standards. Critics argue that such moral paralysis is both philosophically untenable and practically harmful to vulnerable individuals within those cultures.

Anthropologists have developed various responses to this dilemma. Some distinguish between methodological relativism—suspending judgment during research to achieve better understanding—and moral relativism—the claim that no moral standards can be applied across cultures. One can use relativism as a research tool while still ultimately making moral judgments. Others argue that cultures are not monolithic and that internal critics within any culture can be supported without imposing external standards. Some anthropologists have explicitly abandoned relativism in favor of engaged advocacy for human rights.

The debate reflects deeper questions about the nature of morality and the proper role of social science. If moral standards are universal, their source and content remain contested. If they are culturally variable, the grounds for criticizing harmful practices become unclear. Anthropology continues to grapple with these tensions, seeking approaches that respect cultural difference while not abandoning ethical commitment.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp5-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that cultural relativism should be completely abandoned" },
      { letter: "B", text: "explore the value of cultural relativism for anthropology, its challenges when confronting human rights concerns, and various responses to this dilemma" },
      { letter: "C", text: "defend all cultural practices as equally valid" },
      { letter: "D", text: "trace the biography of Franz Boas" },
      { letter: "E", text: "compare anthropological and legal approaches to human rights" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses cultural relativism's value for research, the challenges it faces regarding human rights, various anthropological responses, and ongoing tensions. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp5-p4",
  },
  {
    id: "rc-exp5-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Boas argued that cultures should be",
    answerChoices: [
      { letter: "A", text: "ranked along a developmental ladder from primitive to civilized" },
      { letter: "B", text: "understood on their own terms rather than judged against Western norms" },
      { letter: "C", text: "evaluated by universal moral standards" },
      { letter: "D", text: "studied only by members of those cultures" },
      { letter: "E", text: "changed to conform to scientific principles" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Boas insisted that each culture must be understood on its own terms, evaluated by its own standards rather than judged against Western norms.'",
    difficulty: "easy",
    passageId: "rc-exp5-p4",
  },
  {
    id: "rc-exp5-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the distinction between methodological relativism and moral relativism allows anthropologists to",
    answerChoices: [
      { letter: "A", text: "avoid studying controversial cultural practices" },
      { letter: "B", text: "suspend judgment during research while still ultimately making moral judgments" },
      { letter: "C", text: "claim that all practices are morally equivalent" },
      { letter: "D", text: "ignore human rights violations entirely" },
      { letter: "E", text: "abandon all forms of relativism" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes this distinction as allowing one to 'use relativism as a research tool while still ultimately making moral judgments.'",
    difficulty: "medium",
    passageId: "rc-exp5-p4",
  },
  {
    id: "rc-exp5-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions female genital cutting and honor killing primarily in order to",
    answerChoices: [
      { letter: "A", text: "advocate for these practices" },
      { letter: "B", text: "illustrate practices that challenge cultural relativism when confronted with human rights standards" },
      { letter: "C", text: "argue that anthropology should focus only on Western cultures" },
      { letter: "D", text: "demonstrate the success of cultural relativism" },
      { letter: "E", text: "compare religious and secular practices" },
    ],
    correctAnswer: "B",
    explanation: "These practices are mentioned as examples of 'practices widely condemned by international human rights standards' that create challenges for cultural relativism, requiring anthropologists to confront tensions between relativism and moral judgment.",
    difficulty: "medium",
    passageId: "rc-exp5-p4",
  },
  {
    id: "rc-exp5-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that anthropologists who support 'internal critics' within cultures believe that",
    answerChoices: [
      { letter: "A", text: "cultures are monolithic and unified" },
      { letter: "B", text: "criticism of practices can emerge from within cultures without requiring external imposition" },
      { letter: "C", text: "all members of a culture share identical views" },
      { letter: "D", text: "external standards are always appropriate" },
      { letter: "E", text: "relativism should be completely abandoned" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that some argue 'cultures are not monolithic and that internal critics within any culture can be supported without imposing external standards.' This suggests change can come from within rather than being imposed from outside.",
    difficulty: "medium",
    passageId: "rc-exp5-p4",
  },
  {
    id: "rc-exp5-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the tensions described in the passage can best be characterized as",
    answerChoices: [
      { letter: "A", text: "confident that they have been resolved" },
      { letter: "B", text: "dismissive of their importance" },
      { letter: "C", text: "recognizing them as genuine ongoing challenges" },
      { letter: "D", text: "hostile to all forms of relativism" },
      { letter: "E", text: "indifferent to ethical questions" },
    ],
    correctAnswer: "C",
    explanation: "The author describes the debate as reflecting 'deeper questions' about morality and notes that 'Anthropology continues to grapple with these tensions,' indicating recognition of genuine, ongoing challenges rather than dismissal or resolution.",
    difficulty: "medium",
    passageId: "rc-exp5-p4",
  },
];

// Export all RC questions from Set 5
export const rcQuestionsExpSet5: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet5 = {
  passage1: { id: "rc-exp5-p1", content: passage1, topic: "law", title: "State Sovereignty and Humanitarian Intervention" },
  passage2: { id: "rc-exp5-p2", content: passage2, topic: "natural-sciences", title: "Neuroplasticity" },
  passage3: { id: "rc-exp5-p3", content: passage3, topic: "humanities", title: "The Emergence of Abstract Art" },
  passage4: { id: "rc-exp5-p4", content: passage4, topic: "social-sciences", title: "Cultural Relativism" },
};
