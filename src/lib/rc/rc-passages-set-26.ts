// Reading Comprehension Expansion Set 26
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - DOUBLE JEOPARDY AND CRIMINAL PROCEDURE
// ============================================

const passage1 = `The Double Jeopardy Clause of the Fifth Amendment provides that no person shall "be subject for the same offence to be twice put in jeopardy of life or limb." This seemingly straightforward prohibition against multiple prosecutions for the same crime has generated centuries of interpretive controversy, particularly as courts have struggled to define what constitutes the "same offence" and when jeopardy "attaches" to bar subsequent proceedings.

The Supreme Court's interpretation of the clause has established several core protections. First, the clause prevents a second prosecution for the same offense after acquittal. Even if the acquittal was based on insufficient evidence or erroneous legal rulings, the prosecution cannot appeal or retry the defendant. Second, it bars a second prosecution for the same offense after conviction, protecting defendants from the harassment of facing repeated trials even when the initial conviction stands. Third, it prohibits multiple punishments for the same offense, though this protection has proven more complex to apply in practice.

The "same offense" question has been particularly vexing. In Blockburger v. United States (1932), the Court established a test focused on statutory elements: two offenses are not the same if each requires proof of an element that the other does not. Under this approach, a defendant can be prosecuted for both robbery and assault arising from the same incident because each crime contains a distinct element—taking property for robbery, causing physical harm for assault. Critics argue this formalistic approach permits prosecutors to circumvent double jeopardy protection by creative charging decisions, effectively trying defendants multiple times for what is substantively a single criminal transaction.

The "dual sovereignty" doctrine further complicates double jeopardy analysis. Under this principle, successive prosecutions by different sovereigns—such as the federal government and a state, or two different states—do not violate the clause because each sovereign enforces its own laws and vindicates its own interests. The Supreme Court reaffirmed this doctrine in Gamble v. United States (2019), rejecting arguments that it had become an anachronism. Critics contend that dual sovereignty permits exactly the kind of harassment and overreaching that double jeopardy was designed to prevent, noting that defendants may face theoretically unlimited prosecutions if multiple jurisdictions claim authority over the same conduct.

Scholars have proposed various reforms to address perceived shortcomings in current doctrine. Some advocate replacing the Blockburger test with a "same transaction" approach that would bar multiple prosecutions arising from a single criminal episode. Others support legislative limits on successive prosecutions by different sovereigns, particularly when the subsequent prosecution follows an acquittal. These proposals face significant obstacles, however, as both prosecutors and courts have historically resisted interpretations that would constrain charging discretion or complicate federal-state cooperation in criminal law enforcement.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp26-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Double Jeopardy Clause has been consistently interpreted by courts to provide absolute protection against multiple prosecutions for any criminal conduct." },
      { letter: "B", text: "The Double Jeopardy Clause establishes important protections against multiple prosecutions, though judicial interpretation has created significant exceptions and ambiguities that critics argue undermine its intended purpose." },
      { letter: "C", text: "The Blockburger test is the only legitimate method for determining whether two offenses are the same for double jeopardy purposes." },
      { letter: "D", text: "The dual sovereignty doctrine has been universally criticized by scholars and should be abolished by the Supreme Court." },
      { letter: "E", text: "Proposed reforms to double jeopardy doctrine will likely be adopted by courts and legislatures in the near future." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the core protections of the Double Jeopardy Clause while highlighting how interpretive doctrines like the Blockburger test and dual sovereignty have created exceptions and ambiguities. Critics are cited as arguing these doctrines undermine the clause's protective purpose. Answer B captures this balanced overview of both protections and limitations.",
    difficulty: "medium",
    passageId: "rc-exp26-p1",
  },
  {
    id: "rc-exp26-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Blockburger test determines whether two offenses are the same by examining",
    answerChoices: [
      { letter: "A", text: "whether the offenses arose from the same criminal transaction" },
      { letter: "B", text: "whether each offense requires proof of an element that the other does not" },
      { letter: "C", text: "whether the same sovereign is bringing both prosecutions" },
      { letter: "D", text: "whether the defendant was previously acquitted or convicted" },
      { letter: "E", text: "whether the prosecutors engaged in creative charging decisions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that under Blockburger, 'two offenses are not the same if each requires proof of an element that the other does not.' This elements-based approach is the core of the test.",
    difficulty: "easy",
    passageId: "rc-exp26-p1",
  },
  {
    id: "rc-exp26-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, it can be most reasonably inferred that critics of the Blockburger test would likely",
    answerChoices: [
      { letter: "A", text: "support giving prosecutors greater discretion in charging decisions" },
      { letter: "B", text: "argue that the test focuses too heavily on substance rather than form" },
      { letter: "C", text: "prefer a test that examines whether charges arise from a single criminal episode" },
      { letter: "D", text: "contend that the test was correctly decided but has been misapplied by lower courts" },
      { letter: "E", text: "believe that double jeopardy protection should apply only after conviction" },
    ],
    correctAnswer: "C",
    explanation: "The passage notes critics argue the Blockburger approach is 'formalistic' and permits prosecutors to try defendants multiple times 'for what is substantively a single criminal transaction.' The final paragraph mentions scholars advocate for a 'same transaction' approach, which aligns with this criticism. Answer C captures what critics would prefer.",
    difficulty: "medium",
    passageId: "rc-exp26-p1",
  },
  {
    id: "rc-exp26-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the example of robbery and assault arising from the same incident primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize prosecutors for overcharging defendants" },
      { letter: "B", text: "illustrate how the Blockburger test operates in practice" },
      { letter: "C", text: "demonstrate that double jeopardy offers no meaningful protection" },
      { letter: "D", text: "argue that all related charges should be tried together" },
      { letter: "E", text: "compare the elements-based approach with the dual sovereignty doctrine" },
    ],
    correctAnswer: "B",
    explanation: "The robbery and assault example appears immediately after the introduction of the Blockburger test, serving to illustrate how the elements-based approach works in practice—each crime contains a distinct element not found in the other, so separate prosecutions are permitted.",
    difficulty: "medium",
    passageId: "rc-exp26-p1",
  },
  {
    id: "rc-exp26-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the current state of double jeopardy doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "unreservedly critical of judicial interpretations" },
      { letter: "B", text: "fully supportive of the existing framework" },
      { letter: "C", text: "objectively descriptive while acknowledging ongoing debates" },
      { letter: "D", text: "dismissive of scholarly reform proposals" },
      { letter: "E", text: "optimistic that reforms will soon be adopted" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the doctrine, its interpretations, criticisms, and proposed reforms without taking a clear personal stance. The passage notes what 'critics argue' and what 'scholars have proposed' while also acknowledging 'significant obstacles' to reform. This balanced, objective approach characterizes the author's attitude.",
    difficulty: "medium",
    passageId: "rc-exp26-p1",
  },
  {
    id: "rc-exp26-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument against the dual sovereignty doctrine?",
    answerChoices: [
      { letter: "A", text: "Federal and state prosecutors sometimes coordinate their charging decisions to maximize the number of prosecutions a defendant faces." },
      { letter: "B", text: "Most defendants who are prosecuted by multiple sovereigns are ultimately acquitted in all jurisdictions." },
      { letter: "C", text: "The Supreme Court has never reconsidered a constitutional doctrine once it has been established." },
      { letter: "D", text: "Some states have declined to prosecute conduct that has already been addressed by federal prosecution." },
      { letter: "E", text: "Criminal laws vary significantly between different states." },
    ],
    correctAnswer: "A",
    explanation: "Critics contend that dual sovereignty 'permits exactly the kind of harassment and overreaching that double jeopardy was designed to prevent.' If federal and state prosecutors coordinate to maximize prosecutions, this would directly support the critics' concern that the doctrine enables the very harassment the Double Jeopardy Clause was meant to prevent.",
    difficulty: "hard",
    passageId: "rc-exp26-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - VACCINES AND IMMUNOLOGY
// ============================================

const passage2 = `The development of vaccines represents one of medicine's greatest achievements, preventing an estimated 154 million deaths over the past fifty years alone. Yet the immunological mechanisms by which vaccines confer protection remain incompletely understood, and recent advances in systems biology have revealed that vaccine-induced immunity involves far more complex interactions than the classical model of antibody production suggested.

The traditional understanding of vaccine immunity focused primarily on the adaptive immune response, particularly the generation of neutralizing antibodies and memory B cells. When a vaccine introduces antigens—weakened pathogens, inactivated viruses, or protein fragments—the immune system mounts a response that includes B cells producing antibodies specific to those antigens. Memory B cells persist for years or decades, enabling rapid antibody production upon subsequent exposure to the actual pathogen. This "humoral immunity" formed the primary target of vaccine development for most of the twentieth century.

However, immunologists now recognize that effective vaccine protection often depends equally on cell-mediated immunity, particularly the responses of T lymphocytes. Cytotoxic T cells can directly destroy infected cells, while helper T cells coordinate broader immune responses and support antibody production. Some pathogens, including intracellular bacteria and certain viruses, cannot be effectively controlled by antibodies alone; T cell responses prove essential for protection. The development of mRNA vaccines, which gained prominence during the COVID-19 pandemic, specifically capitalizes on this understanding by delivering genetic instructions that cause host cells to produce viral proteins, thereby triggering robust T cell responses alongside antibody production.

The innate immune system, long considered a nonspecific first line of defense, has also emerged as crucial to vaccine efficacy. Innate immune cells including dendritic cells and macrophages serve as the initial responders to vaccine antigens and determine how the adaptive immune response will develop. Adjuvants—substances added to vaccines to enhance immune responses—work primarily by stimulating innate immunity. Different adjuvants activate distinct signaling pathways, shaping whether the resulting adaptive response will emphasize antibodies, cellular immunity, or both. Understanding these innate-adaptive interactions has become essential for designing vaccines against challenging targets like HIV and tuberculosis.

Systems vaccinology, an emerging field that applies computational biology and high-throughput technologies to vaccine research, has revealed that successful vaccination triggers coordinated changes across thousands of genes, involving multiple cell types and biological pathways. These studies have identified molecular signatures that predict vaccine efficacy and durability, potentially enabling more rational vaccine design. They have also highlighted the substantial individual variation in vaccine responses, influenced by factors including age, genetics, prior infections, and the composition of the gut microbiome. This recognition of heterogeneity challenges the one-size-fits-all approach to vaccination and points toward personalized immunization strategies.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp26-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "mRNA vaccines are superior to traditional vaccines because they stimulate T cell responses." },
      { letter: "B", text: "The classical understanding of vaccine immunity as primarily antibody-based has been superseded by a more complex model incorporating cellular, innate, and systems-level perspectives." },
      { letter: "C", text: "Vaccines have saved millions of lives, making them the most important medical intervention ever developed." },
      { letter: "D", text: "Individual variation in vaccine responses means that vaccination programs should be abandoned in favor of personalized treatments." },
      { letter: "E", text: "The innate immune system is more important than the adaptive immune system for vaccine efficacy." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution from the traditional antibody-focused model to a more complex understanding that includes cell-mediated immunity, innate immune contributions, and systems-level analysis. Answer B accurately captures this progression toward a more nuanced, multi-faceted model of vaccine immunity.",
    difficulty: "medium",
    passageId: "rc-exp26-p2",
  },
  {
    id: "rc-exp26-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, adjuvants enhance vaccine efficacy primarily by",
    answerChoices: [
      { letter: "A", text: "directly producing antibodies against pathogens" },
      { letter: "B", text: "stimulating the innate immune system" },
      { letter: "C", text: "introducing additional antigens into the vaccine" },
      { letter: "D", text: "preventing memory B cells from forming" },
      { letter: "E", text: "activating cytotoxic T cells to destroy infected cells" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Adjuvants—substances added to vaccines to enhance immune responses—work primarily by stimulating innate immunity.'",
    difficulty: "easy",
    passageId: "rc-exp26-p2",
  },
  {
    id: "rc-exp26-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following can be most reasonably inferred about vaccine development before the recognition of cell-mediated immunity's importance?",
    answerChoices: [
      { letter: "A", text: "All vaccines developed during that period were ineffective." },
      { letter: "B", text: "Researchers focused primarily on stimulating antibody production." },
      { letter: "C", text: "T lymphocytes were unknown to scientists." },
      { letter: "D", text: "Vaccines could not be manufactured in sufficient quantities." },
      { letter: "E", text: "The innate immune system was understood but deliberately ignored." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'humoral immunity'—meaning antibody-based protection—'formed the primary target of vaccine development for most of the twentieth century.' This implies that before the recognition of cell-mediated immunity's importance, researchers focused on stimulating antibody production.",
    difficulty: "medium",
    passageId: "rc-exp26-p2",
  },
  {
    id: "rc-exp26-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses mRNA vaccines primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that they should replace all other vaccine types" },
      { letter: "B", text: "provide an example of vaccines designed to capitalize on understanding of T cell immunity" },
      { letter: "C", text: "demonstrate that the COVID-19 pandemic transformed vaccine science" },
      { letter: "D", text: "criticize earlier vaccine development approaches" },
      { letter: "E", text: "explain how the innate immune system responds to genetic material" },
    ],
    correctAnswer: "B",
    explanation: "The mRNA vaccine discussion appears in the paragraph about cell-mediated immunity. The passage notes these vaccines 'specifically capitalize' on understanding of T cell responses by 'triggering robust T cell responses alongside antibody production.' The example illustrates how newer vaccines apply knowledge of cellular immunity.",
    difficulty: "medium",
    passageId: "rc-exp26-p2",
  },
  {
    id: "rc-exp26-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward systems vaccinology is best described as",
    answerChoices: [
      { letter: "A", text: "skeptical about its practical applications" },
      { letter: "B", text: "appreciative of its potential to advance vaccine design" },
      { letter: "C", text: "neutral and merely descriptive" },
      { letter: "D", text: "dismissive of its contributions to understanding" },
      { letter: "E", text: "concerned about its ethical implications" },
    ],
    correctAnswer: "B",
    explanation: "The author describes systems vaccinology positively, noting it has 'revealed' important insights, 'identified molecular signatures that predict vaccine efficacy,' and suggests it enables 'more rational vaccine design' and 'points toward personalized immunization strategies.' This language conveys appreciation for the field's potential contributions.",
    difficulty: "medium",
    passageId: "rc-exp26-p2",
  },
  {
    id: "rc-exp26-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, a vaccine researcher seeking to develop a vaccine against an intracellular pathogen would most likely focus on",
    answerChoices: [
      { letter: "A", text: "maximizing antibody production while minimizing T cell involvement" },
      { letter: "B", text: "using adjuvants that suppress innate immune responses" },
      { letter: "C", text: "stimulating robust T cell responses in addition to antibody production" },
      { letter: "D", text: "avoiding any engagement with the adaptive immune system" },
      { letter: "E", text: "developing a vaccine that works identically in all individuals" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'Some pathogens, including intracellular bacteria and certain viruses, cannot be effectively controlled by antibodies alone; T cell responses prove essential for protection.' Therefore, a researcher developing a vaccine against an intracellular pathogen would focus on stimulating T cell responses.",
    difficulty: "medium",
    passageId: "rc-exp26-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - SHAKESPEARE'S HISTORIES AND POLITICAL POWER
// ============================================

const passage3 = `Shakespeare's history plays, particularly the two tetralogies spanning from Richard II to Richard III, have long been read as profound meditations on political power, legitimacy, and the nature of kingship. Yet scholarly interpretation of these works has shifted dramatically over the past century, moving from readings that emphasized Tudor propaganda to more complex analyses that find the plays interrogating rather than affirming any single political ideology.

The traditional view, associated with E.M.W. Tillyard's influential 1944 study, interpreted Shakespeare's histories as dramatizing a coherent "Elizabethan World Picture" in which social and cosmic order were interlinked. Under this reading, the deposition of Richard II represented a violation of divine right that initiated a chain of bloodshed only resolved by Henry Tudor's victory at Bosworth Field—conveniently legitimizing the dynasty under which Shakespeare wrote. The plays thus served as propaganda reinforcing Tudor claims to the throne while warning against rebellion and disorder.

This orthodox interpretation came under sustained attack beginning in the 1980s. New Historicist critics argued that the plays reveal deep anxieties about power and legitimacy rather than confidently affirming Tudor ideology. Stephen Greenblatt's influential reading of the Henry IV plays focused on the "production of charisma," analyzing how Prince Hal strategically performs reformation to manufacture the appearance of legitimate authority. Under this interpretation, the plays expose the theatrical nature of political power rather than endorsing any ruler's divine right. Kingship appears as performance, legitimacy as construction, and order as achieved through rhetorical manipulation rather than reflecting natural or divine hierarchy.

Other scholars have emphasized the plays' engagement with practical political problems facing early modern England. The question of succession—uncertain under the aging, unmarried Elizabeth I—resonates throughout works depicting disputed claims, usurpation, and the transmission of royal authority. The histories can be read as exploring various theories of political legitimacy: hereditary right, conquest, popular acclamation, and effective governance. By dramatizing the inadequacy of each principle taken alone, Shakespeare may have been participating in contemporary debates about the foundations of political authority rather than simply endorsing the status quo.

More recent scholarship has questioned whether the plays present any unified political vision at all. Some critics argue that Shakespeare's histories are deliberately multivocal, giving voice to competing perspectives without finally resolving them. The commoners who appear throughout the histories—Jack Cade's rebels, the tavern denizens of Eastcheap, the ordinary soldiers before Agincourt—articulate critiques of aristocratic warfare and royal prerogative that are never fully answered. Rather than offering propaganda for any political position, the plays may function as spaces for collective reflection on political questions that remained genuinely open in Shakespeare's England.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp26-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Tillyard's interpretation of Shakespeare's histories as Tudor propaganda remains the most authoritative scholarly reading." },
      { letter: "B", text: "Shakespeare's history plays have no political significance and should be read purely as entertainment." },
      { letter: "C", text: "Scholarly interpretation of Shakespeare's histories has evolved from viewing them as Tudor propaganda to more complex readings that find the plays questioning rather than affirming particular political ideologies." },
      { letter: "D", text: "New Historicist critics have definitively proven that Shakespeare opposed the Tudor monarchy." },
      { letter: "E", text: "The commoners in Shakespeare's histories represent the playwright's true political views." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the evolution of scholarly interpretation from Tillyard's traditional view of Tudor propaganda through New Historicist critiques to more recent readings emphasizing the plays' multivocal nature. Answer C accurately captures this trajectory from propaganda interpretation to more complex, questioning analyses.",
    difficulty: "medium",
    passageId: "rc-exp26-p3",
  },
  {
    id: "rc-exp26-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Stephen Greenblatt's reading of the Henry IV plays focuses on",
    answerChoices: [
      { letter: "A", text: "the divine right of kings as reflected in Prince Hal's character" },
      { letter: "B", text: "how Prince Hal strategically manufactures the appearance of legitimate authority" },
      { letter: "C", text: "the historical accuracy of Shakespeare's depiction of medieval England" },
      { letter: "D", text: "Shakespeare's personal political opinions about the Tudor dynasty" },
      { letter: "E", text: "the influence of commoners on aristocratic political decisions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly describes Greenblatt's reading as focused on 'the production of charisma, analyzing how Prince Hal strategically performs reformation to manufacture the appearance of legitimate authority.'",
    difficulty: "easy",
    passageId: "rc-exp26-p3",
  },
  {
    id: "rc-exp26-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, proponents of the traditional Tillyard interpretation would most likely argue that Shakespeare's histories",
    answerChoices: [
      { letter: "A", text: "question the legitimacy of Tudor claims to the throne" },
      { letter: "B", text: "expose the theatrical and constructed nature of political power" },
      { letter: "C", text: "present the deposition of Richard II as the original sin requiring Tudor redemption" },
      { letter: "D", text: "give equal voice to competing political perspectives without resolution" },
      { letter: "E", text: "primarily address succession anxieties specific to Elizabeth's reign" },
    ],
    correctAnswer: "C",
    explanation: "The passage describes Tillyard's view as presenting 'the deposition of Richard II' as 'a violation of divine right that initiated a chain of bloodshed only resolved by Henry Tudor's victory'—essentially positioning Richard's deposition as an originating transgression that the Tudor dynasty redeemed. Answer C captures this interpretive framework.",
    difficulty: "medium",
    passageId: "rc-exp26-p3",
  },
  {
    id: "rc-exp26-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Jack Cade's rebels, the tavern denizens of Eastcheap, and the soldiers before Agincourt primarily in order to",
    answerChoices: [
      { letter: "A", text: "support the argument that the plays present multiple perspectives without definitive resolution" },
      { letter: "B", text: "demonstrate Shakespeare's sympathy for the common people over aristocrats" },
      { letter: "C", text: "illustrate Tillyard's thesis about social order" },
      { letter: "D", text: "criticize New Historicist interpretations as incomplete" },
      { letter: "E", text: "prove that Shakespeare was writing for a popular rather than elite audience" },
    ],
    correctAnswer: "A",
    explanation: "These commoner characters are mentioned in the final paragraph, which argues that the plays may be 'deliberately multivocal.' The passage notes these characters 'articulate critiques...that are never fully answered,' supporting the claim that the plays present competing perspectives without final resolution.",
    difficulty: "medium",
    passageId: "rc-exp26-p3",
  },
  {
    id: "rc-exp26-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the various scholarly interpretations discussed in the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly preferring the traditional Tillyard interpretation" },
      { letter: "B", text: "dismissive of all attempts to find political meaning in Shakespeare" },
      { letter: "C", text: "presenting each perspective fairly while suggesting that more recent readings have merit" },
      { letter: "D", text: "aggressively advocating for New Historicist approaches" },
      { letter: "E", text: "skeptical that literary scholarship can produce valid interpretations" },
    ],
    correctAnswer: "C",
    explanation: "The author presents each scholarly approach—Tillyard's, New Historicist, and more recent readings—with explanatory rather than evaluative language. However, the structure moves from 'traditional' to 'sustained attack' on that view to 'more recent scholarship,' suggesting an evolution toward more nuanced interpretations. The author does not dismiss earlier views but implicitly suggests the field has progressed.",
    difficulty: "medium",
    passageId: "rc-exp26-p3",
  },
  {
    id: "rc-exp26-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A thesis is stated, counterarguments are considered and rejected, and the thesis is reaffirmed." },
      { letter: "B", text: "A scholarly debate is introduced, a traditional interpretation is described, critiques of that interpretation are presented, and more recent approaches are discussed." },
      { letter: "C", text: "A historical period is described, key figures are introduced, and their contributions are evaluated." },
      { letter: "D", text: "A problem is identified, several failed solutions are described, and a new solution is proposed." },
      { letter: "E", text: "Two competing theories are presented and then synthesized into a unified framework." },
    ],
    correctAnswer: "B",
    explanation: "The passage begins by noting that scholarly interpretation has 'shifted dramatically,' then describes Tillyard's traditional view, presents the New Historicist attack on that view beginning in the 1980s, discusses other scholarly emphases, and concludes with 'more recent scholarship' questioning whether any unified political vision exists. Answer B accurately captures this organizational structure.",
    difficulty: "hard",
    passageId: "rc-exp26-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - CONSUMER BEHAVIOR AND MARKETING PSYCHOLOGY
// ============================================

const passage4 = `The field of consumer behavior research has undergone significant transformation since its emergence in the mid-twentieth century. Early approaches, rooted in economic rationality, assumed that consumers made purchasing decisions by systematically evaluating products and selecting options that maximized utility given budget constraints. This "rational actor" model proved increasingly inadequate as researchers documented the many ways in which actual consumer behavior departed from its predictions, giving rise to behavioral approaches that emphasize psychological, social, and contextual influences on decision-making.

Daniel Kahneman and Amos Tversky's work on cognitive biases and heuristics fundamentally reshaped understanding of consumer decision-making. They demonstrated that people routinely rely on mental shortcuts that can lead to systematic deviations from rational choice. Anchoring effects cause consumers to be heavily influenced by initial price points, even when those anchors are arbitrary. Loss aversion leads people to weight potential losses more heavily than equivalent gains, affecting everything from product returns policies to subscription cancellation decisions. The availability heuristic causes consumers to overestimate the likelihood of vivid or easily recalled events, helping explain why dramatic product failures generate disproportionate concern relative to their actual frequency.

Social influence represents another crucial departure from rational actor models. Consumers do not make decisions in isolation but are embedded in networks of family, friends, and increasingly, online communities whose opinions shape preferences and purchasing behavior. Social proof—the tendency to look to others' behavior as a guide to one's own—powerfully affects consumer choices, particularly in situations of uncertainty. The rise of online reviews and social media has amplified these effects, creating new dynamics as consumers navigate authentic recommendations alongside sponsored content and algorithmic curation.

The context in which choices are presented also substantially affects decisions, a phenomenon marketers have learned to exploit through "choice architecture." Defaults matter enormously: consumers are far more likely to remain with pre-selected options than to actively opt out, whether for organ donation or magazine subscriptions. The framing of options influences choices even when the underlying alternatives are economically equivalent; presenting ground beef as "80% lean" rather than "20% fat" reliably increases purchase intent. The number and arrangement of options also shapes decisions, with too many choices sometimes producing paralysis rather than satisfaction.

Critics of consumer behavior research raise important concerns about both its methods and its applications. Laboratory experiments may not generalize to real-world purchasing contexts, and cross-cultural research suggests that many findings from Western samples may not apply universally. More fundamentally, some scholars question whether the field's primary purpose of helping marketers influence consumers serves the public interest. While understanding cognitive biases could help consumers make better decisions, in practice this knowledge is primarily deployed to enhance corporate profitability, raising ethical questions about the manipulation of vulnerable populations and the cultivation of consumption patterns with environmental and social costs.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp26-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "advocate for stricter regulation of marketing practices based on consumer psychology" },
      { letter: "B", text: "provide an overview of how consumer behavior research has evolved beyond rational actor models while noting ethical concerns about its applications" },
      { letter: "C", text: "argue that the rational actor model remains the best framework for understanding consumer decisions" },
      { letter: "D", text: "demonstrate that all marketing is fundamentally manipulative and should be prohibited" },
      { letter: "E", text: "explain the specific techniques marketers use to increase sales of their products" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution of consumer behavior research from rational actor models through behavioral approaches (cognitive biases, social influence, choice architecture) while concluding with ethical critiques. Answer B captures both the descriptive content about the field's development and the ethical concerns raised in the final paragraph.",
    difficulty: "medium",
    passageId: "rc-exp26-p4",
  },
  {
    id: "rc-exp26-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, loss aversion refers to the tendency of people to",
    answerChoices: [
      { letter: "A", text: "avoid making any purchasing decisions when faced with too many options" },
      { letter: "B", text: "weight potential losses more heavily than equivalent gains" },
      { letter: "C", text: "be influenced by the first price they encounter when shopping" },
      { letter: "D", text: "overestimate the likelihood of dramatic product failures" },
      { letter: "E", text: "look to others' behavior as a guide to their own decisions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Loss aversion leads people to weight potential losses more heavily than equivalent gains.'",
    difficulty: "easy",
    passageId: "rc-exp26-p4",
  },
  {
    id: "rc-exp26-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following would most likely be true of a company seeking to increase subscription retention?",
    answerChoices: [
      { letter: "A", text: "It would make cancellation the default option for all subscribers." },
      { letter: "B", text: "It would emphasize the benefits gained from subscribing rather than what would be lost by canceling." },
      { letter: "C", text: "It might design the cancellation process to highlight what subscribers would lose by leaving." },
      { letter: "D", text: "It would remove all social proof from its marketing materials." },
      { letter: "E", text: "It would increase the number of subscription options available to consumers." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes loss aversion as affecting 'subscription cancellation decisions' and notes that people 'weight potential losses more heavily than equivalent gains.' A company wanting to retain subscribers would logically use this knowledge by emphasizing what customers would lose—leveraging loss aversion to discourage cancellation.",
    difficulty: "medium",
    passageId: "rc-exp26-p4",
  },
  {
    id: "rc-exp26-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses the framing of ground beef as \"80% lean\" versus \"20% fat\" primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize deceptive marketing practices in the food industry" },
      { letter: "B", text: "illustrate how the presentation of equivalent options can affect consumer choices" },
      { letter: "C", text: "argue that consumers should be provided with complete nutritional information" },
      { letter: "D", text: "demonstrate that consumers are incapable of making rational decisions" },
      { letter: "E", text: "contrast food marketing with other types of consumer products" },
    ],
    correctAnswer: "B",
    explanation: "The ground beef example appears in the paragraph about choice architecture and framing. It is introduced to show that 'framing of options influences choices even when the underlying alternatives are economically equivalent.' The example illustrates the framing effect—the same product described differently produces different purchase intentions.",
    difficulty: "medium",
    passageId: "rc-exp26-p4",
  },
  {
    id: "rc-exp26-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that critics of consumer behavior research are primarily concerned that",
    answerChoices: [
      { letter: "A", text: "the field lacks sufficient scientific rigor in its experimental methods" },
      { letter: "B", text: "knowledge about cognitive biases is used more to benefit corporations than to help consumers" },
      { letter: "C", text: "cross-cultural research has rendered all previous findings invalid" },
      { letter: "D", text: "the rational actor model was prematurely abandoned" },
      { letter: "E", text: "social media has made consumer behavior impossible to study" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph notes that critics question whether the field 'serves the public interest' and observes that 'while understanding cognitive biases could help consumers make better decisions, in practice this knowledge is primarily deployed to enhance corporate profitability.' This concern about asymmetric use of knowledge—benefiting corporations rather than consumers—is the critics' primary concern as presented.",
    difficulty: "medium",
    passageId: "rc-exp26-p4",
  },
  {
    id: "rc-exp26-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the critics' concern about the ethical implications of consumer behavior research?",
    answerChoices: [
      { letter: "A", text: "Marketing expenditures have increased substantially over the past decade." },
      { letter: "B", text: "Consumer advocacy groups have successfully used behavioral insights to help people make decisions aligned with their long-term interests." },
      { letter: "C", text: "Cross-cultural studies have confirmed that cognitive biases operate similarly across different societies." },
      { letter: "D", text: "Online reviews have become the primary source of product information for most consumers." },
      { letter: "E", text: "New research has identified additional cognitive biases not previously recognized." },
    ],
    correctAnswer: "B",
    explanation: "Critics' concern is that behavioral knowledge is 'primarily deployed to enhance corporate profitability' rather than to help consumers. If consumer advocacy groups successfully use these insights to help people make better decisions, this would directly weaken the claim that the knowledge primarily serves corporate rather than consumer interests. Answer B provides evidence of beneficial applications for consumers.",
    difficulty: "hard",
    passageId: "rc-exp26-p4",
  },
];

// Export all RC questions from Set 26
export const rcQuestionsExpSet26: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet26 = {
  passage1: { id: "rc-exp26-p1", content: passage1, topic: "law", title: "Double Jeopardy and Criminal Procedure" },
  passage2: { id: "rc-exp26-p2", content: passage2, topic: "natural-sciences", title: "Vaccines and Immunology" },
  passage3: { id: "rc-exp26-p3", content: passage3, topic: "humanities", title: "Shakespeare's Histories and Political Power" },
  passage4: { id: "rc-exp26-p4", content: passage4, topic: "social-sciences", title: "Consumer Behavior and Marketing Psychology" },
};
