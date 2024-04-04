import { forwardRef, useMemo } from "react";

import { IInput } from "../types";
import { getPhoneMask } from "../lib/phoneMask";
import { variants } from "../types/variants";

export default forwardRef<HTMLInputElement, IInput>(function Input(
  { value, type, name, onChange, className, placeholder, variant, Icon, disabled, id },
  ref,
) {
  const phoneOnChange = useMemo(() => onChange && getPhoneMask(onChange), []);
  return (
    <div className="relative" style={{ alignItems: "center" }}>
      <div className="absolute top-[12px] left-[14px]">{Icon && <Icon />}</div>

      <input
        id={id}
        ref={ref}
        disabled={disabled}
        type={type}
        name={name}
        value={value}
        /*eslint-disable indent */
        onChange={
          type == "tel"
            ? event => {
                phoneOnChange && phoneOnChange(event);
              }
            : onChange
        }
        className={`${className} ${variant ? variants[variant] : variants["default"]}`}
        placeholder={placeholder}
        style={{ paddingLeft: Icon ? "40px" : "14px" }}
      />
    </div>
  );
});
