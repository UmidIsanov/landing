"use client";
import React from "react";
import TextField from "@mui/material/TextField";
// import { Input } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
// import Box from "@mui/material/Box";
// import { styled } from "@mui/material";

interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

// const CustomTextField = styled(Input)({
//   "& .MuiOutlinedInput-root": {
//     border: "none",
//     padding: "13px 20px 20px 15px",
//     borderRadius: "8px",
//     boxSizing: "border-box",
//     whiteSpace: "nowrap",
//     textWrap: "wrap",
//     overflow: "hidden",
//   },
// });

const EditableField: React.FC<EditableFieldProps> = ({ label, value, onChange }) => {
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <TextField label={label} value={value} onChange={handleFieldChange} fullWidth />;
};

export default EditableField;
