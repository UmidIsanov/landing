import { IPostConnectResponse } from "@/src/shared/types/connect";
import { CountAndRows, CustomOmit, IDataFromDict, WithDates, WithId } from "@/src/shared/types/general";
import { HirerProfileApplication, IPostHirerResponse } from "./application";
import { IPostTutorResponse, TutorProfileApplication } from "../../Tutor/types/application";
import { UserResponse } from "../../User/types/user";

// Список коннектов нанимателя

interface IHirerConnect extends IPostConnectResponse {
  hirer: IPostHirerResponse & {
    application: WithDates<
      WithId<Pick<HirerProfileApplication, "userId" | "applicationStatusId" | "applicationTypeId">>
    >;
  };
  tutor: IPostTutorResponse & {
    city: IDataFromDict;
    application: CustomOmit<HirerProfileApplication, "hirer" | "user"> & {
      user: Pick<UserResponse["user"], "firstName" | "lastName" | "secondName">;
    };
  };
}

export type IHirerConnectList = CountAndRows<IHirerConnect[]>;

export interface ISingleHirerConnect extends IPostConnectResponse {
  hirer: IPostHirerResponse & {
    application: WithDates<
      WithId<Pick<HirerProfileApplication, "userId" | "applicationStatusId" | "applicationTypeId">>
    >;
  };
  tutor: TutorProfileApplication["tutor"] & {
    application: WithDates<
      WithId<Pick<HirerProfileApplication, "userId" | "applicationStatusId" | "applicationTypeId">>
    > & {
      user: Pick<UserResponse["user"], "firstName" | "secondName" | "lastName"> &
        Partial<{ phone: string; email: string }>;
    };
  };
}
