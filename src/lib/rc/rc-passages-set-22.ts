// Reading Comprehension Expansion Set 22
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - STANDING DOCTRINE IN CONSTITUTIONAL LITIGATION
// ============================================

const passage1 = `The doctrine of standing occupies a peculiar position in American constitutional law: it determines who may invoke the power of federal courts, yet its contours remain persistently uncertain. Standing doctrine requires that plaintiffs demonstrate injury-in-fact, causation, and redressability before federal courts will adjudicate their claims. These requirements, ostensibly derived from Article III's limitation of judicial power to "cases" and "controversies," serve to ensure that courts resolve concrete disputes rather than issue advisory opinions on abstract legal questions.

The injury-in-fact requirement demands that plaintiffs show they have suffered or will imminently suffer a concrete and particularized harm. This element has proven especially contentious in cases involving procedural rights and widely shared injuries. When Congress creates statutory rights—such as the right to receive accurate information from credit reporting agencies—courts have struggled to determine whether mere procedural violations constitute sufficient injury. The Supreme Court's 2016 decision in Spokeo v. Robins held that plaintiffs must demonstrate concrete harm beyond bare procedural violations, but the decision provided limited guidance on what concreteness requires.

Causation and redressability present their own complexities. Plaintiffs must show that their injury is "fairly traceable" to the defendant's conduct and that a favorable court decision would likely remedy the harm. In environmental and public health litigation, these elements often prove difficult to establish because harms may result from multiple sources and regulatory relief operates through complex causal chains. A plaintiff challenging inadequate pollution controls, for instance, may struggle to demonstrate that the specific defendant's emissions caused their particular respiratory condition.

Critics argue that standing doctrine has become an instrument for federal courts to avoid deciding difficult constitutional questions. By finding that plaintiffs lack standing, courts can dismiss cases without reaching the merits, thereby avoiding controversial rulings that might generate political backlash. This judicial avoidance, critics contend, ill-serves litigants with genuine grievances and undermines the rule of law by leaving constitutional violations unremedied. Supporters respond that standing limitations appropriately confine courts to their proper constitutional role, preventing judges from becoming roving commissioners of good government.

The debate intensifies in cases challenging government surveillance, executive policies, and administrative regulations where identifying particularized injury proves especially challenging. When government programs operate in secret or affect millions uniformly, traditional standing requirements may effectively insulate them from judicial review. Whether this outcome reflects principled constitutional interpretation or improper judicial abdication remains one of standing doctrine's enduring controversies.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp22-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Standing doctrine consists of three clear requirements that courts apply consistently across all types of litigation." },
      { letter: "B", text: "Standing doctrine, which determines access to federal courts, contains persistently uncertain requirements that generate ongoing controversy about whether it appropriately limits judicial power or improperly shields government actions from review." },
      { letter: "C", text: "The Supreme Court's decision in Spokeo v. Robins definitively resolved all questions about what constitutes concrete injury under standing doctrine." },
      { letter: "D", text: "Federal courts should eliminate standing requirements entirely to ensure that all constitutional violations receive judicial remedy." },
      { letter: "E", text: "Environmental litigation has been the primary context in which standing doctrine has developed and been refined." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces standing doctrine's requirements, explores uncertainties in each element, and presents the debate between critics who see it as judicial avoidance and supporters who view it as appropriate constitutional limitation. Answer B captures this comprehensive treatment of doctrine, uncertainty, and controversy.",
    wrongAnswerExplanations: {
      "A": "The passage emphasizes that standing requirements are persistently uncertain and contentious, not clear and consistent.",
      "C": "The passage states that Spokeo 'provided limited guidance on what concreteness requires,' not that it resolved questions.",
      "D": "The passage presents this as one critical view but does not advocate for eliminating standing requirements.",
      "E": "Environmental litigation is mentioned as one context but the passage addresses standing across multiple areas including surveillance and administrative regulations."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p1",
  },
  {
    id: "rc-exp22-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the three requirements of standing doctrine are",
    answerChoices: [
      { letter: "A", text: "mootness, ripeness, and political question" },
      { letter: "B", text: "statutory authority, constitutional mandate, and judicial precedent" },
      { letter: "C", text: "injury-in-fact, causation, and redressability" },
      { letter: "D", text: "jurisdictional amount, diversity of citizenship, and federal question" },
      { letter: "E", text: "notice, opportunity to be heard, and impartial tribunal" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states in the first paragraph that 'Standing doctrine requires that plaintiffs demonstrate injury-in-fact, causation, and redressability before federal courts will adjudicate their claims.'",
    wrongAnswerExplanations: {
      "A": "These are other justiciability doctrines, not the elements of standing.",
      "B": "These are not the standing requirements identified in the passage.",
      "D": "These relate to subject matter jurisdiction, not standing.",
      "E": "These relate to procedural due process, not standing."
    },
    difficulty: "easy",
    passageId: "rc-exp22-p1",
  },
  {
    id: "rc-exp22-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of standing doctrine would most likely agree that",
    answerChoices: [
      { letter: "A", text: "courts should never exercise restraint in deciding controversial cases" },
      { letter: "B", text: "strict standing requirements may allow unconstitutional government conduct to continue unchallenged" },
      { letter: "C", text: "Article III's case-or-controversy requirement should be repealed" },
      { letter: "D", text: "plaintiffs should not be required to show any connection to the challenged conduct" },
      { letter: "E", text: "the Supreme Court has always applied standing doctrine correctly" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics argue standing doctrine allows courts to avoid 'controversial rulings' and 'ill-serves litigants with genuine grievances and undermines the rule of law by leaving constitutional violations unremedied.' This implies that unconstitutional conduct escapes judicial review.",
    wrongAnswerExplanations: {
      "A": "Critics argue courts use standing to avoid deciding cases, not that courts should never show restraint.",
      "C": "The passage does not suggest critics want to repeal constitutional provisions.",
      "D": "This overstates the critics' position; they object to overly strict application, not all requirements.",
      "E": "Critics would disagree that the Court has applied standing correctly."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p1",
  },
  {
    id: "rc-exp22-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the example of a plaintiff challenging inadequate pollution controls primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that environmental regulations are always unconstitutional" },
      { letter: "B", text: "illustrate the difficulties of establishing causation when harms have multiple potential sources" },
      { letter: "C", text: "demonstrate that standing requirements are easily satisfied in environmental cases" },
      { letter: "D", text: "criticize the Supreme Court's reasoning in Spokeo v. Robins" },
      { letter: "E", text: "explain why federal courts have original jurisdiction over pollution claims" },
    ],
    correctAnswer: "B",
    explanation: "The pollution example appears in the paragraph discussing causation and redressability, specifically to show how 'these elements often prove difficult to establish because harms may result from multiple sources.' The plaintiff struggles to 'demonstrate that the specific defendant's emissions caused their particular respiratory condition.'",
    wrongAnswerExplanations: {
      "A": "The passage makes no claim about the constitutionality of environmental regulations.",
      "C": "The example demonstrates the opposite—that standing is difficult to establish in such cases.",
      "D": "The pollution example is separate from the Spokeo discussion and does not address that decision.",
      "E": "The passage does not discuss original jurisdiction."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p1",
  },
  {
    id: "rc-exp22-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate over standing doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of all participants in the debate" },
      { letter: "B", text: "strongly supportive of eliminating standing requirements" },
      { letter: "C", text: "analytically neutral, presenting competing perspectives without advocating for either side" },
      { letter: "D", text: "certain that supporters of strict standing have the better argument" },
      { letter: "E", text: "confused about the basic issues in the debate" },
    ],
    correctAnswer: "C",
    explanation: "The author presents critics' arguments about judicial avoidance and supporters' responses about appropriate constitutional limits, concluding that 'Whether this outcome reflects principled constitutional interpretation or improper judicial abdication remains one of standing doctrine's enduring controversies.' This framing presents both sides without taking a position.",
    wrongAnswerExplanations: {
      "A": "The author treats the arguments seriously rather than dismissing them.",
      "B": "The author does not advocate for eliminating standing requirements.",
      "D": "The author presents both sides as having legitimate arguments.",
      "E": "The author demonstrates clear understanding of the debate."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p1",
  },
  {
    id: "rc-exp22-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument as presented in the passage?",
    answerChoices: [
      { letter: "A", text: "Most plaintiffs who are denied standing have not actually suffered any harm from government conduct." },
      { letter: "B", text: "Statistical analysis reveals that courts are significantly more likely to find standing lacking in cases involving challenges to popular government programs." },
      { letter: "C", text: "The founders of the Constitution intended Article III to impose meaningful limits on judicial power." },
      { letter: "D", text: "Federal courts have adequate resources to decide all cases brought before them." },
      { letter: "E", text: "Standing requirements have remained unchanged since the founding of the republic." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue that standing doctrine serves as 'an instrument for federal courts to avoid deciding difficult constitutional questions' and to avoid 'controversial rulings that might generate political backlash.' Evidence that courts more often deny standing when programs are popular would directly support the claim that courts use standing to avoid politically unpopular decisions.",
    wrongAnswerExplanations: {
      "A": "This would undermine rather than strengthen the critics' argument by suggesting standing denials are appropriate.",
      "C": "This supports the defenders' position about proper constitutional limits, not the critics' argument.",
      "D": "This is irrelevant to whether courts use standing to avoid controversial decisions.",
      "E": "This historical claim does not address whether standing is currently used to avoid controversy."
    },
    difficulty: "hard",
    passageId: "rc-exp22-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - PRION DISEASES AND PROTEIN FOLDING
// ============================================

const passage2 = `Prion diseases challenge fundamental assumptions about infectious agents and biological information. Unlike bacteria, viruses, and parasites, prions contain no nucleic acids—no DNA or RNA to encode instructions for their replication. Instead, prions consist solely of misfolded versions of a normal cellular protein called PrP. The infectious prion, designated PrPSc, propagates by inducing correctly folded PrPC proteins to adopt the pathological conformation. This mechanism of replication through conformational change rather than genetic instruction represents a radical departure from the central dogma of molecular biology.

The normal prion protein PrPC is expressed in many tissues, particularly in neurons of the brain and spinal cord. Despite decades of research, its precise function remains unclear, though proposed roles include copper metabolism, cell signaling, and protection against oxidative stress. When PrPC misfolds into the PrPSc form, it becomes highly resistant to degradation and accumulates in neural tissue. This accumulation causes progressive neurodegeneration characterized by the spongiform appearance of affected brain tissue—hence the designation "transmissible spongiform encephalopathies" for this disease family.

The protein-only hypothesis of prion propagation, first proposed by Stanley Prusiner in 1982, initially met intense skepticism. The prevailing view held that all infectious agents must contain nucleic acids to encode their replication. Prusiner's experiments demonstrated that treatments destroying nucleic acids did not eliminate infectivity, while treatments denaturing proteins did. The award of the 1997 Nobel Prize in Medicine to Prusiner marked scientific acceptance of the protein-only model, though some researchers continued to question whether small amounts of nucleic acid might accompany PrPSc.

Understanding prion replication has illuminated broader questions about protein folding and misfolding. Proteins must fold into precise three-dimensional structures to function properly, and this folding is determined by amino acid sequence. Yet prion propagation demonstrates that proteins with identical sequences can adopt distinct stable conformations—and that one conformation can serve as a template for converting another. This template-directed refolding has implications beyond prion diseases, as similar mechanisms appear to operate in other neurodegenerative conditions including Alzheimer's and Parkinson's diseases, where misfolded proteins spread through neural tissue in prion-like fashion.

Prion diseases remain invariably fatal with no effective treatments. Bovine spongiform encephalopathy ("mad cow disease") and its human counterpart variant Creutzfeldt-Jakob disease demonstrated that prions can cross species barriers, raising public health concerns about food safety and blood supply contamination. Current research focuses on developing compounds that stabilize normal PrPC conformation or block the conversion process, though the blood-brain barrier and the lack of immune response to prions—which are after all, misfolded versions of the body's own proteins—present formidable therapeutic obstacles.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp22-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Stanley Prusiner deserved the Nobel Prize for his work on prions despite continued scientific skepticism." },
      { letter: "B", text: "Prion diseases, caused by misfolded proteins that replicate without nucleic acids, challenge traditional understanding of infectious agents and have implications for understanding other neurodegenerative conditions." },
      { letter: "C", text: "All neurodegenerative diseases are caused by prions and will eventually be curable using the same treatments." },
      { letter: "D", text: "The function of the normal prion protein has been definitively established through recent research." },
      { letter: "E", text: "Mad cow disease is the only prion disease that poses a significant public health threat." },
    ],
    correctAnswer: "B",
    explanation: "The passage explains prions as infectious misfolded proteins lacking nucleic acids, describes their challenge to the central dogma of molecular biology, discusses acceptance of the protein-only hypothesis, and connects prion mechanisms to other neurodegenerative diseases. Answer B captures this comprehensive treatment.",
    wrongAnswerExplanations: {
      "A": "While Prusiner's Nobel is mentioned, the passage's focus is broader than evaluating whether he deserved it.",
      "C": "The passage says other diseases spread in 'prion-like fashion,' not that they are all caused by prions or will be curable.",
      "D": "The passage states that PrPC's 'precise function remains unclear.'",
      "E": "The passage mentions mad cow disease as one example but does not claim it is the only significant threat."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p2",
  },
  {
    id: "rc-exp22-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, prions differ from other infectious agents in that prions",
    answerChoices: [
      { letter: "A", text: "contain multiple types of nucleic acids" },
      { letter: "B", text: "cannot cross species barriers" },
      { letter: "C", text: "contain no nucleic acids and replicate through conformational change" },
      { letter: "D", text: "are easily destroyed by standard sterilization procedures" },
      { letter: "E", text: "trigger strong immune responses that eventually eliminate the infection" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states in the first paragraph that 'Unlike bacteria, viruses, and parasites, prions contain no nucleic acids' and that PrPSc 'propagates by inducing correctly folded PrPC proteins to adopt the pathological conformation.'",
    wrongAnswerExplanations: {
      "A": "The passage states prions contain NO nucleic acids.",
      "B": "The passage states that prions 'can cross species barriers.'",
      "D": "The passage states PrPSc becomes 'highly resistant to degradation.'",
      "E": "The passage cites 'the lack of immune response to prions' as a therapeutic obstacle."
    },
    difficulty: "easy",
    passageId: "rc-exp22-p2",
  },
  {
    id: "rc-exp22-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the initial skepticism toward Prusiner's protein-only hypothesis was most likely due to",
    answerChoices: [
      { letter: "A", text: "Prusiner's experiments were poorly designed and produced unreliable results" },
      { letter: "B", text: "the hypothesis contradicted the established scientific belief that infectious agents must contain nucleic acids" },
      { letter: "C", text: "other scientists had already proposed identical theories decades earlier" },
      { letter: "D", text: "prion diseases were not considered medically significant at the time" },
      { letter: "E", text: "Prusiner refused to publish his experimental data" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'The prevailing view held that all infectious agents must contain nucleic acids to encode their replication.' Prusiner's hypothesis that prions could replicate without nucleic acids directly challenged this dogma, which explains the 'intense skepticism.'",
    wrongAnswerExplanations: {
      "A": "The passage indicates Prusiner's experiments were convincing—nucleic acid destruction didn't eliminate infectivity while protein denaturation did.",
      "C": "The passage presents Prusiner as the first to propose the protein-only hypothesis in 1982.",
      "D": "The passage does not suggest prion diseases were considered insignificant.",
      "E": "The passage does not mention Prusiner withholding data."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p2",
  },
  {
    id: "rc-exp22-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses Alzheimer's and Parkinson's diseases primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these diseases are actually caused by prions" },
      { letter: "B", text: "suggest that prion research has implications for understanding mechanisms in other neurodegenerative conditions" },
      { letter: "C", text: "demonstrate that prion diseases are less serious than other brain disorders" },
      { letter: "D", text: "explain why Stanley Prusiner received the Nobel Prize" },
      { letter: "E", text: "criticize researchers who study these diseases instead of prion diseases" },
    ],
    correctAnswer: "B",
    explanation: "These diseases are mentioned in the context of prion research illuminating 'broader questions about protein folding and misfolding' and the observation that 'similar mechanisms appear to operate in other neurodegenerative conditions... where misfolded proteins spread through neural tissue in prion-like fashion.'",
    wrongAnswerExplanations: {
      "A": "The passage says these diseases spread in 'prion-like fashion,' not that they are caused by prions.",
      "C": "The passage makes no comparison of disease severity.",
      "D": "The Nobel Prize discussion occurs before the mention of these diseases and is not connected.",
      "E": "The passage contains no criticism of researchers in other fields."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p2",
  },
  {
    id: "rc-exp22-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's tone when discussing the therapeutic challenges of treating prion diseases can best be described as",
    answerChoices: [
      { letter: "A", text: "optimistic that cures will soon be available" },
      { letter: "B", text: "indifferent to the suffering of patients" },
      { letter: "C", text: "soberly realistic about the significant obstacles facing current research" },
      { letter: "D", text: "dismissive of the value of continued research efforts" },
      { letter: "E", text: "certain that treatment is impossible and research should be abandoned" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that prion diseases 'remain invariably fatal with no effective treatments' and identifies 'formidable therapeutic obstacles' including the blood-brain barrier and lack of immune response, while also noting ongoing research directions. This represents a sober, realistic assessment.",
    wrongAnswerExplanations: {
      "A": "The author emphasizes 'formidable obstacles' rather than imminent success.",
      "B": "The passage treats the topic seriously as a significant medical challenge.",
      "D": "The author describes current research focuses, suggesting value in continued work.",
      "E": "The passage describes ongoing research, not abandonment."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p2",
  },
  {
    id: "rc-exp22-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following would be most analogous to prion replication?",
    answerChoices: [
      { letter: "A", text: "A virus injecting its genetic material into a host cell to produce copies of itself" },
      { letter: "B", text: "A bacterium dividing by binary fission to create two daughter cells" },
      { letter: "C", text: "A crystal growing by causing dissolved molecules to adopt its lattice structure at the crystal surface" },
      { letter: "D", text: "A parasite consuming nutrients from its host to fuel its metabolism" },
      { letter: "E", text: "An enzyme catalyzing a chemical reaction without being consumed" },
    ],
    correctAnswer: "C",
    explanation: "Prion replication works through 'template-directed refolding' where PrPSc induces 'correctly folded PrPC proteins to adopt the pathological conformation.' This is most analogous to crystal growth, where existing crystal structure serves as a template that causes dissolved molecules to adopt the same organized arrangement.",
    wrongAnswerExplanations: {
      "A": "Viral replication requires genetic material (nucleic acids), which prions lack.",
      "B": "Bacterial division involves DNA replication and cell division, not conformational change.",
      "D": "Nutrient consumption is a metabolic process, not template-directed structural change.",
      "E": "Enzymatic catalysis accelerates reactions without the enzyme changing; prions cause structural conversion of other proteins."
    },
    difficulty: "hard",
    passageId: "rc-exp22-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - CUBISM AND MULTIPLE PERSPECTIVES
// ============================================

const passage3 = `Cubism, developed by Pablo Picasso and Georges Braque between 1907 and 1914, constituted perhaps the most revolutionary transformation in Western art since the Renaissance. The movement fundamentally challenged the single-point perspective that had dominated European painting for five centuries. Rather than depicting objects from a fixed viewpoint, Cubist paintings presented multiple perspectives simultaneously, fragmenting forms into geometric facets that revealed different angles of a subject within a single composition. This radical reimagining of pictorial space reflected broader early twentieth-century challenges to traditional certainties.

The development of Cubism proceeded through distinct phases. The initial "Analytic Cubism" of 1909-1912 emphasized the deconstruction of form, reducing subjects to interlocking planes rendered in a restricted palette of browns, grays, and ochres. Picasso's "Portrait of Daniel-Henry Kahnweiler" exemplifies this approach: the art dealer's figure dissolves into a grid of overlapping facets, barely recognizable yet somehow capturing essence through fragmentation. Critics initially found such works incomprehensible, accusing the artists of producing mere "cubes"—an insult that inadvertently named the movement.

"Synthetic Cubism," emerging around 1912, reversed the analytic process by building up compositions from flat, colored shapes and introducing collage elements including newspaper, wallpaper, and other materials. This phase represented not merely technical innovation but philosophical assertion: by incorporating "real" objects into paintings, artists questioned the boundary between representation and reality. Juan Gris, who joined Picasso and Braque in developing Synthetic Cubism, brought mathematical precision to the style, creating compositions of crystalline clarity that contrasted with the earlier phase's shadowy complexities.

The philosophical implications of Cubism extended beyond formal innovation. By presenting multiple perspectives simultaneously, Cubism suggested that no single viewpoint could capture reality completely—a proposition resonant with Einstein's contemporaneous theories of relativity and the emerging understanding that observation necessarily involves perspective. Some critics have argued that Cubism reflects the modernist crisis of representation: the recognition that traditional modes of depicting reality had become inadequate to capture modern experience characterized by fragmentation, simultaneity, and the breakdown of stable meanings.

Cubism's influence pervaded twentieth-century art and design. Abstract art, Futurism, Constructivism, and Art Deco all drew on Cubist innovations. The movement demonstrated that painting need not serve as a window onto an illusionistic world but could instead present autonomous formal constructions. Yet the relationship between Cubist works and visual reality remained complex: however abstracted, most Cubist paintings retained recognizable subjects—figures, still lifes, landscapes—suggesting that the artists sought not to abandon representation but to reveal previously invisible aspects of visible things.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp22-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Pablo Picasso was the sole inventor of Cubism and deserves all credit for its innovations." },
      { letter: "B", text: "Cubism represented a revolutionary departure from Renaissance perspective, evolving through distinct phases while challenging traditional representation and influencing subsequent art movements." },
      { letter: "C", text: "Synthetic Cubism was superior to Analytic Cubism because it incorporated real objects into paintings." },
      { letter: "D", text: "Cubism was primarily a mathematical style that aimed to reduce all visual experience to geometric formulas." },
      { letter: "E", text: "The term 'Cubism' was enthusiastically chosen by artists to describe their new style." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Cubism's revolutionary challenge to Renaissance perspective, traces its development through Analytic and Synthetic phases, explores its philosophical implications regarding representation, and discusses its influence on subsequent movements. Answer B captures this comprehensive treatment.",
    wrongAnswerExplanations: {
      "A": "The passage credits both Picasso and Braque as developing Cubism together, and mentions Juan Gris's contributions.",
      "C": "The passage describes both phases without claiming one was superior to the other.",
      "D": "While the passage mentions geometric facets, it presents Cubism as addressing perspective and representation, not reducing experience to formulas.",
      "E": "The passage states that 'cubes' was 'an insult that inadvertently named the movement.'"
    },
    difficulty: "medium",
    passageId: "rc-exp22-p3",
  },
  {
    id: "rc-exp22-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Synthetic Cubism differed from Analytic Cubism in that Synthetic Cubism",
    answerChoices: [
      { letter: "A", text: "was developed entirely by Juan Gris without input from Picasso or Braque" },
      { letter: "B", text: "built up compositions from colored shapes and incorporated collage elements" },
      { letter: "C", text: "used only browns, grays, and ochres in a restricted palette" },
      { letter: "D", text: "focused exclusively on deconstructing form into interlocking planes" },
      { letter: "E", text: "rejected all connection to visible reality" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Synthetic Cubism 'reversed the analytic process by building up compositions from flat, colored shapes and introducing collage elements including newspaper, wallpaper, and other materials.'",
    wrongAnswerExplanations: {
      "A": "The passage states Gris 'joined Picasso and Braque in developing Synthetic Cubism.'",
      "C": "The restricted palette of browns, grays, and ochres characterized Analytic Cubism, not Synthetic.",
      "D": "Deconstruction into interlocking planes describes Analytic Cubism; Synthetic Cubism 'reversed' this process.",
      "E": "The passage notes that 'most Cubist paintings retained recognizable subjects.'"
    },
    difficulty: "easy",
    passageId: "rc-exp22-p3",
  },
  {
    id: "rc-exp22-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the philosophical significance of presenting multiple perspectives simultaneously was that it",
    answerChoices: [
      { letter: "A", text: "proved that Einstein's theories of relativity were incorrect" },
      { letter: "B", text: "suggested that reality could not be fully captured from any single viewpoint" },
      { letter: "C", text: "demonstrated that traditional painting techniques were technically superior" },
      { letter: "D", text: "confirmed that abstract art could have no connection to visible reality" },
      { letter: "E", text: "showed that mathematical precision was unnecessary in visual art" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'By presenting multiple perspectives simultaneously, Cubism suggested that no single viewpoint could capture reality completely—a proposition resonant with Einstein's contemporaneous theories of relativity.'",
    wrongAnswerExplanations: {
      "A": "The passage presents Cubism as 'resonant with' Einstein's theories, not contradicting them.",
      "C": "The passage presents Cubism as revolutionary, challenging traditional techniques as inadequate.",
      "D": "The passage notes Cubist paintings 'retained recognizable subjects.'",
      "E": "Juan Gris brought 'mathematical precision' to Cubism, so the movement didn't reject such precision."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p3",
  },
  {
    id: "rc-exp22-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Picasso's 'Portrait of Daniel-Henry Kahnweiler' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Picasso was a better portrait painter than Braque" },
      { letter: "B", text: "provide a concrete example of how Analytic Cubism fragmented form while still capturing essence" },
      { letter: "C", text: "demonstrate that Synthetic Cubism was more accessible to viewers than Analytic Cubism" },
      { letter: "D", text: "criticize Kahnweiler for his role in promoting modern art" },
      { letter: "E", text: "explain why critics gave the movement the name 'Cubism'" },
    ],
    correctAnswer: "B",
    explanation: "The portrait is introduced in the paragraph discussing Analytic Cubism's 'deconstruction of form' as an exemplification of how 'the art dealer's figure dissolves into a grid of overlapping facets, barely recognizable yet somehow capturing essence through fragmentation.'",
    wrongAnswerExplanations: {
      "A": "The passage makes no comparison of Picasso's and Braque's portrait skills.",
      "C": "The portrait exemplifies Analytic, not Synthetic, Cubism and is not used to compare accessibility.",
      "D": "The passage mentions Kahnweiler only as the portrait's subject, not as a target of criticism.",
      "E": "The naming of Cubism is discussed separately; the portrait illustrates the technique, not the naming."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p3",
  },
  {
    id: "rc-exp22-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the author regards Cubism's relationship to visual reality as",
    answerChoices: [
      { letter: "A", text: "completely severed, with Cubist works having no connection to visible things" },
      { letter: "B", text: "simple and straightforward, with Cubist works serving as realistic depictions" },
      { letter: "C", text: "complex and nuanced, with Cubist works retaining recognizable subjects while revealing new aspects" },
      { letter: "D", text: "irrelevant to understanding the movement's significance" },
      { letter: "E", text: "a failure that prevented Cubism from achieving its artistic goals" },
    ],
    correctAnswer: "C",
    explanation: "The final paragraph states that 'the relationship between Cubist works and visual reality remained complex: however abstracted, most Cubist paintings retained recognizable subjects... suggesting that the artists sought not to abandon representation but to reveal previously invisible aspects of visible things.'",
    wrongAnswerExplanations: {
      "A": "The author notes Cubist works 'retained recognizable subjects,' maintaining connection to reality.",
      "B": "The author describes Cubist works as 'abstracted' and 'fragmented,' not realistic.",
      "D": "The author devotes significant attention to this relationship, indicating its relevance.",
      "E": "The author presents Cubism as successful in achieving its aims of revealing new aspects."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p3",
  },
  {
    id: "rc-exp22-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A movement is introduced, its developmental phases are traced, its philosophical implications are explored, and its legacy is assessed." },
      { letter: "B", text: "Two artists are compared, their rivalry is documented, and one is declared the winner." },
      { letter: "C", text: "A problem is identified, several failed solutions are evaluated, and a successful solution is proposed." },
      { letter: "D", text: "A historical period is described, its key events are listed chronologically, and its end is explained." },
      { letter: "E", text: "A scientific theory is stated, experiments testing it are described, and the theory is confirmed." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces Cubism (paragraph 1), traces its phases from Analytic to Synthetic Cubism (paragraphs 2-3), explores philosophical implications about perspective and representation (paragraph 4), and discusses its influence on subsequent movements (paragraph 5).",
    wrongAnswerExplanations: {
      "B": "The passage discusses Picasso and Braque as collaborators, not rivals, and does not declare a winner.",
      "C": "The passage does not present Cubism as a solution to a problem or evaluate failed solutions.",
      "D": "While the passage includes historical elements, it is organized around the movement's development and significance, not as a chronological history of a period.",
      "E": "The passage concerns art, not scientific theory and experimentation."
    },
    difficulty: "hard",
    passageId: "rc-exp22-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - TRUST AND INSTITUTIONAL LEGITIMACY
// ============================================

const passage4 = `Trust serves as the invisible infrastructure of social order. Without trust—in institutions, in other citizens, in the reliability of shared norms—collective action becomes difficult and social cooperation breaks down. Political scientists and sociologists have increasingly focused on declining trust as both symptom and cause of democratic dysfunction. Survey data consistently show falling public confidence in governmental institutions, media organizations, and expert authorities across most established democracies, a trend that accelerated markedly following the 2008 financial crisis and subsequent political upheavals.

Institutional legitimacy, a related but distinct concept, refers to the widespread belief that an institution has the right to make binding decisions. Legitimacy differs from trust in that one might trust an institution to act competently while questioning its right to act at all, or conversely, accept an institution's authority while doubting its competence. Democratic legitimacy traditionally derived from electoral authorization and procedural regularity: institutions were legitimate because they resulted from fair processes and remained accountable to citizens. This procedural conception has come under strain as citizens increasingly evaluate institutions by their outputs rather than their procedures.

Several interrelated factors drive declining institutional trust. Perceived corruption and self-dealing by elites generate cynicism about whether institutions serve public interests or merely benefit insiders. Growing economic inequality raises questions about whether political systems respond to ordinary citizens or only to wealthy donors. The fragmentation of media environments enables the spread of misinformation while undermining shared factual foundations for public debate. Political polarization transforms institutional assessment into partisan calculation: the same institution may be trusted or distrusted depending on which party controls it.

Scholars debate whether declining trust reflects accurate assessment of institutional failure or distorted perceptions divorced from institutional performance. Some evidence suggests that institutional performance—measured by indicators like economic growth, government effectiveness, and corruption levels—has not deteriorated as dramatically as trust has declined, implying that perceptual factors may be driving the trend. Other researchers counter that traditional metrics fail to capture dimensions of institutional failure that citizens experience directly, such as unresponsive bureaucracies and concentrated economic power.

The consequences of declining trust extend beyond polling data to observable political behavior. Low-trust environments correlate with support for populist movements that promise to replace distrusted elites, decreased civic participation among some demographics, and reduced willingness to comply with public health directives or other government requests requiring voluntary cooperation. Rebuilding institutional trust likely requires both substantive reforms addressing legitimate grievances and communicative strategies that demonstrate institutional responsiveness. Neither alone appears sufficient, and the path forward remains contested among scholars and practitioners alike.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp22-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "definitively prove that declining trust results from objective institutional failures" },
      { letter: "B", text: "examine declining institutional trust, its relationship to legitimacy, its causes, debates about its sources, and its consequences" },
      { letter: "C", text: "argue that populist movements are the primary cause of declining institutional trust" },
      { letter: "D", text: "compare trust levels in democratic and authoritarian political systems" },
      { letter: "E", text: "propose specific policy reforms that would immediately restore public trust in institutions" },
    ],
    correctAnswer: "B",
    explanation: "The passage defines trust and legitimacy, examines factors driving declining trust, presents scholarly debate about whether declining trust reflects real failure or distorted perceptions, and discusses consequences. Answer B captures this comprehensive analytical treatment.",
    wrongAnswerExplanations: {
      "A": "The passage presents the debate about causes without definitively proving one position.",
      "C": "Populist movements are presented as a consequence of low trust, not its cause.",
      "D": "The passage focuses on democracies without comparing them to authoritarian systems.",
      "E": "The passage notes that 'the path forward remains contested' rather than proposing definitive reforms."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p4",
  },
  {
    id: "rc-exp22-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the distinction between trust and legitimacy is that",
    answerChoices: [
      { letter: "A", text: "trust concerns belief in competence while legitimacy concerns belief in the right to make binding decisions" },
      { letter: "B", text: "trust is measurable through surveys while legitimacy cannot be measured" },
      { letter: "C", text: "trust applies only to government institutions while legitimacy applies to private organizations" },
      { letter: "D", text: "trust has declined while legitimacy has increased in recent decades" },
      { letter: "E", text: "trust is a modern concept while legitimacy is an ancient one" },
    ],
    correctAnswer: "A",
    explanation: "The passage states that 'Legitimacy differs from trust in that one might trust an institution to act competently while questioning its right to act at all, or conversely, accept an institution's authority while doubting its competence.' This distinguishes competence (trust) from right to decide (legitimacy).",
    wrongAnswerExplanations: {
      "B": "The passage does not discuss measurement differences between trust and legitimacy.",
      "C": "The passage applies both concepts to governmental institutions without limiting their scope.",
      "D": "The passage discusses declining trust but does not state that legitimacy has increased.",
      "E": "The passage does not make historical claims about when these concepts originated."
    },
    difficulty: "easy",
    passageId: "rc-exp22-p4",
  },
  {
    id: "rc-exp22-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, researchers who argue that traditional metrics fail to capture citizen-experienced institutional failures would most likely agree that",
    answerChoices: [
      { letter: "A", text: "survey data on trust are completely unreliable and should be ignored" },
      { letter: "B", text: "declining trust may accurately reflect real problems not measured by conventional performance indicators" },
      { letter: "C", text: "citizens are incapable of accurately assessing institutional performance" },
      { letter: "D", text: "economic growth and corruption levels are the only relevant measures of institutional quality" },
      { letter: "E", text: "institutional performance has improved dramatically in recent decades" },
    ],
    correctAnswer: "B",
    explanation: "These researchers 'counter that traditional metrics fail to capture dimensions of institutional failure that citizens experience directly, such as unresponsive bureaucracies and concentrated economic power.' This implies citizens' declining trust reflects real but unmeasured problems.",
    wrongAnswerExplanations: {
      "A": "These researchers are responding to claims about perception versus reality, not dismissing survey data.",
      "C": "Their argument is that citizens DO accurately perceive problems that metrics miss.",
      "D": "Their point is that these traditional metrics are INSUFFICIENT, not that they are the only relevant measures.",
      "E": "Their argument is that performance has problems that traditional metrics fail to capture."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p4",
  },
  {
    id: "rc-exp22-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the 2008 financial crisis primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that financial deregulation caused declining institutional trust" },
      { letter: "B", text: "provide a temporal reference point for the acceleration of declining trust trends" },
      { letter: "C", text: "demonstrate that economic institutions are more trustworthy than political ones" },
      { letter: "D", text: "explain the technical causes of the financial meltdown" },
      { letter: "E", text: "criticize government responses to the economic downturn" },
    ],
    correctAnswer: "B",
    explanation: "The crisis is mentioned in the context of describing 'falling public confidence in governmental institutions,' noting 'a trend that accelerated markedly following the 2008 financial crisis and subsequent political upheavals.' It serves as a reference point for when trends accelerated.",
    wrongAnswerExplanations: {
      "A": "The passage does not discuss deregulation or make causal arguments about the crisis's origins.",
      "C": "The passage makes no comparison of trust levels between economic and political institutions.",
      "D": "The passage does not explain the technical causes of the financial crisis.",
      "E": "The passage does not evaluate government responses to the crisis."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p4",
  },
  {
    id: "rc-exp22-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the debate about whether declining trust reflects real institutional failures or distorted perceptions is best described as",
    answerChoices: [
      { letter: "A", text: "firmly committed to the view that institutions have not actually failed" },
      { letter: "B", text: "certain that perceptual distortions entirely explain declining trust" },
      { letter: "C", text: "balanced, presenting evidence and arguments for both positions without clearly endorsing either" },
      { letter: "D", text: "dismissive of both positions as irrelevant to practical concerns" },
      { letter: "E", text: "confused about the distinction between the two positions" },
    ],
    correctAnswer: "C",
    explanation: "The author presents 'Some evidence' for the view that perceptions diverge from performance, then notes 'Other researchers counter' with the opposing view about unmeasured failures. The passage presents both perspectives without declaring one correct.",
    wrongAnswerExplanations: {
      "A": "The author presents this as one view, not as the author's own commitment.",
      "B": "The author notes this view but also presents counter-arguments.",
      "D": "The author treats the debate as significant for understanding consequences and solutions.",
      "E": "The author clearly distinguishes the positions and presents evidence for each."
    },
    difficulty: "medium",
    passageId: "rc-exp22-p4",
  },
  {
    id: "rc-exp22-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the argument that declining trust primarily reflects distorted perceptions rather than real institutional failures?",
    answerChoices: [
      { letter: "A", text: "Survey respondents express trust levels that fluctuate based on recent media coverage rather than institutional performance." },
      { letter: "B", text: "Cross-national studies show that trust levels closely track objective measures of government responsiveness to citizen concerns." },
      { letter: "C", text: "Most citizens cannot accurately describe the functions of major governmental institutions." },
      { letter: "D", text: "Social media algorithms tend to amplify content expressing distrust of institutions." },
      { letter: "E", text: "Trust in institutions has declined more among politically engaged citizens than among disengaged ones." },
    ],
    correctAnswer: "B",
    explanation: "The distorted-perceptions argument claims trust has declined even though 'institutional performance... has not deteriorated as dramatically.' Evidence that trust closely tracks actual responsiveness would suggest trust reflects real performance, not distortion, thus weakening the perceptual-distortion argument.",
    wrongAnswerExplanations: {
      "A": "This would strengthen the distorted-perceptions argument by showing trust responds to media rather than reality.",
      "C": "This might support the view that perceptions are uninformed, strengthening the distortion argument.",
      "D": "This would strengthen the distorted-perceptions argument by identifying a mechanism for perceptual distortion.",
      "E": "This is ambiguous and does not directly address whether trust tracks actual performance."
    },
    difficulty: "hard",
    passageId: "rc-exp22-p4",
  },
];

// Export all RC questions from Set 22
export const rcQuestionsExpSet22: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet22 = {
  passage1: { id: "rc-exp22-p1", content: passage1, topic: "law" as const, title: "Standing Doctrine in Constitutional Litigation" },
  passage2: { id: "rc-exp22-p2", content: passage2, topic: "natural-sciences" as const, title: "Prion Diseases and Protein Folding" },
  passage3: { id: "rc-exp22-p3", content: passage3, topic: "humanities" as const, title: "Cubism and Multiple Perspectives" },
  passage4: { id: "rc-exp22-p4", content: passage4, topic: "social-sciences" as const, title: "Trust and Institutional Legitimacy" },
};
