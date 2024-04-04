import { Box, Stack, Typography, styled } from "@mui/material";

export const ModalStack = styled(Stack)({
  backgroundColor: "white",
  width: "100%",
  padding: 24,
  borderRadius: 8,
  marginTop: 33,
  marginBottom: 48,
  // border: "1px solid var(--border-color)",
  boxShadow: "0px 0px 2px 0px var(--for-shadow)",
});

export const BoxWithGap = styled(Box)({
  gap: 32,
  display: "flex",
  flexDirection: "row",
});

export const StackLabel = styled("label")({
  width: 280,
  fontSize: 14,
  fontWeight: 500,
});
