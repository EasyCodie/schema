"use client";

import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, Clock, Timer } from "lucide-react";
import { useTimer } from "@/hooks/useTimer";

type TimerMode = "stopwatch" | "countdown";

export default function StudyEnginePage() {
  const [mode, setMode] = useState<TimerMode>("stopwatch");
  const [countdownDuration] = useState(25 * 60); // 25-minute sprint
  const timer = useTimer({ mode, targetSeconds: countdownDuration });

  useEffect(() => {
    timer.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">Study Engine</p>
          <h1 className="text-3xl font-semibold">Dual-mode timer</h1>
          <p className="text-[var(--text-secondary)]">
            Stopwatch for open-ended work. Countdown for structured blocks. Session data logged automatically.
          </p>
        </header>

        <section className="panel space-y-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setMode("stopwatch")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all ${
                mode === "stopwatch"
                  ? "bg-violet-500 text-white"
                  : "bg-transparent text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              Stopwatch
            </button>
            <button
              onClick={() => setMode("countdown")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all ${
                mode === "countdown"
                  ? "bg-violet-500 text-white"
                  : "bg-transparent text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <Timer className="w-4 h-4" strokeWidth={1.5} />
              Countdown
            </button>
          </div>

          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-8xl font-mono font-semibold tracking-tight">{timer.formattedTime}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
              {mode === "stopwatch" ? "Elapsed time" : "Time remaining"}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={timer.toggle}
              className="flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 text-white transition-all hover:bg-violet-600 active:scale-95"
            >
              {timer.isRunning ? <Pause className="w-5 h-5" strokeWidth={1.5} /> : <Play className="w-5 h-5" strokeWidth={1.5} />}
              {timer.isRunning ? "Pause" : "Start"}
            </button>
            <button
              onClick={timer.reset}
              className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] px-6 py-3 transition-all hover:bg-[var(--card-hover)]"
            >
              <RotateCcw className="w-5 h-5" strokeWidth={1.5} />
              Reset
            </button>
          </div>
        </section>

        <section className="panel-muted space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Session Log</p>
          <p className="text-sm text-[var(--text-secondary)]">
            When you complete a timer session, this area will show prompts for activity type (Reading, Revision,
            Exercises), focus rating (1–5), and optional notes.
          </p>
          <div className="rounded-xl border border-dashed border-[var(--border-subtle)] p-6 text-center text-[var(--text-tertiary)]">
            TODO: Session form & Firestore integration
          </div>
        </section>
      </div>
    </main>
  );
}
