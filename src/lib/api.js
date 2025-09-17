// lib/api.ts
import axios from "axios";
export const BASE_API_URL = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const URL_BLOG_IMAGE = import.meta.env.VITE_URL_BLOG_IMAGE
export const URL_PRODUCT_IMG = import.meta.env.VITE_URL_PRODUCT_IMG
export const URL_AVATAR = import.meta.env.VITE_URL_AVATAR