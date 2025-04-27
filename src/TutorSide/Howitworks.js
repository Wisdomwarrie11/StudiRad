import React from "react";
import { User, BookOpen, PlayCircle, Award } from "lucide-react"; // Icons
import '../components/Home/HowItWorks.css'; // Optional styles
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: <User size={60} style={{ color: 'rgb(221, 168, 83)' }} />, // User icon for Sign Up
    title: "Join as a Tutor",
    desc: "Sign up quickly and set up your professional teaching profile.",
  },
  {
    icon: <BookOpen size={60} style={{ color: 'rgb(221, 168, 83)' }} />, // Book icon for Create a Course
    title: "Create Your Courses",
    desc: "Design video lessons and plan live sessions tailored to radiography students.",
  },
  {
    icon: <PlayCircle size={60} style={{ color: 'rgb(221, 168, 83)' }} />, // Play icon for Start Teaching
    title: "Start Teaching",
    desc: "Engage students through live classes, quizzes, and interactive learning tools.",
  },
  {
    icon: <Award size={60} style={{ color: 'rgb(221, 168, 83)' }} />, // Award icon for Inspire and Earn
    title: "Inspire & Earn",
    desc: "Impact future radiographers and get rewarded for your expertise and mentorship.",
  },
];


const HowItWorksTutor = () => {

  const navigate = useNavigate();

  return (
    <section className="py-5 text-center">
      <div className="container">
        <strong><h2 className="mb-4 fw-bold">How Tutoring Works on StudiRad</h2></strong>
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
      <button className="fw-bold" style={{width: '200px', backgroundColor: 'rgb(221, 168, 83)', color: 'black'}} onClick= {() => navigate('/tutorregistration')}>
        Join Us as a Tutor
      </button>
    </section>
  );
};

export default HowItWorksTutor;
