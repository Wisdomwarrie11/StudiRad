import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './navbar.css'

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'white'}} className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/"><img style={{height: '60px', width: '60px'}} src="Studiradlogo.png" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar1 collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ms-auto">
          <strong>
           <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li> </strong>
            <strong><li className="nav-item">
              <Link className="nav-link" to="/studentdashboard">My dashboard</Link>
            </li> </strong>
            <strong><li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li> </strong>
            <strong><li className="nav-item">
              <Link className="nav-link" to="/registration">Register</Link>
            </li> </strong>
            <strong><li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li> </strong>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
