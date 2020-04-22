import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Volume.module.css";

export default function({ value, changeVolume }) {
  return (
    <div className={styles.volumeSlider}>
      <FontAwesomeIcon icon={faVolumeUp} className={styles.volumeUp} />
      <br />
      <input
        id="slider"
        type="range"
        value={value}
        onChange={changeVolume}
        className={styles.slider}
        orient="vertical"
        aria-orientation="vertical"
      />
      <br />
      <div id="volumeDown" onClick={changeVolume}>
        <FontAwesomeIcon className={styles.volumeDown} icon={faVolumeOff} />
      </div>
    </div>
  );
}
