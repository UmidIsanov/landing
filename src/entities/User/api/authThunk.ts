import { $publicApi, AppDispatch } from "@/src/app";
import { AuthDataType, UserResponse } from "../types/user";
import { fetchUser, fetchUserError, fetchUserSuccess } from "../model/slice";
import { isAxiosError } from "axios";
import { setTokens } from "..";

export const authThunk = (isLogin: boolean, data: Partial<AuthDataType>) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchUser());
      let userAuthData = data;
      const authUrl = isLogin ? "/login" : data.type === "HIRER" ? "/hirer/registration" : "/tutor/registration";
      if (isLogin) {
        delete userAuthData.firstName;
        delete userAuthData.lastName;
        delete userAuthData.phone;
        delete userAuthData.secondName;
        delete userAuthData.type;
      }
      const user = await $publicApi.post<UserResponse>(`/api/user${authUrl}`, userAuthData);
      if (process.env.NODE_ENV === "development") {
        setTokens(user.data);
      }
      dispatch(fetchUserSuccess(user.data.user));
    } catch (err) {
      if (isAxiosError(err)) {
        dispatch(fetchUserError(err.response?.data.message));
      } else {
        dispatch(fetchUserError("Произошла ошибка"));
      }
      return null;
    }
  };
};
