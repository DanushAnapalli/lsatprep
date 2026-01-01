// Reading Comprehension Expansion Set 10
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - TORT REFORM AND MEDICAL MALPRACTICE
// ============================================

const passage1 = `The debate over tort reform in medical malpractice has intensified in recent decades, with proponents arguing that excessive litigation and unpredictable jury awards have created a crisis in healthcare delivery. At the center of this controversy lies a fundamental tension between two competing values: ensuring that injured patients receive fair compensation and maintaining a healthcare system that is both accessible and affordable.

Advocates for tort reform point to several troubling trends. Medical malpractice insurance premiums have increased substantially in many jurisdictions, with particularly dramatic spikes in high-risk specialties such as obstetrics, neurosurgery, and emergency medicine. Some physicians have responded by relocating to states with more favorable legal climates, retiring early, or abandoning high-risk procedures altogether. Reform proponents argue that these defensive medicine practices—ordering additional tests and procedures primarily to reduce legal exposure rather than to benefit patients—may add billions of dollars annually to healthcare costs while providing little medical value.

The most common legislative response has been to impose caps on noneconomic damages—the compensation awarded for pain, suffering, and emotional distress, as distinguished from economic damages covering medical expenses and lost wages. California's Medical Injury Compensation Reform Act of 1975 established a $250,000 cap on noneconomic damages that has served as a model for similar legislation in approximately thirty states. Proponents cite studies suggesting that such caps reduce malpractice premiums and may help maintain physician supply in underserved areas.

Critics of damage caps raise both practical and philosophical objections. Empirically, they note that research on the effects of caps has produced mixed results, with some studies finding minimal impact on overall healthcare costs or physician behavior. The Congressional Budget Office has estimated that comprehensive tort reform might reduce national healthcare spending by only about 0.5 percent—a meaningful figure in absolute terms but far from the transformative savings that reform advocates sometimes promise. More fundamentally, critics argue that caps arbitrarily disadvantage the most seriously injured patients—those who suffer permanent disability, disfigurement, or loss of a loved one—precisely the victims for whom the legal system should provide the greatest remedy.

Alternative reform proposals have sought to address malpractice issues without limiting patient compensation. These include specialized health courts staffed by judges with medical expertise, certificate-of-merit requirements that demand preliminary expert review before filing suit, and safe harbor provisions protecting physicians who follow evidence-based clinical guidelines. Some reformers advocate for enterprise liability, which would shift legal responsibility from individual physicians to healthcare institutions better positioned to implement systemic safety improvements. While none of these alternatives has achieved the political traction of damage caps, they reflect ongoing efforts to balance the legitimate interests of patients, healthcare providers, and society as a whole.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp10-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Damage caps on noneconomic awards represent the most effective solution to the medical malpractice crisis." },
      { letter: "B", text: "The medical malpractice reform debate involves competing values, with damage caps being the dominant legislative approach despite questions about their effectiveness and fairness, while alternative reforms continue to be proposed." },
      { letter: "C", text: "Critics of tort reform have conclusively demonstrated that damage caps fail to reduce healthcare costs." },
      { letter: "D", text: "Defensive medicine practices driven by malpractice fears represent the primary cause of rising healthcare expenses." },
      { letter: "E", text: "Enterprise liability should replace individual physician responsibility in all medical malpractice cases." },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the tort reform debate as centered on competing values (patient compensation vs. accessible healthcare), discusses damage caps as the primary legislative response while noting mixed evidence about their effectiveness and criticisms about fairness, and concludes by describing alternative reform proposals. Answer B captures this comprehensive, balanced treatment.",
    difficulty: "medium",
    passageId: "rc-exp10-p1",
  },
  {
    id: "rc-exp10-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, which of the following is mentioned as a way physicians have responded to high malpractice insurance premiums?",
    answerChoices: [
      { letter: "A", text: "Filing countersuits against patients who bring frivolous claims" },
      { letter: "B", text: "Forming collective bargaining groups to negotiate lower premiums" },
      { letter: "C", text: "Relocating to states with more favorable legal environments" },
      { letter: "D", text: "Refusing to carry malpractice insurance altogether" },
      { letter: "E", text: "Lobbying Congress to establish federal damage caps" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'Some physicians have responded by relocating to states with more favorable legal climates, retiring early, or abandoning high-risk procedures altogether.'",
    difficulty: "easy",
    passageId: "rc-exp10-p1",
  },
  {
    id: "rc-exp10-003",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the Congressional Budget Office estimate primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that tort reform would be economically beneficial" },
      { letter: "B", text: "support critics' argument that damage caps may not produce the dramatic savings that advocates claim" },
      { letter: "C", text: "provide evidence that healthcare spending is primarily driven by malpractice litigation" },
      { letter: "D", text: "argue that Congress should impose federal damage caps" },
      { letter: "E", text: "contrast the effectiveness of different reform approaches" },
    ],
    correctAnswer: "B",
    explanation: "The CBO estimate appears in the paragraph presenting critics' objections and is characterized as showing that comprehensive tort reform 'might reduce national healthcare spending by only about 0.5 percent,' which the author describes as 'far from the transformative savings that reform advocates sometimes promise.' This supports the critics' empirical arguments.",
    difficulty: "medium",
    passageId: "rc-exp10-p1",
  },
  {
    id: "rc-exp10-004",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of damage caps would most likely argue that such caps",
    answerChoices: [
      { letter: "A", text: "should be adjusted annually for inflation" },
      { letter: "B", text: "treat patients with the most severe injuries unfairly compared to those with lesser injuries" },
      { letter: "C", text: "have successfully reduced medical malpractice litigation rates" },
      { letter: "D", text: "should be applied only in cases involving economic damages" },
      { letter: "E", text: "represent a reasonable compromise between patient and physician interests" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics argue caps 'arbitrarily disadvantage the most seriously injured patients—those who suffer permanent disability, disfigurement, or loss of a loved one—precisely the victims for whom the legal system should provide the greatest remedy.' This indicates that the most severely injured are treated worse relative to those with lesser injuries.",
    difficulty: "medium",
    passageId: "rc-exp10-p1",
  },
  {
    id: "rc-exp10-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the various tort reform proposals discussed in the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of damage caps as the most effective solution" },
      { letter: "B", text: "dismissive of all attempts to reform the malpractice system" },
      { letter: "C", text: "neutral and analytical, presenting multiple perspectives without advocating for a particular approach" },
      { letter: "D", text: "enthusiastically supportive of enterprise liability as superior to all alternatives" },
      { letter: "E", text: "skeptical that any reform can meaningfully improve the healthcare system" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both proponents' and critics' arguments regarding damage caps, provides empirical evidence from both perspectives, and discusses alternative reforms without indicating which approach is preferable. The passage maintains a balanced, informative tone throughout.",
    difficulty: "medium",
    passageId: "rc-exp10-p1",
  },
  {
    id: "rc-exp10-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the argument made by proponents of damage caps?",
    answerChoices: [
      { letter: "A", text: "Patients in states with damage caps report lower satisfaction with their healthcare experiences." },
      { letter: "B", text: "States that implemented damage caps subsequently experienced significant increases in the number of physicians practicing high-risk specialties." },
      { letter: "C", text: "Insurance companies in states with damage caps have increased their profit margins substantially." },
      { letter: "D", text: "Most medical malpractice lawsuits are ultimately decided in favor of the defendant physician." },
      { letter: "E", text: "Healthcare administrators believe that tort reform is unlikely to affect their institutions." },
    ],
    correctAnswer: "B",
    explanation: "Proponents argue that damage caps 'may help maintain physician supply in underserved areas' and address the problem of physicians abandoning high-risk specialties. Evidence that caps led to increased physician participation in these specialties would directly support this central claim.",
    difficulty: "hard",
    passageId: "rc-exp10-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - ANTIBIOTIC RESISTANCE AND EVOLUTIONARY MEDICINE
// ============================================

const passage2 = `The emergence of antibiotic-resistant bacteria represents one of the most pressing public health challenges of the twenty-first century, yet the phenomenon itself offers a compelling illustration of evolutionary principles in action. When Alexander Fleming discovered penicillin in 1928, he warned in his Nobel lecture that misuse of antibiotics could lead to resistant organisms. Less than a century later, his prediction has been realized on a global scale, with resistant infections claiming hundreds of thousands of lives annually and threatening to undermine the foundations of modern medicine.

The evolutionary mechanisms driving resistance are well understood. Bacterial populations are genetically diverse, and when exposed to an antibiotic, susceptible individuals die while resistant variants survive and reproduce—a textbook case of natural selection. Resistance genes can spread not only through vertical transmission from parent to offspring but also through horizontal gene transfer, in which bacteria exchange genetic material directly through conjugation, transformation, or transduction. This horizontal transfer accelerates the spread of resistance across species boundaries, enabling pathogenic bacteria to acquire resistance genes from benign environmental organisms.

The problem has been exacerbated by overuse and misuse of antibiotics in both human medicine and agriculture. In clinical settings, antibiotics are frequently prescribed for viral infections against which they are ineffective, or administered in subtherapeutic doses that kill weaker bacteria while allowing more resistant strains to persist. Agricultural use is even more extensive: in the United States, approximately 80 percent of antibiotics sold are used in livestock, often not to treat infection but to promote growth or compensate for crowded, unsanitary conditions. Critics argue that this prophylactic use creates vast reservoirs of resistant bacteria that can transfer to humans through food, water, and direct contact.

The emerging field of evolutionary medicine offers new approaches to combating resistance. Rather than seeking ever-newer antibiotics in an escalating arms race with bacteria, some researchers advocate strategies designed to manage resistance evolution. One approach involves cycling or mixing antibiotics to prevent any single resistance mechanism from becoming dominant. Another strategy exploits fitness costs associated with resistance: in the absence of antibiotic pressure, resistant bacteria often grow more slowly than susceptible strains, suggesting that periods of reduced antibiotic use might allow susceptible populations to recover. Phage therapy, using bacteriophages—viruses that infect bacteria—represents a fundamentally different approach that predates antibiotics but has gained renewed attention as resistance has grown.

Perhaps most importantly, evolutionary medicine emphasizes the need for prospective thinking about intervention strategies. Traditional approaches have focused on maximizing the killing of pathogens, but this intensive selection pressure accelerates resistance evolution. An evolutionarily informed perspective suggests that moderate interventions leaving some susceptible bacteria alive might preserve the competitive advantage of susceptibility, slowing the fixation of resistance in pathogen populations. While such counterintuitive strategies require careful validation, they illustrate how evolutionary thinking can transform our approach to one of medicine's most intractable problems.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp10-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Alexander Fleming accurately predicted that antibiotic misuse would lead to resistant bacteria." },
      { letter: "B", text: "Antibiotic resistance, driven by evolutionary mechanisms and exacerbated by overuse, represents a major health crisis that evolutionary medicine is attempting to address through novel strategies." },
      { letter: "C", text: "Horizontal gene transfer is the primary mechanism by which antibiotic resistance spreads among bacterial populations." },
      { letter: "D", text: "Agricultural use of antibiotics should be banned to prevent the development of resistant bacteria." },
      { letter: "E", text: "Phage therapy will replace antibiotics as the primary treatment for bacterial infections." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes antibiotic resistance as a major public health challenge, explains the evolutionary mechanisms behind it, discusses how overuse has exacerbated the problem, and presents evolutionary medicine approaches as potential solutions. Answer B captures all these key elements.",
    difficulty: "medium",
    passageId: "rc-exp10-p2",
  },
  {
    id: "rc-exp10-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, horizontal gene transfer allows bacteria to",
    answerChoices: [
      { letter: "A", text: "develop immunity to bacteriophages" },
      { letter: "B", text: "reproduce more rapidly in the presence of antibiotics" },
      { letter: "C", text: "acquire resistance genes from organisms of different species" },
      { letter: "D", text: "avoid detection by the human immune system" },
      { letter: "E", text: "survive without genetic mutation" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that horizontal gene transfer 'accelerates the spread of resistance across species boundaries, enabling pathogenic bacteria to acquire resistance genes from benign environmental organisms.'",
    difficulty: "easy",
    passageId: "rc-exp10-p2",
  },
  {
    id: "rc-exp10-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the concept of 'fitness costs' associated with resistance implies that",
    answerChoices: [
      { letter: "A", text: "resistant bacteria require more nutrients to survive than susceptible bacteria" },
      { letter: "B", text: "maintaining resistance mechanisms may disadvantage bacteria when antibiotics are not present" },
      { letter: "C", text: "resistant bacteria are unable to transfer genes horizontally" },
      { letter: "D", text: "antibiotics become more toxic over time when bacteria develop resistance" },
      { letter: "E", text: "susceptible bacteria cannot compete with resistant strains under any circumstances" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'in the absence of antibiotic pressure, resistant bacteria often grow more slowly than susceptible strains,' suggesting that resistance comes at a cost (reduced growth rate) when the selective pressure of antibiotics is removed.",
    difficulty: "medium",
    passageId: "rc-exp10-p2",
  },
  {
    id: "rc-exp10-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's discussion of agricultural antibiotic use primarily serves to",
    answerChoices: [
      { letter: "A", text: "argue that livestock farming should be eliminated" },
      { letter: "B", text: "illustrate how overuse of antibiotics extends beyond clinical settings and contributes to the resistance problem" },
      { letter: "C", text: "demonstrate that agricultural antibiotics are more effective than medical antibiotics" },
      { letter: "D", text: "criticize the Food and Drug Administration's regulatory policies" },
      { letter: "E", text: "contrast American farming practices with those in other countries" },
    ],
    correctAnswer: "B",
    explanation: "The paragraph on agricultural use appears in the context of discussing how 'the problem has been exacerbated by overuse and misuse of antibiotics.' The agricultural discussion shows that the problem extends beyond hospitals, with most antibiotics going to livestock, often for non-therapeutic purposes that create 'vast reservoirs of resistant bacteria.'",
    difficulty: "medium",
    passageId: "rc-exp10-p2",
  },
  {
    id: "rc-exp10-011",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, an evolutionarily informed approach to treating a bacterial infection might include which of the following?",
    answerChoices: [
      { letter: "A", text: "Using the highest possible dose of the most powerful antibiotic available" },
      { letter: "B", text: "Administering multiple antibiotics simultaneously at maximum strength" },
      { letter: "C", text: "Employing a moderate treatment approach that does not eliminate all susceptible bacteria" },
      { letter: "D", text: "Avoiding any use of antibiotics in favor of allowing the immune system to fight the infection" },
      { letter: "E", text: "Continuing antibiotic treatment indefinitely to prevent any bacterial survival" },
    ],
    correctAnswer: "C",
    explanation: "The passage describes how evolutionary medicine suggests that 'moderate interventions leaving some susceptible bacteria alive might preserve the competitive advantage of susceptibility, slowing the fixation of resistance.' This contrasts with traditional approaches that focus on 'maximizing the killing of pathogens.'",
    difficulty: "medium",
    passageId: "rc-exp10-p2",
  },
  {
    id: "rc-exp10-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A problem is introduced, its causes are analyzed, contributing factors are discussed, and potential solutions are explored." },
      { letter: "B", text: "A scientific theory is proposed, evidence is presented to support it, and objections are addressed." },
      { letter: "C", text: "Historical events are recounted in chronological order, leading to a prediction about the future." },
      { letter: "D", text: "Two competing scientific hypotheses are compared, and one is shown to be superior." },
      { letter: "E", text: "A common misconception is identified and then corrected through detailed scientific analysis." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces the antibiotic resistance problem, explains the evolutionary mechanisms causing it, discusses how overuse in medicine and agriculture has exacerbated it, and then explores potential solutions offered by evolutionary medicine. This matches the structure described in answer A.",
    difficulty: "medium",
    passageId: "rc-exp10-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - PHOTOGRAPHY AS ART AND THE PICTORIALIST MOVEMENT
// ============================================

const passage3 = `When photography emerged in the mid-nineteenth century, it immediately raised questions about the nature of art that continue to resonate today. Could a mechanical process that captured an image through chemical reactions on a light-sensitive surface produce genuine works of art, or was photography merely a technical procedure, useful for documentation but fundamentally distinct from creative expression? The Pictorialist movement, which flourished from the 1880s through the early twentieth century, represented the most sustained early effort to establish photography as a fine art worthy of museum walls and critical attention.

The Pictorialists developed both theoretical arguments and practical techniques to distinguish their work from ordinary photography. Theoretically, they emphasized the role of personal vision and interpretation. A photograph, they argued, was not simply a transparent window onto reality but an expression of the photographer's artistic sensibility—the choice of subject, the timing of the exposure, the selection of printing technique all reflected aesthetic judgment comparable to a painter's decisions about composition and color. Practically, Pictorialists employed processes that emphasized the handcrafted nature of their work. Techniques such as gum bichromate printing, platinum printing, and oil transfer allowed photographers to manipulate their images extensively, softening focus, adjusting tonal ranges, and even brushing pigment onto prints by hand.

Critics of Pictorialism, however, argued that in imitating the effects of painting, photographers betrayed the distinctive character of their medium. The "straight photography" movement that emerged in the early twentieth century, championed by figures like Alfred Stieglitz and Paul Strand, maintained that photography's artistic potential lay precisely in its mechanical precision and its capacity to reveal the world with unprecedented clarity and detail. Rather than obscuring the photograph's indexical relationship to reality—its status as a direct physical trace of light reflected from actual objects—straight photographers celebrated this quality as the medium's unique artistic strength.

This debate about photography's essential nature anticipated broader discussions in twentieth-century aesthetics about the relationship between medium and meaning. The art critic Clement Greenberg would later argue that each artistic medium should explore and emphasize its distinctive characteristics rather than imitating other art forms. From this perspective, the Pictorialists' soft-focus, painterly images represented an evasion of photography's true artistic calling. Yet contemporary critics have increasingly questioned whether any medium possesses a single essential character that artists are obligated to express. Perhaps the Pictorialists' manipulation of their images was no less legitimate than the straight photographers' cultivation of sharp focus and fine detail—both, after all, involved deliberate aesthetic choices.

The digital revolution has given renewed relevance to these historical debates. Contemporary photographers routinely manipulate their images in ways that would have astonished both Pictorialists and straight photographers, yet the question of what distinguishes artistic photography from mere technical production remains as contested as ever. The Pictorialist legacy reminds us that such questions are not simply technical or aesthetic but touch on fundamental issues about the nature of creativity, authorship, and art itself.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp10-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Pictorialist movement succeeded in establishing photography as a legitimate fine art." },
      { letter: "B", text: "The debate between Pictorialists and straight photographers about photography's artistic nature reflects enduring questions about medium, manipulation, and creativity that remain relevant today." },
      { letter: "C", text: "Clement Greenberg's theory of medium specificity provides the definitive framework for understanding photographic art." },
      { letter: "D", text: "Digital photography has rendered historical debates about photographic art obsolete." },
      { letter: "E", text: "Straight photography represents the only legitimate approach to photographic art." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the debate between Pictorialists and straight photographers, connects it to broader aesthetic theories, and notes its continued relevance in the digital age. The central theme is this ongoing debate about photography's artistic nature and what constitutes legitimate creative expression in the medium.",
    difficulty: "medium",
    passageId: "rc-exp10-p3",
  },
  {
    id: "rc-exp10-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Pictorialist photographers employed techniques such as gum bichromate printing primarily to",
    answerChoices: [
      { letter: "A", text: "reduce the cost of producing photographic prints" },
      { letter: "B", text: "increase the sharpness and detail of their images" },
      { letter: "C", text: "emphasize the handcrafted nature of their work" },
      { letter: "D", text: "challenge the scientific accuracy of photography" },
      { letter: "E", text: "document historical events more effectively" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'Pictorialists employed processes that emphasized the handcrafted nature of their work,' and then lists techniques including 'gum bichromate printing, platinum printing, and oil transfer' as examples.",
    difficulty: "easy",
    passageId: "rc-exp10-p3",
  },
  {
    id: "rc-exp10-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, proponents of straight photography would most likely view photographs with deliberately softened focus as",
    answerChoices: [
      { letter: "A", text: "superior examples of photographic art" },
      { letter: "B", text: "a betrayal of photography's distinctive artistic strengths" },
      { letter: "C", text: "acceptable when used for documentary purposes" },
      { letter: "D", text: "appropriate for amateur but not professional photographers" },
      { letter: "E", text: "technically difficult to achieve with early equipment" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics of Pictorialism, including straight photographers, 'argued that in imitating the effects of painting, photographers betrayed the distinctive character of their medium.' Since soft focus was a key Pictorialist technique that imitated painterly effects, straight photographers would view it as a betrayal of photography's true nature.",
    difficulty: "medium",
    passageId: "rc-exp10-p3",
  },
  {
    id: "rc-exp10-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Clement Greenberg's views on artistic media primarily in order to",
    answerChoices: [
      { letter: "A", text: "provide definitive resolution to the debate between Pictorialists and straight photographers" },
      { letter: "B", text: "argue that Greenberg's theories should be applied to contemporary digital photography" },
      { letter: "C", text: "connect the historical photography debate to broader theoretical discussions in aesthetics" },
      { letter: "D", text: "demonstrate that Greenberg was directly influenced by the Pictorialist movement" },
      { letter: "E", text: "criticize Greenberg's failure to understand photographic art" },
    ],
    correctAnswer: "C",
    explanation: "The passage introduces Greenberg by stating that 'This debate about photography's essential nature anticipated broader discussions in twentieth-century aesthetics about the relationship between medium and meaning.' Greenberg's views are presented as part of these broader theoretical discussions, connecting the specific photography debate to larger aesthetic questions.",
    difficulty: "medium",
    passageId: "rc-exp10-p3",
  },
  {
    id: "rc-exp10-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that the author's view of the debate between Pictorialists and straight photographers is that",
    answerChoices: [
      { letter: "A", text: "the straight photographers were clearly correct in their assessment" },
      { letter: "B", text: "the Pictorialists' approach was aesthetically superior" },
      { letter: "C", text: "neither side's position was definitively correct, as both involved legitimate aesthetic choices" },
      { letter: "D", text: "the debate was trivial and had no lasting significance" },
      { letter: "E", text: "technological progress has proven both sides wrong" },
    ],
    correctAnswer: "C",
    explanation: "The author notes that 'contemporary critics have increasingly questioned whether any medium possesses a single essential character that artists are obligated to express' and suggests that 'the Pictorialists' manipulation of their images was no less legitimate than the straight photographers' cultivation of sharp focus and fine detail—both, after all, involved deliberate aesthetic choices.'",
    difficulty: "medium",
    passageId: "rc-exp10-p3",
  },
  {
    id: "rc-exp10-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage most strongly suggests that the term 'indexical relationship' refers to",
    answerChoices: [
      { letter: "A", text: "the photographer's emotional connection to the subject" },
      { letter: "B", text: "the historical cataloging of photographic techniques" },
      { letter: "C", text: "the direct physical connection between a photograph and the objects it depicts" },
      { letter: "D", text: "the arrangement of images in a photographic series" },
      { letter: "E", text: "the commercial value of photographic prints" },
    ],
    correctAnswer: "C",
    explanation: "The passage defines the 'indexical relationship to reality' as the photograph's 'status as a direct physical trace of light reflected from actual objects.' This indicates a direct physical connection between the photograph and what was photographed.",
    difficulty: "medium",
    passageId: "rc-exp10-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - IMMIGRATION POLICY AND LABOR MARKET EFFECTS
// ============================================

const passage4 = `The economic effects of immigration on native workers remain among the most contested questions in labor economics. While popular discourse often frames immigration as a zero-sum competition for jobs, the scholarly consensus reflects a more nuanced reality shaped by complex interactions between labor supply, demand, and complementarity. Understanding these dynamics is essential for developing immigration policies that serve both humanitarian goals and economic interests.

The simplest economic model predicts that an influx of immigrant workers should lower wages and reduce employment for native workers with similar skills. If labor supply increases while demand remains constant, basic supply-and-demand analysis suggests that wages must fall. Some empirical studies have indeed found modest negative effects, particularly for native workers without high school diplomas who compete most directly with less-educated immigrants. Economist George Borjas has estimated that immigration reduced the wages of American workers without a high school degree by approximately 7.4 percent between 1980 and 2000.

However, critics of this analysis argue that static models fail to capture important dynamic effects. Immigration may stimulate labor demand by expanding consumer markets, generating entrepreneurial activity, and enabling the growth of industries that might otherwise relocate abroad. Moreover, native and immigrant workers are often complements rather than substitutes: immigrants may perform jobs that enable native workers to move into higher-skilled, better-paid positions. Research by economist Giovanni Peri suggests that immigration has had small positive effects on native wages overall, as complementary relationships between workers outweigh competitive pressures.

The distributional consequences of immigration vary significantly across economic strata. While less-skilled native workers may face some competitive pressure, highly educated professionals generally benefit from the availability of less-skilled labor and the dynamism that immigration contributes to the economy. Employers benefit from expanded labor pools and the ability to fill positions in sectors ranging from agriculture to technology. Consumers benefit from lower prices for goods and services produced by immigrant labor. These differential effects mean that immigration's overall economic impact must be distinguished from its impact on particular groups.

Recent research has increasingly focused on the fiscal effects of immigration—the balance between immigrants' tax contributions and their use of public services. Studies suggest that while first-generation immigrants may consume more in services than they pay in taxes, particularly if they arrived as adults with limited education, their children—the second generation—tend to be among the strongest net fiscal contributors. This generational perspective suggests that immigration's fiscal impact cannot be assessed solely by examining short-term budgets but requires consideration of longer-term integration trajectories. The policy implications of this research remain contested: some advocate for skill-based selection systems to maximize immigrants' immediate fiscal contributions, while others emphasize the proven capacity of family-based immigration systems to produce strong second-generation outcomes.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp10-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that immigration restrictions should be significantly tightened" },
      { letter: "B", text: "demonstrate that immigration has uniformly positive effects on native workers" },
      { letter: "C", text: "present the complex and contested economic effects of immigration, including varying impacts on different groups and timeframes" },
      { letter: "D", text: "compare the immigration policies of different countries" },
      { letter: "E", text: "criticize economists for failing to reach consensus on immigration's effects" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents immigration economics as a 'contested' area with 'complex interactions,' discusses both negative and positive findings, notes differential effects on various groups (less-skilled workers, employers, consumers), and examines both short-term and generational fiscal effects. This comprehensive treatment matches answer C.",
    difficulty: "medium",
    passageId: "rc-exp10-p4",
  },
  {
    id: "rc-exp10-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, George Borjas's research found that",
    answerChoices: [
      { letter: "A", text: "immigration had no measurable effect on native wages" },
      { letter: "B", text: "immigration reduced wages for workers without high school degrees by approximately 7.4 percent" },
      { letter: "C", text: "highly educated immigrants depressed wages for professional workers" },
      { letter: "D", text: "second-generation immigrants earn more than native workers" },
      { letter: "E", text: "employers benefited more from immigration than workers did" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Economist George Borjas has estimated that immigration reduced the wages of American workers without a high school degree by approximately 7.4 percent between 1980 and 2000.'",
    difficulty: "easy",
    passageId: "rc-exp10-p4",
  },
  {
    id: "rc-exp10-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, the concept of 'complementarity' between native and immigrant workers implies that",
    answerChoices: [
      { letter: "A", text: "native and immigrant workers always compete for the same positions" },
      { letter: "B", text: "immigrant workers are generally more productive than native workers" },
      { letter: "C", text: "the presence of immigrant workers in certain roles may enhance opportunities for native workers in other roles" },
      { letter: "D", text: "native workers should be trained to perform jobs currently held by immigrants" },
      { letter: "E", text: "wages for all workers must necessarily decline when immigration increases" },
    ],
    correctAnswer: "C",
    explanation: "The passage explains that 'native and immigrant workers are often complements rather than substitutes: immigrants may perform jobs that enable native workers to move into higher-skilled, better-paid positions.' This describes how immigrant workers in certain roles can enhance opportunities for natives in other roles.",
    difficulty: "medium",
    passageId: "rc-exp10-p4",
  },
  {
    id: "rc-exp10-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses the fiscal contributions of second-generation immigrants primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that first-generation immigrants should be denied access to public services" },
      { letter: "B", text: "suggest that immigration's fiscal impact should be evaluated over a longer timeframe than first-generation outcomes alone" },
      { letter: "C", text: "prove that family-based immigration is superior to skill-based selection" },
      { letter: "D", text: "criticize researchers who study only first-generation immigrants" },
      { letter: "E", text: "demonstrate that second-generation immigrants are identical to native citizens" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents the second-generation fiscal data as evidence that 'immigration's fiscal impact cannot be assessed solely by examining short-term budgets but requires consideration of longer-term integration trajectories.' This supports evaluating fiscal effects over a longer timeframe.",
    difficulty: "medium",
    passageId: "rc-exp10-p4",
  },
  {
    id: "rc-exp10-023",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most weaken the argument that immigration has positive overall effects on native wages?",
    answerChoices: [
      { letter: "A", text: "Many immigrant entrepreneurs eventually return to their countries of origin." },
      { letter: "B", text: "Studies show that complementary relationships between workers exist primarily in specific industries rather than throughout the economy." },
      { letter: "C", text: "Second-generation immigrants often work in the same occupations as their parents." },
      { letter: "D", text: "Consumer prices have declined in areas with high immigration." },
      { letter: "E", text: "Some immigrants arrive with advanced degrees from foreign universities." },
    ],
    correctAnswer: "B",
    explanation: "Giovanni Peri's argument for positive effects relies on 'complementary relationships between workers' outweighing competitive pressures throughout the economy. If these complementary relationships are limited to specific industries rather than being widespread, the overall positive effect on native wages would be diminished.",
    difficulty: "hard",
    passageId: "rc-exp10-p4",
  },
  {
    id: "rc-exp10-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's tone throughout the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly critical of immigration policies" },
      { letter: "B", text: "enthusiastically supportive of increased immigration" },
      { letter: "C", text: "analytically balanced, presenting multiple perspectives and acknowledging complexity" },
      { letter: "D", text: "dismissive of economic research on immigration" },
      { letter: "E", text: "pessimistic about the possibility of immigration reform" },
    ],
    correctAnswer: "C",
    explanation: "The author presents findings from researchers with different conclusions (Borjas vs. Peri), acknowledges that effects vary across groups and timeframes, notes that 'policy implications of this research remain contested,' and describes both skill-based and family-based approaches without endorsing either. This reflects a balanced, analytical approach.",
    difficulty: "medium",
    passageId: "rc-exp10-p4",
  },
];

// Export all RC questions from Set 10
export const rcQuestionsExpSet10: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet10 = {
  passage1: { id: "rc-exp10-p1", content: passage1, topic: "law", title: "Tort Reform and Medical Malpractice" },
  passage2: { id: "rc-exp10-p2", content: passage2, topic: "natural-sciences", title: "Antibiotic Resistance and Evolutionary Medicine" },
  passage3: { id: "rc-exp10-p3", content: passage3, topic: "humanities", title: "Photography as Art and the Pictorialist Movement" },
  passage4: { id: "rc-exp10-p4", content: passage4, topic: "social-sciences", title: "Immigration Policy and Labor Market Effects" },
};
