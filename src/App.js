// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import ProfileSegment from "./components/Dashboard/ProfileSegment";
import SavedRecordings from "./components/Dashboard/SavedRecordings";
import "./components/Dashboard/dashboard.css"; // For the styles
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import YourPackages from './components/Dashboard/StudentDashboard';
import LiveTutorials from "components/Dashboard/LiveTutorial";
import CourseOutline from "components/Dashboard/CourseOutlinePage";
import SubscriptionPage from "components/Dashboard/SubscriptionPage";
import Silver from "components/Dashboard/Silver";
import Bronze from "components/Dashboard/Bronze";
import Gold from "components/Dashboard/gold";
import Diamond from "components/Dashboard/Diamond";
import RegistrationPage from "components/RegistrationPage";



function App() {
  return (
    
    <Router>
       <Navbar />
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationPage/>} />

        <Route path="/profile" element={<ProfileSegment />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/recordings" element={<SavedRecordings />} />
        <Route path="/packages" element={<YourPackages />} />

        <Route path="/livetutorials" element={<LiveTutorials />} />
        <Route path="/courses" element={<CourseOutline />} />
        <Route path="/subscribe" element={<SubscriptionPage />} />
        <Route path="/gold" element={<Gold/>} />

<Route path="/bronze" element={<Bronze />} />
<Route path="/diamond" element={<Diamond />} />
<Route path="/silver" element={<Silver />} />
  
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
