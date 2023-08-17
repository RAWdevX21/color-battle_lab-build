import './GameBanner.css';
import Die from "./Die";

const GameBanner = ({ damagePoints }) => {
    return (
      <div className="banner">
        <h1>Color Battle Lab</h1>
        <div className="damage-points">
          Damage Points: <Die value={damagePoints} />
        </div>
      </div>
    );
}

export default GameBanner;
