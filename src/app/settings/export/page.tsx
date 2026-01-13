"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  Download,
  FileJson,
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { loadUserProgress, UserProgress } from "@/lib/user-progress";
import { getUserAchievements, UserAchievements } from "@/lib/achievements";
import { getApplicationTrackerData, ApplicationTrackerData } from "@/lib/application-tracker";
import { getNotificationSettings, NotificationSettings } from "@/lib/notification-settings";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface ExportData {
  exportDate: string;
  version: string;
  user: {
    email: string | null;
    displayName: string | null;
  };
  progress: UserProgress | null;
  achievements: UserAchievements | null;
  applications: ApplicationTrackerData | null;
  settings: {
    notifications: NotificationSettings;
  };
}

export default function ExportPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);

      if (!firebaseUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const gatherExportData = (): ExportData => {
    const userId = user?.uid;
    return {
      exportDate: new Date().toISOString(),
      version: "1.0.0",
      user: {
        email: user?.email || null,
        displayName: user?.displayName || null,
      },
      progress: loadUserProgress(userId),
      achievements: getUserAchievements(userId),
      applications: getApplicationTrackerData(userId),
      settings: {
        notifications: getNotificationSettings(userId),
      },
    };
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportAsJSON = () => {
    setExporting(true);
    setExportError(null);
    setExportSuccess(null);

    try {
      const data = gatherExportData();
      const jsonContent = JSON.stringify(data, null, 2);
      const filename = `lsatprep-export-${new Date().toISOString().split("T")[0]}.json`;
      downloadFile(jsonContent, filename, "application/json");
      setExportSuccess("Data exported successfully as JSON!");
    } catch {
      setExportError("Failed to export data. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  const exportAsCSV = () => {
    setExporting(true);
    setExportError(null);
    setExportSuccess(null);

    try {
      const data = gatherExportData();

      // Create CSV for test history
      let csvContent = "Test History\n";
      csvContent += "Test Name,Date,Total Questions,Correct Answers,Score %,Time (seconds)\n";

      if (data.progress?.completedTests) {
        data.progress.completedTests.forEach((test) => {
          const score = Math.round((test.correctAnswers / test.totalQuestions) * 100);
          csvContent += `"${test.testName}","${new Date(test.completedAt).toISOString()}",${test.totalQuestions},${test.correctAnswers},${score},${test.timeUsed}\n`;
        });
      }

      csvContent += "\n\nAchievements\n";
      csvContent += "Achievement ID,Unlocked Date\n";

      if (data.achievements?.unlockedAchievements) {
        data.achievements.unlockedAchievements.forEach((id) => {
          const date = data.achievements?.achievementDates[id] || "N/A";
          csvContent += `"${id}","${date}"\n`;
        });
      }

      csvContent += "\n\nStatistics\n";
      csvContent += "Metric,Value\n";
      if (data.progress) {
        csvContent += `"Total Questions Answered",${data.progress.totalQuestionsAnswered}\n`;
        csvContent += `"Total Correct",${data.progress.totalCorrect}\n`;
        csvContent += `"Average Score",${data.progress.averageScore.toFixed(2)}%\n`;
        csvContent += `"Highest Score",${data.progress.highestScore.toFixed(2)}%\n`;
        csvContent += `"Tests Completed",${data.progress.completedTests.length}\n`;
      }

      const filename = `lsatprep-export-${new Date().toISOString().split("T")[0]}.csv`;
      downloadFile(csvContent, filename, "text/csv");
      setExportSuccess("Data exported successfully as CSV!");
    } catch {
      setExportError("Failed to export data. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <Scale size={48} className="animate-pulse text-[#1a365d] dark:text-amber-400" />
      </div>
    );
  }

  if (!user) {
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
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Export Your Data
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Download all your LSAT prep data for backup or analysis.
          </p>
        </div>

        {/* Success/Error Messages */}
        {exportSuccess && (
          <div className="mb-6 flex items-center gap-2 rounded-sm border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
            <span className="text-green-700 dark:text-green-300">{exportSuccess}</span>
          </div>
        )}

        {exportError && (
          <div className="mb-6 flex items-center gap-2 rounded-sm border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
            <span className="text-red-700 dark:text-red-300">{exportError}</span>
          </div>
        )}

        {/* Export Options */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* JSON Export */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-amber-100 dark:bg-amber-900/30">
              <FileJson className="text-amber-600 dark:text-amber-400" size={24} />
            </div>
            <h2 className="mb-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Export as JSON
            </h2>
            <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
              Download your complete data in JSON format. Best for importing back into the app
              or for developers who want to analyze their data programmatically.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-stone-600 dark:text-stone-400">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Complete test history with details
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                All achievements and progress
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Application tracker data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Settings and preferences
              </li>
            </ul>
            <button
              onClick={exportAsJSON}
              disabled={exporting}
              className={cx(
                "flex w-full items-center justify-center gap-2 rounded-sm px-4 py-3 font-semibold transition",
                "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400",
                exporting && "cursor-not-allowed opacity-50"
              )}
            >
              <Download size={18} />
              {exporting ? "Exporting..." : "Download JSON"}
            </button>
          </div>

          {/* CSV Export */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-green-100 dark:bg-green-900/30">
              <FileSpreadsheet className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h2 className="mb-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Export as CSV
            </h2>
            <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
              Download your data in CSV format. Perfect for opening in Excel, Google Sheets,
              or other spreadsheet applications for custom analysis.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-stone-600 dark:text-stone-400">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Test history summary
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Achievement list
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Key statistics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Spreadsheet compatible
              </li>
            </ul>
            <button
              onClick={exportAsCSV}
              disabled={exporting}
              className={cx(
                "flex w-full items-center justify-center gap-2 rounded-sm px-4 py-3 font-semibold transition",
                "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500",
                exporting && "cursor-not-allowed opacity-50"
              )}
            >
              <Download size={18} />
              {exporting ? "Exporting..." : "Download CSV"}
            </button>
          </div>
        </div>

        {/* Data Information */}
        <div className="mt-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            What's Included in Your Export
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Test History
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                All completed tests including scores, time spent, section breakdowns, and
                individual question results.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Achievements
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Your unlocked achievements, unlock dates, and streak data.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Application Tracker
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Law school applications you're tracking, including status, deadlines, and notes.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                Settings
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Your notification preferences and other app settings.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
