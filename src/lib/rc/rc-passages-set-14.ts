// Reading Comprehension Expansion Set 14
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - DUE PROCESS AND PROCEDURAL RIGHTS
// ============================================

const passage1 = `The concept of due process in American constitutional law encompasses two distinct doctrines: procedural due process and substantive due process. Procedural due process requires that the government provide fair procedures before depriving individuals of life, liberty, or property. Substantive due process, more controversially, holds that certain fundamental rights are so essential that no procedure, however fair, can justify their infringement. While substantive due process has generated intense scholarly and judicial debate, procedural due process remains foundational to the legal system's legitimacy.

The requirements of procedural due process are not fixed but vary according to context. The Supreme Court's influential decision in Mathews v. Eldridge (1976) established a three-factor balancing test for determining what procedures are constitutionally required. Courts must weigh the private interest affected by government action, the risk of erroneous deprivation under existing procedures and the probable value of additional safeguards, and the government's interest in efficiency and avoiding administrative burdens. This flexible approach acknowledges that different situations may require different procedural protections.

The right to a hearing before an impartial decision-maker represents the core of procedural due process. This principle, traceable to natural justice doctrines in English common law, embodies the intuition that individuals should have an opportunity to be heard before adverse governmental action. However, the form of hearing required varies considerably. In criminal prosecutions, defendants enjoy extensive procedural protections including the right to counsel, the right to confront witnesses, and proof beyond a reasonable doubt. Civil proceedings generally require less elaborate procedures, and administrative contexts may demand only minimal hearings.

Critics have identified several limitations in current procedural due process doctrine. The Mathews balancing test has been criticized as excessively deferential to government efficiency claims, allowing cost-benefit analysis to override individual rights. Some scholars argue that the test's flexibility has become a license for judicial discretion, producing inconsistent results across similar cases. Others contend that procedural rights should not depend on utilitarian calculations but should be recognized as intrinsically valuable components of human dignity and democratic participation.

The digital age presents new challenges for procedural due process. Automated decision-making systems increasingly determine eligibility for government benefits, parole decisions, and other significant outcomes. These algorithmic processes may deny individuals meaningful opportunity to understand and contest adverse decisions. Whether traditional procedural protections can adequately address the opacity of algorithmic governance remains an urgent question for courts and policymakers confronting technological transformation of governmental administration.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp14-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Substantive due process is more important than procedural due process in contemporary constitutional law." },
      { letter: "B", text: "Procedural due process, while foundational to legal legitimacy, involves flexible requirements determined by context and faces emerging challenges from critics and technological change." },
      { letter: "C", text: "The Mathews v. Eldridge decision resolved all debates about the requirements of procedural due process." },
      { letter: "D", text: "Criminal defendants receive fewer procedural protections than parties in civil litigation." },
      { letter: "E", text: "Automated decision-making systems have entirely replaced human judgment in government administration." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces procedural due process as foundational, explains its flexible requirements under Mathews, discusses criticisms of current doctrine, and addresses new technological challenges. Answer B captures this comprehensive treatment of procedural due process's importance, variability, and contemporary issues.",
    difficulty: "medium",
    passageId: "rc-exp14-p1",
  },
  {
    id: "rc-exp14-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Mathews v. Eldridge balancing test requires courts to consider",
    answerChoices: [
      { letter: "A", text: "only the government's interest in administrative efficiency" },
      { letter: "B", text: "the private interest affected, the risk of error and value of safeguards, and the government's interest in efficiency" },
      { letter: "C", text: "whether the Constitution explicitly mentions the right at issue" },
      { letter: "D", text: "the original intent of the Framers regarding procedural protections" },
      { letter: "E", text: "the relative wealth of the parties involved in the dispute" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that courts must weigh 'the private interest affected by government action, the risk of erroneous deprivation under existing procedures and the probable value of additional safeguards, and the government's interest in efficiency and avoiding administrative burdens.'",
    difficulty: "easy",
    passageId: "rc-exp14-p1",
  },
  {
    id: "rc-exp14-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, one can most reasonably infer that critics who argue procedural rights should not depend on utilitarian calculations believe that",
    answerChoices: [
      { letter: "A", text: "government efficiency should always take precedence over individual rights" },
      { letter: "B", text: "procedural protections have inherent value beyond their instrumental usefulness" },
      { letter: "C", text: "the Mathews test provides too many protections for individuals" },
      { letter: "D", text: "algorithmic decision-making is always superior to human judgment" },
      { letter: "E", text: "criminal defendants should receive fewer procedural protections" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that some critics contend 'procedural rights should not depend on utilitarian calculations but should be recognized as intrinsically valuable components of human dignity and democratic participation.' This indicates a belief that procedural protections have inherent, non-instrumental value.",
    difficulty: "medium",
    passageId: "rc-exp14-p1",
  },
  {
    id: "rc-exp14-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the right to counsel, the right to confront witnesses, and proof beyond a reasonable doubt primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the criminal justice system for providing excessive protections" },
      { letter: "B", text: "illustrate the extensive procedural protections afforded in criminal prosecutions compared to other contexts" },
      { letter: "C", text: "argue that civil proceedings should adopt identical procedures" },
      { letter: "D", text: "explain the historical origins of due process in English common law" },
      { letter: "E", text: "demonstrate that all legal proceedings require the same procedural safeguards" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph discussing how 'the form of hearing required varies considerably,' with criminal defendants enjoying 'extensive procedural protections' while civil and administrative contexts require less. The examples illustrate the high end of procedural protection.",
    difficulty: "medium",
    passageId: "rc-exp14-p1",
  },
  {
    id: "rc-exp14-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the challenges posed by automated decision-making systems can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of their significance for due process concerns" },
      { letter: "B", text: "confidently optimistic that existing procedures will adequately address them" },
      { letter: "C", text: "concerned and uncertain about whether traditional protections will prove adequate" },
      { letter: "D", text: "enthusiastically supportive of replacing human decision-makers with algorithms" },
      { letter: "E", text: "nostalgic for a pre-digital era of government administration" },
    ],
    correctAnswer: "C",
    explanation: "The author describes algorithmic processes as potentially denying 'meaningful opportunity to understand and contest adverse decisions' and poses whether traditional protections can address 'the opacity of algorithmic governance' as 'an urgent question.' This indicates concern without definitive answers.",
    difficulty: "medium",
    passageId: "rc-exp14-p1",
  },
  {
    id: "rc-exp14-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument that the Mathews balancing test is excessively deferential to government efficiency claims?",
    answerChoices: [
      { letter: "A", text: "Courts applying Mathews have consistently required extensive procedural protections regardless of administrative costs." },
      { letter: "B", text: "Studies show that courts using the Mathews test routinely approve minimal procedures whenever agencies cite cost concerns, even when additional safeguards would significantly reduce erroneous deprivations." },
      { letter: "C", text: "The Supreme Court has repeatedly emphasized that individual rights must be carefully balanced against government interests." },
      { letter: "D", text: "Administrative agencies have voluntarily adopted more protective procedures than courts require." },
      { letter: "E", text: "The Mathews test applies only to property interests, not liberty interests." },
    ],
    correctAnswer: "B",
    explanation: "The critics argue that Mathews is 'excessively deferential to government efficiency claims.' Evidence that courts routinely approve minimal procedures whenever agencies cite costs, even when better safeguards would reduce errors, would directly support this criticism by showing the test privileges efficiency over accuracy.",
    difficulty: "hard",
    passageId: "rc-exp14-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - CLIMATE MODELING AND PREDICTIONS
// ============================================

const passage2 = `Climate models are sophisticated computer programs that simulate the Earth's climate system by representing physical processes in the atmosphere, oceans, land surface, and ice. These models divide the planet into three-dimensional grid cells and calculate how energy, water, and chemical compounds move between cells over time. By solving fundamental equations of physics and chemistry, climate models project how the climate system will respond to changing conditions, particularly the accumulation of greenhouse gases from human activities.

The development of climate modeling began in the 1960s with relatively simple representations of atmospheric circulation. Early models treated the ocean as a fixed boundary condition and lacked representations of clouds, vegetation, and the carbon cycle. Over subsequent decades, models incorporated increasingly realistic treatments of these processes, growing from atmosphere-only models to coupled atmosphere-ocean models and eventually to Earth System Models that include biogeochemical cycles. This evolution has been driven by advances in computing power, improved understanding of climate processes, and the expanding observational record against which models can be tested.

Model validation relies on comparing simulated climate patterns with observations of past and present climate. Climate models successfully reproduce large-scale features including global mean temperature trends, the seasonal cycle of temperature, and major patterns of atmospheric circulation. They capture the cooling effect of major volcanic eruptions and the warming influence of El Nino events. However, models exhibit biases in simulating some regional phenomena, particularly precipitation patterns and the behavior of certain cloud types that significantly affect climate sensitivity.

Uncertainty in climate projections arises from multiple sources. Scenario uncertainty reflects our inability to know future human decisions about emissions, land use, and technology. Model uncertainty stems from different representations of physical processes across models, particularly feedback mechanisms like cloud responses to warming. Internal variability, the natural chaotic fluctuations of the climate system, introduces additional uncertainty, especially for near-term projections and regional scales. Climate scientists have developed ensemble methods, running multiple models with varying assumptions, to quantify these uncertainties and provide probability ranges for future climate.

Despite these uncertainties, climate models have demonstrated substantial skill in projecting warming trends. Analyses comparing early projections from the 1970s through 1990s with subsequently observed temperatures show that models accurately anticipated the magnitude and pattern of global warming. This predictive success, achieved before the warming was fully realized, provides compelling evidence that models capture the essential physics of climate change. The remaining uncertainties, while scientifically significant, do not undermine the fundamental conclusion that continued greenhouse gas emissions will produce substantial warming with far-reaching consequences.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp14-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Climate models are too uncertain to provide useful information about future climate change." },
      { letter: "B", text: "Climate models have evolved in sophistication, face multiple sources of uncertainty, but have demonstrated substantial predictive skill regarding warming trends." },
      { letter: "C", text: "Climate scientists should abandon computer modeling in favor of purely observational methods." },
      { letter: "D", text: "Early climate models from the 1960s were superior to contemporary Earth System Models." },
      { letter: "E", text: "Cloud behavior is the only significant source of uncertainty in climate projections." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution of climate models from the 1960s to present, explains how models are validated, discusses multiple sources of uncertainty, and emphasizes that models have demonstrated predictive success despite these uncertainties. Answer B captures this balanced treatment.",
    difficulty: "medium",
    passageId: "rc-exp14-p2",
  },
  {
    id: "rc-exp14-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, early climate models from the 1960s",
    answerChoices: [
      { letter: "A", text: "included sophisticated representations of the carbon cycle" },
      { letter: "B", text: "were coupled atmosphere-ocean models from the beginning" },
      { letter: "C", text: "treated the ocean as a fixed boundary condition and lacked representations of clouds and vegetation" },
      { letter: "D", text: "accurately simulated all regional precipitation patterns" },
      { letter: "E", text: "were more accurate than contemporary models" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'Early models treated the ocean as a fixed boundary condition and lacked representations of clouds, vegetation, and the carbon cycle.'",
    difficulty: "easy",
    passageId: "rc-exp14-p2",
  },
  {
    id: "rc-exp14-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, climate scientists use ensemble methods primarily because",
    answerChoices: [
      { letter: "A", text: "individual models always produce identical results" },
      { letter: "B", text: "running multiple models helps quantify uncertainties from different sources" },
      { letter: "C", text: "ensemble methods eliminate all uncertainty from projections" },
      { letter: "D", text: "computing power has decreased since the 1960s" },
      { letter: "E", text: "observations of past climate are unavailable for model validation" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Climate scientists have developed ensemble methods, running multiple models with varying assumptions, to quantify these uncertainties and provide probability ranges for future climate.' The purpose is to address and quantify uncertainties.",
    difficulty: "medium",
    passageId: "rc-exp14-p2",
  },
  {
    id: "rc-exp14-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions the cooling effect of volcanic eruptions and the warming influence of El Nino events primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that natural variability is more important than human activities in determining climate" },
      { letter: "B", text: "provide examples of phenomena that climate models successfully reproduce" },
      { letter: "C", text: "criticize models for failing to capture important climate processes" },
      { letter: "D", text: "explain why climate projections from the 1970s were unsuccessful" },
      { letter: "E", text: "demonstrate that climate models cannot simulate short-term events" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph about model validation, where the author notes that 'Climate models successfully reproduce large-scale features' and 'capture the cooling effect of major volcanic eruptions and the warming influence of El Nino events.' They illustrate model successes.",
    difficulty: "medium",
    passageId: "rc-exp14-p2",
  },
  {
    id: "rc-exp14-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the remaining uncertainties in climate modeling can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive, suggesting they are unimportant for policy decisions" },
      { letter: "B", text: "alarmist, claiming they invalidate all climate projections" },
      { letter: "C", text: "measured, acknowledging their scientific significance while maintaining that fundamental conclusions remain sound" },
      { letter: "D", text: "evasive, avoiding any discussion of limitations in climate models" },
      { letter: "E", text: "hostile, blaming scientists for failing to resolve these uncertainties" },
    ],
    correctAnswer: "C",
    explanation: "The author states that 'The remaining uncertainties, while scientifically significant, do not undermine the fundamental conclusion that continued greenhouse gas emissions will produce substantial warming.' This reflects a balanced acknowledgment of uncertainty alongside confidence in core conclusions.",
    difficulty: "medium",
    passageId: "rc-exp14-p2",
  },
  {
    id: "rc-exp14-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the information in the passage, which one of the following would be most analogous to the relationship between early climate models and contemporary Earth System Models?",
    answerChoices: [
      { letter: "A", text: "The relationship between a rough pencil sketch and a detailed architectural blueprint that incorporates structural engineering, electrical systems, and plumbing" },
      { letter: "B", text: "The relationship between two identical photographs taken on different days" },
      { letter: "C", text: "The relationship between a finished painting and an earlier draft of the same painting" },
      { letter: "D", text: "The relationship between a map and the territory it represents" },
      { letter: "E", text: "The relationship between a scientific hypothesis and the data that disproves it" },
    ],
    correctAnswer: "A",
    explanation: "The passage describes evolution from simple models with 'relatively simple representations of atmospheric circulation' that lacked many components to complex Earth System Models incorporating atmosphere, oceans, biogeochemical cycles, and more. Answer A captures this progression from a simple representation to a comprehensive, multi-component system.",
    difficulty: "hard",
    passageId: "rc-exp14-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - BAROQUE MUSIC AND MATHEMATICAL STRUCTURE
// ============================================

const passage3 = `The Baroque era of European music, spanning roughly 1600 to 1750, witnessed a profound transformation in how composers conceived of musical structure. While Renaissance polyphony had woven multiple independent melodic lines into a unified texture, Baroque composers increasingly organized their works around harmonic progressions and systematic patterns. This shift reflected broader intellectual currents that celebrated rational order and mathematical proportion as foundations of both natural philosophy and artistic beauty.

Johann Sebastian Bach's keyboard works exemplify the era's fascination with mathematical architecture in music. "The Well-Tempered Clavier," completed in two volumes (1722 and 1742), systematically explores all twenty-four major and minor keys, pairing a prelude and fugue in each key. The fugues display intricate contrapuntal techniques including inversion (turning melodic lines upside down), augmentation (stretching rhythmic values), diminution (compressing them), and stretto (overlapping entrances of the subject). These manipulations treat musical themes almost as geometric objects subject to spatial transformations.

The connection between Baroque music and mathematics extends beyond compositional technique to tuning systems. The development of well-tempered tuning, which made all keys playable on keyboard instruments, required reconciling the pure intervals derived from simple mathematical ratios with practical demands of modulation. Pure tuning based on the harmonic series produces perfect fifths in the ratio 3:2 and perfect octaves in the ratio 2:1, but stacking pure fifths does not precisely return to the original pitch after twelve steps. Well-temperament distributes this discrepancy, called the Pythagorean comma, across the scale, sacrificing perfect purity for universal playability.

Scholars have long debated whether Bach and his contemporaries consciously employed mathematical principles or whether structural regularities emerge naturally from intuitive musical choices. Certain numerical patterns in Bach's works have attracted attention: the number of measures corresponding to significant dates, gematria linking musical motifs to numerical values of words, and proportional relationships between sections. While some claims of hidden mathematical codes strain credulity, the broader point stands that Baroque aesthetics valued orderly proportion, and composers working within this framework naturally produced structures amenable to mathematical analysis.

The tension between mathematical order and expressive spontaneity runs throughout Baroque music. Strict forms like the fugue and passacaglia imposed rigorous constraints within which composers demonstrated virtuosity. Yet the best Baroque music never sounds merely mechanical or formulaic. The mathematical scaffolding supports rather than constrains expression, providing a framework within which melodic invention, harmonic surprise, and emotional intensity find their voice. This synthesis of rational structure and affective power distinguishes the Baroque achievement and continues to fascinate musicians and listeners centuries later.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp14-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Bach was the only significant composer of the Baroque era." },
      { letter: "B", text: "Baroque music reflects a synthesis of mathematical structure and expressive power, with composers organizing works around systematic patterns while achieving emotional impact." },
      { letter: "C", text: "All claims about mathematical codes in Bach's music have been definitively proven." },
      { letter: "D", text: "Renaissance polyphony was superior to Baroque composition in every respect." },
      { letter: "E", text: "Well-tempered tuning completely eliminated all discrepancies in keyboard instruments." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the shift to mathematical organization in Baroque music, examines Bach's structural techniques, discusses tuning systems and debates about conscious mathematical design, and concludes by emphasizing the synthesis of structure and expression. Answer B captures this central theme.",
    difficulty: "medium",
    passageId: "rc-exp14-p3",
  },
  {
    id: "rc-exp14-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the Pythagorean comma refers to",
    answerChoices: [
      { letter: "A", text: "a type of melodic ornamentation used in Baroque music" },
      { letter: "B", text: "the discrepancy that results because stacking pure fifths does not precisely return to the original pitch after twelve steps" },
      { letter: "C", text: "a compositional technique invented by Bach" },
      { letter: "D", text: "the pause between movements in a fugue" },
      { letter: "E", text: "a mathematical error in Renaissance tuning systems" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'stacking pure fifths does not precisely return to the original pitch after twelve steps. Well-temperament distributes this discrepancy, called the Pythagorean comma, across the scale.'",
    difficulty: "easy",
    passageId: "rc-exp14-p3",
  },
  {
    id: "rc-exp14-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, one can most reasonably infer that the development of well-tempered tuning was motivated by",
    answerChoices: [
      { letter: "A", text: "a desire to return to pure Renaissance tuning practices" },
      { letter: "B", text: "the practical need to play in all keys on keyboard instruments while accepting slight impurities" },
      { letter: "C", text: "religious objections to mathematically derived intervals" },
      { letter: "D", text: "the belief that impure intervals were more emotionally expressive" },
      { letter: "E", text: "Bach's personal preference for avoiding modulation between keys" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that well-tempered tuning 'required reconciling the pure intervals derived from simple mathematical ratios with practical demands of modulation' by 'sacrificing perfect purity for universal playability.' This indicates a practical compromise.",
    difficulty: "medium",
    passageId: "rc-exp14-p3",
  },
  {
    id: "rc-exp14-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions inversion, augmentation, diminution, and stretto primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Bach for excessive complexity" },
      { letter: "B", text: "demonstrate specific contrapuntal techniques that treat musical themes as objects subject to transformation" },
      { letter: "C", text: "argue that these techniques are no longer used by composers" },
      { letter: "D", text: "compare Baroque and Renaissance compositional methods" },
      { letter: "E", text: "explain the physics of sound production in keyboard instruments" },
    ],
    correctAnswer: "B",
    explanation: "These techniques are cited as 'intricate contrapuntal techniques' that 'treat musical themes almost as geometric objects subject to spatial transformations.' They illustrate the mathematical, transformational approach to musical material.",
    difficulty: "medium",
    passageId: "rc-exp14-p3",
  },
  {
    id: "rc-exp14-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward claims of hidden mathematical codes in Bach's works can best be described as",
    answerChoices: [
      { letter: "A", text: "completely accepting of all such claims as proven" },
      { letter: "B", text: "entirely dismissive of any connection between Bach's music and mathematics" },
      { letter: "C", text: "skeptical of some extreme claims while acknowledging that Baroque aesthetics valued orderly proportion" },
      { letter: "D", text: "uninterested in the question of mathematical structure in music" },
      { letter: "E", text: "convinced that Bach intentionally encoded secret messages in his compositions" },
    ],
    correctAnswer: "C",
    explanation: "The author states that 'some claims of hidden mathematical codes strain credulity' while affirming that 'the broader point stands that Baroque aesthetics valued orderly proportion.' This reflects measured skepticism about extreme claims alongside acceptance of the general principle.",
    difficulty: "medium",
    passageId: "rc-exp14-p3",
  },
  {
    id: "rc-exp14-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A historical context is established, specific examples are analyzed, a scholarly debate is addressed, and a unifying theme is articulated." },
      { letter: "B", text: "Two competing theories are presented and one is definitively proven correct." },
      { letter: "C", text: "A problem is identified and several inadequate solutions are rejected." },
      { letter: "D", text: "A biographical account of a composer's life is provided in chronological order." },
      { letter: "E", text: "An abstract mathematical theory is explained with no reference to specific musical examples." },
    ],
    correctAnswer: "A",
    explanation: "The passage establishes Baroque era context (paragraph 1), analyzes Bach's works and tuning systems (paragraphs 2-3), addresses scholarly debate about conscious mathematical design (paragraph 4), and articulates the synthesis of structure and expression (paragraph 5).",
    difficulty: "hard",
    passageId: "rc-exp14-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - GROUP DYNAMICS AND CONFORMITY EXPERIMENTS
// ============================================

const passage4 = `The mid-twentieth century witnessed a flowering of social psychological research on conformity and obedience, much of it motivated by the desire to understand the social forces that enabled ordinary people to participate in Nazi atrocities. Solomon Asch's conformity experiments, conducted in the 1950s, demonstrated that individuals would deny the evidence of their own senses to agree with a unanimous majority making obviously incorrect judgments. These studies revealed the surprising power of group pressure even in situations lacking any material consequences for dissent.

In Asch's experimental paradigm, participants made judgments about line lengths in the presence of confederates who unanimously gave wrong answers. Approximately one-third of responses conformed to the incorrect majority, and about three-quarters of participants conformed at least once across multiple trials. When interviewed afterward, conforming participants offered varying explanations: some reported genuinely perceiving the lines as the majority described them, others knew their answers were wrong but feared social rejection, and still others doubted their own perception in the face of unanimous disagreement. These findings suggested multiple pathways to conformity, involving both informational influence (accepting others' judgments as valid information) and normative influence (complying to gain acceptance or avoid rejection).

Stanley Milgram's obedience experiments in the early 1960s extended this research to situations with apparent moral stakes. Participants were instructed by an experimenter to deliver what they believed were increasingly dangerous electric shocks to another person (actually a confederate). Despite hearing cries of pain and pleas to stop, approximately two-thirds of participants continued to the maximum shock level. Milgram interpreted these results as demonstrating the power of legitimate authority to elicit obedience even to harmful commands. The experiments generated controversy both for their implications about human nature and for the psychological distress they caused participants.

Subsequent research has complicated the original interpretations of these classic studies. Variations in Milgram's procedure revealed that obedience dropped dramatically when the experimenter gave commands remotely rather than in person, when participants observed others refuse, or when the legitimacy of the authority was questioned. These findings suggest that obedience is not automatic but depends on contextual factors that can be modified. Similarly, research following Asch has shown that conformity decreases substantially when even one other person dissents from the majority, indicating that unanimity is crucial to conformity pressure.

Contemporary scholars have revisited these experiments through ethical, methodological, and cross-cultural lenses. Critics argue that the artificial laboratory settings and deceptive practices limit generalizability to real-world behavior. Others note that early experiments predominantly used Western, educated samples, raising questions about cultural universality. Despite these critiques, the fundamental insight remains influential: situational pressures can lead ordinary people to act in ways that contradict their private judgments and moral convictions, a finding with profound implications for understanding institutional wrongdoing and designing ethical environments.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp14-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that Asch's experiments were methodologically superior to Milgram's" },
      { letter: "B", text: "describe classic conformity and obedience research, explain subsequent refinements and critiques, and affirm the enduring importance of the fundamental findings" },
      { letter: "C", text: "prove that situational factors have no influence on human behavior" },
      { letter: "D", text: "dismiss all mid-twentieth century social psychology as unscientific" },
      { letter: "E", text: "explain why Nazi atrocities could never be repeated in democratic societies" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Asch's and Milgram's experiments, discusses how subsequent research has complicated original interpretations, addresses contemporary critiques, and concludes that the fundamental insight about situational influence remains important. Answer B captures this structure.",
    difficulty: "medium",
    passageId: "rc-exp14-p4",
  },
  {
    id: "rc-exp14-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, informational influence and normative influence differ in that",
    answerChoices: [
      { letter: "A", text: "informational influence involves accepting others' judgments as valid information while normative influence involves complying to gain acceptance or avoid rejection" },
      { letter: "B", text: "informational influence only occurs in laboratory settings while normative influence only occurs in natural settings" },
      { letter: "C", text: "informational influence was discovered by Milgram while normative influence was discovered by Asch" },
      { letter: "D", text: "informational influence leads to correct judgments while normative influence leads to incorrect judgments" },
      { letter: "E", text: "there is no meaningful difference between these two concepts" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly defines these terms: 'informational influence (accepting others' judgments as valid information) and normative influence (complying to gain acceptance or avoid rejection).'",
    difficulty: "easy",
    passageId: "rc-exp14-p4",
  },
  {
    id: "rc-exp14-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the finding that obedience dropped when participants observed others refuse suggests that",
    answerChoices: [
      { letter: "A", text: "people are completely incapable of resisting authority" },
      { letter: "B", text: "the presence of dissent can significantly reduce conformity to harmful commands" },
      { letter: "C", text: "Milgram's original experiments lacked scientific validity" },
      { letter: "D", text: "obedience to authority is genetically determined" },
      { letter: "E", text: "laboratory experiments cannot provide useful information about behavior" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'obedience dropped dramatically...when participants observed others refuse' and that 'conformity decreases substantially when even one other person dissents from the majority.' These findings indicate that dissent reduces pressure to conform or obey.",
    difficulty: "medium",
    passageId: "rc-exp14-p4",
  },
  {
    id: "rc-exp14-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the desire to understand how ordinary people participated in Nazi atrocities primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that only Germans are susceptible to conformity pressure" },
      { letter: "B", text: "explain the historical motivation behind mid-twentieth century conformity research" },
      { letter: "C", text: "criticize social psychologists for inappropriate research agendas" },
      { letter: "D", text: "demonstrate that conformity experiments have no contemporary relevance" },
      { letter: "E", text: "suggest that understanding conformity has no practical applications" },
    ],
    correctAnswer: "B",
    explanation: "The passage opens by noting that mid-twentieth century research was 'much of it motivated by the desire to understand the social forces that enabled ordinary people to participate in Nazi atrocities.' This provides historical context for why these experiments were conducted.",
    difficulty: "medium",
    passageId: "rc-exp14-p4",
  },
  {
    id: "rc-exp14-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward contemporary critiques of the classic conformity experiments can best be described as",
    answerChoices: [
      { letter: "A", text: "completely dismissive, viewing all criticisms as unfounded" },
      { letter: "B", text: "enthusiastically supportive, agreeing that the experiments have no value" },
      { letter: "C", text: "acknowledging their validity while maintaining that the fundamental insights remain important" },
      { letter: "D", text: "confused about the nature of the criticisms" },
      { letter: "E", text: "nostalgic for an era before ethical review of research" },
    ],
    correctAnswer: "C",
    explanation: "The author presents various critiques regarding ethics, methodology, and cultural limitations, then concludes that 'Despite these critiques, the fundamental insight remains influential.' This reflects balanced acknowledgment of criticisms alongside affirmation of lasting importance.",
    difficulty: "medium",
    passageId: "rc-exp14-p4",
  },
  {
    id: "rc-exp14-024",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the findings described in the passage, which one of the following strategies would most likely reduce unethical obedience in an organizational setting?",
    answerChoices: [
      { letter: "A", text: "Ensuring that all directives come from a single, centralized authority figure" },
      { letter: "B", text: "Creating mechanisms that allow and protect expressions of dissent within the organization" },
      { letter: "C", text: "Eliminating all face-to-face communication between supervisors and employees" },
      { letter: "D", text: "Requiring employees to make all decisions in isolation from colleagues" },
      { letter: "E", text: "Increasing the material consequences of challenging authority" },
    ],
    correctAnswer: "B",
    explanation: "The passage indicates that 'obedience dropped dramatically...when participants observed others refuse' and 'conformity decreases substantially when even one other person dissents.' Creating mechanisms to allow and protect dissent would introduce the conditions shown to reduce harmful obedience.",
    difficulty: "hard",
    passageId: "rc-exp14-p4",
  },
];

// Export all RC questions from Set 14
export const rcQuestionsExpSet14: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet14 = {
  passage1: { id: "rc-exp14-p1", content: passage1, topic: "law", title: "Due Process and Procedural Rights" },
  passage2: { id: "rc-exp14-p2", content: passage2, topic: "natural-sciences", title: "Climate Modeling and Predictions" },
  passage3: { id: "rc-exp14-p3", content: passage3, topic: "humanities", title: "Baroque Music and Mathematical Structure" },
  passage4: { id: "rc-exp14-p4", content: passage4, topic: "social-sciences", title: "Group Dynamics and Conformity Experiments" },
};
