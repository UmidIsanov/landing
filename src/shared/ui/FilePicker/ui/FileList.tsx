import React, { FC } from "react";
import { FileExtIcons, FileListIProps } from "../types";
import { Box, Stack, Typography } from "@mui/material";
import DeleteIcon from "@/src/shared/assets/delete.svg";
import { FileLink } from "../styles";

interface ISingleFile {
  isEditable?: boolean;
}

export const SingleFile: FC<{ file: File; isEditable?: boolean } & Pick<FileListIProps, "removeFile">> = ({
  file,
  isEditable,
  removeFile,
}) => {
  const Icon = FileExtIcons["pdf"];

  const handleDelete = () => {
    if (isEditable || isEditable === undefined) {
      removeFile(file);
    }
  };

  return (
    <Box component={"li"} sx={{ display: "flex" }}>
      <Icon />
      <FileLink>{file.name}</FileLink>
      {(isEditable || isEditable === undefined) && <DeleteIcon style={{ cursor: "pointer" }} onClick={handleDelete} />}
    </Box>
  );
};

const FileList: FC<FileListIProps> = ({ files, removeFile }) => {
  return (
    <Stack component={"ul"} gap={"20px"}>
      {files.map(file => {
        return <SingleFile key={file.name} removeFile={removeFile} file={file} />;
      })}
    </Stack>
  );
};

export default FileList;
