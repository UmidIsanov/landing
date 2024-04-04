"use client";
import ControlBlock from "../../ControlBlock";
import TableCustom from "../../Table/ui/CustomTable";
import { FC } from "react";
import { applicationTutorData } from "@/src/shared/MockData/applicationTableTutorData";
import CustomTableTutor from "../../Table/ui/CustomTableTutor";
import { IControlBlockProps } from "../../ControlBlock/ui/ControlBlock";

interface IApplicationManageTutor {
  btn1: string;
  btn2: string;
}

const ApplicationManageTutor: FC<IApplicationManageTutor> = ({ btn1, btn2 }) => {
  const controlBlockTitle = "Управление заявками";
  const controlBlockButtons: IControlBlockProps["buttons"] = [
    { variant: 6, className: "py-[10px] px-[85px]", label: `${btn1}` },
    { variant: 1, className: "py-[10px] px-[95px]", label: `${btn2}` },
  ];

  return (
    <>
      <ControlBlock title={controlBlockTitle} buttons={controlBlockButtons} placeholder="Поиск нанимателя" />

      <CustomTableTutor data={applicationTutorData} />
    </>
  );
};

export default ApplicationManageTutor;
