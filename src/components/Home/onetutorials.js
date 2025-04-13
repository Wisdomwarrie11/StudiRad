import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Import for animations
import 'bootstrap/dist/css/bootstrap.min.css';

const OneOnOneSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    const section = document.getElementById('one-on-one-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="one-on-one-section" className="py-5 bg-light" style={{ backgroundColor: '#f9f9f9', animation: 'slideFadeIn 0.8s ease-out forwards;'}}>
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">📚 You Can Have Your Own Tutor</h1>

        {/* First part: Text on the left, Image on the right */}
        <div className={`row align-items-center mb-5 fade-in ${visible ? "visible" : ""}`}>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Dealing with a tough topic or course?</h3>
              <p className="text-secondary">
                Don't worry, you're not alone! We have a network of experienced tutors who specialize in radiography courses.
                Get the personalized help you need and master those challenging topics with ease.
              </p>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="confusedgirl.jpg"  // Add a relevant image here
                alt="Radiography tutor"
                className="img-fluid rounded shadow"
                style={{width: '500px', height: '300px'}}

              />
            </motion.div>
          </div>
        </div>

        {/* Second part: Image on the left, Text on the right */}
        <div className={`row align-items-center mb-5 fade-in ${visible ? "visible" : ""}`}>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="lecturer.jpg"  // Add a relevant image here
                alt="Radiography tutor"
                style={{width: '500px', height: '300px'}}
                className="img-fluid rounded shadow"
              />
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Connect with Our Qualified Tutors on studiRad</h3>
              <p className="text-secondary">
                Our tutors are experts in radiography, ready to offer tailored guidance for any topic. Whether it's theory or practical
                questions, you'll have a qualified professional helping you step-by-step.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Third part: Text on the left, Image on the right */}
        <div className={`row align-items-center mb-5 fade-in ${visible ? "visible" : ""}`}>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Have Access to One-on-One Lectures as Many Times as You Want</h3>
              <p className="text-secondary">
                Unlike traditional classroom settings, our platform allows you to schedule and attend as many one-on-one sessions as needed,
                ensuring that you have continuous support until you're confident with your course material.
              </p>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
              style={{width: '500px', height: '300px'}}
                src="onlinetutorials.jpg"  // Add a relevant image here
                alt="Radiography tutor"
                className="img-fluid rounded shadow"
              />
            </motion.div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default OneOnOneSection;

