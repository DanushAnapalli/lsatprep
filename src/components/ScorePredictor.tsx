"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  Target,
  Zap,
  Info,
} from "lucide-react";
import {
  ScoreProjection,
  calculateProjectedScore,
  getPercentile,
} from "@/lib/goal-tracking";
import { UserProgress } from "@/lib/user-progress";
import { getUserTier } from "@/lib/subscription";
import { User as FirebaseUser } from "firebase/auth";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// ============================================
// SCORE GAUGE VISUALIZATION
// ============================================

function ScoreGauge({
  score,
  minScore = 120,
  maxScore = 180,
  projectedScore,
  confidenceLow,
  confidenceHigh,
}: {
  score: number;
  minScore?: number;
  maxScore?: number;
  projectedScore?: number;
  confidenceLow?: number;
  confidenceHigh?: number;
}) {
  const range = maxScore - minScore;
  const scorePosition = ((score - minScore) / range) * 100;
  const projectedPosition = projectedScore
    ? ((projectedScore - minScore) / range) * 100
    : null;
  const confidenceLowPos = confidenceLow
    ? ((confidenceLow - minScore) / range) * 100
    : null;
  const confidenceHighPos = confidenceHigh
    ? ((confidenceHigh - minScore) / range) * 100
    : null;

  return (
    <div className="relative h-8 w-full">
      {/* Background track */}
      <div className="absolute inset-y-2 left-0 right-0 rounded-full bg-gradient-to-r from-red-200 via-amber-200 to-green-200 dark:from-red-900/50 dark:via-amber-900/50 dark:to-green-900/50" />

      {/* Confidence range */}
      {confidenceLowPos !== null && confidenceHighPos !== null && (
        <motion.div
          className="absolute inset-y-1 rounded-full bg-[#1a365d]/20 dark:bg-amber-500/20"
          initial={{ left: `${scorePosition}%`, right: `${100 - scorePosition}%` }}
          animate={{
            left: `${confidenceLowPos}%`,
            right: `${100 - confidenceHighPos}%`,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}

      {/* Current score marker */}
      <motion.div
        className="absolute top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-white bg-[#1a365d] shadow-lg dark:border-stone-800 dark:bg-amber-500"
        initial={{ left: "0%" }}
        animate={{ left: `${scorePosition}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-[#1a365d] dark:text-amber-400">
          {score}
        </span>
      </motion.div>

      {/* Projected score marker */}
      {projectedPosition !== null && projectedPosition !== scorePosition && (
        <motion.div
          className="absolute top-1/2 z-5 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#1a365d] bg-white dark:border-amber-400 dark:bg-stone-800"
          initial={{ left: `${scorePosition}%`, opacity: 0 }}
          animate={{ left: `${projectedPosition}%`, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-stone-500">
            proj.
          </span>
        </motion.div>
      )}

      {/* Score labels */}
      <div className="absolute -bottom-6 left-0 text-xs text-stone-400">
        {minScore}
      </div>
      <div className="absolute -bottom-6 right-0 text-xs text-stone-400">
        {maxScore}
      </div>
    </div>
  );
}

// ============================================
// TREND INDICATOR
// ============================================

function TrendIndicator({
  trend,
  size = "default",
}: {
  trend: "improving" | "stable" | "declining";
  size?: "small" | "default";
}) {
  const iconSize = size === "small" ? 14 : 18;

  return (
    <div
      className={cx(
        "inline-flex items-center gap-1 rounded-sm px-2 py-1 font-medium",
        size === "small" ? "text-xs" : "text-sm",
        trend === "improving" &&
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        trend === "stable" &&
          "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
        trend === "declining" &&
          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      )}
    >
      {trend === "improving" && <TrendingUp size={iconSize} />}
      {trend === "stable" && <Minus size={iconSize} />}
      {trend === "declining" && <TrendingDown size={iconSize} />}
      <span className="capitalize">{trend}</span>
    </div>
  );
}

// ============================================
// SCORE BREAKDOWN CARD
// ============================================

function ScoreBreakdownCard({
  label,
  value,
  subtext,
  icon: Icon,
  highlight = false,
}: {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: React.ElementType;
  highlight?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-sm border-2 p-4 transition-colors",
        highlight
          ? "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/10"
          : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
      )}
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-stone-500">{label}</span>
        {Icon && (
          <Icon
            size={16}
            className={cx(
              highlight
                ? "text-[#1a365d] dark:text-amber-400"
                : "text-stone-400"
            )}
          />
        )}
      </div>
      <div
        className={cx(
          "mt-1 text-2xl font-bold",
          highlight
            ? "text-[#1a365d] dark:text-amber-400"
            : "text-stone-900 dark:text-stone-100"
        )}
      >
        {value}
      </div>
      {subtext && <div className="mt-1 text-xs text-stone-500">{subtext}</div>}
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

interface ScorePredictorProps {
  progress: UserProgress;
  user: FirebaseUser | null;
  targetScore?: number;
  showDetails?: boolean;
  compact?: boolean;
}

export default function ScorePredictor({
  progress,
  user,
  targetScore,
  showDetails = true,
  compact = false,
}: ScorePredictorProps) {
  const userTier = user ? getUserTier(user) : "free";
  const isPro = userTier === "pro" || userTier === "founder";

  const projection = useMemo(() => {
    return calculateProjectedScore(progress);
  }, [progress]);

  const hasData = projection.recentTests > 0;

  // No data state
  if (!hasData) {
    return (
      <div
        className={cx(
          "rounded-sm border-2 border-dashed border-stone-300 bg-stone-50 p-6 text-center dark:border-stone-700 dark:bg-stone-900",
          compact ? "p-4" : "p-6"
        )}
      >
        <Activity
          size={compact ? 24 : 32}
          className="mx-auto mb-2 text-stone-300 dark:text-stone-600"
        />
        <div className="font-medium text-stone-500">No score data yet</div>
        <p className="mt-1 text-sm text-stone-400">
          Complete practice tests to see your projected score
        </p>
      </div>
    );
  }

  // Compact view
  if (compact) {
    return (
      <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-stone-500">
              Projected Score
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                {projection.projectedScore}
              </span>
              <TrendIndicator trend={projection.trend} size="small" />
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-stone-500">Range</div>
            <div className="text-sm font-medium text-stone-700 dark:text-stone-300">
              {projection.confidenceRange.low} - {projection.confidenceRange.high}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full view
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-[#1a365d] p-2 dark:bg-amber-500">
            <Activity size={24} className="text-white dark:text-stone-900" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Score Prediction
            </h2>
            <p className="text-sm text-stone-500">
              Based on your last {projection.recentTests} test
              {projection.recentTests > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <TrendIndicator trend={projection.trend} />
      </div>

      {/* Score Gauge */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <div className="mb-8">
          <ScoreGauge
            score={projection.currentScore}
            projectedScore={projection.projectedScore}
            confidenceLow={projection.confidenceRange.low}
            confidenceHigh={projection.confidenceRange.high}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <ScoreBreakdownCard
            label="Current Best"
            value={projection.currentScore}
            subtext={`${getPercentile(projection.currentScore)}th percentile`}
            icon={Target}
          />
          <ScoreBreakdownCard
            label="Projected Score"
            value={projection.projectedScore}
            subtext={`${getPercentile(projection.projectedScore)}th percentile`}
            icon={Zap}
            highlight
          />
          <ScoreBreakdownCard
            label="Confidence Range"
            value={`${projection.confidenceRange.low}-${projection.confidenceRange.high}`}
            subtext="Based on score variance"
            icon={Info}
          />
        </div>
      </div>

      {/* Target Progress (if target score provided) */}
      {targetScore && showDetails && (
        <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h3 className="mb-4 font-semibold text-stone-900 dark:text-stone-100">
            Path to Your Goal
          </h3>

          <div className="space-y-4">
            {/* Progress bar to target */}
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-stone-500">Progress to {targetScore}</span>
                <span className="font-medium text-[#1a365d] dark:text-amber-400">
                  {Math.round(
                    ((projection.currentScore - 120) / (targetScore - 120)) * 100
                  )}
                  %
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] dark:from-amber-500 dark:to-amber-400"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min(
                      100,
                      ((projection.currentScore - 120) / (targetScore - 120)) * 100
                    )}%`,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Points analysis */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
                <div className="text-sm text-stone-500">Points to Go</div>
                <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {Math.max(0, targetScore - projection.currentScore)}
                </div>
              </div>
              <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
                <div className="text-sm text-stone-500">
                  Projected vs Target
                </div>
                <div
                  className={cx(
                    "text-2xl font-bold",
                    projection.projectedScore >= targetScore
                      ? "text-green-600 dark:text-green-400"
                      : "text-amber-600 dark:text-amber-400"
                  )}
                >
                  {projection.projectedScore >= targetScore
                    ? "On Track"
                    : `${targetScore - projection.projectedScore} pts short`}
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div
              className={cx(
                "rounded-sm p-4 text-sm",
                projection.projectedScore >= targetScore
                  ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300"
                  : projection.trend === "improving"
                  ? "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300"
                  : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300"
              )}
            >
              {projection.projectedScore >= targetScore ? (
                <>
                  Your projected score meets your target! Keep up the great
                  work and maintain your practice schedule.
                </>
              ) : projection.trend === "improving" ? (
                <>
                  You're making progress! Continue practicing consistently and
                  focus on your weak areas to reach your goal.
                </>
              ) : (
                <>
                  Consider adjusting your study approach. Focus on your weakest
                  question types and practice more frequently.
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pro-only detailed analytics hint */}
      {!isPro && showDetails && (
        <div className="rounded-sm border-2 border-dashed border-stone-300 p-4 text-center dark:border-stone-600">
          <p className="text-sm text-stone-500">
            Upgrade to Pro for detailed score breakdowns by section and
            question type
          </p>
          <a
            href="/subscription"
            className="mt-2 inline-block text-sm font-semibold text-[#1a365d] hover:underline dark:text-amber-400"
          >
            View Pro Features
          </a>
        </div>
      )}
    </div>
  );
}
