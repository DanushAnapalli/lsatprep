// Reading Comprehension Questions - Set 9 (History)
import { Question } from "../lsat-types";

// Passage 1: American History - Reconstruction Era
const passage1 = `The conventional narrative of Reconstruction presents it as a failed experiment in racial equality, terminated by the Compromise of 1877 and the withdrawal of federal troops from the South. This interpretation, dominant for much of the twentieth century, emphasized the supposed incompetence of newly enfranchised Black voters and their "carpetbagger" allies while portraying white Southern resistance as understandable, even inevitable. Such accounts fundamentally misrepresent both the achievements of Reconstruction and the deliberate violence that destroyed it.

Recent historiography has revealed Reconstruction as a revolutionary period of democratic experimentation. Between 1867 and 1877, Southern states ratified new constitutions that established public education systems, reformed tax codes to distribute burdens more equitably, and guaranteed civil rights regardless of race. Black legislators, many formerly enslaved, helped craft these progressive frameworks while navigating relentless white supremacist opposition. Rather than demonstrating incapacity, these officials often exhibited greater commitment to democratic ideals than their white contemporaries.

The overthrow of Reconstruction governments resulted not from inherent flaws but from systematic terror campaigns. White supremacist paramilitary organizations—the White League in Louisiana, the Red Shirts in South Carolina, and most notoriously the Ku Klux Klan—employed assassination, torture, and economic coercion to suppress Black political participation. The Colfax Massacre of 1873, in which over 150 Black men were murdered while attempting to defend a courthouse, exemplifies the scale of violence deployed against Reconstruction. Federal authorities prosecuted few perpetrators, and the Supreme Court systematically narrowed constitutional protections that might have provided recourse.

The failure of Reconstruction thus represents less the impossibility of multiracial democracy than the consequences of insufficient commitment to defending it. Northern Republicans increasingly prioritized reconciliation with white Southerners over protection of Black citizens' rights. Economic depression in 1873 shifted political attention away from Southern affairs. The contested election of 1876, resolved through a political bargain that awarded the presidency to Republican Rutherford B. Hayes in exchange for ending federal oversight of Southern states, merely formalized an abandonment already underway.

Understanding Reconstruction's true character requires recognizing that its defeat was neither predetermined nor evidence of Black incapacity, but rather the result of deliberate choices to tolerate white supremacist violence and abandon constitutional commitments to equality. The "Redemption" that white Southerners celebrated was achieved through terrorism and enabled by Northern complicity.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set9-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Reconstruction failed because newly enfranchised Black voters lacked the capacity for democratic governance" },
      { letter: "B", text: "Reconstruction was a revolutionary democratic experiment whose failure resulted from systematic violence and Northern abandonment rather than inherent flaws" },
      { letter: "C", text: "The Compromise of 1877 was the sole cause of Reconstruction's collapse" },
      { letter: "D", text: "Northern Republicans were primarily responsible for protecting Black citizens' rights throughout Reconstruction" },
      { letter: "E", text: "White Southern resistance to Reconstruction was universally condemned by contemporary observers" },
    ],
    correctAnswer: "B",
    explanation: "The passage challenges conventional narratives by presenting Reconstruction as a revolutionary democratic period whose failure resulted from deliberate violence and Northern abandonment, not from inherent problems or Black incapacity.",
    difficulty: "medium",
    passageId: "rc9-p1",
  },
  {
    id: "rc-set9-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions the Colfax Massacre primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all Reconstruction governments were violent" },
      { letter: "B", text: "illustrate the scale of white supremacist violence used to overthrow Reconstruction" },
      { letter: "C", text: "demonstrate that federal authorities effectively prosecuted racial violence" },
      { letter: "D", text: "show that Black citizens did not resist white supremacist organizations" },
      { letter: "E", text: "prove that Northern Republicans supported white Southern resistance" },
    ],
    correctAnswer: "B",
    explanation: "The Colfax Massacre is presented as an example that 'exemplifies the scale of violence deployed against Reconstruction,' supporting the passage's argument about systematic terror campaigns.",
    difficulty: "easy",
    passageId: "rc9-p1",
  },
  {
    id: "rc-set9-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, recent historiography of Reconstruction would most likely characterize the conventional narrative as",
    answerChoices: [
      { letter: "A", text: "an accurate representation supported by all available evidence" },
      { letter: "B", text: "a deliberate fabrication with no basis in historical events" },
      { letter: "C", text: "a misrepresentation that obscures Reconstruction's achievements and the violence that destroyed it" },
      { letter: "D", text: "too sympathetic to Northern Republicans' role in protecting Black rights" },
      { letter: "E", text: "correct in its assessment of Black legislators' incompetence" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that conventional narratives 'fundamentally misrepresent both the achievements of Reconstruction and the deliberate violence that destroyed it,' which recent historiography has revealed.",
    difficulty: "medium",
    passageId: "rc9-p1",
  },
  {
    id: "rc-set9-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, new state constitutions during Reconstruction included which of the following reforms?",
    answerChoices: [
      { letter: "A", text: "Abolition of all forms of taxation" },
      { letter: "B", text: "Establishment of public education systems" },
      { letter: "C", text: "Prohibition of Black political participation" },
      { letter: "D", text: "Elimination of voting rights for former Confederates" },
      { letter: "E", text: "Mandatory integration of all public facilities" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that new constitutions 'established public education systems, reformed tax codes to distribute burdens more equitably, and guaranteed civil rights regardless of race.'",
    difficulty: "easy",
    passageId: "rc9-p1",
  },
  {
    id: "rc-set9-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the term 'Redemption' as used by white Southerners can best be described as",
    answerChoices: [
      { letter: "A", text: "neutral acceptance of its historical accuracy" },
      { letter: "B", text: "critical recognition that it euphemizes terrorism and Northern complicity" },
      { letter: "C", text: "enthusiastic endorsement of the concept" },
      { letter: "D", text: "confusion about its historical meaning" },
      { letter: "E", text: "indifference to the terminology used" },
    ],
    correctAnswer: "B",
    explanation: "The passage places 'Redemption' in quotation marks and immediately states it 'was achieved through terrorism and enabled by Northern complicity,' indicating critical rejection of the euphemistic term.",
    difficulty: "medium",
    passageId: "rc9-p1",
  },
];

// Passage 2: European History - Scientific Revolution
const passage2 = `Historians have long debated whether the Scientific Revolution of the sixteenth and seventeenth centuries represented a decisive break with medieval thought or a gradual evolution of existing intellectual traditions. The discontinuity thesis, associated with Alexandre Koyré and others, emphasizes the revolutionary transformation of fundamental concepts—the shift from a finite, geocentric cosmos to an infinite, heliocentric universe; from Aristotelian teleology to mechanical causation; from qualitative to quantitative natural philosophy. Yet this interpretation risks overstating the novelty of early modern science while obscuring its debts to medieval predecessors.

Medieval natural philosophers made substantial contributions that enabled later developments. The condemnation of 219 propositions by the Bishop of Paris in 1277, though intended to restrict philosophical speculation, paradoxically liberated scholars to consider hypothetical scenarios previously deemed impossible. Could God create multiple worlds? Could he create a vacuum? Such thought experiments, initially theological, fostered modes of reasoning that proved scientifically productive. Medieval scholars also developed mathematical techniques for analyzing motion and established institutional frameworks—universities, libraries, scholarly networks—that early modern scientists inherited.

Moreover, the Scientific Revolution was neither as unified nor as sudden as the term suggests. Practitioners in different fields proceeded from divergent assumptions and employed incompatible methods. William Harvey's anatomical investigations bore little resemblance to Johannes Kepler's mathematical astronomy; Robert Boyle's experimental chemistry differed fundamentally from René Descartes's rationalist physics. These investigators shared no common methodology, subscribed to no single philosophical program, and rarely identified themselves as engaged in a collective revolutionary enterprise. The coherence we perceive reflects historians' retrospective organization more than contemporaries' experience.

The relationship between the Scientific Revolution and broader social transformations remains contested. Some scholars emphasize connections to commercial expansion, exploration, and technological innovation—the development of navigational instruments, the mining industry's practical challenges, the printing press's dissemination of knowledge. Others argue that early modern science remained largely divorced from economic concerns, pursued by gentlemen-scholars as elite intellectual activity. The assumption that science and technology necessarily advance together may constitute a modern prejudice poorly suited to understanding seventeenth-century contexts.

What seems clear is that the emergence of modern science involved neither clean breaks with the past nor simple linear progress, but rather complex negotiations between inherited frameworks and novel empirical findings. Early modern natural philosophers simultaneously rejected and adapted medieval traditions, producing knowledge that was revolutionary precisely because it remained engaged with, rather than wholly separate from, earlier ways of understanding nature.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set9-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central claim of the passage?",
    answerChoices: [
      { letter: "A", text: "The Scientific Revolution represented a complete break from all medieval thought" },
      { letter: "B", text: "Medieval natural philosophers made no contributions to early modern science" },
      { letter: "C", text: "The Scientific Revolution involved complex transformations that both broke from and built upon medieval traditions, and was less unified than often assumed" },
      { letter: "D", text: "All early modern scientists followed identical methodologies and shared common goals" },
      { letter: "E", text: "Science and technology have always advanced together throughout history" },
    ],
    correctAnswer: "C",
    explanation: "The passage argues that the Scientific Revolution was neither a complete break nor purely continuous, but involved complex negotiations with medieval traditions, and challenges the notion of it being a unified movement.",
    difficulty: "medium",
    passageId: "rc9-p2",
  },
  {
    id: "rc-set9-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the 1277 condemnation of propositions by the Bishop of Paris primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that the Church consistently opposed scientific inquiry" },
      { letter: "B", text: "illustrate how medieval developments paradoxically enabled later scientific reasoning" },
      { letter: "C", text: "argue that theological concerns had no influence on natural philosophy" },
      { letter: "D", text: "prove that medieval thought was entirely incompatible with science" },
      { letter: "E", text: "show that all medieval scholars rejected hypothetical reasoning" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the 1277 condemnation as a paradoxical example where restricting speculation actually 'fostered modes of reasoning that proved scientifically productive,' supporting the thesis about medieval contributions.",
    difficulty: "medium",
    passageId: "rc9-p2",
  },
  {
    id: "rc-set9-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that the perception of the Scientific Revolution as a unified movement primarily reflects",
    answerChoices: [
      { letter: "A", text: "contemporaries' explicit identification of themselves as revolutionaries" },
      { letter: "B", text: "the universal adoption of a single scientific methodology" },
      { letter: "C", text: "historians' retrospective organization rather than actual coherence among practitioners" },
      { letter: "D", text: "the complete agreement among early modern scientists about their goals" },
      { letter: "E", text: "the immediate recognition by all scholars that fundamental changes were occurring" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'the coherence we perceive reflects historians' retrospective organization more than contemporaries' experience,' after describing the diversity among practitioners.",
    difficulty: "medium",
    passageId: "rc9-p2",
  },
  {
    id: "rc-set9-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, medieval scholars contributed to later scientific development by",
    answerChoices: [
      { letter: "A", text: "completely rejecting all theological considerations" },
      { letter: "B", text: "establishing institutional frameworks such as universities and scholarly networks" },
      { letter: "C", text: "proving that Aristotelian physics was entirely correct" },
      { letter: "D", text: "preventing any form of mathematical analysis" },
      { letter: "E", text: "eliminating all forms of speculative reasoning" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly lists 'universities, libraries, scholarly networks' as institutional frameworks that 'early modern scientists inherited' from medieval scholars.",
    difficulty: "easy",
    passageId: "rc9-p2",
  },
  {
    id: "rc-set9-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the author would most likely agree that the relationship between early modern science and economic concerns",
    answerChoices: [
      { letter: "A", text: "has been definitively established by historians" },
      { letter: "B", text: "was obviously central to all scientific practitioners" },
      { letter: "C", text: "remains contested and may differ from modern assumptions about science-technology connections" },
      { letter: "D", text: "was completely absent during the Scientific Revolution" },
      { letter: "E", text: "can be easily determined through contemporary documents" },
    ],
    correctAnswer: "C",
    explanation: "The passage states this relationship 'remains contested' and suggests that assumptions about science-technology advancement together 'may constitute a modern prejudice poorly suited to understanding seventeenth-century contexts.'",
    difficulty: "hard",
    passageId: "rc9-p2",
  },
];

// Passage 3: Ancient History - Roman Republic's Transformation
const passage3 = `The transformation of the Roman Republic into an autocratic empire has traditionally been attributed to the ambitions of individual strong men—Julius Caesar's monarchical aspirations, Augustus's consolidation of power—whose personal characteristics supposedly drove constitutional change. This "great man" interpretation, however, obscures deeper structural problems that made republican governance increasingly untenable by the first century BCE and that no amount of personal virtue could have resolved.

The Republic's constitution, designed for a city-state governing a territory of perhaps 10,000 square kilometers, proved inadequate for an empire spanning millions. Political participation required physical presence in Rome, effectively excluding citizens who lived elsewhere and concentrating power among urban residents who could be mobilized by demagogues or bought by ambitious politicians. The Senate, composed of former magistrates, exercised significant authority without formal legal basis, relying on custom and prestige that eroded as new men lacking traditional pedigrees gained influence through military success.

Military transformation exacerbated these tensions. The Marian reforms, initiated in 107 BCE, professionalized the army by recruiting landless citizens who previously had been excluded from service. These soldiers looked to their generals rather than the Senate for rewards—land grants, bonuses, political support—creating personal armies loyal to individual commanders. When constitutional mechanisms failed to provide veterans with promised benefits, generals like Sulla and Caesar could threaten or employ military force against the state itself. The Republic thus generated the instruments of its own destruction.

Economic inequality further destabilized the system. Conquest brought enormous wealth to Rome, but its distribution was grossly uneven. Senators enriched themselves through provincial exploitation and acquisition of vast estates worked by enslaved captives, while small farmers—the traditional backbone of Roman society—faced ruin as cheap grain imports and large-scale slave labor rendered their holdings unprofitable. The dispossessed flocked to Rome, creating an urban proletariat vulnerable to populist manipulation but also generating legitimate demands for land redistribution that threatened elite interests.

Reform efforts consistently failed because those with power to enact changes were precisely those who benefited from existing arrangements. The Gracchi brothers' attempts at land reform in the 130s-120s BCE ended in violence and their deaths. Sulla's constitutional reforms in the 80s BCE aimed at strengthening senatorial authority but proved temporary. The Senate's inability to address fundamental problems—whether from short-sightedness, corruption, or structural constraints—meant that extra-constitutional solutions became increasingly attractive. Augustus's eventual settlement succeeded not because it represented a betrayal of republican principles, but because those principles had already ceased to function effectively.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set9-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Julius Caesar single-handedly destroyed the Roman Republic through his personal ambitions" },
      { letter: "B", text: "The Roman Republic's collapse resulted from structural problems rather than merely individual ambitions" },
      { letter: "C", text: "The Senate successfully addressed all challenges facing the late Republic" },
      { letter: "D", text: "Military reforms had no significant impact on Republican governance" },
      { letter: "E", text: "Economic inequality did not contribute to the Republic's transformation" },
    ],
    correctAnswer: "B",
    explanation: "The passage argues against 'great man' interpretations by demonstrating that 'deeper structural problems' made republican governance 'increasingly untenable' and that these problems could not be resolved through personal virtue alone.",
    difficulty: "medium",
    passageId: "rc9-p3",
  },
  {
    id: "rc-set9-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses the Marian military reforms primarily in order to",
    answerChoices: [
      { letter: "A", text: "praise Marius's strategic genius" },
      { letter: "B", text: "explain how professionalization created personal armies that threatened the state" },
      { letter: "C", text: "argue that military changes strengthened the Senate's authority" },
      { letter: "D", text: "demonstrate that soldiers remained loyal to constitutional principles" },
      { letter: "E", text: "show that landless citizens should have remained excluded from service" },
    ],
    correctAnswer: "B",
    explanation: "The Marian reforms are presented as creating soldiers who 'looked to their generals rather than the Senate,' enabling commanders to threaten the state with military force—illustrating how structural changes undermined the Republic.",
    difficulty: "easy",
    passageId: "rc9-p3",
  },
  {
    id: "rc-set9-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, reform efforts during the late Republic consistently failed primarily because",
    answerChoices: [
      { letter: "A", text: "no one recognized that problems existed" },
      { letter: "B", text: "those with power to enact changes benefited from existing arrangements" },
      { letter: "C", text: "all proposed reforms were obviously unworkable" },
      { letter: "D", text: "foreign enemies prevented internal reforms" },
      { letter: "E", text: "the Roman people unanimously opposed all changes" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'reform efforts consistently failed because those with power to enact changes were precisely those who benefited from existing arrangements,' and provides examples like land reform threatening elite interests.",
    difficulty: "medium",
    passageId: "rc9-p3",
  },
  {
    id: "rc-set9-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, which of the following contributed to economic inequality in the late Republic?",
    answerChoices: [
      { letter: "A", text: "Equal distribution of conquest wealth among all citizens" },
      { letter: "B", text: "Senators enriching themselves through provincial exploitation and estate acquisition" },
      { letter: "C", text: "Prohibition of slave labor throughout Roman territories" },
      { letter: "D", text: "Government subsidies that made small farmers extremely wealthy" },
      { letter: "E", text: "Elimination of all grain imports to Rome" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'senators enriched themselves through provincial exploitation and acquisition of vast estates worked by enslaved captives' while small farmers faced ruin, illustrating uneven wealth distribution.",
    difficulty: "easy",
    passageId: "rc9-p3",
  },
  {
    id: "rc-set9-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's characterization of Augustus's settlement as succeeding because republican principles 'had already ceased to function effectively' suggests an attitude of",
    answerChoices: [
      { letter: "A", text: "moral condemnation of Augustus's actions" },
      { letter: "B", text: "recognition that structural failure necessitated new arrangements" },
      { letter: "C", text: "enthusiasm for autocratic government" },
      { letter: "D", text: "nostalgia for an idealized republican past" },
      { letter: "E", text: "indifference to constitutional forms" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Augustus's settlement not as betrayal but as a response to structural dysfunction, reflecting an analytical rather than moralistic approach that emphasizes systemic causes over individual virtue or villainy.",
    difficulty: "hard",
    passageId: "rc9-p3",
  },
];

// Passage 4: Ancient History - Historical Methodology and Evidence
const passage4 = `The study of ancient history confronts methodological challenges fundamentally different from those facing historians of more recent periods. The evidentiary base is fragmentary, often mediated through later sources of uncertain reliability, and systematically biased toward elite male perspectives. Yet these limitations, properly understood, need not render ancient history impossibly speculative or reducible to creative fiction. Rather, they require rigorous attention to what can and cannot be legitimately inferred from available evidence.

Consider the challenges of reconstructing ancient social history. Literary sources—our most abundant evidence—were produced by and for a narrow segment of society: educated, usually wealthy, predominantly male authors writing for similar audiences. Their accounts systematically marginalize or ignore the experiences of women, enslaved persons, and the poor, who constituted the vast majority of ancient populations. When these groups appear at all, they are typically filtered through elite prejudices and stereotypes. Simply reading sources "against the grain" to extract information about subordinate groups requires careful attention to rhetorical strategies and ideological assumptions that shape even apparently factual claims.

Archaeological evidence offers different insights but presents its own interpretive difficulties. Material remains do not speak for themselves; pottery sherds, architectural foundations, and burial goods require interpretation that inevitably reflects modern concerns and assumptions. Moreover, archaeological preservation is uneven, favoring durable materials like stone and ceramics while organic materials—textiles, wooden objects, most foodstuffs—typically decay. Elite sites are more likely to be preserved and excavated than humble dwellings. Consequently, the material record, like literary sources, skews toward the experiences of the privileged.

Comparative evidence from anthropology and sociology has sometimes been invoked to fill gaps in ancient evidence, but such analogies are methodologically hazardous. That certain social patterns appear frequently across cultures does not guarantee they existed in any particular ancient society. Every culture develops within specific historical circumstances that shape its institutions in unique ways. Using cross-cultural patterns to reconstruct ancient practices risks imposing modern theoretical frameworks onto societies that may have operated according to fundamentally different principles.

Despite these challenges, responsible ancient history remains possible through methodological rigor. Historians must be explicit about evidentiary limitations, carefully distinguish what sources actually demonstrate from what they suggest or what we infer, and acknowledge alternative interpretations where evidence permits multiple readings. The fragmentary nature of ancient evidence means certainty is often unattainable, but this should encourage intellectual humility rather than either excessive skepticism that dismisses all reconstruction as hopeless or credulous acceptance of ancient sources at face value. Ancient history's methodological constraints, properly navigated, can produce sophisticated understandings of past societies even while acknowledging the inevitable gaps in our knowledge.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set9-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that ancient history is impossible and should be abandoned" },
      { letter: "B", text: "describe methodological challenges of ancient history while arguing that rigorous study remains possible despite limitations" },
      { letter: "C", text: "demonstrate that literary sources provide completely reliable information about ancient societies" },
      { letter: "D", text: "prove that archaeological evidence is superior to all other forms of historical evidence" },
      { letter: "E", text: "advocate uncritical acceptance of ancient sources at face value" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically describes challenges in ancient historical study (fragmentary evidence, elite bias, interpretive difficulties) while maintaining that 'responsible ancient history remains possible through methodological rigor.'",
    difficulty: "medium",
    passageId: "rc9-p4",
  },
  {
    id: "rc-set9-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses the preservation biases in archaeological evidence primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that archaeology should not be used in ancient historical study" },
      { letter: "B", text: "illustrate how material evidence, like literary sources, systematically favors elite experiences" },
      { letter: "C", text: "prove that stone artifacts are more historically significant than organic materials" },
      { letter: "D", text: "demonstrate that archaeological methods are completely objective" },
      { letter: "E", text: "show that all ancient sites have been thoroughly excavated" },
    ],
    correctAnswer: "B",
    explanation: "After discussing archaeological preservation favoring durable materials and elite sites, the passage concludes that 'the material record, like literary sources, skews toward the experiences of the privileged.'",
    difficulty: "medium",
    passageId: "rc9-p4",
  },
  {
    id: "rc-set9-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that using cross-cultural anthropological patterns to reconstruct ancient practices is problematic because",
    answerChoices: [
      { letter: "A", text: "anthropology has no relevance to historical study" },
      { letter: "B", text: "all cultures are identical in their social patterns" },
      { letter: "C", text: "such analogies may impose inappropriate frameworks on societies with different principles" },
      { letter: "D", text: "ancient societies left no evidence that requires interpretation" },
      { letter: "E", text: "comparative evidence always provides certain conclusions" },
    ],
    correctAnswer: "C",
    explanation: "The passage warns that using cross-cultural patterns 'risks imposing modern theoretical frameworks onto societies that may have operated according to fundamentally different principles,' emphasizing each culture's unique historical circumstances.",
    difficulty: "hard",
    passageId: "rc9-p4",
  },
  {
    id: "rc-set9-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, literary sources from ancient societies were typically produced by",
    answerChoices: [
      { letter: "A", text: "a representative cross-section of the entire population" },
      { letter: "B", text: "educated, usually wealthy, predominantly male authors" },
      { letter: "C", text: "enslaved persons documenting their experiences" },
      { letter: "D", text: "women recording social history" },
      { letter: "E", text: "poor laborers writing about daily life" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that literary sources 'were produced by and for a narrow segment of society: educated, usually wealthy, predominantly male authors writing for similar audiences.'",
    difficulty: "easy",
    passageId: "rc9-p4",
  },
  {
    id: "rc-set9-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the possibility of ancient historical reconstruction can best be characterized as",
    answerChoices: [
      { letter: "A", text: "completely pessimistic, believing reconstruction is impossible" },
      { letter: "B", text: "uncritically optimistic, believing all questions can be definitively answered" },
      { letter: "C", text: "cautiously optimistic, believing rigorous methodology enables sophisticated understanding despite limitations" },
      { letter: "D", text: "indifferent to methodological concerns" },
      { letter: "E", text: "hostile toward all forms of ancient evidence" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'responsible ancient history remains possible through methodological rigor' and can 'produce sophisticated understandings' while acknowledging limitations, reflecting measured optimism about the enterprise.",
    difficulty: "medium",
    passageId: "rc9-p4",
  },
];

export const rcQuestionsSet9: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
