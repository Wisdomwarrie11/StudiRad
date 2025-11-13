import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Prefill email if redirected from verification
  React.useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // Step 1: Sign in user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Get Firestore user record
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        setMessage("⚠️ User profile not found in database.");
        return;
      }

      const userData = userDocSnap.data();

      // ✅ Step 3: Check your custom Firestore verification, NOT Firebase emailVerified
      if (!userData.verified) {
        setMessage("⚠️ Please verify your email via the OTP before logging in.");
        return;
      }

      // Step 4: Success
      setMessage(`✅ Logged in successfully as ${userData.role}.`);
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      console.error("Login error:", error);
      setMessage(`❌ Email or Password is incorrect`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "500px", marginTop: "40px" }}>
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
      Dont have an account? You can sign up <a href="/registration">here</a>.
    </Container>
  );
};

export default LoginPage;
