"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { HirerApplicationData } from "@/src/shared/MockData/hirerApplicationData";
import { FormControlLabel, Radio, styled } from "@mui/material";
import Button from "@/src/shared/ui/Button";
import CreateIcon from "@mui/icons-material/Create";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchSvg from "@/src/shared/assets/search.svg";
import Select from "@/src/shared/ui/Select";

import EditLanguages from "./EditingComponents/EditLanguages";
import AgeSelect from "./EditingComponents/AgeSelect";
// import CitySelect from "./EditingComponents/CitySelect";
import GenderSelect from "./EditingComponents/GenderSelect";
import BirthdaySelect from "./EditingComponents/BirthdaySelect";
import EditExtraInfo from "./EditingComponents/EditExtraInfo";
import {
  StyledMopalPageWrapper,
  StyledLine,
  StyledHeadWrapper,
  StyledHeadTitle,
  StyledHeadButtons,
  StyledApplicationItemsBox,
  StyledFeatApplicationInfoBox,
  StyledGenderApplicationInfoBox,
  StyleApplicationData,
  StyledCityApplicationData,
  StyledLanguagesApplicationData,
  StyledExtraInfoApplicationData,
  StyledRadioGroup,
  StyledSpan,
  StyledFeatures,
  StyledMopalPageWrapper2,
} from "./HirerModalPageStyles";
import { BoxWithGap, StackLabel } from "@/src/features/CreateApplication/styles";

const StyledButton = styled(Button)({
  paddingLeft: "23px",
  paddingRight: "23px",
  paddingTop: "8px",
  paddingBottom: "8px",
});

const StyledApplicationInfoBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
const StyledAgeApplicationInfoBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledRadio = styled(Radio)({
  "& .MuiSvgIcon-root": {
    color: "#1BB234",
  },
});

interface HirerModalPageProps {
  application: HirerApplicationData;
  onClose: () => void;
  newAge: number;
  newCity: string;
  newGender: boolean;
}

const HirerModalPage: React.FC<HirerModalPageProps> = ({ application, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [age, setAge] = useState(application.age);
  const [gender, setGender] = useState(application.gender);
  const [selectedLanguages, setSelectedLanguages] = useState<Record<number, string>>({});

  const [selectedCity, setSelectedCity] = useState<Record<number, string>>({});
  const selectLanguage = (key: number, val: string) => {
    setSelectedLanguages(prev => ({ ...prev, [key]: val }));
  };

  const deleteLanguage = (key: number) => {
    setSelectedLanguages(prev => {
      const cities = Object.assign({}, prev);
      delete cities[key];
      return cities;
    });
  };
  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
  };

  const handleGenderChange = (newGender: boolean) => {
    setGender(newGender);
  };

  const handleEditAge = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsSaving(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    setIsSaving(false);
  };
  const selectCity = (key: number, val: string) => {
    setSelectedCity({ [key]: val });
  };
  const deleteCity = (key: number) => {
    setSelectedCity({});
  };
  return (
    <Modal open={true} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={isEditing ? StyledMopalPageWrapper2 : StyledMopalPageWrapper}>
        <Box sx={StyledHeadWrapper}>
          <Typography sx={StyledHeadTitle}>{application.title}</Typography>
          <Box sx={StyledHeadButtons}>
            {isEditing ? (
              <>
                <Button variant={1} className="py-3 px-6" type="button" onClick={handleSave} disabled={isSaving}>
                  Сохранить
                </Button>
                <Button variant={2} className="py-3 px-6" type="button" onClick={handleCancel}>
                  Отмена
                </Button>
              </>
            ) : (
              <>
                <StyledButton variant={1} onClick={handleEditAge}>
                  <CreateIcon />
                </StyledButton>
                <StyledButton variant={4}>
                  <Inventory2Icon />
                </StyledButton>
                <StyledButton variant={3}>
                  <DeleteIcon />
                </StyledButton>
              </>
            )}
          </Box>
        </Box>
        <Box sx={StyledLine} />
        <Box sx={StyledApplicationItemsBox}>
          {isEditing ? (
            <StyledAgeApplicationInfoBox>
              <Typography> Возраст</Typography>
              <Box sx={{ width: "58%" }}>
                <Box sx={{ ...StyleApplicationData, width: "22%" }}>
                  <AgeSelect value={age} onChange={handleAgeChange} />
                </Box>
              </Box>
            </StyledAgeApplicationInfoBox>
          ) : (
            <StyledAgeApplicationInfoBox>
              <Typography> Возраст</Typography>
              <Box sx={{ width: "60%" }}>
                <Box sx={{ ...StyleApplicationData, width: "fit-content" }}>{application.age}</Box>
              </Box>
            </StyledAgeApplicationInfoBox>
          )}
          {isEditing ? (
            <Box sx={StyledGenderApplicationInfoBox}>
              <Typography>Пол</Typography>
              <Box sx={{ width: "38%" }}>
                <GenderSelect value={gender} onChange={handleGenderChange} />
              </Box>
            </Box>
          ) : (
            <Box sx={StyledGenderApplicationInfoBox}>
              <Typography>Пол</Typography>

              <Box sx={StyledRadioGroup}>
                <Box sx={{ width: "60%" }}>
                  <FormControlLabel
                    value="male"
                    control={<StyledRadio checked={application.gender === true} />}
                    label="Мужской"
                  />
                </Box>
                <FormControlLabel
                  value="female"
                  control={<StyledRadio checked={application.gender === false} />}
                  label="Женский"
                />
              </Box>
            </Box>
          )}
          {isEditing ? (
            <BoxWithGap paddingY={"44px"}>
              <StackLabel>Город</StackLabel>
              <Select
                id="city"
                width={300}
                addItem={selectCity}
                removeItem={deleteCity}
                selected={selectedCity}
                title="Поиск города"
                Icon={SearchSvg}
                data={[
                  { id: 1, name: "Алматы" },
                  { id: 2, name: "Астана" },
                  { id: 3, name: "Караганда" },
                  { id: 4, name: "Талдыкорган" },
                  { id: 5, name: "Ааааа" },
                  { id: 6, name: "ФЫВЫВОВЛВЫ" },
                ]}
              />
            </BoxWithGap>
          ) : (
            <StyledApplicationInfoBox>
              <Typography> Город</Typography>{" "}
              <Box sx={{ width: "60%" }}>
                <Box sx={StyledCityApplicationData}>{application.city}</Box>
              </Box>
            </StyledApplicationInfoBox>
          )}
          {isEditing ? (
            <StyledApplicationInfoBox>
              <Typography> Дата рождения</Typography>
              <Box sx={{ width: "58%" }}>
                <BirthdaySelect value={application.birthday} onChange={handleSave} />
              </Box>
            </StyledApplicationInfoBox>
          ) : (
            <StyledApplicationInfoBox>
              <Typography> Дата рождения</Typography>
              <Box sx={{ width: "60%" }}>
                <Box sx={StyledCityApplicationData}>{application.db}</Box>
              </Box>
            </StyledApplicationInfoBox>
          )}

          {isEditing ? (
            <Box sx={StyledFeatApplicationInfoBox}>
              <Typography> Особенности</Typography>
              <Box sx={{ ...StyledFeatures, width: "34%" }}>
                <Button variant={1} className="py-[10px] px-[16px]" type="button">
                  Особенности
                </Button>
              </Box>
            </Box>
          ) : (
            <Box sx={StyledFeatApplicationInfoBox}>
              <Typography> Особенности</Typography>
              <Box sx={StyledFeatures}>
                {application.features.map((feature, index) => (
                  <Box sx={StyledSpan} key={index}>
                    #{String(feature)}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          {isEditing ? (
            <BoxWithGap paddingY={"24px"}>
              <StackLabel>Языки</StackLabel>
              <Select
                id="lang"
                width={440}
                addItem={selectLanguage}
                removeItem={deleteLanguage}
                selected={selectedLanguages}
                title="Поиск языков"
                Icon={SearchSvg}
                isMultiple
                data={[
                  { id: 1, name: "Английский" },
                  { id: 2, name: "Русский" },
                  { id: 3, name: "Казахский" },
                ]}
              />
            </BoxWithGap>
          ) : (
            <StyledApplicationInfoBox>
              <Typography> Языки</Typography>
              <Box sx={{ width: "60%" }}>
                <Box sx={{ width: "60%" }}>
                  <Box sx={StyledLanguagesApplicationData}>{application.languages.join(", ")}</Box>
                </Box>
              </Box>
            </StyledApplicationInfoBox>
          )}
          {isEditing ? (
            <StyledApplicationInfoBox>
              <Typography> Другое </Typography>
              <Box sx={{ width: "58%" }}>
                <EditExtraInfo
                  value={application.extraInfo}
                  label={""}
                  onChange={function (newValue: string): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </Box>
            </StyledApplicationInfoBox>
          ) : (
            <StyledApplicationInfoBox>
              <Typography> Другое </Typography>
              <Box sx={{ width: "60%" }}>
                <Box sx={StyledExtraInfoApplicationData}>
                  <Typography sx={{ textWrap: "wrap", overflow: "hidden" }}>{application.extraInfo}</Typography>
                </Box>
              </Box>
            </StyledApplicationInfoBox>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default HirerModalPage;
