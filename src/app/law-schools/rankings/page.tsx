"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  GraduationCap,
  MapPin,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import {
  T14_SCHOOLS,
  LawSchool,
  formatTuition,
  formatPercentage,
} from "@/lib/law-school-data";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type SortKey = "ranking" | "medianLSAT" | "medianGPA" | "acceptanceRate" | "tuition" | "employmentRate";

// Extended schools list (T25)
const EXTENDED_SCHOOLS: LawSchool[] = [
  ...T14_SCHOOLS,
  {
    id: "georgetown",
    name: "Georgetown University Law Center",
    shortName: "Georgetown",
    location: "Washington, DC",
    ranking: 15,
    medianLSAT: 171,
    lsatRange: [167, 173],
    medianGPA: 3.86,
    gpaRange: [3.68, 3.95],
    acceptanceRate: 19.2,
    classSize: 560,
    tuition: 67676,
    employmentRate: 91.5,
    barPassRate: 93.2,
    website: "https://www.law.georgetown.edu",
    color: "#041E42",
  },
  {
    id: "ucla",
    name: "UCLA School of Law",
    shortName: "UCLA",
    location: "Los Angeles, CA",
    ranking: 16,
    medianLSAT: 171,
    lsatRange: [166, 173],
    medianGPA: 3.87,
    gpaRange: [3.65, 3.93],
    acceptanceRate: 17.8,
    classSize: 310,
    tuition: 56036,
    employmentRate: 91.2,
    barPassRate: 92.1,
    website: "https://law.ucla.edu",
    color: "#2774AE",
  },
  {
    id: "texas",
    name: "University of Texas School of Law",
    shortName: "Texas",
    location: "Austin, TX",
    ranking: 17,
    medianLSAT: 170,
    lsatRange: [166, 172],
    medianGPA: 3.84,
    gpaRange: [3.62, 3.92],
    acceptanceRate: 18.5,
    classSize: 370,
    tuition: 53622,
    employmentRate: 90.8,
    barPassRate: 92.5,
    website: "https://law.utexas.edu",
    color: "#BF5700",
  },
  {
    id: "usc",
    name: "USC Gould School of Law",
    shortName: "USC",
    location: "Los Angeles, CA",
    ranking: 18,
    medianLSAT: 170,
    lsatRange: [165, 172],
    medianGPA: 3.85,
    gpaRange: [3.61, 3.91],
    acceptanceRate: 19.1,
    classSize: 215,
    tuition: 68186,
    employmentRate: 89.5,
    barPassRate: 91.2,
    website: "https://gould.usc.edu",
    color: "#990000",
  },
  {
    id: "wustl",
    name: "Washington University School of Law",
    shortName: "WashU",
    location: "St. Louis, MO",
    ranking: 19,
    medianLSAT: 170,
    lsatRange: [165, 172],
    medianGPA: 3.88,
    gpaRange: [3.65, 3.95],
    acceptanceRate: 25.2,
    classSize: 225,
    tuition: 63920,
    employmentRate: 88.5,
    barPassRate: 90.8,
    website: "https://law.wustl.edu",
    color: "#A51417",
  },
  {
    id: "vanderbilt",
    name: "Vanderbilt Law School",
    shortName: "Vanderbilt",
    location: "Nashville, TN",
    ranking: 20,
    medianLSAT: 170,
    lsatRange: [165, 172],
    medianGPA: 3.85,
    gpaRange: [3.62, 3.92],
    acceptanceRate: 20.5,
    classSize: 180,
    tuition: 62992,
    employmentRate: 89.2,
    barPassRate: 91.5,
    website: "https://law.vanderbilt.edu",
    color: "#866D4B",
  },
];

export default function RankingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("ranking");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(key === "ranking" || key === "acceptanceRate" || key === "tuition");
    }
  };

  const sortedSchools = useMemo(() => {
    let schools = [...EXTENDED_SCHOOLS];

    // Filter
    if (searchQuery) {
      schools = schools.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    schools.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "ranking":
          cmp = a.ranking - b.ranking;
          break;
        case "medianLSAT":
          cmp = b.medianLSAT - a.medianLSAT;
          break;
        case "medianGPA":
          cmp = b.medianGPA - a.medianGPA;
          break;
        case "acceptanceRate":
          cmp = a.acceptanceRate - b.acceptanceRate;
          break;
        case "tuition":
          cmp = a.tuition - b.tuition;
          break;
        case "employmentRate":
          cmp = b.employmentRate - a.employmentRate;
          break;
      }
      return sortAsc ? cmp : -cmp;
    });

    return schools;
  }, [searchQuery, sortKey, sortAsc]);

  const SortHeader = ({
    label,
    sortKeyName,
    className,
  }: {
    label: string;
    sortKeyName: SortKey;
    className?: string;
  }) => (
    <button
      onClick={() => handleSort(sortKeyName)}
      className={cx(
        "flex items-center gap-1 text-left text-xs font-semibold uppercase text-stone-500 transition hover:text-stone-900 dark:hover:text-stone-100",
        className
      )}
    >
      {label}
      {sortKey === sortKeyName &&
        (sortAsc ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
    </button>
  );

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Law School Rankings
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Compare top law schools by ranking, LSAT, GPA, and more.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
            />
            <input
              type="text"
              placeholder="Search schools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-sm border-2 border-stone-200 bg-white py-2 pl-10 pr-4 text-stone-900 placeholder-stone-400 focus:border-[#1a365d] focus:outline-none dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-amber-500"
            />
          </div>
        </div>

        {/* Rankings Table */}
        <div className="overflow-x-auto rounded-sm border-2 border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-stone-200 dark:border-stone-700">
                <th className="px-4 py-3 text-left">
                  <SortHeader label="Rank" sortKeyName="ranking" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-stone-500">
                  School
                </th>
                <th className="px-4 py-3 text-left">
                  <SortHeader label="LSAT" sortKeyName="medianLSAT" />
                </th>
                <th className="px-4 py-3 text-left">
                  <SortHeader label="GPA" sortKeyName="medianGPA" />
                </th>
                <th className="px-4 py-3 text-left">
                  <SortHeader label="Accept Rate" sortKeyName="acceptanceRate" />
                </th>
                <th className="px-4 py-3 text-left">
                  <SortHeader label="Tuition" sortKeyName="tuition" />
                </th>
                <th className="px-4 py-3 text-left">
                  <SortHeader label="Employment" sortKeyName="employmentRate" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-stone-500">
                  Website
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedSchools.map((school, index) => (
                <tr
                  key={school.id}
                  className={cx(
                    "border-b border-stone-100 transition hover:bg-stone-50 dark:border-stone-800 dark:hover:bg-stone-800/50",
                    index === sortedSchools.length - 1 && "border-b-0"
                  )}
                >
                  <td className="px-4 py-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a365d] text-sm font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                      {school.ranking}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      {school.shortName}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-stone-500">
                      <MapPin size={12} />
                      {school.location}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      {school.medianLSAT}
                    </div>
                    <div className="text-xs text-stone-500">
                      {school.lsatRange[0]}-{school.lsatRange[1]}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      {school.medianGPA.toFixed(2)}
                    </div>
                    <div className="text-xs text-stone-500">
                      {school.gpaRange[0].toFixed(2)}-{school.gpaRange[1].toFixed(2)}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={cx(
                        "rounded-sm px-2 py-1 text-sm font-semibold",
                        school.acceptanceRate < 10
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : school.acceptanceRate < 20
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      )}
                    >
                      {formatPercentage(school.acceptanceRate)}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-stone-900 dark:text-stone-100">
                    {formatTuition(school.tuition)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      {school.employmentRate >= 95 ? (
                        <TrendingUp size={14} className="text-green-500" />
                      ) : school.employmentRate >= 90 ? (
                        <TrendingUp size={14} className="text-amber-500" />
                      ) : (
                        <TrendingDown size={14} className="text-red-500" />
                      )}
                      <span className="text-stone-900 dark:text-stone-100">
                        {formatPercentage(school.employmentRate)}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#1a365d] transition hover:underline dark:text-amber-400"
                    >
                      Visit <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <h3 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Legend</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                &lt;10%
              </span>
              <span className="text-stone-600 dark:text-stone-400">Highly Selective</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                10-20%
              </span>
              <span className="text-stone-600 dark:text-stone-400">Very Selective</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                &gt;20%
              </span>
              <span className="text-stone-600 dark:text-stone-400">Selective</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
