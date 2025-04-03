import React, { useState } from "react";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Basic Principles of Ultrasound",
    image: "ultrasound.jpeg",
  },
  {
    id: 2,
    title: "Introduction to CT Protocols",
    image: "CT.jpeg",
  },
  {
    id: 3,
    title: "Introduction to Rad Techniques",
    image: "xray.jpeg",
  },
  {
    id: 4,
    title: "Introduction to MRI Techniques",
    image: "mri.jpeg",
  },
];

const Topcourses = () => {
  const navigate = useNavigate();
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Our top courses you can choose from</h2>
        
        {/* Mobile View - Carousel */}
        <Carousel indicators={false} interval={3000} className="d-md-none">
          {Array.from({ length: Math.ceil(courses.length / 2) }).map((_, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {courses.slice(index * 2, index * 2 + 2).map((course) => (
                  <Col key={course.id} xs={6} className="text-center">
                    <div
                      className="card shadow-sm cursor-pointer"
                      onClick={() => navigate(`/course/${course.id}`)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="fw-bold">{course.title}</h5>
                        <p className="text-muted">{course.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Desktop View - Grid */}
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
                  style={{ height: "200px", objectFit: "cover" }}
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
    </section>
  );
};


export default Topcourses;
