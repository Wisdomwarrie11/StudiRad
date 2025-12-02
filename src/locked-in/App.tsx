import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Curriculum from "./components/Curriculum";
import Logistics from "./components/Logistics";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";

const App: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
        <Curriculum />
        <Logistics onOpenDisclaimer={() => setShowDisclaimer(true)} />
      </main>

      <Footer />

      <DisclaimerModal 
        isOpen={showDisclaimer} 
        onClose={() => setShowDisclaimer(false)} 
      />
    </div>
  );
};

export default App;