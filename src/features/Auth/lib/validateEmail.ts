import { Validate } from "react-hook-form";
import { RegState } from "../types/regState";
import { LoginState } from "../types/loginState";

type AppState = RegState | LoginState;

export const validateEmail: Validate<string | undefined, AppState> = data => {
  const regEx =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\.,;:\s@\"%]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((([^<>()\[\]\.,;:\s@\"]+\.)+[^<>()\[\]\.,;:\s@\"]{2,})|(([0-9]{1,3}\.){3}[0-9]{1,3}))/i;
  if (!data || !data.match(regEx)) {
    return "НеПоле заполнено верно электронной почты";
  }
  return true; // Проверка успешна
};
