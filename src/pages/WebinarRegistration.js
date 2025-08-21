import React, { useState } from "react";
import { db } from "./firebase"; 
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
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
      console.error(error);
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
        marginTop: "100px",
        margin: "150px auto",
        padding: "40px",
        background: "linear-gradient(135deg, rgba(17,31,50,0.95), rgba(34,57,90,0.95))",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        color: "#fff",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#fcd34d" }}>
        Webinar Registration
      </h2>

      {/** Inputs */}
      {["firstName","lastName","email"].map((field, i) => (
        <input
          key={i}
          type={field === "email" ? "email" : "text"}
          name={field}
          placeholder={field === "firstName" ? "First Name" : field === "lastName" ? "Last Name" : "Email Address"}
          value={formData[field]}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px 12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "#fff"
          }}
        />
      ))}

      {/** Dropdowns */}
      {[
        {name:"qualification", label:"Select Qualification", options:["Student Radiographer","Pre-Intern Radiographer","Intern Radiographer","Post-Graduate Radiographer","Others"]},
        {name:"referral", label:"How did you hear about us?", options:["Friends/Colleagues","Social Media","School","Email","Other"]},
        {name:"topic", label:"Which webinar topic excites you most?", options:["After Induction, What Next?","Career Pathways in Radiography","Research and Academia","Specializations in Radiography"]}
      ].map((dropdown,i) => (
        <select
          key={i}
          name={dropdown.name}
          value={formData[dropdown.name]}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px 12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "#fff"
          }}
        >
          <option value="" disabled>{dropdown.label}</option>
          {dropdown.options.map((opt,i) => <option key={i} value={opt}>{opt}</option>)}
        </select>
      ))}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#fcd34d",
          color: "#111f32",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.3s ease"
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor="#fbbf24"}
        onMouseOut={e => e.currentTarget.style.backgroundColor="#fcd34d"}
      >
        {loading ? "Submitting..." : "Register"}
      </button>

      {message && (
        <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>{message}</p>
      )}
    </form>
  );
}
