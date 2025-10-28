import React, { useState } from "react";
import { Table, Container, Badge, Modal, Button } from "react-bootstrap";
import "./Jobs.css";

const jobData = [
  {
    id: 1,
    role: "Radiographer",
    hospital: "St. Luke’s Medical Centre",
    location: "Lagos, Nigeria",
    deadline: "30 Oct 2025",
    link: "https://stlukesjobs.com/apply",
  },
  {
    id: 2,
    role: "CT/MRI Technologist",
    hospital: "National Hospital Abuja",
    location: "Abuja, Nigeria",
    deadline: "28 Oct 2025",
    link: "",
    agent: true,
  },
  {
    id: 3,
    role: "Sonographer",
    hospital: "Primecare Diagnostics",
    location: "Port Harcourt, Nigeria",
    deadline: "10 Nov 2025",
    link: "https://primecare.com/careers",
  },
  {
    id: 4,
    role: "X-ray Radiographer",
    hospital: "Gracefield Specialist Hospital",
    location: "Enugu, Nigeria",
    deadline: "15 Nov 2025",
    link: "",
    agent: true,
  },
];

const Jobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleAction = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const proceedAction = () => {
    setShowModal(false);
    if (selectedJob) {
      if (selectedJob.link) {
        window.open(selectedJob.link, "_blank");
      } else if (selectedJob.agent) {
        window.open("https://t.me/studirad_agent", "_blank"); // Example chat link
      }
    }
  };

  return (
    <section className="jobs-section py-5">
      <Container>
        <div style={{marginTop: '30px'}} className="text-center mb-5">
          <h2 style={{color:'rgb(221, 168, 83)'}} className="fw-bold">Radiography Job Opportunities</h2>
          <p className="text-muted">
            Explore verified openings for radiographers, sonographers, and imaging professionals.
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
              {jobData.map((job) => (
                <tr key={job.id}>
                  <td className="fw-semibold">{job.role}</td>
                  <td>{job.hospital}</td>
                  <td>{job.location}</td>
                  <td>
                    <Badge bg="light" text="dark">
                      {job.deadline}
                    </Badge>
                  </td>
                  <td>
                    {job.link ? (
                      <a
                        onClick={() => handleAction(job)}
                        className="apply-link"
                        href="#!"
                      >
                        Submit Application
                      </a>
                    ) : job.agent ? (
                      <a
                        onClick={() => handleAction(job)}
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
            StudiRad is <strong>not a recruitment agency</strong> and does not guarantee job
            placement. We only share opportunities for informational purposes.
          </p>
          <p className="mb-0 text-danger fw-semibold">
            Always verify the legitimacy of any employer or agent before sharing
            personal or financial information. StudiRad will not be held responsible
            for any outcomes or losses resulting from your communication or engagement
            with third-party entities.
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

export default Jobs;
