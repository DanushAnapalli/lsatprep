"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Mail,
  MessageSquare,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page and enter your email. You'll receive a password reset link within a few minutes.",
  },
  {
    question: "Is my practice data saved if I clear my browser?",
    answer:
      "Your data is stored locally in your browser. Clearing browser data will remove your progress. We recommend exporting your data regularly from Settings > Export.",
  },
  {
    question: "Can I use LSATPrep on multiple devices?",
    answer:
      "Yes, you can sign in on any device. However, practice data is stored locally per device. Your account and settings sync, but practice history does not currently sync between devices.",
  },
  {
    question: "How accurate are the practice questions?",
    answer:
      "Our questions are designed to closely mirror actual LSAT questions in format, difficulty, and reasoning patterns. However, for official practice, we recommend also using LSAC's official PrepTests.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can manage your subscription from your Profile page. Click on 'Manage Subscription' to access billing options including cancellation.",
  },
  {
    question: "Are there study plans or schedules?",
    answer:
      "Check out our Syllabus page in Study Resources for recommended study timelines based on your target test date. We recommend 3-6 months of dedicated preparation.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log({ name, email, subject, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
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
            Contact Support
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Have a question? Check our FAQ or send us a message.
          </p>
        </div>

        {/* Response Time */}
        <div className="mb-8 flex items-center gap-3 rounded-sm border-2 border-[#1a365d] bg-[#1a365d]/5 p-4 dark:border-amber-500 dark:bg-amber-500/10">
          <Clock className="text-[#1a365d] dark:text-amber-400" size={24} />
          <div>
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              Average Response Time:
            </span>{" "}
            <span className="text-stone-600 dark:text-stone-400">
              Within 24-48 hours on business days
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              <MessageSquare className="text-[#1a365d] dark:text-amber-400" size={24} />
              Send a Message
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
                </div>
                <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                  Message Sent!
                </h3>
                <p className="mb-4 text-stone-600 dark:text-stone-400">
                  We'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#1a365d] underline dark:text-amber-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Subject
                  </label>
                  <select
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  >
                    <option value="">Select a topic...</option>
                    <option value="account">Account Issues</option>
                    <option value="billing">Billing & Subscription</option>
                    <option value="bug">Bug Report</option>
                    <option value="content">Content Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe your issue or question in detail..."
                    className="w-full rounded-sm border border-stone-200 bg-white px-3 py-2 text-stone-900 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Alternative Contact */}
          <div className="space-y-6">
            <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <Mail className="text-[#1a365d] dark:text-amber-400" size={24} />
                Email Directly
              </h2>
              <p className="mb-4 text-stone-600 dark:text-stone-400">
                Prefer email? Reach us directly at:
              </p>
              <a
                href="mailto:support@lsatprep.com"
                className="text-lg font-semibold text-[#1a365d] hover:underline dark:text-amber-400"
              >
                support@lsatprep.com
              </a>
            </div>

            <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                <HelpCircle className="text-[#1a365d] dark:text-amber-400" size={24} />
                Quick Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/support/feature-requests"
                    className="text-[#1a365d] hover:underline dark:text-amber-400"
                  >
                    Request a Feature
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings/privacy"
                    className="text-[#1a365d] hover:underline dark:text-amber-400"
                  >
                    Data & Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings/export"
                    className="text-[#1a365d] hover:underline dark:text-amber-400"
                  >
                    Export Your Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-6 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            <HelpCircle className="text-[#1a365d] dark:text-amber-400" size={24} />
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-stone-200 dark:divide-stone-700">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    {item.question}
                  </span>
                  {expandedFAQ === index ? (
                    <ChevronUp size={20} className="text-stone-400" />
                  ) : (
                    <ChevronDown size={20} className="text-stone-400" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <p className="mt-3 text-stone-600 dark:text-stone-400">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
