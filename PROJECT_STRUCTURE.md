# Project Structure

This document describes the folder structure and organization of the Schema codebase.

## Directory Layout

```
schema/
├── app/                          # Next.js App Router pages
│   ├── dashboard/                # Smart Schedule view (weekly timetable grid)
│   ├── study/                    # Study Engine (dual-mode timer)
│   ├── analytics/                # Analytics dashboard (heatmap, charts, insights)
│   ├── subjects/                 # Subject management (resources, goals, history)
│   ├── layout.tsx                # Root layout with Navigation + AppProvider
│   └── page.tsx                  # Landing/home page
│
├── components/                   # Reusable UI components
│   └── navigation.tsx            # Top navigation bar
│
├── context/                      # React Context providers
│   └── app-context.tsx           # Global app state (subjects, timer, panel visibility)
│
├── hooks/                        # Custom React hooks
│   └── useTimer.ts               # Timer logic for stopwatch/countdown modes
│
├── lib/                          # Utility functions and libraries
│   ├── firebase/                 # Firebase configuration and helpers
│   │   ├── config.ts             # Firebase app initialization (auth, db)
│   │   └── subjects.ts           # Subject CRUD helpers for Firestore
│   ├── mocks/                    # Mock data for development
│   │   └── schedule.ts           # Placeholder weekly schedule blocks
│   ├── constants/                # App-wide constants
│   │   └── navigation.ts         # Navigation menu items
│   └── utils.ts                  # General utilities (cn helper, etc.)
│
├── styles/                       # Global CSS
│   └── globals.css               # Tailwind directives + design tokens from DESIGN_SYSTEM.md
│
├── types/                        # TypeScript type definitions
│   └── index.ts                  # Interfaces for Subject, StudySession, ScheduleBlock, etc.
│
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind theme + design token mappings
├── tsconfig.json                 # TypeScript configuration
│
├── DESIGN_SYSTEM.md              # UI/UX guidelines (colors, typography, components)
├── FIRESTORE_SCHEMA.md           # Database schema reference
└── README.md                     # Project overview and setup instructions
```

## Key Patterns

### 1. Next.js App Router
- Using the modern **App Router** (`/app` directory) instead of Pages Router
- All pages are React Server Components by default; client components explicitly marked with `"use client"`
- Nested layouts for shared navigation/state providers

### 2. Firebase Integration
- Firebase config centralized in `lib/firebase/config.ts`
- Helper functions for Firestore operations in `lib/firebase/subjects.ts`
- Environment variables for Firebase credentials (see `.env.local.example`)

### 3. State Management
- React Context API for global state (`context/app-context.tsx`)
- LocalStorage planned for offline redundancy (future implementation)
- Custom hooks for encapsulating reusable logic (timers, data fetching)

### 4. Styling
- Tailwind CSS with custom design tokens from `DESIGN_SYSTEM.md`
- CSS variables defined in `styles/globals.css` for dynamic theming
- Utility classes for consistent spacing and colors

### 5. TypeScript
- Strict type checking enabled (`strict: true` in tsconfig.json)
- Shared interfaces in `/types` for Firestore document shapes
- Typed Firebase helpers to ensure type safety across data operations

## Development Workflow

1. **Start dev server**: `npm run dev` (runs on http://localhost:3000)
2. **Type check**: `npm run type-check` (runs TypeScript compiler)
3. **Lint**: `npm run lint` (runs ESLint)
4. **Build**: `npm run build` (creates production-ready build)

## Next Steps

- Implement Firebase Authentication flow
- Connect Subject Management to Firestore
- Build slide-over panel component for subject detail
- Integrate study session logging and analytics pipeline
- Add offline LocalStorage sync layer
