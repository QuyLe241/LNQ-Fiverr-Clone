import { createSlice } from "@reduxjs/toolkit";
import { nguoiDungService } from "../services/nguoiDung.service";

//      type của createAsyncThunk("sẽ là tên của action/tên thunk"), thay thế cho việc tạo type action ở reducers
const getValueProfileUserApi = createAsyncThunk(
  "/profileUser/getValueProfileUserApi",
  async (_, ThunkAPI) => {
    const result = await nguoiDungService.handleInfoUser();
    console.log(result);
  }
);

const initialState = {};

const profileUserSlice = createSlice({
  name: "profileUser",
  initialState,
  reducers: {},
});

export const {} = profileUserSlice.actions;

export default profileUserSlice.reducer;
