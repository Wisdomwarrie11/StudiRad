// TypeformEmbed.jsx
import React, { useEffect, useState } from "react";
import { Widget } from "@typeform/embed-react";

const TypeformEmbed = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay for loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Wait 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: "600px", position: "relative", padingTop: '200px' }}>
      {loading ? (
        <div
          style={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f9f9f9",
          }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading Form...</span>
          </div>
        </div>
      ) : (
        <Widget
          id="PUGT9s0A"
          style={{ width: "100%", height: "600px", marginTop: '100px'}}
          className="my-form"
        />
      )}
    </div>
  );
};

export default TypeformEmbed;
