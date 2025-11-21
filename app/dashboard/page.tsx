import { Flame, ListTodo } from "lucide-react";
import { weeklySchedule } from "@/lib/mocks/schedule";

const stateClasses = {
  past: "opacity-50 grayscale border border-dashed border-[var(--border-subtle)]",
  present:
    "border border-[var(--border-active)] bg-[var(--card-hover)] ring-1 ring-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.2)]",
  future: "border border-[var(--border-subtle)]",
} as const;

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">Smart Schedule</p>
          <h1 className="text-3xl font-semibold">Interactive timetable</h1>
          <p className="text-[var(--text-secondary)]">
            Each block represents a live workspace. Past blocks fade, the current block glows, and future blocks
            stay crisp to help you focus on what is next.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-5">
          {weeklySchedule.map((day) => (
            <article key={day.day} className="panel space-y-3">
              <header className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-[var(--text-tertiary)]">{day.day}</p>
                <p className="text-sm text-[var(--text-secondary)]">{day.blocks.length} Blocks</p>
              </header>
              <div className="space-y-3">
                {day.blocks.map((block) => (
                  <button
                    key={block.id}
                    className={`w-full rounded-xl px-4 py-3 text-left transition-all duration-200 ${stateClasses[block.state]}`}
                  >
                    <p className="text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
                      {block.startTime} – {block.endTime}
                    </p>
                    <p className="text-sm font-medium">{block.label}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{block.state === "present" ? "In progress" : "Tap to focus"}</p>
                  </button>
                ))}
                {day.blocks.length === 0 && (
                  <div className="rounded-xl border border-dashed border-[var(--border-subtle)] p-4 text-sm text-[var(--text-tertiary)]">
                    No blocks planned
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="panel flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-emerald-400" />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Adherence</p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-4xl font-semibold">82%</p>
                <p className="text-sm text-[var(--text-secondary)]">Planned vs. completed</p>
              </div>
              <div className="text-right text-sm text-[var(--text-secondary)]">
                <p>+8% vs last week</p>
                <p>Peak focus window: 09:00–11:00</p>
              </div>
            </div>
          </article>

          <article className="panel flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <ListTodo className="w-4 h-4 text-violet-400" />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Focus Queue</p>
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center justify-between">
                <span>Economics</span>
                <span className="text-rose-400">Missed 2 blocks</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Literature</span>
                <span className="text-emerald-400">Focus rating 4.5</span>
              </div>
              <div className="rounded-xl border border-dashed border-[var(--border-subtle)] p-4 text-center text-[var(--text-tertiary)]">
                TODO: Plug Firestore-backed backlog here
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
