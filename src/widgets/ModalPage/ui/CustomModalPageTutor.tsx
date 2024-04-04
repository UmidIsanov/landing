import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@/src/shared/ui/Button";
import { styled } from "@mui/system";
import Image from "next/image";
import { FC, FormEvent, useState } from "react";
import { ModalPageStyles } from "./CustomModalPageStyles";

import ApplicationInputModal from "@/src/shared/ui/ApplicationInput/ui/ApplicationInputModal";

import { Checkbox } from "@/src/shared/ui/CheckBox";
import { ValueKeys } from "@/src/shared/ui/ApplicationInput/types";
import Input from "@/src/shared/ui/Input";
import { StyledSpan } from "../../HirerApplications/ui/HirerModalPageStyles";

const StyledImg = styled(Image)({
  borderRadius: "50%",
});

interface RowDataItem {
  value: string;
}

interface CustomModalPageProps {
  open: boolean;
  handleClose: () => void;
  rowData: {
    data: RowDataItem[];
  } | null;
}
const tutorData = "https://www.youtube.com/embed/sgdLKmprAzo?si=f2sX3g5bsKg1jlNF";

const CustomModalPageTutor: FC<CustomModalPageProps> = ({ open, handleClose, rowData }) => {
  const [initialValue, setInitialValue] = useState({
    city: "Алматы",
    education: "Среднее",
    dopEducation: "SparkLab",
    languages: "Русский",
    features: "Глухота",
    interests: "Люблю кушать",
    hobby: "Чтенеие",
    extraInfo: "Прошу не звонить ночью",
    otherInfo: "Доп информация юзера",
  });
  const [value, setValue] = useState(initialValue);

  const listOfFieldsFirst: Array<{ id: ValueKeys; label: string; type: string }> = [
    {
      id: "city",
      label: "Город",
      type: "text",
    },
    {
      id: "languages",
      label: "Язык",
      type: "text",
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const { value } = e.target;
    setValue(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  if (!open || !rowData || !rowData.data || rowData.data.length === 0) {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalPageStyles}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Нет данных для отображения
          </Typography>
          <Button variant={1} className="py-3 px-6" type="button" onClick={handleClose}>
            Закрыть
          </Button>
        </Box>
      </Modal>
    );
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="  fixed inset-0 flex items-center justify-center "
    >
      <form onSubmit={handleSubmit}>
        <section className=" bg-main rounded-[8px] shadow-xl mb-14">
          <article className="p-6">
            <h1>Заголовок</h1>
          </article>
          <hr />
          <article className="flex w-[810px] flex-col justify-start gap-3 pl-12 p-6">
            <ApplicationInputModal
              key={"age"}
              label={"Возраст"}
              type="text"
              className={"w-14"}
              id={"age"}
              value={"9"}
              onChange={() => {}}
              disabled={true}
            />

            <div className="flex justify-start gap-10 text-xs  items-center">
              <h1 className="w-[280px] ">Пол</h1>
              <div className="w-[440px] flex  justify-start gap-10">
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"men"} disabled={true} /> Мужской
                </label>
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"woomen"} disabled={true} /> Женский
                </label>
              </div>
            </div>

            {listOfFieldsFirst.map((item, index) => (
              <ApplicationInputModal
                key={index}
                label={item.label}
                className={"w-full"}
                type={item.type}
                id={item.id}
                value={value[item.id]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, item.id)}
                disabled={true}
              />
            ))}

            <div className="flex justify-start gap-10 text-xs items-center">
              <label htmlFor="" className="w-[280px]">
                Особенности
              </label>
              <div className="w-[440px] flex justify-start gap-6">
                <span className="bg-featurescolor rounded-[8px] px-3 py-[2px]">#аутизм</span>
                <span className="bg-featurescolor rounded-[8px] px-3 py-[2px]">#диагноз</span>
              </div>
            </div>

            <div className="flex justify-start gap-10 text-xs items-center">
              <label htmlFor="" className="w-[280px]">
                Другое
              </label>
              <div className="w-[440px] flex justify-start gap-10">
                <textarea
                  id=""
                  className="w-full outline-none  py-3 px-3 text-black border border-grayModal  rounded-md"
                  value="Доп информация от юзера"
                  disabled={true}
                />
              </div>
            </div>
          </article>
          <div className="flex justify-end gap-5 text-xs px-6 pb-20 ">
            <Button className="px-6 py-2 rounded-lg font-extralight " variant={1} type="submit" onClick={handleSubmit}>
              Принять
            </Button>
            <Button className="px-6 py-2 rounded-lg font-extralight" variant={3} type="button" onClick={handleClose}>
              Отклонить
            </Button>
          </div>
        </section>
      </form>
    </Modal>
  );
};

export default CustomModalPageTutor;
