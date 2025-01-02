// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Custom footer styling if needed

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; 2025 Firstplace Connect. All Rights Reserved.</p>
      <div>
        <a href="#privacy-policy" className="text-white">Privacy Policy</a> | 
        <a href="#terms" className="text-white"> Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
