"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  Bell,
  Clock,
  Calendar,
  Trophy,
  AlertCircle,
  CheckCircle,
  Info,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import {
  getNotificationSettings,
  saveNotificationSettings,
  NotificationSettings,
  formatReminderTime,
  getFormattedReminderDays,
  DAY_NAMES_SHORT,
  getNotificationPermissionStatus,
  requestNotificationPermission,
} from "@/lib/notification-settings";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NotificationsPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [settings, setSettings] = useState<NotificationSettings | null>(null);
  const [saved, setSaved] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState<string>("default");

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);

      if (!firebaseUser) {
        router.push("/");
      } else {
        setSettings(getNotificationSettings(firebaseUser.uid));
        setPermissionStatus(getNotificationPermissionStatus());
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleToggle = (key: keyof NotificationSettings) => {
    if (!settings || !user) return;

    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    saveNotificationSettings(newSettings, user.uid);
    showSaved();
  };

  const handleTimeChange = (time: string) => {
    if (!settings || !user) return;

    const newSettings = { ...settings, reminderTime: time };
    setSettings(newSettings);
    saveNotificationSettings(newSettings, user.uid);
    showSaved();
  };

  const handleDayToggle = (day: number) => {
    if (!settings || !user) return;

    const newDays = settings.reminderDays.includes(day)
      ? settings.reminderDays.filter((d) => d !== day)
      : [...settings.reminderDays, day].sort();

    const newSettings = { ...settings, reminderDays: newDays };
    setSettings(newSettings);
    saveNotificationSettings(newSettings, user.uid);
    showSaved();
  };

  const handleReminderDaysChange = (value: number) => {
    if (!settings || !user) return;

    const newSettings = { ...settings, deadlineReminderDays: value };
    setSettings(newSettings);
    saveNotificationSettings(newSettings, user.uid);
    showSaved();
  };

  const showSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleRequestPermission = async () => {
    const granted = await requestNotificationPermission();
    setPermissionStatus(granted ? "granted" : "denied");
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <Scale size={48} className="animate-pulse text-[#1a365d] dark:text-amber-400" />
      </div>
    );
  }

  if (!user || !settings) {
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <HamburgerMenu />
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-stone-600 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-[#1a365d] dark:text-amber-400" />
            <span className="font-serif text-xl font-bold text-[#1a365d] dark:text-amber-400">
              LSATPrep
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
              Notification Preferences
            </h1>
            <p className="text-stone-600 dark:text-stone-400">
              Customize your study reminders and alerts.
            </p>
          </div>
          {saved && (
            <div className="flex items-center gap-2 rounded-sm bg-green-100 px-3 py-1.5 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle size={16} />
              Saved
            </div>
          )}
        </div>

        {/* Browser Permission */}
        {permissionStatus !== "granted" && permissionStatus !== "unsupported" && (
          <div className="mb-6 rounded-sm border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-400" size={20} />
              <div className="flex-1">
                <h3 className="font-semibold text-amber-800 dark:text-amber-300">
                  Browser Notifications Disabled
                </h3>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  Enable browser notifications to receive study reminders directly on your device.
                </p>
                {permissionStatus === "default" && (
                  <button
                    onClick={handleRequestPermission}
                    className="mt-3 rounded-sm bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
                  >
                    Enable Notifications
                  </button>
                )}
                {permissionStatus === "denied" && (
                  <p className="mt-2 text-xs text-amber-600 dark:text-amber-500">
                    You've denied notification permissions. Please enable them in your browser settings.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {/* Study Reminders */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 text-[#1a365d] dark:text-amber-400" size={24} />
                <div>
                  <h2 className="font-semibold text-stone-900 dark:text-stone-100">
                    Daily Study Reminders
                  </h2>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Get reminded to practice at your preferred time.
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleToggle("studyReminders")}
                className={cx(
                  "relative h-6 w-11 rounded-full transition",
                  settings.studyReminders
                    ? "bg-[#1a365d] dark:bg-amber-500"
                    : "bg-stone-300 dark:bg-stone-600"
                )}
              >
                <span
                  className={cx(
                    "absolute top-0.5 h-5 w-5 rounded-full bg-white transition",
                    settings.studyReminders ? "left-5" : "left-0.5"
                  )}
                />
              </button>
            </div>

            {settings.studyReminders && (
              <div className="mt-6 space-y-4 border-t border-stone-200 pt-6 dark:border-stone-700">
                {/* Time Picker */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Reminder Time
                  </label>
                  <input
                    type="time"
                    value={settings.reminderTime}
                    onChange={(e) => handleTimeChange(e.target.value)}
                    className="rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                  />
                  <p className="mt-1 text-xs text-stone-500">
                    Current: {formatReminderTime(settings.reminderTime)}
                  </p>
                </div>

                {/* Days Picker */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Reminder Days
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {DAY_NAMES_SHORT.map((day, index) => (
                      <button
                        key={day}
                        onClick={() => handleDayToggle(index)}
                        className={cx(
                          "rounded-sm px-3 py-1.5 text-sm font-medium transition",
                          settings.reminderDays.includes(index)
                            ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
                        )}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-stone-500">
                    {getFormattedReminderDays(settings.reminderDays)}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Achievement Alerts */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Trophy className="mt-0.5 text-[#1a365d] dark:text-amber-400" size={24} />
                <div>
                  <h2 className="font-semibold text-stone-900 dark:text-stone-100">
                    Achievement Alerts
                  </h2>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Get notified when you unlock new achievements and badges.
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleToggle("achievementAlerts")}
                className={cx(
                  "relative h-6 w-11 rounded-full transition",
                  settings.achievementAlerts
                    ? "bg-[#1a365d] dark:bg-amber-500"
                    : "bg-stone-300 dark:bg-stone-600"
                )}
              >
                <span
                  className={cx(
                    "absolute top-0.5 h-5 w-5 rounded-full bg-white transition",
                    settings.achievementAlerts ? "left-5" : "left-0.5"
                  )}
                />
              </button>
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Bell className="mt-0.5 text-[#1a365d] dark:text-amber-400" size={24} />
                <div>
                  <h2 className="font-semibold text-stone-900 dark:text-stone-100">
                    Weekly Progress Summary
                  </h2>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Receive a weekly summary of your study progress.
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleToggle("weeklyProgress")}
                className={cx(
                  "relative h-6 w-11 rounded-full transition",
                  settings.weeklyProgress
                    ? "bg-[#1a365d] dark:bg-amber-500"
                    : "bg-stone-300 dark:bg-stone-600"
                )}
              >
                <span
                  className={cx(
                    "absolute top-0.5 h-5 w-5 rounded-full bg-white transition",
                    settings.weeklyProgress ? "left-5" : "left-0.5"
                  )}
                />
              </button>
            </div>
          </div>

          {/* Deadline Reminders */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 text-[#1a365d] dark:text-amber-400" size={24} />
                <div>
                  <h2 className="font-semibold text-stone-900 dark:text-stone-100">
                    Application Deadline Reminders
                  </h2>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Get reminded about upcoming law school application deadlines.
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleToggle("deadlineReminders")}
                className={cx(
                  "relative h-6 w-11 rounded-full transition",
                  settings.deadlineReminders
                    ? "bg-[#1a365d] dark:bg-amber-500"
                    : "bg-stone-300 dark:bg-stone-600"
                )}
              >
                <span
                  className={cx(
                    "absolute top-0.5 h-5 w-5 rounded-full bg-white transition",
                    settings.deadlineReminders ? "left-5" : "left-0.5"
                  )}
                />
              </button>
            </div>

            {settings.deadlineReminders && (
              <div className="mt-4 border-t border-stone-200 pt-4 dark:border-stone-700">
                <label className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Remind me this many days before deadline:
                </label>
                <select
                  value={settings.deadlineReminderDays}
                  onChange={(e) => handleReminderDaysChange(parseInt(e.target.value))}
                  className="rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                >
                  <option value={3}>3 days</option>
                  <option value={7}>7 days</option>
                  <option value={14}>14 days</option>
                  <option value={30}>30 days</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-8 rounded-sm border-2 border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" size={20} />
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Note: Notification preferences are saved locally to your device. For notifications
              to work across devices, make sure to set your preferences on each device you use.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
