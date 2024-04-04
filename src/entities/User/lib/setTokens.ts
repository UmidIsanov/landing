import { UserResponse } from "@/src/entities/User/types/user";
import { setCookie } from "cookies-next";

export const setTokens = (payload: UserResponse) => {
  localStorage.setItem("accessToken", payload.accessToken);
  localStorage.setItem("refreshToken", payload.refreshToken);
  setCookie("accessToken", payload.accessToken, { maxAge: 1000 * 60 * 30 });
  setCookie("refreshToken", payload.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30 });
};
