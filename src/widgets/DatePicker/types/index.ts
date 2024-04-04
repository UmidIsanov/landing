import { Dispatch, SetStateAction } from "react";

export interface DatePickerIProps {
  title: string;
  width: number;
  currDate: string | null;
  setCurrDate: Dispatch<SetStateAction<string | null>>;
  id: string;
}
