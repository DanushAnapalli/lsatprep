// Reading Comprehension Expansion Set 37
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - TAX LAW PRINCIPLES AND POLICY
// ============================================

const passage1 = `Tax law occupies a peculiar position within the legal system, serving simultaneously as an instrument of revenue collection, a tool of social engineering, and an expression of fundamental political values. The principle of horizontal equity—that similarly situated taxpayers should bear similar tax burdens—provides a foundational norm, yet its application proves contentious when legislators must determine what makes taxpayers "similarly situated." Two individuals with identical incomes may face vastly different circumstances: one supporting dependents, another paying medical expenses, a third contributing to retirement savings. Whether such differences warrant differential tax treatment reflects contested judgments about social priorities.

The distinction between tax avoidance and tax evasion captures a central tension in tax administration. Tax evasion—the illegal failure to report income or the claiming of fraudulent deductions—violates legal obligations and carries criminal penalties. Tax avoidance, by contrast, involves legally minimizing tax liability through careful planning and exploitation of provisions that Congress intentionally or inadvertently created. Courts have consistently affirmed taxpayers' right to arrange their affairs to minimize taxes, yet aggressive avoidance strategies that comply with the letter of the law while flouting its spirit generate recurring legislative and judicial responses.

The economic substance doctrine represents one such response. Under this judicially developed principle, transactions lacking genuine economic purpose apart from tax benefits may be disregarded for tax purposes. A taxpayer who engages in a circular transaction—selling an asset and immediately repurchasing it to generate a tax loss without any real change in economic position—may find the loss disallowed despite technical compliance with relevant statutory provisions. Critics argue that the doctrine creates uncertainty by imposing judicial assessments of legislative intent; defenders respond that it prevents abuse of provisions Congress never intended to create.

Progressive taxation, whereby tax rates increase with income, reflects the ability-to-pay principle: those with greater resources can more easily bear tax burdens without sacrificing necessities. Yet progressive rates generate both efficiency and fairness debates. Economically, high marginal rates may discourage work, savings, and investment, though the magnitude of these effects remains empirically contested. Philosophically, progressivity implicates competing conceptions of just distribution—some viewing steeply graduated rates as essential redistribution, others as punitive confiscation of legitimately earned income.

The tax expenditure concept has transformed how policymakers analyze tax provisions. Tax expenditures are revenue losses attributable to provisions that deviate from a normative baseline tax structure—deductions, credits, and exclusions that subsidize particular activities or taxpayers. The mortgage interest deduction, for instance, functions as a housing subsidy delivered through the tax code rather than through direct spending. Analyzing such provisions as expenditures subjects them to the same scrutiny applied to direct spending programs, revealing their distributive consequences and opportunity costs. Whether a given provision represents a legitimate structural feature or a disguised subsidy requiring justification depends on contested views about what the baseline should be.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp37-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Tax evasion is a serious criminal offense that undermines government revenue and should be prosecuted more aggressively." },
      { letter: "B", text: "Tax law involves fundamental principles and policy choices that reflect contested values about equity, economic incentives, and the proper role of government intervention." },
      { letter: "C", text: "The economic substance doctrine has successfully eliminated all abusive tax avoidance strategies." },
      { letter: "D", text: "Progressive taxation is economically inefficient and should be replaced with flat tax rates." },
      { letter: "E", text: "Tax expenditure analysis demonstrates that the mortgage interest deduction should be immediately repealed." },
    ],
    correctAnswer: "B",
    explanation: "The passage explores multiple dimensions of tax law: horizontal equity, the avoidance/evasion distinction, the economic substance doctrine, progressive taxation debates, and tax expenditure analysis. Throughout, the author emphasizes that these issues involve 'contested judgments' and 'competing conceptions.' Answer B captures this overarching theme of tax law reflecting contested values and policy choices.",
    difficulty: "medium",
    passageId: "rc-exp37-p1",
  },
  {
    id: "rc-exp37-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the economic substance doctrine allows courts to",
    answerChoices: [
      { letter: "A", text: "impose criminal penalties on taxpayers who engage in illegal evasion" },
      { letter: "B", text: "disregard transactions that lack genuine economic purpose apart from tax benefits" },
      { letter: "C", text: "increase tax rates on high-income taxpayers beyond statutory limits" },
      { letter: "D", text: "eliminate all deductions from the tax code" },
      { letter: "E", text: "create new tax expenditures without congressional authorization" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that under the economic substance doctrine, 'transactions lacking genuine economic purpose apart from tax benefits may be disregarded for tax purposes.' The circular transaction example illustrates this principle in action.",
    difficulty: "easy",
    passageId: "rc-exp37-p1",
  },
  {
    id: "rc-exp37-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, a critic of the economic substance doctrine would most likely argue that",
    answerChoices: [
      { letter: "A", text: "taxpayers should never be permitted to minimize their tax liabilities" },
      { letter: "B", text: "circular transactions always generate legitimate tax losses" },
      { letter: "C", text: "the doctrine introduces uncertainty by requiring judges to assess what Congress intended" },
      { letter: "D", text: "Congress should codify even more aggressive anti-avoidance rules" },
      { letter: "E", text: "horizontal equity is an outdated principle" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Critics argue that the doctrine creates uncertainty by imposing judicial assessments of legislative intent.' This criticism focuses on the indeterminacy created when judges must evaluate whether transactions satisfy an amorphous purpose standard.",
    difficulty: "medium",
    passageId: "rc-exp37-p1",
  },
  {
    id: "rc-exp37-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the mortgage interest deduction primarily in order to",
    answerChoices: [
      { letter: "A", text: "advocate for its immediate elimination from the tax code" },
      { letter: "B", text: "illustrate how tax expenditure analysis reframes certain provisions as subsidies" },
      { letter: "C", text: "demonstrate that homeownership should not be encouraged through policy" },
      { letter: "D", text: "compare American and European approaches to housing policy" },
      { letter: "E", text: "explain the historical origins of progressive taxation" },
    ],
    correctAnswer: "B",
    explanation: "The mortgage interest deduction is introduced as an example of a tax expenditure—a provision that 'functions as a housing subsidy delivered through the tax code rather than through direct spending.' The author uses it to illustrate the tax expenditure concept, not to advocate for or against the deduction itself.",
    difficulty: "medium",
    passageId: "rc-exp37-p1",
  },
  {
    id: "rc-exp37-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debates surrounding progressive taxation can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of eliminating all progressive elements" },
      { letter: "B", text: "dismissive of economic concerns about high marginal rates" },
      { letter: "C", text: "analytically even-handed, presenting competing efficiency and fairness arguments without endorsing either side" },
      { letter: "D", text: "enthusiastic about redistributive taxation as essential to justice" },
      { letter: "E", text: "contemptuous of philosophical debates about distribution" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both sides of the progressivity debate: efficiency concerns about discouraging work and investment, fairness arguments about ability to pay, and competing philosophical views about 'essential redistribution' versus 'punitive confiscation.' The author notes the empirical effects 'remain empirically contested' rather than declaring one view correct.",
    difficulty: "medium",
    passageId: "rc-exp37-p1",
  },
  {
    id: "rc-exp37-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most weaken the argument that tax expenditure analysis should subject provisions like the mortgage interest deduction to the same scrutiny as direct spending?",
    answerChoices: [
      { letter: "A", text: "The mortgage interest deduction disproportionately benefits higher-income taxpayers who itemize deductions." },
      { letter: "B", text: "There is no principled way to define a 'normative baseline' tax structure from which deviations can be measured, making the concept of tax expenditures inherently arbitrary." },
      { letter: "C", text: "Direct spending programs are often inefficient and poorly targeted." },
      { letter: "D", text: "Many taxpayers are unaware of the tax benefits they receive." },
      { letter: "E", text: "Congressional committees that oversee tax policy have different priorities than those overseeing spending programs." },
    ],
    correctAnswer: "B",
    explanation: "The tax expenditure framework depends on identifying deviations from a 'normative baseline tax structure.' If there is no principled way to define this baseline, the entire analytical framework becomes arbitrary. The passage itself acknowledges this vulnerability when it notes that 'Whether a given provision represents a legitimate structural feature or a disguised subsidy requiring justification depends on contested views about what the baseline should be.'",
    difficulty: "hard",
    passageId: "rc-exp37-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - VIROLOGY AND VIRAL EVOLUTION
// ============================================

const passage2 = `Viruses occupy an ambiguous position in biology—replicating entities that lack the cellular machinery necessary for independent metabolism. Whether viruses qualify as "living" depends on definitional choices that remain philosophically contested, yet their evolutionary dynamics display the hallmarks of Darwinian processes: variation, differential reproduction, and heritable change. Understanding viral evolution has become critically important as novel pathogens emerge and established ones develop resistance to antiviral therapies.

RNA viruses, including influenza, HIV, and coronaviruses, evolve at extraordinarily rapid rates compared to DNA-based organisms. This accelerated evolution stems from the error-prone nature of viral RNA polymerases, which lack the proofreading mechanisms that DNA polymerases employ. Whereas cellular DNA replication produces roughly one error per billion nucleotides copied, RNA viral replication may generate one error per ten thousand nucleotides—a millionfold difference. This high mutation rate produces swarms of genetic variants within infected hosts, providing raw material for natural selection to act upon.

The concept of viral quasispecies captures this population-level complexity. Rather than existing as uniform clonal populations, RNA virus populations comprise clouds of closely related but genetically distinct variants. Selection acts not merely on individual genotypes but on the entire mutant distribution, which can shift rapidly in response to environmental pressures such as immune responses or antiviral drugs. A quasispecies may contain minority variants pre-adapted to new conditions; when conditions change, these previously rare variants can quickly dominate the population. This reservoir of latent diversity complicates both treatment and vaccine development.

Antigenic drift and antigenic shift represent distinct evolutionary strategies that influenza viruses employ to evade host immunity. Antigenic drift involves gradual accumulation of point mutations in surface proteins, particularly hemagglutinin, that slowly erode the effectiveness of antibodies generated against previous strains. This process necessitates annual reformulation of seasonal influenza vaccines. Antigenic shift, by contrast, involves wholesale reassortment of genomic segments when two different influenza strains co-infect the same cell, potentially producing novel combinations with pandemic potential. The 2009 H1N1 pandemic emerged through such reassortment events involving swine, avian, and human influenza lineages.

Viral evolution also proceeds through recombination, in which genetic material from different viral lineages combines within co-infected cells. Recombination can bring together beneficial mutations that arose independently, accelerating adaptation. Evidence suggests that SARS-CoV-2 acquired its distinctive spike protein receptor-binding domain through recombination events in its evolutionary history, though the precise origins remain under investigation. Understanding these evolutionary mechanisms informs surveillance efforts aimed at detecting emerging variants before they spread widely and guides the development of broadly protective vaccines targeting conserved viral elements less prone to evolutionary escape.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp37-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "RNA viruses should be classified as living organisms because they undergo evolution." },
      { letter: "B", text: "Viral evolution, driven by mechanisms including high mutation rates, quasispecies dynamics, antigenic variation, and recombination, poses significant challenges for medical intervention while informing strategies to address emerging pathogens." },
      { letter: "C", text: "The 2009 H1N1 pandemic could have been prevented with better surveillance systems." },
      { letter: "D", text: "DNA viruses are more dangerous than RNA viruses because they evolve more slowly." },
      { letter: "E", text: "Vaccines are ineffective against all viral pathogens due to antigenic drift." },
    ],
    correctAnswer: "B",
    explanation: "The passage explains viral evolution through multiple mechanisms (mutation rates, quasispecies, antigenic drift/shift, recombination) and consistently connects these to practical implications for treatment, vaccines, and surveillance. Answer B captures both the explanatory content and the public health significance the author emphasizes.",
    difficulty: "medium",
    passageId: "rc-exp37-p2",
  },
  {
    id: "rc-exp37-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, RNA viruses evolve rapidly primarily because",
    answerChoices: [
      { letter: "A", text: "they have larger genomes than DNA-based organisms" },
      { letter: "B", text: "their RNA polymerases lack proofreading mechanisms, resulting in high mutation rates" },
      { letter: "C", text: "they only infect organisms with weak immune systems" },
      { letter: "D", text: "antiviral drugs accelerate their mutation rates" },
      { letter: "E", text: "they reproduce only in laboratory conditions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that accelerated evolution in RNA viruses 'stems from the error-prone nature of viral RNA polymerases, which lack the proofreading mechanisms that DNA polymerases employ.' This produces mutation rates roughly a millionfold higher than cellular DNA replication.",
    difficulty: "easy",
    passageId: "rc-exp37-p2",
  },
  {
    id: "rc-exp37-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the quasispecies concept suggests that efforts to develop antiviral drugs may be complicated by the fact that",
    answerChoices: [
      { letter: "A", text: "viral populations are genetically uniform and therefore predictable" },
      { letter: "B", text: "drug-resistant variants may already exist at low frequencies within viral populations before treatment begins" },
      { letter: "C", text: "RNA viruses cannot mutate once they have infected a host" },
      { letter: "D", text: "antiviral drugs invariably eliminate all viral variants simultaneously" },
      { letter: "E", text: "viral evolution only occurs between, not within, infected hosts" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that a quasispecies 'may contain minority variants pre-adapted to new conditions; when conditions change, these previously rare variants can quickly dominate the population.' This implies that drug-resistant variants may pre-exist, ready to expand when drug pressure is applied.",
    difficulty: "medium",
    passageId: "rc-exp37-p2",
  },
  {
    id: "rc-exp37-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the 2009 H1N1 pandemic primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the public health response to the outbreak" },
      { letter: "B", text: "provide a concrete example of how antigenic shift through reassortment can create pandemic pathogens" },
      { letter: "C", text: "argue that swine farming practices should be reformed" },
      { letter: "D", text: "compare the severity of different influenza pandemics" },
      { letter: "E", text: "explain why seasonal influenza vaccines must be reformulated annually" },
    ],
    correctAnswer: "B",
    explanation: "The 2009 H1N1 pandemic is introduced immediately after explaining antigenic shift ('wholesale reassortment of genomic segments') as an example: 'The 2009 H1N1 pandemic emerged through such reassortment events involving swine, avian, and human influenza lineages.' It illustrates the concept just explained.",
    difficulty: "medium",
    passageId: "rc-exp37-p2",
  },
  {
    id: "rc-exp37-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the question of whether viruses qualify as 'living' can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly committed to classifying viruses as living organisms" },
      { letter: "B", text: "adamant that viruses must be excluded from the category of life" },
      { letter: "C", text: "viewing the question as philosophically contested and definitionally dependent rather than empirically resolvable" },
      { letter: "D", text: "dismissive of the question as scientifically unimportant" },
      { letter: "E", text: "confused about the basic biological characteristics of viruses" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Whether viruses qualify as living depends on definitional choices that remain philosophically contested.' The author neither resolves this question nor dismisses it, but acknowledges its conceptual complexity while focusing on the evolutionary dynamics that operate regardless of definitional outcomes.",
    difficulty: "medium",
    passageId: "rc-exp37-p2",
  },
  {
    id: "rc-exp37-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following vaccine development strategies would the author most likely consider promising for addressing viral evolution?",
    answerChoices: [
      { letter: "A", text: "Designing vaccines that target only the most rapidly mutating viral proteins" },
      { letter: "B", text: "Developing vaccines that target conserved viral elements that are less subject to evolutionary change" },
      { letter: "C", text: "Creating vaccines that must be reformulated daily to keep pace with mutation rates" },
      { letter: "D", text: "Abandoning vaccine development entirely in favor of antiviral drugs" },
      { letter: "E", text: "Designing vaccines based on single viral isolates without considering population diversity" },
    ],
    correctAnswer: "B",
    explanation: "The passage concludes by noting that understanding evolutionary mechanisms 'guides the development of broadly protective vaccines targeting conserved viral elements less prone to evolutionary escape.' This directly supports targeting stable, conserved elements rather than rapidly evolving ones.",
    difficulty: "hard",
    passageId: "rc-exp37-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - DANCE AS AN ART FORM
// ============================================

const passage3 = `Dance occupies a distinctive position among the performing arts, employing the human body itself as its primary medium of expression. Unlike music, which employs instruments, or theater, which relies on spoken language, dance communicates through movement, gesture, and spatial configuration. This corporeal immediacy creates both unique expressive possibilities and distinctive critical challenges: dance is perhaps the most ephemeral of art forms, existing fully only in the moment of performance, resisting the stable documentation that scores provide for music or scripts for drama.

The tension between dance as a fixed choreographic work and dance as live performance has generated ongoing debates about the ontology of dance artworks. When the same choreography is performed by different dancers, or by the same dancer at different times, is it the same work? Some theorists argue that choreography functions analogously to a musical score—a set of instructions that various performers may interpret. Others contend that the choreographer's bodily knowledge, transmitted through direct teaching rather than notation, remains essential to the work's identity. Martha Graham reportedly distinguished between dancers who had learned her roles directly from her and those who learned them secondhand, suggesting that something vital was lost in mediated transmission.

The development of dance notation systems has attempted to bridge this gap between ephemeral performance and enduring work. Labanotation, developed by Rudolf Laban in the 1920s, provides a symbolic system for recording movement in terms of body parts, directions, levels, and timing. Benesh Movement Notation, adopted by the Royal Ballet, offers an alternative approach using abstract symbols arranged on a staff. Yet these systems capture primarily the spatial and temporal dimensions of movement, struggling to convey the qualitative aspects—weight, flow, dynamics—that distinguish mechanical execution from artistic interpretation. Video recording supplements notation but introduces its own distortions: camera angle, framing, and two-dimensional representation inevitably filter the three-dimensional, immersive experience of live performance.

Dance's relationship to music has evolved dramatically across its history. In classical ballet, choreography typically follows and illustrates musical structure, with movement phrases mirroring musical phrases. Modernist choreographers challenged this subordination: Merce Cunningham famously created choreography independently of music, combining the two only in performance, allowing dance to assert its autonomy as a time-art rather than remaining subservient to musical logic. Contemporary choreographers have explored an even wider range of relationships—silence, environmental sound, spoken text, and electronic manipulation—further expanding dance's expressive vocabulary.

The body that dances is never a neutral instrument but always carries cultural meanings and personal histories. A dancer's training shapes not merely technical capabilities but aesthetic sensibilities and kinesthetic habits that may prove difficult to transcend. Ballet's turned-out positions and extended lines, modern dance's weighted connectivity to the ground, hip-hop's articulated isolations—each technique produces distinctive bodies and embodies distinctive values. Postmodern and contemporary dance have interrogated these embodied assumptions, incorporating untrained movers, everyday gesture, and diverse body types to question what kinds of bodies are authorized to dance and what kinds of movement qualify as dance.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp37-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Dance notation systems have completely solved the problem of preserving choreographic works." },
      { letter: "B", text: "Dance as an art form involves distinctive challenges related to its corporeal, ephemeral nature, its uncertain ontological status, its evolving relationship to music, and the cultural meanings inscribed in trained bodies." },
      { letter: "C", text: "Classical ballet is artistically superior to modern and postmodern dance forms." },
      { letter: "D", text: "Video recording has replaced all other methods of documenting dance performances." },
      { letter: "E", text: "Merce Cunningham was the only choreographer to make significant innovations in dance." },
    ],
    correctAnswer: "B",
    explanation: "The passage examines multiple aspects of dance as an art form: its distinctive use of the body, ontological questions about work identity, notation and documentation challenges, evolving relationships to music, and cultural meanings of trained bodies. Answer B captures this multifaceted exploration.",
    difficulty: "medium",
    passageId: "rc-exp37-p3",
  },
  {
    id: "rc-exp37-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Martha Graham's distinction between dancers who learned roles directly from her and those who learned secondhand suggests that",
    answerChoices: [
      { letter: "A", text: "notation systems are superior to direct teaching" },
      { letter: "B", text: "video recording captures all essential aspects of choreography" },
      { letter: "C", text: "something vital to the work may be lost when transmission is mediated rather than direct" },
      { letter: "D", text: "choreographic works have no fixed identity whatsoever" },
      { letter: "E", text: "all performances of the same choreography are identical" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that Graham's distinction 'suggest[ed] that something vital was lost in mediated transmission.' This supports the view that direct bodily transmission conveys aspects of the work that indirect learning cannot capture.",
    difficulty: "easy",
    passageId: "rc-exp37-p3",
  },
  {
    id: "rc-exp37-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, a proponent of the view that choreography functions like a musical score would most likely believe that",
    answerChoices: [
      { letter: "A", text: "different dancers performing the same choreography are performing the same work" },
      { letter: "B", text: "dance has no relationship to music whatsoever" },
      { letter: "C", text: "only the original choreographer can perform a choreographic work" },
      { letter: "D", text: "dance notation systems are unnecessary" },
      { letter: "E", text: "live performance adds nothing to the choreographic work" },
    ],
    correctAnswer: "A",
    explanation: "The passage presents the score analogy as one position: 'choreography functions analogously to a musical score—a set of instructions that various performers may interpret.' Just as different musicians can perform the same musical work from the same score, this view implies different dancers performing the same choreography perform the same work.",
    difficulty: "medium",
    passageId: "rc-exp37-p3",
  },
  {
    id: "rc-exp37-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author discusses ballet's turned-out positions, modern dance's weighted connectivity, and hip-hop's articulated isolations primarily in order to",
    answerChoices: [
      { letter: "A", text: "rank these dance forms from most to least artistic" },
      { letter: "B", text: "argue that only one of these techniques produces legitimate dancers" },
      { letter: "C", text: "illustrate how different training techniques produce distinctive bodies and embody different values" },
      { letter: "D", text: "explain the historical development of dance notation systems" },
      { letter: "E", text: "demonstrate that dance should abandon all technical training" },
    ],
    correctAnswer: "C",
    explanation: "These examples appear in the final paragraph's discussion of how training 'shapes not merely technical capabilities but aesthetic sensibilities and kinesthetic habits.' The passage states that 'each technique produces distinctive bodies and embodies distinctive values,' using these examples to illustrate that point.",
    difficulty: "medium",
    passageId: "rc-exp37-p3",
  },
  {
    id: "rc-exp37-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the limitations of dance notation systems can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of all attempts to notate dance" },
      { letter: "B", text: "uncritically enthusiastic about their ability to capture dance" },
      { letter: "C", text: "acknowledging their value while recognizing they cannot capture all aspects of dance artistry" },
      { letter: "D", text: "hostile toward Rudolf Laban's contributions" },
      { letter: "E", text: "confused about what notation systems are designed to accomplish" },
    ],
    correctAnswer: "C",
    explanation: "The author describes notation systems' attempts to 'bridge this gap' and explains different approaches, but notes they 'capture primarily the spatial and temporal dimensions of movement, struggling to convey the qualitative aspects.' This is a balanced assessment of both value and limitation.",
    difficulty: "medium",
    passageId: "rc-exp37-p3",
  },
  {
    id: "rc-exp37-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A phenomenon is introduced, its distinctive characteristics are explored across multiple dimensions, and the cultural implications of those characteristics are examined." },
      { letter: "B", text: "Two theories are compared, experiments test each, and one is declared correct." },
      { letter: "C", text: "A historical narrative traces dance from ancient to modern times in chronological order." },
      { letter: "D", text: "A problem is identified and a single solution is proposed and defended." },
      { letter: "E", text: "Several choreographers' careers are compared to determine which made the greatest contribution." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces dance as a distinctive art form, then explores various dimensions: ontological questions, documentation challenges, relationships to music, and cultural meanings of trained bodies. The final paragraph examines how postmodern dance interrogates 'embodied assumptions.' This matches the structure in answer A.",
    difficulty: "hard",
    passageId: "rc-exp37-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - POLITICAL ECONOMY OF TRADE
// ============================================

const passage4 = `The political economy of international trade has long grappled with a fundamental puzzle: if free trade generates aggregate economic gains, why do nations persistently maintain protectionist barriers? Standard economic theory, building on David Ricardo's principle of comparative advantage, demonstrates that countries benefit by specializing in goods they produce relatively efficiently and trading for others. Even if one country produces everything more efficiently than another in absolute terms, both gain from trade based on relative efficiencies. Yet tariffs, quotas, and non-tariff barriers remain pervasive features of the global trading system.

The answer lies partly in the distributional consequences that aggregate statistics obscure. While trade liberalization may increase overall national welfare, its benefits and costs fall unevenly across society. Workers in import-competing industries may lose jobs or see wages decline as foreign competition intensifies, even as consumers enjoy lower prices and workers in export industries prosper. The concentrated losses of displaced workers are often more politically salient than the diffuse gains spread across millions of consumers, each saving small amounts on individual purchases. This asymmetry in political mobilization helps explain why protectionist interests frequently prevail despite their minority status.

The Stolper-Samuelson theorem formalizes this distributional logic. In a two-factor model, trade liberalization benefits the factor used intensively in export production while harming the factor used intensively in import-competing production. For wealthy nations with abundant capital and skilled labor, this implies that trade with developing countries should benefit capital owners and skilled workers while depressing returns to unskilled labor. Empirical evidence from recent decades broadly supports this prediction: wage inequality has increased in developed countries as trade with labor-abundant developing nations has expanded, though the magnitude of trade's contribution relative to technological change remains debated.

Institutions mediate the political translation of these economic interests. Countries with more generous social safety nets and active labor market policies may face less protectionist pressure because displaced workers have more resources to weather transitions. Corporatist systems that incorporate business and labor into policymaking may produce more coherent trade policies than pluralist systems where narrow interests compete in fragmented legislative processes. The design of trade agreements themselves—particularly provisions for adjustment assistance and the pace of tariff reduction—shapes whether liberalization generates backlash.

Recent developments have complicated simple narratives about trade politics. Global value chains have fragmented production across borders, making protectionism potentially harmful even to industries it ostensibly protects—tariffs on imported components raise costs for domestic producers who rely on them. Simultaneously, concerns about national security, environmental standards, and labor rights have motivated trade restrictions that transcend simple economic interest-group politics. The assumption that trade liberalization advances inexorably has been challenged by rising economic nationalism, suggesting that political coalitions supporting open trade may be more fragile than previously assumed.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp37-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "advocate for complete elimination of all trade barriers worldwide" },
      { letter: "B", text: "explain why protectionism persists despite economic theory favoring free trade by examining distributional effects, political asymmetries, institutional factors, and recent complications" },
      { letter: "C", text: "argue that David Ricardo's theory of comparative advantage has been empirically disproven" },
      { letter: "D", text: "criticize developing countries for engaging in unfair trade practices" },
      { letter: "E", text: "demonstrate that trade never benefits any participants" },
    ],
    correctAnswer: "B",
    explanation: "The passage begins by posing a puzzle (why does protectionism persist despite economic gains from trade?) and then systematically addresses it through distributional effects, the Stolper-Samuelson theorem, institutional factors, and recent developments. Answer B accurately captures this analytical structure.",
    difficulty: "medium",
    passageId: "rc-exp37-p4",
  },
  {
    id: "rc-exp37-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the Stolper-Samuelson theorem predicts that trade liberalization in wealthy nations will",
    answerChoices: [
      { letter: "A", text: "benefit all workers equally regardless of skill level" },
      { letter: "B", text: "harm capital owners while benefiting unskilled labor" },
      { letter: "C", text: "benefit capital owners and skilled workers while potentially harming unskilled labor" },
      { letter: "D", text: "have no distributional effects whatsoever" },
      { letter: "E", text: "eliminate comparative advantage as a factor in trade patterns" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'For wealthy nations with abundant capital and skilled labor, this implies that trade with developing countries should benefit capital owners and skilled workers while depressing returns to unskilled labor.'",
    difficulty: "easy",
    passageId: "rc-exp37-p4",
  },
  {
    id: "rc-exp37-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, protectionist interests frequently prevail politically primarily because",
    answerChoices: [
      { letter: "A", text: "protectionist policies benefit the majority of citizens" },
      { letter: "B", text: "consumers are highly organized advocates for higher prices" },
      { letter: "C", text: "the concentrated losses of affected workers create stronger political mobilization than the diffuse gains to consumers" },
      { letter: "D", text: "economic theory supports protectionism over free trade" },
      { letter: "E", text: "all trade agreements are unconstitutional" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'The concentrated losses of displaced workers are often more politically salient than the diffuse gains spread across millions of consumers' and that 'This asymmetry in political mobilization helps explain why protectionist interests frequently prevail despite their minority status.'",
    difficulty: "medium",
    passageId: "rc-exp37-p4",
  },
  {
    id: "rc-exp37-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions global value chains primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all international trade should be eliminated" },
      { letter: "B", text: "explain why the historical theory of comparative advantage was developed" },
      { letter: "C", text: "illustrate how contemporary production patterns can make protectionism harmful even to industries it seeks to protect" },
      { letter: "D", text: "criticize the Stolper-Samuelson theorem as empirically invalid" },
      { letter: "E", text: "demonstrate that developing countries cannot participate in modern manufacturing" },
    ],
    correctAnswer: "C",
    explanation: "Global value chains are introduced in the context of 'recent developments' that 'complicate simple narratives.' The passage specifically notes that fragmented production makes 'protectionism potentially harmful even to industries it ostensibly protects—tariffs on imported components raise costs for domestic producers who rely on them.'",
    difficulty: "medium",
    passageId: "rc-exp37-p4",
  },
  {
    id: "rc-exp37-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the persistence of protectionism can best be described as",
    answerChoices: [
      { letter: "A", text: "morally outraged at the irrationality of trade barriers" },
      { letter: "B", text: "analytically engaged in explaining protectionism as a comprehensible political phenomenon" },
      { letter: "C", text: "enthusiastically supportive of expanding protectionist measures" },
      { letter: "D", text: "dismissive of any economic analysis of trade policy" },
      { letter: "E", text: "nostalgic for a past era of pure free trade" },
    ],
    correctAnswer: "B",
    explanation: "The author approaches protectionism as a puzzle to be explained rather than merely condemned. The passage systematically analyzes the distributional, political, and institutional factors that explain protectionism's persistence, without expressing moral outrage or advocacy in either direction.",
    difficulty: "medium",
    passageId: "rc-exp37-p4",
  },
  {
    id: "rc-exp37-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the passage's claim about the role of social safety nets in reducing protectionist pressure?",
    answerChoices: [
      { letter: "A", text: "Countries with minimal unemployment insurance have the lowest tariff rates in the world." },
      { letter: "B", text: "A comparative study found that countries with generous retraining programs and unemployment benefits experienced significantly less political backlash against trade agreements than countries without such programs." },
      { letter: "C", text: "Social safety nets have no effect on workers' political preferences." },
      { letter: "D", text: "All developed countries have identical social welfare policies." },
      { letter: "E", text: "Consumers in countries with strong safety nets pay higher prices for all goods." },
    ],
    correctAnswer: "B",
    explanation: "The passage claims that 'Countries with more generous social safety nets and active labor market policies may face less protectionist pressure because displaced workers have more resources to weather transitions.' A comparative study directly demonstrating less political backlash in countries with such programs would provide empirical support for this causal claim.",
    difficulty: "hard",
    passageId: "rc-exp37-p4",
  },
];

// Export all RC questions from Set 37
export const rcQuestionsExpSet37: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet37 = {
  passage1: { id: "rc-exp37-p1", content: passage1, topic: "law", title: "Tax Law Principles and Policy" },
  passage2: { id: "rc-exp37-p2", content: passage2, topic: "natural-sciences", title: "Virology and Viral Evolution" },
  passage3: { id: "rc-exp37-p3", content: passage3, topic: "humanities", title: "Dance as an Art Form" },
  passage4: { id: "rc-exp37-p4", content: passage4, topic: "social-sciences", title: "Political Economy of Trade" },
};
