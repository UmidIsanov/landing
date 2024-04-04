import { ModalStack } from "@/src/features/CreateApplication/styles";
import { CreateHirer } from "@/src/features/CreateApplication";
import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заполнение заявки нанимателя",
  description: "Заявка нанимателя",
};

export default function CreateHirerApplication() {
  return (
    <>
      <Typography component={"h1"} sx={{ textAlign: "center", fontSize: "30px", fontWeight: "400" }}>
        Заполнение заявки нанимателя
      </Typography>
      <CreateHirer />
    </>
  );
}
