import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { adminAuth } from "../firebaseAdmin";  // <-- use the admin config
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(adminAuth, (user) => {
      if (user) {
        navigate("/admindashboard");
      } else {
        setCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(adminAuth, email, password);
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/admindashboard"), 1500);
    } catch (error) {
      console.error("Login error:", error);
      if (error.code === "auth/user-not-found") {
        setMessage("❌ No admin found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setMessage("❌ Incorrect password.");
      } else {
        setMessage("❌ Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4 fw-bold" style={{ color: "rgb(6, 49, 69)" }}>
        Admin Login
      </h3>

      {message && (
        <Alert
          variant={message.includes("✅") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4 position-relative">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <div style={{ position: "relative" }}>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ paddingRight: "40px" }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#063145",
              }}
            >
              {showPassword ? <EyeSlashFill /> : <EyeFill />}
            </span>
          </div>
        </Form.Group>

        <Button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "rgb(6, 49, 69)",
            border: "none",
            width: "100%",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </Container>
  );
};

export default AdminLoginPage;
