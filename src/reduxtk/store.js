import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./dummyData";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);