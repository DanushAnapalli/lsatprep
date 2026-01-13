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
  AlertTriangle,
  Calendar,
  GraduationCap,
} from "lucide-react";

export default function SyllabusPage() {
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
            <BookOpen className="h-5 w-5 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-lg font-bold text-[#1a365d] dark:text-amber-400">
              LSAT Syllabus
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
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">2 hrs</div>
            <div className="text-xs text-stone-500">Test Time</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">3</div>
            <div className="text-xs text-stone-500">Sections</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">120-180</div>
            <div className="text-xs text-stone-500">Score Range</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">~75</div>
            <div className="text-xs text-stone-500">Questions</div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Column 1: Logical Reasoning */}
          <div className="space-y-3">
            {/* LR Overview */}
            <div className="rounded-sm border-2 border-purple-200 bg-white dark:border-purple-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 dark:bg-purple-900/20">
                <Brain size={16} className="text-purple-600 dark:text-purple-400" />
                <h2 className="font-semibold text-sm text-purple-700 dark:text-purple-300">Logical Reasoning (LR)</h2>
              </div>
              <div className="p-3 space-y-3">
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-1 text-xs">
                  <div className="rounded bg-purple-50 p-2 text-center dark:bg-purple-900/20">
                    <div className="font-bold text-purple-700 dark:text-purple-400">~25</div>
                    <div className="text-purple-600 dark:text-purple-500 text-[10px]">Questions</div>
                  </div>
                  <div className="rounded bg-purple-50 p-2 text-center dark:bg-purple-900/20">
                    <div className="font-bold text-purple-700 dark:text-purple-400">35</div>
                    <div className="text-purple-600 dark:text-purple-500 text-[10px]">Minutes</div>
                  </div>
                  <div className="rounded bg-purple-50 p-2 text-center dark:bg-purple-900/20">
                    <div className="font-bold text-purple-700 dark:text-purple-400">~50%</div>
                    <div className="text-purple-600 dark:text-purple-500 text-[10px]">of Score</div>
                  </div>
                </div>
                <p className="text-[10px] text-stone-600 dark:text-stone-400">
                  Tests ability to analyze, evaluate, and complete arguments. Each question presents a short passage followed by a question about the reasoning.
                </p>
              </div>
            </div>

            {/* LR Question Types */}
            <div className="rounded-sm border-2 border-purple-200 bg-white dark:border-purple-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 dark:bg-purple-900/20">
                <Target size={14} className="text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold text-xs text-purple-700 dark:text-purple-300">LR Question Types</h3>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-2 gap-1 text-[10px] text-stone-600 dark:text-stone-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Strengthen/Weaken</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Assumptions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Flaw in Reasoning</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Method of Reasoning</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Main Point</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Inference/Must Be True</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Parallel Reasoning</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Point at Issue</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Principle</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Paradox/Resolve</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LR High Priority */}
            <div className="rounded-sm border border-green-200 bg-green-50 p-2 dark:border-green-800 dark:bg-green-900/20">
              <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">High-Frequency LR</div>
              <div className="text-[10px] text-green-600 dark:text-green-400 space-y-0.5">
                <div>• Strengthen/Weaken (~25%)</div>
                <div>• Flaw (~15%)</div>
                <div>• Assumption (~15%)</div>
                <div>• Inference (~15%)</div>
              </div>
            </div>
          </div>

          {/* Column 2: Reading Comprehension */}
          <div className="space-y-3">
            {/* RC Overview */}
            <div className="rounded-sm border-2 border-blue-200 bg-white dark:border-blue-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 dark:bg-blue-900/20">
                <FileText size={16} className="text-blue-600 dark:text-blue-400" />
                <h2 className="font-semibold text-sm text-blue-700 dark:text-blue-300">Reading Comprehension (RC)</h2>
              </div>
              <div className="p-3 space-y-3">
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-1 text-xs">
                  <div className="rounded bg-blue-50 p-2 text-center dark:bg-blue-900/20">
                    <div className="font-bold text-blue-700 dark:text-blue-400">~27</div>
                    <div className="text-blue-600 dark:text-blue-500 text-[10px]">Questions</div>
                  </div>
                  <div className="rounded bg-blue-50 p-2 text-center dark:bg-blue-900/20">
                    <div className="font-bold text-blue-700 dark:text-blue-400">35</div>
                    <div className="text-blue-600 dark:text-blue-500 text-[10px]">Minutes</div>
                  </div>
                  <div className="rounded bg-blue-50 p-2 text-center dark:bg-blue-900/20">
                    <div className="font-bold text-blue-700 dark:text-blue-400">~25%</div>
                    <div className="text-blue-600 dark:text-blue-500 text-[10px]">of Score</div>
                  </div>
                </div>
                <p className="text-[10px] text-stone-600 dark:text-stone-400">
                  Tests ability to read complex passages and answer questions about content, structure, and implications. Includes 4 passages with 5-8 questions each.
                </p>
              </div>
            </div>

            {/* RC Passage Topics */}
            <div className="rounded-sm border-2 border-blue-200 bg-white dark:border-blue-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 dark:bg-blue-900/20">
                <BookOpen size={14} className="text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-xs text-blue-700 dark:text-blue-300">Passage Topics</h3>
              </div>
              <div className="p-3">
                <div className="space-y-1 text-[10px] text-stone-600 dark:text-stone-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Law and Legal Theory</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Natural Sciences</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Social Sciences</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Humanities/Arts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Comparative Reading (dual passages)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RC Question Types */}
            <div className="rounded-sm border-2 border-blue-200 bg-white dark:border-blue-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 dark:bg-blue-900/20">
                <Target size={14} className="text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-xs text-blue-700 dark:text-blue-300">RC Question Types</h3>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-2 gap-1 text-[10px] text-stone-600 dark:text-stone-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Main Point/Purpose</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Author's Attitude</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Inference</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Specific Detail</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Function/Purpose</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Strengthen/Weaken</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Analogy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500 flex-shrink-0" />
                    <span>Application</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Study Plan & Important Info */}
          <div className="space-y-3">
            {/* Deprecated Logic Games Notice */}
            <div className="rounded-sm border-2 border-amber-200 bg-white dark:border-amber-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 dark:bg-amber-900/20">
                <AlertTriangle size={14} className="text-amber-600 dark:text-amber-400" />
                <h3 className="font-semibold text-xs text-amber-700 dark:text-amber-300">Important Change</h3>
              </div>
              <div className="p-3 text-[10px] text-amber-700 dark:text-amber-400">
                <p className="font-semibold mb-1">Logic Games Removed (Aug 2024)</p>
                <p className="text-stone-600 dark:text-stone-400">
                  The Analytical Reasoning section is no longer on the LSAT. It has been replaced with an additional Logical Reasoning section.
                </p>
              </div>
            </div>

            {/* Study Timeline */}
            <div className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-stone-100 px-3 py-2 dark:bg-stone-800">
                <Calendar size={14} className="text-stone-600 dark:text-stone-400" />
                <h3 className="font-semibold text-xs text-stone-700 dark:text-stone-300">Study Timeline</h3>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex gap-2">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1a365d] text-[10px] font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">Weeks 1-4: Foundation</div>
                    <div className="text-[10px] text-stone-500">Learn fundamentals, study question types</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1a365d] text-[10px] font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">Weeks 5-8: Practice</div>
                    <div className="text-[10px] text-stone-500">Timed practice, focus on weaknesses</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1a365d] text-[10px] font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">Weeks 9-12: Refinement</div>
                    <div className="text-[10px] text-stone-500">Full practice tests, refine timing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-stone-100 px-3 py-2 dark:bg-stone-800">
                <GraduationCap size={14} className="text-stone-600 dark:text-stone-400" />
                <h3 className="font-semibold text-xs text-stone-700 dark:text-stone-300">Score Percentiles</h3>
              </div>
              <div className="p-3 grid grid-cols-2 gap-2 text-[10px]">
                <div className="space-y-0.5">
                  <div className="flex justify-between">
                    <span className="text-stone-500">180</span>
                    <span className="font-semibold text-green-600">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">170</span>
                    <span className="font-semibold text-green-600">97.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">165</span>
                    <span className="font-semibold text-amber-600">92%</span>
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-between">
                    <span className="text-stone-500">160</span>
                    <span className="font-semibold text-amber-600">80.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">155</span>
                    <span className="font-semibold text-stone-600">63%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">150</span>
                    <span className="font-semibold text-stone-600">44%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Timing */}
            <div className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-stone-100 px-3 py-2 dark:bg-stone-800">
                <Clock size={14} className="text-stone-600 dark:text-stone-400" />
                <h3 className="font-semibold text-xs text-stone-700 dark:text-stone-300">Section Timing</h3>
              </div>
              <div className="p-3 space-y-1 text-[10px] text-stone-600 dark:text-stone-400">
                <div className="flex justify-between">
                  <span>LR Section</span>
                  <span className="font-semibold">35 min (~1:24/Q)</span>
                </div>
                <div className="flex justify-between">
                  <span>RC Section</span>
                  <span className="font-semibold">35 min (~8:45/passage)</span>
                </div>
                <div className="flex justify-between">
                  <span>LR Section 2</span>
                  <span className="font-semibold">35 min (~1:24/Q)</span>
                </div>
                <div className="flex justify-between border-t border-stone-200 pt-1 dark:border-stone-700">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-[#1a365d] dark:text-amber-400">~2 hours</span>
                </div>
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="rounded-sm border border-green-200 bg-green-50 p-2 dark:border-green-800 dark:bg-green-900/20">
              <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Key Focus Areas</div>
              <div className="text-[10px] text-green-600 dark:text-green-400 space-y-0.5">
                <div>• LR: Master Strengthen/Weaken/Flaw</div>
                <div>• RC: Active reading + passage mapping</div>
                <div>• Timing: Consistent practice under time</div>
                <div>• Review: Learn from every mistake</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/10 p-3 text-center dark:border-amber-500 dark:bg-amber-900/20">
          <p className="text-xs font-medium text-[#1a365d] dark:text-amber-400">
            Focus on high-frequency question types first. Quality practice beats quantity.
          </p>
        </div>
      </main>
    </div>
  );
}
