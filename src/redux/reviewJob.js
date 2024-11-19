import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { congViecService } from "../services/congViec.service";

export const getListReviewJob = createAsyncThunk(
  "reviewJob/getListReviewJob",
  async (id, ThunkAPI) => {
    const result = await congViecService.getReviewJob(id);
    return result.data.content;
  }
);

const initialState = {
  listReviewJob: [],
};

const reviewJob = createSlice({
  name: "reviewJob",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListReviewJob.fulfilled, (state, action) => {
      state.listReviewJob = action.payload;
    });
    builder.addCase(getListReviewJob.pending, (state, action) => {
      console.log("đang chờ xử lý");
    });
    builder.addCase(getListReviewJob.rejected, (state, action) => {
      console.log("đang bị lỗi");
    });
  },
});

export const {} = reviewJob.actions;

export default reviewJob.reducer;
