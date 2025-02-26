import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Row, Col, Alert } from "react-bootstrap";

const TutorDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [courses, setCourses] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // NEW: Success Message State

  // Fetch courses uploaded by the tutor
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // Handle Course Upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert("Please fill in all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/api/courses", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCourses([...courses, response.data]); // Update UI immediately
      setSuccessMessage("Course uploaded successfully! ✅"); // Show confirmation
      setTitle("");
      setDescription("");
      setImage(null);

      // Hide the message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error uploading course:", error);
      setSuccessMessage("❌ Course upload failed!");
    }
  };

  return (
    <Container>
      <h2 className="my-4">Tutor Dashboard</h2>

      {/* Show Success Message */}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      {/* Course Upload Form */}
      <Form onSubmit={handleUpload}>
        <Form.Group>
          <Form.Label>Course Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} required />
        </Form.Group>

        <Button type="submit" className="mt-3">Upload Course</Button>
      </Form>

      {/* Display Uploaded Courses */}
      <h3 className="mt-5">Your Uploaded Courses</h3>
      <Row>
        {courses.map((course) => (
          <Col key={course._id} md={4}>
            <Card className="mt-3">
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TutorDashboard;
