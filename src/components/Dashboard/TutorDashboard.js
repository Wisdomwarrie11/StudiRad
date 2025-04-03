import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';

const TutorDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [courses, setCourses] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    university: '',
    country: '',
    level: '',
    profilePicture: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture' && files.length > 0) {
      setStudentData({ ...studentData, profilePicture: URL.createObjectURL(files[0]) });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/student/profile");
        setStudentData(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchStudentData();
    fetchCourses();
  }, []);

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
      setCourses([...courses, response.data]);
      setSuccessMessage("Course uploaded successfully! ✅");
      setTitle("");
      setDescription("");
      setImage(null);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error uploading course:", error);
      setSuccessMessage("❌ Course upload failed!");
    }
  };

  return (
    <div className="d-flex">
      <nav  className="sidebar bg-dark text-white p-4" style={{ width: '250px', minHeight: '500vh', marginTop: '50px'}}>
        <h2 className="text-center">Menu</h2>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/notifications">Notifications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/logout">Log Out</Link>
          </li>
        </ul>
      </nav>

      <Container className="flex-grow-1 p-5">
        <header className="d-flex align-items-center p-4 bg-light shadow-sm rounded mb-4">
          <img src={studentData.profilePicture || 'https://via.placeholder.com/50'} alt="Profile" className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} />
          <h2 className="mb-0">{studentData.name || 'Your Name'}</h2>
        </header>

        {successMessage && <Alert variant="success" className="mb-4">{successMessage}</Alert>}

        <h3 className="mb-3">Profile Setup</h3>
        <div className="main-content flex-grow-1 p-4">
        

        <div className="container mt-4">
          <h3>Profile Information</h3>
          <div className="card p-3">
            <p><strong>Name:</strong> {studentData.name || 'Your Name'}</p>
            <p><strong>Email:</strong> {studentData.email || 'Your Email'}</p>
            <p><strong>University:</strong> {studentData.university || 'Your University'}</p>
            <p><strong>Country:</strong> {studentData.country || 'Your Country'}</p>
            <p><strong>Level:</strong> {studentData.level || 'Your Level'}</p>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={studentData.name} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={studentData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">University</label>
                    <input type="text" className="form-control" name="university" value={studentData.university} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input type="text" className="form-control" name="country" value={studentData.country} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Level</label>
                    <select className="form-select" name="level" value={studentData.level} onChange={handleChange}>
                      <option value="">Select Level</option>
                      <option value="200 Level">200 Level</option>
                      <option value="300 Level">300 Level</option>
                      <option value="400 Level">400 Level</option>
                      <option value="500 Level">500 Level</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Profile Picture</label>
                    <input type="file" className="form-control" name="profilePicture" onChange={handleChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

        <h3 className="mb-3">Upload Course</h3>
        <Form onSubmit={handleUpload} className="card p-4 mb-5">
          <Form.Group className="mb-3">
            <Form.Label>Course Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} required />
          </Form.Group>
          <Button type="submit">Upload Course</Button>
        </Form>

        <h3 className="mb-4">Your Uploaded Courses</h3>
        <Row>
          {courses.map((course) => (
            <Col key={course._id} md={4} className="mb-4">
              <Card>
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
    </div>
  );
};

export default TutorDashboard;
