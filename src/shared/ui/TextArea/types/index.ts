import { styled } from "@mui/material";
import { TextareaHTMLAttributes } from "react";

export interface TextAreaIProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
  width: number;
}

export const OwnTextArea = styled("textarea")({
  border: "1px solid var(--input-border-color)",
  borderRadius: 8,
  resize: "none",
  outline: "none",
  padding: "10px 14px",
  boxSizing: "border-box",
  "&::placeholder": {
    fontSize: 16,
    lineHeight: "24px",
  },
  boxShadow: "0px 0px 2px rgba(0,0,0,0.15)",
});
