import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the toggler

function StudentDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    university: '',
    country: '',
    level: '',
    profilePicture: '',
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // State to toggle sidebar

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture' && files.length > 0) {
      setStudentData({ ...studentData, profilePicture: URL.createObjectURL(files[0]) });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };

  return (
    <div className="dashboard-container d-flex">
      {/* Sidebar */}
      <nav className={`sidebar bg-dark text-white p-3 ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <h2 style={{ marginTop: '50px' }} className="text-center">Menu</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/notifications">Notifications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/subscriptions">My Subscriptions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/faqs">FAQs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/logout">Log Out</Link>
          </li>
        </ul>
      </nav>

      {/* Toggler button for medium and smaller screens */}
      <button style={{marginTop: '55px', marginRight: '40px', width: '50px'}}
        className="sidebar-toggler btn btn-light d-md-none" 
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
        {sidebarCollapsed ? <FaBars /> : <FaTimes />} {/* Show icons depending on the state */}
      </button>

      {/* Main Content */}
      <div style={{marginTop: '30px', marginLeft: '40px'}}  className="main-content flex-grow-1 p-4">
        <header className="d-flex align-items-center p-3 bg-light shadow-sm rounded">
          <img
            src={studentData.profilePicture || 'https://via.placeholder.com/50'}
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px' }}
          />
          <h2 className="mb-0">{studentData.name || 'Your Name'}</h2>
        </header>

        <div className="container mt-4">
          <h3>Profile Information</h3>
          <div className="card p-3">
            <p><strong>Name:</strong> {studentData.name || 'Your Name'}</p>
            <p><strong>Email:</strong> {studentData.email || 'Your Email'}</p>
            <p><strong>University:</strong> {studentData.university || 'Your University'}</p>
            <p><strong>Country:</strong> {studentData.country || 'Your Country'}</p>
            <p><strong>Level:</strong> {studentData.level || 'Your Level'}</p>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={studentData.name} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={studentData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">University</label>
                    <input type="text" className="form-control" name="university" value={studentData.university} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input type="text" className="form-control" name="country" value={studentData.country} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Level</label>
                    <select className="form-select" name="level" value={studentData.level} onChange={handleChange}>
                      <option value="">Select Level</option>
                      <option value="200 Level">200 Level</option>
                      <option value="300 Level">300 Level</option>
                      <option value="400 Level">400 Level</option>
                      <option value="500 Level">500 Level</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Profile Picture</label>
                    <input type="file" className="form-control" name="profilePicture" onChange={handleChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
