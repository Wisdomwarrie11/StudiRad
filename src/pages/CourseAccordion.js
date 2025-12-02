import React, { useState } from 'react';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';

const CourseAccordion = ({ courses = [] }) => { // default empty array
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {courses.length > 0 ? (
        courses.map((course, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-brand-blue shadow-md bg-white ring-1 ring-brand-blue/20'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg transition-colors ${
                      isOpen ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {React.cloneElement(course.icon, { size: 20 })}
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      {course.week}
                    </span>
                    <h3 className={`font-bold text-lg ${isOpen ? 'text-navy-900' : 'text-slate-700'}`}>
                      {course.course}
                    </h3>
                  </div>
                </div>
                <div
                  className={`text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-brand-blue' : ''
                  }`}
                >
                  <FaChevronDown />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 border-t border-dashed border-slate-100 mt-2 text-slate-600 bg-slate-50/50">
                  <div className="pt-4 space-y-3">
                    <div>
                      <strong className="text-navy-900 block mb-1">Topics Covered:</strong>
                      <p className="text-sm leading-relaxed">{course.topics}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm bg-green-50 text-green-800 p-3 rounded-lg border border-green-100">
                      <FaCheckCircle className="mt-1 shrink-0" />
                      <span className="font-medium">{course.alignment}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-slate-500">No courses available.</p>
      )}
    </div>
  );
};

export default CourseAccordion;
