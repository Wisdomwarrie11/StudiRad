
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, Card, Button, Form } from "react-bootstrap";
// import axios from 'axios'; // Import Axios for API request
// import "./SubscriptionPage.css"; // External CSS for better styling

// const Subscribe = () => {
//   const { id } = useParams(); // Class ID
//   const navigate = useNavigate();
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [fullName, setFullName] = useState(""); // Student full name
//   const [email, setEmail] = useState(""); // Student email
//   const [error, setError] = useState(""); // Error handling

//   // Handle form submission and data sending
//   const handleSubscribe = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     if (!fullName || !email) {
//       setError("Please fill in your name and email.");
//       return;
//     }

//     // Send subscription info to backend
//     try {
//       const response = await axios.post('http://localhost:3001/api/subscribe', {
//         fullName,
//         email,
//         paymentMethod,
//         courseId: id,
//       });
      
//       if (response.status === 200) {
//         // Redirect to the payment page based on selected method
//         navigate(`/payment/${paymentMethod}/${id}`);
//       }
//     } catch (error) {
//       console.error('Error subscribing:', error);
//       setError('There was an error with your subscription. Please try again.');
//     }
//   };

//   return (
//     <Container className="mt-5 d-flex justify-content-center">
//       <Card style={{marginTop: '50px'}} className="shadow-lg p-4 subscribe-card w-90">
//         <h2 className="fw-bold text-center">Subscribe to the class</h2>
//         <p className="text-center text-muted">Complete your subscription.</p>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <Form onSubmit={handleSubscribe}>
//           <Form.Group className="mb-3">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your full name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Payment Method</Form.Label>
//             <Form.Select
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               required
//             >
//               <option value="">Select Payment Method</option>
//               <option value="credit-card">Credit Card</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Bank Transfer</option>
//             </Form.Select>
//           </Form.Group>
//           <div className="text-center mt-3">
//             <Button style={{ width: "100px" }} variant="success" type="submit">
//               Proceed to Payment
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default Subscribe;


