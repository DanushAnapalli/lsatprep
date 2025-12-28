// Study Schedule Types

export type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export type TaskType =
  | "full-test"
  | "lr-section"
  | "rc-section"
  | "lg-section"
  | "targeted-practice"
  | "review-missed"
  | "blind-review"
  | "concept-study"
  | "timed-drill"
  | "rest";

export type TaskPriority = "required" | "recommended" | "optional";

export interface StudyTask {
  id: string;
  type: TaskType;
  title: string;
  description: string;
  estimatedMinutes: number;
  priority: TaskPriority;
  completed: boolean;
  completedAt?: Date;
  section?: "lr" | "rc" | "lg";
  questionTypes?: string[]; // For targeted practice
}

export interface DailySchedule {
  date: Date;
  dayOfWeek: DayOfWeek;
  tasks: StudyTask[];
  totalMinutes: number;
  isRestDay: boolean;
  notes?: string;
}

export interface WeeklySchedule {
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  days: DailySchedule[];
  weeklyGoal: string;
  focusAreas: string[];
}

export interface StudySchedule {
  id: string;
  userId?: string;
  createdAt: Date;
  updatedAt: Date;

  // Configuration
  config: ScheduleConfig;

  // Schedule data
  weeks: WeeklySchedule[];

  // Progress tracking
  totalDays: number;
  daysCompleted: number;
  tasksCompleted: number;
  totalTasks: number;
}

export interface ScheduleConfig {
  testDate: Date;
  currentScore: number;
  targetScore: number;
  hoursPerWeek: number;
  studyDays: DayOfWeek[];
  preferredTimeOfDay: "morning" | "afternoon" | "evening" | "flexible";
  focusAreas: ("lr" | "rc" | "lg")[];
  includeFullTests: boolean;
  fullTestFrequency: "weekly" | "biweekly" | "monthly";
}

export interface ScheduleStats {
  daysUntilTest: number;
  weeksUntilTest: number;
  hoursPlanned: number;
  hoursCompleted: number;
  tasksRemaining: number;
  onTrack: boolean;
  completionRate: number;
}

// Task templates for schedule generation
export const TASK_TEMPLATES: Record<TaskType, Omit<StudyTask, "id" | "completed">> = {
  "full-test": {
    type: "full-test",
    title: "Full Practice Test",
    description: "Complete a full timed practice test with all sections",
    estimatedMinutes: 180,
    priority: "required",
  },
  "lr-section": {
    type: "lr-section",
    title: "Logical Reasoning Section",
    description: "Complete a timed LR section (35 minutes)",
    estimatedMinutes: 45,
    priority: "required",
    section: "lr",
  },
  "rc-section": {
    type: "rc-section",
    title: "Reading Comprehension Section",
    description: "Complete a timed RC section (35 minutes)",
    estimatedMinutes: 45,
    priority: "required",
    section: "rc",
  },
  "lg-section": {
    type: "lg-section",
    title: "Logic Games Section",
    description: "Complete a timed LG section (35 minutes)",
    estimatedMinutes: 45,
    priority: "required",
    section: "lg",
  },
  "targeted-practice": {
    type: "targeted-practice",
    title: "Targeted Practice",
    description: "Focus on your weak question types",
    estimatedMinutes: 30,
    priority: "recommended",
  },
  "review-missed": {
    type: "review-missed",
    title: "Review Missed Questions",
    description: "Retry questions you previously got wrong",
    estimatedMinutes: 30,
    priority: "recommended",
  },
  "blind-review": {
    type: "blind-review",
    title: "Blind Review Session",
    description: "Review flagged questions without time pressure",
    estimatedMinutes: 45,
    priority: "recommended",
  },
  "concept-study": {
    type: "concept-study",
    title: "Concept Study",
    description: "Review LSAT strategies and techniques",
    estimatedMinutes: 30,
    priority: "optional",
  },
  "timed-drill": {
    type: "timed-drill",
    title: "Timed Drill",
    description: "Quick timed practice (10-15 questions)",
    estimatedMinutes: 20,
    priority: "optional",
  },
  "rest": {
    type: "rest",
    title: "Rest Day",
    description: "Take a break to recharge",
    estimatedMinutes: 0,
    priority: "required",
  },
};

// Days of week in order
export const DAYS_OF_WEEK: DayOfWeek[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// Display names for days
export const DAY_DISPLAY_NAMES: Record<DayOfWeek, string> = {
  sunday: "Sunday",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
};

// Display names for task types
export const TASK_TYPE_NAMES: Record<TaskType, string> = {
  "full-test": "Full Test",
  "lr-section": "LR Section",
  "rc-section": "RC Section",
  "lg-section": "LG Section",
  "targeted-practice": "Targeted Practice",
  "review-missed": "Review Missed",
  "blind-review": "Blind Review",
  "concept-study": "Concept Study",
  "timed-drill": "Timed Drill",
  "rest": "Rest",
};
