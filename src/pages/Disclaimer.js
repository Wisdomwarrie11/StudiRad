import React from 'react';

const DisclaimerModal = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Participation Disclaimer</h2>
        <p className="text-slate-600 mb-6">
          By participating, you agree to follow the StudiRad challenge rules and acknowledge the terms.
        </p>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-slate-100 rounded-lg">Close</button>
          <button onClick={onAccept} className="px-4 py-2 bg-brand-blue text-white rounded-lg">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
