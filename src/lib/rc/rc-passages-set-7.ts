// Reading Comprehension Expansion Set 7
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - PRIVACY AND THE FOURTH AMENDMENT IN THE DIGITAL AGE
// ============================================

const passage1 = `The Fourth Amendment's prohibition against unreasonable searches and seizures was crafted in an era of physical spaces and tangible property. The Founders were concerned with British soldiers entering colonial homes to search for contraband or seize personal papers. Yet as the Supreme Court recognized in Katz v. United States (1967), the Fourth Amendment "protects people, not places," establishing that constitutional privacy protections extend to reasonable expectations of privacy rather than merely to physical intrusions into constitutionally protected areas.

The digital age has profoundly challenged this framework. Modern individuals generate vast quantities of data simply by participating in contemporary society: location data from cell phones, browsing histories from internet use, financial records from electronic transactions, and communications through email and messaging applications. This data is typically held by third parties—telecommunications companies, internet service providers, financial institutions—rather than by individuals themselves. Under the traditional "third-party doctrine" established in Smith v. Maryland (1979), individuals have no reasonable expectation of privacy in information they voluntarily share with others, even if that sharing is practically compelled by modern life.

Critics argue that the third-party doctrine is fundamentally incompatible with the digital age. When virtually every aspect of daily life generates digital records held by third parties, strict application of the doctrine would effectively eliminate Fourth Amendment protection for most personal information. As Justice Sotomayor observed in her concurrence in United States v. Jones (2012), the doctrine is "ill-suited to the digital age, in which people reveal a great deal of information about themselves to third parties in the course of carrying out mundane tasks."

The Supreme Court partially addressed these concerns in Carpenter v. United States (2018), holding that the government's acquisition of historical cell-site location information constitutes a Fourth Amendment search requiring a warrant. Chief Justice Roberts's majority opinion emphasized the "detailed, encyclopedic, and effortlessly compiled" nature of digital records and their capacity to achieve "near perfect surveillance." However, the Court explicitly declined to abandon the third-party doctrine entirely, instead characterizing cell-site location data as a "unique" category requiring special treatment.

The narrow holding in Carpenter has left substantial uncertainty about the constitutional status of other categories of digital data. Lower courts have struggled to determine which types of third-party records warrant similar protection and which remain subject to the traditional doctrine. Some scholars have proposed replacing the third-party doctrine with a framework focused on the sensitivity of information or the degree of intrusion into intimate aspects of life. Others argue that legislative rather than judicial action is necessary to establish clear rules governing digital privacy. The fundamental tension between traditional Fourth Amendment doctrine and the realities of digital life remains unresolved.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp7-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Supreme Court has effectively abandoned the third-party doctrine in response to digital age privacy concerns." },
      { letter: "B", text: "Fourth Amendment protections are fundamentally incompatible with modern technology and require complete revision." },
      { letter: "C", text: "The digital age has created significant challenges for Fourth Amendment doctrine, and while the Supreme Court has begun addressing these issues, substantial uncertainty remains about the constitutional status of digital data." },
      { letter: "D", text: "The Carpenter decision provides a comprehensive framework for determining when digital data held by third parties receives Fourth Amendment protection." },
      { letter: "E", text: "Legislative action is the only viable solution to the problems created by applying Fourth Amendment doctrine to digital information." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the evolution of Fourth Amendment doctrine from physical spaces to digital data, discusses the third-party doctrine's challenges in the digital age, examines the partial response in Carpenter, and concludes by noting ongoing uncertainty. Answer C captures this comprehensive scope, acknowledging both the Court's initial response and the remaining unresolved issues.",
    difficulty: "medium",
    passageId: "rc-exp7-p1",
  },
  {
    id: "rc-exp7-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the third-party doctrine as established in Smith v. Maryland holds that",
    answerChoices: [
      { letter: "A", text: "telecommunications companies must protect customer data from government access" },
      { letter: "B", text: "individuals retain Fourth Amendment protection for all information shared with businesses" },
      { letter: "C", text: "the government must always obtain a warrant before accessing third-party records" },
      { letter: "D", text: "individuals have no reasonable expectation of privacy in information they voluntarily share with others" },
      { letter: "E", text: "cell-site location data is entitled to special constitutional protection" },
    ],
    correctAnswer: "D",
    explanation: "The passage explicitly states that 'Under the traditional third-party doctrine established in Smith v. Maryland (1979), individuals have no reasonable expectation of privacy in information they voluntarily share with others.'",
    difficulty: "easy",
    passageId: "rc-exp7-p1",
  },
  {
    id: "rc-exp7-003",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author quotes Justice Sotomayor's concurrence in United States v. Jones primarily in order to",
    answerChoices: [
      { letter: "A", text: "establish the binding legal standard for digital privacy cases" },
      { letter: "B", text: "illustrate judicial recognition of the third-party doctrine's inadequacy for the digital age" },
      { letter: "C", text: "argue that the Supreme Court should overrule Smith v. Maryland entirely" },
      { letter: "D", text: "demonstrate that lower courts have unanimously rejected the third-party doctrine" },
      { letter: "E", text: "contrast Justice Sotomayor's position with that of Chief Justice Roberts" },
    ],
    correctAnswer: "B",
    explanation: "Justice Sotomayor's quote appears in the paragraph discussing critics' arguments that the third-party doctrine is 'fundamentally incompatible with the digital age.' Her observation that the doctrine is 'ill-suited to the digital age' is used to support this critical perspective from a judicial source.",
    difficulty: "medium",
    passageId: "rc-exp7-p1",
  },
  {
    id: "rc-exp7-004",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which of the following can be most reasonably inferred about the Carpenter decision?",
    answerChoices: [
      { letter: "A", text: "It resolved all questions about the constitutional status of digital data held by third parties." },
      { letter: "B", text: "It applied traditional Fourth Amendment doctrine without modification." },
      { letter: "C", text: "It created a limited exception to the third-party doctrine for a specific type of digital data while preserving the doctrine's general applicability." },
      { letter: "D", text: "It was unanimously endorsed by legal scholars and lower courts." },
      { letter: "E", text: "It eliminated the warrant requirement for government access to digital records." },
    ],
    correctAnswer: "C",
    explanation: "The passage states that in Carpenter, the Court required a warrant for cell-site location data but 'explicitly declined to abandon the third-party doctrine entirely, instead characterizing cell-site location data as a unique category requiring special treatment.' This indicates a limited exception rather than a wholesale change.",
    difficulty: "medium",
    passageId: "rc-exp7-p1",
  },
  {
    id: "rc-exp7-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the current state of Fourth Amendment doctrine as applied to digital data can best be described as",
    answerChoices: [
      { letter: "A", text: "satisfied that the Carpenter decision adequately addresses the problem" },
      { letter: "B", text: "dismissive of concerns about digital privacy" },
      { letter: "C", text: "analytical in presenting the doctrinal challenges and their partial resolution while noting continued uncertainty" },
      { letter: "D", text: "strongly critical of the Supreme Court's failure to act more decisively" },
      { letter: "E", text: "optimistic that lower courts will quickly resolve the remaining questions" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the historical development, the challenges, the critics' views, the Court's response, and the remaining uncertainties in a balanced, analytical manner. The passage concludes by noting that 'the fundamental tension...remains unresolved' without strongly advocating for any particular resolution.",
    difficulty: "medium",
    passageId: "rc-exp7-p1",
  },
  {
    id: "rc-exp7-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the argument made by critics of the third-party doctrine as described in the passage?",
    answerChoices: [
      { letter: "A", text: "Some individuals successfully avoid generating digital records by using only cash and avoiding cell phones." },
      { letter: "B", text: "A comprehensive study reveals that 98% of Americans cannot participate in employment, banking, or healthcare without generating digital records held by third parties." },
      { letter: "C", text: "The original Smith v. Maryland case involved relatively limited telephone records." },
      { letter: "D", text: "Some European countries have enacted stronger digital privacy protections than the United States." },
      { letter: "E", text: "The Founders could not have anticipated the development of digital technology." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue that 'when virtually every aspect of daily life generates digital records held by third parties, strict application of the doctrine would effectively eliminate Fourth Amendment protection.' Evidence that nearly all Americans cannot participate in essential activities without generating such records would strongly support this argument.",
    difficulty: "hard",
    passageId: "rc-exp7-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - EPIGENETICS AND GENE EXPRESSION
// ============================================

const passage2 = `For much of the twentieth century, the dominant view in genetics held that DNA sequence alone determined hereditary traits. Genes were conceived as stable blueprints, passed faithfully from generation to generation, with environmental factors playing no role in inheritance. The emergence of epigenetics has fundamentally challenged this paradigm, revealing a complex layer of regulatory mechanisms that control gene expression without altering the underlying DNA sequence.

Epigenetic modifications involve chemical alterations to DNA or to the histone proteins around which DNA is wrapped. The most extensively studied modification is DNA methylation, in which methyl groups attach to cytosine bases, typically suppressing gene expression. Histone modifications—including acetylation, methylation, and phosphorylation—similarly affect whether genes are transcribed into RNA. These modifications create a dynamic regulatory system that allows identical genetic sequences to produce dramatically different outcomes depending on cellular context and environmental conditions.

Perhaps the most provocative aspect of epigenetic research concerns the potential for transgenerational inheritance. Studies in various organisms have demonstrated that epigenetic changes acquired during an organism's lifetime can sometimes be transmitted to offspring. Research on the Dutch Hunger Winter—a famine that occurred in the Netherlands during World War II—found that children of women who were pregnant during the famine exhibited higher rates of obesity and cardiovascular disease decades later. Some studies have suggested that these effects extended to grandchildren, though the mechanisms and extent of such transmission remain actively debated.

The environmental responsiveness of epigenetic systems has significant implications for understanding disease. Cancer, in particular, involves widespread epigenetic dysregulation. Unlike genetic mutations, epigenetic modifications are potentially reversible, offering therapeutic opportunities. Drugs that inhibit DNA methylation or modify histone acetylation have already received approval for treating certain cancers, and research continues into epigenetic therapies for conditions ranging from neurological disorders to cardiovascular disease.

However, the field of epigenetics has not been without controversy. Some researchers argue that claims about transgenerational epigenetic inheritance have been overstated, particularly regarding their relevance to humans. The mechanisms by which epigenetic marks might survive the extensive reprogramming that occurs during reproduction remain incompletely understood. Critics point to methodological challenges in distinguishing genuine epigenetic inheritance from other forms of non-genetic transmission, such as behavioral or cultural factors. Despite these debates, the fundamental insight that gene expression is subject to dynamic, environmentally responsive regulation has transformed our understanding of how genotype relates to phenotype.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp7-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Epigenetic modifications are the primary cause of most human diseases." },
      { letter: "B", text: "Epigenetics has overturned the field of genetics by proving that DNA sequence is irrelevant to heredity." },
      { letter: "C", text: "Epigenetics has revealed that gene expression is regulated by mechanisms beyond DNA sequence, with significant implications for understanding development and disease, though some claims about transgenerational inheritance remain controversial." },
      { letter: "D", text: "The Dutch Hunger Winter studies conclusively prove that acquired characteristics can be inherited." },
      { letter: "E", text: "Epigenetic therapies will soon replace all other forms of cancer treatment." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes how epigenetics has challenged the DNA-centric view of genetics, explains the mechanisms of epigenetic regulation, discusses implications for disease and therapy, and addresses the ongoing controversy about transgenerational inheritance. Answer C captures this balanced overview.",
    difficulty: "medium",
    passageId: "rc-exp7-p2",
  },
  {
    id: "rc-exp7-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, DNA methylation typically has which of the following effects?",
    answerChoices: [
      { letter: "A", text: "It activates gene expression by modifying histone proteins" },
      { letter: "B", text: "It suppresses gene expression" },
      { letter: "C", text: "It permanently alters the underlying DNA sequence" },
      { letter: "D", text: "It causes genetic mutations that are passed to offspring" },
      { letter: "E", text: "It enhances transcription of RNA" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that DNA methylation, 'in which methyl groups attach to cytosine bases, typically suppressing gene expression.'",
    difficulty: "easy",
    passageId: "rc-exp7-p2",
  },
  {
    id: "rc-exp7-009",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the Dutch Hunger Winter primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the ethical conduct of researchers who studied famine victims" },
      { letter: "B", text: "provide an example of research suggesting transgenerational effects of environmental conditions" },
      { letter: "C", text: "argue that obesity is primarily caused by epigenetic factors rather than diet" },
      { letter: "D", text: "demonstrate that epigenetic therapies can successfully treat cardiovascular disease" },
      { letter: "E", text: "contrast European and American approaches to epigenetic research" },
    ],
    correctAnswer: "B",
    explanation: "The Dutch Hunger Winter example appears in the paragraph about transgenerational inheritance. It illustrates research showing that 'epigenetic changes acquired during an organism's lifetime can sometimes be transmitted to offspring,' with effects potentially extending to grandchildren.",
    difficulty: "medium",
    passageId: "rc-exp7-p2",
  },
  {
    id: "rc-exp7-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following would critics of transgenerational epigenetic inheritance claims most likely argue?",
    answerChoices: [
      { letter: "A", text: "DNA methylation does not actually affect gene expression." },
      { letter: "B", text: "Observed effects across generations could potentially be explained by factors other than epigenetic transmission." },
      { letter: "C", text: "The Dutch Hunger Winter never actually occurred." },
      { letter: "D", text: "Epigenetic modifications have no relevance to disease." },
      { letter: "E", text: "All epigenetic research should be immediately halted." },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'Critics point to methodological challenges in distinguishing genuine epigenetic inheritance from other forms of non-genetic transmission, such as behavioral or cultural factors.' This suggests critics would argue that other explanations might account for observed transgenerational effects.",
    difficulty: "medium",
    passageId: "rc-exp7-p2",
  },
  {
    id: "rc-exp7-011",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the information in the passage, which of the following research findings would most directly support the therapeutic potential of epigenetic interventions?",
    answerChoices: [
      { letter: "A", text: "A study showing that a particular disease is caused by an irreversible DNA mutation" },
      { letter: "B", text: "Evidence that a drug reversing histone modifications can restore normal cell function in cancer patients" },
      { letter: "C", text: "Research demonstrating that behavioral interventions are more effective than any medication" },
      { letter: "D", text: "A finding that all epigenetic marks are erased during reproduction" },
      { letter: "E", text: "Evidence that DNA methylation patterns are identical in all human cells" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Unlike genetic mutations, epigenetic modifications are potentially reversible, offering therapeutic opportunities' and mentions drugs that 'inhibit DNA methylation or modify histone acetylation' for treating cancers. A finding that reversing histone modifications restores normal function would directly support this therapeutic potential.",
    difficulty: "medium",
    passageId: "rc-exp7-p2",
  },
  {
    id: "rc-exp7-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A scientific hypothesis is proposed, experiments testing it are described, and conclusions are drawn." },
      { letter: "B", text: "A traditional view is described, a challenge to that view is explained, implications are discussed, and limitations are acknowledged." },
      { letter: "C", text: "Two competing theories are presented and then reconciled into a unified framework." },
      { letter: "D", text: "A series of experiments is described chronologically, ending with the most recent findings." },
      { letter: "E", text: "A problem is identified, several potential solutions are evaluated, and one is recommended." },
    ],
    correctAnswer: "B",
    explanation: "The passage begins with the traditional genetic view (DNA sequence alone determines traits), describes how epigenetics challenges this view, discusses implications (transgenerational inheritance, disease, therapy), and acknowledges limitations and controversies. Answer B accurately captures this structure.",
    difficulty: "hard",
    passageId: "rc-exp7-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - POSTMODERN ARCHITECTURE AND DECONSTRUCTIVISM
// ============================================

const passage3 = `Deconstructivist architecture emerged in the late 1980s as a radical challenge to the orderly rationalism of modernist design and the playful historicism of postmodernism. Taking intellectual inspiration from the philosophical movement of deconstruction—particularly the work of Jacques Derrida—deconstructivist architects sought to destabilize the fundamental assumptions underlying architectural practice: that buildings should appear stable, that forms should be unified, and that structures should express their function clearly.

The 1988 exhibition "Deconstructivist Architecture" at the Museum of Modern Art in New York, curated by Philip Johnson and Mark Wigley, brought together the work of seven architects—Frank Gehry, Daniel Libeskind, Rem Koolhaas, Peter Eisenman, Zaha Hadid, Coop Himmelblau, and Bernard Tschumi—whose designs shared certain formal characteristics despite their diverse approaches. These buildings featured fragmented forms, non-rectilinear geometries, apparent instability, and deliberate visual disorientation. Walls tilted at unexpected angles, planes intersected without resolution, and structures seemed perpetually on the verge of collapse or explosion.

Critics of deconstructivist architecture raised both practical and theoretical objections. Practically, the complex geometries and unconventional forms significantly increased construction costs and created challenges for building functionality. Theoretically, some argued that the movement's claims to embody deconstructive philosophy were superficial at best. Deconstruction as a philosophical practice involves careful analysis of how texts undermine their own apparent meanings, not simply the creation of chaotic or fragmented forms. To translate this intellectual operation into tilted walls and fractured planes, critics contended, was to reduce a sophisticated philosophical methodology to a visual style.

Defenders of deconstructivism responded that architecture, as a three-dimensional art form, necessarily translates ideas into spatial and material expression. Just as deconstruction reveals the instability inherent in seemingly stable textual meanings, deconstructivist buildings expose the constructed nature of architectural conventions. The appearance of stability in traditional architecture, they argued, is itself a kind of deception, concealing the tensions and contradictions present in any building. Deconstructivist design simply makes these usually hidden aspects visible.

The influence of deconstructivism on subsequent architecture has been substantial, even as the movement itself has declined as a distinct category. The computational design techniques developed to realize complex deconstructivist geometries paved the way for contemporary parametric architecture. More broadly, deconstructivism helped liberate architecture from the constraints of right angles and regular forms, expanding the vocabulary of acceptable architectural expression. However, the movement's legacy remains contested, with some viewing it as a liberating expansion of architectural possibilities and others as a self-indulgent detour that prioritized theoretical posturing over practical human needs.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp7-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Deconstructivist architecture represents the most successful application of philosophical theory to architectural practice." },
      { letter: "B", text: "The Museum of Modern Art's 1988 exhibition permanently established deconstructivism as the dominant architectural movement." },
      { letter: "C", text: "Deconstructivist architecture emerged as a challenge to conventional design principles, generated significant debate about its theoretical foundations and practicality, and left a contested but substantial legacy." },
      { letter: "D", text: "The practical difficulties of deconstructivist construction have led to the complete abandonment of its principles." },
      { letter: "E", text: "Jacques Derrida's philosophy of deconstruction directly dictated the specific design choices of deconstructivist architects." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes deconstructivism's emergence as a challenge to rationalism, presents both critical and defensive perspectives on the movement, and discusses its contested legacy. Answer C captures this comprehensive treatment without overstating any particular position.",
    difficulty: "medium",
    passageId: "rc-exp7-p3",
  },
  {
    id: "rc-exp7-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, which of the following was a characteristic of buildings featured in the 1988 MoMA exhibition?",
    answerChoices: [
      { letter: "A", text: "Strict adherence to right angles and regular forms" },
      { letter: "B", text: "Historical references to classical architecture" },
      { letter: "C", text: "Fragmented forms and non-rectilinear geometries" },
      { letter: "D", text: "Minimal construction costs due to simple designs" },
      { letter: "E", text: "Clear expression of structural function" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the buildings in the exhibition 'featured fragmented forms, non-rectilinear geometries, apparent instability, and deliberate visual disorientation.'",
    difficulty: "easy",
    passageId: "rc-exp7-p3",
  },
  {
    id: "rc-exp7-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, critics who argued that deconstructivism superficially applied deconstructive philosophy would most likely agree with which of the following?",
    answerChoices: [
      { letter: "A", text: "Derrida's philosophical work has no relevance to any artistic practice." },
      { letter: "B", text: "Creating visually chaotic forms does not necessarily embody the intellectual operations of philosophical deconstruction." },
      { letter: "C", text: "All deconstructivist buildings are structurally unsound." },
      { letter: "D", text: "The MoMA exhibition should never have taken place." },
      { letter: "E", text: "Modernist architecture was superior to all subsequent movements." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics argued 'To translate this intellectual operation into tilted walls and fractured planes...was to reduce a sophisticated philosophical methodology to a visual style.' This implies that visual chaos alone does not constitute genuine embodiment of deconstructive philosophy.",
    difficulty: "medium",
    passageId: "rc-exp7-p3",
  },
  {
    id: "rc-exp7-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions that 'the appearance of stability in traditional architecture is itself a kind of deception' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize traditional architects for deliberately misleading the public" },
      { letter: "B", text: "explain defenders' argument that deconstructivism reveals usually hidden aspects of all buildings" },
      { letter: "C", text: "argue that all architecture is inherently dishonest" },
      { letter: "D", text: "demonstrate that deconstructivist buildings are structurally unsafe" },
      { letter: "E", text: "contrast the cost of traditional construction with deconstructivist methods" },
    ],
    correctAnswer: "B",
    explanation: "This statement appears in the paragraph presenting defenders' response to critics. Defenders argued that 'deconstructivist buildings expose the constructed nature of architectural conventions' and that traditional architecture conceals 'tensions and contradictions.' The claim about stability as deception supports their argument that deconstructivism makes visible what is usually hidden.",
    difficulty: "medium",
    passageId: "rc-exp7-p3",
  },
  {
    id: "rc-exp7-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's treatment of the debate between critics and defenders of deconstructivism can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly advocating for the critics' position" },
      { letter: "B", text: "dismissive of all theoretical considerations" },
      { letter: "C", text: "even-handed, presenting both sides without clearly endorsing either" },
      { letter: "D", text: "enthusiastically supportive of deconstructivist principles" },
      { letter: "E", text: "confused about the fundamental issues at stake" },
    ],
    correctAnswer: "C",
    explanation: "The author presents critics' objections (paragraphs about practical and theoretical problems) and defenders' responses (paragraph 4) without indicating which view is correct. The final paragraph notes that the legacy 'remains contested' with 'some viewing it as a liberating expansion' and 'others as a self-indulgent detour.' This balanced presentation suggests an even-handed approach.",
    difficulty: "medium",
    passageId: "rc-exp7-p3",
  },
  {
    id: "rc-exp7-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the development of computational design techniques was related to deconstructivism in which of the following ways?",
    answerChoices: [
      { letter: "A", text: "Computational techniques were developed before deconstructivism and made the movement possible." },
      { letter: "B", text: "The complex geometries of deconstructivist buildings led to the development of computational techniques that later enabled parametric architecture." },
      { letter: "C", text: "Deconstructivist architects rejected all use of computers in design." },
      { letter: "D", text: "Computational design has completely eliminated the influence of deconstructivism." },
      { letter: "E", text: "The techniques are unrelated and developed entirely independently." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'The computational design techniques developed to realize complex deconstructivist geometries paved the way for contemporary parametric architecture.' This indicates that computational techniques were developed to enable deconstructivist designs and subsequently influenced parametric architecture.",
    difficulty: "medium",
    passageId: "rc-exp7-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - SOCIAL CAPITAL AND COMMUNITY DEVELOPMENT
// ============================================

const passage4 = `The concept of social capital—loosely defined as the networks, norms, and trust that facilitate cooperation within or between groups—has become a central focus of community development research and policy since its popularization by Robert Putnam in the 1990s. Putnam's influential work, particularly his book "Bowling Alone," argued that declining civic participation and weakening social ties in the United States were producing a crisis of social capital with wide-ranging negative consequences for democratic governance, economic development, and public health.

Scholars have distinguished between different types of social capital with distinct implications for community development. Bonding social capital refers to ties within relatively homogeneous groups—connections among people who share similar backgrounds, identities, or social positions. This type of capital tends to reinforce group identity and provide mutual support within communities. Bridging social capital, by contrast, involves connections across different groups, linking people who differ in relevant characteristics. While bonding capital helps groups maintain cohesion, bridging capital facilitates access to external resources, new information, and broader opportunities.

The distinction between bonding and bridging capital has important implications for understanding how social networks affect community outcomes. Communities rich in bonding capital but poor in bridging connections may become insular, limiting members' opportunities and reinforcing existing inequalities. Conversely, communities with extensive bridging ties but weak internal bonds may lack the solidarity necessary for collective action. Successful community development, according to this framework, requires cultivating both types of capital in appropriate balance.

Empirical research has documented numerous correlations between social capital indicators and positive outcomes at both individual and community levels. Areas with higher levels of social trust tend to have lower crime rates, better health outcomes, higher economic growth, and more effective governance. However, the causal mechanisms underlying these correlations remain contested. Critics argue that social capital may be as much an effect as a cause of community well-being—that prosperous, safe communities generate trust rather than trust generating prosperity.

Furthermore, some scholars have questioned whether social capital always promotes desirable outcomes. Networks of trust and reciprocity can facilitate criminal enterprises as effectively as civic associations. Strong in-group bonds may foster hostility toward outsiders, contributing to discrimination and social exclusion. The norms enforced within tight-knit communities may suppress individual freedom and dissent. These observations suggest that social capital is better understood as a resource that can serve various purposes—not all of them positive—rather than an inherently beneficial social good. Effective community development policy must therefore attend not only to the quantity of social connections but also to their structure and the purposes they serve.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp7-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that social capital is inherently harmful to community development" },
      { letter: "B", text: "provide a comprehensive overview of social capital research, including typologies, empirical findings, and critical perspectives" },
      { letter: "C", text: "defend Robert Putnam's thesis that declining civic participation has caused a national crisis" },
      { letter: "D", text: "explain why bonding social capital is more important than bridging social capital" },
      { letter: "E", text: "propose specific policy solutions for increasing social trust in communities" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces social capital, describes the bonding/bridging distinction, summarizes empirical findings, and presents critical perspectives questioning both causation and the assumption that social capital is always beneficial. Answer B captures this comprehensive overview.",
    difficulty: "medium",
    passageId: "rc-exp7-p4",
  },
  {
    id: "rc-exp7-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, bridging social capital is characterized by",
    answerChoices: [
      { letter: "A", text: "connections among people who share similar backgrounds" },
      { letter: "B", text: "ties that reinforce group identity within homogeneous communities" },
      { letter: "C", text: "connections across different groups, linking people who differ in relevant characteristics" },
      { letter: "D", text: "networks that exclusively benefit criminal enterprises" },
      { letter: "E", text: "norms that suppress individual freedom and dissent" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly defines bridging social capital as involving 'connections across different groups, linking people who differ in relevant characteristics.'",
    difficulty: "easy",
    passageId: "rc-exp7-p4",
  },
  {
    id: "rc-exp7-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following scenarios would most likely concern scholars who emphasize the importance of balance between bonding and bridging capital?",
    answerChoices: [
      { letter: "A", text: "A community where residents have both strong neighborhood ties and connections to diverse professional networks" },
      { letter: "B", text: "An immigrant enclave with strong mutual support networks but limited connections to institutions and opportunities in the broader society" },
      { letter: "C", text: "A city with high voter turnout and numerous civic associations" },
      { letter: "D", text: "A region experiencing rapid economic growth and increasing property values" },
      { letter: "E", text: "A neighborhood with low crime rates and excellent public health outcomes" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Communities rich in bonding capital but poor in bridging connections may become insular, limiting members' opportunities and reinforcing existing inequalities.' An immigrant enclave with strong internal ties but limited external connections exemplifies this concern.",
    difficulty: "medium",
    passageId: "rc-exp7-p4",
  },
  {
    id: "rc-exp7-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions that 'networks of trust and reciprocity can facilitate criminal enterprises' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all social networks should be dismantled" },
      { letter: "B", text: "suggest that law enforcement should focus on communities with high social capital" },
      { letter: "C", text: "support the claim that social capital is not inherently beneficial and can serve various purposes" },
      { letter: "D", text: "explain why Robert Putnam's research has been discredited" },
      { letter: "E", text: "contrast the United States with other countries where crime is lower" },
    ],
    correctAnswer: "C",
    explanation: "This example appears in the final paragraph, which questions 'whether social capital always promotes desirable outcomes.' The criminal enterprise example supports the conclusion that 'social capital is better understood as a resource that can serve various purposes—not all of them positive.'",
    difficulty: "medium",
    passageId: "rc-exp7-p4",
  },
  {
    id: "rc-exp7-023",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the position of critics who argue that social capital may be an effect rather than a cause of community well-being?",
    answerChoices: [
      { letter: "A", text: "Communities that initially had low trust levels but implemented programs to increase social connections subsequently experienced improvements in economic and health outcomes." },
      { letter: "B", text: "Wealthy communities tend to have more resources for civic associations and community events." },
      { letter: "C", text: "Areas with low crime rates tend to have more stable residential populations." },
      { letter: "D", text: "Survey methodologies for measuring social trust have significant limitations." },
      { letter: "E", text: "Some communities with high social capital have experienced economic decline." },
    ],
    correctAnswer: "A",
    explanation: "Critics argue that 'prosperous, safe communities generate trust rather than trust generating prosperity.' Evidence that increasing social capital first led to subsequent improvements would support the opposite causal direction—that social capital causes well-being—thereby weakening the critics' position.",
    difficulty: "hard",
    passageId: "rc-exp7-p4",
  },
  {
    id: "rc-exp7-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's perspective on social capital as a tool for community development can best be described as",
    answerChoices: [
      { letter: "A", text: "wholly skeptical of its value for policy purposes" },
      { letter: "B", text: "uncritically enthusiastic about its potential benefits" },
      { letter: "C", text: "nuanced, recognizing both potential benefits and limitations that require careful consideration in policy design" },
      { letter: "D", text: "primarily concerned with methodological issues in measuring social trust" },
      { letter: "E", text: "focused exclusively on the distinction between bonding and bridging capital" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the potential benefits of social capital (correlations with positive outcomes) while also presenting critiques (causation questions, potential for negative uses). The conclusion that 'Effective community development policy must therefore attend not only to the quantity of social connections but also to their structure and the purposes they serve' suggests a nuanced view that recognizes both value and limitations.",
    difficulty: "medium",
    passageId: "rc-exp7-p4",
  },
];

// Export all RC questions from Set 7
export const rcQuestionsExpSet7: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet7 = {
  passage1: { id: "rc-exp7-p1", content: passage1, topic: "law", title: "Privacy Law and the Fourth Amendment in the Digital Age" },
  passage2: { id: "rc-exp7-p2", content: passage2, topic: "natural-sciences", title: "Epigenetics and Gene Expression" },
  passage3: { id: "rc-exp7-p3", content: passage3, topic: "humanities", title: "Postmodern Architecture and Deconstructivism" },
  passage4: { id: "rc-exp7-p4", content: passage4, topic: "social-sciences", title: "Social Capital and Community Development" },
};
