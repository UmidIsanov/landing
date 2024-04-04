"use client";

import React, { forwardRef, useState } from "react";

import { FormInputIProps } from "../../../types";
import Input from "@/src/shared/ui/Input";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// eslint-disable-next-line react/display-name
const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps & FormInputIProps>((props, ref) => {
  const { isError, className } = props;
  const [showPass, setShowPass] = useState<boolean>(false);

  const inputClassName = isError ? "bg-errorclr" : "";

  const handlerTogglePass = () => {
    setShowPass(prevShowPass => !prevShowPass);
  };

  return (
    <div className="relative mb-2">
      <Input
        ref={ref}
        type={showPass ? "text" : "password"}
        {...props}
        className={`text-sm w-full px-3 pr-5 ${className} ${inputClassName}`}
      />
      <button
        type="button"
        onClick={handlerTogglePass}
        className="absolute inset-y-0 right-0 px-2 flex items-center focus:outline-none"
      >
        {showPass ? (
          <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              // eslint-disable-next-line max-len
              d="M18.5913 11.4483C20.2195 9.80518 21.2129 8.25195 21.2129 8.25195C21.2129 8.25195 16.7357 1.25195 11.2129 1.25195C10.3872 1.25195 9.58492 1.40841 8.81745 1.67454M4.27355 1.25195L18.7692 15.7476M1.21289 8.25195C1.21289 8.25195 3.15077 5.22209 6.04936 3.14909L16.3055 13.4052C14.8139 14.4582 13.0727 15.252 11.2129 15.252C5.69004 15.252 1.21289 8.25195 1.21289 8.25195ZM11.2129 12.2519C9.00375 12.2519 7.21289 10.461 7.21289 8.2519C7.21289 7.23746 7.59053 6.31121 8.21289 5.60608L14.0733 11.048C13.347 11.7908 12.3338 12.2519 11.2129 12.2519Z"
              stroke="#101828"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              // eslint-disable-next-line max-len
              d="M21.2129 7.5C21.2129 7.5 16.7357 14.5 11.2129 14.5C5.69004 14.5 1.21289 7.5 1.21289 7.5C1.21289 7.5 5.69004 0.5 11.2129 0.5C16.7357 0.5 21.2129 7.5 21.2129 7.5Z"
              stroke="#101828"
              strokeLinecap="round"
            />
            <path
              // eslint-disable-next-line max-len
              d="M15.2129 7.5C15.2129 9.70914 13.422 11.5 11.2129 11.5C9.00375 11.5 7.21289 9.70914 7.21289 7.5C7.21289 5.29086 9.00375 3.5 11.2129 3.5C13.422 3.5 15.2129 5.29086 15.2129 7.5Z"
              stroke="#101828"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
});

export default PasswordInput;
