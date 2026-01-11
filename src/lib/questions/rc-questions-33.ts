import { Question } from "../lsat-types";

export const rcQuestionsSet33: Question[] = [
  // Passage 1: Disparate Impact Doctrine
  {
    id: "rc-33-1",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The disparate impact doctrine represents a crucial evolution in American antidiscrimination law, extending liability beyond intentional discrimination to facially neutral practices that disproportionately burden protected groups. Established by the Supreme Court in Griggs v. Duke Power Co. (1971), the doctrine recognizes that discrimination can operate through ostensibly neutral criteria that perpetuate historical inequities. The case involved employment tests and educational requirements that disqualified African American applicants at significantly higher rates than white applicants, with no demonstrated relationship to job performance. The Court held that Title VII of the Civil Rights Act prohibits not only overt discrimination but also practices that are "fair in form, but discriminatory in operation," shifting the analytical focus from discriminatory intent to discriminatory effects.

Under disparate impact analysis, plaintiffs establish a prima facie case by demonstrating that a facially neutral practice causes substantial statistical disparity along lines of race, sex, or another protected characteristic. Courts typically require showing that the challenged practice affects the protected group at a rate substantially different from the comparison group—often using the "four-fifths rule" as a rule of thumb, under which selection rates for protected groups below 80 percent of the rate for the comparison group raise inference of adverse impact. Once plaintiffs demonstrate disparity, the burden shifts to defendants to prove that the challenged practice is "job related for the position in question and consistent with business necessity." This requires showing that the practice effectively serves legitimate business objectives and that no alternative practice with less discriminatory effect could serve those objectives equally well.

The doctrine's application has proven contentious across multiple domains. In employment, disparate impact claims have challenged written tests, physical fitness requirements, experience prerequisites, and criminal background checks that disproportionately exclude protected groups. Housing discrimination law similarly prohibits policies that, while neutral on their face, perpetuate residential segregation—the Supreme Court's 2015 decision in Texas Department of Housing and Community Affairs v. Inclusive Communities Project affirmed disparate impact claims under the Fair Housing Act, recognizing that facially neutral zoning decisions and low-income housing placement can reinforce patterns of segregation even without discriminatory intent.

However, the doctrine faces persistent criticism from multiple perspectives. Conservative critics argue that disparate impact liability improperly transforms antidiscrimination law from prohibiting intentional wrongdoing into mandating statistical proportionality, effectively requiring racial preferences to avoid liability. They contend that many legitimate selection criteria—educational credentials, cognitive tests, criminal history—correlate with protected characteristics due to social factors beyond employers' or landlords' control, making liability essentially unavoidable. This allegedly creates pressure for quota-like hiring and admissions to maintain statistical parity, potentially leading to selection of less-qualified candidates and raising constitutional concerns about government-compelled consideration of race.

Progressive critics, conversely, argue that disparate impact doctrine does not go far enough in addressing structural inequality. The business necessity defense, they contend, permits excessive perpetuation of discriminatory practices: employers can justify criteria through minimal correlation with job performance even when alternatives with less discriminatory effect exist. Furthermore, the requirement that plaintiffs identify specific challenged practices disadvantages them in cases where discrimination results from complex interactions among multiple practices rather than single identifiable criteria. Most fundamentally, focusing solely on statistical disparities may obscure how ostensibly neutral criteria embody and perpetuate historical discrimination—educational requirements disadvantage groups denied equal educational opportunities; experience requirements disadvantage groups previously excluded from relevant positions. The doctrine, in this view, remains trapped in liberal formalism that addresses symptoms of structural inequality without confronting root causes, requiring mere absence of measurable disparate impact rather than affirmative dismantling of exclusionary structures that disadvantage groups remain situated within systems designed around dominant group norms.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The disparate impact doctrine extends antidiscrimination law to facially neutral practices causing statistical disparities, but faces criticisms from both conservatives concerned about statistical proportionality mandates and progressives arguing it inadequately addresses structural inequality." },
      { letter: "B", text: "Griggs v. Duke Power Co. definitively resolved all questions about employment discrimination and established perfect equality in American workplaces." },
      { letter: "C", text: "Disparate impact analysis applies only to employment discrimination and has never been extended to housing or other domains." },
      { letter: "D", text: "All facially neutral practices are automatically illegal regardless of business justification or statistical evidence." },
      { letter: "E", text: "Conservative and progressive critics agree completely about the proper scope and application of disparate impact doctrine." }
    ],
    correctAnswer: "A",
    explanation: "The passage explains disparate impact's origins and operation (paragraphs 1-2), its application across domains (paragraph 3), then presents both conservative criticisms about proportionality mandates (paragraph 4) and progressive criticisms about inadequate structural reform (paragraph 5). Choice A accurately captures this structure including the doctrine's nature and criticisms from both political perspectives.",
    difficulty: "medium",
    passageId: "rc-33-passage-1"
  },
  {
    id: "rc-33-2",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 1 text as above]`,
    questionStem: "Based on the passage, the four-fifths rule can most reasonably be inferred to mean that",
    answerChoices: [
      { letter: "A", text: "Protected groups must constitute exactly 80 percent of all successful applicants" },
      { letter: "B", text: "Selection rates for protected groups below 80 percent of the comparison group rate suggest potential adverse impact" },
      { letter: "C", text: "Employers must hire four-fifths of all applicants from protected groups" },
      { letter: "D", text: "Only practices affecting exactly 80 percent of protected groups violate antidiscrimination law" },
      { letter: "E", text: "Criminal background checks are automatically illegal if they screen out any protected group members" }
    ],
    correctAnswer: "B",
    explanation: "The passage states the four-fifths rule is 'a rule of thumb, under which selection rates for protected groups below 80 percent of the rate for the comparison group raise inference of adverse impact.' This describes it as a comparative ratio (protected group rate / comparison group rate < 0.80) that suggests potential impact, matching choice B.",
    difficulty: "medium",
    passageId: "rc-33-passage-1"
  },
  {
    id: "rc-33-3",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 1 text as above]`,
    questionStem: "According to the passage, once plaintiffs demonstrate statistical disparity, defendants must prove which one of the following?",
    answerChoices: [
      { letter: "A", text: "That they had no discriminatory intent whatsoever" },
      { letter: "B", text: "That the challenged practice is job related and consistent with business necessity" },
      { letter: "C", text: "That protected groups were historically overrepresented in the relevant positions" },
      { letter: "D", text: "That statistical disparity results entirely from applicants' voluntary choices" },
      { letter: "E", text: "That plaintiffs themselves engaged in discriminatory conduct" }
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Once plaintiffs demonstrate disparity, the burden shifts to defendants to prove that the challenged practice is job related for the position in question and consistent with business necessity.' This directly corresponds to choice B.",
    difficulty: "easy",
    passageId: "rc-33-passage-1"
  },
  {
    id: "rc-33-4",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 1 text as above]`,
    questionStem: "The author's reference to Griggs v. Duke Power Co. in the first paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "illustrate a case that established the disparate impact doctrine and its focus on discriminatory effects rather than intent" },
      { letter: "B", text: "prove that all employment tests are inherently discriminatory" },
      { letter: "C", text: "demonstrate that the Supreme Court opposes any educational requirements for employment" },
      { letter: "D", text: "argue that Title VII should be repealed" },
      { letter: "E", text: "show that discrimination no longer exists in American workplaces" }
    ],
    correctAnswer: "A",
    explanation: "The passage introduces Griggs as the case that 'Established' the disparate impact doctrine, using it to explain how the doctrine 'recognizes that discrimination can operate through ostensibly neutral criteria' and shifted 'analytical focus from discriminatory intent to discriminatory effects.' This illustrative function matches choice A.",
    difficulty: "medium",
    passageId: "rc-33-passage-1"
  },
  {
    id: "rc-33-5",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 1 text as above]`,
    questionStem: "The author's attitude toward the disparate impact doctrine can most accurately be described as",
    answerChoices: [
      { letter: "A", text: "unqualified support with no acknowledgment of any criticisms" },
      { letter: "B", text: "complete rejection as fundamentally flawed and illegitimate" },
      { letter: "C", text: "balanced presentation of the doctrine's rationale alongside critiques from multiple perspectives" },
      { letter: "D", text: "indifference to whether the doctrine effectively addresses discrimination" },
      { letter: "E", text: "certainty that both conservative and progressive criticisms are entirely without merit" }
    ],
    correctAnswer: "C",
    explanation: "The passage explains the doctrine's rationale (paragraphs 1-3), then presents conservative criticisms (paragraph 4) and progressive criticisms (paragraph 5) without endorsing or dismissing either. This balanced presentation of rationale and multiple critiques characterizes the author's attitude as balanced analysis rather than advocacy.",
    difficulty: "medium",
    passageId: "rc-33-passage-1"
  },

  // Passage 2: Affirmative Action in Education
  {
    id: "rc-33-6",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Affirmative action in higher education admissions has generated four decades of legal controversy, culminating in the Supreme Court's 2023 decision in Students for Fair Admissions v. Harvard, which held that race-conscious admissions policies violate the Equal Protection Clause. The trajectory from Regents of the University of California v. Bakke (1978) through Grutter v. Bollinger (2003) to the recent Harvard decision illustrates the Court's evolving constitutional analysis of racial classifications designed to promote diversity and remedy historical discrimination. Justice Powell's pivotal opinion in Bakke rejected racial quotas while permitting consideration of race as one factor among many in pursuit of educational diversity, establishing a framework that governed admissions policies for decades but ultimately proved unstable as judicial personnel and constitutional interpretation shifted.

Bakke's diversity rationale reflected a particular understanding of higher education's purpose and the educational benefits of diverse student bodies. Powell identified compelling interests in the "robust exchange of ideas" facilitated by exposing students to diverse perspectives, experiences, and viewpoints. This framing notably avoided relying on remedial justifications—correcting past discrimination or ameliorating present disadvantage—which would require findings of institutional culpability and raise questions about temporal limits on remedial measures. Instead, the diversity rationale characterized consideration of race as serving educational quality benefiting all students, not just minorities, thereby potentially avoiding characterization of preferences as impermissible racial balancing or quotas benefiting specific groups at others' expense.

Grutter v. Bollinger reaffirmed and elaborated Bakke's diversity rationale, upholding the University of Michigan Law School's admissions policy that considered race as one factor in holistic review. Justice O'Connor's majority opinion emphasized the educational benefits of diversity, including enhanced classroom discussion, reduced reliance on racial stereotypes, and better preparation of graduates for an increasingly diverse workforce and society. Crucially, the Court applied strict scrutiny—the most demanding standard of constitutional review—but found that diversity constituted a compelling governmental interest and that the Law School's narrowly tailored policy used race flexibly rather than mechanically. O'Connor suggested, however, that race-conscious admissions should have temporal limits, expressing expectation that such programs would no longer be necessary in 25 years.

Critics of affirmative action attacked both the diversity rationale's empirical foundations and its doctrinal coherence. Empirically, they questioned whether diversity actually produces claimed educational benefits, noting limited evidence that racial diversity per se improves learning outcomes absent deliberate pedagogical strategies leveraging diverse perspectives. Doctrinally, they argued that strict scrutiny should invalidate racial classifications regardless of beneficent purposes: the Equal Protection Clause, in this view, prohibits governmental racial discrimination categorically, whether the intent is to subordinate or to assist. Furthermore, critics contended that diversity interests prove infinitely elastic and temporally unlimited—any institution can claim diversity benefits, and claimed educational advantages could justify perpetual preferences. The absence of clear stopping points threatens to convert temporary remedies into permanent racial entitlements, contradicting constitutional color-blindness principles.

The Harvard decision resolved these debates by rejecting the diversity rationale entirely. Chief Justice Roberts' majority opinion held that universities' diversity interests, even if compelling abstractly, cannot justify race-conscious admissions as implemented. The opinion faulted Harvard's and the University of North Carolina's policies for inadequately defining diversity's contours, lacking measurable objectives with definite endpoints, employing racial classifications too extensively, and using race as more than the "plus factor" Bakke permitted. More fundamentally, the majority embraced a constitutional vision of color-blindness: the Fourteenth Amendment, enacted to eliminate racial caste and ensure equal treatment, cannot permit governmental racial classifications even when purportedly benefiting historically disadvantaged groups. This holding potentially extends beyond university admissions to affect corporate diversity initiatives, governmental contracting programs, and any contexts where race-conscious measures aim to promote inclusion or remedy inequality, raising questions about the constitutional permissibility of diversity, equity, and inclusion efforts across institutional domains.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Supreme Court's trajectory on affirmative action evolved from Bakke's limited approval of diversity-based race consideration to the Harvard decision's wholesale rejection of race-conscious admissions under a color-blindness principle with potentially broad implications." },
      { letter: "B", text: "Grutter v. Bollinger established that racial quotas are constitutionally permissible in all university admissions decisions." },
      { letter: "C", text: "Justice Powell's Bakke opinion required universities to implement mandatory racial balancing to remedy past discrimination." },
      { letter: "D", text: "The Harvard decision reaffirmed and expanded the diversity rationale, making race-conscious admissions easier to justify." },
      { letter: "E", text: "All universities have always used identical admissions policies with no variation in approaches to diversity." }
    ],
    correctAnswer: "A",
    explanation: "The passage traces the evolution from Bakke's diversity framework (paragraphs 1-2), through Grutter's reaffirmation (paragraph 3), to critiques (paragraph 4) and the Harvard decision's rejection (paragraph 5) based on color-blindness principles with broad implications. Choice A accurately captures this evolutionary trajectory and its significance.",
    difficulty: "medium",
    passageId: "rc-33-passage-2"
  },
  {
    id: "rc-33-7",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 2 text as above]`,
    questionStem: "The passage suggests that Justice Powell avoided remedial justifications for affirmative action primarily because",
    answerChoices: [
      { letter: "A", text: "Remedial rationales would require findings of institutional culpability and raise temporal limit questions" },
      { letter: "B", text: "Universities had never discriminated against minority applicants" },
      { letter: "C", text: "Diversity provides no educational benefits whatsoever" },
      { letter: "D", text: "The Equal Protection Clause explicitly prohibits all remedial measures" },
      { letter: "E", text: "Remedial approaches would be easier to justify than diversity rationales" }
    ],
    correctAnswer: "A",
    explanation: "The passage states that remedial justifications 'would require findings of institutional culpability and raise questions about temporal limits on remedial measures.' Powell's diversity rationale avoided these complications, suggesting this was a primary reason for the framing choice, as in choice A.",
    difficulty: "medium",
    passageId: "rc-33-passage-2"
  },
  {
    id: "rc-33-8",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 2 text as above]`,
    questionStem: "According to the passage, in Grutter v. Bollinger, Justice O'Connor suggested that race-conscious admissions should",
    answerChoices: [
      { letter: "A", text: "Continue indefinitely without any temporal limitations" },
      { letter: "B", text: "Be immediately prohibited across all universities" },
      { letter: "C", text: "Have temporal limits and no longer be necessary in 25 years" },
      { letter: "D", text: "Expand to include mandatory racial quotas" },
      { letter: "E", text: "Apply only to private universities, not public institutions" }
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'O'Connor suggested, however, that race-conscious admissions should have temporal limits, expressing expectation that such programs would no longer be necessary in 25 years.' This directly corresponds to choice C.",
    difficulty: "easy",
    passageId: "rc-33-passage-2"
  },
  {
    id: "rc-33-9",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 2 text as above]`,
    questionStem: "The author's discussion of strict scrutiny in paragraph 3 primarily serves to",
    answerChoices: [
      { letter: "A", text: "demonstrate that the Grutter Court found diversity compelling despite applying the most demanding constitutional review standard" },
      { letter: "B", text: "prove that strict scrutiny always invalidates racial classifications" },
      { letter: "C", text: "argue that courts should never apply strict scrutiny to university admissions" },
      { letter: "D", text: "show that diversity interests never satisfy constitutional requirements" },
      { letter: "E", text: "establish that strict scrutiny is easier to satisfy than rational basis review" }
    ],
    correctAnswer: "A",
    explanation: "The passage notes that Grutter 'applied strict scrutiny—the most demanding standard of constitutional review—but found that diversity constituted a compelling governmental interest and that the Law School's narrowly tailored policy used race flexibly.' This shows the Court satisfied strict scrutiny, demonstrating that even rigorous review could permit race consideration for diversity, as in choice A.",
    difficulty: "medium",
    passageId: "rc-33-passage-2"
  },
  {
    id: "rc-33-10",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 2 text as above]`,
    questionStem: "The author's attitude toward the constitutional debate over affirmative action can most accurately be described as",
    answerChoices: [
      { letter: "A", text: "strong advocacy for expanding race-conscious admissions beyond current practice" },
      { letter: "B", text: "complete agreement with the Harvard decision's color-blindness principle" },
      { letter: "C", text: "analytical presentation of the doctrinal evolution and competing constitutional visions without clear endorsement of either" },
      { letter: "D", text: "dismissive rejection of all diversity-based educational arguments" },
      { letter: "E", text: "certainty that affirmative action will inevitably be restored through future litigation" }
    ],
    correctAnswer: "C",
    explanation: "The passage traces doctrinal evolution (paragraphs 1-3), presents critiques of affirmative action (paragraph 4), and explains the Harvard decision's rejection (paragraph 5) without endorsing either pro-affirmative action or color-blindness positions. This analytical approach presenting competing views characterizes the author's attitude as balanced analysis.",
    difficulty: "medium",
    passageId: "rc-33-passage-2"
  },

  // Passage 3: Disability Rights and Reasonable Accommodation
  {
    id: "rc-33-11",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The Americans with Disabilities Act of 1990 transformed civil rights law by prohibiting discrimination against individuals with disabilities and mandating reasonable accommodations that enable participation in employment, public services, and public accommodations. Unlike earlier civil rights statutes that required merely neutral treatment, the ADA imposes affirmative obligations on covered entities to modify practices, policies, and physical environments to accommodate disability-related needs. This accommodation mandate reflects a social model of disability, which characterizes disability not as inherent individual deficit but as mismatch between individual characteristics and environmental design—a mismatch that accommodation can ameliorate by adjusting environments to human diversity rather than requiring conformity to narrow ability norms.

The reasonable accommodation requirement operates through an interactive process. Individuals with disabilities must request accommodations and provide sufficient medical documentation establishing both the existence of a covered disability and the relationship between the disability and the requested accommodation. Employers and other covered entities must then engage in good-faith discussion to identify effective accommodations that enable the individual to perform essential job functions or access services without imposing undue hardship on the entity. Accommodations may include physical modifications like wheelchair ramps or accessible restrooms, schedule adjustments to accommodate medical appointments or medication effects, provision of auxiliary aids like sign language interpreters or screen-reading software, or modification of workplace policies that unnecessarily disadvantage individuals with particular disabilities.

However, the accommodation requirement's boundaries remain contested. The "undue hardship" defense permits entities to deny accommodations that impose excessive costs or operational difficulties relative to the entity's resources and the nature of its operations. Courts consider factors including accommodation cost, the entity's overall budget, and the accommodation's impact on operations, but application proves highly fact-dependent and sometimes permits denial of accommodations that would meaningfully enhance inclusion. Furthermore, the requirement to accommodate only "qualified individuals with disabilities" who can perform "essential functions" of positions or participate in programs creates interpretive challenges: employers' characterization of functions as "essential" may reflect existing job structures designed around non-disabled workers rather than necessary task requirements, while programs may unnecessarily restrict participation through eligibility criteria reflecting unstated assumptions about typical capabilities.

The accommodation mandate's relationship to equality principles generates theoretical tension. Traditional antidiscrimination law pursues formal equality through identical treatment—the same rules apply to all regardless of protected characteristics. Accommodation requirements, conversely, mandate differential treatment: individuals with disabilities receive modifications that others do not, ostensibly creating special benefits or advantages. Critics argue this abandons equality for preferential treatment, requiring employers and taxpayers to subsidize individual limitations that antidiscrimination law should not address. Defenders respond that identical treatment of differently situated individuals perpetuates substantive inequality: applying rules designed for non-disabled persons to those with disabilities excludes the latter not through animus but through failure to accommodate difference. True equality, in this view, requires treating relevantly different people differently—providing accommodations that neutralize disability-created disadvantages and enable participation on terms approaching those available to non-disabled persons.

Moreover, accommodation's individualized nature creates implementation difficulties absent from other civil rights contexts. Whereas prohibitions on race or sex discrimination apply categorical rules—employers may not consider race in hiring decisions—accommodation requires particularized assessment of individual needs, workplace capacities, and available alternatives. This individualization creates administrative burdens, informational asymmetries (employees know their own limitations and needs better than employers), and potential for strategic behavior as parties dispute accommodation necessity and reasonableness. The interactive process requirement aims to address these challenges through structured dialogue, but power imbalances between employers and individual employees, privacy concerns about medical information disclosure, and fear of retaliation may undermine meaningful engagement. The result is an accommodation regime that promises inclusion through environmental adjustment but struggles with implementation challenges that limit its transformative potential, raising questions about whether disability rights can achieve substantive equality through individualized accommodation or require broader restructuring of work and social participation around universal design principles that reduce need for individualized modifications.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The ADA's reasonable accommodation mandate represents a shift from formal equality to affirmative obligations, but faces challenges regarding undue hardship limits, essential function definitions, and implementation difficulties inherent in individualized assessment." },
      { letter: "B", text: "All requested accommodations must be granted regardless of cost or operational impact." },
      { letter: "C", text: "Disability discrimination law should require only neutral treatment without any accommodation obligations." },
      { letter: "D", text: "The social model of disability has been universally rejected by courts and policymakers." },
      { letter: "E", text: "Accommodation requirements have completely eliminated all barriers facing individuals with disabilities." }
    ],
    correctAnswer: "A",
    explanation: "The passage explains the ADA's accommodation mandate and social model (paragraph 1), describes the interactive process (paragraph 2), discusses contested boundaries including undue hardship and essential functions (paragraph 3), analyzes tension with equality principles (paragraph 4), and examines implementation challenges (paragraph 5). Choice A accurately captures both the mandate's nature and its significant practical and theoretical challenges.",
    difficulty: "medium",
    passageId: "rc-33-passage-3"
  },
  {
    id: "rc-33-12",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 3 text as above]`,
    questionStem: "The social model of disability described in the passage can most reasonably be inferred to",
    answerChoices: [
      { letter: "A", text: "characterize disability as entirely a medical condition requiring cure" },
      { letter: "B", text: "view disability as mismatch between individual characteristics and environmental design that accommodation can address" },
      { letter: "C", text: "reject all medical treatment for disabilities as inappropriate" },
      { letter: "D", text: "require environments to remain completely unchanged regardless of accessibility barriers" },
      { letter: "E", text: "treat disability as solely individual responsibility without social dimensions" }
    ],
    correctAnswer: "B",
    explanation: "The passage states the social model 'characterizes disability not as inherent individual deficit but as mismatch between individual characteristics and environmental design—a mismatch that accommodation can ameliorate by adjusting environments to human diversity.' This directly describes the view in choice B.",
    difficulty: "medium",
    passageId: "rc-33-passage-3"
  },
  {
    id: "rc-33-13",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 3 text as above]`,
    questionStem: "According to the passage, the undue hardship defense permits covered entities to deny accommodations when they",
    answerChoices: [
      { letter: "A", text: "Simply prefer not to provide the requested accommodation" },
      { letter: "B", text: "Impose excessive costs or operational difficulties relative to the entity's resources" },
      { letter: "C", text: "Would benefit any individual with a disability" },
      { letter: "D", text: "Involve any expenditure of financial resources whatsoever" },
      { letter: "E", text: "Require communication with the individual requesting accommodation" }
    ],
    correctAnswer: "B",
    explanation: "The passage states 'The undue hardship defense permits entities to deny accommodations that impose excessive costs or operational difficulties relative to the entity's resources and the nature of its operations.' This directly corresponds to choice B.",
    difficulty: "easy",
    passageId: "rc-33-passage-3"
  },
  {
    id: "rc-33-14",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 3 text as above]`,
    questionStem: "The author's discussion of the tension between accommodation and formal equality principles primarily serves to",
    answerChoices: [
      { letter: "A", text: "illustrate theoretical debates about whether true equality requires identical treatment or differential treatment addressing relevant differences" },
      { letter: "B", text: "prove that accommodation requirements violate all principles of equality" },
      { letter: "C", text: "demonstrate that formal equality always produces better outcomes than substantive equality" },
      { letter: "D", text: "argue that antidiscrimination law should never require differential treatment" },
      { letter: "E", text: "show that disability rights advocates reject all equality-based arguments" }
    ],
    correctAnswer: "A",
    explanation: "The passage presents critics' view that accommodation 'abandons equality for preferential treatment' against defenders' view that 'true equality...requires treating relevantly different people differently.' This illustrates the theoretical debate about formal versus substantive equality concepts, as in choice A.",
    difficulty: "medium",
    passageId: "rc-33-passage-3"
  },
  {
    id: "rc-33-15",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 3 text as above]`,
    questionStem: "The author's attitude toward the ADA's accommodation regime can most accurately be described as",
    answerChoices: [
      { letter: "A", text: "uncritical endorsement as completely successful in achieving disability inclusion" },
      { letter: "B", text: "complete rejection as fundamentally misguided policy" },
      { letter: "C", text: "analytical recognition of its transformative promise alongside significant implementation challenges that limit effectiveness" },
      { letter: "D", text: "indifference to whether accommodations actually enable participation" },
      { letter: "E", text: "certainty that universal design would be universally worse than individualized accommodation" }
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges accommodation's potential (paragraph 1: 'transformed civil rights law,' paragraph 4: defenders' substantive equality arguments) but emphasizes 'contested boundaries' (paragraph 3), 'implementation difficulties' (paragraph 5), and questions about whether individualized accommodation can 'achieve substantive equality' or requires broader restructuring. This recognition of promise alongside limits characterizes a balanced analytical attitude.",
    difficulty: "medium",
    passageId: "rc-33-passage-3"
  },

  // Passage 4: Workplace Harassment Law
  {
    id: "rc-33-16",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Workplace harassment law developed through judicial interpretation of Title VII's prohibition on employment discrimination "because of" sex, race, and other protected characteristics. The Supreme Court's recognition in Meritor Savings Bank v. Vinson (1986) that hostile work environment harassment constitutes actionable discrimination expanded Title VII beyond discrete employment decisions like hiring and firing to encompass workplace conditions that create discriminatory intimidation or hostility. This expansion reflected understanding that discrimination operates not only through formal barriers but through informal workplace cultures that communicate unwelcomeness and create differential working conditions based on protected characteristics, making harassment prohibition essential to achieving substantive workplace equality.

Hostile environment claims require proving that harassment was "sufficiently severe or pervasive to alter the conditions of employment and create an abusive working environment." This standard attempts to distinguish actionable harassment from ordinary workplace conflicts, personality clashes, and isolated incidents of rudeness or disrespect. Courts assess severity and pervasiveness through both objective and subjective lenses: the conduct must be severe or pervasive enough that a reasonable person in the plaintiff's position would find the environment hostile, and the particular plaintiff must have actually perceived it as hostile. Factors considered include harassment frequency, severity, whether it was physically threatening or merely offensive, and whether it unreasonably interfered with work performance. The "because of" protected characteristic requirement means plaintiffs must prove that harassment targeted them on account of sex, race, or another protected characteristic rather than personal animosity or other non-protected reasons.

Employer liability for harassment depends on the harasser's position and the employer's response. Employers are strictly liable for harassment by supervisors resulting in tangible employment actions like termination or demotion. For supervisor harassment not resulting in tangible actions, employers may assert the Faragher-Ellerth affirmative defense: avoiding liability by proving they exercised reasonable care to prevent and promptly correct harassment—typically through anti-harassment policies and complaint procedures—and that the plaintiff unreasonably failed to utilize available preventive or corrective opportunities. For co-worker or customer harassment, employers are liable only if negligent in preventing or remedying harassment of which they knew or should have known. This liability framework aims to incentivize employer prevention efforts while balancing concerns about holding employers strictly liable for employee conduct beyond their actual control.

However, harassment law's operation has generated significant criticism from multiple directions. Some argue the severe or pervasive standard sets too high a threshold, permitting substantial harassment that does not quite reach actionable levels while creating disincentives for reporting less-severe incidents that might cumulatively establish hostile environments if documented. The requirement to prove harassment occurred "because of" protected characteristics creates proof difficulties in mixed-motive cases where personal animosity and discriminatory animus intertwine. Furthermore, the Faragher-Ellerth defense incentivizes formal anti-harassment policies but may not actually reduce harassment: policies alone do not change workplace cultures, while fear of retaliation and skepticism about complaint effectiveness often deter employees from reporting harassment through formal channels, allowing employers to avoid liability through unused complaint procedures despite actual harassment occurrence.

From another perspective, critics worry that harassment law restricts legitimate expression and imposes liability for speech that, while offensive to some, merits First Amendment protection. They contend that hostile environment claims based on verbal conduct create viewpoint-based restrictions on workplace speech, chilling robust discussion of controversial topics and requiring employers to censor employee expression to avoid liability. The reasonable person standard, in this view, permits majoritarian sensibilities to suppress minority viewpoints, while sexual harassment law particularly operates to enforce conventional sexual morality by prohibiting sexually explicit but non-coercive expression. Defenders respond that workplace harassment claims do not punish speech as such but rather regulate discriminatory conduct, including verbal conduct, that creates unequal working conditions—the First Amendment permits regulating speech integral to discriminatory treatment just as it permits regulating discriminatory conduct generally. The tension between harassment prohibition and expression values reflects broader conflicts between equality and liberty, between creating inclusive environments free from discrimination and preserving space for robust, even offensive, expression that may discomfit or offend but contributes to democratic discourse and individual autonomy.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Hostile work environment law expanded antidiscrimination protection to workplace conditions, but faces criticisms about threshold standards being too high, proof difficulties, policy effectiveness, and tension with free expression values." },
      { letter: "B", text: "Meritor Savings Bank v. Vinson established that all workplace speech is automatically illegal harassment." },
      { letter: "C", text: "Employers can never be held liable for any harassment by supervisors or co-workers." },
      { letter: "D", text: "The severe or pervasive standard has completely eliminated all workplace harassment." },
      { letter: "E", text: "First Amendment concerns have led courts to reject all hostile environment harassment claims." }
    ],
    correctAnswer: "A",
    explanation: "The passage explains hostile environment doctrine's development (paragraph 1), standards (paragraph 2), liability framework (paragraph 3), then presents criticisms about high thresholds and policy limitations (paragraph 4) and free speech tensions (paragraph 5). Choice A accurately captures both the doctrine's expansion of protection and the multiple serious criticisms it faces.",
    difficulty: "medium",
    passageId: "rc-33-passage-4"
  },
  {
    id: "rc-33-17",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 4 text as above]`,
    questionStem: "Based on the passage, the Faragher-Ellerth affirmative defense can most reasonably be inferred to",
    answerChoices: [
      { letter: "A", text: "apply to all harassment cases regardless of harasser's position" },
      { letter: "B", text: "allow employers to avoid liability for supervisor harassment without tangible employment actions if they maintained policies and the plaintiff unreasonably failed to use them" },
      { letter: "C", text: "guarantee employer liability for all supervisor harassment" },
      { letter: "D", text: "prohibit employers from maintaining any anti-harassment policies" },
      { letter: "E", text: "apply only when harassment results in termination or demotion" }
    ],
    correctAnswer: "B",
    explanation: "The passage states that for supervisor harassment without tangible actions, 'employers may assert the Faragher-Ellerth affirmative defense: avoiding liability by proving they exercised reasonable care to prevent and promptly correct harassment...and that the plaintiff unreasonably failed to utilize available preventive or corrective opportunities.' This describes the defense in choice B.",
    difficulty: "medium",
    passageId: "rc-33-passage-4"
  },
  {
    id: "rc-33-18",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 4 text as above]`,
    questionStem: "According to the passage, hostile environment claims require proving harassment was",
    answerChoices: [
      { letter: "A", text: "Committed by the company's chief executive officer" },
      { letter: "B", text: "Reported to authorities within 24 hours of occurrence" },
      { letter: "C", text: "Sufficiently severe or pervasive to alter employment conditions and create an abusive environment" },
      { letter: "D", text: "Witnessed by at least five other employees" },
      { letter: "E", text: "Intentionally designed to cause physical injury" }
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states 'Hostile environment claims require proving that harassment was sufficiently severe or pervasive to alter the conditions of employment and create an abusive working environment.' This directly corresponds to choice C.",
    difficulty: "easy",
    passageId: "rc-33-passage-4"
  },
  {
    id: "rc-33-19",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 4 text as above]`,
    questionStem: "The author's discussion of First Amendment concerns in the final paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "illustrate tensions between harassment prohibition and free expression values regarding workplace speech regulation" },
      { letter: "B", text: "prove that all harassment law violates the First Amendment" },
      { letter: "C", text: "demonstrate that offensive speech can never be regulated under any circumstances" },
      { letter: "D", text: "argue that equality values are inherently incompatible with constitutional rights" },
      { letter: "E", text: "show that defenders of harassment law reject all free speech principles" }
    ],
    correctAnswer: "A",
    explanation: "The passage presents critics' free speech concerns against defenders' view that harassment law 'regulates discriminatory conduct, including verbal conduct' rather than punishing speech per se, concluding this 'reflects broader conflicts between equality and liberty.' This illustrates the tension between these values, as in choice A.",
    difficulty: "medium",
    passageId: "rc-33-passage-4"
  },
  {
    id: "rc-33-20",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `[Same passage 4 text as above]`,
    questionStem: "The author's attitude toward workplace harassment law can most accurately be described as",
    answerChoices: [
      { letter: "A", text: "unqualified endorsement as perfectly balancing all competing interests" },
      { letter: "B", text: "complete rejection as an illegitimate expansion of antidiscrimination law" },
      { letter: "C", text: "analytical recognition of its role in addressing hostile environments while acknowledging substantial implementation and theoretical challenges" },
      { letter: "D", text: "indifference to whether harassment law effectively protects workers" },
      { letter: "E", text: "certainty that harassment law should be expanded to regulate all offensive speech" }
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges harassment law's importance ('essential to achieving substantive workplace equality'), explains its framework, but emphasizes criticisms about standards, proof, effectiveness, and free speech tensions. This balanced acknowledgment of protective purpose alongside significant challenges characterizes an analytical rather than advocacy stance.",
    difficulty: "medium",
    passageId: "rc-33-passage-4"
  }
];
