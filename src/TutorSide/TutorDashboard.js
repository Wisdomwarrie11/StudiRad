import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddCourse from 'components/classes/AddCourse';




function TutorDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [tutorData, setTutorData] = useState({
    name: '',
    email: '',
    university: '',
    country: '',
    level: '',
    profilePicture: '',
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture' && files.length > 0) {
      setTutorData({ ...tutorData, profilePicture: URL.createObjectURL(files[0]) });
    } else {
      setTutorData({ ...tutorData, [name]: value });
    }
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login'; // If not logged in
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/courses/my-courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);




  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/tutor/update', tutorData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Profile updated successfully!');
      setShowModal(false);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to update profile');
    }
  };
  

  const fetchTutorProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login'; // If not logged in
        return;
      }

      const response = await axios.get('http://localhost:5000/api/tutor/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTutorData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tutor data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTutorProfile();
  }, []);

  const navigate = useNavigate()

  return (

    <div className="dashboard-container d-flex">
      {/* Sidebar */}
      <nav className={`sidebar bg-dark text-white p-3 ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <h2 style={{ marginTop: '100px' }} className="text-center">Menu</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/notifications">Notifications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/my-classes">My Classes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/messages">Messages</Link>
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
      <button style={{ marginTop: '100px', marginRight: '40px', width: '50px' }}
        className="sidebar-toggler btn btn-light d-md-none"
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
        {sidebarCollapsed ? <FaBars /> : <FaTimes />}
      </button>

      {/* Main Content */}
      <div style={{ marginTop: '70px', marginLeft: '40px' }} className="main-content flex-grow-1 p-4">
        <header className="d-flex align-items-center p-3 bg-light shadow-sm rounded">
          <img
            src={tutorData.profilePicture || 'https://via.placeholder.com/50'}
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px' }}
          />
          <h2 className="mb-0">{isLoading ? "Loading..." : tutorData.name || "Your Name"}</h2>
        </header>

        <div className="container mt-4">
          <h3>Profile Information</h3>
          <div className="card p-3">
            <p><strong>Name:</strong> {tutorData.name || 'Your Name'}</p>
            <p><strong>Email:</strong> {tutorData.email || 'Your Email'}</p>
            <p><strong>University:</strong> {tutorData.university || 'Your University'}</p>
            <p><strong>Country:</strong> {tutorData.country || 'Your Country'}</p>
            <p><strong>Level:</strong> {tutorData.level || 'Your Level'}</p>
            <button
              style={{ width: "200px", backgroundColor: 'rgb(24, 59, 78)' }}
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="course-list-container">
      <h3>Your Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            {course.image && <img src={course.image} alt={course.title} />}
          </li>
        ))}
      </ul>
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
                    <input type="text" className="form-control" name="name" value={tutorData.name} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={tutorData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">University</label>
                    <input type="text" className="form-control" name="university" value={tutorData.university} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input type="text" className="form-control" name="country" value={tutorData.country} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Level</label>
                    <input type="text" className="form-control" name="level" value={tutorData.level} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Profile Picture</label>
                    <input type="file" className="form-control" name="profilePicture" onChange={handleChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TutorDashboard;
