import React, { useState } from "react";
import { Row, Col, Card, Badge, Modal, Button } from "react-bootstrap";
import CourseModal from "./CourseModal"; 

const ultrasoundCourses = [
  {
    id: 1,
    title: "Obstetrics Ultrasound",
    level: "Intermediate",
    price: "₦2,900",
    rating: 4.5,
    img: "obs.jpeg",
    description: "Learn to perform and interpret obstetric ultrasound scans.",
  },
  {
    id: 2,
    title: "Abdominal Ultrasound",
    level: "Intermediate",
    price: "₦2,900",
    rating: 4.7,
    img: "Abd.jpg",
    description: "Covers techniques for abdominal ultrasound imaging.",
  },
];

const levelColors = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "danger",
};

const UltrasoundPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleClose = () => setSelectedCourse(null);

  const groupedCourses = {
    Beginner: ultrasoundCourses.filter((c) => c.level === "Beginner"),
    Intermediate: ultrasoundCourses.filter((c) => c.level === "Intermediate"),
    Advanced: ultrasoundCourses.filter((c) => c.level === "Advanced"),
  };

  return (
    <section className="py-5 container">
      <h2 className="fw-bold text-center mb-4">Ultrasound Classes</h2>

      {Object.keys(groupedCourses).map((level) => (
        <div key={level} className="mb-5">
          <h4 className="fw-bold mb-3">{level} Level</h4>
          <Row className="g-4">
            {groupedCourses[level].length > 0 ? (
              groupedCourses[level].map((course) => (
                <Col key={course.id} xs={12} sm={6} lg={3}>
                  <Card
                    className="shadow-sm h-100"
                    style={{ borderRadius: "12px", cursor: "pointer" }}
                    onClick={() => setSelectedCourse(course)}
                  >
                    <Card.Img
                      variant="top"
                      src={course.img}
                      alt={course.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">{course.title}</Card.Title>
                      <Badge bg={levelColors[course.level]}>{course.level}</Badge>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="fw-semibold text-primary">{course.price}</span>
                        <small className="text-muted">⭐ {course.rating}</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-muted">No {level} courses yet.</p>
            )}
          </Row>
        </div>
      ))}

      {/* Modal */}
      <CourseModal
        show={!!selectedCourse}
        handleClose={handleClose}
        course={selectedCourse}
/>
    </section>
  );
};

export default UltrasoundPage;
