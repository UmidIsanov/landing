import { SelectWithIcon } from "@/src/shared/ui/Select/ui/SelectWithIcon";
import { FC, MouseEvent, memo, useEffect, useMemo, useState } from "react";
import CalendarClock from "@/src/shared/assets/calendar_clock.svg";
import { DatePickerIProps } from "../types";
import useClickOutsideListener from "@/src/shared/lib/useClickOutsideListener";
import { ButtonContainer, DateCalendarContainer, DatePickerBox } from "../styles";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@/src/shared/ui/Button";
import dayjs from "dayjs";
import { getOwnDateTime } from "../lib/convertDate";
import { useDropdownContext } from "@/src/shared/ui/Select/providers/DropdownContext";

const DatePicker: FC<DatePickerIProps> = ({ width, id, currDate: genDate, setCurrDate: setGenDate, title }) => {
  const val = useDropdownContext();
  const isOpen = val?.currDropdownId === id;
  const [currDate, setCurrDate] = useState<string | null>(genDate);

  useEffect(() => {
    setCurrDate(genDate);
  }, [isOpen]);

  const onClose = () => {
    val?.closeAllDropdowns();
  };

  const date = useMemo(() => {
    let dateString: string | undefined = undefined;
    if (genDate) {
      dateString = getOwnDateTime(genDate);
    }
    return dateString ? { 1: dateString } : undefined;
  }, [genDate]);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const setIsOpenHandler = () => {
    if (!isOpen) {
      val?.setCurrDropdownId(id);
    } else {
      val?.closeAllDropdowns();
    }
  };

  const containerHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const setToGenDate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGenDate(currDate);
    onClose();
  };

  useClickOutsideListener({ handler: onClose, isOpen, id });

  return (
    <DatePickerBox onClick={containerHandler}>
      <SelectWithIcon
        width={width}
        isOpen={isOpen}
        isSingle
        selected={date}
        setIsOpenHandler={setIsOpenHandler}
        Icon={CalendarClock}
        title={title}
      />
      <DateCalendarContainer
        sx={{ userSelect: isOpen ? "auto" : "none", pointerEvents: isOpen ? "auto" : "none", opacity: isOpen ? 1 : 0 }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DateCalendar
              sx={{
                ".Mui-selected": {
                  backgroundColor: "var(--green-color) !important",
                },
              }}
              value={currDate ? dayjs(currDate) : null}
              onChange={val => setCurrDate(val["$d"].toISOString())}
            />
          </DemoContainer>
        </LocalizationProvider>
        <ButtonContainer>
          <Button
            onClick={e => {
              e.preventDefault();
              onClose();
            }}
            className="text-[14px] flex-[1] py-[10px]"
            variant={7}
          >
            Отменить
          </Button>
          <Button
            onClick={setToGenDate}
            disabled={!Boolean(currDate)}
            className="text-[14px] flex-[1] py-[10px]"
            variant={1}
          >
            Применить
          </Button>
        </ButtonContainer>
      </DateCalendarContainer>
    </DatePickerBox>
  );
};

export default memo(DatePicker);
