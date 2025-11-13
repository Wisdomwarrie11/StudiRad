import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc, addDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Container, Row, Col, Card, Button, Modal, Spinner } from "react-bootstrap";

const AdminReviewPage = () => {
  const [pendingMaterials, setPendingMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch pending materials
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "pendingMaterials"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPendingMaterials(data);
    });
    return () => unsub();
  }, []);

// ✅ Approve material (move to main collection safely)
const handleApprove = async (material) => {
  try {
    if (!material.fileUrl) {
      alert("⚠️ This material has no uploaded file link. Please reject or re-upload it.");
      return;
    }

    await addDoc(collection(db, "materials"), {
      title: material.title || "Untitled Material",
      description: material.description || "",
      uploader: material.uploader || "Anonymous",
      course: material.course || "Uncategorized",
      link: material.fileUrl, // 
      createdAt: new Date(),
    });

    await deleteDoc(doc(db, "pendingMaterials", material.id));

    alert("✅ Material approved successfully!");
    setSelectedMaterial(null);
  } catch (error) {
    console.error("Error approving material:", error);
    alert("❌ Failed to approve material. Check console for details.");
  }
};

  // ❌ Reject material (delete from Firestore only)
  const handleReject = async (material) => {
    const confirmDelete = window.confirm("Are you sure you want to reject this material?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      await deleteDoc(doc(db, "pendingMaterials", material.id));
      alert("Material rejected");
      setSelectedMaterial(null);
    } catch (error) {
      console.error("Error rejecting material:", error);
      alert("Failed to reject material.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ color: "rgb(6,49,69)" }}>
        Admin Review Page
      </h2>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {pendingMaterials.map((material) => (
          <Col key={material.id}>
            <Card
              className="shadow-sm border-0 h-100 p-3 text-center"
              style={{
                borderTop: "4px solid rgb(6,49,69)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Card.Body>
                <Card.Title className="fw-bold">{material.title}</Card.Title>
                <Card.Text className="text-muted mb-1">
                  Course: {material.course}
                </Card.Text>
                <Card.Text className="small">
                  Uploaded by: {material.uploader}
                </Card.Text>

                <Button
                  variant="outline-primary"
                  size="sm"
                  className="mt-2 w-auto"
                  onClick={() => setSelectedMaterial(material)}
                >
                  Review
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 📋 Review Modal */}
      <Modal
        show={!!selectedMaterial}
        onHide={() => setSelectedMaterial(null)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Review Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMaterial && (
            <>
              <h5>{selectedMaterial.title}</h5>
              <p>
                <strong>Course:</strong> {selectedMaterial.course}
              </p>
              <p>
                <strong>Uploaded by:</strong> {selectedMaterial.uploader}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {selectedMaterial.description || "No description provided."}
              </p>

              {/* 📄 Preview of uploaded file */}
              <div className="text-center my-3">
              {selectedMaterial.fileUrl && selectedMaterial.fileUrl.endsWith(".pdf") ? (
              <iframe
                src={selectedMaterial.fileUrl}
                title="Material Preview"
                width="100%"
                height="400px"
                style={{ borderRadius: "10px", border: "1px solid #ddd" }}
              ></iframe>
              ) : (
                <p className="text-muted text-center">Preview not available. Please download to view this file.</p>
              )}

              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleApprove(selectedMaterial)} disabled={loading}>
            {loading ? <Spinner size="sm" /> : "Approve"}
          </Button>
          <Button variant="danger" onClick={() => handleReject(selectedMaterial)} disabled={loading}>
            {loading ? <Spinner size="sm" /> : "Reject"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminReviewPage;
