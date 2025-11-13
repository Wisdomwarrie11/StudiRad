// src/pages/AdminMaterialsPage.js
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Table, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

const AdminMaterialsPage = () => {
  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [uploader, setUploader] = useState("");
  const [link, setLink] = useState("");
  const [publicId, setPublicId] = useState("");
  const [message, setMessage] = useState("");
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const location = useLocation();

  // Prefill data if coming from review page
  useEffect(() => {
    if (location.state) {
      const { course, title, uploader, link } = location.state;
      if (course) setCourse(course);
      if (title) setTitle(title);
      if (uploader) setUploader(uploader);
      if (link) setLink(link);
    }
  }, [location.state]);

  // Fetch all materials
  const fetchMaterials = async () => {
    setFetching(true);
    try {
      const q = query(collection(db, "materials"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMaterials(data);
    } catch (error) {
      console.error("Error fetching materials:", error);
      setMessage("❌ Failed to load materials.");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // ✅ Cloudinary Upload Widget (for PDFs/docs)
  const handleCloudinaryUpload = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dgorssyvm",
        uploadPreset: "ml_default",
        sources: ["local", "url", "camera"],
        multiple: false,
        resource_type: "raw", // <-- critical fix
        folder: "studiRad_materials",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const uploaded = result.info;
          console.log("Upload success:", uploaded);
          setLink(uploaded.secure_url);
          setPublicId(uploaded.public_id);
          setMessage("✅ File uploaded successfully!");
        } else if (error) {
          console.error("Upload error:", error);
          setMessage("❌ Upload failed. Try again.");
        }
      }
    );
    myWidget.open();
  };

  // ✅ Save Material to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!course || !title || !uploader || !link) {
      setMessage("⚠️ Please fill in all fields and upload a file.");
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "materials"), {
        course,
        title,
        uploader,
        link,
        publicId,
        createdAt: serverTimestamp(),
      });

      console.log("✅ Firestore document written with ID:", docRef.id);
      setMessage("✅ Material uploaded successfully!");
      setCourse("");
      setTitle("");
      setUploader("");
      setLink("");
      setPublicId("");
      fetchMaterials();
    } catch (error) {
      console.error("❌ Error uploading material to Firestore:", error);
      setMessage("❌ Failed to upload. Please check Firebase rules.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete Material (Firestore + Cloudinary)
  const handleDelete = async (id, publicId) => {
    if (!window.confirm("Are you sure you want to delete this material?")) return;

    try {
      await deleteDoc(doc(db, "materials", id));

      // Cloudinary deletion (requires backend endpoint for security)
      if (publicId) {
        await fetch("https://your-backend-url.com/delete-file", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ public_id: publicId }),
        });
      }

      setMessage("🗑️ Material deleted successfully.");
      fetchMaterials();
    } catch (error) {
      console.error("Error deleting material:", error);
      setMessage("❌ Failed to delete material.");
    }
  };

  // Format Firestore timestamp
  const formatDate = (timestamp) => {
    if (!timestamp?.toDate) return "—";
    const date = timestamp.toDate();
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Container className="py-5" style={{ maxWidth: "850px", marginTop: "60px" }}>
      <h2 className="text-center fw-bold mb-4">Upload Reading Materials</h2>

      {message && (
        <Alert
          variant={message.includes("✅") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      {/* Upload Form */}
      <Form onSubmit={handleSubmit} className="mb-5 p-4 shadow-sm rounded bg-light">
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
            <option value="Rad Tech">Rad Tech</option>
            <option value="Rad Equipment">Rad Equipment</option>
            <option value="Pathology">Pathology</option>
            <option value="MRI">MRI</option>
            <option value="CT">CT</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Projects">Projects</option>
            <option value="Professional Exams PQ">Professional Exams PQ</option>
            <option value="Others">Others</option>

          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Material Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title of material"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Uploader Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter uploader name"
            value={uploader}
            onChange={(e) => setUploader(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Upload Material File</Form.Label>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={handleCloudinaryUpload}>
              Upload File
            </Button>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                View Uploaded File
              </a>
            )}
          </div>
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
          {loading ? "Uploading..." : "Submit Material"}
        </Button>
      </Form>

      {/* Uploaded Materials List */}
      <h4 className="mb-3 fw-semibold text-center">Uploaded Materials</h4>

      {fetching ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="text-muted mt-2">Loading materials...</p>
        </div>
      ) : materials.length === 0 ? (
        <p className="text-center text-muted">No materials uploaded yet.</p>
      ) : (
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            borderRadius: "8px",
            border: "1px solid #dee2e6",
          }}
        >
          <Table striped bordered hover responsive className="mb-0">
            <thead style={{ backgroundColor: "rgb(6, 49, 69)", color: "white" }}>
              <tr>
                <th>Course</th>
                <th>Title</th>
                <th>Uploader</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </td>
                  <td>{item.uploader}</td>
                  <td>{formatDate(item.createdAt)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(item.id, item.publicId)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default AdminMaterialsPage;
