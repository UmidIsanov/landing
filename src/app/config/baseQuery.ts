import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { injectTokens } from "../lib/injectTokens";

export const createBaseQuery = (url?: string) => {
  return fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + (url ?? ""),
    credentials: "include",
    prepareHeaders: (headers, api) => {
      let headersWithTokens;
      if (process.env.NODE_ENV === "development") {
        headersWithTokens = injectTokens(headers, api);
      }
      return headersWithTokens;
    },
  });
};

export const defaultBaseQuery = createBaseQuery();
