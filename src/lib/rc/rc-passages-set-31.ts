// Reading Comprehension Expansion Set 31
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - COMPARATIVE CONSTITUTIONAL LAW
// ============================================

const passage1 = `Comparative constitutional law has emerged as an increasingly influential field of legal scholarship and practice over the past several decades. Judges and scholars now routinely examine how courts in other nations have addressed similar constitutional questions, from free speech protections to the balance between security and liberty. This practice, sometimes called constitutional borrowing or migration, has generated significant controversy about its legitimacy and appropriate scope.

Proponents of comparative analysis argue that constitutional courts face many similar challenges across different jurisdictions, and that learning from others' experiences can improve judicial reasoning. When the Canadian Supreme Court confronted questions about hate speech regulation, for example, it examined how German courts balanced free expression against the protection of human dignity. Similarly, the South African Constitutional Court has drawn extensively on international and comparative sources in developing its jurisprudence, explicitly positioning itself within a global constitutional community. Advocates contend that such cross-pollination enriches constitutional interpretation without requiring adoption of foreign approaches.

Critics, particularly in the United States, raise objections rooted in democratic legitimacy and constitutional sovereignty. They argue that the meaning of a constitution should be determined by its text, history, and the traditions of the people who ratified it—not by the interpretive choices of foreign judges operating under different constitutional frameworks. Justice Antonin Scalia articulated this view forcefully, contending that citation of foreign law represents an illegitimate departure from originalist methodology and democratic self-governance. For these critics, comparative analysis threatens to substitute judicial policy preferences for principled interpretation.

The debate extends beyond methodology to questions about which legal systems merit comparison. Proponents of comparison tend to focus on established liberal democracies with robust judicial review traditions, raising concerns about selection bias. Why should American courts look to Canadian or German interpretations while ignoring approaches taken in Japan, India, or Brazil? Some scholars argue that this selectivity reflects unstated assumptions about which legal cultures are sufficiently developed to offer guidance—assumptions that may perpetuate hierarchies in global legal discourse.

A more nuanced position acknowledges that comparative analysis can serve different functions at different stages of constitutional reasoning. Examining how other courts have framed a constitutional question may help identify issues and arguments that domestic analysis might overlook, even if the ultimate resolution must rest on domestic constitutional grounds. This approach treats comparative law as a source of insight rather than authority, using foreign precedents to sharpen rather than replace domestic constitutional analysis. Whether such limited use can be meaningfully distinguished from more robust forms of borrowing remains a contested question.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp31-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Comparative constitutional law has been universally accepted as a legitimate method of constitutional interpretation." },
      { letter: "B", text: "The practice of examining foreign constitutional jurisprudence has become increasingly common but remains controversial, with debates centering on legitimacy, methodology, and scope." },
      { letter: "C", text: "American courts have consistently refused to consider foreign legal precedents in their constitutional analysis." },
      { letter: "D", text: "The Canadian and South African constitutional courts have developed superior methods of constitutional interpretation." },
      { letter: "E", text: "Selection bias in comparative constitutional analysis can only be addressed by examining jurisprudence from every legal system equally." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the rise of comparative constitutional law, presents both proponents' and critics' views, discusses concerns about selection bias, and concludes with a nuanced middle position. Answer B accurately captures this comprehensive treatment of a contested practice.",
    difficulty: "medium",
    passageId: "rc-exp31-p1",
  },
  {
    id: "rc-exp31-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Justice Scalia's objection to comparative constitutional analysis was based on which of the following grounds?",
    answerChoices: [
      { letter: "A", text: "Foreign legal systems lack the sophistication to offer meaningful guidance." },
      { letter: "B", text: "Comparative analysis is too time-consuming for busy courts to undertake." },
      { letter: "C", text: "Citation of foreign law departs from originalist methodology and democratic self-governance." },
      { letter: "D", text: "The Canadian Supreme Court has misapplied comparative methods." },
      { letter: "E", text: "Constitutional interpretation should focus on economic rather than moral principles." },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that Justice Scalia argued that 'citation of foreign law represents an illegitimate departure from originalist methodology and democratic self-governance.'",
    difficulty: "easy",
    passageId: "rc-exp31-p1",
  },
  {
    id: "rc-exp31-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, proponents of comparative constitutional analysis would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "Foreign constitutional precedents should be treated as binding authority in domestic courts." },
      { letter: "B", text: "Only democracies with similar political structures can offer relevant constitutional insights." },
      { letter: "C", text: "Courts can benefit from examining how other jurisdictions have addressed similar constitutional challenges without being bound by those approaches." },
      { letter: "D", text: "The text and history of a constitution are irrelevant to its proper interpretation." },
      { letter: "E", text: "Originalist methodology produces superior constitutional outcomes." },
    ],
    correctAnswer: "C",
    explanation: "The passage states that proponents argue that 'cross-pollination enriches constitutional interpretation without requiring adoption of foreign approaches.' This indicates learning from others while maintaining interpretive independence.",
    difficulty: "medium",
    passageId: "rc-exp31-p1",
  },
  {
    id: "rc-exp31-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions 'Japan, India, or Brazil' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these nations have the most developed constitutional jurisprudence" },
      { letter: "B", text: "illustrate concerns about selection bias in comparative analysis" },
      { letter: "C", text: "provide examples of countries that have explicitly rejected comparative methods" },
      { letter: "D", text: "demonstrate the universal applicability of comparative constitutional principles" },
      { letter: "E", text: "criticize American courts for their insularity" },
    ],
    correctAnswer: "B",
    explanation: "These countries are mentioned in the paragraph discussing selection bias, as examples of legal systems that tend to be overlooked when courts focus on 'established liberal democracies.' The question 'Why should American courts look to Canadian or German interpretations while ignoring' these jurisdictions highlights the selection bias concern.",
    difficulty: "medium",
    passageId: "rc-exp31-p1",
  },
  {
    id: "rc-exp31-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate over comparative constitutional analysis can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of critics who oppose any use of foreign precedents" },
      { letter: "B", text: "dismissive of the concerns raised by both proponents and critics" },
      { letter: "C", text: "analytically neutral, presenting multiple perspectives and acknowledging unresolved tensions" },
      { letter: "D", text: "enthusiastically endorsing the South African approach to constitutional borrowing" },
      { letter: "E", text: "skeptical that any meaningful use of comparative analysis is possible" },
    ],
    correctAnswer: "C",
    explanation: "The author presents proponents' and critics' views fairly, discusses selection bias concerns, and describes a nuanced middle position while noting that key questions 'remain contested.' The tone is balanced and analytical rather than advocating for any particular position.",
    difficulty: "medium",
    passageId: "rc-exp31-p1",
  },
  {
    id: "rc-exp31-006",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A practice is introduced, arguments for and against it are presented, a concern about methodology is raised, and a potential middle ground is described." },
      { letter: "B", text: "A thesis is stated, counterarguments are refuted, and a conclusion is drawn." },
      { letter: "C", text: "A historical development is traced, its causes are analyzed, and predictions about its future are offered." },
      { letter: "D", text: "Two competing theories are described, both are rejected, and a new theory is proposed." },
      { letter: "E", text: "A legal doctrine is explained, its applications are enumerated, and its limitations are acknowledged." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces comparative constitutional law (paragraph 1), presents proponents' arguments (paragraph 2), presents critics' objections (paragraph 3), raises selection bias concerns (paragraph 4), and describes a nuanced middle position (paragraph 5). Answer A accurately captures this structure.",
    difficulty: "hard",
    passageId: "rc-exp31-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - ENZYME FUNCTION AND CATALYSIS
// ============================================

const passage2 = `Enzymes are biological catalysts that accelerate chemical reactions essential for life, often by factors of millions or even billions compared to uncatalyzed reactions. Understanding how enzymes achieve this remarkable catalytic power has been a central question in biochemistry for over a century. While the basic principles of enzyme catalysis are well established, researchers continue to debate the relative contributions of different mechanisms and whether fundamental aspects of enzyme function have been adequately explained.

The classical view of enzyme catalysis, developed through decades of structural and kinetic studies, emphasizes the complementary fit between enzyme active sites and the transition states of the reactions they catalyze. According to this model, enzymes bind transition states more tightly than they bind substrates or products, thereby lowering the activation energy required for the reaction to proceed. This transition state stabilization accounts for a substantial portion of the rate enhancement observed with most enzymes. Structural studies have identified specific amino acid residues that position substrates precisely, provide electrostatic stabilization, and participate in acid-base chemistry.

Recent research has increasingly focused on the role of protein dynamics in enzyme catalysis. Enzymes are not rigid structures but flexible molecules that undergo conformational changes on timescales ranging from femtoseconds to seconds. Some researchers argue that these dynamic motions are not merely incidental to catalysis but are functionally coupled to the chemical transformation. According to this view, specific protein motions help guide substrates into reactive configurations and may even contribute to tunneling effects that allow chemical transformations to occur through quantum mechanical pathways that would be forbidden in classical mechanics.

Critics of the dynamics-coupling hypothesis contend that while protein motions certainly occur, their contribution to catalysis has been overstated. Computational studies have shown that much of the rate enhancement can be explained by electrostatic preorganization—the arrangement of charged and polar groups in the active site that stabilizes the transition state without requiring coordinated protein motions. These critics argue that dynamic effects, when they occur, are typically a consequence rather than a cause of the low activation barriers that enzymes create through more fundamental structural features.

The debate has practical implications for enzyme engineering and drug design. If protein dynamics are essential for catalysis, then successful enzyme design will require not only creating appropriate active site geometries but also engineering proper dynamic properties—a substantially more challenging task. Alternatively, if electrostatic effects predominate, the design challenge becomes more tractable, focusing primarily on precise positioning of catalytic residues. Recent successes in computational enzyme design, which have produced functional enzymes without explicitly considering dynamics, suggest that the classical view may capture the most essential features, though the designed enzymes typically remain far less efficient than their natural counterparts.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp31-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Scientists have conclusively determined that protein dynamics are essential for enzyme catalysis." },
      { letter: "B", text: "While the basic principles of enzyme catalysis are established, debate continues about the relative importance of transition state stabilization versus protein dynamics, with implications for enzyme engineering." },
      { letter: "C", text: "The classical view of enzyme catalysis has been entirely superseded by newer theories emphasizing protein motion." },
      { letter: "D", text: "Computational enzyme design has proven that dynamics play no role in enzyme function." },
      { letter: "E", text: "Quantum mechanical effects are the primary explanation for enzyme catalytic power." },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the classical view of catalysis, introduces the protein dynamics hypothesis, presents critiques of that hypothesis, and discusses practical implications of the debate for enzyme design. Answer B captures this ongoing scientific debate and its practical significance.",
    difficulty: "medium",
    passageId: "rc-exp31-p2",
  },
  {
    id: "rc-exp31-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the classical view of enzyme catalysis emphasizes",
    answerChoices: [
      { letter: "A", text: "the role of quantum mechanical tunneling in chemical transformations" },
      { letter: "B", text: "the inability of enzymes to accelerate reactions significantly" },
      { letter: "C", text: "the complementary fit between enzyme active sites and reaction transition states" },
      { letter: "D", text: "the essential role of conformational changes occurring on femtosecond timescales" },
      { letter: "E", text: "the dominance of acid-base chemistry over electrostatic effects" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the classical view 'emphasizes the complementary fit between enzyme active sites and the transition states of the reactions they catalyze.'",
    difficulty: "easy",
    passageId: "rc-exp31-p2",
  },
  {
    id: "rc-exp31-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, researchers who emphasize the role of protein dynamics in catalysis would most likely agree that",
    answerChoices: [
      { letter: "A", text: "transition state stabilization plays no role in enzyme function" },
      { letter: "B", text: "computational studies have definitively resolved the debate about dynamics" },
      { letter: "C", text: "specific protein motions may actively contribute to the chemical transformation rather than being incidental to it" },
      { letter: "D", text: "enzymes are essentially rigid structures with fixed active site geometries" },
      { letter: "E", text: "electrostatic preorganization fully explains enzyme catalytic power" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that dynamics proponents argue that dynamic motions 'are not merely incidental to catalysis but are functionally coupled to the chemical transformation' and 'help guide substrates into reactive configurations.'",
    difficulty: "medium",
    passageId: "rc-exp31-p2",
  },
  {
    id: "rc-exp31-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses computational enzyme design primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that natural enzymes are obsolete" },
      { letter: "B", text: "provide evidence relevant to the debate about the importance of dynamics versus structure in catalysis" },
      { letter: "C", text: "demonstrate that enzyme engineering has become trivially easy" },
      { letter: "D", text: "criticize researchers who study natural enzyme mechanisms" },
      { letter: "E", text: "explain why protein dynamics cannot be studied experimentally" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph discusses enzyme design in the context of the dynamics debate. Successes 'without explicitly considering dynamics' provide evidence about what features are essential, though the designed enzymes' lower efficiency leaves the question somewhat open.",
    difficulty: "medium",
    passageId: "rc-exp31-p2",
  },
  {
    id: "rc-exp31-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the debate between dynamics and classical views of catalysis can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of both positions as scientifically naive" },
      { letter: "B", text: "strongly partisan in favor of the dynamics hypothesis" },
      { letter: "C", text: "balanced and informative, acknowledging strengths and limitations of both perspectives" },
      { letter: "D", text: "skeptical that the question can ever be resolved empirically" },
      { letter: "E", text: "critical of the practical applications of enzyme research" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both the dynamics and classical views fairly, discusses computational evidence that somewhat favors the classical view, but notes that designed enzymes remain less efficient than natural ones—suggesting the issue is not fully resolved. This balanced treatment characterizes the author's approach.",
    difficulty: "medium",
    passageId: "rc-exp31-p2",
  },
  {
    id: "rc-exp31-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the case made by critics of the dynamics-coupling hypothesis?",
    answerChoices: [
      { letter: "A", text: "Enzyme motions occur on multiple timescales ranging from femtoseconds to seconds." },
      { letter: "B", text: "Some enzymes accelerate reactions by factors of billions compared to uncatalyzed reactions." },
      { letter: "C", text: "Enzymes with artificially constrained flexibility retain most of their catalytic activity when transition state-stabilizing residues are preserved." },
      { letter: "D", text: "Quantum mechanical tunneling has been observed in certain enzyme-catalyzed reactions." },
      { letter: "E", text: "Natural enzymes outperform computationally designed enzymes in catalytic efficiency." },
    ],
    correctAnswer: "C",
    explanation: "Critics argue that 'electrostatic preorganization' and structural features explain catalysis without requiring coordinated protein motions. If enzymes with constrained flexibility retain catalytic activity, this would support the view that dynamics are not essential—strengthening the critics' position.",
    difficulty: "hard",
    passageId: "rc-exp31-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - MODERNIST POETRY (ELIOT, POUND)
// ============================================

const passage3 = `The modernist poetry revolution of the early twentieth century fundamentally transformed English-language verse, and no figures were more central to this transformation than T.S. Eliot and Ezra Pound. Their collaborative relationship, which began when Pound discovered Eliot's "The Love Song of J. Alfred Prufrock" in 1914, shaped the direction of modernist poetics and established principles that would influence generations of subsequent poets. Yet their partnership also embodied tensions that would later fracture the modernist movement itself.

Pound's famous dictum to "make it new" captured the modernist imperative to break from Victorian and Georgian conventions. He advocated for precision, economy, and the direct treatment of subject matter, rejecting what he saw as the diffuseness and sentimentality of nineteenth-century verse. His imagist principles—the use of concrete images to present complex ideas without abstraction or commentary—represented a radical departure from the discursive, moralizing tendencies of Victorian poetry. Pound's editorial interventions in Eliot's work, most famously his drastic cuts to "The Waste Land," demonstrated these principles in action, stripping away what Pound considered extraneous material to reveal the poem's essential structure.

Eliot shared Pound's commitment to technical precision but brought a different sensibility to modernist practice. Where Pound emphasized visual clarity and directness, Eliot cultivated deliberate difficulty and allusive density. His poetry layers references to Dante, Shakespeare, Hindu scripture, and popular culture into complex textual surfaces that resist easy interpretation. Eliot's critical writings articulated an "impersonal theory of poetry" that rejected Romantic expressivism, arguing that poetry should be an escape from personality rather than an expression of it. The poet, in this view, serves as a catalyst for bringing together disparate elements rather than as a confessor revealing subjective states.

The political divergence between Eliot and Pound in subsequent decades illuminated darker aspects of modernist thought. Pound's fascist sympathies led to his wartime broadcasts on behalf of Mussolini's regime and his eventual arrest for treason. Eliot's social conservatism, while less extreme, included troubling expressions of anti-Semitism and nostalgia for hierarchical social orders. Critics have debated whether these political tendencies were incidental to their poetics or whether modernist formalism itself contained authoritarian implications—a preference for order, tradition, and elite cultural authority that could shade into reactionary politics.

Contemporary assessments of Eliot and Pound must grapple with this fraught legacy while acknowledging their technical achievements. Their innovations in rhythm, imagery, and poetic structure remain influential, and their insistence on poetry as a serious intellectual endeavor elevated verse at a time when it risked becoming marginal to literary culture. Yet their example also demonstrates the inadequacy of formalist criteria alone for evaluating poetry, since technical mastery clearly did not prevent profound moral and political failures. The challenge for contemporary readers is to learn from their innovations without celebrating their entire legacy uncritically.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp31-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "T.S. Eliot's poetry was technically superior to Ezra Pound's imagist verse." },
      { letter: "B", text: "Eliot and Pound's collaborative relationship shaped modernist poetics, but their legacy is complicated by political dimensions that require contemporary readers to evaluate their work critically." },
      { letter: "C", text: "Modernist poetry has been entirely discredited by the political failures of its leading practitioners." },
      { letter: "D", text: "Pound's editorial interventions improved Eliot's work beyond recognition." },
      { letter: "E", text: "The impersonal theory of poetry remains the dominant approach in contemporary verse." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces Eliot and Pound's collaboration, their different approaches to modernist principles, their problematic politics, and the challenge of evaluating their legacy. Answer B captures this comprehensive assessment.",
    difficulty: "medium",
    passageId: "rc-exp31-p3",
  },
  {
    id: "rc-exp31-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Pound's imagist principles emphasized",
    answerChoices: [
      { letter: "A", text: "abstract philosophical commentary on concrete experiences" },
      { letter: "B", text: "the use of concrete images to present complex ideas without abstraction" },
      { letter: "C", text: "extensive moralizing about contemporary social issues" },
      { letter: "D", text: "the expression of subjective emotional states" },
      { letter: "E", text: "allusive references to Dante and Shakespeare" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Pound's imagist principles involved 'the use of concrete images to present complex ideas without abstraction or commentary.'",
    difficulty: "easy",
    passageId: "rc-exp31-p3",
  },
  {
    id: "rc-exp31-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Eliot's 'impersonal theory of poetry' would most likely regard which of the following as problematic?",
    answerChoices: [
      { letter: "A", text: "Poetry that incorporates references to multiple literary traditions" },
      { letter: "B", text: "Verse that emphasizes technical precision and careful craftsmanship" },
      { letter: "C", text: "Poetry primarily concerned with expressing the poet's subjective emotional experiences" },
      { letter: "D", text: "Poems that layer references to create complex textual surfaces" },
      { letter: "E", text: "Verse that serves as a catalyst for bringing together disparate elements" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that Eliot's impersonal theory 'rejected Romantic expressivism' and argued that 'poetry should be an escape from personality rather than an expression of it.' Poetry focused on subjective emotional expression would contradict this principle.",
    difficulty: "medium",
    passageId: "rc-exp31-p3",
  },
  {
    id: "rc-exp31-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Pound's 'drastic cuts to The Waste Land' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Pound for damaging Eliot's original vision" },
      { letter: "B", text: "illustrate how Pound's principles of precision and economy were applied in editorial practice" },
      { letter: "C", text: "argue that collaboration always improves poetic quality" },
      { letter: "D", text: "demonstrate Eliot's dependence on Pound for creative inspiration" },
      { letter: "E", text: "contrast Victorian and modernist approaches to poetic structure" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Pound's cuts to The Waste Land 'demonstrated these principles in action, stripping away what Pound considered extraneous material.' The example illustrates the practical application of Pound's aesthetic principles.",
    difficulty: "medium",
    passageId: "rc-exp31-p3",
  },
  {
    id: "rc-exp31-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the technical achievements of Eliot and Pound is best described as",
    answerChoices: [
      { letter: "A", text: "dismissive, viewing their innovations as overrated" },
      { letter: "B", text: "uncritically celebratory, ignoring their political failures" },
      { letter: "C", text: "appreciative while insisting that technical merit does not excuse moral failings" },
      { letter: "D", text: "indifferent, focusing solely on their political activities" },
      { letter: "E", text: "nostalgic for the Victorian poetry they sought to replace" },
    ],
    correctAnswer: "C",
    explanation: "The author states that their innovations 'remain influential' and that they 'elevated verse,' showing appreciation for technical achievements. However, the author also insists that 'technical mastery clearly did not prevent profound moral and political failures,' indicating that such achievements must be evaluated alongside ethical concerns.",
    difficulty: "medium",
    passageId: "rc-exp31-p3",
  },
  {
    id: "rc-exp31-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following approaches to evaluating modernist poetry would the author most likely endorse?",
    answerChoices: [
      { letter: "A", text: "Judging poetry solely on the basis of its technical innovations and formal properties" },
      { letter: "B", text: "Dismissing modernist poetry entirely because of its practitioners' political views" },
      { letter: "C", text: "Acknowledging both the technical achievements and the troubling aspects of modernist poets' legacies" },
      { letter: "D", text: "Prioritizing biographical information about poets over analysis of their work" },
      { letter: "E", text: "Ignoring historical context when interpreting poems" },
    ],
    correctAnswer: "C",
    explanation: "The passage's final paragraph argues for grappling with the 'fraught legacy while acknowledging their technical achievements' and learning from innovations 'without celebrating their entire legacy uncritically.' This balanced approach acknowledges both technical merit and problematic aspects.",
    difficulty: "medium",
    passageId: "rc-exp31-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - SOCIAL IDENTITY THEORY
// ============================================

const passage4 = `Social identity theory, developed by Henri Tajfel and John Turner in the 1970s and 1980s, has become one of the most influential frameworks for understanding intergroup relations in social psychology. The theory proposes that individuals derive a significant portion of their self-concept from the social groups to which they belong, and that this group-based identity motivates behaviors ranging from in-group favoritism to intergroup conflict. Its insights have been applied to contexts as diverse as organizational behavior, political polarization, and ethnic violence.

The theory rests on several foundational concepts. Social categorization refers to the cognitive process by which individuals classify themselves and others into groups based on shared characteristics. Social identification describes the emotional significance individuals attach to their group memberships—the extent to which belonging to a particular group becomes central to their sense of self. Social comparison involves evaluating one's in-group relative to relevant out-groups, with a motivation to achieve positive distinctiveness. According to the theory, individuals prefer their in-groups to compare favorably with out-groups because such comparisons enhance self-esteem.

Tajfel's minimal group paradigm experiments provided striking demonstrations of in-group favoritism. Participants assigned to groups on arbitrary or trivial bases—such as preferences for abstract paintings—nevertheless displayed preferential treatment toward fellow in-group members in resource allocation tasks. These findings suggested that mere categorization, even without competition, shared history, or personal acquaintance, could produce intergroup discrimination. The robustness of these effects across numerous replications established that group-based favoritism emerges remarkably easily under minimal conditions.

Critics have raised several challenges to social identity theory. Some researchers question whether self-esteem enhancement actually motivates intergroup discrimination, noting that the predicted relationship between discrimination and self-esteem has proven difficult to demonstrate consistently. Others argue that the theory overemphasizes cognitive processes at the expense of material interests—that people often favor their in-groups not primarily for psychological reasons but because in-group success translates into tangible benefits. Still others contend that the theory's focus on laboratory demonstrations of minimal group effects may not adequately capture the historical, economic, and political factors that shape real-world intergroup conflicts.

Subsequent developments have refined and extended the original theory. Self-categorization theory, developed by Turner and colleagues, elaborated how individuals shift between different levels of identity—personal, group, and superordinate—depending on context. Research on identity threat has explored how challenges to group status or legitimacy can intensify intergroup hostility. Applications to political psychology have examined how partisan and ideological identities function similarly to other social identities, producing affective polarization that transcends specific policy disagreements. These extensions demonstrate both the generativity of the original framework and the ongoing effort to address its limitations.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp31-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that social identity theory should be abandoned in favor of newer approaches" },
      { letter: "B", text: "provide an overview of social identity theory, including its core concepts, supporting evidence, critiques, and subsequent developments" },
      { letter: "C", text: "demonstrate that self-esteem enhancement is the primary driver of all intergroup conflict" },
      { letter: "D", text: "criticize the minimal group paradigm as methodologically flawed" },
      { letter: "E", text: "explain why laboratory experiments cannot contribute to understanding social behavior" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents social identity theory's core concepts (paragraph 2), describes supporting experiments (paragraph 3), discusses critiques (paragraph 4), and traces subsequent developments (paragraph 5). This comprehensive overview characterizes the passage's primary purpose.",
    difficulty: "medium",
    passageId: "rc-exp31-p4",
  },
  {
    id: "rc-exp31-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the minimal group paradigm experiments demonstrated that",
    answerChoices: [
      { letter: "A", text: "intergroup conflict requires long histories of competition between groups" },
      { letter: "B", text: "group-based favoritism can emerge from categorization alone, without competition or shared history" },
      { letter: "C", text: "self-esteem is unrelated to group membership" },
      { letter: "D", text: "material interests are the primary driver of intergroup discrimination" },
      { letter: "E", text: "only meaningful group differences produce intergroup favoritism" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that these experiments showed that 'mere categorization, even without competition, shared history, or personal acquaintance, could produce intergroup discrimination.'",
    difficulty: "easy",
    passageId: "rc-exp31-p4",
  },
  {
    id: "rc-exp31-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, critics who emphasize material interests would most likely argue that",
    answerChoices: [
      { letter: "A", text: "psychological processes play no role in intergroup behavior" },
      { letter: "B", text: "the minimal group paradigm provides the best model for understanding real-world conflict" },
      { letter: "C", text: "in-group favoritism often reflects rational calculations about tangible benefits rather than purely psychological motivations" },
      { letter: "D", text: "social categorization processes are entirely unconscious" },
      { letter: "E", text: "self-esteem enhancement is the primary driver of political polarization" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that some critics argue 'people often favor their in-groups not primarily for psychological reasons but because in-group success translates into tangible benefits.' This view emphasizes material interests over psychological motivations.",
    difficulty: "medium",
    passageId: "rc-exp31-p4",
  },
  {
    id: "rc-exp31-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions 'preferences for abstract paintings' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that aesthetic preferences are the primary basis for social categorization" },
      { letter: "B", text: "illustrate the arbitrary and trivial bases on which group assignments could still produce in-group favoritism" },
      { letter: "C", text: "criticize the minimal group paradigm for using unrealistic experimental conditions" },
      { letter: "D", text: "demonstrate the importance of artistic training for group identity" },
      { letter: "E", text: "provide evidence that self-esteem drives intergroup discrimination" },
    ],
    correctAnswer: "B",
    explanation: "The painting preferences example appears as one of the 'arbitrary or trivial bases' used in minimal group experiments. The point is that even such trivial categorization produced group favoritism, demonstrating how easily such effects emerge.",
    difficulty: "medium",
    passageId: "rc-exp31-p4",
  },
  {
    id: "rc-exp31-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward social identity theory can best be characterized as",
    answerChoices: [
      { letter: "A", text: "highly skeptical, viewing the theory as fundamentally flawed" },
      { letter: "B", text: "informatively balanced, presenting the theory's contributions while acknowledging ongoing debates" },
      { letter: "C", text: "uncritically enthusiastic, dismissing all objections to the theory" },
      { letter: "D", text: "indifferent, showing no interest in the theory's significance" },
      { letter: "E", text: "hostile toward Tajfel and Turner's original formulation" },
    ],
    correctAnswer: "B",
    explanation: "The author presents social identity theory as 'one of the most influential frameworks,' describes its evidence and applications, presents substantive critiques fairly, and discusses extensions that address limitations. This balanced treatment characterizes the author's approach.",
    difficulty: "medium",
    passageId: "rc-exp31-p4",
  },
  {
    id: "rc-exp31-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the criticism that social identity theory overemphasizes cognitive processes at the expense of material interests?",
    answerChoices: [
      { letter: "A", text: "Intergroup conflict is often intensified by economic competition for scarce resources." },
      { letter: "B", text: "Laboratory experiments have successfully replicated minimal group effects across many cultures." },
      { letter: "C", text: "In-group favoritism persists even when it produces no tangible material benefits for individuals displaying it." },
      { letter: "D", text: "Political polarization has increased in recent decades across many democracies." },
      { letter: "E", text: "Identity threat can intensify hostility toward out-groups." },
    ],
    correctAnswer: "C",
    explanation: "The criticism suggests that people favor in-groups for material benefits rather than psychological reasons. If in-group favoritism persists even when it provides no material benefits, this would weaken the materialist critique and support the view that psychological factors (like identity and self-esteem) drive the behavior independently.",
    difficulty: "hard",
    passageId: "rc-exp31-p4",
  },
];

// Export all RC questions from Set 31
export const rcQuestionsExpSet31: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet31 = {
  passage1: { id: "rc-exp31-p1", content: passage1, topic: "law", title: "Comparative Constitutional Law" },
  passage2: { id: "rc-exp31-p2", content: passage2, topic: "natural-sciences", title: "Enzyme Function and Catalysis" },
  passage3: { id: "rc-exp31-p3", content: passage3, topic: "humanities", title: "Modernist Poetry: Eliot and Pound" },
  passage4: { id: "rc-exp31-p4", content: passage4, topic: "social-sciences", title: "Social Identity Theory" },
};
