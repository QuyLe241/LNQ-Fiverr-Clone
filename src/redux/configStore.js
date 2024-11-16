import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import jobUserSlice from "./jobUserSlice";
// import profileUserSlice from "./profileUserSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    nguoiDungSlice,
    jobUserSlice,
  },
});
