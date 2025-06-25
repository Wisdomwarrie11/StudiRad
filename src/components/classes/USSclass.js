import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Classes.css'; 

const courses = [
  {
    id: 5,
    title: "Knobs and tech in Ultrasound",
    image: "knob.jpg",
  },
  {
    id: 6,
    title: "Abdominal Ultrasound - part 1",
    image: "Abd.jpg",
  },
  {
    id: 7,
    title: "Obstetrics ultrasound Explained",
    image: "obs.jpeg",
  },
  {
    id: 8,
    title: "Soft tissue ultrasound Explained",
    image: "soft tissue.jpeg",
  },
];

const Classes = () => {
  const navigate = useNavigate();

  return (
    <section style={{ backgroundColor: 'white' }} className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 fade-in-title">Ultrasound classes you can join</h2>

        {/* Mobile View - Carousel */}
        <Carousel indicators={false} interval={3000} className="d-md-none">
          {Array.from({ length: Math.ceil(courses.length / 2) }).map((_, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {courses.slice(index * 2, index * 2 + 2).map((course) => (
                  <Col xs={6} className="text-center">
                    <div
                    className="card shadow-sm cursor-pointer course-card"
                    onClick={() => navigate(`/course/${course.id}`)}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100} >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="card-img-top"
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
                      <div className="card-body">
                        <h5 className="fw-bold">{course.title}</h5>
                        <button style={{ width: "100%", backgroundColor:'rgb(24, 59, 78)' }}>
                          Join 
                        </button>
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
          {courses.map((course, index) => (
            <div key={course.id} className="col-md-3">
              <div
                className="card shadow-sm cursor-pointer course-card"
                onClick={() => navigate(`/course/${course.id}`)}
                data-aos="zoom-in"
                data-aos-delay={index * 100} // delay each card for staggered animation
      
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{course.title}</h5>
                  <button style={{ width: "100%", backgroundColor:'rgb(24, 59, 78)'}}>
                          Join 
                        </button>
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
