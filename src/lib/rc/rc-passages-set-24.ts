// Reading Comprehension Expansion Set 24
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - HABEAS CORPUS AND DETENTION RIGHTS
// ============================================

const passage1 = `The writ of habeas corpus, often described as the "Great Writ," represents one of the most fundamental safeguards against arbitrary detention in Anglo-American law. Originating in medieval England, this legal mechanism requires the government to justify the detention of any individual before a court. The phrase itself, Latin for "you shall have the body," commands the custodian of a detained person to bring them before a judge who can evaluate whether the detention is lawful. This centuries-old remedy has evolved through constitutional crises, wars, and changing conceptions of executive power.

The United States Constitution explicitly protects habeas corpus in Article I, Section 9, which provides that the writ "shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it." This placement in Article I, which defines congressional powers, reflects the Framers' understanding that habeas corpus primarily constrains legislative and executive overreach. President Lincoln's controversial suspension of the writ during the Civil War tested these boundaries, with Chief Justice Taney arguing in Ex parte Merryman that only Congress possessed suspension authority—a position Lincoln effectively ignored in the name of wartime necessity.

The twentieth century witnessed significant expansions and contractions of habeas corpus rights. The Supreme Court's 1953 decision in Brown v. Allen established that federal courts could review state court convictions through habeas corpus, dramatically expanding federal judicial oversight of state criminal justice systems. However, the Antiterrorism and Effective Death Penalty Act of 1996 (AEDPA) substantially restricted prisoners' ability to seek federal habeas review, imposing strict filing deadlines and limiting successive petitions. AEDPA reflected congressional concerns about lengthy delays in capital cases and what critics characterized as abuse of the habeas remedy.

The post-September 11 era has generated the most contentious habeas corpus debates since the Civil War. The Bush administration initially argued that detainees at Guantanamo Bay lacked any habeas rights because the naval base lay outside sovereign U.S. territory. In Boumediene v. Bush (2008), the Supreme Court rejected this argument, holding that constitutional habeas protections extended to Guantanamo detainees and that the limited review procedures Congress had substituted were inadequate. The decision reaffirmed that courts, not the political branches, bear ultimate responsibility for preventing unlawful detention.

Contemporary debates about habeas corpus extend beyond terrorism cases to encompass immigration detention, pretrial incarceration, and civil commitment. Critics argue that current habeas procedures provide insufficient protection for many categories of detainees, particularly immigrants held for extended periods during removal proceedings. Defenders of existing restrictions contend that overly broad habeas review undermines legitimate governmental interests and floods courts with repetitive claims. The balance between security and liberty that habeas corpus mediates remains as contested today as at the nation's founding.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp24-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The writ of habeas corpus has been consistently applied without modification since its medieval origins in England." },
      { letter: "B", text: "Habeas corpus has evolved as a fundamental protection against arbitrary detention, with its scope expanding and contracting through constitutional crises while remaining central to debates about governmental power and individual liberty." },
      { letter: "C", text: "The Supreme Court's decision in Boumediene v. Bush definitively resolved all constitutional questions regarding habeas corpus rights." },
      { letter: "D", text: "Congress should abolish all restrictions on habeas corpus petitions imposed by the Antiterrorism and Effective Death Penalty Act." },
      { letter: "E", text: "President Lincoln's suspension of habeas corpus during the Civil War was unconstitutional and should never have occurred." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces habeas corpus from its medieval origins through constitutional protections, Civil War controversies, twentieth-century expansions and restrictions, post-9/11 debates, and contemporary issues. Answer B captures this comprehensive treatment of habeas corpus as an evolving protection that remains contested. Answer A is incorrect because the passage emphasizes how the writ has changed over time. Answer C is incorrect because the passage notes that debates continue. Answers D and E express advocacy positions the author does not take.",
    wrongAnswerExplanations: {
      A: "The passage explicitly discusses how habeas corpus has evolved and changed through various historical periods, not that it has been consistently applied without modification.",
      C: "The passage presents Boumediene as one important decision but concludes by noting that contemporary debates continue across multiple contexts.",
      D: "The author presents both critics and defenders of AEDPA without advocating for abolishing its restrictions.",
      E: "The passage presents Lincoln's suspension as 'controversial' but does not take a definitive position on its constitutionality."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p1",
  },
  {
    id: "rc-exp24-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Chief Justice Taney argued in Ex parte Merryman that",
    answerChoices: [
      { letter: "A", text: "the President possesses unlimited authority to suspend habeas corpus during wartime" },
      { letter: "B", text: "only Congress, not the President, has the constitutional authority to suspend the writ of habeas corpus" },
      { letter: "C", text: "habeas corpus should be permanently abolished in cases involving national security" },
      { letter: "D", text: "state courts rather than federal courts should adjudicate habeas corpus petitions" },
      { letter: "E", text: "the Constitution does not protect the right to habeas corpus" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Chief Justice Taney argued 'that only Congress possessed suspension authority—a position Lincoln effectively ignored.' This directly supports answer B. The passage presents Taney as limiting executive power, not expanding it (ruling out A). The other options misrepresent or contradict the passage's content.",
    wrongAnswerExplanations: {
      A: "Taney's position was the opposite—he argued against presidential suspension authority, asserting that only Congress could suspend the writ.",
      C: "The passage does not indicate Taney advocated permanent abolition; he addressed which branch could suspend it, not whether it should be eliminated.",
      D: "The passage does not discuss Taney making any argument about state versus federal court jurisdiction.",
      E: "Taney's argument presupposed constitutional protection of habeas corpus; his dispute was about suspension authority, not the writ's existence."
    },
    difficulty: "easy",
    passageId: "rc-exp24-p1",
  },
  {
    id: "rc-exp24-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the Bush administration's position on Guantanamo detainees was predicated on the assumption that",
    answerChoices: [
      { letter: "A", text: "all detained individuals are entitled to constitutional protections regardless of their location" },
      { letter: "B", text: "constitutional habeas corpus protections apply only within sovereign U.S. territory" },
      { letter: "C", text: "Congress lacked the authority to establish any review procedures for detainees" },
      { letter: "D", text: "the Supreme Court had previously ruled that Guantanamo was part of U.S. sovereign territory" },
      { letter: "E", text: "military commissions provide more robust procedural protections than civilian courts" },
    ],
    correctAnswer: "B",
    explanation: "The passage states the Bush administration 'argued that detainees at Guantanamo Bay lacked any habeas rights because the naval base lay outside sovereign U.S. territory.' This argument logically rests on the assumption that habeas protections are territorially limited—if protections applied everywhere, location would be irrelevant. Answer A states the opposite of their position. Answers C, D, and E address issues not reflected in the administration's territorial argument.",
    wrongAnswerExplanations: {
      A: "This contradicts the administration's argument; they specifically claimed constitutional protections did not apply because Guantanamo was outside U.S. territory.",
      C: "The passage indicates Congress did establish review procedures; the administration's argument was about territorial limits, not congressional authority.",
      D: "The administration argued Guantanamo was outside sovereign territory, not that it was part of it.",
      E: "The passage does not indicate the administration made comparative arguments about military commissions versus civilian courts in this context."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p1",
  },
  {
    id: "rc-exp24-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions Brown v. Allen (1953) primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Supreme Court's expansion of federal judicial power" },
      { letter: "B", text: "illustrate a significant expansion of habeas corpus rights that preceded later restrictions" },
      { letter: "C", text: "argue that state criminal justice systems are inherently unconstitutional" },
      { letter: "D", text: "compare American and British approaches to habeas corpus" },
      { letter: "E", text: "explain why the Antiterrorism and Effective Death Penalty Act was enacted" },
    ],
    correctAnswer: "B",
    explanation: "Brown v. Allen appears in the paragraph discussing 'significant expansions and contractions' of habeas corpus rights. The case is described as 'dramatically expanding federal judicial oversight' before the passage discusses AEDPA's restrictions. This structure uses Brown v. Allen to demonstrate an expansion phase that preceded the contraction. The author does not criticize the expansion (ruling out A), and the other options mischaracterize the purpose of mentioning the case.",
    wrongAnswerExplanations: {
      A: "The author describes Brown v. Allen neutrally as establishing expanded review, without criticizing this expansion.",
      C: "The passage does not suggest state systems are unconstitutional; it merely notes federal courts gained oversight authority.",
      D: "The passage does not compare American and British approaches; Brown v. Allen is purely about American federal-state court relations.",
      E: "While AEDPA is discussed afterward, Brown v. Allen is used to show expansion, not to explain AEDPA's enactment—those are presented as separate developments."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p1",
  },
  {
    id: "rc-exp24-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the ongoing debates about habeas corpus can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of concerns about governmental overreach" },
      { letter: "B", text: "strongly supportive of eliminating all restrictions on habeas petitions" },
      { letter: "C", text: "analytically neutral, presenting multiple perspectives on a continuing controversy" },
      { letter: "D", text: "cynical about the possibility of balancing security and liberty" },
      { letter: "E", text: "nostalgic for pre-constitutional approaches to detention" },
    ],
    correctAnswer: "C",
    explanation: "Throughout the passage, the author presents arguments from multiple sides: critics who argue current procedures are insufficient and defenders who contend that restrictions serve legitimate interests. The passage concludes that 'the balance between security and liberty that habeas corpus mediates remains as contested today as at the nation's founding' without advocating for a particular resolution. This reflects analytical neutrality rather than advocacy or dismissiveness.",
    wrongAnswerExplanations: {
      A: "The author gives serious treatment to concerns about governmental overreach, discussing them alongside other perspectives rather than dismissing them.",
      B: "The author presents both critics and defenders of restrictions without advocating for either position.",
      D: "The passage does not express cynicism; it treats the ongoing debate as a genuine and important constitutional question.",
      E: "The passage does not express nostalgia for any earlier period; it traces historical development without preferring past approaches."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p1",
  },
  {
    id: "rc-exp24-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the argument made by critics who claim that current habeas procedures provide insufficient protection for immigrants?",
    answerChoices: [
      { letter: "A", text: "Most immigration detainees are held for less than thirty days before their cases are resolved." },
      { letter: "B", text: "A study found that immigrants detained for more than six months were rarely able to obtain meaningful judicial review of their detention before deportation." },
      { letter: "C", text: "Immigration courts have recently been granted additional resources to expedite case processing." },
      { letter: "D", text: "The Supreme Court has held that immigration detention differs fundamentally from criminal incarceration." },
      { letter: "E", text: "Most countries do not provide any form of habeas corpus protection to non-citizens." },
    ],
    correctAnswer: "B",
    explanation: "The passage states critics argue that 'current habeas procedures provide insufficient protection for many categories of detainees, particularly immigrants held for extended periods.' Evidence that immigrants detained for extended periods rarely obtain meaningful review would directly support this critique by showing the inadequacy critics allege. Answer A would weaken rather than strengthen the critique. Answers C, D, and E are either irrelevant or would not support the specific claim about insufficient protection.",
    wrongAnswerExplanations: {
      A: "This would weaken the critics' argument by suggesting detention periods are typically short, contradicting the concern about 'extended periods.'",
      C: "Additional resources might improve rather than demonstrate insufficiency of protection, weakening the critics' claim.",
      D: "This addresses legal classification rather than the sufficiency of habeas procedures for immigrants.",
      E: "International comparisons do not address whether U.S. procedures are insufficient; the absence of protections elsewhere does not justify inadequate protections domestically."
    },
    difficulty: "hard",
    passageId: "rc-exp24-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - SYMBIOSIS AND MUTUALISTIC RELATIONSHIPS
// ============================================

const passage2 = `Symbiotic relationships—intimate associations between organisms of different species—have shaped the evolution of life on Earth in profound ways that biologists are only beginning to fully appreciate. While parasitism and commensalism represent important symbiotic categories, mutualism, in which both partners benefit, has proven particularly significant for understanding major evolutionary transitions. From the mitochondria within our cells to the bacteria in our guts, mutualistic partnerships have repeatedly enabled organisms to acquire novel capabilities and colonize new environments.

The endosymbiotic origin of mitochondria and chloroplasts represents perhaps the most consequential mutualism in evolutionary history. According to the now widely accepted endosymbiotic theory, mitochondria descended from free-living bacteria that were engulfed by ancestral eukaryotic cells approximately two billion years ago. Rather than being digested, these bacteria established a mutualistic relationship with their hosts: they provided efficient aerobic respiration in exchange for nutrients and protection. A similar process gave rise to chloroplasts in plants and algae, enabling photosynthesis. These ancient partnerships fundamentally transformed life on Earth, making possible the evolution of complex multicellular organisms.

Mycorrhizal associations between fungi and plant roots exemplify mutualism's ecological importance. Over ninety percent of land plants form mycorrhizal partnerships in which fungal networks extend the effective root system, dramatically enhancing the plant's ability to absorb water and nutrients, particularly phosphorus. In return, plants provide fungi with photosynthetically produced sugars. These underground networks can connect multiple plants, facilitating nutrient transfer between individuals and even between species. Some researchers suggest these "wood-wide webs" allow mature trees to subsidize seedlings, challenging traditional views of forests as arenas of pure competition.

The stability of mutualisms has long puzzled evolutionary biologists. If each partner benefits by receiving more than it gives, why would natural selection not favor "cheaters" that take without reciprocating, ultimately destabilizing the relationship? Several mechanisms help maintain mutualistic stability. Partner choice allows organisms to preferentially associate with cooperative individuals, while sanctions enable hosts to punish or abandon uncooperative partners. In legume-rhizobia associations, for example, plants supply less oxygen to root nodules containing ineffective nitrogen-fixing bacteria, effectively sanctioning poor performers.

Understanding mutualism has practical applications in agriculture and ecosystem management. Efforts to reduce chemical fertilizer use have focused on promoting mycorrhizal associations and nitrogen-fixing bacteria in crop systems. Conservation biologists increasingly recognize that protecting individual species may be insufficient if their essential mutualistic partners are threatened. The decline of pollinator populations, for instance, endangers not just bees and butterflies but the countless plant species dependent upon them. Mutualism's ubiquity suggests that ecological communities are far more interconnected than traditional individualistic perspectives acknowledged.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp24-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Parasitism is more evolutionarily significant than mutualism in shaping life on Earth." },
      { letter: "B", text: "Mutualistic symbioses have profoundly influenced evolution and ecology, with mechanisms maintaining their stability and significant implications for applied fields like agriculture and conservation." },
      { letter: "C", text: "The endosymbiotic theory of mitochondrial origins has been definitively disproven by recent research." },
      { letter: "D", text: "Mycorrhizal networks function identically to computer networks in facilitating communication." },
      { letter: "E", text: "Cheaters always prevail in mutualistic relationships, making such relationships inherently unstable." },
    ],
    correctAnswer: "B",
    explanation: "The passage examines mutualism's evolutionary significance (endosymbiosis, cellular organelles), ecological importance (mycorrhizae), mechanisms maintaining stability (partner choice, sanctions), and practical applications (agriculture, conservation). Answer B comprehensively captures these themes. Answer A contradicts the passage's emphasis on mutualism. Answer C contradicts the passage's statement that endosymbiotic theory is 'widely accepted.' Answer D mischaracterizes the mycorrhizal discussion. Answer E contradicts the passage's explanation of stabilizing mechanisms.",
    wrongAnswerExplanations: {
      A: "The passage explicitly states that mutualism 'has proven particularly significant for understanding major evolutionary transitions,' emphasizing its importance over other symbiotic types.",
      C: "The passage states the endosymbiotic theory is 'now widely accepted,' directly contradicting this answer.",
      D: "The 'wood-wide web' metaphor is used descriptively; the passage does not claim mycorrhizal networks function identically to computer networks.",
      E: "The passage explains how partner choice and sanctions prevent cheaters from prevailing, maintaining mutualistic stability."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p2",
  },
  {
    id: "rc-exp24-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, in mycorrhizal associations, fungi provide plants with",
    answerChoices: [
      { letter: "A", text: "photosynthetically produced sugars and carbohydrates" },
      { letter: "B", text: "enhanced ability to absorb water and nutrients, particularly phosphorus" },
      { letter: "C", text: "protection from bacterial pathogens" },
      { letter: "D", text: "nitrogen fixation capabilities similar to those of rhizobia" },
      { letter: "E", text: "aerobic respiration through mitochondrial transfer" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'fungal networks extend the effective root system, dramatically enhancing the plant's ability to absorb water and nutrients, particularly phosphorus.' Answer A describes what plants provide to fungi, not the reverse. Answers C, D, and E describe functions not attributed to mycorrhizal fungi in the passage.",
    wrongAnswerExplanations: {
      A: "The passage states that 'plants provide fungi with photosynthetically produced sugars'—this is what plants give, not what fungi give.",
      C: "The passage does not mention protection from bacterial pathogens as a benefit mycorrhizae provide.",
      D: "Nitrogen fixation is attributed to rhizobia in legume associations, not to mycorrhizal fungi.",
      E: "Aerobic respiration is discussed in relation to mitochondria, not mycorrhizal associations."
    },
    difficulty: "easy",
    passageId: "rc-exp24-p2",
  },
  {
    id: "rc-exp24-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the author would most likely agree that the discovery of nutrient transfer through mycorrhizal networks",
    answerChoices: [
      { letter: "A", text: "confirms that forests are purely competitive ecosystems" },
      { letter: "B", text: "has no relevance to understanding forest ecology" },
      { letter: "C", text: "suggests that cooperation and resource sharing may play a larger role in forest ecosystems than previously believed" },
      { letter: "D", text: "proves that all trees in a forest are genetically identical" },
      { letter: "E", text: "demonstrates that seedlings cannot survive without mature trees" },
    ],
    correctAnswer: "C",
    explanation: "The passage notes that mycorrhizal networks 'can connect multiple plants, facilitating nutrient transfer between individuals and even between species' and that some researchers suggest they 'allow mature trees to subsidize seedlings, challenging traditional views of forests as arenas of pure competition.' This implies cooperation plays a greater role than previously understood. Answer A contradicts the passage's point. Answers B, D, and E either mischaracterize the findings or make claims unsupported by the passage.",
    wrongAnswerExplanations: {
      A: "The passage states these findings 'challenge traditional views of forests as arenas of pure competition,' suggesting the opposite of purely competitive ecosystems.",
      B: "The passage presents this discovery as ecologically significant, 'challenging traditional views' of forest dynamics.",
      D: "Nutrient transfer occurs 'between individuals and even between species,' which is incompatible with all trees being genetically identical.",
      E: "The passage suggests mature trees may 'subsidize' seedlings but does not claim seedlings cannot survive without this support."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p2",
  },
  {
    id: "rc-exp24-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the legume-rhizobia association primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that bacteria are more important than fungi in symbiotic relationships" },
      { letter: "B", text: "provide a concrete example of how sanctions maintain mutualistic stability" },
      { letter: "C", text: "explain the evolutionary origins of nitrogen fixation" },
      { letter: "D", text: "contrast mutualism with parasitism" },
      { letter: "E", text: "demonstrate that plants cannot survive without bacterial partners" },
    ],
    correctAnswer: "B",
    explanation: "The legume-rhizobia example appears in the paragraph discussing mechanisms that maintain mutualistic stability. Specifically, it illustrates sanctions: 'plants supply less oxygen to root nodules containing ineffective nitrogen-fixing bacteria, effectively sanctioning poor performers.' This directly exemplifies the sanctions mechanism mentioned earlier in the paragraph. The example does not compare bacteria to fungi, explain evolutionary origins, contrast symbiotic types, or make claims about plant survival.",
    wrongAnswerExplanations: {
      A: "The passage does not compare the importance of bacteria and fungi; the example illustrates a mechanism, not relative significance.",
      C: "The passage mentions nitrogen fixation but does not use this example to explain its evolutionary origins.",
      D: "The example illustrates stability mechanisms within mutualism, not a comparison between mutualism and parasitism.",
      E: "The passage does not claim plants cannot survive without rhizobia; it uses the example to show how sanctions work."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p2",
  },
  {
    id: "rc-exp24-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward traditional individualistic perspectives on ecological communities can best be described as",
    answerChoices: [
      { letter: "A", text: "unreserved endorsement of their explanatory power" },
      { letter: "B", text: "critical, suggesting they underestimate the interconnectedness of species" },
      { letter: "C", text: "neutral acknowledgment without evaluation" },
      { letter: "D", text: "nostalgic appreciation for their historical significance" },
      { letter: "E", text: "hostile dismissal as entirely worthless" },
    ],
    correctAnswer: "B",
    explanation: "The passage concludes that 'Mutualism's ubiquity suggests that ecological communities are far more interconnected than traditional individualistic perspectives acknowledged.' This implies that traditional perspectives failed to recognize important interconnections—a critical stance. The passage challenges rather than endorses these perspectives (ruling out A), takes a clear evaluative position (ruling out C), does not express nostalgia (ruling out D), and criticizes without completely dismissing traditional views (ruling out E).",
    wrongAnswerExplanations: {
      A: "The passage explicitly suggests traditional perspectives failed to acknowledge ecological interconnectedness.",
      C: "The author evaluates traditional perspectives as inadequate, not merely acknowledging them neutrally.",
      D: "The passage does not express nostalgia; it criticizes traditional perspectives for underestimating interconnectedness.",
      E: "While critical, the author does not completely dismiss traditional perspectives as 'entirely worthless'—the criticism is more measured."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p2",
  },
  {
    id: "rc-exp24-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the information in the passage, a conservation biologist trying to protect an endangered orchid species would be most justified in also focusing on",
    answerChoices: [
      { letter: "A", text: "increasing chemical fertilizer use in the orchid's habitat" },
      { letter: "B", text: "eliminating all fungi from the soil where the orchid grows" },
      { letter: "C", text: "protecting the specific mycorrhizal fungi and pollinators that the orchid depends upon" },
      { letter: "D", text: "introducing predators to reduce herbivore populations" },
      { letter: "E", text: "removing other plant species that might compete with the orchid" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Conservation biologists increasingly recognize that protecting individual species may be insufficient if their essential mutualistic partners are threatened' and mentions pollinator decline as endangering 'the countless plant species dependent upon them.' Given that over 90% of land plants form mycorrhizal partnerships, protecting an orchid's fungal partners and pollinators aligns with the passage's emphasis on mutualistic dependencies. Answer A contradicts the passage's discussion of reducing fertilizer use. Answer B would harm essential partners. Answers D and E address competition and predation, not mutualism.",
    wrongAnswerExplanations: {
      A: "The passage discusses 'efforts to reduce chemical fertilizer use' by promoting mycorrhizal associations, suggesting increased fertilizer use would be counterproductive.",
      B: "This would eliminate essential mycorrhizal partners that the passage identifies as crucial for plant survival.",
      D: "Predator introduction addresses herbivory, not the mutualistic relationships the passage emphasizes for conservation.",
      E: "Removing competitors ignores the interconnected nature of ecosystems the passage describes, and might harm shared mutualistic networks."
    },
    difficulty: "hard",
    passageId: "rc-exp24-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - THE HARLEM RENAISSANCE IN LITERATURE
// ============================================

const passage3 = `The Harlem Renaissance, flourishing primarily between the end of World War I and the mid-1930s, represented an unprecedented flowering of African American artistic and intellectual achievement. While encompassing music, visual arts, and theater, the movement's literary dimension proved particularly influential in reshaping American letters and articulating new visions of Black identity. Writers such as Langston Hughes, Zora Neale Hurston, Claude McKay, and Countee Cullen developed distinctive voices that celebrated African American culture while confronting the realities of racial oppression.

Central to the Harlem Renaissance was a debate over the proper relationship between art and politics. W.E.B. Du Bois, editor of the NAACP's magazine The Crisis, championed literature as a tool for racial advancement, arguing that positive representations of African American life could counter demeaning stereotypes and advance civil rights. He believed that Black artists had a responsibility to create uplifting images that demonstrated African American dignity and capability to white audiences. This instrumental view of art aligned with Du Bois's broader strategy of cultivating a "Talented Tenth" of educated African Americans who would lead racial progress.

Younger writers increasingly chafed against these expectations. Langston Hughes's 1926 essay "The Negro Artist and the Racial Mountain" articulated a manifesto for artistic freedom, declaring that Black artists should express themselves without concern for either white or Black approval. Hughes championed the ordinary lives of working-class African Americans and drew inspiration from jazz and blues, forms Du Bois sometimes dismissed as vulgar. Zora Neale Hurston similarly celebrated rural Black folk culture, employing dialect and folklore in works that some critics found politically problematic for their apparent lack of protest content.

The tension between aesthetic autonomy and political responsibility reflected deeper questions about audience and purpose. Should African American literature address primarily white readers, persuading them of Black humanity and the injustice of racism? Or should it speak to Black readers, affirming their experiences and culture regardless of white reactions? These questions had no easy answers, and individual writers navigated them differently. Claude McKay's poetry could combine militant political protest with classical sonnet forms, while Countee Cullen wrestled publicly with whether racial identity should define artistic vision.

The Harlem Renaissance's legacy extends far beyond its historical moment. It established African American literature as a vital force in American culture and created precedents for subsequent movements. The Black Arts Movement of the 1960s and 1970s revisited many of the same debates about art and politics, audience and purpose. Contemporary writers continue to negotiate the relationship between aesthetic experimentation and social engagement that Harlem Renaissance figures first articulated. The movement demonstrated that these tensions, rather than hindering creativity, could generate some of America's most enduring literature.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp24-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "W.E.B. Du Bois was the only significant figure of the Harlem Renaissance and his views went unchallenged." },
      { letter: "B", text: "The Harlem Renaissance was a significant literary movement characterized by debates about art and politics that continue to influence African American literature today." },
      { letter: "C", text: "Langston Hughes and Zora Neale Hurston were entirely apolitical writers with no concern for social issues." },
      { letter: "D", text: "The Harlem Renaissance failed to produce any lasting literary achievements." },
      { letter: "E", text: "African American literature should always prioritize political messaging over aesthetic considerations." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces the Harlem Renaissance as an 'unprecedented flowering' of achievement, examines the debate between Du Bois's instrumental view and younger writers' claims to artistic freedom, and concludes by noting the movement's lasting legacy and continuing influence. Answer B captures this comprehensive treatment. Answer A is contradicted by the extensive discussion of writers who challenged Du Bois. Answer C mischaracterizes Hughes and Hurston. Answer D contradicts the passage's emphasis on lasting impact. Answer E advocates a position the passage presents as contested.",
    wrongAnswerExplanations: {
      A: "The passage explicitly discusses how younger writers 'chafed against' Du Bois's expectations, showing his views were challenged.",
      C: "While Hughes and Hurston emphasized artistic freedom, the passage does not characterize them as 'entirely apolitical'; Hughes's manifesto and the discussion of 'protest content' suggest they engaged with social issues differently.",
      D: "The passage states the movement 'established African American literature as a vital force in American culture' and created 'some of America's most enduring literature.'",
      E: "The passage presents the relationship between art and politics as an ongoing debate without advocating for prioritizing political messaging."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p3",
  },
  {
    id: "rc-exp24-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Du Bois believed that African American artists should",
    answerChoices: [
      { letter: "A", text: "ignore white audiences entirely and write only for Black readers" },
      { letter: "B", text: "create positive representations that could counter stereotypes and advance civil rights" },
      { letter: "C", text: "embrace jazz and blues as the highest forms of artistic expression" },
      { letter: "D", text: "reject formal education in favor of folk traditions" },
      { letter: "E", text: "avoid any connection between literature and social progress" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Du Bois 'championed literature as a tool for racial advancement, arguing that positive representations of African American life could counter demeaning stereotypes and advance civil rights.' Answer A contradicts Du Bois's concern with demonstrating dignity 'to white audiences.' Answer C contradicts the passage's note that Du Bois 'sometimes dismissed' jazz and blues 'as vulgar.' Answers D and E contradict his emphasis on education and social advancement.",
    wrongAnswerExplanations: {
      A: "The passage indicates Du Bois was concerned with 'demonstrating African American dignity and capability to white audiences.'",
      C: "The passage states Hughes championed jazz and blues, while Du Bois 'sometimes dismissed' these forms 'as vulgar.'",
      D: "Du Bois advocated for a 'Talented Tenth' of educated African Americans, not rejection of formal education.",
      E: "Du Bois explicitly viewed literature as 'a tool for racial advancement,' connecting it directly to social progress."
    },
    difficulty: "easy",
    passageId: "rc-exp24-p3",
  },
  {
    id: "rc-exp24-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, critics who found Hurston's work 'politically problematic' most likely objected to",
    answerChoices: [
      { letter: "A", text: "her use of classical European literary forms" },
      { letter: "B", text: "her celebration of folk culture rather than explicit protest against racism" },
      { letter: "C", text: "her exclusive focus on urban middle-class African American life" },
      { letter: "D", text: "her rejection of African American cultural traditions" },
      { letter: "E", text: "her alignment with Du Bois's instrumental view of art" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Hurston 'celebrated rural Black folk culture, employing dialect and folklore in works that some critics found politically problematic for their apparent lack of protest content.' The critics' objection was to insufficient protest, not to her celebration of folk culture per se but to the emphasis on celebration over explicit political resistance. Answer A describes McKay's approach. Answers C and D contradict the passage's description of Hurston focusing on 'rural Black folk culture.' Answer E contradicts the description of her artistic choices differing from Du Bois's expectations.",
    wrongAnswerExplanations: {
      A: "Classical European forms are associated with McKay's poetry, not Hurston's work.",
      C: "Hurston celebrated 'rural Black folk culture,' not 'urban middle-class' life.",
      D: "Hurston 'celebrated' African American folk culture; she did not reject it.",
      E: "Hurston's work is presented as departing from Du Bois's expectations, not aligning with them."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p3",
  },
  {
    id: "rc-exp24-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Claude McKay's combination of 'militant political protest with classical sonnet forms' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that McKay was the most important Harlem Renaissance writer" },
      { letter: "B", text: "illustrate that writers navigated tensions between aesthetics and politics in diverse ways" },
      { letter: "C", text: "criticize McKay for abandoning African American literary traditions" },
      { letter: "D", text: "demonstrate that the sonnet form is inherently suited to political protest" },
      { letter: "E", text: "show that Du Bois's approach was universally rejected" },
    ],
    correctAnswer: "B",
    explanation: "McKay's example appears in the paragraph discussing how 'individual writers navigated' the tensions between aesthetic autonomy and political responsibility 'differently.' McKay exemplifies one way of combining political content with European formal traditions, contrasting with other approaches like Cullen's wrestling with racial identity. The passage does not claim McKay was most important (A), criticize him (C), make claims about the sonnet form generally (D), or suggest Du Bois was universally rejected (E).",
    wrongAnswerExplanations: {
      A: "The passage mentions McKay as one example among several, not as the most important writer.",
      C: "The passage presents McKay's approach neutrally as one way of navigating tensions, without criticism.",
      D: "The passage uses McKay as an example of individual navigation, not to make general claims about the sonnet form.",
      E: "McKay's political protest content could be seen as somewhat aligned with Du Bois's emphasis on addressing social issues, not as rejection."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p3",
  },
  {
    id: "rc-exp24-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the author views the tensions within the Harlem Renaissance as",
    answerChoices: [
      { letter: "A", text: "destructive conflicts that ultimately undermined the movement's achievements" },
      { letter: "B", text: "unfortunate distractions from purely aesthetic concerns" },
      { letter: "C", text: "productive forces that contributed to the creation of significant literature" },
      { letter: "D", text: "trivial disagreements of merely historical interest" },
      { letter: "E", text: "evidence that African American literature could never succeed" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'these tensions, rather than hindering creativity, could generate some of America's most enduring literature.' This explicit statement frames the tensions as productive rather than destructive. The passage treats the debates seriously, not as distractions (B) or trivial (D), and emphasizes the movement's success and lasting influence, contradicting both A and E.",
    wrongAnswerExplanations: {
      A: "The passage explicitly states tensions 'could generate some of America's most enduring literature,' not that they undermined achievement.",
      B: "The author treats political concerns seriously and does not dismiss them as distractions from aesthetics.",
      D: "The passage emphasizes the debates' continuing relevance, noting contemporary writers 'continue to negotiate' these relationships.",
      E: "The passage celebrates the Harlem Renaissance's achievements and lasting legacy."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p3",
  },
  {
    id: "rc-exp24-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A chronological survey of African American literature from the nineteenth century to the present" },
      { letter: "B", text: "An introduction to a literary movement, followed by examination of internal debates, examples of different approaches, and discussion of lasting influence" },
      { letter: "C", text: "A comparison of two writers concluding that one is superior to the other" },
      { letter: "D", text: "A technical analysis of poetic forms used in Harlem Renaissance poetry" },
      { letter: "E", text: "An argument that political literature is inherently superior to apolitical literature" },
    ],
    correctAnswer: "B",
    explanation: "The passage begins by introducing the Harlem Renaissance, then examines the Du Bois versus younger writers debate, provides examples of how different writers navigated these tensions (Hughes, Hurston, McKay, Cullen), and concludes with the movement's lasting legacy. This structure matches answer B. The passage does not survey from the nineteenth century (A), compare two writers to declare one superior (C), provide technical analysis of poetic forms (D), or argue for political literature's superiority (E).",
    wrongAnswerExplanations: {
      A: "The passage focuses specifically on the Harlem Renaissance era, not a broad chronological survey from the nineteenth century.",
      C: "Multiple writers are discussed as examples of different approaches; no writer is declared superior.",
      D: "While sonnet form is mentioned briefly, the passage does not provide technical poetic analysis.",
      E: "The passage presents the relationship between art and politics as a debate, not as arguing for political literature's superiority."
    },
    difficulty: "hard",
    passageId: "rc-exp24-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - EDUCATION REFORM AND ACHIEVEMENT GAPS
// ============================================

const passage4 = `The persistence of achievement gaps between students from different socioeconomic and racial backgrounds represents one of the most vexing challenges facing American education. Despite decades of reform efforts, substantial disparities in test scores, graduation rates, and college completion persist. Understanding why these gaps prove so resistant to intervention requires examining the complex interplay between school-based factors and the broader social and economic conditions that shape children's educational trajectories.

Early childhood experiences establish foundations that profoundly influence later academic outcomes. By age three, children from higher-income families have been exposed to approximately 30 million more words than children from low-income families—a phenomenon dubbed the "30 Million Word Gap" by researchers Hart and Risley. This disparity in language exposure correlates with differences in vocabulary development, cognitive skills, and school readiness that predict academic performance through high school and beyond. Such findings have motivated policy investments in early childhood education, though debate continues about which interventions most effectively close these early gaps.

School quality and resource distribution remain contested terrain in discussions of educational inequality. Per-pupil spending varies dramatically across districts, with some studies finding that students in low-income communities receive substantially less funding than their affluent counterparts. However, the relationship between spending and outcomes is not straightforward. Some researchers argue that money matters primarily when directed toward evidence-based interventions like smaller class sizes, well-trained teachers, and intensive tutoring. Others contend that resource disparities explain relatively little of achievement gaps, pointing to within-school variation as evidence that teaching quality and curricular rigor matter more than aggregate spending.

The growth of school choice policies—including charter schools, voucher programs, and open enrollment—reflects attempts to improve outcomes through market mechanisms and competition. Proponents argue that choice empowers families, particularly low-income families, to exit failing schools and access better options. Critics counter that choice policies often exacerbate segregation, drain resources from traditional public schools, and produce mixed academic results. Research on charter schools shows substantial variation: some networks produce remarkable gains, while others perform no better—or worse—than traditional public schools serving similar populations.

Recent reform movements have increasingly emphasized teacher effectiveness as a lever for closing achievement gaps. Value-added measures attempt to isolate teachers' contributions to student learning by controlling for prior achievement and demographic factors. Policies in several states have tied teacher evaluation, tenure, and compensation to these measures. Critics question the statistical reliability of value-added scores and worry that high-stakes accountability may narrow curriculum, increase teacher turnover in high-needs schools, and create incentives for teaching to tests rather than fostering deeper learning. The optimal balance between accountability and professional autonomy remains unresolved.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp24-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Educational achievement gaps have been completely eliminated through recent policy interventions." },
      { letter: "B", text: "Achievement gaps between different student populations persist despite reform efforts, reflecting complex factors about which there remains significant disagreement." },
      { letter: "C", text: "Charter schools are uniformly superior to traditional public schools in closing achievement gaps." },
      { letter: "D", text: "The 30 Million Word Gap proves that early childhood experiences have no effect on later academic outcomes." },
      { letter: "E", text: "Value-added measures provide perfectly reliable indicators of teacher quality." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes achievement gaps as 'persistent' despite 'decades of reform efforts,' examines contributing factors (early childhood, school resources, choice policies, teacher effectiveness), and presents ongoing debates about each. Answer B captures this emphasis on persistence and complexity. Answer A contradicts the passage's opening about persistent gaps. Answers C, D, and E mischaracterize specific points: the passage notes charter variation, emphasizes early experience's importance, and discusses criticism of value-added measures.",
    wrongAnswerExplanations: {
      A: "The passage explicitly states that 'substantial disparities' persist 'despite decades of reform efforts.'",
      C: "The passage notes 'substantial variation' in charter schools, with some performing 'no better—or worse—than traditional public schools.'",
      D: "The passage states early experiences 'profoundly influence later academic outcomes,' the opposite of having no effect.",
      E: "The passage discusses how 'Critics question the statistical reliability of value-added scores.'"
    },
    difficulty: "medium",
    passageId: "rc-exp24-p4",
  },
  {
    id: "rc-exp24-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the research by Hart and Risley found that",
    answerChoices: [
      { letter: "A", text: "all children receive identical language exposure regardless of family income" },
      { letter: "B", text: "by age three, children from higher-income families have been exposed to approximately 30 million more words than children from low-income families" },
      { letter: "C", text: "vocabulary development has no connection to school readiness" },
      { letter: "D", text: "early childhood education programs are ineffective" },
      { letter: "E", text: "per-pupil spending is the primary determinant of achievement gaps" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Hart and Risley documented how 'By age three, children from higher-income families have been exposed to approximately 30 million more words than children from low-income families—a phenomenon dubbed the \"30 Million Word Gap.\"' Answer A contradicts this finding. Answer C contradicts the passage's statement that language exposure 'correlates with differences in vocabulary development, cognitive skills, and school readiness.' Answers D and E discuss topics not attributed to Hart and Risley's research.",
    wrongAnswerExplanations: {
      A: "Hart and Risley's research specifically documented a large disparity in language exposure based on family income.",
      C: "The passage directly connects the language gap to 'vocabulary development, cognitive skills, and school readiness.'",
      D: "The passage states these findings 'motivated policy investments in early childhood education,' not that such programs are ineffective.",
      E: "Per-pupil spending is discussed separately from Hart and Risley's research on language exposure."
    },
    difficulty: "easy",
    passageId: "rc-exp24-p4",
  },
  {
    id: "rc-exp24-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, researchers who point to 'within-school variation' as evidence would most likely argue that",
    answerChoices: [
      { letter: "A", text: "increasing per-pupil spending is always the most effective intervention" },
      { letter: "B", text: "differences in teaching quality and curriculum may be more important than aggregate funding levels" },
      { letter: "C", text: "all schools in a given district perform identically" },
      { letter: "D", text: "school choice policies should be immediately abolished" },
      { letter: "E", text: "early childhood education has no effect on later achievement" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that some researchers 'contend that resource disparities explain relatively little of achievement gaps, pointing to within-school variation as evidence that teaching quality and curricular rigor matter more than aggregate spending.' Within-school variation—different outcomes for students in the same school with the same resources—suggests factors beyond funding explain differences. Answer A contradicts their position. Answers C, D, and E address topics unrelated to the within-school variation argument.",
    wrongAnswerExplanations: {
      A: "These researchers argue resource disparities 'explain relatively little,' contradicting the claim that spending is most effective.",
      C: "Within-school variation is precisely the observation that outcomes differ even within the same school.",
      D: "The within-school variation argument addresses spending, not school choice policies.",
      E: "Early childhood education is discussed separately and is not the focus of the within-school variation argument."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p4",
  },
  {
    id: "rc-exp24-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions that some charter school networks 'produce remarkable gains' while others perform 'no better—or worse—than traditional public schools' primarily in order to",
    answerChoices: [
      { letter: "A", text: "advocate for the immediate expansion of all charter schools" },
      { letter: "B", text: "demonstrate that research on school choice shows variable rather than uniformly positive results" },
      { letter: "C", text: "argue that traditional public schools are always superior to charter schools" },
      { letter: "D", text: "explain the origins of the school choice movement" },
      { letter: "E", text: "criticize researchers who study charter school effectiveness" },
    ],
    correctAnswer: "B",
    explanation: "This point appears after noting that 'Research on charter schools shows substantial variation.' The contrast between networks with 'remarkable gains' and those performing 'no better—or worse' illustrates this variation, complicating both enthusiastic support and blanket criticism of charter schools. The passage does not advocate for charter expansion (A), claim traditional schools are always superior (C), explain movement origins (D), or criticize researchers (E).",
    wrongAnswerExplanations: {
      A: "The passage presents mixed results, not advocacy for charter expansion.",
      C: "The acknowledgment of 'remarkable gains' by some charters contradicts claiming traditional schools are always superior.",
      D: "The passage mentions that choice policies 'reflect attempts to improve outcomes' but does not explain the movement's origins in detail.",
      E: "The passage presents research findings neutrally without criticizing the researchers."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p4",
  },
  {
    id: "rc-exp24-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the various reform approaches discussed in the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive of all current reform efforts" },
      { letter: "B", text: "dismissive of any attempt to address achievement gaps" },
      { letter: "C", text: "evenhanded, presenting both supporting and critical perspectives on each approach" },
      { letter: "D", text: "strongly advocating for value-added measures as the definitive solution" },
      { letter: "E", text: "nostalgic for educational approaches of the past" },
    ],
    correctAnswer: "C",
    explanation: "For each reform approach, the passage presents multiple perspectives: proponents and critics of school choice, different views on spending, supporters and critics of value-added measures. The author does not advocate for any particular approach but presents ongoing debates. This evenhanded treatment rules out enthusiastic support (A), dismissiveness (B), advocacy for value-added measures (D), and nostalgia (E).",
    wrongAnswerExplanations: {
      A: "The passage presents criticisms of each reform approach alongside supportive views, not enthusiastic support.",
      B: "The passage takes reform efforts seriously, examining their logic and evidence rather than dismissing them.",
      D: "The passage presents substantial criticism of value-added measures, not advocacy for them.",
      E: "The passage focuses on current debates without expressing nostalgia for past approaches."
    },
    difficulty: "medium",
    passageId: "rc-exp24-p4",
  },
  {
    id: "rc-exp24-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the position of those who argue that money matters primarily when directed toward evidence-based interventions?",
    answerChoices: [
      { letter: "A", text: "A randomized controlled trial found that intensive tutoring programs significantly improved student outcomes." },
      { letter: "B", text: "A study found that districts with higher overall spending but no targeted interventions achieved better outcomes than districts with lower spending but evidence-based programs." },
      { letter: "C", text: "Research demonstrated that smaller class sizes correlate with improved student achievement." },
      { letter: "D", text: "Well-trained teachers were found to be more effective than untrained teachers." },
      { letter: "E", text: "A study found that students in intensive tutoring programs outperformed those without such programs." },
    ],
    correctAnswer: "B",
    explanation: "The position that 'money matters primarily when directed toward evidence-based interventions' implies that aggregate spending without targeted interventions should not produce superior outcomes. If districts with higher spending but no targeted interventions outperformed districts with lower spending but evidence-based programs, this would suggest money matters in ways beyond specific interventions—weakening the targeted intervention argument. Answers A, C, D, and E would all support rather than weaken this position by showing evidence-based interventions work.",
    wrongAnswerExplanations: {
      A: "This would strengthen the position by showing an evidence-based intervention (tutoring) improves outcomes.",
      C: "Smaller class sizes are mentioned as one of the 'evidence-based interventions,' so this would strengthen the position.",
      D: "Well-trained teachers are mentioned as an evidence-based intervention, so this would strengthen the position.",
      E: "Like answer A, this would strengthen the case for evidence-based interventions."
    },
    difficulty: "hard",
    passageId: "rc-exp24-p4",
  },
];

// Export all RC questions from Set 24
export const rcQuestionsExpSet24: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet24 = {
  passage1: { id: "rc-exp24-p1", content: passage1, topic: "law", title: "Habeas Corpus and Detention Rights" },
  passage2: { id: "rc-exp24-p2", content: passage2, topic: "natural-sciences", title: "Symbiosis and Mutualistic Relationships" },
  passage3: { id: "rc-exp24-p3", content: passage3, topic: "humanities", title: "The Harlem Renaissance in Literature" },
  passage4: { id: "rc-exp24-p4", content: passage4, topic: "social-sciences", title: "Education Reform and Achievement Gaps" },
};
