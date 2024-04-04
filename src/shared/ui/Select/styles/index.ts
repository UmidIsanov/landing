import { Input, styled } from "@mui/material";

export const StyledSelect = styled("div")({
  border: "1px solid var(--input-border-color)",
  borderRadius: 8,
  resize: "none",
  outline: "none",
  cursor: "pointer",
  padding: "10px 14px 10px 45px",
  boxSizing: "border-box",
  "&::placeholder": {
    fontSize: 16,
    lineHeight: "24px",
  },
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
  boxShadow: "0px 0px 2px rgba(0,0,0,0.15)",
});

export const SelectInput = styled(Input)({
  width: "100%",
  position: "sticky",
  top: 0,
  padding: "8px 16px",
  zIndex: 2,
  backgroundColor: "var(--select-color-input)",
  "&::placeholder": {
    fontSize: 14,
    color: "var(--color-placeholder)",
  },
  fontWeight: 500,
  borderRadius: 4,
});
