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
import InstructorSpotlight from "./InstructorSpotlight";
import NewsletterSignup from "./NewsletterSignup";
import FloatingCTA from "./FloatingCTA";
import FunFact from "components/Home/FunFact";
import CourseSearch from "./searchbar";
import WeeklyQuiz from "./WeeklyQuiz";
import AnimatedStats from "components/Home/Stats";
import DiscountTimer from "DiscountTimer";
import HubSection from "./Hub";
import WellnessSection from "./Wellness";
import OneOnOneSection from "./onetutorials";
import USSclass from '../classes/USSclass'




const Home = () => {

  return (
    <div style={{backgroundColor: ''}}>
      
      {/* Hero Section */}

      <section style={{marginTop: '20px', backgroundColor: ''}} className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 text-center mt-lg-0">
            <img  src="studentgirl.png" alt="Hero" className="img-fluid hero-image" /><hr style={{width: '100%', height: '5px', backgroundColor: 'rgb(24, 59, 78)'}}/>
          </div>
          <div className="col-lg-6 text-left text-center text-lg-start">
            <h1 style={{color: 'rgb(24, 59, 78)'}} className="display-4 hero-title fw-bold">Transform your <span style={{color: 'rgb(221, 168, 83)' }}>Radiography</span> Journey </h1>
            <p  style={{backgroundColor: 'rgb(24, 59, 78)', color: 'white', paddingLeft: '10px', borderRadius: '10px'}} className="hero-subtitle"><em><strong>Simplifying every step of the way...</strong></em></p>
            <a style={{color: 'black'}} href="/subscribe/"><button style={{backgroundColor: 'rgb(221, 168, 83)', width: '200px', height: '50px'}} className="btn mt-3"><strong>Start your Journey</strong></button></a>
          </div>
        </div>
      </div>
    </section>

      {/* What We Do Section */}
      <section style={{backgroundColor: ''}} className=" text-center">
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
      </section> */}
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
        <WellnessSection/>
      </section>

      <section>
  <InstructorSpotlight />
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
