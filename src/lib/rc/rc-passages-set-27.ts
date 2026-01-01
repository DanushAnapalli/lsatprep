// Reading Comprehension Expansion Set 27
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - CAMPAIGN FINANCE AND POLITICAL SPEECH
// ============================================

const passage1 = `The regulation of campaign finance in the United States has long been governed by a fundamental tension between two competing constitutional values: the prevention of corruption in democratic governance and the protection of political speech under the First Amendment. Since the landmark Citizens United v. Federal Election Commission decision in 2010, this tension has intensified, with critics arguing that the decision unleashed unprecedented flows of money into electoral politics while defenders maintain that it appropriately protected core political expression from government censorship.

The Citizens United decision struck down provisions of the Bipartisan Campaign Reform Act that prohibited corporations and unions from using treasury funds for independent expenditures on electioneering communications. Writing for the majority, Justice Kennedy reasoned that political speech does not lose constitutional protection merely because its source is a corporation rather than an individual. The government's interest in preventing corruption, the Court held, extends only to quid pro quo corruption—the direct exchange of money for political favors—not to the broader influence that comes from independent spending in support of candidates.

Critics of the decision argue that it rests on an unrealistically narrow conception of corruption. They contend that large independent expenditures can create a sense of obligation in elected officials even without explicit agreements, and that the appearance of such influence undermines public confidence in democratic institutions. These critics note that the decision has enabled the creation of "Super PACs"—political action committees that can raise unlimited funds for independent expenditures—and has contributed to a dramatic increase in electoral spending that may advantage wealthy interests over ordinary citizens.

Defenders respond that the corruption rationale, if expanded beyond quid pro quo exchanges, would permit almost unlimited restrictions on political speech. After all, virtually all political spending might be said to influence officials in some diffuse way. Moreover, defenders argue that independent expenditures are inherently less corrupting than direct contributions to candidates because candidates cannot control how the money is spent. The marketplace of ideas, they maintain, is better served by more speech than by government restrictions on who may speak.

The debate extends to disclosure requirements, which have generally survived constitutional scrutiny. Proponents argue that transparency allows voters to evaluate the sources and potential biases of political messages without restricting speech itself. However, some argue that mandatory disclosure can chill speech by exposing donors to harassment or retaliation, particularly for supporters of controversial causes. The ongoing litigation over these issues reflects the difficulty of balancing democratic accountability with the protection of political expression in an era of unprecedented electoral spending.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp27-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Citizens United decision was correctly decided because corporations deserve the same free speech rights as individuals." },
      { letter: "B", text: "Campaign finance regulation involves a persistent tension between preventing corruption and protecting political speech, a tension that has intensified since Citizens United and remains unresolved." },
      { letter: "C", text: "Super PACs have fundamentally corrupted American democracy and should be abolished through constitutional amendment." },
      { letter: "D", text: "Disclosure requirements are the only constitutionally permissible form of campaign finance regulation." },
      { letter: "E", text: "The concept of quid pro quo corruption is too narrow to serve as a basis for any campaign finance regulation." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the tension between anti-corruption interests and free speech, examines Citizens United, presents arguments from critics and defenders, and notes that 'ongoing litigation' reflects the 'difficulty of balancing' these concerns. Answer B captures this balanced treatment of an unresolved constitutional tension.",
    wrongAnswerExplanations: {
      "A": "The passage presents this as defenders' position but does not endorse it as correct; the author maintains neutrality.",
      "C": "This extreme position is not supported by the passage, which presents multiple perspectives without advocating for abolition.",
      "D": "The passage discusses disclosure as one area that has 'generally survived constitutional scrutiny' but does not claim it is the only permissible form of regulation.",
      "E": "The passage presents this as critics' concern but does not adopt it as the main point."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p1",
  },
  {
    id: "rc-exp27-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, the Citizens United decision held that the government's interest in preventing corruption extends only to",
    answerChoices: [
      { letter: "A", text: "any spending that might influence elected officials" },
      { letter: "B", text: "independent expenditures by corporations and unions" },
      { letter: "C", text: "quid pro quo corruption involving direct exchanges of money for political favors" },
      { letter: "D", text: "the appearance of corruption in the eyes of the public" },
      { letter: "E", text: "contributions made directly to political candidates" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'The government's interest in preventing corruption, the Court held, extends only to quid pro quo corruption—the direct exchange of money for political favors.'",
    wrongAnswerExplanations: {
      "A": "This is the opposite of what the Court held; it specifically rejected this broad conception of corruption.",
      "B": "The decision struck down restrictions on these expenditures rather than identifying them as the limit of corruption concerns.",
      "D": "The passage indicates the Court rejected the appearance of corruption as a sufficient basis for regulation.",
      "E": "While direct contributions may be more regulable, the passage describes quid pro quo corruption, not contributions, as the limit."
    },
    difficulty: "easy",
    passageId: "rc-exp27-p1",
  },
  {
    id: "rc-exp27-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, defenders of the Citizens United decision would most likely agree with which one of the following statements?",
    answerChoices: [
      { letter: "A", text: "Independent expenditures pose the same corruption risks as direct contributions to candidates." },
      { letter: "B", text: "Government restrictions on corporate political spending are necessary to preserve democratic equality." },
      { letter: "C", text: "Expanding the corruption rationale beyond quid pro quo exchanges would create a dangerously broad basis for restricting political speech." },
      { letter: "D", text: "Super PACs have undermined public confidence in democratic institutions." },
      { letter: "E", text: "Wealthy interests should have less influence in elections than ordinary citizens." },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Defenders respond that the corruption rationale, if expanded beyond quid pro quo exchanges, would permit almost unlimited restrictions on political speech.' This directly supports answer C.",
    wrongAnswerExplanations: {
      "A": "Defenders argue the opposite: that independent expenditures are 'inherently less corrupting than direct contributions.'",
      "B": "This is more consistent with the critics' position; defenders favor fewer restrictions on speech.",
      "D": "This concern is attributed to critics, not defenders, of the decision.",
      "E": "The passage does not indicate defenders hold this view; their argument focuses on speech protection, not equality."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p1",
  },
  {
    id: "rc-exp27-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the creation of 'Super PACs' primarily in order to",
    answerChoices: [
      { letter: "A", text: "explain the legal structure of political action committees in detail" },
      { letter: "B", text: "illustrate a consequence of the Citizens United decision that critics find problematic" },
      { letter: "C", text: "demonstrate that the decision has been beneficial for democratic participation" },
      { letter: "D", text: "compare the regulatory treatment of corporations and unions" },
      { letter: "E", text: "argue that all forms of campaign finance regulation should be eliminated" },
    ],
    correctAnswer: "B",
    explanation: "Super PACs are mentioned in the critics' paragraph as a consequence of Citizens United: 'These critics note that the decision has enabled the creation of Super PACs... and has contributed to a dramatic increase in electoral spending that may advantage wealthy interests over ordinary citizens.'",
    wrongAnswerExplanations: {
      "A": "The passage provides only a brief definition of Super PACs, not a detailed legal explanation.",
      "C": "Super PACs are mentioned in the context of criticism, not defense, of the decision.",
      "D": "The passage does not compare regulatory treatment of corporations and unions when discussing Super PACs.",
      "E": "The passage presents multiple perspectives and does not argue for eliminating all regulation."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p1",
  },
  {
    id: "rc-exp27-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate over campaign finance regulation can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of unlimited political spending" },
      { letter: "B", text: "dismissive of concerns about corruption in politics" },
      { letter: "C", text: "analytically engaged, presenting competing arguments without clearly advocating for either side" },
      { letter: "D", text: "nostalgic for pre-Citizens United restrictions on corporate speech" },
      { letter: "E", text: "skeptical that any campaign finance regulation can be constitutional" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the constitutional tension, the Citizens United holding, critics' arguments, defenders' responses, and ongoing debates about disclosure without taking a clear position. The concluding reference to 'difficulty of balancing' these interests reflects analytical engagement without advocacy.",
    wrongAnswerExplanations: {
      "A": "The author presents defenders' arguments but does not personally advocate for unlimited spending.",
      "B": "The author treats corruption concerns seriously, presenting critics' arguments at length.",
      "D": "The author does not express nostalgia or preference for earlier regulatory regimes.",
      "E": "The author notes that disclosure requirements have 'generally survived constitutional scrutiny,' suggesting some regulation is permissible."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p1",
  },
  {
    id: "rc-exp27-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most weaken the defenders' argument that independent expenditures are inherently less corrupting than direct contributions?",
    answerChoices: [
      { letter: "A", text: "Many voters do not pay attention to political advertising funded by independent expenditures." },
      { letter: "B", text: "Studies show that elected officials frequently coordinate their campaign strategies with Super PACs despite legal prohibitions on such coordination." },
      { letter: "C", text: "Some corporations choose not to make independent expenditures for fear of consumer backlash." },
      { letter: "D", text: "Direct contributions to candidates are subject to strict disclosure requirements." },
      { letter: "E", text: "Independent expenditures have increased in both state and federal elections since 2010." },
    ],
    correctAnswer: "B",
    explanation: "Defenders argue independent expenditures are less corrupting because 'candidates cannot control how the money is spent.' Evidence that officials 'frequently coordinate' with Super PACs despite prohibitions would undermine this premise by showing that the supposed independence is often illusory.",
    wrongAnswerExplanations: {
      "A": "Voter inattention does not address whether independent expenditures create corruption or obligations in officials.",
      "C": "Corporate reluctance to spend does not address the corruption potential of spending that does occur.",
      "D": "Disclosure requirements for direct contributions do not affect the argument about the comparative corruption potential of independent expenditures.",
      "E": "The increase in spending does not, by itself, show that such spending is corrupting."
    },
    difficulty: "hard",
    passageId: "rc-exp27-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - EXOPLANETS AND THE SEARCH FOR LIFE
// ============================================

const passage2 = `The discovery of thousands of exoplanets—planets orbiting stars other than our Sun—has transformed the search for extraterrestrial life from a speculative endeavor into an empirical science. Since the first confirmed detection of an exoplanet around a Sun-like star in 1995, astronomers have identified over 5,000 such worlds, revealing a universe far more diverse and potentially hospitable than previously imagined. The central question has shifted from whether other planets exist to whether any might harbor life, and if so, how we might detect it.

The concept of the "habitable zone" has guided much of this research. Traditionally defined as the orbital region around a star where temperatures permit liquid water to exist on a planet's surface, the habitable zone represents a necessary but not sufficient condition for life as we know it. A planet within this zone must also possess an atmosphere capable of maintaining stable surface temperatures, protection from stellar radiation, and access to the chemical building blocks of life. Venus and Mars both reside near the edges of our solar system's habitable zone, yet neither currently supports life on its surface, illustrating the complexity of habitability.

Recent research has expanded the habitability concept beyond the traditional emphasis on surface conditions. Subsurface oceans on moons like Europa and Enceladus, heated by tidal forces rather than stellar radiation, may provide environments suitable for microbial life. These discoveries suggest that habitable environments might be far more common than initial estimates suggested, potentially existing even around dim red dwarf stars or in the outer reaches of planetary systems where surface temperatures would be inhospitable. The search for life must therefore consider a broader range of planetary and lunar environments.

Detecting life on distant exoplanets presents formidable technical challenges. Direct imaging of Earth-sized planets in habitable zones remains beyond current capabilities for most stellar systems. Instead, astronomers focus on transmission spectroscopy—analyzing starlight that passes through a planet's atmosphere during transit to identify characteristic absorption signatures. Potential biosignatures include oxygen, methane, and other gases that might indicate biological processes, though each can also arise from non-biological sources. The interpretation of spectroscopic data requires sophisticated models distinguishing biological from geological or chemical origins.

Future missions, including the James Webb Space Telescope and proposed direct-imaging observatories, may dramatically enhance our ability to characterize exoplanet atmospheres. However, even the detection of promising biosignatures would not constitute definitive proof of life. The history of Mars exploration—from early claims of canals to ongoing debates about Martian meteorites—cautions against premature conclusions. The search for extraterrestrial life requires both ambitious observation and rigorous skepticism, recognizing that extraordinary claims demand extraordinary evidence.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp27-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The James Webb Space Telescope will definitively determine whether life exists on exoplanets." },
      { letter: "B", text: "Exoplanet discoveries have advanced the search for extraterrestrial life, though the expanded concept of habitability and technical challenges in detecting biosignatures require both ambitious observation and careful skepticism." },
      { letter: "C", text: "The habitable zone concept has been proven irrelevant by the discovery of subsurface oceans on moons." },
      { letter: "D", text: "Venus and Mars demonstrate that planets in habitable zones will inevitably develop life." },
      { letter: "E", text: "Transmission spectroscopy has already detected definitive evidence of extraterrestrial life." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces exoplanet discoveries, discusses the evolving habitability concept, examines detection challenges including biosignature interpretation, and concludes by emphasizing both 'ambitious observation and rigorous skepticism.' Answer B captures this comprehensive and nuanced treatment.",
    wrongAnswerExplanations: {
      "A": "The passage mentions JWST as potentially enhancing capabilities but explicitly states that even biosignature detection 'would not constitute definitive proof.'",
      "C": "The passage expands the habitability concept rather than abandoning the habitable zone entirely.",
      "D": "The passage uses Venus and Mars as counterexamples, showing habitable zone location does not guarantee life.",
      "E": "The passage describes transmission spectroscopy as a detection method but does not claim definitive evidence has been found."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p2",
  },
  {
    id: "rc-exp27-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the habitable zone is defined as",
    answerChoices: [
      { letter: "A", text: "any region where life has been confirmed to exist" },
      { letter: "B", text: "the orbital region around a star where temperatures permit liquid water to exist on a planet's surface" },
      { letter: "C", text: "the area within a planetary system where subsurface oceans can form" },
      { letter: "D", text: "the distance from a star at which tidal heating becomes significant" },
      { letter: "E", text: "the zone in which transmission spectroscopy is most effective" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states: 'Traditionally defined as the orbital region around a star where temperatures permit liquid water to exist on a planet's surface, the habitable zone represents a necessary but not sufficient condition for life as we know it.'",
    wrongAnswerExplanations: {
      "A": "The habitable zone is defined by conditions potentially favorable for life, not by confirmed life detection.",
      "C": "Subsurface oceans, discussed later in the passage, represent an expansion beyond the traditional habitable zone concept.",
      "D": "Tidal heating is mentioned in connection with moons outside traditional habitable zones.",
      "E": "The passage does not connect the habitable zone definition to spectroscopic techniques."
    },
    difficulty: "easy",
    passageId: "rc-exp27-p2",
  },
  {
    id: "rc-exp27-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, the author would most likely agree that the discovery of subsurface oceans on moons like Europa and Enceladus",
    answerChoices: [
      { letter: "A", text: "proves that microbial life exists in those oceans" },
      { letter: "B", text: "demonstrates that the traditional habitable zone concept was completely mistaken" },
      { letter: "C", text: "suggests that potentially habitable environments may be more widespread than earlier estimates indicated" },
      { letter: "D", text: "makes transmission spectroscopy unnecessary for the search for life" },
      { letter: "E", text: "eliminates the need for stellar radiation in supporting life" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that these discoveries 'suggest that habitable environments might be far more common than initial estimates suggested, potentially existing even around dim red dwarf stars or in the outer reaches of planetary systems.'",
    wrongAnswerExplanations: {
      "A": "The passage describes these environments as potentially 'suitable for microbial life' but does not claim life has been found.",
      "B": "The passage expands the concept rather than declaring the traditional definition 'completely mistaken.'",
      "D": "Transmission spectroscopy remains relevant for exoplanet atmosphere analysis; subsurface oceans require different detection methods.",
      "E": "The passage indicates these environments use alternative heat sources (tidal forces), not that stellar radiation is universally unnecessary."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p2",
  },
  {
    id: "rc-exp27-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions Venus and Mars primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that our solar system is uniquely unsuitable for life" },
      { letter: "B", text: "compare their atmospheric compositions with those of exoplanets" },
      { letter: "C", text: "illustrate that location within the habitable zone does not guarantee habitability" },
      { letter: "D", text: "demonstrate the success of transmission spectroscopy in our solar system" },
      { letter: "E", text: "explain why astronomers have focused on exoplanets rather than planets in our own system" },
    ],
    correctAnswer: "C",
    explanation: "Venus and Mars are mentioned immediately after defining the habitable zone as 'a necessary but not sufficient condition,' with the explicit statement that neither 'currently supports life on its surface, illustrating the complexity of habitability.'",
    wrongAnswerExplanations: {
      "A": "The passage does not argue our solar system is uniquely unsuitable; it uses these examples to illustrate a general principle.",
      "B": "The passage does not compare their atmospheric compositions with exoplanets in this context.",
      "D": "Transmission spectroscopy is discussed in relation to exoplanets, not solar system planets.",
      "E": "The passage does not use these examples to explain why astronomers focus on exoplanets."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p2",
  },
  {
    id: "rc-exp27-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the potential detection of biosignatures in exoplanet atmospheres can best be described as",
    answerChoices: [
      { letter: "A", text: "certain that such detections will prove the existence of life" },
      { letter: "B", text: "dismissive of spectroscopic methods as unreliable" },
      { letter: "C", text: "cautiously optimistic, recognizing both the promise and the interpretive challenges of such observations" },
      { letter: "D", text: "indifferent to whether life is ever discovered on exoplanets" },
      { letter: "E", text: "pessimistic that any definitive evidence will ever be obtained" },
    ],
    correctAnswer: "C",
    explanation: "The author describes biosignature detection as promising but emphasizes that interpretation 'requires sophisticated models' and that even 'promising biosignatures would not constitute definitive proof.' The call for 'ambitious observation and rigorous skepticism' reflects cautious optimism.",
    wrongAnswerExplanations: {
      "A": "The author explicitly states biosignature detection 'would not constitute definitive proof of life.'",
      "B": "The author treats spectroscopy as a valuable method while acknowledging interpretive challenges.",
      "D": "The author's detailed discussion of detection methods and future missions indicates significant interest in discovery.",
      "E": "The author's enthusiasm for future missions suggests optimism, tempered by appropriate caution."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p2",
  },
  {
    id: "rc-exp27-012",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, if astronomers detected significant amounts of methane in an exoplanet's atmosphere, which one of the following would the author most likely recommend?",
    answerChoices: [
      { letter: "A", text: "Immediately announcing the discovery of extraterrestrial life to the public" },
      { letter: "B", text: "Abandoning further study of the planet since methane is a common gas" },
      { letter: "C", text: "Using sophisticated models to determine whether the methane could have non-biological origins before drawing conclusions about life" },
      { letter: "D", text: "Focusing exclusively on planets without methane in their atmospheres" },
      { letter: "E", text: "Concluding that the detection was a measurement error since life cannot produce methane" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that potential biosignatures like methane 'can also arise from non-biological sources' and that 'interpretation of spectroscopic data requires sophisticated models distinguishing biological from geological or chemical origins.' This matches the approach described in answer C.",
    wrongAnswerExplanations: {
      "A": "The passage warns against 'premature conclusions' and states 'extraordinary claims demand extraordinary evidence.'",
      "B": "The passage identifies methane as a 'potential biosignature' worth investigating, not a reason to abandon study.",
      "D": "The passage suggests methane is worth studying precisely because it could indicate biological processes.",
      "E": "The passage acknowledges methane as a potential biosignature that 'might indicate biological processes.'"
    },
    difficulty: "hard",
    passageId: "rc-exp27-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - JAPANESE AESTHETICS (WABI-SABI)
// ============================================

const passage3 = `Wabi-sabi, the Japanese aesthetic philosophy centered on the acceptance of transience and imperfection, has profoundly influenced artistic practice across centuries while resisting precise definition. Emerging from medieval Zen Buddhism and the tea ceremony tradition, wabi-sabi embraces qualities that Western aesthetics has often dismissed: asymmetry, roughness, incompleteness, and the beauty of natural decay. Understanding this aesthetic requires both historical context and a willingness to reconsider fundamental assumptions about what makes objects and experiences beautiful.

The terms "wabi" and "sabi" originally carried negative connotations. Wabi suggested the misery of poverty and isolation, while sabi referred to cold, withered, or lean qualities. Through the influence of tea masters like Sen no Rikyu in the sixteenth century, these concepts were transformed into positive aesthetic values. Rikyu rejected the elaborate Chinese tea wares favored by his predecessors in favor of humble, locally produced ceramics whose rough surfaces and irregular forms embodied a new kind of beauty. A cracked bowl, a weathered wooden beam, a fading flower arrangement—these became objects of contemplation rather than mere signs of deterioration.

This aesthetic revolution reflected deeper philosophical commitments. Buddhist teachings on impermanence (mujo) encouraged practitioners to find meaning and beauty in the very transience that causes suffering. Rather than striving for permanence or perfection—goals ultimately impossible to achieve—wabi-sabi cultivates appreciation for things as they are, including their inevitable aging and decay. The tea ceremony itself became a meditation on impermanence: each gathering unique and unrepeatable, each moment worthy of full attention precisely because it would never recur.

Western observers have often struggled to grasp wabi-sabi, sometimes romanticizing it as mere rusticity or mistaking deliberate simplicity for poverty. Others have appropriated the term for marketing purposes, applying it to products that merely appear aged or handmade. These misunderstandings reflect the difficulty of translating aesthetic concepts across cultural boundaries. Wabi-sabi cannot be reduced to a set of visual characteristics; it requires a particular way of seeing that has been cultivated through centuries of practice within specific cultural contexts.

Contemporary artists and designers worldwide have nonetheless found inspiration in wabi-sabi principles. Some ceramicists embrace the unpredictable effects of wood-firing kilns rather than seeking uniform results. Architects incorporate weathering steel and other materials that change with time rather than resisting it. These applications extend wabi-sabi beyond its historical origins while raising questions about whether the philosophical depth of the original tradition can survive translation into different cultural contexts. The appeal of imperfection in an age of mass production and digital perfection suggests that wabi-sabi addresses something fundamental about human experience, even as its full meaning may remain elusive to outsiders.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp27-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Sen no Rikyu was the most important figure in Japanese cultural history." },
      { letter: "B", text: "Wabi-sabi is a complex aesthetic philosophy rooted in Zen Buddhism that embraces impermanence and imperfection, though its translation across cultural contexts presents challenges." },
      { letter: "C", text: "Western culture has completely failed to understand any Japanese aesthetic concepts." },
      { letter: "D", text: "Contemporary artists should reject wabi-sabi as outdated and culturally specific." },
      { letter: "E", text: "The tea ceremony is the only authentic expression of wabi-sabi aesthetics." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces wabi-sabi, traces its origins in Zen Buddhism and tea ceremony traditions, explores its philosophical underpinnings, examines Western misunderstandings, and discusses contemporary applications and translation challenges. Answer B captures this comprehensive treatment.",
    wrongAnswerExplanations: {
      "A": "While Rikyu is discussed as an important influence, the passage does not claim he was the most important figure in all of Japanese cultural history.",
      "C": "The passage notes that some Western observers 'struggle' and sometimes 'misunderstand' but does not claim complete failure of understanding.",
      "D": "The passage describes contemporary artists finding 'inspiration' in wabi-sabi rather than rejecting it.",
      "E": "The passage presents the tea ceremony as one important context for wabi-sabi but discusses its influence on ceramics, architecture, and other arts."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p3",
  },
  {
    id: "rc-exp27-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the terms 'wabi' and 'sabi' originally",
    answerChoices: [
      { letter: "A", text: "carried positive connotations that were later transformed into negative ones" },
      { letter: "B", text: "were invented by Sen no Rikyu for the tea ceremony" },
      { letter: "C", text: "carried negative connotations suggesting poverty, isolation, and coldness" },
      { letter: "D", text: "referred exclusively to Chinese tea wares" },
      { letter: "E", text: "were borrowed from Western aesthetic philosophy" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states: 'The terms \"wabi\" and \"sabi\" originally carried negative connotations. Wabi suggested the misery of poverty and isolation, while sabi referred to cold, withered, or lean qualities.'",
    wrongAnswerExplanations: {
      "A": "This reverses the actual transformation; the terms went from negative to positive connotations.",
      "B": "Rikyu transformed the concepts but did not invent the terms, which had earlier meanings.",
      "D": "The passage contrasts wabi-sabi ceramics with the 'elaborate Chinese tea wares' Rikyu rejected.",
      "E": "The passage indicates wabi-sabi emerged from Japanese cultural and Buddhist traditions, not Western philosophy."
    },
    difficulty: "easy",
    passageId: "rc-exp27-p3",
  },
  {
    id: "rc-exp27-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which one of the following would be most consistent with wabi-sabi aesthetic principles?",
    answerChoices: [
      { letter: "A", text: "A perfectly symmetrical vase with a flawless glaze produced in a factory" },
      { letter: "B", text: "An antique wooden table whose surface shows marks of use and the natural aging of the wood" },
      { letter: "C", text: "A digital photograph that has been heavily edited to remove all imperfections" },
      { letter: "D", text: "A newly constructed building designed to look exactly the same in fifty years as it does today" },
      { letter: "E", text: "A mass-produced ceramic bowl chosen specifically because it looks identical to thousands of others" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes wabi-sabi as embracing 'asymmetry, roughness, incompleteness, and the beauty of natural decay' and 'appreciation for things as they are, including their inevitable aging and decay.' An antique table showing marks of use and aging embodies these values.",
    wrongAnswerExplanations: {
      "A": "Perfect symmetry and flawless factory production contradict wabi-sabi values of asymmetry and natural imperfection.",
      "C": "Editing to remove imperfections opposes wabi-sabi acceptance of imperfection.",
      "D": "Designing to resist change contradicts wabi-sabi embrace of impermanence and aging.",
      "E": "Mass-produced uniformity contradicts the value placed on individual character and imperfection."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p3",
  },
  {
    id: "rc-exp27-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author discusses Western misunderstandings of wabi-sabi primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Western culture is inherently inferior to Japanese culture" },
      { letter: "B", text: "illustrate the difficulty of translating aesthetic concepts across cultural boundaries" },
      { letter: "C", text: "criticize all contemporary applications of wabi-sabi principles" },
      { letter: "D", text: "demonstrate that aesthetic concepts have no meaning outside their original contexts" },
      { letter: "E", text: "explain why Rikyu rejected Chinese tea wares" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'These misunderstandings reflect the difficulty of translating aesthetic concepts across cultural boundaries' and notes that wabi-sabi 'requires a particular way of seeing that has been cultivated through centuries of practice within specific cultural contexts.'",
    wrongAnswerExplanations: {
      "A": "The passage does not make claims about cultural superiority or inferiority.",
      "C": "The passage discusses some contemporary applications approvingly, noting artists who find 'inspiration' in wabi-sabi.",
      "D": "The passage acknowledges translation challenges but also discusses how contemporary artists have found inspiration across cultures.",
      "E": "Rikyu's rejection of Chinese wares is discussed earlier, separately from the discussion of Western misunderstandings."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p3",
  },
  {
    id: "rc-exp27-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward contemporary artists who incorporate wabi-sabi principles can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive, viewing their work as inauthentic appropriation" },
      { letter: "B", text: "enthusiastic, believing they have perfectly captured the original tradition" },
      { letter: "C", text: "interested but measured, acknowledging their inspiration while questioning whether full philosophical depth survives translation" },
      { letter: "D", text: "completely indifferent to their work" },
      { letter: "E", text: "hostile, arguing they should be prohibited from using Japanese concepts" },
    ],
    correctAnswer: "C",
    explanation: "The passage notes that contemporary artists 'have nonetheless found inspiration in wabi-sabi principles' while 'raising questions about whether the philosophical depth of the original tradition can survive translation.' This balanced treatment reflects interest tempered by measured skepticism.",
    wrongAnswerExplanations: {
      "A": "The passage does not dismiss contemporary applications as inauthentic appropriation.",
      "B": "The author's questioning of whether 'philosophical depth' survives indicates less than complete enthusiasm.",
      "D": "The detailed discussion of contemporary applications indicates interest, not indifference.",
      "E": "The passage expresses no hostility and does not suggest prohibition."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p3",
  },
  {
    id: "rc-exp27-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A scientific hypothesis is proposed, experiments test it, and conclusions are drawn from the data." },
      { letter: "B", text: "An aesthetic concept is introduced, its historical origins and philosophical underpinnings are explored, challenges in cross-cultural translation are examined, and contemporary applications are discussed." },
      { letter: "C", text: "Two competing theories are presented and evaluated, with one ultimately declared superior." },
      { letter: "D", text: "A chronological biography of Sen no Rikyu is presented from birth to death." },
      { letter: "E", text: "A problem in contemporary art is identified and a solution is proposed and defended." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces wabi-sabi, traces its origins in tea ceremony and Zen Buddhism, explores its philosophical foundations in impermanence, examines Western misunderstandings and translation difficulties, and discusses contemporary artistic applications. Answer B accurately describes this structure.",
    wrongAnswerExplanations: {
      "A": "The passage discusses aesthetics and philosophy, not scientific hypotheses and experiments.",
      "C": "The passage does not present competing theories in opposition.",
      "D": "While Rikyu is discussed, the passage is not a biographical account of his life.",
      "E": "The passage explores an aesthetic concept rather than proposing solutions to problems."
    },
    difficulty: "hard",
    passageId: "rc-exp27-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - RESTORATIVE JUSTICE PRACTICES
// ============================================

const passage4 = `Restorative justice represents a fundamental reconceptualization of how societies should respond to crime and wrongdoing. Rather than focusing primarily on punishment of offenders through the adversarial processes of conventional criminal justice, restorative approaches emphasize repairing the harm done to victims, communities, and even offenders themselves. This paradigm shift has gained increasing attention from criminologists, policymakers, and practitioners, though significant debates persist about its appropriate scope and implementation.

The philosophical foundations of restorative justice draw on diverse traditions, from indigenous dispute resolution practices in New Zealand, Australia, and North America to religious concepts of reconciliation and forgiveness. What unites these traditions is the understanding that crime is fundamentally a violation of relationships rather than merely a violation of law. When harm occurs, justice requires that those affected—victims, offenders, and community members—have the opportunity to participate in determining how to address the wrong and prevent future harm. This contrasts sharply with conventional systems where the state prosecutes offenses against itself, often leaving victims marginalized and communities uninvolved.

Restorative practices take many forms, including victim-offender mediation, family group conferencing, and sentencing circles. In victim-offender mediation, a trained facilitator brings together the person harmed and the person responsible to discuss the offense, its impacts, and possibilities for repair. Participants may agree on restitution, community service, or other actions the offender will take. Family group conferencing expands this model to include supporters of both parties and sometimes community representatives. Sentencing circles, derived from indigenous traditions, involve even broader community participation in determining appropriate responses to wrongdoing.

Critics raise several concerns about restorative justice. Some worry that it may trivialize serious crimes or fail to adequately protect public safety. Others question whether genuine voluntariness can exist when offenders face the alternative of conventional prosecution, or whether power imbalances between victims and offenders can be adequately addressed in informal settings. Feminist scholars have particularly scrutinized the application of restorative approaches to domestic violence and sexual assault, arguing that community-based responses may inadequately protect victims and reinforce harmful dynamics.

Proponents respond that restorative justice is not intended to replace incarceration for dangerous offenders or to handle all cases. Rather, they advocate for a range of responses appropriate to different situations, with restorative approaches serving as alternatives or supplements to conventional processes in suitable cases. Research suggests that well-implemented restorative programs can reduce recidivism, increase victim satisfaction, and strengthen community bonds. The ongoing expansion of restorative practices in schools, workplaces, and juvenile justice systems—alongside traditional criminal justice—reflects growing recognition that punishment alone may not adequately address the complex harms that wrongdoing inflicts.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp27-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that restorative justice should completely replace the conventional criminal justice system" },
      { letter: "B", text: "examine restorative justice as an alternative approach to wrongdoing, describing its foundations, practices, criticisms, and potential applications" },
      { letter: "C", text: "demonstrate that indigenous dispute resolution practices are superior to all Western approaches" },
      { letter: "D", text: "criticize feminist scholars for opposing restorative justice" },
      { letter: "E", text: "explain why punishment is the only effective response to crime" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces restorative justice, discusses its philosophical foundations, describes various practices, presents critics' concerns and proponents' responses, and discusses ongoing expansion. Answer B captures this balanced, explanatory treatment.",
    wrongAnswerExplanations: {
      "A": "The passage notes that proponents do not advocate replacing conventional justice entirely but rather using restorative approaches as 'alternatives or supplements' in 'suitable cases.'",
      "C": "While indigenous traditions are mentioned as sources, the passage does not argue for their superiority.",
      "D": "The passage presents feminist concerns respectfully as legitimate criticisms rather than criticizing feminist scholars.",
      "E": "The passage questions whether 'punishment alone may not adequately address the complex harms that wrongdoing inflicts.'"
    },
    difficulty: "medium",
    passageId: "rc-exp27-p4",
  },
  {
    id: "rc-exp27-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, restorative justice differs from conventional criminal justice primarily in that restorative justice",
    answerChoices: [
      { letter: "A", text: "focuses on repairing harm to victims and communities rather than primarily on punishing offenders" },
      { letter: "B", text: "excludes victims from the justice process entirely" },
      { letter: "C", text: "relies exclusively on incarceration as a response to crime" },
      { letter: "D", text: "treats crime as a violation of law rather than a violation of relationships" },
      { letter: "E", text: "gives the state exclusive authority over dispute resolution" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that 'Rather than focusing primarily on punishment of offenders through the adversarial processes of conventional criminal justice, restorative approaches emphasize repairing the harm done to victims, communities, and even offenders themselves.'",
    wrongAnswerExplanations: {
      "B": "The passage emphasizes that restorative justice gives victims a central participatory role, unlike conventional systems where victims are 'marginalized.'",
      "C": "Restorative justice emphasizes alternatives to incarceration, such as restitution and community service.",
      "D": "This describes conventional criminal justice; restorative justice views crime as 'a violation of relationships rather than merely a violation of law.'",
      "E": "This describes conventional systems; restorative justice involves community participation rather than state exclusivity."
    },
    difficulty: "easy",
    passageId: "rc-exp27-p4",
  },
  {
    id: "rc-exp27-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, feminist scholars who have scrutinized restorative approaches to domestic violence are most likely concerned that",
    answerChoices: [
      { letter: "A", text: "victims will be forced to pursue conventional prosecution against their wishes" },
      { letter: "B", text: "community-based responses may fail to protect victims and could reinforce harmful power dynamics" },
      { letter: "C", text: "restorative approaches are too punitive toward offenders in such cases" },
      { letter: "D", text: "domestic violence is not a serious enough crime to warrant any formal response" },
      { letter: "E", text: "indigenous traditions have no relevance to contemporary justice issues" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that feminist scholars have scrutinized these applications, 'arguing that community-based responses may inadequately protect victims and reinforce harmful dynamics.'",
    wrongAnswerExplanations: {
      "A": "The passage presents feminist concern about restorative approaches, not about forced conventional prosecution.",
      "C": "The concern is about inadequate protection, not excessive punishment.",
      "D": "Feminist scholars are concerned about serious harms; the passage does not suggest they consider domestic violence unimportant.",
      "E": "The passage does not attribute this view to feminist scholars."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p4",
  },
  {
    id: "rc-exp27-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions victim-offender mediation, family group conferencing, and sentencing circles primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that one of these approaches is clearly superior to the others" },
      { letter: "B", text: "illustrate the range of specific practices that fall under the restorative justice paradigm" },
      { letter: "C", text: "criticize all forms of informal dispute resolution as inadequate" },
      { letter: "D", text: "explain why conventional criminal prosecution is unnecessary" },
      { letter: "E", text: "compare the recidivism rates of different restorative approaches" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Restorative practices take many forms' and then describes these three approaches, illustrating the variety of practices within the restorative justice framework.",
    wrongAnswerExplanations: {
      "A": "The passage describes each approach without claiming one is superior.",
      "C": "The passage presents these practices as valuable alternatives, not as inadequate.",
      "D": "The passage discusses these as alternatives or supplements, not as replacements making prosecution unnecessary.",
      "E": "The passage does not compare recidivism rates among these specific practices."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p4",
  },
  {
    id: "rc-exp27-023",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward restorative justice can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive without acknowledging any limitations" },
      { letter: "B", text: "completely dismissive, viewing it as a failed experiment" },
      { letter: "C", text: "cautiously favorable, presenting its promise while acknowledging legitimate criticisms" },
      { letter: "D", text: "entirely neutral with no discernible perspective" },
      { letter: "E", text: "hostile toward any alternatives to conventional criminal justice" },
    ],
    correctAnswer: "C",
    explanation: "The author presents restorative justice's foundations and practices, fairly presents critics' concerns, notes proponents' responses, and cites research suggesting positive outcomes while acknowledging that 'significant debates persist.' The conclusion suggesting 'punishment alone may not adequately address' harms indicates cautious favorability.",
    wrongAnswerExplanations: {
      "A": "The author presents significant criticisms in the fourth paragraph and acknowledges ongoing debates.",
      "B": "The author presents positive research findings and discusses expansion of restorative practices, indicating more than dismissal.",
      "D": "The concluding suggestion that 'punishment alone may not adequately address' harms indicates a perspective, not complete neutrality.",
      "E": "The author presents restorative alternatives favorably rather than with hostility."
    },
    difficulty: "medium",
    passageId: "rc-exp27-p4",
  },
  {
    id: "rc-exp27-024",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following, if true, would most strengthen the proponents' claim that restorative justice programs can reduce recidivism?",
    answerChoices: [
      { letter: "A", text: "A longitudinal study found that offenders who participated in victim-offender mediation had significantly lower rates of reoffending than comparable offenders processed through conventional courts." },
      { letter: "B", text: "Most victims report feeling uncomfortable meeting with offenders in any setting." },
      { letter: "C", text: "The cost of implementing restorative programs is substantially higher than conventional prosecution." },
      { letter: "D", text: "Many offenders view restorative processes as easier than conventional punishment." },
      { letter: "E", text: "Some communities lack trained facilitators for restorative programs." },
    ],
    correctAnswer: "A",
    explanation: "The passage states that 'Research suggests that well-implemented restorative programs can reduce recidivism.' A longitudinal study directly demonstrating lower reoffending rates for restorative justice participants would provide strong empirical support for this claim.",
    wrongAnswerExplanations: {
      "B": "This would raise concerns about victim participation but does not address recidivism rates.",
      "C": "Cost concerns do not strengthen claims about recidivism reduction.",
      "D": "Offenders viewing processes as 'easier' might undermine claims about accountability but does not support recidivism reduction.",
      "E": "Implementation challenges do not strengthen effectiveness claims."
    },
    difficulty: "hard",
    passageId: "rc-exp27-p4",
  },
];

// Export all RC questions from Set 27
export const rcQuestionsExpSet27: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet27 = {
  passage1: { id: "rc-exp27-p1", content: passage1, topic: "law", title: "Campaign Finance and Political Speech" },
  passage2: { id: "rc-exp27-p2", content: passage2, topic: "natural-sciences", title: "Exoplanets and the Search for Life" },
  passage3: { id: "rc-exp27-p3", content: passage3, topic: "humanities", title: "Japanese Aesthetics: Wabi-Sabi" },
  passage4: { id: "rc-exp27-p4", content: passage4, topic: "social-sciences", title: "Restorative Justice Practices" },
};
