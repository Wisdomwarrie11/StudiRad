import './Instructor.css'
import React from "react";

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
  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h2 className="mb-4">Meet some of your Instructors</h2>
        <div className="row">
          {instructors.map((inst, index) => (
            <div key={index} className="col-sm-6 col-md-4 mb-4">
              <div  className="card h-100 shadow-sm">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="card-img-top"
                  style={{ height: "200px", width: '200px', borderRadius: '100%', marginLeft: '100px', marginTop: '50px'}} 
                />
                <div className="card-body" style={{ padding: "15px" }}>  
                  <h5 className="card-title" style={{ fontSize: "1.1rem" }}>{inst.name}</h5>  
                  <h6 className="text-muted" style={{ fontSize: "0.9rem" }}>{inst.title}</h6>  
                  <p className="card-text" style={{ fontSize: "0.85rem" }}>{inst.bio}</p>  
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
