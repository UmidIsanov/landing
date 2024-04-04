import * as React from "react";
import dayjs, { Dayjs } from "dayjs"; // Исправлен импорт dayjs
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface BirthdaySelectProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

const BirthdaySelect: React.FC<BirthdaySelectProps> = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker label="Uncontrolled picker" defaultValue={dayjs("2022-04-17")} />
        {/* <DatePicker label="Controlled picker" value={value} onChange={newValue => onChange(newValue)} /> */}
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BirthdaySelect;
