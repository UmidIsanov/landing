"use client";
import { FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import IUserData from "@/src/shared/MockData/types/index";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import { styled } from "@mui/material";
import PhoneIcon from "@/src/shared/assets/phoneIcon.svg";
import EmailIcon from "@/src/shared/assets/emailIcon.svg";
import Input from "@/src/shared/ui/Input";

interface InfoContainerProps {
  data: IUserData;
}

const StyledListInfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  fontSize: "16px",
});

const StyledContainer = styled(Box)({
  width: "978px",
  padding: "24px",
  backgroundColor: "white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
});

const StyledInfoHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const StyledHr = styled("hr")({
  color: "#ccc",
  margin: "28px 0",
  marginLeft: "-24px",
  width: "calc(100% + 50px)",
});

const InfoContainer: FC<InfoContainerProps> = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handeEditChange = () => {
    setIsEditing(!isEditing);
  };

  return (
    <StyledContainer>
      <StyledInfoHeader>
        <Typography variant="h6">
          {data.name} {data.lastName}
        </Typography>

        {isEditing ? (
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button variant={1} className="py-[7px] px-[22px] rounded-[8px]" type="button">
              Сохранить и отправить на модерацию
            </Button>
            <Button variant={7} className="py-[7px] px-[22px] rounded-[8px]" type="button" onClick={handeEditChange}>
              Отмена
            </Button>
          </Box>
        ) : (
          <Button variant={1} className="py-[7px] px-[22px] rounded-[8px]" type="button" onClick={handeEditChange}>
            <CreateIcon />
          </Button>
        )}
      </StyledInfoHeader>
      <StyledHr />
      <Box sx={{ width: "700px" }}>
        <StyledListInfoContainer>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Фамилия</Typography>
            <Box sx={{ width: "65%" }}>
              <Input
                className="py-[10px] px-[14px] w-full"
                disabled={!isEditing}
                variant="application"
                value={data.lastName}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Имя</Typography>
            <Box sx={{ width: "65%" }}>
              <Input
                className="py-[10px] px-[14px] w-full"
                disabled={!isEditing}
                variant="application"
                value={data.name}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Отчество</Typography>
            <Box sx={{ width: "65%" }}>
              <Input
                className="py-[10px] px-[14px] w-full"
                disabled={!isEditing}
                variant="application"
                value={data.middleName}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Телефон </Typography>
            <Box sx={{ width: "65%" }}>
              <Input
                className="py-[10px] px-[14px] width-[250px]"
                variant="application"
                value={data.phoneNumber}
                Icon={PhoneIcon}
                type="tel"
                disabled={!isEditing}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Email</Typography>
            <Box sx={{ width: "65%" }}>
              <Input
                className="py-[10px] px-[14px] w-[450px]"
                disabled={!isEditing}
                variant="application"
                value={data.email}
                type="email"
                Icon={EmailIcon}
              />
            </Box>
          </Box>
        </StyledListInfoContainer>
      </Box>
    </StyledContainer>
  );
};

export default InfoContainer;
