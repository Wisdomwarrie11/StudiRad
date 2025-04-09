// src/App.js


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import ContactPage from "components/Home/contact";
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import TutorDashboard from "components/Dashboard/TutorDashboard";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/Login";
import CourseDetails from "components/classes/classDetails";
import Subscribe from "components/Subscriptions/subscription";
import { CreditCardPayment, PayPalPayment, BankTransferPayment } from "components/Subscriptions/paymentpage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import PaymentFailure from "components/Subscriptions/PaymentFailure";
import PaymentSuccess from "components/Subscriptions/PaymentSucess";
import ConfirmationPage from "components/Subscriptions/ConfirmationPage";


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
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/tutordashboard" element={<TutorDashboard />} />  
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/subscribe/:id" element={<Subscribe />} />
        <Route path="/payment/credit-card/:id" element={<CreditCardPayment />} />
        <Route path="/payment/paypal/:id" element={<PayPalPayment />} />
        <Route path="/payment/bank-transfer/:id" element={<BankTransferPayment />} />
        <Route path="/subscribe/:id" element={<Subscribe />} />
        <Route path="/subscribe/:id" element={<Subscribe />} />
        <Route path="/payment/bank-transfer/:id" element={<BankTransferPayment />} />
        <Route path="/payment/credit-card/:id" element={<CreditCardPayment />} />
        <Route path="/payment/paypal/:id" element={<PayPalPayment />} />
        <Route path="/payment-success/:id" element={<PaymentSuccess />} />
        <Route path="/payment-failure/:id" element={<PaymentFailure />} />
        <Route path="/confirmation/:paymentMethod/:id" element={<ConfirmationPage />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
