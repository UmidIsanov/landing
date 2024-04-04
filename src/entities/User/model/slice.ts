import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponse, UserState } from "../types/user";
import { refreshThunk } from "../api/refreshThunk";
import { setTokens } from "..";
import { clearTokens } from "../lib/clearTokens";

const initialState: UserState = {
  user: null,
  error: null,
  isAuth: false,
  isLoading: true,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loggedOut(state) {
      if (process.env.NODE_ENV === "development") {
        clearTokens();
      }
      state.user = null;
      state.isAuth = false;
    },
    tokenReceive(state, action: PayloadAction<UserResponse>) {
      setTokens(action.payload);
      state.user = action.payload.user;
      state.isAuth = true;
    },
    fetchUser(state) {
      state.isAuth = false;
      state.isLoading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action: PayloadAction<UserResponse["user"]>) {
      state.isAuth = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    fetchUserError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(refreshThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoading = false;
    });

    builder.addCase(refreshThunk.pending, state => {
      state.isAuth = false;
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(refreshThunk.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const { loggedOut, tokenReceive, clearError, fetchUser, fetchUserError, fetchUserSuccess } = userSlice.actions;
export default userSlice.reducer;
