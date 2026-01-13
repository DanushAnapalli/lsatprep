"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Target,
  ChevronDown,
  Brain,
  FileText,
  Lightbulb,
  AlertTriangle,
  Search,
  BookOpen,
} from "lucide-react";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface QuestionType {
  name: string;
  description: string;
  frequency: "High" | "Medium" | "Low";
  tips: string[];
  keyIdentifiers: string[];
  commonWrongAnswers: string[];
  example?: {
    stimulus: string;
    question: string;
    correctApproach: string;
  };
}

const lrQuestionTypes: QuestionType[] = [
  {
    name: "Strengthen",
    description: "Identify information that would make the argument's conclusion more likely to be true. These questions ask you to provide additional evidence or support that bolsters the argument's reasoning.",
    frequency: "High",
    tips: [
      "Identify the conclusion and evidence first before looking at answers",
      "Look for gaps between evidence and conclusion - the correct answer fills these gaps",
      "The correct answer provides additional support WITHOUT being necessary for the argument",
      "Wrong answers often strengthen a different conclusion or are irrelevant",
      "Consider what assumption the argument makes and find an answer that supports it",
      "For causal arguments, rule out alternative causes or show the cause actually leads to the effect",
      "For statistical arguments, show the sample is representative or large enough",
      "Eliminate answers that weaken or are neutral before selecting",
    ],
    keyIdentifiers: [
      "Which one of the following, if true, most strengthens the argument?",
      "Which one of the following, if true, most supports the argument above?",
      "Which one of the following, if true, provides the most support for the argument?",
      "The argument would be strengthened if which one of the following were true?",
      "Which one of the following, if true, adds the most support?",
    ],
    commonWrongAnswers: [
      "Answers that repeat the conclusion without new support",
      "Answers that strengthen a different argument or claim",
      "Answers that are true but irrelevant to the specific gap in reasoning",
      "Answers that actually weaken the argument",
      "Answers that provide background information without strengthening",
    ],
    example: {
      stimulus: "Studies show that employees who take regular breaks are more productive. Therefore, Company X should implement mandatory break times to increase productivity.",
      question: "Which of the following, if true, most strengthens the argument?",
      correctApproach: "Look for what bridges 'employees who take breaks are more productive' to 'Company X should implement breaks.' The gap is whether Company X's employees would respond similarly. A correct answer might be: 'Company X's workforce has similar characteristics to those in the studies.'",
    },
  },
  {
    name: "Weaken",
    description: "Identify information that would make the argument's conclusion less likely to be true. These questions test your ability to find flaws or gaps in reasoning that can be exploited.",
    frequency: "High",
    tips: [
      "Find the assumption the argument relies on and attack it",
      "Attack the connection between evidence and conclusion, not the evidence itself",
      "For causal arguments, suggest an alternative cause or show that cause doesn't lead to effect",
      "For arguments by analogy, show the two things being compared are relevantly different",
      "Consider scope shifts between evidence and conclusion - the correct answer often exploits these",
      "The answer introduces NEW information - it's not just restating a flaw",
      "Look for answers that show the evidence doesn't actually support the conclusion",
      "For statistical arguments, attack sample size, selection bias, or representativeness",
      "Don't just look for something negative - it must specifically undermine THIS argument",
    ],
    keyIdentifiers: [
      "Which one of the following, if true, most seriously weakens the argument?",
      "Which one of the following, if true, casts the most doubt on the argument?",
      "Which one of the following, if true, most undermines the argument?",
      "The argument is most vulnerable to which of the following criticisms?",
      "Which one of the following, if true, most calls into question the argument?",
    ],
    commonWrongAnswers: [
      "Answers that attack the evidence rather than the reasoning",
      "Answers that weaken a different argument than the one presented",
      "Answers that provide irrelevant negative information",
      "Answers that actually strengthen the argument",
      "Answers that question motives rather than logic",
      "Answers that are too extreme to be realistic",
    ],
    example: {
      stimulus: "Sales of electric vehicles have doubled since the government offered tax credits. Clearly, tax credits are effective at promoting electric vehicle adoption.",
      question: "Which of the following, if true, most weakens the argument?",
      correctApproach: "This is a causal argument (tax credits cause increased sales). Look for alternative explanations. A weakening answer might be: 'During the same period, gas prices tripled while electric vehicle prices dropped significantly.' This provides an alternative cause.",
    },
  },
  {
    name: "Necessary Assumption",
    description: "Identify an unstated premise that MUST be true for the argument to work. Unlike sufficient assumptions, necessary assumptions don't need to prove the conclusion - they just need to be required for the argument not to fail.",
    frequency: "High",
    tips: [
      "Use the negation test: negate the answer choice and see if it destroys the argument",
      "If negating an answer makes the argument fall apart, it's a necessary assumption",
      "The assumption bridges a gap but doesn't have to guarantee the conclusion",
      "Watch for new terms in the conclusion not found in the evidence - these often require bridging assumptions",
      "Correct answers are often modest/conservative - they don't need to be strong",
      "The assumption fills a gap the author takes for granted",
      "Look for what MUST be true, not what COULD be true",
      "Necessary assumptions often address potential objections implicitly",
      "Consider what would make the argument completely fall apart if it were false",
    ],
    keyIdentifiers: [
      "The argument requires which of the following assumptions?",
      "Which one of the following is an assumption on which the argument depends?",
      "The argument assumes which of the following?",
      "Which one of the following is an assumption required by the argument?",
      "The argument relies on assuming which of the following?",
      "The argument presupposes which of the following?",
    ],
    commonWrongAnswers: [
      "Answers that would strengthen but aren't required (sufficient but not necessary)",
      "Answers that restate the conclusion",
      "Answers that are too strong - go beyond what's needed",
      "Answers that address irrelevant considerations",
      "Answers that the argument can survive without",
    ],
    example: {
      stimulus: "All of the research team members have PhDs in biology. Therefore, the research team is well-qualified to study marine ecosystems.",
      question: "The argument assumes which of the following?",
      correctApproach: "Apply the negation test. The gap is between 'PhDs in biology' and 'qualified for marine ecosystems.' A necessary assumption: 'Marine ecosystem study requires or benefits from biology expertise.' Negated: 'Biology expertise is irrelevant to marine ecosystems' - this destroys the argument.",
    },
  },
  {
    name: "Sufficient Assumption",
    description: "Identify a premise that, if added, would make the conclusion logically certain. The answer should GUARANTEE the conclusion follows from the evidence.",
    frequency: "Medium",
    tips: [
      "The answer should guarantee the conclusion - not just make it more likely",
      "Often involves formal logic (if-then statements, all/some/none)",
      "Connect the evidence directly to the conclusion with no gaps remaining",
      "These tend to be stronger statements than necessary assumptions",
      "Look for conditional chains: Evidence → [Assumption] → Conclusion",
      "The assumption often links terms from evidence to terms in conclusion",
      "If the stimulus has conditional logic, the answer usually completes a chain",
      "Think: 'If this were true, the conclusion MUST follow'",
      "These questions often have more formal, conditional language in answers",
    ],
    keyIdentifiers: [
      "Which one of the following, if assumed, enables the conclusion to be properly drawn?",
      "The conclusion follows logically if which of the following is assumed?",
      "Which one of the following, if assumed, allows the argument's conclusion to be properly inferred?",
      "The conclusion would be properly drawn if which of the following were assumed?",
      "Assuming which of the following enables the conclusion to be properly drawn?",
    ],
    commonWrongAnswers: [
      "Answers that only make the conclusion more likely (necessary but not sufficient)",
      "Answers that don't completely bridge the gap",
      "Answers with incorrect conditional logic",
      "Answers that introduce irrelevant conditions",
      "Answers that restate evidence or conclusion",
    ],
    example: {
      stimulus: "Anyone who exercises regularly will have lower stress. Maria has lower stress. Therefore, Maria exercises regularly.",
      question: "The conclusion follows logically if which of the following is assumed?",
      correctApproach: "The argument goes: Exercise → Low Stress. Maria has Low Stress → Maria Exercises. This is affirming the consequent (invalid). To make it valid, we need: Low Stress → Exercise, or 'Only those who exercise regularly have lower stress.'",
    },
  },
  {
    name: "Flaw",
    description: "Identify the logical error or weakness in the argument's reasoning. These questions test your ability to recognize common logical fallacies and describe them in abstract terms.",
    frequency: "High",
    tips: [
      "Learn the common flaw types thoroughly - they repeat frequently",
      "Match the abstract flaw description in the answer to the specific error in the argument",
      "The flaw is about HOW the argument reasons, not WHAT it concludes",
      "Pay attention to scope shifts (some vs. all, correlation vs. causation)",
      "Common flaws: ad hominem, circular reasoning, false dichotomy, equivocation, hasty generalization",
      "Look for assumption language even when the question asks about flaws",
      "The flaw description must match the ACTUAL error, not just any error",
      "Watch for answers that describe valid reasoning as if it were flawed",
      "Consider whether evidence truly supports the conclusion drawn",
    ],
    keyIdentifiers: [
      "The argument is flawed because it...",
      "The reasoning is most vulnerable to criticism on the grounds that...",
      "A flaw in the argument is that it...",
      "Which one of the following most accurately describes a flaw in the argument?",
      "The argument is questionable because it...",
      "The argument's reasoning is flawed because the argument...",
    ],
    commonWrongAnswers: [
      "Answers that describe a flaw not present in the argument",
      "Answers that describe valid reasoning methods",
      "Answers that focus on content rather than reasoning structure",
      "Answers that use correct flaw terms but applied incorrectly",
      "Answers that describe what the argument SHOULD have done",
    ],
    example: {
      stimulus: "Critics say the new policy will hurt the economy. But these critics opposed the current administration from the start, so their criticism is not valid.",
      question: "The argument is flawed because it...",
      correctApproach: "This is an ad hominem attack - attacking the critics rather than their argument. The correct answer describes this: 'rejects a claim by criticizing the source rather than addressing the substance of the claim.'",
    },
  },
  {
    name: "Method of Reasoning",
    description: "Describe HOW the argument proceeds or what technique it uses. Focus on the structure and method, not the specific content.",
    frequency: "Medium",
    tips: [
      "Focus entirely on structure, not content",
      "Identify the main technique: analogy, counterexample, general principle, elimination of alternatives",
      "Track how each part of the argument functions (evidence, conclusion, sub-conclusion)",
      "Eliminate answers that misdescribe the argument's structure",
      "Common methods: citing evidence, using analogy, providing counterexample, eliminating alternatives",
      "Look for what role each sentence plays in the overall argument",
      "Ask yourself: What is the author DOING, not what are they SAYING",
      "Be precise about whether something is a premise, conclusion, or background",
    ],
    keyIdentifiers: [
      "The argument proceeds by...",
      "Which one of the following most accurately describes the method of reasoning?",
      "The argument does which of the following?",
      "The argument employs which of the following reasoning techniques?",
      "Which one of the following describes the technique of reasoning used?",
      "The author's method of argumentation is to...",
    ],
    commonWrongAnswers: [
      "Answers that describe a method not used in the argument",
      "Answers that confuse premises with conclusions",
      "Answers that describe content rather than method",
      "Answers that mislabel the argument's components",
      "Answers that describe what a good argument WOULD do",
    ],
    example: {
      stimulus: "Some argue that social media harms mental health. However, a recent study found that moderate users had better well-being than non-users. Therefore, the relationship between social media and mental health is more complex than critics suggest.",
      question: "The argument proceeds by...",
      correctApproach: "The argument: (1) states an opposing view, (2) cites counterevidence, (3) concludes the issue is complex. The method is: 'citing evidence that complicates a generalization' or 'providing a counterexample to challenge an oversimplified position.'",
    },
  },
  {
    name: "Main Point/Conclusion",
    description: "Identify the main conclusion the argument is trying to establish. This is what the author most wants you to accept or believe.",
    frequency: "Medium",
    tips: [
      "Look for conclusion indicators: therefore, thus, hence, consequently, so, it follows that",
      "Everything else in the argument exists to support the main conclusion",
      "The conclusion is what the author wants you to believe or accept",
      "Distinguish main conclusions from intermediate conclusions (sub-conclusions)",
      "Ask: 'What is the author trying to prove?'",
      "The conclusion often appears at the beginning or end of the stimulus",
      "Evidence indicators (because, since, for) signal supporting information, not conclusions",
      "Be careful of conclusions that seem like evidence for something else",
    ],
    keyIdentifiers: [
      "Which one of the following most accurately expresses the main conclusion?",
      "The main point of the argument is that...",
      "The argument is structured to establish which of the following conclusions?",
      "Which one of the following most accurately expresses the conclusion?",
      "The argument concludes that...",
    ],
    commonWrongAnswers: [
      "Answers that state evidence rather than conclusion",
      "Answers that state an intermediate conclusion rather than main conclusion",
      "Answers that overstate or understate the conclusion",
      "Answers that add information not in the argument",
      "Answers that state background information",
    ],
    example: {
      stimulus: "Studies show caffeine improves alertness. Alertness is crucial for safe driving. Therefore, drivers should consider consuming caffeine before long trips.",
      question: "Which of the following most accurately expresses the main conclusion?",
      correctApproach: "Follow the reasoning: Caffeine → Alertness → Important for driving. The MAIN conclusion is the recommendation: 'Drivers should consider consuming caffeine before long trips.' The other statements support this conclusion.",
    },
  },
  {
    name: "Inference/Must Be True",
    description: "Identify what must be true based on the information given. Unlike other questions, there's no argument to evaluate - just facts to combine.",
    frequency: "High",
    tips: [
      "Stay close to the text - don't over-infer or add assumptions",
      "The correct answer is PROVABLE from the passage with certainty",
      "Combine multiple statements to derive new conclusions",
      "Eliminate answers that could possibly be false",
      "Watch for conditional logic chains you can follow",
      "Look for quantifier combinations (all, some, most, none)",
      "'Must be true' means no exceptions - if there's any way it could be false, eliminate it",
      "Be careful with extreme language - it's usually wrong",
      "The correct answer is often a conservative, limited claim",
    ],
    keyIdentifiers: [
      "Which one of the following must be true based on the statements above?",
      "If the statements above are true, which of the following must also be true?",
      "Which one of the following can be properly inferred?",
      "The statements above, if true, most strongly support which of the following?",
      "Which one of the following conclusions is best supported by the passage?",
    ],
    commonWrongAnswers: [
      "Answers that go beyond what the evidence supports",
      "Answers that use extreme language (all, never, always) not supported",
      "Answers that confuse necessary and sufficient conditions",
      "Answers that could be true but aren't proven",
      "Answers that misread quantifiers or conditions",
    ],
    example: {
      stimulus: "All judges in this district have law degrees. Some judges in this district have previously served as prosecutors. No prosecutors in this district have fewer than five years of experience.",
      question: "Which of the following must be true?",
      correctApproach: "Combine: Some judges were prosecutors → Those judges have 5+ years experience. So: 'Some judges in this district have at least five years of experience.' This follows necessarily from the given facts.",
    },
  },
  {
    name: "Parallel Reasoning",
    description: "Find an argument with the same logical structure as the stimulus. The content can be completely different, but the pattern of reasoning must match.",
    frequency: "Low",
    tips: [
      "Map the structure abstractly (e.g., All A are B, X is A, therefore X is B)",
      "Match the conclusion type (certain vs. probable, positive vs. negative)",
      "If the stimulus is flawed, the correct answer must have the SAME flaw",
      "Start by eliminating answers with wrong conclusion types - it's fastest",
      "Count the number of terms and their relationships",
      "Match quantifiers (all, some, most) precisely",
      "These are time-consuming - consider skipping and returning",
      "Focus on structure matching, not content similarity",
    ],
    keyIdentifiers: [
      "Which one of the following arguments is most similar in its pattern of reasoning?",
      "The pattern of reasoning in which one of the following is most similar to that in the argument above?",
      "Which one of the following exhibits a pattern of reasoning most similar?",
      "The flawed pattern of reasoning in the argument is most similar to that in which one?",
    ],
    commonWrongAnswers: [
      "Answers with similar content but different logical structure",
      "Answers with different conclusion types",
      "Answers with different quantifier patterns",
      "Answers that are valid when the stimulus is flawed (or vice versa)",
      "Answers that partially match but differ in a key aspect",
    ],
    example: {
      stimulus: "All musicians are creative. Alex is creative. Therefore, Alex is a musician.",
      question: "Which of the following has the same flawed pattern of reasoning?",
      correctApproach: "Structure: All M are C. A is C. Therefore, A is M. (Affirming the consequent.) Look for: All X are Y. Z is Y. Therefore Z is X. Example: 'All cats are mammals. This animal is a mammal. Therefore, this animal is a cat.'",
    },
  },
  {
    name: "Parallel Flaw",
    description: "Find an argument that commits the same logical error as the stimulus. The flaw type must match exactly.",
    frequency: "Low",
    tips: [
      "First identify the specific flaw in the stimulus",
      "The correct answer must have the EXACT same flaw type",
      "Map both the structure AND the flaw",
      "Common flaws to match: affirming consequent, denying antecedent, ad hominem, false dichotomy",
      "Eliminate answers that are valid arguments",
      "Eliminate answers with different flaw types",
      "Both arguments should fail for the same reason",
    ],
    keyIdentifiers: [
      "The flawed pattern of reasoning in the argument is most similar to that in which one?",
      "Which one of the following exhibits a flawed pattern of reasoning most similar to the argument above?",
      "The questionable reasoning in the argument is most similar to that in which one?",
    ],
    commonWrongAnswers: [
      "Valid arguments (when the stimulus is flawed)",
      "Arguments with different flaws",
      "Arguments with similar content but different reasoning patterns",
      "Arguments that are flawed in multiple different ways",
    ],
    example: {
      stimulus: "Either we increase funding for education or test scores will decline. Test scores have not declined. So we must have increased funding for education.",
      question: "Which exhibits a similar flawed pattern of reasoning?",
      correctApproach: "The flaw is 'affirming a disjunct' - incorrectly assuming that because one part of an 'either/or' is true, the other must be the cause. Look for: 'Either A or B. Not B. Therefore A was done.' when actually both could happen.",
    },
  },
  {
    name: "Point at Issue",
    description: "Identify what two speakers disagree about. Both speakers must have expressed a view on the topic, and their views must conflict.",
    frequency: "Medium",
    tips: [
      "Both speakers must explicitly address the same topic",
      "They must have OPPOSING views on that specific topic",
      "Test each answer: does Speaker A have a view? Does Speaker B disagree?",
      "Avoid answers where only one speaker has expressed an opinion",
      "Avoid answers where they might agree or where one hasn't taken a position",
      "Look for direct conflict, not just different emphases",
      "The disagreement should be clear, not implied or assumed",
    ],
    keyIdentifiers: [
      "The point at issue between X and Y is whether...",
      "X and Y disagree about whether...",
      "The main point of disagreement between the speakers is...",
      "Which one of the following is a point of disagreement between X and Y?",
    ],
    commonWrongAnswers: [
      "Topics only one speaker addresses",
      "Topics where both might actually agree",
      "Topics neither speaker directly addresses",
      "Mischaracterizations of one speaker's position",
      "Tangential issues not central to the disagreement",
    ],
    example: {
      stimulus: "Alex: Remote work increases productivity because employees avoid commute stress. Jordan: Remote work actually decreases productivity because collaboration suffers.",
      question: "Alex and Jordan disagree about whether...",
      correctApproach: "They directly disagree about whether remote work increases or decreases productivity. The correct answer addresses this specific point of conflict: 'remote work has a positive effect on productivity.'",
    },
  },
  {
    name: "Principle (Identify)",
    description: "Find a general principle that justifies or underlies the argument. The principle abstracts the specific situation to a general rule.",
    frequency: "Medium",
    tips: [
      "Abstract the specific situation to a general rule",
      "The principle should support the conclusion from the evidence",
      "Make sure the principle applies to ALL elements of the argument",
      "Check that the principle doesn't have unintended consequences that contradict the argument",
      "Look for 'if...then' formulations in answers",
      "The principle should be general enough to apply to the case but specific enough to support it",
      "Consider whether the principle would justify ONLY this conclusion, not unintended ones",
    ],
    keyIdentifiers: [
      "Which one of the following principles, if valid, most helps to justify the argument?",
      "The argument relies on which of the following principles?",
      "Which one of the following principles underlies the argument?",
      "Which one of the following most accurately expresses the principle underlying the argument?",
    ],
    commonWrongAnswers: [
      "Principles that don't apply to this specific case",
      "Principles that are too broad and would justify unwanted conclusions",
      "Principles that don't actually support the conclusion",
      "Principles that match some but not all elements of the argument",
    ],
    example: {
      stimulus: "The mayor vetoed the bill because it was passed without proper public hearings. This was the right decision.",
      question: "Which principle, if valid, most helps to justify the argument?",
      correctApproach: "The specific case: bill vetoed for lacking public hearings = right decision. General principle: 'Legislation passed without proper public input should be rejected' or 'Democratic processes require public participation.'",
    },
  },
  {
    name: "Principle (Apply)",
    description: "Apply a given principle to a specific situation. Determine which scenario the principle would support or require.",
    frequency: "Medium",
    tips: [
      "Understand the principle's conditions and results completely first",
      "Break down the principle into its 'if' conditions and 'then' results",
      "Match each situation to the principle's terms precisely",
      "The correct answer satisfies ALL the principle's conditions",
      "Watch for scope limitations in the principle",
      "Consider necessary vs. sufficient conditions in the principle",
      "Eliminate answers that don't meet all required conditions",
    ],
    keyIdentifiers: [
      "Which one of the following judgments conforms to the principle stated above?",
      "The principle above, if valid, most helps to justify which of the following?",
      "Which one of the following most closely conforms to the principle?",
      "Applying the principle above, one would be committed to which conclusion?",
    ],
    commonWrongAnswers: [
      "Answers that meet some but not all conditions",
      "Answers that violate the principle's scope",
      "Answers that confuse necessary and sufficient conditions",
      "Answers that apply a different principle",
    ],
    example: {
      stimulus: "Principle: A company should compensate customers whenever a delay is caused by factors within the company's control.",
      question: "Which of the following conforms to the principle?",
      correctApproach: "Break down: IF delay + within company's control → THEN compensate. Look for an answer where a company-caused delay led to compensation, OR company-external delay led to no compensation.",
    },
  },
  {
    name: "Paradox/Resolve",
    description: "Explain how two seemingly contradictory facts can both be true. Find the missing piece that makes sense of an apparent contradiction.",
    frequency: "Medium",
    tips: [
      "Identify exactly what seems contradictory - state both facts clearly",
      "The answer should make BOTH facts make sense together, not eliminate one",
      "Often involves a hidden factor, distinction, or additional context",
      "Don't eliminate either of the original facts - both remain true",
      "Look for answers that introduce a relevant distinction or variable",
      "The correct answer explains WHY the apparent contradiction isn't actually one",
      "Consider time periods, different groups, definitions, or hidden factors",
    ],
    keyIdentifiers: [
      "Which one of the following, if true, most helps to resolve the apparent paradox?",
      "Which one of the following, if true, most helps to explain the discrepancy?",
      "Which one of the following, if true, would most help to reconcile these facts?",
      "The statements above appear to conflict. Which of the following resolves the conflict?",
    ],
    commonWrongAnswers: [
      "Answers that deny one of the original facts",
      "Answers that deepen the paradox rather than resolve it",
      "Answers that are irrelevant to the apparent conflict",
      "Answers that only explain one fact but not the other",
      "Answers that introduce new paradoxes",
    ],
    example: {
      stimulus: "Company X's revenue increased by 50% this year, yet their profits decreased by 10%.",
      question: "Which of the following, if true, most helps resolve this apparent paradox?",
      correctApproach: "The paradox: more revenue but less profit. Resolution must explain how both can be true. Answer: 'Company X's operating costs increased by 80% due to expansion.' This explains how higher revenue could still mean lower profits.",
    },
  },
  {
    name: "Role of a Statement",
    description: "Identify the function a specific statement plays in the argument. Is it a premise, conclusion, background, counterargument, or something else?",
    frequency: "Medium",
    tips: [
      "Focus on the highlighted/referenced statement's PURPOSE",
      "Common roles: main conclusion, intermediate conclusion, premise, background, counterargument, example",
      "Consider what would happen to the argument if the statement were removed",
      "A premise SUPPORTS something; a conclusion IS SUPPORTED by something",
      "Background information sets context but isn't used as evidence",
      "Look at what comes before and after the statement",
    ],
    keyIdentifiers: [
      "The statement that...plays which of the following roles?",
      "In the argument, the claim that...serves to...",
      "The phrase...functions in the argument as...",
      "Which of the following most accurately describes the role played by the claim?",
    ],
    commonWrongAnswers: [
      "Confusing premise with conclusion",
      "Confusing main conclusion with intermediate conclusion",
      "Describing the statement's content rather than its role",
      "Misidentifying background information as evidence",
    ],
    example: {
      stimulus: "[Music education improves mathematical ability.] Since math skills are essential for success, schools should increase music programs.",
      question: "The bracketed statement plays which role in the argument?",
      correctApproach: "The statement is evidence/premise used to support the conclusion that schools should increase music programs. It's not the main conclusion (that's the 'should' statement) but rather support for it.",
    },
  },
  {
    name: "Evaluate",
    description: "Identify what information would be most useful to determine whether the argument is sound. The correct answer helps assess the argument's strength.",
    frequency: "Low",
    tips: [
      "Look for the key assumption or gap in the argument",
      "The correct answer, depending on its resolution, could either strengthen or weaken",
      "Frame answers as yes/no questions about the argument's validity",
      "The answer should be directly relevant to the argument's reasoning",
      "Consider what you'd want to know to decide if the conclusion is likely true",
      "Often related to necessary assumptions - what needs to be true?",
    ],
    keyIdentifiers: [
      "Which one of the following would be most useful to know in evaluating the argument?",
      "The answer to which of the following would be most useful in evaluating the argument?",
      "Knowing which of the following would be most helpful in evaluating the argument?",
    ],
    commonWrongAnswers: [
      "Information that's interesting but irrelevant to the argument's logic",
      "Information that would only strengthen OR only weaken (good answers could do either)",
      "Information already provided in the stimulus",
      "Information about tangential issues",
    ],
    example: {
      stimulus: "Exercise program X helped 80% of participants lose weight. Therefore, program X is effective for weight loss.",
      question: "Which would be most useful in evaluating the argument?",
      correctApproach: "Key question: Is this success rate meaningful? Useful to know: 'What percentage of people typically lose weight without any program?' If 85% lose weight anyway, X isn't effective; if only 20%, then X is very effective.",
    },
  },
  {
    name: "Cannot Be True",
    description: "Identify what CANNOT be true if the statements in the stimulus are accurate. The correct answer is impossible given the stated facts.",
    frequency: "Low",
    tips: [
      "The correct answer must be IMPOSSIBLE, not just unlikely",
      "All other answers could be true or at least aren't contradicted",
      "Look for logical contradictions with stated information",
      "Pay careful attention to quantifiers and conditional logic",
      "If the stimulus has conditional statements, the answer often violates one",
      "Eliminate answers that could possibly be true",
    ],
    keyIdentifiers: [
      "If the statements above are true, which of the following CANNOT be true?",
      "The statements above, if true, rule out which of the following?",
      "Which of the following is incompatible with the statements above?",
    ],
    commonWrongAnswers: [
      "Answers that are unlikely but not impossible",
      "Answers that aren't addressed by the stimulus",
      "Answers that could be true in some circumstances",
      "Answers that seem negative but aren't contradicted",
    ],
    example: {
      stimulus: "All attendees at the conference were medical professionals. No medical professional at the conference had fewer than 5 years of experience.",
      question: "Which of the following cannot be true?",
      correctApproach: "Logic: Conference attendee → Medical professional → 5+ years experience. What's impossible? 'A conference attendee with 3 years of experience.' This directly violates the chain.",
    },
  },
  {
    name: "Except/Least",
    description: "Find the ONE answer that doesn't fit while four answers do. Often combined with strengthen, weaken, or inference question types.",
    frequency: "Medium",
    tips: [
      "Remember: you're looking for the EXCEPTION - the one that doesn't work",
      "Four answers will strengthen (or weaken, etc.) and ONE will not",
      "Consider marking each answer as 'works' or 'doesn't work' as you go",
      "The exception might weaken when others strengthen, or be irrelevant",
      "Don't get confused by the reversal - stay focused on what makes an answer NOT fit",
      "These can be time-consuming - consider your timing",
    ],
    keyIdentifiers: [
      "Each of the following strengthens the argument EXCEPT:",
      "Which of the following, if true, does NOT weaken the argument?",
      "All of the following can be properly inferred EXCEPT:",
      "Which of the following LEAST supports the conclusion?",
    ],
    commonWrongAnswers: [
      "Getting confused and picking an answer that DOES fit",
      "Picking the weakest answer rather than the one that doesn't work at all",
      "Rushing and missing the 'EXCEPT' or 'LEAST' qualifier",
    ],
    example: {
      stimulus: "Recycling programs reduce landfill waste, conserve resources, and benefit the environment.",
      question: "Each of the following supports expanding recycling programs EXCEPT:",
      correctApproach: "Four answers will support recycling. Look for the ONE that: (1) is irrelevant, (2) actually opposes recycling, or (3) doesn't provide support. That's your answer.",
    },
  },
];

const rcQuestionTypes: QuestionType[] = [
  {
    name: "Main Point/Primary Purpose",
    description: "Identify the central thesis or purpose of the passage. What is the author primarily trying to convey or accomplish?",
    frequency: "High",
    tips: [
      "Read the first and last paragraphs carefully - main points often appear here",
      "The main point should encompass ALL major topics in the passage",
      "Avoid answers that are too narrow (only one paragraph) or too broad (beyond the passage)",
      "Ask: 'What is the author trying to convince me of or explain?'",
      "The main point is what everything else supports or develops",
      "Watch for topic sentences at the start of paragraphs",
      "Consider why the author wrote this - what's their ultimate goal?",
      "Eliminate answers that only capture part of the passage",
    ],
    keyIdentifiers: [
      "The main point of the passage is...",
      "The primary purpose of the passage is to...",
      "Which one of the following most accurately expresses the main point?",
      "The author's central thesis is that...",
      "The passage is primarily concerned with...",
    ],
    commonWrongAnswers: [
      "Answers that state only one detail or supporting point",
      "Answers that are too general or go beyond the passage scope",
      "Answers that contradict the author's actual view",
      "Answers that describe only one section of the passage",
      "Answers that state an opposing view discussed in the passage",
    ],
    example: {
      stimulus: "A passage discussing how recent archaeological findings challenge the traditional view of ancient Mayan civilization as primarily agricultural, presenting evidence of extensive trade networks.",
      question: "The primary purpose of the passage is to...",
      correctApproach: "Identify what the WHOLE passage does. It presents NEW evidence that CHALLENGES an OLD view. Main purpose: 'argue that traditional views of Mayan civilization require revision based on new archaeological evidence.'",
    },
  },
  {
    name: "Author's Attitude/Tone",
    description: "Identify the author's perspective, feeling, or attitude toward the subject matter or views discussed in the passage.",
    frequency: "Medium",
    tips: [
      "Look for evaluative language: unfortunately, notably, surprisingly, importantly",
      "Consider whether the author agrees or disagrees with views presented",
      "The tone is usually moderate - avoid extreme answer choices",
      "Track shifts in attitude throughout the passage",
      "Pay attention to qualifiers and hedging language",
      "Look for signal words indicating approval or disapproval",
      "Consider the author's word choices - positive, negative, or neutral?",
      "Authors can have complex attitudes (e.g., 'skeptical but interested')",
    ],
    keyIdentifiers: [
      "The author's attitude toward X can best be described as...",
      "The author would most likely characterize X as...",
      "The tone of the passage is best described as...",
      "Which of the following best describes the author's view of X?",
      "The author regards X with...",
    ],
    commonWrongAnswers: [
      "Extreme emotions not supported by the text (outraged, ecstatic)",
      "Neutral when the author clearly has an opinion",
      "Conflating the author's view with a view they're reporting",
      "Misreading critical analysis as personal hostility",
      "Overly simplistic characterizations of nuanced positions",
    ],
    example: {
      stimulus: "The author states: 'While the theory has undeniable merits, several troubling gaps remain that its proponents have yet to address adequately.'",
      question: "The author's attitude toward the theory is best described as...",
      correctApproach: "Note 'undeniable merits' (positive) but 'troubling gaps' and 'yet to address adequately' (critical). The attitude is balanced/mixed: 'cautiously skeptical' or 'qualified acceptance with reservations.'",
    },
  },
  {
    name: "Inference",
    description: "Identify what can be concluded or inferred from the passage, even if not directly stated. The answer must be supported by the text.",
    frequency: "High",
    tips: [
      "Stay close to the text - don't over-infer or make assumptions",
      "The answer must be SUPPORTED, not just possible or plausible",
      "Combine information from different parts of the passage",
      "Avoid answers with extreme language not supported by the text",
      "Look for implicit meanings behind explicit statements",
      "'Most strongly supported' still requires textual evidence",
      "The inference should be reasonable given what's stated",
      "Eliminate answers that go beyond what the passage establishes",
    ],
    keyIdentifiers: [
      "It can be inferred from the passage that...",
      "The passage suggests that...",
      "Which one of the following is most strongly supported by the passage?",
      "The author most likely believes that...",
      "The passage implies that...",
      "Based on the passage, it can be concluded that...",
    ],
    commonWrongAnswers: [
      "Answers that go beyond what's stated or implied",
      "Answers using extreme language (always, never, all, none)",
      "Answers that might be true but aren't supported",
      "Answers that contradict passage information",
      "Answers about topics the passage doesn't address",
    ],
    example: {
      stimulus: "A passage states that 'the new technique reduced processing time by 40%, though adoption has been slow due to implementation costs.'",
      question: "It can be inferred that...",
      correctApproach: "What's implied? The technique is effective (40% reduction) but cost is a barrier. Inference: 'Cost considerations are a significant factor in technology adoption decisions' or 'Efficiency gains don't guarantee widespread adoption.'",
    },
  },
  {
    name: "Specific Detail",
    description: "Locate and identify a specific piece of information explicitly stated in the passage. These test accurate reading comprehension.",
    frequency: "High",
    tips: [
      "Go back to the passage to verify - don't rely on memory",
      "Match the answer to specific lines in the passage",
      "Beware of answers that subtly distort details (wrong number, different actor)",
      "These are often quick points if you have good passage notes",
      "The answer should be directly stated, not inferred",
      "Watch for paraphrased answers that maintain the original meaning",
      "Be careful with answers that use passage language but change meaning",
    ],
    keyIdentifiers: [
      "According to the passage...",
      "The author states that...",
      "The passage indicates that...",
      "Which of the following is stated in the passage?",
      "According to the passage, X is characterized as...",
      "The passage mentions that...",
    ],
    commonWrongAnswers: [
      "Details from the passage that are slightly altered",
      "Information that seems related but isn't stated",
      "Answers that confuse who said or did what",
      "Answers that use exact passage words in wrong context",
      "Inferences rather than directly stated facts",
    ],
    example: {
      stimulus: "The passage states: 'The expedition, which began in 1845, consisted of 128 crew members across two ships.'",
      question: "According to the passage, how many crew members participated in the expedition?",
      correctApproach: "This is straightforward: locate the specific detail. The answer is 128. Be careful of wrong answers like 145 (perhaps the year) or answers about only one ship.",
    },
  },
  {
    name: "Function/Purpose",
    description: "Explain why the author included a specific element - what role does it play in the passage's argument or structure?",
    frequency: "Medium",
    tips: [
      "Consider the context around the referenced text",
      "Ask: 'What job does this serve in the argument?'",
      "Common functions: example, evidence, contrast, illustration, counterargument, transition",
      "Focus on PURPOSE, not just content",
      "Consider what would be missing if this element were removed",
      "Look at how the element connects to surrounding text",
      "Is it supporting something? Introducing something? Qualifying something?",
    ],
    keyIdentifiers: [
      "The author mentions X primarily in order to...",
      "The function of the second paragraph is to...",
      "The example of X serves to...",
      "The author refers to X in order to...",
      "What purpose does the discussion of X serve?",
      "The phrase '...' is used to...",
    ],
    commonWrongAnswers: [
      "Describing what the element says rather than why it's there",
      "Attributing the wrong purpose (e.g., saying example supports when it contrasts)",
      "Overstating the element's importance",
      "Missing the connection to the larger argument",
    ],
    example: {
      stimulus: "In a passage arguing that ancient Rome influenced modern law, the author describes how Roman contract law principles appear in contemporary legal codes.",
      question: "The author discusses Roman contract law primarily in order to...",
      correctApproach: "This example ILLUSTRATES/SUPPORTS the main argument about Roman influence. Purpose: 'provide evidence for the claim that Roman legal principles persist in modern law.'",
    },
  },
  {
    name: "Strengthen/Weaken (RC)",
    description: "Find information that would support or undermine a specific view, claim, or argument presented in the passage.",
    frequency: "Medium",
    tips: [
      "Identify exactly what claim needs support or attack",
      "Look for evidence gaps in the passage's reasoning",
      "Apply the same logic as LR strengthen/weaken questions",
      "The answer introduces NEW information not in the passage",
      "For strengthen: look for answers that support the reasoning or fill gaps",
      "For weaken: look for alternative explanations, counterevidence, or assumption attacks",
      "Make sure you're targeting the RIGHT claim in the passage",
    ],
    keyIdentifiers: [
      "Which of the following, if true, most strengthens the author's argument?",
      "Which of the following, if true, would most undermine the position described?",
      "The author's conclusion would be most weakened by evidence showing...",
      "Which of the following would provide the most support for the claim in line X?",
    ],
    commonWrongAnswers: [
      "Information that affects a different argument",
      "Information already stated in the passage",
      "Information that's interesting but irrelevant",
      "For strengthen questions: answers that actually weaken (and vice versa)",
    ],
    example: {
      stimulus: "The passage argues that declining bee populations are caused primarily by pesticide use rather than habitat loss.",
      question: "Which of the following, if true, would most weaken this argument?",
      correctApproach: "To weaken: show pesticides aren't the main cause or that habitat loss IS. Example: 'Bee populations have declined most sharply in areas with minimal pesticide use but significant habitat destruction.'",
    },
  },
  {
    name: "Application/Analogy",
    description: "Find a situation most similar to something described in the passage, or apply the passage's reasoning to a new scenario.",
    frequency: "Low",
    tips: [
      "Identify the key relationship or pattern in the passage",
      "Match the STRUCTURE, not surface features",
      "Look for the same TYPE of relationship in the answer",
      "Eliminate answers with fundamentally different relationships",
      "Consider what makes the passage situation distinctive",
      "The content can be completely different; the pattern must match",
    ],
    keyIdentifiers: [
      "Which one of the following is most analogous to X described in the passage?",
      "Based on the passage, the author would most likely view which situation similarly?",
      "The approach described in the passage is most similar to...",
      "Which of the following exemplifies the same principle?",
    ],
    commonWrongAnswers: [
      "Answers with similar surface content but different underlying relationships",
      "Answers that miss the key aspect of the analogy",
      "Answers that match only one part of the relationship",
      "Answers about the same topic but with different dynamics",
    ],
    example: {
      stimulus: "The passage describes how a small initial investment in infrastructure led to large long-term economic benefits through a multiplier effect.",
      question: "Which is most analogous to the situation described?",
      correctApproach: "Key pattern: small initial input → multiplier effect → large long-term benefit. Analogous: 'A small educational grant that enables research leading to multiple valuable patents and startup companies.'",
    },
  },
  {
    name: "Organization/Structure",
    description: "Describe how the passage or a section is organized. What pattern or structure does the author use?",
    frequency: "Medium",
    tips: [
      "Map the passage paragraph by paragraph before answering",
      "Common patterns: problem/solution, compare/contrast, chronological, cause/effect",
      "Match the description to actual paragraph functions",
      "Eliminate answers that skip major sections or misorder elements",
      "Consider transitions between paragraphs",
      "Look for the overall flow: does it build an argument? Describe a process?",
      "Watch for answers that accurately describe some parts but miss others",
    ],
    keyIdentifiers: [
      "Which of the following best describes the organization of the passage?",
      "The passage is organized in which of the following ways?",
      "The structure of the passage can best be described as...",
      "The second paragraph functions primarily to...",
    ],
    commonWrongAnswers: [
      "Answers that describe only part of the passage",
      "Answers that misidentify the order of elements",
      "Answers that confuse the author's view with views they're critiquing",
      "Answers that describe a structure not present",
    ],
    example: {
      stimulus: "A passage that: (1) describes a traditional theory, (2) presents recent findings that challenge it, (3) proposes a modified theory incorporating new evidence.",
      question: "Which best describes the organization of the passage?",
      correctApproach: "Map the structure: Old view → Challenge/new evidence → Revised view. Match to: 'A traditional position is described, then challenged with new evidence, leading to a proposed modification.'",
    },
  },
  {
    name: "Author Would Agree/Disagree",
    description: "Based on the passage, determine which statement the author would most likely endorse or reject.",
    frequency: "Medium",
    tips: [
      "Draw only on views the author expresses or implies in the passage",
      "Be careful to distinguish the author's views from views they're reporting",
      "Consider the author's overall position and specific claims",
      "Look for statements consistent with the author's arguments",
      "Avoid projecting views onto the author that aren't supported",
      "The answer should align with the author's demonstrated perspective",
    ],
    keyIdentifiers: [
      "Based on the passage, the author would most likely agree with which statement?",
      "The author would be most likely to disagree with which of the following?",
      "With which of the following would the author most likely concur?",
    ],
    commonWrongAnswers: [
      "Statements the author might agree with but doesn't address",
      "Statements that contradict the author's expressed views",
      "Statements attributing extreme positions to a moderate author",
      "Confusing reported views with the author's own position",
    ],
    example: {
      stimulus: "An author argues that while social media has some benefits, its negative effects on mental health are underestimated and deserve more research attention.",
      question: "The author would most likely agree that...",
      correctApproach: "The author acknowledges benefits but emphasizes underestimated harms. They'd agree with: 'The psychological impacts of social media warrant more extensive study' - consistent with their call for more research.",
    },
  },
  {
    name: "Vocabulary in Context",
    description: "Determine the meaning of a word or phrase as it's used in a specific context in the passage.",
    frequency: "Medium",
    tips: [
      "The correct meaning fits the specific context, not just dictionary definitions",
      "Read the sentence and surrounding text carefully",
      "Consider what meaning makes the passage make sense",
      "The intended meaning might not be the most common meaning",
      "Substitute your answer into the passage to check if it works",
      "Look for context clues around the word",
    ],
    keyIdentifiers: [
      "In context, the word 'X' most nearly means...",
      "The phrase 'X' is used in the passage to mean...",
      "By 'X,' the author most likely means...",
      "As used in line X, the term 'Y' refers to...",
    ],
    commonWrongAnswers: [
      "The most common meaning of the word (when context indicates otherwise)",
      "A meaning that doesn't fit the sentence grammatically",
      "A meaning that contradicts the passage's argument",
      "An overly literal interpretation of figurative language",
    ],
    example: {
      stimulus: "The passage states: 'The theory's gravity began to attract supporters from unexpected quarters.'",
      question: "As used in the passage, 'gravity' most nearly means...",
      correctApproach: "In context, 'gravity' doesn't mean physical force. It means 'importance' or 'significance' - the theory's importance attracted supporters. Look for how the word functions in the argument.",
    },
  },
  {
    name: "Dual Passage Comparison",
    description: "For passages with two related texts (Passage A and B), compare and contrast the authors' views, methods, or conclusions.",
    frequency: "Medium",
    tips: [
      "Identify each author's main point and perspective",
      "Look for explicit agreements and disagreements",
      "Note differences in scope, focus, or approach",
      "Consider what each author would say about the other's claims",
      "Track how the passages relate: complementary? Opposing? Different aspects?",
      "Don't assume disagreement - authors can agree on some points",
    ],
    keyIdentifiers: [
      "Both passages are primarily concerned with...",
      "Unlike the author of Passage A, the author of Passage B...",
      "The authors would most likely disagree about...",
      "Which of the following is addressed in Passage A but not in Passage B?",
      "How would the author of Passage B most likely respond to Passage A?",
    ],
    commonWrongAnswers: [
      "Claiming disagreement where both authors might agree",
      "Misattributing views to the wrong author",
      "Overstating the extent of agreement or disagreement",
      "Conflating the topics of the two passages",
    ],
    example: {
      stimulus: "Passage A argues that early human migration was driven by climate change. Passage B argues it was driven by following animal herds.",
      question: "The authors would most likely disagree about...",
      correctApproach: "Both discuss CAUSES of migration but cite different primary causes. They'd disagree about: 'the primary factor motivating early human migration.' They might agree that migration occurred - just not about why.",
    },
  },
  {
    name: "Passage Reference",
    description: "Questions asking about what the passage says about a specific topic, person, study, or example mentioned within it.",
    frequency: "High",
    tips: [
      "Locate the specific reference in the passage before answering",
      "Read the surrounding context for full understanding",
      "Make sure you understand exactly what's being asked",
      "The answer should match what the passage actually says",
      "Don't confuse different studies, people, or examples mentioned",
    ],
    keyIdentifiers: [
      "According to the passage, the study by X showed that...",
      "The passage characterizes Y's theory as...",
      "The author mentions X to illustrate...",
      "What does the passage say about X?",
    ],
    commonWrongAnswers: [
      "Confusing different references in the passage",
      "Mischaracterizing what's said about the reference",
      "Adding information not in the passage",
      "Confusing the author's view with reported views",
    ],
    example: {
      stimulus: "A passage discusses three studies: Smith's (supporting the theory), Jones's (neutral), and Patel's (opposing). The author favorably cites Patel's methodology.",
      question: "According to the passage, what is notable about Patel's study?",
      correctApproach: "Locate what the passage says about Patel specifically. Don't confuse with Smith or Jones. The answer addresses Patel's methodology being praised.",
    },
  },
];

export default function QuestionTypesPage() {
  const [expandedLR, setExpandedLR] = useState<string | null>(null);
  const [expandedRC, setExpandedRC] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"lr" | "rc">("lr");

  const toggleLR = (name: string) => {
    setExpandedLR(expandedLR === name ? null : name);
  };

  const toggleRC = (name: string) => {
    setExpandedRC(expandedRC === name ? null : name);
  };

  const getFrequencyColor = (freq: string) => {
    switch (freq) {
      case "High":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Medium":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "Low":
        return "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-400";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-[#1a365d] hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-amber-500 dark:hover:bg-stone-700"
            >
              <ArrowLeft size={18} className="text-stone-500 dark:text-stone-400" />
              <span>Menu</span>
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-xl font-bold text-[#1a365d] dark:text-amber-400">
              LSATPrep
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Question Type Guide
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Master every LSAT question type with detailed explanations, strategies, and examples.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">{lrQuestionTypes.length}</div>
            <div className="text-sm text-stone-500">LR Question Types</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">{rcQuestionTypes.length}</div>
            <div className="text-sm text-stone-500">RC Question Types</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {lrQuestionTypes.filter(q => q.frequency === "High").length + rcQuestionTypes.filter(q => q.frequency === "High").length}
            </div>
            <div className="text-sm text-stone-500">High Frequency</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="text-2xl font-bold text-stone-600 dark:text-stone-400">
              {lrQuestionTypes.length + rcQuestionTypes.length}
            </div>
            <div className="text-sm text-stone-500">Total Types</div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("lr")}
            className={cx(
              "flex items-center gap-2 rounded-sm px-4 py-2 font-medium transition",
              activeTab === "lr"
                ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            )}
          >
            <Brain size={18} />
            Logical Reasoning ({lrQuestionTypes.length})
          </button>
          <button
            onClick={() => setActiveTab("rc")}
            className={cx(
              "flex items-center gap-2 rounded-sm px-4 py-2 font-medium transition",
              activeTab === "rc"
                ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            )}
          >
            <FileText size={18} />
            Reading Comprehension ({rcQuestionTypes.length})
          </button>
        </div>

        {/* Question Types List */}
        <div className="space-y-3">
          {activeTab === "lr" &&
            lrQuestionTypes.map((qt) => (
              <div
                key={qt.name}
                className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900"
              >
                <button
                  onClick={() => toggleLR(qt.name)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <Target size={18} className="text-[#1a365d] dark:text-amber-400" />
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      {qt.name}
                    </span>
                    <span
                      className={cx(
                        "rounded-sm px-2 py-0.5 text-xs font-semibold",
                        getFrequencyColor(qt.frequency)
                      )}
                    >
                      {qt.frequency}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={cx(
                      "text-stone-400 transition-transform",
                      expandedLR === qt.name && "rotate-180"
                    )}
                  />
                </button>
                {expandedLR === qt.name && (
                  <div className="border-t border-stone-200 p-4 dark:border-stone-700">
                    <p className="mb-4 text-stone-600 dark:text-stone-400">{qt.description}</p>

                    {/* Key Identifiers */}
                    <div className="mb-4 rounded-sm bg-blue-50 p-4 dark:bg-blue-900/20">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-blue-900 dark:text-blue-100">
                        <Search size={16} className="text-blue-500" />
                        Key Question Stems
                      </h4>
                      <ul className="space-y-1">
                        {qt.keyIdentifiers.map((identifier, i) => (
                          <li key={i} className="text-sm text-blue-800 dark:text-blue-300">
                            "{identifier}"
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips & Strategies */}
                    <div className="mb-4 rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                        <Lightbulb size={16} className="text-amber-500" />
                        Tips & Strategies
                      </h4>
                      <ul className="space-y-2">
                        {qt.tips.map((tip, i) => (
                          <li key={i} className="flex gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="text-amber-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common Wrong Answers */}
                    <div className="mb-4 rounded-sm bg-red-50 p-4 dark:bg-red-900/20">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-900 dark:text-red-100">
                        <AlertTriangle size={16} className="text-red-500" />
                        Common Wrong Answer Traps
                      </h4>
                      <ul className="space-y-1">
                        {qt.commonWrongAnswers.map((trap, i) => (
                          <li key={i} className="flex gap-2 text-sm text-red-800 dark:text-red-300">
                            <span className="text-red-500">×</span>
                            {trap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example */}
                    {qt.example && (
                      <div className="rounded-sm bg-green-50 p-4 dark:bg-green-900/20">
                        <h4 className="mb-2 flex items-center gap-2 font-semibold text-green-900 dark:text-green-100">
                          <BookOpen size={16} className="text-green-500" />
                          Example Approach
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-green-800 dark:text-green-200">Stimulus: </span>
                            <span className="text-green-700 dark:text-green-300">{qt.example.stimulus}</span>
                          </div>
                          <div>
                            <span className="font-medium text-green-800 dark:text-green-200">Question: </span>
                            <span className="text-green-700 dark:text-green-300">{qt.example.question}</span>
                          </div>
                          <div>
                            <span className="font-medium text-green-800 dark:text-green-200">Approach: </span>
                            <span className="text-green-700 dark:text-green-300">{qt.example.correctApproach}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

          {activeTab === "rc" &&
            rcQuestionTypes.map((qt) => (
              <div
                key={qt.name}
                className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900"
              >
                <button
                  onClick={() => toggleRC(qt.name)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <Target size={18} className="text-[#1a365d] dark:text-amber-400" />
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      {qt.name}
                    </span>
                    <span
                      className={cx(
                        "rounded-sm px-2 py-0.5 text-xs font-semibold",
                        getFrequencyColor(qt.frequency)
                      )}
                    >
                      {qt.frequency}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={cx(
                      "text-stone-400 transition-transform",
                      expandedRC === qt.name && "rotate-180"
                    )}
                  />
                </button>
                {expandedRC === qt.name && (
                  <div className="border-t border-stone-200 p-4 dark:border-stone-700">
                    <p className="mb-4 text-stone-600 dark:text-stone-400">{qt.description}</p>

                    {/* Key Identifiers */}
                    <div className="mb-4 rounded-sm bg-blue-50 p-4 dark:bg-blue-900/20">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-blue-900 dark:text-blue-100">
                        <Search size={16} className="text-blue-500" />
                        Key Question Stems
                      </h4>
                      <ul className="space-y-1">
                        {qt.keyIdentifiers.map((identifier, i) => (
                          <li key={i} className="text-sm text-blue-800 dark:text-blue-300">
                            "{identifier}"
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips & Strategies */}
                    <div className="mb-4 rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                        <Lightbulb size={16} className="text-amber-500" />
                        Tips & Strategies
                      </h4>
                      <ul className="space-y-2">
                        {qt.tips.map((tip, i) => (
                          <li key={i} className="flex gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="text-amber-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common Wrong Answers */}
                    <div className="mb-4 rounded-sm bg-red-50 p-4 dark:bg-red-900/20">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-900 dark:text-red-100">
                        <AlertTriangle size={16} className="text-red-500" />
                        Common Wrong Answer Traps
                      </h4>
                      <ul className="space-y-1">
                        {qt.commonWrongAnswers.map((trap, i) => (
                          <li key={i} className="flex gap-2 text-sm text-red-800 dark:text-red-300">
                            <span className="text-red-500">×</span>
                            {trap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example */}
                    {qt.example && (
                      <div className="rounded-sm bg-green-50 p-4 dark:bg-green-900/20">
                        <h4 className="mb-2 flex items-center gap-2 font-semibold text-green-900 dark:text-green-100">
                          <BookOpen size={16} className="text-green-500" />
                          Example Approach
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-green-800 dark:text-green-200">Stimulus: </span>
                            <span className="text-green-700 dark:text-green-300">{qt.example.stimulus}</span>
                          </div>
                          <div>
                            <span className="font-medium text-green-800 dark:text-green-200">Question: </span>
                            <span className="text-green-700 dark:text-green-300">{qt.example.question}</span>
                          </div>
                          <div>
                            <span className="font-medium text-green-800 dark:text-green-200">Approach: </span>
                            <span className="text-green-700 dark:text-green-300">{qt.example.correctApproach}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
