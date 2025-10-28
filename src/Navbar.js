import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './navbar.css';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'white' }} className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <strong>
        <Link className="navbar-brand" to="/">
         <span style={{color:'rgb(221, 168, 83)'}} >Studi</span>Rad</Link> 
        </strong>
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
  style={{
    backgroundColor: 'white',
    width: '40px',
    height: '40px',
    padding: '5px',
    border: 'none',
    color: 'white',
    
  }}
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div className="navbar1 collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <strong>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
            </strong>
            <strong>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
            </strong>
            <strong>
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Our Activities</Link>
              </li>
            </strong>
            <strong>
              <li className="nav-item">
                <Link className="nav-link" to="/communities">Our Community</Link>
              </li>
            </strong>
            <strong>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarRegisterDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                Our Resources
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarRegisterDropdown">
                  <li>
                    <Link className="dropdown-item fw-bold" to="/">Our Classes</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fw-bold" to="/">Our Blog</Link>
                  </li>
                   <li>
                    <Link className="dropdown-item fw-bold" to="/">Reading Materials</Link>
                  </li>
            
                </ul>
              </li>
            </strong>

            {/* Opportunity Section */}
            <strong>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarRegisterDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                Opportunities
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarRegisterDropdown">
                  <li>
                    <Link className="dropdown-item fw-bold" to="/jobs">Jobs</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fw-bold" to="/internship">Internship</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fw-bold" to="/scholarship">Scholarship</Link>
                  </li>
                </ul>
              </li>
            </strong>



            {/* <strong>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarRegisterDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarRegisterDropdown">
                  <li>
                    <Link className="dropdown-item fw-bold" to="/studentlogin">Login as a Student</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fw-bold" to="/tutorlogin">Login as a Tutor</Link>
                  </li>
                </ul>
              </li>
            </strong>  */}

            {/* Registration dropdown */}

            {/* <strong>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarRegisterDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarRegisterDropdown">
                  <li>
                    <Link className="dropdown-item fw-bold" to="/studentregistration">Register as Student</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fw-bold" to="/tutorhome">Register as Tutor</Link>
                  </li>
                </ul>
              </li>
            </strong> */}

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
