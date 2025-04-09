import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Sample Courses Data
const courses = [
    { id: 1, title: 'JavaScript for Beginners', description: 'Learn the basics of JavaScript.', price: '$49.99' },
    { id: 2, title: 'React Mastery', description: 'Master React.js from scratch.', price: '$79.99' },
    { id: 3, title: 'Python for Data Science', description: 'Analyze data using Python.', price: '$99.99' }
];

// Tutor Image Section
const TutorImageSection = () => {
    return (
        <Container className="text-center my-4">
            <img src="/images/tutor.jpg" alt="Tutor" className="img-fluid rounded" style={{ maxHeight: '400px' }} />
        </Container>
    );
};

// Courses Section
const CoursesSection = () => {
    const navigate = useNavigate();

    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">Explore Our Courses</h2>
            <Row>
                {courses.map(course => (
                    <Col md={4} key={course.id} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>{course.description}</Card.Text>
                                <h5 className="text-primary">{course.price}</h5>
                                <Button 
                                
                                    variant="primary" 
                                    onClick={() => navigate(`/courses/${course.id}`)}
                                >
                                    View Course
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                <Button variant="secondary" onClick={() => navigate('/courselist')}>See More</Button>
            </div>
        </Container>
    );
};

// Home Page Component
const Courses = () => {
    return (
        <>
            <TutorImageSection />
            <CoursesSection />
        </>
    );
};

export default Courses;
