// Reading Comprehension Expansion Set 36
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - LANDLORD-TENANT LAW AND HOUSING RIGHTS
// ============================================

const passage1 = `The evolution of landlord-tenant law in the United States reflects a fundamental tension between property rights and housing as a basic human need. Traditional common law, inherited from English feudal doctrine, heavily favored landlords. Under the doctrine of caveat emptor—"let the buyer beware"—tenants leased property "as is," with landlords bearing no obligation to maintain habitable conditions. The lease was conceived as a conveyance of an interest in land rather than a contract for services, and once possession was transferred, the landlord's duties essentially ended.

The transformation of landlord-tenant law began in earnest during the 1960s and 1970s, driven by the civil rights movement, urban housing crises, and changing judicial attitudes. Courts began recognizing the implied warranty of habitability, which requires landlords to maintain rental units in conditions fit for human habitation. This doctrine emerged from the recognition that modern urban tenants, unlike their agrarian predecessors, primarily seek shelter rather than agricultural land, and that the inequality of bargaining power between landlords and tenants necessitated legal protection for the weaker party.

The implied warranty of habitability typically encompasses functioning plumbing, heating, and electrical systems; structural integrity; protection from pest infestations; and compliance with housing codes. When landlords breach this warranty, tenants may exercise various remedies: rent withholding, "repair and deduct" provisions allowing tenants to make repairs and subtract costs from rent, or lease termination. Some jurisdictions permit tenants to remain in possession while paying reduced rent reflecting the diminished value of the defective premises. These remedies fundamentally altered the traditional rule that tenants must continue paying full rent regardless of conditions.

Retaliatory eviction doctrine provides complementary protection by prohibiting landlords from evicting tenants or raising rents in response to legitimate complaints about housing conditions or tenant organizing. Before this doctrine's development, tenants faced a cruel dilemma: tolerate dangerous conditions or risk homelessness by asserting their rights. Courts and legislatures recognized that the implied warranty of habitability would remain largely theoretical if landlords could punish tenants who invoked it. Most jurisdictions now presume retaliation when adverse action follows within a specified period after a tenant's protected activity.

Despite these legal developments, significant enforcement gaps persist. Many tenants, particularly low-income renters and immigrants, remain unaware of their rights or fear that asserting them will lead to eviction despite retaliatory eviction protections. Housing courts in major cities face overwhelming caseloads, and legal representation in eviction proceedings remains dramatically unequal—landlords are typically represented while tenants usually are not. The gap between formal legal protections and actual housing conditions suggests that doctrinal reform alone cannot address housing insecurity without accompanying investments in enforcement, tenant education, and legal services.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp36-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The doctrine of caveat emptor remains the dominant principle in American landlord-tenant law." },
      { letter: "B", text: "Landlord-tenant law has evolved significantly to protect tenants through doctrines like the implied warranty of habitability and retaliatory eviction protections, though enforcement gaps limit their effectiveness." },
      { letter: "C", text: "The implied warranty of habitability should be repealed because it interferes with landlords' property rights." },
      { letter: "D", text: "Retaliatory eviction is the most important protection for tenants in American law." },
      { letter: "E", text: "Housing courts have successfully eliminated all enforcement gaps in tenant protection law." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution from landlord-favoring common law to modern tenant protections, explaining the implied warranty of habitability and retaliatory eviction doctrine, while acknowledging that enforcement gaps limit these protections' effectiveness. Answer B captures this complete trajectory and the passage's balanced assessment.",
    difficulty: "medium",
    passageId: "rc-exp36-p1",
  },
  {
    id: "rc-exp36-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the traditional common law conception of a lease was that of",
    answerChoices: [
      { letter: "A", text: "a contract for ongoing services between landlord and tenant" },
      { letter: "B", text: "a conveyance of an interest in land rather than a service contract" },
      { letter: "C", text: "a mutual agreement requiring both parties to maintain the property" },
      { letter: "D", text: "a temporary arrangement that could be modified at will by either party" },
      { letter: "E", text: "a government-regulated transaction subject to housing codes" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that under traditional common law, 'The lease was conceived as a conveyance of an interest in land rather than a contract for services, and once possession was transferred, the landlord's duties essentially ended.'",
    difficulty: "easy",
    passageId: "rc-exp36-p1",
  },
  {
    id: "rc-exp36-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the development of the implied warranty of habitability was motivated in part by",
    answerChoices: [
      { letter: "A", text: "landlords' requests for clearer legal standards" },
      { letter: "B", text: "recognition of the unequal bargaining power between landlords and tenants" },
      { letter: "C", text: "tenants' preference for agricultural land over urban housing" },
      { letter: "D", text: "the federal government's mandate for uniform housing standards" },
      { letter: "E", text: "landlords' voluntary adoption of maintenance obligations" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the implied warranty of habitability 'emerged from the recognition that modern urban tenants... primarily seek shelter rather than agricultural land, and that the inequality of bargaining power between landlords and tenants necessitated legal protection for the weaker party.'",
    difficulty: "medium",
    passageId: "rc-exp36-p1",
  },
  {
    id: "rc-exp36-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the \"cruel dilemma\" facing tenants before the development of retaliatory eviction doctrine primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize tenants for failing to organize effectively" },
      { letter: "B", text: "explain why retaliatory eviction protections were necessary to make habitability rights meaningful" },
      { letter: "C", text: "argue that landlords acted reasonably under the old legal regime" },
      { letter: "D", text: "suggest that tenants should have relocated rather than complaining" },
      { letter: "E", text: "compare American and English approaches to landlord-tenant law" },
    ],
    correctAnswer: "B",
    explanation: "The 'cruel dilemma' reference explains that before retaliatory eviction protections, tenants had to 'tolerate dangerous conditions or risk homelessness by asserting their rights.' This illustrates why such protections were necessary—otherwise 'the implied warranty of habitability would remain largely theoretical.'",
    difficulty: "medium",
    passageId: "rc-exp36-p1",
  },
  {
    id: "rc-exp36-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the current state of tenant protection law can best be described as",
    answerChoices: [
      { letter: "A", text: "completely satisfied with the progress that has been made" },
      { letter: "B", text: "hostile to all forms of tenant protection as interference with property rights" },
      { letter: "C", text: "appreciative of doctrinal developments while concerned about enforcement gaps" },
      { letter: "D", text: "indifferent to the practical effects of legal doctrine" },
      { letter: "E", text: "dismissive of the significance of the implied warranty of habitability" },
    ],
    correctAnswer: "C",
    explanation: "The author describes the positive developments in tenant protection law while noting in the final paragraph that 'significant enforcement gaps persist' and that 'doctrinal reform alone cannot address housing insecurity.' This reflects appreciation for progress coupled with concern about limitations.",
    difficulty: "medium",
    passageId: "rc-exp36-p1",
  },
  {
    id: "rc-exp36-006",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the information in the passage, which one of the following situations would most clearly illustrate the enforcement gaps the author describes?",
    answerChoices: [
      { letter: "A", text: "A landlord voluntarily repairs a broken heating system after receiving a tenant's complaint" },
      { letter: "B", text: "A tenant successfully sues a landlord for breach of the implied warranty of habitability" },
      { letter: "C", text: "An unrepresented immigrant tenant facing eviction does not raise habitability defenses because she is unaware of them" },
      { letter: "D", text: "A court applies retaliatory eviction doctrine to protect a tenant who complained about housing conditions" },
      { letter: "E", text: "A legislature passes new laws strengthening tenant protections" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Many tenants, particularly low-income renters and immigrants, remain unaware of their rights' and notes the dramatic inequality in legal representation. A situation where an unrepresented immigrant tenant fails to raise available defenses due to lack of knowledge directly illustrates these enforcement gaps.",
    difficulty: "hard",
    passageId: "rc-exp36-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - OCEANOGRAPHY AND DEEP SEA ECOSYSTEMS
// ============================================

const passage2 = `The deep sea, defined as ocean depths below 200 meters where sunlight cannot penetrate, represents the largest habitat on Earth yet remains among the least explored. Until the mid-twentieth century, scientists assumed that life could not exist in the crushing pressures, near-freezing temperatures, and perpetual darkness of the abyssal zone. The discovery of thriving ecosystems around hydrothermal vents in 1977 revolutionized our understanding of life's possibilities and suggested that the deep ocean harbors biodiversity rivaling that of tropical rainforests.

Hydrothermal vents form where tectonic plates diverge or at volcanic hotspots, allowing seawater to percolate into the crust, become superheated by magma, and return to the ocean floor laden with dissolved minerals. Vent fluids can reach temperatures exceeding 400 degrees Celsius, yet they support dense communities of organisms through chemosynthesis rather than photosynthesis. Chemosynthetic bacteria oxidize hydrogen sulfide and other chemicals emanating from vents, forming the base of food webs that include giant tube worms, ghostly white crabs, and bizarre fish species found nowhere else on Earth. This discovery demonstrated that sunlight is not essential for complex ecosystems, with profound implications for the search for extraterrestrial life.

Cold seeps represent another chemosynthetic ecosystem, occurring where methane and hydrogen sulfide seep through the seafloor without the extreme temperatures of hydrothermal vents. These systems support distinct communities including chemosynthetic mussels and ice worms that colonize frozen methane hydrates. While individual vents may persist for only decades before going dormant, cold seeps can remain active for millennia, allowing species to evolve endemic to particular seep locations. The discovery of fossil seep communities has extended the geological record of these ecosystems back hundreds of millions of years.

Beyond chemosynthetic oases, the vast abyssal plains support life through marine snow—the continuous drift of organic particles from surface waters. Decomposing plankton, fecal pellets, and the occasional whale carcass provide sustenance for scavengers and filter feeders adapted to extreme scarcity. Recent research using autonomous underwater vehicles has revealed surprising diversity in abyssal sediments, including vast numbers of new bacterial species and unexpected populations of fish and invertebrates. The abyssal seafloor, once imagined as a barren desert, appears to be a complex mosaic of microhabitats supporting distinct communities.

The deep sea faces mounting anthropogenic pressures despite its remoteness. Deep-sea trawling has devastated slow-growing coral communities and seamount ecosystems. Mining interests are developing technologies to extract polymetallic nodules from abyssal plains and sulfide deposits from hydrothermal vents, threatening ecosystems we have barely begun to understand. Climate change is altering deep-water circulation patterns and oxygen levels. Scientists argue that the precautionary principle should govern deep-sea resource extraction, given our profound ignorance of these ecosystems and the likelihood that many species remain undiscovered.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp36-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Hydrothermal vents are the only location where deep-sea life exists." },
      { letter: "B", text: "The deep sea contains diverse ecosystems supported by various energy sources, but these poorly understood environments face growing threats from human activities." },
      { letter: "C", text: "Deep-sea mining should proceed immediately to extract valuable mineral resources." },
      { letter: "D", text: "Marine snow is the primary source of energy for all deep-sea life." },
      { letter: "E", text: "Scientists have now fully catalogued all species living in the deep ocean." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the discovery of deep-sea ecosystems, explains the different energy sources supporting them (chemosynthesis at vents and seeps, marine snow on abyssal plains), notes that diversity is higher than previously believed, and discusses anthropogenic threats. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp36-p2",
  },
  {
    id: "rc-exp36-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, chemosynthetic bacteria at hydrothermal vents",
    answerChoices: [
      { letter: "A", text: "rely on sunlight filtering down from the surface" },
      { letter: "B", text: "oxidize hydrogen sulfide and other chemicals to form the base of food webs" },
      { letter: "C", text: "consume marine snow drifting from surface waters" },
      { letter: "D", text: "are identical to bacteria found in tropical rainforests" },
      { letter: "E", text: "cannot survive temperatures above 100 degrees Celsius" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Chemosynthetic bacteria oxidize hydrogen sulfide and other chemicals emanating from vents, forming the base of food webs that include giant tube worms, ghostly white crabs, and bizarre fish species.'",
    difficulty: "easy",
    passageId: "rc-exp36-p2",
  },
  {
    id: "rc-exp36-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the discovery of hydrothermal vent ecosystems has implications for astrobiology because it suggests that",
    answerChoices: [
      { letter: "A", text: "life on other planets must be identical to Earth life" },
      { letter: "B", text: "sunlight is not a prerequisite for complex ecosystems to develop" },
      { letter: "C", text: "all planets have hydrothermal vents" },
      { letter: "D", text: "photosynthesis is the only viable energy source for life" },
      { letter: "E", text: "life cannot exist in extreme temperatures" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the discovery of vent ecosystems 'demonstrated that sunlight is not essential for complex ecosystems, with profound implications for the search for extraterrestrial life.' This suggests life could exist on planets or moons without sunlight.",
    difficulty: "medium",
    passageId: "rc-exp36-p2",
  },
  {
    id: "rc-exp36-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses cold seeps in relation to hydrothermal vents primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that cold seeps are more important than hydrothermal vents" },
      { letter: "B", text: "show that chemosynthetic ecosystems exist in different forms with varying characteristics" },
      { letter: "C", text: "explain why hydrothermal vents should not be protected" },
      { letter: "D", text: "compare water temperatures at different ocean depths" },
      { letter: "E", text: "demonstrate that all deep-sea ecosystems are identical" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents cold seeps as 'another chemosynthetic ecosystem' that differs from vents—lacking extreme temperatures but persisting for millennia rather than decades and supporting distinct communities. This comparison illustrates the variety of chemosynthetic ecosystems.",
    difficulty: "medium",
    passageId: "rc-exp36-p2",
  },
  {
    id: "rc-exp36-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward deep-sea mining can best be characterized as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive of immediate resource extraction" },
      { letter: "B", text: "completely indifferent to economic considerations" },
      { letter: "C", text: "concerned that it threatens poorly understood ecosystems and should be approached cautiously" },
      { letter: "D", text: "confident that mining technology will protect all marine life" },
      { letter: "E", text: "optimistic that mining will benefit deep-sea species" },
    ],
    correctAnswer: "C",
    explanation: "The author describes mining as 'threatening ecosystems we have barely begun to understand' and notes that 'Scientists argue that the precautionary principle should govern deep-sea resource extraction, given our profound ignorance of these ecosystems.' This indicates concern and advocacy for caution.",
    difficulty: "medium",
    passageId: "rc-exp36-p2",
  },
  {
    id: "rc-exp36-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the argument that the precautionary principle should govern deep-sea mining?",
    answerChoices: [
      { letter: "A", text: "Mining companies have developed technologies that completely eliminate environmental impacts." },
      { letter: "B", text: "A recent survey of a proposed mining site discovered fifteen species previously unknown to science, several with potential pharmaceutical applications." },
      { letter: "C", text: "Deep-sea ecosystems recover quickly from disturbances." },
      { letter: "D", text: "All deep-sea species have already been catalogued by scientists." },
      { letter: "E", text: "Polymetallic nodules have no commercial value." },
    ],
    correctAnswer: "B",
    explanation: "The author argues for the precautionary principle because of 'our profound ignorance of these ecosystems and the likelihood that many species remain undiscovered.' Discovery of fifteen new species at a proposed mining site would directly support this reasoning by demonstrating that valuable, unknown species exist in areas slated for extraction.",
    difficulty: "hard",
    passageId: "rc-exp36-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - PRE-RAPHAELITE ART MOVEMENT
// ============================================

const passage3 = `The Pre-Raphaelite Brotherhood, founded in London in 1848 by Dante Gabriel Rossetti, William Holman Hunt, and John Everett Millais, emerged as a radical challenge to the artistic establishment of Victorian England. The name itself declared rebellion: by calling themselves "Pre-Raphaelite," these young painters rejected the academic tradition that traced its authority to Raphael and the High Renaissance, which they blamed for centuries of mannered, formulaic art. They sought instead the sincerity, vibrant color, and meticulous attention to nature they perceived in Italian painting before Raphael's influence became dominant.

The Brotherhood's founding manifesto demanded "genuine ideas to express," "careful study of Nature," "sympathy with what is direct and serious and heartfelt in previous art," and rejection of "what is conventional and self-parading and learned by rote." In practice, this meant painting from direct observation rather than studio conventions, using brilliant colors on a wet white ground to achieve luminous effects, and pursuing almost obsessive detail in depicting natural phenomena. Millais's "Ophelia" (1851-52), depicting the drowning maiden from Hamlet amid meticulously rendered flowers and vegetation, exemplifies this approach: the artist spent months painting every plant from life along a riverbank.

The religious and literary subjects favored by the Pre-Raphaelites also distinguished them from contemporary academic painting. While Victorian Royal Academicians typically painted classical mythology or elevated historical subjects in a grand manner, the Brotherhood chose medieval legends, Shakespearean drama, and biblical scenes rendered with almost archaeological attention to authentic settings. Holman Hunt famously traveled to Palestine to paint Christ and biblical figures in accurate Middle Eastern landscapes and costumes, bringing empirical naturalism to sacred subjects in ways that both fascinated and disturbed Victorian audiences accustomed to idealized religious imagery.

The Brotherhood's formal existence was brief—internal tensions and members' diverging interests dissolved the group by 1853—but its influence extended far beyond its seven original members. Rossetti's later work, moving toward sumptuous images of feminine beauty that departed from early Pre-Raphaelite naturalism, nevertheless inspired the Aesthetic Movement's emphasis on beauty for its own sake. William Morris, strongly influenced by Rossetti and the Pre-Raphaelites, founded the Arts and Crafts movement, extending Pre-Raphaelite principles to decorative arts and architecture in reaction against industrial manufacture.

Critical assessment of the Pre-Raphaelites has oscillated dramatically. John Ruskin championed their cause in the 1850s, praising their fidelity to nature and moral seriousness. By the early twentieth century, modernist critics dismissed their work as merely illustrative, sentimental, and technically retrograde—a judgment that persisted for decades. Recent scholarship has rehabilitated the Pre-Raphaelites, analyzing their complex engagement with Victorian gender politics, their innovative techniques, and their prescient critique of academic orthodoxy. Their influence on Symbolism, Art Nouveau, and even aspects of Surrealism is now more fully appreciated.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp36-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Pre-Raphaelite Brotherhood permanently transformed academic painting in Victorian England." },
      { letter: "B", text: "The Pre-Raphaelites rejected academic conventions in favor of naturalism and medieval subjects, and despite the group's brief existence and fluctuating critical reception, their influence proved far-reaching." },
      { letter: "C", text: "John Ruskin was the only critic to appreciate Pre-Raphaelite painting." },
      { letter: "D", text: "The Pre-Raphaelites were primarily interested in classical mythology." },
      { letter: "E", text: "Modernist critics' negative assessment of Pre-Raphaelite art remains the consensus view today." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the Brotherhood's formation and principles, their rejection of academic conventions, their preference for naturalism and medieval/literary subjects, the group's dissolution, their extended influence, and the oscillation in critical reception. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp36-p3",
  },
  {
    id: "rc-exp36-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the Pre-Raphaelites derived their name from their",
    answerChoices: [
      { letter: "A", text: "admiration for Raphael's artistic techniques" },
      { letter: "B", text: "rejection of the academic tradition associated with Raphael and post-Raphael painting" },
      { letter: "C", text: "desire to paint portraits of Italian Renaissance figures" },
      { letter: "D", text: "belief that Raphael was the greatest painter in history" },
      { letter: "E", text: "connection to a medieval monastery called Pre-Raphael" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'by calling themselves \"Pre-Raphaelite,\" these young painters rejected the academic tradition that traced its authority to Raphael and the High Renaissance, which they blamed for centuries of mannered, formulaic art.'",
    difficulty: "easy",
    passageId: "rc-exp36-p3",
  },
  {
    id: "rc-exp36-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Victorian audiences were likely disturbed by Holman Hunt's paintings of biblical subjects because",
    answerChoices: [
      { letter: "A", text: "the paintings were technically incompetent" },
      { letter: "B", text: "the paintings depicted Christ in realistic Middle Eastern settings rather than idealized imagery" },
      { letter: "C", text: "Hunt refused to travel to Palestine for research" },
      { letter: "D", text: "Hunt abandoned religious subject matter entirely" },
      { letter: "E", text: "the paintings were too similar to Royal Academy conventions" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Hunt 'traveled to Palestine to paint Christ and biblical figures in accurate Middle Eastern landscapes and costumes, bringing empirical naturalism to sacred subjects in ways that both fascinated and disturbed Victorian audiences accustomed to idealized religious imagery.' The disturbance came from realistic rather than idealized depictions.",
    difficulty: "medium",
    passageId: "rc-exp36-p3",
  },
  {
    id: "rc-exp36-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Millais's \"Ophelia\" primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Millais for spending too much time on a single painting" },
      { letter: "B", text: "illustrate the Pre-Raphaelite commitment to meticulous naturalistic detail" },
      { letter: "C", text: "argue that Shakespearean subjects are unsuitable for painting" },
      { letter: "D", text: "compare Millais unfavorably to other Pre-Raphaelite painters" },
      { letter: "E", text: "explain why the Brotherhood dissolved in 1853" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces 'Ophelia' as exemplifying the Pre-Raphaelite approach of 'painting from direct observation' with 'almost obsessive detail in depicting natural phenomena.' The mention that Millais 'spent months painting every plant from life along a riverbank' demonstrates their commitment to naturalistic detail.",
    difficulty: "medium",
    passageId: "rc-exp36-p3",
  },
  {
    id: "rc-exp36-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward recent scholarship on the Pre-Raphaelites can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of its value" },
      { letter: "B", text: "neutral, presenting it as one perspective among many without endorsement" },
      { letter: "C", text: "approving, presenting the rehabilitation as justified by the movement's genuine significance" },
      { letter: "D", text: "confused about its conclusions" },
      { letter: "E", text: "hostile to the Pre-Raphaelites despite recent critical trends" },
    ],
    correctAnswer: "C",
    explanation: "The author presents modernist dismissal as a 'judgment that persisted for decades' before noting that 'Recent scholarship has rehabilitated the Pre-Raphaelites' and that 'Their influence on Symbolism, Art Nouveau, and even aspects of Surrealism is now more fully appreciated.' The positive framing suggests approval of this rehabilitation.",
    difficulty: "medium",
    passageId: "rc-exp36-p3",
  },
  {
    id: "rc-exp36-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "An artistic movement is introduced, its principles and practices are explained, its influence is traced, and critical reception is surveyed." },
      { letter: "B", text: "Two competing artistic theories are presented and evaluated, with one declared superior." },
      { letter: "C", text: "A chronological biography of a single artist is provided from birth to death." },
      { letter: "D", text: "A scientific hypothesis is proposed, tested through experiments, and confirmed." },
      { letter: "E", text: "A political movement's failures are analyzed and lessons are drawn for future activism." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces the Pre-Raphaelite Brotherhood and its rebellion against academic conventions (paragraph 1), explains their principles and practices (paragraphs 2-3), traces their influence on later movements (paragraph 4), and surveys the oscillation in critical reception (paragraph 5).",
    difficulty: "hard",
    passageId: "rc-exp36-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - CHILD DEVELOPMENT AND ATTACHMENT THEORY
// ============================================

const passage4 = `Attachment theory, developed by British psychiatrist John Bowlby in the mid-twentieth century, revolutionized understanding of the bond between infants and caregivers and its implications for psychological development across the lifespan. Bowlby proposed that infants are biologically predisposed to seek proximity to a primary caregiver, particularly when threatened or distressed, and that the quality of this early relationship establishes "internal working models" that shape subsequent relationships and emotional regulation. This theory emerged partly from Bowlby's observations of children separated from parents during World War II and partly from ethological research on imprinting in animals.

Mary Ainsworth, collaborating with and extending Bowlby's work, developed the Strange Situation procedure to classify infant attachment patterns empirically. In this laboratory assessment, observers note how one-year-olds respond when briefly separated from and reunited with their mothers in an unfamiliar setting. Ainsworth identified three primary attachment styles: secure infants, who protest separation but are readily comforted upon reunion; anxious-ambivalent infants, who are highly distressed and difficult to soothe; and avoidant infants, who show little distress and actively ignore caregivers upon reunion. Later researchers added a fourth category, disorganized attachment, characterized by contradictory behaviors suggesting fear of the caregiver.

Cross-cultural research has complicated the interpretation of these attachment classifications. While secure attachment appears to be the modal pattern across cultures, the distribution of insecure categories varies significantly. German infants show higher rates of avoidant attachment than American samples, while Japanese infants show more anxious-ambivalent patterns. Critics argue that the Strange Situation measures culturally specific responses to separation rather than universal attachment quality. German parenting emphasizes early independence, making avoidant responses normative rather than problematic, while Japanese mothers rarely separate from infants, making any separation highly stressful. Defenders of attachment theory respond that biological attachment systems are universal but that cultural practices shape how they are expressed.

Longitudinal research has generally supported the predictive validity of early attachment classifications, though the relationship between infant attachment and adult outcomes is more nuanced than early enthusiasts claimed. Securely attached infants tend to become more socially competent children and form more satisfying adult relationships, but attachment is not destiny. Subsequent experiences—trauma, supportive relationships, therapy—can alter attachment patterns. The internal working models Bowlby described are not fixed templates but dynamic representations that can be revised through new experiences, particularly in the context of secure relationships.

Contemporary applications of attachment theory extend far beyond developmental psychology. Family courts consider attachment relationships when making custody decisions. Attachment-based therapies have been developed for treating children with trauma histories and adults with relationship difficulties. However, critics caution against oversimplified applications that pathologize normal variation in parenting practices or exaggerate the determinism of early experience. The commercial "attachment parenting" movement, while invoking Bowlby's name, often promotes prescriptions—extended breastfeeding, constant physical contact—that go beyond what attachment research supports.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp36-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that attachment theory should be completely abandoned due to its flaws" },
      { letter: "B", text: "provide a comprehensive overview of attachment theory's development, evidence, cross-cultural considerations, and contemporary applications while noting limitations" },
      { letter: "C", text: "prove that Japanese and German parenting practices are superior to American practices" },
      { letter: "D", text: "explain why the Strange Situation procedure is the only valid psychological assessment" },
      { letter: "E", text: "advocate for the commercial attachment parenting movement" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces attachment theory from Bowlby's original formulation through Ainsworth's empirical work, addresses cross-cultural complications, discusses longitudinal evidence and its nuances, and examines contemporary applications and their limitations. Answer B captures this balanced, comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp36-p4",
  },
  {
    id: "rc-exp36-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, securely attached infants in the Strange Situation procedure",
    answerChoices: [
      { letter: "A", text: "show no distress when separated from their mothers" },
      { letter: "B", text: "protest separation but are readily comforted upon reunion" },
      { letter: "C", text: "display contradictory behaviors suggesting fear of the caregiver" },
      { letter: "D", text: "actively ignore their caregivers upon reunion" },
      { letter: "E", text: "are highly distressed and impossible to soothe" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'secure infants... protest separation but are readily comforted upon reunion.' This distinguishes them from avoidant infants who 'show little distress and actively ignore caregivers' and anxious-ambivalent infants who 'are highly distressed and difficult to soothe.'",
    difficulty: "easy",
    passageId: "rc-exp36-p4",
  },
  {
    id: "rc-exp36-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, critics of using the Strange Situation across cultures would most likely argue that",
    answerChoices: [
      { letter: "A", text: "Japanese infants are inherently more anxious than German infants" },
      { letter: "B", text: "the procedure measures culturally shaped responses rather than universal attachment quality" },
      { letter: "C", text: "secure attachment is not the modal pattern in any culture" },
      { letter: "D", text: "Ainsworth's methodology was scientifically sound" },
      { letter: "E", text: "attachment theory has no implications for child development" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Critics argue that the Strange Situation measures culturally specific responses to separation rather than universal attachment quality,' explaining that German and Japanese parenting practices create different baseline responses to separation.",
    difficulty: "medium",
    passageId: "rc-exp36-p4",
  },
  {
    id: "rc-exp36-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions that \"attachment is not destiny\" primarily in order to",
    answerChoices: [
      { letter: "A", text: "reject all of Bowlby's original claims about attachment" },
      { letter: "B", text: "qualify the predictive validity of early attachment by noting that later experiences can alter attachment patterns" },
      { letter: "C", text: "argue that attachment research has no practical applications" },
      { letter: "D", text: "suggest that infant attachment classifications are completely unreliable" },
      { letter: "E", text: "criticize Mary Ainsworth's research methodology" },
    ],
    correctAnswer: "B",
    explanation: "This phrase appears in a paragraph that acknowledges longitudinal support for attachment theory while noting that 'the relationship between infant attachment and adult outcomes is more nuanced than early enthusiasts claimed.' The author goes on to explain that 'Subsequent experiences... can alter attachment patterns,' qualifying but not rejecting the theory's predictive validity.",
    difficulty: "medium",
    passageId: "rc-exp36-p4",
  },
  {
    id: "rc-exp36-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the commercial \"attachment parenting\" movement can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive of its recommendations" },
      { letter: "B", text: "completely indifferent to its claims" },
      { letter: "C", text: "skeptical, noting that its prescriptions go beyond what attachment research supports" },
      { letter: "D", text: "confused about its relationship to Bowlby's theory" },
      { letter: "E", text: "approving of its extension of attachment theory to new domains" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that the movement, 'while invoking Bowlby's name, often promotes prescriptions—extended breastfeeding, constant physical contact—that go beyond what attachment research supports.' This critical distance indicates skepticism about whether the movement is truly grounded in the research it claims to represent.",
    difficulty: "medium",
    passageId: "rc-exp36-p4",
  },
  {
    id: "rc-exp36-024",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which one of the following would be the most appropriate application of attachment theory?",
    answerChoices: [
      { letter: "A", text: "Using the Strange Situation to classify infants in Japan without considering cultural context" },
      { letter: "B", text: "Assuming that an adult with an insecure attachment history cannot form healthy relationships" },
      { letter: "C", text: "Developing therapy for traumatized children that focuses on building secure relationships while recognizing that attachment patterns can change" },
      { letter: "D", text: "Mandating specific parenting practices like extended breastfeeding based on attachment theory" },
      { letter: "E", text: "Ignoring early attachment relationships in custody decisions" },
    ],
    correctAnswer: "C",
    explanation: "The passage supports attachment-based therapies while emphasizing that 'attachment is not destiny' and that 'internal working models... can be revised through new experiences, particularly in the context of secure relationships.' Option C reflects this nuanced application—using attachment insights therapeutically while recognizing the potential for change.",
    difficulty: "hard",
    passageId: "rc-exp36-p4",
  },
];

// Export all RC questions from Set 36
export const rcQuestionsExpSet36: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet36 = {
  passage1: { id: "rc-exp36-p1", content: passage1, topic: "law", title: "Landlord-Tenant Law and Housing Rights" },
  passage2: { id: "rc-exp36-p2", content: passage2, topic: "natural-sciences", title: "Deep Sea Ecosystems" },
  passage3: { id: "rc-exp36-p3", content: passage3, topic: "humanities", title: "The Pre-Raphaelite Brotherhood" },
  passage4: { id: "rc-exp36-p4", content: passage4, topic: "social-sciences", title: "Attachment Theory" },
};
