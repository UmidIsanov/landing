import { Validate } from "react-hook-form";
import { RegState } from "../types/regState";

export const validateTel: Validate<string | undefined, RegState> = data => {
  const regEx = /^\+7\-((700)|(701)|(702)|(703)|(705)|(707)|(708)|(747)|(775)|(778))-\d{3}-\d{4}$/g;
  if (data?.match(regEx)) return true;
  return false;
};
