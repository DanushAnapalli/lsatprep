"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  CheckCircle2,
  Circle,
  ChevronRight,
  Edit2,
  X,
  Award,
  Zap,
} from "lucide-react";
import {
  UserGoal,
  GoalProgress,
  calculateGoalProgress,
  saveUserGoal,
  loadUserGoal,
  getPercentile,
} from "@/lib/goal-tracking";
import { UserProgress } from "@/lib/user-progress";
import { getUserTier, SubscriptionTier } from "@/lib/subscription";
import { User as FirebaseUser } from "firebase/auth";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// ============================================
// CIRCULAR PROGRESS RING
// ============================================

function ProgressRing({
  percentage,
  size = 120,
  strokeWidth = 8,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-stone-200 dark:text-stone-700"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="text-[#1a365d] dark:text-amber-500"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-stone-900 dark:text-stone-100">
          {Math.round(percentage)}%
        </span>
        <span className="text-xs text-stone-500">complete</span>
      </div>
    </div>
  );
}

// ============================================
// GOAL SETTING MODAL
// ============================================

function GoalSettingModal({
  currentScore,
  existingGoal,
  onSave,
  onClose,
}: {
  currentScore: number;
  existingGoal?: UserGoal | null;
  onSave: (goal: UserGoal) => void;
  onClose: () => void;
}) {
  const [targetScore, setTargetScore] = useState(existingGoal?.targetScore || 165);
  const [targetDate, setTargetDate] = useState<string>(
    existingGoal?.targetDate
      ? existingGoal.targetDate.toISOString().split("T")[0]
      : ""
  );

  const handleSave = () => {
    const goal: UserGoal = {
      targetScore,
      targetDate: targetDate ? new Date(targetDate) : undefined,
      createdAt: existingGoal?.createdAt || new Date(),
      updatedAt: new Date(),
    };
    onSave(goal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative z-10 w-full max-w-md rounded-sm border-4 border-[#1a365d] bg-white p-6 shadow-2xl dark:border-amber-500 dark:bg-stone-900"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
        >
          <X size={20} />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-sm bg-[#1a365d] p-2 dark:bg-amber-500">
            <Target size={24} className="text-white dark:text-stone-900" />
          </div>
          <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            {existingGoal ? "Update Your Goal" : "Set Your Goal"}
          </h2>
        </div>

        <div className="space-y-6">
          {/* Target Score Slider */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-300">
              Target Score
            </label>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                {targetScore}
              </span>
              <span className="text-sm text-stone-500">
                {getPercentile(targetScore)}th percentile
              </span>
            </div>
            <input
              type="range"
              min={Math.max(120, currentScore + 1)}
              max={180}
              value={targetScore}
              onChange={(e) => setTargetScore(Number(e.target.value))}
              className="w-full accent-[#1a365d] dark:accent-amber-500"
            />
            <div className="mt-1 flex justify-between text-xs text-stone-400">
              <span>{Math.max(120, currentScore + 1)}</span>
              <span>180</span>
            </div>
          </div>

          {/* Target Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-300">
              Test Date (Optional)
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-sm border-2 border-stone-200 bg-white px-4 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
            />
            <p className="mt-1 text-xs text-stone-500">
              Setting a test date helps create a more accurate study plan
            </p>
          </div>

          {/* Score Context */}
          <div className="rounded-sm border-2 border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800">
            <h4 className="mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300">
              What this score means
            </h4>
            <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
              {targetScore >= 175 && (
                <li className="flex items-center gap-2">
                  <Award size={14} className="text-amber-500" />
                  Top 1% - Yale, Stanford, Harvard range
                </li>
              )}
              {targetScore >= 170 && targetScore < 175 && (
                <li className="flex items-center gap-2">
                  <Award size={14} className="text-amber-500" />
                  Top 3% - T14 competitive range
                </li>
              )}
              {targetScore >= 165 && targetScore < 170 && (
                <li className="flex items-center gap-2">
                  <Zap size={14} className="text-blue-500" />
                  Top 10% - T20-T30 competitive range
                </li>
              )}
              {targetScore >= 160 && targetScore < 165 && (
                <li className="flex items-center gap-2">
                  <Zap size={14} className="text-green-500" />
                  Above average - Many strong options
                </li>
              )}
              <li className="flex items-center gap-2">
                <TrendingUp size={14} />
                {targetScore - currentScore} points from your current best
              </li>
            </ul>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full rounded-sm bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            {existingGoal ? "Update Goal" : "Set My Goal"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================
// MILESTONE DISPLAY
// ============================================

function MilestoneList({
  milestones,
}: {
  milestones: GoalProgress["milestones"];
}) {
  return (
    <div className="space-y-3">
      {milestones.map((milestone, index) => (
        <div
          key={index}
          className={cx(
            "flex items-center gap-3 rounded-sm border-2 p-3 transition",
            milestone.achieved
              ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
              : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
          )}
        >
          {milestone.achieved ? (
            <CheckCircle2 size={20} className="flex-shrink-0 text-green-600 dark:text-green-400" />
          ) : (
            <Circle size={20} className="flex-shrink-0 text-stone-300 dark:text-stone-600" />
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span
                className={cx(
                  "font-semibold",
                  milestone.achieved
                    ? "text-green-700 dark:text-green-300"
                    : "text-stone-700 dark:text-stone-300"
                )}
              >
                {milestone.label}
              </span>
              <span
                className={cx(
                  "text-sm font-bold",
                  milestone.achieved
                    ? "text-green-600 dark:text-green-400"
                    : "text-stone-500"
                )}
              >
                {milestone.score}
              </span>
            </div>
            <p className="text-xs text-stone-500">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// IMPROVEMENT AREAS
// ============================================

function ImprovementAreasList({
  areas,
  isPro,
}: {
  areas: GoalProgress["improvementAreas"];
  isPro: boolean;
}) {
  const displayAreas = isPro ? areas : areas.slice(0, 2);

  return (
    <div className="space-y-3">
      {displayAreas.map((area, index) => (
        <div
          key={area.questionType}
          className="rounded-sm border-2 border-stone-200 p-4 dark:border-stone-700"
        >
          <div className="mb-2 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={cx(
                    "rounded-sm px-2 py-0.5 text-xs font-bold uppercase",
                    area.priority === "high"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : area.priority === "medium"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  )}
                >
                  {area.priority}
                </span>
                <span className="text-xs text-stone-500">
                  {area.sectionType === "logical-reasoning" ? "LR" : "RC"}
                </span>
              </div>
              <h4 className="mt-1 font-semibold text-stone-900 dark:text-stone-100">
                {area.displayName}
              </h4>
            </div>
          </div>

          {/* Accuracy Bar */}
          <div className="mb-2">
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-stone-500">
                Current: {Math.round(area.currentAccuracy)}%
              </span>
              <span className="font-medium text-[#1a365d] dark:text-amber-400">
                Target: {Math.round(area.targetAccuracy)}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div
                className={cx(
                  "h-full rounded-full transition-all duration-500",
                  area.currentAccuracy >= 70
                    ? "bg-green-500"
                    : area.currentAccuracy >= 50
                    ? "bg-amber-500"
                    : "bg-red-500"
                )}
                style={{ width: `${area.currentAccuracy}%` }}
              />
            </div>
          </div>

          <p className="text-sm text-stone-600 dark:text-stone-400">
            {area.recommendation}
          </p>
        </div>
      ))}

      {!isPro && areas.length > 2 && (
        <div className="rounded-sm border-2 border-dashed border-stone-300 p-4 text-center dark:border-stone-600">
          <p className="text-sm text-stone-500">
            +{areas.length - 2} more improvement areas
          </p>
          <a
            href="/subscription"
            className="mt-1 inline-block text-sm font-semibold text-[#1a365d] hover:underline dark:text-amber-400"
          >
            Upgrade to Pro to see all
          </a>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function GoalTracker({
  progress,
  user,
  compact = false,
}: {
  progress: UserProgress;
  user: FirebaseUser | null;
  compact?: boolean;
}) {
  const [goal, setGoal] = useState<UserGoal | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  const userTier = user ? getUserTier(user) : "free";
  const isPro = userTier === "pro" || userTier === "founder";

  // Load goal on mount
  useEffect(() => {
    setMounted(true);
    const loadedGoal = loadUserGoal(user?.uid);
    setGoal(loadedGoal);
  }, [user?.uid]);

  const handleSaveGoal = (newGoal: UserGoal) => {
    setGoal(newGoal);
    saveUserGoal(newGoal, user?.uid);
    setShowModal(false);
  };

  const goalProgress = useMemo(() => {
    if (!goal) return null;
    return calculateGoalProgress(progress, goal);
  }, [progress, goal]);

  const currentScore = progress.highestScore || progress.averageScore || 0;

  if (!mounted) return null;

  // No goal set - show CTA
  if (!goal) {
    return (
      <>
        <div
          className={cx(
            "rounded-sm border-2 border-dashed border-[#1a365d] bg-[#1a365d]/5 p-6 dark:border-amber-500 dark:bg-amber-500/5",
            compact ? "text-center" : ""
          )}
        >
          <div className={cx("flex items-center gap-4", compact ? "flex-col" : "")}>
            <div className="rounded-sm bg-[#1a365d]/10 p-3 dark:bg-amber-500/10">
              <Target size={24} className="text-[#1a365d] dark:text-amber-400" />
            </div>
            <div className={compact ? "text-center" : ""}>
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                Set Your LSAT Goal
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Track your progress and get personalized recommendations
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className={cx(
                "rounded-sm bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400",
                compact ? "mt-2" : "ml-auto"
              )}
            >
              Set Goal
            </button>
          </div>
        </div>

        {showModal && (
          <GoalSettingModal
            currentScore={currentScore}
            onSave={handleSaveGoal}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    );
  }

  // Compact view for dashboard widget
  if (compact && goalProgress) {
    return (
      <>
        <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ProgressRing percentage={goalProgress.percentComplete} size={80} strokeWidth={6} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {currentScore}
                  </span>
                  <ChevronRight size={16} className="text-stone-400" />
                  <span className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                    {goal.targetScore}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  {goalProgress.projection.trend === "improving" && (
                    <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <TrendingUp size={14} />
                      Improving
                    </span>
                  )}
                  {goalProgress.projection.trend === "stable" && (
                    <span className="flex items-center gap-1 text-stone-500">
                      <Minus size={14} />
                      Stable
                    </span>
                  )}
                  {goalProgress.projection.trend === "declining" && (
                    <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
                      <TrendingDown size={14} />
                      Needs attention
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="rounded-sm p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800 dark:hover:text-stone-300"
            >
              <Edit2 size={16} />
            </button>
          </div>

          {goalProgress.improvementAreas.length > 0 && (
            <div className="mt-4 border-t border-stone-200 pt-4 dark:border-stone-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Top Priority
              </p>
              <p className="mt-1 font-medium text-stone-900 dark:text-stone-100">
                {goalProgress.improvementAreas[0].displayName}
              </p>
              <p className="text-sm text-stone-500">
                {Math.round(goalProgress.improvementAreas[0].currentAccuracy)}% accuracy
              </p>
            </div>
          )}

          {/* View Details Link - Highlighted */}
          <a
            href="/goals"
            className="mt-4 flex items-center justify-center gap-1 rounded-sm bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] py-2.5 text-sm font-semibold text-white transition hover:from-[#2d4a7c] hover:to-[#1a365d] shadow-sm dark:from-amber-500 dark:to-orange-500 dark:text-stone-900 dark:hover:from-amber-400 dark:hover:to-orange-400"
          >
            View All Goal Details
            <ChevronRight size={14} />
          </a>
        </div>

        {showModal && (
          <GoalSettingModal
            currentScore={currentScore}
            existingGoal={goal}
            onSave={handleSaveGoal}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    );
  }

  // Full view - Grid layout like analytics page
  const achievedMilestones = goalProgress?.milestones.filter(m => m.achieved).length || 0;
  const totalMilestones = goalProgress?.milestones.length || 0;

  return (
    <>
      {/* 6-Panel Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Panel 1: Progress Overview */}
        <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Target size={18} className="text-[#1a365d] dark:text-amber-400" />
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                Your Goal
              </h3>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="rounded-sm p-1.5 text-stone-400 transition hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800 dark:hover:text-stone-300"
              title="Edit goal"
            >
              <Edit2 size={16} />
            </button>
          </div>

          {goalProgress && (
            <div className="flex items-center gap-4">
              <ProgressRing percentage={goalProgress.percentComplete} size={100} strokeWidth={8} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {currentScore}
                  </span>
                  <ChevronRight size={16} className="text-stone-400" />
                  <span className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                    {goal.targetScore}
                  </span>
                </div>
                <p className="text-sm text-stone-500 mt-1">
                  {goalProgress.pointsToGo} points to go
                </p>
                {goal.targetDate && (
                  <p className="flex items-center gap-1 text-xs text-stone-400 mt-1">
                    <Calendar size={12} />
                    {goal.targetDate.toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Panel 2: Score Projection */}
        <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={18} className="text-[#1a365d] dark:text-amber-400" />
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Projection
            </h3>
          </div>

          {goalProgress && (
            <div className="space-y-3">
              <div>
                <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400">
                  {goalProgress.projection.projectedScore}
                </div>
                <p className="text-xs text-stone-500">
                  Range: {goalProgress.projection.confidenceRange.low}-{goalProgress.projection.confidenceRange.high}
                </p>
              </div>

              <div>
                {goalProgress.projection.trend === "improving" && (
                  <span className="inline-flex items-center gap-1 rounded-sm bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <TrendingUp size={12} />
                    Improving
                  </span>
                )}
                {goalProgress.projection.trend === "stable" && (
                  <span className="inline-flex items-center gap-1 rounded-sm bg-stone-100 px-2 py-1 text-xs font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                    <Minus size={12} />
                    Stable
                  </span>
                )}
                {goalProgress.projection.trend === "declining" && (
                  <span className="inline-flex items-center gap-1 rounded-sm bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    <TrendingDown size={12} />
                    Needs attention
                  </span>
                )}
              </div>

              {goalProgress.estimatedDaysToGoal && goalProgress.projection.trend === "improving" && (
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  ~{goalProgress.estimatedDaysToGoal} days at current pace
                </p>
              )}

              <div className={cx(
                "rounded-sm p-2 text-xs font-medium",
                goalProgress.onTrack
                  ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  : "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
              )}>
                {goalProgress.onTrack
                  ? "On track to reach your goal!"
                  : "Increase practice to stay on track"}
              </div>
            </div>
          )}
        </div>

        {/* Panel 3: Milestones */}
        <div className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full">
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-[#1a365d] dark:text-amber-400" />
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Milestones
            </h3>
          </div>

          {goalProgress && goalProgress.milestones.length > 0 ? (
            <div className="space-y-2">
              {goalProgress.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={cx(
                    "flex items-center gap-3 rounded-sm border p-2.5",
                    milestone.achieved
                      ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                      : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
                  )}
                >
                  {milestone.achieved ? (
                    <CheckCircle2 size={16} className="flex-shrink-0 text-green-600 dark:text-green-400" />
                  ) : (
                    <Circle size={16} className="flex-shrink-0 text-stone-300 dark:text-stone-600" />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className={cx(
                      "text-sm font-medium",
                      milestone.achieved
                        ? "text-green-700 dark:text-green-300"
                        : "text-stone-700 dark:text-stone-300"
                    )}>
                      {milestone.label}
                    </span>
                  </div>
                  <span className={cx(
                    "text-sm font-bold",
                    milestone.achieved
                      ? "text-green-600 dark:text-green-400"
                      : "text-stone-500"
                  )}>
                    {milestone.score}
                  </span>
                </div>
              ))}
              <p className="text-xs text-stone-500 mt-2">
                {achievedMilestones}/{totalMilestones} completed
              </p>
            </div>
          ) : (
            <p className="text-sm text-stone-500">Set a goal to see milestones</p>
          )}
        </div>

        {/* Panel 4-6: Focus Areas (spans remaining space) */}
        {goalProgress && goalProgress.improvementAreas.length > 0 && (
          <>
            {goalProgress.improvementAreas.slice(0, 3).map((area, index) => (
              <div
                key={area.questionType}
                className="rounded-sm border-2 border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900 h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={18} className="text-[#1a365d] dark:text-amber-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Focus Area {index + 1}
                  </span>
                  <span className={cx(
                    "ml-auto rounded-sm px-1.5 py-0.5 text-xs font-bold uppercase",
                    area.priority === "high"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : area.priority === "medium"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  )}>
                    {area.priority}
                  </span>
                </div>

                <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {area.displayName}
                </h4>

                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-stone-500">Current</span>
                    <span className="font-medium text-[#1a365d] dark:text-amber-400">
                      Target: {area.targetAccuracy}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                    <div
                      className={cx(
                        "h-full rounded-full transition-all",
                        area.currentAccuracy >= 70 ? "bg-green-500" :
                        area.currentAccuracy >= 50 ? "bg-amber-500" : "bg-red-500"
                      )}
                      style={{ width: `${area.currentAccuracy}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="font-bold text-stone-700 dark:text-stone-300">
                      {Math.round(area.currentAccuracy)}%
                    </span>
                    <span className="text-stone-400">
                      {area.questionsAttempted} Qs
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                  {area.recommendation}
                </p>
              </div>
            ))}
          </>
        )}

        {/* Fill empty slots if less than 3 improvement areas */}
        {goalProgress && goalProgress.improvementAreas.length < 3 && (
          Array.from({ length: 3 - goalProgress.improvementAreas.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="rounded-sm border-2 border-dashed border-stone-200 bg-stone-50 p-5 dark:border-stone-700 dark:bg-stone-800/50 flex items-center justify-center"
            >
              <p className="text-sm text-stone-400 text-center">
                Complete more tests to unlock additional insights
              </p>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <GoalSettingModal
          currentScore={currentScore}
          existingGoal={goal}
          onSave={handleSaveGoal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
