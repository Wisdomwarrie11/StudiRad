// src/pages/BlogPage.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Container, Card, Button, Spinner } from "react-bootstrap";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "rgb(6, 49, 69)" }}>
        Latest Articles & Blogs
      </h2>
      {blogs.length === 0 ? (
        <p className="text-center text-muted">No blog posts yet.</p>
      ) : (
        blogs.map((blog) => (
          <Card key={blog.id} className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">{blog.title}</Card.Title>
              <Card.Text>{blog.snippet}</Card.Text>
              <Button
                variant="outline-primary"
                onClick={() =>
                  alert(`📰 Full post:\n\n${blog.content}`)
                }
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default BlogPage;
