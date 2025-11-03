import React from "react";
import { Modal, Button, Badge, Row, Col } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

const levelColors = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "danger",
};

const CourseModal = ({ show, handleClose, course }) => {
  if (!course) return null;

  const handleSubscribe = () => {
    // Replace this with your actual payment platform link
    window.open("https://your-payment-platform.com/checkout", "_blank");
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title className="fw-bold text-primary">
          {course.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Course Overview */}
        <p className="mb-3 text-muted">
          This class follows the <strong>RRBN curriculum</strong> for Nigerians.{" "}
          <a href="/course-outline.pdf" download className="text-decoration-none">
            Download course outline
          </a>
        </p>

        <div className="mb-3">
          <Badge bg={levelColors[course.level]} className="me-2">
            {course.level}
          </Badge>
          <span className="fw-semibold text-primary me-3">
            {course.price || "₦ —"}
          </span>
        </div>

        <Row className="mb-4">
          <Col>
            <p className="fw-semibold">
              <FaUsers className="me-2 text-secondary" />
              Students Enrolled:{" "}
              <span className="text-dark">
                {course.enrolled || "20+"}
              </span>
            </p>
          </Col>
          <Col>
            <p className="fw-semibold">
              <MdOutlineSchool className="me-2 text-secondary" />
              Duration:{" "}
              <span className="text-dark">
                {course.duration || "6-week Cohort"}
              </span>
            </p>
          </Col>
        </Row>

        <div className="p-4 text-center bg-light rounded-4 shadow-sm mb-3">
          <h5 className="fw-bold mb-2">Ready to Start Learning?</h5>
          <p className="text-muted mb-4">
            Subscribe now to gain access to all course materials, weekly feedback sessions,
            and one-on-one tutor interactions.
          </p>
          <Button
            variant="warning"
            size="lg"
            className="fw-bold px-5 py-2 border-0 rounded-pill shadow-sm w-auto"
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CourseModal;
