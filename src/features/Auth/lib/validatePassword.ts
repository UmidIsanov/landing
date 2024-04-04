import { Validate } from "react-hook-form";
import { RegState } from "../types/regState";
import { LoginState } from "../types/loginState";

type AppState = RegState | LoginState;

export const validatePassword: Validate<string | undefined, AppState> = data => {
  const results: ("SUCCESS" | "FAIL")[] = [];
  const regExNum = /[0-9]+/g;
  const regExLetter = /[A-Za-zА-Яа-яЁё]+/g;
  const regExSymbol = /[@!&_]+/g;
  !(data && data.length >= 6 && data.length <= 20) ? (results[0] = "FAIL") : (results[0] = "SUCCESS");
  !(data && data.match(regExLetter)) ? (results[1] = "FAIL") : (results[1] = "SUCCESS");
  !(data && data.match(regExNum)) ? (results[2] = "FAIL") : (results[2] = "SUCCESS");
  !(data && data.match(regExSymbol)) ? (results[3] = "FAIL") : (results[3] = "SUCCESS");
  if (!results.includes("FAIL")) return true;
  return results.toString();
};
