import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Schedule", href: "#schedule" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <FaGraduationCap className="text-indigo-400 text-2xl" />
          <span>StudiRad</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg hover:shadow-indigo-500/25"
          >
            Join Cohort
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="w-full text-center px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold rounded-xl transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Cohort
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;