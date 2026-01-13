"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, ArrowLeft, BookMarked, Search, Brain, FileText, BookOpen, AlertTriangle, Lightbulb, Layers } from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: "general" | "lr" | "rc" | "logic" | "flaws" | "strategy";
}

// Condensed glossary with key terms per category
const glossaryTerms: GlossaryTerm[] = [
  // GENERAL TERMS
  { term: "Stimulus", definition: "The passage or argument presented in a question that you must analyze before answering.", category: "general" },
  { term: "Question Stem", definition: "The question asked about the stimulus, telling you what type of question you're dealing with.", category: "general" },
  { term: "Distractor", definition: "An incorrect answer choice designed to seem appealing by exploiting common misunderstandings.", category: "general" },
  { term: "Prephrasing", definition: "Predicting what the correct answer should say before looking at the answer choices.", category: "general" },
  { term: "Logical Reasoning (LR)", definition: "Section testing your ability to analyze, evaluate, and complete arguments. 24-26 questions in 35 minutes.", category: "general" },
  { term: "Reading Comprehension (RC)", definition: "Section with four passage sets testing your ability to understand and analyze complex texts. 35 minutes.", category: "general" },
  { term: "Scale", definition: "The LSAT scoring system ranging from 120 to 180, converting raw score to standardized score.", category: "general" },
  { term: "Percentile", definition: "Ranking showing what percentage of test-takers scored below you. 170 ≈ 97th percentile.", category: "general" },
  { term: "Out of Scope", definition: "An answer bringing in information not addressed in the stimulus.", category: "general" },
  { term: "Trap Answer", definition: "Wrong answer designed to catch test-takers who haven't read carefully.", category: "general" },

  // LOGICAL REASONING TERMS
  { term: "Argument", definition: "A set of statements where one (conclusion) is claimed to be supported by others (premises).", category: "lr" },
  { term: "Conclusion", definition: "The main point an argument tries to establish. What the author wants you to believe.", category: "lr" },
  { term: "Premise", definition: "Statement offered as evidence or support for the conclusion. Taken as true for the argument.", category: "lr" },
  { term: "Assumption", definition: "Unstated premise the argument relies on. The gap between evidence and conclusion.", category: "lr" },
  { term: "Necessary Assumption", definition: "Must be true for the argument to work. If false, the argument fails completely.", category: "lr" },
  { term: "Sufficient Assumption", definition: "If true, guarantees the conclusion. Fills the logical gap completely.", category: "lr" },
  { term: "Gap", definition: "The logical space between what premises establish and what the conclusion claims.", category: "lr" },
  { term: "Strengthen", definition: "Provide additional support making a conclusion more likely to be true.", category: "lr" },
  { term: "Weaken", definition: "Provide information making a conclusion less likely to be true.", category: "lr" },
  { term: "Inference", definition: "A conclusion logically derived from given information. What must be true.", category: "lr" },
  { term: "Flaw", definition: "A logical error or weakness in an argument's reasoning.", category: "lr" },
  { term: "Parallel Reasoning", definition: "Find an argument with the same logical structure regardless of subject matter.", category: "lr" },
  { term: "Method of Reasoning", definition: "Describe HOW the argument proceeds - what technique the author uses.", category: "lr" },
  { term: "Point at Issue", definition: "In dialogues, identify what specific claim the speakers disagree about.", category: "lr" },
  { term: "Conclusion Indicator", definition: "Words signaling conclusion: therefore, thus, hence, so, consequently.", category: "lr" },
  { term: "Premise Indicator", definition: "Words signaling premise: because, since, for, given that, as shown by.", category: "lr" },

  // READING COMPREHENSION TERMS
  { term: "Passage", definition: "The text you read and answer questions about. Usually 55-65 lines each.", category: "rc" },
  { term: "Main Point", definition: "The central thesis or primary argument of a passage. What the author most wants to convey.", category: "rc" },
  { term: "Primary Purpose", definition: "The author's main goal: to argue, explain, compare, critique, describe, or analyze.", category: "rc" },
  { term: "Author's Tone", definition: "The author's attitude toward the subject: critical, supportive, skeptical, neutral, etc.", category: "rc" },
  { term: "Comparative Reading", definition: "Two shorter passages on related topics that must be compared.", category: "rc" },
  { term: "Function Question", definition: "Ask WHY the author included a specific detail - what purpose does it serve?", category: "rc" },
  { term: "Viewpoint", definition: "A perspective expressed in the passage, either by the author or others discussed.", category: "rc" },
  { term: "Detail Question", definition: "Ask about specific information stated directly in the passage.", category: "rc" },
  { term: "Global Question", definition: "About the passage as a whole: main point, primary purpose, or organization.", category: "rc" },
  { term: "Local Question", definition: "About a specific part of the passage - a paragraph, sentence, or phrase.", category: "rc" },
  { term: "Passage Mapping", definition: "Making brief notes about each paragraph's main point and function as you read.", category: "rc" },
  { term: "Active Reading", definition: "Engaging with the text - identifying main point, noting viewpoints, understanding structure.", category: "rc" },

  // FORMAL LOGIC TERMS
  { term: "Conditional Statement", definition: "If-then statement: \"If A, then B\" where A is sufficient and B is necessary.", category: "logic" },
  { term: "Sufficient Condition", definition: "The \"if\" part. When present, it guarantees the necessary condition. A → B", category: "logic" },
  { term: "Necessary Condition", definition: "The \"then\" part. Must be present when sufficient condition occurs.", category: "logic" },
  { term: "Contrapositive", definition: "Logically equivalent: \"If A then B\" becomes \"If not B then not A.\"", category: "logic" },
  { term: "Converse", definition: "NOT equivalent: reversing \"If A then B\" to \"If B then A.\" May be false.", category: "logic" },
  { term: "Negation", definition: "The opposite. \"All dogs bark\" negates to \"Some dogs do not bark\" (not \"None\").", category: "logic" },
  { term: "Quantifiers", definition: "All (100%), Most (>50%), Some (≥1), None (0%). Critical for logic questions.", category: "logic" },
  { term: "Valid", definition: "Conclusion follows logically from premises. If premises true, conclusion must be true.", category: "logic" },
  { term: "Biconditional", definition: "\"A if and only if B\" - works both ways. Both necessary and sufficient for each other.", category: "logic" },
  { term: "Unless", definition: "Introduces necessary condition: \"A unless B\" = \"If not B, then A.\"", category: "logic" },
  { term: "Only If", definition: "Introduces necessary condition: \"A only if B\" = \"If A, then B.\"", category: "logic" },
  { term: "Modus Ponens", definition: "Valid form: If P then Q; P is true; therefore Q is true.", category: "logic" },
  { term: "Modus Tollens", definition: "Valid form: If P then Q; Q is false; therefore P is false.", category: "logic" },

  // COMMON FLAWS
  { term: "Ad Hominem", definition: "Attacking the person making an argument rather than addressing the argument itself.", category: "flaws" },
  { term: "Circular Reasoning", definition: "Using the conclusion as a premise; assuming what you're trying to prove.", category: "flaws" },
  { term: "False Dichotomy", definition: "Presenting only two options when more exist.", category: "flaws" },
  { term: "Equivocation", definition: "Using a word with multiple meanings in different senses within the same argument.", category: "flaws" },
  { term: "Hasty Generalization", definition: "Drawing a broad conclusion from insufficient or unrepresentative evidence.", category: "flaws" },
  { term: "Correlation vs. Causation", definition: "Assuming that because two things correlate, one causes the other.", category: "flaws" },
  { term: "Post Hoc", definition: "Assuming that because B followed A, A caused B. Sequence ≠ causation.", category: "flaws" },
  { term: "Appeal to Authority", definition: "Using authority's opinion when their expertise isn't relevant to the claim.", category: "flaws" },
  { term: "Straw Man", definition: "Misrepresenting someone's argument to make it easier to attack.", category: "flaws" },
  { term: "Slippery Slope", definition: "Arguing one event inevitably leads to bad chain of events without justification.", category: "flaws" },
  { term: "Part-to-Whole", definition: "Assuming what's true of parts is true of the whole.", category: "flaws" },
  { term: "Whole-to-Part", definition: "Assuming what's true of the whole is true of each part.", category: "flaws" },
  { term: "Affirming the Consequent", definition: "Invalid: If P then Q; Q is true; therefore P is true.", category: "flaws" },
  { term: "Denying the Antecedent", definition: "Invalid: If P then Q; P is false; therefore Q is false.", category: "flaws" },

  // STRATEGY TERMS
  { term: "Process of Elimination", definition: "Eliminating wrong answers to find the correct one.", category: "strategy" },
  { term: "Time Management", definition: "Allocating 35 minutes per section effectively. Know when to move on.", category: "strategy" },
  { term: "Pacing", definition: "LR: ~1.4 min/question. RC: ~8-9 min/passage including questions.", category: "strategy" },
  { term: "Skipping", definition: "Move past difficult questions to answer easier ones first, then return.", category: "strategy" },
  { term: "Contender/Loser", definition: "Sort answers into \"might be right\" and \"definitely wrong\" then compare contenders.", category: "strategy" },
  { term: "Blind Review", definition: "Retake section without time limit after timed attempt, before checking answers.", category: "strategy" },
  { term: "Wrong Answer Journal", definition: "Log of missed questions with analysis of why you missed each one.", category: "strategy" },
  { term: "Low-Hanging Fruit", definition: "Easier questions you can answer quickly. Get these points first.", category: "strategy" },
  { term: "Flagging", definition: "Mark questions for review. Return to flagged questions before time expires.", category: "strategy" },
];

const categoryConfig = {
  general: {
    label: "General Terms",
    icon: Layers,
    color: "bg-stone-100 dark:bg-stone-800",
    accent: "text-stone-600 dark:text-stone-400",
    border: "border-stone-200 dark:border-stone-700"
  },
  lr: {
    label: "Logical Reasoning",
    icon: Brain,
    color: "bg-purple-50 dark:bg-purple-900/20",
    accent: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800"
  },
  rc: {
    label: "Reading Comprehension",
    icon: FileText,
    color: "bg-blue-50 dark:bg-blue-900/20",
    accent: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800"
  },
  logic: {
    label: "Formal Logic",
    icon: BookOpen,
    color: "bg-green-50 dark:bg-green-900/20",
    accent: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800"
  },
  flaws: {
    label: "Common Flaws",
    icon: AlertTriangle,
    color: "bg-red-50 dark:bg-red-900/20",
    accent: "text-red-600 dark:text-red-400",
    border: "border-red-200 dark:border-red-800"
  },
  strategy: {
    label: "Strategy",
    icon: Lightbulb,
    color: "bg-amber-50 dark:bg-amber-900/20",
    accent: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800"
  },
};

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const getTermsByCategory = (category: GlossaryTerm["category"]) => {
    return glossaryTerms.filter((t) => t.category === category);
  };

  const filteredTerms = searchQuery
    ? glossaryTerms.filter(
        (t) =>
          t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.definition.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const categories: (keyof typeof categoryConfig)[] = ["general", "lr", "rc", "logic", "flaws", "strategy"];

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <HamburgerMenu />
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-stone-600 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium hidden sm:inline">Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <BookMarked className="h-5 w-5 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-lg font-bold text-[#1a365d] dark:text-amber-400">
              LSAT Glossary
            </span>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-[#1a365d] dark:text-amber-400" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-4">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-sm border-2 border-stone-200 bg-white py-2 pl-10 pr-4 text-stone-900 placeholder-stone-400 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-amber-500"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && filteredTerms && (
          <div className="mb-4 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-3 text-sm font-semibold text-stone-500">
              {filteredTerms.length} results for "{searchQuery}"
            </h2>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {filteredTerms.slice(0, 12).map((term) => (
                <div key={term.term} className="rounded-sm bg-stone-50 p-2 dark:bg-stone-800">
                  <div className="font-medium text-stone-900 dark:text-stone-100 text-sm">{term.term}</div>
                  <div className="text-xs text-stone-500 line-clamp-2">{term.definition}</div>
                </div>
              ))}
            </div>
            {filteredTerms.length > 12 && (
              <p className="mt-2 text-xs text-stone-400">+{filteredTerms.length - 12} more results</p>
            )}
          </div>
        )}

        {/* Dashboard Grid */}
        {!searchQuery && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const config = categoryConfig[cat];
              const terms = getTermsByCategory(cat);
              const Icon = config.icon;

              return (
                <div
                  key={cat}
                  className={cx(
                    "rounded-sm border-2 overflow-hidden",
                    config.border
                  )}
                >
                  {/* Category Header */}
                  <div className={cx("px-3 py-2 flex items-center gap-2", config.color)}>
                    <Icon size={16} className={config.accent} />
                    <h2 className={cx("font-semibold text-sm", config.accent)}>
                      {config.label}
                    </h2>
                    <span className="ml-auto text-xs text-stone-400">
                      {terms.length} terms
                    </span>
                  </div>

                  {/* Terms List */}
                  <div className="bg-white dark:bg-stone-900 max-h-[400px] overflow-y-auto">
                    {terms.map((term, idx) => (
                      <div
                        key={term.term}
                        className={cx(
                          "px-3 py-2",
                          idx !== terms.length - 1 && "border-b border-stone-100 dark:border-stone-800"
                        )}
                      >
                        <div className="font-medium text-stone-900 dark:text-stone-100 text-sm">
                          {term.term}
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                          {term.definition}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Reference Footer */}
        <div className="mt-4 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <h3 className="mb-3 font-semibold text-stone-900 dark:text-stone-100 text-sm">
            Quick Reference: Key Formulas
          </h3>
          <div className="grid gap-3 md:grid-cols-3 text-xs">
            <div className="rounded-sm bg-green-50 p-2 dark:bg-green-900/20">
              <div className="font-semibold text-green-700 dark:text-green-400 mb-1">Conditionals</div>
              <div className="text-green-600 dark:text-green-500 space-y-0.5">
                <div>If A → B (A sufficient, B necessary)</div>
                <div>Contrapositive: ¬B → ¬A ✓</div>
                <div>Converse: B → A ✗</div>
              </div>
            </div>
            <div className="rounded-sm bg-amber-50 p-2 dark:bg-amber-900/20">
              <div className="font-semibold text-amber-700 dark:text-amber-400 mb-1">Quantifiers</div>
              <div className="text-amber-600 dark:text-amber-500 space-y-0.5">
                <div>All = 100% • Most = &gt;50%</div>
                <div>Some = ≥1 • None = 0%</div>
                <div>Negate "All" → "Some...not"</div>
              </div>
            </div>
            <div className="rounded-sm bg-blue-50 p-2 dark:bg-blue-900/20">
              <div className="font-semibold text-blue-700 dark:text-blue-400 mb-1">Timing</div>
              <div className="text-blue-600 dark:text-blue-500 space-y-0.5">
                <div>LR: ~1:24/question (35 min)</div>
                <div>RC: ~8.5 min/passage</div>
                <div>Skip if stuck &gt;1:30</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
