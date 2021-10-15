import { FC, KeyboardEvent, useState } from "react";
import { getNumOfViruses, setNumOfViruses } from "../src/redux";
import Grid from "./components/Grid/Grid";
import { useGenerateViruses } from "./hooks/GenerateViruses";
import { useAppDispatch, useTypedSelector } from "./redux/store";

const App: FC = () => {
  const numOfViruses = 5;
  const dispatch = useAppDispatch();

  dispatch(setNumOfViruses(numOfViruses));
  //maybe not a hook
  useGenerateViruses();

  return <Grid />;
};

export default App;
