# Design System & UI/UX Guidelines for "Schema"

## 1. Aesthetic Philosophy
The application must embody a "Weightless" interface as defined in the project scope.
- **Reference:** Inspired by Linear, Cron, and Notion.
- **Core Trait:** Dark mode by default, high contrast text, subtle borders, and "precision typography".
- **Interaction:** No jarring page reloads; elements should feel like active workspaces, not static calendar blocks.

## 2. Tailwind CSS Configuration (The "Linear" Look)
Use the following color tokens mapped to Tailwind's standard palette (Zinc/Slate) to achieve the premium "weightless" feel.

### Color Palette
* **Backgrounds (Dark Mode Optimized):**
  * `bg-page`: `bg-zinc-950` (Main background, avoiding pure #000000)
  * `bg-card`: `bg-zinc-900` (Schedule blocks, panels)
  * `bg-card-hover`: `bg-zinc-800` (Interactive states)
* **Borders (The "Minimal" Rule):**
  * Do not use solid heavy borders. Use alpha transparency.
  * `border-subtle`: `border-zinc-800` or `border-white/5`
  * `border-active`: `border-zinc-700` or `border-white/10`
* **Typography:**
  * `text-primary`: `text-zinc-50` (Headings, active block titles)
  * `text-secondary`: `text-zinc-400` (Metadata, past blocks)
  * `text-tertiary`: `text-zinc-600` (Placeholders, empty states)
* **Brand/Status:**
  * `accent-primary`: `violet-500` (Primary actions, "Start Session")
  * `status-focus`: `emerald-500` (High quality focus sessions)
  * `status-missed`: `rose-500/80` (Missed blocks)

### Typography Settings
* **Font Family:** Inter (via `next/font/google`).
* **Scaling:**
  * Use `text-sm` (14px) as the base for grid items to allow information density.
  * Use `text-xs` (12px) uppercase with `tracking-wider` for labels (e.g., "DURATION", "SUBJECT").

## 3. Component-Specific Rules

### A. The Smart Schedule (Grid)
The README requires visual distinction between states. Implement these specific visual logic rules:
1.  **Past Blocks:** Apply `opacity-50` and `grayscale`. Border should be `border-dashed`.
2.  **Present (Active) Block:** Apply a subtle "glow" or `ring-1 ring-violet-500/50`. Background should be slightly lighter (`bg-zinc-800`).
3.  **Future Blocks:** Standard visibility. Solid, subtle borders.

### B. The Slide-Over Panel
* **Backdrop:** Use `backdrop-blur-sm` and `bg-black/20` to maintain context of the grid behind the panel.
* **Transition:** Panel must slide from the right (`translate-x-0` from `translate-x-full`).
* **Animation Duration:** `duration-300` with `ease-in-out` (Standard for "fluid navigation").

### C. Data Visualization
For the "Consistency Heatmap":
* Use a monochromatic green scale similar to GitHub, but adapted for dark mode context:
    * Level 0: `bg-zinc-900` (No activity)
    * Level 1: `bg-emerald-900/40`
    * Level 2: `bg-emerald-800/60`
    * Level 3: `bg-emerald-600`
    * Level 4: `bg-emerald-400` (Peak activity)

## 4. Iconography
* Strictly use **Lucide React**.
* Stroke width: `1.5px` (To match the "minimal" aesthetic).
* Size: Default to `w-4 h-4` for UI elements, `w-5 h-5` for navigation.