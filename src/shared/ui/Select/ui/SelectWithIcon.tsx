import React, { FC, MouseEvent } from "react";
import { StyledSelect } from "../styles";
import { Typography } from "@mui/material";
import { SelectWithIconIProps } from "../types";
import ChevronIcon from "../../../assets/chevron-up.svg";

export const SelectWithIcon: FC<SelectWithIconIProps> = ({
  isSingle,
  Icon,
  title,
  isMultiple,
  selected,
  setIsOpenHandler,
  isOpen,
  width,
  children,
}) => {
  /*eslint-disable indent */

  const values =
    selected && Object.keys(selected).length > 0
      ? isMultiple
        ? Object.values(selected).reduce((acc, el, index, arr) => {
            acc += el + (index === arr.length - 1 ? "" : ", ");
            return acc;
          }, "")
        : Object.values(selected)[0]
      : title;

  return (
    <div style={{ cursor: "pointer" }} onClick={setIsOpenHandler} className={isSingle ? "relative" : "contents"}>
      {Icon && <Icon className="absolute top-[14px] left-[15px]" />}
      <StyledSelect sx={{ paddingLeft: Icon ? "42px" : "15px", width: width ?? "auto" }}>
        {selected && Object.keys(selected).length > 0 ? (
          isMultiple ? (
            <p
              title={values}
              style={{ width: "85%", textWrap: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
            >
              {values}
            </p>
          ) : (
            values
          )
        ) : (
          <Typography sx={{ fontSize: 16, color: "var(--color-200)" }}>{values}</Typography>
        )}
      </StyledSelect>
      <ChevronIcon className={`absolute top-[12px] right-[15px] transform ${isOpen ? "rotate-180" : ""}`} />
      {children}
    </div>
  );
};

export default StyledSelect;
