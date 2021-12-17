import React, { useEffect, useState } from "react";

import "./matrix.css";
import MatrixRainDrop from "./MatrixRainDrop";

const originalChars =
  "一〇九二人入八刀力十又乃万丈三上下丸久亡凡刃千口土夕大女寸小山川工己干弓才之巾々中互五井今介元公六升午天太夫少尺支文木欠毛火父牛犬王允爪勿只号央失矢未末本主白示立市穴它いうえくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばひびぷへべぺまみむめもやゆよらりるれろわゐんゔ゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ･ｰ0123456789-+=*?!@#<>";

const columns = 30;
const rows = 30;
const characterRetype = 3;
const interval = 10;
const shuffle = (str) => [...str].sort(() => Math.random() - 0.5).join("");
const chars = shuffle(originalChars);
const numberOfChars = chars.length;

const scales = Array(columns)
  .fill()
  .map((e, i) => {
    const distance = Math.random();
    return {
      transform: `scale(${distance + 0.5}) translate(${
        distance * 500 - 100
      }%, 0)`,
      filter: `blur(${Math.abs(0.5 - distance) * 5}px)`,
    };
  });

const fillCharMatrix = () => {
  let tempArray = [];
  for (let i = 0; i < columns; i++) {
    let column = [];

    for (let j = 0; j < rows; j++) {
      const char = chars[Math.floor(Math.random() * numberOfChars)];
      column.push(char);
    }
    tempArray.push(column);
  }
  return tempArray;
};

const initialColumnRandomness = Array(columns)
  .fill()
  .map(() => Math.floor(Math.random() * rows));

const Matrix = () => {
  const [columnRandomness, setColumnRandomness] = useState(
    initialColumnRandomness
  );
  const [counter, setCounter] = useState(0);
  const [charMatrix, setCharMatrix] = useState(fillCharMatrix());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, interval);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  useEffect(() => {
    const tempchars = [...charMatrix];
    setColumnRandomness(
      columnRandomness.map((e, i) => {
        if (counter % characterRetype === 0) {
          return e === 0 ? rows : e - 1;
        }
        return e;
      })
    );
    setCharMatrix(
      tempchars.map((e, i) => {
        return tempchars[i].map((c, j) => {
          if (j === columnRandomness[i]) {
            return chars[Math.floor(Math.random() * numberOfChars)];
          }
          return c;
        });
      })
    );
  }, [counter]);

  return (
    <div className="matrix-canvas">
      <div className="matrix-rain">
        {charMatrix &&
          charMatrix.map((e, j) => (
            <MatrixRainDrop
              key={j}
              chars={e}
              columnIndex={j}
              random={columnRandomness[j]}
              rows={rows}
              scale={scales[j]}
            />
          ))}
      </div>
    </div>
  );
};

export default Matrix;
