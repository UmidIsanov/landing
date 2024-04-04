import { SpecialNeedsContextIProps } from "@/src/widgets/SpecialNeedsChoice/providers/SpecialNeedsContext";
import { IHirerFormState, ITutorFormState } from "../types";
import { convertFromRecord } from "./convertFromRecord";
import { convertFromNestedRecord } from "./convertFromNestedRecord";
import { IPostHirer } from "@/src/entities/Hirer/types/application";

interface OwnData {
  data: IHirerFormState;
  city: Record<number, string>;
  languages: Record<number, string>;
  specialNeeds: SpecialNeedsContextIProps["specialNeeds"];
}

export const convertHirerFormData = (ownData: OwnData) => {
  const cityId = Number(convertFromRecord(ownData.city));
  const languageIds = convertFromRecord(ownData.languages);
  const specialNeedsIds = convertFromNestedRecord(ownData.specialNeeds);
  const accompanimentIds = String(ownData.data.accompanimentIds);
  const tutorsWishes = ownData.data.tutorsWishes.trim().length > 0 ? ownData.data.tutorsWishes : null;
  const info = ownData.data.info.trim().length > 0 ? ownData.data.info : null;
  const dataFromForm = {
    ...ownData.data,
    cityId,
    languageIds,
    specialNeedsIds,
    accompanimentIds,
    info,
    tutorsWishes,
  } as IPostHirer;

  return dataFromForm;
};
