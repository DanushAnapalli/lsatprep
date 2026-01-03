"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";

interface TimerState {
  duration: number; // Total duration in seconds
  remaining: number; // Remaining time in seconds
  isRunning: boolean;
  isPaused: boolean;
  isComplete: boolean;
}

interface TimerContextType {
  timer: TimerState;
  startTimer: (durationMinutes: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  resetTimer: () => void;
  dismissComplete: () => void;
}

const TimerContext = createContext<TimerContextType | null>(null);

const STORAGE_KEY = "lsatprep_study_timer";

interface StoredTimerState {
  duration: number;
  remaining: number;
  isRunning: boolean;
  isPaused: boolean;
  savedAt: number; // timestamp
}

export function TimerProvider({ children }: { children: ReactNode }) {
  const [timer, setTimer] = useState<TimerState>({
    duration: 0,
    remaining: 0,
    isRunning: false,
    isPaused: false,
    isComplete: false,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Play completion sound using Web Audio API
  const playCompletionSound = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();

      // Create a pleasant chime sound
      const playTone = (frequency: number, startTime: number, duration: number) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = "sine";

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + startTime + duration);

        oscillator.start(audioContext.currentTime + startTime);
        oscillator.stop(audioContext.currentTime + startTime + duration);
      };

      // Play a pleasant three-note chime
      playTone(523.25, 0, 0.3);    // C5
      playTone(659.25, 0.15, 0.3); // E5
      playTone(783.99, 0.3, 0.5);  // G5
    } catch {
      // Audio context not available
    }
  }, []);

  // Load timer state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data: StoredTimerState = JSON.parse(stored);
        const elapsedSinceLastSave = Math.floor(
          (Date.now() - data.savedAt) / 1000
        );

        // If timer was running, subtract elapsed time
        if (data.isRunning && !data.isPaused) {
          const newRemaining = Math.max(0, data.remaining - elapsedSinceLastSave);
          if (newRemaining > 0) {
            setTimer({
              duration: data.duration,
              remaining: newRemaining,
              isRunning: true,
              isPaused: false,
              isComplete: false,
            });
          } else {
            // Timer completed while away
            setTimer({
              duration: data.duration,
              remaining: 0,
              isRunning: false,
              isPaused: false,
              isComplete: true,
            });
          }
        } else if (data.isPaused && data.remaining > 0) {
          // Timer was paused, restore that state
          setTimer({
            duration: data.duration,
            remaining: data.remaining,
            isRunning: false,
            isPaused: true,
            isComplete: false,
          });
        }
      }
    } catch {
      // Ignore localStorage errors
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Save timer state to localStorage whenever it changes
  useEffect(() => {
    if (timer.duration > 0) {
      const data: StoredTimerState = {
        duration: timer.duration,
        remaining: timer.remaining,
        isRunning: timer.isRunning,
        isPaused: timer.isPaused,
        savedAt: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [timer]);

  // Timer countdown logic
  useEffect(() => {
    if (timer.isRunning && !timer.isPaused && timer.remaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev.remaining <= 1) {
            // Timer complete
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            // Play notification sound
            playCompletionSound();
            return {
              ...prev,
              remaining: 0,
              isRunning: false,
              isComplete: true,
            };
          }
          return {
            ...prev,
            remaining: prev.remaining - 1,
          };
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timer.isRunning, timer.isPaused, playCompletionSound]);

  const startTimer = useCallback((durationMinutes: number) => {
    const durationSeconds = durationMinutes * 60;
    setTimer({
      duration: durationSeconds,
      remaining: durationSeconds,
      isRunning: true,
      isPaused: false,
      isComplete: false,
    });
  }, []);

  const pauseTimer = useCallback(() => {
    setTimer((prev) => ({
      ...prev,
      isRunning: false,
      isPaused: true,
    }));
  }, []);

  const resumeTimer = useCallback(() => {
    setTimer((prev) => ({
      ...prev,
      isRunning: true,
      isPaused: false,
    }));
  }, []);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer({
      duration: 0,
      remaining: 0,
      isRunning: false,
      isPaused: false,
      isComplete: false,
    });
  }, []);

  const dismissComplete = useCallback(() => {
    setTimer((prev) => ({
      ...prev,
      isComplete: false,
    }));
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timer,
        startTimer,
        pauseTimer,
        resumeTimer,
        resetTimer,
        dismissComplete,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
