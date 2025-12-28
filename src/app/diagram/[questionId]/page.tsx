"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { Question } from "@/lib/lsat-types";
import { logicalReasoningQuestions } from "@/lib/sample-questions";
import { ArgumentDiagrammer } from "@/components/argument/ArgumentDiagrammer";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { getUserTier, canAccessFeature } from "@/lib/subscription";

export default function DiagramPage() {
  const params = useParams();
  const router = useRouter();
  const questionId = params.questionId as string;

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [question, setQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hasAccess, setHasAccess] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Check access
  useEffect(() => {
    if (user) {
      const tier = getUserTier(user);
      setHasAccess(tier === "pro" || tier === "founder");
    }
  }, [user]);

  // Load question
  useEffect(() => {
    // Find the question in LR questions (diagramming is most useful for LR)
    const index = logicalReasoningQuestions.findIndex((q) => q.id === questionId);
    if (index !== -1) {
      setQuestion(logicalReasoningQuestions[index]);
      setQuestionIndex(index);
    } else {
      // Try to find by index if it's a number
      const numId = parseInt(questionId);
      if (!isNaN(numId) && numId >= 0 && numId < logicalReasoningQuestions.length) {
        setQuestion(logicalReasoningQuestions[numId]);
        setQuestionIndex(numId);
      }
    }
  }, [questionId]);

  const navigateQuestion = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, questionIndex - 1)
        : Math.min(logicalReasoningQuestions.length - 1, questionIndex + 1);

    const newQuestion = logicalReasoningQuestions[newIndex];
    router.push(`/diagram/${newQuestion.id}`);
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-900">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-300 border-t-[#1a365d]" />
      </div>
    );
  }

  // Pro-only feature check
  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-stone-100 dark:bg-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12">
          <Link
            href="/dashboard"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-sm border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
              <Lock className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>

            <h1 className="mb-2 text-2xl font-bold text-stone-900 dark:text-stone-100">
              Pro Feature
            </h1>
            <p className="mb-6 text-stone-600 dark:text-stone-400">
              Argument Diagramming is a Pro feature. Upgrade to unlock visual
              argument analysis tools.
            </p>

            <Link
              href="/pricing"
              className="inline-block rounded-sm bg-[#1a365d] px-6 py-3 font-semibold text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              Upgrade to Pro
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  if (!question) {
    return (
      <main className="min-h-screen bg-stone-100 dark:bg-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12">
          <Link
            href="/dashboard"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="rounded-sm border-2 border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900">
            <p className="text-stone-600 dark:text-stone-400">
              Question not found
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateQuestion("prev")}
              disabled={questionIndex === 0}
              className="flex items-center gap-1 rounded-sm border-2 border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-50 disabled:opacity-50 dark:border-stone-600 dark:text-stone-400 dark:hover:bg-stone-800"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <span className="text-sm text-stone-500 dark:text-stone-400">
              {questionIndex + 1} / {logicalReasoningQuestions.length}
            </span>
            <button
              onClick={() => navigateQuestion("next")}
              disabled={questionIndex === logicalReasoningQuestions.length - 1}
              className="flex items-center gap-1 rounded-sm border-2 border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-50 disabled:opacity-50 dark:border-stone-600 dark:text-stone-400 dark:hover:bg-stone-800"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Question info */}
        <div className="mb-6 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <div className="flex items-center gap-2">
            <span className="rounded bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400">
              {question.type.replace("-", " ").toUpperCase()}
            </span>
            <span className="text-sm text-stone-500 dark:text-stone-400">
              Question {question.id}
            </span>
          </div>
          <p className="mt-2 font-medium text-stone-900 dark:text-stone-100">
            {question.questionStem}
          </p>
        </div>

        {/* Diagrammer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900"
        >
          <ArgumentDiagrammer
            questionId={question.id}
            questionText={question.stimulus}
            userId={user?.uid}
          />
        </motion.div>

        {/* Tips */}
        <div className="mt-6 rounded-sm border-2 border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800/50">
          <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
            Diagramming Tips
          </h3>
          <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
            <li>
              <strong>Conclusion:</strong> Look for words like "therefore,"
              "thus," "hence," "so," or "must be"
            </li>
            <li>
              <strong>Premises:</strong> Evidence that supports the conclusion
              - facts, observations, or given information
            </li>
            <li>
              <strong>Assumptions:</strong> Unstated ideas that bridge premises
              to conclusion
            </li>
            <li>
              <strong>Background:</strong> Context that sets up the argument
              but doesn't directly support the conclusion
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
