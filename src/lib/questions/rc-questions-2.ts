import { Question } from "../lsat-types";

export const rcQuestionsSet2: Question[] = [
  // Passage 1: Art History - Digital Preservation
  {
    id: "rc-2-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The digital preservation of artworks presents museums with unprecedented opportunities and challenges. High-resolution imaging technologies now allow museums to create detailed digital replicas of paintings, sculptures, and other artifacts that can be shared globally through online platforms. Advocates argue that these digital copies democratize access to cultural heritage, enabling people who cannot visit major museums to experience great works of art. Furthermore, digital preservation serves as insurance against physical damage or loss, ensuring that even if an original is destroyed, its image remains for posterity.

However, critics contend that digital reproductions fundamentally alter the nature of artistic experience. Walter Benjamin's concept of "aura"—the unique presence and authenticity of an original artwork—cannot be replicated digitally. Viewing a painting on a screen eliminates crucial aspects of the experience: the texture of brushstrokes, the play of light on the surface, and the physical presence of standing before an object created centuries ago. Moreover, the colors and dimensions of digital copies inevitably differ from originals, no matter how advanced the imaging technology.

Some museums have attempted to address these concerns through hybrid approaches. The Rijksmuseum in Amsterdam, for instance, offers extremely high-resolution images of its collection while simultaneously emphasizing the irreplaceable value of viewing originals. Their digital initiative explicitly acknowledges that online viewing is a complement to, not a substitute for, physical visits. This approach recognizes both the democratizing potential of digital technology and the limitations inherent in any reproduction.

The debate extends beyond aesthetics to questions of institutional purpose. If museums can effectively share their collections digitally, should they prioritize accessibility over exclusivity? Some argue that digital access undermines the financial model of museums dependent on visitor admission fees. Others counter that expanded access builds broader public support for arts funding and may actually increase physical attendance by sparking interest in seeing originals.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Digital preservation technology has made physical museum visits obsolete for most art enthusiasts" },
      { letter: "B", text: "Museums face a complex debate about digital preservation that involves trade-offs between accessibility and authentic artistic experience" },
      { letter: "C", text: "Walter Benjamin's concept of aura definitively proves that digital art reproduction is fundamentally flawed" },
      { letter: "D", text: "The Rijksmuseum has discovered the only viable approach to digital art preservation" },
      { letter: "E", text: "Financial concerns should be the primary factor in museums' decisions about digital accessibility" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents multiple perspectives on digital preservation without definitively siding with any, emphasizing the complexity of balancing accessibility benefits with concerns about authentic artistic experience.",
    wrongAnswerExplanations: {
      A: "The passage explicitly argues that digital cannot fully substitute for physical viewing.",
      C: "Benjamin's concept is presented as one perspective, not as definitive proof.",
      D: "The Rijksmuseum is an example, not presented as the only viable approach.",
      E: "Financial concerns are mentioned but are not presented as the primary consideration."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The digital preservation of artworks presents museums with unprecedented opportunities and challenges. High-resolution imaging technologies now allow museums to create detailed digital replicas of paintings, sculptures, and other artifacts that can be shared globally through online platforms. Advocates argue that these digital copies democratize access to cultural heritage, enabling people who cannot visit major museums to experience great works of art. Furthermore, digital preservation serves as insurance against physical damage or loss, ensuring that even if an original is destroyed, its image remains for posterity.

However, critics contend that digital reproductions fundamentally alter the nature of artistic experience. Walter Benjamin's concept of "aura"—the unique presence and authenticity of an original artwork—cannot be replicated digitally. Viewing a painting on a screen eliminates crucial aspects of the experience: the texture of brushstrokes, the play of light on the surface, and the physical presence of standing before an object created centuries ago. Moreover, the colors and dimensions of digital copies inevitably differ from originals, no matter how advanced the imaging technology.

Some museums have attempted to address these concerns through hybrid approaches. The Rijksmuseum in Amsterdam, for instance, offers extremely high-resolution images of its collection while simultaneously emphasizing the irreplaceable value of viewing originals. Their digital initiative explicitly acknowledges that online viewing is a complement to, not a substitute for, physical visits. This approach recognizes both the democratizing potential of digital technology and the limitations inherent in any reproduction.

The debate extends beyond aesthetics to questions of institutional purpose. If museums can effectively share their collections digitally, should they prioritize accessibility over exclusivity? Some argue that digital access undermines the financial model of museums dependent on visitor admission fees. Others counter that expanded access builds broader public support for arts funding and may actually increase physical attendance by sparking interest in seeing originals.`,
    questionStem: "The author's reference to Walter Benjamin's concept of 'aura' primarily serves to",
    answerChoices: [
      { letter: "A", text: "provide theoretical support for critics' concerns about digital reproduction" },
      { letter: "B", text: "demonstrate that early 20th century thinkers anticipated digital technology" },
      { letter: "C", text: "argue that all technological reproductions of art are inherently inferior" },
      { letter: "D", text: "explain why museums have been slow to adopt digital preservation" },
      { letter: "E", text: "contrast European and American approaches to art preservation" },
    ],
    correctAnswer: "A",
    explanation: "Benjamin's concept is introduced to articulate why critics believe digital reproductions cannot capture the authentic experience of viewing original artworks—it provides theoretical grounding for their position.",
    wrongAnswerExplanations: {
      B: "The passage doesn't claim Benjamin anticipated digital technology specifically.",
      C: "The passage presents this as one view, not the author's definitive argument.",
      D: "Museum adoption speed is not discussed in relation to Benjamin.",
      E: "No contrast between European and American approaches is made."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The digital preservation of artworks presents museums with unprecedented opportunities and challenges. High-resolution imaging technologies now allow museums to create detailed digital replicas of paintings, sculptures, and other artifacts that can be shared globally through online platforms. Advocates argue that these digital copies democratize access to cultural heritage, enabling people who cannot visit major museums to experience great works of art. Furthermore, digital preservation serves as insurance against physical damage or loss, ensuring that even if an original is destroyed, its image remains for posterity.

However, critics contend that digital reproductions fundamentally alter the nature of artistic experience. Walter Benjamin's concept of "aura"—the unique presence and authenticity of an original artwork—cannot be replicated digitally. Viewing a painting on a screen eliminates crucial aspects of the experience: the texture of brushstrokes, the play of light on the surface, and the physical presence of standing before an object created centuries ago. Moreover, the colors and dimensions of digital copies inevitably differ from originals, no matter how advanced the imaging technology.

Some museums have attempted to address these concerns through hybrid approaches. The Rijksmuseum in Amsterdam, for instance, offers extremely high-resolution images of its collection while simultaneously emphasizing the irreplaceable value of viewing originals. Their digital initiative explicitly acknowledges that online viewing is a complement to, not a substitute for, physical visits. This approach recognizes both the democratizing potential of digital technology and the limitations inherent in any reproduction.

The debate extends beyond aesthetics to questions of institutional purpose. If museums can effectively share their collections digitally, should they prioritize accessibility over exclusivity? Some argue that digital access undermines the financial model of museums dependent on visitor admission fees. Others counter that expanded access builds broader public support for arts funding and may actually increase physical attendance by sparking interest in seeing originals.`,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about the Rijksmuseum's approach?",
    answerChoices: [
      { letter: "A", text: "It has completely resolved the tension between digital access and authentic experience" },
      { letter: "B", text: "It attempts to gain benefits of digital technology while acknowledging its limitations" },
      { letter: "C", text: "It prioritizes online visitors over those who attend in person" },
      { letter: "D", text: "It has been widely criticized by digital preservation advocates" },
      { letter: "E", text: "It was developed before high-resolution imaging technology became available" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes the Rijksmuseum as offering high-resolution images while emphasizing the irreplaceable value of originals, acknowledging digital as 'complement, not substitute'—balancing benefits with limitations.",
    wrongAnswerExplanations: {
      A: "The passage doesn't claim the approach resolves the tension completely.",
      C: "The opposite is implied—they emphasize the value of physical visits.",
      D: "No criticism of the Rijksmuseum approach is mentioned.",
      E: "The passage describes their use of high-resolution imaging, implying current technology."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The digital preservation of artworks presents museums with unprecedented opportunities and challenges. High-resolution imaging technologies now allow museums to create detailed digital replicas of paintings, sculptures, and other artifacts that can be shared globally through online platforms. Advocates argue that these digital copies democratize access to cultural heritage, enabling people who cannot visit major museums to experience great works of art. Furthermore, digital preservation serves as insurance against physical damage or loss, ensuring that even if an original is destroyed, its image remains for posterity.

However, critics contend that digital reproductions fundamentally alter the nature of artistic experience. Walter Benjamin's concept of "aura"—the unique presence and authenticity of an original artwork—cannot be replicated digitally. Viewing a painting on a screen eliminates crucial aspects of the experience: the texture of brushstrokes, the play of light on the surface, and the physical presence of standing before an object created centuries ago. Moreover, the colors and dimensions of digital copies inevitably differ from originals, no matter how advanced the imaging technology.

Some museums have attempted to address these concerns through hybrid approaches. The Rijksmuseum in Amsterdam, for instance, offers extremely high-resolution images of its collection while simultaneously emphasizing the irreplaceable value of viewing originals. Their digital initiative explicitly acknowledges that online viewing is a complement to, not a substitute for, physical visits. This approach recognizes both the democratizing potential of digital technology and the limitations inherent in any reproduction.

The debate extends beyond aesthetics to questions of institutional purpose. If museums can effectively share their collections digitally, should they prioritize accessibility over exclusivity? Some argue that digital access undermines the financial model of museums dependent on visitor admission fees. Others counter that expanded access builds broader public support for arts funding and may actually increase physical attendance by sparking interest in seeing originals.`,
    questionStem: "According to the passage, which of the following is mentioned as a benefit of digital preservation?",
    answerChoices: [
      { letter: "A", text: "It enhances the texture and depth of brushstrokes" },
      { letter: "B", text: "It provides protection against the loss of original artworks" },
      { letter: "C", text: "It reduces the operating costs of major museums" },
      { letter: "D", text: "It improves the color accuracy of aging paintings" },
      { letter: "E", text: "It allows museums to sell reproductions for profit" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'digital preservation serves as insurance against physical damage or loss, ensuring that even if an original is destroyed, its image remains.'",
    wrongAnswerExplanations: {
      A: "The passage says digital eliminates texture appreciation, not enhances it.",
      C: "Operating costs are not discussed.",
      D: "Colors are described as inevitably differing from originals.",
      E: "Selling reproductions for profit is not mentioned."
    },
    difficulty: "easy"
  },
  {
    id: "rc-2-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The digital preservation of artworks presents museums with unprecedented opportunities and challenges. High-resolution imaging technologies now allow museums to create detailed digital replicas of paintings, sculptures, and other artifacts that can be shared globally through online platforms. Advocates argue that these digital copies democratize access to cultural heritage, enabling people who cannot visit major museums to experience great works of art. Furthermore, digital preservation serves as insurance against physical damage or loss, ensuring that even if an original is destroyed, its image remains for posterity.

However, critics contend that digital reproductions fundamentally alter the nature of artistic experience. Walter Benjamin's concept of "aura"—the unique presence and authenticity of an original artwork—cannot be replicated digitally. Viewing a painting on a screen eliminates crucial aspects of the experience: the texture of brushstrokes, the play of light on the surface, and the physical presence of standing before an object created centuries ago. Moreover, the colors and dimensions of digital copies inevitably differ from originals, no matter how advanced the imaging technology.

Some museums have attempted to address these concerns through hybrid approaches. The Rijksmuseum in Amsterdam, for instance, offers extremely high-resolution images of its collection while simultaneously emphasizing the irreplaceable value of viewing originals. Their digital initiative explicitly acknowledges that online viewing is a complement to, not a substitute for, physical visits. This approach recognizes both the democratizing potential of digital technology and the limitations inherent in any reproduction.

The debate extends beyond aesthetics to questions of institutional purpose. If museums can effectively share their collections digitally, should they prioritize accessibility over exclusivity? Some argue that digital access undermines the financial model of museums dependent on visitor admission fees. Others counter that expanded access builds broader public support for arts funding and may actually increase physical attendance by sparking interest in seeing originals.`,
    questionStem: "The author's attitude toward the debate over digital preservation can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly opposed to digital initiatives" },
      { letter: "B", text: "enthusiastically supportive of complete digitization" },
      { letter: "C", text: "balanced and analytical in presenting multiple perspectives" },
      { letter: "D", text: "dismissive of traditional museum practices" },
      { letter: "E", text: "primarily concerned with financial implications" },
    ],
    correctAnswer: "C",
    explanation: "The author presents both advocates' and critics' views fairly, discusses hybrid approaches, and raises multiple aspects of the debate without clearly endorsing one position.",
    wrongAnswerExplanations: {
      A: "The author presents benefits of digital preservation alongside concerns.",
      B: "The author also presents significant criticisms of digitization.",
      D: "Traditional practices are not dismissed; viewing originals is valued.",
      E: "Financial implications are mentioned but not as the primary focus."
    },
    difficulty: "medium"
  },
  // Passage 2: Science - Microbiome Research
  {
    id: "rc-2-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The human microbiome—the trillions of microorganisms living in and on our bodies—has emerged as one of the most active areas of biomedical research. These microbial communities, once dismissed as mere passengers or pathogens, are now understood to play crucial roles in human health, influencing everything from digestion and immunity to mental health and disease susceptibility. The implications of microbiome research extend far beyond basic science, potentially revolutionizing approaches to medicine, nutrition, and public health.

Recent studies have revealed remarkable connections between gut bacteria and brain function, a relationship dubbed the "gut-brain axis." Certain bacterial species produce neurotransmitters identical to those manufactured by the human brain, and alterations in gut microbial composition have been linked to conditions ranging from depression and anxiety to autism spectrum disorder. While researchers caution against overstating these connections, the findings suggest that mental health treatment may eventually include interventions targeting the microbiome.

The therapeutic potential of microbiome manipulation extends to numerous conditions. Fecal microbiota transplantation (FMT), while seemingly unpalatable, has proven remarkably effective against recurrent Clostridium difficile infections, with success rates exceeding 90%—far outperforming antibiotic treatments. Researchers are now investigating whether similar approaches might help treat inflammatory bowel disease, metabolic syndrome, and even certain cancers. However, the complexity of microbial ecosystems means that interventions must be approached carefully; introducing beneficial bacteria is not simply a matter of taking a probiotic supplement.

Perhaps most provocatively, microbiome research challenges traditional notions of human identity and individuality. If our behavior, mood, and health are significantly influenced by organisms that are not genetically "us," what does this mean for concepts of personal responsibility and free will? These philosophical questions, while speculative, suggest that microbiome science may ultimately force reconsideration of fundamental assumptions about human nature.`,
    questionStem: "The passage is primarily concerned with",
    answerChoices: [
      { letter: "A", text: "advocating for specific microbiome-based medical treatments" },
      { letter: "B", text: "describing the scope and implications of microbiome research" },
      { letter: "C", text: "critiquing the overemphasis on gut bacteria in current research" },
      { letter: "D", text: "explaining the technical processes of fecal microbiota transplantation" },
      { letter: "E", text: "resolving philosophical debates about human identity" },
    ],
    correctAnswer: "B",
    explanation: "The passage surveys multiple aspects of microbiome research—its health implications, therapeutic potential, and philosophical ramifications—providing an overview of the field's scope and significance.",
    wrongAnswerExplanations: {
      A: "The passage describes potential treatments but doesn't advocate for specific ones.",
      C: "The passage presents microbiome research positively, not critically.",
      D: "FMT is mentioned briefly as an example, not explained in technical detail.",
      E: "Philosophical questions are raised but not resolved."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The human microbiome—the trillions of microorganisms living in and on our bodies—has emerged as one of the most active areas of biomedical research. These microbial communities, once dismissed as mere passengers or pathogens, are now understood to play crucial roles in human health, influencing everything from digestion and immunity to mental health and disease susceptibility. The implications of microbiome research extend far beyond basic science, potentially revolutionizing approaches to medicine, nutrition, and public health.

Recent studies have revealed remarkable connections between gut bacteria and brain function, a relationship dubbed the "gut-brain axis." Certain bacterial species produce neurotransmitters identical to those manufactured by the human brain, and alterations in gut microbial composition have been linked to conditions ranging from depression and anxiety to autism spectrum disorder. While researchers caution against overstating these connections, the findings suggest that mental health treatment may eventually include interventions targeting the microbiome.

The therapeutic potential of microbiome manipulation extends to numerous conditions. Fecal microbiota transplantation (FMT), while seemingly unpalatable, has proven remarkably effective against recurrent Clostridium difficile infections, with success rates exceeding 90%—far outperforming antibiotic treatments. Researchers are now investigating whether similar approaches might help treat inflammatory bowel disease, metabolic syndrome, and even certain cancers. However, the complexity of microbial ecosystems means that interventions must be approached carefully; introducing beneficial bacteria is not simply a matter of taking a probiotic supplement.

Perhaps most provocatively, microbiome research challenges traditional notions of human identity and individuality. If our behavior, mood, and health are significantly influenced by organisms that are not genetically "us," what does this mean for concepts of personal responsibility and free will? These philosophical questions, while speculative, suggest that microbiome science may ultimately force reconsideration of fundamental assumptions about human nature.`,
    questionStem: "The phrase 'while seemingly unpalatable' in the third paragraph serves primarily to",
    answerChoices: [
      { letter: "A", text: "acknowledge a common reaction while emphasizing medical effectiveness" },
      { letter: "B", text: "criticize researchers for pursuing distasteful treatments" },
      { letter: "C", text: "suggest that the treatment is too unpleasant to be widely adopted" },
      { letter: "D", text: "indicate that the treatment has significant side effects" },
      { letter: "E", text: "compare FMT unfavorably to antibiotic treatments" },
    ],
    correctAnswer: "A",
    explanation: "The phrase acknowledges that FMT might seem off-putting ('unpalatable') before immediately noting its remarkable 90%+ success rate, balancing initial distaste against proven effectiveness.",
    wrongAnswerExplanations: {
      B: "The author presents FMT positively, not critically.",
      C: "The passage suggests high effectiveness despite the reaction.",
      D: "Side effects are not discussed.",
      E: "FMT is presented as far outperforming antibiotics."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The human microbiome—the trillions of microorganisms living in and on our bodies—has emerged as one of the most active areas of biomedical research. These microbial communities, once dismissed as mere passengers or pathogens, are now understood to play crucial roles in human health, influencing everything from digestion and immunity to mental health and disease susceptibility. The implications of microbiome research extend far beyond basic science, potentially revolutionizing approaches to medicine, nutrition, and public health.

Recent studies have revealed remarkable connections between gut bacteria and brain function, a relationship dubbed the "gut-brain axis." Certain bacterial species produce neurotransmitters identical to those manufactured by the human brain, and alterations in gut microbial composition have been linked to conditions ranging from depression and anxiety to autism spectrum disorder. While researchers caution against overstating these connections, the findings suggest that mental health treatment may eventually include interventions targeting the microbiome.

The therapeutic potential of microbiome manipulation extends to numerous conditions. Fecal microbiota transplantation (FMT), while seemingly unpalatable, has proven remarkably effective against recurrent Clostridium difficile infections, with success rates exceeding 90%—far outperforming antibiotic treatments. Researchers are now investigating whether similar approaches might help treat inflammatory bowel disease, metabolic syndrome, and even certain cancers. However, the complexity of microbial ecosystems means that interventions must be approached carefully; introducing beneficial bacteria is not simply a matter of taking a probiotic supplement.

Perhaps most provocatively, microbiome research challenges traditional notions of human identity and individuality. If our behavior, mood, and health are significantly influenced by organisms that are not genetically "us," what does this mean for concepts of personal responsibility and free will? These philosophical questions, while speculative, suggest that microbiome science may ultimately force reconsideration of fundamental assumptions about human nature.`,
    questionStem: "It can be inferred from the passage that the author would most likely agree with which of the following statements?",
    answerChoices: [
      { letter: "A", text: "Probiotic supplements are an effective way to manipulate the microbiome" },
      { letter: "B", text: "Microbiome research has definitively explained the causes of depression" },
      { letter: "C", text: "Simple interventions are unlikely to effectively address complex microbial ecosystems" },
      { letter: "D", text: "The philosophical implications of microbiome research are more important than the medical applications" },
      { letter: "E", text: "Traditional medicine has always understood the importance of gut bacteria" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that 'the complexity of microbial ecosystems means that interventions must be approached carefully' and that beneficial bacteria introduction 'is not simply a matter of taking a probiotic supplement.'",
    wrongAnswerExplanations: {
      A: "The passage explicitly contradicts this, saying it's not simply a matter of probiotics.",
      B: "Researchers 'caution against overstating' gut-brain connections.",
      D: "Medical applications receive more attention; philosophical questions are called 'speculative.'",
      E: "The passage says microbes were 'once dismissed as mere passengers or pathogens.'"
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The human microbiome—the trillions of microorganisms living in and on our bodies—has emerged as one of the most active areas of biomedical research. These microbial communities, once dismissed as mere passengers or pathogens, are now understood to play crucial roles in human health, influencing everything from digestion and immunity to mental health and disease susceptibility. The implications of microbiome research extend far beyond basic science, potentially revolutionizing approaches to medicine, nutrition, and public health.

Recent studies have revealed remarkable connections between gut bacteria and brain function, a relationship dubbed the "gut-brain axis." Certain bacterial species produce neurotransmitters identical to those manufactured by the human brain, and alterations in gut microbial composition have been linked to conditions ranging from depression and anxiety to autism spectrum disorder. While researchers caution against overstating these connections, the findings suggest that mental health treatment may eventually include interventions targeting the microbiome.

The therapeutic potential of microbiome manipulation extends to numerous conditions. Fecal microbiota transplantation (FMT), while seemingly unpalatable, has proven remarkably effective against recurrent Clostridium difficile infections, with success rates exceeding 90%—far outperforming antibiotic treatments. Researchers are now investigating whether similar approaches might help treat inflammatory bowel disease, metabolic syndrome, and even certain cancers. However, the complexity of microbial ecosystems means that interventions must be approached carefully; introducing beneficial bacteria is not simply a matter of taking a probiotic supplement.

Perhaps most provocatively, microbiome research challenges traditional notions of human identity and individuality. If our behavior, mood, and health are significantly influenced by organisms that are not genetically "us," what does this mean for concepts of personal responsibility and free will? These philosophical questions, while speculative, suggest that microbiome science may ultimately force reconsideration of fundamental assumptions about human nature.`,
    questionStem: "According to the passage, which of the following has been linked to alterations in gut microbial composition?",
    answerChoices: [
      { letter: "A", text: "Clostridium difficile infection resistance" },
      { letter: "B", text: "Conditions including depression and anxiety" },
      { letter: "C", text: "Increased effectiveness of antibiotic treatments" },
      { letter: "D", text: "Enhanced production of probiotics" },
      { letter: "E", text: "Reduced genetic diversity in humans" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'alterations in gut microbial composition have been linked to conditions ranging from depression and anxiety to autism spectrum disorder.'",
    wrongAnswerExplanations: {
      A: "C. difficile is treated by FMT, not linked to gut alterations.",
      C: "FMT outperforms antibiotics; antibiotic effectiveness isn't linked to gut composition changes.",
      D: "Probiotic production isn't mentioned as a consequence of gut alterations.",
      E: "Human genetic diversity isn't discussed."
    },
    difficulty: "easy"
  },
  {
    id: "rc-2-010",
    type: "vocabulary",
    sectionType: "reading-comprehension",
    stimulus: `The human microbiome—the trillions of microorganisms living in and on our bodies—has emerged as one of the most active areas of biomedical research. These microbial communities, once dismissed as mere passengers or pathogens, are now understood to play crucial roles in human health, influencing everything from digestion and immunity to mental health and disease susceptibility. The implications of microbiome research extend far beyond basic science, potentially revolutionizing approaches to medicine, nutrition, and public health.

Recent studies have revealed remarkable connections between gut bacteria and brain function, a relationship dubbed the "gut-brain axis." Certain bacterial species produce neurotransmitters identical to those manufactured by the human brain, and alterations in gut microbial composition have been linked to conditions ranging from depression and anxiety to autism spectrum disorder. While researchers caution against overstating these connections, the findings suggest that mental health treatment may eventually include interventions targeting the microbiome.

The therapeutic potential of microbiome manipulation extends to numerous conditions. Fecal microbiota transplantation (FMT), while seemingly unpalatable, has proven remarkably effective against recurrent Clostridium difficile infections, with success rates exceeding 90%—far outperforming antibiotic treatments. Researchers are now investigating whether similar approaches might help treat inflammatory bowel disease, metabolic syndrome, and even certain cancers. However, the complexity of microbial ecosystems means that interventions must be approached carefully; introducing beneficial bacteria is not simply a matter of taking a probiotic supplement.

Perhaps most provocatively, microbiome research challenges traditional notions of human identity and individuality. If our behavior, mood, and health are significantly influenced by organisms that are not genetically "us," what does this mean for concepts of personal responsibility and free will? These philosophical questions, while speculative, suggest that microbiome science may ultimately force reconsideration of fundamental assumptions about human nature.`,
    questionStem: "As used in the passage, 'provocatively' most nearly means",
    answerChoices: [
      { letter: "A", text: "offensively" },
      { letter: "B", text: "angrily" },
      { letter: "C", text: "thought-provokingly" },
      { letter: "D", text: "scientifically" },
      { letter: "E", text: "controversially" },
    ],
    correctAnswer: "C",
    explanation: "In context, 'provocatively' refers to the challenging, thought-provoking nature of the philosophical implications—ideas that prompt deep reflection about human identity, not ideas that are offensive or angry.",
    wrongAnswerExplanations: {
      A: "The passage presents these questions as stimulating thought, not as offensive.",
      B: "No anger is implied in the discussion of philosophical questions.",
      D: "'Provocatively' doesn't mean scientifically.",
      E: "While related, the emphasis is on stimulating thought rather than creating controversy."
    },
    difficulty: "medium"
  },
  // Passage 3: Law - Intellectual Property
  {
    id: "rc-2-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The tension between intellectual property rights and the free flow of information has intensified in the digital age. Copyright law, originally designed to protect authors of books and artistic works for limited periods, now covers software, databases, and digital content with protections that can extend for over a century. Critics argue that these expansive protections stifle innovation and restrict access to knowledge, while defenders maintain that strong intellectual property rights are essential to incentivize creative and technological development.

The software industry exemplifies this tension. Proprietary software companies argue that copyright and patent protections are necessary to recoup development costs and fund continued innovation. Without such protections, they contend, competitors could simply copy innovations, eliminating incentives for research and development. However, the open-source software movement demonstrates an alternative model: major projects like Linux and Apache are developed collaboratively and distributed freely, yet have produced some of the most reliable and widely-used software in existence.

Pharmaceutical patents present an even more fraught case because they directly affect access to life-saving medications. Patent protections allow drug companies to charge premium prices during exclusivity periods, funding further research but also putting treatments beyond the reach of many who need them. The debate intensifies when considering global health crises: should patent protections be suspended to allow generic production of essential medicines, or would this undermine the system that produces new treatments?

Some scholars advocate for reform rather than abolition of intellectual property protections. Proposals include shortening copyright terms, expanding fair use provisions, and creating compulsory licensing mechanisms for essential technologies. Others argue that the patent system requires fundamental reimagining to address its role in creating innovation monopolies. What seems clear is that intellectual property frameworks designed for an earlier technological era require reconsideration to balance protection with access in the digital age.`,
    questionStem: "The main purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that intellectual property protections should be abolished" },
      { letter: "B", text: "explain why copyright law has become obsolete in the digital age" },
      { letter: "C", text: "present the complex debate over intellectual property rights and propose reforms" },
      { letter: "D", text: "demonstrate that open-source software is superior to proprietary software" },
      { letter: "E", text: "advocate for suspending pharmaceutical patents during health crises" },
    ],
    correctAnswer: "C",
    explanation: "The passage presents multiple perspectives on intellectual property debates across industries and concludes by discussing various reform proposals, examining the tension between protection and access.",
    wrongAnswerExplanations: {
      A: "The passage discusses reform, not abolition.",
      B: "Copyright is presented as expanded, not obsolete, and needing reconsideration.",
      D: "Open-source is presented as an alternative model, not as definitively superior.",
      E: "This is mentioned as one debate point, not the passage's main argument."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The tension between intellectual property rights and the free flow of information has intensified in the digital age. Copyright law, originally designed to protect authors of books and artistic works for limited periods, now covers software, databases, and digital content with protections that can extend for over a century. Critics argue that these expansive protections stifle innovation and restrict access to knowledge, while defenders maintain that strong intellectual property rights are essential to incentivize creative and technological development.

The software industry exemplifies this tension. Proprietary software companies argue that copyright and patent protections are necessary to recoup development costs and fund continued innovation. Without such protections, they contend, competitors could simply copy innovations, eliminating incentives for research and development. However, the open-source software movement demonstrates an alternative model: major projects like Linux and Apache are developed collaboratively and distributed freely, yet have produced some of the most reliable and widely-used software in existence.

Pharmaceutical patents present an even more fraught case because they directly affect access to life-saving medications. Patent protections allow drug companies to charge premium prices during exclusivity periods, funding further research but also putting treatments beyond the reach of many who need them. The debate intensifies when considering global health crises: should patent protections be suspended to allow generic production of essential medicines, or would this undermine the system that produces new treatments?

Some scholars advocate for reform rather than abolition of intellectual property protections. Proposals include shortening copyright terms, expanding fair use provisions, and creating compulsory licensing mechanisms for essential technologies. Others argue that the patent system requires fundamental reimagining to address its role in creating innovation monopolies. What seems clear is that intellectual property frameworks designed for an earlier technological era require reconsideration to balance protection with access in the digital age.`,
    questionStem: "The discussion of Linux and Apache in the second paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "prove that proprietary software companies are unnecessary" },
      { letter: "B", text: "provide a counterexample to the claim that intellectual property protections are essential for innovation" },
      { letter: "C", text: "argue that all software should be open-source" },
      { letter: "D", text: "demonstrate the superiority of collaborative development methods" },
      { letter: "E", text: "criticize the reliability of commercially developed software" },
    ],
    correctAnswer: "B",
    explanation: "The open-source examples counter the claim that copyright/patent protections are necessary for software innovation—showing that major, successful software can be developed under alternative models.",
    wrongAnswerExplanations: {
      A: "The passage presents open-source as an 'alternative,' not as making proprietary unnecessary.",
      C: "No argument is made that all software should be open-source.",
      D: "Collaboration is mentioned but not as the primary point of the examples.",
      E: "Commercial software reliability is not criticized."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The tension between intellectual property rights and the free flow of information has intensified in the digital age. Copyright law, originally designed to protect authors of books and artistic works for limited periods, now covers software, databases, and digital content with protections that can extend for over a century. Critics argue that these expansive protections stifle innovation and restrict access to knowledge, while defenders maintain that strong intellectual property rights are essential to incentivize creative and technological development.

The software industry exemplifies this tension. Proprietary software companies argue that copyright and patent protections are necessary to recoup development costs and fund continued innovation. Without such protections, they contend, competitors could simply copy innovations, eliminating incentives for research and development. However, the open-source software movement demonstrates an alternative model: major projects like Linux and Apache are developed collaboratively and distributed freely, yet have produced some of the most reliable and widely-used software in existence.

Pharmaceutical patents present an even more fraught case because they directly affect access to life-saving medications. Patent protections allow drug companies to charge premium prices during exclusivity periods, funding further research but also putting treatments beyond the reach of many who need them. The debate intensifies when considering global health crises: should patent protections be suspended to allow generic production of essential medicines, or would this undermine the system that produces new treatments?

Some scholars advocate for reform rather than abolition of intellectual property protections. Proposals include shortening copyright terms, expanding fair use provisions, and creating compulsory licensing mechanisms for essential technologies. Others argue that the patent system requires fundamental reimagining to address its role in creating innovation monopolies. What seems clear is that intellectual property frameworks designed for an earlier technological era require reconsideration to balance protection with access in the digital age.`,
    questionStem: "It can be inferred that the author considers pharmaceutical patents to be 'an even more fraught case' primarily because",
    answerChoices: [
      { letter: "A", text: "pharmaceutical research is more expensive than software development" },
      { letter: "B", text: "the consequences of restricted access can involve life-and-death outcomes" },
      { letter: "C", text: "pharmaceutical companies are more aggressive in defending their patents" },
      { letter: "D", text: "generic drug manufacturers lack the capability to produce quality medications" },
      { letter: "E", text: "patent law is fundamentally different for pharmaceuticals than for software" },
    ],
    correctAnswer: "B",
    explanation: "The passage explains that pharmaceutical patents are 'fraught' because they 'directly affect access to life-saving medications,' putting treatments 'beyond the reach of many who need them'—life-and-death stakes.",
    wrongAnswerExplanations: {
      A: "Research costs aren't compared between industries.",
      C: "Aggressiveness of defense isn't mentioned.",
      D: "Generic manufacturer capability isn't questioned.",
      E: "Fundamental legal differences aren't discussed as the reason."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The tension between intellectual property rights and the free flow of information has intensified in the digital age. Copyright law, originally designed to protect authors of books and artistic works for limited periods, now covers software, databases, and digital content with protections that can extend for over a century. Critics argue that these expansive protections stifle innovation and restrict access to knowledge, while defenders maintain that strong intellectual property rights are essential to incentivize creative and technological development.

The software industry exemplifies this tension. Proprietary software companies argue that copyright and patent protections are necessary to recoup development costs and fund continued innovation. Without such protections, they contend, competitors could simply copy innovations, eliminating incentives for research and development. However, the open-source software movement demonstrates an alternative model: major projects like Linux and Apache are developed collaboratively and distributed freely, yet have produced some of the most reliable and widely-used software in existence.

Pharmaceutical patents present an even more fraught case because they directly affect access to life-saving medications. Patent protections allow drug companies to charge premium prices during exclusivity periods, funding further research but also putting treatments beyond the reach of many who need them. The debate intensifies when considering global health crises: should patent protections be suspended to allow generic production of essential medicines, or would this undermine the system that produces new treatments?

Some scholars advocate for reform rather than abolition of intellectual property protections. Proposals include shortening copyright terms, expanding fair use provisions, and creating compulsory licensing mechanisms for essential technologies. Others argue that the patent system requires fundamental reimagining to address its role in creating innovation monopolies. What seems clear is that intellectual property frameworks designed for an earlier technological era require reconsideration to balance protection with access in the digital age.`,
    questionStem: "According to the passage, which of the following is mentioned as a proposed reform to intellectual property protections?",
    answerChoices: [
      { letter: "A", text: "Eliminating all software patents" },
      { letter: "B", text: "Creating compulsory licensing mechanisms for essential technologies" },
      { letter: "C", text: "Requiring all software to be open-source" },
      { letter: "D", text: "Permanently suspending pharmaceutical patents" },
      { letter: "E", text: "Extending copyright terms to encourage more innovation" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly lists 'creating compulsory licensing mechanisms for essential technologies' as one of the reform proposals advocated by some scholars.",
    wrongAnswerExplanations: {
      A: "Elimination of software patents isn't proposed.",
      C: "Requiring open-source is not mentioned as a proposal.",
      D: "Permanent suspension isn't proposed; the passage mentions debate about temporary suspension.",
      E: "Shortening, not extending, copyright terms is proposed."
    },
    difficulty: "easy"
  },
  {
    id: "rc-2-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The tension between intellectual property rights and the free flow of information has intensified in the digital age. Copyright law, originally designed to protect authors of books and artistic works for limited periods, now covers software, databases, and digital content with protections that can extend for over a century. Critics argue that these expansive protections stifle innovation and restrict access to knowledge, while defenders maintain that strong intellectual property rights are essential to incentivize creative and technological development.

The software industry exemplifies this tension. Proprietary software companies argue that copyright and patent protections are necessary to recoup development costs and fund continued innovation. Without such protections, they contend, competitors could simply copy innovations, eliminating incentives for research and development. However, the open-source software movement demonstrates an alternative model: major projects like Linux and Apache are developed collaboratively and distributed freely, yet have produced some of the most reliable and widely-used software in existence.

Pharmaceutical patents present an even more fraught case because they directly affect access to life-saving medications. Patent protections allow drug companies to charge premium prices during exclusivity periods, funding further research but also putting treatments beyond the reach of many who need them. The debate intensifies when considering global health crises: should patent protections be suspended to allow generic production of essential medicines, or would this undermine the system that produces new treatments?

Some scholars advocate for reform rather than abolition of intellectual property protections. Proposals include shortening copyright terms, expanding fair use provisions, and creating compulsory licensing mechanisms for essential technologies. Others argue that the patent system requires fundamental reimagining to address its role in creating innovation monopolies. What seems clear is that intellectual property frameworks designed for an earlier technological era require reconsideration to balance protection with access in the digital age.`,
    questionStem: "The author's attitude toward intellectual property reform can best be described as",
    answerChoices: [
      { letter: "A", text: "convinced that current protections are perfectly adequate" },
      { letter: "B", text: "certain that all intellectual property protections should be abolished" },
      { letter: "C", text: "persuaded that some form of reconsideration is necessary" },
      { letter: "D", text: "indifferent to the outcomes of the debate" },
      { letter: "E", text: "hostile toward all forms of intellectual property" },
    ],
    correctAnswer: "C",
    explanation: "The passage concludes that 'intellectual property frameworks designed for an earlier technological era require reconsideration,' indicating the author believes some reform is needed, though not specifying exactly what form.",
    wrongAnswerExplanations: {
      A: "The author clearly indicates current frameworks need reconsideration.",
      B: "Reform, not abolition, is discussed as the approach.",
      D: "The author's analysis and conclusion show engagement with the issues.",
      E: "The author presents balanced perspectives, not hostility."
    },
    difficulty: "medium"
  },
  // Passage 4: Philosophy - Consciousness
  {
    id: "rc-2-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The "hard problem" of consciousness, as philosopher David Chalmers termed it, asks why physical processes in the brain give rise to subjective experience at all. While neuroscience can increasingly explain which brain regions activate during particular experiences, it has not explained why there is something it "feels like" to have those experiences. This explanatory gap between objective brain function and subjective experience remains one of philosophy's most intractable puzzles.

Some philosophers argue that consciousness cannot be reduced to physical processes, suggesting instead that consciousness is a fundamental feature of reality alongside mass and charge. This view, known as panpsychism, holds that even simple systems possess some form of rudimentary experience. Proponents argue that this avoids the seemingly impossible leap from non-conscious matter to conscious minds. Critics counter that panpsychism merely relocates rather than solves the problem: if everything has some form of consciousness, what explains how simple experiential properties combine to produce the complex unified consciousness humans possess?

A contrasting approach, eliminative materialism, denies that consciousness as traditionally conceived exists at all. Proponents argue that terms like "consciousness" and "subjective experience" are remnants of folk psychology that will eventually be replaced by more precise neuroscientific vocabulary. Just as we no longer explain combustion in terms of "phlogiston," future science will explain mental phenomena without invoking consciousness. Critics of this view argue that it denies the most immediately certain fact available to us—that we are having experiences right now.

Perhaps the most pragmatic position acknowledges that our current conceptual frameworks may be inadequate for understanding consciousness. Just as pre-Einsteinian physics lacked concepts necessary to understand spacetime, we may need fundamentally new concepts to bridge the gap between brain and mind. This humility about our current limitations, however, need not prevent productive scientific research into the neural correlates of consciousness, even if ultimate explanations remain elusive.`,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that panpsychism is the best explanation for consciousness" },
      { letter: "B", text: "survey different philosophical approaches to the problem of consciousness" },
      { letter: "C", text: "prove that consciousness cannot be explained by science" },
      { letter: "D", text: "criticize neuroscience for failing to solve the hard problem" },
      { letter: "E", text: "demonstrate that consciousness does not actually exist" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents multiple philosophical positions (panpsychism, eliminative materialism, conceptual humility) on consciousness without definitively endorsing any, surveying the landscape of approaches to the hard problem.",
    wrongAnswerExplanations: {
      A: "Panpsychism is presented with criticisms, not endorsed.",
      C: "The passage doesn't conclude consciousness is unexplainable.",
      D: "Neuroscience isn't criticized; its limitations are noted objectively.",
      E: "This is one position (eliminative materialism) that the passage presents critically."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The "hard problem" of consciousness, as philosopher David Chalmers termed it, asks why physical processes in the brain give rise to subjective experience at all. While neuroscience can increasingly explain which brain regions activate during particular experiences, it has not explained why there is something it "feels like" to have those experiences. This explanatory gap between objective brain function and subjective experience remains one of philosophy's most intractable puzzles.

Some philosophers argue that consciousness cannot be reduced to physical processes, suggesting instead that consciousness is a fundamental feature of reality alongside mass and charge. This view, known as panpsychism, holds that even simple systems possess some form of rudimentary experience. Proponents argue that this avoids the seemingly impossible leap from non-conscious matter to conscious minds. Critics counter that panpsychism merely relocates rather than solves the problem: if everything has some form of consciousness, what explains how simple experiential properties combine to produce the complex unified consciousness humans possess?

A contrasting approach, eliminative materialism, denies that consciousness as traditionally conceived exists at all. Proponents argue that terms like "consciousness" and "subjective experience" are remnants of folk psychology that will eventually be replaced by more precise neuroscientific vocabulary. Just as we no longer explain combustion in terms of "phlogiston," future science will explain mental phenomena without invoking consciousness. Critics of this view argue that it denies the most immediately certain fact available to us—that we are having experiences right now.

Perhaps the most pragmatic position acknowledges that our current conceptual frameworks may be inadequate for understanding consciousness. Just as pre-Einsteinian physics lacked concepts necessary to understand spacetime, we may need fundamentally new concepts to bridge the gap between brain and mind. This humility about our current limitations, however, need not prevent productive scientific research into the neural correlates of consciousness, even if ultimate explanations remain elusive.`,
    questionStem: "The author mentions 'phlogiston' primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that scientific progress is impossible" },
      { letter: "B", text: "provide an analogy for how consciousness might be reconceptualized" },
      { letter: "C", text: "criticize the eliminative materialist position" },
      { letter: "D", text: "show that consciousness is similar to combustion" },
      { letter: "E", text: "argue that historical science was fundamentally flawed" },
    ],
    correctAnswer: "B",
    explanation: "Phlogiston is mentioned as an analogy by eliminative materialists: just as 'phlogiston' was replaced by better chemistry concepts, 'consciousness' might be replaced by better neuroscientific concepts.",
    wrongAnswerExplanations: {
      A: "The phlogiston example shows scientific progress, not its impossibility.",
      C: "It's used to explain, not criticize, the eliminative materialist position.",
      D: "The comparison is about conceptual replacement, not similarity of phenomena.",
      E: "The example shows progress, not fundamental flaws in historical science."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The "hard problem" of consciousness, as philosopher David Chalmers termed it, asks why physical processes in the brain give rise to subjective experience at all. While neuroscience can increasingly explain which brain regions activate during particular experiences, it has not explained why there is something it "feels like" to have those experiences. This explanatory gap between objective brain function and subjective experience remains one of philosophy's most intractable puzzles.

Some philosophers argue that consciousness cannot be reduced to physical processes, suggesting instead that consciousness is a fundamental feature of reality alongside mass and charge. This view, known as panpsychism, holds that even simple systems possess some form of rudimentary experience. Proponents argue that this avoids the seemingly impossible leap from non-conscious matter to conscious minds. Critics counter that panpsychism merely relocates rather than solves the problem: if everything has some form of consciousness, what explains how simple experiential properties combine to produce the complex unified consciousness humans possess?

A contrasting approach, eliminative materialism, denies that consciousness as traditionally conceived exists at all. Proponents argue that terms like "consciousness" and "subjective experience" are remnants of folk psychology that will eventually be replaced by more precise neuroscientific vocabulary. Just as we no longer explain combustion in terms of "phlogiston," future science will explain mental phenomena without invoking consciousness. Critics of this view argue that it denies the most immediately certain fact available to us—that we are having experiences right now.

Perhaps the most pragmatic position acknowledges that our current conceptual frameworks may be inadequate for understanding consciousness. Just as pre-Einsteinian physics lacked concepts necessary to understand spacetime, we may need fundamentally new concepts to bridge the gap between brain and mind. This humility about our current limitations, however, need not prevent productive scientific research into the neural correlates of consciousness, even if ultimate explanations remain elusive.`,
    questionStem: "Based on the passage, which of the following would a critic of panpsychism most likely argue?",
    answerChoices: [
      { letter: "A", text: "Simple systems definitely do not have any form of experience" },
      { letter: "B", text: "Consciousness should be eliminated from scientific vocabulary" },
      { letter: "C", text: "Panpsychism creates a new explanatory problem about combination" },
      { letter: "D", text: "Physical processes in the brain fully explain consciousness" },
      { letter: "E", text: "The hard problem of consciousness has been solved" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that critics of panpsychism argue it 'merely relocates rather than solves the problem,' specifically questioning how simple experiential properties combine to produce complex unified consciousness.",
    wrongAnswerExplanations: {
      A: "Critics don't necessarily deny simple systems have experience; they question the combination problem.",
      B: "This is eliminative materialism, not a critique of panpsychism specifically.",
      D: "Critics of panpsychism don't necessarily claim physical processes explain everything.",
      E: "The passage presents no position claiming the hard problem is solved."
    },
    difficulty: "medium"
  },
  {
    id: "rc-2-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The "hard problem" of consciousness, as philosopher David Chalmers termed it, asks why physical processes in the brain give rise to subjective experience at all. While neuroscience can increasingly explain which brain regions activate during particular experiences, it has not explained why there is something it "feels like" to have those experiences. This explanatory gap between objective brain function and subjective experience remains one of philosophy's most intractable puzzles.

Some philosophers argue that consciousness cannot be reduced to physical processes, suggesting instead that consciousness is a fundamental feature of reality alongside mass and charge. This view, known as panpsychism, holds that even simple systems possess some form of rudimentary experience. Proponents argue that this avoids the seemingly impossible leap from non-conscious matter to conscious minds. Critics counter that panpsychism merely relocates rather than solves the problem: if everything has some form of consciousness, what explains how simple experiential properties combine to produce the complex unified consciousness humans possess?

A contrasting approach, eliminative materialism, denies that consciousness as traditionally conceived exists at all. Proponents argue that terms like "consciousness" and "subjective experience" are remnants of folk psychology that will eventually be replaced by more precise neuroscientific vocabulary. Just as we no longer explain combustion in terms of "phlogiston," future science will explain mental phenomena without invoking consciousness. Critics of this view argue that it denies the most immediately certain fact available to us—that we are having experiences right now.

Perhaps the most pragmatic position acknowledges that our current conceptual frameworks may be inadequate for understanding consciousness. Just as pre-Einsteinian physics lacked concepts necessary to understand spacetime, we may need fundamentally new concepts to bridge the gap between brain and mind. This humility about our current limitations, however, need not prevent productive scientific research into the neural correlates of consciousness, even if ultimate explanations remain elusive.`,
    questionStem: "According to the passage, proponents of panpsychism argue that their view",
    answerChoices: [
      { letter: "A", text: "completely solves the hard problem of consciousness" },
      { letter: "B", text: "is consistent with eliminative materialism" },
      { letter: "C", text: "avoids an impossible leap from non-conscious to conscious matter" },
      { letter: "D", text: "explains how simple experiences combine into complex consciousness" },
      { letter: "E", text: "proves that neuroscience cannot study consciousness" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that proponents of panpsychism 'argue that this avoids the seemingly impossible leap from non-conscious matter to conscious minds.'",
    wrongAnswerExplanations: {
      A: "Critics argue panpsychism relocates rather than solves the problem.",
      B: "Panpsychism and eliminative materialism are described as contrasting approaches.",
      D: "This is the criticism of panpsychism—that it doesn't explain combination.",
      E: "Panpsychism doesn't make claims about neuroscience's capabilities."
    },
    difficulty: "easy"
  },
  {
    id: "rc-2-020",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The "hard problem" of consciousness, as philosopher David Chalmers termed it, asks why physical processes in the brain give rise to subjective experience at all. While neuroscience can increasingly explain which brain regions activate during particular experiences, it has not explained why there is something it "feels like" to have those experiences. This explanatory gap between objective brain function and subjective experience remains one of philosophy's most intractable puzzles.

Some philosophers argue that consciousness cannot be reduced to physical processes, suggesting instead that consciousness is a fundamental feature of reality alongside mass and charge. This view, known as panpsychism, holds that even simple systems possess some form of rudimentary experience. Proponents argue that this avoids the seemingly impossible leap from non-conscious matter to conscious minds. Critics counter that panpsychism merely relocates rather than solves the problem: if everything has some form of consciousness, what explains how simple experiential properties combine to produce the complex unified consciousness humans possess?

A contrasting approach, eliminative materialism, denies that consciousness as traditionally conceived exists at all. Proponents argue that terms like "consciousness" and "subjective experience" are remnants of folk psychology that will eventually be replaced by more precise neuroscientific vocabulary. Just as we no longer explain combustion in terms of "phlogiston," future science will explain mental phenomena without invoking consciousness. Critics of this view argue that it denies the most immediately certain fact available to us—that we are having experiences right now.

Perhaps the most pragmatic position acknowledges that our current conceptual frameworks may be inadequate for understanding consciousness. Just as pre-Einsteinian physics lacked concepts necessary to understand spacetime, we may need fundamentally new concepts to bridge the gap between brain and mind. This humility about our current limitations, however, need not prevent productive scientific research into the neural correlates of consciousness, even if ultimate explanations remain elusive.`,
    questionStem: "Based on the passage, the author most likely views the 'pragmatic position' described in the final paragraph as",
    answerChoices: [
      { letter: "A", text: "fatalistic and defeatist about scientific progress" },
      { letter: "B", text: "reasonable in acknowledging limitations while encouraging continued research" },
      { letter: "C", text: "superior to all other philosophical positions on consciousness" },
      { letter: "D", text: "identical to the eliminative materialist view" },
      { letter: "E", text: "too dismissive of panpsychism's contributions" },
    ],
    correctAnswer: "B",
    explanation: "The author describes this as 'pragmatic,' noting that 'humility about limitations need not prevent productive scientific research,' presenting it favorably as balanced between acknowledging current limits and supporting continued investigation.",
    wrongAnswerExplanations: {
      A: "The passage explicitly says this humility 'need not prevent productive scientific research.'",
      C: "The author presents this position favorably but doesn't claim it's superior to all others.",
      D: "The pragmatic position is distinct from eliminative materialism.",
      E: "No dismissal of panpsychism is noted in the pragmatic position."
    },
    difficulty: "medium"
  }
];
