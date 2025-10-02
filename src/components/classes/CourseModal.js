import React from "react";
import { Modal, Button, Badge, Row, Col, Card } from "react-bootstrap";
import { FaCrown, FaUsers } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

const levelColors = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "danger",
};

const packages = {
  Beginner: [
    {
      name: "Golden Package",
      details: "One-on-one tutoring and weekly group guidance.",
      icon: <FaCrown size={22} color="#f1c40f" />,
      color: "warning",
    },
    {
      name: "Basic Package",
      details: "Self-paced learning with access to study materials.",
      icon: <MdOutlineSchool size={22} color="#3498db" />,
      color: "info",
    },
  ],
  Intermediate: [
    {
      name: "Golden Package",
      details: "Advanced one-on-one tutoring and weekly group guidance.",
      icon: <FaCrown size={22} color="#f39c12" />,
      color: "warning",
    },
    {
      name: "Basic Package",
      details: "Self-paced, with access to curated intermediate content.",
      icon: <MdOutlineSchool size={22} color="#2980b9" />,
      color: "info",
    },
  ],
  Advanced: [
    {
      name: "Golden Package",
      details: "Personalized coaching and intensive mentoring.",
      icon: <FaCrown size={22} color="#d35400" />,
      color: "warning",
    },
    {
      name: "Basic Package",
      details: "Independent advanced learning with study materials.",
      icon: <MdOutlineSchool size={22} color="#1abc9c" />,
      color: "info",
    },
  ],
};

const CourseModal = ({ show, handleClose, course }) => {
  if (!course) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{course.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Course Info */}
        <p className="mb-2 text-muted">
          This class follows the <strong>RRBN curriculum</strong> for Nigerians.{" "}
          <a href="/course-outline.pdf" download>
            Download course outline
          </a>
        </p>

        <div className="mb-3">
          <Badge bg={levelColors[course.level]} className="me-2">
            {course.level}
          </Badge>
          <span className="fw-semibold text-primary me-3">{course.price}</span>
        </div>

        <Row className="mb-3">
          <Col>
            <p>
              <FaUsers className="me-2 text-secondary" />
              <strong>Students Enrolled:</strong> {course.enrolled || "200+"}
            </p>
          </Col>
          <Col>
            <p>
              <MdOutlineSchool className="me-2 text-secondary" />
              <strong>Duration:</strong> {course.duration || "6-week Cohort"}
            </p>
          </Col>
        </Row>

        <h5 className="fw-bold mb-3">Choose Your Package</h5>
        <Row>
          {packages[course.level].map((pkg, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card
                className={`h-100 shadow-sm border-0`}
                style={{
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center mb-2">
                    {pkg.icon}
                    <Card.Title className="fw-bold mb-0 ms-2">
                      {pkg.name}
                    </Card.Title>
                  </div>
                  <Card.Text>{pkg.details}</Card.Text>
                  <Button
                    variant={pkg.color}
                    className="w-100 fw-semibold"
                    style={{
                      borderRadius: "8px",
                      boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    Sign Up for {pkg.name}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CourseModal;
