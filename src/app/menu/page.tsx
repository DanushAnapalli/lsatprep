"use client";

import Link from "next/link";
import { Scale, ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { menuCategories } from "@/lib/menu-data";
import MenuCategoryCard from "@/components/MenuCategoryCard";

export default function MenuPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center justify-center rounded-sm border-2 border-stone-200 bg-stone-50 p-2 transition hover:border-stone-300 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-stone-600 dark:hover:bg-stone-700"
              aria-label="Back to Dashboard"
            >
              <ArrowLeft size={20} className="text-stone-600 dark:text-stone-400" />
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
                <Scale size={20} className="text-white dark:text-stone-900" />
              </div>
              <span className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                LSATprep
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-stone-600 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Navigation Menu
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Explore all features and resources available in LSATprep. Click any link to navigate directly.
          </p>
        </div>

        {/* Back to Dashboard Button (mobile-friendly) */}
        <div className="mb-8 sm:hidden">
          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {menuCategories.map((category) => (
            <MenuCategoryCard key={category.name} category={category} />
          ))}
        </div>

        {/* Quick Navigation Footer */}
        <div className="mt-12 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/test-select?mode=full"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-stone-300 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-100 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-700"
            >
              Start Practice Test
            </Link>
            <Link
              href="/analytics"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-stone-300 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-100 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-700"
            >
              View Analytics
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
