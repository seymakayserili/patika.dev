import { useState } from "react";
import "./App.css";

/* Dice Images (src içinden import) */
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
  const [playerName, setPlayerName] = useState("Player 1");
  const [playerDice, setPlayerDice] = useState(0);
  const [pcDice, setPcDice] = useState(0);
  const [result, setResult] = useState("Draw!");
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setResult("");

    const interval = setInterval(() => {
      setPlayerDice(Math.floor(Math.random() * 6));
      setPcDice(Math.floor(Math.random() * 6));
    }, 120);

    setTimeout(() => {
      clearInterval(interval);

      const p1 = Math.floor(Math.random() * 6);
      const p2 = Math.floor(Math.random() * 6);

      setPlayerDice(p1);
      setPcDice(p2);

      if (p1 > p2) {
        setResult("You Win 🎉");
      } else if (p1 < p2) {
        setResult("You Lose 😢");
      } else {
        setResult("Draw! 🤝");
      }

      setIsRolling(false);
    }, 3000);
  };

  return (
    <div className="container">
      <h1 className="result">{result}</h1>

      <div className="names">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <span>Player 2</span>
      </div>

      <div className="dice-area">
        <img src={diceImages[playerDice]} alt="Player dice" />
        <img src={diceImages[pcDice]} alt="PC dice" />
      </div>

      <button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>

        </div>
  );
}

export default App;
