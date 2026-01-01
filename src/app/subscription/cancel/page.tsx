"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, X, Sparkles, BarChart3, Brain, Target, Zap, BookOpen } from "lucide-react";

const proFeatures = [
  { icon: BookOpen, label: "Unlimited Practice Tests" },
  { icon: BarChart3, label: "Advanced Analytics" },
  { icon: Brain, label: "AI-Powered Insights" },
  { icon: Target, label: "Personalized Study Plans" },
  { icon: Zap, label: "Priority Support" },
];

export default function SubscriptionCancelPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Minimal header */}
      <header className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Status indicator */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
            <X size={24} className="text-stone-400" />
          </div>
        </div>

        {/* Main message */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-3">
            Payment not completed
          </h1>
          <p className="text-stone-500 dark:text-stone-400">
            You haven&apos;t been charged. Your free account remains active.
          </p>
        </div>

        {/* What you're missing */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-amber-500" />
            <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
              Pro features you&apos;re missing
            </span>
          </div>

          <div className="space-y-3">
            {proFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-stone-600 dark:text-stone-400">
                <feature.icon size={16} className="text-stone-400 dark:text-stone-500 flex-shrink-0" />
                <span className="text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={() => router.push("/subscription")}
            className="w-full py-3 px-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View subscription options
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full py-3 px-4 text-stone-500 text-sm font-medium hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            Continue with free plan
          </button>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-stone-400 mt-8">
          Questions? Contact{" "}
          <a href="mailto:support@lsatprep.com" className="underline hover:text-stone-600">
            support@lsatprep.com
          </a>
        </p>
      </main>
    </div>
  );
}
