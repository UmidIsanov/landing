import React from "react";
import OwnInfoItemProps from "../types/index";
import { Box, Typography, styled } from "@mui/material";

const StyledListItem = styled("li")({
  marginBottom: "1.25rem",
  display: "flex",
  justifyContent: "space-between",
});

const StyledTypography = styled(Typography)({
  marginRight: "0.5rem",
  marginBottom: 0,
});

const StyledBox = styled(Box)({
  border: "1px solid #ccc",
  padding: "5px 20px",
  width: "60%",
  display: "inline-flex",
  borderRadius: "8px",
});

const StyledValueBox = styled(Box)({
  width: "70%",
});

const OwnInfoItem: React.FC<OwnInfoItemProps> = ({ label, value, icon: Icon }) => {
  return (
    <StyledListItem>
      <StyledTypography>{label}:</StyledTypography>
      <StyledBox>
        {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
        <StyledValueBox>{value}</StyledValueBox>
      </StyledBox>
    </StyledListItem>
  );
};

export default OwnInfoItem;
