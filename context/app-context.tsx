"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Subject, TimerMode, TimerState } from "@/types";

interface AppContextValue {
  activeSubject: Subject | null;
  setActiveSubject: (subject: Subject | null) => void;
  isSubjectPanelOpen: boolean;
  toggleSubjectPanel: (forceValue?: boolean) => void;
  timerState: TimerState;
  setTimerMode: (mode: TimerMode) => void;
  toggleTimer: () => void;
  resetTimer: () => void;
  setCountdown: (seconds: number) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);
  const [isSubjectPanelOpen, setIsSubjectPanelOpen] = useState(false);
  const [timerState, setTimerState] = useState<TimerState>({
    mode: "stopwatch",
    isRunning: false,
    elapsedSeconds: 0,
  });

  const value = useMemo<AppContextValue>(() => ({
    activeSubject,
    setActiveSubject,
    isSubjectPanelOpen,
    toggleSubjectPanel(forceValue) {
      setIsSubjectPanelOpen((prev) => (forceValue !== undefined ? forceValue : !prev));
    },
    timerState,
    setTimerMode(mode) {
      setTimerState((prev) => ({ ...prev, mode }));
    },
    toggleTimer() {
      setTimerState((prev) => ({ ...prev, isRunning: !prev.isRunning }));
    },
    resetTimer() {
      setTimerState((prev) => ({ ...prev, isRunning: false, elapsedSeconds: 0 }));
    },
    setCountdown(seconds) {
      setTimerState({ mode: "countdown", isRunning: false, elapsedSeconds: 0, targetSeconds: seconds });
    },
  }), [activeSubject, isSubjectPanelOpen, timerState]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
