import React, { useState, useEffect } from "react";

const AnimatedStats = () => {
  const [enrolled, setEnrolled] = useState(0);
  const [tutors, setTutors] = useState(0);
  const [courses, setCourses] = useState(0);
  const [impactYears, setImpactYears] = useState(0);

  const stats = [
    { label: "Students Enrolled", value: 1200 },
    { label: "Tutors", value: 45 },
    { label: "Courses Available", value: 15 },
    { label: "Years of Impact", value: 5 },
  ];

  const animateCounter = (current, target) => {
    const step = target / 100;
    let counter = current;
    const interval = setInterval(() => {
      counter += step;
      if (counter >= target) {
        clearInterval(interval);
        counter = target;
      }
      setEnrolled(counter);
    }, 10);
  };

  useEffect(() => {
    stats.forEach((stat) => {
      animateCounter(0, stat.value);
    });
  }, []);

  return (
    <section style={{ padding: "4rem 1rem", backgroundColor: "#f1f3f5" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontWeight: "bold", color: "#1d3557" }}>🌟 Our Impact</h2>
        <p style={{ color: "#6c757d" }}>Check out how we're making a difference</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", gap: "1rem" }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              flex: "0 0 22%",
              textAlign: "center",
            }}
          >
            <h4 style={{ color: "#1d3557", marginBottom: "1rem" }}>{stat.label}</h4>
            <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1d3557" }}>
              {Math.floor(enrolled)}+
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
