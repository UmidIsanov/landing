"use client";

import React, { ChangeEvent, useState } from "react";
import { Box, styled } from "@mui/material";
import { hirerApplicationData } from "@/src/shared/MockData/hirerApplicationData";
import HirerApplication from "@/src/widgets/HirerApplications";
import ControlBlock from "@/src/widgets/ControlBlock";
import Pagination from "@/src/widgets/Pagination";

const StyledPaginationWrapper = styled(Box)({
  backgroundColor: "#fff",
  width: "1011px",
  height: "44px",
  margin: "0 auto",
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledHirerApplicationWrapper = styled(Box)({
  marginBottom: "10px",
});

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const controlBlockButtons: {
    variant: 1 | 3 | 2 | 4 | 5 | 6;
    className: string;
    label: string;
  }[] = [
    { variant: 1, className: "py-[10px] px-[96px] ", label: "Активные" },
    { variant: 2, className: "py-[10px] px-[96px]", label: "В архиве" },
    { variant: 2, className: "py-[10px] px-[96px]", label: "На модерации" },
  ];

  const slicedApplications = hirerApplicationData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <Box>
      <ControlBlock buttons={controlBlockButtons} placeholder="Поиск заявки" />

      {slicedApplications.map((application, index) => (
        <StyledHirerApplicationWrapper key={index}>
          <HirerApplication application={application} />
        </StyledHirerApplicationWrapper>
      ))}
      <StyledPaginationWrapper>
        <Pagination
          rowsPerPageOptions={[5, 10, 15]}
          count={hirerApplicationData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledPaginationWrapper>
    </Box>
  );
};

export default Page;
