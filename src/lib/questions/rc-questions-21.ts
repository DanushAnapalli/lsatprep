// Reading Comprehension Questions Bank - Set 21
// Philosophy - Political Philosophy

import { Question } from "../lsat-types";

// PASSAGE 1: Rawls and the Original Position
const passage1 = `John Rawls's theory of justice, articulated in his 1971 work "A Theory of Justice," has dominated Anglo-American political philosophy for half a century. Rawls's central innovation was the "original position"—a hypothetical choice situation designed to model fair agreement on principles of justice. In the original position, parties choose principles to govern society's basic structure behind a "veil of ignorance" that prevents them from knowing their particular circumstances: their social position, natural endowments, conception of the good, or even their generation. This informational constraint ensures that chosen principles cannot be tailored to advantage particular individuals or groups, thereby modeling fairness.

Rawls argued that parties in the original position would select two principles. First, each person has equal right to the most extensive scheme of equal basic liberties compatible with similar liberty for others—establishing priority for political and civil freedoms. Second, social and economic inequalities must be arranged to benefit the least advantaged (the "difference principle") and attached to positions open to all under fair equality of opportunity. These principles, Rawls contended, would be chosen over utilitarian alternatives that might sacrifice some individuals' welfare to maximize aggregate utility, because parties behind the veil of ignorance would avoid risk, unwilling to gamble that they might be among those sacrificed.

Critics have challenged the original position from multiple directions. Utilitarians argue that Rawls's risk aversion assumption is arbitrary—why not assume parties would gamble on ending up advantaged, leading to principles permitting greater inequality? Libertarians like Robert Nozick object that the original position illegitimately assumes society's assets are available for redistribution, when in fact people's talents and holdings may carry pre-political moral entitlements that justice must respect. If individuals have rights to their natural endowments and voluntary acquisitions, then Rawls's difference principle—which treats advantages as common assets to be distributed for collective benefit—violates these rights.

Communitarian critics raise different objections. They argue that the original position's veil of ignorance, by stripping away knowledge of particular identities and conceptions of the good, presupposes an impoverished view of the self as independent of constitutive attachments and social roles. Real people derive their identities and values from communities, traditions, and relationships that the original position excludes. Moreover, different communities may reasonably embrace different principles of justice reflecting their distinct histories and values, yet Rawls's universalism seeks a single set of principles applicable across all liberal societies.

Feminist philosophers have noted that Rawls's focus on the basic structure of society—major political, economic, and social institutions—excludes the family from direct scrutiny under justice principles. Yet families are primary sites of inequality, resource distribution, and formation of citizens' capacities. Susan Okin argued that Rawls's framework should extend into the family, examining how its structure affects women's opportunities and life prospects. Rawls's later work acknowledged these concerns but maintained that the family's internal life requires different treatment than political and economic institutions, reflecting privacy values and the limits of justice.

Some critics question whether the original position succeeds even on its own terms. The veil of ignorance prevents parties from knowing their conceptions of the good, yet they must choose principles that protect their ability to pursue whatever ends they value. This requires assuming something about human psychology and values—that people care about basic goods like liberty, opportunity, and resources. But if the original position must impute particular motivations to make determinations possible, it may simply build in Rawlsian conclusions rather than deriving them from neutral starting points.

Defenders respond that the original position models rather than mimics actual agreement. It represents considered moral convictions about fairness—that principles shouldn't advantage some at others' expense, that morally arbitrary factors like race or natural talent shouldn't determine life prospects—in a systematic way. The test of the original position lies not in whether actual people would choose Rawlsian principles, but whether it captures moral intuitions we reflectively endorse. Through "reflective equilibrium," we adjust both our theoretical commitments and specific intuitions until achieving coherence.

The original position's influence extends beyond debates about its validity. It established a mode of theorizing—using idealized choice situations to model moral constraints—that subsequent philosophers have adapted. Contractualist approaches to ethics, deliberative democracy theories, and various liberal egalitarian frameworks employ variations of this methodology. Even critics who reject Rawls's conclusions often engage his framework, testifying to its intellectual power and centrality to contemporary political philosophy.`;

const rcQuestions1: Question[] = [
  {
    id: "rc-set21-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Rawls's original position is universally accepted without controversy" },
      { letter: "B", text: "Rawls's original position uses the veil of ignorance to model fair choice of justice principles, but faces diverse criticisms from multiple philosophical perspectives" },
      { letter: "C", text: "All political philosophers reject Rawls's theory entirely" },
      { letter: "D", text: "The original position perfectly mirrors how actual people make choices" },
      { letter: "E", text: "Rawls's theory has had no influence on subsequent philosophy" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Rawls's original position framework and the principles it generates, then systematically discusses criticisms from utilitarians, libertarians, communitarians, and feminists, before noting defenders' responses and the framework's influence. The main point addresses both the theory and its diverse critiques.",
    difficulty: "medium",
    passageId: "rc21-p1",
  },
  {
    id: "rc-set21-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions Robert Nozick primarily in order to",
    answerChoices: [
      { letter: "A", text: "endorse his complete rejection of all redistribution" },
      { letter: "B", text: "illustrate the libertarian objection that the original position assumes assets are available for redistribution when individuals may have pre-political rights" },
      { letter: "C", text: "argue that Rawls and Nozick agree on all points" },
      { letter: "D", text: "demonstrate that libertarians support the difference principle" },
      { letter: "E", text: "criticize libertarian political philosophy" },
    ],
    correctAnswer: "B",
    explanation: "Nozick is mentioned to illustrate how 'libertarians...object that the original position illegitimately assumes society's assets are available for redistribution, when in fact people's talents and holdings may carry pre-political moral entitlements that justice must respect.'",
    difficulty: "easy",
    passageId: "rc21-p1",
  },
  {
    id: "rc-set21-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, communitarian critics of Rawls would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "The self is completely independent of all social attachments" },
      { letter: "B", text: "People derive their identities from communities and traditions that the original position wrongly excludes" },
      { letter: "C", text: "Universal principles of justice are always preferable to community-specific values" },
      { letter: "D", text: "The veil of ignorance perfectly captures human identity" },
      { letter: "E", text: "Conceptions of the good are irrelevant to justice" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that communitarians 'argue that the original position's veil of ignorance...presupposes an impoverished view of the self as independent of constitutive attachments' and that 'real people derive their identities and values from communities, traditions, and relationships that the original position excludes.'",
    difficulty: "medium",
    passageId: "rc21-p1",
  },
  {
    id: "rc-set21-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, what does the veil of ignorance prevent parties in the original position from knowing?",
    answerChoices: [
      { letter: "A", text: "Anything whatsoever about human society" },
      { letter: "B", text: "Their particular circumstances including social position, natural endowments, conception of the good, or generation" },
      { letter: "C", text: "Basic principles of logic and reasoning" },
      { letter: "D", text: "That they are choosing principles of justice" },
      { letter: "E", text: "The difference between right and wrong" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'In the original position, parties choose principles to govern society's basic structure behind a \"veil of ignorance\" that prevents them from knowing their particular circumstances: their social position, natural endowments, conception of the good, or even their generation.'",
    difficulty: "easy",
    passageId: "rc21-p1",
  },
  {
    id: "rc-set21-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that defenders of Rawls's original position believe it should be evaluated based on whether",
    answerChoices: [
      { letter: "A", text: "actual people in real situations would choose Rawlsian principles" },
      { letter: "B", text: "it captures moral intuitions we reflectively endorse about fairness" },
      { letter: "C", text: "it maximizes aggregate utility" },
      { letter: "D", text: "libertarians find it convincing" },
      { letter: "E", text: "it requires no assumptions about human values" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that defenders argue 'the test of the original position lies not in whether actual people would choose Rawlsian principles, but whether it captures moral intuitions we reflectively endorse,' emphasizing the method of 'reflective equilibrium.'",
    difficulty: "medium",
    passageId: "rc21-p1",
  },
];

// PASSAGE 2: Positive and Negative Liberty
const passage2 = `Isaiah Berlin's famous essay "Two Concepts of Liberty" distinguished between negative liberty—freedom from interference—and positive liberty—freedom to be one's own master and achieve self-realization. This conceptual distinction has shaped political philosophy's understanding of freedom, yet Berlin's framework and the very distinction it draws have generated extensive debate about liberty's nature, value, and relationship to political institutions.

Negative liberty concerns the absence of obstacles, barriers, or constraints imposed by other people. One is free in the negative sense to the extent that no human action prevents one from acting as one might wish. This conception asks: what is the area within which the subject is left to do or be without interference by others? The wider this area, the more negative liberty one enjoys. Negative liberty requires only non-interference; it does not demand provision of means or capacities to exercise one's choices. A person may be negatively free to travel despite lacking money for transportation, because no one prevents the travel—poverty constrains but human interference does not.

Positive liberty, by contrast, concerns self-mastery and self-realization. To be free in the positive sense is to be one's own master, to act on reasons and motives that are truly one's own rather than being driven by irrational desires or external forces. This conception asks: what or who controls my actions? Who makes decisions affecting my life? Positive liberty may require not merely absence of interference but presence of capacities, resources, and conditions enabling autonomous self-direction. Educational opportunities, material resources, and psychological self-awareness all contribute to positive liberty by enabling genuine self-determination.

Berlin famously warned that positive liberty concepts contain authoritarian potential. If freedom means realizing one's "true" or "rational" self—as distinct from empirical desires that may be corrupted by ignorance or irrationality—then authorities might claim to liberate people by forcing them toward their true interests against their expressed preferences. The rational self may be defined by reference to allegedly objective ends that individuals ought to pursue, permitting coercion in freedom's name. This, Berlin argued, explains how certain political movements claiming to expand human freedom produced totalitarian oppression: by identifying freedom with achieving particular collective goals or states of consciousness, they justified eliminating dissent as removing obstacles to "real" freedom.

Critics of Berlin's distinction argue that he caricatured positive liberty and that the negative-positive distinction cannot bear the theoretical weight Berlin assigned it. Positive liberty concepts need not embrace metaphysically dubious "true selves" or authoritarian implications. Demanding conditions for autonomous choice—education, minimal economic security, protection from manipulation—expands freedom without licensing tyranny. Moreover, the distinction between interference and inability-to-act may be less clear than Berlin suggested. When background social and economic structures systematically disadvantage some groups, does this constitute mere inability or a form of interference? If employer power or economic necessity compels workers to accept certain conditions, are they negatively free because no literal coercion occurs?

Charles Taylor and others argue that negative liberty's focus on non-interference obscures important questions about what freedoms matter. Not all constraints are equally significant; freedom from torture differs fundamentally from freedom to park anywhere. A political system might provide extensive negative liberty regarding trivial choices while restricting crucial freedoms, yet count as highly free under negative liberty conceptions. Positive liberty frameworks can distinguish between valuable and trivial freedoms by reference to human flourishing or self-realization, though this requires controversial judgments about human nature and the good life.

Some contemporary theorists propose republican conceptions of liberty that differ from both negative and positive liberty. Republican freedom consists in non-domination—not being subject to arbitrary power of others—rather than merely non-interference. One might experience no actual interference yet lack freedom if vulnerable to others' arbitrary will. Conversely, necessary and non-arbitrary constraints (like laws protecting everyone's freedom) do not reduce liberty. This framework addresses concerns about both negative liberty's narrowness and positive liberty's authoritarian potential, though it faces its own challenges in specifying what makes power "arbitrary" and how to measure domination.

The debates about liberty concepts matter for political practice. Different conceptions generate different priorities: negative liberty emphasizes limiting state power and protecting private spheres from interference; positive liberty may justify active state intervention to develop citizens' capacities and remove obstacles to self-realization; republican liberty focuses on preventing domination through institutional checks on arbitrary power. These different emphases shape views about everything from economic regulation to education policy to constitutional structure. Beneath conceptual debates lie substantive disagreements about human nature, the good society, and appropriate relationships between individuals and collective institutions—disagreements that philosophical analysis can clarify but perhaps cannot definitively resolve.`;

const rcQuestions2: Question[] = [
  {
    id: "rc-set21-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Berlin's distinction between negative and positive liberty is universally accepted" },
      { letter: "B", text: "Berlin distinguished negative liberty (freedom from interference) from positive liberty (self-mastery), but this distinction faces significant criticisms and alternative conceptions have emerged" },
      { letter: "C", text: "Positive liberty always leads to totalitarianism" },
      { letter: "D", text: "All liberty concepts are completely identical" },
      { letter: "E", text: "Liberty is irrelevant to political philosophy" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Berlin's negative-positive distinction, discusses his concerns about positive liberty's authoritarian potential, presents criticisms of the distinction, introduces republican liberty as an alternative, and notes how different conceptions have practical implications. The main point encompasses the distinction, criticisms, and alternatives.",
    difficulty: "medium",
    passageId: "rc21-p2",
  },
  {
    id: "rc-set21-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses the example of traveling without money for transportation primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that poverty is never a constraint on liberty" },
      { letter: "B", text: "illustrate how negative liberty focuses on interference rather than capacity, so one can be negatively free despite lacking means" },
      { letter: "C", text: "demonstrate that all conceptions of liberty are identical" },
      { letter: "D", text: "prove that positive liberty is authoritarian" },
      { letter: "E", text: "criticize people who lack transportation funds" },
    ],
    correctAnswer: "B",
    explanation: "The transportation example illustrates that under negative liberty, 'a person may be negatively free to travel despite lacking money for transportation, because no one prevents the travel—poverty constrains but human interference does not,' showing the distinction between interference and inability.",
    difficulty: "easy",
    passageId: "rc21-p2",
  },
  {
    id: "rc-set21-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics who challenge Berlin's distinction would most likely argue that",
    answerChoices: [
      { letter: "A", text: "positive liberty necessarily embraces totalitarianism" },
      { letter: "B", text: "demanding conditions for autonomous choice can expand freedom without licensing tyranny" },
      { letter: "C", text: "negative liberty should be the only recognized form of freedom" },
      { letter: "D", text: "the negative-positive distinction is perfectly clear and unproblematic" },
      { letter: "E", text: "background social structures never affect freedom" },
    ],
    correctAnswer: "B",
    explanation: "The passage states critics argue that 'positive liberty concepts need not embrace metaphysically dubious \"true selves\" or authoritarian implications. Demanding conditions for autonomous choice—education, minimal economic security, protection from manipulation—expands freedom without licensing tyranny.'",
    difficulty: "medium",
    passageId: "rc21-p2",
  },
  {
    id: "rc-set21-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, republican conceptions of liberty define freedom as",
    answerChoices: [
      { letter: "A", text: "complete absence of all laws and constraints" },
      { letter: "B", text: "non-domination or not being subject to arbitrary power of others" },
      { letter: "C", text: "identical to negative liberty" },
      { letter: "D", text: "requiring extensive state interference in all decisions" },
      { letter: "E", text: "maximizing total societal wealth" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Republican freedom consists in non-domination—not being subject to arbitrary power of others—rather than merely non-interference.'",
    difficulty: "easy",
    passageId: "rc21-p2",
  },
  {
    id: "rc-set21-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward Berlin's warning about positive liberty's authoritarian potential can best be described as",
    answerChoices: [
      { letter: "A", text: "complete acceptance without acknowledging critics' responses" },
      { letter: "B", text: "presenting Berlin's warning while also noting critics argue positive liberty need not have authoritarian implications" },
      { letter: "C", text: "total dismissal of the concern" },
      { letter: "D", text: "certain that positive liberty always leads to totalitarianism" },
      { letter: "E", text: "advocating that the distinction should never be discussed" },
    ],
    correctAnswer: "B",
    explanation: "The author presents Berlin's warning that positive liberty 'contain[s] authoritarian potential' and examples of movements that 'produced totalitarian oppression,' but then notes critics 'argue that he caricatured positive liberty' and that such concepts 'need not embrace...authoritarian implications.' The attitude is balanced presentation.",
    difficulty: "medium",
    passageId: "rc21-p2",
  },
];

// PASSAGE 3: Deliberative Democracy
const passage3 = `Deliberative democracy represents both a normative ideal and an empirical research program in contemporary political theory. At its core lies a simple but radical claim: political decisions should emerge from public deliberation among free and equal citizens rather than merely aggregating pre-formed preferences through voting or reflecting elite determinations. Legitimate political authority derives not from maximizing preference satisfaction or following tradition, but from decisions reached through inclusive reasoning processes where participants exchange arguments aimed at persuading one another on the merits.

The deliberative ideal emphasizes argument over bargaining. In bargaining, parties with fixed preferences negotiate compromises based on relative power. In deliberation, participants offer reasons that others could accept, exposing their positions to critical scrutiny and potentially revising their views in light of better arguments. This distinction implies that political discourse should be reason-giving rather than mere assertion of interests. Acceptable reasons must be public reasons—justifications that others could endorse regardless of their particular comprehensive moral, religious, or philosophical doctrines.

The epistemic defense of deliberative democracy holds that deliberation tracks truth or justice better than alternative decision procedures. By pooling information, exposing reasoning to criticism, and filtering out partial or biased perspectives, deliberation among diverse participants approximates ideal impartial judgment. Just as scientific communities advance knowledge through peer review and critical discourse, political communities may reach better decisions through inclusive deliberation than through any single individual's reasoning or through aggregating unreflective preferences. This defense presumes that political questions have better or worse answers, not merely different preference orderings, and that argument can move participants toward these better answers.

Critics challenge both deliberative democracy's feasibility and desirability. Empirical studies question whether actual deliberation lives up to theoretical ideals. Deliberation may amplify existing inequalities if some participants possess greater rhetorical skills, confidence, or social status that allows them to dominate discussions. Rather than neutralizing power differences through reason-giving, deliberation may simply disguise them. Those skilled in dominant discourse modes—educated, verbally fluent, culturally mainstream—exercise disproportionate influence, while others' perspectives are marginalized or dismissed as inadequately reasoned.

Lynn Sanders and others argue that deliberation's emphasis on dispassionate reason-giving disadvantages groups whose political claims emerge from situated experience of oppression. Testimony about injustice may not fit deliberative norms of generalized, unemotional argumentation. Moreover, requiring that claims be justifiable by public reasons accessible to all may exclude valid justice claims that depend on particular experiences or standpoints. If deliberative ideals reflect privileged groups' communicative norms, then deliberation reinforces rather than challenges existing hierarchies.

The scope of legitimate deliberation also raises questions. Must all political issues be resolved through deliberation, or are some appropriately decided through voting, expertise, or constitutional constraints? Deliberation is time-intensive and cognitively demanding; applying it universally seems impractical. Yet if deliberation applies only selectively, what determines appropriate scope? Some deliberative theorists propose that deliberation should occur particularly for fundamental decisions about political structure and basic justice, while routine policy might combine deliberative and aggregative elements.

Another challenge concerns persistent disagreement. Even ideal deliberation among well-intentioned, fully informed citizens may yield irresolvable disagreement about values and priorities. What should happen when deliberation fails to produce consensus? Standard answers—majority vote or continued negotiation—seem to abandon deliberative democracy's transformative ambitions. If voting ultimately decides, has deliberation merely delayed inevitable preference aggregation? The "deliberative opinion poll" methodology attempts to address this by showing that extended informed deliberation shifts preferences significantly, suggesting that even without full consensus, deliberation improves collective judgment.

Recent work explores deliberative democracy's institutional implications. Beyond face-to-face citizen assemblies, which advocates include minipublics, deliberative polling, and participatory budgeting, theorists ask how mass democracies' representative institutions might be redesigned to promote deliberation. Proposals include legislative reforms requiring that bills be justified through public reasons, media regulations ensuring substantive political debate, and civic education cultivating deliberative capacities. Yet institutional design for deliberation faces trade-offs: measures that ensure inclusion may reduce decisiveness, while those promoting efficiency may exclude valuable perspectives.

The deliberative turn has transformed democratic theory by focusing attention on political legitimacy's communicative foundations. Yet whether deliberative democracy represents an achievable ideal for reforming existing institutions or primarily a regulative idea for critiquing shortfalls remains contested. The gap between deliberative ideals and political realities raises questions about whether theory should primarily guide incremental reforms toward greater deliberation or fundamentally challenge political structures that make genuine deliberation impossible.`;

const rcQuestions3: Question[] = [
  {
    id: "rc-set21-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Deliberative democracy has been perfectly implemented and faces no challenges" },
      { letter: "B", text: "Deliberative democracy proposes that legitimate decisions emerge from public deliberation, but faces criticisms about feasibility, inequality, and persistent disagreement" },
      { letter: "C", text: "All political decisions should be made by unelected experts" },
      { letter: "D", text: "Voting is always superior to deliberation" },
      { letter: "E", text: "Deliberative democracy has had no influence on political theory" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents deliberative democracy's core claim about decisions emerging from deliberation, discusses epistemic defenses, then systematically presents criticisms (inequality amplification, marginalization of certain claims, persistent disagreement), and explores institutional questions. The main point encompasses both the ideal and its challenges.",
    difficulty: "medium",
    passageId: "rc21-p3",
  },
  {
    id: "rc-set21-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses scientific communities and peer review primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that science and politics are identical" },
      { letter: "B", text: "support the epistemic defense of deliberation by analogizing to how scientific discourse advances knowledge" },
      { letter: "C", text: "criticize the peer review process" },
      { letter: "D", text: "demonstrate that deliberation never works" },
      { letter: "E", text: "prove that only scientists should make political decisions" },
    ],
    correctAnswer: "B",
    explanation: "The scientific community analogy supports the epistemic defense: 'Just as scientific communities advance knowledge through peer review and critical discourse, political communities may reach better decisions through inclusive deliberation,' illustrating how deliberation might track truth better than alternatives.",
    difficulty: "easy",
    passageId: "rc21-p3",
  },
  {
    id: "rc-set21-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, critics like Lynn Sanders would most likely argue that deliberative norms",
    answerChoices: [
      { letter: "A", text: "perfectly accommodate all forms of political expression" },
      { letter: "B", text: "may disadvantage groups whose justice claims emerge from situated experience and don't fit norms of dispassionate argumentation" },
      { letter: "C", text: "always eliminate all inequalities" },
      { letter: "D", text: "should never include emotional testimony" },
      { letter: "E", text: "are completely neutral with respect to all social groups" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Sanders and others 'argue that deliberation's emphasis on dispassionate reason-giving disadvantages groups whose political claims emerge from situated experience of oppression. Testimony about injustice may not fit deliberative norms of generalized, unemotional argumentation.'",
    difficulty: "medium",
    passageId: "rc21-p3",
  },
  {
    id: "rc-set21-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, what is the key difference between deliberation and bargaining?",
    answerChoices: [
      { letter: "A", text: "There is no difference between them" },
      { letter: "B", text: "In deliberation participants offer reasons that others could accept and may revise views, while in bargaining parties with fixed preferences negotiate based on power" },
      { letter: "C", text: "Bargaining always produces better outcomes" },
      { letter: "D", text: "Deliberation involves no reasoning whatsoever" },
      { letter: "E", text: "Bargaining never occurs in politics" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly contrasts them: 'In bargaining, parties with fixed preferences negotiate compromises based on relative power. In deliberation, participants offer reasons that others could accept, exposing their positions to critical scrutiny and potentially revising their views in light of better arguments.'",
    difficulty: "easy",
    passageId: "rc21-p3",
  },
  {
    id: "rc-set21-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that when deliberation fails to produce consensus, this poses a challenge because",
    answerChoices: [
      { letter: "A", text: "it proves deliberation is worthless in all contexts" },
      { letter: "B", text: "resorting to voting or negotiation seems to abandon deliberative democracy's transformative ambitions" },
      { letter: "C", text: "consensus is always achievable if people try hard enough" },
      { letter: "D", text: "disagreement never occurs in deliberation" },
      { letter: "E", text: "voting is prohibited in democracies" },
    ],
    correctAnswer: "B",
    explanation: "The passage states: 'What should happen when deliberation fails to produce consensus? Standard answers—majority vote or continued negotiation—seem to abandon deliberative democracy's transformative ambitions. If voting ultimately decides, has deliberation merely delayed inevitable preference aggregation?'",
    difficulty: "medium",
    passageId: "rc21-p3",
  },
];

// PASSAGE 4: Cosmopolitanism and Global Justice
const passage4 = `Cosmopolitanism in political philosophy holds that all human beings, regardless of nationality or citizenship, belong to a single moral community and that principles of justice apply globally rather than merely within states. This universalist ethical stance generates controversial claims about global redistribution, humanitarian intervention, and the moral significance of national borders. Against nationalist and communitarian views that privilege special obligations to compatriots, cosmopolitans argue that national boundaries have no fundamental moral weight—they may be practically important but do not determine the scope of justice.

Contemporary cosmopolitan theories divide over scope and stringency. Moral cosmopolitanism asserts that all persons are objects of moral concern and that nationality should not affect basic moral standing. This relatively weak claim is widely accepted: even nationalists typically acknowledge duties to foreigners, though perhaps weaker than duties to compatriots. Strong cosmopolitanism goes further, claiming that principles of distributive justice—not merely basic human rights—apply globally. If inequality within societies requires justification and redistribution, why should global inequalities escape such requirements merely because they cross borders? Thomas Pogge argues that global economic structures actively harm the poor, creating not merely duties of assistance but obligations to cease participation in unjust systems.

The debate over global distributive justice turns partly on reciprocity and coercion. John Rawls, though a liberal egalitarian domestically, limited egalitarian justice to fellow citizens. He argued that justice's stringent demands arise from citizens' reciprocal participation in cooperative schemes maintained by coercive political authority. International relations lack comparable cooperation and coercion, so while all persons deserve respect and basic rights, redistributive justice does not apply globally. Critics respond that globalization creates worldwide economic cooperation and coercive institutions (like trade rules and intellectual property regimes) that generate justice obligations analogous to domestic ones.

Some cosmopolitans propose global institutional reforms: a world government, strengthened international courts, or global taxation funding redistribution. These proposals face obvious practical obstacles—states jealously guard sovereignty, populations lack global solidarity, and enforcement mechanisms are weak. More fundamentally, critics question whether global governance could be democratic at the requisite scale or whether it would become unaccountable bureaucracy divorced from popular control. The principle of subsidiarity—that decisions should be made at the lowest effective level—suggests limitations on centralized global institutions even if cosmopolitan moral claims are accepted.

Statist and nationalist critics argue that cosmopolitanism misunderstands political community's moral significance. Special obligations to compatriots are not merely contingent arrangements but reflect constitutive relationships that ground justice claims. Citizens who participate in shared institutions, accept mutual authority, and constitute a demos together have justice obligations to each other that differ in kind from obligations to strangers. National self-determination has intrinsic value, not merely instrumental value in promoting welfare. These arguments attempt to show that favoring compatriots is not mere prejudice but recognition of morally relevant relationships.

Cultural and religious particularists raise different objections. Cosmopolitanism's universalism presumes that a single set of principles applies across radically different societies with distinct traditions, values, and ways of life. Yet moral truth may be plural, with different communities legitimately organizing around different principles reflecting their particular histories and identities. Imposing Western liberal principles globally constitutes cultural imperialism rather than universal justice. Cosmopolitans respond that this relativism provides cover for oppression: appeals to cultural difference have justified denying women's rights, maintaining rigid hierarchies, and restricting basic freedoms. Some principles—like prohibiting torture or protecting basic subsistence—are genuinely universal, not culturally relative.

The question of "moral remainders" affects cosmopolitan-nationalist debates. Even if cosmopolitanism is correct that national boundaries have no fundamental moral weight, many find it psychologically and practically impossible to care equally about all humans. Bernard Williams argued that demanding impartial concern for all humanity alienates people from personal projects and relationships that give life meaning. Cosmopolitans might respond that moral demands needn't match motivational psychology: morality sometimes requires transcending natural partiality. Yet if moral requirements are systematically impossible to meet, this suggests something wrong with the theory rather than with human nature.

Contemporary circumstances make cosmopolitan questions increasingly urgent. Climate change, pandemic disease, nuclear weapons, and mass migration create problems that transcend borders, requiring coordinated global responses. Whether existing state-based systems can address these challenges, or whether they require reconceiving political authority and moral obligation along cosmopolitan lines, remains contested. The tension between cosmopolitan moral ideals and political realities of sovereignty and nationalism will likely intensify as global interconnection deepens while nationalist reactions strengthen. How philosophy navigates this tension—whether cosmopolitanism represents a realistic guide for institutional reform or primarily a critical standard exposing existing arrangements' moral inadequacy—remains a central question for political theory.`;

const rcQuestions4: Question[] = [
  {
    id: "rc-set21-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Cosmopolitanism is universally accepted without objections" },
      { letter: "B", text: "Cosmopolitanism holds that justice principles apply globally regardless of nationality, but faces challenges from nationalist, statist, and particularist perspectives" },
      { letter: "C", text: "National borders are the only morally relevant factor" },
      { letter: "D", text: "All global problems have been definitively solved" },
      { letter: "E", text: "Cosmopolitanism has had no influence on political philosophy" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents cosmopolitanism's core universalist claim, distinguishes weak and strong versions, discusses debates over global distributive justice, presents statist/nationalist objections, addresses particularist concerns, and notes tension between ideals and political realities. The main point encompasses cosmopolitanism and its various challenges.",
    difficulty: "medium",
    passageId: "rc21-p4",
  },
  {
    id: "rc-set21-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses Thomas Pogge primarily in order to",
    answerChoices: [
      { letter: "A", text: "illustrate the view that global economic structures actively harm the poor, creating obligations beyond mere assistance" },
      { letter: "B", text: "argue that no one has any global obligations" },
      { letter: "C", text: "demonstrate that cosmopolitanism is universally rejected" },
      { letter: "D", text: "prove that all inequality is justified" },
      { letter: "E", text: "criticize all economic systems" },
    ],
    correctAnswer: "A",
    explanation: "Pogge is mentioned to exemplify strong cosmopolitan claims: 'Thomas Pogge argues that global economic structures actively harm the poor, creating not merely duties of assistance but obligations to cease participation in unjust systems.'",
    difficulty: "easy",
    passageId: "rc21-p4",
  },
  {
    id: "rc-set21-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, Rawls's position on global justice differs from his domestic theory because he believed",
    answerChoices: [
      { letter: "A", text: "justice applies equally at all levels without distinction" },
      { letter: "B", text: "stringent distributive justice requirements arise from reciprocal participation and coercion present domestically but lacking internationally" },
      { letter: "C", text: "no one deserves any rights" },
      { letter: "D", text: "global inequality is completely irrelevant" },
      { letter: "E", text: "nationalism is the only valid political philosophy" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Rawls 'argued that justice's stringent demands arise from citizens' reciprocal participation in cooperative schemes maintained by coercive political authority. International relations lack comparable cooperation and coercion,' explaining why he limited egalitarian justice domestically while acknowledging basic global rights.",
    difficulty: "medium",
    passageId: "rc21-p4",
  },
  {
    id: "rc-set21-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, what principle suggests limitations on centralized global institutions?",
    answerChoices: [
      { letter: "A", text: "The principle of absolute sovereignty" },
      { letter: "B", text: "The principle of subsidiarity, that decisions should be made at the lowest effective level" },
      { letter: "C", text: "The principle that all decisions must be global" },
      { letter: "D", text: "The principle of unlimited centralization" },
      { letter: "E", text: "The principle of cultural relativism" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'The principle of subsidiarity—that decisions should be made at the lowest effective level—suggests limitations on centralized global institutions even if cosmopolitan moral claims are accepted.'",
    difficulty: "easy",
    passageId: "rc21-p4",
  },
  {
    id: "rc-set21-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the cosmopolitanism-nationalism debate can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified endorsement of cosmopolitanism" },
      { letter: "B", text: "complete rejection of all cosmopolitan claims" },
      { letter: "C", text: "balanced presentation of cosmopolitan arguments and various objections without clear advocacy" },
      { letter: "D", text: "certain that the debate has been definitively resolved" },
      { letter: "E", text: "dismissive of philosophical analysis" },
    ],
    correctAnswer: "C",
    explanation: "The author presents cosmopolitan claims (weak and strong), discusses objections from multiple perspectives (nationalist, statist, particularist, psychological), and concludes that how to navigate tensions 'remains contested' and is 'a central question.' The tone is balanced analytical presentation without advocacy.",
    difficulty: "medium",
    passageId: "rc21-p4",
  },
];

export const rcQuestionsSet21: Question[] = [
  ...rcQuestions1,
  ...rcQuestions2,
  ...rcQuestions3,
  ...rcQuestions4,
];
