import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./SubscriptionPage.css"; // External CSS for better styling

const Subscribe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubscribe = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    navigate(`/payment/${paymentMethod}/${id}`);
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{marginTop: '50px'}}className="shadow-lg p-4 subscribe-card w-90">
      
        <h2 className="fw-bold text-center">Subscribe to the class</h2>
        <p className="text-center text-muted">Complete your subscription.</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select onChange={(e) => setPaymentMethod(e.target.value)} required>
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </Form.Select>
          </Form.Group>
          <div className="text-center mt-3">
            <Button variant="success" onClick={handleSubscribe}>Proceed to Payment</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Subscribe;