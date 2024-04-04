import { hirerApi } from "@/src/entities/Hirer";
import { moderatorApi } from "@/src/entities/Moderator";
import { tutorApi } from "@/src/entities/Tutor";
import userSlice from "@/src/entities/User/model/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const ownReducer = combineReducers({
  userReducer: userSlice,
  [hirerApi.reducerPath]: hirerApi.reducer,
  [tutorApi.reducerPath]: tutorApi.reducer,
  [moderatorApi.reducerPath]: moderatorApi.reducer,
});

export const store = configureStore({
  reducer: ownReducer,
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat([tutorApi.middleware, hirerApi.middleware, moderatorApi.middleware]),
});

export type ApplicationStore = typeof store;
export type AppDispatch = ApplicationStore["dispatch"];
export type RootState = ReturnType<typeof ownReducer>;
