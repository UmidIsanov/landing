"use client";

import { FC, forwardRef, memo } from "react";
import Input from "../../../../Input";
import { FormInputIProps } from "../../../types";
import styles from "../../../styles/formInput.module.scss";
import TextArea from "@/src/shared/ui/TextArea";
import { Typography } from "@mui/material";

export const RenderSingleErrorMessage: FC<{ errorMessage: string | undefined; noMargin?: boolean }> = ({
  errorMessage,
  noMargin,
}) => (
  <p className={`text-red mb-2 ${noMargin ? "" : "mb-2"} text-[12px] flex gap-2 px-1`}>
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.35693" cy="8" r="7.14404" fill="#CD355D" />
      <path d="M9.81641 5.40186L4.75837 10.4599" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4.75837 5.40186L9.81641 10.4599" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
    {errorMessage}
  </p>
);

const RenderSuccessMessage: FC<{ successMessage: string | undefined; noMargin?: boolean }> = ({
  noMargin,
  successMessage,
}) => (
  <p className={`text-green ${noMargin ? "" : "mb-2"} text-[12px] flex gap-2 px-1 flex`}>
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.35693" cy="8" r="7.14404" fill="#1BB234" />
      <path d="M11.2129 5.85596L6.15485 10.914" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3.20508 6.85596L7.20508 10.856" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
    {successMessage}
  </p>
);
export default memo(
  forwardRef<HTMLInputElement, FormInputIProps>(function FormInput(
    {
      newClassNames,
      isRequired,
      isError,
      errorMessage,
      label,
      inputProps,
      successMessage,
      withBlueBorder,
      isErrorCheckDisable,
      Icon,
      hint,
      isTextArea,
      textAreaProps,
      noLabel,
    },
    ref,
  ) {
    const inputClassName = isError ? "bg-red-300" : "";
    /* eslint-disable indent */
    return (
      <div className={"flex-col flex"} style={{ width: `${inputProps?.width ? `${inputProps?.width}px` : "100%"}` }}>
        {!noLabel && (
          <label htmlFor={label} className="p-1 pl-0">
            {label} {isRequired && <span className="text-red">*</span>}
          </label>
        )}
        {isTextArea && textAreaProps ? (
          <TextArea {...textAreaProps} />
        ) : (
          <Input
            ref={ref}
            name={label}
            {...inputProps}
            Icon={Icon}
            className={
              `w-full text-sm mb-2 ${newClassNames ?? ""} ${inputClassName} ` + (withBlueBorder ? styles.formInput : "")
            }
          />
        )}
        {!isErrorCheckDisable &&
          isError &&
          ((inputProps?.type === "tel" && inputProps.value !== "+7") ||
            (inputProps?.value && inputProps.type !== "tel")) && (
            <RenderSingleErrorMessage noMargin={noLabel} errorMessage={errorMessage} />
          )}
        {!isErrorCheckDisable &&
          !isError &&
          ((inputProps?.type === "tel" && inputProps.value !== "+7") ||
            (inputProps?.value && inputProps.type !== "tel")) && (
            <RenderSuccessMessage noMargin={noLabel} successMessage={successMessage} />
          )}
        {hint && <Typography sx={{ color: "var(--color-200)", fontSize: 14 }}>{hint}</Typography>}
      </div>
    );
  }),
);
