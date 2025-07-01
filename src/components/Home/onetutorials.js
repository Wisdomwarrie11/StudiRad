import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const OneOnOneSection = () => {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      title: "Have Access to One-on-One Lectures as Many Times as You Want",
      text: "Unlike traditional classroom settings, our platform allows you to schedule and attend as many one-on-one sessions as needed.",
      img: "tutor.png",
    },
    {
      title: "Connect Instantly with Our Qualified Tutors on StudiRad",
      text: "Our tutors are experts in radiography, ready to offer tailored guidance for any topic. Whether it's theory or practical questions, you'll have a qualified professional helping you step-by-step. You can ",
      img: "connect.png",
    },
  ];

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
    <section id="one-on-one-section" className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-5 fw-bold">📚 You Can Have Your Own Tutor</h1>
        {items.map((item, index) => (
          <Row className="align-items-center my-5" key={index}>
            <Col md={6} className={index % 2 === 0 ? '' : 'order-md-2'}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="fw-bold">{item.title}</h3>
                <p className="text-secondary">
                  {item.text}
                  {index === 1 && (
                    <a style={{ textDecoration: 'none' }} href="/tutorhome">Apply as a Tutor</a>
                  )}
                </p>
              </motion.div>
            </Col>
            <Col md={6} className="text-center">
              <motion.img
                src={item.img}
                alt=""
                className="img-fluid"
                style={{ maxHeight: '250px' }}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Col>
          </Row>
        ))}

        <div className="text-center mt-4">
          <Button
            className="fw-bold"
            style={{ width: '300px', padding: '10px', color: 'black', backgroundColor: 'rgb(221, 168, 83)', borderColor: 'rgb(221, 168, 83)' }}
            variant="primary"
          >
            <a style={{ textDecoration: 'none', color: 'black' }} href="./Tutorial">Schedule an instant class</a>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OneOnOneSection;
