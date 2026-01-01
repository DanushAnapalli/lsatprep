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
} from "lucide-react";
import { loadUserProgress, UserProgress, setCurrentUserId } from "@/lib/user-progress";
import { onAuthChange, logOut, User as FirebaseUser } from "@/lib/firebase";
import { useTheme } from "@/components/ThemeProvider";
import { getUserTier, getTierDisplayInfo, SubscriptionTier } from "@/lib/subscription";
import {
  getDetailedQuestionTypeStats,
  getTopWeaknesses,
  getTopStrengths,
  getTimeAnalytics,
  getScoreTrendAnalysis,
  detectErrorPatterns,
  analyzeFatigue,
  getAnalyticsSummary,
  QuestionTypeStats,
  TimeAnalytics,
  ScoreTrendAnalysis,
  ErrorPattern,
  FatigueAnalysis,
  AnalyticsSummary,
} from "@/lib/advanced-analytics";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================
// ANIMATION HOOKS & UTILITIES
// ============================================

// Hook for page load animation trigger
function usePageLoad(delay: number = 0): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return isReady;
}

// Animated progress bar component - triggers on page load
function AnimatedProgressBar({
  percentage,
  color,
  delay = 0,
  height = "h-2",
}: {
  percentage: number;
  color: string;
  delay?: number;
  height?: string;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(percentage);
    }, 100 + delay);
    return () => clearTimeout(timeout);
  }, [percentage, delay]);

  return (
    <div className={cx(height, "w-full rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden")}>
      <div
        className={cx(
          "h-full rounded-full transition-all duration-1000 ease-out",
          color
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

// Animated counter component - triggers on page load
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

// Fade-in wrapper - triggers on page load with stagger
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

// ============================================
// CHART COMPONENTS
// ============================================

// Animated Line Graph for Score Trends
function AnimatedLineGraph({
  data,
  height = 140,
}: {
  data: { score: number; date: string }[];
  height?: number;
}) {
  const [progress, setProgress] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

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

  if (data.length === 0) return null;

  const width = 400;
  const padding = { top: 16, right: 16, bottom: 24, left: 36 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const minScore = Math.min(...data.map((d) => d.score)) - 5;
  const maxScore = Math.max(...data.map((d) => d.score)) + 5;

  const xScale = (i: number) => padding.left + (i / (data.length - 1 || 1)) * chartWidth;
  const yScale = (score: number) =>
    padding.top + chartHeight - ((score - minScore) / (maxScore - minScore || 1)) * chartHeight;

  // Create smooth bezier curve path
  const createSmoothPath = () => {
    if (data.length < 2) return data.map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(d.score)}`).join(" ");

    let path = `M ${xScale(0)} ${yScale(data[0].score)}`;

    for (let i = 1; i < data.length; i++) {
      const x0 = xScale(i - 1);
      const y0 = yScale(data[i - 1].score);
      const x1 = xScale(i);
      const y1 = yScale(data[i].score);

      const cpOffset = (x1 - x0) * 0.3;
      path += ` C ${x0 + cpOffset} ${y0}, ${x1 - cpOffset} ${y1}, ${x1} ${y1}`;
    }

    return path;
  };

  const pathData = createSmoothPath();

  const areaPathData =
    pathData +
    ` L ${xScale(data.length - 1)} ${padding.top + chartHeight} L ${padding.left} ${padding.top + chartHeight} Z`;

  const pathLength = 1000;
  const visibleLength = progress * pathLength;

  return (
    <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {/* Grid lines */}
      {[0, 0.5, 1].map((t) => {
        const y = padding.top + t * chartHeight;
        const score = Math.round(maxScore - t * (maxScore - minScore));
        return (
          <g key={t}>
            <line
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeDasharray="3,3"
            />
            <text
              x={padding.left - 6}
              y={y}
              textAnchor="end"
              alignmentBaseline="middle"
              className="fill-stone-400 dark:fill-stone-500"
              style={{ fontSize: "10px", fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {score}
            </text>
          </g>
        );
      })}

      {/* Gradient fill */}
      <defs>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a365d" stopOpacity={0.15} />
          <stop offset="100%" stopColor="#1a365d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="areaGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.15} />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path
        d={areaPathData}
        className="fill-[url(#areaGradient)] dark:fill-[url(#areaGradientDark)]"
        style={{
          opacity: progress,
          transition: "opacity 0.5s ease-out",
        }}
      />

      {/* Line */}
      <path
        d={pathData}
        fill="none"
        className="stroke-[#1a365d] dark:stroke-amber-400"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength - visibleLength}
      />

      {/* Data points */}
      {data.map((d, i) => (
        <g key={i} style={{ opacity: progress > i / data.length ? 1 : 0, transition: "opacity 0.3s ease-out" }}>
          <circle
            cx={xScale(i)}
            cy={yScale(d.score)}
            r={4}
            className="fill-white dark:fill-stone-900 stroke-[#1a365d] dark:stroke-amber-400"
            strokeWidth={2}
          />
          <text
            x={xScale(i)}
            y={padding.top + chartHeight + 14}
            textAnchor="middle"
            className="fill-stone-400 dark:fill-stone-500"
            style={{ fontSize: "9px", fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {d.date}
          </text>
        </g>
      ))}
    </svg>
  );
}

// Animated Donut Chart for Time Distribution
function AnimatedDonutChart({
  data,
  size = 140,
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
  const radius = size / 2 - 8;
  const innerRadius = radius * 0.65;

  let currentAngle = -90;
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

    const pathData = `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
      Z
    `;

    const colorMap: Record<string, string> = {
      "bg-red-400": "#f87171",
      "bg-green-400": "#4ade80",
      "bg-green-500": "#22c55e",
      "bg-amber-400": "#fbbf24",
      "bg-red-500": "#ef4444",
    };

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
    <div className="flex items-center gap-5">
      <svg width={size} height={size} className="flex-shrink-0">
        {paths}
        <text
          x={centerX}
          y={centerY - 4}
          textAnchor="middle"
          alignmentBaseline="middle"
          className="fill-stone-900 dark:fill-stone-100"
          style={{ fontSize: "20px", fontWeight: 600, fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          {total}
        </text>
        <text
          x={centerX}
          y={centerY + 12}
          textAnchor="middle"
          alignmentBaseline="middle"
          className="fill-stone-500 dark:fill-stone-400"
          style={{ fontSize: "9px", fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          questions
        </text>
      </svg>
      <div className="space-y-1.5">
        {data.map((d, i) => {
          const colorMap: Record<string, string> = {
            "bg-red-400": "bg-red-400",
            "bg-green-400": "bg-green-400",
            "bg-green-500": "bg-green-500",
            "bg-amber-400": "bg-amber-400",
            "bg-red-500": "bg-red-500",
          };
          const percentage = total > 0 ? Math.round((d.count / total) * 100) : 0;
          return (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div className={cx("w-2.5 h-2.5 rounded-sm", colorMap[d.color])} />
              <span className="text-stone-500 dark:text-stone-400 min-w-[60px]">{d.label}</span>
              <span className="font-medium text-stone-700 dark:text-stone-300 tabular-nums">{d.count}</span>
              <span className="text-stone-400 dark:text-stone-500 text-[10px]">({percentage}%)</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Animated Bar Chart for Question Types
function AnimatedBarChart({
  data,
}: {
  data: { name: string; accuracy: number; color: string }[];
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const duration = 1000;

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

  if (data.length === 0) return null;

  return (
    <div className="space-y-3">
      {data.map((d, i) => (
        <div key={i} className="group">
          <div className="flex items-center justify-between mb-1">
            <span
              className="text-xs font-medium text-stone-600 dark:text-stone-400 truncate max-w-[180px]"
              title={d.name}
            >
              {d.name}
            </span>
            <span className="text-xs font-semibold text-stone-700 dark:text-stone-300 tabular-nums">
              {Math.round(d.accuracy * progress)}%
            </span>
          </div>
          <div className="h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
            <div
              className={cx(
                "h-full rounded-full transition-all duration-1000 ease-out",
                d.accuracy >= 80
                  ? "bg-emerald-500 dark:bg-emerald-400"
                  : d.accuracy >= 60
                    ? "bg-amber-500 dark:bg-amber-400"
                    : "bg-red-500 dark:bg-red-400"
              )}
              style={{ width: `${d.accuracy * progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// COMPONENTS
// ============================================

function ProLockOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-sm bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm">
      <Lock size={40} className="mb-3 text-amber-500" />
      <p className="mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300">
        Pro Feature
      </p>
      <Link
        href="/subscription"
        className="flex items-center gap-2 rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
      >
        <Crown size={16} />
        Upgrade to Pro
      </Link>
    </div>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  subtext,
  color = "amber",
  index = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  subtext?: string;
  color?: "amber" | "green" | "red" | "blue";
  index?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100 + index * 80);
    return () => clearTimeout(timeout);
  }, [index]);

  const colorClasses = {
    amber: "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30",
    green: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    red: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
    blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
  };

  return (
    <div
      className={cx(
        "rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
      )}
    >
      <div className="flex items-start justify-between">
        <div className={cx(
          "rounded-sm p-2 transition-transform duration-500",
          colorClasses[color],
          isVisible ? "scale-100" : "scale-0"
        )}
        style={{ transitionDelay: `${index * 80 + 150}ms` }}
        >
          <Icon size={20} />
        </div>
      </div>
      <div className="mt-4">
        <div className="text-3xl font-bold text-stone-900 dark:text-stone-100">{value}</div>
        <div className="text-sm font-medium text-stone-600 dark:text-stone-400">{label}</div>
        {subtext && <div className="mt-1 text-xs text-stone-500">{subtext}</div>}
      </div>
    </div>
  );
}

function QuestionTypePerformanceSection({
  stats,
  isLocked,
}: {
  stats: QuestionTypeStats[];
  isLocked: boolean;
}) {
  const lrStats = stats.filter((s) => s.sectionType === "logical-reasoning");
  const rcStats = stats.filter((s) => s.sectionType === "reading-comprehension");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const lrChartData = lrStats.map((s) => ({
    name: s.displayName,
    accuracy: s.accuracy,
    color: s.accuracy >= 80 ? "green" : s.accuracy >= 60 ? "amber" : "red",
  }));

  const rcChartData = rcStats.map((s) => ({
    name: s.displayName,
    accuracy: s.accuracy,
    color: s.accuracy >= 80 ? "green" : s.accuracy >= 60 ? "amber" : "red",
  }));

  return (
    <div
      className={cx(
        "relative rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="mb-4 flex items-center gap-2">
          <BarChart3 size={20} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Question Type Performance
          </h3>
        </div>

        {stats.length === 0 ? (
          <div className="py-8 text-center text-stone-500">
            Complete some practice tests to see your performance breakdown.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* LR Section */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-300">
                <Brain size={16} className="text-[#1a365d] dark:text-amber-400" />
                Logical Reasoning
              </h4>
              {lrStats.length === 0 ? (
                <p className="text-sm text-stone-500">No LR data yet</p>
              ) : (
                <AnimatedBarChart data={lrChartData} />
              )}
            </div>

            {/* RC Section */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-300">
                <Target size={16} className="text-[#1a365d] dark:text-amber-400" />
                Reading Comprehension
              </h4>
              {rcStats.length === 0 ? (
                <p className="text-sm text-stone-500">No RC data yet</p>
              ) : (
                <AnimatedBarChart data={rcChartData} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TimeAnalyticsSection({
  analytics,
  isLocked,
  testCount,
}: {
  analytics: TimeAnalytics;
  isLocked: boolean;
  testCount: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const MIN_TESTS_REQUIRED = 2;

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const distribution = analytics.timeDistribution;
  const total =
    distribution.under30s +
    distribution.thirtyTo60s +
    distribution.sixtyTo90s +
    distribution.ninetyTo120s +
    distribution.over120s;

  const distributionData = [
    { label: "Under 30s", count: distribution.under30s, color: "bg-red-400" },
    { label: "30-60s", count: distribution.thirtyTo60s, color: "bg-green-400" },
    { label: "60-90s", count: distribution.sixtyTo90s, color: "bg-green-500" },
    { label: "90-120s", count: distribution.ninetyTo120s, color: "bg-amber-400" },
    { label: "Over 2 min", count: distribution.over120s, color: "bg-red-500" },
  ];

  const hasEnoughTests = testCount >= MIN_TESTS_REQUIRED;

  return (
    <div
      className={cx(
        "relative rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="mb-4 flex items-center gap-2">
          <Timer size={20} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Time Analytics
          </h3>
        </div>

        {!hasEnoughTests ? (
          <div className="py-8 text-center">
            <Clock size={40} className="mx-auto mb-3 text-stone-300 dark:text-stone-600" />
            <p className="text-stone-600 dark:text-stone-400 font-medium">
              Complete at least {MIN_TESTS_REQUIRED} practice tests to see time analytics
            </p>
            <p className="mt-1 text-sm text-stone-500">
              {testCount === 0
                ? "No tests completed yet"
                : `${testCount} of ${MIN_TESTS_REQUIRED} tests completed`}
            </p>
          </div>
        ) : total === 0 ? (
          <div className="py-8 text-center text-stone-500">
            Complete some practice tests to see time analytics.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Time Stats */}
            <div className="space-y-4">
              <FadeInStagger index={0} baseDelay={100}>
                <div className="flex items-center justify-between rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                  <div>
                    <div className="text-sm text-stone-500">Average Time/Question</div>
                    <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                      {formatTime(analytics.avgTimePerQuestion)}
                    </div>
                  </div>
                  <div
                    className={cx(
                      "rounded-sm px-3 py-1 text-sm font-semibold",
                      analytics.avgTimePerQuestion <= analytics.recommendedPace
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    )}
                  >
                    Target: {formatTime(analytics.recommendedPace)}
                  </div>
                </div>
              </FadeInStagger>

              <div className="grid grid-cols-2 gap-4">
                <FadeInStagger index={1} baseDelay={100}>
                  <div className="rounded-sm border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                    <div className="text-sm text-red-600 dark:text-red-400">Rushed (&lt;30s)</div>
                    <div className="text-2xl font-bold text-red-700 dark:text-red-400">
                      <AnimatedCounter value={analytics.questionsRushed} delay={200} />
                    </div>
                  </div>
                </FadeInStagger>
                <FadeInStagger index={2} baseDelay={100}>
                  <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                    <div className="text-sm text-amber-600 dark:text-amber-400">Over 2 min</div>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                      <AnimatedCounter value={analytics.questionsOverPace} delay={200} />
                    </div>
                  </div>
                </FadeInStagger>
              </div>
            </div>

            {/* Time Distribution - Donut Chart */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-stone-600 dark:text-stone-400">
                Time Distribution
              </h4>
              <div className="flex justify-center">
                <AnimatedDonutChart data={distributionData} size={130} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScoreTrendSection({
  analysis,
  isLocked,
}: {
  analysis: ScoreTrendAnalysis;
  isLocked: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cx(
        "relative rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp size={20} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Score Projection
          </h3>
        </div>

        {analysis.trends.length === 0 ? (
          <div className="py-8 text-center text-stone-500">
            Complete some practice tests to see your score projections.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Current Score */}
            <FadeInStagger index={0} baseDelay={100}>
              <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/5 p-6 text-center dark:border-amber-500 dark:bg-amber-500/5">
                <div className="text-sm text-stone-600 dark:text-stone-400">Current Score</div>
                <div className="text-4xl font-bold text-[#1a365d] dark:text-amber-400">
                  <AnimatedCounter value={analysis.currentScore} duration={2000} delay={100} />
                </div>
                <div className="mt-2 flex items-center justify-center gap-1 text-sm">
                  {analysis.trend === "improving" && (
                    <>
                      <TrendingUp size={16} className="text-green-500" />
                      <span className="text-green-600 dark:text-green-400">Improving</span>
                    </>
                  )}
                  {analysis.trend === "declining" && (
                    <>
                      <TrendingDown size={16} className="text-red-500" />
                      <span className="text-red-600 dark:text-red-400">Declining</span>
                    </>
                  )}
                  {analysis.trend === "stable" && (
                    <span className="text-stone-500">Stable</span>
                  )}
                </div>
              </div>
            </FadeInStagger>

            {/* Projected Score */}
            <FadeInStagger index={1} baseDelay={100}>
              <div className="rounded-sm border border-stone-200 p-6 text-center dark:border-stone-700">
                <div className="text-sm text-stone-600 dark:text-stone-400">Projected Score</div>
                <div className="text-4xl font-bold text-stone-900 dark:text-stone-100">
                  <AnimatedCounter value={analysis.projectedScore} duration={2000} delay={150} />
                </div>
                <div className="mt-2 text-sm text-stone-500">
                  Range: {analysis.confidenceLow}-{analysis.confidenceHigh}
                </div>
              </div>
            </FadeInStagger>

            {/* Weekly Improvement */}
            <FadeInStagger index={2} baseDelay={100}>
              <div className="rounded-sm border border-stone-200 p-6 text-center dark:border-stone-700">
                <div className="text-sm text-stone-600 dark:text-stone-400">Weekly Change</div>
                <div
                  className={cx(
                    "text-4xl font-bold",
                    analysis.weeklyImprovement > 0
                      ? "text-green-600 dark:text-green-400"
                      : analysis.weeklyImprovement < 0
                      ? "text-red-600 dark:text-red-400"
                      : "text-stone-600 dark:text-stone-400"
                  )}
                >
                  {analysis.weeklyImprovement > 0 ? "+" : ""}
                  <AnimatedCounter value={Math.abs(analysis.weeklyImprovement)} decimals={1} delay={200} />
                </div>
                <div className="mt-2 text-sm text-stone-500">points per week</div>
              </div>
            </FadeInStagger>
          </div>
        )}

        {/* Score Trend Graph */}
        {analysis.trends.length > 1 && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-medium text-stone-600 dark:text-stone-400">
              Score Trend
            </h4>
            <div className="rounded-lg border border-stone-200 bg-stone-50/50 p-4 dark:border-stone-700 dark:bg-stone-800/30">
              <AnimatedLineGraph
                data={analysis.trends.slice(-10)}
                height={150}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ErrorPatternsSection({
  patterns,
  isLocked,
}: {
  patterns: ErrorPattern[];
  isLocked: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cx(
        "relative rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Error Pattern Detection
          </h3>
        </div>

        {patterns.length === 0 ? (
          <div className="py-8 text-center text-stone-500">
            <CheckCircle2 size={48} className="mx-auto mb-3 text-green-400" />
            <p>No significant error patterns detected!</p>
            <p className="text-sm">Complete more tests to reveal patterns in your mistakes.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {patterns.map((pattern, i) => (
              <FadeInStagger key={i} index={i} baseDelay={200} staggerDelay={150}>
                <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20 transition-transform hover:scale-[1.01]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-amber-800 dark:text-amber-300">
                        {pattern.patternName}
                      </h4>
                      <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                        {pattern.description}
                      </p>
                    </div>
                    <div className="rounded-sm bg-amber-200 px-2 py-1 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">
                      <AnimatedCounter value={pattern.frequency} decimals={0} />% of errors
                    </div>
                  </div>
                  <div className="mt-3 rounded-sm bg-white/50 p-3 dark:bg-stone-800/50">
                    <div className="flex items-start gap-2">
                      <Zap size={16} className="mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                      <p className="text-sm text-stone-700 dark:text-stone-300">
                        <span className="font-semibold">Recommendation:</span> {pattern.recommendation}
                      </p>
                    </div>
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

function FatigueAnalysisSection({
  analysis,
  isLocked,
}: {
  analysis: FatigueAnalysis;
  isLocked: boolean;
}) {
  const hasData = analysis.firstHalfAccuracy > 0 || analysis.secondHalfAccuracy > 0;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cx(
        "relative rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="mb-4 flex items-center gap-2">
          <Battery size={20} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Fatigue Analysis
          </h3>
        </div>

        {!hasData ? (
          <div className="py-8 text-center text-stone-500">
            Complete some practice tests to analyze fatigue patterns.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Fatigue Summary */}
            <div>
              <FadeInStagger index={0} baseDelay={200}>
                <div
                  className={cx(
                    "mb-4 rounded-sm border-2 p-4",
                    analysis.hasFatigueIssue
                      ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                      : "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {analysis.hasFatigueIssue ? (
                      <XCircle size={20} className="text-red-600 dark:text-red-400" />
                    ) : (
                      <CheckCircle2 size={20} className="text-green-600 dark:text-green-400" />
                    )}
                    <span
                      className={cx(
                        "font-semibold",
                        analysis.hasFatigueIssue
                          ? "text-red-700 dark:text-red-400"
                          : "text-green-700 dark:text-green-400"
                      )}
                    >
                      {analysis.hasFatigueIssue
                        ? "Fatigue Issue Detected"
                        : "Good Endurance"}
                    </span>
                  </div>
                  <p
                    className={cx(
                      "mt-2 text-sm",
                      analysis.hasFatigueIssue
                        ? "text-red-600 dark:text-red-400"
                        : "text-green-600 dark:text-green-400"
                    )}
                  >
                    {analysis.hasFatigueIssue
                      ? <>Your accuracy drops <AnimatedCounter value={analysis.performanceDrop} decimals={0} />% in the second half of sections.</>
                      : "Your performance stays consistent throughout sections."}
                  </p>
                </div>
              </FadeInStagger>

              <FadeInStagger index={1} baseDelay={200}>
                <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                  <div className="text-sm text-stone-500">Recommended Session Length</div>
                  <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                    <AnimatedCounter value={analysis.optimalSessionLength} /> questions
                  </div>
                  <p className="mt-1 text-xs text-stone-500">
                    Take a short break after this many questions
                  </p>
                </div>
              </FadeInStagger>
            </div>

            {/* First vs Second Half */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-stone-700 dark:text-stone-300">
                First Half vs Second Half
              </h4>
              <div className="space-y-4">
                <FadeInStagger index={0} baseDelay={300}>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-stone-600 dark:text-stone-400">First Half Accuracy</span>
                      <span className="font-semibold text-stone-900 dark:text-stone-100">
                        <AnimatedCounter value={analysis.firstHalfAccuracy} decimals={0} />%
                      </span>
                    </div>
                    <AnimatedProgressBar
                      percentage={analysis.firstHalfAccuracy}
                      color="bg-green-500"
                      delay={400}
                      height="h-3"
                    />
                  </div>
                </FadeInStagger>
                <FadeInStagger index={1} baseDelay={300}>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-stone-600 dark:text-stone-400">Second Half Accuracy</span>
                      <span className="font-semibold text-stone-900 dark:text-stone-100">
                        <AnimatedCounter value={analysis.secondHalfAccuracy} decimals={0} />%
                      </span>
                    </div>
                    <AnimatedProgressBar
                      percentage={analysis.secondHalfAccuracy}
                      color={analysis.hasFatigueIssue ? "bg-red-500" : "bg-green-500"}
                      delay={500}
                      height="h-3"
                    />
                  </div>
                </FadeInStagger>
                <FadeInStagger index={2} baseDelay={300}>
                  <div className="rounded-sm bg-stone-100 p-3 text-center dark:bg-stone-800">
                    <span className="text-sm text-stone-600 dark:text-stone-400">Performance Drop: </span>
                    <span
                      className={cx(
                        "font-bold",
                        analysis.performanceDrop > 10
                          ? "text-red-600 dark:text-red-400"
                          : analysis.performanceDrop > 5
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-green-600 dark:text-green-400"
                      )}
                    >
                      <AnimatedCounter value={analysis.performanceDrop} decimals={0} />%
                    </span>
                  </div>
                </FadeInStagger>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StrengthsWeaknessesSection({
  strengths,
  weaknesses,
  isLocked,
}: {
  strengths: QuestionTypeStats[];
  weaknesses: QuestionTypeStats[];
  isLocked: boolean;
}) {
  return (
    <div className="relative rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
      {isLocked && <ProLockOverlay />}
      <div className={isLocked ? "opacity-30 blur-sm pointer-events-none" : ""}>
        <div className="mb-4 flex items-center gap-2">
          <Target size={20} className="text-[#1a365d] dark:text-amber-400" />
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Strengths & Weaknesses
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Strengths */}
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-400">
              <CheckCircle2 size={16} />
              Top Strengths
            </h4>
            {strengths.length === 0 ? (
              <p className="text-sm text-stone-500">Complete more tests to identify strengths</p>
            ) : (
              <div className="space-y-2">
                {strengths.map((s, idx) => (
                  <FadeInStagger key={s.type} index={idx} staggerDelay={100}>
                    <div className="flex items-center justify-between rounded-sm border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                      <span className="text-sm font-medium text-green-800 dark:text-green-300">
                        {s.displayName}
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400">
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
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-400">
              <XCircle size={16} />
              Top Weaknesses
            </h4>
            {weaknesses.length === 0 ? (
              <p className="text-sm text-stone-500">No significant weaknesses identified yet</p>
            ) : (
              <div className="space-y-2">
                {weaknesses.map((w, idx) => (
                  <FadeInStagger key={w.type} index={idx} staggerDelay={100}>
                    <div className="flex items-center justify-between rounded-sm border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                      <span className="text-sm font-medium text-red-800 dark:text-red-300">
                        {w.displayName}
                      </span>
                      <span className="font-bold text-red-600 dark:text-red-400">
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
          <FadeInStagger index={0} baseDelay={300}>
            <div className="mt-4">
              <Link
                href={`/test-select?type=targeted&weakTypes=${weaknesses.map((w) => w.type).join(",")}`}
                className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Practice Weak Areas
                <ChevronRight size={16} />
              </Link>
            </div>
          </FadeInStagger>
        )}
      </div>
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
  const [questionTypeStats, setQuestionTypeStats] = useState<QuestionTypeStats[]>([]);
  const [strengths, setStrengths] = useState<QuestionTypeStats[]>([]);
  const [weaknesses, setWeaknesses] = useState<QuestionTypeStats[]>([]);
  const [timeAnalytics, setTimeAnalytics] = useState<TimeAnalytics | null>(null);
  const [scoreTrend, setScoreTrend] = useState<ScoreTrendAnalysis | null>(null);
  const [errorPatterns, setErrorPatterns] = useState<ErrorPattern[]>([]);
  const [fatigueAnalysis, setFatigueAnalysis] = useState<FatigueAnalysis | null>(null);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setCurrentUserId(firebaseUser?.uid || null);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Get user's subscription tier
  useEffect(() => {
    if (user) {
      const tier = getUserTier(user);
      setUserTier(tier);
    } else {
      setUserTier("free");
    }
  }, [user]);

  // Load progress and compute analytics
  useEffect(() => {
    if (authLoading) return;

    const userId = user?.uid;
    const loaded = loadUserProgress(userId);
    setProgress(loaded);

    // Compute all analytics
    setQuestionTypeStats(getDetailedQuestionTypeStats(loaded));
    setStrengths(getTopStrengths(loaded));
    setWeaknesses(getTopWeaknesses(loaded));
    setTimeAnalytics(getTimeAnalytics(loaded));
    setScoreTrend(getScoreTrendAnalysis(loaded));
    setErrorPatterns(detectErrorPatterns(loaded));
    setFatigueAnalysis(analyzeFatigue(loaded));
    setSummary(getAnalyticsSummary(loaded));

    setIsLoading(false);
  }, [user, authLoading]);

  // Handle sign out
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
            <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">
              Loading insights...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ArrowLeft size={16} />
              Dashboard
            </Link>
            <div className="h-6 w-px bg-stone-200 dark:bg-stone-700" />
            <h1 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Advanced Insights
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-sm border-2 border-stone-200 bg-white p-2 text-stone-600 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Tier Badge */}
            {user && (() => {
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

            {/* User Profile or Sign In Button */}
            {user ? (
              <div className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700 dark:bg-stone-800">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="h-6 w-6 rounded-full"
                  />
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a365d] text-xs font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                    {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="hidden max-w-[100px] truncate text-sm font-medium text-stone-700 dark:text-stone-300 sm:block">
                  {user.displayName || user.email?.split("@")[0]}
                </span>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="ml-1 rounded p-1 text-stone-400 transition hover:bg-stone-200 hover:text-red-600 dark:hover:bg-stone-700 dark:hover:text-red-400"
                  title="Sign Out"
                >
                  <LogOut size={16} />
                </button>
              </div>
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

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Pro Upgrade Banner for Free Users */}
        {!isProOrFounder && (
          <div className="mb-8 rounded-sm border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 p-6 dark:border-amber-500/50 dark:from-amber-900/20 dark:to-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-sm bg-amber-100 p-3 dark:bg-amber-500/20">
                  <Lock size={24} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-amber-900 dark:text-amber-100">
                    Unlock Advanced Insights
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Upgrade to Pro to access detailed performance insights, error patterns, fatigue analysis, and more.
                  </p>
                </div>
              </div>
              <Link
                href="/subscription"
                className="inline-flex items-center gap-2 rounded-sm bg-amber-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                <Crown size={16} />
                Upgrade to Pro
              </Link>
            </div>
          </div>
        )}

        {/* Summary Cards */}
        {summary && (
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryCard
              icon={Target}
              label="Overall Accuracy"
              value={`${Math.round(summary.overallAccuracy)}%`}
              subtext={`${summary.totalQuestionsAnalyzed} questions analyzed`}
              color={summary.overallAccuracy >= 70 ? "green" : summary.overallAccuracy >= 50 ? "amber" : "red"}
            />
            <SummaryCard
              icon={TrendingUp}
              label="Projected Score"
              value={summary.projectedScore}
              subtext={`Trend: ${summary.scoreTrend}`}
              color={summary.scoreTrend === "improving" ? "green" : summary.scoreTrend === "declining" ? "red" : "blue"}
            />
            <SummaryCard
              icon={Clock}
              label="Avg Time/Question"
              value={`${Math.floor(summary.avgTimePerQuestion / 60)}:${Math.round(summary.avgTimePerQuestion % 60).toString().padStart(2, "0")}`}
              subtext="per question"
              color="blue"
            />
            <SummaryCard
              icon={Battery}
              label="Fatigue Status"
              value={summary.hasFatigueIssue ? "Issue Detected" : "Good"}
              subtext={summary.hasFatigueIssue ? "Performance drops in 2nd half" : "Consistent throughout"}
              color={summary.hasFatigueIssue ? "red" : "green"}
            />
          </div>
        )}

        {/* Analytics Sections */}
        <div className="space-y-6">
          <StrengthsWeaknessesSection
            strengths={strengths}
            weaknesses={weaknesses}
            isLocked={!isProOrFounder}
          />

          <QuestionTypePerformanceSection
            stats={questionTypeStats}
            isLocked={!isProOrFounder}
          />

          {timeAnalytics && (
            <TimeAnalyticsSection
              analytics={timeAnalytics}
              isLocked={!isProOrFounder}
              testCount={progress?.completedTests?.length || 0}
            />
          )}

          {scoreTrend && (
            <ScoreTrendSection
              analysis={scoreTrend}
              isLocked={!isProOrFounder}
            />
          )}

          <ErrorPatternsSection
            patterns={errorPatterns}
            isLocked={!isProOrFounder}
          />

          {fatigueAnalysis && (
            <FatigueAnalysisSection
              analysis={fatigueAnalysis}
              isLocked={!isProOrFounder}
            />
          )}
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
