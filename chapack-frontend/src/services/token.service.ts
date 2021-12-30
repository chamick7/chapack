import axiosApiInstance from "../utils/axios-instance.util";
import jwt_decode from "jwt-decode";

const storeAccessToken = (token: string) => {
  localStorage.setItem("access_token", token);
  const user = jwt_decode(token);
  localStorage.setItem("user", JSON.stringify(user));
};

const storeRefreshToken = (token: string) => {
  localStorage.setItem("refresh_token", token);
};

export const storeAccessRefreshToken = (accessToken: string, refreshToken: string) => {
  storeAccessToken(accessToken);
  storeRefreshToken(refreshToken);
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token") || null;
  if (refreshToken) {
    const response = await axiosApiInstance.post("/api/auth/session/refresh", {
      refresh_token: refreshToken,
    });

    if (response) {
      const accessToken = response.data.access_token;
      storeAccessToken(accessToken);
    }
  } else {
    return null;
  }
};

export const clearToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
  localStorage.removeItem("refresh_token");
};

export const decodeToken = (token: string) => jwt_decode(token);
