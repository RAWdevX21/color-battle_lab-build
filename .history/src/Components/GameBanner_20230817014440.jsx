import './GameBanner.css';
import Die from "./Die";

const GameBanner = ({ damagePoints }) => {
    return (
      <div className="banner">
        <h1>
            <span>C</span>
            <span>o</span>
            <span>l</span>
            <span>o</span>
            <span>r</span>
            &nbsp;
            <span>B</span>
            <span>a</span>
            <span>t</span>
            <span>t</span>
            <span>l</span>
            <span>e</span>
            &nbsp;
            <span>L</span>
            <span>a</span>
            <span>b</span>
        </h1>
        <div className="damage-points">
          Damage Points: <Die value={damagePoints} />
        </div>
      </div>
    );
}

export default GameBanner;
