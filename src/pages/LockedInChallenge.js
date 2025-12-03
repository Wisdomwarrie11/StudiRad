import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  FaBook, FaUserCheck, FaClipboardCheck, FaChartLine, FaAward, FaClock, FaFlask, FaXRay, FaRadiation, FaMicroscope, FaBrain, FaRobot 
} from "react-icons/fa";
import "./LockedInChallenge.css";

const LockedInChallenge = () => {
  const howItWorks = [
    { icon: <FaBook size={30} />, title: "Weekly Study Scope", details: `• Assigned weekly study areas\n• Access resources and videos\n• Focus on essential topics` },
    { icon: <FaClock size={30} />, title: "Self-Paced Learning", details: `• Learn at your own pace\n• Access anytime\n• Review topics multiple times` },
    { icon: <FaClipboardCheck size={30} />, title: "Weekly Assessments", details: `• Complete weekly assessments\n• Track progress\n• Private grading` },
    { icon: <FaChartLine size={30} />, title: "Track Growth", details: `• Visualize performance trends\n• Identify strengths and weaknesses\n• Compare with past attempts` },
    { icon: <FaAward size={30} />, title: "Final Evaluation", details: `• Final cumulative assessment\n• Identify gaps\n• High performers may get rewards` },
    { icon: <FaUserCheck size={30} />, title: "Recognition & Reward", details: `• Earn recognition\n• Receive rewards\n• Celebrate your learning journey` },
  ];

  const benefits = [
    "Build intermediate & advanced radiography knowledge",
    "Enhance self-discipline and study habits",
    "Benchmark knowledge anonymously",
    "Prepare for global standard competency areas",
    "Stay engaged and motivated throughout the program",
  ];

  const courses = [
    { 
      week: "Week 1", 
      course: "Advanced Radiographic Physics & Imaging Principles", 
      topics: "X-ray interactions, Digital image formation & optimization, Patient dose management", 
      alignment: "Aligned with globally recommended radiography physics knowledge",
      icon: <FaFlask />
    },
    { 
      week: "Week 2", 
      course: "Advanced Anatomy & Cross-Sectional Imaging", 
      topics: "Cross-sectional anatomy, Pathological variants, Interventional anatomy", 
      alignment: "Aligned with international imaging anatomy standards",
      icon: <FaBrain />
    },
    { 
      week: "Week 3", 
      course: "Complex Procedures & Positioning", 
      topics: "Trauma imaging, Contrast studies, Pediatric/geriatric positioning", 
      alignment: "Aligned with globally recommended procedural competency",
      icon: <FaXRay />
    },
    { 
      week: "Week 4", 
      course: "Advanced Radiation Safety & Protection", 
      topics: "ALARA principles, Occupational monitoring, Regulatory compliance", 
      alignment: "Aligned with international radiation safety standards",
      icon: <FaRadiation />
    },
    { 
      week: "Week 5", 
      course: "Image Evaluation & Quality Assurance", 
      topics: "Image quality metrics, Artifact troubleshooting, QA protocols", 
      alignment: "Aligned with international QA practices",
      icon: <FaMicroscope />
    },
    { 
      week: "Week 6", 
      course: "Specialized & Emerging Modalities", 
      topics: "Advanced CT, MRI sequences, AI-assisted imaging", 
      alignment: "Aligned with emerging global radiography trends",
      icon: <FaRobot />
    },
  ];

  return (
    <div style={{ marginTop: "50px" }} className="lockedin-page">

      {/* Hero */}
      <section className="hero-section text-center text-light">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">StudiRad Locked-In Challenge™</h1>
          <strong><p className="lead mt-3"><strong>6 Weeks • 6 Courses • 6 Assessments</strong></p></strong>
          <a href="https://forms.gle/8Za2DaYb8tnGFgqo8" className="btn hero-btn btn-lg mt-4">Join The Next Cohort</a>
        </div>
      </section>

      {/* How It Works Flip Cards */}
      <section className="how-section py-5 bg-light">
        <div className="container">
          <h2 style={{ color: "#001f36" }} className="section-title text-center mb-5">How It Works</h2>
          <div className="row g-4">
            {howItWorks.map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="flip-card">
                  <div className="flip-card-inner" id={`flip-card-${index}`}>
                    {/* Front */}
                    <div className="flip-card-front h-100 d-flex flex-column justify-content-center align-items-center shadow-sm border-0 py-4">
                      <div className="card-icon mb-3">{item.icon}</div>
                      <h5 className="card-title">{item.title}</h5>
                      <button 
                      style={{background: "#001f36", color: "white"}}
                        className="btn mt-3 w-auto"
                        onClick={() => document.getElementById(`flip-card-${index}`).classList.toggle("flipped")}
                      >
                        See More
                      </button>
                    </div>
                    {/* Back */}
                    <div className="flip-card-back h-100 d-flex flex-column justify-content-center align-items-center shadow-sm border-0 py-4">
                      <p className="card-text text-center">{item.details}</p>
                      <button 
                        className="btn btn-outline-light mt-3 w-auto"
                        onClick={() => document.getElementById(`flip-card-${index}`).classList.remove("flipped")}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Benefits */}
      <section className="benefits-section py-5 text-center text-light">
        <div className="container">
          <h2 className="section-title mb-4">Benefits of Joining</h2>
          <div className="row justify-content-center">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="benefit-card p-3 rounded shadow-sm d-flex align-items-center">
                  <FaUserCheck className="me-2 text-warning fs-4"/>
                  <span>{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Courses Accordion */}
      <section className="courses-section py-5">
        <div className="container">
          <h2 style={{ color: "#001f36" }} className="section-title text-center mb-4">Course Outline & Topics</h2>
          <div className="accordion" id="coursesAccordion">
            {courses.map((c, idx) => (
              <div className="accordion-item mb-3" key={idx}>
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                    aria-expanded="false"
                    aria-controls={`collapse${idx}`}
                  >
                    <span className="me-2">{c.icon}</span> {c.week}: {c.course}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${idx}`}
                  data-bs-parent="#coursesAccordion"
                >
                  <div className="accordion-body">
                    <p><strong>Topics:</strong> {c.topics}</p>
                    <p><strong>Alignment with International Standards:</strong> {c.alignment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Details Section */}
<section className="registration-section py-5" style={{background: "#001f34"}}>
  <div className="container">
    <h2 className="section-title text-center mb-4" style={{ color: "white" }}>
      Registration Details
    </h2>

    <div className="row justify-content-center" >
      <div className="col-md-8">
        <div style={{backgroundColor: "#001f36"}} className="card shadow border-5 p-4 text-center">
          <h5 style = {{color: "white"}} className="fw-bold mb-3">Registration Deadline</h5>
          <p className="fs-5 text-danger fw-bold">Ends: 31st January 2026</p>

          <hr />

          <h5 style = {{color: "white"}} className="fw-bold mb-2">Registration Fee</h5>
          <h1 style = {{color: "#e5cc3e"}}  className="mb-1 section-title"><strong>₦5,000</strong></h1>

          <div className="alert alert-warning small mt-3">
            <strong>Note:</strong> Before proceeding with payment, please read the <a href=""></a> disclaimer.
            <button
            className="btn btn-outline-danger mt-3 w-auto"
            data-bs-toggle="modal"
            data-bs-target="#disclaimerModal"
          >
            View Disclaimer
          </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Registration Details Section */}
<section className="registration-section py-5 bg-light">
  <div className="container">
    <h2 className="section-title text-center mb-4" style={{ color: "#001f36" }}>
      Important Dates
    </h2>

    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow border-0 p-4">
          <ul className="list-group list-group-flush fs-6">
            <li className="list-group-item d-flex justify-content-between">
              <strong>Registration Closes:</strong> <span>31st January 2026</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Onboarding Session:</strong> <span>4th February 2026</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>First Assessment:</strong> <span>13th February 2026</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Second Assessment:</strong> <span>20th February 2026</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Third Assessment:</strong> <span>27th February 2026</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Fourth Assessment:</strong> <span>6th March 2026</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Fifth Assessment:</strong> <span>13th March 2026</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Grand Assessment:</strong> <span>20th March 2026</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="alert alert-warning small mt-3">
            <strong>Note:</strong> Before proceeding with payment, please read the <a href=""></a> disclaimer.
            <button
            className="btn btn-outline-danger mt-3 w-auto"
            data-bs-toggle="modal"
            data-bs-target="#disclaimerModal"
          >
            View Disclaimer
          </button>

          </div>
  </div>
  
</section>


      {/* CTA */}
      <section id="register" className="cta-section text-center text-light py-5" style={{ background: "#001f36" }}>
        <h3 className="fw-bold">Ready to Stay Locked-In?</h3>
        <p className="mt-2">Limited Slots • Serious Minds Only</p>
        <a href="https://forms.gle/8Za2DaYb8tnGFgqo8" className="btn hero-btn btn-lg mt-3">Register Now</a>
      </section>
{/* Disclaimer Modal */}
<div
  className="modal fade"
  id="disclaimerModal"
  tabIndex="-1"
  aria-labelledby="disclaimerModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      
      <div className="modal-header">
        <h5 className="modal-title fw-bold" id="disclaimerModalLabel">Important Disclaimer</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
        <p>
          StudiRad is an independent academic-support initiative focused on promoting
          consistency, discipline, and self-driven academic development among Radiographers.
          StudiRad does <strong>not</strong> represent, partner with, nor operate under the authority
          of any Nigerian or international Radiography certification board, academic council,
          licensing body, residency body, internship program, or examination organization.
        </p>

        <p>
          The weekly and final assessments provided within the StudiRad Locked-In Challenge
          are created solely for educational growth, practice and personal benchmarking. They are
          <strong>not</strong> sourced from, endorsed by, or reproduced from any official exam question
          bank or confidential database.
        </p>

        <p>
          StudiRad does <strong>not</strong> offer lectures, one-on-one training, teaching classes,
          internship preparation coaching, or mentorship during this 6-week program. 
          The platform provides suggested resources and a structured learning outline to guide
          your individual self-study.
        </p>

        <p>
          All payments must be made <strong>only</strong> to the officially provided account or channel
          listed on StudiRad platforms. StudiRad will <strong>never</strong> call or message participants
          privately requesting payment, login details, OTP, or personal data.
        </p>

        <p className="text-danger fw-bold">
          StudiRad is not liable for unmet personal expectations, personal academic outcomes, 
          examination results, internship or job placement decisions, or certification eligibility.
        </p>

        <p>
          By proceeding, you acknowledge that you are engaging voluntarily for developmental
          motivation and knowledge improvement only.
        </p>

        <p className="fw-bold">Do you understand and agree to these terms?</p>
      </div>

      <div className="modal-footer">
        <button 
          type="button" 
          className="btn btn-secondary" 
          data-bs-dismiss="modal"
          onClick={() => console.log("User did NOT accept terms")}
        >
          I Do Not Accept
        </button>
        <button 
          type="button" 
          className="btn btn-success"
          data-bs-dismiss="modal"
          onClick={() => console.log("User accepted terms")}
        >
          I Accept
        </button>
      </div>

    </div>
  </div>
</div>

    </div>
    
    
  );
};

export default LockedInChallenge;