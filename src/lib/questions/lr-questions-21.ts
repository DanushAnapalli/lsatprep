// Logical Reasoning Questions Bank - Set 21
// High-quality LSAT-style questions covering all question types

import { Question } from "../lsat-types";

export const lrQuestionsSet21: Question[] = [
  // FLAW QUESTIONS (10 total)
  {
    id: "lr-bank21-001",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "Critics argue that the proposed highway expansion will harm the environment. But the Department of Transportation, which designed the expansion, has conducted an environmental impact study showing minimal ecological damage. Therefore, environmental concerns about the highway expansion are unfounded.",
    questionStem: "The reasoning in the argument is flawed because the argument",
    answerChoices: [
      { letter: "A", text: "fails to consider that minimal ecological damage might still be significant" },
      { letter: "B", text: "relies on a source that has a vested interest in the outcome of the study" },
      { letter: "C", text: "assumes that all environmental impact studies are equally reliable" },
      { letter: "D", text: "overlooks the possibility that the highway expansion has economic benefits" },
      { letter: "E", text: "does not specify the methodology used in the environmental impact study" }
    ],
    correctAnswer: "B",
    explanation: "The Department of Transportation has a clear conflict of interest since it designed the expansion and would benefit from its approval. The argument relies on this biased source to dismiss environmental concerns, which is a flaw in reasoning. The study comes from an entity with a stake in reaching a particular conclusion.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-002",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "The university's new admission policy has been criticized for reducing socioeconomic diversity. However, the policy was implemented only last year, and it takes time for changes in admission criteria to affect the composition of the student body. We should wait at least five years before judging whether the policy affects diversity.",
    questionStem: "The reasoning in the argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "presumes without justification that five years is an appropriate waiting period" },
      { letter: "B", text: "ignores the possibility that the policy could be modified before five years elapse" },
      { letter: "C", text: "fails to address whether current evidence already suggests a problematic trend" },
      { letter: "D", text: "assumes that socioeconomic diversity is the only measure of a successful admission policy" },
      { letter: "E", text: "does not explain why the policy was implemented in the first place" }
    ],
    correctAnswer: "C",
    explanation: "The argument assumes we should wait for complete data before making any judgment, but it ignores that early evidence might already indicate concerning trends. While a policy's full effects may take years to manifest, preliminary data after one year could still be meaningful and warrant action.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-003",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "Philosopher: Some argue that objective moral truths exist because people across cultures share certain moral intuitions. But this widespread agreement can be explained by evolutionary psychology: humans evolved to have similar moral responses because such responses enhanced survival. Therefore, moral intuitions do not indicate the existence of objective moral truths.",
    questionStem: "A flaw in the philosopher's argument is that it",
    answerChoices: [
      { letter: "A", text: "fails to consider that evolutionary explanations might be compatible with the existence of moral truths" },
      { letter: "B", text: "assumes that all moral intuitions can be explained by evolutionary psychology" },
      { letter: "C", text: "overlooks the possibility that some cultures have unique moral beliefs" },
      { letter: "D", text: "does not define what constitutes an objective moral truth" },
      { letter: "E", text: "relies on an unproven theory of evolutionary psychology" }
    ],
    correctAnswer: "A",
    explanation: "The philosopher commits the genetic fallacy by assuming that explaining the origin of moral intuitions through evolution automatically disproves their validity. Even if evolution explains why we have moral intuitions, this doesn't preclude the possibility that these intuitions track genuine moral truths. The cause of a belief is separate from its truth value.",
    difficulty: "hard"
  },
  {
    id: "lr-bank21-004",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "Sales of electric vehicles have increased by 40 percent this year. This proves that consumers are becoming more environmentally conscious and are willing to pay premium prices to reduce their carbon footprint.",
    questionStem: "The reasoning in the argument is flawed because the argument",
    answerChoices: [
      { letter: "A", text: "assumes that all electric vehicle buyers are motivated by environmental concerns" },
      { letter: "B", text: "fails to provide data on total vehicle sales for comparison" },
      { letter: "C", text: "ignores the fact that electric vehicles may not actually reduce carbon emissions" },
      { letter: "D", text: "presumes that a 40 percent increase is statistically significant" },
      { letter: "E", text: "does not consider regional variations in electric vehicle sales" }
    ],
    correctAnswer: "A",
    explanation: "The argument assumes that increased EV sales must be due to environmental consciousness. However, consumers might purchase electric vehicles for other reasons: lower fuel costs, government incentives, tax credits, better performance, or simply because more models are available. The argument overlooks these alternative explanations for the sales increase.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-005",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "The town council should not approve the new shopping center development. Last year, the council approved a similar development on the north side of town, and traffic congestion in that area has increased significantly. Building another shopping center will only make our traffic problems worse.",
    questionStem: "The argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "fails to consider that the new development might include traffic mitigation measures" },
      { letter: "B", text: "assumes that the new development is similar enough to the previous one for comparison to be valid" },
      { letter: "C", text: "does not address the economic benefits the new shopping center might bring" },
      { letter: "D", text: "ignores the possibility that traffic congestion has other causes" },
      { letter: "E", text: "presumes that traffic congestion is necessarily harmful to the community" }
    ],
    correctAnswer: "B",
    explanation: "The argument draws a conclusion about the new development based on the effects of a previous one, but it assumes without justification that the two developments are comparable. The new development might be in a different location with different traffic patterns, have different access routes, or be designed differently. Without establishing relevant similarities, the comparison is unreliable.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-006",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "Medical researcher: Studies show that people who drink moderate amounts of red wine have lower rates of heart disease. Therefore, doctors should recommend that patients drink red wine to improve their cardiovascular health.",
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "ignores the possibility that wine consumption has negative health effects that outweigh the cardiovascular benefits" },
      { letter: "B", text: "assumes that what is true of moderate drinkers would be true of all patients" },
      { letter: "C", text: "confuses correlation with causation by assuming wine drinking causes better heart health" },
      { letter: "D", text: "fails to specify what constitutes a moderate amount of wine" },
      { letter: "E", text: "does not consider that other beverages might provide similar benefits" }
    ],
    correctAnswer: "C",
    explanation: "The argument assumes that because wine consumption correlates with lower heart disease rates, wine must cause the improvement. However, the correlation might exist because healthier people tend to drink moderate amounts of wine, or because wine drinkers share other lifestyle factors (diet, exercise, socioeconomic status) that actually cause the health benefits.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-007",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "Either we implement strict water conservation measures now, or our city will face severe water shortages within the decade. The proposed conservation measures are too costly and would burden local businesses. Therefore, we have no choice but to accept future water shortages as inevitable.",
    questionStem: "Which one of the following most accurately describes a flaw in the argument?",
    answerChoices: [
      { letter: "A", text: "It treats two options as exhaustive when other solutions may exist" },
      { letter: "B", text: "It fails to consider the costs of water shortages compared to conservation" },
      { letter: "C", text: "It assumes that all conservation measures would be equally costly" },
      { letter: "D", text: "It does not specify when water shortages would occur" },
      { letter: "E", text: "It overlooks the possibility that businesses could adapt to conservation measures" }
    ],
    correctAnswer: "A",
    explanation: "The argument presents a false dichotomy by suggesting only two options exist: strict conservation measures or inevitable water shortages. In reality, there might be alternative solutions such as developing new water sources, implementing moderate conservation measures, improving water infrastructure efficiency, or water recycling programs.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-008",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "Professor Chen has argued that standardized testing should be eliminated from college admissions. But Professor Chen herself scored exceptionally well on standardized tests when she was a student. Her opposition to these tests is therefore hypocritical and should be dismissed.",
    questionStem: "The reasoning in the argument is most vulnerable to criticism because it",
    answerChoices: [
      { letter: "A", text: "attacks the professor's motives rather than addressing the substance of her argument" },
      { letter: "B", text: "assumes that standardized tests accurately measure academic potential" },
      { letter: "C", text: "fails to consider that the professor might have changed her views over time" },
      { letter: "D", text: "ignores evidence about the effectiveness of standardized tests" },
      { letter: "E", text: "presumes that past test performance indicates current testing expertise" }
    ],
    correctAnswer: "A",
    explanation: "This is an ad hominem attack. The argument dismisses Professor Chen's position by pointing to her personal test performance rather than addressing the merits of her argument against standardized testing. Her past test scores are irrelevant to whether her arguments about the tests' value in admissions are valid.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-009",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "Art critic: The paintings in this gallery have sold for millions of dollars and are displayed in prestigious museums worldwide. This proves that the artist is one of the greatest talents of our generation, whose work will be remembered for centuries.",
    questionStem: "The reasoning in the argument is flawed because it",
    answerChoices: [
      { letter: "A", text: "assumes that artistic greatness can be measured by commercial success and institutional recognition" },
      { letter: "B", text: "fails to compare this artist to other contemporary artists" },
      { letter: "C", text: "does not define what constitutes artistic talent" },
      { letter: "D", text: "ignores the role of art dealers in promoting certain artists" },
      { letter: "E", text: "presumes that museum curators are qualified to judge artistic merit" }
    ],
    correctAnswer: "A",
    explanation: "The argument equates commercial success (high prices) and institutional recognition (museum display) with artistic greatness. However, market prices are influenced by many factors beyond artistic merit, such as speculation, marketing, and social trends. Many now-celebrated artists were unrecognized during their lifetimes, while some commercially successful artists have faded into obscurity.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-010",
    sectionType: "logical-reasoning",
    type: "flaw",
    stimulus: "The defendant claims he was home alone on the night of the crime. No witnesses can confirm his presence at home. Since there is no evidence that he was home, we can conclude he was not at home and therefore could have committed the crime.",
    questionStem: "The reasoning in the argument is most vulnerable to criticism on the grounds that it",
    answerChoices: [
      { letter: "A", text: "treats the absence of evidence for a claim as evidence against that claim" },
      { letter: "B", text: "assumes the defendant is guilty until proven innocent" },
      { letter: "C", text: "fails to consider that the defendant might have an alibi for a different time" },
      { letter: "D", text: "ignores the possibility that witnesses might be reluctant to testify" },
      { letter: "E", text: "does not address the strength of the evidence placing the defendant at the crime scene" }
    ],
    correctAnswer: "A",
    explanation: "This is an appeal to ignorance fallacy. The argument treats the lack of evidence confirming the defendant was home as proof he was not home. But absence of evidence is not evidence of absence. The defendant could have been home even if no one can confirm it; being home alone by definition means there would be no witnesses.",
    difficulty: "medium"
  },

  // STRENGTHEN QUESTIONS (8 total)
  {
    id: "lr-bank21-011",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "A new study suggests that employees who work from home are more productive than those who work in traditional offices. Researchers found that remote workers completed 13 percent more tasks per week than their in-office counterparts. The study's authors conclude that companies should consider expanding remote work options to boost overall productivity.",
    questionStem: "Which one of the following, if true, most strengthens the argument?",
    answerChoices: [
      { letter: "A", text: "The remote workers in the study had the same job roles and experience levels as the in-office workers" },
      { letter: "B", text: "Companies that have implemented remote work policies report higher employee satisfaction" },
      { letter: "C", text: "Remote work reduces commuting time, which many employees find stressful" },
      { letter: "D", text: "The study was conducted by researchers with no financial ties to remote work technology companies" },
      { letter: "E", text: "Many employees prefer working from home to working in an office" }
    ],
    correctAnswer: "A",
    explanation: "The argument's conclusion depends on the comparison between remote and in-office workers being fair. If the remote workers had the same job roles and experience levels, then the productivity difference is more likely attributable to the work arrangement rather than confounding factors. This strengthens the causal claim that remote work increases productivity.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-012",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "Archaeologist: The collapse of the ancient Mayan civilization was likely caused by prolonged drought. Lake sediment cores from the Yucatan Peninsula show dramatically reduced rainfall during the period when major Mayan cities were abandoned. Without adequate water for agriculture, these cities could not sustain their large populations.",
    questionStem: "Which one of the following, if true, most strengthens the archaeologist's argument?",
    answerChoices: [
      { letter: "A", text: "The Mayan civilization had previously survived shorter periods of drought" },
      { letter: "B", text: "Archaeological evidence shows that Mayan cities in wetter regions persisted longer than those in drier areas" },
      { letter: "C", text: "Other ancient civilizations also collapsed during periods of environmental stress" },
      { letter: "D", text: "The Mayans developed sophisticated water storage systems" },
      { letter: "E", text: "Climate records from other regions show similar drought patterns during this period" }
    ],
    correctAnswer: "B",
    explanation: "If cities in wetter regions lasted longer than those in drier areas during the same period, this supports the causal link between drought and collapse. This correlation between water availability and city survival strengthens the argument that drought was indeed the primary cause of the civilization's decline.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-013",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "A pharmaceutical company claims that its new pain medication is more effective than the current standard treatment. In clinical trials, patients taking the new medication reported a 30 percent greater reduction in pain compared to those taking the existing treatment.",
    questionStem: "Which one of the following, if true, most strengthens the pharmaceutical company's claim?",
    answerChoices: [
      { letter: "A", text: "The patients in the trial were randomly assigned to receive either the new medication or the existing treatment" },
      { letter: "B", text: "The new medication has fewer side effects than the existing treatment" },
      { letter: "C", text: "The pharmaceutical company has a strong track record of developing effective medications" },
      { letter: "D", text: "Patients who took the new medication reported high satisfaction with their treatment" },
      { letter: "E", text: "The existing treatment has been on the market for over twenty years" }
    ],
    correctAnswer: "A",
    explanation: "Random assignment is crucial for establishing that the medication itself caused the improvement. If patients were randomly assigned, it's less likely that pre-existing differences between the groups explain the results. This eliminates selection bias and strengthens the claim that the new medication is genuinely more effective.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-014",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "City planners argue that converting downtown parking lots into green spaces will reduce urban flooding. They claim that vegetation and permeable soil absorb rainwater more effectively than concrete surfaces, which cause water to run off into storm drains and overwhelm the city's drainage system.",
    questionStem: "Which one of the following, if true, most strengthens the city planners' argument?",
    answerChoices: [
      { letter: "A", text: "The downtown area has experienced three major flooding events in the past decade" },
      { letter: "B", text: "Cities that have replaced concrete surfaces with green spaces have seen measurable decreases in storm water runoff" },
      { letter: "C", text: "Green spaces provide additional benefits such as improved air quality and reduced heat island effects" },
      { letter: "D", text: "The city's storm drain system was built over fifty years ago and has not been upgraded" },
      { letter: "E", text: "Residents strongly support the conversion of parking lots to parks" }
    ],
    correctAnswer: "B",
    explanation: "Direct evidence from other cities showing that green spaces reduce storm water runoff strongly supports the planners' claim. This provides empirical confirmation of the theoretical mechanism they describe and shows the approach has worked in practice, making it more likely to succeed in this city.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-015",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "Economist: Raising the minimum wage will not lead to significant job losses. Historical data shows that previous minimum wage increases have not corresponded with increased unemployment rates. Critics who predict massive layoffs are relying on overly simplistic economic models that don't account for real-world factors.",
    questionStem: "Which one of the following, if true, most strengthens the economist's argument?",
    answerChoices: [
      { letter: "A", text: "Many employers have expressed opposition to minimum wage increases" },
      { letter: "B", text: "Higher wages increase consumer spending, which can stimulate job creation and offset potential losses" },
      { letter: "C", text: "Some states have higher minimum wages than the federal minimum" },
      { letter: "D", text: "Labor economists generally support modest minimum wage increases" },
      { letter: "E", text: "The current minimum wage has not been increased for several years" }
    ],
    correctAnswer: "B",
    explanation: "This answer provides a mechanism explaining why job losses might not occur: increased consumer spending could create offsetting job growth. This addresses the gap in the argument by explaining why the historical pattern of no job losses might hold, rather than just asserting that it has occurred.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-016",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "Researchers believe that the extinction of large predators in North America approximately 12,000 years ago was caused by human hunting rather than climate change. They note that these extinctions coincided with the arrival of humans on the continent, not with any major climate shifts that affected the entire region.",
    questionStem: "Which one of the following, if true, most strengthens the researchers' hypothesis?",
    answerChoices: [
      { letter: "A", text: "Large predators on other continents did not go extinct during the same period" },
      { letter: "B", text: "Stone tools suitable for hunting large animals have been found at numerous sites dating to this period" },
      { letter: "C", text: "The climate in North America was relatively stable during the centuries preceding the extinctions" },
      { letter: "D", text: "Smaller mammals that were not hunted by humans survived the same period without significant population declines" },
      { letter: "E", text: "Similar extinction patterns occurred in Australia following human arrival there" }
    ],
    correctAnswer: "D",
    explanation: "If smaller animals that were not hunted survived while large animals that were hunted went extinct, this supports human hunting as the cause. It rules out climate change because climate would have affected all species, not just the large ones humans hunted. This differential extinction pattern strongly supports the hunting hypothesis.",
    difficulty: "hard"
  },
  {
    id: "lr-bank21-017",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "Public health officials recommend that everyone receive annual flu vaccinations. They argue that widespread vaccination not only protects individuals from infection but also creates herd immunity that protects vulnerable populations who cannot be vaccinated, such as infants and immunocompromised patients.",
    questionStem: "Which one of the following, if true, most strengthens the officials' argument for widespread vaccination?",
    answerChoices: [
      { letter: "A", text: "The flu vaccine is updated annually to match the most prevalent strains" },
      { letter: "B", text: "Communities with higher vaccination rates experience significantly lower flu-related hospitalization rates among unvaccinated infants" },
      { letter: "C", text: "Most healthy adults recover from the flu without medical intervention" },
      { letter: "D", text: "The flu vaccine is free under most insurance plans" },
      { letter: "E", text: "Some people experience mild side effects from the flu vaccine" }
    ],
    correctAnswer: "B",
    explanation: "This directly demonstrates the herd immunity effect that officials cite. Evidence showing that higher vaccination rates lead to fewer hospitalizations among unvaccinated infants proves that widespread vaccination does indeed protect vulnerable populations who cannot be vaccinated themselves.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-018",
    sectionType: "logical-reasoning",
    type: "strengthen",
    stimulus: "The school board argues that implementing a later start time for high school will improve student academic performance. Research has shown that teenagers have different circadian rhythms than adults and naturally tend to fall asleep and wake up later. Starting school at 8:30 AM instead of 7:30 AM would allow students to get adequate sleep.",
    questionStem: "Which one of the following, if true, most strengthens the school board's argument?",
    answerChoices: [
      { letter: "A", text: "Teachers prefer starting school later because it reduces morning traffic" },
      { letter: "B", text: "Schools that have shifted to later start times have reported improvements in test scores and graduation rates" },
      { letter: "C", text: "Most parents support the change to a later start time" },
      { letter: "D", text: "Teenagers who get more sleep report feeling less stressed" },
      { letter: "E", text: "Some school districts have been unable to implement later start times due to bus scheduling conflicts" }
    ],
    correctAnswer: "B",
    explanation: "Direct evidence from schools that have already implemented later start times showing improved academic outcomes strongly supports the argument. This demonstrates that the proposed solution has actually worked in practice, making it more likely to succeed in this school district.",
    difficulty: "easy"
  },

  // WEAKEN QUESTIONS (8 total)
  {
    id: "lr-bank21-019",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "A study found that students who participated in music education programs scored higher on standardized math tests than students who did not. The researchers concluded that learning music improves mathematical reasoning abilities and recommended expanding music programs in schools.",
    questionStem: "Which one of the following, if true, most weakens the researchers' conclusion?",
    answerChoices: [
      { letter: "A", text: "Music education programs vary significantly in quality across different schools" },
      { letter: "B", text: "Parents who enroll their children in music programs also tend to provide more academic support at home" },
      { letter: "C", text: "Not all forms of music education emphasize mathematical concepts like rhythm and counting" },
      { letter: "D", text: "Many successful mathematicians have no formal music training" },
      { letter: "E", text: "Some students who participate in music programs find them stressful" }
    ],
    correctAnswer: "B",
    explanation: "This introduces a confounding variable: parental involvement. If parents who enroll children in music also provide more academic support, the higher math scores might be due to parental involvement rather than music education itself. This selection bias undermines the causal conclusion that music improves math abilities.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-020",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "Restaurant owner: Switching from plastic straws to paper straws was the right decision for our business. Since making the change six months ago, our customer satisfaction ratings have increased by 15 percent. Customers clearly appreciate our commitment to environmental responsibility.",
    questionStem: "Which one of the following, if true, most weakens the restaurant owner's argument?",
    answerChoices: [
      { letter: "A", text: "Paper straws cost more to produce than plastic straws" },
      { letter: "B", text: "During the same period, the restaurant also hired a new chef and redesigned its menu" },
      { letter: "C", text: "Some customers have complained that paper straws become soggy in drinks" },
      { letter: "D", text: "Other restaurants in the area have not switched to paper straws" },
      { letter: "E", text: "Environmental advocates have praised the restaurant's decision" }
    ],
    correctAnswer: "B",
    explanation: "The restaurant made multiple changes during the same period. The new chef and redesigned menu could easily explain the increased satisfaction ratings, making it impossible to attribute the improvement specifically to the straw change. This provides an alternative explanation that undermines the owner's causal claim.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-021",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "Technology analyst: Video conferencing will permanently replace most business travel even after pandemic restrictions end. Companies have discovered that virtual meetings are more efficient and cost-effective than in-person meetings. Business travel will never return to pre-pandemic levels.",
    questionStem: "Which one of the following, if true, most seriously weakens the analyst's prediction?",
    answerChoices: [
      { letter: "A", text: "Airlines have begun offering discounted business class fares to attract corporate travelers" },
      { letter: "B", text: "Studies show that complex negotiations and relationship-building are significantly more successful when conducted in person" },
      { letter: "C", text: "Some companies have invested heavily in video conferencing technology" },
      { letter: "D", text: "Employee surveys indicate that many workers find video meetings exhausting" },
      { letter: "E", text: "Business travel accounts for a significant portion of airline revenue" }
    ],
    correctAnswer: "B",
    explanation: "If complex negotiations and relationship-building are more successful in person, companies will still need to conduct business travel for these important functions. The analyst's argument assumes that virtual meetings can fully replace in-person meetings, but this evidence suggests there are business activities where in-person interaction remains superior.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-022",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "Historian: The Great Fire of London in 1666, while devastating, actually improved public health in the city. By destroying crowded, unsanitary medieval buildings and forcing reconstruction with better materials and wider streets, the fire inadvertently eliminated the conditions that had allowed plague to spread so easily.",
    questionStem: "Which one of the following, if true, most weakens the historian's argument?",
    answerChoices: [
      { letter: "A", text: "The Great Fire destroyed many historically significant buildings" },
      { letter: "B", text: "Plague outbreaks declined throughout Europe during this period, including in cities that experienced no major fires" },
      { letter: "C", text: "The reconstruction of London took many years to complete" },
      { letter: "D", text: "Some areas of London that were not destroyed by the fire were later voluntarily rebuilt" },
      { letter: "E", text: "The Great Fire left thousands of Londoners homeless" }
    ],
    correctAnswer: "B",
    explanation: "If plague declined across Europe during this period regardless of fires, then the decline in London was likely part of a broader trend rather than a result of the fire. This suggests the improvement in public health would have occurred anyway, undermining the claim that the fire caused the improvement.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-023",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "Corporate trainer: Our new employee wellness program has reduced absenteeism by 20 percent. The program includes gym memberships, nutrition counseling, and stress management workshops. Clearly, investing in employee health leads to significant productivity gains.",
    questionStem: "Which one of the following, if true, most weakens the trainer's conclusion?",
    answerChoices: [
      { letter: "A", text: "The wellness program is voluntary, and only about half of employees participate" },
      { letter: "B", text: "The company simultaneously implemented a stricter attendance policy with penalties for unexcused absences" },
      { letter: "C", text: "Employee satisfaction surveys show that workers appreciate the wellness benefits" },
      { letter: "D", text: "Similar wellness programs at other companies have produced mixed results" },
      { letter: "E", text: "The cost of the wellness program exceeds the savings from reduced absenteeism" }
    ],
    correctAnswer: "B",
    explanation: "The simultaneous implementation of a stricter attendance policy provides an alternative explanation for reduced absenteeism. Employees might be coming to work more often not because they're healthier, but because they fear penalties. This confounding factor undermines the causal claim about the wellness program's effectiveness.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-024",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "Political scientist: Democracies rarely go to war with each other. An examination of the past two centuries shows that armed conflicts between established democracies are extremely rare. Therefore, the spread of democracy worldwide will lead to greater international peace.",
    questionStem: "Which one of the following, if true, most weakens the political scientist's argument?",
    answerChoices: [
      { letter: "A", text: "Democracies have frequently engaged in armed conflicts with non-democratic countries" },
      { letter: "B", text: "The definition of democracy has changed significantly over the past two centuries" },
      { letter: "C", text: "Countries with strong economic ties tend not to go to war with each other, and democracies happen to have stronger trade relationships" },
      { letter: "D", text: "Some political scientists dispute the exact count of wars between democracies" },
      { letter: "E", text: "The number of democracies in the world has increased substantially in recent decades" }
    ],
    correctAnswer: "C",
    explanation: "This suggests that the correlation between democracy and peace might be spurious. If economic interdependence is the actual cause of peace, and democracies simply happen to have stronger trade relationships, then spreading democracy wouldn't necessarily increase peace unless it also increased economic ties. The causal mechanism would be different from what the scientist assumes.",
    difficulty: "hard"
  },
  {
    id: "lr-bank21-025",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "Environmentalist: Organic farming is better for the environment than conventional farming. Organic farms don't use synthetic pesticides that can contaminate groundwater and harm wildlife. By choosing organic products, consumers can help protect ecosystems.",
    questionStem: "Which one of the following, if true, most weakens the environmentalist's argument?",
    answerChoices: [
      { letter: "A", text: "Organic products often cost more than conventionally grown products" },
      { letter: "B", text: "Some organic farms use natural pesticides that are also harmful to certain wildlife species" },
      { letter: "C", text: "Organic farming typically produces lower crop yields, requiring more land to produce the same amount of food" },
      { letter: "D", text: "Consumer demand for organic products has been growing steadily" },
      { letter: "E", text: "Some conventional farms have adopted practices to reduce pesticide runoff" }
    ],
    correctAnswer: "C",
    explanation: "If organic farming requires more land to produce the same amount of food, expanding organic farming could lead to greater habitat destruction through land conversion. This environmental cost might offset the benefits of avoiding synthetic pesticides, weakening the claim that organic farming is better for the environment overall.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-026",
    sectionType: "logical-reasoning",
    type: "weaken",
    stimulus: "Criminologist: The city's new community policing initiative has been successful in reducing crime. Since the program began two years ago, reported crimes have decreased by 25 percent. The increased police presence and community engagement have clearly deterred criminal activity.",
    questionStem: "Which one of the following, if true, most weakens the criminologist's conclusion?",
    answerChoices: [
      { letter: "A", text: "Neighboring cities without community policing programs have experienced similar decreases in reported crime" },
      { letter: "B", text: "The city has received positive media coverage for its community policing efforts" },
      { letter: "C", text: "Police officers in the program report improved relationships with community members" },
      { letter: "D", text: "The program costs more than traditional policing methods" },
      { letter: "E", text: "Some community members were initially skeptical of the program" }
    ],
    correctAnswer: "A",
    explanation: "If neighboring cities without the program experienced similar crime reductions, the decrease in this city was likely caused by external factors affecting the entire region rather than the community policing initiative. This suggests the program may not be responsible for the improvement the criminologist attributes to it.",
    difficulty: "easy"
  },

  // ASSUMPTION QUESTIONS (8 total)
  {
    id: "lr-bank21-027",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "The new software update requires a computer with at least 8 gigabytes of RAM. My computer has 16 gigabytes of RAM. Therefore, I will be able to install the new software update on my computer.",
    questionStem: "The argument depends on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Having more RAM than required guarantees faster software performance" },
      { letter: "B", text: "There are no other system requirements for the software update besides RAM" },
      { letter: "C", text: "The computer currently has enough storage space for the update" },
      { letter: "D", text: "Most computers have at least 8 gigabytes of RAM" },
      { letter: "E", text: "The software update will improve the computer's functionality" }
    ],
    correctAnswer: "B",
    explanation: "The argument only addresses the RAM requirement but concludes the update can be installed. This assumes RAM is the only requirement. If there are other requirements (processor speed, operating system version, storage space) that the computer doesn't meet, the conclusion would fail. Using the negation test: if there ARE other requirements, we can't conclude the update will work.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-028",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "Therapist: Expressing gratitude has been shown to improve psychological well-being. Patients who keep gratitude journals report feeling happier and less anxious. Therefore, I recommend that all my patients begin keeping gratitude journals to improve their mental health.",
    questionStem: "The therapist's recommendation relies on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Gratitude journals are the only effective way to express gratitude" },
      { letter: "B", text: "Keeping a journal is not burdensome enough to outweigh the psychological benefits" },
      { letter: "C", text: "All patients are capable of experiencing gratitude" },
      { letter: "D", text: "Psychological well-being can be measured objectively" },
      { letter: "E", text: "Patients who feel happy also tend to be more productive" }
    ],
    correctAnswer: "B",
    explanation: "The therapist recommends journaling to improve mental health, assuming the practice will produce net benefits. If keeping a journal were very burdensome (time-consuming, stressful, guilt-inducing when missed), this burden could outweigh the benefits and make the recommendation counterproductive. The assumption that it's not too burdensome is necessary.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-029",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "Since the defendant was seen near the crime scene at the time of the robbery, she must have been involved in the crime. After all, there is no legitimate reason why anyone would be in that area at that hour.",
    questionStem: "The argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "The defendant has a prior criminal record" },
      { letter: "B", text: "The witness who saw the defendant is reliable" },
      { letter: "C", text: "The defendant does not live or work near the crime scene" },
      { letter: "D", text: "No one else was seen near the crime scene" },
      { letter: "E", text: "The defendant has not provided an alibi" }
    ],
    correctAnswer: "C",
    explanation: "The argument claims there's no legitimate reason to be in the area. But if the defendant lives or works nearby, she would have a perfectly legitimate reason to be there. The argument must assume this isn't the case. Living or working in an area is a clear legitimate reason for being present.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-030",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "Museum curator: This ancient pottery fragment must be at least 3,000 years old. The style of decoration is consistent with artifacts from the Bronze Age, and the clay composition matches pottery known to have been produced in this region during that period.",
    questionStem: "The curator's conclusion depends on the assumption that",
    answerChoices: [
      { letter: "A", text: "no modern reproductions of Bronze Age pottery exist" },
      { letter: "B", text: "this decorative style was not revived or imitated in later periods" },
      { letter: "C", text: "all Bronze Age pottery from this region used the same type of clay" },
      { letter: "D", text: "the pottery fragment was found at an archaeological dig site" },
      { letter: "E", text: "radiocarbon dating would confirm the pottery's age" }
    ],
    correctAnswer: "B",
    explanation: "The curator bases the dating on decorative style and clay composition matching Bronze Age artifacts. But if this style was revived or imitated later, a newer piece could have these same features. The assumption that the style wasn't used in later periods is necessary for the conclusion about the fragment's age.",
    difficulty: "hard"
  },
  {
    id: "lr-bank21-031",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "Nutritionist: People who eat breakfast regularly are less likely to be overweight than those who skip breakfast. This is because eating in the morning jumpstarts metabolism and prevents overeating later in the day. To maintain a healthy weight, everyone should eat breakfast.",
    questionStem: "The nutritionist's argument assumes which one of the following?",
    answerChoices: [
      { letter: "A", text: "Weight is the only measure of health affected by breakfast consumption" },
      { letter: "B", text: "The metabolic boost from breakfast is not offset by the calories consumed" },
      { letter: "C", text: "People who eat breakfast also tend to exercise more" },
      { letter: "D", text: "All breakfasts provide similar nutritional benefits" },
      { letter: "E", text: "Skipping breakfast is the main cause of overeating" }
    ],
    correctAnswer: "B",
    explanation: "The argument claims breakfast helps maintain healthy weight by boosting metabolism and preventing later overeating. But this only works if the calories consumed at breakfast don't negate these benefits. If the metabolic boost and reduced later eating don't outweigh the breakfast calories, the recommendation fails.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-032",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "Editorial: The proposed ban on single-use plastics will not significantly reduce ocean pollution. Most ocean plastic comes from countries with poor waste management infrastructure, not from countries like ours that have effective recycling programs. Our ban will have minimal global impact.",
    questionStem: "The editorial's argument requires which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "Ocean pollution is the only environmental problem caused by single-use plastics" },
      { letter: "B", text: "Countries with poor waste management will not improve their systems" },
      { letter: "C", text: "Recycling programs completely prevent plastics from entering the ocean" },
      { letter: "D", text: "Single-use plastic from our country does not contribute meaningfully to ocean pollution" },
      { letter: "E", text: "Other countries will not follow our example and implement their own bans" }
    ],
    correctAnswer: "D",
    explanation: "The editorial concludes our ban won't significantly reduce ocean pollution. This requires assuming our country's contribution isn't meaningful. Even if most plastic comes from elsewhere, if our contribution is still substantial, eliminating it could be significant. The argument must assume our contribution is indeed minimal.",
    difficulty: "hard"
  },
  {
    id: "lr-bank21-033",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "Since implementing the four-day workweek, our company has seen a 15 percent increase in employee productivity. This proves that reducing work hours leads to greater efficiency.",
    questionStem: "The argument relies on which one of the following assumptions?",
    answerChoices: [
      { letter: "A", text: "All employees prefer working four days per week" },
      { letter: "B", text: "Productivity can be accurately measured in this workplace" },
      { letter: "C", text: "No other changes that could affect productivity were implemented during this period" },
      { letter: "D", text: "Other companies should also adopt a four-day workweek" },
      { letter: "E", text: "The four-day workweek will continue to boost productivity in the future" }
    ],
    correctAnswer: "C",
    explanation: "The argument attributes the productivity increase to the four-day workweek. This assumes no other changes (new management, different projects, updated technology, seasonal factors) occurred simultaneously that could explain the increase. Without this assumption, the causal claim cannot be established.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-034",
    sectionType: "logical-reasoning",
    type: "necessary-assumption",
    stimulus: "Philosopher: Purely self-interested actions cannot be morally praiseworthy. Donating to charity in order to receive a tax deduction is a purely self-interested action. Therefore, donating to charity solely for the tax benefit is not morally praiseworthy.",
    questionStem: "The philosopher's argument depends on assuming which one of the following?",
    answerChoices: [
      { letter: "A", text: "All charitable donations provide tax benefits" },
      { letter: "B", text: "People should not receive tax deductions for charitable donations" },
      { letter: "C", text: "Receiving a tax deduction is the only self-interested motive for donating" },
      { letter: "D", text: "An action done primarily for tax benefits does not have additional altruistic motives" },
      { letter: "E", text: "Self-interested actions can never benefit others" }
    ],
    correctAnswer: "D",
    explanation: "The argument calls donating for tax benefits a 'purely self-interested action.' This assumes the person has no additional altruistic motives. If someone donates partly for tax benefits but also genuinely wants to help others, the action wouldn't be purely self-interested, and the conclusion wouldn't follow.",
    difficulty: "hard"
  },

  // MAIN-CONCLUSION QUESTIONS (4 total)
  {
    id: "lr-bank21-035",
    sectionType: "logical-reasoning",
    type: "main-conclusion",
    stimulus: "Recent studies show that sleep-deprived individuals make more errors on cognitive tasks than well-rested individuals. Furthermore, chronic sleep deprivation has been linked to long-term memory problems. Given that many workers report getting less than the recommended seven hours of sleep per night, employers concerned about workplace performance should consider implementing policies that support employee sleep health.",
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Sleep deprivation leads to cognitive errors and memory problems" },
      { letter: "B", text: "Many workers get less than the recommended amount of sleep" },
      { letter: "C", text: "Employers should consider policies supporting employee sleep health" },
      { letter: "D", text: "Workplace performance is negatively affected by employee sleep deprivation" },
      { letter: "E", text: "Seven hours of sleep is the recommended minimum for adults" }
    ],
    correctAnswer: "C",
    explanation: "The argument builds toward the recommendation that employers should consider implementing sleep-supportive policies. The facts about sleep deprivation effects and worker sleep patterns serve as premises supporting this conclusion. The word 'should' is a conclusion indicator, and this statement is what everything else is offered to support.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-036",
    sectionType: "logical-reasoning",
    type: "main-conclusion",
    stimulus: "Automated vehicles promise to reduce traffic accidents caused by human error. However, they also raise complex liability questions when accidents do occur. Current legal frameworks were designed for human drivers and may not adequately address situations involving artificial intelligence decision-making. Until these legal issues are resolved, the widespread adoption of automated vehicles will likely be delayed.",
    questionStem: "Which one of the following most accurately states the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Automated vehicles will reduce accidents caused by human error" },
      { letter: "B", text: "Current legal frameworks were designed for human drivers" },
      { letter: "C", text: "Liability questions create complex legal issues for automated vehicles" },
      { letter: "D", text: "Widespread adoption of automated vehicles will likely be delayed until legal issues are resolved" },
      { letter: "E", text: "Artificial intelligence decision-making is difficult to address legally" }
    ],
    correctAnswer: "D",
    explanation: "The main conclusion is the prediction that widespread adoption will be delayed until legal issues are resolved. The discussion of liability questions and inadequate legal frameworks provides the reasoning supporting this conclusion. This is the ultimate point the argument is making.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-037",
    sectionType: "logical-reasoning",
    type: "main-conclusion",
    stimulus: "Art forgeries have become increasingly sophisticated, with some copies so precise that even experts cannot distinguish them from originals using visual inspection alone. Scientific analysis can often detect forgeries, but such testing is expensive and not always conclusive. This suggests that the art market's emphasis on authenticity may be misplaced. Perhaps we should value artworks for their aesthetic qualities rather than their provenance.",
    questionStem: "The main point of the argument is that",
    answerChoices: [
      { letter: "A", text: "art forgeries have become very difficult to detect" },
      { letter: "B", text: "scientific testing of artworks is expensive and sometimes inconclusive" },
      { letter: "C", text: "the art market places too much emphasis on authenticity relative to aesthetic merit" },
      { letter: "D", text: "experts cannot distinguish sophisticated forgeries from originals" },
      { letter: "E", text: "provenance is impossible to verify with certainty" }
    ],
    correctAnswer: "C",
    explanation: "The argument uses the difficulty of detecting forgeries to challenge the emphasis on authenticity, concluding that perhaps aesthetic qualities should matter more than provenance. This is the main evaluative claim the argument defends. The facts about forgery detection are premises leading to this conclusion.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-038",
    sectionType: "logical-reasoning",
    type: "main-conclusion",
    stimulus: "Democracy requires informed citizens, but most people have limited time to research political issues. News media could help by providing comprehensive, balanced coverage, but economic pressures push media outlets toward sensationalism. Social media, while allowing direct access to information, often creates echo chambers that reinforce existing beliefs. Thus, maintaining an informed citizenry in modern democracies presents serious challenges.",
    questionStem: "Which one of the following most accurately expresses the main conclusion of the argument?",
    answerChoices: [
      { letter: "A", text: "Democracy requires citizens to be informed about political issues" },
      { letter: "B", text: "News media are driven by economic pressures toward sensationalism" },
      { letter: "C", text: "Social media creates echo chambers that reinforce existing beliefs" },
      { letter: "D", text: "Maintaining an informed citizenry in modern democracies is seriously challenging" },
      { letter: "E", text: "Most people have limited time to research political issues" }
    ],
    correctAnswer: "D",
    explanation: "The argument discusses multiple obstacles to citizen information (limited time, media sensationalism, social media echo chambers) and concludes that maintaining an informed citizenry presents serious challenges. The word 'Thus' introduces this conclusion, and all other statements serve as premises supporting it.",
    difficulty: "easy"
  },

  // METHOD-OF-REASONING QUESTIONS (4 total)
  {
    id: "lr-bank21-039",
    sectionType: "logical-reasoning",
    type: "method-of-reasoning",
    stimulus: "Biologist: Some people argue that since chimpanzees share 98 percent of their DNA with humans, they should have legal rights similar to humans. But dogs share about 84 percent of their DNA with humans, and few would argue that dogs deserve human-like legal rights. The degree of genetic similarity alone cannot determine what rights a species should have.",
    questionStem: "The biologist's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "providing a counterexample to show that a general principle leads to unacceptable conclusions" },
      { letter: "B", text: "demonstrating that the genetic similarity between species has been exaggerated" },
      { letter: "C", text: "arguing that legal rights should be based on genetic similarity" },
      { letter: "D", text: "questioning the scientific accuracy of claims about DNA sharing between species" },
      { letter: "E", text: "suggesting that chimpanzees and dogs should have the same legal status" }
    ],
    correctAnswer: "A",
    explanation: "The biologist uses dogs as a counterexample to the principle that genetic similarity should determine legal rights. By showing that applying this principle to dogs leads to a conclusion most would reject (dogs having human-like rights), the biologist demonstrates that the principle itself is flawed.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-040",
    sectionType: "logical-reasoning",
    type: "method-of-reasoning",
    stimulus: "Art historian: Critics who dismiss abstract art as lacking skill misunderstand the nature of artistic achievement. Creating compelling abstract compositions requires mastery of color, form, balance, and visual rhythm. The skills involved are different from those required for realistic representation, but they are no less demanding or sophisticated.",
    questionStem: "The art historian's argument employs which one of the following methods of reasoning?",
    answerChoices: [
      { letter: "A", text: "challenging a criticism by redefining the standards by which artwork should be evaluated" },
      { letter: "B", text: "supporting a claim by providing examples of skilled abstract artists" },
      { letter: "C", text: "rejecting a criticism by showing it is based on a narrow conception of artistic skill" },
      { letter: "D", text: "defending abstract art by demonstrating its historical importance" },
      { letter: "E", text: "attacking the credentials of critics who dismiss abstract art" }
    ],
    correctAnswer: "C",
    explanation: "The art historian responds to the criticism that abstract art lacks skill by pointing out that it requires different skills (color, form, balance, rhythm) than realistic art. This shows the critics' conception of skill is too narrow, limited only to representational abilities.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-041",
    sectionType: "logical-reasoning",
    type: "method-of-reasoning",
    stimulus: "Economist: Some argue that raising the minimum wage hurts small businesses. But small businesses pay on average only 20 percent of their costs in wages, so even a significant wage increase would have a limited impact on their expenses. Moreover, higher wages reduce employee turnover, which itself is costly. The effect on small businesses is therefore not as negative as critics claim.",
    questionStem: "The economist's argument proceeds by",
    answerChoices: [
      { letter: "A", text: "presenting statistical evidence to demonstrate that an objection overstates the magnitude of a problem" },
      { letter: "B", text: "questioning the expertise of those who oppose minimum wage increases" },
      { letter: "C", text: "arguing that small businesses should not be the primary concern in wage policy" },
      { letter: "D", text: "denying that minimum wage increases have any effect on small business costs" },
      { letter: "E", text: "suggesting that the benefits of higher wages to workers outweigh costs to businesses" }
    ],
    correctAnswer: "A",
    explanation: "The economist uses statistics (wages are only 20% of costs) to show that the impact is limited, and points to an offsetting benefit (reduced turnover). This demonstrates that critics have overstated how much minimum wage increases hurt small businesses.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-042",
    sectionType: "logical-reasoning",
    type: "method-of-reasoning",
    stimulus: "Philosopher: Determinists argue that free will is an illusion because every event is caused by prior events. But consider: even if our choices are caused by prior events, we still experience deliberation and decision-making. This experience of choosing remains meaningful whether or not it was predetermined. The determinist's argument, even if sound, does not eliminate the practical significance of our sense of free will.",
    questionStem: "The philosopher's response to the determinist's argument can best be described as",
    answerChoices: [
      { letter: "A", text: "accepting the argument's premises while denying its practical implications" },
      { letter: "B", text: "challenging the scientific basis for determinism" },
      { letter: "C", text: "providing a counterexample that refutes the determinist's conclusion" },
      { letter: "D", text: "demonstrating that the concept of causation is incoherent" },
      { letter: "E", text: "arguing that free will and determinism are compatible in principle" }
    ],
    correctAnswer: "A",
    explanation: "The philosopher does not directly dispute that choices might be caused by prior events (the determinist's premise). Instead, they argue that even if this is true, the experience and practical significance of choosing remain meaningful. This accepts the premise while limiting its implications.",
    difficulty: "hard"
  },

  // POINT-AT-ISSUE QUESTIONS (3 total)
  {
    id: "lr-bank21-043",
    sectionType: "logical-reasoning",
    type: "point-at-issue",
    stimulus: "Sociologist: Social media has democratized public discourse by giving everyone a platform to share their views. Previously, only those with access to traditional media could participate in public debates. Now anyone with internet access can contribute.\n\nMedia critic: Social media has actually concentrated discourse. While anyone can post, algorithms promote content from a small number of influential accounts while most users' content goes unnoticed. The appearance of openness masks a new hierarchy.",
    questionStem: "The sociologist and media critic disagree about whether",
    answerChoices: [
      { letter: "A", text: "traditional media restricted access to public debate" },
      { letter: "B", text: "social media algorithms influence what content users see" },
      { letter: "C", text: "social media has made public discourse more egalitarian" },
      { letter: "D", text: "internet access is necessary for participating in online discussions" },
      { letter: "E", text: "influential accounts receive more attention than ordinary users" }
    ],
    correctAnswer: "C",
    explanation: "The sociologist claims social media has democratized (made more egalitarian) public discourse, while the media critic argues it has actually concentrated discourse in a new hierarchy. Both directly address whether social media has made discourse more equal, and they reach opposite conclusions.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-044",
    sectionType: "logical-reasoning",
    type: "point-at-issue",
    stimulus: "Physician: Direct-to-consumer genetic testing should be regulated more strictly. These tests often provide incomplete or misleading information that patients cannot properly interpret without medical guidance. People may make poor health decisions based on misunderstood test results.\n\nGenetics researcher: Consumers have a right to access information about their own bodies. While genetic tests have limitations, people are capable of understanding basic probability and can research what results mean. Restricting access to this information is paternalistic.",
    questionStem: "The main point at issue between the physician and the genetics researcher is whether",
    answerChoices: [
      { letter: "A", text: "genetic tests sometimes provide incomplete information" },
      { letter: "B", text: "consumers can adequately understand and use genetic test results" },
      { letter: "C", text: "people have a right to information about their bodies" },
      { letter: "D", text: "genetic testing technology will improve in the future" },
      { letter: "E", text: "physicians should be involved in interpreting genetic tests" }
    ],
    correctAnswer: "B",
    explanation: "The physician argues patients cannot properly interpret test results without medical guidance and may make poor decisions. The researcher argues people can understand the tests and research their meaning. They directly disagree about whether consumers can adequately understand genetic test results.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-045",
    sectionType: "logical-reasoning",
    type: "point-at-issue",
    stimulus: "Economist: Increasing automation will create more jobs than it eliminates. Throughout history, technological advances have displaced some workers but created new industries and opportunities. The same will be true of artificial intelligence and robotics.\n\nLabor advocate: This time is different. Previous technologies augmented human capabilities, but AI can replace human cognitive work entirely. Unlike earlier automation, AI threatens jobs across all sectors simultaneously, leaving fewer alternative employment options.",
    questionStem: "The economist and labor advocate disagree about whether",
    answerChoices: [
      { letter: "A", text: "previous technological advances displaced some workers" },
      { letter: "B", text: "artificial intelligence will affect multiple economic sectors" },
      { letter: "C", text: "historical patterns of technological disruption will continue with AI" },
      { letter: "D", text: "some jobs will be eliminated by increasing automation" },
      { letter: "E", text: "new technologies can augment human capabilities" }
    ],
    correctAnswer: "C",
    explanation: "The economist argues that historical patterns (technology creating more jobs than it eliminates) will continue with AI. The labor advocate explicitly argues 'this time is different' because AI can replace cognitive work in ways previous technologies could not. They disagree about whether historical patterns will hold.",
    difficulty: "medium"
  },

  // PARALLEL-REASONING QUESTIONS (3 total)
  {
    id: "lr-bank21-046",
    sectionType: "logical-reasoning",
    type: "parallel-reasoning",
    stimulus: "Every student who completed the honors program graduated with distinction. No student who graduated with distinction failed to receive a job offer within six months. Therefore, every student who completed the honors program received a job offer within six months.",
    questionStem: "The pattern of reasoning in the argument above is most similar to that in which one of the following?",
    answerChoices: [
      { letter: "A", text: "All members of the orchestra practiced daily. Some musicians who practice daily become professional performers. Therefore, some members of the orchestra became professional performers." },
      { letter: "B", text: "Every employee who received training was promoted. No employee who was promoted resigned within a year. Therefore, every employee who received training stayed with the company for at least a year." },
      { letter: "C", text: "Most residents of the building own cars. Most car owners commute to work. Therefore, most residents of the building commute to work." },
      { letter: "D", text: "Some novels that won awards were also bestsellers. All bestsellers were widely reviewed. Therefore, some novels that won awards were widely reviewed." },
      { letter: "E", text: "All doctors in this hospital completed residency programs. Many residency programs are highly competitive. Therefore, many doctors in this hospital completed highly competitive programs." }
    ],
    correctAnswer: "B",
    explanation: "Both arguments follow the same structure: All A are B; No B is not C (or All B are C); Therefore, All A are C. The original says: All honors completers graduated with distinction; All distinction graduates got job offers; So all honors completers got job offers. B says: All trained employees were promoted; All promoted employees stayed; So all trained employees stayed.",
    difficulty: "medium"
  },
  {
    id: "lr-bank21-047",
    sectionType: "logical-reasoning",
    type: "parallel-reasoning",
    stimulus: "The city council should approve the new park because residents overwhelmingly support it. When citizens clearly express a preference on community matters, their representatives should respect that preference.",
    questionStem: "Which one of the following arguments is most similar in its pattern of reasoning to the argument above?",
    answerChoices: [
      { letter: "A", text: "The company should hire more workers because production has increased. When demand for products grows, companies should expand their workforce accordingly." },
      { letter: "B", text: "The university should reduce tuition because students are graduating with excessive debt. High debt burdens harm graduates financially." },
      { letter: "C", text: "The committee should reject the proposal because it violates established guidelines. Committees are obligated to follow the rules that govern their decisions." },
      { letter: "D", text: "The restaurant should close early tonight because few customers have arrived. Restaurants waste money by staying open when business is slow." },
      { letter: "E", text: "The court should dismiss the case because there is insufficient evidence. Courts must require adequate evidence before proceeding with trials." }
    ],
    correctAnswer: "A",
    explanation: "Both arguments follow this pattern: X should do Y because of specific circumstance Z; General principle that when Z occurs, X should do Y. The original applies a principle about respecting citizen preferences. A applies a principle about expanding workforce when demand grows. Both use specific facts to trigger a general principle.",
    difficulty: "hard"
  },
  {
    id: "lr-bank21-048",
    sectionType: "logical-reasoning",
    type: "parallel-reasoning",
    stimulus: "Not all medications that reduce symptoms also cure the underlying disease. This pain reliever reduces symptoms. So it might not cure the underlying disease.",
    questionStem: "The reasoning in the argument is most similar to the reasoning in which one of the following?",
    answerChoices: [
      { letter: "A", text: "Not all books that are popular are well-written. This novel is popular. So it might not be well-written." },
      { letter: "B", text: "All effective teachers explain concepts clearly. This instructor explains concepts clearly. So this instructor is an effective teacher." },
      { letter: "C", text: "Some athletes who train hard do not win competitions. This athlete trains hard. So this athlete will not win competitions." },
      { letter: "D", text: "Most students who study regularly pass their exams. This student studies regularly. So this student will probably pass the exams." },
      { letter: "E", text: "No solutions that are quick are permanent. This fix is quick. So this fix is not permanent." }
    ],
    correctAnswer: "A",
    explanation: "Both arguments follow this pattern: Not all X that are Y are also Z; This particular X is Y; Therefore, this X might not be Z. The conclusion is appropriately tentative (might not) because the premise only establishes that some Y are not Z, not that all Y are not Z.",
    difficulty: "medium"
  },

  // INFERENCE QUESTIONS (2 total)
  {
    id: "lr-bank21-049",
    sectionType: "logical-reasoning",
    type: "inference",
    stimulus: "All senior partners at the law firm must have practiced for at least fifteen years. No one who has practiced for less than ten years is eligible to become a junior partner. Martinez has practiced for eight years and hopes to become a partner at this firm someday.",
    questionStem: "If the statements above are true, which one of the following must also be true?",
    answerChoices: [
      { letter: "A", text: "Martinez will never become a partner at the firm" },
      { letter: "B", text: "Martinez is not currently eligible to become a junior partner at the firm" },
      { letter: "C", text: "Martinez must practice for at least seven more years to become a senior partner" },
      { letter: "D", text: "Junior partners must eventually become senior partners" },
      { letter: "E", text: "The firm values experience more than any other qualification" }
    ],
    correctAnswer: "B",
    explanation: "The passage states that no one with less than ten years of practice can become a junior partner. Martinez has practiced for eight years, which is less than ten. Therefore, Martinez is not currently eligible to become a junior partner. This follows directly and necessarily from the given information.",
    difficulty: "easy"
  },
  {
    id: "lr-bank21-050",
    sectionType: "logical-reasoning",
    type: "inference",
    stimulus: "Psychologists have found that people tend to remember emotionally charged events more vividly than neutral events. However, this vividness does not correspond to greater accuracy. Studies show that emotionally charged memories are just as likely to contain errors as neutral memories, but people feel more confident in the accuracy of emotional memories. This overconfidence can be problematic in legal contexts where eyewitness testimony about crimes is often given significant weight.",
    questionStem: "Which one of the following can be properly inferred from the passage?",
    answerChoices: [
      { letter: "A", text: "Eyewitnesses should never be trusted in legal proceedings" },
      { letter: "B", text: "Neutral events are remembered more accurately than emotional events" },
      { letter: "C", text: "An eyewitness's high confidence in a memory does not guarantee that memory is accurate" },
      { letter: "D", text: "Crimes are always emotionally charged events for witnesses" },
      { letter: "E", text: "Psychologists oppose the use of eyewitness testimony in court" }
    ],
    correctAnswer: "C",
    explanation: "The passage states that people feel more confident in emotional memories but that these memories are not actually more accurate than neutral ones. This directly implies that high confidence does not guarantee accuracy. The witness may feel certain but still be wrong, which is the passage's main point about the problem with emotional memories.",
    difficulty: "medium"
  }
];
