// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
