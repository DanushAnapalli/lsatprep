"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Calendar,
  Award,
  BarChart3,
  RotateCcw,
  LogOut,
  Moon,
  Sun,
  Lock,
  Crown,
  Pencil,
  Check,
  User,
  CreditCard,
  ChevronDown,
  Settings,
  X,
} from "lucide-react";
import {
  loadUserProgress,
  UserProgress,
  CompletedTest,
  getPerformanceByQuestionType,
  getPerformanceBySectionType,
  getWrongAnswerQuestionIds,
  getWeakTopics,
  setCurrentUserId,
} from "@/lib/user-progress";
import GoalTracker from "@/components/GoalTracker";
import DailyDrills from "@/components/DailyDrills";
import { logicalReasoningQuestions, readingComprehensionQuestions } from "@/lib/sample-questions";
import { LR_TYPE_DESCRIPTIONS, RC_TYPE_DESCRIPTIONS } from "@/lib/lsat-types";
import { onAuthChange, logOut, User as FirebaseUser } from "@/lib/firebase";
import { useTheme } from "@/components/ThemeProvider";
import { getUserTier, getTierDisplayInfo, canAccessFeature, SubscriptionTier, getTrialInfo, getSubscriptionInfo, saveSubscriptionInfo } from "@/lib/subscription";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================
// USERNAME INPUT COMPONENT
// ============================================

const PLACEHOLDER_TEXTS = [
  "Future Lawyer",
  "LSAT Champion",
  "Legal Eagle",
  "Top Scorer",
  "Law Student",
];

const USERNAME_STORAGE_KEY = "lsatprep-username";

function UsernameInput({ userId }: { userId: string }) {
  const [username, setUsername] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load saved username on mount
  useEffect(() => {
    const savedUsername = localStorage.getItem(`${USERNAME_STORAGE_KEY}-${userId}`);
    if (savedUsername) {
      setUsername(savedUsername);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [userId]);

  // Typewriter effect for placeholder
  useEffect(() => {
    if (!isEditing || inputValue.length > 0) return;

    const currentText = PLACEHOLDER_TEXTS[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setPlaceholderText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setPlaceholderText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % PLACEHOLDER_TEXTS.length);
          setIsTyping(true);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [isEditing, inputValue, isTyping, charIndex, currentTextIndex]);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      setUsername(trimmedValue);
      localStorage.setItem(`${USERNAME_STORAGE_KEY}-${userId}`, trimmedValue);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleEdit = () => {
    setInputValue(username);
    setIsEditing(true);
    setCharIndex(0);
    setPlaceholderText("");
  };

  if (!isEditing && username) {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="text-amber-600 dark:text-amber-400 font-semibold">{username}</span>
        <button
          onClick={handleEdit}
          className="p-1 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          aria-label="Edit username"
        >
          <Pencil size={14} className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300" />
        </button>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1">
      <span className="relative inline-block min-w-[120px]">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            if (inputValue.trim()) {
              handleSubmit();
            }
          }}
          className="bg-transparent border-none outline-none text-amber-600 dark:text-amber-400 font-semibold w-full caret-amber-500"
          style={{ minWidth: "120px" }}
        />
        {inputValue.length === 0 && (
          <span className="absolute left-0 top-0 pointer-events-none text-stone-400 dark:text-stone-500 font-semibold">
            {placeholderText}
            <span className="animate-pulse">|</span>
          </span>
        )}
      </span>
      {inputValue.trim() && (
        <button
          onClick={handleSubmit}
          className="p-1 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors"
          aria-label="Save username"
        >
          <Check size={14} className="text-white" />
        </button>
      )}
    </span>
  );
}

// ============================================
// USER DROPDOWN COMPONENT
// ============================================

function UserDropdown({
  user,
  userTier,
  onSignOut,
}: {
  user: FirebaseUser;
  userTier: SubscriptionTier;
  onSignOut: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tierInfo = getTierDisplayInfo(userTier);
  const trialInfo = getTrialInfo();
  const subscriptionInfo = getSubscriptionInfo();

  // Check if user can cancel (Pro tier with active subscription)
  const canCancel = userTier === "pro" &&
    subscriptionInfo?.subscriptionId &&
    !subscriptionInfo?.cancelAtPeriodEnd;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowCancelConfirm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setShowCancelConfirm(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleCancelSubscription = async () => {
    if (!subscriptionInfo?.subscriptionId) return;

    setIsCancelling(true);

    try {
      const response = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriptionId: subscriptionInfo.subscriptionId }),
      });

      const data = await response.json();

      if (data.success) {
        saveSubscriptionInfo({
          cancelAtPeriodEnd: true,
          currentPeriodEnd: data.subscription.currentPeriodEnd,
        });
        setShowCancelConfirm(false);
        setIsOpen(false);
        // Reload to update UI
        window.location.reload();
      } else {
        alert(data.error || "Failed to cancel subscription");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-sm border-2 border-stone-200 bg-stone-50 px-3 py-2 transition hover:border-stone-300 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-stone-600 dark:hover:bg-stone-700"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="h-6 w-6 rounded-full"
          />
        ) : (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a365d] text-xs font-bold text-white dark:bg-amber-500 dark:text-stone-900">
            {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
          </div>
        )}
        <span className="hidden max-w-[100px] truncate text-sm font-medium text-stone-700 dark:text-stone-300 sm:block">
          {user.displayName || user.email?.split("@")[0]}
        </span>
        <ChevronDown
          size={16}
          className={cx(
            "text-stone-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-sm border-2 border-stone-200 bg-white shadow-lg dark:border-stone-700 dark:bg-stone-800">
          {/* User Info Header */}
          <div className="border-b border-stone-200 p-4 dark:border-stone-700">
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a365d] text-lg font-bold text-white dark:bg-amber-500 dark:text-stone-900">
                  {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1 overflow-hidden">
                <div className="truncate font-semibold text-stone-900 dark:text-stone-100">
                  {user.displayName || "User"}
                </div>
                <div className="truncate text-xs text-stone-500">{user.email}</div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className={cx("rounded-sm px-2 py-0.5 text-xs font-semibold", tierInfo.bgColor, tierInfo.color)}>
                {tierInfo.name}
              </span>
              {userTier === "pro" && trialInfo.isTrialing && (
                <span className="rounded-sm bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  {trialInfo.daysLeft}d left
                </span>
              )}
              {subscriptionInfo?.cancelAtPeriodEnd && (
                <span className="rounded-sm bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  Cancels soon
                </span>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-700"
            >
              <User size={16} className="text-stone-400" />
              Profile Settings
            </Link>
            <Link
              href="/subscription"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-700"
            >
              <CreditCard size={16} className="text-stone-400" />
              {userTier === "free" ? "Upgrade to Pro" : "Manage Subscription"}
              {userTier === "free" && (
                <span className="ml-auto rounded-sm bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  Upgrade
                </span>
              )}
            </Link>
          </div>

          {/* Cancel Subscription Section */}
          {canCancel && (
            <div className="border-t border-stone-200 p-2 dark:border-stone-700">
              {!showCancelConfirm ? (
                <button
                  type="button"
                  onClick={() => setShowCancelConfirm(true)}
                  className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm text-amber-600 transition hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20"
                >
                  <X size={16} />
                  Cancel Subscription
                </button>
              ) : (
                <div className="rounded-sm bg-red-50 p-3 dark:bg-red-900/20">
                  <p className="mb-3 text-xs text-red-700 dark:text-red-400">
                    Are you sure? You'll keep access until your billing period ends.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleCancelSubscription}
                      disabled={isCancelling}
                      className="flex-1 rounded-sm bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                    >
                      {isCancelling ? "Cancelling..." : "Yes, Cancel"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCancelConfirm(false)}
                      className="flex-1 rounded-sm bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:bg-stone-300 dark:bg-stone-700 dark:text-stone-300 dark:hover:bg-stone-600"
                    >
                      Keep Plan
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sign Out */}
          <div className="border-t border-stone-200 p-2 dark:border-stone-700">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onSignOut();
              }}
              className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// ANIMATION UTILITIES
// ============================================

interface PreviousStats {
  averageScore: number;
  highestScore: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  testsCompleted: number;
  studyTimeSeconds: number;
  timestamp: number;
}

function saveDashboardStats(stats: PreviousStats) {
  localStorage.setItem("lsatprep-dashboard-stats", JSON.stringify(stats));
}

function loadPreviousStats(): PreviousStats | null {
  try {
    const saved = localStorage.getItem("lsatprep-dashboard-stats");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

// Animated number counter hook
function useAnimatedNumber(
  targetValue: number,
  startValue: number,
  duration: number = 1500,
  delay: number = 0
): number {
  const [currentValue, setCurrentValue] = useState(startValue);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const value = startValue + (targetValue - startValue) * easeOut;
        setCurrentValue(value);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, startValue, duration, delay]);

  return currentValue;
}

// Animated progress bar component
function AnimatedProgressBar({
  percentage,
  previousPercentage = 0,
  color,
  delay = 0,
}: {
  percentage: number;
  previousPercentage?: number;
  color: string;
  delay?: number;
}) {
  const [width, setWidth] = useState(previousPercentage);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(percentage);
    }, delay + 100);
    return () => clearTimeout(timeout);
  }, [percentage, delay]);

  return (
    <div className="h-2 w-full rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
      <div
        className={cx("h-full rounded-full transition-all duration-1000 ease-out", color)}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

// Animated number display component
function AnimatedValue({
  value,
  previousValue = 0,
  duration = 1500,
  delay = 0,
  format = "number",
  suffix = "",
}: {
  value: number;
  previousValue?: number;
  duration?: number;
  delay?: number;
  format?: "number" | "time";
  suffix?: string;
}) {
  const animatedValue = useAnimatedNumber(value, previousValue, duration, delay);

  if (format === "time") {
    const seconds = Math.round(animatedValue);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins >= 60) {
      const hours = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      return <span>{hours}h {remainingMins}m</span>;
    }
    return <span>{mins}m {secs}s</span>;
  }

  return <span>{Math.round(animatedValue)}{suffix}</span>;
}

// ============================================
// COMPONENTS
// ============================================

function StatCard({
  icon: Icon,
  label,
  value,
  previousValue,
  subtext,
  trend,
  delay = 0,
  animateAs,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  previousValue?: number;
  subtext?: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
  animateAs?: "number" | "time";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const showIncrease = previousValue !== undefined && typeof value === "number" && value > previousValue;
  const increaseValue = typeof value === "number" ? value - (previousValue || 0) : 0;

  // Format the increase value for time display
  const formatIncrease = (val: number) => {
    if (animateAs === "time") {
      const mins = Math.floor(val / 60);
      const secs = val % 60;
      if (mins >= 60) {
        const hours = Math.floor(mins / 60);
        const remainingMins = mins % 60;
        return `${hours}h ${remainingMins}m`;
      }
      if (mins > 0) {
        return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
      }
      return `${secs}s`;
    }
    return val.toString();
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={cx(
        "rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900",
        "transform transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="rounded-sm bg-stone-100 p-2 dark:bg-stone-800">
          <Icon size={20} className="text-[#1a365d] dark:text-amber-400" />
        </div>
        {(trend || showIncrease) && (
          <div
            className={cx(
              "flex items-center gap-1 text-xs font-medium transition-all duration-500",
              (trend === "up" || showIncrease) && "text-green-600",
              trend === "down" && "text-red-600",
              trend === "neutral" && "text-stone-400",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{ transitionDelay: `${delay + 800}ms` }}
          >
            {(trend === "up" || showIncrease) && <TrendingUp size={14} />}
            {trend === "down" && <TrendingUp size={14} className="rotate-180" />}
            {showIncrease && (
              <span>+{formatIncrease(increaseValue)}</span>
            )}
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="text-3xl font-bold text-stone-900 dark:text-stone-100">
          {animateAs && typeof value === "number" ? (
            <AnimatedValue
              value={value}
              previousValue={previousValue || 0}
              delay={delay + 200}
              format={animateAs}
            />
          ) : (
            value
          )}
        </div>
        <div className="text-sm font-medium text-stone-600 dark:text-stone-400">{label}</div>
        {subtext && <div className="mt-1 text-xs text-stone-500">{subtext}</div>}
      </div>
    </div>
  );
}

function TestHistoryItem({ test, index = 0 }: { test: CompletedTest; index?: number }) {
  const timeFormatted = formatTime(test.timeUsed);
  const dateFormatted = new Date(test.completedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Link
      href={`/test-review/${test.id}`}
      className={cx(
        "flex items-center justify-between rounded-sm border-2 border-stone-200 bg-white p-4 transition-all duration-500 hover:border-[#1a365d] hover:shadow-md dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-500 cursor-pointer group",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-sm bg-[#1a365d]/10 p-3 dark:bg-amber-500/10 transition-colors group-hover:bg-[#1a365d]/20 dark:group-hover:bg-amber-500/20">
          <BookOpen size={20} className="text-[#1a365d] dark:text-amber-400" />
        </div>
        <div>
          <div className="font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#1a365d] dark:group-hover:text-amber-400 transition-colors">{test.testName}</div>
          <div className="flex items-center gap-3 text-sm text-stone-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {dateFormatted}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {timeFormatted}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <div className="text-2xl font-bold text-[#1a365d] dark:text-amber-400">{test.scaledScore}</div>
          <div className="text-xs text-stone-500">{test.percentile}th percentile</div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-stone-700 dark:text-stone-300">
            {test.correctAnswers}/{test.totalQuestions}
          </div>
          <div className="text-xs text-stone-500">correct</div>
        </div>
        <ChevronRight size={20} className="text-stone-400 group-hover:text-[#1a365d] dark:group-hover:text-amber-400 transition-colors" />
      </div>
    </Link>
  );
}

function QuestionTypePerformance({
  stats,
  sectionType,
  baseDelay = 0,
}: {
  stats: Record<string, { correct: number; total: number; percentage: number }>;
  sectionType: "lr" | "rc";
  baseDelay?: number;
}) {
  const descriptions = sectionType === "lr" ? LR_TYPE_DESCRIPTIONS : RC_TYPE_DESCRIPTIONS;
  const entries = Object.entries(stats).filter(([key]) => {
    if (sectionType === "lr") {
      return key in LR_TYPE_DESCRIPTIONS;
    }
    return key in RC_TYPE_DESCRIPTIONS;
  });

  if (entries.length === 0) {
    return (
      <div className="text-center text-stone-500 py-8">
        No data yet. Complete a test to see your performance.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {entries.map(([type, stat], index) => {
        const desc = descriptions[type as keyof typeof descriptions];
        const barColor =
          stat.percentage >= 80
            ? "bg-green-500"
            : stat.percentage >= 60
            ? "bg-amber-500"
            : "bg-red-500";

        return (
          <PerformanceBarItem
            key={type}
            name={desc?.name || type}
            correct={stat.correct}
            total={stat.total}
            percentage={stat.percentage}
            barColor={barColor}
            delay={baseDelay + index * 150}
          />
        );
      })}
    </div>
  );
}

function PerformanceBarItem({
  name,
  correct,
  total,
  percentage,
  barColor,
  delay = 0,
}: {
  name: string;
  correct: number;
  total: number;
  percentage: number;
  barColor: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={cx(
        "space-y-1 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-stone-700 dark:text-stone-300">
          {name}
        </span>
        <span className="text-stone-500">
          {correct}/{total}
        </span>
      </div>
      <AnimatedProgressBar
        percentage={percentage}
        color={barColor}
        delay={delay}
      />
    </div>
  );
}

function SectionSummaryCard({
  type,
  stat,
  delay = 0,
}: {
  type: string;
  stat: { correct: number; total: number; percentage: number };
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedPercentage = useAnimatedNumber(stat.percentage, 0, 1200, delay + 300);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={cx(
        "flex items-center justify-between rounded-sm border border-stone-200 p-4 dark:border-stone-700",
        "transition-all duration-500",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-sm bg-stone-100 p-2 dark:bg-stone-800">
          {type === "logical-reasoning" ? (
            <Brain size={20} className="text-[#1a365d] dark:text-amber-400" />
          ) : (
            <BookOpen size={20} className="text-[#1a365d] dark:text-amber-400" />
          )}
        </div>
        <div>
          <div className="font-semibold text-stone-900 dark:text-stone-100">
            {type === "logical-reasoning" ? "Logical Reasoning" : "Reading Comprehension"}
          </div>
          <div className="text-sm text-stone-500">
            {stat.correct}/{stat.total} questions
          </div>
        </div>
      </div>
      <div className="text-right">
        <div
          className={cx(
            "text-sm font-semibold tabular-nums",
            stat.percentage >= 80
              ? "text-green-600"
              : stat.percentage >= 60
              ? "text-amber-600"
              : "text-red-600"
          )}
        >
          {Math.round(animatedPercentage)}%
        </div>
      </div>
    </div>
  );
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins >= 60) {
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours}h ${remainingMins}m`;
  }
  return `${mins}m ${secs}s`;
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function DashboardPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [previousStats, setPreviousStats] = useState<PreviousStats | null>(null);
  const [userTier, setUserTier] = useState<SubscriptionTier>("free");

  // Listen to auth state and set current user ID for storage
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      // Set current user ID for user-specific localStorage
      setCurrentUserId(firebaseUser?.uid || null);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Get user's subscription tier (guests are treated as free tier)
  useEffect(() => {
    if (user) {
      const tier = getUserTier(user);
      setUserTier(tier);
    } else {
      setUserTier("free");
    }
  }, [user]);

  // Load progress and previous stats when user changes
  useEffect(() => {
    if (authLoading) return; // Wait for auth to be determined

    const userId = user?.uid;
    const loaded = loadUserProgress(userId);
    const prevStats = loadPreviousStats();

    setPreviousStats(prevStats);
    setProgress(loaded);
    setIsLoading(false);
  }, [user, authLoading]);

  // Only save initial stats for first-time users
  // Stats baseline is updated when STARTING a new test (in practice page)
  useEffect(() => {
    if (progress && !previousStats) {
      // First time user - save initial stats as baseline
      const totalStudyTime = progress.completedTests.reduce((acc, test) => acc + test.timeUsed, 0);
      const currentStats: PreviousStats = {
        averageScore: progress.averageScore,
        highestScore: progress.highestScore,
        totalQuestionsAnswered: progress.totalQuestionsAnswered,
        totalCorrect: progress.totalCorrect,
        testsCompleted: progress.completedTests.length,
        studyTimeSeconds: totalStudyTime,
        timestamp: Date.now(),
      };
      saveDashboardStats(currentStats);
    }
  }, [progress, previousStats]);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  if (authLoading || isLoading || !progress) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
              <Scale size={32} className="animate-pulse text-white dark:text-stone-900" />
            </div>
            <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">
              Loading dashboard...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Check if guest has exhausted free tests (1 LR + 1 RC allowed)
  const isGuest = !user;
  const guestCompletedLRTests = progress.completedTests.filter(
    (test) => test.sections.some((s) => s.type === "logical-reasoning")
  ).length;
  const guestCompletedRCTests = progress.completedTests.filter(
    (test) => test.sections.some((s) => s.type === "reading-comprehension")
  ).length;
  const guestExhaustedFreeTests = isGuest && guestCompletedLRTests >= 1 && guestCompletedRCTests >= 1;

  const wrongAnswerCount = getWrongAnswerQuestionIds(progress).length;
  const weakTopics = getWeakTopics(progress);
  const typeStats = getPerformanceByQuestionType(progress);
  const sectionStats = getPerformanceBySectionType(progress);
  const hasCompletedTests = progress.completedTests.length > 0;

  // Calculate total study time
  const totalStudyTime = progress.completedTests.reduce((acc, test) => acc + test.timeUsed, 0);

  // Calculate targeted practice question count
  const allQuestions = [...logicalReasoningQuestions, ...readingComprehensionQuestions];
  const weakQuestionTypes = weakTopics.map((t) => t.questionType);
  const targetedQuestionCount = allQuestions.filter(
    (q) => weakQuestionTypes.includes(q.type) && !progress.seenQuestionIds.includes(q.id)
  ).length;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
              <Scale size={20} className="text-white dark:text-stone-900" />
            </div>
            <span className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              LSATprep
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/test-select"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              Start Practice
              <ArrowRight size={16} />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-sm border-2 border-stone-200 bg-white p-2 text-stone-600 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Tier Badge - only show for signed in users */}
            {user && (() => {
              const tierInfo = getTierDisplayInfo(userTier);
              return (
                <div className={cx(
                  "rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide",
                  tierInfo.bgColor,
                  tierInfo.color
                )}>
                  {tierInfo.name}
                </div>
              );
            })()}

            {/* User Profile or Sign In Button */}
            {user ? (
              <UserDropdown user={user} userTier={userTier} onSignOut={handleSignOut} />
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a365d] px-4 py-2 text-sm font-semibold text-[#1a365d] transition hover:bg-[#1a365d] hover:text-white dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-500 dark:hover:text-stone-900"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div>
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                {user ? (
                  <>
                    Welcome back, <UsernameInput userId={user.uid} />!
                  </>
                ) : (
                  "Welcome to LSATprep!"
                )}
              </h1>
              <p className="mt-2 text-stone-600 dark:text-stone-400">
                {user
                  ? "Track your progress and identify areas for improvement. Keep practicing to improve your score!"
                  : "Try a free practice test to see how LSATprep can help you succeed."}
              </p>
            </div>

        {/* Guest Upgrade Banner - shows when guest has exhausted free tests */}
        {isGuest && guestExhaustedFreeTests && (
          <div className="mb-8 rounded-sm border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 p-6 dark:border-amber-500/50 dark:from-amber-900/20 dark:to-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-sm bg-amber-100 p-3 dark:bg-amber-500/20">
                  <Crown size={24} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-amber-900 dark:text-amber-100">
                    Free Trial Complete - Upgrade to Pro
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    You've completed your free section practice tests. Upgrade to Pro for unlimited access!
                  </p>
                </div>
              </div>
              <Link
                href="/subscription"
                className="inline-flex items-center gap-2 rounded-sm bg-amber-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Upgrade to Pro
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

        {/* Guest Welcome Banner - shows for new guests */}
        {isGuest && !guestExhaustedFreeTests && (
          <div className="mb-8 rounded-sm border-2 border-blue-400 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:border-blue-500/50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-sm bg-blue-100 p-3 dark:bg-blue-500/20">
                  <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-blue-900 dark:text-blue-100">
                    Try a Free Practice Test
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    No signup required! Take one full practice test to see how LSATprep works.
                  </p>
                </div>
              </div>
              <a
                href="/test-select?mode=full"
                className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Start Free Test
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

        {/* Free Tier Upgrade Banner - only for signed in free users */}
        {user && userTier === "free" && (
          <div className="mb-8 rounded-sm border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 p-6 dark:border-amber-500/50 dark:from-amber-900/20 dark:to-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-sm bg-amber-100 p-3 dark:bg-amber-500/20">
                  <Crown size={24} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-amber-900 dark:text-amber-100">
                    Upgrade to Pro for Unlimited Access
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Get unlimited practice tests, full analytics, argument mapping, and adaptive drills.
                  </p>
                </div>
              </div>
              <a
                href="/subscription"
                className="inline-flex items-center gap-2 rounded-sm bg-amber-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Upgrade to Pro
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Award}
            label="Highest Score"
            value={hasCompletedTests ? progress.highestScore : "--"}
            previousValue={previousStats?.highestScore}
            subtext={hasCompletedTests ? `avg: ${progress.averageScore}` : "Complete a test"}
            delay={0}
            animateAs={hasCompletedTests ? "number" : undefined}
          />
          <StatCard
            icon={Target}
            label="Questions Answered"
            value={progress.totalQuestionsAnswered}
            previousValue={previousStats?.totalQuestionsAnswered}
            subtext={`${progress.totalCorrect}/${progress.totalQuestionsAnswered} correct`}
            delay={100}
            animateAs="number"
          />
          <StatCard
            icon={BookOpen}
            label="Tests Completed"
            value={progress.completedTests.length}
            previousValue={previousStats?.testsCompleted}
            subtext={`${progress.improvementTestsTaken} improvement tests`}
            delay={200}
            animateAs="number"
          />
          <StatCard
            icon={Clock}
            label="Study Time"
            value={totalStudyTime}
            previousValue={previousStats?.studyTimeSeconds}
            subtext="total practice time"
            delay={300}
            animateAs="time"
          />
        </div>

        {/* Goal Progress Widget */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Your Goal
            </h2>
            <Link
              href="/goals"
              className="text-sm font-medium text-[#1a365d] hover:underline dark:text-amber-400"
            >
              View Details
            </Link>
          </div>
          <GoalTracker progress={progress} user={user} compact />
        </div>

        {/* Daily Drills Section */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Daily Drills
            </h2>
          </div>
          <DailyDrills progress={progress} userId={user?.uid} compact />
        </div>

        {/* Quick Actions */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="/test-select?mode=full"
            className="group flex cursor-pointer items-center justify-between rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-6 text-white transition hover:bg-[#2d4a7c] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            <div>
              <div className="text-lg font-bold">Start New Test</div>
              <div className="text-sm opacity-80">Full practice test</div>
            </div>
            <ArrowRight size={24} className="transition group-hover:translate-x-1" />
          </a>

          {/* Targeted Practice - NEW questions from weak topics */}
          {weakTopics.length > 0 && targetedQuestionCount > 0 ? (
            <a
              href="/test-select?type=targeted"
              className="group flex cursor-pointer items-center justify-between rounded-sm border-2 border-stone-300 bg-stone-100 p-6 transition-all hover:border-stone-500 hover:bg-stone-200 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-amber-500 dark:hover:bg-stone-700"
            >
              <div>
                <div className="flex items-center gap-2 text-lg font-bold text-stone-900 dark:text-stone-100">
                  <TrendingUp size={20} className="text-[#1a365d] dark:text-amber-400" />
                  Targeted Practice
                </div>
                <div className="text-sm text-stone-600 dark:text-stone-400">
                  Practice your weak areas
                </div>
              </div>
              <ChevronRight size={24} className="text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-stone-600 dark:group-hover:text-amber-400" />
            </a>
          ) : (
            <div className="flex items-center justify-between rounded-sm border-2 border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800">
              <div>
                <div className="flex items-center gap-2 text-lg font-bold text-stone-500">
                  <TrendingUp size={20} />
                  Targeted Practice
                </div>
                <div className="text-sm text-stone-400">Complete tests to find weak areas</div>
              </div>
            </div>
          )}

          {/* Review Missed Questions - retry exact questions you got wrong */}
          {wrongAnswerCount > 0 ? (
            <a
              href="/test-select?type=improvement"
              className="group flex cursor-pointer items-center justify-between rounded-sm border-2 border-amber-500 bg-amber-50 p-6 transition hover:bg-amber-100 dark:border-amber-500/50 dark:bg-amber-500/10 dark:hover:bg-amber-500/20"
            >
              <div>
                <div className="flex items-center gap-2 text-lg font-bold text-amber-700 dark:text-amber-400">
                  <RotateCcw size={20} />
                  Review Missed
                </div>
                <div className="text-sm text-amber-600 dark:text-amber-500">
                  {wrongAnswerCount} questions to retry
                </div>
              </div>
              <ChevronRight size={24} className="text-amber-600 transition group-hover:translate-x-1 dark:text-amber-400" />
            </a>
          ) : (
            <div className="flex items-center justify-between rounded-sm border-2 border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800">
              <div>
                <div className="flex items-center gap-2 text-lg font-bold text-stone-500">
                  <CheckCircle2 size={20} />
                  No Missed Questions
                </div>
                <div className="text-sm text-stone-400">Complete a test first</div>
              </div>
            </div>
          )}

          <a
            href="/test-select?mode=section"
            className="group flex cursor-pointer items-center justify-between rounded-sm border-2 border-stone-300 bg-stone-100 p-6 transition-all hover:border-stone-500 hover:bg-stone-200 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-amber-500 dark:hover:bg-stone-700"
          >
            <div>
              <div className="flex items-center gap-2 text-lg font-bold text-stone-900 dark:text-stone-100">
                <Brain size={20} className="text-[#1a365d] dark:text-amber-400" />
                Section Practice
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">Focus on LR or RC</div>
            </div>
            <ChevronRight size={24} className="text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-stone-600 dark:group-hover:text-amber-400" />
          </a>
        </div>


        {/* Test History */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Test History
            </h2>
            {progress.completedTests.length > 5 && (
              <button className="text-sm font-medium text-[#1a365d] hover:underline dark:text-amber-400">
                View All
              </button>
            )}
          </div>
          {progress.completedTests.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-sm border-2 border-dashed border-stone-300 bg-stone-50 py-12 dark:border-stone-700 dark:bg-stone-900">
              <BookOpen size={48} className="mb-4 text-stone-300 dark:text-stone-600" />
              <div className="text-lg font-semibold text-stone-500">No tests completed yet</div>
              <div className="mb-4 text-sm text-stone-400">
                Start a practice test to track your progress
              </div>
              <Link
                href="/test-select"
                className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900"
              >
                Start Practice Test
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {progress.completedTests
                .slice()
                .reverse()
                .slice(0, 5)
                .map((test, index) => (
                  <TestHistoryItem key={test.id} test={test} index={index} />
                ))}
            </div>
          )}
        </div>

        {/* Performance Breakdown */}
        {hasCompletedTests && (
          <>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Performance Breakdown
            </h2>
          </div>

          {/* Advanced Insights Banner */}
          <Link
            href="/analytics"
            className="group mb-6 block overflow-hidden rounded-sm border-2 border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-violet-50 transition-all duration-300 hover:border-purple-400 hover:shadow-xl dark:border-purple-600/40 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-violet-900/20 dark:hover:border-purple-500"
          >
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-lg bg-purple-400/30 blur-md" />
                  <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-indigo-500 to-violet-600 p-3 shadow-lg">
                    <BarChart3 size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-purple-900 dark:text-purple-100">
                      Advanced Insights
                    </span>
                    {userTier === "free" && (
                      <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-2 py-0.5 text-xs font-bold text-white shadow-sm">
                        <Crown size={10} />
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-purple-600 dark:text-purple-300">
                    Score projections, error patterns, fatigue analysis & more
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700 transition-all duration-300 group-hover:bg-purple-200 group-hover:gap-3 dark:bg-purple-800/50 dark:text-purple-300 dark:group-hover:bg-purple-700/50">
                <span className="text-sm font-semibold">Explore</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Section Performance Summary */}
          {Object.keys(sectionStats).length > 0 && (
          <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
            <h3 className="mb-4 font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Section Summary
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(sectionStats).map(([type, stat], index) => (
                <SectionSummaryCard
                  key={type}
                  type={type}
                  stat={stat}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
          )}
          </>
        )}

        {/* Improvement Suggestions Alert */}
        {(wrongAnswerCount > 0 || (weakTopics.length > 0 && targetedQuestionCount > 0)) && (
          <div className="mt-6 space-y-4">
            {/* Targeted Practice Alert */}
            {weakTopics.length > 0 && targetedQuestionCount > 0 && (
              <div className="rounded-sm border-2 border-stone-300 bg-stone-100 p-6 dark:border-stone-700 dark:bg-stone-800">
                <div className="flex items-start gap-4">
                  <TrendingUp size={24} className="text-[#1a365d] dark:text-amber-400" />
                  <div className="flex-1">
                    <div className="font-semibold text-stone-800 dark:text-stone-200">
                      {weakTopics.length} weak topic{weakTopics.length > 1 ? "s" : ""} identified
                    </div>
                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                      Practice your weak areas: {weakTopics.slice(0, 3).map(t => t.questionType.replace(/-/g, " ")).join(", ")}{weakTopics.length > 3 ? "..." : ""}. {targetedQuestionCount} fresh questions available.
                    </p>
                    <a
                      href="/test-select?type=targeted"
                      className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                    >
                      Start Targeted Practice
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Review Missed Questions Alert */}
            {wrongAnswerCount > 0 && (
              <div className="rounded-sm border-2 border-amber-300 bg-amber-50 p-6 dark:border-amber-500/50 dark:bg-amber-500/10">
                <div className="flex items-start gap-4">
                  <RotateCcw size={24} className="text-amber-600 dark:text-amber-400" />
                  <div className="flex-1">
                    <div className="font-semibold text-amber-800 dark:text-amber-300">
                      {wrongAnswerCount} missed question{wrongAnswerCount > 1 ? "s" : ""} to review
                    </div>
                    <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                      Retry the exact questions you got wrong. Answer them correctly to mark them as mastered.
                    </p>
                    <a
                      href="/test-select?type=improvement"
                      className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-sm bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
                    >
                      Review Missed Questions
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        </div>
      </main>
    </div>
  );
}
