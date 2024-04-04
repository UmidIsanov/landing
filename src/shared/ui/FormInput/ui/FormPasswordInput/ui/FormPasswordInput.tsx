"use client";

import { FC, forwardRef } from "react";
import { FormInputIProps } from "../../../types";
import PasswordInput from "./PasswordInput";
import styles from "../../../styles/formInput.module.scss";

const RenderMessages: FC<{
  errorMessages: string[];
  errorCodes?: ("FAIL" | "SUCCESS")[];
  successMessages?: string[];
}> = ({ errorMessages, errorCodes, successMessages }) => (
  <ul className="mb-2">
    {errorMessages?.map((errorMessage, index) => (
      <li
        key={index}
        className={`${
          (errorCodes && errorCodes[index] === "SUCCESS") || !errorCodes ? "text-green" : "text-red"
        } text-[12px] flex gap-2 px-1`}
      >
        {(errorCodes && errorCodes[index] === "SUCCESS") || !errorCodes ? (
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.14404" cy="7.99951" r="7.14404" fill="#1BB234" />
            <path d="M11 5.85547L5.94196 10.9135" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2.99219 6.85547L6.99219 10.8555" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.35693" cy="8" r="7.14404" fill="#CD355D" />
            <path d="M9.81641 5.40186L4.75837 10.4599" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            <path d="M4.75837 5.40186L9.81641 10.4599" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        )}
        {((errorCodes && errorCodes[index] === "SUCCESS") || !errorCodes) && successMessages && successMessages[index]
          ? successMessages[index]
          : errorMessage}
      </li>
    ))}
  </ul>
);

export default forwardRef<HTMLInputElement, FormInputIProps>(function FormInput(
  {
    isRequired,
    newClassNames,
    isSubmitSuccessful,
    successMessages,
    errorMessages,
    label,
    inputProps,
    withBlueBorder,
    errorCodes,
  },
  ref,
) {
  return (
    <div className="flex-col flex w-full">
      <label htmlFor={label} className="p-1 pl-0">
        {label} {isRequired && <span className="text-red">*</span>}
      </label>
      <PasswordInput
        ref={ref}
        className={`w-full pr-5 focus:outline-none ${newClassNames ?? ""} ` + (withBlueBorder ? styles.formInput : "")}
        name={label}
        {...inputProps}
      />
      {errorMessages && inputProps?.value && errorMessages.length > 0 && (
        <RenderMessages successMessages={successMessages} errorCodes={errorCodes} errorMessages={errorMessages} />
      )}
    </div>
  );
});
