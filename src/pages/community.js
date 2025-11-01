import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { FaUserGraduate, FaUserMd, FaLightbulb, FaRocket } from "react-icons/fa";
import "./communities.css";

const communities = [
  {
    id: 1,
    title: "Students Community",
    icon: <FaUserGraduate size={60} color="rgb(6, 49, 69)" />,
    description:
      "A support hub for radiography students to share study materials, internship advice, and academic experiences.",
    link: "https://chat.whatsapp.com/IwoTXyziU9m5wdf72yOSgH",
  },
  {
    id: 2,
    title: "Professional Community",
    icon: <FaUserMd size={60} color="rgb(6, 49, 69)" />,
    description:
      "A professional space for radiographers to network, share expertise, and access mentorship opportunities.",
    link: "https://chat.whatsapp.com/EmYDwMvx5x24bz77eoHIVF",
  },
  {
    id: 3,
    title: "Brainstorming Community",
    icon: <FaLightbulb size={60} color="rgb(6, 49, 69)" />,
    description:
      "A collaborative space for discussing case studies, research topics, and academic project ideas.",
    link: "https://chat.whatsapp.com/JzCorkmFuqH0DH2eioLN30",
  },
  {
    id: 4,
    title: "Innovation Community",
    icon: <FaRocket size={60} color="rgb(6, 49, 69)" />,
    description:
      "A forward-thinking group for radiographers interested in technology, AI, and advancing imaging practices.",
    link: "https://chat.whatsapp.com/H9XatJqwvtR5qOgMQBaXsi",
  },
];

const Communities = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const handleShow = (community) => setSelectedCommunity(community);
  const handleClose = () => setSelectedCommunity(null);

  return (
    <section className="communities-section py-5">
      <Container>
        <div style={{marginTop: "50px"}} className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "rgb(6, 49, 69)" }}>
            Join Our Radiography Communities
          </h2>
          <p className="text-muted">
            Connect with radiography students and professionals through engaging, purpose-driven communities.  
            Click a category below to learn more and join.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {communities.map((community) => (
            <Col key={community.id} xs={12} sm={6} md={6} lg={3}>
              <Card
                className="community-card text-center shadow-sm"
                onClick={() => handleShow(community)}
              >
                <div className="icon-wrapper d-flex align-items-center justify-content-center">
                  {community.icon}
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{community.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ===== Modal Section ===== */}
        <Modal show={!!selectedCommunity} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "rgb(6, 49, 69)" }}>
              {selectedCommunity?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedCommunity?.description}</p>
            <div className="text-center mt-4">
              <a
                href={selectedCommunity?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="join-link"
              >
                Click to Join →
              </a>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
      
    </section>
  );
};

export default Communities;
