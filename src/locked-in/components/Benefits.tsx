import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Benefits: React.FC = () => {
  const benefits = [
    "Build intermediate & advanced radiography knowledge",
    "Enhance self-discipline and study habits",
    "Benchmark knowledge anonymously against peers",
    "Prepare for global standard competency areas",
    "Stay engaged and motivated throughout the program",
    "Access to exclusive study resources and guides"
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why join the <span className="text-indigo-400">Locked-In</span> Challenge?
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    This isn't just another course. It's a commitment to your professional excellence. 
                    We've designed this program to push your boundaries and solidify your expertise 
                    without disrupting your work-life balance.
                </p>
                <a href="#register" className="inline-block text-white font-semibold border-b border-indigo-500 pb-1 hover:text-indigo-400 transition-colors">
                    Secure your spot today &rarr;
                </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <ul className="space-y-5">
                {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-4">
                    <FaCheckCircle className="text-indigo-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-200 text-lg font-medium">{b}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;