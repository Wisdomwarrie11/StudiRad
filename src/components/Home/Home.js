import React from "react";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import './HeroSection.css'
import Benefits from "./Benefits";
import WhatWeDo from "./whatwedo";
import Testimonials from "./Testimonials";
import Classes from '../classes/Classes'
import HowItWorks from "./HowItWorks";
import NewsletterSignup from "./NewsletterSignup";
import FloatingCTA from "./FloatingCTA";
import WeeklyQuiz from "./WeeklyQuiz";
import AnimatedStats from "components/Home/Stats";
import HubSection from "./Hub";
import { Book, UserCheck, Monitor, Briefcase } from "lucide-react";
import CourseSearch from "./searchbar";
import WhoStudiRad from "./whoStudiRad";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../classes/Classes.css";


const Home = () => {

  
const topClasses = [
  { id: "xray", title: "X-ray" },
  { id: "ultrasound", title: "Ultrasound" },
  { id: "mri", title: "MRI" },
  { id: "ct", title: "CT" },
];


  const activities = [
    {
      icon: <Book size={60} className="p-2 rounded" />,
      title: "Get Expert-Led Classes",
      description:
        "Structured classes designed by experienced radiographers to ensure comprehensive learning.",
    },
     {
      icon: <Monitor size={60} className="p-2 rounded" />,
      title: "Interactive Learning Tools",
      description:
        "Quizzes and real-time assessments to enhance knowledge retention.",
    },
    {
      icon: <UserCheck size={60} className="p-2 rounded" />,
      title: "Personalized Mentorship",
      description:
        "Students get one-on-one guidance from industry professionals.",
    },
   
    {
      icon: <Briefcase size={60} className="p-2 rounded" />,
      title: "Access to opportunities",
      description:
        "Access internships, research collaborations, and job placements to advance your radiography career.",
    },
  ];


  const navigate = useNavigate();

  return (
    <div style={{backgroundColor: 'rgb(245, 243, 240)'}} >
      
      {/* Hero Section */}
      <section
      style={{
        marginTop: "100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "60px 20px",
        backgroundImage: `linear-gradient(rgba(12, 45, 60, 0.6), rgba(0, 0, 0, 0.6)), url('download.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
      className="hero"
    >
      <div className="container text-center">
        {/* Headline */}
        {/* <div className="row mb-5">
          <div className="col-12">
            <h3 className="fw-bold" style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>
              Transform your{" "}
              <span style={{ color: "#dd9a2e" }}>Radiography</span> Journey
            </h3>
            <h3 style={{ marginTop: "20px", maxWidth: "1000px", margin: "0 auto" }}>
              Learn, connect, and grow...
            </h3>
          </div>
        </div> */}

        {/* Independent Transparent Cards */}
        <div style={{}} className="row g-4">
          <h1 style={{fontSize: '35px'}} className="fw-bold">Transform your <span style={{ color: "#dd9a2e" }}>Radiography</span>  Journey</h1>
        </div>
        <h5 style={{ marginTop: "20px", maxWidth: "1000px", margin: "0 auto" }}>
        …with expert-led online classes that empower you to learn anytime, anywhere.
            </h5>
      </div>
    </section>

      
  <section id="classes">
        <Classes/>
      </section>

      <section id="about"  className=" text-center" style={{}}>
        <WhatWeDo/>
      </section>
     
        {/* What We Do Section */}
      <section style={{backgroundColor: '#edf6f9' }}>
        <Benefits/>
      </section>

      <section >
      <HowItWorks/>
      </section>
      
      {/* <section >
        <OneOnOneSection/>
      </section>  */}

  <div style={{backgroundColor: 'rgb(245, 243, 240)'}}>
  < WhoStudiRad/>
  </div>
   

      <section>
        <HubSection/>
      </section>

      <div className="container py-5">
      <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Browse our top Classes</h2>
          <p className="text-muted mb-4">
            Choose from a variety of courses and classes
          </p>

          <Row className="g-4">
            {topClasses.map((course, index) => (
              <Col key={course.id} xs={6} sm={6} lg={3}>
                <Card
                  className="shadow-sm h-100 d-flex justify-content-center align-items-center"
                  onClick={() => navigate(`/course/${course.id}`)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  style={{
                    borderRadius: "12px",
                    cursor: "pointer",
                    padding: "40px 0",
                    backgroundColor: "rgb(24, 59, 78)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  {course.title}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        </div>

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
        <NewsletterSignup />
      </section>

      <FloatingCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
