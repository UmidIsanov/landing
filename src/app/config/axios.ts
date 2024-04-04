import { UserResponse } from "@/src/entities/User/types/user";
import axios, { InternalAxiosRequestConfig } from "axios";
import { setTokens } from "@/src/entities/User";

export const $publicApi = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL + ":5000", withCredentials: true });
export const $privateApi = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL + ":5000", withCredentials: true });

let resCheck = false;

const injectTokensToRequest = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  config.headers["Refresh-Token"] = localStorage.getItem("refreshToken");
  return config;
};
if (process.env.NODE_ENV === "development") {
  $publicApi.interceptors.request.use(injectTokensToRequest);
}

$privateApi.interceptors.response.use(
  config => {
    return config;
  },
  async err => {
    const originalConfig = err.config;
    if (err.config && (err.response.status == 401 || err.response.status == 403) && !resCheck) {
      resCheck = true;
      try {
        const { data } = await $publicApi.get<UserResponse>("api/user/refresh");
        if (process.env.NODE_ENV === "development") {
          setTokens(data);
        }
        return $privateApi.request(originalConfig);
      } catch (err) {
        resCheck = false;
        console.log(err);
      }
    } else {
      resCheck = false;
      throw err;
    }
  },
);
