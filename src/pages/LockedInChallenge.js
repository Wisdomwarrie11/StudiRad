import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaBook, FaUserCheck, FaClipboardCheck, FaChartLine, FaAward, FaClock } from "react-icons/fa";
import "./LockedInChallenge.css";

const LockedInChallenge = () => {
  const howItWorks = [
    { icon: <FaBook size={30} />, title: "Weekly Study Scope", description: "Receive structured weekly study topics." },
    { icon: <FaClock size={30} />, title: "Self-Paced Learning", description: "Study independently at your own pace." },
    { icon: <FaClipboardCheck size={30} />, title: "Weekly Assessments", description: "Complete graded weekly assessments." },
    { icon: <FaChartLine size={30} />, title: "Track Growth", description: "Monitor your progress privately." },
    { icon: <FaAward size={30} />, title: "Final Evaluation", description: "Compete in Week 6 final assessment for rewards." },
    { icon: <FaUserCheck size={30} />, title: "Recognition & Reward", description: "Top scorers get recognition and prizes." },
  ];

  const benefits = [
    "Build intermediate & advanced radiography knowledge",
    "Enhance self-discipline and study habits",
    "Benchmark knowledge anonymously",
    "Prepare for global standard competency areas",
    "Stay engaged and motivated throughout the program",
  ];

  const courses = [
    { week: "Week 1", course: "Advanced Radiographic Physics & Imaging Principles", topics: "X-ray interactions, Digital image formation & optimization, Patient dose management", alignment: "Aligned with globally recommended radiography physics knowledge" },
    { week: "Week 2", course: "Advanced Anatomy & Cross-Sectional Imaging", topics: "Cross-sectional anatomy, Pathological variants, Interventional anatomy", alignment: "Aligned with international imaging anatomy standards" },
    { week: "Week 3", course: "Complex Procedures & Positioning", topics: "Trauma imaging, Contrast studies, Pediatric/geriatric positioning", alignment: "Aligned with globally recommended procedural competency" },
    { week: "Week 4", course: "Advanced Radiation Safety & Protection", topics: "ALARA principles, Occupational monitoring, Regulatory compliance", alignment: "Aligned with international radiation safety standards" },
    { week: "Week 5", course: "Image Evaluation & Quality Assurance", topics: "Image quality metrics, Artifact troubleshooting, QA protocols", alignment: "Aligned with international QA practices" },
    { week: "Week 6", course: "Specialized & Emerging Modalities", topics: "Advanced CT, MRI sequences, AI-assisted imaging", alignment: "Aligned with emerging global radiography trends" },
  ];

  return (
    <div style={{marginTop: "50px"}} className="lockedin-page">
      {/* Hero */}
      <section className="hero-section text-center text-light">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">StudiRad Locked-In Challenge™</h1>
          <p className="lead mt-3">6 Weeks • Elite Focus • Relentless Growth</p>
          <a href="#register" className="btn hero-btn btn-lg mt-4">Join The Next Cohort</a>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section py-5 bg-light">
        <div className="container">
          <h2 style={{color: "#001f36"}} className="section-title text-center mb-5">How It Works</h2>
          <div className="row g-4">
            {howItWorks.map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="card h-100 text-center shadow-sm border-0 py-4">
                  <div className="card-icon mb-3">{item.icon}</div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section py-5 text-center text-light" style={{ background: "#0c4da2" }}>
        <div className="container">
          <h2 className="section-title mb-4">Benefits of Joining</h2>
          <ul className="list-unstyled">
            {benefits.map((benefit, index) => (
              <li key={index} className="mb-2 fs-5"><FaUserCheck className="me-2 text-warning"/> {benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Courses Table */}
      <section className="courses-section py-5">
        <div className="container">
          <h2 style={{color: "#001f36"}} className="section-title text-center mb-4">Course Outline & Topics</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-dark text-center">
                <tr>
                  <th>Week</th>
                  <th>Course</th>
                  <th>Topics</th>
                  <th>Alignment with International Standards</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, idx) => (
                  <tr key={idx}>
                    <td className="text-center">{c.week}</td>
                    <td>{c.course}</td>
                    <td>{c.topics}</td>
                    <td>{c.alignment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="register" className="cta-section text-center text-light py-5" style={{ background: "#001f36" }}>
        <h3 className="fw-bold">Ready to Stay Locked-In?</h3>
        <p className="mt-2">Limited Slots • Serious Minds Only</p>
        <a href="YOUR_REGISTRATION_LINK_HERE" className="btn hero-btn btn-lg mt-3">Register Now</a>
      </section>
    </div>
  );
};

export default LockedInChallenge;
