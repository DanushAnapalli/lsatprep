// Reading Comprehension Questions Bank - Set 20
// Law - Environmental & Administrative Law

import { Question } from "../lsat-types";

// PASSAGE 1: Standing in Environmental Litigation
const passage1 = `The doctrine of standing—the requirement that plaintiffs demonstrate sufficient connection to a legal dispute to justify judicial intervention—has become increasingly central to environmental law. Article III of the U.S. Constitution limits federal court jurisdiction to "cases" and "controversies," which the Supreme Court has interpreted to require that plaintiffs show injury-in-fact, causation, and redressability. In environmental contexts, however, these requirements create substantial barriers. Environmental harms are often diffuse rather than concentrated on particular individuals, future-oriented rather than immediate, and involve complex causal chains that complicate the attribution of injury to specific

 defendants' actions.

The landmark case Massachusetts v. EPA illustrates these complexities. Massachusetts challenged the EPA's refusal to regulate greenhouse gas emissions from vehicles, claiming that climate change threatened state-owned coastlands through sea level rise. The Supreme Court held that Massachusetts had standing despite the long causal chain (EPA decision → continued emissions → atmospheric accumulation → climate change → sea level rise → coastal erosion) and the impossibility of attributing any specific increment of harm to the EPA's inaction alone. The Court emphasized Massachusetts's sovereign status and "special solicitude" for states in standing analysis, while also finding that at least some coastal erosion was "fairly traceable" to the EPA's decision even if that decision contributed only marginally to global emissions.

Environmental organizations have sought to establish standing through their members' injuries—claiming that members use and enjoy natural resources that defendants' actions harm. Courts have accepted that aesthetic and recreational injuries suffice for standing: a person who regularly hikes in a forest has standing to challenge logging that would destroy the forest, even though the injury is not economic. However, plaintiffs must show concrete plans to visit the affected area; generalized interest in environmental protection does not establish standing. This requirement can exclude challenges to harms in remote or inaccessible locations, even when those harms are severe.

The rise of programmatic environmental challenges—suits challenging agency failures to perform legally mandated duties rather than challenging specific projects—has intensified standing controversies. When environmental groups sue because an agency failed to list endangered species, prepare required reports, or enforce pollution standards, what injury grounds their standing? Agencies argue that failure to perform administrative tasks causes no concrete injury until the omission affects specific resources that specific plaintiffs use. Environmental plaintiffs counter that procedural injuries—being denied participation rights or information to which they are entitled—constitute cognizable harm without requiring ultimate environmental injury.

The Supreme Court's recent jurisprudence has narrowed procedural standing. In Summers v. Earth Island Institute, the Court held that environmental plaintiffs lacked standing to challenge Forest Service regulations that exempted small projects from notice-and-comment procedures, because plaintiffs could not identify any specific project affecting land they used. The Court rejected the theory that denial of procedural rights itself constitutes injury, requiring instead concrete downstream effects. This ruling effectively insulates certain agency actions from judicial review if they involve no site-specific impacts—even if they systematically undermine environmental protections.

Critics argue that restrictive standing doctrine allows environmental violations to persist unaddressed. If no plaintiff has standing to challenge unlawful agency inaction or procedural shortcuts, then courts cannot enforce environmental laws. This insulation of agency discretion from judicial oversight seems particularly troubling in environmental contexts where agencies may face political pressure to favor development over conservation. Defenders of restrictive standing respond that Article III's requirements protect separation of powers: judicial review should address legal violations that cause concrete harm, not transform courts into overseers of agency compliance with all statutory mandates. The citizen suit provisions in many environmental statutes, which authorize "any person" to enforce certain requirements, create tension with constitutional standing limits—statutory authorization appears insufficient if plaintiffs lack constitutional standing.

The debate reflects competing visions of environmental law's enforcement architecture. Should enforcement depend primarily on agency initiative, with judicial review available only to those suffering particularized harm? Or should environmental laws be enforceable by citizens acting as "private attorneys general" to vindicate public interests? Standing doctrine's evolution will significantly affect environmental law's practical operation, determining which violations courts can address and which escape judicial scrutiny.`;

const rcQuestions1: Question[] = [
  {
    id: "rc-set20-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Standing requirements have no effect on environmental litigation" },
      { letter: "B", text: "Standing doctrine in environmental law creates barriers to litigation, and recent restrictive interpretations have generated debate about enforcement architecture" },
      { letter: "C", text: "All environmental lawsuits automatically satisfy standing requirements" },
      { letter: "D", text: "The Supreme Court has eliminated standing requirements in environmental cases" },
      { letter: "E", text: "Standing doctrine is completely settled with no ongoing controversies" },
    ],
    correctAnswer: "B",
    explanation: "The passage establishes that standing creates 'substantial barriers' in environmental contexts, discusses Massachusetts v. EPA and Summers as illustrating complexities and narrowing, presents criticisms of restrictive standing, and concludes that 'standing doctrine's evolution will significantly affect environmental law's practical operation.' The main point addresses both barriers and ongoing debates.",
    difficulty: "medium",
    passageId: "rc20-p1",
  },
  {
    id: "rc-set20-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses Massachusetts v. EPA primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that standing should never be granted in environmental cases" },
      { letter: "B", text: "illustrate how standing can be established despite complex causal chains in environmental contexts" },
      { letter: "C", text: "prove that states always lack standing" },
      { letter: "D", text: "demonstrate that climate change is not justiciable" },
      { letter: "E", text: "criticize the Supreme Court's standing doctrine" },
    ],
    correctAnswer: "B",
    explanation: "Massachusetts v. EPA is discussed to show that 'the Supreme Court held that Massachusetts had standing despite the long causal chain' and complexity of attribution, illustrating 'these complexities' in environmental standing analysis while acknowledging factors like state sovereign status.",
    difficulty: "medium",
    passageId: "rc20-p1",
  },
  {
    id: "rc-set20-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which of the following would most likely have standing to challenge logging in a forest?",
    answerChoices: [
      { letter: "A", text: "A person who has never visited the forest and has no plans to visit" },
      { letter: "B", text: "A person who regularly hikes in the forest and shows concrete plans to continue visiting" },
      { letter: "C", text: "A person with only a generalized interest in environmental protection" },
      { letter: "D", text: "Someone who opposes all logging on principle but never uses forests" },
      { letter: "E", text: "A corporation that owns logging equipment" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'courts have accepted that aesthetic and recreational injuries suffice for standing: a person who regularly hikes in a forest has standing to challenge logging that would destroy the forest,' though 'plaintiffs must show concrete plans to visit the affected area.'",
    difficulty: "easy",
    passageId: "rc20-p1",
  },
  {
    id: "rc-set20-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Article III of the Constitution has been interpreted to require plaintiffs to demonstrate which of the following for standing?",
    answerChoices: [
      { letter: "A", text: "Only that they disagree with the defendant's actions" },
      { letter: "B", text: "Injury-in-fact, causation, and redressability" },
      { letter: "C", text: "That they are government officials" },
      { letter: "D", text: "Financial harm only" },
      { letter: "E", text: "No requirements whatsoever" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'the Supreme Court has interpreted [Article III] to require that plaintiffs show injury-in-fact, causation, and redressability.'",
    difficulty: "easy",
    passageId: "rc20-p1",
  },
  {
    id: "rc-set20-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that defenders of restrictive standing doctrine believe that",
    answerChoices: [
      { letter: "A", text: "all environmental violations should go unaddressed" },
      { letter: "B", text: "standing limits protect separation of powers by ensuring courts address concrete harms rather than oversee all agency compliance" },
      { letter: "C", text: "citizens should have unlimited access to courts for any reason" },
      { letter: "D", text: "environmental laws should never be enforced" },
      { letter: "E", text: "agencies should face no legal constraints" },
    ],
    correctAnswer: "B",
    explanation: "The passage states: 'Defenders of restrictive standing respond that Article III's requirements protect separation of powers: judicial review should address legal violations that cause concrete harm, not transform courts into overseers of agency compliance with all statutory mandates.'",
    difficulty: "medium",
    passageId: "rc20-p1",
  },
];

// PASSAGE 2: Chevron Deference and Agency Interpretation
const passage2 = `The doctrine of Chevron deference, established in the 1984 Supreme Court decision Chevron U.S.A., Inc. v. Natural Resources Defense Council, fundamentally transformed administrative law by requiring courts to defer to agency interpretations of ambiguous statutes they administer. The two-step framework asks first whether Congress has directly spoken to the precise question at issue; if the statute is ambiguous, courts must accept reasonable agency interpretations even if the court would have reached a different conclusion. This doctrine reflects a particular allocation of interpretive authority between courts and agencies that has generated ongoing controversy.

The justification for Chevron deference rests on several premises. Agencies possess technical expertise that generalist judges lack, making agencies better positioned to resolve policy questions embedded in statutory interpretation. Agencies are politically accountable through presidential oversight and congressional appropriations, while life-tenured judges answer to no electorate. When statutes are ambiguous, requiring policy judgments to resolve, democratic accountability argues for deferring to politically responsible agencies rather than unelected courts. Finally, allowing agencies to adapt statutory interpretation to changing circumstances promotes regulatory flexibility that rigid judicial interpretations would preclude.

However, Chevron has faced mounting criticism from multiple perspectives. Formalist critics argue that interpretation is inherently a judicial function under Article III and the Administrative Procedure Act's mandate that courts "decide all relevant questions of law." Chevron, they contend, improperly delegates judicial power to agencies, allowing them to be judges in their own cases. This concern intensifies when agencies enforce their interpretations against private parties, combining prosecutorial, adjudicative, and interpretive functions in ways that threaten due process.

Practical objections also arise. Chevron deference may create perverse incentives, encouraging Congress to legislate ambiguously and delegate contentious decisions to agencies rather than resolving them through democratic processes. Agencies may exploit ambiguity to expand their jurisdiction or adopt politically convenient interpretations unconstrained by legal text. Moreover, empirical studies question whether Chevron actually increases deference: courts may manipulate Step One (finding statutes unambiguous) to avoid unwanted deference at Step Two, while agencies may not systematically possess greater expertise than courts in statutory interpretation—as opposed to policymaking or technical matters.

The domain of Chevron deference has also proven contentious. The Court has carved out exceptions: Chevron does not apply to interpretations in legal briefs or opinion letters (only those with "force of law"), agency interpretations of their own jurisdiction receive less deference, and "major questions" of vast economic and political significance may require clear congressional authorization rather than being inferred from ambiguous delegations. These limitations suggest discomfort with Chevron's broad mandate, yet their application remains unpredictable, creating uncertainty about when deference applies.

Recent Supreme Court decisions have signaled potential retrenchment from Chevron. Some justices have expressed skepticism about the doctrine's constitutional foundations and suggested reconsidering it entirely. The development of related doctrines—like the major questions doctrine and increased emphasis on constitutional avoidance—provides alternative pathways for judicial review that effectively limit Chevron's application without formally overruling it. This doctrinal proliferation may reduce Chevron's practical significance even if the formal doctrine persists.

The stakes extend beyond administrative law doctrine. Chevron profoundly affects regulatory policy: whether EPA interpretations of Clean Air Act ambiguities receive deference, whether financial regulators can broadly read their statutory authority, whether agencies can reverse prior interpretations with changes in administration—all turn partly on Chevron's application. Different theories of deference embody different visions of the administrative state's proper role. Broad deference empowers agencies to pursue evolving policy goals within flexible statutory frameworks, accepting significant executive branch policymaking authority. Narrow deference constrains agency discretion, requiring clearer congressional authorization for regulatory action and preserving judicial control over legal meaning.

The Chevron debate ultimately reflects contested views about democracy, expertise, and separation of powers in the modern regulatory state. Should courts or agencies have primary interpretive authority when statutes are ambiguous? Should accountability to the President enhance or diminish agencies' interpretive discretion? Can technical expertise justify deference to policy judgments, or does such deference conflate legal interpretation with policymaking? These foundational questions lack easy answers, explaining why Chevron remains intensely disputed four decades after its articulation.`;

const rcQuestions2: Question[] = [
  {
    id: "rc-set20-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Chevron deference should be immediately overruled" },
      { letter: "B", text: "Chevron deference is universally accepted without controversy" },
      { letter: "C", text: "Chevron deference requires courts to defer to reasonable agency interpretations of ambiguous statutes but faces significant criticisms and its scope remains contested" },
      { letter: "D", text: "Agencies never possess expertise relevant to statutory interpretation" },
      { letter: "E", text: "Courts always defer to agency interpretations under all circumstances" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents Chevron's framework and justifications (expertise, accountability, flexibility), discusses multiple criticisms (formalist, practical, empirical), notes exceptions and potential retrenchment, and concludes that Chevron 'remains intensely disputed.' The main point encompasses the doctrine, its rationales, and ongoing controversies.",
    difficulty: "medium",
    passageId: "rc20-p2",
  },
  {
    id: "rc-set20-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses the 'major questions' doctrine primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Chevron should apply to all agency interpretations" },
      { letter: "B", text: "illustrate an exception to Chevron deference that reflects discomfort with the doctrine's broad mandate" },
      { letter: "C", text: "prove that agencies always lack authority" },
      { letter: "D", text: "demonstrate that Congress never delegates authority to agencies" },
      { letter: "E", text: "support unlimited agency discretion" },
    ],
    correctAnswer: "B",
    explanation: "The major questions doctrine is mentioned as one of several exceptions carved out from Chevron, with the passage noting: 'These limitations suggest discomfort with Chevron's broad mandate, yet their application remains unpredictable.'",
    difficulty: "medium",
    passageId: "rc20-p2",
  },
  {
    id: "rc-set20-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, formalist critics of Chevron deference would most likely argue that",
    answerChoices: [
      { letter: "A", text: "agencies should always have final interpretive authority" },
      { letter: "B", text: "interpretation is inherently a judicial function that Chevron improperly delegates to agencies" },
      { letter: "C", text: "political accountability is the only relevant consideration" },
      { letter: "D", text: "statutes are never ambiguous" },
      { letter: "E", text: "expertise justifies unlimited agency discretion" },
    ],
    correctAnswer: "B",
    explanation: "The passage states: 'Formalist critics argue that interpretation is inherently a judicial function under Article III and the Administrative Procedure Act's mandate that courts \"decide all relevant questions of law.\" Chevron, they contend, improperly delegates judicial power to agencies.'",
    difficulty: "medium",
    passageId: "rc20-p2",
  },
  {
    id: "rc-set20-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the Chevron framework's first step asks whether",
    answerChoices: [
      { letter: "A", text: "the agency has technical expertise" },
      { letter: "B", text: "Congress has directly spoken to the precise question at issue" },
      { letter: "C", text: "the interpretation is politically popular" },
      { letter: "D", text: "courts prefer a different interpretation" },
      { letter: "E", text: "the agency has existed for at least ten years" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'The two-step framework asks first whether Congress has directly spoken to the precise question at issue; if the statute is ambiguous, courts must accept reasonable agency interpretations.'",
    difficulty: "easy",
    passageId: "rc20-p2",
  },
  {
    id: "rc-set20-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward Chevron deference can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified endorsement without acknowledging criticisms" },
      { letter: "B", text: "advocating for immediate abolition" },
      { letter: "C", text: "analytical presentation of justifications and criticisms without clear advocacy" },
      { letter: "D", text: "certain that the doctrine has no practical significance" },
      { letter: "E", text: "dismissive of all theoretical analysis" },
    ],
    correctAnswer: "C",
    explanation: "The author presents Chevron's justifications (expertise, accountability, flexibility), discusses criticisms from multiple perspectives, notes exceptions and uncertainty, and concludes that 'foundational questions lack easy answers.' The tone is balanced analytical presentation without advocating a position.",
    difficulty: "medium",
    passageId: "rc20-p2",
  },
];

// PASSAGE 3: Climate Change Adaptation Law
const passage3 = `Climate change law traditionally emphasizes mitigation—reducing greenhouse gas emissions to slow warming. However, even aggressive mitigation cannot prevent significant climate change due to atmospheric inertia and accumulated emissions. This reality has focused attention on adaptation: adjusting social and ecological systems to minimize climate change harms. Adaptation law raises novel questions distinct from mitigation, requiring legal frameworks to facilitate anticipatory responses to future risks while managing uncertainties about climate impacts' timing, magnitude, and distribution.

Adaptation implicates diverse legal domains. Land use regulation must account for sea level rise, increased wildfire risk, and changing flood patterns. Water law confronts altered precipitation, snowpack decline, and shifting seasonal availability. Infrastructure planning requires incorporating climate projections into design standards for buildings, transportation networks, and utilities. Insurance and disaster relief systems face escalating costs from intensifying extreme events. Each domain raises questions about how to integrate uncertain future conditions into present decisions traditionally based on historical baselines.

The tension between precautionary action and regulatory restraint pervades adaptation law. Acting on climate projections involves costs and may restrict property rights or economic activities. Yet delaying adaptation risks locking in vulnerabilities as infrastructure is built and development patterns set. Courts and legislatures must determine what level of climate risk justifies anticipatory regulation. Should building codes account for projected storm intensification even if projections involve substantial uncertainty? Can governments prohibit development in areas projected to flood regularly by mid-century? Different actors—insurers, property owners, governments—face misaligned incentives regarding adaptation timing and extent.

Liability frameworks create particularly complex questions. When climate-related disasters cause harm, who bears responsibility? Traditional tort law struggles with climate adaptation's challenges. Failure-to-adapt claims might arise if governments neglect known climate risks in infrastructure design or land use approvals. Yet determining whether adaptation was "reasonable" requires contentious judgments about climate projection reliability, cost-benefit trade-offs, and intergenerational equity. Moreover, governments may claim qualified immunity or regulatory discretion defenses, limiting liability exposure.

Conversely, adaptation measures themselves may generate liability. If governments restrict coastal development based on sea level projections, do regulatory takings claims arise? Constitutional property protections collide with climate adaptation when governments prohibit economically valuable uses based on future risk projections. The temporal dimension intensifies this tension: taking property to prevent harm that may not materialize for decades raises questions about appropriate discount rates and the weight accorded to uncertain future conditions versus present property values.

Adaptation's distributional consequences require attention. Climate impacts and adaptation capacity vary dramatically across socioeconomic groups. Wealthy communities can afford seawalls and engineered protections; poor communities may lack resources for even basic adaptive measures. Adaptation policies may exacerbate inequality if they protect some populations while leaving others exposed, or if adaptation costs fall disproportionately on disadvantaged groups. Environmental justice concerns arise when adaptation infrastructure (like flood barriers) protects affluent neighborhoods while directing hazards toward vulnerable communities.

The public-private responsibility allocation for adaptation remains contested. Should governments bear primary adaptation costs through protective infrastructure and land use controls? Or should property owners assume responsibility for adapting to climate risks, with government's role limited to providing information? The answer affects everything from zoning authority to insurance subsidies to disaster relief eligibility. Some argue that socializing adaptation costs through government programs creates moral hazard, encouraging risky development by insulating developers and property owners from consequences. Others contend that climate change is a collective action problem requiring collective solutions, and that expecting individuals to bear adaptation costs is neither feasible nor fair given climate change's global causes.

International dimensions add further complexity. Climate change does not respect borders; adaptation in one jurisdiction may affect others. Upstream water withdrawal for adaptation may harm downstream users. Flood control infrastructure may redirect hazards across jurisdictional boundaries. Yet international law provides limited frameworks for coordinating transboundary adaptation or allocating shared resources under climate stress. The absence of robust international adaptation governance may hinder efficient responses and generate conflicts as nations prioritize their own adaptation over global coordination.

Adaptation law ultimately requires developing new legal tools and frameworks suited to governing under uncertainty with long time horizons. Traditional legal approaches predicated on historical conditions, reactive response to observed harms, and short-term planning horizons require fundamental rethinking. Whether existing legal institutions can adequately evolve or whether climate adaptation demands more radical institutional innovation remains an open question that will significantly shape climate change's human impacts.`;

const rcQuestions3: Question[] = [
  {
    id: "rc-set20-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Climate change adaptation is unnecessary because mitigation will solve all problems" },
      { letter: "B", text: "Climate adaptation law raises novel challenges involving precaution, liability, distribution, and institutional design across multiple legal domains" },
      { letter: "C", text: "All adaptation measures are unconstitutional takings" },
      { letter: "D", text: "Climate change has no legal implications" },
      { letter: "E", text: "Adaptation law is fully developed with no remaining questions" },
    ],
    correctAnswer: "B",
    explanation: "The passage establishes that adaptation 'raises novel questions distinct from mitigation,' discusses challenges across multiple domains (land use, water, infrastructure), explores tensions (precaution vs. restraint, liability, takings), distributional concerns, and concludes that adaptation 'requires developing new legal tools.' The main point addresses adaptation law's comprehensive challenges.",
    difficulty: "medium",
    passageId: "rc20-p3",
  },
  {
    id: "rc-set20-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses sea level rise and coastal development restrictions primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all coastal property should be abandoned immediately" },
      { letter: "B", text: "illustrate how adaptation measures may generate regulatory takings claims when governments restrict property uses based on future risk" },
      { letter: "C", text: "prove that sea level rise is not occurring" },
      { letter: "D", text: "demonstrate that property rights are absolute" },
      { letter: "E", text: "criticize all environmental regulation" },
    ],
    correctAnswer: "B",
    explanation: "Coastal development restrictions are discussed in the context of how 'adaptation measures themselves may generate liability,' noting that 'if governments restrict coastal development based on sea level projections, do regulatory takings claims arise?' This illustrates the tension between property protections and adaptation.",
    difficulty: "medium",
    passageId: "rc20-p3",
  },
  {
    id: "rc-set20-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following best characterizes the relationship between climate mitigation and adaptation?",
    answerChoices: [
      { letter: "A", text: "Adaptation has made mitigation completely unnecessary" },
      { letter: "B", text: "Even with mitigation, adaptation is necessary due to atmospheric inertia and accumulated emissions" },
      { letter: "C", text: "Mitigation and adaptation are mutually exclusive approaches" },
      { letter: "D", text: "Only mitigation matters; adaptation should be ignored" },
      { letter: "E", text: "Climate change requires no response of any kind" },
    ],
    correctAnswer: "B",
    explanation: "The passage states: 'even aggressive mitigation cannot prevent significant climate change due to atmospheric inertia and accumulated emissions. This reality has focused attention on adaptation,' indicating that both are necessary and complementary.",
    difficulty: "easy",
    passageId: "rc20-p3",
  },
  {
    id: "rc-set20-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, environmental justice concerns in climate adaptation arise when",
    answerChoices: [
      { letter: "A", text: "all communities are protected equally" },
      { letter: "B", text: "adaptation infrastructure protects affluent neighborhoods while directing hazards toward vulnerable communities" },
      { letter: "C", text: "no adaptation measures are implemented anywhere" },
      { letter: "D", text: "climate change affects only wealthy populations" },
      { letter: "E", text: "all property owners have equal adaptation capacity" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Environmental justice concerns arise when adaptation infrastructure (like flood barriers) protects affluent neighborhoods while directing hazards toward vulnerable communities.'",
    difficulty: "easy",
    passageId: "rc20-p3",
  },
  {
    id: "rc-set20-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that traditional legal approaches face challenges in climate adaptation because they are",
    answerChoices: [
      { letter: "A", text: "perfectly suited to long-term uncertain future conditions" },
      { letter: "B", text: "predicated on historical conditions, reactive response, and short-term planning that require rethinking for adaptation" },
      { letter: "C", text: "already fully adapted to climate change" },
      { letter: "D", text: "irrelevant to all environmental issues" },
      { letter: "E", text: "incapable of any evolution or change" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph states: 'Traditional legal approaches predicated on historical conditions, reactive response to observed harms, and short-term planning horizons require fundamental rethinking' for adaptation under uncertainty with long time horizons.",
    difficulty: "medium",
    passageId: "rc20-p3",
  },
];

// PASSAGE 4: Regulatory Takings Doctrine
const passage4 = `The Fifth Amendment's Takings Clause—"nor shall private property be taken for public use, without just compensation"—originally applied to physical appropriations where government directly seized property. However, twentieth-century Supreme Court jurisprudence extended takings doctrine to certain regulations that, while not physically appropriating property, so diminish its value or interfere with owners' expectations that they constitute compensable "regulatory takings." This expansion created one of constitutional law's most contested and analytically challenging doctrines, requiring courts to distinguish permissible regulation from compensable takings without clear textual or historical guidance.

The landmark decision Pennsylvania Coal Co. v. Mahon articulated the basic regulatory takings principle: regulations that go "too far" require compensation even without physical seizure. Justice Holmes's opinion recognized that all property regulation diminishes value to some degree—prohibiting noxious uses, requiring safety measures, imposing zoning restrictions. Yet Holmes insisted that beyond some threshold, regulation becomes "the constitutional equivalent of a direct appropriation," requiring compensation. The challenge lies in identifying that threshold: how much diminution, what types of interference, and under what circumstances trigger compensation requirements?

The Court has developed several approaches without settling on a coherent framework. Physical invasion cases receive categorical treatment: permanent physical occupations, no matter how minor, constitute takings requiring compensation. A landlord required to allow cable boxes in buildings suffers a taking even if the physical intrusion is minimal and property value barely affected. However, temporary physical invasions receive fact-intensive analysis rather than categorical treatment, creating difficult line-drawing problems about invasion duration and permanence.

For regulations not involving physical invasion, the Court has applied multi-factor balancing tests that examine economic impact, interference with investment-backed expectations, and the regulation's character. This Penn Central framework provides flexibility but minimal predictability. How much economic impact suffices? What expectations are "reasonable" for investment-backing purposes? What regulatory "characters" are problematic? The answers involve contestable judgments that produce inconsistent results. Moreover, critics argue that multi-factor balancing gives judges excessive discretion, allowing policy preferences to masquerade as constitutional interpretation.

The Court has identified one categorical regulatory taking: regulations denying all economically beneficial use. If property becomes worthless due to regulation, compensation is required unless the regulation merely prohibits uses that were already unlawful under background property and nuisance principles. This rule provides some clarity but applies narrowly—few regulations eliminate all value, and determining what uses are prohibited by "background principles" often proves as indeterminate as the broader takings inquiry.

The conceptual foundations of regulatory takings remain disputed. One view sees takings doctrine as protecting property owners against unfair distributions of regulatory burdens. When regulations disproportionately burden particular owners rather than spreading costs broadly, compensation requirement corrects this unfairness. This theory struggles to explain physical occupation cases where burdens may be modest and widely distributed. Alternative theories emphasize protecting settled expectations or preventing government from extracting private property's value without paying. Yet regulations routinely frustrate expectations and reduce property values without triggering compensation—zoning is ubiquitous, environmental restrictions widespread, and development constraints common.

The political economy of regulatory takings generates additional concerns. Requiring compensation for regulations may chill legitimate government action by increasing costs. If every environmental restriction, safety regulation, or land use control requires compensation, regulatory budgets may prove inadequate for necessary protections. This "regulatory tax" might effectively prevent governments from addressing market failures and externalities. Conversely, allowing uncompensated regulatory takings may enable opportunistic extraction: governments could selectively burden property owners to benefit favored constituents, using regulatory authority as an uncompensated appropriation mechanism.

The appropriate remedy for regulatory takings also remains contested. Should governments pay compensation and maintain the regulation, or may they rescind the regulation to avoid compensation? If rescission suffices, takings doctrine functions as procedural protection—requiring governments to formally appropriate and pay rather than achieving redistribution informally through regulation—rather than substantive constraint on regulatory authority. Different remedial approaches embody different theories about takings doctrine's purpose and dramatically affect regulatory incentives.

Comparative perspectives reveal that regulatory takings is distinctively American. Most constitutional systems protect property rights but do not require compensation for regulations that merely reduce property value without physical appropriation. This American exceptionalism may reflect particular constitutional text, political culture skeptical of government authority, or simply historical accident and path dependence. Understanding whether American takings doctrine addresses genuine constitutional imperatives or represents contingent doctrinal evolution affects how we evaluate its normative foundations and practical consequences.

The regulatory takings debate ultimately implicates fundamental questions about property, government authority, and constitutional structure. Should property rights provide strong constraints on collective action through democratic processes? Or should democratic majorities possess broad authority to define and redefine property's incidents? The answers shape not just takings doctrine but the broader relationship between individual rights and collective governance.`;

const rcQuestions4: Question[] = [
  {
    id: "rc-set20-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Regulatory takings doctrine is perfectly clear and faces no analytical challenges" },
      { letter: "B", text: "Regulatory takings doctrine extends Fifth Amendment protection beyond physical appropriations but lacks coherent frameworks and faces conceptual and practical debates" },
      { letter: "C", text: "All regulations automatically require compensation" },
      { letter: "D", text: "Property rights should never constrain government regulation" },
      { letter: "E", text: "Regulatory takings only exists in non-American legal systems" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents regulatory takings' extension beyond physical appropriation, discusses various approaches (categorical, Penn Central balancing), notes their limitations and unpredictability, explores competing theoretical foundations, and addresses political economy concerns. The main point emphasizes both the doctrine's existence and its conceptual challenges.",
    difficulty: "medium",
    passageId: "rc20-p4",
  },
  {
    id: "rc-set20-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses the cable box example primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that cable television should be banned" },
      { letter: "B", text: "illustrate categorical takings treatment for permanent physical occupations regardless of minimal impact" },
      { letter: "C", text: "prove that landlords never suffer regulatory burdens" },
      { letter: "D", text: "demonstrate that physical invasions never constitute takings" },
      { letter: "E", text: "criticize all telecommunications regulation" },
    ],
    correctAnswer: "B",
    explanation: "The cable box example illustrates that 'permanent physical occupations, no matter how minor, constitute takings requiring compensation,' with 'a landlord required to allow cable boxes in buildings suffer[ing] a taking even if the physical intrusion is minimal and property value barely affected.'",
    difficulty: "easy",
    passageId: "rc20-p4",
  },
  {
    id: "rc-set20-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following best characterizes the Penn Central balancing test?",
    answerChoices: [
      { letter: "A", text: "It provides complete predictability and consistency" },
      { letter: "B", text: "It examines multiple factors but provides flexibility at the cost of minimal predictability" },
      { letter: "C", text: "It applies only to physical invasion cases" },
      { letter: "D", text: "It automatically finds all regulations unconstitutional" },
      { letter: "E", text: "It has been abandoned entirely by courts" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the Penn Central framework 'provides flexibility but minimal predictability,' involves 'contestable judgments that produce inconsistent results,' and gives 'judges excessive discretion' according to critics. This characterizes it as flexible but unpredictable.",
    difficulty: "medium",
    passageId: "rc20-p4",
  },
  {
    id: "rc-set20-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Justice Holmes in Pennsylvania Coal Co. v. Mahon stated that regulations require compensation when they",
    answerChoices: [
      { letter: "A", text: "have any effect whatsoever on property value" },
      { letter: "B", text: "go 'too far' and become the constitutional equivalent of direct appropriation" },
      { letter: "C", text: "are passed by state governments" },
      { letter: "D", text: "benefit the public in any way" },
      { letter: "E", text: "involve property located in urban areas" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Holmes 'recognized that all property regulation diminishes value to some degree' but 'insisted that beyond some threshold, regulation becomes \"the constitutional equivalent of a direct appropriation,\" requiring compensation,' using the phrase regulations that go '\"too far.\"'",
    difficulty: "easy",
    passageId: "rc20-p4",
  },
  {
    id: "rc-set20-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward regulatory takings doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "uncritical endorsement of all aspects" },
      { letter: "B", text: "advocating for complete elimination" },
      { letter: "C", text: "analytical examination of approaches, conceptual foundations, and competing concerns without clear advocacy" },
      { letter: "D", text: "certain that the doctrine is perfectly coherent" },
      { letter: "E", text: "dismissive of all constitutional property protections" },
    ],
    correctAnswer: "C",
    explanation: "The author presents multiple approaches (categorical, Penn Central), discusses their limitations, explores competing theoretical foundations, considers political economy concerns from both sides, and concludes that the doctrine 'implicates fundamental questions' without advocating a particular resolution. The tone is balanced analytical examination.",
    difficulty: "medium",
    passageId: "rc20-p4",
  },
];

export const rcQuestionsSet20: Question[] = [
  ...rcQuestions1,
  ...rcQuestions2,
  ...rcQuestions3,
  ...rcQuestions4,
];
