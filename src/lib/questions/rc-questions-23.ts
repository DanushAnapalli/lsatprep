import { Question } from "../lsat-types";

export const rcQuestionsSet23: Question[] = [
  // Passage 1: Inclusionary Zoning
  {
    id: "rc-23-1",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Inclusionary zoning policies, which require developers to set aside a percentage of new housing units for low- and moderate-income residents, have gained traction in cities struggling with affordability crises. Proponents argue that these policies create economically diverse neighborhoods while generating affordable units without direct public expenditure. By mandating that market-rate developments include below-market units, municipalities can address housing inequality while leveraging private sector resources.

However, critics contend that inclusionary zoning inadvertently exacerbates the problems it seeks to solve. Economic analyses suggest that these requirements function as a tax on new development, discouraging construction and ultimately reducing overall housing supply. When developers must absorb the cost of below-market units, they may delay projects, build fewer units, or pass costs to market-rate buyers through higher prices. This supply constraint can worsen affordability for middle-income households not eligible for subsidized units.

Furthermore, the effectiveness of inclusionary zoning depends heavily on market conditions. In strong markets with high demand, developers can absorb mandated costs more easily. Conversely, in weak markets, these requirements may render projects financially infeasible, leading to abandoned developments and vacant lots. Some economists propose alternative approaches, such as density bonuses that allow developers to build additional market-rate units in exchange for including affordable housing, arguing this creates more housing overall while achieving social objectives.

The spatial distribution of inclusionary units raises additional concerns. While integration of income levels within buildings promotes diversity, the concentration of affordable housing in less desirable locations within developments—lower floors, worse views, separate entrances—can perpetuate segregation within supposed mixed-income communities. Moreover, income verification requirements and lengthy waitlists mean that inclusionary units often fail to serve the lowest-income residents, instead benefiting those already relatively well-positioned economically.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Inclusionary zoning policies effectively address housing affordability by requiring developers to include below-market units in new developments." },
      { letter: "B", text: "While inclusionary zoning aims to create affordable housing and economic diversity, its effectiveness is constrained by market conditions, implementation challenges, and potential unintended consequences." },
      { letter: "C", text: "Alternative approaches to inclusionary zoning, such as density bonuses, would more effectively increase housing supply while maintaining affordability." },
      { letter: "D", text: "Critics of inclusionary zoning have demonstrated that these policies worsen affordability by functioning as a tax that discourages new development." },
      { letter: "E", text: "The spatial distribution of affordable units within mixed-income developments undermines the goal of creating economically integrated communities." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents inclusionary zoning as a policy with both supporters and critics, discussing various challenges including market dependency, implementation issues, and unintended effects. Option B captures this balanced presentation of aims versus constraints, making it the main point. Options A and D present only one side, while C and E focus on specific details rather than the overall argument.",
    difficulty: "medium",
    passageId: "rc-23-passage-1"
  },
  {
    id: "rc-23-2",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Inclusionary zoning policies, which require developers to set aside a percentage of new housing units for low- and moderate-income residents, have gained traction in cities struggling with affordability crises. Proponents argue that these policies create economically diverse neighborhoods while generating affordable units without direct public expenditure. By mandating that market-rate developments include below-market units, municipalities can address housing inequality while leveraging private sector resources.

However, critics contend that inclusionary zoning inadvertently exacerbates the problems it seeks to solve. Economic analyses suggest that these requirements function as a tax on new development, discouraging construction and ultimately reducing overall housing supply. When developers must absorb the cost of below-market units, they may delay projects, build fewer units, or pass costs to market-rate buyers through higher prices. This supply constraint can worsen affordability for middle-income households not eligible for subsidized units.

Furthermore, the effectiveness of inclusionary zoning depends heavily on market conditions. In strong markets with high demand, developers can absorb mandated costs more easily. Conversely, in weak markets, these requirements may render projects financially infeasible, leading to abandoned developments and vacant lots. Some economists propose alternative approaches, such as density bonuses that allow developers to build additional market-rate units in exchange for including affordable housing, arguing this creates more housing overall while achieving social objectives.

The spatial distribution of inclusionary units raises additional concerns. While integration of income levels within buildings promotes diversity, the concentration of affordable housing in less desirable locations within developments—lower floors, worse views, separate entrances—can perpetuate segregation within supposed mixed-income communities. Moreover, income verification requirements and lengthy waitlists mean that inclusionary units often fail to serve the lowest-income residents, instead benefiting those already relatively well-positioned economically.`,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about density bonuses?",
    answerChoices: [
      { letter: "A", text: "They are more effective than inclusionary zoning in all market conditions." },
      { letter: "B", text: "They allow for increased housing production while still incorporating affordable units." },
      { letter: "C", text: "They eliminate the need for income verification and waitlists for affordable housing." },
      { letter: "D", text: "They prevent developers from concentrating affordable units in less desirable locations." },
      { letter: "E", text: "They have been widely adopted by municipalities seeking alternatives to inclusionary zoning." }
    ],
    correctAnswer: "B",
    explanation: "The passage states that density bonuses 'allow developers to build additional market-rate units in exchange for including affordable housing' and that this 'creates more housing overall while achieving social objectives.' This directly supports option B. The passage doesn't claim density bonuses work in all conditions (A), address verification/waitlists (C), solve spatial distribution issues (D), or discuss their adoption rate (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-1"
  },
  {
    id: "rc-23-3",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `Inclusionary zoning policies, which require developers to set aside a percentage of new housing units for low- and moderate-income residents, have gained traction in cities struggling with affordability crises. Proponents argue that these policies create economically diverse neighborhoods while generating affordable units without direct public expenditure. By mandating that market-rate developments include below-market units, municipalities can address housing inequality while leveraging private sector resources.

However, critics contend that inclusionary zoning inadvertently exacerbates the problems it seeks to solve. Economic analyses suggest that these requirements function as a tax on new development, discouraging construction and ultimately reducing overall housing supply. When developers must absorb the cost of below-market units, they may delay projects, build fewer units, or pass costs to market-rate buyers through higher prices. This supply constraint can worsen affordability for middle-income households not eligible for subsidized units.

Furthermore, the effectiveness of inclusionary zoning depends heavily on market conditions. In strong markets with high demand, developers can absorb mandated costs more easily. Conversely, in weak markets, these requirements may render projects financially infeasible, leading to abandoned developments and vacant lots. Some economists propose alternative approaches, such as density bonuses that allow developers to build additional market-rate units in exchange for including affordable housing, arguing this creates more housing overall while achieving social objectives.

The spatial distribution of inclusionary units raises additional concerns. While integration of income levels within buildings promotes diversity, the concentration of affordable housing in less desirable locations within developments—lower floors, worse views, separate entrances—can perpetuate segregation within supposed mixed-income communities. Moreover, income verification requirements and lengthy waitlists mean that inclusionary units often fail to serve the lowest-income residents, instead benefiting those already relatively well-positioned economically.`,
    questionStem: "The author's discussion of market conditions in the third paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "introduce an economic theory that explains why inclusionary zoning fails in most contexts" },
      { letter: "B", text: "illustrate that the success of inclusionary zoning policies varies based on local economic circumstances" },
      { letter: "C", text: "argue that strong housing markets are necessary prerequisites for implementing inclusionary zoning" },
      { letter: "D", text: "provide evidence that weak markets benefit more from inclusionary zoning than strong markets" },
      { letter: "E", text: "suggest that market conditions are irrelevant to the effectiveness of housing policy interventions" }
    ],
    correctAnswer: "B",
    explanation: "The third paragraph explains that inclusionary zoning works differently depending on market strength—developers can absorb costs in strong markets but projects may become infeasible in weak markets. This demonstrates variability based on circumstances (option B). The passage doesn't claim these policies fail in most contexts (A), that strong markets are prerequisites (C), that weak markets benefit more (D), or that markets are irrelevant (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-1"
  },
  {
    id: "rc-23-4",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `Inclusionary zoning policies, which require developers to set aside a percentage of new housing units for low- and moderate-income residents, have gained traction in cities struggling with affordability crises. Proponents argue that these policies create economically diverse neighborhoods while generating affordable units without direct public expenditure. By mandating that market-rate developments include below-market units, municipalities can address housing inequality while leveraging private sector resources.

However, critics contend that inclusionary zoning inadvertently exacerbates the problems it seeks to solve. Economic analyses suggest that these requirements function as a tax on new development, discouraging construction and ultimately reducing overall housing supply. When developers must absorb the cost of below-market units, they may delay projects, build fewer units, or pass costs to market-rate buyers through higher prices. This supply constraint can worsen affordability for middle-income households not eligible for subsidized units.

Furthermore, the effectiveness of inclusionary zoning depends heavily on market conditions. In strong markets with high demand, developers can absorb mandated costs more easily. Conversely, in weak markets, these requirements may render projects financially infeasible, leading to abandoned developments and vacant lots. Some economists propose alternative approaches, such as density bonuses that allow developers to build additional market-rate units in exchange for including affordable housing, arguing this creates more housing overall while achieving social objectives.

The spatial distribution of inclusionary units raises additional concerns. While integration of income levels within buildings promotes diversity, the concentration of affordable housing in less desirable locations within developments—lower floors, worse views, separate entrances—can perpetuate segregation within supposed mixed-income communities. Moreover, income verification requirements and lengthy waitlists mean that inclusionary units often fail to serve the lowest-income residents, instead benefiting those already relatively well-positioned economically.`,
    questionStem: "According to the passage, critics of inclusionary zoning argue that these policies harm middle-income households by",
    answerChoices: [
      { letter: "A", text: "requiring income verification procedures that middle-income families find burdensome" },
      { letter: "B", text: "concentrating affordable housing in less desirable locations within developments" },
      { letter: "C", text: "reducing overall housing supply and potentially raising prices for market-rate units" },
      { letter: "D", text: "creating lengthy waitlists that prevent middle-income residents from accessing affordable units" },
      { letter: "E", text: "mandating that developers build fewer total units in each development project" }
    ],
    correctAnswer: "C",
    explanation: "The second paragraph explicitly states that supply constraints from inclusionary zoning 'can worsen affordability for middle-income households not eligible for subsidized units.' It explains that costs may be passed to market-rate buyers through higher prices and that reduced construction affects overall supply. Option C accurately captures this argument. Options A and D refer to features affecting low-income residents, while B discusses spatial distribution, and E misrepresents the criticism.",
    difficulty: "easy",
    passageId: "rc-23-passage-1"
  },
  {
    id: "rc-23-5",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `Inclusionary zoning policies, which require developers to set aside a percentage of new housing units for low- and moderate-income residents, have gained traction in cities struggling with affordability crises. Proponents argue that these policies create economically diverse neighborhoods while generating affordable units without direct public expenditure. By mandating that market-rate developments include below-market units, municipalities can address housing inequality while leveraging private sector resources.

However, critics contend that inclusionary zoning inadvertently exacerbates the problems it seeks to solve. Economic analyses suggest that these requirements function as a tax on new development, discouraging construction and ultimately reducing overall housing supply. When developers must absorb the cost of below-market units, they may delay projects, build fewer units, or pass costs to market-rate buyers through higher prices. This supply constraint can worsen affordability for middle-income households not eligible for subsidized units.

Furthermore, the effectiveness of inclusionary zoning depends heavily on market conditions. In strong markets with high demand, developers can absorb mandated costs more easily. Conversely, in weak markets, these requirements may render projects financially infeasible, leading to abandoned developments and vacant lots. Some economists propose alternative approaches, such as density bonuses that allow developers to build additional market-rate units in exchange for including affordable housing, arguing this creates more housing overall while achieving social objectives.

The spatial distribution of inclusionary units raises additional concerns. While integration of income levels within buildings promotes diversity, the concentration of affordable housing in less desirable locations within developments—lower floors, worse views, separate entrances—can perpetuate segregation within supposed mixed-income communities. Moreover, income verification requirements and lengthy waitlists mean that inclusionary units often fail to serve the lowest-income residents, instead benefiting those already relatively well-positioned economically.`,
    questionStem: "The author's attitude toward inclusionary zoning can most accurately be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive, emphasizing the benefits of economic diversity and affordable housing creation" },
      { letter: "B", text: "entirely dismissive, rejecting the policy as fundamentally flawed and counterproductive" },
      { letter: "C", text: "analytically neutral, presenting both supporting arguments and significant criticisms" },
      { letter: "D", text: "cautiously optimistic, suggesting that minor adjustments would resolve most concerns" },
      { letter: "E", text: "implicitly hostile, using language that subtly undermines proponents' claims" }
    ],
    correctAnswer: "C",
    explanation: "The passage presents a balanced view, beginning with proponents' arguments (economic diversity, no direct public cost) and then discussing critics' concerns (supply reduction, market dependency, implementation problems). The author doesn't advocate for either position but rather explains both perspectives objectively. Option C correctly identifies this analytical neutrality. The passage neither strongly supports (A) nor dismisses (B) the policy, doesn't suggest minor fixes (D), or use hostile language (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-1"
  },

  // Passage 2: Transit-Oriented Development
  {
    id: "rc-23-6",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Transit-oriented development (TOD), characterized by dense, mixed-use neighborhoods centered around public transportation hubs, has emerged as a prominent strategy for addressing urban sprawl and reducing automobile dependence. Urban planners champion TOD as a solution to multiple contemporary challenges: it promises to decrease carbon emissions by facilitating walking and transit use, create vibrant pedestrian-friendly communities, and maximize the value of public infrastructure investments. By concentrating residential and commercial development within walkable distances of transit stations, TOD theoretically reduces the need for private vehicle ownership while supporting more sustainable urban growth patterns.

The environmental calculus underlying TOD advocacy, however, proves more complex than initial assessments suggest. While residents of TOD neighborhoods may drive less than suburban counterparts, the construction phase of dense development generates substantial carbon emissions through materials production, transportation, and building processes. High-rise construction, particularly concrete production, represents one of the largest sources of global CO2 emissions. Researchers examining lifecycle assessments question whether the operational carbon savings from reduced driving offset the embodied carbon in construction, especially when considering the decades required to achieve carbon neutrality.

Moreover, the assumption that TOD necessarily reduces automobile use oversimplifies actual behavior patterns. Studies reveal that TOD attracts primarily households already predisposed to transit use and walking—young professionals, students, and urban-oriented individuals who might choose transit-accessible locations regardless of intentional TOD policies. This self-selection effect means TOD may not fundamentally change transportation behavior but rather concentrate existing preferences. Additionally, TOD's higher housing costs can push lower-income residents to more affordable peripheral areas, potentially increasing regional vehicle miles traveled as displaced residents commute longer distances.

The economic sustainability of TOD depends on continued public investment in high-quality transit service, yet many regions struggle to maintain existing systems, much less expand them. Without reliable, frequent, and extensive transit networks, TOD risks becoming merely high-density development without the transit component, concentrating populations without providing genuine alternatives to driving. This outcome would preserve automobile dependence while intensifying congestion in areas lacking the infrastructure to support density.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Transit-oriented development effectively reduces automobile dependence and carbon emissions in urban areas." },
      { letter: "B", text: "The self-selection of transit-oriented residents demonstrates that TOD policies are unnecessary for achieving sustainable transportation patterns." },
      { letter: "C", text: "While transit-oriented development is promoted as addressing multiple urban challenges, its actual environmental and behavioral benefits are more limited and complex than commonly assumed." },
      { letter: "D", text: "High construction emissions from dense development undermine any environmental benefits that transit-oriented development might provide." },
      { letter: "E", text: "Transit-oriented development fails because it displaces low-income residents and concentrates populations without adequate infrastructure." }
    ],
    correctAnswer: "C",
    explanation: "The passage presents TOD as a widely promoted strategy (first paragraph) but then systematically examines complications and limitations regarding environmental benefits (second paragraph), behavioral assumptions (third paragraph), and economic sustainability (fourth paragraph). Option C captures this structure of promised benefits versus complex reality. Options A and D are too one-sided, while B and E focus on specific criticisms rather than the overall argument about complexity and limitations.",
    difficulty: "medium",
    passageId: "rc-23-passage-2"
  },
  {
    id: "rc-23-7",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Transit-oriented development (TOD), characterized by dense, mixed-use neighborhoods centered around public transportation hubs, has emerged as a prominent strategy for addressing urban sprawl and reducing automobile dependence. Urban planners champion TOD as a solution to multiple contemporary challenges: it promises to decrease carbon emissions by facilitating walking and transit use, create vibrant pedestrian-friendly communities, and maximize the value of public infrastructure investments. By concentrating residential and commercial development within walkable distances of transit stations, TOD theoretically reduces the need for private vehicle ownership while supporting more sustainable urban growth patterns.

The environmental calculus underlying TOD advocacy, however, proves more complex than initial assessments suggest. While residents of TOD neighborhoods may drive less than suburban counterparts, the construction phase of dense development generates substantial carbon emissions through materials production, transportation, and building processes. High-rise construction, particularly concrete production, represents one of the largest sources of global CO2 emissions. Researchers examining lifecycle assessments question whether the operational carbon savings from reduced driving offset the embodied carbon in construction, especially when considering the decades required to achieve carbon neutrality.

Moreover, the assumption that TOD necessarily reduces automobile use oversimplifies actual behavior patterns. Studies reveal that TOD attracts primarily households already predisposed to transit use and walking—young professionals, students, and urban-oriented individuals who might choose transit-accessible locations regardless of intentional TOD policies. This self-selection effect means TOD may not fundamentally change transportation behavior but rather concentrate existing preferences. Additionally, TOD's higher housing costs can push lower-income residents to more affordable peripheral areas, potentially increasing regional vehicle miles traveled as displaced residents commute longer distances.

The economic sustainability of TOD depends on continued public investment in high-quality transit service, yet many regions struggle to maintain existing systems, much less expand them. Without reliable, frequent, and extensive transit networks, TOD risks becoming merely high-density development without the transit component, concentrating populations without providing genuine alternatives to driving. This outcome would preserve automobile dependence while intensifying congestion in areas lacking the infrastructure to support density.`,
    questionStem: "The passage most strongly supports which one of the following statements about lifecycle carbon assessments of transit-oriented development?",
    answerChoices: [
      { letter: "A", text: "They consistently demonstrate that TOD produces net carbon reductions within five years of construction." },
      { letter: "B", text: "They have definitively proven that construction emissions exceed any operational savings from reduced driving." },
      { letter: "C", text: "They raise questions about whether and when operational carbon savings offset construction-phase emissions." },
      { letter: "D", text: "They show that low-rise construction methods eliminate concerns about embodied carbon in buildings." },
      { letter: "E", text: "They indicate that concrete production accounts for the majority of all global carbon emissions." }
    ],
    correctAnswer: "C",
    explanation: "The second paragraph states that 'Researchers examining lifecycle assessments question whether the operational carbon savings from reduced driving offset the embodied carbon in construction, especially when considering the decades required to achieve carbon neutrality.' Option C accurately reflects this questioning and uncertainty. The passage doesn't claim consistent reductions (A), definitive proof against TOD (B), solutions through low-rise construction (D), or that concrete is the majority source globally (E)—only 'one of the largest sources.'",
    difficulty: "medium",
    passageId: "rc-23-passage-2"
  },
  {
    id: "rc-23-8",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `Transit-oriented development (TOD), characterized by dense, mixed-use neighborhoods centered around public transportation hubs, has emerged as a prominent strategy for addressing urban sprawl and reducing automobile dependence. Urban planners champion TOD as a solution to multiple contemporary challenges: it promises to decrease carbon emissions by facilitating walking and transit use, create vibrant pedestrian-friendly communities, and maximize the value of public infrastructure investments. By concentrating residential and commercial development within walkable distances of transit stations, TOD theoretically reduces the need for private vehicle ownership while supporting more sustainable urban growth patterns.

The environmental calculus underlying TOD advocacy, however, proves more complex than initial assessments suggest. While residents of TOD neighborhoods may drive less than suburban counterparts, the construction phase of dense development generates substantial carbon emissions through materials production, transportation, and building processes. High-rise construction, particularly concrete production, represents one of the largest sources of global CO2 emissions. Researchers examining lifecycle assessments question whether the operational carbon savings from reduced driving offset the embodied carbon in construction, especially when considering the decades required to achieve carbon neutrality.

Moreover, the assumption that TOD necessarily reduces automobile use oversimplifies actual behavior patterns. Studies reveal that TOD attracts primarily households already predisposed to transit use and walking—young professionals, students, and urban-oriented individuals who might choose transit-accessible locations regardless of intentional TOD policies. This self-selection effect means TOD may not fundamentally change transportation behavior but rather concentrate existing preferences. Additionally, TOD's higher housing costs can push lower-income residents to more affordable peripheral areas, potentially increasing regional vehicle miles traveled as displaced residents commute longer distances.

The economic sustainability of TOD depends on continued public investment in high-quality transit service, yet many regions struggle to maintain existing systems, much less expand them. Without reliable, frequent, and extensive transit networks, TOD risks becoming merely high-density development without the transit component, concentrating populations without providing genuine alternatives to driving. This outcome would preserve automobile dependence while intensifying congestion in areas lacking the infrastructure to support density.`,
    questionStem: "According to the passage, the self-selection effect associated with transit-oriented development refers to the tendency of TOD to",
    answerChoices: [
      { letter: "A", text: "attract residents who prefer driving but are forced to use transit due to high parking costs" },
      { letter: "B", text: "draw households that were already inclined toward transit use and walking before moving to TOD neighborhoods" },
      { letter: "C", text: "encourage residents to self-select their preferred mode of transportation based on trip purpose" },
      { letter: "D", text: "concentrate low-income residents who cannot afford private vehicle ownership" },
      { letter: "E", text: "select locations with the highest quality transit infrastructure for development projects" }
    ],
    correctAnswer: "B",
    explanation: "The third paragraph explicitly defines the self-selection effect: 'TOD attracts primarily households already predisposed to transit use and walking—young professionals, students, and urban-oriented individuals who might choose transit-accessible locations regardless of intentional TOD policies.' Option B accurately captures this definition. The passage doesn't describe forced transit use (A), trip-based mode selection (C), concentration of low-income residents (D), or site selection processes (E).",
    difficulty: "easy",
    passageId: "rc-23-passage-2"
  },
  {
    id: "rc-23-9",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `Transit-oriented development (TOD), characterized by dense, mixed-use neighborhoods centered around public transportation hubs, has emerged as a prominent strategy for addressing urban sprawl and reducing automobile dependence. Urban planners champion TOD as a solution to multiple contemporary challenges: it promises to decrease carbon emissions by facilitating walking and transit use, create vibrant pedestrian-friendly communities, and maximize the value of public infrastructure investments. By concentrating residential and commercial development within walkable distances of transit stations, TOD theoretically reduces the need for private vehicle ownership while supporting more sustainable urban growth patterns.

The environmental calculus underlying TOD advocacy, however, proves more complex than initial assessments suggest. While residents of TOD neighborhoods may drive less than suburban counterparts, the construction phase of dense development generates substantial carbon emissions through materials production, transportation, and building processes. High-rise construction, particularly concrete production, represents one of the largest sources of global CO2 emissions. Researchers examining lifecycle assessments question whether the operational carbon savings from reduced driving offset the embodied carbon in construction, especially when considering the decades required to achieve carbon neutrality.

Moreover, the assumption that TOD necessarily reduces automobile use oversimplifies actual behavior patterns. Studies reveal that TOD attracts primarily households already predisposed to transit use and walking—young professionals, students, and urban-oriented individuals who might choose transit-accessible locations regardless of intentional TOD policies. This self-selection effect means TOD may not fundamentally change transportation behavior but rather concentrate existing preferences. Additionally, TOD's higher housing costs can push lower-income residents to more affordable peripheral areas, potentially increasing regional vehicle miles traveled as displaced residents commute longer distances.

The economic sustainability of TOD depends on continued public investment in high-quality transit service, yet many regions struggle to maintain existing systems, much less expand them. Without reliable, frequent, and extensive transit networks, TOD risks becoming merely high-density development without the transit component, concentrating populations without providing genuine alternatives to driving. This outcome would preserve automobile dependence while intensifying congestion in areas lacking the infrastructure to support density.`,
    questionStem: "The author's discussion of housing costs in the third paragraph serves primarily to",
    answerChoices: [
      { letter: "A", text: "explain why transit-oriented development attracts primarily young professionals and students" },
      { letter: "B", text: "argue that TOD should include more affordable housing to prevent displacement" },
      { letter: "C", text: "illustrate a potential unintended consequence that could increase regional automobile use" },
      { letter: "D", text: "demonstrate that self-selection effects are caused by economic rather than environmental factors" },
      { letter: "E", text: "support the claim that TOD fails to create vibrant pedestrian-friendly communities" }
    ],
    correctAnswer: "C",
    explanation: "The passage discusses housing costs to show that 'TOD's higher housing costs can push lower-income residents to more affordable peripheral areas, potentially increasing regional vehicle miles traveled as displaced residents commute longer distances.' This illustrates an unintended consequence that contradicts TOD's goal of reducing automobile use (option C). The passage doesn't use costs to explain who TOD attracts (A), advocate for solutions (B), explain self-selection causes (D), or discuss community vibrancy (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-2"
  },
  {
    id: "rc-23-10",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Transit-oriented development (TOD), characterized by dense, mixed-use neighborhoods centered around public transportation hubs, has emerged as a prominent strategy for addressing urban sprawl and reducing automobile dependence. Urban planners champion TOD as a solution to multiple contemporary challenges: it promises to decrease carbon emissions by facilitating walking and transit use, create vibrant pedestrian-friendly communities, and maximize the value of public infrastructure investments. By concentrating residential and commercial development within walkable distances of transit stations, TOD theoretically reduces the need for private vehicle ownership while supporting more sustainable urban growth patterns.

The environmental calculus underlying TOD advocacy, however, proves more complex than initial assessments suggest. While residents of TOD neighborhoods may drive less than suburban counterparts, the construction phase of dense development generates substantial carbon emissions through materials production, transportation, and building processes. High-rise construction, particularly concrete production, represents one of the largest sources of global CO2 emissions. Researchers examining lifecycle assessments question whether the operational carbon savings from reduced driving offset the embodied carbon in construction, especially when considering the decades required to achieve carbon neutrality.

Moreover, the assumption that TOD necessarily reduces automobile use oversimplifies actual behavior patterns. Studies reveal that TOD attracts primarily households already predisposed to transit use and walking—young professionals, students, and urban-oriented individuals who might choose transit-accessible locations regardless of intentional TOD policies. This self-selection effect means TOD may not fundamentally change transportation behavior but rather concentrate existing preferences. Additionally, TOD's higher housing costs can push lower-income residents to more affordable peripheral areas, potentially increasing regional vehicle miles traveled as displaced residents commute longer distances.

The economic sustainability of TOD depends on continued public investment in high-quality transit service, yet many regions struggle to maintain existing systems, much less expand them. Without reliable, frequent, and extensive transit networks, TOD risks becoming merely high-density development without the transit component, concentrating populations without providing genuine alternatives to driving. This outcome would preserve automobile dependence while intensifying congestion in areas lacking the infrastructure to support density.`,
    questionStem: "Based on the passage, the author would most likely agree with which one of the following statements?",
    answerChoices: [
      { letter: "A", text: "Transit-oriented development should be abandoned in favor of suburban development patterns." },
      { letter: "B", text: "The success of TOD as a sustainable development strategy depends on factors beyond density and proximity to transit." },
      { letter: "C", text: "Self-selection effects prove that intentional TOD policies have no impact on urban transportation patterns." },
      { letter: "D", text: "Construction emissions make transit-oriented development environmentally worse than suburban sprawl." },
      { letter: "E", text: "Most urban regions possess adequate transit infrastructure to support successful TOD implementation." }
    ],
    correctAnswer: "B",
    explanation: "Throughout the passage, the author identifies various factors that complicate TOD's success: lifecycle carbon considerations, behavioral self-selection, displacement effects, and infrastructure adequacy. The final paragraph emphasizes that TOD requires 'continued public investment in high-quality transit service' to succeed. Option B reflects this recognition that success depends on multiple factors beyond basic TOD characteristics. The passage doesn't advocate abandoning TOD (A), claim policies have no impact (C), conclude TOD is environmentally worse (D), or suggest adequate infrastructure exists (E).",
    difficulty: "hard",
    passageId: "rc-23-passage-2"
  },

  // Passage 3: Community Land Trusts
  {
    id: "rc-23-11",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Community land trusts (CLTs) represent an innovative approach to maintaining long-term housing affordability by separating land ownership from building ownership. Under this model, a nonprofit organization holds land in trust for the benefit of a community, leasing it to homeowners through 99-year renewable ground leases while homeowners own the structures. By removing land costs from the purchase price, CLTs make homeownership accessible to moderate-income families who would otherwise be priced out of markets. When CLT homes are resold, restrictions limit appreciation to preserve affordability for subsequent purchasers, creating permanently affordable housing stock without ongoing public subsidy.

Advocates emphasize that CLTs reconcile competing policy objectives that typically exist in tension. Traditional affordable housing programs often must choose between enabling wealth building for individual families through market-rate appreciation or maintaining community affordability through perpetual restrictions. CLTs thread this needle by allowing homeowners to build some equity through restricted appreciation formulas—typically linked to area median income changes rather than market rates—while ensuring homes remain affordable across generations. This balance makes CLTs politically sustainable, as they avoid the perception of providing "free" housing while addressing legitimate concerns about neighborhood affordability.

However, the scalability of the CLT model faces significant obstacles. Establishing CLTs requires substantial upfront capital to acquire land, expertise in complex real estate structures, and sustained organizational capacity to manage ground leases and monitor compliance. Most existing CLTs remain small, serving dozens or hundreds of families rather than thousands, and concentrate in areas with strong nonprofit sectors and progressive political cultures. Replicating this model nationally would require policy changes that prioritize long-term affordability over immediate production numbers, as CLT development proceeds more slowly than conventional subsidized housing due to community engagement processes and complicated financing structures.

Furthermore, critics question whether restricting appreciation truly serves low-income families' interests. The wealth-building potential of homeownership has historically provided economic mobility for working-class families, particularly through home equity extraction for education, business investment, or retirement. By limiting this appreciation, CLTs may trap families in neighborhoods they wish to leave, denying them the very economic benefits that make homeownership desirable. Additionally, resale restrictions can complicate obtaining mortgages, as lenders face uncertainty about future collateral value, potentially forcing CLT homeowners to accept less favorable loan terms than conventional buyers.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Community land trusts successfully reconcile the competing goals of individual wealth building and long-term community affordability." },
      { letter: "B", text: "While community land trusts offer an innovative approach to maintaining affordability that balances individual and community interests, significant questions remain about scalability and whether restrictions truly benefit low-income families." },
      { letter: "C", text: "The community land trust model should be replicated nationally because it creates permanently affordable housing without requiring ongoing public subsidies." },
      { letter: "D", text: "Critics have demonstrated that community land trusts harm low-income families by restricting their ability to build wealth through homeownership." },
      { letter: "E", text: "Community land trusts face insurmountable obstacles to scaling beyond small nonprofit organizations in progressive communities." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents CLTs as an innovative model with benefits (first two paragraphs) but then discusses substantial challenges regarding scalability (third paragraph) and questions about whether restrictions serve families' interests (fourth paragraph). Option B captures this structure of promise tempered by significant concerns. Options A and C are too positive, D too negative, and E overstates the challenges by calling them 'insurmountable.'",
    difficulty: "medium",
    passageId: "rc-23-passage-3"
  },
  {
    id: "rc-23-12",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `Community land trusts (CLTs) represent an innovative approach to maintaining long-term housing affordability by separating land ownership from building ownership. Under this model, a nonprofit organization holds land in trust for the benefit of a community, leasing it to homeowners through 99-year renewable ground leases while homeowners own the structures. By removing land costs from the purchase price, CLTs make homeownership accessible to moderate-income families who would otherwise be priced out of markets. When CLT homes are resold, restrictions limit appreciation to preserve affordability for subsequent purchasers, creating permanently affordable housing stock without ongoing public subsidy.

Advocates emphasize that CLTs reconcile competing policy objectives that typically exist in tension. Traditional affordable housing programs often must choose between enabling wealth building for individual families through market-rate appreciation or maintaining community affordability through perpetual restrictions. CLTs thread this needle by allowing homeowners to build some equity through restricted appreciation formulas—typically linked to area median income changes rather than market rates—while ensuring homes remain affordable across generations. This balance makes CLTs politically sustainable, as they avoid the perception of providing "free" housing while addressing legitimate concerns about neighborhood affordability.

However, the scalability of the CLT model faces significant obstacles. Establishing CLTs requires substantial upfront capital to acquire land, expertise in complex real estate structures, and sustained organizational capacity to manage ground leases and monitor compliance. Most existing CLTs remain small, serving dozens or hundreds of families rather than thousands, and concentrate in areas with strong nonprofit sectors and progressive political cultures. Replicating this model nationally would require policy changes that prioritize long-term affordability over immediate production numbers, as CLT development proceeds more slowly than conventional subsidized housing due to community engagement processes and complicated financing structures.

Furthermore, critics question whether restricting appreciation truly serves low-income families' interests. The wealth-building potential of homeownership has historically provided economic mobility for working-class families, particularly through home equity extraction for education, business investment, or retirement. By limiting this appreciation, CLTs may trap families in neighborhoods they wish to leave, denying them the very economic benefits that make homeownership desirable. Additionally, resale restrictions can complicate obtaining mortgages, as lenders face uncertainty about future collateral value, potentially forcing CLT homeowners to accept less favorable loan terms than conventional buyers.`,
    questionStem: "According to the passage, advocates of community land trusts claim that this model differs from traditional affordable housing programs in that CLTs",
    answerChoices: [
      { letter: "A", text: "require larger upfront capital investments to acquire land for development" },
      { letter: "B", text: "allow homeowners to build equity through restricted appreciation while maintaining affordability for future buyers" },
      { letter: "C", text: "eliminate the need for community engagement processes during development" },
      { letter: "D", text: "provide faster production of affordable units than conventional subsidized housing" },
      { letter: "E", text: "concentrate in areas with strong nonprofit sectors rather than in low-income neighborhoods" }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph states that advocates emphasize how 'CLTs thread this needle by allowing homeowners to build some equity through restricted appreciation formulas...while ensuring homes remain affordable across generations,' contrasting this with traditional programs that 'must choose between enabling wealth building for individual families through market-rate appreciation or maintaining community affordability.' Option B accurately captures this claimed advantage. Options A, C, and D contradict the passage, while E describes CLT locations rather than a claimed advantage.",
    difficulty: "easy",
    passageId: "rc-23-passage-3"
  },
  {
    id: "rc-23-13",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Community land trusts (CLTs) represent an innovative approach to maintaining long-term housing affordability by separating land ownership from building ownership. Under this model, a nonprofit organization holds land in trust for the benefit of a community, leasing it to homeowners through 99-year renewable ground leases while homeowners own the structures. By removing land costs from the purchase price, CLTs make homeownership accessible to moderate-income families who would otherwise be priced out of markets. When CLT homes are resold, restrictions limit appreciation to preserve affordability for subsequent purchasers, creating permanently affordable housing stock without ongoing public subsidy.

Advocates emphasize that CLTs reconcile competing policy objectives that typically exist in tension. Traditional affordable housing programs often must choose between enabling wealth building for individual families through market-rate appreciation or maintaining community affordability through perpetual restrictions. CLTs thread this needle by allowing homeowners to build some equity through restricted appreciation formulas—typically linked to area median income changes rather than market rates—while ensuring homes remain affordable across generations. This balance makes CLTs politically sustainable, as they avoid the perception of providing "free" housing while addressing legitimate concerns about neighborhood affordability.

However, the scalability of the CLT model faces significant obstacles. Establishing CLTs requires substantial upfront capital to acquire land, expertise in complex real estate structures, and sustained organizational capacity to manage ground leases and monitor compliance. Most existing CLTs remain small, serving dozens or hundreds of families rather than thousands, and concentrate in areas with strong nonprofit sectors and progressive political cultures. Replicating this model nationally would require policy changes that prioritize long-term affordability over immediate production numbers, as CLT development proceeds more slowly than conventional subsidized housing due to community engagement processes and complicated financing structures.

Furthermore, critics question whether restricting appreciation truly serves low-income families' interests. The wealth-building potential of homeownership has historically provided economic mobility for working-class families, particularly through home equity extraction for education, business investment, or retirement. By limiting this appreciation, CLTs may trap families in neighborhoods they wish to leave, denying them the very economic benefits that make homeownership desirable. Additionally, resale restrictions can complicate obtaining mortgages, as lenders face uncertainty about future collateral value, potentially forcing CLT homeowners to accept less favorable loan terms than conventional buyers.`,
    questionStem: "Which one of the following can most reasonably be inferred from the passage about mortgage lending for CLT properties?",
    answerChoices: [
      { letter: "A", text: "CLT homeowners always receive more favorable loan terms than conventional buyers because of nonprofit involvement." },
      { letter: "B", text: "Lenders view resale restrictions as introducing uncertainty that may affect the terms they offer CLT buyers." },
      { letter: "C", text: "Mortgage lending for CLT properties is impossible due to the separation of land and building ownership." },
      { letter: "D", text: "Banks refuse to lend to CLT homeowners because the properties lack equity-building potential." },
      { letter: "E", text: "The 99-year ground lease structure eliminates all lending risk for financial institutions." }
    ],
    correctAnswer: "B",
    explanation: "The fourth paragraph states that 'resale restrictions can complicate obtaining mortgages, as lenders face uncertainty about future collateral value, potentially forcing CLT homeowners to accept less favorable loan terms than conventional buyers.' Option B accurately reflects this inference about lender uncertainty and potential impact on terms. The passage doesn't claim favorable terms (A), impossible lending (C), complete refusal (D), or eliminated risk (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-3"
  },
  {
    id: "rc-23-14",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `Community land trusts (CLTs) represent an innovative approach to maintaining long-term housing affordability by separating land ownership from building ownership. Under this model, a nonprofit organization holds land in trust for the benefit of a community, leasing it to homeowners through 99-year renewable ground leases while homeowners own the structures. By removing land costs from the purchase price, CLTs make homeownership accessible to moderate-income families who would otherwise be priced out of markets. When CLT homes are resold, restrictions limit appreciation to preserve affordability for subsequent purchasers, creating permanently affordable housing stock without ongoing public subsidy.

Advocates emphasize that CLTs reconcile competing policy objectives that typically exist in tension. Traditional affordable housing programs often must choose between enabling wealth building for individual families through market-rate appreciation or maintaining community affordability through perpetual restrictions. CLTs thread this needle by allowing homeowners to build some equity through restricted appreciation formulas—typically linked to area median income changes rather than market rates—while ensuring homes remain affordable across generations. This balance makes CLTs politically sustainable, as they avoid the perception of providing "free" housing while addressing legitimate concerns about neighborhood affordability.

However, the scalability of the CLT model faces significant obstacles. Establishing CLTs requires substantial upfront capital to acquire land, expertise in complex real estate structures, and sustained organizational capacity to manage ground leases and monitor compliance. Most existing CLTs remain small, serving dozens or hundreds of families rather than thousands, and concentrate in areas with strong nonprofit sectors and progressive political cultures. Replicating this model nationally would require policy changes that prioritize long-term affordability over immediate production numbers, as CLT development proceeds more slowly than conventional subsidized housing due to community engagement processes and complicated financing structures.

Furthermore, critics question whether restricting appreciation truly serves low-income families' interests. The wealth-building potential of homeownership has historically provided economic mobility for working-class families, particularly through home equity extraction for education, business investment, or retirement. By limiting this appreciation, CLTs may trap families in neighborhoods they wish to leave, denying them the very economic benefits that make homeownership desirable. Additionally, resale restrictions can complicate obtaining mortgages, as lenders face uncertainty about future collateral value, potentially forcing CLT homeowners to accept less favorable loan terms than conventional buyers.`,
    questionStem: "The author's reference to 'home equity extraction for education, business investment, or retirement' in the fourth paragraph serves primarily to",
    answerChoices: [
      { letter: "A", text: "illustrate the various ways that CLT homeowners can benefit from restricted appreciation formulas" },
      { letter: "B", text: "provide examples of how unrestricted appreciation has historically enabled economic mobility" },
      { letter: "C", text: "argue that CLTs should modify their appreciation restrictions to permit these specific uses" },
      { letter: "D", text: "demonstrate that wealth-building potential is irrelevant to low-income families' housing needs" },
      { letter: "E", text: "explain why lenders are uncertain about the future collateral value of CLT properties" }
    ],
    correctAnswer: "B",
    explanation: "The fourth paragraph discusses critics' concerns that restricting appreciation may harm families by denying wealth-building benefits. The examples of equity extraction for education, business, and retirement illustrate these traditional benefits of homeownership that CLT restrictions might limit. Option B correctly identifies this function. The passage doesn't suggest these benefits apply to CLTs (A), argue for policy changes (C), dismiss wealth-building as irrelevant (D), or use these examples to explain lender concerns (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-3"
  },
  {
    id: "rc-23-15",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `Community land trusts (CLTs) represent an innovative approach to maintaining long-term housing affordability by separating land ownership from building ownership. Under this model, a nonprofit organization holds land in trust for the benefit of a community, leasing it to homeowners through 99-year renewable ground leases while homeowners own the structures. By removing land costs from the purchase price, CLTs make homeownership accessible to moderate-income families who would otherwise be priced out of markets. When CLT homes are resold, restrictions limit appreciation to preserve affordability for subsequent purchasers, creating permanently affordable housing stock without ongoing public subsidy.

Advocates emphasize that CLTs reconcile competing policy objectives that typically exist in tension. Traditional affordable housing programs often must choose between enabling wealth building for individual families through market-rate appreciation or maintaining community affordability through perpetual restrictions. CLTs thread this needle by allowing homeowners to build some equity through restricted appreciation formulas—typically linked to area median income changes rather than market rates—while ensuring homes remain affordable across generations. This balance makes CLTs politically sustainable, as they avoid the perception of providing "free" housing while addressing legitimate concerns about neighborhood affordability.

However, the scalability of the CLT model faces significant obstacles. Establishing CLTs requires substantial upfront capital to acquire land, expertise in complex real estate structures, and sustained organizational capacity to manage ground leases and monitor compliance. Most existing CLTs remain small, serving dozens or hundreds of families rather than thousands, and concentrate in areas with strong nonprofit sectors and progressive political cultures. Replicating this model nationally would require policy changes that prioritize long-term affordability over immediate production numbers, as CLT development proceeds more slowly than conventional subsidized housing due to community engagement processes and complicated financing structures.

Furthermore, critics question whether restricting appreciation truly serves low-income families' interests. The wealth-building potential of homeownership has historically provided economic mobility for working-class families, particularly through home equity extraction for education, business investment, or retirement. By limiting this appreciation, CLTs may trap families in neighborhoods they wish to leave, denying them the very economic benefits that make homeownership desirable. Additionally, resale restrictions can complicate obtaining mortgages, as lenders face uncertainty about future collateral value, potentially forcing CLT homeowners to accept less favorable loan terms than conventional buyers.`,
    questionStem: "Based on the passage, the author's attitude toward community land trusts can best be characterized as",
    answerChoices: [
      { letter: "A", text: "enthusiastic support for CLTs as the solution to housing affordability challenges" },
      { letter: "B", text: "complete rejection of the model as fundamentally flawed and harmful to low-income families" },
      { letter: "C", text: "recognition of CLTs' innovative approach balanced by acknowledgment of significant implementation challenges and unresolved questions" },
      { letter: "D", text: "neutral documentation of a housing policy with no evaluation of its merits or limitations" },
      { letter: "E", text: "qualified endorsement suggesting that minor adjustments would make CLTs universally effective" }
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges CLTs as 'innovative' and explains their benefits (first two paragraphs) but then systematically discusses 'significant obstacles' to scalability and substantive criticisms about whether restrictions serve families' interests (last two paragraphs). This balanced presentation recognizing both innovation and serious questions characterizes option C. The author neither enthusiastically supports (A) nor completely rejects (B) CLTs, goes beyond neutral documentation (D), and doesn't suggest minor adjustments would resolve concerns (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-3"
  },

  // Passage 4: Participatory Budgeting
  {
    id: "rc-23-16",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Participatory budgeting (PB), a democratic process through which community members directly decide how to allocate portions of public budgets, has spread from its origins in Porto Alegre, Brazil to hundreds of cities worldwide. Proponents herald PB as a mechanism for deepening democracy by giving ordinary citizens, particularly marginalized populations, direct voice in fiscal decisions traditionally controlled by elected officials and bureaucrats. Through neighborhood assemblies and democratic voting, residents identify priorities, develop proposals, and select projects—ranging from park improvements to street repairs—creating more responsive and equitable resource allocation while building civic capacity and social capital.

Empirical research on PB outcomes presents a more nuanced picture than advocacy literature suggests. Studies from Porto Alegre show that PB did increase spending in poorer neighborhoods and expand infrastructure access for underserved populations. However, replication efforts in diverse contexts reveal highly variable results dependent on local political culture, institutional design, and implementation quality. Many PB processes attract primarily already-engaged citizens—homeowners, older residents, and those with time for evening meetings—rather than the marginalized populations theoretically empowered by direct participation. This participation gap can perpetuate existing inequities as more privileged residents advocate for their neighborhoods' priorities while low-income workers juggling multiple jobs cannot attend lengthy deliberative sessions.

The scope of participatory budgeting also raises questions about its democratic significance. Most PB initiatives allocate only small percentages of municipal budgets—often 1-5%—with restricted eligibility categories excluding major spending areas like personnel costs and debt service. This limitation means PB functions more as a civic education exercise than genuine fiscal control, allowing citizens to allocate discretionary capital funds while maintaining traditional decision-making structures for substantive budget matters. Critics contend this creates democratic theater that channels activist energy into marginal decisions while preserving technocratic control over consequential resource allocations.

Moreover, participatory processes generate their own efficiency costs and political challenges. PB requires significant staff time for community outreach, technical assistance, and project implementation, diverting municipal capacity from other functions. The projects selected through PB may not align with professional planning priorities or achieve economies of scale, potentially reducing the impact achieved per dollar spent. Additionally, elected officials sometimes resist PB, viewing it as encroaching on representative democracy's legitimate prerogatives or fearing that direct participation will generate unsustainable spending demands. Without strong political will to empower communities genuinely, PB can become a superficial consultation exercise that generates cynicism rather than engagement when participants discover their limited actual influence.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Participatory budgeting successfully deepens democracy by giving marginalized populations direct control over public resource allocation." },
      { letter: "B", text: "While participatory budgeting promises to increase democratic participation and equity, its actual impact depends heavily on context and implementation, with significant questions about scope, participation, and efficiency." },
      { letter: "C", text: "Participatory budgeting should be abandoned because it creates inefficiency and diverts resources from professional planning priorities." },
      { letter: "D", text: "The success of participatory budgeting in Porto Alegre demonstrates that this model can be effectively replicated in any municipal context." },
      { letter: "E", text: "Elected officials' resistance represents the primary obstacle preventing participatory budgeting from achieving its democratic potential." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents PB's promises (first paragraph), then examines variable outcomes and participation gaps (second paragraph), scope limitations (third paragraph), and efficiency concerns (fourth paragraph). Option B captures this structure of promise versus context-dependent reality with multiple unresolved questions. Options A and D are too optimistic, C too dismissive, and E focuses on one factor rather than the comprehensive analysis the passage provides.",
    difficulty: "medium",
    passageId: "rc-23-passage-4"
  },
  {
    id: "rc-23-17",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `Participatory budgeting (PB), a democratic process through which community members directly decide how to allocate portions of public budgets, has spread from its origins in Porto Alegre, Brazil to hundreds of cities worldwide. Proponents herald PB as a mechanism for deepening democracy by giving ordinary citizens, particularly marginalized populations, direct voice in fiscal decisions traditionally controlled by elected officials and bureaucrats. Through neighborhood assemblies and democratic voting, residents identify priorities, develop proposals, and select projects—ranging from park improvements to street repairs—creating more responsive and equitable resource allocation while building civic capacity and social capital.

Empirical research on PB outcomes presents a more nuanced picture than advocacy literature suggests. Studies from Porto Alegre show that PB did increase spending in poorer neighborhoods and expand infrastructure access for underserved populations. However, replication efforts in diverse contexts reveal highly variable results dependent on local political culture, institutional design, and implementation quality. Many PB processes attract primarily already-engaged citizens—homeowners, older residents, and those with time for evening meetings—rather than the marginalized populations theoretically empowered by direct participation. This participation gap can perpetuate existing inequities as more privileged residents advocate for their neighborhoods' priorities while low-income workers juggling multiple jobs cannot attend lengthy deliberative sessions.

The scope of participatory budgeting also raises questions about its democratic significance. Most PB initiatives allocate only small percentages of municipal budgets—often 1-5%—with restricted eligibility categories excluding major spending areas like personnel costs and debt service. This limitation means PB functions more as a civic education exercise than genuine fiscal control, allowing citizens to allocate discretionary capital funds while maintaining traditional decision-making structures for substantive budget matters. Critics contend this creates democratic theater that channels activist energy into marginal decisions while preserving technocratic control over consequential resource allocations.

Moreover, participatory processes generate their own efficiency costs and political challenges. PB requires significant staff time for community outreach, technical assistance, and project implementation, diverting municipal capacity from other functions. The projects selected through PB may not align with professional planning priorities or achieve economies of scale, potentially reducing the impact achieved per dollar spent. Additionally, elected officials sometimes resist PB, viewing it as encroaching on representative democracy's legitimate prerogatives or fearing that direct participation will generate unsustainable spending demands. Without strong political will to empower communities genuinely, PB can become a superficial consultation exercise that generates cynicism rather than engagement when participants discover their limited actual influence.`,
    questionStem: "According to the passage, empirical research on participatory budgeting in Porto Alegre showed that PB",
    answerChoices: [
      { letter: "A", text: "primarily attracted already-engaged citizens rather than marginalized populations" },
      { letter: "B", text: "allocated less than 5% of the municipal budget to community-selected projects" },
      { letter: "C", text: "increased spending in poorer neighborhoods and expanded infrastructure access" },
      { letter: "D", text: "generated significant efficiency costs that reduced impact per dollar spent" },
      { letter: "E", text: "created cynicism among participants who discovered their limited influence" }
    ],
    correctAnswer: "C",
    explanation: "The second paragraph explicitly states: 'Studies from Porto Alegre show that PB did increase spending in poorer neighborhoods and expand infrastructure access for underserved populations.' Option C directly reflects this finding. Options A, D, and E describe problems identified in replication efforts or PB generally, not findings from Porto Alegre specifically. Option B discusses typical PB scope but isn't presented as a Porto Alegre research finding.",
    difficulty: "easy",
    passageId: "rc-23-passage-4"
  },
  {
    id: "rc-23-18",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Participatory budgeting (PB), a democratic process through which community members directly decide how to allocate portions of public budgets, has spread from its origins in Porto Alegre, Brazil to hundreds of cities worldwide. Proponents herald PB as a mechanism for deepening democracy by giving ordinary citizens, particularly marginalized populations, direct voice in fiscal decisions traditionally controlled by elected officials and bureaucrats. Through neighborhood assemblies and democratic voting, residents identify priorities, develop proposals, and select projects—ranging from park improvements to street repairs—creating more responsive and equitable resource allocation while building civic capacity and social capital.

Empirical research on PB outcomes presents a more nuanced picture than advocacy literature suggests. Studies from Porto Alegre show that PB did increase spending in poorer neighborhoods and expand infrastructure access for underserved populations. However, replication efforts in diverse contexts reveal highly variable results dependent on local political culture, institutional design, and implementation quality. Many PB processes attract primarily already-engaged citizens—homeowners, older residents, and those with time for evening meetings—rather than the marginalized populations theoretically empowered by direct participation. This participation gap can perpetuate existing inequities as more privileged residents advocate for their neighborhoods' priorities while low-income workers juggling multiple jobs cannot attend lengthy deliberative sessions.

The scope of participatory budgeting also raises questions about its democratic significance. Most PB initiatives allocate only small percentages of municipal budgets—often 1-5%—with restricted eligibility categories excluding major spending areas like personnel costs and debt service. This limitation means PB functions more as a civic education exercise than genuine fiscal control, allowing citizens to allocate discretionary capital funds while maintaining traditional decision-making structures for substantive budget matters. Critics contend this creates democratic theater that channels activist energy into marginal decisions while preserving technocratic control over consequential resource allocations.

Moreover, participatory processes generate their own efficiency costs and political challenges. PB requires significant staff time for community outreach, technical assistance, and project implementation, diverting municipal capacity from other functions. The projects selected through PB may not align with professional planning priorities or achieve economies of scale, potentially reducing the impact achieved per dollar spent. Additionally, elected officials sometimes resist PB, viewing it as encroaching on representative democracy's legitimate prerogatives or fearing that direct participation will generate unsustainable spending demands. Without strong political will to empower communities genuinely, PB can become a superficial consultation exercise that generates cynicism rather than engagement when participants discover their limited actual influence.`,
    questionStem: "The passage most strongly supports which one of the following inferences about the relationship between participatory budgeting and marginalized populations?",
    answerChoices: [
      { letter: "A", text: "Marginalized populations consistently dominate PB processes across all implementation contexts." },
      { letter: "B", text: "The participation gap in PB processes may actually reinforce existing inequities rather than empowering marginalized groups." },
      { letter: "C", text: "Low-income workers prefer not to participate in PB because they find deliberative democracy uninteresting." },
      { letter: "D", text: "Marginalized populations benefit equally from PB regardless of whether they directly participate in the process." },
      { letter: "E", text: "PB was specifically designed to exclude marginalized populations from fiscal decision-making." }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph explains that many PB processes attract already-engaged citizens rather than marginalized populations, and that 'This participation gap can perpetuate existing inequities as more privileged residents advocate for their neighborhoods' priorities while low-income workers juggling multiple jobs cannot attend lengthy deliberative sessions.' Option B accurately captures this inference. The passage contradicts A and E, while C misrepresents the reason for lower participation, and D is not supported by the text.",
    difficulty: "medium",
    passageId: "rc-23-passage-4"
  },
  {
    id: "rc-23-19",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `Participatory budgeting (PB), a democratic process through which community members directly decide how to allocate portions of public budgets, has spread from its origins in Porto Alegre, Brazil to hundreds of cities worldwide. Proponents herald PB as a mechanism for deepening democracy by giving ordinary citizens, particularly marginalized populations, direct voice in fiscal decisions traditionally controlled by elected officials and bureaucrats. Through neighborhood assemblies and democratic voting, residents identify priorities, develop proposals, and select projects—ranging from park improvements to street repairs—creating more responsive and equitable resource allocation while building civic capacity and social capital.

Empirical research on PB outcomes presents a more nuanced picture than advocacy literature suggests. Studies from Porto Alegre show that PB did increase spending in poorer neighborhoods and expand infrastructure access for underserved populations. However, replication efforts in diverse contexts reveal highly variable results dependent on local political culture, institutional design, and implementation quality. Many PB processes attract primarily already-engaged citizens—homeowners, older residents, and those with time for evening meetings—rather than the marginalized populations theoretically empowered by direct participation. This participation gap can perpetuate existing inequities as more privileged residents advocate for their neighborhoods' priorities while low-income workers juggling multiple jobs cannot attend lengthy deliberative sessions.

The scope of participatory budgeting also raises questions about its democratic significance. Most PB initiatives allocate only small percentages of municipal budgets—often 1-5%—with restricted eligibility categories excluding major spending areas like personnel costs and debt service. This limitation means PB functions more as a civic education exercise than genuine fiscal control, allowing citizens to allocate discretionary capital funds while maintaining traditional decision-making structures for substantive budget matters. Critics contend this creates democratic theater that channels activist energy into marginal decisions while preserving technocratic control over consequential resource allocations.

Moreover, participatory processes generate their own efficiency costs and political challenges. PB requires significant staff time for community outreach, technical assistance, and project implementation, diverting municipal capacity from other functions. The projects selected through PB may not align with professional planning priorities or achieve economies of scale, potentially reducing the impact achieved per dollar spent. Additionally, elected officials sometimes resist PB, viewing it as encroaching on representative democracy's legitimate prerogatives or fearing that direct participation will generate unsustainable spending demands. Without strong political will to empower communities genuinely, PB can become a superficial consultation exercise that generates cynicism rather than engagement when participants discover their limited actual influence.`,
    questionStem: "The author's use of the phrase 'democratic theater' in the third paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "praise participatory budgeting for making budget processes more dramatic and engaging for citizens" },
      { letter: "B", text: "characterize critics' view that PB creates an appearance of empowerment without genuine fiscal control" },
      { letter: "C", text: "suggest that PB should incorporate theatrical elements to attract broader participation" },
      { letter: "D", text: "argue that all forms of democratic participation are merely performative rather than substantive" },
      { letter: "E", text: "describe the neighborhood assemblies where citizens present and debate project proposals" }
    ],
    correctAnswer: "B",
    explanation: "The phrase 'democratic theater' appears in the context of critics' arguments about PB's limited scope. The passage states critics 'contend this creates democratic theater that channels activist energy into marginal decisions while preserving technocratic control over consequential resource allocations.' This clearly represents a criticism that PB appears democratic but lacks real power (option B). The phrase is not praise (A), a suggestion for improvement (C), a general claim about all democracy (D), or a description of assemblies (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-4"
  },
  {
    id: "rc-23-20",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `Participatory budgeting (PB), a democratic process through which community members directly decide how to allocate portions of public budgets, has spread from its origins in Porto Alegre, Brazil to hundreds of cities worldwide. Proponents herald PB as a mechanism for deepening democracy by giving ordinary citizens, particularly marginalized populations, direct voice in fiscal decisions traditionally controlled by elected officials and bureaucrats. Through neighborhood assemblies and democratic voting, residents identify priorities, develop proposals, and select projects—ranging from park improvements to street repairs—creating more responsive and equitable resource allocation while building civic capacity and social capital.

Empirical research on PB outcomes presents a more nuanced picture than advocacy literature suggests. Studies from Porto Alegre show that PB did increase spending in poorer neighborhoods and expand infrastructure access for underserved populations. However, replication efforts in diverse contexts reveal highly variable results dependent on local political culture, institutional design, and implementation quality. Many PB processes attract primarily already-engaged citizens—homeowners, older residents, and those with time for evening meetings—rather than the marginalized populations theoretically empowered by direct participation. This participation gap can perpetuate existing inequities as more privileged residents advocate for their neighborhoods' priorities while low-income workers juggling multiple jobs cannot attend lengthy deliberative sessions.

The scope of participatory budgeting also raises questions about its democratic significance. Most PB initiatives allocate only small percentages of municipal budgets—often 1-5%—with restricted eligibility categories excluding major spending areas like personnel costs and debt service. This limitation means PB functions more as a civic education exercise than genuine fiscal control, allowing citizens to allocate discretionary capital funds while maintaining traditional decision-making structures for substantive budget matters. Critics contend this creates democratic theater that channels activist energy into marginal decisions while preserving technocratic control over consequential resource allocations.

Moreover, participatory processes generate their own efficiency costs and political challenges. PB requires significant staff time for community outreach, technical assistance, and project implementation, diverting municipal capacity from other functions. The projects selected through PB may not align with professional planning priorities or achieve economies of scale, potentially reducing the impact achieved per dollar spent. Additionally, elected officials sometimes resist PB, viewing it as encroaching on representative democracy's legitimate prerogatives or fearing that direct participation will generate unsustainable spending demands. Without strong political will to empower communities genuinely, PB can become a superficial consultation exercise that generates cynicism rather than engagement when participants discover their limited actual influence.`,
    questionStem: "Which one of the following best describes the author's attitude toward participatory budgeting?",
    answerChoices: [
      { letter: "A", text: "Unqualified enthusiasm for PB as a mechanism for deepening democracy and empowering citizens" },
      { letter: "B", text: "Absolute rejection of PB as inefficient democratic theater with no legitimate value" },
      { letter: "C", text: "Critical analysis that acknowledges PB's potential while identifying significant implementation challenges and limitations" },
      { letter: "D", text: "Ambivalence about whether PB represents a genuine innovation or merely replicates existing power structures" },
      { letter: "E", text: "Strong advocacy for expanding PB to encompass entire municipal budgets rather than small percentages" }
    ],
    correctAnswer: "C",
    explanation: "The passage presents PB's theoretical benefits (first paragraph), then systematically examines empirical evidence showing variable results, participation gaps, scope limitations, and efficiency concerns. The author notes that outcomes are 'highly variable' and 'dependent on local political culture, institutional design, and implementation quality,' acknowledging potential while identifying substantial challenges. Option C accurately captures this critical but not dismissive stance. The author neither shows unqualified enthusiasm (A) nor absolute rejection (B), and doesn't express ambivalence (D) or advocate for expansion (E).",
    difficulty: "medium",
    passageId: "rc-23-passage-4"
  }
];
