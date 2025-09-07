import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  // namespace cho action
  name: "auth",
  // Giá trị state ban đầu
  initialState,
  // Nơi định nghĩa các hàm cập nhật state
  reducers: {
    // Hàm cập nhật state khi login thành công
    loginSuccess: (state, action: PayloadAction<string>) => {
      // action là 1 object chứa type và payload
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    // Hàm cập nhật state khi logout
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
