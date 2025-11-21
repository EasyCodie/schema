import type { Timestamp } from "firebase/firestore";

export interface Subject {
  id: string;
  name: string;
  color: string;
  currentGoal: string;
  createdAt: Timestamp;
  resources: Resource[];
}

export interface Resource {
  title: string;
  url: string;
  type: "drive" | "notion" | "pdf" | "link";
}

export interface ScheduleBlock {
  id: string;
  subjectId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface StudySession {
  id: string;
  subjectId: string;
  startedAt: Timestamp;
  endedAt: Timestamp;
  durationMinutes: number;
  activityType: "Reading" | "Revision" | "Exercises" | "Other";
  notes: string;
  focusRating: 1 | 2 | 3 | 4 | 5;
}

export type TimerMode = "stopwatch" | "countdown";

export interface TimerState {
  mode: TimerMode;
  isRunning: boolean;
  elapsedSeconds: number;
  targetSeconds?: number;
}
