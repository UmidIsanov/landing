import { BaseQueryApi } from "@reduxjs/toolkit/query";

export const injectTokens = (
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">,
) => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
  if (refreshToken) {
    headers.set("Refresh-Token", refreshToken);
  }
  return headers;
};
