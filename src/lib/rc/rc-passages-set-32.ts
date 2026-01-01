// Reading Comprehension Expansion Set 32
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - INTERNATIONAL HUMAN RIGHTS LAW
// ============================================

const passage1 = `International human rights law represents one of the most significant developments in legal history, fundamentally transforming the relationship between individuals and states. Before World War II, international law was conceived primarily as a system governing relations between sovereign states; individuals were subjects of domestic jurisdiction, and how a state treated its own citizens was considered an internal matter beyond the reach of international scrutiny. The atrocities of the Holocaust and other wartime horrors shattered this conception, leading to the emergence of a new legal paradigm that recognized individuals as bearers of rights enforceable at the international level.

The Universal Declaration of Human Rights, adopted by the United Nations General Assembly in 1948, established the foundational principles of this new order. Though not legally binding in itself, the Declaration articulated a comprehensive vision of civil, political, economic, social, and cultural rights that has profoundly shaped subsequent legal development. The International Covenant on Civil and Political Rights and the International Covenant on Economic, Social and Cultural Rights, both adopted in 1966, transformed many of these principles into binding treaty obligations. Together with the Universal Declaration, these instruments are often referred to as the International Bill of Rights.

Regional human rights systems have developed alongside global mechanisms, often providing more robust enforcement capabilities. The European Court of Human Rights, established under the European Convention on Human Rights, can issue binding judgments against member states and has developed an extensive jurisprudence addressing issues from fair trial rights to privacy protections. The Inter-American and African regional systems have similarly created adjudicatory bodies, though with varying degrees of effectiveness. These regional courts have sometimes pushed the boundaries of human rights protection beyond what global institutions have been willing to recognize.

Critics of international human rights law raise several significant objections. Some argue that the universalist premises of human rights discourse mask Western cultural imperialism, imposing liberal individualist values on societies with different traditions and priorities. Others point to the persistent enforcement gap—the disparity between formally recognized rights and actual protection on the ground—as evidence that international human rights law remains more aspirational than effective. Powerful states routinely violate human rights norms with impunity, critics observe, while facing few meaningful consequences from international institutions.

Defenders of the international human rights regime acknowledge its limitations while emphasizing its achievements. They point to the delegitimization of practices once considered acceptable—torture, apartheid, gender-based discrimination—as evidence of normative progress. They argue that human rights discourse provides a common vocabulary for advocacy across cultural and political boundaries, empowering civil society movements worldwide. Even where enforcement remains weak, defenders contend, the existence of binding legal standards creates accountability frameworks that can constrain state behavior over time, particularly when combined with domestic judicial review and transnational advocacy networks.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp32-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "International human rights law has completely succeeded in protecting individuals from state abuses worldwide." },
      { letter: "B", text: "The development of international human rights law since World War II has fundamentally changed the relationship between states and individuals, though significant debates persist about its effectiveness and legitimacy." },
      { letter: "C", text: "Regional human rights courts are more effective than global institutions at protecting individual rights." },
      { letter: "D", text: "The Universal Declaration of Human Rights is the most important legal document in human history." },
      { letter: "E", text: "Critics of international human rights law have convincingly demonstrated that the entire system should be dismantled." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the historical development of international human rights law, describes both global and regional mechanisms, and presents the debate between critics and defenders. Answer B captures this comprehensive treatment, acknowledging both the transformative nature of human rights law and ongoing controversies.",
    wrongAnswerExplanations: {
      "A": "This is too absolute; the passage acknowledges significant enforcement gaps and limitations.",
      "C": "While regional courts are discussed, the passage doesn't make this comparative claim as its main point.",
      "D": "The passage discusses the Declaration but doesn't claim it is the most important legal document in history.",
      "E": "The passage presents criticisms balanced with defenses; it doesn't conclude the system should be dismantled."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p1",
  },
  {
    id: "rc-exp32-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, before World War II, international law",
    answerChoices: [
      { letter: "A", text: "provided comprehensive protections for individual rights" },
      { letter: "B", text: "was primarily concerned with regulating relations between sovereign states" },
      { letter: "C", text: "prohibited states from mistreating their own citizens" },
      { letter: "D", text: "included binding treaty obligations on economic and social rights" },
      { letter: "E", text: "was enforced by regional human rights courts" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Before World War II, international law was conceived primarily as a system governing relations between sovereign states.' This is a direct explicit-detail question.",
    wrongAnswerExplanations: {
      "A": "The passage indicates the opposite: individual rights were not protected at the international level before WWII.",
      "C": "The passage states that how a state treated its citizens 'was considered an internal matter beyond the reach of international scrutiny.'",
      "D": "The International Covenants creating binding treaty obligations were adopted in 1966, after WWII.",
      "E": "Regional human rights courts developed after WWII, alongside the global human rights system."
    },
    difficulty: "easy",
    passageId: "rc-exp32-p1",
  },
  {
    id: "rc-exp32-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, defenders of international human rights law would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "The enforcement gap demonstrates that human rights law has no practical value." },
      { letter: "B", text: "Human rights norms are effective only when they reflect Western liberal values." },
      { letter: "C", text: "The gradual delegitimization of practices like torture reflects meaningful progress even without perfect enforcement." },
      { letter: "D", text: "Regional human rights courts should replace global institutions entirely." },
      { letter: "E", text: "Powerful states should be exempt from human rights obligations." },
    ],
    correctAnswer: "C",
    explanation: "The passage states that defenders 'point to the delegitimization of practices once considered acceptable—torture, apartheid, gender-based discrimination—as evidence of normative progress.' This indicates they view such changes as meaningful even without complete enforcement.",
    wrongAnswerExplanations: {
      "A": "Defenders explicitly argue that human rights law has value despite enforcement limitations.",
      "B": "This is a criticism raised against human rights law, not a position defenders would endorse.",
      "D": "The passage doesn't attribute this position to defenders.",
      "E": "The passage notes that critics point out powerful states violate norms with impunity; this is a criticism, not something defenders would endorse."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p1",
  },
  {
    id: "rc-exp32-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the European Court of Human Rights primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that European legal traditions are superior to those of other regions" },
      { letter: "B", text: "provide an example of a regional human rights mechanism with significant enforcement capabilities" },
      { letter: "C", text: "criticize the ineffectiveness of global human rights institutions" },
      { letter: "D", text: "demonstrate that the Universal Declaration of Human Rights is outdated" },
      { letter: "E", text: "explain why the Inter-American system has failed" },
    ],
    correctAnswer: "B",
    explanation: "The European Court of Human Rights is mentioned in the context of discussing regional systems that 'often provid[e] more robust enforcement capabilities.' The Court exemplifies this by being able to 'issue binding judgments against member states.'",
    wrongAnswerExplanations: {
      "A": "The passage doesn't make claims about the superiority of European legal traditions.",
      "C": "The Court is used to illustrate regional mechanisms, not to criticize global ones directly.",
      "D": "The passage doesn't suggest the Universal Declaration is outdated.",
      "E": "The passage mentions the Inter-American system but doesn't claim it has failed; it notes 'varying degrees of effectiveness.'"
    },
    difficulty: "medium",
    passageId: "rc-exp32-p1",
  },
  {
    id: "rc-exp32-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate between critics and defenders of international human rights law can best be characterized as",
    answerChoices: [
      { letter: "A", text: "dismissive of both positions as irrelevant to practical concerns" },
      { letter: "B", text: "strongly aligned with the critics' perspective" },
      { letter: "C", text: "balanced and expository, presenting both sides without explicit endorsement" },
      { letter: "D", text: "enthusiastically supportive of the defenders' arguments" },
      { letter: "E", text: "skeptical of the possibility that either side has valid points" },
    ],
    correctAnswer: "C",
    explanation: "The author presents critics' arguments (cultural imperialism concerns, enforcement gap, impunity of powerful states) and defenders' responses (normative progress, common vocabulary for advocacy, accountability frameworks) without indicating which position is correct. The tone is descriptive rather than evaluative.",
    wrongAnswerExplanations: {
      "A": "The author treats both positions as worthy of discussion, not as irrelevant.",
      "B": "The author doesn't endorse the critics' position; both sides are presented fairly.",
      "D": "The author doesn't enthusiastically support defenders; both sides are presented evenly.",
      "E": "The author presents both sides as having valid arguments without dismissing either."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p1",
  },
  {
    id: "rc-exp32-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument that international human rights law is ineffective?",
    answerChoices: [
      { letter: "A", text: "Several countries that ratified human rights treaties have subsequently improved their treatment of prisoners." },
      { letter: "B", text: "Countries that have ratified the most human rights treaties show no better human rights outcomes than countries that have ratified fewer." },
      { letter: "C", text: "Regional human rights courts have issued increasing numbers of binding judgments over the past decade." },
      { letter: "D", text: "Transnational advocacy networks have successfully pressured governments to release political prisoners." },
      { letter: "E", text: "The concept of human rights has become increasingly accepted across diverse cultural contexts." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue there is an 'enforcement gap' between 'formally recognized rights and actual protection on the ground.' If countries that ratified more treaties show no better outcomes, this would directly support the criticism that formal legal commitments don't translate into real protection—the system is ineffective at changing state behavior.",
    wrongAnswerExplanations: {
      "A": "This would weaken the critics' argument by showing treaties do improve outcomes.",
      "C": "This suggests regional mechanisms are becoming more active, which would counter claims of ineffectiveness.",
      "D": "This supports the defenders' argument that advocacy networks help constrain state behavior.",
      "E": "This would support defenders' claim that human rights discourse provides a 'common vocabulary' across cultures."
    },
    difficulty: "hard",
    passageId: "rc-exp32-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - PHOTOSYNTHESIS MECHANISMS
// ============================================

const passage2 = `Photosynthesis, the process by which plants, algae, and certain bacteria convert light energy into chemical energy, is arguably the most important biochemical process on Earth. Not only does it produce the oxygen upon which aerobic life depends, but it also serves as the foundation of virtually all food webs, transforming inorganic carbon dioxide into the organic compounds that sustain heterotrophic organisms. Despite centuries of scientific inquiry, researchers continue to uncover new complexities in the photosynthetic machinery.

The light-dependent reactions of photosynthesis occur in the thylakoid membranes of chloroplasts, where sophisticated protein complexes capture and process light energy. Photosystem II initiates the process by using light energy to split water molecules, releasing oxygen as a byproduct and generating electrons that flow through an electron transport chain. This electron transport is coupled to the pumping of hydrogen ions across the thylakoid membrane, creating an electrochemical gradient that drives ATP synthesis. Photosystem I then uses additional light energy to reduce these electrons to a level sufficient for carbon fixation.

The light-independent reactions, occurring in the chloroplast stroma, use the ATP and reducing power generated by the light reactions to convert carbon dioxide into organic sugars. The Calvin-Benson cycle, the most common carbon fixation pathway, begins with the enzyme RuBisCO catalyzing the attachment of carbon dioxide to a five-carbon sugar. The resulting products are processed through a series of enzymatic reactions that ultimately regenerate the initial five-carbon acceptor while producing three-carbon sugars that can be used for biosynthesis or energy storage.

RuBisCO, however, presents a significant inefficiency in photosynthesis. This enzyme also reacts with oxygen in a process called photorespiration, which wastes energy and releases previously fixed carbon. Photorespiration becomes particularly problematic under hot, dry conditions when plants close their stomata to conserve water, causing oxygen to accumulate relative to carbon dioxide in leaf tissues. Some plants have evolved carbon-concentrating mechanisms to overcome this limitation. C4 plants, including maize and sugarcane, initially fix carbon in specialized cells using a more efficient enzyme, then transport the fixed carbon to bundle sheath cells where RuBisCO operates in a carbon dioxide-enriched environment.

Recent research has focused on engineering improved photosynthesis to meet growing food demands. Some scientists are attempting to introduce C4 pathways into C3 crops like rice and wheat. Others are working to improve RuBisCO itself, either by introducing faster versions from cyanobacteria or by engineering novel variants with reduced oxygenase activity. Still others are exploring the possibility of creating entirely synthetic photosynthetic systems that bypass the limitations of natural photosynthesis altogether. These efforts face significant challenges, including the complexity of multigene pathways and the delicate balance required to maintain efficient energy flow, but the potential rewards—including crops that produce higher yields with less water and fertilizer—have attracted substantial research investment.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp32-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Photosynthesis is a simple process that scientists now fully understand." },
      { letter: "B", text: "The Calvin-Benson cycle is the only pathway for carbon fixation in plants." },
      { letter: "C", text: "Photosynthesis is a complex and vital process that, despite its inherent inefficiencies, is the subject of ongoing research aimed at improvement." },
      { letter: "D", text: "C4 plants will inevitably replace all other plant types due to their superior efficiency." },
      { letter: "E", text: "RuBisCO is a perfect enzyme that requires no modification for optimal photosynthetic performance." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes photosynthesis as vital, details its complex mechanisms, discusses the inefficiency of RuBisCO and photorespiration, and outlines current research efforts to improve photosynthesis. Answer C captures all these elements.",
    wrongAnswerExplanations: {
      "A": "The passage emphasizes ongoing complexity and continued research, not simplicity or complete understanding.",
      "B": "The passage mentions C4 plants have evolved alternative carbon-concentrating mechanisms.",
      "D": "The passage doesn't make predictions about C4 plants replacing others.",
      "E": "The passage emphasizes RuBisCO's significant inefficiencies, including photorespiration."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p2",
  },
  {
    id: "rc-exp32-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, photorespiration",
    answerChoices: [
      { letter: "A", text: "is a beneficial process that enhances plant productivity" },
      { letter: "B", text: "occurs when RuBisCO reacts with oxygen, wasting energy and releasing fixed carbon" },
      { letter: "C", text: "is the primary carbon fixation pathway in C4 plants" },
      { letter: "D", text: "takes place exclusively in the thylakoid membranes" },
      { letter: "E", text: "increases plant growth under hot, dry conditions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'RuBisCO also reacts with oxygen in a process called photorespiration, which wastes energy and releases previously fixed carbon.'",
    wrongAnswerExplanations: {
      "A": "The passage describes photorespiration as an inefficiency, not a benefit.",
      "C": "Photorespiration is described as a wasteful side reaction, not a carbon fixation pathway.",
      "D": "The passage indicates RuBisCO operates in the stroma, where light-independent reactions occur.",
      "E": "The passage states photorespiration is 'particularly problematic under hot, dry conditions.'"
    },
    difficulty: "easy",
    passageId: "rc-exp32-p2",
  },
  {
    id: "rc-exp32-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following can be most reasonably inferred about C4 plants?",
    answerChoices: [
      { letter: "A", text: "They are unable to survive in cool, moist environments." },
      { letter: "B", text: "They have evolved adaptations that reduce the negative effects of photorespiration." },
      { letter: "C", text: "They do not use the Calvin-Benson cycle for carbon fixation." },
      { letter: "D", text: "They produce less oxygen than C3 plants." },
      { letter: "E", text: "They require more water than C3 plants to survive." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes C4 plants as having 'evolved carbon-concentrating mechanisms to overcome' the limitations of photorespiration. By creating a 'carbon dioxide-enriched environment' for RuBisCO, they reduce the enzyme's reaction with oxygen.",
    wrongAnswerExplanations: {
      "A": "The passage doesn't claim C4 plants cannot survive in cool, moist conditions.",
      "C": "The passage indicates RuBisCO still operates in bundle sheath cells of C4 plants, suggesting the Calvin-Benson cycle is still used.",
      "D": "The passage doesn't compare oxygen production between C3 and C4 plants.",
      "E": "The passage suggests the opposite: research aims for 'crops that produce higher yields with less water.'"
    },
    difficulty: "medium",
    passageId: "rc-exp32-p2",
  },
  {
    id: "rc-exp32-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the electron transport chain primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize earlier scientific models of photosynthesis" },
      { letter: "B", text: "explain how light energy is converted to chemical energy in the form of ATP" },
      { letter: "C", text: "demonstrate that photosynthesis is an inefficient process" },
      { letter: "D", text: "argue that Photosystem I is more important than Photosystem II" },
      { letter: "E", text: "introduce the concept of photorespiration" },
    ],
    correctAnswer: "B",
    explanation: "The electron transport chain is described in the context of light-dependent reactions. The passage explains that 'electron transport is coupled to the pumping of hydrogen ions' creating 'an electrochemical gradient that drives ATP synthesis'—showing how light energy becomes chemical energy.",
    wrongAnswerExplanations: {
      "A": "The passage doesn't criticize earlier models; it describes current understanding.",
      "C": "The electron transport chain discussion doesn't relate to inefficiency; that comes later with RuBisCO.",
      "D": "The passage doesn't compare the importance of the two photosystems.",
      "E": "Photorespiration is introduced later in the passage, in a different context."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p2",
  },
  {
    id: "rc-exp32-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward efforts to engineer improved photosynthesis can best be described as",
    answerChoices: [
      { letter: "A", text: "deeply skeptical about the possibility of success" },
      { letter: "B", text: "cautiously optimistic while acknowledging significant challenges" },
      { letter: "C", text: "enthusiastically confident that all goals will be achieved" },
      { letter: "D", text: "indifferent to the practical applications of photosynthesis research" },
      { letter: "E", text: "dismissive of scientists who pursue such research" },
    ],
    correctAnswer: "B",
    explanation: "The author describes multiple research approaches and notes that 'these efforts face significant challenges' while also acknowledging 'the potential rewards' that 'have attracted substantial research investment.' This balanced view suggests cautious optimism.",
    wrongAnswerExplanations: {
      "A": "The author doesn't express deep skepticism; the challenges are noted alongside potential benefits.",
      "C": "The author explicitly notes 'significant challenges,' indicating less than full confidence.",
      "D": "The author discusses practical applications like 'higher yields with less water and fertilizer.'",
      "E": "The author describes research efforts respectfully, without dismissiveness."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p2",
  },
  {
    id: "rc-exp32-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the information in the passage, which of the following agricultural scenarios would most likely benefit from the successful introduction of C4 pathways into a C3 crop?",
    answerChoices: [
      { letter: "A", text: "A rice farm in a region with abundant rainfall and moderate temperatures" },
      { letter: "B", text: "A wheat farm experiencing prolonged drought and high summer temperatures" },
      { letter: "C", text: "A greenhouse operation with precise control over carbon dioxide levels" },
      { letter: "D", text: "An underwater cultivation system for aquatic plants" },
      { letter: "E", text: "A research laboratory growing plants in pure nitrogen atmospheres" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that photorespiration 'becomes particularly problematic under hot, dry conditions when plants close their stomata to conserve water.' C4 pathways help overcome this limitation. A wheat farm experiencing drought and high temperatures would benefit most from reduced photorespiration.",
    wrongAnswerExplanations: {
      "A": "With abundant rainfall and moderate temperatures, photorespiration is less problematic, so the benefit would be smaller.",
      "C": "If carbon dioxide levels can be precisely controlled, a greenhouse could reduce photorespiration without C4 pathways.",
      "D": "The passage discusses terrestrial plants; underwater conditions would present different challenges.",
      "E": "Plants require carbon dioxide for photosynthesis; a pure nitrogen atmosphere would prevent photosynthesis entirely."
    },
    difficulty: "hard",
    passageId: "rc-exp32-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - EXPRESSIONISM IN GERMAN CINEMA
// ============================================

const passage3 = `German Expressionist cinema, flourishing roughly between 1919 and 1927, represents one of the most distinctive and influential movements in film history. Emerging from the broader Expressionist movement in painting, theater, and literature, these films rejected naturalistic representation in favor of stylized visual distortion designed to externalize inner psychological states. In an era when Germany was reeling from defeat in World War I, hyperinflation, and political instability, Expressionist filmmakers created works that gave visual form to collective anxieties and cultural trauma.

The visual vocabulary of German Expressionism is immediately recognizable. Sets featured jagged, angular architecture with impossible perspectives, steep staircases leading nowhere, and buildings that seemed to lean and threaten collapse. Lighting was dramatic and contrastive, with deep shadows and sharp geometric patterns painted directly onto surfaces. Actors performed with exaggerated gestures and stylized movements, their faces often rendered mask-like through heavy makeup. Robert Wiene's "The Cabinet of Dr. Caligari" (1920), with its painted shadows and crooked sets, established the template that subsequent films would elaborate.

The thematic concerns of Expressionist cinema were equally distinctive. These films repeatedly explored the psychology of madness, the abuse of authority, and the precariousness of individual identity. Doppelgangers, shadows, and mirrors proliferated as visual metaphors for psychological fragmentation. In films like F.W. Murnau's "Nosferatu" (1922) and Fritz Lang's "Metropolis" (1927), supernatural or technological forces threaten to overwhelm human agency. Critics have interpreted these recurring motifs as reflecting German society's deep uncertainties about modernization, urbanization, and the breakdown of traditional social structures.

The movement's influence on subsequent cinema has been profound and enduring. When many German filmmakers emigrated to Hollywood after the rise of Nazism, they brought Expressionist techniques with them, profoundly shaping the visual style of American film noir. The shadowy urban landscapes, morally ambiguous characters, and pervasive sense of menace in films like "Double Indemnity" and "The Third Man" bear the unmistakable imprint of Expressionist aesthetics. Contemporary directors from Tim Burton to Guillermo del Toro continue to draw on Expressionist visual strategies.

However, some scholars have questioned whether German Expressionism ever constituted a coherent movement at all. They note that only a handful of films fully embrace the stylized aesthetic associated with Expressionism, while many films from the period classified as Expressionist are better understood through other frameworks—the supernatural traditions of German Romanticism, for instance, or the formal innovations of Soviet montage cinema. Other critics argue that the Expressionist label has been applied retrospectively to create a unified national cinema tradition that never existed as such for filmmakers at the time. Despite these scholarly debates, the visual legacy of what we call German Expressionism remains a vital influence on global film practice.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp32-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "German Expressionist cinema was the only significant film movement of the early twentieth century." },
      { letter: "B", text: "German Expressionism, characterized by distinctive visual and thematic elements reflecting post-war anxieties, has had lasting influence on cinema despite scholarly debates about its coherence as a movement." },
      { letter: "C", text: "The emigration of German filmmakers to Hollywood destroyed the authentic tradition of Expressionist cinema." },
      { letter: "D", text: "Scholars have conclusively proven that German Expressionism never existed as a genuine film movement." },
      { letter: "E", text: "Fritz Lang's 'Metropolis' is the definitive example of German Expressionist filmmaking." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Expressionism's distinctive visual style and themes, connects them to post-war German society, traces the movement's influence on subsequent cinema, and notes scholarly debates about its coherence. Answer B captures all these dimensions.",
    wrongAnswerExplanations: {
      "A": "The passage doesn't claim Expressionism was the only significant film movement of the era.",
      "C": "The passage suggests emigration spread Expressionist techniques to Hollywood rather than destroying them.",
      "D": "The passage presents scholarly debates but doesn't conclude Expressionism never existed.",
      "E": "While 'Metropolis' is mentioned, the passage doesn't single it out as the definitive example."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p3",
  },
  {
    id: "rc-exp32-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, which of the following is a characteristic visual element of German Expressionist cinema?",
    answerChoices: [
      { letter: "A", text: "Naturalistic outdoor settings filmed in natural light" },
      { letter: "B", text: "Angular architecture with impossible perspectives and dramatic lighting" },
      { letter: "C", text: "Minimalist sets with sparse decoration" },
      { letter: "D", text: "Documentary-style cinematography of everyday life" },
      { letter: "E", text: "Colorful costumes inspired by folk traditions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly describes Expressionist sets as featuring 'jagged, angular architecture with impossible perspectives' and 'dramatic and contrastive' lighting with 'deep shadows and sharp geometric patterns.'",
    wrongAnswerExplanations: {
      "A": "The passage emphasizes stylized, artificial sets rather than naturalistic outdoor settings.",
      "C": "The passage describes elaborate, distorted sets rather than minimalist ones.",
      "D": "Expressionism rejected naturalistic representation; documentary style is the opposite of its approach.",
      "E": "The passage doesn't mention colorful costumes or folk traditions."
    },
    difficulty: "easy",
    passageId: "rc-exp32-p3",
  },
  {
    id: "rc-exp32-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the author would most likely agree with which of the following statements about the relationship between German Expressionism and American film noir?",
    answerChoices: [
      { letter: "A", text: "Film noir represents a complete rejection of Expressionist aesthetics." },
      { letter: "B", text: "Expressionist techniques were transmitted to Hollywood through emigrating German filmmakers and influenced the visual style of film noir." },
      { letter: "C", text: "Film noir emerged independently and has no connection to European cinema movements." },
      { letter: "D", text: "German Expressionism borrowed its techniques from earlier American films." },
      { letter: "E", text: "The similarities between Expressionism and film noir are purely coincidental." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'When many German filmmakers emigrated to Hollywood after the rise of Nazism, they brought Expressionist techniques with them, profoundly shaping the visual style of American film noir.' This directly supports answer B.",
    wrongAnswerExplanations: {
      "A": "The passage argues the opposite: film noir shows 'unmistakable imprint of Expressionist aesthetics.'",
      "C": "The passage explicitly links film noir to German emigre filmmakers.",
      "D": "The passage presents influence flowing from Germany to Hollywood, not the reverse.",
      "E": "The passage describes a causal connection through emigrating filmmakers, not coincidence."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p3",
  },
  {
    id: "rc-exp32-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions 'doppelgangers, shadows, and mirrors' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Expressionist filmmakers for repetitive imagery" },
      { letter: "B", text: "illustrate visual metaphors used to represent psychological fragmentation" },
      { letter: "C", text: "demonstrate that Expressionist films were technically primitive" },
      { letter: "D", text: "contrast Expressionist cinema with American film noir" },
      { letter: "E", text: "explain why German audiences rejected Expressionist films" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Doppelgangers, shadows, and mirrors proliferated as visual metaphors for psychological fragmentation.' These elements are presented as ways filmmakers externalized inner psychological states.",
    wrongAnswerExplanations: {
      "A": "The author doesn't criticize this imagery; it's presented as a meaningful artistic choice.",
      "C": "These elements reflect artistic sophistication, not technical primitiveness.",
      "D": "This imagery is discussed in the context of Expressionist themes, not as a contrast with film noir.",
      "E": "The passage doesn't discuss German audience reception of these films."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p3",
  },
  {
    id: "rc-exp32-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward scholarly debates about the coherence of German Expressionism as a movement is best characterized as",
    answerChoices: [
      { letter: "A", text: "hostile dismissal of the scholars who raise these questions" },
      { letter: "B", text: "enthusiastic agreement that Expressionism never existed" },
      { letter: "C", text: "acknowledgment of the debates while maintaining that Expressionism's visual legacy remains influential" },
      { letter: "D", text: "indifference to the historical accuracy of the Expressionist label" },
      { letter: "E", text: "confusion about the meaning of the scholarly critiques" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the scholarly debates fairly ('some scholars have questioned...') but concludes that 'Despite these scholarly debates, the visual legacy of what we call German Expressionism remains a vital influence.' This shows acknowledgment coupled with affirmation of ongoing influence.",
    wrongAnswerExplanations: {
      "A": "The author presents scholarly critiques respectfully, not hostilely.",
      "B": "The author acknowledges the debates but doesn't agree that Expressionism never existed.",
      "D": "The author engages seriously with the critiques rather than dismissing them as unimportant.",
      "E": "The author explains the critiques clearly, showing understanding rather than confusion."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p3",
  },
  {
    id: "rc-exp32-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A movement is introduced, its key characteristics are described, its influence is traced, and scholarly debates about its nature are presented." },
      { letter: "B", text: "Two opposing theories are stated, evidence for each is presented, and a synthesis is proposed." },
      { letter: "C", text: "A problem is identified, multiple solutions are considered, and one solution is endorsed." },
      { letter: "D", text: "A historical event is described chronologically from beginning to end." },
      { letter: "E", text: "A scientific theory is presented, tested through experiments, and then revised." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces Expressionism (paragraph 1), describes its visual vocabulary and themes (paragraphs 2-3), traces its influence on subsequent cinema (paragraph 4), and discusses scholarly debates (paragraph 5). Answer A accurately captures this structure.",
    wrongAnswerExplanations: {
      "B": "The passage doesn't present two opposing theories and synthesize them.",
      "C": "The passage isn't organized around a problem and solutions.",
      "D": "While the passage is somewhat chronological, it's organized thematically rather than purely chronologically.",
      "E": "This isn't a scientific passage involving experiments and theory revision."
    },
    difficulty: "hard",
    passageId: "rc-exp32-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - MIGRATION PATTERNS AND DIASPORA
// ============================================

const passage4 = `The study of diaspora has undergone significant transformation in recent decades, moving from narrow definitions centered on specific historical experiences to broader analytical frameworks applicable to diverse patterns of migration and community formation. Classical diaspora studies focused primarily on the Jewish experience of exile and dispersion, treating diaspora as a condition defined by forced displacement, collective memory of a homeland, and aspirations for eventual return. This paradigm was subsequently extended to other groups with similar historical trajectories, including Armenians and Greeks.

Contemporary scholars have substantially expanded the diaspora concept. William Safran influentially proposed a set of criteria including dispersal to multiple locations, collective memory and vision of the original homeland, alienation in the host society, commitment to ancestral land restoration, and continued relationship with the homeland that defines communal consciousness. Robin Cohen's work distinguished between victim, labor, trade, imperial, and cultural diasporas, recognizing that dispersal can result from various causes and take diverse forms. These expanded definitions have enabled scholars to analyze populations ranging from Chinese merchants in Southeast Asia to South Asian professionals in Silicon Valley as diasporic communities.

Critics argue that such expansive definitions have rendered the diaspora concept analytically useless. If virtually any migrant community can be labeled a diaspora, they contend, the term loses its capacity to distinguish among qualitatively different forms of mobility and community formation. Some scholars advocate returning to more restrictive definitions that maintain connections to historical experiences of traumatic dispersal. Others propose abandoning the diaspora concept altogether in favor of more precise terminology like "transnational communities" or "ethnic enclaves" that specify particular features of migrant settlement patterns.

The debate over diaspora definitions reflects deeper tensions in migration studies between emphasizing the exceptional nature of particular group experiences and developing generalizable theoretical frameworks. Scholars who favor narrow definitions often highlight the unique historical circumstances and collective traumas that shape specific diasporic identities. Those preferring broader definitions argue that identifying common patterns across diverse cases enables comparative analysis and theory building. Both approaches offer valuable insights while also presenting limitations.

Recent research has increasingly focused on how digital technologies are transforming diasporic connections. Social media platforms, video calling, and instant messaging enable migrants to maintain daily contact with homeland communities in ways impossible for previous generations. These technologies have given rise to what some scholars call "digital diasporas"—communities constituted partly through online interactions that transcend geographic boundaries. Whether these technologically mediated connections represent continuity with traditional diaspora formation or an entirely new social phenomenon remains an active area of scholarly inquiry.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp32-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that the Jewish diaspora is the only legitimate subject of diaspora studies" },
      { letter: "B", text: "describe how diaspora scholarship has evolved, expanded in scope, and generated ongoing debates about definitions and methodology" },
      { letter: "C", text: "prove that digital technologies have made traditional diaspora concepts obsolete" },
      { letter: "D", text: "criticize contemporary scholars for abandoning rigorous historical analysis" },
      { letter: "E", text: "propose a new definition of diaspora that resolves all existing scholarly disagreements" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution from classical to contemporary diaspora studies, presents debates about expanded definitions, and discusses new research on digital diasporas. Answer B captures this comprehensive overview.",
    wrongAnswerExplanations: {
      "A": "The passage describes the Jewish experience as the historical starting point, not as the only legitimate subject.",
      "C": "The passage presents digital diasporas as an ongoing area of inquiry, not as proof that traditional concepts are obsolete.",
      "D": "The author presents various scholarly approaches neutrally without criticizing contemporary scholars.",
      "E": "The author describes debates but doesn't propose a resolution."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p4",
  },
  {
    id: "rc-exp32-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, which of the following is one of the criteria William Safran proposed for defining diaspora?",
    answerChoices: [
      { letter: "A", text: "Mandatory return to the homeland within one generation" },
      { letter: "B", text: "Complete assimilation into the host society" },
      { letter: "C", text: "Collective memory and vision of the original homeland" },
      { letter: "D", text: "Abandonment of ancestral cultural practices" },
      { letter: "E", text: "Exclusive reliance on digital communication technologies" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly lists Safran's criteria, including 'collective memory and vision of the original homeland.'",
    wrongAnswerExplanations: {
      "A": "Safran's criteria mention 'aspirations for eventual return' but not mandatory return within a specific timeframe.",
      "B": "Safran's criteria include 'alienation in the host society,' which suggests the opposite of complete assimilation.",
      "D": "Maintaining connection to homeland and ancestral identity is central to Safran's criteria, not abandonment.",
      "E": "Safran's criteria predate the digital diaspora discussion; digital technologies aren't mentioned in his framework."
    },
    difficulty: "easy",
    passageId: "rc-exp32-p4",
  },
  {
    id: "rc-exp32-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, scholars who favor narrow definitions of diaspora would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "All migrant communities should be classified as diasporas regardless of their circumstances." },
      { letter: "B", text: "The unique historical experiences of certain groups justify maintaining distinctions in terminology." },
      { letter: "C", text: "Comparative analysis across diverse migrant populations is more important than understanding specific group experiences." },
      { letter: "D", text: "Digital technologies have fundamentally transformed the meaning of diaspora beyond recognition." },
      { letter: "E", text: "Robin Cohen's typology of diasporas represents the definitive framework for migration studies." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Scholars who favor narrow definitions often highlight the unique historical circumstances and collective traumas that shape specific diasporic identities.' This suggests they value maintaining distinctions based on unique experiences.",
    wrongAnswerExplanations: {
      "A": "This reflects the expansive definition they oppose, not their own position.",
      "C": "This describes the position of scholars favoring broader definitions, not narrow ones.",
      "D": "The digital diaspora discussion is separate from the narrow vs. broad definition debate.",
      "E": "Cohen's typology is an example of expanded definitions, which narrow-definition scholars would likely critique."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p4",
  },
  {
    id: "rc-exp32-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses Chinese merchants in Southeast Asia and South Asian professionals in Silicon Valley primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these groups are not legitimate diasporas" },
      { letter: "B", text: "illustrate the diverse populations that expanded definitions of diaspora now encompass" },
      { letter: "C", text: "criticize the economic success of certain migrant communities" },
      { letter: "D", text: "contrast Asian migration patterns with European migration patterns" },
      { letter: "E", text: "explain why classical diaspora studies focused on forced displacement" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the context of discussing how 'expanded definitions have enabled scholars to analyze populations ranging from Chinese merchants in Southeast Asia to South Asian professionals in Silicon Valley as diasporic communities.' They illustrate the range of groups now studied.",
    wrongAnswerExplanations: {
      "A": "The passage presents these as examples that expanded definitions can now accommodate, not as illegitimate.",
      "C": "The passage doesn't discuss or criticize the economic success of these groups.",
      "D": "The passage doesn't contrast Asian and European migration patterns.",
      "E": "These examples illustrate expanded definitions, not classical studies' focus on forced displacement."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p4",
  },
  {
    id: "rc-exp32-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the debate between proponents of narrow and broad definitions of diaspora is best described as",
    answerChoices: [
      { letter: "A", text: "firmly committed to one side of the debate" },
      { letter: "B", text: "dismissive of both positions as unproductive" },
      { letter: "C", text: "even-handed, recognizing that both approaches offer valuable insights alongside limitations" },
      { letter: "D", text: "confused about the substantive differences between the positions" },
      { letter: "E", text: "hostile toward scholars who advocate for expanded definitions" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents both positions fairly and concludes that 'Both approaches offer valuable insights while also presenting limitations.' This balanced statement indicates an even-handed attitude.",
    wrongAnswerExplanations: {
      "A": "The author doesn't commit to either narrow or broad definitions.",
      "B": "The author treats both positions as offering 'valuable insights,' not as unproductive.",
      "D": "The author explains the differences clearly, showing understanding rather than confusion.",
      "E": "The author presents expanded definitions and their critics neutrally, without hostility."
    },
    difficulty: "medium",
    passageId: "rc-exp32-p4",
  },
  {
    id: "rc-exp32-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the position of critics who argue that expanded definitions have made the diaspora concept analytically useless?",
    answerChoices: [
      { letter: "A", text: "Studies using broad diaspora definitions have identified important patterns shared across diverse migrant communities." },
      { letter: "B", text: "Research attempting to apply the diaspora framework to temporary migrant workers has failed to yield meaningful distinctions from studies of non-migrant populations." },
      { letter: "C", text: "Digital technologies have enabled diasporic communities to maintain stronger homeland connections than ever before." },
      { letter: "D", text: "The Armenian diaspora shares significant characteristics with the Jewish diaspora experience." },
      { letter: "E", text: "Scholars have developed increasingly sophisticated methods for studying transnational communities." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue that if 'virtually any migrant community can be labeled a diaspora...the term loses its capacity to distinguish among qualitatively different forms of mobility.' If applying the diaspora label to temporary workers yields no meaningful distinctions, this directly supports their criticism that the concept has become analytically useless.",
    wrongAnswerExplanations: {
      "A": "This would weaken the critics' position by showing broad definitions do yield useful analysis.",
      "C": "This supports the existence of meaningful diasporic phenomena, not the critics' position.",
      "D": "This supports extending diaspora analysis to groups with similar experiences, not the critics' argument.",
      "E": "This doesn't directly address whether the diaspora concept specifically has become analytically useless."
    },
    difficulty: "hard",
    passageId: "rc-exp32-p4",
  },
];

// Export all RC questions from Set 32
export const rcQuestionsExpSet32: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet32 = {
  passage1: { id: "rc-exp32-p1", content: passage1, topic: "law" as const, title: "International Human Rights Law" },
  passage2: { id: "rc-exp32-p2", content: passage2, topic: "natural-sciences" as const, title: "Photosynthesis Mechanisms" },
  passage3: { id: "rc-exp32-p3", content: passage3, topic: "humanities" as const, title: "Expressionism in German Cinema" },
  passage4: { id: "rc-exp32-p4", content: passage4, topic: "social-sciences" as const, title: "Migration Patterns and Diaspora" },
};
