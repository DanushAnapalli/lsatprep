"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    // In production, you could send this to an error tracking service
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 rounded-full bg-red-100 p-4 dark:bg-red-900/30">
            <AlertTriangle size={32} className="text-red-600 dark:text-red-400" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-stone-900 dark:text-stone-100">
            Something went wrong
          </h2>
          <p className="mb-6 max-w-md text-stone-600 dark:text-stone-400">
            We encountered an unexpected error. Please try again or return to the dashboard.
          </p>
          <div className="flex gap-3">
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 rounded-sm border-2 border-stone-300 bg-white px-4 py-2 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
            >
              <RefreshCcw size={16} />
              Try Again
            </button>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#153050] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              <Home size={16} />
              Dashboard
            </Link>
          </div>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="mt-6 w-full max-w-lg text-left">
              <summary className="cursor-pointer text-sm font-medium text-stone-500 hover:text-stone-700 dark:hover:text-stone-300">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 overflow-auto rounded-sm bg-stone-100 p-4 text-xs text-red-600 dark:bg-stone-800 dark:text-red-400">
                {this.state.error.message}
                {"\n"}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
