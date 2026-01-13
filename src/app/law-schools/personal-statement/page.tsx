"use client";

import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  PenLine,
  CheckCircle2,
  XCircle,
  Lightbulb,
  BookOpen,
  AlertTriangle,
  FileText,
} from "lucide-react";

export default function PersonalStatementPage() {
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
            Personal Statement Tips
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Craft a compelling personal statement that sets you apart.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            <FileText className="text-[#1a365d] dark:text-amber-400" size={24} />
            What Is a Personal Statement?
          </h2>
          <p className="mb-4 text-stone-600 dark:text-stone-400">
            Your personal statement is a 2-4 page essay that gives admissions committees insight into who you are
            beyond your LSAT score and GPA. It's your opportunity to tell your unique story and demonstrate
            why you'll be a valuable addition to their law school community.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
              <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">2-4</div>
              <div className="text-sm text-stone-500">Pages (double-spaced)</div>
            </div>
            <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
              <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">500-750</div>
              <div className="text-sm text-stone-500">Words typically</div>
            </div>
            <div className="rounded-sm border border-stone-200 p-4 dark:border-stone-700">
              <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">1st</div>
              <div className="text-sm text-stone-500">Person perspective</div>
            </div>
          </div>
        </div>

        {/* Structure */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            <BookOpen className="text-[#1a365d] dark:text-amber-400" size={24} />
            Recommended Structure
          </h2>

          <div className="space-y-4">
            <div className="rounded-sm border-l-4 border-[#1a365d] bg-stone-50 p-4 dark:border-amber-500 dark:bg-stone-800">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                1. Opening Hook (1 paragraph)
              </h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                Start with a compelling scene, moment, or question that draws the reader in.
                Avoid clichés like "I've always wanted to be a lawyer since I was five."
              </p>
            </div>

            <div className="rounded-sm border-l-4 border-[#1a365d] bg-stone-50 p-4 dark:border-amber-500 dark:bg-stone-800">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                2. Your Story (2-3 paragraphs)
              </h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                Develop your narrative with specific examples and experiences. Show how you've
                grown, what challenges you've overcome, and what drives your passion.
              </p>
            </div>

            <div className="rounded-sm border-l-4 border-[#1a365d] bg-stone-50 p-4 dark:border-amber-500 dark:bg-stone-800">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                3. Connection to Law (1-2 paragraphs)
              </h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                Explain why law school is the natural next step for you. Connect your experiences
                and values to your legal interests and career goals.
              </p>
            </div>

            <div className="rounded-sm border-l-4 border-[#1a365d] bg-stone-50 p-4 dark:border-amber-500 dark:bg-stone-800">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                4. Closing (1 paragraph)
              </h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                End with a forward-looking statement that ties back to your opening.
                Leave the reader with a clear sense of who you are and what you'll contribute.
              </p>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-green-800 dark:text-green-300">
              <CheckCircle2 size={24} />
              Do
            </h2>
            <ul className="space-y-3">
              {[
                "Tell YOUR unique story—don't write what you think they want to hear",
                "Use specific, concrete examples and anecdotes",
                "Show growth, self-reflection, and maturity",
                "Demonstrate genuine passion for law and justice",
                "Write in your authentic voice",
                "Have multiple people proofread for grammar and clarity",
                "Address any weaknesses in your application directly (if applicable)",
                "Tailor each statement if a school has specific prompts",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-400">
                  <CheckCircle2 size={14} className="mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-red-800 dark:text-red-300">
              <XCircle size={24} />
              Don't
            </h2>
            <ul className="space-y-3">
              {[
                "Restate your resume—they already have it",
                "Use clichés or generic statements",
                "Write about controversial topics without nuance",
                "Be negative about others or play the victim",
                "Exceed the word/page limit",
                "Submit without thorough proofreading",
                "Lie or exaggerate your experiences",
                "Use overly complex vocabulary to impress",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                  <XCircle size={14} className="mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Topic Ideas */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            <Lightbulb className="text-[#1a365d] dark:text-amber-400" size={24} />
            Topic Ideas & Prompts
          </h2>
          <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
            Not sure what to write about? Consider these starting points:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Formative Experience",
                prompt: "What experience fundamentally shaped who you are today?",
              },
              {
                title: "Overcoming Challenge",
                prompt: "What obstacle have you overcome and what did it teach you?",
              },
              {
                title: "Passion Project",
                prompt: "What cause, activity, or interest are you most passionate about?",
              },
              {
                title: "Defining Moment",
                prompt: "When did you realize you wanted to pursue law?",
              },
              {
                title: "Unique Perspective",
                prompt: "What viewpoint or experience will you bring to law school?",
              },
              {
                title: "Growth Story",
                prompt: "How have you changed or grown in the past few years?",
              },
            ].map((topic, i) => (
              <div
                key={i}
                className="rounded-sm border border-stone-200 p-4 dark:border-stone-700"
              >
                <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm italic text-stone-500">{topic.prompt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-400" size={24} />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">
                Start Early
              </h3>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                A great personal statement takes time. Start brainstorming 2-3 months before your
                application deadline. Plan for multiple drafts and get feedback from mentors,
                professors, or pre-law advisors. Don't rush this crucial component of your application.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
