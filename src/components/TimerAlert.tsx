"use client";

import { Bell, X, PartyPopper } from "lucide-react";
import { useTimer } from "./TimerProvider";

export default function TimerAlert() {
  const { timer, dismissComplete, resetTimer } = useTimer();

  if (!timer.isComplete) {
    return null;
  }

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    if (mins < 60) {
      return `${mins} minute${mins !== 1 ? "s" : ""}`;
    }
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours}h ${remainingMins}m`;
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[60] animate-in slide-in-from-top duration-300">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 shadow-lg dark:from-green-600 dark:to-emerald-700">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <PartyPopper size={22} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white">Study Session Complete!</p>
              <p className="text-sm text-green-100">
                Great work! You studied for {formatDuration(timer.duration)}.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetTimer}
              className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/30"
            >
              Start New
            </button>
            <button
              onClick={dismissComplete}
              className="rounded-lg p-1.5 text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
