"use client";
import { FC, createContext, useState } from "react";
import { RegState, RegStateType } from "../types/regState";
import { ActiveSteps, RegContextI } from "../types/regContext";
import Link from "@mui/material/Link";
import { FillAboutInfo, Register } from "../Register";

export const RegContext = createContext<RegContextI>(null);
const RegContextProvider = RegContext.Provider;

const initialState: RegState = {
  firstName: "",
  secondName: "",
  password: "",
  confirmedPassword: "",
  email: "",
  lastName: "",
  phone: "",
};

const Steps: { [key in ActiveSteps]: FC<any> } = {
  FILL_OWN_INFO: Register,
  FILL_ABOUT_INFO: FillAboutInfo,
};

const RegistartionContext: FC<{ type: string }> = ({ type }) => {
  const [regState, setRegState] = useState<RegState>(initialState);
  const [activeStep, setActiveStep] = useState<ActiveSteps>("FILL_OWN_INFO");
  const [regType, setRegStateType] = useState<RegStateType>(type === "tutor" ? "TUTOR" : "HIRER");

  const ActiveStep = Steps[activeStep];

  const setRegistrationState = (data: RegState) => {
    setRegState(data);
  };

  const setRegType = (data: RegStateType) => {
    setRegStateType(data);
  };

  return (
    <RegContextProvider value={{ regType, activeStep, setActiveStep, setRegType, regState, setRegistrationState }}>
      <ActiveStep>
        <hr className="mt-6 mb-6" />
        <div className="mb-[40px] flex justify-between text-sm">
          <span className="flex flex-col text-center">
            Есть аккаунт?
            <Link href="/login" className="text-green">
              Войти
            </Link>
          </span>
          <span className="flex flex-col text-center">
            Вы не {regType === "TUTOR" ? "тьютор" : "наниматель"}?
            <Link href={`/register/${type === "tutor" ? "hirer" : "tutor"}`} className="text-green">
              Стать {regType === "TUTOR" ? "нанимателем" : "тьютором"}
            </Link>
          </span>
        </div>
      </ActiveStep>
    </RegContextProvider>
  );
};

export default RegistartionContext;
