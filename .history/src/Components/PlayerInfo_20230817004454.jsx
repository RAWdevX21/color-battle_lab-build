import "./Player.css";

const Player = ({ player, onAttack }) => {
  return (
    <div className="player" style={{ backgroundColor: player.color }}>
      <h2>{player.name}</h2>
      <p>Hitpoints: {player.hitpoints}</p>
      {player.turn && (
        <button className="attack-button" onClick={onAttack}>
          Attack
        </button>
      )}
    </div>
  );
};

export default Player;
