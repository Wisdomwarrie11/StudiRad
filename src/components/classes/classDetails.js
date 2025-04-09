import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import "./ClassDetails.css"; 
import { BookOpen, Brain, Users, ShieldCheck } from "lucide-react";



const courses = [
  {
    id: 1,
    title: "Basic Principles of Radiographic Anatomy",
    description: "Understand the fundamental concepts behind Radiographic Anatomy of the spine.",
    outline: [
      "Week 1: Basic Concepts in Radiographic Anatomy",
      "Week 2: Radiographic Anatomy of the Axial Skeleton",
      "Week 3: Radiographic Anatomy of the Appendicular Skeleton",
      "Week 4: Application & Basic Interpretation Skills",
      "Final Review & Practical Test: Identify labeled structures and basic pathologies",
    ],
    outlinePdf: "/pdfs/skull-xray-outline.pdf",
    subscribeLink: "./subscription.js",
    fee: "$60",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  {
    id: 2,
    title: "Introduction Skull X-ray",
    description: "Learn the basic techniques in skull x-rays.",
    outline: [
      "Basic skull anatomy",
      "X-ray positioning techniques",
      "Understanding exposure settings",
      "Common findings in skull x-rays",
    ],
    outlinePdf: "/pdfs/skull-xray-outline.pdf",
    subscribeLink: "./subscription.js",
    fee: "$50",
    resources: [
      "Skull x-ray positioning guides",
      "Exposure setting tutorials",
      "Case studies",
    ],
    benefits: [
      "Master skull x-ray techniques.",
      "Understand common skull pathologies.",
      "Improve diagnostic accuracy with hands-on training.",
    ],
    schedule: "Live webinars every Tuesday and Friday from 2:00 PM to 4:00 PM (UTC).",
  },
];

const benefits = [
  {
    icon: <BookOpen size={100} className="text-primary p-2 rounded" />, 
    title: "Comprehensive Learning Resources",
    description: "Access a wide range of expertly curated materials tailored to radiography students, covering fundamental to advanced topics.",
    align: "left",
  },
  {
    icon: <Brain size={100} className="text-primary p-2 rounded" />,
    title: "Interactive and Engaging Lessons",
    description: "Experience a dynamic learning environment with quizzes, case studies, and real-world scenarios to enhance understanding.",
    align: "right",
  },
  {
    icon: <Users size={100} className="text-primary p-2 rounded" />,
    title: "Community and Mentorship",
    description: "Join a network of radiography students and professionals for discussions, guidance, and mentorship opportunities.",
    align: "left",
  },
  {
    icon: <ShieldCheck size={100} className="text-primary p-2 rounded" />,
    title: "Certified and Trusted Content",
    description: "Our courses and materials are reviewed by industry experts to ensure accuracy and reliability for your studies.",
    align: "right",
  },
];

const ClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return (
      <Container className="text-center mt-5">
        <h2 style={{marginTop: '150px'}} className="">We are sorry. This class is not available now. <br />check out our other classes</h2>
        <Button style={{width: '200px'}} variant="primary" onClick={() => navigate("/")}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container style={{}}  className="mt-5">
      {/* <Button style={{width: '200px', marginTop: '20px'}} 
        variant="outline-secondary"
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-2"
      >
        ← Back
      </Button> */}
      <Row style={{ marginTop: '100px'}}className="justify-content-between">
        <Col md={12}>
          <Card className="shadow-lg p-4">
            <h2 className="fw-bold">{course.title}</h2>
            <p className="text-muted">{course.description}</p>
            <h4 className="mt-4">Course Outline</h4>
            <ul>
              {course.outline.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <Button style={{ width: "100%", backgroundColor:'rgb(24, 59, 78)', color: "white",}} variant="info" className="mt-3" href={course.outlinePdf} download>
              Download Outline (PDF)
            </Button>
            <h4 className="mt-4">Subscription Fee: <span className="text-success">{course.fee}</span></h4>
            <Button 
            variant="success" 
            className="mt-3" 
            style={{ width: "100%"}}
            onClick={() => navigate(`/subscribe/${course.id}`)}
          >
            Subscribe Now
            </Button>

          </Card>
        </Col>
      </Row>

      {/* New Sections */}
      <section className="container my-5 py-5 bg-info-light">
      <h2 className="text-center mb-4 fw-bold">What you stand to gain</h2>
      {benefits.map((benefit, index) => (
        <div key={index} className={`row align-items-center my-4 ${benefit.align === "right" ? "flex-row-reverse" : ""}`}>
          <div className="col-md-6 text-center">
            {benefit.icon}
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{benefit.title}</h4>
            <p className="text-muted">{benefit.description}</p>
          </div>
        </div>
      ))}
    </section>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="shadow-lg p-4">
            <h4 className="fw-bold">Resources Provided</h4>
            <ListGroup variant="flush">
              {course.resources.map((resource, index) => (
                <ListGroup.Item key={index}>
                  <i className="bi bi-file-earmark-text-fill text-primary"></i> {resource}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClassDetails;
