import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import ratingReducer from './slices/ratingSlice'

export const store = configureStore({
  reducer: {
    // auth là nhánh state và authReducer để quản lý cách cập nhật state của nhánh này
    auth: authReducer,
    rating: ratingReducer
  },
});


//store là Redux store mà bạn tạo ra bằng configureStore.
//store.getState() là một hàm có sẵn trong Redux, nó trả về toàn bộ state hiện tại trong store.
// typeof store.getState để lấy type của hàm getState
// ReturnType: Lấy kiểu dữ liệu mà hàm getState trả về

export type RootState = ReturnType<typeof store.getState>;
