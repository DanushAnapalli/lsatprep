// Reading Comprehension Expansion Set 25
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - COMMERCE CLAUSE AND FEDERAL REGULATION
// ============================================

const passage1 = `The Commerce Clause of the United States Constitution grants Congress the power "to regulate Commerce with foreign Nations, and among the several States, and with Indian Tribes." This seemingly straightforward provision has generated centuries of controversy over the proper scope of federal regulatory authority. The clause has been interpreted both expansively, as authorizing comprehensive federal regulation of the national economy, and narrowly, as limiting federal power to direct regulation of interstate commercial transactions.

During the New Deal era, the Supreme Court initially struck down major federal legislation as exceeding Congress's commerce power. In Schechter Poultry Corp. v. United States (1935), the Court invalidated provisions of the National Industrial Recovery Act, holding that the regulated activities had only indirect effects on interstate commerce. However, following President Roosevelt's court-packing threat and shifting Court membership, the justices dramatically expanded their interpretation of the Commerce Clause. In NLRB v. Jones & Laughlin Steel Corp. (1937), the Court upheld the National Labor Relations Act, reasoning that labor disputes in major manufacturing enterprises substantially affected interstate commerce even if the immediate activities were local.

The expansive reading of federal commerce power reached its apex in Wickard v. Filburn (1942), where the Court upheld federal wheat production quotas as applied to a farmer growing wheat primarily for home consumption. The Court reasoned that if many farmers similarly exceeded their quotas, the aggregate effect would substantially impact the national wheat market. This "aggregation principle" permitted federal regulation of virtually any economic activity, no matter how local, if the cumulative effect of similar activities across the nation would substantially affect interstate commerce.

Recent decades have witnessed partial retrenchment. In United States v. Lopez (1995), the Supreme Court struck down the Gun-Free School Zones Act as exceeding Congress's commerce power, holding that mere possession of a firearm near a school was not economic activity substantially affecting interstate commerce. The Court emphasized that the Commerce Clause, despite its broad sweep, must have some judicially enforceable limits to preserve the constitutional structure of dual sovereignty. Similarly, in United States v. Morrison (2000), the Court invalidated portions of the Violence Against Women Act, rejecting arguments that violence against women had substantial aggregate economic effects.

The constitutional boundaries of federal commerce power remain contested. Defenders of expansive federal authority argue that a modern, interconnected economy requires national solutions to national problems and that courts should defer to congressional judgments about economic effects. Proponents of federalism respond that preserving meaningful limits on federal power is essential to the constitutional design and that the distinction between federal and state authority would collapse if Congress could regulate any activity with remote economic consequences. The ongoing debate reflects fundamental disagreements about constitutional structure and the proper allocation of governmental power in a federal system.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp25-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Commerce Clause has been interpreted with consistent uniformity throughout American constitutional history." },
      { letter: "B", text: "The interpretation of the Commerce Clause has shifted significantly over time, with ongoing debate about the proper scope of federal regulatory authority over economic activity." },
      { letter: "C", text: "The Supreme Court has definitively resolved all controversies regarding the scope of federal commerce power." },
      { letter: "D", text: "Federal regulation under the Commerce Clause should be limited exclusively to direct regulation of cross-border transactions." },
      { letter: "E", text: "The aggregation principle established in Wickard v. Filburn has been completely abandoned by contemporary courts." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolving interpretation of the Commerce Clause from the New Deal era through recent retrenchment, emphasizing that 'the constitutional boundaries of federal commerce power remain contested.' Answer B captures this central theme of interpretive change and ongoing debate.",
    wrongAnswerExplanations: {
      A: "The passage explicitly describes dramatic shifts in interpretation, not consistency.",
      C: "The passage emphasizes that debate continues and boundaries 'remain contested.'",
      D: "This represents only one position in the debate, not the passage's main point.",
      E: "The passage indicates partial retrenchment, not complete abandonment of the aggregation principle.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p1",
  },
  {
    id: "rc-exp25-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Supreme Court in Wickard v. Filburn upheld federal regulation based on reasoning that",
    answerChoices: [
      { letter: "A", text: "individual farmers directly participate in interstate commerce when growing wheat for home consumption" },
      { letter: "B", text: "the cumulative effect of many farmers exceeding quotas would substantially impact the national market" },
      { letter: "C", text: "states had explicitly delegated agricultural regulation to the federal government" },
      { letter: "D", text: "wheat production is inherently a matter of national security" },
      { letter: "E", text: "the farmer in question had actually sold wheat across state lines" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the Court 'reasoned that if many farmers similarly exceeded their quotas, the aggregate effect would substantially impact the national wheat market.' This is the aggregation principle.",
    wrongAnswerExplanations: {
      A: "The passage indicates the farmer was growing wheat 'primarily for home consumption,' not directly participating in interstate commerce.",
      C: "The passage discusses constitutional interpretation, not explicit delegation by states.",
      D: "National security is not mentioned in the passage's discussion of Wickard.",
      E: "The passage specifies the wheat was primarily for home consumption, not interstate sale.",
    },
    difficulty: "easy",
    passageId: "rc-exp25-p1",
  },
  {
    id: "rc-exp25-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, it can be inferred that after NLRB v. Jones & Laughlin Steel Corp. (1937), the Supreme Court most likely",
    answerChoices: [
      { letter: "A", text: "continued to strike down federal economic legislation as exceeding commerce power" },
      { letter: "B", text: "adopted a more permissive view of federal authority to regulate activities with effects on interstate commerce" },
      { letter: "C", text: "returned to the narrow interpretation exemplified by Schechter Poultry" },
      { letter: "D", text: "held that Congress could never regulate manufacturing activities" },
      { letter: "E", text: "eliminated all judicial review of Commerce Clause challenges" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes Jones & Laughlin as part of a shift where 'the justices dramatically expanded their interpretation of the Commerce Clause,' and this case was followed by Wickard, which 'reached its apex' of expansive reading. This indicates a more permissive approach after 1937.",
    wrongAnswerExplanations: {
      A: "The passage describes 'dramatically expanded' interpretation, not continued striking down of legislation.",
      C: "The shift was away from Schechter Poultry's narrow interpretation, not a return to it.",
      D: "Jones & Laughlin specifically upheld regulation of manufacturing enterprises.",
      E: "The passage shows continued judicial review, including later cases like Lopez.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p1",
  },
  {
    id: "rc-exp25-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions 'President Roosevelt's court-packing threat' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Roosevelt's approach to judicial independence" },
      { letter: "B", text: "explain why the Supreme Court's interpretation of the Commerce Clause expanded during the New Deal" },
      { letter: "C", text: "argue that all subsequent Commerce Clause decisions were politically motivated" },
      { letter: "D", text: "demonstrate that the Constitution should be amended to clarify federal power" },
      { letter: "E", text: "compare Roosevelt's judicial philosophy with that of contemporary presidents" },
    ],
    correctAnswer: "B",
    explanation: "The reference to the court-packing threat appears in the context of explaining the dramatic shift in Commerce Clause interpretation. The passage states that 'following President Roosevelt's court-packing threat and shifting Court membership, the justices dramatically expanded their interpretation.'",
    wrongAnswerExplanations: {
      A: "The author presents this as historical context without expressing criticism.",
      C: "The passage does not suggest all subsequent decisions were politically motivated.",
      D: "Constitutional amendment is not discussed in the passage.",
      E: "No comparison with contemporary presidents is made.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p1",
  },
  {
    id: "rc-exp25-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate about Commerce Clause interpretation can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly advocating for expanded federal power" },
      { letter: "B", text: "dismissive of federalism concerns as outdated" },
      { letter: "C", text: "analytically neutral, presenting multiple perspectives on an ongoing constitutional controversy" },
      { letter: "D", text: "deeply skeptical of all Supreme Court Commerce Clause decisions" },
      { letter: "E", text: "enthusiastically supportive of the Lopez decision's limits on federal power" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both sides of the debate fairly: 'Defenders of expansive federal authority argue...' and 'Proponents of federalism respond...' The passage concludes that the debate 'reflects fundamental disagreements' without advocating for either position.",
    wrongAnswerExplanations: {
      A: "The author presents both expansive and limited views without advocating for either.",
      B: "The author presents federalism concerns as legitimate positions in the debate.",
      D: "The author describes decisions without expressing skepticism toward them.",
      E: "The author describes Lopez neutrally as part of 'partial retrenchment.'",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p1",
  },
  {
    id: "rc-exp25-006",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, proponents of federalism would most likely argue that a federal law regulating the type of light bulbs that can be used in private homes is",
    answerChoices: [
      { letter: "A", text: "clearly within Congress's commerce power because light bulbs are manufactured in interstate commerce" },
      { letter: "B", text: "problematic because it regulates local activity with only remote economic consequences, potentially collapsing the distinction between federal and state authority" },
      { letter: "C", text: "unconstitutional because the Constitution explicitly prohibits regulation of consumer products" },
      { letter: "D", text: "valid because courts should always defer to congressional judgments about economic effects" },
      { letter: "E", text: "appropriate because the New Deal precedents have been completely overturned" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that proponents of federalism argue that 'preserving meaningful limits on federal power is essential to the constitutional design' and that distinction between federal and state authority 'would collapse if Congress could regulate any activity with remote economic consequences.' Regulation of home light bulb use would exemplify such an activity.",
    wrongAnswerExplanations: {
      A: "This represents the expansive federal power position, not the federalism position.",
      C: "The passage discusses Commerce Clause limits, not explicit constitutional prohibitions on product regulation.",
      D: "This is the position of defenders of expansive federal authority, not federalism proponents.",
      E: "The passage describes 'partial retrenchment,' not complete overturning of New Deal precedents.",
    },
    difficulty: "hard",
    passageId: "rc-exp25-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - RENEWABLE ENERGY TECHNOLOGIES
// ============================================

const passage2 = `The transition from fossil fuels to renewable energy sources represents one of the most consequential technological and economic shifts in modern history. Solar photovoltaic and wind power have emerged as the leading renewable technologies, with costs declining dramatically over the past two decades. Between 2010 and 2022, the levelized cost of electricity from utility-scale solar photovoltaics fell by approximately 89 percent, while onshore wind costs decreased by about 70 percent. These reductions have made renewables cost-competitive with, or cheaper than, new fossil fuel generation in many regions.

The rapid cost declines in solar technology stem from multiple factors operating in concert. Manufacturing scale has expanded enormously, with global annual production capacity exceeding 400 gigawatts by 2022. This scale enables manufacturers to spread fixed costs across larger production volumes and invest in automated manufacturing processes. Simultaneously, continuous incremental improvements in cell efficiency, module design, and installation practices have reduced both capital and operating costs. Learning curve analysis suggests that each doubling of cumulative installed capacity has historically reduced solar module prices by approximately 20 to 25 percent.

Wind power has followed a parallel trajectory of improvement. Larger turbines with taller towers and longer blades can capture more energy from wind resources, and offshore installations access stronger, more consistent winds than land-based turbines. Modern offshore wind turbines exceed 15 megawatts in capacity, compared to less than 1 megawatt for typical turbines in the 1990s. Materials science advances have enabled longer, lighter blades that can harvest energy from lower wind speeds, expanding the geographic range where wind power is economically viable.

Despite their successes, renewable technologies face significant integration challenges. Solar and wind resources are intermittent and variable, producing electricity that does not necessarily match demand patterns. Solar generation peaks at midday while electricity demand often peaks in early evening. Wind production varies with weather conditions and seasons. Managing these mismatches requires flexible resources such as energy storage, demand response, transmission interconnection, or dispatchable generation from other sources. Battery storage costs have declined rapidly, falling approximately 90 percent between 2010 and 2022, but current storage capacity remains far below what would be needed for a fully renewable grid.

The path to decarbonized electricity systems involves not merely deploying renewable generation but transforming grid architecture, market structures, and regulatory frameworks. Traditional electricity systems were designed around large, centralized, dispatchable power plants; renewable-dominated systems will feature distributed generation, bidirectional power flows, and dynamic pricing signals. These transformations require substantial investment in transmission infrastructure, grid modernization, and workforce development. The technical feasibility of high-renewable electricity systems has been established; the remaining challenges are primarily economic, regulatory, and social rather than purely technological.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp25-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Renewable energy technologies have achieved remarkable cost reductions and become competitive with fossil fuels, though significant integration and system transformation challenges remain." },
      { letter: "B", text: "Solar photovoltaic technology is clearly superior to wind power in all applications." },
      { letter: "C", text: "The intermittency of renewable energy sources makes a transition away from fossil fuels technically impossible." },
      { letter: "D", text: "Battery storage has completely solved the integration challenges facing renewable energy." },
      { letter: "E", text: "Traditional electricity grid architectures require no modification to accommodate renewable energy." },
    ],
    correctAnswer: "A",
    explanation: "The passage describes dramatic cost reductions in solar and wind, explains the factors driving these improvements, acknowledges integration challenges from intermittency, and concludes that remaining challenges are 'primarily economic, regulatory, and social rather than purely technological.' Answer A captures this balanced assessment.",
    wrongAnswerExplanations: {
      B: "The passage treats solar and wind as parallel developments without declaring either superior.",
      C: "The passage states that 'technical feasibility of high-renewable electricity systems has been established.'",
      D: "The passage notes that 'current storage capacity remains far below what would be needed.'",
      E: "The passage emphasizes that renewable systems 'will feature distributed generation, bidirectional power flows' requiring grid transformation.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p2",
  },
  {
    id: "rc-exp25-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, which of the following has contributed to the decline in solar photovoltaic costs?",
    answerChoices: [
      { letter: "A", text: "Reductions in global manufacturing capacity to focus on quality" },
      { letter: "B", text: "Government mandates requiring utilities to purchase solar power at premium prices" },
      { letter: "C", text: "Manufacturing scale expansion, improved cell efficiency, and automated manufacturing processes" },
      { letter: "D", text: "Abandonment of incremental improvements in favor of breakthrough technologies" },
      { letter: "E", text: "Decreased investment in research and development" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that cost reductions stem from 'Manufacturing scale has expanded enormously,' 'automated manufacturing processes,' and 'continuous incremental improvements in cell efficiency, module design, and installation practices.'",
    wrongAnswerExplanations: {
      A: "The passage describes expansion of manufacturing capacity, not reduction.",
      B: "Government mandates and premium pricing are not mentioned in the passage.",
      D: "The passage emphasizes 'continuous incremental improvements,' not their abandonment.",
      E: "Decreased R&D investment is not mentioned; the passage implies ongoing improvement.",
    },
    difficulty: "easy",
    passageId: "rc-exp25-p2",
  },
  {
    id: "rc-exp25-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, it can be inferred that the geographic areas where wind power was economically viable",
    answerChoices: [
      { letter: "A", text: "have contracted as newer technologies emerged" },
      { letter: "B", text: "have expanded due to turbines that can harvest energy from lower wind speeds" },
      { letter: "C", text: "remain exactly the same as in the 1990s" },
      { letter: "D", text: "are limited exclusively to offshore locations" },
      { letter: "E", text: "have decreased because modern turbines require stronger winds" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Materials science advances have enabled longer, lighter blades that can harvest energy from lower wind speeds, expanding the geographic range where wind power is economically viable.'",
    wrongAnswerExplanations: {
      A: "The passage describes expansion, not contraction, of viable geographic areas.",
      C: "The passage describes expansion of viable areas due to technological improvements.",
      D: "The passage discusses both onshore and offshore wind, not exclusive offshore limitation.",
      E: "The passage indicates turbines can now use lower wind speeds, not that they require stronger winds.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p2",
  },
  {
    id: "rc-exp25-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the mismatch between solar generation peaks and electricity demand peaks primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that solar power should be abandoned in favor of other technologies" },
      { letter: "B", text: "illustrate one of the integration challenges that renewable energy sources present" },
      { letter: "C", text: "demonstrate that cost reductions in solar technology have been exaggerated" },
      { letter: "D", text: "explain why traditional grid architectures are optimal for renewable energy" },
      { letter: "E", text: "compare the efficiency of solar panels manufactured in different countries" },
    ],
    correctAnswer: "B",
    explanation: "The timing mismatch is presented as part of the paragraph discussing 'significant integration challenges.' The passage uses this example to show why 'Managing these mismatches requires flexible resources such as energy storage, demand response, transmission interconnection, or dispatchable generation.'",
    wrongAnswerExplanations: {
      A: "The author presents this as a challenge to be managed, not a reason to abandon solar.",
      C: "The mismatch discussion concerns integration, not cost reduction accuracy.",
      D: "The passage states traditional architectures need transformation for renewables.",
      E: "Manufacturing location comparisons are not discussed in this context.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p2",
  },
  {
    id: "rc-exp25-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the prospects for high-renewable electricity systems can best be described as",
    answerChoices: [
      { letter: "A", text: "pessimistic, viewing remaining challenges as insurmountable" },
      { letter: "B", text: "cautiously optimistic, acknowledging technical feasibility while recognizing non-technical challenges" },
      { letter: "C", text: "indifferent to whether the transition succeeds or fails" },
      { letter: "D", text: "dismissive of the importance of regulatory and social factors" },
      { letter: "E", text: "skeptical that any cost reductions have actually occurred" },
    ],
    correctAnswer: "B",
    explanation: "The author states that 'technical feasibility of high-renewable electricity systems has been established' while noting that 'remaining challenges are primarily economic, regulatory, and social.' This indicates optimism about technical possibility coupled with recognition of other challenges.",
    wrongAnswerExplanations: {
      A: "The author emphasizes technical feasibility and describes remaining challenges as non-technological.",
      C: "The detailed analysis suggests engagement with the topic, not indifference.",
      D: "The author specifically identifies regulatory and social factors as important remaining challenges.",
      E: "The author provides specific statistics on cost reductions (89%, 70%, 90%).",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p2",
  },
  {
    id: "rc-exp25-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the author's conclusion about the remaining challenges for renewable energy systems?",
    answerChoices: [
      { letter: "A", text: "A new breakthrough has made solar panels 50 percent more efficient than current technology." },
      { letter: "B", text: "Several regions with high renewable energy adoption have successfully modified their market structures and regulatory frameworks to accommodate variable generation." },
      { letter: "C", text: "Wind turbine manufacturers have announced plans to develop even larger offshore turbines." },
      { letter: "D", text: "Scientists have discovered fundamental physical limits that prevent further improvements in battery technology." },
      { letter: "E", text: "A study found that public resistance to transmission line construction has delayed grid modernization projects." },
    ],
    correctAnswer: "E",
    explanation: "The author concludes that remaining challenges are 'primarily economic, regulatory, and social rather than purely technological.' Evidence of public resistance delaying grid modernization would directly support the claim that social factors represent significant remaining challenges.",
    wrongAnswerExplanations: {
      A: "This addresses technical improvements, not the author's conclusion about non-technical challenges.",
      B: "This would suggest challenges can be overcome but doesn't strengthen the claim about their nature.",
      C: "This addresses technical development, not non-technical challenges.",
      D: "This would introduce a new technical challenge, contradicting the author's conclusion.",
    },
    difficulty: "hard",
    passageId: "rc-exp25-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - ANCIENT ROMAN ARCHITECTURE AND ENGINEERING
// ============================================

const passage3 = `Roman concrete, known as opus caementicium, represents one of the most consequential technological innovations of the ancient world. Unlike modern Portland cement concrete, which typically degrades over decades when exposed to seawater, Roman marine concrete has survived for two millennia in Mediterranean harbors. Recent scientific analysis has revealed that Roman concrete actually gains strength through interaction with seawater, as chemical reactions produce mineral crystals that reinforce the material's structure over time. This counterintuitive property has sparked renewed interest in ancient Roman construction techniques among modern engineers and materials scientists.

The Romans developed their concrete technology through centuries of empirical experimentation rather than theoretical understanding. Roman builders discovered that mixing volcanic ash, specifically the pozzolanic ash from the region around Pozzuoli near Mount Vesuvius, with lime and seawater produced a remarkably durable hydraulic cement. When submerged in seawater, this mixture triggers a pozzolanic reaction in which calcium hydroxide from the lime combines with aluminosilicate minerals in the volcanic ash to form stable compounds. The Romans could not have explained this chemistry, yet they reliably exploited it across their empire's extensive harbor infrastructure.

The architectural possibilities enabled by Roman concrete transformed the built environment of the ancient Mediterranean. Earlier Greek architecture, constrained by post-and-lintel construction with stone, could span only limited distances. Roman concrete, by contrast, could be molded into virtually any shape and could create vast interior spaces through arched and vaulted structures. The Pantheon in Rome, with its 43-meter unreinforced concrete dome, remained the world's largest dome for over thirteen centuries. The dome's ingenious design incorporates progressively lighter aggregate materials toward its crown and features a central oculus that reduces weight while admitting light.

Roman engineering achievements extended beyond individual structures to encompass systematic infrastructure networks. The empire's aqueduct systems, totaling hundreds of kilometers across the Mediterranean world, delivered fresh water to cities through precisely graded channels that exploited gravity flow. Roman roads, constructed with multiple layers of compacted materials and sophisticated drainage systems, facilitated military movement, commercial trade, and administrative communication. These infrastructure investments required not only technical knowledge but also institutional capacity for planning, financing, and maintaining large-scale public works across centuries.

The Roman engineering tradition raises important questions about the nature of technological progress. Roman builders achieved remarkable practical results without modern scientific understanding of materials, structural mechanics, or hydrology. Their knowledge was embodied in craft traditions, apprenticeship systems, and accumulated experience rather than theoretical treatises. The subsequent loss of much Roman technical knowledge during the medieval period suggests that practical expertise, when not codified in transferable form, can disappear more readily than written texts. Modern engineers studying Roman concrete seek not merely to replicate ancient recipes but to understand the underlying principles that Roman builders exploited without fully comprehending.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp25-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Roman concrete was produced using exactly the same methods as modern Portland cement." },
      { letter: "B", text: "Roman engineering achieved remarkable results through empirical craft knowledge, creating durable materials and infrastructure that continue to inform modern research." },
      { letter: "C", text: "The Pantheon is the only significant Roman architectural achievement." },
      { letter: "D", text: "Roman engineers possessed advanced theoretical understanding of chemistry and materials science." },
      { letter: "E", text: "Medieval builders successfully preserved and improved upon all Roman technical knowledge." },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses Roman concrete's remarkable durability, the empirical (non-theoretical) nature of Roman technical knowledge, various engineering achievements, and how modern researchers seek to understand principles the Romans used. Answer B captures this emphasis on empirical achievement and ongoing relevance.",
    wrongAnswerExplanations: {
      A: "The passage explicitly contrasts Roman concrete with modern Portland cement.",
      C: "The passage discusses multiple achievements including aqueducts, roads, and harbor infrastructure.",
      D: "The passage states Romans 'could not have explained this chemistry' and lacked 'theoretical understanding.'",
      E: "The passage describes 'the subsequent loss of much Roman technical knowledge during the medieval period.'",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p3",
  },
  {
    id: "rc-exp25-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Roman marine concrete differs from modern Portland cement concrete in that Roman concrete",
    answerChoices: [
      { letter: "A", text: "degrades rapidly when exposed to seawater" },
      { letter: "B", text: "cannot be used for structural applications" },
      { letter: "C", text: "actually gains strength through interaction with seawater over time" },
      { letter: "D", text: "requires constant maintenance to prevent deterioration" },
      { letter: "E", text: "was developed using advanced chemical analysis" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'Unlike modern Portland cement concrete, which typically degrades over decades when exposed to seawater, Roman marine concrete has survived for two millennia' and 'actually gains strength through interaction with seawater.'",
    wrongAnswerExplanations: {
      A: "This describes modern Portland cement, not Roman concrete.",
      B: "The passage describes extensive structural use including the Pantheon dome.",
      C: "Correct.",
      D: "The passage emphasizes the material's durability over two millennia without such maintenance.",
      E: "The passage states Romans developed their techniques through 'empirical experimentation rather than theoretical understanding.'",
    },
    difficulty: "easy",
    passageId: "rc-exp25-p3",
  },
  {
    id: "rc-exp25-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, it can be inferred that Greek architecture before Roman concrete was limited primarily because",
    answerChoices: [
      { letter: "A", text: "Greek builders lacked aesthetic sensibility" },
      { letter: "B", text: "Greece had no access to suitable building materials" },
      { letter: "C", text: "post-and-lintel stone construction could span only limited distances" },
      { letter: "D", text: "Roman military conquest destroyed all Greek architectural knowledge" },
      { letter: "E", text: "Greek religion prohibited large interior spaces" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Earlier Greek architecture, constrained by post-and-lintel construction with stone, could span only limited distances.' This directly indicates the limitation was the construction method's spanning capacity.",
    wrongAnswerExplanations: {
      A: "Aesthetic sensibility is not discussed as a limitation.",
      B: "The limitation discussed is construction method, not material availability.",
      D: "Roman destruction of Greek knowledge is not mentioned.",
      E: "Religious prohibitions are not mentioned in the passage.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p3",
  },
  {
    id: "rc-exp25-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions that the Pantheon's dome remained the world's largest for over thirteen centuries primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize medieval builders for their lack of ambition" },
      { letter: "B", text: "demonstrate the remarkable and enduring achievement enabled by Roman concrete technology" },
      { letter: "C", text: "argue that no architectural progress has occurred since Roman times" },
      { letter: "D", text: "explain the chemical composition of volcanic ash" },
      { letter: "E", text: "compare Roman religious practices with those of other civilizations" },
    ],
    correctAnswer: "B",
    explanation: "The Pantheon example appears in the paragraph about 'architectural possibilities enabled by Roman concrete' and illustrates how Roman concrete 'could create vast interior spaces through arched and vaulted structures.' The longevity of the dome's record demonstrates the achievement's magnitude.",
    wrongAnswerExplanations: {
      A: "The passage makes no criticism of medieval builders regarding ambition.",
      C: "The passage does not claim no progress has occurred, only that this particular record stood long.",
      D: "The dome discussion concerns architectural achievement, not chemical composition.",
      E: "Religious practices are not discussed in the passage.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p3",
  },
  {
    id: "rc-exp25-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward Roman engineering achievements can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of their practical significance" },
      { letter: "B", text: "skeptical that any Roman structures have actually survived" },
      { letter: "C", text: "admiring of their remarkable practical results achieved through empirical methods" },
      { letter: "D", text: "critical of Roman builders for lacking theoretical understanding" },
      { letter: "E", text: "indifferent to whether modern engineers can learn from Roman techniques" },
    ],
    correctAnswer: "C",
    explanation: "The author uses appreciative language ('one of the most consequential technological innovations,' 'remarkably durable,' 'ingenious design,' 'remarkable practical results') while noting that Roman knowledge was empirical rather than theoretical. This indicates admiration for practical achievement.",
    wrongAnswerExplanations: {
      A: "The author emphasizes the significance of Roman achievements throughout the passage.",
      B: "The author describes specific surviving structures including Mediterranean harbors and the Pantheon.",
      D: "The author presents empirical knowledge positively, not as a deficiency requiring criticism.",
      E: "The author discusses how 'Modern engineers studying Roman concrete seek' to understand Roman principles.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p3",
  },
  {
    id: "rc-exp25-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A technological innovation is introduced, its development and applications are described, and broader questions about technological progress are raised." },
      { letter: "B", text: "Two competing theories are presented and one is definitively refuted." },
      { letter: "C", text: "A chronological history from ancient to modern times is traced without any thematic focus." },
      { letter: "D", text: "An argument is made and immediately abandoned in favor of a contradictory conclusion." },
      { letter: "E", text: "Statistical evidence is analyzed to disprove a commonly held belief." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces Roman concrete (paragraph 1), explains its development (paragraph 2), describes architectural applications (paragraph 3), discusses infrastructure (paragraph 4), and raises broader questions about technological progress (paragraph 5). This matches the structure described in answer A.",
    wrongAnswerExplanations: {
      B: "The passage does not present competing theories or refute one.",
      C: "The passage has clear thematic organization around Roman engineering, not merely chronology.",
      D: "The passage develops its themes consistently without abandoning arguments.",
      E: "The passage uses examples and description, not statistical analysis to disprove beliefs.",
    },
    difficulty: "hard",
    passageId: "rc-exp25-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - GLOBALIZATION AND CULTURAL HOMOGENIZATION
// ============================================

const passage4 = `The cultural consequences of economic globalization have generated intense scholarly debate. Critics argue that the global spread of Western, particularly American, consumer culture threatens to homogenize the world's diverse cultural traditions. Multinational corporations marketing standardized products, from fast food to entertainment media, allegedly create a uniform global consumer culture that displaces local practices, languages, and identities. This "McDonaldization" thesis envisions a flattened cultural landscape in which distinctive local cultures gradually disappear under the weight of global commercial forces.

Proponents of the homogenization thesis point to observable patterns of cultural convergence. Young people worldwide increasingly consume similar media, wear similar fashions, and participate in similar forms of recreation. English has become the dominant language of international business, science, and popular culture. Traditional crafts and local entertainment forms often cannot compete economically with mass-produced global alternatives. Indigenous languages are disappearing at alarming rates, with some linguists estimating that half of the world's approximately 7,000 languages may become extinct within a century. These trends, critics argue, represent an impoverishment of humanity's cultural heritage.

However, an alternative perspective emphasizes the agency of local cultures in engaging with global influences. Anthropologists studying globalization have documented complex processes of cultural hybridization in which local communities selectively appropriate, adapt, and reinterpret global cultural forms. Japanese consumers transformed American fast food into a distinctly Japanese dining experience with different social meanings and consumption practices. Brazilian musicians fused African, European, and indigenous traditions with international pop influences to create genres that subsequently influenced global music. Rather than passive recipients of cultural imperialism, local communities actively negotiate the terms of their engagement with global culture.

The hybridization perspective suggests that cultural globalization produces diversity through novel combinations rather than uniformity through displacement. Global cultural flows are not unidirectional but move in multiple directions, with non-Western cultural products increasingly circulating worldwide. Korean popular music and television dramas have achieved massive followings across Asia and beyond. Nigerian Nollywood films constitute one of the world's largest film industries by output. Indian Bollywood musicals have influenced filmmaking globally. These reverse flows complicate the simple narrative of Western cultural imperialism imposing uniformity on the rest of the world.

Neither pure homogenization nor unlimited hybridization fully captures the complex dynamics of cultural globalization. Power asymmetries mean that some cultural flows are vastly larger than others; Hollywood's global reach far exceeds that of any non-Western film industry. Economic pressures on local cultural production are real, and language death represents irreversible cultural loss. Yet the persistence of cultural diversity, the creative adaptation of global influences, and the emergence of new cultural forms suggest that globalization's cultural effects cannot be reduced to simple homogenization. Understanding these dynamics requires attention to both the structural forces of global capitalism and the creative agency of cultural producers and consumers worldwide.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp25-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "definitively prove that cultural homogenization is inevitable and unstoppable" },
      { letter: "B", text: "examine competing perspectives on globalization's cultural effects and suggest that neither extreme view fully captures the complex dynamics involved" },
      { letter: "C", text: "argue that non-Western cultures have always been completely immune to external influence" },
      { letter: "D", text: "demonstrate that McDonald's restaurants have no cultural significance" },
      { letter: "E", text: "predict the exact number of languages that will survive the next century" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the homogenization thesis, then the hybridization alternative, and concludes that 'Neither pure homogenization nor unlimited hybridization fully captures the complex dynamics of cultural globalization.' This balanced examination of competing views matches answer B.",
    wrongAnswerExplanations: {
      A: "The passage presents homogenization as one contested view, not as inevitable truth.",
      C: "The passage acknowledges both global influence and local agency, not immunity to influence.",
      D: "The passage uses McDonald's as an example in the homogenization thesis, not to dismiss its significance.",
      E: "The passage mentions estimates about language endangerment but does not claim to predict exact numbers.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p4",
  },
  {
    id: "rc-exp25-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, proponents of the homogenization thesis cite which of the following as evidence for their position?",
    answerChoices: [
      { letter: "A", text: "The growing diversity of languages spoken worldwide" },
      { letter: "B", text: "The increasing consumption of similar media by young people globally and the decline of indigenous languages" },
      { letter: "C", text: "The dominance of non-Western entertainment in American markets" },
      { letter: "D", text: "The success of traditional crafts in competing with mass-produced goods" },
      { letter: "E", text: "The decline of English as an international language" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that homogenization proponents point to 'Young people worldwide increasingly consume similar media' and 'Indigenous languages are disappearing at alarming rates.'",
    wrongAnswerExplanations: {
      A: "The passage cites language decline, not growth, as evidence for homogenization.",
      C: "The passage discusses Western dominance, not non-Western dominance in America.",
      D: "The passage states traditional crafts 'often cannot compete economically' with global alternatives.",
      E: "The passage describes English as 'the dominant language of international business, science, and popular culture.'",
    },
    difficulty: "easy",
    passageId: "rc-exp25-p4",
  },
  {
    id: "rc-exp25-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, anthropologists who emphasize cultural hybridization would most likely view the spread of American fast food to Japan as",
    answerChoices: [
      { letter: "A", text: "evidence of the complete destruction of Japanese culture" },
      { letter: "B", text: "an example of Japanese consumers passively accepting Western cultural imperialism" },
      { letter: "C", text: "a process in which Japanese consumers actively transformed the cultural meaning of fast food" },
      { letter: "D", text: "proof that homogenization is occurring exactly as critics predict" },
      { letter: "E", text: "irrelevant to understanding cultural globalization" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that anthropologists found 'Japanese consumers transformed American fast food into a distinctly Japanese dining experience with different social meanings and consumption practices.' This demonstrates active transformation, not passive reception.",
    wrongAnswerExplanations: {
      A: "The hybridization view emphasizes adaptation and transformation, not destruction.",
      B: "The passage explicitly contrasts hybridization with the 'passive recipients of cultural imperialism' view.",
      D: "The Japan example is presented as evidence against simple homogenization.",
      E: "The example is presented as directly relevant to understanding globalization dynamics.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p4",
  },
  {
    id: "rc-exp25-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions Korean pop music, Nigerian Nollywood films, and Indian Bollywood musicals primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these industries are economically larger than Hollywood" },
      { letter: "B", text: "demonstrate that cultural flows move in multiple directions, complicating the narrative of Western cultural imperialism" },
      { letter: "C", text: "prove that the homogenization thesis is entirely correct" },
      { letter: "D", text: "criticize these industries for imitating Western forms" },
      { letter: "E", text: "explain the technical aspects of film production in these countries" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in a paragraph stating that 'Global cultural flows are not unidirectional but move in multiple directions' and that 'These reverse flows complicate the simple narrative of Western cultural imperialism imposing uniformity.'",
    wrongAnswerExplanations: {
      A: "The passage later acknowledges 'Hollywood's global reach far exceeds that of any non-Western film industry.'",
      C: "These examples are used to challenge, not support, the homogenization thesis.",
      D: "The passage presents these as distinct cultural contributions, not imitations.",
      E: "Technical production aspects are not discussed.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p4",
  },
  {
    id: "rc-exp25-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that the author would most likely agree with which of the following statements about cultural globalization?",
    answerChoices: [
      { letter: "A", text: "Power asymmetries between cultures are irrelevant to understanding globalization's effects." },
      { letter: "B", text: "Language death is a minor concern that should not influence cultural policy." },
      { letter: "C", text: "Both structural economic forces and human cultural agency must be considered to understand globalization's cultural effects." },
      { letter: "D", text: "Non-Western cultures have no influence on global cultural production." },
      { letter: "E", text: "Cultural homogenization has already completely eliminated all local cultural distinctiveness." },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'Understanding these dynamics requires attention to both the structural forces of global capitalism and the creative agency of cultural producers and consumers worldwide.' This directly supports answer C.",
    wrongAnswerExplanations: {
      A: "The passage states 'Power asymmetries mean that some cultural flows are vastly larger than others.'",
      B: "The passage describes language death as 'irreversible cultural loss,' indicating significant concern.",
      D: "The passage discusses Korean, Nigerian, and Indian cultural influence globally.",
      E: "The passage notes 'the persistence of cultural diversity' and 'emergence of new cultural forms.'",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p4",
  },
  {
    id: "rc-exp25-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the debate about cultural globalization can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly partisan in favor of the homogenization thesis" },
      { letter: "B", text: "dismissive of both perspectives as entirely without merit" },
      { letter: "C", text: "balanced and nuanced, acknowledging valid points in competing perspectives while noting their limitations" },
      { letter: "D", text: "uncritically accepting of the hybridization thesis as completely accurate" },
      { letter: "E", text: "hostile to any scholarly analysis of cultural change" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both the homogenization thesis and the hybridization perspective, notes valid evidence for each (language death is 'irreversible cultural loss' but 'the persistence of cultural diversity' also exists), and concludes that 'Neither pure homogenization nor unlimited hybridization fully captures the complex dynamics.' This is a balanced, nuanced approach.",
    wrongAnswerExplanations: {
      A: "The author critiques the homogenization thesis as incomplete.",
      B: "The author acknowledges valid points in both perspectives.",
      D: "The author notes limitations of unlimited hybridization and acknowledges power asymmetries.",
      E: "The author engages substantively with scholarly analysis throughout the passage.",
    },
    difficulty: "medium",
    passageId: "rc-exp25-p4",
  },
];

// Export all RC questions from Set 25
export const rcQuestionsExpSet25: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet25 = {
  passage1: { id: "rc-exp25-p1", content: passage1, topic: "law", title: "Commerce Clause and Federal Regulation" },
  passage2: { id: "rc-exp25-p2", content: passage2, topic: "natural-sciences", title: "Renewable Energy Technologies" },
  passage3: { id: "rc-exp25-p3", content: passage3, topic: "humanities", title: "Ancient Roman Architecture and Engineering" },
  passage4: { id: "rc-exp25-p4", content: passage4, topic: "social-sciences", title: "Globalization and Cultural Homogenization" },
};
