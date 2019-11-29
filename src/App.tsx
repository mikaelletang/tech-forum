import React, {useEffect, useState} from 'react';
import './App.css';
import {externalServiceCall} from "./externalService";

const App: React.FC = () => {

  const [counterValue, setCounterValue] = useState(0)

  useEffect(() => {
    const value = externalServiceCall(11)
    setCounterValue(value)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter
        </p>
        <button data-testid="incrementBtn" onClick={() => setCounterValue(counterValue + 1)}>+</button>
        <span data-testid="counterValue">{counterValue}</span>
        <button data-testid="decrementBtn" onClick={() => setCounterValue(counterValue - 1)}>-</button>
      </header>
    </div>
  );
}

export default App;
