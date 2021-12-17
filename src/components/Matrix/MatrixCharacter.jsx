import React from "react";

const charHeight = 26;
const rainDropHeight = 20; // numberOfChars * charHeight;

const MatrixCharacter = ({ index, random, char, rows }) => {
  const yPos = index >= random ? index - random : rows - (random - index);

  return (
    <div
      key={index}
      className={`matrix-character matrix-character--${yPos}`}
      style={{ top: rainDropHeight - yPos * charHeight }}
    >
      <div className={`character__level1`}>{char}</div>
      <div className={`character__level2`}>{char}</div>
      <div className={`character__level3`}>{char}</div>
    </div>
  );
};

export default MatrixCharacter;
