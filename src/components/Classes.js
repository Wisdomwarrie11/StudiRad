import React, { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 2,
    title: "Introduction Skull X-ray",
    image: "skull.jpg",
    description: "Learn the basic techniques in skull x-rays.",
  },
  {
    id: 1,
    title: "Basic Principles of Radiographic Anatomy",
    image: "spine.jpg",
    description: "Understand the fundamental concepts behind Radiographic Anatomy of the spine.",
  },
  {
    id: 3,
    title: "Introduction to Chest X-ray",
    image: "chest.jpg",
    description: "Explore basic X-ray positioning and techniques used in chest examination.",
  },
  {
    id: 4,
    title: "Basic Protocol in Brain CT",
    image: "Ctbrain.jpg",
    description: "Understand Basic principles in Brain CT.",
  },
];

const Classes = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Available classes you can join</h2>
        
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
                        style={{ maxHeight: "250px", objectFit: "cover" }}
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
              className="col-md-3"
            >
              <div 
                className="card shadow-sm cursor-pointer"
                onClick={() => navigate(`/course/${course.id}`)}
                style={{ cursor: "pointer" }}
              >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
