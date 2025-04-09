import React, { useState } from "react";

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
    // In production, connect this to actual course filtering
  };

  return (
    <section style={{ padding: "50px 0" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>Find a Course</h2>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search for a course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              padding: "10px 15px 10px 15px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "50px%",
              marginLeft: '10px',
              marginRight: '10px'
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: "#153e52",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              marginRight: '30px',
              width: '100px',
              height: '50px',
              marginTop: '7px'

            }}
          >
            Find
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSearch;
