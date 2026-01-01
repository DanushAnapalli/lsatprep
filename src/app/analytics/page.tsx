"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

// Hook for animating numbers
function useAnimatedNumber(
  targetValue: number,
  duration: number = 1500,
  startOnMount: boolean = true
): { value: number; start: () => void } {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  const start = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
  }, [hasStarted]);

  useEffect(() => {
    if (startOnMount) {
      const timeout = setTimeout(() => setHasStarted(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [startOnMount]);

  useEffect(() => {
    if (!hasStarted) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(targetValue * easeOut);

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
  }, [hasStarted, targetValue, duration]);

  return { value: currentValue, start };
}

// Hook for intersection observer (scroll reveal)
function useInView(threshold: number = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}

// Animated progress bar component
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
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, percentage, delay]);

  return (
    <div ref={ref} className={cx(height, "w-full rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden")}>
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

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [ref, isInView] = useInView();
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Staggered fade-in wrapper
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
  const [ref, isInView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, baseDelay + index * staggerDelay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, index, baseDelay, staggerDelay]);

  return (
    <div
      ref={ref}
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
  const [ref, isInView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => setIsVisible(true), index * 100);
      return () => clearTimeout(timeout);
    }
  }, [isInView, index]);

  const colorClasses = {
    amber: "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30",
    green: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    red: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
    blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
  };

  return (
    <div
      ref={ref}
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
        style={{ transitionDelay: `${index * 100 + 200}ms` }}
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
  const [sectionRef, sectionInView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sectionInView) {
      const timeout = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [sectionInView]);

  const getBarColor = (accuracy: number) =>
    accuracy >= 80 ? "bg-green-500" : accuracy >= 60 ? "bg-amber-500" : "bg-red-500";

  return (
    <div
      ref={sectionRef}
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
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-300">
                <Brain size={16} className="text-[#1a365d] dark:text-amber-400" />
                Logical Reasoning
              </h4>
              <div className="space-y-3">
                {lrStats.map((stat, index) => (
                  <FadeInStagger key={stat.type} index={index} baseDelay={200} staggerDelay={80}>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-stone-700 dark:text-stone-300">
                          {stat.displayName}
                          {stat.isWeakness && (
                            <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                              Weak
                            </span>
                          )}
                        </span>
                        <span className="text-stone-500">
                          {stat.correct}/{stat.total} (<AnimatedCounter value={stat.accuracy} decimals={0} />%)
                        </span>
                      </div>
                      <AnimatedProgressBar
                        percentage={stat.accuracy}
                        color={getBarColor(stat.accuracy)}
                        delay={index * 80 + 300}
                      />
                    </div>
                  </FadeInStagger>
                ))}
                {lrStats.length === 0 && (
                  <p className="text-sm text-stone-500">No LR data yet</p>
                )}
              </div>
            </div>

            {/* RC Section */}
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-300">
                <Target size={16} className="text-[#1a365d] dark:text-amber-400" />
                Reading Comprehension
              </h4>
              <div className="space-y-3">
                {rcStats.map((stat, index) => (
                  <FadeInStagger key={stat.type} index={index} baseDelay={400} staggerDelay={80}>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-stone-700 dark:text-stone-300">
                          {stat.displayName}
                          {stat.isWeakness && (
                            <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                              Weak
                            </span>
                          )}
                        </span>
                        <span className="text-stone-500">
                          {stat.correct}/{stat.total} (<AnimatedCounter value={stat.accuracy} decimals={0} />%)
                        </span>
                      </div>
                      <AnimatedProgressBar
                        percentage={stat.accuracy}
                        color={getBarColor(stat.accuracy)}
                        delay={index * 80 + 500}
                      />
                    </div>
                  </FadeInStagger>
                ))}
                {rcStats.length === 0 && (
                  <p className="text-sm text-stone-500">No RC data yet</p>
                )}
              </div>
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
}: {
  analytics: TimeAnalytics;
  isLocked: boolean;
}) {
  const [sectionRef, sectionInView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sectionInView) {
      const timeout = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [sectionInView]);

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

  const getPercentage = (count: number) => (total > 0 ? (count / total) * 100 : 0);

  const distributionData = [
    { label: "Under 30s", count: distribution.under30s, color: "bg-red-400" },
    { label: "30-60s", count: distribution.thirtyTo60s, color: "bg-green-400" },
    { label: "60-90s", count: distribution.sixtyTo90s, color: "bg-green-500" },
    { label: "90-120s", count: distribution.ninetyTo120s, color: "bg-amber-400" },
    { label: "Over 2 min", count: distribution.over120s, color: "bg-red-500" },
  ];

  return (
    <div
      ref={sectionRef}
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

        {total === 0 ? (
          <div className="py-8 text-center text-stone-500">
            Complete some practice tests to see time analytics.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Time Stats */}
            <div className="space-y-4">
              <FadeInStagger index={0} baseDelay={200}>
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
                <FadeInStagger index={1} baseDelay={200}>
                  <div className="rounded-sm border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                    <div className="text-sm text-red-600 dark:text-red-400">Rushed (&lt;30s)</div>
                    <div className="text-2xl font-bold text-red-700 dark:text-red-400">
                      <AnimatedCounter value={analytics.questionsRushed} />
                    </div>
                  </div>
                </FadeInStagger>
                <FadeInStagger index={2} baseDelay={200}>
                  <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                    <div className="text-sm text-amber-600 dark:text-amber-400">Over 2 min</div>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                      <AnimatedCounter value={analytics.questionsOverPace} />
                    </div>
                  </div>
                </FadeInStagger>
              </div>
            </div>

            {/* Time Distribution */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-stone-700 dark:text-stone-300">
                Time Distribution
              </h4>
              <div className="space-y-2">
                {distributionData.map(({ label, count, color }, index) => (
                  <FadeInStagger key={label} index={index} baseDelay={300} staggerDelay={60}>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm text-stone-600 dark:text-stone-400">{label}</div>
                      <div className="flex-1">
                        <AnimatedProgressBar
                          percentage={getPercentage(count)}
                          color={color}
                          delay={index * 100 + 400}
                          height="h-4"
                        />
                      </div>
                      <div className="w-12 text-right text-sm font-semibold text-stone-700 dark:text-stone-300">
                        <AnimatedCounter value={count} />
                      </div>
                    </div>
                  </FadeInStagger>
                ))}
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
  const [sectionRef, sectionInView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sectionInView) {
      const timeout = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [sectionInView]);

  return (
    <div
      ref={sectionRef}
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
            <FadeInStagger index={0} baseDelay={200}>
              <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/5 p-6 text-center dark:border-amber-500 dark:bg-amber-500/5">
                <div className="text-sm text-stone-600 dark:text-stone-400">Current Score</div>
                <div className="text-4xl font-bold text-[#1a365d] dark:text-amber-400">
                  <AnimatedCounter value={analysis.currentScore} duration={2000} />
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
            <FadeInStagger index={1} baseDelay={200}>
              <div className="rounded-sm border border-stone-200 p-6 text-center dark:border-stone-700">
                <div className="text-sm text-stone-600 dark:text-stone-400">Projected Score</div>
                <div className="text-4xl font-bold text-stone-900 dark:text-stone-100">
                  <AnimatedCounter value={analysis.projectedScore} duration={2000} />
                </div>
                <div className="mt-2 text-sm text-stone-500">
                  Range: {analysis.confidenceLow}-{analysis.confidenceHigh}
                </div>
              </div>
            </FadeInStagger>

            {/* Weekly Improvement */}
            <FadeInStagger index={2} baseDelay={200}>
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
                  <AnimatedCounter value={Math.abs(analysis.weeklyImprovement)} decimals={1} />
                </div>
                <div className="mt-2 text-sm text-stone-500">points per week</div>
              </div>
            </FadeInStagger>
          </div>
        )}

        {/* Score History */}
        {analysis.trends.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold text-stone-700 dark:text-stone-300">
              Recent Scores
            </h4>
            <div className="flex flex-wrap gap-2">
              {analysis.trends.slice(-10).map((trend, i) => (
                <FadeInStagger key={i} index={i} baseDelay={500} staggerDelay={50}>
                  <div className="rounded-sm border border-stone-200 px-3 py-2 text-center dark:border-stone-700 transition-transform hover:scale-105">
                    <div className="text-lg font-bold text-stone-900 dark:text-stone-100">
                      {trend.score}
                    </div>
                    <div className="text-xs text-stone-500">{trend.date}</div>
                  </div>
                </FadeInStagger>
              ))}
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
  const [sectionRef, sectionInView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sectionInView) {
      const timeout = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [sectionInView]);

  return (
    <div
      ref={sectionRef}
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
  const [sectionRef, sectionInView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sectionInView) {
      const timeout = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [sectionInView]);

  return (
    <div
      ref={sectionRef}
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
