import React, { FC } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Input } from "@mui/material";
import { styled } from "@mui/material";
interface IAgeSelectProps {
  value: number;
  onChange: (newValue: number) => void;
}

const StyledInputBox = styled(Box)({
  position: "relative",
  display: "flex",
});
const StyledInputElement = styled(Input)({
  borderBottom: "none",
  paddingTop: "0",
  margin: "0",
});

const AgeSelect: FC<IAgeSelectProps> = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
    <StyledInputBox>
      <Input type="number" value={value.toString()} onChange={e => onChange(parseInt(e.target.value))} />
      <Box>
        <IconButton onClick={handleIncrement}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={handleDecrement}>
          <RemoveIcon />
        </IconButton>
      </Box>
    </StyledInputBox>
  );
};
export default AgeSelect;
