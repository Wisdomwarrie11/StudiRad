import './Instructor.css';
import React, { useEffect, useRef } from "react";

const instructors = [
  {
    name: "Rad Wisdom Warrie",
    title: "Chief Radiographer",
    image: "warrie.jpg",
    bio: "Expert in MRI and CT Scanning with 8+ years of teaching.",
  },
  {
    name: "Rad Gloria Ekeata",
    title: "Senior Sonographer",
    image: "Gloria.jpg",
    bio: "Specializes in ultrasound and X-ray. Loves simplifying complex topics.",
  },
  {
    name: "Rad Effiom Ayi",
    title: "Interventional Radiographer",
    image: "Ayi.jpg",
    bio: "Blends practice and teaching with passion for learner success.",
  },
];

const InstructorSpotlight = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("instructor-visible");
            el.classList.remove("instructor-hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current.querySelectorAll(".instructor-hidden");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="py-5 cursor-pointer text-center bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className=" mb-4 fw-semibold">Meet some of our Instructors</h2>
        <div className="row">
          {instructors.map((inst, index) => (
            <div key={index} className="col-sm-6 col-md-4 mb-4">
              <div className="card h-100 shadow-sm instructor-hidden">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "50px",
                  }}
                />
                <div className="card-body" style={{ padding: "15px" }}>
                  <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
                    {inst.name}
                  </h5>
                  <h6 className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {inst.title}
                  </h6>
                  <p className="card-text" style={{ fontSize: "0.85rem" }}>
                    {inst.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSpotlight;
