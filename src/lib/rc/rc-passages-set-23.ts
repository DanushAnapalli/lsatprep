// Reading Comprehension Expansion Set 23
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - QUALIFIED IMMUNITY
// ============================================

const passage1 = `Qualified immunity, a judicially created doctrine that shields government officials from civil liability for constitutional violations, has become one of the most contested issues in American law. The doctrine originated in 1967 when the Supreme Court held that police officers could not be sued for arrests made in good faith, even if those arrests later proved unconstitutional. Since then, qualified immunity has expanded to protect all government officials performing discretionary functions, creating a formidable barrier for plaintiffs seeking to hold officials accountable for misconduct.

The modern test for qualified immunity, established in Harlow v. Fitzgerald (1982), asks whether the official violated "clearly established" constitutional rights. This standard demands not merely that the Constitution was violated but that existing precedent made the violation's unconstitutionality unmistakably clear. Courts have interpreted this requirement narrowly, often granting immunity unless a prior case involved nearly identical facts. As a result, officials may escape liability for egregious conduct simply because no previous court had confronted that precise scenario, effectively requiring plaintiffs to demonstrate that earlier courts had specifically prohibited each particular form of misconduct.

Defenders of qualified immunity argue that it serves essential purposes. Without such protection, they contend, competent individuals would decline public service, fearing personal financial ruin from inevitable lawsuits. Government officials must make rapid decisions under pressure, and second-guessing those decisions through hindsight could paralyze effective administration. Moreover, the doctrine encourages officers to focus on their duties rather than defensive calculations about potential liability. The "clearly established" standard, proponents maintain, strikes an appropriate balance by permitting suits when violations are unambiguous while protecting officials from liability for reasonable mistakes about unsettled law.

Critics counter that qualified immunity has evolved into near-absolute immunity, insulating even flagrant constitutional violations from judicial remedy. The doctrine, they argue, creates a vicious cycle: because courts frequently resolve cases on immunity grounds without reaching the merits, new constitutional violations are never clearly established, which then shields future misconduct. Civil rights scholars note that this effectively denies victims access to courts while removing incentives for governmental accountability. Critics further observe that the doctrine's historical foundations are questionable, as nineteenth-century officials faced liability under common-law tort principles that modern immunity doctrine has largely displaced.

The qualified immunity debate has intensified following high-profile incidents of police violence, prompting calls for legislative reform. Some proposals would eliminate qualified immunity entirely, returning to common-law standards that held officials liable unless they acted in good faith. Others would modify the "clearly established" test, perhaps requiring only that reasonable officials should have known their conduct violated constitutional principles. Congress has authority to abrogate qualified immunity, though doing so would represent a significant policy shift with implications for law enforcement, municipal budgets, and constitutional accountability.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp23-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Qualified immunity should be immediately abolished because it protects all forms of police misconduct without exception." },
      { letter: "B", text: "Qualified immunity, a contested judicial doctrine shielding officials from liability for constitutional violations, has been defended as necessary for effective governance but criticized as providing near-absolute immunity that undermines accountability." },
      { letter: "C", text: "The Supreme Court created qualified immunity in 1982 to protect only police officers from lawsuits arising from good-faith mistakes." },
      { letter: "D", text: "Constitutional rights cannot be vindicated in court because qualified immunity prevents all litigation against government officials." },
      { letter: "E", text: "Historical common-law principles never provided any protection for government officials facing civil liability." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the origins and development of qualified immunity, presents arguments from both defenders and critics, and discusses reform proposals. Answer B accurately captures this balanced treatment of a contested doctrine, including both the defense (necessary for governance) and criticism (undermines accountability). Answer A is too extreme. Answer C misattributes the doctrine's origins and scope. Answer D overstates the barrier. Answer E contradicts the passage's discussion of common-law protections.",
    difficulty: "medium",
    passageId: "rc-exp23-p1",
  },
  {
    id: "rc-exp23-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the 'clearly established' standard requires plaintiffs to demonstrate that",
    answerChoices: [
      { letter: "A", text: "the official acted with malicious intent to violate constitutional rights" },
      { letter: "B", text: "prior case law made the unconstitutionality of the official's conduct unmistakably apparent" },
      { letter: "C", text: "the government agency failed to provide adequate training to officials" },
      { letter: "D", text: "the official admitted to knowingly violating the Constitution" },
      { letter: "E", text: "no other legal remedy was available before filing suit" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the 'clearly established' standard 'demands not merely that the Constitution was violated but that existing precedent made the violation's unconstitutionality unmistakably clear.' This matches answer B precisely. The other answers introduce requirements not mentioned in the passage's discussion of this standard.",
    difficulty: "easy",
    passageId: "rc-exp23-p1",
  },
  {
    id: "rc-exp23-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of qualified immunity would most likely agree that",
    answerChoices: [
      { letter: "A", text: "government officials should never face any form of civil liability for on-duty conduct" },
      { letter: "B", text: "the doctrine has made it excessively difficult for plaintiffs to obtain remedies for constitutional violations" },
      { letter: "C", text: "municipal budgets are the most important consideration in immunity determinations" },
      { letter: "D", text: "courts should always reach the constitutional merits before addressing immunity" },
      { letter: "E", text: "the historical foundations of qualified immunity are well-established and unassailable" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics argue qualified immunity 'has evolved into near-absolute immunity, insulating even flagrant constitutional violations from judicial remedy' and 'effectively denies victims access to courts.' This strongly supports answer B. Answer A contradicts critics' position. Answer C reflects defenders' concerns. Answer D, while potentially desirable to critics, is not explicitly attributed to them. Answer E directly contradicts the critics' view that the doctrine's historical foundations are 'questionable.'",
    difficulty: "medium",
    passageId: "rc-exp23-p1",
  },
  {
    id: "rc-exp23-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions that courts often resolve cases on immunity grounds without reaching the merits primarily in order to",
    answerChoices: [
      { letter: "A", text: "praise courts for their efficient case management practices" },
      { letter: "B", text: "explain how the doctrine creates a self-reinforcing cycle that prevents new precedents from being established" },
      { letter: "C", text: "argue that constitutional law should be simplified for easier judicial application" },
      { letter: "D", text: "defend the judiciary's reluctance to expand constitutional protections" },
      { letter: "E", text: "suggest that plaintiffs' attorneys are insufficiently skilled in constitutional litigation" },
    ],
    correctAnswer: "B",
    explanation: "This point appears in the critics' paragraph, where the passage explains that because 'courts frequently resolve cases on immunity grounds without reaching the merits, new constitutional violations are never clearly established, which then shields future misconduct.' This describes the 'vicious cycle' critics identify. The author is presenting the critics' argument about how the doctrine becomes self-perpetuating, not praising courts or criticizing attorneys.",
    difficulty: "medium",
    passageId: "rc-exp23-p1",
  },
  {
    id: "rc-exp23-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the qualified immunity debate can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly partisan in favor of eliminating qualified immunity entirely" },
      { letter: "B", text: "dismissive of the concerns raised by civil rights scholars" },
      { letter: "C", text: "analytically neutral, presenting arguments from multiple perspectives without advocating for a particular resolution" },
      { letter: "D", text: "nostalgic for the pre-1967 legal framework governing official liability" },
      { letter: "E", text: "confident that Congress will soon reform the doctrine" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents defenders' arguments (paragraphs on essential purposes, protecting good-faith decisions) and critics' arguments (near-absolute immunity, vicious cycle, questionable foundations) without clearly endorsing either position. The final paragraph discusses reform proposals neutrally. This balanced treatment supports answer C. The author does not advocate elimination (A), dismiss civil rights concerns (B), express nostalgia (D), or predict congressional action (E).",
    difficulty: "medium",
    passageId: "rc-exp23-p1",
  },
  {
    id: "rc-exp23-006",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which one of the following scenarios would most likely result in a court granting qualified immunity to a government official?",
    answerChoices: [
      { letter: "A", text: "An official knowingly violates a constitutional right that has been clearly established by numerous prior court decisions." },
      { letter: "B", text: "An official engages in conduct that violates the Constitution, but no prior case has addressed that specific type of misconduct." },
      { letter: "C", text: "An official acts with documented malice toward the plaintiff while violating a clearly established right." },
      { letter: "D", text: "An official's conduct exactly matches a pattern previously held unconstitutional by the Supreme Court." },
      { letter: "E", text: "A plaintiff provides overwhelming evidence that the official's conduct was objectively unreasonable." },
    ],
    correctAnswer: "B",
    explanation: "The passage emphasizes that courts 'often grant[] immunity unless a prior case involved nearly identical facts' and that 'officials may escape liability for egregious conduct simply because no previous court had confronted that precise scenario.' Answer B describes exactly this situation. Answers A, C, and D describe circumstances where immunity would likely be denied because the violation is clearly established. Answer E focuses on reasonableness, which alone is insufficient to overcome immunity without a clearly established precedent.",
    difficulty: "hard",
    passageId: "rc-exp23-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - SLEEP AND CIRCADIAN RHYTHMS
// ============================================

const passage2 = `Sleep remains one of neuroscience's most profound mysteries. Although humans spend approximately one-third of their lives asleep, the fundamental biological purposes of sleep are only now being elucidated. Research increasingly suggests that sleep serves multiple essential functions: consolidating memories, clearing metabolic waste from the brain, regulating hormones, and maintaining immune function. The costs of sleep deprivation—impaired cognition, weakened immunity, and increased mortality risk—underscore sleep's biological necessity, even if its evolutionary origins remain debated.

The circadian rhythm, an approximately twenty-four-hour cycle governing physiological processes, orchestrates the timing of sleep and wakefulness. This internal clock, located in the suprachiasmatic nucleus (SCN) of the hypothalamus, synchronizes bodily functions to environmental light-dark cycles through a sophisticated molecular feedback loop. Clock genes produce proteins that accumulate during the day and suppress their own production at night, creating an oscillating pattern that persists even in the absence of external time cues. When this rhythm is disrupted—by jet lag, shift work, or artificial lighting—the consequences extend far beyond fatigue to include metabolic disorders, cardiovascular disease, and impaired cognitive function.

The relationship between sleep stages and cognitive function has become a major research focus. Sleep comprises distinct stages: light sleep, deep slow-wave sleep, and rapid eye movement (REM) sleep, characterized by vivid dreams and muscle paralysis. Each stage appears to serve different purposes. Slow-wave sleep seems particularly important for consolidating declarative memories—facts and events—while REM sleep may be essential for procedural learning and emotional processing. Studies using targeted memory reactivation during sleep have demonstrated that reintroducing learning-associated cues during specific sleep stages can enhance memory consolidation, suggesting active processing rather than passive rest.

A remarkable recent discovery concerns the brain's waste clearance system. During sleep, cerebrospinal fluid flows through the brain's glymphatic system, removing metabolic byproducts including beta-amyloid proteins associated with Alzheimer's disease. This clearance occurs primarily during deep sleep when the brain's interstitial spaces expand by approximately sixty percent. The finding suggests that chronic sleep deprivation might contribute to neurodegenerative disease by preventing adequate waste removal, potentially explaining the long-observed correlation between poor sleep and dementia risk.

Modern society's relationship with sleep has become increasingly problematic. Artificial lighting, electronic devices, and demanding work schedules have disrupted natural sleep patterns on an unprecedented scale. Epidemiological studies indicate that average sleep duration has declined significantly over the past century, with consequences that researchers are only beginning to understand. Some scientists advocate for treating sleep as a public health priority, arguing that interventions promoting healthy sleep could address multiple chronic diseases simultaneously. The growing recognition of sleep's importance has prompted calls for restructuring school start times, work schedules, and lighting environments to better align with human circadian biology.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp23-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Sleep is a relatively unimportant biological function that modern society can safely minimize without significant consequences." },
      { letter: "B", text: "Scientific research has revealed that sleep serves multiple essential biological functions, governed by circadian rhythms, but modern lifestyles increasingly disrupt these processes with potentially serious health consequences." },
      { letter: "C", text: "The glymphatic system's discovery has completely solved the mystery of why humans need sleep." },
      { letter: "D", text: "REM sleep is the only sleep stage that matters for human health and cognitive function." },
      { letter: "E", text: "Jet lag is the primary cause of all sleep-related health problems in modern society." },
    ],
    correctAnswer: "B",
    explanation: "The passage systematically examines sleep's biological necessity, circadian rhythm regulation, different sleep stages and their functions, the glymphatic waste clearance system, and modern society's problematic relationship with sleep. Answer B captures this comprehensive treatment. Answer A contradicts the entire passage. Answers C, D, and E grossly oversimplify or misrepresent the passage's nuanced discussion.",
    difficulty: "medium",
    passageId: "rc-exp23-p2",
  },
  {
    id: "rc-exp23-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the suprachiasmatic nucleus (SCN) functions primarily to",
    answerChoices: [
      { letter: "A", text: "produce cerebrospinal fluid for waste clearance during sleep" },
      { letter: "B", text: "synchronize bodily functions to environmental light-dark cycles" },
      { letter: "C", text: "generate the vivid dreams that characterize REM sleep" },
      { letter: "D", text: "regulate the production of beta-amyloid proteins in the brain" },
      { letter: "E", text: "control muscle paralysis during the deepest stages of sleep" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that the circadian clock is 'located in the suprachiasmatic nucleus (SCN) of the hypothalamus' and that it 'synchronizes bodily functions to environmental light-dark cycles through a sophisticated molecular feedback loop.' This matches answer B precisely. The other functions are attributed to different systems or processes in the passage.",
    difficulty: "easy",
    passageId: "rc-exp23-p2",
  },
  {
    id: "rc-exp23-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, it can be inferred that targeted memory reactivation studies suggest that",
    answerChoices: [
      { letter: "A", text: "sleep is merely a passive period of physical rest without cognitive activity" },
      { letter: "B", text: "memory consolidation during sleep involves active processing that can be influenced by external cues" },
      { letter: "C", text: "learning cannot occur during waking hours and must wait until sleep" },
      { letter: "D", text: "all memories are equally strengthened regardless of which sleep stage they are reactivated during" },
      { letter: "E", text: "sleep deprivation has no effect on memory formation or retention" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that studies using 'targeted memory reactivation during sleep have demonstrated that reintroducing learning-associated cues during specific sleep stages can enhance memory consolidation, suggesting active processing rather than passive rest.' This directly supports answer B and explicitly contradicts answer A. Answers C, D, and E contradict or are not supported by the passage.",
    difficulty: "medium",
    passageId: "rc-exp23-p2",
  },
  {
    id: "rc-exp23-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author discusses the expansion of the brain's interstitial spaces during deep sleep primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that deep sleep is less important than REM sleep for overall health" },
      { letter: "B", text: "explain the mechanism by which the glymphatic system clears metabolic waste from the brain" },
      { letter: "C", text: "challenge the validity of research linking poor sleep to dementia risk" },
      { letter: "D", text: "suggest that the circadian rhythm is controlled by physical changes in brain structure" },
      { letter: "E", text: "demonstrate that artificial lighting has no effect on sleep quality" },
    ],
    correctAnswer: "B",
    explanation: "The passage mentions that 'This clearance occurs primarily during deep sleep when the brain's interstitial spaces expand by approximately sixty percent.' This detail explains how the glymphatic system operates effectively during deep sleep, supporting answer B. The author uses this point to strengthen, not challenge, the sleep-dementia connection. It is unrelated to REM comparisons, circadian control, or artificial lighting.",
    difficulty: "medium",
    passageId: "rc-exp23-p2",
  },
  {
    id: "rc-exp23-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward treating sleep as a public health priority is best described as",
    answerChoices: [
      { letter: "A", text: "skeptical, viewing such proposals as exaggerated responses to minor concerns" },
      { letter: "B", text: "sympathetic, presenting scientific evidence that supports such an approach" },
      { letter: "C", text: "indifferent, showing no interest in the practical implications of sleep research" },
      { letter: "D", text: "hostile, arguing that individual responsibility should govern sleep habits" },
      { letter: "E", text: "confused, unable to evaluate the merits of competing claims about sleep's importance" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents substantial scientific evidence for sleep's importance, discusses negative consequences of sleep disruption, and notes that 'Some scientists advocate for treating sleep as a public health priority' with supporting reasoning. The author's overall presentation of evidence and the final paragraph's discussion of 'growing recognition of sleep's importance' and calls for restructuring schedules suggest sympathy with this view, supporting answer B.",
    difficulty: "medium",
    passageId: "rc-exp23-p2",
  },
  {
    id: "rc-exp23-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the author's claim about the relationship between chronic sleep deprivation and neurodegenerative disease?",
    answerChoices: [
      { letter: "A", text: "A longitudinal study finds that individuals who consistently slept fewer than six hours nightly developed significantly higher levels of beta-amyloid accumulation over a ten-year period." },
      { letter: "B", text: "Research shows that some people function normally on only four hours of sleep per night." },
      { letter: "C", text: "Scientists discover that beta-amyloid proteins serve important protective functions in the brain." },
      { letter: "D", text: "A study finds no correlation between sleep duration and cognitive function in elderly populations." },
      { letter: "E", text: "Evidence emerges that the glymphatic system operates equally well during waking hours and sleep." },
    ],
    correctAnswer: "A",
    explanation: "The passage suggests that 'chronic sleep deprivation might contribute to neurodegenerative disease by preventing adequate waste removal' of beta-amyloid proteins. Answer A directly supports this hypothesis by showing a causal link between reduced sleep and increased beta-amyloid accumulation. Answers B, C, D, and E would either weaken the claim or be irrelevant to it.",
    difficulty: "hard",
    passageId: "rc-exp23-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - MINIMALISM IN MUSIC
// ============================================

const passage3 = `Minimalism emerged in the 1960s as a radical challenge to the complexity and expressionism that had dominated Western art music since the early twentieth century. Composers like Steve Reich, Philip Glass, Terry Riley, and La Monte Young rejected the dense, rapidly changing textures of serialism and the emotional intensity of romanticism in favor of music built from simple, repeating patterns that evolved gradually over extended durations. This aesthetic of reduction and repetition initially scandalized the classical music establishment, which dismissed minimalism as simplistic, hypnotic, or insufficiently "serious." Yet minimalism's influence has proved enduring, reshaping not only concert music but also popular music, film scoring, and the broader cultural understanding of what music can be.

Steve Reich's early works exemplify minimalism's core techniques and their surprising psychological effects. In "It's Gonna Rain" (1965) and "Come Out" (1966), Reich used tape loops of spoken phrases that gradually shift out of phase with each other, creating complex rhythmic patterns from simple materials. His acoustic works, such as "Music for 18 Musicians" (1976), apply similar principles to live performers, with interlocking patterns creating shimmering textures that seem to breathe and pulse. Reich drew inspiration from non-Western music, particularly Ghanaian drumming and Balinese gamelan, finding in these traditions alternatives to European harmonic development. His music rewards sustained attention, revealing new patterns and relationships as listeners attune to its subtle variations.

Philip Glass developed a distinctive approach emphasizing additive processes and arpeggiated figures. Works like "Music in Twelve Parts" (1974) build complex textures through systematic addition and subtraction of notes from repeated patterns. Glass's collaboration with theater director Robert Wilson on the opera "Einstein on the Beach" (1976) brought minimalism to a theatrical context, using repetition and gradual transformation to create a hypnotic five-hour meditation on Einstein's life and ideas. Unlike traditional opera, "Einstein" lacks a conventional narrative, instead presenting tableaux that audiences experience almost meditatively. Glass subsequently composed more accessible works, including film scores for "Koyaanisqatsi" (1982) and numerous Hollywood productions, demonstrating minimalism's capacity to reach broad audiences.

Critics of minimalism have raised both aesthetic and political objections. Musicologist Susan McClary characterized early minimalism as a masculine rejection of emotion and expression, while others have questioned whether the appropriation of African and Asian musical elements constitutes a form of cultural exploitation. Some critics argue that minimalism's embrace by commercial interests—in advertising, retail spaces, and "ambient" applications—has rendered it complicit in capitalist manipulation, using repetitive patterns to induce consumer receptivity. These critiques, while contested, have prompted ongoing reflection about the cultural politics of musical style.

The legacy of minimalism extends well beyond its original practitioners. Contemporary composers like John Adams, Michael Nyman, and Arvo Part have synthesized minimalist techniques with other traditions, creating hybrid styles that retain minimalism's clarity while reintroducing harmonic complexity and emotional expression. Perhaps more significantly, minimalism influenced electronic dance music, ambient music, and post-rock, demonstrating that its principles resonate across genre boundaries. What began as an avant-garde provocation has become, ironically, a ubiquitous presence in contemporary sonic environments.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp23-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Minimalism was a brief movement in the 1960s that had little lasting influence on music or culture." },
      { letter: "B", text: "Minimalism emerged as a radical challenge to musical complexity, developed distinctive techniques through composers like Reich and Glass, faced significant criticism, yet proved highly influential across musical genres." },
      { letter: "C", text: "Steve Reich is universally considered the most important composer of the twentieth century." },
      { letter: "D", text: "The political criticisms of minimalism have been thoroughly refuted by contemporary scholars." },
      { letter: "E", text: "Minimalism is aesthetically superior to all other forms of Western art music." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces minimalism's emergence and aesthetic principles, examines Reich and Glass as exemplary composers, presents critical objections, and discusses the movement's broad influence. Answer B captures this comprehensive treatment. Answer A contradicts the passage's emphasis on minimalism's enduring influence. Answers C and E make evaluative claims the passage does not support. Answer D misrepresents the passage's balanced presentation of criticism.",
    difficulty: "medium",
    passageId: "rc-exp23-p3",
  },
  {
    id: "rc-exp23-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Steve Reich's early tape works achieved their effects by",
    answerChoices: [
      { letter: "A", text: "using electronic synthesizers to generate entirely new sounds" },
      { letter: "B", text: "employing traditional European harmonic progressions in novel ways" },
      { letter: "C", text: "using tape loops of spoken phrases that gradually shift out of phase with each other" },
      { letter: "D", text: "incorporating live performers playing traditional classical instruments" },
      { letter: "E", text: "applying serialist compositional techniques to recorded material" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that in Reich's early works like 'It's Gonna Rain' and 'Come Out,' he 'used tape loops of spoken phrases that gradually shift out of phase with each other, creating complex rhythmic patterns from simple materials.' This matches answer C precisely. The passage describes acoustic works with live performers as coming later, and specifically notes Reich's departure from European traditions.",
    difficulty: "easy",
    passageId: "rc-exp23-p3",
  },
  {
    id: "rc-exp23-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the classical music establishment's initial reaction to minimalism can best be characterized as",
    answerChoices: [
      { letter: "A", text: "immediately enthusiastic and supportive" },
      { letter: "B", text: "dismissive, viewing it as insufficiently sophisticated" },
      { letter: "C", text: "neutral and without strong opinions" },
      { letter: "D", text: "focused primarily on its commercial potential" },
      { letter: "E", text: "appreciative of its connections to non-Western traditions" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that minimalism 'initially scandalized the classical music establishment, which dismissed minimalism as simplistic, hypnotic, or insufficiently \"serious.\"' This indicates a dismissive reaction based on perceived lack of sophistication, supporting answer B. The other answers contradict or are unsupported by this characterization.",
    difficulty: "medium",
    passageId: "rc-exp23-p3",
  },
  {
    id: "rc-exp23-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Glass's film scores primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Glass abandoned minimalism entirely in his later career" },
      { letter: "B", text: "demonstrate minimalism's capacity to reach broad audiences beyond the concert hall" },
      { letter: "C", text: "criticize the commercialization of avant-garde music" },
      { letter: "D", text: "compare Glass unfavorably to Reich as a composer" },
      { letter: "E", text: "explain the technical aspects of minimalist composition" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses Glass's film scores in the context of his 'more accessible works' and uses them as evidence that he 'demonstrating minimalism's capacity to reach broad audiences.' This directly supports answer B. The passage does not criticize commercialization in this context, make unfavorable comparisons to Reich, or suggest Glass abandoned minimalism.",
    difficulty: "medium",
    passageId: "rc-exp23-p3",
  },
  {
    id: "rc-exp23-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the political and aesthetic critiques of minimalism can best be described as",
    answerChoices: [
      { letter: "A", text: "wholly endorsing, presenting them as definitive assessments of the movement" },
      { letter: "B", text: "acknowledging their existence and noting they remain contested, without firmly embracing or dismissing them" },
      { letter: "C", text: "entirely dismissive, treating them as irrelevant to understanding the music" },
      { letter: "D", text: "confused, unable to distinguish between different types of criticism" },
      { letter: "E", text: "hostile, attacking the critics' credentials and motivations" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents various critiques (McClary's characterization, cultural appropriation concerns, commercialization complaints) but notes 'These critiques, while contested, have prompted ongoing reflection.' This balanced presentation—acknowledging critiques exist, noting they are contested, recognizing their role in ongoing discussion—supports answer B. The author neither endorses nor dismisses the critiques entirely.",
    difficulty: "medium",
    passageId: "rc-exp23-p3",
  },
  {
    id: "rc-exp23-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A musical movement is introduced, two major composers are examined in detail, criticisms are presented, and the movement's broader influence is discussed." },
      { letter: "B", text: "A problem with contemporary music is identified, possible solutions are proposed, and one solution is defended as superior." },
      { letter: "C", text: "Two composers are compared and contrasted, with one ultimately judged more important than the other." },
      { letter: "D", text: "A theory of musical development is proposed, tested against historical evidence, and then revised." },
      { letter: "E", text: "The history of Western music from ancient times to the present is comprehensively surveyed." },
    ],
    correctAnswer: "A",
    explanation: "The passage begins by introducing minimalism and its aesthetic principles (paragraph 1), examines Reich (paragraph 2) and Glass (paragraph 3) in detail, presents critical objections (paragraph 4), and concludes with minimalism's legacy and influence (paragraph 5). This structure matches answer A precisely. The passage does not propose solutions to problems, judge one composer superior, test and revise theories, or survey all of Western music history.",
    difficulty: "hard",
    passageId: "rc-exp23-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - SOCIAL MOVEMENTS AND COLLECTIVE ACTION
// ============================================

const passage4 = `Understanding why people participate in social movements has been a central puzzle for social scientists. Rational choice theory suggests that individuals should rarely join collective action because the costs of participation (time, effort, risk) typically exceed the personal benefits, especially when the goals sought are "public goods" that will be enjoyed by everyone regardless of whether they contributed. Yet social movements persist and sometimes succeed, indicating that this "free-rider problem" has solutions that purely rational calculation cannot explain. The resolution to this puzzle has led researchers to examine the complex interplay of resources, opportunities, identity, and emotion in mobilizing collective action.

Resource mobilization theory, developed in the 1970s, shifted attention from grievances—which are endemic—to the organizational resources that enable movements to form and persist. This approach emphasized professional organizers, funding sources, communication networks, and institutional allies as key determinants of movement success. Critics noted, however, that resource mobilization theory treated movements as quasi-rational organizations, potentially neglecting the cultural and psychological dimensions of participation. Why do people invest resources in movements rather than other pursuits? The theory's focus on organizational infrastructure sometimes overlooked the prior question of how movements attract participants in the first place.

Political opportunity theory addresses the external conditions that make movements more or less likely to emerge and succeed. According to this perspective, movements arise when political systems become vulnerable to challenge—when elite alignments shift, repressive capacity weakens, or new institutional access points open. The civil rights movement's gains in the 1950s and 1960s, for example, coincided with Cold War pressures that made American racial discrimination an international embarrassment, splits within the Democratic Party coalition, and federal court decisions creating legal leverage. Political opportunity theory explains variations in movement timing and tactics but has been criticized for structural determinism—for implying that movements merely respond to external conditions rather than creating opportunities through their own actions.

More recent scholarship emphasizes collective identity and emotional dynamics. Participation in movements often transforms individual identities, creating solidarity and shared meaning that make continued engagement intrinsically rewarding rather than instrumentally calculated. Movements generate emotional energy through collective rituals—marches, rallies, songs—that bind participants together and sustain commitment through periods of apparent failure. The concept of "moral shocks," such as dramatic injustices or threatened values, explains how previously uninvolved individuals suddenly become activists. These cultural and emotional approaches do not replace resource and opportunity theories but complement them, showing that movement participation involves identity work and affective transformation alongside strategic calculation.

Contemporary movements operate in transformed media environments that create new opportunities and challenges. Social media platforms enable rapid mobilization without the organizational infrastructure that earlier theories emphasized, as demonstrated by the Arab Spring uprisings and the Black Lives Matter movement. Yet the same technologies that facilitate quick mobilization may impede the sustained organizing necessary for lasting change. The question of how digital tools affect movement dynamics—whether they democratize participation or create new forms of vulnerability and fragmentation—remains an active area of research.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp23-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that rational choice theory provides the only valid explanation for social movement participation" },
      { letter: "B", text: "survey theoretical approaches to understanding social movement participation, showing how successive theories have addressed limitations of earlier explanations" },
      { letter: "C", text: "prove that social movements are ineffective at achieving social change" },
      { letter: "D", text: "demonstrate that social media has made traditional theories of collective action obsolete" },
      { letter: "E", text: "criticize researchers for failing to study social movements systematically" },
    ],
    correctAnswer: "B",
    explanation: "The passage examines the free-rider problem, resource mobilization theory, political opportunity theory, collective identity and emotional approaches, and digital media's effects—showing how each addresses limitations of previous approaches. Answer B captures this progressive theoretical survey. Answer A contradicts the passage's presentation of multiple theories. Answers C, D, and E misrepresent the passage's content and purpose.",
    difficulty: "medium",
    passageId: "rc-exp23-p4",
  },
  {
    id: "rc-exp23-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the \"free-rider problem\" refers to the tendency of individuals to",
    answerChoices: [
      { letter: "A", text: "participate excessively in social movements despite personal costs" },
      { letter: "B", text: "avoid contributing to collective action because they will benefit from public goods regardless of their participation" },
      { letter: "C", text: "organize professional movement organizations without adequate funding" },
      { letter: "D", text: "join movements only when political opportunities are favorable" },
      { letter: "E", text: "experience emotional transformation through collective rituals" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that rational choice theory suggests individuals 'should rarely join collective action' because costs exceed personal benefits, 'especially when the goals sought are \"public goods\" that will be enjoyed by everyone regardless of whether they contributed.' This describes the free-rider problem—benefiting without contributing—matching answer B.",
    difficulty: "easy",
    passageId: "rc-exp23-p4",
  },
  {
    id: "rc-exp23-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, critics of resource mobilization theory would most likely argue that it",
    answerChoices: [
      { letter: "A", text: "places excessive emphasis on grievances as the primary driver of movement formation" },
      { letter: "B", text: "fails to adequately explain why individuals choose to invest their resources in movements" },
      { letter: "C", text: "overemphasizes the importance of emotional transformation in sustaining participation" },
      { letter: "D", text: "ignores the role of professional organizers in movement development" },
      { letter: "E", text: "attributes too much agency to movement participants rather than external conditions" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that critics noted resource mobilization theory 'potentially neglect[ed] the cultural and psychological dimensions of participation' and that 'its focus on organizational infrastructure sometimes overlooked the prior question of how movements attract participants in the first place.' This concern about explaining individual motivations supports answer B. Answer A contradicts the passage (the theory shifted away from grievances). Answers C, D, and E are inconsistent with the passage's characterization of the theory and its critics.",
    difficulty: "medium",
    passageId: "rc-exp23-p4",
  },
  {
    id: "rc-exp23-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions Cold War pressures, Democratic Party splits, and federal court decisions in the context of the civil rights movement primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that the civil rights movement would have succeeded regardless of these factors" },
      { letter: "B", text: "provide examples of political opportunities that facilitated movement emergence and success" },
      { letter: "C", text: "criticize resource mobilization theory for ignoring organizational factors" },
      { letter: "D", text: "demonstrate how emotional dynamics sustained participant commitment" },
      { letter: "E", text: "explain why social media was not available to earlier movements" },
    ],
    correctAnswer: "B",
    explanation: "These factors are presented in the paragraph on political opportunity theory as examples of conditions that 'made American racial discrimination an international embarrassment, splits within the Democratic Party coalition, and federal court decisions creating legal leverage.' They illustrate the external conditions that political opportunity theory emphasizes as enabling movement success, supporting answer B.",
    difficulty: "medium",
    passageId: "rc-exp23-p4",
  },
  {
    id: "rc-exp23-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward the various theoretical approaches discussed in the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly favoring collective identity approaches over all alternatives" },
      { letter: "B", text: "dismissive of all theoretical attempts to explain social movement participation" },
      { letter: "C", text: "synthetic, viewing different approaches as complementary rather than mutually exclusive" },
      { letter: "D", text: "confused about the differences between the various theories" },
      { letter: "E", text: "skeptical that any theory can adequately explain collective action" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents multiple theories, noting how each addresses limitations of predecessors, and explicitly states that cultural and emotional approaches 'do not replace resource and opportunity theories but complement them.' This synthetic perspective, recognizing that different theories illuminate different aspects of the phenomenon, supports answer C. The author does not favor one approach over others or dismiss theoretical attempts.",
    difficulty: "medium",
    passageId: "rc-exp23-p4",
  },
  {
    id: "rc-exp23-024",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which one of the following scenarios would best exemplify a \"moral shock\" that might mobilize previously uninvolved individuals?",
    answerChoices: [
      { letter: "A", text: "A professional organizer conducts a routine membership drive for an established advocacy group." },
      { letter: "B", text: "A political party announces a minor adjustment to its platform on a peripheral issue." },
      { letter: "C", text: "A widely circulated video shows police officers using extreme violence against peaceful protesters, prompting public outrage." },
      { letter: "D", text: "An academic publishes a detailed statistical analysis of long-term social trends in a scholarly journal." },
      { letter: "E", text: "A government agency gradually implements regulatory changes over a multi-year period." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes 'moral shocks' as 'dramatic injustices or threatened values' that explain 'how previously uninvolved individuals suddenly become activists.' Answer C describes a dramatic injustice (police violence against peaceful protesters) that generates public outrage, exactly the type of event that would constitute a moral shock. The other answers describe routine, gradual, or low-visibility events that lack the dramatic quality the passage associates with moral shocks.",
    difficulty: "hard",
    passageId: "rc-exp23-p4",
  },
];

// Export all RC questions from Set 23
export const rcQuestionsExpSet23: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet23 = {
  passage1: { id: "rc-exp23-p1", content: passage1, topic: "law", title: "Qualified Immunity for Government Officials" },
  passage2: { id: "rc-exp23-p2", content: passage2, topic: "natural-sciences", title: "Sleep Science and Circadian Rhythms" },
  passage3: { id: "rc-exp23-p3", content: passage3, topic: "humanities", title: "Minimalism in Music" },
  passage4: { id: "rc-exp23-p4", content: passage4, topic: "social-sciences", title: "Social Movements and Collective Action" },
};
