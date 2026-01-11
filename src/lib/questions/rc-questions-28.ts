import { Question } from "../lsat-types";

export const rcQuestionsSet28: Question[] = [
  // Passage 1: AI Bias and Fairness
  {
    id: "rc-28-1",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The discovery that artificial intelligence systems can perpetuate and amplify social biases has prompted urgent efforts to develop fair machine learning algorithms. Early optimism suggested that automated decision-making could eliminate human prejudice by relying on objective data patterns rather than subjective judgments influenced by stereotypes. However, researchers documenting discriminatory outcomes across applications—from hiring algorithms that disadvantaged women to criminal risk assessment tools exhibiting racial disparities—demonstrated that algorithmic systems frequently reproduce and even exacerbate existing inequities rather than transcending them.

The mechanisms through which AI systems acquire biases are complex and multifaceted. Training data reflecting historical discrimination inevitably teaches algorithms to replicate those patterns: if hiring data shows that companies previously hired primarily men for technical positions, machine learning models will learn to associate maleness with job suitability. Additionally, seemingly neutral variables can serve as proxies for protected characteristics, enabling indirect discrimination even when systems avoid explicit use of race or gender. For example, ZIP codes correlate strongly with race due to residential segregation, allowing algorithms nominally blind to race to make racially disparate predictions through geographic data.

Efforts to develop fair AI confront fundamental conceptual challenges regarding how fairness should be defined and measured. Multiple mathematical fairness criteria exist—demographic parity, equal opportunity, individual fairness—but research proves that these definitions can conflict such that satisfying one necessarily violates others. An algorithm ensuring equal false positive rates across racial groups may produce unequal false negative rates, forcing choices among competing fairness values rather than achieving comprehensive fairness satisfying all stakeholders simultaneously. These technical impossibility results indicate that fairness is not a singular objective property that algorithms can optimize but rather involves normative judgments about which trade-offs are acceptable.

Moreover, the framing of bias as technical problem amenable to algorithmic solution may obscure deeper structural issues requiring institutional and policy interventions beyond model refinement. Fairness-aware machine learning presumes that appropriate data processing and mathematical constraints can produce equitable outcomes while maintaining existing social arrangements and power structures. However, when underlying systems generating training data are themselves unjust, even mathematically "fair" algorithms may perpetuate problematic outcomes. Addressing algorithmic bias thus requires not just technical fixes but critical examination of whether certain decisions should be automated at all, who participates in defining fairness requirements, and what accountability mechanisms govern deployed systems.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Artificial intelligence systems always eliminate human bias through objective data analysis." },
      { letter: "B", text: "While AI was expected to transcend human prejudice, systems often perpetuate biases through training data, proxy variables, conflicting fairness definitions, and structural issues requiring interventions beyond technical solutions." },
      { letter: "C", text: "All mathematical fairness criteria can be simultaneously satisfied through proper algorithm design." },
      { letter: "D", text: "Algorithmic bias can be completely eliminated through better data processing techniques." },
      { letter: "E", text: "Social biases have no connection to artificial intelligence system outputs." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents early optimism about AI eliminating bias (first paragraph), explains bias mechanisms (second paragraph), discusses conceptual fairness challenges (third paragraph), and argues for interventions beyond technical fixes (fourth paragraph). Option B captures this comprehensive argument. Options A, C, D, and E contradict the passage's core claims about bias perpetuation, fairness conflicts, and structural issues.",
    difficulty: "medium",
    passageId: "rc-28-passage-1"
  },
  {
    id: "rc-28-2",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The discovery that artificial intelligence systems can perpetuate and amplify social biases has prompted urgent efforts to develop fair machine learning algorithms. Early optimism suggested that automated decision-making could eliminate human prejudice by relying on objective data patterns rather than subjective judgments influenced by stereotypes. However, researchers documenting discriminatory outcomes across applications—from hiring algorithms that disadvantaged women to criminal risk assessment tools exhibiting racial disparities—demonstrated that algorithmic systems frequently reproduce and even exacerbate existing inequities rather than transcending them.

The mechanisms through which AI systems acquire biases are complex and multifaceted. Training data reflecting historical discrimination inevitably teaches algorithms to replicate those patterns: if hiring data shows that companies previously hired primarily men for technical positions, machine learning models will learn to associate maleness with job suitability. Additionally, seemingly neutral variables can serve as proxies for protected characteristics, enabling indirect discrimination even when systems avoid explicit use of race or gender. For example, ZIP codes correlate strongly with race due to residential segregation, allowing algorithms nominally blind to race to make racially disparate predictions through geographic data.

Efforts to develop fair AI confront fundamental conceptual challenges regarding how fairness should be defined and measured. Multiple mathematical fairness criteria exist—demographic parity, equal opportunity, individual fairness—but research proves that these definitions can conflict such that satisfying one necessarily violates others. An algorithm ensuring equal false positive rates across racial groups may produce unequal false negative rates, forcing choices among competing fairness values rather than achieving comprehensive fairness satisfying all stakeholders simultaneously. These technical impossibility results indicate that fairness is not a singular objective property that algorithms can optimize but rather involves normative judgments about which trade-offs are acceptable.

Moreover, the framing of bias as technical problem amenable to algorithmic solution may obscure deeper structural issues requiring institutional and policy interventions beyond model refinement. Fairness-aware machine learning presumes that appropriate data processing and mathematical constraints can produce equitable outcomes while maintaining existing social arrangements and power structures. However, when underlying systems generating training data are themselves unjust, even mathematically "fair" algorithms may perpetuate problematic outcomes. Addressing algorithmic bias thus requires not just technical fixes but critical examination of whether certain decisions should be automated at all, who participates in defining fairness requirements, and what accountability mechanisms govern deployed systems.`,
    questionStem: "According to the passage, training data reflecting historical discrimination",
    answerChoices: [
      { letter: "A", text: "always eliminates bias from machine learning systems" },
      { letter: "B", text: "has no effect on algorithmic decision-making patterns" },
      { letter: "C", text: "inevitably teaches algorithms to replicate discriminatory patterns" },
      { letter: "D", text: "ensures that AI systems transcend human prejudice" },
      { letter: "E", text: "prevents algorithms from learning any associations" }
    ],
    correctAnswer: "C",
    explanation: "The second paragraph explicitly states: 'Training data reflecting historical discrimination inevitably teaches algorithms to replicate those patterns.' Option C directly reflects this mechanism. Options A, B, D, and E contradict the passage's explanation of how biased training data perpetuates discrimination in AI systems.",
    difficulty: "easy",
    passageId: "rc-28-passage-1"
  },
  {
    id: "rc-28-3",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The discovery that artificial intelligence systems can perpetuate and amplify social biases has prompted urgent efforts to develop fair machine learning algorithms. Early optimism suggested that automated decision-making could eliminate human prejudice by relying on objective data patterns rather than subjective judgments influenced by stereotypes. However, researchers documenting discriminatory outcomes across applications—from hiring algorithms that disadvantaged women to criminal risk assessment tools exhibiting racial disparities—demonstrated that algorithmic systems frequently reproduce and even exacerbate existing inequities rather than transcending them.

The mechanisms through which AI systems acquire biases are complex and multifaceted. Training data reflecting historical discrimination inevitably teaches algorithms to replicate those patterns: if hiring data shows that companies previously hired primarily men for technical positions, machine learning models will learn to associate maleness with job suitability. Additionally, seemingly neutral variables can serve as proxies for protected characteristics, enabling indirect discrimination even when systems avoid explicit use of race or gender. For example, ZIP codes correlate strongly with race due to residential segregation, allowing algorithms nominally blind to race to make racially disparate predictions through geographic data.

Efforts to develop fair AI confront fundamental conceptual challenges regarding how fairness should be defined and measured. Multiple mathematical fairness criteria exist—demographic parity, equal opportunity, individual fairness—but research proves that these definitions can conflict such that satisfying one necessarily violates others. An algorithm ensuring equal false positive rates across racial groups may produce unequal false negative rates, forcing choices among competing fairness values rather than achieving comprehensive fairness satisfying all stakeholders simultaneously. These technical impossibility results indicate that fairness is not a singular objective property that algorithms can optimize but rather involves normative judgments about which trade-offs are acceptable.

Moreover, the framing of bias as technical problem amenable to algorithmic solution may obscure deeper structural issues requiring institutional and policy interventions beyond model refinement. Fairness-aware machine learning presumes that appropriate data processing and mathematical constraints can produce equitable outcomes while maintaining existing social arrangements and power structures. However, when underlying systems generating training data are themselves unjust, even mathematically "fair" algorithms may perpetuate problematic outcomes. Addressing algorithmic bias thus requires not just technical fixes but critical examination of whether certain decisions should be automated at all, who participates in defining fairness requirements, and what accountability mechanisms govern deployed systems.`,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about mathematical fairness criteria?",
    answerChoices: [
      { letter: "A", text: "They can all be simultaneously satisfied by any properly designed algorithm." },
      { letter: "B", text: "They sometimes conflict such that satisfying one necessarily violates others." },
      { letter: "C", text: "They have no connection to normative judgments about acceptable trade-offs." },
      { letter: "D", text: "They represent singular objective properties that algorithms can universally optimize." },
      { letter: "E", text: "They eliminate the need for any human decision-making about fairness values." }
    ],
    correctAnswer: "B",
    explanation: "The third paragraph states: 'research proves that these definitions can conflict such that satisfying one necessarily violates others' and that fairness 'involves normative judgments about which trade-offs are acceptable.' Option B accurately reflects this inference. Options A, C, D, and E contradict the passage's discussion of conflicting criteria and normative judgments.",
    difficulty: "medium",
    passageId: "rc-28-passage-1"
  },
  {
    id: "rc-28-4",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The discovery that artificial intelligence systems can perpetuate and amplify social biases has prompted urgent efforts to develop fair machine learning algorithms. Early optimism suggested that automated decision-making could eliminate human prejudice by relying on objective data patterns rather than subjective judgments influenced by stereotypes. However, researchers documenting discriminatory outcomes across applications—from hiring algorithms that disadvantaged women to criminal risk assessment tools exhibiting racial disparities—demonstrated that algorithmic systems frequently reproduce and even exacerbate existing inequities rather than transcending them.

The mechanisms through which AI systems acquire biases are complex and multifaceted. Training data reflecting historical discrimination inevitably teaches algorithms to replicate those patterns: if hiring data shows that companies previously hired primarily men for technical positions, machine learning models will learn to associate maleness with job suitability. Additionally, seemingly neutral variables can serve as proxies for protected characteristics, enabling indirect discrimination even when systems avoid explicit use of race or gender. For example, ZIP codes correlate strongly with race due to residential segregation, allowing algorithms nominally blind to race to make racially disparate predictions through geographic data.

Efforts to develop fair AI confront fundamental conceptual challenges regarding how fairness should be defined and measured. Multiple mathematical fairness criteria exist—demographic parity, equal opportunity, individual fairness—but research proves that these definitions can conflict such that satisfying one necessarily violates others. An algorithm ensuring equal false positive rates across racial groups may produce unequal false negative rates, forcing choices among competing fairness values rather than achieving comprehensive fairness satisfying all stakeholders simultaneously. These technical impossibility results indicate that fairness is not a singular objective property that algorithms can optimize but rather involves normative judgments about which trade-offs are acceptable.

Moreover, the framing of bias as technical problem amenable to algorithmic solution may obscure deeper structural issues requiring institutional and policy interventions beyond model refinement. Fairness-aware machine learning presumes that appropriate data processing and mathematical constraints can produce equitable outcomes while maintaining existing social arrangements and power structures. However, when underlying systems generating training data are themselves unjust, even mathematically "fair" algorithms may perpetuate problematic outcomes. Addressing algorithmic bias thus requires not just technical fixes but critical examination of whether certain decisions should be automated at all, who participates in defining fairness requirements, and what accountability mechanisms govern deployed systems.`,
    questionStem: "The author's discussion of ZIP codes in the second paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "demonstrate that geographic data has no correlation with demographic characteristics" },
      { letter: "B", text: "illustrate how seemingly neutral variables can serve as proxies enabling indirect discrimination" },
      { letter: "C", text: "prove that algorithms should always use explicit race and gender variables" },
      { letter: "D", text: "argue that residential segregation has no relationship to algorithmic bias" },
      { letter: "E", text: "show that proxy variables eliminate all forms of discrimination" }
    ],
    correctAnswer: "B",
    explanation: "The passage uses ZIP codes as an example showing that 'seemingly neutral variables can serve as proxies for protected characteristics' because 'ZIP codes correlate strongly with race due to residential segregation, allowing algorithms nominally blind to race to make racially disparate predictions through geographic data.' Option B correctly identifies this illustrative function. Options A, C, D, and E contradict or misrepresent the passage's argument about proxy discrimination.",
    difficulty: "medium",
    passageId: "rc-28-passage-1"
  },
  {
    id: "rc-28-5",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The discovery that artificial intelligence systems can perpetuate and amplify social biases has prompted urgent efforts to develop fair machine learning algorithms. Early optimism suggested that automated decision-making could eliminate human prejudice by relying on objective data patterns rather than subjective judgments influenced by stereotypes. However, researchers documenting discriminatory outcomes across applications—from hiring algorithms that disadvantaged women to criminal risk assessment tools exhibiting racial disparities—demonstrated that algorithmic systems frequently reproduce and even exacerbate existing inequities rather than transcending them.

The mechanisms through which AI systems acquire biases are complex and multifaceted. Training data reflecting historical discrimination inevitably teaches algorithms to replicate those patterns: if hiring data shows that companies previously hired primarily men for technical positions, machine learning models will learn to associate maleness with job suitability. Additionally, seemingly neutral variables can serve as proxies for protected characteristics, enabling indirect discrimination even when systems avoid explicit use of race or gender. For example, ZIP codes correlate strongly with race due to residential segregation, allowing algorithms nominally blind to race to make racially disparate predictions through geographic data.

Efforts to develop fair AI confront fundamental conceptual challenges regarding how fairness should be defined and measured. Multiple mathematical fairness criteria exist—demographic parity, equal opportunity, individual fairness—but research proves that these definitions can conflict such that satisfying one necessarily violates others. An algorithm ensuring equal false positive rates across racial groups may produce unequal false negative rates, forcing choices among competing fairness values rather than achieving comprehensive fairness satisfying all stakeholders simultaneously. These technical impossibility results indicate that fairness is not a singular objective property that algorithms can optimize but rather involves normative judgments about which trade-offs are acceptable.

Moreover, the framing of bias as technical problem amenable to algorithmic solution may obscure deeper structural issues requiring institutional and policy interventions beyond model refinement. Fairness-aware machine learning presumes that appropriate data processing and mathematical constraints can produce equitable outcomes while maintaining existing social arrangements and power structures. However, when underlying systems generating training data are themselves unjust, even mathematically "fair" algorithms may perpetuate problematic outcomes. Addressing algorithmic bias thus requires not just technical fixes but critical examination of whether certain decisions should be automated at all, who participates in defining fairness requirements, and what accountability mechanisms govern deployed systems.`,
    questionStem: "The author's attitude toward purely technical approaches to algorithmic fairness can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive, viewing technical solutions as sufficient" },
      { letter: "B", text: "completely dismissive, rejecting all technical fairness research" },
      { letter: "C", text: "critically skeptical, arguing that technical approaches alone are insufficient and obscure structural issues" },
      { letter: "D", text: "neutrally descriptive without any evaluative stance" },
      { letter: "E", text: "mildly concerned but confident technical fixes will resolve all problems" }
    ],
    correctAnswer: "C",
    explanation: "The fourth paragraph argues that 'framing of bias as technical problem amenable to algorithmic solution may obscure deeper structural issues' and that addressing bias 'requires not just technical fixes but critical examination of whether certain decisions should be automated at all.' Option C accurately captures this critical skepticism about technical-only approaches. The author doesn't view technical solutions as sufficient (A, E), completely dismiss technical research (B), or remain neutral (D).",
    difficulty: "medium",
    passageId: "rc-28-passage-1"
  },

  // Passage 2: Explainable AI
  {
    id: "rc-28-6",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The proliferation of opaque machine learning models in high-stakes domains has generated demands for explainable artificial intelligence capable of justifying its decisions to human stakeholders. Deep neural networks achieving state-of-the-art performance across applications—image recognition, natural language processing, medical diagnosis—operate as "black boxes" whose internal workings resist human comprehension. This opacity creates accountability deficits when systems make consequential decisions affecting individual welfare: how can we audit algorithmic decisions, identify errors, or ensure fairness when we cannot understand why systems reach particular conclusions? The explainability imperative reflects both pragmatic needs for debugging and improving models and normative requirements for transparency and accountability in automated decision-making.

However, the pursuit of explainability confronts fundamental tensions between model complexity and interpretability. The most accurate machine learning models often achieve superior performance precisely through architectural complexity that renders them opaque. Simpler models offering greater interpretability—decision trees, linear regression—typically sacrifice predictive accuracy that complex deep learning achieves. This creates a performance-explainability trade-off where demands for comprehensible models may require accepting inferior accuracy. In medical diagnosis, for instance, insisting on fully transparent models might mean forgoing neural networks that detect patterns beyond human physician capabilities, potentially sacrificing patient outcomes for the sake of interpretability.

Efforts to develop post-hoc explanation techniques that reveal black box model reasoning face additional challenges. Methods purporting to explain complex models by identifying influential input features or approximating decisions with simpler interpretable models generate explanations that may be misleading or incomplete. These explanations often reflect what would make a particular decision reasonable rather than capturing how the model actually processes information. Moreover, different explanation methods applied to the same model can yield contradictory accounts, suggesting that "explanations" may tell us more about the explanation technique than about genuine model behavior. The explanations thus risk providing false confidence that we understand systems that remain fundamentally opaque.

Furthermore, the emphasis on technical explainability may distract from more important governance questions about algorithmic accountability. Even if we could generate perfect explanations of model reasoning, understanding how a system reached a decision does not necessarily tell us whether that decision was appropriate, whether the system should be deployed, or who bears responsibility when it errs. Focusing narrowly on making individual predictions interpretable can obscure structural questions about data provenance, training objectives, deployment contexts, and institutional accountability mechanisms. Genuine algorithmic accountability requires not just technical transparency about model internals but also institutional frameworks ensuring meaningful human oversight, appeal processes, and remedies when automated systems cause harm.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Explainability demands can always be satisfied without sacrificing model performance." },
      { letter: "B", text: "While explainable AI responds to accountability concerns, efforts face tensions between complexity and interpretability, limitations of explanation techniques, and risks of emphasizing technical transparency over institutional governance." },
      { letter: "C", text: "All machine learning models are equally interpretable regardless of architectural complexity." },
      { letter: "D", text: "Post-hoc explanation methods perfectly capture how models actually process information." },
      { letter: "E", text: "Technical transparency alone ensures complete algorithmic accountability." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents explainability demands (first paragraph), discusses performance-interpretability trade-offs (second paragraph), critiques explanation techniques (third paragraph), and argues for institutional accountability beyond technical transparency (fourth paragraph). Option B captures this comprehensive argument. Options A, C, D, and E contradict the passage's discussions of trade-offs, architectural differences, explanation limitations, and governance needs.",
    difficulty: "medium",
    passageId: "rc-28-passage-2"
  },
  {
    id: "rc-28-7",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The proliferation of opaque machine learning models in high-stakes domains has generated demands for explainable artificial intelligence capable of justifying its decisions to human stakeholders. Deep neural networks achieving state-of-the-art performance across applications—image recognition, natural language processing, medical diagnosis—operate as "black boxes" whose internal workings resist human comprehension. This opacity creates accountability deficits when systems make consequential decisions affecting individual welfare: how can we audit algorithmic decisions, identify errors, or ensure fairness when we cannot understand why systems reach particular conclusions? The explainability imperative reflects both pragmatic needs for debugging and improving models and normative requirements for transparency and accountability in automated decision-making.

However, the pursuit of explainability confronts fundamental tensions between model complexity and interpretability. The most accurate machine learning models often achieve superior performance precisely through architectural complexity that renders them opaque. Simpler models offering greater interpretability—decision trees, linear regression—typically sacrifice predictive accuracy that complex deep learning achieves. This creates a performance-explainability trade-off where demands for comprehensible models may require accepting inferior accuracy. In medical diagnosis, for instance, insisting on fully transparent models might mean forgoing neural networks that detect patterns beyond human physician capabilities, potentially sacrificing patient outcomes for the sake of interpretability.

Efforts to develop post-hoc explanation techniques that reveal black box model reasoning face additional challenges. Methods purporting to explain complex models by identifying influential input features or approximating decisions with simpler interpretable models generate explanations that may be misleading or incomplete. These explanations often reflect what would make a particular decision reasonable rather than capturing how the model actually processes information. Moreover, different explanation methods applied to the same model can yield contradictory accounts, suggesting that "explanations" may tell us more about the explanation technique than about genuine model behavior. The explanations thus risk providing false confidence that we understand systems that remain fundamentally opaque.

Furthermore, the emphasis on technical explainability may distract from more important governance questions about algorithmic accountability. Even if we could generate perfect explanations of model reasoning, understanding how a system reached a decision does not necessarily tell us whether that decision was appropriate, whether the system should be deployed, or who bears responsibility when it errs. Focusing narrowly on making individual predictions interpretable can obscure structural questions about data provenance, training objectives, deployment contexts, and institutional accountability mechanisms. Genuine algorithmic accountability requires not just technical transparency about model internals but also institutional frameworks ensuring meaningful human oversight, appeal processes, and remedies when automated systems cause harm.`,
    questionStem: "According to the passage, the most accurate machine learning models often",
    answerChoices: [
      { letter: "A", text: "achieve superior performance through simplicity that enhances interpretability" },
      { letter: "B", text: "sacrifice all predictive accuracy to maximize explainability" },
      { letter: "C", text: "achieve superior performance through architectural complexity that renders them opaque" },
      { letter: "D", text: "offer perfect transparency without any loss of accuracy" },
      { letter: "E", text: "eliminate all trade-offs between performance and interpretability" }
    ],
    correctAnswer: "C",
    explanation: "The second paragraph explicitly states: 'The most accurate machine learning models often achieve superior performance precisely through architectural complexity that renders them opaque.' Option C directly reflects this statement. Options A, B, D, and E contradict the passage's discussion of performance-explainability trade-offs and the relationship between complexity, accuracy, and opacity.",
    difficulty: "easy",
    passageId: "rc-28-passage-2"
  },
  {
    id: "rc-28-8",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The proliferation of opaque machine learning models in high-stakes domains has generated demands for explainable artificial intelligence capable of justifying its decisions to human stakeholders. Deep neural networks achieving state-of-the-art performance across applications—image recognition, natural language processing, medical diagnosis—operate as "black boxes" whose internal workings resist human comprehension. This opacity creates accountability deficits when systems make consequential decisions affecting individual welfare: how can we audit algorithmic decisions, identify errors, or ensure fairness when we cannot understand why systems reach particular conclusions? The explainability imperative reflects both pragmatic needs for debugging and improving models and normative requirements for transparency and accountability in automated decision-making.

However, the pursuit of explainability confronts fundamental tensions between model complexity and interpretability. The most accurate machine learning models often achieve superior performance precisely through architectural complexity that renders them opaque. Simpler models offering greater interpretability—decision trees, linear regression—typically sacrifice predictive accuracy that complex deep learning achieves. This creates a performance-explainability trade-off where demands for comprehensible models may require accepting inferior accuracy. In medical diagnosis, for instance, insisting on fully transparent models might mean forgoing neural networks that detect patterns beyond human physician capabilities, potentially sacrificing patient outcomes for the sake of interpretability.

Efforts to develop post-hoc explanation techniques that reveal black box model reasoning face additional challenges. Methods purporting to explain complex models by identifying influential input features or approximating decisions with simpler interpretable models generate explanations that may be misleading or incomplete. These explanations often reflect what would make a particular decision reasonable rather than capturing how the model actually processes information. Moreover, different explanation methods applied to the same model can yield contradictory accounts, suggesting that "explanations" may tell us more about the explanation technique than about genuine model behavior. The explanations thus risk providing false confidence that we understand systems that remain fundamentally opaque.

Furthermore, the emphasis on technical explainability may distract from more important governance questions about algorithmic accountability. Even if we could generate perfect explanations of model reasoning, understanding how a system reached a decision does not necessarily tell us whether that decision was appropriate, whether the system should be deployed, or who bears responsibility when it errs. Focusing narrowly on making individual predictions interpretable can obscure structural questions about data provenance, training objectives, deployment contexts, and institutional accountability mechanisms. Genuine algorithmic accountability requires not just technical transparency about model internals but also institutional frameworks ensuring meaningful human oversight, appeal processes, and remedies when automated systems cause harm.`,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about post-hoc explanation techniques?",
    answerChoices: [
      { letter: "A", text: "They perfectly capture how models actually process information." },
      { letter: "B", text: "They always yield consistent accounts when applied to the same model." },
      { letter: "C", text: "They may reflect what would make decisions reasonable rather than actual model processing." },
      { letter: "D", text: "They eliminate all challenges associated with black box models." },
      { letter: "E", text: "They provide complete and never misleading explanations." }
    ],
    correctAnswer: "C",
    explanation: "The third paragraph states that post-hoc explanations 'often reflect what would make a particular decision reasonable rather than capturing how the model actually processes information' and that they 'may be misleading or incomplete.' Option C accurately reflects this inference. The passage contradicts A and E regarding perfect/complete explanations, B regarding consistency, and D regarding eliminating challenges.",
    difficulty: "medium",
    passageId: "rc-28-passage-2"
  },
  {
    id: "rc-28-9",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The proliferation of opaque machine learning models in high-stakes domains has generated demands for explainable artificial intelligence capable of justifying its decisions to human stakeholders. Deep neural networks achieving state-of-the-art performance across applications—image recognition, natural language processing, medical diagnosis—operate as "black boxes" whose internal workings resist human comprehension. This opacity creates accountability deficits when systems make consequential decisions affecting individual welfare: how can we audit algorithmic decisions, identify errors, or ensure fairness when we cannot understand why systems reach particular conclusions? The explainability imperative reflects both pragmatic needs for debugging and improving models and normative requirements for transparency and accountability in automated decision-making.

However, the pursuit of explainability confronts fundamental tensions between model complexity and interpretability. The most accurate machine learning models often achieve superior performance precisely through architectural complexity that renders them opaque. Simpler models offering greater interpretability—decision trees, linear regression—typically sacrifice predictive accuracy that complex deep learning achieves. This creates a performance-explainability trade-off where demands for comprehensible models may require accepting inferior accuracy. In medical diagnosis, for instance, insisting on fully transparent models might mean forgoing neural networks that detect patterns beyond human physician capabilities, potentially sacrificing patient outcomes for the sake of interpretability.

Efforts to develop post-hoc explanation techniques that reveal black box model reasoning face additional challenges. Methods purporting to explain complex models by identifying influential input features or approximating decisions with simpler interpretable models generate explanations that may be misleading or incomplete. These explanations often reflect what would make a particular decision reasonable rather than capturing how the model actually processes information. Moreover, different explanation methods applied to the same model can yield contradictory accounts, suggesting that "explanations" may tell us more about the explanation technique than about genuine model behavior. The explanations thus risk providing false confidence that we understand systems that remain fundamentally opaque.

Furthermore, the emphasis on technical explainability may distract from more important governance questions about algorithmic accountability. Even if we could generate perfect explanations of model reasoning, understanding how a system reached a decision does not necessarily tell us whether that decision was appropriate, whether the system should be deployed, or who bears responsibility when it errs. Focusing narrowly on making individual predictions interpretable can obscure structural questions about data provenance, training objectives, deployment contexts, and institutional accountability mechanisms. Genuine algorithmic accountability requires not just technical transparency about model internals but also institutional frameworks ensuring meaningful human oversight, appeal processes, and remedies when automated systems cause harm.`,
    questionStem: "The author's example of medical diagnosis in the second paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "prove that interpretability should always be prioritized over accuracy" },
      { letter: "B", text: "illustrate the potential costs of insisting on transparent models when complex models offer superior performance" },
      { letter: "C", text: "demonstrate that neural networks are always inferior to simpler medical diagnostic methods" },
      { letter: "D", text: "argue that patient outcomes are irrelevant to model selection decisions" },
      { letter: "E", text: "show that performance-explainability trade-offs never exist in healthcare" }
    ],
    correctAnswer: "B",
    explanation: "The passage uses medical diagnosis to show that 'insisting on fully transparent models might mean forgoing neural networks that detect patterns beyond human physician capabilities, potentially sacrificing patient outcomes for the sake of interpretability.' Option B correctly identifies this function as illustrating trade-off costs. The passage doesn't advocate always prioritizing interpretability (A), claim neural network inferiority (C), dismiss patient outcomes (D), or deny trade-offs exist (E).",
    difficulty: "medium",
    passageId: "rc-28-passage-2"
  },
  {
    id: "rc-28-10",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The proliferation of opaque machine learning models in high-stakes domains has generated demands for explainable artificial intelligence capable of justifying its decisions to human stakeholders. Deep neural networks achieving state-of-the-art performance across applications—image recognition, natural language processing, medical diagnosis—operate as "black boxes" whose internal workings resist human comprehension. This opacity creates accountability deficits when systems make consequential decisions affecting individual welfare: how can we audit algorithmic decisions, identify errors, or ensure fairness when we cannot understand why systems reach particular conclusions? The explainability imperative reflects both pragmatic needs for debugging and improving models and normative requirements for transparency and accountability in automated decision-making.

However, the pursuit of explainability confronts fundamental tensions between model complexity and interpretability. The most accurate machine learning models often achieve superior performance precisely through architectural complexity that renders them opaque. Simpler models offering greater interpretability—decision trees, linear regression—typically sacrifice predictive accuracy that complex deep learning achieves. This creates a performance-explainability trade-off where demands for comprehensible models may require accepting inferior accuracy. In medical diagnosis, for instance, insisting on fully transparent models might mean forgoing neural networks that detect patterns beyond human physician capabilities, potentially sacrificing patient outcomes for the sake of interpretability.

Efforts to develop post-hoc explanation techniques that reveal black box model reasoning face additional challenges. Methods purporting to explain complex models by identifying influential input features or approximating decisions with simpler interpretable models generate explanations that may be misleading or incomplete. These explanations often reflect what would make a particular decision reasonable rather than capturing how the model actually processes information. Moreover, different explanation methods applied to the same model can yield contradictory accounts, suggesting that "explanations" may tell us more about the explanation technique than about genuine model behavior. The explanations thus risk providing false confidence that we understand systems that remain fundamentally opaque.

Furthermore, the emphasis on technical explainability may distract from more important governance questions about algorithmic accountability. Even if we could generate perfect explanations of model reasoning, understanding how a system reached a decision does not necessarily tell us whether that decision was appropriate, whether the system should be deployed, or who bears responsibility when it errs. Focusing narrowly on making individual predictions interpretable can obscure structural questions about data provenance, training objectives, deployment contexts, and institutional accountability mechanisms. Genuine algorithmic accountability requires not just technical transparency about model internals but also institutional frameworks ensuring meaningful human oversight, appeal processes, and remedies when automated systems cause harm.`,
    questionStem: "The author's attitude toward technical explainability as sufficient for algorithmic accountability can best be described as",
    answerChoices: [
      { letter: "A", text: "strongly supportive, viewing technical transparency as completely sufficient" },
      { letter: "B", text: "entirely dismissive, rejecting all value in model explanations" },
      { letter: "C", text: "critically skeptical, arguing that technical explainability alone is insufficient and may distract from institutional governance needs" },
      { letter: "D", text: "neutrally descriptive without any evaluative position" },
      { letter: "E", text: "mildly concerned but confident technical solutions will address all accountability issues" }
    ],
    correctAnswer: "C",
    explanation: "The fourth paragraph argues that 'emphasis on technical explainability may distract from more important governance questions' and that 'Genuine algorithmic accountability requires not just technical transparency about model internals but also institutional frameworks.' Option C accurately captures this critical stance. The author doesn't view technical transparency as sufficient (A, E), completely dismiss explanations (B), or remain neutral (D).",
    difficulty: "medium",
    passageId: "rc-28-passage-2"
  },

  // Due to space constraints, I'll create condensed but high-quality passages for the remaining sets
  // Passage 3 & 4 for rc-28 will focus on other AI/ML topics

  // Passage 3: Automated Decision-Making
  {
    id: "rc-28-11",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The delegation of consequential decisions to automated systems raises fundamental questions about human judgment, institutional responsibility, and the appropriate scope of algorithmic authority. Proponents of automation emphasize consistency, scalability, and freedom from cognitive biases that compromise human decision-making. Algorithms process vast information quantities systematically, apply rules uniformly without fatigue or mood variations, and avoid heuristics and prejudices that skew human judgment. In domains from credit lending to criminal sentencing, automation promises to eliminate arbitrary disparities resulting from individual decision-maker idiosyncrasies, creating more predictable and potentially more equitable outcomes.

However, the assumption that algorithmic consistency represents improvement over human discretion overlooks important values that discretion serves. Human decision-makers can recognize exceptional circumstances requiring departure from general rules, exercise mercy and contextual judgment, and remain accountable to communities affected by their choices. Automated systems, conversely, apply predetermined criteria mechanically regardless of individual circumstances that might warrant different treatment. This rigidity can produce outcomes that, while formally consistent, strike observers as substantively unjust when algorithms cannot accommodate morally relevant factors falling outside programmed parameters. Moreover, algorithmic decision-making can obscure responsibility by diffusing accountability across system designers, data providers, and deploying institutions, making it unclear who answers when automated systems err.

The framing of automation as technical efficiency question also neglects power dynamics inherent in deciding which decisions to automate and how systems should be designed. Choices about what factors algorithms consider, how competing values are weighted, and which populations bear risks of errors constitute political decisions with distributional consequences. When these choices occur behind closed doors among technical experts and corporate actors without democratic input from affected communities, automation can entrench existing power arrangements while appearing neutral and scientific. The technical character of algorithmic systems can thus serve to insulate consequential social choices from democratic contestation.

Furthermore, automation can transform the decisions themselves in ways that alter their social meaning and normative character. When human decision-makers evaluate applications or assess risks, they engage in interpretive practices recognizing applicants as persons deserving individual consideration. Automated processing, by contrast, treats individuals as data points processed through statistical models, potentially compromising human dignity even when producing accurate predictions. This transformation raises questions about whether certain decisions—those involving fundamental rights, human potential assessment, or moral judgment—should resist automation regardless of technical capabilities, preserving domains where human engagement and accountability remain essential.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Automated decision-making always produces more equitable outcomes than human judgment." },
      { letter: "B", text: "While automation promises consistency and bias elimination, it raises concerns about discretion, accountability, power dynamics, and whether certain decisions should resist automation regardless of technical capability." },
      { letter: "C", text: "Human decision-makers are superior to algorithms in all circumstances without exception." },
      { letter: "D", text: "Algorithmic consistency is always substantively unjust in every application domain." },
      { letter: "E", text: "Technical efficiency concerns are the only relevant factors in automation decisions." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents automation promises (first paragraph), discusses discretion and accountability concerns (second paragraph), power dynamics issues (third paragraph), and questions about decision transformation (fourth paragraph). Option B captures this balanced analysis. Options A, C, D, and E represent one-sided positions the passage doesn't support.",
    difficulty: "medium",
    passageId: "rc-28-passage-3"
  },
  {
    id: "rc-28-12",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The delegation of consequential decisions to automated systems raises fundamental questions about human judgment, institutional responsibility, and the appropriate scope of algorithmic authority. Proponents of automation emphasize consistency, scalability, and freedom from cognitive biases that compromise human decision-making. Algorithms process vast information quantities systematically, apply rules uniformly without fatigue or mood variations, and avoid heuristics and prejudices that skew human judgment. In domains from credit lending to criminal sentencing, automation promises to eliminate arbitrary disparities resulting from individual decision-maker idiosyncrasies, creating more predictable and potentially more equitable outcomes.

However, the assumption that algorithmic consistency represents improvement over human discretion overlooks important values that discretion serves. Human decision-makers can recognize exceptional circumstances requiring departure from general rules, exercise mercy and contextual judgment, and remain accountable to communities affected by their choices. Automated systems, conversely, apply predetermined criteria mechanically regardless of individual circumstances that might warrant different treatment. This rigidity can produce outcomes that, while formally consistent, strike observers as substantively unjust when algorithms cannot accommodate morally relevant factors falling outside programmed parameters. Moreover, algorithmic decision-making can obscure responsibility by diffusing accountability across system designers, data providers, and deploying institutions, making it unclear who answers when automated systems err.

The framing of automation as technical efficiency question also neglects power dynamics inherent in deciding which decisions to automate and how systems should be designed. Choices about what factors algorithms consider, how competing values are weighted, and which populations bear risks of errors constitute political decisions with distributional consequences. When these choices occur behind closed doors among technical experts and corporate actors without democratic input from affected communities, automation can entrench existing power arrangements while appearing neutral and scientific. The technical character of algorithmic systems can thus serve to insulate consequential social choices from democratic contestation.

Furthermore, automation can transform the decisions themselves in ways that alter their social meaning and normative character. When human decision-makers evaluate applications or assess risks, they engage in interpretive practices recognizing applicants as persons deserving individual consideration. Automated processing, by contrast, treats individuals as data points processed through statistical models, potentially compromising human dignity even when producing accurate predictions. This transformation raises questions about whether certain decisions—those involving fundamental rights, human potential assessment, or moral judgment—should resist automation regardless of technical capabilities, preserving domains where human engagement and accountability remain essential.`,
    questionStem: "According to the passage, proponents of automation emphasize that algorithms",
    answerChoices: [
      { letter: "A", text: "always exercise contextual judgment better than humans" },
      { letter: "B", text: "apply rules uniformly without fatigue or mood variations" },
      { letter: "C", text: "can accommodate all morally relevant factors through programming" },
      { letter: "D", text: "ensure complete democratic accountability in all decision-making" },
      { letter: "E", text: "recognize exceptional circumstances requiring rule departures" }
    ],
    correctAnswer: "B",
    explanation: "The first paragraph states that proponents emphasize that 'Algorithms process vast information quantities systematically, apply rules uniformly without fatigue or mood variations, and avoid heuristics and prejudices that skew human judgment.' Option B directly reflects this proponent claim. Options A, C, D, and E represent capabilities the passage associates with human decision-makers or denies to automated systems.",
    difficulty: "easy",
    passageId: "rc-28-passage-3"
  },
  {
    id: "rc-28-13",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The delegation of consequential decisions to automated systems raises fundamental questions about human judgment, institutional responsibility, and the appropriate scope of algorithmic authority. Proponents of automation emphasize consistency, scalability, and freedom from cognitive biases that compromise human decision-making. Algorithms process vast information quantities systematically, apply rules uniformly without fatigue or mood variations, and avoid heuristics and prejudices that skew human judgment. In domains from credit lending to criminal sentencing, automation promises to eliminate arbitrary disparities resulting from individual decision-maker idiosyncrasies, creating more predictable and potentially more equitable outcomes.

However, the assumption that algorithmic consistency represents improvement over human discretion overlooks important values that discretion serves. Human decision-makers can recognize exceptional circumstances requiring departure from general rules, exercise mercy and contextual judgment, and remain accountable to communities affected by their choices. Automated systems, conversely, apply predetermined criteria mechanically regardless of individual circumstances that might warrant different treatment. This rigidity can produce outcomes that, while formally consistent, strike observers as substantively unjust when algorithms cannot accommodate morally relevant factors falling outside programmed parameters. Moreover, algorithmic decision-making can obscure responsibility by diffusing accountability across system designers, data providers, and deploying institutions, making it unclear who answers when automated systems err.

The framing of automation as technical efficiency question also neglects power dynamics inherent in deciding which decisions to automate and how systems should be designed. Choices about what factors algorithms consider, how competing values are weighted, and which populations bear risks of errors constitute political decisions with distributional consequences. When these choices occur behind closed doors among technical experts and corporate actors without democratic input from affected communities, automation can entrench existing power arrangements while appearing neutral and scientific. The technical character of algorithmic systems can thus serve to insulate consequential social choices from democratic contestation.

Furthermore, automation can transform the decisions themselves in ways that alter their social meaning and normative character. When human decision-makers evaluate applications or assess risks, they engage in interpretive practices recognizing applicants as persons deserving individual consideration. Automated processing, by contrast, treats individuals as data points processed through statistical models, potentially compromising human dignity even when producing accurate predictions. This transformation raises questions about whether certain decisions—those involving fundamental rights, human potential assessment, or moral judgment—should resist automation regardless of technical capabilities, preserving domains where human engagement and accountability remain essential.`,
    questionStem: "The passage most strongly supports which one of the following inferences about algorithmic decision-making and accountability?",
    answerChoices: [
      { letter: "A", text: "Algorithmic systems always create clearer accountability than human decision-making." },
      { letter: "B", text: "Automated decision-making can obscure responsibility by diffusing accountability across multiple actors." },
      { letter: "C", text: "System designers bear no responsibility for automated system outcomes." },
      { letter: "D", text: "Accountability concerns are irrelevant to automation deployment decisions." },
      { letter: "E", text: "Algorithmic decision-making eliminates all questions about institutional responsibility." }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph states that 'algorithmic decision-making can obscure responsibility by diffusing accountability across system designers, data providers, and deploying institutions, making it unclear who answers when automated systems err.' Option B accurately reflects this inference. Options A, C, D, and E contradict the passage's discussion of accountability challenges in automated systems.",
    difficulty: "medium",
    passageId: "rc-28-passage-3"
  },
  {
    id: "rc-28-14",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The delegation of consequential decisions to automated systems raises fundamental questions about human judgment, institutional responsibility, and the appropriate scope of algorithmic authority. Proponents of automation emphasize consistency, scalability, and freedom from cognitive biases that compromise human decision-making. Algorithms process vast information quantities systematically, apply rules uniformly without fatigue or mood variations, and avoid heuristics and prejudices that skew human judgment. In domains from credit lending to criminal sentencing, automation promises to eliminate arbitrary disparities resulting from individual decision-maker idiosyncrasies, creating more predictable and potentially more equitable outcomes.

However, the assumption that algorithmic consistency represents improvement over human discretion overlooks important values that discretion serves. Human decision-makers can recognize exceptional circumstances requiring departure from general rules, exercise mercy and contextual judgment, and remain accountable to communities affected by their choices. Automated systems, conversely, apply predetermined criteria mechanically regardless of individual circumstances that might warrant different treatment. This rigidity can produce outcomes that, while formally consistent, strike observers as substantively unjust when algorithms cannot accommodate morally relevant factors falling outside programmed parameters. Moreover, algorithmic decision-making can obscure responsibility by diffusing accountability across system designers, data providers, and deploying institutions, making it unclear who answers when automated systems err.

The framing of automation as technical efficiency question also neglects power dynamics inherent in deciding which decisions to automate and how systems should be designed. Choices about what factors algorithms consider, how competing values are weighted, and which populations bear risks of errors constitute political decisions with distributional consequences. When these choices occur behind closed doors among technical experts and corporate actors without democratic input from affected communities, automation can entrench existing power arrangements while appearing neutral and scientific. The technical character of algorithmic systems can thus serve to insulate consequential social choices from democratic contestation.

Furthermore, automation can transform the decisions themselves in ways that alter their social meaning and normative character. When human decision-makers evaluate applications or assess risks, they engage in interpretive practices recognizing applicants as persons deserving individual consideration. Automated processing, by contrast, treats individuals as data points processed through statistical models, potentially compromising human dignity even when producing accurate predictions. This transformation raises questions about whether certain decisions—those involving fundamental rights, human potential assessment, or moral judgment—should resist automation regardless of technical capabilities, preserving domains where human engagement and accountability remain essential.`,
    questionStem: "The author's discussion of how automation design choices occur 'behind closed doors' in the third paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "demonstrate that all technical decisions are inherently democratic" },
      { letter: "B", text: "illustrate how automation can entrench power arrangements while appearing neutral when design occurs without affected community input" },
      { letter: "C", text: "prove that technical experts should never participate in system design" },
      { letter: "D", text: "argue that corporate actors have no role in automation development" },
      { letter: "E", text: "show that automation design is purely technical without political dimensions" }
    ],
    correctAnswer: "B",
    explanation: "The passage discusses how choices made 'behind closed doors among technical experts and corporate actors without democratic input from affected communities' mean 'automation can entrench existing power arrangements while appearing neutral and scientific.' Option B correctly identifies this function as illustrating power entrenchment through non-democratic design. Options A, C, D, and E contradict the passage's arguments about political dimensions and power dynamics.",
    difficulty: "medium",
    passageId: "rc-28-passage-3"
  },
  {
    id: "rc-28-15",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The delegation of consequential decisions to automated systems raises fundamental questions about human judgment, institutional responsibility, and the appropriate scope of algorithmic authority. Proponents of automation emphasize consistency, scalability, and freedom from cognitive biases that compromise human decision-making. Algorithms process vast information quantities systematically, apply rules uniformly without fatigue or mood variations, and avoid heuristics and prejudices that skew human judgment. In domains from credit lending to criminal sentencing, automation promises to eliminate arbitrary disparities resulting from individual decision-maker idiosyncrasies, creating more predictable and potentially more equitable outcomes.

However, the assumption that algorithmic consistency represents improvement over human discretion overlooks important values that discretion serves. Human decision-makers can recognize exceptional circumstances requiring departure from general rules, exercise mercy and contextual judgment, and remain accountable to communities affected by their choices. Automated systems, conversely, apply predetermined criteria mechanically regardless of individual circumstances that might warrant different treatment. This rigidity can produce outcomes that, while formally consistent, strike observers as substantively unjust when algorithms cannot accommodate morally relevant factors falling outside programmed parameters. Moreover, algorithmic decision-making can obscure responsibility by diffusing accountability across system designers, data providers, and deploying institutions, making it unclear who answers when automated systems err.

The framing of automation as technical efficiency question also neglects power dynamics inherent in deciding which decisions to automate and how systems should be designed. Choices about what factors algorithms consider, how competing values are weighted, and which populations bear risks of errors constitute political decisions with distributional consequences. When these choices occur behind closed doors among technical experts and corporate actors without democratic input from affected communities, automation can entrench existing power arrangements while appearing neutral and scientific. The technical character of algorithmic systems can thus serve to insulate consequential social choices from democratic contestation.

Furthermore, automation can transform the decisions themselves in ways that alter their social meaning and normative character. When human decision-makers evaluate applications or assess risks, they engage in interpretive practices recognizing applicants as persons deserving individual consideration. Automated processing, by contrast, treats individuals as data points processed through statistical models, potentially compromising human dignity even when producing accurate predictions. This transformation raises questions about whether certain decisions—those involving fundamental rights, human potential assessment, or moral judgment—should resist automation regardless of technical capabilities, preserving domains where human engagement and accountability remain essential.`,
    questionStem: "The author's attitude toward the automation of decisions involving fundamental rights and moral judgment can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive regardless of technical capabilities" },
      { letter: "B", text: "completely indifferent to whether such decisions are automated" },
      { letter: "C", text: "questioning whether such decisions should resist automation to preserve human engagement and accountability" },
      { letter: "D", text: "certain that automation always improves these types of decisions" },
      { letter: "E", text: "dismissive of all concerns about decision transformation" }
    ],
    correctAnswer: "C",
    explanation: "The fourth paragraph raises 'questions about whether certain decisions—those involving fundamental rights, human potential assessment, or moral judgment—should resist automation regardless of technical capabilities, preserving domains where human engagement and accountability remain essential.' Option C accurately captures this questioning, cautious attitude. The author doesn't show enthusiasm (A), indifference (B), certainty about improvement (D), or dismissiveness (E).",
    difficulty: "medium",
    passageId: "rc-28-passage-3"
  },

  // Passage 4: Machine Learning and Scientific Discovery
  {
    id: "rc-28-16",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The application of machine learning to scientific discovery has generated excitement about accelerating research while raising epistemological questions about the nature of scientific understanding. Machine learning models identify patterns in massive datasets that exceed human analytical capacities, discovering correlations among variables that researchers might never recognize through traditional hypothesis-driven investigation. In domains from drug discovery to materials science, algorithms screen millions of candidate compounds or configurations, predicting promising options for experimental validation more efficiently than conventional trial-and-error approaches. This computational power promises to transform scientific practice by augmenting human creativity with algorithmic pattern recognition operating at unprecedented scales.

However, the distinction between prediction and explanation complicates claims about machine learning advancing scientific understanding. Models achieving high predictive accuracy may offer little insight into causal mechanisms or theoretical principles governing observed phenomena. A neural network that accurately predicts protein folding patterns based on amino acid sequences does not necessarily reveal why particular sequences produce specific structures—the model may capture statistical regularities without providing mechanistic understanding that traditional scientific theories aim to deliver. When algorithms identify correlations without explaining underlying causation, they function more as sophisticated instruments generating predictions requiring subsequent theoretical interpretation than as sources of explanatory knowledge themselves.

Moreover, the opacity of complex machine learning models creates epistemological challenges for scientific validation and theory development. Traditional scientific methodology emphasizes transparency and replicability, allowing researchers to scrutinize reasoning processes connecting evidence to conclusions. Black box models making accurate predictions through inscrutable internal representations resist this methodological ideal. Scientists using algorithmic predictions face difficult questions about what constitutes adequate understanding: is it sufficient that models work reliably, or must we comprehend how they work to claim genuine scientific knowledge? This tension between predictive success and mechanistic understanding reflects deeper disputes about scientific explanation's purposes and criteria.

Furthermore, the integration of machine learning into scientific practice may transform research priorities and institutional structures in ways deserving critical examination. The emphasis on large datasets and computational resources required for machine learning can privilege research questions amenable to data-intensive approaches while marginalizing investigations requiring qualitative methods or small-scale experiments. Similarly, the technical expertise and infrastructure demands create dependencies on commercial technology providers and concentrate research capacity in well-resourced institutions, potentially exacerbating existing inequalities in scientific knowledge production. Recognizing machine learning's transformative potential thus requires attending not just to technical capabilities but also to how these tools reshape what questions get asked, who can participate in asking them, and what counts as satisfactory answers.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Machine learning always advances scientific understanding through superior explanatory theories." },
      { letter: "B", text: "While machine learning promises accelerated discovery through pattern recognition, questions arise about prediction versus explanation, opacity versus transparency, and how these tools reshape research practices and priorities." },
      { letter: "C", text: "Traditional scientific methodology is completely obsolete given machine learning capabilities." },
      { letter: "D", text: "Algorithmic pattern recognition eliminates all need for human creativity in scientific research." },
      { letter: "E", text: "Predictive accuracy is always equivalent to mechanistic understanding in science." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents machine learning promises (first paragraph), discusses prediction-explanation distinctions (second paragraph), opacity challenges (third paragraph), and research transformation issues (fourth paragraph). Option B captures this balanced analysis. Options A, C, D, and E represent extreme or oversimplified positions the passage doesn't support.",
    difficulty: "medium",
    passageId: "rc-28-passage-4"
  },
  {
    id: "rc-28-17",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The application of machine learning to scientific discovery has generated excitement about accelerating research while raising epistemological questions about the nature of scientific understanding. Machine learning models identify patterns in massive datasets that exceed human analytical capacities, discovering correlations among variables that researchers might never recognize through traditional hypothesis-driven investigation. In domains from drug discovery to materials science, algorithms screen millions of candidate compounds or configurations, predicting promising options for experimental validation more efficiently than conventional trial-and-error approaches. This computational power promises to transform scientific practice by augmenting human creativity with algorithmic pattern recognition operating at unprecedented scales.

However, the distinction between prediction and explanation complicates claims about machine learning advancing scientific understanding. Models achieving high predictive accuracy may offer little insight into causal mechanisms or theoretical principles governing observed phenomena. A neural network that accurately predicts protein folding patterns based on amino acid sequences does not necessarily reveal why particular sequences produce specific structures—the model may capture statistical regularities without providing mechanistic understanding that traditional scientific theories aim to deliver. When algorithms identify correlations without explaining underlying causation, they function more as sophisticated instruments generating predictions requiring subsequent theoretical interpretation than as sources of explanatory knowledge themselves.

Moreover, the opacity of complex machine learning models creates epistemological challenges for scientific validation and theory development. Traditional scientific methodology emphasizes transparency and replicability, allowing researchers to scrutinize reasoning processes connecting evidence to conclusions. Black box models making accurate predictions through inscrutable internal representations resist this methodological ideal. Scientists using algorithmic predictions face difficult questions about what constitutes adequate understanding: is it sufficient that models work reliably, or must we comprehend how they work to claim genuine scientific knowledge? This tension between predictive success and mechanistic understanding reflects deeper disputes about scientific explanation's purposes and criteria.

Furthermore, the integration of machine learning into scientific practice may transform research priorities and institutional structures in ways deserving critical examination. The emphasis on large datasets and computational resources required for machine learning can privilege research questions amenable to data-intensive approaches while marginalizing investigations requiring qualitative methods or small-scale experiments. Similarly, the technical expertise and infrastructure demands create dependencies on commercial technology providers and concentrate research capacity in well-resourced institutions, potentially exacerbating existing inequalities in scientific knowledge production. Recognizing machine learning's transformative potential thus requires attending not just to technical capabilities but also to how these tools reshape what questions get asked, who can participate in asking them, and what counts as satisfactory answers.`,
    questionStem: "According to the passage, machine learning models that achieve high predictive accuracy",
    answerChoices: [
      { letter: "A", text: "always provide complete insight into causal mechanisms and theoretical principles" },
      { letter: "B", text: "may offer little insight into causal mechanisms despite accurate predictions" },
      { letter: "C", text: "eliminate all need for traditional scientific theories and explanations" },
      { letter: "D", text: "necessarily reveal why observed phenomena occur as they do" },
      { letter: "E", text: "provide mechanistic understanding superior to all traditional scientific approaches" }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph states: 'Models achieving high predictive accuracy may offer little insight into causal mechanisms or theoretical principles governing observed phenomena.' Option B directly reflects this statement. Options A, C, D, and E contradict the passage's distinction between prediction and explanation.",
    difficulty: "easy",
    passageId: "rc-28-passage-4"
  },
  {
    id: "rc-28-18",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The application of machine learning to scientific discovery has generated excitement about accelerating research while raising epistemological questions about the nature of scientific understanding. Machine learning models identify patterns in massive datasets that exceed human analytical capacities, discovering correlations among variables that researchers might never recognize through traditional hypothesis-driven investigation. In domains from drug discovery to materials science, algorithms screen millions of candidate compounds or configurations, predicting promising options for experimental validation more efficiently than conventional trial-and-error approaches. This computational power promises to transform scientific practice by augmenting human creativity with algorithmic pattern recognition operating at unprecedented scales.

However, the distinction between prediction and explanation complicates claims about machine learning advancing scientific understanding. Models achieving high predictive accuracy may offer little insight into causal mechanisms or theoretical principles governing observed phenomena. A neural network that accurately predicts protein folding patterns based on amino acid sequences does not necessarily reveal why particular sequences produce specific structures—the model may capture statistical regularities without providing mechanistic understanding that traditional scientific theories aim to deliver. When algorithms identify correlations without explaining underlying causation, they function more as sophisticated instruments generating predictions requiring subsequent theoretical interpretation than as sources of explanatory knowledge themselves.

Moreover, the opacity of complex machine learning models creates epistemological challenges for scientific validation and theory development. Traditional scientific methodology emphasizes transparency and replicability, allowing researchers to scrutinize reasoning processes connecting evidence to conclusions. Black box models making accurate predictions through inscrutable internal representations resist this methodological ideal. Scientists using algorithmic predictions face difficult questions about what constitutes adequate understanding: is it sufficient that models work reliably, or must we comprehend how they work to claim genuine scientific knowledge? This tension between predictive success and mechanistic understanding reflects deeper disputes about scientific explanation's purposes and criteria.

Furthermore, the integration of machine learning into scientific practice may transform research priorities and institutional structures in ways deserving critical examination. The emphasis on large datasets and computational resources required for machine learning can privilege research questions amenable to data-intensive approaches while marginalizing investigations requiring qualitative methods or small-scale experiments. Similarly, the technical expertise and infrastructure demands create dependencies on commercial technology providers and concentrate research capacity in well-resourced institutions, potentially exacerbating existing inequalities in scientific knowledge production. Recognizing machine learning's transformative potential thus requires attending not just to technical capabilities but also to how these tools reshape what questions get asked, who can participate in asking them, and what counts as satisfactory answers.`,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about machine learning's impact on research practices?",
    answerChoices: [
      { letter: "A", text: "It ensures perfect equality in scientific knowledge production across all institutions." },
      { letter: "B", text: "It may privilege data-intensive approaches while marginalizing qualitative methods and exacerbating inequalities." },
      { letter: "C", text: "It eliminates all dependencies on commercial technology providers." },
      { letter: "D", text: "It has no effect on what research questions scientists choose to investigate." },
      { letter: "E", text: "It guarantees that small-scale experimental investigations receive more resources." }
    ],
    correctAnswer: "B",
    explanation: "The fourth paragraph states that machine learning 'can privilege research questions amenable to data-intensive approaches while marginalizing investigations requiring qualitative methods' and that demands 'create dependencies on commercial technology providers and concentrate research capacity in well-resourced institutions, potentially exacerbating existing inequalities.' Option B accurately reflects these inferences. Options A, C, D, and E contradict the passage's discussion of impacts.",
    difficulty: "medium",
    passageId: "rc-28-passage-4"
  },
  {
    id: "rc-28-19",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The application of machine learning to scientific discovery has generated excitement about accelerating research while raising epistemological questions about the nature of scientific understanding. Machine learning models identify patterns in massive datasets that exceed human analytical capacities, discovering correlations among variables that researchers might never recognize through traditional hypothesis-driven investigation. In domains from drug discovery to materials science, algorithms screen millions of candidate compounds or configurations, predicting promising options for experimental validation more efficiently than conventional trial-and-error approaches. This computational power promises to transform scientific practice by augmenting human creativity with algorithmic pattern recognition operating at unprecedented scales.

However, the distinction between prediction and explanation complicates claims about machine learning advancing scientific understanding. Models achieving high predictive accuracy may offer little insight into causal mechanisms or theoretical principles governing observed phenomena. A neural network that accurately predicts protein folding patterns based on amino acid sequences does not necessarily reveal why particular sequences produce specific structures—the model may capture statistical regularities without providing mechanistic understanding that traditional scientific theories aim to deliver. When algorithms identify correlations without explaining underlying causation, they function more as sophisticated instruments generating predictions requiring subsequent theoretical interpretation than as sources of explanatory knowledge themselves.

Moreover, the opacity of complex machine learning models creates epistemological challenges for scientific validation and theory development. Traditional scientific methodology emphasizes transparency and replicability, allowing researchers to scrutinize reasoning processes connecting evidence to conclusions. Black box models making accurate predictions through inscrutable internal representations resist this methodological ideal. Scientists using algorithmic predictions face difficult questions about what constitutes adequate understanding: is it sufficient that models work reliably, or must we comprehend how they work to claim genuine scientific knowledge? This tension between predictive success and mechanistic understanding reflects deeper disputes about scientific explanation's purposes and criteria.

Furthermore, the integration of machine learning into scientific practice may transform research priorities and institutional structures in ways deserving critical examination. The emphasis on large datasets and computational resources required for machine learning can privilege research questions amenable to data-intensive approaches while marginalizing investigations requiring qualitative methods or small-scale experiments. Similarly, the technical expertise and infrastructure demands create dependencies on commercial technology providers and concentrate research capacity in well-resourced institutions, potentially exacerbating existing inequalities in scientific knowledge production. Recognizing machine learning's transformative potential thus requires attending not just to technical capabilities but also to how these tools reshape what questions get asked, who can participate in asking them, and what counts as satisfactory answers.`,
    questionStem: "The author's discussion of protein folding prediction in the second paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "prove that machine learning always provides superior mechanistic understanding" },
      { letter: "B", text: "illustrate the distinction between predictive accuracy and explanatory insight" },
      { letter: "C", text: "demonstrate that neural networks cannot make accurate scientific predictions" },
      { letter: "D", text: "argue that protein folding research should abandon machine learning methods" },
      { letter: "E", text: "show that statistical regularities are irrelevant to scientific understanding" }
    ],
    correctAnswer: "B",
    explanation: "The passage uses protein folding as an example showing that a model 'does not necessarily reveal why particular sequences produce specific structures—the model may capture statistical regularities without providing mechanistic understanding that traditional scientific theories aim to deliver.' Option B correctly identifies this function as illustrating prediction-explanation distinction. Options A, C, D, and E misrepresent or contradict the example's purpose.",
    difficulty: "medium",
    passageId: "rc-28-passage-4"
  },
  {
    id: "rc-28-20",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The application of machine learning to scientific discovery has generated excitement about accelerating research while raising epistemological questions about the nature of scientific understanding. Machine learning models identify patterns in massive datasets that exceed human analytical capacities, discovering correlations among variables that researchers might never recognize through traditional hypothesis-driven investigation. In domains from drug discovery to materials science, algorithms screen millions of candidate compounds or configurations, predicting promising options for experimental validation more efficiently than conventional trial-and-error approaches. This computational power promises to transform scientific practice by augmenting human creativity with algorithmic pattern recognition operating at unprecedented scales.

However, the distinction between prediction and explanation complicates claims about machine learning advancing scientific understanding. Models achieving high predictive accuracy may offer little insight into causal mechanisms or theoretical principles governing observed phenomena. A neural network that accurately predicts protein folding patterns based on amino acid sequences does not necessarily reveal why particular sequences produce specific structures—the model may capture statistical regularities without providing mechanistic understanding that traditional scientific theories aim to deliver. When algorithms identify correlations without explaining underlying causation, they function more as sophisticated instruments generating predictions requiring subsequent theoretical interpretation than as sources of explanatory knowledge themselves.

Moreover, the opacity of complex machine learning models creates epistemological challenges for scientific validation and theory development. Traditional scientific methodology emphasizes transparency and replicability, allowing researchers to scrutinize reasoning processes connecting evidence to conclusions. Black box models making accurate predictions through inscrutable internal representations resist this methodological ideal. Scientists using algorithmic predictions face difficult questions about what constitutes adequate understanding: is it sufficient that models work reliably, or must we comprehend how they work to claim genuine scientific knowledge? This tension between predictive success and mechanistic understanding reflects deeper disputes about scientific explanation's purposes and criteria.

Furthermore, the integration of machine learning into scientific practice may transform research priorities and institutional structures in ways deserving critical examination. The emphasis on large datasets and computational resources required for machine learning can privilege research questions amenable to data-intensive approaches while marginalizing investigations requiring qualitative methods or small-scale experiments. Similarly, the technical expertise and infrastructure demands create dependencies on commercial technology providers and concentrate research capacity in well-resourced institutions, potentially exacerbating existing inequalities in scientific knowledge production. Recognizing machine learning's transformative potential thus requires attending not just to technical capabilities but also to how these tools reshape what questions get asked, who can participate in asking them, and what counts as satisfactory answers.`,
    questionStem: "The author's attitude toward machine learning in scientific research can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified enthusiasm about transformative benefits without any concerns" },
      { letter: "B", text: "complete rejection of all machine learning applications in science" },
      { letter: "C", text: "balanced recognition of potential benefits while raising epistemological and practical concerns deserving critical examination" },
      { letter: "D", text: "indifferent neutrality toward computational methods in research" },
      { letter: "E", text: "confident that machine learning will solve all scientific problems" }
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges machine learning's promise to 'transform scientific practice' (first paragraph) while raising questions about prediction versus explanation, opacity, and research transformation that 'deserve critical examination' (subsequent paragraphs). Option C accurately captures this balanced, critically engaged attitude. The author doesn't show unqualified enthusiasm (A, E), complete rejection (B), or indifference (D).",
    difficulty: "medium",
    passageId: "rc-28-passage-4"
  }
];
