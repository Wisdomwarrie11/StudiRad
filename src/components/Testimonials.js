import React from "react";

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Our Users Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <img
                src="student.jpeg"
                alt="Student"
                className="rounded-circle mx-auto mt-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <p className="card-text">
                  "This platform helped me bridge the gap between anatomy and radiographic techniques."
                </p>
                <h5 className="card-title fw-bold">- John Doe</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <img
                src="student.jpeg"
                alt="Tutor"
                className="rounded-circle mx-auto mt-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <p className="card-text">
                  "Teaching on this platform has been incredibly rewarding and easy."
                </p>
                <h5 className="card-title fw-bold">- Jane Smith</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <img
                src="student.jpeg"
                alt="User"
                className="rounded-circle mx-auto mt-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <p className="card-text">
                  "The flexibility and quality of tutorials are unmatched."
                </p>
                <h5 className="card-title fw-bold">- Alex Johnson</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
