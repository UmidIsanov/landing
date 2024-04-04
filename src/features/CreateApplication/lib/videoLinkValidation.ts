import { Validate } from "react-hook-form";
import { ITutorFormState } from "../types";

export const videoLinkValidation: Validate<string, ITutorFormState> = data => {
  const regEx = /(https\:\/\/)((www\.youtube\.com\/watch\?v=)|(youtube\.com\/watch\?v=)|(youtu\.be\/)).+/g;
  if (data.match(regEx)) return true;
  return false;
};
