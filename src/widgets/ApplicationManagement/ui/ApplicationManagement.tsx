"use client";
import ControlBlock from "../../ControlBlock";
import { applicationData } from "@/src/shared/MockData/applicationTableData";
import TableCustom from "../../Table/ui/CustomTable";
import { Box, styled } from "@mui/material";
import { useGetHirerApplicationsQuery, useGetTutorApplicationsQuery } from "@/src/entities/Moderator/api";

const ApplicationManagement = () => {
  const StyledTable = styled(Box)({
    marginTop: "112px",
  });

  const { data } = useGetHirerApplicationsQuery({ limit: 10, search: "", order: "desc", page: 1 });

  console.log(data);

  const controlBlockTitle = "Управление заявками";
  const controlBlockButtons: {
    variant: 1 | 2 | 3 | 6 | 4 | 5;
    className: string;
    label: string;
  }[] = [
    { variant: 6, className: "py-[10px] px-[85px]", label: "Наниматель" },
    { variant: 1, className: "py-[10px] px-[95px]", label: "Тьютор" },
  ];
  return (
    <>
      <ControlBlock title={controlBlockTitle} buttons={controlBlockButtons} placeholder="Поиск нанимателя" />
      <StyledTable>
        <TableCustom data={applicationData} />
      </StyledTable>
    </>
  );
};

export default ApplicationManagement;
