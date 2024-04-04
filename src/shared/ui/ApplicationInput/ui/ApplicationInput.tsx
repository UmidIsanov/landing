import React from "react";

import Input from "../../Input";

import { IApplicationInput } from "../types";

const ApplicationInput = ({ label, disabled, onChange, value, id, className }: IApplicationInput) => {
  return (
    <div className="flex justify-between gap-10 text-xs items-center">
      <label htmlFor={id} className="w-[120px]">
        {label}
      </label>
      <div className="flex justify-start gap-10">
        <Input id={id} className={className} value={value} name={id} onChange={onChange} disabled={disabled} />
      </div>
    </div>
  );
};

export default ApplicationInput;
