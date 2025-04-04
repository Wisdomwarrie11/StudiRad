// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Navbar = () => {
  return (
    <nav style={{marginBottom: '500px'}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/"><img style={{height: '80px', width: '80px'}} src="Studirad.png" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="/studentdashboard">My dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registration">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
