// Law school application tracker

export type ApplicationStatus =
  | "researching"
  | "preparing"
  | "submitted"
  | "interview"
  | "waitlisted"
  | "accepted"
  | "rejected"
  | "withdrawn";

export interface Application {
  id: string;
  schoolName: string;
  status: ApplicationStatus;
  deadline?: string; // ISO date string
  submittedDate?: string; // ISO date string
  decisionDate?: string; // ISO date string
  notes?: string;
  scholarshipAmount?: number;
  priority: "reach" | "target" | "safety";
  createdAt: string;
  updatedAt: string;
}

export interface ApplicationTrackerData {
  applications: Application[];
  targetScore?: number;
  targetGpa?: number;
}

const STORAGE_KEY = "lsatprep_applications";

function getUserStorageKey(userId?: string): string {
  return userId ? `${STORAGE_KEY}_${userId}` : STORAGE_KEY;
}

export function getDefaultTrackerData(): ApplicationTrackerData {
  return {
    applications: [],
  };
}

export function getApplicationTrackerData(userId?: string): ApplicationTrackerData {
  if (typeof window === "undefined") return getDefaultTrackerData();

  try {
    const stored = localStorage.getItem(getUserStorageKey(userId));
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Silent fail
  }
  return getDefaultTrackerData();
}

export function saveApplicationTrackerData(data: ApplicationTrackerData, userId?: string): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(getUserStorageKey(userId), JSON.stringify(data));
  } catch {
    // Silent fail
  }
}

export function addApplication(
  application: Omit<Application, "id" | "createdAt" | "updatedAt">,
  userId?: string
): Application {
  const data = getApplicationTrackerData(userId);
  const now = new Date().toISOString();

  const newApplication: Application = {
    ...application,
    id: `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: now,
    updatedAt: now,
  };

  data.applications.push(newApplication);
  saveApplicationTrackerData(data, userId);

  return newApplication;
}

export function updateApplication(
  applicationId: string,
  updates: Partial<Omit<Application, "id" | "createdAt">>,
  userId?: string
): Application | null {
  const data = getApplicationTrackerData(userId);
  const index = data.applications.findIndex((app) => app.id === applicationId);

  if (index === -1) return null;

  data.applications[index] = {
    ...data.applications[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  saveApplicationTrackerData(data, userId);
  return data.applications[index];
}

export function deleteApplication(applicationId: string, userId?: string): boolean {
  const data = getApplicationTrackerData(userId);
  const initialLength = data.applications.length;

  data.applications = data.applications.filter((app) => app.id !== applicationId);

  if (data.applications.length < initialLength) {
    saveApplicationTrackerData(data, userId);
    return true;
  }

  return false;
}

export function getApplicationById(applicationId: string, userId?: string): Application | null {
  const data = getApplicationTrackerData(userId);
  return data.applications.find((app) => app.id === applicationId) || null;
}

export function getApplicationsByStatus(status: ApplicationStatus, userId?: string): Application[] {
  const data = getApplicationTrackerData(userId);
  return data.applications.filter((app) => app.status === status);
}

export function getUpcomingDeadlines(daysAhead: number = 30, userId?: string): Application[] {
  const data = getApplicationTrackerData(userId);
  const now = new Date();
  const futureDate = new Date(now.getTime() + daysAhead * 24 * 60 * 60 * 1000);

  return data.applications
    .filter((app) => {
      if (!app.deadline) return false;
      const deadline = new Date(app.deadline);
      return deadline >= now && deadline <= futureDate && app.status !== "submitted";
    })
    .sort((a, b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime());
}

export function getApplicationStats(userId?: string): {
  total: number;
  byStatus: Record<ApplicationStatus, number>;
  byPriority: Record<Application["priority"], number>;
  acceptanceRate: number;
} {
  const data = getApplicationTrackerData(userId);
  const apps = data.applications;

  const byStatus: Record<ApplicationStatus, number> = {
    researching: 0,
    preparing: 0,
    submitted: 0,
    interview: 0,
    waitlisted: 0,
    accepted: 0,
    rejected: 0,
    withdrawn: 0,
  };

  const byPriority: Record<Application["priority"], number> = {
    reach: 0,
    target: 0,
    safety: 0,
  };

  apps.forEach((app) => {
    byStatus[app.status]++;
    byPriority[app.priority]++;
  });

  const decided = byStatus.accepted + byStatus.rejected;
  const acceptanceRate = decided > 0 ? (byStatus.accepted / decided) * 100 : 0;

  return {
    total: apps.length,
    byStatus,
    byPriority,
    acceptanceRate,
  };
}

export const STATUS_LABELS: Record<ApplicationStatus, string> = {
  researching: "Researching",
  preparing: "Preparing",
  submitted: "Submitted",
  interview: "Interview",
  waitlisted: "Waitlisted",
  accepted: "Accepted",
  rejected: "Rejected",
  withdrawn: "Withdrawn",
};

export const STATUS_COLORS: Record<ApplicationStatus, { bg: string; text: string }> = {
  researching: { bg: "bg-stone-100 dark:bg-stone-800", text: "text-stone-700 dark:text-stone-300" },
  preparing: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-400" },
  submitted: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-700 dark:text-purple-400" },
  interview: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-400" },
  waitlisted: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-700 dark:text-orange-400" },
  accepted: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400" },
  rejected: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400" },
  withdrawn: { bg: "bg-stone-100 dark:bg-stone-800", text: "text-stone-500 dark:text-stone-500" },
};

export const PRIORITY_LABELS: Record<Application["priority"], string> = {
  reach: "Reach",
  target: "Target",
  safety: "Safety",
};

export const PRIORITY_COLORS: Record<Application["priority"], { bg: string; text: string }> = {
  reach: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400" },
  target: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-400" },
  safety: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400" },
};
