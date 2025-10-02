import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar";
import ContactPage from "components/Home/contact";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/Login";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import TutorHero from "TutorSide/TutorHome";
import TutorRegistrationPage from "TutorSide/TutorRegistration";
import TutorLogin from "TutorSide/TutorLogin";
import TutorDashboard from "TutorSide/TutorDashboard";
import AboutUs from "pages/AboutUs";
import Tutorial from "components/Home/Tutorials";
import activities from "pages/Activities"
import Activities from "pages/Activities";
import RegistrationForm from "pages/WebinarRegistration";
import RegistrationsDashboard from "pages/WebinarDashboard";
import Classes from "components/classes/Classes"
import ClassDetails from "components/classes/ClassInfo"
import XRayPage from "components/classes/X-ray";
import MRIPage from "components/classes/MRIPage";
import CTPage from "components/classes/CTPage";
import UltrasoundPage from "components/classes/USSPage";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, 
    });
  }, []);
  return (
    <Router>
    
       <Navbar />
       
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<ClassDetails />} />
        <Route path="/" element={<Classes />} />
        <Route path="/x-ray" element={<XRayPage />} />
        <Route path="/mri" element={<MRIPage />} />
        <Route path="/ct" element={<CTPage />} />
        <Route path="/ultrasound" element={<UltrasoundPage />} />
        <Route path="/studentregistration" element={<RegistrationPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/tutordashboard" element={<TutorDashboard />} />  
        <Route path="/studentlogin" element={<LoginPage />} />  
        <Route path="/tutorhome" element={<TutorHero />} /> 
        <Route path="/tutorregistration" element={<TutorRegistrationPage />} /> 
        <Route path="/tutorlogin" element={<TutorLogin />} /> 
        <Route path="/tutordashboard" element={<TutorDashboard />} /> 
        <Route path="/tutorial" element={<Tutorial/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/webinarRegistration" element={<RegistrationForm/>} />
        <Route path="/webdash" element={<RegistrationsDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
