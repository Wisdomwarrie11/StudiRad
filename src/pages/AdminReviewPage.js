// src/pages/AdminReviewPage.js
import React, { useEffect, useState } from "react";
import { Container, Table, Button, Spinner, Alert } from "react-bootstrap";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const AdminReviewPage = () => {
  const [pendingMaterials, setPendingMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchPendingMaterials = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "pendingMaterials"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPendingMaterials(data);
    } catch (error) {
      console.error("Error fetching pending materials:", error);
      setMessage("❌ Failed to load pending materials.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingMaterials();
  }, []);

  // ✅ Approve material
  const handleApprove = async (item) => {
    if (window.confirm(`Approve "${item.title}" for upload?`)) {
      try {
        const materialData = {
          course: item.course || "Unknown Course",
          title: item.title || "Untitled Material",
          uploader: item.uploader || "Anonymous",
          link: item.link || "",
          createdAt: serverTimestamp(),
          approvedFrom: item.email || "unknown",
        };
  
        console.log("Approving material data:", materialData);
  
        await addDoc(collection(db, "materials"), materialData);
  
        await deleteDoc(doc(db, "pendingMaterials", item.id));
  
        setMessage(`✅ "${item.title}" has been approved and uploaded.`);
        fetchPendingMaterials();
      } catch (error) {
        console.error("Error approving material:", error);
        setMessage("❌ Failed to approve material.");
      }
    }
  };
  

  // ❌ Reject material
  const handleReject = async (id, title) => {
    if (window.confirm(`Reject "${title}" and remove from review list?`)) {
      try {
        await deleteDoc(doc(db, "pendingMaterials", id));
        setMessage(`🗑️ "${title}" has been rejected and deleted.`);
        fetchPendingMaterials();
      } catch (error) {
        console.error("Error rejecting material:", error);
        setMessage("❌ Failed to reject material.");
      }
    }
  };

  // ✅ Format date
  const formatDate = (timestamp) => {
    if (!timestamp?.toDate) return "—";
    const date = timestamp.toDate();
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Container className="py-5" style={{ maxWidth: "900px", marginTop: "60px" }}>
      <h3 className="text-center fw-bold mb-4">Pending Materials for Review</h3>

      {message && (
        <Alert
          variant={message.includes("✅") ? "success" : "danger"}
          className="text-center"
        >
          {message}
        </Alert>
      )}

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="text-muted mt-2">Loading pending submissions...</p>
        </div>
      ) : pendingMaterials.length === 0 ? (
        <p className="text-center text-muted">No pending materials at the moment.</p>
      ) : (
        <div
          style={{
            maxHeight: "450px",
            overflowY: "auto",
            borderRadius: "8px",
            border: "1px solid #dee2e6",
          }}
        >
          <Table striped bordered hover responsive className="mb-0">
            <thead style={{ backgroundColor: "rgb(6, 49, 69)", color: "white", position: "sticky", top: 0 }}>
              <tr>
                <th>Course</th>
                <th>Title</th>
                <th>Uploader</th>
                <th>Email</th>
                <th>Link</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingMaterials.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.title}</td>
                  <td>{item.uploader}</td>
                  <td>{item.email}</td>
                  <td>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </td>
                  <td>{formatDate(item.createdAt)}</td>
                  <td className="text-center">
                    <Button
                      variant="success"
                      size="sm"
                      className="me-2 w-auto"
                      onClick={() => handleApprove(item)}
                    >
                      Approve
                    </Button>
                    <Button
                    className="w-auto"
                      variant="danger"
                      size="sm"
                      style={{marginTop: "10px"}}
                      onClick={() => handleReject(item.id, item.title)}
                    >
                      Reject
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default AdminReviewPage;
