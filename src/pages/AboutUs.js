import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructorSpotlight from "../components/Home/InstructorSpotlight";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Radstudents.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}
      >
        <div style={{marginTop: '300px'}}>
          <h1 className="display-4 fw-bold">Meet StudiRad</h1>
          <p className="lead">Powering Radiography learning with innovation, access, and real connection.</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="mb-5 text-center fade-in">
          <h3 className="fw-bold">What We Stand For</h3>
          <p className="w-75 mx-auto text-muted fs-5">
            StudiRad is here to bridge the gap—by providing affordable courses, real-time classes, and one-on-one support to Radiography students.
            It’s where learners grow and tutors shine.
          </p>
        </div>

        <div className="row align-items-center mt-5 fade-in">
          <div className="col-md-6 text-center">
            <img style={{borderRadius: '10%'}} src='mission1.jpeg' alt="Mission Illustration" className="img-fluid w-50 move-up" />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Our Mission</h3>
            <p className="text-muted fs-5">
              To revolutionize radiography education in Nigeria by offering accessible, practical, and interactive learning experiences that prepare students for real-world challenges.
            </p>
          </div>
        </div>

        <div className="row align-items-center mt-5 fade-in flex-md-row-reverse">
          <div className="col-md-6 text-center">
            <img style={{borderRadius: '10%'}} src='vision.jpeg' alt="Vision Illustration" className="img-fluid w-50 move-up" />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Our Vision</h3>
            <p className="text-muted fs-5">
              To become the leading digital learning hub for radiography students in Africa, empowering every learner with tools, mentorship, and opportunities to succeed.
            </p>
          </div>
        </div>

        <div className="row align-items-center mt-5 fade-in">
          <div className="col-md-6 text-center">
            <img style={{borderRadius: '10%'}} src='collab.jpeg' alt="Collaboration Illustration" className="img-fluid w-50 move-up" />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Support & Collaboration</h3>
            <p className="text-muted fs-5">
              Are you a Radiography professional, educator, or organization that believes in this mission? Let’s work together to expand access to quality learning. You can support StudiRad by:
            </p>
            <ul className="list-unstyled">
              <li>🤝 Partnering as a tutor or mentor</li>
              <li>🎓 Donating learning materials or access</li>
              <li>💼 Sponsoring students or specific course series</li>
              <li>📣 Helping us spread the word</li>
            </ul>
            <p>
              <strong>Contact us:</strong> <a href="mailto:studirad@gmail.com">studirad@gmail.com</a>
            </p>
          </div>
        </div>

        <div style={{marginTop: '100px'}} className="fade-in">
          <h1 className="text-center mb-4 fw-semibold">What You’ll Get</h1>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm hover-glow">
                <div className="card-body">
                  <img src="course.png" alt="Courses" className="mb-3" width="40" />
                  <h5 className="card-title">On-demand Courses</h5>
                  <p className="card-text">
                    Structured, affordable, and created just for Radiography students.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm hover-glow">
                <div className="card-body">
                  <img src="online.png" alt="Live Classes" className="mb-3" width="40" />
                  <h5 className="card-title">Live Classes</h5>
                  <p className="card-text">
                    Join real-time interactive sessions with top-notch instructors.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm hover-glow">
                <div className="card-body">
                  <img src="support.png" alt="Support" className="mb-3" width="40" />
                  <h5 className="card-title">1-on-1 Support</h5>
                  <p className="card-text">
                    Request personal guidance for tough concepts or clarity sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section style={{marginTop: '20px'}}>
          <InstructorSpotlight />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
