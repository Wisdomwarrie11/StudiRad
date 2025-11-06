// src/pages/SubmitMaterialPage.js
import React, { useState } from "react";
import { Container, Form, Button, Alert, Modal } from "react-bootstrap";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SubmitMaterialPage = () => {
  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [uploader, setUploader] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!course || !title || !uploader || !email || !link) {
      setError("⚠️ Please fill in all fields before submitting.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "pendingMaterials"), {
        course,
        title,
        uploader,
        email,
        link,
        createdAt: serverTimestamp(),
        status: "pending",
      });

      setShowModal(true);
      setCourse("");
      setTitle("");
      setUploader("");
      setEmail("");
      setLink("");
    } catch (error) {
      console.error("Error submitting material:", error);
      setError("❌ Failed to send material. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "700px", marginTop: "60px" }}>
      <h3 className="text-center fw-bold mb-4">Submit a Material for Review</h3>
      {error && <Alert variant="danger" className="text-center">{error}</Alert>}

      <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
        <Form.Group className="mb-3">
          <Form.Label>Course Category</Form.Label>
          <Form.Select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option value="Anatomy">Anatomy</option>
            <option value="Physiology">Physiology</option>
            <option value="Radiographic Technology">Radiographic Technology</option>
            <option value="Radiographic Equipment">Radiographic Equipment</option>
            <option value="Pathology">Pathology</option>
            <option value="CT">CT</option>
            <option value="MRI">MRI</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Projects">Projects</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Material Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Uploader Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={uploader}
            onChange={(e) => setUploader(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Google Document Link</Form.Label>
          <Form.Control
            type="url"
            placeholder="Paste Google Docs or resource link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "rgb(6, 49, 69)",
            border: "none",
            width: "100%",
          }}
        >
          {loading ? "Submitting..." : "Submit Material for Review"}
        </Button>
      </Form>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>✅ Thank you for supporting this platform.</p>
          <p>Your material has been sent for review before upload.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SubmitMaterialPage;
