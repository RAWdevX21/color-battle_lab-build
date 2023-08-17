import { useState } from "react";
import GameBanner from "./Components/GameBanner";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div>        
        <GameBanner damagePoints={dice} />
      </div>
    </>
  );
}

export default App;
