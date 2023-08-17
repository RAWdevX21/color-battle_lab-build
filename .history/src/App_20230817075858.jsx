import { useState } from "react";
import GameBanner from "./Components/GameBanner";
import Player from "./Components/PlayerInfo";
import "./App.css";

export default function App() {

  const [player1, setPlayer1] = useState({
    name: "Player-One",
    color: "lightgreen",
    healthpoints: 100,
    turn: true
  });

  const [player2, setPlayer2] = useState({
    name: "Player-Two",
    color: "cornflowerblue",
    healthpoints: 100,
    turn: false
  });

  const [dice, setDice] = useState(0);

  const handleAttack = (attacker, defender, setAttacker, setDefender) => {
    console.log("Attack button pressed");
    const damage = Math.floor(Math.random() * 6) + 1;
    console.log("Calculated damage:", damage);
    setDice(damage);

    const updatedDefender = {
      ...defender,
      healthpoints: defender.healthpoints - damage
    };
    console.log("Updated healthpoints:", updatedDefender.healthpoints);
    const updatedAttacker = { ...attacker, turn: false };

    setDefender(updatedDefender);
    setAttacker(updatedAttacker);

    // Switch turns
    if (attacker === player1) {
      setPlayer2({ ...player2, turn: true });
    } else {
      setPlayer1({ ...player1, turn: true });
    }


    if (updatedDefender.healthpoints <= 0) {
      alert(`${attacker.name} wins!`);
    }
  };

  return (
    <div className="game-board">
      <GameBanner damagePoints={dice} />

      <div className="players-container">
        <div className="player-wrapper">
          <Player
            key={player1.healthpoints}
            player={player1}
            onAttack={() =>
              handleAttack(player1, player2, setPlayer1, setPlayer2)
            }
          />
        </div>
        <div className="player-wrapper">
          <Player
            key={player2.healthpoints}
            player={player2}
            onAttack={() =>
              handleAttack(player2, player1, setPlayer2, setPlayer1)
            }
          />
        </div>
      </div>
    </div>
  );
}