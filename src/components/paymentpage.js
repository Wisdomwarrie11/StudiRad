import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";

const PaymentPage = ({ method }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({});

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    alert("Payment processing...");
    navigate("/confirmation"); 
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4 payment-card w-50">
        <Button variant="outline-secondary" onClick={() => navigate(-1)} className="mb-3">
          ← Back
        </Button>
        <h2 className="fw-bold text-center">{method} Payment</h2>
        <p className="text-center text-muted">Complete your payment using {method} for Course ID: {id}.</p>
        {method === "Credit Card" && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" name="cardNumber" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" name="expiryDate" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="password" name="cvv" onChange={handleChange} required />
            </Form.Group>
          </Form>
        )}
        {method === "PayPal" && (
          <p className="text-center">You will be redirected to PayPal for secure payment.</p>
        )}
        {method === "Bank Transfer" && (
          <>
            <p className="text-center">Transfer the course fee to the bank details below:</p>
            <p className="text-center"><strong>Bank Name:</strong> XYZ Bank</p>
            <p className="text-center"><strong>Account Number:</strong> 123456789</p>
            <p className="text-center"><strong>SWIFT Code:</strong> XYZ123</p>
            <Form.Group className="mb-3">
              <Form.Label>Transaction ID</Form.Label>
              <Form.Control type="text" name="transactionId" onChange={handleChange} required />
            </Form.Group>
          </>
        )}
        <div className="text-center mt-3">
          <Button variant="success" onClick={handleConfirm}>Confirm Payment</Button>
        </div>
      </Card>
    </Container>
  );
};

export const CreditCardPayment = () => <PaymentPage method="Credit Card" />;
export const PayPalPayment = () => <PaymentPage method="PayPal" />;
export const BankTransferPayment = () => <PaymentPage method="Bank Transfer" />;
