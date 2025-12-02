import React from "react";
import { FaCalendarAlt, FaMoneyBillWave, FaExclamationCircle } from "react-icons/fa";
import { ImportantDate } from "../types";

interface LogisticsProps {
  onOpenDisclaimer: () => void;
}

const Logistics: React.FC<LogisticsProps> = ({ onOpenDisclaimer }) => {
  const importantDates: ImportantDate[] = [
    { label: "Registration Closes", date: "Jan 31, 2026", isHighlight: true },
    { label: "Onboarding Session", date: "Feb 04, 2026" },
    { label: "1st Assessment", date: "Feb 13, 2026" },
    { label: "2nd Assessment", date: "Feb 20, 2026" },
    { label: "3rd Assessment", date: "Feb 27, 2026" },
    { label: "4th Assessment", date: "Mar 06, 2026" },
    { label: "5th Assessment", date: "Mar 13, 2026" },
    { label: "Grand Assessment", date: "Mar 20, 2026", isHighlight: true },
  ];

  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Timeline Section */}
          <div>
            <div className="mb-10">
                <h2 className="text-indigo-600 font-semibold uppercase tracking-wide text-sm mb-3">Schedule</h2>
                <h3 className="text-3xl font-bold text-slate-900">Important Dates</h3>
                <p className="mt-2 text-slate-600">Mark your calendar for these key milestones.</p>
            </div>
            
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pl-8 py-2">
              {importantDates.map((d, i) => (
                <div key={i} className="relative group">
                  <div className={`absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white transition-colors duration-300 ${d.isHighlight ? 'bg-indigo-600 ring-4 ring-indigo-100' : 'bg-slate-300 group-hover:bg-indigo-400'}`}></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <span className={`font-semibold ${d.isHighlight ? 'text-indigo-900' : 'text-slate-700'}`}>{d.label}</span>
                    <span className={`text-sm font-mono ${d.isHighlight ? 'text-indigo-600 font-bold' : 'text-slate-500'}`}>{d.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration / Pricing Card */}
          <div id="register" className="lg:mt-12">
            <div className="sticky top-24">
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                    
                    <h3 className="text-2xl font-bold mb-2 relative z-10">Secure Your Spot</h3>
                    <p className="text-slate-400 mb-8 relative z-10">Join the next cohort of top-tier radiographers.</p>

                    <div className="flex items-baseline gap-2 mb-8 relative z-10">
                        <span className="text-5xl font-bold text-white">₦5,000</span>
                        <span className="text-slate-400">/ person</span>
                    </div>

                    <div className="space-y-4 mb-8 relative z-10">
                        <div className="flex items-center gap-3 text-slate-300">
                            <FaCalendarAlt className="text-indigo-400"/>
                            <span>Registration closes <strong>Jan 31, 2026</strong></span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                            <FaMoneyBillWave className="text-indigo-400"/>
                            <span>One-time payment</span>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="block w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] relative z-10"
                    >
                        Register Now
                    </a>

                    <button
                        onClick={onOpenDisclaimer}
                        className="w-full mt-4 flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm transition-colors relative z-10"
                    >
                        <FaExclamationCircle />
                        View Important Disclaimer
                    </button>
                </div>

                <div className="mt-6 text-center text-slate-500 text-sm">
                    <p>Limited slots available for quality assurance.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Logistics;