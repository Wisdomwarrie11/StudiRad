import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[60%] bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          New Cohort Enrolling
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Locked-In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Challenge™</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          6 Weeks. Elite Focus. Relentless Growth. <br className="hidden md:block"/>
          Master advanced radiography concepts with a community of dedicated professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#register"
            className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:bg-indigo-50 transition-all flex items-center gap-2 group"
          >
            Start Your Journey
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#curriculum"
            className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all"
          >
            View Syllabus
          </a>
        </div>

        {/* Stats / Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-800/50 pt-8">
            <div className="text-center">
                <p className="text-3xl font-bold text-white">6</p>
                <p className="text-slate-500 text-sm">Weeks Duration</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-slate-500 text-sm">Resource Access</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-slate-500 text-sm">Online & Flexible</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-slate-500 text-sm">Key Competencies</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;