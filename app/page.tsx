import { Calendar, Clock, BarChart3, BookOpen } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Schema
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Turn your fixed timetable into a data-driven study engine
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            href="/dashboard"
            className="panel hover:bg-[var(--card-hover)] transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-violet-500" strokeWidth={1.5} />
              <div className="w-2 h-2 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Schedule</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Interactive weekly timetable with contextual block states
            </p>
          </Link>

          <Link
            href="/study"
            className="panel hover:bg-[var(--card-hover)] transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
              <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Study Engine</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Stopwatch/countdown timers with session logging
            </p>
          </Link>

          <Link
            href="/analytics"
            className="panel hover:bg-[var(--card-hover)] transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
              <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Consistency heatmap, subject breakdown, and adherence metrics
            </p>
          </Link>

          <Link
            href="/subjects"
            className="panel hover:bg-[var(--card-hover)] transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="w-8 h-8 text-rose-500" strokeWidth={1.5} />
              <div className="w-2 h-2 rounded-full bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Subjects</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Manage resources, goals, and history for each subject
            </p>
          </Link>
        </div>

        <div className="panel-muted">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👋</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Welcome to Schema! This project is currently in development. Navigate to each section
                to explore the feature shells and placeholder components.
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                <li>→ Set up your Firebase credentials in <code className="text-xs bg-black/30 px-1.5 py-0.5 rounded">.env.local</code></li>
                <li>→ Create your first subject to populate the dashboard</li>
                <li>→ Start a study session to test the timer functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
