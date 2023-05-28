import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState(0);
  const [result, setResult] = useState(0);
  console.log(typeof(result),typeof(userInput))
  return (
    <div className="App">
      <h2>Simplest Working Calculator</h2>
      <p>{result}</p>
      <input
        className="calcInput"
        type="number"
        value= {userInput}
        onChange={(e) => setUserInput(Number(e.target.value))}
      />
      
      <div className="calcButton">
        <button onClick={(e) => setResult(result + userInput)}>Add</button>
        <button onClick={(e) => setResult(result - userInput)}>Subtract</button>
        <button onClick={(e) => setResult(result * userInput)}>Multiply</button>
        <button onClick={(e) => setResult(result / userInput)}>Divide</button>
        <button className="control" onClick={(e) => setUserInput(0)}>
          Reset Input
        </button>
        <button className="control" onClick={(e) => setResult(0)}>
          Reset Result
        </button>
      </div>
    </div>
  );
}

export default App;
