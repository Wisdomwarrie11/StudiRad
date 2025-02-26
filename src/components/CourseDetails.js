import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Card, Spinner, Alert } from "react-bootstrap";

const CourseDetails = () => {
  const { tutorId, courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/tutors/${tutorId}/courses/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        setError("Course not found.");
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [tutorId, courseId]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger" className="text-center">{error}</Alert>;

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Img variant="top" src={course.imageUrl} />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.description}</Card.Text>
          <Link to={`/tutors/${tutorId}`} className="btn btn-info">
            View Tutor Profile
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseDetails;
