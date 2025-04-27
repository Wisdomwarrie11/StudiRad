// src/pages/Home.js

import React from "react";
import Footer from "../components/Home/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Home/Home.css'; 
import Benefits from "./Benefit";
import WhatWeDo from "./whatwedo";
import Testimonials from "./TutorTestimony";
import HowItWorksTuTor from "./Howitworks";
import FloatingCTA from "../components/Home/FloatingCTA";






const Home = () => {

  return (
    <div style={{backgroundColor: ''}}>
      
      {/* Hero Section */}

      <section style={{ marginTop: '50px', backgroundColor: '' }} className="hero d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 text-center mt-lg-0">
        <img src="tutorman.jpeg" alt="Hero" className="img-fluid hero-image" />
      </div>
      <div className="col-lg-6 text-left text-center text-lg-start">
        <h1 style={{ color: 'rgb(24, 59, 78)' }} className="display-4 hero-title fw-bold">
          Empower the Future of <span style={{ color: 'rgb(221, 168, 83)' }}>Radiography</span>
        </h1>
        <p
          style={{ backgroundColor: 'rgb(24, 59, 78)', color: 'white', paddingLeft: '10px', borderRadius: '10px' }}
          className="hero-subtitle"
        >
          <em><strong>Inspire, Educate, and Lead the next generation...</strong></em>
        </p>
        <a style={{ color: 'black' }} href="/tutorregistration">
          <button style={{ backgroundColor: 'rgb(221, 168, 83)', width: '220px', height: '50px'}} className="btn mt-3">
            <strong>Become a Tutor</strong>
          </button>
        </a>
      </div>
    </div>
  </div>
</section>

    

      {/* What We Do Section */}
      <section style={{backgroundColor: ''}} className=" text-center">
        <WhatWeDo/>
      </section>

      <section >
        <HowItWorksTuTor/>
      </section>

      <section style={{backgroundColor: '#edf6f9' }}>
        <Benefits/>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
       <Testimonials/>
      </section>

<FloatingCTA />


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
