import { Box, styled } from "@mui/material";

export const DatePickerBox = styled(Box)({ position: "relative" });
export const DateCalendarContainer = styled(Box)({
  zIndex: 10,
  backgroundColor: "var(--color-white)",
  position: "absolute",
  transition: "0.15s ease-out all",
  userSelect: "none",
  left: 0,
  right: 0,
  boxShadow: "0px 0px 4px rgba(0,0,0,0.25)",
  borderRadius: 8,
});

export const ButtonContainer = styled(Box)({
  padding: "16px 24px",
  borderTop: "1px solid var(--border-color)",
  display: "flex",
  gap: 12,
});
