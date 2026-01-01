// Reading Comprehension Expansion Set 17
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - EMINENT DOMAIN AND PROPERTY RIGHTS
// ============================================

const passage1 = `The Fifth Amendment's Takings Clause provides that private property shall not "be taken for public use, without just compensation." This deceptively simple language has generated centuries of litigation over two fundamental questions: what constitutes a "taking" and what qualifies as "public use"? The Supreme Court's evolving interpretations of these concepts have profoundly shaped the relationship between property rights and governmental authority in American constitutional law.

Traditional takings doctrine distinguished between physical appropriations of property and regulatory restrictions on its use. When government physically occupies or confiscates property—condemning land for a highway, for example—the requirement for compensation has always been clear. More contested are "regulatory takings," where government restrictions reduce property value without physical appropriation. In Pennsylvania Coal Co. v. Mahon (1922), Justice Holmes famously declared that regulations diminishing property value too greatly constituted takings requiring compensation, but he provided no precise formula for determining when this threshold was crossed.

The public use requirement underwent dramatic reinterpretation in Kelo v. City of New London (2005), which upheld the condemnation of private homes for transfer to private developers as part of an economic development plan. The Court reasoned that economic development, even when benefiting private parties, served a public purpose sufficient to satisfy the Takings Clause. The decision sparked intense criticism from across the political spectrum, with opponents arguing that it effectively eliminated meaningful limits on eminent domain. If economic development qualifies as public use, critics contended, virtually any taking serving any governmental objective would pass constitutional muster.

The Kelo backlash prompted legislative responses in forty-three states, with many enacting restrictions on economic development takings. Some states amended their constitutions to prohibit condemnation for private development purposes. Others imposed procedural requirements or enhanced compensation standards. This state-level activity illustrates how federalism can provide a check on constitutional interpretation: when the Supreme Court interprets federal constitutional protections narrowly, states may provide more robust protection through their own laws.

The takings debate reflects deeper tensions between competing visions of property rights. Libertarian scholars emphasize property as a bulwark against government overreach, viewing strong takings protections as essential to individual liberty and economic prosperity. Progressive scholars counter that property rights are socially constructed and must yield to collective needs, particularly when concentrated wealth perpetuates inequality. These philosophical differences ensure that takings doctrine will remain contested terrain, with courts navigating between the Scylla of inadequate protection for property owners and the Charybdis of paralyzed government unable to pursue legitimate public objectives.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp17-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Kelo decision definitively resolved all constitutional questions about eminent domain by establishing that economic development satisfies the public use requirement." },
      { letter: "B", text: "The Takings Clause has generated ongoing disputes about what constitutes a taking and what qualifies as public use, reflecting deeper philosophical disagreements about property rights that continue to shape law and policy." },
      { letter: "C", text: "State legislatures have proven more protective of property rights than federal courts, making state constitutional amendments the primary mechanism for limiting eminent domain." },
      { letter: "D", text: "The distinction between physical takings and regulatory takings has been abandoned by modern courts in favor of a unified standard based on diminution of property value." },
      { letter: "E", text: "Progressive scholars have successfully argued that property rights should always yield to governmental authority when collective needs are at stake." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolving interpretation of the Takings Clause, examining both the 'taking' and 'public use' requirements, discussing Kelo and its aftermath, and concluding with the deeper philosophical tensions underlying takings doctrine. Answer B captures this comprehensive treatment of ongoing disputes reflecting fundamental disagreements.",
    difficulty: "medium",
    passageId: "rc-exp17-p1",
  },
  {
    id: "rc-exp17-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Kelo decision was criticized primarily because",
    answerChoices: [
      { letter: "A", text: "it required states to pay higher compensation for condemned properties" },
      { letter: "B", text: "it interpreted the public use requirement so broadly that virtually any governmental objective could justify condemnation" },
      { letter: "C", text: "it overruled the precedent established in Pennsylvania Coal Co. v. Mahon" },
      { letter: "D", text: "it failed to provide adequate procedures for property owners to contest condemnation" },
      { letter: "E", text: "it permitted only government agencies, rather than private developers, to benefit from condemnation" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that critics argued Kelo 'effectively eliminated meaningful limits on eminent domain' because 'If economic development qualifies as public use, critics contended, virtually any taking serving any governmental objective would pass constitutional muster.'",
    difficulty: "easy",
    passageId: "rc-exp17-p1",
  },
  {
    id: "rc-exp17-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage most strongly suggests that Justice Holmes's opinion in Pennsylvania Coal Co. v. Mahon",
    answerChoices: [
      { letter: "A", text: "was immediately overruled by subsequent Supreme Court decisions" },
      { letter: "B", text: "established clear criteria for determining when regulatory takings require compensation" },
      { letter: "C", text: "recognized that regulations could constitute takings but left uncertain how to determine when this occurred" },
      { letter: "D", text: "held that regulations never constitute takings regardless of their economic impact" },
      { letter: "E", text: "addressed the public use requirement rather than the definition of takings" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that Holmes 'declared that regulations diminishing property value too greatly constituted takings requiring compensation, but he provided no precise formula for determining when this threshold was crossed.' This indicates recognition of regulatory takings while leaving the standard uncertain.",
    difficulty: "medium",
    passageId: "rc-exp17-p1",
  },
  {
    id: "rc-exp17-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the legislative responses in forty-three states primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that the Supreme Court should reconsider its decision in Kelo" },
      { letter: "B", text: "demonstrate that state-level action can supplement federal constitutional protections when courts interpret them narrowly" },
      { letter: "C", text: "criticize states that failed to enact restrictions on economic development takings" },
      { letter: "D", text: "suggest that constitutional amendments are more effective than statutory changes" },
      { letter: "E", text: "prove that property rights are valued more highly by state governments than by the federal government" },
    ],
    correctAnswer: "B",
    explanation: "The passage uses the state legislative responses to illustrate 'how federalism can provide a check on constitutional interpretation: when the Supreme Court interprets federal constitutional protections narrowly, states may provide more robust protection through their own laws.'",
    difficulty: "medium",
    passageId: "rc-exp17-p1",
  },
  {
    id: "rc-exp17-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the ongoing debates about takings doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "frustrated by the failure of courts to adopt clear standards" },
      { letter: "B", text: "dismissive of the philosophical disagreements underlying the debates" },
      { letter: "C", text: "analytically detached while recognizing the genuine tensions involved" },
      { letter: "D", text: "strongly supportive of the libertarian position on property rights" },
      { letter: "E", text: "confident that the progressive view will ultimately prevail" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both libertarian and progressive perspectives without endorsing either, describes the courts as 'navigating' between competing concerns, and characterizes the debates as reflecting 'deeper tensions' that ensure the doctrine 'will remain contested terrain.' This reflects analytical detachment combined with acknowledgment of genuine tensions.",
    difficulty: "medium",
    passageId: "rc-exp17-p1",
  },
  {
    id: "rc-exp17-006",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which one of the following situations would most likely satisfy the public use requirement under the Kelo interpretation?",
    answerChoices: [
      { letter: "A", text: "A city condemns land solely to transfer it to a politically connected developer with no stated public benefit" },
      { letter: "B", text: "A city condemns residential property as part of a comprehensive plan to revitalize a blighted neighborhood through mixed commercial and residential development" },
      { letter: "C", text: "A state prohibits construction on wetlands without condemning the property or paying compensation" },
      { letter: "D", text: "A federal agency physically occupies private land for military exercises without the owner's consent" },
      { letter: "E", text: "A municipality reduces property values through zoning changes that restrict commercial uses" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Kelo upheld condemnation 'for transfer to private developers as part of an economic development plan' on the grounds that 'economic development, even when benefiting private parties, served a public purpose.' A comprehensive revitalization plan for a blighted neighborhood most closely parallels this reasoning.",
    difficulty: "hard",
    passageId: "rc-exp17-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - NEUROTRANSMITTERS AND MENTAL HEALTH
// ============================================

const passage2 = `The monoamine hypothesis, which dominated psychiatric research for decades, proposed that depression results from deficiencies in neurotransmitters such as serotonin, norepinephrine, and dopamine. This theory emerged from observations that drugs affecting monoamine systems—particularly those increasing synaptic availability of these neurotransmitters—often alleviated depressive symptoms. The development of selective serotonin reuptake inhibitors (SSRIs) in the 1980s, designed specifically to increase serotonin availability, seemed to validate this model and transformed the treatment of depression worldwide.

However, accumulating evidence has revealed significant limitations of the monoamine hypothesis. Most troublingly, SSRIs increase synaptic serotonin levels within hours of administration, yet therapeutic effects typically require weeks to manifest. If depression simply resulted from low serotonin, symptom relief should be immediate. This temporal disconnect suggests that increased neurotransmitter availability is not itself therapeutic but rather triggers downstream processes—perhaps involving neuroplasticity, neurogenesis, or inflammatory pathways—that ultimately produce improvement.

Recent research has increasingly focused on glutamate, the brain's primary excitatory neurotransmitter, and its role in depression. The rapid antidepressant effects of ketamine, which acts primarily on glutamate receptors, have generated particular excitement. Unlike SSRIs, ketamine can produce significant symptom improvement within hours, suggesting it may target more proximate causes of depression. Studies indicate that ketamine promotes synaptic plasticity and the growth of new neural connections, possibly reversing the synaptic atrophy observed in depressed patients. This mechanism represents a paradigm shift from modulating monoamine levels to directly enhancing neural connectivity.

The inflammatory hypothesis offers another alternative framework. Elevated levels of inflammatory markers consistently appear in depressed patients, and medical conditions involving chronic inflammation frequently co-occur with depression. Some researchers propose that inflammation directly impairs neurotransmitter synthesis, reduces neuroplasticity, and alters brain circuits involved in mood regulation. Clinical trials of anti-inflammatory agents as adjunctive treatments for depression have shown promising results, particularly in patients with elevated inflammatory biomarkers.

These developments suggest that depression is not a single disorder with a unified mechanism but rather a heterogeneous syndrome with multiple potential etiologies. Different patients may experience depression through different pathways—some primarily involving monoamine dysregulation, others driven by inflammation, and still others by glutamatergic dysfunction. This heterogeneity helps explain why no single treatment works for all patients and why the field is moving toward personalized approaches that match treatments to individual biological profiles. The future of depression treatment likely lies not in identifying the cause of depression but in recognizing and targeting its diverse causes.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp17-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The monoamine hypothesis has been completely disproven and should be abandoned in favor of the glutamate model of depression." },
      { letter: "B", text: "SSRIs remain the most effective treatment for depression despite the limitations of the monoamine hypothesis." },
      { letter: "C", text: "Depression appears to be a heterogeneous condition with multiple biological mechanisms, suggesting that personalized treatment approaches may be more effective than universal therapies." },
      { letter: "D", text: "Ketamine will soon replace SSRIs as the primary treatment for depression due to its rapid effects on glutamate receptors." },
      { letter: "E", text: "Inflammation is the primary cause of depression, and anti-inflammatory treatments should become the standard of care." },
    ],
    correctAnswer: "C",
    explanation: "The passage systematically presents limitations of the monoamine hypothesis, alternative mechanisms involving glutamate and inflammation, and concludes that depression is 'a heterogeneous syndrome with multiple potential etiologies' requiring 'personalized approaches that match treatments to individual biological profiles.'",
    difficulty: "medium",
    passageId: "rc-exp17-p2",
  },
  {
    id: "rc-exp17-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the temporal disconnect between SSRI administration and therapeutic effects suggests that",
    answerChoices: [
      { letter: "A", text: "SSRIs do not actually affect serotonin levels in the brain" },
      { letter: "B", text: "increased neurotransmitter availability triggers downstream processes that ultimately produce improvement" },
      { letter: "C", text: "depression is not a real medical condition" },
      { letter: "D", text: "patients require weeks to absorb sufficient medication to reach therapeutic levels" },
      { letter: "E", text: "the placebo effect accounts for most improvement seen with antidepressants" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'This temporal disconnect suggests that increased neurotransmitter availability is not itself therapeutic but rather triggers downstream processes—perhaps involving neuroplasticity, neurogenesis, or inflammatory pathways—that ultimately produce improvement.'",
    difficulty: "easy",
    passageId: "rc-exp17-p2",
  },
  {
    id: "rc-exp17-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about ketamine's mechanism of action?",
    answerChoices: [
      { letter: "A", text: "It functions identically to SSRIs but at higher doses" },
      { letter: "B", text: "It operates through pathways more directly connected to the underlying causes of depressive symptoms than traditional antidepressants" },
      { letter: "C", text: "It has been proven to be safer than SSRIs for long-term use" },
      { letter: "D", text: "It exclusively targets inflammatory pathways in the brain" },
      { letter: "E", text: "It increases monoamine levels more rapidly than SSRIs" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that ketamine's rapid effects, in contrast to the delayed effects of SSRIs, suggest 'it may target more proximate causes of depression.' The discussion of its effects on synaptic plasticity and neural connectivity supports the inference that it acts through pathways more directly connected to underlying causes.",
    difficulty: "medium",
    passageId: "rc-exp17-p2",
  },
  {
    id: "rc-exp17-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the co-occurrence of depression with medical conditions involving chronic inflammation primarily in order to",
    answerChoices: [
      { letter: "A", text: "suggest that depression is not a genuine medical condition but rather a symptom of other diseases" },
      { letter: "B", text: "provide evidence supporting the hypothesis that inflammation may play a causal role in depression" },
      { letter: "C", text: "argue that anti-inflammatory medications should replace all other treatments for depression" },
      { letter: "D", text: "demonstrate that the monoamine hypothesis is completely incorrect" },
      { letter: "E", text: "explain why SSRIs are ineffective for most patients" },
    ],
    correctAnswer: "B",
    explanation: "This observation appears in the paragraph presenting the inflammatory hypothesis, along with elevated inflammatory markers in depressed patients. Together, these points provide evidence for the claim that 'inflammation directly impairs neurotransmitter synthesis, reduces neuroplasticity, and alters brain circuits involved in mood regulation.'",
    difficulty: "medium",
    passageId: "rc-exp17-p2",
  },
  {
    id: "rc-exp17-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the monoamine hypothesis can best be characterized as",
    answerChoices: [
      { letter: "A", text: "entirely dismissive, viewing it as a discredited theory with no remaining value" },
      { letter: "B", text: "uncritically supportive, considering it the definitive explanation for depression" },
      { letter: "C", text: "critical but nuanced, acknowledging its historical importance while recognizing its limitations" },
      { letter: "D", text: "confused and uncertain about its validity" },
      { letter: "E", text: "hostile and accusatory toward researchers who developed it" },
    ],
    correctAnswer: "C",
    explanation: "The author describes how the monoamine hypothesis 'dominated psychiatric research for decades' and notes that SSRI development 'seemed to validate this model,' acknowledging its historical significance. However, the author also presents 'significant limitations' while suggesting monoamine dysregulation may still be relevant for 'some' patients. This reflects critical but nuanced engagement.",
    difficulty: "medium",
    passageId: "rc-exp17-p2",
  },
  {
    id: "rc-exp17-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the author's claim about the heterogeneity of depression?",
    answerChoices: [
      { letter: "A", text: "A study finds that all depressed patients have identical levels of inflammatory markers." },
      { letter: "B", text: "Research shows that patients with high inflammatory biomarkers respond better to anti-inflammatory adjuncts while patients with normal inflammation respond better to SSRIs alone." },
      { letter: "C", text: "A new medication is discovered that works equally well for all depressed patients regardless of their biological profiles." },
      { letter: "D", text: "Scientists identify a single gene that causes all forms of depression." },
      { letter: "E", text: "Studies demonstrate that ketamine and SSRIs work through identical mechanisms." },
    ],
    correctAnswer: "B",
    explanation: "The author argues that depression is heterogeneous with 'multiple potential etiologies' and that 'Different patients may experience depression through different pathways.' Evidence that distinct patient subgroups respond to different treatments based on their biological profiles would directly support this heterogeneity claim.",
    difficulty: "hard",
    passageId: "rc-exp17-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - THE NOVEL AS ART FORM
// ============================================

const passage3 = `The nineteenth century witnessed the novel's emergence as the dominant literary form in Western culture, displacing poetry and drama from their traditional positions of cultural prestige. This transformation involved not merely shifts in reading habits but fundamental reconceptions of literature's relationship to society, individual consciousness, and the nature of artistic representation itself. Understanding this development requires examining both the social conditions that favored the novel's rise and the aesthetic innovations that established its distinctive capacities.

The novel's ascent corresponded with the expansion of literacy and the emergence of a substantial middle-class reading public with leisure time and disposable income for books. Unlike poetry, which demanded classical education and aesthetic cultivation, or drama, which required theater attendance, the novel could be consumed privately in domestic settings by readers of varied backgrounds. Publishers responded to this expanding market with serialized fiction in magazines and affordable editions, making the novel accessible as never before. The lending library system further democratized access, allowing readers to consume novels they could not afford to purchase.

Aesthetically, nineteenth-century novelists developed techniques that distinguished the novel from earlier prose fiction. The realistic novel, pioneered by writers like Balzac, Flaubert, and Eliot, created densely detailed social worlds that seemed to mirror contemporary reality. Free indirect discourse—a technique blending narrator's voice with character's consciousness—allowed unprecedented access to characters' inner lives. The bildungsroman traced individual development through social experience, making the relationship between self and society the novel's central concern. These innovations established the novel as uniquely suited to exploring the complexities of modern bourgeois existence.

Critics of the novel's cultural dominance emerged from the start. Some aesthetes viewed the novel as inherently vulgar, pandering to mass tastes rather than cultivating refined sensibility. Others worried about the novel's effects on impressionable readers, particularly women, whom moralists feared might confuse fictional romance with reality or absorb inappropriate ideas about social transgression. Yet defenders argued that the novel's engagement with ordinary life made it more truthful than the elevated genres, and its accessibility more democratic than arts reserved for the educated elite.

The debates about the novel's cultural status anticipated later controversies about popular versus high culture. When modernist writers like Joyce and Woolf transformed novelistic conventions in the early twentieth century, they simultaneously claimed the novel for high art and demonstrated its capacity for formal experimentation. The novel's journey from suspect entertainment to canonical literature to experimental art form reveals how aesthetic categories are historically constructed and perpetually contested rather than fixed in nature.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp17-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The novel replaced poetry and drama as the dominant literary form primarily because it was cheaper to produce and distribute than other literary genres." },
      { letter: "B", text: "The nineteenth-century novel's rise to cultural dominance resulted from both social factors expanding readership and aesthetic innovations establishing its distinctive literary capacities, though its status remained contested." },
      { letter: "C", text: "Critics of the novel were ultimately proven correct in their assessment that it was an inferior literary form compared to poetry and drama." },
      { letter: "D", text: "The modernist experiments of Joyce and Woolf were the first literary innovations to distinguish the novel from earlier prose fiction." },
      { letter: "E", text: "The realistic novel failed to capture the complexities of modern existence because it focused exclusively on the middle class." },
    ],
    correctAnswer: "B",
    explanation: "The passage examines both social conditions (expanding literacy, middle-class readers, serialization, lending libraries) and aesthetic innovations (realism, free indirect discourse, bildungsroman) that enabled the novel's dominance, while also discussing ongoing debates about its cultural status. Answer B captures this dual focus on social and aesthetic factors along with the contested nature of the novel's status.",
    difficulty: "medium",
    passageId: "rc-exp17-p3",
  },
  {
    id: "rc-exp17-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, free indirect discourse is a technique that",
    answerChoices: [
      { letter: "A", text: "was developed by modernist writers like Joyce and Woolf" },
      { letter: "B", text: "blends the narrator's voice with a character's consciousness" },
      { letter: "C", text: "traces individual development through social experience" },
      { letter: "D", text: "creates serialized fiction for magazine publication" },
      { letter: "E", text: "elevates the novel above poetry and drama" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly defines free indirect discourse as 'a technique blending narrator's voice with character's consciousness' that 'allowed unprecedented access to characters' inner lives.'",
    difficulty: "easy",
    passageId: "rc-exp17-p3",
  },
  {
    id: "rc-exp17-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about nineteenth-century moralists who criticized the novel?",
    answerChoices: [
      { letter: "A", text: "They believed that women were more susceptible than men to the novel's potentially harmful influences" },
      { letter: "B", text: "They rejected all forms of literary entertainment as morally corrupting" },
      { letter: "C", text: "They considered poetry and drama equally dangerous to impressionable readers" },
      { letter: "D", text: "They eventually came to accept the novel as a legitimate art form" },
      { letter: "E", text: "They objected primarily to the novel's realistic depiction of social conditions" },
    ],
    correctAnswer: "A",
    explanation: "The passage states that moralists 'worried about the novel's effects on impressionable readers, particularly women,' suggesting they viewed women as especially susceptible to the novel's potential harms, such as confusing 'fictional romance with reality' or absorbing 'inappropriate ideas about social transgression.'",
    difficulty: "medium",
    passageId: "rc-exp17-p3",
  },
  {
    id: "rc-exp17-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions the lending library system primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the commercialization of literature in the nineteenth century" },
      { letter: "B", text: "illustrate how institutional developments expanded access to novels beyond those who could afford to purchase them" },
      { letter: "C", text: "argue that lending libraries were more important than publishers in the novel's rise" },
      { letter: "D", text: "compare nineteenth-century reading practices with contemporary habits" },
      { letter: "E", text: "explain why poetry declined in cultural prestige during this period" },
    ],
    correctAnswer: "B",
    explanation: "The lending library system is mentioned in the context of factors that made 'the novel accessible as never before.' The passage notes that lending libraries 'further democratized access, allowing readers to consume novels they could not afford to purchase,' illustrating expanded accessibility.",
    difficulty: "medium",
    passageId: "rc-exp17-p3",
  },
  {
    id: "rc-exp17-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the author would most likely agree with which one of the following statements about aesthetic categories?",
    answerChoices: [
      { letter: "A", text: "Aesthetic categories reflect objective distinctions between higher and lower forms of art." },
      { letter: "B", text: "Aesthetic categories are arbitrary impositions with no relationship to genuine artistic qualities." },
      { letter: "C", text: "Aesthetic categories are shaped by historical processes and remain subject to ongoing debate and revision." },
      { letter: "D", text: "Aesthetic categories were finally settled by the modernist movement in the early twentieth century." },
      { letter: "E", text: "Aesthetic categories apply only to literature and not to other art forms." },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'The novel's journey from suspect entertainment to canonical literature to experimental art form reveals how aesthetic categories are historically constructed and perpetually contested rather than fixed in nature.' This directly supports answer C.",
    difficulty: "medium",
    passageId: "rc-exp17-p3",
  },
  {
    id: "rc-exp17-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A claim is made, counterarguments are presented, and the original claim is abandoned in favor of a new thesis." },
      { letter: "B", text: "A historical development is introduced, social and aesthetic factors contributing to it are examined, contemporary debates are discussed, and broader implications are drawn." },
      { letter: "C", text: "Two competing theories about a phenomenon are compared, and one is ultimately endorsed as superior." },
      { letter: "D", text: "A chronological history of the novel from its origins to the present day is traced in detail." },
      { letter: "E", text: "An aesthetic theory is proposed, tested through analysis of specific literary works, and confirmed." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces the novel's nineteenth-century rise to dominance (paragraph 1), examines social factors (paragraph 2), discusses aesthetic innovations (paragraph 3), presents contemporary debates about the novel's status (paragraph 4), and draws broader implications about aesthetic categories (paragraph 5). This matches the structure described in answer B.",
    difficulty: "hard",
    passageId: "rc-exp17-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - POLITICAL POLARIZATION AND MEDIA
// ============================================

const passage4 = `Political polarization—the divergence of political attitudes toward ideological extremes—has become a defining feature of contemporary democratic societies, particularly in the United States. While some degree of partisan difference is inherent to democracy, scholars increasingly worry that current levels of polarization threaten the capacity for compromise essential to democratic governance. Understanding how media environments contribute to polarization has become urgent as citizens navigate an information landscape transformed by digital technology.

The selective exposure hypothesis proposes that individuals preferentially consume media that confirms their existing beliefs while avoiding challenging perspectives. This tendency, which psychological research links to the discomfort of cognitive dissonance, has been amplified by algorithmic curation that personalizes content feeds based on user preferences and engagement patterns. The result, critics argue, is a fragmented public sphere in which citizens inhabit separate informational worlds, never encountering the arguments of their political opponents. Such "filter bubbles" or "echo chambers" purportedly intensify polarization by eliminating the moderating influence of exposure to diverse viewpoints.

Empirical research, however, has complicated this straightforward narrative. Studies tracking actual media consumption reveal that most citizens consume considerable cross-cutting content, encountering opposing views more frequently than the echo chamber metaphor suggests. The most politically engaged citizens, who might be expected to inhabit the tightest filter bubbles, often seek out opposing media precisely to understand and counter enemy arguments. Moreover, some research indicates that exposure to opposing views can paradoxically increase polarization, as partisans reject dissonant information or respond with defensive reasoning that reinforces existing beliefs.

These findings suggest that polarization may stem less from informational isolation than from how citizens process the information they encounter. Identity-based polarization—in which partisan affiliation functions as a social identity similar to ethnicity or religion—may drive hostile reactions to opposing views regardless of exposure levels. When political disagreement becomes a matter of group loyalty rather than policy difference, compromise appears not as pragmatic problem-solving but as betrayal of one's tribe. The affective dimension of polarization, measured by feelings of warmth toward one's own party and hostility toward the opposition, has increased even faster than ideological divergence.

Media environments likely contribute to polarization not primarily through selective exposure but through their effects on the nature of political discourse. Social media platforms incentivize emotionally charged content that generates engagement, promoting outrage and conflict over nuanced deliberation. Elite polarization among politicians and commentators sets cues that mass publics follow. The business model of partisan media rewards audience cultivation through identity affirmation rather than informing citizens about policy tradeoffs. Addressing polarization may require not merely exposing citizens to diverse information but transforming the incentive structures that shape how political information is produced and consumed.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp17-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that social media companies should be regulated to prevent polarization" },
      { letter: "B", text: "defend the selective exposure hypothesis against its critics" },
      { letter: "C", text: "examine the relationship between media and political polarization, challenging simple echo chamber explanations while identifying alternative mechanisms" },
      { letter: "D", text: "demonstrate that political polarization is not actually increasing in contemporary democracies" },
      { letter: "E", text: "compare American polarization with polarization in other democratic societies" },
    ],
    correctAnswer: "C",
    explanation: "The passage introduces concerns about polarization and media, presents the selective exposure/echo chamber hypothesis, complicates that hypothesis with empirical findings, offers alternative explanations involving identity and information processing, and concludes with thoughts about media's actual mechanisms of influence. Answer C captures this comprehensive examination that challenges simple explanations while identifying alternatives.",
    difficulty: "medium",
    passageId: "rc-exp17-p4",
  },
  {
    id: "rc-exp17-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the selective exposure hypothesis proposes that",
    answerChoices: [
      { letter: "A", text: "algorithmic curation completely determines what content citizens encounter" },
      { letter: "B", text: "individuals preferentially consume media confirming their existing beliefs while avoiding challenging perspectives" },
      { letter: "C", text: "exposure to opposing views always reduces political polarization" },
      { letter: "D", text: "most citizens consume very little political news of any kind" },
      { letter: "E", text: "partisan media is more profitable than non-partisan media" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'The selective exposure hypothesis proposes that individuals preferentially consume media that confirms their existing beliefs while avoiding challenging perspectives.'",
    difficulty: "easy",
    passageId: "rc-exp17-p4",
  },
  {
    id: "rc-exp17-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the finding that politically engaged citizens often seek out opposing media most directly undermines which one of the following claims?",
    answerChoices: [
      { letter: "A", text: "Political polarization is increasing in contemporary democracies." },
      { letter: "B", text: "The most partisan citizens inhabit the tightest informational echo chambers." },
      { letter: "C", text: "Algorithmic curation personalizes content based on user preferences." },
      { letter: "D", text: "Cognitive dissonance makes encountering opposing views uncomfortable." },
      { letter: "E", text: "Elite polarization influences mass public attitudes." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'The most politically engaged citizens, who might be expected to inhabit the tightest filter bubbles, often seek out opposing media precisely to understand and counter enemy arguments.' This finding directly contradicts the expectation that highly engaged partisans would be most isolated in echo chambers.",
    difficulty: "medium",
    passageId: "rc-exp17-p4",
  },
  {
    id: "rc-exp17-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's discussion of identity-based polarization serves primarily to",
    answerChoices: [
      { letter: "A", text: "reject all media-based explanations of political polarization" },
      { letter: "B", text: "suggest that informational factors may matter less than how citizens psychologically relate to political groups" },
      { letter: "C", text: "argue that partisan affiliation is genetically determined like ethnicity" },
      { letter: "D", text: "defend the selective exposure hypothesis against empirical challenges" },
      { letter: "E", text: "propose that policy differences between parties have become trivial" },
    ],
    correctAnswer: "B",
    explanation: "The identity-based polarization discussion follows findings that 'polarization may stem less from informational isolation than from how citizens process the information they encounter.' The comparison to ethnicity and religion illustrates how partisan identity can drive hostile reactions 'regardless of exposure levels,' suggesting psychological identity factors may outweigh informational ones.",
    difficulty: "medium",
    passageId: "rc-exp17-p4",
  },
  {
    id: "rc-exp17-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the echo chamber explanation of polarization can best be described as",
    answerChoices: [
      { letter: "A", text: "wholly accepting of its accuracy and explanatory power" },
      { letter: "B", text: "skeptical of its simplicity while acknowledging media's role through alternative mechanisms" },
      { letter: "C", text: "dismissive of any connection between media and political polarization" },
      { letter: "D", text: "uncertain about whether political polarization actually exists" },
      { letter: "E", text: "enthusiastically supportive of algorithmic content curation" },
    ],
    correctAnswer: "B",
    explanation: "The author presents the echo chamber hypothesis, then notes that 'Empirical research has complicated this straightforward narrative' with evidence that citizens encounter more cross-cutting content than expected and that exposure can paradoxically increase polarization. Yet the author still identifies media mechanisms (incentivizing outrage, elite cues, partisan business models) that likely contribute to polarization 'not primarily through selective exposure but through their effects on the nature of political discourse.'",
    difficulty: "medium",
    passageId: "rc-exp17-p4",
  },
  {
    id: "rc-exp17-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the author's suggestion about addressing polarization?",
    answerChoices: [
      { letter: "A", text: "A study finds that social media platforms that removed engagement-based algorithms showed no reduction in users' partisan hostility." },
      { letter: "B", text: "Research demonstrates that partisan media has become more profitable in recent years." },
      { letter: "C", text: "Evidence shows that elite politicians have become more polarized over the past decade." },
      { letter: "D", text: "Surveys reveal that citizens express interest in encountering diverse viewpoints." },
      { letter: "E", text: "Analysis indicates that affective polarization correlates with increased social media use." },
    ],
    correctAnswer: "A",
    explanation: "The author suggests that 'Addressing polarization may require... transforming the incentive structures that shape how political information is produced and consumed,' specifically citing how 'Social media platforms incentivize emotionally charged content that generates engagement.' If changing these algorithmic incentive structures produced no reduction in partisan hostility, this would weaken the author's suggestion that transforming such incentives is necessary for addressing polarization.",
    difficulty: "hard",
    passageId: "rc-exp17-p4",
  },
];

// Export all RC questions from Set 17
export const rcQuestionsExpSet17: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet17 = {
  passage1: { id: "rc-exp17-p1", content: passage1, topic: "law", title: "Eminent Domain and Property Rights" },
  passage2: { id: "rc-exp17-p2", content: passage2, topic: "natural-sciences", title: "Neurotransmitters and Mental Health" },
  passage3: { id: "rc-exp17-p3", content: passage3, topic: "humanities", title: "The Novel as Art Form" },
  passage4: { id: "rc-exp17-p4", content: passage4, topic: "social-sciences", title: "Political Polarization and Media" },
};
