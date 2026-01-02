"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  BarChart3,
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Brain,
  Target,
  Zap,
  Lock,
  Crown,
  CheckCircle2,
  XCircle,
  Timer,
  Battery,
  ChevronRight,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
  User,
  CreditCard,
  X,
  Loader2,
  Sparkles,
  Activity,
} from "lucide-react";
import { loadUserProgress, UserProgress, setCurrentUserId } from "@/lib/user-progress";
import { onAuthChange, logOut, User as FirebaseUser } from "@/lib/firebase";
import { useTheme } from "@/components/ThemeProvider";
import { getUserTier, getTierDisplayInfo, SubscriptionTier, getTrialInfo, getSubscriptionInfo, saveSubscriptionInfo } from "@/lib/subscription";
import {
  getDetailedQuestionTypeStats,
  getTopWeaknesses,
  getTopStrengths,
  getTimeAnalytics,
  getScoreTrendAnalysis,
  detectErrorPatterns,
  analyzeFatigue,
  getAnalyticsSummary,
  getDifficultyAnalytics,
  QuestionTypeStats,
  TimeAnalytics,
  ScoreTrendAnalysis,
  ErrorPattern,
  FatigueAnalysis,
  AnalyticsSummary,
  DifficultyAnalytics,
} from "@/lib/advanced-analytics";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================
// ANIMATION HOOKS & UTILITIES
// ============================================

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  decimals = 0,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  delay?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!shouldAnimate) return;

    startTimeRef.current = undefined;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(value * easeOut);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldAnimate, value, duration]);

  return (
    <span>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function FadeInStagger({
  children,
  index = 0,
  baseDelay = 0,
  staggerDelay = 100,
}: {
  children: React.ReactNode;
  index?: number;
  baseDelay?: number;
  staggerDelay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, baseDelay + index * staggerDelay);
    return () => clearTimeout(timeout);
  }, [index, baseDelay, staggerDelay]);

  return (
    <div
      className={cx(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      {children}
    </div>
  );
}

// Score Trend Graph - Mood Trends Style
function ScoreTrendGraph({
  data,
}: {
  data: { score: number; date: string }[];
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const duration = 1500;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const p = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - p, 3);
        setProgress(easeOut);

        if (p < 1) {
          requestAnimationFrame(animate);
        }
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

  const width = 320;
  const height = 100;
  const paddingX = 20;
  const paddingY = 15;
  const paddingBottom = 25;

  const getX = (i: number) => paddingX + (i / (data.length - 1)) * (width - paddingX * 2);
  const getY = (score: number) => paddingY + (1 - (score - minScore) / range) * (height - paddingY - paddingBottom);

  const points = data.map((d, i) => ({ x: getX(i), y: getY(d.score), score: d.score, date: d.date }));

  // Create smooth bezier curve path
  const createSmoothPath = () => {
    if (points.length < 2) return "";

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const tension = 0.3;

      const cp1x = current.x + (next.x - current.x) * tension;
      const cp1y = current.y;
      const cp2x = next.x - (next.x - current.x) * tension;
      const cp2y = next.y;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }

    return path;
  };

  // Create area fill path (for gradient under curve)
  const createAreaPath = () => {
    const linePath = createSmoothPath();
    const lastPoint = points[points.length - 1];
    const firstPoint = points[0];
    return `${linePath} L ${lastPoint.x} ${height - paddingBottom + 5} L ${firstPoint.x} ${height - paddingBottom + 5} Z`;
  };

  const linePath = createSmoothPath();
  const areaPath = createAreaPath();

  // Calculate path length for animation
  const pathLength = 1000;

  return (
    <div className="space-y-1">
      <div className="relative rounded-xl bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800/60 dark:to-stone-800/30 p-3 overflow-hidden">
        {/* Score badge */}
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-white dark:bg-stone-900 rounded-lg px-3 py-1.5 shadow-sm border border-stone-200 dark:border-stone-700">
            <div className="text-xl font-bold tabular-nums text-stone-900 dark:text-stone-100">
              {latestScore}
            </div>
            <div className={cx(
              "text-xs font-semibold flex items-center justify-center gap-1",
              scoreDiff > 0 ? "text-emerald-600 dark:text-emerald-400" :
              scoreDiff < 0 ? "text-rose-600 dark:text-rose-400" :
              "text-stone-500"
            )}>
              {scoreDiff > 0 ? <TrendingUp size={12} /> : scoreDiff < 0 ? <TrendingDown size={12} /> : null}
              {scoreDiff > 0 ? "+" : ""}{scoreDiff} pts
            </div>
          </div>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-28" preserveAspectRatio="xMidYMid meet">
          <defs>
            {/* Gradient for area fill */}
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="[stop-color:#1a365d] dark:[stop-color:#fbbf24]" stopOpacity="0.3" />
              <stop offset="100%" className="[stop-color:#1a365d] dark:[stop-color:#fbbf24]" stopOpacity="0.02" />
            </linearGradient>
            {/* Gradient for line */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="[stop-color:#2d4a7c] dark:[stop-color:#f59e0b]" />
              <stop offset="100%" className="[stop-color:#1a365d] dark:[stop-color:#fbbf24]" />
            </linearGradient>
            {/* Glow filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Subtle horizontal grid lines */}
          {[0.25, 0.5, 0.75].map((ratio, i) => (
            <line
              key={i}
              x1={paddingX}
              y1={paddingY + ratio * (height - paddingY - paddingBottom)}
              x2={width - paddingX}
              y2={paddingY + ratio * (height - paddingY - paddingBottom)}
              className="stroke-stone-200 dark:stroke-stone-700"
              strokeWidth="0.5"
              strokeDasharray="4,4"
              opacity={0.5}
            />
          ))}

          {/* Area fill with gradient - animated */}
          <path
            d={areaPath}
            fill="url(#areaGradient)"
            style={{
              opacity: progress,
              transition: 'opacity 0.5s ease-out',
            }}
          />

          {/* Main curve line - animated */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: pathLength * (1 - progress),
              transition: 'stroke-dashoffset 1.2s ease-out',
            }}
          />

          {/* Data points */}
          {points.map((point, i) => (
            <g key={i}>
              {/* Outer glow ring */}
              <circle
                cx={point.x}
                cy={point.y}
                r={i === points.length - 1 ? 8 : 5}
                className="fill-[#1a365d]/10 dark:fill-amber-400/20"
                style={{
                  opacity: progress > i / points.length ? 1 : 0,
                  transform: `scale(${progress > i / points.length ? 1 : 0})`,
                  transformOrigin: `${point.x}px ${point.y}px`,
                  transition: 'opacity 0.4s, transform 0.4s',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
              {/* Inner dot */}
              <circle
                cx={point.x}
                cy={point.y}
                r={i === points.length - 1 ? 5 : 3}
                className="fill-[#1a365d] dark:fill-amber-400"
                style={{
                  opacity: progress > i / points.length ? 1 : 0,
                  transform: `scale(${progress > i / points.length ? 1 : 0})`,
                  transformOrigin: `${point.x}px ${point.y}px`,
                  transition: 'opacity 0.4s, transform 0.4s',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
              {/* White center for latest point */}
              {i === points.length - 1 && (
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={2}
                  className="fill-white dark:fill-stone-900"
                  style={{
                    opacity: progress > 0.8 ? 1 : 0,
                    transition: 'opacity 0.3s',
                  }}
                />
              )}
            </g>
          ))}

          {/* X-axis date labels */}
          {points.filter((_, i) => i === 0 || i === points.length - 1 || (points.length > 4 && i === Math.floor(points.length / 2))).map((point, i) => (
            <text
              key={i}
              x={point.x}
              y={height - 8}
              textAnchor="middle"
              className="fill-stone-400 dark:fill-stone-500"
              style={{ fontSize: '9px', fontWeight: 500 }}
            >
              {point.date}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// Animated Donut Chart
function AnimatedDonutChart({
  data,
  size = 120,
}: {
  data: { label: string; count: number; color: string }[];
  size?: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const duration = 1200;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const p = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - p, 3);
        setProgress(easeOut);

        if (p < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const total = data.reduce((sum, d) => sum + d.count, 0);
  if (total === 0) return null;

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 6;
  const innerRadius = radius * 0.65;

  let currentAngle = -90;
  const colorMap: Record<string, string> = {
    "bg-red-400": "#f87171",
    "bg-green-400": "#4ade80",
    "bg-green-500": "#22c55e",
    "bg-amber-400": "#fbbf24",
    "bg-red-500": "#ef4444",
  };

  const paths = data.map((d, i) => {
    const percentage = d.count / total;
    const angle = percentage * 360 * progress;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);
    const x3 = centerX + innerRadius * Math.cos(endRad);
    const y3 = centerY + innerRadius * Math.sin(endRad);
    const x4 = centerX + innerRadius * Math.cos(startRad);
    const y4 = centerY + innerRadius * Math.sin(startRad);

    const largeArc = angle > 180 ? 1 : 0;

    const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;

    return (
      <path
        key={i}
        d={pathData}
        fill={colorMap[d.color] || "#9ca3af"}
        className="transition-all duration-300 hover:opacity-80"
      />
    );
  });

  return (
    <div className="flex items-center gap-4">
      <svg width={size} height={size} className="flex-shrink-0">
        {paths}
        <text
          x={centerX}
          y={centerY - 4}
          textAnchor="middle"
          alignmentBaseline="middle"
          className="fill-stone-900 dark:fill-stone-100"
          style={{ fontSize: "20px", fontWeight: 700 }}
        >
          {total}
        </text>
        <text
          x={centerX}
          y={centerY + 12}
          textAnchor="middle"
          alignmentBaseline="middle"
          className="fill-stone-500 dark:fill-stone-400"
          style={{ fontSize: "9px" }}
        >
          questions
        </text>
      </svg>
      <div className="space-y-1.5">
        {data.map((d, i) => {
          const percentage = total > 0 ? Math.round((d.count / total) * 100) : 0;
          return (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div className={cx("w-2.5 h-2.5 rounded-sm flex-shrink-0", d.color)} />
              <span className="text-stone-600 dark:text-stone-400 min-w-[60px]">{d.label}</span>
              <span className="font-semibold text-stone-800 dark:text-stone-200 tabular-nums">{d.count}</span>
              <span className="text-stone-400 dark:text-stone-500">({percentage}%)</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// DASHBOARD PANEL COMPONENTS (Original Styles)
// ============================================

function JourneyCard({
  summary,
  strengths,
  weaknesses,
  errorPatterns,
  isLocked,
}: {
  summary: AnalyticsSummary | null;
  strengths: QuestionTypeStats[];
  weaknesses: QuestionTypeStats[];
  errorPatterns: ErrorPattern[];
  isLocked: boolean;
}) {
  const masteredTypes = strengths.filter((s) => s.accuracy >= 80).slice(0, 3);
  const focusTypes = weaknesses.slice(0, 2);
  const topPattern = errorPatterns[0];

  return (
    <div className="relative rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full flex flex-col">
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none flex-1" : "flex-1"}>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={18} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Your LSAT Journey
          </h3>
        </div>

        <ul className="space-y-3 text-sm">
          <FadeInStagger index={0} baseDelay={100}>
            <li className="flex items-start gap-2">
              <span className="text-stone-400 mt-0.5">•</span>
              <span className="text-stone-700 dark:text-stone-300">
                Overall accuracy:{" "}
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  <AnimatedCounter value={summary?.overallAccuracy || 0} suffix="%" />
                </span>
              </span>
            </li>
          </FadeInStagger>

          {summary && summary.scoreTrend !== "stable" && (
            <FadeInStagger index={1} baseDelay={100}>
              <li className="flex items-start gap-2">
                <span className="text-stone-400 mt-0.5">•</span>
                <span className="text-stone-700 dark:text-stone-300">
                  {summary.scoreTrend === "improving" ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Improving trend</span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400 font-semibold">Needs attention</span>
                  )}{" "}
                  over recent sessions
                </span>
              </li>
            </FadeInStagger>
          )}

          {masteredTypes.length > 0 && (
            <FadeInStagger index={2} baseDelay={100}>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-700 dark:text-stone-300">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Mastered:</span>{" "}
                  {masteredTypes.map((t) => t.displayName).join(", ")}
                </span>
              </li>
            </FadeInStagger>
          )}

          {topPattern && (
            <FadeInStagger index={3} baseDelay={100}>
              <li className="flex items-start gap-2">
                <AlertTriangle size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-700 dark:text-stone-300">
                  <span className="font-semibold text-amber-600 dark:text-amber-400">Watch out:</span>{" "}
                  {topPattern.patternName}
                </span>
              </li>
            </FadeInStagger>
          )}
        </ul>

        {focusTypes.length > 0 && (
          <FadeInStagger index={4} baseDelay={200}>
            <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700">
              <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                Current Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {focusTypes.map((w) => (
                  <span
                    key={w.type}
                    className="px-2.5 py-1 rounded-sm text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  >
                    {w.displayName}
                  </span>
                ))}
              </div>
            </div>
          </FadeInStagger>
        )}
      </div>
    </div>
  );
}

function PerformanceSnapshot({
  summary,
  scoreTrend,
  isLocked,
}: {
  summary: AnalyticsSummary | null;
  scoreTrend: ScoreTrendAnalysis | null;
  isLocked: boolean;
}) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full flex flex-col">
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none flex-1" : "flex-1 flex flex-col"}>
        <div className="flex items-center gap-2 mb-4">
          <Activity size={18} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Performance Snapshot
          </h3>
        </div>

        {/* 3 Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <FadeInStagger index={0} baseDelay={100}>
            <div className="text-center p-3 rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/5">
              <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                <AnimatedCounter value={scoreTrend?.projectedScore || summary?.projectedScore || 0} duration={2000} />
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Projected</div>
            </div>
          </FadeInStagger>
          <FadeInStagger index={1} baseDelay={100}>
            <div className="text-center p-3 rounded-sm border border-stone-200 dark:border-stone-700">
              <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                <AnimatedCounter value={summary?.overallAccuracy || 0} suffix="%" duration={1500} />
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Accuracy</div>
            </div>
          </FadeInStagger>
          <FadeInStagger index={2} baseDelay={100}>
            <div className="text-center p-3 rounded-sm border border-stone-200 dark:border-stone-700">
              <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                {formatTime(summary?.avgTimePerQuestion || 0)}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Avg Time</div>
            </div>
          </FadeInStagger>
        </div>

        {/* Score Trend Graph */}
        {scoreTrend && scoreTrend.trends.length > 1 && (
          <div className="mt-auto">
            <ScoreTrendGraph data={scoreTrend.trends.slice(-8)} />
          </div>
        )}
      </div>
    </div>
  );
}

function StrengthsWeaknessesCard({
  strengths,
  weaknesses,
  isLocked,
}: {
  strengths: QuestionTypeStats[];
  weaknesses: QuestionTypeStats[];
  isLocked: boolean;
}) {
  return (
    <div className="relative rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="flex items-center gap-2 mb-4">
          <Target size={18} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Strengths & Weaknesses
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Strengths */}
          <div>
            <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
              <CheckCircle2 size={14} />
              Top Strengths
            </h4>
            {strengths.length === 0 ? (
              <p className="text-xs text-stone-500">Complete more tests</p>
            ) : (
              <div className="space-y-2">
                {strengths.slice(0, 3).map((s, idx) => (
                  <FadeInStagger key={s.type} index={idx} staggerDelay={100}>
                    <div className="flex items-center justify-between rounded-sm border border-green-200 bg-green-50 p-2.5 dark:border-green-800 dark:bg-green-900/20">
                      <span className="text-xs font-medium text-green-800 dark:text-green-300 truncate max-w-[100px]" title={s.displayName}>
                        {s.displayName}
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400 text-sm">
                        <AnimatedCounter value={Math.round(s.accuracy)} suffix="%" duration={1200} />
                      </span>
                    </div>
                  </FadeInStagger>
                ))}
              </div>
            )}
          </div>

          {/* Weaknesses */}
          <div>
            <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide">
              <XCircle size={14} />
              Needs Work
            </h4>
            {weaknesses.length === 0 ? (
              <p className="text-xs text-stone-500">No weaknesses yet</p>
            ) : (
              <div className="space-y-2">
                {weaknesses.slice(0, 3).map((w, idx) => (
                  <FadeInStagger key={w.type} index={idx} staggerDelay={100}>
                    <div className="flex items-center justify-between rounded-sm border border-red-200 bg-red-50 p-2.5 dark:border-red-800 dark:bg-red-900/20">
                      <span className="text-xs font-medium text-red-800 dark:text-red-300 truncate max-w-[100px]" title={w.displayName}>
                        {w.displayName}
                      </span>
                      <span className="font-bold text-red-600 dark:text-red-400 text-sm">
                        <AnimatedCounter value={Math.round(w.accuracy)} suffix="%" duration={1200} />
                      </span>
                    </div>
                  </FadeInStagger>
                ))}
              </div>
            )}
          </div>
        </div>

        {weaknesses.length > 0 && (
          <FadeInStagger index={0} baseDelay={400}>
            <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-700">
              <Link
                href={`/test-select?type=targeted&weakTypes=${weaknesses.slice(0, 3).map((w) => w.type).join(",")}`}
                className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Practice Weak Areas
                <ChevronRight size={14} />
              </Link>
            </div>
          </FadeInStagger>
        )}
      </div>
    </div>
  );
}

function TimeAnalyticsCard({
  analytics,
  isLocked,
  testCount,
}: {
  analytics: TimeAnalytics | null;
  isLocked: boolean;
  testCount: number;
}) {
  const MIN_TESTS_REQUIRED = 2;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const distribution = analytics?.timeDistribution;
  const total = distribution
    ? distribution.under30s + distribution.thirtyTo60s + distribution.sixtyTo90s + distribution.ninetyTo120s + distribution.over120s
    : 0;

  const distributionData = distribution
    ? [
        { label: "Under 30s", count: distribution.under30s, color: "bg-red-400" },
        { label: "30-60s", count: distribution.thirtyTo60s, color: "bg-green-400" },
        { label: "60-90s", count: distribution.sixtyTo90s, color: "bg-green-500" },
        { label: "90-120s", count: distribution.ninetyTo120s, color: "bg-amber-400" },
        { label: "Over 2 min", count: distribution.over120s, color: "bg-red-500" },
      ]
    : [];

  const hasEnoughTests = testCount >= MIN_TESTS_REQUIRED;

  return (
    <div className="relative rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="flex items-center gap-2 mb-4">
          <Timer size={18} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Time Analytics
          </h3>
        </div>

        {!hasEnoughTests ? (
          <div className="py-6 text-center">
            <Clock size={32} className="mx-auto mb-2 text-stone-300 dark:text-stone-600" />
            <p className="text-sm text-stone-600 dark:text-stone-400 font-medium">
              Complete at least {MIN_TESTS_REQUIRED} practice tests
            </p>
            <p className="mt-1 text-xs text-stone-500">
              {testCount === 0 ? "No tests completed yet" : `${testCount} of ${MIN_TESTS_REQUIRED} tests completed`}
            </p>
          </div>
        ) : !analytics || total === 0 ? (
          <div className="py-6 text-center text-stone-500 text-sm">
            Complete some practice tests to see time analytics.
          </div>
        ) : (
          <div className="space-y-4">
            {/* Time Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              <FadeInStagger index={0} baseDelay={100}>
                <div className="rounded-sm border border-stone-200 p-3 dark:border-stone-700">
                  <div className="text-xs text-stone-500">Avg Time</div>
                  <div className="text-xl font-bold text-stone-900 dark:text-stone-100">
                    {formatTime(analytics.avgTimePerQuestion)}
                  </div>
                </div>
              </FadeInStagger>
              <FadeInStagger index={1} baseDelay={100}>
                <div className="rounded-sm border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                  <div className="text-xs text-red-600 dark:text-red-400">Rushed</div>
                  <div className="text-xl font-bold text-red-700 dark:text-red-400">
                    <AnimatedCounter value={analytics.questionsRushed} delay={200} />
                  </div>
                </div>
              </FadeInStagger>
              <FadeInStagger index={2} baseDelay={100}>
                <div className="rounded-sm border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
                  <div className="text-xs text-amber-600 dark:text-amber-400">Over 2 min</div>
                  <div className="text-xl font-bold text-amber-700 dark:text-amber-400">
                    <AnimatedCounter value={analytics.questionsOverPace} delay={200} />
                  </div>
                </div>
              </FadeInStagger>
            </div>

            {/* Donut Chart */}
            <div className="flex justify-center">
              <AnimatedDonutChart data={distributionData} size={130} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ErrorPatternsCard({
  patterns,
  isLocked,
}: {
  patterns: ErrorPattern[];
  isLocked: boolean;
}) {
  return (
    <div className="relative rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Error Patterns
          </h3>
        </div>

        {patterns.length === 0 ? (
          <div className="py-6 text-center">
            <CheckCircle2 size={32} className="mx-auto mb-2 text-green-400" />
            <p className="text-sm text-stone-600 dark:text-stone-400">No significant error patterns detected!</p>
            <p className="text-xs text-stone-500">Complete more tests to reveal patterns.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {patterns.slice(0, 2).map((pattern, i) => (
              <FadeInStagger key={i} index={i} baseDelay={200} staggerDelay={150}>
                <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-300 text-sm">
                      {pattern.patternName}
                    </h4>
                    <span className="rounded-sm bg-amber-200 px-1.5 py-0.5 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">
                      {pattern.frequency}%
                    </span>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mb-2">{pattern.description}</p>
                  <div className="flex items-start gap-1.5 bg-white/50 dark:bg-stone-800/50 p-2 rounded-sm">
                    <Zap size={12} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      <span className="font-semibold">Tip:</span> {pattern.recommendation}
                    </p>
                  </div>
                </div>
              </FadeInStagger>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FatigueAnalysisCard({
  analysis,
  progress,
  isLocked,
}: {
  analysis: FatigueAnalysis | null;
  progress: UserProgress | null;
  isLocked: boolean;
}) {
  const hasData = analysis && (analysis.firstHalfAccuracy > 0 || analysis.secondHalfAccuracy > 0);
  const totalTests = progress?.completedTests?.length || 0;

  // Calculate LR and RC accuracy from sections
  let lrTotal = 0, lrCorrect = 0, rcTotal = 0, rcCorrect = 0;
  progress?.completedTests?.forEach((test) => {
    test.sections?.forEach((section) => {
      if (section.type === "logical-reasoning") {
        lrTotal += section.totalCount;
        lrCorrect += section.correctCount;
      } else if (section.type === "reading-comprehension") {
        rcTotal += section.totalCount;
        rcCorrect += section.correctCount;
      }
    });
  });
  const lrAccuracy = lrTotal > 0 ? Math.round((lrCorrect / lrTotal) * 100) : 0;
  const rcAccuracy = rcTotal > 0 ? Math.round((rcCorrect / rcTotal) * 100) : 0;

  return (
    <div className="relative rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="flex items-center gap-2 mb-4">
          <Battery size={18} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Endurance & Stats
          </h3>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <FadeInStagger index={0} baseDelay={100}>
            <div className="rounded-sm border border-stone-200 p-3 dark:border-stone-700">
              <div className="text-xs text-stone-500">Tests</div>
              <div className="text-xl font-bold text-stone-900 dark:text-stone-100">
                <AnimatedCounter value={totalTests} />
              </div>
            </div>
          </FadeInStagger>
          <FadeInStagger index={1} baseDelay={100}>
            <div className="rounded-sm border border-stone-200 p-3 dark:border-stone-700">
              <div className="text-xs text-stone-500">LR / RC</div>
              <div className="text-lg font-bold text-stone-900 dark:text-stone-100">
                {lrAccuracy}% / {rcAccuracy}%
              </div>
            </div>
          </FadeInStagger>
        </div>

        {/* Fatigue Status */}
        {hasData ? (
          <FadeInStagger index={2} baseDelay={200}>
            <div
              className={cx(
                "rounded-sm border-2 p-3",
                analysis.hasFatigueIssue
                  ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                  : "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                {analysis.hasFatigueIssue ? (
                  <XCircle size={16} className="text-red-600 dark:text-red-400" />
                ) : (
                  <CheckCircle2 size={16} className="text-green-600 dark:text-green-400" />
                )}
                <span
                  className={cx(
                    "font-semibold text-sm",
                    analysis.hasFatigueIssue
                      ? "text-red-700 dark:text-red-400"
                      : "text-green-700 dark:text-green-400"
                  )}
                >
                  {analysis.hasFatigueIssue ? "Fatigue Issue Detected" : "Good Endurance"}
                </span>
              </div>
              <p
                className={cx(
                  "text-xs",
                  analysis.hasFatigueIssue
                    ? "text-red-600 dark:text-red-400"
                    : "text-green-600 dark:text-green-400"
                )}
              >
                {analysis.hasFatigueIssue
                  ? `Accuracy drops ${Math.round(analysis.performanceDrop)}% in second half`
                  : "Performance stays consistent throughout sections"}
              </p>
              <div className="mt-2 text-xs text-stone-500">
                First half: {Math.round(analysis.firstHalfAccuracy)}% → Second half: {Math.round(analysis.secondHalfAccuracy)}%
              </div>
            </div>
          </FadeInStagger>
        ) : (
          <div className="py-4 text-center text-stone-500 text-sm">
            Complete more tests to analyze fatigue patterns.
          </div>
        )}
      </div>
    </div>
  );
}

function ProLockOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-sm bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm">
      <Lock size={28} className="mb-2 text-amber-500" />
      <p className="mb-2 text-xs font-semibold text-stone-700 dark:text-stone-300">Pro Feature</p>
      <Link
        href="/subscription"
        className="flex items-center gap-1 rounded-sm bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-600"
      >
        <Crown size={12} />
        Upgrade
      </Link>
    </div>
  );
}

// ============================================
// USER DROPDOWN COMPONENT
// ============================================

function UserDropdown({
  user,
  userTier,
  onSignOut,
}: {
  user: FirebaseUser;
  userTier: SubscriptionTier;
  onSignOut: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tierInfo = getTierDisplayInfo(userTier);
  const trialInfo = getTrialInfo();
  const subscriptionInfo = getSubscriptionInfo();

  const canCancel = userTier === "pro" && subscriptionInfo?.subscriptionId && !subscriptionInfo?.cancelAtPeriodEnd;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowCancelConfirm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setShowCancelConfirm(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleCancelSubscription = async () => {
    if (!subscriptionInfo?.subscriptionId) return;
    setIsCancelling(true);
    try {
      const response = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriptionId: subscriptionInfo.subscriptionId }),
      });
      const data = await response.json();
      if (data.success) {
        saveSubscriptionInfo({
          cancelAtPeriodEnd: true,
          currentPeriodEnd: data.subscription.currentPeriodEnd,
        });
        setShowCancelConfirm(false);
        setIsOpen(false);
        window.location.reload();
      } else {
        alert(data.error || "Failed to cancel subscription");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <div ref={dropdownRef} className="relative z-50">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 transition hover:border-stone-300 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-stone-600 dark:hover:bg-stone-700"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="Profile" className="h-6 w-6 rounded-full" />
        ) : (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a365d] text-xs font-bold text-white dark:bg-amber-500 dark:text-stone-900">
            {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
          </div>
        )}
        <span className="hidden max-w-[100px] truncate text-sm font-medium text-stone-700 dark:text-stone-300 sm:block">
          {user.displayName || user.email?.split("@")[0]}
        </span>
        <ChevronDown
          size={16}
          className={cx("text-stone-400 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-sm border-2 border-stone-200 bg-white shadow-lg dark:border-stone-700 dark:bg-stone-800">
          <div className="border-b border-stone-200 p-4 dark:border-stone-700">
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="h-10 w-10 rounded-full" />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a365d] text-lg font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                  {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1 overflow-hidden">
                <div className="truncate font-semibold text-stone-900 dark:text-stone-100">
                  {user.displayName || "User"}
                </div>
                <div className="truncate text-xs text-stone-500">{user.email}</div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className={cx("rounded-sm px-2 py-0.5 text-xs font-semibold", tierInfo.bgColor, tierInfo.color)}>
                {tierInfo.name}
              </span>
              {userTier === "pro" && trialInfo.isTrialing && (
                <span className="rounded-sm bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  {trialInfo.daysLeft}d left
                </span>
              )}
              {subscriptionInfo?.cancelAtPeriodEnd && (
                <span className="rounded-sm bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  Cancels soon
                </span>
              )}
            </div>
          </div>

          <div className="p-2">
            <Link
              href="/profile"
              className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm text-stone-700 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-700"
              onClick={() => setIsOpen(false)}
            >
              <User size={16} />
              Profile
            </Link>
            <Link
              href="/subscription"
              className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm text-stone-700 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-700"
              onClick={() => setIsOpen(false)}
            >
              <CreditCard size={16} />
              Manage Subscription
            </Link>

            {canCancel && !showCancelConfirm && (
              <button
                type="button"
                onClick={() => setShowCancelConfirm(true)}
                className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                <X size={16} />
                Cancel Subscription
              </button>
            )}

            {showCancelConfirm && (
              <div className="mx-2 my-2 rounded-sm border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <p className="mb-3 text-xs text-red-700 dark:text-red-300">
                  Are you sure? You&apos;ll keep access until the billing period ends.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCancelSubscription}
                    disabled={isCancelling}
                    className="flex-1 rounded-sm bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                  >
                    {isCancelling ? <Loader2 size={14} className="mx-auto animate-spin" /> : "Yes, Cancel"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCancelConfirm(false)}
                    className="flex-1 rounded-sm bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:bg-stone-300 dark:bg-stone-600 dark:text-stone-200 dark:hover:bg-stone-500"
                  >
                    Keep It
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-stone-200 p-2 dark:border-stone-700">
            <button
              type="button"
              onClick={onSignOut}
              className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm text-stone-700 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-700"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function AdvancedAnalyticsPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userTier, setUserTier] = useState<SubscriptionTier>("free");

  // Analytics state
  const [strengths, setStrengths] = useState<QuestionTypeStats[]>([]);
  const [weaknesses, setWeaknesses] = useState<QuestionTypeStats[]>([]);
  const [timeAnalytics, setTimeAnalytics] = useState<TimeAnalytics | null>(null);
  const [scoreTrend, setScoreTrend] = useState<ScoreTrendAnalysis | null>(null);
  const [errorPatterns, setErrorPatterns] = useState<ErrorPattern[]>([]);
  const [fatigueAnalysis, setFatigueAnalysis] = useState<FatigueAnalysis | null>(null);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setCurrentUserId(firebaseUser?.uid || null);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const tier = getUserTier(user);
      setUserTier(tier);
    } else {
      setUserTier("free");
    }
  }, [user]);

  useEffect(() => {
    if (authLoading) return;

    const userId = user?.uid;
    const loaded = loadUserProgress(userId);
    setProgress(loaded);

    setStrengths(getTopStrengths(loaded));
    setWeaknesses(getTopWeaknesses(loaded));
    setTimeAnalytics(getTimeAnalytics(loaded));
    setScoreTrend(getScoreTrendAnalysis(loaded));
    setErrorPatterns(detectErrorPatterns(loaded));
    setFatigueAnalysis(analyzeFatigue(loaded));
    setSummary(getAnalyticsSummary(loaded));

    setIsLoading(false);
  }, [user, authLoading]);

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const isProOrFounder = userTier === "pro" || userTier === "founder";

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
              <Scale size={32} className="animate-pulse text-white dark:text-stone-900" />
            </div>
            <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">Loading insights...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ArrowLeft size={16} />
              Dashboard
            </Link>
            <div className="h-5 w-px bg-stone-200 dark:bg-stone-700" />
            <h1 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Advanced Insights</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-sm border-2 border-stone-200 bg-white p-2 text-stone-600 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {user &&
              (() => {
                const tierInfo = getTierDisplayInfo(userTier);
                return (
                  <div
                    className={cx(
                      "rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide",
                      tierInfo.bgColor,
                      tierInfo.color
                    )}
                  >
                    {tierInfo.name}
                  </div>
                );
              })()}

            {user ? (
              <UserDropdown user={user} userTier={userTier} onSignOut={handleSignOut} />
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a365d] px-4 py-2 text-sm font-semibold text-[#1a365d] transition hover:bg-[#1a365d] hover:text-white dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-500 dark:hover:text-stone-900"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main Content - 6-Panel Grid */}
      <main className="mx-auto max-w-7xl px-6 py-6">
        {/* Pro Upgrade Banner */}
        {!isProOrFounder && (
          <div className="mb-6 rounded-sm border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 p-4 dark:border-amber-500/50 dark:from-amber-900/20 dark:to-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-amber-600 dark:text-amber-400" />
                <div>
                  <div className="font-semibold text-amber-900 dark:text-amber-100 text-sm">
                    Unlock Advanced Insights
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-300">
                    Upgrade to Pro for detailed analytics, error patterns, and fatigue analysis.
                  </p>
                </div>
              </div>
              <Link
                href="/subscription"
                className="inline-flex items-center gap-2 rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                <Crown size={14} />
                Upgrade
              </Link>
            </div>
          </div>
        )}

        {/* 6-Panel Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Row 1 */}
          <JourneyCard
            summary={summary}
            strengths={strengths}
            weaknesses={weaknesses}
            errorPatterns={errorPatterns}
            isLocked={!isProOrFounder}
          />
          <PerformanceSnapshot summary={summary} scoreTrend={scoreTrend} isLocked={!isProOrFounder} />
          <StrengthsWeaknessesCard strengths={strengths} weaknesses={weaknesses} isLocked={!isProOrFounder} />

          {/* Row 2 */}
          <TimeAnalyticsCard
            analytics={timeAnalytics}
            isLocked={!isProOrFounder}
            testCount={progress?.completedTests?.length || 0}
          />
          <ErrorPatternsCard patterns={errorPatterns} isLocked={!isProOrFounder} />
          <FatigueAnalysisCard analysis={fatigueAnalysis} progress={progress} isLocked={!isProOrFounder} />
        </div>

        {/* Back to Dashboard */}
        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
