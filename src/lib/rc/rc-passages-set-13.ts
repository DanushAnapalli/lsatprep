// Reading Comprehension Expansion Set 13
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - FREEDOM OF SPEECH AND COMMERCIAL SPEECH DOCTRINE
// ============================================

const passage1 = `The First Amendment's guarantee of free speech has long been considered a cornerstone of American democracy, yet its application to commercial expression remains contested and doctrinally complex. The Supreme Court initially excluded commercial speech from constitutional protection entirely, reasoning that advertising and other business communications lacked the political and intellectual value that justified shielding expression from government regulation. This categorical exclusion persisted until 1976, when Virginia State Board of Pharmacy v. Virginia Citizens Consumer Council recognized that consumers have a legitimate interest in receiving commercial information and that the free flow of such information serves important societal functions.

The commercial speech doctrine that emerged from Virginia Pharmacy and subsequent cases occupies an intermediate position between the robust protection afforded political speech and the minimal scrutiny applied to conduct regulations. Under the Central Hudson test, articulated in 1980, courts apply a four-part analysis: the speech must concern lawful activity and not be misleading; the government must assert a substantial interest; the regulation must directly advance that interest; and the regulation must not be more extensive than necessary. This intermediate scrutiny permits regulations that would be unconstitutional if applied to political discourse while still imposing meaningful limits on government power.

Critics from both ends of the political spectrum challenge the commercial speech doctrine's coherence. Some argue that the distinction between commercial and noncommercial speech is inherently unstable, noting that much political speech has commercial dimensions while advertisements often communicate ideas about social values and lifestyles. They contend that according lesser protection to commercial expression improperly privileges some viewpoints over others and permits paternalistic restrictions that assume consumers cannot evaluate commercial claims for themselves. These critics would extend full First Amendment protection to truthful commercial speech.

Others maintain that the intermediate scrutiny framework provides too much protection to commercial expression. They argue that advertising can be manipulative, that corporations wield disproportionate communicative power, and that the doctrine improperly constrains government efforts to protect consumers and promote public health. From this perspective, the commercial speech doctrine reflects an inappropriate expansion of constitutional protection to serve corporate rather than democratic interests. Proposals range from returning to categorical exclusion to developing more nuanced balancing tests.

The practical stakes of commercial speech doctrine have grown as regulatory agencies address advertising in contexts ranging from pharmaceuticals and tobacco to digital platforms and data privacy. The doctrine's development will shape how effectively government can require disclosures, prohibit false claims, and regulate emerging forms of commercial communication. Balancing robust protection for information flow against legitimate regulatory interests remains the central challenge.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp13-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Supreme Court's commercial speech doctrine has evolved from categorical exclusion to intermediate protection, but continues to face criticism from those who would either extend or restrict constitutional protection for commercial expression." },
      { letter: "B", text: "Commercial speech should receive the same level of constitutional protection as political speech because the distinction between them is inherently unstable." },
      { letter: "C", text: "The Central Hudson test provides a definitive and universally accepted framework for analyzing commercial speech regulations." },
      { letter: "D", text: "Government regulation of commercial speech is always unconstitutional because it interferes with the free flow of information to consumers." },
      { letter: "E", text: "The commercial speech doctrine was developed primarily to serve corporate interests rather than to protect democratic values." },
    ],
    correctAnswer: "A",
    explanation: "The passage traces the evolution of commercial speech doctrine from categorical exclusion to intermediate protection under Central Hudson, then examines criticisms from those who would extend protection and those who would restrict it. Answer A captures this comprehensive treatment of doctrinal development and ongoing controversy.",
    difficulty: "medium",
    passageId: "rc-exp13-p1",
  },
  {
    id: "rc-exp13-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Central Hudson test requires courts to consider all of the following EXCEPT:",
    answerChoices: [
      { letter: "A", text: "whether the speech concerns lawful activity and is not misleading" },
      { letter: "B", text: "whether the government asserts a substantial interest" },
      { letter: "C", text: "whether the regulation directly advances the government's interest" },
      { letter: "D", text: "whether the speaker has sufficient financial resources to comply with the regulation" },
      { letter: "E", text: "whether the regulation is more extensive than necessary" },
    ],
    correctAnswer: "D",
    explanation: "The passage explicitly identifies four parts of the Central Hudson test: (1) the speech must concern lawful activity and not be misleading, (2) the government must assert a substantial interest, (3) the regulation must directly advance that interest, and (4) the regulation must not be more extensive than necessary. The financial resources of the speaker is not mentioned as a factor in the test.",
    difficulty: "medium",
    passageId: "rc-exp13-p1",
  },
  {
    id: "rc-exp13-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics who would extend full First Amendment protection to commercial speech would most likely argue that:",
    answerChoices: [
      { letter: "A", text: "consumers lack the ability to evaluate commercial claims without government assistance" },
      { letter: "B", text: "corporations should have greater communicative power than individual citizens" },
      { letter: "C", text: "treating commercial and political speech differently amounts to viewpoint discrimination and unwarranted paternalism" },
      { letter: "D", text: "the government should have unlimited authority to regulate advertising" },
      { letter: "E", text: "the Virginia Pharmacy decision was incorrectly decided and should be overturned" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that critics seeking broader protection argue that 'according lesser protection to commercial expression improperly privileges some viewpoints over others and permits paternalistic restrictions that assume consumers cannot evaluate commercial claims for themselves.' This matches answer C's characterization of viewpoint discrimination and unwarranted paternalism.",
    difficulty: "medium",
    passageId: "rc-exp13-p1",
  },
  {
    id: "rc-exp13-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions pharmaceuticals, tobacco, digital platforms, and data privacy primarily in order to:",
    answerChoices: [
      { letter: "A", text: "criticize the government's failure to regulate these industries effectively" },
      { letter: "B", text: "illustrate the practical contexts in which commercial speech doctrine has contemporary relevance" },
      { letter: "C", text: "argue that these industries should be exempt from First Amendment protections" },
      { letter: "D", text: "demonstrate that the Central Hudson test is too difficult to apply in practice" },
      { letter: "E", text: "compare American and European approaches to advertising regulation" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the final paragraph discussing 'the practical stakes of commercial speech doctrine' in contexts where 'regulatory agencies address advertising.' The examples illustrate the doctrine's real-world relevance rather than criticizing regulation or arguing for exemptions.",
    difficulty: "medium",
    passageId: "rc-exp13-p1",
  },
  {
    id: "rc-exp13-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debates about commercial speech doctrine can best be described as:",
    answerChoices: [
      { letter: "A", text: "strongly advocating for returning to categorical exclusion of commercial speech" },
      { letter: "B", text: "dismissive of all constitutional protections for commercial expression" },
      { letter: "C", text: "analytically neutral, presenting competing perspectives without endorsing a particular resolution" },
      { letter: "D", text: "enthusiastically supportive of extending full First Amendment protection to advertising" },
      { letter: "E", text: "skeptical that courts are capable of applying any doctrinal framework consistently" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the evolution of doctrine, criticisms from both directions, and practical stakes without advocating for any particular position. The passage concludes by noting that 'balancing robust protection for information flow against legitimate regulatory interests remains the central challenge,' suggesting analytical neutrality rather than advocacy.",
    difficulty: "medium",
    passageId: "rc-exp13-p1",
  },
  {
    id: "rc-exp13-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the argument of critics who believe commercial speech receives too much protection?",
    answerChoices: [
      { letter: "A", text: "Studies show that consumers accurately assess the truthfulness of most commercial claims without government intervention." },
      { letter: "B", text: "Research demonstrates that exposure to certain advertising campaigns significantly increases harmful behaviors, particularly among vulnerable populations." },
      { letter: "C", text: "Historical evidence indicates that the Founders intended the First Amendment to protect all forms of expression equally." },
      { letter: "D", text: "Surveys reveal that consumers value receiving commercial information and resent government restrictions on advertising." },
      { letter: "E", text: "Economic analyses show that advertising regulations impose minimal costs on businesses while providing negligible consumer benefits." },
    ],
    correctAnswer: "B",
    explanation: "Critics who believe commercial speech receives too much protection argue that 'advertising can be manipulative' and that doctrine 'improperly constrains government efforts to protect consumers and promote public health.' Evidence that advertising campaigns increase harmful behaviors would directly support their argument that more government regulation is needed.",
    difficulty: "hard",
    passageId: "rc-exp13-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - STEM CELL RESEARCH AND REGENERATIVE MEDICINE
// ============================================

const passage2 = `Stem cell research has emerged as one of the most promising yet controversial frontiers in modern medicine. Stem cells possess two remarkable properties that distinguish them from other cell types: the capacity for self-renewal through cell division and the ability to differentiate into specialized cell types. These characteristics make stem cells potentially invaluable for regenerative medicine, which seeks to repair or replace damaged tissues and organs. Understanding the different categories of stem cells and their respective therapeutic potentials remains essential for evaluating claims about this rapidly evolving field.

Embryonic stem cells, derived from early-stage embryos, are pluripotent, meaning they can differentiate into virtually any cell type in the body. This versatility makes them theoretically ideal for generating replacement tissues, but their use raises profound ethical concerns because embryo destruction is required for their extraction. The ethical debate has prompted significant research investment in alternative approaches that might achieve similar therapeutic benefits without embryonic sources. These considerations have shaped both funding decisions and regulatory frameworks across different jurisdictions.

Adult stem cells, found in various tissues throughout the body, offer a less controversial but more limited alternative. These cells are typically multipotent rather than pluripotent, capable of differentiating into a restricted range of cell types related to their tissue of origin. Hematopoietic stem cells from bone marrow, for example, have been used in transplant medicine for decades to treat blood cancers and certain genetic disorders. Recent research has expanded understanding of adult stem cell plasticity, with some studies suggesting these cells may be more versatile than previously thought, though such claims remain contested.

The development of induced pluripotent stem cells represented a significant breakthrough that addressed some ethical objections to embryonic stem cell research. In 2006, researchers demonstrated that adult cells could be reprogrammed to an embryonic-like pluripotent state by introducing specific transcription factors. This technique enables the creation of patient-specific pluripotent cells without destroying embryos, potentially reducing both ethical concerns and immune rejection problems in transplantation. However, questions persist about whether induced pluripotent stem cells are functionally equivalent to embryonic stem cells and whether the reprogramming process introduces genetic abnormalities that could compromise therapeutic safety.

Clinical applications of stem cell therapies have progressed more slowly than initial excitement suggested. While bone marrow transplants remain well-established, most other proposed applications remain experimental. Concerns about tumor formation, immune rejection, and the challenge of directing differentiation in vivo have complicated translation from laboratory to clinic. Numerous unproven treatments marketed by clinics worldwide exploit patient desperation while providing little scientific evidence of efficacy or safety. Responsible advancement of the field requires both scientific rigor and appropriate regulatory oversight to protect patients while enabling legitimate therapeutic innovation.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp13-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Stem cell research encompasses various cell types with different potentials and ethical considerations, and while promising for regenerative medicine, clinical applications face significant scientific and regulatory challenges." },
      { letter: "B", text: "Induced pluripotent stem cells have completely resolved all ethical and scientific concerns surrounding stem cell research." },
      { letter: "C", text: "Embryonic stem cells are the only type of stem cells with genuine therapeutic potential." },
      { letter: "D", text: "Adult stem cells have been proven to be as versatile as embryonic stem cells in all clinical applications." },
      { letter: "E", text: "Stem cell therapies are now widely available and have been proven safe and effective for treating most diseases." },
    ],
    correctAnswer: "A",
    explanation: "The passage systematically examines different stem cell types (embryonic, adult, induced pluripotent), their respective potentials and limitations, ethical considerations, and the challenges facing clinical translation. Answer A captures this comprehensive treatment of the field's promise and ongoing challenges.",
    difficulty: "medium",
    passageId: "rc-exp13-p2",
  },
  {
    id: "rc-exp13-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, embryonic stem cells differ from adult stem cells in that embryonic stem cells:",
    answerChoices: [
      { letter: "A", text: "cannot undergo self-renewal through cell division" },
      { letter: "B", text: "are pluripotent rather than multipotent, allowing differentiation into virtually any cell type" },
      { letter: "C", text: "have been used in clinical medicine for decades to treat blood cancers" },
      { letter: "D", text: "can be derived without ethical controversy" },
      { letter: "E", text: "are found in various tissues throughout the adult body" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that embryonic stem cells 'are pluripotent, meaning they can differentiate into virtually any cell type in the body,' while adult stem cells 'are typically multipotent rather than pluripotent, capable of differentiating into a restricted range of cell types.'",
    difficulty: "easy",
    passageId: "rc-exp13-p2",
  },
  {
    id: "rc-exp13-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the development of induced pluripotent stem cells was significant primarily because it:",
    answerChoices: [
      { letter: "A", text: "proved that all stem cell therapies are completely safe for human use" },
      { letter: "B", text: "demonstrated that embryonic stem cells have no therapeutic value" },
      { letter: "C", text: "offered a potential path to pluripotent cells without requiring embryo destruction" },
      { letter: "D", text: "eliminated the need for any further stem cell research" },
      { letter: "E", text: "showed that adult stem cells are more versatile than embryonic stem cells" },
    ],
    correctAnswer: "C",
    explanation: "The passage describes induced pluripotent stem cells as 'a significant breakthrough that addressed some ethical objections to embryonic stem cell research' because the technique 'enables the creation of patient-specific pluripotent cells without destroying embryos.'",
    difficulty: "medium",
    passageId: "rc-exp13-p2",
  },
  {
    id: "rc-exp13-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions hematopoietic stem cells from bone marrow primarily in order to:",
    answerChoices: [
      { letter: "A", text: "argue that adult stem cells are superior to embryonic stem cells" },
      { letter: "B", text: "provide an example of an established clinical application of adult stem cells" },
      { letter: "C", text: "criticize the focus on embryonic stem cell research" },
      { letter: "D", text: "suggest that bone marrow transplants are the only effective stem cell therapy" },
      { letter: "E", text: "explain the process by which induced pluripotent stem cells are created" },
    ],
    correctAnswer: "B",
    explanation: "The passage mentions hematopoietic stem cells as an example showing that adult stem cells 'have been used in transplant medicine for decades to treat blood cancers and certain genetic disorders.' This illustrates an existing, established application of adult stem cell therapy.",
    difficulty: "medium",
    passageId: "rc-exp13-p2",
  },
  {
    id: "rc-exp13-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward unproven stem cell treatments marketed by clinics worldwide can best be described as:",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive of their potential to help desperate patients" },
      { letter: "B", text: "neutral, presenting them as a legitimate alternative to conventional medicine" },
      { letter: "C", text: "critically concerned that they exploit patients without adequate scientific support" },
      { letter: "D", text: "ambivalent, acknowledging both their benefits and risks equally" },
      { letter: "E", text: "dismissive of patient concerns about conventional treatment options" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Numerous unproven treatments marketed by clinics worldwide exploit patient desperation while providing little scientific evidence of efficacy or safety.' The language of 'exploit' and 'desperation' clearly indicates critical concern rather than support or neutrality.",
    difficulty: "medium",
    passageId: "rc-exp13-p2",
  },
  {
    id: "rc-exp13-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, a regulatory agency evaluating a proposed stem cell therapy would most appropriately consider which of the following factors?",
    answerChoices: [
      { letter: "A", text: "Only the potential benefits of the therapy, without regard to safety concerns" },
      { letter: "B", text: "Whether the therapy has been marketed successfully by clinics in other countries" },
      { letter: "C", text: "Scientific evidence regarding both efficacy and safety, including risks of tumor formation and immune rejection" },
      { letter: "D", text: "Patient testimonials as the primary evidence of therapeutic value" },
      { letter: "E", text: "Whether the therapy uses the least expensive stem cell source available" },
    ],
    correctAnswer: "C",
    explanation: "The passage emphasizes that 'Concerns about tumor formation, immune rejection, and the challenge of directing differentiation in vivo have complicated translation from laboratory to clinic' and that 'Responsible advancement of the field requires both scientific rigor and appropriate regulatory oversight.' This indicates that regulators should consider scientific evidence of both efficacy and safety.",
    difficulty: "hard",
    passageId: "rc-exp13-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - GOTHIC LITERATURE AND THE SUPERNATURAL
// ============================================

const passage3 = `Gothic literature emerged in the mid-eighteenth century as a reaction against the rationalism of the Enlightenment, embracing the mysterious, the supernatural, and the emotionally excessive. Horace Walpole's "The Castle of Otranto" (1764), generally considered the first Gothic novel, established many conventions that would define the genre: ancient castles with secret passages, aristocratic villains, persecuted heroines, and supernatural occurrences that challenged rational explanation. The Gothic represented a literary space where repressed fears and desires could find expression, where the boundaries between the natural and supernatural became disturbingly permeable.

The supernatural elements in Gothic fiction have been interpreted through various critical lenses. Early critics often dismissed ghosts and monsters as mere sensationalism designed to thrill unsophisticated readers. Later psychoanalytic approaches reinterpreted these figures as projections of unconscious anxieties, with haunted houses representing disturbed minds and monstrous Others embodying repressed aspects of the self. From this perspective, the external terrors of Gothic fiction objectify internal psychological conflicts that cannot be directly acknowledged in realistic narrative. The supernatural becomes a symbolic vocabulary for exploring what cannot otherwise be expressed.

Ann Radcliffe, the most popular Gothic novelist of the 1790s, developed a distinctive approach to the supernatural that influenced subsequent writers. Her novels deploy what she called "terror" rather than "horror," creating atmospheric suspense through suggestion and uncertainty rather than explicit depiction of the monstrous. Crucially, Radcliffe's narratives ultimately provide rational explanations for apparently supernatural events: the ghostly monk is revealed as a disguised villain, the mysterious music as emanating from a hidden prisoner. This technique, sometimes called the "explained supernatural," preserves the pleasures of mystery while finally reasserting the authority of reason.

Other Gothic writers rejected Radcliffe's rational resolutions. Matthew Lewis's "The Monk" (1796) presents genuinely supernatural events, including demonic temptation and damnation, without retreating to natural explanations. The German Romantic tradition embraced the supernatural as a portal to transcendent realities inaccessible to mundane perception. For these writers, the supernatural was not a problem to be explained away but a genuine dimension of experience that literature could explore. This division between explained and unexplained supernatural persists in contemporary horror and fantasy fiction.

The Gothic's engagement with the supernatural carries implications beyond aesthetic preference. Whether supernatural elements are ultimately explained or accepted shapes how texts position themselves regarding rationality, religion, and the nature of reality itself. The explained supernatural affirms that apparent mysteries yield to investigation, endorsing an Enlightenment worldview even while exploring its anxieties. The genuinely supernatural suggests limits to rational comprehension, spaces where empirical investigation fails. Gothic literature thus stages fundamental epistemological debates in narrative form.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp13-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Gothic literature's treatment of the supernatural has varied between explained and genuinely supernatural approaches, with each carrying different implications for how texts position themselves regarding rationality and the nature of reality." },
      { letter: "B", text: "Ann Radcliffe was the only important Gothic novelist because she invented the technique of the explained supernatural." },
      { letter: "C", text: "Gothic literature should be dismissed as mere sensationalism with no literary value." },
      { letter: "D", text: "All supernatural elements in Gothic fiction are projections of unconscious anxieties with no other possible interpretation." },
      { letter: "E", text: "Matthew Lewis's approach to the supernatural was definitively superior to Ann Radcliffe's technique." },
    ],
    correctAnswer: "A",
    explanation: "The passage traces Gothic literature's origins, examines different critical interpretations of the supernatural, contrasts Radcliffe's explained supernatural with genuinely supernatural approaches, and concludes that these different treatments carry distinct epistemological implications. Answer A captures this comprehensive analysis.",
    difficulty: "medium",
    passageId: "rc-exp13-p3",
  },
  {
    id: "rc-exp13-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Ann Radcliffe's novels typically:",
    answerChoices: [
      { letter: "A", text: "present genuinely supernatural events without any natural explanation" },
      { letter: "B", text: "avoid any suggestion of supernatural occurrences" },
      { letter: "C", text: "create atmospheric suspense but ultimately provide rational explanations for seemingly supernatural events" },
      { letter: "D", text: "focus exclusively on realistic social commentary without Gothic elements" },
      { letter: "E", text: "were dismissed by all contemporary critics as sensationalism" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'Radcliffe's narratives ultimately provide rational explanations for apparently supernatural events' and that her novels deploy 'terror' by 'creating atmospheric suspense through suggestion and uncertainty rather than explicit depiction of the monstrous.'",
    difficulty: "easy",
    passageId: "rc-exp13-p3",
  },
  {
    id: "rc-exp13-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, psychoanalytic critics would most likely interpret a haunted house in Gothic fiction as:",
    answerChoices: [
      { letter: "A", text: "a literal supernatural phenomenon requiring no further interpretation" },
      { letter: "B", text: "a symbol representing psychological disturbance or internal conflict" },
      { letter: "C", text: "merely a setting with no symbolic significance" },
      { letter: "D", text: "evidence of the author's belief in ghosts" },
      { letter: "E", text: "a critique of eighteenth-century architecture" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that psychoanalytic approaches 'reinterpreted these figures as projections of unconscious anxieties, with haunted houses representing disturbed minds and monstrous Others embodying repressed aspects of the self.' This indicates symbolic interpretation of supernatural elements as representing psychological states.",
    difficulty: "medium",
    passageId: "rc-exp13-p3",
  },
  {
    id: "rc-exp13-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author contrasts Radcliffe's approach with Matthew Lewis's approach primarily in order to:",
    answerChoices: [
      { letter: "A", text: "argue that Lewis was a more technically skilled writer than Radcliffe" },
      { letter: "B", text: "demonstrate that Gothic literature encompasses divergent treatments of the supernatural" },
      { letter: "C", text: "criticize both writers for their handling of supernatural elements" },
      { letter: "D", text: "show that the 1790s was the only significant period for Gothic literature" },
      { letter: "E", text: "explain why Gothic literature became unpopular in the nineteenth century" },
    ],
    correctAnswer: "B",
    explanation: "The contrast between Radcliffe's explained supernatural and Lewis's genuinely supernatural approach illustrates that 'This division between explained and unexplained supernatural persists in contemporary horror and fantasy fiction.' The purpose is to show variety within the genre, not to evaluate the writers' relative merits.",
    difficulty: "medium",
    passageId: "rc-exp13-p3",
  },
  {
    id: "rc-exp13-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the psychoanalytic interpretation of Gothic supernatural elements can best be described as:",
    answerChoices: [
      { letter: "A", text: "dismissive, suggesting it has no validity" },
      { letter: "B", text: "neutral, presenting it as one among several critical approaches without endorsing or rejecting it" },
      { letter: "C", text: "enthusiastically supportive, claiming it is the only valid interpretation" },
      { letter: "D", text: "hostile, arguing that it fundamentally misunderstands Gothic literature" },
      { letter: "E", text: "confused, failing to explain the interpretation clearly" },
    ],
    correctAnswer: "B",
    explanation: "The author presents psychoanalytic interpretation alongside other critical approaches, noting that 'supernatural elements in Gothic fiction have been interpreted through various critical lenses.' The passage describes what psychoanalytic critics argue without either endorsing or rejecting their claims, maintaining analytical neutrality.",
    difficulty: "medium",
    passageId: "rc-exp13-p3",
  },
  {
    id: "rc-exp13-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A genre is introduced, different critical interpretations are presented, two contrasting approaches within the genre are compared, and broader implications are discussed." },
      { letter: "B", text: "A scientific hypothesis is proposed, experiments test it, and the hypothesis is confirmed." },
      { letter: "C", text: "Two writers are compared and one is declared definitively superior to the other." },
      { letter: "D", text: "A historical period is surveyed chronologically from beginning to end." },
      { letter: "E", text: "A problem is identified and a single solution is recommended." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces Gothic literature's origins, examines various critical interpretations of supernatural elements, contrasts Radcliffe's explained supernatural with genuinely supernatural approaches, and concludes by discussing the epistemological implications of these different treatments.",
    difficulty: "hard",
    passageId: "rc-exp13-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - SOCIAL STRATIFICATION AND MOBILITY
// ============================================

const passage4 = `Social stratification, the hierarchical arrangement of individuals and groups based on factors such as wealth, power, and prestige, represents one of the most enduring features of complex societies. Sociologists have long debated whether stratification systems primarily reflect functional imperatives that reward socially valuable contributions or whether they perpetuate arbitrary inequalities that serve the interests of dominant groups. This debate carries significant implications for how societies understand and respond to economic inequality, as different theoretical frameworks suggest radically different policy approaches.

Functionalist theories, associated with sociologists Kingsley Davis and Wilbert Moore, argue that stratification is inevitable and beneficial because it ensures that the most qualified individuals fill the most important social positions. According to this view, unequal rewards motivate talented people to invest in demanding training and to perform difficult, socially essential roles. Inequality thus serves as an incentive mechanism that promotes efficient allocation of human resources. Critics object that this theory treats existing arrangements as inherently rational, ignoring how power and privilege can perpetuate themselves regardless of functional contribution.

Conflict theories, drawing on Marxist traditions, interpret stratification as the outcome of struggle between groups with competing interests. From this perspective, dominant groups use their control over resources, institutions, and ideology to maintain advantages that may bear little relationship to social contribution. Wealth and status are inherited across generations, and social institutions from education to criminal justice operate in ways that systematically advantage privileged groups. Mobility is limited because those at the top of stratification hierarchies actively work to protect their positions.

Contemporary research on social mobility attempts to measure empirically how open or closed stratification systems actually are. Intergenerational mobility studies track whether children's socioeconomic positions differ from those of their parents. Such research reveals substantial variation across societies: Scandinavian countries exhibit relatively high mobility rates, while the United States, despite its self-image as the land of opportunity, shows mobility rates comparable to or lower than those of many European nations. These findings challenge assumptions about meritocracy and suggest that structural factors significantly constrain individual opportunities.

The mechanisms that transmit advantage and disadvantage across generations operate through multiple channels. Economic resources provide access to superior education, healthcare, and social networks. Cultural capital, including knowledge of dominant cultural codes and practices, facilitates success within existing institutions. Residential segregation concentrates poverty and limits access to opportunities. Understanding these mechanisms is essential for designing effective interventions, though debates persist about whether policies should target specific barriers or address underlying wealth inequality more directly.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp13-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to:",
    answerChoices: [
      { letter: "A", text: "prove that functionalist theory provides the correct explanation for social stratification" },
      { letter: "B", text: "examine competing theoretical perspectives on social stratification and consider empirical evidence regarding social mobility" },
      { letter: "C", text: "argue that the United States has the highest social mobility of any nation" },
      { letter: "D", text: "criticize all attempts to study social inequality scientifically" },
      { letter: "E", text: "propose specific policies for reducing economic inequality" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents functionalist and conflict theories of stratification, examines empirical research on social mobility, and discusses mechanisms of advantage transmission. Answer B accurately describes this comprehensive examination of theoretical perspectives and empirical evidence.",
    difficulty: "medium",
    passageId: "rc-exp13-p4",
  },
  {
    id: "rc-exp13-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, functionalist theories of stratification argue that:",
    answerChoices: [
      { letter: "A", text: "inequality is entirely the result of exploitation by dominant groups" },
      { letter: "B", text: "social mobility is impossible in all societies" },
      { letter: "C", text: "unequal rewards motivate talented individuals to fill important positions, making inequality functional" },
      { letter: "D", text: "Scandinavian countries have the most stratified societies" },
      { letter: "E", text: "cultural capital plays no role in social position" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that according to functionalist theory, 'unequal rewards motivate talented people to invest in demanding training and to perform difficult, socially essential roles. Inequality thus serves as an incentive mechanism that promotes efficient allocation of human resources.'",
    difficulty: "easy",
    passageId: "rc-exp13-p4",
  },
  {
    id: "rc-exp13-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, a conflict theorist would most likely argue that inherited wealth:",
    answerChoices: [
      { letter: "A", text: "always reflects the superior talents of ancestors who earned it" },
      { letter: "B", text: "serves a valuable social function by providing incentives for savings" },
      { letter: "C", text: "perpetuates advantages regardless of the heir's functional contribution to society" },
      { letter: "D", text: "is equally distributed across all social groups" },
      { letter: "E", text: "has no effect on educational or career outcomes" },
    ],
    correctAnswer: "C",
    explanation: "The passage indicates that conflict theorists view stratification as the result of 'struggle between groups with competing interests' and note that 'Wealth and status are inherited across generations.' From this perspective, inherited wealth perpetuates privilege rather than rewarding functional contribution.",
    difficulty: "medium",
    passageId: "rc-exp13-p4",
  },
  {
    id: "rc-exp13-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions Scandinavian countries and the United States primarily in order to:",
    answerChoices: [
      { letter: "A", text: "argue that Scandinavian cultures are morally superior to American culture" },
      { letter: "B", text: "illustrate empirical variation in mobility rates that challenges assumptions about American meritocracy" },
      { letter: "C", text: "demonstrate that functionalist theory is the correct explanation for stratification" },
      { letter: "D", text: "explain the historical origins of different stratification systems" },
      { letter: "E", text: "criticize both Scandinavian and American approaches to economic policy" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'Scandinavian countries exhibit relatively high mobility rates, while the United States, despite its self-image as the land of opportunity, shows mobility rates comparable to or lower than those of many European nations.' These findings are presented to 'challenge assumptions about meritocracy.'",
    difficulty: "medium",
    passageId: "rc-exp13-p4",
  },
  {
    id: "rc-exp13-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that the relationship between functionalist and conflict theories of stratification is best characterized as:",
    answerChoices: [
      { letter: "A", text: "completely complementary, with each explaining different aspects of the same phenomenon" },
      { letter: "B", text: "fundamentally opposed in their explanations of why inequality exists and persists" },
      { letter: "C", text: "identical, offering the same explanations in different terminology" },
      { letter: "D", text: "relevant only to historical societies, not contemporary ones" },
      { letter: "E", text: "both proven false by empirical research on social mobility" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents functionalist theory as arguing that 'stratification is inevitable and beneficial' while conflict theory interprets stratification 'as the outcome of struggle between groups with competing interests.' These are fundamentally different explanations: one sees inequality as functional and beneficial, the other as the result of power dynamics and exploitation.",
    difficulty: "medium",
    passageId: "rc-exp13-p4",
  },
  {
    id: "rc-exp13-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward empirical research on social mobility can best be described as:",
    answerChoices: [
      { letter: "A", text: "skeptical, suggesting that such research cannot provide meaningful insights" },
      { letter: "B", text: "dismissive, arguing that theoretical debates matter more than empirical evidence" },
      { letter: "C", text: "supportive, treating mobility research as providing valuable evidence for evaluating theoretical claims" },
      { letter: "D", text: "hostile, criticizing researchers for ideological bias" },
      { letter: "E", text: "indifferent, mentioning research only in passing without engagement" },
    ],
    correctAnswer: "C",
    explanation: "The author presents mobility research as attempting 'to measure empirically how open or closed stratification systems actually are' and treats the findings as significant: 'These findings challenge assumptions about meritocracy.' The author also emphasizes that 'Understanding these mechanisms is essential for designing effective interventions,' indicating that empirical research is valued.",
    difficulty: "medium",
    passageId: "rc-exp13-p4",
  },
];

// Export all RC questions from Set 13
export const rcQuestionsExpSet13: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet13 = {
  passage1: { id: "rc-exp13-p1", content: passage1, topic: "law", title: "Commercial Speech Doctrine" },
  passage2: { id: "rc-exp13-p2", content: passage2, topic: "natural-sciences", title: "Stem Cell Research and Regenerative Medicine" },
  passage3: { id: "rc-exp13-p3", content: passage3, topic: "humanities", title: "Gothic Literature and the Supernatural" },
  passage4: { id: "rc-exp13-p4", content: passage4, topic: "social-sciences", title: "Social Stratification and Mobility" },
};
