"use client";
import { FC, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/system";
import CustomModalPage from "@/src/widgets/ModalPage/index";
import Pagination from "../../Pagination";

import { ITableData } from "../types/index";
import { Box } from "@mui/material";

type TTableProps = {
  data: ITableData;
};

const StyledPaginationBox = styled(Box)({
  backgroundColor: "#fff",
  width: "890px",
  height: "44px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledTableCell = styled(TableCell)({
  color: "#667085",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EEF4FF",
    color: "#1BB234",
  },
});

const TableCustom: FC<TTableProps> = ({ data }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [rowData, setRowData] = useState<any | null>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableContainerStyles = {
    maxWidth: 889,
    margin: "auto",
    backgroundColor: "#FFFFFF",
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRowClick = (rowIndex: number) => {
    setSelectedRow(rowIndex);
    setRowData(data.rows[rowIndex]);
    handleOpenModal();
  };

  return (
    <>
      <TableContainer sx={tableContainerStyles}>
        <Table>
          <TableHead>
            <TableRow>
              {data.header.data.map((header, index) => (
                <StyledTableCell key={index}>{header.value}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                hover={true}
                style={{ cursor: "pointer" }}
                onClick={() => handleRowClick(page * rowsPerPage + rowIndex)}
              >
                {row.data.map((cell, cellIndex) => {
                  if (cellIndex === 0 || cellIndex === 1 || cellIndex === 2 || cellIndex === 3) {
                    return <TableCell key={cellIndex}>{cell.render ? cell.render(cell.value) : cell.value}</TableCell>;
                  }
                  return null;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledPaginationBox>
        <Pagination
          rowsPerPageOptions={[5, 10, 25]}
          count={data.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledPaginationBox>
      <CustomModalPage open={openModal} handleClose={handleCloseModal} rowData={rowData} />
    </>
  );
};

export default TableCustom;
