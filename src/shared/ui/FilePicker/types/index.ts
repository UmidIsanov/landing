import { IInput } from "../../Input/types";
import pdf from "@/src/shared/assets/fileExt/pdf.svg";

export interface FilePickerIProps extends IInput {
  addFile: (files: FileList) => void;
  files: File[];
  isMultiple?: boolean;
  limit: number;
}

export interface FileListIProps {
  files: File[];
  removeFile: (file: File) => void;
}

export const FileExtIcons = {
  pdf,
};
