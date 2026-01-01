// Reading Comprehension Expansion Set 21
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - SEPARATION OF POWERS AND EXECUTIVE AUTHORITY
// ============================================

const passage1 = `The doctrine of separation of powers, while not explicitly stated in the United States Constitution, forms the structural foundation of American constitutional governance. The Framers, drawing on Montesquieu's political philosophy and their experience with British parliamentary overreach, divided governmental authority among three branches: the legislative, executive, and judicial. This tripartite structure was designed to prevent the concentration of power that the Founders associated with tyranny, while still enabling effective governance.

Executive authority under this framework has proven particularly contentious, generating recurring debates about the proper scope of presidential power. Article II of the Constitution vests "the executive Power" in the President but provides less detailed enumeration of presidential responsibilities than Article I provides for Congress. This textual ambiguity has enabled competing interpretations. Advocates of the "unitary executive" theory contend that Article II grants the President complete control over all executive branch functions, including the authority to direct, supervise, and remove all executive officials. Critics argue that this reading ignores constitutional provisions authorizing Congress to structure the executive branch and vest certain duties in particular officers.

The growth of the administrative state has intensified these debates. Modern presidents oversee vast bureaucracies employing millions of federal workers and administering trillions in spending. Independent agencies, insulated from direct presidential control through restrictions on removal of agency heads, complicate traditional separation of powers analysis. Some scholars argue these agencies represent unconstitutional fourth branch entities that exercise legislative, executive, and judicial powers while remaining accountable to none of the constitutional branches. Defenders respond that Congress has constitutional authority to structure agencies and that insulation from political pressure enables more expert, consistent regulation.

War powers exemplify the ongoing struggle over executive authority. While the Constitution grants Congress the power to declare war and control military appropriations, presidents have routinely committed forces to combat without formal declarations. The War Powers Resolution of 1973 attempted to reclaim congressional prerogatives by requiring presidential consultation and imposing time limits on deployments not authorized by Congress. Every president since Nixon has questioned the Resolution's constitutionality, and its practical enforcement remains uncertain. The tension between congressional war-making authority and presidential commander-in-chief powers continues to generate litigation and political conflict.

The stakes of these separation of powers debates extend beyond legal doctrine to fundamental questions about democratic governance. Expansive executive authority enables swift, decisive action but concentrates power in ways the Framers sought to prevent. Legislative primacy ensures broader deliberation and representation but may produce gridlock and delayed responses to urgent problems. Finding the appropriate balance requires ongoing negotiation among the branches rather than any fixed constitutional formula.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp21-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The unitary executive theory provides the only defensible interpretation of Article II of the Constitution." },
      { letter: "B", text: "The separation of powers doctrine, while foundational to American governance, has generated persistent debates about executive authority that involve fundamental tensions between effective action and prevention of concentrated power." },
      { letter: "C", text: "The War Powers Resolution of 1973 definitively resolved the constitutional debate over presidential military authority." },
      { letter: "D", text: "Independent agencies are unconstitutional because they violate the separation of powers by combining legislative, executive, and judicial functions." },
      { letter: "E", text: "The Framers explicitly enumerated all presidential powers in Article II to prevent future disputes over executive authority." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the origins of separation of powers, examines debates over executive authority including the unitary executive theory and administrative agencies, discusses war powers conflicts, and concludes that finding the appropriate balance involves ongoing negotiation. Answer B captures this central theme about persistent debates involving fundamental tensions in constitutional governance.",
    difficulty: "medium",
    passageId: "rc-exp21-p1",
  },
  {
    id: "rc-exp21-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, advocates of the unitary executive theory argue that",
    answerChoices: [
      { letter: "A", text: "Congress should have complete control over executive branch structure" },
      { letter: "B", text: "Article II grants the President complete control over all executive branch functions" },
      { letter: "C", text: "independent agencies should be entirely insulated from presidential influence" },
      { letter: "D", text: "the War Powers Resolution is fully constitutional" },
      { letter: "E", text: "the Constitution explicitly lists all presidential powers" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Advocates of the unitary executive theory contend that Article II grants the President complete control over all executive branch functions, including the authority to direct, supervise, and remove all executive officials.'",
    difficulty: "easy",
    passageId: "rc-exp21-p1",
  },
  {
    id: "rc-exp21-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the Framers would most likely have viewed concentrated governmental power as",
    answerChoices: [
      { letter: "A", text: "essential to effective governance and democratic accountability" },
      { letter: "B", text: "acceptable when exercised by the executive branch but not the legislature" },
      { letter: "C", text: "associated with tyranny and therefore requiring structural prevention" },
      { letter: "D", text: "inevitable in any governmental system regardless of constitutional design" },
      { letter: "E", text: "desirable during wartime but problematic during peace" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that the tripartite structure 'was designed to prevent the concentration of power that the Founders associated with tyranny.' This indicates the Framers viewed concentrated power as connected to tyranny and structured the government to prevent it.",
    difficulty: "medium",
    passageId: "rc-exp21-p1",
  },
  {
    id: "rc-exp21-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author discusses the War Powers Resolution of 1973 primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that Congress has successfully reclaimed its constitutional war-making authority" },
      { letter: "B", text: "illustrate the ongoing struggle over executive authority and the difficulty of resolving separation of powers disputes" },
      { letter: "C", text: "argue that presidential military actions without congressional authorization are always unconstitutional" },
      { letter: "D", text: "compare American and British approaches to war powers" },
      { letter: "E", text: "explain why the Supreme Court has definitively ruled on the Resolution's constitutionality" },
    ],
    correctAnswer: "B",
    explanation: "The War Powers Resolution is presented as an example of the 'ongoing struggle over executive authority,' noting that every president since Nixon has questioned its constitutionality and 'its practical enforcement remains uncertain.' This illustrates the difficulty of resolving separation of powers disputes.",
    difficulty: "medium",
    passageId: "rc-exp21-p1",
  },
  {
    id: "rc-exp21-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debates over executive authority can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive, suggesting the debates are trivial and easily resolved" },
      { letter: "B", text: "partisan, clearly advocating for expanded presidential power" },
      { letter: "C", text: "analytical and balanced, presenting multiple perspectives on genuine constitutional tensions" },
      { letter: "D", text: "nostalgic, preferring the original understanding of the Framers to modern interpretations" },
      { letter: "E", text: "pessimistic, suggesting the constitutional system is fundamentally broken" },
    ],
    correctAnswer: "C",
    explanation: "The author presents arguments from both advocates and critics of the unitary executive, acknowledges the stakes of the debates, and concludes that finding balance 'requires ongoing negotiation among the branches rather than any fixed constitutional formula.' This reflects analytical balance rather than advocacy for any particular position.",
    difficulty: "medium",
    passageId: "rc-exp21-p1",
  },
  {
    id: "rc-exp21-006",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the information in the passage, which one of the following situations would most likely raise separation of powers concerns similar to those discussed?",
    answerChoices: [
      { letter: "A", text: "A state legislature passing a law regulating local zoning requirements" },
      { letter: "B", text: "Congress creating an agency whose head can only be removed by the President for cause, limiting presidential control over agency decisions" },
      { letter: "C", text: "A federal court interpreting a statute consistent with its plain language" },
      { letter: "D", text: "A President signing a bill passed by Congress into law" },
      { letter: "E", text: "A congressional committee holding hearings on proposed legislation" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses how 'Independent agencies, insulated from direct presidential control through restrictions on removal of agency heads, complicate traditional separation of powers analysis.' An agency head removable only for cause would raise similar concerns about whether such insulation is consistent with presidential control of the executive branch.",
    difficulty: "hard",
    passageId: "rc-exp21-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - OCEAN ACIDIFICATION
// ============================================

const passage2 = `Ocean acidification represents one of the most significant yet underappreciated consequences of anthropogenic carbon dioxide emissions. Since the Industrial Revolution, the oceans have absorbed approximately thirty percent of human-produced carbon dioxide, fundamentally altering seawater chemistry. When carbon dioxide dissolves in seawater, it forms carbonic acid, which dissociates and releases hydrogen ions, lowering the ocean's pH. Surface ocean pH has already declined by approximately 0.1 units since preindustrial times—a seemingly small number that actually represents a thirty percent increase in hydrogen ion concentration.

The chemical changes cascade through marine ecosystems with particular severity for calcifying organisms. Corals, mollusks, echinoderms, and certain plankton species build shells and skeletons from calcium carbonate. As acidification reduces the availability of carbonate ions, these organisms must expend more energy to construct and maintain their protective structures. Laboratory studies demonstrate that many species grow more slowly, produce thinner shells, and exhibit reduced reproductive success under projected future conditions. Pteropods, small planktonic snails that form a critical base of polar food webs, have already shown shell dissolution in some Antarctic waters.

The effects extend beyond calcification. Ocean acidification can impair sensory systems and behavior in fish and invertebrates. Experiments have shown that elevated carbon dioxide levels disrupt the ability of larval fish to detect predators and locate appropriate habitats. Some reef fish lose their natural avoidance of dangerous chemical cues under acidified conditions, making them more vulnerable to predation. These behavioral changes could have population-level consequences even for species not directly threatened by calcification impairment.

Ecosystem-level responses remain difficult to predict because species interactions may amplify or buffer direct effects. If acidification reduces populations of calcifying prey species, predators dependent on those prey will also decline. Conversely, some photosynthetic organisms may benefit from increased dissolved carbon dioxide, potentially compensating for losses elsewhere. Seagrass meadows and certain algae have shown enhanced growth under elevated carbon dioxide conditions in some studies. The net effect on any ecosystem depends on the relative sensitivities of its constituent species and their ecological relationships.

Natural variation complicates detection of acidification impacts in the field. Ocean pH varies seasonally, with depth, and across geographic regions. Coastal upwelling zones, where deep acidified waters rise to the surface, experience conditions that may preview future open-ocean chemistry. Shellfish hatcheries in the Pacific Northwest have already documented larval mortality linked to upwelled acidic water, providing early evidence that acidification is affecting commercially important species. Understanding how marine ecosystems will respond to continued acidification requires integrating laboratory experiments, field observations, and ecosystem modeling approaches.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp21-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Ocean acidification poses complex and significant threats to marine ecosystems through multiple pathways, though predicting ecosystem-level responses remains challenging." },
      { letter: "B", text: "Laboratory experiments have definitively established that all marine species will be harmed by ocean acidification." },
      { letter: "C", text: "Pteropods are the only marine organisms significantly affected by changing ocean chemistry." },
      { letter: "D", text: "Ocean pH has remained stable throughout Earth's history despite industrial emissions." },
      { letter: "E", text: "Seagrass meadows will inevitably replace coral reefs as ocean chemistry changes." },
    ],
    correctAnswer: "A",
    explanation: "The passage describes acidification's chemical basis, impacts on calcifying organisms and fish behavior, difficulties in predicting ecosystem responses, and challenges in field detection. Answer A captures the multifaceted threat while acknowledging the complexity of predicting ecosystem-level outcomes.",
    difficulty: "medium",
    passageId: "rc-exp21-p2",
  },
  {
    id: "rc-exp21-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, ocean acidification occurs because",
    answerChoices: [
      { letter: "A", text: "industrial pollution directly kills marine organisms that regulate pH" },
      { letter: "B", text: "dissolved carbon dioxide forms carbonic acid that releases hydrogen ions, lowering pH" },
      { letter: "C", text: "coastal upwelling has increased dramatically since the Industrial Revolution" },
      { letter: "D", text: "calcifying organisms remove too many carbonate ions from seawater" },
      { letter: "E", text: "photosynthetic organisms have declined, reducing carbon dioxide absorption" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'When carbon dioxide dissolves in seawater, it forms carbonic acid, which dissociates and releases hydrogen ions, lowering the ocean's pH.'",
    difficulty: "easy",
    passageId: "rc-exp21-p2",
  },
  {
    id: "rc-exp21-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the mention of a 0.1 unit decline in pH representing a thirty percent increase in hydrogen ion concentration suggests that",
    answerChoices: [
      { letter: "A", text: "pH is measured on a logarithmic scale where small numerical changes represent larger proportional changes" },
      { letter: "B", text: "hydrogen ion concentration has decreased since the Industrial Revolution" },
      { letter: "C", text: "the ocean's buffering capacity has prevented any meaningful chemical change" },
      { letter: "D", text: "pH changes are too small to affect marine organisms" },
      { letter: "E", text: "surface ocean pH was exceptionally high before the Industrial Revolution" },
    ],
    correctAnswer: "A",
    explanation: "The passage presents the 0.1 unit decline as 'a seemingly small number that actually represents a thirty percent increase in hydrogen ion concentration.' This contrast between a small numerical change and a large proportional change is characteristic of logarithmic scales.",
    difficulty: "hard",
    passageId: "rc-exp21-p2",
  },
  {
    id: "rc-exp21-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions seagrass meadows and certain algae primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that acidification will have entirely beneficial effects on marine ecosystems" },
      { letter: "B", text: "illustrate that some organisms may benefit from elevated carbon dioxide, complicating ecosystem predictions" },
      { letter: "C", text: "demonstrate that photosynthetic organisms are more important than calcifying organisms" },
      { letter: "D", text: "explain the mechanism by which carbon dioxide dissolves in seawater" },
      { letter: "E", text: "provide evidence that laboratory studies cannot be trusted" },
    ],
    correctAnswer: "B",
    explanation: "These organisms are mentioned as examples of species that 'may benefit from increased dissolved carbon dioxide, potentially compensating for losses elsewhere.' This serves to illustrate why ecosystem-level responses are 'difficult to predict' because different species respond differently.",
    difficulty: "medium",
    passageId: "rc-exp21-p2",
  },
  {
    id: "rc-exp21-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward predicting ecosystem-level responses to acidification is best characterized as",
    answerChoices: [
      { letter: "A", text: "confident that current models accurately forecast all outcomes" },
      { letter: "B", text: "dismissive of the need for further research" },
      { letter: "C", text: "appropriately cautious, acknowledging complexity while noting available evidence" },
      { letter: "D", text: "pessimistic that any understanding is possible" },
      { letter: "E", text: "unconcerned because acidification effects are negligible" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that 'Ecosystem-level responses remain difficult to predict' and that natural variation 'complicates detection' while still presenting available evidence from laboratory studies, field observations, and early commercial impacts. This reflects appropriate caution rather than overconfidence or dismissiveness.",
    difficulty: "medium",
    passageId: "rc-exp21-p2",
  },
  {
    id: "rc-exp21-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most weaken the author's suggestion that acidification is already affecting commercially important species?",
    answerChoices: [
      { letter: "A", text: "Pacific Northwest shellfish hatcheries have experienced larval mortality from causes unrelated to water chemistry for decades." },
      { letter: "B", text: "Laboratory studies confirm that shellfish larvae are sensitive to acidified conditions." },
      { letter: "C", text: "Coastal upwelling zones have existed for millions of years." },
      { letter: "D", text: "Open-ocean pH is declining at a rate consistent with atmospheric carbon dioxide increases." },
      { letter: "E", text: "Some shellfish populations in naturally variable pH environments show resilience to acidification." },
    ],
    correctAnswer: "A",
    explanation: "The author cites 'Shellfish hatcheries in the Pacific Northwest' documenting 'larval mortality linked to upwelled acidic water' as 'early evidence that acidification is affecting commercially important species.' If larval mortality from other causes has long occurred in these hatcheries, this would undermine the claim that recent mortality is attributable to acidification.",
    difficulty: "hard",
    passageId: "rc-exp21-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - SURREALISM AND THE UNCONSCIOUS
// ============================================

const passage3 = `The Surrealist movement, launched by Andre Breton's 1924 Manifesto, sought to revolutionize not merely art but human consciousness itself. Drawing on Sigmund Freud's theories of the unconscious, the Surrealists believed that rational thought represented only a superficial layer of mental life, beneath which lay vast reservoirs of repressed desires, forgotten memories, and associative connections that constituted authentic human experience. Art that accessed these depths could liberate individuals from the constraints of bourgeois rationality and transform society.

The Surrealists developed distinctive techniques to bypass conscious control and tap unconscious processes. Automatism—writing or drawing without deliberate planning—aimed to produce images directly from the unconscious mind. Max Ernst pioneered frottage (rubbing) and decalcomania (pressing paint between surfaces) to generate random textures that could stimulate unexpected associations. Exquisite corpse, a collaborative drawing game where each participant adds to a figure without seeing previous contributions, exploited the conjunction of unrelated images. These methods were intended not as ends in themselves but as means of accessing deeper psychic realities.

The relationship between Surrealism and Freudian psychoanalysis was more complicated than the Surrealists themselves acknowledged. Freud aimed to bring unconscious material into conscious awareness where it could be rationally examined and integrated, ultimately strengthening ego control. The Surrealists, by contrast, celebrated the unconscious as a realm of liberation and sought to dissolve rather than strengthen conscious rationality. When Breton finally met Freud in 1921, the psychoanalyst reportedly showed little interest in the artistic movement that claimed his theories as inspiration. Freud valued art primarily for its therapeutic potential, not as a vehicle for social revolution.

Salvador Dali's "paranoiac-critical method" offered an alternative approach that engaged conscious and unconscious processes simultaneously. Rather than passively receiving unconscious imagery through automatism, Dali actively cultivated delusional states and then systematically analyzed the resulting visions. His precisely rendered dreamscapes combined meticulous technique with irrational juxtapositions, producing images that unsettled viewers precisely because their impossible content was depicted with photographic clarity. This synthesis of conscious craft and unconscious content distinguished Dali from Surrealists who privileged pure automatism.

Surrealism's influence extended far beyond its core membership and period of greatest activity. The movement's exploration of dreams, sexuality, and the irrational shaped subsequent developments in literature, film, and visual art. Its techniques of unexpected juxtaposition became staples of advertising and popular culture, often stripped of their revolutionary intentions. Perhaps most significantly, Surrealism helped establish the unconscious as a legitimate subject for artistic exploration, challenging Enlightenment assumptions that reason should govern both art and society.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp21-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Salvador Dali was the only authentic Surrealist because he rejected automatism in favor of the paranoiac-critical method." },
      { letter: "B", text: "Surrealism sought to access the unconscious through various techniques, had a complicated relationship with Freudian theory, and exerted lasting influence despite tensions within the movement." },
      { letter: "C", text: "Freud enthusiastically supported the Surrealist movement and considered it the most important application of his theories." },
      { letter: "D", text: "Automatism proved to be the only effective technique for producing authentic unconscious imagery." },
      { letter: "E", text: "Surrealism failed completely because its techniques were eventually adopted by advertising." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Surrealist aims and techniques, examines the complex relationship with Freud's theories, presents Dali's alternative approach, and discusses lasting influence. Answer B captures this comprehensive treatment of the movement's methods, theoretical tensions, and legacy.",
    difficulty: "medium",
    passageId: "rc-exp21-p3",
  },
  {
    id: "rc-exp21-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the Surrealists believed that rational thought",
    answerChoices: [
      { letter: "A", text: "represented only a superficial layer of mental life beneath which lay deeper unconscious material" },
      { letter: "B", text: "was the highest form of human consciousness and should be strengthened through art" },
      { letter: "C", text: "was entirely compatible with Freud's therapeutic goals" },
      { letter: "D", text: "should be the primary basis for artistic production" },
      { letter: "E", text: "had no connection to bourgeois social structures" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that the Surrealists 'believed that rational thought represented only a superficial layer of mental life, beneath which lay vast reservoirs of repressed desires, forgotten memories, and associative connections.'",
    difficulty: "easy",
    passageId: "rc-exp21-p3",
  },
  {
    id: "rc-exp21-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Freud's apparent lack of interest in Surrealism most likely stemmed from",
    answerChoices: [
      { letter: "A", text: "his unfamiliarity with modern visual art forms" },
      { letter: "B", text: "a fundamental disagreement about whether the unconscious should be celebrated or subjected to rational integration" },
      { letter: "C", text: "personal animosity toward Andre Breton" },
      { letter: "D", text: "his belief that the unconscious mind did not exist" },
      { letter: "E", text: "his view that all art was therapeutically worthless" },
    ],
    correctAnswer: "B",
    explanation: "The passage contrasts Freud's aim to bring 'unconscious material into conscious awareness where it could be rationally examined' with the Surrealists' goal to 'dissolve rather than strengthen conscious rationality.' This fundamental disagreement about the purpose of accessing the unconscious explains Freud's apparent disinterest.",
    difficulty: "medium",
    passageId: "rc-exp21-p3",
  },
  {
    id: "rc-exp21-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions frottage, decalcomania, and exquisite corpse primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Surrealists for relying on gimmicks rather than genuine artistic talent" },
      { letter: "B", text: "provide examples of techniques developed to bypass conscious control and access the unconscious" },
      { letter: "C", text: "demonstrate that Max Ernst was more important than other Surrealists" },
      { letter: "D", text: "explain why Dali rejected automatism in favor of his paranoiac-critical method" },
      { letter: "E", text: "show that Freud directly influenced Surrealist artistic practice" },
    ],
    correctAnswer: "B",
    explanation: "These techniques are introduced as part of the discussion of how 'Surrealists developed distinctive techniques to bypass conscious control and tap unconscious processes.' Each technique is described as a method for generating unexpected associations or images from beyond conscious intention.",
    difficulty: "medium",
    passageId: "rc-exp21-p3",
  },
  {
    id: "rc-exp21-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the Surrealists' interpretation of Freudian theory can best be described as",
    answerChoices: [
      { letter: "A", text: "wholly endorsing, accepting the Surrealist reading as the only correct interpretation" },
      { letter: "B", text: "critical, noting that the Surrealists misunderstood or diverged from Freud's actual intentions" },
      { letter: "C", text: "confused about the basic principles of psychoanalysis" },
      { letter: "D", text: "indifferent to theoretical considerations" },
      { letter: "E", text: "hostile to both Freud and the Surrealists" },
    ],
    correctAnswer: "B",
    explanation: "The author states that 'The relationship between Surrealism and Freudian psychoanalysis was more complicated than the Surrealists themselves acknowledged' and notes that Freud's goals differed fundamentally from theirs. This critical stance highlights the gap between Surrealist claims and Freudian intentions.",
    difficulty: "medium",
    passageId: "rc-exp21-p3",
  },
  {
    id: "rc-exp21-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A movement's goals and methods are introduced, its theoretical basis is examined critically, an alternative approach within the movement is discussed, and its lasting influence is assessed." },
      { letter: "B", text: "Two opposing artistic movements are compared and one is declared superior to the other." },
      { letter: "C", text: "A chronological history of twentieth-century art is presented from its origins to the present." },
      { letter: "D", text: "An artist's complete body of work is analyzed and evaluated." },
      { letter: "E", text: "A scientific theory is proposed, tested through experiments, and confirmed by evidence." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces Surrealism's aims and techniques (paragraphs 1-2), critically examines its relationship to Freudian theory (paragraph 3), discusses Dali's alternative paranoiac-critical method (paragraph 4), and assesses the movement's lasting influence (paragraph 5).",
    difficulty: "hard",
    passageId: "rc-exp21-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - RETIREMENT AND AGING DEMOGRAPHICS
// ============================================

const passage4 = `The concept of retirement as a distinct life stage following decades of employment is historically recent and geographically limited. Before the twentieth century, most people worked until physical incapacity or death. The institutionalization of retirement emerged from the convergence of several factors: industrial economies that valued younger workers for physically demanding jobs, pension systems that made withdrawal from work financially feasible, and increasing longevity that made post-work life a realistic prospect for growing numbers of people. Today, however, the demographic and economic foundations that supported this model are shifting dramatically.

Population aging represents the most significant demographic transformation in human history. Declining fertility rates and increasing life expectancy have combined to produce unprecedented age structures in developed nations. Japan, where more than a quarter of the population is over sixty-five and the median age approaches fifty, exemplifies an extreme version of trends visible throughout the industrialized world. The ratio of working-age adults to retirees—the dependency ratio—is declining in virtually every developed economy, raising questions about how pension systems and healthcare programs designed for younger populations will be sustained.

Economic consequences of population aging extend beyond pension financing. Labor force participation among older workers has begun increasing in many countries after decades of decline, driven partly by inadequate retirement savings and partly by policy changes raising retirement ages and reducing early retirement incentives. The traditional three-stage life course—education, work, retirement—is giving way to more complex patterns involving multiple careers, periodic retraining, and gradual rather than abrupt workforce exit. These changes challenge employers to adapt workplace practices and benefit structures to older workers' needs.

The health dimensions of aging complicate purely economic analyses. Although older adults today are healthier than previous generations at comparable ages, the extension of life has also extended the period during which chronic illness and functional limitations accumulate. Healthcare costs rise sharply with age, and long-term care needs for the oldest old represent a growing challenge for families and public programs alike. Moreover, the relationship between work and health in later life runs in both directions: continued employment may promote cognitive and physical health, but demanding or stressful work can accelerate decline.

Cultural attitudes toward aging and retirement vary substantially across societies and are themselves evolving. In some contexts, retirement symbolizes earned rest after lifelong labor; in others, it represents marginalization and loss of productive purpose. Policies that extend working lives must navigate these meanings while addressing practical barriers to continued employment, including age discrimination, inadequate accommodations for physical limitations, and skill obsolescence. How societies manage the transition to older age structures will shape economic prosperity, intergenerational relations, and individual well-being for decades to come.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp21-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that retirement should be abolished and all adults should work until death" },
      { letter: "B", text: "examine how population aging is challenging traditional retirement models and creating complex economic, health, and cultural implications" },
      { letter: "C", text: "prove that Japan's approach to aging is superior to other countries' policies" },
      { letter: "D", text: "demonstrate that healthcare costs are the only significant consequence of population aging" },
      { letter: "E", text: "criticize older workers for refusing to retire and make room for younger employees" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces retirement's historical development, examines demographic changes and their economic implications, discusses health dimensions, and addresses cultural attitudes. Answer B captures this multifaceted examination of how aging populations challenge established models.",
    difficulty: "medium",
    passageId: "rc-exp21-p4",
  },
  {
    id: "rc-exp21-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the dependency ratio is",
    answerChoices: [
      { letter: "A", text: "increasing in all developed economies due to higher birth rates" },
      { letter: "B", text: "declining in virtually every developed economy as the ratio of workers to retirees decreases" },
      { letter: "C", text: "irrelevant to pension system sustainability" },
      { letter: "D", text: "highest in countries with the youngest populations" },
      { letter: "E", text: "a measure of healthcare costs relative to economic output" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'The ratio of working-age adults to retirees—the dependency ratio—is declining in virtually every developed economy, raising questions about how pension systems and healthcare programs designed for younger populations will be sustained.'",
    difficulty: "easy",
    passageId: "rc-exp21-p4",
  },
  {
    id: "rc-exp21-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the author would most likely agree that the relationship between work and health in later life is",
    answerChoices: [
      { letter: "A", text: "simple and well-understood, with work always promoting health" },
      { letter: "B", text: "complex and bidirectional, with work potentially promoting or undermining health depending on circumstances" },
      { letter: "C", text: "irrelevant to policy discussions about retirement age" },
      { letter: "D", text: "entirely negative, with all work harming older adults' health" },
      { letter: "E", text: "impossible to study using current research methods" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'the relationship between work and health in later life runs in both directions: continued employment may promote cognitive and physical health, but demanding or stressful work can accelerate decline.' This indicates a complex, bidirectional relationship where work can be beneficial or harmful depending on conditions.",
    difficulty: "medium",
    passageId: "rc-exp21-p4",
  },
  {
    id: "rc-exp21-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions Japan primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Japan's policies should be adopted by all developed nations" },
      { letter: "B", text: "provide an extreme example of demographic aging trends visible throughout the industrialized world" },
      { letter: "C", text: "contrast Japanese cultural attitudes with Western approaches to retirement" },
      { letter: "D", text: "demonstrate that population aging only affects Asian countries" },
      { letter: "E", text: "explain the historical origins of the retirement concept" },
    ],
    correctAnswer: "B",
    explanation: "Japan is described as exemplifying 'an extreme version of trends visible throughout the industrialized world,' with more than a quarter of its population over sixty-five and a median age approaching fifty. It serves as a striking illustration of broader demographic patterns.",
    difficulty: "medium",
    passageId: "rc-exp21-p4",
  },
  {
    id: "rc-exp21-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward policies extending working lives can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive without any reservations" },
      { letter: "B", text: "recognizing potential benefits while acknowledging practical and cultural barriers that must be addressed" },
      { letter: "C", text: "completely opposed on grounds that older workers deserve rest" },
      { letter: "D", text: "indifferent to policy implications of demographic change" },
      { letter: "E", text: "focused exclusively on employers' interests rather than workers' needs" },
    ],
    correctAnswer: "B",
    explanation: "The author notes that 'Policies that extend working lives must navigate these meanings while addressing practical barriers to continued employment, including age discrimination, inadequate accommodations for physical limitations, and skill obsolescence.' This acknowledges both the potential need for such policies and the significant barriers they must address.",
    difficulty: "medium",
    passageId: "rc-exp21-p4",
  },
  {
    id: "rc-exp21-024",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which one of the following policies would most directly address the challenges of population aging as the author describes them?",
    answerChoices: [
      { letter: "A", text: "Lowering the retirement age to encourage older workers to leave the workforce earlier" },
      { letter: "B", text: "Eliminating all pension programs to reduce government spending" },
      { letter: "C", text: "Creating programs that support gradual workforce transitions, workplace accommodations, and retraining opportunities for older workers" },
      { letter: "D", text: "Restricting healthcare access to reduce the oldest population" },
      { letter: "E", text: "Prohibiting employers from hiring anyone over age fifty" },
    ],
    correctAnswer: "C",
    explanation: "The passage notes that the traditional life course 'is giving way to more complex patterns involving multiple careers, periodic retraining, and gradual rather than abrupt workforce exit' and that policies must address 'inadequate accommodations for physical limitations, and skill obsolescence.' Answer C directly addresses these identified needs for gradual transitions, accommodations, and retraining.",
    difficulty: "hard",
    passageId: "rc-exp21-p4",
  },
];

// Export all RC questions from Set 21
export const rcQuestionsExpSet21: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet21 = {
  passage1: { id: "rc-exp21-p1", content: passage1, topic: "law", title: "Separation of Powers and Executive Authority" },
  passage2: { id: "rc-exp21-p2", content: passage2, topic: "natural-sciences", title: "Ocean Acidification and Marine Ecosystems" },
  passage3: { id: "rc-exp21-p3", content: passage3, topic: "humanities", title: "Surrealism and the Unconscious in Art" },
  passage4: { id: "rc-exp21-p4", content: passage4, topic: "social-sciences", title: "Retirement and Aging Demographics" },
};
