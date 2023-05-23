import './App.css';

function App() {
  return (
    <div className="ProblemGenerator" >
      <div className="mainUI">
        <div className="input-container">
          <input type="text" className="generate"></input>
          <button className="btn_generate">Generate</button>
        </div>
        <div className="question-box-container">
          <ul>
          <li>
            <div className="question">All Finite Language are turing decidable.</div>
            <div className="choice">TRUE or FALSE</div>
          </li>
          <li>
            <div className="question">All turing decidable are turing acceptable.</div>
            <div className="choice">TRUE or FALSE</div>
          </li>
          <li>
            <div className="question">(ababb) is an element of L = &#123;(a+b)&#125;*aa+bb&#125;</div>
            <div className="choice">TRUE or FALSE</div>
          </li>
          <li>
            <div className="question">For any language L, e is an element of L+.</div>
            <div className="choice">TRUE or FALSE</div>
          </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
