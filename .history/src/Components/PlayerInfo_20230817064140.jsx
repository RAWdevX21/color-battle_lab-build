import "./PlayerInfo.css";

const Player = ({ player, onAttack }) => {
  return (
    <div className="player" style={{ backgroundColor: player.color }}>
      <h2>{player.name}</h2>
      <p>HealthPoints: {player.healthpoints}</p>
      {player.turn && (
        <button className="attack-button" onClick={onAttack}>
          Attack
        </button>
      )}
    </div>
  );
};

export default Player;
