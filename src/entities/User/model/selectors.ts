import { RootState } from "@/src/app";
import { createSelector } from "@reduxjs/toolkit";

export const userErrorSelector = (state: RootState) => state.userReducer?.error;
export const userIsAuthSelector = (state: RootState) => state.userReducer?.isAuth;
export const userIsLoadingSelector = (state: RootState) => state.userReducer?.isLoading;

export const userFetchingSelector = createSelector(
  [userErrorSelector, userIsAuthSelector, userIsLoadingSelector],
  (error, isAuth, isLoading) => ({ error, isAuth, isLoading }),
);
