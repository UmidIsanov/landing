import { Box, styled } from "@mui/material";

export const modalStyles = { justifyContent: "center", display: "flex", alignItems: "center" };

export const StyledCategoryItem = styled(Box)({
  cursor: "pointer",
  padding: "10px 4.5px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  borderRadius: 8,
  fontSize: 14,
  position: "relative",
  zIndex: 100,
  fontWeight: 500,
  "&:hover, &:hover > svg": {
    color: "var(--green-color)",
  },
  transition: "all 0.15s ease-out",
  userSelect: "none",
});

export const StyledSNItem = styled(Box)({
  userSelect: "none",
  cursor: "pointer",
  display: "flex",
  gap: "10px",
  padding: "4px 8px",
  alignItems: "center",
});

export const StyledShadowBox = styled(Box)({
  zIndex: 10,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.10)",
});
