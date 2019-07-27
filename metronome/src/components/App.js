import React, { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider";
import Metronome from "./Metronome";
import woodenBlockSound from "../sounds/wooden_block.wav";

let tick;
let playVolume;

function App() {
  const [volume, setVolume] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);
  const bpm = 120;

  useEffect(() => {
    if (isPlaying) {
      playSound();
      tick = setInterval(() => playSound(), (60 / bpm) * 1000);
    } else {
      clearInterval(tick);
    }
  }, [isPlaying]);

  useEffect(() => {
    playVolume = volume;
  }, [volume]);

  const playSound = () => {
    const audio = new Audio(woodenBlockSound);
    audio.volume = playVolume / 100;
    audio.play().catch(e => console.log(e));
    if (audio.ended) audio.remove();
  };

  const toggleTick = () => {
    setIsPlaying(!isPlaying);
  };

  const changeVolume = event => {
    const value = parseInt(event.target.value);
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
