import './App.css';

function App() {

  const questionslist = [
    {
      question: "In a deterministic finite automaton (DFA), each input symbol can have how many transitions from a given state? ",
      choice: ["A) One", "B) Zero or one", "C) Zero or more", "D) Exactly two"]
    },
    {
      question: "The language defined by the regular expression (a + b)*abb is equivalent to which of the following?",
      choice: ["A) The set of all strings that end with abb", "B) The set of all strings that start with abb", "C) The set of all strings that contain abb", "D) The set of all strings that do not contain abb"]
    },
    {
      question: "Which of the following is NOT a property of regular languages?",
      choice: ["A) Closed under union", "B) Closed under intersection", "C) Closed under complement", "D) Closed under concatenation"]
    },
    {
      question: "The pumping lemma for regular languages is used to prove that a language is not regular. Which of the following is a requirement for using the pumping lemma?",
      choice: ["A) The language is finite", "B) The language is infinite", "C) The language contains only a's and b's", "D) The language is context-free"]
    }
  ];



  return (
    <div className="ProblemGenerator" >
      <div className="mainUI">
        <div className="title">PERPETUAL</div>
        <div className="input-container">
          <input type="text" className="generate" placeholder="Type here"></input>
          <button className="btn_generate">Generate</button>
        </div>
        <div className="question-box-container">
          <ul>
            {questionslist.map((question, index) => (
              <li key={index}>
                <div className="question">
                  {question.question}
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="choices">
                  <div className="choices-grid">
                    {question.choice.map((option, index) => (
                      <div key={index} className="choice">{option}</div>
                    ))}
                  </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default App;