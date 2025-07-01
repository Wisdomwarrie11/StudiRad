import { useEffect, useState } from 'react';
import './HeroSection.css'; // Create this CSS file for styles

const backgroundImages = [
  'Radstudents.jpg',
  'Monica.jpg',
  'Nomso.jpg'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); // slower transition (7 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-content text-center text-white px-3">
        <h1 className="display-4 fw-bold">Transform your <span style={{ color: 'rgb(221, 168, 83)' }}>Radiography</span> Journey</h1>
        <p className="lead bg-dark bg-opacity-75 d-inline-block px-3 py-2 rounded">
          <em><strong>Simplifying every step of the way...</strong></em>
        </p>
        <div className="mt-4">
          <a href="/subscribe/">
            <button className="btn btn-lg px-4" style={{ backgroundColor: 'rgb(221, 168, 83)', color: 'black' }}>
              <strong>Start your Journey</strong>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
