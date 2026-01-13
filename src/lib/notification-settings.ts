// Notification preferences for study reminders and alerts

export interface NotificationSettings {
  studyReminders: boolean;
  reminderTime: string; // HH:MM format
  reminderDays: number[]; // 0-6 (Sunday-Saturday)
  weeklyProgress: boolean;
  achievementAlerts: boolean;
  deadlineReminders: boolean;
  deadlineReminderDays: number; // Days before deadline to remind
}

const STORAGE_KEY = "lsatprep_notifications";

function getUserStorageKey(userId?: string): string {
  return userId ? `${STORAGE_KEY}_${userId}` : STORAGE_KEY;
}

export function getDefaultNotificationSettings(): NotificationSettings {
  return {
    studyReminders: true,
    reminderTime: "09:00",
    reminderDays: [1, 2, 3, 4, 5], // Weekdays
    weeklyProgress: true,
    achievementAlerts: true,
    deadlineReminders: true,
    deadlineReminderDays: 7,
  };
}

export function getNotificationSettings(userId?: string): NotificationSettings {
  if (typeof window === "undefined") return getDefaultNotificationSettings();

  try {
    const stored = localStorage.getItem(getUserStorageKey(userId));
    if (stored) {
      return { ...getDefaultNotificationSettings(), ...JSON.parse(stored) };
    }
  } catch {
    // Silent fail
  }
  return getDefaultNotificationSettings();
}

export function saveNotificationSettings(
  settings: Partial<NotificationSettings>,
  userId?: string
): void {
  if (typeof window === "undefined") return;

  try {
    const current = getNotificationSettings(userId);
    const updated = { ...current, ...settings };
    localStorage.setItem(getUserStorageKey(userId), JSON.stringify(updated));
  } catch {
    // Silent fail
  }
}

export function updateNotificationSetting<K extends keyof NotificationSettings>(
  key: K,
  value: NotificationSettings[K],
  userId?: string
): void {
  saveNotificationSettings({ [key]: value }, userId);
}

// Helper to format reminder time for display
export function formatReminderTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

// Helper to get day names
export const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Check if today should have a reminder
export function shouldRemindToday(settings: NotificationSettings): boolean {
  if (!settings.studyReminders) return false;
  const today = new Date().getDay();
  return settings.reminderDays.includes(today);
}

// Get formatted reminder days
export function getFormattedReminderDays(days: number[]): string {
  if (days.length === 7) return "Every day";
  if (days.length === 5 && !days.includes(0) && !days.includes(6)) return "Weekdays";
  if (days.length === 2 && days.includes(0) && days.includes(6)) return "Weekends";

  return days
    .sort((a, b) => a - b)
    .map((d) => DAY_NAMES_SHORT[d])
    .join(", ");
}

// Note: Actual browser notifications would require additional setup
// This is a placeholder for the notification permission request
export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return false;
  }

  if (Notification.permission === "granted") {
    return true;
  }

  if (Notification.permission === "denied") {
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === "granted";
}

export function getNotificationPermissionStatus(): "granted" | "denied" | "default" | "unsupported" {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return "unsupported";
  }
  return Notification.permission;
}
