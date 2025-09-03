import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HubSection.css"; // we'll style the cards here

const hubs = [
  {
    title: "📘 Material Hub",
    description: "Access study materials shared by fellow students.",
    levelLinks: {
      "100": "https://wa.me/123456789?text=Join%20Material%20Hub%20100L",
      "200": "https://wa.me/123456789?text=Join%20Material%20Hub%20200L",
      "300": "https://wa.me/123456789?text=Join%20Material%20Hub%20300L",
    },
  },
  {
    title: "👥 Brainstorming Hub",
    description: "Join academic discussions and solve problems together.",
    levelLinks: {
      "100": "https://wa.me/123456789?text=Join%20Brainstorming%20Hub%20100L",
      "200": "https://wa.me/123456789?text=Join%20Brainstorming%20Hub%20200L",
      "300": "https://wa.me/123456789?text=Join%20Brainstorming%20Hub%20300L",
    },
  },
  {
    title: "💼 Internship Hub",
    description: "Find internship opportunities and connect with peers.",
    levelLinks: {
      "100": "https://wa.me/123456789?text=Join%20Internship%20Hub%20100L",
      "200": "https://wa.me/123456789?text=Join%20Internship%20Hub%20200L",
      "300": "https://wa.me/123456789?text=Join%20Internship%20Hub%20300L",
    },
  },
  {
    title: "🎯 Career Hub",
    description: "Get mentorship, career advice, and professional growth tips.",
    levelLinks: {
      "100": "https://wa.me/123456789?text=Join%20Career%20Hub%20100L",
      "200": "https://wa.me/123456789?text=Join%20Career%20Hub%20200L",
      "300": "https://wa.me/123456789?text=Join%20Career%20Hub%20300L",
    },
  },
];

const HubSection = () => {
  const [selectedHub, setSelectedHub] = useState(null);
  const [level, setLevel] = useState("");

  const handleJoin = () => {
    if (selectedHub && level) {
      const link = selectedHub.levelLinks[level];
      if (link) {
        window.open(link, "_blank");
        setSelectedHub(null);
        setLevel("");
      } else {
        alert("Invalid level selected");
      }
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">🌐 Explore Our Hubs</h2>
        <h5 className="text-center mb-4">Click on any of the hubs to begin exploring</h5>
        <div className="row g-4">
          {hubs.map((hub, index) => (
            <div className="col-6 col-md-3" key={index}>
            <div
              className={`hub-card h-100`}
              onClick={() => setSelectedHub(hub)}
            >
              <div className="card-body text-center">
                <h5 className="fw-semibold">{hub.title}</h5>
                <p className="text-dark">{hub.description}</p>
              </div>
            </div>
          </div>
          
          ))}
        </div>
      </div>

      {/* Bootstrap Modal */}
      {selectedHub && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedHub.title} - Enter Your Level
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedHub(null)}
                ></button>
              </div>
              <div className="modal-body">
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="form-select mb-3"
                >
                  <option value="">Select Level</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                </select>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedHub(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleJoin}
                >
                  Join Group
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HubSection;
