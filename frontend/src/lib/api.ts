import axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosResponse,
} from "axios";

// NOTE: Vite uses import.meta.env for environment variables.
// Ensure VITE_API_URL is defined in your .env file.
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 500) {
      console.error("Gagal fetch data");
    }
    return Promise.reject(error);
  }
);

export default api;
