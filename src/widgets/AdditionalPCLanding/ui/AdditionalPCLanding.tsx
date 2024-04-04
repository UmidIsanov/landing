"use client";
import React from "react";
import { FC } from "react";
import { useTranslation } from "@/app/i18n/client";
const AdditionalPCLanding: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  return (
    <>
      <section className="max-w-[1242px] m-auto flex justify-between gap-5 mt-[109px] mb-[127px]">
        <article className="max-w-[544px] flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center">{t("searchTutor")}</h1>
          <p className="font-normal text-base text-left leading-6 text-gray px-14">{t("hereUcanFind")}</p>
        </article>
        <article className="max-w-[648px] flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center">{t("searchJob")}</h1>
          <p className="font-normal text-base leading-6 text-left text-gray px-14">{t("didUFineshed")}</p>
        </article>
      </section>
    </>
  );
};

export default AdditionalPCLanding;
