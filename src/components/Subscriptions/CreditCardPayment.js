// CreditCardPayment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";

const CreditCardPayment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handlePaymentSubmit = () => {
    if (!cardNumber || !expiryDate || !cvv) {
      setError("Please fill in all card details.");
      return;
    }
    // Simulate successful payment
    setTimeout(() => {
      navigate(`/payment-success`);
    }, 1000); // Simulate a delay before redirect
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ marginTop: '50px' }} className="shadow-lg p-4 subscribe-card w-90">
        <h2 className="fw-bold text-center">Credit Card Payment</h2>
        <p className="text-center text-muted">Please enter your card details.</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </Form.Group>
          <div className="text-center mt-3">
            <Button style={{ width: "100px" }} variant="success" onClick={handlePaymentSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default CreditCardPayment;














// // CreditCardPayment.js
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, Card, Button, Form } from "react-bootstrap";

// const CreditCardPayment = () => {
//   const { id } = useParams(); // Class ID
//   const navigate = useNavigate();
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [error, setError] = useState("");

//   const handlePaymentSubmit = () => {
//     if (!cardNumber || !expiryDate || !cvv) {
//       setError("Please fill in all card details.");
//       return;
//     }

//     // Simulate a successful payment submission
//     console.log("Payment submitted with card number:", cardNumber);

//     // Navigate to success page
//     navigate(`/payment-success/${id}`);
//   };

//   return (
//     <Container className="mt-5 d-flex justify-content-center">
//       <Card style={{ marginTop: '50px' }} className="shadow-lg p-4 subscribe-card w-90">
//         <h2 className="fw-bold text-center">Credit Card Payment</h2>
//         <p className="text-center text-muted">Please enter your card details.</p>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Card Number</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your card number"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Expiry Date</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="MM/YY"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>CVV</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter CVV"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <div className="text-center mt-3">
//             <Button style={{ width: "100px" }} variant="success" onClick={handlePaymentSubmit}>
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default CreditCardPayment;
