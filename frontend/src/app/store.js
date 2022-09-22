import { configureStore } from "@reduxjs/toolkit";
import checkConnectionReducer from "../features/connect/checkConnectionSlice";

export const store = configureStore({
  reducer: {
    connector: checkConnectionReducer,
  },
});
