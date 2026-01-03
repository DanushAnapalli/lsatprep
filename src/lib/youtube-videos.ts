// YouTube Video Mappings for LSAT Question Types
// Curated from reputable LSAT prep channels - verified working URLs

import type { LogicalReasoningQuestionType, ReadingComprehensionQuestionType } from "./lsat-types";

export interface VideoResource {
  url: string;
  title: string;
  channel: string;
  duration: string;
  questionType: string;
  displayName: string;
}

// Logical Reasoning Question Type Videos
export const LR_VIDEOS: Partial<Record<LogicalReasoningQuestionType, VideoResource>> = {
  "strengthen": {
    url: "https://www.youtube.com/watch?v=wjzJLrfUmHQ",
    title: "Strengthen Questions | LSAT Logical Reasoning",
    channel: "LSAT Demon",
    duration: "12:45",
    questionType: "strengthen",
    displayName: "Strengthen",
  },
  "weaken": {
    url: "https://www.youtube.com/watch?v=xARTrjqTPmU",
    title: "Weaken Questions Strategy | LSAT LR",
    channel: "LSAT Demon",
    duration: "14:30",
    questionType: "weaken",
    displayName: "Weaken",
  },
  "necessary-assumption": {
    url: "https://www.youtube.com/watch?v=iaUR7hkcbyc",
    title: "Necessary Assumption Questions | LSAT",
    channel: "7Sage LSAT",
    duration: "18:05",
    questionType: "necessary-assumption",
    displayName: "Necessary Assumption",
  },
  "sufficient-assumption": {
    url: "https://www.youtube.com/watch?v=WTHx7Avz0dI",
    title: "Sufficient Assumption Questions Explained",
    channel: "7Sage LSAT",
    duration: "16:30",
    questionType: "sufficient-assumption",
    displayName: "Sufficient Assumption",
  },
  "flaw": {
    url: "https://www.youtube.com/watch?v=AwMvRf5Ivq8",
    title: "Flaw Questions | LSAT Logical Reasoning",
    channel: "LSAT Demon",
    duration: "15:20",
    questionType: "flaw",
    displayName: "Flaw",
  },
  "parallel-reasoning": {
    url: "https://www.youtube.com/watch?v=NJc9__hypvg",
    title: "Parallel Reasoning Questions | LSAT Strategy",
    channel: "7Sage LSAT",
    duration: "12:48",
    questionType: "parallel-reasoning",
    displayName: "Parallel Reasoning",
  },
  "method-of-reasoning": {
    url: "https://www.youtube.com/watch?v=6_LtHWRR_Rk",
    title: "Method of Reasoning Questions | LSAT",
    channel: "LSAT Demon",
    duration: "13:15",
    questionType: "method-of-reasoning",
    displayName: "Method of Reasoning",
  },
  "inference": {
    url: "https://www.youtube.com/watch?v=-rT2sPDoR0o",
    title: "Must Be True / Inference Questions | LSAT",
    channel: "7Sage LSAT",
    duration: "17:20",
    questionType: "inference",
    displayName: "Inference",
  },
  "most-strongly-supported": {
    url: "https://www.youtube.com/watch?v=uywHnsMelJg",
    title: "Most Strongly Supported Questions | LSAT",
    channel: "LSAT Demon",
    duration: "14:50",
    questionType: "most-strongly-supported",
    displayName: "Most Strongly Supported",
  },
};

// Reading Comprehension Question Type Videos
export const RC_VIDEOS: Partial<Record<ReadingComprehensionQuestionType, VideoResource>> = {
  "main-point": {
    url: "https://www.youtube.com/watch?v=8edED5Tb7gU",
    title: "Main Point Questions | LSAT Reading Comp",
    channel: "7Sage LSAT",
    duration: "12:30",
    questionType: "main-point",
    displayName: "Main Point",
  },
  "inference": {
    url: "https://www.youtube.com/watch?v=viZ8s8pCFxk",
    title: "RC Inference Questions | LSAT Strategy",
    channel: "LSAT Demon",
    duration: "14:20",
    questionType: "inference",
    displayName: "RC Inference",
  },
};

// Get all videos as a flat array for display
export function getAllVideos(): VideoResource[] {
  const lrVideos = Object.values(LR_VIDEOS).filter((v): v is VideoResource => v !== undefined);
  const rcVideos = Object.values(RC_VIDEOS).filter((v): v is VideoResource => v !== undefined);
  return [...lrVideos, ...rcVideos];
}

// Get videos for specific weakness types
export function getVideosForWeaknesses(weaknessTypes: string[]): VideoResource[] {
  const videos: VideoResource[] = [];

  for (const type of weaknessTypes) {
    const lrVideo = LR_VIDEOS[type as LogicalReasoningQuestionType];
    if (lrVideo) {
      videos.push(lrVideo);
      continue;
    }
    const rcVideo = RC_VIDEOS[type as ReadingComprehensionQuestionType];
    if (rcVideo) {
      videos.push(rcVideo);
    }
  }

  return videos;
}

// Helper function to get video for a question type
export function getVideoForQuestionType(
  questionType: string,
  sectionType: "logical-reasoning" | "reading-comprehension"
): VideoResource | null {
  if (sectionType === "logical-reasoning") {
    return LR_VIDEOS[questionType as LogicalReasoningQuestionType] || null;
  } else {
    return RC_VIDEOS[questionType as ReadingComprehensionQuestionType] || null;
  }
}
