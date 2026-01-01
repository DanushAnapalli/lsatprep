// Reading Comprehension Expansion Set 29
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - JURY SELECTION AND FAIR TRIAL RIGHTS
// ============================================

const passage1 = `The constitutional guarantee of an impartial jury, enshrined in the Sixth Amendment, intersects with the Equal Protection Clause in complex ways during the jury selection process. Attorneys on both sides exercise peremptory challenges to remove prospective jurors without stating a reason, a practice rooted in English common law. Yet this discretion has historically been exploited to exclude jurors based on race, gender, and other protected characteristics, undermining both the defendant's right to a fair trial and the excluded juror's right to participate in civic life.

The Supreme Court's landmark decision in Batson v. Kentucky (1986) established a three-step framework to address discriminatory peremptory challenges. First, the party challenging the strike must make a prima facie showing that the opposing party exercised a challenge on discriminatory grounds. Second, the striking party must articulate a race-neutral explanation for the challenge. Third, the trial court must determine whether the challenger has proven purposeful discrimination. This framework extended to gender-based strikes in J.E.B. v. Alabama (1994), reflecting the Court's recognition that stereotyping any group corrodes the integrity of the judicial process.

Despite Batson's doctrinal significance, empirical studies reveal persistent problems in its application. Research examining thousands of jury selections has documented that prosecutors continue to strike Black jurors at significantly higher rates than white jurors, even after controlling for case-relevant characteristics. The second step of the Batson framework proves particularly problematic: attorneys can proffer virtually any facially neutral explanation—demeanor, employment status, neighborhood of residence—that courts routinely accept without probing whether such rationales are pretextual. Defense attorneys, lacking time and resources for extensive investigation, often fail to challenge strikes that exhibit discriminatory patterns.

Some jurisdictions have experimented with reforms to strengthen Batson's protections. Washington State's Supreme Court adopted a rule in 2018 requiring courts to deny peremptory challenges when an objective observer could view race or ethnicity as a factor, eliminating the requirement to prove discriminatory intent. California's legislature passed similar legislation in 2020, also prohibiting strikes based on socioeconomic proxies that disproportionately affect protected groups. These reforms shift the inquiry from subjective intent to objective impact, potentially making discriminatory strikes easier to identify and prevent.

Critics of these reforms argue that they unduly restrict attorneys' traditional prerogatives and may complicate jury selection without meaningfully reducing discrimination. Proponents counter that the reforms recognize what decades of experience have demonstrated: intent-based frameworks inadequately protect against discrimination that operates through implicit bias and coded justifications. The tension between prosecutorial discretion and equal protection principles remains unresolved, as courts and legislatures continue to grapple with how to constitute juries that reflect both impartiality and the community from which they are drawn.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp29-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Batson framework has completely eliminated discriminatory jury selection practices in American courts." },
      { letter: "B", text: "Peremptory challenges should be abolished entirely because they inevitably lead to discrimination." },
      { letter: "C", text: "Despite constitutional protections and judicial frameworks addressing discriminatory jury selection, significant problems persist, prompting reform efforts that remain contested." },
      { letter: "D", text: "Washington State and California have developed the only effective approaches to preventing discriminatory jury selection." },
      { letter: "E", text: "Defense attorneys bear primary responsibility for the persistence of discriminatory jury selection practices." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the constitutional framework, the Batson decision and its limitations, empirical evidence of ongoing discrimination, reform efforts, and continuing debates. Answer C captures this comprehensive treatment of the problem's persistence despite attempted solutions and the ongoing controversy over reforms.",
    wrongAnswerExplanations: {
      "A": "This contradicts the passage, which documents persistent problems in Batson's application.",
      "B": "The passage does not advocate for abolishing peremptory challenges, only discusses reforms to constrain them.",
      "D": "While these states are mentioned, the passage does not claim their approaches are the only effective ones.",
      "E": "The passage notes defense attorney limitations but does not assign them primary responsibility."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p1",
  },
  {
    id: "rc-exp29-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the second step of the Batson framework requires",
    answerChoices: [
      { letter: "A", text: "the trial court to determine whether purposeful discrimination occurred" },
      { letter: "B", text: "the challenging party to prove discriminatory intent beyond a reasonable doubt" },
      { letter: "C", text: "the striking party to articulate a race-neutral explanation for the challenge" },
      { letter: "D", text: "an objective observer to evaluate whether race was a factor in the strike" },
      { letter: "E", text: "the prospective juror to testify about their qualifications to serve" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that in the second step, 'the striking party must articulate a race-neutral explanation for the challenge.' This is directly stated in the description of the Batson framework.",
    wrongAnswerExplanations: {
      "A": "This describes the third step, not the second step of the Batson framework.",
      "B": "The passage does not mention this standard of proof as part of any Batson step.",
      "D": "This describes Washington State's reform approach, not the original Batson framework.",
      "E": "Prospective juror testimony is not mentioned as part of the Batson framework."
    },
    difficulty: "easy",
    passageId: "rc-exp29-p1",
  },
  {
    id: "rc-exp29-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage most strongly suggests that the reforms adopted in Washington State and California differ from the Batson framework primarily in that the reforms",
    answerChoices: [
      { letter: "A", text: "eliminate all peremptory challenges from jury selection" },
      { letter: "B", text: "require criminal penalties for attorneys who make discriminatory strikes" },
      { letter: "C", text: "focus on the objective appearance or impact of strikes rather than subjective discriminatory intent" },
      { letter: "D", text: "apply only to civil cases rather than criminal prosecutions" },
      { letter: "E", text: "grant trial judges absolute discretion over all jury selection decisions" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that Washington's rule applies when 'an objective observer could view race or ethnicity as a factor' and that these reforms 'shift the inquiry from subjective intent to objective impact.' This represents the key difference from Batson's intent-focused framework.",
    wrongAnswerExplanations: {
      "A": "The reforms constrain but do not eliminate peremptory challenges.",
      "B": "Criminal penalties are not mentioned in the passage.",
      "D": "The passage does not limit the reforms to civil cases.",
      "E": "The reforms provide standards for judges rather than absolute discretion."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p1",
  },
  {
    id: "rc-exp29-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions demeanor, employment status, and neighborhood of residence primarily in order to",
    answerChoices: [
      { letter: "A", text: "identify legitimate criteria that attorneys should consider when selecting jurors" },
      { letter: "B", text: "provide examples of facially neutral explanations that may serve as pretexts for discrimination" },
      { letter: "C", text: "describe the types of information that prospective jurors must disclose during voir dire" },
      { letter: "D", text: "explain why the Batson framework has been successful in preventing discrimination" },
      { letter: "E", text: "illustrate the complexity of determining whether a prospective juror can be impartial" },
    ],
    correctAnswer: "B",
    explanation: "These factors are mentioned in the context of explaining why Batson's second step is problematic: 'attorneys can proffer virtually any facially neutral explanation—demeanor, employment status, neighborhood of residence—that courts routinely accept without probing whether such rationales are pretextual.'",
    wrongAnswerExplanations: {
      "A": "The passage presents these as potentially pretextual, not as legitimate criteria.",
      "C": "The passage does not discuss disclosure requirements during voir dire.",
      "D": "The context is the framework's failures, not its successes.",
      "E": "The examples relate to pretextual justifications, not juror impartiality assessments."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p1",
  },
  {
    id: "rc-exp29-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the Batson framework can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified endorsement of its effectiveness in eliminating discrimination" },
      { letter: "B", text: "complete rejection of its constitutional foundations" },
      { letter: "C", text: "recognition of its doctrinal importance while acknowledging significant practical limitations" },
      { letter: "D", text: "indifference to its impact on jury selection practices" },
      { letter: "E", text: "enthusiastic support for expanding its application to additional protected characteristics" },
    ],
    correctAnswer: "C",
    explanation: "The author describes Batson as having 'doctrinal significance' but presents empirical evidence that 'persistent problems' exist in its application, noting that its second step 'proves particularly problematic.' This balanced assessment acknowledges both importance and limitations.",
    wrongAnswerExplanations: {
      "A": "The author documents Batson's failures and limitations extensively.",
      "B": "The author does not reject Batson's constitutional basis, only critiques its practical application.",
      "D": "The passage demonstrates significant concern about jury selection practices.",
      "E": "The passage mentions J.E.B. extending to gender but does not advocate for further expansion."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p1",
  },
  {
    id: "rc-exp29-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the proponents' argument for impact-based reforms mentioned in the final paragraph?",
    answerChoices: [
      { letter: "A", text: "Studies show that attorneys are generally unaware of their own implicit biases when making jury selection decisions." },
      { letter: "B", text: "Most trial judges have extensive training in identifying discriminatory intent." },
      { letter: "C", text: "The number of peremptory challenges available to attorneys has decreased in recent decades." },
      { letter: "D", text: "Attorneys who make discriminatory strikes rarely face professional discipline." },
      { letter: "E", text: "Prospective jurors generally prefer traditional jury selection procedures." },
    ],
    correctAnswer: "A",
    explanation: "Proponents argue that 'intent-based frameworks inadequately protect against discrimination that operates through implicit bias.' If attorneys are unaware of their own implicit biases, this would explain why intent-based frameworks fail and support the shift to impact-based approaches.",
    wrongAnswerExplanations: {
      "B": "This would suggest intent-based approaches could work, weakening the case for reform.",
      "C": "The number of challenges is irrelevant to whether impact-based reforms are superior.",
      "D": "While this suggests a problem, it does not specifically support impact-based over intent-based approaches.",
      "E": "Juror preferences do not address the effectiveness of different frameworks."
    },
    difficulty: "hard",
    passageId: "rc-exp29-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - GENETICS OF AGING
// ============================================

const passage2 = `The biology of aging has emerged as one of the most dynamic fields in contemporary genetics, driven by discoveries that lifespan is not simply a matter of accumulated wear and tear but is actively regulated by specific genetic pathways. Research in model organisms has identified conserved mechanisms that control the rate of aging across species from yeast to mammals, suggesting that interventions targeting these pathways might extend healthy human lifespan. This prospect has attracted both scientific interest and substantial commercial investment, though translating findings from laboratory organisms to human therapies presents formidable challenges.

The insulin/IGF-1 signaling pathway represents one of the best-characterized genetic determinants of longevity. Mutations that reduce signaling through this pathway dramatically extend lifespan in nematode worms, fruit flies, and mice. In C. elegans, mutations in the daf-2 gene, which encodes an insulin receptor homolog, can double the organism's lifespan while maintaining youthful activity levels. The downstream transcription factor DAF-16/FOXO appears to orchestrate a genetic program promoting stress resistance, metabolic efficiency, and cellular maintenance. Human centenarians show enrichment for certain FOXO variants, providing preliminary evidence that these pathways influence human aging as well.

Cellular senescence represents another key mechanism linking genetics to aging. Senescent cells have permanently exited the cell cycle but remain metabolically active, secreting inflammatory factors, proteases, and other molecules collectively termed the senescence-associated secretory phenotype (SASP). These secretions can damage neighboring tissues and promote chronic inflammation. Studies in mice have demonstrated that selectively eliminating senescent cells extends healthspan and lifespan, leading to the development of "senolytic" drugs designed to clear these cells. Early human trials are investigating whether senolytics can treat age-related diseases, though long-term safety and efficacy remain uncertain.

Telomere biology offers yet another window into the genetics of aging. Telomeres, the protective caps at chromosome ends, shorten with each cell division. When telomeres become critically short, cells enter senescence or undergo apoptosis. The enzyme telomerase can maintain telomere length, and some studies have shown that activating telomerase extends lifespan in mice. However, the relationship between telomeres and human aging is complex: while short telomeres correlate with age-related diseases, abnormally long telomeres or overactive telomerase may promote cancer by enabling unlimited cell division. This trade-off illustrates the evolutionary constraints that shape aging mechanisms.

The complexity of aging genetics poses significant challenges for therapeutic development. Aging involves thousands of genes operating in interconnected networks, and interventions that benefit one tissue may harm another. Caloric restriction, which extends lifespan in many organisms, works partly through the same pathways targeted by potential anti-aging drugs, but achieving comparable effects pharmacologically without adverse side effects has proven difficult. Moreover, the long human lifespan makes definitive clinical trials impractical, forcing researchers to rely on surrogate endpoints and biomarkers whose relationship to actual longevity remains imperfectly understood.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp29-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Genetic research has identified several pathways that regulate aging, offering therapeutic possibilities while also revealing significant obstacles to developing effective anti-aging interventions." },
      { letter: "B", text: "Telomerase activation is the most promising approach to extending human lifespan." },
      { letter: "C", text: "Senescent cells are entirely harmful and should be eliminated from the body to extend lifespan." },
      { letter: "D", text: "The insulin/IGF-1 signaling pathway is the only genetic mechanism that influences the aging process." },
      { letter: "E", text: "Caloric restriction is the only proven method for extending human lifespan." },
    ],
    correctAnswer: "A",
    explanation: "The passage discusses multiple genetic pathways (insulin/IGF-1, cellular senescence, telomeres), the therapeutic potential of targeting these pathways, and the substantial challenges involved in translation to human therapies. Answer A captures this balanced presentation of both promise and difficulty.",
    wrongAnswerExplanations: {
      "B": "The passage presents telomerase as one approach with significant trade-offs, not the most promising.",
      "C": "While senescent cell elimination shows promise, the passage notes uncertainty about safety and efficacy.",
      "D": "The passage discusses multiple pathways, not just insulin/IGF-1 signaling.",
      "E": "The passage mentions caloric restriction but does not claim it is the only proven method."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p2",
  },
  {
    id: "rc-exp29-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, mutations in the daf-2 gene in C. elegans",
    answerChoices: [
      { letter: "A", text: "increase signaling through the insulin/IGF-1 pathway" },
      { letter: "B", text: "cause rapid aging and shortened lifespan" },
      { letter: "C", text: "can double the organism's lifespan while maintaining youthful activity levels" },
      { letter: "D", text: "lead to the accumulation of senescent cells" },
      { letter: "E", text: "prevent telomerase from maintaining telomere length" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'In C. elegans, mutations in the daf-2 gene, which encodes an insulin receptor homolog, can double the organism's lifespan while maintaining youthful activity levels.'",
    wrongAnswerExplanations: {
      "A": "The passage indicates these mutations reduce, not increase, signaling through the pathway.",
      "B": "The mutations extend lifespan, not shorten it.",
      "D": "The passage does not link daf-2 mutations to senescent cell accumulation.",
      "E": "The passage does not connect daf-2 to telomerase function."
    },
    difficulty: "easy",
    passageId: "rc-exp29-p2",
  },
  {
    id: "rc-exp29-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that the relationship between telomere length and human health is",
    answerChoices: [
      { letter: "A", text: "straightforward, with longer telomeres always indicating better health" },
      { letter: "B", text: "irrelevant, since telomeres have no effect on human aging" },
      { letter: "C", text: "complex, involving trade-offs between preventing senescence and enabling cancer" },
      { letter: "D", text: "fully understood and no longer a subject of scientific inquiry" },
      { letter: "E", text: "identical across all human tissues and cell types" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'while short telomeres correlate with age-related diseases, abnormally long telomeres or overactive telomerase may promote cancer by enabling unlimited cell division. This trade-off illustrates the evolutionary constraints that shape aging mechanisms.'",
    wrongAnswerExplanations: {
      "A": "The passage explicitly notes that abnormally long telomeres may promote cancer.",
      "B": "The passage discusses telomeres as one window into the genetics of aging.",
      "D": "The passage describes the relationship as 'complex' and notes ongoing research.",
      "E": "The passage does not claim uniformity across tissues."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p2",
  },
  {
    id: "rc-exp29-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the senescence-associated secretory phenotype (SASP) primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that cellular senescence has no effect on aging" },
      { letter: "B", text: "explain how senescent cells cause damage that contributes to aging" },
      { letter: "C", text: "demonstrate that senolytics have already been proven effective in humans" },
      { letter: "D", text: "contrast the mechanisms of senescence with those of telomere shortening" },
      { letter: "E", text: "show that the insulin/IGF-1 pathway directly controls SASP secretion" },
    ],
    correctAnswer: "B",
    explanation: "The SASP is introduced to explain how senescent cells harm the body: 'These secretions can damage neighboring tissues and promote chronic inflammation.' This explains the rationale for developing senolytic drugs to clear these cells.",
    wrongAnswerExplanations: {
      "A": "The passage argues the opposite—that senescent cells contribute to aging through SASP.",
      "C": "The passage notes that human trials are ongoing and 'safety and efficacy remain uncertain.'",
      "D": "The passage does not directly contrast SASP with telomere mechanisms.",
      "E": "The passage does not claim a direct connection between insulin/IGF-1 and SASP."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p2",
  },
  {
    id: "rc-exp29-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the prospect of developing effective anti-aging therapies can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of any therapeutic potential" },
      { letter: "B", text: "confident that such therapies will soon be available" },
      { letter: "C", text: "cautiously interested, acknowledging both promise and substantial obstacles" },
      { letter: "D", text: "indifferent to the practical applications of aging research" },
      { letter: "E", text: "opposed to any interventions that might extend human lifespan" },
    ],
    correctAnswer: "C",
    explanation: "The author presents genuine scientific advances while consistently noting challenges: 'formidable challenges,' 'safety and efficacy remain uncertain,' 'trade-off,' and the final paragraph's extensive discussion of therapeutic development obstacles. This reflects cautious interest rather than either optimism or pessimism.",
    wrongAnswerExplanations: {
      "A": "The author discusses real therapeutic possibilities and ongoing trials.",
      "B": "The author repeatedly emphasizes obstacles and uncertainties.",
      "D": "The author dedicates significant attention to therapeutic applications.",
      "E": "The author does not express opposition to lifespan extension."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p2",
  },
  {
    id: "rc-exp29-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following would present the most significant challenge for researchers attempting to develop a drug that activates telomerase to extend human lifespan?",
    answerChoices: [
      { letter: "A", text: "The fact that telomerase is not found in human cells" },
      { letter: "B", text: "The risk that increased telomerase activity might promote cancer development" },
      { letter: "C", text: "The inability to measure telomere length in living humans" },
      { letter: "D", text: "The lack of any evidence that telomere length affects cellular function" },
      { letter: "E", text: "The requirement that such drugs work only in nematode worms" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'abnormally long telomeres or overactive telomerase may promote cancer by enabling unlimited cell division.' This trade-off represents the most significant challenge mentioned for telomerase-based therapies.",
    wrongAnswerExplanations: {
      "A": "The passage discusses telomerase in human cells and human centenarians.",
      "C": "The passage does not claim telomere length cannot be measured in humans.",
      "D": "The passage indicates telomere shortening leads to senescence or apoptosis.",
      "E": "The passage discusses telomerase effects in mice and humans, not just nematodes."
    },
    difficulty: "hard",
    passageId: "rc-exp29-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - VICTORIAN LITERATURE AND SOCIAL CRITICISM
// ============================================

const passage3 = `Victorian literature emerged as a powerful medium for social criticism during an era of unprecedented industrial transformation. As Britain's population shifted from rural areas to teeming urban centers, novelists documented the social dislocations that accompanied economic change: child labor, grinding poverty, dangerous working conditions, and the moral degradation that reformers associated with crowded slums. Charles Dickens, Elizabeth Gaskell, and other writers crafted narratives that brought these conditions to middle-class readers who might otherwise remain insulated from the suffering of the industrial poor. Their fiction functioned simultaneously as entertainment, moral education, and implicit political advocacy.

Dickens perfected a technique of what might be called strategic sentimentality, creating child characters whose suffering and deaths became focal points for readers' emotional investment. The death of Little Nell in "The Old Curiosity Shop" prompted extraordinary public grief, with crowds reportedly gathering at New York docks awaiting ships bearing the concluding installment. Critics then and now have debated whether such emotional manipulation represents effective social criticism or merely provides cathartic release that substitutes for genuine reform. Oscar Wilde famously remarked that one would need a heart of stone to read the death of Little Nell without laughing, suggesting that Dickens's pathos had curdled into bathos for sophisticated readers.

Elizabeth Gaskell's "North and South" and "Mary Barton" approached industrial conditions with greater sociological precision. Gaskell spent years in Manchester, the heart of England's textile industry, and her novels reflected intimate knowledge of working-class life, including the technical details of factory production and the dynamics of labor organizing. Her fiction gave voice to workers' perspectives in ways that Dickens, who observed poverty primarily as an outsider, sometimes failed to achieve. Yet Gaskell's novels typically resolved industrial conflicts through personal reconciliation and class harmony, suggesting that understanding between enlightened manufacturers and reasonable workers could address systemic problems through individual moral transformation.

The social problem novel faced inherent tensions between artistic and reformist imperatives. Compelling narratives required individualized characters and resolved plotlines, but social problems were structural and ongoing. When novelists created sympathetic factory owners or benevolent resolution to labor disputes, they risked suggesting that existing institutions could accommodate necessary reforms, thereby defusing more radical critiques. Conversely, unrelenting depictions of misery without redemptive possibility might alienate readers and undermine the novels' commercial viability. Victorian novelists navigated these tensions with varying degrees of success, and critical assessments of their work continue to debate whether their fiction advanced or impeded genuine social change.

The legacy of Victorian social criticism extends beyond its immediate context. Contemporary debates about the relationship between literature and politics echo Victorian discussions of whether fiction can or should advocate for specific reforms. The Victorian novel's capacity to generate empathy across class lines anticipated later arguments that narrative art can foster the moral imagination necessary for democratic citizenship. Yet skeptics continue to question whether emotional responses to fictional suffering translate into sustained political commitment or merely provide the comforting illusion of engagement with problems that demand more than sympathetic feeling.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp29-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Charles Dickens was the only Victorian novelist who effectively criticized industrial conditions." },
      { letter: "B", text: "Victorian social criticism novels used fiction to address industrial suffering, though they faced inherent tensions between artistic and reformist goals that continue to generate critical debate." },
      { letter: "C", text: "Elizabeth Gaskell's novels were superior to those of Dickens in every respect." },
      { letter: "D", text: "The Victorian social problem novel was a complete failure that had no lasting influence on literature or politics." },
      { letter: "E", text: "Oscar Wilde's criticism definitively proved that Dickens's sentimental techniques were ineffective." },
    ],
    correctAnswer: "B",
    explanation: "The passage examines how Victorian novelists addressed social problems through fiction, analyzes different approaches (Dickens's sentimentality, Gaskell's sociological precision), discusses the inherent tensions in the social problem novel, and notes ongoing debates about effectiveness. Answer B captures this comprehensive treatment.",
    wrongAnswerExplanations: {
      "A": "The passage discusses multiple novelists and does not claim Dickens was the only effective one.",
      "C": "The passage presents both Gaskell's strengths and her limitations (resolving conflicts through class harmony).",
      "D": "The passage discusses the genre's legacy and continued relevance.",
      "E": "Wilde's remark is presented as one perspective, not a definitive assessment."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p3",
  },
  {
    id: "rc-exp29-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Elizabeth Gaskell's novels differed from Dickens's work in that Gaskell's fiction",
    answerChoices: [
      { letter: "A", text: "avoided any depiction of industrial conditions" },
      { letter: "B", text: "reflected more intimate knowledge of working-class life and workers' perspectives" },
      { letter: "C", text: "rejected all forms of emotional appeal to readers" },
      { letter: "D", text: "advocated for revolutionary overthrow of industrial capitalism" },
      { letter: "E", text: "focused exclusively on the lives of factory owners" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Gaskell's novels 'reflected intimate knowledge of working-class life' and 'gave voice to workers' perspectives in ways that Dickens, who observed poverty primarily as an outsider, sometimes failed to achieve.'",
    wrongAnswerExplanations: {
      "A": "Gaskell's novels directly addressed industrial conditions in Manchester.",
      "C": "The passage does not suggest Gaskell rejected emotional appeals.",
      "D": "The passage notes Gaskell's novels resolved conflicts through 'class harmony.'",
      "E": "The passage emphasizes Gaskell's focus on working-class life."
    },
    difficulty: "easy",
    passageId: "rc-exp29-p3",
  },
  {
    id: "rc-exp29-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that Oscar Wilde's comment about Little Nell's death was intended to",
    answerChoices: [
      { letter: "A", text: "praise Dickens's ability to create genuinely moving scenes" },
      { letter: "B", text: "indicate that Dickens's emotional techniques had become excessive or artificial to sophisticated readers" },
      { letter: "C", text: "encourage more readers to appreciate Victorian literature" },
      { letter: "D", text: "defend Dickens against unfair criticism from other writers" },
      { letter: "E", text: "argue that all Victorian novels were equally sentimental" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Wilde's remark as 'suggesting that Dickens's pathos had curdled into bathos for sophisticated readers.' Bathos refers to an unintentional descent from the elevated to the ridiculous, indicating that Wilde found the emotional manipulation excessive.",
    wrongAnswerExplanations: {
      "A": "Wilde's comment is presented as critical, suggesting the scene provokes laughter rather than tears.",
      "C": "The remark is a critique, not an encouragement to appreciate the literature.",
      "D": "Wilde is criticizing, not defending, Dickens.",
      "E": "Wilde's comment addresses Dickens specifically, not all Victorian novels."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p3",
  },
  {
    id: "rc-exp29-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author discusses the tension between \"compelling narratives\" and \"structural and ongoing\" social problems primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Victorian novelists should have written non-fiction instead of novels" },
      { letter: "B", text: "explain an inherent challenge that social problem novelists faced in using fiction for reform" },
      { letter: "C", text: "praise Victorian novelists for perfectly resolving this tension" },
      { letter: "D", text: "suggest that contemporary novels have entirely overcome this difficulty" },
      { letter: "E", text: "demonstrate that Gaskell was unaware of this problem in her own work" },
    ],
    correctAnswer: "B",
    explanation: "This discussion appears in the paragraph about 'inherent tensions between artistic and reformist imperatives.' The author uses this contrast to explain why social problem novels necessarily made certain compromises—narratives need resolution, but social problems are ongoing.",
    wrongAnswerExplanations: {
      "A": "The passage does not advocate for non-fiction over fiction.",
      "C": "The passage notes Victorian novelists navigated these tensions 'with varying degrees of success.'",
      "D": "The passage does not claim contemporary novels have overcome this challenge.",
      "E": "The passage discusses this as a general challenge for the genre, not Gaskell's unawareness."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p3",
  },
  {
    id: "rc-exp29-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the question of whether Victorian social criticism novels advanced genuine social change can best be described as",
    answerChoices: [
      { letter: "A", text: "certain that the novels were entirely ineffective" },
      { letter: "B", text: "confident that the novels directly caused major reforms" },
      { letter: "C", text: "presenting the issue as genuinely contested, with valid arguments on multiple sides" },
      { letter: "D", text: "dismissive of the question as unimportant" },
      { letter: "E", text: "hostile to any suggestion that literature can influence politics" },
    ],
    correctAnswer: "C",
    explanation: "The author presents multiple perspectives: critics who debate Dickens's effectiveness, the possibility that novels 'advanced or impeded genuine social change,' and the final paragraph's presentation of ongoing debates with 'skeptics' alongside those who see fiction fostering 'moral imagination.' The question is treated as genuinely open.",
    wrongAnswerExplanations: {
      "A": "The author presents arguments for the novels' effectiveness alongside skeptical views.",
      "B": "The author does not claim certainty about direct reform effects.",
      "D": "The author devotes significant attention to this question throughout the passage.",
      "E": "The author presents the case for literature's political influence alongside skepticism."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p3",
  },
  {
    id: "rc-exp29-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A genre is introduced, two exemplary practitioners are examined, inherent tensions in the genre are analyzed, and the genre's legacy is considered." },
      { letter: "B", text: "A thesis is stated, evidence is presented to refute it, and a new thesis is proposed." },
      { letter: "C", text: "Two novelists are compared, one is declared superior, and readers are advised to avoid the inferior writer." },
      { letter: "D", text: "A historical period is described, its literature is dismissed as unimportant, and modern alternatives are recommended." },
      { letter: "E", text: "A problem is identified, a single solution is proposed, and the solution's implementation is described." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces Victorian social criticism novels, examines Dickens and Gaskell as key practitioners, discusses the tensions between artistic and reformist imperatives in the fourth paragraph, and considers the genre's legacy in the final paragraph.",
    wrongAnswerExplanations: {
      "B": "The passage does not present and refute a single thesis.",
      "C": "The passage does not declare one novelist superior or advise readers to avoid anyone.",
      "D": "The passage takes Victorian literature seriously and does not recommend modern alternatives.",
      "E": "The passage does not propose or implement a single solution to a problem."
    },
    difficulty: "hard",
    passageId: "rc-exp29-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - WORKPLACE CULTURE AND PRODUCTIVITY
// ============================================

const passage4 = `The relationship between workplace culture and employee productivity has become a central concern of management science, as organizations increasingly recognize that technical efficiency alone cannot account for variations in performance. Culture, broadly understood as the shared values, norms, and practices that characterize an organization, shapes how employees interpret their work, relate to colleagues, and respond to challenges. Yet measuring culture's effects proves methodologically difficult, and claims about which cultural elements drive productivity often rest on weaker evidence than their proponents acknowledge.

Studies of organizational culture typically distinguish between several dimensions that may influence productivity differently. Power distance refers to the degree of hierarchy and deference to authority within an organization; low power distance cultures encourage employee initiative and information sharing, while high power distance cultures may enable faster decision-making but suppress dissenting voices. Individualism versus collectivism describes whether achievement and reward focus on individual performance or group outcomes. Uncertainty avoidance captures tolerance for ambiguity and experimentation. These dimensions interact in complex ways, and research suggests that optimal cultural configurations depend heavily on industry context, organizational strategy, and the nature of the work being performed.

The technology sector's embrace of distinctive workplace cultures illustrates both the appeal and limitations of culture-based management. Companies like Google famously offered elaborate perks—free gourmet meals, on-site childcare, recreational facilities—alongside flat hierarchies and policies encouraging employees to spend time on self-directed projects. Proponents argued that these practices attracted talented workers, fostered creativity, and generated breakthrough innovations. Critics countered that the perks functioned as golden handcuffs, encouraging overwork by blurring boundaries between professional and personal life, and that claims of flat hierarchy obscured persistent power imbalances. The replication crisis in organizational psychology has cast doubt on some studies purporting to demonstrate productivity benefits from specific cultural interventions.

Recent research has emphasized the importance of psychological safety—the belief that one can speak up, take risks, and make mistakes without punishment—as a cultural factor enabling both productivity and innovation. Google's internal Project Aristotle, which analyzed data from hundreds of teams, concluded that psychological safety was the most important predictor of team effectiveness, more significant than team composition or individual talent. This finding aligns with theoretical frameworks suggesting that knowledge work requires environments where employees feel comfortable sharing nascent ideas and admitting uncertainty. However, creating genuinely psychologically safe environments proves challenging, as surface-level encouragement to speak up may coexist with subtle punishment of those who do.

The challenge of cultural change compounds difficulties in establishing culture-productivity relationships. Organizational cultures are notoriously resistant to top-down transformation, as deeply embedded norms and practices persist despite official policy changes. Leaders who attempt cultural interventions rarely control for confounding variables or measure outcomes rigorously, making it difficult to attribute any performance changes specifically to cultural modifications. The long time horizons over which cultural change operates further complicate evaluation. Nevertheless, the prevalence of cultural dysfunction—toxic leadership, suppressed communication, misaligned incentives—provides ample evidence that culture matters, even if precisely quantifying its productivity effects remains elusive.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp29-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "prove definitively that workplace culture has no effect on productivity" },
      { letter: "B", text: "argue that technology companies have discovered the optimal workplace culture" },
      { letter: "C", text: "examine the relationship between workplace culture and productivity while acknowledging significant methodological challenges in measuring this relationship" },
      { letter: "D", text: "recommend that all organizations adopt Google's cultural practices" },
      { letter: "E", text: "demonstrate that psychological safety is irrelevant to team effectiveness" },
    ],
    correctAnswer: "C",
    explanation: "The passage discusses various cultural dimensions that may influence productivity, examines tech industry examples with their limitations, highlights psychological safety research, and consistently notes the difficulty of measuring culture's effects. Answer C captures this balanced examination of both the relationship and the challenges in studying it.",
    wrongAnswerExplanations: {
      "A": "The passage acknowledges culture matters while noting measurement difficulties, not denying effects entirely.",
      "B": "The passage presents critiques of tech company cultures alongside proponents' claims.",
      "D": "The passage notes limitations of Google's approach, not universal applicability.",
      "E": "The passage presents psychological safety as the 'most important predictor of team effectiveness.'"
    },
    difficulty: "medium",
    passageId: "rc-exp29-p4",
  },
  {
    id: "rc-exp29-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Google's Project Aristotle concluded that",
    answerChoices: [
      { letter: "A", text: "team composition was the most important factor in team effectiveness" },
      { letter: "B", text: "individual talent predicted team success better than any other factor" },
      { letter: "C", text: "psychological safety was the most important predictor of team effectiveness" },
      { letter: "D", text: "elaborate perks like free meals were essential for productivity" },
      { letter: "E", text: "high power distance cultures produced the best team outcomes" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that Project Aristotle 'concluded that psychological safety was the most important predictor of team effectiveness, more significant than team composition or individual talent.'",
    wrongAnswerExplanations: {
      "A": "The passage states psychological safety was more significant than team composition.",
      "B": "The passage states psychological safety was more significant than individual talent.",
      "D": "Perks are discussed separately from Project Aristotle's findings.",
      "E": "The passage does not connect Project Aristotle to power distance findings."
    },
    difficulty: "easy",
    passageId: "rc-exp29-p4",
  },
  {
    id: "rc-exp29-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that critics of technology company workplace cultures would most likely argue that",
    answerChoices: [
      { letter: "A", text: "perks and flat hierarchies genuinely eliminate all workplace power imbalances" },
      { letter: "B", text: "generous benefits may serve to encourage overwork and mask continuing inequalities" },
      { letter: "C", text: "technology companies should eliminate all employee benefits" },
      { letter: "D", text: "traditional hierarchical structures are always more productive than flat organizations" },
      { letter: "E", text: "employees prefer workplaces without recreational facilities" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics 'countered that the perks functioned as golden handcuffs, encouraging overwork by blurring boundaries between professional and personal life, and that claims of flat hierarchy obscured persistent power imbalances.'",
    wrongAnswerExplanations: {
      "A": "This is the proponents' implicit view; critics argue power imbalances persist.",
      "C": "Critics object to how perks function, not to their existence per se.",
      "D": "The passage does not attribute this claim to the critics discussed.",
      "E": "The passage does not suggest employees prefer no recreational facilities."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p4",
  },
  {
    id: "rc-exp29-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the \"replication crisis in organizational psychology\" primarily in order to",
    answerChoices: [
      { letter: "A", text: "praise the rigor of research in organizational psychology" },
      { letter: "B", text: "suggest that some studies claiming productivity benefits from cultural interventions may be unreliable" },
      { letter: "C", text: "argue that all research on workplace culture should be abandoned" },
      { letter: "D", text: "explain why technology companies have perfect workplace cultures" },
      { letter: "E", text: "demonstrate that psychological safety has been definitively proven" },
    ],
    correctAnswer: "B",
    explanation: "The replication crisis is mentioned to note that it 'has cast doubt on some studies purporting to demonstrate productivity benefits from specific cultural interventions.' This serves to qualify claims about culture-productivity relationships.",
    wrongAnswerExplanations: {
      "A": "The replication crisis indicates problems with rigor, not praise for it.",
      "C": "The author continues to discuss research, not advocate abandoning it.",
      "D": "The replication crisis casts doubt on claims, not validates them.",
      "E": "The mention of the crisis suggests caution, not definitive proof."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p4",
  },
  {
    id: "rc-exp29-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which one of the following would most likely be true of an organization with low power distance?",
    answerChoices: [
      { letter: "A", text: "Employees would be discouraged from sharing information with colleagues." },
      { letter: "B", text: "Decision-making would be concentrated exclusively at the top of the hierarchy." },
      { letter: "C", text: "Employees would be more likely to take initiative and share information." },
      { letter: "D", text: "Dissenting voices would be systematically suppressed." },
      { letter: "E", text: "The organization would necessarily be more productive than high power distance organizations." },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'low power distance cultures encourage employee initiative and information sharing.' This directly supports answer C.",
    wrongAnswerExplanations: {
      "A": "The passage associates information sharing with low, not high, power distance.",
      "B": "This describes high power distance with faster decision-making.",
      "C": "This is the correct answer based on the passage's description.",
      "D": "This is associated with high power distance cultures in the passage.",
      "E": "The passage notes optimal configurations depend on context."
    },
    difficulty: "medium",
    passageId: "rc-exp29-p4",
  },
  {
    id: "rc-exp29-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the passage's suggestion that cultural dysfunction provides evidence that culture matters?",
    answerChoices: [
      { letter: "A", text: "Organizations with toxic leadership tend to have lower employee retention rates." },
      { letter: "B", text: "Poor performance in organizations with cultural problems can be entirely explained by factors unrelated to culture, such as market conditions or resource constraints." },
      { letter: "C", text: "Employees in psychologically safe environments report higher job satisfaction." },
      { letter: "D", text: "Cultural change typically requires many years to implement successfully." },
      { letter: "E", text: "Some organizations with strong cultures also have high productivity." },
    ],
    correctAnswer: "B",
    explanation: "The passage argues that 'the prevalence of cultural dysfunction—toxic leadership, suppressed communication, misaligned incentives—provides ample evidence that culture matters.' If poor performance in these organizations is entirely explained by non-cultural factors, this would undermine the inference that culture causes the problems.",
    wrongAnswerExplanations: {
      "A": "This would support the idea that culture (toxic leadership) matters for outcomes.",
      "C": "This would support the importance of psychological safety, a cultural factor.",
      "D": "This addresses the difficulty of change but not whether culture affects outcomes.",
      "E": "This would support, not weaken, the claim that culture matters."
    },
    difficulty: "hard",
    passageId: "rc-exp29-p4",
  },
];

// Export all RC questions from Set 29
export const rcQuestionsExpSet29: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet29 = {
  passage1: { id: "rc-exp29-p1", content: passage1, topic: "law", title: "Jury Selection and Fair Trial Rights" },
  passage2: { id: "rc-exp29-p2", content: passage2, topic: "natural-sciences", title: "Genetics of Aging" },
  passage3: { id: "rc-exp29-p3", content: passage3, topic: "humanities", title: "Victorian Literature and Social Criticism" },
  passage4: { id: "rc-exp29-p4", content: passage4, topic: "social-sciences", title: "Workplace Culture and Productivity" },
};
