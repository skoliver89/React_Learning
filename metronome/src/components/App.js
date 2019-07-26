import React from "react";
import woodenBlockSound from "../sounds/wooden_block.wav";

function App() {
  const handleClick = () => {
    const audio = new Audio(woodenBlockSound);
    audio.volume = 0.2;
    audio.play();
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>{" "}
    </>
  );
}

export default App;
