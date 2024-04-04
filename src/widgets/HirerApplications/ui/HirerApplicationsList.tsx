import React from "react";
import HirerApplication from "@/src/widgets/HirerApplications";
import { Box } from "@mui/material";
import { HirerApplicationData } from "@/src/shared/MockData/hirerApplicationData";

interface HirerApplicationsProps {
  applications: HirerApplicationData[];
}

const HirerApplicationsList: React.FC<HirerApplicationsProps> = ({ applications }) => {
  return (
    <Box display="flex" flexDirection="column" gap={"10px"}>
      {applications.map((application, index) => (
        <HirerApplication key={index} application={application} />
      ))}
    </Box>
  );
};

export default HirerApplicationsList;
