// PayPalPayment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";

const PayPalPayment = () => {
  const navigate = useNavigate();
  const [paypalEmail, setPaypalEmail] = useState("");
  const [error, setError] = useState("");

  const handlePaymentSubmit = () => {
    if (!paypalEmail) {
      setError("Please enter your PayPal email.");
      return;
    }
    // Simulate successful PayPal payment
    setTimeout(() => {
      navigate(`/payment-success`);
    }, 1000); // Simulate a delay before redirect
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ marginTop: '50px' }} className="shadow-lg p-4 subscribe-card w-90">
        <h2 className="fw-bold text-center">PayPal Payment</h2>
        <p className="text-center text-muted">Enter your PayPal email address.</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>PayPal Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your PayPal email"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
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

export default PayPalPayment;












// // PayPalPayment.js
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, Card, Button, Form } from "react-bootstrap";

// const PayPalPayment = () => {
//   const { id } = useParams(); // Class ID
//   const navigate = useNavigate();
//   const [paypalEmail, setPaypalEmail] = useState("");
//   const [error, setError] = useState("");

//   const handlePaymentSubmit = () => {
//     if (!paypalEmail) {
//       setError("Please enter your PayPal email.");
//       return;
//     }

//     // Simulate successful PayPal payment
//     console.log("Payment submitted with PayPal email:", paypalEmail);

//     // Navigate to success page
//     navigate(`/payment-success/${id}`);
//   };

//   return (
//     <Container className="mt-5 d-flex justify-content-center">
//       <Card style={{ marginTop: '50px' }} className="shadow-lg p-4 subscribe-card w-90">
//         <h2 className="fw-bold text-center">PayPal Payment</h2>
//         <p className="text-center text-muted">Enter your PayPal email address.</p>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>PayPal Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your PayPal email"
//               value={paypalEmail}
//               onChange={(e) => setPaypalEmail(e.target.value)}
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

// export default PayPalPayment;
