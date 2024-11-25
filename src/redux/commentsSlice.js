import { commentManagement } from "../services/comments.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//  create thunk api
export const getListComments = createAsyncThunk(
  "listComments/getListComments",
  async (_, ThunkAPI) => {
    const result = await commentManagement.getListComments();
    return result.data.content;
  }
);

const initialState = {
  listComments: [],
};

const commentsSlice = createSlice({
  name: "listComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListComments.fulfilled, (state, action) => {
      state.listComments = action.payload;
      //   console.log("action", action);
    });
    builder.addCase(getListComments.pending, (state, action) => {
      console.log("đang chờ xử lý");
    });
    builder.addCase(getListComments.rejected, (state, action) => {
      console.log("đang bị lỗi");
    });
  },
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
