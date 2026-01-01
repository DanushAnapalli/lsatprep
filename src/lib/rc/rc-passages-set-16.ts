// Reading Comprehension Expansion Set 16
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - TREATY INTERPRETATION IN INTERNATIONAL LAW
// ============================================

const passage1 = `Treaty interpretation stands as one of the most contested areas of international law, reflecting deeper tensions between state sovereignty and the pursuit of international order. When disputes arise over the meaning of treaty provisions, tribunals must navigate between textual fidelity and purposive construction, between honoring what states actually agreed to and advancing the treaty's broader objectives. The Vienna Convention on the Law of Treaties (1969) provides the authoritative framework for interpretation, yet significant ambiguities persist in its application.

Article 31 of the Vienna Convention establishes that treaties shall be interpreted "in good faith in accordance with the ordinary meaning to be given to the terms of the treaty in their context and in the light of its object and purpose." This formulation attempts to balance textualism with teleological interpretation, but tensions between these approaches surface regularly. Textualists insist that international agreements derive their legitimacy from state consent; interpreters must therefore hew closely to the words states actually used. Teleological interpreters counter that treaties are living instruments designed to achieve purposes that may require adaptation to changing circumstances.

The role of supplementary means of interpretation, addressed in Article 32, further complicates matters. Preparatory work (travaux preparatoires) and the circumstances of a treaty's conclusion may be consulted to confirm meaning or resolve ambiguity, but courts disagree about when such recourse is appropriate. Some tribunals treat supplementary means as genuinely secondary, examining drafting history only after textual analysis proves inconclusive. Others routinely consult preparatory materials from the outset, viewing them as integral to understanding what states intended.

Subsequent practice by treaty parties presents particular interpretive challenges. Article 31(3)(b) requires consideration of "any subsequent practice in the application of the treaty which establishes the agreement of the parties regarding its interpretation." When states consistently apply treaty provisions in particular ways, their practice may effectively modify the treaty's meaning. Critics worry that this doctrine allows states to amend treaties through behavior rather than formal amendment procedures, potentially circumventing domestic ratification requirements and undermining democratic accountability.

The proliferation of international tribunals has introduced additional complexity. Different courts—the International Court of Justice, the World Trade Organization's Appellate Body, regional human rights courts, investment arbitration panels—have developed distinct interpretive cultures. Human rights tribunals tend toward expansive, evolutive interpretation, reading treaties to protect rights that framers may not have specifically contemplated. Trade and investment tribunals often favor more restrictive approaches that limit intrusions on state regulatory autonomy. This fragmentation raises concerns about coherence in international law, though some scholars celebrate pluralism as appropriate given the diversity of treaty regimes.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp16-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Vienna Convention on the Law of Treaties has failed entirely to provide guidance for treaty interpretation." },
      { letter: "B", text: "Treaty interpretation in international law involves persistent tensions between competing approaches, with the Vienna Convention providing a framework that nonetheless leaves significant ambiguities in practice." },
      { letter: "C", text: "Textualism is the only legitimate approach to interpreting international treaties." },
      { letter: "D", text: "International tribunals have reached consensus on a unified approach to treaty interpretation." },
      { letter: "E", text: "Subsequent practice by treaty parties should never be considered when interpreting treaty provisions." },
    ],
    correctAnswer: "B",
    explanation: "The passage examines treaty interpretation as a contested area, describes the Vienna Convention framework and its tensions between textualism and teleological approaches, discusses supplementary means and subsequent practice, and addresses fragmentation among tribunals. Answer B captures this treatment of persistent tensions within a framework that leaves ambiguities.",
    difficulty: "medium",
    passageId: "rc-exp16-p1",
  },
  {
    id: "rc-exp16-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Article 31 of the Vienna Convention requires that treaties be interpreted",
    answerChoices: [
      { letter: "A", text: "exclusively according to the subjective intentions of the negotiators" },
      { letter: "B", text: "in good faith according to ordinary meaning, context, and object and purpose" },
      { letter: "C", text: "solely by reference to preparatory work and drafting history" },
      { letter: "D", text: "without any consideration of the treaty's purposes" },
      { letter: "E", text: "by deferring entirely to subsequent state practice" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly quotes Article 31 as establishing that treaties shall be interpreted 'in good faith in accordance with the ordinary meaning to be given to the terms of the treaty in their context and in the light of its object and purpose.'",
    difficulty: "easy",
    passageId: "rc-exp16-p1",
  },
  {
    id: "rc-exp16-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, textualists would most likely argue that",
    answerChoices: [
      { letter: "A", text: "treaties should be interpreted expansively to protect human rights" },
      { letter: "B", text: "close adherence to actual treaty language is essential because international agreements derive legitimacy from state consent" },
      { letter: "C", text: "preparatory work should always be the primary source for interpretation" },
      { letter: "D", text: "subsequent practice should automatically override treaty text" },
      { letter: "E", text: "tribunals should have unlimited discretion to modify treaty meanings" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Textualists insist that international agreements derive their legitimacy from state consent; interpreters must therefore hew closely to the words states actually used.'",
    difficulty: "medium",
    passageId: "rc-exp16-p1",
  },
  {
    id: "rc-exp16-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions human rights tribunals and trade tribunals primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that human rights law is more important than trade law" },
      { letter: "B", text: "illustrate how different international courts have developed distinct interpretive approaches" },
      { letter: "C", text: "demonstrate that all tribunals use identical interpretive methods" },
      { letter: "D", text: "criticize the International Court of Justice" },
      { letter: "E", text: "explain the historical origins of the Vienna Convention" },
    ],
    correctAnswer: "B",
    explanation: "These tribunals are mentioned to illustrate that 'Different courts... have developed distinct interpretive cultures,' with human rights tribunals favoring 'expansive, evolutive interpretation' while trade tribunals 'often favor more restrictive approaches.'",
    difficulty: "medium",
    passageId: "rc-exp16-p1",
  },
  {
    id: "rc-exp16-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the fragmentation of interpretive approaches among international tribunals can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive, viewing diversity as inherently superior to uniformity" },
      { letter: "B", text: "dismissive, treating the issue as unimportant" },
      { letter: "C", text: "balanced, noting concerns about coherence while acknowledging that some scholars view pluralism positively" },
      { letter: "D", text: "hostile, arguing that all tribunals must adopt identical methods" },
      { letter: "E", text: "confused, demonstrating uncertainty about what fragmentation means" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that 'This fragmentation raises concerns about coherence in international law, though some scholars celebrate pluralism as appropriate given the diversity of treaty regimes.' This presents both perspectives without advocating for either.",
    difficulty: "medium",
    passageId: "rc-exp16-p1",
  },
  {
    id: "rc-exp16-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the concerns that critics raise about the subsequent practice doctrine?",
    answerChoices: [
      { letter: "A", text: "Most treaties explicitly authorize modification through subsequent practice." },
      { letter: "B", text: "A study found that treaty interpretations based on subsequent practice were frequently adopted without any domestic legislative review, despite changing substantive obligations." },
      { letter: "C", text: "Subsequent practice always reflects the original intentions of treaty drafters." },
      { letter: "D", text: "National legislatures are always consulted before states engage in treaty-related practice." },
      { letter: "E", text: "The Vienna Convention prohibits consideration of subsequent practice entirely." },
    ],
    correctAnswer: "B",
    explanation: "Critics 'worry that this doctrine allows states to amend treaties through behavior rather than formal amendment procedures, potentially circumventing domestic ratification requirements and undermining democratic accountability.' Evidence that interpretations based on subsequent practice bypassed domestic legislative review would directly support this concern.",
    difficulty: "hard",
    passageId: "rc-exp16-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - EVOLUTIONARY PSYCHOLOGY
// ============================================

const passage2 = `Evolutionary psychology seeks to explain human mental traits and behaviors as adaptations shaped by natural selection during our species' evolutionary history. Proponents argue that the human mind, like the human body, bears the imprint of ancestral environments where selection pressures favored certain cognitive and emotional responses. Understanding these evolutionary origins, they contend, illuminates otherwise puzzling aspects of human nature, from mate preferences to risk aversion to the near-universality of certain fears.

The discipline's theoretical foundation rests on the concept of the Environment of Evolutionary Adaptedness (EEA)—roughly, the Pleistocene conditions under which human psychological mechanisms evolved. Evolutionary psychologists argue that our minds are adapted to solve problems that recurrently faced our hunter-gatherer ancestors: identifying nutritious foods, detecting cheaters in social exchanges, selecting healthy mates, and navigating complex social hierarchies. Because genetic evolution operates slowly, our psychological adaptations remain calibrated to ancestral rather than modern conditions, potentially explaining apparent irrationalities in contemporary behavior—why we crave sugar and fat despite health consequences, or fear snakes more than automobiles despite differential mortality risks.

Critics challenge evolutionary psychology on multiple fronts. Methodologically, skeptics question how researchers can test hypotheses about ancestral environments for which direct evidence is necessarily sparse. The EEA is sometimes characterized so abstractly that almost any contemporary behavior can be "explained" as an adaptation, raising concerns about unfalsifiability. Furthermore, critics argue that evolutionary psychologists often underestimate the flexibility of human cognition, treating behaviors as hardwired when they may reflect cultural learning, individual development, or conscious choice.

The charge of genetic determinism has proven particularly contentious. Evolutionary psychologists typically respond that identifying evolved predispositions does not imply that behavior is fixed or impervious to environmental influence. The relationship between genes and behavior operates through development and is sensitive to context; understanding evolved tendencies may actually enhance rather than undermine efforts to modify them. Yet critics maintain that evolutionary explanations can be used to naturalize inequalities, particularly regarding gender, by suggesting that observed differences reflect biological imperatives rather than social arrangements.

Despite these controversies, evolutionary psychology has contributed valuable insights across domains including cooperation, aggression, parental investment, and cognitive biases. The key lies in recognizing that evolutionary explanations are complementary rather than alternatives to proximate, developmental, and cultural explanations. Human behavior emerges from the interaction of evolved predispositions with developmental experiences and cultural contexts. A mature evolutionary psychology integrates multiple levels of explanation rather than reducing all behavior to genetic adaptation.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp16-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Evolutionary psychology has been completely discredited by its critics." },
      { letter: "B", text: "Evolutionary psychology offers explanations of human behavior based on ancestral adaptations but faces significant criticisms, with the most productive approach integrating evolutionary with other levels of explanation." },
      { letter: "C", text: "All human behavior is genetically determined and impervious to environmental influence." },
      { letter: "D", text: "The Environment of Evolutionary Adaptedness can never be studied scientifically." },
      { letter: "E", text: "Evolutionary explanations should completely replace cultural and developmental explanations." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces evolutionary psychology's claims, examines the EEA concept, presents methodological and determinism criticisms, notes the discipline's contributions, and concludes that integrating evolutionary with other explanatory levels is the productive approach. Answer B captures this balanced assessment.",
    difficulty: "medium",
    passageId: "rc-exp16-p2",
  },
  {
    id: "rc-exp16-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, evolutionary psychologists argue that modern psychological irrationalities may result from",
    answerChoices: [
      { letter: "A", text: "the fact that our minds remain calibrated to ancestral rather than modern conditions" },
      { letter: "B", text: "the complete absence of any evolutionary influences on cognition" },
      { letter: "C", text: "purely cultural learning without any biological basis" },
      { letter: "D", text: "the rapid pace of genetic evolution" },
      { letter: "E", text: "conscious choices made by modern individuals" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that 'Because genetic evolution operates slowly, our psychological adaptations remain calibrated to ancestral rather than modern conditions, potentially explaining apparent irrationalities in contemporary behavior.'",
    difficulty: "easy",
    passageId: "rc-exp16-p2",
  },
  {
    id: "rc-exp16-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics who raise concerns about unfalsifiability would most likely argue that",
    answerChoices: [
      { letter: "A", text: "all evolutionary hypotheses can be rigorously tested" },
      { letter: "B", text: "the EEA concept is sometimes so vague that virtually any behavior can be explained as an adaptation after the fact" },
      { letter: "C", text: "evolutionary psychology makes predictions that are too specific" },
      { letter: "D", text: "direct evidence from ancestral environments is abundant" },
      { letter: "E", text: "human cognition is entirely hardwired and inflexible" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'The EEA is sometimes characterized so abstractly that almost any contemporary behavior can be \"explained\" as an adaptation, raising concerns about unfalsifiability.' This describes the ability to explain any behavior post hoc.",
    difficulty: "medium",
    passageId: "rc-exp16-p2",
  },
  {
    id: "rc-exp16-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions the fear of snakes versus automobiles primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all fears are irrational" },
      { letter: "B", text: "illustrate how evolutionary psychology explains apparent irrationalities by reference to ancestral conditions" },
      { letter: "C", text: "criticize modern safety regulations" },
      { letter: "D", text: "demonstrate that evolutionary psychology cannot explain human behavior" },
      { letter: "E", text: "compare prehistoric and modern transportation" },
    ],
    correctAnswer: "B",
    explanation: "The snake versus automobile example is given to illustrate how 'apparent irrationalities in contemporary behavior' can be explained: we 'fear snakes more than automobiles despite differential mortality risks' because our fears are 'calibrated to ancestral rather than modern conditions.'",
    difficulty: "medium",
    passageId: "rc-exp16-p2",
  },
  {
    id: "rc-exp16-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward evolutionary psychology can best be described as",
    answerChoices: [
      { letter: "A", text: "wholly dismissive, viewing it as pseudoscience" },
      { letter: "B", text: "uncritically enthusiastic, endorsing all its claims" },
      { letter: "C", text: "cautiously appreciative, acknowledging contributions while recognizing limitations and the need for integration with other approaches" },
      { letter: "D", text: "indifferent, showing no interest in evaluating its merits" },
      { letter: "E", text: "confused, unable to distinguish between proponents and critics" },
    ],
    correctAnswer: "C",
    explanation: "The author presents evolutionary psychology's contributions ('valuable insights across domains') while also presenting criticisms, and concludes by advocating for integration with other explanatory levels. This reflects cautious appreciation rather than wholesale acceptance or rejection.",
    difficulty: "medium",
    passageId: "rc-exp16-p2",
  },
  {
    id: "rc-exp16-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, an evolutionary psychologist responding to the charge of genetic determinism would most likely agree with which one of the following statements?",
    answerChoices: [
      { letter: "A", text: "All human behavior is completely fixed at birth and cannot be modified." },
      { letter: "B", text: "Understanding evolved tendencies may actually help inform efforts to modify behaviors since genes interact with development and context." },
      { letter: "C", text: "Cultural and environmental factors have no influence on behavior whatsoever." },
      { letter: "D", text: "Evolutionary explanations should be used to justify existing social inequalities." },
      { letter: "E", text: "The relationship between genes and behavior is entirely independent of developmental experiences." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Evolutionary psychologists typically respond that identifying evolved predispositions does not imply that behavior is fixed... The relationship between genes and behavior operates through development and is sensitive to context; understanding evolved tendencies may actually enhance rather than undermine efforts to modify them.'",
    difficulty: "hard",
    passageId: "rc-exp16-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - POSTMODERN ARCHITECTURE AND MEANING
// ============================================

const passage3 = `Postmodern architecture emerged in the 1960s and 1970s as a reaction against the perceived sterility and universalism of modernist design. Where modernist architects like Le Corbusier and Mies van der Rohe championed pure geometric forms, industrial materials, and the dictum that "form follows function," postmodernists embraced ornamentation, historical reference, and contextual sensitivity. The movement challenged modernism's assumption that architecture could transcend cultural particularity to express universal rational principles.

Robert Venturi's "Complexity and Contradiction in Architecture" (1966) provided an early manifesto for the emerging sensibility. Against the modernist preference for simplicity and clarity, Venturi celebrated "messy vitality over obvious unity," arguing that richness of meaning depended on ambiguity and tension rather than purity. His analysis of historical buildings demonstrated how layered meanings and formal contradictions created architectural interest. Venturi and Denise Scott Brown's subsequent study "Learning from Las Vegas" (1972) took the argument further, treating commercial vernacular—billboards, neon signs, decorated sheds—as legitimate subjects for architectural analysis rather than vulgar distractions.

Charles Jencks identified the symbolic demolition of modernism in the 1972 dynamiting of Pruitt-Igoe, a St. Louis public housing project whose failure epitomized modernist social engineering's shortcomings. For Jencks, postmodern architecture rejected modernism's claim to moral authority and its contempt for popular taste. Instead, postmodernists sought to communicate with multiple audiences through "double coding"—incorporating elements that might speak to architectural cognoscenti and ordinary users differently. Michael Graves's Portland Building (1982), with its colorful facades and classical motifs applied to a government office building, exemplified this communicative ambition.

Critics charged that postmodern architecture descended into superficial pastiche, applying historical ornaments as decorative veneers without genuine engagement with historical principles or meanings. Fredric Jameson argued that postmodern architecture reflected broader cultural conditions of late capitalism, where the exhaustion of stylistic innovation led to empty recycling of past forms detached from their original significance. What presented itself as playful reference might actually manifest cultural amnesia—the inability to engage history except as a repository of decontextualized images.

The postmodern moment in architecture has arguably passed, succeeded by deconstructivism, parametricism, and other tendencies. Yet its critique of modernist universalism and its attention to context, communication, and meaning remain influential. Contemporary architects increasingly recognize that buildings are not merely functional machines but cultural artifacts embedded in specific places and histories. The postmodern insistence that architecture must speak to its users, even if through languages other than modernist rationalism, continues to shape design practice.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp16-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Postmodern architecture completely abandoned all principles of design in favor of chaos." },
      { letter: "B", text: "Postmodern architecture emerged as a critique of modernist universalism, embracing complexity and historical reference, though it faced criticisms of superficiality, and its influence on attention to context and meaning persists." },
      { letter: "C", text: "Modernist architecture was entirely without merit and deserved to be abandoned." },
      { letter: "D", text: "Robert Venturi was the only significant postmodern architect." },
      { letter: "E", text: "Postmodern architecture has been universally rejected by all contemporary practitioners." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces postmodernism's emergence as a reaction to modernism, examines key figures and works, presents criticisms of superficiality, and concludes that postmodernism's attention to context and meaning remains influential. Answer B captures this trajectory.",
    difficulty: "medium",
    passageId: "rc-exp16-p3",
  },
  {
    id: "rc-exp16-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Venturi's 'Complexity and Contradiction in Architecture' argued for",
    answerChoices: [
      { letter: "A", text: "the modernist preference for simplicity and purity" },
      { letter: "B", text: "messy vitality over obvious unity, with richness of meaning through ambiguity and tension" },
      { letter: "C", text: "the complete elimination of all historical references in architecture" },
      { letter: "D", text: "strict adherence to the dictum that form follows function" },
      { letter: "E", text: "the superiority of industrial materials over all other building materials" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Against the modernist preference for simplicity and clarity, Venturi celebrated \"messy vitality over obvious unity,\" arguing that richness of meaning depended on ambiguity and tension rather than purity.'",
    difficulty: "easy",
    passageId: "rc-exp16-p3",
  },
  {
    id: "rc-exp16-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Charles Jencks would most likely argue that the Pruitt-Igoe project failed because",
    answerChoices: [
      { letter: "A", text: "it was too attentive to local context and popular taste" },
      { letter: "B", text: "it exemplified modernist social engineering that claimed moral authority while showing contempt for popular taste" },
      { letter: "C", text: "it used too much historical ornamentation" },
      { letter: "D", text: "the building materials were of poor quality" },
      { letter: "E", text: "postmodern principles were incorrectly applied" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Jencks identified the demolition of Pruitt-Igoe as symbolizing modernism's failure, and that 'postmodern architecture rejected modernism's claim to moral authority and its contempt for popular taste.' The project's failure 'epitomized modernist social engineering's shortcomings.'",
    difficulty: "medium",
    passageId: "rc-exp16-p3",
  },
  {
    id: "rc-exp16-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions the Portland Building primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the use of color in architecture" },
      { letter: "B", text: "exemplify postmodernism's 'double coding' ambition to communicate with multiple audiences" },
      { letter: "C", text: "argue that government buildings should be purely functional" },
      { letter: "D", text: "demonstrate the superiority of classical architecture over all other styles" },
      { letter: "E", text: "explain why modernist architecture was preferable" },
    ],
    correctAnswer: "B",
    explanation: "The Portland Building is introduced immediately after discussing 'double coding'—incorporating elements that speak differently to different audiences—and is described as exemplifying 'this communicative ambition' with its 'colorful facades and classical motifs.'",
    difficulty: "medium",
    passageId: "rc-exp16-p3",
  },
  {
    id: "rc-exp16-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the lasting influence of postmodern architecture can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive, viewing postmodernism as having left no significant legacy" },
      { letter: "B", text: "affirmative, suggesting that postmodernism's attention to context and communication continues to shape design practice" },
      { letter: "C", text: "hostile, arguing that all postmodern influence should be eliminated" },
      { letter: "D", text: "indifferent, showing no interest in the movement's legacy" },
      { letter: "E", text: "confused, unable to determine whether postmodernism had any influence" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph states that postmodernism's 'critique of modernist universalism and its attention to context, communication, and meaning remain influential' and that 'The postmodern insistence that architecture must speak to its users... continues to shape design practice.'",
    difficulty: "medium",
    passageId: "rc-exp16-p3",
  },
  {
    id: "rc-exp16-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "An architectural movement is introduced as a reaction against a predecessor, key figures and concepts are examined, criticisms are presented, and lasting influences are assessed." },
      { letter: "B", text: "Two architectural styles are compared and one is declared definitively superior." },
      { letter: "C", text: "A chronological history of all architectural movements from antiquity to the present is provided." },
      { letter: "D", text: "A problem in building construction is identified and technical solutions are proposed." },
      { letter: "E", text: "A theory is proposed, experiments test it, and the theory is confirmed." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces postmodernism as a reaction to modernism, examines Venturi, Jencks, and key works, presents Jameson's criticism of superficiality, and concludes by assessing postmodernism's lasting influence on attention to context and meaning.",
    difficulty: "hard",
    passageId: "rc-exp16-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - ECONOMIC INEQUALITY MEASUREMENT
// ============================================

const passage4 = `Measuring economic inequality presents challenges that extend beyond technical statistics to fundamental questions about what precisely we wish to capture. Different metrics illuminate different aspects of distributive patterns, and the choice among them reflects implicit judgments about which dimensions of inequality matter most. No single measure provides a complete picture, yet policy debates often proceed as if inequality were a unitary phenomenon with an obvious meaning.

The Gini coefficient remains the most widely used inequality measure, ranging from zero (perfect equality) to one (perfect inequality). Its intuitive interpretation—derived from the Lorenz curve, which plots cumulative income share against cumulative population share—and ease of computation explain its popularity. However, the Gini coefficient is most sensitive to changes in the middle of the distribution. Transfers between the very rich and the moderately wealthy, or between the very poor and the merely poor, may scarcely affect the Gini even if they significantly impact lived experience at distribution extremes.

Alternative measures address different distributional features. Percentile ratios, such as the ratio of income at the 90th percentile to income at the 10th percentile (P90/P10), directly capture gaps between specific points in the distribution. Such ratios are transparent and easy to interpret but ignore what happens between the selected percentiles. The Palma ratio focuses on the ratio of income shares of the top 10 percent to the bottom 40 percent, reflecting empirical observations that middle-class shares tend to be relatively stable across countries while inequality variations concentrate in the tails.

Top income shares, derived from tax records rather than household surveys, have transformed inequality research. Thomas Piketty and Emmanuel Saez demonstrated that the share of national income captured by the top 1 percent declined dramatically in developed countries during the mid-twentieth century but has risen sharply since the 1980s in Anglo-Saxon countries. This approach captures extreme concentration that surveys often miss due to sampling limitations and nonresponse by the wealthy. However, tax-based measures depend on the tax unit definition and may be affected by tax avoidance behaviors that shift income across categories.

Beyond income, wealth inequality presents distinct measurement challenges. Wealth is more concentrated than income, with significant portions held in forms—private businesses, trust funds, offshore accounts—that are difficult to value or even identify. The relationship between income and wealth inequality is complex; societies with similar income distributions may differ substantially in wealth concentration, affecting economic mobility, political influence, and intergenerational transmission of advantage. Comprehensive inequality assessment requires attention to multiple dimensions, including consumption, opportunity, and social mobility, rather than reliance on any single metric.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp16-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that the Gini coefficient should be abandoned entirely" },
      { letter: "B", text: "examine the challenges of measuring economic inequality, showing that different metrics capture different aspects and that comprehensive assessment requires multiple approaches" },
      { letter: "C", text: "prove that economic inequality does not exist" },
      { letter: "D", text: "demonstrate that wealth is easier to measure than income" },
      { letter: "E", text: "advocate for a single universal measure of inequality" },
    ],
    correctAnswer: "B",
    explanation: "The passage examines measurement challenges, explains how different measures (Gini, percentile ratios, top income shares) capture different aspects, discusses wealth measurement difficulties, and concludes that comprehensive assessment requires attention to multiple dimensions. Answer B captures this multi-metric approach.",
    difficulty: "medium",
    passageId: "rc-exp16-p4",
  },
  {
    id: "rc-exp16-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, a limitation of the Gini coefficient is that it",
    answerChoices: [
      { letter: "A", text: "cannot be computed from available data" },
      { letter: "B", text: "is most sensitive to changes in the middle of the distribution, potentially missing significant changes at the extremes" },
      { letter: "C", text: "always overestimates inequality in wealthy countries" },
      { letter: "D", text: "requires access to tax records that are not publicly available" },
      { letter: "E", text: "only measures wealth, not income" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'the Gini coefficient is most sensitive to changes in the middle of the distribution. Transfers between the very rich and the moderately wealthy, or between the very poor and the merely poor, may scarcely affect the Gini even if they significantly impact lived experience at distribution extremes.'",
    difficulty: "easy",
    passageId: "rc-exp16-p4",
  },
  {
    id: "rc-exp16-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the Palma ratio was developed based on the observation that",
    answerChoices: [
      { letter: "A", text: "all income groups experience similar levels of variability across countries" },
      { letter: "B", text: "middle-class income shares tend to be relatively stable while inequality variations concentrate in the tails of the distribution" },
      { letter: "C", text: "the top 1 percent captures most national income in all countries" },
      { letter: "D", text: "wealth concentration is identical across all developed nations" },
      { letter: "E", text: "survey-based measures always overestimate inequality" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the Palma ratio 'reflect[s] empirical observations that middle-class shares tend to be relatively stable across countries while inequality variations concentrate in the tails.'",
    difficulty: "medium",
    passageId: "rc-exp16-p4",
  },
  {
    id: "rc-exp16-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the research of Piketty and Saez primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the use of tax records in inequality research" },
      { letter: "B", text: "illustrate how top income shares derived from tax data have revealed patterns of extreme concentration that surveys miss" },
      { letter: "C", text: "argue that inequality has remained constant throughout the twentieth century" },
      { letter: "D", text: "demonstrate that the Gini coefficient is superior to all other measures" },
      { letter: "E", text: "explain the theoretical basis of the Lorenz curve" },
    ],
    correctAnswer: "B",
    explanation: "Piketty and Saez are mentioned to show how their approach 'captures extreme concentration that surveys often miss due to sampling limitations and nonresponse by the wealthy,' demonstrating how top income shares 'derived from tax records rather than household surveys, have transformed inequality research.'",
    difficulty: "medium",
    passageId: "rc-exp16-p4",
  },
  {
    id: "rc-exp16-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that wealth inequality is more difficult to measure than income inequality primarily because",
    answerChoices: [
      { letter: "A", text: "income is more concentrated than wealth" },
      { letter: "B", text: "significant portions of wealth are held in forms that are difficult to value or identify" },
      { letter: "C", text: "wealth data is always collected through household surveys" },
      { letter: "D", text: "the Gini coefficient cannot be applied to wealth" },
      { letter: "E", text: "wealth is evenly distributed across all populations" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Wealth is more concentrated than income, with significant portions held in forms—private businesses, trust funds, offshore accounts—that are difficult to value or even identify.'",
    difficulty: "medium",
    passageId: "rc-exp16-p4",
  },
  {
    id: "rc-exp16-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward relying on a single metric to measure economic inequality can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive, advocating for a universal measure" },
      { letter: "B", text: "skeptical, arguing that no single measure captures all relevant dimensions and comprehensive assessment requires multiple approaches" },
      { letter: "C", text: "indifferent, treating measurement choices as unimportant" },
      { letter: "D", text: "confused, unable to distinguish between different measures" },
      { letter: "E", text: "hostile, rejecting all quantitative approaches to studying inequality" },
    ],
    correctAnswer: "B",
    explanation: "The author notes that 'No single measure provides a complete picture,' that 'Different metrics illuminate different aspects,' and concludes that 'Comprehensive inequality assessment requires attention to multiple dimensions... rather than reliance on any single metric.'",
    difficulty: "medium",
    passageId: "rc-exp16-p4",
  },
];

// Export all RC questions from Set 16
export const rcQuestionsExpSet16: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet16 = {
  passage1: { id: "rc-exp16-p1", content: passage1, topic: "law", title: "Treaty Interpretation in International Law" },
  passage2: { id: "rc-exp16-p2", content: passage2, topic: "natural-sciences", title: "Evolutionary Psychology" },
  passage3: { id: "rc-exp16-p3", content: passage3, topic: "humanities", title: "Postmodern Architecture and Meaning" },
  passage4: { id: "rc-exp16-p4", content: passage4, topic: "social-sciences", title: "Economic Inequality Measurement" },
};
