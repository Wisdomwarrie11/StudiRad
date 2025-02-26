import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';  // Updated Google Login import
import './Login.css'; // Custom CSS for additional styling
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoogleLogin = (response) => {
    console.log(response);
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3 className="text-center mb-4">Register for Live Lectures</h3>

        <form onSubmit={handleSubmit} className="shadow p-4 rounded">
          

      

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

          <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>

              <div className="text-center mt-3">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div className="text-center mt-3">
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={handleGoogleLogin}
                  useOneTap
                />
              </div>

              <div className="text-center mt-3">
                <p>
                  Don't have an account? <Link to="/signup">Create new account</Link>
                </p>
              </div>
        </form>

      </div>
    </div>
  </div>


    
  );
};
};

export default LoginPage;