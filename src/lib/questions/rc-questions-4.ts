// Reading Comprehension Questions - Set 4 (Science: Biology)
import { Question } from "../lsat-types";

// Passage 1: Epigenetics and Inheritance
const passage1 = `For most of the twentieth century, the central dogma of molecular biology held that genetic information flows in one direction: from DNA to RNA to protein. Inheritance, under this model, occurred exclusively through the transmission of DNA sequences from parent to offspring. Environmental influences might affect an organism's phenotype during its lifetime, but such acquired characteristics could not be passed to subsequent generations. This view, which definitively rejected Lamarckian inheritance, seemed secure.

However, the emerging field of epigenetics has complicated this picture in ways that would have seemed heretical just decades ago. Epigenetic mechanisms—including DNA methylation, histone modification, and non-coding RNA—can alter gene expression without changing the underlying DNA sequence. More provocatively, some of these modifications appear to be heritable, potentially allowing environmental influences experienced by one generation to affect the biology of descendants.

The most striking evidence comes from studies of famine and stress. Research on children conceived during the Dutch Hunger Winter of 1944-1945 found elevated rates of obesity, cardiovascular disease, and mental health problems not only in those directly exposed in utero but also, remarkably, in their children and grandchildren. Similar patterns have emerged from studies of other historical famines and from animal research where environmental conditions can be precisely controlled.

Critics urge caution in interpreting these findings. They note that transgenerational effects observed in mammals rarely persist beyond the grandchildren of exposed individuals, suggesting that true germline epigenetic inheritance may be limited. Many apparent cases of transgenerational inheritance might instead reflect direct exposure (a pregnant mother's environment affects both her fetus and its developing germ cells) or cultural and behavioral transmission rather than biological inheritance.

Nevertheless, even skeptics acknowledge that epigenetics has revealed a more dynamic genome than previously imagined. The discovery that environmental factors can modify gene expression—and that some modifications may influence subsequent generations—has profound implications for medicine, public health, and our understanding of evolution itself. Whether these findings ultimately vindicate a modified form of Lamarckism or simply expand our understanding of developmental plasticity remains an active area of scientific debate.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set4-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Epigenetic research has definitively proven that Lamarckian inheritance is correct" },
      { letter: "B", text: "Epigenetics has challenged traditional views of inheritance by showing that environmental influences may affect gene expression across generations, though the extent remains debated" },
      { letter: "C", text: "The central dogma of molecular biology has been completely overturned by recent discoveries" },
      { letter: "D", text: "Critics of epigenetics have successfully refuted claims of transgenerational inheritance" },
      { letter: "E", text: "The Dutch Hunger Winter studies prove that famine effects are inherited indefinitely" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents epigenetics as challenging but not overturning traditional views, while acknowledging ongoing debate about the extent and mechanisms of transgenerational effects.",
    difficulty: "medium",
    passageId: "rc4-p1",
  },
  {
    id: "rc-set4-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions the Dutch Hunger Winter primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the methodology of epigenetic research" },
      { letter: "B", text: "provide evidence supporting the possibility of transgenerational epigenetic effects" },
      { letter: "C", text: "argue that famine is the primary cause of epigenetic changes" },
      { letter: "D", text: "demonstrate that the central dogma of molecular biology is entirely incorrect" },
      { letter: "E", text: "refute the claims of critics who doubt epigenetic inheritance" },
    ],
    correctAnswer: "B",
    explanation: "The Dutch Hunger Winter is presented as 'the most striking evidence' for transgenerational effects, supporting the claim that environmental influences may affect descendants.",
    difficulty: "easy",
    passageId: "rc4-p1",
  },
  {
    id: "rc-set4-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of transgenerational epigenetic inheritance would most likely agree with which of the following?",
    answerChoices: [
      { letter: "A", text: "Epigenetic mechanisms do not exist" },
      { letter: "B", text: "Some observed transgenerational effects may have explanations other than germline inheritance" },
      { letter: "C", text: "The Dutch Hunger Winter studies were fraudulent" },
      { letter: "D", text: "Environmental factors have no effect on gene expression" },
      { letter: "E", text: "Traditional views of inheritance require no modification" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics suggest 'many apparent cases of transgenerational inheritance might instead reflect direct exposure...or cultural and behavioral transmission rather than biological inheritance.'",
    difficulty: "medium",
    passageId: "rc4-p1",
  },
  {
    id: "rc-set4-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, which of the following is mentioned as an epigenetic mechanism?",
    answerChoices: [
      { letter: "A", text: "DNA sequence mutation" },
      { letter: "B", text: "Chromosomal recombination" },
      { letter: "C", text: "DNA methylation" },
      { letter: "D", text: "Natural selection" },
      { letter: "E", text: "Genetic drift" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly lists 'DNA methylation, histone modification, and non-coding RNA' as epigenetic mechanisms.",
    difficulty: "easy",
    passageId: "rc4-p1",
  },
  {
    id: "rc-set4-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the claim that epigenetics vindicates Lamarckism can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastic endorsement" },
      { letter: "B", text: "cautious uncertainty about whether this conclusion is warranted" },
      { letter: "C", text: "outright rejection" },
      { letter: "D", text: "indifferent dismissal" },
      { letter: "E", text: "bewildered confusion" },
    ],
    correctAnswer: "B",
    explanation: "The author concludes that 'whether these findings ultimately vindicate a modified form of Lamarckism...remains an active area of scientific debate,' indicating cautious uncertainty.",
    difficulty: "medium",
    passageId: "rc4-p1",
  },
];

// Passage 2: Microbiome and Human Health
const passage2 = `The human microbiome—the trillions of microorganisms inhabiting our bodies—has emerged as one of the most exciting frontiers in biomedical research. Once viewed primarily as potential pathogens or at best benign passengers, gut bacteria and other microbes are now understood to play crucial roles in digestion, immune function, and even mental health. This paradigm shift has spawned a burgeoning industry of probiotic supplements and microbiome-based therapeutics, though the science supporting many commercial claims remains preliminary.

The gut-brain axis represents perhaps the most intriguing area of microbiome research. Studies in mice have demonstrated that altering gut bacteria can affect behavior, with germ-free mice showing differences in anxiety-like behaviors compared to normally colonized animals. Some researchers have found correlations between specific bacterial populations and human conditions including depression, autism, and Parkinson's disease. The proposed mechanisms include bacterial production of neurotransmitter precursors, modulation of inflammation, and signaling through the vagus nerve.

However, establishing causation rather than mere correlation has proven challenging. The microbiome is extraordinarily complex, with hundreds of species interacting in ways that remain poorly understood. Individual variation is enormous, making it difficult to define what constitutes a "healthy" microbiome. Moreover, the direction of causation is often unclear: do changes in gut bacteria cause mental health conditions, or do mental health conditions (and associated changes in diet, medication, and behavior) alter the microbiome?

Clinical applications remain limited despite the hype. Fecal microbiota transplantation has proven remarkably effective for recurrent Clostridioides difficile infection, but attempts to treat other conditions through microbiome manipulation have yielded inconsistent results. Most probiotic supplements contain strains selected for ease of manufacture rather than proven health benefits, and few products have been subjected to rigorous clinical trials.

Researchers emphasize that the field is still in its early stages. Large-scale longitudinal studies tracking microbiome composition alongside health outcomes are underway, and new technologies are enabling more sophisticated analysis of microbial communities. While the therapeutic potential is genuine, realizing it will require moving beyond correlational studies to mechanistic understanding.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set4-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that microbiome research is fundamentally flawed" },
      { letter: "B", text: "describe the current state of microbiome research, noting both promising findings and significant limitations" },
      { letter: "C", text: "promote the use of probiotic supplements for mental health" },
      { letter: "D", text: "explain the technical details of fecal microbiota transplantation" },
      { letter: "E", text: "refute the existence of the gut-brain axis" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents a balanced view of microbiome research, discussing exciting findings while emphasizing challenges in establishing causation and limited clinical applications.",
    difficulty: "medium",
    passageId: "rc4-p2",
  },
  {
    id: "rc-set4-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions germ-free mice primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that gut bacteria directly cause human mental illness" },
      { letter: "B", text: "provide evidence supporting the existence of gut-brain connections" },
      { letter: "C", text: "argue that mouse studies are more reliable than human studies" },
      { letter: "D", text: "criticize the ethics of animal research" },
      { letter: "E", text: "demonstrate that probiotics are effective treatments" },
    ],
    correctAnswer: "B",
    explanation: "The germ-free mice studies are presented as evidence that 'altering gut bacteria can affect behavior,' supporting the broader discussion of gut-brain connections.",
    difficulty: "easy",
    passageId: "rc4-p2",
  },
  {
    id: "rc-set4-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following would the author most likely consider a valid criticism of current probiotic supplements?",
    answerChoices: [
      { letter: "A", text: "They contain too many different bacterial strains" },
      { letter: "B", text: "They are typically not selected based on demonstrated health benefits or tested in rigorous trials" },
      { letter: "C", text: "They are too expensive for most consumers" },
      { letter: "D", text: "They have been proven harmful in clinical studies" },
      { letter: "E", text: "They alter the microbiome too dramatically" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'most probiotic supplements contain strains selected for ease of manufacture rather than proven health benefits, and few products have been subjected to rigorous clinical trials.'",
    difficulty: "medium",
    passageId: "rc4-p2",
  },
  {
    id: "rc-set4-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, fecal microbiota transplantation has proven effective for treating",
    answerChoices: [
      { letter: "A", text: "depression and anxiety" },
      { letter: "B", text: "Parkinson's disease" },
      { letter: "C", text: "recurrent Clostridioides difficile infection" },
      { letter: "D", text: "autism spectrum disorder" },
      { letter: "E", text: "obesity and metabolic syndrome" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'fecal microbiota transplantation has proven remarkably effective for recurrent Clostridioides difficile infection.'",
    difficulty: "easy",
    passageId: "rc4-p2",
  },
  {
    id: "rc-set4-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that one major challenge in microbiome research is",
    answerChoices: [
      { letter: "A", text: "lack of funding for basic research" },
      { letter: "B", text: "determining whether observed correlations reflect causation and in which direction" },
      { letter: "C", text: "public resistance to the concept of beneficial bacteria" },
      { letter: "D", text: "inability to detect bacteria in the human gut" },
      { letter: "E", text: "ethical restrictions on human research" },
    ],
    correctAnswer: "B",
    explanation: "The passage emphasizes that 'establishing causation rather than mere correlation has proven challenging' and questions 'the direction of causation.'",
    difficulty: "medium",
    passageId: "rc4-p2",
  },
];

// Passage 3: CRISPR and Gene Editing Ethics
const passage3 = `The development of CRISPR-Cas9 gene editing technology has transformed biological research and raised profound ethical questions about the future of human genetic modification. Unlike earlier gene therapy approaches that introduced new genetic material somewhat randomly, CRISPR enables precise editing of specific DNA sequences—correcting disease-causing mutations, inserting new genes, or disabling problematic ones with unprecedented accuracy.

The therapeutic potential is enormous. Researchers have already used CRISPR to treat sickle cell disease by reactivating fetal hemoglobin production, achieving apparent cures in clinical trials. Similar approaches are being developed for other genetic blood disorders, certain cancers, and inherited conditions ranging from muscular dystrophy to hereditary blindness. These somatic cell therapies—which modify only the patient's own cells without affecting future generations—have generated relatively little ethical controversy.

Germline editing presents more fraught territory. Modifications to eggs, sperm, or embryos would be inherited by all future descendants, permanently altering the human gene pool. In 2018, Chinese scientist He Jiankui announced the birth of twin girls whose embryos he had edited to disable the CCR5 gene, ostensibly to confer HIV resistance. The announcement was met with near-universal condemnation from the scientific community, not primarily because germline editing is inherently wrong, but because the intervention was medically unnecessary, inadequately researched, conducted without proper oversight, and performed without genuine informed consent.

The He Jiankui case crystallized debates that had been largely theoretical. Some bioethicists argue that germline editing should be prohibited entirely, citing concerns about unforeseen consequences, equity of access, and the specter of eugenic enhancement. Others contend that a blanket prohibition would be difficult to enforce and might drive research to jurisdictions with less oversight. They advocate instead for international governance frameworks that would permit germline editing only for serious medical conditions, under strict regulatory supervision.

The technology continues to advance rapidly. New variants of CRISPR offer improved precision and reduced off-target effects, addressing some safety concerns. Yet technical capability outpaces ethical consensus and regulatory frameworks. The question is no longer whether human germline editing will occur, but under what circumstances and subject to what constraints.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set4-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "CRISPR technology should be banned due to its potential for misuse" },
      { letter: "B", text: "CRISPR offers significant therapeutic promise but germline editing raises complex ethical questions that outpace current regulatory frameworks" },
      { letter: "C", text: "The He Jiankui experiment proves that scientists cannot be trusted with gene editing technology" },
      { letter: "D", text: "Somatic cell therapy is more dangerous than germline editing" },
      { letter: "E", text: "International governance of biotechnology is impossible to achieve" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses CRISPR's therapeutic potential while focusing on ethical challenges of germline editing, concluding that 'technical capability outpaces ethical consensus and regulatory frameworks.'",
    difficulty: "medium",
    passageId: "rc4-p3",
  },
  {
    id: "rc-set4-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses the He Jiankui case primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all germline editing is unethical" },
      { letter: "B", text: "illustrate how theoretical ethical debates became concrete and why the scientific community responded negatively" },
      { letter: "C", text: "praise the courage of scientists who push boundaries" },
      { letter: "D", text: "demonstrate the effectiveness of CRISPR for HIV prevention" },
      { letter: "E", text: "criticize Chinese regulatory frameworks specifically" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'the He Jiankui case crystallized debates that had been largely theoretical' and explains the specific reasons for scientific condemnation.",
    difficulty: "medium",
    passageId: "rc4-p3",
  },
  {
    id: "rc-set4-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following best describes why the scientific community condemned He Jiankui's experiment?",
    answerChoices: [
      { letter: "A", text: "Germline editing is considered inherently immoral by all scientists" },
      { letter: "B", text: "The experiment was unnecessary, inadequately researched, and conducted without proper oversight or consent" },
      { letter: "C", text: "The experiment failed to achieve its stated goal" },
      { letter: "D", text: "Chinese scientists are prohibited from conducting genetic research" },
      { letter: "E", text: "The technology used was outdated and imprecise" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states condemnation was 'not primarily because germline editing is inherently wrong, but because the intervention was medically unnecessary, inadequately researched, conducted without proper oversight, and performed without genuine informed consent.'",
    difficulty: "easy",
    passageId: "rc4-p3",
  },
  {
    id: "rc-set4-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, CRISPR has been used in clinical trials to treat",
    answerChoices: [
      { letter: "A", text: "HIV infection" },
      { letter: "B", text: "sickle cell disease" },
      { letter: "C", text: "Parkinson's disease" },
      { letter: "D", text: "diabetes" },
      { letter: "E", text: "heart disease" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'researchers have already used CRISPR to treat sickle cell disease by reactivating fetal hemoglobin production, achieving apparent cures in clinical trials.'",
    difficulty: "easy",
    passageId: "rc4-p3",
  },
  {
    id: "rc-set4-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage implies that those who oppose a complete ban on germline editing believe that",
    answerChoices: [
      { letter: "A", text: "germline editing poses no ethical concerns" },
      { letter: "B", text: "a ban would be difficult to enforce and regulated permission might be preferable" },
      { letter: "C", text: "enhancement editing should be widely available" },
      { letter: "D", text: "the He Jiankui experiment was ethically conducted" },
      { letter: "E", text: "somatic cell therapy should also be banned" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that opponents of prohibition argue 'a blanket prohibition would be difficult to enforce and might drive research to jurisdictions with less oversight' and instead advocate for international governance frameworks.",
    difficulty: "medium",
    passageId: "rc4-p3",
  },
];

// Passage 4: Neuroplasticity and Learning
const passage4 = `For much of the twentieth century, neuroscientists believed that the adult brain was essentially fixed—that after a critical period in early childhood, neural circuitry became static and incapable of significant change. This view has been decisively overturned by research demonstrating that the brain retains remarkable plasticity throughout life, continuously forming new neural connections and, in some regions, even generating new neurons.

The implications for education and rehabilitation are profound. Studies of London taxi drivers, who must memorize the city's labyrinthine street layout, revealed enlarged hippocampal regions compared to control subjects—and these differences increased with years of experience. Musicians show enhanced connectivity between auditory and motor regions. Even short-term training can produce measurable changes in brain structure and function.

However, the popular interpretation of neuroplasticity research has sometimes outpaced the science. The "learning styles" hypothesis—that individuals learn best through visual, auditory, or kinesthetic modalities—has been repeatedly debunked despite its persistence in educational practice. Claims that brief brain training games can produce broad cognitive improvements have also failed to withstand rigorous scrutiny; while such games may improve performance on the specific tasks practiced, transfer to general cognitive abilities appears minimal.

More nuanced research suggests that not all forms of learning produce equivalent neural changes, and that the conditions promoting plasticity are more specific than popularizers suggest. Deep practice involving challenge, feedback, and repetition appears more effective than passive exposure. The emotional context of learning matters—moderate stress can enhance memory consolidation while excessive stress impairs it. Age-related changes in plasticity are real, even if less absolute than once believed.

The field is now grappling with how to translate these findings into evidence-based practices. What types of training produce meaningful transfer? How can rehabilitation programs leverage plasticity to restore function after injury? Can interventions slow age-related cognitive decline? These questions require moving beyond simplistic "use it or lose it" formulations to understand the specific mechanisms governing neural change and how they can be optimally engaged.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set4-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central point of the passage?",
    answerChoices: [
      { letter: "A", text: "Neuroplasticity research has proven that brain training games are effective" },
      { letter: "B", text: "While neuroplasticity is real and significant, popular interpretations often oversimplify the science, and translating findings into practice requires more nuanced understanding" },
      { letter: "C", text: "The adult brain is completely fixed after childhood" },
      { letter: "D", text: "Learning styles theory has been validated by neuroscience" },
      { letter: "E", text: "Only musicians and taxi drivers exhibit neuroplasticity" },
    ],
    correctAnswer: "B",
    explanation: "The passage affirms neuroplasticity while critiquing oversimplified interpretations and emphasizing the need for nuanced understanding to develop effective practices.",
    difficulty: "medium",
    passageId: "rc4-p4",
  },
  {
    id: "rc-set4-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage mentions London taxi drivers primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that everyone should become a taxi driver" },
      { letter: "B", text: "provide evidence that intensive learning can produce measurable changes in brain structure" },
      { letter: "C", text: "demonstrate that only professional navigation produces neuroplasticity" },
      { letter: "D", text: "criticize the methodology of neuroscience research" },
      { letter: "E", text: "suggest that GPS technology should be banned" },
    ],
    correctAnswer: "B",
    explanation: "The taxi driver study is presented as evidence that learning produces structural brain changes, with 'enlarged hippocampal regions' that 'increased with years of experience.'",
    difficulty: "easy",
    passageId: "rc4-p4",
  },
  {
    id: "rc-set4-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the author would most likely agree that brain training games",
    answerChoices: [
      { letter: "A", text: "are completely ineffective for any purpose" },
      { letter: "B", text: "may improve performance on practiced tasks but likely do not broadly enhance cognition" },
      { letter: "C", text: "should be required in all schools" },
      { letter: "D", text: "are more effective than traditional education" },
      { letter: "E", text: "have been proven to prevent dementia" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that while such games 'may improve performance on the specific tasks practiced, transfer to general cognitive abilities appears minimal.'",
    difficulty: "medium",
    passageId: "rc4-p4",
  },
  {
    id: "rc-set4-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, which of the following has been 'repeatedly debunked'?",
    answerChoices: [
      { letter: "A", text: "The existence of neuroplasticity" },
      { letter: "B", text: "The learning styles hypothesis" },
      { letter: "C", text: "The effectiveness of rehabilitation programs" },
      { letter: "D", text: "Research on musicians' brains" },
      { letter: "E", text: "The hippocampus's role in memory" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'the learning styles hypothesis—that individuals learn best through visual, auditory, or kinesthetic modalities—has been repeatedly debunked.'",
    difficulty: "easy",
    passageId: "rc4-p4",
  },
  {
    id: "rc-set4-020",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that effective learning is most likely to involve",
    answerChoices: [
      { letter: "A", text: "passive exposure to information" },
      { letter: "B", text: "avoiding all forms of stress" },
      { letter: "C", text: "challenge, feedback, and repetition" },
      { letter: "D", text: "matching instruction to individual learning styles" },
      { letter: "E", text: "brief daily brain training sessions" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'deep practice involving challenge, feedback, and repetition appears more effective than passive exposure.'",
    difficulty: "medium",
    passageId: "rc4-p4",
  },
];

export const rcQuestionsSet4: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
