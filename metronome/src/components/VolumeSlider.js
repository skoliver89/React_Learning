import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Volume.module.css";

export default function({ value, changeVolume }) {
  return (
    <div className={styles.volumeSlider}>
      <FontAwesomeIcon icon={faVolumeUp} className={styles.maxVolume} />
      <br />
      <input
        type="range"
        value={value}
        onChange={changeVolume}
        className={styles.sliderVertical}
      />
      <br />
      <FontAwesomeIcon icon={faVolumeOff} className={styles.minVolume} />
    </div>
  );
}
