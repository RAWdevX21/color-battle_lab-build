import './GameBanner.css';
import Die from "./Die";

const GameBanner = ({ damagePoints }) => {
    return (
      <div className="banner">
        <h1>
          <span className="banner--c">C</span>
          <span className="banner--o">o</span>
          <span className="banner--l">l</span>
          <span className="banner--o2">o</span>
          <span className="banner--r">r</span>
          &nbsp;
          <span className="banner--b">B</span>
          <span className="banner--a">a</span>
          <span className="banner--t">t</span>
          <span className="banner--t">t</span>
          <span className="banner--l2">l</span>
          <span className="banner--e">e</span>
          &nbsp;
          <span className="banner--l3">L</span>
          <span className="banner--a2">a</span>
          <span className="banner--b2">b</span>
        </h1>
        <div className="damage-points">
          <Die value={damagePoints} />
        </div>
      </div>
    );
}

export default GameBanner;
