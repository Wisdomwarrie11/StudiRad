import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Import for animations
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const OneOnOneSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 } 
    );
    const section = document.getElementById('one-on-one-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="one-on-one-section" className="py-5 bg-light" style={{ backgroundColor: '#f9f9f9', animation: 'slideFadeIn 0.8s ease-out forwards;'}}>
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">📚 You Can Have Your Own Tutor</h1> 
        <div className={`row align-items-center mb-5 fade-in ${visible ? "visible" : ""}`}>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="fw-bold">Have Access to One-on-One Lectures as Many Times as You Want</h3>
              <p className="text-secondary">
                Unlike traditional classroom settings, our platform allows you to schedule and attend as many one-on-one sessions as needed.
              </p>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="fw-bold">Connect Instantly with Our Qualified Tutors on StudiRad</h3>
              <p className="text-secondary ">
                Our tutors are experts in radiography, ready to offer tailored guidance for any topic. Whether it's theory or practical
                questions, you'll have a qualified professional helping you step-by-step. You can <a style={{textDecoration: 'none'}} href="/tutorhome">Apply as a Tutor</a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Container className="">
            <Row>
              <Button className="fw-bold" style={{marginLeft: '80px', width: '300px', padding: '10px', color: 'black', backgroundColor: 'rgb(221, 168, 83)', borderColor: 'rgb(221, 168, 83)'}}
               variant="primary" 
               >
             Schedule an instant class
           </Button>
            </Row>
         
        </Container>
    </section>
  );
};

export default OneOnOneSection;

