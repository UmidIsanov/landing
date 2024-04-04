"use client";
import React from "react";
import { TablePagination } from "@mui/material";

interface PaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  rowsPerPageOptions,
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={[3, 5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      labelRowsPerPage="Страницы:"
      labelDisplayedRows={({ from, to, count }) => `${from}-${to} из ${count}`}
    />
  );
};

export default Pagination;
