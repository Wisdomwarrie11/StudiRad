// PaymentFailure.js
import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const PaymentFailure = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ marginTop: '50px' }} className="shadow-lg p-4 subscribe-card w-90">
        <h2 className="fw-bold text-center text-danger">Payment Failed</h2>
        <p className="text-center text-muted">Something went wrong with your payment. Please try again.</p>

        <div className="text-center mt-3">
          <Button style={{ width: "150px" }} variant="danger">
            Try Again
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default PaymentFailure;
