import React, { ChangeEvent, DragEvent, FC, useRef } from "react";
import { FilePickerIProps } from "../types";
import CloudUploadSVG from "../../../assets/cloud_upload.svg";
import { FileBox } from "../styles";
import styles from "../styles/filePicker.module.scss";
import { Box, Typography } from "@mui/material";
import { fileGenerator } from "../lib/fileGenerator";

const FilePicker: FC<FilePickerIProps> = ({ limit, files, addFile, isMultiple }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const transferFiles = e.target.files;
    if (transferFiles && files.length + transferFiles.length <= limit) {
      addFile(transferFiles);
    }
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const transferFiles = e.dataTransfer.files;
    if (transferFiles && files.length + transferFiles.length <= limit) {
      addFile(transferFiles);
    }
    if (containerRef.current) {
      containerRef.current.style.opacity = "1";
      containerRef.current.style.backgroundColor = "var(--color-white)";
    }
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (containerRef.current) {
      containerRef.current.style.backgroundColor = "lightgray";
      containerRef.current.style.opacity = "0.4";
    }
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.style.opacity = "1";
      containerRef.current.style.backgroundColor = "var(--color-white)";
    }
  };

  return (
    <Box>
      {files.length > 0 && files.length !== limit && (
        <Typography sx={{ fontSize: 14, fontWeight: 400, color: "var(--color-200)" }}>Прикрепить еще</Typography>
      )}
      {files.length !== limit && (
        <FileBox ref={containerRef} onDragLeave={onDragLeave} onDrop={onDrop} onDragOver={onDragOver}>
          <CloudUploadSVG />
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box>
              <Typography
                sx={{ cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--green-color)" }}
                component={"label"}
                htmlFor="file_upload"
              >
                Выберите файл
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 500, color: "var(--color-200)" }} component="span">
                {" "}
                или перетащите их сюда
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: "var(--color-200)" }} component={"p"}>
              Файлов может быть несколько
            </Typography>
          </Box>
          <input
            multiple={isMultiple}
            onChange={onChange}
            id="file_upload"
            className={styles.input}
            type="file"
            accept=".docx, image/*, .pdf, .xls"
          />
        </FileBox>
      )}
    </Box>
  );
};

export default FilePicker;
