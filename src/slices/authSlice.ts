import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  avatar: string;
  level: number;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}
interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  user: localStorage.getItem("user")
    ? (JSON.parse(localStorage.getItem("user")!) as User)
    : null,
};

const authSlice = createSlice({
  // namespace cho action
  name: "auth",
  // Giá trị state ban đầu
  initialState,
  // Nơi định nghĩa các hàm cập nhật state
  reducers: {
    // Hàm cập nhật state khi login thành công
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      // action là 1 object chứa type và payload
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    // Hàm cập nhật state khi logout
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
