// Reading Comprehension Expansion Set 35
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - IMMIGRATION AND CITIZENSHIP LAW
// ============================================

const passage1 = `The legal framework governing immigration and citizenship in the United States reflects a persistent tension between national sovereignty and individual rights. Since the late nineteenth century, the plenary power doctrine has granted Congress and the executive branch nearly absolute authority over immigration matters, largely insulating immigration decisions from the constitutional constraints that apply to other government actions. Under this doctrine, established in cases like Chae Chan Ping v. United States (1889), courts have generally deferred to political branches on questions of who may enter the country and on what terms.

The constitutional foundations of citizenship present a different picture. The Fourteenth Amendment, ratified in 1868, declares that "all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States." This birthright citizenship provision—establishing jus soli, or citizenship by place of birth—was designed to overturn the Dred Scott decision and guarantee citizenship to formerly enslaved persons. The amendment's language has consistently been interpreted to grant citizenship to virtually all persons born on American soil, regardless of their parents' immigration status, though some scholars and political figures have periodically challenged this interpretation.

Naturalization, the process by which immigrants become citizens, has evolved considerably over American history. Early naturalization laws restricted eligibility to "free white persons," a limitation later expanded to include persons of African descent but explicitly excluding Asian immigrants until the mid-twentieth century. The Immigration and Nationality Act of 1952, though retaining racial quotas, established the modern framework for naturalization, requiring applicants to demonstrate continuous residence, physical presence, good moral character, attachment to constitutional principles, and basic knowledge of English and American history and government.

Contemporary debates over immigration law increasingly focus on the treatment of unauthorized immigrants and their American-born children. Some argue that birthright citizenship creates perverse incentives for illegal entry and that the Fourteenth Amendment should be reinterpreted to exclude children of unauthorized immigrants. Others contend that such reinterpretation would violate the amendment's plain language and undermine its historical purpose of preventing the creation of a permanent underclass denied political membership. The Supreme Court has not directly addressed this question, leaving considerable uncertainty about the scope of birthright citizenship.

The intersection of immigration enforcement and constitutional protections creates additional complexities. While the plenary power doctrine limits judicial review of immigration policy, courts have increasingly required that enforcement proceedings satisfy due process requirements. Immigrants facing deportation have acquired greater procedural protections, including rights to counsel in some circumstances and protection against indefinite detention. These developments reflect an ongoing negotiation between sovereignty-based justifications for broad governmental authority and rights-based arguments for constraining that authority through constitutional norms.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp35-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The plenary power doctrine should be abolished because it violates constitutional principles." },
      { letter: "B", text: "U.S. immigration and citizenship law embodies ongoing tensions between governmental sovereignty and individual rights, with different standards applying to immigration policy and citizenship determination." },
      { letter: "C", text: "The Fourteenth Amendment definitively resolved all questions about American citizenship." },
      { letter: "D", text: "Naturalization requirements have remained constant throughout American history." },
      { letter: "E", text: "The Supreme Court has conclusively determined that birthright citizenship extends to all children born in the United States." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the tension between sovereignty (plenary power over immigration) and rights (constitutional citizenship guarantees), showing different legal frameworks apply to immigration policy versus citizenship, with ongoing debates and evolving protections. Answer B captures this central theme.",
    wrongAnswerExplanations: {
      A: "The passage describes the plenary power doctrine but does not argue for its abolition.",
      C: "The passage explicitly notes uncertainty about birthright citizenship's scope and ongoing debates.",
      D: "The passage describes how naturalization requirements have 'evolved considerably' with historical restrictions by race.",
      E: "The passage states the Supreme Court 'has not directly addressed this question' regarding children of unauthorized immigrants.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p1",
  },
  {
    id: "rc-exp35-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Fourteenth Amendment's citizenship clause was designed primarily to",
    answerChoices: [
      { letter: "A", text: "limit the power of state governments" },
      { letter: "B", text: "establish federal control over immigration" },
      { letter: "C", text: "overturn the Dred Scott decision and guarantee citizenship to formerly enslaved persons" },
      { letter: "D", text: "restrict birthright citizenship to children of legal residents" },
      { letter: "E", text: "codify the plenary power doctrine" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the birthright citizenship provision 'was designed to overturn the Dred Scott decision and guarantee citizenship to formerly enslaved persons.'",
    wrongAnswerExplanations: {
      A: "While the Fourteenth Amendment does limit state power in other provisions, this is not the stated purpose of the citizenship clause.",
      B: "The passage does not connect the Fourteenth Amendment to federal immigration control.",
      D: "The passage indicates the opposite interpretation, that the clause grants citizenship regardless of parents' status.",
      E: "The plenary power doctrine derives from later Supreme Court cases, not the Fourteenth Amendment.",
    },
    difficulty: "easy",
    passageId: "rc-exp35-p1",
  },
  {
    id: "rc-exp35-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of extending birthright citizenship to children of unauthorized immigrants would most likely argue that",
    answerChoices: [
      { letter: "A", text: "the Fourteenth Amendment should be repealed entirely" },
      { letter: "B", text: "the current interpretation encourages illegal immigration and was not the amendment's intended scope" },
      { letter: "C", text: "naturalization requirements are too lenient" },
      { letter: "D", text: "the plenary power doctrine should apply to citizenship determinations" },
      { letter: "E", text: "children of unauthorized immigrants should be immediately deported" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Some argue that birthright citizenship creates perverse incentives for illegal entry and that the Fourteenth Amendment should be reinterpreted to exclude children of unauthorized immigrants.' This suggests critics believe current interpretation is both unintended and creates problematic incentives.",
    wrongAnswerExplanations: {
      A: "Critics advocate reinterpretation, not repeal.",
      C: "The passage does not connect birthright citizenship critics to naturalization requirements.",
      D: "The passage does not suggest applying plenary power to citizenship determinations.",
      E: "This extreme position is not attributed to the critics described in the passage.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p1",
  },
  {
    id: "rc-exp35-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the case Chae Chan Ping v. United States primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Supreme Court's historical treatment of Asian immigrants" },
      { letter: "B", text: "provide an example of a case establishing the plenary power doctrine" },
      { letter: "C", text: "explain the origins of birthright citizenship" },
      { letter: "D", text: "contrast immigration law with naturalization requirements" },
      { letter: "E", text: "argue for reform of immigration enforcement procedures" },
    ],
    correctAnswer: "B",
    explanation: "The case is cited as an example of cases that established the plenary power doctrine, with courts generally deferring to political branches on immigration questions. It serves to ground the discussion of this doctrine in specific legal precedent.",
    wrongAnswerExplanations: {
      A: "While the case involved Chinese exclusion, the author presents it descriptively, not critically.",
      C: "Birthright citizenship is discussed in connection with the Fourteenth Amendment, not this case.",
      D: "The case illustrates the plenary power doctrine, not a contrast between immigration and naturalization.",
      E: "The case is mentioned to explain existing doctrine, not to argue for reform.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p1",
  },
  {
    id: "rc-exp35-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debates over birthright citizenship can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of restricting birthright citizenship" },
      { letter: "B", text: "dismissive of concerns about unauthorized immigration" },
      { letter: "C", text: "analytically detached, presenting multiple perspectives without advocating for a particular position" },
      { letter: "D", text: "nostalgic for historical naturalization restrictions" },
      { letter: "E", text: "enthusiastically in favor of expanding immigrant rights" },
    ],
    correctAnswer: "C",
    explanation: "The author presents arguments on both sides of the birthright citizenship debate ('Some argue... Others contend...') without endorsing either view, and notes the legal uncertainty without suggesting how it should be resolved. This reflects analytical detachment.",
    wrongAnswerExplanations: {
      A: "The author presents arguments for restriction but does not advocate this position.",
      B: "The author fairly presents concerns about unauthorized immigration alongside opposing views.",
      D: "The author describes historical restrictions factually without expressing nostalgia.",
      E: "The author presents rights-based arguments but does not advocate for them.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p1",
  },
  {
    id: "rc-exp35-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most weaken the argument that the Fourteenth Amendment should be reinterpreted to exclude children of unauthorized immigrants?",
    answerChoices: [
      { letter: "A", text: "Studies show that birthright citizenship has minimal effect on unauthorized immigration rates." },
      { letter: "B", text: "Several members of the 1868 Congress expressed concern about immigration." },
      { letter: "C", text: "Other countries have eliminated birthright citizenship." },
      { letter: "D", text: "The number of unauthorized immigrants has increased in recent decades." },
      { letter: "E", text: "Naturalization requirements have become more stringent over time." },
    ],
    correctAnswer: "A",
    explanation: "The argument for reinterpretation rests partly on the claim that birthright citizenship 'creates perverse incentives for illegal entry.' Evidence that birthright citizenship has minimal effect on unauthorized immigration rates would undermine this incentive-based argument, weakening the case for reinterpretation.",
    wrongAnswerExplanations: {
      B: "This might suggest the framers considered immigration, but does not directly undermine the reinterpretation argument.",
      C: "Other countries' practices do not bear on interpretation of the U.S. Constitution.",
      D: "This would potentially strengthen rather than weaken concerns about incentives.",
      E: "Naturalization requirements are separate from birthright citizenship.",
    },
    difficulty: "hard",
    passageId: "rc-exp35-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - PARTICLE PHYSICS AND THE STANDARD MODEL
// ============================================

const passage2 = `The Standard Model of particle physics represents one of the most successful theoretical frameworks in the history of science, accurately predicting the behavior of matter at the subatomic level with extraordinary precision. Developed through the collaborative efforts of theorists and experimentalists throughout the twentieth century, the Standard Model describes the fundamental constituents of matter and the forces that govern their interactions, excluding only gravity from its framework.

At the foundation of the Standard Model are twelve fundamental fermions—particles of matter—divided into two families: quarks and leptons. Quarks come in six varieties or "flavors": up, down, charm, strange, top, and bottom. They combine in specific configurations to form composite particles called hadrons, including the protons and neutrons that constitute atomic nuclei. Leptons likewise comprise six particles: the electron, muon, and tau, each paired with a corresponding neutrino. Unlike quarks, leptons can exist independently and are not subject to the strong nuclear force that binds quarks together.

The Standard Model describes three of the four known fundamental forces through the exchange of force-carrying particles called gauge bosons. The electromagnetic force, responsible for light and chemical bonding, is mediated by photons. The weak nuclear force, which governs certain types of radioactive decay, is carried by the W and Z bosons. The strong nuclear force, which holds quarks together within protons and neutrons and binds nuclei, is transmitted by gluons. Each force couples to specific properties of matter particles, giving rise to the rich variety of physical phenomena we observe.

The discovery of the Higgs boson at CERN's Large Hadron Collider in 2012 completed the Standard Model's particle catalog and confirmed the mechanism by which particles acquire mass. According to the Higgs field theory, space is permeated by an invisible field that interacts with particles, conferring mass upon them through this interaction. Particles that interact strongly with the Higgs field acquire large masses, while those that interact weakly remain light. The photon, which does not interact with the Higgs field, remains massless. This elegant mechanism resolved longstanding questions about why the weak force carriers have mass while the photon does not.

Despite its remarkable successes, the Standard Model is acknowledged to be incomplete. It does not incorporate gravity, which remains described by Einstein's general relativity as a geometric property of spacetime rather than a particle-mediated force. The model also fails to account for dark matter, the mysterious substance that appears to constitute approximately 27 percent of the universe's mass-energy content. Additionally, the Standard Model's many parameters—particle masses, force strengths, and mixing angles—must be measured experimentally rather than derived from first principles, suggesting that a more fundamental theory may underlie the current framework.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp35-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Standard Model has been definitively proven wrong by recent experiments." },
      { letter: "B", text: "The Standard Model successfully describes fundamental particles and forces with extraordinary accuracy, though it remains incomplete in certain significant respects." },
      { letter: "C", text: "The discovery of the Higgs boson was the only important achievement in particle physics." },
      { letter: "D", text: "Gravity is the most important of the four fundamental forces." },
      { letter: "E", text: "Dark matter has been fully explained by the Standard Model." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the Standard Model as 'one of the most successful theoretical frameworks,' details its components (fermions, bosons, forces, Higgs mechanism), and concludes by acknowledging it is 'incomplete' regarding gravity, dark matter, and fundamental parameters. Answer B captures this dual assessment.",
    wrongAnswerExplanations: {
      A: "The passage describes the Standard Model as highly successful, not proven wrong.",
      C: "While the Higgs discovery is discussed, many other achievements are also presented.",
      D: "Gravity is notably excluded from the Standard Model; the passage does not rank forces by importance.",
      E: "The passage explicitly states the model 'fails to account for dark matter.'",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p2",
  },
  {
    id: "rc-exp35-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the Higgs mechanism explains",
    answerChoices: [
      { letter: "A", text: "why gravity affects all matter" },
      { letter: "B", text: "how dark matter interacts with ordinary matter" },
      { letter: "C", text: "how particles acquire mass through interaction with the Higgs field" },
      { letter: "D", text: "why quarks combine to form leptons" },
      { letter: "E", text: "the structure of atomic nuclei" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the Higgs mechanism explains 'how particles acquire mass' through interaction with 'an invisible field that interacts with particles, conferring mass upon them through this interaction.'",
    wrongAnswerExplanations: {
      A: "Gravity is explicitly excluded from the Standard Model.",
      B: "Dark matter is described as something the model 'fails to account for.'",
      D: "Quarks and leptons are separate families; quarks do not combine to form leptons.",
      E: "Nuclear structure involves quarks forming hadrons, separate from the Higgs mechanism.",
    },
    difficulty: "easy",
    passageId: "rc-exp35-p2",
  },
  {
    id: "rc-exp35-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, it can be inferred that the top quark",
    answerChoices: [
      { letter: "A", text: "is a type of lepton" },
      { letter: "B", text: "can exist independently without combining with other quarks" },
      { letter: "C", text: "is subject to the strong nuclear force" },
      { letter: "D", text: "does not interact with the Higgs field" },
      { letter: "E", text: "mediates the electromagnetic force" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that quarks are subject to 'the strong nuclear force that binds quarks together.' Since the top quark is identified as one of the six quark flavors, it must be subject to the strong nuclear force.",
    wrongAnswerExplanations: {
      A: "Quarks and leptons are described as separate families; the top quark is explicitly a quark.",
      B: "The passage states quarks cannot exist independently, unlike leptons, because they are bound by the strong force.",
      D: "The passage states particles interact with the Higgs field to acquire mass; the massive top quark must interact.",
      E: "Force mediation is performed by gauge bosons, not quarks.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p2",
  },
  {
    id: "rc-exp35-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions that the photon 'does not interact with the Higgs field' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Higgs theory" },
      { letter: "B", text: "explain why the photon remains massless, illustrating how the Higgs mechanism works" },
      { letter: "C", text: "argue that the photon should be excluded from the Standard Model" },
      { letter: "D", text: "compare electromagnetic and gravitational forces" },
      { letter: "E", text: "introduce the concept of dark matter" },
    ],
    correctAnswer: "B",
    explanation: "The photon example illustrates the Higgs mechanism: particles that interact with the field acquire mass, while the photon, which does not interact, 'remains massless.' This demonstrates how the mechanism explains different particle masses.",
    wrongAnswerExplanations: {
      A: "The author presents the Higgs mechanism positively as 'elegant,' not critically.",
      C: "The photon is a central part of the Standard Model as the electromagnetic force carrier.",
      D: "Gravity is discussed separately as excluded from the model.",
      E: "Dark matter is discussed in the final paragraph, not in connection with the photon.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p2",
  },
  {
    id: "rc-exp35-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the Standard Model can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of its achievements" },
      { letter: "B", text: "skeptical about its basic validity" },
      { letter: "C", text: "appreciative of its successes while acknowledging its limitations" },
      { letter: "D", text: "indifferent to its scientific significance" },
      { letter: "E", text: "convinced that it will never be improved upon" },
    ],
    correctAnswer: "C",
    explanation: "The author describes the Standard Model as 'one of the most successful theoretical frameworks' with 'extraordinary precision,' while also discussing its acknowledged incompleteness regarding gravity, dark matter, and fundamental parameters. This balanced view appreciates successes while recognizing limitations.",
    wrongAnswerExplanations: {
      A: "The author explicitly praises the model's 'remarkable successes.'",
      B: "The author describes the model as highly successful, not of questionable validity.",
      D: "The author clearly respects the model's scientific significance.",
      E: "The author suggests 'a more fundamental theory may underlie the current framework,' implying future improvement.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p2",
  },
  {
    id: "rc-exp35-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A theory is introduced, its components are systematically described, a recent confirmation is discussed, and its limitations are acknowledged." },
      { letter: "B", text: "Two competing theories are compared and one is declared superior." },
      { letter: "C", text: "An experiment is described, its results are analyzed, and conclusions are drawn." },
      { letter: "D", text: "A historical narrative traces the development of physics from ancient to modern times." },
      { letter: "E", text: "A problem is identified and multiple solutions are evaluated." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces the Standard Model (paragraph 1), describes fermions (paragraph 2), describes forces and gauge bosons (paragraph 3), discusses the Higgs discovery (paragraph 4), and acknowledges limitations (paragraph 5). This follows the structure described in A.",
    wrongAnswerExplanations: {
      B: "The passage focuses on one theory, not a comparison of competing theories.",
      C: "While the Higgs discovery is mentioned, the passage is not structured around an experiment.",
      D: "The passage is organized thematically, not as a comprehensive historical narrative.",
      E: "The passage describes a successful theory, not a problem-solution structure.",
    },
    difficulty: "hard",
    passageId: "rc-exp35-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - AFRICAN AMERICAN LITERATURE (BALDWIN, MORRISON)
// ============================================

const passage3 = `James Baldwin and Toni Morrison, two of the most influential African American writers of the twentieth century, developed distinctly different literary approaches to exploring the Black experience in America while sharing fundamental commitments to truth-telling about race and its psychological consequences. Baldwin, writing from the 1950s through the 1980s, forged an intensely personal essay style that demanded white Americans confront their complicity in racial injustice while simultaneously urging Black Americans to transcend the psychological damage of racism. Morrison, whose major novels appeared from the 1970s onward, employed experimental narrative techniques to recover and reimagine Black history, creating fictional worlds centered entirely on Black communities and consciousness.

Baldwin's essays, collected in works such as "Notes of a Native Son" and "The Fire Next Time," combined autobiography with social analysis in a voice at once lyrical and prophetic. His prose moved fluidly between memory and argument, personal revelation and historical indictment. In "The Fire Next Time," Baldwin addressed white Americans directly: "If we—and now I mean the relatively conscious whites and the relatively conscious blacks, who must, like lovers, insist on, or create, the consciousness of the others—do not falter in our duty now, we may be able, handful that we are, to end the racial nightmare." This characteristic blend of intimacy and urgency, of "we" and "you," made Baldwin's essays powerful interventions in American moral consciousness.

Morrison's fiction operates in a different register. Rather than addressing a presumed white audience, Morrison wrote, as she explained, "for Black people," creating narratives that assumed Black experiences as normative rather than requiring explanation or justification. Her novels—"The Bluest Eye," "Song of Solomon," "Beloved"—employ fragmented chronologies, multiple perspectives, and supernatural elements drawn from African American folk traditions. "Beloved," perhaps her masterwork, tells the story of a formerly enslaved woman haunted by the ghost of the daughter she killed rather than see returned to slavery. The novel's circular, accretive structure mirrors the way traumatic memory resists linear narrative, forcing readers to piece together the past from fragments.

Despite their different strategies, Baldwin and Morrison shared a conviction that confronting the painful truths of Black history was essential to both individual and collective healing. Baldwin wrote of the necessity of "accepting one's past—one's history—is not the same thing as drowning in it; it is learning how to use it." Morrison similarly insisted that American society could not move forward without fully acknowledging the horror of slavery and its continuing legacy. Her recovery of voices silenced by historical trauma represents a literary equivalent of Baldwin's insistence on witnessing and testimony.

The influence of both writers extends beyond literature into broader cultural and political discourse. Baldwin's essays have been rediscovered by new generations grappling with ongoing racial violence, while Morrison's novels have shaped how Americans understand the psychological dimensions of slavery's aftermath. Together, they established that African American literature could serve simultaneously as art, historical recovery, and moral reckoning—contributions that continue to resonate in contemporary debates about race, memory, and justice.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp35-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "James Baldwin was a superior writer to Toni Morrison." },
      { letter: "B", text: "Baldwin and Morrison developed different but complementary literary approaches to exploring Black experience, sharing commitments to confronting painful historical truths while employing distinct strategies and intended audiences." },
      { letter: "C", text: "African American literature has had no significant impact on American culture." },
      { letter: "D", text: "Morrison's novels are too experimental for general readers to understand." },
      { letter: "E", text: "Baldwin's essays were primarily addressed to Black audiences." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces both writers' different approaches (Baldwin's essays addressing whites; Morrison's fiction centered on Black communities), while emphasizing their shared commitment to confronting painful truths about Black history. Answer B captures this comparative analysis.",
    wrongAnswerExplanations: {
      A: "The passage does not rank the writers; it analyzes their different but valuable contributions.",
      C: "The passage argues the opposite, emphasizing both writers' 'influence beyond literature.'",
      D: "The passage presents Morrison's experimental techniques positively, not as barriers to understanding.",
      E: "The passage indicates Baldwin addressed white Americans directly while Morrison wrote 'for Black people.'",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p3",
  },
  {
    id: "rc-exp35-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Morrison's intended audience differed from Baldwin's in that Morrison",
    answerChoices: [
      { letter: "A", text: "wrote exclusively for academic critics" },
      { letter: "B", text: "addressed her work primarily to international readers" },
      { letter: "C", text: "wrote 'for Black people,' assuming Black experiences as normative" },
      { letter: "D", text: "avoided any consideration of her audience" },
      { letter: "E", text: "directed her fiction primarily toward white readers" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that Morrison wrote, as she explained, 'for Black people,' creating narratives that assumed Black experiences as normative rather than requiring explanation or justification.' This contrasts with Baldwin's direct address to white Americans.",
    wrongAnswerExplanations: {
      A: "The passage does not suggest Morrison wrote exclusively for academics.",
      B: "The passage discusses American audiences, not international readers.",
      D: "Morrison explicitly identified her intended audience.",
      E: "This describes Baldwin's approach; Morrison wrote for Black people.",
    },
    difficulty: "easy",
    passageId: "rc-exp35-p3",
  },
  {
    id: "rc-exp35-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the circular, fragmented structure of 'Beloved' most likely reflects",
    answerChoices: [
      { letter: "A", text: "Morrison's inability to organize her narrative" },
      { letter: "B", text: "the way traumatic memory resists linear chronological ordering" },
      { letter: "C", text: "her attempt to appeal to white readers unfamiliar with Black history" },
      { letter: "D", text: "commercial considerations about book length" },
      { letter: "E", text: "her rejection of African American folk traditions" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The novel's circular, accretive structure mirrors the way traumatic memory resists linear narrative.' The fragmentation reflects psychological reality of trauma, not a failure of organization.",
    wrongAnswerExplanations: {
      A: "The passage presents the structure as intentional artistry, not organizational failure.",
      C: "Morrison wrote 'for Black people,' not to appeal to unfamiliar white readers.",
      D: "The passage connects structure to thematic concerns, not commercial considerations.",
      E: "The passage states Morrison employed 'supernatural elements drawn from African American folk traditions.'",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p3",
  },
  {
    id: "rc-exp35-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author quotes Baldwin's statement about 'relatively conscious whites and the relatively conscious blacks' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Baldwin's political naivete" },
      { letter: "B", text: "illustrate Baldwin's characteristic blend of intimacy and urgency in addressing both Black and white Americans" },
      { letter: "C", text: "compare Baldwin unfavorably to Morrison" },
      { letter: "D", text: "argue that Baldwin ignored racial differences" },
      { letter: "E", text: "demonstrate Baldwin's exclusively academic style" },
    ],
    correctAnswer: "B",
    explanation: "The quotation is introduced to illustrate 'This characteristic blend of intimacy and urgency, of 'we' and 'you'' that made Baldwin's essays powerful. The quote shows how Baldwin addressed both groups while shifting pronouns.",
    wrongAnswerExplanations: {
      A: "The passage presents Baldwin's work positively, not critically.",
      C: "The passage does not rank the writers against each other.",
      D: "The quote explicitly addresses both conscious whites and conscious blacks, acknowledging racial difference.",
      E: "The passage describes Baldwin's style as 'lyrical and prophetic,' not academic.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p3",
  },
  {
    id: "rc-exp35-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward Baldwin's and Morrison's literary contributions can best be described as",
    answerChoices: [
      { letter: "A", text: "skeptical of their lasting significance" },
      { letter: "B", text: "admiring of both writers' distinctive achievements and shared commitments" },
      { letter: "C", text: "dismissive of Morrison's experimental techniques" },
      { letter: "D", text: "nostalgic for earlier African American writers" },
      { letter: "E", text: "critical of Baldwin's direct political engagement" },
    ],
    correctAnswer: "B",
    explanation: "The author describes both writers as 'most influential,' praises Baldwin's 'powerful interventions' and Morrison's 'masterwork,' and emphasizes their shared commitments and continuing influence. This reflects clear admiration for both.",
    wrongAnswerExplanations: {
      A: "The author emphasizes continuing influence and resonance in contemporary debates.",
      C: "The author presents Morrison's techniques positively, explaining their purposeful connection to theme.",
      D: "The author focuses on these two writers without suggesting earlier writers were superior.",
      E: "The author presents Baldwin's engagement positively as 'powerful interventions in American moral consciousness.'",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p3",
  },
  {
    id: "rc-exp35-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which one of the following works would most likely share characteristics with Morrison's approach to fiction?",
    answerChoices: [
      { letter: "A", text: "An essay directly addressing white Americans about their complicity in racism" },
      { letter: "B", text: "A straightforward chronological history of the Civil War written for a general audience" },
      { letter: "C", text: "A novel employing non-linear narrative and supernatural elements to explore historical trauma within a marginalized community" },
      { letter: "D", text: "A political speech calling for legislative reform" },
      { letter: "E", text: "An autobiography by a white American about overcoming personal difficulties" },
    ],
    correctAnswer: "C",
    explanation: "Morrison's approach involves 'fragmented chronologies, multiple perspectives, and supernatural elements' to explore Black history and trauma, written for the community itself. A novel using non-linear narrative and supernatural elements to explore historical trauma within a marginalized community would share these characteristics.",
    wrongAnswerExplanations: {
      A: "This describes Baldwin's approach, not Morrison's.",
      B: "Morrison's work is characterized by non-linear, fragmented chronology, not straightforward narrative.",
      D: "Morrison's contributions are literary fiction, not political speeches.",
      E: "Morrison centered Black communities and experiences; this describes a different focus entirely.",
    },
    difficulty: "hard",
    passageId: "rc-exp35-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - DIGITAL DIVIDE AND TECHNOLOGY ACCESS
// ============================================

const passage4 = `The digital divide—the gap between those with access to digital technologies and those without—has evolved considerably since the term gained currency in the 1990s. Early discussions focused primarily on physical access to computers and internet connectivity, with the implicit assumption that providing hardware and connections would suffice to extend technology's benefits universally. Three decades of research and policy intervention have revealed that the divide is more complex and persistent than initially imagined, encompassing not only access but also skills, usage patterns, and the capacity to translate digital engagement into meaningful outcomes.

First-level digital divide research documented disparities in basic access along lines of income, education, race, geography, and age. In the United States, early internet adoption followed existing social stratifications, with affluent, educated, urban, and younger populations gaining access earlier and more extensively than their counterparts. Policy responses focused on infrastructure development—wiring schools and libraries, subsidizing rural broadband deployment, and establishing public access points. These efforts achieved significant success; by some measures, basic internet access in developed countries approaches universality, though meaningful gaps persist in rural and low-income communities.

However, researchers increasingly recognize that access alone does not eliminate digital inequality. The concept of "second-level" digital divide refers to disparities in digital skills and usage patterns that persist even when basic access is available. Studies reveal substantial differences in how people use technology: some engage in "capital-enhancing" activities—seeking information, developing skills, pursuing educational and economic opportunities—while others use the internet primarily for entertainment and social connection. These usage differences correlate with education and socioeconomic status, suggesting that digital inequality reproduces and potentially amplifies existing social stratifications rather than disrupting them.

More recent scholarship has identified a "third-level" digital divide concerning tangible outcomes. Even among individuals with similar access and skills, the benefits derived from technology use vary significantly. Those with stronger social networks, more education, and greater economic resources are better positioned to convert digital engagement into real-world advantages—better jobs, improved health outcomes, enhanced civic participation. Technology, in this view, functions as a "social amplifier" that magnifies existing advantages and disadvantages rather than leveling the playing field.

Policy implications of this evolving understanding are significant. Simple access-focused interventions, while necessary, are insufficient to achieve digital equity. Effective responses must address skills development through digital literacy programs tailored to diverse populations, promote meaningful use through content and service design that meets varied needs, and confront underlying social inequalities that shape who benefits from technological change. The digital divide, researchers increasingly argue, cannot be solved through technology alone but requires broader commitments to social and economic justice.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp35-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that internet access should be provided free to all citizens" },
      { letter: "B", text: "explain how understanding of the digital divide has evolved from a focus on access to recognition of more complex inequalities in skills, usage, and outcomes" },
      { letter: "C", text: "prove that technology has no meaningful impact on social inequality" },
      { letter: "D", text: "compare digital access in the United States with other countries" },
      { letter: "E", text: "celebrate the success of early digital divide interventions" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces how understanding of the digital divide has evolved through 'first-level' (access), 'second-level' (skills and usage), and 'third-level' (outcomes) framings, arguing that the divide is 'more complex and persistent than initially imagined.' Answer B captures this evolutionary trajectory.",
    wrongAnswerExplanations: {
      A: "The passage discusses policy but does not advocate specifically for free universal access.",
      C: "The passage argues technology amplifies existing inequalities, not that it has no impact.",
      D: "The passage focuses primarily on the United States without systematic international comparison.",
      E: "The passage notes success achieved but emphasizes that access interventions are 'insufficient.'",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p4",
  },
  {
    id: "rc-exp35-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, 'capital-enhancing' digital activities include",
    answerChoices: [
      { letter: "A", text: "using the internet exclusively for entertainment and social connection" },
      { letter: "B", text: "seeking information, developing skills, and pursuing educational and economic opportunities" },
      { letter: "C", text: "avoiding all use of digital technology" },
      { letter: "D", text: "providing public access points in libraries" },
      { letter: "E", text: "developing broadband infrastructure in rural areas" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly defines 'capital-enhancing' activities as 'seeking information, developing skills, pursuing educational and economic opportunities' in contrast to using the internet 'primarily for entertainment and social connection.'",
    wrongAnswerExplanations: {
      A: "Entertainment and social connection are contrasted with capital-enhancing activities.",
      C: "Capital-enhancing activities involve specific kinds of technology use, not avoidance.",
      D: "This is a policy intervention, not a type of user activity.",
      E: "This is infrastructure development, not a type of user activity.",
    },
    difficulty: "easy",
    passageId: "rc-exp35-p4",
  },
  {
    id: "rc-exp35-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the 'social amplifier' view of technology suggests that",
    answerChoices: [
      { letter: "A", text: "technology automatically reduces social inequality" },
      { letter: "B", text: "technology has no effect on social outcomes" },
      { letter: "C", text: "technology tends to increase advantages for those already well-positioned while doing less for the disadvantaged" },
      { letter: "D", text: "all technology users benefit equally from digital engagement" },
      { letter: "E", text: "rural communities gain more from technology than urban communities" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that technology 'functions as a social amplifier that magnifies existing advantages and disadvantages rather than leveling the playing field.' This means those already advantaged benefit more, while disadvantages are also magnified.",
    wrongAnswerExplanations: {
      A: "The passage argues the opposite: technology amplifies rather than reduces existing inequalities.",
      B: "The passage argues technology has significant effects—amplifying existing disparities.",
      D: "The third-level divide research specifically shows unequal benefits from similar technology use.",
      E: "The passage indicates rural communities face access gaps; it does not suggest they gain more.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p4",
  },
  {
    id: "rc-exp35-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses early policy responses focused on 'wiring schools and libraries' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these interventions were completely misguided" },
      { letter: "B", text: "illustrate the access-focused approach to the first-level digital divide that achieved partial success" },
      { letter: "C", text: "claim that schools no longer need technology" },
      { letter: "D", text: "compare American and European digital policies" },
      { letter: "E", text: "explain the origins of the term 'digital divide'" },
    ],
    correctAnswer: "B",
    explanation: "These policies are mentioned as examples of first-level, access-focused interventions that 'achieved significant success' in expanding basic access, though they proved insufficient to address deeper inequalities. They illustrate one stage in the evolving response to the digital divide.",
    wrongAnswerExplanations: {
      A: "The author notes these efforts 'achieved significant success,' not that they were misguided.",
      C: "The author does not suggest schools no longer need technology.",
      D: "The passage does not compare American and European policies.",
      E: "The passage does not explain where the term originated.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p4",
  },
  {
    id: "rc-exp35-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the early focus on physical access can best be characterized as",
    answerChoices: [
      { letter: "A", text: "wholly dismissive, viewing it as a waste of resources" },
      { letter: "B", text: "understanding of its initial logic while recognizing its limitations as understanding evolved" },
      { letter: "C", text: "enthusiastically supportive without any reservations" },
      { letter: "D", text: "confused about its relationship to later developments" },
      { letter: "E", text: "hostile toward the researchers who advocated this approach" },
    ],
    correctAnswer: "B",
    explanation: "The author presents the access focus as an understandable initial response that 'achieved significant success' while noting that research revealed the divide is 'more complex and persistent than initially imagined.' This reflects understanding of early logic combined with recognition of limitations.",
    wrongAnswerExplanations: {
      A: "The author acknowledges the success of access-focused interventions, not dismissing them as wasteful.",
      C: "The author explicitly notes that access-focused interventions are 'insufficient.'",
      D: "The author clearly traces how understanding evolved from first-level to third-level conceptions.",
      E: "The author does not express hostility toward early researchers.",
    },
    difficulty: "medium",
    passageId: "rc-exp35-p4",
  },
  {
    id: "rc-exp35-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the author's claim that the digital divide 'cannot be solved through technology alone'?",
    answerChoices: [
      { letter: "A", text: "A study finds that providing free broadband eliminates all differences in digital skill levels." },
      { letter: "B", text: "Research shows that even in communities with universal high-speed internet access, employment and educational outcomes continue to vary based on pre-existing socioeconomic factors." },
      { letter: "C", text: "A survey reveals that most people prefer using smartphones to desktop computers." },
      { letter: "D", text: "Internet service providers report increasing subscriber numbers worldwide." },
      { letter: "E", text: "Public libraries have extended their operating hours to provide more access time." },
    ],
    correctAnswer: "B",
    explanation: "The author argues that access alone is insufficient and that underlying social inequalities shape outcomes. Evidence that outcomes vary by socioeconomic status even where access is universal would directly support the claim that technology alone cannot solve the divide.",
    wrongAnswerExplanations: {
      A: "This would weaken the argument by suggesting access can eliminate skill disparities.",
      C: "Device preference is not relevant to whether technology alone can solve inequality.",
      D: "Increasing subscriber numbers address access, not the deeper inequalities discussed.",
      E: "Extended hours address access time, not the skills and outcomes disparities emphasized.",
    },
    difficulty: "hard",
    passageId: "rc-exp35-p4",
  },
];

// Export all RC questions from Set 35
export const rcQuestionsExpSet35: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet35 = {
  passage1: { id: "rc-exp35-p1", content: passage1, topic: "law" as const, title: "Immigration and Citizenship Law" },
  passage2: { id: "rc-exp35-p2", content: passage2, topic: "natural-sciences" as const, title: "Particle Physics and the Standard Model" },
  passage3: { id: "rc-exp35-p3", content: passage3, topic: "humanities" as const, title: "African American Literature: Baldwin and Morrison" },
  passage4: { id: "rc-exp35-p4", content: passage4, topic: "social-sciences" as const, title: "The Digital Divide and Technology Access" },
};
