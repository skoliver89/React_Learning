import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

export default function({ onClick, isPlaying }) {
  return (
    <>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={isPlaying ? faStop : faPlay} />
      </button>
    </>
  );
}