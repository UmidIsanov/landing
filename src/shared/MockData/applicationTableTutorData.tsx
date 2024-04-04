import * as React from "react";
import Button from "../ui/Button";
import ITutorApplications from "./types/tutorData";
import { ITableData, ITableRow } from "@/src/widgets/Table/types";
import { Typography } from "@mui/material";

const convertToApplicationData = (jsonData: ITutorApplications[]): ITableData => {
  const header: ITableRow = {
    data: [{ value: "Номер контента" }, { value: "Имя" }, { value: "Город" }, { value: "Детали" }],
  };

  const rows: ITableRow[] = jsonData.map(item => ({
    data: [
      {
        value: "render",
        render: () => (
          <Typography
            sx={{ width: "80%", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", fontSize: "14px" }}
          >
            {item.extraInfo}
          </Typography>
        ),
      },
      { value: item.fullName || "" },
      { value: item.city },
      { value: "render", render: item.render },
    ],
  }));

  return { header, rows };
};

const tutorsData: ITutorApplications[] = [
  {
    id: 1,
    fullName: "Айдос",
    sex: true,
    city: "Алматы",
    age: 28,
    education: "Высшее",
    additionalEducation: "Курсы по маркетингу",
    languages: "Русский, Английский",
    features: "Коммуникабельность, Организованность",
    interest: "Литература, Путешествия",
    hobbies: "Фотография, Горные лыжи",
    businessTrip: true,
    informalHoursWork: false,
    willingnesImproveSkills: true,
    extraInfo: "Опыт работы в международной компании.",
    additionalDocuments: "Резюме, Рекомендации",
    render: () => (
      <Button variant={1} className="py-3 px-6">
        Заявка
      </Button>
    ),
  },
  {
    id: 2,
    fullName: "Екатерина Иванова",
    sex: true,
    city: "Москва",
    age: 28,
    education: "Высшее",
    additionalEducation: "Курсы по маркетингу",
    languages: "Русский, Английский",
    features: "Коммуникабельность, Организованность",
    interest: "Литература, Путешествия",
    hobbies: "Фотография, Горные лыжи",
    businessTrip: true,
    informalHoursWork: false,
    willingnesImproveSkills: true,
    extraInfo: "Опыт работы в международной компании.",
    additionalDocuments: "Резюме, Рекомендации",
    render: () => (
      <Button variant={1} className="py-3 px-6">
        Заявка
      </Button>
    ),
  },
];

export const applicationTutorData: ITableData = convertToApplicationData(tutorsData);
