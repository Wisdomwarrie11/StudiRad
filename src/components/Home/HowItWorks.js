import React from "react";
import { User, BookOpen, PlayCircle, Award } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  { icon: <User className="step-icon" />, title: "Sign Up", desc: "Create your free account in seconds and access your dashboard." },
  { icon: <BookOpen className="step-icon" />, title: "Choose a Course", desc: "Explore video courses and live virtual classes tailored to radiography." },
  { icon: <PlayCircle className="step-icon" />, title: "Start Learning", desc: "Join live classes or study at your own pace with recorded sessions." },
  { icon: <Award className="step-icon" />, title: "Get Certified", desc: "Earn certificates to boost your career and share your achievements." },
];

const HowItWorks = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4 fw-bold">How StudiRad Works</h2>
        <div className="row how-row">
          {steps.map((step, index) => (
           <div key={index} className="col-6 col-md-3 mb-4">
  <div className={`what-we-do-inner shade-${index}`}>
    <div className="icon-wrapper">{step.icon}</div>
    <h5>{step.title}</h5>
    <p>{step.desc}</p>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
