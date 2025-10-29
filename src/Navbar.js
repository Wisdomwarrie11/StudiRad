import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{ backgroundColor: 'white' }} className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">
        <strong>
          <Link style={{ color: 'rgb(6, 49, 69)' }} className="navbar-brand" to="/">
            <span style={{ color: 'rgb(221, 168, 83)' }}>Studi</span>Rad
          </Link>
        </strong>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{
            backgroundColor: 'white',
            width: '45px',
            height: '45px',
            color: "rgb(6, 49, 69)",
            padding: '5px',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          {menuOpen ? (
            <span style={{ fontSize: '24px', color: 'rgb(6, 49, 69)', fontWeight: 'bold' }}>×</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <strong><li className="nav-item"><Link className="nav-link" to="/">Home</Link></li></strong>
            <strong><li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li></strong>
            <strong><li className="nav-item"><Link className="nav-link" to="/activities">Our Activities</Link></li></strong>
            <strong><li className="nav-item"><Link className="nav-link" to="/communities">Our Community</Link></li></strong>

            {/* Our Resources Dropdown */}
            <strong>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarResourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Resources
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarResourcesDropdown">
                  <li><Link className="dropdown-item fw-bold" to="/">Our Classes</Link></li>
                  <li><Link className="dropdown-item fw-bold" to="/">Our Blog</Link></li>
                  <li><Link className="dropdown-item fw-bold" to="/">Reading Materials</Link></li>
                </ul>
              </li>
            </strong>

            {/* Opportunities Dropdown */}
            <strong>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarOpportunitiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Opportunities
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarOpportunitiesDropdown">
                  <li><Link className="dropdown-item fw-bold" to="/jobs">Jobs</Link></li>
                  <li><Link className="dropdown-item fw-bold" to="/internship">Internship</Link></li>
                  <li><Link className="dropdown-item fw-bold" to="/scholarship">Scholarship</Link></li>
                </ul>
              </li>
            </strong>

            <strong>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>
            </strong>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
