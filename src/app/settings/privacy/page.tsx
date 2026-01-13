"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  Shield,
  Trash2,
  Download,
  Database,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivacyPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [cleared, setCleared] = useState(false);
  const [storageUsed, setStorageUsed] = useState<string>("Calculating...");

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);

      if (!firebaseUser) {
        router.push("/");
      } else {
        calculateStorageUsed(firebaseUser.uid);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const calculateStorageUsed = (userId: string) => {
    let total = 0;
    const prefix = `lsatprep_`;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith(prefix) || key.includes(userId))) {
        const value = localStorage.getItem(key);
        if (value) {
          total += key.length + value.length;
        }
      }
    }

    // Convert to human readable
    if (total < 1024) {
      setStorageUsed(`${total} bytes`);
    } else if (total < 1024 * 1024) {
      setStorageUsed(`${(total / 1024).toFixed(2)} KB`);
    } else {
      setStorageUsed(`${(total / (1024 * 1024)).toFixed(2)} MB`);
    }
  };

  const handleClearData = () => {
    if (!user) return;

    const prefix = `lsatprep_`;
    const keysToRemove: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith(prefix) || key.includes(user.uid))) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key));

    setShowClearConfirm(false);
    setCleared(true);
    setStorageUsed("0 bytes");

    setTimeout(() => {
      setCleared(false);
    }, 3000);
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
            Data & Privacy
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Manage your data and understand how we protect your privacy.
          </p>
        </div>

        {cleared && (
          <div className="mb-6 flex items-center gap-2 rounded-sm bg-green-100 px-4 py-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
            <CheckCircle size={20} />
            All local data has been cleared successfully.
          </div>
        )}

        <div className="space-y-6">
          {/* Data Storage Info */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <Database className="text-[#1a365d] dark:text-amber-400" size={24} />
              Your Data
            </h2>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                <div className="text-sm text-stone-500">Storage Used</div>
                <div className="text-xl font-bold text-stone-900 dark:text-stone-100">
                  {storageUsed}
                </div>
              </div>
              <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                <div className="text-sm text-stone-500">Storage Location</div>
                <div className="text-xl font-bold text-stone-900 dark:text-stone-100">
                  Local Device
                </div>
              </div>
            </div>

            <div className="rounded-sm bg-stone-50 p-4 dark:bg-stone-800">
              <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                What we store locally:
              </h3>
              <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                <li>• Practice test history and scores</li>
                <li>• Study progress and streaks</li>
                <li>• Achievement and badge data</li>
                <li>• Law school application tracking</li>
                <li>• Notification preferences</li>
                <li>• Theme and display settings</li>
              </ul>
            </div>
          </div>

          {/* Data Actions */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <Shield className="text-[#1a365d] dark:text-amber-400" size={24} />
              Data Management
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-sm border border-stone-200 p-4 dark:border-stone-700">
                <div className="flex items-start gap-3">
                  <Download className="mt-0.5 text-[#1a365d] dark:text-amber-400" size={20} />
                  <div>
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                      Export Your Data
                    </h3>
                    <p className="text-sm text-stone-500">
                      Download all your data in JSON or CSV format.
                    </p>
                  </div>
                </div>
                <Link
                  href="/settings/export"
                  className="rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                >
                  Export
                </Link>
              </div>

              <div className="flex items-center justify-between rounded-sm border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                <div className="flex items-start gap-3">
                  <Trash2 className="mt-0.5 text-red-600 dark:text-red-400" size={20} />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-300">
                      Clear All Local Data
                    </h3>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Permanently delete all your progress and settings from this device.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="rounded-sm bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Clear Data
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <Lock className="text-[#1a365d] dark:text-amber-400" size={24} />
              Privacy Policy
            </h2>

            <div className="space-y-4 text-stone-600 dark:text-stone-400">
              <div>
                <h3 className="mb-1 font-semibold text-stone-900 dark:text-stone-100">
                  Data Collection
                </h3>
                <p className="text-sm">
                  LSATPrep stores your practice data locally on your device using browser localStorage.
                  Your study progress, scores, and preferences never leave your device unless you
                  explicitly export them.
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-stone-900 dark:text-stone-100">
                  Authentication
                </h3>
                <p className="text-sm">
                  We use Firebase Authentication for secure sign-in. Your email and basic profile
                  information are stored securely with Firebase. We do not share this information
                  with third parties.
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-stone-900 dark:text-stone-100">
                  Cookies & Tracking
                </h3>
                <p className="text-sm">
                  We use essential cookies for authentication and session management. We do not
                  use third-party tracking cookies or sell your data to advertisers.
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-stone-900 dark:text-stone-100">
                  Data Retention
                </h3>
                <p className="text-sm">
                  Your local data is retained until you clear it manually or clear your browser data.
                  Account data is retained until you delete your account.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <Eye className="text-[#1a365d] dark:text-amber-400" size={24} />
              Your Rights
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Right to Access",
                  description: "You can export all your data at any time.",
                },
                {
                  title: "Right to Deletion",
                  description: "You can delete your local data instantly.",
                },
                {
                  title: "Right to Portability",
                  description: "Export your data in standard formats (JSON, CSV).",
                },
                {
                  title: "Right to Rectification",
                  description: "Your data is always editable by you.",
                },
              ].map((right) => (
                <div
                  key={right.title}
                  className="rounded-sm border border-stone-200 p-4 dark:border-stone-700"
                >
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                    {right.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="rounded-sm border-2 border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" size={20} />
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Have questions about your data? Contact us at{" "}
                <Link href="/support/contact" className="font-semibold underline">
                  support
                </Link>{" "}
                and we'll be happy to help.
              </p>
            </div>
          </div>
        </div>

        {/* Clear Data Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                    Clear All Data?
                  </h3>
                  <p className="text-sm text-stone-500">This action cannot be undone.</p>
                </div>
              </div>

              <p className="mb-6 text-stone-600 dark:text-stone-400">
                This will permanently delete all your:
              </p>
              <ul className="mb-6 ml-4 list-disc text-sm text-stone-600 dark:text-stone-400">
                <li>Practice test history and scores</li>
                <li>Study progress and streaks</li>
                <li>Achievements and badges</li>
                <li>Application tracking data</li>
                <li>All saved preferences</li>
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 rounded-sm border-2 border-stone-200 px-4 py-2 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearData}
                  className="flex-1 rounded-sm bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
                >
                  Yes, Clear All Data
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
