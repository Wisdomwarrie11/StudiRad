import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary">
          Studi<span style={{ color: "rgb(6, 49, 69)" }}>Rad</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#benefits">Benefits</Nav.Link>
            <NavDropdown title="Opportunities" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/internship">Internships</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jobs">Jobs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/scholarship">Scholarships</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
