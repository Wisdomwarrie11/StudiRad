// src/pages/Home.js

import React from "react";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import Benefits from "../components/Benefits";
import WhatWeDo from "../components/whatwedo";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";
import Courses from '../components/Courses'
import Topcourses from "components/topcourses";
import Classes from '../components/Classes'


const Home = () => {

  return (
    <div>
      {/* Navbar (already in App.js) */}
      {/* Hero Section */}

      <section style={{backgroundColor: 'white'}} className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img src="Frame.png" alt="Hero" className="img-fluid hero-image" />
          </div>
          <div className="col-lg-6 text-left text-center text-lg-start">
            <h1 className="hero-title display-4 fw-bold">Welcome to Stud<span style={{color: 'rgb(227, 137, 2)'}}>i</span>Rad</h1>
            <p style={{backgroundColor: 'black', color: 'white', paddingLeft: '10px'}} className="hero-subtitle"><strong>We make your medical Journey worthwhile...</strong></p>
            <a style={{color: 'black'}} href="/registration"><button style={{backgroundColor: 'rgb(246, 187, 97)'}} className="btn mt-3"><strong>Get Started</strong></button></a>
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
      <section className=" bg-light text-center">
        <WhatWeDo/>
      </section>

      <section>
      <Classes/>
      </section>

      <section>
      <Topcourses/>
      </section>

       {/* Our Packages Section */}
       <section className="py-5">
     <Packages/>
      </section>

      <section>
        <Benefits/>
      </section>

     

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
       <Testimonials/>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
