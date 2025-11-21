import type { ScheduleBlock } from "@/types";

type BlockState = "past" | "present" | "future";

export interface ScheduleDay {
  day: string;
  blocks: Array<ScheduleBlock & { state: BlockState; label: string }>;
}

export const weeklySchedule: ScheduleDay[] = [
  {
    day: "Monday",
    blocks: [
      {
        id: "mon-1",
        subjectId: "math",
        dayOfWeek: 1,
        startTime: "08:00",
        endTime: "10:00",
        state: "past",
        label: "Calculus Revision",
      },
      {
        id: "mon-2",
        subjectId: "econ",
        dayOfWeek: 1,
        startTime: "11:00",
        endTime: "13:00",
        state: "present",
        label: "Economics Case Study",
      },
    ],
  },
  {
    day: "Tuesday",
    blocks: [
      {
        id: "tue-1",
        subjectId: "lit",
        dayOfWeek: 2,
        startTime: "09:00",
        endTime: "11:00",
        state: "future",
        label: "Literature Deep Dive",
      },
      {
        id: "tue-2",
        subjectId: "cs",
        dayOfWeek: 2,
        startTime: "13:00",
        endTime: "15:00",
        state: "future",
        label: "Algorithms Sprint",
      },
    ],
  },
  {
    day: "Wednesday",
    blocks: [
      {
        id: "wed-1",
        subjectId: "chem",
        dayOfWeek: 3,
        startTime: "08:00",
        endTime: "10:00",
        state: "future",
        label: "Chemistry Lab Prep",
      },
    ],
  },
  {
    day: "Thursday",
    blocks: [
      {
        id: "thu-1",
        subjectId: "hist",
        dayOfWeek: 4,
        startTime: "10:00",
        endTime: "12:00",
        state: "future",
        label: "History Timeline",
      },
    ],
  },
  {
    day: "Friday",
    blocks: [
      {
        id: "fri-1",
        subjectId: "phys",
        dayOfWeek: 5,
        startTime: "09:00",
        endTime: "11:00",
        state: "future",
        label: "Physics Problem Set",
      },
      {
        id: "fri-2",
        subjectId: "econ",
        dayOfWeek: 5,
        startTime: "13:00",
        endTime: "15:00",
        state: "future",
        label: "Econometrics Review",
      },
    ],
  },
];
