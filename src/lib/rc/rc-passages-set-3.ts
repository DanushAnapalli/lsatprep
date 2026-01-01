// Reading Comprehension Expansion Set 3
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - ANTITRUST
// ============================================

const passage1 = `The antitrust laws of the United States, enacted in the late nineteenth and early twentieth centuries, were designed to promote competition and prevent monopolistic practices. The Sherman Act of 1890, the Clayton Act of 1914, and the Federal Trade Commission Act of 1914 form the foundation of American antitrust enforcement. Yet the meaning and purpose of these statutes have been subjects of enduring controversy, with different interpretive approaches leading to dramatically different enforcement regimes.

The Chicago School of antitrust, which gained ascendancy in the 1970s and 1980s, argued that the sole purpose of antitrust law should be maximizing consumer welfare, measured primarily by economic efficiency. Under this view, aggressive enforcement against large firms was misguided unless their conduct demonstrably harmed consumers through higher prices or reduced output. The Chicago School was skeptical of government intervention in markets, trusting that competitive forces would discipline anticompetitive behavior more effectively than regulatory action.

This approach led to substantial relaxation of antitrust enforcement. Vertical restraints—agreements between firms at different levels of the supply chain—were increasingly permitted based on efficiency justifications. Merger review became more permissive, allowing significant industry consolidation. Courts adopted higher standards for proving anticompetitive harm, making it more difficult for plaintiffs to prevail in antitrust cases.

Critics of the Chicago School approach, sometimes called "neo-Brandeisians" after Justice Louis Brandeis, argue that this framework ignores important values that antitrust law historically protected. Beyond consumer prices, they contend, antitrust should address concentrations of economic power that threaten democratic governance, labor markets, innovation, and the ability of small businesses to compete. The rise of technology platforms like Google, Amazon, and Facebook has intensified these debates, as critics argue these firms exercise forms of power that traditional consumer welfare analysis fails to capture.

Some economists have challenged Chicago School assumptions on empirical grounds. Studies of recent mergers have found that promised efficiencies often failed to materialize while prices increased. Research on labor markets suggests that employer concentration—largely ignored under consumer welfare analysis—suppresses wages and reduces worker mobility. These findings have contributed to growing calls for more vigorous antitrust enforcement across the political spectrum.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp3-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Sherman Act of 1890 remains the most important antitrust statute in American law." },
      { letter: "B", text: "Antitrust interpretation has evolved through different schools of thought, with the Chicago School's consumer welfare approach now facing significant criticism." },
      { letter: "C", text: "Technology companies should be broken up to restore competition." },
      { letter: "D", text: "The Chicago School definitively established the correct interpretation of antitrust law." },
      { letter: "E", text: "Antitrust enforcement has remained consistent throughout American history." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the development of antitrust interpretation from foundational statutes through the Chicago School's ascendancy to current criticisms and calls for reform. Answer B captures this evolution and debate.",
    difficulty: "medium",
    passageId: "rc-exp3-p1",
  },
  {
    id: "rc-exp3-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Chicago School argued that",
    answerChoices: [
      { letter: "A", text: "antitrust law should focus solely on maximizing consumer welfare" },
      { letter: "B", text: "vertical restraints should always be prohibited" },
      { letter: "C", text: "government intervention in markets is always beneficial" },
      { letter: "D", text: "technology platforms require special regulatory treatment" },
      { letter: "E", text: "small businesses deserve special protection from large competitors" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that the Chicago School 'argued that the sole purpose of antitrust law should be maximizing consumer welfare, measured primarily by economic efficiency.'",
    difficulty: "easy",
    passageId: "rc-exp3-p1",
  },
  {
    id: "rc-exp3-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, neo-Brandeisians would most likely argue that antitrust enforcement should",
    answerChoices: [
      { letter: "A", text: "focus exclusively on price effects for consumers" },
      { letter: "B", text: "address concerns beyond consumer prices, including economic power and its effects on democracy" },
      { letter: "C", text: "be eliminated entirely in favor of market self-regulation" },
      { letter: "D", text: "apply only to technology companies" },
      { letter: "E", text: "defer to the economic analysis developed by Chicago School scholars" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that neo-Brandeisians 'argue that this framework ignores important values' including 'concentrations of economic power that threaten democratic governance, labor markets, innovation, and the ability of small businesses to compete.'",
    difficulty: "medium",
    passageId: "rc-exp3-p1",
  },
  {
    id: "rc-exp3-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions Google, Amazon, and Facebook primarily in order to",
    answerChoices: [
      { letter: "A", text: "praise these companies for their innovations" },
      { letter: "B", text: "illustrate companies whose market power has intensified debates about traditional antitrust approaches" },
      { letter: "C", text: "argue that technology companies benefit consumers through lower prices" },
      { letter: "D", text: "demonstrate the success of Chicago School enforcement" },
      { letter: "E", text: "compare American and European approaches to antitrust" },
    ],
    correctAnswer: "B",
    explanation: "These companies are mentioned in the context of debates about the Chicago School approach. Critics argue these platforms 'exercise forms of power that traditional consumer welfare analysis fails to capture,' intensifying debates about antitrust methodology.",
    difficulty: "medium",
    passageId: "rc-exp3-p1",
  },
  {
    id: "rc-exp3-005",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the criticism of the Chicago School described in the final paragraph?",
    answerChoices: [
      { letter: "A", text: "Consumer prices have declined in industries with high firm concentration." },
      { letter: "B", text: "Merger reviews conducted under Chicago School assumptions frequently failed to predict actual post-merger outcomes." },
      { letter: "C", text: "Workers in concentrated industries report high job satisfaction." },
      { letter: "D", text: "Small businesses have thrived in markets dominated by large firms." },
      { letter: "E", text: "Academic economists unanimously support the consumer welfare standard." },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph notes that 'promised efficiencies often failed to materialize while prices increased.' Evidence that merger reviews under Chicago School analysis systematically mispredicted outcomes would further strengthen this empirical challenge.",
    difficulty: "hard",
    passageId: "rc-exp3-p1",
  },
  {
    id: "rc-exp3-006",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's tone in discussing the various approaches to antitrust can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive of the Chicago School" },
      { letter: "B", text: "harshly critical of all antitrust enforcement" },
      { letter: "C", text: "analytically balanced while acknowledging ongoing debates" },
      { letter: "D", text: "nostalgic for pre-Chicago School enforcement" },
      { letter: "E", text: "dismissive of empirical research" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the Chicago School's arguments and influence, then describes criticisms from neo-Brandeisians and empirical challenges without strongly endorsing any position. This reflects analytical balance.",
    difficulty: "medium",
    passageId: "rc-exp3-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - GENETICS
// ============================================

const passage2 = `The completion of the Human Genome Project in 2003 was heralded as a transformative moment in medical science. By sequencing the approximately three billion base pairs that constitute human DNA, researchers expected to unlock the genetic basis of disease and usher in an era of personalized medicine. Two decades later, the promise and limitations of genomic medicine have become clearer.

The expectation that most common diseases would be traced to a small number of genes with large effects has proven largely unfounded. Genome-wide association studies (GWAS) have identified thousands of genetic variants associated with conditions ranging from heart disease to schizophrenia. But each individual variant typically explains only a tiny fraction of disease risk—often less than one percent. The genetic architecture of most common diseases turns out to be highly polygenic, involving hundreds or thousands of variants, each contributing marginally to overall susceptibility.

This finding has significant implications for genetic prediction and personalized medicine. Polygenic risk scores—calculated by summing the effects of many genetic variants—can stratify populations by disease risk, but their predictive power for individuals remains modest. Someone in the top decile of genetic risk for a condition may have double the average risk, but that still means the vast majority of people with high genetic risk will never develop the disease. The dream of reading genetic destiny from DNA sequence has given way to more nuanced understanding of genetic contribution as one factor among many.

However, genomics has proven highly successful in certain domains. For rare diseases caused by single-gene mutations, DNA sequencing can provide definitive diagnoses that end years of diagnostic uncertainty. Pharmacogenomics—using genetic information to guide drug selection and dosing—has improved treatment for certain conditions. Cancer genomics has revolutionized oncology by enabling targeted therapies matched to specific tumor mutations.

The gap between genomic knowledge and clinical application reflects broader challenges in translating scientific discoveries into medical practice. Much of what we learn about genetic associations does not immediately suggest therapeutic interventions. Understanding why a variant increases disease risk by one percent requires extensive follow-up research into biological mechanisms. The genomic revolution has succeeded in generating vast amounts of data; the harder work of extracting actionable medical insights continues.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp3-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Human Genome Project was a complete failure that wasted research resources." },
      { letter: "B", text: "Genomic medicine has succeeded in some applications while falling short of initial expectations regarding common diseases." },
      { letter: "C", text: "Polygenic risk scores can accurately predict individual disease outcomes." },
      { letter: "D", text: "Genetic factors have no meaningful influence on disease risk." },
      { letter: "E", text: "Rare diseases are the only conditions that can be understood genetically." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes initial high expectations, the discovery that common diseases are highly polygenic, limitations of genetic prediction, but also successful applications in rare diseases, pharmacogenomics, and cancer. Answer B captures this balanced assessment.",
    difficulty: "medium",
    passageId: "rc-exp3-p2",
  },
  {
    id: "rc-exp3-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, genome-wide association studies have revealed that",
    answerChoices: [
      { letter: "A", text: "most common diseases are caused by single genes with large effects" },
      { letter: "B", text: "common diseases typically involve many genetic variants, each contributing marginally to risk" },
      { letter: "C", text: "genetic variants have no association with disease" },
      { letter: "D", text: "the Human Genome Project sequenced the wrong genes" },
      { letter: "E", text: "rare diseases are more common than previously thought" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The genetic architecture of most common diseases turns out to be highly polygenic, involving hundreds or thousands of variants, each contributing marginally to overall susceptibility.'",
    difficulty: "easy",
    passageId: "rc-exp3-p2",
  },
  {
    id: "rc-exp3-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that polygenic risk scores are limited primarily because they",
    answerChoices: [
      { letter: "A", text: "cannot be calculated from DNA sequence data" },
      { letter: "B", text: "can stratify populations by risk but have modest predictive power for individuals" },
      { letter: "C", text: "are too expensive for clinical use" },
      { letter: "D", text: "identify genetic variants that decrease disease risk" },
      { letter: "E", text: "are only available for rare diseases" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that polygenic risk scores 'can stratify populations by disease risk, but their predictive power for individuals remains modest.' Most people with high genetic risk will never develop the disease.",
    difficulty: "medium",
    passageId: "rc-exp3-p2",
  },
  {
    id: "rc-exp3-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses rare diseases primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that genomics has failed to benefit any patients" },
      { letter: "B", text: "illustrate a domain where genomic medicine has proven successful" },
      { letter: "C", text: "contrast American and European approaches to genetic testing" },
      { letter: "D", text: "explain why the Human Genome Project was initiated" },
      { letter: "E", text: "criticize the focus on common diseases" },
    ],
    correctAnswer: "B",
    explanation: "Rare diseases are mentioned in the paragraph discussing areas where 'genomics has proven highly successful.' DNA sequencing can provide 'definitive diagnoses' for rare diseases caused by single-gene mutations.",
    difficulty: "medium",
    passageId: "rc-exp3-p2",
  },
  {
    id: "rc-exp3-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following statements about pharmacogenomics is most likely to be true?",
    answerChoices: [
      { letter: "A", text: "It uses genetic information to help determine optimal drug treatments for patients." },
      { letter: "B", text: "It has been unsuccessful in all clinical applications." },
      { letter: "C", text: "It focuses exclusively on rare genetic diseases." },
      { letter: "D", text: "It relies on polygenic risk scores for drug selection." },
      { letter: "E", text: "It contradicts the findings of the Human Genome Project." },
    ],
    correctAnswer: "A",
    explanation: "The passage describes pharmacogenomics as 'using genetic information to guide drug selection and dosing' and notes it 'has improved treatment for certain conditions.' This indicates using genetics to optimize drug therapy.",
    difficulty: "medium",
    passageId: "rc-exp3-p2",
  },
  {
    id: "rc-exp3-012",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's view of the progress of genomic medicine can best be characterized as",
    answerChoices: [
      { letter: "A", text: "entirely pessimistic about future developments" },
      { letter: "B", text: "uncritically celebratory of achievements to date" },
      { letter: "C", text: "realistic about both accomplishments and remaining challenges" },
      { letter: "D", text: "skeptical that genetics plays any role in disease" },
      { letter: "E", text: "dismissive of the Human Genome Project's significance" },
    ],
    correctAnswer: "C",
    explanation: "The author acknowledges disappointments regarding common disease genetics while also noting genuine successes in rare diseases, pharmacogenomics, and cancer. The final paragraph recognizes ongoing challenges while affirming progress, reflecting realistic assessment.",
    difficulty: "medium",
    passageId: "rc-exp3-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - MUSIC HISTORY
// ============================================

const passage3 = `The emergence of jazz in early twentieth-century New Orleans represents one of the most significant developments in American cultural history. Growing out of the convergence of African American musical traditions, European harmonic structures, and Caribbean rhythmic influences, jazz became not merely a musical genre but a powerful symbol of modernity, urbanization, and cultural hybridity.

The African American musicians who created jazz drew on multiple sources. Spirituals, work songs, and blues provided melodic and expressive foundations. The brass band tradition, well-established in New Orleans, contributed instrumental techniques and ensemble practices. Ragtime, with its syncopated rhythms and formal structures, offered a bridge between European classical music and improvised African American performance. The resulting synthesis was something genuinely new—music characterized by swing rhythm, blue notes, call-and-response patterns, and above all, improvisation.

Jazz historians have long debated the relative importance of these various influences. Some scholars emphasize African retentions, arguing that jazz fundamentally expressed a pan-African aesthetic transplanted to American soil. Others foreground the music's American origins, seeing jazz as a product of the unique conditions of the Mississippi Delta and urban migration. Still others stress the multiethnic character of New Orleans itself, where French, Spanish, Caribbean, and African American cultures mixed in ways distinctive to that city.

The Great Migration transformed jazz from a regional phenomenon to a national and eventually international art form. As African Americans moved from the rural South to northern cities like Chicago and New York, they brought jazz with them. In urban centers, the music encountered new audiences, new technologies like radio and phonograph recordings, and new commercial pressures. These conditions fostered both innovation and standardization: the swing era of the 1930s and 1940s saw jazz become mainstream American popular music, even as bebop rebels developed more complex, challenging forms resistant to easy consumption.

The racial politics of jazz have been contested throughout its history. White musicians and impresarios often profited more than African American creators. Yet jazz also provided African Americans with unprecedented opportunities for artistic expression, economic advancement, and cultural prestige. The music became a vehicle for racial pride and, during the civil rights era, an explicit statement of resistance and aspiration.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp3-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Jazz is primarily an African musical form with minimal European influence." },
      { letter: "B", text: "Jazz emerged from diverse influences in New Orleans, spread through migration, and became both a contested and significant cultural force in American history." },
      { letter: "C", text: "The swing era represented the peak of jazz achievement." },
      { letter: "D", text: "Jazz historians have definitively settled debates about the music's origins." },
      { letter: "E", text: "Commercial pressures destroyed the artistic integrity of jazz." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces jazz's origins in New Orleans from multiple sources, its spread through the Great Migration, debates about its influences, and its contested racial politics. Answer B captures this comprehensive account.",
    difficulty: "medium",
    passageId: "rc-exp3-p3",
  },
  {
    id: "rc-exp3-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, which of the following contributed to the development of jazz?",
    answerChoices: [
      { letter: "A", text: "Classical European orchestral music" },
      { letter: "B", text: "Spirituals, blues, and the brass band tradition" },
      { letter: "C", text: "Rock and roll" },
      { letter: "D", text: "Electronic music technology" },
      { letter: "E", text: "South American folk music" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Spirituals, work songs, and blues provided melodic and expressive foundations' and 'The brass band tradition...contributed instrumental techniques and ensemble practices.'",
    difficulty: "easy",
    passageId: "rc-exp3-p3",
  },
  {
    id: "rc-exp3-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, scholars who emphasize the multiethnic character of New Orleans would most likely argue that",
    answerChoices: [
      { letter: "A", text: "jazz could have developed in any American city" },
      { letter: "B", text: "the unique cultural mix of New Orleans was essential to jazz's creation" },
      { letter: "C", text: "African influences were irrelevant to jazz's development" },
      { letter: "D", text: "European classical music was the primary source of jazz" },
      { letter: "E", text: "the Great Migration harmed jazz's development" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes scholars who 'stress the multiethnic character of New Orleans itself, where French, Spanish, Caribbean, and African American cultures mixed in ways distinctive to that city.' This suggests they view New Orleans' particular cultural mix as essential.",
    difficulty: "medium",
    passageId: "rc-exp3-p3",
  },
  {
    id: "rc-exp3-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions bebop primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the commercialization of jazz" },
      { letter: "B", text: "illustrate how some musicians resisted jazz's mainstream popularization" },
      { letter: "C", text: "argue that bebop was superior to swing" },
      { letter: "D", text: "explain the origins of jazz in New Orleans" },
      { letter: "E", text: "compare American and European musical traditions" },
    ],
    correctAnswer: "B",
    explanation: "Bebop is described as how 'bebop rebels developed more complex, challenging forms resistant to easy consumption' even as the swing era made jazz 'mainstream American popular music.' Bebop represents resistance to commercialization.",
    difficulty: "medium",
    passageId: "rc-exp3-p3",
  },
  {
    id: "rc-exp3-017",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the racial politics of jazz were 'contested' because",
    answerChoices: [
      { letter: "A", text: "only white musicians played jazz" },
      { letter: "B", text: "African American creators often received less profit than white musicians while also gaining unprecedented opportunities" },
      { letter: "C", text: "jazz was banned during the civil rights era" },
      { letter: "D", text: "European critics refused to acknowledge jazz as legitimate music" },
      { letter: "E", text: "the Great Migration ended the production of jazz" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the contested nature by noting that 'White musicians and impresarios often profited more than African American creators' while 'jazz also provided African Americans with unprecedented opportunities.' This tension makes the racial politics contested.",
    difficulty: "medium",
    passageId: "rc-exp3-p3",
  },
  {
    id: "rc-exp3-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A musical genre is introduced, its origins are discussed, historiographical debates are presented, its geographical spread is traced, and its cultural significance is considered." },
      { letter: "B", text: "A thesis is stated and then systematically refuted." },
      { letter: "C", text: "Two competing theories are compared and one is declared superior." },
      { letter: "D", text: "A chronological narrative traces a musician's career." },
      { letter: "E", text: "An argument is presented, objections are raised, and the argument is modified." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces jazz, discusses multiple origins (paragraph 2), presents historiographical debates (paragraph 3), traces geographical spread through the Great Migration (paragraph 4), and considers cultural/racial significance (paragraph 5).",
    difficulty: "hard",
    passageId: "rc-exp3-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - ECONOMICS
// ============================================

const passage4 = `Universal basic income (UBI)—the idea that all citizens should receive a regular, unconditional cash payment regardless of employment status—has moved from the margins of policy debate to mainstream consideration. Advocates span the political spectrum, though they emphasize different rationales. Proponents on the left see UBI as a means of ensuring economic security and reducing inequality, while those on the right view it as a more efficient alternative to complex welfare bureaucracies.

The case for UBI rests on several arguments. Automation and artificial intelligence may eliminate millions of jobs, creating a future in which traditional employment cannot sustain widespread prosperity. Even in the present economy, the growth of precarious work—gig employment, part-time jobs without benefits, involuntary contract positions—has eroded the stability that full-time employment once provided. A basic income, proponents argue, would provide a floor beneath which no one could fall, enabling people to refuse exploitative work, pursue education, care for family members, or engage in creative endeavors.

Critics raise numerous concerns. Perhaps most fundamental is the question of affordability: providing every adult citizen a meaningful income would require enormous government expenditure, potentially necessitating significant tax increases or cuts to other programs. Some economists worry about labor market effects, arguing that unconditional payments would reduce work incentives and lower overall productivity. Cultural conservatives suggest that work provides not merely income but purpose and social connection, and that paying people not to work would undermine social cohesion.

Empirical evidence from UBI experiments remains limited but suggestive. Finland's two-year experiment found modest improvements in recipients' well-being and trust in institutions, with minimal impact on employment. A pilot in Stockton, California, saw recipients more likely to obtain full-time employment than a control group. These results challenge simple assumptions about work disincentives but come from contexts too small and short-term to settle broader debates.

The policy design of any actual UBI would involve numerous choices with significant consequences. Would payments be sufficient to cover basic needs or merely supplement other income? Would existing social programs be eliminated, modified, or maintained alongside the basic income? Would the payment be truly universal or phase out at higher income levels? How these questions are answered would determine whether a basic income functions as a progressive or regressive reform.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp3-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue decisively in favor of universal basic income implementation" },
      { letter: "B", text: "provide a balanced overview of the arguments, criticisms, and empirical evidence regarding universal basic income" },
      { letter: "C", text: "demonstrate that UBI experiments have proven the concept unworkable" },
      { letter: "D", text: "compare European and American welfare systems" },
      { letter: "E", text: "explain why automation will not affect employment levels" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents arguments for UBI from different political perspectives, raises criticisms, discusses limited empirical evidence, and notes unresolved policy questions without advocating for a particular position. Answer B captures this balanced treatment.",
    difficulty: "medium",
    passageId: "rc-exp3-p4",
  },
  {
    id: "rc-exp3-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, critics of UBI argue that",
    answerChoices: [
      { letter: "A", text: "automation will never affect employment levels" },
      { letter: "B", text: "unconditional payments might reduce work incentives and lower productivity" },
      { letter: "C", text: "the Finnish experiment proved UBI's effectiveness" },
      { letter: "D", text: "existing welfare programs are too simple" },
      { letter: "E", text: "UBI would primarily benefit wealthy citizens" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that critics include 'Some economists worry about labor market effects, arguing that unconditional payments would reduce work incentives and lower overall productivity.'",
    difficulty: "easy",
    passageId: "rc-exp3-p4",
  },
  {
    id: "rc-exp3-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, left-leaning and right-leaning proponents of UBI would most likely agree that",
    answerChoices: [
      { letter: "A", text: "current welfare bureaucracies are well-designed" },
      { letter: "B", text: "unconditional cash payments to citizens could improve upon current systems" },
      { letter: "C", text: "work provides essential purpose and social connection" },
      { letter: "D", text: "automation poses no threat to employment" },
      { letter: "E", text: "UBI experiments should not be conducted" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'Proponents on the left see UBI as a means of ensuring economic security and reducing inequality, while those on the right view it as a more efficient alternative to complex welfare bureaucracies.' Both sides support cash payments as improvements on current systems.",
    difficulty: "medium",
    passageId: "rc-exp3-p4",
  },
  {
    id: "rc-exp3-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the Stockton, California pilot primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that UBI definitively increases employment" },
      { letter: "B", text: "illustrate empirical evidence that complicates assumptions about work disincentives" },
      { letter: "C", text: "argue that American experiments are superior to European ones" },
      { letter: "D", text: "demonstrate the failures of UBI implementation" },
      { letter: "E", text: "criticize opponents of universal basic income" },
    ],
    correctAnswer: "B",
    explanation: "The Stockton pilot is mentioned alongside the Finnish experiment as evidence that 'challenge[s] simple assumptions about work disincentives' while being acknowledged as 'too small and short-term to settle broader debates.'",
    difficulty: "medium",
    passageId: "rc-exp3-p4",
  },
  {
    id: "rc-exp3-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that whether a basic income would be 'progressive or regressive' depends primarily on",
    answerChoices: [
      { letter: "A", text: "the political party that implements it" },
      { letter: "B", text: "specific policy design choices such as payment levels and effects on other programs" },
      { letter: "C", text: "whether automation continues to affect the economy" },
      { letter: "D", text: "public opinion polls" },
      { letter: "E", text: "the results of future experiments" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph poses questions about payment sufficiency, treatment of existing programs, and universality, concluding 'How these questions are answered would determine whether a basic income functions as a progressive or regressive reform.'",
    difficulty: "medium",
    passageId: "rc-exp3-p4",
  },
  {
    id: "rc-exp3-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the existing empirical evidence on UBI can best be described as",
    answerChoices: [
      { letter: "A", text: "confident that it proves UBI's success" },
      { letter: "B", text: "dismissive of its relevance" },
      { letter: "C", text: "acknowledging it as suggestive but insufficient to resolve major debates" },
      { letter: "D", text: "critical of the methodology used in experiments" },
      { letter: "E", text: "enthusiastic about conducting additional experiments" },
    ],
    correctAnswer: "C",
    explanation: "The author describes evidence as 'limited but suggestive' and notes that experiments 'challenge simple assumptions' but 'come from contexts too small and short-term to settle broader debates.' This indicates cautious acknowledgment of limited evidence.",
    difficulty: "medium",
    passageId: "rc-exp3-p4",
  },
];

// Export all RC questions from Set 3
export const rcQuestionsExpSet3: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet3 = {
  passage1: { id: "rc-exp3-p1", content: passage1, topic: "law", title: "Antitrust Law and the Chicago School" },
  passage2: { id: "rc-exp3-p2", content: passage2, topic: "natural-sciences", title: "Genomic Medicine" },
  passage3: { id: "rc-exp3-p3", content: passage3, topic: "humanities", title: "The Emergence of Jazz" },
  passage4: { id: "rc-exp3-p4", content: passage4, topic: "social-sciences", title: "Universal Basic Income" },
};
