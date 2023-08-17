import "./PlayerInfo.css";

export const Player = ({ player, onAttack }) => {

  console.log(`${player.name}'s HealthPoints:`, player.healthpoints);
  
  return (
    <div className="player" style={{ 
      backgroundColor: player.color,
      background: `linear-gradient(${player.color}, darken(${player.color}, 20%))` 
    }}>
      <h2>{player.name}</h2>
      <p
        className="hp"
        style={{ fontSize: "1.5rem", fontWeight: "bold", color: "black" }}>
        HealthPoints: &nbsp;{player.healthpoints}
      </p>
      {player.turn && (
        <button className="attack-button" onClick={onAttack}>
          Attack!
        </button>
      )}
    </div>
  );
};