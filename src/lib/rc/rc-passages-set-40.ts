// Reading Comprehension Expansion Set 40
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - AGENCY LAW AND FIDUCIARY DUTIES
// ============================================

const passage1 = `Agency law governs relationships in which one party, the agent, acts on behalf of another party, the principal, creating legal consequences that bind the principal. This deceptively simple framework underlies an enormous range of commercial and personal relationships, from corporate officers acting for shareholders to real estate agents representing buyers or sellers. At the heart of agency law lies the concept of fiduciary duty, which imposes on agents obligations of loyalty, care, and good faith that exceed those found in ordinary commercial relationships.

The duty of loyalty represents the most fundamental fiduciary obligation. An agent must subordinate personal interests to those of the principal whenever the two might conflict. This prohibition extends beyond actual conflicts to encompass situations where the agent's independent judgment might reasonably be questioned. A corporate director, for example, may not take a business opportunity that the corporation might have pursued, even if the director believes in good faith that the corporation would have declined it. The duty operates prophylactically, preventing agents from being placed in situations where temptation might compromise their judgment rather than merely punishing disloyal acts after the fact.

Courts have traditionally applied fiduciary duties with considerable rigor, holding that agents must not only avoid active disloyalty but must also make full disclosure of any information relevant to the agency relationship. The duty of candor requires agents to reveal conflicts of interest, share material information that might affect the principal's decisions, and correct any misunderstandings the principal may have about relevant circumstances. Failure to disclose, even absent any intent to deceive, can constitute a breach of fiduciary duty subjecting the agent to liability.

Recent decades have witnessed significant debate about whether fiduciary duties should remain as stringent as traditional formulations suggest. Scholars aligned with the law and economics movement argue that fiduciary duties represent default rules that parties should be free to modify by contract. On this view, sophisticated commercial actors might rationally choose to reduce fiduciary protections in exchange for lower agency costs or greater flexibility. Mandatory fiduciary rules, these scholars contend, impose one-size-fits-all obligations that may not reflect the actual preferences of principals and agents in particular relationships.

Defenders of traditional fiduciary standards respond that the duties serve values beyond mere efficiency. Fiduciary relationships often involve vulnerability and information asymmetry that make principals unable to protect themselves through contract. Moreover, robust fiduciary duties express important social norms about trust and integrity in relationships of dependency. Reducing these duties to negotiable contract terms, critics argue, would erode both the legal protection and the cultural expectations that make fiduciary relationships viable. The resolution of this debate has profound implications for corporate governance, professional regulation, and the law's approach to relationships of trust more generally.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp40-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Fiduciary duties should be eliminated from agency law because they impose excessive costs on commercial relationships." },
      { letter: "B", text: "The duty of loyalty is the only meaningful obligation imposed on agents under contemporary agency law." },
      { letter: "C", text: "Agency law imposes fiduciary duties on agents, including loyalty and disclosure obligations, though scholars debate whether these duties should remain mandatory or become contractually modifiable." },
      { letter: "D", text: "Law and economics scholars have successfully reformed agency law by demonstrating that fiduciary duties are inefficient." },
      { letter: "E", text: "The duty of candor has replaced the duty of loyalty as the primary fiduciary obligation in modern agency relationships." },
    ],
    correctAnswer: "C",
    explanation: "The passage explains the fundamentals of agency law and fiduciary duties (loyalty, candor, disclosure), then presents the debate between those who favor contractual flexibility and those who defend traditional mandatory standards. Answer C captures this comprehensive scope without taking sides in the debate.",
    difficulty: "medium",
    passageId: "rc-exp40-p1",
  },
  {
    id: "rc-exp40-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the duty of loyalty prohibits an agent from",
    answerChoices: [
      { letter: "A", text: "representing multiple principals simultaneously under any circumstances" },
      { letter: "B", text: "being placed in situations where independent judgment might reasonably be questioned" },
      { letter: "C", text: "making any profit whatsoever from the agency relationship" },
      { letter: "D", text: "communicating with third parties on behalf of the principal" },
      { letter: "E", text: "delegating responsibilities to subordinate agents" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the duty of loyalty 'extends beyond actual conflicts to encompass situations where the agent's independent judgment might reasonably be questioned.' The duty operates 'prophylactically, preventing agents from being placed in situations where temptation might compromise their judgment.'",
    difficulty: "easy",
    passageId: "rc-exp40-p1",
  },
  {
    id: "rc-exp40-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which of the following can most reasonably be inferred about law and economics scholars?",
    answerChoices: [
      { letter: "A", text: "They believe that principals are generally more sophisticated than agents in commercial relationships." },
      { letter: "B", text: "They view fiduciary duties primarily through the lens of what parties would voluntarily agree to." },
      { letter: "C", text: "They have successfully persuaded courts to abandon traditional fiduciary standards." },
      { letter: "D", text: "They oppose all legal regulation of agency relationships." },
      { letter: "E", text: "They believe that information asymmetry is irrelevant to the structure of agency law." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that law and economics scholars 'argue that fiduciary duties represent default rules that parties should be free to modify by contract' and that 'sophisticated commercial actors might rationally choose to reduce fiduciary protections.' This indicates they view fiduciary duties through the lens of voluntary agreement and party autonomy.",
    difficulty: "medium",
    passageId: "rc-exp40-p1",
  },
  {
    id: "rc-exp40-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions 'a corporate director' taking a business opportunity primarily in order to",
    answerChoices: [
      { letter: "A", text: "illustrate how the duty of loyalty extends beyond actual wrongdoing to situations of potential conflict" },
      { letter: "B", text: "criticize the law and economics approach to fiduciary duties" },
      { letter: "C", text: "demonstrate that corporate directors face stricter obligations than other types of agents" },
      { letter: "D", text: "argue that fiduciary duties should be relaxed in corporate contexts" },
      { letter: "E", text: "contrast the duty of loyalty with the duty of candor" },
    ],
    correctAnswer: "A",
    explanation: "The corporate director example appears immediately after the passage states that the duty of loyalty 'extends beyond actual conflicts' and applies even when the director 'believes in good faith that the corporation would have declined' the opportunity. The example illustrates the prophylactic nature of the duty.",
    difficulty: "medium",
    passageId: "rc-exp40-p1",
  },
  {
    id: "rc-exp40-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate between law and economics scholars and defenders of traditional fiduciary standards can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of the law and economics position" },
      { letter: "B", text: "dismissive of both sides as missing the central issues" },
      { letter: "C", text: "expository and balanced, presenting both perspectives without explicit endorsement" },
      { letter: "D", text: "skeptical of any legal reform to fiduciary duties" },
      { letter: "E", text: "convinced that the traditional approach will ultimately prevail" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the law and economics argument ('Scholars aligned with the law and economics movement argue...') and the defenders' response ('Defenders of traditional fiduciary standards respond...') without indicating which view is correct. The final sentence notes 'profound implications' without taking sides.",
    difficulty: "medium",
    passageId: "rc-exp40-p1",
  },
  {
    id: "rc-exp40-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most weaken the argument made by defenders of traditional fiduciary standards?",
    answerChoices: [
      { letter: "A", text: "Many principals in agency relationships possess significant expertise and bargaining power relative to their agents." },
      { letter: "B", text: "Courts have become increasingly willing to find breaches of fiduciary duty in recent decades." },
      { letter: "C", text: "Some jurisdictions have adopted stricter fiduciary standards than others without any apparent negative effects." },
      { letter: "D", text: "Fiduciary duties have existed in legal systems for centuries across many different cultures." },
      { letter: "E", text: "Professional organizations often impose ethical standards that exceed legal requirements." },
    ],
    correctAnswer: "A",
    explanation: "Defenders argue that 'fiduciary relationships often involve vulnerability and information asymmetry that make principals unable to protect themselves through contract.' If many principals actually possess 'significant expertise and bargaining power,' this would undermine the defenders' premise that principals need mandatory protection due to vulnerability.",
    difficulty: "hard",
    passageId: "rc-exp40-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - PALEONTOLOGY AND FOSSIL RECORD
// ============================================

const passage2 = `The fossil record has long served as the primary empirical foundation for understanding the history of life on Earth, yet paleontologists have increasingly recognized that this record is far from a complete archive. Fossils form only under specific geological conditions, and the vast majority of organisms that have ever lived left no trace in the rock record. This incompleteness poses fundamental challenges for reconstructing evolutionary history and has sparked vigorous debate about how to interpret the patterns we do observe.

Taphonomy, the study of what happens to organisms after death and before fossilization, reveals the many filters that separate living communities from fossil assemblages. Soft-bodied organisms rarely fossilize unless exceptional conditions—such as rapid burial in fine-grained sediments or oxygen-depleted waters—preserve their tissues. Even among organisms with hard parts like shells or bones, the probability of entering the fossil record depends on factors including body size, habitat, population size, and geological setting. Marine organisms in continental shelf environments, for example, are far more likely to fossilize than terrestrial organisms in upland regions where erosion predominates over deposition.

These biases have profound implications for understanding major evolutionary events. The Cambrian explosion, during which most major animal phyla appear suddenly in the fossil record approximately 540 million years ago, has been interpreted variously as reflecting a genuine rapid diversification, an artifact of improved preservation conditions, or a combination of both. Molecular clock analyses, which estimate divergence times based on rates of genetic change, often suggest that animal lineages originated tens of millions of years before their first appearance as fossils. Reconciling these molecular and morphological dates remains one of paleontology's most contested problems.

The concept of Lagerstatten—fossil deposits with exceptional preservation—has transformed understanding of what the fossil record can reveal. Sites like the Burgess Shale in Canada and the Chengjiang deposits in China preserve soft-bodied organisms with remarkable fidelity, providing windows into ancient ecosystems far richer than typical fossil assemblages suggest. These exceptional deposits demonstrate that the apparent dominance of certain groups in the fossil record may reflect preservation bias rather than actual ecological importance. Conversely, they confirm that the fossil record, properly interpreted, contains far more information than skeptics have sometimes suggested.

Contemporary paleontology increasingly employs quantitative methods to account for sampling biases and incomplete preservation. Researchers develop statistical models that estimate true diversity from observed fossil occurrences, attempt to distinguish genuine extinction events from apparent disappearances caused by gaps in the record, and test whether observed patterns require biological explanations or might arise from geological artifacts alone. This methodological sophistication has not resolved fundamental debates about the completeness and reliability of the fossil record, but it has made those debates more rigorous and has clarified what kinds of evidence could, in principle, settle them.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp40-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Cambrian explosion represents the most significant challenge to evolutionary theory posed by the fossil record." },
      { letter: "B", text: "Molecular clock analyses have definitively shown that the fossil record is too incomplete to be scientifically useful." },
      { letter: "C", text: "The fossil record is inherently incomplete due to preservation biases, presenting challenges for evolutionary interpretation that paleontologists address through various analytical approaches." },
      { letter: "D", text: "Lagerstatten deposits have replaced ordinary fossil sites as the primary source of paleontological evidence." },
      { letter: "E", text: "Taphonomy has demonstrated that no reliable conclusions can be drawn from fossil evidence." },
    ],
    correctAnswer: "C",
    explanation: "The passage discusses the incompleteness of the fossil record, explains the biases revealed by taphonomy, considers implications for understanding evolution, highlights exceptional preservation sites, and describes quantitative methods for addressing these challenges. Answer C captures this balanced overview.",
    difficulty: "medium",
    passageId: "rc-exp40-p2",
  },
  {
    id: "rc-exp40-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, which of the following factors affects the probability of an organism entering the fossil record?",
    answerChoices: [
      { letter: "A", text: "The organism's genetic complexity" },
      { letter: "B", text: "Whether the organism was a predator or prey species" },
      { letter: "C", text: "The organism's body size and habitat" },
      { letter: "D", text: "The organism's evolutionary relationship to modern species" },
      { letter: "E", text: "Whether scientists have searched for fossils in relevant locations" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'the probability of entering the fossil record depends on factors including body size, habitat, population size, and geological setting.' Answer C correctly identifies two of these explicitly mentioned factors.",
    difficulty: "easy",
    passageId: "rc-exp40-p2",
  },
  {
    id: "rc-exp40-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following can most reasonably be inferred about molecular clock analyses?",
    answerChoices: [
      { letter: "A", text: "They invariably produce estimates that agree with dates derived from the fossil record." },
      { letter: "B", text: "They suggest that some evolutionary divergences occurred earlier than fossils alone would indicate." },
      { letter: "C", text: "They have been rejected by most paleontologists as unreliable." },
      { letter: "D", text: "They can only be applied to organisms that have left an extensive fossil record." },
      { letter: "E", text: "They confirm that the Cambrian explosion was a genuine rapid diversification." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that molecular clock analyses 'often suggest that animal lineages originated tens of millions of years before their first appearance as fossils.' This directly supports the inference that molecular data indicates earlier divergences than the fossil record shows.",
    difficulty: "medium",
    passageId: "rc-exp40-p2",
  },
  {
    id: "rc-exp40-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the Burgess Shale and Chengjiang deposits primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that exceptional preservation sites are more valuable than ordinary fossil deposits" },
      { letter: "B", text: "demonstrate that exceptional deposits reveal the limitations and potential of the fossil record" },
      { letter: "C", text: "criticize paleontologists who rely too heavily on typical fossil assemblages" },
      { letter: "D", text: "prove that the Cambrian explosion was an artifact of preservation conditions" },
      { letter: "E", text: "suggest that soft-bodied organisms were more ecologically important than hard-bodied organisms" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses Lagerstatten to make two points: they show that 'apparent dominance of certain groups...may reflect preservation bias' (a limitation), and they 'confirm that the fossil record...contains far more information than skeptics have sometimes suggested' (potential). Answer B captures both aspects.",
    difficulty: "medium",
    passageId: "rc-exp40-p2",
  },
  {
    id: "rc-exp40-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward quantitative methods in paleontology can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive, viewing them as unable to address fundamental problems" },
      { letter: "B", text: "enthusiastic, considering them to have resolved major debates" },
      { letter: "C", text: "appreciative, recognizing their value for increasing rigor while acknowledging unresolved issues" },
      { letter: "D", text: "skeptical, suggesting they create more problems than they solve" },
      { letter: "E", text: "indifferent, considering methodology less important than new fossil discoveries" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that 'methodological sophistication has not resolved fundamental debates' but 'has made those debates more rigorous and has clarified what kinds of evidence could, in principle, settle them.' This indicates appreciation for the methods' contributions while acknowledging limitations.",
    difficulty: "medium",
    passageId: "rc-exp40-p2",
  },
  {
    id: "rc-exp40-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, a paleontologist seeking to understand the evolutionary history of a group of small, soft-bodied terrestrial organisms would most likely",
    answerChoices: [
      { letter: "A", text: "assume that the fossil record for such organisms is essentially complete" },
      { letter: "B", text: "focus exclusively on molecular clock analyses while ignoring any available fossils" },
      { letter: "C", text: "expect significant preservation biases and seek exceptional deposits where such organisms might be preserved" },
      { letter: "D", text: "conclude that no meaningful information about the group's history can be obtained" },
      { letter: "E", text: "prioritize marine fossil sites over terrestrial ones regardless of where the organisms lived" },
    ],
    correctAnswer: "C",
    explanation: "The passage indicates that soft-bodied organisms 'rarely fossilize unless exceptional conditions' preserve them, and terrestrial upland organisms are less likely to fossilize than marine shelf organisms. A researcher would therefore expect biases and seek Lagerstatten-type deposits for such organisms.",
    difficulty: "hard",
    passageId: "rc-exp40-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - SYMBOLISM IN FRENCH POETRY
// ============================================

const passage3 = `The Symbolist movement that emerged in French poetry during the 1880s represented a decisive rejection of the aesthetic principles that had governed literature for much of the nineteenth century. Where Romantic poets had sought direct emotional expression and Parnassian poets had pursued formal perfection and objective description, the Symbolists cultivated ambiguity, suggestion, and the evocation of ineffable states of consciousness. Their influence extended far beyond France, shaping modernist poetry in English, German, Spanish, and numerous other languages well into the twentieth century.

Stephane Mallarme, perhaps the most theoretically rigorous of the Symbolists, articulated an aesthetic vision in which poetry approached the condition of music. For Mallarme, the poet's task was not to name objects or describe scenes but to suggest the emotional and spiritual resonances that ordinary language obscures. His famous dictum that poetry should "paint not the thing but the effect it produces" encapsulates this approach. The result was verse of extraordinary difficulty, in which syntax fragments, images multiply without resolution, and meaning seems perpetually deferred. Critics have debated whether Mallarme's hermetic style represents the apotheosis of poetic art or its dissolution into private obscurantism.

Paul Verlaine, by contrast, emphasized the musical qualities of verse through attention to sound, rhythm, and the subtle modulations of mood. His "Art poetique" proclaimed that poetry should be "music above all else" and counseled poets to prefer "nuance" to precise color. Verlaine's verse, while less syntactically radical than Mallarme's, achieves effects of remarkable delicacy through careful manipulation of vowel sounds, line lengths, and the interplay of image and emotion. His influence on subsequent French poetry was perhaps even greater than Mallarme's, in part because his techniques proved more accessible to imitation.

Arthur Rimbaud, the enfant terrible of the movement, pushed Symbolist aesthetics toward hallucinatory intensity and systematic derangement. His prose poems and later verse abandon conventional imagery for sequences of vision that seem to arise from altered states of consciousness. Rimbaud's famous letter advocating the "derangement of all the senses" as a method of poetic discovery influenced not only later poets but also visual artists and musicians seeking to transcend rational perception. That he abandoned poetry entirely at age twenty, devoting his remaining years to commerce in Africa, only enhanced his legendary status as the poet who lived his aesthetic to its radical conclusion.

The legacy of Symbolism remains contested. Some critics view the movement as liberating poetry from the constraints of literal meaning, opening possibilities explored by Surrealism, Language poetry, and various experimental traditions. Others argue that Symbolist obscurity severed poetry from its audience, initiating a century of increasingly marginal art appealing only to specialists. What remains undisputed is that the Symbolists permanently altered expectations about what poetry could and should do, establishing ambiguity and suggestiveness as legitimate—indeed, for some, essential—poetic values.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp40-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Mallarme was the only Symbolist poet whose work has lasting significance." },
      { letter: "B", text: "The Symbolist movement rejected earlier poetic conventions in favor of suggestion and ambiguity, profoundly influencing subsequent poetry despite ongoing debates about its legacy." },
      { letter: "C", text: "Symbolist poetry failed because it alienated readers through unnecessary obscurity." },
      { letter: "D", text: "Rimbaud's abandonment of poetry proves that Symbolist aesthetics were ultimately unsustainable." },
      { letter: "E", text: "French poetry in the nineteenth century was characterized by increasing technical precision." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces Symbolism as a rejection of earlier aesthetics, discusses three major figures and their distinct approaches, and concludes by noting both the movement's influence and contested legacy. Answer B captures this comprehensive treatment without overstating any particular evaluation.",
    difficulty: "medium",
    passageId: "rc-exp40-p3",
  },
  {
    id: "rc-exp40-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Mallarme believed that poetry should",
    answerChoices: [
      { letter: "A", text: "describe objects and scenes with precise accuracy" },
      { letter: "B", text: "express emotions directly and forcefully" },
      { letter: "C", text: "suggest emotional and spiritual resonances rather than naming objects" },
      { letter: "D", text: "imitate the formal perfection of Parnassian verse" },
      { letter: "E", text: "appeal to the widest possible audience through accessibility" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that for Mallarme, 'the poet's task was not to name objects or describe scenes but to suggest the emotional and spiritual resonances that ordinary language obscures.'",
    difficulty: "easy",
    passageId: "rc-exp40-p3",
  },
  {
    id: "rc-exp40-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following can most reasonably be inferred about Verlaine's influence compared to Mallarme's?",
    answerChoices: [
      { letter: "A", text: "Verlaine's influence was limited because his poetry lacked theoretical sophistication." },
      { letter: "B", text: "Verlaine's techniques were more widely adopted in part because they were easier to emulate." },
      { letter: "C", text: "Verlaine's poetry was considered inferior to Mallarme's by most subsequent poets." },
      { letter: "D", text: "Verlaine and Mallarme had identical effects on the development of French poetry." },
      { letter: "E", text: "Verlaine rejected the Symbolist emphasis on music in favor of visual imagery." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Verlaine's influence 'was perhaps even greater than Mallarme's, in part because his techniques proved more accessible to imitation.' This directly supports the inference that wider adoption resulted from easier emulation.",
    difficulty: "medium",
    passageId: "rc-exp40-p3",
  },
  {
    id: "rc-exp40-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Rimbaud's abandonment of poetry and subsequent life in Africa primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Rimbaud for failing to fulfill his artistic potential" },
      { letter: "B", text: "suggest that his radical aesthetic principles were impractical for sustained creative work" },
      { letter: "C", text: "explain how this biographical detail contributed to his legendary status" },
      { letter: "D", text: "contrast Rimbaud's life choices with those of Mallarme and Verlaine" },
      { letter: "E", text: "argue that commerce is incompatible with artistic achievement" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that Rimbaud's abandonment of poetry and turn to commerce 'only enhanced his legendary status as the poet who lived his aesthetic to its radical conclusion.' The biographical detail is mentioned to explain his mythic reputation.",
    difficulty: "medium",
    passageId: "rc-exp40-p3",
  },
  {
    id: "rc-exp40-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the debate about Symbolism's legacy can best be described as",
    answerChoices: [
      { letter: "A", text: "firmly convinced that Symbolism liberated poetry from unnecessary constraints" },
      { letter: "B", text: "strongly critical of the movement for alienating poetry's audience" },
      { letter: "C", text: "neutral and descriptive, presenting competing interpretations without endorsing either" },
      { letter: "D", text: "dismissive of the entire debate as unimportant to contemporary poetry" },
      { letter: "E", text: "nostalgic for the pre-Symbolist traditions that the movement displaced" },
    ],
    correctAnswer: "C",
    explanation: "The final paragraph presents 'some critics' who view the movement as liberating and 'others' who argue it severed poetry from audiences, then concludes only with what 'remains undisputed'—the movement's impact—without taking sides in the evaluative debate.",
    difficulty: "medium",
    passageId: "rc-exp40-p3",
  },
  {
    id: "rc-exp40-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A movement is introduced, three representative figures are discussed, and the movement's contested legacy is assessed." },
      { letter: "B", text: "A thesis is stated, counterarguments are presented, and the thesis is defended." },
      { letter: "C", text: "Three competing theories are compared and one is shown to be superior." },
      { letter: "D", text: "A historical period is surveyed chronologically from beginning to end." },
      { letter: "E", text: "A critical controversy is described and definitively resolved." },
    ],
    correctAnswer: "A",
    explanation: "The passage begins by introducing Symbolism and its rejection of earlier aesthetics (paragraph 1), then discusses Mallarme (paragraph 2), Verlaine (paragraph 3), and Rimbaud (paragraph 4), and concludes with the contested legacy of the movement (paragraph 5).",
    difficulty: "medium",
    passageId: "rc-exp40-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - PUBLIC OPINION AND POLLING
// ============================================

const passage4 = `Public opinion polling has become ubiquitous in democratic societies, shaping political campaigns, guiding policy decisions, and framing media coverage of public affairs. Yet the enterprise rests on assumptions about the nature and measurability of public opinion that critics have challenged since polling's earliest days. Understanding both the power and the limitations of polls requires grappling with fundamental questions about what public opinion is and whether survey methods can adequately capture it.

The pioneers of modern polling—George Gallup, Elmo Roper, and Archibald Crossley—developed their methods in the 1930s based on the principle of random sampling. If respondents are selected randomly from the population of interest, a relatively small sample can yield accurate estimates of population-wide attitudes, with quantifiable margins of error. This insight revolutionized the measurement of public sentiment, replacing earlier methods like straw polls and expert intuition with seemingly scientific precision. The dramatic success of the early pollsters in predicting election outcomes lent credibility to their broader claims about measuring public opinion on policy questions.

Critics have raised both methodological and conceptual objections to polling. On the methodological side, declining response rates pose an increasingly serious challenge. In the 1970s, response rates for telephone surveys commonly exceeded 70 percent; today, rates below 10 percent are typical for many surveys. If those who decline to participate differ systematically from those who cooperate, poll results may misrepresent the population even if samples are technically random. Pollsters employ various weighting techniques to correct for known biases, but these adjustments require assumptions that may not hold in practice.

Conceptually, critics question whether the opinions polls purport to measure exist prior to and independent of the polling process itself. Many respondents have not thought carefully about the issues surveys address and may construct responses on the spot based on question wording, context effects, or social desirability considerations. The phenomenon of "non-attitudes"—in which respondents offer opinions on fictitious issues or provide random responses to genuine questions—suggests that polls sometimes measure artifacts of the survey instrument rather than genuine public views. Moreover, by treating all opinions as equally weighted, polls may obscure the intensity differences that determine political outcomes.

Despite these critiques, polling remains central to democratic governance. Defenders argue that alternatives to systematic polling—relying on elite judgment, interest group pressure, or media interpretation—are more vulnerable to bias and manipulation. They contend that methodological challenges, while real, can be addressed through transparent reporting of methods, appropriate humility about uncertainty, and continued research into improving survey techniques. The debate ultimately reflects deeper tensions in democratic theory between aggregative conceptions that emphasize counting preferences and deliberative approaches that value the quality of public reasoning over its mere measurement.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp40-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that public opinion polling should be abandoned due to insurmountable methodological problems" },
      { letter: "B", text: "trace the historical development of polling from the 1930s to the present day" },
      { letter: "C", text: "examine the assumptions underlying public opinion polling, the criticisms it has faced, and its contested role in democratic governance" },
      { letter: "D", text: "demonstrate that random sampling produces perfectly accurate measurements of public opinion" },
      { letter: "E", text: "compare the polling methods of Gallup, Roper, and Crossley to contemporary techniques" },
    ],
    correctAnswer: "C",
    explanation: "The passage discusses polling's assumptions and methods, presents both methodological and conceptual critiques, considers defenders' responses, and frames the debate in terms of democratic theory. Answer C captures this comprehensive examination of multiple perspectives.",
    difficulty: "medium",
    passageId: "rc-exp40-p4",
  },
  {
    id: "rc-exp40-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the phenomenon of 'non-attitudes' refers to",
    answerChoices: [
      { letter: "A", text: "respondents who refuse to participate in surveys" },
      { letter: "B", text: "opinions that people hold with exceptionally strong intensity" },
      { letter: "C", text: "situations where respondents offer opinions on fictitious issues or provide random responses" },
      { letter: "D", text: "the tendency of pollsters to ignore minority viewpoints" },
      { letter: "E", text: "systematic differences between those who respond to surveys and those who do not" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly defines non-attitudes as situations 'in which respondents offer opinions on fictitious issues or provide random responses to genuine questions.'",
    difficulty: "easy",
    passageId: "rc-exp40-p4",
  },
  {
    id: "rc-exp40-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following can most reasonably be inferred about response rates in contemporary polling?",
    answerChoices: [
      { letter: "A", text: "Low response rates have no effect on the accuracy of poll results." },
      { letter: "B", text: "Weighting techniques completely eliminate any bias introduced by low response rates." },
      { letter: "C", text: "The dramatic decline in response rates raises concerns about whether poll samples represent the broader population." },
      { letter: "D", text: "Response rates have remained stable since the 1970s." },
      { letter: "E", text: "Only telephone surveys suffer from declining response rates." },
    ],
    correctAnswer: "C",
    explanation: "The passage notes that response rates have declined from over 70 percent to below 10 percent and states that 'if those who decline to participate differ systematically from those who cooperate, poll results may misrepresent the population.' This raises concern about representativeness.",
    difficulty: "medium",
    passageId: "rc-exp40-p4",
  },
  {
    id: "rc-exp40-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions 'elite judgment, interest group pressure, or media interpretation' primarily in order to",
    answerChoices: [
      { letter: "A", text: "identify methods that are superior to systematic polling" },
      { letter: "B", text: "present alternatives that defenders of polling argue are more problematic" },
      { letter: "C", text: "criticize the influence of elites on democratic governance" },
      { letter: "D", text: "suggest that polls should be supplemented by these other approaches" },
      { letter: "E", text: "explain why polling became popular in the 1930s" },
    ],
    correctAnswer: "B",
    explanation: "These alternatives appear in the paragraph presenting defenders' arguments. Defenders 'argue that alternatives to systematic polling—relying on elite judgment, interest group pressure, or media interpretation—are more vulnerable to bias and manipulation.' The alternatives are mentioned to strengthen the case for polling.",
    difficulty: "medium",
    passageId: "rc-exp40-p4",
  },
  {
    id: "rc-exp40-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the value of public opinion polling can best be described as",
    answerChoices: [
      { letter: "A", text: "uncritically enthusiastic about polling's contributions to democracy" },
      { letter: "B", text: "entirely dismissive of polling as a legitimate enterprise" },
      { letter: "C", text: "balanced and analytical, acknowledging both significant concerns and continued importance" },
      { letter: "D", text: "nostalgic for pre-polling methods of gauging public sentiment" },
      { letter: "E", text: "confident that all methodological problems will soon be solved" },
    ],
    correctAnswer: "C",
    explanation: "The author presents serious methodological and conceptual critiques while also noting that polling 'remains central to democratic governance' and presenting defenders' arguments. The final sentence frames the issue in terms of deeper theoretical tensions, maintaining analytical balance.",
    difficulty: "medium",
    passageId: "rc-exp40-p4",
  },
  {
    id: "rc-exp40-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the conceptual critique of polling described in the passage?",
    answerChoices: [
      { letter: "A", text: "Advances in statistical methods have improved pollsters' ability to weight samples accurately." },
      { letter: "B", text: "A study finds that many respondents give different answers to the same question when it is worded differently." },
      { letter: "C", text: "Response rates for online surveys are higher than for telephone surveys." },
      { letter: "D", text: "Polls accurately predicted the outcome of several recent elections." },
      { letter: "E", text: "Most democratic countries rely on polling to some degree in making policy decisions." },
    ],
    correctAnswer: "B",
    explanation: "The conceptual critique questions whether opinions 'exist prior to and independent of the polling process' and notes that respondents 'may construct responses on the spot based on question wording.' Evidence that different wordings produce different answers would directly support this critique by showing that responses depend on the survey instrument rather than pre-existing opinions.",
    difficulty: "hard",
    passageId: "rc-exp40-p4",
  },
];

// Export all RC questions from Set 40
export const rcQuestionsExpSet40: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet40 = {
  passage1: { id: "rc-exp40-p1", content: passage1, topic: "law", title: "Agency Law and Fiduciary Duties" },
  passage2: { id: "rc-exp40-p2", content: passage2, topic: "natural-sciences", title: "Paleontology and the Fossil Record" },
  passage3: { id: "rc-exp40-p3", content: passage3, topic: "humanities", title: "Symbolism in French Poetry" },
  passage4: { id: "rc-exp40-p4", content: passage4, topic: "social-sciences", title: "Public Opinion and Polling" },
};
