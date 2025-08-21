// src/App.js


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import ContactPage from "components/Home/contact";
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/Login";
import CourseDetails from "components/classes/classDetails";
import { CreditCardPayment, PayPalPayment, BankTransferPayment } from "components/Subscriptions/paymentpage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import PaymentFailure from "components/Subscriptions/PaymentFailure";
import PaymentSuccess from "components/Subscriptions/PaymentSucess";
import ConfirmationPage from "components/Subscriptions/ConfirmationPage";
import MindfulMomentPage from "components/Home/Mindful";
import MusicTherapyPage from "components/Home/Music";
import GratitudeNotesPage from "components/Home/gratitude";
import VerificationPage from "pages/VerificationPage";
import TutorHero from "TutorSide/TutorHome";
import TutorRegistrationPage from "TutorSide/TutorRegistration";
import TutorLogin from "TutorSide/TutorLogin";
import TutorDashboard from "TutorSide/TutorDashboard";
import AddCourse from "components/classes/AddCourse";
import SubscribeForm from "components/classes/SubscribeForm";
import AboutUs from "pages/AboutUs";
import Tutorial from "components/Home/Tutorials";
import OurClasses from "components/classes/OurClasses";
import activities from "pages/Activities"
import Activities from "pages/Activities";
import RegistrationForm from "pages/WebinarRegistration";
import RegistrationsDashboard from "pages/WebinarDashboard";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, 
    });
  }, []);
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> 
    <Router>
    
       <Navbar />
       
      <Routes>  
      <Route path="/verify/:token" element={<VerificationPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/studentregistration" element={<RegistrationPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/tutordashboard" element={<TutorDashboard />} />  
        <Route path="/studentlogin" element={<LoginPage />} />  
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/subscribe/:id" element={<SubscribeForm />} />
        <Route path="/payment/credit-card/:id" element={<CreditCardPayment />} />
        <Route path="/payment/paypal/:id" element={<PayPalPayment />} />
        <Route path="/payment/bank-transfer/:id" element={<BankTransferPayment />} />
        <Route path="/subscribe/" element={<SubscribeForm />} />
        <Route path="/payment/bank-transfer/:id" element={<BankTransferPayment />} />
        <Route path="/payment/credit-card/:id" element={<CreditCardPayment />} />
        <Route path="/payment/paypal/:id" element={<PayPalPayment />} />
        <Route path="/payment-success/:id" element={<PaymentSuccess />} />
        <Route path="/payment-failure/:id" element={<PaymentFailure />} />
        <Route path="/confirmation/:paymentMethod/:id" element={<ConfirmationPage />} />
        <Route path="/Mindful" element={<MindfulMomentPage />} />
        <Route path="/Music" element={<MusicTherapyPage />} /> 
        <Route path="/gratitude" element={<GratitudeNotesPage />} /> 
        <Route path="/tutorhome" element={<TutorHero />} /> 
        <Route path="/tutorregistration" element={<TutorRegistrationPage />} /> 
        <Route path="/tutorlogin" element={<TutorLogin />} /> 
        <Route path="/tutordashboard" element={<TutorDashboard />} /> 
        <Route path="/addcourse" element={<AddCourse/>} /> 
        <Route path="/tutorial" element={<Tutorial/>} />
        <Route path="/classes" element={<OurClasses/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/webinarRegistration" element={<RegistrationForm/>} />
        <Route path="/webdash" element={<RegistrationsDashboard/>} />


      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
