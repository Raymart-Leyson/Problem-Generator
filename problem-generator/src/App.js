import React, { useState } from 'react';
import './App.css';
import ViewQuestionPopup from './ViewQuestionPopup';

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(questionslist[index]);
    setPopupVisible(true);
  };

  const questionslist = [
    {
      question: "All Finite Language are turing decidable.",
      choice: ["TRUE or FALSE"]
    },
    {
      question: "All turing decidable are turing acceptable.",
      choice: ["TRUE or FALSE"]
    },
    {
      question: "(ababb) is an element of L = {(a+b)*aa+bb}",
      choice: ["TRUE or FALSE"]
    },
    {
      question: "For any language L, e is an element of L+.",
      choice: ["TRUE or FALSE"]
    }
  ];

  return (
    <div className="ProblemGenerator">
      <div className="mainUI">
        <div className="input-container">
          <input type="text" className="generate"></input>
          <button className="btn_generate">Generate</button>
        </div>
        <div className="question-box-container">
          <ul>
            {questionslist.map((question, index) => (
              <li key={index} onClick={() => handleQuestionClick(index)}>
                <div className="question">{question.question}</div>
                <div className="choice">{question.choice}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isPopupVisible && (
        <ViewQuestionPopup
          question={selectedQuestion.question}
          choice={selectedQuestion.choice}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
}

export default App;