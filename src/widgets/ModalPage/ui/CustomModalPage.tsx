import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@/src/shared/ui/Button";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@/src/shared/assets/female.svg";
import SomeImage from "@/src/shared/assets/avatar2.svg";
import RoomOutlinedIcon from "@/src/shared/assets/distance.svg";

import { FC } from "react";
import {
  innerModalInfp,
  ModalPageStyles,
  TitleModalTextStyles,
  headInfoBox,
  headInfoTextBox,
  headInfoBoxRow,
  youTubeFrameStyles,
  InnerStyledBox,
  sollutionButtonsStyles,
} from "./CustomModalPageStyles";

import { RadioChoose } from "@/src/features/CreateApplication/ui/CreateHirerApplication";
import { SingleFile } from "@/src/shared/ui/FilePicker";
import Input from "@/src/shared/ui/Input";

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

const CustomModalPage: FC<CustomModalPageProps> = ({ open, handleClose, rowData }) => {
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
    >
      <Box sx={ModalPageStyles} className="scrollbar">
        <Typography sx={TitleModalTextStyles} id="modal-modal-title">
          {rowData?.data[1].value}
        </Typography>

        <Box sx={headInfoBox}>
          <SomeImage style={{ width: "157px", height: "150px" }} />

          <Box sx={headInfoTextBox}>
            <Box sx={headInfoBoxRow}>
              <Box sx={{ fontWeight: "bold", display: "flex", gap: "10px", alignItems: "center" }}>
                <FemaleIcon /> Женский
              </Box>
              <Box sx={{ fontWeight: "bold" }}> Образование: Среднее</Box>
            </Box>
            <Box sx={headInfoBoxRow}>
              <Box sx={{ fontWeight: "bold", display: "flex", gap: "10px", alignItems: "center" }}>
                <RoomOutlinedIcon /> Алматы
              </Box>
              <Box sx={{ fontWeight: "bold" }}> Возраст: 22</Box>
            </Box>
          </Box>
        </Box>
        <Box sx={innerModalInfp}>
          <Box sx={InnerStyledBox}>
            <Box sx={youTubeFrameStyles}>
              <iframe
                width="398"
                height="240"
                src={tutorData}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography width="144px">Дополнительное оброзование</Typography>
              <Box sx={{ width: "68%" }}>
                <Input className="py-[10px] px-[14px] w-full" disabled variant="application" value={"SparkLab"} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", width: "80%" }}>
              <RadioChoose
                setValue={() => {}}
                mb={10}
                value={"Нет опыта"}
                gap={32}
                wrapEveryTwo={true}
                variations={[
                  { val: "Нет опыта", title: "Нет опыта" },
                  { val: "Менее 1 года", title: "Менее 1 года" },
                  { val: "1-3 года", title: "1-3 года" },
                  { val: "Более 3 лет", title: "Более 3 лет" },
                ]}
                title="Опыт работы"
                name="exp"
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Языки</Typography>
              <Box sx={{ width: "68%" }}>
                <Input
                  className="py-[10px] px-[14px] w-full"
                  disabled
                  variant="application"
                  value={"Русский, Английский, Казахский"}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography width="144px">Особенности с которыми работает тьютор</Typography>
              <Box sx={{ width: "68%" }}>
                <Input
                  className="py-[10px] px-[14px] w-full"
                  disabled
                  variant="application"
                  value={"Глухота, нетома"}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Хоби</Typography>
              <Box sx={{ width: "68%" }}>
                <Input className="py-[10px] px-[14px] w-full" disabled variant="application" value={"Чтение"} />
              </Box>
            </Box>
            <Box sx={{ width: "55%" }}>
              <Box>
                <Box>
                  <RadioChoose
                    setValue={() => {}}
                    value={null}
                    mb={10}
                    gap={32}
                    variations={[
                      { title: "Да", val: "true" },
                      { title: "Нет", val: "false" },
                    ]}
                    title={"Возможность командировки"}
                    name="travel"
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "55%" }}>
              <Box>
                <RadioChoose
                  setValue={() => {}}
                  value={null}
                  mb={10}
                  gap={32}
                  variations={[
                    { title: "Да", val: "true" },
                    { title: "Нет", val: "false" },
                  ]}
                  title={"Возможность работать по не нормированному графику"}
                  name="workType"
                />
              </Box>
            </Box>
            <Box sx={{ width: "57%" }}>
              <Box>
                <Box>
                  <RadioChoose
                    value={null}
                    setValue={() => {}}
                    mb={10}
                    gap={32}
                    variations={[
                      { title: "Да", val: "true" },
                      { title: "Нет", val: "false" },
                    ]}
                    title={"Готовность повышать квалификацию"}
                    name="upgra"
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Дополнительная информация</Typography>
              <Box sx={{ width: "85%" }}>
                <Input
                  className="py-[10px] pb-[128px] px-[14px] w-full "
                  disabled
                  variant="application"
                  value={"Прошу не звонить ночью"}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Дополнительная информация</Typography>
              <Box sx={{ width: "85%" }}>
                <SingleFile file={{ name: "img_509302.pdf" } as File} removeFile={() => {}} isEditable={false} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={sollutionButtonsStyles}>
          <Button variant={1} className="py-2 px-6" type="button">
            Принять
          </Button>
          <Button variant={3} className="py-2 px-6" type="button">
            Отклонить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModalPage;
