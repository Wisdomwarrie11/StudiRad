import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tutorial.css';

const Tutorial = () => {
  return (
    <div className="tutorial-form container py-5 fade-in">
      <h2 className="text-center fw-bold mb-4">Request a One-on-One Tutorial</h2>
      <p className="text-center text-muted mb-5">
        Fill the form below to book a personalized session with a qualified tutor. We’ll respond within 24 hours.
      </p>
      <form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST" className="w-75 mx-auto">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Choose Course</label>
          <select name="course" className="form-select" required>
            <option value="">-- Select Course --</option>
            <option value="CT & MRI">General Radiography</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Radiation Physics">Radiation Physics</option>
            <option value="CT & MRI">CT</option>
            <option value="CT & MRI">MRI</option>
            <option value="CT & MRI">Specials Examination</option>
            <option value="Anatomy & Physiology">Anatomy & Physiology</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Topic of Interest</label>
          <input type="text" name="topic" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Session Duration</label>
          <select name="duration" className="form-select" required>
            <option value="">-- Select Duration --</option>
            <option value="30 mins - ₦3700">30 mins - ₦3700</option>
            <option value="1 hour - ₦5000">1 hour - ₦5000</option>
            <option value="2 hours - ₦9000">2 hours - ₦9000</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Date</label>
          <input type="date" name="date" className="form-control" required />
        </div>

        <input type="hidden" name="_next" value="/thank-you.html" />
        <input type="hidden" name="_captcha" value="false" />

        <button type="submit" style={{color: 'white', backgroundColor: 'rgb(24, 59, 78)'}} className="btn w-100">Submit Request</button>
      </form>
    </div>
  );
};

export default Tutorial;
