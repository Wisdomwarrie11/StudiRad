// PaymentSuccess.js
import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const PaymentSuccess = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ marginTop: '50px' }} className="shadow-lg p-4 subscribe-card w-90">
        <h2 className="fw-bold text-center">Payment Successful!</h2>
        <p className="text-center text-muted">You have successfully subscribed to the class.</p>
        <div className="text-center mt-3">
          <Button style={{ width: "150px" }} variant="success">
            Go to Class
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default PaymentSuccess;











// // PaymentSuccess.js
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, Card, Button } from "react-bootstrap";

// const PaymentSuccess = () => {
//   const { id } = useParams(); // Class ID
//   const navigate = useNavigate();

//   const handleGoToClass = () => {
//     navigate(`/class/${id}`);
//   };

//   return (
//     <Container className="mt-5 d-flex justify-content-center">
//       <Card style={{ marginTop: '50px' }} className="shadow-lg p-4 subscribe-card w-90">
//         <h2 className="fw-bold text-center">Payment Successful!</h2>
//         <p className="text-center text-muted">You have successfully subscribed to the class.</p>

//         <div className="text-center mt-3">
//           <Button style={{ width: "150px" }} variant="success" onClick={handleGoToClass}>
//             Go to Class
//           </Button>
//         </div>
//       </Card>
//     </Container>
//   );
// };

// export default PaymentSuccess;
