import { FC, KeyboardEvent, useState } from "react";
import { setNumOfViruses } from "../src/redux";
import Grid from "./components/Grid/Grid";
import { useAppDispatch } from "./redux/store";

const App: FC = () => {
  const numOfViruses = 5;
  const dispatch = useAppDispatch();

  dispatch(setNumOfViruses(numOfViruses));

  return <Grid />;
};

export default App;
