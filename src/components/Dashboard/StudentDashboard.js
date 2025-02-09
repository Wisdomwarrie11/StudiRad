import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'; // Custom styles
import LiveTutorials from './LiveTutorial';
import { Link } from 'react-router-dom';

function StudentDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    university: '',
    country: '',
    level: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setStudentData({ ...studentData, profilePicture: URL.createObjectURL(files[0]) });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };

  const handleSave = () => {
    setShowModal(false);
  };

  return (
    <div className="dashboard-container">
      <div style={{backgroundColor: '#213555', color: 'white'}} className="sidebar">
        <h2 className="sidebar-title">Menu</h2>
        <ul className="sidebar-list">
        <li>
          <Link to="/tutorial-1">Notifications</Link>
        </li>
        
        <li>
          <Link to="/tutorial-2">My Subscriptions</Link>
        </li>
        <li>
          <Link to="LiveTutorial.js">FAQs</Link>

        </li>
        <li>
          <Link to="/tutorial-1">Settings</Link>
        </li>
        <li>
          <Link to="">Log Out</Link>
        </li>
      
        </ul>
      </div>
      <div className="main-content">
        <header style={{backgroundColor: '#D8C4B6', color: 'black'}} className="header d-flex align-items-center p-3">
          <img
            src={studentData.profilePicture || 'https://via.placeholder.com/50'}
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px', borderColor: 'black' }}
          />
          <h2>{studentData.name || 'Your Name'}</h2>
        </header>

        <div className="container mt-4">
          <h3>Profile Information</h3>
          <div className="card p-3">
            <p><strong>Name:</strong> {studentData.name || 'Your first and last name'}</p>
            <p><strong>Email:</strong> {studentData.email || 'Your Email'}</p>
            <p><strong>University:</strong> {studentData.university || 'Your University'}</p>
            <p><strong>Country:</strong> {studentData.country || 'Your country'}</p>
            <p><strong>Level:</strong> {studentData.level || 'Your current level'}</p>
            <button style={{backgroundColor: '#213555', color: 'white'}} className="btn " onClick={() => setShowModal(true)}>
              Edit Profile
            </button>
          </div>
        </div>

        {showModal && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Student Profile</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={studentData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={studentData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="university" className="form-label">University</label>
                      <input
                        type="text"
                        className="form-control"
                        id="university"
                        name="university"
                        value={studentData.university}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        value={studentData.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="level" className="form-label">Level</label>
                      <select
                        id="level"
                        name="level"
                        className="form-select"
                        value={studentData.level}
                        onChange={handleChange}
                      >
                        <option value="">Select Level</option>
                        <option value="200 Level">200 Level</option>
                        <option value="300 Level">300 Level</option>
                        <option value="400 Level">400 Level</option>
                        <option value="500 Level">500 Level</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profilePicture" className="form-label">Profile Picture</label>
                      <input
                        type="file"
                        className="form-control"
                        id="profilePicture"
                        name="profilePicture"
                        onChange={handleChange}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
