import React, { useState } from "react";
import {
  FaFlask,
  FaBrain,
  FaXRay,
  FaRadiation,
  FaMicroscope,
  FaRobot,
  FaChevronDown,
} from "react-icons/fa";
import { Course } from "../types";

const Curriculum: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  const courses: Course[] = [
    {
      week: "Week 1",
      course: "Advanced Radiographic Physics & Imaging Principles",
      topics: "X-ray interactions, Digital image formation, Dose management",
      alignment: "Aligned with global radiography physics standards",
      icon: <FaFlask />,
    },
    {
      week: "Week 2",
      course: "Advanced Anatomy & Cross-Sectional Imaging",
      topics: "Cross-sectional anatomy, Pathological variants",
      alignment: "Aligned with international imaging anatomy standards",
      icon: <FaBrain />,
    },
    {
      week: "Week 3",
      course: "Complex Procedures & Positioning",
      topics: "Trauma imaging, Contrast studies, Pediatric positioning",
      alignment: "Aligned with procedural competency standards",
      icon: <FaXRay />,
    },
    {
      week: "Week 4",
      course: "Advanced Radiation Safety & Protection",
      topics: "ALARA, Monitoring, Compliance",
      alignment: "Aligned with global radiation safety principles",
      icon: <FaRadiation />,
    },
    {
      week: "Week 5",
      course: "Image Evaluation & Quality Assurance",
      topics: "Artifacts, QA protocols, Troubleshooting",
      alignment: "Aligned with QA best practices",
      icon: <FaMicroscope />,
    },
    {
      week: "Week 6",
      course: "Specialized & Emerging Modalities",
      topics: "CT, MRI sequences, AI imaging",
      alignment: "Aligned with emerging global standards",
      icon: <FaRobot />,
    },
  ];

  return (
    <section id="curriculum" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-semibold uppercase tracking-wide text-sm mb-3">Syllabus</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Course Outline</h3>
            <p className="mt-4 text-slate-600">A comprehensive 6-week roadmap to mastery.</p>
        </div>

        <div className="space-y-4">
          {courses.map((c, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${
                openIndex === i ? "border-indigo-500 shadow-md" : "border-slate-200 shadow-sm hover:border-indigo-200"
              }`}
            >
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${openIndex === i ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                    {c.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-0.5">
                        {c.week}
                    </span>
                    <span className={`text-lg font-bold ${openIndex === i ? 'text-indigo-900' : 'text-slate-800'}`}>
                        {c.course}
                    </span>
                  </div>
                </div>
                <FaChevronDown
                  className={`text-slate-400 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-indigo-500" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 ml-[4.5rem] border-t border-slate-50">
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-2">
                        <span className="font-semibold text-slate-900 text-sm w-20 shrink-0">Topics:</span>
                        <span className="text-slate-600 text-sm">{c.topics}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold text-slate-900 text-sm w-20 shrink-0">Alignment:</span>
                        <span className="text-slate-600 text-sm italic">{c.alignment}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;