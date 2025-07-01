import { useEffect, useState } from "react";

const GoogleFormRedirect = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://forms.gle/Ki67EFKR6jPvkh5q7";
    }, 2000); // 2 seconds spinner before redirect

    return () => clearTimeout(timer);
  }, []);

  return (
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
  );
};

export default GoogleFormRedirect;
