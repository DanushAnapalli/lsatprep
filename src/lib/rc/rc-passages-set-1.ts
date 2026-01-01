// Reading Comprehension Expansion Set 1
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - INTELLECTUAL PROPERTY
// ============================================

const passage1 = `The doctrine of fair use in copyright law has long been one of the most contentious and unpredictable areas of intellectual property jurisprudence. Codified in Section 107 of the Copyright Act of 1976, fair use allows for limited reproduction of copyrighted works without requiring permission from the copyright holder. The statute identifies four factors courts must consider: the purpose and character of the use, the nature of the copyrighted work, the amount used in relation to the whole, and the effect on the potential market for the original work.

The transformative use doctrine, first articulated by Judge Pierre Leval and later adopted by the Supreme Court in Campbell v. Acuff-Rose Music (1994), has become the dominant framework for analyzing the first fair use factor. A use is transformative if it adds something new, with a further purpose or different character, altering the original with new expression, meaning, or message. This approach shifted fair use analysis away from mere commercial/noncommercial distinctions toward a more nuanced inquiry into whether the secondary use serves a purpose distinct from the original.

Critics of the transformative use doctrine argue that it has expanded fair use beyond its statutory boundaries, effectively creating judicial legislation that undermines copyright holders' legitimate economic interests. They point to cases involving appropriation art and search engine caching where courts have found transformative use despite substantial copying. These critics contend that the doctrine conflates the first factor with the fourth, since any genuinely transformative use will almost by definition serve a different market.

Defenders of the doctrine respond that transformative use reflects the constitutional purpose of copyright: to promote the progress of science and useful arts. By protecting works that build upon existing creations in new and valuable ways, the doctrine ensures that copyright does not become a barrier to innovation and cultural development. They argue that a narrow interpretation of fair use would stifle precisely the kind of creative activity copyright was designed to encourage.

Recent developments in artificial intelligence and machine learning have introduced new challenges to fair use doctrine. AI systems often require training on vast datasets of copyrighted works, raising questions about whether such training constitutes fair use. Some argue that AI training is inherently transformative because the resulting model produces entirely new outputs rather than copying the training data. Others contend that the scale of copying involved—often millions of works—and the commercial nature of AI development weigh heavily against fair use. Courts have only begun to address these questions, and their resolution will have profound implications for both AI development and copyright law.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp1-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The transformative use doctrine has replaced the four-factor test as the primary framework for fair use analysis." },
      { letter: "B", text: "Fair use doctrine has evolved through judicial interpretation, with the transformative use standard becoming central while facing both criticism and new challenges from emerging technologies." },
      { letter: "C", text: "Courts have consistently applied fair use doctrine incorrectly by favoring copyright holders over creative innovators." },
      { letter: "D", text: "Artificial intelligence development poses the greatest threat to copyright law since the invention of the printing press." },
      { letter: "E", text: "The constitutional purpose of copyright law has been undermined by judicial expansion of fair use protections." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution of fair use doctrine, focusing on the rise of transformative use analysis, the debate between critics and defenders, and emerging challenges from AI. Answer B captures this comprehensive scope without overstating any particular position.",
    difficulty: "medium",
    passageId: "rc-exp1-p1",
  },
  {
    id: "rc-exp1-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author mentions 'appropriation art and search engine caching' primarily in order to",
    answerChoices: [
      { letter: "A", text: "provide examples of unambiguously transformative uses" },
      { letter: "B", text: "illustrate cases critics cite as evidence that transformative use doctrine has gone too far" },
      { letter: "C", text: "demonstrate the economic harm caused by overly broad fair use interpretations" },
      { letter: "D", text: "contrast legitimate fair uses with copyright infringement" },
      { letter: "E", text: "support the author's argument that transformative use should be more narrowly defined" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph presenting critics' views. The critics point to these cases where 'courts have found transformative use despite substantial copying' as evidence that the doctrine has expanded beyond appropriate limits.",
    difficulty: "medium",
    passageId: "rc-exp1-p1",
  },
  {
    id: "rc-exp1-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, defenders of the transformative use doctrine would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "Commercial uses of copyrighted works should never qualify as fair use." },
      { letter: "B", text: "Copyright law should prioritize the economic interests of original creators above all other considerations." },
      { letter: "C", text: "The legal standard for fair use should remain static regardless of technological changes." },
      { letter: "D", text: "Creative works that build on existing materials in novel ways advance the goals underlying copyright protection." },
      { letter: "E", text: "Judicial interpretation of fair use has remained faithful to the original intent of the Copyright Act of 1976." },
    ],
    correctAnswer: "D",
    explanation: "Defenders argue that 'transformative use reflects the constitutional purpose of copyright' and that 'protecting works that build upon existing creations in new and valuable ways...ensures that copyright does not become a barrier to innovation and cultural development.'",
    difficulty: "medium",
    passageId: "rc-exp1-p1",
  },
  {
    id: "rc-exp1-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, which of the following is one of the four factors courts must consider in fair use analysis?",
    answerChoices: [
      { letter: "A", text: "Whether the use is transformative in nature" },
      { letter: "B", text: "The effect on the potential market for the original work" },
      { letter: "C", text: "Whether the original work has been registered with the Copyright Office" },
      { letter: "D", text: "The artistic merit of the secondary use" },
      { letter: "E", text: "Whether the copyright holder was given an opportunity to license the use" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly lists the four statutory factors, including 'the effect on the potential market for the original work.'",
    difficulty: "easy",
    passageId: "rc-exp1-p1",
  },
  {
    id: "rc-exp1-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the debate between critics and defenders of transformative use doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive of the critics' position" },
      { letter: "B", text: "dismissive of both sides' arguments" },
      { letter: "C", text: "neutral and expository, presenting both perspectives" },
      { letter: "D", text: "cautiously optimistic about recent judicial developments" },
      { letter: "E", text: "concerned that the debate distracts from more important issues" },
    ],
    correctAnswer: "C",
    explanation: "The author presents the critics' arguments ('Critics argue...They point to...They contend...') and defenders' responses ('Defenders respond...They argue...') without indicating which view is correct. The passage maintains an objective, descriptive tone throughout.",
    difficulty: "medium",
    passageId: "rc-exp1-p1",
  },
  {
    id: "rc-exp1-006",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage most strongly suggests that the relationship between AI training and fair use doctrine is",
    answerChoices: [
      { letter: "A", text: "well-established in existing case law" },
      { letter: "B", text: "an emerging legal question with significant unresolved issues" },
      { letter: "C", text: "likely to be resolved in favor of AI developers" },
      { letter: "D", text: "irrelevant to the transformative use framework" },
      { letter: "E", text: "primarily a matter for legislative rather than judicial resolution" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Courts have only begun to address these questions' regarding AI and fair use, and that 'their resolution will have profound implications.' This indicates an emerging, unresolved legal issue rather than settled doctrine.",
    difficulty: "medium",
    passageId: "rc-exp1-p1",
  },
];

// ============================================
// PASSAGE 2: SCIENCE - MICROBIOME
// ============================================

const passage2 = `The human gut microbiome—the complex community of trillions of microorganisms residing in the gastrointestinal tract—has emerged as one of the most dynamic frontiers in biomedical research. Once dismissed as mere passengers or potential pathogens, these microbial inhabitants are now recognized as essential partners in human health, influencing everything from metabolism and immunity to neurological function and mental health.

Research has revealed that the gut microbiome plays a crucial role in digesting dietary components that human enzymes cannot process, particularly complex plant polysaccharides and fiber. Through fermentation, gut bacteria produce short-chain fatty acids (SCFAs) such as butyrate, propionate, and acetate. These metabolites serve as energy sources for intestinal cells, regulate inflammation, and influence systemic metabolism. Studies have demonstrated correlations between reduced SCFA production and conditions ranging from inflammatory bowel disease to obesity and type 2 diabetes.

The gut-brain axis represents perhaps the most surprising domain of microbiome influence. The enteric nervous system—sometimes called the "second brain"—contains more than 100 million neurons and maintains constant bidirectional communication with the central nervous system. Gut bacteria produce neurotransmitters including serotonin, dopamine, and gamma-aminobutyric acid (GABA), and alterations in microbiome composition have been associated with anxiety, depression, and even neurodegenerative conditions. Animal studies have shown that germ-free mice exhibit abnormal stress responses and social behaviors that can be normalized through microbial colonization.

The therapeutic potential of microbiome modulation has generated enormous interest. Fecal microbiota transplantation (FMT), in which gut bacteria from healthy donors are transferred to patients, has proven remarkably effective for treating recurrent Clostridioides difficile infection, achieving cure rates exceeding 90 percent when standard antibiotic therapies fail. Researchers are now investigating FMT for conditions including inflammatory bowel disease, metabolic syndrome, and even autism spectrum disorders, though results have been more variable.

However, translating microbiome research into clinical applications faces significant challenges. Individual microbiomes vary enormously due to genetics, diet, environment, and medication use, making it difficult to identify universal therapeutic targets. The sheer complexity of microbial communities—comprising hundreds of species interacting in intricate ecological networks—defies simple interventions. Moreover, correlation does not imply causation; many observed associations between microbiome alterations and disease may reflect consequences rather than causes. Despite these obstacles, the potential to harness the microbiome for preventing and treating human disease continues to drive one of biology's most active research areas.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp1-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The gut microbiome produces essential nutrients that humans cannot synthesize on their own." },
      { letter: "B", text: "The gut microbiome has emerged as an important area of biomedical research with significant implications for health, though translating findings into therapies remains challenging." },
      { letter: "C", text: "Fecal microbiota transplantation represents the most promising therapeutic application of microbiome research." },
      { letter: "D", text: "The connection between gut bacteria and brain function explains most mental health disorders." },
      { letter: "E", text: "Individual variation in microbiome composition makes personalized medicine impossible." },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the microbiome's various roles in health (metabolism, immunity, brain function), discusses therapeutic applications, and acknowledges significant challenges. Answer B captures this balanced overview.",
    difficulty: "medium",
    passageId: "rc-exp1-p2",
  },
  {
    id: "rc-exp1-008",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions 'germ-free mice' primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the use of animal models in microbiome research" },
      { letter: "B", text: "provide evidence supporting the influence of gut bacteria on behavior and neurological function" },
      { letter: "C", text: "demonstrate that humans and mice have identical microbiomes" },
      { letter: "D", text: "argue that sterile environments are detrimental to health" },
      { letter: "E", text: "contrast the scientific method used in microbiome research with other fields" },
    ],
    correctAnswer: "B",
    explanation: "The germ-free mice example appears in the paragraph discussing the gut-brain axis. These mice 'exhibit abnormal stress responses and social behaviors' that normalize with microbial colonization, supporting the claim that gut bacteria influence neurological and behavioral function.",
    difficulty: "medium",
    passageId: "rc-exp1-p2",
  },
  {
    id: "rc-exp1-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, short-chain fatty acids produced by gut bacteria",
    answerChoices: [
      { letter: "A", text: "are harmful byproducts of bacterial metabolism" },
      { letter: "B", text: "serve as energy sources for intestinal cells and regulate inflammation" },
      { letter: "C", text: "directly produce neurotransmitters such as serotonin" },
      { letter: "D", text: "are the primary target of fecal microbiota transplantation" },
      { letter: "E", text: "can only be produced when fiber is absent from the diet" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that SCFAs 'serve as energy sources for intestinal cells, regulate inflammation, and influence systemic metabolism.'",
    difficulty: "easy",
    passageId: "rc-exp1-p2",
  },
  {
    id: "rc-exp1-010",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, which of the following can be most reasonably inferred about fecal microbiota transplantation?",
    answerChoices: [
      { letter: "A", text: "It has been proven effective for all conditions related to microbiome dysfunction." },
      { letter: "B", text: "Its success in treating one condition does not guarantee effectiveness for other conditions." },
      { letter: "C", text: "It will eventually replace all antibiotic treatments." },
      { letter: "D", text: "It works by introducing specific identified bacterial species to patients." },
      { letter: "E", text: "It is too dangerous to use in clinical settings." },
    ],
    correctAnswer: "B",
    explanation: "The passage notes that FMT is 'remarkably effective' for C. difficile infection with over 90% cure rates, but 'results have been more variable' for other conditions like inflammatory bowel disease and metabolic syndrome. This suggests success in one application doesn't guarantee success in others.",
    difficulty: "medium",
    passageId: "rc-exp1-p2",
  },
  {
    id: "rc-exp1-011",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author's attitude toward the therapeutic potential of microbiome research can best be described as",
    answerChoices: [
      { letter: "A", text: "unreservedly enthusiastic" },
      { letter: "B", text: "deeply skeptical" },
      { letter: "C", text: "cautiously optimistic while acknowledging significant obstacles" },
      { letter: "D", text: "indifferent to practical applications" },
      { letter: "E", text: "critical of the current research approach" },
    ],
    correctAnswer: "C",
    explanation: "The author describes 'enormous interest' in therapeutic potential and successful applications like FMT, but also details 'significant challenges' including individual variation, complexity, and causation issues. The final sentence notes both 'obstacles' and continued research driven by 'potential,' indicating cautious optimism.",
    difficulty: "medium",
    passageId: "rc-exp1-p2",
  },
  {
    id: "rc-exp1-012",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following, if true, would most strengthen the author's suggestion that microbiome-disease correlations may not indicate causation?",
    answerChoices: [
      { letter: "A", text: "Patients who receive FMT show immediate improvements in symptoms." },
      { letter: "B", text: "Certain diseases cause metabolic changes that alter the composition of the gut microbiome." },
      { letter: "C", text: "Dietary changes affect both disease outcomes and microbiome composition." },
      { letter: "D", text: "Identical twins have more similar microbiomes than fraternal twins." },
      { letter: "E", text: "The gut microbiome develops primarily during the first years of life." },
    ],
    correctAnswer: "B",
    explanation: "The author notes that 'many observed associations between microbiome alterations and disease may reflect consequences rather than causes.' Answer B directly supports this by showing a mechanism where disease causes microbiome changes rather than vice versa.",
    difficulty: "hard",
    passageId: "rc-exp1-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - ARCHITECTURE
// ============================================

const passage3 = `The concept of "sustainable architecture" has undergone significant evolution since its emergence in the 1970s environmental movement. Early approaches focused narrowly on energy efficiency—insulation, passive solar design, and reduced consumption—treating buildings primarily as machines for controlling resource use. Contemporary sustainable architecture, by contrast, embraces a more holistic vision that encompasses environmental, social, and cultural dimensions of the built environment.

Proponents of biomimetic design represent one influential strand of contemporary sustainable architecture. These architects look to natural systems as models for solving design challenges. The Eastgate Centre in Harare, Zimbabwe, designed by Mick Pearce, exemplifies this approach. Inspired by self-cooling termite mounds, the building uses a passive ventilation system that eliminates the need for conventional air conditioning despite Harare's warm climate. By studying how termites maintain constant temperatures within their structures through strategic opening placement and air circulation, Pearce created a building that uses 90 percent less energy for climate control than comparable conventional structures.

A different approach, sometimes called regenerative design, argues that sustainability is insufficient as a goal. Rather than merely reducing harm, regenerative architects seek to create buildings and communities that actively improve environmental conditions. This might involve structures that clean air and water, generate more energy than they consume, or restore degraded ecosystems. The Bullitt Center in Seattle, designed to produce as much energy as it uses annually through solar panels while treating its own wastewater, represents an attempt to realize these ambitious goals.

Critics argue that sustainable architecture remains largely an elite pursuit, accessible primarily to wealthy clients and institutions that can afford premium costs and longer construction timelines. They point out that the most significant environmental impacts of the built environment come not from iconic green buildings but from the vast stock of ordinary structures—housing, offices, retail spaces—that constitute the bulk of construction worldwide. Without addressing affordability and scalability, critics contend, sustainable architecture risks becoming an aesthetic movement rather than a practical solution to environmental challenges.

Some architects have responded to this critique by emphasizing vernacular building traditions. Traditional construction methods often evolved precisely because they made efficient use of locally available materials and passive climate control strategies. Adobe construction in desert climates, for example, provides excellent thermal mass that moderates temperature swings. By recovering and adapting these traditional techniques, architects can potentially achieve sustainability goals while reducing costs and supporting local building cultures.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp1-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Biomimetic design is the most effective approach to sustainable architecture." },
      { letter: "B", text: "Sustainable architecture has evolved to encompass multiple approaches, though it faces critiques regarding accessibility and practical impact." },
      { letter: "C", text: "Traditional vernacular building techniques are superior to modern sustainable design methods." },
      { letter: "D", text: "The Bullitt Center represents the ideal model for all future construction projects." },
      { letter: "E", text: "Critics of sustainable architecture have successfully undermined the movement's credibility." },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the evolution of sustainable architecture from narrow energy focus to multiple contemporary approaches (biomimetic, regenerative, vernacular), while also presenting critiques about accessibility and scalability. Answer B captures this comprehensive scope.",
    difficulty: "medium",
    passageId: "rc-exp1-p3",
  },
  {
    id: "rc-exp1-014",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses the Eastgate Centre in Harare primarily to",
    answerChoices: [
      { letter: "A", text: "criticize conventional air conditioning systems" },
      { letter: "B", text: "illustrate how biomimetic design principles can be applied in architecture" },
      { letter: "C", text: "argue that African architecture is more sustainable than Western architecture" },
      { letter: "D", text: "demonstrate the limitations of sustainable design in warm climates" },
      { letter: "E", text: "contrast regenerative design with earlier sustainability approaches" },
    ],
    correctAnswer: "B",
    explanation: "The Eastgate Centre example appears in the paragraph introducing biomimetic design. The building 'exemplifies this approach' by being 'inspired by self-cooling termite mounds' to create an energy-efficient ventilation system.",
    difficulty: "easy",
    passageId: "rc-exp1-p3",
  },
  {
    id: "rc-exp1-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, advocates of regenerative design would most likely characterize conventional sustainable architecture as",
    answerChoices: [
      { letter: "A", text: "a harmful approach that worsens environmental conditions" },
      { letter: "B", text: "a positive but insufficiently ambitious response to environmental challenges" },
      { letter: "C", text: "a successful model that should be replicated globally" },
      { letter: "D", text: "an approach that focuses too heavily on cultural dimensions" },
      { letter: "E", text: "a proven solution to all environmental problems in the built environment" },
    ],
    correctAnswer: "B",
    explanation: "Regenerative design 'argues that sustainability is insufficient as a goal' and seeks buildings that 'actively improve environmental conditions' rather than 'merely reducing harm.' This suggests they view conventional sustainability as positive but not ambitious enough.",
    difficulty: "medium",
    passageId: "rc-exp1-p3",
  },
  {
    id: "rc-exp1-016",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, critics of sustainable architecture argue that",
    answerChoices: [
      { letter: "A", text: "biomimetic design principles are fundamentally flawed" },
      { letter: "B", text: "traditional building methods should never be modified" },
      { letter: "C", text: "the movement primarily benefits wealthy clients and institutions" },
      { letter: "D", text: "energy efficiency is no longer an important goal" },
      { letter: "E", text: "the Bullitt Center failed to achieve its stated objectives" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that critics argue sustainable architecture 'remains largely an elite pursuit, accessible primarily to wealthy clients and institutions that can afford premium costs.'",
    difficulty: "easy",
    passageId: "rc-exp1-p3",
  },
  {
    id: "rc-exp1-017",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, which of the following projects would best exemplify the response to critics described in the final paragraph?",
    answerChoices: [
      { letter: "A", text: "A high-tech office building that generates its own renewable energy" },
      { letter: "B", text: "A housing development using local stone and passive solar design based on regional building traditions" },
      { letter: "C", text: "A museum designed to look like a natural landform" },
      { letter: "D", text: "A factory that cleans more water than it uses" },
      { letter: "E", text: "A skyscraper with an iconic, award-winning facade" },
    ],
    correctAnswer: "B",
    explanation: "The final paragraph describes architects who respond to accessibility critiques by 'emphasizing vernacular building traditions' that use 'locally available materials and passive climate control strategies.' Answer B describes exactly this approach—local materials and passive solar based on regional traditions.",
    difficulty: "medium",
    passageId: "rc-exp1-p3",
  },
  {
    id: "rc-exp1-018",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A thesis is stated, evidence is provided, and a conclusion is drawn." },
      { letter: "B", text: "A historical development is traced, current approaches are described, criticism is presented, and a response to criticism is offered." },
      { letter: "C", text: "Two opposing viewpoints are presented and then reconciled." },
      { letter: "D", text: "A problem is identified, multiple solutions are rejected, and a new solution is proposed." },
      { letter: "E", text: "A scientific theory is explained, experiments are described, and limitations are acknowledged." },
    ],
    correctAnswer: "B",
    explanation: "The passage begins with historical evolution (1970s to present), describes current approaches (biomimetic, regenerative), presents criticism (paragraph 4), and offers a response in the form of vernacular traditions (final paragraph). Answer B accurately captures this structure.",
    difficulty: "hard",
    passageId: "rc-exp1-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCE - EDUCATION
// ============================================

const passage4 = `The expansion of standardized testing in American public education over the past three decades has generated intense debate among educators, policymakers, and researchers. Proponents argue that standardized assessments provide objective measures of student learning, enable comparisons across schools and districts, and hold educators accountable for results. Critics contend that the emphasis on test scores has narrowed curricula, stressed students, and failed to improve educational outcomes for disadvantaged populations.

The No Child Left Behind Act of 2001 represented the apex of the accountability movement, requiring states to test all students annually in reading and mathematics and imposing sanctions on schools that failed to make "adequate yearly progress." Research on the law's effects has produced mixed findings. Some studies found modest gains in mathematics achievement, particularly for African American and Hispanic students, during the early years of implementation. Others documented significant negative consequences, including increased time devoted to tested subjects at the expense of science, social studies, and the arts.

Perhaps the most troubling finding from accountability research concerns the phenomenon of "teaching to the test." When teachers focus narrowly on tested content and skills, students may appear to improve on specific assessments while failing to develop deeper understanding or the ability to transfer knowledge to new contexts. Some researchers have documented what they call "score inflation"—gains on state tests that are not reflected in scores on independent assessments like the National Assessment of Educational Progress. This suggests that apparent improvements may sometimes reflect test-specific preparation rather than genuine learning.

The Every Student Succeeds Act of 2015 represented a partial retreat from federal accountability mandates, returning significant authority to states while maintaining annual testing requirements. States have responded with varying approaches, with some continuing to emphasize test-based accountability and others incorporating additional measures such as student growth, school climate surveys, and chronic absenteeism rates. This experimentation has created opportunities to study how different accountability systems affect teaching, learning, and equity.

A growing body of research suggests that assessment can serve learning most effectively when it provides timely, specific feedback that students and teachers can use to adjust instruction. This formative assessment approach differs markedly from high-stakes summative testing, which typically provides results too late to influence current instruction. Some reformers argue that advances in educational technology now make it possible to embed ongoing assessment seamlessly into learning activities, providing the accountability benefits of testing without its distorting effects on curriculum and instruction.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp1-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "advocate for the complete elimination of standardized testing in schools" },
      { letter: "B", text: "provide an overview of the standardized testing debate, key research findings, and evolving policy approaches" },
      { letter: "C", text: "defend the No Child Left Behind Act against its critics" },
      { letter: "D", text: "argue that formative assessment should replace all other forms of educational measurement" },
      { letter: "E", text: "explain why American students perform poorly on international assessments" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents both sides of the testing debate, discusses research findings (both positive and negative), traces policy evolution from NCLB to ESSA, and discusses emerging approaches. This is a comprehensive overview rather than advocacy for any particular position.",
    difficulty: "medium",
    passageId: "rc-exp1-p4",
  },
  {
    id: "rc-exp1-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the Every Student Succeeds Act",
    answerChoices: [
      { letter: "A", text: "eliminated all federal involvement in educational testing" },
      { letter: "B", text: "strengthened federal accountability requirements beyond those in No Child Left Behind" },
      { letter: "C", text: "returned significant authority to states while keeping annual testing requirements" },
      { letter: "D", text: "required all states to use identical accountability measures" },
      { letter: "E", text: "focused exclusively on improving outcomes for disadvantaged students" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that ESSA 'represented a partial retreat from federal accountability mandates, returning significant authority to states while maintaining annual testing requirements.'",
    difficulty: "easy",
    passageId: "rc-exp1-p4",
  },
  {
    id: "rc-exp1-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that 'score inflation' is problematic primarily because it",
    answerChoices: [
      { letter: "A", text: "leads to inaccurate conclusions about whether students are actually learning" },
      { letter: "B", text: "makes it impossible to compare scores across different states" },
      { letter: "C", text: "results in teachers losing their jobs unfairly" },
      { letter: "D", text: "causes students to become overconfident about their abilities" },
      { letter: "E", text: "increases the cost of educational assessment" },
    ],
    correctAnswer: "A",
    explanation: "The passage explains that score inflation means 'gains on state tests that are not reflected in scores on independent assessments,' suggesting that 'apparent improvements may sometimes reflect test-specific preparation rather than genuine learning.' The problem is that inflated scores give a false picture of actual student learning.",
    difficulty: "medium",
    passageId: "rc-exp1-p4",
  },
  {
    id: "rc-exp1-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author discusses the National Assessment of Educational Progress primarily to",
    answerChoices: [
      { letter: "A", text: "criticize it as an inadequate measure of student learning" },
      { letter: "B", text: "provide evidence that score inflation may be occurring on state tests" },
      { letter: "C", text: "argue that it should replace state-developed assessments" },
      { letter: "D", text: "demonstrate the superiority of federal education policies" },
      { letter: "E", text: "explain how formative assessment differs from summative testing" },
    ],
    correctAnswer: "B",
    explanation: "NAEP is mentioned as an 'independent assessment' that shows gains on state tests 'are not reflected' on NAEP—supporting the claim about score inflation. It serves as a benchmark to suggest that state test gains may be artificial.",
    difficulty: "medium",
    passageId: "rc-exp1-p4",
  },
  {
    id: "rc-exp1-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, proponents of formative assessment would most likely argue that",
    answerChoices: [
      { letter: "A", text: "all educational testing should be eliminated immediately" },
      { letter: "B", text: "assessment is most valuable when it can inform instruction in real time" },
      { letter: "C", text: "standardized tests accurately measure student learning" },
      { letter: "D", text: "accountability should focus exclusively on teacher evaluation" },
      { letter: "E", text: "high-stakes testing has been entirely successful" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'assessment can serve learning most effectively when it provides timely, specific feedback' and that high-stakes summative testing 'typically provides results too late to influence current instruction.' Formative assessment proponents would emphasize the value of timely feedback for informing instruction.",
    difficulty: "medium",
    passageId: "rc-exp1-p4",
  },
  {
    id: "rc-exp1-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's tone throughout the passage can best be described as",
    answerChoices: [
      { letter: "A", text: "harshly critical of educational policymakers" },
      { letter: "B", text: "enthusiastically supportive of accountability measures" },
      { letter: "C", text: "analytically balanced while acknowledging complexities and trade-offs" },
      { letter: "D", text: "dismissive of research findings on testing" },
      { letter: "E", text: "nostalgic for pre-accountability education" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both proponents' and critics' views, notes 'mixed findings' from research, acknowledges both gains and 'negative consequences,' and discusses evolving approaches without strongly advocating for any position. This reflects balanced, analytical treatment of a complex topic.",
    difficulty: "medium",
    passageId: "rc-exp1-p4",
  },
];

// Export all RC questions from Set 1
export const rcQuestionsExpSet1: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet1 = {
  passage1: { id: "rc-exp1-p1", content: passage1, topic: "law", title: "Fair Use and Transformative Works" },
  passage2: { id: "rc-exp1-p2", content: passage2, topic: "natural-sciences", title: "The Gut Microbiome" },
  passage3: { id: "rc-exp1-p3", content: passage3, topic: "humanities", title: "Sustainable Architecture" },
  passage4: { id: "rc-exp1-p4", content: passage4, topic: "social-sciences", title: "Standardized Testing" },
};
