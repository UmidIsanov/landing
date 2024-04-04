import React from "react";
import PasswordInput from "./PasswordInput";
import { FormInputIProps } from "../../../types";

const PasswordInputWrapper = ({ label, isRequired, inputProps, isError }: FormInputIProps) => {
  return (
    <div className="flex flex-col w-full">
      <PasswordInput label={label} isRequired={isRequired} inputProps={inputProps} isError={isError} />
      <div className="text-sm text-gray-500"></div>
    </div>
  );
};

export default PasswordInputWrapper;
