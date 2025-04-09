import React from "react";

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Our Users Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <p className="card-text">
                  "StudiRad helped me understand radiographic techniques very well."
                </p>
                <h5 className="card-title fw-bold">-Victoria Adamu</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <p className="card-text">
                  "Teaching on this platform has been incredibly rewarding and easy."
                </p>
                <h5 className="card-title fw-bold">- Warrie, Wisdom</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">             
              <div className="card-body">
                <p className="card-text">
                  "The flexibility and quality of tutorials are unmatched."
                </p>
                <h5 className="card-title fw-bold">- Etima Sunday</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
