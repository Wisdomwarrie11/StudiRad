import React, { useState, useEffect } from "react";
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
import { Container, Card, Button, Modal, Form } from "react-bootstrap";
import { HandThumbsUp, ChatDots, Share } from "react-bootstrap-icons";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [commentText, setCommentText] = useState("");

  // Use a simple user ID for demo (replace with auth user ID later)
  const userId = "anonymous-user";

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

  // Like / Unlike toggle
  const toggleLike = async (blog) => {
    const blogRef = doc(db, "blogs", blog.id);
    try {
      if (blog.likedBy?.includes(userId)) {
        // Unlike
        await updateDoc(blogRef, {
          likedBy: arrayRemove(userId),
        });
      } else {
        // Like
        await updateDoc(blogRef, {
          likedBy: arrayUnion(userId),
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

  // Handle Comment Submit
  const handleAddComment = async () => {
    if (!commentText.trim()) return;
    const blogRef = doc(db, "blogs", selectedBlog.id);
    const newComment = {
      name: "Anonymous User",
      text: commentText.trim(),
      createdAt: new Date(),
    };
    try {
      await updateDoc(blogRef, {
        comments: arrayUnion(newComment),
      });
      setCommentText("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };
  const getSnippet = (text, min = 100, max = 300) => {
    if (!text) return "";
    if (text.length <= max) return text;
  
    // Take first max characters
    let snippet = text.substring(0, max);
  
    // Find last space to avoid cutting words
    const lastSpace = snippet.lastIndexOf(" ");
    if (lastSpace > min) {
      snippet = snippet.substring(0, lastSpace);
    }
  
    return snippet + "...";
  };
  
  return (
    <Container style={{marginTop: "50px"}} className="py-5">
      <h2 className="text-center fw-bold mb-5" style={{ color: "rgb(6,49,69)" }}>
        StudiRad Blog & Articles
      </h2>

      {blogs.length === 0 ? (
        <p className="text-center text-muted">No blog posts available yet.</p>
      ) : (
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4">
              <Card className="shadow-sm border-0 rounded-4 h-100">
                {blog.imageUrl && (
                  <Card.Img
                    variant="top"
                    src={blog.imageUrl}
                    alt={blog.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem",
                    }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "rgb(6,49,69)", fontSize: "1.1rem" }}
                  >
                    {blog.title}
                  </h5>
                  <small className="text-muted mb-3">
                    By {blog.writerName} ({blog.writerRole}) •{" "}
                    {blog.createdAt?.toDate().toDateString()}
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

                  {/* Like / Comment / Share Row */}
                  <div className="d-flex justify-content-between align-items-center mt-3 px-1">
                    {/* Like */}
                    <div
                      onClick={() => toggleLike(blog)}
                      style={{
                        cursor: "pointer",
                        color: blog.likedBy?.includes(userId)
                          ? "rgb(221,168,83)"
                          : "rgb(100,100,100)",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <HandThumbsUp size={18} />
                      <span>{blog.likedBy?.length || 0} Likes</span>
                    </div>

                    {/* Comment */}
                    <div
                      onClick={() => setSelectedBlog(blog)}
                      style={{
                        cursor: "pointer",
                        color: "rgb(100,100,100)",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <ChatDots size={18} />
                      <span>{blog.comments?.length || 0} Comments</span>
                    </div>

                    {/* Share */}
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
      )}

      {/* Full Blog Modal with Comments */}
      <Modal
        show={!!selectedBlog}
        onHide={() => setSelectedBlog(null)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold" style={{ color: "rgb(6,49,69)" }}>
            {selectedBlog?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBlog?.imageUrl && (
            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              className="img-fluid mb-3 rounded-3"
            />
          )}
          <p className="text-muted mb-2">
            By <strong>{selectedBlog?.writer}</strong> ({selectedBlog?.role}) •{" "}
            {selectedBlog?.createdAt?.toDate().toDateString()}
          </p>
          <hr />
          <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.7" }}>
            {selectedBlog?.content}
          </p>

          {/* Comments Section */}
          <hr />
          <h6 className="fw-bold mb-3">Comments</h6>
          {selectedBlog?.comments && selectedBlog.comments.length > 0 ? (
            selectedBlog.comments.map((c, i) => (
              <div key={i} className="mb-2">
                <strong>{c.name}</strong>{" "}
                <small className="text-muted">
                  {new Date(c.createdAt?.seconds * 1000 || c.createdAt).toDateString()}
                </small>
                <p className="mb-1">{c.text}</p>
              </div>
            ))
          ) : (
            <p className="text-muted">No comments yet.</p>
          )}

          <Form className="mt-3">
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
            style={{
              backgroundColor: "rgb(221,168,83)",
              border: "none",
              padding: "0.4rem 1.2rem",
            }}
          >
            Post Comment
          </Button>

          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default BlogPage;
