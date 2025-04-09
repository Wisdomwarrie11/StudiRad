import React, { useState, useEffect } from "react";

const AnimatedStats = () => {
  const [enrolled, setEnrolled] = useState(0);
  const [tutors, setTutors] = useState(0);
  const [courses, setCourses] = useState(0);
  const [impactYears, setImpactYears] = useState(1);

  const stats = [
    { label: "Students Enrolled", value: 101, setter: setEnrolled },
    { label: "Tutors", value: 5, setter: setTutors },
    { label: "Courses Available", value: 10, setter: setCourses },
    { label: "Years of Impact", value: 1, setter: setImpactYears },
  ];

  const animateCounter = (setter, target) => {
    const step = target / 100;
    let counter = 1;
    const interval = setInterval(() => {
      counter += step;
      if (counter >= target) {
        clearInterval(interval);
        counter = target;
      }
      setter(Math.floor(counter)); 
    }, 100);
  };

  useEffect(() => {
    stats.forEach((stat) => {
      animateCounter(stat.setter, stat.value); 
    });
  }, []);

  return (
    <section style={{ padding: "4rem 1rem", backgroundColor: 'rgb(24, 59, 78)'}}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontWeight: "bold", color: "white" }}>🌟 Our Impact</h2>
        <p style={{ color: "white" }}>Check out how we're making a difference</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              flex: "1 1 22%",
              textAlign: "center",
              minWidth: "250px",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ color: "#1d3557", marginBottom: "1rem" }}>{stat.label}</h4>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#1d3557",
              }}
            >
              {/* Use the correct state for each stat */}
              {stat.label === "Students Enrolled" && Math.floor(enrolled)}
              {stat.label === "Tutors" && Math.floor(tutors)}
              {stat.label === "Courses Available" && Math.floor(courses)}
              {stat.label === "Years of Impact" && Math.floor(impactYears)}+
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
