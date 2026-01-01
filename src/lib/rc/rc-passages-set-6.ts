// Reading Comprehension Expansion Set 6
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - CORPORATE LIABILITY AND RESPONDEAT SUPERIOR
// ============================================

const passage1 = `The doctrine of respondeat superior, Latin for "let the master answer," holds employers vicariously liable for the tortious acts of their employees committed within the scope of employment. This principle has ancient roots, traceable to Roman law concepts that held masters responsible for wrongs committed by slaves. In modern corporate law, respondeat superior serves multiple functions: it incentivizes employers to hire carefully and supervise diligently, ensures that injured parties have a solvent defendant, and spreads the costs of workplace accidents across consumers through pricing.

Determining whether an employee's conduct falls within the "scope of employment" presents the primary analytical challenge in respondeat superior cases. Courts generally consider whether the conduct was of the kind the employee was hired to perform, whether it occurred substantially within authorized time and space limits, and whether it was motivated at least in part by a purpose to serve the employer. Minor deviations from assigned duties—a delivery driver taking a slightly longer route, for instance—typically remain within the scope of employment, while substantial departures—using the company vehicle for a personal vacation—do not.

The doctrine's application becomes particularly complex when employees commit intentional torts or criminal acts. Traditional doctrine held employers liable only for negligent acts within employment scope, reasoning that intentional wrongdoing could never serve an employer's interests. Modern courts, however, increasingly impose liability for intentional torts when the employment relationship facilitates the wrongdoing. A security guard who uses excessive force, a debt collector who employs illegal threats, or a nursing home attendant who abuses a patient may all generate employer liability because their positions provided the opportunity and means for the misconduct.

Corporate criminal liability presents even greater complexity. While corporations can face criminal prosecution for acts committed by employees within employment scope, the justifications differ from civil liability. Criminal law's traditional focus on moral culpability fits uneasily with vicarious liability, since the corporation itself—an artificial legal entity—cannot possess criminal intent. Courts have developed various doctrines to address this tension, including imputing the intent of high-level employees to the corporation and imposing liability based on corporate culture or inadequate compliance systems.

Critics argue that expansive corporate liability produces inefficiencies and injustices. If corporations face liability for all employee misconduct, they may implement excessive monitoring that stifles employee autonomy and innovation. Moreover, imposing liability without direct corporate fault may punish shareholders—often pension funds and ordinary investors—who had no involvement in the wrongdoing. Defenders respond that corporate liability properly incentivizes institutional reform and that alternative approaches, such as relying solely on individual employee liability, would leave many victims uncompensated.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp6-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Respondeat superior should be abolished because it unfairly punishes corporations for employee misconduct." },
      { letter: "B", text: "The doctrine of respondeat superior makes employers liable for employee torts within employment scope, though determining scope and extending liability to intentional and criminal acts raises significant challenges and debates." },
      { letter: "C", text: "Criminal liability for corporations is fundamentally incompatible with traditional criminal law principles." },
      { letter: "D", text: "The primary purpose of respondeat superior is to ensure injured parties receive compensation." },
      { letter: "E", text: "Courts have uniformly applied respondeat superior doctrine across all types of employee misconduct." },
    ],
    correctAnswer: "B",
    explanation: "The passage explains respondeat superior, discusses scope of employment analysis, examines extensions to intentional torts and criminal acts, and presents the ongoing debate about corporate liability. Answer B captures this comprehensive treatment of the doctrine and its challenges.",
    difficulty: "medium",
    passageId: "rc-exp6-p1",
  },
  {
    id: "rc-exp6-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, courts determining whether conduct falls within the scope of employment generally consider all of the following EXCEPT:",
    answerChoices: [
      { letter: "A", text: "whether the conduct was of the kind the employee was hired to perform" },
      { letter: "B", text: "whether the conduct occurred substantially within authorized time and space limits" },
      { letter: "C", text: "whether the employee had previously been disciplined for similar conduct" },
      { letter: "D", text: "whether the conduct was motivated at least in part by a purpose to serve the employer" },
      { letter: "E", text: "whether the deviation from assigned duties was minor or substantial" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly lists three factors courts consider: kind of conduct hired to perform, time and space limits, and motivation to serve the employer. It also discusses deviation magnitude. The employee's disciplinary history is not mentioned as a factor.",
    difficulty: "easy",
    passageId: "rc-exp6-p1",
  },
  {
    id: "rc-exp6-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, a court applying modern doctrine would most likely hold an employer liable in which of the following situations?",
    answerChoices: [
      { letter: "A", text: "An off-duty employee commits assault while on personal vacation using no company resources." },
      { letter: "B", text: "A company security guard assaults a customer while attempting to detain a suspected shoplifter." },
      { letter: "C", text: "An employee steals merchandise from a competitor during non-work hours." },
      { letter: "D", text: "An employee causes an accident while driving to work before their shift begins." },
      { letter: "E", text: "A former employee vandalized company property after being terminated." },
    ],
    correctAnswer: "B",
    explanation: "The passage states modern courts impose liability for intentional torts 'when the employment relationship facilitates the wrongdoing,' specifically citing 'a security guard who uses excessive force' as an example. The guard in answer B fits this pattern precisely.",
    difficulty: "medium",
    passageId: "rc-exp6-p1",
  },
  {
    id: "rc-exp6-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the example of a delivery driver taking a slightly longer route primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that employers should more strictly supervise their employees" },
      { letter: "B", text: "illustrate the type of minor deviation that typically remains within employment scope" },
      { letter: "C", text: "criticize courts for being too lenient in scope determinations" },
      { letter: "D", text: "explain why criminal liability should not apply to corporations" },
      { letter: "E", text: "demonstrate the inefficiency of respondeat superior doctrine" },
    ],
    correctAnswer: "B",
    explanation: "The delivery driver example appears when the passage distinguishes between minor deviations that 'typically remain within the scope of employment' and substantial departures that do not. The example illustrates the minor deviation category.",
    difficulty: "easy",
    passageId: "rc-exp6-p1",
  },
  {
    id: "rc-exp6-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate about corporate liability can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly advocating for expansion of corporate liability" },
      { letter: "B", text: "dismissive of concerns raised by critics of corporate liability" },
      { letter: "C", text: "presenting both sides of the debate without clearly endorsing either position" },
      { letter: "D", text: "skeptical about the legitimacy of corporate criminal prosecution" },
      { letter: "E", text: "enthusiastically supportive of traditional limitations on employer liability" },
    ],
    correctAnswer: "C",
    explanation: "The author presents critics' arguments about inefficiencies and injustices and defenders' responses about incentives and compensation without indicating which view is correct, maintaining an analytically balanced perspective throughout.",
    difficulty: "medium",
    passageId: "rc-exp6-p1",
  },
  {
    id: "rc-exp6-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument against expansive corporate liability?",
    answerChoices: [
      { letter: "A", text: "Corporations with broad liability exposure have been shown to implement effective compliance programs." },
      { letter: "B", text: "Studies indicate that companies facing expansive liability have reduced employee autonomy without corresponding decreases in misconduct rates." },
      { letter: "C", text: "Injured parties frequently recover adequate compensation from individual wrongdoers." },
      { letter: "D", text: "High-level corporate executives often have direct knowledge of employee misconduct." },
      { letter: "E", text: "Corporate liability has led to increased prices that accurately reflect the costs of workplace accidents." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue that expansive liability may produce inefficiencies including 'excessive monitoring that stifles employee autonomy and innovation.' Evidence showing reduced autonomy without corresponding benefits would directly support this concern.",
    difficulty: "hard",
    passageId: "rc-exp6-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - QUANTUM MECHANICS AND WAVE-PARTICLE DUALITY
// ============================================

const passage2 = `The wave-particle duality of matter and light stands as one of the most counterintuitive yet well-established principles in physics. Classical physics conceived of waves and particles as fundamentally distinct phenomena: waves exhibited interference and diffraction patterns as they spread through space, while particles traveled in definite trajectories, possessing precise position and momentum at each instant. Quantum mechanics revealed that this dichotomy was an artifact of everyday experience at macroscopic scales, not a feature of nature at its most fundamental level.

The first hints of wave-particle duality emerged from studies of light. Maxwell's equations, triumphs of nineteenth-century physics, described light as electromagnetic waves, explaining phenomena like interference and polarization. Yet the photoelectric effect, in which light ejects electrons from metal surfaces, defied wave predictions. Albert Einstein, building on Max Planck's quantum hypothesis, proposed in 1905 that light consists of discrete energy packets—photons—whose energy depends on frequency. This particle-like behavior of light earned Einstein the Nobel Prize and established that light exhibits both wave and particle properties depending on experimental context.

Louis de Broglie's 1924 hypothesis extended duality in the opposite direction, proposing that particles of matter also exhibit wave-like properties. De Broglie suggested that every particle possesses an associated wavelength inversely proportional to its momentum. This initially speculative proposal received dramatic confirmation when Clinton Davisson and Lester Germer demonstrated that electrons diffract when scattered from crystal surfaces, producing interference patterns identical to those predicted for waves. Electron microscopy, utilizing electron wavelengths far shorter than visible light, would later become an essential scientific tool.

The double-slit experiment crystallizes wave-particle duality's strangeness. When particles are fired individually at a barrier with two slits, each particle arrives at the detector as a localized point—apparently traveling through one slit or the other. Yet over many trials, the arrival positions form an interference pattern characteristic of waves passing through both slits simultaneously. The pattern vanishes if detectors determine which slit each particle traverses, as though observation itself influences the outcome. This measurement problem continues to generate debate about the interpretation of quantum mechanics.

Physicists have proposed various interpretations to make sense of these phenomena. The Copenhagen interpretation, associated with Niels Bohr and Werner Heisenberg, holds that quantum systems exist in superpositions of states until measurement forces a definite outcome. The many-worlds interpretation proposes that all possible outcomes occur in branching parallel universes. Pilot wave theories, developed by de Broglie and David Bohm, maintain that particles have definite positions guided by real waves. Despite nearly a century of debate, no interpretation has achieved consensus, though all make identical experimental predictions.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp6-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Copenhagen interpretation provides the only coherent explanation of quantum phenomena." },
      { letter: "B", text: "Wave-particle duality, though counterintuitive, is well-established experimentally, and multiple interpretations attempt to explain it without achieving consensus." },
      { letter: "C", text: "Einstein's explanation of the photoelectric effect was more significant than de Broglie's matter wave hypothesis." },
      { letter: "D", text: "Classical physics accurately describes the behavior of matter at all scales." },
      { letter: "E", text: "The double-slit experiment proves that particles do not actually exist." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the development of wave-particle duality from light to matter, explains the double-slit experiment's strangeness, and notes that various interpretations exist without consensus. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp6-p2",
  },
  {
    id: "rc-exp6-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, de Broglie proposed that",
    answerChoices: [
      { letter: "A", text: "light consists of discrete energy packets called photons" },
      { letter: "B", text: "every particle possesses an associated wavelength inversely proportional to its momentum" },
      { letter: "C", text: "electrons cannot exhibit interference patterns" },
      { letter: "D", text: "classical physics accurately describes all physical phenomena" },
      { letter: "E", text: "measurement does not affect quantum systems" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that de Broglie 'suggested that every particle possesses an associated wavelength inversely proportional to its momentum.'",
    difficulty: "easy",
    passageId: "rc-exp6-p2",
  },
  {
    id: "rc-exp6-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, electron microscopy is possible because",
    answerChoices: [
      { letter: "A", text: "electrons travel in definite trajectories unlike light waves" },
      { letter: "B", text: "electrons have wave properties with wavelengths shorter than visible light" },
      { letter: "C", text: "the photoelectric effect ejects electrons from metal surfaces" },
      { letter: "D", text: "the Copenhagen interpretation was proven correct" },
      { letter: "E", text: "particles cannot produce interference patterns" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that electron microscopy 'utiliz[es] electron wavelengths far shorter than visible light,' implying that electrons' wave properties, particularly their short wavelengths, make electron microscopy useful as a scientific tool.",
    difficulty: "medium",
    passageId: "rc-exp6-p2",
  },
  {
    id: "rc-exp6-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the photoelectric effect primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Maxwell's electromagnetic theory as fundamentally incorrect" },
      { letter: "B", text: "demonstrate a phenomenon that revealed the particle-like behavior of light" },
      { letter: "C", text: "explain why de Broglie's hypothesis was rejected by the scientific community" },
      { letter: "D", text: "argue that Einstein's contributions to physics were overrated" },
      { letter: "E", text: "prove that waves and particles are identical phenomena" },
    ],
    correctAnswer: "B",
    explanation: "The photoelectric effect is introduced as a phenomenon that 'defied wave predictions' and led Einstein to propose that light consists of photons—demonstrating 'particle-like behavior of light' and establishing that light has both wave and particle properties.",
    difficulty: "medium",
    passageId: "rc-exp6-p2",
  },
  {
    id: "rc-exp6-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that the measurement problem in quantum mechanics involves",
    answerChoices: [
      { letter: "A", text: "the impossibility of conducting any quantum experiments" },
      { letter: "B", text: "the question of how observation appears to influence experimental outcomes" },
      { letter: "C", text: "disagreement about whether electrons exist" },
      { letter: "D", text: "the inability of instruments to detect individual particles" },
      { letter: "E", text: "the failure of de Broglie's wavelength formula" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes how the interference pattern 'vanishes if detectors determine which slit each particle traverses, as though observation itself influences the outcome,' and identifies this as the 'measurement problem' generating ongoing debate.",
    difficulty: "medium",
    passageId: "rc-exp6-p2",
  },
  {
    id: "rc-exp6-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A phenomenon is introduced, its historical development is traced, a key experiment is explained, and competing interpretations are surveyed." },
      { letter: "B", text: "A hypothesis is proposed, tested experimentally, and definitively confirmed." },
      { letter: "C", text: "Two competing theories are presented and one is shown to be superior." },
      { letter: "D", text: "A scientific controversy is described and resolved through new experimental evidence." },
      { letter: "E", text: "A chronological history of physics from ancient times to the present is provided." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces wave-particle duality, traces its development from Einstein to de Broglie, explains the double-slit experiment, and surveys interpretations (Copenhagen, many-worlds, pilot wave) without resolving the debate.",
    difficulty: "hard",
    passageId: "rc-exp6-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - RENAISSANCE PAINTING AND PERSPECTIVE
// ============================================

const passage3 = `The development of linear perspective in fifteenth-century Italian painting transformed not only artistic technique but also the relationship between viewers and pictorial space. Before perspective's systematization, medieval painters employed various conventions to suggest spatial relationships—placing more important figures larger regardless of distance, arranging elements in symbolic rather than spatial hierarchies, using overlapping forms and diminishing size inconsistently. The perspectival revolution established a mathematically precise system for representing three-dimensional space on two-dimensional surfaces.

Filippo Brunelleschi, the architect of Florence's cathedral dome, is credited with demonstrating perspective's principles around 1415 through ingenious experiments involving painted panels and mirrors. However, Leon Battista Alberti's treatise "Della Pittura" (1435) provided the theoretical foundation that enabled widespread adoption. Alberti conceived of the painting as a window through which viewers observe a depicted scene, with parallel lines converging toward a single vanishing point on the horizon. This construction placed the viewer in a specific relationship to the pictorial space—as if standing before an opening in a wall, observing an extension of real space beyond.

The mastery of perspective became central to Renaissance artistic identity and prestige. Paolo Uccello, according to Vasari's famous anecdote, became so obsessed with perspective that he would stay up all night studying its intricacies, telling his wife "what a sweet thing this perspective is!" Painters like Piero della Francesca combined artistic practice with mathematical treatises, demonstrating that painting required intellectual sophistication, not merely manual skill. This elevation of painting's status—from mechanical craft to liberal art—depended substantially on perspective's mathematical foundations.

Yet perspective is not merely a neutral technique for accurate representation. Art historians have noted its ideological dimensions: the perspectival system assumes a single, fixed viewing position, privileging one observer's viewpoint and constructing a hierarchical relationship between the viewing subject and viewed object. This monocular, static viewpoint differs dramatically from the mobile, binocular vision of actual human perception. Some critics argue that perspective participated in broader Renaissance transformations in subjectivity, helping to construct the conception of the individual as a autonomous rational observer positioned at the center of the world.

Later artists would both extend and challenge perspectival conventions. Baroque painters manipulated perspective to create dramatic ceiling frescoes that seemed to open onto heavenly realms. Nineteenth-century painters began questioning perspective's authority, with Cezanne's multiple viewpoints and compressed spaces anticipating Cubism's more radical fragmentations. Contemporary artists may employ perspective ironically, acknowledging it as one convention among many rather than the natural or correct way of representing space. The perspectival revolution, while transformative, proved to be neither universal nor permanent.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp6-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Brunelleschi's experiments with mirrors definitively established the correct method for representing space in painting." },
      { letter: "B", text: "Linear perspective transformed Renaissance painting and artistic status, but its conventions have ideological dimensions and have been challenged by later artists." },
      { letter: "C", text: "Medieval painting was inferior to Renaissance painting because it lacked mathematical precision." },
      { letter: "D", text: "Contemporary artists have completely abandoned the use of perspective in their work." },
      { letter: "E", text: "Perspective should be considered a neutral and universally valid technique for representing space." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes perspective's transformative effects on Renaissance painting and artistic status, examines its ideological dimensions, and notes how later artists both extended and challenged it. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp6-p3",
  },
  {
    id: "rc-exp6-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Alberti's treatise 'Della Pittura' contributed to perspective's development by",
    answerChoices: [
      { letter: "A", text: "providing practical demonstrations using painted panels and mirrors" },
      { letter: "B", text: "establishing the theoretical foundation that enabled widespread adoption" },
      { letter: "C", text: "criticizing medieval approaches to spatial representation" },
      { letter: "D", text: "proving that perspective was ideologically neutral" },
      { letter: "E", text: "inspiring Baroque ceiling frescoes" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Leon Battista Alberti's treatise \"Della Pittura\" (1435) provided the theoretical foundation that enabled widespread adoption.'",
    difficulty: "easy",
    passageId: "rc-exp6-p3",
  },
  {
    id: "rc-exp6-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the elevation of painting from mechanical craft to liberal art was linked to",
    answerChoices: [
      { letter: "A", text: "the abandonment of all medieval conventions" },
      { letter: "B", text: "the mathematical and intellectual foundations of perspective" },
      { letter: "C", text: "the rejection of Brunelleschi's experiments" },
      { letter: "D", text: "the use of symbolic rather than spatial hierarchies" },
      { letter: "E", text: "Baroque manipulation of perspectival conventions" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'this elevation of painting's status—from mechanical craft to liberal art—depended substantially on perspective's mathematical foundations,' directly connecting painting's elevated status to perspective's intellectual demands.",
    difficulty: "medium",
    passageId: "rc-exp6-p3",
  },
  {
    id: "rc-exp6-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author includes the anecdote about Paolo Uccello primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize Renaissance artists for neglecting their families" },
      { letter: "B", text: "demonstrate the obsessive importance perspective held for Renaissance artists" },
      { letter: "C", text: "argue that perspective was ultimately harmful to artistic development" },
      { letter: "D", text: "contrast Uccello's approach with that of Piero della Francesca" },
      { letter: "E", text: "explain why Vasari was an unreliable source" },
    ],
    correctAnswer: "B",
    explanation: "The Uccello anecdote appears in the paragraph about perspective's centrality to 'Renaissance artistic identity and prestige,' illustrating how deeply artists engaged with perspectival problems. His exclamation about perspective's sweetness dramatizes this obsession.",
    difficulty: "medium",
    passageId: "rc-exp6-p3",
  },
  {
    id: "rc-exp6-017",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that critics who emphasize perspective's ideological dimensions would likely argue that",
    answerChoices: [
      { letter: "A", text: "perspective provides the most accurate representation of human visual experience" },
      { letter: "B", text: "medieval painting's spatial conventions were mathematically sophisticated" },
      { letter: "C", text: "perspective assumes and promotes particular ways of understanding the relationship between observer and world" },
      { letter: "D", text: "all artists should employ strict perspectival techniques" },
      { letter: "E", text: "Baroque ceiling frescoes were failures of perspectival application" },
    ],
    correctAnswer: "C",
    explanation: "The passage notes perspective's 'ideological dimensions,' including its assumption of a single viewpoint and construction of 'a hierarchical relationship between the viewing subject and viewed object,' participating in broader transformations in subjectivity and the conception of the individual observer.",
    difficulty: "medium",
    passageId: "rc-exp6-p3",
  },
  {
    id: "rc-exp6-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following artistic approaches would most clearly challenge perspectival conventions?",
    answerChoices: [
      { letter: "A", text: "A painting that uses a single vanishing point with mathematical precision" },
      { letter: "B", text: "A painting that depicts multiple viewpoints simultaneously on the same canvas" },
      { letter: "C", text: "A painting that places more important figures larger regardless of distance" },
      { letter: "D", text: "A painting that faithfully follows Alberti's theoretical principles" },
      { letter: "E", text: "A painting that extends perspectival techniques to create illusionistic ceiling effects" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that perspective assumes 'a single, fixed viewing position' and that Cezanne's 'multiple viewpoints' anticipated Cubism's challenges to perspective. A painting depicting multiple viewpoints would thus challenge the fundamental assumption of perspectival representation.",
    difficulty: "hard",
    passageId: "rc-exp6-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - BEHAVIORAL ECONOMICS AND COGNITIVE BIASES
// ============================================

const passage4 = `Behavioral economics emerged in the late twentieth century as a challenge to the rational actor model that had dominated economic theory. Classical economics assumed that individuals make decisions by rationally weighing costs and benefits to maximize utility. Behavioral economists, drawing on psychology research, demonstrated that actual human decision-making systematically deviates from this rational ideal in predictable ways. These deviations, termed cognitive biases, have profound implications for economic policy, market behavior, and institutional design.

Daniel Kahneman and Amos Tversky's prospect theory, developed in the 1970s, provided a foundational framework for understanding decision-making under uncertainty. They demonstrated that people evaluate outcomes relative to a reference point (typically the status quo) rather than in absolute terms, and that losses loom larger than equivalent gains—a phenomenon called loss aversion. A person who loses $100 experiences more psychological pain than a person who gains $100 experiences pleasure. This asymmetry helps explain phenomena ranging from the reluctance to sell declining stocks to the disproportionate influence of potential losses in political messaging.

The availability heuristic represents another systematic bias: people assess probability based on how easily examples come to mind rather than actual statistical frequency. Events that are vivid, recent, or emotionally salient are overweighted in probability estimates. Thus people may fear airplane crashes more than car accidents despite the latter's far greater statistical danger, because crashes receive dramatic media coverage. Similarly, investors may overweight recent market trends when making predictions, contributing to speculative bubbles and crashes.

Framing effects demonstrate that how choices are presented significantly influences decisions, even when the underlying options are logically equivalent. Studies have shown that people respond differently to medical treatments described as having a 90% survival rate versus a 10% mortality rate, though these convey identical information. Marketers and policymakers routinely exploit framing: pricing a product at $9.99 rather than $10.00, or describing a policy in terms of jobs created rather than cost per job. The rational actor model cannot accommodate such sensitivity to logically irrelevant presentation.

Critics of behavioral economics raise several objections. Some argue that laboratory findings may not generalize to real-world markets where incentives are stronger and learning opportunities exist. Others worry that identifying cognitive biases could justify paternalistic interventions that restrict individual choice. Defenders respond that biases persist even in high-stakes environments and that "libertarian paternalism"—designing choice architectures that nudge people toward better decisions while preserving freedom to choose otherwise—can improve welfare without restricting liberty. The debate continues, but behavioral economics has undeniably transformed how economists understand decision-making.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp6-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that the rational actor model should be completely abandoned" },
      { letter: "B", text: "explain how behavioral economics challenged classical theory by identifying systematic cognitive biases, while noting ongoing debates about its implications" },
      { letter: "C", text: "defend traditional economic theory against behavioral economics critiques" },
      { letter: "D", text: "describe marketing techniques that exploit consumer irrationality" },
      { letter: "E", text: "trace the biographical development of Kahneman and Tversky's research" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains behavioral economics' challenge to the rational actor model, describes key cognitive biases (loss aversion, availability heuristic, framing effects), and presents criticisms and defenses of the field. Answer B captures this comprehensive treatment.",
    difficulty: "medium",
    passageId: "rc-exp6-p4",
  },
  {
    id: "rc-exp6-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, loss aversion refers to",
    answerChoices: [
      { letter: "A", text: "people's tendency to avoid all forms of risk" },
      { letter: "B", text: "the phenomenon whereby losses produce greater psychological impact than equivalent gains" },
      { letter: "C", text: "the preference for recent information over historical data" },
      { letter: "D", text: "sensitivity to how choices are framed or presented" },
      { letter: "E", text: "the tendency to assess probability based on vivid examples" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'losses loom larger than equivalent gains—a phenomenon called loss aversion,' and illustrates this by noting that losing $100 causes more psychological pain than gaining $100 causes pleasure.",
    difficulty: "easy",
    passageId: "rc-exp6-p4",
  },
  {
    id: "rc-exp6-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following would behavioral economists most likely predict?",
    answerChoices: [
      { letter: "A", text: "People will consistently choose options that maximize their expected utility." },
      { letter: "B", text: "A disease prevention program will gain more public support if described as saving 200 lives than if described as having a 33% chance of saving everyone." },
      { letter: "C", text: "Investors will accurately assess stock prices based on fundamental value." },
      { letter: "D", text: "Framing and presentation will have no effect on consumer choices." },
      { letter: "E", text: "Laboratory findings about bias will not appear in real-world markets." },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses framing effects, noting that logically equivalent options elicit different responses based on presentation. A program described in terms of certain lives saved (rather than uncertain probability) would likely gain more support due to loss aversion and framing effects.",
    difficulty: "hard",
    passageId: "rc-exp6-p4",
  },
  {
    id: "rc-exp6-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the comparison between fear of airplane crashes and car accidents primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that air travel should be regulated more strictly" },
      { letter: "B", text: "illustrate how the availability heuristic leads to misjudgments of probability" },
      { letter: "C", text: "criticize media coverage of transportation accidents" },
      { letter: "D", text: "demonstrate loss aversion in transportation choices" },
      { letter: "E", text: "compare different research methodologies in behavioral economics" },
    ],
    correctAnswer: "B",
    explanation: "The airplane/car comparison appears when discussing the availability heuristic, showing how 'vivid' and 'emotionally salient' events (dramatic crash coverage) lead people to 'overweight' their probability despite greater statistical danger from car accidents.",
    difficulty: "medium",
    passageId: "rc-exp6-p4",
  },
  {
    id: "rc-exp6-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that 'libertarian paternalism' is designed to",
    answerChoices: [
      { letter: "A", text: "eliminate all cognitive biases from human decision-making" },
      { letter: "B", text: "prove that the rational actor model is correct" },
      { letter: "C", text: "improve decision outcomes while maintaining individuals' freedom to choose" },
      { letter: "D", text: "justify government restriction of individual choices" },
      { letter: "E", text: "demonstrate that laboratory findings do not apply in real markets" },
    ],
    correctAnswer: "C",
    explanation: "The passage describes 'libertarian paternalism' as 'designing choice architectures that nudge people toward better decisions while preserving freedom to choose otherwise,' combining improved outcomes with maintained liberty.",
    difficulty: "medium",
    passageId: "rc-exp6-p4",
  },
  {
    id: "rc-exp6-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward behavioral economics can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically uncritical endorsement" },
      { letter: "B", text: "hostile rejection of its core claims" },
      { letter: "C", text: "balanced recognition of its contributions while acknowledging ongoing debates" },
      { letter: "D", text: "nostalgic preference for classical economic theory" },
      { letter: "E", text: "dismissive skepticism about psychological research" },
    ],
    correctAnswer: "C",
    explanation: "The author explains behavioral economics' contributions, presents critics' objections fairly, notes defenders' responses, and concludes that 'behavioral economics has undeniably transformed' the field while acknowledging that 'the debate continues.'",
    difficulty: "medium",
    passageId: "rc-exp6-p4",
  },
];

// Export all RC questions from Set 6
export const rcQuestionsExpSet6: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet6 = {
  passage1: { id: "rc-exp6-p1", content: passage1, topic: "law", title: "Corporate Liability and Respondeat Superior" },
  passage2: { id: "rc-exp6-p2", content: passage2, topic: "natural-sciences", title: "Quantum Mechanics and Wave-Particle Duality" },
  passage3: { id: "rc-exp6-p3", content: passage3, topic: "humanities", title: "Renaissance Painting and Perspective" },
  passage4: { id: "rc-exp6-p4", content: passage4, topic: "social-sciences", title: "Behavioral Economics and Cognitive Biases" },
};
