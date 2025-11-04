import { testFirestoreConnection } from "./testFirestore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar";
import ContactPage from "components/Home/contact";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/LoginPage";
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
import HomeApp from "components/Home/Home1";
import Internship from "components/Home/Internship";
import Jobs from "components/Home/Jobs";
import Scholarship from "components/Home/Scholarship";
import Communities from "pages/community";
import BlogPage from "pages/BlogPage";
import AdminBlogPage from "pages/AdminBlogPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminMaterialsPage from "pages/AdminMaterialPage";
import MaterialsPage from "pages/MaterialsPage";
import AdminDashboard from "pages/AdminDashboard";
import VerifyOtpPage from "pages/VerifyOTPPage";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, 
    });
  }, []);

  useEffect(() => {
    testFirestoreConnection();
  }, []);
  return (
    <Router>
    
       <Navbar />
       
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/Home" element={<HomeApp />} />
        <Route path="/course" element={<ClassDetails />} />
        <Route path="/" element={<Classes />} />
        <Route path="/x-ray" element={<XRayPage />} />
        <Route path="/mri" element={<MRIPage />} />
        <Route path="/ct" element={<CTPage />} />
        <Route path="/ultrasound" element={<UltrasoundPage />} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/verify-otp" element={<VerifyOtpPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/tutordashboard" element={<TutorDashboard />} />  
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/tutorhome" element={<TutorHero />} /> 
        <Route path="/tutorregistration" element={<TutorRegistrationPage />} /> 
        <Route path="/tutorlogin" element={<TutorLogin />} /> 
        <Route path="/tutordashboard" element={<TutorDashboard />} /> 
        <Route path="/tutorial" element={<Tutorial/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/webinarRegistration" element={<RegistrationForm/>} />
        <Route path="/webdash" element={<RegistrationsDashboard/>} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/admin-blog" element={<AdminBlogPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/adminblog" element={<AdminBlogPage />} />
        <Route path="/adminmaterials" element={<AdminMaterialsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/admindashboard" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>}/>
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/scholarship" element={<Scholarship />}
         />
      </Routes>
    </Router>
  );
}

export default App;
