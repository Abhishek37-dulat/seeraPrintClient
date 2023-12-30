import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loginUser, registerUser } from "./reducers/authSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export { loginUser, registerUser };
export default store;
