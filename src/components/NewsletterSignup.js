// src/components/NewsletterSignup.js

import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="bg-dark text-white py-5 text-center">
      <div className="container">
        <h2 style={{color: 'white'}}>Stay in the Loop 🎓</h2>
        <p style={{color: 'white'}}>Get email updates about new courses, classes, and special offers.</p>
        <form className="d-flex justify-content-center mt-4 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control w-50 mb-2 mb-sm-0 me-sm-2"
            style={{ maxWidth: "400px" }}
          />
          <button style={{width: '100px'}} className="btn btn-warning fw-bold">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
