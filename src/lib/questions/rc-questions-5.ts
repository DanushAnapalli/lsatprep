// Reading Comprehension Questions - Set 5 (Science: Physics & Astronomy)
import { Question } from "../lsat-types";

// Passage 1: Dark Matter and Dark Energy
const passage1 = `The standard model of cosmology rests on a profound admission of ignorance: approximately 95 percent of the universe consists of substances whose nature remains unknown. Dark matter, comprising about 27 percent of cosmic content, reveals its presence through gravitational effects on visible matter but has never been directly detected. Dark energy, accounting for roughly 68 percent, drives the accelerating expansion of the universe through a mechanism that defies current theoretical understanding.

The evidence for dark matter emerged from observations of galactic rotation. Stars at the outer edges of galaxies orbit far faster than they should given the visible mass present; without additional, invisible matter providing gravitational binding, these galaxies would fly apart. Similar evidence comes from gravitational lensing, galaxy cluster dynamics, and the cosmic microwave background radiation. The consistency of these independent observations leaves little doubt that dark matter exists, even as its composition remains mysterious.

Various candidates have been proposed. Weakly interacting massive particles (WIMPs) dominated theoretical speculation for decades, leading to construction of extraordinarily sensitive underground detectors. Despite years of searching, no confirmed detection has occurred, prompting some physicists to explore alternative candidates including axions, primordial black holes, and modifications to gravitational theory itself.

Dark energy presents even deeper puzzles. Its discovery in 1998, through observations that distant supernovae were dimmer than expected—indicating the universe's expansion was accelerating rather than slowing—earned its discoverers the Nobel Prize. The simplest explanation invokes a cosmological constant, representing an energy inherent in empty space. However, theoretical calculations of this vacuum energy exceed observed values by roughly 120 orders of magnitude, constituting arguably the worst prediction in physics history.

Some cosmologists have proposed that dark energy varies over time, potentially explaining discrepancies between different measurement methods. Others suggest our understanding of gravity requires modification at cosmic scales. The stakes extend beyond academic curiosity; the fate of the universe—whether it expands forever, collapses, or tears itself apart—depends on dark energy's ultimate nature.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set5-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Scientists have successfully identified the composition of dark matter" },
      { letter: "B", text: "Dark matter and dark energy, despite strong evidence for their existence, remain poorly understood, representing major gaps in our cosmological knowledge" },
      { letter: "C", text: "The cosmological constant perfectly explains dark energy" },
      { letter: "D", text: "WIMP detection experiments have been successful" },
      { letter: "E", text: "Galactic rotation curves can be explained without invoking dark matter" },
    ],
    correctAnswer: "B",
    explanation: "The passage emphasizes that while evidence for dark matter and dark energy is compelling, their fundamental nature remains unknown, with the opening describing this as 'a profound admission of ignorance.'",
    difficulty: "medium",
    passageId: "rc5-p1",
  },
  {
    id: "rc-set5-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions galactic rotation primarily in order to",
    answerChoices: [
      { letter: "A", text: "explain why galaxies fly apart" },
      { letter: "B", text: "describe evidence that led scientists to infer the existence of dark matter" },
      { letter: "C", text: "argue against the existence of dark matter" },
      { letter: "D", text: "demonstrate that Newton's laws are incorrect" },
      { letter: "E", text: "explain the discovery of dark energy" },
    ],
    correctAnswer: "B",
    explanation: "Galactic rotation observations—stars moving faster than expected—are presented as one of the key pieces of 'evidence for dark matter.'",
    difficulty: "easy",
    passageId: "rc5-p1",
  },
  {
    id: "rc-set5-003",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the theoretical prediction for vacuum energy differs from observed values by approximately",
    answerChoices: [
      { letter: "A", text: "27 percent" },
      { letter: "B", text: "68 percent" },
      { letter: "C", text: "95 percent" },
      { letter: "D", text: "120 orders of magnitude" },
      { letter: "E", text: "a factor of ten" },
    ],
    correctAnswer: "D",
    explanation: "The passage explicitly states that 'theoretical calculations of this vacuum energy exceed observed values by roughly 120 orders of magnitude.'",
    difficulty: "easy",
    passageId: "rc5-p1",
  },
  {
    id: "rc-set5-004",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that the failure to detect WIMPs has led some physicists to",
    answerChoices: [
      { letter: "A", text: "abandon the search for dark matter entirely" },
      { letter: "B", text: "consider alternative dark matter candidates or modified gravity theories" },
      { letter: "C", text: "conclude that dark matter does not exist" },
      { letter: "D", text: "focus exclusively on dark energy research" },
      { letter: "E", text: "build even more sensitive WIMP detectors" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that lack of WIMP detection has prompted 'some physicists to explore alternative candidates including axions, primordial black holes, and modifications to gravitational theory itself.'",
    difficulty: "medium",
    passageId: "rc5-p1",
  },
  {
    id: "rc-set5-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's characterization of the vacuum energy prediction as 'arguably the worst prediction in physics history' suggests an attitude of",
    answerChoices: [
      { letter: "A", text: "hostility toward physics as a discipline" },
      { letter: "B", text: "frank acknowledgment of a significant theoretical failure" },
      { letter: "C", text: "optimism that the prediction will soon be corrected" },
      { letter: "D", text: "dismissal of the importance of theoretical physics" },
      { letter: "E", text: "confusion about basic physics concepts" },
    ],
    correctAnswer: "B",
    explanation: "The striking phrase emphasizes the magnitude of the discrepancy without dismissing physics generally, reflecting honest acknowledgment of a major unsolved problem.",
    difficulty: "medium",
    passageId: "rc5-p1",
  },
];

// Passage 2: Quantum Computing
const passage2 = `Quantum computers exploit the counterintuitive properties of quantum mechanics—superposition, entanglement, and interference—to perform certain calculations exponentially faster than any conceivable classical machine. While conventional computers manipulate bits that exist as either 0 or 1, quantum bits (qubits) can exist in superpositions of both states simultaneously, enabling massive parallelism in computation.

The theoretical advantages are staggering. Shor's algorithm, developed in 1994, demonstrated that a sufficiently powerful quantum computer could factor large numbers exponentially faster than classical methods—threatening the RSA encryption that secures most internet communications. Quantum simulation could revolutionize drug discovery and materials science by modeling molecular interactions that classical computers cannot tractably represent. Optimization problems in logistics, finance, and machine learning might yield to quantum approaches.

However, the gap between quantum promise and practical delivery remains substantial. Current quantum processors contain at most a few thousand qubits, while cryptographically relevant factoring would require millions of error-corrected qubits. The fundamental challenge is decoherence: qubits are exquisitely sensitive to environmental disturbance, causing quantum states to collapse before computations complete. Maintaining coherence requires cooling systems to temperatures colder than outer space and isolation from virtually all electromagnetic interference.

Error correction compounds the difficulty. Classical computers simply copy bits to protect against corruption; quantum mechanics forbids exact copying of unknown quantum states. Quantum error correction requires elaborate encoding schemes that consume many physical qubits per logical qubit. Current "noisy intermediate-scale quantum" (NISQ) devices operate without full error correction, limiting their utility to specialized applications where noise can be tolerated or mitigated.

Despite these obstacles, investment continues to pour into quantum computing from governments and corporations alike. The question is not whether quantum computers will eventually achieve their theoretical potential, but when—and whether interim applications can justify the enormous development costs. Some researchers predict useful quantum advantage within a decade; others suspect we are still decades from transformative applications.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set5-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Quantum computers have already achieved their theoretical potential" },
      { letter: "B", text: "Quantum computing offers enormous theoretical advantages but faces substantial practical challenges, leaving its timeline uncertain" },
      { letter: "C", text: "Classical computers are superior to quantum computers for all applications" },
      { letter: "D", text: "Decoherence is an easily solved problem" },
      { letter: "E", text: "Investment in quantum computing should cease immediately" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents both the 'staggering' theoretical advantages and the 'substantial' gap between promise and delivery, concluding with uncertainty about timelines.",
    difficulty: "medium",
    passageId: "rc5-p2",
  },
  {
    id: "rc-set5-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses Shor's algorithm primarily in order to",
    answerChoices: [
      { letter: "A", text: "explain how current quantum computers are breaking encryption" },
      { letter: "B", text: "illustrate the theoretical potential of quantum computing for a specific important application" },
      { letter: "C", text: "argue that RSA encryption should be abandoned" },
      { letter: "D", text: "criticize the development of quantum computers" },
      { letter: "E", text: "demonstrate a limitation of quantum computing" },
    ],
    correctAnswer: "B",
    explanation: "Shor's algorithm is presented as a demonstration of quantum computing's theoretical advantages, showing it 'could factor large numbers exponentially faster' with implications for encryption.",
    difficulty: "medium",
    passageId: "rc5-p2",
  },
  {
    id: "rc-set5-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, what is decoherence?",
    answerChoices: [
      { letter: "A", text: "A type of quantum algorithm" },
      { letter: "B", text: "The collapse of quantum states due to environmental disturbance" },
      { letter: "C", text: "A method of quantum error correction" },
      { letter: "D", text: "The process of cooling quantum computers" },
      { letter: "E", text: "A technique for encoding quantum information" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that qubits are 'exquisitely sensitive to environmental disturbance, causing quantum states to collapse before computations complete'—this is decoherence.",
    difficulty: "easy",
    passageId: "rc5-p2",
  },
  {
    id: "rc-set5-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following presents a challenge specific to quantum error correction that does not apply to classical error correction?",
    answerChoices: [
      { letter: "A", text: "Classical computers cannot perform error correction at all" },
      { letter: "B", text: "Quantum mechanics forbids exact copying of unknown quantum states" },
      { letter: "C", text: "Quantum computers do not experience errors" },
      { letter: "D", text: "Error correction slows down classical computers more than quantum computers" },
      { letter: "E", text: "Classical error correction requires colder temperatures" },
    ],
    correctAnswer: "B",
    explanation: "The passage contrasts classical and quantum error correction, noting that 'classical computers simply copy bits' but 'quantum mechanics forbids exact copying of unknown quantum states.'",
    difficulty: "medium",
    passageId: "rc5-p2",
  },
  {
    id: "rc-set5-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that current quantum computers are described as 'noisy intermediate-scale quantum' devices because they",
    answerChoices: [
      { letter: "A", text: "have achieved full error correction" },
      { letter: "B", text: "are larger than they need to be" },
      { letter: "C", text: "operate without full error correction, limiting their applications" },
      { letter: "D", text: "produce too much sound during operation" },
      { letter: "E", text: "can only be used for cryptography" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that NISQ devices 'operate without full error correction, limiting their utility to specialized applications where noise can be tolerated or mitigated.'",
    difficulty: "medium",
    passageId: "rc5-p2",
  },
];

// Passage 3: Climate Feedback Loops
const passage3 = `Climate scientists distinguish between radiative forcing—the direct warming or cooling effect of factors like greenhouse gas concentrations—and feedback mechanisms that amplify or dampen initial temperature changes. Understanding these feedbacks is crucial because they largely determine how much warming will ultimately result from a given increase in atmospheric carbon dioxide. Unfortunately, feedbacks also represent the greatest source of uncertainty in climate projections.

The most significant positive feedback involves water vapor. As temperatures rise, the atmosphere holds more moisture, and water vapor is itself a potent greenhouse gas. This amplifies initial warming by roughly a factor of two. Ice-albedo feedback provides additional amplification: as ice and snow melt, they expose darker surfaces that absorb more sunlight, causing further warming and more melting. Observations from both poles confirm this process is well underway.

More uncertain is the role of clouds. Low clouds tend to cool the planet by reflecting sunlight; high clouds tend to warm it by trapping heat. How cloud coverage, altitude, and properties will change with warming remains one of the largest unknowns in climate science. Different climate models make different assumptions about cloud feedbacks, contributing substantially to the range of warming projections.

Potentially more consequential are feedback mechanisms that might take decades or centuries to fully engage. Permafrost in Arctic regions contains vast stores of organic carbon—an estimated twice as much as currently exists in the atmosphere. As permafrost thaws, microbial decomposition releases this carbon as carbon dioxide and methane, potentially creating a self-sustaining warming cycle independent of human emissions. Similarly, methane hydrates in ocean sediments could destabilize with sufficient warming.

The possibility of crossing "tipping points"—thresholds beyond which feedbacks become self-sustaining regardless of human actions—motivates calls for aggressive emissions reductions. However, identifying exactly where such thresholds lie has proven difficult. Climate may change gradually until certain critical points are reached, then shift rapidly to new states—a pattern observed in paleoclimate records but challenging to predict for current conditions.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set5-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Climate feedback mechanisms are fully understood by scientists" },
      { letter: "B", text: "Feedback mechanisms significantly influence climate projections but involve substantial uncertainties, including the possibility of tipping points" },
      { letter: "C", text: "Water vapor feedback is the only important climate feedback" },
      { letter: "D", text: "Climate tipping points have already been crossed" },
      { letter: "E", text: "Clouds will definitely cause cooling that offsets global warming" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses various feedback mechanisms, their importance for climate projections, significant uncertainties especially regarding clouds and tipping points.",
    difficulty: "medium",
    passageId: "rc5-p3",
  },
  {
    id: "rc-set5-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses permafrost carbon primarily in order to",
    answerChoices: [
      { letter: "A", text: "explain why Arctic regions are cooling" },
      { letter: "B", text: "illustrate a potentially consequential long-term feedback mechanism" },
      { letter: "C", text: "argue that current climate models are completely wrong" },
      { letter: "D", text: "demonstrate that climate change is not caused by human emissions" },
      { letter: "E", text: "dismiss concerns about climate tipping points" },
    ],
    correctAnswer: "B",
    explanation: "Permafrost carbon is introduced as one of the 'feedback mechanisms that might take decades or centuries to fully engage' with 'potentially more consequential' effects.",
    difficulty: "medium",
    passageId: "rc5-p3",
  },
  {
    id: "rc-set5-013",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, water vapor feedback amplifies initial warming by approximately",
    answerChoices: [
      { letter: "A", text: "a factor of ten" },
      { letter: "B", text: "a factor of two" },
      { letter: "C", text: "50 percent" },
      { letter: "D", text: "twice as much as permafrost emissions" },
      { letter: "E", text: "an amount that varies by region" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that water vapor feedback 'amplifies initial warming by roughly a factor of two.'",
    difficulty: "easy",
    passageId: "rc5-p3",
  },
  {
    id: "rc-set5-014",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the primary reason that clouds represent significant uncertainty in climate projections is that",
    answerChoices: [
      { letter: "A", text: "scientists cannot observe clouds" },
      { letter: "B", text: "different types of clouds have different effects, and future changes in cloud properties are unclear" },
      { letter: "C", text: "clouds have no effect on climate" },
      { letter: "D", text: "all climate models make identical cloud assumptions" },
      { letter: "E", text: "cloud feedback is the only feedback that matters" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'low clouds tend to cool...high clouds tend to warm' and 'how cloud coverage, altitude, and properties will change with warming remains one of the largest unknowns.'",
    difficulty: "medium",
    passageId: "rc5-p3",
  },
  {
    id: "rc-set5-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the concept of 'tipping points' is significant because",
    answerChoices: [
      { letter: "A", text: "they have been precisely identified for all climate systems" },
      { letter: "B", text: "beyond certain thresholds, feedback processes might become self-sustaining regardless of human actions" },
      { letter: "C", text: "they only apply to ice-albedo feedback" },
      { letter: "D", text: "they eliminate uncertainty from climate projections" },
      { letter: "E", text: "they prove that climate change is reversible" },
    ],
    correctAnswer: "B",
    explanation: "The passage defines tipping points as 'thresholds beyond which feedbacks become self-sustaining regardless of human actions,' which motivates calls for emissions reductions.",
    difficulty: "medium",
    passageId: "rc5-p3",
  },
];

// Passage 4: Exoplanet Detection Methods
const passage4 = `The discovery of planets orbiting stars other than our Sun has transformed from science fiction to routine astronomical observation in just three decades. Since the first confirmed detection in 1995, over 5,000 exoplanets have been catalogued using methods that each reveal different information about planetary systems while introducing characteristic selection biases.

The radial velocity method, which detected the first exoplanets, measures tiny wobbles in stellar motion caused by gravitational interaction with orbiting planets. This technique preferentially detects massive planets in close orbits, which produce larger and more frequent stellar motions. Gas giants orbiting near their host stars—so-called "hot Jupiters"—dominated early discoveries, initially suggesting such configurations might be common, though this reflected detection bias rather than cosmic prevalence.

Transit photometry, employed by NASA's Kepler mission and its successor TESS, detects planets that pass between their star and Earth, causing periodic dimming. This method works best for planets with orbits aligned along our line of sight and for planets large enough relative to their star to produce detectable dimming. Kepler revolutionized the field by monitoring over 150,000 stars simultaneously, revealing that small planets are far more common than giants and that many stars host multiple planets.

Direct imaging remains challenging because planets are billions of times fainter than their host stars and typically separated by tiny angles as seen from Earth. Sophisticated techniques including coronagraphs and adaptive optics can suppress starlight sufficiently to image some planets—typically young, massive worlds in wide orbits whose residual heat makes them relatively bright in infrared wavelengths. These systems may not be typical but provide unique opportunities to study planetary atmospheres.

The synthesis of different detection methods reveals the remarkable diversity of planetary systems. Some resemble our solar system with small rocky worlds close to the star and gas giants farther out; others are dramatically different, with giant planets in close orbits or multiple planets in resonant configurations. Understanding how such diversity arises requires integrating detection results with theories of planetary formation and evolution—a synthesis still very much in progress.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set5-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that the transit method is superior to radial velocity" },
      { letter: "B", text: "describe exoplanet detection methods, their selection biases, and how they collectively reveal planetary diversity" },
      { letter: "C", text: "explain why direct imaging is impossible" },
      { letter: "D", text: "prove that most planetary systems resemble our solar system" },
      { letter: "E", text: "criticize the Kepler mission for its methodological flaws" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically describes multiple detection methods, notes their biases, and concludes by discussing how synthesis reveals planetary diversity.",
    difficulty: "medium",
    passageId: "rc5-p4",
  },
  {
    id: "rc-set5-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage mentions 'hot Jupiters' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that gas giants are the most common type of planet" },
      { letter: "B", text: "illustrate how detection bias initially skewed understanding of planetary prevalence" },
      { letter: "C", text: "criticize the radial velocity method" },
      { letter: "D", text: "explain why Jupiter is called 'hot'" },
      { letter: "E", text: "demonstrate the superiority of direct imaging" },
    ],
    correctAnswer: "B",
    explanation: "Hot Jupiters are mentioned to show how their dominance in early discoveries 'reflected detection bias rather than cosmic prevalence.'",
    difficulty: "medium",
    passageId: "rc5-p4",
  },
  {
    id: "rc-set5-018",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the Kepler mission revealed that",
    answerChoices: [
      { letter: "A", text: "hot Jupiters are the most common type of planet" },
      { letter: "B", text: "small planets are far more common than giants" },
      { letter: "C", text: "most stars do not have planets" },
      { letter: "D", text: "direct imaging is the best detection method" },
      { letter: "E", text: "planetary systems always resemble our solar system" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Kepler revealed 'that small planets are far more common than giants and that many stars host multiple planets.'",
    difficulty: "easy",
    passageId: "rc5-p4",
  },
  {
    id: "rc-set5-019",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which type of planet would direct imaging most likely detect?",
    answerChoices: [
      { letter: "A", text: "A small, cold planet close to its star" },
      { letter: "B", text: "A young, massive planet in a wide orbit" },
      { letter: "C", text: "A planet transiting its star" },
      { letter: "D", text: "A planet causing stellar wobbles" },
      { letter: "E", text: "An Earth-sized planet in the habitable zone" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that direct imaging can detect 'typically young, massive worlds in wide orbits whose residual heat makes them relatively bright in infrared wavelengths.'",
    difficulty: "medium",
    passageId: "rc5-p4",
  },
  {
    id: "rc-set5-020",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage implies that understanding the diversity of planetary systems requires",
    answerChoices: [
      { letter: "A", text: "relying on a single detection method" },
      { letter: "B", text: "combining detection results with theoretical models of planetary formation" },
      { letter: "C", text: "abandoning current detection methods for new ones" },
      { letter: "D", text: "assuming all planetary systems resemble our own" },
      { letter: "E", text: "focusing exclusively on hot Jupiters" },
    ],
    correctAnswer: "B",
    explanation: "The passage concludes that 'understanding how such diversity arises requires integrating detection results with theories of planetary formation and evolution.'",
    difficulty: "medium",
    passageId: "rc5-p4",
  },
];

export const rcQuestionsSet5: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
