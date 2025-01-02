// src/pages/Home.js

import React from "react";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';  // Custom styles for extra customizations
import Benefits from "../components/Benefits";
import WhatWeDo from "../components/whatwedo";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";


const Home = () => {
  return (
    <div>
      {/* Navbar (already in App.js) */}
      {/* Hero Section */}
      <div
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
          <h1 className="display-4 fw-bold">Welcome to LearnRad </h1>
          <p className="lead">Where learning Radiography is fun!</p>
          <button style={{backgroundColor: 'rgb(219, 179, 33)'}} className="btn btn-lg mt-3">Get Started</button>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="py-5 bg-light text-center">
        <WhatWeDo/>
      </section>

      <section>
        <Benefits/>
      </section>

      {/* Our Packages Section */}
      <section className="py-5">
     <Packages/>
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
