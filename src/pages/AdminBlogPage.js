
import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import imageCompression from "browser-image-compression"; // 👈 Add this import
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Container,
  Form,
  Button,
  Alert,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AdminBlogPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [writer, setWriter] = useState("");
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const [writerName, setWriterName] = useState("");
  const [writerRole, setWriterRole] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/adminlogin");
    });
    fetchPosts();
    return () => unsubscribe();
  }, [navigate]);

  const fetchPosts = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setPosts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
  
    try {
      let imageUrl = ""; // ✅ define this before use
  
      // ✅ If admin uploaded an image
      if (imageFile) {
        const options = {
          maxSizeMB: 0.4,
          maxWidthOrHeight: 1000,
          useWebWorker: true,
        };
  
        // ✅ Compress image before upload
        const compressedFile = await imageCompression(imageFile, options);
  
        // ✅ Upload to Firebase Storage
        const storageRef = ref(storage, `blogImages/${Date.now()}-${compressedFile.name}`);
        await uploadBytes(storageRef, compressedFile);
  
        // ✅ Get the download URL for storage
        imageUrl = await getDownloadURL(storageRef);
      }
  
      // ✅ Automatically generate snippet
      const snippet = content.split(" ").slice(0, 25).join(" ") + "...";
  
      // ✅ Add post to Firestore
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        snippet,
        imageUrl,
        writer,
        role,
        createdAt: serverTimestamp(),
      });
  
      setMessage("✅ Blog post successfully added!");
      setTitle("");
      setContent("");
      setImageFile(null);
      setWriter("");
      setRole("");
  
      // ✅ Redirect to blog page after success
      navigate("/blog");
    } catch (error) {
      console.error("Error adding blog post:", error);
      setMessage("❌ Failed to add post. Please check Firebase rules or connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "blogs", id));
      fetchPosts();
    }
  };

  const handleEdit = (id, currentTitle, currentContent) => {
    const newTitle = prompt("Edit title:", currentTitle);
    const newContent = prompt("Edit content:", currentContent);

    if (newTitle && newContent) {
      updateDoc(doc(db, "blogs", id), {
        title: newTitle,
        content: newContent,
        updatedAt: new Date(),
      })
        .then(() => {
          alert("Blog updated successfully!");
          fetchPosts();
        })
        .catch((error) => {
          console.error("Error updating blog: ", error);
        });
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "800px" }}>
      <h2 className="text-center mb-4 fw-bold">Admin Blog Management</h2>

      {message && (
        <Alert
          variant={message.includes("✅") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="mb-5">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Writer’s Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter writer name"
                value={writerName}
                onChange={(e) => setWriterName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Writer’s Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Radiographer, Student"
                value={writerRole}
                onChange={(e) => setWriterRole(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Blog Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Image (optional)</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
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

      <h4 className="fw-bold mb-3">Existing Posts</h4>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <Card className="mb-3" key={post.id}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                {post.writerName} • {post.writerRole}
              </Card.Subtitle>
              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={() => handleEdit(post.id, post.title, post.content)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default AdminBlogPage;
