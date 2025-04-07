import { BookOpen, Brain, Users, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <BookOpen size={100} className=" p-2 rounded" />, 
    title: "Comprehensive Learning Resources",
    description: "Access a wide range of expertly curated materials tailored to radiography students, covering fundamental to advanced topics.",
    align: "left",
  },
  {
    icon: <Brain size={100} className=" p-2 rounded" />,
    title: "Interactive and Engaging Lessons",
    description: "Experience a dynamic learning environment with quizzes, case studies, and real-world scenarios to enhance understanding.",
    align: "right",
  },
  {
    icon: <Users size={100} className=" p-2 rounded" />,
    title: "Community and Mentorship",
    description: "Join a network of radiography students and professionals for discussions, guidance, and mentorship opportunities.",
    align: "left",
  },
  {
    icon: <ShieldCheck size={100} className=" p-2 rounded" />,
    title: "Certified and Trusted Content",
    description: "Our courses and materials are reviewed by industry experts to ensure accuracy and reliability for your studies.",
    align: "right",
  },
];

export default function Benefits() {
  return (
    <section style={{backgroundColor: 'rgb(245, 238, 220)' }} className="container my-5 py-5">
      <h2 className="text-center mb-4 fw-bold">Why Choose Our Platform?</h2>
      {benefits.map((benefit, index) => (
        <div key={index} className={`row align-items-center my-4 ${benefit.align === "right" ? "flex-row-reverse" : ""}`}>
          <div className="col-md-6 text-center">
            {benefit.icon}
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{benefit.title}</h4>
            <p className="text-muted">{benefit.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
