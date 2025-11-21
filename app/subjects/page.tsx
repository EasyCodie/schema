import { Plus, Link2, FileText, FolderOpen, Target } from "lucide-react";

const mockSubjects = [
  {
    id: "1",
    name: "Economics",
    color: "#8b5cf6",
    currentGoal: "Finish Chapter 4: Supply & Demand",
    totalSessions: 12,
    totalHours: 8,
  },
  {
    id: "2",
    name: "Calculus",
    color: "#34d399",
    currentGoal: "Integration Techniques Practice",
    totalSessions: 9,
    totalHours: 6,
  },
  {
    id: "3",
    name: "Literature",
    color: "#f87171",
    currentGoal: "Complete Hamlet Analysis",
    totalSessions: 6,
    totalHours: 4,
  },
];

export default function SubjectsPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">Subject Management</p>
            <h1 className="text-3xl font-semibold">Your subjects</h1>
            <p className="text-[var(--text-secondary)]">
              Store resources, set goals, and track history for each subject. Slides open a full detail panel.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-white transition-all hover:bg-violet-600 active:scale-95">
            <Plus className="w-4 h-4" strokeWidth={1.5} />
            Add Subject
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockSubjects.map((subject) => (
            <article
              key={subject.id}
              className="panel cursor-pointer hover:border-[var(--border-active)] transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold"
                  style={{ backgroundColor: subject.color + "33", color: subject.color }}
                >
                  {subject.name.charAt(0)}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">{subject.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                    <Target className="w-3 h-3" strokeWidth={1.5} />
                    {subject.currentGoal}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                    <span>{subject.totalSessions} sessions</span>
                    <span>•</span>
                    <span>{subject.totalHours}h total</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="panel-muted space-y-4">
          <div className="flex items-center gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Slide-over Panel Preview</p>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            When you click a subject, a slide-over panel from the right will open (with backdrop blur as specified in
            DESIGN_SYSTEM.md) containing:
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex items-center gap-3">
              <Link2 className="w-4 h-4 text-violet-400" strokeWidth={1.5} />
              Resources Hub: links to Drive folders, Notion pages, PDFs
            </li>
            <li className="flex items-center gap-3">
              <Target className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
              Goal Tracking: set and track specific milestones
            </li>
            <li className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
              Complete session history for this subject
            </li>
          </ul>
          <div className="rounded-xl border border-dashed border-[var(--border-subtle)] p-6 text-center text-[var(--text-tertiary)]">
            TODO: Build Subject Detail Slide-over + React Context integration
          </div>
        </section>
      </div>
    </main>
  );
}
