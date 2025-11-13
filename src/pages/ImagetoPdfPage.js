// src/pages/ImageToPdfPage.js
import React, { useState } from "react";
import { Container, Form, Button, ProgressBar, Alert } from "react-bootstrap";

const ImageToPdfPage = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!file) {
      setError("⚠️ Please select an image file.");
      return;
    }

    setLoading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:5000/image-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Conversion failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "converted.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      setUploadProgress(100);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ maxWidth: "600px", marginTop: "60px" }}>
      <h3 className="text-center mb-4">Image to PDF Converter</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
        <Form.Group className="mb-3">
          <Form.Label>Select Image (PNG, JPG, JPEG)</Form.Label>
          <Form.Control
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </Form.Group>

        {loading && (
          <ProgressBar
            animated
            now={uploadProgress}
            label={`${uploadProgress}%`}
            className="mb-3"
          />
        )}

        <Button
          type="submit"
          disabled={loading}
          style={{ backgroundColor: "rgb(6,49,69)", border: "none", width: "100%" }}
        >
          {loading ? "Converting..." : "Convert to PDF"}
        </Button>
      </Form>
    </Container>
  );
};

export default ImageToPdfPage;
