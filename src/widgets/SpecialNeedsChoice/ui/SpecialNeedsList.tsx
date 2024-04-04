import React, { FC, useContext, useMemo } from "react";
import { SNContext } from "../providers/SpecialNeedsContext";
import { Stack } from "@mui/material";
import { ISpecialNeedsModalProps } from "../types";
import { SpecialNeedsItemType } from "@/src/shared/types/specialNeeds";
import SpecialNeedsItem from "./SpecialNeedsItem";

interface SpecialNeedsListIProps extends Pick<ISpecialNeedsModalProps, "ownSpecialNeeds"> {}

const SpecialNeedsList: FC<SpecialNeedsListIProps> = ({ ownSpecialNeeds }) => {
  const snContext = useContext(SNContext);
  const specialNeeds = useMemo(() => {
    const sn = ownSpecialNeeds.find(sn => sn.id === snContext?.activeCategory);
    if (sn) return sn;
    return {} as SpecialNeedsItemType;
  }, [ownSpecialNeeds, snContext?.activeCategory]);
  return (
    <Stack
      component={"ul"}
      className="scrollbar"
      style={{ overflowY: "scroll", paddingTop: "20px", paddingLeft: "20px", flex: 1, gap: "5px" }}
    >
      {specialNeeds?.special_needs?.map((snItem, index) => (
        <SpecialNeedsItem
          index={index}
          snItem={snItem}
          isActive={
            snContext?.activeCategory && snContext?.localSpecialNeeds
              ? Boolean(snContext?.localSpecialNeeds[snContext?.activeCategory]?.[snItem.id])
              : false
          }
          key={snItem.id}
        />
      ))}
    </Stack>
  );
};

export default SpecialNeedsList;
