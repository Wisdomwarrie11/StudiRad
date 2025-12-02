import React from 'react';
import { FaBook, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

export const HOW_IT_WORKS_DATA = [
  { title: 'Plan', description: 'Structure your learning', details: 'Detailed roadmap for 6 weeks' },
  { title: 'Focus', description: 'Daily focused sessions', details: 'Use focus timer to track' },
  { title: 'Assess', description: 'Track your progress', details: 'Check knowledge with quizzes' },
];

export const BENEFITS_DATA = [
  'Structured 6-week program',
  'Hands-on exercises & challenges',
  'Expert guidance & mentorship',
  'Focus on professional growth'
];

export const COURSES_DATA = [
  { 
    week: 'Week 1', 
    course: 'Introduction to Radiography', 
    topics: 'X-ray basics, radiation safety, patient positioning', 
    alignment: 'Aligned with international standards', 
    icon: <FaBook /> 
  },
  { 
    week: 'Week 2', 
    course: 'Advanced Imaging Techniques', 
    topics: 'CT, MRI, Ultrasound fundamentals', 
    alignment: 'Aligned with international standards', 
    icon: <FaChalkboardTeacher /> 
  },
  { 
    week: 'Week 3', 
    course: 'Clinical Practice & Ethics', 
    topics: 'Patient care, safety, ethics', 
    alignment: 'Aligned with international standards', 
    icon: <FaLaptopCode /> 
  },
];

export const IMPORTANT_DATES = [
  { label: 'Registration Opens', date: '1st Dec 2025' },
  { label: 'Registration Closes', date: '31st Jan 2026' },
  { label: 'Program Start', date: '1st Feb 2026' },
  { label: 'Program End', date: '15th Mar 2026' },
];
