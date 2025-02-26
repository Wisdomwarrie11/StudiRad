import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Anatomy from "./anatomy";
import Ultrasound from "./ultrasound";
import Xray from "./Xray";
import CT from './CT'
import MRI from './MRI'


const courses = [
    { id: 1, title: 'JavaScript for Beginners', description: 'Learn the basics of JavaScript.', price: '$49.99' },
    { id: 2, title: 'React Mastery', description: 'Master React.js from scratch.', price: '$79.99' },
    { id: 3, title: 'Python for Data Science', description: 'Analyze data using Python.', price: '$99.99' }
];

const Topcourses = () => {
    const navigate = useNavigate();
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Availabale courses</h2>
        <div className="row">
        <Anatomy/>
        <CT/>
        <MRI/>
        <Ultrasound/>
        <Xray/>
          </div>
  
      </div>
      
      
    </section>
  );
};

export default Topcourses;


































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Card, Row, Col } from "react-bootstrap";

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/courses");
//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   return (
//     <Container>
//       <h2 className="my-4">Available Courses</h2>
//       <Row>
//         {courses.map((course) => (
//           <Col key={course._id} md={4}>
//             <Card className="mt-3">
//               <Card.Img variant="top" src={course.image} />
//               <Card.Body>
//                 <Card.Title>{course.title}</Card.Title>
//                 <Card.Text>{course.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CourseList;


