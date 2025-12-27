"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Moon,
  Sun,
  Scale,
  LibraryBig,
  FileText,
  Timer,
  LineChart,
  ShieldCheck,
  Sparkles,
  Gavel,
  BookOpen,
  ScrollText,
  Building2,
  Award,
  Bookmark,
  X,
  LogIn,
  LogOut,
  Mail,
  Lock,
  User,
  Loader2,
} from "lucide-react";
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  onAuthChange,
  User as FirebaseUser,
} from "@/lib/firebase";
import { useTheme } from "@/components/ThemeProvider";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");


// Courthouse columns SVG component
function CourthouseColumns({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left column */}
      <rect x="20" y="40" width="30" height="240" fill="currentColor" opacity="0.1" />
      <rect x="20" y="40" width="30" height="20" fill="currentColor" opacity="0.15" />
      <rect x="20" y="260" width="30" height="20" fill="currentColor" opacity="0.15" />
      {/* Column fluting */}
      <rect x="25" y="60" width="4" height="200" fill="currentColor" opacity="0.05" />
      <rect x="33" y="60" width="4" height="200" fill="currentColor" opacity="0.05" />
      <rect x="41" y="60" width="4" height="200" fill="currentColor" opacity="0.05" />

      {/* Right column */}
      <rect x="150" y="40" width="30" height="240" fill="currentColor" opacity="0.1" />
      <rect x="150" y="40" width="30" height="20" fill="currentColor" opacity="0.15" />
      <rect x="150" y="260" width="30" height="20" fill="currentColor" opacity="0.15" />
      {/* Column fluting */}
      <rect x="155" y="60" width="4" height="200" fill="currentColor" opacity="0.05" />
      <rect x="163" y="60" width="4" height="200" fill="currentColor" opacity="0.05" />
      <rect x="171" y="60" width="4" height="200" fill="currentColor" opacity="0.05" />

      {/* Pediment (triangle top) */}
      <polygon points="100,0 10,40 190,40" fill="currentColor" opacity="0.12" />
      <rect x="10" y="35" width="180" height="8" fill="currentColor" opacity="0.15" />

      {/* Base */}
      <rect x="10" y="280" width="180" height="20" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

// Legal seal component
function LegalSeal({ className }: { className?: string }) {
  return (
    <div className={cx("relative", className)}>
      <div className="absolute inset-0 rounded-full border-4 border-dashed border-current opacity-30" />
      <div className="absolute inset-2 rounded-full border-2 border-current opacity-40" />
      <div className="absolute inset-4 flex items-center justify-center rounded-full bg-current opacity-10">
        <Scale className="h-6 w-6 text-current opacity-60" />
      </div>
    </div>
  );
}

// Sign In Modal Component
function SignInModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
      onSuccess();
      onClose();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Authentication failed";
      // Clean up Firebase error messages
      if (errorMessage.includes("auth/invalid-credential")) {
        setError("Invalid email or password");
      } else if (errorMessage.includes("auth/email-already-in-use")) {
        setError("An account with this email already exists");
      } else if (errorMessage.includes("auth/weak-password")) {
        setError("Password should be at least 6 characters");
      } else if (errorMessage.includes("auth/invalid-email")) {
        setError("Please enter a valid email address");
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithGoogle();
      onSuccess();
      onClose();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Google sign-in failed";
      if (errorMessage.includes("auth/popup-closed-by-user")) {
        setError(null); // User closed popup, not an error
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={cx(
          "relative z-10 w-full max-w-md rounded-sm border-4 p-8",
          "border-[#1a365d] bg-white shadow-2xl",
          "dark:border-amber-500 dark:bg-stone-900"
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800 dark:hover:text-stone-300"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
            <Scale size={28} className="text-white dark:text-stone-900" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {isSignUp
              ? "Join LSATprep and start your journey"
              : "Sign in to continue your preparation"}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-sm border-2 border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={cx(
                    "w-full rounded-sm border-2 py-3 pl-10 pr-4 text-sm transition",
                    "border-stone-200 bg-white placeholder:text-stone-400",
                    "focus:border-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20",
                    "dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100",
                    "dark:focus:border-amber-500 dark:focus:ring-amber-500/20"
                  )}
                  required={isSignUp}
                />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={cx(
                  "w-full rounded-sm border-2 py-3 pl-10 pr-4 text-sm transition",
                  "border-stone-200 bg-white placeholder:text-stone-400",
                  "focus:border-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20",
                  "dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100",
                  "dark:focus:border-amber-500 dark:focus:ring-amber-500/20"
                )}
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Password
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={cx(
                  "w-full rounded-sm border-2 py-3 pl-10 pr-4 text-sm transition",
                  "border-stone-200 bg-white placeholder:text-stone-400",
                  "focus:border-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20",
                  "dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100",
                  "dark:focus:border-amber-500 dark:focus:ring-amber-500/20"
                )}
                required
              />
            </div>
          </div>

          {!isSignUp && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-[#1a365d] hover:underline dark:text-amber-400"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={cx(
              "flex w-full items-center justify-center gap-2 rounded-sm border-2 py-3 text-sm font-bold uppercase tracking-wide transition",
              "border-[#1a365d] bg-[#1a365d] text-white hover:bg-[#153050]",
              "dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <LogIn size={18} />
                {isSignUp ? "Create Account" : "Sign In"}
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700" />
          <span className="text-xs text-stone-400">or</span>
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700" />
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className={cx(
            "flex w-full items-center justify-center gap-3 rounded-sm border-2 py-3 text-sm font-bold uppercase tracking-wide transition",
            "border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-400 hover:bg-white",
            "dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-700",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              opacity="0.8"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              opacity="0.6"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              opacity="0.4"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              opacity="0.7"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Toggle Sign Up / Sign In */}
        <p className="mt-6 text-center text-sm text-stone-600 dark:text-stone-400">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-semibold text-[#1a365d] hover:underline dark:text-amber-400"
          >
            {isSignUp ? "Sign In" : "Create one"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cx(
        "group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition",
        "border-stone-300 bg-stone-50 hover:bg-white",
        "dark:border-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800"
      )}
      aria-label="Toggle theme"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-600/15 text-amber-700 transition dark:bg-amber-500/20 dark:text-amber-400">
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </span>
      <span className="hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"} mode
      </span>
    </button>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-sm border-l-4 border-amber-600 bg-amber-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800",
        "dark:border-amber-500 dark:bg-amber-900/30 dark:text-amber-300"
      )}
    >
      <Sparkles size={14} />
      {children}
    </span>
  );
}

function PrimaryButton({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  const className = cx(
    "group inline-flex items-center justify-center gap-2 rounded-sm border-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition",
    "border-[#1a365d] bg-[#1a365d] text-white shadow-lg hover:bg-[#153050]",
    "dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400",
    "focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
        <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
      <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
    </button>
  );
}

function SecondaryButton({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  const className = cx(
    "inline-flex items-center justify-center rounded-sm border-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition",
    "border-stone-300 bg-transparent text-stone-700 hover:border-stone-400 hover:bg-stone-50",
    "dark:border-stone-600 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-800",
    "focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function ExhibitLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent dark:via-stone-700" />
      <span className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent dark:via-stone-700" />
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={cx(
        "group relative overflow-hidden rounded-sm border-2 p-6 transition",
        "border-stone-200 bg-stone-50/50 hover:border-amber-600/50 hover:bg-white",
        "dark:border-stone-700 dark:bg-stone-900/50 dark:hover:border-amber-500/50 dark:hover:bg-stone-800/50"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cx(
            "flex h-12 w-12 items-center justify-center rounded-sm border-2",
            "border-[#1a365d] bg-[#1a365d]/10 text-[#1a365d]",
            "dark:border-amber-500 dark:bg-amber-500/10 dark:text-amber-400"
          )}
        >
          <Icon size={22} />
        </div>
        <div className="flex-1">
          <div className="font-serif text-lg font-bold text-stone-800 dark:text-stone-100">
            {title}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, icon: Icon }: { value: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-sm border-2 px-4 py-4",
        "border-stone-200 bg-white",
        "dark:border-stone-700 dark:bg-stone-900"
      )}
    >
      <Icon size={40} className="absolute -right-2 -top-2 text-stone-200 dark:text-stone-800" />
      <div className="relative">
        <div className="font-serif text-2xl font-bold text-[#1a365d] dark:text-amber-400">{value}</div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-500">
          {label}
        </div>
      </div>
    </div>
  );
}

function LsatPreviewCard() {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-sm border-4",
        "border-[#1a365d] bg-stone-50 shadow-2xl",
        "dark:border-amber-500/50 dark:bg-stone-900"
      )}
    >
      {/* Legal document header pattern */}
      <div className="border-b-2 border-[#1a365d]/20 bg-[#1a365d] px-6 py-4 dark:border-amber-500/30 dark:bg-stone-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-sm border-2 border-white/30 bg-white/20 p-2">
              <Scale size={20} className="text-white" />
            </div>
            <div>
              <div className="font-serif text-lg font-bold tracking-wide text-white">
                LSAT Practice Dashboard
              </div>
              <div className="text-xs uppercase tracking-widest text-white/70">
                Your LSAT Journey
              </div>
            </div>
          </div>
          <div className="rounded-sm border border-amber-400/50 bg-amber-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
            Active
          </div>
        </div>
      </div>

      <div className="relative p-6">
        {/* Decorative seal watermark */}
        <div className="pointer-events-none absolute right-4 top-4 h-24 w-24 opacity-10">
          <LegalSeal className="h-full w-full text-[#1a365d] dark:text-amber-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div
            className={cx(
              "rounded-sm border-l-4 border-amber-600 bg-white p-4 shadow-sm",
              "dark:border-amber-500 dark:bg-stone-800"
            )}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              <ScrollText size={12} />
              Today&apos;s Practice
            </div>
            <div className="mt-2 font-serif text-lg font-bold text-stone-800 dark:text-stone-100">
              LR: Assumption Qs
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <Timer size={14} /> 35 min session
            </div>
          </div>

          <div
            className={cx(
              "rounded-sm border-l-4 border-green-600 bg-white p-4 shadow-sm",
              "dark:border-green-500 dark:bg-stone-800"
            )}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              <LineChart size={12} />
              Your Progress
            </div>
            <div className="mt-2 font-serif text-lg font-bold text-green-700 dark:text-green-400">
              +6 scaled pts
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <Award size={14} /> Last 14 sessions
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-sm border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 font-serif text-base font-bold text-stone-800 dark:text-stone-100">
                <Bookmark size={16} className="text-[#1a365d] dark:text-amber-500" />
                Argument Analysis
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Premise | Conclusion | Hidden Assumptions
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-sm border border-[#1a365d]/20 bg-[#1a365d]/10 p-2 dark:border-amber-500/30 dark:bg-amber-500/10">
                <FileText size={16} className="text-[#1a365d] dark:text-amber-400" />
              </div>
              <div className="rounded-sm border border-[#1a365d]/20 bg-[#1a365d]/10 p-2 dark:border-amber-500/30 dark:bg-amber-500/10">
                <LibraryBig size={16} className="text-[#1a365d] dark:text-amber-400" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              <span>Mastery Level</span>
              <span>75% Proficient</span>
            </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-sm bg-stone-200 dark:bg-stone-700">
              <div className="h-3 w-3/4 bg-gradient-to-r from-[#1a365d] to-amber-600 dark:from-amber-600 dark:to-amber-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LawThemeLSATLanding() {
  const router = useRouter();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Handle Get Started click - opens sign in modal or goes to dashboard if signed in
  const handleGetStarted = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      setIsSignInOpen(true);
    }
  };

  const features = useMemo(
    () => [
      {
        icon: Timer,
        title: "Timed Practice Sessions",
        desc: "Practice under real LSAT time pressure with our clean timer and section management.",
      },
      {
        icon: ShieldCheck,
        title: "Smart Explanations",
        desc: "Master argument structure, assumption gaps, and flaw patterns with clear, detailed explanations.",
      },
      {
        icon: LineChart,
        title: "Performance Analytics",
        desc: "Track your progress with detailed reports showing which question types need more work.",
      },
    ],
    []
  );

  const bullets = useMemo(
    () => [
      "Practice sets organized by question type (Flaw, Necessary Assumption, RC inference)",
      "Argument mapping with premise/conclusion identification",
      "Review mode: filter by error type, difficulty, or time spent",
      "Desktop-first layout for focused study sessions",
    ],
    []
  );

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 dark:bg-stone-950">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
            <Scale size={32} className="animate-pulse text-white dark:text-stone-900" />
          </div>
          <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      {/* Background with courthouse columns - light mode only */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden dark:hidden">
        {/* Faded color overlay - gives that subtle washed out effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/[0.03] via-transparent to-amber-600/[0.02]" />

        {/* Columns on left */}
        <CourthouseColumns className="absolute -left-8 top-1/2 h-[600px] -translate-y-1/2 text-[#1a365d] opacity-20" />

        {/* Columns on right */}
        <CourthouseColumns className="absolute -right-8 top-1/2 h-[600px] -translate-y-1/2 text-[#1a365d] opacity-20" />

        {/* Subtle paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmNWY1ZjQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZTdlNWU0Ii8+PC9zdmc+')] opacity-40" />

        {/* Vignette effect - fades edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(245,245,244,0.4)_70%,rgba(231,229,228,0.6)_100%)]" />

        {/* Top and bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-200/40 via-transparent to-stone-200/40" />
      </div>

      {/* Navbar */}
      <header className="relative border-b-2 border-[#1a365d]/10 bg-white/80 backdrop-blur-sm dark:border-amber-500/10 dark:bg-stone-900/80">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
              <Scale size={20} className="text-white dark:text-stone-900" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl font-bold tracking-wide text-[#1a365d] dark:text-amber-400">
                LSATprep
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-500 dark:text-stone-500">
                LSAT Prep Made Simple
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 md:flex">
            <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#how">
              How it works
            </a>
            <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {user ? (
              <Link
                href="/dashboard"
                className={cx(
                  "hidden items-center gap-2 rounded-sm border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition md:inline-flex",
                  "border-[#1a365d] bg-[#1a365d] text-white hover:bg-[#153050]",
                  "dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                )}
              >
                <ArrowRight size={14} />
                Dashboard
              </Link>
            ) : (
              <button
                onClick={() => setIsSignInOpen(true)}
                className={cx(
                  "hidden items-center gap-2 rounded-sm border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition md:inline-flex",
                  "border-[#1a365d] bg-[#1a365d] text-white hover:bg-[#153050]",
                  "dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                )}
              >
                <LogIn size={14} />
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSuccess={() => {}}
      />

      {/* Main content */}
      <div className="relative">
        <main className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-16">
          <div className="grid min-h-[70vh] items-center gap-16 lg:grid-cols-2">
            <div>
              <Badge>New: Practice Sets + Question Drills</Badge>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100"
              >
                Master the LSAT with{" "}
                <span className="text-[#1a365d] dark:text-amber-400">
                  focused practice
                </span>
                .
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400"
              >
                LSATprep offers curated practice sets organized by question type,
                teaching you to analyze arguments effectively—identify conclusions,
                challenge assumptions, and spot logical flaws.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <PrimaryButton onClick={handleGetStarted}>{user ? "Go to Dashboard" : "Get Started Free"}</PrimaryButton>
                <SecondaryButton href="#features">Learn More</SecondaryButton>
              </motion.div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <Stat value="LR + RC" label="Sections" icon={BookOpen} />
                <Stat value="Curated" label="Practice Sets" icon={FileText} />
                <Stat value="Detailed" label="Analytics" icon={Scale} />
              </div>

              <div className="mt-8 rounded-sm border-l-4 border-[#1a365d] bg-white p-4 shadow-sm dark:border-amber-500 dark:bg-stone-800">
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Key Features
                </div>
                <div className="space-y-3">
                  {bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 text-[#1a365d] dark:text-amber-400" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <LsatPreviewCard />
            </motion.div>
          </div>

          {/* Features */}
          <section id="features" className="mt-24">
            <ExhibitLabel label="Features" />

            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  Everything You Need to Succeed
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
                  Each feature has been carefully developed to build your reasoning skills
                  and prepare you for the LSAT.
                </p>
              </div>
              <div className="flex gap-3">
                <SecondaryButton>See Examples</SecondaryButton>
                <PrimaryButton onClick={handleGetStarted}>{user ? "Go to Dashboard" : "Start Practicing"}</PrimaryButton>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {features.map((f) => (
                <Feature
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  desc={f.desc}
                />
              ))}
            </div>
          </section>

          {/* How it works */}
          <section id="how" className="mt-24">
            <ExhibitLabel label="How It Works" />

            <div className="grid gap-8 md:grid-cols-2">
              <div
                className={cx(
                  "rounded-sm border-2 border-t-8 p-8",
                  "border-stone-200 border-t-[#1a365d] bg-white",
                  "dark:border-stone-700 dark:border-t-amber-500 dark:bg-stone-900"
                )}
              >
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#1a365d] dark:text-amber-400">
                  Simple Process
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  The LSATprep Method
                </h3>

                <div className="mt-6 space-y-6">
                  {[
                    {
                      n: "1",
                      t: "Choose Your Focus",
                      d: "Select your practice area: Flaw, Strengthen, Assumption, Must-Be-True, and more.",
                    },
                    {
                      n: "2",
                      t: "Practice & Learn",
                      d: "Work through questions and learn argument structure, assumptions, and common traps.",
                    },
                    {
                      n: "3",
                      t: "Review & Improve",
                      d: "Review with adaptive drills that focus on patterns you struggle with most.",
                    },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <div
                        className={cx(
                          "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border-2 font-serif text-lg font-bold",
                          "border-[#1a365d] text-[#1a365d]",
                          "dark:border-amber-500 dark:text-amber-400"
                        )}
                      >
                        {s.n}
                      </div>
                      <div>
                        <div className="font-serif text-base font-bold text-stone-800 dark:text-stone-200">
                          {s.t}
                        </div>
                        <div className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                          {s.d}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={cx(
                  "rounded-sm border-2 border-t-8 p-8",
                  "border-stone-200 border-t-amber-600 bg-white",
                  "dark:border-stone-700 dark:border-t-amber-500 dark:bg-stone-900"
                )}
              >
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                  Platform Features
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Built for Success
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  Our interface is designed for focused study: clean sections, clear typography,
                  and a review system that makes complex arguments feel structured and approachable.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Premise/Conclusion annotations",
                    "Error labels (trap, gap, misread)",
                    "Passage structure notes",
                    "Desktop-first layout",
                  ].map((x, i) => (
                    <div
                      key={x}
                      className={cx(
                        "flex items-center gap-3 rounded-sm border-l-4 bg-stone-50 px-4 py-3",
                        "border-[#1a365d] dark:border-amber-500 dark:bg-stone-800"
                      )}
                    >
                      <span className="font-mono text-xs font-bold text-stone-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="text-sm font-medium text-stone-700 dark:text-stone-300">
                        {x}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="mt-24">
            <ExhibitLabel label="Pricing" />

            <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Choose Your Plan
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600 dark:text-stone-400">
              Start free, upgrade when you need more features.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Free */}
              <div
                className={cx(
                  "rounded-sm border-2 p-6",
                  "border-stone-200 bg-white",
                  "dark:border-stone-700 dark:bg-stone-900"
                )}
              >
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500">Free</div>
                <div className="mt-2 font-serif text-4xl font-bold text-stone-900 dark:text-stone-100">$0</div>
                <div className="mt-1 text-sm text-stone-500">Free forever</div>
                <div className="mt-6 space-y-3 text-sm text-stone-600 dark:text-stone-400">
                  {["1 LR practice set", "1 RC practice set", "Basic review", "Limited analytics"].map(
                    (x, i) => (
                      <div key={x} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-stone-400" />
                        <span>{x}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-6">
                  <SecondaryButton onClick={handleGetStarted}>{user ? "Dashboard" : "Get Started"}</SecondaryButton>
                </div>
              </div>

              {/* Pro */}
              <div
                className={cx(
                  "relative rounded-sm border-4 p-6",
                  "border-[#1a365d] bg-white shadow-xl",
                  "dark:border-amber-500 dark:bg-stone-900"
                )}
              >
                <div className="absolute -top-4 right-6 rounded-sm bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-stone-900">
                  Popular
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#1a365d] dark:text-amber-400">Pro</div>
                <div className="mt-2 font-serif text-4xl font-bold text-stone-900 dark:text-stone-100">$15</div>
                <div className="mt-1 text-sm text-stone-500">per month</div>
                <div className="mt-6 space-y-3 text-sm text-stone-600 dark:text-stone-400">
                  {[
                    "Unlimited practice sets",
                    "Argument mapping",
                    "Adaptive drills",
                    "Full analytics",
                  ].map((x, i) => (
                    <div key={x} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-[#1a365d] dark:text-amber-400" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <PrimaryButton onClick={handleGetStarted}>{user ? "Dashboard" : "Get Pro"}</PrimaryButton>
                </div>
              </div>

              {/* Enterprise */}
              <div
                className={cx(
                  "rounded-sm border-2 p-6",
                  "border-stone-200 bg-white",
                  "dark:border-stone-700 dark:bg-stone-900"
                )}
              >
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500">Team</div>
                <div className="mt-2 font-serif text-4xl font-bold text-stone-900 dark:text-stone-100">Custom</div>
                <div className="mt-1 text-sm text-stone-500">For institutions</div>
                <div className="mt-6 space-y-3 text-sm text-stone-600 dark:text-stone-400">
                  {[
                    "Student analytics",
                    "Custom assignments",
                    "Admin controls",
                    "Priority support",
                  ].map((x, i) => (
                    <div key={x} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-stone-400" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <SecondaryButton>Contact Us</SecondaryButton>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-24">
            <ExhibitLabel label="FAQ" />

            <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Common Questions
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "Is this aligned with current LSAT format?",
                  a: "Yes! Our materials are designed around current Logical Reasoning and Reading Comprehension sections, with writing support and comprehensive review tools.",
                },
                {
                  q: "Pattern recognition or memorization?",
                  a: "Pattern recognition. You'll learn the underlying structure of arguments, what each question type demands, and how common traps are constructed.",
                },
                {
                  q: "Works on large displays?",
                  a: "Yes. The interface is designed desktop-first with a 16:9-friendly canvas—perfect for focused study sessions.",
                },
                {
                  q: "Can I create custom drills?",
                  a: "Yes! Drill by question family, difficulty level, or time allocation.",
                },
              ].map((item, i) => (
                <div
                  key={item.q}
                  className={cx(
                    "rounded-sm border-2 border-l-8 p-6",
                    "border-stone-200 border-l-[#1a365d] bg-white",
                    "dark:border-stone-700 dark:border-l-amber-500 dark:bg-stone-900"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-lg font-bold text-[#1a365d] dark:text-amber-400">
                      Q{i + 1}.
                    </span>
                    <div>
                      <div className="font-serif text-base font-bold text-stone-800 dark:text-stone-200">
                        {item.q}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-24">
            <div
              className={cx(
                "relative overflow-hidden rounded-sm border-4 p-10",
                "border-[#1a365d] bg-[#1a365d]",
                "dark:border-amber-500 dark:bg-stone-900"
              )}
            >
              {/* Decorative elements - hidden in dark mode */}
              <CourthouseColumns className="pointer-events-none absolute -right-20 top-1/2 h-80 -translate-y-1/2 text-white opacity-10 dark:hidden" />

              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                    <Sparkles size={14} />
                    Ready to Start?
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white dark:text-stone-100">
                    Begin Your LSAT Journey Today
                  </h3>
                  <p className="mt-3 max-w-xl text-base text-stone-300 dark:text-stone-400">
                    Join thousands of students improving their LSAT scores with LSATprep.
                    Start practicing for free today.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleGetStarted}
                    className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-amber-500 bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-stone-900 transition hover:bg-amber-400"
                  >
                    {user ? "Go to Dashboard" : "Get Started Free"}
                    <ArrowRight size={16} />
                  </button>
                  <a href="#pricing" className="inline-flex items-center justify-center rounded-sm border-2 border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/50 hover:bg-white/10">
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-24 border-t-2 border-stone-200 pt-10 dark:border-stone-800">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="flex items-center gap-4">
                <div className="rounded-sm border-2 border-[#1a365d] bg-[#1a365d] p-2 dark:border-amber-500 dark:bg-amber-500">
                  <Scale size={18} className="text-white dark:text-stone-900" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-[#1a365d] dark:text-amber-400">
                    LSATprep
                  </div>
                  <div className="text-xs text-stone-500">
                    © {new Date().getFullYear()} LSATprep. All rights reserved.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-wider text-stone-500">
                <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#features">
                  Features
                </a>
                <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#how">
                  How it works
                </a>
                <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#pricing">
                  Pricing
                </a>
                <a className="transition hover:text-[#1a365d] dark:hover:text-amber-400" href="#faq">
                  FAQ
                </a>
              </div>

              <div className="font-serif text-sm italic text-stone-500">
                Master the LSAT.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
