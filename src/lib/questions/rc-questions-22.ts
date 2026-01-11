// Reading Comprehension Questions Bank - Set 22
// Philosophy - Epistemology & Metaphysics

import { Question } from "../lsat-types";

// PASSAGE 1: The Gettier Problem and Justified True Belief
const passage1 = `For much of Western philosophy's history, knowledge was understood as justified true belief: one knows that P if and only if P is true, one believes P, and one is justified in believing P. This analysis, traceable to Plato's Theaetetus, seemed to capture knowledge's essential features. Knowledge requires truth—false beliefs, however justified, do not constitute knowledge. It requires belief—one cannot know what one does not believe. And it requires justification—lucky guesses, even if true, are not knowledge. This three-part analysis appeared to provide necessary and sufficient conditions for knowledge.

In 1963, Edmund Gettier published a three-page paper demonstrating that justified true belief is insufficient for knowledge. Gettier presented cases where someone has justified true belief without knowledge. For example: Smith believes that Jones owns a Ford because Smith has seen Jones driving a Ford, Jones has always owned a Ford, and Jones has just offered Smith a ride in a Ford. From this justified belief, Smith deduces that "Either Jones owns a Ford or Brown is in Barcelona." This disjunction is true—but only because Brown happens to be in Barcelona, not because Jones owns a Ford (Jones recently sold his Ford and is now renting). Smith has justified true belief in the disjunction but seemingly lacks knowledge, because his justification involves a false belief.

Gettier cases share a structure: justified belief that happens to be true but not in the way that the justification tracks. The justification involves some luck or disconnection from truth-making factors. Post-Gettier epistemology has largely consisted of attempts to supplement justified true belief with a fourth condition that rules out Gettier-style luck while preserving intuitions about paradigmatic knowledge cases. The proliferation of such attempts—and their systematic failure to avoid counterexamples—has generated substantial skepticism about whether knowledge admits of informative analysis in terms of necessary and sufficient conditions.

One prominent response, reliabilism, abandons justification in favor of reliable belief-forming processes. Knowledge requires not internal justification but rather that belief result from processes that reliably produce true beliefs: perception under good conditions, valid logical reasoning, reliable testimony. This handles Gettier cases because the belief-forming process in such cases is not fully reliable—it involves inferring from false premises or lucky circumstances. However, reliabilism faces its own problems. What counts as a single "process"? Described narrowly, any belief-forming process that produces a true belief is reliable; described broadly, even reliable processes sometimes produce false beliefs. Moreover, reliabilism seems to make knowledge too external: someone might be highly internally justified yet lack knowledge due to factors entirely beyond their cognitive access.

Knowledge-first epistemology, associated with Timothy Williamson, takes a radically different approach: knowledge is primitive and unanalyzable. Rather than defining knowledge in terms of belief, truth, and justification, this view treats knowledge as conceptually basic and defines other epistemic concepts in terms of it. Evidence, justification, and rational belief all depend on knowledge rather than explaining it. This reverses traditional epistemological order but arguably fits better with linguistic and psychological data: "knows" behaves grammatically like a simple predicate, and cognitively, knowledge attribution may be more basic than sophisticated concepts like justification.

Contextualist approaches to the Gettier problem deny that knowledge attributions have fixed truth values independent of context. Whether someone "knows" depends on contextually determined standards: in casual conversation, loose standards apply; in philosophical discussion or high-stakes situations, stringent standards govern. Gettier's intuition that subjects lack knowledge may reflect philosopher's skeptical context rather than revealing metaphysical truth about knowledge. Ordinary contexts would count Gettier subjects as knowing. While contextualism elegantly explains why knowledge seems both common (in ordinary contexts) and rare (in philosophical contexts), it faces challenges explaining apparent disagreements across contexts and why knowledge seems to matter consistently across contexts.

Some philosophers conclude that Gettier shows not that the justified true belief analysis needs supplementation but that knowledge is not philosophically important. Perhaps epistemology should focus on justified belief or rationality rather than knowledge, which may be merely a practical concept without deep theoretical significance. This pragmatist deflationism about knowledge abandons the traditional project of analyzing knowledge in favor of investigating belief, justification, evidence, and rationality—concepts that may matter more for philosophical purposes than whether beliefs achieve knowledge status.

The Gettier problem's persistence despite extensive attempts at solution raises methodological questions. The reliance on intuitions about hypothetical cases as evidence for or against analyses has been questioned. Different people have different intuitions about cases; these intuitions may reflect cultural background or idiosyncratic features of case presentation rather than tracking conceptual truth. Moreover, if intuitions conflict across individuals or cultures, what privileges philosopher's intuitions as authoritative? The Gettier debate thus connects to broader questions about philosophical methodology: whether analyzing concepts through intuition-testing provides genuine philosophical progress or merely maps patterns in particular linguistic communities' concept application.`;

const rcQuestions1: Question[] = [
  {
    id: "rc-set22-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The justified true belief analysis of knowledge is universally accepted" },
      { letter: "B", text: "Gettier demonstrated that justified true belief is insufficient for knowledge, generating diverse responses including reliabilism, knowledge-first approaches, and contextualism" },
      { letter: "C", text: "Knowledge is completely irrelevant to epistemology" },
      { letter: "D", text: "All philosophers agree on the correct solution to the Gettier problem" },
      { letter: "E", text: "Epistemology has made no progress since Plato" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the justified true belief analysis, explains Gettier's counterexamples, then systematically discusses responses (reliabilism, knowledge-first epistemology, contextualism, deflationism), and raises methodological questions. The main point encompasses Gettier's challenge and the diverse theoretical responses it generated.",
    difficulty: "medium",
    passageId: "rc22-p1",
  },
  {
    id: "rc-set22-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses the example of Smith, Jones, and the Ford primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that cars are irrelevant to epistemology" },
      { letter: "B", text: "illustrate a Gettier case where someone has justified true belief without knowledge" },
      { letter: "C", text: "argue that all beliefs about vehicles are unjustified" },
      { letter: "D", text: "demonstrate that knowledge is easy to achieve" },
      { letter: "E", text: "criticize people who make deductions" },
    ],
    correctAnswer: "B",
    explanation: "The Smith-Jones example is introduced as a Gettier case demonstrating 'where someone has justified true belief without knowledge,' with Smith having 'justified true belief in the disjunction but seemingly lack[ing] knowledge, because his justification involves a false belief.'",
    difficulty: "easy",
    passageId: "rc22-p1",
  },
  {
    id: "rc-set22-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, reliabilism would handle Gettier cases by arguing that",
    answerChoices: [
      { letter: "A", text: "justification is the only requirement for knowledge" },
      { letter: "B", text: "belief-forming processes in Gettier cases are not fully reliable because they involve false premises or lucky circumstances" },
      { letter: "C", text: "all true beliefs constitute knowledge" },
      { letter: "D", text: "perception is always unreliable" },
      { letter: "E", text: "knowledge requires no connection to truth" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that reliabilism 'handles Gettier cases because the belief-forming process in such cases is not fully reliable—it involves inferring from false premises or lucky circumstances,' explaining how this approach rules out Gettier cases.",
    difficulty: "medium",
    passageId: "rc22-p1",
  },
  {
    id: "rc-set22-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the traditional justified true belief analysis holds that knowledge requires which three conditions?",
    answerChoices: [
      { letter: "A", text: "Truth, perception, and memory" },
      { letter: "B", text: "Truth, belief, and justification" },
      { letter: "C", text: "Belief, desire, and intention" },
      { letter: "D", text: "Justification, reliability, and luck" },
      { letter: "E", text: "Context, intuition, and evidence" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states in the first paragraph: 'one knows that P if and only if P is true, one believes P, and one is justified in believing P,' identifying truth, belief, and justification as the three conditions.",
    difficulty: "easy",
    passageId: "rc22-p1",
  },
  {
    id: "rc-set22-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that contextualist approaches to knowledge would explain philosophers' Gettier intuitions by",
    answerChoices: [
      { letter: "A", text: "asserting that philosophers are always wrong about knowledge" },
      { letter: "B", text: "claiming the intuition reflects philosophers' skeptical context with stringent standards rather than metaphysical truth" },
      { letter: "C", text: "denying that context ever affects knowledge attributions" },
      { letter: "D", text: "arguing that knowledge never exists in any context" },
      { letter: "E", text: "maintaining that all contexts apply identical standards" },
    ],
    correctAnswer: "B",
    explanation: "The passage states: 'Gettier's intuition that subjects lack knowledge may reflect philosopher's skeptical context rather than revealing metaphysical truth about knowledge. Ordinary contexts would count Gettier subjects as knowing,' explaining contextualists' account of the intuitions.",
    difficulty: "medium",
    passageId: "rc22-p1",
  },
];

// PASSAGE 2: Personal Identity and Persistence
const passage2 = `The problem of personal identity concerns what makes a person at one time identical to a person at another time. You today are identical to you ten years ago—but what grounds this identity? The question is not merely semantic but metaphysical: what are the persistence conditions for persons? Different theories propose different answers with radically different implications for practical questions about responsibility, prudential concern, and survival.

Psychological continuity theories hold that personal identity consists in psychological connections: memories, beliefs, desires, personality traits, and intentions that form continuous chains across time. Derek Parfit's influential version emphasizes that identity need not be all-or-nothing; psychological connections admit of degrees, suggesting that personal identity might be a matter of degree rather than binary. What matters for survival and rational self-concern is psychological continuity, not some further metaphysical fact about identity. This view has revisionary implications: fission cases where one person's psychology is duplicated in two bodies might mean one person becomes two, or that identity is indeterminate, or that identity simply is not what matters.

Biological theories ground personal identity in the continued existence of a living organism. You are identical to your ten-years-ago self because you are the same animal that existed then. This animalist view has intuitive appeal—we readily identify persons with their bodies—and aligns with biological science's account of organism persistence. However, biological theories face challenges from thought experiments involving brain transplants, consciousness uploads, or other scenarios where psychological continuity seems to matter more than biological continuity. If your brain were transplanted into another body, wouldn't you go with your brain rather than your original body?

The simple view, defended by Richard Swinburne and others, holds that persons are simple substances—souls or Cartesian egos—whose identity does not consist in or depend on any observable relations or properties. Personal identity is primitive and unanalyzable, known through immediate self-awareness rather than derived from physical or psychological facts. This view avoids puzzles about borderline cases and can explain the apparent certainty of self-knowledge. However, it posits entities beyond scientific investigation, seems incompatible with materialist metaphysics, and provides no criteria for determining identity in disputed cases since it makes identity independent of all observable features.

Narrative theories, influenced by continental philosophy, propose that personal identity consists in the unity of a life story. We constitute ourselves as persisting subjects through autobiographical narratives that connect past, present, and anticipated future into coherent wholes. This account emphasizes agency and interpretation: identity is not merely discovered but partly constructed through self-understanding. However, critics object that narrative theories confuse the concept of a person with concepts of character or self-conception. Moreover, if narrative constitutes identity, then false beliefs about one's past would make those past events not truly part of one's history—an implausible conclusion.

The no-self view, rooted in Buddhist philosophy and advocated by some contemporary philosophers, denies that persons persist at all. There are bundles of experiences connected by various relations, but no underlying subject that remains identical through time. Personal identity is a useful fiction, perhaps psychologically or socially necessary, but does not correspond to metaphysical reality. Derek Parfit, despite his psychological continuity theory, sometimes appears sympathetic to this view, suggesting that "personal identity is not what matters" and that recognizing its conventional nature would be liberating, reducing concern for one's distant future self to appropriate concern for a psychologically related but distinct person.

The practical stakes of these metaphysical debates are significant. Responsibility seems to require identity: we punish people for past crimes because they are identical to the criminals who committed them. But if psychological continuity admits of degrees, does responsibility also come in degrees? Should we hold less responsible a defendant who has undergone profound psychological transformation? Prudential rationality—concern for one's future welfare—similarly presupposes identity. Yet if identity is indeterminate in certain cases, or if what matters is continuity rather than identity, then rationally caring about the future may not require believing in strict identity.

Medical contexts raise particularly pressing questions. When patients with advanced dementia lose psychological connections to their earlier selves, are they still the same persons? Do advance directives made by an earlier self with different values bind a current self who has changed? Organ transplantation, life extension technologies, and potential consciousness uploading all raise questions about what preserves identity and whether survival requires identity or merely sufficient psychological continuity.

The persistence of debate about personal identity, despite millennia of philosophical investigation, suggests either that the question is extraordinarily difficult or that it is somehow malformed. Perhaps different theories capture different legitimate concepts of personhood serving different purposes. Legal, moral, and prudential contexts might appropriately employ different identity criteria. Alternatively, the problem may arise from assuming that persons are substances with determinate identity conditions, when reality involves only bundles of properties connected by various relations. Whether personal identity has a metaphysical answer awaiting discovery or represents a conceptual tangle better dissolved than solved remains among philosophy's most fundamental questions.`;

const rcQuestions2: Question[] = [
  {
    id: "rc-set22-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "All theories of personal identity agree on a single answer" },
      { letter: "B", text: "Personal identity theories including psychological, biological, simple, narrative, and no-self views offer competing accounts with practical implications for responsibility and survival" },
      { letter: "C", text: "Personal identity is completely irrelevant to philosophy" },
      { letter: "D", text: "Only biological theories have any merit" },
      { letter: "E", text: "The problem of personal identity has been definitively solved" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents multiple theories of personal identity (psychological, biological, simple, narrative, no-self), discusses challenges each faces, explores practical implications for responsibility and medical contexts, and notes persistent debate. The main point encompasses the competing theories and their practical significance.",
    difficulty: "medium",
    passageId: "rc22-p2",
  },
  {
    id: "rc-set22-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses brain transplant scenarios primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that brain transplants are currently routine medical procedures" },
      { letter: "B", text: "illustrate a challenge for biological theories where psychological continuity seems more important than biological continuity" },
      { letter: "C", text: "prove that biological theories are always correct" },
      { letter: "D", text: "demonstrate that thought experiments are worthless" },
      { letter: "E", text: "criticize all medical procedures" },
    ],
    correctAnswer: "B",
    explanation: "Brain transplant scenarios are mentioned as challenges for biological theories: 'biological theories face challenges from thought experiments involving brain transplants...where psychological continuity seems to matter more than biological continuity. If your brain were transplanted into another body, wouldn't you go with your brain rather than your original body?'",
    difficulty: "easy",
    passageId: "rc22-p2",
  },
  {
    id: "rc-set22-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, proponents of psychological continuity theories like Parfit would most likely argue that",
    answerChoices: [
      { letter: "A", text: "identity must always be all-or-nothing with no degrees" },
      { letter: "B", text: "what matters for survival is psychological continuity, which admits of degrees, not binary metaphysical identity" },
      { letter: "C", text: "biology is completely irrelevant to personhood" },
      { letter: "D", text: "persons are simple immaterial souls" },
      { letter: "E", text: "personal identity never exists" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Parfit 'emphasizes that identity need not be all-or-nothing; psychological connections admit of degrees' and that 'what matters for survival and rational self-concern is psychological continuity, not some further metaphysical fact about identity.'",
    difficulty: "medium",
    passageId: "rc22-p2",
  },
  {
    id: "rc-set22-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the simple view holds that persons are",
    answerChoices: [
      { letter: "A", text: "bundles of experiences with no underlying subject" },
      { letter: "B", text: "simple substances like souls whose identity is primitive and unanalyzable" },
      { letter: "C", text: "identical to their biological organisms" },
      { letter: "D", text: "constituted by narrative life stories" },
      { letter: "E", text: "chains of psychological connections" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'The simple view...holds that persons are simple substances—souls or Cartesian egos—whose identity does not consist in or depend on any observable relations or properties. Personal identity is primitive and unanalyzable.'",
    difficulty: "easy",
    passageId: "rc22-p2",
  },
  {
    id: "rc-set22-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the various theories of personal identity can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified endorsement of psychological continuity theories" },
      { letter: "B", text: "complete rejection of all theories" },
      { letter: "C", text: "balanced presentation of multiple theories with their strengths and challenges without advocating a particular view" },
      { letter: "D", text: "certain that biological theories are correct" },
      { letter: "E", text: "dismissive of philosophical analysis" },
    ],
    correctAnswer: "C",
    explanation: "The author presents multiple theories, discusses challenges each faces, explores practical implications, and concludes by noting persistent debate and the possibility that 'different theories capture different legitimate concepts.' The tone is balanced analytical presentation without clear advocacy.",
    difficulty: "medium",
    passageId: "rc22-p2",
  },
];

// PASSAGE 3: The Problem of Induction
const passage3 = `David Hume's problem of induction challenges the rational basis for inductive reasoning—inferring from observed instances to unobserved ones, or from the past to the future. We routinely make such inferences: the sun rose today and every day in recorded history, so we expect it will rise tomorrow; this bread has nourished in the past, so we expect it will nourish today. Yet what justifies these expectations? Hume argued that no rational justification exists, threatening the foundations of empirical science and everyday reasoning.

Hume distinguished two types of reasoning: relations of ideas, which are knowable a priori through logical analysis (like mathematics), and matters of fact, which depend on experience. Inductive inferences about unobserved matters of fact cannot be justified by logical demonstration—there is no logical contradiction in supposing that future cases will differ from past ones. The sun's rising tomorrow does not follow logically from its having risen previously. Nor can experience justify induction, because appealing to past success of inductive reasoning to justify future inductive reasoning is circular: it assumes the very principle (that the future resembles the past) that requires justification.

One response accepts Hume's skeptical conclusion: induction cannot be rationally justified, but this is not problematic because induction is neither rational nor irrational but simply arational—a basic habit or instinct. We engage in inductive reasoning naturally, not because we have reasons justifying it but because evolution equipped us with expectations about regularities. On this view, demanding rational justification for induction is like demanding rational justification for perceptual faculties—these are foundational capacities that make rationality possible rather than requiring rational support themselves.

Karl Popper proposed a radical alternative: science does not rely on induction at all. Scientific theories are conjectures that we attempt to falsify through observation. We never confirm theories through accumulated positive instances; we only corroborate them by failing to refute them despite sincere efforts. This falsificationism avoids induction's problem because deductive logic suffices to show that observations contradict theories. However, critics note that choosing which hypotheses to test, determining what counts as refutation, and deciding whether to maintain theories by modifying auxiliary assumptions all seem to involve inductive reasoning. Popper's project of eliminating induction from science may be impossible.

The "inference to the best explanation" approach suggests that induction succeeds not by accumulating instances but by identifying theories that best explain observed phenomena. Explanatory power, simplicity, coherence with background knowledge, and theoretical virtues guide theory acceptance. This abductive reasoning differs from simple enumerative induction and seems more defensible. However, what justifies believing that the best explanation is true or approximately true? If we appeal to the past success of this method, we face the same circularity problem that plagued simpler inductive justifications.

Nelson Goodman's "new riddle of induction" demonstrates that the problem is even more severe than Hume recognized. Define "grue" as green if observed before some future time T, blue thereafter. All observed emeralds are both green and grue. Induction from past observations should equally support "All emeralds are green" and "All emeralds are grue." Yet the latter predicts that after time T, emeralds will be blue—an absurd conclusion. This shows that not all predicates are "projectible" for induction. But what distinguishes projectible from non-projectible predicates? Appeals to naturalness or simplicity seem arbitrary without independent justification.

Some philosophers argue that the problem of induction rests on misunderstanding. Wittgenstein and later ordinary language philosophers suggested that asking for justification of induction mistakes grammar for metaphysics. Inductive practices define what "justified belief" means in empirical contexts; demanding justification external to these practices is incoherent, like asking whether logical reasoning is logical. However, this response seems to avoid rather than solve the problem. Pointing out that induction is built into our concept of justification does not show that induction is reliable or truth-conducive.

Probabilistic approaches formalize induction using Bayesian reasoning: we assign prior probabilities to hypotheses and update these through Bayes' theorem as evidence accumulates. This framework elegantly handles many inductive problems and avoids certain paradoxes. However, the problem of priors remains: where do initial probability assignments come from? If they are subjective, then induction reduces to personal opinion. If they are objective, what justifies these particular assignments rather than others? Moreover, Bayesian updating assumes that future evidence will conform to probability calculus, which itself seems to require inductive justification.

The problem of induction connects to broader questions about naturalized epistemology. W.V.O. Quine argued that epistemology should be continuous with empirical science, studying how organisms actually acquire knowledge rather than seeking a priori justifications. On this view, evolution and psychology explain why inductive reasoning generally succeeds, and neuroscience and statistics provide tools for improving inductive practices. Yet critics object that naturalized epistemology cannot address normative questions: showing how we do reason does not establish how we should reason. If all justification is circular, referring ultimately to empirical methods whose reliability is established empirically, have we abandoned the goal of genuine justification?

Hume's challenge remains unresolved, despite centuries of philosophical effort. This persistence might indicate an intractable philosophical problem, or suggest that the demand for non-circular justification sets an impossible standard. Perhaps any form of reasoning must ultimately be self-supporting, relying on principles that cannot be justified without circularity. If so, the question becomes not whether induction can be justified in some absolute sense, but whether it is coherent, practically successful, and theoretically fruitful—standards that induction arguably satisfies even if it cannot meet traditional justificatory demands.`;

const rcQuestions3: Question[] = [
  {
    id: "rc-set22-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The problem of induction has been definitively solved by Popper's falsificationism" },
      { letter: "B", text: "Hume's problem of induction challenges the rational basis for inferring from observed to unobserved cases, and various responses have been proposed but none definitively resolves the challenge" },
      { letter: "C", text: "Inductive reasoning never works in any context" },
      { letter: "D", text: "All philosophers agree that induction requires no justification" },
      { letter: "E", text: "Science has abandoned all forms of inductive reasoning" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Hume's challenge to inductive reasoning, systematically discusses responses (arational habit, falsificationism, inference to best explanation, probabilistic approaches, naturalized epistemology), notes problems with each, and concludes that the challenge 'remains unresolved.' The main point encompasses both the problem and attempts to address it.",
    difficulty: "medium",
    passageId: "rc22-p3",
  },
  {
    id: "rc-set22-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses the predicate 'grue' primarily in order to",
    answerChoices: [
      { letter: "A", text: "solve the problem of induction completely" },
      { letter: "B", text: "illustrate Goodman's demonstration that the induction problem is more severe than Hume recognized, showing not all predicates are equally projectible" },
      { letter: "C", text: "argue that colors don't exist" },
      { letter: "D", text: "prove that emeralds will turn blue" },
      { letter: "E", text: "demonstrate that induction always works perfectly" },
    ],
    correctAnswer: "B",
    explanation: "'Grue' is introduced to explain 'Goodman's \"new riddle of induction\"' which 'demonstrates that the problem is even more severe than Hume recognized,' showing that 'not all predicates are \"projectible\" for induction' and raising questions about what distinguishes legitimate from illegitimate inductive projections.",
    difficulty: "medium",
    passageId: "rc22-p3",
  },
  {
    id: "rc-set22-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Popper's falsificationism attempts to avoid the problem of induction by",
    answerChoices: [
      { letter: "A", text: "claiming that science uses induction more extensively than previously thought" },
      { letter: "B", text: "arguing that science relies on deductive falsification rather than inductive confirmation" },
      { letter: "C", text: "accepting that induction is completely unjustifiable" },
      { letter: "D", text: "proving that all theories are always false" },
      { letter: "E", text: "asserting that observation is impossible" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Popper 'proposed a radical alternative: science does not rely on induction at all...We never confirm theories through accumulated positive instances; we only corroborate them by failing to refute them' and 'falsificationism avoids induction's problem because deductive logic suffices to show that observations contradict theories.'",
    difficulty: "medium",
    passageId: "rc22-p3",
  },
  {
    id: "rc-set22-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Hume argued that appealing to past success of induction to justify future induction is problematic because it",
    answerChoices: [
      { letter: "A", text: "provides perfect justification" },
      { letter: "B", text: "is circular, assuming the very principle that requires justification" },
      { letter: "C", text: "relies on deductive logic" },
      { letter: "D", text: "has never been attempted" },
      { letter: "E", text: "proves induction is always reliable" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Nor can experience justify induction, because appealing to past success of inductive reasoning to justify future inductive reasoning is circular: it assumes the very principle (that the future resembles the past) that requires justification.'",
    difficulty: "easy",
    passageId: "rc22-p3",
  },
  {
    id: "rc-set22-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that proponents of naturalized epistemology would approach the problem of induction by",
    answerChoices: [
      { letter: "A", text: "seeking a priori deductive justification" },
      { letter: "B", text: "studying how organisms actually acquire knowledge through evolution and psychology rather than seeking a priori justification" },
      { letter: "C", text: "denying that knowledge exists" },
      { letter: "D", text: "proving that all reasoning is deductive" },
      { letter: "E", text: "abandoning all empirical investigation" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that under naturalized epistemology, 'epistemology should be continuous with empirical science, studying how organisms actually acquire knowledge rather than seeking a priori justifications...evolution and psychology explain why inductive reasoning generally succeeds.'",
    difficulty: "medium",
    passageId: "rc22-p3",
  },
];

// PASSAGE 4: Free Will and Determinism
const passage4 = `The free will problem arises from apparent tension between two deeply held commitments: that humans possess free will and moral responsibility, and that the natural world, including human action, is governed by causal laws. If every event, including every human decision and action, is determined by prior causes according to natural laws, how can we be free? And if we are not free, how can we be morally responsible for our actions?

Hard determinism accepts determinism and concludes that free will is impossible. If our actions are inevitable consequences of factors beyond our control—genetics, upbringing, environmental influences, brain states determined by physical laws—then we do not genuinely choose our actions. Hard determinists argue that moral responsibility, praise, and blame all rest on a metaphysical mistake. We may need to maintain practices of punishment for pragmatic reasons (deterrence, public safety), but retributive justice—punishment because people deserve it—is unjustifiable. This view faces the challenge of explaining moral practices and reactive attitudes (gratitude, resentment, indignation) that seem deeply embedded in human social life.

Libertarianism (in the metaphysical sense) denies determinism, asserting that humans possess genuinely free will involving indeterministic causation. Agents can initiate causal chains not determined by prior events, exercising "agent causation" that breaks the deterministic chain. This preserves moral responsibility but faces serious problems. First, modern physics suggests universal causation, leaving no room for exceptions in human action. Second, even if quantum indeterminacy exists, random events do not provide the control free will seems to require. If decisions are neither determined by reasons nor random, what makes them "free" rather than merely arbitrary? Third, agent causation remains deeply mysterious—how can immaterial minds causally affect physical brains without violating conservation laws?

Compatibilism, the dominant position in contemporary philosophy, argues that free will is compatible with determinism. What matters for free will and moral responsibility is not whether actions are determined but whether they flow from the agent's own desires, values, and decision-making capacities. An action is free if it results from the agent's will unimpeded by external constraints or internal compulsions, regardless of whether that will was itself determined by prior causes. On this view, the relevant contrast is not between determined and undetermined action but between voluntary and coerced action, between action flowing from one's character and action imposed externally.

Classical compatibilism, associated with Hume and Mill, analyzes free will in terms of acting according to one's desires without external constraint. Critics object that this is too weak: a person brainwashed to desire what their controller wants, or an addict whose desires override their better judgment, seems unfree despite acting on their desires. Contemporary compatibilists respond with more sophisticated accounts emphasizing "deep self" theories. Harry Frankfurt's hierarchical account distinguishes first-order desires (for immediate actions) from second-order volitions (desires about what desires one wants to have). Free agents act on desires they identify with at higher reflective levels; addicts' actions are unfree because they conflict with second-order volitions.

However, compatibilism faces the "manipulation problem." If someone were created or manipulated such that they inevitably would choose certain actions (perhaps through genetic engineering or neurological intervention), yet these actions flow from their desires and decision-making capacities, are they free? Intuitions diverge: compatibilists may accept this consequence, while critics see it as a reductio ad absurdum. The case suggests that the etiology of our psychological states—how we came to have certain desires and values—matters for freedom, not merely whether actions flow from those states.

Some philosophers argue that debates about free will dissolve upon careful analysis. Daniel Dennett proposes that free will is neither a deep metaphysical property nor an illusion, but a real pattern of behavior involving sensitivity to reasons, ability to anticipate consequences, and control over actions. "Enough" free will exists for moral responsibility without requiring mysterious agent causation. This deflationary approach treats free will as a natural capacity that evolution produced, falling somewhere between simple deterministic processes and libertarian miracles.

Experimental philosophy studies suggest that ordinary people's intuitions about free will are complex and context-dependent. In abstract philosophical scenarios, many people report compatibilist intuitions; in concrete cases involving moral judgment, incompatibilist intuitions emerge. Moreover, different cultures show different patterns, suggesting free will intuitions may partly reflect cultural learning rather than tracking metaphysical truth. These findings raise questions about whether philosophical theories should aim to match folk intuitions or to reform them through more careful analysis.

Recent neuroscience adds new dimensions to free will debates. Studies like Benjamin Libet's experiments, which found that brain activity predicting actions precedes conscious intention by several hundred milliseconds, seem to show that unconscious processes determine action before conscious deliberation. Some interpret this as evidence against free will, though others note that readiness potentials may not represent committed decisions and that complex decisions likely involve different neural dynamics than simple motor actions studied in experiments.

The stakes of free will debates extend beyond academic philosophy. Criminal justice systems assume responsibility; interpersonal relationships involve reactive attitudes predicated on freedom; self-conception as autonomous agents shapes life planning and moral development. Whether these practices require robust metaphysical free will, can survive with compatibilist conceptions, or persist despite free will's absence as useful fictions, remains among philosophy's most consequential questions. The persistence of disagreement despite extensive analysis suggests either that the problem is extraordinarily difficult or that it involves conceptual tangles admitting no resolution—different conceptual frameworks suited to different purposes rather than a single truth awaiting discovery.`;

const rcQuestions4: Question[] = [
  {
    id: "rc-set22-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Free will definitely exists and faces no philosophical challenges" },
      { letter: "B", text: "The free will problem involves tension between determinism and responsibility, with competing positions including hard determinism, libertarianism, and compatibilism" },
      { letter: "C", text: "All philosophers agree that free will is impossible" },
      { letter: "D", text: "Neuroscience has definitively proven free will exists" },
      { letter: "E", text: "Moral responsibility is completely irrelevant to the free will debate" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the tension between determinism and free will, systematically discusses hard determinism, libertarianism, compatibilism (including challenges like manipulation problems), explores deflationary approaches, and notes practical stakes and persistent disagreement. The main point encompasses the problem and major positions.",
    difficulty: "medium",
    passageId: "rc22-p4",
  },
  {
    id: "rc-set22-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses the brainwashed person or addict examples primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all desires are equally free" },
      { letter: "B", text: "illustrate problems with simple compatibilist accounts that analyze freedom solely as acting on desires without constraint" },
      { letter: "C", text: "argue that addiction is never a problem" },
      { letter: "D", text: "demonstrate that brainwashing is impossible" },
      { letter: "E", text: "support hard determinism" },
    ],
    correctAnswer: "B",
    explanation: "These examples are presented as objections that classical compatibilism 'is too weak: a person brainwashed to desire what their controller wants, or an addict whose desires override their better judgment, seems unfree despite acting on their desires,' motivating more sophisticated compatibilist accounts.",
    difficulty: "easy",
    passageId: "rc22-p4",
  },
  {
    id: "rc-set22-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, Frankfurt's hierarchical account of free will would consider an addict unfree because",
    answerChoices: [
      { letter: "A", text: "their actions always conform to their desires" },
      { letter: "B", text: "their actions conflict with second-order volitions about what desires they want to have" },
      { letter: "C", text: "they have no desires whatsoever" },
      { letter: "D", text: "determinism is false" },
      { letter: "E", text: "their brain states are determined" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains Frankfurt's view: 'Free agents act on desires they identify with at higher reflective levels; addicts' actions are unfree because they conflict with second-order volitions,' indicating that the conflict between first-order desires and second-order volitions makes addicts unfree.",
    difficulty: "medium",
    passageId: "rc22-p4",
  },
  {
    id: "rc-set22-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, what challenge does hard determinism face?",
    answerChoices: [
      { letter: "A", text: "Proving that determinism is false" },
      { letter: "B", text: "Explaining moral practices and reactive attitudes that seem deeply embedded in human social life" },
      { letter: "C", text: "Demonstrating that free will exists" },
      { letter: "D", text: "Showing that responsibility is easy to establish" },
      { letter: "E", text: "Proving that physics is wrong" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that hard determinism 'faces the challenge of explaining moral practices and reactive attitudes (gratitude, resentment, indignation) that seem deeply embedded in human social life' despite denying genuine responsibility.",
    difficulty: "easy",
    passageId: "rc22-p4",
  },
  {
    id: "rc-set22-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the free will debate can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified endorsement of libertarianism" },
      { letter: "B", text: "complete certainty that hard determinism is correct" },
      { letter: "C", text: "balanced presentation of competing positions with their strengths and challenges, acknowledging persistent disagreement" },
      { letter: "D", text: "dismissive of all philosophical analysis" },
      { letter: "E", text: "certain that neuroscience has resolved all questions" },
    ],
    correctAnswer: "C",
    explanation: "The author presents multiple positions (hard determinism, libertarianism, compatibilism) with challenges to each, discusses experimental philosophy and neuroscience findings, and concludes that 'persistence of disagreement' suggests either difficulty or conceptual tangles. The tone is balanced presentation acknowledging complexity without advocacy.",
    difficulty: "medium",
    passageId: "rc22-p4",
  },
];

export const rcQuestionsSet22: Question[] = [
  ...rcQuestions1,
  ...rcQuestions2,
  ...rcQuestions3,
  ...rcQuestions4,
];
