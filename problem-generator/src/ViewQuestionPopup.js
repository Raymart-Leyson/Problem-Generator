import React from 'react';
import './ViewQuestionPopup.css';
function ViewQuestionPopup({ question, choice, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <div>
          <h2>{question}</h2>
          <br></br><br></br>
          <ul>
            {choice.map((option, index) => (
              <li key={index} className=' choices'>{option}</li>
            ))}
          </ul>
        </div>
        <button className="close-popup" onClick={onClose}>
          Close
        </button>
        <br></br>
      </div>
    </div>
  );
}

export default ViewQuestionPopup;