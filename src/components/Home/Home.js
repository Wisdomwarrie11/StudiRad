// src/pages/Home.js

import React from "react";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
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
          marginTop: '20px',
          backgroundImage: 'url("mri.jpeg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          position: 'relative',
          color: 'white',
          minHeight: '100vh',   
          padding: '60px 20px' 
        }} 
        className="hero d-flex align-items-center"
      >
        <div className="overlay" 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(24, 59, 78, 0.5)' 
          }} 
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            {/* ✅ Fixed text alignment */}
            <div className="col-12 text-center">
              <h1 
                style={{ color: 'white', textAlign: 'center' }} 
                className="display-4 hero-title fw-bold"
              >
                Transforming your <span style={{color: 'white'}}>Radiography</span> Journey 
              </h1>

              <br />
              <a style={{color: 'black'}} href="/">
                <button 
                  style={{
                    backgroundColor: 'rgb(17, 31, 50)', 
                    width: '200px', 
                    height: '50px',
                    border: 'none',
                    borderRadius: '8px',
                    marginTop: '20px',
                    color: 'white'
                  }} 
                  className="btn"
                >
                  <h4><strong>Start Here</strong></h4>
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
      
      <section >
        <OneOnOneSection/>
      </section> 

      {/* <section>
        <Topcourses/>
        <CourseSearch/>
      </section> */}

      {/* <section>
        <HubSection/>
      </section> */}

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
