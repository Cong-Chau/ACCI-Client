// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // nhánh auth trong store sẽ được quản lý bởi authSlice
  },
});
