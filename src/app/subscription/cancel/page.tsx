"use client";

import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

export default function SubscriptionCancelPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <XCircle className="w-10 h-10 text-stone-500" />
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          No worries! Your payment was cancelled and you weren&apos;t charged. You can upgrade anytime.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => router.push("/subscription")}
            className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full px-6 py-3 bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
