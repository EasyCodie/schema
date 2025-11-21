"use client";

import { useState, useEffect, useRef } from "react";

interface UseTimerOptions {
  mode?: "stopwatch" | "countdown";
  targetSeconds?: number;
  onComplete?: () => void;
}

export function useTimer({ mode = "stopwatch", targetSeconds, onComplete }: UseTimerOptions = {}) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prev) => {
          const next = mode === "stopwatch" ? prev + 1 : prev - 1;

          if (mode === "countdown" && next <= 0) {
            setIsRunning(false);
            onComplete?.();
            return 0;
          }

          return next;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, mode, onComplete]);

  const start = () => {
    if (mode === "countdown" && targetSeconds !== undefined && elapsedSeconds === 0) {
      setElapsedSeconds(targetSeconds);
    }
    setIsRunning(true);
  };

  const pause = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    setElapsedSeconds(mode === "countdown" && targetSeconds ? targetSeconds : 0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return {
    elapsedSeconds,
    isRunning,
    formattedTime: formatTime(elapsedSeconds),
    start,
    pause,
    reset,
    toggle: () => (isRunning ? pause() : start()),
  };
}
