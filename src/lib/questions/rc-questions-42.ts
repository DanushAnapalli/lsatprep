// Reading Comprehension Questions Bank - Set 42
// Technology - Biotechnology & Genetics

import { Question } from "../lsat-types";

// PASSAGE 1: CRISPR and Gene Editing Ethics
const passage1 = `CRISPR-Cas9, a revolutionary gene-editing technology discovered in 2012, enables scientists to make precise changes to DNA with unprecedented ease and accuracy. Unlike previous gene-editing methods that were expensive, time-consuming, and often imprecise, CRISPR allows researchers to target specific genetic sequences and modify them efficiently. This technology has enormous potential applications: correcting genetic diseases, developing disease-resistant crops, engineering beneficial traits in livestock, and advancing basic scientific research. However, CRISPR's power and accessibility also raise profound ethical questions about how humanity should exercise control over the genetic code of living organisms, including our own species.

The most straightforward and least controversial application involves somatic cell editing—modifying genes in body cells of individuals to treat disease. A patient with sickle cell disease, for example, might have their bone marrow cells edited to correct the mutation causing the condition. Such modifications affect only the treated individual and are not inherited by offspring, making them ethically similar to conventional medical treatments. Successful clinical trials using CRISPR to treat sickle cell disease and beta-thalassemia have demonstrated the technology's therapeutic potential, and few ethicists object to such applications when they address serious diseases for which no other effective treatments exist.

Germline editing—modifying genes in embryos, eggs, or sperm—presents far greater ethical complexity. Such modifications are inherited by future generations, permanently altering the human gene pool. In 2018, Chinese scientist He Jiankui shocked the scientific community by announcing he had created the first gene-edited babies, twin girls whose CCR5 gene he had modified in an attempt to confer HIV resistance. The international response was swift and overwhelmingly negative. Critics argued that the procedure was medically unnecessary (other methods prevent HIV transmission), carried unknown risks to the children and future generations, violated ethical norms against human germline modification, and represented a dangerous step toward "designer babies."

The prospect of enhancement—using gene editing not to treat disease but to improve normal traits—raises distinct concerns. While few object to correcting severe genetic diseases, editing genes to increase intelligence, athletic ability, or physical appearance seems qualitatively different. Such enhancements might exacerbate social inequality if available only to wealthy individuals, creating a genetic divide between the enhanced and unenhanced. They also raise questions about human nature and authenticity: Would enhanced individuals be less "genuinely" themselves? Would society's acceptance of genetic enhancement create pressure to modify children, turning what begins as choice into expectation? Some philosophers argue these concerns are overblown, noting that parents already seek advantages for children through education, nutrition, and healthcare, making genetic enhancement a continuation rather than a radical departure from existing practices.

Regulatory approaches to CRISPR vary globally, reflecting different cultural values and political systems. Many countries prohibit germline editing entirely, while others permit research subject to strict oversight. The lack of international consensus creates risks: scientists could evade restrictive regulations by conducting research in more permissive jurisdictions, and unequal access to gene-editing technologies could deepen global health inequalities. Some bioethicists advocate for an international governance framework that would establish universal standards, ensure equitable access to beneficial applications, and prohibit certain uses while allowing others to proceed with appropriate safeguards. However, achieving such consensus requires reconciling diverse views about human nature, the goals of medicine, parental rights, and the acceptable scope of human intervention in natural processes—a formidable challenge that CRISPR's rapid development has made urgent.`;

// PASSAGE 2: Synthetic Biology and Biosecurity
const passage2 = `Synthetic biology, which involves designing and constructing new biological parts and systems, represents an emerging frontier in biotechnology with both tremendous promise and serious security risks. Advances in DNA synthesis and genome engineering enable researchers to create novel organisms with useful properties: bacteria engineered to produce biofuels, yeast modified to manufacture medicines, and plants designed to remove environmental contaminants. However, these same techniques could potentially be used to create dangerous biological agents, raising concerns that synthetic biology might enable bioterrorism or accidental releases of harmful organisms.

The technology's dual-use dilemma is exemplified by controversial "gain-of-function" research on pathogens. Scientists have conducted experiments making viruses more transmissible or virulent to understand how pandemics might emerge and to develop countermeasures. In 2011, researchers created a modified H5N1 influenza virus transmissible between mammals, demonstrating that a naturally occurring virus could acquire pandemic potential. Proponents argued this research was essential for pandemic preparedness, enabling development of vaccines and therapeutics before natural emergence of such viruses. Critics countered that the research risked accidental release of a pandemic pathogen and that publishing detailed methods could enable bioterrorists to recreate dangerous viruses.

The synthetic biology community has attempted to address biosecurity concerns through self-governance initiatives. DNA synthesis companies have voluntarily adopted screening protocols to prevent orders for dangerous genetic sequences. Professional societies have developed codes of conduct emphasizing researchers' responsibility to consider security implications. Academic institutions provide biosafety training and maintain oversight committees. However, skeptics question whether voluntary measures suffice. Screening protocols may fail to detect cleverly disguised orders or sequences that become dangerous only when combined. Oversight committees lack enforcement power and cannot monitor research conducted outside traditional academic settings. As DNA synthesis becomes cheaper and more accessible, amateur biologists without formal training or institutional oversight can conduct experiments that might pose risks.

Regulatory approaches face significant challenges. Comprehensive regulation of synthetic biology would need to cover a vast range of activities, from professional research laboratories to educational programs to hobbyist communities. Overly restrictive regulations might stifle beneficial research and innovation, driving activity underground or to less regulated jurisdictions. Moreover, much synthetic biology research serves legitimate purposes—distinguishing beneficial from dangerous applications often requires technical expertise and contextual judgment that general regulations struggle to capture. Some experts propose focusing oversight on specific high-risk activities rather than attempting comprehensive regulation, such as requiring special licenses for synthesizing certain pathogen genomes or conducting gain-of-function research.

International cooperation presents both opportunities and obstacles. Biological threats are inherently global; a pathogen released anywhere can spread worldwide. The Biological Weapons Convention, which prohibits development of biological weapons, provides a potential framework for addressing synthetic biology risks, but the treaty lacks verification mechanisms and has struggled to adapt to rapid technological change. Some nations view biosecurity restrictions as potential barriers to their biotechnology industries or as tools for more developed nations to maintain technological advantages. Building effective international governance requires balancing legitimate security concerns with equitable access to beneficial biotechnology applications, ensuring that biosecurity measures do not perpetuate global health inequalities. The challenge is developing frameworks nimble enough to adapt as the technology evolves while providing sufficient security against misuse—a balance that has proven elusive but grows more urgent as synthetic biology capabilities continue to advance.`;

// PASSAGE 3: Personalized Medicine and Genetic Privacy
const passage3 = `The declining cost of genome sequencing—from approximately $3 billion for the first human genome in 2003 to less than $1,000 today—has made personalized medicine increasingly feasible. By analyzing an individual's genetic information, physicians can predict disease risks, select optimal medications, and tailor treatments to patients' genetic profiles. Pharmacogenomics, for example, uses genetic testing to determine how patients will metabolize different drugs, allowing doctors to prescribe medications and dosages most likely to be effective while minimizing adverse reactions. This precision approach promises to improve health outcomes and reduce healthcare costs by avoiding ineffective treatments.

However, the accumulation of genetic data raises significant privacy concerns. Genetic information is uniquely sensitive: it can reveal not only an individual's health risks but also information about biological relatives, ancestry, and potentially behavioral predispositions. Once genetic data exists in digital form, it could potentially be accessed by employers, insurers, law enforcement, or hackers. The Genetic Information Nondiscrimination Act (GINA), enacted in the United States in 2008, prohibits genetic discrimination in employment and health insurance, but the law has significant limitations. It does not cover life insurance, disability insurance, or long-term care insurance, where genetic information could affect coverage and pricing. It provides no protection against use of genetic data by law enforcement or national security agencies.

The growth of direct-to-consumer genetic testing compounds privacy challenges. Companies like 23andMe and Ancestry.com have collected genetic data from millions of customers seeking information about health risks, ancestry, or biological relatives. These companies' privacy policies typically permit use of aggregated, de-identified data for research, and some explicitly reserve the right to share data with law enforcement when legally required. In several high-profile cases, police have used genetic genealogy databases to identify criminal suspects by finding relatives who had submitted DNA for ancestry testing. While such applications have solved serious crimes, they raise concerns about genetic surveillance and whether people who submit DNA for ancestry testing have meaningfully consented to their genetic data being used to implicate relatives in criminal investigations.

The concept of "genetic privacy" itself requires careful examination. Unlike most personal information, genetic data inherently concerns multiple individuals. Your genome provides information about your parents, siblings, and children. If you choose to keep your genetic information private, your sibling's decision to undergo genetic testing may reveal information about shared genetic risks regardless of your preferences. This interconnectedness challenges the individualistic framework underlying most privacy law and raises questions about whose consent is required before genetic information can be disclosed or used.

Furthermore, even strong privacy protections may not prevent genetic discrimination if they are not rigorously enforced or if they fail to anticipate novel uses of genetic information. As understanding of genetic contributions to health, behavior, and traits advances, the potential uses—and misuses—of genetic data will likely expand in unpredictable ways. Some privacy advocates argue for treating genetic data as a public health resource rather than individual property, with strong restrictions on commercial and governmental use but broad access for medical research and public health purposes. Others emphasize individual control, proposing that people should have absolute rights to determine how their genetic information is used. Reconciling personalized medicine's promise with privacy protection requires not only appropriate legal frameworks but also ongoing public deliberation about what genetic information means, who it belongs to, and how society should balance competing interests in genetic data's use and protection.`;

// PASSAGE 4: Agricultural Biotechnology and Food Security
const passage4 = `Genetically modified (GM) crops have been cultivated commercially for nearly three decades, with adoption particularly widespread in the Americas for crops like soybeans, corn, and cotton. These crops are engineered with traits such as resistance to herbicides or pests, potentially increasing yields and reducing pesticide use. Proponents argue that agricultural biotechnology is essential for feeding a growing global population facing climate change, as genetic modification can create crops tolerant of drought, salinity, heat, and pests that increasingly threaten conventional agriculture. Critics counter that GM crops pose environmental risks, benefit large corporations more than small farmers, and represent an inappropriate form of human intervention in natural systems.

The environmental impact of GM crops remains contested. Studies show that insect-resistant Bt crops have reduced insecticide use in many contexts, decreasing farmers' pesticide exposure and environmental contamination. However, widespread planting of herbicide-tolerant crops has led to increased use of certain herbicides and contributed to evolution of herbicide-resistant weeds, requiring farmers to apply multiple herbicides or resort to manual weeding. Critics also express concerns about gene flow—the possibility that modified genes could spread to wild relatives of crop plants, potentially creating invasive "superweeds" or disrupting ecosystems. Proponents respond that conventional breeding has always involved genetic changes that could theoretically spread to wild relatives, and that gene flow risks can be managed through appropriate cultivation practices and regulatory oversight.

The economic and social dimensions of agricultural biotechnology raise distinct concerns. GM seeds are typically patented, and farmers who purchase them must sign agreements prohibiting seed saving—the traditional practice of reserving part of each harvest for replanting. This gives biotechnology companies substantial control over the agricultural supply chain and creates ongoing costs for farmers who must purchase new seeds annually. In developing countries, small-scale farmers may lack resources to purchase GM seeds and associated inputs, potentially deepening agricultural inequalities. Defenders note that farmers voluntarily adopt GM crops because they provide economic benefits, and that some biotechnology initiatives specifically target small farmers in developing countries through public-sector research, such as the development of Golden Rice—rice engineered to produce beta-carotene to address vitamin A deficiency.

The "substantial equivalence" principle, which holds that GM crops compositionally similar to conventional varieties should be regulated similarly, has governed regulatory approaches in many countries. Under this framework, GM crops undergo safety assessments but are not subject to the extensive long-term testing required for pharmaceuticals. Critics argue this approach is inadequate, pointing to uncertainties about long-term health and environmental effects and advocating for mandatory labeling of GM foods to enable consumer choice. Supporters counter that extensive research has found no evidence that approved GM crops pose health risks, and that mandatory labeling misleadingly suggests GM foods are less safe than conventional alternatives.

Cross-cultural differences in attitudes toward agricultural biotechnology partly reflect varying conceptions of nature, technology, and food. European resistance to GM crops often invokes the "precautionary principle"—the idea that potentially harmful innovations should not be deployed until proven safe. This contrasts with approaches in the United States and some developing countries that accept risks as manageable through regulation and ongoing monitoring. Some critics see this difference as reflecting European skepticism of corporate agriculture and preference for traditional farming, while supporters view it as appropriate caution about intervening in complex ecological systems. As climate change intensifies agricultural challenges, the debate over GM crops increasingly frames them not as luxury innovations but as potentially necessary tools for maintaining food security. Whether agricultural biotechnology can fulfill its promise while addressing legitimate environmental, economic, and cultural concerns depends on developing governance systems that rigorously assess risks, ensure equitable access to benefits, and respect diverse values about food and agriculture.`;

export const rcQuestionsSet42: Question[] = [
  // Passage 1 Questions
  {
    id: "rc-42-001",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "CRISPR technology should be banned entirely due to its ethical risks" },
      { letter: "B", text: "CRISPR offers powerful applications for treating disease but raises complex ethical questions, particularly regarding germline editing and enhancement" },
      { letter: "C", text: "All gene editing, including somatic cell therapy, is ethically problematic and should be prohibited" },
      { letter: "D", text: "The creation of gene-edited babies has definitively proven that international consensus on CRISPR regulation is impossible" },
      { letter: "E", text: "Genetic enhancement is ethically identical to providing children with education and healthcare" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces CRISPR's capabilities and ethical questions (paragraph 1), discusses relatively uncontroversial somatic editing (paragraph 2), examines highly controversial germline editing (paragraph 3), analyzes enhancement concerns (paragraph 4), and addresses regulatory challenges (paragraph 5). This structure supports option B's description of therapeutic promise and ethical complexity.",
    difficulty: "medium",
    passageId: "rc42-p1",
  },
  {
    id: "rc-42-002",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The passage discusses He Jiankui's creation of gene-edited babies primarily in order to",
    answerChoices: [
      { letter: "A", text: "demonstrate that germline editing is now universally accepted" },
      { letter: "B", text: "provide an example that illustrates the controversies and ethical concerns surrounding germline editing" },
      { letter: "C", text: "prove that CRISPR technology is inherently dangerous" },
      { letter: "D", text: "support the argument that all gene editing should be permitted without regulation" },
      { letter: "E", text: "show that HIV resistance is easily achieved through genetic modification" },
    ],
    correctAnswer: "B",
    explanation: "The He Jiankui example appears in paragraph 3's discussion of germline editing's 'far greater ethical complexity.' The passage describes the 'swift and overwhelmingly negative' response and lists multiple ethical objections, using this case to illustrate the controversies germline editing generates. This matches option B.",
    difficulty: "easy",
    passageId: "rc42-p1",
  },
  {
    id: "rc-42-003",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "Based on the passage, critics of genetic enhancement would most likely argue that",
    answerChoices: [
      { letter: "A", text: "somatic cell therapy for serious diseases should also be prohibited" },
      { letter: "B", text: "genetic enhancement is ethically indistinguishable from treating genetic diseases" },
      { letter: "C", text: "enhancement could create social inequalities and pressure to modify children" },
      { letter: "D", text: "all forms of seeking advantages for children are ethically problematic" },
      { letter: "E", text: "enhanced individuals are definitively less authentic than unenhanced ones" },
    ],
    correctAnswer: "C",
    explanation: "Paragraph 4 presents enhancement critics' concerns: enhancements 'might exacerbate social inequality if available only to wealthy individuals' and could create 'pressure to modify children, turning what begins as choice into expectation.' This directly supports option C. The passage presents authenticity questions but doesn't attribute definitive claims to critics (E), and critics distinguish enhancement from disease treatment (B).",
    difficulty: "medium",
    passageId: "rc42-p1",
  },
  {
    id: "rc-42-004",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "According to the passage, somatic cell editing differs from germline editing in that",
    answerChoices: [
      { letter: "A", text: "somatic cell editing is less precise than germline editing" },
      { letter: "B", text: "somatic cell editing affects only the treated individual and is not inherited by offspring" },
      { letter: "C", text: "somatic cell editing is more expensive and difficult to perform" },
      { letter: "D", text: "somatic cell editing has no therapeutic applications" },
      { letter: "E", text: "somatic cell editing is universally prohibited by international regulations" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 2 explicitly states about somatic cell editing: 'Such modifications affect only the treated individual and are not inherited by offspring, making them ethically similar to conventional medical treatments.' In contrast, paragraph 3 notes germline modifications 'are inherited by future generations.' This directly supports option B.",
    difficulty: "easy",
    passageId: "rc42-p1",
  },
  {
    id: "rc-42-005",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage1,
    questionStem: "The author's attitude toward CRISPR technology can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified enthusiasm for all applications" },
      { letter: "B", text: "complete opposition to any use of gene editing" },
      { letter: "C", text: "balanced recognition of both therapeutic potential and ethical challenges requiring careful consideration" },
      { letter: "D", text: "dismissive of ethical concerns as overblown" },
      { letter: "E", text: "convinced that international consensus is impossible to achieve" },
    ],
    correctAnswer: "C",
    explanation: "The author acknowledges CRISPR's 'enormous potential applications' and therapeutic successes while extensively discussing 'profound ethical questions' and challenges, presenting multiple perspectives without clearly endorsing positions, and noting regulation is 'urgent.' This balanced approach matches option C.",
    difficulty: "easy",
    passageId: "rc42-p1",
  },

  // Passage 2 Questions
  {
    id: "rc-42-006",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Synthetic biology should be completely banned due to biosecurity risks" },
      { letter: "B", text: "Synthetic biology offers beneficial applications but raises security concerns, and current governance approaches face significant challenges" },
      { letter: "C", text: "Voluntary self-governance measures have completely solved all biosecurity concerns" },
      { letter: "D", text: "Gain-of-function research has no legitimate scientific purposes" },
      { letter: "E", text: "International cooperation on biosecurity is impossible to achieve" },
    ],
    correctAnswer: "B",
    explanation: "The passage describes synthetic biology's promise and risks (paragraph 1), illustrates dual-use dilemmas (paragraph 2), examines self-governance limitations (paragraph 3), discusses regulatory challenges (paragraph 4), and analyzes international cooperation issues (paragraph 5). This structure supports option B's description of benefits, concerns, and governance challenges.",
    difficulty: "medium",
    passageId: "rc42-p2",
  },
  {
    id: "rc-42-007",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "The passage discusses the 2011 H5N1 influenza research primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that gain-of-function research should never be conducted" },
      { letter: "B", text: "illustrate the dual-use dilemma in which research has both beneficial and potentially dangerous applications" },
      { letter: "C", text: "demonstrate that pandemic preparedness is impossible" },
      { letter: "D", text: "show that voluntary screening protocols are completely effective" },
      { letter: "E", text: "argue that all pathogen research should be unregulated" },
    ],
    correctAnswer: "B",
    explanation: "The H5N1 research appears in paragraph 2 as an example of the 'dual-use dilemma,' with proponents arguing it was 'essential for pandemic preparedness' while critics warned of 'accidental release' and bioterrorism risks. This exemplifies dual-use nature, matching option B.",
    difficulty: "easy",
    passageId: "rc42-p2",
  },
  {
    id: "rc-42-008",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Based on the passage, skeptics of voluntary self-governance measures would most likely agree with which of the following?",
    answerChoices: [
      { letter: "A", text: "Voluntary measures provide complete protection against biosecurity risks" },
      { letter: "B", text: "Screening protocols may fail to detect dangerous sequences and lack enforcement mechanisms" },
      { letter: "C", text: "All synthetic biology research should be prohibited regardless of purpose" },
      { letter: "D", text: "Amateur biologists pose no biosecurity risks" },
      { letter: "E", text: "Oversight committees have unlimited enforcement power" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 3 presents skeptics' view that 'voluntary measures' may not 'suffice,' noting 'Screening protocols may fail to detect cleverly disguised orders' and 'Oversight committees lack enforcement power.' This directly supports option B. The passage indicates skeptics question adequacy, not support prohibition (C) or deny risks (D).",
    difficulty: "medium",
    passageId: "rc42-p2",
  },
  {
    id: "rc-42-009",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "According to the passage, the Biological Weapons Convention",
    answerChoices: [
      { letter: "A", text: "provides comprehensive verification mechanisms for all biological research" },
      { letter: "B", text: "prohibits development of biological weapons but lacks verification mechanisms" },
      { letter: "C", text: "has successfully adapted to all technological changes in synthetic biology" },
      { letter: "D", text: "requires no international cooperation to be effective" },
      { letter: "E", text: "completely prevents all nations from viewing biosecurity as potential trade barriers" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 5 states: 'The Biological Weapons Convention, which prohibits development of biological weapons, provides a potential framework for addressing synthetic biology risks, but the treaty lacks verification mechanisms and has struggled to adapt to rapid technological change.' This directly corresponds to option B.",
    difficulty: "easy",
    passageId: "rc42-p2",
  },
  {
    id: "rc-42-010",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage2,
    questionStem: "Which of the following scenarios would best illustrate the regulatory challenges discussed in the passage?",
    answerChoices: [
      { letter: "A", text: "A simple regulation that successfully covers all synthetic biology activities without any unintended consequences" },
      { letter: "B", text: "A situation where distinguishing legitimate from dangerous research requires technical expertise that general regulations struggle to capture" },
      { letter: "C", text: "Research that poses no dual-use concerns whatsoever" },
      { letter: "D", text: "International cooperation that faces no obstacles" },
      { letter: "E", text: "Voluntary measures that provide complete biosecurity protection" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 4 notes that 'much synthetic biology research serves legitimate purposes—distinguishing beneficial from dangerous applications often requires technical expertise and contextual judgment that general regulations struggle to capture.' Option B describes exactly this challenge. The passage presents regulations as complex and imperfect (A), notes dual-use dilemmas (C), and discusses cooperation obstacles (D).",
    difficulty: "medium",
    passageId: "rc42-p2",
  },

  // Passage 3 Questions
  {
    id: "rc-42-011",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Personalized medicine provides only benefits with no privacy concerns" },
      { letter: "B", text: "Personalized medicine offers health benefits but raises complex genetic privacy issues that current legal frameworks inadequately address" },
      { letter: "C", text: "GINA provides complete protection against all forms of genetic discrimination" },
      { letter: "D", text: "Genetic privacy concerns are entirely overblown and require no policy attention" },
      { letter: "E", text: "All genetic testing should be prohibited to protect privacy" },
    ],
    correctAnswer: "B",
    explanation: "The passage discusses personalized medicine's promise (paragraph 1), privacy concerns and GINA's limitations (paragraph 2), direct-to-consumer testing challenges (paragraph 3), genetic privacy's conceptual complexity (paragraph 4), and the need for ongoing deliberation about balancing competing interests (paragraph 5). This supports option B's description of benefits and inadequately addressed privacy issues.",
    difficulty: "medium",
    passageId: "rc42-p3",
  },
  {
    id: "rc-42-012",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The passage discusses genetic genealogy databases used by law enforcement primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all genetic testing should be prohibited" },
      { letter: "B", text: "illustrate privacy concerns about genetic data being used for purposes beyond those for which it was originally submitted" },
      { letter: "C", text: "demonstrate that crime solving is impossible without genetic databases" },
      { letter: "D", text: "show that privacy policies always prevent law enforcement access" },
      { letter: "E", text: "argue that genetic surveillance has no concerning implications" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 3 discusses how 'police have used genetic genealogy databases to identify criminal suspects by finding relatives who had submitted DNA for ancestry testing,' noting this 'raise[s] concerns about genetic surveillance and whether people...have meaningfully consented to their genetic data being used to implicate relatives.' This illustrates privacy concerns about secondary uses, matching option B.",
    difficulty: "easy",
    passageId: "rc42-p3",
  },
  {
    id: "rc-42-013",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "Based on the passage, the concept of genetic privacy is complicated by the fact that",
    answerChoices: [
      { letter: "A", text: "genetic information concerns only the individual being tested" },
      { letter: "B", text: "genetic data inherently concerns multiple individuals, including biological relatives" },
      { letter: "C", text: "GINA provides complete protection for all uses of genetic information" },
      { letter: "D", text: "genetic testing is extremely expensive and rarely conducted" },
      { letter: "E", text: "individuals have absolute control over all information about their relatives" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 4 states: 'Unlike most personal information, genetic data inherently concerns multiple individuals. Your genome provides information about your parents, siblings, and children.' It notes this 'interconnectedness challenges the individualistic framework underlying most privacy law.' This directly supports option B.",
    difficulty: "easy",
    passageId: "rc42-p3",
  },
  {
    id: "rc-42-014",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "According to the passage, the Genetic Information Nondiscrimination Act (GINA) does NOT cover",
    answerChoices: [
      { letter: "A", text: "health insurance" },
      { letter: "B", text: "employment" },
      { letter: "C", text: "life insurance, disability insurance, and long-term care insurance" },
      { letter: "D", text: "any form of genetic discrimination" },
      { letter: "E", text: "all possible uses of genetic information" },
    ],
    correctAnswer: "C",
    explanation: "Paragraph 2 states that GINA 'prohibits genetic discrimination in employment and health insurance, but the law has significant limitations. It does not cover life insurance, disability insurance, or long-term care insurance.' This directly corresponds to option C.",
    difficulty: "easy",
    passageId: "rc42-p3",
  },
  {
    id: "rc-42-015",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: passage3,
    questionStem: "The author's attitude toward current genetic privacy protections can best be described as",
    answerChoices: [
      { letter: "A", text: "satisfied that existing laws provide adequate protection" },
      { letter: "B", text: "concerned that current frameworks have significant limitations and gaps" },
      { letter: "C", text: "convinced that genetic privacy is impossible to achieve" },
      { letter: "D", text: "dismissive of privacy concerns as overblown" },
      { letter: "E", text: "certain that no legal framework could ever address genetic privacy" },
    ],
    correctAnswer: "B",
    explanation: "The author describes GINA's 'significant limitations,' discusses how privacy policies 'typically permit' research use, notes even 'strong privacy protections may not prevent genetic discrimination if they are not rigorously enforced or if they fail to anticipate novel uses,' and calls for 'ongoing public deliberation.' This concern about limitations matches option B.",
    difficulty: "easy",
    passageId: "rc42-p3",
  },

  // Passage 4 Questions
  {
    id: "rc-42-016",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "GM crops should be universally banned due to environmental and health risks" },
      { letter: "B", text: "GM crops offer potential food security benefits but generate contested environmental, economic, and cultural concerns" },
      { letter: "C", text: "All concerns about GM crops have been definitively proven to be unfounded" },
      { letter: "D", text: "Substantial equivalence eliminates any need for safety assessment of GM crops" },
      { letter: "E", text: "GM crops benefit only large corporations with no advantages for any farmers" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces GM crops' adoption and competing claims (paragraph 1), examines contested environmental impacts (paragraph 2), discusses economic and social concerns (paragraph 3), analyzes regulatory approaches (paragraph 4), and addresses cultural differences and the need for governance balancing multiple concerns (paragraph 5). This supports option B's description of potential benefits and contested concerns.",
    difficulty: "medium",
    passageId: "rc42-p4",
  },
  {
    id: "rc-42-017",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "The passage discusses Golden Rice primarily in order to",
    answerChoices: [
      { letter: "A", text: "prove that all GM crops benefit large corporations rather than small farmers" },
      { letter: "B", text: "provide an example of biotechnology initiatives specifically targeting small farmers in developing countries" },
      { letter: "C", text: "demonstrate that GM crops always exacerbate agricultural inequalities" },
      { letter: "D", text: "show that GM crops pose serious health risks" },
      { letter: "E", text: "illustrate gene flow risks to wild plant relatives" },
    ],
    correctAnswer: "B",
    explanation: "Golden Rice appears in paragraph 3 as a counter-example after discussing how 'small-scale farmers may lack resources to purchase GM seeds.' Defenders note 'some biotechnology initiatives specifically target small farmers in developing countries through public-sector research, such as the development of Golden Rice.' This use as a counter-example matches option B.",
    difficulty: "medium",
    passageId: "rc42-p4",
  },
  {
    id: "rc-42-018",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Based on the passage, proponents of the precautionary principle would most likely argue that",
    answerChoices: [
      { letter: "A", text: "GM crops should be rapidly deployed without any safety assessment" },
      { letter: "B", text: "potentially harmful innovations should not be deployed until proven safe" },
      { letter: "C", text: "all technological innovations are inherently safe and require no evaluation" },
      { letter: "D", text: "corporate agriculture should be completely unregulated" },
      { letter: "E", text: "long-term testing is unnecessary for GM crops" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 5 defines the precautionary principle as 'the idea that potentially harmful innovations should not be deployed until proven safe,' noting European resistance to GM crops 'often invokes' this principle. This directly supports option B.",
    difficulty: "easy",
    passageId: "rc42-p4",
  },
  {
    id: "rc-42-019",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "According to the passage, farmers who purchase GM seeds typically must",
    answerChoices: [
      { letter: "A", text: "share their harvest freely with other farmers" },
      { letter: "B", text: "use only organic farming methods" },
      { letter: "C", text: "sign agreements prohibiting seed saving" },
      { letter: "D", text: "avoid using any herbicides or pesticides" },
      { letter: "E", text: "plant only in specific geographic regions" },
    ],
    correctAnswer: "C",
    explanation: "Paragraph 3 explicitly states: 'GM seeds are typically patented, and farmers who purchase them must sign agreements prohibiting seed saving—the traditional practice of reserving part of each harvest for replanting.' This directly corresponds to option C.",
    difficulty: "easy",
    passageId: "rc42-p4",
  },
  {
    id: "rc-42-020",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: passage4,
    questionStem: "Which of the following scenarios would best illustrate the passage's discussion of herbicide-resistant weeds as an unintended consequence?",
    answerChoices: [
      { letter: "A", text: "A crop that successfully resists all pests with no evolutionary response from pest populations" },
      { letter: "B", text: "Widespread planting of herbicide-tolerant crops leading to weed populations evolving resistance, requiring farmers to use multiple herbicides" },
      { letter: "C", text: "A technology that produces only benefits with no drawbacks" },
      { letter: "D", text: "Reduced insecticide use with no evolution of resistance in target insects" },
      { letter: "E", text: "Gene flow that has no ecological consequences" },
    ],
    correctAnswer: "B",
    explanation: "Paragraph 2 states: 'widespread planting of herbicide-tolerant crops has led to increased use of certain herbicides and contributed to evolution of herbicide-resistant weeds, requiring farmers to apply multiple herbicides or resort to manual weeding.' Option B describes exactly this dynamic of unintended evolutionary consequences.",
    difficulty: "medium",
    passageId: "rc42-p4",
  },
];

