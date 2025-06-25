import React, { useEffect } from "react";

const SubscribeForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section style={{ padding: "2rem", background: "#f9f9f9", marginRight: '20px' }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#1d3557" }}>
        📋 Subscribe to a Class
      </h2>
      <div
        data-tf-live="01JYKN6WE61HTBEJWEZF239FQ0"
        style={{ width: "100%", minHeight: "500px" }}
      ></div>
    </section>
  );
};

export default SubscribeForm;
