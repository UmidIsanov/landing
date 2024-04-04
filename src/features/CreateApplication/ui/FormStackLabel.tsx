import React, { FC, PropsWithChildren } from "react";
import { StackLabel } from "../styles";
import { Typography } from "@mui/material";

interface FormStackLabelIProps {
  required?: boolean;
}

const FormStackLabel: FC<PropsWithChildren<FormStackLabelIProps>> = ({ children, required }) => {
  return (
    <StackLabel>
      {children}{" "}
      {required && (
        <Typography className="text-red" component={"span"}>
          *
        </Typography>
      )}
    </StackLabel>
  );
};

export default FormStackLabel;
