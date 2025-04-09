// src/components/NewsletterSignup.js

import React from "react";

const NewsletterSignup = () => {
  return (
    <section style={{backgroundColor: 'rgb(24, 59, 78)'}} className=" text-white py-5 text-center">
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
          <button style={{marginTop: '15px',marginBottom: '15px',  marginLeft: '29px', width: '100px', height: '50', backgroundColor: 'rgb(221, 168, 83)'}} className="btn  fw-bold">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
