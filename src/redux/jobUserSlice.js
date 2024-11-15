import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { congViecService } from "../services/congViec.service";

export const getListJobUser = createAsyncThunk(
  "setJobUser/getListJobUser",
  async (data, token, ThunkAPI) => {
    const result = await congViecService.listJobs(data, token);
    console.log(result);
    // return result.data.content;
  }
);

const initialState = {
  listJobUser: {},
};

const jobUserSlice = createSlice({
  name: "setJobUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListJobUser.fulfilled, (state, action) => {
      console.log(action);
      state.listJobUser = action.payload;
    });
    builder.addCase(getListJobUser.pending, (state, action) => {
      console.log("đang chờ xử lý");
    });
    builder.addCase(getListJobUser.rejected, (state, action) => {
      console.log("đang bị lỗi");
    });
  },
});

export const {} = jobUserSlice.actions;

export default jobUserSlice.reducer;
