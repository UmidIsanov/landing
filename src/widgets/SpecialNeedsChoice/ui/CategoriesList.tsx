import { SpecialNeedsItemType } from "@/src/shared/types/specialNeeds";
import { Stack } from "@mui/material";
import React, { FC, useContext } from "react";
import CategoryItem from "./CategoryItem";
import { SNContext } from "../providers/SpecialNeedsContext";

interface CategoriesListIProps {
  categories: Pick<SpecialNeedsItemType, "id" | "name">[];
}

const CategoriesList: FC<CategoriesListIProps> = ({ categories }) => {
  const snContext = useContext(SNContext);

  return (
    <Stack
      component={"ul"}
      className="scrollbar"
      style={{ overflowY: "scroll", padding: "5px 16px 5px 5px", gap: "5px", width: "250px" }}
    >
      {categories.map((category, index) => (
        <CategoryItem
          index={index}
          isActive={snContext?.activeCategory === category.id}
          categoryItem={category}
          key={category.id}
        />
      ))}
    </Stack>
  );
};

export default CategoriesList;
