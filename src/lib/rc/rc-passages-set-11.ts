// Reading Comprehension Expansion Set 11
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - ADMINISTRATIVE LAW
// ============================================

const passage1 = `The rise of the administrative state represents one of the most significant developments in twentieth-century American government. Federal agencies now exercise powers that were once the exclusive province of the three constitutional branches: they make rules with the force of law, adjudicate disputes, and enforce compliance. This concentration of functions within single agencies has generated persistent debates about constitutional legitimacy and democratic accountability.

The legal framework governing administrative agencies emerged primarily from the Administrative Procedure Act of 1946 (APA). The APA established procedures for agency rulemaking and adjudication, provided for judicial review of agency actions, and attempted to impose regularity on what had become an ad hoc accumulation of regulatory bodies. Under the APA, agencies must generally provide notice of proposed rules and opportunity for public comment before issuing binding regulations—a process known as notice-and-comment rulemaking.

Judicial review of agency action under the Chevron doctrine, established in 1984, has profoundly shaped administrative law. Under Chevron, courts defer to reasonable agency interpretations of ambiguous statutes that the agencies administer. The rationale is that agencies possess expertise that courts lack and that Congress implicitly delegates interpretive authority when it leaves statutory language unclear. This deference has been criticized by those who argue that courts abdicate their constitutional duty to say what the law is when they defer to agency interpretations.

Recent years have witnessed growing challenges to administrative power from multiple directions. The "major questions doctrine" restricts agency authority to address matters of vast economic and political significance without clear congressional authorization. The non-delegation doctrine, once thought dormant, has been revived by some judges who argue that Congress cannot constitutionally delegate legislative power to executive agencies. These developments reflect deeper concerns about the democratic legitimacy of an unelected bureaucracy wielding expansive power.

Defenders of administrative governance respond that modern complexity requires specialized expertise that generalist legislators and judges cannot provide. Environmental regulation, financial markets, and pharmaceutical safety demand technical knowledge and flexible responses that rulemaking agencies can deliver more effectively than congressional legislation. The question of how to reconcile administrative expertise with democratic accountability remains central to constitutional governance.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp11-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Administrative Procedure Act of 1946 completely resolved debates about administrative power." },
      { letter: "B", text: "The administrative state has grown significantly, raising persistent questions about constitutional legitimacy and accountability that remain unresolved." },
      { letter: "C", text: "The Chevron doctrine should be immediately abolished." },
      { letter: "D", text: "Federal agencies should have no rulemaking authority." },
      { letter: "E", text: "The non-delegation doctrine has been definitively rejected by the courts." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the rise of administrative agencies, their legal framework, debates about Chevron deference, recent challenges, and defenders' responses. Answer B captures this focus on growth and ongoing legitimacy questions.",
    difficulty: "medium",
    passageId: "rc-exp11-p1",
  },
  {
    id: "rc-exp11-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Chevron doctrine requires courts to",
    answerChoices: [
      { letter: "A", text: "always reject agency interpretations of statutes" },
      { letter: "B", text: "defer to reasonable agency interpretations of ambiguous statutes" },
      { letter: "C", text: "defer to Congress on all statutory questions" },
      { letter: "D", text: "ignore agency expertise when reviewing regulations" },
      { letter: "E", text: "apply strict scrutiny to all agency actions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Under Chevron, courts defer to reasonable agency interpretations of ambiguous statutes that the agencies administer.'",
    difficulty: "easy",
    passageId: "rc-exp11-p1",
  },
  {
    id: "rc-exp11-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of Chevron deference would most likely argue that",
    answerChoices: [
      { letter: "A", text: "agencies always interpret statutes correctly" },
      { letter: "B", text: "courts fail to fulfill their constitutional duty when deferring to agencies" },
      { letter: "C", text: "Congress should delegate more power to agencies" },
      { letter: "D", text: "the APA should be repealed" },
      { letter: "E", text: "notice-and-comment rulemaking is too burdensome" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Chevron deference 'has been criticized by those who argue that courts abdicate their constitutional duty to say what the law is when they defer to agency interpretations.'",
    difficulty: "medium",
    passageId: "rc-exp11-p1",
  },
  {
    id: "rc-exp11-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions environmental regulation, financial markets, and pharmaceutical safety primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize agency failures in these areas" },
      { letter: "B", text: "illustrate domains where defenders argue specialized expertise is necessary" },
      { letter: "C", text: "argue that Congress should directly regulate these areas" },
      { letter: "D", text: "compare American and European regulatory approaches" },
      { letter: "E", text: "explain the origins of the APA" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph defending administrative governance, illustrating areas that 'demand technical knowledge and flexible responses that rulemaking agencies can deliver more effectively than congressional legislation.'",
    difficulty: "medium",
    passageId: "rc-exp11-p1",
  },
  {
    id: "rc-exp11-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that the major questions doctrine would prevent agencies from",
    answerChoices: [
      { letter: "A", text: "engaging in any rulemaking activity" },
      { letter: "B", text: "addressing significant matters without clear congressional authorization" },
      { letter: "C", text: "following notice-and-comment procedures" },
      { letter: "D", text: "employing technical experts" },
      { letter: "E", text: "adjudicating disputes between private parties" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'The major questions doctrine restricts agency authority to address matters of vast economic and political significance without clear congressional authorization.'",
    difficulty: "medium",
    passageId: "rc-exp11-p1",
  },
  {
    id: "rc-exp11-006",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debates about administrative power can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of abolishing all agencies" },
      { letter: "B", text: "dismissive of constitutional concerns" },
      { letter: "C", text: "analytically balanced, presenting multiple perspectives without advocating for one" },
      { letter: "D", text: "nostalgic for pre-APA governance" },
      { letter: "E", text: "enthusiastically supportive of expanded agency power" },
    ],
    correctAnswer: "C",
    explanation: "The author presents challenges to administrative power, defenders' responses, and notes that reconciling expertise with accountability 'remains central to constitutional governance' without advocating for a particular resolution.",
    difficulty: "medium",
    passageId: "rc-exp11-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - MARINE BIOLOGY
// ============================================

const passage2 = `Coral reefs, often called the rainforests of the sea, harbor approximately one-quarter of all marine species despite covering less than one percent of the ocean floor. These extraordinary ecosystems depend on a symbiotic relationship between coral animals and photosynthetic algae called zooxanthellae. The algae live within coral tissue, providing up to ninety percent of the coral's energy needs through photosynthesis while receiving nutrients and a protected environment in return. This partnership underlies the entire reef ecosystem's productivity.

Climate change poses an existential threat to coral reefs worldwide. When water temperatures rise above normal levels for extended periods, corals expel their symbiotic algae—a phenomenon known as coral bleaching. Without their zooxanthellae partners, corals lose their primary energy source and their characteristic colors, appearing white or "bleached." If elevated temperatures persist, bleached corals starve and die. Mass bleaching events have become increasingly frequent and severe, with the Great Barrier Reef experiencing unprecedented back-to-back bleaching in 2016 and 2017.

Ocean acidification compounds the thermal stress. As oceans absorb atmospheric carbon dioxide, seawater becomes more acidic. This chemical change reduces the availability of carbonate ions that corals need to build their calcium carbonate skeletons. Laboratory studies indicate that many coral species grow more slowly under acidified conditions and produce weaker, more porous skeletons. The combination of rising temperatures and acidification creates a one-two punch that may push many reefs past tipping points from which recovery is impossible.

Some researchers have begun exploring "assisted evolution" strategies to develop heat-resistant corals. These approaches include selectively breeding corals that survive bleaching events, transplanting zooxanthellae from heat-tolerant populations, and even genetic modification. Critics worry that such interventions treat symptoms rather than causes and may have unintended ecological consequences. Moreover, if emissions continue unabated, even heat-tolerant corals may eventually be overwhelmed.

The fate of coral reefs carries implications far beyond marine biodiversity. Hundreds of millions of people depend on reef fisheries for food and income. Reefs protect coastlines from storm damage and erosion. Their potential pharmaceutical value remains largely unexplored. The loss of coral reefs would represent not merely an ecological tragedy but a profound economic and cultural catastrophe for coastal communities worldwide.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp11-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Coral reefs are threatened by climate change and ocean acidification, with potentially devastating ecological and human consequences despite emerging intervention strategies." },
      { letter: "B", text: "Zooxanthellae are the most important organisms in the ocean." },
      { letter: "C", text: "Assisted evolution will definitely save coral reefs from extinction." },
      { letter: "D", text: "The Great Barrier Reef has already been completely destroyed." },
      { letter: "E", text: "Ocean acidification is unrelated to coral reef decline." },
    ],
    correctAnswer: "A",
    explanation: "The passage describes the coral-algae symbiosis, threats from warming and acidification, intervention efforts and their limitations, and broader consequences. Answer A captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp11-p2",
  },
  {
    id: "rc-exp11-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, coral bleaching occurs when",
    answerChoices: [
      { letter: "A", text: "corals produce too much calcium carbonate" },
      { letter: "B", text: "corals expel their symbiotic algae due to elevated water temperatures" },
      { letter: "C", text: "ocean acidification dissolves coral skeletons" },
      { letter: "D", text: "fisheries overharvest reef fish populations" },
      { letter: "E", text: "corals absorb too many zooxanthellae" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'When water temperatures rise above normal levels for extended periods, corals expel their symbiotic algae—a phenomenon known as coral bleaching.'",
    difficulty: "easy",
    passageId: "rc-exp11-p2",
  },
  {
    id: "rc-exp11-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics of assisted evolution strategies would most likely argue that",
    answerChoices: [
      { letter: "A", text: "all intervention in natural systems is beneficial" },
      { letter: "B", text: "such approaches may not address underlying causes and could have unforeseen effects" },
      { letter: "C", text: "genetic modification always produces desired outcomes" },
      { letter: "D", text: "selective breeding is impossible for marine organisms" },
      { letter: "E", text: "coral reefs have no ecological value worth preserving" },
    ],
    correctAnswer: "B",
    explanation: "The passage states critics 'worry that such interventions treat symptoms rather than causes and may have unintended ecological consequences.'",
    difficulty: "medium",
    passageId: "rc-exp11-p2",
  },
  {
    id: "rc-exp11-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions the 2016 and 2017 bleaching events at the Great Barrier Reef primarily in order to",
    answerChoices: [
      { letter: "A", text: "praise Australian conservation efforts" },
      { letter: "B", text: "illustrate the increasing frequency and severity of mass bleaching events" },
      { letter: "C", text: "argue that the Great Barrier Reef is the most important reef system" },
      { letter: "D", text: "compare Australian and Caribbean reef systems" },
      { letter: "E", text: "explain the chemistry of ocean acidification" },
    ],
    correctAnswer: "B",
    explanation: "These events are mentioned as examples of how 'Mass bleaching events have become increasingly frequent and severe,' with the Great Barrier Reef experiencing 'unprecedented back-to-back bleaching.'",
    difficulty: "medium",
    passageId: "rc-exp11-p2",
  },
  {
    id: "rc-exp11-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that the relationship between corals and zooxanthellae is best characterized as",
    answerChoices: [
      { letter: "A", text: "parasitic, with zooxanthellae harming the coral" },
      { letter: "B", text: "mutually beneficial, with each partner providing something the other needs" },
      { letter: "C", text: "competitive, with each organism seeking dominance" },
      { letter: "D", text: "one-sided, benefiting only the coral" },
      { letter: "E", text: "temporary and unstable" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the relationship as 'symbiotic': algae provide 'up to ninety percent of the coral's energy needs' while 'receiving nutrients and a protected environment in return.' This is clearly mutually beneficial.",
    difficulty: "medium",
    passageId: "rc-exp11-p2",
  },
  {
    id: "rc-exp11-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the author's claim about the broader implications of reef loss?",
    answerChoices: [
      { letter: "A", text: "Most pharmaceutical compounds come from terrestrial plants." },
      { letter: "B", text: "A study found that communities near damaged reefs experienced significant declines in fish catches and tourism revenue." },
      { letter: "C", text: "Coral reefs are expanding in some polar regions." },
      { letter: "D", text: "Alternative coastal protection methods are equally effective and less expensive." },
      { letter: "E", text: "Most coastal communities have already adapted to reef loss." },
    ],
    correctAnswer: "B",
    explanation: "The author argues reef loss would cause 'profound economic and cultural catastrophe for coastal communities.' Evidence of actual declines in fish catches and tourism following reef damage would directly support this claim.",
    difficulty: "hard",
    passageId: "rc-exp11-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - THEATER
// ============================================

const passage3 = `The emergence of realism in late nineteenth-century European theater marked a decisive break with the romantic and melodramatic conventions that had dominated the stage. Playwrights like Henrik Ibsen, August Strindberg, and Anton Chekhov sought to represent ordinary life with unprecedented fidelity, addressing social problems and psychological complexities that earlier drama had avoided or sentimentalized. The realistic stage became a laboratory for exploring the forces—heredity, environment, social convention—that shaped human behavior.

Ibsen's contribution to theatrical realism was both technical and thematic. His "well-made plays" employed careful exposition, rising action, and climactic revelations while abandoning the improbable coincidences and obvious moralizing of melodrama. More importantly, Ibsen confronted controversial subjects—women's subordination in marriage, hereditary disease, religious hypocrisy—that scandalized contemporary audiences. "A Doll's House" (1879), in which Nora leaves her husband and children to pursue self-realization, provoked outrage and debate across Europe, establishing theater as a forum for social criticism.

The naturalist movement pushed realism's premises further. Émile Zola and his followers believed that drama should apply scientific methods to human behavior, showing characters determined by biological and environmental forces beyond their control. Naturalist plays often depicted sordid conditions and degraded characters, stripping away romantic illusions to reveal life's harsh realities. This deterministic vision challenged the traditional dramatic assumption that characters choose their fates and bear moral responsibility for their actions.

Chekhov's approach to realism departed from both Ibsen's social problem plays and Zola's naturalist determinism. His major dramas—"The Seagull," "Uncle Vanya," "Three Sisters," "The Cherry Orchard"—present characters adrift in a changing world, unable to act decisively or communicate meaningfully. Rather than building toward climactic confrontations, Chekhov's plays create mood through accumulation of detail, indirection, and subtext. What characters cannot or will not say often matters more than what they express directly. This technique influenced much of twentieth-century drama.

The legacy of theatrical realism extends far beyond its late nineteenth-century origins. Realist assumptions about character psychology, social context, and authentic dialogue continue to shape mainstream theater, film, and television. Yet realism has also generated reactions: expressionism, absurdism, and postmodern theater have all defined themselves partly against realism's conventions. The ongoing dialogue between realism and its alternatives remains central to contemporary dramatic practice.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp11-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Ibsen was the only important playwright in the history of theater." },
      { letter: "B", text: "Theatrical realism emerged in the late nineteenth century through various approaches to representing ordinary life, and its influence continues while also generating reactions." },
      { letter: "C", text: "Naturalism completely replaced all other forms of drama." },
      { letter: "D", text: "Chekhov's plays are too subtle for modern audiences." },
      { letter: "E", text: "Realism should be abandoned in favor of expressionism." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces realism's emergence, examines Ibsen, naturalism, and Chekhov, and discusses realism's continuing influence and the reactions it has generated. Answer B captures this trajectory.",
    difficulty: "medium",
    passageId: "rc-exp11-p3",
  },
  {
    id: "rc-exp11-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, naturalism differed from earlier realism in that it",
    answerChoices: [
      { letter: "A", text: "avoided controversial subjects" },
      { letter: "B", text: "showed characters as determined by biological and environmental forces" },
      { letter: "C", text: "emphasized romantic illusions" },
      { letter: "D", text: "focused exclusively on upper-class characters" },
      { letter: "E", text: "rejected scientific methods" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that naturalists believed 'drama should apply scientific methods to human behavior, showing characters determined by biological and environmental forces beyond their control.'",
    difficulty: "easy",
    passageId: "rc-exp11-p3",
  },
  {
    id: "rc-exp11-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, audiences' outrage at 'A Doll's House' most likely stemmed from",
    answerChoices: [
      { letter: "A", text: "the play's technical incompetence" },
      { letter: "B", text: "its challenge to conventional expectations about women and marriage" },
      { letter: "C", text: "its failure to address social issues" },
      { letter: "D", text: "its reliance on melodramatic coincidences" },
      { letter: "E", text: "Ibsen's refusal to write in Norwegian" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes Ibsen 'confronted controversial subjects—women's subordination in marriage' and that in the play 'Nora leaves her husband and children to pursue self-realization,' which 'provoked outrage.' The content challenged social conventions.",
    difficulty: "medium",
    passageId: "rc-exp11-p3",
  },
  {
    id: "rc-exp11-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions expressionism, absurdism, and postmodern theater primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these movements failed artistically" },
      { letter: "B", text: "illustrate how other movements have defined themselves partly against realism" },
      { letter: "C", text: "claim that realism is obsolete" },
      { letter: "D", text: "compare nineteenth and twentieth-century audiences" },
      { letter: "E", text: "explain the origins of naturalism" },
    ],
    correctAnswer: "B",
    explanation: "These movements are mentioned to show that 'realism has also generated reactions' and that these movements 'have all defined themselves partly against realism's conventions.'",
    difficulty: "medium",
    passageId: "rc-exp11-p3",
  },
  {
    id: "rc-exp11-017",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that Chekhov's dramatic technique was distinctive because it",
    answerChoices: [
      { letter: "A", text: "relied heavily on spectacular action sequences" },
      { letter: "B", text: "emphasized mood, indirection, and what characters leave unsaid" },
      { letter: "C", text: "followed Zola's naturalist principles exactly" },
      { letter: "D", text: "returned to romantic conventions" },
      { letter: "E", text: "eliminated all dialogue from drama" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Chekhov's plays as creating 'mood through accumulation of detail, indirection, and subtext' where 'What characters cannot or will not say often matters more than what they express directly.'",
    difficulty: "medium",
    passageId: "rc-exp11-p3",
  },
  {
    id: "rc-exp11-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A movement is introduced, key figures and variations are discussed, and the movement's continuing influence is described." },
      { letter: "B", text: "A theory is proposed, experiments test it, and the theory is confirmed." },
      { letter: "C", text: "Two playwrights are compared and one is declared superior." },
      { letter: "D", text: "A problem is identified and solutions are evaluated." },
      { letter: "E", text: "A chronological history from ancient to modern theater is traced." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces theatrical realism, discusses Ibsen, naturalism, and Chekhov as variations, and concludes with realism's continuing influence and reactions to it.",
    difficulty: "hard",
    passageId: "rc-exp11-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - LINGUISTICS
// ============================================

const passage4 = `The Sapir-Whorf hypothesis, named after linguists Edward Sapir and Benjamin Lee Whorf, proposes that the structure of a language influences the cognition and worldview of its speakers. In its strong form, called linguistic determinism, the hypothesis holds that language determines thought—that speakers of different languages literally perceive and conceptualize reality differently. The weak form, linguistic relativity, suggests that language influences thought without completely determining it. Both versions remain controversial after decades of debate.

Whorf's research on the Hopi language of Arizona provided classic evidence for the hypothesis. He argued that Hopi lacks tenses in the European sense, instead categorizing events by their mode of being—manifested, manifesting, or unmanifest. This linguistic structure, Whorf claimed, led Hopi speakers to conceptualize time fundamentally differently from English speakers, who divide events into past, present, and future. Critics later challenged Whorf's Hopi analysis, arguing that he overstated the differences and understated the evidence for temporal concepts in Hopi.

Contemporary research has largely rejected strong linguistic determinism but found support for weaker versions of linguistic relativity. Studies of color perception provide illustrative examples. While all humans possess the same visual apparatus, languages carve up the color spectrum differently. Russian, for instance, distinguishes between light blue (goluboy) and dark blue (siniy) as basic color categories rather than shades of a single color. Experiments have shown that Russian speakers detect differences between these blues more quickly than English speakers, suggesting that linguistic categories facilitate perceptual discrimination.

Spatial cognition offers another domain where linguistic influence appears significant. Some languages, like Kuuk Thaayorre spoken in Australia, use absolute directions (north, south, east, west) rather than relative terms (left, right, front, back) for all spatial descriptions. Speakers of such languages maintain remarkable awareness of cardinal directions and perform better than English speakers on certain spatial reasoning tasks. This suggests that habitual language use shapes cognitive habits, even if language does not absolutely determine thought.

The practical implications of linguistic relativity extend to language education, translation, and cross-cultural communication. If different languages encourage different cognitive patterns, bilingualism may offer cognitive advantages by providing multiple frameworks for understanding experience. Understanding how language shapes thought can also improve translation by highlighting concepts that may not transfer easily between languages.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp11-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "prove that the strong Sapir-Whorf hypothesis is correct" },
      { letter: "B", text: "examine the Sapir-Whorf hypothesis, its historical development, contemporary evidence, and practical implications" },
      { letter: "C", text: "argue that all languages are fundamentally identical" },
      { letter: "D", text: "criticize Whorf's research methodology" },
      { letter: "E", text: "explain why translation is impossible between languages" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the hypothesis in strong and weak forms, examines Whorf's original research and criticisms, reviews contemporary evidence from color and spatial cognition, and discusses practical implications. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp11-p4",
  },
  {
    id: "rc-exp11-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the difference between linguistic determinism and linguistic relativity is that",
    answerChoices: [
      { letter: "A", text: "determinism claims language determines thought while relativity suggests language influences without determining thought" },
      { letter: "B", text: "determinism applies only to written language while relativity applies to spoken language" },
      { letter: "C", text: "determinism was proposed by Sapir while relativity was proposed by Whorf" },
      { letter: "D", text: "determinism has been proven true while relativity has been disproven" },
      { letter: "E", text: "there is no meaningful difference between the two concepts" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that linguistic determinism 'holds that language determines thought' while linguistic relativity 'suggests that language influences thought without completely determining it.'",
    difficulty: "easy",
    passageId: "rc-exp11-p4",
  },
  {
    id: "rc-exp11-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the color perception studies mentioned suggest that",
    answerChoices: [
      { letter: "A", text: "Russian speakers have different visual systems than English speakers" },
      { letter: "B", text: "linguistic categories can affect how quickly speakers discriminate between colors" },
      { letter: "C", text: "English has more color terms than Russian" },
      { letter: "D", text: "language has no effect on perception" },
      { letter: "E", text: "all languages divide the color spectrum identically" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Russian speakers detect differences between these blues more quickly than English speakers, suggesting that linguistic categories facilitate perceptual discrimination.'",
    difficulty: "medium",
    passageId: "rc-exp11-p4",
  },
  {
    id: "rc-exp11-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions Kuuk Thaayorre primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Australian languages are superior to European languages" },
      { letter: "B", text: "provide evidence that linguistic differences correlate with differences in spatial cognition" },
      { letter: "C", text: "criticize Whorf's research on Hopi" },
      { letter: "D", text: "explain the origins of the Sapir-Whorf hypothesis" },
      { letter: "E", text: "demonstrate that translation is always accurate" },
    ],
    correctAnswer: "B",
    explanation: "Kuuk Thaayorre is cited as a language that uses absolute directions, and speakers 'maintain remarkable awareness of cardinal directions and perform better than English speakers on certain spatial reasoning tasks.' This provides evidence for linguistic influence on cognition.",
    difficulty: "medium",
    passageId: "rc-exp11-p4",
  },
  {
    id: "rc-exp11-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that contemporary researchers have concluded that",
    answerChoices: [
      { letter: "A", text: "language has no influence whatsoever on thought" },
      { letter: "B", text: "language completely determines thought" },
      { letter: "C", text: "language influences thought in measurable ways without completely determining it" },
      { letter: "D", text: "the Sapir-Whorf hypothesis should be entirely abandoned" },
      { letter: "E", text: "Whorf's analysis of Hopi was completely accurate" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Contemporary research has largely rejected strong linguistic determinism but found support for weaker versions of linguistic relativity,' and concludes that 'language use shapes cognitive habits, even if language does not absolutely determine thought.'",
    difficulty: "medium",
    passageId: "rc-exp11-p4",
  },
  {
    id: "rc-exp11-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the Sapir-Whorf hypothesis can best be described as",
    answerChoices: [
      { letter: "A", text: "completely dismissive of all versions" },
      { letter: "B", text: "uncritically accepting of the strong version" },
      { letter: "C", text: "balanced, noting that evidence supports weaker versions while the strong version has been rejected" },
      { letter: "D", text: "confused about the basic concepts" },
      { letter: "E", text: "hostile to all linguistic research" },
    ],
    correctAnswer: "C",
    explanation: "The author presents contemporary research as rejecting strong determinism while finding support for weaker relativity, and notes practical implications. This reflects a balanced, nuanced assessment rather than complete acceptance or rejection.",
    difficulty: "medium",
    passageId: "rc-exp11-p4",
  },
];

// Export all RC questions from Set 11
export const rcQuestionsExpSet11: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet11 = {
  passage1: { id: "rc-exp11-p1", content: passage1, topic: "law", title: "The Administrative State" },
  passage2: { id: "rc-exp11-p2", content: passage2, topic: "natural-sciences", title: "Coral Reef Ecosystems" },
  passage3: { id: "rc-exp11-p3", content: passage3, topic: "humanities", title: "Theatrical Realism" },
  passage4: { id: "rc-exp11-p4", content: passage4, topic: "social-sciences", title: "The Sapir-Whorf Hypothesis" },
};
