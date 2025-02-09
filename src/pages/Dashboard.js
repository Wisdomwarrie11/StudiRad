import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import Sidebar from "./Sidebar";
import YourPackages from "./YourPackages";
import SavedRecordings from "./SavedRecordings";
import "./dashboard.css"; // Styling file

const StudentDashboard = () => {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [userName, setUserName] = useState("Student");
  const [packages, setPackages] = useState([]);

  const handleProfileCompletion = (name) => {
    setIsProfileComplete(true);
    setUserName(name);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        {/* Profile Section */}
        <div className="profile-segment card">
          <h2>{isProfileComplete ? userName : "Welcome, Student"}</h2>
          {!isProfileComplete && (
            <p className="notification">
              Please set up your profile.{" "}
              <button
                className="btn btn-primary"
                onClick={() => setIsProfileComplete(false)}
              >
                Update Profile
              </button>
            </p>
          )}
          <ProfileModal
            isProfileComplete={isProfileComplete}
            onProfileComplete={handleProfileCompletion}
          />
        </div>

        {/* Packages Section */}
        <div className="packages-segment card">
          <h3>Your Packages</h3>
          {packages.length > 0 ? (
            <YourPackages packages={packages} />
          ) : (
            <p>No packages subscribed yet.</p>
          )}
          <button
            className="btn btn-success"
            onClick={() => (window.location.href = "/packages")}
          >
            Choose a Package
          </button>
        </div>

        {/* Saved Recordings */}
        <SavedRecordings />
      </div>
    </div>
  );
};

export default StudentDashboard;
