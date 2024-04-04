import { SpecialNeedsItemType } from "@/src/shared/types/specialNeeds";
import React, { FC, useContext } from "react";
import MinusIcon from "@/src/shared/assets/minus-icon.svg";
import PlusIcon from "@/src/shared/assets/plus-icon.svg";
import { SNContext } from "../providers/SpecialNeedsContext";
import { StyledCategoryItem, StyledShadowBox } from "../styles";
import { Box } from "@mui/material";

interface CategoryItemIProps {
  isActive?: boolean;
  categoryItem: Pick<SpecialNeedsItemType, "id" | "name">;
  index: number;
}

const CategoryItem: FC<CategoryItemIProps> = ({ isActive, categoryItem, index }) => {
  const snContext = useContext(SNContext);

  const setIsActiveItem = () => {
    snContext?.setActiveCategory(prev => (prev === categoryItem.id ? null : categoryItem.id));
  };

  const qty = snContext?.localSpecialNeeds[categoryItem.id]
    ? Object.values(snContext?.localSpecialNeeds[categoryItem.id]).length
    : null;

  return (
    <Box sx={{ position: "relative" }}>
      <StyledCategoryItem
        style={{
          backgroundColor: isActive ? "var(--gray-400)" : "var(--white-color)",
        }}
        onClick={setIsActiveItem}
        component={"li"}
      >
        {isActive ? <MinusIcon /> : <PlusIcon />} {categoryItem.name} {qty ? `(${qty})` : ""}
      </StyledCategoryItem>
      <StyledShadowBox />
    </Box>
  );
};

export default CategoryItem;
