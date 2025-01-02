import React from "react";

const Benefits = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Benefits for Students and Tutors</h2>
        <div className="row">
          {/* Benefits for Students */}
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <img
              style={{height: '300px'}}
                src="student.jpeg"
                alt="Students Benefit"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold text-black">For Students</h3>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Access live and recorded tutorials anytime.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Learn from industry professionals.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Improve understanding of anatomy and radiographic modalities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Benefits for Tutors */}
          <div className="col-md-6">
            <div className="card shadow-sm">
              <img
              style={{height: '300px'}}
                src="tutorman.jpeg"
                alt="Tutors Benefit"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold text-black">For Tutors</h3>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Share expertise with a wider audience.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Earn income by hosting tutorials.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Showcase teaching skills and gain recognition.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
