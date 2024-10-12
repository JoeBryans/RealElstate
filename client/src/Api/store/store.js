import { setupListeners } from "@reduxjs/toolkit/query";
import { Api } from "../Api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(store.dispatch);
