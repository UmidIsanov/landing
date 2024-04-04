import { ApplicationNamesOfStatuses, ApplicationStatuses, ApplicationTypes } from "@/src/shared/types/application";
import { IDataFromDict, WithDates, WithId } from "@/src/shared/types/general";
import { UserResponse } from "../../User/types/user";
import { ILanguage } from "@/src/shared/types/language";
import { SpecialNeedsType } from "@/src/shared/types/specialNeeds";

// Интерфейс для создания заявки тьютора
export interface IPostTutor {
  gender: "Male" | "Female";
  cityId: number;
  dateOfBirth: string;
  educationIds: string; // "1,2,3"
  addEducation?: string | null; // Это поле необязательно, если пользователь ничего не написал то null
  experience: string; //Предопределены на бэке, например: Без опыта | Опыт 2 года и т.д...
  specialNeedsIds: string; // "1,2,3"
  otherInfo: string;
  interestsAndHobbies?: string | null; // Это поле необязательно, если пользователь ничего не написал то null
  businessTripOpportunity: string; // тут не булево, а строкой 'true' | 'false'
  readinessToContinueStudying: string; // тут не булево, а строкой 'true' | 'false'
  posibilityOfIrregularSchedule: string; // тут не булево, а строкой 'true' | 'false'
  videoLink: string;
  docs?: File[] | null; // Это поле необязательно, если пользователь ничего не приложил то null
  languageIds: string; // "1,2,3"
}
// то, что приходит в ответе при создании
export interface IPostTutorResponse
  extends Required<
    WithDates<
      WithId<
        Omit<
          IPostTutor,
          | "businessTripOpportunity"
          | "readinessToContinueStudying"
          | "posibilityOfIrregularSchedule"
          | "experience"
          | "educationIds"
          | "docs"
          | "languageIds"
          | "specialNeedsIds"
          | "addEducation"
        >
      >
    >
  > {
  professionalExperience: string;
  businessTripOpportunity: boolean;
  readinessToContinueStudying: boolean;
  posibilityOfIrregularSchedule: boolean;
  applicationId: number;
  additionalEducation: string | null;
  rating: number;
  oldApplicationId: number | null;
}

// Тип для обновления заявки
export type IUpdateTutorApplication = Partial<IPostTutor>;

interface IDocument {
  fileName: string;
  fileLink: string;
}

// Заявка тьютора в ЛК

export interface TutorProfileApplication extends WithDates<{}>, WithId<{}>, Pick<IPostTutorResponse, "applicationId"> {
  applicationStatusId: ApplicationStatuses;
  applicationTypeId: ApplicationTypes;
  userId: number;
  user: Pick<UserResponse["user"], "firstName" | "secondName" | "lastName" | "phone" | "email">;
  application_status: { name: ApplicationNamesOfStatuses };
  tutor: IPostTutorResponse & {
    document_of_tutors: IDocument[];
    languages: ILanguage[];
    education: WithId<{ educationTitle: string }>[];
    city: IDataFromDict;
    special_needs: SpecialNeedsType[];
  };
}

// Заявка тьютора в ЛК которая находится на модерации (для обновления)

export interface TutorProfileApplicationOnUpdate extends IPostTutorResponse {
  application: WithDates<Pick<TutorProfileApplication, "id" | "userId" | "applicationTypeId" | "applicationStatusId">>;
  document_of_tutors: IDocument[];
  city: IDataFromDict;
}
