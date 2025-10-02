import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Badge, Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import CourseModal from "./CourseModal"; // ✅ import the modal
import "./Classes.css";

const courses = [
  {
    id: 1,
    title: "Introduction to Radiation Physics",
    category: "X-ray",
    level: "Beginner",
    price: "Free",
    rating: 4.7,
    img: "x-ray.jpeg",
  },
  {
    id: 2,
    title: "Basic Radiographic anatomy",
    category: "X-ray",
    level: "Beginner",
    price: "Free",
    rating: 4.5,
    img: "skullana.jpeg",
  },
  {
    id: 3,
    title: "Principles of Chest X-ray",
    category: "X-ray",
    level: "Beginner",
    price: "Free",
    rating: 4.5,
    img: "chestana.jpeg",
  },
  {
    id: 4,
    title: "Obstetrics ultrasound",
    category: "Ultrasound",
    level: "Intermediate",
    price: "₦2,900",
    rating: 4.5,
    img: "obs.jpeg",
  },
  {
    id: 5,
    title: "Abdominal Ultrasound",
    category: "Ultrasound",
    level: "Intermediate",
    price: "₦2,900",
    rating: 4.7,
    img: "Abd.jpg",
  },
  {
    id: 6,
    title: "MRI Fundamentals",
    category: "MRI",
    level: "Beginner",
    price: "Free",
    rating: 4.4,
    img: "mri.jpeg",
  },
  {
    id: 7,
    title: "Advanced MRI Imaging",
    category: "MRI",
    level: "Advanced",
    price: "₦5,700",
    rating: 4.8,
    img: "MRIpro.jpeg",
  },
  {
    id: 8,
    title: "CT Imaging Principles",
    category: "CT",
    level: "Beginner",
    price: "Free",
    rating: 4.3,
    img: "CT.jpeg",
  },
  {
    id: 9,
    title: "Chest CT Protocols",
    category: "CT",
    level: "Intermediate",
    price: "₦3,000",
    rating: 4.6,
    img: "Ct-.jpeg",
  },
];

// Bootstrap badge colors
const levelColors = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "danger",
};

const categories = ["X-ray", "Ultrasound", "MRI", "CT"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const ClassDetails = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };

  // Refs for scrolling
  const refs = {
    "X-ray": useRef(null),
    Ultrasound: useRef(null),
    MRI: useRef(null),
    CT: useRef(null),
  };

  // ✅ Set category from URL when mounted/changed
  useEffect(() => {
    if (category) {
      const formatted = category.replace(/-/g, " ");
      const normalized =
        formatted.charAt(0).toUpperCase() + formatted.slice(1);

      const finalCategory =
        normalized.toLowerCase() === "x ray" ? "X-ray" : normalized;

      setSelectedCategory(finalCategory);

      if (refs[finalCategory]?.current) {
        refs[finalCategory].current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      setSelectedCategory("All");
    }
  }, [category]);

  // ✅ Filter logic
  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLevel =
      selectedLevel === "All" || c.level === selectedLevel;
    const matchesCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  // ⭐ Rating stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={i} color="#f5c518" />
        ))}
        {hasHalf && (
          <FaStar color="#f5c518" style={{ opacity: 0.5 }} />
        )}
      </>
    );
  };

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f8f9fa", marginTop: "100px" }}
    >
      <div className="container">
        {/* Header */}
        <h2 className="fw-bold mb-2 text-center">All Available Classes</h2>
        <p className="text-muted text-center mb-4">
          Filter by level or category, search, or explore all courses below.
        </p>

        {/* Filters */}
        <Row className="mb-4 g-3">
          <Col xs={12} md={4}>
            <Form.Control
              type="text"
              placeholder="Search classes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col xs={6} md={4}>
            <Form.Select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={6} md={4}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Classes</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* Grouped by Category */}
        {categories.map((cat) => {
          const group = filteredCourses.filter((c) => c.category === cat);
          return (
            <div key={cat} ref={refs[cat]} className="mb-5">
              <h4 className="fw-bold mb-3">{cat}</h4>
              <Row className="g-4">
                {group.length > 0 ? (
                  group.map((course) => (
                    <Col key={course.id} xs={12} sm={6} lg={3} xl={3}>
                      <Card
                        className="shadow-sm h-100 border-0"
                        style={{
                          borderRadius: "12px",
                          overflow: "hidden",
                          cursor: "pointer",
                        }}
                        onClick={() => handleShowModal(course)} // ✅ show modal
                      >
                        <Card.Img
                          variant="top"
                          src={course.img}
                          alt={course.title}
                          style={{
                            height: "180px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold">
                            {course.title}
                          </Card.Title>
                          <Badge
                            bg={levelColors[course.level]}
                            className="mb-2 me-2"
                          >
                            {course.level}
                          </Badge>
                          <Badge bg="secondary" className="mb-2">
                            Not yet available
                          </Badge>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="fw-semibold text-primary">
                              {course.price}
                            </span>
                            <div>{renderStars(course.rating)}</div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <p className="text-muted">No classes match your filters.</p>
                )}
              </Row>
            </div>
          );
        })}
      </div>

      {/* ✅ Modal */}
      <CourseModal
        show={showModal}
        handleClose={handleCloseModal}
        course={selectedCourse}
      />
    </section>
  );
};

export default ClassDetails;
