// Reading Comprehension Questions - Set 13 (Sociology & Anthropology)
import { Question } from "../lsat-types";

// Passage 1: Cultural Relativism and Universal Human Rights
const passage1 = `The tension between cultural relativism and universal human rights represents one of the most vexing problems in contemporary ethics and international law. Cultural relativists argue that moral standards vary across societies and that judging other cultures by one's own values constitutes ethnocentrism. Advocates of universal human rights contend that certain fundamental protections—freedom from torture, slavery, and arbitrary execution, for instance—apply to all humans regardless of cultural context. This debate is not merely theoretical; it has profound implications for international intervention, development policy, and the legitimacy of cross-cultural moral criticism.

Cultural relativism emerged partly as a corrective to earlier anthropology's evolutionary assumptions, which ranked societies on a developmental hierarchy with Western industrial cultures at the apex. Early anthropologists like Franz Boas and Ruth Benedict emphasized that cultures should be understood on their own terms, as coherent systems of meaning adapted to particular environmental and historical circumstances. Practices that appear bizarre or objectionable from outside might serve important social functions within their cultural context. Imposing external standards risks destroying cultural diversity and reproducing colonial patterns of domination.

However, strong cultural relativism faces serious difficulties. If moral standards are entirely culture-specific, on what basis can we criticize practices within our own culture? The very anthropologists who developed cultural relativism typically opposed racism and social inequality in their own societies, implicitly invoking standards that transcend particular cultures. Moreover, cultures are not homogeneous entities with unanimous values. Internal diversity and disagreement exist within all societies; privileging "traditional" practices often means endorsing the perspectives of dominant groups while silencing marginalized voices, particularly women and minority populations who may contest those traditions.

The universal human rights framework, articulated in documents like the Universal Declaration of Human Rights, attempts to establish minimum protections applicable across cultural boundaries. Proponents argue these rights reflect not Western cultural imperialism but aspirations articulated by diverse societies through international dialogue. They point to activists from non-Western societies who invoke human rights principles to challenge oppressive practices within their own cultures, suggesting these concepts have genuine cross-cultural resonance rather than representing purely Western constructs.

Yet critics note that human rights discourse emerged from particular historical circumstances in Western Europe and North America, and its individualistic emphasis may conflict with more communitarian cultural orientations. The apparent universality of human rights may mask cultural particularism—a specific tradition that has achieved global dominance through political and economic power rather than genuine universality. When Western nations invoke human rights to justify military intervention or economic sanctions while ignoring their own violations, the accusation of selective application gains force.

Perhaps the most promising approach seeks middle ground, distinguishing between strong and weak versions of both positions. Weak cultural relativism acknowledges cultural variation in values while rejecting extreme positions that would prohibit all cross-cultural judgment. Weak universalism maintains that certain core protections apply universally while recognizing that their specific interpretation and implementation may vary across contexts. Both positions require ongoing dialogue rather than assuming either complete relativity or perfectly transparent universality. The challenge lies in developing frameworks for cross-cultural ethical deliberation that take seriously both human commonality and cultural difference without collapsing into either naive universalism or paralyzing relativism.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set13-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Cultural relativism is completely correct and universal human rights should be rejected" },
      { letter: "B", text: "Universal human rights are purely Western constructs with no cross-cultural relevance" },
      { letter: "C", text: "The tension between cultural relativism and universal human rights requires middle ground recognizing both cultural variation and core protections" },
      { letter: "D", text: "All cultures share identical moral values and no variation exists" },
      { letter: "E", text: "Cross-cultural ethical judgment is always ethnocentric and should never occur" },
    ],
    correctAnswer: "C",
    explanation: "The passage explores tensions between these positions, critiques both strong versions, and suggests 'the most promising approach seeks middle ground' through weak versions that recognize both cultural variation and core protections requiring ongoing dialogue.",
    difficulty: "medium",
    passageId: "rc13-p1",
  },
  {
    id: "rc-set13-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions Franz Boas and Ruth Benedict primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize all anthropological research as worthless" },
      { letter: "B", text: "explain cultural relativism's origins as corrective to evolutionary assumptions about cultural hierarchy" },
      { letter: "C", text: "argue that all cultural practices should be accepted without question" },
      { letter: "D", text: "demonstrate that anthropologists never opposed social inequality" },
      { letter: "E", text: "prove that Western cultures are developmentally superior" },
    ],
    correctAnswer: "B",
    explanation: "Boas and Benedict are presented as developing cultural relativism that 'emphasized that cultures should be understood on their own terms' as a corrective to earlier anthropology's ranking of societies on a developmental hierarchy.",
    difficulty: "easy",
    passageId: "rc13-p1",
  },
  {
    id: "rc-set13-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the fact that anthropologists who developed cultural relativism opposed racism in their own societies suggests that",
    answerChoices: [
      { letter: "A", text: "they maintained complete consistency with strong cultural relativism" },
      { letter: "B", text: "they implicitly invoked standards transcending particular cultures, creating tension with strong relativism" },
      { letter: "C", text: "racism is universally accepted across all cultures" },
      { letter: "D", text: "no moral standards exist within any culture" },
      { letter: "E", text: "cultural relativism requires accepting all practices in one's own culture" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents this as a difficulty for strong relativism, noting anthropologists 'implicitly invoking standards that transcend particular cultures' when criticizing practices in their own societies.",
    difficulty: "medium",
    passageId: "rc13-p1",
  },
  {
    id: "rc-set13-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, proponents of universal human rights argue that these rights reflect",
    answerChoices: [
      { letter: "A", text: "purely Western cultural imperialism with no input from other societies" },
      { letter: "B", text: "aspirations articulated by diverse societies through international dialogue" },
      { letter: "C", text: "values that no non-Western activists have ever invoked" },
      { letter: "D", text: "standards that only apply to Western nations" },
      { letter: "E", text: "principles completely absent from all traditional cultures" },
    ],
    correctAnswer: "B",
    explanation: "The passage states proponents argue these rights 'reflect not Western cultural imperialism but aspirations articulated by diverse societies through international dialogue.'",
    difficulty: "easy",
    passageId: "rc13-p1",
  },
  {
    id: "rc-set13-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that privileging 'traditional' practices within cultures often",
    answerChoices: [
      { letter: "A", text: "perfectly represents the unanimous views of all members" },
      { letter: "B", text: "endorses dominant groups' perspectives while silencing marginalized voices" },
      { letter: "C", text: "eliminates all forms of internal disagreement" },
      { letter: "D", text: "proves that cultures are completely homogeneous" },
      { letter: "E", text: "demonstrates the impossibility of cultural change" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that privileging traditional practices 'often means endorsing the perspectives of dominant groups while silencing marginalized voices, particularly women and minority populations.'",
    difficulty: "hard",
    passageId: "rc13-p1",
  },
];

// Passage 2: Gift Economies and Market Exchange
const passage2 = `The contrast between gift economies and market-based exchange systems has long fascinated economic anthropologists, revealing that contemporary market relations represent one possible mode of economic organization rather than the inevitable expression of human nature. Marcel Mauss's foundational analysis of gift exchange demonstrated that in many societies, reciprocal giving establishes and maintains social relationships through obligations that differ fundamentally from the impersonal, instantaneous transactions characteristic of market economies. Understanding these differences illuminates not only the diversity of economic systems but also how market ideology has naturalized historically specific arrangements.

In gift economies, objects circulate through networks of reciprocal obligations. When someone gives a gift, the recipient incurs a debt that must eventually be repaid—though not necessarily with equivalent material value and certainly not immediately. The gift creates a social bond, an ongoing relationship marked by mutual obligation. Refusing a gift or insisting on immediate repayment ruptures the social connection, treating the exchange as a market transaction rather than a relationship. The famous potlatch ceremonies of Pacific Northwest indigenous peoples exemplified this logic taken to extremes, with leaders competing through lavish gift-giving that established prestige and social hierarchy.

Market exchange, by contrast, aims for equivalence and immediate closure. When you purchase an item at market price, the transaction is complete; neither party owes the other anything further. The relationship between buyer and seller is impersonal and transient. This allows flexibility—you need not consider potential sellers' social relationships to you—but it also eliminates the relationship-building function of exchange. Money facilitates this impersonality by providing a universal medium of exchange that renders all goods commensurable, reducing qualitative differences to quantitative prices.

The ideology accompanying market systems presents this mode of exchange as natural, universal, and efficient. Classical economics portrayed humans as inherently self-interested maximizers of utility who engage in exchange only when both parties benefit. From this perspective, market relations represent human nature finally freed from artificial constraints. Yet anthropological evidence demonstrates that self-interested maximization appears as a dominant motivation primarily in societies organized around market relations. In gift economies, prestige, honor, relationship maintenance, and collective well-being often outweigh narrow economic calculation.

The expansion of market relations involves actively dissolving alternative economic forms. The enclosure movements in early modern Europe privatized common lands, forcing peasants who had subsisted through various non-market arrangements into wage labor. Colonialism frequently aimed to create markets by imposing taxes payable only in cash, compelling subsistence producers to sell labor or products. Contemporary development policies often assume that extending market relations represents progress, though this may destroy functioning economic systems organized around different principles.

However, the dichotomy between gift and market economies can be overstated. Most societies combine elements of both systems, with different principles governing different spheres of exchange. Even in market-dominated societies, gifts circulate within families and among friends according to norms of reciprocity that would be violated by treating these as market transactions. Conversely, societies often characterized as gift economies may include specialized forms of barter and trade. The question is not whether one system entirely excludes the other but which principles dominate and how different modes of exchange are organized within particular social contexts.

Moreover, recognizing the historical specificity and cultural construction of market relations need not entail romantic nostalgia for pre-market societies or rejection of all market mechanisms. Rather, it creates space for questioning which areas of life should be organized according to market principles and which might be better governed by alternative logics. Gift economy insights remind us that treating everything as commodity potentially corrodes forms of relationship and value not reducible to price—a consideration increasingly relevant as market logic extends into previously protected domains like education, health care, and personal relationships.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set13-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central claim of the passage?",
    answerChoices: [
      { letter: "A", text: "Market exchange represents the only natural and efficient economic system" },
      { letter: "B", text: "Gift economies demonstrate that market relations are one possible mode among others, with different social functions" },
      { letter: "C", text: "All societies operate exclusively on either gift or market principles with no combination" },
      { letter: "D", text: "Human beings are inherently self-interested utility maximizers in all contexts" },
      { letter: "E", text: "Pre-market societies were perfect and should be exactly replicated" },
    ],
    correctAnswer: "B",
    explanation: "The passage argues that studying gift economies reveals 'contemporary market relations represent one possible mode of economic organization rather than the inevitable expression of human nature' and shows how these systems serve different social functions.",
    difficulty: "medium",
    passageId: "rc13-p2",
  },
  {
    id: "rc-set13-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses potlatch ceremonies primarily in order to",
    answerChoices: [
      { letter: "A", text: "condemn indigenous peoples for wasteful practices" },
      { letter: "B", text: "illustrate gift economy logic taken to extremes where lavish giving establishes prestige" },
      { letter: "C", text: "argue that all economic systems should adopt potlatch practices" },
      { letter: "D", text: "demonstrate that gift exchange never creates social hierarchy" },
      { letter: "E", text: "prove that market exchange existed in all pre-colonial societies" },
    ],
    correctAnswer: "B",
    explanation: "Potlatch ceremonies are presented as exemplifying gift economy logic 'taken to extremes, with leaders competing through lavish gift-giving that established prestige and social hierarchy.'",
    difficulty: "easy",
    passageId: "rc13-p2",
  },
  {
    id: "rc-set13-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, anthropological evidence suggests that self-interested maximization as dominant motivation",
    answerChoices: [
      { letter: "A", text: "appears universally across all human societies throughout history" },
      { letter: "B", text: "is completely absent from all market-based economies" },
      { letter: "C", text: "appears as dominant primarily in societies organized around market relations" },
      { letter: "D", text: "proves that human nature is fixed and unchanging" },
      { letter: "E", text: "demonstrates that gift economies never existed" },
    ],
    correctAnswer: "C",
    explanation: "The passage states 'anthropological evidence demonstrates that self-interested maximization appears as a dominant motivation primarily in societies organized around market relations.'",
    difficulty: "medium",
    passageId: "rc13-p2",
  },
  {
    id: "rc-set13-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, when someone gives a gift in a gift economy, the recipient",
    answerChoices: [
      { letter: "A", text: "owes nothing and the transaction is immediately complete" },
      { letter: "B", text: "must repay with exactly equivalent material value immediately" },
      { letter: "C", text: "incurs a debt that must eventually be repaid, creating an ongoing social bond" },
      { letter: "D", text: "should refuse the gift to avoid any obligations" },
      { letter: "E", text: "pays market price for the item given" },
    ],
    correctAnswer: "C",
    explanation: "The passage explains that when someone gives a gift, 'the recipient incurs a debt that must eventually be repaid' and 'the gift creates a social bond, an ongoing relationship marked by mutual obligation.'",
    difficulty: "easy",
    passageId: "rc13-p2",
  },
  {
    id: "rc-set13-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward recognizing the cultural construction of market relations can best be characterized as",
    answerChoices: [
      { letter: "A", text: "believing it requires romantic nostalgia and rejection of all markets" },
      { letter: "B", text: "viewing it as creating space for questioning which areas should be governed by market principles" },
      { letter: "C", text: "certainty that all market mechanisms must be immediately eliminated" },
      { letter: "D", text: "indifference to how different spheres of life are organized" },
      { letter: "E", text: "hostility toward any criticism of market ideology" },
    ],
    correctAnswer: "B",
    explanation: "The passage states this recognition 'creates space for questioning which areas of life should be organized according to market principles and which might be better governed by alternative logics.'",
    difficulty: "hard",
    passageId: "rc13-p2",
  },
];

// Passage 3: Kinship Systems and Social Organization
const passage3 = `Kinship systems—the social recognition and organization of family relationships—vary dramatically across cultures in ways that challenge assumptions about the naturalness of Western nuclear family structures. While biological reproduction provides a universal substrate, how societies recognize, classify, and assign rights and responsibilities based on kinship is culturally variable. Understanding this variation reveals that seemingly self-evident categories like "parent," "sibling," or "cousin" are cultural constructions that organize social life in diverse ways.

In Western industrial societies, kinship is primarily understood through biological descent, with sharp distinctions between different relationship types. Parents are distinguished from aunts and uncles; siblings from cousins; lineal relatives (direct ancestors and descendants) from collateral relatives (those sharing ancestors but not in direct line). Rights and obligations vary accordingly, with the nuclear family household—parents and children—constituting the primary kinship unit. This system, which anthropologists classify as Eskimo kinship, represents only one possibility among many.

Alternative systems organize relationships quite differently. In Hawaiian kinship, which appears in many Polynesian societies, all relatives of the same generation and sex are classified together. All of one's parents' siblings are called by the same term as one's own parents; all of their children are called by the same term as one's siblings. This terminological pattern reflects social practices where children might be raised by various relatives, not exclusively by biological parents, and where collective responsibility for children is emphasized over exclusive parental authority.

Iroquois kinship, found among many Native American groups and elsewhere, distinguishes parallel relatives (related through same-sex siblings) from cross relatives (related through opposite-sex siblings). A father's brother is classified with father, but a father's sister is distinguished; similarly, mother's sister is classified with mother, but mother's brother is distinguished. This pattern typically correlates with cross-cousin marriage preferences and systems of reciprocal exchange between lineages. The kinship terminology encodes and reinforces these social arrangements.

Perhaps most dramatically different from Western patterns are systems with marriage classes, like those of many Australian Aboriginal societies. In these systems, the entire society is divided into named categories based on kinship position, with strict rules about which categories may intermarry. Everyone's kinship position relative to everyone else is specified, and kinship terminology extends to the entire community. These systems organize not merely family relationships but broader social structure, with kinship categories determining ritual obligations, economic partnerships, and political alliances.

The functional explanations for kinship variation remain debated. Early evolutionary approaches proposed a universal sequence of kinship systems corresponding to stages of social development, but this has been thoroughly discredited. Ecological theories link kinship patterns to subsistence strategies: patrilineal systems (tracing descent through males) supposedly correlate with herding societies where male labor predominates, while matrilineal systems (tracing descent through females) correlate with horticultural societies where female labor is crucial. While such correlations exist, they are imperfect and cannot fully explain the diversity observed.

Contemporary anthropologists increasingly recognize that kinship systems not only reflect but actively constitute social reality. By defining who counts as kin and what obligations follow, these systems create rather than merely reflect social relationships. The Western assumption that biological relatedness provides the natural foundation for kinship is itself culturally specific; many societies recognize social bonds created through adoption, marriage alliance, or ritual as equivalent to or more significant than biological connections. Understanding kinship variation thus requires attending to how different societies conceptualize personhood, social bonds, and the relationship between biological and social dimensions of human existence.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set13-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "All kinship systems are identical across cultures" },
      { letter: "B", text: "Kinship systems vary dramatically across cultures, revealing that Western nuclear family structures are one possibility among many cultural constructions" },
      { letter: "C", text: "Biological relationships uniquely determine kinship in all societies" },
      { letter: "D", text: "Western kinship systems are naturally superior to all other forms" },
      { letter: "E", text: "Kinship has no relationship to social organization" },
    ],
    correctAnswer: "B",
    explanation: "The passage argues that kinship 'vary dramatically across cultures in ways that challenge assumptions about the naturalness of Western nuclear family structures' and that 'seemingly self-evident categories...are cultural constructions.'",
    difficulty: "medium",
    passageId: "rc13-p3",
  },
  {
    id: "rc-set13-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses Hawaiian kinship primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that biological parents are irrelevant in all societies" },
      { letter: "B", text: "illustrate a system where relatives of same generation and sex are classified together, reflecting collective child-rearing" },
      { letter: "C", text: "argue that Western kinship should be replaced with Hawaiian patterns" },
      { letter: "D", text: "demonstrate that kinship terminology has no relationship to social practices" },
      { letter: "E", text: "show that all Polynesian societies are identical" },
    ],
    correctAnswer: "B",
    explanation: "Hawaiian kinship is presented as an alternative system where 'all relatives of the same generation and sex are classified together,' reflecting practices where 'collective responsibility for children is emphasized.'",
    difficulty: "easy",
    passageId: "rc13-p3",
  },
  {
    id: "rc-set13-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the Iroquois kinship pattern of distinguishing parallel from cross relatives typically correlates with",
    answerChoices: [
      { letter: "A", text: "complete prohibition of all marriages" },
      { letter: "B", text: "cross-cousin marriage preferences and reciprocal exchange between lineages" },
      { letter: "C", text: "elimination of all kinship terminology" },
      { letter: "D", text: "identical treatment of all relatives regardless of relationship" },
      { letter: "E", text: "exclusive nuclear family households" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the Iroquois pattern 'typically correlates with cross-cousin marriage preferences and systems of reciprocal exchange between lineages.'",
    difficulty: "medium",
    passageId: "rc13-p3",
  },
  {
    id: "rc-set13-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, early evolutionary approaches to kinship systems have been",
    answerChoices: [
      { letter: "A", text: "universally accepted by contemporary anthropologists" },
      { letter: "B", text: "proven completely accurate through recent research" },
      { letter: "C", text: "thoroughly discredited" },
      { letter: "D", text: "shown to perfectly explain all kinship variation" },
      { letter: "E", text: "never questioned or challenged" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that early evolutionary approaches proposing 'a universal sequence of kinship systems corresponding to stages of social development...has been thoroughly discredited.'",
    difficulty: "easy",
    passageId: "rc13-p3",
  },
  {
    id: "rc-set13-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that contemporary anthropologists view kinship systems as",
    answerChoices: [
      { letter: "A", text: "merely reflecting pre-existing biological relationships" },
      { letter: "B", text: "passively mirroring social structures without creating anything" },
      { letter: "C", text: "actively constituting social reality by defining who counts as kin and what obligations follow" },
      { letter: "D", text: "completely unrelated to how societies conceptualize personhood" },
      { letter: "E", text: "identical in all times and places" },
    ],
    correctAnswer: "C",
    explanation: "The passage states contemporary anthropologists 'increasingly recognize that kinship systems not only reflect but actively constitute social reality. By defining who counts as kin and what obligations follow, these systems create rather than merely reflect social relationships.'",
    difficulty: "hard",
    passageId: "rc13-p3",
  },
];

// Passage 4: Urbanization and Social Networks
const passage4 = `The classical sociological theories of urbanization, particularly those of Georg Simmel and Louis Wirth, portrayed city life as fundamentally transforming social relationships. They argued that urban environments, characterized by high density, heterogeneity, and anonymity, weakened traditional community bonds based on kinship and neighborhood, replacing them with impersonal, segmented, and instrumental relationships. This supposed transition from Gemeinschaft (community) to Gesellschaft (society) was thought to produce social isolation, superficiality, and anomie. Yet empirical research on urban social networks reveals a more complex picture in which cities simultaneously enable new forms of social connection while transforming rather than eliminating traditional ones.

Simmel's influential essay "The Metropolis and Mental Life" emphasized the psychological adaptations required for urban existence. The overwhelming sensory stimulation and countless interactions with strangers in cities necessitate what Simmel called a "blasé attitude"—emotional reserve and calculated rationality that protect individuals from overstimulation. Urbanites develop selective attention, filtering out much of their environment and treating most social contacts as means to specific ends rather than as intrinsically valuable relationships. This produces efficiency but also alienation and the inability to form deep personal connections.

However, the community lost hypothesis—that urbanization destroys social ties—has been substantially qualified by subsequent research. Herbert Gans's study of urban villages demonstrated that ethnic enclaves within cities maintain strong community bonds resembling those of rural areas. Claude Fischer's subcultural theory proposed that cities' size and diversity actually facilitate the formation of multiple, specialized subcultures and interest-based communities. Far from atomizing individuals, urban environments enable people to find others who share specific interests, identities, or lifestyles that might be too rare to support community formation in smaller, more homogeneous settings.

Contemporary scholarship on urban social networks emphasizes their distinctive characteristics rather than their absence. Urban relationships tend to be more numerous but less multiplex than rural ties. Where a single relationship in a small town might involve kinship, neighboring, economic partnership, and shared religious community, urban relationships typically involve fewer domains—you may have separate networks for work, recreation, political activity, and family, with minimal overlap. This specialization offers flexibility and choice but can fragment social support.

Technology has further complicated the relationship between urbanization and social connection. Digital communication enables maintenance of geographically dispersed networks, potentially offsetting some presumed isolating effects of urban mobility. Yet concerns about technology-mediated relationships replacing face-to-face interaction echo earlier anxieties about urbanization itself, suggesting persistent ambivalence about social change. Some research indicates that online networks supplement rather than substitute for offline connections, while other studies document genuine displacement effects.

The critical question may not be whether cities weaken social ties but how urbanization restructures the relationship between physical proximity and social connection. In rural and small-town settings, propinquity—physical nearness—strongly predicts social relationships; neighbors typically know each other and interact regularly. Urban environments partially decouple social connection from residential proximity. Urbanites may maintain close ties with people across the city or beyond, while barely knowing their immediate neighbors. This enables greater choice in relationship formation but may reduce the incidental social encounters and everyday mutual assistance that arise from neighborhood-based interaction.

Rather than viewing urbanization as uniformly negative or positive for social life, contemporary sociology recognizes variable outcomes depending on factors including class, race, built environment design, and institutional context. Some urban environments—particularly low-income neighborhoods with high residential instability—do exhibit the social disorganization classical theorists described. Other urban settings facilitate rich social networks. The challenge for urban planning and policy involves creating conditions that enable both the specialized communities cities make possible and the everyday neighborhood interactions that foster social cohesion and mutual support.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set13-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "prove that cities uniformly destroy all social relationships" },
      { letter: "B", text: "demonstrate that rural life is always superior to urban existence" },
      { letter: "C", text: "examine how classical theories of urban isolation have been qualified by research showing cities transform rather than eliminate social ties" },
      { letter: "D", text: "argue that urbanization has no effect on social relationships" },
      { letter: "E", text: "advocate complete elimination of all urban areas" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents classical theories portraying urban isolation, then notes 'empirical research...reveals a more complex picture in which cities simultaneously enable new forms of social connection while transforming rather than eliminating traditional ones.'",
    difficulty: "medium",
    passageId: "rc13-p4",
  },
  {
    id: "rc-set13-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses Simmel's concept of the 'blasé attitude' primarily in order to",
    answerChoices: [
      { letter: "A", text: "endorse emotional reserve as always beneficial" },
      { letter: "B", text: "explain classical theory's view of psychological adaptations to urban overstimulation" },
      { letter: "C", text: "argue that urbanites never form any personal connections" },
      { letter: "D", text: "demonstrate that cities require no psychological adjustment" },
      { letter: "E", text: "prove that all urban theory is completely wrong" },
    ],
    correctAnswer: "B",
    explanation: "The blasé attitude is presented as Simmel's concept explaining 'psychological adaptations required for urban existence,' where emotional reserve protects individuals from overstimulation but produces certain costs.",
    difficulty: "easy",
    passageId: "rc13-p4",
  },
  {
    id: "rc-set13-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, Claude Fischer's subcultural theory suggests that cities' size and diversity",
    answerChoices: [
      { letter: "A", text: "inevitably destroy all forms of community" },
      { letter: "B", text: "facilitate formation of specialized subcultures and interest-based communities" },
      { letter: "C", text: "prevent people from finding others with shared interests" },
      { letter: "D", text: "make all social interaction impossible" },
      { letter: "E", text: "eliminate cultural heterogeneity entirely" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Fischer's theory 'proposed that cities' size and diversity actually facilitate the formation of multiple, specialized subcultures and interest-based communities' by enabling people to find others sharing specific interests.",
    difficulty: "medium",
    passageId: "rc13-p4",
  },
  {
    id: "rc-set13-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, urban relationships compared to rural ties tend to be",
    answerChoices: [
      { letter: "A", text: "fewer in number and more multiplex" },
      { letter: "B", text: "identical in all characteristics" },
      { letter: "C", text: "more numerous but less multiplex" },
      { letter: "D", text: "completely absent in all cases" },
      { letter: "E", text: "exclusively based on kinship" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states 'urban relationships tend to be more numerous but less multiplex than rural ties,' explaining that urban relationships typically involve fewer domains with more specialization.",
    difficulty: "easy",
    passageId: "rc13-p4",
  },
  {
    id: "rc-set13-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward classical theories of urban social isolation can best be characterized as",
    answerChoices: [
      { letter: "A", text: "uncritical acceptance of all claims" },
      { letter: "B", text: "complete rejection as entirely worthless" },
      { letter: "C", text: "recognition that while capturing some aspects, they oversimplified by ignoring how cities enable new social forms" },
      { letter: "D", text: "indifference to empirical research findings" },
      { letter: "E", text: "certainty that cities have no effect on social relationships" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents classical theories respectfully but notes they've been 'substantially qualified by subsequent research' and that 'contemporary sociology recognizes variable outcomes,' indicating balanced critique acknowledging both insights and limitations.",
    difficulty: "hard",
    passageId: "rc13-p4",
  },
];

export const rcQuestionsSet13: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
