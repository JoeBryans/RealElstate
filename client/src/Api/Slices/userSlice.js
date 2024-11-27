import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  error: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    Loader: (state, action) => {
      state.loading = true;
    },
    Error: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getUser, Loader, Error } = userSlice.actions;
export default userSlice.reducer;
