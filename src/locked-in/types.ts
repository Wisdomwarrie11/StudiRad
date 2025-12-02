import { ReactNode } from "react";

export interface Course {
  week: string;
  course: string;
  topics: string;
  alignment: string;
  icon: ReactNode;
}

export interface HowItWorksItem {
  icon: ReactNode;
  title: string;
  details: string;
}

export interface ImportantDate {
  label: string;
  date: string;
  isHighlight?: boolean;
}