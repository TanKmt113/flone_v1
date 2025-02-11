// api/http.js
import axios from "axios";

const http = axios.create({
  baseURL: "https://dummyjson.com", // Thay thế bằng API của bạn
  timeout: 5000, // Timeout sau 5 giây
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để tự động đính kèm token vào request
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý lỗi chung
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Xử lý khi user chưa đăng nhập hoặc token hết hạn
      console.warn("Unauthorized! Redirecting to login...");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;