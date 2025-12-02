import React from "react";
import { FaTimes, FaShieldAlt } from "react-icons/fa";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative z-10 overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-3 text-slate-800">
            <FaShieldAlt className="text-indigo-600 text-xl" />
            <h3 className="text-xl font-bold">Important Disclaimer</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-200"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-slate-600 text-sm space-y-4 leading-relaxed">
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg text-amber-800 mb-4">
                <strong>Please Note:</strong> By registering, you acknowledge understanding of the following points.
            </div>
            <p>
                <span className="font-semibold text-slate-900 block mb-1">Independent Initiative</span>
                StudiRad is an independent academic-support initiative. It does not represent or partner with any certification body or government institution.
            </p>
            <p>
                <span className="font-semibold text-slate-900 block mb-1">Educational Purpose Only</span>
                Assessments provided within this challenge are strictly for educational growth and self-evaluation. They are not sourced from any official exam body and do not guarantee success in external examinations.
            </p>
            <p>
                <span className="font-semibold text-slate-900 block mb-1">Scope of Support</span>
                StudiRad does not offer direct lectures, one-on-one mentorship, or tutoring during this 6-week program unless explicitly stated otherwise. The focus is on self-paced study and peer accountability.
            </p>
            <p>
                <span className="font-semibold text-slate-900 block mb-1">Payment Policy</span>
                Payments must be made only to the official account listed on StudiRad platforms. We are not liable for payments made to third parties.
            </p>
            <p className="text-red-600 font-medium pt-2 border-t border-slate-100">
                StudiRad is not liable for academic outcomes, career progression, or certification decisions resulting from participation in this challenge.
            </p>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
            <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-slate-200 transition-colors"
            >
            Close
            </button>
            <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 shadow-md hover:shadow-lg transition-all"
            >
            I Understand & Accept
            </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;