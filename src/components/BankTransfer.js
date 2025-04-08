// BankTransferPayment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";

const BankTransferPayment = () => {
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");

  const handlePaymentSubmit = () => {
    if (!transactionId) {
      setError("Please enter your transaction ID.");
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
        <h2 className="fw-bold text-center">Bank Transfer Payment</h2>
        <p className="text-center text-muted">Enter your transaction ID.</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Transaction ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your transaction ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
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

export default BankTransferPayment;




// // BankTransferPayment.js
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, Card, Button, Form } from "react-bootstrap";

// const BankTransferPayment = () => {
//   const { id } = useParams(); // Class ID
//   const navigate = useNavigate();
//   const [transactionId, setTransactionId] = useState("");
//   const [error, setError] = useState("");

//   const handlePaymentSubmit = () => {
//     if (!transactionId) {
//       setError("Please enter your transaction ID.");
//       return;
//     }

//     console.log("Transaction ID submitted:", transactionId);

   
//     navigate(`/payment-success/${id}`);
//   };

//   return (
//     <Container className="mt-5 d-flex justify-content-center">
//       <Card style={{marginTop: '50px'}} className="shadow-lg p-4 subscribe-card w-90">
//         <h2 className="fw-bold text-center">Bank Transfer Payment</h2>
//         <p className="text-center text-muted">Please provide your transaction ID.</p>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Transaction ID</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your transaction ID"
//               value={transactionId}
//               onChange={(e) => setTransactionId(e.target.value)}
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

// export default BankTransferPayment;
