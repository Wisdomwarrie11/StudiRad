import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AdminBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  const navigate = useNavigate();

  // ✅ Auth Guard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/adminlogin");
      } else {
        setAuthChecked(true);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // ✅ Handle Post Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const snippet = content.split(" ").slice(0, 25).join(" ") + "...";

      await addDoc(collection(db, "blogs"), {
        title,
        content,
        snippet,
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Blog post successfully added!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding blog post:", error);
      setMessage(
        "❌ Failed to add post. Please check your Firebase rules or internet connection."
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ Show spinner until auth state is checked
  if (!authChecked) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4 fw-bold" style={{ color: "rgb(6, 49, 69)" }}>
        Admin Blog Page
      </h2>

      {message && (
        <Alert
          variant={message.includes("✅") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
          {loading ? "Posting..." : "Post Blog"}
        </Button>
      </Form>
    </Container>
  );
};

export default AdminBlogPage;
