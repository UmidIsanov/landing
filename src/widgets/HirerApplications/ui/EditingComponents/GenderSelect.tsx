import React from "react";
import { Box, FormControlLabel, Radio, styled } from "@mui/material";
import { StyledRadioGroup } from "../HirerModalPageStyles";

const StyledRadio = styled(Radio)({
  "& .MuiSvgIcon-root": {
    color: "#1BB234",
  },
});

interface GenderSelectProps {
  value: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: boolean) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange }) => {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "male");
  };

  return (
    <Box sx={StyledRadioGroup}>
      <FormControlLabel
        value="male"
        control={<StyledRadio checked={value === true} onChange={handleGenderChange} />}
        label="Мужской"
      />
      <FormControlLabel
        value="female"
        control={<StyledRadio checked={value === false} onChange={handleGenderChange} />}
        label="Женский"
      />
    </Box>
  );
};

export default GenderSelect;
