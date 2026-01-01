// Reading Comprehension Expansion Set 8
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - ENVIRONMENTAL LAW AND THE PUBLIC TRUST DOCTRINE
// ============================================

const passage1 = `The public trust doctrine, one of the oldest principles in environmental law, holds that certain natural resources are held in trust by the government for the benefit of present and future generations. Originating in Roman law and transmitted through English common law, the doctrine traditionally applied to navigable waters and submerged lands, ensuring public access for navigation, fishing, and commerce. In recent decades, however, environmental advocates have pressed for a dramatic expansion of this ancient principle to address contemporary ecological challenges.

The traditional scope of the public trust doctrine remained narrow for centuries. Under English common law, the Crown held title to tidal waters and their underlying lands in trust for the public. American courts adopted this principle, with states assuming the Crown's role as trustee upon independence. The United States Supreme Court's 1892 decision in Illinois Central Railroad v. Illinois established that states could not entirely abdicate their trust responsibilities, even through legislative grants to private parties. Yet the doctrine remained largely confined to protecting public access to navigable waters.

Beginning in the 1970s, legal scholars and environmental litigants began advocating for an expanded public trust doctrine. Professor Joseph Sax's influential 1970 article argued that the doctrine should be understood as imposing substantive limitations on government authority to permit environmental degradation. Under this interpretation, air, water, wildlife, and other natural resources would all be held in trust, and governmental decisions permitting their destruction would be subject to heightened judicial scrutiny. Some courts proved receptive; notably, the California Supreme Court applied the doctrine to protect Mono Lake from Los Angeles's water diversions.

The most ambitious application of the expanded public trust doctrine has emerged in atmospheric trust litigation. In Juliana v. United States and similar cases, young plaintiffs have argued that the federal government holds the atmosphere in trust for future generations and has violated its fiduciary duties by promoting fossil fuel development. These claims invoke the doctrine to establish a constitutional right to a stable climate system. While courts have been largely skeptical, dismissing most such suits on standing or political question grounds, the cases have generated significant attention and inspired continued advocacy.

Critics of public trust expansion raise several objections. They argue that extending the doctrine beyond its historical scope stretches the original principle beyond recognition, transforming what was essentially an access guarantee into a substantive environmental right. Moreover, determining the scope of trust resources and the content of governmental duties would require courts to make policy judgments better left to legislatures. Proponents counter that the doctrine has always been evolving and that environmental crises demand creative legal responses. Whether courts will embrace this expanded vision remains uncertain, but the public trust doctrine has undeniably become a significant battleground in environmental law.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp8-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The public trust doctrine should be abandoned because it is too vague to provide meaningful environmental protection." },
      { letter: "B", text: "Courts have unanimously rejected attempts to expand the public trust doctrine beyond its traditional scope." },
      { letter: "C", text: "The public trust doctrine, traditionally limited to navigable waters, has been the subject of efforts to expand its application to broader environmental concerns, though this expansion remains contested." },
      { letter: "D", text: "Professor Joseph Sax's 1970 article definitively established that the public trust doctrine applies to all natural resources." },
      { letter: "E", text: "The atmospheric trust litigation cases have successfully established a constitutional right to a stable climate." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the public trust doctrine from its traditional narrow scope to contemporary efforts at expansion, discusses various applications, and notes that the expanded vision remains contested. Answer C accurately captures this trajectory and the ongoing debate.",
    difficulty: "medium",
    passageId: "rc-exp8-p1",
  },
  {
    id: "rc-exp8-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the traditional public trust doctrine primarily protected",
    answerChoices: [
      { letter: "A", text: "atmospheric resources and climate stability" },
      { letter: "B", text: "all wildlife and natural habitats" },
      { letter: "C", text: "public access to navigable waters for navigation, fishing, and commerce" },
      { letter: "D", text: "private property rights against governmental interference" },
      { letter: "E", text: "endangered species and biodiversity" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the doctrine 'traditionally applied to navigable waters and submerged lands, ensuring public access for navigation, fishing, and commerce.'",
    difficulty: "easy",
    passageId: "rc-exp8-p1",
  },
  {
    id: "rc-exp8-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the Illinois Central Railroad v. Illinois decision established that",
    answerChoices: [
      { letter: "A", text: "private parties could never acquire rights to submerged lands" },
      { letter: "B", text: "the federal government has exclusive authority over navigable waters" },
      { letter: "C", text: "there are limits on states' ability to transfer away their trust responsibilities" },
      { letter: "D", text: "the public trust doctrine should apply to atmospheric resources" },
      { letter: "E", text: "railroads are exempt from environmental regulations" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that Illinois Central 'established that states could not entirely abdicate their trust responsibilities, even through legislative grants to private parties.' This indicates limits on transferring trust duties.",
    difficulty: "medium",
    passageId: "rc-exp8-p1",
  },
  {
    id: "rc-exp8-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the California Supreme Court's decision regarding Mono Lake primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize California's approach to water management" },
      { letter: "B", text: "provide an example of a court receptive to the expanded public trust doctrine" },
      { letter: "C", text: "argue that Los Angeles's water policies were illegal" },
      { letter: "D", text: "demonstrate that the traditional doctrine was sufficient for environmental protection" },
      { letter: "E", text: "contrast California courts with federal courts" },
    ],
    correctAnswer: "B",
    explanation: "The Mono Lake case is mentioned immediately after stating that 'some courts proved receptive' to the expanded doctrine, serving as an example of this receptivity.",
    difficulty: "medium",
    passageId: "rc-exp8-p1",
  },
  {
    id: "rc-exp8-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate over expanding the public trust doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of the expansion with no reservations" },
      { letter: "B", text: "dismissive of the doctrine's relevance to modern environmental issues" },
      { letter: "C", text: "analytically balanced, presenting arguments from both sides without clear advocacy" },
      { letter: "D", text: "hostile to any deviation from the traditional doctrine" },
      { letter: "E", text: "enthusiastically optimistic about atmospheric trust litigation" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the historical development, expansion efforts, and criticisms without clearly advocating for either side, concluding that whether courts will embrace the expanded vision 'remains uncertain.'",
    difficulty: "medium",
    passageId: "rc-exp8-p1",
  },
  {
    id: "rc-exp8-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' objection that expanding the doctrine requires courts to make policy judgments?",
    answerChoices: [
      { letter: "A", text: "Courts have historically interpreted the traditional public trust doctrine without difficulty." },
      { letter: "B", text: "Determining whether government climate policies violate trust duties requires balancing complex economic and scientific considerations that lack clear legal standards." },
      { letter: "C", text: "Several state legislatures have enacted statutes codifying expanded public trust protections." },
      { letter: "D", text: "The California Supreme Court's Mono Lake decision was based on well-established legal principles." },
      { letter: "E", text: "Environmental advocates prefer judicial remedies to legislative solutions." },
    ],
    correctAnswer: "B",
    explanation: "The critics argue that expanded doctrine application 'would require courts to make policy judgments better left to legislatures.' Evidence that climate policy decisions involve complex balancing without clear legal standards would support this objection.",
    difficulty: "hard",
    passageId: "rc-exp8-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - DARK MATTER AND DARK ENERGY IN COSMOLOGY
// ============================================

const passage2 = `One of the most profound discoveries in modern cosmology is that ordinary matter—the atoms composing stars, planets, and living beings—constitutes only about five percent of the universe's total mass-energy content. The remaining ninety-five percent consists of dark matter and dark energy, mysterious components that have never been directly observed but whose existence is inferred from their gravitational effects and the universe's expansion rate. Understanding these dark components has become central to cosmological research.

Dark matter's existence was first hypothesized in the 1930s when astronomer Fritz Zwicky observed that galaxies in the Coma Cluster were moving far too rapidly to be held together by the gravitational pull of visible matter alone. Some unseen mass, he concluded, must be providing additional gravitational binding. Subsequent observations of galactic rotation curves confirmed this inference: stars at the outer edges of spiral galaxies orbit at velocities that should fling them into intergalactic space unless substantial invisible matter exists in extended halos surrounding the visible disk. Gravitational lensing studies and cosmic microwave background measurements have further corroborated dark matter's presence.

Despite decades of research, the identity of dark matter particles remains unknown. Leading candidates include Weakly Interacting Massive Particles (WIMPs), hypothetical particles that interact through gravity and the weak nuclear force but not electromagnetism or the strong force. Sophisticated underground detectors attempt to capture the rare collisions between WIMPs and ordinary matter, but no confirmed detection has occurred. Alternative candidates include axions, sterile neutrinos, and primordial black holes. Some physicists have proposed modified gravity theories as alternatives to dark matter, though these struggle to explain all observational evidence.

Dark energy presents an even greater mystery. In 1998, two independent research teams studying distant Type Ia supernovae discovered that the universe's expansion is accelerating—a finding that earned the 2011 Nobel Prize in Physics. This acceleration cannot be explained by matter alone and requires a repulsive energy permeating space. The simplest explanation identifies dark energy with the cosmological constant that Einstein introduced and later abandoned, representing the energy density of empty space itself. However, quantum field theory calculations of vacuum energy yield values spectacularly different from observations, creating what some call the worst prediction in physics.

The dark components profoundly influence cosmic evolution. Dark matter's gravitational scaffolding enabled ordinary matter to coalesce into galaxies and larger structures after the Big Bang. Without it, the universe would likely contain only diffuse gas. Dark energy, by contrast, is driving galaxies apart and will eventually dominate completely, leading to an increasingly cold, empty cosmos. These invisible constituents thus shape both the universe's past and its distant future, even as their fundamental nature eludes our understanding.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp8-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Dark matter and dark energy have been directly observed and their properties are fully understood." },
      { letter: "B", text: "Dark matter and dark energy comprise most of the universe's content and profoundly shape cosmic evolution, yet their fundamental nature remains mysterious despite extensive research." },
      { letter: "C", text: "Fritz Zwicky's observations in the 1930s completely explained the nature of dark matter." },
      { letter: "D", text: "The cosmological constant provides a complete explanation for dark energy that has been experimentally verified." },
      { letter: "E", text: "Modified gravity theories have successfully replaced the need to invoke dark matter." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes dark matter and dark energy as constituting 95% of the universe, discusses their effects on cosmic evolution, and emphasizes that despite research, their fundamental nature 'eludes our understanding.' Answer B captures this comprehensively.",
    difficulty: "medium",
    passageId: "rc-exp8-p2",
  },
  {
    id: "rc-exp8-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the discovery that the universe's expansion is accelerating was made through",
    answerChoices: [
      { letter: "A", text: "observations of galactic rotation curves" },
      { letter: "B", text: "underground WIMP detectors" },
      { letter: "C", text: "studies of distant Type Ia supernovae" },
      { letter: "D", text: "measurements of the cosmic microwave background" },
      { letter: "E", text: "gravitational lensing observations" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'two independent research teams studying distant Type Ia supernovae discovered that the universe's expansion is accelerating.'",
    difficulty: "easy",
    passageId: "rc-exp8-p2",
  },
  {
    id: "rc-exp8-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, if dark matter did not exist, the universe would most likely",
    answerChoices: [
      { letter: "A", text: "contain more galaxies than it currently does" },
      { letter: "B", text: "be contracting rather than expanding" },
      { letter: "C", text: "lack the structured galaxies we observe and contain only diffuse gas" },
      { letter: "D", text: "be composed entirely of dark energy" },
      { letter: "E", text: "be unaffected in any observable way" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Dark matter's gravitational scaffolding enabled ordinary matter to coalesce into galaxies' and that 'Without it, the universe would likely contain only diffuse gas.'",
    difficulty: "medium",
    passageId: "rc-exp8-p2",
  },
  {
    id: "rc-exp8-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions Fritz Zwicky's observations of the Coma Cluster primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Zwicky's conclusions were incorrect" },
      { letter: "B", text: "describe the historical origin of the dark matter hypothesis" },
      { letter: "C", text: "compare galactic clusters with individual galaxies" },
      { letter: "D", text: "explain how WIMPs were first detected" },
      { letter: "E", text: "criticize early cosmological methods" },
    ],
    correctAnswer: "B",
    explanation: "Zwicky's observations are introduced with 'Dark matter's existence was first hypothesized' in the context of explaining how the concept originated historically.",
    difficulty: "medium",
    passageId: "rc-exp8-p2",
  },
  {
    id: "rc-exp8-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that the discrepancy between quantum field theory predictions and observed dark energy values is",
    answerChoices: [
      { letter: "A", text: "a minor technical issue that has been resolved" },
      { letter: "B", text: "evidence that dark energy does not exist" },
      { letter: "C", text: "an extremely significant problem considered one of the worst predictions in physics" },
      { letter: "D", text: "confirmation that the cosmological constant is correct" },
      { letter: "E", text: "irrelevant to understanding dark energy" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'quantum field theory calculations of vacuum energy yield values spectacularly different from observations, creating what some call the worst prediction in physics.'",
    difficulty: "medium",
    passageId: "rc-exp8-p2",
  },
  {
    id: "rc-exp8-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A phenomenon is introduced, its two main components are each examined in turn, and their combined significance is discussed." },
      { letter: "B", text: "A theory is proposed, evidence against it is presented, and the theory is rejected." },
      { letter: "C", text: "Two competing hypotheses are compared, and one is shown to be superior." },
      { letter: "D", text: "A historical timeline is presented chronologically from the Big Bang to the present." },
      { letter: "E", text: "A scientific method is described, and its applications are enumerated." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces the dark components as comprising 95% of the universe, discusses dark matter and dark energy each in turn, and concludes by discussing how they 'shape both the universe's past and its distant future.'",
    difficulty: "hard",
    passageId: "rc-exp8-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - THE HARLEM RENAISSANCE AND AFRICAN AMERICAN LITERATURE
// ============================================

const passage3 = `The Harlem Renaissance, flourishing from roughly 1918 to 1937, marked a pivotal moment in African American cultural history. Centered in the Harlem neighborhood of New York City, this artistic and intellectual movement produced an unprecedented outpouring of literature, music, visual art, and scholarship that fundamentally transformed how Black Americans understood and represented themselves. Yet the movement's achievements have been subject to ongoing reinterpretation, as scholars debate its character, legacy, and limitations.

The literary achievements of the Harlem Renaissance were extraordinary. Langston Hughes crafted poems that celebrated Black vernacular speech and working-class experience while exploring the complex psychological terrain of African American identity. Zora Neale Hurston drew on her anthropological training to render the folk traditions and dialect of the rural South, most famously in her novel "Their Eyes Were Watching God." Claude McKay, Jean Toomer, Countee Cullen, and Nella Larsen produced works exploring racial identity, sexuality, and the African diaspora. These writers articulated what Alain Locke called "the New Negro"—a figure who rejected the accommodationism of earlier generations in favor of assertive racial pride.

The movement benefited from particular historical circumstances. The Great Migration brought millions of African Americans from the rural South to northern cities, creating concentrated urban Black communities with newfound economic resources and cultural institutions. White fascination with African American culture during the "Jazz Age" opened doors for Black artists, even if that fascination was often exoticizing and exploitative. Patrons like Charlotte Osgood Mason funded individual artists, though sometimes with strings attached that constrained artistic expression.

Critics have raised important questions about the Renaissance's scope and beneficiaries. Houston Baker and other scholars have argued that the movement was largely a middle-class, male-dominated affair that marginalized working-class voices and women writers. The Renaissance's geographic concentration in Harlem, they note, obscured vibrant African American cultural production in Chicago, Washington, and other cities. Some contemporary Black intellectuals, including Richard Wright, criticized Renaissance literature as insufficiently engaged with the political and economic dimensions of racial oppression, producing art for white consumption rather than Black liberation.

Subsequent scholarship has complicated both celebratory and critical accounts. Feminist scholars recovered overlooked women writers and documented their struggles for recognition within the movement. Queer studies revealed how sexuality shaped Renaissance literature in ways earlier criticism obscured. Recent work has traced the movement's international dimensions, examining connections between Harlem writers and anti-colonial movements in Africa and the Caribbean. The Harlem Renaissance remains a living field of inquiry, its meanings continually negotiated as each generation brings new questions to bear on this foundational moment in African American culture.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp8-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Harlem Renaissance was a failure that produced no lasting cultural achievements." },
      { letter: "B", text: "The Harlem Renaissance produced extraordinary literary achievements, but scholarly understanding of the movement has evolved as critics have raised questions about its scope and subsequent scholars have brought new perspectives." },
      { letter: "C", text: "Richard Wright's criticism definitively established that the Harlem Renaissance was politically irrelevant." },
      { letter: "D", text: "The Great Migration was the sole cause of the Harlem Renaissance." },
      { letter: "E", text: "Langston Hughes was the only significant writer of the Harlem Renaissance." },
    ],
    correctAnswer: "B",
    explanation: "The passage celebrates the Renaissance's literary achievements, notes critical challenges to the movement's scope and inclusivity, and describes how subsequent scholarship has 'complicated both celebratory and critical accounts.' Answer B captures this nuanced trajectory.",
    difficulty: "medium",
    passageId: "rc-exp8-p3",
  },
  {
    id: "rc-exp8-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Alain Locke's concept of 'the New Negro' emphasized",
    answerChoices: [
      { letter: "A", text: "accommodation to white social expectations" },
      { letter: "B", text: "rejection of African cultural heritage" },
      { letter: "C", text: "assertive racial pride and rejection of earlier accommodationism" },
      { letter: "D", text: "exclusive focus on economic advancement" },
      { letter: "E", text: "indifference to questions of racial identity" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly describes the New Negro as 'a figure who rejected the accommodationism of earlier generations in favor of assertive racial pride.'",
    difficulty: "easy",
    passageId: "rc-exp8-p3",
  },
  {
    id: "rc-exp8-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Charlotte Osgood Mason's patronage of Harlem Renaissance artists can be inferred to have been",
    answerChoices: [
      { letter: "A", text: "entirely beneficial with no negative aspects" },
      { letter: "B", text: "financially helpful but potentially limiting to artistic freedom" },
      { letter: "C", text: "opposed by all the artists she supported" },
      { letter: "D", text: "focused exclusively on visual artists" },
      { letter: "E", text: "insignificant to the movement's development" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that patrons like Mason 'funded individual artists, though sometimes with strings attached that constrained artistic expression.' This indicates financial support that came with limitations.",
    difficulty: "medium",
    passageId: "rc-exp8-p3",
  },
  {
    id: "rc-exp8-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Richard Wright's criticism of Renaissance literature primarily in order to",
    answerChoices: [
      { letter: "A", text: "endorse Wright's view as definitively correct" },
      { letter: "B", text: "illustrate the kind of critical challenges raised against the movement" },
      { letter: "C", text: "compare Wright's fiction to Hurston's" },
      { letter: "D", text: "argue that the Renaissance had no political significance" },
      { letter: "E", text: "praise Wright as the movement's greatest writer" },
    ],
    correctAnswer: "B",
    explanation: "Wright's criticism appears in the paragraph discussing 'important questions about the Renaissance's scope and beneficiaries.' It serves as an example of contemporary critical perspectives on the movement.",
    difficulty: "medium",
    passageId: "rc-exp8-p3",
  },
  {
    id: "rc-exp8-017",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, a scholar conducting queer studies research on the Harlem Renaissance would most likely focus on",
    answerChoices: [
      { letter: "A", text: "the economic conditions in Harlem during the 1920s" },
      { letter: "B", text: "how sexuality shaped the literature in ways earlier criticism overlooked" },
      { letter: "C", text: "the relationship between the movement and the Great Migration" },
      { letter: "D", text: "statistical analysis of book sales during the period" },
      { letter: "E", text: "exclusively on heterosexual romantic relationships in the novels" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Queer studies revealed how sexuality shaped Renaissance literature in ways earlier criticism obscured.' A queer studies scholar would focus on these previously overlooked aspects.",
    difficulty: "medium",
    passageId: "rc-exp8-p3",
  },
  {
    id: "rc-exp8-018",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the ongoing scholarly interpretation of the Harlem Renaissance can best be characterized as",
    answerChoices: [
      { letter: "A", text: "disapproving of any reinterpretation of established views" },
      { letter: "B", text: "indifferent to scholarly debates about the movement" },
      { letter: "C", text: "viewing continued reinterpretation as a sign of the movement's enduring significance" },
      { letter: "D", text: "convinced that all interpretations are equally invalid" },
      { letter: "E", text: "preferring the earliest scholarly assessments as most accurate" },
    ],
    correctAnswer: "C",
    explanation: "The author concludes that 'The Harlem Renaissance remains a living field of inquiry, its meanings continually negotiated as each generation brings new questions.' This suggests viewing ongoing interpretation positively as evidence of significance.",
    difficulty: "medium",
    passageId: "rc-exp8-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - GENTRIFICATION AND URBAN DISPLACEMENT
// ============================================

const passage4 = `Gentrification—the process by which higher-income residents move into previously lower-income urban neighborhoods, transforming their character and often displacing longtime residents—has become one of the most contentious issues in urban policy. While proponents emphasize benefits like improved housing stock and increased investment, critics focus on the disruption of established communities and the displacement of vulnerable populations. Understanding gentrification requires examining its causes, mechanisms, and contested effects.

The forces driving gentrification are multiple and interconnected. Deindustrialization left many inner-city neighborhoods with depressed property values and deteriorated housing, creating what geographer Neil Smith termed a "rent gap"—the difference between current land values and potential values if the land were developed to its "highest and best use." When this gap becomes sufficiently large, investment becomes profitable. Simultaneously, demographic and cultural shifts increased demand for urban living among young professionals and empty-nesters, reversing decades of suburban flight. Municipal policies, including tax incentives for developers and the siting of cultural institutions, often actively encouraged gentrification.

Measuring displacement—the central concern of gentrification critics—has proved surprisingly difficult. Some studies find that mobility rates in gentrifying neighborhoods are not significantly higher than in non-gentrifying low-income areas, suggesting that fears of wholesale displacement may be exaggerated. However, these findings have been challenged on methodological grounds. Displaced residents are difficult to track, and studies focusing on who remains may miss those pushed out. Moreover, even if individual displacement rates are not dramatically elevated, the cumulative effect of replacing departing low-income residents with higher-income newcomers fundamentally transforms neighborhood demographics.

Beyond physical displacement, scholars have identified subtler forms of harm. Cultural displacement occurs when longtime residents feel increasingly alienated from their changing neighborhood, even if they are not forced to move. Small businesses serving existing residents are replaced by establishments catering to newcomers. Social networks that provided mutual support and collective efficacy are disrupted. Political power shifts as the concerns and interests of new residents come to dominate local decision-making. These changes can be profoundly disorienting for those who remain, representing a loss of community even without physical relocation.

Policy responses to gentrification vary widely. Some cities have implemented rent control, inclusionary zoning requiring affordable units in new developments, or community land trusts that permanently remove land from the speculative market. Others have focused on empowering existing residents to share in neighborhood improvements through homeownership programs or commercial rent stabilization. Critics argue that anti-gentrification policies may simply prevent needed investment or displace development pressure to other vulnerable neighborhoods. The challenge lies in capturing the benefits of neighborhood investment while minimizing harm to existing residents—a balance that has proved elusive in practice.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp8-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that gentrification is entirely beneficial and should be encouraged" },
      { letter: "B", text: "prove that displacement from gentrification does not occur" },
      { letter: "C", text: "examine the causes, mechanisms, and contested effects of gentrification, including debates about displacement and policy responses" },
      { letter: "D", text: "advocate for one specific policy solution to address gentrification" },
      { letter: "E", text: "compare gentrification in American cities with gentrification in European cities" },
    ],
    correctAnswer: "C",
    explanation: "The passage systematically examines gentrification's causes, the difficulty of measuring displacement, broader harms beyond physical displacement, and various policy responses. Answer C accurately describes this comprehensive analytical approach.",
    difficulty: "medium",
    passageId: "rc-exp8-p4",
  },
  {
    id: "rc-exp8-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Neil Smith's concept of the 'rent gap' refers to",
    answerChoices: [
      { letter: "A", text: "the difference between rental prices in urban and suburban areas" },
      { letter: "B", text: "the difference between what low-income and high-income residents can afford to pay" },
      { letter: "C", text: "the difference between current land values and potential values if land were developed to its highest use" },
      { letter: "D", text: "the gap in time between when rent is due and when it is paid" },
      { letter: "E", text: "the disparity between landlord expectations and tenant budgets" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly defines the rent gap as 'the difference between current land values and potential values if the land were developed to its \"highest and best use.\"'",
    difficulty: "easy",
    passageId: "rc-exp8-p4",
  },
  {
    id: "rc-exp8-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the difficulty in measuring displacement from gentrifying neighborhoods is primarily due to",
    answerChoices: [
      { letter: "A", text: "lack of interest among researchers in studying the phenomenon" },
      { letter: "B", text: "the challenge of tracking displaced residents and methodological limitations of focusing only on those who remain" },
      { letter: "C", text: "refusal of city governments to collect relevant data" },
      { letter: "D", text: "displacement occurring too slowly to measure" },
      { letter: "E", text: "complete agreement among scholars about displacement rates" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'Displaced residents are difficult to track, and studies focusing on who remains may miss those pushed out.' This explains the methodological challenges in measuring displacement.",
    difficulty: "medium",
    passageId: "rc-exp8-p4",
  },
  {
    id: "rc-exp8-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses cultural displacement, changes to small businesses, and shifts in political power primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that physical displacement is the only harm from gentrification" },
      { letter: "B", text: "show that gentrification causes no real harm to existing residents" },
      { letter: "C", text: "illustrate forms of harm beyond physical displacement that affect longtime residents" },
      { letter: "D", text: "argue that newcomers to gentrifying neighborhoods are victimized" },
      { letter: "E", text: "compare American and European experiences of gentrification" },
    ],
    correctAnswer: "C",
    explanation: "These examples appear in the paragraph beginning 'Beyond physical displacement' and are explicitly introduced to identify 'subtler forms of harm' affecting existing residents.",
    difficulty: "medium",
    passageId: "rc-exp8-p4",
  },
  {
    id: "rc-exp8-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that critics of anti-gentrification policies are concerned that such policies might",
    answerChoices: [
      { letter: "A", text: "lead to excessive investment in low-income neighborhoods" },
      { letter: "B", text: "prevent beneficial investment or shift development pressure to other vulnerable areas" },
      { letter: "C", text: "cause too many wealthy residents to move into gentrifying neighborhoods" },
      { letter: "D", text: "result in permanent solutions to housing affordability" },
      { letter: "E", text: "eliminate all displacement from urban neighborhoods" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Critics argue that anti-gentrification policies may simply prevent needed investment or displace development pressure to other vulnerable neighborhoods.'",
    difficulty: "medium",
    passageId: "rc-exp8-p4",
  },
  {
    id: "rc-exp8-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the claim that mobility rates in gentrifying neighborhoods are similar to those in non-gentrifying low-income areas?",
    answerChoices: [
      { letter: "A", text: "Residents who leave gentrifying neighborhoods often move to other parts of the same city." },
      { letter: "B", text: "Some longtime residents of gentrifying neighborhoods report higher satisfaction with neighborhood improvements." },
      { letter: "C", text: "Comprehensive tracking of displaced residents reveals that many experience severe housing instability, homelessness, or relocation to distant areas, outcomes that mobility studies fail to capture." },
      { letter: "D", text: "Property values in gentrifying neighborhoods increase more rapidly than in other areas." },
      { letter: "E", text: "New residents of gentrifying neighborhoods have higher average incomes than longtime residents." },
    ],
    correctAnswer: "C",
    explanation: "The claim suggests similar mobility rates mean displacement is not elevated. Evidence that displaced residents experience severe outcomes not captured by mobility studies would undermine this conclusion by showing the studies miss important harms.",
    difficulty: "hard",
    passageId: "rc-exp8-p4",
  },
];

// Export all RC questions from Set 8
export const rcQuestionsExpSet8: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet8 = {
  passage1: { id: "rc-exp8-p1", content: passage1, topic: "law", title: "Environmental Law and the Public Trust Doctrine" },
  passage2: { id: "rc-exp8-p2", content: passage2, topic: "natural-sciences", title: "Dark Matter and Dark Energy in Cosmology" },
  passage3: { id: "rc-exp8-p3", content: passage3, topic: "humanities", title: "The Harlem Renaissance and African American Literature" },
  passage4: { id: "rc-exp8-p4", content: passage4, topic: "social-sciences", title: "Gentrification and Urban Displacement" },
};
