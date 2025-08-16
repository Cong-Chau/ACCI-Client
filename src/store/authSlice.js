import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../api/authAPI";

// Xử lý action đăng nhập
export const login = createAsyncThunk(
  "auth/login",
  async ({ userName, password }, { rejectWithValue }) => {
    try {
      // Xử lý gọi API
      const data = await authAPI.login(userName, password);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Lỗi đăng nhập");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    token: sessionStorage.getItem("token") || null,
    message: "",
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      (state.user = null),
        (state.token = null),
        (state.message = null),
        sessionStorage.removeItem("token"),
        sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message;
        sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
