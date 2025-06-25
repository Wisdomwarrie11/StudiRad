import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

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
        <h2 className="text-center fw-bold mb-4">What Our Users Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm text-center testimonial-hidden">
              <div className="card-body">
                <p className="card-text">
                  "StudiRad helped me understand radiographic techniques very well."
                </p>
                <h5 className="card-title fw-bold">-Victoria Adamu</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center testimonial-hidden">
              <div className="card-body">
                <p className="card-text">
                  "Teaching on this platform has been incredibly rewarding and easy."
                </p>
                <h5 className="card-title fw-bold">- Samuel, James</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center testimonial-hidden">
              <div className="card-body">
                <p className="card-text">
                  "The flexibility and quality of tutorials are unmatched."
                </p>
                <h5 className="card-title fw-bold">- Chibuzor, Kelechi</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
