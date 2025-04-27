import React, { useEffect, useRef } from "react";
import "./TutorTestimony.css";

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("testimonial-visible");
            el.classList.remove("testimonial-hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current.querySelectorAll(".testimonial-hidden");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="cursor-pointer bg-light py-5" ref={sectionRef}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Other Tutors Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm text-center testimonial-hidden">
              <div className="card-body">
                <p className="card-text">
                  "StudiRad helped me maximize my potentials as a Tutor."
                </p>
                <h5 className="card-title fw-bold">-Mrs Joy Chinomso</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center testimonial-hidden">
              <div className="card-body">
                <p className="card-text">
                  "Teaching on this platform has been incredibly rewarding and easy."
                </p>
                <h5 className="card-title fw-bold">- Rad Warrie, Wisdom</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center testimonial-hidden">
              <div className="card-body">
                <p className="card-text">
                  "I have built the neccessary skills I need as an Online Tutor from StudiRad."
                </p>
                <h5 className="card-title fw-bold">- Dr. Lade Timothy (PhD) </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
