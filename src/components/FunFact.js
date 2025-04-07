// src/components/FunFact.js

import React, { useEffect, useState } from 'react';
import './FunFact.css';

const FunFact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    // Fetch the fun fact from the local file
    const fetchFact = async () => {
      try {
        const response = await fetch('/data/funFacts.json'); // Path to your local JSON file
        const data = await response.json();
        const currentFact = data.weeklyFact; // Assuming you store the current week's fact here
        setFact(currentFact);
      } catch (error) {
        console.error('Error fetching the fun fact:', error);
      }
    };

    fetchFact();
  }, []);

  return (
    <section style={{backgroundColor: 'rgb(234, 240, 243)'}} className="fun-fact-section ">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 zoom-in-slide">Fun Fact of the Week!</h2>
        <div className="row align-items-center">
          <div className="col-md-6 text-center zoom-in-slide">
            <div className="fun-fact-text">
              <p>{fact}</p>
            </div>
          </div>
          <div className="col-md-6 text-center zoom-in-slide">
            <img src="scientist.jpg" alt="Radiography and DNA" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
