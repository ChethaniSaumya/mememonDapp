import React, { useState, useEffect } from 'react';

function App() {
  const [multiplier, setMultiplier] = useState(1);
  const [betAmount, setBetAmount] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (isGameRunning) {
      const interval = setInterval(() => {
        setMultiplier(prevMultiplier => {
          if (prevMultiplier >= 10) {
            endGame();
            return prevMultiplier;
          }
          return prevMultiplier + 0.01;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isGameRunning]);

  function startGame() {
    setIsGameRunning(true);
  }

  function endGame() {
    setIsGameRunning(false);
    setMultiplier(1);
    if (betAmount > 0) {
      const newHistory = [...history, `Bet: ${betAmount}x, Multiplier: ${multiplier}`];
      setHistory(newHistory);
    }
  }

  function placeBet() {
    if (betAmount > 0 && !isGameRunning) {
      startGame();
    }
  }

  return (
    <div className="App">
      <h1>Crash Game</h1>
      <div id="game-board">
        <div id="multiplier">{multiplier.toFixed(2)}x</div>
        <canvas id="canvas" width="400" height="400"></canvas>
        <div id="bet-area">
          <input
            type="number"
            id="bet-input"
            placeholder="Enter bet amount"
            step="0.01"
            min="0.01"
            value={betAmount}
            onChange={e => setBetAmount(parseFloat(e.target.value))}
          />
          <button id="place-bet" onClick={placeBet}>
            Place Bet
          </button>
        </div>
      </div>
      <div id="history">
        {history.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </div>
  );
}

export default App;