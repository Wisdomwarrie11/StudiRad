import React, { useState } from "react";
import { Table, Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaBook, FaGraduationCap, FaChalkboardTeacher, FaStar } from "react-icons/fa";
import "./CourseInfoExtras.css";

export default function CourseInfoExtras() {
  const [formData, setFormData] = useState({
    name: "",
    role: "Student",
    course: "",
    topic: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, role, course, topic } = formData;
    if (!name || !course || !topic) {
      alert("Please fill in all fields.");
      return;
    }

    const message = `My name is ${name}, I am a ${role}, I need a one-on-one tutoring on ${topic} in the course ${course}.`;
    const whatsappLink = `https://wa.me/2347041197027?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
    setShowAlert(true);
    setFormData({ name: "", role: "Student", course: "", topic: "" });

    setTimeout(() => setShowAlert(false), 6000);
  };

  return (
    <section className="extras-section py-5">
      <Container>
        {/* --- Understanding Course Levels --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <h3 className="text-center mb-4 section-title">
            <FaBook className="icon-gold me-2" /> Understanding the Course Levels
          </h3>
          <Table bordered responsive className="styled-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FaStar className="icon-green me-2" /> Beginner</td>
                <td>Learn foundational concepts, safety, and equipment basics.</td>
              </tr>
              <tr>
                <td><FaGraduationCap className="icon-yellow me-2" /> Intermediate</td>
                <td>Includes clinical applications and anatomy reviews.</td>
              </tr>
              <tr>
                <td><FaChalkboardTeacher className="icon-red me-2" /> Advanced</td>
                <td>Focuses on interpretation, optimization, and advanced imaging protocols.</td>
              </tr>
            </tbody>
          </Table>
        </motion.div>

        {/* --- Free vs Paid Courses --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5"
        >
          <h3 className="text-center mb-4 section-title">
            <FaStar className="icon-gold me-2" /> Free vs Paid Course Packages
          </h3>
          <Table bordered responsive className="styled-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free Courses</th>
                <th>Paid Courses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Access to Lessons</td>
                <td><FaCheckCircle className="icon-green" /></td>
                <td><FaCheckCircle className="icon-green" /></td>
              </tr>
              <tr>
                <td>Weekly Feedback</td>
                <td><FaTimesCircle className="icon-red" /></td>
                <td><FaCheckCircle className="icon-green" /></td>
              </tr>
              <tr>
                <td>Tutor Interaction</td>
                <td><FaTimesCircle className="icon-red" /></td>
                <td><FaCheckCircle className="icon-green" /></td>
              </tr>
            </tbody>
          </Table>
        </motion.div>

        {/* --- One-on-One Tutorial Request Form --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-4 form-card">
            <h3 className="text-center mb-4 section-title">
              <FaChalkboardTeacher className="icon-gold me-2" /> Request a One-on-One Tutorial
            </h3>

            {showAlert && (
              <Alert variant="success" className="text-center">
                We will reply to you in about <strong>45 minutes</strong> via WhatsApp or email
                to let you know if there are tutors available for this topic.
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Select name="role" value={formData.role} onChange={handleChange}>
                      <option value="Student">Student</option>
                      <option value="Radiographer">Radiographer</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Course</Form.Label>
                    <Form.Control
                      type="text"
                      name="course"
                      placeholder="e.g. Chest X-ray or MRI Fundamentals"
                      value={formData.course}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Topic of Interest</Form.Label>
                    <Form.Control
                      type="text"
                      name="topic"
                      placeholder="e.g. Image positioning, interpretation"
                      value={formData.topic}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center mt-4">
                <Button variant="warning" type="submit" className="request-btn w-auto">
                  Request Session
                </Button>
              </div>
            </Form>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
