import { indexes } from "../temporary.json";
import { Pill } from "../types/types";

// Move helpers
export const peekNextRow = (pill: Pill): number => {
  return pill.row + 1;
};

export const peekNextCol = (pill: Pill): string => {
  const colIndex = indexes.indexOf(pill.col);
  return indexes[colIndex + 1];
};

export const peekPrevCol = (pill: Pill): string => {
  const colIndex = indexes.indexOf(pill.col);
  return indexes[colIndex - 1];
};

export const getPillLocationAsString = (pill: Pill): string => {
  return `${pill.col}${pill.row}`;
};

// Move the pill
export const movePillNextRow = (pill: Pill): Pill => {
  return {
    col: pill.col,
    row: peekNextRow(pill),
  };
};

export const movePillPrevCol = (pill: Pill): Pill => {
  return {
    col: peekPrevCol(pill),
    row: pill.row,
  };
};

export const movePillNextCol = (pill: Pill): Pill => {
  return {
    col: peekNextCol(pill),
    row: pill.row,
  };
};

// Valid movements
export const isPrevColValid = (pill: Pill): boolean => {
  let isValid = true;
  // TODO: prob refactor this to no duplicate between prev-next movements

  if (!isNextRowValid(pill)) {
    isValid = false;
  }

  if (pill.col === "a") {
    isValid = false;
  }

  return isValid;
};

export const isNextColValid = (pill: Pill): boolean => {
  let isValid = true;

  if (!isNextRowValid(pill)) {
    isValid = false;
  }
  if (pill.col === "t") {
    isValid = false;
  }

  return isValid;
};

export const isNextRowValid = (pill: Pill): boolean => {
  let isValid = true;
  if (peekNextRow(pill) >= indexes.length) {
    isValid = false;
  }
  return isValid;
};