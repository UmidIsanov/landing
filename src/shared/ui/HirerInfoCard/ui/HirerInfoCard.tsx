"use client";
import React, { FC } from "react";
import { IHirerBasicInfo } from "@/src/widgets/Hirer/types/index";
import { useAppSelector } from "@/src/shared/model";
interface HirerBasicInfoProps {
  hirerData: IHirerBasicInfo;
}
const HirerInfoCard: FC<HirerBasicInfoProps> = ({ hirerData }) => {
  const user = useAppSelector(state => state.userReducer.user);
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Личная Информация нанимателя:</h2>
      <ul>
        <li>Имя: {user?.firstName}</li>
        <li>Фамилия: {user?.secondName} </li>
        <li>Номер:+{user?.phone} </li>
        <li>Почта: {user?.email}</li>
      </ul>
    </div>
  );
};

export default HirerInfoCard;
