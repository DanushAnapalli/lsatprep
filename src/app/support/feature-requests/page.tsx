"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Lightbulb,
  ThumbsUp,
  Clock,
  CheckCircle2,
  Loader2,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface PlannedFeature {
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  votes: number;
}

const PLANNED_FEATURES: PlannedFeature[] = [
  {
    title: "Cross-Device Sync",
    description: "Sync your progress and data across all your devices seamlessly.",
    status: "in-progress",
    votes: 342,
  },
  {
    title: "Analytical Reasoning Section",
    description: "Full practice module for Logic Games with diagramming tools.",
    status: "planned",
    votes: 287,
  },
  {
    title: "Study Groups",
    description: "Connect with other test-takers for group study sessions.",
    status: "planned",
    votes: 215,
  },
  {
    title: "Performance Analytics Dashboard",
    description: "Detailed insights into your strengths, weaknesses, and improvement areas.",
    status: "in-progress",
    votes: 198,
  },
  {
    title: "Mobile App",
    description: "Native iOS and Android apps for studying on the go.",
    status: "planned",
    votes: 456,
  },
  {
    title: "Tutor Matching",
    description: "Connect with LSAT tutors for personalized guidance.",
    status: "planned",
    votes: 134,
  },
  {
    title: "Practice Test Timer Modes",
    description: "Different timer settings including untimed, relaxed, and strict modes.",
    status: "completed",
    votes: 167,
  },
  {
    title: "Dark Mode",
    description: "Eye-friendly dark theme for late-night study sessions.",
    status: "completed",
    votes: 289,
  },
];

const STATUS_CONFIG = {
  planned: {
    label: "Planned",
    icon: Clock,
    color: "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
  },
  "in-progress": {
    label: "In Progress",
    icon: Loader2,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
};

export default function FeatureRequestsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [votedFeatures, setVotedFeatures] = useState<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log({ title, description, category });
    setSubmitted(true);
    setTitle("");
    setDescription("");
    setCategory("");
  };

  const handleVote = (featureTitle: string) => {
    setVotedFeatures((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(featureTitle)) {
        newSet.delete(featureTitle);
      } else {
        newSet.add(featureTitle);
      }
      return newSet;
    });
  };

  const sortedFeatures = [...PLANNED_FEATURES].sort((a, b) => {
    // Sort by status (in-progress first, then planned, then completed)
    const statusOrder = { "in-progress": 0, planned: 1, completed: 2 };
    if (statusOrder[a.status] !== statusOrder[b.status]) {
      return statusOrder[a.status] - statusOrder[b.status];
    }
    // Then by votes
    return b.votes - a.votes;
  });

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-[#1a365d] hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-amber-500 dark:hover:bg-stone-700"
            >
              <ArrowLeft size={18} className="text-stone-500 dark:text-stone-400" />
              <span>Menu</span>
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
            Feature Requests
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Help shape the future of LSATPrep. Share your ideas or vote on planned features.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Submit Request Form */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <Lightbulb className="text-[#1a365d] dark:text-amber-400" size={24} />
                Submit an Idea
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
                  </div>
                  <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                    Thanks for your idea!
                  </h3>
                  <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
                    We review all submissions and add popular requests to our roadmap.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#1a365d] underline dark:text-amber-400"
                  >
                    Submit another idea
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Feature Title
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Brief title for your idea"
                      className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Category
                    </label>
                    <select
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                    >
                      <option value="">Select category...</option>
                      <option value="practice">Practice & Questions</option>
                      <option value="analytics">Analytics & Progress</option>
                      <option value="ui">User Interface</option>
                      <option value="content">Study Content</option>
                      <option value="social">Social Features</option>
                      <option value="mobile">Mobile Experience</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Description
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe your feature idea in detail. How would it help you study?"
                      className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                  >
                    <Send size={18} />
                    Submit Idea
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Planned Features */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <Sparkles className="text-[#1a365d] dark:text-amber-400" size={24} />
                Roadmap
              </h2>
              <div className="flex gap-2 text-xs">
                {Object.entries(STATUS_CONFIG).map(([status, config]) => (
                  <span
                    key={status}
                    className={cx("rounded-sm px-2 py-1 font-medium", config.color)}
                  >
                    {config.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {sortedFeatures.map((feature) => {
                const statusConfig = STATUS_CONFIG[feature.status];
                const StatusIcon = statusConfig.icon;
                const hasVoted = votedFeatures.has(feature.title);
                const adjustedVotes = hasVoted ? feature.votes + 1 : feature.votes;

                return (
                  <div
                    key={feature.title}
                    className={cx(
                      "rounded-sm border-2 bg-white p-4 transition dark:bg-stone-900",
                      feature.status === "completed"
                        ? "border-green-200 dark:border-green-800"
                        : "border-stone-200 dark:border-stone-700"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                            {feature.title}
                          </h3>
                          <span
                            className={cx(
                              "flex items-center gap-1 rounded-sm px-2 py-0.5 text-xs font-medium",
                              statusConfig.color
                            )}
                          >
                            <StatusIcon
                              size={12}
                              className={feature.status === "in-progress" ? "animate-spin" : ""}
                            />
                            {statusConfig.label}
                          </span>
                        </div>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          {feature.description}
                        </p>
                      </div>
                      <button
                        onClick={() => handleVote(feature.title)}
                        disabled={feature.status === "completed"}
                        className={cx(
                          "flex flex-col items-center rounded-sm border px-3 py-2 transition",
                          feature.status === "completed"
                            ? "cursor-not-allowed border-stone-200 bg-stone-50 text-stone-400 dark:border-stone-700 dark:bg-stone-800"
                            : hasVoted
                              ? "border-[#1a365d] bg-[#1a365d] text-white dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900"
                              : "border-stone-200 hover:border-[#1a365d] hover:bg-stone-50 dark:border-stone-700 dark:hover:border-amber-500 dark:hover:bg-stone-800"
                        )}
                      >
                        <ThumbsUp size={18} />
                        <span className="mt-1 text-xs font-semibold">
                          {adjustedVotes}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-sm border-2 border-stone-200 bg-white p-4 text-center dark:border-stone-700 dark:bg-stone-900">
                <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                  {PLANNED_FEATURES.filter((f) => f.status === "completed").length}
                </div>
                <div className="text-xs text-stone-500">Completed</div>
              </div>
              <div className="rounded-sm border-2 border-stone-200 bg-white p-4 text-center dark:border-stone-700 dark:bg-stone-900">
                <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                  {PLANNED_FEATURES.filter((f) => f.status === "in-progress").length}
                </div>
                <div className="text-xs text-stone-500">In Progress</div>
              </div>
              <div className="rounded-sm border-2 border-stone-200 bg-white p-4 text-center dark:border-stone-700 dark:bg-stone-900">
                <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">
                  {PLANNED_FEATURES.filter((f) => f.status === "planned").length}
                </div>
                <div className="text-xs text-stone-500">Planned</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
