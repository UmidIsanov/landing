import { Validate } from "react-hook-form";
import { RegState } from "../types/regState";

export const validateEmptyField: Validate<string | undefined, RegState> = data => {
  const regEx = /^[A-Za-zА-Яа-яЁё-]{1,20}$/g;
  if (!data?.match(regEx)) return false;
  return true;
};
