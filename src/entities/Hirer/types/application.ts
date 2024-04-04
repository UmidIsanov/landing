//  если оказалось что че-то забыл, то будет круто если дополните типы (это примерно то, что приходит с бэка)

import { ApplicationNamesOfStatuses, ApplicationStatuses, ApplicationTypes } from "@/src/shared/types/application";
import { CountAndRows, IDataFromDict, WithDates, WithId } from "@/src/shared/types/general";
import { UserResponse } from "../../User/types/user";
import { SpecialNeedsType } from "@/src/shared/types/specialNeeds";
import { ILanguage } from "@/src/shared/types/language";

// интерфейс для создания заявки нанимателя
export interface IPostHirer {
  title: string;
  gender: "Female" | "Male";
  cityId: number;
  dateOfBirth: string;
  info?: string | null; // Это поле необязательно, если пользователь ничего не написал то null
  languageIds: string; // "1,2,3"
  specialNeedsIds: string; // "1,2,3",
  accompanimentIds: string; // "1,2,3",
  tutorsWishes?: string | null; // Это поле необязательно, если пользователь ничего не написал то null
  accompanimentType: string; //Предопределены на бэке, например: С родителями | Без родителей и т.д...
  experience: string; //Предопределены на бэке, например: Без опыта | Опыт 2 года и т.д...
}

// то, что приходит в ответе при создании
export type IPostHirerResponse = Required<
  WithId<
    WithDates<
      Omit<IPostHirer, "languageIds" | "specialNeedsIds" | "accompanimentIds"> & {
        applicationId: number;
        oldApplicationId: null | number;
      }
    >
  >
>;

// Тип для обновления заявки (Опциональное, если поле не прописал пользователь, то мы просто ничего не кидаем в запросе)

export type PutHirerType = Partial<IPostHirer>;

// Тип для единой заявки нанимателя из списка в ЛК
export interface HirerProfileApplication extends WithDates<{}>, WithId<{}> {
  userId: number;
  applicationTypeId: ApplicationTypes;
  applicationStatusId: ApplicationStatuses;
  user: Pick<UserResponse["user"], "firstName" | "secondName" | "lastName" | "phone" | "email">;
  hirer: IPostHirerResponse & { city: IDataFromDict };
}

// Тип для списка в ЛК
export type HirerProfileApplicationsList = CountAndRows<HirerProfileApplication[]>;

// Интерфейс для полноценной заявки в ЛК
export interface FullHirerProfileApplication extends HirerProfileApplication {
  application_status: ApplicationNamesOfStatuses;
  hirer: IPostHirerResponse & {
    city: IDataFromDict;
    special_needs: SpecialNeedsType[];
    accompaniments: IDataFromDict[];
    languages: ILanguage[];
  };
}

// Интерфейс для обновления заявки статуса
// Пользователь может перевести свою заявку в архив или обратно в активные
export interface UpdateStatusOfApplication {
  status: ApplicationStatuses.DISABLED | ApplicationStatuses.ACTIVE;
}
