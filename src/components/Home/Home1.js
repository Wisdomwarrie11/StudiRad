import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaUserGraduate, FaBook, FaHandsHelping, FaStethoscope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mt-5 pt-5">
      {/* ===== Hero Section ===== */}
      <section className="hero d-flex align-items-center text-center text-dark">
        <Container>
          <h1 className="fw-bold display-5 mb-3">Welcome to <span style={{ color: "rgb(6, 49, 69)" }}>StudiRad</span></h1>
          <p className="lead mb-4">
            The professional development hub designed to help radiography students and professionals learn, grow, and thrive.
          </p>
          <Button className="custom-btn">Explore Now</Button>
        </Container>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold text-primary mb-4">About StudiRad</h2>
          <p>
            StudiRad is a dynamic learning and networking platform for radiography students and professionals.
            It provides access to educational materials, skill-building programs, and real-world opportunities
            that foster growth, innovation, and professional excellence.
          </p>
        </Container>
      </section>

      {/* ===== Benefits Section ===== */}
      <section id="benefits" className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5" style={{ color: "rgb(6, 49, 69)" }}>What We Offer</h2>
          <Row>
            {[
              { icon: <FaBook />, title: "Learning Resources", text: "Access curated study materials, webinars, and academic support." },
              { icon: <FaUserGraduate />, title: "StudiRad Academy", text: "Take expert-led courses that enhance your clinical and imaging skills." },
              { icon: <FaHandsHelping />, title: "Mentorship & Networking", text: "Connect with mentors and build meaningful professional relationships." },
              { icon: <FaStethoscope />, title: "Opportunities", text: "Find internships, jobs, and scholarships tailored for radiographers." },
            ].map((item, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <Card className="text-center shadow-sm border-0 p-4 h-100">
                  <div className="display-5 mb-3" style={{ color: "rgb(6, 49, 69)" }}>{item.icon}</div>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== Problems & Solutions Section ===== */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-4 text-primary">Challenges We Solve</h2>
          <Row className="align-items-center">
            <Col md={6}>
              <h5>Common Problems Radiography Students & Professionals Face:</h5>
              <ul>
                <li>Lack of access to quality radiography learning materials.</li>
                <li>Limited mentorship and professional guidance.</li>
                <li>Difficulty finding internships and job openings.</li>
                <li>Few platforms offering radiography scholarships.</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5>How StudiRad Solves Them:</h5>
              <ul>
                <li>Provides a free knowledge hub with verified educational content.</li>
                <li>Hosts webinars and connects users with industry experts.</li>
                <li>Aggregates internship and job opportunities in one place.</li>
                <li>Lists national and international scholarship programs.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
