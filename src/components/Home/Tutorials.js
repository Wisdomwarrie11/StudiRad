import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tutorial.css';

const Tutorial = () => {
  const [tutorLevel, setTutorLevel] = useState('');

  const getPricesByLevel = (level) => {
    switch (level) {
      case 'BSc':
        return [
          { label: '30 mins - ₦1000', value: '30 mins - ₦1000' },
          { label: '1 hour - ₦2000', value: '1 hour - ₦2000' },
          { label: '2 hours - ₦4000', value: '2 hours - ₦4000' },
        ];
      case 'MSc':
        return [
          { label: '30 mins - ₦2000', value: '30 mins - ₦2000' },
          { label: '1 hour - ₦4000', value: '1 hour - ₦4000' },
          { label: '2 hours - ₦8000', value: '2 hours - ₦8000' },
        ];
      case 'PhD':
        return [
          { label: '30 mins - ₦3500', value: '30 mins - ₦3500' },
          { label: '1 hour - ₦7000', value: '1 hour - ₦7000' },
          { label: '2 hours - ₦14000', value: '2 hours - ₦14000' },
        ];
      default:
        return [];
    }
  };

  const durations = getPricesByLevel(tutorLevel);

  return (
    <div style={{marginTop: '100px'}} className="tutorial-form container py-5 fade-in">
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
            <option value="Ultrasound">Ultrasound</option>
            <option value="Radiation Physics">Radiation Physics</option>
            <option value="CT & MRI">CT & MRI</option>
            <option value="Anatomy & Physiology">Anatomy & Physiology</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Topic of Interest</label>
          <input type="text" name="topic" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Tutor Academic Level</label>
          <select
            name="tutor-level"
            className="form-select"
            value={tutorLevel}
            onChange={(e) => setTutorLevel(e.target.value)}
            required
          >
            <option value="">-- Select Tutor Level --</option>
            <option value="BSc">BSc</option>
            <option value="MSc">MSc</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Session Duration & Price</label>
          <select name="duration" className="form-select" required>
            <option value="">-- Select Duration --</option>
            {durations.map((duration, idx) => (
              <option key={idx} value={duration.value}>{duration.label}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Date</label>
          <input type="date" name="date" className="form-control" required />
        </div>

        <input type="hidden" name="_next" value="/thank-you.html" />
        <input type="hidden" name="_captcha" value="false" />

        <button type="submit" className="btn btn-primary w-100">Submit Request</button>
      </form>
    </div>
  );
};

export default Tutorial;
