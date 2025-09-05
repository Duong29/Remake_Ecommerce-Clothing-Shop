// lib/api.ts
import axios from "axios";
export const BASE_API_URL = axios.create({
  baseURL: "/api", // chỉ dùng /api ở DEV để đi qua proxy
});
