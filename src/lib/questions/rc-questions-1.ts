// Reading Comprehension Questions Bank - Set 1
// High-quality LSAT-style RC passages and questions

import { Question } from "../lsat-types";

// PASSAGE 1: Constitutional Law - Freedom of Speech
const passage1 = `The traditional understanding of free speech jurisprudence in the United States holds that the First Amendment protects all speech except for narrow categories such as incitement to imminent lawless action, fighting words, and true threats. This categorical approach, developed over decades of Supreme Court decisions, provides clear guidelines for determining what speech receives constitutional protection. Under this framework, content-based restrictions on protected speech face strict scrutiny and are almost always struck down.

However, the rise of social media has challenged this traditional framework in ways that the framers of the Constitution could never have anticipated. Unlike the town square or even broadcast media, social media platforms create environments where speech can reach millions instantaneously, where the line between private conversation and public broadcast is blurred, and where algorithms can amplify certain messages over others.

Some legal scholars argue that the categorical approach remains adequate to address these challenges. They contend that the principles underlying traditional free speech doctrine—particularly the marketplace of ideas theory—apply equally well to online discourse. Just as in physical spaces, they argue, the remedy for harmful speech is more speech, not enforced silence. These scholars worry that creating new categories of unprotected speech or allowing greater government regulation would set dangerous precedents that could eventually be used to suppress legitimate political dissent.

Other scholars counter that the sheer scale and nature of online discourse requires reconsidering traditional approaches. They point to the documented harms of viral misinformation, coordinated harassment campaigns, and algorithmic radicalization as evidence that the marketplace of ideas may function differently—or not at all—in digital environments. These scholars propose various reforms, from treating large social media platforms as common carriers with limited content moderation powers to creating new categories of harmful but previously protected speech.

A third camp suggests that the focus on government regulation may itself be misguided. They note that the most significant restrictions on online speech come not from the government but from private platform policies. This raises questions about whether constitutional protections focused on government action adequately protect expressive freedom when private actors wield enormous power over public discourse. Some in this camp advocate for extending First Amendment protections against private censorship, while others argue for new legislative frameworks that would govern platform content moderation without running afoul of the First Amendment.`;

const rcQuestions1: Question[] = [
  {
    id: "rc-bank1-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The traditional categorical approach to free speech is no longer viable in the age of social media" },
      { letter: "B", text: "Social media has raised new challenges for free speech jurisprudence, prompting various scholarly proposals for addressing them" },
      { letter: "C", text: "The marketplace of ideas theory has been definitively disproven by the rise of online discourse" },
      { letter: "D", text: "Private social media platforms pose a greater threat to free speech than government censorship" },
      { letter: "E", text: "The Supreme Court needs to create new categories of unprotected speech to address online harms" },
    ],
    correctAnswer: "B",
    explanation: "The passage objectively presents the debate about how social media challenges traditional free speech frameworks, describing multiple scholarly perspectives without clearly endorsing one. It doesn't conclude the traditional approach is dead (A) or that any particular solution is correct (C, D, E).",
    difficulty: "medium",
    passageId: "rc1-p1",
  },
  {
    id: "rc-bank1-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage mentions 'coordinated harassment campaigns' primarily in order to",
    answerChoices: [
      { letter: "A", text: "illustrate harms that some scholars cite as evidence against the adequacy of traditional approaches" },
      { letter: "B", text: "provide an example of speech that should be categorically unprotected" },
      { letter: "C", text: "demonstrate that government regulation of speech is necessary" },
      { letter: "D", text: "support the view that social media platforms should have unlimited content moderation powers" },
      { letter: "E", text: "criticize the scholars who advocate for maintaining the traditional categorical approach" },
    ],
    correctAnswer: "A",
    explanation: "The passage mentions coordinated harassment campaigns as one of the 'documented harms' cited by scholars who believe traditional approaches are inadequate. It's presented as evidence in their argument, not as the author's endorsement of any particular view.",
    difficulty: "medium",
    passageId: "rc1-p1",
  },
  {
    id: "rc-bank1-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, scholars who advocate maintaining the traditional categorical approach would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "Social media platforms function identically to traditional public forums" },
      { letter: "B", text: "Expanding government power to regulate speech creates risks that outweigh potential benefits" },
      { letter: "C", text: "Misinformation on social media is not a serious problem" },
      { letter: "D", text: "The marketplace of ideas theory was developed specifically with digital communication in mind" },
      { letter: "E", text: "Private platform content moderation is always unconstitutional" },
    ],
    correctAnswer: "B",
    explanation: "The passage states these scholars 'worry that creating new categories of unprotected speech or allowing greater government regulation would set dangerous precedents that could eventually be used to suppress legitimate political dissent.' This indicates they see expanding government power as a greater risk than the problems it might address.",
    difficulty: "medium",
    passageId: "rc1-p1",
  },
  {
    id: "rc-bank1-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, which of the following is mentioned as a characteristic that distinguishes social media from earlier communication media?",
    answerChoices: [
      { letter: "A", text: "Social media is more heavily regulated by the government" },
      { letter: "B", text: "Algorithms can selectively amplify certain content" },
      { letter: "C", text: "Social media users are more susceptible to misinformation" },
      { letter: "D", text: "Speech on social media receives less First Amendment protection" },
      { letter: "E", text: "Social media companies face more legal liability for user content" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that social media creates 'environments where...algorithms can amplify certain messages over others.' This is listed as one of several distinguishing characteristics in the second paragraph.",
    difficulty: "easy",
    passageId: "rc1-p1",
  },
  {
    id: "rc-bank1-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate about free speech and social media can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of traditional approaches" },
      { letter: "B", text: "strongly supportive of platform regulation" },
      { letter: "C", text: "neutral and expository" },
      { letter: "D", text: "skeptical that any solution exists" },
      { letter: "E", text: "pessimistic about the future of free speech" },
    ],
    correctAnswer: "C",
    explanation: "The author presents multiple perspectives without clearly endorsing any position. The passage describes what 'some scholars argue,' what 'other scholars counter,' and what 'a third camp suggests' without indicating which view the author favors.",
    difficulty: "medium",
    passageId: "rc1-p1",
  },
];

// PASSAGE 2: Science - Climate Engineering
const passage2 = `Stratospheric aerosol injection (SAI) represents one of the most promising—and controversial—proposals in the field of climate engineering. The basic concept involves introducing reflective particles into the upper atmosphere to scatter incoming sunlight, thereby cooling the planet. This mirrors the natural cooling effect observed after major volcanic eruptions, when sulfur dioxide released into the stratosphere temporarily reduced global temperatures.

Proponents argue that SAI could provide a relatively inexpensive "emergency brake" on climate change while the world transitions to renewable energy sources. Unlike emissions reductions, which take decades to affect global temperatures, SAI could produce cooling effects within months of deployment. Some climate models suggest that even partial implementation could reduce heat-related mortality, slow ice sheet loss, and provide relief for vulnerable ecosystems and populations.

Critics raise several categories of concerns. First, there are significant uncertainties about regional impacts. While SAI might reduce global average temperatures, it could also disrupt precipitation patterns, potentially worsening droughts in some regions while causing floods in others. The sulfate particles could also contribute to ozone depletion, raising concerns about increased ultraviolet radiation reaching Earth's surface.

Second, critics worry about governance challenges. Who would decide when, how much, and where to deploy SAI? A technology that could be implemented relatively cheaply by a single nation or even a wealthy individual raises profound questions about international cooperation and the rights of nations that might be adversely affected. There is no existing international framework adequate to govern such decisions.

Third, and perhaps most fundamentally, critics raise the concern of "moral hazard." If policymakers believe that a technological fix for climate change exists, they may reduce efforts to cut emissions—the only approach that addresses the root cause. SAI would not address ocean acidification from carbon dioxide, and if deployment were ever discontinued, temperatures could rise rapidly, causing severe disruption.

Researchers in the field generally agree that SAI should not be viewed as an alternative to emissions reductions, but potentially as a supplement during the transition period. They advocate for continued research to better understand risks and potential benefits, while also developing governance frameworks before any deployment decisions are made.`;

const rcQuestions2: Question[] = [
  {
    id: "rc-bank1-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following best states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Stratospheric aerosol injection is too risky to be seriously considered as a climate solution" },
      { letter: "B", text: "The debate over stratospheric aerosol injection involves weighing potential benefits against significant concerns about risks and governance" },
      { letter: "C", text: "Climate researchers unanimously support the immediate deployment of stratospheric aerosol injection" },
      { letter: "D", text: "International governance frameworks are the primary obstacle to implementing climate engineering" },
      { letter: "E", text: "Stratospheric aerosol injection should replace efforts to reduce greenhouse gas emissions" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents both the potential benefits (cooling effects, protecting vulnerable populations) and concerns (regional impacts, governance challenges, moral hazard) about SAI. The main point is to describe this debate, not to advocate for a particular position.",
    difficulty: "medium",
    passageId: "rc1-p2",
  },
  {
    id: "rc-bank1-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses volcanic eruptions primarily in order to",
    answerChoices: [
      { letter: "A", text: "warn about the dangers of climate engineering" },
      { letter: "B", text: "explain the natural precedent for the cooling mechanism involved in SAI" },
      { letter: "C", text: "argue that natural climate variations make human intervention unnecessary" },
      { letter: "D", text: "demonstrate that sulfur dioxide emissions are harmful" },
      { letter: "E", text: "contrast natural and artificial climate modification" },
    ],
    correctAnswer: "B",
    explanation: "The reference to volcanic eruptions in the first paragraph provides a natural analogue for SAI's mechanism. It shows that the basic concept 'mirrors the natural cooling effect observed after major volcanic eruptions,' explaining the scientific basis for the technology.",
    difficulty: "easy",
    passageId: "rc1-p2",
  },
  {
    id: "rc-bank1-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which one of the following can be most reasonably inferred about the 'moral hazard' concern?",
    answerChoices: [
      { letter: "A", text: "It is considered the least important objection to SAI" },
      { letter: "B", text: "It relates to the potential effect of SAI on decision-making about emissions reductions" },
      { letter: "C", text: "It applies only to SAI and not to other forms of climate engineering" },
      { letter: "D", text: "It has been definitively resolved by recent research" },
      { letter: "E", text: "It is primarily a concern about the financial costs of SAI" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains the moral hazard concern: 'If policymakers believe that a technological fix for climate change exists, they may reduce efforts to cut emissions.' The concern is that SAI's existence could affect decision-making about the more fundamental solution.",
    difficulty: "medium",
    passageId: "rc1-p2",
  },
  {
    id: "rc-bank1-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, researchers in the field generally advocate for which of the following?",
    answerChoices: [
      { letter: "A", text: "Immediate large-scale deployment of SAI" },
      { letter: "B", text: "Abandoning SAI research entirely" },
      { letter: "C", text: "Continued research and development of governance frameworks before deployment" },
      { letter: "D", text: "Using SAI as a replacement for emissions reductions" },
      { letter: "E", text: "Allowing individual nations to deploy SAI unilaterally" },
    ],
    correctAnswer: "C",
    explanation: "The final paragraph explicitly states that researchers 'advocate for continued research to better understand risks and potential benefits, while also developing governance frameworks before any deployment decisions are made.'",
    difficulty: "easy",
    passageId: "rc1-p2",
  },
  {
    id: "rc-bank1-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage implies that SAI differs from emissions reductions in which of the following ways?",
    answerChoices: [
      { letter: "A", text: "SAI is universally accepted as safe while emissions reductions are controversial" },
      { letter: "B", text: "SAI could produce effects more quickly but does not address the root cause of climate change" },
      { letter: "C", text: "Emissions reductions would be more expensive than SAI" },
      { letter: "D", text: "SAI would address ocean acidification while emissions reductions would not" },
      { letter: "E", text: "Emissions reductions face greater governance challenges than SAI" },
    ],
    correctAnswer: "B",
    explanation: "The passage contrasts SAI's quick effects ('could produce cooling effects within months') with emissions reductions ('take decades to affect global temperatures') while noting that emissions reductions address 'the root cause' and that SAI 'would not address ocean acidification.'",
    difficulty: "medium",
    passageId: "rc1-p2",
  },
];

// PASSAGE 3: Arts - Jazz and Cultural Exchange
const passage3 = `The history of jazz music represents one of the most remarkable examples of cultural synthesis in American history. While jazz is rightfully celebrated as a creation of African American communities in New Orleans and other urban centers, scholars have increasingly recognized the complex web of influences—African, European, Caribbean, and indigenous—that contributed to its development. This more nuanced understanding challenges both older narratives that minimized African contributions and more recent accounts that treat jazz as emerging solely from African American experience.

The rhythmic complexity that distinguishes jazz has clear roots in West African musical traditions that survived, adapted, and evolved through the experience of slavery. Polyrhythmic structures, call-and-response patterns, and the use of blue notes all reflect African musical sensibilities that persisted despite the systematic efforts of slaveholders to suppress African cultural practices. However, these elements combined with European harmonic traditions, instrumentation, and song forms in ways that produced something genuinely new.

The port city of New Orleans, with its unique history and diverse population, provided the crucible for this synthesis. The city's Latin heritage contributed habanera rhythms and musical structures; its French colonial past influenced both instrumentation and musical education; and its Caribbean connections brought additional African-derived musical practices. The relative freedom afforded to Black New Orleanians compared to other Southern cities, including the ability to gather publicly in places like Congo Square, created spaces where these diverse musical traditions could interact.

Recent scholarship has also explored the contributions of Creole musicians to early jazz. Creoles of color in New Orleans often had formal European musical training and occupied an intermediate social position that gave them access to both African American musical practices and European classical traditions. Musicians like Jelly Roll Morton, who famously claimed to have invented jazz, exemplified this cross-cultural fluency, combining ragtime, blues, and classical techniques in unprecedented ways.

Understanding jazz as a product of cultural synthesis rather than a single tradition does not diminish its African American character. Rather, it helps explain how jazz became a vehicle for expressing African American experience while also becoming America's most significant contribution to world music—a contribution that itself has influenced musical traditions around the globe in an ongoing cycle of cultural exchange.`;

const rcQuestions3: Question[] = [
  {
    id: "rc-bank1-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Jazz should not be considered an African American art form" },
      { letter: "B", text: "New Orleans was the only city where jazz could have developed" },
      { letter: "C", text: "Understanding jazz as a product of multiple cultural influences provides a richer picture without diminishing its African American character" },
      { letter: "D", text: "European influences on jazz have been historically underappreciated" },
      { letter: "E", text: "Creole musicians deserve more credit than African Americans for developing jazz" },
    ],
    correctAnswer: "C",
    explanation: "The passage argues for understanding jazz as culturally synthesized while explicitly stating in the final paragraph that this 'does not diminish its African American character.' The main point combines recognition of multiple influences with affirmation of jazz's African American identity.",
    difficulty: "medium",
    passageId: "rc1-p3",
  },
  {
    id: "rc-bank1-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage mentions Congo Square primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that public spaces were more important than private venues in jazz development" },
      { letter: "B", text: "illustrate how New Orleans provided spaces where diverse musical traditions could interact" },
      { letter: "C", text: "criticize other Southern cities for restricting Black cultural practices" },
      { letter: "D", text: "demonstrate that jazz was performed outdoors before moving to indoor venues" },
      { letter: "E", text: "show that African musical practices were completely preserved unchanged" },
    ],
    correctAnswer: "B",
    explanation: "Congo Square is mentioned as an example of how New Orleans' 'relative freedom afforded to Black New Orleanians...created spaces where these diverse musical traditions could interact.' It supports the point about New Orleans providing unique conditions for cultural synthesis.",
    difficulty: "medium",
    passageId: "rc1-p3",
  },
  {
    id: "rc-bank1-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the author would most likely agree with which of the following statements about Creole musicians?",
    answerChoices: [
      { letter: "A", text: "They were more important to jazz's development than African American musicians" },
      { letter: "B", text: "Their unique social position allowed them to bridge European and African American musical traditions" },
      { letter: "C", text: "They rejected African American musical practices in favor of European techniques" },
      { letter: "D", text: "Their contributions to jazz have been exaggerated by scholars" },
      { letter: "E", text: "They were solely responsible for introducing European elements into jazz" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Creoles 'occupied an intermediate social position that gave them access to both African American musical practices and European classical traditions,' exemplifying 'cross-cultural fluency.' This suggests they served as a bridge between traditions.",
    difficulty: "medium",
    passageId: "rc1-p3",
  },
  {
    id: "rc-bank1-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, which of the following contributed to the unique conditions for jazz development in New Orleans?",
    answerChoices: [
      { letter: "A", text: "The absence of European cultural influence" },
      { letter: "B", text: "The city's complete suppression of African musical practices" },
      { letter: "C", text: "The city's Latin heritage and Caribbean connections" },
      { letter: "D", text: "The migration of jazz musicians from other Southern cities" },
      { letter: "E", text: "The lack of formal musical education" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly mentions that 'The city's Latin heritage contributed habanera rhythms' and 'its Caribbean connections brought additional African-derived musical practices' as factors making New Orleans unique.",
    difficulty: "easy",
    passageId: "rc1-p3",
  },
  {
    id: "rc-bank1-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the view that jazz emerged solely from African American experience can best be described as",
    answerChoices: [
      { letter: "A", text: "completely dismissive" },
      { letter: "B", text: "nuanced qualification without rejection of African American centrality" },
      { letter: "C", text: "enthusiastic endorsement" },
      { letter: "D", text: "bewildered confusion" },
      { letter: "E", text: "hostile opposition" },
    ],
    correctAnswer: "B",
    explanation: "The author qualifies the 'solely from African American experience' view by noting multiple influences, but explicitly affirms this 'does not diminish its African American character.' The author's position is nuanced qualification, not rejection.",
    difficulty: "medium",
    passageId: "rc1-p3",
  },
];

// PASSAGE 4: Law - Intellectual Property
const passage4 = `The intersection of artificial intelligence and intellectual property law presents unprecedented challenges that existing legal frameworks were never designed to address. Traditional copyright law is premised on human authorship—the creative act of a natural person expressing original ideas in fixed form. But what happens when an AI system generates text, images, or music that would clearly be copyrightable if created by a human?

Courts and legal scholars have generally agreed that works created entirely by AI systems without meaningful human input cannot be copyrighted under current law. The U.S. Copyright Office has explicitly stated that it will not register works produced by machines without creative human involvement. This leaves AI-generated content in a legal gray zone: potentially valuable creative works that anyone can use without restriction.

For companies developing AI systems, this creates a paradox. The training data used to create these systems—often billions of examples of human-created text, images, and other content—is clearly protected by copyright. Using this copyrighted material to train AI models may itself constitute copyright infringement, particularly when the resulting models can generate outputs that compete with or substitute for the original works. Several major lawsuits currently working through the courts will help establish whether such training use qualifies as fair use.

Meanwhile, the outputs of AI systems can sometimes reproduce substantial portions of copyrighted training data, raising additional infringement concerns. If an AI image generator produces an image substantially similar to a copyrighted photograph in its training set, who bears liability? The user who entered the prompt? The company that created the AI? The question becomes more complex when considering that users may have no way of knowing whether their prompt will trigger infringing output.

Some scholars argue that new legislation is needed to address these novel situations. Proposals include creating a new category of quasi-copyright for AI-generated works, establishing compulsory licensing schemes for AI training data, and creating safe harbors for AI companies that implement content filtering. Others counter that the flexibility of traditional copyright doctrines, particularly fair use, can adequately address most situations without the risks inherent in technology-specific legislation that may quickly become obsolete.`;

const rcQuestions4: Question[] = [
  {
    id: "rc-bank1-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following best expresses the central concern of the passage?",
    answerChoices: [
      { letter: "A", text: "AI systems should be granted the same creative rights as human authors" },
      { letter: "B", text: "Current intellectual property frameworks face significant challenges in addressing AI-related issues involving both inputs and outputs" },
      { letter: "C", text: "The courts have definitively resolved questions about AI and copyright" },
      { letter: "D", text: "New legislation is the only solution to AI copyright problems" },
      { letter: "E", text: "AI companies should be prohibited from using copyrighted training data" },
    ],
    correctAnswer: "B",
    explanation: "The passage explores multiple unresolved challenges: copyrightability of AI outputs, legality of using copyrighted training data, and liability for infringing outputs. The central concern is that existing frameworks weren't designed for these issues and their application remains uncertain.",
    difficulty: "medium",
    passageId: "rc1-p4",
  },
  {
    id: "rc-bank1-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage mentions 'several major lawsuits' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that AI companies have already been found liable for infringement" },
      { letter: "B", text: "indicate that key questions about AI training and fair use remain unresolved" },
      { letter: "C", text: "suggest that litigation is preferable to legislation" },
      { letter: "D", text: "demonstrate that the legal system is incapable of addressing AI issues" },
      { letter: "E", text: "criticize copyright holders for being overly litigious" },
    ],
    correctAnswer: "B",
    explanation: "The lawsuits are mentioned to show that the question of whether AI training constitutes fair use remains unsettled and 'will help establish' the legal standards. The reference emphasizes ongoing uncertainty rather than any resolved position.",
    difficulty: "medium",
    passageId: "rc1-p4",
  },
  {
    id: "rc-bank1-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following best describes the current copyright status of AI-generated works?",
    answerChoices: [
      { letter: "A", text: "They are fully protected by copyright held by the AI company" },
      { letter: "B", text: "They are protected by copyright held by the user who prompted the AI" },
      { letter: "C", text: "They generally cannot be copyrighted under current law, leaving them freely usable" },
      { letter: "D", text: "They are protected by a new category of AI-specific intellectual property" },
      { letter: "E", text: "They are automatically in the public domain after five years" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that works 'created entirely by AI systems without meaningful human input cannot be copyrighted under current law,' leaving them in 'a legal gray zone' that 'anyone can use without restriction.'",
    difficulty: "easy",
    passageId: "rc1-p4",
  },
  {
    id: "rc-bank1-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, which of the following has been explicitly stated by the U.S. Copyright Office?",
    answerChoices: [
      { letter: "A", text: "AI training always constitutes fair use" },
      { letter: "B", text: "AI-generated works are entitled to copyright protection" },
      { letter: "C", text: "It will not register works produced by machines without creative human involvement" },
      { letter: "D", text: "New legislation is needed to address AI copyright issues" },
      { letter: "E", text: "AI companies must pay licensing fees for training data" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states: 'The U.S. Copyright Office has explicitly stated that it will not register works produced by machines without creative human involvement.'",
    difficulty: "easy",
    passageId: "rc1-p4",
  },
  {
    id: "rc-bank1-020",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that some scholars oppose new AI-specific legislation primarily because they believe",
    answerChoices: [
      { letter: "A", text: "AI technology should not be regulated at all" },
      { letter: "B", text: "current legal doctrines have sufficient flexibility to address AI issues and technology-specific laws may become outdated" },
      { letter: "C", text: "the courts should never be involved in intellectual property disputes" },
      { letter: "D", text: "AI-generated content should never be protected" },
      { letter: "E", text: "copyright law should be abolished entirely" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph states that opponents of new legislation argue 'the flexibility of traditional copyright doctrines, particularly fair use, can adequately address most situations without the risks inherent in technology-specific legislation that may quickly become obsolete.'",
    difficulty: "medium",
    passageId: "rc1-p4",
  },
];

export const rcQuestionsSet1: Question[] = [
  ...rcQuestions1,
  ...rcQuestions2,
  ...rcQuestions3,
  ...rcQuestions4,
];
