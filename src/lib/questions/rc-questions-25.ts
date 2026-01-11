import { Question } from "../lsat-types";

export const rcQuestionsSet25: Question[] = [
  // Passage 1: Social Media and Democracy
  {
    id: "rc-25-1",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The relationship between social media platforms and democratic discourse has become a subject of intense scrutiny as evidence accumulates regarding these technologies' effects on political engagement and information ecosystems. Early optimists celebrated social media as democratizing communication, enabling ordinary citizens to participate in public debate, organize collective action, and hold powerful institutions accountable without relying on traditional gatekeepers. The Arab Spring uprisings and various social movements appeared to validate this vision, demonstrating how platforms could facilitate rapid mobilization and amplify marginalized voices that mainstream media overlooked.

However, subsequent developments have revealed troubling dynamics that undermine social media's democratic potential. Platform algorithms designed to maximize user engagement systematically privilege emotionally charged, divisive content over nuanced discussion, as outrage and tribal affiliation generate more clicks, shares, and sustained attention than careful analysis. This creates perverse incentives where measured voices addressing complexity receive minimal visibility while inflammatory rhetoric spreads virally, degrading the quality of public discourse. The algorithmic amplification of extreme content pulls users toward ideological poles, fragmenting shared reality into incompatible partisan narratives.

Moreover, social media's architecture proves particularly vulnerable to strategic manipulation by sophisticated actors seeking to influence public opinion. Foreign intelligence services, domestic political operatives, and commercial entities deploy networks of inauthentic accounts to create illusions of grassroots support, inject disinformation into circulation, and exploit algorithmic systems designed to surface trending content. These coordinated manipulation campaigns often achieve outsized impact because platform algorithms cannot reliably distinguish genuine engagement from manufactured activity, allowing bad actors to game systems built around popularity metrics. The resulting information pollution makes it increasingly difficult for citizens to distinguish authentic expression from strategic deception.

The concentration of communicative power in a handful of private companies raises additional democratic concerns. Platforms' content moderation decisions—determining which speech is permissible and which voices receive amplification—exercise quasi-governmental power over public discourse without democratic accountability or consistent principles. While these companies face legitimate pressures to address harmful content, the absence of transparent procedures and appeal mechanisms means moderation operates as arbitrary private censorship. Furthermore, platforms' business models fundamentally depend on surveillance capitalism—extracting behavioral data to enable precise targeting—creating structural incentives that conflict with democratic values of privacy and autonomous citizenship.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Social media platforms successfully democratize communication by enabling citizen participation in public debate." },
      { letter: "B", text: "While social media initially promised to enhance democratic participation, algorithmic dynamics, manipulation vulnerabilities, and concentrated private control raise serious concerns about these platforms' impact on democratic discourse." },
      { letter: "C", text: "Foreign intelligence services represent the primary threat to democratic discourse on social media platforms." },
      { letter: "D", text: "Social media platforms should be completely prohibited due to their negative effects on democracy." },
      { letter: "E", text: "Content moderation by private companies eliminates all harmful effects of social media on political discussion." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents early optimism about social media's democratic potential (first paragraph) then systematically examines problems: algorithmic amplification of divisive content (second paragraph), manipulation vulnerabilities (third paragraph), and concentrated private power (fourth paragraph). Option B captures this structure of promise versus serious concerns. Options A and E ignore the criticisms, C focuses narrowly on one threat, and D makes an extreme claim the passage doesn't advocate.",
    difficulty: "medium",
    passageId: "rc-25-passage-1"
  },
  {
    id: "rc-25-2",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The relationship between social media platforms and democratic discourse has become a subject of intense scrutiny as evidence accumulates regarding these technologies' effects on political engagement and information ecosystems. Early optimists celebrated social media as democratizing communication, enabling ordinary citizens to participate in public debate, organize collective action, and hold powerful institutions accountable without relying on traditional gatekeepers. The Arab Spring uprisings and various social movements appeared to validate this vision, demonstrating how platforms could facilitate rapid mobilization and amplify marginalized voices that mainstream media overlooked.

However, subsequent developments have revealed troubling dynamics that undermine social media's democratic potential. Platform algorithms designed to maximize user engagement systematically privilege emotionally charged, divisive content over nuanced discussion, as outrage and tribal affiliation generate more clicks, shares, and sustained attention than careful analysis. This creates perverse incentives where measured voices addressing complexity receive minimal visibility while inflammatory rhetoric spreads virally, degrading the quality of public discourse. The algorithmic amplification of extreme content pulls users toward ideological poles, fragmenting shared reality into incompatible partisan narratives.

Moreover, social media's architecture proves particularly vulnerable to strategic manipulation by sophisticated actors seeking to influence public opinion. Foreign intelligence services, domestic political operatives, and commercial entities deploy networks of inauthentic accounts to create illusions of grassroots support, inject disinformation into circulation, and exploit algorithmic systems designed to surface trending content. These coordinated manipulation campaigns often achieve outsized impact because platform algorithms cannot reliably distinguish genuine engagement from manufactured activity, allowing bad actors to game systems built around popularity metrics. The resulting information pollution makes it increasingly difficult for citizens to distinguish authentic expression from strategic deception.

The concentration of communicative power in a handful of private companies raises additional democratic concerns. Platforms' content moderation decisions—determining which speech is permissible and which voices receive amplification—exercise quasi-governmental power over public discourse without democratic accountability or consistent principles. While these companies face legitimate pressures to address harmful content, the absence of transparent procedures and appeal mechanisms means moderation operates as arbitrary private censorship. Furthermore, platforms' business models fundamentally depend on surveillance capitalism—extracting behavioral data to enable precise targeting—creating structural incentives that conflict with democratic values of privacy and autonomous citizenship.`,
    questionStem: "According to the passage, platform algorithms designed to maximize user engagement systematically privilege content that is",
    answerChoices: [
      { letter: "A", text: "carefully reasoned and addressing complexity" },
      { letter: "B", text: "emotionally charged and divisive" },
      { letter: "C", text: "produced by verified accounts with established credibility" },
      { letter: "D", text: "factually accurate and well-documented" },
      { letter: "E", text: "supportive of democratic values and civil discourse" }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph explicitly states: 'Platform algorithms designed to maximize user engagement systematically privilege emotionally charged, divisive content over nuanced discussion, as outrage and tribal affiliation generate more clicks, shares, and sustained attention than careful analysis.' Option B directly reflects this description. Options A, D, and E describe content that the passage suggests receives minimal visibility, while C is not mentioned in connection with algorithmic privileging.",
    difficulty: "easy",
    passageId: "rc-25-passage-1"
  },
  {
    id: "rc-25-3",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The relationship between social media platforms and democratic discourse has become a subject of intense scrutiny as evidence accumulates regarding these technologies' effects on political engagement and information ecosystems. Early optimists celebrated social media as democratizing communication, enabling ordinary citizens to participate in public debate, organize collective action, and hold powerful institutions accountable without relying on traditional gatekeepers. The Arab Spring uprisings and various social movements appeared to validate this vision, demonstrating how platforms could facilitate rapid mobilization and amplify marginalized voices that mainstream media overlooked.

However, subsequent developments have revealed troubling dynamics that undermine social media's democratic potential. Platform algorithms designed to maximize user engagement systematically privilege emotionally charged, divisive content over nuanced discussion, as outrage and tribal affiliation generate more clicks, shares, and sustained attention than careful analysis. This creates perverse incentives where measured voices addressing complexity receive minimal visibility while inflammatory rhetoric spreads virally, degrading the quality of public discourse. The algorithmic amplification of extreme content pulls users toward ideological poles, fragmenting shared reality into incompatible partisan narratives.

Moreover, social media's architecture proves particularly vulnerable to strategic manipulation by sophisticated actors seeking to influence public opinion. Foreign intelligence services, domestic political operatives, and commercial entities deploy networks of inauthentic accounts to create illusions of grassroots support, inject disinformation into circulation, and exploit algorithmic systems designed to surface trending content. These coordinated manipulation campaigns often achieve outsized impact because platform algorithms cannot reliably distinguish genuine engagement from manufactured activity, allowing bad actors to game systems built around popularity metrics. The resulting information pollution makes it increasingly difficult for citizens to distinguish authentic expression from strategic deception.

The concentration of communicative power in a handful of private companies raises additional democratic concerns. Platforms' content moderation decisions—determining which speech is permissible and which voices receive amplification—exercise quasi-governmental power over public discourse without democratic accountability or consistent principles. While these companies face legitimate pressures to address harmful content, the absence of transparent procedures and appeal mechanisms means moderation operates as arbitrary private censorship. Furthermore, platforms' business models fundamentally depend on surveillance capitalism—extracting behavioral data to enable precise targeting—creating structural incentives that conflict with democratic values of privacy and autonomous citizenship.`,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about manipulation campaigns on social media?",
    answerChoices: [
      { letter: "A", text: "They are easily detected and removed by platform algorithms designed for this purpose." },
      { letter: "B", text: "They achieve outsized impact partly because algorithms cannot reliably distinguish genuine from manufactured engagement." },
      { letter: "C", text: "They are conducted exclusively by foreign intelligence services rather than domestic actors." },
      { letter: "D", text: "They have no significant effect on public opinion because users can easily identify inauthentic accounts." },
      { letter: "E", text: "They are encouraged by platforms as a means of increasing user engagement metrics." }
    ],
    correctAnswer: "B",
    explanation: "The third paragraph states that manipulation campaigns 'often achieve outsized impact because platform algorithms cannot reliably distinguish genuine engagement from manufactured activity, allowing bad actors to game systems built around popularity metrics.' Option B accurately reflects this inference. The passage contradicts A and D by emphasizing detection difficulties and impact, C by mentioning both foreign and domestic actors, and doesn't support E's claim about intentional encouragement.",
    difficulty: "easy",
    passageId: "rc-25-passage-1"
  },
  {
    id: "rc-25-4",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The relationship between social media platforms and democratic discourse has become a subject of intense scrutiny as evidence accumulates regarding these technologies' effects on political engagement and information ecosystems. Early optimists celebrated social media as democratizing communication, enabling ordinary citizens to participate in public debate, organize collective action, and hold powerful institutions accountable without relying on traditional gatekeepers. The Arab Spring uprisings and various social movements appeared to validate this vision, demonstrating how platforms could facilitate rapid mobilization and amplify marginalized voices that mainstream media overlooked.

However, subsequent developments have revealed troubling dynamics that undermine social media's democratic potential. Platform algorithms designed to maximize user engagement systematically privilege emotionally charged, divisive content over nuanced discussion, as outrage and tribal affiliation generate more clicks, shares, and sustained attention than careful analysis. This creates perverse incentives where measured voices addressing complexity receive minimal visibility while inflammatory rhetoric spreads virally, degrading the quality of public discourse. The algorithmic amplification of extreme content pulls users toward ideological poles, fragmenting shared reality into incompatible partisan narratives.

Moreover, social media's architecture proves particularly vulnerable to strategic manipulation by sophisticated actors seeking to influence public opinion. Foreign intelligence services, domestic political operatives, and commercial entities deploy networks of inauthentic accounts to create illusions of grassroots support, inject disinformation into circulation, and exploit algorithmic systems designed to surface trending content. These coordinated manipulation campaigns often achieve outsized impact because platform algorithms cannot reliably distinguish genuine engagement from manufactured activity, allowing bad actors to game systems built around popularity metrics. The resulting information pollution makes it increasingly difficult for citizens to distinguish authentic expression from strategic deception.

The concentration of communicative power in a handful of private companies raises additional democratic concerns. Platforms' content moderation decisions—determining which speech is permissible and which voices receive amplification—exercise quasi-governmental power over public discourse without democratic accountability or consistent principles. While these companies face legitimate pressures to address harmful content, the absence of transparent procedures and appeal mechanisms means moderation operates as arbitrary private censorship. Furthermore, platforms' business models fundamentally depend on surveillance capitalism—extracting behavioral data to enable precise targeting—creating structural incentives that conflict with democratic values of privacy and autonomous citizenship.`,
    questionStem: "The author's reference to the Arab Spring in the first paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "prove that social media always enhances democratic participation" },
      { letter: "B", text: "illustrate the early optimistic view that platforms could facilitate mobilization and amplify marginalized voices" },
      { letter: "C", text: "argue that social media platforms should focus exclusively on supporting political uprisings" },
      { letter: "D", text: "demonstrate that algorithmic amplification improves the quality of political discourse" },
      { letter: "E", text: "suggest that manipulation campaigns have undermined all social movements" }
    ],
    correctAnswer: "B",
    explanation: "The passage mentions the Arab Spring as an example that 'appeared to validate this vision' of social media as democratizing, 'demonstrating how platforms could facilitate rapid mobilization and amplify marginalized voices that mainstream media overlooked.' Option B correctly identifies this function as illustrating early optimism. The passage doesn't claim social media always enhances participation (A), advocate focusing on uprisings (C), or suggest algorithmic improvement (D), while E overstates claims about manipulation's effects.",
    difficulty: "medium",
    passageId: "rc-25-passage-1"
  },
  {
    id: "rc-25-5",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The relationship between social media platforms and democratic discourse has become a subject of intense scrutiny as evidence accumulates regarding these technologies' effects on political engagement and information ecosystems. Early optimists celebrated social media as democratizing communication, enabling ordinary citizens to participate in public debate, organize collective action, and hold powerful institutions accountable without relying on traditional gatekeepers. The Arab Spring uprisings and various social movements appeared to validate this vision, demonstrating how platforms could facilitate rapid mobilization and amplify marginalized voices that mainstream media overlooked.

However, subsequent developments have revealed troubling dynamics that undermine social media's democratic potential. Platform algorithms designed to maximize user engagement systematically privilege emotionally charged, divisive content over nuanced discussion, as outrage and tribal affiliation generate more clicks, shares, and sustained attention than careful analysis. This creates perverse incentives where measured voices addressing complexity receive minimal visibility while inflammatory rhetoric spreads virally, degrading the quality of public discourse. The algorithmic amplification of extreme content pulls users toward ideological poles, fragmenting shared reality into incompatible partisan narratives.

Moreover, social media's architecture proves particularly vulnerable to strategic manipulation by sophisticated actors seeking to influence public opinion. Foreign intelligence services, domestic political operatives, and commercial entities deploy networks of inauthentic accounts to create illusions of grassroots support, inject disinformation into circulation, and exploit algorithmic systems designed to surface trending content. These coordinated manipulation campaigns often achieve outsized impact because platform algorithms cannot reliably distinguish genuine engagement from manufactured activity, allowing bad actors to game systems built around popularity metrics. The resulting information pollution makes it increasingly difficult for citizens to distinguish authentic expression from strategic deception.

The concentration of communicative power in a handful of private companies raises additional democratic concerns. Platforms' content moderation decisions—determining which speech is permissible and which voices receive amplification—exercise quasi-governmental power over public discourse without democratic accountability or consistent principles. While these companies face legitimate pressures to address harmful content, the absence of transparent procedures and appeal mechanisms means moderation operates as arbitrary private censorship. Furthermore, platforms' business models fundamentally depend on surveillance capitalism—extracting behavioral data to enable precise targeting—creating structural incentives that conflict with democratic values of privacy and autonomous citizenship.`,
    questionStem: "The author's attitude toward social media's impact on democratic discourse can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive based on platforms' democratizing potential" },
      { letter: "B", text: "entirely dismissive of any positive contributions social media might make" },
      { letter: "C", text: "deeply concerned about algorithmic dynamics, manipulation vulnerabilities, and concentrated corporate power" },
      { letter: "D", text: "completely neutral, presenting only factual information without evaluation" },
      { letter: "E", text: "optimistic that minor technical fixes will resolve all concerns" }
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges early optimism (first paragraph) but devotes three paragraphs to serious concerns: algorithmic privileging of divisive content (second), manipulation vulnerabilities (third), and concentrated private power (fourth). Language like 'troubling dynamics,' 'perverse incentives,' 'information pollution,' and 'democratic concerns' indicates deep concern. Option C accurately captures this worried, critical stance. The author doesn't show enthusiasm (A), completely dismiss positive aspects (B), remain neutral (D), or suggest simple solutions (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-1"
  },

  // Passage 2: News Media and Trust
  {
    id: "rc-25-6",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The precipitous decline in public trust toward news media has emerged as one of the most significant challenges facing democratic societies, with survey data documenting steady erosion in Americans' confidence in journalism over recent decades. Multiple factors contribute to this trust deficit. The collapse of local news—driven by advertising revenue migration to digital platforms—has eliminated thousands of newspapers and left many communities without dedicated coverage, creating information deserts where residents lack access to reliable local reporting. This infrastructure crisis occurs precisely as misinformation proliferates online, leaving citizens without trusted sources to verify claims or contextualize events.

Media critics attribute declining trust partly to journalism's own practices and institutional shortcomings. The professional norm of "objectivity," while intended to ensure fairness, often produces false equivalence between well-supported positions and fringe views, presenting partisan claims as equally credible to expert consensus. This "both-sides" approach, critics argue, misleads audiences by implying uncertainty where robust evidence exists, ultimately serving political actors who benefit from manufactured doubt. Additionally, mainstream media's reliance on official sources and elite perspectives can reproduce rather than challenge existing power structures, fostering perception among marginalized communities that journalism serves establishment interests rather than democratic accountability.

However, attributing trust decline solely to media failures overlooks the orchestrated delegitimization campaigns that political actors have pursued. Labeling unfavorable coverage as "fake news" while promoting partisan outlets as reliable alternatives represents a strategic effort to undermine journalism's authority and inoculate supporters against inconvenient information. These attacks exploit genuine media mistakes and structural changes in the news ecosystem to advance broader goals of epistemic closure—creating environments where political tribes accept only information from aligned sources while dismissing contradictory evidence as biased propaganda. This dynamic transforms trust from an evaluation of credibility into a marker of partisan identity.

The economic transformation of news also shapes trust dynamics in complex ways. Subscription-based business models, while providing sustainable funding as advertising collapses, risk exacerbating information inequality as quality journalism becomes accessible primarily to affluent consumers who can afford multiple subscriptions. This creates a two-tiered system where educated elites access comprehensive reporting while working-class communities rely on free sources of variable quality. When journalism serves primarily privileged audiences, it reinforces perceptions that media institutions represent coastal elites disconnected from ordinary Americans' concerns, further eroding trust among populations already skeptical of establishment institutions.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Declining trust in news media results exclusively from journalism's professional failures and institutional shortcomings." },
      { letter: "B", text: "The collapse of local news represents the only significant factor contributing to reduced confidence in journalism." },
      { letter: "C", text: "Declining public trust in news media stems from multiple interacting factors including local news collapse, journalistic practices, strategic delegitimization campaigns, and economic transformation." },
      { letter: "D", text: "Political actors bear sole responsibility for the erosion of trust in news institutions." },
      { letter: "E", text: "Subscription-based business models have completely solved journalism's economic challenges without creating new problems." }
    ],
    correctAnswer: "C",
    explanation: "The passage systematically examines multiple contributors to trust decline: local news collapse and infrastructure crisis (first paragraph), journalistic practices like false equivalence (second paragraph), strategic delegitimization (third paragraph), and economic transformation creating information inequality (fourth paragraph). Option C captures this multifactorial analysis. Options A, B, D, and E each focus on single factors while the passage emphasizes multiple interacting causes.",
    difficulty: "medium",
    passageId: "rc-25-passage-2"
  },
  {
    id: "rc-25-7",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The precipitous decline in public trust toward news media has emerged as one of the most significant challenges facing democratic societies, with survey data documenting steady erosion in Americans' confidence in journalism over recent decades. Multiple factors contribute to this trust deficit. The collapse of local news—driven by advertising revenue migration to digital platforms—has eliminated thousands of newspapers and left many communities without dedicated coverage, creating information deserts where residents lack access to reliable local reporting. This infrastructure crisis occurs precisely as misinformation proliferates online, leaving citizens without trusted sources to verify claims or contextualize events.

Media critics attribute declining trust partly to journalism's own practices and institutional shortcomings. The professional norm of "objectivity," while intended to ensure fairness, often produces false equivalence between well-supported positions and fringe views, presenting partisan claims as equally credible to expert consensus. This "both-sides" approach, critics argue, misleads audiences by implying uncertainty where robust evidence exists, ultimately serving political actors who benefit from manufactured doubt. Additionally, mainstream media's reliance on official sources and elite perspectives can reproduce rather than challenge existing power structures, fostering perception among marginalized communities that journalism serves establishment interests rather than democratic accountability.

However, attributing trust decline solely to media failures overlooks the orchestrated delegitimization campaigns that political actors have pursued. Labeling unfavorable coverage as "fake news" while promoting partisan outlets as reliable alternatives represents a strategic effort to undermine journalism's authority and inoculate supporters against inconvenient information. These attacks exploit genuine media mistakes and structural changes in the news ecosystem to advance broader goals of epistemic closure—creating environments where political tribes accept only information from aligned sources while dismissing contradictory evidence as biased propaganda. This dynamic transforms trust from an evaluation of credibility into a marker of partisan identity.

The economic transformation of news also shapes trust dynamics in complex ways. Subscription-based business models, while providing sustainable funding as advertising collapses, risk exacerbating information inequality as quality journalism becomes accessible primarily to affluent consumers who can afford multiple subscriptions. This creates a two-tiered system where educated elites access comprehensive reporting while working-class communities rely on free sources of variable quality. When journalism serves primarily privileged audiences, it reinforces perceptions that media institutions represent coastal elites disconnected from ordinary Americans' concerns, further eroding trust among populations already skeptical of establishment institutions.`,
    questionStem: "According to the passage, media critics argue that journalism's 'both-sides' approach to objectivity",
    answerChoices: [
      { letter: "A", text: "successfully ensures fairness by presenting all perspectives equally" },
      { letter: "B", text: "misleads audiences by implying uncertainty where robust evidence exists" },
      { letter: "C", text: "effectively challenges existing power structures and elite perspectives" },
      { letter: "D", text: "has increased public trust by demonstrating journalistic neutrality" },
      { letter: "E", text: "eliminates the influence of partisan claims on news coverage" }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph explicitly states that the 'both-sides' approach 'misleads audiences by implying uncertainty where robust evidence exists, ultimately serving political actors who benefit from manufactured doubt.' Option B directly reflects this criticism. The passage presents this approach as problematic rather than successful (A), notes it reproduces rather than challenges power structures (C), associates it with trust decline rather than increase (D), and describes it as giving credence to partisan claims rather than eliminating their influence (E).",
    difficulty: "easy",
    passageId: "rc-25-passage-2"
  },
  {
    id: "rc-25-8",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The precipitous decline in public trust toward news media has emerged as one of the most significant challenges facing democratic societies, with survey data documenting steady erosion in Americans' confidence in journalism over recent decades. Multiple factors contribute to this trust deficit. The collapse of local news—driven by advertising revenue migration to digital platforms—has eliminated thousands of newspapers and left many communities without dedicated coverage, creating information deserts where residents lack access to reliable local reporting. This infrastructure crisis occurs precisely as misinformation proliferates online, leaving citizens without trusted sources to verify claims or contextualize events.

Media critics attribute declining trust partly to journalism's own practices and institutional shortcomings. The professional norm of "objectivity," while intended to ensure fairness, often produces false equivalence between well-supported positions and fringe views, presenting partisan claims as equally credible to expert consensus. This "both-sides" approach, critics argue, misleads audiences by implying uncertainty where robust evidence exists, ultimately serving political actors who benefit from manufactured doubt. Additionally, mainstream media's reliance on official sources and elite perspectives can reproduce rather than challenge existing power structures, fostering perception among marginalized communities that journalism serves establishment interests rather than democratic accountability.

However, attributing trust decline solely to media failures overlooks the orchestrated delegitimization campaigns that political actors have pursued. Labeling unfavorable coverage as "fake news" while promoting partisan outlets as reliable alternatives represents a strategic effort to undermine journalism's authority and inoculate supporters against inconvenient information. These attacks exploit genuine media mistakes and structural changes in the news ecosystem to advance broader goals of epistemic closure—creating environments where political tribes accept only information from aligned sources while dismissing contradictory evidence as biased propaganda. This dynamic transforms trust from an evaluation of credibility into a marker of partisan identity.

The economic transformation of news also shapes trust dynamics in complex ways. Subscription-based business models, while providing sustainable funding as advertising collapses, risk exacerbating information inequality as quality journalism becomes accessible primarily to affluent consumers who can afford multiple subscriptions. This creates a two-tiered system where educated elites access comprehensive reporting while working-class communities rely on free sources of variable quality. When journalism serves primarily privileged audiences, it reinforces perceptions that media institutions represent coastal elites disconnected from ordinary Americans' concerns, further eroding trust among populations already skeptical of establishment institutions.`,
    questionStem: "The passage most strongly supports which one of the following inferences about epistemic closure?",
    answerChoices: [
      { letter: "A", text: "It refers to environments where political groups accept only information from aligned sources while rejecting contradictory evidence." },
      { letter: "B", text: "It results exclusively from journalism's failure to maintain objectivity in reporting." },
      { letter: "C", text: "It has no connection to strategic delegitimization campaigns by political actors." },
      { letter: "D", text: "It strengthens democratic discourse by ensuring partisan consistency." },
      { letter: "E", text: "It can be easily reversed through improved journalistic practices alone." }
    ],
    correctAnswer: "A",
    explanation: "The third paragraph defines epistemic closure as 'creating environments where political tribes accept only information from aligned sources while dismissing contradictory evidence as biased propaganda.' Option A accurately reflects this definition. The passage attributes epistemic closure to delegitimization campaigns rather than exclusively to journalism (B), explicitly connects it to these campaigns (C), presents it as problematic rather than strengthening democracy (D), and suggests it involves factors beyond journalism alone (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-2"
  },
  {
    id: "rc-25-9",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The precipitous decline in public trust toward news media has emerged as one of the most significant challenges facing democratic societies, with survey data documenting steady erosion in Americans' confidence in journalism over recent decades. Multiple factors contribute to this trust deficit. The collapse of local news—driven by advertising revenue migration to digital platforms—has eliminated thousands of newspapers and left many communities without dedicated coverage, creating information deserts where residents lack access to reliable local reporting. This infrastructure crisis occurs precisely as misinformation proliferates online, leaving citizens without trusted sources to verify claims or contextualize events.

Media critics attribute declining trust partly to journalism's own practices and institutional shortcomings. The professional norm of "objectivity," while intended to ensure fairness, often produces false equivalence between well-supported positions and fringe views, presenting partisan claims as equally credible to expert consensus. This "both-sides" approach, critics argue, misleads audiences by implying uncertainty where robust evidence exists, ultimately serving political actors who benefit from manufactured doubt. Additionally, mainstream media's reliance on official sources and elite perspectives can reproduce rather than challenge existing power structures, fostering perception among marginalized communities that journalism serves establishment interests rather than democratic accountability.

However, attributing trust decline solely to media failures overlooks the orchestrated delegitimization campaigns that political actors have pursued. Labeling unfavorable coverage as "fake news" while promoting partisan outlets as reliable alternatives represents a strategic effort to undermine journalism's authority and inoculate supporters against inconvenient information. These attacks exploit genuine media mistakes and structural changes in the news ecosystem to advance broader goals of epistemic closure—creating environments where political tribes accept only information from aligned sources while dismissing contradictory evidence as biased propaganda. This dynamic transforms trust from an evaluation of credibility into a marker of partisan identity.

The economic transformation of news also shapes trust dynamics in complex ways. Subscription-based business models, while providing sustainable funding as advertising collapses, risk exacerbating information inequality as quality journalism becomes accessible primarily to affluent consumers who can afford multiple subscriptions. This creates a two-tiered system where educated elites access comprehensive reporting while working-class communities rely on free sources of variable quality. When journalism serves primarily privileged audiences, it reinforces perceptions that media institutions represent coastal elites disconnected from ordinary Americans' concerns, further eroding trust among populations already skeptical of establishment institutions.`,
    questionStem: "The author's discussion of subscription-based business models in the fourth paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "demonstrate that economic sustainability alone solves all challenges facing journalism" },
      { letter: "B", text: "illustrate how economic changes can create information inequality that further erodes trust among working-class communities" },
      { letter: "C", text: "argue that free news sources always provide higher quality than subscription services" },
      { letter: "D", text: "prove that affluent consumers bear responsibility for trust decline" },
      { letter: "E", text: "suggest that local news collapse has been completely reversed by new business models" }
    ],
    correctAnswer: "B",
    explanation: "The passage explains that subscription models 'risk exacerbating information inequality as quality journalism becomes accessible primarily to affluent consumers' and that when 'journalism serves primarily privileged audiences, it reinforces perceptions that media institutions represent coastal elites disconnected from ordinary Americans' concerns, further eroding trust.' Option B correctly identifies this function as illustrating how economic changes create inequality that erodes trust. The passage doesn't claim subscriptions solve all problems (A), that free sources provide higher quality (C), blame consumers (D), or suggest local news has recovered (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-2"
  },
  {
    id: "rc-25-10",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The precipitous decline in public trust toward news media has emerged as one of the most significant challenges facing democratic societies, with survey data documenting steady erosion in Americans' confidence in journalism over recent decades. Multiple factors contribute to this trust deficit. The collapse of local news—driven by advertising revenue migration to digital platforms—has eliminated thousands of newspapers and left many communities without dedicated coverage, creating information deserts where residents lack access to reliable local reporting. This infrastructure crisis occurs precisely as misinformation proliferates online, leaving citizens without trusted sources to verify claims or contextualize events.

Media critics attribute declining trust partly to journalism's own practices and institutional shortcomings. The professional norm of "objectivity," while intended to ensure fairness, often produces false equivalence between well-supported positions and fringe views, presenting partisan claims as equally credible to expert consensus. This "both-sides" approach, critics argue, misleads audiences by implying uncertainty where robust evidence exists, ultimately serving political actors who benefit from manufactured doubt. Additionally, mainstream media's reliance on official sources and elite perspectives can reproduce rather than challenge existing power structures, fostering perception among marginalized communities that journalism serves establishment interests rather than democratic accountability.

However, attributing trust decline solely to media failures overlooks the orchestrated delegitimization campaigns that political actors have pursued. Labeling unfavorable coverage as "fake news" while promoting partisan outlets as reliable alternatives represents a strategic effort to undermine journalism's authority and inoculate supporters against inconvenient information. These attacks exploit genuine media mistakes and structural changes in the news ecosystem to advance broader goals of epistemic closure—creating environments where political tribes accept only information from aligned sources while dismissing contradictory evidence as biased propaganda. This dynamic transforms trust from an evaluation of credibility into a marker of partisan identity.

The economic transformation of news also shapes trust dynamics in complex ways. Subscription-based business models, while providing sustainable funding as advertising collapses, risk exacerbating information inequality as quality journalism becomes accessible primarily to affluent consumers who can afford multiple subscriptions. This creates a two-tiered system where educated elites access comprehensive reporting while working-class communities rely on free sources of variable quality. When journalism serves primarily privileged audiences, it reinforces perceptions that media institutions represent coastal elites disconnected from ordinary Americans' concerns, further eroding trust among populations already skeptical of establishment institutions.`,
    questionStem: "The author's attitude toward the decline in public trust in news media can best be described as",
    answerChoices: [
      { letter: "A", text: "celebratory, viewing trust decline as beneficial for democracy" },
      { letter: "B", text: "indifferent, treating the phenomenon as unimportant" },
      { letter: "C", text: "analytically concerned, examining multiple contributing factors to a significant democratic challenge" },
      { letter: "D", text: "exclusively critical of journalism while ignoring external factors" },
      { letter: "E", text: "dismissive of all explanations except economic transformation" }
    ],
    correctAnswer: "C",
    explanation: "The passage begins by characterizing trust decline as 'one of the most significant challenges facing democratic societies' and then systematically examines multiple contributing factors: infrastructure collapse, journalistic practices, delegitimization campaigns, and economic changes. This balanced, comprehensive analysis reflecting concern about a democratic challenge characterizes option C. The author doesn't celebrate the decline (A), treat it as unimportant (B), focus exclusively on journalism (D), or dismiss non-economic factors (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-2"
  },

  // Passage 3: Podcasting and Audio Media
  {
    id: "rc-25-11",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The podcasting boom represents a significant evolution in media consumption, with listenership growing from a niche audience to mainstream adoption encompassing hundreds of millions of regular listeners globally. Unlike traditional broadcast radio, podcasting's on-demand nature allows consumers to curate personalized listening experiences, accessing content aligned with specific interests rather than accepting programming schedules determined by station managers. This shift empowers audiences while enabling creators to serve specialized communities that would not sustain traditional broadcast economics, fostering extraordinary diversity in voices, perspectives, and subject matter largely absent from conventional media.

The democratization narrative surrounding podcasting, however, obscures emerging concentration dynamics. While barriers to entry remain relatively low—anyone with recording equipment can publish content—discoverability and monetization increasingly depend on platform algorithms and major networks' promotional power. Spotify's acquisition of exclusive podcast rights and production companies signals vertical integration that could replicate the gatekeeping functions that podcasting supposedly transcended. As dominant platforms curate featured content and algorithmic recommendations drive listenership, independent creators face disadvantages similar to those in other digital media markets where network effects concentrate audiences around promoted content.

Moreover, the advertising-based business model that sustains most professional podcasting reproduces problematic dynamics from other media sectors. The pursuit of large audiences and advertiser-friendly content can push creators toward sensationalism, controversy, and topics with broad appeal rather than depth or specialized knowledge. This commercial pressure particularly affects independent creators lacking alternative revenue streams, potentially homogenizing content as diverse voices adopt similar formats and topics to compete for advertising dollars. The medium that promised to democratize audio may simply transfer commercial imperatives from traditional radio to on-demand platforms.

The parasocial relationships that podcasting cultivates also raise concerns about media literacy and critical engagement. The intimate, conversational nature of podcast listening creates feelings of personal connection between hosts and audiences, fostering trust that may not reflect actual expertise or credibility. Listeners who feel they "know" hosts personally through regular consumption may uncritically accept claims that would face skepticism if presented through traditional journalism. This dynamic becomes particularly problematic when popular podcasters discuss topics beyond their expertise or platform controversial figures without adequate challenge, potentially spreading misinformation through trusted channels that audiences perceive as authentic conversation rather than constructed media products requiring critical evaluation.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Podcasting successfully democratizes media by eliminating all gatekeeping and enabling diverse voices to reach audiences." },
      { letter: "B", text: "While podcasting promises democratization and diversity through on-demand audio, emerging concentration, commercial pressures, and parasocial dynamics raise significant concerns." },
      { letter: "C", text: "Traditional broadcast radio provides superior content quality and credibility compared to podcasting." },
      { letter: "D", text: "Spotify's platform dominance has completely eliminated independent podcast creators from the market." },
      { letter: "E", text: "Parasocial relationships represent the only significant problem with podcasting as a medium." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents podcasting's democratizing potential (first paragraph) then examines problems: platform concentration (second paragraph), commercial pressures (third paragraph), and parasocial relationship concerns (fourth paragraph). Option B captures this structure of promise versus significant concerns. Options A and C are one-sided, D overstates concentration effects, and E focuses narrowly on one issue rather than the comprehensive critique.",
    difficulty: "medium",
    passageId: "rc-25-passage-3"
  },
  {
    id: "rc-25-12",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The podcasting boom represents a significant evolution in media consumption, with listenership growing from a niche audience to mainstream adoption encompassing hundreds of millions of regular listeners globally. Unlike traditional broadcast radio, podcasting's on-demand nature allows consumers to curate personalized listening experiences, accessing content aligned with specific interests rather than accepting programming schedules determined by station managers. This shift empowers audiences while enabling creators to serve specialized communities that would not sustain traditional broadcast economics, fostering extraordinary diversity in voices, perspectives, and subject matter largely absent from conventional media.

The democratization narrative surrounding podcasting, however, obscures emerging concentration dynamics. While barriers to entry remain relatively low—anyone with recording equipment can publish content—discoverability and monetization increasingly depend on platform algorithms and major networks' promotional power. Spotify's acquisition of exclusive podcast rights and production companies signals vertical integration that could replicate the gatekeeping functions that podcasting supposedly transcended. As dominant platforms curate featured content and algorithmic recommendations drive listenership, independent creators face disadvantages similar to those in other digital media markets where network effects concentrate audiences around promoted content.

Moreover, the advertising-based business model that sustains most professional podcasting reproduces problematic dynamics from other media sectors. The pursuit of large audiences and advertiser-friendly content can push creators toward sensationalism, controversy, and topics with broad appeal rather than depth or specialized knowledge. This commercial pressure particularly affects independent creators lacking alternative revenue streams, potentially homogenizing content as diverse voices adopt similar formats and topics to compete for advertising dollars. The medium that promised to democratize audio may simply transfer commercial imperatives from traditional radio to on-demand platforms.

The parasocial relationships that podcasting cultivates also raise concerns about media literacy and critical engagement. The intimate, conversational nature of podcast listening creates feelings of personal connection between hosts and audiences, fostering trust that may not reflect actual expertise or credibility. Listeners who feel they "know" hosts personally through regular consumption may uncritically accept claims that would face skepticism if presented through traditional journalism. This dynamic becomes particularly problematic when popular podcasters discuss topics beyond their expertise or platform controversial figures without adequate challenge, potentially spreading misinformation through trusted channels that audiences perceive as authentic conversation rather than constructed media products requiring critical evaluation.`,
    questionStem: "According to the passage, podcasting differs from traditional broadcast radio in that podcasting",
    answerChoices: [
      { letter: "A", text: "requires expensive professional equipment unavailable to most creators" },
      { letter: "B", text: "allows consumers to access on-demand content aligned with specific interests rather than fixed programming schedules" },
      { letter: "C", text: "generates less revenue from advertising than traditional radio broadcasting" },
      { letter: "D", text: "employs more rigorous journalistic standards than conventional broadcast media" },
      { letter: "E", text: "eliminates all parasocial relationships between content creators and audiences" }
    ],
    correctAnswer: "B",
    explanation: "The first paragraph explicitly states: 'Unlike traditional broadcast radio, podcasting's on-demand nature allows consumers to curate personalized listening experiences, accessing content aligned with specific interests rather than accepting programming schedules determined by station managers.' Option B directly reflects this comparison. The passage contradicts A by noting low barriers to entry, doesn't compare revenue generation (C), doesn't claim superior journalistic standards (D), and actually highlights parasocial relationships as a podcasting concern rather than elimination (E).",
    difficulty: "easy",
    passageId: "rc-25-passage-3"
  },
  {
    id: "rc-25-13",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The podcasting boom represents a significant evolution in media consumption, with listenership growing from a niche audience to mainstream adoption encompassing hundreds of millions of regular listeners globally. Unlike traditional broadcast radio, podcasting's on-demand nature allows consumers to curate personalized listening experiences, accessing content aligned with specific interests rather than accepting programming schedules determined by station managers. This shift empowers audiences while enabling creators to serve specialized communities that would not sustain traditional broadcast economics, fostering extraordinary diversity in voices, perspectives, and subject matter largely absent from conventional media.

The democratization narrative surrounding podcasting, however, obscures emerging concentration dynamics. While barriers to entry remain relatively low—anyone with recording equipment can publish content—discoverability and monetization increasingly depend on platform algorithms and major networks' promotional power. Spotify's acquisition of exclusive podcast rights and production companies signals vertical integration that could replicate the gatekeeping functions that podcasting supposedly transcended. As dominant platforms curate featured content and algorithmic recommendations drive listenership, independent creators face disadvantages similar to those in other digital media markets where network effects concentrate audiences around promoted content.

Moreover, the advertising-based business model that sustains most professional podcasting reproduces problematic dynamics from other media sectors. The pursuit of large audiences and advertiser-friendly content can push creators toward sensationalism, controversy, and topics with broad appeal rather than depth or specialized knowledge. This commercial pressure particularly affects independent creators lacking alternative revenue streams, potentially homogenizing content as diverse voices adopt similar formats and topics to compete for advertising dollars. The medium that promised to democratize audio may simply transfer commercial imperatives from traditional radio to on-demand platforms.

The parasocial relationships that podcasting cultivates also raise concerns about media literacy and critical engagement. The intimate, conversational nature of podcast listening creates feelings of personal connection between hosts and audiences, fostering trust that may not reflect actual expertise or credibility. Listeners who feel they "know" hosts personally through regular consumption may uncritically accept claims that would face skepticism if presented through traditional journalism. This dynamic becomes particularly problematic when popular podcasters discuss topics beyond their expertise or platform controversial figures without adequate challenge, potentially spreading misinformation through trusted channels that audiences perceive as authentic conversation rather than constructed media products requiring critical evaluation.`,
    questionStem: "Based on the passage, which one of the following can most reasonably be inferred about independent podcast creators?",
    answerChoices: [
      { letter: "A", text: "They face no challenges in reaching audiences because podcasting has eliminated all gatekeeping." },
      { letter: "B", text: "They may experience disadvantages in discoverability and commercial pressure to homogenize content." },
      { letter: "C", text: "They consistently produce higher quality content than network-affiliated podcasters." },
      { letter: "D", text: "They are completely prohibited from accessing major platforms like Spotify." },
      { letter: "E", text: "They require no revenue streams to sustain professional podcast production." }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph notes that independent creators 'face disadvantages similar to those in other digital media markets' regarding discoverability, while the third states that 'commercial pressure particularly affects independent creators lacking alternative revenue streams, potentially homogenizing content.' Option B accurately reflects these inferences. The passage contradicts A by discussing emerging gatekeeping, doesn't compare content quality (C), doesn't claim complete prohibition (D), and acknowledges revenue needs rather than denying them (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-3"
  },
  {
    id: "rc-25-14",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The podcasting boom represents a significant evolution in media consumption, with listenership growing from a niche audience to mainstream adoption encompassing hundreds of millions of regular listeners globally. Unlike traditional broadcast radio, podcasting's on-demand nature allows consumers to curate personalized listening experiences, accessing content aligned with specific interests rather than accepting programming schedules determined by station managers. This shift empowers audiences while enabling creators to serve specialized communities that would not sustain traditional broadcast economics, fostering extraordinary diversity in voices, perspectives, and subject matter largely absent from conventional media.

The democratization narrative surrounding podcasting, however, obscures emerging concentration dynamics. While barriers to entry remain relatively low—anyone with recording equipment can publish content—discoverability and monetization increasingly depend on platform algorithms and major networks' promotional power. Spotify's acquisition of exclusive podcast rights and production companies signals vertical integration that could replicate the gatekeeping functions that podcasting supposedly transcended. As dominant platforms curate featured content and algorithmic recommendations drive listenership, independent creators face disadvantages similar to those in other digital media markets where network effects concentrate audiences around promoted content.

Moreover, the advertising-based business model that sustains most professional podcasting reproduces problematic dynamics from other media sectors. The pursuit of large audiences and advertiser-friendly content can push creators toward sensationalism, controversy, and topics with broad appeal rather than depth or specialized knowledge. This commercial pressure particularly affects independent creators lacking alternative revenue streams, potentially homogenizing content as diverse voices adopt similar formats and topics to compete for advertising dollars. The medium that promised to democratize audio may simply transfer commercial imperatives from traditional radio to on-demand platforms.

The parasocial relationships that podcasting cultivates also raise concerns about media literacy and critical engagement. The intimate, conversational nature of podcast listening creates feelings of personal connection between hosts and audiences, fostering trust that may not reflect actual expertise or credibility. Listeners who feel they "know" hosts personally through regular consumption may uncritically accept claims that would face skepticism if presented through traditional journalism. This dynamic becomes particularly problematic when popular podcasters discuss topics beyond their expertise or platform controversial figures without adequate challenge, potentially spreading misinformation through trusted channels that audiences perceive as authentic conversation rather than constructed media products requiring critical evaluation.`,
    questionStem: "The author's reference to Spotify's acquisitions in the second paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "demonstrate that all platform consolidation benefits independent creators" },
      { letter: "B", text: "illustrate emerging concentration that could replicate traditional media gatekeeping" },
      { letter: "C", text: "prove that podcasting has completely failed as a democratizing medium" },
      { letter: "D", text: "argue that Spotify provides the only viable platform for podcast distribution" },
      { letter: "E", text: "suggest that vertical integration always improves content quality" }
    ],
    correctAnswer: "B",
    explanation: "The passage states that 'Spotify's acquisition of exclusive podcast rights and production companies signals vertical integration that could replicate the gatekeeping functions that podcasting supposedly transcended.' Option B correctly identifies this function as illustrating concentration dynamics. The passage doesn't claim consolidation benefits independents (A), declare complete failure (C), suggest Spotify is the only platform (D), or argue integration improves quality (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-3"
  },
  {
    id: "rc-25-15",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The podcasting boom represents a significant evolution in media consumption, with listenership growing from a niche audience to mainstream adoption encompassing hundreds of millions of regular listeners globally. Unlike traditional broadcast radio, podcasting's on-demand nature allows consumers to curate personalized listening experiences, accessing content aligned with specific interests rather than accepting programming schedules determined by station managers. This shift empowers audiences while enabling creators to serve specialized communities that would not sustain traditional broadcast economics, fostering extraordinary diversity in voices, perspectives, and subject matter largely absent from conventional media.

The democratization narrative surrounding podcasting, however, obscures emerging concentration dynamics. While barriers to entry remain relatively low—anyone with recording equipment can publish content—discoverability and monetization increasingly depend on platform algorithms and major networks' promotional power. Spotify's acquisition of exclusive podcast rights and production companies signals vertical integration that could replicate the gatekeeping functions that podcasting supposedly transcended. As dominant platforms curate featured content and algorithmic recommendations drive listenership, independent creators face disadvantages similar to those in other digital media markets where network effects concentrate audiences around promoted content.

Moreover, the advertising-based business model that sustains most professional podcasting reproduces problematic dynamics from other media sectors. The pursuit of large audiences and advertiser-friendly content can push creators toward sensationalism, controversy, and topics with broad appeal rather than depth or specialized knowledge. This commercial pressure particularly affects independent creators lacking alternative revenue streams, potentially homogenizing content as diverse voices adopt similar formats and topics to compete for advertising dollars. The medium that promised to democratize audio may simply transfer commercial imperatives from traditional radio to on-demand platforms.

The parasocial relationships that podcasting cultivates also raise concerns about media literacy and critical engagement. The intimate, conversational nature of podcast listening creates feelings of personal connection between hosts and audiences, fostering trust that may not reflect actual expertise or credibility. Listeners who feel they "know" hosts personally through regular consumption may uncritically accept claims that would face skepticism if presented through traditional journalism. This dynamic becomes particularly problematic when popular podcasters discuss topics beyond their expertise or platform controversial figures without adequate challenge, potentially spreading misinformation through trusted channels that audiences perceive as authentic conversation rather than constructed media products requiring critical evaluation.`,
    questionStem: "The author's attitude toward podcasting's democratization potential can best be described as",
    answerChoices: [
      { letter: "A", text: "unqualified celebration of podcasting as fully realizing democratization" },
      { letter: "B", text: "complete dismissal of any democratizing aspects of the medium" },
      { letter: "C", text: "skeptical acknowledgment that democratization promises are undermined by concentration, commercial pressures, and parasocial dynamics" },
      { letter: "D", text: "enthusiastic endorsement of all current podcasting practices and business models" },
      { letter: "E", text: "indifferent neutrality regarding podcasting's impact on media landscapes" }
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges podcasting's democratizing features (first paragraph) but then extensively examines how 'the democratization narrative...obscures' emerging problems: concentration (second paragraph), commercial pressures toward homogenization (third paragraph), and uncritical consumption (fourth paragraph). Language like 'however,' 'raise concerns,' and 'potentially problematic' indicates skepticism about realized democratization. Option C accurately captures this critical stance. The author neither celebrates uncritically (A, D), completely dismisses (B), nor remains indifferent (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-3"
  },

  // Passage 4: Streaming Services and Content
  {
    id: "rc-25-16",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `The transition from broadcast television to streaming platforms represents a fundamental reorganization of entertainment media, with implications extending beyond technological convenience to reshape cultural production and consumption patterns. Streaming services promise consumer sovereignty—allowing viewers to access vast libraries on demand rather than adhering to network schedules—while enabling niche content creation that appeals to specialized audiences rather than requiring the broad appeal necessary for broadcast success. This fragmentation theoretically allows diverse stories and perspectives to find audiences, democratizing cultural production by reducing dependence on gatekeepers who historically determined which narratives reached mass audiences.

However, the algorithmic curation systems that mediate streaming experiences raise questions about the autonomy that platforms ostensibly provide. Recommendation engines designed to maximize engagement guide viewers toward content similar to previous consumption, creating filter bubbles that may narrow rather than expand cultural horizons. While users can theoretically access diverse content, algorithmic nudges toward familiar genres and styles can produce homogenized viewing patterns where consumers remain within established preferences rather than encountering challenging or unfamiliar material. The abundance of choice paradoxically may reduce genuine exploration as algorithms optimize for comfortable familiarity rather than discovery.

The economic model underlying streaming platforms also generates troubling dynamics for creative workers and content diversity. The shift from residual payments based on viewership to flat licensing fees means creators no longer receive ongoing compensation when their work generates sustained audience interest. This change particularly harms mid-tier creators who previously earned substantial income from popular but not blockbuster content. Additionally, platforms' algorithmic optimization for "completion rates"—how many viewers finish content they start—incentivizes formulaic storytelling that maintains engagement rather than artistic risk-taking that might challenge audiences. When success metrics emphasize retention over cultural impact, creative workers face pressure to subordinate artistic vision to platform-determined engagement objectives.

Moreover, the proliferation of competing streaming services fragments audiences in ways that undermine the shared cultural experiences that broadcast television historically provided. While this fragmentation enables niche programming, it also eliminates common cultural touchstones that facilitated cross-cutting conversations among diverse populations. When viewing becomes individualized and consumption patterns algorithmically segmented by demographic characteristics and preference profiles, opportunities for encountering different perspectives or engaging with content outside one's demographic bubble diminish. This balkanization of cultural consumption may reinforce social divisions by eliminating spaces where varied audiences engage with common narratives.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Streaming platforms successfully deliver consumer sovereignty and democratize cultural production without any negative consequences." },
      { letter: "B", text: "While streaming promises consumer choice and diverse content creation, algorithmic curation, economic pressures, and audience fragmentation raise significant concerns about autonomy, creativity, and shared culture." },
      { letter: "C", text: "Broadcast television provided uniformly superior content and cultural experiences compared to streaming platforms." },
      { letter: "D", text: "Algorithmic recommendation systems represent the only significant problem with streaming services." },
      { letter: "E", text: "The transition to streaming has completely eliminated all barriers to diverse content creation and consumption." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents streaming's promises of sovereignty and diversity (first paragraph) then examines problems: algorithmic narrowing (second paragraph), economic pressures on creators (third paragraph), and cultural fragmentation (fourth paragraph). Option B captures this structure of promise versus multiple concerns. Options A and E ignore the criticisms, C makes an unsupported comparative claim, and D focuses narrowly on one issue rather than the comprehensive analysis.",
    difficulty: "medium",
    passageId: "rc-25-passage-4"
  },
  {
    id: "rc-25-17",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `The transition from broadcast television to streaming platforms represents a fundamental reorganization of entertainment media, with implications extending beyond technological convenience to reshape cultural production and consumption patterns. Streaming services promise consumer sovereignty—allowing viewers to access vast libraries on demand rather than adhering to network schedules—while enabling niche content creation that appeals to specialized audiences rather than requiring the broad appeal necessary for broadcast success. This fragmentation theoretically allows diverse stories and perspectives to find audiences, democratizing cultural production by reducing dependence on gatekeepers who historically determined which narratives reached mass audiences.

However, the algorithmic curation systems that mediate streaming experiences raise questions about the autonomy that platforms ostensibly provide. Recommendation engines designed to maximize engagement guide viewers toward content similar to previous consumption, creating filter bubbles that may narrow rather than expand cultural horizons. While users can theoretically access diverse content, algorithmic nudges toward familiar genres and styles can produce homogenized viewing patterns where consumers remain within established preferences rather than encountering challenging or unfamiliar material. The abundance of choice paradoxically may reduce genuine exploration as algorithms optimize for comfortable familiarity rather than discovery.

The economic model underlying streaming platforms also generates troubling dynamics for creative workers and content diversity. The shift from residual payments based on viewership to flat licensing fees means creators no longer receive ongoing compensation when their work generates sustained audience interest. This change particularly harms mid-tier creators who previously earned substantial income from popular but not blockbuster content. Additionally, platforms' algorithmic optimization for "completion rates"—how many viewers finish content they start—incentivizes formulaic storytelling that maintains engagement rather than artistic risk-taking that might challenge audiences. When success metrics emphasize retention over cultural impact, creative workers face pressure to subordinate artistic vision to platform-determined engagement objectives.

Moreover, the proliferation of competing streaming services fragments audiences in ways that undermine the shared cultural experiences that broadcast television historically provided. While this fragmentation enables niche programming, it also eliminates common cultural touchstones that facilitated cross-cutting conversations among diverse populations. When viewing becomes individualized and consumption patterns algorithmically segmented by demographic characteristics and preference profiles, opportunities for encountering different perspectives or engaging with content outside one's demographic bubble diminish. This balkanization of cultural consumption may reinforce social divisions by eliminating spaces where varied audiences engage with common narratives.`,
    questionStem: "According to the passage, the shift from residual payments to flat licensing fees",
    answerChoices: [
      { letter: "A", text: "benefits all creators equally by providing predictable upfront compensation" },
      { letter: "B", text: "particularly harms mid-tier creators who previously earned income from sustained audience interest" },
      { letter: "C", text: "increases total compensation for creative workers across all categories" },
      { letter: "D", text: "has no effect on creators' economic circumstances or content production decisions" },
      { letter: "E", text: "ensures that all content receives ongoing compensation based on viewership" }
    ],
    correctAnswer: "B",
    explanation: "The third paragraph explicitly states: 'The shift from residual payments based on viewership to flat licensing fees means creators no longer receive ongoing compensation when their work generates sustained audience interest. This change particularly harms mid-tier creators who previously earned substantial income from popular but not blockbuster content.' Option B directly reflects this explanation. The passage doesn't claim equal benefits (A), increased total compensation (C), no effect (D), or ongoing viewership-based compensation (E)—in fact, it states the opposite.",
    difficulty: "easy",
    passageId: "rc-25-passage-4"
  },
  {
    id: "rc-25-18",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `The transition from broadcast television to streaming platforms represents a fundamental reorganization of entertainment media, with implications extending beyond technological convenience to reshape cultural production and consumption patterns. Streaming services promise consumer sovereignty—allowing viewers to access vast libraries on demand rather than adhering to network schedules—while enabling niche content creation that appeals to specialized audiences rather than requiring the broad appeal necessary for broadcast success. This fragmentation theoretically allows diverse stories and perspectives to find audiences, democratizing cultural production by reducing dependence on gatekeepers who historically determined which narratives reached mass audiences.

However, the algorithmic curation systems that mediate streaming experiences raise questions about the autonomy that platforms ostensibly provide. Recommendation engines designed to maximize engagement guide viewers toward content similar to previous consumption, creating filter bubbles that may narrow rather than expand cultural horizons. While users can theoretically access diverse content, algorithmic nudges toward familiar genres and styles can produce homogenized viewing patterns where consumers remain within established preferences rather than encountering challenging or unfamiliar material. The abundance of choice paradoxically may reduce genuine exploration as algorithms optimize for comfortable familiarity rather than discovery.

The economic model underlying streaming platforms also generates troubling dynamics for creative workers and content diversity. The shift from residual payments based on viewership to flat licensing fees means creators no longer receive ongoing compensation when their work generates sustained audience interest. This change particularly harms mid-tier creators who previously earned substantial income from popular but not blockbuster content. Additionally, platforms' algorithmic optimization for "completion rates"—how many viewers finish content they start—incentivizes formulaic storytelling that maintains engagement rather than artistic risk-taking that might challenge audiences. When success metrics emphasize retention over cultural impact, creative workers face pressure to subordinate artistic vision to platform-determined engagement objectives.

Moreover, the proliferation of competing streaming services fragments audiences in ways that undermine the shared cultural experiences that broadcast television historically provided. While this fragmentation enables niche programming, it also eliminates common cultural touchstones that facilitated cross-cutting conversations among diverse populations. When viewing becomes individualized and consumption patterns algorithmically segmented by demographic characteristics and preference profiles, opportunities for encountering different perspectives or engaging with content outside one's demographic bubble diminish. This balkanization of cultural consumption may reinforce social divisions by eliminating spaces where varied audiences engage with common narratives.`,
    questionStem: "The passage most strongly supports which one of the following inferences about algorithmic recommendation systems?",
    answerChoices: [
      { letter: "A", text: "They consistently expand viewers' cultural horizons by introducing unfamiliar content." },
      { letter: "B", text: "They may create filter bubbles that narrow viewing patterns despite theoretical content diversity." },
      { letter: "C", text: "They have no influence on what content users ultimately choose to consume." },
      { letter: "D", text: "They optimize primarily for discovery of challenging material rather than comfortable familiarity." },
      { letter: "E", text: "They eliminate all need for traditional gatekeepers in cultural production." }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph explains that recommendation engines 'guide viewers toward content similar to previous consumption, creating filter bubbles that may narrow rather than expand cultural horizons' and that 'algorithmic nudges toward familiar genres and styles can produce homogenized viewing patterns.' Option B accurately reflects this inference. The passage contradicts A and D by emphasizing narrowing rather than expansion, C by detailing algorithmic influence, and doesn't support E's claim about eliminating gatekeepers.",
    difficulty: "medium",
    passageId: "rc-25-passage-4"
  },
  {
    id: "rc-25-19",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `The transition from broadcast television to streaming platforms represents a fundamental reorganization of entertainment media, with implications extending beyond technological convenience to reshape cultural production and consumption patterns. Streaming services promise consumer sovereignty—allowing viewers to access vast libraries on demand rather than adhering to network schedules—while enabling niche content creation that appeals to specialized audiences rather than requiring the broad appeal necessary for broadcast success. This fragmentation theoretically allows diverse stories and perspectives to find audiences, democratizing cultural production by reducing dependence on gatekeepers who historically determined which narratives reached mass audiences.

However, the algorithmic curation systems that mediate streaming experiences raise questions about the autonomy that platforms ostensibly provide. Recommendation engines designed to maximize engagement guide viewers toward content similar to previous consumption, creating filter bubbles that may narrow rather than expand cultural horizons. While users can theoretically access diverse content, algorithmic nudges toward familiar genres and styles can produce homogenized viewing patterns where consumers remain within established preferences rather than encountering challenging or unfamiliar material. The abundance of choice paradoxically may reduce genuine exploration as algorithms optimize for comfortable familiarity rather than discovery.

The economic model underlying streaming platforms also generates troubling dynamics for creative workers and content diversity. The shift from residual payments based on viewership to flat licensing fees means creators no longer receive ongoing compensation when their work generates sustained audience interest. This change particularly harms mid-tier creators who previously earned substantial income from popular but not blockbuster content. Additionally, platforms' algorithmic optimization for "completion rates"—how many viewers finish content they start—incentivizes formulaic storytelling that maintains engagement rather than artistic risk-taking that might challenge audiences. When success metrics emphasize retention over cultural impact, creative workers face pressure to subordinate artistic vision to platform-determined engagement objectives.

Moreover, the proliferation of competing streaming services fragments audiences in ways that undermine the shared cultural experiences that broadcast television historically provided. While this fragmentation enables niche programming, it also eliminates common cultural touchstones that facilitated cross-cutting conversations among diverse populations. When viewing becomes individualized and consumption patterns algorithmically segmented by demographic characteristics and preference profiles, opportunities for encountering different perspectives or engaging with content outside one's demographic bubble diminish. This balkanization of cultural consumption may reinforce social divisions by eliminating spaces where varied audiences engage with common narratives.`,
    questionStem: "The author's characterization of streaming's 'abundance of choice' as 'paradoxically' reducing exploration serves primarily to",
    answerChoices: [
      { letter: "A", text: "argue that limiting content selection would improve viewing experiences" },
      { letter: "B", text: "highlight the contradiction between theoretical access to diversity and algorithmic narrowing toward familiarity" },
      { letter: "C", text: "demonstrate that all choice inevitably produces negative outcomes" },
      { letter: "D", text: "suggest that broadcast television offered more genuine content diversity" },
      { letter: "E", text: "prove that viewers prefer familiar content to challenging material" }
    ],
    correctAnswer: "B",
    explanation: "The passage states: 'The abundance of choice paradoxically may reduce genuine exploration as algorithms optimize for comfortable familiarity rather than discovery.' This highlights the irony that despite vast content libraries (theoretical choice), algorithmic curation may narrow actual consumption. Option B correctly identifies this function as emphasizing contradiction. The passage doesn't advocate limiting selection (A), claim all choice is negative (C), make broad comparisons to broadcast (D), or make definitive claims about viewer preferences (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-4"
  },
  {
    id: "rc-25-20",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `The transition from broadcast television to streaming platforms represents a fundamental reorganization of entertainment media, with implications extending beyond technological convenience to reshape cultural production and consumption patterns. Streaming services promise consumer sovereignty—allowing viewers to access vast libraries on demand rather than adhering to network schedules—while enabling niche content creation that appeals to specialized audiences rather than requiring the broad appeal necessary for broadcast success. This fragmentation theoretically allows diverse stories and perspectives to find audiences, democratizing cultural production by reducing dependence on gatekeepers who historically determined which narratives reached mass audiences.

However, the algorithmic curation systems that mediate streaming experiences raise questions about the autonomy that platforms ostensibly provide. Recommendation engines designed to maximize engagement guide viewers toward content similar to previous consumption, creating filter bubbles that may narrow rather than expand cultural horizons. While users can theoretically access diverse content, algorithmic nudges toward familiar genres and styles can produce homogenized viewing patterns where consumers remain within established preferences rather than encountering challenging or unfamiliar material. The abundance of choice paradoxically may reduce genuine exploration as algorithms optimize for comfortable familiarity rather than discovery.

The economic model underlying streaming platforms also generates troubling dynamics for creative workers and content diversity. The shift from residual payments based on viewership to flat licensing fees means creators no longer receive ongoing compensation when their work generates sustained audience interest. This change particularly harms mid-tier creators who previously earned substantial income from popular but not blockbuster content. Additionally, platforms' algorithmic optimization for "completion rates"—how many viewers finish content they start—incentivizes formulaic storytelling that maintains engagement rather than artistic risk-taking that might challenge audiences. When success metrics emphasize retention over cultural impact, creative workers face pressure to subordinate artistic vision to platform-determined engagement objectives.

Moreover, the proliferation of competing streaming services fragments audiences in ways that undermine the shared cultural experiences that broadcast television historically provided. While this fragmentation enables niche programming, it also eliminates common cultural touchstones that facilitated cross-cutting conversations among diverse populations. When viewing becomes individualized and consumption patterns algorithmically segmented by demographic characteristics and preference profiles, opportunities for encountering different perspectives or engaging with content outside one's demographic bubble diminish. This balkanization of cultural consumption may reinforce social divisions by eliminating spaces where varied audiences engage with common narratives.`,
    questionStem: "The author's attitude toward streaming platforms' impact on cultural production and consumption can best be described as",
    answerChoices: [
      { letter: "A", text: "enthusiastically supportive, celebrating streaming as unambiguous cultural progress" },
      { letter: "B", text: "completely hostile, rejecting all aspects of streaming in favor of broadcast television" },
      { letter: "C", text: "critically analytical, recognizing promises while examining algorithmic, economic, and social concerns" },
      { letter: "D", text: "wholly indifferent to streaming's cultural implications" },
      { letter: "E", text: "exclusively focused on economic impacts while ignoring cultural and social dimensions" }
    ],
    correctAnswer: "C",
    explanation: "The passage acknowledges streaming's promises of sovereignty and diversity (first paragraph) but then systematically examines concerns: algorithmic narrowing (second), economic pressures on creators (third), and cultural fragmentation (fourth). Language like 'however,' 'raise questions,' 'troubling dynamics,' and 'may reinforce' indicates critical analysis rather than celebration or rejection. Option C accurately captures this balanced, analytically critical stance. The author neither celebrates uncritically (A), completely rejects (B), shows indifference (D), nor focuses exclusively on economics (E).",
    difficulty: "medium",
    passageId: "rc-25-passage-4"
  }
];
