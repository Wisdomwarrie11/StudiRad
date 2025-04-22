import { Book, UserCheck, Monitor } from "lucide-react";
import "../components/Home/whatwedo.css"; // Animations

const activities = [
  {
    icon: <Book size={60} style={{ color: 'rgb(221, 168, 83)' }} className="p-2 rounded" />,
    title: "Teach Expertly Designed Courses",
    description: "Deliver structured radiography courses crafted to maximize student understanding and success.",
  },
  {
    icon: <UserCheck size={60} style={{ color: 'rgb(221, 168, 83)' }} className="p-2 rounded" />,
    title: "Mentor Future Radiographers",
    description: "Provide one-on-one mentorship, share your expertise, and guide students on their career paths.",
  },
  {
    icon: <Monitor size={60} style={{ color: 'rgb(221, 168, 83)' }} className="p-2 rounded" />,
    title: "Leverage Powerful Teaching Tools",
    description: "Access interactive assessments, quizzes, and case studies to create engaging learning experiences.",
  },
];

export default function WhatWeDoTutor() {
  return (
    <section style={{ backgroundColor: 'white' }} className="container py-5">
      <h2 style={{ color: 'rgb(24, 59, 78)' }} className="text-center mb-4 fw-bold">Your Role at StudiRad</h2>
      <p style={{ color: 'rgb(24, 59, 78)', fontSize: "1.1rem" }}>
        As a StudiRad tutor, you empower the next generation of radiographers. We provide the platform, tools, and community — you bring the passion and expertise.
      </p>
      <div className="row g-4">
        {activities.map((activity, index) => (
          <div key={index} className="col-md-4">
            <div className="what-we-do-inner card border-0 shadow-sm p-4 text-center">
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
