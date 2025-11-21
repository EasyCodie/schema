"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  PieChart,
  Pie,
} from "recharts";

const subjectData = [
  { name: "Economics", hours: 8 },
  { name: "Calculus", hours: 6 },
  { name: "Chemistry", hours: 4 },
  { name: "Literature", hours: 3 },
];

const adherenceData = [
  { name: "Planned", value: 12, fill: "#8b5cf6" },
  { name: "Completed", value: 9, fill: "#34d399" },
];

const heatmapLevels = [0, 1, 2, 3, 4];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">Analytics</p>
          <h1 className="text-3xl font-semibold">Deep insights</h1>
          <p className="text-[var(--text-secondary)]">
            Consistency heatmap, subject breakdown, adherence donuts, and algorithmic insights based entirely on
            your study sessions.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="panel">
            <h2 className="text-lg font-semibold mb-4">Consistency Heatmap</h2>
            <div className="grid grid-cols-7 gap-2 text-center text-xs text-[var(--text-tertiary)]">
              {Array.from({ length: 35 }).map((_, index) => {
                const level = heatmapLevels[index % heatmapLevels.length];
                const colors = [
                  "bg-zinc-900",
                  "bg-emerald-900/40",
                  "bg-emerald-800/60",
                  "bg-emerald-600",
                  "bg-emerald-400",
                ];
                return <div key={index} className={`aspect-square rounded-sm ${colors[level]} transition-all`} />;
              })}
            </div>
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              TODO: Replace with real session density data from Firestore once analytics pipeline is wired up.
            </p>
          </article>

          <article className="panel">
            <h2 className="text-lg font-semibold mb-4">Subject Breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={subjectData} margin={{ top: 20, right: 12, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="var(--text-tertiary)" />
                  <YAxis axisLine={false} tickLine={false} stroke="var(--text-tertiary)" />
                  <Tooltip contentStyle={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.08)" }} />
                  <Area type="monotone" dataKey="hours" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorHours)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="panel flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-semibold">Adherence Metrics</h2>
              <p className="text-sm text-[var(--text-secondary)]">Planned vs completed study blocks</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={adherenceData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={6}
                    cornerRadius={10}
                  >
                    {adherenceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-[var(--text-secondary)]">
              TODO: Wire this donut to planned schedule vs. actual session data captured in Firestore.
            </p>
          </article>

          <article className="panel-muted space-y-4">
            <h2 className="text-lg font-semibold">Algorithmic Insights</h2>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-violet-500" />
                Economics is your most neglected subject this week. Schedule a focused block.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Peak focus window detected between 09:00–11:00 based on average focus rating 4.6/5.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                Missed 2 Literature blocks. Consider swapping with lighter sessions.
              </li>
            </ul>
            <p className="text-xs text-[var(--text-tertiary)]">
              These insights will eventually be generated from real session logs once the Study Engine is connected to
              Firestore.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
