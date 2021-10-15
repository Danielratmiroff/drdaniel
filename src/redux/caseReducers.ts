import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { SettingsState } from ".";

export const setNumOfViruses: CaseReducer<
  SettingsState,
  PayloadAction<number>
> = (_, { payload }) => {
  //   return payload;
};
