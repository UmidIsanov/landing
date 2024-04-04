import { SpecialNeedsContextIProps } from "@/src/widgets/SpecialNeedsChoice/providers/SpecialNeedsContext";
import { ITutorFormState } from "../types";
import { convertFromRecord } from "./convertFromRecord";
import { convertFromNestedRecord } from "./convertFromNestedRecord";
import { IPostTutor } from "@/src/entities/Tutor/types/application";

interface OwnData {
  data: ITutorFormState;
  city: Record<number, string>;
  languages: Record<number, string>;
  files: File[];
  specialNeeds: SpecialNeedsContextIProps["specialNeeds"];
  education: Record<number, string>;
}

export const convertFormData = (ownData: OwnData) => {
  const cityId = Number(convertFromRecord(ownData.city));
  const languageIds = convertFromRecord(ownData.languages);
  const specialNeedsIds = convertFromNestedRecord(ownData.specialNeeds);
  const educationIds = convertFromRecord(ownData.education);
  const addEducation = ownData.data.addEducation.trim().length === 0 ? null : ownData.data.addEducation;
  const interestsAndHobbies =
    ownData.data.interestsAndHobbies.trim().length === 0 ? null : ownData.data.interestsAndHobbies;
  let docs = null;
  if (ownData.files.length) {
    docs = ownData.files;
  }
  const dataFromForm = {
    ...ownData.data,
    interestsAndHobbies,
    addEducation,
    cityId,
    languageIds,
    specialNeedsIds,
    educationIds,
    docs,
  } as IPostTutor;

  return dataFromForm;
};
