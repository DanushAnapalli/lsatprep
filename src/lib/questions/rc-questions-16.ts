// Reading Comprehension Questions Bank - Set 16
// Science - Medicine & Public Health

import { Question } from "../lsat-types";

// PASSAGE 1: Antibiotic Resistance and Public Health Policy
const passage1 = `The emergence of antibiotic-resistant bacteria represents one of the most pressing public health challenges of the twenty-first century, yet policy responses have been hampered by the complex interplay between individual clinical decisions and population-level consequences. When a physician prescribes antibiotics, the immediate benefit to the patient is often clear: the medication may cure a bacterial infection and alleviate suffering. However, each use of antibiotics exerts selective pressure on bacterial populations, favoring the survival and reproduction of resistant strains. This creates a classic tragedy of the commons, where individually rational decisions aggregate into collective harm.

The economics of antibiotic development exacerbate this challenge. Pharmaceutical companies have little incentive to invest in new antibiotics precisely because effective stewardship programs—which are necessary to preserve antibiotic effectiveness—restrict their use. Unlike medications for chronic conditions that patients take daily for years, antibiotics are typically prescribed for short courses, limiting revenue potential. Moreover, novel antibiotics are often reserved as "drugs of last resort," used only when older antibiotics fail, further constraining market opportunities. Consequently, the antibiotic development pipeline has dwindled dramatically, with few major pharmaceutical companies maintaining active antibacterial research programs.

Some policy experts advocate for "push" incentives that subsidize research and development directly, such as grants and tax credits for antibiotic research. Others favor "pull" incentives that guarantee market returns, such as purchase commitments or extended market exclusivity for new antibiotics. Sweden has implemented a pioneering subscription model, paying pharmaceutical companies annual fees for access to important antibiotics regardless of usage volume, thereby decoupling revenue from consumption.

Agricultural use of antibiotics presents an additional policy dilemma. In many countries, the majority of antibiotics are administered to livestock, not humans. Farmers use antibiotics both to treat infections and to promote growth in healthy animals, a practice that significantly contributes to the development and spread of resistant bacteria. The agricultural industry argues that restricting antibiotic use would increase animal disease, reduce meat production, and raise food prices. Public health advocates counter that the human health risks far outweigh these economic concerns and point to European countries that have successfully banned growth-promoting antibiotic use without catastrophic consequences for their agricultural sectors.

The global nature of antibiotic resistance complicates national policy efforts. Resistant bacteria do not respect borders; international travel and food trade can quickly spread resistant strains worldwide. A country that implements strict antibiotic stewardship may still face resistance problems imported from countries with lax policies. This suggests that effective solutions require international coordination, yet nations have vastly different healthcare systems, agricultural practices, and regulatory capacities. The tension between national sovereignty and the global scope of the problem has thus far limited the effectiveness of international agreements on antibiotic use.`;

const rcQuestions1: Question[] = [
  {
    id: "rc-set16-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Antibiotic resistance can be solved through stricter regulation of pharmaceutical companies" },
      { letter: "B", text: "The challenge of antibiotic resistance is compounded by economic, agricultural, and international coordination difficulties" },
      { letter: "C", text: "Agricultural use of antibiotics poses a greater threat than medical use" },
      { letter: "D", text: "Sweden's subscription model should be adopted globally" },
      { letter: "E", text: "International agreements are impossible to achieve due to national sovereignty concerns" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically presents multiple dimensions of the antibiotic resistance challenge: economic disincentives for development, agricultural use complications, and international coordination problems. The main point is the complex, multifaceted nature of the policy challenge.",
    difficulty: "medium",
    passageId: "rc16-p1",
  },
  {
    id: "rc-set16-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions the 'tragedy of the commons' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize physicians for overprescribing antibiotics" },
      { letter: "B", text: "illustrate how individually rational antibiotic prescriptions can produce collectively harmful resistance" },
      { letter: "C", text: "argue that common resources should be privatized" },
      { letter: "D", text: "suggest that antibiotics should be restricted to hospital use only" },
      { letter: "E", text: "demonstrate that public health problems cannot be solved through individual action" },
    ],
    correctAnswer: "B",
    explanation: "The passage uses 'tragedy of the commons' to explain the disconnect between individual clinical decisions (which may be rational) and the population-level consequence of resistance, where 'individually rational decisions aggregate into collective harm.'",
    difficulty: "medium",
    passageId: "rc16-p1",
  },
  {
    id: "rc-set16-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which of the following can be most reasonably inferred about Sweden's subscription model?",
    answerChoices: [
      { letter: "A", text: "It has completely eliminated antibiotic resistance in Sweden" },
      { letter: "B", text: "It addresses the economic disincentive problem by providing revenue independent of sales volume" },
      { letter: "C", text: "It has been universally adopted by European countries" },
      { letter: "D", text: "It eliminates the need for antibiotic stewardship programs" },
      { letter: "E", text: "It focuses primarily on agricultural antibiotic use" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Sweden's model involves 'paying pharmaceutical companies annual fees for access to important antibiotics regardless of usage volume, thereby decoupling revenue from consumption.' This directly addresses the economic problem of low revenue from restricted use.",
    difficulty: "medium",
    passageId: "rc16-p1",
  },
  {
    id: "rc-set16-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, which of the following is mentioned as a reason pharmaceutical companies lack incentive to develop new antibiotics?",
    answerChoices: [
      { letter: "A", text: "Government regulations prohibit antibiotic research" },
      { letter: "B", text: "Antibiotics are prescribed for short courses rather than chronic long-term use" },
      { letter: "C", text: "All existing antibiotics remain fully effective" },
      { letter: "D", text: "Patients prefer not to use antibiotics" },
      { letter: "E", text: "Research costs for antibiotics are uniquely high compared to other drugs" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Unlike medications for chronic conditions that patients take daily for years, antibiotics are typically prescribed for short courses, limiting revenue potential.'",
    difficulty: "easy",
    passageId: "rc16-p1",
  },
  {
    id: "rc-set16-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward agricultural antibiotic use restrictions can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly opposed based on economic concerns" },
      { letter: "B", text: "presenting competing perspectives without explicit endorsement" },
      { letter: "C", text: "dismissive of the agricultural industry's arguments" },
      { letter: "D", text: "unconditionally supportive of immediate bans" },
      { letter: "E", text: "skeptical that restrictions could be implemented" },
    ],
    correctAnswer: "B",
    explanation: "The author presents both the agricultural industry's concerns about disease and production, and public health advocates' arguments about human health risks, without clearly endorsing either position. The tone is balanced and expository.",
    difficulty: "medium",
    passageId: "rc16-p1",
  },
];

// PASSAGE 2: Precision Medicine and Healthcare Equity
const passage2 = `Precision medicine—the tailoring of medical treatment to individual patient characteristics, often using genetic information—promises to revolutionize healthcare by replacing one-size-fits-all approaches with therapies optimized for specific patients. Proponents argue that precision medicine will improve treatment efficacy while reducing adverse reactions, ultimately lowering healthcare costs by avoiding ineffective treatments. However, the development and implementation of precision medicine raises profound questions about healthcare equity that have received insufficient attention from policymakers and researchers.

The genetic databases that underpin precision medicine reflect significant demographic biases. Historically, genomic research has overwhelmingly focused on populations of European ancestry, with other ethnic groups substantially underrepresented. This creates a dangerous feedback loop: precision medicine tools developed from these biased datasets perform better for European-ancestry populations, incentivizing further research focus on these groups, which in turn perpetuates the disparity. Studies have shown that polygenic risk scores—which estimate disease risk based on genetic variants—are significantly less accurate for African, Asian, and Latin American populations than for European populations.

The implications extend beyond mere accuracy differences. If precision medicine becomes standard of care, populations for whom these tools work poorly may receive suboptimal treatment despite the availability of "advanced" medicine. Moreover, the high costs of precision medicine threaten to exacerbate existing healthcare disparities. Genetic testing, targeted therapies, and the specialized expertise required for precision medicine are expensive. In healthcare systems where access correlates with ability to pay, precision medicine may become another dimension along which healthcare quality diverges between wealthy and poor patients.

Some researchers argue that the solution lies in deliberate efforts to diversify genomic research. Several large-scale initiatives now aim to collect genetic data from underrepresented populations. However, these efforts face significant challenges. Historical medical abuses, particularly of minority communities, have created justified mistrust of medical research. Recruiting diverse participants requires not merely asking for participation but building long-term relationships with communities, addressing their concerns, and ensuring they benefit from research outcomes. The standard model of research—where academic institutions or pharmaceutical companies profit from discoveries based on participants' genetic data—may need fundamental restructuring to achieve genuine equity.

Furthermore, focusing solely on diversifying databases may not address the underlying economic barriers to access. Even perfectly accurate precision medicine tools benefit only those who can access them. Some healthcare equity advocates argue that resources devoted to precision medicine might achieve greater population health benefits if instead directed toward addressing social determinants of health—housing, nutrition, education, environmental exposures—that disproportionately affect disadvantaged communities. This raises difficult priority-setting questions: Should limited healthcare resources prioritize cutting-edge individualized treatment or broad-based public health interventions?`;

const rcQuestions2: Question[] = [
  {
    id: "rc-set16-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Precision medicine should be abandoned because it is too expensive" },
      { letter: "B", text: "Precision medicine raises significant healthcare equity concerns related to database bias, access barriers, and resource allocation" },
      { letter: "C", text: "Genomic research should focus exclusively on underrepresented populations" },
      { letter: "D", text: "Historical medical abuses make precision medicine research impossible" },
      { letter: "E", text: "Public health interventions are always more effective than precision medicine" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically presents equity concerns about precision medicine: biased genetic databases, access barriers due to cost, and questions about whether resources might be better spent on social determinants of health. The main point addresses these multiple equity dimensions.",
    difficulty: "medium",
    passageId: "rc16-p2",
  },
  {
    id: "rc-set16-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses polygenic risk scores primarily in order to",
    answerChoices: [
      { letter: "A", text: "provide evidence that genetic databases are completely unreliable" },
      { letter: "B", text: "illustrate the concrete consequences of demographic bias in genomic research" },
      { letter: "C", text: "argue that genetic testing should be prohibited" },
      { letter: "D", text: "demonstrate that precision medicine is equally effective for all populations" },
      { letter: "E", text: "suggest that European populations are genetically homogeneous" },
    ],
    correctAnswer: "B",
    explanation: "Polygenic risk scores are introduced as a specific example demonstrating that tools 'are significantly less accurate for African, Asian, and Latin American populations than for European populations,' concretely illustrating the practical impact of database bias.",
    difficulty: "medium",
    passageId: "rc16-p2",
  },
  {
    id: "rc-set16-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following best describes the 'dangerous feedback loop' mentioned in the second paragraph?",
    answerChoices: [
      { letter: "A", text: "Precision medicine causes genetic mutations that affect future generations" },
      { letter: "B", text: "Research bias leads to tools that work better for certain groups, which reinforces further research focus on those groups" },
      { letter: "C", text: "Expensive treatments make healthcare costs rise, leading to more expensive treatments" },
      { letter: "D", text: "Genetic databases grow too large to analyze effectively" },
      { letter: "E", text: "European populations are increasingly overrepresented in all medical research" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains the feedback loop: biased datasets lead to tools that 'perform better for European-ancestry populations, incentivizing further research focus on these groups, which in turn perpetuates the disparity.' Success with one population drives more focus on that population.",
    difficulty: "medium",
    passageId: "rc16-p2",
  },
  {
    id: "rc-set16-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, efforts to recruit diverse research participants face which of the following challenges?",
    answerChoices: [
      { letter: "A", text: "Underrepresented populations have no interest in medical research" },
      { letter: "B", text: "Genetic testing technology does not work on non-European populations" },
      { letter: "C", text: "Historical medical abuses have created justified mistrust of medical research" },
      { letter: "D", text: "Legal restrictions prohibit collecting genetic data from minority communities" },
      { letter: "E", text: "Researchers lack the technical expertise to analyze diverse genetic data" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states: 'Historical medical abuses, particularly of minority communities, have created justified mistrust of medical research' as a challenge facing recruitment efforts.",
    difficulty: "easy",
    passageId: "rc16-p2",
  },
  {
    id: "rc-set16-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that some healthcare equity advocates believe that",
    answerChoices: [
      { letter: "A", text: "precision medicine research should receive unlimited funding" },
      { letter: "B", text: "genetic factors are irrelevant to health outcomes" },
      { letter: "C", text: "resources devoted to precision medicine might produce greater health benefits if spent on social determinants of health" },
      { letter: "D", text: "all medical research should focus exclusively on underrepresented populations" },
      { letter: "E", text: "precision medicine has already achieved its goals" },
    ],
    correctAnswer: "C",
    explanation: "The final paragraph states that 'some healthcare equity advocates argue that resources devoted to precision medicine might achieve greater population health benefits if instead directed toward addressing social determinants of health.'",
    difficulty: "medium",
    passageId: "rc16-p2",
  },
];

// PASSAGE 3: Vaccine Development and Emergency Use Authorization
const passage3 = `The unprecedented speed of COVID-19 vaccine development—with multiple effective vaccines authorized within a year of the virus's identification—represented a triumph of modern science and regulatory flexibility. However, this achievement also highlighted tensions between the imperative for rapid response during public health emergencies and the traditional standards of evidence required for medical interventions. Understanding these tensions requires examining how Emergency Use Authorization (EUA) differs from standard approval pathways and considering whether this emergency framework should inform future regulatory approaches.

Under normal circumstances, vaccine approval follows a rigorous multiyear process. Preclinical studies in cell cultures and animals precede Phase I trials assessing safety in small numbers of healthy volunteers. Phase II trials expand to hundreds of participants to evaluate dosing and preliminary efficacy. Phase III trials involve thousands or tens of thousands of participants and typically require follow-up data spanning several years to assess long-term safety and durability of protection. This deliberate process reflects hard-learned lessons from historical cases where inadequate testing led to unforeseen harms.

Emergency Use Authorization, established in 2004, permits the FDA to allow use of unapproved medical products during declared emergencies when no adequate alternatives exist. The EUA standard requires that a product "may be effective" and that known benefits outweigh known risks—a lower evidentiary threshold than the "safe and effective" standard for full approval. Critically, EUA decisions must consider the nature and severity of the emergency. A level of uncertainty acceptable during a pandemic causing millions of deaths might be inappropriate for less severe situations.

The COVID-19 vaccine EUAs relied on Phase III trials with median follow-up periods of approximately two months—far shorter than typical vaccine development timelines. Critics argued this truncated timeline was insufficient to identify rare adverse events or assess long-term efficacy. Some pointed to the quick identification of rare but serious side effects (such as myocarditis in young men) after widespread administration as evidence that larger or longer trials were needed. Proponents countered that continuing conventional timelines while the virus killed thousands daily would itself constitute an ethical failure. The relevant comparison, they argued, was not to an idealized risk-free scenario but to the alternative of continued widespread COVID-19 mortality.

The experience raises broader questions about regulatory frameworks. Some public health experts argue that COVID-19 demonstrated that traditional timelines are excessively conservative and that regulatory agencies should permanently adopt more flexible approaches, particularly for diseases with high unmet medical needs. Others worry that normalizing abbreviated evidence standards could undermine public trust in vaccines and medical products more broadly. They note that vaccine hesitancy—already a significant public health challenge—is partly fueled by perceptions that safety testing is inadequate. Relaxing standards could paradoxically reduce vaccine uptake even for demonstrably safe products.

Moreover, the question of what constitutes an "emergency" sufficient to justify EUA remains contested. Should EUA be available only for acute pandemic threats, or also for ongoing health crises like antibiotic resistance or endemic diseases in low-income countries? The answers involve not merely technical assessments of risk and benefit but value judgments about acceptable uncertainty and the proper distribution of health risks across populations.`;

const rcQuestions3: Question[] = [
  {
    id: "rc-set16-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Emergency Use Authorization should be permanently eliminated" },
      { letter: "B", text: "COVID-19 vaccine development was unsafe and should not have been accelerated" },
      { letter: "C", text: "The rapid COVID-19 vaccine development highlighted tensions between emergency response and traditional evidence standards, raising questions about future regulatory approaches" },
      { letter: "D", text: "All future vaccines should follow the accelerated COVID-19 timeline" },
      { letter: "E", text: "Public trust in vaccines has been permanently destroyed by Emergency Use Authorization" },
    ],
    correctAnswer: "C",
    explanation: "The passage explores how COVID-19 vaccine development illustrated tensions between rapid response needs and traditional standards, and discusses competing views on whether this should influence future regulation. The main point is this tension and the questions it raises, not advocacy for a particular position.",
    difficulty: "medium",
    passageId: "rc16-p3",
  },
  {
    id: "rc-set16-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage mentions myocarditis cases primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that COVID-19 vaccines are dangerous" },
      { letter: "B", text: "support critics' argument that shorter trial periods may miss rare adverse events" },
      { letter: "C", text: "demonstrate that traditional approval processes never miss side effects" },
      { letter: "D", text: "argue that all vaccination should be suspended" },
      { letter: "E", text: "show that Emergency Use Authorization is never appropriate" },
    ],
    correctAnswer: "B",
    explanation: "The myocarditis cases are mentioned as evidence supporting critics who 'argued this truncated timeline was insufficient to identify rare adverse events,' with critics pointing to the quick identification 'after widespread administration as evidence that larger or longer trials were needed.'",
    difficulty: "medium",
    passageId: "rc16-p3",
  },
  {
    id: "rc-set16-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, proponents of the accelerated COVID-19 vaccine timeline would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "Long-term safety data is never necessary for vaccine approval" },
      { letter: "B", text: "Risk assessment must compare the vaccine's risks to the risks of continued disease spread, not to a zero-risk ideal" },
      { letter: "C", text: "Public trust in vaccines is unimportant during emergencies" },
      { letter: "D", text: "Traditional vaccine approval processes should be completely abandoned" },
      { letter: "E", text: "Rare adverse events from vaccines are never a legitimate concern" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that proponents 'countered that continuing conventional timelines while the virus killed thousands daily would itself constitute an ethical failure. The relevant comparison, they argued, was not to an idealized risk-free scenario but to the alternative of continued widespread COVID-19 mortality.'",
    difficulty: "medium",
    passageId: "rc16-p3",
  },
  {
    id: "rc-set16-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, what is the evidentiary standard required for Emergency Use Authorization?",
    answerChoices: [
      { letter: "A", text: "Products must be proven completely safe" },
      { letter: "B", text: "Products must be 'safe and effective' according to full approval standards" },
      { letter: "C", text: "Products 'may be effective' and known benefits must outweigh known risks" },
      { letter: "D", text: "Products must have completed five years of safety testing" },
      { letter: "E", text: "No evidence of effectiveness is required" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states: 'The EUA standard requires that a product \"may be effective\" and that known benefits outweigh known risks—a lower evidentiary threshold than the \"safe and effective\" standard for full approval.'",
    difficulty: "easy",
    passageId: "rc16-p3",
  },
  {
    id: "rc-set16-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the debate over permanently adopting more flexible regulatory approaches can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly advocating for permanent flexibility" },
      { letter: "B", text: "completely opposed to any regulatory changes" },
      { letter: "C", text: "presenting competing perspectives without clearly endorsing either position" },
      { letter: "D", text: "dismissive of concerns about public trust" },
      { letter: "E", text: "convinced that the question is purely technical rather than involving value judgments" },
    ],
    correctAnswer: "C",
    explanation: "The author presents arguments from experts who favor more flexibility and those who worry about undermining trust, without indicating which position is correct. The final paragraph notes these questions 'involve not merely technical assessments...but value judgments,' maintaining a neutral analytical stance.",
    difficulty: "medium",
    passageId: "rc16-p3",
  },
];

// PASSAGE 4: Organ Allocation and Justice
const passage4 = `The allocation of scarce transplantable organs represents one of the most ethically fraught decisions in modern medicine. In the United States, over 100,000 people await organ transplants, while only about 40,000 transplants occur annually. This stark imbalance means that allocation policies literally determine who lives and who dies. The ethical principles underlying these policies—and disputes about them—illuminate fundamental questions about justice, desert, and the proper role of social factors in medical decision-making.

Current U.S. organ allocation policies, administered by the United Network for Organ Sharing (UNOS), emphasize medical utility: organs should go to patients most likely to benefit from them, measured by expected survival time and quality of life improvements. This utilitarian framework prioritizes maximizing aggregate health outcomes from the limited organ supply. Geographic proximity also plays a role, based on practical considerations about organ preservation and the logistics of time-sensitive transplant surgery.

However, the medical utility framework faces persistent criticisms. First, it may systematically disadvantage patients whose lower expected outcomes result from social determinants of health rather than inherent medical factors. A patient who will have difficulty adhering to complex post-transplant medication regimens due to homelessness or lack of health insurance receives a lower priority, even though their medical need may be equally urgent. Critics argue this amounts to penalizing people for poverty, effectively allocating organs based on socioeconomic status.

Second, the emphasis on expected survival duration raises philosophical questions about whose life matters more. Consider two patients: a 35-year-old who might survive 30 years with a transplant, and a 65-year-old who might survive 15 years. Pure utility maximization favors the younger patient. But does this imply that adding years to a younger person's life has greater moral value than adding years to an older person's life? Some argue this constitutes age discrimination. Others counter that it is not discriminatory to give priority based on objective differences in expected benefit, and that failing to consider life expectancy would itself be ethically problematic, wasting organs that could save more years of life.

Alternative frameworks emphasize different values. A "sickest first" approach prioritizes patients with the most urgent need, regardless of expected outcomes. This respects the urgency of each patient's situation and avoids the troubling implications of valuing some lives more than others. However, it could result in organs going to patients with extremely poor prognoses, potentially leading to more deaths overall as organs that might have saved patients with better prognoses are instead used for patients who die shortly after transplant.

Some philosophers advocate for a lottery system among medically suitable candidates, arguing this respects equal moral worth by giving each patient an equal chance. Yet pure lottery systems disregard both medical utility and urgency, potentially resulting in patients dying on the waitlist while organs go to less urgent cases. Moreover, organ donation relies on public willingness to donate, which might decrease if people believe organs will be allocated inefficiently.

The challenge is compounded by the fact that different ethical frameworks may be appropriate for different contexts. The considerations relevant to allocating hearts—where patients often face imminent death without transplantation—may differ from those for allocating kidneys, where dialysis provides a life-sustaining (if burdensome) alternative. No allocation system can simultaneously maximize utility, prioritize the sickest, respect equal chances, and eliminate socioeconomic disparities. Each approach reflects value judgments about which ethical considerations should take precedence.`;

const rcQuestions4: Question[] = [
  {
    id: "rc-set16-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "The current U.S. organ allocation system is perfect and requires no changes" },
      { letter: "B", text: "Organ allocation policies raise fundamental ethical questions, with competing frameworks reflecting different values and priorities" },
      { letter: "C", text: "Lottery systems are clearly superior to utility-based allocation" },
      { letter: "D", text: "Age should never be considered in organ allocation decisions" },
      { letter: "E", text: "Geographic proximity is the most important factor in organ allocation" },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically presents multiple ethical frameworks for organ allocation (utility, sickest-first, lottery) and notes that 'each approach reflects value judgments about which ethical considerations should take precedence.' The central concern is the ethical complexity of allocation decisions.",
    difficulty: "medium",
    passageId: "rc16-p4",
  },
  {
    id: "rc-set16-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses the example of homeless patients primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that homeless people should never receive transplants" },
      { letter: "B", text: "illustrate how medical utility frameworks may disadvantage patients due to social factors rather than medical ones" },
      { letter: "C", text: "demonstrate that all allocation systems produce identical outcomes" },
      { letter: "D", text: "prove that socioeconomic status is medically irrelevant" },
      { letter: "E", text: "support the current UNOS allocation policies" },
    ],
    correctAnswer: "B",
    explanation: "The homeless patient example illustrates the criticism that utility frameworks 'may systematically disadvantage patients whose lower expected outcomes result from social determinants of health rather than inherent medical factors,' amounting to 'penalizing people for poverty.'",
    difficulty: "medium",
    passageId: "rc16-p4",
  },
  {
    id: "rc-set16-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, supporters of the medical utility framework would most likely argue which of the following about the 35-year-old versus 65-year-old patient scenario?",
    answerChoices: [
      { letter: "A", text: "Age should never be considered in any medical decision" },
      { letter: "B", text: "The patients should flip a coin to decide who gets the organ" },
      { letter: "C", text: "Prioritizing based on expected benefit is not discriminatory and avoids wasting organs" },
      { letter: "D", text: "The 65-year-old patient should automatically receive priority" },
      { letter: "E", text: "Life expectancy is impossible to predict and should be ignored" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that defenders 'counter that it is not discriminatory to give priority based on objective differences in expected benefit, and that failing to consider life expectancy would itself be ethically problematic, wasting organs that could save more years of life.'",
    difficulty: "medium",
    passageId: "rc16-p4",
  },
  {
    id: "rc-set16-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, approximately how many people await organ transplants in the United States?",
    answerChoices: [
      { letter: "A", text: "Over 40,000" },
      { letter: "B", text: "Exactly 65,000" },
      { letter: "C", text: "Over 100,000" },
      { letter: "D", text: "Fewer than 10,000" },
      { letter: "E", text: "Over 500,000" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states in the first paragraph: 'In the United States, over 100,000 people await organ transplants, while only about 40,000 transplants occur annually.'",
    difficulty: "easy",
    passageId: "rc16-p4",
  },
  {
    id: "rc-set16-020",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that pure lottery systems face which of the following potential problems?",
    answerChoices: [
      { letter: "A", text: "They are too expensive to implement" },
      { letter: "B", text: "They might reduce public willingness to donate organs if perceived as inefficient" },
      { letter: "C", text: "They cannot be computerized" },
      { letter: "D", text: "They always produce worse survival outcomes than sickest-first approaches" },
      { letter: "E", text: "They explicitly discriminate based on race and ethnicity" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'organ donation relies on public willingness to donate, which might decrease if people believe organs will be allocated inefficiently,' presenting this as a concern about lottery systems that 'disregard both medical utility and urgency.'",
    difficulty: "medium",
    passageId: "rc16-p4",
  },
];

export const rcQuestionsSet16: Question[] = [
  ...rcQuestions1,
  ...rcQuestions2,
  ...rcQuestions3,
  ...rcQuestions4,
];
