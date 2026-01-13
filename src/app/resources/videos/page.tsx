"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  ArrowLeft,
  Video,
  Play,
  ExternalLink,
  Brain,
  FileText,
  Clock,
  GraduationCap,
  Filter,
} from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";

interface VideoResource {
  title: string;
  description: string;
  duration: string;
  category: "lr" | "rc" | "general" | "strategy";
  videoId: string; // YouTube video ID
  channel: string;
  channelUrl?: string;
}

// Verified LSAT prep videos with working YouTube video IDs
const videoResources: VideoResource[] = [
  // Logical Reasoning Videos
  {
    title: "Logical Reasoning Mini Course - The Empirical Method",
    description: "The first lesson in 7Sage's comprehensive Logical Reasoning mini course covering fundamental concepts.",
    duration: "15:23",
    category: "lr",
    videoId: "uqoNNxLunis",
    channel: "7Sage LSAT",
    channelUrl: "https://www.youtube.com/@7Sage",
  },
  {
    title: "How to Attack LR Questions | LSAT Demon Daily",
    description: "Expert strategies for approaching Logical Reasoning questions effectively and efficiently.",
    duration: "22:45",
    category: "lr",
    videoId: "ffK0U_bYrR8",
    channel: "LSAT Demon",
    channelUrl: "https://www.youtube.com/@LSATDemon",
  },
  {
    title: "Leveling Up LR | LSAT Demon Daily",
    description: "Advanced techniques to improve your Logical Reasoning performance and consistency.",
    duration: "18:32",
    category: "lr",
    videoId: "MUhNHeai8Eo",
    channel: "LSAT Demon",
    channelUrl: "https://www.youtube.com/@LSATDemon",
  },
  {
    title: "Fatigue in Logical Reasoning | LSAT Demon Daily",
    description: "How to maintain focus and avoid mental fatigue during Logical Reasoning sections.",
    duration: "16:18",
    category: "lr",
    videoId: "FLLaypoHoyg",
    channel: "LSAT Demon",
    channelUrl: "https://www.youtube.com/@LSATDemon",
  },
  {
    title: "LR by the Numbers | 7Sage LSAT Podcast",
    description: "Data-driven insights into Logical Reasoning question types and strategies.",
    duration: "24:56",
    category: "lr",
    videoId: "kT9zxtJCO_g",
    channel: "7Sage LSAT",
    channelUrl: "https://www.youtube.com/@7Sage",
  },

  // Reading Comprehension Videos
  {
    title: "Reading Comprehension Skill Tests | PowerScore Podcast",
    description: "Jon and Dave outline a variety of approaches for mastering LSAT Reading Comprehension.",
    duration: "45:12",
    category: "rc",
    videoId: "yGcmQQpUjqA",
    channel: "PowerScore",
    channelUrl: "https://www.youtube.com/@PowerScore",
  },
  {
    title: "PowerScore LSAT Reading Comprehension Bible Review",
    description: "Comprehensive overview of the PowerScore RC Bible and its key strategies.",
    duration: "12:34",
    category: "rc",
    videoId: "ieXnZSrHU1k",
    channel: "PowerScore",
    channelUrl: "https://www.youtube.com/@PowerScore",
  },
  {
    title: "The PowerScore LSAT Reading Comprehension Bible Overview",
    description: "Detailed walkthrough of the world's most comprehensive RC publication.",
    duration: "8:45",
    category: "rc",
    videoId: "VUkTNbw8vnI",
    channel: "PowerScore",
    channelUrl: "https://www.youtube.com/@PowerScore",
  },
  {
    title: "Student Question Mailbag - Reading Comprehension Edition",
    description: "PowerScore answers common student questions about RC strategies and techniques.",
    duration: "38:22",
    category: "rc",
    videoId: "fgTKYvL00GM",
    channel: "PowerScore",
    channelUrl: "https://www.youtube.com/@PowerScore",
  },

  // Strategy Videos
  {
    title: "How I'd Study for the LSAT in 2025 | 175-Scorer Tips",
    description: "Proven strategies from a 175+ scorer on the most effective LSAT study approach.",
    duration: "21:34",
    category: "strategy",
    videoId: "5qydveDr2IA",
    channel: "LSAT Unplugged",
    channelUrl: "https://www.youtube.com/@LSATUnplugged",
  },
  {
    title: "LSAT Prep in 2025 | What NOT to Study",
    description: "Learn what to avoid when studying for the LSAT to maximize your prep efficiency.",
    duration: "14:28",
    category: "strategy",
    videoId: "jpJGuitsRdQ",
    channel: "LSAT Unplugged",
    channelUrl: "https://www.youtube.com/@LSATUnplugged",
  },
  {
    title: "10 Proven Strategies to Boost Your LSAT Score by 20+ Points",
    description: "Comprehensive guide to dramatically improving your LSAT score with proven techniques.",
    duration: "18:45",
    category: "strategy",
    videoId: "U4ZPDKfZDTw",
    channel: "LSAT Unplugged",
    channelUrl: "https://www.youtube.com/@LSATUnplugged",
  },
  {
    title: "Conquer the LSAT in 2025 Before the Test Changes",
    description: "Strategic advice for preparing for the LSAT given upcoming changes to the test format.",
    duration: "22:18",
    category: "strategy",
    videoId: "4SyFpA9TlpI",
    channel: "LSAT Demon",
    channelUrl: "https://www.youtube.com/@LSATDemon",
  },

  // General Videos
  {
    title: "Last-Minute LSAT Test Day Advice",
    description: "Essential tips for the final days before your LSAT to ensure you perform your best.",
    duration: "12:34",
    category: "general",
    videoId: "Sp9SA3BagTI",
    channel: "LSAT Unplugged",
    channelUrl: "https://www.youtube.com/@LSATUnplugged",
  },
  {
    title: "What to Expect on LSAT Test Day",
    description: "A complete walkthrough of test day procedures, what to bring, and how to prepare.",
    duration: "15:22",
    category: "general",
    videoId: "3sYmUl0vsck",
    channel: "LSAT Lab",
    channelUrl: "https://www.youtube.com/@LSATLab",
  },
  {
    title: "LSAT Test Day Advice | LSAT Demon Daily",
    description: "Beth and Delia answer frequently asked questions about LSAT test day preparation.",
    duration: "24:18",
    category: "general",
    videoId: "FNyl0LXFa98",
    channel: "LSAT Demon",
    channelUrl: "https://www.youtube.com/@LSATDemon",
  },
  {
    title: "August LSAT Last-Minute Test Day Advice",
    description: "Final preparation tips specifically for test takers in the days before their exam.",
    duration: "11:45",
    category: "general",
    videoId: "ek6CmreWBvI",
    channel: "LSAT Unplugged",
    channelUrl: "https://www.youtube.com/@LSATUnplugged",
  },
];

const getCategoryInfo = (category: VideoResource["category"]) => {
  switch (category) {
    case "lr":
      return {
        label: "Logical Reasoning",
        icon: <Brain size={14} />,
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      };
    case "rc":
      return {
        label: "Reading Comp",
        icon: <FileText size={14} />,
        color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      };
    case "strategy":
      return {
        label: "Strategy",
        icon: <Clock size={14} />,
        color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
      };
    case "general":
      return {
        label: "General",
        icon: <GraduationCap size={14} />,
        color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      };
  }
};

// Generate YouTube thumbnail URL from video ID
const getThumbnailUrl = (videoId: string) => {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
};

// Generate YouTube watch URL from video ID
const getVideoUrl = (videoId: string) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<VideoResource["category"] | "all">("all");

  const filteredVideos = selectedCategory === "all"
    ? videoResources
    : videoResources.filter((v) => v.category === selectedCategory);

  const categoryCounts = {
    all: videoResources.length,
    lr: videoResources.filter((v) => v.category === "lr").length,
    rc: videoResources.filter((v) => v.category === "rc").length,
    strategy: videoResources.filter((v) => v.category === "strategy").length,
    general: videoResources.filter((v) => v.category === "general").length,
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
            Video Library
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            {videoResources.length} curated video resources to help you master the LSAT.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
            <Filter size={16} />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cx(
                "rounded-sm px-3 py-1.5 text-sm font-medium transition",
                selectedCategory === "all"
                  ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              )}
            >
              All ({categoryCounts.all})
            </button>
            <button
              onClick={() => setSelectedCategory("lr")}
              className={cx(
                "flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-medium transition",
                selectedCategory === "lr"
                  ? "bg-purple-600 text-white dark:bg-purple-500"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50"
              )}
            >
              <Brain size={14} />
              Logical Reasoning ({categoryCounts.lr})
            </button>
            <button
              onClick={() => setSelectedCategory("rc")}
              className={cx(
                "flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-medium transition",
                selectedCategory === "rc"
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
              )}
            >
              <FileText size={14} />
              Reading Comp ({categoryCounts.rc})
            </button>
            <button
              onClick={() => setSelectedCategory("strategy")}
              className={cx(
                "flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-medium transition",
                selectedCategory === "strategy"
                  ? "bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-900"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50"
              )}
            >
              <Clock size={14} />
              Strategy ({categoryCounts.strategy})
            </button>
            <button
              onClick={() => setSelectedCategory("general")}
              className={cx(
                "flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-medium transition",
                selectedCategory === "general"
                  ? "bg-green-600 text-white dark:bg-green-500"
                  : "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
              )}
            >
              <GraduationCap size={14} />
              General ({categoryCounts.general})
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredVideos.map((video, index) => {
            const categoryInfo = getCategoryInfo(video.category);
            return (
              <a
                key={index}
                href={getVideoUrl(video.videoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-sm border-2 border-stone-200 bg-white overflow-hidden transition hover:border-stone-300 hover:shadow-md dark:border-stone-700 dark:bg-stone-900 dark:hover:border-stone-600"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-stone-200 dark:bg-stone-800">
                  <Image
                    src={getThumbnailUrl(video.videoId)}
                    alt={video.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a365d]/90 transition group-hover:bg-[#1a365d] group-hover:scale-110 dark:bg-amber-500/90 dark:group-hover:bg-amber-500">
                      <Play size={24} className="ml-1 text-white dark:text-stone-900" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`flex items-center gap-1 rounded-sm px-2 py-0.5 text-xs font-semibold ${categoryInfo.color}`}>
                      {categoryInfo.icon}
                      {categoryInfo.label}
                    </span>
                  </div>

                  <h3 className="font-semibold text-stone-900 group-hover:text-[#1a365d] dark:text-stone-100 dark:group-hover:text-amber-400 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                    {video.channelUrl ? (
                      <span
                        className="hover:text-[#1a365d] dark:hover:text-amber-400 transition"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(video.channelUrl, '_blank');
                        }}
                      >
                        {video.channel}
                      </span>
                    ) : (
                      <span>{video.channel}</span>
                    )}
                    <span className="flex items-center gap-1 text-[#1a365d] dark:text-amber-400">
                      Watch <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-8 rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="mb-4 font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Recommended Channels & Resources
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.youtube.com/@7Sage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-sm border border-stone-200 p-3 transition hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800"
            >
              <div>
                <span className="font-medium text-stone-700 dark:text-stone-300">7Sage LSAT</span>
                <p className="text-xs text-stone-500">Comprehensive LSAT strategy and question walkthroughs</p>
              </div>
              <ExternalLink size={16} className="text-stone-400 flex-shrink-0" />
            </a>
            <a
              href="https://www.youtube.com/@LSATLab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-sm border border-stone-200 p-3 transition hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800"
            >
              <div>
                <span className="font-medium text-stone-700 dark:text-stone-300">LSAT Lab</span>
                <p className="text-xs text-stone-500">High scorer strategies and detailed breakdowns</p>
              </div>
              <ExternalLink size={16} className="text-stone-400 flex-shrink-0" />
            </a>
            <a
              href="https://www.youtube.com/@PowerScore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-sm border border-stone-200 p-3 transition hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800"
            >
              <div>
                <span className="font-medium text-stone-700 dark:text-stone-300">PowerScore</span>
                <p className="text-xs text-stone-500">LSAT Bible authors with expert explanations</p>
              </div>
              <ExternalLink size={16} className="text-stone-400 flex-shrink-0" />
            </a>
            <a
              href="https://www.khanacademy.org/prep/lsat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-sm border border-stone-200 p-3 transition hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800"
            >
              <div>
                <span className="font-medium text-stone-700 dark:text-stone-300">Khan Academy LSAT</span>
                <p className="text-xs text-stone-500">Free official LSAC partnership prep course</p>
              </div>
              <ExternalLink size={16} className="text-stone-400 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-xs text-stone-500 dark:text-stone-500">
          <Video className="inline mr-1" size={12} />
          All videos are hosted on YouTube and belong to their respective creators.
          We are not affiliated with these channels.
        </div>
      </main>
    </div>
  );
}
