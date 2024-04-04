import { CountAndRows, CustomOmit, WithDates, WithId } from "@/src/shared/types/general";
import { IPostTutorResponse, TutorProfileApplication } from "../../Tutor/types/application";
import { UserResponse } from "../../User/types/user";
import { ApplicationStatuses } from "@/src/shared/types/application";
import { FullHirerProfileApplication, IPostHirerResponse } from "../../Hirer/types/application";

export type SingleApplication<T extends Record<string, any>> = WithId<
  WithDates<Pick<TutorProfileApplication, "id" | "applicationStatusId" | "applicationTypeId" | "userId">>
> & { user: CustomOmit<UserResponse["user"], "activeType" | "role"> } & T;

export type IModerTutors = CountAndRows<
  SingleApplication<{
    application_status: {
      name: ApplicationStatuses;
    };
    tutor: CustomOmit<IPostTutorResponse, "createdAt" | "updatedAt" | "oldApplicationId">;
  }>[]
>;

export type IModerHirers = CountAndRows<
  SingleApplication<{ hirer: Required<CustomOmit<IPostHirerResponse, "createdAt" | "updatedAt">> }>[]
>;

export type IModerSingleTutor = SingleApplication<{
  application_status: {
    name: ApplicationStatuses;
  };
  tutor: TutorProfileApplication["tutor"];
}>;

export type IModerSingleHirer = SingleApplication<{
  application_status: {
    name: ApplicationStatuses;
  };
  hirer: FullHirerProfileApplication["hirer"];
}>;
