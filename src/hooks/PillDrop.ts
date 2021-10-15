import { FC, useEffect, KeyboardEvent, useState, createRef } from "react";
import { indexes } from "../temporary.json";
import { getCol, getNextRow } from "../utils/NodePosition";

export const usePillDrop = () => {
  // refactor take this out from drop
  const [med, setMed] = useState<string>(`${indexes[indexes.length / 2 - 1]}0`);
  const [med2, setMed2] = useState<string>(`${indexes[indexes.length / 2]}0`);

  useEffect(() => {
    const pillTimer = setInterval(() => {
      setMed((prev) => {
        return getNextRow(prev) < indexes.length
          ? `${getCol(prev)}${getNextRow(prev)}`
          : prev;
      });
      setMed2((prev) => {
        return getNextRow(prev) < indexes.length
          ? `${getCol(prev)}${getNextRow(prev)}`
          : prev;
      });
    }, 1000);

    return () => clearInterval(pillTimer);
  }, []);

  return { setMed, med, setMed2, med2 };
};
