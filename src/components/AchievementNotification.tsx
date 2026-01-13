"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Star,
  Flame,
  Target,
  BookOpen,
  Crown,
  Zap,
  Brain,
  BookText,
  Layers,
  Moon,
  Sunrise,
  PartyPopper,
  TrendingUp,
  Award,
  Gem,
  ArrowUpRight,
  Calendar,
  CalendarCheck,
  CalendarHeart,
  Crosshair,
  Footprints,
  Sword,
  X,
} from "lucide-react";
import { Achievement, ACHIEVEMENTS } from "@/lib/achievements";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Star,
  Flame,
  Target,
  BookOpen,
  Crown,
  Zap,
  Brain,
  BookText,
  Layers,
  Moon,
  Sunrise,
  PartyPopper,
  TrendingUp,
  Award,
  Gem,
  ArrowUpRight,
  Calendar,
  CalendarCheck,
  CalendarHeart,
  Crosshair,
  Footprints,
  Sword,
};

interface AchievementNotificationProps {
  achievementIds: string[];
  onDismiss: () => void;
  autoDismissDelay?: number;
}

export default function AchievementNotification({
  achievementIds,
  onDismiss,
  autoDismissDelay = 5000,
}: AchievementNotificationProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasRendered, setHasRendered] = useState(false);

  console.log("[AchievementNotification] Rendering with achievementIds:", achievementIds);
  console.log("[AchievementNotification] Current state - isVisible:", isVisible, "currentIndex:", currentIndex, "hasRendered:", hasRendered);

  const achievements = achievementIds
    .map((id) => ACHIEVEMENTS.find((a) => a.id === id))
    .filter((a): a is Achievement => a !== undefined);

  console.log("[AchievementNotification] Found achievements:", achievements.map(a => a.id));

  const currentAchievement = achievements[currentIndex];
  console.log("[AchievementNotification] currentAchievement:", currentAchievement?.id || "undefined");

  // Mark component as rendered on mount
  useEffect(() => {
    console.log("[AchievementNotification] Mount effect - setting hasRendered to true");
    setHasRendered(true);
  }, []);

  useEffect(() => {
    console.log("[AchievementNotification] Timer useEffect triggered - currentAchievement:", currentAchievement?.id);
    if (!currentAchievement) {
      console.log("[AchievementNotification] No currentAchievement, calling onDismiss");
      onDismiss();
      return;
    }

    console.log("[AchievementNotification] Setting auto-dismiss timer for", autoDismissDelay, "ms");
    const timer = setTimeout(() => {
      console.log("[AchievementNotification] Timer fired!");
      if (currentIndex < achievements.length - 1) {
        console.log("[AchievementNotification] Moving to next achievement");
        setCurrentIndex((prev) => prev + 1);
      } else {
        console.log("[AchievementNotification] Last achievement, setting isVisible to false");
        setIsVisible(false);
        setTimeout(() => {
          console.log("[AchievementNotification] Calling onDismiss after exit animation");
          onDismiss();
        }, 300);
      }
    }, autoDismissDelay);

    return () => {
      console.log("[AchievementNotification] Cleanup - clearing timer");
      clearTimeout(timer);
    };
  }, [currentIndex, achievements.length, autoDismissDelay, onDismiss, currentAchievement]);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/achievements");
    }, 300);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsVisible(false);
      setTimeout(onDismiss, 300);
    }
  };

  if (!currentAchievement) {
    console.log("[AchievementNotification] Returning null - no currentAchievement");
    return null;
  }

  console.log("[AchievementNotification] About to render notification for:", currentAchievement.id, "isVisible:", isVisible);

  const IconComponent = iconMap[currentAchievement.icon] || Trophy;

  const categoryColors: Record<string, { bg: string; border: string; icon: string; text: string }> = {
    practice: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      icon: "text-blue-400",
      text: "text-blue-300",
    },
    score: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      icon: "text-yellow-400",
      text: "text-yellow-300",
    },
    streak: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      icon: "text-orange-400",
      text: "text-orange-300",
    },
    mastery: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      icon: "text-purple-400",
      text: "text-purple-300",
    },
    special: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      icon: "text-emerald-400",
      text: "text-emerald-300",
    },
  };

  const colors = categoryColors[currentAchievement.category] || categoryColors.practice;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={`relative ${colors.bg} ${colors.border} border rounded-xl p-4 backdrop-blur-sm shadow-2xl max-w-xs`}
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Achievement unlocked header */}
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 10 }}
              >
                <Trophy className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                Achievement Unlocked!
              </span>
            </div>

            {/* Achievement content */}
            <div className="flex items-start gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", damping: 12 }}
                className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}
              >
                <IconComponent className={`w-8 h-8 ${colors.icon}`} />
              </motion.div>

              <div className="flex-1 min-w-0">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white font-bold text-lg leading-tight"
                >
                  {currentAchievement.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-sm mt-1"
                >
                  {currentAchievement.description}
                </motion.p>
              </div>
            </div>

            {/* Click to view hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-3 pt-3 border-t border-gray-700/50"
            >
              <p className="text-gray-400 text-xs text-center">
                Click to view all achievements
                {achievements.length > 1 && (
                  <span className="ml-2 text-gray-500">
                    ({currentIndex + 1}/{achievements.length})
                  </span>
                )}
              </p>
            </motion.div>

            {/* Animated celebration particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: "50%",
                    y: "50%",
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className={`absolute w-2 h-2 rounded-full ${
                    i % 3 === 0
                      ? "bg-yellow-400"
                      : i % 3 === 1
                      ? "bg-purple-400"
                      : "bg-blue-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
