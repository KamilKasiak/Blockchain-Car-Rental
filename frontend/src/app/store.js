import { configureStore } from "@reduxjs/toolkit";
import checkConnectionReducer from "../features/connect/checkConnectionSlice";
import checkRegistrationReducer from "../features/register/checkRegistrationSlice";

export const store = configureStore({
  reducer: {
    connector: checkConnectionReducer,
    registrator: checkRegistrationReducer,
  },
});
