import React, {useState, useEffect} from 'react';
import { io } from 'socket.io-client';
import './App.css';
import ViewQuestionPopup from './ViewQuestionPopup';

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isBackgroundBlurred, setBackgroundBlurred] = useState(false);
  const [showLoader, setShowLoader] = React.useState(false)
  
  const [problems, setProblems] = useState([]);
  const [prompt, setPrompt] = useState('');

  let socket = io('http://localhost:8000');

  useEffect(() => {
    socket = io('http://localhost:8000');

    socket.on('connect', () => {
      console.log('connected');
      setShowLoader(false);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    socket.on('prompt', (problems) => {
      console.log(problems);
      setProblems(problems);
      setShowLoader(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const Loader = ({ className }) => (
    <div className={className}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231   0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475   2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464    1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
          stroke="white"
        />
      </svg>
    </div>
  )

  const Button = ({ onSubmit, text, loading = false, disabled }) => {
    return (
      <button className="btn_generate" onClick={onSubmit} disabled={disabled}>
        {!loading ? text : <Loader className="spinner" />}
      </button>
    )
  }

  const handlePopupClose = () => {
    setPopupVisible(false);
    setBackgroundBlurred(false);
  };
  
  const handleQuestionClick = (index) => {
    setSelectedQuestion(problems[index]);
    setPopupVisible(true);
  };

  const handleChange = event => {
    setPrompt(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(prompt);
    socket.emit('prompt', prompt);
    setShowLoader(true)
  };

  return (
    <div className={`ProblemGenerator ${isPopupVisible ? 'blurred' : ''}`}>
      <div className="mainUI">
        <div className="title">PERPETUAL</div>
        <div className="input-container">
          <input type="text" className="generate" onChange={handleChange} placeholder="Type here" value={prompt}></input>
          <Button
            text="Generate"
            onSubmit={sendMessage}
            loading={showLoader}
            disabled={showLoader}
          />
        </div>
        {
          problems && <><div className="question-box-container">
            <ul>
              {problems.map((problem, index) => (
                <li
                  key={index}
                >
                  <div className="question">
                    {problem.context}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="choices">
                      {problem.solution}
                    </div>
                  </div>
                  {(problem.context.concat(problem.solution)).length > 300 && (
                    <div className="click-to-view" onClick={() => handleQuestionClick(index)}>
                      <button className="view-button">View Full Question</button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div><div className="space"></div></>
        }
      </div>

      {isPopupVisible && (
        <React.Fragment>
          <div className="overlay" onClick={handlePopupClose}></div>
          <ViewQuestionPopup
            question={selectedQuestion.context}
            choice={selectedQuestion.solution}
            onClose={handlePopupClose}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;