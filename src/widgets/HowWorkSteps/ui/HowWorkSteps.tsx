"use client";
import { useTranslation } from "@/app/i18n/client";
import StepsCard from "@/src/entities/StepsCard/ui/StepsCard";
import Heart from "@/src/shared/assets/Landing/Heart";
import LeftArrow from "@/src/shared/assets/Landing/LeftArrow";
import RightArrow from "@/src/shared/assets/Landing/RightArrow";
import StepsBook from "@/src/shared/assets/Landing/StepsBook";
import React, { FC } from "react";

const HowWorkSteps: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  const data = [
    {
      //первая карточка
      id: "1",
      stepNumber: t("FirstSpetNum"),
      title: t("FirstStepTitle"),
      desc: t("FirstStepDesc"),
    },
    {
      //третья карточка
      id: "3",
      stepNumber: t("ThirdSpetNum"),
      title: t("ThirdStepTitle"),
      desc: t("ThirdStepDesc"),
    },
    {
      //вторая карточка
      id: "2",
      stepNumber: t("SecondSpetNum"),
      title: t("SecondStepTitle"),
      desc: t("SecondStepDesc"),
    },
  ];
  return (
    <article className="flex flex-col items-center mt-20 h-[700px] relative">
      <div className="absolute top-[420px] right-[-60px]">
        <StepsBook />
      </div>
      <div className="flex justify-between gap-60 relative">
        {data.slice(0, 2).map(item => (
          <StepsCard key={item.id} id={item.id} stepNumber={item.stepNumber} title={item.title} desc={item.desc} />
        ))}
        <div className="absolute top-[420px] left-5">
          <Heart />
        </div>
      </div>
      <div className="absolute top-[310px] left-[220px]">
        <LeftArrow />
      </div>
      <div className="mt-6">
        <StepsCard
          key={data[2].id}
          id={data[2].id}
          stepNumber={data[2].stepNumber}
          title={data[2].title}
          desc={data[2].desc}
        />
      </div>
      <div className="absolute top-[310px] right-[110px]">
        <RightArrow />
      </div>
    </article>
  );
};

export default HowWorkSteps;
