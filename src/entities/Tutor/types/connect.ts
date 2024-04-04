import { IPostConnectResponse } from "@/src/shared/types/connect";
import { FullHirerProfileApplication, HirerProfileApplication } from "../../Hirer/types/application";
import { CountAndRows, CustomOmit, WithDates } from "@/src/shared/types/general";
import { UserResponse } from "../../User/types/user";

export interface ITutorProfileConnect extends IPostConnectResponse {
  hirer: WithDates<Pick<HirerProfileApplication["hirer"], "title" | "applicationId" | "city" | "cityId">> & {
    application: CustomOmit<HirerProfileApplication, "hirer" | "user"> & {
      user: Pick<UserResponse["user"], "firstName" | "secondName" | "lastName"> &
        Partial<{ phone: string; email: string }>;
    };
  };
}

export type ITutorProfileConnectsList = CountAndRows<ITutorProfileConnect[]>;

export interface ITutorProfileSingleConnect extends IPostConnectResponse {
  hirer: Required<FullHirerProfileApplication["hirer"]> & ITutorProfileConnect["hirer"]["application"];
}
