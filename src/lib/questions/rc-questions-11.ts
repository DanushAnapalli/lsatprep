// Reading Comprehension Questions - Set 11 (Art History & Aesthetics)
import { Question } from "../lsat-types";

// Passage 1: Renaissance Perspective and Visual Representation
const passage1 = `The development of linear perspective during the Italian Renaissance is often celebrated as a technical breakthrough that enabled artists to represent three-dimensional space accurately on flat surfaces. This triumphalist narrative, however, obscures both the ideological dimensions of perspectival representation and its status as one possible convention among many, rather than a transparent window onto reality. Far from being a neutral technique for recording visual truth, linear perspective embodies specific assumptions about the viewing subject, spatial relationships, and the nature of representation itself.

Linear perspective constructs space according to mathematical principles derived from optics. Objects appear smaller as distance increases; parallel lines converge toward vanishing points on the horizon; spatial relationships can be calculated geometrically. These rules produce images that correspond to monocular vision from a fixed viewpoint—specifically, the view of a single, stationary eye. Renaissance theorists like Leone Battista Alberti explicitly compared paintings to windows through which viewers observe depicted scenes, with the picture plane functioning as a transparent intersection between viewer and world.

This conception privileges a particular viewing position: centered, distanced, controlling. The viewer stands outside the pictorial space, surveying it from a position of mastery. Art historian Erwin Panofsky argued that linear perspective symbolically expresses Renaissance individualism and rationalism, positioning the autonomous subject as the origin point from which spatial order emanates. More recent scholars have emphasized perspective's connections to emerging capitalist social relations and technologies of surveillance—its affinities with accounting systems, cartography, and other instruments for organizing and controlling space.

Yet perspective's supposed realism is an artifact of cultural familiarity rather than natural correspondence to vision. Binocular human vision differs significantly from the monocular viewpoint perspective assumes. We perceive through two eyes that constantly move, scanning environments rather than fixing on single points. Peripheral vision operates differently from focused central vision. Moreover, perception involves active cognitive interpretation, not passive reception of optical information. The brain constructs unified experiences from discontinuous sensory inputs, a process perspective's frozen geometric relationships cannot capture.

Non-Western artistic traditions developed sophisticated approaches to spatial representation that reject perspectival conventions while achieving their own forms of coherence. Chinese landscape painting employs shifting viewpoints that allow simultaneous depiction of near and distant elements without converging orthogonals. Japanese screens organize space through overlapping planes and decorative patterning rather than illusionistic depth. These alternatives demonstrate that perspective represents one culturally specific solution to representational problems, not the inevitable outcome of attempting accurate depiction. Recognizing perspective's conventional character need not diminish appreciation for Renaissance painting's achievements, but it should temper claims that perspective discovered universal truths about visual experience.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set11-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Linear perspective represents a transparent, neutral technique for accurate visual representation" },
      { letter: "B", text: "Renaissance artists made no significant technical contributions to visual representation" },
      { letter: "C", text: "Linear perspective is a culturally specific convention embodying particular assumptions rather than universal visual truth" },
      { letter: "D", text: "All non-Western artistic traditions are superior to Renaissance perspective" },
      { letter: "E", text: "Perspective perfectly corresponds to natural human binocular vision" },
    ],
    correctAnswer: "C",
    explanation: "The passage challenges triumphalist narratives by arguing that perspective is 'one possible convention among many' that 'embodies specific assumptions' and represents 'one culturally specific solution' rather than universal truth.",
    difficulty: "medium",
    passageId: "rc11-p1",
  },
  {
    id: "rc-set11-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions Leone Battista Alberti primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize his understanding of optical principles" },
      { letter: "B", text: "illustrate how Renaissance theorists explicitly framed perspective as a transparent window" },
      { letter: "C", text: "argue that all Renaissance artists rejected perspective" },
      { letter: "D", text: "demonstrate that perspective has no mathematical basis" },
      { letter: "E", text: "prove that Italian art was inferior to other traditions" },
    ],
    correctAnswer: "B",
    explanation: "Alberti is cited as an example of Renaissance theorists who 'explicitly compared paintings to windows through which viewers observe depicted scenes,' supporting the discussion of perspective's underlying assumptions.",
    difficulty: "easy",
    passageId: "rc11-p1",
  },
  {
    id: "rc-set11-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, the author would most likely agree that perspective's appearance of realism results from",
    answerChoices: [
      { letter: "A", text: "its perfect correspondence to natural human vision" },
      { letter: "B", text: "universal laws of visual perception applicable to all cultures" },
      { letter: "C", text: "cultural familiarity rather than natural correspondence to vision" },
      { letter: "D", text: "its superiority to all other representational systems" },
      { letter: "E", text: "divine revelation of artistic truth" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'perspective's supposed realism is an artifact of cultural familiarity rather than natural correspondence to vision,' then details differences between perspectival representation and actual human perception.",
    difficulty: "medium",
    passageId: "rc11-p1",
  },
  {
    id: "rc-set11-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, linear perspective constructs space according to which of the following principles?",
    answerChoices: [
      { letter: "A", text: "Objects appear larger as distance increases" },
      { letter: "B", text: "Parallel lines never converge" },
      { letter: "C", text: "Objects appear smaller as distance increases and parallel lines converge toward vanishing points" },
      { letter: "D", text: "Spatial relationships cannot be calculated mathematically" },
      { letter: "E", text: "All viewpoints are depicted simultaneously" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly lists perspective's mathematical principles: 'Objects appear smaller as distance increases; parallel lines converge toward vanishing points on the horizon; spatial relationships can be calculated geometrically.'",
    difficulty: "easy",
    passageId: "rc11-p1",
  },
  {
    id: "rc-set11-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that Chinese landscape painting and Japanese screens demonstrate that",
    answerChoices: [
      { letter: "A", text: "only perspective can achieve spatial coherence" },
      { letter: "B", text: "non-Western art failed to develop sophisticated representational approaches" },
      { letter: "C", text: "alternative representational systems can achieve coherence without perspectival conventions" },
      { letter: "D", text: "all artistic traditions must eventually adopt Western perspective" },
      { letter: "E", text: "spatial representation is impossible without vanishing points" },
    ],
    correctAnswer: "C",
    explanation: "These examples are presented as 'sophisticated approaches to spatial representation that reject perspectival conventions while achieving their own forms of coherence,' demonstrating 'perspective represents one culturally specific solution.'",
    difficulty: "hard",
    passageId: "rc11-p1",
  },
];

// Passage 2: Abstract Expressionism and Critical Reception
const passage2 = `The critical reception of Abstract Expressionism during the 1940s and 1950s illustrates how aesthetic judgments intertwine with political ideology and institutional interests. The movement's elevation to represent the pinnacle of American artistic achievement occurred not through spontaneous recognition of transcendent merit, but through deliberate promotion by critics, museums, and government agencies whose aesthetic preferences aligned with Cold War cultural politics. Understanding this history requires examining both what Abstract Expressionism represented and what cultural work its champions needed it to perform.

The Abstract Expressionists—Jackson Pollock, Mark Rothko, Willem de Kooning, and others—rejected representational imagery in favor of gestural abstraction, large-scale canvases, and emphasis on the artist's subjective creative process. Critic Clement Greenberg championed the movement as the culmination of modernist painting's progressive purification, arguing that each medium should pursue effects unique to itself. For painting, this meant pure visuality—the exploration of flatness, color relationships, and surface qualities divorced from literary or narrative content.

However, Abstract Expressionism's promotion also served political purposes. During the Cold War, American cultural institutions sought to demonstrate the superiority of capitalist democracy over Soviet communism. Abstract Expressionism provided ideal material: it represented individual freedom and creativity (contrasting with Soviet-mandated Socialist Realism), appeared apolitical (unlike the social realist art of the 1930s), and asserted American cultural leadership (challenging European artistic dominance). The CIA covertly funded exhibitions of Abstract Expressionist painting in Europe and Asia, using modernist art as propaganda for American values.

This historical context complicates claims about Abstract Expressionism's purely aesthetic significance. The movement's critical success cannot be separated from institutional support that elevated certain artists while marginalizing others—particularly women artists and artists of color who faced systematic exclusion from galleries and museums. Lee Krasner and Joan Mitchell, for instance, produced work comparable to their male contemporaries but received far less recognition during the movement's ascendancy. The heroic narrative of individual artistic genius that dominated Abstract Expressionism's reception obscured both collaborative dimensions of artistic production and structural barriers that shaped whose work gained visibility.

Moreover, readings of Abstract Expressionism as apolitical themselves constituted political positions. The assertion that art should transcend political concerns, focusing on purely formal qualities, implicitly endorsed existing power structures by treating withdrawal from explicit political engagement as neutral. Artists like Philip Guston who later returned to representation and political commentary faced criticism for supposedly betraying modernism's achievements, revealing how the ideology of artistic autonomy could function conservatively.

Recognizing Abstract Expressionism's entanglement with institutional and political interests need not reduce its artistic significance to mere ideological artifact. The paintings retain power to move viewers, and formal analysis remains valuable. However, this history demonstrates that aesthetic value emerges within social contexts—that no sharp line separates artistic merit from the institutional frameworks, critical discourses, and political circumstances that shape how art is produced, displayed, interpreted, and valued.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set11-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central claim of the passage?",
    answerChoices: [
      { letter: "A", text: "Abstract Expressionism had no genuine artistic merit" },
      { letter: "B", text: "Abstract Expressionism's elevation resulted from aesthetic merit alone, independent of political or institutional factors" },
      { letter: "C", text: "Abstract Expressionism's critical reception demonstrates how aesthetic judgments intertwine with political ideology and institutional interests" },
      { letter: "D", text: "All Abstract Expressionist artists were consciously engaged in CIA propaganda efforts" },
      { letter: "E", text: "Soviet Socialist Realism was artistically superior to Abstract Expressionism" },
    ],
    correctAnswer: "C",
    explanation: "The passage's opening statement—that Abstract Expressionism's reception 'illustrates how aesthetic judgments intertwine with political ideology and institutional interests'—frames the entire analysis of the movement's institutional and political context.",
    difficulty: "medium",
    passageId: "rc11-p2",
  },
  {
    id: "rc-set11-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses Clement Greenberg's criticism primarily in order to",
    answerChoices: [
      { letter: "A", text: "present the aesthetic rationale used to champion Abstract Expressionism" },
      { letter: "B", text: "argue that formalist criticism is the only valid approach to art" },
      { letter: "C", text: "demonstrate that Greenberg understood the CIA's involvement" },
      { letter: "D", text: "prove that Abstract Expressionism lacked artistic coherence" },
      { letter: "E", text: "show that all art criticism is politically neutral" },
    ],
    correctAnswer: "A",
    explanation: "Greenberg is presented as championing the movement 'as the culmination of modernist painting's progressive purification,' explaining the aesthetic framework through which Abstract Expressionism was promoted.",
    difficulty: "easy",
    passageId: "rc11-p2",
  },
  {
    id: "rc-set11-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the characterization of Abstract Expressionism as apolitical",
    answerChoices: [
      { letter: "A", text: "accurately reflected the movement's complete detachment from politics" },
      { letter: "B", text: "itself constituted a political position by implicitly endorsing existing power structures" },
      { letter: "C", text: "proved that art can never have political dimensions" },
      { letter: "D", text: "demonstrated perfect neutrality in aesthetic judgment" },
      { letter: "E", text: "was universally rejected by all critics at the time" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'readings of Abstract Expressionism as apolitical themselves constituted political positions' that 'implicitly endorsed existing power structures by treating withdrawal from explicit political engagement as neutral.'",
    difficulty: "hard",
    passageId: "rc11-p2",
  },
  {
    id: "rc-set11-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, Abstract Expressionism served Cold War cultural politics by",
    answerChoices: [
      { letter: "A", text: "promoting Socialist Realism" },
      { letter: "B", text: "representing individual freedom and asserting American cultural leadership" },
      { letter: "C", text: "supporting European artistic dominance" },
      { letter: "D", text: "eliminating all forms of creative expression" },
      { letter: "E", text: "advocating for communist ideology" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Abstract Expressionism 'represented individual freedom and creativity...appeared apolitical...and asserted American cultural leadership,' making it ideal for Cold War cultural politics.",
    difficulty: "easy",
    passageId: "rc11-p2",
  },
  {
    id: "rc-set11-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward Abstract Expressionism's artistic significance can best be characterized as",
    answerChoices: [
      { letter: "A", text: "complete dismissal as mere propaganda" },
      { letter: "B", text: "uncritical celebration of transcendent genius" },
      { letter: "C", text: "balanced recognition that institutional context doesn't eliminate artistic value but shapes how art is valued" },
      { letter: "D", text: "indifference to questions of aesthetic merit" },
      { letter: "E", text: "hostility toward all modernist art movements" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that recognizing political entanglement 'need not reduce its artistic significance to mere ideological artifact' as 'paintings retain power,' but demonstrates 'aesthetic value emerges within social contexts.'",
    difficulty: "medium",
    passageId: "rc11-p2",
  },
];

// Passage 3: Aesthetic Experience and Neuroscience
const passage3 = `The recent application of neuroscientific methods to aesthetic experience promises, according to proponents, to ground subjective responses to art in objective brain processes. By imaging neural activity while subjects view paintings or listen to music, researchers claim to identify the biological basis of beauty, emotion, and artistic appreciation. Yet this neuroaesthetic research program faces fundamental methodological and conceptual challenges that complicate any straightforward reduction of aesthetic experience to neural correlates.

Neuroaesthetic studies typically measure brain activity using functional magnetic resonance imaging (fMRI) while subjects engage with artworks, then identify regions showing differential activation compared to baseline conditions. Some findings appear intuitively plausible: viewing aesthetically pleasing images activates reward circuits similar to those involved in responses to food or sexual stimuli. Regions associated with emotion processing show increased activity during moving musical passages. The default mode network, implicated in self-referential thought, activates during aesthetic contemplation.

However, correlation between neural activity and reported aesthetic experience does not establish that brain states constitute or explain the experience. That certain brain regions activate during aesthetic encounters tells us that these regions are involved, but not what role they play or how their activity produces the qualitative character of aesthetic response. The same neural region may participate in diverse psychological processes; the mere fact of activation provides limited explanatory power without understanding its functional significance within broader neural networks.

Moreover, the experimental conditions required for neuroimaging may fundamentally alter aesthetic experience. Subjects lie motionless in noisy scanner environments, viewing images briefly on small screens or hearing music through headphones while focusing on experimental tasks. These conditions differ dramatically from naturalistic encounters with art in museums, concert halls, or reading. Whether findings from such constrained settings transfer to genuine aesthetic experiences remains uncertain. The ecological validity of neuroaesthetic research is further compromised by the use of isolated stimuli—individual paintings, brief musical excerpts—divorced from the interpretive contexts that shape aesthetic responses in practice.

The conceptual challenge runs deeper. Aesthetic experience involves not merely neural processing but interpretation shaped by cultural knowledge, personal history, and critical frameworks. Understanding a painting's historical context, recognizing artistic conventions, or appreciating its relationship to tradition all contribute to aesthetic response, yet these dimensions of meaning cannot be localized in brain regions. The same visual stimulus may evoke entirely different responses depending on what the viewer knows about it or how it is framed. Neuroaesthetics tends to treat aesthetic objects as stimuli that elicit responses, neglecting the active interpretive work through which viewers construct meaning.

None of this demonstrates that neuroscience is irrelevant to understanding aesthetic experience. Neural processes clearly enable such experiences, and investigating these processes may yield valuable insights. However, the reductionist ambition to explain aesthetic value or the nature of art through brain imaging alone reflects a form of scientism that mistakes correlation for explanation and conflates necessary conditions with sufficient accounts. Aesthetic experience emerges from the interaction between neural capacities, cultural contexts, and meaningful objects—a complexity that cannot be captured by measuring brain activity in isolation.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set11-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Neuroscience has completely explained all aspects of aesthetic experience" },
      { letter: "B", text: "Brain activity has no relationship to aesthetic responses" },
      { letter: "C", text: "Neuroaesthetic research faces fundamental challenges and cannot reduce aesthetic experience to neural correlates alone" },
      { letter: "D", text: "All aesthetic judgments are purely subjective with no biological basis" },
      { letter: "E", text: "fMRI scanning provides perfect understanding of art appreciation" },
    ],
    correctAnswer: "C",
    explanation: "The passage argues that while neuroscience may provide insights, 'fundamental methodological and conceptual challenges...complicate any straightforward reduction of aesthetic experience to neural correlates,' emphasizing complexity beyond brain imaging.",
    difficulty: "medium",
    passageId: "rc11-p3",
  },
  {
    id: "rc-set11-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses experimental conditions in neuroimaging primarily in order to",
    answerChoices: [
      { letter: "A", text: "praise the sophistication of scanning technology" },
      { letter: "B", text: "question whether findings from constrained settings transfer to genuine aesthetic experiences" },
      { letter: "C", text: "argue that all neuroscientific research is worthless" },
      { letter: "D", text: "demonstrate that museums should install MRI scanners" },
      { letter: "E", text: "prove that aesthetic experience never involves neural activity" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes constrained experimental conditions that 'differ dramatically from naturalistic encounters with art' and questions 'whether findings from such constrained settings transfer to genuine aesthetic experiences.'",
    difficulty: "easy",
    passageId: "rc11-p3",
  },
  {
    id: "rc-set11-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, correlation between neural activity and aesthetic experience",
    answerChoices: [
      { letter: "A", text: "proves that brain states fully explain aesthetic responses" },
      { letter: "B", text: "shows involvement but doesn't establish how activity produces qualitative character of experience" },
      { letter: "C", text: "demonstrates that neuroscience should be abandoned" },
      { letter: "D", text: "indicates that all aesthetic judgments are identical" },
      { letter: "E", text: "eliminates any role for cultural interpretation" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that correlation 'does not establish that brain states constitute or explain the experience' and that activation 'tells us that these regions are involved, but not what role they play or how their activity produces the qualitative character.'",
    difficulty: "medium",
    passageId: "rc11-p3",
  },
  {
    id: "rc-set11-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, aesthetic experience involves which of the following beyond neural processing?",
    answerChoices: [
      { letter: "A", text: "Nothing—neural processing alone fully accounts for aesthetic response" },
      { letter: "B", text: "Interpretation shaped by cultural knowledge, personal history, and critical frameworks" },
      { letter: "C", text: "Only genetic factors determining aesthetic preferences" },
      { letter: "D", text: "Purely random responses unrelated to any contextual factors" },
      { letter: "E", text: "Exclusively physiological reflexes" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'aesthetic experience involves not merely neural processing but interpretation shaped by cultural knowledge, personal history, and critical frameworks.'",
    difficulty: "easy",
    passageId: "rc11-p3",
  },
  {
    id: "rc-set11-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the reductionist ambition to explain aesthetic value through brain imaging alone reflects",
    answerChoices: [
      { letter: "A", text: "perfect scientific methodology" },
      { letter: "B", text: "complete understanding of aesthetic complexity" },
      { letter: "C", text: "scientism that mistakes correlation for explanation and necessary conditions for sufficient accounts" },
      { letter: "D", text: "the only valid approach to studying art" },
      { letter: "E", text: "universal agreement among all researchers" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that this reductionist ambition 'reflects a form of scientism that mistakes correlation for explanation and conflates necessary conditions with sufficient accounts.'",
    difficulty: "hard",
    passageId: "rc11-p3",
  },
];

// Passage 4: Photography and Artistic Status
const passage4 = `Photography's contested status as art illuminates fundamental questions about aesthetic value, technical skill, and the relationship between artistic intention and mechanical reproduction. When photography emerged in the nineteenth century, many critics dismissed it as mere mechanical recording, incapable of the creative transformation that defines genuine art. Yet this skepticism itself revealed unexamined assumptions about what constitutes artistic activity—assumptions that photography's development would force into reconsideration.

Early objections centered on photography's mechanical nature. Whereas painting required years of training in drawing, color theory, and composition, photography apparently demanded only the operation of a device that automatically captured whatever appeared before the lens. The camera recorded indiscriminately; it could not select, interpret, or idealize like a painter. French poet Charles Baudelaire notoriously declared photography "art's most mortal enemy," arguing that its mechanical precision would satisfy bourgeois desires for verisimilitude while corrupting true artistic imagination.

Yet this characterization overlooked the numerous decisions photographers make. Selecting subjects, framing compositions, controlling exposure, timing the shutter release, processing negatives, and making prints all involve artistic choices that shape the final image. Photographers like Alfred Stieglitz and Edward Weston demonstrated that the medium could achieve effects unavailable to painting: capturing decisive moments, revealing unnoticed details, exploring light and shadow through the lens's unique properties. Their work argued through example that photography constituted a distinct art form with its own aesthetic possibilities rather than inferior painting.

The defense of photography as art often emphasized these creative decisions, asserting that technical mediation did not eliminate artistic agency. However, this strategy paradoxically accepted the premise that mechanical reproduction itself was aesthetically suspect—that photography achieved art status despite rather than through its technological basis. Walter Benjamin proposed an alternative framework, arguing that mechanical reproduction fundamentally transformed art's nature and social function. Rather than asking whether photography could be art in traditional terms, Benjamin suggested that photography revealed those terms as historically specific rather than eternal.

Contemporary digital photography has renewed these debates. Image manipulation software enables extensive post-processing that can transform photographs beyond recognition, while artificial intelligence can now generate convincing photographic images with no camera or human photographer involved. Do such developments vindicate claims that photography is genuinely artistic (since photographers extensively manipulate images) or undermine its credibility (since automated processes eliminate human creative control)? The question may presuppose a false dichotomy.

Perhaps photography's significance lies precisely in blurring boundaries between artistic creation and mechanical reproduction, intention and automation, unique original and infinite copy. Rather than forcing photography into preexisting categories, we might recognize how it challenges those categories' adequacy. The anxiety photography provokes about artistic status reflects deeper uncertainties about how to understand creativity, authorship, and aesthetic value in an age of technological mediation—uncertainties that extend far beyond photography to encompass our entire relationship with images in technologically saturated culture.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set11-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "prove that photography can never achieve artistic status" },
      { letter: "B", text: "examine how photography's contested artistic status reveals questions about aesthetic value and challenges traditional categories" },
      { letter: "C", text: "argue that painting is superior to all photographic work" },
      { letter: "D", text: "demonstrate that mechanical reproduction has no relationship to art" },
      { letter: "E", text: "advocate eliminating all forms of technological mediation from art" },
    ],
    correctAnswer: "B",
    explanation: "The passage explores photography's contested status as illuminating 'fundamental questions about aesthetic value' and ultimately suggests it 'challenges those categories' adequacy' regarding creativity and authorship.",
    difficulty: "medium",
    passageId: "rc11-p4",
  },
  {
    id: "rc-set11-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage mentions Charles Baudelaire primarily in order to",
    answerChoices: [
      { letter: "A", text: "endorse his view that photography should be banned" },
      { letter: "B", text: "illustrate early critical objections to photography as art based on its mechanical nature" },
      { letter: "C", text: "prove that all poets misunderstand visual arts" },
      { letter: "D", text: "demonstrate that nineteenth-century critics universally accepted photography" },
      { letter: "E", text: "argue that French criticism was always inferior" },
    ],
    correctAnswer: "B",
    explanation: "Baudelaire's dismissal of photography as 'art's most mortal enemy' exemplifies 'early objections centered on photography's mechanical nature' that the passage proceeds to challenge.",
    difficulty: "easy",
    passageId: "rc11-p4",
  },
  {
    id: "rc-set11-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that the common defense of photography as art by emphasizing creative decisions was paradoxical because",
    answerChoices: [
      { letter: "A", text: "it proved photography required no decisions" },
      { letter: "B", text: "it accepted the premise that mechanical reproduction was aesthetically suspect" },
      { letter: "C", text: "it demonstrated that cameras make all artistic choices" },
      { letter: "D", text: "it showed photography was identical to painting" },
      { letter: "E", text: "it eliminated all technological aspects of photography" },
    ],
    correctAnswer: "B",
    explanation: "The passage states this defense 'paradoxically accepted the premise that mechanical reproduction itself was aesthetically suspect—that photography achieved art status despite rather than through its technological basis.'",
    difficulty: "hard",
    passageId: "rc11-p4",
  },
  {
    id: "rc-set11-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Walter Benjamin proposed that",
    answerChoices: [
      { letter: "A", text: "photography could never be considered art" },
      { letter: "B", text: "mechanical reproduction transformed art's nature and social function rather than simply failing traditional standards" },
      { letter: "C", text: "all technological mediation should be eliminated from aesthetic experience" },
      { letter: "D", text: "traditional artistic categories were eternal and unchanging" },
      { letter: "E", text: "photography was identical to painting in all respects" },
    ],
    correctAnswer: "B",
    explanation: "The passage states Benjamin 'arguing that mechanical reproduction fundamentally transformed art's nature and social function' and 'suggested that photography revealed those terms as historically specific rather than eternal.'",
    difficulty: "medium",
    passageId: "rc11-p4",
  },
  {
    id: "rc-set11-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward using preexisting artistic categories to evaluate photography can best be characterized as",
    answerChoices: [
      { letter: "A", text: "enthusiastic endorsement of traditional categories' adequacy" },
      { letter: "B", text: "complete rejection of all aesthetic evaluation" },
      { letter: "C", text: "skepticism that such categories adequately address photography's challenge to traditional distinctions" },
      { letter: "D", text: "indifference to questions of artistic categorization" },
      { letter: "E", text: "certainty that photography perfectly fits all traditional categories" },
    ],
    correctAnswer: "C",
    explanation: "The passage suggests 'rather than forcing photography into preexisting categories, we might recognize how it challenges those categories' adequacy,' reflecting critical skepticism toward traditional frameworks.",
    difficulty: "medium",
    passageId: "rc11-p4",
  },
];

export const rcQuestionsSet11: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
