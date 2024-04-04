import { SpecialNeedsListType, SpecialNeedsObjectType } from "@/src/shared/types/specialNeeds";
import { SetStateAction, Dispatch } from "react";

export interface ISpecialNeedsModalProps {
  open: boolean;
  onClose?: () => void;
  ownSpecialNeeds: SpecialNeedsListType;
  setSpecialNeeds: Dispatch<SetStateAction<SpecialNeedsObjectType>>;
}

export interface ISpecialNeedsChoiceProps extends Pick<ISpecialNeedsModalProps, "ownSpecialNeeds"> {}
