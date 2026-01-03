"use client";

import { useState } from "react";
import { Timer, X, Play, Pause, RotateCcw, Clock } from "lucide-react";
import { useTimer } from "./TimerProvider";

const PRESET_DURATIONS = [
  { label: "25 min", value: 25, description: "Pomodoro" },
  { label: "35 min", value: 35, description: "LSAT Section" },
  { label: "60 min", value: 60, description: "Full Focus" },
];

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export default function StudyTimer() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMinutes, setCustomMinutes] = useState("");
  const { timer, startTimer, pauseTimer, resumeTimer, resetTimer } = useTimer();

  const handleStartCustom = () => {
    const mins = parseInt(customMinutes);
    if (mins > 0 && mins <= 180) {
      startTimer(mins);
      setCustomMinutes("");
    }
  };

  const isActive = timer.isRunning || timer.isPaused;

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Expanded Timer Panel */}
      {isOpen && (
        <div className="absolute bottom-12 left-0 mb-2 w-72 rounded-xl border border-stone-200 bg-white p-4 shadow-xl dark:border-stone-700 dark:bg-stone-800">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-bold text-stone-800 dark:text-stone-200">
              Study Timer
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-700 dark:hover:text-stone-300"
            >
              <X size={18} />
            </button>
          </div>

          {isActive ? (
            // Active Timer View
            <div className="space-y-4">
              <div className="flex flex-col items-center rounded-lg bg-stone-50 py-4 dark:bg-stone-900/50">
                <div className="text-4xl font-bold tabular-nums text-stone-800 dark:text-stone-100">
                  {formatTime(timer.remaining)}
                </div>
                <div className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  of {formatTime(timer.duration)}
                </div>
                {/* Progress bar */}
                <div className="mt-3 h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                  <div
                    className="h-full rounded-full bg-[#1a365d] transition-all dark:bg-amber-500"
                    style={{
                      width: `${((timer.duration - timer.remaining) / timer.duration) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-center gap-3">
                {timer.isRunning ? (
                  <button
                    onClick={pauseTimer}
                    className="flex items-center gap-2 rounded-lg border-2 border-amber-500 bg-amber-50 px-4 py-2 font-semibold text-amber-700 transition hover:bg-amber-100 dark:border-amber-400 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50"
                  >
                    <Pause size={18} />
                    Pause
                  </button>
                ) : (
                  <button
                    onClick={resumeTimer}
                    className="flex items-center gap-2 rounded-lg border-2 border-green-500 bg-green-50 px-4 py-2 font-semibold text-green-700 transition hover:bg-green-100 dark:border-green-400 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
                  >
                    <Play size={18} />
                    Resume
                  </button>
                )}
                <button
                  onClick={resetTimer}
                  className="flex items-center gap-2 rounded-lg border-2 border-stone-300 bg-stone-50 px-4 py-2 font-semibold text-stone-600 transition hover:bg-stone-100 dark:border-stone-600 dark:bg-stone-700 dark:text-stone-300 dark:hover:bg-stone-600"
                >
                  <RotateCcw size={18} />
                  Reset
                </button>
              </div>
            </div>
          ) : (
            // Timer Setup View
            <div className="space-y-4">
              {/* Preset Durations */}
              <div className="space-y-2">
                {PRESET_DURATIONS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => startTimer(preset.value)}
                    className="flex w-full items-center justify-between rounded-lg border-2 border-stone-200 px-3 py-2 transition hover:border-[#1a365d] hover:bg-stone-50 dark:border-stone-600 dark:hover:border-amber-500 dark:hover:bg-stone-700"
                  >
                    <span className="font-medium text-stone-700 dark:text-stone-200">
                      {preset.label}
                    </span>
                    <span className="text-sm text-stone-500 dark:text-stone-400">
                      {preset.description}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Duration */}
              <div className="border-t border-stone-200 pt-3 dark:border-stone-700">
                <label className="mb-2 block text-sm font-medium text-stone-600 dark:text-stone-400">
                  Custom duration (minutes)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="1"
                    max="180"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleStartCustom();
                    }}
                    placeholder="e.g., 45"
                    className="flex-1 rounded-lg border-2 border-stone-200 bg-white px-3 py-2 text-stone-800 placeholder-stone-400 focus:border-[#1a365d] focus:outline-none dark:border-stone-600 dark:bg-stone-700 dark:text-stone-100 dark:placeholder-stone-500 dark:focus:border-amber-500"
                  />
                  <button
                    onClick={handleStartCustom}
                    disabled={!customMinutes || parseInt(customMinutes) <= 0}
                    className="rounded-lg bg-[#1a365d] px-4 py-2 font-semibold text-white transition hover:bg-[#153050] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Button - Discrete */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Study Timer"
        className={`flex h-9 items-center gap-1.5 rounded-full px-3 text-sm transition-all ${
          isActive
            ? "bg-stone-800/90 text-white shadow-md dark:bg-stone-700"
            : "bg-stone-200/80 text-stone-500 hover:bg-stone-300/90 hover:text-stone-700 dark:bg-stone-800/80 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-stone-300"
        }`}
      >
        {isActive ? (
          <>
            <Clock size={14} />
            <span className="font-medium tabular-nums">
              {formatTime(timer.remaining)}
            </span>
          </>
        ) : (
          <Timer size={16} />
        )}
      </button>
    </div>
  );
}
