import { IPostTutor } from "@/src/entities/Tutor/types/application";
import { CustomOmit } from "@/src/shared/types/general";
import { Dispatch, SetStateAction } from "react";

export interface IRadioChoose {
  mb?: number;
  title: string;
  variations: { val: string; title: string }[];
  name: string;
  fixedWidth?: boolean;
  gap?: number;
  value: string | null;
  required?: boolean;
  setValue: Dispatch<SetStateAction<string | null>>;
  wrapEveryTwo?: boolean;
}

export interface ITutorFormState {
  gender: string | null;
  businessTripOpportunity: string | null;
  readinessToContinueStudying: string | null;
  posibilityOfIrregularSchedule: string | null;
  experience: string | null;
  dateOfBirth: string | null;
  videoLink: string;
  interestsAndHobbies: string;
  otherInfo: string;
  addEducation: string;
}

export interface IHirerFormState extends Pick<ITutorFormState, "dateOfBirth" | "gender" | "experience"> {
  accompanimentType: string | null;
  accompanimentIds: string | null;
  tutorsWishes: string;
  info: string;
  title: string;
}
