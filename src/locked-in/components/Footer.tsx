import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGraduationCap } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <FaGraduationCap className="text-indigo-500 text-2xl" />
            <span>StudiRad</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} StudiRad. All rights reserved.</p>
            <p className="mt-2 text-slate-600">This program is an independent initiative and is not affiliated with any specific certification body.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;