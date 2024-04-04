import React from "react";
import { userData } from "@/src/shared/MockData/userData";
import InfoContainer from "@/src/widgets/InforContainer";
const page = () => {
  return <InfoContainer data={userData} />;
};

export default page;
