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
      <section style={{
          marginTop: "0px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "60px 20px",
          background: "linear-gradient(190deg, #243b55 40%, rgb(213, 244, 247) 70%, #fcd34d 100%)",
          color: "white"
        }} ><div id='intro' className="container justify-content-center" style={{paddingTop: '50px'}}>
        <div className="row align-items-center ">
            <div className="col text-center md-mx-5 text-lg-start text-center">
            <h1 className="fw-bold" style={{ fontSize: "3rem", lineHeight: "1.2"}}>
          Transforming your <span style={{ color: "#fcd34d" }}>Radiography</span> Journey
        </h1>

        <p style={{ marginBottom: "100px", fontSize: "18px", maxWidth: "500px" }}>
          Learn, connect, and grow with experts guiding your professional path.
        </p>
      
            </div>
            <div className="col-md-5 text-center text-md-start">
            <img className= 'img-fluid' src= "3in1.png" alt="" />
            <a href="/" style={{ textDecoration: "none" }}>
          <button 
            style={{
              marginTop: "20px", padding: "10px 50px", backgroundColor: "#fcd34d",border: "none",borderRadius: "10px",
              color: "#111827",fontWeight: "700",fontSize: "20px",cursor: "pointer", width: "auto"
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
