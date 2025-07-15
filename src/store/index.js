import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentreducer";

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});
