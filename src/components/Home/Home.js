// src/pages/Home.js

import React from "react";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import './HeroSection.css'
import Benefits from "./Benefits";
import WhatWeDo from "./whatwedo";
import Testimonials from "./Testimonials";
import Topcourses from "components/Home/topcourses";
import Classes from '../classes/Classes'
import HowItWorks from "./HowItWorks";
import NewsletterSignup from "./NewsletterSignup";
import FloatingCTA from "./FloatingCTA";
import WeeklyQuiz from "./WeeklyQuiz";
import AnimatedStats from "components/Home/Stats";
import HubSection from "./Hub";
import OneOnOneSection from "./onetutorials";
import USSclass from '../classes/USSclass'
import { Book, UserCheck, Monitor, Briefcase } from "lucide-react";

const Home = () => {

  const activities = [
    {
      icon: <Book size={60} className="p-2 rounded" />,
      title: "Expert-Led Courses",
      description:
        "Structured courses designed by experienced radiographers to ensure comprehensive learning.",
    },
    {
      icon: <UserCheck size={60} className="p-2 rounded" />,
      title: "Personalized Mentorship",
      description:
        "Students get one-on-one guidance from industry professionals.",
    },
    {
      icon: <Monitor size={60} className="p-2 rounded" />,
      title: "Interactive Learning Tools",
      description:
        "Quizzes and real-time assessments to enhance knowledge retention.",
    },
    {
      icon: <Briefcase size={60} className="p-2 rounded" />,
      title: "Opportunities",
      description:
        "Access internships, research collaborations, and job placements to advance your radiography career.",
    },
  ];
  return (
    <div style={{backgroundColor: ''}} >
      
      {/* Hero Section */}
      <section
      style={{
        marginTop: "100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "60px 20px",
        backgroundImage: `linear-gradient(rgba(12, 45, 60, 0.6), rgba(0, 0, 0, 0.6)), url('mri.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
      className="hero"
    >
      <div className="container text-center">
        {/* Headline */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw-bold" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
              Transforming your{" "}
              <span style={{ color: "#dd9a2e" }}>Radiography</span> Journey
            </h1>
            <h3 style={{ marginTop: "20px", maxWidth: "1000px", margin: "0 auto" }}>
              Learn, connect, and grow...
            </h3>
          </div>
        </div>

        {/* Independent Transparent Cards */}
        <div style={{marginTop: '100px'}} className="row g-4">
          <h1 className="fw-bold">What we have for you</h1>
          {activities.map((activity, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-3 mb-4">
              <div className={`hero-card card border-0 p-4 text-center hero-shade-${index}`}>
                <div className="mb-3">{activity.icon}</div>
                <h5 className="fw-bold">{activity.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    
      <section >
            <HowItWorks/>
      </section>
      <section id="classes">
        <Classes/>
      </section>

      <section>
        <USSclass/>
      </section>

        {/* What We Do Section */}
      <section id="about"  className=" text-center">
        <WhatWeDo/>
      </section>

     
    
      <section style={{backgroundColor: '#edf6f9' }}>
        <Benefits/>
      </section>
      
      {/* <section >
        <OneOnOneSection/>
      </section>  */}

      {/* <section>
        <Topcourses/>
        <CourseSearch/>
      </section> */}

      <section>
        <HubSection/>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <Testimonials/>
      </section>

      <section style={{ }} className="container ">
        <AnimatedStats/>
      </section>

      <section>
        <WeeklyQuiz/>
      </section>
      
      <section>
        <NewsletterSignup />
      </section>

      <FloatingCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
