import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructorSpotlight from "../components/Home/InstructorSpotlight";


const AboutUs = () => {
  return (
    <div style={{marginTop: '100px'}} className="about-us container py-5">
      <div className="text-center mb-5 fade-in">
        <h1 style={{color: 'rgb(24, 59, 78)'}} className="display-4 fw-bold gradient-text slide-in">Meet StudiRad</h1>
        <p className="lead text-muted zoom-in">
          Powering Radiography learning with innovation, access, and real connection.
        </p>
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
          <img
            src="Radstudents.jpg"
            alt="Students and Tutors"
            className="img-fluid rounded-4 shadow move-up"
            style={{height: '400px', width: '500px'}}
          />
        </div>
      </div>

      <div className="mb-5 text-center fade-in">
        <h3 className="fw-bold">What We Stand For</h3>
        <p className="w-75 mx-auto text-muted fs-5">
          StudiRad is here to bridge the gap—by providing affordable courses, real-time classes, and one-on-one support to Radiography students.
          It’s where learners grow and tutors shine.
        </p>
      </div>

      {/* <div className="text-center mb-5 row g-3 justify-content-center">
        <div className="col-md-4 col-10">
          <img src="Monica.jpg" alt="Radiography Student Monica" className="img-fluid rounded-4 shadow w-100 h-auto" style={{ maxHeight: '350px' }} />
        </div>
        <div className="col-md-4 col-10">
          <img src="Pecky.jpg" alt="Radiography Student Pecky" className="img-fluid rounded-4 shadow w-100 h-auto" style={{ maxHeight: '350px' }} />
        </div>
        <div className="col-md-4 col-10">
          <img src="Radstudents.jpg" alt="Radiography Students Group" className="img-fluid rounded-4 shadow w-100 h-auto" style={{ maxHeight: '350px' }} />
        </div>
      </div> */}

      <div className="fade-in">
        <h3 className="text-center mb-4 fw-semibold">What You’ll Get</h3>
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

      <div className="row align-items-center mt-5 fade-in">
        <div className="col-md-6 text-center">
          <img style={{borderRadius: '10%'}} src= 'mission1.jpeg' alt="Mission Illustration" className="img-fluid w-50 move-up" />
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
          <img style={{borderRadius: '10%'}} src= 'collab.jpeg' alt="Collaboration Illustration" className="img-fluid w-50 move-up" />
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
        <section>
  <InstructorSpotlight />
</section>

      </div>
    </div>
  );
};

export default AboutUs;