// src/components/InstructorSpotlight.js

import React from "react";

const instructors = [
  {
    name: "Rad Wisdom Warrie",
    title: "Senior Radiologist",
    image: "warrie.jpg",
    bio: "Expert in MRI and CT Scanning with 8+ years of teaching.",
  },
  {
    name: "Rad Gloria Ekaetta",
    title: "Diagnostic Imaging Specialist",
    image: "/instructors/michael.jpg",
    bio: "Specializes in ultrasound and X-ray. Loves simplifying complex topics.",
  },
  {
    name: "Rad Effiom Ayi",
    title: "Interventional Radiologist",
    image: "Ayi.jpg",
    bio: "Blends practice and teaching with passion for learner success.",
  },
];

const InstructorSpotlight = () => {
  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h2 className="mb-5">Meet some of your Instructors</h2>
        <div className="row">
          {instructors.map((inst, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{inst.name}</h5>
                  <h6 className="text-muted">{inst.title}</h6>
                  <p className="card-text">{inst.bio}</p>
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
