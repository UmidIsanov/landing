import { Dispatch, SetStateAction } from "react";
import { RegState, RegStateType } from "./regState";

export type RegContextI = {
  regState: RegState;
  setRegistrationState(data: RegState): void;
  activeStep: ActiveSteps;
  setActiveStep: Dispatch<SetStateAction<ActiveSteps>>;
  setRegType(data: RegStateType): void;
  regType: RegStateType;
} | null;
export type ActiveSteps = "FILL_OWN_INFO" | "FILL_ABOUT_INFO";
