import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Ensure the path is correct

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
