"use client";
import { FC, useState } from "react";
import "../styles/index.css";
import { CheckBoxIProps } from "../types";
const Checkbox: FC<CheckBoxIProps> = ({ name, id, isChecked, toggleCheckbox, disabled }) => {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`custom-checkbox ${isChecked ? "checked" : ""}`} aria-checked={isChecked}>
      <input id={id} name={name} type="checkbox" disabled={disabled} checked={isChecked} onChange={toggleCheckbox} />
    </div>
  );
};

export default Checkbox;
