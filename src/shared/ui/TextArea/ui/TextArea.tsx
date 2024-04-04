import { FC } from "react";
import { OwnTextArea, TextAreaIProps } from "../types";

const TextArea: FC<TextAreaIProps> = props => {
  const { width, fullWidth } = props;
  return (
    <OwnTextArea sx={{ width: `${width}px` }} className={`${fullWidth ? "w-full" : `w-[${width}px]`}`} {...props} />
  );
};

export default TextArea;
