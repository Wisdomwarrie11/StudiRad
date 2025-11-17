// src/pages/SubmitMaterialPage.js
import React, { useState } from "react";
import { Container, Form, Button, Alert, Modal, ProgressBar } from "react-bootstrap";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SubmitMaterialPage = () => {
  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [uploader, setUploader] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleFileUpload = async () => {
  if (!file) {
    setError("⚠️ Please select a file before submitting.");
    return null;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default"); // your Cloudinary preset
  formData.append("resource_type", "raw"); // ← important for PDFs, DOCX, PPT
  formData.append("folder", "studiRad_materials"); // optional: store in folder

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dgorssyvm/raw/upload", // ← use raw/upload endpoint
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (data.secure_url) return data.secure_url;
    else throw new Error("Cloudinary upload failed");
  } catch (err) {
    console.error("Upload error:", err);
    setError("❌ File upload failed. Please try again.");
    return null;
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!course || !title || !uploader || !email || !file) {
      setError("⚠️ Please fill in all fields and select a file.");
      setLoading(false);
      return;
    }

    try {
      const fileUrl = await handleFileUpload();
      if (!fileUrl) {
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "pendingMaterials"), {
        course,
        title,
        uploader,
        email,
        fileUrl,
        createdAt: serverTimestamp(),
        status: "pending",
      });

      setShowModal(true);
      setCourse("");
      setTitle("");
      setUploader("");
      setEmail("");
      setFile(null);
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
            <option value="Radiographic Technology">Rad Tech</option>
            <option value="Radiographic Equipment">Radiographic Equipment</option>
            <option value="Pathology">Pathology</option>
            <option value="CT">CT</option>
            <option value="MRI">MRI</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Projects">Projects</option>
            <option value="Others">Others</option>

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
          <Form.Label>Upload File (PDF, DOCX, PPT, etc.)</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </Form.Group>

        {uploadProgress > 0 && (
          <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} className="mb-3" />
        )}

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
