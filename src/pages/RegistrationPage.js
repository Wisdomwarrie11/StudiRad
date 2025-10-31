// src/pages/RegisterPage.js
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        role,
        verified: false,
        createdAt: new Date(),
      });

      // Send email verification
      await sendEmailVerification(user);

      setMessage("📩 Verification email sent! Please check your inbox.");
      setTimeout(() => navigate("/verify-success"), 2500);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#063145" }}>
        Register an Account
      </h2>

      {message && (
        <Alert
          variant={message.startsWith("📩") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Role</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="radiographer">Radiographer</option>
          </Form.Select>
        </Form.Group>

        <Button
          type="submit"
          className="w-100"
          style={{ backgroundColor: "#063145", border: "none" }}
          disabled={loading}
        >
          {loading ? <Spinner animation="border" size="sm" /> : "Register"}
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
