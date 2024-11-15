//

// import { createSlice } from "@reduxjs/toolkit";
// import { getLocalStorage } from "../utils/utils";

// // Initial state
// const initialState = {
//   user: getLocalStorage("user"),
// };

// // Create the slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setValueUser: (state, action) => {
//       state.user = action.payload;
//     },
//     // New action to update user data
//     updateUser: (state, action) => {
//       state.user = { ...state.user, ...action.payload };
//     },
//   },
// });

// // Export the action creators
// export const { setValueUser, updateUser } = authSlice.actions;

// // Export the reducer
// export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { getLocalStorage } from "../utils/utils";

// // Initial state
// const initialState = {
//   user: getLocalStorage("user"),
// };

// // Create the slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setValueUser: (state, action) => {
//       state.user = action.payload;
//     },
//     // New action to update user data
//     updateUser: (state, action) => {
//       state.user = { ...state.user, ...action.payload };
//     },
//   },
// });

// // Export the action creators
// export const { setValueUser, updateUser } = authSlice.actions;

// // Export the reducer
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/utils";

// Initial state
const initialState = {
  user: getLocalStorage("user"),
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setValueUser: (state, action) => {
      state.user = action.payload;
    },
    // New action to update user data
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Export the action creators
export const { setValueUser, updateUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
