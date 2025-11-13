// src/pages/RegisterPage.js
import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Timestamp } from "firebase/firestore";


const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // ✅ Generate a 6-digit OTP
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Step 1: Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Generate OTP and expiry (10 min)
      const otp = generateOtp();
      const otpExpiry = Timestamp.fromDate(new Date(Date.now() + 10 * 60 * 1000));
      
      // Step 3: Save user + OTP details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        role,
        otp,
        otpExpiry,                // already Timestamp from above
        verified: false,
        createdAt: Timestamp.now() // use Firestore Timestamp instead of Date
      });

      // Step 4: Send OTP via EmailJS
      await emailjs.send(
        "service_ktgszfh", // Replace with your EmailJS service ID
        "template_dg0adum", // Replace with your EmailJS template ID
        {
          to_name: fullName,
          to_email: email,
          otp_code: otp,
        },
        "oYz9P4v4ylM0rh7Di" // Replace with your EmailJS public key
      ).then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });;

      // Step 5: Notify and redirect
      setMessage("✅ OTP sent to your email. Please verify within 10 minutes.");
      setTimeout(() => navigate("/verify-otp", { state: { email } }), 2000);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "600px", marginTop: "40px"}}>
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#063145" }}>
        Register an Account
      </h2>

      {message && (
        <Alert
          variant={message.startsWith("✅") ? "success" : "danger"}
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
