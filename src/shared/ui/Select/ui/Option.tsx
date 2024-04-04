import { Checkbox } from "@mui/material";
import React, { FC, MouseEvent } from "react";
import selectStyles from "../styles/select.module.scss";
import CheckBoxIcon from "../../../assets/checkbox_icon.svg";
import UncheckedIcon from "../../../assets/unchecked.svg";
import { SelectIProps } from "../types";

interface OptionIProps extends Pick<SelectIProps, "removeItem" | "addItem" | "isMultiple"> {
  data: { name: string; id: number };
  isChecked?: boolean;
  closeHandler(): void;
}

const Option: FC<OptionIProps> = ({ data, isChecked, removeItem, closeHandler, addItem, isMultiple }) => {
  const optionClickHandler = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    if (isChecked) {
      removeItem(data.id);
    } else {
      addItem(data.id, data.name);
      !isMultiple && closeHandler();
    }
  };
  return (
    <li
      className={`${selectStyles.li} ${isChecked ? selectStyles["li-checked"] : ""}`}
      onClick={optionClickHandler}
      key={data.id}
    >
      {isMultiple && (
        <Checkbox
          checked={isChecked}
          checkedIcon={<CheckBoxIcon style={{ marginLeft: "2px" }} />}
          icon={<UncheckedIcon />}
          sx={{ padding: 0 }}
          disableRipple
        />
      )}
      {data.name}
    </li>
  );
};

export default Option;
