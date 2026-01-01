// Reading Comprehension Expansion Set 19
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - FEDERALISM AND STATE VS FEDERAL POWER
// ============================================

const passage1 = `The tension between state and federal authority lies at the heart of American constitutional structure. The Founders, wary of both tyrannical centralization and the ineffectual confederation they sought to replace, crafted a system of dual sovereignty in which state and federal governments each possess independent spheres of authority. This structural arrangement, known as federalism, continues to generate fundamental questions about the allocation of governmental power more than two centuries after ratification.

The Constitution employs several mechanisms to define and limit federal power. Article I enumerates specific congressional powers, most significantly the power to regulate interstate commerce. The Tenth Amendment expressly reserves to the states or the people all powers not delegated to the federal government. Yet these textual limitations have proven remarkably elastic in practice. The Supreme Court's expansive interpretation of the Commerce Clause, particularly from the New Deal era through the 1990s, permitted federal regulation of activities with even tangential connections to interstate commerce, substantially eroding the distinction between federal and state regulatory domains.

Recent decades have witnessed a partial revival of federalism-based limits on congressional power. In United States v. Lopez (1995), the Supreme Court invalidated a federal statute prohibiting gun possession near schools, holding for the first time in sixty years that Congress had exceeded its commerce power. The Court reasoned that possessing a gun in a local school zone was not economic activity substantially affecting interstate commerce. Subsequent decisions reinforced this boundary, requiring that regulated activities have a substantial economic character or aggregate effect on interstate commerce.

The commandeering doctrine represents another federalism constraint. In Printz v. United States (1997), the Court held that Congress cannot compel state executive officials to administer federal regulatory programs. This anti-commandeering principle preserves state autonomy by preventing the federal government from using state resources and personnel to implement federal policy. States remain free to cooperate voluntarily, but they cannot be drafted into federal service against their will.

Critics of robust federalism enforcement argue that these doctrines lack principled boundaries and empower unelected judges to override democratic legislative judgments. They contend that the political process, in which states are represented in Congress, adequately protects state interests without judicial intervention. Federalism's defenders respond that structural constitutional limits require judicial enforcement precisely because political majorities may disregard them. The appropriate balance between judicial and political safeguards for federalism remains actively contested.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp19-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Supreme Court has consistently expanded federal power at the expense of state sovereignty since the founding." },
      { letter: "B", text: "Federalism, the constitutional system of dual sovereignty between state and federal governments, involves ongoing tensions that recent court decisions have addressed but not fully resolved." },
      { letter: "C", text: "The Tenth Amendment has been rendered meaningless by expansive Commerce Clause interpretation." },
      { letter: "D", text: "The anti-commandeering doctrine is the only meaningful constitutional protection for state authority." },
      { letter: "E", text: "Congress should have unlimited power to regulate any activity that affects the national economy." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces federalism's constitutional foundations, discusses the expansion and subsequent partial contraction of federal power through Commerce Clause interpretation, examines the commandeering doctrine, and presents ongoing debates. Answer B captures this comprehensive treatment of federalism's continuing tensions.",
    difficulty: "medium",
    passageId: "rc-exp19-p1",
  },
  {
    id: "rc-exp19-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, United States v. Lopez was significant because",
    answerChoices: [
      { letter: "A", text: "it was the first Supreme Court decision to interpret the Commerce Clause" },
      { letter: "B", text: "it marked the first time in sixty years that the Court found Congress had exceeded its commerce power" },
      { letter: "C", text: "it established the anti-commandeering doctrine" },
      { letter: "D", text: "it permitted federal regulation of gun possession in all locations" },
      { letter: "E", text: "it overruled the Tenth Amendment" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that in Lopez, the Court 'invalidated a federal statute prohibiting gun possession near schools, holding for the first time in sixty years that Congress had exceeded its commerce power.'",
    difficulty: "easy",
    passageId: "rc-exp19-p1",
  },
  {
    id: "rc-exp19-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the Founders' approach to federalism was most likely shaped by",
    answerChoices: [
      { letter: "A", text: "a preference for a unitary national government with no state authority" },
      { letter: "B", text: "concerns about both excessive centralization and an ineffective confederation" },
      { letter: "C", text: "a belief that states should have no role in national governance" },
      { letter: "D", text: "confidence that political processes alone would protect state interests" },
      { letter: "E", text: "the conviction that judicial enforcement of federalism limits was unnecessary" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'The Founders, wary of both tyrannical centralization and the ineffectual confederation they sought to replace, crafted a system of dual sovereignty.' This indicates their concerns about both extremes.",
    difficulty: "medium",
    passageId: "rc-exp19-p1",
  },
  {
    id: "rc-exp19-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author discusses Printz v. United States primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Supreme Court's approach to federalism" },
      { letter: "B", text: "illustrate an additional constitutional constraint on federal power beyond Commerce Clause limits" },
      { letter: "C", text: "argue that states should always cooperate with federal programs" },
      { letter: "D", text: "explain why the Commerce Clause is the sole limit on congressional authority" },
      { letter: "E", text: "compare American and European approaches to federalism" },
    ],
    correctAnswer: "B",
    explanation: "The Printz discussion appears after the Commerce Clause analysis and introduces the commandeering doctrine as 'another federalism constraint,' illustrating a distinct limit on federal power that preserves state autonomy.",
    difficulty: "medium",
    passageId: "rc-exp19-p1",
  },
  {
    id: "rc-exp19-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate between critics and defenders of robust federalism enforcement can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of the critics' position that courts should defer to Congress" },
      { letter: "B", text: "dismissive of both positions as lacking merit" },
      { letter: "C", text: "neutral and analytical, presenting both perspectives without advocating for either" },
      { letter: "D", text: "enthusiastically supportive of judicial intervention in all cases" },
      { letter: "E", text: "contemptuous of federalism as an outdated concept" },
    ],
    correctAnswer: "C",
    explanation: "The author presents critics' arguments (that doctrines lack principled boundaries and override democratic judgments) and defenders' responses (that structural limits require judicial enforcement), concluding that the balance 'remains actively contested' without endorsing either view.",
    difficulty: "medium",
    passageId: "rc-exp19-p1",
  },
  {
    id: "rc-exp19-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the position of federalism's defenders as described in the passage?",
    answerChoices: [
      { letter: "A", text: "Most federal legislation is drafted with careful attention to state concerns." },
      { letter: "B", text: "Historical analysis shows that congressional majorities have repeatedly disregarded state autonomy despite state representation in Congress." },
      { letter: "C", text: "State governors consistently support expansive federal regulatory programs." },
      { letter: "D", text: "The political process has proven entirely sufficient to protect state interests in every instance." },
      { letter: "E", text: "Judicial enforcement of federalism limits has consistently produced unprincipled results." },
    ],
    correctAnswer: "B",
    explanation: "Federalism's defenders argue that 'structural constitutional limits require judicial enforcement precisely because political majorities may disregard them.' Evidence that congressional majorities have indeed repeatedly disregarded state autonomy despite state representation would directly support this argument.",
    difficulty: "hard",
    passageId: "rc-exp19-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - BLACK HOLES AND GRAVITATIONAL WAVES
// ============================================

const passage2 = `When massive stars exhaust their nuclear fuel, gravitational collapse can compress the stellar remnant into a region of such extreme density that even light cannot escape. These objects, termed black holes, were long considered theoretical curiosities derived from Einstein's general theory of relativity. The boundary surrounding a black hole from which no escape is possible, called the event horizon, marks a point of no return for matter and radiation alike. For decades, black holes remained purely mathematical constructs whose physical existence could not be directly confirmed.

The detection of gravitational waves has transformed black hole astronomy from theoretical speculation to empirical science. Einstein predicted that accelerating masses would create ripples in the fabric of spacetime, propagating outward at the speed of light. Yet these perturbations were expected to be so extraordinarily faint that Einstein doubted they could ever be measured. The Laser Interferometer Gravitational-Wave Observatory (LIGO), consisting of two facilities separated by thousands of kilometers, uses laser beams to detect changes in arm length smaller than one ten-thousandth the diameter of a proton. In September 2015, LIGO detected gravitational waves produced by two black holes spiraling together and merging—the first direct confirmation of both gravitational waves and black hole collisions.

The physics of black hole mergers produces a characteristic gravitational wave signature. As two black holes orbit each other, they emit gravitational radiation and gradually lose energy, causing their orbits to decay. The frequency and amplitude of the waves increase as the black holes spiral closer, culminating in a violent merger and ringdown as the combined black hole settles into its final state. This "chirp" signal, rising in pitch before abruptly ending, provides detailed information about the masses, spins, and distances of the merging objects. Analysis of LIGO data has revealed black holes substantially more massive than those previously observed through X-ray emissions from matter falling into them.

Gravitational wave astronomy opens observational windows inaccessible to electromagnetic telescopes. Black hole mergers produce no light, rendering them invisible to conventional observations. Gravitational waves also pass through matter almost unimpeded, unlike light which can be absorbed or scattered. Future detectors promise to extend observations to the earliest epochs of the universe, potentially revealing signals from the Big Bang itself that electromagnetic radiation cannot convey. The 2017 Nobel Prize in Physics, awarded to LIGO founders, recognized that gravitational wave detection represents not merely a technical achievement but the inauguration of an entirely new means of observing the cosmos.

Ongoing research explores the implications of gravitational wave observations for fundamental physics. The speed of gravitational waves, confirmed to equal the speed of light to extraordinary precision, constrains alternative theories of gravity. Observations of neutron star mergers, which unlike black hole collisions produce both gravitational waves and light, enable tests of general relativity in extreme gravitational environments. As detector sensitivity improves and additional facilities join the network, gravitational wave astronomy promises discoveries that current theoretical frameworks may be inadequate to explain.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp19-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Einstein's theory of general relativity has been definitively disproven by LIGO observations." },
      { letter: "B", text: "The detection of gravitational waves has confirmed the existence of black holes and opened a new observational frontier in astronomy with implications for fundamental physics." },
      { letter: "C", text: "Black holes are purely theoretical constructs that cannot be directly observed." },
      { letter: "D", text: "LIGO technology will never improve beyond its current capabilities." },
      { letter: "E", text: "Gravitational waves travel faster than light and cannot be detected by current instruments." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the historical status of black holes as theoretical, describes LIGO's detection of gravitational waves from merging black holes, explains what these observations reveal, discusses new observational capabilities, and notes implications for testing fundamental physics. Answer B captures this trajectory.",
    difficulty: "medium",
    passageId: "rc-exp19-p2",
  },
  {
    id: "rc-exp19-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, LIGO detects gravitational waves by",
    answerChoices: [
      { letter: "A", text: "photographing black holes directly through powerful telescopes" },
      { letter: "B", text: "using laser beams to measure extremely small changes in arm length" },
      { letter: "C", text: "collecting X-ray emissions from matter falling into black holes" },
      { letter: "D", text: "recording electromagnetic signals from the early universe" },
      { letter: "E", text: "measuring temperature fluctuations caused by passing gravitational waves" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that LIGO 'uses laser beams to detect changes in arm length smaller than one ten-thousandth the diameter of a proton.'",
    difficulty: "easy",
    passageId: "rc-exp19-p2",
  },
  {
    id: "rc-exp19-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, Einstein's doubt that gravitational waves could be measured was most likely based on",
    answerChoices: [
      { letter: "A", text: "his belief that gravitational waves did not exist" },
      { letter: "B", text: "the expected extreme faintness of the perturbations" },
      { letter: "C", text: "his rejection of general relativity" },
      { letter: "D", text: "the impossibility of constructing laser interferometers" },
      { letter: "E", text: "gravitational waves being absorbed by matter before reaching Earth" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'these perturbations were expected to be so extraordinarily faint that Einstein doubted they could ever be measured.' Einstein predicted gravitational waves but doubted their detectability due to their weakness.",
    difficulty: "medium",
    passageId: "rc-exp19-p2",
  },
  {
    id: "rc-exp19-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions the 2017 Nobel Prize in Physics primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Nobel committee's selection criteria" },
      { letter: "B", text: "emphasize the significance of gravitational wave detection as inaugurating a new field of astronomy" },
      { letter: "C", text: "compare gravitational wave and electromagnetic astronomy" },
      { letter: "D", text: "explain the technical specifications of LIGO" },
      { letter: "E", text: "argue that earlier astronomers deserved greater recognition" },
    ],
    correctAnswer: "B",
    explanation: "The Nobel Prize mention emphasizes that 'gravitational wave detection represents not merely a technical achievement but the inauguration of an entirely new means of observing the cosmos,' underscoring its scientific significance.",
    difficulty: "medium",
    passageId: "rc-exp19-p2",
  },
  {
    id: "rc-exp19-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the future of gravitational wave astronomy can best be described as",
    answerChoices: [
      { letter: "A", text: "skeptical about any further discoveries" },
      { letter: "B", text: "indifferent to technological improvements" },
      { letter: "C", text: "optimistic about its potential for discoveries that may challenge existing theories" },
      { letter: "D", text: "dismissive of the field's scientific value" },
      { letter: "E", text: "concerned that detector sensitivity has reached its maximum" },
    ],
    correctAnswer: "C",
    explanation: "The author states that 'gravitational wave astronomy promises discoveries that current theoretical frameworks may be inadequate to explain,' indicating optimism about future discoveries with potentially revolutionary implications.",
    difficulty: "medium",
    passageId: "rc-exp19-p2",
  },
  {
    id: "rc-exp19-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A phenomenon is introduced, the method of its detection is explained, the significance of observations is discussed, and future research directions are outlined." },
      { letter: "B", text: "Two competing theories are presented, evidence for each is evaluated, and one is declared correct." },
      { letter: "C", text: "A technical problem is identified, multiple failed solutions are described, and the problem is declared unsolvable." },
      { letter: "D", text: "A historical figure's work is summarized, criticized, and ultimately rejected." },
      { letter: "E", text: "An experiment is described, its results are shown to be invalid, and alternative interpretations are proposed." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces black holes and gravitational waves, explains LIGO's detection method, discusses what observations reveal and their significance, and outlines future research directions and implications for fundamental physics.",
    difficulty: "hard",
    passageId: "rc-exp19-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - ROMANTICISM IN POETRY (WORDSWORTH, COLERIDGE)
// ============================================

const passage3 = `The publication of Lyrical Ballads in 1798, a collaborative collection by William Wordsworth and Samuel Taylor Coleridge, is conventionally regarded as inaugurating the English Romantic movement in poetry. The collection's famous preface, written primarily by Wordsworth for the 1800 edition, articulates principles that would define Romantic poetics: the elevation of emotion over reason, the use of common language rather than elevated diction, and the treatment of humble rural subjects as worthy of serious artistic attention. These principles constituted a deliberate rejection of the neoclassical conventions that had dominated eighteenth-century English verse.

Wordsworth's contributions to the collection emphasized what he termed "the spontaneous overflow of powerful feelings" recollected in tranquility. His poems depicted encounters with nature and with simple rural people—leech gatherers, shepherds, impoverished wanderers—that occasioned profound emotional and philosophical reflection. For Wordsworth, the natural world possessed an almost sacramental quality, capable of nurturing moral sentiment and spiritual insight in receptive observers. The child's intuitive communion with nature, which maturity and urban life tend to corrupt, represented for Wordsworth a state of grace that poetry might help readers recover.

Coleridge's approach differed markedly in subject matter while sharing fundamental Romantic premises. His contributions, including "The Rime of the Ancient Mariner," explored supernatural and exotic subjects rendered credible through precise psychological observation. Where Wordsworth naturalized the extraordinary by finding profundity in common experience, Coleridge sought to supernaturalize the natural, investing fantastic narratives with emotional truth. The two poets conceived their collaboration as complementary halves of a single poetic project: Wordsworth treating ordinary subjects so as to reveal their hidden strangeness, Coleridge presenting extraordinary subjects so as to make them believable.

The friendship between Wordsworth and Coleridge, though intellectually productive, proved personally difficult. Coleridge struggled with opium addiction and feelings of creative inadequacy in comparison to Wordsworth's prolific output. A breach developed after Coleridge took offense at what he perceived as condescension in Wordsworth's characterization of him. Despite reconciliation attempts, the relationship never fully recovered its earlier intimacy. Coleridge's later critical writings, particularly Biographia Literaria, both celebrated and challenged Wordsworth's poetic theories, distinguishing fancy from imagination and qualifying Wordsworth's claims about poetic language.

The Romantic movement that Lyrical Ballads inaugurated transformed not only poetic practice but cultural attitudes toward nature, emotion, and individual experience. The Romantics' celebration of subjective feeling and natural beauty influenced environmental consciousness, educational philosophy, and conceptions of artistic genius. Yet Romanticism also attracted criticism for sentimentality, irrationalism, and political quietism. Contemporary scholars continue to debate whether Romanticism represents liberating emphasis on individual creativity or a retreat from Enlightenment rationality with troubling implications.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp19-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Coleridge was a superior poet to Wordsworth despite his personal struggles." },
      { letter: "B", text: "Lyrical Ballads launched English Romanticism through the complementary poetic approaches of Wordsworth and Coleridge, with lasting cultural influence despite ongoing critical debates." },
      { letter: "C", text: "The Romantic movement has been completely discredited by contemporary scholars." },
      { letter: "D", text: "Wordsworth and Coleridge maintained an untroubled personal and professional relationship throughout their lives." },
      { letter: "E", text: "Neoclassical poetry was superior to Romantic poetry in every respect." },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses Lyrical Ballads as inaugurating Romanticism, examines Wordsworth's and Coleridge's distinct but complementary approaches, traces their personal relationship, and considers Romanticism's lasting influence and ongoing critical debates. Answer B captures these elements.",
    difficulty: "medium",
    passageId: "rc-exp19-p3",
  },
  {
    id: "rc-exp19-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Wordsworth conceived poetry as",
    answerChoices: [
      { letter: "A", text: "primarily concerned with supernatural and exotic subjects" },
      { letter: "B", text: "the spontaneous overflow of powerful feelings recollected in tranquility" },
      { letter: "C", text: "bound by strict adherence to neoclassical conventions" },
      { letter: "D", text: "exclusively focused on urban life and sophisticated society" },
      { letter: "E", text: "a purely rational exercise devoid of emotional content" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Wordsworth's contributions to the collection emphasized what he termed \"the spontaneous overflow of powerful feelings\" recollected in tranquility.'",
    difficulty: "easy",
    passageId: "rc-exp19-p3",
  },
  {
    id: "rc-exp19-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the collaboration between Wordsworth and Coleridge can best be characterized as",
    answerChoices: [
      { letter: "A", text: "completely identical in method and subject matter" },
      { letter: "B", text: "intellectually complementary despite employing different approaches to related Romantic goals" },
      { letter: "C", text: "fundamentally opposed in all artistic principles" },
      { letter: "D", text: "insignificant to the development of English poetry" },
      { letter: "E", text: "entirely free of personal tension or disagreement" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes their collaboration as 'complementary halves of a single poetic project'—Wordsworth treating ordinary subjects to reveal strangeness, Coleridge making extraordinary subjects believable—while noting they 'shared fundamental Romantic premises' despite differing in approach.",
    difficulty: "medium",
    passageId: "rc-exp19-p3",
  },
  {
    id: "rc-exp19-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions leech gatherers, shepherds, and impoverished wanderers primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Wordsworth's choice of poetic subjects" },
      { letter: "B", text: "illustrate the humble rural subjects Wordsworth treated as worthy of serious artistic attention" },
      { letter: "C", text: "contrast Wordsworth's approach unfavorably with Coleridge's" },
      { letter: "D", text: "explain the origins of neoclassical poetic conventions" },
      { letter: "E", text: "argue that urban subjects are superior to rural ones" },
    ],
    correctAnswer: "B",
    explanation: "These figures are cited as examples of the 'simple rural people' and 'humble rural subjects' that Wordsworth depicted and that occasioned 'profound emotional and philosophical reflection,' illustrating his Romantic emphasis on ordinary experience.",
    difficulty: "medium",
    passageId: "rc-exp19-p3",
  },
  {
    id: "rc-exp19-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the ongoing scholarly debate about Romanticism is best described as",
    answerChoices: [
      { letter: "A", text: "dismissive of all critical perspectives on Romanticism" },
      { letter: "B", text: "strongly partisan in favor of Romanticism's defenders" },
      { letter: "C", text: "objectively analytical, presenting the terms of debate without advocating a position" },
      { letter: "D", text: "hostile to Romanticism and sympathetic to its critics" },
      { letter: "E", text: "indifferent to the question of Romanticism's significance" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that 'Contemporary scholars continue to debate whether Romanticism represents liberating emphasis on individual creativity or a retreat from Enlightenment rationality with troubling implications,' presenting both sides without endorsing either view.",
    difficulty: "medium",
    passageId: "rc-exp19-p3",
  },
  {
    id: "rc-exp19-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which one of the following poems would Wordsworth most likely consider closest to his poetic principles?",
    answerChoices: [
      { letter: "A", text: "An epic poem celebrating military conquest in ornate, elevated language" },
      { letter: "B", text: "A meditation on childhood memories sparked by observing daffodils in a country meadow, written in accessible language" },
      { letter: "C", text: "A satire of contemporary politics employing classical allusions" },
      { letter: "D", text: "A Gothic tale of supernatural horror set in an exotic foreign land" },
      { letter: "E", text: "A formal ode praising an aristocratic patron in neoclassical couplets" },
    ],
    correctAnswer: "B",
    explanation: "Wordsworth emphasized emotion, common language over elevated diction, humble rural subjects, communion with nature, and the significance of childhood perception. A meditation on childhood memories sparked by natural observation in accessible language accords with all these principles.",
    difficulty: "hard",
    passageId: "rc-exp19-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - CROSS-CULTURAL PSYCHOLOGY
// ============================================

const passage4 = `Cross-cultural psychology investigates how cultural context shapes human thought, emotion, and behavior. Rather than assuming that psychological processes are universal constants, researchers in this field examine the extent to which findings from studies conducted primarily in Western, educated, industrialized, rich, and democratic societies—often abbreviated as WEIRD populations—generalize to the broader human experience. This scrutiny has revealed that many phenomena once considered fundamental to human cognition may in fact be culturally specific.

The distinction between individualist and collectivist cultures has organized much cross-cultural research. Individualist cultures, prevalent in North America and Western Europe, emphasize personal autonomy, self-expression, and individual achievement. Collectivist cultures, more common in East Asia, Latin America, and Africa, prioritize group harmony, social obligations, and interdependent self-construal. Studies have documented systematic differences between these cultural orientations in domains ranging from self-perception to moral reasoning. Individuals from collectivist cultures, for instance, tend to describe themselves primarily in terms of social roles and relationships, while those from individualist cultures emphasize personal traits and attributes.

Research on cognitive style has revealed additional cultural variations. Richard Nisbett and colleagues demonstrated that East Asians and Westerners differ in patterns of visual attention and causal reasoning. Presented with complex scenes, East Asian participants attended more to context and relationships between objects, while Western participants focused more on focal objects in isolation. Similarly, when explaining behavior, Westerners showed greater tendency toward dispositional attributions—explaining actions by reference to personal traits—while East Asians gave more weight to situational factors. These differences align with broader cultural emphases on independence versus interdependence.

Critics of the individualist-collectivist framework caution against overgeneralization. Substantial variation exists within any society, and national culture is only one of many factors shaping individual psychology. Socioeconomic status, religious orientation, rural versus urban residence, and historical period all contribute to psychological variation. Some researchers argue that framing cultures as dichotomously individualist or collectivist obscures nuances and risks perpetuating stereotypes. Recent work has sought more refined frameworks that capture the multidimensional nature of cultural difference.

The practical implications of cross-cultural psychology extend to fields including clinical practice, education, and organizational management. Therapeutic approaches developed in Western contexts may require adaptation for clients from different cultural backgrounds. Educational practices that assume individualist values may disadvantage students from collectivist traditions. Multinational organizations must navigate varying cultural expectations about authority, communication, and work-life boundaries. Understanding cultural psychological differences does not imply that any orientation is superior, but recognizing such differences enables more effective and respectful engagement across cultural contexts.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp19-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that individualist cultures are psychologically healthier than collectivist cultures" },
      { letter: "B", text: "examine how cross-cultural psychology reveals cultural influences on cognition and behavior while acknowledging limitations of existing frameworks and practical implications" },
      { letter: "C", text: "prove that all psychological processes are culturally determined" },
      { letter: "D", text: "criticize all research conducted on WEIRD populations as scientifically worthless" },
      { letter: "E", text: "demonstrate that cultural differences have no practical significance" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces cross-cultural psychology's investigation of cultural influences, examines the individualist-collectivist distinction and cognitive style research, presents critiques and limitations of existing frameworks, and discusses practical implications across multiple fields. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp19-p4",
  },
  {
    id: "rc-exp19-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, individuals from collectivist cultures tend to describe themselves primarily in terms of",
    answerChoices: [
      { letter: "A", text: "personal traits and unique attributes" },
      { letter: "B", text: "social roles and relationships" },
      { letter: "C", text: "individual achievements and accomplishments" },
      { letter: "D", text: "dispositional characteristics" },
      { letter: "E", text: "autonomous decision-making" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Individuals from collectivist cultures, for instance, tend to describe themselves primarily in terms of social roles and relationships, while those from individualist cultures emphasize personal traits and attributes.'",
    difficulty: "easy",
    passageId: "rc-exp19-p4",
  },
  {
    id: "rc-exp19-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, Nisbett's research on visual attention suggests that",
    answerChoices: [
      { letter: "A", text: "East Asians have inferior visual processing abilities" },
      { letter: "B", text: "cultural context influences how people perceive and process visual information" },
      { letter: "C", text: "Western patterns of attention are universally optimal" },
      { letter: "D", text: "there are no meaningful differences in cognition across cultures" },
      { letter: "E", text: "visual perception is entirely determined by genetic factors" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Nisbett's findings that East Asians 'attended more to context and relationships between objects, while Western participants focused more on focal objects in isolation,' demonstrating that cultural context influences perceptual patterns.",
    difficulty: "medium",
    passageId: "rc-exp19-p4",
  },
  {
    id: "rc-exp19-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses clinical practice, education, and organizational management primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Western approaches in these fields as entirely inappropriate" },
      { letter: "B", text: "illustrate the practical significance of cross-cultural psychological findings" },
      { letter: "C", text: "argue that cultural differences are irrelevant to professional practice" },
      { letter: "D", text: "compare the effectiveness of different therapeutic techniques" },
      { letter: "E", text: "demonstrate that collectivist cultures are professionally superior" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph on 'practical implications' and illustrate how understanding cultural differences affects therapeutic adaptation, educational practices, and organizational navigation of 'varying cultural expectations.'",
    difficulty: "medium",
    passageId: "rc-exp19-p4",
  },
  {
    id: "rc-exp19-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the individualist-collectivist framework can best be described as",
    answerChoices: [
      { letter: "A", text: "uncritically accepting of its validity across all contexts" },
      { letter: "B", text: "completely dismissive of its scientific value" },
      { letter: "C", text: "balanced, acknowledging its usefulness while noting legitimate limitations and critiques" },
      { letter: "D", text: "enthusiastically supportive without reservations" },
      { letter: "E", text: "hostile to any attempt to categorize cultural differences" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the framework's contributions (organizing research, documenting systematic differences) while also noting critics' cautions about overgeneralization, within-society variation, and the risk of perpetuating stereotypes, reflecting a balanced assessment.",
    difficulty: "medium",
    passageId: "rc-exp19-p4",
  },
  {
    id: "rc-exp19-024",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which one of the following situations would most likely concern a cross-cultural psychologist?",
    answerChoices: [
      { letter: "A", text: "A study of cognitive development conducted exclusively with children from multiple countries across different continents" },
      { letter: "B", text: "A widely cited study on human decision-making that draws conclusions about universal human cognition based solely on American college students" },
      { letter: "C", text: "A research project that carefully examines variation within a single national culture" },
      { letter: "D", text: "A clinical trial that includes participants from diverse socioeconomic backgrounds" },
      { letter: "E", text: "An educational program that adapts its methods for students from different cultural traditions" },
    ],
    correctAnswer: "B",
    explanation: "The passage emphasizes cross-cultural psychology's concern with whether findings from 'WEIRD populations generalize to the broader human experience.' A study drawing universal conclusions from American college students alone exemplifies the problematic assumption of universality that cross-cultural psychologists critique.",
    difficulty: "hard",
    passageId: "rc-exp19-p4",
  },
];

// Export all RC questions from Set 19
export const rcQuestionsExpSet19: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet19 = {
  passage1: { id: "rc-exp19-p1", content: passage1, topic: "law", title: "Federalism and State vs Federal Power" },
  passage2: { id: "rc-exp19-p2", content: passage2, topic: "natural-sciences", title: "Black Holes and Gravitational Waves" },
  passage3: { id: "rc-exp19-p3", content: passage3, topic: "humanities", title: "Romanticism in Poetry: Wordsworth and Coleridge" },
  passage4: { id: "rc-exp19-p4", content: passage4, topic: "social-sciences", title: "Cross-Cultural Psychology" },
};
