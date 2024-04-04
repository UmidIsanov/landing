import React, { FC } from "react";
import Button from "@/src/shared/ui/Button";
import SearchInput from "@/src/widgets/SearchInput";
import SelectSmall from "@/src/widgets/Select";
import Dropdown from "../../Select/ui/Select";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SortIcon from "@/src/shared/assets/sortIcon.svg";
const ControlWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  marginBottom: "28px",
});

const ButtonsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginButtom: "40px",
});

const FlexContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "30px",
});
const StyledTitleText = styled(Typography)({
  fontSize: "30px",
});

export interface IControlBlockProps {
  title?: string;
  buttons: {
    variant: 1 | 2 | 3 | 4 | 5 | 6;
    className: string;
    label: string;
  }[];
  placeholder: string;
}

const ControlBlock: FC<IControlBlockProps> = ({ title, buttons, placeholder }) => {
  const menuItems = [
    { value: "Сначала новые", label: "Сначала новые" },
    { value: "Сначала старые", label: "Сначала старые" },
  ];
  return (
    <ControlWrapper>
      <Box sx={{ marginBottom: "40px" }}> {title && <StyledTitleText variant="h5">{title}</StyledTitleText>} </Box>
      <ButtonsContainer>
        {buttons.map((button, index) => (
          <Button key={index} variant={button.variant} className={button.className} type="button">
            {button.label}
          </Button>
        ))}
      </ButtonsContainer>
      <FlexContainer>
        <SearchInput placeholder={placeholder} />
        <Dropdown menuItems={menuItems} Icon={SortIcon} />
      </FlexContainer>
    </ControlWrapper>
  );
};

export default ControlBlock;
