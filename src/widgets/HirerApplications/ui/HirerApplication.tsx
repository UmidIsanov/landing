import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@/src/shared/ui/Button";
import { styled } from "@mui/material";
import {
  StyledContainer,
  StyledHeadText,
  StyledHeadBox,
  StyledListInfo,
  StyledInfoListIext,
  StyledInfoIext,
} from "./HirerApplicationStyles";
import { FC } from "react";
import HirerModalPage from "./HirerModalPage";
import { HirerApplicationData } from "@/src/shared/MockData/hirerApplicationData";

interface HirerApplicationProps {
  application: HirerApplicationData;
}

const StyledButton = styled(Button)({
  paddingLeft: "23px",
  paddingRight: "23px",
  paddingTop: "8px",
  paddingBottom: "8px",
});
const StyledSpan = styled("span")({
  backgroundColor: "#D9D9D9",
  padding: "2px 14px",
  borderRadius: "8px",
  marginLeft: "10px",
  marginRight: "7px",
  paddingTop: "3px",
});

const HirerApplication: FC<HirerApplicationProps> = ({ application }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container sx={StyledContainer}>
      <Box sx={StyledHeadBox}>
        <Typography sx={StyledHeadText}>{application.title}</Typography>
        <Box>
          <StyledButton variant={1} onClick={handleOpenModal}>
            Открыть
          </StyledButton>
        </Box>
      </Box>
      <Box sx={StyledListInfo}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Возраст: </Typography>
          <Box sx={{ width: "80%" }}>
            <Typography sx={StyledInfoListIext}>{application.age}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography> Особенности:</Typography>
          <Box sx={{ width: "81%" }}>
            <Typography sx={StyledInfoListIext}>
              {application.features.map((feature, index) => (
                <StyledSpan key={index}>#{String(feature)}</StyledSpan>
              ))}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Город: </Typography>
          <Box sx={{ width: "80%" }}>
            <Typography sx={StyledInfoListIext}> {application.city}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Дата рождения: </Typography>
          <Box sx={{ width: "80%" }}>
            <Typography sx={StyledInfoListIext}> {application.db}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Пол: </Typography>
          <Box sx={{ width: "80%" }}>
            <Typography sx={StyledInfoListIext}> {application.gender ? "Муж." : "Жен."}</Typography>
          </Box>
        </Box>

        <Box sx={{ width: "90%" }}>
          <Typography
            sx={{
              ...StyledInfoIext,
              width: "80%",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {application.extraInfo}
          </Typography>
        </Box>
      </Box>

      {openModal && (
        <HirerModalPage
          application={application}
          onClose={handleCloseModal}
          newAge={0}
          newCity={""}
          newGender={false}
        />
      )}
    </Container>
  );
};

export default HirerApplication;
