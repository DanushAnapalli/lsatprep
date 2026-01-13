"use client";

import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  BookOpen,
  Clock,
  Target,
  Brain,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function SyllabusPage() {
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
            LSAT Syllabus & Curriculum
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            A comprehensive overview of the LSAT exam structure and content areas.
          </p>
        </div>

        {/* Overview Card */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            <BookOpen className="text-[#1a365d] dark:text-amber-400" size={24} />
            Exam Overview
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
              <Clock className="mb-2 text-amber-500" size={20} />
              <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">2 hours</div>
              <div className="text-sm text-stone-500">Total test time</div>
            </div>
            <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
              <FileText className="mb-2 text-amber-500" size={20} />
              <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">3 sections</div>
              <div className="text-sm text-stone-500">Scored sections</div>
            </div>
            <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
              <Target className="mb-2 text-amber-500" size={20} />
              <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">120-180</div>
              <div className="text-sm text-stone-500">Score range</div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Logical Reasoning */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <Brain className="text-[#1a365d] dark:text-amber-400" size={24} />
              Logical Reasoning (LR)
            </h2>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-sm bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                ~25 questions
              </span>
              <span className="rounded-sm bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                35 minutes
              </span>
              <span className="rounded-sm bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                ~50% of score
              </span>
            </div>
            <p className="mb-4 text-stone-600 dark:text-stone-400">
              Tests your ability to analyze, evaluate, and complete arguments. Each question presents a short passage followed by a question about the reasoning in that passage.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">Question Types:</h3>
              <ul className="grid gap-2 md:grid-cols-2">
                {[
                  "Strengthen/Weaken",
                  "Assumption (Necessary/Sufficient)",
                  "Flaw in Reasoning",
                  "Method of Reasoning",
                  "Main Point/Conclusion",
                  "Inference/Must Be True",
                  "Parallel Reasoning",
                  "Point at Issue/Disagreement",
                  "Principle (Identify/Apply)",
                  "Paradox/Resolve",
                ].map((type) => (
                  <li key={type} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                    <CheckCircle size={14} className="text-green-500" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reading Comprehension */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <FileText className="text-[#1a365d] dark:text-amber-400" size={24} />
              Reading Comprehension (RC)
            </h2>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-sm bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                ~27 questions
              </span>
              <span className="rounded-sm bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                35 minutes
              </span>
              <span className="rounded-sm bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                ~25% of score
              </span>
            </div>
            <p className="mb-4 text-stone-600 dark:text-stone-400">
              Tests your ability to read complex passages and answer questions about their content, structure, and implications. Includes 4 passages with 5-8 questions each.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">Passage Topics:</h3>
              <ul className="grid gap-2 md:grid-cols-2">
                {[
                  "Law and Legal Theory",
                  "Natural Sciences",
                  "Social Sciences",
                  "Humanities/Arts",
                  "Comparative Reading (dual passages)",
                ].map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                    <CheckCircle size={14} className="text-green-500" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">Question Types:</h3>
              <ul className="grid gap-2 md:grid-cols-2">
                {[
                  "Main Point/Primary Purpose",
                  "Author's Attitude/Tone",
                  "Inference",
                  "Specific Detail",
                  "Function/Purpose of Detail",
                  "Strengthen/Weaken",
                  "Analogy",
                  "Application",
                ].map((type) => (
                  <li key={type} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                    <CheckCircle size={14} className="text-green-500" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logic Games (Historical) */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <Target className="text-[#1a365d] dark:text-amber-400" size={24} />
              Analytical Reasoning (Logic Games)
            </h2>
            <div className="mb-4 rounded-sm bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                <strong>Note:</strong> As of August 2024, the LSAT no longer includes the Analytical Reasoning section. This section has been replaced with an additional Logical Reasoning section.
              </p>
            </div>
            <p className="text-stone-600 dark:text-stone-400">
              Previously tested your ability to understand a structure of relationships and draw conclusions. The section included 4 games with 5-7 questions each, requiring you to make deductions based on given rules and constraints.
            </p>
          </div>
        </div>

        {/* Study Timeline */}
        <div className="mt-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            Recommended Study Timeline
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1a365d] text-sm font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                1
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100">Weeks 1-4: Foundation</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Learn the fundamentals of each section type. Study question types and basic strategies.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1a365d] text-sm font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                2
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100">Weeks 5-8: Practice</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Apply strategies with timed practice sections. Focus on weakness areas.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1a365d] text-sm font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                3
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100">Weeks 9-12: Refinement</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Take full practice tests. Review mistakes and refine timing strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
