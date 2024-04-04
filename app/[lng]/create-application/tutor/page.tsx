import { CreateTutor } from "@/src/features/CreateApplication";
import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заполнение заявки тьютора",
  description: "Заявка тьютора",
};

export default function CreateTutorApplication() {
  return (
    <>
      <Typography component={"h1"} sx={{ textAlign: "center", fontSize: "30px", fontWeight: "400" }}>
        Заполнение заявки тьютора
      </Typography>
      <CreateTutor />
    </>
  );
}
