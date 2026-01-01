// Reading Comprehension Expansion Set 38
// High-quality LSAT-style passages and questions

import { Question } from "../lsat-types";

// ============================================
// PASSAGE 1: LAW - CONTRACTS AND CONSIDERATION DOCTRINE
// ============================================

const passage1 = `The doctrine of consideration stands as one of the foundational principles of Anglo-American contract law, requiring that each party to a contract provide something of value in exchange for the other party's promise. Without consideration, a promise is generally unenforceable—a mere gratuity that the law declines to treat as a binding obligation. This requirement distinguishes contracts from gifts and reflects the common law's historical reluctance to enforce promises made without a reciprocal exchange.

The classical formulation of consideration demands that a promisee either confer a legal benefit upon the promisor or incur a legal detriment at the promisor's request. Courts have traditionally insisted that consideration possess economic value, though even nominal consideration—the proverbial "peppercorn"—can technically satisfy the requirement. This formalistic approach meant that a promise supported by one dollar of consideration received the same legal protection as a promise supported by millions, provided the parties genuinely bargained for the exchange.

However, the consideration doctrine has long been subject to criticism and erosion. Critics argue that the requirement often defeats reasonable expectations and undermines commercial convenience without serving any clear policy goal. A business owner who promises a longtime employee a pension upon retirement, inducing the employee to remain with the company for additional years, may find that promise unenforceable if courts determine that the employee's continued service was not bargained-for consideration but merely a condition of a gratuitous promise. Such outcomes strike many observers as unjust.

The doctrine of promissory estoppel emerged as an equitable response to consideration's rigidity. Under this doctrine, a promise that the promisor should reasonably expect to induce action or forbearance, and that does induce such action or forbearance, becomes binding if injustice can be avoided only by enforcement. Promissory estoppel focuses on the promisee's reasonable reliance rather than on bargained-for exchange, providing a more flexible standard that courts have applied to enforce promises that would otherwise fail for lack of consideration.

Contemporary contract law reflects an uneasy coexistence between consideration and its alternatives. The Uniform Commercial Code dispenses with consideration requirements in certain commercial contexts, permitting modification of contracts without new consideration when done in good faith. Many scholars argue that consideration has become more of a formality than a substantive requirement, with courts finding creative ways to locate consideration where they wish to enforce a promise and rejecting claims where they do not. Whether consideration remains a meaningful doctrinal requirement or merely a ritualistic invocation continues to provoke scholarly debate.`;

export const rcPassage1Questions: Question[] = [
  {
    id: "rc-exp38-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The consideration doctrine should be abolished entirely because it serves no legitimate legal purpose in modern commercial transactions." },
      { letter: "B", text: "Promissory estoppel has completely replaced consideration as the primary basis for enforcing contractual promises." },
      { letter: "C", text: "While the consideration doctrine remains foundational in contract law, it has been subject to significant criticism and modification through alternative doctrines and statutory reforms." },
      { letter: "D", text: "Courts have consistently applied the consideration doctrine in a uniform manner that promotes commercial certainty and fairness." },
      { letter: "E", text: "The Uniform Commercial Code has eliminated all traditional contract law requirements in favor of a more flexible commercial standard." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces the consideration doctrine from its classical formulation through criticisms of its rigidity, the emergence of promissory estoppel as an alternative, and modifications under the UCC, concluding with scholarly debate about its continuing significance. Answer C captures this presentation of consideration as foundational but subject to modification and criticism.",
    difficulty: "medium",
    passageId: "rc-exp38-p1",
  },
  {
    id: "rc-exp38-002",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, promissory estoppel differs from traditional consideration doctrine in that promissory estoppel",
    answerChoices: [
      { letter: "A", text: "requires that promises be supported by economic value of at least nominal worth" },
      { letter: "B", text: "focuses on the promisee's reasonable reliance rather than on bargained-for exchange" },
      { letter: "C", text: "applies exclusively to promises made in commercial contexts governed by the UCC" },
      { letter: "D", text: "requires strict proof of mutual assent between contracting parties" },
      { letter: "E", text: "permits enforcement only when the promisor receives a tangible legal benefit" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Promissory estoppel focuses on the promisee's reasonable reliance rather than on bargained-for exchange, providing a more flexible standard.'",
    difficulty: "easy",
    passageId: "rc-exp38-p1",
  },
  {
    id: "rc-exp38-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about the relationship between consideration and contract enforcement?",
    answerChoices: [
      { letter: "A", text: "Courts will always refuse to enforce any promise that lacks traditional consideration." },
      { letter: "B", text: "The amount of consideration exchanged determines the extent of legal protection a promise receives." },
      { letter: "C", text: "A promise may be enforceable even without traditional consideration if the promisee reasonably relied on it to their detriment." },
      { letter: "D", text: "Consideration is required only for promises involving significant economic transactions." },
      { letter: "E", text: "Gratuitous promises are now enforceable in the same manner as promises supported by consideration." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes promissory estoppel as a doctrine that 'becomes binding if injustice can be avoided only by enforcement' when a promise induces reasonable reliance, providing an alternative basis for enforcement without traditional consideration.",
    difficulty: "medium",
    passageId: "rc-exp38-p1",
  },
  {
    id: "rc-exp38-004",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author discusses the example of a business owner promising a pension to a longtime employee primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate the successful application of the UCC's modified consideration requirements" },
      { letter: "B", text: "illustrate how the consideration doctrine can produce outcomes that many consider unjust" },
      { letter: "C", text: "explain why promissory estoppel is rarely applied in employment contexts" },
      { letter: "D", text: "argue that pension promises should never be legally enforceable" },
      { letter: "E", text: "show that the classical formulation of consideration has been universally abandoned" },
    ],
    correctAnswer: "B",
    explanation: "The pension example appears in the paragraph discussing criticism of the consideration doctrine, and the author notes that 'Such outcomes strike many observers as unjust.' The example illustrates the doctrine's potential to defeat reasonable expectations.",
    difficulty: "medium",
    passageId: "rc-exp38-p1",
  },
  {
    id: "rc-exp38-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward the consideration doctrine can best be described as",
    answerChoices: [
      { letter: "A", text: "unreservedly supportive of its traditional formulation and application" },
      { letter: "B", text: "analytically detached, presenting the doctrine's foundations, criticisms, and modifications without advocating for a particular position" },
      { letter: "C", text: "dismissive of the doctrine as entirely obsolete and unnecessary" },
      { letter: "D", text: "nostalgic for the doctrine's earlier, more rigorous application" },
      { letter: "E", text: "enthusiastic about the complete replacement of consideration with promissory estoppel" },
    ],
    correctAnswer: "B",
    explanation: "The author presents the doctrine's foundations, discusses criticisms, explains alternatives like promissory estoppel, and notes ongoing scholarly debate without advocating for any particular position on whether consideration should be retained or reformed.",
    difficulty: "medium",
    passageId: "rc-exp38-p1",
  },
  {
    id: "rc-exp38-006",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following, if true, would most strengthen the critics' argument that the consideration doctrine often defeats reasonable expectations?",
    answerChoices: [
      { letter: "A", text: "Courts consistently find consideration present in all commercial transactions where parties intended to be bound." },
      { letter: "B", text: "Studies show that most people believe a seriously made promise should be legally enforceable regardless of whether anything was given in return." },
      { letter: "C", text: "The consideration doctrine has remained unchanged since its initial formulation in English common law." },
      { letter: "D", text: "Promissory estoppel claims rarely succeed when raised as an alternative to consideration." },
      { letter: "E", text: "Business transactions involving nominal consideration are more common than those involving substantial exchanges." },
    ],
    correctAnswer: "B",
    explanation: "Critics argue that consideration 'defeats reasonable expectations.' Evidence that most people expect promises to be enforceable regardless of consideration would directly support this criticism by demonstrating a gap between public expectations and legal requirements.",
    difficulty: "hard",
    passageId: "rc-exp38-p1",
  },
];

// ============================================
// PASSAGE 2: NATURAL SCIENCES - SOIL SCIENCE AND AGRICULTURE
// ============================================

const passage2 = `Soil, often overlooked as merely "dirt," constitutes one of Earth's most complex and biologically active ecosystems. A single gram of healthy agricultural soil may contain billions of bacteria, millions of fungi, and thousands of protists, nematodes, and microarthropods. These organisms form intricate food webs that drive nutrient cycling, decompose organic matter, and maintain soil structure—functions essential to terrestrial ecosystem productivity and human food security.

The relationship between soil biology and agricultural productivity has received increasing attention as conventional farming practices have revealed their limitations. Intensive tillage disrupts fungal networks and accelerates organic matter decomposition, releasing carbon dioxide while degrading soil structure. Heavy fertilizer applications, while boosting short-term yields, can suppress beneficial microbial communities that otherwise help plants acquire nutrients naturally. Pesticides designed to eliminate crop pests often decimate beneficial soil organisms, including those that naturally suppress plant pathogens and promote nutrient uptake.

Among the most significant soil organisms are arbuscular mycorrhizal fungi, which form symbiotic associations with approximately 80 percent of terrestrial plant species. These fungi extend plant root systems through vast hyphal networks that access water and nutrients—particularly phosphorus—from soil volumes far exceeding what roots alone could reach. In exchange, plants provide the fungi with photosynthetically derived carbon compounds. Research has demonstrated that crops grown with intact mycorrhizal associations require less fertilizer and show enhanced drought tolerance compared to those in degraded soils lacking functional fungal networks.

Soil science has increasingly influenced agricultural policy and practice. Regenerative agriculture movements emphasize practices designed to rebuild soil organic matter and restore biological activity: cover cropping to maintain living roots year-round, reduced tillage to preserve fungal networks, diverse crop rotations to support varied microbial communities, and integrated livestock grazing to cycle nutrients. Proponents argue that such approaches can maintain productivity while sequestering atmospheric carbon, improving water retention, and reducing dependence on external inputs.

However, the transition to biologically-based soil management faces significant obstacles. Decades of conventional practice have degraded soil biological communities on much agricultural land, requiring years of investment before biological functions are restored. Farmers accustomed to the predictable responses of synthetic inputs may find biological systems more variable and difficult to manage. Economic pressures and existing agricultural policies often favor short-term yield maximization over long-term soil health. Whether regenerative approaches can scale to meet global food demands while reversing soil degradation remains an urgent question for agricultural science.`;

export const rcPassage2Questions: Question[] = [
  {
    id: "rc-exp38-007",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately states the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Arbuscular mycorrhizal fungi are the most important organisms in agricultural ecosystems and should be prioritized in all farming practices." },
      { letter: "B", text: "Conventional farming practices are inherently destructive and should be immediately abandoned in favor of organic methods." },
      { letter: "C", text: "Soil biology plays a crucial role in agricultural productivity, and while regenerative practices offer promising alternatives to conventional methods, significant challenges remain in implementing them at scale." },
      { letter: "D", text: "Soil degradation is irreversible, and agricultural science has failed to develop viable alternatives to current farming practices." },
      { letter: "E", text: "Economic considerations will always prevent farmers from adopting environmentally beneficial soil management practices." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes soil's biological complexity, explains how conventional practices degrade soil biology, discusses mycorrhizal fungi and regenerative agriculture alternatives, and concludes by noting challenges to implementation. Answer C captures this balanced presentation of both promise and challenges.",
    difficulty: "medium",
    passageId: "rc-exp38-p2",
  },
  {
    id: "rc-exp38-008",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, arbuscular mycorrhizal fungi benefit plants by",
    answerChoices: [
      { letter: "A", text: "directly producing nitrogen compounds that plants can absorb through their leaves" },
      { letter: "B", text: "extending plant access to water and nutrients through hyphal networks that reach beyond the root zone" },
      { letter: "C", text: "eliminating all pathogenic organisms from the soil surrounding plant roots" },
      { letter: "D", text: "converting atmospheric carbon dioxide into organic compounds that enrich the soil" },
      { letter: "E", text: "reducing plant dependence on photosynthesis by providing alternative energy sources" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that these fungi 'extend plant root systems through vast hyphal networks that access water and nutrients—particularly phosphorus—from soil volumes far exceeding what roots alone could reach.'",
    difficulty: "easy",
    passageId: "rc-exp38-p2",
  },
  {
    id: "rc-exp38-009",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, it can most reasonably be inferred that intensive tillage contributes to climate change because it",
    answerChoices: [
      { letter: "A", text: "increases methane emissions from soil bacteria" },
      { letter: "B", text: "accelerates decomposition of organic matter, releasing stored carbon as carbon dioxide" },
      { letter: "C", text: "requires petroleum-powered machinery that produces greenhouse gases" },
      { letter: "D", text: "necessitates the application of nitrogen fertilizers that emit nitrous oxide" },
      { letter: "E", text: "destroys plant species that would otherwise absorb atmospheric carbon" },
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Intensive tillage disrupts fungal networks and accelerates organic matter decomposition, releasing carbon dioxide.' The inference that this contributes to climate change follows from the release of carbon dioxide, a greenhouse gas.",
    difficulty: "medium",
    passageId: "rc-exp38-p2",
  },
  {
    id: "rc-exp38-010",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The author mentions that 'a single gram of healthy agricultural soil may contain billions of bacteria' primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that bacteria are more important than fungi in soil ecosystems" },
      { letter: "B", text: "emphasize the remarkable biological complexity and density of soil ecosystems" },
      { letter: "C", text: "suggest that bacterial contamination of food crops is an overlooked health risk" },
      { letter: "D", text: "demonstrate that soil science has developed sophisticated measurement techniques" },
      { letter: "E", text: "compare soil biodiversity unfavorably to that of other ecosystems" },
    ],
    correctAnswer: "B",
    explanation: "This statistic appears in the opening paragraph, where the author is establishing that soil 'constitutes one of Earth's most complex and biologically active ecosystems.' The enumeration of organisms per gram emphasizes this biological complexity.",
    difficulty: "medium",
    passageId: "rc-exp38-p2",
  },
  {
    id: "rc-exp38-011",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage suggests that proponents of regenerative agriculture would most likely agree with which one of the following statements?",
    answerChoices: [
      { letter: "A", text: "Short-term yield maximization should remain the primary goal of agricultural policy." },
      { letter: "B", text: "Synthetic fertilizers and pesticides are necessary for maintaining soil biological communities." },
      { letter: "C", text: "Agricultural practices that restore soil biology can simultaneously address productivity and environmental concerns." },
      { letter: "D", text: "The transition costs of changing farming practices outweigh any potential long-term benefits." },
      { letter: "E", text: "Soil degradation is an unavoidable consequence of meeting global food demands." },
    ],
    correctAnswer: "C",
    explanation: "The passage describes proponents of regenerative agriculture arguing 'that such approaches can maintain productivity while sequestering atmospheric carbon, improving water retention, and reducing dependence on external inputs.' This reflects a belief that productivity and environmental goals can be achieved together.",
    difficulty: "medium",
    passageId: "rc-exp38-p2",
  },
  {
    id: "rc-exp38-012",
    type: "organization",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately describes the organization of the passage?",
    answerChoices: [
      { letter: "A", text: "A problem is identified, its causes are analyzed, alternative approaches are described, and remaining challenges are acknowledged." },
      { letter: "B", text: "Two competing theories are presented, evidence for each is evaluated, and one is declared superior." },
      { letter: "C", text: "A historical narrative traces the development of a scientific field from its origins to its current state." },
      { letter: "D", text: "An experiment is described, its methodology is critiqued, and modifications are proposed." },
      { letter: "E", text: "A phenomenon is defined, several examples are provided, and practical applications are dismissed as impractical." },
    ],
    correctAnswer: "A",
    explanation: "The passage introduces soil biology's importance, identifies problems caused by conventional practices, describes regenerative alternatives, and concludes by acknowledging challenges to implementation—matching the pattern of problem, causes, alternatives, and remaining challenges.",
    difficulty: "hard",
    passageId: "rc-exp38-p2",
  },
];

// ============================================
// PASSAGE 3: HUMANITIES - CHINESE LANDSCAPE PAINTING
// ============================================

const passage3 = `Chinese landscape painting, known as shanshui (literally "mountain-water"), emerged as a distinct artistic tradition during the Tang dynasty (618–907 CE) and reached its apex during the Song dynasty (960–1279 CE). Unlike Western landscape painting, which often aims at realistic depiction of specific locations, classical Chinese landscape painting sought to capture the essential nature of the natural world and evoke philosophical contemplation. The mountains and waters that dominate these works were not merely scenic views but symbols of cosmic principles—the yang and yin that together compose the fundamental structure of reality.

The aesthetic principles governing shanshui painting reflect deep connections to Daoist and Buddhist thought. Painters sought to capture qi, the vital energy that animates all natural phenomena, through their brushwork. Empty space, rather than representing mere absence, embodied the productive void from which all forms emerge—a concept central to Daoist cosmology. Mountains rising from mist, streams disappearing into valleys, and vast expanses of unpainted silk all participated in an aesthetic that valued suggestion over explicit representation, inviting viewers to complete the image through contemplative engagement.

The Song dynasty witnessed a philosophical debate between Northern and Southern approaches to landscape painting that continues to influence Chinese aesthetics. Northern Song painters like Fan Kuan created monumental compositions featuring towering mountains that dominate tiny human figures, expressing nature's sublime power and humanity's proper humility before it. Southern Song painters, influenced by Chan Buddhism's emphasis on sudden enlightenment, favored more intimate compositions: a single branch, a corner of a mountain, a small boat on vast waters—images that distill the essence of a scene rather than documenting its totality.

The literati tradition that emerged during the Yuan dynasty (1271–1368) further transformed landscape painting by linking it explicitly to personal cultivation and political resistance. Scholar-officials who refused to serve the Mongol court turned to painting as a form of moral expression, developing a deliberately unpolished style that valued amateur sincerity over professional virtuosity. For these painters, the expressive qualities of brushwork mattered more than representational accuracy; their landscapes served as extensions of their calligraphy and vehicles for philosophical and political statements.

The influence of classical Chinese landscape painting extends far beyond China's borders. Japanese ink painting adapted Chinese techniques and philosophy while developing distinctive national characteristics. Contemporary artists worldwide continue to engage with shanshui traditions, finding in them alternative approaches to nature, representation, and the relationship between art and contemplation. The dialogue between Chinese landscape aesthetics and Western artistic traditions has enriched both, suggesting that these ancient paintings offer insights not bound by their historical origins.`;

export const rcPassage3Questions: Question[] = [
  {
    id: "rc-exp38-013",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Chinese landscape painting is technically superior to Western landscape painting because of its connection to Daoist philosophy." },
      { letter: "B", text: "The Song dynasty produced the only significant landscape paintings in Chinese history." },
      { letter: "C", text: "Chinese landscape painting developed as a philosophically rich tradition distinct from Western approaches, evolving through several periods while exerting lasting influence on art worldwide." },
      { letter: "D", text: "The literati painters of the Yuan dynasty rejected all previous traditions of Chinese landscape painting." },
      { letter: "E", text: "Contemporary artists have failed to understand the philosophical foundations of classical Chinese landscape painting." },
    ],
    correctAnswer: "C",
    explanation: "The passage traces Chinese landscape painting from its origins through various periods (Tang, Song, Yuan), emphasizes its philosophical distinctiveness from Western painting, and discusses its continuing global influence. Answer C captures this developmental narrative and emphasis on philosophical distinctiveness.",
    difficulty: "medium",
    passageId: "rc-exp38-p3",
  },
  {
    id: "rc-exp38-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, empty space in classical Chinese landscape painting",
    answerChoices: [
      { letter: "A", text: "represents the painter's inability to depict certain natural features" },
      { letter: "B", text: "embodies the productive void from which all forms emerge" },
      { letter: "C", text: "indicates areas where the painting was left unfinished" },
      { letter: "D", text: "creates a frame that directs attention to the painted elements" },
      { letter: "E", text: "reflects Western influence on Chinese aesthetic principles" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'Empty space, rather than representing mere absence, embodied the productive void from which all forms emerge—a concept central to Daoist cosmology.'",
    difficulty: "easy",
    passageId: "rc-exp38-p3",
  },
  {
    id: "rc-exp38-015",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, it can be inferred that Yuan dynasty literati painters",
    answerChoices: [
      { letter: "A", text: "sought employment at the Mongol court to advance their artistic careers" },
      { letter: "B", text: "considered technical virtuosity more important than personal expression" },
      { letter: "C", text: "used their art as a vehicle for expressing moral and political positions" },
      { letter: "D", text: "rejected all connections between painting and calligraphy" },
      { letter: "E", text: "attempted to create exact reproductions of natural scenes" },
    ],
    correctAnswer: "C",
    explanation: "The passage describes literati painters as scholar-officials who 'refused to serve the Mongol court' and 'turned to painting as a form of moral expression,' with landscapes serving 'as extensions of their calligraphy and vehicles for philosophical and political statements.'",
    difficulty: "medium",
    passageId: "rc-exp38-p3",
  },
  {
    id: "rc-exp38-016",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author mentions Fan Kuan's monumental compositions primarily in order to",
    answerChoices: [
      { letter: "A", text: "argue that Northern Song painting was technically superior to Southern Song painting" },
      { letter: "B", text: "provide an example illustrating the Northern Song approach to landscape painting" },
      { letter: "C", text: "demonstrate that Chinese painters influenced European Romantic landscape artists" },
      { letter: "D", text: "criticize the representation of human figures in Chinese landscape painting" },
      { letter: "E", text: "explain why literati painters rejected professional virtuosity" },
    ],
    correctAnswer: "B",
    explanation: "Fan Kuan is mentioned in the paragraph contrasting Northern and Southern Song approaches, with his 'monumental compositions featuring towering mountains' offered as an example of the Northern approach that expresses 'nature's sublime power and humanity's proper humility before it.'",
    difficulty: "medium",
    passageId: "rc-exp38-p3",
  },
  {
    id: "rc-exp38-017",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward the continuing relevance of classical Chinese landscape painting is best characterized as",
    answerChoices: [
      { letter: "A", text: "skeptical, suggesting that these paintings are primarily of historical interest" },
      { letter: "B", text: "appreciative, indicating that this tradition offers enduring insights not limited to its original context" },
      { letter: "C", text: "dismissive, arguing that contemporary artists have surpassed classical techniques" },
      { letter: "D", text: "ambivalent, expressing uncertainty about whether Eastern and Western traditions can meaningfully interact" },
      { letter: "E", text: "regretful, lamenting that modern audiences cannot appreciate the philosophical depth of these works" },
    ],
    correctAnswer: "B",
    explanation: "The passage concludes by noting that the 'dialogue between Chinese landscape aesthetics and Western artistic traditions has enriched both, suggesting that these ancient paintings offer insights not bound by their historical origins.' This expresses appreciation for their continuing relevance.",
    difficulty: "medium",
    passageId: "rc-exp38-p3",
  },
  {
    id: "rc-exp38-018",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, a contemporary artist seeking to work in the tradition of Southern Song landscape painting would most likely",
    answerChoices: [
      { letter: "A", text: "create detailed panoramic views showing entire mountain ranges in precise topographical detail" },
      { letter: "B", text: "focus on monumental compositions that emphasize nature's overwhelming scale relative to human figures" },
      { letter: "C", text: "employ a deliberately unpolished style that rejects professional technical standards" },
      { letter: "D", text: "create intimate compositions that distill essential qualities through suggestive, partial images" },
      { letter: "E", text: "paint realistic depictions of specific identifiable locations" },
    ],
    correctAnswer: "D",
    explanation: "The passage describes Southern Song painters as favoring 'more intimate compositions: a single branch, a corner of a mountain, a small boat on vast waters—images that distill the essence of a scene rather than documenting its totality.' An artist in this tradition would likely adopt this approach.",
    difficulty: "hard",
    passageId: "rc-exp38-p3",
  },
];

// ============================================
// PASSAGE 4: SOCIAL SCIENCES - DISABILITY STUDIES AND SOCIAL MODEL
// ============================================

const passage4 = `The social model of disability emerged in the 1970s and 1980s as disabled activists and scholars challenged prevailing understandings of disability that located the "problem" within individual bodies and minds. In contrast to what came to be termed the "medical model"—which viewed disability as a personal tragedy requiring medical intervention, rehabilitation, or cure—the social model drew a sharp distinction between impairment (biological or physical conditions) and disability (the social, environmental, and attitudinal barriers that exclude people with impairments from full participation in society).

This conceptual distinction proved politically powerful. If disability results not from individual deficits but from inaccessible environments and discriminatory practices, then the appropriate response shifts from treating or curing individuals to transforming society. Ramps, screen readers, sign language interpretation, and flexible work arrangements become not charitable accommodations but matters of civil rights. The social model provided intellectual foundations for disability rights movements that achieved landmark legislation, including the Americans with Disabilities Act of 1990, which mandated accessibility and prohibited discrimination in employment, public services, and public accommodations.

Critics within disability studies have increasingly complicated the social model while acknowledging its historical importance. Some argue that the sharp distinction between impairment and disability risks minimizing the significance of bodily experience, including chronic pain, fatigue, and illness that cannot be solved through social accommodation alone. These critics suggest that disability identity and experience cannot be reduced to social oppression but must grapple with the complex realities of embodiment. Feminist disability scholars have particularly emphasized how experiences of the body, including pain and vulnerability, shape disabled subjectivity in ways that pure social constructionism cannot capture.

Other scholars have questioned whether the social model applies equally across different types of impairments. The model was developed primarily by people with physical and sensory disabilities, for whom environmental modifications can substantially reduce barriers. However, people with cognitive, intellectual, or psychiatric disabilities may face barriers that are less amenable to the architectural or technological solutions that the social model tends to emphasize. Additionally, the experiences of people with progressive or fluctuating conditions challenge the stability of categories upon which both medical and social models rely.

Contemporary disability studies increasingly embrace more complex frameworks that acknowledge both social barriers and embodied experience, both structural oppression and individual variation. Rather than abandoning the social model's insights, scholars seek to expand them, recognizing that disability exists at the intersection of bodies, environments, cultures, and histories. This more nuanced understanding informs current advocacy for universal design, inclusive education, and policies that address both accessibility and the diversity of disabled experiences.`;

export const rcPassage4Questions: Question[] = [
  {
    id: "rc-exp38-019",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The primary purpose of the passage is to",
    answerChoices: [
      { letter: "A", text: "argue that the medical model of disability should replace the social model in contemporary policy discussions" },
      { letter: "B", text: "trace the development of the social model of disability, its political impact, and subsequent scholarly critiques that have led to more complex understandings" },
      { letter: "C", text: "demonstrate that disability studies has failed to develop coherent theoretical frameworks" },
      { letter: "D", text: "compare the experiences of people with physical disabilities to those with cognitive disabilities" },
      { letter: "E", text: "explain why the Americans with Disabilities Act of 1990 has been ineffective in achieving its goals" },
    ],
    correctAnswer: "B",
    explanation: "The passage traces the social model's emergence, its political power and legislative impact, critiques from within disability studies, questions about its applicability across different impairments, and contemporary efforts to develop more complex frameworks. Answer B captures this developmental trajectory.",
    difficulty: "medium",
    passageId: "rc-exp38-p4",
  },
  {
    id: "rc-exp38-020",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, the social model of disability distinguishes between",
    answerChoices: [
      { letter: "A", text: "physical disabilities and psychiatric disabilities" },
      { letter: "B", text: "impairment as a biological condition and disability as social exclusion" },
      { letter: "C", text: "temporary disabilities and permanent disabilities" },
      { letter: "D", text: "visible disabilities and invisible disabilities" },
      { letter: "E", text: "congenital disabilities and acquired disabilities" },
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly states that 'the social model drew a sharp distinction between impairment (biological or physical conditions) and disability (the social, environmental, and attitudinal barriers that exclude people with impairments from full participation in society).'",
    difficulty: "easy",
    passageId: "rc-exp38-p4",
  },
  {
    id: "rc-exp38-021",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, feminist disability scholars would most likely argue that",
    answerChoices: [
      { letter: "A", text: "the social model is entirely correct and needs no modification" },
      { letter: "B", text: "the medical model provides a better understanding of disability than the social model" },
      { letter: "C", text: "experiences of embodiment, including pain and vulnerability, are important aspects of disability that the social model inadequately addresses" },
      { letter: "D", text: "disability is purely a social construction with no connection to bodily experience" },
      { letter: "E", text: "environmental modifications are the only appropriate response to disability" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'Feminist disability scholars have particularly emphasized how experiences of the body, including pain and vulnerability, shape disabled subjectivity in ways that pure social constructionism cannot capture.'",
    difficulty: "medium",
    passageId: "rc-exp38-p4",
  },
  {
    id: "rc-exp38-022",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author mentions ramps, screen readers, and sign language interpretation primarily in order to",
    answerChoices: [
      { letter: "A", text: "criticize the inadequacy of current accessibility measures" },
      { letter: "B", text: "illustrate how the social model reframes accommodations as civil rights rather than charity" },
      { letter: "C", text: "argue that technological solutions have solved most accessibility problems" },
      { letter: "D", text: "compare different approaches to accommodating physical versus sensory disabilities" },
      { letter: "E", text: "explain why the medical model is superior to the social model" },
    ],
    correctAnswer: "B",
    explanation: "These examples appear in the paragraph explaining how the social model shifts responses from treating individuals to transforming society, where such accommodations 'become not charitable accommodations but matters of civil rights.'",
    difficulty: "medium",
    passageId: "rc-exp38-p4",
  },
  {
    id: "rc-exp38-023",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage suggests that the social model may be less applicable to people with cognitive or psychiatric disabilities because",
    answerChoices: [
      { letter: "A", text: "these disabilities are entirely biological and have no social dimensions" },
      { letter: "B", text: "people with these disabilities have not been involved in disability rights advocacy" },
      { letter: "C", text: "the barriers they face may be less amenable to the architectural or technological solutions the social model tends to emphasize" },
      { letter: "D", text: "the Americans with Disabilities Act does not protect people with cognitive or psychiatric disabilities" },
      { letter: "E", text: "contemporary disability studies no longer considers these conditions to be disabilities" },
    ],
    correctAnswer: "C",
    explanation: "The passage states that 'people with cognitive, intellectual, or psychiatric disabilities may face barriers that are less amenable to the architectural or technological solutions that the social model tends to emphasize.'",
    difficulty: "medium",
    passageId: "rc-exp38-p4",
  },
  {
    id: "rc-exp38-024",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The author's attitude toward critiques of the social model can best be described as",
    answerChoices: [
      { letter: "A", text: "hostile, viewing them as attacks on the disability rights movement" },
      { letter: "B", text: "accepting, presenting them as valuable contributions that expand rather than reject the model's core insights" },
      { letter: "C", text: "dismissive, suggesting that critics fundamentally misunderstand the social model" },
      { letter: "D", text: "confused, failing to articulate a clear position on the validity of the critiques" },
      { letter: "E", text: "nostalgic, preferring the original formulation of the social model to contemporary revisions" },
    ],
    correctAnswer: "B",
    explanation: "The passage presents critiques as 'complicat[ing] the social model while acknowledging its historical importance' and describes contemporary scholars as seeking 'to expand' rather than abandon the model's insights. This suggests acceptance of critiques as valuable contributions.",
    difficulty: "medium",
    passageId: "rc-exp38-p4",
  },
];

// Export all RC questions from Set 38
export const rcQuestionsExpSet38: Question[] = [
  ...rcPassage1Questions,
  ...rcPassage2Questions,
  ...rcPassage3Questions,
  ...rcPassage4Questions,
];

// Export passages for reference
export const rcPassagesSet38 = {
  passage1: { id: "rc-exp38-p1", content: passage1, topic: "law", title: "Contracts and Consideration Doctrine" },
  passage2: { id: "rc-exp38-p2", content: passage2, topic: "natural-sciences", title: "Soil Science and Agriculture" },
  passage3: { id: "rc-exp38-p3", content: passage3, topic: "humanities", title: "Chinese Landscape Painting" },
  passage4: { id: "rc-exp38-p4", content: passage4, topic: "social-sciences", title: "Disability Studies and Social Model" },
};
