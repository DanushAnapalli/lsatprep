// Reading Comprehension Questions - Set 10 (Literature & Literary Criticism)
import { Question } from "../lsat-types";

// Passage 1: Modernist Fiction and Stream of Consciousness
const passage1 = `The emergence of stream-of-consciousness narrative in modernist fiction represented more than a technical innovation; it reflected fundamental shifts in philosophical understandings of consciousness, selfhood, and reality. Writers like Virginia Woolf, James Joyce, and William Faulkner abandoned conventional chronological plotting and omniscient narration in favor of techniques that attempted to capture the continuous, often chaotic flow of subjective experience. Yet the notion that such techniques provide unmediated access to characters' inner lives—that they somehow transcribe mental experience directly onto the page—fundamentally misunderstands both the nature of consciousness and the necessary artifice of literary representation.

Stream-of-consciousness writing employs various strategies to simulate mental processes: interior monologue, free indirect discourse, fragmented syntax, associative leaps, temporal fluidity. These techniques aim to represent how thoughts actually occur—not as logically ordered sentences but as overlapping impressions, memories, sensations, and linguistic fragments. When Mrs. Dalloway walks through London, Woolf presents not a linear account of her journey but a fluid movement between present perception and past memory, between external observation and internal reflection, mimicking the simultaneity of consciousness.

However, the very act of writing imposes structure that consciousness itself lacks. Words appear sequentially on the page; a reader processes them in temporal order. Even the most experimental stream-of-consciousness prose cannot escape this fundamental constraint. What appears on the page is not consciousness itself but a carefully crafted literary approximation—shaped by authorial decisions about what to include, what to emphasize, what patterns to establish. The apparently chaotic surface of stream-of-consciousness writing paradoxically requires meticulous artistic control.

Moreover, consciousness may not be primarily linguistic. Much of human experience—visual perception, emotional states, bodily sensations, implicit knowledge—exists below or beyond verbal formulation. When we represent consciousness through language, we inevitably translate nonlinguistic experience into words, a transformation that fundamentally alters what is represented. The richness of sensation, the instantaneousness of recognition, the ineffable quality of certain experiences resist linguistic capture. Stream-of-consciousness techniques may gesture toward nonlinguistic dimensions of experience through rhythm, imagery, and syntactic disruption, but they remain bound within language's possibilities and limitations.

The critical tendency to evaluate stream-of-consciousness writing based on its supposed fidelity to actual mental processes thus misconstrues the achievement of modernist fiction. These works succeed not through transparent representation of consciousness but through sophisticated artistic transformation of experience into language—a transformation that illuminates aspects of subjectivity precisely because it is constructed rather than transcribed. The techniques' value lies not in their scientific accuracy but in their capacity to evoke, through literary means, recognizable dimensions of conscious experience while acknowledging the impossibility of complete representation.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set10-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Stream-of-consciousness writing provides completely accurate transcription of mental experience" },
      { letter: "B", text: "Stream-of-consciousness techniques succeed through artistic transformation rather than transparent representation of consciousness" },
      { letter: "C", text: "Modernist writers universally rejected all forms of conventional narrative structure" },
      { letter: "D", text: "Literary representation of consciousness requires no authorial control or shaping" },
      { letter: "E", text: "Consciousness is purely linguistic and can be fully captured in written language" },
    ],
    correctAnswer: "B",
    explanation: "The passage argues that stream-of-consciousness works succeed 'not through transparent representation of consciousness but through sophisticated artistic transformation'—they are valuable as constructed art, not transcription.",
    difficulty: "medium",
    passageId: "rc10-p1",
  },
  {
    id: "rc-set10-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions Mrs. Dalloway's walk through London primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Woolf's writing as overly chaotic" },
      { letter: "B", text: "illustrate how stream-of-consciousness techniques aim to represent the simultaneity of consciousness" },
      { letter: "C", text: "prove that chronological plotting is superior to modernist techniques" },
      { letter: "D", text: "demonstrate that Woolf failed to understand consciousness" },
      { letter: "E", text: "argue that urban settings are essential to modernist fiction" },
    ],
    correctAnswer: "B",
    explanation: "Mrs. Dalloway's walk is presented as an example of Woolf's technique presenting 'not a linear account...but a fluid movement between present perception and past memory...mimicking the simultaneity of consciousness.'",
    difficulty: "easy",
    passageId: "rc10-p1",
  },
  {
    id: "rc-set10-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the author would most likely agree that much human experience",
    answerChoices: [
      { letter: "A", text: "is entirely linguistic in nature" },
      { letter: "B", text: "can be perfectly translated into written words" },
      { letter: "C", text: "exists in nonlinguistic forms that resist complete verbal formulation" },
      { letter: "D", text: "has no connection to bodily sensations or emotions" },
      { letter: "E", text: "requires no translation when represented in literature" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'much of human experience—visual perception, emotional states, bodily sensations, implicit knowledge—exists below or beyond verbal formulation' and that certain experiences 'resist linguistic capture.'",
    difficulty: "medium",
    passageId: "rc10-p1",
  },
  {
    id: "rc-set10-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, stream-of-consciousness writing employs which of the following techniques?",
    answerChoices: [
      { letter: "A", text: "Strictly chronological plotting" },
      { letter: "B", text: "Interior monologue and free indirect discourse" },
      { letter: "C", text: "Omniscient third-person narration exclusively" },
      { letter: "D", text: "Complete avoidance of all syntax" },
      { letter: "E", text: "Only present-tense description with no memory" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly lists 'interior monologue, free indirect discourse, fragmented syntax, associative leaps, temporal fluidity' as strategies used in stream-of-consciousness writing.",
    difficulty: "easy",
    passageId: "rc10-p1",
  },
  {
    id: "rc-set10-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that evaluating stream-of-consciousness writing based on fidelity to actual mental processes",
    answerChoices: [
      { letter: "A", text: "is the only appropriate critical approach" },
      { letter: "B", text: "accurately reflects the goals of modernist writers" },
      { letter: "C", text: "misconstrues these works' achievement by ignoring their artistic construction" },
      { letter: "D", text: "proves that such writing has no literary value" },
      { letter: "E", text: "demonstrates perfect understanding of consciousness" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that this 'critical tendency...misconstrues the achievement of modernist fiction' because the works succeed through 'artistic transformation' rather than scientific accuracy.",
    difficulty: "hard",
    passageId: "rc10-p1",
  },
];

// Passage 2: Postcolonial Literary Theory
const passage2 = `Postcolonial literary criticism has profoundly challenged the canon of Western literature, exposing how colonialism shaped not merely the content of literary works but the very assumptions about what constitutes literary value, which voices deserve hearing, and how texts should be read. Yet as postcolonial studies has become institutionalized within Western academia, questions have emerged about whether this critical framework has been domesticated—its radical potential blunted by incorporation into the same institutional structures it ostensibly critiques.

Edward Said's Orientalism inaugurated postcolonial criticism by demonstrating how Western literature and scholarship constructed the "Orient" as Europe's exotic, backward Other, thereby justifying colonial domination. Subsequent critics expanded this analysis, examining how colonial discourse operated through binary oppositions—civilized/savage, rational/emotional, modern/traditional—that consistently privileged Western perspectives while marginalizing colonized peoples' voices and experiences. This scholarship revealed the politics of representation: whose stories are told, from which perspectives, in which languages, and to what ends.

The recovery and revaluation of colonial and postcolonial literatures constituted another major project. Works by writers from formerly colonized regions—Chinua Achebe, Ngũgĩ wa Thiong'o, Salman Rushdie, Jamaica Kincaid—entered curricula alongside canonical European and American texts. This expansion challenged notions of universal literary value, revealing how aesthetic judgments often reflected particular cultural perspectives masquerading as neutral standards. What had been dismissed as provincial or politically tendentious could be recognized as sophisticated engagement with complex historical experiences.

However, critics within postcolonial studies have noted troubling patterns. The field remains centered in Western universities, conducted primarily in English, and often addressed to Western academic audiences. The theoretical frameworks deployed—frequently derived from French poststructuralism—may themselves reflect Eurocentric intellectual traditions that complicate genuine decentering of Western perspectives. Moreover, the focus on literary and cultural production risks neglecting material conditions of ongoing neocolonial economic exploitation. Analyzing representational strategies in novels, however sophisticated, does not directly address structural inequalities in global capitalism.

The tension between radical critique and institutional incorporation reflects a broader dilemma: can critical frameworks developed to challenge dominant power structures maintain their oppositional character when they become established academic paradigms? Does the institutionalization of postcolonial studies represent the success of its project or its co-optation? Perhaps the answer lies in recognizing that intellectual work operates within contradictions rather than resolving them cleanly. Postcolonial criticism's value may consist precisely in its continuing capacity to generate uncomfortable questions about complicity, power, and the politics of knowledge production—including within its own practice.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set10-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "Postcolonial criticism has no value and should be abandoned" },
      { letter: "B", text: "Postcolonial studies has completely resolved all questions about colonial representation" },
      { letter: "C", text: "Postcolonial criticism challenges Western literary assumptions but faces questions about institutionalization potentially blunting its radical potential" },
      { letter: "D", text: "All Western literature is inherently worthless due to colonialism" },
      { letter: "E", text: "Said's Orientalism definitively solved all problems in literary studies" },
    ],
    correctAnswer: "C",
    explanation: "The passage discusses postcolonial criticism's achievements in challenging Western assumptions while raising 'questions about whether this critical framework has been domesticated' through institutionalization.",
    difficulty: "medium",
    passageId: "rc10-p2",
  },
  {
    id: "rc-set10-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses binary oppositions like 'civilized/savage' primarily in order to",
    answerChoices: [
      { letter: "A", text: "endorse these categories as accurate descriptions" },
      { letter: "B", text: "illustrate how colonial discourse consistently privileged Western perspectives" },
      { letter: "C", text: "argue that all binary thinking should be eliminated" },
      { letter: "D", text: "prove that postcolonial criticism is methodologically flawed" },
      { letter: "E", text: "demonstrate that colonized peoples accepted these characterizations" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents these binary oppositions as examples of how colonial discourse 'consistently privileged Western perspectives while marginalizing colonized peoples' voices,' illustrating postcolonial criticism's analytical approach.",
    difficulty: "easy",
    passageId: "rc10-p2",
  },
  {
    id: "rc-set10-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that aesthetic judgments about literary value",
    answerChoices: [
      { letter: "A", text: "are completely objective and universal across all cultures" },
      { letter: "B", text: "often reflected particular cultural perspectives presented as neutral standards" },
      { letter: "C", text: "have no relationship to cultural or historical contexts" },
      { letter: "D", text: "prove that all literature from colonized regions is superior" },
      { letter: "E", text: "cannot be meaningfully discussed or critiqued" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that canon expansion 'challenged notions of universal literary value, revealing how aesthetic judgments often reflected particular cultural perspectives masquerading as neutral standards.'",
    difficulty: "medium",
    passageId: "rc10-p2",
  },
  {
    id: "rc-set10-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, critics within postcolonial studies have noted that the field",
    answerChoices: [
      { letter: "A", text: "operates entirely outside Western academic institutions" },
      { letter: "B", text: "is conducted in hundreds of different languages equally" },
      { letter: "C", text: "remains centered in Western universities and conducted primarily in English" },
      { letter: "D", text: "has completely eliminated all Eurocentric perspectives" },
      { letter: "E", text: "focuses exclusively on material economic conditions" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'critics within postcolonial studies have noted troubling patterns. The field remains centered in Western universities, conducted primarily in English.'",
    difficulty: "easy",
    passageId: "rc10-p2",
  },
  {
    id: "rc-set10-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the institutionalization of postcolonial studies can best be characterized as",
    answerChoices: [
      { letter: "A", text: "entirely enthusiastic without any reservations" },
      { letter: "B", text: "completely dismissive of the field's accomplishments" },
      { letter: "C", text: "balanced recognition of both achievements and tensions regarding co-optation" },
      { letter: "D", text: "indifferent to questions about institutional power" },
      { letter: "E", text: "hostile toward all forms of academic literary criticism" },
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges postcolonial criticism's accomplishments while raising questions about institutionalization, concluding that its value may lie in 'continuing capacity to generate uncomfortable questions'—reflecting balanced, critical engagement.",
    difficulty: "hard",
    passageId: "rc10-p2",
  },
];

// Passage 3: Narrative Unreliability
const passage3 = `The concept of the unreliable narrator has become central to narrative theory, yet its application often reveals more about readers' assumptions than about textual features. When we label a narrator "unreliable," we implicitly invoke standards of reliability against which that narrator fails—but the nature and source of those standards frequently remain unexamined. What makes a narrator unreliable: factual inaccuracy, moral blindness, psychological instability, or simply deviation from readers' expectations? These different criteria can lead to contradictory assessments of the same narrative voice.

Wayne C. Booth introduced the term "unreliable narrator" in 1961 to describe narrators who diverge from the implied author's norms and values. This definition presupposes that texts encode authorial values against which narrators can be measured. In straightforward cases, textual evidence clearly undermines a narrator's claims: a narrator who insists he is perfectly sane while describing obviously delusional behavior, as in Poe's "The Tell-Tale Heart," signals his unreliability through self-contradiction and implausible assertions.

However, many purportedly unreliable narrators present more ambiguous cases. Is Huck Finn unreliable when he condemns himself for helping Jim escape slavery, even as readers recognize his actions as morally courageous? Here the narrator's moral framework differs from readers' values, but his factual reporting appears accurate. Is the governess in Henry James's "The Turn of the Screw" genuinely perceiving supernatural threats or suffering delusions? James deliberately withholds information that would resolve this question, making reliability itself indeterminate.

The problem deepens when we recognize that all narration involves selection, emphasis, and interpretation—processes that introduce subjective elements even when narrators strive for objectivity. The distinction between reliable and unreliable narration may represent a spectrum rather than a binary opposition. Moreover, judgments of unreliability often depend on readers' cultural and historical contexts. Narrators expressing attitudes common in their historical period but objectionable to contemporary readers might be labeled unreliable for ideological reasons rather than textual evidence.

Some theorists have proposed abandoning the concept of unreliability in favor of analyzing how all narration constructs reality through particular frameworks and limitations. Every narrator, on this view, offers a partial, positioned perspective rather than neutral truth. The question becomes not whether a narrator is reliable, but how their particular limitations and perspectives shape what and how they narrate. This approach avoids the pretense that any narration could be wholly reliable while still allowing analysis of how specific narrative strategies guide reader interpretation. It shifts attention from diagnosing narrators' failures to examining the complex negotiations between textual signals, narrative voice, and reader construction of meaning.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set10-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The concept of narrative unreliability is perfectly clear and universally agreed upon" },
      { letter: "B", text: "All narrators are equally reliable in their presentation of events" },
      { letter: "C", text: "The concept of unreliable narration involves complications regarding standards of reliability and may be better understood as analyzing how all narration constructs partial perspectives" },
      { letter: "D", text: "Wayne C. Booth's definition of unreliable narration resolved all theoretical questions" },
      { letter: "E", text: "Readers never bring their own assumptions to judgments of narrative reliability" },
    ],
    correctAnswer: "C",
    explanation: "The passage discusses complications in defining unreliability and presents the alternative view that all narration offers 'a partial, positioned perspective,' shifting focus from reliability to 'how specific narrative strategies guide reader interpretation.'",
    difficulty: "medium",
    passageId: "rc10-p3",
  },
  {
    id: "rc-set10-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage mentions 'The Tell-Tale Heart' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all of Poe's narrators are reliable" },
      { letter: "B", text: "provide an example of a straightforward case where textual evidence clearly undermines narrator's claims" },
      { letter: "C", text: "demonstrate that psychological instability has no effect on reliability" },
      { letter: "D", text: "prove that all first-person narration is unreliable" },
      { letter: "E", text: "criticize Poe's narrative techniques" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents 'The Tell-Tale Heart' as one of the 'straightforward cases' where 'textual evidence clearly undermines a narrator's claims' through 'self-contradiction and implausible assertions.'",
    difficulty: "easy",
    passageId: "rc10-p3",
  },
  {
    id: "rc-set10-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the case of Huck Finn suggests that unreliability",
    answerChoices: [
      { letter: "A", text: "always involves factual inaccuracy" },
      { letter: "B", text: "can be attributed to moral framework differences even when factual reporting is accurate" },
      { letter: "C", text: "never depends on differences between narrator and reader values" },
      { letter: "D", text: "is irrelevant to moral questions" },
      { letter: "E", text: "proves that Twain was a poor writer" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Huck Finn as illustrating how 'the narrator's moral framework differs from readers' values, but his factual reporting appears accurate,' showing unreliability can stem from moral rather than factual issues.",
    difficulty: "medium",
    passageId: "rc10-p3",
  },
  {
    id: "rc-set10-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Wayne C. Booth defined unreliable narrators as those who",
    answerChoices: [
      { letter: "A", text: "always tell the complete truth" },
      { letter: "B", text: "diverge from the implied author's norms and values" },
      { letter: "C", text: "use first-person narrative perspective" },
      { letter: "D", text: "come from non-Western cultural traditions" },
      { letter: "E", text: "refuse to describe any events" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Booth 'introduced the term \"unreliable narrator\" in 1961 to describe narrators who diverge from the implied author's norms and values.'",
    difficulty: "easy",
    passageId: "rc10-p3",
  },
  {
    id: "rc-set10-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the alternative approach to analyzing narration would",
    answerChoices: [
      { letter: "A", text: "declare all narration completely unreliable" },
      { letter: "B", text: "ignore how narrative strategies affect reader interpretation" },
      { letter: "C", text: "examine how particular limitations and perspectives shape narration rather than diagnosing reliability" },
      { letter: "D", text: "assume that neutral, wholly reliable narration is always possible" },
      { letter: "E", text: "eliminate all analysis of narrative voice" },
    ],
    correctAnswer: "C",
    explanation: "The alternative approach shifts the question to 'how their particular limitations and perspectives shape what and how they narrate' and shifts attention from 'diagnosing narrators' failures' to examining narrative strategies.",
    difficulty: "hard",
    passageId: "rc10-p3",
  },
];

// Passage 4: The Canon and Cultural Capital
const passage4 = `The literary canon—that shifting collection of texts deemed essential to educated culture—functions simultaneously as pedagogical resource, cultural memory, and mechanism of social distinction. Debates about which works deserve inclusion often frame the issue as a question of intrinsic literary merit, as if aesthetic value existed independently of social contexts and institutional practices. Yet sociological analysis reveals that canonical status derives not from timeless excellence but from complex processes through which certain groups' cultural preferences become established as universal standards.

Pierre Bourdieu's concept of "cultural capital" illuminates these dynamics. Just as economic capital provides access to material resources, cultural capital—knowledge of legitimate culture, refined aesthetic sensibilities, familiarity with canonical works—confers social advantages. Educational institutions, particularly universities, serve as primary sites for transmitting and certifying cultural capital. Mastery of the canon signals class membership and educational attainment, distinguishing the culturally sophisticated from the supposedly unrefined.

The canon's composition reflects and reinforces existing power hierarchies. Until recently, Western literary canons overwhelmingly featured works by white, male, European or American authors, marginalizing women writers, authors of color, and non-Western literary traditions. This exclusion did not result from neutral aesthetic judgment but from historically specific assumptions about who could produce serious literature and which experiences merited representation. When women and minority writers gained greater inclusion during the late twentieth century, traditionalists often framed this as "politicization" of the canon—as if the previous exclusions had been apolitical.

However, simple expansion of the canon does not necessarily disrupt its gatekeeping function. Adding previously excluded authors while maintaining the basic structure of canonical authority may preserve existing hierarchies in modified form. If cultural capital consists in knowing which works matter and displaying proper appreciation for them, then expanding the list of required works simply shifts the content of legitimate knowledge without democratizing access to cultural capital itself. Those with educational and economic advantages will still more readily acquire whatever cultural knowledge institutions designate as legitimate.

More radical approaches question whether literature should be organized around canons at all. Why privilege a restricted list of supposedly essential texts rather than engaging with the full diversity of literary production, including popular genres, ephemeral works, and texts that challenge conventional aesthetic categories? This perspective suggests that the problem lies not in which specific works achieve canonical status but in the very notion that some literature possesses special authority warranting privileged attention. Yet abandoning the concept of a canon entirely raises difficult questions about pedagogical priorities, the basis for critical evaluation, and how literary traditions are understood and transmitted. The tension between canon critique and the practical need for shared reference points remains unresolved, reflecting deeper questions about the relationships between cultural value, institutional authority, and democratic access to knowledge.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set10-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that the traditional literary canon should never be modified" },
      { letter: "B", text: "demonstrate that aesthetic value exists independently of social contexts" },
      { letter: "C", text: "analyze how the literary canon functions as cultural capital and explore tensions in canon critique" },
      { letter: "D", text: "prove that all canonical works lack genuine literary merit" },
      { letter: "E", text: "advocate eliminating all forms of literary education" },
    ],
    correctAnswer: "C",
    explanation: "The passage examines the canon through the lens of cultural capital, discusses how it reflects power hierarchies, and explores various approaches to canon critique while acknowledging unresolved tensions.",
    difficulty: "medium",
    passageId: "rc10-p4",
  },
  {
    id: "rc-set10-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses Pierre Bourdieu's concept of cultural capital primarily in order to",
    answerChoices: [
      { letter: "A", text: "reject all sociological analysis of literature" },
      { letter: "B", text: "explain how canonical knowledge confers social advantages and signals class membership" },
      { letter: "C", text: "argue that economic capital is irrelevant to cultural issues" },
      { letter: "D", text: "prove that educational institutions serve no legitimate function" },
      { letter: "E", text: "demonstrate that aesthetic value is completely objective" },
    ],
    correctAnswer: "B",
    explanation: "Bourdieu's concept is introduced to illuminate how 'cultural capital...confers social advantages' and how 'mastery of the canon signals class membership and educational attainment.'",
    difficulty: "easy",
    passageId: "rc10-p4",
  },
  {
    id: "rc-set10-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that when traditionalists framed increased inclusion of women and minority writers as 'politicization,' they",
    answerChoices: [
      { letter: "A", text: "accurately recognized that previous exclusions were apolitical" },
      { letter: "B", text: "failed to acknowledge that previous exclusions reflected political assumptions" },
      { letter: "C", text: "demonstrated perfect understanding of canon formation" },
      { letter: "D", text: "proved that aesthetic judgment is always neutral" },
      { letter: "E", text: "showed that expanding the canon solves all problems" },
    ],
    correctAnswer: "B",
    explanation: "The passage states traditionalists framed expansion as politicization 'as if the previous exclusions had been apolitical,' implying those exclusions were in fact political but not recognized as such.",
    difficulty: "hard",
    passageId: "rc10-p4",
  },
  {
    id: "rc-set10-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, simply expanding the canon may not disrupt its gatekeeping function because",
    answerChoices: [
      { letter: "A", text: "expansion automatically eliminates all hierarchies" },
      { letter: "B", text: "it may preserve existing hierarchies by maintaining canonical authority's basic structure" },
      { letter: "C", text: "no one cares about which works are canonical" },
      { letter: "D", text: "cultural capital becomes irrelevant once the canon expands" },
      { letter: "E", text: "all previously excluded authors refuse canonical inclusion" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that expansion 'while maintaining the basic structure of canonical authority may preserve existing hierarchies in modified form,' as those with advantages will still more readily acquire designated cultural knowledge.",
    difficulty: "medium",
    passageId: "rc10-p4",
  },
  {
    id: "rc-set10-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the tension between canon critique and practical pedagogical needs can best be characterized as",
    answerChoices: [
      { letter: "A", text: "dismissive of practical concerns" },
      { letter: "B", text: "certain that abandoning canons entirely solves all problems" },
      { letter: "C", text: "recognition that this tension remains unresolved and reflects deeper questions" },
      { letter: "D", text: "conviction that traditional canons should never change" },
      { letter: "E", text: "indifference to questions of cultural value" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'the tension...remains unresolved, reflecting deeper questions' about cultural value, institutional authority, and democratic access—acknowledging complexity rather than claiming resolution.",
    difficulty: "medium",
    passageId: "rc10-p4",
  },
];

export const rcQuestionsSet10: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
