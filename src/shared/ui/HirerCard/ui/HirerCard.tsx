"use client";

import React from "react";
import Image from "next/image";
import { IHirerInfo } from "@/src/widgets/Hirer/types";
import avatar from "@/src/shared/assets/avatar.png";

interface HirerCardProps {
  hirerData: IHirerInfo;
}

const HirerCard: React.FC<HirerCardProps> = ({ hirerData }) => {
  return (
    <>
      <div className="border-4 flex ">
        <div className="mt-4 flex justify-start ml-18 pl-2 mb-4">
          <Image src={avatar} width={155} height={155} alt="Hirer Avatar" className="rounded-md" />
        </div>
        <div className="mt-4 mb-4 pl-2 ml-4">
          <h2 className="text-xl font-bold">Заявка № {hirerData.id}:</h2>
          <div className="">
            <ul>
              <li>ФИО: {hirerData.fullName}</li>
              <li>Город: {hirerData.city}</li>
              <li>Возраст: {hirerData.age} лет</li>
              <li>Особые пожелания: {hirerData.specialNeeds}</li>
              <li>Дополнительные пожелания: {hirerData.extraWishes}</li>
              <li>Оплата: {hirerData.payment} тенге</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HirerCard;
