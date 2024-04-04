import React from "react";

import Input from "../../Input";

import { IApplicationInput } from "../types";

const ApplicationInputModal = ({ label, disabled, onChange, value, id, className, type }: IApplicationInput) => {
  return (
    <div className="flex justify-start gap-10 text-xs items-center">
      <label htmlFor={id} className="w-[280px]">
        {label}
      </label>
      <div className="w-[440px] flex justify-start gap-10">
        <Input
          id={id}
          type={type}
          className={className}
          value={value}
          name={id}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ApplicationInputModal;
