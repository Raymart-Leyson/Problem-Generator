import React, { useState } from 'react';
import './App.css';

const HoverElement = ({ message, children }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showMessage && <div className="popupMessage" readonly>View Full Question</div>}
    </div>
  );
};

export default HoverElement;
