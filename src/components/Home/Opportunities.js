import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcaseMedical, FaUserGraduate, FaLaptopMedical } from 'react-icons/fa';
import './OpportunitiesSection.css';

const OpportunitiesSection = () => {
  return (
    <section className="opportunity-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-dark">
          Explore Opportunities with <span className="brand-text">StudiRad</span>
        </h2>
        <p className="text-muted mb-5">
          Discover pathways that help radiography students and professionals grow — 
          from internships and jobs to scholarship opportunities.
        </p>

        <div className="row g-4 justify-content-center">
          {/* Job Opportunities */}
          <div className="col-md-4 col-sm-10">
            <div className="card opportunity-card shadow-sm h-100 p-4 text-center">
              <div className="icon-container mb-3">
                <FaBriefcaseMedical size={60} color='rgb(221, 168, 83)' />
              </div>
              <h5 className="fw-bold text-dark">Job Opportunities</h5>
              <p className="text-muted small mb-4">
                Find radiography-related job openings across healthcare facilities and imaging centers.
              </p>
              <Link to="/jobs" className="btn btn-opportunity w-100">View Jobs</Link>
            </div>
          </div>

          {/* Internship Opportunities */}
          <div className="col-md-4 col-sm-10">
            <div className="card opportunity-card shadow-sm h-100 p-4 text-center">
              <div className="icon-container mb-3">
                <FaLaptopMedical size={60} color='rgb(221, 168, 83)' />
              </div>
              <h5 className="fw-bold text-dark">Internship Opportunities</h5>
              <p className="text-muted small mb-4">
                Gain clinical exposure and hands-on training that bridges theory with practice.
              </p>
              <Link to="/internship" className="btn btn-opportunity w-100">View Internships</Link>
            </div>
          </div>

          {/* Scholarship Opportunities */}
          <div className="col-md-4 col-sm-10">
            <div className="card opportunity-card shadow-sm h-100 p-4 text-center">
              <div className="icon-container mb-3">
                <FaUserGraduate size={60} color='rgb(221, 168, 83)' />
              </div>
              <h5 className="fw-bold text-dark">Scholarship Opportunities</h5>
              <p className="text-muted small mb-4">
                Access funding and academic support designed for radiography students worldwide.
              </p>
              <Link to="/scholarship" className="btn btn-opportunity w-100">View Scholarships</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection
