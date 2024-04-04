"use client";
import React from "react";
import { FC } from "react";
import { useTranslation } from "@/app/i18n/client";

const AboutUS: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  return (
    <>
      <section className="flex justify-between gap-32 items-center">
        <article className="max-w-[561px] flex flex-col gap-6">
          <h3 className="font-semibold text-[15px] text-green">{t("team")} </h3>
          <h1 className="font-semibold text-xl pr-20">{t("teamInfo")}</h1>
          <p className="font-medium text-xs text-gray leading-5 pr-32">{t("teamSecondInfo")}</p>
        </article>
        <article className="p-10">
          <div className="w-[578px] h-[399px] bg-gray"></div>
        </article>
      </section>
    </>
  );
};

export default AboutUS;
