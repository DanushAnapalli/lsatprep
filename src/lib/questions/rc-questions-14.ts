// Reading Comprehension Questions - Set 14 (Political Science & Government)
import { Question } from "../lsat-types";

// Passage 1: Democratic Representation and Electoral Systems
const passage1 = `The choice of electoral system profoundly shapes democratic representation, yet these institutional arrangements often receive less attention than more visible aspects of political competition. Electoral systems determine how votes translate into seats in legislative bodies, affecting which parties gain representation, how proportional outcomes are to vote shares, whether governments tend toward single-party or coalition control, and the nature of relationships between representatives and constituents. While no system perfectly achieves all democratic values simultaneously, understanding trade-offs among competing goals is essential for evaluating institutional choices.

Single-member plurality systems, used in the United States, United Kingdom, and Canada, award seats to candidates receiving the most votes in geographically defined districts. This "first-past-the-post" approach offers simplicity and creates clear connections between representatives and local constituencies. However, it systematically advantages larger parties while penalizing smaller ones, often producing legislative majorities for parties that win only pluralities of votes nationally. A party receiving 35 percent of votes nationwide might win 55 percent of seats if its support is efficiently distributed across districts, while a party with 15 percent support evenly distributed might win no seats at all. This disproportionality can enhance governmental stability by facilitating single-party majorities, but it raises questions about whether parliaments accurately reflect voter preferences.

Proportional representation systems, common in continental Europe, allocate seats according to parties' vote shares, either nationally or in multi-member districts. If a party receives 20 percent of votes, it wins approximately 20 percent of seats. This proportionality ensures that diverse viewpoints gain representation, and voters face less pressure to abandon preferred candidates for strategic reasons. However, proportional systems typically produce fragmented parliaments requiring coalition governments. Negotiations among multiple parties to form governing coalitions can be protracted, and policy outcomes may reflect post-election bargaining among parties rather than voters' expressed preferences. Moreover, party lists used in many proportional systems can weaken individual representative accountability to local constituencies.

Mixed systems attempt to combine virtues of both approaches. Germany's system, for instance, elects half the parliament through single-member districts and half through party lists, with overall seat allocation made proportional through additional seats. This provides both local representation and proportionality, though at the cost of increased complexity and potential for larger parliaments than initially designed.

Beyond proportionality, electoral systems affect descriptive representation—whether legislatures mirror the demographic characteristics of populations they represent. Single-member districts can facilitate representation of geographically concentrated minorities through careful districting, but they often disadvantage women and dispersed minority groups. Proportional systems with party lists have generally achieved higher levels of women's representation, particularly where parties adopt placement rules ensuring women appear prominently on lists. However, descriptive representation does not guarantee substantive representation—that representatives actively advance the interests of groups they demographically resemble.

The normative evaluation of electoral systems depends on which democratic values one prioritizes. Those emphasizing accountability and stable government may prefer plurality systems that produce clear majorities and identifiable representatives. Those prioritizing accurate representation of diverse views may favor proportional systems despite their tendency toward coalition governments. What seems clear is that electoral system choice is not merely a technical matter but a fundamental question about how to organize democratic representation—one that inevitably involves trade-offs rather than unambiguously optimal solutions.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set14-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Single-member plurality systems are superior to all other electoral arrangements" },
      { letter: "B", text: "Electoral system choices profoundly shape democratic representation, involving trade-offs among competing values with no perfect solution" },
      { letter: "C", text: "Proportional representation guarantees better democratic outcomes in all circumstances" },
      { letter: "D", text: "Electoral systems have no significant effect on political representation" },
      { letter: "E", text: "All democracies should adopt identical electoral institutions" },
    ],
    correctAnswer: "B",
    explanation: "The passage argues that electoral systems 'profoundly shape democratic representation' and emphasizes that 'no system perfectly achieves all democratic values simultaneously,' concluding that choices 'inevitably involve trade-offs rather than unambiguously optimal solutions.'",
    difficulty: "medium",
    passageId: "rc14-p1",
  },
  {
    id: "rc-set14-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses the example of a party receiving 35 percent of votes winning 55 percent of seats primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all plurality systems are illegitimate" },
      { letter: "B", text: "illustrate disproportionality that can occur in single-member plurality systems" },
      { letter: "C", text: "argue that seat allocation should never consider vote distribution" },
      { letter: "D", text: "demonstrate perfect proportionality in plurality voting" },
      { letter: "E", text: "show that electoral systems have no effect on outcomes" },
    ],
    correctAnswer: "B",
    explanation: "This example illustrates how plurality systems can produce 'disproportionality,' where a party's seat share substantially exceeds its vote share depending on geographic distribution.",
    difficulty: "easy",
    passageId: "rc14-p1",
  },
  {
    id: "rc-set14-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, proportional representation systems typically result in",
    answerChoices: [
      { letter: "A", text: "single-party majority governments in all cases" },
      { letter: "B", text: "complete elimination of all smaller parties" },
      { letter: "C", text: "fragmented parliaments requiring coalition governments" },
      { letter: "D", text: "perfect local constituency representation" },
      { letter: "E", text: "identical outcomes to plurality systems" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that proportional systems 'typically produce fragmented parliaments requiring coalition governments' as a consequence of ensuring diverse viewpoints gain representation.",
    difficulty: "medium",
    passageId: "rc14-p1",
  },
  {
    id: "rc-set14-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Germany's mixed electoral system",
    answerChoices: [
      { letter: "A", text: "uses only single-member districts" },
      { letter: "B", text: "elects half the parliament through single-member districts and half through party lists with proportional allocation" },
      { letter: "C", text: "completely abandons all proportional representation" },
      { letter: "D", text: "produces perfect outcomes with no trade-offs" },
      { letter: "E", text: "eliminates all local representation" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly describes Germany's system as electing 'half the parliament through single-member districts and half through party lists, with overall seat allocation made proportional.'",
    difficulty: "easy",
    passageId: "rc14-p1",
  },
  {
    id: "rc-set14-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that the relationship between descriptive and substantive representation is",
    answerChoices: [
      { letter: "A", text: "guaranteed—descriptive representation always ensures substantive representation" },
      { letter: "B", text: "nonexistent—they are completely unrelated concepts" },
      { letter: "C", text: "uncertain—descriptive representation does not automatically ensure substantive representation" },
      { letter: "D", text: "perfect—demographic similarity always produces policy alignment" },
      { letter: "E", text: "irrelevant to evaluating electoral systems" },
    ],
    correctAnswer: "C",
    explanation: "The passage states 'descriptive representation does not guarantee substantive representation—that representatives actively advance the interests of groups they demographically resemble,' indicating the relationship is uncertain.",
    difficulty: "hard",
    passageId: "rc14-p1",
  },
];

// Passage 2: Federalism and Constitutional Design
const passage2 = `Federalism—the constitutional division of authority between national and subnational governments—represents one approach to organizing political power, particularly in large and diverse polities. Federal systems promise to accommodate regional differences, prevent excessive concentration of authority, and enable policy experimentation across jurisdictions. Yet federalism also creates coordination challenges, potential deadlock, and opportunities for subnational majorities to oppress local minorities. The choice between federal and unitary structures, and the specific design of federal arrangements, involves complex trade-offs that depend heavily on political, social, and historical context.

The classical rationale for federalism emphasizes its capacity to accommodate diversity within a single political unit. Where populations differ substantially in language, religion, culture, or economic interests across geographic regions, federal arrangements can allow regional self-governance on matters of particular local concern while maintaining unity on issues requiring coordination. Switzerland's federalism permits each canton to determine official languages and maintain distinct legal traditions, for instance, while coordinating defense, foreign policy, and economic regulation nationally. Similarly, Canadian federalism accommodates Francophone Quebec's distinctive identity within an Anglophone-majority country.

Federalism also serves as a constraint on governmental power. By dividing authority, federal systems create multiple veto points where proposed policies may be blocked, reducing the risk that temporary majorities can impose fundamental changes. The division of powers limits any single government's reach, theoretically protecting liberty through institutional checks. However, this same feature can produce gridlock, making federal systems slow to address pressing problems when national and subnational governments are controlled by opposing parties or possess conflicting preferences.

The laboratory of democracy argument holds that federalism enables policy experimentation. Subnational governments can try different approaches to common problems, with successful innovations spreading through interstate learning and competition while failures remain localized. American states served as laboratories for various policies—unemployment insurance, minimum wage laws, environmental regulations—before national adoption. Yet this metaphor oversimplifies. States and provinces are not controlled experiments; differences in outcomes may reflect varying conditions rather than policy effects. Moreover, interjurisdictional competition can produce races to the bottom in areas like environmental protection or labor standards, where mobile capital flows to jurisdictions with lax regulation.

Federal arrangements vary substantially in the division of powers and the mechanisms for resolving federal-subnational conflicts. Some federations assign specific subjects to each level (e.g., education to states, defense to the nation), while others create concurrent powers where both levels may legislate subject to national supremacy. Revenue allocation differs: some systems permit substantial subnational taxation, others rely on national grants to subnational governments. The strength of national override powers, representation of subnational units in national institutions, and constitutional amendment procedures all affect whether federalism actually constrains national government or merely creates nominal divisions.

Perhaps most troubling, federalism can enable subnational oppression of minorities. Decentralization in the American federal system historically permitted Southern states to maintain racial segregation long after national majorities would have prohibited it. Provincial autonomy in Canada has sometimes been invoked to limit minority language rights. Federal structures may protect subnational majorities' ability to discriminate against groups who would receive better treatment under national policy. This is not an inherent feature of federalism but a risk that institutional design and political culture may either exacerbate or mitigate.

The appropriate role for federalism cannot be determined abstractly but depends on specific contexts. In deeply divided societies, federalism may provide the only alternative to secession or civil war by allowing different communities substantial self-governance while maintaining overall political unity. In relatively homogeneous societies, federalism's costs—complexity, coordination difficulties, potential for discrimination—may outweigh benefits. Even where federalism is appropriate, its specific design requires careful attention to ensure it achieves intended goals while minimizing unintended consequences.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set14-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Federalism is always superior to unitary government structures" },
      { letter: "B", text: "Federalism involves complex trade-offs whose appropriateness depends on specific political and social contexts" },
      { letter: "C", text: "Unitary systems always produce better outcomes than federal arrangements" },
      { letter: "D", text: "All countries should adopt identical federal structures" },
      { letter: "E", text: "Constitutional design has no effect on political outcomes" },
    ],
    correctAnswer: "B",
    explanation: "The passage emphasizes that federalism 'involves complex trade-offs' and concludes 'the appropriate role for federalism cannot be determined abstractly but depends on specific contexts.'",
    difficulty: "medium",
    passageId: "rc14-p2",
  },
  {
    id: "rc-set14-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses Switzerland and Canada primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that these countries have no diversity" },
      { letter: "B", text: "illustrate how federalism can accommodate linguistic and cultural diversity through regional self-governance" },
      { letter: "C", text: "prove that federalism eliminates all regional conflicts" },
      { letter: "D", text: "demonstrate that federal systems never face any challenges" },
      { letter: "E", text: "show that diversity makes democratic government impossible" },
    ],
    correctAnswer: "B",
    explanation: "These examples illustrate the classical rationale that 'federal arrangements can allow regional self-governance on matters of particular local concern' while maintaining unity—Switzerland accommodating language diversity and Canada accommodating Quebec's Francophone identity.",
    difficulty: "easy",
    passageId: "rc14-p2",
  },
  {
    id: "rc-set14-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the 'laboratory of democracy' argument for federalism is limited because",
    answerChoices: [
      { letter: "A", text: "all policy experiments always succeed" },
      { letter: "B", text: "subnational units are not controlled experiments and competition may produce races to the bottom" },
      { letter: "C", text: "no policy innovations ever spread between jurisdictions" },
      { letter: "D", text: "differences in outcomes never reflect policy effects" },
      { letter: "E", text: "interjurisdictional competition always benefits all parties" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes the laboratory metaphor 'oversimplifies' because 'states and provinces are not controlled experiments' and 'interjurisdictional competition can produce races to the bottom.'",
    difficulty: "medium",
    passageId: "rc14-p2",
  },
  {
    id: "rc-set14-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, federalism as a constraint on governmental power",
    answerChoices: [
      { letter: "A", text: "always prevents all forms of tyranny without any costs" },
      { letter: "B", text: "creates multiple veto points but can also produce gridlock" },
      { letter: "C", text: "has no effect on the speed of policy responses" },
      { letter: "D", text: "eliminates all need for other constitutional checks" },
      { letter: "E", text: "makes government action always instantaneous" },
    ],
    correctAnswer: "B",
    explanation: "The passage states federalism 'create multiple veto points' that limit government reach, but 'this same feature can produce gridlock, making federal systems slow to address pressing problems.'",
    difficulty: "easy",
    passageId: "rc14-p2",
  },
  {
    id: "rc-set14-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that federalism's historical role in permitting Southern racial segregation demonstrates that",
    answerChoices: [
      { letter: "A", text: "federalism inherently requires discrimination" },
      { letter: "B", text: "decentralization always protects minority rights" },
      { letter: "C", text: "federal structures can enable subnational oppression of minorities, though this is not inevitable" },
      { letter: "D", text: "national governments never discriminate" },
      { letter: "E", text: "unitary systems prevent all forms of injustice" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents this historical example as showing federalism 'can enable subnational oppression of minorities' but emphasizes 'this is not an inherent feature of federalism but a risk that institutional design and political culture may either exacerbate or mitigate.'",
    difficulty: "hard",
    passageId: "rc14-p2",
  },
];

// Passage 3: Judicial Review and Democratic Theory
const passage3 = `The practice of judicial review—courts' authority to invalidate legislation as unconstitutional—presents a paradox for democratic theory. Unelected judges with lifetime tenure can overturn laws enacted by popularly elected legislatures, seemingly placing antimajoritarian constraints on democratic self-governance. Defenders justify this arrangement as protecting constitutional rights and maintaining the rule of law, while critics charge that it represents judicial usurpation of legislative authority. This debate raises fundamental questions about constitutionalism's relationship to democracy and whether rights protection requires insulation from majoritarian politics.

The countermajoritarian difficulty, as Alexander Bickel termed it, lies at the heart of concerns about judicial review. In a democracy, the argument goes, governmental decisions should reflect popular will as expressed through elections and implemented by accountable representatives. Yet judges who are appointed rather than elected, protected from removal except through impeachment, can nullify democratically enacted laws based on their interpretation of constitutional text that is often ambiguous and subject to competing readings. How can this be reconciled with democratic legitimacy?

Defenders offer several justifications. First, constitutions represent higher law—fundamental commitments that bind ordinary politics. Just as today's legislature cannot authorize tomorrow's legislature to eliminate civil liberties, current majorities should not override constitutional protections. Judicial review enforces these prior commitments against temporary majorities' encroachment. Second, protecting minority rights against majoritarian overreach may be essential to well-functioning democracy itself. If majorities can suppress political opposition, disenfranchise minorities, or prohibit dissent, democratic processes become corrupted. Judicial enforcement of rights enabling democratic participation—speech, association, voting—protects democracy from self-destruction.

Moreover, the contrast between democratic legislatures and antimajoritarian courts may be overdrawn. Legislatures are not perfectly responsive to majorities; rather, institutional features like committee systems, supermajority requirements, and agenda control give minorities significant blocking power. Campaign finance, lobbying, and unequal political resources further distort representation. Judges, while unelected, may sometimes be more attuned to constitutional principles that command broad public support than legislatures captured by narrow interests.

However, critics contend that these defenses inadequately address judicial review's tensions with democracy. The claim that courts merely enforce prior constitutional commitments downplays the interpretive discretion involved. Constitutional provisions like "equal protection" or "cruel and unusual punishment" do not self-apply; judges must interpret their meaning, inevitably importing contested values. When courts invalidate legislation based on such interpretations, they exercise political judgment that may differ from the interpretations elected representatives would reach.

The concern deepens when judicial review extends beyond protecting participation rights to substantive economic and social policy. Few object when courts protect voting rights or free speech—rights enabling democratic self-governance. But when courts invalidate minimum wage laws, environmental regulations, or healthcare policies based on contested constitutional interpretations, they restrict democratic decision-making on matters where reasonable people disagree and no obvious constitutional mandate exists. This raises questions about whether judicial review's legitimate scope should be narrowly confined to process-protecting rights rather than substantive policy.

Comparative perspective reveals that robust democracy need not require American-style judicial review. Many successful democracies lack constitutional courts with authority to invalidate legislation, instead relying on legislative self-restraint, political culture, and alternative constitutional protections. New Zealand and the Netherlands grant courts no power to override statutes, yet maintain strong rights protections. The Canadian notwithstanding clause allows legislatures to override certain judicial decisions temporarily, suggesting intermediate models between unconstrained judicial supremacy and pure parliamentary sovereignty.

The appropriate role for judicial review likely depends on broader institutional context. Where legislatures are relatively responsive, political culture supports rights, and constitutional amendment is feasible, extensive judicial review may be less necessary and its democratic costs more problematic. Where legislatures systematically neglect minority interests, political culture tolerates oppression, and constitutional rigidity prevents updating through amendment, judicial review may play essential protective functions. Rather than debating judicial review abstractly, we might focus on designing institutions that best balance rights protection with democratic accountability in particular political circumstances.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set14-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Judicial review is always perfectly compatible with democracy without any tensions" },
      { letter: "B", text: "Judicial review presents democratic paradoxes with competing justifications, and its appropriate role depends on institutional context" },
      { letter: "C", text: "All democracies must adopt identical judicial review arrangements" },
      { letter: "D", text: "Courts should have unlimited power to invalidate any legislation" },
      { letter: "E", text: "Legislatures are always perfectly responsive to democratic majorities" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents judicial review as presenting 'a paradox for democratic theory,' explores competing arguments, and concludes 'the appropriate role...likely depends on broader institutional context.'",
    difficulty: "medium",
    passageId: "rc14-p3",
  },
  {
    id: "rc-set14-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage introduces the concept of the 'countermajoritarian difficulty' primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all judicial decisions are illegitimate" },
      { letter: "B", text: "present the core tension between judicial review and democratic self-governance" },
      { letter: "C", text: "argue that majorities should never be constrained" },
      { letter: "D", text: "demonstrate that constitutional interpretation is always straightforward" },
      { letter: "E", text: "show that judicial review has no relationship to democracy" },
    ],
    correctAnswer: "B",
    explanation: "The countermajoritarian difficulty is introduced as lying 'at the heart of concerns about judicial review'—the tension between unelected judges overturning democratically enacted laws.",
    difficulty: "easy",
    passageId: "rc14-p3",
  },
  {
    id: "rc-set14-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, defenders of judicial review argue that protecting rights like speech and voting",
    answerChoices: [
      { letter: "A", text: "undermines democratic processes" },
      { letter: "B", text: "has no relationship to democracy's functioning" },
      { letter: "C", text: "may be essential to well-functioning democracy by preventing majorities from corrupting democratic processes" },
      { letter: "D", text: "proves that courts should control all policy areas" },
      { letter: "E", text: "demonstrates that elections should be eliminated" },
    ],
    correctAnswer: "C",
    explanation: "Defenders argue that 'protecting minority rights against majoritarian overreach may be essential to well-functioning democracy itself' and that judicial enforcement of rights enabling participation 'protects democracy from self-destruction.'",
    difficulty: "medium",
    passageId: "rc14-p3",
  },
  {
    id: "rc-set14-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, which of the following countries lacks constitutional courts with authority to invalidate legislation?",
    answerChoices: [
      { letter: "A", text: "The United States" },
      { letter: "B", text: "New Zealand and the Netherlands" },
      { letter: "C", text: "All democracies without exception" },
      { letter: "D", text: "No successful democracies" },
      { letter: "E", text: "Only authoritarian regimes" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states 'New Zealand and the Netherlands grant courts no power to override statutes, yet maintain strong rights protections.'",
    difficulty: "easy",
    passageId: "rc14-p3",
  },
  {
    id: "rc-set14-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that critics are particularly concerned when judicial review extends to",
    answerChoices: [
      { letter: "A", text: "protecting voting rights" },
      { letter: "B", text: "enforcing free speech protections" },
      { letter: "C", text: "substantive economic and social policy where no obvious constitutional mandate exists" },
      { letter: "D", text: "any area where legislatures have acted" },
      { letter: "E", text: "protecting participation rights that enable self-governance" },
    ],
    correctAnswer: "C",
    explanation: "The passage notes 'few object when courts protect voting rights or free speech' but 'when courts invalidate minimum wage laws, environmental regulations, or healthcare policies based on contested constitutional interpretations,' concerns deepen about restricting democracy.",
    difficulty: "hard",
    passageId: "rc14-p3",
  },
];

// Passage 4: Political Polarization and Partisan Identity
const passage4 = `The intensification of political polarization in the United States and other democracies represents one of the most significant developments in contemporary politics, yet understanding its causes, consequences, and potential remedies requires distinguishing several distinct phenomena often conflated under the polarization label. Elite polarization, partisan sorting, affective polarization, and policy polarization each describe different aspects of political division, and their relationships are more complex than commonly assumed.

Elite polarization refers to increasing ideological distance between political parties' leadership and elected officials. In the U.S. Congress, for instance, moderates have largely disappeared, with virtually no overlap between the most conservative Democrat and the most liberal Republican. Legislative voting patterns have become increasingly party-line, with bipartisan coalitions rare. This elite divergence is well-documented and has substantial effects on governance, making compromise more difficult and encouraging strategic obstruction.

Partisan sorting describes the process by which voters' ideological identities and partisan affiliations have become more closely aligned. Historically, American parties contained substantial ideological diversity—conservative Southern Democrats coexisted with liberal Northern Democrats; moderate Republicans occupied space between conservative party members and liberal Democrats. Over recent decades, conservatives have migrated to the Republican Party while liberals have consolidated within the Democratic Party, producing parties whose members are more ideologically homogeneous. This does not necessarily mean individual voters have become more extreme, but rather that party labels now provide clearer signals about ideological orientation.

Affective polarization concerns emotional attitudes toward opposing parties and their supporters. Beyond policy disagreements, partisans increasingly view the other party with hostility, distrust, and contempt. Surveys reveal growing unwillingness to befriend, date, or marry members of the opposing party, and increased comfort with residential and occupational segregation by partisanship. This emotional dimension may be more consequential than policy disagreement itself, as affective polarization can motivate partisan mobilization, justify antidemocratic measures against opponents perceived as threats, and corrode civic trust necessary for democratic functioning.

Importantly, mass policy polarization—the extent to which ordinary citizens hold increasingly extreme and divergent policy views—appears less pronounced than elite polarization. On many issues, public opinion has remained relatively moderate and stable even as elite rhetoric has intensified. Large segments of the public hold moderate or ambivalent views, and cross-party agreement on specific policy proposals often exceeds what partisan conflict suggests. However, affective polarization can exist independently of policy polarization: people may not disagree dramatically on policies yet still harbor intense partisan animosity.

The causes of polarization remain debated. Some scholars emphasize structural factors: geographic sorting as like-minded individuals cluster in politically homogeneous communities, media fragmentation enabling selective exposure to congenial information, and primary election systems that empower ideological activists. Others highlight elite choices: strategic polarization by party leadership pursuing electoral advantage, and advocacy groups enforcing ideological orthodoxy through primary challenges to moderates. Economic inequality and cultural anxiety about demographic change have also been implicated.

The consequences extend beyond legislative gridlock. Polarization affects how citizens process political information, with partisan identity increasingly shaping factual beliefs and even perception. When evidence contradicts partisan narratives, individuals often reject the evidence rather than revising beliefs—a phenomenon that becomes more pronounced as party attachments strengthen and affective polarization intensifies. This threatens the shared factual basis necessary for democratic deliberation, potentially creating parallel realities between partisan camps.

Potential remedies depend on accurately diagnosing the problem. If elite polarization primarily reflects sorted constituencies demanding ideological purity, institutional reforms targeting election rules may help—though evidence on reforms like top-two primaries remains mixed. If affective polarization drives dysfunction independently of policy disagreement, interventions promoting cross-partisan contact and emphasizing shared identities might be valuable. If structural factors like geographic sorting and media fragmentation are primary, more fundamental changes to information environments and residential patterns would be necessary. What seems clear is that polarization is multidimensional, and addressing it requires distinguishing which aspects are most consequential and most amenable to intervention.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set14-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that all forms of political polarization are identical" },
      { letter: "B", text: "distinguish different dimensions of polarization, explore their causes and consequences, and note that remedies depend on accurate diagnosis" },
      { letter: "C", text: "prove that polarization has no effects on democratic governance" },
      { letter: "D", text: "demonstrate that ordinary citizens are more polarized than political elites" },
      { letter: "E", text: "advocate a single universal solution to all polarization problems" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically distinguishes elite polarization, partisan sorting, affective polarization, and policy polarization, then examines causes, consequences, and the need for diagnosis-dependent remedies.",
    difficulty: "medium",
    passageId: "rc14-p4",
  },
  {
    id: "rc-set14-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses partisan sorting primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all voters have become ideological extremists" },
      { letter: "B", text: "explain how voters' ideological and partisan identities have aligned without necessarily becoming more extreme" },
      { letter: "C", text: "argue that parties still contain identical ideological diversity as historically" },
      { letter: "D", text: "demonstrate that party labels provide no information about ideology" },
      { letter: "E", text: "show that elite polarization is irrelevant" },
    ],
    correctAnswer: "B",
    explanation: "Partisan sorting is explained as the process where ideological and partisan identities align, producing more homogeneous parties, but 'this does not necessarily mean individual voters have become more extreme.'",
    difficulty: "easy",
    passageId: "rc14-p4",
  },
  {
    id: "rc-set14-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, affective polarization differs from policy polarization in that",
    answerChoices: [
      { letter: "A", text: "it measures ideological distance on substantive issues" },
      { letter: "B", text: "it concerns emotional attitudes that can exist independently of policy disagreement" },
      { letter: "C", text: "it only occurs among political elites" },
      { letter: "D", text: "it has no consequences for democratic functioning" },
      { letter: "E", text: "it is completely absent in contemporary politics" },
    ],
    correctAnswer: "B",
    explanation: "The passage states affective polarization 'concerns emotional attitudes toward opposing parties' and importantly notes 'affective polarization can exist independently of policy polarization: people may not disagree dramatically on policies yet still harbor intense partisan animosity.'",
    difficulty: "medium",
    passageId: "rc14-p4",
  },
  {
    id: "rc-set14-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, mass policy polarization appears",
    answerChoices: [
      { letter: "A", text: "more extreme than elite polarization on all dimensions" },
      { letter: "B", text: "less pronounced than elite polarization, with many citizens holding moderate views" },
      { letter: "C", text: "completely absent in all contemporary democracies" },
      { letter: "D", text: "identical to levels of affective polarization" },
      { letter: "E", text: "increasing more rapidly than all other forms of polarization" },
    ],
    correctAnswer: "B",
    explanation: "The passage states 'mass policy polarization...appears less pronounced than elite polarization' and notes 'large segments of the public hold moderate or ambivalent views.'",
    difficulty: "easy",
    passageId: "rc14-p4",
  },
  {
    id: "rc-set14-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward remedies for polarization can best be characterized as",
    answerChoices: [
      { letter: "A", text: "certainty that a single solution addresses all dimensions" },
      { letter: "B", text: "belief that no remedies are possible" },
      { letter: "C", text: "recognition that appropriate remedies depend on accurately diagnosing which dimensions are most consequential" },
      { letter: "D", text: "conviction that polarization requires no intervention" },
      { letter: "E", text: "enthusiasm for universal adoption of one specific institutional reform" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'potential remedies depend on accurately diagnosing the problem' and that 'addressing it requires distinguishing which aspects are most consequential and most amenable to intervention.'",
    difficulty: "hard",
    passageId: "rc14-p4",
  },
];

export const rcQuestionsSet14: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
