import React from "react";

const WhatWeDo = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What We Do</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="tutorials.jpg"
                alt="Live Tutorials"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Live Tutorials</h5>
                <p className="card-text">Interactive online sessions with experts in real-time.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="recorded.jpg"
                alt="Recorded Sessions"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Recorded Sessions</h5>
                <p className="card-text">Access past tutorials anytime for flexible learning.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="tutor.jpg"
                alt="Expert Guidance"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Expert Guidance</h5>
                <p className="card-text">Learn directly from seasoned professionals in the field.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
