import React, { useState } from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import { Tooltip, OverlayTrigger } from 'react-bootstrap'; 
import { FaSpinner } from 'react-icons/fa'; 


const packages = [
  {
    name: 'Diamond Package',
    details: 'Access to all courses, one-on-one mentoring, and exclusive materials.',
    price: '$19.99',
    rating: 5,
    subscriptionLink: '/diamond', 
  },
  {
    name: 'Gold Package',
    details: 'Access to all courses and group mentoring sessions.',
    price: '$12.99',
    rating: 4, 
    subscriptionLink: '/gold', 
  },
  {
    name: 'Silver Package',
    details: 'Access to selected courses and community support.',
    price: '$7.99',
    rating: 3,
    subscriptionLink: '/silver', 
  },
  {
    name: 'Bronze Package',
    details: 'Access to free courses and basic resources.',
    price: 'Free',
    rating: 2, 
    subscriptionLink: '/bronze', 
  },
];

const CourseOutline = () => {
  const navigate = useNavigate(); 
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleSubscribe = (pkg) => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
      navigate(pkg.subscriptionLink);
    }, 2000);
  };


  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        style={{ color: index < rating ? '#FFD700' : '#e0e0e0', marginRight: '3px' }}
      />
    ));
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
                  <div>{renderStars(pkg.rating)}</div> 
                  <p className="card-price">{pkg.price}</p>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${index}`}>Click to see more details</Tooltip>}
                  >
                    <button style={{backgroundColor:' rgb(6, 4, 44)'}} className="btn btn-primary" onClick={() => handleFlip(index)}>
                      See More
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="card-back">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <FontAwesomeIcon icon={faBookOpen} /> {pkg.name}
                  </h5>
                  <p>{pkg.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOutline;
