import React, { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider";
import BpmInput from "./BpmInput";
import Metronome from "./Metronome";
import woodenBlockSound from "../sounds/wooden_block.wav";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/App.css";

let tick;
let playVolume;

function App() {
  const [volume, setVolume] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);

  useEffect(() => {
    if (isPlaying) {
      tick = setInterval(() => playSound(), (60 / bpm) * 1000);
    } else {
      clearInterval(tick);
    }
    // eslint-disable-next-line
  }, [isPlaying]);

  useEffect(() => {
    playVolume = volume;
  }, [volume]);

  const playSound = () => {
    const audio = new Audio(woodenBlockSound);
    audio.volume = playVolume > 0 ? playVolume / 100 : 0;
    audio.play().catch(e => console.log(e));
    if (audio.ended) audio.remove();
  };

  const toggleTick = () => {
    setIsPlaying(!isPlaying);
  };

  const changeVolume = event => {
    const value = parseInt(event.target.value);
    let id = event.target.id;
    switch (id) {
      case "maxVolume":
        setVolume(100);
        break;
      case "minVolume":
        setVolume(0);
        break;
      case "slider":
        setVolume(value);
        break;
      default:
        if (id === "") id = "<Empty String>";
        console.warn(`Invalid volume control ID: ${id}`);
    }
  };

  const changeBpm = event => {
    const value = parseInt(event.target.value);
    console.log(value);
    setBpm(value);
  };

  return (
    <Container fuild>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <VolumeSlider value={volume} changeVolume={changeVolume} />
        </Col>
        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          <Metronome onClick={toggleTick} isPlaying={isPlaying} bpm={bpm} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BpmInput value={bpm} changeBpm={changeBpm} isPlaying={isPlaying} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
