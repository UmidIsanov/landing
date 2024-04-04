import React, { FC, useContext } from "react";
import { SNContext } from "../providers/SpecialNeedsContext";
import { SpecialNeedsType } from "@/src/shared/types/specialNeeds";
import { CustomOmit } from "@/src/shared/types/general";
import { Checkbox, Typography } from "@mui/material";
import { StyledSNItem } from "../styles";
import UncheckedIcon from "@/src/shared/assets/unchecked.svg";
import CheckedIcon from "@/src/shared/assets/checked_item.svg";

interface SpecialNeedsItemIProps {
  snItem: CustomOmit<SpecialNeedsType, "special_needs_category">;
  isActive: boolean;
  index: number;
}

const SpecialNeedsItem: FC<SpecialNeedsItemIProps> = ({ index, snItem, isActive }) => {
  const snContext = useContext(SNContext);

  const toggleSnItem = () => {
    if (isActive) {
      snContext?.removeSpecialNeeds(snItem.id);
    } else {
      snContext?.addSpecialNeeds(snItem.id, snItem.name);
    }
  };

  return (
    <StyledSNItem component={"li"} onClick={toggleSnItem}>
      <Checkbox checkedIcon={<CheckedIcon />} sx={{ padding: 0 }} icon={<UncheckedIcon />} checked={isActive} />
      <Typography sx={{ fontSize: 14, color: isActive ? "#000" : "var(--light-black)" }}>{snItem.name}</Typography>
    </StyledSNItem>
  );
};

export default SpecialNeedsItem;
