import React from "react";
import styles from "../styles/Bpm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function({ value, changeBpm }) {
  return (
    <div className={styles.bpmSlider}>
      <FontAwesomeIcon icon={faMinus} />
      <input
        id="slider"
        className={styles.slider}
        type="range"
        min={1}
        max={300}
        value={value}
        onChange={changeBpm}
      />
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
