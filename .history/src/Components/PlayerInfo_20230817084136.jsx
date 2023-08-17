import "./PlayerInfo.css";

export const Player = ({ player, onAttack }) => {

  console.log(`${player.name}'s HealthPoints:`, player.healthpoints);
  
  return (
    <div className="player" style={{ backgroundColor: player.color }}>
      <h2>{player.name}</h2>
      <p
        className="hp"
        style={{ fontSize: "3rem", fontWeight: "bold", color: "black" }}>
        HealthPoints: {player.healthpoints}
      </p>
      {player.turn && (
        <button className="attack-button" onClick={onAttack}>
          Attack!
        </button>
      )}
    </div>
  );
};
