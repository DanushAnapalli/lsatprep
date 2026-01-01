// Reading Comprehension Expansion Set 15
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - EQUAL PROTECTION AND AFFIRMATIVE ACTION
// ============================================

const passage1 = `The Equal Protection Clause of the Fourteenth Amendment, ratified in 1868, guarantees that no state shall "deny to any person within its jurisdiction the equal protection of the laws." Originally intended to protect newly freed slaves from discriminatory state legislation, this clause has become the primary constitutional basis for challenging government classifications based on race, gender, and other characteristics. The Supreme Court's interpretation of equal protection has evolved dramatically, generating some of the most contentious constitutional debates of the past half-century.

The Court applies different levels of scrutiny depending on the type of classification at issue. Racial classifications trigger "strict scrutiny," the most demanding standard, requiring that the classification serve a "compelling governmental interest" and be "narrowly tailored" to achieve that interest. Gender classifications receive "intermediate scrutiny," requiring an "important" governmental interest and a classification "substantially related" to that interest. Most other classifications need only satisfy "rational basis" review, which demands merely a "legitimate" interest and a "rational" connection between classification and interest.

Affirmative action programs—policies designed to increase representation of historically disadvantaged groups in education and employment—have produced the Court's most fractured equal protection jurisprudence. In Regents of the University of California v. Bakke (1978), Justice Powell's controlling opinion held that universities could consider race as one factor among many in admissions to achieve educational diversity, but could not use rigid quotas. This framework persisted through Grutter v. Bollinger (2003), where the Court upheld the University of Michigan Law School's holistic review process while striking down the undergraduate program's point system in the companion Gratz case.

The constitutional landscape shifted dramatically in Students for Fair Admissions v. Harvard (2023), where the Court effectively ended race-conscious admissions at selective universities. The majority held that Harvard's and the University of North Carolina's admissions programs failed strict scrutiny because their diversity goals were insufficiently measurable and their use of race lacked a logical endpoint. The decision drew sharp dissents arguing that it departed from precedent, ignored the persistence of racial inequality, and would resegregate elite institutions that had become more diverse through race-conscious policies.

Critics and supporters of the decision disagree about what equal protection fundamentally requires. Critics argue that the clause permits race-conscious remedies for the legacy of state-sponsored discrimination and that formal colorblindness perpetuates substantive inequality. Supporters contend that the Constitution demands individual treatment regardless of race and that any racial classification, however well-intentioned, violates the principle that government must treat citizens as individuals rather than members of racial groups. This debate reflects deeper disagreements about whether equality means identical treatment or requires considering historical context and present disparities.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp15-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Equal Protection Clause was intended solely to protect freed slaves and should not apply to contemporary affirmative action debates." },
      { letter: "B", text: "Affirmative action programs are unconstitutional under any interpretation of the Equal Protection Clause." },
      { letter: "C", text: "The Supreme Court's interpretation of equal protection has evolved significantly, with affirmative action producing particularly contentious jurisprudence that reflects fundamental disagreements about what equality requires." },
      { letter: "D", text: "The 2023 Students for Fair Admissions decision definitively resolved all debates about the meaning of equal protection." },
      { letter: "E", text: "Strict scrutiny, intermediate scrutiny, and rational basis review are the only important concepts in constitutional law." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the evolution of equal protection jurisprudence, examines the development of affirmative action cases from Bakke through Students for Fair Admissions, and concludes by presenting competing views about what equal protection fundamentally requires. Answer C accurately captures this comprehensive treatment of how the doctrine has evolved and the persistent disagreements it generates.",
    wrongAnswerExplanations: {
      "A": "This contradicts the passage, which explains that the clause's interpretation has expanded well beyond its original purpose.",
      "B": "This is too absolute; the passage shows that the Court permitted certain affirmative action programs for decades before the 2023 ruling.",
      "D": "The passage's final paragraph explicitly shows ongoing disagreement about equal protection's meaning.",
      "E": "While these standards are discussed, they are not presented as the main point; rather, they are tools for analyzing the broader affirmative action debate."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p1",
  },
  {
    id: "rc-exp15-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Justice Powell's opinion in Bakke held that universities",
    answerChoices: [
      { letter: "A", text: "must use rigid quotas to ensure racial diversity in admissions" },
      { letter: "B", text: "could consider race as one factor among many but could not use rigid quotas" },
      { letter: "C", text: "were prohibited from considering race under any circumstances" },
      { letter: "D", text: "must apply rational basis review to all admissions decisions" },
      { letter: "E", text: "could use point systems to award advantages based on race" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Justice Powell's controlling opinion held that universities could consider race as one factor among many in admissions to achieve educational diversity, but could not use rigid quotas.' This directly supports answer B.",
    wrongAnswerExplanations: {
      "A": "This contradicts the passage, which states that Powell rejected rigid quotas.",
      "C": "This contradicts Powell's allowance of race as one factor among many.",
      "D": "The passage indicates racial classifications trigger strict scrutiny, not rational basis review.",
      "E": "The passage states that point systems were struck down in Gratz, not approved in Bakke."
    },
    difficulty: "easy",
    passageId: "rc-exp15-p1",
  },
  {
    id: "rc-exp15-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the dissenters in Students for Fair Admissions would most likely argue that",
    answerChoices: [
      { letter: "A", text: "the majority's decision was consistent with long-established precedent" },
      { letter: "B", text: "racial inequality has been fully remedied and race-conscious policies are no longer necessary" },
      { letter: "C", text: "the majority's colorblind approach ignores persistent inequality and will reduce diversity at elite institutions" },
      { letter: "D", text: "strict scrutiny is too lenient a standard for reviewing racial classifications" },
      { letter: "E", text: "universities should be prohibited from considering any applicant characteristics" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that dissents 'argued that [the decision] departed from precedent, ignored the persistence of racial inequality, and would resegregate elite institutions that had become more diverse through race-conscious policies.' This directly supports answer C's characterization of the dissenters' position.",
    wrongAnswerExplanations: {
      "A": "The passage indicates dissenters argued the decision 'departed from precedent,' the opposite of this answer.",
      "B": "Dissenters argued the decision 'ignored the persistence of racial inequality,' contradicting this answer.",
      "D": "The passage does not indicate dissenters criticized strict scrutiny as too lenient.",
      "E": "This extreme position is not attributed to the dissenters in the passage."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p1",
  },
  {
    id: "rc-exp15-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author discusses the three levels of scrutiny primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that strict scrutiny should be abandoned" },
      { letter: "B", text: "demonstrate that gender discrimination is more harmful than racial discrimination" },
      { letter: "C", text: "provide the doctrinal framework necessary for understanding the affirmative action debate" },
      { letter: "D", text: "criticize the Supreme Court for applying inconsistent standards" },
      { letter: "E", text: "explain why the Equal Protection Clause was originally ratified" },
    ],
    correctAnswer: "C",
    explanation: "The paragraph on levels of scrutiny appears early in the passage, explaining that racial classifications trigger strict scrutiny. This framework is essential for understanding the subsequent discussion of affirmative action cases, which all involve applying strict scrutiny to race-conscious programs. The author provides this doctrinal background to contextualize the later analysis.",
    wrongAnswerExplanations: {
      "A": "The author presents the standards neutrally without arguing for their abolition.",
      "B": "The passage makes no comparative judgment about the relative harms of different discrimination types.",
      "D": "The author presents the standards as established doctrine, not as inconsistent or worthy of criticism.",
      "E": "The levels of scrutiny are a later doctrinal development, not related to the original ratification."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p1",
  },
  {
    id: "rc-exp15-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate between critics and supporters of the Students for Fair Admissions decision can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of the majority's colorblind interpretation" },
      { letter: "B", text: "dismissive of both positions as irrelevant to constitutional analysis" },
      { letter: "C", text: "analytically neutral, presenting both perspectives as reflecting genuine disagreements about equality" },
      { letter: "D", text: "openly hostile to any consideration of race in government decision-making" },
      { letter: "E", text: "sarcastically critical of the dissenters' arguments" },
    ],
    correctAnswer: "C",
    explanation: "The final paragraph presents both critics' and supporters' arguments without indicating which view the author endorses. The author describes the debate as reflecting 'deeper disagreements about whether equality means identical treatment or requires considering historical context and present disparities,' presenting both positions as legitimate perspectives on a contested question rather than advocating for either.",
    wrongAnswerExplanations: {
      "A": "The author presents both sides neutrally without endorsing the colorblind position.",
      "B": "The author treats both positions as substantive constitutional arguments, not as irrelevant.",
      "D": "The author presents this as one view among competing perspectives, not as their own position.",
      "E": "The author's tone is descriptive and balanced, with no sarcasm toward either side."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p1",
  },
  {
    id: "rc-exp15-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument as described in the final paragraph?",
    answerChoices: [
      { letter: "A", text: "Studies show that race-neutral admissions criteria produce student bodies with roughly equal racial representation as race-conscious programs." },
      { letter: "B", text: "Historical research demonstrates that state-sponsored discrimination created wealth disparities that continue to affect educational opportunities today." },
      { letter: "C", text: "Surveys indicate that most Americans oppose any consideration of race in university admissions." },
      { letter: "D", text: "Legal scholars agree that the original meaning of the Equal Protection Clause required colorblind treatment." },
      { letter: "E", text: "Universities report that holistic admissions processes are administratively burdensome and expensive." },
    ],
    correctAnswer: "B",
    explanation: "Critics 'argue that the clause permits race-conscious remedies for the legacy of state-sponsored discrimination and that formal colorblindness perpetuates substantive inequality.' Evidence that historical discrimination continues to affect educational opportunities today would directly support the critics' claim that race-conscious remedies address ongoing effects of past state action, strengthening their argument that colorblindness perpetuates inequality.",
    wrongAnswerExplanations: {
      "A": "This would weaken the critics' argument by suggesting race-conscious programs are unnecessary to achieve diversity.",
      "C": "Public opinion about what policy should be is irrelevant to the constitutional argument about what equal protection permits.",
      "D": "This would support the supporters' position about colorblindness, not the critics' argument.",
      "E": "Administrative costs are irrelevant to the constitutional debate about equality's meaning."
    },
    difficulty: "hard",
    passageId: "rc-exp15-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - QUANTUM COMPUTING PRINCIPLES
// ============================================

const passage2 = `Classical computers process information using bits, which exist in one of two definite states: 0 or 1. Every operation, from simple arithmetic to complex simulations, reduces to manipulating these binary digits according to logical rules. Quantum computers, by contrast, exploit phenomena from quantum mechanics—particularly superposition and entanglement—to process information in fundamentally different ways. These quantum effects enable certain computational tasks that would require impractical amounts of time on classical machines.

Superposition allows quantum bits, or qubits, to exist in multiple states simultaneously until measured. While a classical bit is definitively either 0 or 1, a qubit can be in a "superposition" of both states, represented mathematically as a combination with associated probabilities. When a qubit is measured, this superposition "collapses" to a definite value—0 or 1—with probabilities determined by the superposition state. A system of n qubits can represent 2^n states simultaneously, whereas n classical bits can represent only a single state at any moment. This exponential advantage is foundational to quantum computing's potential power.

Entanglement creates correlations between qubits that have no classical analogue. When qubits become entangled, the state of one qubit becomes fundamentally connected to the state of others, regardless of the physical distance between them. Measuring one entangled qubit instantly affects the probabilities associated with its partners. Einstein famously called this "spooky action at a distance," finding it philosophically troubling. Nevertheless, entanglement has been experimentally verified and provides quantum computers with computational resources unavailable to classical systems.

Quantum algorithms exploit superposition and entanglement to solve specific problems exponentially faster than known classical algorithms. Shor's algorithm can factor large numbers exponentially faster than the best classical methods, threatening cryptographic systems that rely on factoring difficulty. Grover's algorithm provides quadratic speedup for searching unstructured databases. However, quantum computers are not universally faster than classical computers—they excel at particular problem types while offering no advantage for many everyday computing tasks.

Practical quantum computing faces formidable technical challenges. Qubits are extraordinarily fragile; interactions with the environment cause "decoherence," destroying the superposition states that enable quantum computation. Current quantum computers require near-absolute-zero temperatures and extreme isolation. Error rates remain far higher than in classical systems, necessitating complex error-correction schemes that consume many physical qubits to create each reliable "logical" qubit. Despite recent progress—including demonstrations of "quantum supremacy" where quantum devices performed specific tasks faster than any classical supercomputer—scalable, fault-tolerant quantum computers capable of running useful algorithms on large problems remain years or decades away.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp15-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Quantum computers will soon replace all classical computers for every type of computation." },
      { letter: "B", text: "Quantum computers exploit superposition and entanglement to offer advantages for certain problems, but face significant technical challenges before becoming practically useful." },
      { letter: "C", text: "Einstein's critique of entanglement has been vindicated by subsequent research." },
      { letter: "D", text: "Shor's algorithm has already rendered all current cryptographic systems obsolete." },
      { letter: "E", text: "Classical computers will always outperform quantum computers on all meaningful tasks." },
    ],
    correctAnswer: "B",
    explanation: "The passage explains quantum computing's fundamental principles (superposition and entanglement), describes specific algorithms offering computational advantages, but emphasizes that these advantages are problem-specific and notes the formidable technical challenges—decoherence, error rates, and the need for extreme conditions—that must be overcome. Answer B captures this balanced assessment of promise and obstacles.",
    wrongAnswerExplanations: {
      "A": "The passage explicitly states that quantum computers 'offer no advantage for many everyday computing tasks' and that practical machines remain 'years or decades away.'",
      "C": "The passage states that entanglement 'has been experimentally verified,' contradicting Einstein's concerns rather than vindicating them.",
      "D": "The passage says Shor's algorithm 'can factor large numbers' and threatens cryptographic systems, but does not claim current systems are obsolete—scalable quantum computers don't yet exist.",
      "E": "This contradicts the passage's discussion of exponential speedups for specific problem types."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p2",
  },
  {
    id: "rc-exp15-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, when a qubit in superposition is measured, it",
    answerChoices: [
      { letter: "A", text: "remains in superposition indefinitely" },
      { letter: "B", text: "becomes entangled with other qubits automatically" },
      { letter: "C", text: "collapses to a definite value of either 0 or 1" },
      { letter: "D", text: "destroys the quantum computer's circuitry" },
      { letter: "E", text: "transmits information faster than light to distant locations" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'When a qubit is measured, this superposition \"collapses\" to a definite value—0 or 1—with probabilities determined by the superposition state.' This directly supports answer C.",
    wrongAnswerExplanations: {
      "A": "The passage says measurement causes collapse, ending superposition, not maintaining it.",
      "B": "Entanglement is discussed separately; the passage does not say measurement automatically causes entanglement.",
      "D": "The passage discusses decoherence as a problem but does not claim measurement destroys circuitry.",
      "E": "While entanglement creates correlations, the passage does not claim faster-than-light information transmission."
    },
    difficulty: "easy",
    passageId: "rc-exp15-p2",
  },
  {
    id: "rc-exp15-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, a system of 10 qubits can simultaneously represent how many more states than 10 classical bits can represent at any moment?",
    answerChoices: [
      { letter: "A", text: "10 times as many states" },
      { letter: "B", text: "20 times as many states" },
      { letter: "C", text: "100 times as many states" },
      { letter: "D", text: "1,023 more states (2^10 - 1)" },
      { letter: "E", text: "The same number of states" },
    ],
    correctAnswer: "D",
    explanation: "The passage states that 'A system of n qubits can represent 2^n states simultaneously, whereas n classical bits can represent only a single state at any moment.' For 10 qubits: 2^10 = 1,024 states. For 10 classical bits: 1 state at a time. The difference is 1,024 - 1 = 1,023 more states.",
    wrongAnswerExplanations: {
      "A": "This would be linear scaling; the passage describes exponential advantage.",
      "B": "This is 2n, not 2^n, which the passage specifies.",
      "C": "This would be n^2 = 100, not the 2^n = 1,024 the passage describes.",
      "E": "This contradicts the passage's emphasis on quantum advantage."
    },
    difficulty: "hard",
    passageId: "rc-exp15-p2",
  },
  {
    id: "rc-exp15-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions Einstein's characterization of entanglement as \"spooky action at a distance\" primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that quantum mechanics is fundamentally flawed" },
      { letter: "B", text: "acknowledge that entanglement's counterintuitive nature troubled even leading physicists while noting it has been experimentally confirmed" },
      { letter: "C", text: "suggest that Einstein's authority should settle debates about quantum computing" },
      { letter: "D", text: "explain why quantum computers require near-absolute-zero temperatures" },
      { letter: "E", text: "compare the speed of quantum and classical algorithms" },
    ],
    correctAnswer: "B",
    explanation: "The Einstein reference appears in a paragraph explaining entanglement's unusual properties. By noting that Einstein found it 'philosophically troubling' but following immediately with 'Nevertheless, entanglement has been experimentally verified,' the author acknowledges the counterintuitive nature of the phenomenon while affirming its validity—using Einstein's stature to illustrate how surprising these quantum effects are.",
    wrongAnswerExplanations: {
      "A": "The passage affirms entanglement's experimental verification, not flaws in quantum mechanics.",
      "C": "The author notes Einstein was troubled but then states entanglement has been verified, suggesting Einstein's concerns were overcome.",
      "D": "Temperature requirements appear in a later paragraph about practical challenges, not in the entanglement discussion.",
      "E": "Algorithm comparisons appear in a different paragraph; Einstein is mentioned in the context of entanglement's strangeness."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p2",
  },
  {
    id: "rc-exp15-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward claims of \"quantum supremacy\" can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically optimistic that such demonstrations prove quantum computers are ready for widespread use" },
      { letter: "B", text: "cautiously noting the achievement while emphasizing that useful, scalable quantum computers remain distant" },
      { letter: "C", text: "deeply skeptical that any quantum supremacy demonstrations have actually occurred" },
      { letter: "D", text: "indifferent to the significance of such achievements" },
      { letter: "E", text: "nostalgic for the earlier era of classical computing" },
    ],
    correctAnswer: "B",
    explanation: "The author mentions 'demonstrations of \"quantum supremacy\" where quantum devices performed specific tasks faster than any classical supercomputer' as evidence of 'recent progress,' but immediately qualifies this by noting that 'scalable, fault-tolerant quantum computers capable of running useful algorithms on large problems remain years or decades away.' This combination of acknowledgment and qualification reflects cautious assessment.",
    wrongAnswerExplanations: {
      "A": "The author emphasizes remaining challenges and notes useful machines remain 'years or decades away,' contradicting enthusiastic optimism.",
      "C": "The author acknowledges supremacy demonstrations as 'recent progress,' not as dubious claims.",
      "D": "By discussing supremacy demonstrations as 'progress,' the author treats them as significant, not indifferently.",
      "E": "Nothing in the passage suggests nostalgia for classical computing's past."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p2",
  },
  {
    id: "rc-exp15-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following tasks would be LEAST likely to benefit from quantum computing?",
    answerChoices: [
      { letter: "A", text: "Breaking encryption systems based on the difficulty of factoring large numbers" },
      { letter: "B", text: "Searching a large, unstructured database for a specific entry" },
      { letter: "C", text: "Performing routine word processing and spreadsheet calculations" },
      { letter: "D", text: "Simulating complex quantum mechanical systems" },
      { letter: "E", text: "Solving optimization problems that involve examining many possibilities" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that quantum computers 'offer no advantage for many everyday computing tasks.' Word processing and spreadsheet calculations are quintessential everyday computing tasks that involve sequential, deterministic operations well-suited to classical computing. By contrast, the passage specifically mentions factoring (A), database search via Grover's algorithm (B), and implies advantages for problems requiring examination of many states simultaneously (D, E).",
    wrongAnswerExplanations: {
      "A": "The passage specifically mentions Shor's algorithm for factoring as a quantum advantage.",
      "B": "Grover's algorithm is explicitly cited as providing speedup for 'searching unstructured databases.'",
      "D": "Quantum simulation is a natural application given quantum computers' ability to represent quantum states.",
      "E": "The exponential state representation suggests advantages for problems requiring simultaneous consideration of many possibilities."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - FILM THEORY AND AUTEUR CRITICISM
// ============================================

const passage3 = `The auteur theory, developed in the 1950s by French critics associated with the journal Cahiers du Cinéma, fundamentally transformed how films were understood and evaluated. Figures like François Truffaut and Jean-Luc Godard argued that certain directors should be recognized as the primary creative forces—the "authors"—of their films, much as novelists are authors of their books. The theory elevated directors above screenwriters, producers, and studios, proposing that genuine auteurs imposed distinctive stylistic and thematic signatures across their bodies of work that could be traced like fingerprints.

The auteur theory developed partly as a polemical response to the "tradition of quality" in French cinema, which these critics viewed as literary, theatrical, and impersonal. They championed instead certain Hollywood directors—Howard Hawks, Alfred Hitchcock, John Ford—whom the American critical establishment had largely dismissed as mere craftsmen working within the studio system. The French critics argued that these directors, despite working with studio-assigned scripts and commercial constraints, expressed personal visions through their visual styles, recurring motifs, and consistent thematic preoccupations.

Andrew Sarris imported the auteur theory to American criticism in the early 1960s, sparking vigorous debate. Sarris proposed a ranking system placing directors in categories from "Pantheon" to "Less Than Meets the Eye," judging them by technical competence, distinguishable personality, and an ineffable quality he termed "interior meaning." Pauline Kael attacked Sarris's formulation in her famous essay "Circles and Squares," arguing that auteurism promoted cult worship of directors, undervalued individual films, and ignored the collaborative nature of filmmaking. Kael insisted that films should be evaluated as individual works rather than as entries in directorial oeuvres.

Subsequent developments in film theory challenged auteurism from different directions. Structuralist and post-structuralist critics questioned the very notion of authorship, suggesting that meaning was constructed through codes and conventions rather than expressed by individual creators. Roland Barthes's proclamation of the "death of the author" applied to cinema as to literature: texts spoke through their authors rather than vice versa. Feminist and ideological critics noted that auteur theory's focus on individual genius—almost exclusively male—obscured both the labor of countless collaborators and the industrial and social structures shaping film production.

Yet auteurism's influence persists, transformed rather than abolished. Contemporary film criticism routinely analyzes directors' stylistic signatures and thematic concerns, even while acknowledging cinema's collaborative nature. Festival programming and art-house distribution remain organized around directorial names. The tension between viewing directors as visionary artists and recognizing filmmaking as collective industrial production continues to animate debates about cinema's nature—a tension that auteur theory first articulated even if it could not resolve.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp15-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The auteur theory was definitively refuted by structuralist and feminist critics." },
      { letter: "B", text: "Andrew Sarris was the most important film critic of the twentieth century." },
      { letter: "C", text: "The auteur theory transformed film criticism by emphasizing directorial authorship, faced significant challenges, yet its influence persists in modified form." },
      { letter: "D", text: "French cinema was superior to Hollywood cinema during the studio era." },
      { letter: "E", text: "All films should be understood as the product of collective creation with no identifiable authors." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces auteur theory's origins in French criticism, its polemical purposes, its transposition to American criticism and the debates it sparked, challenges from various theoretical perspectives, and its continuing influence despite these challenges. Answer C accurately captures this trajectory of transformation, debate, and persistent influence.",
    wrongAnswerExplanations: {
      "A": "While these critiques are discussed, the final paragraph notes auteurism's 'influence persists,' not that it was refuted.",
      "B": "Sarris is one figure among many discussed; the passage does not claim he was the most important critic.",
      "D": "The French critics championed certain Hollywood directors, not French cinema's superiority.",
      "E": "This represents one critique of auteurism, not the passage's main point, and the passage notes auteurism persists."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p3",
  },
  {
    id: "rc-exp15-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Pauline Kael's critique of auteur theory included the argument that",
    answerChoices: [
      { letter: "A", text: "all Hollywood directors were equally talented" },
      { letter: "B", text: "the theory promoted cult worship of directors and undervalued individual films" },
      { letter: "C", text: "French critics should focus on French rather than American cinema" },
      { letter: "D", text: "Andrew Sarris was technically incompetent as a critic" },
      { letter: "E", text: "directors were more important than the theory recognized" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Kael attacked Sarris's formulation... arguing that auteurism promoted cult worship of directors, undervalued individual films, and ignored the collaborative nature of filmmaking.' Answer B directly captures two of these stated criticisms.",
    wrongAnswerExplanations: {
      "A": "Kael's argument was about how to evaluate films, not about directors' equal talents.",
      "C": "The passage does not attribute this nationalist argument to Kael.",
      "D": "Kael's critique focused on auteurism's conceptual problems, not Sarris's personal competence.",
      "E": "Kael argued the opposite—that auteurism overvalued directorial importance relative to individual films and collaboration."
    },
    difficulty: "easy",
    passageId: "rc-exp15-p3",
  },
  {
    id: "rc-exp15-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the French critics' championing of Hollywood directors like Hawks and Hitchcock was particularly notable because",
    answerChoices: [
      { letter: "A", text: "these directors had been recognized as major artists by the American critical establishment" },
      { letter: "B", text: "the American establishment had largely dismissed these directors as mere craftsmen" },
      { letter: "C", text: "French critics typically ignored non-French cinema entirely" },
      { letter: "D", text: "these directors explicitly rejected the studio system's constraints" },
      { letter: "E", text: "Hawks and Hitchcock worked exclusively in European cinema" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the French critics 'championed instead certain Hollywood directors—Howard Hawks, Alfred Hitchcock, John Ford—whom the American critical establishment had largely dismissed as mere craftsmen working within the studio system.' The champions' reevaluation of directors dismissed by Americans made their advocacy notable.",
    wrongAnswerExplanations: {
      "A": "This contradicts the passage, which says these directors had been 'largely dismissed' by the American establishment.",
      "C": "The passage does not claim French critics typically ignored non-French cinema.",
      "D": "The passage says these directors worked 'despite... studio-assigned scripts and commercial constraints,' not that they rejected them.",
      "E": "The passage clearly identifies them as Hollywood directors working within the studio system."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p3",
  },
  {
    id: "rc-exp15-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Roland Barthes's proclamation of the \"death of the author\" primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Barthes's ideas should be applied only to literature, not cinema" },
      { letter: "B", text: "illustrate how post-structuralist theory challenged the concept of individual authorship underlying auteurism" },
      { letter: "C", text: "praise Barthes as cinema's most influential theorist" },
      { letter: "D", text: "explain the origins of auteur theory in French criticism" },
      { letter: "E", text: "compare French and American approaches to literary criticism" },
    ],
    correctAnswer: "B",
    explanation: "Barthes is mentioned in the paragraph discussing how 'Structuralist and post-structuralist critics questioned the very notion of authorship.' The reference to the 'death of the author' exemplifies post-structuralist challenges to the authorship concept that auteur theory depends on. The passage notes this idea 'applied to cinema as to literature.'",
    wrongAnswerExplanations: {
      "A": "The passage explicitly states the death of the author concept 'applied to cinema as to literature,' not that it shouldn't.",
      "C": "Barthes is presented as one example of post-structuralist critique, not as cinema's most influential theorist.",
      "D": "Barthes's work came after auteur theory and challenged rather than originated it.",
      "E": "The passage does not compare French and American literary criticism; it discusses film theory."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p3",
  },
  {
    id: "rc-exp15-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward auteur theory can best be described as",
    answerChoices: [
      { letter: "A", text: "wholly dismissive, viewing it as an outdated and discredited approach" },
      { letter: "B", text: "uncritically enthusiastic, advocating for its universal adoption" },
      { letter: "C", text: "analytically balanced, acknowledging both its limitations and its persistent influence" },
      { letter: "D", text: "nostalgic for the era before auteur theory emerged" },
      { letter: "E", text: "confused about the theory's basic claims and history" },
    ],
    correctAnswer: "C",
    explanation: "The author presents auteur theory's origins and claims, discusses substantive critiques (Kael, structuralism, feminism), but concludes by noting that 'auteurism's influence persists, transformed rather than abolished.' This balanced approach—acknowledging both critiques and continuing relevance—characterizes the author's analytical stance.",
    wrongAnswerExplanations: {
      "A": "The final paragraph emphasizes auteurism's persistence, not its discreditation.",
      "B": "The author presents multiple critiques of auteurism, showing awareness of its limitations.",
      "D": "Nothing in the passage suggests nostalgia for pre-auteurist criticism.",
      "E": "The author demonstrates clear understanding of the theory's claims and historical development."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p3",
  },
  {
    id: "rc-exp15-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A theory is introduced, its historical development is traced, challenges are presented, and its modified persistence is noted." },
      { letter: "B", text: "Two competing theories are described and one is declared definitively superior." },
      { letter: "C", text: "A chronological history of world cinema is provided from silent films to the present." },
      { letter: "D", text: "An argument is made that all film criticism is equally valid." },
      { letter: "E", text: "A series of unrelated biographical sketches of film critics is presented." },
    ],
    correctAnswer: "A",
    explanation: "The passage follows a clear structure: introducing auteur theory (paragraph 1), explaining its origins and purposes (paragraph 2), tracing its American reception and early debates (paragraph 3), presenting subsequent theoretical challenges (paragraph 4), and noting its transformed but persistent influence (paragraph 5). Answer A accurately captures this organizational arc.",
    wrongAnswerExplanations: {
      "B": "While multiple perspectives are presented, no single theory is declared definitively superior.",
      "C": "The passage focuses on auteur theory from the 1950s onward, not a chronological history of all cinema.",
      "D": "The passage presents substantive debates between positions, not a claim that all views are equally valid.",
      "E": "While critics are mentioned, the passage focuses on theories and debates, not biographical sketches."
    },
    difficulty: "hard",
    passageId: "rc-exp15-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - URBANIZATION AND RURAL DECLINE
// ============================================

const passage4 = `The global shift from rural to urban living represents one of humanity's most profound transformations. For most of human history, the vast majority of people lived in rural areas, engaged in agriculture or related activities. As recently as 1950, only about 30 percent of the world's population lived in cities. Today, that figure exceeds 55 percent, and projections suggest that by 2050, over two-thirds of humanity will be urban. This urbanization has accelerated particularly in developing countries, where cities grow through both migration and natural increase.

The economic logic driving urbanization is powerful. Cities concentrate markets, labor pools, and infrastructure, enabling specialization and economies of scale impossible in dispersed rural settings. Proximity facilitates the exchange of ideas and the matching of workers with employers. Studies consistently show that urban workers earn higher wages than their rural counterparts, even controlling for education and skill differences—a phenomenon economists attribute to "agglomeration effects" that make workers more productive in dense environments. These economic advantages pull migrants toward cities while agricultural mechanization and declining farm incomes push them away from rural areas.

Yet urbanization imposes substantial costs on the communities left behind. As young, educated residents depart for cities, rural areas experience demographic hollowing—declining populations skewed toward the elderly. Schools close as enrollment drops. Healthcare becomes harder to access as practitioners concentrate in urban centers. Local businesses struggle as customer bases shrink. The tax base erodes just as infrastructure ages and social service demands increase. These dynamics can create self-reinforcing spirals of decline: deteriorating conditions accelerate outmigration, which further worsens conditions for those remaining.

The social and political dimensions of rural decline have attracted increasing attention. Researchers document growing divergence in life expectancy, with rural residents falling behind urban counterparts. Educational attainment gaps have widened. Some scholars argue that rural decline fuels political resentment, contributing to populist movements in multiple countries as rural residents feel abandoned by metropolitan elites and globalized economic systems. Others caution against romanticizing rural life or treating rural communities as politically homogeneous, noting significant diversity within rural populations.

Policy responses to rural decline range from efforts to slow outmigration to strategies for managing orderly decline. Place-based development initiatives attempt to create rural economic opportunities through infrastructure investment, business incentives, and support for emerging industries like renewable energy or rural tourism. Critics question whether such efforts can overcome agglomeration advantages or merely delay inevitable adjustment. Some propose instead focusing on helping rural residents who wish to relocate and ensuring adequate services for aging populations choosing to remain. The debate reflects deeper tensions about whether policy should attempt to counteract market forces or facilitate adaptation to economic change.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp15-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that all remaining rural residents should immediately relocate to cities" },
      { letter: "B", text: "examine the economic forces driving urbanization, the consequences for rural communities, and the range of policy responses" },
      { letter: "C", text: "prove that rural life is universally superior to urban life" },
      { letter: "D", text: "compare urbanization patterns across different historical periods" },
      { letter: "E", text: "criticize economists for ignoring the benefits of rural living" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically addresses: urbanization trends (paragraph 1), economic forces driving urbanization (paragraph 2), consequences for rural communities (paragraph 3), social and political dimensions (paragraph 4), and policy responses (paragraph 5). Answer B accurately captures this comprehensive treatment of causes, effects, and responses.",
    wrongAnswerExplanations: {
      "A": "The passage presents policy debates neutrally, not advocating universal relocation.",
      "C": "The passage does not claim rural life is superior; it discusses urbanization's logic and rural decline.",
      "D": "While historical context is provided, detailed comparison across periods is not the focus.",
      "E": "The passage incorporates economic analysis respectfully, not critically."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p4",
  },
  {
    id: "rc-exp15-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, \"agglomeration effects\" refer to",
    answerChoices: [
      { letter: "A", text: "the psychological distress caused by living in crowded urban environments" },
      { letter: "B", text: "productivity advantages that make workers more effective in dense urban settings" },
      { letter: "C", text: "agricultural techniques that increase rural farm yields" },
      { letter: "D", text: "policies designed to encourage rural-to-urban migration" },
      { letter: "E", text: "the tendency of rural populations to cluster in small towns" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly defines agglomeration effects when it states that urban workers earn higher wages 'even controlling for education and skill differences—a phenomenon economists attribute to \"agglomeration effects\" that make workers more productive in dense environments.' This directly supports answer B.",
    wrongAnswerExplanations: {
      "A": "The passage associates agglomeration with productivity benefits, not psychological distress.",
      "C": "Agglomeration is discussed in the context of urban density, not agricultural techniques.",
      "D": "Agglomeration effects describe economic phenomena, not migration policies.",
      "E": "Agglomeration refers to urban density effects, not rural clustering."
    },
    difficulty: "easy",
    passageId: "rc-exp15-p4",
  },
  {
    id: "rc-exp15-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which one of the following best characterizes the relationship between outmigration and rural community conditions?",
    answerChoices: [
      { letter: "A", text: "Outmigration improves conditions for those who remain by reducing competition for resources." },
      { letter: "B", text: "Outmigration and worsening conditions reinforce each other in a self-perpetuating cycle of decline." },
      { letter: "C", text: "Community conditions have no effect on migration decisions." },
      { letter: "D", text: "Outmigration occurs only after conditions have completely collapsed." },
      { letter: "E", text: "Improved rural conditions accelerate outmigration to cities." },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly describes 'self-reinforcing spirals of decline: deteriorating conditions accelerate outmigration, which further worsens conditions for those remaining.' This clearly indicates a mutually reinforcing relationship where each factor exacerbates the other.",
    wrongAnswerExplanations: {
      "A": "The passage describes outmigration worsening conditions (eroding tax base, closing schools), not improving them.",
      "C": "The passage indicates conditions affect migration, describing how deterioration 'accelerates outmigration.'",
      "D": "The passage describes gradual spirals, not sudden collapse triggering migration.",
      "E": "The passage suggests deteriorating (not improved) conditions accelerate outmigration."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p4",
  },
  {
    id: "rc-exp15-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions schools, healthcare, and local businesses primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that rural services are inherently superior to urban services" },
      { letter: "B", text: "provide specific examples of how rural communities deteriorate as populations decline" },
      { letter: "C", text: "compare educational quality across different regions" },
      { letter: "D", text: "explain why people prefer living in cities" },
      { letter: "E", text: "advocate for increased federal funding for rural infrastructure" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph discussing how 'urbanization imposes substantial costs on the communities left behind.' The author cites schools closing, healthcare becoming harder to access, and local businesses struggling as specific manifestations of demographic hollowing and community decline.",
    wrongAnswerExplanations: {
      "A": "The passage describes rural services deteriorating, not their inherent superiority.",
      "C": "The examples illustrate decline patterns, not comparative educational quality.",
      "D": "These examples appear in the paragraph about rural decline, not urban preference.",
      "E": "The passage presents policy debates neutrally; these examples illustrate decline, not funding advocacy."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p4",
  },
  {
    id: "rc-exp15-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward claims that rural decline fuels political resentment can best be described as",
    answerChoices: [
      { letter: "A", text: "completely dismissive, rejecting any connection between economic conditions and political attitudes" },
      { letter: "B", text: "nuanced, presenting this argument while noting scholarly cautions about romanticizing rural life or treating rural populations as homogeneous" },
      { letter: "C", text: "enthusiastically supportive, arguing that rural political movements are entirely justified" },
      { letter: "D", text: "confused about the relationship between economics and politics" },
      { letter: "E", text: "hostile toward rural residents and their political concerns" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the argument that rural decline 'fuels political resentment, contributing to populist movements' but immediately follows with 'Others caution against romanticizing rural life or treating rural communities as politically homogeneous, noting significant diversity within rural populations.' This balanced presentation—stating the argument then noting cautionary perspectives—reflects a nuanced approach.",
    wrongAnswerExplanations: {
      "A": "The author presents the connection between decline and resentment as a scholarly argument, not dismissing it.",
      "C": "By presenting cautionary perspectives, the author does not enthusiastically endorse the resentment argument.",
      "D": "The passage demonstrates sophisticated understanding of economic-political relationships.",
      "E": "Nothing in the passage suggests hostility toward rural residents."
    },
    difficulty: "medium",
    passageId: "rc-exp15-p4",
  },
  {
    id: "rc-exp15-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the critics' argument that place-based development initiatives cannot overcome agglomeration advantages?",
    answerChoices: [
      { letter: "A", text: "Most rural residents express a preference for remaining in their communities if viable employment were available." },
      { letter: "B", text: "A longitudinal study found that regions receiving infrastructure investment and business incentives experienced sustained economic growth and population stabilization." },
      { letter: "C", text: "Urban housing costs have increased faster than urban wages in most metropolitan areas." },
      { letter: "D", text: "Agricultural employment continues to decline due to mechanization worldwide." },
      { letter: "E", text: "Many rural communities lack high-speed internet access." },
    ],
    correctAnswer: "B",
    explanation: "Critics question 'whether such efforts can overcome agglomeration advantages or merely delay inevitable adjustment.' Evidence that place-based initiatives actually produced 'sustained economic growth and population stabilization' would directly counter the critics' skepticism by showing these programs can succeed against agglomeration forces, not merely delay decline.",
    wrongAnswerExplanations: {
      "A": "Preferences do not demonstrate that policies can overcome economic forces; critics might argue viable employment cannot be created.",
      "C": "Urban housing costs might affect migration decisions but do not show rural development can overcome agglomeration.",
      "D": "This supports the forces driving rural decline, not the effectiveness of countermeasures.",
      "E": "This describes a challenge for rural development but does not address whether initiatives can overcome agglomeration."
    },
    difficulty: "hard",
    passageId: "rc-exp15-p4",
  },
];

// Export all RC questions from Set 15
export const rcQuestionsExpSet15: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet15 = {
  passage1: { id: "rc-exp15-p1", content: passage1, topic: "law" as const, title: "Equal Protection and Affirmative Action" },
  passage2: { id: "rc-exp15-p2", content: passage2, topic: "natural-sciences" as const, title: "Quantum Computing Principles" },
  passage3: { id: "rc-exp15-p3", content: passage3, topic: "humanities" as const, title: "Film Theory and Auteur Criticism" },
  passage4: { id: "rc-exp15-p4", content: passage4, topic: "social-sciences" as const, title: "Urbanization and Rural Decline" },
};
