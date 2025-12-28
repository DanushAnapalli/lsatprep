"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Calculator,
  MapPin,
  DollarSign,
  TrendingUp,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info,
  Star,
  Lock,
  Calendar,
} from "lucide-react";
import {
  LawSchool,
  T14_SCHOOLS,
  formatTuition,
  formatPercentage,
  formatGPA,
  getLSATRangeString,
  getGPARangeString,
} from "@/lib/law-school-data";
import {
  AdmissionProfile,
  ChanceCategory,
  calculateAdmissionProfile,
  getAdmissionSummary,
  CATEGORY_COLORS,
  CATEGORY_NAMES,
  CATEGORY_DESCRIPTIONS,
  getApplicationTimeline,
  saveAdmissionsProfile,
  loadAdmissionsProfile,
} from "@/lib/admissions-calculator";
import { onAuthChange, User as FirebaseUser } from "@/lib/firebase";
import { getUserTier, SubscriptionTier } from "@/lib/subscription";

type SortBy = "ranking" | "chance" | "lsat" | "gpa" | "tuition";

export default function AdmissionsPage() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionTier>("free");

  // Form state
  const [lsat, setLsat] = useState(165);
  const [gpa, setGpa] = useState(3.7);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [sortBy, setSortBy] = useState<SortBy>("chance");
  const [showTimeline, setShowTimeline] = useState(false);
  const [savedSchools, setSavedSchools] = useState<Set<string>>(new Set());

  // Calculated profile
  const profile = useMemo(() => {
    if (!hasCalculated) return null;
    return calculateAdmissionProfile(lsat, gpa);
  }, [lsat, gpa, hasCalculated]);

  const summary = useMemo(() => {
    if (!profile) return null;
    return getAdmissionSummary(profile);
  }, [profile]);

  const timeline = useMemo(() => {
    return getApplicationTimeline(new Date());
  }, []);

  // Auth handling
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const tier = getUserTier(user);
      setSubscription(tier);
    }
  }, [user]);

  // Load saved profile
  useEffect(() => {
    const saved = loadAdmissionsProfile(user?.uid);
    if (saved) {
      setLsat(saved.lsat);
      setGpa(saved.gpa);
      setSavedSchools(new Set(saved.targetSchools));
      setHasCalculated(true);
    }
  }, [user]);

  const handleCalculate = () => {
    setHasCalculated(true);
    saveAdmissionsProfile(
      {
        lsat,
        gpa,
        targetSchools: Array.from(savedSchools),
        savedAt: new Date(),
      },
      user?.uid
    );
  };

  const toggleSavedSchool = (schoolId: string) => {
    const newSaved = new Set(savedSchools);
    if (newSaved.has(schoolId)) {
      newSaved.delete(schoolId);
    } else {
      newSaved.add(schoolId);
    }
    setSavedSchools(newSaved);

    saveAdmissionsProfile(
      {
        lsat,
        gpa,
        targetSchools: Array.from(newSaved),
        savedAt: new Date(),
      },
      user?.uid
    );
  };

  // Sorted schools
  const sortedChances = useMemo(() => {
    if (!profile) return [];

    const chances = [...profile.chances];
    switch (sortBy) {
      case "ranking":
        return chances.sort((a, b) => a.school.ranking - b.school.ranking);
      case "chance":
        return chances.sort((a, b) => b.chancePercentage - a.chancePercentage);
      case "lsat":
        return chances.sort((a, b) => b.school.medianLSAT - a.school.medianLSAT);
      case "gpa":
        return chances.sort((a, b) => b.school.medianGPA - a.school.medianGPA);
      case "tuition":
        return chances.sort((a, b) => a.school.tuition - b.school.tuition);
      default:
        return chances;
    }
  }, [profile, sortBy]);

  const isPro = subscription === "pro" || subscription === "founder";

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-900">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-300 border-t-[#1a365d]" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">
            Law School Admissions
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Explore T14 schools and calculate your admission chances
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="h-5 w-5 text-[#1a365d] dark:text-amber-500" />
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Chances Calculator
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* LSAT Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">
                LSAT Score
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="140"
                  max="180"
                  value={lsat}
                  onChange={(e) => setLsat(parseInt(e.target.value))}
                  className="flex-1"
                />
                <input
                  type="number"
                  min="140"
                  max="180"
                  value={lsat}
                  onChange={(e) => setLsat(Math.min(180, Math.max(140, parseInt(e.target.value) || 140)))}
                  className="w-16 rounded-sm border-2 border-stone-200 px-2 py-1 text-center font-mono text-lg font-bold dark:border-stone-700 dark:bg-stone-800"
                />
              </div>
            </div>

            {/* GPA Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">
                GPA (4.0 scale)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2.0"
                  max="4.0"
                  step="0.01"
                  value={gpa}
                  onChange={(e) => setGpa(parseFloat(e.target.value))}
                  className="flex-1"
                />
                <input
                  type="number"
                  min="2.0"
                  max="4.0"
                  step="0.01"
                  value={gpa}
                  onChange={(e) => setGpa(Math.min(4.0, Math.max(2.0, parseFloat(e.target.value) || 2.0)))}
                  className="w-16 rounded-sm border-2 border-stone-200 px-2 py-1 text-center font-mono text-lg font-bold dark:border-stone-700 dark:bg-stone-800"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="flex items-end">
              <button
                onClick={handleCalculate}
                className="w-full rounded-sm bg-[#1a365d] px-4 py-2.5 font-semibold text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Calculate Chances
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <AnimatePresence>
          {hasCalculated && profile && summary && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Summary */}
              <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
                <h3 className="mb-4 text-lg font-bold text-stone-900 dark:text-stone-100">
                  Your Profile Summary
                </h3>

                <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {(["safety", "target", "reach", "unlikely"] as ChanceCategory[]).map((cat) => {
                    const count = profile.chances.filter((c) => c.category === cat).length;
                    const colors = CATEGORY_COLORS[cat];
                    return (
                      <div
                        key={cat}
                        className={`rounded-sm border-2 p-3 text-center ${colors.bg} ${colors.border}`}
                      >
                        <div className={`text-2xl font-bold ${colors.text}`}>{count}</div>
                        <div className={`text-sm font-medium ${colors.text}`}>
                          {CATEGORY_NAMES[cat]} Schools
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-stone-600 dark:text-stone-400">
                  {summary.recommendation}
                </p>

                {!isPro && (
                  <div className="mt-4 flex items-center gap-2 rounded-sm border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
                    <Lock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm text-amber-700 dark:text-amber-300">
                      Upgrade to Pro for personalized recommendations and detailed analytics
                    </span>
                    <Link
                      href="/pricing"
                      className="ml-auto text-sm font-semibold text-amber-600 hover:underline dark:text-amber-400"
                    >
                      Upgrade
                    </Link>
                  </div>
                )}
              </div>

              {/* Sort controls */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  T14 Schools
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone-500 dark:text-stone-400">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortBy)}
                    className="rounded-sm border-2 border-stone-200 bg-white px-3 py-1.5 text-sm dark:border-stone-700 dark:bg-stone-800"
                  >
                    <option value="chance">Chance</option>
                    <option value="ranking">Ranking</option>
                    <option value="lsat">LSAT</option>
                    <option value="gpa">GPA</option>
                    <option value="tuition">Tuition</option>
                  </select>
                </div>
              </div>

              {/* Schools Grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {sortedChances.map((chance, i) => {
                  const school = chance.school;
                  const colors = CATEGORY_COLORS[chance.category];
                  const isSaved = savedSchools.has(school.id);

                  return (
                    <motion.div
                      key={school.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`rounded-sm border-2 bg-white p-4 dark:bg-stone-800 ${colors.border}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold"
                            style={{ backgroundColor: school.color }}
                          >
                            #{school.ranking}
                          </div>
                          <div>
                            <h4 className="font-bold text-stone-900 dark:text-stone-100">
                              {school.shortName}
                            </h4>
                            <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
                              <MapPin className="h-3 w-3" />
                              {school.location}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleSavedSchool(school.id)}
                            className={`rounded-full p-1.5 transition-colors ${
                              isSaved
                                ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                                : "text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700"
                            }`}
                          >
                            <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
                          </button>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-sm font-bold ${colors.bg} ${colors.text}`}
                          >
                            {chance.chancePercentage}%
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded bg-stone-50 p-2 dark:bg-stone-900">
                          <span className="text-stone-500 dark:text-stone-400">LSAT</span>
                          <div className="font-mono font-bold text-stone-900 dark:text-stone-100">
                            {school.medianLSAT}
                            <span className="ml-1 text-stone-400">
                              ({getLSATRangeString(school)})
                            </span>
                          </div>
                        </div>
                        <div className="rounded bg-stone-50 p-2 dark:bg-stone-900">
                          <span className="text-stone-500 dark:text-stone-400">GPA</span>
                          <div className="font-mono font-bold text-stone-900 dark:text-stone-100">
                            {formatGPA(school.medianGPA)}
                            <span className="ml-1 text-stone-400">
                              ({getGPARangeString(school)})
                            </span>
                          </div>
                        </div>
                        <div className="rounded bg-stone-50 p-2 dark:bg-stone-900">
                          <span className="text-stone-500 dark:text-stone-400">Tuition</span>
                          <div className="font-bold text-stone-900 dark:text-stone-100">
                            {formatTuition(school.tuition)}
                          </div>
                        </div>
                        <div className="rounded bg-stone-50 p-2 dark:bg-stone-900">
                          <span className="text-stone-500 dark:text-stone-400">Accept Rate</span>
                          <div className="font-bold text-stone-900 dark:text-stone-100">
                            {formatPercentage(school.acceptanceRate)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className={`text-xs font-medium ${colors.text}`}>
                          {CATEGORY_NAMES[chance.category]}
                        </span>
                        <a
                          href={school.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
                        >
                          Visit website
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Timeline Section */}
              <div className="rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
                <button
                  onClick={() => setShowTimeline(!showTimeline)}
                  className="flex w-full items-center justify-between p-4"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#1a365d] dark:text-amber-500" />
                    <span className="font-bold text-stone-900 dark:text-stone-100">
                      Application Timeline
                    </span>
                  </div>
                  {showTimeline ? (
                    <ChevronUp className="h-5 w-5 text-stone-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-stone-500" />
                  )}
                </button>

                <AnimatePresence>
                  {showTimeline && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-stone-200 p-4 dark:border-stone-700">
                        <div className="space-y-4">
                          {timeline.map((event, i) => (
                            <div
                              key={i}
                              className={`flex gap-4 ${
                                event.isImportant ? "pl-0" : "pl-4"
                              }`}
                            >
                              <div
                                className={`
                                  mt-1 h-3 w-3 shrink-0 rounded-full
                                  ${event.isImportant
                                    ? "bg-[#1a365d] dark:bg-amber-500"
                                    : "bg-stone-300 dark:bg-stone-600"
                                  }
                                `}
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                                    {event.month}
                                  </span>
                                  {event.isImportant && (
                                    <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                                      Important
                                    </span>
                                  )}
                                </div>
                                <p className="font-medium text-stone-700 dark:text-stone-300">
                                  {event.title}
                                </p>
                                <p className="text-sm text-stone-500 dark:text-stone-400">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Category Legend */}
              <div className="rounded-sm border-2 border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800/50">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-4 w-4 text-stone-500" />
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    Category Explanations
                  </span>
                </div>
                <div className="grid gap-2 md:grid-cols-4">
                  {(["safety", "target", "reach", "unlikely"] as ChanceCategory[]).map((cat) => {
                    const colors = CATEGORY_COLORS[cat];
                    return (
                      <div key={cat} className={`rounded-sm p-2 ${colors.bg}`}>
                        <span className={`text-sm font-bold ${colors.text}`}>
                          {CATEGORY_NAMES[cat]}
                        </span>
                        <p className={`text-xs ${colors.text} opacity-80`}>
                          {CATEGORY_DESCRIPTIONS[cat]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* School Browse (before calculation) */}
        {!hasCalculated && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Browse T14 Schools
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {T14_SCHOOLS.map((school) => (
                <div
                  key={school.id}
                  className="rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: school.color }}
                    >
                      #{school.ranking}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 dark:text-stone-100">
                        {school.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
                        <MapPin className="h-3 w-3" />
                        {school.location}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-stone-500 dark:text-stone-400">LSAT Median</span>
                      <div className="font-mono font-bold">{school.medianLSAT}</div>
                    </div>
                    <div>
                      <span className="text-stone-500 dark:text-stone-400">GPA Median</span>
                      <div className="font-mono font-bold">{formatGPA(school.medianGPA)}</div>
                    </div>
                    <div>
                      <span className="text-stone-500 dark:text-stone-400">Tuition</span>
                      <div className="font-bold">{formatTuition(school.tuition)}</div>
                    </div>
                    <div>
                      <span className="text-stone-500 dark:text-stone-400">Accept Rate</span>
                      <div className="font-bold">{formatPercentage(school.acceptanceRate)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
