# Schema

> Turn your fixed timetable into a data-driven study engine.

Schema is a personal smart scheduling web app designed for students who need structure without rigid enforcement. It transforms a static weekly grid into an interactive gateway for deep work, tracking your focus, consistency, and subject mastery through a clean, "weightless" dark-mode interface.

---

## 💎 Core Philosophy

Schema is built on the intersection of structure and flexibility.

- **Visual First**: Your schedule is your dashboard. No lists, just time blocks.
- **Interactive**: Every schedule block is a clickable workspace, not just a calendar event.
- **Data-Driven**: We track "Adherence" (Planned vs. Actual) and "Focus Quality" to give you real insights, not just streaks.
- **Aesthetic**: Inspired by tools like Linear, Cron, and Notion—dark by default, minimal borders, and precision typography.

---

## 🚀 Key Features

### 1. The Smart Schedule (Dashboard)

- **Interactive Grid**: A fixed weekly timetable where every subject block is an active entry point.
- **Context-Aware**: Visual distinction between past, present, and future blocks.
- **Fluid Navigation**: Slide-over panels keep you in flow; no jarring page reloads when switching contexts.

### 2. The Study Engine

**Dual-Mode Timer:**
- Stopwatch: Count-up timer for open-ended sessions.
- Countdown: Fixed-duration timer with integrated Break Mode support.

**Session Features:**
- **Session Logging**: Captures duration, activity type (Reading, Revision, Exercises), and user-defined notes.
- **Quality Tracking**: Requires a "Focus Rating" (1–5) at the end of every session to track mental clarity over time.

### 3. Deep Analytics

- **Consistency Heatmap**: A GitHub-style contribution graph showing your study density across time-of-day slots.
- **Subject Breakdown**: Bar charts displaying cumulative hours per subject.
- **Adherence Metrics**: Donut charts visualizing Planned Blocks vs. Completed Sessions.
- **Algorithmic Summaries**: Logic-based highlights like "Economics is your most neglected subject this week" or "Peak focus window: 09:00–11:00" calculated purely from your session data.

### 4. Subject Management

- **Resources Hub**: Store links to Drive folders, Notion pages, and PDFs for each class.
- **Goal Tracking**: Set and track specific milestones per subject (e.g., "Finish Chapter 4").
- **History**: A complete log of every session ever recorded for that subject.

---

## 🛠 Tech Stack

Schema is built using a modern, performance-obsessed stack designed for rapid iteration and type safety.

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) (React) - Server-side rendering and fast page transitions
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling engine
- **Icons**: [Lucide React](https://lucide.dev/) - Lightweight, consistent SVG iconography
- **Visualization**: [Recharts](https://recharts.org/) - Composable, responsive analytics charts
- **Date Management**: [date-fns](https://date-fns.org/) - Robust time manipulation and timezone handling

### Backend & Data

- **Database**: [Google Cloud Firestore](https://firebase.google.com/docs/firestore) (NoSQL) - Flexible document storage for Sessions, Subjects, and Users
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth) - Secure email/social login
- **State Management**: React Context API + LocalStorage - For offline redundancy

---

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EasyCodie/schema.git
   cd schema
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to `http://localhost:3000` in your browser.

---

## 🗺 Roadmap

### V1.0

- [ ] Weekly Schedule Grid
- [ ] Subject Detail Slide-overs
- [ ] Basic Stopwatch/Timer
- [ ] Local Session Logging
- [ ] Basic Analytics (Hours/Subject)

### V1.5 (Next Phase)

- [ ] Cloud Sync: Full migration from LocalStorage to Firestore
- [ ] Resource Uploads: Direct PDF hosting/viewing within the Subject Panel
- [ ] Smart Alerts: Notifications for neglected subjects (e.g., "You haven't studied Math in 5 days")

### V2.0 (Future)

- [ ] Energy/Mood Correlation: Tracking focus relative to sleep/mood
- [ ] Goal Visualization: Progress bars for specific chapter/assignment completion
- [ ] Mobile Companion: A simplified PWA for checking schedules on the go

---

## 📄 License

This project is proprietary and designed for personal use.