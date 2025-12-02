import React from "react";
import {
  FaBook,
  FaClock,
  FaClipboardCheck,
  FaChartLine,
  FaAward,
  FaUserCheck,
} from "react-icons/fa";
import { HowItWorksItem } from "../types";

const Features: React.FC = () => {
  const howItWorks: HowItWorksItem[] = [
    {
      icon: <FaBook size={24} />,
      title: "Weekly Study Scope",
      details: "Assigned study areas based on the course outline with curated resources.",
    },
    {
      icon: <FaClock size={24} />,
      title: "Self-Paced Learning",
      details: "No scheduled classes. Access resources 24/7 and review at your own pace.",
    },
    {
      icon: <FaClipboardCheck size={24} />,
      title: "Weekly Assessments",
      details: "Graded assessments to identify strengths and weaknesses privately.",
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Track Growth",
      details: "Visualize your performance trends over the entire 6-week journey.",
    },
    {
      icon: <FaAward size={24} />,
      title: "Final Evaluation",
      details: "A comprehensive final assessment to measure your cumulative mastery.",
    },
    {
      icon: <FaUserCheck size={24} />,
      title: "Recognition",
      details: "High performers earn recognition to stay motivated and celebrate progress.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-600 font-semibold uppercase tracking-wide text-sm mb-3">Methodology</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">How the Challenge Works</h3>
            <p className="mt-4 text-slate-600 text-lg">
                A structured yet flexible approach designed for busy professionals.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorks.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 mb-6 text-xl">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {item.title}
              </h4>

              <p className="text-slate-600 leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;