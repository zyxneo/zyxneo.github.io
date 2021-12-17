import React from "react";

import MatrixCharacter from "./MatrixCharacter";

const MatrixRainDrop = ({ random, scale, chars, rows }) => {
  return (
    <div className="matrix-rainDrop" style={scale}>
      {chars.map((e, i) => (
        <MatrixCharacter
          key={i}
          index={i}
          random={random}
          char={e}
          rows={rows}
        />
      ))}
    </div>
  );
};

export default MatrixRainDrop;
