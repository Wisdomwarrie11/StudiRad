import React, { useState } from "react";
import { db } from "./firebase"; // ✅ make sure this points to your firebase.js config file
import { collection, addDoc } from "firebase/firestore";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    qualification: "",
    referral: "",
    topic: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
      console.log("Document written with ID: ", docRef.id);
      setMessage("✅ Registration successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        qualification: "",
        referral: "",
        topic: ""
      });
    } catch (error) {
      console.error("❌ Error adding document: ", error);
      setMessage("❌ Something went wrong. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Webinar Registration
      </h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      {/* Qualification Dropdown */}
      <select
        name="qualification"
        value={formData.qualification}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      >
        <option value="">Select Qualification</option>
        <option value="Student Radiographer">Student Radiographer</option>
        <option value="Pre-Intern Radiographer">Pre-Intern Radiographer</option>
        <option value="Intern Radiographer">Intern Radiographer</option>
        <option value="Post-Graduate Radiographer">Post-Graduate Radiographer</option>
        <option value="Others">Others</option>
      </select>

      {/* Referral Dropdown */}
      <select
        name="referral"
        value={formData.referral}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      >
        <option value="">How did you hear about us?</option>
        <option value="Friends/Colleagues">Friends/Colleagues</option>
        <option value="Social Media">Social Media</option>
        <option value="School">School</option>
        <option value="Email">Email</option>
        <option value="Other">Other</option>
      </select>

      {/* Topic Dropdown */}
      <select
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      >
        <option value="">Which webinar topic excites you most?</option>
        <option value="After Induction, What Next?">After Induction, What Next?</option>
        <option value="Career Pathways in Radiography">Career Pathways in Radiography</option>
        <option value="Research and Academia">Research and Academia</option>
        <option value="Specializations in Radiography">Specializations in Radiography</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#1d4ed8",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        {loading ? "Submitting..." : "Register"}
      </button>

      {message && (
        <p style={{ textAlign: "center", marginTop: "15px" }}>{message}</p>
      )}
    </form>
  );
}
