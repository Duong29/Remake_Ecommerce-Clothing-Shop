// lib/api.ts
import axios from "axios";
export const BASE_API_URL = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const URL_BLOG_IMAGE = import.meta.env.VITE_URL_BLOG_IMAGE
