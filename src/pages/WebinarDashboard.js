import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const RegistrationsDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const q = query(collection(db, "registrations"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading registrations...</p>;
  }

  if (registrations.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>No registrations yet.</p>;
  }

  return (
    <section style={{ padding: "40px", backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#1f2937" }}>
        Webinar Registrations
      </h2>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#1d4ed8", color: "white" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left" }}>First Name</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Last Name</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Qualification</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Referral</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Topic</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={{ padding: "12px" }}>{reg.firstName}</td>
                <td style={{ padding: "12px" }}>{reg.lastName}</td>
                <td style={{ padding: "12px" }}>{reg.email}</td>
                <td style={{ padding: "12px" }}>{reg.qualification}</td>
                <td style={{ padding: "12px" }}>{reg.referral}</td>
                <td style={{ padding: "12px" }}>{reg.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RegistrationsDashboard;
