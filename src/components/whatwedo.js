import { Book, UserCheck, Monitor } from "lucide-react";

const activities = [
  {
    icon: <Book size={100} className="text-primary bg-light p-2 rounded" />, 
    title: "Expert-Led Courses",
    description: "Structured courses designed by experienced radiographers to ensure comprehensive learning.",
  },
  {
    icon: <UserCheck size={100} className="text-primary bg-light p-2 rounded" />, 
    title: "Personalized Mentorship",
    description: "Students get one-on-one guidance from industry professionals to navigate their learning journey.",
  },
  {
    icon: <Monitor size={100} className="text-primary bg-light p-2 rounded" />, 
    title: "Interactive Learning Tools",
    description: "Our platform offers quizzes, case studies, and real-time assessments to enhance knowledge retention.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="container my-5 py-5">
      <h2 className="text-center mb-4 fw-bold">What We Do</h2>
      <div className="row g-4">
        {activities.map((activity, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-0 shadow-sm p-4 text-center bg-light">
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