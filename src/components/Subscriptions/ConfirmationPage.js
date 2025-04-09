import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const ConfirmationPage = () => {
  const { paymentMethod, id } = useParams(); // Get the payment method and course ID from URL parameters

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ marginTop: "50px" }} className="shadow-lg p-4 subscribe-card w-90">
        <h2 className="fw-bold text-center">Subscription Confirmation</h2>
        <p className="text-center text-muted">Please review your details before proceeding to payment.</p>

        <div className="text-center mt-4">
          <h4>Your Subscription is Successful!</h4>
          <p>Course ID: {id}</p>
          <p>Payment Method: {paymentMethod}</p>
          <Button
            style={{ width: "200px" }}
            variant="success"
            onClick={() => alert("Proceeding to payment...")}
          >
            Proceed to Payment
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default ConfirmationPage;
