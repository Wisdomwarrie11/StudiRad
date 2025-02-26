import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const courses = [
    { id: 1, title: 'JavaScript for Beginners', description: 'Learn the basics of JavaScript.', price: '$49.99' },
    { id: 2, title: 'React Mastery', description: 'Master React.js from scratch.', price: '$79.99' },
    { id: 3, title: 'Python for Data Science', description: 'Analyze data using Python.', price: '$99.99' }
];

const Anatomy = () => {
    const navigate = useNavigate();

return (
    <div>
        <div className="row">
<h3 className="text-center fw-bold mb-4">Introduction to Anatomy</h3>

  <div className="col-md-3 col-lg-3 col-sm-3">
    <div className="card shadow-sm">
      <img
        src="ultrasound.jpeg"
        alt="Live Tutorials"
        className="card-img-top"
        style={{height: '200px'}}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">Basic Principles of Ultrasound</h5>
        <p className="card-text">Coach: Wisdom Warrie</p>
        <Button style={{backgroundColor:' rgb(6, 4, 44)'}}
            variant="primary" 
           onClick={() => navigate(`/courses/${courses.id}`)}  >
        View Course
        </Button>
      </div>
    </div>
  </div>
  <div className="col-md-3 col-lg-3 col-sm-3">
    <div className="card shadow-sm">
      <img
        src="CT.jpeg"
        alt="Recorded Sessions"
        className="card-img-top"
        style={{height: '200px'}}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">Introduction to CT protocols</h5>
        <p className="card-text">Coach: Cletus Ogbu.</p>
        <Button style={{backgroundColor:' rgb(6, 4, 44)'}}
            variant="primary" 
           onClick={() => navigate(`/courses/${courses.id}`)}  >
        View Course
        </Button>
      </div>
    </div>
  </div>
  <div className="col-md-3 col-lg-3 col-sm-3">
    <div className="card shadow-sm">
      <img
        src="xray.jpeg"
        alt="Expert Guidance"
        className="card-img-top"
        style={{height: '200px'}}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">Introduction to X-ray Techniques</h5>
        <p className="card-text">Coach: Pascal Victor</p>
        <Button style={{backgroundColor:' rgb(6, 4, 44)'}}
            variant="primary" 
           onClick={() => navigate(`/courses/${courses.id}`)}  >
        View Course
        </Button>
      </div>
    </div>
  </div>
  <div className="col-md-3 col-lg-3 col-sm-3">
    <div className="card shadow-sm">
      <img
        src="mri.jpeg"
        alt="Expert Guidance"
        className="card-img-top"
        style={{height: '200px'}}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">Introduction to MRI techniques</h5>
        <p className="card-text">Coach: Emmanuel Etim</p>
        <Button style={{backgroundColor:' rgb(6, 4, 44)'}}
            variant="primary" 
           onClick={() => navigate(`/courses/${courses.id}`)}  >
        View Course
        </Button>
      </div>
    </div>
  </div>
</div>
    </div>
)

};

export default Anatomy;