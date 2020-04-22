import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

export default function({ onClick, isPlaying, bpm }) {
  const style = {
    width: "100%",
    height: "100%",
    padding: 20,
    position: "relative"
  };
  const displayStyle = {
    width: "50%",
    height: "50%",
    position: "absolute",
    left: "25%",
    top: "25%"
  };
  const iconStyle = {
    width: "50%",
    height: "50%"
  };
  const bpmStyle = {
    marginTop: 15
  };
  const lockedStyle = {
    color: "red"
  };

  return (
    <div style={style}>
      <div style={displayStyle} onClick={onClick}>
        {isPlaying ? (
          <FontAwesomeIcon icon={faStop} style={iconStyle} />
        ) : (
          <FontAwesomeIcon icon={faPlay} style={iconStyle} />
        )}
        <h1 style={bpmStyle}>BPM: {bpm}</h1>
        {isPlaying && <h6 style={lockedStyle}>BPM Locked</h6>}
      </div>
    </div>
  );
}
