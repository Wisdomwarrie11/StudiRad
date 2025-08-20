import React from "react";

const RegistrationForm = () => {
  return (
    <section style={{ 
      minHeight: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#f4f6f9",
      padding: "20px",
      marginTop: "50px"
    }}>
      <div style={{
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        width: "100%",
        padding: "40px"
      }}>
        <h2 style={{ 
          fontSize: "28px", 
          fontWeight: "bold", 
          textAlign: "center", 
          color: "#1f2937",
          marginBottom: "10px"
        }}>
          Webinar Registration
        </h2>
        <p style={{ 
          textAlign: "center", 
          color: "#6b7280", 
          marginBottom: "30px"
        }}>
          Join us and be part of an exciting learning experience.
        </p>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* First Name */}
          <div>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
              First Name
            </label>
            <input type="text" placeholder="Enter your first name"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                marginTop: "5px"
              }}
            />
          </div>

          {/* Last Name */}
          <div>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
              Last Name
            </label>
            <input type="text" placeholder="Enter your last name"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                marginTop: "5px"
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
              Email Address
            </label>
            <input type="email" placeholder="your@email.com"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                marginTop: "5px"
              }}
            />
          </div>

          {/* Qualification */}
          <div>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
              Educational Qualification
            </label>
            <select
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                marginTop: "5px"
              }}
            >
              <option value="">-- Select --</option>
              <option>Student Radiographer</option>
              <option>Pre-intern Radiographer</option>
              <option>Intern Radiographer</option>
              <option>Post-graduate Radiographer</option>
              <option>Others</option>
            </select>
          </div>

          {/* How they heard */}
          <div>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
              How did you hear about this webinar
            </label>
            <select
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                marginTop: "5px"
              }}
            >
              <option value="">-- Select --</option>
              <option>Facebook</option>
              <option>WhatsApp</option>
              <option>LinkedIn</option>
              <option>Word of Mouth</option>
              <option>family or Friends</option>
            </select>
          </div>

          {/* Topic */}
          <div>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
              Which webinar topic are you looking forward to the most?
            </label>
            <textarea rows="3" placeholder="Type your answer..."
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                marginTop: "5px"
              }}
            />
          </div>

          {/* Submit */}
          <button type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#2563eb",
              color: "white",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
