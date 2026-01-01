// Reading Comprehension Expansion Set 28
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - RELIGIOUS FREEDOM AND ESTABLISHMENT CLAUSE
// ============================================

const passage1 = `The Religion Clauses of the First Amendment—the Establishment Clause prohibiting government establishment of religion and the Free Exercise Clause protecting religious practice—create a persistent tension in American constitutional law. Government cannot promote religion, yet it cannot burden religious exercise. These dual prohibitions sometimes pull in opposite directions, forcing courts to navigate between the Scylla of establishment and the Charybdis of discrimination against religion.

The Supreme Court's Establishment Clause jurisprudence has evolved considerably over the past half-century. The Lemon test, established in Lemon v. Kurtzman (1971), required that government action have a secular purpose, neither advance nor inhibit religion, and avoid excessive entanglement with religion. While never formally overruled, Lemon has been progressively marginalized. The Court increasingly favors historical analysis, asking whether a practice would have been understood as an establishment at the founding or has achieved historical acceptance through longstanding tradition.

Free Exercise doctrine underwent its own transformation in Employment Division v. Smith (1990). The Court held that neutral, generally applicable laws do not violate the Free Exercise Clause even when they substantially burden religious practice. Under Smith, a law criminalizing peyote use could be applied to Native Americans using peyote in religious ceremonies because the prohibition was not specifically targeting religion. This represented a significant narrowing from earlier cases that required strict scrutiny of burdens on religious exercise. Congress responded with the Religious Freedom Restoration Act, attempting to restore the stricter standard legislatively.

Recent decisions have emphasized that government cannot treat religious actors worse than comparable secular actors. In cases involving pandemic restrictions, the Court struck down rules that limited religious gatherings more severely than comparable secular activities like shopping or dining. This principle of religious equality has become central to the Court's approach, sometimes in tension with concerns about preserving separation between church and state. Critics argue this framework may effectively require accommodations for religious groups that could themselves raise establishment concerns.

The intersection of religious liberty with antidiscrimination law presents particularly difficult questions. When religious organizations claim exemptions from employment discrimination laws or public accommodation requirements based on their religious beliefs, courts must balance religious freedom against civil rights protections. The Court has recognized a "ministerial exception" allowing religious organizations to select their clergy without government interference, but the boundaries of this exception and related religious liberty claims remain contested terrain in ongoing litigation.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp28-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Establishment Clause should be abolished to protect religious freedom." },
      { letter: "B", text: "The Religion Clauses create inherent tensions that have led to evolving judicial interpretations balancing competing constitutional values." },
      { letter: "C", text: "Employment Division v. Smith definitively resolved all religious liberty questions." },
      { letter: "D", text: "Religious organizations should be exempt from all antidiscrimination laws." },
      { letter: "E", text: "The Lemon test remains the dominant framework for Establishment Clause analysis." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the tension between the Religion Clauses, discusses evolving doctrine in both Establishment and Free Exercise contexts, and highlights ongoing disputes about balancing religious liberty with other values. Answer B captures this focus on inherent tensions and evolving interpretations.",
    wrongAnswerExplanations: {
      "A": "The passage never suggests abolishing the Establishment Clause; it describes how courts navigate the tension between both clauses.",
      "C": "The passage notes that Smith was controversial and that Congress responded legislatively, indicating the issue was not definitively resolved.",
      "D": "The passage presents this as a contested issue requiring balance, not as a settled conclusion.",
      "E": "The passage explicitly states that Lemon 'has been progressively marginalized' and the Court increasingly favors historical analysis."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p1",
  },
  {
    id: "rc-exp28-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Lemon test requires that government action",
    answerChoices: [
      { letter: "A", text: "promote religion in a neutral manner" },
      { letter: "B", text: "have a secular purpose, neither advance nor inhibit religion, and avoid excessive entanglement with religion" },
      { letter: "C", text: "favor established religions over newer religious movements" },
      { letter: "D", text: "apply strict scrutiny to all religious practices" },
      { letter: "E", text: "defer to legislative judgments about religious matters" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the Lemon test 'required that government action have a secular purpose, neither advance nor inhibit religion, and avoid excessive entanglement with religion.'",
    wrongAnswerExplanations: {
      "A": "Promoting religion would violate the Establishment Clause; Lemon prohibits advancing religion.",
      "C": "This would be precisely the kind of establishment the Clause prohibits.",
      "D": "Strict scrutiny is discussed in the Free Exercise context, not as part of the Lemon test.",
      "E": "The Lemon test provides criteria for judicial review, not for deference to legislatures."
    },
    difficulty: "easy",
    passageId: "rc-exp28-p1",
  },
  {
    id: "rc-exp28-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the Court's decision in Employment Division v. Smith would most likely permit",
    answerChoices: [
      { letter: "A", text: "a law specifically designed to prohibit a religious minority's sacred rituals" },
      { letter: "B", text: "enforcement of a general drug prohibition against religious users despite burdening their practice" },
      { letter: "C", text: "government funding of religious schools without restrictions" },
      { letter: "D", text: "exempting all religious practices from criminal law" },
      { letter: "E", text: "state establishment of an official religion" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that under Smith, 'neutral, generally applicable laws do not violate the Free Exercise Clause even when they substantially burden religious practice.' The peyote example illustrates exactly this principle—general drug laws can be applied to religious users.",
    wrongAnswerExplanations: {
      "A": "Smith applies to 'neutral, generally applicable laws,' not laws specifically targeting religious practices.",
      "C": "This relates to the Establishment Clause, not the Free Exercise doctrine discussed in Smith.",
      "D": "Smith narrowed religious exemptions; it did not create blanket immunity for religious practices.",
      "E": "This would violate the Establishment Clause, which Smith did not address."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p1",
  },
  {
    id: "rc-exp28-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions pandemic restrictions primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize public health policy during emergencies" },
      { letter: "B", text: "illustrate the Court's principle that government cannot treat religious actors worse than comparable secular actors" },
      { letter: "C", text: "argue that religious gatherings should be completely unrestricted" },
      { letter: "D", text: "compare American and European approaches to religious liberty" },
      { letter: "E", text: "explain the historical origins of the Establishment Clause" },
    ],
    correctAnswer: "B",
    explanation: "The pandemic restriction example immediately follows and illustrates the principle that 'government cannot treat religious actors worse than comparable secular actors.' The Court struck down rules limiting religious gatherings more than comparable secular activities.",
    wrongAnswerExplanations: {
      "A": "The passage describes the legal doctrine applied, not a critique of health policy.",
      "C": "The passage discusses equal treatment, not unlimited exemptions from restrictions.",
      "D": "No comparison to European approaches appears in the passage.",
      "E": "The pandemic discussion relates to recent Free Exercise doctrine, not historical Establishment Clause origins."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p1",
  },
  {
    id: "rc-exp28-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the evolving interpretation of the Religion Clauses can best be described as",
    answerChoices: [
      { letter: "A", text: "sharply critical of all recent Court decisions" },
      { letter: "B", text: "analytically descriptive while acknowledging ongoing tensions and contested questions" },
      { letter: "C", text: "enthusiastically supportive of expanded religious exemptions" },
      { letter: "D", text: "dismissive of religious liberty concerns" },
      { letter: "E", text: "nostalgic for the original Lemon test framework" },
    ],
    correctAnswer: "B",
    explanation: "The author describes doctrinal developments, notes tensions (e.g., religious equality 'sometimes in tension with concerns about preserving separation'), and acknowledges that issues 'remain contested terrain.' This reflects analytical description without strong advocacy.",
    wrongAnswerExplanations: {
      "A": "The author describes developments without sharp criticism; the tone is analytical rather than polemical.",
      "C": "The author presents religious liberty issues as requiring balance, not advocating for one side.",
      "D": "Religious liberty is treated as a serious constitutional value throughout the passage.",
      "E": "While noting Lemon's marginalization, the author does not express preference for its restoration."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p1",
  },
  {
    id: "rc-exp28-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen critics' argument that the religious equality framework may require accommodations that raise establishment concerns?",
    answerChoices: [
      { letter: "A", text: "Most countries do not distinguish between establishment and free exercise principles." },
      { letter: "B", text: "A court required a public school to fund a religious student group's proselytizing activities because it funded secular student groups." },
      { letter: "C", text: "Religious and secular organizations operate under identical regulatory requirements." },
      { letter: "D", text: "The ministerial exception has been narrowly interpreted to apply only to clergy." },
      { letter: "E", text: "Congress has declined to pass additional religious liberty legislation." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue that requiring equal treatment for religious groups 'could themselves raise establishment concerns.' A case where equal treatment forced public schools to fund religious proselytizing would directly illustrate this concern—equal treatment leading to government support of religious activity.",
    wrongAnswerExplanations: {
      "A": "Comparative constitutional law does not directly support the concern about establishment problems from the equality framework.",
      "C": "This would suggest no tension exists, undermining rather than supporting the critics' concern.",
      "D": "The scope of the ministerial exception is a separate issue from the religious equality framework.",
      "E": "Congressional inaction does not address whether the equality framework creates establishment problems."
    },
    difficulty: "hard",
    passageId: "rc-exp28-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - NANOTECHNOLOGY APPLICATIONS
// ============================================

const passage2 = `Nanotechnology—the manipulation of matter at scales between 1 and 100 nanometers—has emerged as one of the most transformative fields of contemporary science. At this scale, materials often exhibit properties radically different from their bulk counterparts. Gold nanoparticles, for instance, appear red or purple rather than yellow, and can catalyze chemical reactions that bulk gold cannot. These novel properties arise because nanoscale dimensions amplify quantum mechanical effects and dramatically increase the ratio of surface atoms to interior atoms.

Medical applications represent perhaps the most promising frontier for nanotechnology. Nanoparticle drug delivery systems can transport therapeutic agents directly to diseased cells while sparing healthy tissue, potentially revolutionizing cancer treatment. By attaching targeting molecules to nanoparticle surfaces, researchers have created "smart" delivery vehicles that recognize and bind to specific cell types. Clinical trials have demonstrated that nanoparticle-encapsulated chemotherapy drugs produce fewer side effects than conventional delivery methods while maintaining or improving therapeutic efficacy.

The environmental applications of nanotechnology are equally significant. Nanomaterials have proven exceptionally effective at removing contaminants from water. Nanoparticles of iron oxide can capture arsenic, lead, and other heavy metals with remarkable efficiency due to their enormous surface area relative to mass. Nanotechnology-enhanced membranes can filter out pathogens and pollutants that pass through conventional filtration systems. Some researchers envision nanotechnology-based sensors that could detect contaminants at concentrations far below current capabilities, enabling earlier intervention in environmental contamination.

However, the same properties that make nanomaterials useful also raise safety concerns. Nanoparticles can penetrate biological barriers that exclude larger particles, potentially accessing the brain, placenta, and other protected organs. The toxicology of many nanomaterials remains poorly understood, particularly regarding long-term exposure effects. Laboratory studies have shown that certain carbon nanotubes can cause inflammatory responses similar to asbestos fibers, though the relevance of these findings to real-world exposures remains debated. The rapid commercialization of nanomaterials has outpaced the development of comprehensive regulatory frameworks.

The governance of nanotechnology presents unique challenges. Unlike previous technologies, nanotechnology is not a single industry but a platform technology affecting multiple sectors from electronics to cosmetics. Existing regulatory categories may not adequately address nanomaterial risks because regulations often depend on chemical identity rather than particle size, yet nanoscale versions of familiar chemicals may behave quite differently. International coordination is essential but difficult when nations have different risk tolerances and economic interests in nanotechnology development.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp28-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Nanotechnology should be banned due to safety concerns." },
      { letter: "B", text: "Nanotechnology offers transformative applications in medicine and environment but presents safety and governance challenges that remain unresolved." },
      { letter: "C", text: "Medical applications of nanotechnology have already replaced all conventional treatments." },
      { letter: "D", text: "Nanomaterials behave identically to their bulk counterparts." },
      { letter: "E", text: "International governance of nanotechnology has been successfully coordinated." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes nanotechnology's unique properties, discusses medical and environmental applications, addresses safety concerns, and examines governance challenges. Answer B captures this balanced treatment of promise and challenges.",
    wrongAnswerExplanations: {
      "A": "The passage presents concerns but does not advocate for banning nanotechnology.",
      "C": "The passage describes promising clinical trials, not complete replacement of conventional treatments.",
      "D": "The passage explicitly states that nanomaterials 'often exhibit properties radically different from their bulk counterparts.'",
      "E": "The passage states that international coordination 'is essential but difficult,' indicating it has not been successfully achieved."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p2",
  },
  {
    id: "rc-exp28-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, gold nanoparticles differ from bulk gold in that they",
    answerChoices: [
      { letter: "A", text: "are chemically identical in all respects" },
      { letter: "B", text: "appear different in color and can catalyze reactions that bulk gold cannot" },
      { letter: "C", text: "are more common in nature" },
      { letter: "D", text: "have fewer surface atoms relative to interior atoms" },
      { letter: "E", text: "cannot be used in medical applications" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Gold nanoparticles, for instance, appear red or purple rather than yellow, and can catalyze chemical reactions that bulk gold cannot.'",
    wrongAnswerExplanations: {
      "A": "The entire point is that nanomaterials differ significantly from bulk materials.",
      "C": "The passage does not discuss natural occurrence of gold nanoparticles.",
      "D": "The passage states the opposite: nanomaterials 'dramatically increase the ratio of surface atoms to interior atoms.'",
      "E": "The passage does not exclude gold nanoparticles from medical applications."
    },
    difficulty: "easy",
    passageId: "rc-exp28-p2",
  },
  {
    id: "rc-exp28-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the comparison of carbon nanotubes to asbestos fibers suggests that",
    answerChoices: [
      { letter: "A", text: "all nanomaterials are definitively proven to be dangerous" },
      { letter: "B", text: "the chemical identity of a material fully predicts its safety" },
      { letter: "C", text: "some nanomaterials may pose health risks, though the real-world significance remains uncertain" },
      { letter: "D", text: "asbestos is now considered completely safe" },
      { letter: "E", text: "carbon nanotubes should be immediately banned" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that certain carbon nanotubes 'can cause inflammatory responses similar to asbestos fibers, though the relevance of these findings to real-world exposures remains debated.' This indicates potential risks whose real-world significance is uncertain.",
    wrongAnswerExplanations: {
      "A": "The passage discusses 'certain carbon nanotubes,' not all nanomaterials, and notes the findings are debated.",
      "B": "The passage argues the opposite—that 'nanoscale versions of familiar chemicals may behave quite differently.'",
      "D": "The comparison implies asbestos is known to be harmful, which is why the similarity is concerning.",
      "E": "The passage does not call for a ban; it notes the findings are debated."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p2",
  },
  {
    id: "rc-exp28-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions iron oxide nanoparticles primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize environmental remediation efforts" },
      { letter: "B", text: "illustrate nanotechnology's effectiveness in removing water contaminants" },
      { letter: "C", text: "compare nanotechnology to conventional filtration" },
      { letter: "D", text: "argue that heavy metal contamination is not a serious problem" },
      { letter: "E", text: "explain the quantum mechanical effects at the nanoscale" },
    ],
    correctAnswer: "B",
    explanation: "Iron oxide nanoparticles are cited as an example showing that 'Nanomaterials have proven exceptionally effective at removing contaminants from water,' specifically capturing heavy metals 'with remarkable efficiency.'",
    wrongAnswerExplanations: {
      "A": "The example demonstrates effectiveness, not a critique of remediation efforts.",
      "C": "While conventional filtration is mentioned elsewhere, the iron oxide example focuses on demonstrating nanotechnology's capabilities.",
      "D": "The passage treats contamination as a real problem that nanotechnology can address.",
      "E": "Quantum effects are mentioned in the first paragraph, not in connection with the iron oxide example."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p2",
  },
  {
    id: "rc-exp28-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the governance of nanotechnology can best be described as",
    answerChoices: [
      { letter: "A", text: "confident that current regulations are adequate" },
      { letter: "B", text: "indifferent to regulatory questions" },
      { letter: "C", text: "concerned that governance has not kept pace with technological development" },
      { letter: "D", text: "dismissive of international cooperation" },
      { letter: "E", text: "opposed to any regulation of nanotechnology" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that 'rapid commercialization of nanomaterials has outpaced the development of comprehensive regulatory frameworks,' that existing categories 'may not adequately address nanomaterial risks,' and that international coordination 'is essential but difficult.' This indicates concern about regulatory lag.",
    wrongAnswerExplanations: {
      "A": "The passage explicitly states current regulations 'may not adequately address nanomaterial risks.'",
      "B": "The author devotes significant attention to governance challenges, indicating genuine concern.",
      "D": "The author states international coordination 'is essential,' not that it should be dismissed.",
      "E": "The passage suggests current regulation is inadequate, implying more or better regulation may be needed."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p2",
  },
  {
    id: "rc-exp28-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A technology is introduced, its applications are described, safety concerns are raised, and governance challenges are discussed." },
      { letter: "B", text: "A historical development is traced from origins to present day." },
      { letter: "C", text: "Two competing theories are presented and evaluated." },
      { letter: "D", text: "A problem is identified and a solution is proposed and defended." },
      { letter: "E", text: "A phenomenon is described, then dismissed as insignificant." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces nanotechnology and its unique properties (paragraph 1), discusses applications in medicine (2) and environment (3), addresses safety concerns (4), and examines governance challenges (5). This matches answer A.",
    wrongAnswerExplanations: {
      "B": "The passage is organized thematically, not chronologically.",
      "C": "The passage does not present competing theories but rather describes applications and concerns.",
      "D": "While problems are identified, no single solution is proposed and defended.",
      "E": "Nanotechnology is treated as highly significant throughout the passage."
    },
    difficulty: "hard",
    passageId: "rc-exp28-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - POETRY AND METER (PROSODY)
// ============================================

const passage3 = `Prosody—the study of metrical structure in poetry—reveals how rhythm organizes language into patterns that distinguish verse from prose. While prose uses natural speech rhythms, poetry imposes artificial regularities that create expectation and allow for meaningful deviation. Understanding prosody requires analyzing the interplay between abstract metrical patterns and the actual rhythms of spoken language, a tension that generates much of poetry's expressive power.

English prosody is fundamentally accentual-syllabic, meaning that metrical patterns depend on both the number of syllables per line and the arrangement of stressed and unstressed syllables. The basic unit is the foot, a recurring pattern of stresses. Iambic feet (unstressed-stressed, as in "away") dominate English poetry, likely because this pattern mirrors natural English speech tendencies. Iambic pentameter—five iambic feet per line—has been the prestige meter of English poetry since Chaucer, serving as the vehicle for Shakespeare's plays, Milton's epics, and countless sonnets.

The concept of metrical "tension" or "counterpoint" illuminates how skilled poets exploit the gap between abstract meter and actual speech rhythm. A metrically regular line like "The cur-few tolls the knell of part-ing day" (Gray's "Elegy") matches the abstract iambic pattern almost exactly. But poets frequently substitute feet—using a trochee (stressed-unstressed) where an iamb is expected, for instance—creating rhythmic variety within metrical regularity. Such substitutions are not errors but expressive choices that can emphasize particular words or create emotional effects.

The relationship between meter and meaning has generated extensive critical debate. Some scholars argue that meter is primarily formal, providing a framework of expectation against which variations register as significant. Others contend that particular metrical patterns carry inherent emotional associations—that trochaic rhythms suggest falling motion or finality, for example. Most contemporary prosodists adopt intermediate positions, acknowledging that while meter acquires meaning through convention and context rather than natural correspondence, these conventions are real and enable poets to communicate through rhythmic choices.

Modern and contemporary poetry has complicated traditional prosodic analysis. Free verse abandoned regular meter entirely, relying on other organizational principles such as breath units, syntactic parallelism, or visual arrangement on the page. Yet even free verse retains rhythmic qualities that reward prosodic attention. Some poets have returned to traditional forms, finding that the constraints of meter and rhyme generate creative possibilities rather than limitations. The ongoing vitality of both formal and free verse suggests that no single approach to poetic rhythm has proven definitively superior.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp28-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Free verse is superior to formal poetry." },
      { letter: "B", text: "Prosody analyzes how metrical patterns in poetry create meaning through the interplay of regularity and variation, with ongoing debates about form and contemporary developments." },
      { letter: "C", text: "Iambic pentameter is the only acceptable meter for English poetry." },
      { letter: "D", text: "All metrical substitutions are errors that poets should avoid." },
      { letter: "E", text: "Meter has no relationship to meaning in poetry." },
    ],
    correctAnswer: "B",
    explanation: "The passage explains prosody, discusses English metrical patterns and tension between meter and speech, examines debates about meter and meaning, and considers modern developments. Answer B captures this comprehensive treatment.",
    wrongAnswerExplanations: {
      "A": "The passage concludes that 'no single approach to poetic rhythm has proven definitively superior.'",
      "C": "While iambic pentameter is described as prestigious, other meters are discussed without being dismissed.",
      "D": "The passage explicitly states that substitutions 'are not errors but expressive choices.'",
      "E": "The passage discusses extensive critical debate about meter's relationship to meaning, not its absence."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p3",
  },
  {
    id: "rc-exp28-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, English prosody is described as 'accentual-syllabic' because",
    answerChoices: [
      { letter: "A", text: "it relies solely on the number of syllables" },
      { letter: "B", text: "it depends on both syllable count and the arrangement of stressed and unstressed syllables" },
      { letter: "C", text: "it ignores stress patterns entirely" },
      { letter: "D", text: "it was borrowed from Latin poetry" },
      { letter: "E", text: "it uses only trochaic feet" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that English prosody is 'accentual-syllabic, meaning that metrical patterns depend on both the number of syllables per line and the arrangement of stressed and unstressed syllables.'",
    wrongAnswerExplanations: {
      "A": "This captures only the 'syllabic' component; the 'accentual' component involves stress patterns.",
      "C": "The 'accentual' part of the term refers specifically to stress patterns.",
      "D": "The passage does not discuss Latin origins of English prosody.",
      "E": "The passage states iambic feet 'dominate English poetry,' not trochaic."
    },
    difficulty: "easy",
    passageId: "rc-exp28-p3",
  },
  {
    id: "rc-exp28-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, a poet who substitutes a trochee where an iamb is expected would most likely be",
    answerChoices: [
      { letter: "A", text: "making an error that damages the poem's quality" },
      { letter: "B", text: "making a deliberate expressive choice to create emphasis or emotional effect" },
      { letter: "C", text: "abandoning meter entirely for free verse" },
      { letter: "D", text: "following the rules of iambic pentameter strictly" },
      { letter: "E", text: "writing in a language other than English" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that when 'poets frequently substitute feet,' such 'substitutions are not errors but expressive choices that can emphasize particular words or create emotional effects.'",
    wrongAnswerExplanations: {
      "A": "The passage explicitly states substitutions 'are not errors.'",
      "C": "Metrical substitution operates within the metrical framework, not by abandoning it.",
      "D": "Substitution is by definition a deviation from strict adherence to the expected pattern.",
      "E": "The entire discussion concerns English poetry."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p3",
  },
  {
    id: "rc-exp28-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Gray's 'Elegy' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Gray was the greatest English poet" },
      { letter: "B", text: "provide an example of a line that closely matches the abstract iambic pattern" },
      { letter: "C", text: "criticize overly regular poetry" },
      { letter: "D", text: "compare Gray unfavorably to Shakespeare" },
      { letter: "E", text: "explain why free verse is superior to formal poetry" },
    ],
    correctAnswer: "B",
    explanation: "The Gray quotation is introduced as 'A metrically regular line' that 'matches the abstract iambic pattern almost exactly,' serving as an example of regularity before discussing variations.",
    wrongAnswerExplanations: {
      "A": "No comparative judgment about Gray's greatness is made.",
      "C": "The passage presents the regular line descriptively, not critically.",
      "D": "Shakespeare is mentioned in a different context without comparison to Gray.",
      "E": "Free verse is discussed later and not in connection to the Gray example."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p3",
  },
  {
    id: "rc-exp28-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the debate about whether meter carries inherent emotional associations can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of the view that meter has natural emotional meanings" },
      { letter: "B", text: "strongly dismissive of any connection between meter and meaning" },
      { letter: "C", text: "balanced, noting that most contemporary scholars take intermediate positions acknowledging conventional rather than natural meaning" },
      { letter: "D", text: "confused about the basic issues in the debate" },
      { letter: "E", text: "nostalgic for pre-modern approaches to prosody" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents scholars who argue meter is 'primarily formal' and others who contend meters carry 'inherent emotional associations,' then notes that 'Most contemporary prosodists adopt intermediate positions' acknowledging 'convention and context rather than natural correspondence.'",
    wrongAnswerExplanations: {
      "A": "The passage does not strongly endorse the 'inherent' view.",
      "B": "The passage notes that conventions 'are real and enable poets to communicate through rhythmic choices.'",
      "D": "The author explains the debate clearly and coherently.",
      "E": "No nostalgia for earlier approaches is expressed."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p3",
  },
  {
    id: "rc-exp28-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which one of the following poets would most likely agree with the view that metrical constraints generate creative possibilities?",
    answerChoices: [
      { letter: "A", text: "A poet who writes exclusively in free verse because meter limits expression" },
      { letter: "B", text: "A poet who has returned to sonnets after writing free verse, finding the form productive" },
      { letter: "C", text: "A poet who believes no organizational principles should govern poetry" },
      { letter: "D", text: "A poet who argues that all poetry should be written in prose" },
      { letter: "E", text: "A poet who rejects both formal and free verse" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Some poets have returned to traditional forms, finding that the constraints of meter and rhyme generate creative possibilities rather than limitations.' A poet returning to sonnets after free verse exemplifies this view.",
    wrongAnswerExplanations: {
      "A": "This poet views meter as limiting, the opposite of finding it generative.",
      "C": "The view in question values formal constraints, not their absence.",
      "D": "This would reject poetry's distinction from prose entirely.",
      "E": "The view discussed involves embracing formal constraints, not rejecting all approaches."
    },
    difficulty: "hard",
    passageId: "rc-exp28-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - HEALTHCARE ECONOMICS AND ACCESS
// ============================================

const passage4 = `Healthcare systems face a fundamental tension between three goals that prove difficult to achieve simultaneously: universal access, high quality, and cost containment. Most developed nations have accepted trade-offs, prioritizing universal coverage while managing costs through various rationing mechanisms. The United States has historically prioritized quality and choice for the insured while accepting limited access for a substantial uninsured population, resulting in the highest per capita healthcare spending among developed nations without correspondingly superior health outcomes.

The economics of healthcare differ fundamentally from standard market models in ways that complicate policy design. Information asymmetries pervade the system: patients typically cannot evaluate the quality or necessity of treatments, creating dependence on provider recommendations that may be influenced by financial incentives. The unpredictability of healthcare needs makes insurance essential, but insurance itself alters behavior—a phenomenon known as moral hazard. When patients pay little at the point of service, they may consume more care than they would if bearing full costs, driving up overall spending.

Market solutions to healthcare face additional structural obstacles. Emergency care cannot function as a normal market because patients in emergencies cannot shop for better prices or refuse service. The positive externalities of healthcare—a vaccinated population protects even the unvaccinated, and healthy workers benefit employers and the economy—suggest that purely private provision will underinvest in healthcare from society's perspective. These market failures provide the economic rationale for substantial government intervention in healthcare, though the optimal form and extent of intervention remains contested.

The Affordable Care Act of 2010 represented the most significant expansion of American healthcare coverage in decades, extending insurance to millions through Medicaid expansion and subsidized marketplace plans while imposing regulations on insurance markets. Yet the law left fundamental tensions unresolved. Costs continue rising faster than general inflation, and significant uninsured populations remain, particularly in states that declined Medicaid expansion. Critics from both left and right contend that the hybrid public-private system produces neither the efficiencies of markets nor the cost control of single-payer systems.

International comparisons reveal diverse approaches to healthcare organization. Single-payer systems, as in Canada and Taiwan, have government finance healthcare while private providers deliver services. National health services, as in the United Kingdom, combine public financing with public provision. Multi-payer systems, as in Germany and Switzerland, achieve universal coverage through regulated private insurance with individual mandates. Each approach involves distinctive trade-offs between access, quality, choice, and cost that reflect national values and historical circumstances as much as economic optimization.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp28-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "advocate for a single-payer healthcare system in the United States" },
      { letter: "B", text: "examine the economic complexities of healthcare systems, including market failures, policy approaches, and international variations" },
      { letter: "C", text: "argue that the Affordable Care Act completely solved American healthcare problems" },
      { letter: "D", text: "prove that healthcare should be treated as a normal market commodity" },
      { letter: "E", text: "compare American and British healthcare outcomes in detail" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses the fundamental tensions in healthcare policy, economic differences from normal markets, market failures justifying intervention, the ACA's partial solutions, and international approaches. Answer B captures this comprehensive examination.",
    wrongAnswerExplanations: {
      "A": "The passage describes single-payer systems but does not advocate for them in the US.",
      "C": "The passage explicitly states the ACA 'left fundamental tensions unresolved.'",
      "D": "The passage identifies multiple reasons healthcare differs from normal markets.",
      "E": "While international comparisons appear, detailed outcome comparisons between specific countries are not provided."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p4",
  },
  {
    id: "rc-exp28-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, moral hazard in healthcare refers to",
    answerChoices: [
      { letter: "A", text: "physicians recommending unnecessary treatments" },
      { letter: "B", text: "the tendency of insured patients to consume more care when they bear little cost at the point of service" },
      { letter: "C", text: "the ethical obligations of healthcare providers" },
      { letter: "D", text: "the risk of not having health insurance" },
      { letter: "E", text: "the danger of emergency room overcrowding" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that insurance 'alters behavior—a phenomenon known as moral hazard. When patients pay little at the point of service, they may consume more care than they would if bearing full costs.'",
    wrongAnswerExplanations: {
      "A": "This relates to information asymmetry and financial incentives, not moral hazard.",
      "C": "Moral hazard is an economic concept, not an ethical principle.",
      "D": "Moral hazard concerns behavior of the insured, not risks of being uninsured.",
      "E": "Emergency room issues are discussed separately from moral hazard."
    },
    difficulty: "easy",
    passageId: "rc-exp28-p4",
  },
  {
    id: "rc-exp28-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the author would most likely agree that emergency care",
    answerChoices: [
      { letter: "A", text: "should be subject to normal market competition" },
      { letter: "B", text: "demonstrates why healthcare cannot function entirely as a normal market" },
      { letter: "C", text: "is the most efficient sector of American healthcare" },
      { letter: "D", text: "should be eliminated to reduce costs" },
      { letter: "E", text: "proves that government intervention always fails" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Emergency care cannot function as a normal market because patients in emergencies cannot shop for better prices or refuse service.' This is cited as one of several 'market failures' justifying government intervention.",
    wrongAnswerExplanations: {
      "A": "The passage argues exactly the opposite—emergency care cannot function as a normal market.",
      "C": "Efficiency claims about emergency care are not made in the passage.",
      "D": "This extreme position is not suggested in the passage.",
      "E": "The passage uses market failures to justify intervention, not to criticize it."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p4",
  },
  {
    id: "rc-exp28-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions vaccination primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue against government vaccination programs" },
      { letter: "B", text: "illustrate positive externalities that suggest private provision will underinvest in healthcare" },
      { letter: "C", text: "compare American and European vaccination rates" },
      { letter: "D", text: "explain the mechanism of herd immunity in detail" },
      { letter: "E", text: "criticize patients who refuse vaccination" },
    ],
    correctAnswer: "B",
    explanation: "Vaccination is cited as an example of 'positive externalities'—'a vaccinated population protects even the unvaccinated'—which 'suggest that purely private provision will underinvest in healthcare from society's perspective.'",
    wrongAnswerExplanations: {
      "A": "The passage uses externalities to justify intervention, not argue against it.",
      "C": "No international vaccination rate comparisons appear in the passage.",
      "D": "The mechanism is mentioned briefly as an example, not explained in detail.",
      "E": "Vaccine refusal is not discussed in the passage."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p4",
  },
  {
    id: "rc-exp28-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the Affordable Care Act can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified enthusiasm for its complete success" },
      { letter: "B", text: "balanced recognition of its achievements while noting ongoing challenges and criticisms" },
      { letter: "C", text: "complete dismissal of any positive effects" },
      { letter: "D", text: "confusion about its basic provisions" },
      { letter: "E", text: "anger at its implementation" },
    ],
    correctAnswer: "B",
    explanation: "The author describes the ACA as 'the most significant expansion of American healthcare coverage in decades' that extended insurance to millions, but also notes it 'left fundamental tensions unresolved' with ongoing cost and coverage issues, and presents criticisms from both left and right.",
    wrongAnswerExplanations: {
      "A": "The passage explicitly notes unresolved problems and criticisms.",
      "C": "The passage acknowledges the law's expansion of coverage as significant.",
      "D": "The author explains the law's provisions clearly.",
      "E": "The tone is analytical, not emotional."
    },
    difficulty: "medium",
    passageId: "rc-exp28-p4",
  },
  {
    id: "rc-exp28-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the passage's claim that information asymmetries create problematic dependence on provider recommendations?",
    answerChoices: [
      { letter: "A", text: "Studies show that physicians frequently recommend treatments from which they profit financially." },
      { letter: "B", text: "Research demonstrates that patients with access to comprehensive medical information make treatment decisions equivalent in quality to physician recommendations." },
      { letter: "C", text: "Most patients report trusting their physicians completely." },
      { letter: "D", text: "Medical training programs have become more rigorous over time." },
      { letter: "E", text: "Healthcare spending continues to rise in most developed countries." },
    ],
    correctAnswer: "B",
    explanation: "The passage argues that patients 'typically cannot evaluate the quality or necessity of treatments, creating dependence on provider recommendations.' If research showed patients with good information could match physician decision quality, this would undermine the claim about problematic dependence stemming from information asymmetry.",
    wrongAnswerExplanations: {
      "A": "This would strengthen concerns about provider recommendations, not weaken them.",
      "C": "Patient trust does not address whether the dependence is problematic.",
      "D": "Physician training does not address patients' ability to evaluate treatments.",
      "E": "Spending trends do not directly address information asymmetry issues."
    },
    difficulty: "hard",
    passageId: "rc-exp28-p4",
  },
];

// Export all RC questions from Set 28
export const rcQuestionsExpSet28: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet28 = {
  passage1: { id: "rc-exp28-p1", content: passage1, topic: "law", title: "Religious Freedom and the Establishment Clause" },
  passage2: { id: "rc-exp28-p2", content: passage2, topic: "natural-sciences", title: "Nanotechnology Applications" },
  passage3: { id: "rc-exp28-p3", content: passage3, topic: "humanities", title: "Poetry and Meter (Prosody)" },
  passage4: { id: "rc-exp28-p4", content: passage4, topic: "social-sciences", title: "Healthcare Economics and Access" },
};
