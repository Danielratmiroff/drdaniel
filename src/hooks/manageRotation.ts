import { FC, useEffect, KeyboardEvent, useState, createRef } from "react";
import { indexes } from "../temporary.json";
import {
  getCol,
  getNextCol,
  getNextRow,
  getPrevCol,
  getPrevRow,
  getRow,
} from "../utils/NodePosition";
import { useKeyPress } from "./useKeyPress";

export const useManageRotation = (
  setMed: React.Dispatch<React.SetStateAction<string>>,
  setMed2: React.Dispatch<React.SetStateAction<string>>
) => {
  const [state, setState] = useState(0);

  const rotateNodes = () => {
    switch (state) {
      case 0: {
        setMed2((prev) => {
          return `${getPrevCol(prev)}${getPrevRow(prev)}`;
        });
        setState(1);
        break;
      }
      case 1: {
        // refactor to use nodes easier
        setMed((prev) => `${getNextCol(prev)}${getRow(prev)}`);
        setMed2((prev) => `${getCol(prev)}${getNextRow(prev)}`);
        setState(2);
        break;
      }
      case 2: {
        setMed((prev) => `${getPrevCol(prev)}${getPrevRow(prev)}`);
        setState(3);
        break;
      }
      case 3: {
        setMed((prev) => `${getCol(prev)}${getNextRow(prev)}`);
        setMed2((prev) => `${getNextCol(prev)}${getRow(prev)}`);
        setState(0);
        break;
      }
      default:
        break;
    }
  };

  useKeyPress({ targetKey: "j", handler: rotateNodes });
};
