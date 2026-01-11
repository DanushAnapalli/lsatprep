// Reading Comprehension Questions Bank - Set 37
// Social Science - Demographics & Migration

import { Question } from "../lsat-types";

// PASSAGE 1: Immigration and Urban Development
const passage1 = `The relationship between immigration and urban development in North American cities has fundamentally reshaped metropolitan landscapes over the past century. Traditional models of urban growth, which assumed relatively homogeneous populations moving from city centers to suburbs in predictable patterns, have proven inadequate to explain the complex demographic transformations occurring in contemporary cities. Immigration has not only altered the ethnic composition of urban areas but has also challenged conventional theories about neighborhood formation, economic development, and social integration.

Recent demographic studies reveal that immigrants increasingly bypass traditional gateway cities and settle directly in suburban areas, a phenomenon demographers term "heterolocalism." This pattern represents a significant departure from the early twentieth-century model, in which immigrants typically settled in dense urban ethnic enclaves before gradually dispersing to other areas. The new pattern is driven by several factors: the availability of affordable housing in suburban areas, the decentralization of entry-level jobs, and the presence of co-ethnic social networks that facilitate settlement in dispersed locations.

However, this shift has created both opportunities and challenges for urban planners and policymakers. On one hand, the direct settlement of immigrants in suburbs has helped revitalize declining suburban communities, filled labor shortages in suburban industries, and created diverse consumer markets. Immigrant entrepreneurs have transformed aging suburban commercial districts, bringing new vitality to areas that had experienced economic stagnation. On the other hand, many suburban municipalities lack the infrastructure and experience to provide adequate services to linguistically and culturally diverse populations, leading to gaps in access to education, healthcare, and civic participation.

Some urban scholars argue that this new settlement pattern actually facilitates integration by dispersing immigrants across a wider geographic area and preventing the formation of isolated ethnic enclaves. They contend that suburban settlement provides immigrants with better access to quality schools, safer neighborhoods, and economic opportunities, accelerating their social and economic mobility. Moreover, they suggest that the absence of concentrated ethnic neighborhoods may encourage faster language acquisition and greater interaction with native-born populations.

Critics of this view maintain that the dispersal of immigrant populations in suburban areas can actually impede integration by reducing access to crucial ethnic support networks and culturally specific services. They point out that the social capital provided by ethnic enclaves—including information networks, informal credit systems, and cultural organizations—plays a vital role in helping newcomers navigate unfamiliar institutions and economic systems. Furthermore, they argue that without the political power that comes from geographic concentration, dispersed immigrant populations may face greater difficulty in advocating for their needs and securing political representation. The debate continues to influence both academic research and policy decisions regarding immigration and urban development.`;

const passage2 = `The concept of "brain drain"—the emigration of highly educated individuals from developing countries to developed nations—has long been viewed as an unambiguous loss for sending countries. This traditional perspective holds that when doctors, engineers, scientists, and other professionals leave their home countries, they deprive those nations of critical human capital necessary for economic development. The investment in education, typically subsidized by the sending country's government, benefits the receiving country instead, creating a perverse transfer of resources from poor nations to wealthy ones.

However, a growing body of economic research suggests that this conventional wisdom oversimplifies a complex phenomenon. Some economists now argue that the prospect of migration can actually increase human capital formation in sending countries, a phenomenon they call "brain gain." When individuals believe they have a realistic chance of emigrating to countries with higher returns to education, they invest more in their own education and skill development. Since not all who prepare for migration actually emigrate, the sending country may end up with a more educated workforce overall than it would have had without the possibility of migration.

This dynamic is particularly evident in countries with high returns to foreign education. In the Philippines, for example, the substantial overseas demand for nurses has led to a dramatic expansion of nursing education programs. While many graduates do emigrate, the overall increase in trained nurses has actually improved healthcare provision domestically. Similarly, the Indian information technology sector has benefited from workers who returned with skills and capital accumulated abroad, creating what some term "brain circulation" rather than brain drain.

Nevertheless, the brain gain hypothesis faces significant criticisms. Skeptics point out that it applies primarily to countries with sufficient educational infrastructure to expand training in response to increased demand—a condition not met in many of the world's poorest nations. In countries where educational capacity is severely constrained, increased demand may simply raise the cost of education without increasing supply, benefiting only those who can afford higher prices. Moreover, critics note that the hypothesis ignores the immediate costs of losing experienced professionals. A country may have more newly trained doctors, but if experienced specialists emigrate, the quality of healthcare may still decline.

The policy implications of this debate are substantial. If brain drain represents a net loss, sending countries might justifiably restrict emigration or require emigrants to compensate the state for educational subsidies. If brain gain effects are significant, such policies would be counterproductive, reducing the incentives for human capital investment. Some researchers propose more nuanced policies, such as facilitating temporary migration that allows for knowledge transfer, or creating diaspora networks that maintain connections between emigrants and their home countries. These approaches recognize that in an increasingly globalized economy, the relationship between migration and development cannot be captured by simple models of loss or gain.`;

// PASSAGE 3: Demographic Aging and Social Policy
const passage3 = `The demographic transition currently underway in developed nations—characterized by declining fertility rates and increasing life expectancy—presents unprecedented challenges for social insurance systems designed in an era of younger populations. In many industrialized countries, the ratio of working-age adults to retirees is declining precipitously. In Japan, for instance, this ratio is projected to fall from approximately three workers per retiree in 2020 to roughly one-to-one by 2060. This shift threatens the sustainability of pay-as-you-go pension systems, which rely on current workers' contributions to fund current retirees' benefits.

Traditional responses to this crisis have focused on parametric reforms: raising the retirement age, increasing contribution rates, or reducing benefits. However, these approaches face significant political obstacles, as they require imposing costs on current or near-future retirees and workers. Some policy analysts argue that the focus on parametric reform reflects an outdated assumption that the worker-to-retiree ratio is fixed by demographics alone. They contend that this ratio is also influenced by labor force participation rates, which vary considerably across countries and can be modified through policy interventions.

The experience of Nordic countries illustrates this point. Despite facing similar demographic pressures as other developed nations, countries like Sweden and Denmark have maintained higher labor force participation among both women and older workers through policies such as subsidized childcare, flexible work arrangements, and incentives for delayed retirement. By increasing the numerator in the worker-to-retiree ratio rather than simply managing the denominator, these countries have eased the fiscal pressure on their pension systems without drastically cutting benefits or raising the retirement age.

However, critics argue that this approach has limits and may not be replicable in all contexts. First, labor force participation rates cannot increase indefinitely—they are bounded by the total adult population. Second, policies that successfully raise participation rates in one country may not work in societies with different cultural norms regarding work and family. Third, even maximum feasible increases in labor force participation may be insufficient to offset the demographic pressures facing countries with very low fertility rates, such as Japan, South Korea, and several Southern European nations.

An alternative approach, advocated by some economists, involves reforming pension systems to incorporate automatic adjustment mechanisms that link benefits, contribution rates, or retirement ages to demographic and economic indicators. Sweden's notional defined contribution system, for example, automatically adjusts benefits based on life expectancy and economic growth, distributing demographic risks between workers and retirees according to a predetermined formula. Proponents argue that such systems are both more sustainable and more politically feasible than repeated ad hoc reforms, as they depoliticize difficult distributional decisions. Critics counter that automatic mechanisms may produce socially unacceptable outcomes during economic crises or unexpected demographic shifts, and that democratic accountability requires explicit legislative decisions about intergenerational transfers rather than delegation to formulas.`;

// PASSAGE 4: Climate Migration and International Law
const passage4 = `The international legal framework governing refugees, primarily embodied in the 1951 Refugee Convention, defines a refugee as someone with a well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group. This definition, crafted in the aftermath of World War II, reflected the historical context of its creation: it was designed to address politically motivated displacement, not displacement caused by environmental factors. As climate change intensifies, creating rising sea levels, desertification, and extreme weather events that render certain areas uninhabitable, this legal framework faces a challenge it was never designed to address.

The inadequacy of current international law for addressing climate-induced migration has sparked intense debate among legal scholars and policymakers. Some argue for expanding the definition of "refugee" to include those displaced by environmental factors, creating a new category of "climate refugees" with legal protections similar to those afforded to political refugees. Advocates of this approach contend that people forced to flee uninhabitable environments face hardships comparable to those fleeing persecution, and deserve similar international protection. They note that small island nations facing submersion due to sea level rise will produce entire populations without a homeland, creating a humanitarian crisis unprecedented in modern history.

However, this proposal faces significant practical and conceptual obstacles. Unlike political persecution, which typically affects specific individuals or groups, environmental degradation often affects entire populations indiscriminately. This would exponentially increase the number of people eligible for refugee protection, potentially overwhelming the international refugee system. Moreover, environmental displacement is often gradual rather than sudden, making it difficult to determine at what point someone qualifies for protection. The causal chain linking climate change to displacement is also complex—environmental factors often interact with economic, political, and social factors to produce migration, making it difficult to distinguish "climate refugees" from economic migrants.

Critics of expanding refugee law argue for alternative approaches. Some propose creating new legal instruments specifically designed for climate-induced displacement, rather than stretching the refugee convention beyond its intended purpose. Such instruments could provide for temporary protection, planned relocation, or regional mobility agreements tailored to specific environmental challenges. Others argue that the focus on legal status misses the point—that the primary response to climate migration should be adaptation assistance that allows people to remain in their home regions, rather than international migration schemes.

A third perspective suggests that the debate over legal definitions obscures more fundamental questions about responsibility and justice. These scholars point out that climate change is primarily caused by greenhouse gas emissions from wealthy industrialized nations, while its most severe impacts fall on poor countries with minimal historical contribution to the problem. From this viewpoint, the question is not merely whether climate migrants should receive refugee protection, but how the international community should allocate responsibility for addressing displacement caused by climate change. Some propose mechanisms linking admission obligations to historical emissions levels, while others advocate for climate reparations that would fund adaptation projects in vulnerable regions. This reframing shifts the discussion from humanitarian assistance to questions of corrective justice and historical accountability.`;

export const rcQuestionsSet37: Question[] = [
  // Passage 1 Questions
  {
    id: "rc-37-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The dispersal of immigrants to suburban areas represents a complete break from historical settlement patterns and requires entirely new urban planning approaches" },
      { letter: "B", text: "Immigration has transformed urban development in ways that challenge traditional models, creating both opportunities and debates about integration" },
      { letter: "C", text: "Suburban settlement patterns definitively promote faster integration of immigrants than traditional urban ethnic enclaves" },
      { letter: "D", text: "Urban planners have failed to address the challenges created by heterolocalism in contemporary immigrant settlement" },
      { letter: "E", text: "The absence of concentrated ethnic neighborhoods prevents immigrants from accessing crucial social support networks" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents a balanced overview of how immigration has changed urban development, introduces the concept of heterolocalism, discusses both benefits and challenges, and presents competing scholarly perspectives on integration. It doesn't conclusively favor either side of the debate (ruling out C and E), nor does it claim complete novelty (A) or planning failure (D).",
    difficulty: "medium",
    passageId: "rc37-p1",
  },
  {
    id: "rc-37-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions 'affordable housing in suburban areas' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize suburban development policies that have led to housing segregation" },
      { letter: "B", text: "explain one factor contributing to the pattern of direct suburban settlement by immigrants" },
      { letter: "C", text: "contrast suburban housing availability with the lack of housing in traditional gateway cities" },
      { letter: "D", text: "support the argument that suburban settlement facilitates immigrant integration" },
      { letter: "E", text: "illustrate the economic benefits that immigrants bring to suburban communities" },
    ],
    correctAnswer: "B",
    explanation: "In the second paragraph, affordable suburban housing is listed as one of 'several factors' driving heterolocalism—the new pattern of direct suburban settlement. It's presented as an explanatory factor, not to make a normative argument about integration, housing policy, or economic benefits.",
    difficulty: "easy",
    passageId: "rc37-p1",
  },
  {
    id: "rc-37-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, scholars who argue that suburban settlement facilitates integration would most likely agree with which of the following?",
    answerChoices: [
      { letter: "A", text: "Ethnic enclaves have historically prevented immigrants from achieving economic success" },
      { letter: "B", text: "Geographic concentration is necessary for immigrants to gain political representation" },
      { letter: "C", text: "Contact with native-born populations is more likely in dispersed settlement patterns" },
      { letter: "D", text: "Suburban municipalities are better equipped to serve diverse populations than urban areas" },
      { letter: "E", text: "The social capital provided by ethnic communities is less important than previously thought" },
    ],
    correctAnswer: "C",
    explanation: "The fourth paragraph states that these scholars believe 'the absence of concentrated ethnic neighborhoods may encourage...greater interaction with native-born populations.' This directly supports option C. The passage doesn't indicate they make claims about historical prevention of success (A), reject the value of concentration for political power (B), claim superior municipal capabilities (D), or dismiss social capital's importance (E).",
    difficulty: "medium",
    passageId: "rc37-p1",
  },
  {
    id: "rc-37-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, which of the following is mentioned as a challenge created by heterolocalism?",
    answerChoices: [
      { letter: "A", text: "The formation of isolated ethnic enclaves in suburban areas" },
      { letter: "B", text: "Increased housing costs in suburban municipalities" },
      { letter: "C", text: "Inadequate suburban infrastructure for serving diverse populations" },
      { letter: "D", text: "Declining populations in traditional urban gateway cities" },
      { letter: "E", text: "Reduced availability of entry-level jobs in suburban areas" },
    ],
    correctAnswer: "C",
    explanation: "The third paragraph explicitly states that 'many suburban municipalities lack the infrastructure and experience to provide adequate services to linguistically and culturally diverse populations.' This directly corresponds to option C. The other options either contradict the passage or are not mentioned.",
    difficulty: "easy",
    passageId: "rc37-p1",
  },
  {
    id: "rc-37-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate about heterolocalism and integration can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of suburban dispersal as an integration strategy" },
      { letter: "B", text: "dismissive of traditional theories about ethnic enclaves" },
      { letter: "C", text: "neutral and analytical, presenting multiple perspectives" },
      { letter: "D", text: "cautiously optimistic that suburban settlement will improve integration outcomes" },
      { letter: "E", text: "critical of policymakers' failure to address immigrant needs" },
    ],
    correctAnswer: "C",
    explanation: "Throughout the passage, the author presents competing perspectives without endorsing either side. The fourth paragraph introduces one scholarly view while the fifth paragraph presents critics' counterarguments, and the passage concludes by noting the debate's ongoing influence. There's no indication of the author's personal position.",
    difficulty: "easy",
    passageId: "rc37-p1",
  },

  // Passage 2 Questions
  {
    id: "rc-37-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The brain gain hypothesis has definitively proven that skilled migration benefits sending countries more than it harms them" },
      { letter: "B", text: "Traditional views of brain drain as purely harmful have been challenged by research suggesting more complex effects, though significant disagreements remain" },
      { letter: "C", text: "Brain circulation, in which migrants return with enhanced skills, represents the optimal outcome for sending countries" },
      { letter: "D", text: "Developing countries should restrict emigration of skilled workers to prevent the loss of human capital" },
      { letter: "E", text: "The Philippines and India demonstrate that brain gain effects consistently outweigh brain drain costs" },
    ],
    correctAnswer: "B",
    explanation: "The passage structure moves from traditional brain drain theory, introduces the brain gain hypothesis as a challenge to conventional wisdom, provides examples, presents criticisms, and concludes with policy implications of ongoing debate. This matches option B's description of challenged traditional views with remaining disagreements. The passage doesn't endorse definitive conclusions (A, E), prescribe specific policies (D), or claim brain circulation is optimal (C).",
    difficulty: "medium",
    passageId: "rc37-p2",
  },
  {
    id: "rc-37-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses the Philippine nursing sector primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that brain gain effects are universal across all developing countries" },
      { letter: "B", text: "provide an example of how migration prospects can increase overall human capital in sending countries" },
      { letter: "C", text: "contrast successful educational expansion with unsuccessful attempts in other countries" },
      { letter: "D", text: "illustrate the healthcare challenges faced by countries experiencing brain drain" },
      { letter: "E", text: "support the argument that temporary migration is preferable to permanent emigration" },
    ],
    correctAnswer: "B",
    explanation: "The Philippine nursing example appears in the third paragraph, which discusses evidence for the brain gain hypothesis. The passage states that overseas demand led to expansion of nursing programs, and 'while many graduates do emigrate, the overall increase in trained nurses has actually improved healthcare provision domestically.' This exemplifies the brain gain concept described in paragraph two.",
    difficulty: "medium",
    passageId: "rc37-p2",
  },
  {
    id: "rc-37-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics of the brain gain hypothesis would most likely agree with which of the following?",
    answerChoices: [
      { letter: "A", text: "Migration never produces any positive effects for sending countries" },
      { letter: "B", text: "The hypothesis fails to account for differences in educational infrastructure among developing countries" },
      { letter: "C", text: "Increasing the number of trained professionals always improves service quality" },
      { letter: "D", text: "Brain circulation is impossible to achieve in practice" },
      { letter: "E", text: "All developing countries should implement policies to restrict skilled emigration" },
    ],
    correctAnswer: "B",
    explanation: "The fourth paragraph presents criticisms, noting that the hypothesis 'applies primarily to countries with sufficient educational infrastructure to expand training in response to increased demand—a condition not met in many of the world's poorest nations.' This directly supports option B. Critics don't make the absolute claims in A, C, D, or E.",
    difficulty: "hard",
    passageId: "rc37-p2",
  },
  {
    id: "rc-37-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the traditional view of brain drain holds that",
    answerChoices: [
      { letter: "A", text: "skilled emigrants eventually return to their home countries with enhanced capabilities" },
      { letter: "B", text: "educational investments by sending countries end up benefiting receiving countries instead" },
      { letter: "C", text: "migration prospects encourage increased investment in education" },
      { letter: "D", text: "the loss of professionals is offset by remittances sent home" },
      { letter: "E", text: "developing countries lack the infrastructure to train sufficient professionals" },
    ],
    correctAnswer: "B",
    explanation: "The first paragraph describes the traditional perspective, stating: 'The investment in education, typically subsidized by the sending country's government, benefits the receiving country instead, creating a perverse transfer of resources from poor nations to wealthy ones.' This directly corresponds to option B.",
    difficulty: "easy",
    passageId: "rc37-p2",
  },
  {
    id: "rc-37-010",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following scenarios would most strongly support the brain gain hypothesis?",
    answerChoices: [
      { letter: "A", text: "A country with limited educational capacity experiences increased emigration of its few trained professionals" },
      { letter: "B", text: "A country with robust universities sees enrollment in technical fields increase due to foreign job opportunities, with most graduates remaining domestically" },
      { letter: "C", text: "A country successfully restricts emigration, ensuring all trained professionals remain in the domestic workforce" },
      { letter: "D", text: "A country receives significant remittances from emigrants that fund social services" },
      { letter: "E", text: "A country's emigrants all return after working abroad for several years" },
    ],
    correctAnswer: "B",
    explanation: "The brain gain hypothesis posits that migration prospects increase human capital investment, and since not all who prepare actually emigrate, the sending country may benefit overall. Option B describes exactly this: increased enrollment due to foreign opportunities, but most graduates staying—resulting in net gain. Option A describes the opposite scenario, C prevents the mechanism from operating, and D and E describe different phenomena (remittances and return migration).",
    difficulty: "hard",
    passageId: "rc37-p2",
  },

  // Passage 3 Questions
  {
    id: "rc-37-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Demographic aging will inevitably bankrupt pay-as-you-go pension systems unless benefits are drastically reduced" },
      { letter: "B", text: "Nordic countries have solved the pension crisis through labor force participation policies that other nations should emulate" },
      { letter: "C", text: "Different approaches to addressing pension sustainability amid demographic aging each face distinct advantages and limitations" },
      { letter: "D", text: "Automatic adjustment mechanisms represent the only viable long-term solution to demographic pressures on pension systems" },
      { letter: "E", text: "The worker-to-retiree ratio is determined entirely by demographics and cannot be modified through policy interventions" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents three approaches—parametric reform, increasing labor force participation, and automatic adjustment mechanisms—and discusses both the merits and limitations of each without endorsing any as definitively superior. This matches option C's description of different approaches with distinct tradeoffs.",
    difficulty: "medium",
    passageId: "rc37-p3",
  },
  {
    id: "rc-37-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage mentions Japan's projected worker-to-retiree ratio primarily to",
    answerChoices: [
      { letter: "A", text: "illustrate the severity of demographic pressures facing some industrialized nations" },
      { letter: "B", text: "demonstrate that parametric reforms have failed in Asian countries" },
      { letter: "C", text: "contrast Japanese demographic trends with more favorable Nordic patterns" },
      { letter: "D", text: "support the argument for implementing automatic adjustment mechanisms" },
      { letter: "E", text: "criticize Japanese policies regarding retirement and labor force participation" },
    ],
    correctAnswer: "A",
    explanation: "The Japan statistic appears in the first paragraph, which establishes the demographic challenge facing pension systems. The dramatic projected decline (from 3:1 to 1:1) exemplifies the unprecedented nature of the demographic transition mentioned in the opening sentence. It's presented as context for the problem, not to support a particular solution or make comparisons.",
    difficulty: "easy",
    passageId: "rc37-p3",
  },
  {
    id: "rc-37-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that policies increasing labor force participation rates would be most effective in countries that",
    answerChoices: [
      { letter: "A", text: "have already implemented automatic adjustment mechanisms in their pension systems" },
      { letter: "B", text: "face less severe demographic pressures than Japan or South Korea" },
      { letter: "C", text: "have cultural norms compatible with such policies and room for participation rate increases" },
      { letter: "D", text: "can completely eliminate the need for parametric pension reforms" },
      { letter: "E", text: "have rejected the pay-as-you-go model in favor of defined contribution systems" },
    ],
    correctAnswer: "C",
    explanation: "The fourth paragraph's criticism notes that participation-based approaches may not be 'replicable in all contexts' due to 'different cultural norms' and that participation rates 'cannot increase indefinitely.' This suggests effectiveness requires both cultural compatibility and room for increase. The paragraph also notes that even maximum increases may be 'insufficient' for countries with very low fertility, suggesting the approach works better where demographic pressures are less extreme.",
    difficulty: "hard",
    passageId: "rc37-p3",
  },
  {
    id: "rc-37-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, critics of automatic adjustment mechanisms argue that such systems",
    answerChoices: [
      { letter: "A", text: "are politically more difficult to implement than parametric reforms" },
      { letter: "B", text: "fail to adequately distribute risks between workers and retirees" },
      { letter: "C", text: "may produce unacceptable outcomes during crises and reduce democratic accountability" },
      { letter: "D", text: "have proven ineffective in countries like Sweden that have implemented them" },
      { letter: "E", text: "cannot respond to unexpected demographic changes" },
    ],
    correctAnswer: "C",
    explanation: "The final paragraph states that critics argue automatic mechanisms 'may produce socially unacceptable outcomes during economic crises or unexpected demographic shifts, and that democratic accountability requires explicit legislative decisions about intergenerational transfers rather than delegation to formulas.' This combines both concerns mentioned in option C.",
    difficulty: "medium",
    passageId: "rc37-p3",
  },
  {
    id: "rc-37-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the various approaches to pension reform discussed in the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of automatic adjustment mechanisms" },
      { letter: "B", text: "skeptical that any approach can adequately address demographic aging" },
      { letter: "C", text: "analytical and balanced, presenting multiple perspectives without clear endorsement" },
      { letter: "D", text: "cautiously optimistic that Nordic labor force participation policies will succeed" },
      { letter: "E", text: "dismissive of traditional parametric reforms as politically infeasible" },
    ],
    correctAnswer: "C",
    explanation: "The author presents each approach (parametric reform, labor force participation, automatic mechanisms) along with both supporting arguments and criticisms, without indicating which is superior. The neutral presentation of competing perspectives, with phrases like 'some analysts argue' and 'critics counter,' indicates an analytical stance without personal endorsement.",
    difficulty: "easy",
    passageId: "rc37-p3",
  },

  // Passage 4 Questions
  {
    id: "rc-37-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The 1951 Refugee Convention should be immediately amended to include climate refugees" },
      { letter: "B", text: "Climate-induced displacement challenges existing refugee law and has generated diverse proposals for legal and policy responses" },
      { letter: "C", text: "Small island nations facing submersion represent the only legitimate category of climate refugees" },
      { letter: "D", text: "The international community has reached consensus that climate migration should be addressed through adaptation rather than legal protections" },
      { letter: "E", text: "Historical emissions levels should determine each country's obligation to accept climate migrants" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes how climate displacement challenges the 1951 Convention, then presents three distinct perspectives: expanding refugee law, creating new legal instruments, and reframing the issue as one of justice and responsibility. This matches option B's description of challenges and diverse proposals, without endorsing any particular approach.",
    difficulty: "medium",
    passageId: "rc37-p4",
  },
  {
    id: "rc-37-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage mentions small island nations facing submersion primarily in order to",
    answerChoices: [
      { letter: "A", text: "provide an example of the type of humanitarian crisis that advocates use to support expanding refugee law" },
      { letter: "B", text: "demonstrate that environmental displacement is always sudden rather than gradual" },
      { letter: "C", text: "prove that the 1951 Refugee Convention is completely obsolete" },
      { letter: "D", text: "illustrate the complex causal chains linking climate change to migration" },
      { letter: "E", text: "support the argument that adaptation assistance is superior to migration schemes" },
    ],
    correctAnswer: "A",
    explanation: "The small island nations example appears in the second paragraph, where the author presents arguments from those who advocate expanding refugee definitions. It's cited as evidence that 'people forced to flee uninhabitable environments face hardships comparable to those fleeing persecution,' supporting the case for climate refugee protection.",
    difficulty: "medium",
    passageId: "rc37-p4",
  },
  {
    id: "rc-37-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, proponents of creating new legal instruments specifically for climate displacement would most likely agree with which of the following?",
    answerChoices: [
      { letter: "A", text: "The 1951 Refugee Convention should be entirely replaced rather than supplemented" },
      { letter: "B", text: "Climate-induced displacement has fundamentally different characteristics that warrant distinct legal frameworks" },
      { letter: "C", text: "All environmental migrants should receive permanent resettlement in developed countries" },
      { letter: "D", text: "The distinction between climate refugees and economic migrants is clear and easily applied" },
      { letter: "E", text: "Legal status is less important than providing adaptation assistance to vulnerable regions" },
    ],
    correctAnswer: "B",
    explanation: "The fourth paragraph states that these proponents advocate for 'creating new legal instruments specifically designed for climate-induced displacement, rather than stretching the refugee convention beyond its intended purpose.' This implies they believe climate displacement is sufficiently different to warrant its own framework, matching option B.",
    difficulty: "hard",
    passageId: "rc37-p4",
  },
  {
    id: "rc-37-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the 1951 Refugee Convention defines a refugee as someone with a well-founded fear of persecution based on",
    answerChoices: [
      { letter: "A", text: "environmental degradation or political oppression" },
      { letter: "B", text: "race, religion, nationality, political opinion, or membership in a particular social group" },
      { letter: "C", text: "climate change, war, or economic hardship" },
      { letter: "D", text: "any factor that renders their home region uninhabitable" },
      { letter: "E", text: "gradual environmental change or sudden natural disasters" },
    ],
    correctAnswer: "B",
    explanation: "The first paragraph explicitly lists the five grounds for refugee status under the 1951 Convention: 'race, religion, nationality, political opinion, or membership in a particular social group.' This is directly stated in option B.",
    difficulty: "easy",
    passageId: "rc37-p4",
  },
  {
    id: "rc-37-020",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which of the following scenarios would present the greatest practical difficulty for determining climate refugee status, based on the challenges discussed in the passage?",
    answerChoices: [
      { letter: "A", text: "A person fleeing political persecution who also faces environmental degradation in their home country" },
      { letter: "B", text: "An entire island population forced to relocate due to rising sea levels that have fully submerged their homeland" },
      { letter: "C", text: "A farmer who gradually migrated to a city after several years of increasing drought and declining crop yields" },
      { letter: "D", text: "A person from a wealthy country seeking to relocate due to extreme weather events" },
      { letter: "E", text: "A climate scientist who has documented environmental changes in their region" },
    ],
    correctAnswer: "C",
    explanation: "The passage identifies several practical difficulties: gradual rather than sudden displacement, complex causal chains with environmental factors interacting with economic and social factors, and distinguishing climate refugees from economic migrants. Option C embodies all three challenges—it's gradual, involves multiple interacting factors (drought, economic decline), and looks similar to economic migration.",
    difficulty: "hard",
    passageId: "rc37-p4",
  },
];

