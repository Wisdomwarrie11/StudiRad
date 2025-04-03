import React, { useState } from "react";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Basic Principles of Ultrasound",
    image: "ultrasound.jpeg",
    description:
      "Understand the fundamental concepts behind ultrasound imaging.",
  },
  {
    id: 2,
    title: "Introduction to CT Protocols",
    image: "CT.jpeg",
    description: "Learn key protocols and best practices in CT scanning.",
  },
  {
    id: 3,
    title: "Introduction to X-ray Techniques",
    image: "xray.jpeg",
    description:
      "Explore basic X-ray positioning and techniques used in medical imaging.",
  },
  {
    id: 4,
    title: "Introduction to MRI Techniques",
    image: "mri.jpeg",
    description:
      "Dive into the world of MRI and understand how magnetic resonance imaging works.",
  },
];

const Topcourses = () => {
  const navigate = useNavigate();
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Our top courses you can choose from</h2>
        <Carousel indicators={false} interval={3000} className="d-md-none">
          {Array.from({ length: Math.ceil(courses.length / 2) }).map((_, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {courses.slice(index * 2, index * 2 + 2).map((course) => (
                  <Col key={course.id} xs={6} className="text-center">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="d-block w-100 rounded"
                      style={{ maxHeight: "250px", objectFit: "cover" }}
                    />
                    <h5 className="mt-3 fw-bold">{course.title}</h5>
                    <p className="text-muted">{course.description}</p>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="row d-none d-md-flex">
          {courses.map((course) => (
            <div
              key={course.id}
              className="col-md-3 position-relative"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className="card shadow-sm">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{course.title}</h5>
                </div>
              </div>
              {hoveredCourse === course.id && (
                <div className="hover-popup">
                  <p className="fw-normal text-black">{course.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Button
            style={{ backgroundColor: "rgb(6, 4, 44)" }}
            variant="secondary"
            onClick={() => navigate("/courses")}
          >
            See All Courses
          </Button>
        </div>
      </div>

      <style>
        {`
          .hover-popup {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            background: #f8f9fa;
            color: black;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
            z-index: 10;
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
          }
          .position-relative {
            position: relative;
          }
        `}
      </style>
    </section>
  );
};

export default Topcourses;