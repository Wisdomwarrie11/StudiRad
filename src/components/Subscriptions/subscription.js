import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./SubscriptionPage.css"; // External CSS for better styling

const Subscribe = () => {
  const { id } = useParams(); // Class ID
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [fullName, setFullName] = useState(""); // Student full name
  const [email, setEmail] = useState(""); // Student email
  const [fullNameError, setFullNameError] = useState(""); // Error handling for full name
  const [emailError, setEmailError] = useState(""); // Error handling for email
  const [paymentMethodError, setPaymentMethodError] = useState(""); // Error handling for payment method
  const [generalError, setGeneralError] = useState(""); // General error for form submission

  // Handle form submission and data sending
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent default form submission

    let hasError = false;
    setGeneralError(""); // Clear previous general error

    // Validate Full Name
    if (!fullName) {
      setFullNameError("Full name is required.");
      hasError = true;
    } else {
      setFullNameError("");
    }

    // Validate Email Address
    if (!email) {
      setEmailError("Email address is required.");
      hasError = true;
    } else {
      setEmailError("");
    }

    // Validate Payment Method
    if (!paymentMethod) {
      setPaymentMethodError("Please select a payment method.");
      hasError = true;
    } else {
      setPaymentMethodError("");
    }

    // If there are errors, return and don't proceed
    if (hasError) {
      return;
    }

    // Redirect to Confirmation Page after successful subscription
    navigate(`/confirmation/${paymentMethod}/${id}`);
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ marginTop: "50px" }} className="shadow-lg p-4 subscribe-card w-90">
        <h2 className="fw-bold text-center">Subscribe to the class</h2>
        <p className="text-center text-muted">Complete your subscription.</p>

        {/* General Error Message */}
        {generalError && <div className="alert alert-danger">{generalError}</div>}

        <Form onSubmit={handleSubscribe}>
          {/* Full Name Field */}
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {fullNameError && <div className="text-danger mt-2">{fullNameError}</div>}
          </Form.Group>

          {/* Email Address Field */}
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <div className="text-danger mt-2">{emailError}</div>}
          </Form.Group>

          {/* Payment Method Selector */}
          <Form.Group className="mb-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </Form.Select>
            {paymentMethodError && <div className="text-danger mt-2">{paymentMethodError}</div>}
          </Form.Group>

          {/* Submit Button */}
          <div className="text-center mt-3">
            <Button style={{ width: "100px" }} variant="success" type="submit">
              Proceed to Confirmation
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Subscribe;






