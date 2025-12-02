import { ReactNode } from "react";

export interface HowItWorksItem {
  icon: ReactNode;
  title: string;
  details: string[]; // Split by newlines in original for better rendering
}

export interface CourseItem {
  week: string;
  course: string;
  topics: string;
  alignment: string;
  icon: ReactNode;
}

export interface DateItem {
  label: string;
  date: string;
}