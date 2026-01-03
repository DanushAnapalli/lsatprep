"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Scale, Lock, Eye, EyeOff, CheckCircle2, XCircle, ArrowLeft, Loader2 } from "lucide-react";
import { verifyResetCode, confirmReset } from "@/lib/firebase";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  const oobCode = searchParams.get("oobCode");
  const mode = searchParams.get("mode");

  // Verify the reset code on mount
  useEffect(() => {
    async function verifyCode() {
      if (!oobCode || mode !== "resetPassword") {
        setError("Invalid or expired password reset link.");
        setIsVerifying(false);
        return;
      }

      try {
        const userEmail = await verifyResetCode(oobCode);
        setEmail(userEmail);
        setIsVerifying(false);
      } catch (err) {
        console.error("Reset code verification failed:", err);
        setError("This password reset link has expired or already been used.");
        setIsVerifying(false);
      }
    }

    verifyCode();
  }, [oobCode, mode]);

  // Password validation
  const passwordRequirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
  ];

  const allRequirementsMet = passwordRequirements.every((req) => req.met);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!allRequirementsMet) {
      setError("Please meet all password requirements.");
      return;
    }

    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    if (!oobCode) {
      setError("Invalid reset code.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await confirmReset(oobCode, password);
      setSuccess(true);
    } catch (err: unknown) {
      console.error("Password reset failed:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to reset password";

      if (errorMessage.includes("expired") || errorMessage.includes("invalid")) {
        setError("This password reset link has expired. Please request a new one.");
      } else if (errorMessage.includes("weak-password")) {
        setError("Password is too weak. Please choose a stronger password.");
      } else {
        setError("Failed to reset password. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state while verifying code
  if (isVerifying) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
            <Scale size={32} className="animate-pulse text-white dark:text-stone-900" />
          </div>
          <div className="text-lg font-semibold text-stone-600 dark:text-stone-400">
            Verifying reset link...
          </div>
        </div>
      </div>
    );
  }

  // Error state (invalid/expired link)
  if (error && !email) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="rounded-sm border-2 border-stone-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-900">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <XCircle size={28} className="text-red-600 dark:text-red-400" />
                </div>
                <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Link Expired
                </h1>
                <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                  {error}
                </p>
              </div>

              <Link
                href="/"
                className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#153050] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Request New Reset Link
              </Link>

              <Link
                href="/"
                className="mt-4 flex w-full items-center justify-center gap-2 text-sm text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  if (success) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="rounded-sm border-2 border-stone-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-900">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle2 size={28} className="text-green-600 dark:text-green-400" />
                </div>
                <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Password Reset!
                </h1>
                <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                  Your password has been successfully changed. You can now sign in with your new password.
                </p>
              </div>

              <button
                onClick={() => router.push("/")}
                className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#153050] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main reset form
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="rounded-sm border-2 border-stone-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-900">
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-sm border-2 border-[#1a365d] bg-[#1a365d] dark:border-amber-500 dark:bg-amber-500">
                <Scale size={28} className="text-white dark:text-stone-900" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                Reset Password
              </h1>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Enter a new password for {email}
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
              {/* New Password */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                  New Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-sm border-2 border-stone-300 bg-white py-3 pl-10 pr-10 text-sm text-stone-900 transition focus:border-[#1a365d] focus:outline-none dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-amber-500"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-1">
                {passwordRequirements.map((req, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 text-xs ${
                      req.met
                        ? "text-green-600 dark:text-green-400"
                        : "text-stone-400"
                    }`}
                  >
                    {req.met ? (
                      <CheckCircle2 size={14} />
                    ) : (
                      <div className="h-3.5 w-3.5 rounded-full border border-stone-300 dark:border-stone-600" />
                    )}
                    {req.label}
                  </div>
                ))}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full rounded-sm border-2 bg-white py-3 pl-10 pr-10 text-sm text-stone-900 transition focus:outline-none dark:bg-stone-800 dark:text-stone-100 ${
                      confirmPassword.length > 0
                        ? passwordsMatch
                          ? "border-green-500 focus:border-green-500 dark:border-green-500"
                          : "border-red-500 focus:border-red-500 dark:border-red-500"
                        : "border-stone-300 focus:border-[#1a365d] dark:border-stone-600 dark:focus:border-amber-500"
                    }`}
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {confirmPassword.length > 0 && !passwordsMatch && (
                  <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !allRequirementsMet || !passwordsMatch}
                className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#153050] disabled:cursor-not-allowed disabled:opacity-50 dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>

            {/* Back link */}
            <Link
              href="/"
              className="mt-6 flex w-full items-center justify-center gap-2 text-sm text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
            >
              <ArrowLeft size={16} />
              Back to Sign In
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-stone-400">
            Questions? Contact{" "}
            <a href="mailto:support@lsatprep.org" className="underline hover:text-stone-600">
              support@lsatprep.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
