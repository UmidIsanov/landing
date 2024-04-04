import { InputHTMLAttributes } from "react";

export interface CheckBoxIProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  toggleCheckbox?(): void;
  isChecked?: boolean;
  disabled?: boolean;
}
