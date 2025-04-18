import React from "react";
import { User, BookOpen, PlayCircle, Award } from "lucide-react"; // Import desired icons from lucide-react
import './HowItWorks.css'; // optional for custom styles


const steps = [
  {
    icon:  <User size={60} style={{color: 'rgb(221, 168, 83)'}}  />,  // User icon for Sign Up
    title: "Sign Up",
    desc: "Create your free account in seconds and access your dashboard.",
    
  },
  {
    icon: <BookOpen size={60} style={{color: 'rgb(221, 168, 83)'}}  />,  // Book icon for Choose a Course
    title: "Choose a Course",
    desc: "Explore video courses and live virtual classes tailored to radiography.",
  },
  {
    icon: <PlayCircle size={60} style={{color: 'rgb(221, 168, 83)'}}  />,  // Play icon for Start Learning
    title: "Start Learning",
    desc: "Join live classes or study at your own pace with recorded sessions.",
  },
  {
    icon: <Award size={60} style={{color: 'rgb(221, 168, 83)'}}  />,  // Award icon for Get Certified
    title: "Get Certified",
    desc: "Earn certificates to boost your career and share your achievements.",
  },
];

const HowItWorks = () => {
  return (
    <section  className="py-5 text-center">
      <div className="container">
        <strong><h2 className="mb-4 fw-bold ">How StudiRad Works</h2></strong>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="mb-3">{step.icon}</div>
              <h5>{step.title}</h5>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
