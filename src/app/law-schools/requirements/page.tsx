"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Target,
  Calculator,
  TrendingUp,
  Info,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { T14_SCHOOLS, LawSchool, formatPercentage } from "@/lib/law-school-data";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Extended list with scholarship info
interface SchoolWithScholarship extends LawSchool {
  scholarshipMedian?: number;
  scholarshipPercent?: number;
}

const SCHOOLS_WITH_SCHOLARSHIPS: SchoolWithScholarship[] = T14_SCHOOLS.map((school) => ({
  ...school,
  scholarshipMedian: Math.round(school.tuition * (0.3 + Math.random() * 0.4)),
  scholarshipPercent: Math.round(50 + Math.random() * 40),
}));

export default function RequirementsPage() {
  const [targetLSAT, setTargetLSAT] = useState(170);
  const [targetGPA, setTargetGPA] = useState(3.8);

  const categorizedSchools = useMemo(() => {
    const reach: SchoolWithScholarship[] = [];
    const target: SchoolWithScholarship[] = [];
    const safety: SchoolWithScholarship[] = [];

    SCHOOLS_WITH_SCHOLARSHIPS.forEach((school) => {
      const lsatDiff = targetLSAT - school.medianLSAT;
      const gpaDiff = targetGPA - school.medianGPA;

      if (lsatDiff < -2 || gpaDiff < -0.15) {
        reach.push(school);
      } else if (lsatDiff >= 2 && gpaDiff >= 0.1) {
        safety.push(school);
      } else {
        target.push(school);
      }
    });

    return { reach, target, safety };
  }, [targetLSAT, targetGPA]);

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
            Score Requirements
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            See what LSAT and GPA scores you need for top law schools.
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
            <Calculator className="text-[#1a365d] dark:text-amber-400" size={24} />
            Your Target Scores
          </h2>
          <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
            Enter your target scores to see which schools are reach, target, or safety for you.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">
                Target LSAT Score
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="150"
                  max="180"
                  value={targetLSAT}
                  onChange={(e) => setTargetLSAT(parseInt(e.target.value))}
                  className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-stone-200 dark:bg-stone-700"
                />
                <span className="w-12 text-center text-xl font-bold text-[#1a365d] dark:text-amber-400">
                  {targetLSAT}
                </span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">
                Target GPA
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="3.0"
                  max="4.0"
                  step="0.01"
                  value={targetGPA}
                  onChange={(e) => setTargetGPA(parseFloat(e.target.value))}
                  className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-stone-200 dark:bg-stone-700"
                />
                <span className="w-12 text-center text-xl font-bold text-[#1a365d] dark:text-amber-400">
                  {targetGPA.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Breakdown */}
        <div className="space-y-6">
          {/* Reach Schools */}
          <div className="rounded-sm border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-red-800 dark:text-red-300">
              <TrendingUp className="rotate-180" size={24} />
              Reach Schools ({categorizedSchools.reach.length})
            </h2>
            <p className="mb-4 text-sm text-red-700 dark:text-red-400">
              Your scores are below the median. Admission is possible but competitive.
            </p>
            {categorizedSchools.reach.length > 0 ? (
              <div className="grid gap-3 md:grid-cols-2">
                {categorizedSchools.reach.map((school) => (
                  <div
                    key={school.id}
                    className="rounded-sm border border-red-200 bg-white p-4 dark:border-red-800 dark:bg-stone-900"
                  >
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      #{school.ranking} {school.shortName}
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-stone-500">LSAT:</span>{" "}
                        <span className="font-medium text-stone-900 dark:text-stone-100">
                          {school.medianLSAT}
                        </span>
                        <span className="text-xs text-stone-400">
                          {" "}({school.lsatRange[0]}-{school.lsatRange[1]})
                        </span>
                      </div>
                      <div>
                        <span className="text-stone-500">GPA:</span>{" "}
                        <span className="font-medium text-stone-900 dark:text-stone-100">
                          {school.medianGPA.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-700 dark:text-red-400">No reach schools with your current targets.</p>
            )}
          </div>

          {/* Target Schools */}
          <div className="rounded-sm border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-amber-800 dark:text-amber-300">
              <Target size={24} />
              Target Schools ({categorizedSchools.target.length})
            </h2>
            <p className="mb-4 text-sm text-amber-700 dark:text-amber-400">
              Your scores are competitive. Good chances of admission with a strong application.
            </p>
            {categorizedSchools.target.length > 0 ? (
              <div className="grid gap-3 md:grid-cols-2">
                {categorizedSchools.target.map((school) => (
                  <div
                    key={school.id}
                    className="rounded-sm border border-amber-200 bg-white p-4 dark:border-amber-800 dark:bg-stone-900"
                  >
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      #{school.ranking} {school.shortName}
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-stone-500">LSAT:</span>{" "}
                        <span className="font-medium text-stone-900 dark:text-stone-100">
                          {school.medianLSAT}
                        </span>
                        <span className="text-xs text-stone-400">
                          {" "}({school.lsatRange[0]}-{school.lsatRange[1]})
                        </span>
                      </div>
                      <div>
                        <span className="text-stone-500">GPA:</span>{" "}
                        <span className="font-medium text-stone-900 dark:text-stone-100">
                          {school.medianGPA.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-amber-700 dark:text-amber-400">No target schools with your current targets.</p>
            )}
          </div>

          {/* Safety Schools */}
          <div className="rounded-sm border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
            <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-green-800 dark:text-green-300">
              <TrendingUp size={24} />
              Safety Schools ({categorizedSchools.safety.length})
            </h2>
            <p className="mb-4 text-sm text-green-700 dark:text-green-400">
              Your scores are above the median. Strong likelihood of admission and scholarship offers.
            </p>
            {categorizedSchools.safety.length > 0 ? (
              <div className="grid gap-3 md:grid-cols-2">
                {categorizedSchools.safety.map((school) => (
                  <div
                    key={school.id}
                    className="rounded-sm border border-green-200 bg-white p-4 dark:border-green-800 dark:bg-stone-900"
                  >
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      #{school.ranking} {school.shortName}
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-stone-500">LSAT:</span>{" "}
                        <span className="font-medium text-stone-900 dark:text-stone-100">
                          {school.medianLSAT}
                        </span>
                        <span className="text-xs text-stone-400">
                          {" "}({school.lsatRange[0]}-{school.lsatRange[1]})
                        </span>
                      </div>
                      <div>
                        <span className="text-stone-500">GPA:</span>{" "}
                        <span className="font-medium text-stone-900 dark:text-stone-100">
                          {school.medianGPA.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-green-700 dark:text-green-400">No safety schools with your current targets. Consider adjusting your targets higher!</p>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 rounded-sm border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" size={20} />
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300">
                Important Note
              </h3>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
                These categories are general guidelines based on median scores. Actual admission
                depends on many factors including personal statement, letters of recommendation,
                work experience, diversity contributions, and more. Schools use holistic review
                processes that consider the whole applicant.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
