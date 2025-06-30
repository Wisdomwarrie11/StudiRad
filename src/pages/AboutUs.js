import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className="about-us container py-5">
      <div className="text-center mb-5 fade-in">
        <h1 className="display-4 fw-bold gradient-text slide-in">Meet StudiRad</h1>
        <p className="lead text-muted zoom-in">Powering Radiography learning with innovation, access, and real connection.</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 fade-in-left">
          <h3 className="fw-semibold mb-3">Why StudiRad?</h3>
          <ul className="feature-list">
            <li>🎯 Few universities offer Radiography in Nigeria</li>
            <li>📉 Students lack access to real-time support</li>
            <li>🚫 Tutors are disconnected from those who need them</li>
          </ul>
        </div>
        <div className="col-md-6 text-center fade-in-right">
          <img src="/images/about-illustration.png" alt="Students and Tutors" className="img-fluid rounded-4 shadow move-up" />
        </div>
      </div>

      <div className="mb-5 text-center fade-in">
        <h3 className="fw-bold">What We Stand For</h3>
        <p className="w-75 mx-auto text-muted fs-5">
          StudiRad is here to bridge the gap—by providing affordable courses, real-time classes, and one-on-one support to Radiography students. It’s where learners grow and tutors shine.
        </p>
      </div>

      <div className="fade-in">
        <h3 className="text-center mb-4 fw-semibold">What You’ll Get</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm hover-glow">
              <div className="card-body">
                <img src="/images/icon-courses.svg" alt="Courses" className="mb-3" width="40" />
                <h5 className="card-title">On-demand Courses</h5>
                <p className="card-text">Structured, affordable, and created just for Radiography students.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm hover-glow">
              <div className="card-body">
                <img src="/images/icon-live.svg" alt="Live Classes" className="mb-3" width="40" />
                <h5 className="card-title">Live Classes</h5>
                <p className="card-text">Join real-time interactive sessions with top-notch instructors.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm hover-glow">
              <div className="card-body">
                <img src="/images/icon-support.svg" alt="Support" className="mb-3" width="40" />
                <h5 className="card-title">1-on-1 Support</h5>
                <p className="card-text">Request personal guidance for tough concepts or clarity sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
