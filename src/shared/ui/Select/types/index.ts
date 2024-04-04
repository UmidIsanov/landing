import { ChangeEvent, MouseEvent, ReactNode } from "react";

export interface SelectIProps {
  Icon?: any;
  addItem: (key: number, val: string) => void;
  removeItem: (key: number) => void;
  data: { id: number; name: string }[];
  selected?: Record<number, string>;
  id: string;
  title: string;
  isMultiple?: boolean;
  width?: number;
}

export interface SelectWithIconIProps extends Pick<SelectIProps, "selected" | "title" | "isMultiple" | "width"> {
  setIsOpenHandler(e: MouseEvent<HTMLDivElement>): void;
  Icon?: any;
  isSingle?: boolean;
  isOpen?: boolean;
  children?: ReactNode;
}
