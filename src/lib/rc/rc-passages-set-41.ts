// Reading Comprehension Expansion Set 41
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - ENVIRONMENTAL COMPLIANCE AND ENFORCEMENT
// ============================================

const passage1 = `Environmental compliance and enforcement represent crucial but often overlooked dimensions of environmental law. While legislatures enact statutes and agencies promulgate regulations, these legal requirements remain merely aspirational without effective mechanisms to ensure adherence. The challenge of translating environmental law on paper into environmental protection in practice has generated sophisticated systems of monitoring, reporting, inspection, and sanctioning—systems whose effectiveness varies considerably across jurisdictions and regulatory contexts.

The traditional enforcement model relies primarily on deterrence through penalties. Under this approach, regulated entities comply because the expected costs of violation—the probability of detection multiplied by the magnitude of sanctions—exceed the costs of compliance. This calculus assumes that potential violators are rational actors who respond predictably to incentive structures. Environmental agencies accordingly invest in inspection programs to increase detection probability and seek substantial penalties to ensure that violations do not pay. Civil penalties for environmental violations can reach tens of thousands of dollars per day, while criminal prosecution may result in imprisonment for the most egregious offenses.

Critics of purely deterrence-based enforcement argue that it fails to account for the complexity of environmental compliance. Many violations result not from calculated decisions to evade requirements but from ignorance, confusion, or inadequate management systems within regulated facilities. For these entities, technical assistance and compliance promotion may prove more effective than punitive measures. The cooperative compliance paradigm emphasizes dialogue between regulators and regulated entities, voluntary auditing programs, and graduated responses that escalate sanctions only when good-faith efforts fail. Proponents contend that this approach builds trust, leverages limited agency resources, and achieves better environmental outcomes than adversarial enforcement.

The tension between deterrence and cooperation has produced hybrid enforcement strategies in many jurisdictions. Agencies may offer reduced penalties or immunity for self-disclosed violations while maintaining aggressive enforcement against recalcitrant violators. Environmental management systems that help facilities identify and correct problems before they become violations receive regulatory recognition and lighter scrutiny. Meanwhile, enhanced penalties target repeat violators and those whose violations cause actual environmental harm. This differentiated approach attempts to calibrate regulatory responses to the nature and causes of noncompliance.

Enforcement effectiveness ultimately depends on factors beyond agency choice of strategy. Adequate funding for inspections and prosecution, political will to pursue powerful regulated entities, judicial willingness to impose meaningful sanctions, and public attention to environmental violations all shape the regulatory environment in which enforcement operates. Where these conditions are absent, even well-designed enforcement programs may fail to achieve compliance, leaving communities exposed to pollution that the law nominally prohibits.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp41-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Environmental enforcement agencies should abandon deterrence-based approaches entirely in favor of cooperative compliance programs." },
      { letter: "B", text: "Environmental enforcement involves complex challenges that have led to various strategic approaches, with effectiveness depending on both regulatory design and external factors." },
      { letter: "C", text: "The traditional deterrence model of environmental enforcement has been proven completely ineffective at achieving compliance." },
      { letter: "D", text: "Criminal prosecution is the only effective mechanism for ensuring environmental compliance among regulated entities." },
      { letter: "E", text: "Environmental laws are fundamentally unenforceable due to the complexity of modern regulatory requirements." },
    ],
    correctAnswer: "B",
    explanation: "The passage examines different enforcement strategies (deterrence, cooperation, hybrid approaches) and their rationales, while emphasizing that effectiveness depends on multiple factors including funding, political will, and judicial support. Answer B captures this nuanced treatment of enforcement complexity and contingency.",
    wrongAnswerExplanations: {
      A: "The passage presents cooperative compliance as one approach among several, not as a replacement for deterrence. The hybrid model suggests both have roles.",
      C: "The passage describes criticisms of deterrence but does not conclude it is completely ineffective; rather, it remains part of hybrid strategies.",
      D: "Criminal prosecution is mentioned as one tool for egregious offenses, not as the only effective mechanism.",
      E: "The passage discusses enforcement challenges but does not conclude that environmental laws are fundamentally unenforceable."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p1",
  },
  {
    id: "rc-exp41-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the traditional deterrence model of enforcement assumes that",
    answerChoices: [
      { letter: "A", text: "all environmental violations result from deliberate corporate decisions to maximize profits" },
      { letter: "B", text: "regulated entities are rational actors who respond predictably to incentive structures" },
      { letter: "C", text: "technical assistance is more effective than penalties in achieving compliance" },
      { letter: "D", text: "environmental agencies lack the resources to conduct meaningful inspections" },
      { letter: "E", text: "criminal prosecution should be the primary enforcement mechanism" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the deterrence calculus 'assumes that potential violators are rational actors who respond predictably to incentive structures.' This is presented as a foundational premise of the traditional model.",
    wrongAnswerExplanations: {
      A: "While deterrence assumes rational calculation, the passage does not claim it assumes all violations are deliberate profit-maximizing decisions.",
      C: "This view is attributed to critics of deterrence, not to the deterrence model itself.",
      D: "The passage does not attribute this assumption to the deterrence model; resource limitations are discussed separately.",
      E: "Criminal prosecution is mentioned as available for egregious offenses, not as the primary mechanism under deterrence theory."
    },
    difficulty: "easy",
    passageId: "rc-exp41-p1",
  },
  {
    id: "rc-exp41-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, proponents of cooperative compliance would most likely argue that punitive enforcement approaches",
    answerChoices: [
      { letter: "A", text: "should be applied uniformly to all regulated entities regardless of their compliance history" },
      { letter: "B", text: "may be counterproductive when violations stem from confusion or inadequate management systems" },
      { letter: "C", text: "are the most cost-effective use of limited agency resources" },
      { letter: "D", text: "build trust between regulators and regulated entities more effectively than dialogue" },
      { letter: "E", text: "should entirely replace voluntary auditing programs and technical assistance" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics of deterrence argue 'many violations result not from calculated decisions to evade requirements but from ignorance, confusion, or inadequate management systems' and that for such entities 'technical assistance and compliance promotion may prove more effective than punitive measures.' This implies punitive approaches may be counterproductive in these circumstances.",
    wrongAnswerExplanations: {
      A: "Cooperative compliance proponents favor graduated, differentiated responses, not uniform punishment.",
      C: "The passage suggests cooperative approaches 'leverage limited agency resources,' implying they are more cost-effective than purely punitive approaches.",
      D: "The passage attributes trust-building to cooperative approaches, not punitive enforcement.",
      E: "Cooperative compliance emphasizes voluntary auditing and technical assistance as alternatives to, not replacements for, punitive measures."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p1",
  },
  {
    id: "rc-exp41-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author discusses environmental management systems primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize agencies for failing to conduct adequate inspections of regulated facilities" },
      { letter: "B", text: "illustrate one component of hybrid enforcement strategies that combines deterrence and cooperation" },
      { letter: "C", text: "argue that self-regulation should entirely replace government enforcement of environmental laws" },
      { letter: "D", text: "demonstrate that the traditional deterrence model is the most effective enforcement approach" },
      { letter: "E", text: "explain why criminal prosecution has declined as an enforcement mechanism" },
    ],
    correctAnswer: "B",
    explanation: "Environmental management systems are mentioned in the paragraph discussing hybrid enforcement strategies, as an example of how agencies provide 'regulatory recognition and lighter scrutiny' for facilities that adopt preventive measures. This illustrates the blending of cooperative and deterrence elements.",
    wrongAnswerExplanations: {
      A: "The passage does not use environmental management systems to criticize inspection practices.",
      C: "Environmental management systems receive 'regulatory recognition,' suggesting they supplement rather than replace government enforcement.",
      D: "The context presents these systems as part of hybrid approaches that go beyond traditional deterrence.",
      E: "The passage does not connect environmental management systems to any decline in criminal prosecution."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p1",
  },
  {
    id: "rc-exp41-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the various enforcement approaches discussed in the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly advocating for the complete replacement of deterrence with cooperative approaches" },
      { letter: "B", text: "dismissive of cooperative compliance as naive and ineffective" },
      { letter: "C", text: "analytically neutral, presenting different perspectives without endorsing one strategy as universally superior" },
      { letter: "D", text: "deeply pessimistic about the possibility of effective environmental enforcement under any approach" },
      { letter: "E", text: "enthusiastically supportive of purely punitive enforcement strategies" },
    ],
    correctAnswer: "C",
    explanation: "The author presents deterrence, cooperative compliance, and hybrid approaches with their respective rationales and criticisms without declaring one approach definitively superior. The final paragraph emphasizes external factors, suggesting effectiveness is contingent rather than determined by strategy choice alone.",
    wrongAnswerExplanations: {
      A: "The passage presents both approaches and their hybrid combinations without advocating for replacing deterrence entirely.",
      B: "Cooperative compliance is presented seriously with its rationale; the passage does not dismiss it as naive.",
      D: "While the passage notes challenges, it does not conclude that effective enforcement is impossible.",
      E: "The passage presents criticisms of purely deterrence-based approaches and discusses alternatives approvingly."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p1",
  },
  {
    id: "rc-exp41-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most weaken the argument made by proponents of the cooperative compliance paradigm?",
    answerChoices: [
      { letter: "A", text: "Agencies that emphasize cooperative approaches report higher rates of voluntary disclosure by regulated entities." },
      { letter: "B", text: "A study found that facilities participating in voluntary auditing programs had higher violation rates than those subject to traditional deterrence-based enforcement." },
      { letter: "C", text: "Regulated entities often have greater technical expertise about their operations than agency inspectors." },
      { letter: "D", text: "Many environmental violations are difficult to detect without facility cooperation and self-reporting." },
      { letter: "E", text: "Some violations result from inadequate management systems rather than deliberate evasion." },
    ],
    correctAnswer: "B",
    explanation: "Proponents of cooperative compliance argue it 'achieves better environmental outcomes than adversarial enforcement.' Evidence that voluntary auditing programs correlate with higher violation rates would directly undermine this claim about superior outcomes.",
    wrongAnswerExplanations: {
      A: "Higher voluntary disclosure rates would support, not weaken, claims about cooperative approaches building trust and improving compliance.",
      C: "This supports the cooperative approach's emphasis on leveraging facility knowledge through dialogue.",
      D: "This supports the cooperative approach by suggesting traditional inspection-based enforcement faces limitations.",
      E: "This is one of the premises on which cooperative compliance proponents base their argument, so it supports rather than weakens their position."
    },
    difficulty: "hard",
    passageId: "rc-exp41-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - VOLCANOLOGY AND GEOTHERMAL ACTIVITY
// ============================================

const passage2 = `Volcanoes represent windows into Earth's interior, offering scientists opportunities to study processes occurring far beneath the surface. The study of volcanic systems has advanced considerably in recent decades, moving beyond cataloguing eruption histories toward understanding the complex dynamics that govern magma generation, storage, and eruption. This evolving understanding has practical implications for hazard assessment and for harnessing geothermal energy, transforming volcanology from a purely descriptive science into one with significant predictive and applied dimensions.

Magma originates in Earth's mantle through partial melting of rock. This melting occurs where conditions—temperature, pressure, and volatile content—permit the crystalline structure of mantle minerals to break down. Three tectonic settings concentrate volcanic activity: subduction zones where oceanic plates descend beneath continental or oceanic crust, generating water-rich magmas; mid-ocean ridges where plates diverge and hot mantle material rises to fill the gap; and hotspots where plumes of anomalously hot material rise from deep in the mantle. Each setting produces characteristic magma compositions and eruption styles, from the explosive eruptions of subduction-zone volcanoes to the effusive lava flows typical of Hawaiian hotspot volcanism.

The behavior of magma within the crust determines eruption dynamics. Rising magma often stalls in crustal reservoirs, where it may reside for centuries or millennia before erupting. Within these reservoirs, magma evolves through crystallization, mixing with new batches of melt, and interaction with surrounding rocks. Crucially, dissolved gases—primarily water and carbon dioxide—exsolve from the melt as pressure decreases during ascent. This degassing process controls explosivity: gas-rich magmas that cannot degas efficiently fragment into ash clouds and pyroclastic flows, while gas-poor or efficiently degassing magmas erupt as lava. Understanding degassing pathways has become central to eruption forecasting.

Monitoring volcanic unrest relies on detecting signals that precede eruptions. Seismic activity increases as magma forces open pathways through brittle rock; ground deformation occurs as magma reservoirs inflate or deflate; gas emissions change in composition and flux as fresh magma approaches the surface; and thermal anomalies appear as heat from ascending magma reaches shallow levels. Networks of seismometers, GPS receivers, gas analyzers, and satellite sensors now provide continuous surveillance of many active volcanoes, enabling scientists to track magma movement in near real-time.

Yet prediction remains imperfect. Not all episodes of unrest culminate in eruption; magma may stall, degas passively, or retreat without surface expression. Distinguishing intrusions that will erupt from those that will not requires understanding specific volcanic systems in detail—their plumbing geometry, typical repose intervals, and historical patterns of activity. Probabilistic forecasting has emerged as the standard approach, assigning likelihoods to various scenarios rather than attempting deterministic predictions. This uncertainty underscores the need for integrating monitoring data with geological knowledge accumulated over longer timescales.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp41-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Modern volcanology has developed sophisticated understanding of volcanic processes and monitoring capabilities, though eruption prediction remains probabilistic due to the complexity of volcanic systems." },
      { letter: "B", text: "Volcanic eruptions are entirely unpredictable and scientists have made no progress in understanding them." },
      { letter: "C", text: "The three tectonic settings that produce volcanoes are equally dangerous and require identical monitoring approaches." },
      { letter: "D", text: "Geothermal energy has completely replaced the scientific study of volcanoes as the primary focus of volcanology." },
      { letter: "E", text: "Gas content is the only factor that determines whether a volcano will erupt explosively or effusively." },
    ],
    correctAnswer: "A",
    explanation: "The passage traces the development of volcanology from descriptive to predictive science, explains magma generation and behavior, describes monitoring techniques, and concludes by acknowledging the limitations of prediction. Answer A captures this comprehensive treatment of advances and ongoing challenges.",
    wrongAnswerExplanations: {
      B: "The passage describes substantial scientific progress in understanding volcanic processes and developing monitoring capabilities.",
      C: "The passage notes different tectonic settings produce different magma compositions and eruption styles, not that they are equally dangerous or require identical approaches.",
      D: "Geothermal energy is mentioned as one practical application, but the passage focuses on scientific understanding and hazard assessment.",
      E: "While degassing is described as controlling explosivity, the passage presents this as one factor within a complex system, not the only determinant."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p2",
  },
  {
    id: "rc-exp41-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, explosive volcanic eruptions are associated with magmas that",
    answerChoices: [
      { letter: "A", text: "contain no dissolved gases whatsoever" },
      { letter: "B", text: "are gas-rich and cannot degas efficiently during ascent" },
      { letter: "C", text: "originate exclusively at mid-ocean ridges" },
      { letter: "D", text: "have resided in crustal reservoirs for less than one year" },
      { letter: "E", text: "contain primarily nitrogen and methane rather than water and carbon dioxide" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'gas-rich magmas that cannot degas efficiently fragment into ash clouds and pyroclastic flows.' This directly links explosive eruptions to gas-rich magmas with impeded degassing.",
    wrongAnswerExplanations: {
      A: "The passage indicates gas-rich, not gas-free, magmas produce explosive eruptions.",
      C: "The passage associates explosive eruptions with subduction-zone volcanoes, while mid-ocean ridges and hotspots produce more effusive eruptions.",
      D: "The passage mentions residence times of centuries or millennia but does not link short residence to explosive eruptions.",
      E: "The passage identifies water and carbon dioxide as the primary dissolved gases, not nitrogen and methane."
    },
    difficulty: "easy",
    passageId: "rc-exp41-p2",
  },
  {
    id: "rc-exp41-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, scientists monitoring a volcano would most likely interpret a sudden increase in carbon dioxide emissions as evidence that",
    answerChoices: [
      { letter: "A", text: "the volcano has become permanently dormant" },
      { letter: "B", text: "fresh magma may be approaching the surface" },
      { letter: "C", text: "the crustal reservoir has completely emptied" },
      { letter: "D", text: "tectonic activity in the region has ceased" },
      { letter: "E", text: "monitoring equipment has malfunctioned and requires replacement" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'gas emissions change in composition and flux as fresh magma approaches the surface.' Since carbon dioxide is identified as one of the primary dissolved gases in magma, increased CO2 emissions would suggest magma ascent.",
    wrongAnswerExplanations: {
      A: "Increased gas emissions suggest activity, not dormancy.",
      C: "Emptying of the reservoir would not explain increased gas emissions; the passage links gas changes to magma approach.",
      D: "Increased gas emissions are associated with magma movement, which is related to ongoing rather than ceased tectonic activity.",
      E: "The passage describes gas emission changes as a meaningful signal, not an indication of equipment problems."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p2",
  },
  {
    id: "rc-exp41-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions Hawaiian hotspot volcanism primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Hawaiian volcanoes are more dangerous than subduction-zone volcanoes" },
      { letter: "B", text: "provide a contrasting example of effusive eruption style compared to explosive subduction volcanism" },
      { letter: "C", text: "explain why monitoring networks are unnecessary for hotspot volcanoes" },
      { letter: "D", text: "demonstrate that hotspot volcanism is the only type that produces usable geothermal energy" },
      { letter: "E", text: "criticize previous research that focused exclusively on Hawaiian volcanoes" },
    ],
    correctAnswer: "B",
    explanation: "Hawaiian volcanism is mentioned as an example of 'effusive lava flows' in contrast to 'the explosive eruptions of subduction-zone volcanoes.' The passage uses this comparison to illustrate how different tectonic settings produce different eruption styles.",
    wrongAnswerExplanations: {
      A: "The passage does not compare danger levels; it compares eruption styles (explosive vs. effusive).",
      C: "The passage does not suggest any volcano type is exempt from monitoring needs.",
      D: "The passage does not make claims about which volcano types produce geothermal energy.",
      E: "The passage does not criticize previous research focus."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p2",
  },
  {
    id: "rc-exp41-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the current state of eruption prediction can best be described as",
    answerChoices: [
      { letter: "A", text: "unreserved confidence that all eruptions can now be predicted precisely" },
      { letter: "B", text: "complete skepticism about the value of any monitoring efforts" },
      { letter: "C", text: "cautiously optimistic, acknowledging advances while recognizing continuing limitations" },
      { letter: "D", text: "dismissive of probabilistic approaches as scientifically invalid" },
      { letter: "E", text: "indifferent to whether prediction capabilities improve in the future" },
    ],
    correctAnswer: "C",
    explanation: "The author describes substantial monitoring capabilities while noting 'prediction remains imperfect' and emphasizing the need for probabilistic rather than deterministic forecasting. This balanced presentation acknowledges both progress and limitations.",
    wrongAnswerExplanations: {
      A: "The passage explicitly states 'prediction remains imperfect' and discusses the limitations of forecasting.",
      B: "The passage describes monitoring as valuable, enabling scientists to 'track magma movement in near real-time.'",
      D: "The passage presents probabilistic forecasting as 'the standard approach,' not as scientifically invalid.",
      E: "The concluding emphasis on integrating monitoring with geological knowledge suggests continued interest in improving prediction."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p2",
  },
  {
    id: "rc-exp41-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A scientific field is introduced, its key concepts are explained from magma origin through eruption monitoring, and current predictive limitations are acknowledged." },
      { letter: "B", text: "Two competing theories of volcanic activity are presented, evidence for each is evaluated, and one is declared superior." },
      { letter: "C", text: "A historical narrative traces the discovery of volcanoes from ancient times to the present day." },
      { letter: "D", text: "A problem is identified, various failed solutions are described, and the problem is declared unsolvable." },
      { letter: "E", text: "An experimental procedure is described step by step, and its results are statistically analyzed." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces volcanology (paragraph 1), explains magma generation in different tectonic settings (paragraph 2), describes magma behavior and degassing (paragraph 3), outlines monitoring techniques (paragraph 4), and discusses prediction limitations (paragraph 5). This follows the structure described in answer A.",
    wrongAnswerExplanations: {
      B: "The passage does not present competing theories or declare one superior.",
      C: "The passage does not trace historical discovery of volcanoes; it explains current scientific understanding.",
      D: "While limitations are acknowledged, the passage does not characterize the problem as unsolvable or describe failed solutions.",
      E: "The passage does not describe an experimental procedure or statistical analysis."
    },
    difficulty: "hard",
    passageId: "rc-exp41-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - MEDIEVAL MANUSCRIPT ILLUMINATION
// ============================================

const passage3 = `The illuminated manuscripts of the medieval period represent a distinctive art form in which text and image achieve an integration rarely matched in other media. Produced primarily in monastic scriptoria and, later, in secular urban workshops, these books combined the labor of scribes, painters, and binders in collaborative projects that could span years or even decades. The resulting works were objects of immense value—spiritual, aesthetic, and material—that served functions ranging from liturgical use in church services to private devotion and scholarly reference. Understanding medieval illumination requires attending not only to iconographic content but also to the physical, social, and economic contexts of manuscript production.

The technical processes of illumination involved multiple specialized skills. After a scribe laid out text on prepared parchment, leaving spaces for decoration, an illuminator would sketch designs, apply gold leaf, and build up pigments layer by layer. The materials themselves carried significance: gold symbolized divine light; ultramarine blue, derived from lapis lazuli imported from Afghanistan, was reserved for the Virgin Mary's robes due to its expense and celestial associations; and red lead and vermilion provided vibrant accents that directed the reader's eye. These material choices embedded theological meaning within the visual program, making the very substance of the image participate in its message.

Stylistic development across the medieval centuries reflected changing artistic ideals and cultural contacts. Early medieval illumination in the British Isles, exemplified by the Book of Kells and the Lindisfarne Gospels, favored intricate interlacing patterns, zoomorphic ornament, and flat, schematic figures that prioritized decorative complexity over naturalistic representation. Carolingian and Ottonian illumination on the continent drew on late antique models, introducing architectural settings and more volumetric figures. The Gothic period brought further naturalization: drapery gained weight and movement, faces acquired individual expression, and spatial recession created illusionistic depth. These developments paralleled changes in monumental painting and sculpture, as manuscript illumination participated in broader visual culture rather than evolving in isolation.

The social organization of manuscript production shifted significantly across the medieval period. Early medieval monasteries combined religious observance with book production, viewing copying and decoration as forms of prayer. The Benedictine scriptorium of the early Middle Ages gave way in the twelfth and thirteenth centuries to an increasingly commercial book trade centered in university towns. Professional scribes and illuminators organized into guilds, produced books on commission or speculation, and developed workshop practices that allowed division of labor and standardization. This commercialization brought manuscripts to broader audiences—merchants, lawyers, and minor nobility who could not have afforded the lavish productions of great monasteries but desired books of hours for private devotion.

Modern scholarship on medieval illumination has moved beyond connoisseurship—the attribution of works to individual artists or schools—toward broader questions of function, reception, and material culture. How did medieval readers interact with illuminated pages? What role did images play in meditation, memorization, and emotional response? How did the physical experience of handling a manuscript shape its meaning? These questions integrate art history with book history, liturgical studies, and cognitive science, making medieval manuscripts productive sites for interdisciplinary inquiry.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp41-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Medieval manuscript illumination was an integrated art form shaped by technical processes, stylistic developments, and social organization, now studied through interdisciplinary approaches." },
      { letter: "B", text: "The Book of Kells is the only medieval manuscript worthy of scholarly attention." },
      { letter: "C", text: "Medieval illuminators were exclusively monks who worked in isolation from broader artistic developments." },
      { letter: "D", text: "The commercialization of book production in the Gothic period destroyed the artistic quality of illuminated manuscripts." },
      { letter: "E", text: "Modern scholars have conclusively identified the individual artists responsible for all major medieval manuscripts." },
    ],
    correctAnswer: "A",
    explanation: "The passage comprehensively examines illumination's technical aspects, stylistic evolution, changing social organization of production, and contemporary interdisciplinary scholarship. Answer A captures this breadth while noting the integration that characterizes the art form.",
    wrongAnswerExplanations: {
      B: "The Book of Kells is mentioned as one example among several; the passage covers manuscripts broadly.",
      C: "The passage explicitly describes the shift from monastic to commercial urban production and notes that illumination 'participated in broader visual culture.'",
      D: "The passage presents commercialization as bringing manuscripts to broader audiences, not as destroying artistic quality.",
      E: "The passage states that modern scholarship has moved 'beyond connoisseurship—the attribution of works to individual artists.'"
    },
    difficulty: "medium",
    passageId: "rc-exp41-p3",
  },
  {
    id: "rc-exp41-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, ultramarine blue was reserved for depictions of the Virgin Mary because of its",
    answerChoices: [
      { letter: "A", text: "availability in abundance from local European sources" },
      { letter: "B", text: "expense and celestial associations" },
      { letter: "C", text: "ease of application compared to other pigments" },
      { letter: "D", text: "stability over time unlike other medieval pigments" },
      { letter: "E", text: "association with monastic poverty and humility" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that ultramarine blue 'was reserved for the Virgin Mary's robes due to its expense and celestial associations.' The pigment's derivation from lapis lazuli imported from Afghanistan made it costly.",
    wrongAnswerExplanations: {
      A: "The passage states ultramarine was 'derived from lapis lazuli imported from Afghanistan,' indicating it was expensive and not locally abundant.",
      C: "The passage does not discuss ease of application; it emphasizes the pigment's expense and symbolic meaning.",
      D: "The passage does not mention stability as a reason for ultramarine's use.",
      E: "The passage associates ultramarine with expense and divine/celestial meaning, not poverty or humility."
    },
    difficulty: "easy",
    passageId: "rc-exp41-p3",
  },
  {
    id: "rc-exp41-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, a thirteenth-century illuminator working in Paris would most likely have",
    answerChoices: [
      { letter: "A", text: "been a monk working in a scriptorium as a form of religious observance" },
      { letter: "B", text: "produced manuscripts exclusively for liturgical use in churches" },
      { letter: "C", text: "worked as a professional in a guild-organized commercial trade" },
      { letter: "D", text: "favored flat, schematic figures over naturalistic representation" },
      { letter: "E", text: "had no contact with developments in painting and sculpture" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'in the twelfth and thirteenth centuries' an 'increasingly commercial book trade centered in university towns' developed, with 'professional scribes and illuminators organized into guilds.' Paris, as a major university town, would exemplify this commercial organization.",
    wrongAnswerExplanations: {
      A: "The passage describes monastic scriptoria as characteristic of early medieval production, with commercial workshops replacing them in the twelfth and thirteenth centuries.",
      B: "The passage notes that commercialization brought manuscripts to broader audiences including 'merchants, lawyers, and minor nobility' for 'private devotion.'",
      D: "The passage associates flat, schematic figures with early medieval British Isles illumination, while the Gothic period brought 'further naturalization.'",
      E: "The passage states that 'manuscript illumination participated in broader visual culture rather than evolving in isolation.'"
    },
    difficulty: "medium",
    passageId: "rc-exp41-p3",
  },
  {
    id: "rc-exp41-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions the Book of Kells and the Lindisfarne Gospels primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that early medieval manuscripts were artistically superior to later Gothic productions" },
      { letter: "B", text: "provide examples illustrating the stylistic characteristics of early medieval British Isles illumination" },
      { letter: "C", text: "demonstrate that monasteries were incapable of producing high-quality manuscripts" },
      { letter: "D", text: "explain why modern scholars focus exclusively on Irish manuscript production" },
      { letter: "E", text: "criticize the decorative complexity of Insular manuscript art" },
    ],
    correctAnswer: "B",
    explanation: "These manuscripts are introduced as examples of 'early medieval illumination in the British Isles' that 'exemplified' characteristics including 'intricate interlacing patterns, zoomorphic ornament, and flat, schematic figures.' They illustrate the passage's point about early medieval style.",
    wrongAnswerExplanations: {
      A: "The passage presents stylistic developments without declaring one period superior to another.",
      C: "These manuscripts, produced in monasteries, are presented as significant achievements, not evidence of incapability.",
      D: "The passage does not claim modern scholars focus exclusively on Irish manuscripts; it discusses broader developments.",
      E: "The passage presents decorative complexity descriptively, not critically."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p3",
  },
  {
    id: "rc-exp41-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward recent interdisciplinary approaches to medieval manuscript scholarship can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive, viewing them as abandoning essential art historical methods" },
      { letter: "B", text: "approving, presenting them as productive expansions of scholarly inquiry" },
      { letter: "C", text: "neutral, neither endorsing nor criticizing contemporary methodologies" },
      { letter: "D", text: "confused about the difference between connoisseurship and newer approaches" },
      { letter: "E", text: "hostile to any integration of art history with other disciplines" },
    ],
    correctAnswer: "B",
    explanation: "The author describes modern scholarship as having 'moved beyond connoisseurship' toward 'broader questions' that 'integrate art history with book history, liturgical studies, and cognitive science, making medieval manuscripts productive sites for interdisciplinary inquiry.' The characterization as 'productive' indicates approval.",
    wrongAnswerExplanations: {
      A: "The author presents moving beyond connoisseurship positively, not as abandoning essential methods.",
      C: "The author's characterization of interdisciplinary approaches as 'productive' indicates endorsement, not neutrality.",
      D: "The author clearly distinguishes connoisseurship (attribution) from newer approaches focused on function and reception.",
      E: "The author approvingly describes integration with other disciplines as making manuscripts 'productive sites for interdisciplinary inquiry.'"
    },
    difficulty: "medium",
    passageId: "rc-exp41-p3",
  },
  {
    id: "rc-exp41-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the information in the passage, which one of the following would most likely be a topic of interest to a contemporary scholar of medieval manuscripts as described in the final paragraph?",
    answerChoices: [
      { letter: "A", text: "Determining the precise attribution of an anonymous illuminated page to a specific artist" },
      { letter: "B", text: "How the weight and binding of a devotional book affected the physical experience of prayer" },
      { letter: "C", text: "Compiling a comprehensive catalogue of all ultramarine blue pigments used in the thirteenth century" },
      { letter: "D", text: "Establishing the market prices of illuminated manuscripts in medieval Paris" },
      { letter: "E", text: "Comparing the chemical composition of gold leaf across different scriptoria" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph emphasizes questions about 'how did medieval readers interact with illuminated pages,' 'the physical experience of handling a manuscript,' and connections to 'cognitive science.' A study of how book weight and binding affected prayer would exemplify this interest in physical experience and reception.",
    wrongAnswerExplanations: {
      A: "The passage presents attribution (connoisseurship) as an approach that contemporary scholarship has 'moved beyond.'",
      C: "While materials are discussed, the passage emphasizes function and reception over purely cataloguing physical materials.",
      D: "Market prices might relate to commercialization but are not among the questions the final paragraph emphasizes.",
      E: "Chemical analysis of materials is not among the interdisciplinary interests described in the final paragraph."
    },
    difficulty: "hard",
    passageId: "rc-exp41-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - NONPROFIT ORGANIZATIONS AND CIVIL SOCIETY
// ============================================

const passage4 = `Nonprofit organizations occupy a distinctive position in contemporary societies, operating between the state and the market while serving purposes that neither government nor business adequately addresses. This "third sector" encompasses an enormous variety of entities—hospitals, universities, environmental advocacy groups, neighborhood associations, religious congregations, and international development organizations—unified primarily by their legal status as entities that do not distribute surplus revenues to owners or shareholders. The growth of the nonprofit sector over recent decades has prompted sustained scholarly attention to its roles, governance, and relationship to democratic citizenship.

Classical economic theory offers one explanation for nonprofit existence: they arise where markets fail to provide certain goods and where government either cannot or will not fill the gap. Private donations and volunteer labor enable nonprofits to deliver services that would otherwise go unprovided. Information asymmetries also favor nonprofit organization in domains like healthcare and childcare, where consumers cannot easily evaluate quality; the nondistribution constraint signals that the organization will not exploit informational advantages for profit. This economic rationale, however, cannot fully account for the diversity of nonprofit activity, much of which involves advocacy, community building, and expressive activities that do not fit neatly into a service-delivery framework.

Political theories emphasize nonprofits' contributions to democratic governance. Alexis de Tocqueville famously observed that Americans' propensity for voluntary association served as a counterweight to both governmental power and individualistic isolation, cultivating civic skills and social bonds that sustained democratic participation. Contemporary scholars extend this insight, arguing that nonprofit organizations provide venues for public deliberation, aggregate and articulate citizen preferences, monitor government action, and represent marginalized communities whose voices might otherwise go unheard. The associational life of civil society, on this view, constitutes an essential infrastructure for democratic politics.

Critics, however, question whether nonprofits actually enhance democracy or merely substitute private philanthropy for public responsibility. When wealthy donors establish foundations and direct resources according to their own preferences, they exercise political influence without democratic accountability. Tax exemptions for charitable contributions effectively allow donors to redirect public funds toward their favored causes, regardless of broader public priorities. Moreover, the professional staffing of major nonprofits can distance organizations from the grassroots participation that Tocquevillean theory celebrates, creating advocacy organizations that represent constituencies rather than engaging them as active participants.

The governance challenges facing nonprofit organizations reflect these competing demands. Board members must balance fiduciary responsibility to the organization with responsiveness to multiple stakeholders—donors, beneficiaries, staff, and the broader public. Unlike shareholders who can sell stock in underperforming corporations, nonprofit stakeholders lack clear exit options, making voice mechanisms particularly important. Yet meaningful participation often remains elusive, as organizational complexity, professional expertise, and fundraising imperatives can marginalize lay perspectives. How nonprofits navigate these tensions shapes whether they fulfill their democratic promise or reproduce the exclusions they purport to remedy.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp41-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that nonprofit organizations should be abolished due to their antidemocratic tendencies" },
      { letter: "B", text: "examine various theoretical perspectives on nonprofit organizations while acknowledging both their democratic potential and significant governance challenges" },
      { letter: "C", text: "demonstrate that economic explanations for nonprofits are entirely sufficient for understanding the sector" },
      { letter: "D", text: "celebrate Tocqueville's analysis as the definitive account of nonprofit organizations' role in society" },
      { letter: "E", text: "compare the efficiency of nonprofit organizations with for-profit businesses in delivering social services" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents economic theories, political/democratic theories, critiques of those theories, and governance challenges—offering a balanced examination of perspectives rather than advocating for one view or calling for abolition.",
    wrongAnswerExplanations: {
      A: "The passage presents critiques but does not argue for abolishing nonprofits; it concludes by noting how organizations might 'fulfill their democratic promise.'",
      C: "The passage explicitly states that economic rationale 'cannot fully account for the diversity of nonprofit activity.'",
      D: "While Tocqueville is cited, the passage also presents criticisms of Tocquevillean optimism and notes governance challenges.",
      E: "The passage does not compare efficiency between nonprofit and for-profit organizations."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p4",
  },
  {
    id: "rc-exp41-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the nondistribution constraint functions to",
    answerChoices: [
      { letter: "A", text: "prevent nonprofits from earning any revenue whatsoever" },
      { letter: "B", text: "ensure that all nonprofit employees are volunteers rather than paid staff" },
      { letter: "C", text: "signal that organizations will not exploit informational advantages for profit" },
      { letter: "D", text: "require nonprofits to distribute all surplus revenues to beneficiaries" },
      { letter: "E", text: "prohibit nonprofits from engaging in any advocacy activities" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'the nondistribution constraint signals that the organization will not exploit informational advantages for profit.' This occurs in contexts like healthcare where consumers cannot easily evaluate quality.",
    wrongAnswerExplanations: {
      A: "The nondistribution constraint prevents distribution of surplus to owners, not earning of revenue.",
      B: "The passage mentions 'professional staffing' of nonprofits, indicating paid employees exist.",
      D: "The constraint prevents distribution to owners/shareholders; the passage does not say all surplus must go to beneficiaries.",
      E: "The passage discusses nonprofits engaging in 'advocacy, community building, and expressive activities.'"
    },
    difficulty: "easy",
    passageId: "rc-exp41-p4",
  },
  {
    id: "rc-exp41-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, critics of the Tocquevillean view of voluntary associations would most likely argue that",
    answerChoices: [
      { letter: "A", text: "Tocqueville correctly predicted that nonprofits would always enhance democratic participation" },
      { letter: "B", text: "contemporary nonprofit organizations may substitute elite philanthropy for genuine grassroots engagement" },
      { letter: "C", text: "tax exemptions for charitable contributions have no effect on public resource allocation" },
      { letter: "D", text: "professional staff always improve nonprofit organizations' democratic responsiveness" },
      { letter: "E", text: "wealthy donors never exercise any influence over nonprofit priorities" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes critics who 'question whether nonprofits actually enhance democracy or merely substitute private philanthropy for public responsibility' and who note that 'professional staffing' can create organizations that 'represent constituencies rather than engaging them as active participants.' This reflects concern about elite substitution for grassroots engagement.",
    wrongAnswerExplanations: {
      A: "Critics challenge rather than affirm Tocquevillean optimism about nonprofits enhancing democracy.",
      C: "The passage presents the critique that tax exemptions 'effectively allow donors to redirect public funds toward their favored causes.'",
      D: "The passage presents professionalization as potentially problematic, 'creating advocacy organizations that represent constituencies rather than engaging them.'",
      E: "Critics explicitly argue that wealthy donors 'exercise political influence without democratic accountability.'"
    },
    difficulty: "medium",
    passageId: "rc-exp41-p4",
  },
  {
    id: "rc-exp41-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions healthcare and childcare primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize nonprofit hospitals for providing inadequate medical care" },
      { letter: "B", text: "illustrate domains where information asymmetries favor nonprofit organization" },
      { letter: "C", text: "argue that government should take over all healthcare and childcare services" },
      { letter: "D", text: "demonstrate that for-profit businesses are always more efficient than nonprofits" },
      { letter: "E", text: "explain why Tocqueville focused on American voluntary associations" },
    ],
    correctAnswer: "B",
    explanation: "Healthcare and childcare are mentioned as examples of 'domains like healthcare and childcare, where consumers cannot easily evaluate quality' and where information asymmetries exist. The nondistribution constraint helps address these asymmetries.",
    wrongAnswerExplanations: {
      A: "The passage does not criticize nonprofit hospitals; it explains why nonprofits arise in healthcare.",
      C: "The passage does not advocate government takeover of these services.",
      D: "The passage does not compare nonprofit and for-profit efficiency in these domains.",
      E: "These examples relate to economic theory of nonprofit formation, not to Tocqueville's analysis."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p4",
  },
  {
    id: "rc-exp41-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward nonprofit organizations' democratic role can best be described as",
    answerChoices: [
      { letter: "A", text: "uniformly enthusiastic about their contributions to democratic governance" },
      { letter: "B", text: "completely skeptical about any democratic benefits they might provide" },
      { letter: "C", text: "balanced and analytical, recognizing both potential and significant challenges" },
      { letter: "D", text: "indifferent to questions of democracy and focused solely on economic efficiency" },
      { letter: "E", text: "nostalgic for nineteenth-century voluntary associations and dismissive of contemporary nonprofits" },
    ],
    correctAnswer: "C",
    explanation: "The author presents democratic theories approvingly, then describes critics' concerns, and concludes by noting that how nonprofits navigate tensions 'shapes whether they fulfill their democratic promise or reproduce the exclusions they purport to remedy.' This indicates balanced recognition of both potential and challenges.",
    wrongAnswerExplanations: {
      A: "The passage includes substantial criticism and notes governance challenges, indicating qualified rather than uniform enthusiasm.",
      B: "The passage presents democratic potential seriously before discussing challenges, not complete skepticism.",
      D: "The passage devotes substantial attention to democratic theory and governance, not solely economic efficiency.",
      E: "The passage presents Tocqueville as foundational but engages seriously with contemporary challenges rather than being dismissive or nostalgic."
    },
    difficulty: "medium",
    passageId: "rc-exp41-p4",
  },
  {
    id: "rc-exp41-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the political theory of nonprofits described in the third paragraph?",
    answerChoices: [
      { letter: "A", text: "A study found that participation in voluntary associations correlated with lower rates of voting and political engagement." },
      { letter: "B", text: "Research demonstrated that individuals active in community organizations developed transferable civic skills and were more likely to engage in democratic activities." },
      { letter: "C", text: "Analysis showed that most nonprofit revenue comes from government contracts rather than private donations." },
      { letter: "D", text: "Surveys indicated that nonprofit board members were drawn exclusively from wealthy elites." },
      { letter: "E", text: "Evidence suggested that nonprofits in authoritarian countries functioned identically to those in democracies." },
    ],
    correctAnswer: "B",
    explanation: "The political theory holds that nonprofits 'cultivat[e] civic skills and social bonds that sustained democratic participation.' Evidence that voluntary association participation correlates with development of civic skills and increased democratic engagement would directly support this claim.",
    wrongAnswerExplanations: {
      A: "This would weaken the political theory by suggesting association does not enhance democratic participation.",
      C: "This relates to nonprofit funding rather than to their effects on civic participation and democratic engagement.",
      D: "This would support critics' concerns about elite domination rather than the democratic theory.",
      E: "This would be irrelevant or potentially undermining, as the theory emphasizes nonprofits' specific contribution to democratic governance."
    },
    difficulty: "hard",
    passageId: "rc-exp41-p4",
  },
];

// Export all RC questions from Set 41
export const rcQuestionsExpSet41: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet41 = {
  passage1: { id: "rc-exp41-p1", content: passage1, topic: "law", title: "Environmental Compliance and Enforcement" },
  passage2: { id: "rc-exp41-p2", content: passage2, topic: "natural-sciences", title: "Volcanology and Geothermal Activity" },
  passage3: { id: "rc-exp41-p3", content: passage3, topic: "humanities", title: "Medieval Manuscript Illumination" },
  passage4: { id: "rc-exp41-p4", content: passage4, topic: "social-sciences", title: "Nonprofit Organizations and Civil Society" },
};
