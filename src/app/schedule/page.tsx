"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Scale,
  ArrowRight,
  ArrowLeft,
  Moon,
  Sun,
  LogOut,
  Calendar,
  Clock,
  Target,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Zap,
  BookOpen,
  Brain,
  Coffee,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { loadUserProgress, UserProgress, setCurrentUserId } from "@/lib/user-progress";
import { onAuthChange, logOut, User as FirebaseUser } from "@/lib/firebase";
import { useTheme } from "@/components/ThemeProvider";
import { getUserTier, getTierDisplayInfo, SubscriptionTier } from "@/lib/subscription";
import {
  StudySchedule,
  ScheduleConfig,
  WeeklySchedule,
  DailySchedule,
  StudyTask,
  DayOfWeek,
  TaskType,
  DAYS_OF_WEEK,
  DAY_DISPLAY_NAMES,
  TASK_TYPE_NAMES,
} from "@/lib/schedule-types";
import {
  generateStudySchedule,
  loadStudySchedule,
  saveStudySchedule,
  completeTask,
  getTodaysTasks,
  getThisWeeksSchedule,
  calculateScheduleStats,
} from "@/lib/schedule-generator";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================
// TASK ICON
// ============================================

function TaskIcon({ type }: { type: TaskType }) {
  switch (type) {
    case "full-test":
      return <Scale size={18} />;
    case "lr-section":
      return <Brain size={18} />;
    case "rc-section":
      return <BookOpen size={18} />;
    case "lg-section":
      return <Zap size={18} />;
    case "targeted-practice":
      return <Target size={18} />;
    case "review-missed":
      return <AlertCircle size={18} />;
    case "blind-review":
      return <TrendingUp size={18} />;
    case "rest":
      return <Coffee size={18} />;
    default:
      return <Clock size={18} />;
  }
}

// ============================================
// TASK CARD
// ============================================

function TaskCard({
  task,
  onComplete,
  compact = false,
}: {
  task: StudyTask;
  onComplete: (taskId: string) => void;
  compact?: boolean;
}) {
  const getPriorityColor = () => {
    if (task.completed) return "border-green-500 bg-green-50 dark:bg-green-900/20";
    switch (task.priority) {
      case "required":
        return "border-[#1a365d] dark:border-amber-500";
      case "recommended":
        return "border-stone-300 dark:border-stone-600";
      case "optional":
        return "border-stone-200 dark:border-stone-700";
    }
  };

  if (task.type === "rest") {
    return (
      <div className="rounded-sm border-2 border-dashed border-stone-200 bg-stone-50 p-4 text-center dark:border-stone-700 dark:bg-stone-800">
        <Coffee size={24} className="mx-auto mb-2 text-stone-400" />
        <div className="text-sm font-medium text-stone-500">Rest Day</div>
        <p className="mt-1 text-xs text-stone-400">{task.description}</p>
      </div>
    );
  }

  return (
    <div
      className={cx(
        "rounded-sm border-2 bg-white p-4 transition dark:bg-stone-900",
        getPriorityColor(),
        task.completed && "opacity-75"
      )}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => !task.completed && onComplete(task.id)}
          className={cx(
            "mt-0.5 flex-shrink-0 rounded-full p-1 transition",
            task.completed
              ? "text-green-600 dark:text-green-400"
              : "text-stone-300 hover:text-[#1a365d] dark:text-stone-600 dark:hover:text-amber-400"
          )}
        >
          {task.completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={cx(
                "flex-shrink-0",
                task.completed
                  ? "text-green-600 dark:text-green-400"
                  : "text-[#1a365d] dark:text-amber-400"
              )}
            >
              <TaskIcon type={task.type} />
            </span>
            <span
              className={cx(
                "font-semibold",
                task.completed
                  ? "text-stone-500 line-through"
                  : "text-stone-900 dark:text-stone-100"
              )}
            >
              {task.title}
            </span>
          </div>

          {!compact && (
            <p className="mt-1 text-sm text-stone-500">{task.description}</p>
          )}

          <div className="mt-2 flex items-center gap-3 text-xs text-stone-400">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {task.estimatedMinutes} min
            </span>
            {!compact && (
              <span
                className={cx(
                  "rounded-sm px-2 py-0.5 font-medium",
                  task.priority === "required"
                    ? "bg-[#1a365d]/10 text-[#1a365d] dark:bg-amber-500/10 dark:text-amber-400"
                    : task.priority === "recommended"
                    ? "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                    : "bg-stone-50 text-stone-400 dark:bg-stone-900 dark:text-stone-500"
                )}
              >
                {task.priority}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// DAILY VIEW
// ============================================

function DailyView({
  day,
  onCompleteTask,
  isToday,
}: {
  day: DailySchedule;
  onCompleteTask: (taskId: string) => void;
  isToday: boolean;
}) {
  const completedCount = day.tasks.filter((t) => t.completed).length;

  return (
    <div
      className={cx(
        "rounded-sm border-2 p-4",
        isToday
          ? "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/5"
          : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900"
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              {DAY_DISPLAY_NAMES[day.dayOfWeek]}
            </span>
            {isToday && (
              <span className="rounded-sm bg-[#1a365d] px-2 py-0.5 text-xs font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                TODAY
              </span>
            )}
          </div>
          <div className="text-xs text-stone-500">
            {new Date(day.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        {!day.isRestDay && (
          <div className="text-right">
            <div className="text-sm font-medium text-stone-700 dark:text-stone-300">
              {completedCount}/{day.tasks.length}
            </div>
            <div className="text-xs text-stone-500">{day.totalMinutes} min</div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        {day.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={onCompleteTask}
            compact
          />
        ))}
      </div>
    </div>
  );
}

// ============================================
// WEEKLY VIEW
// ============================================

function WeeklyView({
  week,
  onCompleteTask,
}: {
  week: WeeklySchedule;
  onCompleteTask: (taskId: string) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="space-y-4">
      <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Week {week.weekNumber}
            </h3>
            <p className="text-sm text-stone-500">
              {new Date(week.startDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}{" "}
              -{" "}
              {new Date(week.endDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="text-right">
            <div className="font-semibold text-[#1a365d] dark:text-amber-400">
              {week.weeklyGoal}
            </div>
            <div className="mt-1 flex flex-wrap justify-end gap-1">
              {week.focusAreas.map((area, i) => (
                <span
                  key={i}
                  className="rounded-sm bg-stone-100 px-2 py-0.5 text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {week.days.map((day) => {
          const dayDate = new Date(day.date);
          dayDate.setHours(0, 0, 0, 0);
          const isToday = dayDate.getTime() === today.getTime();

          return (
            <DailyView
              key={day.date.toString()}
              day={day}
              onCompleteTask={onCompleteTask}
              isToday={isToday}
            />
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// SCHEDULE SETUP FORM
// ============================================

function ScheduleSetupForm({
  currentScore,
  targetScore,
  onGenerate,
}: {
  currentScore: number;
  targetScore: number;
  onGenerate: (config: ScheduleConfig) => void;
}) {
  const [testDate, setTestDate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [studyDays, setStudyDays] = useState<DayOfWeek[]>([
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]);
  const [includeFullTests, setIncludeFullTests] = useState(true);
  const [fullTestFrequency, setFullTestFrequency] = useState<
    "weekly" | "biweekly" | "monthly"
  >("biweekly");

  const toggleDay = (day: DayOfWeek) => {
    setStudyDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = () => {
    if (!testDate || studyDays.length === 0) return;

    const config: ScheduleConfig = {
      testDate: new Date(testDate),
      currentScore,
      targetScore,
      hoursPerWeek,
      studyDays,
      preferredTimeOfDay: "flexible",
      focusAreas: ["lr", "rc"],
      includeFullTests,
      fullTestFrequency,
    };

    onGenerate(config);
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 7); // At least a week out

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-sm border-4 border-[#1a365d] bg-white p-8 shadow-xl dark:border-amber-500 dark:bg-stone-900"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-sm bg-[#1a365d] p-2 dark:bg-amber-500">
          <Calendar size={24} className="text-white dark:text-stone-900" />
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            Create Your Study Schedule
          </h2>
          <p className="text-sm text-stone-500">
            We'll generate a personalized plan based on your goals
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Test Date */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-300">
            When is your LSAT?
          </label>
          <input
            type="date"
            value={testDate}
            onChange={(e) => setTestDate(e.target.value)}
            min={minDate.toISOString().split("T")[0]}
            className="w-full rounded-sm border-2 border-stone-200 bg-white px-4 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
          />
        </div>

        {/* Hours Per Week */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-300">
            Hours per week: {hoursPerWeek}
          </label>
          <input
            type="range"
            min={5}
            max={30}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full accent-[#1a365d] dark:accent-amber-500"
          />
          <div className="mt-1 flex justify-between text-xs text-stone-400">
            <span>5 hrs</span>
            <span>30 hrs</span>
          </div>
        </div>

        {/* Study Days */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-300">
            Which days can you study?
          </label>
          <div className="flex flex-wrap gap-2">
            {DAYS_OF_WEEK.map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={cx(
                  "rounded-sm border-2 px-3 py-1 text-sm font-medium transition",
                  studyDays.includes(day)
                    ? "border-[#1a365d] bg-[#1a365d] text-white dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900"
                    : "border-stone-200 text-stone-600 hover:border-stone-300 dark:border-stone-700 dark:text-stone-400"
                )}
              >
                {DAY_DISPLAY_NAMES[day].slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Full Tests */}
        <div className="rounded-sm border-2 border-stone-200 p-4 dark:border-stone-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-stone-900 dark:text-stone-100">
                Include Full Practice Tests
              </div>
              <p className="text-sm text-stone-500">
                Schedule regular full-length practice tests
              </p>
            </div>
            <button
              onClick={() => setIncludeFullTests(!includeFullTests)}
              className={cx(
                "h-6 w-11 rounded-full transition",
                includeFullTests
                  ? "bg-[#1a365d] dark:bg-amber-500"
                  : "bg-stone-300 dark:bg-stone-600"
              )}
            >
              <div
                className={cx(
                  "h-5 w-5 rounded-full bg-white transition-transform",
                  includeFullTests ? "translate-x-5" : "translate-x-0.5"
                )}
              />
            </button>
          </div>

          {includeFullTests && (
            <div className="mt-4">
              <label className="mb-2 block text-sm text-stone-500">
                How often?
              </label>
              <div className="flex gap-2">
                {(["weekly", "biweekly", "monthly"] as const).map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFullTestFrequency(freq)}
                    className={cx(
                      "flex-1 rounded-sm border-2 py-2 text-sm font-medium capitalize transition",
                      fullTestFrequency === freq
                        ? "border-[#1a365d] bg-[#1a365d]/10 text-[#1a365d] dark:border-amber-500 dark:bg-amber-500/10 dark:text-amber-400"
                        : "border-stone-200 text-stone-600 dark:border-stone-700 dark:text-stone-400"
                    )}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleSubmit}
          disabled={!testDate || studyDays.length === 0}
          className={cx(
            "w-full rounded-sm py-3 font-semibold transition",
            testDate && studyDays.length > 0
              ? "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              : "cursor-not-allowed bg-stone-300 text-stone-500"
          )}
        >
          Generate My Schedule
        </button>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function SchedulePage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [schedule, setSchedule] = useState<StudySchedule | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userTier, setUserTier] = useState<SubscriptionTier>("free");
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

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

  // Load progress and schedule
  useEffect(() => {
    if (authLoading) return;

    const userId = user?.uid;
    const loadedProgress = loadUserProgress(userId);
    const loadedSchedule = loadStudySchedule(userId);

    setProgress(loadedProgress);
    setSchedule(loadedSchedule);

    // Set current week index
    if (loadedSchedule) {
      const thisWeek = getThisWeeksSchedule(loadedSchedule);
      if (thisWeek) {
        const weekIndex = loadedSchedule.weeks.findIndex(
          (w) => w.weekNumber === thisWeek.weekNumber
        );
        if (weekIndex >= 0) {
          setCurrentWeekIndex(weekIndex);
        }
      }
    }

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

  const handleGenerateSchedule = (config: ScheduleConfig) => {
    if (!progress) return;

    const newSchedule = generateStudySchedule(config, progress);
    saveStudySchedule(newSchedule, user?.uid);
    setSchedule(newSchedule);
  };

  const handleCompleteTask = (taskId: string) => {
    if (!schedule) return;

    const updatedSchedule = completeTask(schedule, taskId);
    saveStudySchedule(updatedSchedule, user?.uid);
    setSchedule(updatedSchedule);
  };

  const stats = useMemo(() => {
    if (!schedule) return null;
    return calculateScheduleStats(schedule);
  }, [schedule]);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
              <Scale size={32} className="animate-pulse text-white dark:text-stone-900" />
            </div>
            <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">
              Loading schedule...
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentScore = progress?.highestScore || progress?.averageScore || 150;
  const targetScore = 165; // Default target

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
              <Scale size={20} className="text-white dark:text-stone-900" />
            </div>
            <span className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              LSATprep
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-sm border-2 border-stone-200 bg-white p-2 text-stone-600 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {user && (() => {
              const tierInfo = getTierDisplayInfo(userTier);
              return (
                <div className={cx(
                  "rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide",
                  tierInfo.bgColor,
                  tierInfo.color
                )}>
                  {tierInfo.name}
                </div>
              );
            })()}

            {user ? (
              <button
                onClick={handleSignOut}
                className="rounded-sm border-2 border-stone-200 p-2 text-stone-400 transition hover:bg-stone-100 hover:text-red-600 dark:border-stone-700 dark:hover:bg-stone-800"
              >
                <LogOut size={18} />
              </button>
            ) : (
              <Link
                href="/"
                className="rounded-sm border-2 border-[#1a365d] px-4 py-2 text-sm font-semibold text-[#1a365d] transition hover:bg-[#1a365d] hover:text-white dark:border-amber-500 dark:text-amber-500"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Back Link */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-700 dark:hover:text-stone-300"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Study Schedule
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            {schedule
              ? "Track your daily tasks and stay on pace for your test date"
              : "Create a personalized study plan to reach your target score"}
          </p>
        </div>

        {!schedule ? (
          /* Setup Form */
          <div className="mx-auto max-w-xl">
            <ScheduleSetupForm
              currentScore={currentScore}
              targetScore={targetScore}
              onGenerate={handleGenerateSchedule}
            />
          </div>
        ) : (
          /* Schedule View */
          <div className="space-y-6">
            {/* Stats Bar */}
            {stats && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
                  <div className="text-sm text-stone-500">Days Until Test</div>
                  <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                    {stats.daysUntilTest}
                  </div>
                </div>
                <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
                  <div className="text-sm text-stone-500">Tasks Remaining</div>
                  <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {stats.tasksRemaining}
                  </div>
                </div>
                <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
                  <div className="text-sm text-stone-500">Hours Completed</div>
                  <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {stats.hoursCompleted}/{stats.hoursPlanned}
                  </div>
                </div>
                <div
                  className={cx(
                    "rounded-sm border-2 p-4",
                    stats.onTrack
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                  )}
                >
                  <div className="text-sm text-stone-500">Status</div>
                  <div
                    className={cx(
                      "text-2xl font-bold",
                      stats.onTrack
                        ? "text-green-600 dark:text-green-400"
                        : "text-amber-600 dark:text-amber-400"
                    )}
                  >
                    {stats.onTrack ? "On Track" : "Behind"}
                  </div>
                </div>
              </div>
            )}

            {/* Week Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentWeekIndex(Math.max(0, currentWeekIndex - 1))}
                disabled={currentWeekIndex === 0}
                className={cx(
                  "flex items-center gap-1 rounded-sm border-2 px-3 py-2 font-medium transition",
                  currentWeekIndex === 0
                    ? "cursor-not-allowed border-stone-200 text-stone-400"
                    : "border-stone-300 text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300"
                )}
              >
                <ChevronLeft size={18} />
                Previous Week
              </button>

              <span className="font-semibold text-stone-700 dark:text-stone-300">
                Week {currentWeekIndex + 1} of {schedule.weeks.length}
              </span>

              <button
                onClick={() =>
                  setCurrentWeekIndex(
                    Math.min(schedule.weeks.length - 1, currentWeekIndex + 1)
                  )
                }
                disabled={currentWeekIndex === schedule.weeks.length - 1}
                className={cx(
                  "flex items-center gap-1 rounded-sm border-2 px-3 py-2 font-medium transition",
                  currentWeekIndex === schedule.weeks.length - 1
                    ? "cursor-not-allowed border-stone-200 text-stone-400"
                    : "border-stone-300 text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300"
                )}
              >
                Next Week
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Current Week View */}
            {schedule.weeks[currentWeekIndex] && (
              <WeeklyView
                week={schedule.weeks[currentWeekIndex]}
                onCompleteTask={handleCompleteTask}
              />
            )}

            {/* Reset Schedule Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  setSchedule(null);
                }}
                className="text-sm text-stone-500 hover:text-stone-700 hover:underline dark:hover:text-stone-300"
              >
                Create New Schedule
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
