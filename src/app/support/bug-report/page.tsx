"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Bug,
  Monitor,
  Smartphone,
  Globe,
  CheckCircle,
  Send,
  AlertTriangle,
  Info,
  FileText,
  Camera,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type Severity = "low" | "medium" | "high" | "critical";
type Category = "ui" | "functionality" | "performance" | "content" | "account" | "other";

interface BugReport {
  title: string;
  description: string;
  stepsToReproduce: string;
  expectedBehavior: string;
  actualBehavior: string;
  severity: Severity;
  category: Category;
  browser: string;
  device: string;
  url: string;
  email: string;
}

const severityOptions: { value: Severity; label: string; description: string; color: string }[] = [
  {
    value: "low",
    label: "Low",
    description: "Minor issue, doesn't affect functionality",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    value: "medium",
    label: "Medium",
    description: "Affects some functionality but has workaround",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  {
    value: "high",
    label: "High",
    description: "Major feature broken, no workaround",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    value: "critical",
    label: "Critical",
    description: "App unusable, data loss, or security issue",
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
];

const categoryOptions: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "ui", label: "UI/Visual", icon: <Monitor size={16} /> },
  { value: "functionality", label: "Functionality", icon: <Bug size={16} /> },
  { value: "performance", label: "Performance", icon: <AlertTriangle size={16} /> },
  { value: "content", label: "Content/Questions", icon: <FileText size={16} /> },
  { value: "account", label: "Account/Login", icon: <Globe size={16} /> },
  { value: "other", label: "Other", icon: <Info size={16} /> },
];

const browserOptions = [
  "Chrome",
  "Firefox",
  "Safari",
  "Edge",
  "Opera",
  "Brave",
  "Other",
];

const deviceOptions = [
  "Desktop - Windows",
  "Desktop - Mac",
  "Desktop - Linux",
  "Tablet - iPad",
  "Tablet - Android",
  "Mobile - iPhone",
  "Mobile - Android",
  "Other",
];

export default function BugReportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BugReport>({
    title: "",
    description: "",
    stepsToReproduce: "",
    expectedBehavior: "",
    actualBehavior: "",
    severity: "medium",
    category: "functionality",
    browser: "",
    device: "",
    url: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Bug report submitted:", formData);
    setSubmitted(true);
  };

  const updateField = (field: keyof BugReport, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      stepsToReproduce: "",
      expectedBehavior: "",
      actualBehavior: "",
      severity: "medium",
      category: "functionality",
      browser: "",
      device: "",
      url: "",
      email: "",
    });
    setSubmitted(false);
  };

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
            Report a Bug
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Found something that's not working right? Let us know so we can fix it.
          </p>
        </div>

        {/* Tips Section */}
        <div className="mb-8 rounded-sm border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
            <Info size={18} />
            Tips for a Good Bug Report
          </h3>
          <ul className="ml-6 list-disc space-y-1 text-sm text-amber-700 dark:text-amber-400">
            <li>Be specific about what you were doing when the bug occurred</li>
            <li>Include exact steps to reproduce the issue</li>
            <li>Describe what you expected vs. what actually happened</li>
            <li>Include your browser and device information</li>
            <li>If possible, include the URL where the bug occurred</li>
          </ul>
        </div>

        {submitted ? (
          <div className="rounded-sm border-2 border-green-200 bg-white p-8 text-center dark:border-green-800 dark:bg-stone-900">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h2 className="mb-2 font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Bug Report Submitted!
            </h2>
            <p className="mb-6 text-stone-600 dark:text-stone-400">
              Thank you for helping us improve LSATPrep. We'll investigate this issue and may reach out if we need more information.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={resetForm}
                className="rounded-sm bg-[#1a365d] px-6 py-2 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Report Another Bug
              </button>
              <Link
                href="/dashboard"
                className="rounded-sm border-2 border-stone-300 px-6 py-2 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <Bug className="text-[#1a365d] dark:text-amber-400" size={24} />
                Bug Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Bug Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    placeholder="Brief summary of the issue"
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    placeholder="Detailed description of the bug"
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {categoryOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => updateField("category", option.value)}
                          className={cx(
                            "flex items-center gap-2 rounded-sm border-2 px-3 py-2 text-sm transition",
                            formData.category === option.value
                              ? "border-[#1a365d] bg-[#1a365d]/10 text-[#1a365d] dark:border-amber-500 dark:bg-amber-500/10 dark:text-amber-400"
                              : "border-stone-200 text-stone-600 hover:border-stone-300 dark:border-stone-700 dark:text-stone-400 dark:hover:border-stone-600"
                          )}
                        >
                          {option.icon}
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Severity <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {severityOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => updateField("severity", option.value)}
                          className={cx(
                            "flex w-full items-center justify-between rounded-sm border-2 px-3 py-2 text-sm transition",
                            formData.severity === option.value
                              ? "border-[#1a365d] bg-[#1a365d]/10 dark:border-amber-500 dark:bg-amber-500/10"
                              : "border-stone-200 hover:border-stone-300 dark:border-stone-700 dark:hover:border-stone-600"
                          )}
                        >
                          <span className="text-stone-700 dark:text-stone-300">{option.label}</span>
                          <span className={cx("rounded-sm px-2 py-0.5 text-xs", option.color)}>
                            {option.description}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps to Reproduce */}
            <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <FileText className="text-[#1a365d] dark:text-amber-400" size={24} />
                Reproduction Steps
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Steps to Reproduce <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.stepsToReproduce}
                    onChange={(e) => updateField("stepsToReproduce", e.target.value)}
                    placeholder="1. Go to the practice page&#10;2. Click on 'Start Test'&#10;3. Select Logical Reasoning&#10;4. ..."
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 font-mono text-sm text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Expected Behavior <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.expectedBehavior}
                      onChange={(e) => updateField("expectedBehavior", e.target.value)}
                      placeholder="What should have happened?"
                      className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Actual Behavior <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.actualBehavior}
                      onChange={(e) => updateField("actualBehavior", e.target.value)}
                      placeholder="What actually happened?"
                      className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Environment */}
            <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <Monitor className="text-[#1a365d] dark:text-amber-400" size={24} />
                Environment
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Browser
                  </label>
                  <select
                    value={formData.browser}
                    onChange={(e) => updateField("browser", e.target.value)}
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  >
                    <option value="">Select browser...</option>
                    {browserOptions.map((browser) => (
                      <option key={browser} value={browser}>
                        {browser}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Device
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => updateField("device", e.target.value)}
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  >
                    <option value="">Select device...</option>
                    {deviceOptions.map((device) => (
                      <option key={device} value={device}>
                        {device}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    URL Where Bug Occurred
                  </label>
                  <input
                    type="text"
                    value={formData.url}
                    onChange={(e) => updateField("url", e.target.value)}
                    placeholder="e.g., /practice/logical-reasoning"
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <Smartphone className="text-[#1a365d] dark:text-amber-400" size={24} />
                Contact Information
              </h2>

              <div>
                <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Email (optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                />
                <p className="mt-1 text-sm text-stone-500">
                  Provide your email if you'd like us to follow up with you about this bug.
                </p>
              </div>
            </div>

            {/* Screenshot Info */}
            <div className="rounded-sm border-2 border-dashed border-stone-300 bg-stone-50 p-6 text-center dark:border-stone-600 dark:bg-stone-900/50">
              <Camera className="mx-auto mb-2 text-stone-400" size={32} />
              <p className="text-sm text-stone-600 dark:text-stone-400">
                <span className="font-medium">Tip:</span> Screenshots help us understand the issue better.
                You can take a screenshot and attach it in your email to{" "}
                <a
                  href="mailto:bugs@lsatprep.com"
                  className="text-[#1a365d] underline dark:text-amber-400"
                >
                  bugs@lsatprep.com
                </a>{" "}
                referencing this bug report.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                <Send size={18} />
                Submit Bug Report
              </button>
              <Link
                href="/support/contact"
                className="flex items-center justify-center gap-2 rounded-sm border-2 border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                Contact Support Instead
              </Link>
            </div>
          </form>
        )}

        {/* Known Issues */}
        <div className="mt-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            <AlertTriangle className="text-amber-500" size={24} />
            Known Issues
          </h2>
          <p className="mb-4 text-stone-600 dark:text-stone-400">
            Before reporting, check if your issue is already known:
          </p>
          <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>
                <strong>Practice data sync:</strong> Progress is stored locally per device. Cross-device sync is coming soon.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>
                <strong>Safari private mode:</strong> Local storage may not work correctly in Safari's private browsing mode.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>
                <strong>Timer on background:</strong> The practice timer may pause when the browser tab is in the background on some mobile devices.
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
