"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowLeft,
  ClipboardList,
  Plus,
  Trash2,
  Edit2,
  X,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import {
  Application,
  ApplicationStatus,
  getApplicationTrackerData,
  addApplication,
  updateApplication,
  deleteApplication,
  getApplicationStats,
  STATUS_LABELS,
  STATUS_COLORS,
  PRIORITY_LABELS,
  PRIORITY_COLORS,
} from "@/lib/application-tracker";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TrackerPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [applications, setApplications] = useState<Application[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState<Application | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    schoolName: "",
    status: "researching" as ApplicationStatus,
    priority: "target" as Application["priority"],
    deadline: "",
    notes: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);

      if (!firebaseUser) {
        router.push("/");
      } else {
        const data = getApplicationTrackerData(firebaseUser.uid);
        setApplications(data.applications);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const refreshApplications = () => {
    if (user) {
      const data = getApplicationTrackerData(user.uid);
      setApplications(data.applications);
    }
  };

  const handleOpenModal = (app?: Application) => {
    if (app) {
      setEditingApp(app);
      setFormData({
        schoolName: app.schoolName,
        status: app.status,
        priority: app.priority,
        deadline: app.deadline || "",
        notes: app.notes || "",
      });
    } else {
      setEditingApp(null);
      setFormData({
        schoolName: "",
        status: "researching",
        priority: "target",
        deadline: "",
        notes: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingApp(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (editingApp) {
      updateApplication(
        editingApp.id,
        {
          schoolName: formData.schoolName,
          status: formData.status,
          priority: formData.priority,
          deadline: formData.deadline || undefined,
          notes: formData.notes || undefined,
        },
        user.uid
      );
    } else {
      addApplication(
        {
          schoolName: formData.schoolName,
          status: formData.status,
          priority: formData.priority,
          deadline: formData.deadline || undefined,
          notes: formData.notes || undefined,
        },
        user.uid
      );
    }

    refreshApplications();
    handleCloseModal();
  };

  const handleDelete = (appId: string) => {
    if (!user) return;
    if (confirm("Are you sure you want to delete this application?")) {
      deleteApplication(appId, user.uid);
      refreshApplications();
    }
  };

  const handleStatusChange = (appId: string, newStatus: ApplicationStatus) => {
    if (!user) return;
    updateApplication(appId, { status: newStatus }, user.uid);
    refreshApplications();
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

  const stats = getApplicationStats(user.uid);

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
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
              Application Tracker
            </h1>
            <p className="text-stone-600 dark:text-stone-400">
              Track your law school applications in one place.
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            <Plus size={18} />
            Add School
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="text-sm text-stone-500">Total Applications</div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">{stats.total}</div>
          </div>
          <div className="rounded-sm border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <div className="text-sm text-green-600 dark:text-green-400">Accepted</div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">
              {stats.byStatus.accepted}
            </div>
          </div>
          <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <div className="text-sm text-amber-600 dark:text-amber-400">Pending</div>
            <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">
              {stats.byStatus.submitted + stats.byStatus.interview + stats.byStatus.waitlisted}
            </div>
          </div>
          <div className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <div className="text-sm text-stone-500">In Progress</div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {stats.byStatus.researching + stats.byStatus.preparing}
            </div>
          </div>
        </div>

        {/* Applications List */}
        {applications.length === 0 ? (
          <div className="rounded-sm border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900">
            <ClipboardList size={48} className="mx-auto mb-4 text-stone-300 dark:text-stone-600" />
            <h2 className="mb-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              No Applications Yet
            </h2>
            <p className="mb-4 text-stone-600 dark:text-stone-400">
              Start tracking your law school applications by adding your first school.
            </p>
            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              <Plus size={18} />
              Add Your First School
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                      {app.schoolName}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span
                        className={cx(
                          "rounded-sm px-2 py-1 text-xs font-semibold",
                          STATUS_COLORS[app.status].bg,
                          STATUS_COLORS[app.status].text
                        )}
                      >
                        {STATUS_LABELS[app.status]}
                      </span>
                      <span
                        className={cx(
                          "rounded-sm px-2 py-1 text-xs font-semibold",
                          PRIORITY_COLORS[app.priority].bg,
                          PRIORITY_COLORS[app.priority].text
                        )}
                      >
                        {PRIORITY_LABELS[app.priority]}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenModal(app)}
                      className="rounded-sm p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-300"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(app.id)}
                      className="rounded-sm p-2 text-red-500 transition hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/20"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Deadline & Notes */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-stone-500">
                  {app.deadline && (
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      Deadline: {new Date(app.deadline).toLocaleDateString()}
                    </div>
                  )}
                  {app.notes && (
                    <div className="flex-1 truncate italic">{app.notes}</div>
                  )}
                </div>

                {/* Quick Status Change */}
                <div className="mt-4 flex flex-wrap gap-2 border-t border-stone-200 pt-4 dark:border-stone-700">
                  {(["researching", "preparing", "submitted", "interview", "waitlisted", "accepted", "rejected"] as ApplicationStatus[]).map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(app.id, status)}
                        className={cx(
                          "rounded-sm px-2 py-1 text-xs font-medium transition",
                          app.status === status
                            ? `${STATUS_COLORS[status].bg} ${STATUS_COLORS[status].text}`
                            : "bg-stone-100 text-stone-500 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
                        )}
                      >
                        {STATUS_LABELS[status]}
                      </button>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                {editingApp ? "Edit Application" : "Add Application"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="rounded-sm p-1 text-stone-500 transition hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  School Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  placeholder="e.g., Harvard Law School"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as ApplicationStatus })}
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Priority
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value as Application["priority"] })}
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  >
                    {Object.entries(PRIORITY_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Deadline
                </label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  placeholder="Any additional notes..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 rounded-sm border-2 border-stone-200 bg-white px-4 py-2 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-sm bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                >
                  {editingApp ? "Save Changes" : "Add Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
