import { FC, useEffect, KeyboardEvent, useState, createRef } from "react";
import { getNumOfViruses } from "../redux";
import { useTypedSelector } from "../redux/store";
import { indexes } from "../temporary.json";
import { randomArrayIdx } from "../utils/utils";

export const useGenerateViruses = () => {
  const numOfViruses = useTypedSelector(getNumOfViruses);

  console.log(randomArrayIdx(indexes));
};
