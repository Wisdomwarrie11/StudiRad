import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Nav,
  Pagination,
} from "react-bootstrap";
import { Book, HandThumbsUp, ChatDots, Share } from "react-bootstrap-icons";

const MaterialsPage = () => {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const userId = "anonymous-user"; // replace later with authenticated user
  const materialsPerPage = 8;

  const courses = [
    "All",
    "Anatomy",
    "Physiology",
    "Rad Tech",
    "Rad Equipment",
    "Pathology",
    "CT",
    "MRI",
    "USS",
    "Projects",
    "Professional Exams PQ",
  ];
  const navigate = useNavigate();


  // 🎨 Course Color Map
  const courseColors = {
    Anatomy: "#007BFF",
    Physiology: "#28A745",
    "Rad Tech": "#6F42C1",
    "Rad Equipment": "#E83E8C",
    Pathology: "#DC3545",
    CT: "#17A2B8",
    MRI: "#FD7E14",
    USS: "#20C997",
    Projects: "#6610F2",
    "Professional Exams PQ": "#6C757D",
    All: "rgb(6,49,69)",
  };

  // 🧠 Fetch all materials
  useEffect(() => {
    const q = query(collection(db, "materials"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMaterials(data);
    });
    return () => unsubscribe();
  }, []);

  // 🔍 Filter materials
  const filteredMaterials = materials.filter((m) => {
    const matchesSearch =
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.uploader.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse =
      activeTab === "All" || m.course === activeTab;
    return matchesSearch && matchesCourse;
  });

  // 📖 Pagination
  const totalPages = Math.ceil(filteredMaterials.length / materialsPerPage);
  const indexOfLastMaterial = currentPage * materialsPerPage;
  const indexOfFirstMaterial = indexOfLastMaterial - materialsPerPage;
  const currentMaterials = filteredMaterials.slice(
    indexOfFirstMaterial,
    indexOfLastMaterial
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // 👍 Like / Unlike
  // const toggleLike = async (material) => {
  //   const materialRef = doc(db, "materials", material.id);
  //   try {
  //     if (material.likedBy?.includes(userId)) {
  //       await updateDoc(materialRef, { likedBy: arrayRemove(userId) });
  //     } else {
  //       await updateDoc(materialRef, { likedBy: arrayUnion(userId) });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // 💬 Add comment
  // const handleAddComment = async () => {
  //   if (!commentText.trim()) return;
  //   const materialRef = doc(db, "materials", selectedMaterial.id);
  //   const newComment = {
  //     name: "Anonymous User",
  //     text: commentText.trim(),
  //     createdAt: new Date(),
  //   };
  //   try {
  //     await updateDoc(materialRef, { comments: arrayUnion(newComment) });
  //     setCommentText("");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // 📤 Share
  const handleShare = (title) => {
    if (navigator.share) {
      navigator.share({
        title: `${title} | Reading Material`,
        text: "Check out this material!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <Container style={{ marginTop: "50px" }} className="py-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "rgb(6,49,69)" }}>
        Reading Materials Library
      </h2>

      {/* 🔍 Search Bar */}
      <InputGroup className="mb-4">
        <FormControl
          placeholder="Search materials by title or uploader..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <button   onClick={() => navigate("/submit-material")}
      style={{marginBottom: "50px"}} className="w-auto">Add material</button>

      {/* 🗂️ Category Tabs */}
      <Nav variant="tabs" className="justify-content-center mb-4 flex-wrap">
        {courses.map((course) => (
          <Nav.Item key={course}>
            <Nav.Link
              eventKey={course}
              onClick={() => {
                setActiveTab(course);
                setCurrentPage(1);
              }}
              style={{
                color:
                  activeTab === course
                    ? "white"
                    : courseColors[course] || "rgb(6,49,69)",
                backgroundColor:
                  activeTab === course
                    ? courseColors[course] || "rgb(6,49,69)"
                    : "transparent",
                borderRadius: "10px",
                fontWeight: "500",
                margin: "3px",
                transition: "0.3s",
              }}
            >
              {course}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* 📚 Materials Grid */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-3 mb-4">
        {currentMaterials.map((m) => (
          <Col key={m.id}>
            <Card
              className="h-100 shadow-sm border-0 rounded-3 text-center p-3"
              style={{
                transition: "transform 0.3s",
                borderTop: `4px solid ${
                  courseColors[m.course] || "rgb(6,49,69)"
                }`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Book
                size={40}
                style={{
                  color: courseColors[m.course] || "rgb(6,49,69)",
                }}
                className="mb-2"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>{m.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "0.85rem" }}>
                  Uploaded by {m.uploader}
                </Card.Text>

                {/* Actions */}
                <div className="d-flex justify-content-between align-items-center mt-2 px-2">
                  {/* <div
                    onClick={() => toggleLike(m)}
                    style={{
                      cursor: "pointer",
                      color: m.likedBy?.includes(userId)
                        ? courseColors[m.course] || "rgb(221,168,83)"
                        : "rgb(100,100,100)",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "0.85rem",
                    }}
                  >
                    <HandThumbsUp size={18} />
                    <span>{m.likedBy?.length || 0}</span>
                  </div> */}

                  {/* <div
                    onClick={() => setSelectedMaterial(m)}
                    style={{
                      cursor: "pointer",
                      color: "rgb(100,100,100)",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "0.85rem",
                    }}
                  >
                    <ChatDots size={18} />
                    <span>{m.comments?.length || 0}</span>
                  </div> */}

                  <div
                    onClick={() => handleShare(m.title)}
                    style={{
                      cursor: "pointer",
                      color: "rgb(100,100,100)",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "0.85rem",
                    }}
                  >
                    <Share size={18} />
                  </div>
                </div>

                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 d-block"
                >
                  <Button
                    variant="outline-dark"
                    style={{
                      color: courseColors[m.course] || "rgb(221,168,83)",
                      borderColor: courseColors[m.course] || "rgb(221,168,83)",
                      borderRadius: "10px",
                      fontSize: "0.85rem",
                    }}
                    className="w-100 mt-2"
                  >
                    Read Material
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 🔢 Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center">
          <Pagination>
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      )}

      {/* 💬 Comments Modal */}
      <Modal
        show={!!selectedMaterial}
        onHide={() => setSelectedMaterial(null)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "rgb(6,49,69)" }}>
            {selectedMaterial?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted mb-2">
            Uploaded by {selectedMaterial?.uploader}
          </p>
          <hr />

          {/* Comments */}
          <h6 className="fw-bold mb-3">Comments</h6>
          {selectedMaterial?.comments?.length > 0 ? (
            selectedMaterial.comments.map((c, i) => (
              <div key={i} className="mb-2">
                <strong>{c.name}</strong>{" "}
                <small className="text-muted">
                  {new Date(c.createdAt?.seconds * 1000 || c.createdAt).toDateString()}
                </small>
                <p className="mb-1">{c.text}</p>
              </div>
            ))
          ) : (
            <p className="text-muted">No comments yet</p>
          )}

          {/* Add Comment */}
          {/* <Form className="mt-3">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={handleAddComment}
              className="mt-2 w-auto"
              style={{ backgroundColor: "rgb(221,168,83)", border: "none" }}
            >
              Post Comment
            </Button>
          </Form> */}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MaterialsPage;
