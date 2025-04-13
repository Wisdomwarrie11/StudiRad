import React from "react";

const GratitudeNotesPage = () => {
  return (
    <div>
      <h2>Gratitude Notes</h2>
      <p>Boost your mental wellness with daily gratitude. Here are some self-love quotes and articles:</p>
      {/* Add quotes, downloadable documents */}
      <ul>
        <li><a href="https://www.example.com/gratitude-quote">Gratitude Quote</a></li>
        <li><a href="https://www.example.com/gratitude-article">Gratitude Article</a></li>
        <li><a href="/downloads/self-love-quotes.pdf" download>Download Self-Love Quotes</a></li>
      </ul>
    </div>
  );
};

export default GratitudeNotesPage;
