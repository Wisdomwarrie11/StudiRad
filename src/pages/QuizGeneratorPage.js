// import React, { useState } from "react";
// import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";

// const QuizGeneratorPage = () => {
//   const [file, setFile] = useState(null);
//   const [questions, setQuestions] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError("Please select a file");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setQuestions("");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch("http://localhost:5000/generate-quiz", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setQuestions(data.questions);
//       }
//     } catch (err) {
//       setError("Failed to generate questions");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <h3 className="text-center mb-4">Upload File to Generate Quiz</h3>
//       {error && <Alert variant="danger">{error}</Alert>}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Select a file (PDF, DOCX, PNG, JPG)</Form.Label>
//           <Form.Control
//             type="file"
//             accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </Form.Group>
//         <Button className="w-auto" type="submit" disabled={loading}>
//           {loading ? <Spinner animation="border" size="sm" /> : "Generate Quiz"}
//         </Button>
//       </Form>

//       {questions && (
//         <div className="mt-4">
//           <h5>Generated Questions:</h5>
//           <pre>{questions}</pre>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default QuizGeneratorPage;
