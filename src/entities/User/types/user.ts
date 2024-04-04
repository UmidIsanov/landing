import { ClientType, UserActiveType } from "@/src/app";
import { UserActiveTypeIDs } from "@/src/app/types/activeTypes";
import { ClientTypeIDs } from "@/src/app/types/clientTypes";

export interface UserResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export type AuthDataType = Omit<UserResponse["user"], "id" | "activeTypeId" | "activeType" | "roleId" | "role"> & {
  password: string;
  type: "HIRER" | "TUTOR" | "MODERATOR";
};

export interface UserState {
  user: UserResponse["user"] | null;
  isLoading: boolean;
  isAuth: boolean;
  error: string | null;
}
interface User {
  phone: string;
  secondName: string;
  firstName: string;
  lastName: null | string;
  email: string;
  id: number;
  activeTypeId: UserActiveTypeIDs;
  roleId: ClientTypeIDs;
  role: ClientType;
  activeType: UserActiveType;
}
