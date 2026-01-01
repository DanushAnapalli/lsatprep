// Reading Comprehension Expansion Set 9
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - LABOR LAW AND COLLECTIVE BARGAINING
// ============================================

const passage1 = `The National Labor Relations Act (NLRA) of 1935, also known as the Wagner Act, fundamentally transformed American labor relations by establishing the legal framework for collective bargaining. Prior to its enactment, workers who attempted to organize unions faced employer retaliation with little legal recourse, and the federal government often intervened on the side of management during labor disputes. The NLRA declared that workers have a fundamental right to organize, join unions, and bargain collectively with their employers, marking a decisive shift in federal labor policy.

The Act's central mechanism is the election process administered by the National Labor Relations Board (NLRB). When workers seek union representation, they petition the NLRB, which then supervises a secret-ballot election. If a majority of voting workers support unionization, the employer must recognize and bargain in good faith with the union. The "exclusive representation" principle means that once certified, the union represents all workers in the bargaining unit, not just union members. This principle was designed to prevent employers from undermining collective power by negotiating separately with individual workers or minority factions.

Critics from both labor and management perspectives have challenged the NLRA's effectiveness. Labor advocates argue that the Act has been weakened by subsequent amendments, particularly the Taft-Hartley Act of 1947, which prohibited secondary boycotts and permitted states to pass "right-to-work" laws that ban mandatory union membership. They contend that the lengthy election process allows employers to campaign against unionization, often using tactics that chill organizing efforts even when they stop short of overt illegality. The penalties for employer violations are widely viewed as too weak to deter misconduct, with remedies limited to back pay and reinstatement rather than punitive damages.

Employer advocates counter that the current framework already tilts toward unions. They argue that the election process should be protected from what they characterize as union pressure tactics, and that workers should have more opportunities to decertify unions that no longer represent their interests. Some business groups have promoted alternative models of worker representation, such as employer-created committees, though critics see these as attempts to circumvent genuine collective bargaining.

Contemporary debates over labor law reform reflect deeper disagreements about the balance of power between capital and labor. Proposals to strengthen workers' organizing rights, such as card-check certification that would bypass NLRB elections, face opposition from those who prioritize employer flexibility and individual worker choice. Meanwhile, declining union membership in the private sector—from roughly 35 percent in the 1950s to under 7 percent today—has prompted some scholars to question whether the traditional collective bargaining model remains viable in a transformed economy.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp9-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The National Labor Relations Act should be repealed because it has failed to protect workers' rights." },
      { letter: "B", text: "The NLRA established the legal framework for collective bargaining in America, but its effectiveness has been contested by critics from multiple perspectives amid declining union membership." },
      { letter: "C", text: "Labor unions have become obsolete in the modern American economy due to changes in the workforce." },
      { letter: "D", text: "The Taft-Hartley Act of 1947 completely negated the protections established by the Wagner Act." },
      { letter: "E", text: "Employer-created worker committees represent a superior alternative to traditional union representation." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the NLRA's establishment of collective bargaining rights, examines criticisms from both labor and management perspectives, and notes contemporary debates against the backdrop of declining union membership. Answer B captures this comprehensive treatment of the topic.",
    difficulty: "medium",
    passageId: "rc-exp9-p1",
  },
  {
    id: "rc-exp9-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the principle of 'exclusive representation' means that",
    answerChoices: [
      { letter: "A", text: "employers can choose which workers to negotiate with individually" },
      { letter: "B", text: "a certified union represents all workers in the bargaining unit, not just union members" },
      { letter: "C", text: "workers may only join one union at a time" },
      { letter: "D", text: "the NLRB has exclusive authority over all labor disputes" },
      { letter: "E", text: "unions can exclude certain workers from representation" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'The \"exclusive representation\" principle means that once certified, the union represents all workers in the bargaining unit, not just union members.'",
    difficulty: "easy",
    passageId: "rc-exp9-p1",
  },
  {
    id: "rc-exp9-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, labor advocates would most likely view the penalties for employer violations of the NLRA as",
    answerChoices: [
      { letter: "A", text: "appropriately severe to deter misconduct" },
      { letter: "B", text: "excessive and harmful to business interests" },
      { letter: "C", text: "insufficient to discourage employers from violating workers' rights" },
      { letter: "D", text: "irrelevant to the organizing process" },
      { letter: "E", text: "unconstitutional infringements on employer speech" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that labor advocates contend 'The penalties for employer violations are widely viewed as too weak to deter misconduct, with remedies limited to back pay and reinstatement rather than punitive damages.' This indicates they view penalties as insufficient.",
    difficulty: "medium",
    passageId: "rc-exp9-p1",
  },
  {
    id: "rc-exp9-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the Taft-Hartley Act of 1947 primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that labor law should return to pre-1947 conditions" },
      { letter: "B", text: "illustrate how subsequent legislation modified the NLRA's protections" },
      { letter: "C", text: "demonstrate that employers have always opposed worker organization" },
      { letter: "D", text: "compare American and European approaches to labor law" },
      { letter: "E", text: "explain why union membership has increased over time" },
    ],
    correctAnswer: "B",
    explanation: "The Taft-Hartley Act is mentioned in the context of labor advocates arguing that the NLRA 'has been weakened by subsequent amendments, particularly the Taft-Hartley Act.' It serves to illustrate how later legislation modified the original protections.",
    difficulty: "medium",
    passageId: "rc-exp9-p1",
  },
  {
    id: "rc-exp9-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's presentation of the debate over labor law reform can best be characterized as",
    answerChoices: [
      { letter: "A", text: "strongly advocating for increased union power" },
      { letter: "B", text: "dismissive of workers' concerns about organizing" },
      { letter: "C", text: "balanced and analytical, presenting multiple perspectives" },
      { letter: "D", text: "hostile toward employer interests" },
      { letter: "E", text: "nostalgic for pre-NLRA labor conditions" },
    ],
    correctAnswer: "C",
    explanation: "The author presents arguments from both labor advocates and employer advocates without clearly favoring either side, and notes that 'Contemporary debates over labor law reform reflect deeper disagreements.' This balanced approach characterizes the author's tone throughout.",
    difficulty: "medium",
    passageId: "rc-exp9-p1",
  },
  {
    id: "rc-exp9-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the argument that the traditional collective bargaining model may no longer be viable?",
    answerChoices: [
      { letter: "A", text: "Several European countries have maintained high union membership rates." },
      { letter: "B", text: "The gig economy has created millions of workers classified as independent contractors who are excluded from NLRA protections." },
      { letter: "C", text: "Some unions have successfully organized workers in new industries." },
      { letter: "D", text: "The NLRB has recently increased enforcement actions against employers." },
      { letter: "E", text: "Public sector union membership has remained relatively stable." },
    ],
    correctAnswer: "B",
    explanation: "The passage mentions that 'some scholars question whether the traditional collective bargaining model remains viable in a transformed economy.' Evidence that a growing category of workers (gig workers) is excluded from the NLRA's framework would strengthen concerns about the model's viability in the contemporary economy.",
    difficulty: "hard",
    passageId: "rc-exp9-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - CRISPR AND GENE EDITING
// ============================================

const passage2 = `The development of CRISPR-Cas9 gene editing technology has been hailed as one of the most significant scientific breakthroughs of the twenty-first century. CRISPR, which stands for Clustered Regularly Interspaced Short Palindromic Repeats, is a naturally occurring mechanism that bacteria use to defend against viral infections. Scientists Jennifer Doudna and Emmanuelle Charpentier, who received the 2020 Nobel Prize in Chemistry for their work, demonstrated that this bacterial immune system could be repurposed as a precise tool for editing DNA in virtually any organism.

The CRISPR-Cas9 system works by using a guide RNA molecule to direct the Cas9 enzyme to a specific location in the genome. Once there, Cas9 acts as molecular scissors, cutting the DNA at the targeted site. The cell's natural repair mechanisms then take over, either disrupting the gene at the cut site or, if a template is provided, inserting new genetic material. This process is far more efficient, precise, and inexpensive than previous gene editing techniques, such as zinc finger nucleases and TALENs, which required elaborate protein engineering for each new target.

The therapeutic potential of CRISPR is immense. Researchers are developing treatments for genetic diseases such as sickle cell anemia, where clinical trials have shown promising results by editing patients' own cells to reactivate fetal hemoglobin production. Cancer immunotherapy using CRISPR-modified T cells is under investigation, as are potential treatments for hereditary blindness, muscular dystrophy, and HIV infection. Beyond treating disease, agricultural applications include developing crops with enhanced nutritional profiles, disease resistance, and tolerance to environmental stresses like drought.

However, CRISPR technology raises profound ethical concerns, particularly regarding germline editing—modifications to eggs, sperm, or embryos that would be passed to future generations. In 2018, Chinese scientist He Jiankui shocked the scientific community by announcing that he had created the first gene-edited babies, twin girls whose CCR5 gene had been modified in an attempt to confer HIV resistance. The experiment was widely condemned as premature and unethical, conducted without adequate oversight or informed consent, and He was subsequently imprisoned. Yet the incident exposed the difficulty of preventing determined actors from crossing ethical boundaries in an era when the technology is increasingly accessible.

Scientists and ethicists continue to debate where to draw the line between therapeutic interventions and enhancement. While there is broad consensus supporting the use of CRISPR to treat serious genetic diseases in affected individuals, the prospect of editing embryos to eliminate hereditary conditions—or to enhance traits like intelligence or physical abilities—raises concerns about eugenics, social inequality, and unforeseeable long-term consequences. Regulatory frameworks vary widely across countries, and the international scientific community has called for a moratorium on clinical germline editing until safety and ethical issues can be adequately addressed.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp9-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "CRISPR technology should be banned due to its potential for misuse." },
      { letter: "B", text: "CRISPR-Cas9 represents a revolutionary gene editing technology with tremendous therapeutic potential, but it raises significant ethical concerns, particularly regarding germline editing." },
      { letter: "C", text: "The He Jiankui experiment proved that gene editing technology is too dangerous to pursue." },
      { letter: "D", text: "CRISPR technology is primarily valuable for its agricultural applications." },
      { letter: "E", text: "Previous gene editing techniques were superior to CRISPR-Cas9 in precision and efficiency." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes CRISPR's mechanism and therapeutic potential, then examines ethical concerns surrounding germline editing. Answer B accurately captures this dual focus on promise and ethical challenges.",
    difficulty: "medium",
    passageId: "rc-exp9-p2",
  },
  {
    id: "rc-exp9-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, CRISPR-Cas9 is advantageous over previous gene editing techniques because it is",
    answerChoices: [
      { letter: "A", text: "completely free of any ethical concerns" },
      { letter: "B", text: "more efficient, precise, and inexpensive" },
      { letter: "C", text: "unable to be used on human subjects" },
      { letter: "D", text: "derived from human rather than bacterial sources" },
      { letter: "E", text: "approved for use in all countries" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that CRISPR 'is far more efficient, precise, and inexpensive than previous gene editing techniques, such as zinc finger nucleases and TALENs.'",
    difficulty: "easy",
    passageId: "rc-exp9-p2",
  },
  {
    id: "rc-exp9-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the scientific community's response to He Jiankui's experiment suggests that",
    answerChoices: [
      { letter: "A", text: "germline editing has been widely accepted as safe and ethical" },
      { letter: "B", text: "there are shared professional norms against premature clinical application of germline editing" },
      { letter: "C", text: "Chinese scientists are less ethical than scientists in other countries" },
      { letter: "D", text: "the CCR5 gene modification was scientifically successful" },
      { letter: "E", text: "regulatory oversight is unnecessary for gene editing research" },
    ],
    correctAnswer: "B",
    explanation: "The passage states the experiment 'was widely condemned as premature and unethical, conducted without adequate oversight or informed consent.' This widespread condemnation indicates shared professional norms against such premature clinical applications.",
    difficulty: "medium",
    passageId: "rc-exp9-p2",
  },
  {
    id: "rc-exp9-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses sickle cell anemia clinical trials primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all genetic diseases can now be cured" },
      { letter: "B", text: "provide a concrete example of CRISPR's therapeutic potential" },
      { letter: "C", text: "compare CRISPR to zinc finger nucleases" },
      { letter: "D", text: "criticize the slow pace of medical research" },
      { letter: "E", text: "explain the mechanism by which CRISPR works" },
    ],
    correctAnswer: "B",
    explanation: "The sickle cell anemia trials are mentioned in the paragraph discussing CRISPR's 'immense' therapeutic potential, serving as a concrete example of how the technology is being applied to treat genetic diseases.",
    difficulty: "medium",
    passageId: "rc-exp9-p2",
  },
  {
    id: "rc-exp9-011",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A technology is introduced and explained, its applications are described, ethical concerns are raised, and ongoing debates are summarized." },
      { letter: "B", text: "Two competing theories are presented, evidence is evaluated, and one theory is endorsed." },
      { letter: "C", text: "A problem is identified, multiple solutions are rejected, and a new solution is proposed." },
      { letter: "D", text: "A historical narrative is presented chronologically from past to present." },
      { letter: "E", text: "An argument is made, counterarguments are dismissed, and the original argument is restated." },
    ],
    correctAnswer: "A",
    explanation: "The passage follows a clear structure: introduction of CRISPR (paragraph 1), explanation of mechanism (paragraph 2), applications (paragraph 3), ethical concerns via He Jiankui case (paragraph 4), and ongoing debates (paragraph 5). This matches answer A.",
    difficulty: "hard",
    passageId: "rc-exp9-p2",
  },
  {
    id: "rc-exp9-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following applications of CRISPR would most likely generate the strongest ethical objections from the scientific community?",
    answerChoices: [
      { letter: "A", text: "Treating an adult patient's cells to cure sickle cell anemia" },
      { letter: "B", text: "Developing disease-resistant crops for agricultural use" },
      { letter: "C", text: "Editing human embryos to enhance cognitive abilities in future generations" },
      { letter: "D", text: "Modifying T cells to improve cancer immunotherapy" },
      { letter: "E", text: "Researching potential treatments for muscular dystrophy" },
    ],
    correctAnswer: "C",
    explanation: "The passage indicates that while treating disease in individuals has broad consensus support, 'the prospect of editing embryos to eliminate hereditary conditions—or to enhance traits like intelligence or physical abilities—raises concerns about eugenics, social inequality, and unforeseeable long-term consequences.' Editing embryos for cognitive enhancement would trigger all of these concerns.",
    difficulty: "medium",
    passageId: "rc-exp9-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - LITERARY REALISM AND THE NOVEL
// ============================================

const passage3 = `The rise of literary realism in the nineteenth century marked a decisive transformation in the history of the novel. Rejecting the idealized settings, melodramatic plots, and extraordinary characters that had characterized Romantic fiction, realist writers sought to represent ordinary life with accuracy and objectivity. Authors such as Honoré de Balzac in France, George Eliot in England, and later William Dean Howells in America developed narrative techniques designed to create the illusion of unmediated access to social reality.

Central to the realist project was the conviction that fiction should serve as a mirror of contemporary society. Balzac's vast Human Comedy cycle aimed to document every segment of French society with the comprehensiveness of a naturalist cataloguing species. His detailed descriptions of environments, from Parisian salons to provincial households, and his attention to the material conditions that shape human behavior reflected a belief that character and destiny are largely determined by social circumstances. The realist novel thus became a form of social analysis, offering readers insight into worlds they might never directly encounter.

Yet the realist claim to objective representation was always philosophically precarious. The selection of details, the arrangement of plot, and the choice of narrative perspective inevitably involve authorial judgment that shapes how reality appears. George Eliot's narrator in Middlemarch, for instance, constantly interprets characters' motives and comments on the action, guiding readers' responses in ways that belie any pretense of neutral observation. Critics have noted that realism's conventions—the omniscient narrator, the linear plot, the psychologically coherent character—are as artificial as any other literary mode, merely naturalized through familiarity.

Furthermore, realism's social critique was constrained by its formal commitments. By focusing on the probable and the everyday, realist fiction tended to reinforce existing social categories and expectations. The marriage plot that concludes so many nineteenth-century novels, integrating protagonists into established social structures, implicitly affirms the legitimacy of those structures. Feminist critics have observed that realism's emphasis on plausibility often restricted women characters to conventional roles, even when authors intended social criticism. The genre's epistemological confidence—its assumption that reality can be known and represented—has been linked to the broader ideological formations of bourgeois capitalism.

Modernist writers of the early twentieth century reacted against realism precisely by challenging its assumptions about representation. Virginia Woolf famously criticized realist novelists for describing external surfaces while missing the inner life of consciousness. James Joyce, Marcel Proust, and others developed new techniques—stream of consciousness, fragmented chronology, unreliable narration—to capture experiences that realism's methods could not accommodate. Yet even as modernism displaced realism as the dominant literary mode, realist conventions continued to shape popular fiction and retain critical defenders who argue that accessible representation of social conditions remains valuable.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp9-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Literary realism is inherently superior to all other forms of fiction." },
      { letter: "B", text: "Nineteenth-century realism aimed to represent ordinary life objectively, but its claim to unmediated representation has been challenged by critics and superseded by modernist techniques." },
      { letter: "C", text: "Modernist writers completely rejected all aspects of the realist tradition." },
      { letter: "D", text: "Balzac was the only significant realist writer in the nineteenth century." },
      { letter: "E", text: "Feminist critics have entirely discredited the value of realist fiction." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes realism's emergence and aims, examines philosophical critiques of its objectivity claims, discusses its ideological limitations, and notes modernism's reaction while acknowledging realism's continued influence. Answer B captures this trajectory.",
    difficulty: "medium",
    passageId: "rc-exp9-p3",
  },
  {
    id: "rc-exp9-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Balzac's Human Comedy cycle was intended to",
    answerChoices: [
      { letter: "A", text: "reject all forms of social analysis" },
      { letter: "B", text: "document every segment of French society comprehensively" },
      { letter: "C", text: "focus exclusively on aristocratic life" },
      { letter: "D", text: "develop stream of consciousness technique" },
      { letter: "E", text: "criticize naturalist methods" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Balzac's vast Human Comedy cycle aimed to document every segment of French society with the comprehensiveness of a naturalist cataloguing species.'",
    difficulty: "easy",
    passageId: "rc-exp9-p3",
  },
  {
    id: "rc-exp9-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, critics who describe realism's conventions as 'naturalized through familiarity' most likely believe that",
    answerChoices: [
      { letter: "A", text: "realism is more natural than other literary forms" },
      { letter: "B", text: "realism's techniques seem transparent only because readers have become accustomed to them" },
      { letter: "C", text: "familiarity with nature is essential to understanding literature" },
      { letter: "D", text: "realist conventions directly reflect biological reality" },
      { letter: "E", text: "literary criticism should focus on natural rather than artificial elements" },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that 'realism's conventions... are as artificial as any other literary mode, merely naturalized through familiarity.' This suggests that these conventions only appear natural because readers have become so accustomed to them that they no longer notice their artificiality.",
    difficulty: "medium",
    passageId: "rc-exp9-p3",
  },
  {
    id: "rc-exp9-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions George Eliot's narrator in Middlemarch primarily in order to",
    answerChoices: [
      { letter: "A", text: "praise Eliot as the greatest realist novelist" },
      { letter: "B", text: "illustrate how realist narration involves authorial interpretation despite claims to objectivity" },
      { letter: "C", text: "compare English and French approaches to realism" },
      { letter: "D", text: "argue that omniscient narration should be abandoned" },
      { letter: "E", text: "demonstrate Eliot's influence on Virginia Woolf" },
    ],
    correctAnswer: "B",
    explanation: "The Middlemarch example appears in the paragraph arguing that 'the realist claim to objective representation was always philosophically precarious.' Eliot's interpretive narrator is presented as evidence that authorial judgment shapes representation, undercutting claims of neutrality.",
    difficulty: "medium",
    passageId: "rc-exp9-p3",
  },
  {
    id: "rc-exp9-017",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that feminist critics would view the marriage plot in realist novels as",
    answerChoices: [
      { letter: "A", text: "a radical challenge to patriarchal society" },
      { letter: "B", text: "the most aesthetically sophisticated element of realism" },
      { letter: "C", text: "a convention that often confined women characters to traditional roles" },
      { letter: "D", text: "completely unrelated to questions of gender" },
      { letter: "E", text: "borrowed directly from modernist fiction" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Feminist critics have observed that realism's emphasis on plausibility often restricted women characters to conventional roles, even when authors intended social criticism.' The marriage plot is mentioned as implicitly affirming existing social structures, which would include gender roles.",
    difficulty: "medium",
    passageId: "rc-exp9-p3",
  },
  {
    id: "rc-exp9-018",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the philosophical critiques of realism can best be described as",
    answerChoices: [
      { letter: "A", text: "entirely dismissive, viewing them as unfounded attacks" },
      { letter: "B", text: "fully accepting, treating them as definitive refutations" },
      { letter: "C", text: "serious and engaged, presenting them as substantive challenges without final judgment" },
      { letter: "D", text: "confused and contradictory" },
      { letter: "E", text: "nostalgic for a time before such critiques existed" },
    ],
    correctAnswer: "C",
    explanation: "The author presents philosophical critiques of realism's objectivity claims, ideological analyses, and feminist observations as substantive points without dismissing or fully endorsing them. The final paragraph notes that realism retains 'critical defenders,' suggesting the author views the debate as ongoing rather than settled.",
    difficulty: "hard",
    passageId: "rc-exp9-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - MASS INCARCERATION AND CRIMINAL JUSTICE REFORM
// ============================================

const passage4 = `The United States incarcerates more people than any other nation in the world, both in absolute numbers and per capita. With approximately two million people behind bars and millions more under correctional supervision through probation and parole, mass incarceration has become a defining feature of American society. This phenomenon represents a dramatic departure from historical patterns: the U.S. incarceration rate remained relatively stable from the 1920s through the early 1970s before increasing fivefold over the following four decades.

Scholars have traced this expansion to policy choices rather than rising crime rates. The "War on Drugs" initiated in the 1970s and intensified during the 1980s resulted in dramatic increases in arrests and lengthy sentences for drug offenses. Mandatory minimum sentencing laws, three-strikes provisions, and truth-in-sentencing requirements limited judicial discretion and ensured that more people served longer terms. Criminologist Michelle Alexander has argued that mass incarceration functions as a system of racial control, noting that African Americans are incarcerated at more than five times the rate of whites, despite similar rates of drug use across racial groups. This racialized pattern has devastated communities, separating families and creating collateral consequences that extend far beyond prison walls.

The costs of mass incarceration—financial, social, and human—have prompted growing bipartisan interest in reform. States spend approximately $80 billion annually on corrections, often diverting funds from education and social services that might prevent crime more effectively. Recidivism rates exceeding 40 percent suggest that imprisonment frequently fails in its rehabilitative function. Former prisoners face employment discrimination, housing barriers, and in many states, permanent disenfranchisement—obstacles that impede reintegration and may increase the likelihood of reoffending.

Reform efforts have proceeded along multiple tracks. Some jurisdictions have decriminalized or legalized marijuana possession, reducing a significant source of drug arrests. Sentencing reform initiatives have modified mandatory minimums and expanded early release opportunities. Alternatives to incarceration, including drug courts, mental health courts, and community supervision programs, seek to address underlying issues without imprisonment. Restorative justice approaches bring offenders and victims together to repair harm rather than simply impose punishment.

Yet these reforms face significant obstacles. Political incentives often favor appearing "tough on crime," making elected officials reluctant to support measures that might be characterized as lenient. Powerful interests, including private prison corporations and correctional officer unions, benefit from the current system. Moreover, reformers must contend with legitimate concerns about public safety—any reform agenda must demonstrate that reduced incarceration can coexist with effective crime prevention. Whether the current reform moment will produce lasting structural change or merely modest adjustments remains to be seen.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp9-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that all prisoners should be immediately released" },
      { letter: "B", text: "examine the causes, consequences, and reform possibilities regarding mass incarceration in the United States" },
      { letter: "C", text: "defend the War on Drugs as effective criminal justice policy" },
      { letter: "D", text: "compare American and European prison systems in detail" },
      { letter: "E", text: "profile specific individuals affected by the criminal justice system" },
    ],
    correctAnswer: "B",
    explanation: "The passage examines the rise of mass incarceration (causes), its costs and consequences, various reform efforts, and obstacles to reform. Answer B accurately captures this comprehensive treatment of the topic.",
    difficulty: "medium",
    passageId: "rc-exp9-p4",
  },
  {
    id: "rc-exp9-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, which of the following contributed to the increase in incarceration rates after the 1970s?",
    answerChoices: [
      { letter: "A", text: "A decrease in the number of police officers" },
      { letter: "B", text: "The abolition of mandatory minimum sentences" },
      { letter: "C", text: "The War on Drugs and mandatory minimum sentencing laws" },
      { letter: "D", text: "Increased use of restorative justice approaches" },
      { letter: "E", text: "The legalization of marijuana nationwide" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'The \"War on Drugs\" initiated in the 1970s and intensified during the 1980s resulted in dramatic increases in arrests' and mentions 'Mandatory minimum sentencing laws, three-strikes provisions' as factors that 'ensured that more people served longer terms.'",
    difficulty: "easy",
    passageId: "rc-exp9-p4",
  },
  {
    id: "rc-exp9-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, Michelle Alexander would most likely agree that",
    answerChoices: [
      { letter: "A", text: "racial disparities in incarceration reflect proportional differences in criminal behavior" },
      { letter: "B", text: "mass incarceration disproportionately affects African Americans in ways that cannot be explained by differential rates of drug use" },
      { letter: "C", text: "the criminal justice system treats all racial groups equally" },
      { letter: "D", text: "the War on Drugs should be intensified" },
      { letter: "E", text: "incarceration rates have declined since the 1970s" },
    ],
    correctAnswer: "B",
    explanation: "The passage indicates that Alexander 'argued that mass incarceration functions as a system of racial control, noting that African Americans are incarcerated at more than five times the rate of whites, despite similar rates of drug use across racial groups.' This suggests she would agree that racial disparities cannot be explained by behavioral differences.",
    difficulty: "medium",
    passageId: "rc-exp9-p4",
  },
  {
    id: "rc-exp9-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions the recidivism rate exceeding 40 percent primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all prisons should be closed" },
      { letter: "B", text: "suggest that imprisonment often fails to rehabilitate offenders" },
      { letter: "C", text: "prove that crime rates have increased" },
      { letter: "D", text: "compare American and international correctional systems" },
      { letter: "E", text: "defend mandatory minimum sentencing" },
    ],
    correctAnswer: "B",
    explanation: "The recidivism statistic appears in the paragraph discussing the 'costs of mass incarceration,' immediately followed by the observation that it 'suggest[s] that imprisonment frequently fails in its rehabilitative function.'",
    difficulty: "medium",
    passageId: "rc-exp9-p4",
  },
  {
    id: "rc-exp9-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that obstacles to criminal justice reform include",
    answerChoices: [
      { letter: "A", text: "unanimous public support for harsh sentencing" },
      { letter: "B", text: "the complete absence of alternative approaches to incarceration" },
      { letter: "C", text: "political incentives favoring tough-on-crime positions and interests benefiting from the current system" },
      { letter: "D", text: "proof that reform necessarily increases crime rates" },
      { letter: "E", text: "constitutional prohibitions on changing sentencing laws" },
    ],
    correctAnswer: "C",
    explanation: "The final paragraph explicitly discusses obstacles including 'Political incentives often favor appearing \"tough on crime\"' and 'Powerful interests, including private prison corporations and correctional officer unions, benefit from the current system.'",
    difficulty: "medium",
    passageId: "rc-exp9-p4",
  },
  {
    id: "rc-exp9-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the claim that mass incarceration resulted from policy choices rather than rising crime rates?",
    answerChoices: [
      { letter: "A", text: "Crime rates actually declined during much of the period when incarceration rates increased." },
      { letter: "B", text: "Other countries that experienced similar crime rate increases did not see comparable growth in incarceration." },
      { letter: "C", text: "Studies show that violent crime rates increased in direct proportion to incarceration rates during the same period." },
      { letter: "D", text: "Some states reduced incarceration without experiencing increases in crime." },
      { letter: "E", text: "Mandatory minimum sentences were enacted through legislative action." },
    ],
    correctAnswer: "C",
    explanation: "The passage claims that 'Scholars have traced this expansion to policy choices rather than rising crime rates.' Evidence showing that crime rates increased proportionally to incarceration would suggest that rising crime, not just policy choices, drove incarceration increases. This would weaken the policy-focused explanation.",
    difficulty: "hard",
    passageId: "rc-exp9-p4",
  },
];

// Export all RC questions from Set 9
export const rcQuestionsExpSet9: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet9 = {
  passage1: { id: "rc-exp9-p1", content: passage1, topic: "law", title: "Labor Law and Collective Bargaining Rights" },
  passage2: { id: "rc-exp9-p2", content: passage2, topic: "natural-sciences", title: "CRISPR and Gene Editing Technology" },
  passage3: { id: "rc-exp9-p3", content: passage3, topic: "humanities", title: "The Novel and the Rise of Literary Realism" },
  passage4: { id: "rc-exp9-p4", content: passage4, topic: "social-sciences", title: "Mass Incarceration and Criminal Justice Reform" },
};
