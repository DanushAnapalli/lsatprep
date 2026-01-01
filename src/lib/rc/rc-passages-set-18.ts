// Reading Comprehension Expansion Set 18
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - SECURITIES REGULATION AND INSIDER TRADING
// ============================================

const passage1 = `The prohibition against insider trading stands as one of the most contested and conceptually challenging doctrines in securities law. Although the term "insider trading" evokes images of corrupt executives profiting from confidential corporate information, the legal boundaries of prohibited conduct remain surprisingly unclear. Neither the Securities Exchange Act of 1934 nor the rules promulgated thereunder explicitly define insider trading; instead, courts have developed the doctrine through case-by-case adjudication, resulting in a framework that critics characterize as unpredictable and theoretically incoherent.

The classical theory of insider trading liability emerged from the Supreme Court's decision in Chiarella v. United States (1980). Under this theory, corporate insiders—officers, directors, and employees—breach a fiduciary duty to shareholders when they trade on material nonpublic information without first disclosing that information or abstaining from trading. The fiduciary relationship between insiders and shareholders provides the moral and legal foundation for liability: insiders betray the trust that shareholders place in them when they secretly exploit corporate information for personal gain.

However, the classical theory's limitation to fiduciary relationships created significant enforcement gaps. Consider the financial printer who, handling confidential tender offer documents, deduces the target company's identity and purchases its stock. This individual owes no fiduciary duty to the target company's shareholders, yet profits from exactly the informational advantage that insider trading law supposedly prohibits. The Supreme Court's response in United States v. O'Hagan (1997) was the misappropriation theory: a person commits securities fraud when he misappropriates confidential information for securities trading purposes in breach of a duty owed to the source of the information. Under this theory, the financial printer violates his duty to his employer by trading on information entrusted to him for business purposes.

Critics argue that both theories fail to articulate a coherent principle explaining why insider trading should be prohibited at all. Some economists contend that insider trading improves market efficiency by moving stock prices toward their true value more quickly. If insiders trade on positive news, the stock price rises before public announcement, better reflecting the company's actual value. Others counter that insider trading undermines investor confidence in market fairness, and that allowing insiders to profit from confidential information creates perverse incentives: managers might delay disclosing good news to accumulate shares, or structure transactions to maximize trading opportunities rather than shareholder value.

The conceptual uncertainty surrounding insider trading has practical consequences. Prosecutors must navigate ambiguous legal standards when deciding whom to charge, while potential defendants struggle to predict which conduct crosses the line into illegality. Recent cases involving "tippers" who share information with "tippees" have exposed further doctrinal confusion about when sharing information triggers liability, particularly regarding what benefits the tipper must receive. Until Congress or the Supreme Court provides clearer guidance, insider trading law will likely remain an uncertain terrain where enforcement depends as much on prosecutorial discretion as on principled legal analysis.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp18-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Insider trading should be legalized because it improves market efficiency by moving stock prices toward their true value." },
      { letter: "B", text: "The classical theory of insider trading liability is superior to the misappropriation theory and should be the sole basis for prosecution." },
      { letter: "C", text: "Despite decades of judicial development, insider trading law remains conceptually unclear and doctrinally contested, with significant practical consequences for enforcement." },
      { letter: "D", text: "The Supreme Court has definitively resolved all ambiguities in insider trading law through the Chiarella and O'Hagan decisions." },
      { letter: "E", text: "Corporate insiders should be permitted to trade on material nonpublic information as long as they disclose their trades promptly." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the development of insider trading doctrine through the classical and misappropriation theories, presents competing views on whether insider trading should be prohibited, and emphasizes the ongoing conceptual uncertainty and its practical consequences. Answer C captures this central theme of doctrinal confusion and contested principles.",
    difficulty: "medium",
    passageId: "rc-exp18-p1",
  },
  {
    id: "rc-exp18-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the classical theory of insider trading liability is based on",
    answerChoices: [
      { letter: "A", text: "the duty that financial printers owe to their employers" },
      { letter: "B", text: "the fiduciary relationship between corporate insiders and shareholders" },
      { letter: "C", text: "congressional legislation explicitly defining prohibited conduct" },
      { letter: "D", text: "the need to prevent all trading on nonpublic information regardless of the trader's relationship to the company" },
      { letter: "E", text: "economic theories about market efficiency and price discovery" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that under the classical theory, 'corporate insiders breach a fiduciary duty to shareholders when they trade on material nonpublic information' and that 'The fiduciary relationship between insiders and shareholders provides the moral and legal foundation for liability.'",
    difficulty: "easy",
    passageId: "rc-exp18-p1",
  },
  {
    id: "rc-exp18-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, proponents of the misappropriation theory would most likely argue that the financial printer in the example",
    answerChoices: [
      { letter: "A", text: "committed no violation because he owed no fiduciary duty to the target company's shareholders" },
      { letter: "B", text: "violated securities law by breaching the duty of confidentiality he owed to his employer" },
      { letter: "C", text: "should be prosecuted under the classical theory of insider trading" },
      { letter: "D", text: "improved market efficiency by causing the stock price to reflect the upcoming tender offer" },
      { letter: "E", text: "acted ethically because he was not a corporate insider of the target company" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that under the misappropriation theory, 'the financial printer violates his duty to his employer by trading on information entrusted to him for business purposes.' This theory was developed precisely to address gaps like the financial printer scenario where the classical theory's fiduciary requirements were not met.",
    difficulty: "medium",
    passageId: "rc-exp18-p1",
  },
  {
    id: "rc-exp18-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author discusses economists who argue that insider trading improves market efficiency primarily in order to",
    answerChoices: [
      { letter: "A", text: "advocate for the complete deregulation of securities trading" },
      { letter: "B", text: "demonstrate that the theoretical justification for prohibiting insider trading is not universally accepted" },
      { letter: "C", text: "explain why the Supreme Court adopted the misappropriation theory" },
      { letter: "D", text: "criticize prosecutors for bringing too many insider trading cases" },
      { letter: "E", text: "argue that the classical theory should be abandoned entirely" },
    ],
    correctAnswer: "B",
    explanation: "The author introduces the economists' argument as part of a discussion of critics who 'fail to articulate a coherent principle explaining why insider trading should be prohibited at all.' This shows that even the fundamental rationale for the prohibition is contested, reinforcing the passage's theme of conceptual uncertainty.",
    difficulty: "medium",
    passageId: "rc-exp18-p1",
  },
  {
    id: "rc-exp18-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the current state of insider trading law can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive of recent judicial developments" },
      { letter: "B", text: "critically concerned about doctrinal incoherence and unpredictability" },
      { letter: "C", text: "indifferent to the practical consequences of legal uncertainty" },
      { letter: "D", text: "nostalgic for the pre-Chiarella approach to securities regulation" },
      { letter: "E", text: "confident that prosecutors appropriately exercise their discretion" },
    ],
    correctAnswer: "B",
    explanation: "Throughout the passage, the author emphasizes that the doctrine is 'unpredictable and theoretically incoherent,' notes 'enforcement gaps' and 'doctrinal confusion,' and concludes that the law remains 'uncertain terrain.' The author clearly views these characteristics as problems requiring resolution, expressing critical concern rather than approval or indifference.",
    difficulty: "medium",
    passageId: "rc-exp18-p1",
  },
  {
    id: "rc-exp18-006",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which one of the following scenarios would most clearly fall within the scope of the classical theory of insider trading liability?",
    answerChoices: [
      { letter: "A", text: "A taxi driver overhears two executives discussing a merger and buys stock in the target company." },
      { letter: "B", text: "A journalist discovers through independent research that a company has exaggerated its earnings." },
      { letter: "C", text: "A CEO purchases shares in her own company after learning of an undisclosed positive development from internal reports." },
      { letter: "D", text: "A supplier learns that a customer company is about to receive a major government contract and invests accordingly." },
      { letter: "E", text: "An investment banker trades on information about a client company, violating the bank's confidentiality policies." },
    ],
    correctAnswer: "C",
    explanation: "The classical theory applies to 'corporate insiders—officers, directors, and employees' who 'breach a fiduciary duty to shareholders when they trade on material nonpublic information.' A CEO trading on undisclosed corporate information learned through her position fits squarely within this framework. The other scenarios involve outsiders who might be covered by the misappropriation theory (if at all) but lack the insider-shareholder fiduciary relationship central to the classical theory.",
    difficulty: "hard",
    passageId: "rc-exp18-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - BIODIVERSITY AND EXTINCTION RATES
// ============================================

const passage2 = `Scientists attempting to quantify the current rate of species extinction face a fundamental challenge: we do not know how many species exist. Estimates of total species richness on Earth range from approximately 3 million to over 100 million, with most researchers settling on figures between 8 and 10 million. Of these, fewer than 2 million have been formally described and named. This taxonomic gap means that many species may become extinct before scientists even document their existence, making precise extinction rate calculations inherently uncertain.

Despite these limitations, multiple lines of evidence suggest that current extinction rates dramatically exceed the background rate observed in the fossil record. The background extinction rate—the normal pace at which species disappear through evolutionary time—has been estimated at roughly one species per million species per year, often abbreviated as 1 E/MSY. Contemporary extinction rates for well-studied groups like mammals and birds appear to be 100 to 1,000 times higher than this baseline, leading some researchers to declare that Earth has entered a sixth mass extinction event comparable to the five great extinction pulses preserved in the geological record.

Calculating extinction rates requires distinguishing between species that are genuinely extinct and those that are merely undetected. For many taxonomic groups, scientists have not conducted comprehensive surveys, and a species might persist undiscovered in remote habitats. The International Union for Conservation of Nature addresses this problem by categorizing species as "possibly extinct" or "extinct in the wild" before definitively declaring them extinct. Nevertheless, the IUCN Red List documents accelerating rates of species listings in threatened categories, suggesting that even conservative methodologies reveal alarming trends.

Habitat destruction represents the primary driver of contemporary extinctions. As human activities convert natural ecosystems to agricultural land, urban areas, and industrial zones, species lose the conditions necessary for their survival. Island species prove particularly vulnerable because their populations are often small, their geographic ranges limited, and their evolutionary histories have not prepared them for introduced predators and competitors. The arrival of humans on previously uninhabited islands consistently correlates with extinction cascades, from the megafauna of Madagascar to the unique bird communities of Polynesia.

Climate change compounds the threats posed by habitat destruction. Species adapted to specific temperature and precipitation regimes must either shift their ranges, adapt to new conditions, or face extinction. However, the fragmented nature of remaining natural habitats impedes range shifts, trapping species in increasingly unsuitable conditions. Moreover, the pace of anthropogenic climate change may exceed the adaptive capacity of many organisms. While some species demonstrate remarkable plasticity, others—particularly those with specialized ecological requirements or limited dispersal abilities—may be unable to respond quickly enough to survive the coming decades of environmental transformation.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp18-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Scientists have precisely determined that exactly 8 million species currently exist on Earth." },
      { letter: "B", text: "Despite inherent uncertainties in measuring extinction rates, substantial evidence indicates that current extinctions far exceed natural background rates, driven primarily by habitat destruction and intensified by climate change." },
      { letter: "C", text: "The IUCN Red List provides definitive proof that all threatened species will become extinct within the next decade." },
      { letter: "D", text: "Island species are the only organisms currently facing extinction threats from human activities." },
      { letter: "E", text: "Climate change will inevitably cause all species to shift their geographic ranges toward the poles." },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses challenges in quantifying extinction rates due to taxonomic gaps, presents evidence that current rates are 100-1,000 times above background, identifies habitat destruction as the primary driver, and explains how climate change compounds these threats. Answer B accurately captures this comprehensive treatment of extinction rate evidence and drivers.",
    difficulty: "medium",
    passageId: "rc-exp18-p2",
  },
  {
    id: "rc-exp18-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the background extinction rate is approximately",
    answerChoices: [
      { letter: "A", text: "100 to 1,000 species per year" },
      { letter: "B", text: "one species per million species per year" },
      { letter: "C", text: "8 to 10 million species per century" },
      { letter: "D", text: "2 million species since the beginning of recorded history" },
      { letter: "E", text: "five major pulses throughout geological time" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The background extinction rate—the normal pace at which species disappear through evolutionary time—has been estimated at roughly one species per million species per year, often abbreviated as 1 E/MSY.'",
    difficulty: "easy",
    passageId: "rc-exp18-p2",
  },
  {
    id: "rc-exp18-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, one can most reasonably infer that island species are particularly vulnerable to extinction because",
    answerChoices: [
      { letter: "A", text: "they have evolved effective defenses against all predators" },
      { letter: "B", text: "islands provide unlimited habitat space for population expansion" },
      { letter: "C", text: "their isolation has left them unprepared for novel threats while limiting their population sizes and ranges" },
      { letter: "D", text: "climate change affects islands more severely than continental areas" },
      { letter: "E", text: "the IUCN does not monitor island species" },
    ],
    correctAnswer: "C",
    explanation: "The passage explains that island species are vulnerable because 'their populations are often small, their geographic ranges limited, and their evolutionary histories have not prepared them for introduced predators and competitors.' This combination of limited populations, restricted ranges, and evolutionary naivety to new threats makes them particularly susceptible.",
    difficulty: "medium",
    passageId: "rc-exp18-p2",
  },
  {
    id: "rc-exp18-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions the megafauna of Madagascar and the bird communities of Polynesia primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these regions contain the highest species diversity on Earth" },
      { letter: "B", text: "illustrate the pattern of extinction cascades following human arrival on islands" },
      { letter: "C", text: "criticize conservation efforts in tropical regions" },
      { letter: "D", text: "contrast ancient extinctions with contemporary species losses" },
      { letter: "E", text: "explain how the background extinction rate was calculated" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear immediately after the statement that 'The arrival of humans on previously uninhabited islands consistently correlates with extinction cascades.' Madagascar and Polynesia serve as specific historical instances demonstrating this pattern of human-caused island extinctions.",
    difficulty: "medium",
    passageId: "rc-exp18-p2",
  },
  {
    id: "rc-exp18-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's tone when discussing current extinction trends can best be characterized as",
    answerChoices: [
      { letter: "A", text: "dismissive of scientific uncertainty as an obstacle to understanding" },
      { letter: "B", text: "optimistic that technological solutions will reverse extinction trends" },
      { letter: "C", text: "scientifically measured yet clearly concerned about the gravity of the situation" },
      { letter: "D", text: "neutral and completely detached from the implications of the evidence" },
      { letter: "E", text: "skeptical that extinction rates actually exceed background levels" },
    ],
    correctAnswer: "C",
    explanation: "The author presents evidence carefully, acknowledging uncertainties ('inherently uncertain,' 'conservative methodologies') while using language indicating serious concern ('dramatically exceed,' 'alarming trends,' 'extinction cascades'). This combination of scientific rigor and evident concern characterizes the tone throughout the passage.",
    difficulty: "medium",
    passageId: "rc-exp18-p2",
  },
  {
    id: "rc-exp18-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most weaken the author's suggestion that Earth may be experiencing a sixth mass extinction?",
    answerChoices: [
      { letter: "A", text: "Many species classified as extinct in the 20th century have subsequently been rediscovered in remote habitats." },
      { letter: "B", text: "Some well-studied taxonomic groups have experienced no documented extinctions in the past century." },
      { letter: "C", text: "The fossil record may underestimate the true background extinction rate by a factor of 100 to 1,000." },
      { letter: "D", text: "Climate change is accelerating more rapidly than most models predicted." },
      { letter: "E", text: "Habitat destruction has increased in rate over the past fifty years." },
    ],
    correctAnswer: "C",
    explanation: "The author's argument for a mass extinction rests on contemporary rates being '100 to 1,000 times higher' than the background rate of 1 E/MSY. If the true background rate were actually 100 to 1,000 times higher than currently estimated, then contemporary rates might not significantly exceed the baseline, undermining the claim that current extinctions represent a mass extinction event.",
    difficulty: "hard",
    passageId: "rc-exp18-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - ANCIENT GREEK TRAGEDY AND CATHARSIS
// ============================================

const passage3 = `Aristotle's concept of catharsis, introduced in his Poetics as a key effect of tragic drama, has generated more scholarly debate than perhaps any other term in the history of literary criticism. The word appears only once in the surviving text of the Poetics, in a tantalizingly brief passage where Aristotle defines tragedy as "through pity and fear accomplishing the catharsis of such emotions." What exactly Aristotle meant by catharsis—and whether we can ever definitively determine his intention—remains contested after more than two millennia of interpretation.

The traditional interpretation, dominant from the Renaissance through the nineteenth century, understood catharsis as emotional purgation. On this view, tragedy provides a kind of therapeutic release: by arousing intense feelings of pity and fear in a controlled aesthetic context, tragic drama purges the audience of these emotions, leaving spectators calmer and psychologically healthier. This medical metaphor connects to Aristotle's work in natural philosophy, where he discusses physical purgation as a healing process. The emotional purgation theory also addressed Plato's criticism that poetry dangerously inflames the passions; if tragedy actually purges emotions rather than simply stimulating them, then drama serves a beneficial social function rather than corrupting citizens.

Twentieth-century scholars increasingly challenged the purgation theory. Some argued that catharsis refers not to the expulsion of emotions but to their clarification or intellectual refinement. On this interpretation, tragedy helps audiences understand their emotional responses—to recognize what properly deserves pity and what genuinely warrants fear. Rather than draining emotions away, tragedy educates them, enabling spectators to feel appropriately in response to human suffering and danger. This cognitive interpretation aligns catharsis with Aristotle's broader philosophical emphasis on practical wisdom and the cultivation of virtuous emotional dispositions.

Other interpreters have proposed that catharsis describes a structural feature of tragedy itself rather than an effect on audiences. The plot of a well-constructed tragedy, they argue, accomplishes catharsis by purifying or clarifying the morally ambiguous situations that generate pity and fear. When Oedipus finally discovers the truth about his identity, the terrible events that seemed merely horrifying acquire meaning and inevitability. The catharsis occurs within the dramatic action, as confusion resolves into understanding, regardless of any psychological effect on spectators.

The interpretive controversy surrounding catharsis reflects a deeper uncertainty about Aristotle's purpose in the Poetics. Was he primarily describing tragedy's psychological effects on audiences, analyzing the formal structures that make tragedy effective as art, or defending poetry against philosophical criticism? Each interpretation of catharsis implies a different answer to these questions. Perhaps the persistence of the debate itself demonstrates that great theoretical concepts, like great works of art, resist final interpretive closure and continue generating productive disagreement across generations of readers.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp18-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Aristotle's concept of catharsis definitively refers to the emotional purgation that audiences experience during tragic performances." },
      { letter: "B", text: "Modern scholars have conclusively proven that catharsis describes structural features of tragic plots rather than audience psychology." },
      { letter: "C", text: "The meaning of Aristotle's catharsis has been interpreted in multiple, competing ways, reflecting deeper uncertainties about the purpose of the Poetics itself." },
      { letter: "D", text: "Plato's criticism of poetry has been definitively refuted by the emotional purgation theory of catharsis." },
      { letter: "E", text: "The cognitive interpretation of catharsis is clearly superior to all other interpretive approaches." },
    ],
    correctAnswer: "C",
    explanation: "The passage surveys multiple interpretations of catharsis (purgation, clarification, structural), emphasizes the ongoing scholarly debate, and concludes by connecting interpretive disagreements about catharsis to deeper questions about Aristotle's purpose in the Poetics. Answer C captures this focus on multiple competing interpretations and their broader implications.",
    difficulty: "medium",
    passageId: "rc-exp18-p3",
  },
  {
    id: "rc-exp18-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the traditional purgation interpretation of catharsis was seen as addressing Plato's concerns because it suggested that",
    answerChoices: [
      { letter: "A", text: "tragedy clarifies the intellectual content of emotional experiences" },
      { letter: "B", text: "dramatic plots resolve moral ambiguity through their structural development" },
      { letter: "C", text: "tragedy purges rather than inflames the passions, serving a beneficial social function" },
      { letter: "D", text: "audiences should avoid experiencing pity and fear altogether" },
      { letter: "E", text: "poetry has no significant emotional effects on spectators" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'The emotional purgation theory also addressed Plato's criticism that poetry dangerously inflames the passions; if tragedy actually purges emotions rather than simply stimulating them, then drama serves a beneficial social function rather than corrupting citizens.'",
    difficulty: "easy",
    passageId: "rc-exp18-p3",
  },
  {
    id: "rc-exp18-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, proponents of the cognitive interpretation of catharsis would most likely agree that",
    answerChoices: [
      { letter: "A", text: "tragedy's primary value lies in completely eliminating emotional responses to suffering" },
      { letter: "B", text: "watching tragedy helps spectators develop more appropriate emotional responses to human situations" },
      { letter: "C", text: "the effects of tragedy occur entirely within the dramatic plot structure" },
      { letter: "D", text: "Aristotle was primarily interested in defending poetry against Plato's attacks" },
      { letter: "E", text: "medical metaphors provide the best framework for understanding tragic effects" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the cognitive interpretation as holding that 'tragedy helps audiences understand their emotional responses—to recognize what properly deserves pity and what genuinely warrants fear' and that 'tragedy educates them, enabling spectators to feel appropriately.' This emphasis on developing appropriate emotional responses characterizes the cognitive view.",
    difficulty: "medium",
    passageId: "rc-exp18-p3",
  },
  {
    id: "rc-exp18-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Oedipus's discovery of his identity primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that the Oedipus story is the greatest example of Greek tragedy" },
      { letter: "B", text: "illustrate how catharsis might occur within the dramatic action itself rather than in audience psychology" },
      { letter: "C", text: "demonstrate the therapeutic benefits of emotional purgation" },
      { letter: "D", text: "criticize interpretations that focus on formal dramatic structure" },
      { letter: "E", text: "show that Aristotle's definition of tragedy is fundamentally flawed" },
    ],
    correctAnswer: "B",
    explanation: "The Oedipus example appears in the paragraph discussing 'catharsis as a structural feature of tragedy itself rather than an effect on audiences.' The discovery illustrates how 'confusion resolves into understanding' within the dramatic action, supporting the structural interpretation where 'catharsis occurs within the dramatic action.'",
    difficulty: "medium",
    passageId: "rc-exp18-p3",
  },
  {
    id: "rc-exp18-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the ongoing scholarly debate about catharsis can best be described as",
    answerChoices: [
      { letter: "A", text: "frustrated by the failure to reach definitive conclusions" },
      { letter: "B", text: "dismissive of all interpretations as equally misguided" },
      { letter: "C", text: "appreciative of the debate as intellectually productive rather than merely unresolved" },
      { letter: "D", text: "convinced that the purgation theory will eventually be proven correct" },
      { letter: "E", text: "indifferent to the theoretical implications of different interpretations" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'great theoretical concepts, like great works of art, resist final interpretive closure and continue generating productive disagreement across generations of readers.' This suggests the author views the ongoing debate as valuable and generative rather than as a frustrating failure to resolve an answerable question.",
    difficulty: "medium",
    passageId: "rc-exp18-p3",
  },
  {
    id: "rc-exp18-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A concept is introduced, a single definitive interpretation is provided, and that interpretation is defended against all objections." },
      { letter: "B", text: "A concept is introduced, multiple competing interpretations are presented chronologically, and a reflection on the debate's broader significance concludes the discussion." },
      { letter: "C", text: "A historical figure is criticized, alternative theories are rejected, and a new approach is proposed and defended." },
      { letter: "D", text: "A scientific hypothesis is stated, experiments testing it are described, and the hypothesis is confirmed." },
      { letter: "E", text: "Two opposing views are contrasted, one is shown to be correct, and practical applications are discussed." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces the debate about catharsis, presents the traditional purgation interpretation, then twentieth-century alternatives (cognitive and structural interpretations), and concludes by reflecting on how interpretive disagreements connect to deeper questions about Aristotle's purpose. This matches the structure described in answer B.",
    difficulty: "hard",
    passageId: "rc-exp18-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - DECISION-MAKING UNDER UNCERTAINTY
// ============================================

const passage4 = `Classical economic theory assumed that human beings are rational agents who evaluate choices by calculating expected utilities and selecting options that maximize their welfare. This idealized conception of Homo economicus—economic man—presumed that people possess consistent preferences, process all available information, and make decisions according to logical rules. Beginning in the 1970s, however, psychologists Daniel Kahneman and Amos Tversky demonstrated through rigorous experimental research that actual human decision-making systematically deviates from the rational model, particularly when choices involve uncertainty and risk.

Kahneman and Tversky's prospect theory, developed as an alternative to expected utility theory, describes how people actually evaluate potential gains and losses. A fundamental finding is that losses loom larger than equivalent gains—a phenomenon they termed "loss aversion." Experimental subjects consistently required potential gains of roughly twice the magnitude of potential losses before accepting gambles with equal probabilities of each outcome. This asymmetry helps explain numerous puzzling economic behaviors, from the reluctance of investors to sell losing stocks to the disproportionate weight that consumers place on avoiding losses relative to acquiring gains.

The research also identified systematic biases in how people estimate probabilities. The "availability heuristic" leads people to judge events as more likely when examples come readily to mind, causing overestimation of dramatic risks like airplane crashes while underestimating mundane but statistically more dangerous activities like driving. Similarly, "anchoring effects" occur when initial information disproportionately influences subsequent judgments, even when that information is arbitrary or irrelevant. Asked to estimate the percentage of African nations in the United Nations after spinning a wheel that landed on either 10 or 65, subjects given the higher anchor produced significantly higher estimates, despite the obvious irrelevance of the wheel's result.

Critics have challenged the behavioral economics paradigm on several grounds. Some argue that laboratory experiments with small stakes and artificial scenarios do not accurately predict behavior in real-world contexts where people have stronger incentives to decide carefully. Others contend that apparent irrationalities often reflect reasonable responses to the complexity and uncertainty of actual decision environments, where gathering complete information would be prohibitively costly. From this perspective, heuristics that sometimes produce biased judgments may nonetheless perform well on average, efficiently approximating optimal choices without the computational demands of fully rational analysis.

The policy implications of behavioral research remain contested. Advocates of "libertarian paternalism" propose that institutions should structure choices to nudge people toward better decisions while preserving freedom to choose otherwise—for example, making retirement savings enrollment automatic while allowing opt-out. Critics worry that such interventions assume policymakers know what choices individuals should make, potentially overriding diverse preferences and values. Moreover, if cognitive biases affect policymakers as well as citizens, choice architecture designed by biased officials might compound rather than correct systematic errors in judgment.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp18-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "demonstrate that classical economic theory provides the most accurate model of human decision-making" },
      { letter: "B", text: "argue definitively that libertarian paternalism is the correct policy approach to cognitive biases" },
      { letter: "C", text: "describe behavioral economics research on decision-making under uncertainty while presenting both its findings and criticisms of the paradigm" },
      { letter: "D", text: "prove that all human decision-making is entirely irrational and unpredictable" },
      { letter: "E", text: "explain why heuristics should never be used in any decision-making context" },
    ],
    correctAnswer: "C",
    explanation: "The passage introduces classical theory, explains how Kahneman and Tversky's research challenged it, describes key findings like loss aversion and probability biases, presents criticisms of behavioral economics, and discusses contested policy implications. Answer C captures this balanced presentation of the field's contributions and the debates surrounding it.",
    difficulty: "medium",
    passageId: "rc-exp18-p4",
  },
  {
    id: "rc-exp18-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, loss aversion refers to the finding that",
    answerChoices: [
      { letter: "A", text: "people are completely risk-neutral when evaluating potential gains and losses" },
      { letter: "B", text: "losses have a greater psychological impact than equivalent gains" },
      { letter: "C", text: "dramatic events are easier to recall than mundane events" },
      { letter: "D", text: "initial information has no effect on subsequent judgments" },
      { letter: "E", text: "investors are eager to sell losing stocks to minimize their losses" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly defines loss aversion: 'losses loom larger than equivalent gains' and notes that 'subjects consistently required potential gains of roughly twice the magnitude of potential losses before accepting gambles with equal probabilities of each outcome.'",
    difficulty: "easy",
    passageId: "rc-exp18-p4",
  },
  {
    id: "rc-exp18-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, critics who argue that laboratory experiments may not predict real-world behavior would most likely contend that",
    answerChoices: [
      { letter: "A", text: "cognitive biases affect all decisions equally regardless of context" },
      { letter: "B", text: "people may make more careful decisions when facing significant real-world consequences" },
      { letter: "C", text: "loss aversion is even stronger in real-world settings than in laboratory experiments" },
      { letter: "D", text: "anchoring effects are more powerful when stakes are low" },
      { letter: "E", text: "the availability heuristic only operates in experimental contexts" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics argue 'laboratory experiments with small stakes and artificial scenarios do not accurately predict behavior in real-world contexts where people have stronger incentives to decide carefully.' This implies that with higher stakes, people might make more careful, less biased decisions.",
    difficulty: "medium",
    passageId: "rc-exp18-p4",
  },
  {
    id: "rc-exp18-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author describes the experiment with African nations and the spinning wheel primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that people accurately estimate probabilities in experimental settings" },
      { letter: "B", text: "provide a concrete illustration of how anchoring effects influence judgment" },
      { letter: "C", text: "criticize the methodology of behavioral economics research" },
      { letter: "D", text: "explain the concept of loss aversion" },
      { letter: "E", text: "argue that randomness plays no role in human decision-making" },
    ],
    correctAnswer: "B",
    explanation: "The wheel experiment is introduced immediately after defining anchoring effects as occurring 'when initial information disproportionately influences subsequent judgments.' The experiment exemplifies this phenomenon, showing how an obviously irrelevant number nonetheless affected participants' estimates.",
    difficulty: "medium",
    passageId: "rc-exp18-p4",
  },
  {
    id: "rc-exp18-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's presentation of libertarian paternalism can best be characterized as",
    answerChoices: [
      { letter: "A", text: "enthusiastically endorsing it as the solution to cognitive biases" },
      { letter: "B", text: "dismissively rejecting it as entirely without merit" },
      { letter: "C", text: "balanced, presenting both its rationale and significant criticisms" },
      { letter: "D", text: "confused about its basic principles and applications" },
      { letter: "E", text: "nostalgic for earlier policy approaches" },
    ],
    correctAnswer: "C",
    explanation: "The author presents libertarian paternalism's proposals (structuring choices to 'nudge people toward better decisions') along with substantive criticisms (assuming policymakers know what's best, concerns about policymaker biases). This balanced treatment neither endorses nor dismisses the approach.",
    difficulty: "medium",
    passageId: "rc-exp18-p4",
  },
  {
    id: "rc-exp18-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the criticism that cognitive biases might affect policymakers as much as citizens?",
    answerChoices: [
      { letter: "A", text: "Studies show that financial experts demonstrate the same loss aversion patterns as ordinary investors when making personal investment decisions." },
      { letter: "B", text: "Laboratory experiments consistently predict real-world behavior with high accuracy." },
      { letter: "C", text: "People with advanced degrees in economics never display anchoring effects." },
      { letter: "D", text: "Automatic retirement savings enrollment programs significantly increase participation rates." },
      { letter: "E", text: "Citizens generally prefer that policymakers make decisions for them on complex matters." },
    ],
    correctAnswer: "A",
    explanation: "The criticism holds that 'cognitive biases affect policymakers as well as citizens' and that biased officials might compound systematic errors. Evidence that even financial experts—who might be expected to advise or serve as policymakers—display the same biases as ordinary people would strongly support this concern by showing that expertise does not eliminate cognitive biases.",
    difficulty: "hard",
    passageId: "rc-exp18-p4",
  },
];

// Export all RC questions from Set 18
export const rcQuestionsExpSet18: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet18 = {
  passage1: { id: "rc-exp18-p1", content: passage1, topic: "law", title: "Securities Regulation and Insider Trading" },
  passage2: { id: "rc-exp18-p2", content: passage2, topic: "natural-sciences", title: "Biodiversity and Extinction Rates" },
  passage3: { id: "rc-exp18-p3", content: passage3, topic: "humanities", title: "Ancient Greek Tragedy and Catharsis" },
  passage4: { id: "rc-exp18-p4", content: passage4, topic: "social-sciences", title: "Decision-Making Under Uncertainty" },
};
