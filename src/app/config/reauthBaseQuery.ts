import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "./baseQuery";
import { $publicApi } from "..";
import { UserResponse } from "@/src/entities/User/types/user";
import { loggedOut, tokenReceive } from "@/src/entities/User/model/slice";

export const ReauthBaseQuery = (
  url?: string,
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta> => {
  const baseQuery = createBaseQuery(url);
  return async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      const refreshData = await $publicApi.get<UserResponse>("api/user/refresh");
      if (refreshData.data) {
        api.dispatch(tokenReceive(refreshData.data));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(loggedOut());
      }
    }
    return result;
  };
};
