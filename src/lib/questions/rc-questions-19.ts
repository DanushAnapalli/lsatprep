// Reading Comprehension Questions Bank - Set 19
// Law - Contract & Property Law

import { Question } from "../lsat-types";

// PASSAGE 1: Efficient Breach Theory
const passage1 = `The doctrine of efficient breach represents one of contract law's most provocative concepts, emerging from law and economics scholarship to challenge traditional understandings of contractual obligation. The basic claim is straightforward: contract law should not aim to compel performance of all promises but rather to provide optimal incentives for welfare-maximizing behavior. When breaching a contract and paying damages would produce greater social welfare than performing, breach should be encouraged rather than condemned. This instrumental view treats contracts as economic calculations rather than moral commitments.

The theoretical justification rests on expectation damages, the standard remedy for breach. Expectation damages aim to put the non-breaching party in the position they would have occupied had the contract been performed. If A contracts to sell widgets to B for one hundred dollars, but C offers A two hundred dollars, A can breach the contract with B, sell to C, and compensate B for lost profits. If B's expectation was ten dollars profit, A pays B ten dollars, keeps ninety dollars additional profit, and still comes out ahead. Social welfare increases: C values the widgets more highly (evidenced by willingness to pay more), A is better off, and B is fully compensated. Traditional moral intuitions might condemn A's breach as promise-breaking, but economic analysis sees efficient reallocation.

Critics raise multiple objections. First, expectation damages rarely provide perfect compensation. Litigation costs, uncertainty about damage calculations, and limits on recoverable damages mean that non-breaching parties typically receive less than full restoration. If B incurs attorney fees, experiences delays, or suffers consequential damages that courts deem unforeseeable, B may not be truly indifferent between performance and breach-plus-damages. This systematic undercompensation means "efficient breaches" transfer wealth from promisees to promisors rather than achieving Pareto improvements where everyone is at least as well off.

Second, critics challenge the theory's reduction of contractual obligation to economic calculation. Promises, they argue, create moral obligations beyond welfare maximization. When parties enter contracts, they don't merely establish prices for their promises; they undertake commitments that should be kept absent excusing circumstances. This promissory view holds that betraying trust for profit, even with compensation, wrongs the promisee in ways that damages cannot remedy. The efficient breach theory, critics contend, misunderstands contracts' normative foundations by treating all breaches as morally equivalent to legitimate exercises of contractual options.

Third, the theory may undermine contracting itself. If parties anticipate that contracts will be breached whenever profitable, they may invest less in reliance or demand costly contractual protections. This could reduce overall contracting efficiency despite optimizing decisions about individual breaches. The theory also creates perverse incentives: it encourages promisors to search for breach opportunities rather than focusing on performance, potentially dissipating the very gains the theory purports to maximize.

Defenders respond that these criticisms mischaracterize efficient breach theory. The theory describes rather than prescribes: it explains why contract law uses damages rather than specific performance as the primary remedy, not necessarily endorses breach for profit. Moreover, sophisticated versions of the theory acknowledge that damages should include all actual costs, including litigation expenses and consequential damages, making truly efficient breaches rarer than crude versions suggest. The theory also recognizes contexts where expectation damages inadequately compensate—such as contracts for unique goods—and accordingly supports specific performance in those cases.

The efficient breach debate illuminates fundamental questions about contract law's purposes. Should law enforce morality, deter wrongdoing, and vindicate rights? Or should it establish incentive structures that promote economic efficiency? The answer likely depends on one's broader views about law's relationship to markets, morality, and social coordination. Contract law's actual doctrine occupies an uneasy middle ground, predominantly using expectation damages (consistent with efficient breach theory) while occasionally deploying specific performance and other remedies that suggest recognition of non-economic values.`;

const rcQuestions1: Question[] = [
  {
    id: "rc-set19-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Efficient breach theory is universally accepted and faces no criticisms" },
      { letter: "B", text: "Efficient breach theory proposes that welfare-maximizing breach should be encouraged, but faces moral and practical objections that reveal tensions in contract law's purposes" },
      { letter: "C", text: "Contract law should never allow breach under any circumstances" },
      { letter: "D", text: "Expectation damages always provide perfect compensation" },
      { letter: "E", text: "Economic analysis is irrelevant to understanding contract law" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents efficient breach theory's core claim about welfare-maximizing breach, then systematically presents criticisms (undercompensation, moral objections, undermining contracting), includes defenders' responses, and concludes that the debate 'illuminates fundamental questions about contract law's purposes.' The main point encompasses both the theory and the debates it provokes.",
    difficulty: "medium",
    passageId: "rc19-p1",
  },
  {
    id: "rc-set19-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses the widget example with sellers A, B, and C primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all contracts should always be breached" },
      { letter: "B", text: "illustrate how efficient breach theory claims breach can increase social welfare while compensating the non-breaching party" },
      { letter: "C", text: "demonstrate that widgets have no economic value" },
      { letter: "D", text: "argue that seller C is behaving unethically" },
      { letter: "E", text: "criticize expectation damages as a remedy" },
    ],
    correctAnswer: "B",
    explanation: "The widget example demonstrates efficient breach logic: A breaches with B to sell to C (who values widgets more), pays B's expectation damages, and everyone ends up better off in welfare terms. The example illustrates 'how economic analysis sees efficient reallocation.'",
    difficulty: "easy",
    passageId: "rc19-p1",
  },
  {
    id: "rc-set19-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics who emphasize the promissory view of contracts would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "Contracts create only economic calculations without any moral dimension" },
      { letter: "B", text: "Breaching for profit wrongs the promisee in ways that damages cannot remedy" },
      { letter: "C", text: "Expectation damages always fully compensate non-breaching parties" },
      { letter: "D", text: "All breaches are morally equivalent to exercising contractual options" },
      { letter: "E", text: "Economic efficiency is the only legitimate goal of contract law" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that promissory view critics argue 'betraying trust for profit, even with compensation, wrongs the promisee in ways that damages cannot remedy,' and that contracts 'create moral obligations beyond welfare maximization.'",
    difficulty: "medium",
    passageId: "rc19-p1",
  },
  {
    id: "rc-set19-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, expectation damages are designed to",
    answerChoices: [
      { letter: "A", text: "punish the breaching party with excessive penalties" },
      { letter: "B", text: "put the non-breaching party in the position they would have occupied had the contract been performed" },
      { letter: "C", text: "ensure that all breaches are financially impossible" },
      { letter: "D", text: "maximize the breaching party's profits" },
      { letter: "E", text: "eliminate all contracts" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Expectation damages aim to put the non-breaching party in the position they would have occupied had the contract been performed.'",
    difficulty: "easy",
    passageId: "rc19-p1",
  },
  {
    id: "rc-set19-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that defenders of efficient breach theory would argue that specific performance is appropriate when",
    answerChoices: [
      { letter: "A", text: "expectation damages adequately compensate for all harms" },
      { letter: "B", text: "contracts involve unique goods where damages cannot adequately compensate" },
      { letter: "C", text: "all contracts regardless of circumstances" },
      { letter: "D", text: "breach would be economically efficient" },
      { letter: "E", text: "never, under any circumstances" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'sophisticated versions of the theory...recognize contexts where expectation damages inadequately compensate—such as contracts for unique goods—and accordingly support specific performance in those cases.'",
    difficulty: "medium",
    passageId: "rc19-p1",
  },
];

// PASSAGE 2: The Bundle of Rights Theory of Property
const passage2 = `Property law traditionally conceives of ownership as a "bundle of rights"—a collection of distinct legal interests including the rights to possess, use, exclude others, and transfer. This metaphor, while ubiquitous in legal education and scholarship, represents a significant departure from earlier conceptions of property as involving relationships between persons and things. The bundle of rights conception recharacterizes property as relationships among persons regarding things, emphasizing that what we call "ownership" is actually a complex assemblage of legal entitlements, any of which can be separated, qualified, or redistributed.

This analytical framework has proven remarkably flexible. It explains how ownership can be divided across time (through devices like life estates and remainders), divided among multiple simultaneous holders (through co-tenancy arrangements), and divided by type of interest (separating surface rights from mineral rights, or possessory rights from security interests). The framework also accommodates the reality that ownership is never absolute; all property rights are subject to limitations ranging from zoning restrictions to nuisance law to takings for public use. By disaggregating ownership into constituent sticks in the bundle, the metaphor makes property's complexity tractable.

However, the bundle of rights conception faces significant criticisms. Some argue that by fragmenting ownership into disconnected rights, the metaphor obscures what makes property distinctive. If property is merely a collection of legal relations like those in contract or tort law, what makes it property? Critics suggest that ownership involves a distinctive kind of relationship to things—not reducible to individual sticks—characterized by a general right to determine how resources are used. This right of exclusive control, rather than any particular enumerated entitlements, constitutes property's core.

The political implications of these competing conceptions are significant. The bundle metaphor appears ideologically neutral—simply describing property's components without privileging any particular configuration. But critics note that treating ownership as an arbitrary collection of separable rights makes property appear infinitely malleable. If ownership is just a bundle of sticks, why not redistribute particular sticks according to social utility? This reasoning supports expansive regulation: restrictions on property use merely remove certain sticks while leaving others intact, thus not truly limiting "property" in any fundamental sense.

Conversely, critics on the left argue that the bundle metaphor, despite apparent neutrality, serves conservative ends by individualizing property relations. By focusing on owners' rights against others rather than on social relationships that constitute property, the metaphor obscures how property institutions distribute power and create dependencies. The framework treats property as conceptually prior to regulation, with government restrictions appearing as external impositions on pre-existing ownership rather than as constitutive elements of the property system itself.

Recent scholarship has explored whether the bundle metaphor, despite its pedagogical utility, may actively mislead. Psychological research suggests that metaphors shape cognition in ways that extend beyond their literal content. People may understand property differently when conceived as a unified thing one owns versus a collection of separable rights. Property as a thing may trigger different intuitions about legitimacy, desert, and proper bounds than property as a bundle. These cognitive effects matter if they influence how judges decide cases, how citizens understand their entitlements, or how policymakers evaluate regulatory options.

An alternative "property as social institution" approach emphasizes that property rights emerge from and are sustained by social practices, legal systems, and background norms. On this view, focusing on individual rights—whether conceived as unified ownership or as a bundle—misses how property actually functions. Property is not merely rights that individuals hold, but a complex institution structuring social relationships and allocating decision-making authority. Understanding property requires examining not just formal legal entitlements but also the social contexts, power relationships, and normative frameworks within which those entitlements operate.

The continuing debate over how to conceptualize property reflects deeper questions about law's relationship to social organization. Is law primarily a system of individual entitlements, or is it better understood as constituting the frameworks within which social life proceeds? Different answers yield different approaches to property doctrine, different evaluations of regulatory legitimacy, and different visions of law's role in structuring economic relationships.`;

const rcQuestions2: Question[] = [
  {
    id: "rc-set19-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The bundle of rights metaphor is the only valid way to understand property" },
      { letter: "B", text: "The bundle of rights conception is flexible and useful but faces criticisms regarding its political implications and whether it accurately captures property's essential features" },
      { letter: "C", text: "Property rights should never be subject to any limitations" },
      { letter: "D", text: "All property should be collectively owned" },
      { letter: "E", text: "Metaphors have no effect on legal understanding" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the bundle of rights framework's flexibility and utility, then systematically discusses criticisms (obscuring property's distinctiveness, political implications from both sides, cognitive effects), and presents alternative approaches. The main point balances the framework's usefulness against significant criticisms and limitations.",
    difficulty: "medium",
    passageId: "rc19-p2",
  },
  {
    id: "rc-set19-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage mentions life estates and remainders primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all property should be divided temporally" },
      { letter: "B", text: "illustrate the bundle of rights framework's ability to explain how ownership can be divided across time" },
      { letter: "C", text: "prove that property cannot be owned by individuals" },
      { letter: "D", text: "criticize the bundle of rights metaphor" },
      { letter: "E", text: "demonstrate that property law is impossible to understand" },
    ],
    correctAnswer: "B",
    explanation: "Life estates and remainders are mentioned when discussing the bundle framework's flexibility: 'It explains how ownership can be divided across time (through devices like life estates and remainders),' illustrating one way the framework 'makes property's complexity tractable.'",
    difficulty: "easy",
    passageId: "rc19-p2",
  },
  {
    id: "rc-set19-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, critics who believe the bundle metaphor obscures property's distinctiveness would most likely argue that",
    answerChoices: [
      { letter: "A", text: "property consists solely of a collection of disconnected legal relations" },
      { letter: "B", text: "ownership involves a distinctive right of exclusive control not reducible to individual sticks" },
      { letter: "C", text: "property is identical to contract and tort law in all respects" },
      { letter: "D", text: "no limitations on property rights are ever justified" },
      { letter: "E", text: "the bundle metaphor perfectly captures property's nature" },
    ],
    correctAnswer: "B",
    explanation: "The passage states these critics 'suggest that ownership involves a distinctive kind of relationship to things—not reducible to individual sticks—characterized by a general right to determine how resources are used. This right of exclusive control...constitutes property's core.'",
    difficulty: "medium",
    passageId: "rc19-p2",
  },
  {
    id: "rc-set19-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the bundle of rights conception recharacterizes property as",
    answerChoices: [
      { letter: "A", text: "relationships between persons and things" },
      { letter: "B", text: "relationships among persons regarding things" },
      { letter: "C", text: "purely physical objects" },
      { letter: "D", text: "government ownership of all resources" },
      { letter: "E", text: "irrelevant to legal analysis" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the bundle of rights conception 'recharacterizes property as relationships among persons regarding things,' departing from 'earlier conceptions of property as involving relationships between persons and things.'",
    difficulty: "easy",
    passageId: "rc19-p2",
  },
  {
    id: "rc-set19-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the bundle of rights metaphor can best be described as",
    answerChoices: [
      { letter: "A", text: "uncritical endorsement without acknowledging any limitations" },
      { letter: "B", text: "complete rejection of the metaphor as worthless" },
      { letter: "C", text: "analytical assessment of both its utility and its criticisms from multiple perspectives" },
      { letter: "D", text: "certain that alternative conceptions are impossible" },
      { letter: "E", text: "advocating for immediate elimination of the metaphor" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the bundle metaphor's flexibility and utility, discusses criticisms from multiple perspectives (those who think it fragments property, those who see different political implications, concerns about cognitive effects), and presents alternative approaches. The tone is balanced analytical assessment without clear endorsement.",
    difficulty: "medium",
    passageId: "rc19-p2",
  },
];

// PASSAGE 3: Good Faith in Contract Performance
const passage3 = `The obligation of good faith and fair dealing, implied in every contract under modern American law, represents one of contract doctrine's most conceptually challenging requirements. Unlike express contractual terms that parties negotiate and agree upon, the good faith obligation is imposed by law regardless of parties' intentions. It constrains how parties may exercise their contractual rights, potentially preventing actions that would otherwise be permitted by a contract's explicit terms. Yet defining good faith's precise content—determining which actions it prohibits—has proven persistently difficult, generating ongoing debate about the doctrine's proper scope and justification.

The Uniform Commercial Code provides that "every contract...imposes an obligation of good faith in its performance and enforcement," defining good faith for merchants as "honesty in fact and the observance of reasonable commercial standards of fair dealing." This definition combines subjective honesty with objective reasonableness, but leaves considerable uncertainty about application. The Restatement (Second) of Contracts similarly recognizes the good faith obligation but defines it even more vaguely as "faithfulness to an agreed common purpose and consistency with the justified expectations of the other party."

Courts have identified various paradigmatic bad faith behaviors. Exercising contractual discretion to recapture opportunities that the contract allocated to the other party constitutes bad faith. For example, if an employment contract gives an employee bonuses based on sales but the employer fires the employee just before large commissions come due, solely to avoid paying them, courts find bad faith even if the contract permits at-will termination. Similarly, bad faith exists when a party exploits contractual omissions—gaps or ambiguities that parties did not address—in ways that undermine the contract's purpose or the other party's reasonable expectations.

However, distinguishing legitimate self-interest from bad faith remains difficult. Parties enter contracts to advance their interests, and contract law generally permits parties to act self-interestedly within contractual bounds. The good faith doctrine must identify when self-interested behavior crosses into impermissible opportunism. Some scholars propose that bad faith involves exploiting situations where the other party is vulnerable due to relationship-specific investments or other sources of contractual dependence. Others suggest that good faith prohibits acting solely to harm the other party without corresponding benefit to oneself—pure spite rather than rational self-interest.

The economic analysis of good faith focuses on filling gaps in incomplete contracts. All contracts are necessarily incomplete; parties cannot foresee and address every contingency. When unforeseen circumstances arise, parties with contractual discretion might exploit their position in ways that parties would not have agreed to ex ante had they anticipated the situation. The good faith obligation can be understood as enforcing the hypothetical deal parties would have struck: prohibiting opportunistic behavior that exploits contractual incompleteness while permitting actions consistent with the parties' presumed bargain.

This gap-filling theory faces objections. Critics note that determining what parties would have agreed to in circumstances they did not foresee involves substantial speculation and may simply import judges' own views about fairness. Moreover, if good faith merely enforces parties' actual intentions, it seems redundant with ordinary contract interpretation. Defenders respond that good faith operates differently: rather than discerning parties' specific intentions about particular terms, it enforces background norms of appropriate contractual behavior that parties implicitly incorporate by entering a contractual relationship.

An alternative view grounds good faith in relational contract theory, which emphasizes that many contracts create ongoing relationships rather than discrete exchanges. In relational contexts, parties may rely on each other in ways that create vulnerabilities. The good faith obligation protects against exploitation of these relationship-specific dependencies, maintaining the trust necessary for productive long-term cooperation. This view explains why good faith seems more salient in relational contexts like employment, franchises, and long-term supply contracts than in simple spot transactions.

The continuing uncertainty about good faith's foundations matters for doctrine. If good faith primarily fills gaps in incomplete contracts, it should apply broadly wherever discretion exists but be constrained by hypothetical bargain analysis. If instead it protects relationship-specific reliance, it should be more prominent in long-term relationships but potentially inapplicable to arm's-length spot transactions. Different theoretical groundings also affect whether good faith should expand beyond contracts—some argue it should apply throughout private law, while others see it as specific to voluntary contractual relationships. These theoretical debates directly shape how courts apply good faith in concrete cases, determining the balance between contractual freedom and obligation.`;

const rcQuestions3: Question[] = [
  {
    id: "rc-set19-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The good faith obligation is clearly defined and faces no conceptual challenges" },
      { letter: "B", text: "The good faith obligation is implied in all contracts but defining its content and theoretical grounding remains difficult and contested" },
      { letter: "C", text: "All self-interested behavior violates the good faith obligation" },
      { letter: "D", text: "Good faith should never be implied in contracts" },
      { letter: "E", text: "Economic analysis has definitively resolved all questions about good faith" },
    ],
    correctAnswer: "B",
    explanation: "The passage establishes that good faith is implied in all contracts, discusses paradigmatic violations, but emphasizes persistent difficulty in 'defining good faith's precise content,' explores competing theoretical accounts (gap-filling vs. relational), and concludes that 'theoretical debates directly shape how courts apply good faith.' The main point addresses both the doctrine's existence and its conceptual challenges.",
    difficulty: "medium",
    passageId: "rc19-p3",
  },
  {
    id: "rc-set19-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses the example of an employer firing an employee before commissions come due primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all employment contracts are invalid" },
      { letter: "B", text: "illustrate paradigmatic bad faith behavior where contractual discretion is used to recapture opportunities allocated to the other party" },
      { letter: "C", text: "prove that at-will employment should be prohibited" },
      { letter: "D", text: "demonstrate that good faith never applies to employment contracts" },
      { letter: "E", text: "criticize employees who seek commissions" },
    ],
    correctAnswer: "B",
    explanation: "The employment example illustrates that 'exercising contractual discretion to recapture opportunities that the contract allocated to the other party constitutes bad faith,' showing how courts find bad faith 'even if the contract permits at-will termination' when done solely to avoid paying earned commissions.",
    difficulty: "medium",
    passageId: "rc19-p3",
  },
  {
    id: "rc-set19-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, proponents of the economic gap-filling theory of good faith would most likely argue that",
    answerChoices: [
      { letter: "A", text: "all contracts are perfectly complete and contain no gaps" },
      { letter: "B", text: "good faith prohibits opportunistic exploitation of contractual incompleteness by enforcing the hypothetical deal parties would have struck" },
      { letter: "C", text: "parties should never be allowed to act in their self-interest" },
      { letter: "D", text: "good faith has no economic justification" },
      { letter: "E", text: "judges' personal views about fairness should always control" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that under economic analysis, 'the good faith obligation can be understood as enforcing the hypothetical deal parties would have struck: prohibiting opportunistic behavior that exploits contractual incompleteness while permitting actions consistent with the parties' presumed bargain.'",
    difficulty: "medium",
    passageId: "rc19-p3",
  },
  {
    id: "rc-set19-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the Uniform Commercial Code defines good faith for merchants as",
    answerChoices: [
      { letter: "A", text: "whatever the parties explicitly agree to in their contract" },
      { letter: "B", text: "honesty in fact and the observance of reasonable commercial standards of fair dealing" },
      { letter: "C", text: "always favoring the weaker party" },
      { letter: "D", text: "complete selflessness and altruism" },
      { letter: "E", text: "never exercising any contractual rights" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'The Uniform Commercial Code...defin[es] good faith for merchants as \"honesty in fact and the observance of reasonable commercial standards of fair dealing.\"'",
    difficulty: "easy",
    passageId: "rc19-p3",
  },
  {
    id: "rc-set19-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that relational contract theory would predict that good faith is",
    answerChoices: [
      { letter: "A", text: "equally applicable to all contracts regardless of their nature" },
      { letter: "B", text: "more salient in long-term relationships than in simple spot transactions" },
      { letter: "C", text: "irrelevant to employment and franchise contracts" },
      { letter: "D", text: "only applicable to contracts involving real estate" },
      { letter: "E", text: "never applicable to any commercial relationships" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that the relational view 'explains why good faith seems more salient in relational contexts like employment, franchises, and long-term supply contracts than in simple spot transactions,' indicating differential application based on relationship type.",
    difficulty: "medium",
    passageId: "rc19-p3",
  },
];

// PASSAGE 4: Adverse Possession and Property Rights
const passage4 = `Adverse possession—the doctrine permitting someone who occupies another's property for a statutorily specified period to acquire legal title—appears to contradict property law's fundamental commitments. Property law generally protects owners' rights and treats unauthorized use as trespass. Yet adverse possession rewards sustained trespass with ownership, effectively penalizing owners who fail to eject trespassers and transferring title without compensation or consent. This apparent anomaly has generated extensive debate about the doctrine's justification and proper scope.

The traditional justification emphasizes policy considerations rather than moral desert. Long-standing possession creates reliance interests: adverse possessors may improve property, invest in development, and build their lives around possession. Meanwhile, evidence of original ownership deteriorates with time, making title disputes increasingly difficult to resolve accurately. Adverse possession cuts off stale claims, providing repose and certainty. It also arguably promotes efficient land use by transferring title from owners who neglect property to possessors who actively use it, serving property law's broader goal of encouraging productive resource utilization.

However, these justifications face significant objections. The reliance argument seems to reward wrongdoing: why should legal protection extend to investments made in conscious knowledge that one lacks legal right? The evidentiary rationale applies poorly to modern contexts where comprehensive recording systems document title, making ancient claims no more difficult to establish than recent ones. The efficiency argument assumes that failure to monitor and eject trespassers indicates that owners value property less than possessors do, but owners may have legitimate reasons for non-use that do not reflect low valuation, such as holding land for future development or conservation.

Some scholars defend adverse possession on autonomy and personhood grounds derived from Hegelian property theory. On this view, property serves human flourishing by enabling people to embed their will in the external world. Adverse possessors who occupy, improve, and build their lives around property establish personality-based claims that may ultimately outweigh formal title holders' more abstract legal rights, particularly when title holders have abandoned any meaningful connection to the property. This justification makes adverse possession's moral foundations depend on comparative strength of the parties' connections to the property.

Critics respond that this autonomy argument proves too much. If adverse possessors' labor and connection to property justifies overriding title, why require the statutorily specified period? Shouldn't immediate improvement establish superior rights? Moreover, the personhood argument seems to privilege particular forms of property use—physical occupation and development—over other legitimate uses including conservation, speculation, or simply maintaining options. This bias toward active development reflects contentious value judgments about property's proper purposes.

The doctrine's specific requirements reveal additional conceptual tensions. Adverse possession requires that possession be "open and notorious," "continuous," "exclusive," "actual," and "hostile." The hostility requirement—that possession be without permission—ensures that consensual arrangements like leases do not ripen into ownership. Yet courts divide over whether "hostility" requires conscious claim of ownership or whether innocent trespassers (believing, perhaps due to boundary confusion, that they own the property) can adversely possess. The "good faith" requirement adopted by some jurisdictions rewards innocent trespassers while denying title to knowing trespassers, but this seems to invert normal moral intuitions that punish rather than reward mistakes.

The open and notorious requirement theoretically serves to put owners on notice, allowing them to protect their rights by ejecting trespassers. But courts often find possession sufficiently open and notorious even when owners could not reasonably be expected to discover it, particularly for large undeveloped tracts. This suggests that the doctrine's formal requirements may not actually serve their stated purposes, or that the doctrine pursues multiple, potentially conflicting objectives that cannot be coherently integrated.

The normative debates about adverse possession connect to broader questions about property's foundations. Should property rights be understood primarily as promoting economic efficiency, respecting personhood and autonomy, providing security and repose, or serving other values? Different philosophical commitments generate different intuitions about whether adverse possession represents sound policy or an unjustifiable departure from property law's core commitments. The doctrine's persistence despite its apparent anomalousness may reflect property law's pragmatic accommodation of multiple, sometimes competing values rather than derivation from a single coherent theory.`;

const rcQuestions4: Question[] = [
  {
    id: "rc-set19-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Adverse possession should be immediately abolished" },
      { letter: "B", text: "Adverse possession appears anomalous but has been justified on multiple grounds, each facing significant objections that reveal tensions in property law's foundations" },
      { letter: "C", text: "All trespassers should automatically acquire title to property" },
      { letter: "D", text: "Property owners have absolute rights that can never be limited" },
      { letter: "E", text: "Adverse possession is universally accepted without controversy" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents adverse possession as 'apparent anomaly,' discusses traditional justifications (reliance, evidence, efficiency) and alternative justifications (autonomy/personhood), presents objections to each, examines doctrinal tensions in requirements, and concludes that debates 'connect to broader questions about property's foundations.' The main point addresses the doctrine's anomalous character, competing justifications, and what this reveals about property theory.",
    difficulty: "medium",
    passageId: "rc19-p4",
  },
  {
    id: "rc-set19-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses the requirement that possession be 'open and notorious' primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that adverse possession always serves its stated purposes" },
      { letter: "B", text: "illustrate how doctrinal requirements may not actually serve their theoretical purposes, revealing conceptual tensions" },
      { letter: "C", text: "argue that all property should be acquired through adverse possession" },
      { letter: "D", text: "demonstrate that owners always have actual notice of trespassers" },
      { letter: "E", text: "support the efficiency justification for adverse possession" },
    ],
    correctAnswer: "B",
    explanation: "The open and notorious requirement is discussed to show that 'courts often find possession sufficiently open and notorious even when owners could not reasonably be expected to discover it,' suggesting 'the doctrine's formal requirements may not actually serve their stated purposes' or that it pursues 'potentially conflicting objectives.'",
    difficulty: "medium",
    passageId: "rc19-p4",
  },
  {
    id: "rc-set19-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, scholars who justify adverse possession on autonomy and personhood grounds would most likely argue that",
    answerChoices: [
      { letter: "A", text: "formal legal title should always prevail regardless of the parties' connection to property" },
      { letter: "B", text: "adverse possessors who establish personality-based claims through occupation and improvement may have rights that outweigh abstract legal title" },
      { letter: "C", text: "all forms of property use are equally valuable" },
      { letter: "D", text: "adverse possession should never be permitted" },
      { letter: "E", text: "efficiency is the only relevant consideration" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that on the autonomy view, 'adverse possessors who occupy, improve, and build their lives around property establish personality-based claims that may ultimately outweigh formal title holders' more abstract legal rights,' particularly when title holders have 'abandoned any meaningful connection to the property.'",
    difficulty: "medium",
    passageId: "rc19-p4",
  },
  {
    id: "rc-set19-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, which of the following is mentioned as a requirement for adverse possession?",
    answerChoices: [
      { letter: "A", text: "Possession must be with the owner's express written permission" },
      { letter: "B", text: "Possession must be 'open and notorious,' 'continuous,' 'exclusive,' 'actual,' and 'hostile'" },
      { letter: "C", text: "The possessor must pay market value to the owner" },
      { letter: "D", text: "Possession must be brief and intermittent" },
      { letter: "E", text: "The possessor must be related to the original owner" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Adverse possession requires that possession be \"open and notorious,\" \"continuous,\" \"exclusive,\" \"actual,\" and \"hostile.\"'",
    difficulty: "easy",
    passageId: "rc19-p4",
  },
  {
    id: "rc-set19-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward adverse possession can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified endorsement of the doctrine" },
      { letter: "B", text: "advocating for immediate abolition" },
      { letter: "C", text: "analytical examination of competing justifications and their limitations without clear advocacy" },
      { letter: "D", text: "certain that efficiency justifications are definitively correct" },
      { letter: "E", text: "dismissive of all theoretical analysis" },
    ],
    correctAnswer: "C",
    explanation: "The author presents multiple justifications (policy, autonomy), objections to each, examines doctrinal tensions, and concludes that the doctrine's persistence 'may reflect property law's pragmatic accommodation of multiple, sometimes competing values.' The tone is analytical examination without advocating for a particular position.",
    difficulty: "medium",
    passageId: "rc19-p4",
  },
];

export const rcQuestionsSet19: Question[] = [
  ...rcQuestions1,
  ...rcQuestions2,
  ...rcQuestions3,
  ...rcQuestions4,
];
