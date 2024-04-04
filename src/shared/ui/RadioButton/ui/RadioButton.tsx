import React, { FC } from "react";
import { RadioButtonIProps } from "../types";

const RadioButton: FC<RadioButtonIProps> = props => {
  return <input type="radio" {...props} />;
};

export default RadioButton;
