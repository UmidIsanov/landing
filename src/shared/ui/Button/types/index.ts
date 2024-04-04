import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}
