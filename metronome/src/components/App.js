import React, { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider";
import Metronome from "./Metronome";
import woodenBlockSound from "../sounds/wooden_block.wav";

let tick;

function App() {
  const [volume, setVolume] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      playSound();
      tick = setInterval(() => {
        playSound();
      }, 500);
    } else clearInterval(tick);
  }, [isPlaying]);

  const playSound = () => {
    const audio = new Audio(woodenBlockSound);
    audio.volume = volume / 100;
    audio
      .play()
      .then(() => {
        audio.remove();
      })
      .catch(e => console.error(e));
  };

  const toggleTick = () => {
    setIsPlaying(!isPlaying);
  };

  const changeVolume = e => {
    const value = parseInt(e.target.value);
    setVolume(value);
  };

  return (
    <>
      <VolumeSlider value={volume} changeVolume={changeVolume} />
      <Metronome onClick={toggleTick} isPlaying={isPlaying} />
    </>
  );
}

export default App;
