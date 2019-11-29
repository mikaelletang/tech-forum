import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(11)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="counter-title">
          Counter
        </p>
        <button data-testid="incrementBtn" onClick={incrementCount}>
          +
        </button>

        <span data-testid="counterValue">{count}</span>

        <button data-testid="decrementBtn">
          -
        </button>

      </header>
    </div>
  );
}

export default App;
