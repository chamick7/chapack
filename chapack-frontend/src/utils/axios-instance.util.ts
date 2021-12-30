import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { clearToken, refreshAccessToken } from "../services/token.service";

const axiosApiInstance = axios.create({
  baseURL: (process.env.REACT_APP_BACKEND_HOST as string) || "http://localhost:5000",
});

axiosApiInstance.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig | Error> => {
    const authToken = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : null;
    config.headers = { ...config.headers, Authorization: `Bearer ${authToken}` };

    return config;
  }
);

axiosApiInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.response.data.message === "token expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();

        return axiosApiInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (error.response.status === 403 && originalRequest.url === "/api/auth/session/refresh") {
      clearToken();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
export default axiosApiInstance;
