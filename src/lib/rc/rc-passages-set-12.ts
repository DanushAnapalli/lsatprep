// Reading Comprehension Expansion Set 12
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - INTELLECTUAL PROPERTY AND FAIR USE
// ============================================

const passage1 = `The fair use doctrine stands as one of the most contested areas of American intellectual property law. Codified in Section 107 of the Copyright Act of 1976, fair use provides a defense against copyright infringement claims for certain uses of protected works without the copyright holder's permission. The doctrine reflects a fundamental tension in copyright law: the need to incentivize creative production by protecting authors' rights against the competing interest in allowing subsequent creators and the public to build upon and engage with existing works.

Courts evaluate fair use claims by weighing four statutory factors, though the analysis often defies mechanical application. The first factor examines the purpose and character of the use, asking whether it is commercial or nonprofit educational, and critically, whether the use is "transformative"—adding new meaning, expression, or message to the original. The second factor considers the nature of the copyrighted work, with creative works receiving stronger protection than factual compilations. The third factor assesses the amount and substantiality of the portion used, both quantitatively and qualitatively. The fourth factor, often considered most important, evaluates the use's effect on the potential market for the original work.

The concept of transformative use, introduced by the Supreme Court in Campbell v. Acuff-Rose Music (1994), has become increasingly central to fair use analysis. In that case, the Court held that 2 Live Crew's parody of Roy Orbison's "Pretty Woman" could constitute fair use because the parody commented on the original, transforming its meaning. This framework has expanded well beyond parody. Courts have found transformative use in search engine thumbnail images, digital book scanning for search purposes, and artistic appropriation, reasoning that these uses serve different purposes than the originals even when copying them extensively.

Critics argue that the transformative use doctrine has become unmoored from its statutory foundations. The four-factor test increasingly collapses into a single inquiry about whether the new use seems sufficiently different from the old. This unpredictability harms both copyright holders, who cannot reliably protect their works, and potential users, who cannot confidently invest in new creative projects without expensive litigation. Some scholars advocate returning to the statutory factors' original balance, while others propose safe harbors for specific uses like text mining or educational remixing.

The digital age has intensified these tensions. Technologies that copy works as a routine matter—search engines, social media platforms, artificial intelligence training systems—test fair use's limits. Whether existing doctrine can adequately address these challenges or requires legislative intervention remains an open question. What seems clear is that fair use, however reformed, will remain essential to reconciling copyright protection with innovation and free expression.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp12-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The fair use doctrine is so fundamentally flawed that it should be abolished and replaced with a licensing system." },
      { letter: "B", text: "The fair use doctrine, particularly the transformative use concept, has evolved to address tensions between copyright protection and creative freedom, though it faces criticism and new challenges in the digital age." },
      { letter: "C", text: "The Campbell v. Acuff-Rose decision definitively resolved all ambiguities in fair use law." },
      { letter: "D", text: "Commercial uses of copyrighted material can never qualify as fair use under any circumstances." },
      { letter: "E", text: "The four statutory factors for fair use are applied consistently and predictably by all courts." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the fair use doctrine's codification, explains the four factors with emphasis on transformative use, discusses criticisms of unpredictability, and notes digital age challenges. Answer B captures this comprehensive treatment of the doctrine's evolution and ongoing tensions.",
    difficulty: "medium",
    passageId: "rc-exp12-p1",
  },
  {
    id: "rc-exp12-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, a use is considered 'transformative' when it",
    answerChoices: [
      { letter: "A", text: "copies less than fifty percent of the original work" },
      { letter: "B", text: "generates profit for the copyright holder" },
      { letter: "C", text: "adds new meaning, expression, or message to the original" },
      { letter: "D", text: "occurs exclusively in educational settings" },
      { letter: "E", text: "involves only factual rather than creative works" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the first factor asks 'whether the use is transformative—adding new meaning, expression, or message to the original.'",
    difficulty: "easy",
    passageId: "rc-exp12-p1",
  },
  {
    id: "rc-exp12-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, it can be inferred that critics of the transformative use doctrine believe that",
    answerChoices: [
      { letter: "A", text: "parody should never be protected under fair use" },
      { letter: "B", text: "the doctrine has made fair use outcomes less predictable by overshadowing other statutory factors" },
      { letter: "C", text: "the Campbell decision should be applied more expansively" },
      { letter: "D", text: "copyright protection should be eliminated entirely" },
      { letter: "E", text: "all digital copying constitutes fair use" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics argue 'the transformative use doctrine has become unmoored from its statutory foundations' and that 'the four-factor test increasingly collapses into a single inquiry,' causing 'unpredictability' that harms both copyright holders and potential users.",
    difficulty: "medium",
    passageId: "rc-exp12-p1",
  },
  {
    id: "rc-exp12-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions search engine thumbnail images, digital book scanning, and artistic appropriation primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize courts for misapplying the fair use doctrine" },
      { letter: "B", text: "illustrate how the transformative use framework has expanded beyond parody to other contexts" },
      { letter: "C", text: "argue that these uses should not be protected under fair use" },
      { letter: "D", text: "explain the historical origins of the Copyright Act of 1976" },
      { letter: "E", text: "compare American and European approaches to copyright" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear after the discussion of how the transformative use framework 'has expanded well beyond parody,' demonstrating that courts have found transformative use 'in search engine thumbnail images, digital book scanning for search purposes, and artistic appropriation.'",
    difficulty: "medium",
    passageId: "rc-exp12-p1",
  },
  {
    id: "rc-exp12-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the future of fair use doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "certain that legislative intervention is unnecessary" },
      { letter: "B", text: "convinced that fair use should be abolished" },
      { letter: "C", text: "uncertain about whether current doctrine can address digital challenges, but confident that fair use will remain essential" },
      { letter: "D", text: "dismissive of the importance of copyright protection" },
      { letter: "E", text: "hostile toward all forms of technological innovation" },
    ],
    correctAnswer: "C",
    explanation: "The author states that 'Whether existing doctrine can adequately address these challenges or requires legislative intervention remains an open question,' showing uncertainty, but also that 'fair use, however reformed, will remain essential,' showing confidence in its continued importance.",
    difficulty: "medium",
    passageId: "rc-exp12-p1",
  },
  {
    id: "rc-exp12-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument that the transformative use doctrine has created unpredictability?",
    answerChoices: [
      { letter: "A", text: "A study found that courts consistently apply all four statutory factors with equal weight." },
      { letter: "B", text: "Research revealed that appellate courts reverse district court fair use decisions at significantly higher rates than other copyright issues." },
      { letter: "C", text: "The Campbell decision has been cited approvingly by courts in every federal circuit." },
      { letter: "D", text: "Most fair use cases settle before trial, avoiding the need for judicial determination." },
      { letter: "E", text: "Congress has declined to amend Section 107 since its 1976 enactment." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue that the transformative use doctrine causes unpredictability. If appellate courts frequently reverse district courts on fair use issues, this would demonstrate that even judges cannot reliably predict outcomes, directly supporting the critics' claim of doctrinal unpredictability.",
    difficulty: "hard",
    passageId: "rc-exp12-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - PLATE TECTONICS
// ============================================

const passage2 = `The theory of plate tectonics, which revolutionized earth sciences in the 1960s, provides a unifying framework for understanding earthquakes, volcanic activity, mountain building, and the distribution of fossils and rock types across continents. The theory holds that Earth's rigid outer layer, the lithosphere, is divided into approximately fifteen major plates that float on the partially molten asthenosphere below. These plates move slowly but continuously, driven by convection currents in the underlying mantle, and their interactions at plate boundaries produce the geological phenomena that shape our planet's surface.

The intellectual roots of plate tectonics extend to Alfred Wegener's 1912 hypothesis of continental drift. Wegener assembled compelling evidence that continents had once formed a single supercontinent, Pangaea, which subsequently fragmented. The jigsaw-puzzle fit of South American and African coastlines, matching geological formations on now-separated continents, and identical fossil species found on landmasses separated by thousands of kilometers of ocean all pointed toward former continental unity. Yet Wegener could not identify a mechanism capable of moving continents through oceanic crust, and his hypothesis was largely dismissed by the geological establishment.

The missing mechanism emerged from oceanographic research in the mid-twentieth century. Mapping of the ocean floor revealed a global system of mid-ocean ridges where new oceanic crust forms from rising magma. Harry Hess proposed in 1962 that the seafloor spreads outward from these ridges, carrying continents along like passengers on a conveyor belt. Paleomagnetic studies confirmed this model: oceanic crust records Earth's magnetic field at the time of its formation, and symmetric patterns of magnetic reversals on either side of mid-ocean ridges demonstrated that new crust indeed forms at the ridges and moves away.

Plate boundaries exhibit three fundamental types of interaction. At divergent boundaries, plates separate and new lithosphere forms; the Mid-Atlantic Ridge exemplifies this process. At convergent boundaries, plates collide: when oceanic crust meets continental crust, the denser oceanic plate subducts beneath the continental plate, generating volcanic arcs and deep ocean trenches like those surrounding the Pacific. When two continental plates collide, neither subducts easily, and the crust crumples upward to form mountain ranges—the Himalayas arose from the collision of the Indian and Eurasian plates. At transform boundaries, plates slide horizontally past each other, producing earthquake-prone fault zones like California's San Andreas Fault.

Plate tectonics not only explains present geological activity but also illuminates Earth's deep history. Geologists have reconstructed the positions of continents across hundreds of millions of years, identifying ancient supercontinents that formed and fragmented before Pangaea. The theory has practical applications in locating mineral deposits, assessing seismic and volcanic hazards, and understanding climate patterns across geological time. It remains one of the most successful unifying theories in the natural sciences.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp12-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Alfred Wegener was unfairly ignored by the scientific community despite having complete evidence for continental drift." },
      { letter: "B", text: "Plate tectonics theory, building on earlier continental drift hypotheses, explains how lithospheric plate movements at various boundary types produce major geological phenomena and illuminate Earth's history." },
      { letter: "C", text: "The discovery of mid-ocean ridges disproved all previous geological theories." },
      { letter: "D", text: "Earthquake prediction has become completely reliable due to plate tectonics theory." },
      { letter: "E", text: "The asthenosphere is the most important layer of Earth's interior." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces plate tectonics as a unifying framework, traces its development from Wegener's hypothesis through the discovery of seafloor spreading, describes plate boundary types, and discusses the theory's explanatory power for Earth's history. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp12-p2",
  },
  {
    id: "rc-exp12-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, Wegener's continental drift hypothesis was initially rejected primarily because",
    answerChoices: [
      { letter: "A", text: "the fossil evidence he presented was fabricated" },
      { letter: "B", text: "he could not identify a mechanism capable of moving continents" },
      { letter: "C", text: "the coastlines of South America and Africa do not actually fit together" },
      { letter: "D", text: "paleomagnetic studies contradicted his claims" },
      { letter: "E", text: "ocean floor mapping had already disproved his hypothesis" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Wegener could not identify a mechanism capable of moving continents through oceanic crust, and his hypothesis was largely dismissed by the geological establishment.'",
    difficulty: "easy",
    passageId: "rc-exp12-p2",
  },
  {
    id: "rc-exp12-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, it can be inferred that the formation of the Himalayas differs from the formation of volcanic arcs because",
    answerChoices: [
      { letter: "A", text: "the Himalayas formed at a divergent boundary rather than a convergent boundary" },
      { letter: "B", text: "continental-continental collisions cause crustal crumpling rather than subduction" },
      { letter: "C", text: "volcanic arcs are older than the Himalayas" },
      { letter: "D", text: "the Himalayas formed through transform boundary interactions" },
      { letter: "E", text: "volcanic arcs do not involve plate movement" },
    ],
    correctAnswer: "B",
    explanation: "The passage contrasts oceanic-continental convergence, which produces 'volcanic arcs' through subduction, with continental-continental collision where 'neither subducts easily, and the crust crumples upward to form mountain ranges—the Himalayas arose from the collision of the Indian and Eurasian plates.'",
    difficulty: "medium",
    passageId: "rc-exp12-p2",
  },
  {
    id: "rc-exp12-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses symmetric patterns of magnetic reversals primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Wegener's reliance on fossil evidence" },
      { letter: "B", text: "provide evidence confirming that new oceanic crust forms at mid-ocean ridges and spreads outward" },
      { letter: "C", text: "explain why plate tectonics remains controversial" },
      { letter: "D", text: "argue that Earth's magnetic field is more important than previously believed" },
      { letter: "E", text: "demonstrate that continental drift occurred more rapidly than Wegener proposed" },
    ],
    correctAnswer: "B",
    explanation: "The magnetic reversal patterns are introduced to confirm Hess's seafloor spreading model: 'symmetric patterns of magnetic reversals on either side of mid-ocean ridges demonstrated that new crust indeed forms at the ridges and moves away.'",
    difficulty: "medium",
    passageId: "rc-exp12-p2",
  },
  {
    id: "rc-exp12-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward plate tectonics theory can best be characterized as",
    answerChoices: [
      { letter: "A", text: "skeptical of its scientific validity" },
      { letter: "B", text: "ambivalent about its explanatory power" },
      { letter: "C", text: "appreciative of it as a successful unifying theory with broad applications" },
      { letter: "D", text: "dismissive of its practical value" },
      { letter: "E", text: "cautiously hopeful that it will eventually be confirmed" },
    ],
    correctAnswer: "C",
    explanation: "The author describes plate tectonics as having 'revolutionized earth sciences,' providing 'a unifying framework,' having 'practical applications,' and being 'one of the most successful unifying theories in the natural sciences.' This reflects clear appreciation for its success and utility.",
    difficulty: "easy",
    passageId: "rc-exp12-p2",
  },
  {
    id: "rc-exp12-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A theory is introduced, its historical development traced, its mechanisms and applications explained, and its significance assessed." },
      { letter: "B", text: "Two competing hypotheses are compared and one is declared definitively superior." },
      { letter: "C", text: "A phenomenon is described, several failed explanations reviewed, and the conclusion drawn that no adequate explanation exists." },
      { letter: "D", text: "An experiment is designed, conducted, and its results analyzed." },
      { letter: "E", text: "A chronological history of geological research from ancient times to the present is presented." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces plate tectonics theory (paragraph 1), traces development from Wegener through Hess (paragraphs 2-3), explains boundary types (paragraph 4), and discusses applications and significance (paragraph 5).",
    difficulty: "medium",
    passageId: "rc-exp12-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - IMPRESSIONISM
// ============================================

const passage3 = `French Impressionism, emerging in the 1860s and 1870s, constituted one of the most consequential breaks with artistic tradition in Western art history. Painters such as Claude Monet, Pierre-Auguste Renoir, Edgar Degas, and Berthe Morisot rejected the polished techniques and historical subjects favored by the official Salon, instead capturing contemporary life with visible brushstrokes and an unprecedented attention to the transient effects of light. Their work scandalized academic critics but ultimately transformed how artists conceived the relationship between perception and representation.

The Impressionists' technical innovations arose from both scientific developments and practical circumstances. Research into color theory, particularly Michel Eugene Chevreul's work on simultaneous contrast, informed their understanding of how adjacent colors interact optically. Rather than mixing pigments on the palette to produce muted tones, Impressionists applied pure, intense colors in separate strokes, allowing the viewer's eye to blend them perceptually. This technique produced the luminous, vibrating surfaces that characterize their canvases. Working outdoors—en plein air—with newly available portable paint tubes enabled them to capture atmospheric conditions directly rather than reconstructing scenes in the studio from sketches.

Beyond technique, Impressionism embodied a philosophical reorientation toward subjective visual experience. Academic painting had emphasized the clear delineation of form and the rendering of textures with illusionistic precision. The Impressionists, by contrast, painted what they saw rather than what they knew an object to look like. Monet's serial paintings of haystacks, the Rouen Cathedral, and water lilies demonstrated that the same subject could appear radically different under varying conditions of light and atmosphere. The paintings became records not of stable objects but of fleeting perceptual moments—hence the movement's name, derived from Monet's "Impression, Sunrise" (1872).

The social world the Impressionists depicted was distinctly modern and bourgeois. Their canvases teemed with Parisian cafes, ballet rehearsals, boating parties, and suburban leisure scenes. This focus on contemporary urban and suburban life distinguished them from the Romantics' sublime landscapes and the Neoclassicists' historical dramas. Yet Impressionist paintings were not simply documentary; their fragmented compositions, unusual perspectives, and cropped figures—influenced by Japanese prints and photography—gave familiar scenes an unexpected visual dynamism. Degas's dancers and Renoir's crowded gatherings invite the viewer into a world caught mid-motion, neither posed nor complete.

Impressionism's influence extended far beyond its original practitioners. Post-Impressionists like Cezanne, Van Gogh, and Seurat built upon and reacted against Impressionist principles, leading eventually to the abstraction of the twentieth century. The movement also transformed the art market: excluded from official exhibitions, the Impressionists organized independent shows and cultivated dealer relationships that foreshadowed modern gallery practices. Today, Impressionist works command astronomical prices and attract record museum crowds, their once-revolutionary techniques now appreciated as beautiful rather than subversive.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp12-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Impressionism was primarily a commercial movement designed to appeal to wealthy collectors." },
      { letter: "B", text: "French Impressionism represented a revolutionary break with artistic tradition through technical and philosophical innovations that transformed art and influenced subsequent movements." },
      { letter: "C", text: "Claude Monet was the only significant Impressionist painter." },
      { letter: "D", text: "Academic critics correctly identified the weaknesses in Impressionist technique." },
      { letter: "E", text: "Japanese prints were the sole inspiration for Impressionist composition." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Impressionism as 'one of the most consequential breaks with artistic tradition,' explains its technical and philosophical innovations, discusses its subject matter and compositional features, and traces its influence on subsequent art. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp12-p3",
  },
  {
    id: "rc-exp12-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Impressionist painters achieved luminous, vibrating surfaces by",
    answerChoices: [
      { letter: "A", text: "mixing all pigments thoroughly on the palette before application" },
      { letter: "B", text: "applying pure, intense colors in separate strokes that the viewer's eye blends perceptually" },
      { letter: "C", text: "using only black and white pigments" },
      { letter: "D", text: "coating their canvases with reflective materials" },
      { letter: "E", text: "painting exclusively at night under artificial light" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Rather than mixing pigments on the palette to produce muted tones, Impressionists applied pure, intense colors in separate strokes, allowing the viewer's eye to blend them perceptually. This technique produced the luminous, vibrating surfaces.'",
    difficulty: "easy",
    passageId: "rc-exp12-p3",
  },
  {
    id: "rc-exp12-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Monet's serial paintings of haystacks, the Rouen Cathedral, and water lilies most strongly support which of the following conclusions?",
    answerChoices: [
      { letter: "A", text: "Monet believed that haystacks were more beautiful than cathedrals." },
      { letter: "B", text: "The same subject can appear radically different depending on light and atmospheric conditions." },
      { letter: "C", text: "Serial paintings were required by the official Salon for exhibition." },
      { letter: "D", text: "Monet rejected the influence of Japanese prints." },
      { letter: "E", text: "These paintings were completed entirely in studio settings." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Monet's serial paintings 'demonstrated that the same subject could appear radically different under varying conditions of light and atmosphere,' supporting the Impressionist emphasis on fleeting perceptual moments over stable objects.",
    difficulty: "medium",
    passageId: "rc-exp12-p3",
  },
  {
    id: "rc-exp12-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Japanese prints and photography primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Impressionism was derivative and unoriginal" },
      { letter: "B", text: "explain influences that contributed to the Impressionists' distinctive compositional features" },
      { letter: "C", text: "criticize the Impressionists for abandoning French artistic traditions" },
      { letter: "D", text: "compare Eastern and Western approaches to color theory" },
      { letter: "E", text: "demonstrate that Impressionism had no lasting influence on art history" },
    ],
    correctAnswer: "B",
    explanation: "Japanese prints and photography are mentioned as influences that shaped Impressionist composition: 'fragmented compositions, unusual perspectives, and cropped figures—influenced by Japanese prints and photography—gave familiar scenes an unexpected visual dynamism.'",
    difficulty: "medium",
    passageId: "rc-exp12-p3",
  },
  {
    id: "rc-exp12-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the Impressionists' break with academic tradition can best be described as",
    answerChoices: [
      { letter: "A", text: "disapproving of their disregard for established techniques" },
      { letter: "B", text: "neutral and purely factual without any evaluative stance" },
      { letter: "C", text: "appreciative of their innovative approach and its transformative impact on art" },
      { letter: "D", text: "skeptical about the artistic merit of their work" },
      { letter: "E", text: "nostalgic for the academic painting they replaced" },
    ],
    correctAnswer: "C",
    explanation: "The author describes Impressionism as 'one of the most consequential breaks' that 'ultimately transformed how artists conceived the relationship between perception and representation.' The passage traces the movement's lasting influence, indicating appreciation for its innovative impact.",
    difficulty: "medium",
    passageId: "rc-exp12-p3",
  },
  {
    id: "rc-exp12-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following contemporary artistic practices would the author most likely view as consistent with Impressionism's legacy?",
    answerChoices: [
      { letter: "A", text: "An artist who paints only historical battle scenes using meticulously blended colors in a studio" },
      { letter: "B", text: "A photographer who captures the changing appearance of a building throughout different times of day and seasons" },
      { letter: "C", text: "A sculptor who replicates classical Greek statues with perfect precision" },
      { letter: "D", text: "A painter who refuses to exhibit work outside official government-sponsored venues" },
      { letter: "E", text: "An artist who believes objects have a single, stable appearance unaffected by light" },
    ],
    correctAnswer: "B",
    explanation: "The passage emphasizes the Impressionists' focus on 'transient effects of light' and Monet's serial paintings showing 'the same subject could appear radically different under varying conditions of light and atmosphere.' A photographer capturing a building's changing appearance across time directly parallels this approach to perception and representation.",
    difficulty: "hard",
    passageId: "rc-exp12-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - COGNITIVE DEVELOPMENT
// ============================================

const passage4 = `Jean Piaget and Lev Vygotsky stand as the two most influential theorists in the study of cognitive development, yet their approaches differ fundamentally on questions of how children acquire knowledge and the role of social interaction in intellectual growth. Understanding their divergent frameworks illuminates ongoing debates in developmental psychology and education about the nature of learning itself.

Piaget conceived cognitive development as a process of individual construction. Children, in his view, are little scientists who actively explore their environment, encounter situations that challenge their existing mental frameworks, and reorganize their thinking to accommodate new information. Development proceeds through invariant stages—sensorimotor, preoperational, concrete operational, and formal operational—each characterized by qualitatively different modes of thought. Children cannot be taught to think in ways appropriate to later stages before they are developmentally ready; instruction must follow development. This constructivist approach emphasizes the child's autonomous intellectual activity rather than transmission of knowledge from adults.

Vygotsky, working in post-revolutionary Soviet Russia, placed social interaction at the center of cognitive development. For Vygotsky, higher mental functions—logical thinking, voluntary attention, deliberate memory—first appear in social interaction between children and more capable others before becoming internalized as individual psychological processes. Language plays a crucial mediating role: children use speech initially to communicate with others, then as private speech to guide their own thinking, and finally as internalized verbal thought. The "zone of proximal development"—the gap between what children can accomplish independently and what they can achieve with guidance—defines the appropriate focus for instruction. Unlike Piaget, Vygotsky held that properly designed instruction can lead development forward.

The practical implications of these contrasting theories for education are substantial. Piagetian approaches emphasize discovery learning, hands-on manipulation of materials, and readiness—waiting until children exhibit the cognitive capabilities prerequisite for particular content. Teachers create rich environments and pose problems but refrain from direct instruction that children are not developmentally prepared to benefit from. Vygotskian approaches, by contrast, emphasize scaffolding—temporary support structures that enable learners to accomplish tasks beyond their current independent capacity—and collaborative learning with peers or more knowledgeable others. The teacher's role shifts from facilitator of individual discovery to active participant in joint intellectual activity.

Contemporary research has moved beyond simple dichotomies between these perspectives. Developmental psychologists recognize that both individual cognitive activity and social interaction contribute to intellectual growth, though their relative importance may vary across domains and cultures. Cross-cultural studies reveal that some aspects of cognitive development proceed similarly across diverse environments, suggesting universal constructive processes, while others show substantial cultural variation, indicating the influence of social practices and tools. The ongoing dialogue between Piagetian and Vygotskian traditions continues to shape research and educational practice, with many scholars seeking integrative frameworks that honor insights from both approaches.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp12-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "prove that Piaget's theory is definitively superior to Vygotsky's" },
      { letter: "B", text: "compare and contrast Piaget's and Vygotsky's theories of cognitive development and their educational implications" },
      { letter: "C", text: "argue that all cognitive development research is fundamentally flawed" },
      { letter: "D", text: "explain why Vygotsky's work was censored in the Soviet Union" },
      { letter: "E", text: "describe the stages of Piaget's developmental theory in complete detail" },
    ],
    correctAnswer: "B",
    explanation: "The passage compares Piaget's constructivist, stage-based approach with Vygotsky's socially mediated approach, discusses their differing educational implications, and notes contemporary efforts to integrate both perspectives. Answer B captures this comparative purpose.",
    difficulty: "medium",
    passageId: "rc-exp12-p4",
  },
  {
    id: "rc-exp12-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Vygotsky's 'zone of proximal development' refers to",
    answerChoices: [
      { letter: "A", text: "the gap between what children can accomplish independently and what they can achieve with guidance" },
      { letter: "B", text: "the physical space in which learning optimally occurs" },
      { letter: "C", text: "Piaget's formal operational stage of development" },
      { letter: "D", text: "the period during which children cannot benefit from any instruction" },
      { letter: "E", text: "the earliest stage of language acquisition" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly defines the zone of proximal development as 'the gap between what children can accomplish independently and what they can achieve with guidance.'",
    difficulty: "easy",
    passageId: "rc-exp12-p4",
  },
  {
    id: "rc-exp12-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, a Piagetian educator would most likely object to which of the following teaching practices?",
    answerChoices: [
      { letter: "A", text: "Providing children with hands-on materials to manipulate" },
      { letter: "B", text: "Creating a rich environment with varied learning opportunities" },
      { letter: "C", text: "Directly teaching abstract algebraic concepts to four-year-olds before they demonstrate readiness" },
      { letter: "D", text: "Allowing children to discover patterns through exploration" },
      { letter: "E", text: "Waiting until children exhibit cognitive readiness before introducing new content" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that for Piaget, 'Children cannot be taught to think in ways appropriate to later stages before they are developmentally ready; instruction must follow development.' A Piagetian would object to teaching abstract concepts before children demonstrate the prerequisite cognitive capabilities.",
    difficulty: "medium",
    passageId: "rc-exp12-p4",
  },
  {
    id: "rc-exp12-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author describes Vygotsky's account of how children use speech primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Vygotsky's overemphasis on language" },
      { letter: "B", text: "illustrate how social interaction becomes internalized as individual mental processes" },
      { letter: "C", text: "argue that Piaget neglected the importance of language" },
      { letter: "D", text: "explain why Vygotsky worked in the Soviet Union" },
      { letter: "E", text: "demonstrate that children develop speech at the same rate across all cultures" },
    ],
    correctAnswer: "B",
    explanation: "The progression from social speech to private speech to internalized verbal thought is presented as an example of how 'higher mental functions... first appear in social interaction between children and more capable others before becoming internalized as individual psychological processes.'",
    difficulty: "medium",
    passageId: "rc-exp12-p4",
  },
  {
    id: "rc-exp12-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the relationship between Piagetian and Vygotskian approaches can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of both as outdated relics of twentieth-century psychology" },
      { letter: "B", text: "partisan in favor of Piaget's constructivism" },
      { letter: "C", text: "balanced, recognizing contributions from both perspectives and value in integration" },
      { letter: "D", text: "hostile toward any attempt to reconcile the two theories" },
      { letter: "E", text: "indifferent to whether either theory has practical applications" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both theories fairly, notes that 'both individual cognitive activity and social interaction contribute to intellectual growth,' and describes scholars 'seeking integrative frameworks that honor insights from both approaches.' This reflects a balanced, integrative stance.",
    difficulty: "medium",
    passageId: "rc-exp12-p4",
  },
  {
    id: "rc-exp12-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken Piaget's claim that development must precede instruction?",
    answerChoices: [
      { letter: "A", text: "Studies show that children's cognitive abilities emerge in the sequence Piaget described." },
      { letter: "B", text: "Research demonstrates that appropriately structured instruction can enable children to acquire cognitive skills earlier than predicted by Piaget's stages." },
      { letter: "C", text: "Cross-cultural studies confirm that children in all societies progress through identical developmental stages." },
      { letter: "D", text: "Experiments reveal that children benefit most from discovery learning without adult guidance." },
      { letter: "E", text: "Longitudinal research shows that formal operational thinking emerges only in adolescence." },
    ],
    correctAnswer: "B",
    explanation: "Piaget's claim is that 'Children cannot be taught to think in ways appropriate to later stages before they are developmentally ready; instruction must follow development.' Evidence that instruction can accelerate cognitive development would directly contradict this claim by showing that instruction can lead rather than follow development.",
    difficulty: "hard",
    passageId: "rc-exp12-p4",
  },
];

// Export all RC questions from Set 12
export const rcQuestionsExpSet12: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet12 = {
  passage1: { id: "rc-exp12-p1", content: passage1, topic: "law", title: "Intellectual Property and Fair Use" },
  passage2: { id: "rc-exp12-p2", content: passage2, topic: "natural-sciences", title: "Plate Tectonics and Continental Drift" },
  passage3: { id: "rc-exp12-p3", content: passage3, topic: "humanities", title: "French Impressionism" },
  passage4: { id: "rc-exp12-p4", content: passage4, topic: "social-sciences", title: "Cognitive Development: Piaget vs Vygotsky" },
};
