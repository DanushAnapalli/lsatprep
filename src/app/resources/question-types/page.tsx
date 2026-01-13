"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Target,
  Brain,
  FileText,
  Lightbulb,
  AlertTriangle,
  Search,
} from "lucide-react";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface QuestionType {
  name: string;
  shortDesc: string;
  frequency: "High" | "Medium" | "Low";
  tips: string[];
  keyIdentifiers: string[];
  traps: string[];
}

const lrQuestionTypes: QuestionType[] = [
  {
    name: "Strengthen",
    shortDesc: "Find info that makes the conclusion more likely true",
    frequency: "High",
    tips: ["ID conclusion & evidence first", "Fill gaps between evidence and conclusion", "For causal args, rule out alternatives"],
    keyIdentifiers: ["strengthens the argument", "most supports", "adds the most support"],
    traps: ["Repeats conclusion", "Irrelevant true statements", "Actually weakens"],
  },
  {
    name: "Weaken",
    shortDesc: "Find info that makes the conclusion less likely true",
    frequency: "High",
    tips: ["Attack assumption, not evidence", "For causal args, suggest alternatives", "Look for scope shifts"],
    keyIdentifiers: ["weakens the argument", "casts doubt", "undermines"],
    traps: ["Attacks evidence directly", "Irrelevant negative info", "Actually strengthens"],
  },
  {
    name: "Necessary Assumption",
    shortDesc: "Find unstated premise that MUST be true for argument to work",
    frequency: "High",
    tips: ["Negation test: if negating destroys arg, it's necessary", "Watch for new terms in conclusion", "Often modest/conservative"],
    keyIdentifiers: ["assumption required", "argument depends", "argument assumes"],
    traps: ["Sufficient but not necessary", "Too strong", "Restates conclusion"],
  },
  {
    name: "Sufficient Assumption",
    shortDesc: "Find premise that GUARANTEES the conclusion",
    frequency: "Medium",
    tips: ["Answer must guarantee conclusion", "Often formal logic (if-then)", "Links evidence terms to conclusion terms"],
    keyIdentifiers: ["enables conclusion to be drawn", "conclusion follows logically"],
    traps: ["Only makes more likely", "Doesn't complete the chain", "Wrong conditional"],
  },
  {
    name: "Flaw",
    shortDesc: "Identify the logical error in the reasoning",
    frequency: "High",
    tips: ["Match abstract flaw description to specific error", "Focus on HOW it reasons, not WHAT it says", "Learn common flaw types"],
    keyIdentifiers: ["flawed because", "vulnerable to criticism", "questionable because"],
    traps: ["Describes wrong flaw", "Describes valid reasoning", "Focuses on content not method"],
  },
  {
    name: "Method of Reasoning",
    shortDesc: "Describe HOW the argument proceeds",
    frequency: "Medium",
    tips: ["Focus on structure, not content", "ID technique: analogy, counterexample, elimination", "What role does each sentence play?"],
    keyIdentifiers: ["argument proceeds by", "method of reasoning", "technique of reasoning"],
    traps: ["Describes content not method", "Wrong component labels", "Describes what should be done"],
  },
  {
    name: "Main Point",
    shortDesc: "Identify the main conclusion the author wants you to accept",
    frequency: "Medium",
    tips: ["Look for: therefore, thus, hence, so", "Everything else supports this", "Often at beginning or end"],
    keyIdentifiers: ["main conclusion", "main point", "argument concludes"],
    traps: ["States evidence", "Intermediate conclusion", "Overstates/understates"],
  },
  {
    name: "Inference/Must Be True",
    shortDesc: "Identify what must be true based on given information",
    frequency: "High",
    tips: ["Stay close to text", "Must be PROVABLE with certainty", "Combine multiple statements"],
    keyIdentifiers: ["must be true", "can be properly inferred", "most strongly support"],
    traps: ["Goes beyond evidence", "Extreme language", "Could be true but not proven"],
  },
  {
    name: "Parallel Reasoning",
    shortDesc: "Find argument with same logical structure",
    frequency: "Low",
    tips: ["Map structure abstractly", "Match conclusion type first", "If flawed, answer must have SAME flaw"],
    keyIdentifiers: ["most similar pattern", "parallel reasoning"],
    traps: ["Similar content, different structure", "Wrong conclusion type", "Valid when should be flawed"],
  },
  {
    name: "Parallel Flaw",
    shortDesc: "Find argument with the same logical error",
    frequency: "Low",
    tips: ["ID specific flaw first", "Answer must have EXACT same flaw", "Eliminate valid arguments"],
    keyIdentifiers: ["flawed pattern most similar", "questionable reasoning most similar"],
    traps: ["Valid arguments", "Different flaw types", "Similar content only"],
  },
  {
    name: "Point at Issue",
    shortDesc: "Identify what two speakers disagree about",
    frequency: "Medium",
    tips: ["Both must address same topic", "Must have OPPOSING views", "Test each answer for both speakers"],
    keyIdentifiers: ["point at issue", "disagree about", "point of disagreement"],
    traps: ["Only one speaker addresses", "They might agree", "Neither directly addresses"],
  },
  {
    name: "Principle (Identify)",
    shortDesc: "Find general principle that justifies the argument",
    frequency: "Medium",
    tips: ["Abstract to general rule", "Principle must support conclusion from evidence", "Check for unintended consequences"],
    keyIdentifiers: ["principle justifies", "principle underlies"],
    traps: ["Doesn't apply to case", "Too broad", "Doesn't actually support"],
  },
  {
    name: "Principle (Apply)",
    shortDesc: "Apply given principle to a specific situation",
    frequency: "Medium",
    tips: ["Break down if-then conditions", "Match situation to principle terms", "All conditions must be satisfied"],
    keyIdentifiers: ["conforms to principle", "committed to which conclusion"],
    traps: ["Meets some but not all conditions", "Violates scope", "Wrong necessary/sufficient"],
  },
  {
    name: "Paradox/Resolve",
    shortDesc: "Explain how two seemingly contradictory facts can both be true",
    frequency: "Medium",
    tips: ["State both facts clearly", "Answer makes BOTH make sense", "Look for hidden factor/distinction"],
    keyIdentifiers: ["resolve the paradox", "explain the discrepancy", "reconcile"],
    traps: ["Denies one fact", "Deepens paradox", "Only explains one fact"],
  },
  {
    name: "Role of Statement",
    shortDesc: "Identify function a specific statement plays in the argument",
    frequency: "Medium",
    tips: ["Focus on PURPOSE", "Common roles: premise, conclusion, counterargument, background", "What if removed?"],
    keyIdentifiers: ["plays which role", "serves to", "functions as"],
    traps: ["Confuses premise/conclusion", "Describes content not role"],
  },
  {
    name: "Evaluate",
    shortDesc: "Identify what info would help assess argument's soundness",
    frequency: "Low",
    tips: ["Find key assumption/gap", "Answer could strengthen OR weaken", "Frame as yes/no question"],
    keyIdentifiers: ["most useful to know", "helpful in evaluating"],
    traps: ["Only strengthens or weakens", "Already in stimulus", "Tangential"],
  },
  {
    name: "Cannot Be True",
    shortDesc: "Identify what's IMPOSSIBLE if the statements are accurate",
    frequency: "Low",
    tips: ["Must be IMPOSSIBLE, not just unlikely", "Look for logical contradictions", "Check quantifiers and conditionals"],
    keyIdentifiers: ["CANNOT be true", "rule out", "incompatible"],
    traps: ["Unlikely but possible", "Not addressed", "Could be true sometimes"],
  },
  {
    name: "Except/Least",
    shortDesc: "Find the ONE answer that doesn't fit while four do",
    frequency: "Medium",
    tips: ["Looking for EXCEPTION", "Four work, ONE doesn't", "Mark each as works/doesn't work"],
    keyIdentifiers: ["EXCEPT", "LEAST", "does NOT"],
    traps: ["Picking one that DOES fit", "Missing the qualifier"],
  },
];

const rcQuestionTypes: QuestionType[] = [
  {
    name: "Main Point/Purpose",
    shortDesc: "Identify central thesis or purpose of the passage",
    frequency: "High",
    tips: ["First & last paragraphs key", "Must encompass ALL major topics", "What is author trying to prove?"],
    keyIdentifiers: ["main point", "primary purpose", "primarily concerned with"],
    traps: ["Too narrow (one paragraph)", "Too broad", "States opposing view"],
  },
  {
    name: "Author's Attitude",
    shortDesc: "Identify author's perspective or tone toward subject",
    frequency: "Medium",
    tips: ["Look for evaluative language", "Usually moderate, not extreme", "Track shifts in attitude"],
    keyIdentifiers: ["author's attitude", "tone", "author regards"],
    traps: ["Extreme emotions", "Neutral when has opinion", "Conflates author with reported view"],
  },
  {
    name: "Inference",
    shortDesc: "Identify what can be concluded from passage even if not directly stated",
    frequency: "High",
    tips: ["Stay close to text", "Must be SUPPORTED", "Combine info from different parts"],
    keyIdentifiers: ["can be inferred", "suggests", "implies", "author believes"],
    traps: ["Goes beyond text", "Extreme language", "Could be true but not supported"],
  },
  {
    name: "Specific Detail",
    shortDesc: "Locate specific information explicitly stated in passage",
    frequency: "High",
    tips: ["Go back to verify", "Match to specific lines", "Watch for subtle distortions"],
    keyIdentifiers: ["According to passage", "author states", "passage indicates"],
    traps: ["Slightly altered details", "Wrong attribution", "Passage words in wrong context"],
  },
  {
    name: "Function/Purpose",
    shortDesc: "Explain why author included a specific element",
    frequency: "Medium",
    tips: ["Consider context", "Ask: what job does this serve?", "Common: example, evidence, contrast"],
    keyIdentifiers: ["in order to", "function of", "serves to"],
    traps: ["Describes what it says not why", "Wrong purpose", "Overstates importance"],
  },
  {
    name: "Strengthen/Weaken (RC)",
    shortDesc: "Find info that supports or undermines a passage claim",
    frequency: "Medium",
    tips: ["ID exact claim to target", "Same logic as LR strengthen/weaken", "Answer introduces NEW info"],
    keyIdentifiers: ["strengthens", "weakens", "undermines"],
    traps: ["Affects different argument", "Already in passage", "Irrelevant"],
  },
  {
    name: "Application/Analogy",
    shortDesc: "Find situation most similar to something in passage",
    frequency: "Low",
    tips: ["ID key relationship/pattern", "Match STRUCTURE not surface", "Content can differ; pattern must match"],
    keyIdentifiers: ["most analogous", "most similar", "exemplifies same principle"],
    traps: ["Similar content, different relationship", "Matches only part"],
  },
  {
    name: "Organization/Structure",
    shortDesc: "Describe how passage or section is organized",
    frequency: "Medium",
    tips: ["Map paragraph by paragraph", "Common: problem/solution, compare/contrast, chronological", "Watch transitions"],
    keyIdentifiers: ["organization", "structured", "second paragraph functions"],
    traps: ["Describes only part", "Wrong order", "Confuses author with critiqued view"],
  },
  {
    name: "Author Would Agree",
    shortDesc: "Determine which statement author would endorse or reject",
    frequency: "Medium",
    tips: ["Only use views expressed/implied", "Distinguish author from reported views", "Must align with demonstrated perspective"],
    keyIdentifiers: ["author would agree", "author would disagree", "concur"],
    traps: ["Author might agree but doesn't address", "Extreme positions", "Reported vs author views"],
  },
  {
    name: "Vocabulary in Context",
    shortDesc: "Determine meaning of word/phrase in specific context",
    frequency: "Medium",
    tips: ["Meaning must fit context", "May not be common meaning", "Substitute to check"],
    keyIdentifiers: ["most nearly means", "used to mean", "refers to"],
    traps: ["Most common meaning", "Doesn't fit grammatically", "Overly literal"],
  },
  {
    name: "Dual Passage Comparison",
    shortDesc: "Compare/contrast views in two related passages",
    frequency: "Medium",
    tips: ["ID each author's main point", "Look for explicit agreements/disagreements", "Don't assume disagreement"],
    keyIdentifiers: ["both passages", "Unlike Passage A", "authors disagree"],
    traps: ["Claiming disagreement where they agree", "Wrong attribution", "Overstating"],
  },
  {
    name: "Passage Reference",
    shortDesc: "Questions about specific topic, person, or study in passage",
    frequency: "High",
    tips: ["Locate specific reference first", "Read surrounding context", "Don't confuse different references"],
    keyIdentifiers: ["According to passage, X", "passage characterizes", "what does passage say about"],
    traps: ["Confusing different references", "Mischaracterizing", "Adding info not there"],
  },
];

export default function QuestionTypesPage() {
  const [activeTab, setActiveTab] = useState<"lr" | "rc">("lr");

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

  const currentTypes = activeTab === "lr" ? lrQuestionTypes : rcQuestionTypes;
  const highFreq = currentTypes.filter((q) => q.frequency === "High");
  const medFreq = currentTypes.filter((q) => q.frequency === "Medium");
  const lowFreq = currentTypes.filter((q) => q.frequency === "Low");

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-[#1a365d] hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-amber-500 dark:hover:bg-stone-700"
            >
              <ArrowLeft size={18} className="text-stone-500 dark:text-stone-400" />
              <span>Menu</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-lg font-bold text-[#1a365d] dark:text-amber-400">
              Question Types
            </span>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-[#1a365d] dark:text-amber-400" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-4">
        {/* Quick Stats Row */}
        <div className="mb-4 grid grid-cols-4 gap-2">
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">{lrQuestionTypes.length}</div>
            <div className="text-xs text-stone-500">LR Types</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">{rcQuestionTypes.length}</div>
            <div className="text-xs text-stone-500">RC Types</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">
              {lrQuestionTypes.filter((q) => q.frequency === "High").length + rcQuestionTypes.filter((q) => q.frequency === "High").length}
            </div>
            <div className="text-xs text-stone-500">High Freq</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-stone-600 dark:text-stone-400">{lrQuestionTypes.length + rcQuestionTypes.length}</div>
            <div className="text-xs text-stone-500">Total</div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setActiveTab("lr")}
            className={cx(
              "flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition",
              activeTab === "lr"
                ? "bg-purple-600 text-white dark:bg-purple-500"
                : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            )}
          >
            <Brain size={16} />
            Logical Reasoning ({lrQuestionTypes.length})
          </button>
          <button
            onClick={() => setActiveTab("rc")}
            className={cx(
              "flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition",
              activeTab === "rc"
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            )}
          >
            <FileText size={16} />
            Reading Comprehension ({rcQuestionTypes.length})
          </button>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Column 1: High Frequency */}
          <div className="space-y-3">
            <div className={cx(
              "flex items-center gap-2 rounded-sm px-3 py-2",
              activeTab === "lr" ? "bg-purple-50 dark:bg-purple-900/20" : "bg-blue-50 dark:bg-blue-900/20"
            )}>
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <h2 className="font-semibold text-sm text-stone-700 dark:text-stone-300">High Frequency ({highFreq.length})</h2>
            </div>
            <div className="space-y-2 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {highFreq.map((qt) => (
                <QuestionTypeCard key={qt.name} qt={qt} color={activeTab === "lr" ? "purple" : "blue"} getFrequencyColor={getFrequencyColor} />
              ))}
            </div>
          </div>

          {/* Column 2: Medium Frequency */}
          <div className="space-y-3">
            <div className={cx(
              "flex items-center gap-2 rounded-sm px-3 py-2",
              activeTab === "lr" ? "bg-purple-50 dark:bg-purple-900/20" : "bg-blue-50 dark:bg-blue-900/20"
            )}>
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <h2 className="font-semibold text-sm text-stone-700 dark:text-stone-300">Medium Frequency ({medFreq.length})</h2>
            </div>
            <div className="space-y-2 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {medFreq.map((qt) => (
                <QuestionTypeCard key={qt.name} qt={qt} color={activeTab === "lr" ? "purple" : "blue"} getFrequencyColor={getFrequencyColor} />
              ))}
            </div>
          </div>

          {/* Column 3: Low Frequency + Quick Reference */}
          <div className="space-y-3">
            <div className={cx(
              "flex items-center gap-2 rounded-sm px-3 py-2",
              activeTab === "lr" ? "bg-purple-50 dark:bg-purple-900/20" : "bg-blue-50 dark:bg-blue-900/20"
            )}>
              <div className="h-2 w-2 rounded-full bg-stone-400" />
              <h2 className="font-semibold text-sm text-stone-700 dark:text-stone-300">Low Frequency ({lowFreq.length})</h2>
            </div>
            <div className="space-y-2">
              {lowFreq.map((qt) => (
                <QuestionTypeCard key={qt.name} qt={qt} color={activeTab === "lr" ? "purple" : "blue"} getFrequencyColor={getFrequencyColor} />
              ))}
            </div>

            {/* Quick Reference Card */}
            <div className={cx(
              "rounded-sm border-2 bg-white dark:bg-stone-900",
              activeTab === "lr" ? "border-purple-200 dark:border-purple-800" : "border-blue-200 dark:border-blue-800"
            )}>
              <div className={cx(
                "flex items-center gap-2 px-3 py-2",
                activeTab === "lr" ? "bg-purple-50 dark:bg-purple-900/20" : "bg-blue-50 dark:bg-blue-900/20"
              )}>
                <Lightbulb size={14} className={activeTab === "lr" ? "text-purple-600 dark:text-purple-400" : "text-blue-600 dark:text-blue-400"} />
                <h3 className="font-semibold text-xs text-stone-700 dark:text-stone-300">Quick Tips</h3>
              </div>
              <div className="p-3 text-[10px] text-stone-600 dark:text-stone-400 space-y-1">
                {activeTab === "lr" ? (
                  <>
                    <div>• Read question stem FIRST</div>
                    <div>• ID conclusion before evaluating</div>
                    <div>• Prephrase your answer</div>
                    <div>• Eliminate then confirm</div>
                    <div>• For "EXCEPT" - 4 work, 1 doesn't</div>
                    <div>• Negation test for Necessary</div>
                  </>
                ) : (
                  <>
                    <div>• Read for structure, not details</div>
                    <div>• Note author's tone</div>
                    <div>• Mark key transitions</div>
                    <div>• Main point = what all supports</div>
                    <div>• Go back to verify details</div>
                    <div>• Dual passage: ID each author's view</div>
                  </>
                )}
              </div>
            </div>

            {/* Common Traps Card */}
            <div className="rounded-sm border-2 border-red-200 bg-white dark:border-red-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 dark:bg-red-900/20">
                <AlertTriangle size={14} className="text-red-600 dark:text-red-400" />
                <h3 className="font-semibold text-xs text-red-700 dark:text-red-300">Universal Traps</h3>
              </div>
              <div className="p-3 text-[10px] text-red-700 dark:text-red-400 space-y-1">
                <div>• Extreme language (always, never)</div>
                <div>• True but irrelevant</div>
                <div>• Scope shifts</div>
                <div>• Confusing necessary/sufficient</div>
                <div>• Outside knowledge</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={cx(
          "mt-4 rounded-sm border-2 p-3 text-center",
          activeTab === "lr"
            ? "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20"
            : "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20"
        )}>
          <p className={cx(
            "text-xs font-medium",
            activeTab === "lr" ? "text-purple-700 dark:text-purple-300" : "text-blue-700 dark:text-blue-300"
          )}>
            Master high-frequency types first. They make up 70%+ of the test.
          </p>
        </div>
      </main>
    </div>
  );
}

function QuestionTypeCard({
  qt,
  color,
  getFrequencyColor
}: {
  qt: QuestionType;
  color: "purple" | "blue";
  getFrequencyColor: (freq: string) => string;
}) {
  const borderColor = color === "purple"
    ? "border-purple-200 dark:border-purple-800"
    : "border-blue-200 dark:border-blue-800";
  const headerBg = color === "purple"
    ? "bg-purple-50 dark:bg-purple-900/20"
    : "bg-blue-50 dark:bg-blue-900/20";
  const textColor = color === "purple"
    ? "text-purple-700 dark:text-purple-300"
    : "text-blue-700 dark:text-blue-300";

  return (
    <div className={cx("rounded-sm border-2 bg-white dark:bg-stone-900", borderColor)}>
      <div className={cx("flex items-center justify-between px-3 py-2", headerBg)}>
        <span className={cx("font-semibold text-xs", textColor)}>{qt.name}</span>
        <span className={cx("rounded px-1.5 py-0.5 text-[10px] font-semibold", getFrequencyColor(qt.frequency))}>
          {qt.frequency}
        </span>
      </div>
      <div className="p-2 space-y-2">
        <p className="text-[10px] text-stone-600 dark:text-stone-400">{qt.shortDesc}</p>

        {/* Key Identifiers */}
        <div className="rounded bg-stone-50 p-1.5 dark:bg-stone-800">
          <div className="flex items-center gap-1 mb-1">
            <Search size={10} className="text-stone-400" />
            <span className="text-[9px] font-semibold text-stone-500 uppercase">Look for</span>
          </div>
          <div className="text-[10px] text-stone-600 dark:text-stone-400">
            {qt.keyIdentifiers.slice(0, 2).map((id, i) => (
              <span key={i}>"{id}"{i < Math.min(qt.keyIdentifiers.length, 2) - 1 ? ", " : ""}</span>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-0.5">
          {qt.tips.slice(0, 2).map((tip, i) => (
            <div key={i} className="flex gap-1">
              <span className="text-green-500">•</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>

        {/* Traps */}
        <div className="text-[10px] text-red-600 dark:text-red-400 space-y-0.5">
          {qt.traps.slice(0, 2).map((trap, i) => (
            <div key={i} className="flex gap-1">
              <span>✗</span>
              <span>{trap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
