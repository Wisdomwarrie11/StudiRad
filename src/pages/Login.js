import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Importing CSS for styling
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const click = () =>{

  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/auth/login", { username, password });
      const { role } = response.data;

      if (role === "student") {
        navigate("/student-dashboard");
      } else if (role === "tutor") {
        navigate("/tutor-dashboard");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("You're not yet registered.");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        {error && <p className="error-message">{error}</p>}
        <form style={{color: 'white'}} onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                    backgroundColor : 'white'
                  }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
          </div>
          <button style={{width: '100px'}} className="success" type="submit">Login</button>
        </form>
        {error && (
          <p>
            {error} <a href="/registration" className="register-link">Register here</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
