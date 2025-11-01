// ...keep existing imports
import React, { useState, useEffect } from "react";
import { db, storage, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Spinner,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import imageCompression from "browser-image-compression";

const AdminBlogPage = () => {
  const [title, setTitle] = useState("");
  const [writerName, setWriterName] = useState("");
  const [writerRole, setWriterRole] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("General"); // <-- new category state
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const [editModalShow, setEditModalShow] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editCategory, setEditCategory] = useState("General"); // <-- new edit category
  const [editLoading, setEditLoading] = useState(false);

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
      let imageUrl = "";

      if (imageFile) {
        const options = { maxSizeMB: 1, maxWidthOrHeight: 1024, useWebWorker: true };
        const compressedFile = await imageCompression(imageFile, options);

        const imageRef = ref(storage, `blogImages/${Date.now()}_${compressedFile.name}`);
        await uploadBytes(imageRef, compressedFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "blogs"), {
        title,
        content,
        writerName,
        writerRole,
        category, // <-- save category
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Blog post successfully added!");
      setTitle("");
      setContent("");
      setWriterName("");
      setWriterRole("");
      setImageFile(null);
      setCategory("General");

      setTimeout(() => navigate("/blogs"), 1500);
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

  const openEditModal = (post) => {
    setEditPostId(post.id);
    setEditTitle(post.title);
    setEditContent(post.content);
    setEditCategory(post.category || "General"); // <-- load category for edit
    setEditModalShow(true);
  };

  const handleEditSave = async () => {
    if (!editTitle.trim() || !editContent.trim()) return;

    setEditLoading(true);
    try {
      await updateDoc(doc(db, "blogs", editPostId), {
        title: editTitle,
        content: editContent,
        category: editCategory, // <-- update category
        updatedAt: new Date(),
      });
      setEditModalShow(false);
      fetchPosts();
    } catch (error) {
      console.error("Error updating blog:", error);
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "800px", marginTop: "50px" }}>
      <h2 className="text-center mb-4 fw-bold">Admin Blog Management</h2>

      {message && (
        <div
          className={`text-center mb-3 p-2 rounded ${
            message.includes("✅") ? "bg-success text-white" : "bg-danger text-white"
          }`}
        >
          {message}
        </div>
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
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="General">General</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Safety">Safety</option>
          </Form.Select>
        </Form.Group>

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
          style={{ backgroundColor: "#063145", border: "none", width: "100%" }}
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" variant="light" />
              Posting...
            </>
          ) : (
            "Post Blog"
          )}
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
                {post.writerName} • {post.writerRole} • {post.category || "General"}
              </Card.Subtitle>
              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={() => openEditModal(post)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}

      {/* Edit Modal */}
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
                required
              >
                <option value="General">General</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Safety">Safety</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleEditSave}
            disabled={editLoading}
          >
            {editLoading ? (
              <Spinner animation="border" size="sm" className="me-2" />
            ) : null}
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminBlogPage;
