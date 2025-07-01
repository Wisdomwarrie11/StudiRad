import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <div style={{marginTop: '100px'}} className="contact-page container py-5">
      <div className="text-center mb-5">
        <h1 style={{color: 'rgb(24, 59, 78)'}} className="fw-bold gradient-text">Contact Us</h1>
        <p className="text-muted fs-5">We'd love to hear from you — questions, feedback or collaboration!</p>
      </div>

      <div className="row g-5">
        {/* Contact Form */}
        <div className="container col-md-7">
          <form className="contact-form shadow p-4 rounded-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your email address" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Subject" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message here..." required />

            </div>
            <button style={{width: '100%', backgroundColor: 'rgb(24, 59, 78)', color: 'white'}} type="submit" className="btn fw-bold">Send Message</button>


          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-5">
          <div className="contact-info">
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p><strong>Email:</strong> studirad@gmail.com</p>
            <p><strong>Phone:</strong> +2349029729621</p>
            <p><strong>Location:</strong> Nigeria (Online-based)</p>

            <div className="map-container mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8355053093725!2d7.497253814318259!3d6.466789825043813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043793b0e9bb3ef%3A0x67d7b6c88f3186dc!2sNigeria!5e0!3m2!1sen!2sng!4v1687521168894"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
