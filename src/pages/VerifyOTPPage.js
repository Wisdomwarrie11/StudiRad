// src/pages/VerifyOtpPage.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import emailjs from "@emailjs/browser";
import "./verifyOtp.css";

const VerifyOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const [otpInput, setOtpInput] = useState("");
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // ✅ 5 minutes
  const [isResending, setIsResending] = useState(false);
  const [resendEnabled, setResendEnabled] = useState(false);

  // ✅ Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setResendEnabled(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // ✅ Handle OTP Verification
  const handleVerify = async () => {
    if (!otpInput.trim()) return setMessage("⚠️ Please enter the OTP.");

    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setMessage("❌ No user found for this email.");
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      console.log("DEBUG → User data from Firestore:", userData);

      // ✅ Safety checks
      if (!userData.otp || !userData.otpExpiry) {
        setMessage("⚠️ No OTP was found. Please request a new one.");
        setResendEnabled(true);
        return;
      }

      // ✅ Expiry check (convert if Firestore Timestamp)
      const expiryTime =
        userData.otpExpiry?.toMillis?.() ?? new Date(userData.otpExpiry).getTime();

      if (Date.now() > expiryTime) {
        setMessage("⏰ OTP expired. Please request a new one.");
        setResendEnabled(true);
        return;
      }

      // ✅ Compare OTP values as strings
      if (String(otpInput) !== String(userData.otp)) {
        setMessage("❌ Incorrect OTP. Please try again.");
        return;
      }

      // ✅ Mark user verified
      await updateDoc(doc(db, "users", userDoc.id), {
        verified: true,
        otp: null,
        otpExpiry: null,
      });

      setMessage("✅ Verification successful!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("OTP verification error details:", error);
      setMessage(`❌ Verification failed: ${error.message || "Try again."}`);
    }
  };

  // ✅ Handle Resend OTP
  const handleResend = async () => {
    if (isResending) return;
    setIsResending(true);

    try {
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      const newExpiry = Date.now() + 5 * 60 * 1000; // 5 mins

      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setMessage("❌ No user found for this email.");
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      // ✅ Update Firestore
      await updateDoc(doc(db, "users", userDoc.id), {
        otp: newOtp,
        otpExpiry: newExpiry,
      });

      // ✅ Send OTP email
      await emailjs.send(
        "service_ktgszfh",
        "template_dg0adum",
        {
          to_name: userData.fullName,
          to_email: email,
          otp_code: newOtp,
          current_year: new Date().getFullYear(),
        },
        "oYz9P4v4ylM0rh7Di"
      );

      setMessage("📩 New OTP sent to your email!");
      setTimeLeft(300);
      setResendEnabled(false);
    } catch (error) {
      console.error("Error resending OTP:", error);
      setMessage(`❌ Failed to resend OTP: ${error.message}`);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Container
      className="py-5"
      style={{ maxWidth: "480px", marginTop: "50px" }}
    >
      <h3 className="text-center mb-4 fw-bold" style={{ color: "#063145" }}>
        Verify Your Email
      </h3>

      <p className="text-center text-muted mb-4">
        Enter the 6-digit OTP sent to <strong>{email}</strong>
      </p>

      {message && (
        <Alert
          variant={
            message.startsWith("✅")
              ? "success"
              : message.startsWith("📩")
              ? "info"
              : "warning"
          }
          className="text-center"
        >
          {message}
        </Alert>
      )}

      <Form>
        <Form.Group className="mb-3 text-center">
          <Form.Control
            type="text"
            placeholder="Enter OTP"
            maxLength="6"
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
            className="text-center fw-bold fs-5 otp-input"
          />
        </Form.Group>

        <div className="text-center">
          <Button
            variant="dark"
            onClick={handleVerify}
            style={{
              backgroundColor: "#063145",
              border: "none",
              padding: "0.45rem 1rem",
              width: "130px",
              borderRadius: "8px",
            }}
          >
            Verify
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-muted">
            ⏰ Time remaining:{" "}
            <span style={{ color: "#063145", fontWeight: "bold" }}>
              {formatTime(timeLeft)}
            </span>
          </p>

          <Button
            variant="outline-secondary"
            size="sm"
            disabled={!resendEnabled || isResending}
            onClick={handleResend}
            style={{
              width: "130px",
              borderRadius: "8px",
              padding: "0.4rem 1rem",
            }}
          >
            {isResending ? "Resending..." : "Resend OTP"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default VerifyOtpPage;
