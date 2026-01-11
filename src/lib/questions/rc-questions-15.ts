// Reading Comprehension Questions - Set 15 (Environmental Science & Policy)
import { Question } from "../lsat-types";

// Passage 1: Carbon Pricing Mechanisms
const passage1 = `Carbon pricing—assigning costs to greenhouse gas emissions through taxes or cap-and-trade systems—represents a cornerstone policy prescription for addressing climate change among economists, yet political implementation has proven contentious and uneven. The economic logic favoring carbon pricing is straightforward: by internalizing the external costs of emissions, price signals incentivize emission reductions wherever they are least expensive, theoretically achieving climate goals at lower overall cost than regulatory mandates. However, this elegant theoretical case confronts practical challenges involving distributional effects, political feasibility, and questions about whether market mechanisms alone can drive the rapid transformation necessary.

Carbon taxes directly price emissions, typically levied per ton of carbon dioxide emitted. Proponents emphasize their transparency, administrative simplicity, and provision of stable price signals that facilitate long-term planning and investment. When British Columbia implemented a carbon tax in 2008, revenue-neutral design—returning all revenue through tax cuts—helped maintain political support. Studies suggest the tax contributed to emission reductions without harming economic growth, though disentangling policy effects from other factors remains challenging.

Cap-and-trade systems set aggregate emission limits and create tradable permits for emissions. Governments auction or allocate permits, and entities that reduce emissions below their permit levels can sell surplus allowances to those finding reductions more costly. The European Union's Emissions Trading System represents the largest implementation, covering roughly 40 percent of EU emissions. Theoretically, cap-and-trade guarantees a specific emission trajectory (because the cap is fixed) while allowing the price of emissions to vary based on abatement costs.

However, both mechanisms face significant challenges. Distributional concerns arise because carbon pricing increases energy costs, disproportionately affecting low-income households that spend larger shares of income on energy. Without compensatory measures, carbon pricing can exacerbate inequality even while addressing climate change. Industrial competitiveness concerns emerge in the absence of internationally coordinated pricing: domestic firms facing carbon costs may lose market share to foreign competitors in jurisdictions without carbon pricing, potentially causing "carbon leakage" where emissions simply relocate rather than decline.

Political obstacles have proven formidable. Carbon pricing imposes visible concentrated costs on specific industries and regions dependent on fossil fuels, while benefits—avoided climate damages—are diffuse, delayed, and often invisible to voters. This asymmetry facilitates organized opposition from affected industries while diffusing support. Australia's carbon pricing scheme, implemented in 2012, was repealed just two years later amid political backlash. France's attempt to raise fuel taxes in 2018 triggered widespread protests. These episodes suggest that economic efficiency alone does not guarantee political sustainability.

Moreover, some critics question whether pricing mechanisms can drive change at the pace required. Historical price elasticities suggest that moderate carbon prices induce only modest emission reductions, as many energy uses have limited short-term substitution possibilities. Transformative technological change—shifting entire energy systems toward renewables, developing carbon capture, redesigning transportation infrastructure—may require complementary policies including direct investment in research and development, technology-specific subsidies, regulatory standards, and public infrastructure. Carbon pricing may be necessary but insufficient.

Hybrid approaches attempting to combine virtues of different instruments have emerged. Carbon taxes with revenue recycling through dividend payments—giving everyone equal per-capita payments funded by carbon tax revenue—address equity concerns while maintaining efficiency. Cap-and-trade systems with price floors and ceilings can provide greater certainty about both emission trajectories and price bounds. Sector-specific regulations can address market failures that carbon pricing alone does not resolve. The question may not be whether to implement carbon pricing but how to design comprehensive policy packages where pricing mechanisms complement rather than substitute for other interventions necessary to achieve deep decarbonization.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set15-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Carbon pricing is theoretically elegant but faces practical challenges regarding distribution, politics, and whether pricing alone can drive necessary transformation" },
      { letter: "B", text: "Carbon taxes are always superior to cap-and-trade systems in all circumstances" },
      { letter: "C", text: "Market mechanisms have no role in addressing climate change" },
      { letter: "D", text: "Carbon pricing has been universally successful wherever implemented" },
      { letter: "E", text: "Economists universally oppose carbon pricing mechanisms" },
    ],
    correctAnswer: "A",
    explanation: "The passage presents carbon pricing's economic logic then explores 'practical challenges involving distributional effects, political feasibility, and questions about whether market mechanisms alone can drive the rapid transformation necessary.'",
    difficulty: "medium",
    passageId: "rc15-p1",
  },
  {
    id: "rc-set15-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses British Columbia's carbon tax primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that carbon taxes never work" },
      { letter: "B", text: "provide an example where revenue-neutral design helped maintain political support and may have contributed to emission reductions" },
      { letter: "C", text: "argue that all regions have identical political contexts" },
      { letter: "D", text: "demonstrate that economic growth is impossible with carbon pricing" },
      { letter: "E", text: "show that carbon taxes require no careful design" },
    ],
    correctAnswer: "B",
    explanation: "British Columbia is presented as an example where 'revenue-neutral design...helped maintain political support' and where 'studies suggest the tax contributed to emission reductions without harming economic growth.'",
    difficulty: "easy",
    passageId: "rc15-p1",
  },
  {
    id: "rc-set15-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the main theoretical advantage of cap-and-trade systems is that they",
    answerChoices: [
      { letter: "A", text: "eliminate all emissions immediately" },
      { letter: "B", text: "guarantee a specific emission trajectory while allowing price flexibility based on abatement costs" },
      { letter: "C", text: "provide no certainty about emission levels" },
      { letter: "D", text: "make all energy free for consumers" },
      { letter: "E", text: "eliminate the need for permits entirely" },
    ],
    correctAnswer: "B",
    explanation: "The passage states cap-and-trade 'theoretically...guarantees a specific emission trajectory (because the cap is fixed) while allowing the price of emissions to vary based on abatement costs.'",
    difficulty: "medium",
    passageId: "rc15-p1",
  },
  {
    id: "rc-set15-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, distributional concerns about carbon pricing arise because",
    answerChoices: [
      { letter: "A", text: "it has no effect on energy costs" },
      { letter: "B", text: "wealthy households spend larger shares of income on energy" },
      { letter: "C", text: "it increases energy costs, disproportionately affecting low-income households" },
      { letter: "D", text: "it always reduces inequality automatically" },
      { letter: "E", text: "no compensatory measures are ever possible" },
    ],
    correctAnswer: "C",
    explanation: "The passage states 'carbon pricing increases energy costs, disproportionately affecting low-income households that spend larger shares of income on energy.'",
    difficulty: "easy",
    passageId: "rc15-p1",
  },
  {
    id: "rc-set15-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that critics questioning pricing mechanisms' adequacy believe that",
    answerChoices: [
      { letter: "A", text: "no policy interventions can address climate change" },
      { letter: "B", text: "pricing alone may be insufficient and transformative change may require complementary policies" },
      { letter: "C", text: "carbon pricing always drives immediate complete decarbonization" },
      { letter: "D", text: "technological change requires no policy support" },
      { letter: "E", text: "moderate prices induce massive emission reductions" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes critics 'question whether pricing mechanisms can drive change at the pace required' and suggests 'transformative technological change...may require complementary policies'—pricing 'may be necessary but insufficient.'",
    difficulty: "hard",
    passageId: "rc15-p1",
  },
];

// Passage 2: Biodiversity Conservation Strategies
const passage2 = `Contemporary biodiversity conservation operates through two primary paradigms: preservation, which aims to protect ecosystems from human interference, and sustainable use, which seeks to reconcile conservation with human livelihood needs. While these approaches are sometimes portrayed as competing philosophies, effective conservation increasingly requires integrating both strategies while acknowledging their limitations. Moreover, the emerging framework of ecosystem services—valuing nature based on benefits it provides to humans—promises to mobilize support for conservation but raises concerns about reducing nature's value to instrumental terms.

The preservation model, exemplified by national parks and wilderness areas, aims to protect biodiversity by excluding or strictly limiting human activity in designated spaces. This approach rests on the premise that biodiversity thrives best without human interference, particularly in regions where human impacts have been devastating. The establishment of Yellowstone as the world's first national park in 1872 inaugurated a model that has spread globally, with protected areas now covering roughly 15 percent of terrestrial surface and 7 percent of oceans. These areas have undoubtedly preserved species and ecosystems that would otherwise have been destroyed.

However, preservation faces significant challenges. The creation of protected areas has often displaced indigenous and local communities who had inhabited these regions for generations, sometimes sustainably managing resources for centuries. These "fortress conservation" approaches have generated conflicts and undermined conservation goals by alienating communities whose cooperation is essential for effective protection. Moreover, protected areas function as islands within human-dominated landscapes; species with large ranges, migratory behaviors, or dispersal needs cannot be conserved within park boundaries alone. Climate change exacerbates this problem as species' suitable habitats shift geographically, potentially moving outside protected areas.

The sustainable use paradigm attempts to address these limitations by integrating conservation with local livelihoods. Community-based conservation programs grant local communities rights to manage and benefit from wildlife and natural resources, theoretically incentivizing conservation through economic returns. When Namibian communities gained rights to wildlife tourism revenues, poaching declined substantially as community members recognized economic value in protecting rather than exploiting wildlife. Similarly, certified sustainable forestry and fishery programs aim to reconcile resource extraction with long-term ecosystem maintenance.

Yet sustainable use raises questions about whether economic incentives sufficiently protect biodiversity. Species or ecosystems lacking obvious economic value may be neglected. Short-term economic pressures can override long-term conservation considerations. And sustainable extraction levels are notoriously difficult to determine and enforce; numerous fisheries certified as sustainable have subsequently collapsed. There is an inherent tension between maximizing immediate human benefits and maintaining ecosystem integrity across long timeframes.

The ecosystem services framework attempts to strengthen conservation arguments by quantifying nature's contributions to human wellbeing—pollination, water filtration, climate regulation, recreational opportunities, and so forth. By demonstrating economic value of intact ecosystems, this approach aims to justify conservation in cost-benefit terms that resonate with policymakers and development planners. Studies valuing ecosystem services have influenced decisions to protect watersheds, restore wetlands, and maintain forests.

However, critics worry that framing conservation entirely through human utility risks several problems. It implicitly denies that nature possesses intrinsic value beyond human use. It may neglect species and ecosystems that provide few obvious services. And it reduces complex ecological relationships to monetized values, potentially making conservation contingent on economic calculations that could shift. When economic development offers higher returns than ecosystem service values, conservation loses on its own instrumental terms.

Perhaps the most promising direction recognizes that no single approach suffices for biodiversity conservation across all contexts. Large-scale protection remains crucial for preserving intact ecosystems and enabling natural processes to operate without human domination. Community-based approaches are essential where people depend on natural resources and local engagement determines conservation success. Ecosystem service valuation can mobilize support and resources while complementing rather than replacing other justifications for conservation. The challenge lies in developing context-appropriate strategies that combine protection, sustainable use, and multiple value frameworks—economic, cultural, ethical, and ecological—to address the multifaceted biodiversity crisis.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set15-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central claim of the passage?",
    answerChoices: [
      { letter: "A", text: "Preservation is always superior to sustainable use in all circumstances" },
      { letter: "B", text: "Biodiversity conservation requires integrating preservation and sustainable use approaches while recognizing their limitations" },
      { letter: "C", text: "Economic valuation alone provides sufficient basis for all conservation decisions" },
      { letter: "D", text: "Protected areas have completely failed to preserve any biodiversity" },
      { letter: "E", text: "Local communities should never be involved in conservation efforts" },
    ],
    correctAnswer: "B",
    explanation: "The passage argues that 'effective conservation increasingly requires integrating both strategies while acknowledging their limitations' and concludes that 'no single approach suffices for biodiversity conservation across all contexts.'",
    difficulty: "medium",
    passageId: "rc15-p2",
  },
  {
    id: "rc-set15-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses Namibian communities gaining wildlife tourism rights primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that economic incentives never work" },
      { letter: "B", text: "illustrate how sustainable use approaches can incentivize conservation through economic returns to local communities" },
      { letter: "C", text: "argue that all wildlife should be exploited commercially" },
      { letter: "D", text: "demonstrate that community-based conservation always fails" },
      { letter: "E", text: "show that poaching always increases with community involvement" },
    ],
    correctAnswer: "B",
    explanation: "The Namibia example illustrates sustainable use paradigm where 'community members recognized economic value in protecting rather than exploiting wildlife,' showing how economic incentives can support conservation.",
    difficulty: "easy",
    passageId: "rc15-p2",
  },
  {
    id: "rc-set15-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, 'fortress conservation' approaches have",
    answerChoices: [
      { letter: "A", text: "always succeeded without any negative consequences" },
      { letter: "B", text: "generated conflicts by displacing communities and potentially undermining conservation goals" },
      { letter: "C", text: "required no cooperation from local populations" },
      { letter: "D", text: "proven that human exclusion is always optimal" },
      { letter: "E", text: "eliminated all conservation challenges" },
    ],
    correctAnswer: "B",
    explanation: "The passage states fortress conservation 'have generated conflicts and undermined conservation goals by alienating communities whose cooperation is essential for effective protection.'",
    difficulty: "medium",
    passageId: "rc15-p2",
  },
  {
    id: "rc-set15-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, protected areas currently cover approximately what percentage of terrestrial surface?",
    answerChoices: [
      { letter: "A", text: "50 percent" },
      { letter: "B", text: "7 percent" },
      { letter: "C", text: "15 percent" },
      { letter: "D", text: "100 percent" },
      { letter: "E", text: "1 percent" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states 'protected areas now covering roughly 15 percent of terrestrial surface and 7 percent of oceans.'",
    difficulty: "easy",
    passageId: "rc15-p2",
  },
  {
    id: "rc-set15-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that critics of the ecosystem services framework are concerned that it",
    answerChoices: [
      { letter: "A", text: "provides no economic justification for conservation" },
      { letter: "B", text: "acknowledges nature's intrinsic value too strongly" },
      { letter: "C", text: "may reduce nature's value to instrumental terms and make conservation contingent on shifting economic calculations" },
      { letter: "D", text: "never influences any policy decisions" },
      { letter: "E", text: "eliminates all economic considerations from conservation" },
    ],
    correctAnswer: "C",
    explanation: "Critics worry it 'reduces complex ecological relationships to monetized values, potentially making conservation contingent on economic calculations that could shift' and 'implicitly denies that nature possesses intrinsic value beyond human use.'",
    difficulty: "hard",
    passageId: "rc15-p2",
  },
];

// Passage 3: Water Scarcity and Allocation
const passage3 = `Water scarcity represents one of the defining environmental challenges of the twenty-first century, yet the problem is as much institutional and political as physical. While freshwater availability varies dramatically by region and season, scarcity often results less from absolute shortages than from institutional failures to allocate water efficiently, equitably, and sustainably. Understanding these institutional dimensions is essential because technological solutions like desalination and water recycling, while potentially valuable, cannot by themselves resolve allocation conflicts or ensure that water systems serve environmental and social needs alongside economic demands.

Water exhibits characteristics that complicate governance. It is essential for life, making access a fundamental human need and, many argue, a human right. It is also an economic input for agriculture, industry, and energy production. Water flows across boundaries—geographic, jurisdictional, and temporal—connecting upstream and downstream users, present and future generations, human and ecological needs. These characteristics mean that water allocation inherently involves competing claims and values that markets alone cannot resolve without creating injustices or environmental damage.

Historically dominant approaches to water management emphasized supply augmentation: building dams, reservoirs, and conveyance systems to capture and deliver water where demand existed. This hydraulic mission succeeded in enabling agricultural expansion and urban growth but often at enormous environmental costs—drained wetlands, depleted aquifers, disrupted river flows, and species extinctions. Moreover, supply-focused strategies can create moral hazard: guaranteed water supply at subsidized prices encourages wasteful consumption, ultimately requiring even more supply expansion in an escalating cycle.

Integrated water resources management (IWRM) emerged as an alternative paradigm emphasizing demand management, efficiency, stakeholder participation, and ecosystem considerations alongside supply. Rather than endlessly expanding supply to meet demand, IWRM advocates adjusting demand to available supply through conservation, efficiency improvements, pricing reform, and reallocation from lower to higher-value uses. In principle, this approach recognizes water's multiple values and the need to balance competing demands within sustainable limits.

However, implementing IWRM faces substantial obstacles. Existing water rights and allocation systems often favor established users—particularly agriculture, which accounts for roughly 70 percent of global freshwater withdrawals but frequently pays far below cost. Reallocating water from agriculture to cities or ecosystems threatens powerful interests and can devastate rural communities economically dependent on irrigation. Water pricing sufficient to encourage conservation may burden low-income households, raising equity concerns. And participatory decision-making processes can be captured by well-organized interest groups while marginalizing diffuse interests like environmental protection or future generations.

The prior appropriation doctrine governing water rights in much of the western United States exemplifies these tensions. Under "first in time, first in right" principles, those who initially diverted water retain priority claims regardless of changing circumstances or alternative uses' relative values. Senior rights holders may use water inefficiently while junior users or ecosystems face shortages. The "use it or lose it" provision, intended to prevent speculation, actually discourages conservation: conserving water risks forfeiting rights that might be needed in future dry years. Reforming such systems encounters fierce resistance from rights holders who view their entitlements as property rights deserving protection.

Alternative governance mechanisms have emerged in some contexts. Water markets, where rights can be bought and sold, theoretically enable reallocation to higher-value uses while compensating previous users. Australia's Murray-Darling Basin implemented tradable water allocations, though outcomes remain contested—some studies suggest improved efficiency while critics note environmental harms and wealth concentration among buyers. Water banks and trusts can facilitate temporary transfers while maintaining long-term security. Public trust doctrines, recognizing government's obligation to protect resources for public benefit, have been invoked to limit private water rights when environmental or community interests are threatened.

Ultimately, addressing water scarcity requires recognizing that technical and institutional solutions must complement each other. Efficiency improvements and alternative supplies can relieve some pressures, but without governance reforms to manage demand, protect ecosystems, and ensure equitable access, technological fixes merely postpone rather than resolve conflicts. Conversely, institutional reforms alone cannot conjure water where none exists. The challenge involves crafting context-appropriate governance arrangements that balance multiple objectives—efficiency, equity, sustainability, and adaptability to changing conditions—while acknowledging that trade-offs among these goals are often unavoidable.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set15-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Water scarcity is purely a physical problem requiring only technological solutions" },
      { letter: "B", text: "Water scarcity is primarily an institutional and political challenge requiring governance reforms alongside technical solutions" },
      { letter: "C", text: "All water allocation systems function perfectly efficiently" },
      { letter: "D", text: "Technological solutions have no role in addressing water scarcity" },
      { letter: "E", text: "Water markets always produce optimal outcomes without any problems" },
    ],
    correctAnswer: "B",
    explanation: "The passage argues water scarcity 'is as much institutional and political as physical' and concludes that 'technical and institutional solutions must complement each other,' with neither sufficient alone.",
    difficulty: "medium",
    passageId: "rc15-p3",
  },
  {
    id: "rc-set15-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses historical supply augmentation approaches primarily in order to",
    answerChoices: [
      { letter: "A", text: "advocate universal adoption of dam building" },
      { letter: "B", text: "explain earlier strategies that enabled growth but created environmental costs and moral hazard" },
      { letter: "C", text: "prove that infrastructure is never necessary" },
      { letter: "D", text: "demonstrate that supply expansion has no environmental impacts" },
      { letter: "E", text: "argue that demand management is impossible" },
    ],
    correctAnswer: "B",
    explanation: "Supply augmentation is presented as succeeding in 'enabling agricultural expansion and urban growth but often at enormous environmental costs' and creating 'moral hazard' by encouraging wasteful consumption.",
    difficulty: "easy",
    passageId: "rc15-p3",
  },
  {
    id: "rc-set15-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the 'use it or lose it' provision in prior appropriation doctrine",
    answerChoices: [
      { letter: "A", text: "effectively encourages water conservation" },
      { letter: "B", text: "was intended to prevent speculation but actually discourages conservation" },
      { letter: "C", text: "has no effect on water use behavior" },
      { letter: "D", text: "guarantees optimal water allocation in all cases" },
      { letter: "E", text: "always benefits ecosystem needs" },
    ],
    correctAnswer: "B",
    explanation: "The passage states the provision was 'intended to prevent speculation' but 'actually discourages conservation: conserving water risks forfeiting rights that might be needed in future dry years.'",
    difficulty: "medium",
    passageId: "rc15-p3",
  },
  {
    id: "rc-set15-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, agriculture accounts for approximately what percentage of global freshwater withdrawals?",
    answerChoices: [
      { letter: "A", text: "10 percent" },
      { letter: "B", text: "30 percent" },
      { letter: "C", text: "50 percent" },
      { letter: "D", text: "70 percent" },
      { letter: "E", text: "90 percent" },
    ],
    correctAnswer: "D",
    explanation: "The passage explicitly states that 'agriculture...accounts for roughly 70 percent of global freshwater withdrawals.'",
    difficulty: "easy",
    passageId: "rc15-p3",
  },
  {
    id: "rc-set15-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the challenge in addressing water scarcity involves",
    answerChoices: [
      { letter: "A", text: "choosing between technical or institutional solutions, but never both" },
      { letter: "B", text: "eliminating all trade-offs between efficiency, equity, and sustainability" },
      { letter: "C", text: "crafting governance arrangements that balance multiple objectives while acknowledging unavoidable trade-offs" },
      { letter: "D", text: "ignoring equity and focusing exclusively on efficiency" },
      { letter: "E", text: "abandoning all governance reforms in favor of markets alone" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes the challenge 'involves crafting context-appropriate governance arrangements that balance multiple objectives—efficiency, equity, sustainability, and adaptability—while acknowledging that trade-offs among these goals are often unavoidable.'",
    difficulty: "hard",
    passageId: "rc15-p3",
  },
];

// Passage 4: Renewable Energy Transition Challenges
const passage4 = `The transition from fossil fuels to renewable energy sources represents a technological, economic, and political transformation of unprecedented scope. While renewable costs have declined dramatically—solar photovoltaic costs have fallen roughly 90 percent since 2010—and deployment has accelerated, achieving the rapid, complete decarbonization necessary to limit climate change faces challenges that technology alone cannot resolve. These challenges involve the intermittent nature of renewable generation, the inertia of existing energy systems, distributional consequences of transition, and fundamental questions about how quickly complex sociotechnical systems can change.

The intermittency problem poses the most frequently cited technical challenge. Solar generation occurs only during daylight hours and varies with cloud cover; wind generation fluctuates with wind speeds. Unlike fossil fuel plants that can generate on demand, renewable sources produce electricity when nature provides the input rather than when demand requires it. This variability creates integration challenges for electrical grids designed around controllable generation sources. As renewable penetration increases, managing grid stability becomes more complex and costly, requiring either substantial energy storage, long-distance transmission to balance supply across regions, or maintaining backup capacity.

Energy storage technologies, particularly batteries, have improved dramatically but still face cost and scale limitations. While lithium-ion batteries are increasingly viable for short-duration storage (hours), seasonal storage—capturing summer solar abundance for winter heating needs, for instance—requires technologies that remain expensive and underdeveloped. Pumped hydroelectric storage offers large-scale capabilities but depends on specific geographic features and can have significant environmental impacts. The sheer quantity of storage needed for fully renewable grids exceeds current manufacturing capacity by orders of magnitude.

However, the technological framing of intermittency can obscure potential solutions involving demand flexibility. Rather than maintaining constant supply to meet inflexible demand, future energy systems might increasingly adjust demand to match variable supply. Industrial processes could operate when renewable generation is abundant and cheap; electric vehicle charging could occur during high-generation periods; building heating and cooling could shift to pre-cool or pre-heat when excess generation exists. This demand-side management requires sophisticated controls, appropriate pricing signals, and willingness to accept some flexibility in energy service timing, but it could substantially reduce storage needs.

The political economy of energy transition presents challenges at least as significant as technical ones. Existing energy systems represent trillions of dollars in infrastructure—power plants, pipelines, refineries, distribution networks—much of it recently constructed with expected lifespans of decades. Rapid transition implies stranding these assets, imposing enormous losses on investors, utilities, and governments that own or depend on revenue from fossil fuel infrastructure. These actors wield substantial political influence to protect their interests, slowing transition even where renewable alternatives are economically competitive.

Distributional effects complicate transition politics further. Fossil fuel extraction and power generation provide employment in specific regions where alternative industries may not exist. Workers and communities face economic devastation if transitions proceed without adequate support for workforce retraining, economic diversification, and compensation for losses. The "just transition" framework emphasizes that climate policy must address these distributional consequences, but funding mechanisms remain contested and often inadequate. When transition costs are visible and concentrated while benefits are diffuse and delayed, political obstacles multiply.

International dimensions add complexity. Effective climate action requires global cooperation, yet countries differ dramatically in capabilities, responsibilities, and interests. Wealthy nations bear historical responsibility for most cumulative emissions and possess resources to finance transition, while developing nations face more pressing immediate development needs and argue for right to development paths historically taken by now-developed countries. International climate agreements attempt to navigate these tensions through differentiated responsibilities and financial support mechanisms, but actual resource flows remain far below amounts needed to enable rapid global transition.

The pace of change presents perhaps the deepest challenge. Energy systems are extraordinarily complex sociotechnical configurations involving physical infrastructure, institutional arrangements, cultural practices, and path-dependent development trajectories. Historical energy transitions—from wood to coal, coal to oil—typically unfolded over many decades, driven by superior energy returns and new capabilities rather than deliberate policy to replace functioning systems. The renewable transition must occur faster than any previous energy transformation, requires abandoning systems that still function, and depends on sustained political commitment despite opposition. Whether societies can deliberately reorganize fundamental systems at the required pace remains uncertain, though the alternative—unmitigated climate change—makes the attempt imperative.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set15-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that renewable energy transition is impossible and should be abandoned" },
      { letter: "B", text: "demonstrate that technical challenges alone determine the pace of energy transition" },
      { letter: "C", text: "examine how renewable energy transition faces technical, economic, and political challenges beyond technology alone" },
      { letter: "D", text: "prove that fossil fuels are superior to renewable energy" },
      { letter: "E", text: "show that energy transitions require no policy support" },
    ],
    correctAnswer: "C",
    explanation: "The passage argues that achieving rapid decarbonization 'faces challenges that technology alone cannot resolve,' then systematically examines technical (intermittency), economic (stranded assets), political (distributional effects), and systemic (pace of change) challenges.",
    difficulty: "medium",
    passageId: "rc15-p4",
  },
  {
    id: "rc-set15-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses demand-side management primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that energy storage is completely unnecessary" },
      { letter: "B", text: "present an alternative approach to intermittency that adjusts demand to match variable supply" },
      { letter: "C", text: "argue that industrial processes should never operate" },
      { letter: "D", text: "demonstrate that demand flexibility is impossible" },
      { letter: "E", text: "show that technological framing always provides complete solutions" },
    ],
    correctAnswer: "B",
    explanation: "Demand-side management is presented as showing how 'the technological framing of intermittency can obscure potential solutions' by 'adjust[ing] demand to match variable supply' rather than maintaining inflexible demand.",
    difficulty: "easy",
    passageId: "rc15-p4",
  },
  {
    id: "rc-set15-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the concept of 'stranded assets' refers to",
    answerChoices: [
      { letter: "A", text: "renewable energy infrastructure that fails to function" },
      { letter: "B", text: "fossil fuel infrastructure that becomes obsolete before expected end of lifespan due to rapid transition" },
      { letter: "C", text: "storage technologies that work perfectly" },
      { letter: "D", text: "renewable energy that costs nothing" },
      { letter: "E", text: "infrastructure that has no economic value at any time" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that 'rapid transition implies stranding these assets, imposing enormous losses on investors' regarding fossil fuel infrastructure with 'expected lifespans of decades' that would become obsolete.",
    difficulty: "medium",
    passageId: "rc15-p4",
  },
  {
    id: "rc-set15-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, solar photovoltaic costs since 2010 have",
    answerChoices: [
      { letter: "A", text: "increased by 90 percent" },
      { letter: "B", text: "remained completely unchanged" },
      { letter: "C", text: "fallen by roughly 90 percent" },
      { letter: "D", text: "fallen by 10 percent" },
      { letter: "E", text: "become infinitely expensive" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'solar photovoltaic costs have fallen roughly 90 percent since 2010.'",
    difficulty: "easy",
    passageId: "rc15-p4",
  },
  {
    id: "rc-set15-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward whether societies can achieve rapid renewable transition can best be characterized as",
    answerChoices: [
      { letter: "A", text: "complete certainty that success is guaranteed" },
      { letter: "B", text: "dismissive belief that transition is impossible" },
      { letter: "C", text: "recognition that the pace required is uncertain but the attempt is imperative given climate risks" },
      { letter: "D", text: "indifference to the outcome" },
      { letter: "E", text: "enthusiasm that no challenges exist" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes 'whether societies can deliberately reorganize fundamental systems at the required pace remains uncertain, though the alternative—unmitigated climate change—makes the attempt imperative.'",
    difficulty: "hard",
    passageId: "rc15-p4",
  },
];

export const rcQuestionsSet15: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
