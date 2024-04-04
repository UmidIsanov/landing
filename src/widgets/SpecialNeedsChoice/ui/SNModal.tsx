import { Box, Modal, Typography } from "@mui/material";
import React, { FC, useContext, useMemo } from "react";
import { ISpecialNeedsModalProps } from "../types";
import { BoxModal } from "../styles/BoxModal";
import { modalStyles } from "../styles";
import Button from "@/src/shared/ui/Button";
import CategoriesList from "./CategoriesList";
import SpecialNeedsList from "./SpecialNeedsList";
import { SpecialNeedsItemType } from "@/src/shared/types/specialNeeds";
import { SNContext } from "../providers/SpecialNeedsContext";
import ContextConsumer from "@/src/shared/lib/ContextConsumer";

const SNModal: FC<ISpecialNeedsModalProps> = ({ open, setSpecialNeeds, onClose, ownSpecialNeeds }) => {
  const snContext = useContext(SNContext);
  const categories = useMemo(() => {
    const categoryItems = ownSpecialNeeds.reduce((acc, c) => {
      acc.push({ name: c.name, id: c.id });
      return acc;
    }, [] as Pick<SpecialNeedsItemType, "id" | "name">[]);
    return categoryItems;
  }, [ownSpecialNeeds]);

  const saveData = () => {
    if (snContext?.localSpecialNeeds) {
      setSpecialNeeds(snContext.localSpecialNeeds);
    }
    onClose?.();
  };

  /*eslint-disable indent */
  return (
    <Modal
      sx={modalStyles}
      aria-labelledby="special-needs-modal"
      aria-describedby="special-needs-and-categories"
      open={open}
      onClose={onClose}
    >
      <BoxModal>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography fontSize={24} fontWeight={400} component={"h3"}>
            Выбор особенностей
          </Typography>
          <Button onClick={onClose} className="py-[9px] px-[16px]" variant={7}>
            X
          </Button>
        </Box>
        <Typography fontSize={16} fontWeight={700}>
          Выберите категорию
        </Typography>
        <Box sx={{ height: "84%", display: "flex", gap: "10px" }}>
          <CategoriesList categories={categories} />
          <SpecialNeedsList ownSpecialNeeds={ownSpecialNeeds} />
        </Box>
        <Box sx={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
          <ContextConsumer context={SNContext}>
            {val => {
              const qty = val?.localSpecialNeeds
                ? Object.values(val.localSpecialNeeds).reduce((acc, el) => {
                    acc += Object.values(el).length;
                    return acc;
                  }, 0)
                : 0;
              return (
                <Button onClick={val?.clearAll} className="text-[14px] font-light py-[8px] px-[23px]" variant={7}>
                  Сбросить ({qty})
                </Button>
              );
            }}
          </ContextConsumer>
          <Button className="text-[14px] font-light py-[8px] px-[23px]" onClick={saveData} variant={1}>
            Сохранить выбранные
          </Button>
        </Box>
      </BoxModal>
    </Modal>
  );
};

export default SNModal;
