import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  doc,
  query,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Container, Card, Button, Modal, Alert, Badge } from "react-bootstrap";
import { HandThumbsUp, Share } from "react-bootstrap-icons";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [displayCount, setDisplayCount] = useState(6); // Batch size
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const auth = getAuth();

  // Category color map
  const categoryColors = {
    General: "rgb(221,168,83)",
    Technology: "rgb(70,130,180)",
    Health: "rgb(220,20,60)",
    Education: "rgb(34,139,34)",
    Safety: "rgb(255,140,0)",
    default: "gray",
  };

  // Normalize category and get color
  const getCategoryColor = (category) => {
    if (!category) return categoryColors.default;
    const key = category.trim();
    return categoryColors[key] || categoryColors.default;
  };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Load blogs in real-time, latest first
  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogData);
    });
    return () => unsubscribe();
  }, []);

  // Toggle Like (anyone can like)
  const toggleLike = async (blog) => {
    const userId = currentUser?.uid || "guest"; // anonymous likes
    const blogRef = doc(db, "blogs", blog.id);
    const hasLiked = blog.likedBy?.includes(userId);
    const currentCount = blog.likeCount || blog.likedBy?.length || 0;

    try {
      if (hasLiked) {
        await updateDoc(blogRef, {
          likedBy: arrayRemove(userId),
          likeCount: currentCount > 0 ? currentCount - 1 : 0,
        });
      } else {
        await updateDoc(blogRef, {
          likedBy: arrayUnion(userId),
          likeCount: currentCount + 1,
        });
      }
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  // Handle Share
  const handleShare = (title) => {
    if (navigator.share) {
      navigator.share({
        title: `${title} | StudiRad Blog`,
        text: "Check out this article on StudiRad!",
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  // Get snippet for cards
  const getSnippet = (text, min = 100, max = 300) => {
    if (!text) return "";
    if (text.length <= max) return text;
    let snippet = text.substring(0, max);
    const lastSpace = snippet.lastIndexOf(" ");
    if (lastSpace > min) snippet = snippet.substring(0, lastSpace);
    return snippet + "...";
  };

  const visibleBlogs = blogs.slice(0, displayCount);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #f9fafc, #f0f5f7)",
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <Container className="py-5">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "rgb(6,49,69)",
            backgroundColor: "rgba(221,168,83,0.1)",
            padding: "12px",
            borderRadius: "10px",
            display: "inline-block",
          }}
        >
          StudiRad Blog & Articles
        </h2>

        {alertMessage && (
          <Alert variant="warning" className="text-center fw-semibold">
            {alertMessage}
          </Alert>
        )}

        {blogs.length === 0 ? (
          <p className="text-center text-muted">No blog posts available yet.</p>
        ) : (
          <>
            <div className="row g-4">
              {visibleBlogs.map((blog) => (
                <div key={blog.id} className="col-md-6 col-lg-4">
                  <Card
                    className="shadow border-0 rounded-4 h-100"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        "0px 10px 20px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {blog.imageUrl && (
                      <Card.Img
                        variant="top"
                        src={blog.imageUrl}
                        alt={blog.title}
                        style={{
                          height: "210px",
                          objectFit: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                        }}
                      />
                    )}

                    <Card.Body className="d-flex flex-column">
                      <Badge
                        className="mb-2 align-self-start"
                        style={{
                          fontSize: "0.8rem",
                          backgroundColor: getCategoryColor(blog.category),
                          color: "white",
                          padding: "0.4em 0.6em",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {blog.category || "General"}
                      </Badge>

                      <h5
                        className="fw-bold mb-2"
                        style={{ color: "rgb(6,49,69)", fontSize: "1.1rem" }}
                      >
                        {blog.title}
                      </h5>

                      <small
                        className="text-muted mb-3"
                        style={{ fontStyle: "italic" }}
                      >
                        ✍️ {blog.writerName} ({blog.writerRole}) <br />
                        🗓️ {blog.createdAt?.toDate().toDateString()}
                      </small>

                      <p className="text-secondary" style={{ flexGrow: 1 }}>
                        {getSnippet(blog.content, 100, 200)}
                      </p>

                      <Button
                        variant="outline-dark"
                        className="w-100 mt-auto fw-semibold"
                        style={{
                          color: "rgb(221,168,83)",
                          borderColor: "rgb(221,168,83)",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() => setSelectedBlog(blog)}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "rgb(221,168,83)";
                          e.target.style.color = "white";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "rgb(221,168,83)";
                        }}
                      >
                        Read More
                      </Button>

                      <div className="d-flex justify-content-between align-items-center mt-3 px-1">
                        <div
                          onClick={() => toggleLike(blog)}
                          style={{
                            cursor: "pointer",
                            color: blog.likedBy?.includes(currentUser?.uid || "guest")
                              ? "rgb(221,168,83)"
                              : "rgb(100,100,100)",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "0.9rem",
                          }}
                        >
                          <HandThumbsUp size={18} />
                          <span>{blog.likeCount || blog.likedBy?.length || 0} Likes</span>
                        </div>

                        <div
                          onClick={() => handleShare(blog.title)}
                          style={{
                            cursor: "pointer",
                            color: "rgb(100,100,100)",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "0.9rem",
                          }}
                        >
                          <Share size={18} />
                          <span>Share</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {displayCount < blogs.length && (
              <div className="text-center mt-4">
                <Button
                  variant="outline-secondary"
                  onClick={() => setDisplayCount(displayCount + 6)}
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        )}

        {/* Blog Modal */}
        <Modal
          show={!!selectedBlog}
          onHide={() => setSelectedBlog(null)}
          centered
          size="lg"
        >
          <Modal.Header
            closeButton
            style={{ backgroundColor: "rgb(6,49,69)", color: "white" }}
          >
            <Modal.Title>{selectedBlog?.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#fafafa" }}>
            {selectedBlog?.imageUrl && (
              <img
                src={selectedBlog.imageUrl}
                alt={selectedBlog.title}
                className="img-fluid mb-3 rounded-3"
              />
            )}

            <p className="mb-2">
              <Badge
                style={{
                  backgroundColor: getCategoryColor(selectedBlog?.category),
                  color: "white",
                  fontSize: "0.9rem",
                  padding: "0.3em 0.5em",
                  transition: "all 0.3s ease",
                }}
              >
                {selectedBlog?.category || "General"}
              </Badge>
            </p>

            <p className="text-muted mb-2">
              By <strong>{selectedBlog?.writerName}</strong> (
              {selectedBlog?.writerRole}) •{" "}
              {selectedBlog?.createdAt?.toDate().toDateString()}
            </p>
            <hr />

            <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.7" }}>
              {selectedBlog?.content}
            </p>

            <div
              onClick={() => toggleLike(selectedBlog)}
              style={{
                cursor: "pointer",
                color: selectedBlog?.likedBy?.includes(currentUser?.uid || "guest")
                  ? "rgb(221,168,83)"
                  : "rgb(100,100,100)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "1rem",
                marginBottom: "15px",
              }}
            >
              <HandThumbsUp size={20} />
              <span>
                {selectedBlog?.likeCount || selectedBlog?.likedBy?.length || 0} Likes
              </span>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default BlogPage;
