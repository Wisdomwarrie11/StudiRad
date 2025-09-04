import { Book, UserCheck, Monitor, Briefcase } from "lucide-react";
import "./whatwedo.css";

const activities = [
  {
    icon: <Book size={60} className="p-2 rounded" />,
    title: "Expert-Led Courses",
    description: "Structured classes designed by experienced radiographers to ensure comprehensive learning.",
  },
  {
    icon: <UserCheck size={60} className="p-2 rounded" />,
    title: "Personalized Mentorship",
    description: "Students get one-on-one guidance from industry professionals to navigate their learning journey.",
  },
  {
    icon: <Monitor size={60} className="p-2 rounded" />,
    title: "Interactive Learning Tools",
    description: "Our platform offers quizzes, case studies, and real-time assessments to enhance knowledge retention.",
  },
  {
    icon: <Briefcase size={60} className="p-2 rounded" />,
    title: "Opportunities",
    description: "Access internships, research collaborations, and job placements to advance your radiography career.",
  },
];

export default function WhatWeDo() {
  return (
    <section style={{ marginTop: "30px" }} className="container">
      <h2 style={{ color: "rgb(24, 59, 78)" }} className="text-center mb-4 fw-bold">
        What We Do in StudiRad
      </h2>
      <div className="row g-4">
        {activities.map((activity, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <div className={`what-we-do-inner card border-0 shadow-sm p-4 text-center shade-${index}`}>
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
