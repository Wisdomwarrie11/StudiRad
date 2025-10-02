import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Classes.css";

const topClasses = [
  { id: "Conventional X-ray", title: "X-ray" },
  { id: "ultrasound", title: "Ultrasound" },
  { id: "Magnetic Resonance Imaging", title: "MRI" },
  { id: "Computed Tomography", title: "CT" },
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
    id: 6,
    title: "MRI Fundamentals",
    category: "MRI",
    level: "Beginner",
    price: "Free",
    rating: 4.4,
    image: "mri.jpeg",
  },
   
  {
    id: "Obstetrics ultrasound",
    title: "Obstetrics Ultrasound",
    image: "obs.jpeg",
    price: "₦2,700",
    rating: 4.9,
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Advanced MRI Imaging",
    category: "MRI",
    level: "Advanced",
    price: "₦5,700",
    rating: 4.8,
    image: "MRIpro.jpeg",
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
      <div  className="container py-5">
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
      onClick={
        () => navigate(`/${course.title.toLowerCase().replace(/\s+/g, "-")}`
        )
      }
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

              {/* ===== Section 2: New Classes ===== */}
        {/* ===== Section 2: New Classes ===== */}
<div className="py-5">
  {/* Header */}
  <div className="text-center mb-4">
    <h2 className="fw-bold mb-1">Browse our new classes</h2>
    <p className="text-muted mb-0">
      Discover fresh topics and start learning today
    </p>
  </div>

  {/* Cards */}
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
            <Card.Title className="fw-bold mb-2">{course.title}</Card.Title>

            {/* Price + Rating */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <Badge
                bg={course.price === "Free" ? "success" : "primary"}
                style={{ fontSize: "0.85rem" }}
              >
                {course.price}
              </Badge>
              <small className="text-muted">⭐ {course.rating.toFixed(1)}</small>
            </div>

            {/* Level */}
            <div className="mb-2">
              <Badge
                bg={levelColors[course.level]}
                style={{ fontSize: "0.8rem" }}
              >
                {course.level}
              </Badge>
            </div>

            {/* Button inside card */}
            <button
              className="btn btn-dark w-100 mt-2"
              style={{
                backgroundColor: "rgb(24, 59, 78)",
                border: "none",
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/course/${course.id}`);
              }}
            >
              View Details
            </button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

  {/* CTA Button Below Cards */}
  <div style={{marginTop: '20px'}}>
  <a onClick={() => navigate("/course")}
  className="fw-bold" style={{textDecoration: "none", color: "rgb(6, 49, 69)", marginTop: '20px', fontSize: '25px', fontWeight: '200px'}} 
  >See all courses → </a>

  </div>
</div>



      </div>
    </section>
  );
};

export default Classes;
