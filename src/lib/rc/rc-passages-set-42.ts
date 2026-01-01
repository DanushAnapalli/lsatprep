// Reading Comprehension Expansion Set 42
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - VOTING RIGHTS AND ELECTION LAW
// ============================================

const passage1 = `The Voting Rights Act of 1965 represented the most significant piece of civil rights legislation in American history, transforming electoral participation in the Deep South almost overnight. Section 2 prohibited voting practices that discriminated on the basis of race, while Section 5 required jurisdictions with histories of discrimination to obtain federal "preclearance" before changing their election laws. For nearly five decades, this preclearance requirement served as the primary mechanism for preventing the enactment of discriminatory voting measures.

The Supreme Court's 2013 decision in Shelby County v. Holder fundamentally altered this framework. The Court struck down Section 4(b), which contained the coverage formula determining which jurisdictions were subject to preclearance. Chief Justice Roberts, writing for the majority, reasoned that the formula was based on forty-year-old data that no longer reflected current conditions. While the Court did not invalidate Section 5 itself, without an operative coverage formula, preclearance effectively became unenforceable. The decision placed the burden on Congress to develop a new formula based on contemporary evidence of discrimination.

Critics of the Shelby County decision argue that it unleashed a wave of restrictive voting laws. Within hours of the ruling, several previously covered states announced plans to implement voter identification requirements that had been blocked under preclearance. Subsequent years saw the passage of measures reducing early voting periods, eliminating same-day registration, and purging voter rolls. Voting rights advocates contend that these laws disproportionately burden minority voters, the elderly, and low-income citizens who are less likely to possess government-issued identification or to have the flexibility to vote only on Election Day.

Defenders of the decision and of the new voting regulations offer several counterarguments. They maintain that voter identification requirements protect electoral integrity by preventing fraud, even if documented cases of in-person voter fraud are rare. They argue that early voting reforms achieve administrative efficiency and cost savings. More fundamentally, they contend that the preclearance regime treated covered states as presumptive violators of voting rights, imposing burdens on state sovereignty that were no longer justified given dramatic improvements in minority voter registration and turnout.

The debate over voting rights has increasingly focused on the intent-versus-effects standard in discrimination claims. Section 2 of the Voting Rights Act, which remains intact, prohibits practices that "result in" the denial or abridgment of voting rights. However, the Supreme Court in Brnovich v. Democratic National Committee (2021) adopted a more restrictive interpretation, emphasizing factors such as the size of disparate impacts and the availability of alternative voting mechanisms. This decision makes it more difficult for plaintiffs to challenge voting restrictions under Section 2, shifting the legal landscape further toward requiring proof of discriminatory intent rather than discriminatory effects.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp42-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Voting Rights Act of 1965 was unconstitutional from its inception because it treated certain states differently based on historical data." },
      { letter: "B", text: "The Shelby County decision eliminated all federal oversight of state voting laws, leaving minority voters without legal recourse." },
      { letter: "C", text: "Recent Supreme Court decisions have significantly weakened federal voting rights protections, generating ongoing debate about the appropriate balance between state sovereignty and preventing discrimination." },
      { letter: "D", text: "Voter identification requirements are the primary mechanism by which states currently suppress minority voting." },
      { letter: "E", text: "Congress has failed in its constitutional duty to protect voting rights by refusing to update the preclearance formula." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the evolution from the strong protections of the Voting Rights Act through the Shelby County and Brnovich decisions, which weakened federal oversight, while presenting the ongoing debate between critics and defenders of these changes. Answer C captures this main thrust without overstating any particular position.",
    wrongAnswerExplanations: {
      "A": "The passage does not claim the original Act was unconstitutional; the Court struck down only the coverage formula as outdated, not the Act itself.",
      "B": "This overstates the case; Section 2 remains in effect, and the passage notes it prohibits discriminatory practices, though it has been interpreted more restrictively.",
      "D": "While voter ID laws are mentioned as one type of restriction, the passage discusses multiple types of voting regulations and does not identify any single mechanism as primary.",
      "E": "The passage mentions Congress could develop a new formula but does not characterize congressional inaction as a failure of constitutional duty.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p1",
  },
  {
    id: "rc-exp42-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Supreme Court's decision in Shelby County v. Holder",
    answerChoices: [
      { letter: "A", text: "declared Section 5 of the Voting Rights Act unconstitutional" },
      { letter: "B", text: "invalidated the coverage formula that determined which jurisdictions required preclearance" },
      { letter: "C", text: "required Congress to eliminate all federal oversight of state elections" },
      { letter: "D", text: "was based on evidence of widespread voter fraud in covered jurisdictions" },
      { letter: "E", text: "was unanimously supported by all justices on the Court" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The Court struck down Section 4(b), which contained the coverage formula determining which jurisdictions were subject to preclearance.'",
    wrongAnswerExplanations: {
      "A": "The passage specifically notes that 'the Court did not invalidate Section 5 itself'; it was the coverage formula in Section 4(b) that was struck down.",
      "C": "The passage states the decision 'placed the burden on Congress to develop a new formula,' not that it required elimination of federal oversight.",
      "D": "The decision was based on outdated data in the formula, not on evidence of voter fraud.",
      "E": "The passage refers to 'Chief Justice Roberts, writing for the majority,' implying there was dissent.",
    },
    difficulty: "easy",
    passageId: "rc-exp42-p1",
  },
  {
    id: "rc-exp42-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, it can be inferred that defenders of recent voting regulations would most likely argue that",
    answerChoices: [
      { letter: "A", text: "minority voter registration rates have declined significantly since the Shelby County decision" },
      { letter: "B", text: "the improvements in minority electoral participation suggest that extraordinary federal oversight is no longer necessary" },
      { letter: "C", text: "voter identification requirements were originally designed to target minority voters" },
      { letter: "D", text: "Section 2 of the Voting Rights Act should be repealed entirely" },
      { letter: "E", text: "preclearance requirements should be expanded to cover all fifty states" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that defenders 'contend that the preclearance regime treated covered states as presumptive violators of voting rights, imposing burdens on state sovereignty that were no longer justified given dramatic improvements in minority voter registration and turnout.' This indicates they would argue such oversight is unnecessary.",
    wrongAnswerExplanations: {
      "A": "Defenders cite 'dramatic improvements' in minority registration, not declines.",
      "C": "Defenders argue these requirements 'protect electoral integrity,' not that they were designed to target minorities.",
      "D": "The passage does not suggest defenders want Section 2 repealed.",
      "E": "This would be the opposite of their position; they oppose preclearance burdens.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p1",
  },
  {
    id: "rc-exp42-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions that 'Within hours of the ruling, several previously covered states announced plans to implement voter identification requirements' primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that states had been impatiently waiting for an opportunity to discriminate against minority voters" },
      { letter: "B", text: "illustrate the immediate practical impact of the Shelby County decision on state voting policies" },
      { letter: "C", text: "prove that the Supreme Court's reasoning in Shelby County was factually incorrect" },
      { letter: "D", text: "argue that voter identification requirements are inherently discriminatory" },
      { letter: "E", text: "contrast the efficiency of state governments with the slowness of federal bureaucracy" },
    ],
    correctAnswer: "B",
    explanation: "This detail appears in the paragraph discussing critics' views about the decision's effects. The immediate announcement of previously blocked measures illustrates how quickly the ruling changed what states could do, supporting the claim that the decision 'unleashed a wave of restrictive voting laws.'",
    wrongAnswerExplanations: {
      "A": "While critics might interpret it this way, the author presents this as factual evidence of impact rather than ascribing discriminatory intent to states.",
      "C": "The passage does not use this detail to challenge the Court's reasoning about the coverage formula.",
      "D": "The author presents this as factual context, not as an argument that all ID requirements are discriminatory.",
      "E": "The comparison is not about efficiency versus slowness but about the immediate effects of removing preclearance.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p1",
  },
  {
    id: "rc-exp42-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the ongoing debate about voting rights can best be described as",
    answerChoices: [
      { letter: "A", text: "openly partisan in favor of expanded voting access" },
      { letter: "B", text: "dismissive of concerns about electoral integrity" },
      { letter: "C", text: "analytically neutral, presenting multiple perspectives on contested issues" },
      { letter: "D", text: "skeptical that any meaningful discrimination in voting still exists" },
      { letter: "E", text: "resigned to the inevitability of continued voter suppression" },
    ],
    correctAnswer: "C",
    explanation: "The author presents 'critics' of the Shelby County decision and voting restrictions alongside 'defenders' of both, giving each side's arguments without endorsing either position. The passage describes the debate objectively rather than advocating for a particular view.",
    wrongAnswerExplanations: {
      "A": "The author gives substantial space to defenders' arguments about electoral integrity and state sovereignty, indicating neutrality rather than partisanship.",
      "B": "The author presents electoral integrity concerns as legitimate arguments made by defenders, not as concerns to be dismissed.",
      "D": "The author presents critics' claims about disproportionate burdens on minority voters without dismissing them.",
      "E": "The author describes ongoing legal and political developments without expressing fatalism.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p1",
  },
  {
    id: "rc-exp42-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the position of voting rights advocates as described in the passage?",
    answerChoices: [
      { letter: "A", text: "Studies show that states with voter identification requirements have the same overall turnout rates as states without such requirements." },
      { letter: "B", text: "Research demonstrates that minority voters are significantly less likely than white voters to possess the specific forms of identification required by new voting laws." },
      { letter: "C", text: "Most voters express support for requiring identification to vote when asked in public opinion surveys." },
      { letter: "D", text: "Several previously covered states chose not to change their voting laws after the Shelby County decision." },
      { letter: "E", text: "The administrative costs of operating early voting programs have increased substantially in recent years." },
    ],
    correctAnswer: "B",
    explanation: "Voting rights advocates 'contend that these laws disproportionately burden minority voters' who 'are less likely to possess government-issued identification.' Research showing minority voters are significantly less likely to possess required ID would directly support this contention.",
    wrongAnswerExplanations: {
      "A": "This would undermine advocates' claims by suggesting ID requirements don't affect turnout.",
      "C": "Public support for a policy doesn't address whether it has discriminatory effects.",
      "D": "This would weaken the claim that Shelby County 'unleashed a wave' of restrictive laws.",
      "E": "This supports defenders' arguments about 'administrative efficiency and cost savings,' not advocates' position.",
    },
    difficulty: "hard",
    passageId: "rc-exp42-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - ACOUSTICS AND SOUND PHYSICS
// ============================================

const passage2 = `Sound, at its most fundamental level, consists of longitudinal pressure waves propagating through a medium. When a source vibrates, it creates alternating regions of compression and rarefaction in the surrounding air molecules, which transmit this disturbance outward at approximately 343 meters per second at sea level under standard atmospheric conditions. The human auditory system perceives these pressure variations as sound when they fall within the frequency range of roughly 20 to 20,000 hertz, though this range narrows considerably with age, particularly at higher frequencies.

The physics of sound propagation involves complex interactions between waves and their environment. When sound encounters boundaries between different media or obstacles in its path, it undergoes reflection, refraction, and diffraction. Reflection occurs when sound bounces off surfaces, creating phenomena ranging from simple echoes to the complex reverberations that give concert halls their distinctive acoustic signatures. Refraction bends sound waves when they pass between regions of different temperature or density, explaining why sounds travel farther on cool evenings when temperature gradients create favorable conditions. Diffraction allows sound to bend around obstacles and spread through openings, which is why we can hear someone speaking around a corner even when direct line-of-sight is blocked.

The psychoacoustic relationship between physical sound properties and human perception is surprisingly nonlinear. Loudness, for instance, does not increase proportionally with sound pressure. The decibel scale, which measures sound intensity logarithmically, reflects this: a 10-decibel increase represents a tenfold increase in sound power but is perceived as only approximately twice as loud. This logarithmic relationship allows the human ear to function across an enormous dynamic range, from the rustling of leaves at about 20 decibels to the threshold of pain near 130 decibels—a trillion-fold difference in actual sound power.

Pitch perception presents its own complexities. While pitch generally corresponds to the fundamental frequency of a sound, the brain can perceive a "missing fundamental" when only the harmonic overtones are present. This phenomenon, exploited by small loudspeakers that cannot physically reproduce low frequencies, allows listeners to perceive bass notes that are not actually being produced. The auditory system constructs the perception of the fundamental frequency from the pattern of harmonics, demonstrating that hearing involves active neural processing rather than passive reception of physical stimuli.

Architectural acoustics applies these principles to design spaces that optimize sound for their intended purposes. Concert halls must balance early reflections, which contribute to clarity and intimacy, with later reverberation, which adds warmth and fullness. The ideal reverberation time—the duration for sound to decay by 60 decibels—varies by purpose: approximately two seconds for orchestral music, shorter for speech clarity in lecture halls, and longer for organ music in cathedrals. Modern acoustic design employs computer modeling, physical scale models, and materials science to predict and control how sound will behave in proposed spaces, though the subjective nature of acoustic perception means that listener preferences cannot be entirely reduced to measurable parameters.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp42-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The human ear can detect sounds across an extraordinarily wide range of intensities due to logarithmic perception." },
      { letter: "B", text: "Concert halls require precise acoustic engineering to achieve optimal sound quality for different types of performances." },
      { letter: "C", text: "Sound propagation and perception involve complex physical and psychological phenomena that inform practical applications in architectural acoustics." },
      { letter: "D", text: "The physics of sound waves is fundamentally different from the physics governing other types of wave phenomena." },
      { letter: "E", text: "Modern technology has made it possible to perfectly predict how sounds will behave in any enclosed space." },
    ],
    correctAnswer: "C",
    explanation: "The passage moves from the physical nature of sound waves through propagation phenomena and psychoacoustic perception to practical applications in architectural design. Answer C captures this progression from physics through psychology to application.",
    wrongAnswerExplanations: {
      "A": "This is a supporting detail about psychoacoustics, not the main point of the entire passage.",
      "B": "Architectural acoustics is discussed in the final paragraph as an application, not as the central focus of the passage.",
      "D": "The passage does not compare sound waves to other wave phenomena or claim they are fundamentally different.",
      "E": "The passage explicitly notes that 'listener preferences cannot be entirely reduced to measurable parameters,' contradicting the idea of perfect prediction.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p2",
  },
  {
    id: "rc-exp42-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, diffraction is the phenomenon that explains why",
    answerChoices: [
      { letter: "A", text: "concert halls have distinctive acoustic signatures" },
      { letter: "B", text: "sounds can be heard around corners" },
      { letter: "C", text: "the human ear perceives a tenfold increase in sound power as only twice as loud" },
      { letter: "D", text: "sounds travel farther on cool evenings" },
      { letter: "E", text: "small speakers can produce the perception of bass notes" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Diffraction allows sound to bend around obstacles and spread through openings, which is why we can hear someone speaking around a corner even when direct line-of-sight is blocked.'",
    wrongAnswerExplanations: {
      "A": "Concert hall signatures are attributed to 'complex reverberations' from reflection, not diffraction.",
      "C": "This is explained by the logarithmic nature of human loudness perception, not diffraction.",
      "D": "This is explained by refraction due to temperature gradients.",
      "E": "This is explained by the 'missing fundamental' phenomenon in neural processing, not diffraction.",
    },
    difficulty: "easy",
    passageId: "rc-exp42-p2",
  },
  {
    id: "rc-exp42-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, it can be inferred that a lecture hall would ideally have",
    answerChoices: [
      { letter: "A", text: "a reverberation time of approximately two seconds" },
      { letter: "B", text: "a shorter reverberation time than a concert hall designed for orchestral music" },
      { letter: "C", text: "a longer reverberation time than a cathedral designed for organ music" },
      { letter: "D", text: "no reverberation whatsoever" },
      { letter: "E", text: "the same acoustic properties as a symphony hall" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the ideal reverberation time is 'approximately two seconds for orchestral music, shorter for speech clarity in lecture halls.' Thus, lecture halls need shorter reverberation times than orchestral concert halls.",
    wrongAnswerExplanations: {
      "A": "Two seconds is specified for orchestral music; lecture halls need 'shorter' reverberation for speech clarity.",
      "C": "Cathedrals for organ music have 'longer' reverberation times, so lecture halls would have shorter, not longer, times.",
      "D": "The passage discusses optimal reverberation times, not elimination of reverberation.",
      "E": "The passage indicates different purposes require different acoustic properties.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p2",
  },
  {
    id: "rc-exp42-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the 'missing fundamental' phenomenon primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize manufacturers of small loudspeakers for deceiving consumers" },
      { letter: "B", text: "explain why older listeners have difficulty hearing high-frequency sounds" },
      { letter: "C", text: "demonstrate that auditory perception involves active neural construction rather than passive physical reception" },
      { letter: "D", text: "argue that pitch and frequency are entirely unrelated concepts" },
      { letter: "E", text: "illustrate the practical applications of architectural acoustics" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly concludes the paragraph by stating that the missing fundamental phenomenon 'demonstrat[es] that hearing involves active neural processing rather than passive reception of physical stimuli.' This is the stated purpose of discussing the phenomenon.",
    wrongAnswerExplanations: {
      "A": "The passage says small speakers 'exploit' this phenomenon, presenting it neutrally rather than as deception.",
      "B": "Age-related hearing loss is mentioned in the first paragraph but is unrelated to the missing fundamental.",
      "D": "The passage states pitch 'generally corresponds to the fundamental frequency,' indicating a relationship rather than no connection.",
      "E": "Architectural acoustics is discussed in the final paragraph, separate from the missing fundamental discussion.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p2",
  },
  {
    id: "rc-exp42-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the relationship between acoustic science and subjective listener experience can best be described as",
    answerChoices: [
      { letter: "A", text: "confident that scientific measurement will eventually explain all aspects of acoustic perception" },
      { letter: "B", text: "skeptical that acoustic science has any practical value for architectural design" },
      { letter: "C", text: "acknowledging that while scientific tools are valuable, subjective preferences cannot be fully quantified" },
      { letter: "D", text: "frustrated by the limitations of current acoustic modeling technology" },
      { letter: "E", text: "dismissive of listener preferences as irrelevant to acoustic design" },
    ],
    correctAnswer: "C",
    explanation: "The final sentence states that 'the subjective nature of acoustic perception means that listener preferences cannot be entirely reduced to measurable parameters,' while earlier noting the value of 'computer modeling, physical scale models, and materials science.' This shows acknowledgment of both scientific utility and subjective limits.",
    wrongAnswerExplanations: {
      "A": "The author explicitly states preferences 'cannot be entirely reduced to measurable parameters,' contradicting this confidence.",
      "B": "The author describes multiple scientific tools used in 'modern acoustic design,' indicating practical value.",
      "D": "The passage presents current limitations matter-of-factly rather than with frustration.",
      "E": "The author specifically notes the importance of 'listener preferences,' not dismissing them.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p2",
  },
  {
    id: "rc-exp42-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the information in the passage, which of the following would most likely explain why an outdoor sound system designed for a beach concert might perform poorly in a forested area?",
    answerChoices: [
      { letter: "A", text: "The logarithmic nature of human loudness perception would differ between the two environments." },
      { letter: "B", text: "The frequency range of human hearing would change based on the environmental setting." },
      { letter: "C", text: "The speed of sound would be significantly slower in a forested area than at a beach." },
      { letter: "D", text: "Trees and foliage would create different patterns of reflection, absorption, and diffraction than open beach terrain." },
      { letter: "E", text: "The missing fundamental phenomenon would not function properly in a forested environment." },
    ],
    correctAnswer: "D",
    explanation: "The passage explains that sound 'encounters boundaries between different media or obstacles in its path' and 'undergoes reflection, refraction, and diffraction.' Trees would create obstacles that affect sound propagation differently than open beach terrain, altering how sound reaches listeners.",
    wrongAnswerExplanations: {
      "A": "Logarithmic loudness perception is a property of human hearing, not of the environment.",
      "B": "The passage indicates frequency range is a function of the auditory system and age, not environmental setting.",
      "C": "The passage notes temperature affects sound speed, but there's no indication forest temperatures would dramatically differ from beach temperatures.",
      "E": "The missing fundamental is a neural processing phenomenon unrelated to environmental acoustics.",
    },
    difficulty: "hard",
    passageId: "rc-exp42-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - LATIN AMERICAN MAGICAL REALISM
// ============================================

const passage3 = `The term "magical realism" has been applied so broadly in literary criticism that its meaning has become contested and diffuse. Originally coined by German art critic Franz Roh in 1925 to describe post-expressionist painting that combined realistic technique with fantastical content, the term was later adapted by Latin American writers and critics to characterize a distinctive literary mode that emerged in the mid-twentieth century. At its core, magical realism presents supernatural or fantastical events as ordinary occurrences within an otherwise realistic narrative framework, without the sense of wonder or disruption that such events would occasion in traditional fantasy literature.

Gabriel Garcia Marquez's One Hundred Years of Solitude (1967) is often considered the paradigmatic work of Latin American magical realism. In the novel, characters ascend to heaven while hanging laundry, rain falls continuously for nearly five years, and a plague of insomnia afflicts an entire town—yet these events are narrated with the same matter-of-fact tone used to describe everyday activities. Garcia Marquez attributed this technique to his grandmother's storytelling style, in which she would relate the most implausible events with absolute conviction, making them seem unremarkable. This narrative strategy, some critics argue, reflects the lived experience of Latin American cultures in which indigenous belief systems, Catholic mysticism, and colonial history coexist in complex layerings of reality.

The political dimensions of magical realism have been vigorously debated. Some scholars argue that the mode served as a form of cultural resistance, asserting the validity of non-European epistemologies against the rationalist worldview imposed by colonialism. By treating indigenous beliefs and local folk traditions as real within the text, magical realist writers challenged the Western Enlightenment assumption that there exists only one legitimate way of knowing the world. Others contend that magical realism, particularly as it has been marketed to international audiences, risks exoticizing Latin American cultures, reducing complex societies to repositories of the marvelous and reinforcing stereotypes of the region as pre-modern or irrational.

The influence of magical realism has extended far beyond Latin America. Writers from diverse cultural contexts, including Salman Rushdie, Toni Morrison, and Ben Okri, have employed similar techniques to explore postcolonial experiences and marginalized perspectives. This global diffusion has led some critics to question whether the term should be reserved for its original Latin American context or recognized as a broader literary strategy available to any writer seeking to destabilize dominant realities. The debate raises fundamental questions about cultural ownership, literary categorization, and the politics of representation in world literature.

More recent scholarship has sought to historicize magical realism, examining the specific social and political conditions that gave rise to the mode in mid-century Latin America. This approach emphasizes the importance of understanding magical realism not as a timeless expression of Latin American culture but as a response to particular historical circumstances, including military dictatorships, economic dependency, and the persistence of vast social inequalities. From this perspective, the fantastic elements in magical realist texts are not merely stylistic flourishes but politically charged interventions that expose the violence and irrationality underlying ostensibly rational modern states.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp42-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Gabriel Garcia Marquez invented magical realism by incorporating his grandmother's storytelling techniques into literary fiction." },
      { letter: "B", text: "Magical realism is a contested literary category whose definition, cultural significance, and political implications have been subject to ongoing scholarly debate." },
      { letter: "C", text: "The term 'magical realism' should be applied exclusively to Latin American literature and not to works from other cultural contexts." },
      { letter: "D", text: "Magical realism is primarily a marketing strategy used to exoticize Latin American cultures for international audiences." },
      { letter: "E", text: "The political dimensions of magical realism outweigh its aesthetic achievements as a literary mode." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces debates about magical realism's definition (paragraph 1), its cultural meaning (paragraphs 2-3), its global diffusion and whether it should be limited to Latin America (paragraph 4), and its historical conditions (paragraph 5). The throughline is ongoing scholarly contestation about the category's meaning and significance.",
    wrongAnswerExplanations: {
      "A": "While Garcia Marquez and his grandmother are discussed, the passage is about broader debates surrounding magical realism, not about its invention.",
      "C": "The passage presents this as one position in an ongoing debate, not as the main point.",
      "D": "Exoticization is mentioned as one criticism, not as the primary characterization of magical realism.",
      "E": "The passage discusses both political and aesthetic dimensions without ranking their relative importance.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p3",
  },
  {
    id: "rc-exp42-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the term 'magical realism' was originally coined to describe",
    answerChoices: [
      { letter: "A", text: "the storytelling techniques used by Gabriel Garcia Marquez's grandmother" },
      { letter: "B", text: "indigenous belief systems in Latin American cultures" },
      { letter: "C", text: "post-expressionist painting that combined realistic technique with fantastical content" },
      { letter: "D", text: "the postcolonial experiences explored by writers like Salman Rushdie and Toni Morrison" },
      { letter: "E", text: "the political resistance of Latin American writers to Western colonialism" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the term was 'Originally coined by German art critic Franz Roh in 1925 to describe post-expressionist painting that combined realistic technique with fantastical content.'",
    wrongAnswerExplanations: {
      "A": "Garcia Marquez's grandmother influenced his style, but the term predates this and was originally about painting.",
      "B": "Indigenous beliefs are discussed in relation to magical realism's content, but the term was coined for visual art.",
      "D": "These writers adopted magical realism later; the term was not originally coined to describe their work.",
      "E": "Political resistance is one interpretation of the mode, but the term was originally about painting, not politics.",
    },
    difficulty: "easy",
    passageId: "rc-exp42-p3",
  },
  {
    id: "rc-exp42-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, scholars who view magical realism as a form of cultural resistance would most likely agree that",
    answerChoices: [
      { letter: "A", text: "magical realism should not be practiced by writers from outside Latin America" },
      { letter: "B", text: "the mode challenges Western assumptions about the nature of reality and legitimate knowledge" },
      { letter: "C", text: "Garcia Marquez's work reinforces stereotypes of Latin America as pre-modern" },
      { letter: "D", text: "magical realism is primarily an aesthetic movement with no political significance" },
      { letter: "E", text: "the term should be returned to its original application to visual art" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that according to this view, 'magical realist writers challenged the Western Enlightenment assumption that there exists only one legitimate way of knowing the world.' This indicates a challenge to Western epistemological assumptions.",
    wrongAnswerExplanations: {
      "A": "The passage presents the question of cultural ownership as a separate debate, not as part of the resistance argument.",
      "C": "The exoticization criticism is presented as an alternative view to the resistance interpretation, not as something resistance scholars would agree with.",
      "D": "The resistance interpretation explicitly emphasizes political significance.",
      "E": "This is not connected to the cultural resistance interpretation.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p3",
  },
  {
    id: "rc-exp42-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author discusses 'rain falling continuously for nearly five years' and 'a plague of insomnia' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Garcia Marquez for including implausible events in his fiction" },
      { letter: "B", text: "illustrate the type of fantastical events presented as ordinary occurrences in magical realist narratives" },
      { letter: "C", text: "demonstrate that One Hundred Years of Solitude is superior to other magical realist novels" },
      { letter: "D", text: "explain why magical realism has been rejected by contemporary literary critics" },
      { letter: "E", text: "contrast magical realism with traditional fantasy literature" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph discussing One Hundred Years of Solitude as 'paradigmatic' of magical realism. They illustrate the passage's earlier definition that magical realism 'presents supernatural or fantastical events as ordinary occurrences' in 'matter-of-fact tone.'",
    wrongAnswerExplanations: {
      "A": "The passage presents these examples descriptively, not critically.",
      "C": "The passage calls the novel 'paradigmatic' (exemplary), not superior to others.",
      "D": "The passage does not suggest magical realism has been rejected; debates continue.",
      "E": "While the passage earlier notes differences from traditional fantasy, these specific examples serve to illustrate magical realism itself.",
    },
    difficulty: "easy",
    passageId: "rc-exp42-p3",
  },
  {
    id: "rc-exp42-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the debate about whether magical realism exoticizes Latin American cultures can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly convinced that the exoticization critique is correct" },
      { letter: "B", text: "dismissive of the concern as unworthy of scholarly attention" },
      { letter: "C", text: "presenting it as one significant perspective within a larger scholarly conversation" },
      { letter: "D", text: "certain that magical realism does not involve any problematic representations" },
      { letter: "E", text: "confused about the merits of the different positions" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the exoticization critique ('Others contend that magical realism... risks exoticizing') alongside the resistance interpretation ('Some scholars argue that the mode served as cultural resistance'), without endorsing either view. This balanced presentation indicates the author sees it as one perspective within ongoing debate.",
    wrongAnswerExplanations: {
      "A": "The author presents this as one view among several, not as a settled conclusion.",
      "B": "The author gives the critique substantial space and takes it seriously.",
      "D": "The author presents the exoticization concern as legitimate, not as something to dismiss.",
      "E": "The author presents multiple views clearly without expressing confusion.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p3",
  },
  {
    id: "rc-exp42-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A thesis is stated, counterarguments are presented, and the thesis is ultimately defended." },
      { letter: "B", text: "A definition is proposed, an exemplary work is analyzed, competing interpretations are explored, and recent scholarly approaches are described." },
      { letter: "C", text: "A historical narrative is presented chronologically from the origin of a phenomenon to its current state." },
      { letter: "D", text: "A problem is identified, multiple solutions are evaluated, and one solution is recommended." },
      { letter: "E", text: "Two competing theories are compared and then both are rejected in favor of a third approach." },
    ],
    correctAnswer: "B",
    explanation: "The passage: (1) defines magical realism, (2) discusses One Hundred Years of Solitude as paradigmatic, (3) explores competing interpretations (resistance vs. exoticization, Latin American specificity vs. global applicability), and (4) describes recent historicizing scholarship. Answer B captures this structure.",
    wrongAnswerExplanations: {
      "A": "The author does not defend a thesis; the passage presents multiple perspectives without resolving them.",
      "C": "While there is some historical information, the passage is organized thematically around debates rather than chronologically.",
      "D": "The passage describes scholarly debates rather than identifying a problem and recommending a solution.",
      "E": "The passage presents multiple perspectives without rejecting them in favor of another approach.",
    },
    difficulty: "hard",
    passageId: "rc-exp42-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - SCIENCE COMMUNICATION AND PUBLIC UNDERSTANDING
// ============================================

const passage4 = `The gap between scientific consensus and public understanding has become a pressing concern for researchers, policymakers, and science communicators. On issues ranging from climate change to vaccine safety to evolutionary biology, surveys consistently reveal significant discrepancies between what scientists know and what the public believes. Understanding why these gaps persist—and what can be done to address them—has generated a substantial body of research across communication studies, cognitive psychology, and sociology of science.

The earliest models of science communication operated on what scholars now call the "deficit model." This approach assumed that public skepticism toward scientific findings stemmed primarily from a lack of information: if people only knew the facts, they would accept them. Accordingly, communication efforts focused on transmitting accurate scientific information through lectures, textbooks, and media coverage. Decades of research, however, have demonstrated that the deficit model fails to account for how people actually process scientific information. Providing more data often does not change minds and may even backfire, causing those with strong prior beliefs to become more entrenched in their positions.

Contemporary research emphasizes the role of motivated reasoning in shaping responses to scientific information. People tend to evaluate evidence in ways that protect their existing beliefs, social identities, and group affiliations. Studies have shown that individuals with higher levels of scientific literacy are often more skilled at finding flaws in evidence that contradicts their worldview, using their analytical abilities to defend rather than update their beliefs. This phenomenon, sometimes called "identity-protective cognition," helps explain why increased education does not always correlate with greater acceptance of scientific consensus, particularly on culturally contested issues.

The framing of scientific information also significantly affects its reception. Research has demonstrated that the same factual content can elicit vastly different responses depending on how it is presented. When climate change is framed as an economic threat, for example, conservatives become more receptive than when it is framed as an environmental issue associated with liberal politics. Similarly, describing vaccination as protecting one's family may prove more persuasive than emphasizing abstract public health benefits. These findings suggest that effective science communication requires understanding audiences' values and tailoring messages accordingly.

Some scholars have criticized this strategic approach to science communication as potentially manipulative. They argue that treating communication as persuasion rather than dialogue undermines public trust and democratic deliberation. An alternative perspective emphasizes engaging citizens as partners in scientific decision-making rather than as targets for persuasion. This participatory approach involves creating forums where scientists and community members can discuss research, express concerns, and jointly determine how scientific knowledge should inform policy. Proponents argue that such engagement can build trust, surface legitimate questions about scientific claims, and produce more robust and socially acceptable outcomes than top-down communication strategies.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp42-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that the deficit model of science communication should be revived and strengthened" },
      { letter: "B", text: "explain why the general public consistently rejects well-established scientific findings" },
      { letter: "C", text: "describe the evolution of science communication research and present different approaches to addressing gaps between scientific consensus and public understanding" },
      { letter: "D", text: "advocate for the participatory approach as the only ethically acceptable method of science communication" },
      { letter: "E", text: "demonstrate that motivated reasoning makes effective science communication impossible" },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the evolution from the deficit model through motivated reasoning research to framing studies and participatory approaches, presenting each as part of an ongoing scholarly conversation about how to address gaps between scientific consensus and public beliefs.",
    wrongAnswerExplanations: {
      "A": "The passage describes the deficit model as having been 'demonstrated' to 'fail,' not as something to revive.",
      "B": "While the passage discusses gaps, it doesn't claim the public 'consistently rejects' science; it explores why gaps exist and how to address them.",
      "D": "The participatory approach is presented as 'an alternative perspective,' not as the only ethical option.",
      "E": "The passage discusses motivated reasoning as a challenge but presents framing and participatory approaches as potential responses, not as proof that communication is impossible.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p4",
  },
  {
    id: "rc-exp42-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the deficit model of science communication assumed that",
    answerChoices: [
      { letter: "A", text: "scientists were ineffective at explaining their research to non-expert audiences" },
      { letter: "B", text: "public skepticism resulted primarily from insufficient access to accurate scientific information" },
      { letter: "C", text: "motivated reasoning would prevent people from accepting scientific findings" },
      { letter: "D", text: "framing was essential to persuading skeptical audiences" },
      { letter: "E", text: "participatory dialogue was more effective than one-way information transmission" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the deficit model 'assumed that public skepticism toward scientific findings stemmed primarily from a lack of information: if people only knew the facts, they would accept them.'",
    wrongAnswerExplanations: {
      "A": "The deficit model focused on public lack of information, not on scientists' communication abilities.",
      "C": "Motivated reasoning is presented as a contemporary finding that explains why the deficit model failed, not as one of its assumptions.",
      "D": "Framing research is discussed as a subsequent development, not as part of the deficit model.",
      "E": "The deficit model emphasized 'transmitting accurate scientific information,' the opposite of participatory dialogue.",
    },
    difficulty: "easy",
    passageId: "rc-exp42-p4",
  },
  {
    id: "rc-exp42-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, identity-protective cognition would most likely explain why",
    answerChoices: [
      { letter: "A", text: "scientists are generally more effective communicators than non-scientists" },
      { letter: "B", text: "providing detailed statistical evidence often fails to change strongly held beliefs" },
      { letter: "C", text: "the deficit model of science communication was initially so widely adopted" },
      { letter: "D", text: "participatory approaches are more expensive to implement than traditional communication" },
      { letter: "E", text: "climate change framing has no effect on audience receptivity" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that identity-protective cognition leads people to 'evaluate evidence in ways that protect their existing beliefs' and that 'individuals with higher levels of scientific literacy are often more skilled at finding flaws in evidence that contradicts their worldview.' This explains why even detailed evidence fails to change strong prior beliefs.",
    wrongAnswerExplanations: {
      "A": "Identity-protective cognition is about how audiences process information, not about scientists' communication skills.",
      "C": "The adoption of the deficit model predates the discovery of identity-protective cognition and isn't explained by it.",
      "D": "Implementation costs are not discussed in relation to identity-protective cognition.",
      "E": "The passage states that framing does affect receptivity; identity-protective cognition helps explain why certain frames work better for certain groups.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p4",
  },
  {
    id: "rc-exp42-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the example of framing climate change as an economic threat primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that climate change is primarily an economic rather than environmental problem" },
      { letter: "B", text: "demonstrate that framing can significantly affect how different audiences receive scientific information" },
      { letter: "C", text: "criticize conservatives for being unreceptive to environmental messages" },
      { letter: "D", text: "show that the deficit model is more effective than contemporary approaches" },
      { letter: "E", text: "explain why participatory approaches are ethically superior to strategic framing" },
    ],
    correctAnswer: "B",
    explanation: "This example appears in the paragraph about framing, which opens by stating that 'the same factual content can elicit vastly different responses depending on how it is presented.' The climate change example illustrates this point by showing how economic framing increases conservative receptivity.",
    wrongAnswerExplanations: {
      "A": "The passage presents this as a communication strategy, not as a claim about climate change's true nature.",
      "C": "The passage is explaining how to communicate effectively with different audiences, not criticizing any group.",
      "D": "The passage describes the deficit model as having failed; this example supports contemporary framing research.",
      "E": "The ethical critique of strategic approaches appears in a later paragraph; this example is about framing's effectiveness.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p4",
  },
  {
    id: "rc-exp42-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the criticism that strategic science communication is 'potentially manipulative' can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly endorsing the criticism and rejecting strategic approaches entirely" },
      { letter: "B", text: "presenting it as a legitimate scholarly perspective without personally endorsing or rejecting it" },
      { letter: "C", text: "dismissing the criticism as unfounded and naive" },
      { letter: "D", text: "expressing frustration that such criticism impedes effective science communication" },
      { letter: "E", text: "conceding that the criticism is valid but ultimately irrelevant to practical concerns" },
    ],
    correctAnswer: "B",
    explanation: "The author presents the critique ('Some scholars have criticized...') and the alternative participatory approach as scholarly perspectives, describing their arguments without evaluating their validity. The passage maintains a descriptive rather than evaluative tone throughout.",
    wrongAnswerExplanations: {
      "A": "The author neither endorses the criticism nor rejects strategic approaches; both are presented descriptively.",
      "C": "The author presents the criticism seriously alongside its supporting arguments, not dismissively.",
      "D": "The author shows no frustration; the tone is scholarly and analytical.",
      "E": "The author does not evaluate whether the criticism is valid or irrelevant.",
    },
    difficulty: "medium",
    passageId: "rc-exp42-p4",
  },
  {
    id: "rc-exp42-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the case for participatory approaches to science communication as described in the passage?",
    answerChoices: [
      { letter: "A", text: "Participatory forums require more time and resources to organize than traditional communication methods." },
      { letter: "B", text: "Studies show that participatory dialogue often reinforces participants' pre-existing views rather than producing consensus." },
      { letter: "C", text: "Some scientific findings are too complex to be explained to non-expert audiences." },
      { letter: "D", text: "Scientists who participate in community forums report high levels of personal satisfaction." },
      { letter: "E", text: "Traditional media coverage of science has declined significantly in recent decades." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that proponents of participatory approaches argue they 'can build trust' and 'produce more robust and socially acceptable outcomes.' Evidence that such dialogue actually reinforces existing views rather than building consensus would directly undermine these claimed benefits.",
    wrongAnswerExplanations: {
      "A": "Resource requirements are a practical concern but don't undermine the approach's theoretical benefits; proponents could argue the investment is worthwhile.",
      "C": "This doesn't address participatory approaches specifically; complexity could affect any communication method.",
      "D": "This would support rather than weaken participatory approaches.",
      "E": "This concerns traditional media, not participatory approaches, and might even strengthen the case for alternatives.",
    },
    difficulty: "hard",
    passageId: "rc-exp42-p4",
  },
];

// Export all RC questions from Set 42
export const rcQuestionsExpSet42: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet42 = {
  passage1: { id: "rc-exp42-p1", content: passage1, topic: "law" as const, title: "Voting Rights and Election Law" },
  passage2: { id: "rc-exp42-p2", content: passage2, topic: "natural-sciences" as const, title: "Acoustics and Sound Physics" },
  passage3: { id: "rc-exp42-p3", content: passage3, topic: "humanities" as const, title: "Latin American Magical Realism" },
  passage4: { id: "rc-exp42-p4", content: passage4, topic: "social-sciences" as const, title: "Science Communication and Public Understanding" },
};
