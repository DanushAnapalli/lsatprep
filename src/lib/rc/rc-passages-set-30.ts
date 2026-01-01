// Reading Comprehension Expansion Set 30
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - SENTENCING GUIDELINES AND JUDICIAL DISCRETION
// ============================================

const passage1 = `The tension between uniform sentencing guidelines and judicial discretion represents one of the most persistent debates in American criminal justice. For much of the twentieth century, judges possessed broad authority to impose sentences within wide statutory ranges, tailoring punishment to the particular circumstances of individual offenders. This discretionary approach allowed for individualized justice but produced significant disparities: defendants convicted of similar crimes could receive vastly different sentences depending on which judge presided over their case.

The Federal Sentencing Guidelines, established by the Sentencing Reform Act of 1984, represented Congress's attempt to reduce these disparities while maintaining proportionality in punishment. The Guidelines created a complex matrix that calculated recommended sentences based on the severity of the offense and the defendant's criminal history. Judges were initially required to sentence within the calculated range unless they found specific aggravating or mitigating factors not adequately considered by the Guidelines. The goal was to achieve "honesty in sentencing" by eliminating parole and ensuring that imposed sentences closely reflected actual time served.

The Supreme Court's 2005 decision in United States v. Booker fundamentally altered the Guidelines' operation by rendering them advisory rather than mandatory. The Court held that the mandatory nature of the Guidelines violated the Sixth Amendment right to jury trial because they allowed judges to enhance sentences based on facts not found by a jury. After Booker, judges must consult the Guidelines but may impose sentences outside the recommended range if they provide adequate justification. This transformation has revived debates about the proper balance between consistency and individualization.

Proponents of judicial discretion argue that formulaic sentencing fails to account for the complexity of human behavior and circumstances. They contend that experienced judges can weigh factors—a defendant's likelihood of rehabilitation, family responsibilities, or mental health conditions—that mechanical calculations cannot adequately capture. Furthermore, discretion allows the criminal justice system to respond to evolving social understandings of justice and proportionality without requiring legislative action.

Critics of broad discretion respond that it inevitably reintroduces the disparities the Guidelines were designed to eliminate. Empirical studies have documented that post-Booker sentencing varies significantly based on geography, with defendants in some circuits receiving substantially longer sentences than similarly situated defendants elsewhere. Additionally, research suggests that race and socioeconomic status continue to influence sentencing outcomes, disparities that structured guidelines help to constrain. The ongoing challenge is to design sentencing systems that preserve individualized justice while ensuring equal treatment under law.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp30-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Federal Sentencing Guidelines should be abolished entirely because they produce unjust outcomes in all cases." },
      { letter: "B", text: "The tension between sentencing uniformity and judicial discretion remains unresolved, with both approaches offering benefits and drawbacks that continue to shape criminal justice policy." },
      { letter: "C", text: "The Supreme Court's Booker decision definitively resolved all problems with the federal sentencing system." },
      { letter: "D", text: "Judicial discretion in sentencing is inherently unconstitutional and should never be permitted." },
      { letter: "E", text: "Geographic disparities in sentencing are the only significant problem facing the criminal justice system." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the history from discretionary sentencing through mandatory guidelines to the post-Booker advisory system, presenting arguments on both sides of the debate. The final paragraph explicitly notes 'The ongoing challenge is to design sentencing systems that preserve individualized justice while ensuring equal treatment under law,' indicating the tension remains unresolved. Answer B accurately captures this central theme.",
    difficulty: "medium",
    passageId: "rc-exp30-p1",
  },
  {
    id: "rc-exp30-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Supreme Court in United States v. Booker held that the mandatory Guidelines violated the Constitution because they",
    answerChoices: [
      { letter: "A", text: "imposed sentences that were too lenient for serious crimes" },
      { letter: "B", text: "permitted judges to enhance sentences based on facts not found by a jury" },
      { letter: "C", text: "failed to consider defendants' criminal history" },
      { letter: "D", text: "eliminated the possibility of parole for federal defendants" },
      { letter: "E", text: "gave too much authority to the Sentencing Commission" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The Court held that the mandatory nature of the Guidelines violated the Sixth Amendment right to jury trial because they allowed judges to enhance sentences based on facts not found by a jury.' This directly matches answer B.",
    difficulty: "easy",
    passageId: "rc-exp30-p1",
  },
  {
    id: "rc-exp30-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, it can be inferred that before the Federal Sentencing Guidelines were established, federal sentencing was characterized by",
    answerChoices: [
      { letter: "A", text: "complete uniformity across all jurisdictions" },
      { letter: "B", text: "significant variation in sentences imposed for similar crimes" },
      { letter: "C", text: "exclusive reliance on mandatory minimum sentences" },
      { letter: "D", text: "sentences determined solely by juries" },
      { letter: "E", text: "elimination of parole for all federal offenders" },
    ],
    correctAnswer: "B",
    explanation: "The first paragraph states that the discretionary approach 'produced significant disparities: defendants convicted of similar crimes could receive vastly different sentences depending on which judge presided over their case.' This directly supports the inference that there was significant variation in sentences before the Guidelines.",
    difficulty: "medium",
    passageId: "rc-exp30-p1",
  },
  {
    id: "rc-exp30-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions a defendant's 'likelihood of rehabilitation, family responsibilities, or mental health conditions' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize judges for considering irrelevant factors in sentencing decisions" },
      { letter: "B", text: "illustrate the types of individualized factors that proponents argue formulaic sentencing cannot adequately capture" },
      { letter: "C", text: "demonstrate that the Federal Sentencing Guidelines consider these factors appropriately" },
      { letter: "D", text: "argue that all defendants with mental health conditions should receive reduced sentences" },
      { letter: "E", text: "explain why the Supreme Court decided United States v. Booker" },
    ],
    correctAnswer: "B",
    explanation: "These factors appear in the paragraph presenting proponents' arguments for judicial discretion. The passage states that discretion advocates 'contend that experienced judges can weigh factors' that 'mechanical calculations cannot adequately capture,' and then lists these examples. The function is to illustrate what discretion allows that guidelines do not.",
    difficulty: "medium",
    passageId: "rc-exp30-p1",
  },
  {
    id: "rc-exp30-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate between uniform guidelines and judicial discretion can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly partisan in favor of eliminating all sentencing guidelines" },
      { letter: "B", text: "dismissive of the constitutional concerns raised in Booker" },
      { letter: "C", text: "analytically balanced, presenting the merits and drawbacks of both approaches without advocating for either" },
      { letter: "D", text: "skeptical that any sentencing system can achieve just outcomes" },
      { letter: "E", text: "enthusiastically supportive of returning to pre-Guidelines discretionary sentencing" },
    ],
    correctAnswer: "C",
    explanation: "The author presents historical context, the arguments of proponents of discretion in paragraph four, and the arguments of critics in paragraph five, without advocating for either position. The passage concludes by framing the issue as an 'ongoing challenge' rather than proposing a solution. This reflects analytical balance.",
    difficulty: "medium",
    passageId: "rc-exp30-p1",
  },
  {
    id: "rc-exp30-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most weaken the argument made by proponents of judicial discretion as described in the passage?",
    answerChoices: [
      { letter: "A", text: "Judges who receive specialized training in sentencing produce more consistent outcomes than those who do not." },
      { letter: "B", text: "A comprehensive study found that judges with broader discretion systematically impose harsher sentences on defendants from disadvantaged backgrounds regardless of case-specific factors." },
      { letter: "C", text: "Some defendants prefer to be sentenced according to predetermined guidelines rather than at a judge's discretion." },
      { letter: "D", text: "The Sentencing Commission periodically revises the Guidelines based on feedback from judges." },
      { letter: "E", text: "Appellate courts rarely overturn sentences that fall within the Guidelines range." },
    ],
    correctAnswer: "B",
    explanation: "Proponents argue that discretion allows judges to consider individualized factors and achieve better justice. If a study showed that discretion leads to systematic discrimination based on background rather than case-specific factors, this would directly undermine the claim that discretion produces more just outcomes. Answer B provides such evidence.",
    difficulty: "hard",
    passageId: "rc-exp30-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - MICROPLASTICS AND ENVIRONMENTAL IMPACT
// ============================================

const passage2 = `Microplastics—plastic fragments smaller than five millimeters in diameter—have emerged as a pervasive environmental contaminant with implications that scientists are only beginning to understand. Unlike larger plastic debris, which degrades slowly but remains visible, microplastics infiltrate ecosystems at scales that make detection and removal extraordinarily difficult. These particles originate from two primary sources: the breakdown of larger plastic items through photodegradation and mechanical weathering, and the direct release of manufactured microbeads from personal care products and industrial applications.

The ubiquity of microplastic contamination has surprised researchers. Studies have detected these particles in environments ranging from deep ocean sediments to Arctic ice cores, from agricultural soils to urban air. A 2019 study estimated that humans may ingest up to five grams of plastic weekly—approximately the weight of a credit card—through water, food, and air. Marine organisms across trophic levels, from zooplankton to apex predators, accumulate microplastics in their tissues, raising concerns about biomagnification and potential transfer to human consumers of seafood.

The ecological effects of microplastics operate through multiple pathways. Physical ingestion can cause gastrointestinal blockages, reduced feeding, and false satiation in organisms that mistake plastic particles for food. Perhaps more concerning is the role of microplastics as vectors for chemical pollutants. Plastic polymers readily adsorb hydrophobic organic contaminants, including persistent organic pollutants and heavy metals, from surrounding water. When organisms ingest contaminated microplastics, these chemicals may be released and accumulated in tissue, potentially interfering with endocrine function, reproduction, and development.

Laboratory studies have demonstrated toxic effects of microplastics on various organisms, but extrapolating these findings to real-world conditions presents significant challenges. Laboratory exposures often use concentrations far exceeding those measured in the environment, and the plastic particles studied may differ in size, shape, and chemical composition from those that organisms actually encounter. Furthermore, organisms in natural settings face multiple stressors simultaneously, making it difficult to isolate the specific contribution of microplastic exposure to observed health effects.

The policy response to microplastic pollution has been fragmented. Several countries have banned microbeads in cosmetics, addressing one readily identifiable source. However, the larger challenge of secondary microplastics—those formed from the degradation of existing plastic waste—requires broader strategies for reducing plastic production and improving waste management. Some researchers advocate for developing biodegradable alternatives to conventional plastics, though critics note that such materials may simply fragment into different problematic particles rather than truly decomposing into harmless substances.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp30-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Microplastics are a widespread environmental contaminant with multiple concerning effects, though scientific understanding and policy responses remain incomplete." },
      { letter: "B", text: "Banning microbeads in cosmetics will completely solve the problem of microplastic pollution." },
      { letter: "C", text: "Laboratory studies have conclusively proven that microplastics cause severe health effects in all organisms." },
      { letter: "D", text: "Biodegradable plastics are the definitive solution to microplastic contamination." },
      { letter: "E", text: "Microplastics are only found in marine environments and pose no threat to terrestrial ecosystems." },
    ],
    correctAnswer: "A",
    explanation: "The passage discusses the sources and ubiquity of microplastics, their ecological effects through multiple pathways, the challenges of translating laboratory findings to real-world conditions, and the fragmented policy response. Answer A captures this comprehensive treatment of microplastics as a significant but incompletely understood problem.",
    difficulty: "medium",
    passageId: "rc-exp30-p2",
  },
  {
    id: "rc-exp30-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, microplastics can act as vectors for chemical pollutants because",
    answerChoices: [
      { letter: "A", text: "they are manufactured with toxic chemicals intentionally added" },
      { letter: "B", text: "plastic polymers readily adsorb hydrophobic organic contaminants from surrounding water" },
      { letter: "C", text: "they break down into toxic chemical components over time" },
      { letter: "D", text: "they are always produced from recycled materials containing contaminants" },
      { letter: "E", text: "organisms preferentially consume contaminated particles over clean ones" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Plastic polymers readily adsorb hydrophobic organic contaminants, including persistent organic pollutants and heavy metals, from surrounding water.' This directly explains the mechanism by which microplastics serve as vectors for pollutants.",
    difficulty: "easy",
    passageId: "rc-exp30-p2",
  },
  {
    id: "rc-exp30-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, it can be inferred that the author would most likely agree with which of the following statements about laboratory studies of microplastics?",
    answerChoices: [
      { letter: "A", text: "They are completely useless for understanding microplastic effects." },
      { letter: "B", text: "They provide valuable evidence but may not accurately represent real-world exposure conditions." },
      { letter: "C", text: "They should be discontinued in favor of field studies only." },
      { letter: "D", text: "They consistently underestimate the dangers of microplastic exposure." },
      { letter: "E", text: "They have proven that microplastics pose no health risks to any organisms." },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'Laboratory studies have demonstrated toxic effects' but then discusses challenges in extrapolating findings to real-world conditions, including that 'Laboratory exposures often use concentrations far exceeding those measured in the environment.' This suggests the author views laboratory studies as useful but not fully representative of actual conditions.",
    difficulty: "medium",
    passageId: "rc-exp30-p2",
  },
  {
    id: "rc-exp30-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions that humans may ingest 'approximately the weight of a credit card' in plastic weekly primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that human health effects are more important than ecological effects" },
      { letter: "B", text: "provide a concrete, relatable illustration of the extent of human microplastic exposure" },
      { letter: "C", text: "criticize the methodology of the 2019 study" },
      { letter: "D", text: "compare human plastic consumption to that of marine organisms" },
      { letter: "E", text: "demonstrate that plastic ingestion is harmless to humans" },
    ],
    correctAnswer: "B",
    explanation: "The credit card comparison appears in the paragraph discussing the ubiquity of microplastic contamination. By translating an abstract quantity (five grams) into an everyday object's weight, the author makes the extent of human exposure more tangible and comprehensible to readers.",
    difficulty: "medium",
    passageId: "rc-exp30-p2",
  },
  {
    id: "rc-exp30-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward biodegradable plastics as a solution to microplastic pollution can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive without reservation" },
      { letter: "B", text: "cautiously skeptical, noting that they may create different rather than eliminated problems" },
      { letter: "C", text: "completely dismissive as an entirely ineffective approach" },
      { letter: "D", text: "indifferent, as the passage does not address biodegradable alternatives" },
      { letter: "E", text: "strongly opposed due to their higher production costs" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents biodegradable alternatives as advocated by 'some researchers,' then immediately notes that 'critics note that such materials may simply fragment into different problematic particles rather than truly decomposing into harmless substances.' This balanced presentation with a critical caveat suggests cautious skepticism.",
    difficulty: "medium",
    passageId: "rc-exp30-p2",
  },
  {
    id: "rc-exp30-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A problem is defined and its sources explained, its effects are analyzed, limitations of current research are acknowledged, and policy responses are evaluated." },
      { letter: "B", text: "A scientific theory is proposed, experiments to test it are described, and the theory is confirmed." },
      { letter: "C", text: "Two competing explanations for a phenomenon are compared and one is definitively rejected." },
      { letter: "D", text: "A historical narrative traces the discovery of microplastics from earliest observation to present understanding." },
      { letter: "E", text: "An argument for banning all plastic production is developed and defended against objections." },
    ],
    correctAnswer: "A",
    explanation: "The passage follows a clear structure: paragraph one defines microplastics and explains sources; paragraph two discusses ubiquity; paragraph three analyzes ecological effects; paragraph four acknowledges research limitations; paragraph five evaluates policy responses. Answer A accurately describes this organization.",
    difficulty: "hard",
    passageId: "rc-exp30-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - OPERA AND THE SYNTHESIS OF ARTS
// ============================================

const passage3 = `Opera has long been celebrated and criticized as the most ambitious of art forms, one that attempts to synthesize music, drama, poetry, visual spectacle, and dance into a unified aesthetic experience. Since its emergence in late Renaissance Florence, opera has struggled with the fundamental tension between its component arts. Composers, librettists, directors, and designers have offered competing visions of how these elements should relate, producing a remarkably diverse tradition that continues to evolve.

The Florentine Camerata, the group of intellectuals and musicians who developed early opera around 1600, believed they were reviving the practices of ancient Greek tragedy. They conceived of opera as drama enhanced by music, with the text remaining paramount. Jacopo Peri's "Dafne" (1598) and "Euridice" (1600) featured a newly invented recitative style—a manner of singing that followed the natural rhythms and inflections of speech—designed to serve the drama rather than to display vocal virtuosity. This text-centered approach gave way within decades to a more music-dominated style, as audiences delighted in elaborate arias that showcased singers' technical abilities regardless of dramatic appropriateness.

The eighteenth-century reform movement led by Christoph Willibald Gluck sought to restore the balance between drama and music. Gluck's preface to "Alceste" (1769) articulated principles that would influence operatic thinking for generations: music should serve the poetry and situation, eliminating displays of vocal ornament that interrupt the action; the overture should prepare audiences for the drama's character; the orchestra should function as a participant in the drama rather than mere accompaniment. These reforms challenged the conventions of opera seria, which had become formulaic and dramatically static despite its musical sophistication.

Richard Wagner's concept of the Gesamtkunstwerk—the "total work of art"—represented the most systematic attempt to theorize operatic synthesis. Wagner argued that the various arts had become impoverished through separation and specialization, and that only their reunification in the music drama could restore art's power to transform society. In his mature works, Wagner eliminated the distinction between recitative and aria, created a continuous musical fabric unified by leitmotifs—recurring musical themes associated with characters, objects, or ideas—and designed the Bayreuth Festspielhaus specifically to realize his theatrical vision.

Contemporary opera practice continues to negotiate these tensions without achieving any final resolution. Some productions emphasize musical values, treating staging as secondary to vocal and orchestral excellence. Others foreground theatrical innovation, sometimes radically reinterpreting classic works to address contemporary concerns. Still others pursue multimedia integration, incorporating film, video projection, and electronic sound processing in ways that earlier operatic reformers could not have imagined. The question of what opera is and should be remains productively open.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp30-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Richard Wagner's music dramas represent the only successful synthesis of the arts in operatic history." },
      { letter: "B", text: "Opera has continuously grappled with the tension between its component arts, producing diverse approaches to synthesis that continue to evolve without final resolution." },
      { letter: "C", text: "The Florentine Camerata's text-centered approach to opera remains the only artistically valid model." },
      { letter: "D", text: "Contemporary opera has abandoned all traditional principles in favor of multimedia technology." },
      { letter: "E", text: "Gluck's eighteenth-century reforms successfully resolved all tensions between music and drama in opera." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces operatic history from the Florentine Camerata through Gluck's reforms, Wagner's Gesamtkunstwerk, and contemporary practice, emphasizing throughout that 'opera has struggled with the fundamental tension between its component arts.' The conclusion notes that 'The question of what opera is and should be remains productively open.' Answer B captures this central theme of ongoing tension and evolution.",
    difficulty: "medium",
    passageId: "rc-exp30-p3",
  },
  {
    id: "rc-exp30-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the Florentine Camerata believed they were",
    answerChoices: [
      { letter: "A", text: "creating an entirely new art form with no historical precedent" },
      { letter: "B", text: "reviving the practices of ancient Greek tragedy" },
      { letter: "C", text: "rejecting all forms of musical drama" },
      { letter: "D", text: "prioritizing musical virtuosity over dramatic coherence" },
      { letter: "E", text: "following Wagner's principles of the Gesamtkunstwerk" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The Florentine Camerata, the group of intellectuals and musicians who developed early opera around 1600, believed they were reviving the practices of ancient Greek tragedy.'",
    difficulty: "easy",
    passageId: "rc-exp30-p3",
  },
  {
    id: "rc-exp30-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, it can be inferred that Gluck would most likely have objected to",
    answerChoices: [
      { letter: "A", text: "music that serves the dramatic situation and poetry" },
      { letter: "B", text: "overtures that prepare audiences for the character of the drama" },
      { letter: "C", text: "elaborate vocal displays that interrupt the dramatic action" },
      { letter: "D", text: "orchestras that participate meaningfully in the drama" },
      { letter: "E", text: "opera that tells a coherent dramatic story" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that Gluck's principles included 'music should serve the poetry and situation, eliminating displays of vocal ornament that interrupt the action.' Since Gluck advocated for eliminating such displays, he would have objected to them. The other options describe principles Gluck supported.",
    difficulty: "medium",
    passageId: "rc-exp30-p3",
  },
  {
    id: "rc-exp30-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions that Wagner 'designed the Bayreuth Festspielhaus specifically to realize his theatrical vision' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Wagner for excessive expenditure on theatrical production" },
      { letter: "B", text: "illustrate the comprehensive scope of Wagner's approach to synthesizing the arts" },
      { letter: "C", text: "argue that all opera should be performed only in purpose-built theaters" },
      { letter: "D", text: "compare German and Italian approaches to theater architecture" },
      { letter: "E", text: "explain why Wagner's operas are rarely performed today" },
    ],
    correctAnswer: "B",
    explanation: "This detail appears in the paragraph discussing Wagner's Gesamtkunstwerk as 'the most systematic attempt to theorize operatic synthesis.' The mention of Bayreuth illustrates how Wagner's vision extended beyond composition to include the physical space of performance, demonstrating the comprehensive nature of his synthetic approach.",
    difficulty: "medium",
    passageId: "rc-exp30-p3",
  },
  {
    id: "rc-exp30-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's characterization of the ongoing debate about opera's nature as 'productively open' suggests that the author views the lack of resolution as",
    answerChoices: [
      { letter: "A", text: "a failure of operatic theory and practice" },
      { letter: "B", text: "a sign that opera will soon become obsolete" },
      { letter: "C", text: "a source of continuing creative vitality rather than a problem to be solved" },
      { letter: "D", text: "evidence that Wagner's principles have been universally accepted" },
      { letter: "E", text: "an indication that the Florentine Camerata's approach will eventually triumph" },
    ],
    correctAnswer: "C",
    explanation: "The word 'productively' in 'productively open' indicates that the author views the ongoing debate positively. Rather than lamenting the lack of resolution, the author suggests that this openness generates creative possibilities. This interpretation aligns with the passage's presentation of diverse contemporary approaches as legitimate explorations rather than deviations from a correct standard.",
    difficulty: "medium",
    passageId: "rc-exp30-p3",
  },
  {
    id: "rc-exp30-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following contemporary operatic productions would most likely align with Gluck's reform principles?",
    answerChoices: [
      { letter: "A", text: "A production featuring extended virtuosic arias that showcase the soprano's exceptional range regardless of their relevance to the story" },
      { letter: "B", text: "A production emphasizing dramatic coherence where musical elements consistently support the unfolding of the plot and character development" },
      { letter: "C", text: "A production that eliminates the orchestra entirely to focus attention on the singers' technical abilities" },
      { letter: "D", text: "A production using extensive video projections that frequently interrupt the musical performance" },
      { letter: "E", text: "A production where the overture bears no relationship to the themes or mood of the opera that follows" },
    ],
    correctAnswer: "B",
    explanation: "Gluck's reforms emphasized that 'music should serve the poetry and situation' and that 'the orchestra should function as a participant in the drama rather than mere accompaniment.' A production emphasizing dramatic coherence with musical elements supporting plot and character would align with these principles. Answer A contradicts his opposition to displays that 'interrupt the action.'",
    difficulty: "hard",
    passageId: "rc-exp30-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - SUBURBAN DEVELOPMENT AND COMMUNITY
// ============================================

const passage4 = `The massive postwar suburbanization of the United States transformed not only the physical landscape but also the nature of American community. Between 1950 and 1970, suburbs grew by more than 60 million people while central cities added only 10 million. This demographic shift, enabled by federal housing policies, highway construction, and rising automobile ownership, created new patterns of living that sociologists have debated for decades. Some scholars celebrated suburbs as the democratization of the American dream; others condemned them as engines of social fragmentation and conformity.

Early critics drew on a rich tradition of antisuburban sentiment. Lewis Mumford denounced suburban developments as "a multitude of uniform, unidentifiable houses, lined up inflexibly, at uniform distances, on uniform roads, in a treeless communal waste." Sociological studies like William Whyte's "The Organization Man" (1956) portrayed suburban residents as conformist, other-directed personalities who sacrificed individuality for social acceptance. These critiques suggested that suburban design itself—the separation of home from work, the dependence on automobiles, the uniformity of housing—produced a particular kind of alienated subjectivity.

Subsequent research challenged this deterministic view. Herbert Gans's ethnographic study of Levittown, published as "The Levittowners" (1967), found a community that was more complex and vital than critics acknowledged. Residents created meaningful social connections through churches, schools, and voluntary associations. Rather than passive conformists, Levittowners actively shaped their community according to their values and interests. Gans argued that critics confused the physical uniformity of housing with social homogeneity, failing to recognize the diversity of lifestyles that could flourish within outwardly similar structures.

The debate about suburban community cannot be separated from questions of race and exclusion. Federal policies explicitly favored white homeownership through discriminatory lending practices, while restrictive covenants and steering by real estate agents ensured racial segregation. The "community" that suburbs created was often defined as much by who was excluded as by who belonged. Recent scholarship has examined how suburban residents actively defended these boundaries through opposition to public housing, resistance to school integration, and political mobilization against civil rights measures. This work complicates narratives that treat suburbs as either democratic achievements or merely culturally impoverished spaces.

Contemporary suburbs have evolved considerably from their postwar prototypes. Edge cities, mixed-use developments, and increasing suburban diversity have complicated simple distinctions between urban and suburban life. Immigrant communities have transformed many older suburbs, while some newer developments attempt to recreate traditional neighborhood patterns through New Urbanist design principles. Whether these changes herald a fundamental transformation of suburban life or merely adapt its forms to new conditions remains an open question that continues to animate research and policy debate.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp30-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Postwar American suburbs were uniformly negative in their social effects and should never have been built." },
      { letter: "B", text: "American suburbs have been subject to contested interpretations regarding their effects on community, with scholarly debate evolving to encompass issues of race and exclusion alongside questions of social connection." },
      { letter: "C", text: "Herbert Gans definitively proved that all critiques of suburban life are unfounded." },
      { letter: "D", text: "Federal housing policies had no significant effect on patterns of suburban development." },
      { letter: "E", text: "New Urbanist design has completely solved all problems associated with suburban living." },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the sociological debate about suburbs, from early critics through Gans's counterarguments to scholarship addressing race and exclusion, and concludes by noting ongoing evolution and debate. Answer B captures this trajectory of contested interpretations that have expanded to include issues of race and exclusion.",
    difficulty: "medium",
    passageId: "rc-exp30-p4",
  },
  {
    id: "rc-exp30-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Herbert Gans's study of Levittown concluded that",
    answerChoices: [
      { letter: "A", text: "suburban residents were exactly as conformist as critics claimed" },
      { letter: "B", text: "physical uniformity of housing necessarily produced social homogeneity" },
      { letter: "C", text: "residents created meaningful social connections and actively shaped their community" },
      { letter: "D", text: "suburban development was entirely a product of federal policy with no role for individual choice" },
      { letter: "E", text: "Levittown lacked any churches, schools, or voluntary associations" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that Gans 'found a community that was more complex and vital than critics acknowledged. Residents created meaningful social connections through churches, schools, and voluntary associations. Rather than passive conformists, Levittowners actively shaped their community according to their values and interests.'",
    difficulty: "easy",
    passageId: "rc-exp30-p4",
  },
  {
    id: "rc-exp30-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, early critics of suburbia such as Lewis Mumford and William Whyte would most likely have agreed that",
    answerChoices: [
      { letter: "A", text: "suburban residents actively created vital communities that expressed their individual values" },
      { letter: "B", text: "suburban physical design contributed to problematic social and psychological outcomes" },
      { letter: "C", text: "racial segregation was the primary problem with suburban development" },
      { letter: "D", text: "suburban housing offered excellent opportunities for personal expression and creativity" },
      { letter: "E", text: "the diversity of lifestyles in suburbs was underappreciated by contemporary observers" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Mumford denouncing suburban uniformity and Whyte portraying residents as conformist. It then notes that 'These critiques suggested that suburban design itself—the separation of home from work, the dependence on automobiles, the uniformity of housing—produced a particular kind of alienated subjectivity.' Both critics linked physical design to negative social outcomes.",
    difficulty: "medium",
    passageId: "rc-exp30-p4",
  },
  {
    id: "rc-exp30-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses 'discriminatory lending practices' and 'restrictive covenants' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that suburbs were entirely positive developments for American society" },
      { letter: "B", text: "illustrate how suburban community was partly defined through racial exclusion" },
      { letter: "C", text: "demonstrate that Herbert Gans's findings applied to all American suburbs" },
      { letter: "D", text: "explain why early critics like Mumford focused on housing uniformity" },
      { letter: "E", text: "support the claim that suburbs were more diverse than critics acknowledged" },
    ],
    correctAnswer: "B",
    explanation: "These practices are mentioned in the paragraph arguing that 'The debate about suburban community cannot be separated from questions of race and exclusion.' The passage states that 'The community that suburbs created was often defined as much by who was excluded as by who belonged.' The discriminatory practices are cited as mechanisms of exclusion.",
    difficulty: "medium",
    passageId: "rc-exp30-p4",
  },
  {
    id: "rc-exp30-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the scholarly debate about suburban community can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of all perspectives as equally misguided" },
      { letter: "B", text: "uncritically accepting of the early critics' negative assessments" },
      { letter: "C", text: "engaged and balanced, presenting multiple perspectives while noting how the debate has evolved" },
      { letter: "D", text: "nostalgic for the postwar suburban ideal" },
      { letter: "E", text: "certain that New Urbanism provides the definitive solution to all problems raised" },
    ],
    correctAnswer: "C",
    explanation: "The author presents early critics' views, Gans's counterarguments, and scholarship on race and exclusion without definitively endorsing any single perspective. The passage traces how the debate has evolved and concludes by noting that questions about suburban transformation 'remains an open question.' This reflects engaged, balanced treatment of an evolving scholarly conversation.",
    difficulty: "medium",
    passageId: "rc-exp30-p4",
  },
  {
    id: "rc-exp30-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the recent scholarship's claim that suburban residents 'actively defended' racial boundaries?",
    answerChoices: [
      { letter: "A", text: "Suburban housing developments varied considerably in architectural style during the postwar period." },
      { letter: "B", text: "Archival evidence reveals that suburban homeowner associations organized petition drives and legal challenges specifically to prevent integration of their neighborhoods." },
      { letter: "C", text: "Some suburban residents expressed private discomfort with discriminatory policies in their personal correspondence." },
      { letter: "D", text: "Federal housing officials occasionally acknowledged the inequity of their lending practices in internal memoranda." },
      { letter: "E", text: "A few suburban communities voluntarily integrated during the 1960s without significant resident opposition." },
    ],
    correctAnswer: "B",
    explanation: "The passage claims that recent scholarship shows suburban residents 'actively defended these boundaries through opposition to public housing, resistance to school integration, and political mobilization.' Evidence of organized petition drives and legal challenges specifically aimed at preventing integration would directly support the claim of active defense of racial boundaries.",
    difficulty: "hard",
    passageId: "rc-exp30-p4",
  },
];

// Export all RC questions from Set 30
export const rcQuestionsExpSet30: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet30 = {
  passage1: { id: "rc-exp30-p1", content: passage1, topic: "law", title: "Sentencing Guidelines and Judicial Discretion" },
  passage2: { id: "rc-exp30-p2", content: passage2, topic: "natural-sciences", title: "Microplastics and Environmental Impact" },
  passage3: { id: "rc-exp30-p3", content: passage3, topic: "humanities", title: "Opera and the Synthesis of Arts" },
  passage4: { id: "rc-exp30-p4", content: passage4, topic: "social-sciences", title: "Suburban Development and Community" },
};
