import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  Row,
  Col,
  Card,
  Badge,
  Form,
  Button,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import CourseModal from "./CourseModal";
import "./Classes.css";
import CourseInfoExtras from "./CourseInfoExtras";

/* ---------- sample data (replace with real data source) ---------- */
const courses = [
  { id: 1, title: "Introduction to Radiation Physics", category: "X-ray", level: "Beginner", price: "Free", rating: 4.7, img: "x-ray.jpeg" },
  { id: 2, title: "Basic Radiographic Anatomy", category: "X-ray", level: "Beginner", price: "Free", rating: 4.5, img: "skullana.jpeg" },
  { id: 3, title: "Principles of Chest X-ray", category: "X-ray", level: "Beginner", price: "Free", rating: 4.5, img: "chestana.jpeg" },
  { id: 4, title: "Obstetrics Ultrasound", category: "Ultrasound", level: "Intermediate", price: "₦2,900", rating: 4.5, img: "obs.jpeg" },
  { id: 5, title: "Abdominal Ultrasound", category: "Ultrasound", level: "Intermediate", price: "₦2,900", rating: 4.7, img: "Abd.jpg" },
  { id: 6, title: "MRI Fundamentals", category: "MRI", level: "Beginner", price: "Free", rating: 4.4, img: "mri.jpeg" },
  { id: 7, title: "Advanced MRI Imaging", category: "MRI", level: "Advanced", price: "₦5,700", rating: 4.8, img: "MRIpro.jpeg" },
  { id: 8, title: "CT Imaging Principles", category: "CT", level: "Beginner", price: "Free", rating: 4.3, img: "CT.jpeg" },
  { id: 9, title: "Chest CT Protocols", category: "CT", level: "Intermediate", price: "₦3,000", rating: 4.6, img: "Ct-.jpeg" },
];

const categories = ["X-ray", "Ultrasound", "MRI", "CT"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const levelColors = { Beginner: "success", Intermediate: "warning", Advanced: "danger" };

/* ---------- main component ---------- */
export default function ClassDetails() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCounts, setVisibleCounts] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const init = {};
    categories.forEach((c) => (init[c] = 4));
    setVisibleCounts(init);
  }, []);

  useEffect(() => {
    if (!category) return;
    const formatted =
      category.replace(/-/g, " ").toLowerCase() === "x ray"
        ? "X-ray"
        : category.charAt(0).toUpperCase() + category.slice(1);
    setSelectedCategory(formatted);
  }, [category]);

  const openModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || c.level === selectedLevel;
    const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    return (
      <>
        {Array.from({ length: full }).map((_, i) => (
          <FaStar key={i} className="star" />
        ))}
        {half && <FaStar className="star half" />}
      </>
    );
  };

  const handleLoadMore = (cat) => {
    setVisibleCounts((prev) => ({ ...prev, [cat]: (prev[cat] || 4) + 4 }));
  };

  return (
    <section style={{marginTop: "50px"}} className="classes-section">
      <div className="container">
        <header className="classes-header">
          <h2>All Available Classes</h2>
          <p className="muted">Filter by level or modality, search, or expand a category to browse.</p>
        </header>

        {/* Filters */}
        <Row className="mb-4 align-items-center filters-row">
          <Col xs={12} md={5}>
            <Form.Control
              placeholder="Search by class title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-input"
            />
          </Col>

          <Col xs={6} md={3}>
            <Form.Select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="filter-select"
            >
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl === "All" ? "All Levels" : lvl}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col xs={6} md={4}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Modalities</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* Accordion grouped by category */}
        <Accordion defaultActiveKey={selectedCategory === "All" ? "" : selectedCategory}>
          {categories.map((cat) => {
            const group = filteredCourses.filter((c) => c.category === cat);
            if (group.length === 0) return null;
            const visible = visibleCounts[cat] || 4;
            const hasMore = group.length > visible;

            return (
              <Accordion.Item eventKey={cat} key={cat} className="category-accordion">
                {/* ✅ Category Header Updated */}
                <Accordion.Header>
                  <div className="accordion-title d-flex justify-content-between align-items-center w-100">
                    <h5 className="fw-bold text-primary mb-0">{cat}</h5>
                    <Badge bg="secondary" pill>
                      {group.length} {group.length === 1 ? "course" : "courses"}
                    </Badge>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <Row className="g-4">
                    {group.slice(0, visible).map((course) => (
                      <Col key={course.id} xs={12} sm={6} lg={3}>
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          <Card
                            className="course-card"
                            onClick={() => openModal(course)}
                          >
                            <div className="card-thumb">
                              <Card.Img src={course.img} alt={course.title} />
                            </div>

                            <Card.Body>
                              <Card.Title className="title-ellipsis">{course.title}</Card.Title>
                              <div className="meta">
                                <Badge bg={levelColors[course.level]} className="level-badge">{course.level}</Badge>
                                <span className="not-available">Not yet available</span>
                              </div>

                              <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="price-text">{course.price}</div>
                                <div className="stars">{renderStars(course.rating)}</div>
                              </div>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>

                  {hasMore && (
                    <div className="text-center mt-4">
                      <Button
                        variant="outline-light"
                        className="load-more-btn"
                        onClick={() => handleLoadMore(cat)}
                      >
                        Load more
                      </Button>
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>

      <CourseInfoExtras/>

      {/* Modal */}
      <CourseModal show={showModal} handleClose={closeModal} course={selectedCourse} />
    </section>
  );
}
