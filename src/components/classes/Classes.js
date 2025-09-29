import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Classes.css";

const topClasses = [
  { id: "xray", title: "X-ray" },
  { id: "ultrasound", title: "Ultrasound" },
  { id: "mri", title: "MRI" },
  { id: "ct", title: "CT" },
];


const newClasses = [
  {
    id: "intro-radiation",
    title: "Introduction to Radiation Physics",
    image: "x-ray.jpeg",
    price: "Free",
    rating: 4.7,
    level: "Beginner",
  },
  {
    id: "Rad Anatomy",
    title: "Basic Anatomy & Physiology for Imaging",
    image: "chestana.jpeg",
    price: "Free",
    rating: 4.5,
    level: "Beginner",
  },
  {
    id: "Pathology",
    title: "Radiographic Pathology",
    image: "pathology.jpeg",
    price: "₦2,900",
    rating: 4.8,
    level: "Intermediate",
  },
  {
    id: "Obstetrics ultrasound",
    title: "Obstetrics Ultrasound",
    image: "obs.jpeg",
    price: "Free",
    rating: 4.9,
    level: "Intermediate",
  },
];

// Bootstrap color mapping for levels
const levelColors = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "danger",
};

const Classes = () => {
  const navigate = useNavigate();

  return (
    <section style={{ backgroundColor: "white" }}>
      <div className="container py-5">

        {/* ===== Section 1: Top Classes ===== */}
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

        {/* ===== Section 2: New Classes ===== */}
        <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">Browse our new classes</h2>
              <p className="text-muted mb-0">
                Discover fresh topics and start learning today
              </p>
            </div>
            <span
              className="text-primary fw-semibold"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/course/all")}
            >
              See All →
            </span>
          </div>

          <Row className="g-4">
            {newClasses.map((course, index) => (
              <Col key={course.id} xs={12} sm={6} lg={3}>
                <Card
                  className="shadow-sm h-100"
                  onClick={() => navigate(`/course/${course.id}`)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{ borderRadius: "12px", cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    alt={course.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold mb-2">
                      {course.title}
                    </Card.Title>

                    {/* Price, Rating and Level badges */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Badge
                        bg={course.price === "Free" ? "success" : "primary"}
                        style={{ fontSize: "0.85rem" }}
                      >
                        {course.price}
                      </Badge>
                      <small className="text-muted">⭐ {course.rating.toFixed(1)}</small>
                    </div>

                    <div className="mb-2">
                      <Badge
                        bg={levelColors[course.level]}
                        style={{ fontSize: "0.8rem" }}
                      >
                        {course.level}
                      </Badge>
                    </div>

                    <button
                      className="btn btn-dark w-100 mt-2"
                      style={{
                        backgroundColor: "rgb(24, 59, 78)",
                        border: "none",
                      }}
                    >
                      View Details
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

      </div>
    </section>
  );
};

export default Classes;
