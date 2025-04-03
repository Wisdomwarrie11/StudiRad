import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './register.css'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'student',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);

      // SweetAlert for success
      Swal.fire({
        title: 'Registration Successful!',
        text: 'Please check your email for verification.',
        icon: 'success',
        confirmButtonText: 'Okay'
      });

      window.location.href = '/login'; // Redirect to login page after success

    } catch (error) {
      setIsLoading(false);

      if (error.response && error.response.data) {
        // SweetAlert for user already exists
        if (error.response.data.msg === 'User already exists') {
          Swal.fire({
            title: 'Error!',
            text: 'This email is already registered. Please try logging in.',
            icon: 'error',
            confirmButtonText: 'Okay'
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred, please try again.',
            icon: 'error',
            confirmButtonText: 'Okay'
          });
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred, please try again.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    }
  };

  return (
    <div className="container mt-5 registration">
      <div  className="row justify-content-center">
        <div style={{marginTop: '50px'}} className="col-md-6 forms">
          <h3 className="text-center mb-4">Register for Live Lectures</h3>

          <form onSubmit={handleSubmit} className="shadow p-4 rounded form">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your first and last name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Username</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your Username"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                  style={{
                    width: '40px',
                    padding: '0',
                  }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
              </select>
            </div>

            <button style={{backgroundColor: '#048851'}} 
            type="submit" className="btn w-100" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <div className="text-center mt-3">
            <p>Already registered? <a href="/login">Log in instead</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
