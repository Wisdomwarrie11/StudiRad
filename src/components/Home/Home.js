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

const Home = () => {
  return (
    <div style={{backgroundColor: ''}}>
      
      {/* Hero Section */}
      <section 
  style={{
    marginTop: "40px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "60px 20px",
    background: "linear-gradient(190deg, rgb(59, 72, 90) 40%, #fcd34d 100%)",
    color: "white"
  }} 
  className="hero"
>
  <div className="container">
    <div className="row align-items-center">

      {/* ✅ Image Block */}
      <div className="col-lg-6 col-md-12 order-2 order-lg-2 text-center mt-4 mt-lg-0">
        <img 
          src="3in1.PNG" 
          alt="Radiography" 
          style={{
            width: "100%",
            maxheight: "400px",
            maxWidth: "400px",
            borderRadius: "20px",
          }}
        />
      </div>

      {/* ✅ Text Block */}
      <div className="col-lg-6 col-md-12 order-1 order-lg-1 text-lg-start text-center">
        <h1 className="fw-bold" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
          Transforming your <span style={{ color: "#fcd34d" }}>Radiography</span> Journey
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", maxWidth: "500px" }}>
          Learn, connect, and grow with experts guiding your professional path.
        </p>

        <a href="/" style={{ textDecoration: "none" }}>
          <button 
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#fcd34d",
              border: "none",
              borderRadius: "50px",
              color: "#111827",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
              width: "auto"  //
            }}
          >
            Start Here
          </button>
        </a>
      </div>

    </div>
  </div>
</section>




      {/* What We Do Section */}
      <section id="about" style={{backgroundColor: ''}} className=" text-center">
        <WhatWeDo/>
      </section>

      <section id="classes">
        <Classes/>
      </section>

      <section>
        <USSclass/>
      </section>

      <section >
        <HowItWorks/>
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
