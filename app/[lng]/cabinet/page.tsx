"use client";
import Hirer from "@/src/widgets/Hirer";
import Tutor from "@/src/widgets/Tutor/ui/Tutor";
import React, { FC } from "react";
import { useAppSelector } from "@/src/shared/model";

const ComponentsToRender = {
  HIRER: Hirer,
  TUTOR: Tutor,
};

const Page: FC = () => {
  const role = useAppSelector(state => state.userReducer.user?.role);
  const ComponentToRender = role ? ComponentsToRender[role as "HIRER" | "TUTOR"] : null;

  return <>{ComponentToRender && <ComponentToRender />}</>;
};

export default Page;
