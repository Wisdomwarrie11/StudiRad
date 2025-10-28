import React, { useState } from "react";
import { Table, Container, Badge, Modal, Button } from "react-bootstrap";
import "./Internships.css";

const internshipData = [
  {
    id: 1,
    role: "Radiography Intern",
    hospital: "University of Calabar Teaching Hospital",
    location: "Calabar, Nigeria",
    deadline: "25 Oct 2025",
    link: "https://ucth.gov.ng/internship-application",
  },
  {
    id: 2,
    role: "Radiography Intern",
    hospital: "Lagos University Teaching Hospital (LUTH)",
    location: "Lagos, Nigeria",
    deadline: "05 Nov 2025",
    agent: true,
  },
  {
    id: 3,
    role: "Radiography Intern",
    hospital: "National Orthopaedic Hospital",
    location: "Enugu, Nigeria",
    deadline: "31 Oct 2025",
    link: "",
    agent: true,
  },
  {
    id: 4,
    role: "Radiography Intern",
    hospital: "Federal Medical Centre",
    location: "Owerri, Nigeria",
    deadline: "10 Nov 2025",
    link: "https://fmcowerri.gov.ng/internships",
  },
];

const Internships = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);

  const handleAction = (intern) => {
    setSelectedIntern(intern);
    setShowModal(true);
  };

  const proceedAction = () => {
    setShowModal(false);
    if (selectedIntern) {
      if (selectedIntern.link) {
        window.open(selectedIntern.link, "_blank");
      } else if (selectedIntern.agent) {
        window.open("https://t.me/studirad_agent", "_blank"); // Example chat link
      }
    }
  };

  return (
    <section className="internship-section py-5">
      <Container>
        <div style={{marginTop: '30px'}} className="text-center mb-5">
          <h2 style={{color:'rgb(221, 168, 83)'}} className="fw-bold">Radiography Internship Opportunities</h2>
          <p className="text-muted">
            Explore verified internship openings for radiography students across various hospitals and diagnostic centers.
          </p>
        </div>

        <div className="table-responsive shadow-sm rounded-3 bg-white p-3">
          <Table bordered hover responsive className="align-middle text-center">
            <thead style={{ backgroundColor: "rgb(6, 49, 69)", color: "white" }}>
              <tr>
                <th>Role</th>
                <th>Hospital</th>
                <th>Location</th>
                <th>Deadline</th>
                <th>Application</th>
              </tr>
            </thead>
            <tbody>
              {internshipData.map((intern) => (
                <tr key={intern.id}>
                  <td className="fw-semibold">{intern.role}</td>
                  <td>{intern.hospital}</td>
                  <td>{intern.location}</td>
                  <td>
                    <Badge bg="light" text="dark">
                      {intern.deadline}
                    </Badge>
                  </td>
                  <td>
                    {intern.link ? (
                      <a
                        onClick={() => handleAction(intern)}
                        className="apply-link"
                        href="#!"
                      >
                        Submit Application
                      </a>
                    ) : intern.agent ? (
                      <a
                        onClick={() => handleAction(intern)}
                        className="apply-link agent"
                        href="#!"
                      >
                        Chat an Agent
                      </a>
                    ) : (
                      <span className="text-muted small">
                        Link not available — contact hospital
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>

      {/* ===== Disclaimer Modal ===== */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>⚠️ Important Disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            StudiRad is <strong>not affiliated</strong> with any hospital or employer listed here.
            We only share opportunities for informational purposes to support students and professionals.
          </p>
          <p className="mb-0 text-danger fw-semibold">
            Always verify the legitimacy of any internship, employer, or agent before sharing
            personal details. StudiRad is not responsible for any outcomes or losses resulting from
            your communication with third-party entities.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "rgb(6, 49, 69)", border: "none" }}
            onClick={proceedAction}
          >
            I Understand & Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Internships;
