import { deleteCookie } from "cookies-next";

export const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
};
