// src/pages/AdminMaterialsPage.js
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  query
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AdminMaterialsPage = () => {
  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [uploader, setUploader] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Protect page (only logged-in admins)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/adminlogin");
    });
    return () => unsubscribe();
  }, [navigate]);

  // ✅ Fetch uploaded materials
  const fetchMaterials = async () => {
    const q = query(collection(db, "materials"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setMaterials(data);
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // ✅ Handle new upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!course || !title || !uploader || !link) {
      setMessage("⚠️ Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "materials"), {
        course,
        title,
        uploader,
        link,
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Material uploaded successfully!");
      setCourse("");
      setTitle("");
      setUploader("");
      setLink("");
      fetchMaterials(); // refresh list
    } catch (error) {
      console.error("Error uploading material:", error);
      setMessage("❌ Failed to upload. Please check Firebase connection or rules.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete material
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      try {
        await deleteDoc(doc(db, "materials", id));
        setMessage("🗑️ Material deleted successfully.");
        fetchMaterials();
      } catch (error) {
        console.error("Error deleting material:", error);
        setMessage("❌ Failed to delete material.");
      }
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "800px", marginTop:'50px' }}>
      <h2 className="text-center fw-bold mb-4">Upload Reading Materials</h2>

      {message && (
        <Alert
          variant={message.includes("✅") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      {/* Upload form */}
      <Form onSubmit={handleSubmit} className="mb-5 p-3 shadow-sm rounded bg-light">
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
            <option value="MRI">MRI</option>
            <option value="CT">CT</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Projects">Projects</option>
            <option value="Projects">Professional Exams PQ</option>

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
          {loading ? "Uploading..." : "Upload Material"}
        </Button>
      </Form>

      {/* Uploaded materials list */}
      <h4 className="mb-3 fw-semibold text-center">Uploaded Materials</h4>
      {materials.length === 0 ? (
        <p className="text-center text-muted">No materials uploaded yet.</p>
      ) : (
        <Table striped bordered hover responsive>
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
                <td>{item.title}</td>
                <td>{item.uploader}</td>
                <td>
                  {item.createdAt?.toDate
                    ? item.createdAt.toDate().toLocaleDateString()
                    : "—"}
                </td>
                <td>
                  <Button
                    className="mt-2 w-auto"
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminMaterialsPage;
