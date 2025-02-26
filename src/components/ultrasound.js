import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const courses = [
    { id: 1, title: 'JavaScript for Beginners', description: 'Learn the basics of JavaScript.', price: '$49.99' },
    { id: 2, title: 'React Mastery', description: 'Master React.js from scratch.', price: '$79.99' },
    { id: 3, title: 'Python for Data Science', description: 'Analyze data using Python.', price: '$99.99' }
];

const Ultrasound = () => {
    const navigate = useNavigate();

    return (
        <div className="py-5">
            <h3 className="text-center fw-bold mb-4">Understanding Ultrasound</h3>
            <div className="d-flex overflow-auto" style={{ gap: '15px', whiteSpace: 'nowrap' }}>
                {courses.map((course, index) => (
                    <div key={index} className="card shadow-sm" style={{ minWidth: '250px' }}>
                        <img
                            src={index === 0 ? "ultrasound.jpeg" : index === 1 ? "CT.jpeg" : index === 2 ? "xray.jpeg" : "mri.jpeg"}
                            alt={course.title}
                            className="card-img-top img-fluid"
                            style={{ height: '150px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{course.title}</h5>
                            <p className="card-text">Coach: {index === 0 ? "Wisdom Warrie" : index === 1 ? "Cletus Ogbu" : index === 2 ? "Pascal Victor" : "Emmanuel Etim"}</p>
                            <Button
                                style={{ backgroundColor: 'rgb(6, 4, 44)' }}
                                variant="primary"
                                onClick={() => navigate(`/courses/${course.id}`)}
                            >
                                View Course
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ultrasound;
