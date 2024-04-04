import { InputHTMLAttributes } from "react";
import { TextAreaIProps } from "../../TextArea/types";
import { IInput } from "../../Input/types";

export interface FormInputIProps {
  label?: string;
  isSubmitSuccessful?: boolean;
  isError?: boolean;
  inputProps?: IInput;
  textAreaProps?: TextAreaIProps;
  errorMessage?: string;
  errorMessages?: string[];
  successMessage?: string;
  successMessages?: string[];
  isRequired?: boolean;
  withBlueBorder?: boolean;
  errorCodes?: ("SUCCESS" | "FAIL")[];
  isErrorCheckDisable?: boolean;
  Icon?: any;
  newClassNames?: string;
  isTextArea?: boolean;
  hint?: string;
  noLabel?: boolean;
}
