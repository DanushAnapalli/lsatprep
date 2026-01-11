import { Question } from "../lsat-types";

export const rcQuestionsSet29: Question[] = [
  // Passage 1: Rewilding and Ecosystem Restoration
  {
    id: "rc-29-1",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Rewilding, the practice of restoring ecosystems by reintroducing species that have been locally extirpated, represents a paradigm shift in conservation biology from static preservation toward dynamic restoration. Traditional conservation focused primarily on protecting existing habitats and preventing further species loss through defensive measures—establishing reserves, restricting development, controlling invasive species. Rewilding advocates argue that such approaches, while necessary, prove insufficient for restoring ecosystem functionality because they fail to address trophic cascades: the far-reaching ecological effects that occur when keystone species are removed from or reintroduced to ecosystems.

The reintroduction of wolves to Yellowstone National Park in 1995 provides the canonical example of rewilding's potential. Prior to wolf reintroduction, elk populations had grown unchecked, devastating riparian vegetation through overgrazing. The elk's browsing prevented willow and aspen regeneration, destabilizing stream banks and diminishing habitat for beavers, songbirds, and fish. Wolf presence fundamentally altered elk behavior, creating a "landscape of fear" that reduced elk browsing pressure in vulnerable areas. The resulting vegetation recovery improved stream ecology, enabled beaver recolonization, and initiated a trophic cascade affecting dozens of species. Proponents argue that such cascading benefits demonstrate rewilding's capacity to restore ecosystem health more effectively than species-by-species conservation efforts.

Critics, however, question whether the Yellowstone experience generalizes to other contexts. The park's relatively intact ecosystem, large protected area, and abundant prey base created conditions favorable for wolf restoration that may not exist elsewhere. Attempts to reintroduce large predators in fragmented landscapes with livestock agriculture face considerably greater challenges, including human-wildlife conflict, genetic viability concerns in small populations, and limited dispersal corridors. Furthermore, ecosystems may have reorganized during predator absence such that simply reintroducing missing species cannot restore historical dynamics. Novel ecosystems shaped by centuries of human modification may lack the structural elements necessary for keystone species to fulfill their ecological roles.

The philosophical dimensions of rewilding also generate debate. Critics argue that rewilding reflects a problematic vision of "pristine" nature that erases Indigenous land management and imposes wilderness ideals onto culturally modified landscapes. Indigenous communities in many regions shaped ecosystems through fire management, selective harvesting, and other practices for millennia before European colonization; these landscapes were not pristine but culturally maintained. Rewilding projects that ignore or override Indigenous relationships with land may perpetuate colonial patterns of conservation that displaced Indigenous peoples from territories subsequently designated as wilderness. Proponents respond that thoughtful rewilding can incorporate Indigenous ecological knowledge and support Indigenous land stewardship rather than displacing traditional management.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "The Yellowstone wolf reintroduction conclusively demonstrates that rewilding should replace all other conservation approaches." },
      { letter: "B", text: "Rewilding represents a shift toward dynamic ecosystem restoration, with demonstrated successes like Yellowstone, but faces practical limitations, context-dependency, and philosophical concerns regarding Indigenous relationships with land." },
      { letter: "C", text: "Critics have successfully shown that rewilding cannot work outside of large protected areas like Yellowstone National Park." },
      { letter: "D", text: "Indigenous land management practices are incompatible with modern rewilding initiatives." },
      { letter: "E", text: "Trophic cascades always produce predictable and beneficial outcomes when keystone species are reintroduced." }
    ],
    correctAnswer: "B",
    explanation: "The passage introduces rewilding as a paradigm shift (paragraph 1), presents the Yellowstone success story (paragraph 2), discusses practical limitations and context-dependency (paragraph 3), and raises philosophical concerns about Indigenous relationships with land (paragraph 4). Option B captures this balanced presentation of potential, limitations, and concerns.",
    difficulty: "medium",
    passageId: "rc-29-passage-1"
  },
  {
    id: "rc-29-2",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `Rewilding, the practice of restoring ecosystems by reintroducing species that have been locally extirpated, represents a paradigm shift in conservation biology from static preservation toward dynamic restoration. Traditional conservation focused primarily on protecting existing habitats and preventing further species loss through defensive measures—establishing reserves, restricting development, controlling invasive species. Rewilding advocates argue that such approaches, while necessary, prove insufficient for restoring ecosystem functionality because they fail to address trophic cascades: the far-reaching ecological effects that occur when keystone species are removed from or reintroduced to ecosystems.

The reintroduction of wolves to Yellowstone National Park in 1995 provides the canonical example of rewilding's potential. Prior to wolf reintroduction, elk populations had grown unchecked, devastating riparian vegetation through overgrazing. The elk's browsing prevented willow and aspen regeneration, destabilizing stream banks and diminishing habitat for beavers, songbirds, and fish. Wolf presence fundamentally altered elk behavior, creating a "landscape of fear" that reduced elk browsing pressure in vulnerable areas. The resulting vegetation recovery improved stream ecology, enabled beaver recolonization, and initiated a trophic cascade affecting dozens of species. Proponents argue that such cascading benefits demonstrate rewilding's capacity to restore ecosystem health more effectively than species-by-species conservation efforts.

Critics, however, question whether the Yellowstone experience generalizes to other contexts. The park's relatively intact ecosystem, large protected area, and abundant prey base created conditions favorable for wolf restoration that may not exist elsewhere. Attempts to reintroduce large predators in fragmented landscapes with livestock agriculture face considerably greater challenges, including human-wildlife conflict, genetic viability concerns in small populations, and limited dispersal corridors. Furthermore, ecosystems may have reorganized during predator absence such that simply reintroducing missing species cannot restore historical dynamics. Novel ecosystems shaped by centuries of human modification may lack the structural elements necessary for keystone species to fulfill their ecological roles.

The philosophical dimensions of rewilding also generate debate. Critics argue that rewilding reflects a problematic vision of "pristine" nature that erases Indigenous land management and imposes wilderness ideals onto culturally modified landscapes. Indigenous communities in many regions shaped ecosystems through fire management, selective harvesting, and other practices for millennia before European colonization; these landscapes were not pristine but culturally maintained. Rewilding projects that ignore or override Indigenous relationships with land may perpetuate colonial patterns of conservation that displaced Indigenous peoples from territories subsequently designated as wilderness. Proponents respond that thoughtful rewilding can incorporate Indigenous ecological knowledge and support Indigenous land stewardship rather than displacing traditional management.`,
    questionStem: "According to the passage, before wolves were reintroduced to Yellowstone, elk overgrazing caused which of the following effects?",
    answerChoices: [
      { letter: "A", text: "Increased beaver populations due to abundant woody vegetation" },
      { letter: "B", text: "Rapid regeneration of willow and aspen trees" },
      { letter: "C", text: "Prevention of willow and aspen regeneration and destabilization of stream banks" },
      { letter: "D", text: "Improved habitat conditions for songbirds and fish" },
      { letter: "E", text: "Enhanced stability of riparian ecosystems" }
    ],
    correctAnswer: "C",
    explanation: "The second paragraph explicitly states that 'The elk's browsing prevented willow and aspen regeneration, destabilizing stream banks and diminishing habitat for beavers, songbirds, and fish.' Option C directly reflects these stated effects. Options A, B, D, and E describe outcomes opposite to what the passage describes.",
    difficulty: "easy",
    passageId: "rc-29-passage-1"
  },
  {
    id: "rc-29-3",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Rewilding, the practice of restoring ecosystems by reintroducing species that have been locally extirpated, represents a paradigm shift in conservation biology from static preservation toward dynamic restoration. Traditional conservation focused primarily on protecting existing habitats and preventing further species loss through defensive measures—establishing reserves, restricting development, controlling invasive species. Rewilding advocates argue that such approaches, while necessary, prove insufficient for restoring ecosystem functionality because they fail to address trophic cascades: the far-reaching ecological effects that occur when keystone species are removed from or reintroduced to ecosystems.

The reintroduction of wolves to Yellowstone National Park in 1995 provides the canonical example of rewilding's potential. Prior to wolf reintroduction, elk populations had grown unchecked, devastating riparian vegetation through overgrazing. The elk's browsing prevented willow and aspen regeneration, destabilizing stream banks and diminishing habitat for beavers, songbirds, and fish. Wolf presence fundamentally altered elk behavior, creating a "landscape of fear" that reduced elk browsing pressure in vulnerable areas. The resulting vegetation recovery improved stream ecology, enabled beaver recolonization, and initiated a trophic cascade affecting dozens of species. Proponents argue that such cascading benefits demonstrate rewilding's capacity to restore ecosystem health more effectively than species-by-species conservation efforts.

Critics, however, question whether the Yellowstone experience generalizes to other contexts. The park's relatively intact ecosystem, large protected area, and abundant prey base created conditions favorable for wolf restoration that may not exist elsewhere. Attempts to reintroduce large predators in fragmented landscapes with livestock agriculture face considerably greater challenges, including human-wildlife conflict, genetic viability concerns in small populations, and limited dispersal corridors. Furthermore, ecosystems may have reorganized during predator absence such that simply reintroducing missing species cannot restore historical dynamics. Novel ecosystems shaped by centuries of human modification may lack the structural elements necessary for keystone species to fulfill their ecological roles.

The philosophical dimensions of rewilding also generate debate. Critics argue that rewilding reflects a problematic vision of "pristine" nature that erases Indigenous land management and imposes wilderness ideals onto culturally modified landscapes. Indigenous communities in many regions shaped ecosystems through fire management, selective harvesting, and other practices for millennia before European colonization; these landscapes were not pristine but culturally maintained. Rewilding projects that ignore or override Indigenous relationships with land may perpetuate colonial patterns of conservation that displaced Indigenous peoples from territories subsequently designated as wilderness. Proponents respond that thoughtful rewilding can incorporate Indigenous ecological knowledge and support Indigenous land stewardship rather than displacing traditional management.`,
    questionStem: "Based on the passage, which of the following can most reasonably be inferred about novel ecosystems?",
    answerChoices: [
      { letter: "A", text: "They are identical to the ecosystems that existed before human modification." },
      { letter: "B", text: "They may have structural characteristics that prevent reintroduced keystone species from functioning as they historically did." },
      { letter: "C", text: "They always benefit more from rewilding than intact ecosystems do." },
      { letter: "D", text: "They require less consideration of Indigenous land management practices." },
      { letter: "E", text: "They are more suitable for large predator reintroduction than pristine wilderness areas." }
    ],
    correctAnswer: "B",
    explanation: "The third paragraph states that 'Novel ecosystems shaped by centuries of human modification may lack the structural elements necessary for keystone species to fulfill their ecological roles.' This supports the inference in option B that novel ecosystems may prevent reintroduced species from functioning historically. Options A, C, D, and E contradict or are unsupported by the passage.",
    difficulty: "medium",
    passageId: "rc-29-passage-1"
  },
  {
    id: "rc-29-4",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `Rewilding, the practice of restoring ecosystems by reintroducing species that have been locally extirpated, represents a paradigm shift in conservation biology from static preservation toward dynamic restoration. Traditional conservation focused primarily on protecting existing habitats and preventing further species loss through defensive measures—establishing reserves, restricting development, controlling invasive species. Rewilding advocates argue that such approaches, while necessary, prove insufficient for restoring ecosystem functionality because they fail to address trophic cascades: the far-reaching ecological effects that occur when keystone species are removed from or reintroduced to ecosystems.

The reintroduction of wolves to Yellowstone National Park in 1995 provides the canonical example of rewilding's potential. Prior to wolf reintroduction, elk populations had grown unchecked, devastating riparian vegetation through overgrazing. The elk's browsing prevented willow and aspen regeneration, destabilizing stream banks and diminishing habitat for beavers, songbirds, and fish. Wolf presence fundamentally altered elk behavior, creating a "landscape of fear" that reduced elk browsing pressure in vulnerable areas. The resulting vegetation recovery improved stream ecology, enabled beaver recolonization, and initiated a trophic cascade affecting dozens of species. Proponents argue that such cascading benefits demonstrate rewilding's capacity to restore ecosystem health more effectively than species-by-species conservation efforts.

Critics, however, question whether the Yellowstone experience generalizes to other contexts. The park's relatively intact ecosystem, large protected area, and abundant prey base created conditions favorable for wolf restoration that may not exist elsewhere. Attempts to reintroduce large predators in fragmented landscapes with livestock agriculture face considerably greater challenges, including human-wildlife conflict, genetic viability concerns in small populations, and limited dispersal corridors. Furthermore, ecosystems may have reorganized during predator absence such that simply reintroducing missing species cannot restore historical dynamics. Novel ecosystems shaped by centuries of human modification may lack the structural elements necessary for keystone species to fulfill their ecological roles.

The philosophical dimensions of rewilding also generate debate. Critics argue that rewilding reflects a problematic vision of "pristine" nature that erases Indigenous land management and imposes wilderness ideals onto culturally modified landscapes. Indigenous communities in many regions shaped ecosystems through fire management, selective harvesting, and other practices for millennia before European colonization; these landscapes were not pristine but culturally maintained. Rewilding projects that ignore or override Indigenous relationships with land may perpetuate colonial patterns of conservation that displaced Indigenous peoples from territories subsequently designated as wilderness. Proponents respond that thoughtful rewilding can incorporate Indigenous ecological knowledge and support Indigenous land stewardship rather than displacing traditional management.`,
    questionStem: "The author's discussion of the 'landscape of fear' in the second paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "criticize the wolf reintroduction program for causing elk populations to decline excessively" },
      { letter: "B", text: "explain the behavioral mechanism through which wolf presence reduced elk browsing pressure" },
      { letter: "C", text: "argue that fear-based wildlife management is ethically problematic" },
      { letter: "D", text: "suggest that elk populations should be protected from predator reintroduction" },
      { letter: "E", text: "demonstrate that traditional conservation is superior to rewilding approaches" }
    ],
    correctAnswer: "B",
    explanation: "The 'landscape of fear' concept explains how wolf presence 'fundamentally altered elk behavior' and 'reduced elk browsing pressure in vulnerable areas,' leading to vegetation recovery. The phrase serves to illuminate the behavioral mechanism enabling trophic cascades, not to criticize the program (A), raise ethical concerns (C), advocate for elk protection (D), or favor traditional conservation (E).",
    difficulty: "medium",
    passageId: "rc-29-passage-1"
  },
  {
    id: "rc-29-5",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `Rewilding, the practice of restoring ecosystems by reintroducing species that have been locally extirpated, represents a paradigm shift in conservation biology from static preservation toward dynamic restoration. Traditional conservation focused primarily on protecting existing habitats and preventing further species loss through defensive measures—establishing reserves, restricting development, controlling invasive species. Rewilding advocates argue that such approaches, while necessary, prove insufficient for restoring ecosystem functionality because they fail to address trophic cascades: the far-reaching ecological effects that occur when keystone species are removed from or reintroduced to ecosystems.

The reintroduction of wolves to Yellowstone National Park in 1995 provides the canonical example of rewilding's potential. Prior to wolf reintroduction, elk populations had grown unchecked, devastating riparian vegetation through overgrazing. The elk's browsing prevented willow and aspen regeneration, destabilizing stream banks and diminishing habitat for beavers, songbirds, and fish. Wolf presence fundamentally altered elk behavior, creating a "landscape of fear" that reduced elk browsing pressure in vulnerable areas. The resulting vegetation recovery improved stream ecology, enabled beaver recolonization, and initiated a trophic cascade affecting dozens of species. Proponents argue that such cascading benefits demonstrate rewilding's capacity to restore ecosystem health more effectively than species-by-species conservation efforts.

Critics, however, question whether the Yellowstone experience generalizes to other contexts. The park's relatively intact ecosystem, large protected area, and abundant prey base created conditions favorable for wolf restoration that may not exist elsewhere. Attempts to reintroduce large predators in fragmented landscapes with livestock agriculture face considerably greater challenges, including human-wildlife conflict, genetic viability concerns in small populations, and limited dispersal corridors. Furthermore, ecosystems may have reorganized during predator absence such that simply reintroducing missing species cannot restore historical dynamics. Novel ecosystems shaped by centuries of human modification may lack the structural elements necessary for keystone species to fulfill their ecological roles.

The philosophical dimensions of rewilding also generate debate. Critics argue that rewilding reflects a problematic vision of "pristine" nature that erases Indigenous land management and imposes wilderness ideals onto culturally modified landscapes. Indigenous communities in many regions shaped ecosystems through fire management, selective harvesting, and other practices for millennia before European colonization; these landscapes were not pristine but culturally maintained. Rewilding projects that ignore or override Indigenous relationships with land may perpetuate colonial patterns of conservation that displaced Indigenous peoples from territories subsequently designated as wilderness. Proponents respond that thoughtful rewilding can incorporate Indigenous ecological knowledge and support Indigenous land stewardship rather than displacing traditional management.`,
    questionStem: "The author's attitude toward the relationship between rewilding and Indigenous land management can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive of Indigenous concerns as irrelevant to conservation science" },
      { letter: "B", text: "convinced that rewilding necessarily conflicts with Indigenous interests" },
      { letter: "C", text: "presenting the tension as a legitimate concern while noting possibilities for reconciliation" },
      { letter: "D", text: "enthusiastically advocating for Indigenous veto power over all rewilding projects" },
      { letter: "E", text: "indifferent to the historical displacement of Indigenous peoples from wilderness areas" }
    ],
    correctAnswer: "C",
    explanation: "The fourth paragraph presents critics' concerns about rewilding's relationship to Indigenous land management fairly, noting how rewilding 'may perpetuate colonial patterns,' while also presenting proponents' response that 'thoughtful rewilding can incorporate Indigenous ecological knowledge.' Option C accurately captures this balanced presentation of tension and reconciliation possibilities.",
    difficulty: "medium",
    passageId: "rc-29-passage-1"
  },
  {
    id: "rc-29-6",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: `Rewilding, the practice of restoring ecosystems by reintroducing species that have been locally extirpated, represents a paradigm shift in conservation biology from static preservation toward dynamic restoration. Traditional conservation focused primarily on protecting existing habitats and preventing further species loss through defensive measures—establishing reserves, restricting development, controlling invasive species. Rewilding advocates argue that such approaches, while necessary, prove insufficient for restoring ecosystem functionality because they fail to address trophic cascades: the far-reaching ecological effects that occur when keystone species are removed from or reintroduced to ecosystems.

The reintroduction of wolves to Yellowstone National Park in 1995 provides the canonical example of rewilding's potential. Prior to wolf reintroduction, elk populations had grown unchecked, devastating riparian vegetation through overgrazing. The elk's browsing prevented willow and aspen regeneration, destabilizing stream banks and diminishing habitat for beavers, songbirds, and fish. Wolf presence fundamentally altered elk behavior, creating a "landscape of fear" that reduced elk browsing pressure in vulnerable areas. The resulting vegetation recovery improved stream ecology, enabled beaver recolonization, and initiated a trophic cascade affecting dozens of species. Proponents argue that such cascading benefits demonstrate rewilding's capacity to restore ecosystem health more effectively than species-by-species conservation efforts.

Critics, however, question whether the Yellowstone experience generalizes to other contexts. The park's relatively intact ecosystem, large protected area, and abundant prey base created conditions favorable for wolf restoration that may not exist elsewhere. Attempts to reintroduce large predators in fragmented landscapes with livestock agriculture face considerably greater challenges, including human-wildlife conflict, genetic viability concerns in small populations, and limited dispersal corridors. Furthermore, ecosystems may have reorganized during predator absence such that simply reintroducing missing species cannot restore historical dynamics. Novel ecosystems shaped by centuries of human modification may lack the structural elements necessary for keystone species to fulfill their ecological roles.

The philosophical dimensions of rewilding also generate debate. Critics argue that rewilding reflects a problematic vision of "pristine" nature that erases Indigenous land management and imposes wilderness ideals onto culturally modified landscapes. Indigenous communities in many regions shaped ecosystems through fire management, selective harvesting, and other practices for millennia before European colonization; these landscapes were not pristine but culturally maintained. Rewilding projects that ignore or override Indigenous relationships with land may perpetuate colonial patterns of conservation that displaced Indigenous peoples from territories subsequently designated as wilderness. Proponents respond that thoughtful rewilding can incorporate Indigenous ecological knowledge and support Indigenous land stewardship rather than displacing traditional management.`,
    questionStem: "Which of the following, if true, would most strengthen the critics' argument that rewilding may not generalize beyond Yellowstone?",
    answerChoices: [
      { letter: "A", text: "Wolf populations in Yellowstone have remained stable since 1995." },
      { letter: "B", text: "A predator reintroduction project in a fragmented European landscape failed due to livestock conflicts and insufficient prey populations." },
      { letter: "C", text: "Indigenous communities near Yellowstone have expressed support for the wolf reintroduction program." },
      { letter: "D", text: "The vegetation recovery in Yellowstone occurred more quickly than scientists initially predicted." },
      { letter: "E", text: "Similar trophic cascades have been observed following predator reintroduction in other large, intact ecosystems." }
    ],
    correctAnswer: "B",
    explanation: "Critics argue that Yellowstone's success may not generalize due to fragmented landscapes, livestock conflicts, and limited prey. Option B provides direct evidence of these concerns causing failure in a different context, strengthening the critics' argument. Options A, C, and D relate to Yellowstone's success rather than generalizability. Option E would weaken rather than strengthen the critics' argument.",
    difficulty: "hard",
    passageId: "rc-29-passage-1"
  },

  // Passage 2: Behavioral Economics and Public Policy
  {
    id: "rc-29-7",
    type: "main-point",
    sectionType: "reading-comprehension",
    stimulus: `Behavioral economics, which integrates insights from psychology into economic analysis, has fundamentally challenged the rational actor model underlying traditional policy design. Classical economics assumed that individuals make decisions by systematically evaluating options and selecting those maximizing their utility. Policy interventions accordingly focused on providing information and adjusting incentives, presuming that informed rational agents would respond predictably. Behavioral research demonstrating systematic cognitive biases, limited attention, and context-dependent preferences has prompted a reconception of policy design around how people actually behave rather than how rational models predict they should behave.

The concept of "nudges"—choice architecture interventions that steer behavior without restricting options or significantly changing economic incentives—exemplifies behavioral policy design. Default enrollment in retirement savings plans dramatically increases participation rates compared to opt-in systems, even though both approaches offer identical choices. Placing healthier foods at eye level in cafeterias increases their selection without removing unhealthy alternatives. These interventions exploit cognitive shortcuts: defaults leverage status quo bias and inertia, while placement exploits attention limitations and convenience preferences. Proponents argue that nudges represent a form of "libertarian paternalism" that helps people make better decisions by their own standards while preserving freedom of choice.

Critics raise concerns about both the effectiveness and ethics of behavioral interventions. Meta-analyses of nudge interventions reveal highly variable effect sizes, with many interventions producing modest or temporary behavior changes that fade over time. More fundamentally, nudges may address symptoms rather than causes: encouraging retirement savings through defaults does not address inadequate wages that prevent saving, while cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods. Critics argue that behavioral policy's focus on individual decision-making diverts attention from structural factors and collective action problems requiring more substantial interventions.

The ethical dimensions of behavioral policy generate additional controversy. Who determines what constitutes a "better" choice for individuals to be nudged toward? Behavioral interventions presume that policymakers know what outcomes people should prefer, potentially imposing paternalistic values on diverse populations with legitimate preference heterogeneity. Furthermore, the same behavioral insights enabling beneficial nudges could facilitate manipulation by governments or corporations seeking to exploit cognitive biases for their own purposes rather than citizen welfare. The line between helping people overcome biases and manipulating their choices may prove difficult to draw, particularly when behavioral techniques are deployed without transparency or consent.`,
    questionStem: "Which one of the following most accurately expresses the main point of the passage?",
    answerChoices: [
      { letter: "A", text: "Behavioral economics has definitively proven that nudges are the most effective policy intervention available." },
      { letter: "B", text: "While behavioral economics has challenged traditional policy assumptions and produced interventions like nudges, questions about effectiveness, structural limitations, and ethical concerns complicate their application." },
      { letter: "C", text: "Traditional economic policy based on rational actor models has been completely discredited by behavioral research." },
      { letter: "D", text: "Nudges are inherently manipulative and should be prohibited in democratic societies." },
      { letter: "E", text: "Behavioral policy interventions successfully address structural inequality and collective action problems." }
    ],
    correctAnswer: "B",
    explanation: "The passage presents behavioral economics as challenging traditional assumptions (paragraph 1), explains nudges as a key intervention (paragraph 2), discusses effectiveness and structural limitations (paragraph 3), and raises ethical concerns (paragraph 4). Option B captures this comprehensive presentation of innovations, limitations, and concerns. Other options overstate conclusions or contradict the passage's balanced approach.",
    difficulty: "medium",
    passageId: "rc-29-passage-2"
  },
  {
    id: "rc-29-8",
    type: "explicit-detail",
    sectionType: "reading-comprehension",
    stimulus: `Behavioral economics, which integrates insights from psychology into economic analysis, has fundamentally challenged the rational actor model underlying traditional policy design. Classical economics assumed that individuals make decisions by systematically evaluating options and selecting those maximizing their utility. Policy interventions accordingly focused on providing information and adjusting incentives, presuming that informed rational agents would respond predictably. Behavioral research demonstrating systematic cognitive biases, limited attention, and context-dependent preferences has prompted a reconception of policy design around how people actually behave rather than how rational models predict they should behave.

The concept of "nudges"—choice architecture interventions that steer behavior without restricting options or significantly changing economic incentives—exemplifies behavioral policy design. Default enrollment in retirement savings plans dramatically increases participation rates compared to opt-in systems, even though both approaches offer identical choices. Placing healthier foods at eye level in cafeterias increases their selection without removing unhealthy alternatives. These interventions exploit cognitive shortcuts: defaults leverage status quo bias and inertia, while placement exploits attention limitations and convenience preferences. Proponents argue that nudges represent a form of "libertarian paternalism" that helps people make better decisions by their own standards while preserving freedom of choice.

Critics raise concerns about both the effectiveness and ethics of behavioral interventions. Meta-analyses of nudge interventions reveal highly variable effect sizes, with many interventions producing modest or temporary behavior changes that fade over time. More fundamentally, nudges may address symptoms rather than causes: encouraging retirement savings through defaults does not address inadequate wages that prevent saving, while cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods. Critics argue that behavioral policy's focus on individual decision-making diverts attention from structural factors and collective action problems requiring more substantial interventions.

The ethical dimensions of behavioral policy generate additional controversy. Who determines what constitutes a "better" choice for individuals to be nudged toward? Behavioral interventions presume that policymakers know what outcomes people should prefer, potentially imposing paternalistic values on diverse populations with legitimate preference heterogeneity. Furthermore, the same behavioral insights enabling beneficial nudges could facilitate manipulation by governments or corporations seeking to exploit cognitive biases for their own purposes rather than citizen welfare. The line between helping people overcome biases and manipulating their choices may prove difficult to draw, particularly when behavioral techniques are deployed without transparency or consent.`,
    questionStem: "According to the passage, proponents describe nudges as a form of",
    answerChoices: [
      { letter: "A", text: "authoritarian paternalism that restricts individual freedom" },
      { letter: "B", text: "libertarian paternalism that preserves freedom while helping people make better decisions" },
      { letter: "C", text: "laissez-faire economics that eliminates all government intervention" },
      { letter: "D", text: "traditional rational choice theory applied to policy design" },
      { letter: "E", text: "mandatory behavioral modification requiring compliance" }
    ],
    correctAnswer: "B",
    explanation: "The second paragraph explicitly states that 'Proponents argue that nudges represent a form of \"libertarian paternalism\" that helps people make better decisions by their own standards while preserving freedom of choice.' Option B directly reflects this characterization.",
    difficulty: "easy",
    passageId: "rc-29-passage-2"
  },
  {
    id: "rc-29-9",
    type: "inference",
    sectionType: "reading-comprehension",
    stimulus: `Behavioral economics, which integrates insights from psychology into economic analysis, has fundamentally challenged the rational actor model underlying traditional policy design. Classical economics assumed that individuals make decisions by systematically evaluating options and selecting those maximizing their utility. Policy interventions accordingly focused on providing information and adjusting incentives, presuming that informed rational agents would respond predictably. Behavioral research demonstrating systematic cognitive biases, limited attention, and context-dependent preferences has prompted a reconception of policy design around how people actually behave rather than how rational models predict they should behave.

The concept of "nudges"—choice architecture interventions that steer behavior without restricting options or significantly changing economic incentives—exemplifies behavioral policy design. Default enrollment in retirement savings plans dramatically increases participation rates compared to opt-in systems, even though both approaches offer identical choices. Placing healthier foods at eye level in cafeterias increases their selection without removing unhealthy alternatives. These interventions exploit cognitive shortcuts: defaults leverage status quo bias and inertia, while placement exploits attention limitations and convenience preferences. Proponents argue that nudges represent a form of "libertarian paternalism" that helps people make better decisions by their own standards while preserving freedom of choice.

Critics raise concerns about both the effectiveness and ethics of behavioral interventions. Meta-analyses of nudge interventions reveal highly variable effect sizes, with many interventions producing modest or temporary behavior changes that fade over time. More fundamentally, nudges may address symptoms rather than causes: encouraging retirement savings through defaults does not address inadequate wages that prevent saving, while cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods. Critics argue that behavioral policy's focus on individual decision-making diverts attention from structural factors and collective action problems requiring more substantial interventions.

The ethical dimensions of behavioral policy generate additional controversy. Who determines what constitutes a "better" choice for individuals to be nudged toward? Behavioral interventions presume that policymakers know what outcomes people should prefer, potentially imposing paternalistic values on diverse populations with legitimate preference heterogeneity. Furthermore, the same behavioral insights enabling beneficial nudges could facilitate manipulation by governments or corporations seeking to exploit cognitive biases for their own purposes rather than citizen welfare. The line between helping people overcome biases and manipulating their choices may prove difficult to draw, particularly when behavioral techniques are deployed without transparency or consent.`,
    questionStem: "Based on the passage, which of the following can most reasonably be inferred about default enrollment in retirement savings plans?",
    answerChoices: [
      { letter: "A", text: "It forces employees to save for retirement against their will." },
      { letter: "B", text: "It produces lower participation rates than opt-in systems." },
      { letter: "C", text: "It works partly because people tend to stick with pre-selected options rather than actively changing them." },
      { letter: "D", text: "It addresses the structural problem of inadequate wages." },
      { letter: "E", text: "It has been proven ineffective by meta-analyses of nudge interventions." }
    ],
    correctAnswer: "C",
    explanation: "The passage states that defaults 'leverage status quo bias and inertia,' meaning people tend to stick with default settings rather than actively changing them. Option C reflects this inference about why default enrollment increases participation. Option A is incorrect because the passage notes nudges preserve 'freedom of choice.' Option B contradicts the passage. Options D and E misrepresent the passage's discussion.",
    difficulty: "medium",
    passageId: "rc-29-passage-2"
  },
  {
    id: "rc-29-10",
    type: "function",
    sectionType: "reading-comprehension",
    stimulus: `Behavioral economics, which integrates insights from psychology into economic analysis, has fundamentally challenged the rational actor model underlying traditional policy design. Classical economics assumed that individuals make decisions by systematically evaluating options and selecting those maximizing their utility. Policy interventions accordingly focused on providing information and adjusting incentives, presuming that informed rational agents would respond predictably. Behavioral research demonstrating systematic cognitive biases, limited attention, and context-dependent preferences has prompted a reconception of policy design around how people actually behave rather than how rational models predict they should behave.

The concept of "nudges"—choice architecture interventions that steer behavior without restricting options or significantly changing economic incentives—exemplifies behavioral policy design. Default enrollment in retirement savings plans dramatically increases participation rates compared to opt-in systems, even though both approaches offer identical choices. Placing healthier foods at eye level in cafeterias increases their selection without removing unhealthy alternatives. These interventions exploit cognitive shortcuts: defaults leverage status quo bias and inertia, while placement exploits attention limitations and convenience preferences. Proponents argue that nudges represent a form of "libertarian paternalism" that helps people make better decisions by their own standards while preserving freedom of choice.

Critics raise concerns about both the effectiveness and ethics of behavioral interventions. Meta-analyses of nudge interventions reveal highly variable effect sizes, with many interventions producing modest or temporary behavior changes that fade over time. More fundamentally, nudges may address symptoms rather than causes: encouraging retirement savings through defaults does not address inadequate wages that prevent saving, while cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods. Critics argue that behavioral policy's focus on individual decision-making diverts attention from structural factors and collective action problems requiring more substantial interventions.

The ethical dimensions of behavioral policy generate additional controversy. Who determines what constitutes a "better" choice for individuals to be nudged toward? Behavioral interventions presume that policymakers know what outcomes people should prefer, potentially imposing paternalistic values on diverse populations with legitimate preference heterogeneity. Furthermore, the same behavioral insights enabling beneficial nudges could facilitate manipulation by governments or corporations seeking to exploit cognitive biases for their own purposes rather than citizen welfare. The line between helping people overcome biases and manipulating their choices may prove difficult to draw, particularly when behavioral techniques are deployed without transparency or consent.`,
    questionStem: "The author's discussion of food deserts in the third paragraph primarily serves to",
    answerChoices: [
      { letter: "A", text: "demonstrate that cafeteria nudges are the most effective nutrition intervention" },
      { letter: "B", text: "illustrate how nudges may address behavioral symptoms without tackling underlying structural problems" },
      { letter: "C", text: "argue that food placement interventions should be expanded to all retail settings" },
      { letter: "D", text: "prove that behavioral economics has no valid applications in nutrition policy" },
      { letter: "E", text: "suggest that individual decision-making is the primary cause of nutritional inequality" }
    ],
    correctAnswer: "B",
    explanation: "The food deserts example appears in the context of arguing that 'nudges may address symptoms rather than causes' and that 'cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods.' This illustrates the structural limitations critique (Option B). The passage does not endorse cafeteria nudges as most effective (A), advocate expansion (C), reject all behavioral applications (D), or blame individuals (E).",
    difficulty: "medium",
    passageId: "rc-29-passage-2"
  },
  {
    id: "rc-29-11",
    type: "author-attitude",
    sectionType: "reading-comprehension",
    stimulus: `Behavioral economics, which integrates insights from psychology into economic analysis, has fundamentally challenged the rational actor model underlying traditional policy design. Classical economics assumed that individuals make decisions by systematically evaluating options and selecting those maximizing their utility. Policy interventions accordingly focused on providing information and adjusting incentives, presuming that informed rational agents would respond predictably. Behavioral research demonstrating systematic cognitive biases, limited attention, and context-dependent preferences has prompted a reconception of policy design around how people actually behave rather than how rational models predict they should behave.

The concept of "nudges"—choice architecture interventions that steer behavior without restricting options or significantly changing economic incentives—exemplifies behavioral policy design. Default enrollment in retirement savings plans dramatically increases participation rates compared to opt-in systems, even though both approaches offer identical choices. Placing healthier foods at eye level in cafeterias increases their selection without removing unhealthy alternatives. These interventions exploit cognitive shortcuts: defaults leverage status quo bias and inertia, while placement exploits attention limitations and convenience preferences. Proponents argue that nudges represent a form of "libertarian paternalism" that helps people make better decisions by their own standards while preserving freedom of choice.

Critics raise concerns about both the effectiveness and ethics of behavioral interventions. Meta-analyses of nudge interventions reveal highly variable effect sizes, with many interventions producing modest or temporary behavior changes that fade over time. More fundamentally, nudges may address symptoms rather than causes: encouraging retirement savings through defaults does not address inadequate wages that prevent saving, while cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods. Critics argue that behavioral policy's focus on individual decision-making diverts attention from structural factors and collective action problems requiring more substantial interventions.

The ethical dimensions of behavioral policy generate additional controversy. Who determines what constitutes a "better" choice for individuals to be nudged toward? Behavioral interventions presume that policymakers know what outcomes people should prefer, potentially imposing paternalistic values on diverse populations with legitimate preference heterogeneity. Furthermore, the same behavioral insights enabling beneficial nudges could facilitate manipulation by governments or corporations seeking to exploit cognitive biases for their own purposes rather than citizen welfare. The line between helping people overcome biases and manipulating their choices may prove difficult to draw, particularly when behavioral techniques are deployed without transparency or consent.`,
    questionStem: "The author's attitude toward the claim that behavioral insights could be used for manipulation can best be described as",
    answerChoices: [
      { letter: "A", text: "dismissive, treating it as paranoid speculation" },
      { letter: "B", text: "unconcerned, since manipulation is easily distinguishable from beneficial nudging" },
      { letter: "C", text: "acknowledging it as a legitimate concern, noting the difficulty of distinguishing help from manipulation" },
      { letter: "D", text: "enthusiastic about the manipulation potential of behavioral techniques" },
      { letter: "E", text: "certain that transparency requirements would prevent all misuse" }
    ],
    correctAnswer: "C",
    explanation: "The fourth paragraph states that 'the same behavioral insights enabling beneficial nudges could facilitate manipulation' and that 'the line between helping people overcome biases and manipulating their choices may prove difficult to draw.' This acknowledges manipulation as a legitimate concern while noting distinguishing difficulties (Option C). The author neither dismisses the concern (A), treats it as easily solved (B, E), nor endorses manipulation (D).",
    difficulty: "medium",
    passageId: "rc-29-passage-2"
  },
  {
    id: "rc-29-12",
    type: "strengthen-weaken",
    sectionType: "reading-comprehension",
    stimulus: `Behavioral economics, which integrates insights from psychology into economic analysis, has fundamentally challenged the rational actor model underlying traditional policy design. Classical economics assumed that individuals make decisions by systematically evaluating options and selecting those maximizing their utility. Policy interventions accordingly focused on providing information and adjusting incentives, presuming that informed rational agents would respond predictably. Behavioral research demonstrating systematic cognitive biases, limited attention, and context-dependent preferences has prompted a reconception of policy design around how people actually behave rather than how rational models predict they should behave.

The concept of "nudges"—choice architecture interventions that steer behavior without restricting options or significantly changing economic incentives—exemplifies behavioral policy design. Default enrollment in retirement savings plans dramatically increases participation rates compared to opt-in systems, even though both approaches offer identical choices. Placing healthier foods at eye level in cafeterias increases their selection without removing unhealthy alternatives. These interventions exploit cognitive shortcuts: defaults leverage status quo bias and inertia, while placement exploits attention limitations and convenience preferences. Proponents argue that nudges represent a form of "libertarian paternalism" that helps people make better decisions by their own standards while preserving freedom of choice.

Critics raise concerns about both the effectiveness and ethics of behavioral interventions. Meta-analyses of nudge interventions reveal highly variable effect sizes, with many interventions producing modest or temporary behavior changes that fade over time. More fundamentally, nudges may address symptoms rather than causes: encouraging retirement savings through defaults does not address inadequate wages that prevent saving, while cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods. Critics argue that behavioral policy's focus on individual decision-making diverts attention from structural factors and collective action problems requiring more substantial interventions.

The ethical dimensions of behavioral policy generate additional controversy. Who determines what constitutes a "better" choice for individuals to be nudged toward? Behavioral interventions presume that policymakers know what outcomes people should prefer, potentially imposing paternalistic values on diverse populations with legitimate preference heterogeneity. Furthermore, the same behavioral insights enabling beneficial nudges could facilitate manipulation by governments or corporations seeking to exploit cognitive biases for their own purposes rather than citizen welfare. The line between helping people overcome biases and manipulating their choices may prove difficult to draw, particularly when behavioral techniques are deployed without transparency or consent.`,
    questionStem: "Which of the following, if true, would most weaken the proponents' characterization of nudges as 'libertarian paternalism'?",
    answerChoices: [
      { letter: "A", text: "Some individuals who are defaulted into retirement savings plans choose to opt out after reviewing the terms." },
      { letter: "B", text: "Default settings in some contexts are extremely difficult to change, effectively functioning as mandates for most people." },
      { letter: "C", text: "Cafeteria food placement interventions have been shown to improve nutritional outcomes in school settings." },
      { letter: "D", text: "Traditional economic models continue to be useful for predicting behavior in financial markets." },
      { letter: "E", text: "Behavioral research has identified cognitive biases that affect decision-making across multiple domains." }
    ],
    correctAnswer: "B",
    explanation: "Proponents characterize nudges as 'libertarian paternalism' because they preserve 'freedom of choice.' If default settings are 'extremely difficult to change, effectively functioning as mandates' (Option B), this would undermine the claim that nudges preserve meaningful choice, weakening the libertarian paternalism characterization. Other options don't address the freedom of choice aspect.",
    difficulty: "hard",
    passageId: "rc-29-passage-2"
  },
  {
    id: "rc-29-13",
    type: "application",
    sectionType: "reading-comprehension",
    stimulus: `Behavioral economics, which integrates insights from psychology into economic analysis, has fundamentally challenged the rational actor model underlying traditional policy design. Classical economics assumed that individuals make decisions by systematically evaluating options and selecting those maximizing their utility. Policy interventions accordingly focused on providing information and adjusting incentives, presuming that informed rational agents would respond predictably. Behavioral research demonstrating systematic cognitive biases, limited attention, and context-dependent preferences has prompted a reconception of policy design around how people actually behave rather than how rational models predict they should behave.

The concept of "nudges"—choice architecture interventions that steer behavior without restricting options or significantly changing economic incentives—exemplifies behavioral policy design. Default enrollment in retirement savings plans dramatically increases participation rates compared to opt-in systems, even though both approaches offer identical choices. Placing healthier foods at eye level in cafeterias increases their selection without removing unhealthy alternatives. These interventions exploit cognitive shortcuts: defaults leverage status quo bias and inertia, while placement exploits attention limitations and convenience preferences. Proponents argue that nudges represent a form of "libertarian paternalism" that helps people make better decisions by their own standards while preserving freedom of choice.

Critics raise concerns about both the effectiveness and ethics of behavioral interventions. Meta-analyses of nudge interventions reveal highly variable effect sizes, with many interventions producing modest or temporary behavior changes that fade over time. More fundamentally, nudges may address symptoms rather than causes: encouraging retirement savings through defaults does not address inadequate wages that prevent saving, while cafeteria placement cannot substitute for addressing food deserts in low-income neighborhoods. Critics argue that behavioral policy's focus on individual decision-making diverts attention from structural factors and collective action problems requiring more substantial interventions.

The ethical dimensions of behavioral policy generate additional controversy. Who determines what constitutes a "better" choice for individuals to be nudged toward? Behavioral interventions presume that policymakers know what outcomes people should prefer, potentially imposing paternalistic values on diverse populations with legitimate preference heterogeneity. Furthermore, the same behavioral insights enabling beneficial nudges could facilitate manipulation by governments or corporations seeking to exploit cognitive biases for their own purposes rather than citizen welfare. The line between helping people overcome biases and manipulating their choices may prove difficult to draw, particularly when behavioral techniques are deployed without transparency or consent.`,
    questionStem: "Based on the critics' argument in the third paragraph, which of the following policies would they most likely view as superior to a nudge-based approach for improving educational outcomes?",
    answerChoices: [
      { letter: "A", text: "Sending text message reminders to students about homework deadlines" },
      { letter: "B", text: "Redesigning report card formats to make grade information more salient to parents" },
      { letter: "C", text: "Increasing school funding to reduce class sizes and hire more qualified teachers" },
      { letter: "D", text: "Defaulting students into advanced placement courses with an opt-out option" },
      { letter: "E", text: "Placing educational posters at eye level in school hallways" }
    ],
    correctAnswer: "C",
    explanation: "Critics argue that nudges 'address symptoms rather than causes' and that behavioral policy 'diverts attention from structural factors.' Increasing school funding (Option C) represents a structural intervention addressing underlying causes rather than individual decision-making, which critics would prefer. Options A, B, D, and E are all nudge-style interventions focusing on individual behavior rather than structural factors.",
    difficulty: "hard",
    passageId: "rc-29-passage-2"
  }
];
