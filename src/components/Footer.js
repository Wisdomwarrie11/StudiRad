import React from "react";
import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const Footer = () => (
  <footer className="text-center py-4 bg-dark text-white mt-5">
    <Container>
      <p className="mb-0">
        © {new Date().getFullYear()} StudiRad | Built with{" "}
        <FaHeart className="text-danger" /> for Radiographers
      </p>
    </Container>
  </footer>
);

export default Footer;
