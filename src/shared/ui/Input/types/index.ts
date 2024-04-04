import { InputHTMLAttributes } from "react";
import { InputVariants } from "./variants";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  isBlueBorder?: boolean;
  Icon?: any;
  iconToRight?: boolean;
  variant?: InputVariants;
}
