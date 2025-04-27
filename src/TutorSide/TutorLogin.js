import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      const { token, role } = response.data;

      // Save token and role to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      Swal.fire({
        title: 'Login Successful!',
        text: 'Redirecting you to your dashboard...',
        icon: 'success',
        timer: 5000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate('/tutordashboard'); 
      }, 2000);

    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data.msg) {
        Swal.fire('Error!', error.response.data.msg, 'error');
      } else {
        Swal.fire('Error!', 'Something went wrong. Try again.', 'error');
      }
    }
  };

  return (
    <div className="container mt-5 login">
      <div className="login-container">
        <div className="login-card">
          <h2 style={{color: 'white'}}>Welcome Back to StudiRad</h2>
          <p style={{color: 'white'}}>Your Learning continues...</p>
          {error && <p className="error-message">{error}</p>}
          <form style={{color: 'white'}} onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group password-field">
              <label htmlFor="password" className="form-label label-form">Password</label>
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
                    marginTop: '9px',
                    marginBottom: '9px',
                    padding: '0',
                    backgroundColor: 'white'
                  }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button style={{width: '100px'}} className="success" type="submit">Login</button>
          </form>
          <p style={{color: 'white', marginTop: '20px'}}>Not a user yet? <a href="/tutorregister">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
