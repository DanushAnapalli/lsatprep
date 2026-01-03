"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Target,
  Zap,
  CheckCircle2,
  XCircle,
  Timer,
  Battery,
  ChevronRight,
  Sparkles,
  Activity,
  Info,
  X,
  ArrowRight,
} from "lucide-react";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================
// MOCK DATA - Realistic sample data
// ============================================

const MOCK_SUMMARY = {
  overallAccuracy: 76,
  projectedScore: 165,
  avgTimePerQuestion: 78,
  scoreTrend: "improving" as const,
};

const MOCK_SCORE_TREND = {
  projectedScore: 165,
  trends: [
    { score: 152, date: "Dec 1" },
    { score: 155, date: "Dec 5" },
    { score: 153, date: "Dec 10" },
    { score: 158, date: "Dec 15" },
    { score: 160, date: "Dec 20" },
    { score: 159, date: "Dec 25" },
    { score: 163, date: "Dec 28" },
    { score: 165, date: "Jan 1" },
  ],
};

const MOCK_STRENGTHS = [
  { type: "main-conclusion", displayName: "Main Conclusion", accuracy: 92, totalQuestions: 24 },
  { type: "necessary-assumption", displayName: "Necessary Assumption", accuracy: 88, totalQuestions: 31 },
  { type: "inference", displayName: "Inference", accuracy: 85, totalQuestions: 28 },
];

const MOCK_WEAKNESSES = [
  { type: "parallel-reasoning", displayName: "Parallel Reasoning", accuracy: 45, totalQuestions: 18 },
  { type: "method-of-reasoning", displayName: "Method of Reasoning", accuracy: 52, totalQuestions: 22 },
  { type: "parallel-flaw", displayName: "Parallel Flaw", accuracy: 58, totalQuestions: 15 },
];

const MOCK_TIME_ANALYTICS = {
  avgTimePerQuestion: 78,
  bySection: {
    logicalReasoning: {
      avgTimePerQuestion: 72,
      totalQuestions: 156,
      questionsOnPace: 98,
    },
    readingComprehension: {
      avgTimePerQuestion: 88,
      totalQuestions: 84,
      questionsOnPace: 52,
    },
  },
};

const MOCK_ERROR_PATTERNS = [
  {
    patternName: "Answer Position Bias",
    frequency: 38,
    description: "You chose \"B\" in 38% of your wrong answers.",
    recommendation: "Be aware of your bias toward B. Make sure you're evaluating each answer choice equally.",
  },
  {
    patternName: "Near-Miss Pattern",
    frequency: 45,
    description: "45% of your wrong answers were adjacent to the correct answer.",
    recommendation: "You're good at eliminating obviously wrong answers. Focus on distinguishing between the final 2 contenders more carefully.",
  },
];

const MOCK_FATIGUE = {
  firstHalfAccuracy: 79,
  secondHalfAccuracy: 72,
  hasFatigueIssue: true,
  performanceDrop: 7,
};

const MOCK_PROGRESS = {
  completedTests: Array(8).fill(null),
  lrAccuracy: 78,
  rcAccuracy: 74,
};

// Mock YouTube Videos based on weaknesses
const MOCK_VIDEOS = [
  {
    url: "https://www.youtube.com/watch?v=NJc9__hypvg",
    title: "Parallel Reasoning Questions | LSAT Strategy",
    channel: "7Sage LSAT",
    duration: "12:48",
    questionType: "parallel-reasoning",
    displayName: "Parallel Reasoning",
  },
  {
    url: "https://www.youtube.com/watch?v=6_LtHWRR_Rk",
    title: "Method of Reasoning Questions | LSAT",
    channel: "LSAT Demon",
    duration: "13:15",
    questionType: "method-of-reasoning",
    displayName: "Method of Reasoning",
  },
  {
    url: "https://www.youtube.com/watch?v=AwMvRf5Ivq8",
    title: "Flaw Questions | LSAT Logical Reasoning",
    channel: "LSAT Demon",
    duration: "15:20",
    questionType: "flaw",
    displayName: "Parallel Flaw",
  },
];

// LSAT pace constants
const LSAT_PACE_LR = 85;
const LSAT_PACE_RC = 100;
const LSAT_AMBER_THRESHOLD_LR = 100;
const LSAT_AMBER_THRESHOLD_RC = 120;

// ============================================
// INFO TOOLTIP COMPONENT
// ============================================

const ANALYTICS_INFO: Record<string, { title: string; description: string }> = {
  journey: {
    title: "Your LSAT Journey",
    description: "A personalized summary of your LSAT prep progress. Shows your overall accuracy, score trend direction, mastered question types (80%+ accuracy), and areas that need more focus."
  },
  performance: {
    title: "Performance Snapshot",
    description: "Key metrics at a glance: your projected LSAT score based on recent performance, overall accuracy percentage, and average time per question. The graph shows your score trend over your last 8 tests."
  },
  strengthsWeaknesses: {
    title: "Strengths & Weaknesses",
    description: "Identifies your top 3 strongest and weakest question types based on accuracy. Focus your study time on weak areas to maximize score improvement."
  },
  timeAnalytics: {
    title: "Time Analytics",
    description: "Tracks your pacing against LSAT standards. Target pace: 1:25 for Logical Reasoning, 1:40 for Reading Comprehension."
  },
  errorPatterns: {
    title: "Error Patterns",
    description: "AI-detected patterns in your mistakes. Identifies recurring issues like rushing through questions or struggling with specific reasoning types."
  },
  fatigue: {
    title: "Endurance & Stats",
    description: "Analyzes whether your performance drops during the second half of sections. Also shows total tests completed and accuracy breakdown."
  }
};

function InfoTooltip({ infoKey }: { infoKey: keyof typeof ANALYTICS_INFO }) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const info = ANALYTICS_INFO[infoKey];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={tooltipRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full text-stone-400 hover:text-stone-600 hover:bg-stone-100 dark:text-stone-500 dark:hover:text-stone-300 dark:hover:bg-stone-800 transition-colors"
        aria-label={`Information about ${info.title}`}
      >
        <Info size={14} />
      </button>
      {isOpen && (
        <div className="absolute z-50 left-0 top-full mt-2 w-72 rounded-sm border-2 border-stone-200 bg-white p-4 shadow-lg dark:border-stone-700 dark:bg-stone-800">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{info.title}</h4>
            <button type="button" onClick={() => setIsOpen(false)} className="p-0.5 rounded text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
              <X size={14} />
            </button>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{info.description}</p>
        </div>
      )}
    </div>
  );
}

// ============================================
// ANIMATION UTILITIES
// ============================================

function AnimatedCounter({ value, suffix = "", duration = 1500, decimals = 0, delay = 0 }: { value: number; suffix?: string; duration?: number; decimals?: number; delay?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!shouldAnimate) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * easeOut);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [shouldAnimate, value, duration]);

  return <span>{displayValue.toFixed(decimals)}{suffix}</span>;
}

function FadeInStagger({ children, index = 0, baseDelay = 0, staggerDelay = 100 }: { children: React.ReactNode; index?: number; baseDelay?: number; staggerDelay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), baseDelay + index * staggerDelay);
    return () => clearTimeout(timeout);
  }, [index, baseDelay, staggerDelay]);

  return (
    <div className={cx("transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
      {children}
    </div>
  );
}

// ============================================
// SCORE TREND GRAPH
// ============================================

function ScoreTrendGraph({ data }: { data: { score: number; date: string }[] }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const duration = 1500;
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const p = Math.min(elapsed / duration, 1);
        setProgress(1 - Math.pow(1 - p, 3));
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  if (data.length < 2) return null;

  const scores = data.map(d => d.score);
  const minScore = Math.min(...scores) - 5;
  const maxScore = Math.max(...scores) + 5;
  const range = maxScore - minScore || 1;
  const latestScore = scores[scores.length - 1];
  const previousScore = scores[scores.length - 2];
  const scoreDiff = latestScore - previousScore;

  const width = 320, height = 100, paddingX = 20, paddingY = 15, paddingBottom = 25;
  const getX = (i: number) => paddingX + (i / (data.length - 1)) * (width - paddingX * 2);
  const getY = (score: number) => paddingY + (1 - (score - minScore) / range) * (height - paddingY - paddingBottom);
  const points = data.map((d, i) => ({ x: getX(i), y: getY(d.score), score: d.score, date: d.date }));

  const createSmoothPath = () => {
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i], next = points[i + 1], tension = 0.3;
      path += ` C ${current.x + (next.x - current.x) * tension} ${current.y}, ${next.x - (next.x - current.x) * tension} ${next.y}, ${next.x} ${next.y}`;
    }
    return path;
  };

  const createAreaPath = () => {
    const linePath = createSmoothPath();
    return `${linePath} L ${points[points.length - 1].x} ${height - paddingBottom + 5} L ${points[0].x} ${height - paddingBottom + 5} Z`;
  };

  return (
    <div className="space-y-1">
      <div className="relative rounded-xl bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800/60 dark:to-stone-800/30 p-3 overflow-hidden">
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-white dark:bg-stone-900 rounded-lg px-3 py-1.5 shadow-sm border border-stone-200 dark:border-stone-700">
            <div className="text-xl font-bold tabular-nums text-stone-900 dark:text-stone-100">{latestScore}</div>
            <div className={cx("text-xs font-semibold flex items-center justify-center gap-1", scoreDiff > 0 ? "text-emerald-600" : scoreDiff < 0 ? "text-rose-600" : "text-stone-500")}>
              {scoreDiff > 0 ? <TrendingUp size={12} /> : scoreDiff < 0 ? <TrendingDown size={12} /> : null}
              {scoreDiff > 0 ? "+" : ""}{scoreDiff} pts
            </div>
          </div>
        </div>
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-28" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="[stop-color:#1a365d] dark:[stop-color:#fbbf24]" stopOpacity="0.3" />
              <stop offset="100%" className="[stop-color:#1a365d] dark:[stop-color:#fbbf24]" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="[stop-color:#2d4a7c] dark:[stop-color:#f59e0b]" />
              <stop offset="100%" className="[stop-color:#1a365d] dark:[stop-color:#fbbf24]" />
            </linearGradient>
          </defs>
          <path d={createAreaPath()} fill="url(#areaGradient)" style={{ opacity: progress }} />
          <path d={createSmoothPath()} fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" style={{ strokeDasharray: 1000, strokeDashoffset: 1000 * (1 - progress) }} />
          {points.map((point, i) => (
            <circle key={i} cx={point.x} cy={point.y} r={i === points.length - 1 ? 5 : 3} className="fill-[#1a365d] dark:fill-amber-400" style={{ opacity: progress > i / points.length ? 1 : 0, transition: "opacity 0.4s", transitionDelay: `${i * 80}ms` }} />
          ))}
          {points.filter((_, i) => i === 0 || i === points.length - 1).map((point, i) => (
            <text key={i} x={point.x} y={height - 8} textAnchor="middle" className="fill-stone-400" style={{ fontSize: "9px" }}>{point.date}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ============================================
// CARD COMPONENTS
// ============================================

function JourneyCard() {
  const masteredTypes = MOCK_STRENGTHS.filter(s => s.accuracy >= 80).slice(0, 3);
  const focusTypes = MOCK_WEAKNESSES.slice(0, 2);
  const topPattern = MOCK_ERROR_PATTERNS[0];

  return (
    <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={18} className="text-[#1a365d] dark:text-amber-400" />
        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Your LSAT Journey</h3>
        <InfoTooltip infoKey="journey" />
      </div>
      <ul className="space-y-3 text-sm">
        <FadeInStagger index={0} baseDelay={100}>
          <li className="flex items-start gap-2">
            <span className="text-stone-400 mt-0.5">•</span>
            <span className="text-stone-700 dark:text-stone-300">Overall accuracy: <span className="font-bold text-stone-900 dark:text-stone-100"><AnimatedCounter value={MOCK_SUMMARY.overallAccuracy} suffix="%" /></span></span>
          </li>
        </FadeInStagger>
        <FadeInStagger index={1} baseDelay={100}>
          <li className="flex items-start gap-2">
            <span className="text-stone-400 mt-0.5">•</span>
            <span className="text-stone-700 dark:text-stone-300"><span className="text-emerald-600 dark:text-emerald-400 font-semibold">Improving trend</span> over recent sessions</span>
          </li>
        </FadeInStagger>
        {masteredTypes.length > 0 && (
          <FadeInStagger index={2} baseDelay={100}>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700 dark:text-stone-300"><span className="font-semibold text-emerald-600 dark:text-emerald-400">Mastered:</span> {masteredTypes.map(t => t.displayName).join(", ")}</span>
            </li>
          </FadeInStagger>
        )}
        {topPattern && (
          <FadeInStagger index={3} baseDelay={100}>
            <li className="flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700 dark:text-stone-300"><span className="font-semibold text-amber-600 dark:text-amber-400">Watch out:</span> {topPattern.patternName}</span>
            </li>
          </FadeInStagger>
        )}
      </ul>
      {focusTypes.length > 0 && (
        <FadeInStagger index={4} baseDelay={200}>
          <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700">
            <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">Current Focus</div>
            <div className="flex flex-wrap gap-2">
              {focusTypes.map(w => (
                <span key={w.type} className="px-2.5 py-1 rounded-sm text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">{w.displayName}</span>
              ))}
            </div>
          </div>
        </FadeInStagger>
      )}
    </div>
  );
}

function PerformanceSnapshot() {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Activity size={18} className="text-[#1a365d] dark:text-amber-400" />
        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Performance Snapshot</h3>
        <InfoTooltip infoKey="performance" />
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <FadeInStagger index={0} baseDelay={100}>
          <div className="text-center p-3 rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/5">
            <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400"><AnimatedCounter value={MOCK_SCORE_TREND.projectedScore} duration={2000} /></div>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Projected</div>
          </div>
        </FadeInStagger>
        <FadeInStagger index={1} baseDelay={100}>
          <div className="text-center p-3 rounded-sm border border-stone-200 dark:border-stone-700">
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100"><AnimatedCounter value={MOCK_SUMMARY.overallAccuracy} suffix="%" /></div>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Accuracy</div>
          </div>
        </FadeInStagger>
        <FadeInStagger index={2} baseDelay={100}>
          <div className="text-center p-3 rounded-sm border border-stone-200 dark:border-stone-700">
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">{formatTime(MOCK_SUMMARY.avgTimePerQuestion)}</div>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Avg Time</div>
          </div>
        </FadeInStagger>
      </div>
      <div className="mt-auto">
        <ScoreTrendGraph data={MOCK_SCORE_TREND.trends} />
      </div>
    </div>
  );
}

function StrengthsWeaknessesCard() {
  return (
    <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Target size={18} className="text-[#1a365d] dark:text-amber-400" />
        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Strengths & Weaknesses</h3>
        <InfoTooltip infoKey="strengthsWeaknesses" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide"><CheckCircle2 size={14} />Top Strengths</h4>
          <div className="space-y-2">
            {MOCK_STRENGTHS.slice(0, 3).map((s, idx) => (
              <FadeInStagger key={s.type} index={idx} staggerDelay={100}>
                <div className="flex items-center justify-between rounded-sm border border-green-200 bg-green-50 p-2.5 dark:border-green-800 dark:bg-green-900/20">
                  <span className="text-xs font-medium text-green-800 dark:text-green-300 truncate max-w-[100px]">{s.displayName}</span>
                  <span className="font-bold text-green-600 dark:text-green-400 text-sm"><AnimatedCounter value={Math.round(s.accuracy)} suffix="%" /></span>
                </div>
              </FadeInStagger>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide"><XCircle size={14} />Needs Work</h4>
          <div className="space-y-2">
            {MOCK_WEAKNESSES.slice(0, 3).map((w, idx) => (
              <FadeInStagger key={w.type} index={idx} staggerDelay={100}>
                <div className="flex items-center justify-between rounded-sm border border-red-200 bg-red-50 p-2.5 dark:border-red-800 dark:bg-red-900/20">
                  <span className="text-xs font-medium text-red-800 dark:text-red-300 truncate max-w-[100px]">{w.displayName}</span>
                  <span className="font-bold text-red-600 dark:text-red-400 text-sm"><AnimatedCounter value={Math.round(w.accuracy)} suffix="%" /></span>
                </div>
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>
      <FadeInStagger index={0} baseDelay={400}>
        <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-700">
          <button className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400">
            Practice Weak Areas <ChevronRight size={14} />
          </button>
        </div>
      </FadeInStagger>
    </div>
  );
}

function TimeAnalyticsCard() {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getPacingStatus = (avgTime: number, targetPace: number, amberThreshold: number) => {
    if (avgTime <= targetPace) return "green";
    if (avgTime <= amberThreshold) return "amber";
    return "red";
  };

  const bySection = MOCK_TIME_ANALYTICS.bySection;
  const totalQuestions = bySection.logicalReasoning.totalQuestions + bySection.readingComprehension.totalQuestions;

  const SectionPacingCard = ({ title, shortTitle, stats, targetPace, amberThreshold, index }: { title: string; shortTitle: string; stats: { avgTimePerQuestion: number; totalQuestions: number; questionsOnPace: number }; targetPace: number; amberThreshold: number; index: number }) => {
    const status = getPacingStatus(stats.avgTimePerQuestion, targetPace, amberThreshold);
    const onPacePercent = Math.round((stats.questionsOnPace / stats.totalQuestions) * 100);
    const colors = {
      green: { bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-200 dark:border-green-800", text: "text-green-700 dark:text-green-400", badge: "bg-green-100 dark:bg-green-900/40" },
      amber: { bg: "bg-amber-50 dark:bg-amber-900/20", border: "border-amber-200 dark:border-amber-800", text: "text-amber-700 dark:text-amber-400", badge: "bg-amber-100 dark:bg-amber-900/40" },
      red: { bg: "bg-red-50 dark:bg-red-900/20", border: "border-red-200 dark:border-red-800", text: "text-red-700 dark:text-red-400", badge: "bg-red-100 dark:bg-red-900/40" },
    }[status];

    return (
      <FadeInStagger index={index} baseDelay={100}>
        <div className={cx("rounded-sm border-2 p-4", colors.bg, colors.border)}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{shortTitle}</h4>
            <span className={cx("text-xs font-medium px-2 py-0.5 rounded", colors.badge, colors.text)}>
              {status === "green" ? "On Pace" : status === "amber" ? "Slightly Over" : "Over Pace"}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div><span className="text-xs text-stone-500">Your avg: </span><span className={cx("text-lg font-bold", colors.text)}>{formatTime(stats.avgTimePerQuestion)}</span></div>
              <div className="text-xs text-stone-500">Target: {formatTime(targetPace)}</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs"><span className="text-stone-500">On pace</span><span className={cx("font-medium", colors.text)}>{onPacePercent}%</span></div>
              <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                <div className={cx("h-full rounded-full transition-all duration-500", status === "green" ? "bg-green-500" : status === "amber" ? "bg-amber-500" : "bg-red-500")} style={{ width: `${onPacePercent}%` }} />
              </div>
            </div>
            <div className="text-xs text-stone-500">{stats.totalQuestions} questions</div>
          </div>
        </div>
      </FadeInStagger>
    );
  };

  return (
    <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Timer size={18} className="text-[#1a365d] dark:text-amber-400" />
        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Time Analytics</h3>
        <InfoTooltip infoKey="timeAnalytics" />
      </div>
      <div className="space-y-4">
        <FadeInStagger index={0} baseDelay={50}>
          <div className="flex items-center justify-between p-3 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
            <div><div className="text-xs text-stone-500">Overall Average</div><div className="text-2xl font-bold text-stone-900 dark:text-stone-100">{formatTime(MOCK_TIME_ANALYTICS.avgTimePerQuestion)}</div></div>
            <div className="text-right"><div className="text-xs text-stone-500">Questions</div><div className="text-lg font-semibold text-stone-700 dark:text-stone-300">{totalQuestions}</div></div>
          </div>
        </FadeInStagger>
        <div className="grid grid-cols-2 gap-3">
          <SectionPacingCard title="Logical Reasoning" shortTitle="LR" stats={bySection.logicalReasoning} targetPace={LSAT_PACE_LR} amberThreshold={LSAT_AMBER_THRESHOLD_LR} index={1} />
          <SectionPacingCard title="Reading Comprehension" shortTitle="RC" stats={bySection.readingComprehension} targetPace={LSAT_PACE_RC} amberThreshold={LSAT_AMBER_THRESHOLD_RC} index={2} />
        </div>
        <FadeInStagger index={3} baseDelay={100}>
          <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-2">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /><span>On pace</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500" /><span>Slightly over</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /><span>Over pace</span></div>
          </div>
        </FadeInStagger>
      </div>
    </div>
  );
}

function ErrorPatternsCard() {
  return (
    <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle size={18} className="text-[#1a365d] dark:text-amber-400" />
        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Error Patterns</h3>
        <InfoTooltip infoKey="errorPatterns" />
      </div>
      <div className="space-y-3">
        {MOCK_ERROR_PATTERNS.slice(0, 2).map((pattern, i) => (
          <FadeInStagger key={i} index={i} baseDelay={200} staggerDelay={150}>
            <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-amber-800 dark:text-amber-300 text-sm">{pattern.patternName}</h4>
                <span className="rounded-sm bg-amber-200 px-1.5 py-0.5 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">{pattern.frequency}%</span>
              </div>
              <p className="text-xs text-amber-700 dark:text-amber-400 mb-2">{pattern.description}</p>
              <div className="flex items-start gap-1.5 bg-white/50 dark:bg-stone-800/50 p-2 rounded-sm">
                <Zap size={12} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-stone-700 dark:text-stone-300"><span className="font-semibold">Tip:</span> {pattern.recommendation}</p>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </div>
  );
}

function FatigueAnalysisCard() {
  const totalTests = MOCK_PROGRESS.completedTests.length;

  return (
    <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Battery size={18} className="text-[#1a365d] dark:text-amber-400" />
        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Endurance & Stats</h3>
        <InfoTooltip infoKey="fatigue" />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <FadeInStagger index={0} baseDelay={100}>
          <div className="rounded-sm border border-stone-200 p-3 dark:border-stone-700">
            <div className="text-xs text-stone-500">Tests</div>
            <div className="text-xl font-bold text-stone-900 dark:text-stone-100"><AnimatedCounter value={totalTests} /></div>
          </div>
        </FadeInStagger>
        <FadeInStagger index={1} baseDelay={100}>
          <div className="rounded-sm border border-stone-200 p-3 dark:border-stone-700">
            <div className="text-xs text-stone-500">LR / RC</div>
            <div className="text-lg font-bold text-stone-900 dark:text-stone-100">{MOCK_PROGRESS.lrAccuracy}% / {MOCK_PROGRESS.rcAccuracy}%</div>
          </div>
        </FadeInStagger>
      </div>
      <FadeInStagger index={2} baseDelay={200}>
        <div className={cx("rounded-sm border-2 p-3", MOCK_FATIGUE.hasFatigueIssue ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20" : "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20")}>
          <div className="flex items-center gap-2 mb-1">
            {MOCK_FATIGUE.hasFatigueIssue ? <XCircle size={16} className="text-red-600 dark:text-red-400" /> : <CheckCircle2 size={16} className="text-green-600 dark:text-green-400" />}
            <span className={cx("font-semibold text-sm", MOCK_FATIGUE.hasFatigueIssue ? "text-red-700 dark:text-red-400" : "text-green-700 dark:text-green-400")}>
              {MOCK_FATIGUE.hasFatigueIssue ? "Fatigue Issue Detected" : "Good Endurance"}
            </span>
          </div>
          <p className={cx("text-xs", MOCK_FATIGUE.hasFatigueIssue ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400")}>
            {MOCK_FATIGUE.hasFatigueIssue ? `Accuracy drops ${MOCK_FATIGUE.performanceDrop}% in second half` : "Performance stays consistent throughout sections"}
          </p>
          <div className="mt-2 text-xs text-stone-500">First half: {MOCK_FATIGUE.firstHalfAccuracy}% → Second half: {MOCK_FATIGUE.secondHalfAccuracy}%</div>
        </div>
      </FadeInStagger>
    </div>
  );
}

// ============================================
// YOUTUBE VIDEO CARD
// ============================================

function VideoCard({ video }: { video: typeof MOCK_VIDEOS[0] }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-sm border-2 border-stone-200 bg-white p-4 transition hover:border-[#1a365d] hover:shadow-md dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-500"
    >
      {/* Weakness Tag */}
      <span className="mb-2 inline-flex self-start items-center gap-1 rounded-sm bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
        <XCircle size={12} />
        {video.displayName}
      </span>

      {/* Video Title */}
      <h4 className="font-semibold text-sm text-stone-900 dark:text-stone-100 mb-2 line-clamp-2">
        {video.title}
      </h4>

      {/* Channel & Duration */}
      <div className="mt-auto flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
        <span className="font-medium">{video.channel}</span>
        <span>•</span>
        <span>{video.duration}</span>
      </div>
    </a>
  );
}

function YouTubeResourcesSection() {
  return (
    <div className="mb-6 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-red-600 dark:text-red-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Videos for Your Weak Areas
          </h3>
        </div>
        <span className="text-xs text-stone-500 dark:text-stone-400">
          Based on your weaknesses
        </span>
      </div>

      <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
        These videos explain the question types you&apos;re struggling with most.
      </p>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {MOCK_VIDEOS.map((video, idx) => (
          <FadeInStagger key={video.questionType} index={idx} baseDelay={100} staggerDelay={50}>
            <VideoCard video={video} />
          </FadeInStagger>
        ))}
      </div>
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
              <ArrowLeft size={16} />
              Home
            </Link>
            <div className="h-5 w-px bg-stone-200 dark:bg-stone-700" />
            <div className="flex items-center gap-2">
              <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-1.5 dark:border-amber-500 dark:bg-amber-500">
                <Scale size={16} className="text-white dark:text-stone-900" />
              </div>
              <h1 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Analytics Preview</h1>
            </div>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-6">
        {/* Disclaimer Banner */}
        <div className="mb-6 rounded-sm border-2 border-dashed border-[#1a365d]/30 bg-[#1a365d]/5 p-4 dark:border-amber-500/30 dark:bg-amber-500/5">
          <div className="flex items-center gap-3">
            <Sparkles size={20} className="text-[#1a365d] dark:text-amber-400 flex-shrink-0" />
            <div>
              <div className="font-semibold text-[#1a365d] dark:text-amber-100 text-sm">Sample Analytics Preview</div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                This is what your analytics dashboard will look like after completing practice tests. The data shown below is sample data from a mock student who completed 8 tests.
              </p>
            </div>
          </div>
        </div>

        {/* YouTube Video Resources Section - Prominent placement at top */}
        <YouTubeResourcesSection />

        {/* 6-Panel Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <JourneyCard />
          <PerformanceSnapshot />
          <StrengthsWeaknessesCard />
          <TimeAnalyticsCard />
          <ErrorPatternsCard />
          <FatigueAnalysisCard />
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <div className="rounded-sm border-2 border-[#1a365d] bg-gradient-to-r from-[#1a365d]/5 to-[#2d4a7c]/5 p-8 dark:border-amber-500 dark:from-amber-500/5 dark:to-orange-500/5">
            <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3">Ready to see your own analytics?</h2>
            <p className="text-stone-600 dark:text-stone-400 mb-6 max-w-xl mx-auto">Start practicing today and get personalized insights to help you improve your LSAT score.</p>
            <Link href="/" className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-8 py-3 font-bold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400">
              Get Started Free <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
