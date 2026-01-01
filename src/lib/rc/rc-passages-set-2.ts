// Reading Comprehension Expansion Set 2
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - CONSTITUTIONAL INTERPRETATION
// ============================================

const passage1 = `The debate over constitutional interpretation in the United States has long centered on the tension between originalism and living constitutionalism. Originalists maintain that the Constitution should be interpreted according to the original understanding of its text at the time of ratification. Living constitutionalists, by contrast, argue that constitutional meaning must evolve to address contemporary circumstances and changing social values.

Modern originalism has developed several distinct variants. "Original intent" originalism, associated with early proponents like Attorney General Edwin Meese, focuses on the subjective intentions of the framers. This approach has been criticized for the difficulty of identifying a unified intent among the diverse delegates to the Constitutional Convention. "Original public meaning" originalism, championed by Justice Antonin Scalia and other textualists, instead asks how a reasonable person would have understood the constitutional text at the time of ratification. This version avoids the intent problem by focusing on objective linguistic meaning rather than subjective mental states.

Living constitutionalists object that even original public meaning originalism faces insuperable difficulties. Constitutional language often employed broad, abstract terms—"due process," "equal protection," "cruel and unusual"—precisely because the framers recognized they could not anticipate all future circumstances. These abstract provisions, living constitutionalists argue, were designed to be given content by future generations applying enduring principles to new situations. The Equal Protection Clause, for example, expresses a principle of equality that condemns forms of discrimination the framers never contemplated.

Originalists respond that living constitutionalism effectively grants judges the power to amend the Constitution, bypassing the formal amendment process specified in Article V. If judges can update constitutional meaning to reflect evolving values, critics argue, they become unelected legislators rather than interpreters of law. Originalism, by contrast, constrains judicial discretion by tying interpretation to historical evidence that exists independent of judges' policy preferences.

Some scholars have proposed hybrid approaches that attempt to reconcile these competing methodologies. Bruce Ackerman's theory of "constitutional moments" suggests that informal constitutional change can occur through sustained political mobilization, even without formal amendment. Jack Balkin's "living originalism" argues that fidelity to original meaning requires applying abstract constitutional principles to contemporary conditions, combining originalist premises with living constitutionalist conclusions.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp2-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Originalism is the only legitimate approach to constitutional interpretation." },
      { letter: "B", text: "The debate between originalism and living constitutionalism involves fundamental disagreements about interpretive methodology, with various hybrid approaches attempting to bridge the divide." },
      { letter: "C", text: "Living constitutionalism has been definitively refuted by originalist scholars." },
      { letter: "D", text: "Constitutional interpretation should focus exclusively on the subjective intentions of the framers." },
      { letter: "E", text: "The formal amendment process in Article V is the only legitimate means of constitutional change." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the debate between originalism and living constitutionalism, different variants within originalism, criticisms from each side, and hybrid approaches. Answer B captures this comprehensive overview.",
    difficulty: "medium",
    passageId: "rc-exp2-p1",
  },
  {
    id: "rc-exp2-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, original public meaning originalism differs from original intent originalism in that it",
    answerChoices: [
      { letter: "A", text: "focuses on objective linguistic meaning rather than the framers' subjective intentions" },
      { letter: "B", text: "allows judges to update constitutional meaning over time" },
      { letter: "C", text: "rejects all forms of historical evidence in interpretation" },
      { letter: "D", text: "emphasizes the importance of formal constitutional amendments" },
      { letter: "E", text: "was developed by living constitutionalists as a compromise position" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that original public meaning originalism 'asks how a reasonable person would have understood the constitutional text' and 'avoids the intent problem by focusing on objective linguistic meaning rather than subjective mental states.'",
    difficulty: "easy",
    passageId: "rc-exp2-p1",
  },
  {
    id: "rc-exp2-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, living constitutionalists would most likely argue that the use of abstract language in the Constitution",
    answerChoices: [
      { letter: "A", text: "was an error that should be corrected through formal amendment" },
      { letter: "B", text: "demonstrates that the framers expected future generations to apply constitutional principles to new circumstances" },
      { letter: "C", text: "makes constitutional interpretation impossible" },
      { letter: "D", text: "supports the case for strict originalist interpretation" },
      { letter: "E", text: "was intended to limit judicial discretion" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that living constitutionalists argue the framers used 'broad, abstract terms' precisely because they 'could not anticipate all future circumstances' and these provisions 'were designed to be given content by future generations applying enduring principles to new situations.'",
    difficulty: "medium",
    passageId: "rc-exp2-p1",
  },
  {
    id: "rc-exp2-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions the Equal Protection Clause primarily in order to",
    answerChoices: [
      { letter: "A", text: "provide an example of a constitutional provision that living constitutionalists cite in support of their position" },
      { letter: "B", text: "criticize the Supreme Court's interpretation of that clause" },
      { letter: "C", text: "argue that the framers held discriminatory views" },
      { letter: "D", text: "demonstrate the superiority of originalist methodology" },
      { letter: "E", text: "explain why constitutional amendments are necessary" },
    ],
    correctAnswer: "A",
    explanation: "The Equal Protection Clause example appears in the paragraph presenting living constitutionalists' arguments. It illustrates their claim that abstract provisions 'express a principle' that 'condemns forms of discrimination the framers never contemplated.'",
    difficulty: "medium",
    passageId: "rc-exp2-p1",
  },
  {
    id: "rc-exp2-005",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage suggests that originalists' criticism of living constitutionalism is based primarily on concerns about",
    answerChoices: [
      { letter: "A", text: "the historical accuracy of living constitutionalist interpretations" },
      { letter: "B", text: "judges exceeding their proper role by effectively amending the Constitution" },
      { letter: "C", text: "the difficulty of understanding eighteenth-century language" },
      { letter: "D", text: "the failure of living constitutionalists to respect precedent" },
      { letter: "E", text: "the influence of foreign legal systems on American law" },
    ],
    correctAnswer: "B",
    explanation: "The passage states originalists argue that 'living constitutionalism effectively grants judges the power to amend the Constitution, bypassing the formal amendment process' and that judges 'become unelected legislators rather than interpreters of law.'",
    difficulty: "medium",
    passageId: "rc-exp2-p1",
  },
  {
    id: "rc-exp2-006",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's presentation of the debate between originalism and living constitutionalism is best characterized as",
    answerChoices: [
      { letter: "A", text: "strongly partisan in favor of originalism" },
      { letter: "B", text: "dismissive of both approaches as inadequate" },
      { letter: "C", text: "balanced and explanatory, presenting multiple perspectives without advocating for a particular view" },
      { letter: "D", text: "skeptical of judicial review in general" },
      { letter: "E", text: "enthusiastic about hybrid approaches while rejecting traditional methods" },
    ],
    correctAnswer: "C",
    explanation: "The author presents originalist arguments, living constitutionalist objections, and originalist responses without taking sides. The passage also discusses hybrid approaches neutrally. This reflects balanced, expository treatment.",
    difficulty: "medium",
    passageId: "rc-exp2-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - CLIMATE CHANGE
// ============================================

const passage2 = `The science of climate change attribution—determining whether and to what extent human activities have influenced specific weather events—has advanced dramatically over the past two decades. While scientists have long understood that greenhouse gas emissions are warming the planet overall, connecting that global trend to particular floods, droughts, or heat waves required new methodological approaches and vastly increased computational power.

Attribution studies typically employ a technique called "fractional attributable risk." Researchers run climate models twice: once with historical greenhouse gas concentrations and once with pre-industrial levels. By comparing how often a particular type of extreme event occurs in each scenario, scientists can estimate how much human influence has changed the probability of such events. A study might conclude, for example, that a specific heat wave was made three times more likely by climate change, or that its intensity was increased by 2 degrees Celsius.

Early attribution work focused on temperature extremes, which showed the clearest climate change signal. The 2003 European heat wave, which caused tens of thousands of excess deaths, became a landmark case. Researchers estimated that climate change had at least doubled the likelihood of such an event. Subsequent studies of other extreme heat events have generally found even stronger attribution signals, reflecting both improved methodology and accelerating warming.

Attribution of precipitation events has proven more challenging. While climate change is expected to intensify the hydrological cycle—warmer air holds more moisture, leading to heavier rainfall when precipitation does occur—natural variability in precipitation patterns is greater than for temperature. Hurricane attribution faces similar complications, as fewer hurricanes occur each year than heat waves, limiting the statistical power of analyses. Nevertheless, attribution studies have linked specific hurricanes' unprecedented rainfall to climate change, even when overall storm frequency shows no clear trend.

Some scientists caution against overinterpreting attribution findings. No single weather event can be said to have been "caused" by climate change; rather, human influence altered the dice from which natural variability draws. Critics also note that attribution studies often appear shortly after disaster strikes, potentially before all relevant data have been analyzed. Defenders respond that rapid attribution serves an important purpose: connecting the abstract concept of climate change to experienced weather helps the public understand its real-world consequences.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp2-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Climate change attribution science has proven that all extreme weather events are caused by human emissions." },
      { letter: "B", text: "Climate change attribution has become a sophisticated field that can quantify human influence on extreme weather events, though it faces methodological challenges and limitations." },
      { letter: "C", text: "The 2003 European heat wave was the most significant weather event in recent history." },
      { letter: "D", text: "Rapid attribution studies following disasters are unreliable and should be discontinued." },
      { letter: "E", text: "Hurricane attribution is impossible due to natural variability." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the development of attribution science, its methods, successful applications, challenges with different event types, and debates about its limitations. Answer B captures this balanced overview.",
    difficulty: "medium",
    passageId: "rc-exp2-p2",
  },
  {
    id: "rc-exp2-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, fractional attributable risk methodology involves",
    answerChoices: [
      { letter: "A", text: "measuring greenhouse gas concentrations at weather monitoring stations" },
      { letter: "B", text: "comparing climate model results with and without historical greenhouse gas levels" },
      { letter: "C", text: "surveying public perceptions of climate change" },
      { letter: "D", text: "analyzing ice cores to reconstruct historical temperatures" },
      { letter: "E", text: "tracking individual storms from formation to dissipation" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that researchers 'run climate models twice: once with historical greenhouse gas concentrations and once with pre-industrial levels' to estimate human influence on event probability.",
    difficulty: "easy",
    passageId: "rc-exp2-p2",
  },
  {
    id: "rc-exp2-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that attribution of precipitation events is more difficult than attribution of temperature events primarily because",
    answerChoices: [
      { letter: "A", text: "precipitation cannot be accurately measured" },
      { letter: "B", text: "natural variability in precipitation is relatively greater than for temperature" },
      { letter: "C", text: "climate models cannot simulate precipitation" },
      { letter: "D", text: "scientists disagree about whether climate change affects precipitation" },
      { letter: "E", text: "precipitation events cause less damage than temperature extremes" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'natural variability in precipitation patterns is greater than for temperature,' making it harder to detect the climate change signal amid background variation.",
    difficulty: "medium",
    passageId: "rc-exp2-p2",
  },
  {
    id: "rc-exp2-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions the 2003 European heat wave primarily to",
    answerChoices: [
      { letter: "A", text: "argue that climate change poses a serious threat to human health" },
      { letter: "B", text: "illustrate a landmark application of attribution methodology" },
      { letter: "C", text: "criticize European governments for inadequate disaster preparedness" },
      { letter: "D", text: "demonstrate the limitations of early attribution studies" },
      { letter: "E", text: "compare European and American approaches to climate science" },
    ],
    correctAnswer: "B",
    explanation: "The 2003 heat wave is described as 'a landmark case' in early attribution work, where researchers applied the methodology to estimate that 'climate change had at least doubled the likelihood of such an event.'",
    difficulty: "medium",
    passageId: "rc-exp2-p2",
  },
  {
    id: "rc-exp2-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following would defenders of rapid attribution studies most likely cite as a benefit?",
    answerChoices: [
      { letter: "A", text: "Rapid studies produce more accurate results than slower analyses." },
      { letter: "B", text: "Rapid attribution helps people connect abstract climate science to their lived experiences." },
      { letter: "C", text: "Rapid studies reduce the cost of climate research." },
      { letter: "D", text: "Rapid attribution eliminates the need for long-term climate monitoring." },
      { letter: "E", text: "Rapid studies settle scientific debates more quickly." },
    ],
    correctAnswer: "B",
    explanation: "The passage states that defenders argue 'rapid attribution serves an important purpose: connecting the abstract concept of climate change to experienced weather helps the public understand its real-world consequences.'",
    difficulty: "medium",
    passageId: "rc-exp2-p2",
  },
  {
    id: "rc-exp2-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most weaken the criticism mentioned in the final paragraph?",
    answerChoices: [
      { letter: "A", text: "Attribution studies published years after an event reach similar conclusions to rapid studies." },
      { letter: "B", text: "The public pays more attention to weather disasters than to climate reports." },
      { letter: "C", text: "Climate models have become more accurate over time." },
      { letter: "D", text: "Greenhouse gas emissions continue to increase each year." },
      { letter: "E", text: "Some scientists have stopped conducting attribution research." },
    ],
    correctAnswer: "A",
    explanation: "The criticism is that rapid studies 'appear shortly after disaster strikes, potentially before all relevant data have been analyzed.' If later, more thorough studies reach similar conclusions, this would suggest rapid studies are reliable despite their timing.",
    difficulty: "hard",
    passageId: "rc-exp2-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - LITERARY CRITICISM
// ============================================

const passage3 = `The "death of the author" thesis, most influentially articulated by Roland Barthes in his 1967 essay of that name, fundamentally challenged traditional approaches to literary interpretation. Barthes argued that treating the author as the origin and ultimate arbiter of textual meaning imposes a false limitation on interpretation. The text, once written, exists independently of its creator; readers generate meaning through their own encounters with language, unconstrained by authorial intention.

Barthes situated his argument within a broader critique of bourgeois ideology. Traditional author-centered criticism, he contended, reflected a capitalist cult of individual genius that obscured the social nature of language and meaning-making. Every text, Barthes insisted, is a "tissue of quotations" drawn from countless cultural sources. The Author-God, conceived as the unique origin of textual meaning, was a modern invention that needed to be overthrown to liberate reading.

Michel Foucault's related essay "What Is an Author?" took a different approach to destabilizing authorship. Rather than declaring the author dead, Foucault analyzed the "author-function"—the ways in which the concept of authorship operates within discourse. Foucault noted that the author's name serves to classify, differentiate, and establish relationships among texts. This functional analysis neither affirmed nor denied the author's relevance but shifted attention to how the category of authorship shapes interpretation and circulation.

Critics of the death of the author thesis have mounted several objections. Intentionalists argue that understanding what a text means requires understanding what its author meant; otherwise, we lose the ability to distinguish between what a text says and how it might be misread. Others note the political complications: just as marginalized authors began gaining recognition for their distinctive voices, literary theory declared authorship irrelevant. Feminist and postcolonial critics have emphasized that knowing an author's identity and circumstances can be essential to understanding texts that address specific experiences of oppression.

Contemporary approaches often seek middle ground. Many scholars acknowledge that authorial intention is neither fully accessible nor absolutely determinative while maintaining that biographical and historical context can illuminate textual meaning. The author, in this view, is neither sovereign over meaning nor wholly irrelevant but one factor among many that readers legitimately consider.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp2-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Roland Barthes definitively proved that authors are irrelevant to textual interpretation." },
      { letter: "B", text: "The death of the author thesis has been completely rejected by contemporary literary scholars." },
      { letter: "C", text: "The death of the author thesis challenged traditional interpretation, generated significant debate, and has been moderated by contemporary approaches seeking middle ground." },
      { letter: "D", text: "Michel Foucault's approach to authorship is superior to Barthes's." },
      { letter: "E", text: "Feminist and postcolonial critics agree with Barthes that authorship is irrelevant." },
    ],
    correctAnswer: "C",
    explanation: "The passage presents Barthes's thesis, Foucault's related analysis, various criticisms, and contemporary moderate approaches. Answer C accurately captures this trajectory.",
    difficulty: "medium",
    passageId: "rc-exp2-p3",
  },
  {
    id: "rc-exp2-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, Barthes characterized traditional author-centered criticism as",
    answerChoices: [
      { letter: "A", text: "a scientifically rigorous approach to literary analysis" },
      { letter: "B", text: "a reflection of bourgeois ideology and the cult of individual genius" },
      { letter: "C", text: "the most effective method for understanding marginalized voices" },
      { letter: "D", text: "a necessary foundation for all future literary theory" },
      { letter: "E", text: "an approach that properly emphasizes the social nature of language" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Barthes 'situated his argument within a broader critique of bourgeois ideology' and that traditional criticism 'reflected a capitalist cult of individual genius.'",
    difficulty: "easy",
    passageId: "rc-exp2-p3",
  },
  {
    id: "rc-exp2-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, Foucault's approach to authorship differed from Barthes's primarily in that Foucault",
    answerChoices: [
      { letter: "A", text: "defended the traditional concept of authorship against Barthes's critique" },
      { letter: "B", text: "analyzed how the concept of authorship functions rather than declaring the author dead" },
      { letter: "C", text: "focused exclusively on the economic aspects of literary production" },
      { letter: "D", text: "rejected all forms of literary interpretation" },
      { letter: "E", text: "argued that readers have no role in creating meaning" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that Foucault 'analyzed the author-function' and his analysis 'neither affirmed nor denied the author's relevance but shifted attention to how the category of authorship shapes interpretation.' Unlike Barthes, he did not declare the author 'dead.'",
    difficulty: "medium",
    passageId: "rc-exp2-p3",
  },
  {
    id: "rc-exp2-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions feminist and postcolonial critics primarily in order to",
    answerChoices: [
      { letter: "A", text: "support Barthes's thesis about the death of the author" },
      { letter: "B", text: "illustrate one type of objection to the irrelevance of authorship" },
      { letter: "C", text: "argue that literary criticism should focus exclusively on issues of identity" },
      { letter: "D", text: "contrast European and non-European approaches to interpretation" },
      { letter: "E", text: "demonstrate that Foucault's analysis is politically problematic" },
    ],
    correctAnswer: "B",
    explanation: "Feminist and postcolonial critics are mentioned in the paragraph presenting criticisms of the death of the author thesis. They 'emphasized that knowing an author's identity and circumstances can be essential,' objecting to the view that authorship is irrelevant.",
    difficulty: "medium",
    passageId: "rc-exp2-p3",
  },
  {
    id: "rc-exp2-017",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage suggests that intentionalists would object to the death of the author thesis on the grounds that",
    answerChoices: [
      { letter: "A", text: "it overvalues the economic aspects of literary production" },
      { letter: "B", text: "without authorial intention, we cannot distinguish correct readings from misreadings" },
      { letter: "C", text: "it gives too much power to academic critics" },
      { letter: "D", text: "it fails to account for the influence of translators on meaning" },
      { letter: "E", text: "it relies too heavily on psychoanalytic theory" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Intentionalists argue that understanding what a text means requires understanding what its author meant; otherwise, we lose the ability to distinguish between what a text says and how it might be misread.'",
    difficulty: "medium",
    passageId: "rc-exp2-p3",
  },
  {
    id: "rc-exp2-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A thesis is proposed, supporting evidence is presented, and the thesis is affirmed." },
      { letter: "B", text: "An influential argument is presented, a related perspective is discussed, criticisms are raised, and contemporary moderate positions are described." },
      { letter: "C", text: "Two competing theories are compared and one is shown to be superior." },
      { letter: "D", text: "A problem is identified, several solutions are rejected, and a new solution is proposed." },
      { letter: "E", text: "A historical narrative traces the development of a literary genre." },
    ],
    correctAnswer: "B",
    explanation: "The passage presents Barthes's argument (paragraphs 1-2), discusses Foucault's related perspective (paragraph 3), raises criticisms (paragraph 4), and describes contemporary moderate positions (final paragraph).",
    difficulty: "hard",
    passageId: "rc-exp2-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - URBAN PLANNING
// ============================================

const passage4 = `The concept of "urban renewal" has undergone dramatic reconceptualization since its mid-twentieth century heyday. In the United States, urban renewal emerged in the 1950s and 1960s as a federally-funded program to revitalize declining inner cities. Local governments used eminent domain to acquire properties in designated "blighted" areas, demolish existing structures, and transfer land to private developers for reconstruction. Proponents promised modern, efficient cities cleansed of slum conditions.

The program's human costs quickly became apparent. Urban renewal disproportionately targeted African American neighborhoods, leading critics like James Baldwin to call it "Negro removal." Entire communities were displaced, their social networks destroyed. Historic architecture was razed to make way for modernist towers and highways. Robert Moses's aggressive transformation of New York became the archetypal example: while he created parks and expressways, he also bulldozed viable neighborhoods and separated communities with traffic arteries that devastated local commerce.

Jane Jacobs emerged as urban renewal's most influential critic. Her 1961 book "The Death and Life of Great American Cities" challenged the planning orthodoxy with a counterintuitive defense of dense, mixed-use, apparently chaotic urban neighborhoods. Jacobs argued that the qualities planners sought to eliminate—crowded sidewalks, mixture of old and new buildings, combination of residential and commercial uses—actually generated the safety, economic vitality, and social cohesion that made urban life workable. Order imposed from above destroyed the organic complexity that made neighborhoods function.

Jacobs's ideas gained adherents gradually, eventually transforming planning practice. Contemporary planners generally favor incremental improvement over wholesale demolition, historic preservation over modernist replacement, and community participation over top-down imposition. "New Urbanism" explicitly draws on Jacobs's principles, advocating walkable, mixed-use neighborhoods designed at human scale rather than automobile scale.

However, the pendulum may have swung too far. Some scholars argue that contemporary planning orthodoxy sometimes romanticizes historic neighborhoods while ignoring genuinely inadequate housing conditions. The emphasis on preservation and community input can be captured by affluent homeowners seeking to exclude density and affordable housing. The very neighborhoods Jacobs celebrated have become so desirable that they are now unaffordable to working-class residents. Whether contemporary approaches can address these contradictions while avoiding the brutalities of old-style urban renewal remains an open question.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp2-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "advocate for a return to mid-century urban renewal practices" },
      { letter: "B", text: "trace the evolution of urban planning philosophy from urban renewal through its critique to contemporary challenges" },
      { letter: "C", text: "argue that Jane Jacobs's ideas have been proven completely wrong" },
      { letter: "D", text: "explain the legal mechanisms by which eminent domain operates" },
      { letter: "E", text: "compare urban planning practices in the United States and Europe" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces urban renewal's rise and problems, Jacobs's critique, the influence of her ideas on contemporary planning, and emerging concerns about the new orthodoxy. Answer B captures this historical trajectory.",
    difficulty: "medium",
    passageId: "rc-exp2-p4",
  },
  {
    id: "rc-exp2-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, Jane Jacobs argued that",
    answerChoices: [
      { letter: "A", text: "urban planners should impose greater order on chaotic neighborhoods" },
      { letter: "B", text: "qualities that planners sought to eliminate actually made neighborhoods function well" },
      { letter: "C", text: "modernist architecture was superior to historic buildings" },
      { letter: "D", text: "automobiles should be the primary focus of urban design" },
      { letter: "E", text: "federal funding for urban renewal should be increased" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that Jacobs 'argued that the qualities planners sought to eliminate—crowded sidewalks, mixture of old and new buildings, combination of residential and commercial uses—actually generated the safety, economic vitality, and social cohesion that made urban life workable.'",
    difficulty: "easy",
    passageId: "rc-exp2-p4",
  },
  {
    id: "rc-exp2-021",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions James Baldwin's characterization of urban renewal as 'Negro removal' primarily to",
    answerChoices: [
      { letter: "A", text: "illustrate the racially disproportionate impact of urban renewal programs" },
      { letter: "B", text: "criticize Baldwin's literary techniques" },
      { letter: "C", text: "argue that urban renewal was not truly intended to improve cities" },
      { letter: "D", text: "contrast Baldwin's views with those of Robert Moses" },
      { letter: "E", text: "defend the goals of urban renewal advocates" },
    ],
    correctAnswer: "A",
    explanation: "The Baldwin quote appears in the paragraph discussing urban renewal's 'human costs,' specifically that the program 'disproportionately targeted African American neighborhoods.' The quote illustrates this racially disparate impact.",
    difficulty: "medium",
    passageId: "rc-exp2-p4",
  },
  {
    id: "rc-exp2-022",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, which of the following would proponents of New Urbanism most likely support?",
    answerChoices: [
      { letter: "A", text: "Demolishing historic neighborhoods to build modern highways" },
      { letter: "B", text: "Designing neighborhoods that prioritize pedestrians over automobiles" },
      { letter: "C", text: "Separating residential and commercial areas into distinct zones" },
      { letter: "D", text: "Reducing population density to improve quality of life" },
      { letter: "E", text: "Centralizing planning decisions in federal agencies" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that New Urbanism 'explicitly draws on Jacobs's principles, advocating walkable, mixed-use neighborhoods designed at human scale rather than automobile scale.' This indicates support for pedestrian-oriented design.",
    difficulty: "medium",
    passageId: "rc-exp2-p4",
  },
  {
    id: "rc-exp2-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that one unintended consequence of contemporary planning's success has been",
    answerChoices: [
      { letter: "A", text: "increased federal funding for urban renewal" },
      { letter: "B", text: "the return of slum conditions in inner cities" },
      { letter: "C", text: "that celebrated neighborhoods have become unaffordable to working-class residents" },
      { letter: "D", text: "widespread rejection of historic preservation" },
      { letter: "E", text: "decreased interest in urban living" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'The very neighborhoods Jacobs celebrated have become so desirable that they are now unaffordable to working-class residents.' This unintended consequence emerged from the success of Jacobs-influenced approaches.",
    difficulty: "medium",
    passageId: "rc-exp2-p4",
  },
  {
    id: "rc-exp2-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward contemporary urban planning approaches can best be described as",
    answerChoices: [
      { letter: "A", text: "unreserved enthusiasm" },
      { letter: "B", text: "complete rejection" },
      { letter: "C", text: "appreciative of improvements over urban renewal while acknowledging emerging challenges" },
      { letter: "D", text: "nostalgic for mid-century practices" },
      { letter: "E", text: "indifferent to outcomes" },
    ],
    correctAnswer: "C",
    explanation: "The author describes how contemporary planning improved on urban renewal's 'brutalities' but also notes that 'the pendulum may have swung too far' and identifies challenges like affordability. This reflects appreciation with acknowledgment of new problems.",
    difficulty: "medium",
    passageId: "rc-exp2-p4",
  },
];

// Export all RC questions from Set 2
export const rcQuestionsExpSet2: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet2 = {
  passage1: { id: "rc-exp2-p1", content: passage1, topic: "law", title: "Constitutional Interpretation" },
  passage2: { id: "rc-exp2-p2", content: passage2, topic: "natural-sciences", title: "Climate Change Attribution" },
  passage3: { id: "rc-exp2-p3", content: passage3, topic: "humanities", title: "Death of the Author" },
  passage4: { id: "rc-exp2-p4", content: passage4, topic: "social-sciences", title: "Urban Renewal" },
};
