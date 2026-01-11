// Reading Comprehension Questions - Set 6 (Law: Constitutional Law)
import { Question } from "../lsat-types";

// Passage 1: Fourth Amendment and Digital Privacy
const passage1 = `The Fourth Amendment's protection against unreasonable searches and seizures was crafted in response to colonial-era grievances about general warrants and writs of assistance that allowed British officials to search homes at will. For two centuries, courts interpreted this protection primarily in terms of physical intrusion into constitutionally protected spaces. The question of whether a search had occurred largely depended on whether government agents had physically trespassed on private property.

This framework proved inadequate for the electronic age. In Katz v. United States (1967), the Supreme Court held that Fourth Amendment protection extends to what a person "seeks to preserve as private, even in an area accessible to the public." Justice Harlan's influential concurrence established a two-part test: Fourth Amendment protection applies where an individual exhibits a subjective expectation of privacy that society is prepared to recognize as reasonable. This shift from property-based to privacy-based analysis enabled Fourth Amendment doctrine to address wiretapping, electronic surveillance, and other non-physical intrusions.

However, the Katz framework has struggled with modern technology. The third-party doctrine, established in cases from the 1970s, holds that individuals have no reasonable expectation of privacy in information voluntarily conveyed to third parties. Under this doctrine, bank records, phone numbers dialed, and other information shared with businesses receive no Fourth Amendment protection because sharing implies acceptance of the risk that the third party will reveal the information.

Critics argue that this doctrine, developed when third-party sharing was relatively limited, makes little sense in an era when digital services collect vast quantities of personal information as a condition of participation in modern life. In Carpenter v. United States (2018), the Supreme Court recognized this concern, holding that accessing historical cell-site location information constitutes a search requiring a warrant, despite the fact that this information is technically held by cellular providers. The majority emphasized the "detailed, encyclopedic, and effortlessly compiled" nature of digital records.

Whether Carpenter represents a fundamental reconsideration of the third-party doctrine or merely a narrow exception for particularly sensitive data remains contested. Courts continue to grapple with how constitutional protections developed for a physical world should apply to digital existence.`;

const passage1Questions: Question[] = [
  {
    id: "rc-set6-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following best expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Fourth Amendment is no longer relevant in the digital age" },
      { letter: "B", text: "Fourth Amendment doctrine has evolved from property-based to privacy-based analysis, but applying these protections to digital information remains challenging and contested" },
      { letter: "C", text: "The third-party doctrine has been completely overturned by Carpenter" },
      { letter: "D", text: "Katz v. United States resolved all questions about electronic surveillance" },
      { letter: "E", text: "Physical trespass is still the only basis for Fourth Amendment claims" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution of Fourth Amendment doctrine and highlights ongoing challenges in applying it to digital information, noting that the implications of Carpenter 'remain contested.'",
    difficulty: "medium",
    passageId: "rc6-p1",
  },
  {
    id: "rc-set6-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses colonial-era grievances primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that the Fourth Amendment should be interpreted narrowly" },
      { letter: "B", text: "provide historical context for the Fourth Amendment's original focus on physical intrusion" },
      { letter: "C", text: "criticize the British legal system" },
      { letter: "D", text: "demonstrate that electronic surveillance existed before the Constitution" },
      { letter: "E", text: "explain why the Katz decision was incorrect" },
    ],
    correctAnswer: "B",
    explanation: "The colonial-era grievances are mentioned to explain why 'courts interpreted this protection primarily in terms of physical intrusion'—providing historical context for the original framework.",
    difficulty: "medium",
    passageId: "rc6-p1",
  },
  {
    id: "rc-set6-003",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, Justice Harlan's concurrence in Katz established",
    answerChoices: [
      { letter: "A", text: "the third-party doctrine" },
      { letter: "B", text: "a two-part test for when Fourth Amendment protection applies" },
      { letter: "C", text: "that only physical trespass constitutes a search" },
      { letter: "D", text: "that cell phone location data is protected" },
      { letter: "E", text: "the requirement for all electronic surveillance warrants" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Justice Harlan's influential concurrence established a two-part test' involving subjective expectation of privacy that society recognizes as reasonable.",
    difficulty: "easy",
    passageId: "rc6-p1",
  },
  {
    id: "rc-set6-004",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of the third-party doctrine would most likely argue that",
    answerChoices: [
      { letter: "A", text: "people should never share information with businesses" },
      { letter: "B", text: "the doctrine made sense when developed but is inappropriate given how extensively modern life requires sharing data" },
      { letter: "C", text: "the Fourth Amendment should be repealed" },
      { letter: "D", text: "bank records should receive more protection than cell phone data" },
      { letter: "E", text: "Carpenter was wrongly decided" },
    ],
    correctAnswer: "B",
    explanation: "The passage states critics argue the doctrine 'makes little sense in an era when digital services collect vast quantities of personal information as a condition of participation in modern life.'",
    difficulty: "medium",
    passageId: "rc6-p1",
  },
  {
    id: "rc-set6-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that the Carpenter decision",
    answerChoices: [
      { letter: "A", text: "completely eliminated the third-party doctrine" },
      { letter: "B", text: "may represent either a fundamental shift or a narrow exception, with its broader implications yet to be determined" },
      { letter: "C", text: "was unanimously supported by all legal scholars" },
      { letter: "D", text: "only applies to criminal investigations" },
      { letter: "E", text: "restored the original physical trespass standard" },
    ],
    correctAnswer: "B",
    explanation: "The passage concludes that 'whether Carpenter represents a fundamental reconsideration of the third-party doctrine or merely a narrow exception...remains contested.'",
    difficulty: "medium",
    passageId: "rc6-p1",
  },
];

// Passage 2: Separation of Powers
const passage2 = `The American constitutional system disperses governmental power among three branches precisely to prevent its dangerous concentration. This structural protection, the Framers believed, would safeguard liberty more reliably than mere declarations of rights. As Madison explained in Federalist 51, "Ambition must be made to counteract ambition"—each branch would check the others' overreach through institutional self-interest.

Contemporary constitutional law scholarship has increasingly questioned whether this eighteenth-century framework adequately addresses modern governance. The administrative state, which barely existed at the founding, now exercises powers that defy traditional categorization. Administrative agencies simultaneously make rules (a legislative function), enforce them (an executive function), and adjudicate violations (a judicial function). From one perspective, this represents an unconstitutional amalgamation of powers that the Constitution deliberately separated.

The Supreme Court has approached administrative power with considerable deference. The nondelegation doctrine, which theoretically prohibits Congress from delegating its legislative power, has not been used to strike down a statute since 1935. Courts generally uphold congressional grants of authority to agencies so long as Congress provides an "intelligible principle" to guide agency discretion—a standard so permissive that virtually any delegation satisfies it.

Recently, however, the Court has signaled renewed skepticism toward administrative power. The "major questions doctrine," articulated in West Virginia v. EPA (2022), requires clear congressional authorization for agency actions of vast economic and political significance. Critics see this as judicial invention designed to constrain disfavored regulations; supporters view it as a necessary check on agencies claiming powers Congress never intended to grant.

Underlying these doctrinal debates are deeper questions about democratic accountability. Agencies are staffed by unelected officials who may serve across multiple administrations, potentially implementing policies at odds with electoral outcomes. Defenders argue that agency expertise and insulation from political pressure actually serve democratic values by producing better policy. Skeptics counter that democratic legitimacy requires that those who make binding rules be accountable to voters. These tensions are unlikely to be resolved by any single doctrine or decision.`;

const passage2Questions: Question[] = [
  {
    id: "rc-set6-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "The administrative state should be completely abolished" },
      { letter: "B", text: "The traditional separation of powers framework faces challenges from the modern administrative state, generating ongoing debates about constitutional limits and democratic accountability" },
      { letter: "C", text: "Madison's vision in Federalist 51 has been perfectly realized" },
      { letter: "D", text: "The Supreme Court has consistently restricted administrative agencies" },
      { letter: "E", text: "Congress should never delegate any authority to agencies" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses how the administrative state challenges traditional separation of powers, describes doctrinal debates, and concludes with unresolved questions about democratic accountability.",
    difficulty: "medium",
    passageId: "rc6-p2",
  },
  {
    id: "rc-set6-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage quotes Madison's statement that 'ambition must be made to counteract ambition' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the Framers' naivety" },
      { letter: "B", text: "explain the theory underlying the separation of powers" },
      { letter: "C", text: "argue that modern government is unconstitutional" },
      { letter: "D", text: "support the administrative state's legitimacy" },
      { letter: "E", text: "describe how agencies should operate" },
    ],
    correctAnswer: "B",
    explanation: "The Madison quote illustrates the theory that separation of powers works through institutional self-interest, with 'each branch would check the others' overreach.'",
    difficulty: "easy",
    passageId: "rc6-p2",
  },
  {
    id: "rc-set6-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the nondelegation doctrine has not been used to strike down a statute since",
    answerChoices: [
      { letter: "A", text: "1787" },
      { letter: "B", text: "1935" },
      { letter: "C", text: "2022" },
      { letter: "D", text: "the founding" },
      { letter: "E", text: "West Virginia v. EPA" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the nondelegation doctrine 'has not been used to strike down a statute since 1935.'",
    difficulty: "easy",
    passageId: "rc6-p2",
  },
  {
    id: "rc-set6-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, supporters of the major questions doctrine would most likely view it as",
    answerChoices: [
      { letter: "A", text: "an unconstitutional judicial power grab" },
      { letter: "B", text: "a necessary limit on agencies acting beyond their congressionally authorized powers" },
      { letter: "C", text: "irrelevant to modern governance" },
      { letter: "D", text: "too permissive toward agency authority" },
      { letter: "E", text: "a restoration of the Framers' original intent" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that supporters 'view it as a necessary check on agencies claiming powers Congress never intended to grant.'",
    difficulty: "medium",
    passageId: "rc6-p2",
  },
  {
    id: "rc-set6-010",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the debate about administrative agencies and democratic accountability can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of concerns about accountability" },
      { letter: "B", text: "strongly favoring agency power" },
      { letter: "C", text: "presenting both perspectives without clearly endorsing either" },
      { letter: "D", text: "hostile to all administrative agencies" },
      { letter: "E", text: "confused about the relevant issues" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents arguments from both 'defenders' and 'skeptics' of administrative power and concludes that 'these tensions are unlikely to be resolved,' indicating a balanced presentation.",
    difficulty: "medium",
    passageId: "rc6-p2",
  },
];

// Passage 3: International Human Rights Law
const passage3 = `The modern international human rights system emerged from the ashes of World War II, with the Universal Declaration of Human Rights (1948) articulating fundamental rights belonging to all persons regardless of nationality. Subsequent treaties—the International Covenant on Civil and Political Rights, the International Covenant on Economic, Social and Cultural Rights, and various regional and specialized conventions—created binding legal obligations and, in some cases, enforcement mechanisms.

The theoretical foundation of international human rights law remains contested. Some scholars ground human rights in natural law traditions, arguing that certain rights are inherent in human dignity and exist independently of any state's recognition. Others adopt positivist approaches, viewing human rights as created by international agreement and deriving their authority from state consent. Still others emphasize human rights as political tools whose meaning is constructed through advocacy and contestation.

These theoretical differences matter practically. If human rights are universal and pre-political, then cultural variation cannot justify their violation; practices like female genital cutting or child marriage are simply wrong regardless of local tradition. If human rights emerge from consensus, then the charge of cultural imperialism—imposing Western values under the guise of universal norms—carries more weight. Some scholars attempt to navigate this tension by distinguishing between a universal core of rights (protecting against torture, arbitrary execution, and slavery) and a larger penumbra where cultural variation may legitimately affect implementation.

Enforcement presents even greater challenges than theory. International tribunals can adjudicate complaints, but their jurisdiction typically requires state consent, and their judgments depend on voluntary compliance or political pressure rather than coercive enforcement. Regional systems like the European Court of Human Rights have achieved substantial compliance within their jurisdictions, but many states—including some of the worst human rights violators—remain outside effective international oversight.

The gap between human rights aspiration and reality has prompted diverse responses. Some advocate strengthening international institutions; others emphasize domestic incorporation of human rights norms; still others argue that naming and shaming through publicity and advocacy can produce gradual improvements even without formal enforcement. The project of universal human rights remains, as it has been from its inception, a work in progress.`;

const passage3Questions: Question[] = [
  {
    id: "rc-set6-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "International human rights law is completely ineffective" },
      { letter: "B", text: "International human rights law involves contested theoretical foundations and enforcement challenges, with ongoing debates about how to close the gap between aspiration and reality" },
      { letter: "C", text: "The natural law foundation for human rights has been definitively established" },
      { letter: "D", text: "Cultural relativism should be rejected entirely" },
      { letter: "E", text: "The European Court of Human Rights provides a model for global enforcement" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses theoretical debates, enforcement challenges, and various responses to the 'gap between human rights aspiration and reality,' describing the project as 'a work in progress.'",
    difficulty: "medium",
    passageId: "rc6-p3",
  },
  {
    id: "rc-set6-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses female genital cutting primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that all cultural practices should be respected" },
      { letter: "B", text: "illustrate how theoretical assumptions about human rights affect practical conclusions" },
      { letter: "C", text: "demonstrate the success of human rights enforcement" },
      { letter: "D", text: "criticize Western human rights scholars" },
      { letter: "E", text: "explain the origin of the Universal Declaration" },
    ],
    correctAnswer: "B",
    explanation: "The example illustrates how different theoretical foundations (universal vs. consensual) lead to different conclusions about whether cultural practices can justify rights violations.",
    difficulty: "medium",
    passageId: "rc6-p3",
  },
  {
    id: "rc-set6-013",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, international tribunal judgments typically depend on",
    answerChoices: [
      { letter: "A", text: "military enforcement by the United Nations" },
      { letter: "B", text: "voluntary compliance or political pressure" },
      { letter: "C", text: "automatic implementation by all states" },
      { letter: "D", text: "constitutional incorporation" },
      { letter: "E", text: "regional court review" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that tribunal 'judgments depend on voluntary compliance or political pressure rather than coercive enforcement.'",
    difficulty: "easy",
    passageId: "rc6-p3",
  },
  {
    id: "rc-set6-014",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, scholars who adopt positivist approaches to human rights would most likely",
    answerChoices: [
      { letter: "A", text: "view human rights as deriving authority from state consent rather than inherent dignity" },
      { letter: "B", text: "reject all international human rights treaties" },
      { letter: "C", text: "deny that cultural imperialism is a valid concern" },
      { letter: "D", text: "support military intervention to enforce human rights" },
      { letter: "E", text: "argue that torture is sometimes acceptable" },
    ],
    correctAnswer: "A",
    explanation: "The passage describes positivist approaches as 'viewing human rights as created by international agreement and deriving their authority from state consent.'",
    difficulty: "medium",
    passageId: "rc6-p3",
  },
  {
    id: "rc-set6-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that 'naming and shaming' is proposed as a strategy because",
    answerChoices: [
      { letter: "A", text: "it has proven more effective than formal enforcement" },
      { letter: "B", text: "formal enforcement mechanisms are often unavailable or ineffective" },
      { letter: "C", text: "international tribunals have requested this approach" },
      { letter: "D", text: "human rights violations are rare" },
      { letter: "E", text: "states prefer public criticism to court judgments" },
    ],
    correctAnswer: "B",
    explanation: "Naming and shaming is presented as one response to the enforcement gap, with the passage noting that 'many states...remain outside effective international oversight.'",
    difficulty: "medium",
    passageId: "rc6-p3",
  },
];

// Passage 4: Criminal Justice Reform
const passage4 = `Mass incarceration in the United States represents a relatively recent historical phenomenon. Between 1970 and 2010, the prison population grew from approximately 300,000 to over 2.3 million—an increase far exceeding population growth or changes in crime rates. The United States now incarcerates a higher proportion of its population than any other developed nation, with pronounced racial disparities: Black Americans are imprisoned at more than five times the rate of white Americans.

Scholars debate the causes of this transformation. Some emphasize the War on Drugs, which introduced mandatory minimum sentences and dramatically increased imprisonment for drug offenses. Others point to the abolition of parole in many jurisdictions and the adoption of determinate sentencing schemes that limited judicial discretion. Still others highlight the role of private prisons, prosecutorial incentives, and political dynamics that rewarded "tough on crime" rhetoric while punishing any appearance of leniency.

The consequences extend far beyond those directly imprisoned. Collateral consequences of conviction—including disenfranchisement, exclusion from public housing, ineligibility for educational loans, and employment discrimination—create lasting barriers to reintegration. Children of incarcerated parents face elevated risks of behavioral problems, academic difficulties, and eventual incarceration themselves. Communities with high incarceration rates experience destabilization of social networks, reduced employment, and weakened civic institutions.

Reform efforts have proceeded on multiple fronts. Sentencing reform initiatives have reduced or eliminated mandatory minimums for nonviolent offenses in many jurisdictions. Prosecutors' offices in some cities have adopted policies declining to charge certain low-level offenses. The First Step Act (2018) reduced federal sentences for some drug offenses and expanded early-release programs. These reforms have modestly reduced prison populations while crime rates have continued their long-term decline.

Critics argue that incremental reforms fail to address the fundamental structure of the carceral state. They advocate for more radical approaches including prison abolition, substantial decriminalization, and investment in community-based alternatives to incarceration. Others caution that rapid decarceration could increase crime or shift burdens to other institutions. The debate over criminal justice reform thus encompasses not just policy details but fundamental questions about punishment, public safety, and social justice.`;

const passage4Questions: Question[] = [
  {
    id: "rc-set6-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central point of the passage?",
    answerChoices: [
      { letter: "A", text: "Mass incarceration has been completely solved by recent reforms" },
      { letter: "B", text: "Mass incarceration is a recent phenomenon with multiple causes and far-reaching consequences, prompting reform efforts that range from incremental to radical" },
      { letter: "C", text: "The War on Drugs is solely responsible for mass incarceration" },
      { letter: "D", text: "Prison abolition is the only effective reform strategy" },
      { letter: "E", text: "Crime rates have increased due to reform efforts" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the growth of mass incarceration, debates multiple causes, discusses extensive consequences, and presents a range of reform approaches from incremental to radical.",
    difficulty: "medium",
    passageId: "rc6-p4",
  },
  {
    id: "rc-set6-017",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the U.S. prison population between 1970 and 2010",
    answerChoices: [
      { letter: "A", text: "decreased by half" },
      { letter: "B", text: "remained stable" },
      { letter: "C", text: "grew from approximately 300,000 to over 2.3 million" },
      { letter: "D", text: "matched population growth exactly" },
      { letter: "E", text: "was lower than other developed nations" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'between 1970 and 2010, the prison population grew from approximately 300,000 to over 2.3 million.'",
    difficulty: "easy",
    passageId: "rc6-p4",
  },
  {
    id: "rc-set6-018",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses collateral consequences of conviction primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that prison sentences should be longer" },
      { letter: "B", text: "demonstrate that the effects of mass incarceration extend beyond imprisonment itself" },
      { letter: "C", text: "criticize employers who conduct background checks" },
      { letter: "D", text: "explain why crime rates have increased" },
      { letter: "E", text: "defend the current criminal justice system" },
    ],
    correctAnswer: "B",
    explanation: "The collateral consequences section begins by noting that 'the consequences extend far beyond those directly imprisoned,' illustrating the broader social impact.",
    difficulty: "medium",
    passageId: "rc6-p4",
  },
  {
    id: "rc-set6-019",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, critics of incremental reforms would most likely argue that",
    answerChoices: [
      { letter: "A", text: "reforms have been too radical" },
      { letter: "B", text: "such reforms do not adequately address fundamental structural issues" },
      { letter: "C", text: "mandatory minimums should be restored" },
      { letter: "D", text: "crime rates prove reforms are working" },
      { letter: "E", text: "private prisons are the only solution" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics 'argue that incremental reforms fail to address the fundamental structure of the carceral state' and advocate for more radical approaches.",
    difficulty: "medium",
    passageId: "rc6-p4",
  },
  {
    id: "rc-set6-020",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage implies that recent reform efforts have",
    answerChoices: [
      { letter: "A", text: "eliminated racial disparities in incarceration" },
      { letter: "B", text: "modestly reduced prison populations without increasing crime" },
      { letter: "C", text: "been universally supported by scholars" },
      { letter: "D", text: "increased mandatory minimum sentences" },
      { letter: "E", text: "focused primarily on violent offenses" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that reforms 'have modestly reduced prison populations while crime rates have continued their long-term decline.'",
    difficulty: "medium",
    passageId: "rc6-p4",
  },
];

export const rcQuestionsSet6: Question[] = [
  ...passage1Questions,
  ...passage2Questions,
  ...passage3Questions,
  ...passage4Questions,
];
