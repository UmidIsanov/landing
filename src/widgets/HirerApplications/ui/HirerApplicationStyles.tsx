import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const StyledContainer: SxProps<Theme> = {
  width: "1011px",
  backgroundColor: "#ffffff",
  boxSizing: "border-box",
  padding: "30px 30px 37px 30px !important",
  boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
  borderRadius: "0.5rem",
};

export const StyledHeadText: SxProps<Theme> = {
  fontSize: "20px",
  fontWeight: "bold",
};

export const StyledHeadBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

export const StyledListInfo: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  fontSize: "16px",
};

export const StyledInfoListIext: SxProps<Theme> = {
  fontSize: "16px",
  position: "relative",
};

export const StyledInfoIext: SxProps<Theme> = {
  fontSize: "16px",
  border: "solid 1px var(--input-border-color)",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "14px",
  borderRadius: "0.5rem",
};
