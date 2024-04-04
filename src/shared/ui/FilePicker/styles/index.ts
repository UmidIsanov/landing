import { Box, styled } from "@mui/material";

export const FileBox = styled(Box)({
  width: 395,
  paddingTop: "21px",
  paddingBottom: "13px",
  gap: 8,
  borderColor: "var(--file-green)",
  borderStyle: "dashed",
  borderRadius: 8,
  borderWidth: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const FileLink = styled("a")({
  marginLeft: "8px",
  marginRight: "32px",
  color: "var(--link-color)",
  cursor: "pointer",
});
