// Study Schedule Generator
// Creates personalized study schedules based on user goals and availability

import {
  StudySchedule,
  ScheduleConfig,
  WeeklySchedule,
  DailySchedule,
  StudyTask,
  TaskType,
  DayOfWeek,
  ScheduleStats,
  TASK_TEMPLATES,
  DAYS_OF_WEEK,
} from "./schedule-types";
import { UserProgress, getWeakTopics } from "./user-progress";

// ============================================
// SCHEDULE GENERATION
// ============================================

function generateTaskId(): string {
  return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function generateScheduleId(): string {
  return `schedule-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getDayOfWeek(date: Date): DayOfWeek {
  return DAYS_OF_WEEK[date.getDay()];
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getWeekNumber(startDate: Date, currentDate: Date): number {
  const diffTime = currentDate.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7) + 1;
}

function createTask(type: TaskType, overrides?: Partial<StudyTask>): StudyTask {
  const template = TASK_TEMPLATES[type];
  return {
    id: generateTaskId(),
    ...template,
    completed: false,
    ...overrides,
  };
}

/**
 * Distributes study time across available days in a week
 */
function distributeWeeklyTime(
  hoursPerWeek: number,
  studyDays: DayOfWeek[]
): Map<DayOfWeek, number> {
  const distribution = new Map<DayOfWeek, number>();
  const minutesPerWeek = hoursPerWeek * 60;
  const minutesPerDay = Math.floor(minutesPerWeek / studyDays.length);

  for (const day of studyDays) {
    distribution.set(day, minutesPerDay);
  }

  return distribution;
}

/**
 * Determines what phase of prep the user is in based on days until test
 */
function getStudyPhase(daysUntilTest: number): "foundation" | "building" | "refinement" | "final" {
  if (daysUntilTest > 60) return "foundation";
  if (daysUntilTest > 30) return "building";
  if (daysUntilTest > 14) return "refinement";
  return "final";
}

/**
 * Generates tasks for a single day based on available time and phase
 */
function generateDayTasks(
  availableMinutes: number,
  phase: "foundation" | "building" | "refinement" | "final",
  weekNumber: number,
  dayOfWeek: DayOfWeek,
  config: ScheduleConfig,
  isFullTestDay: boolean,
  weakTypes: string[]
): StudyTask[] {
  const tasks: StudyTask[] = [];
  let remainingMinutes = availableMinutes;

  // Full test days are special
  if (isFullTestDay) {
    tasks.push(createTask("full-test"));
    tasks.push(createTask("blind-review", {
      title: "Post-Test Blind Review",
      description: "Review flagged questions from your practice test",
    }));
    return tasks;
  }

  // Phase-based task selection
  switch (phase) {
    case "foundation":
      // Focus on building fundamentals with sections and concept study
      if (remainingMinutes >= 45 && config.focusAreas.includes("lr")) {
        tasks.push(createTask("lr-section"));
        remainingMinutes -= 45;
      }
      if (remainingMinutes >= 45 && config.focusAreas.includes("rc")) {
        tasks.push(createTask("rc-section"));
        remainingMinutes -= 45;
      }
      if (remainingMinutes >= 30) {
        tasks.push(createTask("concept-study"));
        remainingMinutes -= 30;
      }
      break;

    case "building":
      // Mix of sections and targeted practice
      if (weekNumber % 2 === 1) {
        // Odd weeks: focus on LR
        if (remainingMinutes >= 45) {
          tasks.push(createTask("lr-section"));
          remainingMinutes -= 45;
        }
      } else {
        // Even weeks: focus on RC
        if (remainingMinutes >= 45) {
          tasks.push(createTask("rc-section"));
          remainingMinutes -= 45;
        }
      }
      if (remainingMinutes >= 30 && weakTypes.length > 0) {
        tasks.push(createTask("targeted-practice", {
          description: `Focus on: ${weakTypes.slice(0, 3).join(", ")}`,
          questionTypes: weakTypes.slice(0, 5),
        }));
        remainingMinutes -= 30;
      }
      if (remainingMinutes >= 30) {
        tasks.push(createTask("review-missed"));
        remainingMinutes -= 30;
      }
      break;

    case "refinement":
      // Focus on weak areas and timed practice
      if (remainingMinutes >= 45) {
        // Alternate between LR and RC based on day
        if (["monday", "wednesday", "friday"].includes(dayOfWeek)) {
          tasks.push(createTask("lr-section"));
        } else {
          tasks.push(createTask("rc-section"));
        }
        remainingMinutes -= 45;
      }
      if (remainingMinutes >= 30 && weakTypes.length > 0) {
        tasks.push(createTask("targeted-practice", {
          priority: "required",
          description: `Focus on weak areas: ${weakTypes.slice(0, 3).join(", ")}`,
          questionTypes: weakTypes,
        }));
        remainingMinutes -= 30;
      }
      if (remainingMinutes >= 20) {
        tasks.push(createTask("timed-drill"));
        remainingMinutes -= 20;
      }
      break;

    case "final":
      // Lighter practice, focus on confidence
      if (remainingMinutes >= 30) {
        tasks.push(createTask("review-missed", {
          priority: "required",
          description: "Master any remaining weak questions",
        }));
        remainingMinutes -= 30;
      }
      if (remainingMinutes >= 20) {
        tasks.push(createTask("timed-drill", {
          description: "Quick confidence-building drill",
        }));
        remainingMinutes -= 20;
      }
      break;
  }

  return tasks;
}

/**
 * Generates a complete study schedule
 */
export function generateStudySchedule(
  config: ScheduleConfig,
  progress: UserProgress
): StudySchedule {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const testDate = new Date(config.testDate);
  testDate.setHours(0, 0, 0, 0);

  const daysUntilTest = Math.floor(
    (testDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const weeksUntilTest = Math.ceil(daysUntilTest / 7);
  const weakTopics = getWeakTopics(progress);
  const weakTypes = weakTopics.map((t) => t.questionType);

  const timeDistribution = distributeWeeklyTime(config.hoursPerWeek, config.studyDays);

  const weeks: WeeklySchedule[] = [];
  let totalTasks = 0;
  let currentDate = new Date(today);

  // Determine full test days based on frequency
  const fullTestInterval =
    config.fullTestFrequency === "weekly"
      ? 7
      : config.fullTestFrequency === "biweekly"
      ? 14
      : 30;

  for (let week = 1; week <= weeksUntilTest; week++) {
    const weekStartDate = new Date(currentDate);
    const days: DailySchedule[] = [];
    const daysRemaining = Math.max(0, daysUntilTest - (week - 1) * 7);
    const phase = getStudyPhase(daysRemaining);

    // Determine this week's focus
    let weeklyGoal: string;
    const focusAreas: string[] = [];

    switch (phase) {
      case "foundation":
        weeklyGoal = "Build strong fundamentals in all sections";
        focusAreas.push("Core concepts", "Question type recognition");
        break;
      case "building":
        weeklyGoal = "Develop speed and accuracy";
        focusAreas.push("Timing strategies", "Pattern recognition");
        if (weakTypes.length > 0) {
          focusAreas.push(`Weak areas: ${weakTypes[0]}`);
        }
        break;
      case "refinement":
        weeklyGoal = "Polish weak areas and build consistency";
        focusAreas.push("Targeted improvement", "Test stamina");
        break;
      case "final":
        weeklyGoal = "Light review and confidence building";
        focusAreas.push("Rest", "Mental preparation");
        break;
    }

    // Generate each day of the week
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const dayDate = addDays(weekStartDate, dayIndex);
      const dayOfWeek = getDayOfWeek(dayDate);
      const isStudyDay = config.studyDays.includes(dayOfWeek);

      // Check if this should be a full test day
      const daysSinceStart = Math.floor(
        (dayDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      const isFullTestDay =
        config.includeFullTests &&
        isStudyDay &&
        daysSinceStart > 0 &&
        daysSinceStart % fullTestInterval === 0 &&
        phase !== "final";

      let tasks: StudyTask[] = [];
      let totalMinutes = 0;
      let isRestDay = false;

      if (!isStudyDay) {
        isRestDay = true;
        tasks.push(createTask("rest"));
      } else if (phase === "final" && dayOfWeek === "saturday") {
        // Day before test - rest
        isRestDay = true;
        tasks.push(createTask("rest", {
          description: "Rest and prepare mentally for test day",
        }));
      } else {
        const availableMinutes = timeDistribution.get(dayOfWeek) || 60;
        tasks = generateDayTasks(
          availableMinutes,
          phase,
          week,
          dayOfWeek,
          config,
          isFullTestDay,
          weakTypes
        );
        totalMinutes = tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0);
      }

      totalTasks += tasks.length;

      days.push({
        date: dayDate,
        dayOfWeek,
        tasks,
        totalMinutes,
        isRestDay,
      });
    }

    weeks.push({
      weekNumber: week,
      startDate: weekStartDate,
      endDate: addDays(weekStartDate, 6),
      days,
      weeklyGoal,
      focusAreas,
    });

    currentDate = addDays(currentDate, 7);
  }

  return {
    id: generateScheduleId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    config,
    weeks,
    totalDays: daysUntilTest,
    daysCompleted: 0,
    tasksCompleted: 0,
    totalTasks,
  };
}

// ============================================
// SCHEDULE MANAGEMENT
// ============================================

/**
 * Marks a task as completed
 */
export function completeTask(
  schedule: StudySchedule,
  taskId: string
): StudySchedule {
  const updatedWeeks = schedule.weeks.map((week) => ({
    ...week,
    days: week.days.map((day) => ({
      ...day,
      tasks: day.tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: true, completedAt: new Date() }
          : task
      ),
    })),
  }));

  const tasksCompleted = updatedWeeks.reduce(
    (sum, week) =>
      sum +
      week.days.reduce(
        (daySum, day) =>
          daySum + day.tasks.filter((t) => t.completed).length,
        0
      ),
    0
  );

  return {
    ...schedule,
    weeks: updatedWeeks,
    tasksCompleted,
    updatedAt: new Date(),
  };
}

/**
 * Gets today's tasks from a schedule
 */
export function getTodaysTasks(schedule: StudySchedule): StudyTask[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const week of schedule.weeks) {
    for (const day of week.days) {
      const dayDate = new Date(day.date);
      dayDate.setHours(0, 0, 0, 0);

      if (dayDate.getTime() === today.getTime()) {
        return day.tasks;
      }
    }
  }

  return [];
}

/**
 * Gets this week's schedule
 */
export function getThisWeeksSchedule(
  schedule: StudySchedule
): WeeklySchedule | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const week of schedule.weeks) {
    const weekStart = new Date(week.startDate);
    weekStart.setHours(0, 0, 0, 0);
    const weekEnd = new Date(week.endDate);
    weekEnd.setHours(23, 59, 59, 999);

    if (today >= weekStart && today <= weekEnd) {
      return week;
    }
  }

  return null;
}

/**
 * Calculate schedule statistics
 */
export function calculateScheduleStats(schedule: StudySchedule): ScheduleStats {
  const today = new Date();
  const testDate = new Date(schedule.config.testDate);

  const daysUntilTest = Math.max(
    0,
    Math.floor((testDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );
  const weeksUntilTest = Math.ceil(daysUntilTest / 7);

  let hoursPlanned = 0;
  let hoursCompleted = 0;

  for (const week of schedule.weeks) {
    for (const day of week.days) {
      for (const task of day.tasks) {
        hoursPlanned += task.estimatedMinutes / 60;
        if (task.completed) {
          hoursCompleted += task.estimatedMinutes / 60;
        }
      }
    }
  }

  const completionRate =
    schedule.totalTasks > 0
      ? Math.round((schedule.tasksCompleted / schedule.totalTasks) * 100)
      : 0;

  // Determine if on track based on expected progress
  const totalDays = schedule.totalDays;
  const daysPassed = totalDays - daysUntilTest;
  const expectedProgress = totalDays > 0 ? (daysPassed / totalDays) * 100 : 0;
  const onTrack = completionRate >= expectedProgress - 10; // 10% buffer

  return {
    daysUntilTest,
    weeksUntilTest,
    hoursPlanned: Math.round(hoursPlanned * 10) / 10,
    hoursCompleted: Math.round(hoursCompleted * 10) / 10,
    tasksRemaining: schedule.totalTasks - schedule.tasksCompleted,
    onTrack,
    completionRate,
  };
}

// ============================================
// LOCAL STORAGE
// ============================================

const SCHEDULE_STORAGE_KEY = "lsatprep-study-schedule";

export function saveStudySchedule(schedule: StudySchedule, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${SCHEDULE_STORAGE_KEY}_${userId}` : SCHEDULE_STORAGE_KEY;
  localStorage.setItem(key, JSON.stringify(schedule));
}

export function loadStudySchedule(userId?: string): StudySchedule | null {
  if (typeof window === "undefined") return null;

  const key = userId ? `${SCHEDULE_STORAGE_KEY}_${userId}` : SCHEDULE_STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);
    // Convert date strings back to Date objects
    return {
      ...parsed,
      createdAt: new Date(parsed.createdAt),
      updatedAt: new Date(parsed.updatedAt),
      config: {
        ...parsed.config,
        testDate: new Date(parsed.config.testDate),
      },
      weeks: parsed.weeks.map((week: WeeklySchedule) => ({
        ...week,
        startDate: new Date(week.startDate),
        endDate: new Date(week.endDate),
        days: week.days.map((day: DailySchedule) => ({
          ...day,
          date: new Date(day.date),
          tasks: day.tasks.map((task: StudyTask) => ({
            ...task,
            completedAt: task.completedAt ? new Date(task.completedAt) : undefined,
          })),
        })),
      })),
    };
  } catch {
    return null;
  }
}

export function clearStudySchedule(userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${SCHEDULE_STORAGE_KEY}_${userId}` : SCHEDULE_STORAGE_KEY;
  localStorage.removeItem(key);
}
