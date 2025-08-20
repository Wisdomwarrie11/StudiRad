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
    backgroundImage: 'url("radioroom.jpeg")',
    backgroundSize: 'cover',
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
      <div className="col-lg-12 text-left text-center text-lg-start">
        <h1 style={{color: 'white'}} className="display-4 hero-title fw-bold">
          Transform your <span style={{color: 'white'}}>Radiography</span> Journey 
        </h1>
        <p 
          style={{
            backgroundColor: 'rgb(24, 59, 78)', 
            color: 'white', 
            padding: '12px 18px', 
            borderRadius: '10px',
            display: 'inline-block',
            marginTop: '20px'
          }} 
          className="hero-subtitle"
        >
          <em><strong>Simplifying every step of the way...</strong></em>
        </p>
        <br />
        <a style={{color: 'black'}} href="/subscribe/">
          <button 
            style={{
              backgroundColor: 'rgb(221, 168, 83)', 
              width: '200px', 
              height: '50px',
              border: 'none',
              borderRadius: '8px',
              marginTop: '20px'
            }} 
            className="btn"
          >
            <strong>Start your Journey</strong>
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


    
{/* 
      <section>
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
