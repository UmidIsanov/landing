import { CustomOmit, IDataFromDict, WithId } from "./general";

export type SpecialNeedsType = WithId<{ name: string; snCategoryId: number; special_needs_category: IDataFromDict }>;

export type SpecialNeedsItemType = SpecialNeedsType["special_needs_category"] & {
  special_needs: CustomOmit<SpecialNeedsType, "special_needs_category">[];
};

export type SpecialNeedsListType = SpecialNeedsItemType[];

export type SpecialNeedsObjectType = Record<number, Record<number, string>>;
