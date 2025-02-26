import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './contact.css'; // Custom CSS file for additional styling

const ContactPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="text-center">
        <Col>
          <div className="error-message">
            <h1 className="display-1">Oops!</h1>
            <p className="lead">We can't seem to find the page you're looking for.</p>
            <Link to="/" className="btn btn-primary btn-lg">Go Back to Home</Link>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default ContactPage;
