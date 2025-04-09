import { Book, UserCheck, Monitor } from "lucide-react";
import "./whatwedo.css"; // We'll define the animations here

const activities = [
  {
    icon: <Book size={60} className=" p-2 rounded" />,
    title: "Expert-Led Courses",
    description: "Structured courses designed by experienced radiographers to ensure comprehensive learning.",
  },
  {
    icon: <UserCheck size={60} className="p-2 rounded" />,
    title: "Personalized Mentorship",
    description: "Students get one-on-one guidance from industry professionals to navigate their learning journey.",
  },
  {
    icon: <Monitor size={60} className=" p-2 rounded" />,
    title: "Interactive Learning Tools",
    description: "Our platform offers quizzes, case studies, and real-time assessments to enhance knowledge retention.",
  },
];

export default function WhatWeDo() {
  return (
    <section style={{backgroundColor: 'rgb(24, 59, 78)'}} className="container my-5 py-5">
      <h2 style = {{color: 'white'}} className="text-center mb-4 fw-bold">What We Do in StudiRad</h2>
      <p style={{color: 'white', fontSize: "1.1rem"}}>From coursework to career prep, Studirad supports your journey every step of the way. Study smarter, learn faster, and move closer to your radiography goals.</p>
      <div className="row g-4">
        {activities.map((activity, index) => (
          <div key={index} className="col-md-4">
            <div className="what-we-do-card card border-0 shadow-sm p-4 text-center">
              <div className="mb-3">{activity.icon}</div>
              <h5 className="fw-bold">{activity.title}</h5>
              <p className="text-muted">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
