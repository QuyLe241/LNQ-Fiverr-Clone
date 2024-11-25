import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import jobUserSlice from "./jobUserSlice";
import commentsSlice from "./commentsSlice";
import ReviewJob from "./reviewJob";

export const store = configureStore({
  reducer: {
    authSlice,
    nguoiDungSlice,
    jobUserSlice,
    ReviewJob,
    commentsSlice,
  },
});
