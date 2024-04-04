import { $publicApi } from "@/src/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { UserResponse } from "../types/user";
import { setTokens } from "..";

export const refreshThunk = createAsyncThunk("authThunk", async (_, { rejectWithValue }) => {
  try {
    const user = await $publicApi.get<UserResponse>("/api/user/refresh");
    if (process.env.NODE_ENV === "development") {
      setTokens(user.data);
    }
    return user.data;
  } catch (err) {
    if (isAxiosError(err)) {
      return rejectWithValue(err.response?.data.error);
    } else {
      return rejectWithValue("Произошла ошибка");
    }
  }
});
