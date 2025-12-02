import React, { useState } from 'react';

const FlipCard = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`cursor-pointer perspective`}
    >
      <div className={`relative w-full h-64 transition-transform duration-500 transform ${flipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-slate-500 text-center">{item.description}</p>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-brand-blue text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-white text-center">{item.details}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
