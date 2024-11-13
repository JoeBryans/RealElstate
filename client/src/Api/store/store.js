import { setupListeners } from "@reduxjs/toolkit/query";
import { Api } from "../Api";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [Api.reducerPath]: Api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(store.dispatch);
