// src/components/CourseOutline.js

import React, { useState } from 'react';
import './CourseOutline.css';
import CoursePreview from './CoursePreview';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const packages = [
  {
    name: 'Diamond Package',
    details: 'Access to all courses, one-on-one mentoring, and exclusive materials.',
    preview: 'This is a sample lesson from the Diamond Package.',
    timetable: ['Monday: 10 AM - 12 PM', 'Wednesday: 2 PM - 4 PM'],
    duration: '6 weeks',
    lecturer: 'Dr. Jane Doe',
    subscribers: 120,
  },
  {
    name: 'Gold Package',
    details: 'Access to all courses and group mentoring sessions.',
    preview: 'This is a sample lesson from the Gold Package.',
    timetable: ['Tuesday: 11 AM - 1 PM', 'Thursday: 3 PM - 5 PM'],
    duration: '8 weeks',
    lecturer: 'Prof. John Smith',
    subscribers: 80,
  },
  // Add more packages as needed...
];

const CourseOutline = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [currentPreviewContent, setCurrentPreviewContent] = useState('');

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleShowPreview = (content) => {
    setCurrentPreviewContent(content);
    setShowPreview(true);
  };

  const handleSubscribe = (pkg) => {
    navigate('/subscribe', { state: { packageDetails: pkg } }); // Navigate to subscription page with package details
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Course Packages</h1>
      <div className="row">
        {packages.map((pkg, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className={`card flip-card ${flippedIndex === index ? 'flipped' : ''}`}>
              <div className="card-front">
                <div className="card-body text-center">
                  <h5 className="card-title">{pkg.name}</h5>
                  <Button variant="primary" onClick={() => handleFlip(index)}>See More</Button>
                  <Button variant="info" onClick={() => handleShowPreview(pkg.preview)}>Preview</Button>
                  <Button variant="success" onClick={() => handleSubscribe(pkg)}>Subscribe</Button> {/* Subscribe button */}
                </div>
              </div>
              <div className="card-back">
                <div className="card-body text-center">
                  <p>{pkg.details}</p>
                  <Button variant="secondary mt-2" onClick={() => handleFlip(index)}>Back</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course Preview Modal */}
      <CoursePreview show={showPreview} handleClose={() => setShowPreview(false)} content={currentPreviewContent} />
    </div>
  );
};

export default CourseOutline;
