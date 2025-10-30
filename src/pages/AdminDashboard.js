import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Navbar, Nav, Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FileText, Book, Gear, BoxArrowRight } from "react-bootstrap-icons";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/adminlogin");
  };

  const dashboardItems = [
    {
      title: "Post Blog",
      description: "Create and manage blog posts.",
      icon: <FileText size={40} color="#063145" />,
      path: "/adminblog",
    },
    {
      title: "Post Materials",
      description: "Upload study resources and materials.",
      icon: <Book size={40} color="#063145" />,
      path: "/adminmaterials",
    },
    {
      title: "Settings",
      description: "Manage your admin preferences.",
      icon: <Gear size={40} color="#063145" />,
      path: "/settings",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#063145" }}
        variant="dark"
        className="py-3 shadow-sm"
      >
        <Container>
          <Navbar.Brand className="fw-bold">StudiRad Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Button
                variant="outline-light"
                onClick={handleLogout}
                className="d-flex align-items-center"
              >
                <BoxArrowRight className="me-2" /> Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dashboard content */}
      <Container className="py-5">
        <h3 className="fw-bold mb-4 text-center" style={{ color: "#063145" }}>
          Admin Dashboard
        </h3>

        <Row className="g-4 justify-content-center">
          {dashboardItems.map((item, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => navigate(item.path)}
                className="text-center shadow-sm border-0 h-100"
                style={{
                  cursor: "pointer",
                  borderRadius: "15px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                  {item.icon}
                  <Card.Title className="mt-3 fw-bold">{item.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
