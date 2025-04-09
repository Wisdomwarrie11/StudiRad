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


const Home = () => {

  return (
    <div>
      {/* Navbar (already in App.js) */}
      {/* Hero Section */}

      <section style={{marginTop: '5px'}} className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img  src="smiling.jpeg" alt="Hero" className="img-fluid hero-image" />
          </div>
          <div className="col-lg-6 text-left text-center text-lg-start">
            <h1 style={{color: 'rgb(24, 59, 78)'}} className="hero-title fw-bold">Welcome to Stud<span style={{color: 'rgb(221, 168, 83)'}}>i</span>Rad</h1>
            <p  style={{backgroundColor: 'rgb(24, 59, 78)', color: 'white', paddingLeft: '10px', borderRadius: '10px'}} className="hero-subtitle"><strong>Transfrom Your Radiography Journey...</strong></p>
            <a style={{color: 'black'}} href="/registration"><button style={{backgroundColor: 'rgb(221, 168, 83)', width: '200px'}} className="btn mt-3"><strong>Join a class</strong></button></a>
          </div>
          
        </div>
      </div>
    </section>
      
      {/* <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: "100vh",
          backgroundImage: 'url("/path-to-your-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url(rad.jpeg)" }} />
        <div className="text-white" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Welcome to StudiRad </h1>
          <p className="lead">Where Studying Radiography is fun!</p>
          <button style={{backgroundColor: 'rgb(219, 179, 33)'}} className="btn btn-lg mt-3">Get Started</button>
        </div>
      </div> */}

      {/* What We Do Section */}
      <section style={{backgroundColor: 'rgb(24, 59, 78)'}} className=" text-center">
        <WhatWeDo/>
      </section>

      <section>
      <Classes/>
      </section>

      <section >
        <HowItWorks/>
      </section>

      <section>
      <Topcourses/>
      </section>

       {/* Our Packages Section */}
       {/* <section className="py-5">
     <Packages/>
      </section> */}

      <section style={{backgroundColor: 'rgb(245, 238, 220)' }}>
        <Benefits/>
      </section>

     

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
       <Testimonials/>
      </section>

      <section>
  <InstructorSpotlight />
</section>

<section>
        <FunFact/>
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
