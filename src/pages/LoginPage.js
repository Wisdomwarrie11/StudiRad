// src/pages/LoginPage.js
import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setMessage("⚠️ Please verify your email before logging in.");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        setMessage("⚠️ User profile not found in database.");
        return;
      }

      const role = userDoc.data().role;
      setMessage(`✅ Logged in successfully as ${role}.`);
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error("Login error:", error);
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#063145" }}>
        User Login
      </h2>

      {message && (
        <Alert
          variant={message.startsWith("✅") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      <Form onSubmit={handleLogin}>
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

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          className="w-100"
          style={{ backgroundColor: "#063145", border: "none" }}
          disabled={loading}
        >
          {loading ? <Spinner animation="border" size="sm" /> : "Login"}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;