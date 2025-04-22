import { useEffect, useRef } from "react";
import { BookOpen, Brain, Users, ShieldCheck } from "lucide-react";
import "../components/Home/Benefits.css";

const benefits = [
  {
    icon: <BookOpen size={100} className="p-2 rounded" />,
    title: "Curriculum Support & Resources",
    description:
      "Access structured course materials and curated content to help you deliver impactful lessons efficiently.",
    align: "left",
  },
  {
    icon: <Brain size={100} className="p-2 rounded" />,
    title: "Innovative Teaching Tools",
    description:
      "Engage students through interactive quizzes, real-world case studies, and dynamic class activities.",
    align: "right",
  },
  {
    icon: <Users size={100} className="p-2 rounded" />,
    title: "Collaborative Tutor Community",
    description:
      "Connect with fellow radiography tutors, share best practices, and grow professionally within a vibrant network.",
    align: "left",
  },
  {
    icon: <ShieldCheck size={100} className="p-2 rounded" />,
    title: "Recognized and Trusted Platform",
    description:
      "Join a platform that values your expertise, certifies your contribution, and supports your teaching journey.",
    align: "right",
  },
];

export default function BenefitsTutor() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("fade-in-visible");
            el.classList.remove("fade-in-section");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "" }}
      className="container my-5 py-5"
    >
      <h2 className="text-center mb-4 fw-bold">Why Teach on StudiRad?</h2>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className={`cursor-pointer row align-items-center my-4 fade-in-section ${
            benefit.align === "right" ? "flex-row-reverse" : ""
          }`}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <div className="col-md-6 text-center">{benefit.icon}</div>
          <div className="col-md-6">
            <h4 className="fw-bold">{benefit.title}</h4>
            <p className="text-muted">{benefit.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
