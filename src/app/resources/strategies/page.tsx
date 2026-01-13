"use client";

import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Lightbulb,
  Clock,
  Brain,
  FileText,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Calendar,
  Timer,
  Target,
  Eye,
  Zap,
  Shield,
  BookOpen,
} from "lucide-react";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function StrategiesPage() {
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
            <Link
              href="/menu"
              className="flex items-center gap-2 text-stone-600 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium hidden sm:inline">Back</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-lg font-bold text-[#1a365d] dark:text-amber-400">
              Strategy Guide
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
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">35</div>
            <div className="text-xs text-stone-500">Min/Section</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">~25</div>
            <div className="text-xs text-stone-500">LR Questions</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">4</div>
            <div className="text-xs text-stone-500">RC Passages</div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-900">
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">1:24</div>
            <div className="text-xs text-stone-500">Per Question</div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Column 1: Time Management */}
          <div className="space-y-4">
            {/* LR Timing */}
            <div className="rounded-sm border-2 border-purple-200 bg-white dark:border-purple-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 dark:bg-purple-900/20">
                <Brain size={16} className="text-purple-600 dark:text-purple-400" />
                <h2 className="font-semibold text-sm text-purple-700 dark:text-purple-300">LR Timing</h2>
              </div>
              <div className="p-3 space-y-2">
                <div className="grid grid-cols-3 gap-1 text-xs">
                  <div className="rounded bg-green-50 p-2 text-center dark:bg-green-900/20">
                    <div className="font-bold text-green-700 dark:text-green-400">Q1-10</div>
                    <div className="text-green-600 dark:text-green-500">~1:00 ea</div>
                  </div>
                  <div className="rounded bg-amber-50 p-2 text-center dark:bg-amber-900/20">
                    <div className="font-bold text-amber-700 dark:text-amber-400">Q11-18</div>
                    <div className="text-amber-600 dark:text-amber-500">~1:30 ea</div>
                  </div>
                  <div className="rounded bg-red-50 p-2 text-center dark:bg-red-900/20">
                    <div className="font-bold text-red-700 dark:text-red-400">Q19-25</div>
                    <div className="text-red-600 dark:text-red-500">~1:45 ea</div>
                  </div>
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div>• Q10: ~25 min left</div>
                  <div>• Q15: ~18 min left</div>
                  <div>• Q20: ~10 min left</div>
                  <div>• Stuck &gt;1:30? Skip & mark</div>
                </div>
              </div>
            </div>

            {/* RC Timing */}
            <div className="rounded-sm border-2 border-blue-200 bg-white dark:border-blue-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 dark:bg-blue-900/20">
                <FileText size={16} className="text-blue-600 dark:text-blue-400" />
                <h2 className="font-semibold text-sm text-blue-700 dark:text-blue-300">RC Timing</h2>
              </div>
              <div className="p-3 space-y-2">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="rounded bg-blue-50 p-1.5 text-center dark:bg-blue-900/20">
                    <div className="font-bold text-blue-700 dark:text-blue-400">3-4m</div>
                    <div className="text-blue-600 dark:text-blue-500 text-[10px]">Read</div>
                  </div>
                  <div className="rounded bg-blue-50 p-1.5 text-center dark:bg-blue-900/20">
                    <div className="font-bold text-blue-700 dark:text-blue-400">~1m</div>
                    <div className="text-blue-600 dark:text-blue-500 text-[10px]">Per Q</div>
                  </div>
                  <div className="rounded bg-blue-50 p-1.5 text-center dark:bg-blue-900/20">
                    <div className="font-bold text-blue-700 dark:text-blue-400">+30s</div>
                    <div className="text-blue-600 dark:text-blue-500 text-[10px]">Refer</div>
                  </div>
                  <div className="rounded bg-blue-50 p-1.5 text-center dark:bg-blue-900/20">
                    <div className="font-bold text-blue-700 dark:text-blue-400">2m</div>
                    <div className="text-blue-600 dark:text-blue-500 text-[10px]">Buffer</div>
                  </div>
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div>• ~8.5 min per passage total</div>
                  <div>• Do strongest passages first</div>
                  <div>• Preview all passages (30 sec)</div>
                </div>
              </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-sm border border-green-200 bg-green-50 p-2 dark:border-green-800 dark:bg-green-900/20">
                <div className="flex items-center gap-1 mb-1">
                  <CheckCircle2 size={12} className="text-green-600" />
                  <span className="font-semibold text-xs text-green-700 dark:text-green-400">Do</span>
                </div>
                <ul className="text-[10px] text-green-700 dark:text-green-400 space-y-0.5">
                  <li>• Analog watch</li>
                  <li>• Check at intervals</li>
                  <li>• Timed practice</li>
                  <li>• Fill all bubbles</li>
                </ul>
              </div>
              <div className="rounded-sm border border-red-200 bg-red-50 p-2 dark:border-red-800 dark:bg-red-900/20">
                <div className="flex items-center gap-1 mb-1">
                  <XCircle size={12} className="text-red-600" />
                  <span className="font-semibold text-xs text-red-700 dark:text-red-400">Don't</span>
                </div>
                <ul className="text-[10px] text-red-700 dark:text-red-400 space-y-0.5">
                  <li>• 4+ min on one Q</li>
                  <li>• Clock every Q</li>
                  <li>• Rush early Qs</li>
                  <li>• Leave blanks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: LR & RC Strategies */}
          <div className="space-y-4">
            {/* LR Core Process */}
            <div className="rounded-sm border-2 border-purple-200 bg-white dark:border-purple-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 dark:bg-purple-900/20">
                <Target size={16} className="text-purple-600 dark:text-purple-400" />
                <h2 className="font-semibold text-sm text-purple-700 dark:text-purple-300">LR Core Process</h2>
              </div>
              <div className="p-3">
                <ol className="text-xs text-stone-700 dark:text-stone-300 space-y-1">
                  <li><span className="font-bold text-purple-600">1.</span> Read question stem FIRST</li>
                  <li><span className="font-bold text-purple-600">2.</span> Read stimulus actively</li>
                  <li><span className="font-bold text-purple-600">3.</span> Prephrase your answer</li>
                  <li><span className="font-bold text-purple-600">4.</span> Evaluate & eliminate</li>
                  <li><span className="font-bold text-purple-600">5.</span> Confirm selection</li>
                </ol>
              </div>
            </div>

            {/* LR Key Skills */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-sm border border-stone-200 bg-white p-2 dark:border-stone-700 dark:bg-stone-900">
                <div className="flex items-center gap-1 mb-1">
                  <Eye size={12} className="text-amber-500" />
                  <span className="font-semibold text-xs text-stone-700 dark:text-stone-300">Conclusion</span>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div><b>Indicators:</b> therefore, thus, so</div>
                  <div><b>Ask:</b> What to BELIEVE?</div>
                </div>
              </div>
              <div className="rounded-sm border border-stone-200 bg-white p-2 dark:border-stone-700 dark:bg-stone-900">
                <div className="flex items-center gap-1 mb-1">
                  <Lightbulb size={12} className="text-amber-500" />
                  <span className="font-semibold text-xs text-stone-700 dark:text-stone-300">Assumptions</span>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div><b>Gap:</b> New terms in conclusion</div>
                  <div><b>Test:</b> Negate to destroy</div>
                </div>
              </div>
              <div className="rounded-sm border border-stone-200 bg-white p-2 dark:border-stone-700 dark:bg-stone-900">
                <div className="flex items-center gap-1 mb-1">
                  <Zap size={12} className="text-amber-500" />
                  <span className="font-semibold text-xs text-stone-700 dark:text-stone-300">Strengthen</span>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div>Support assumption</div>
                  <div>Rule out alternatives</div>
                </div>
              </div>
              <div className="rounded-sm border border-stone-200 bg-white p-2 dark:border-stone-700 dark:bg-stone-900">
                <div className="flex items-center gap-1 mb-1">
                  <AlertTriangle size={12} className="text-amber-500" />
                  <span className="font-semibold text-xs text-stone-700 dark:text-stone-300">Weaken</span>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div>Attack assumption</div>
                  <div>Provide alternatives</div>
                </div>
              </div>
            </div>

            {/* RC Active Reading */}
            <div className="rounded-sm border-2 border-blue-200 bg-white dark:border-blue-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 dark:bg-blue-900/20">
                <BookOpen size={16} className="text-blue-600 dark:text-blue-400" />
                <h2 className="font-semibold text-sm text-blue-700 dark:text-blue-300">RC Active Reading</h2>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 dark:text-stone-400">
                  <div className="space-y-0.5">
                    <div>• What's the MAIN point?</div>
                    <div>• PURPOSE of paragraph?</div>
                    <div>• Author or other's view?</div>
                    <div>• TONE (critical/neutral)?</div>
                  </div>
                  <div className="space-y-0.5">
                    <div>• How relates to previous?</div>
                    <div>• KEY terms to note?</div>
                    <div>• What EVIDENCE?</div>
                    <div>• Where is it GOING?</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conditional Logic */}
            <div className="rounded-sm border-2 border-green-200 bg-white dark:border-green-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-green-50 px-3 py-2 dark:bg-green-900/20">
                <BookOpen size={16} className="text-green-600 dark:text-green-400" />
                <h2 className="font-semibold text-sm text-green-700 dark:text-green-300">Conditional Logic</h2>
              </div>
              <div className="p-3 grid grid-cols-2 gap-2 text-[10px]">
                <div className="text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div>"If A then B" → A → B</div>
                  <div>"All A are B" → A → B</div>
                  <div>"A only if B" → A → B</div>
                  <div>"Only A are B" → B → A</div>
                  <div>"A unless B" → ¬B → A</div>
                </div>
                <div className="text-stone-600 dark:text-stone-400 space-y-0.5">
                  <div><b className="text-green-600">✓</b> Contrapositive: ¬B → ¬A</div>
                  <div><b className="text-red-600">✗</b> Converse: B → A</div>
                  <div><b className="text-red-600">✗</b> Inverse: ¬A → ¬B</div>
                  <div><b className="text-green-600">✓</b> Chain: A→B, B→C = A→C</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Pitfalls, Mental Game, Test Day */}
          <div className="space-y-4">
            {/* Common Pitfalls */}
            <div className="rounded-sm border-2 border-red-200 bg-white dark:border-red-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 dark:bg-red-900/20">
                <AlertTriangle size={16} className="text-red-600 dark:text-red-400" />
                <h2 className="font-semibold text-sm text-red-700 dark:text-red-300">Common Pitfalls</h2>
              </div>
              <div className="p-3 grid grid-cols-2 gap-2">
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-1">
                  <div className="font-semibold text-red-600 dark:text-red-400">Extreme Language</div>
                  <div>always, never, all, none</div>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-1">
                  <div className="font-semibold text-red-600 dark:text-red-400">Scope Shifts</div>
                  <div>some→all, often→always</div>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-1">
                  <div className="font-semibold text-red-600 dark:text-red-400">Attractive Distractors</div>
                  <div>True but irrelevant</div>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-1">
                  <div className="font-semibold text-red-600 dark:text-red-400">Changing Answers</div>
                  <div>First instinct usually right</div>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-1">
                  <div className="font-semibold text-red-600 dark:text-red-400">Suff vs. Nec</div>
                  <div>Guarantees vs. Required</div>
                </div>
                <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-1">
                  <div className="font-semibold text-red-600 dark:text-red-400">Outside Knowledge</div>
                  <div>Use only passage info</div>
                </div>
              </div>
            </div>

            {/* Mental Game */}
            <div className="rounded-sm border-2 border-purple-200 bg-white dark:border-purple-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 dark:bg-purple-900/20">
                <Shield size={16} className="text-purple-600 dark:text-purple-400" />
                <h2 className="font-semibold text-sm text-purple-700 dark:text-purple-300">Mental Game</h2>
              </div>
              <div className="p-3 grid grid-cols-2 gap-2 text-[10px]">
                <div className="space-y-1">
                  <div className="font-semibold text-purple-600 dark:text-purple-400">Manage Anxiety</div>
                  <div className="text-stone-600 dark:text-stone-400">4-4-4 breathing</div>
                  <div className="text-stone-600 dark:text-stone-400">One Q at a time</div>
                  <div className="text-stone-600 dark:text-stone-400">"I've prepared"</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-purple-600 dark:text-purple-400">After Hard Q</div>
                  <div className="text-stone-600 dark:text-stone-400">Decide & move on</div>
                  <div className="text-stone-600 dark:text-stone-400">Reset mentally</div>
                  <div className="text-stone-600 dark:text-stone-400">1-2 misses = OK</div>
                </div>
              </div>
            </div>

            {/* Strategic Guessing */}
            <div className="rounded-sm border-2 border-amber-200 bg-white dark:border-amber-800 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 dark:bg-amber-900/20">
                <Target size={16} className="text-amber-600 dark:text-amber-400" />
                <h2 className="font-semibold text-sm text-amber-700 dark:text-amber-300">Guessing</h2>
              </div>
              <div className="p-3 text-xs">
                <div className="font-semibold text-amber-700 dark:text-amber-400 mb-1">Never Leave Blanks!</div>
                <div className="text-stone-600 dark:text-stone-400 space-y-0.5 text-[10px]">
                  <div>• No penalty for wrong answers</div>
                  <div>• Blank = 0%, Guess = 20%</div>
                  <div>• Eliminate extremes first</div>
                  <div>• Last 2 min: fill ALL bubbles</div>
                </div>
              </div>
            </div>

            {/* Test Day */}
            <div className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center gap-2 bg-stone-100 px-3 py-2 dark:bg-stone-800">
                <Calendar size={16} className="text-stone-600 dark:text-stone-400" />
                <h2 className="font-semibold text-sm text-stone-700 dark:text-stone-300">Test Day</h2>
              </div>
              <div className="p-3 grid grid-cols-3 gap-2 text-[10px]">
                <div className="space-y-0.5">
                  <div className="font-semibold text-stone-700 dark:text-stone-300">Week Before</div>
                  <div className="text-stone-500">• Final PT early</div>
                  <div className="text-stone-500">• Fix sleep schedule</div>
                  <div className="text-stone-500">• Confirm location</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-semibold text-stone-700 dark:text-stone-300">Night Before</div>
                  <div className="text-stone-500">• 7-8 hrs sleep</div>
                  <div className="text-stone-500">• Pack bag</div>
                  <div className="text-stone-500">• Light review only</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-semibold text-stone-700 dark:text-stone-300">Morning</div>
                  <div className="text-stone-500">• Eat breakfast</div>
                  <div className="text-stone-500">• Arrive 30+ min early</div>
                  <div className="text-stone-500">• Brief warm-up</div>
                </div>
              </div>
            </div>

            {/* Bring Checklist */}
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-2 dark:border-stone-700 dark:bg-stone-800">
              <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Bring to Test</div>
              <div className="grid grid-cols-2 gap-1 text-[10px] text-stone-600 dark:text-stone-400">
                <div>✓ Photo ID</div>
                <div>✓ Admission ticket</div>
                <div>✓ #2 pencils</div>
                <div>✓ Analog watch</div>
                <div>✓ Eraser</div>
                <div>✓ Snacks (break)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Reminder */}
        <div className="mt-4 rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/10 p-3 text-center dark:border-amber-500 dark:bg-amber-900/20">
          <p className="text-sm font-medium text-[#1a365d] dark:text-amber-400">
            Trust your training. One question at a time. You've got this.
          </p>
        </div>
      </main>
    </div>
  );
}
