"use client";
import { useTranslation } from "@/app/i18n/client";
import ArrowDonate from "@/src/shared/assets/Landing/ArrowDonate";
import DonateHearts from "@/src/shared/assets/Landing/DonateHearts";
import DonatePig from "@/src/shared/assets/Landing/DonatePig";
import ThreeHeartRight from "@/src/shared/assets/Landing/ThreeHeartRight";
import Button from "@/src/shared/ui/Button";
import React, { FC } from "react";

const DonateLanding: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  return (
    <section id="donate" className="mt-32 h-96 relative">
      <div className="absolute top-20 left-[100px]">
        <DonatePig />
      </div>
      <div className="absolute top-20 right-[-50px]">
        <ThreeHeartRight />
      </div>
      <div className="absolute right-56 top-56">
        <ArrowDonate />
      </div>
      <h1 className="font-bold text-5xl text-center">{t("Donation")}</h1>
      <div className="flex justify-center mt-40">
        <p className="max-w-[855px] font-medium text-xl px-20">{t("Ucan")}</p>
        <Button className="h-[50px] px-14 text-xl" variant={1}>
          {t("Donation")}
        </Button>
      </div>
    </section>
  );
};

export default DonateLanding;
