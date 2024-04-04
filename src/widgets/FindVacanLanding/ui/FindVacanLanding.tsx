"use client";
import { useTranslation } from "@/app/i18n/client";
import BookFind from "@/src/shared/assets/Landing/BookFind";
import Laptop from "@/src/shared/assets/Landing/Laptop";
import SearchHeart from "@/src/shared/assets/Landing/SearchHeart";
import Button from "@/src/shared/ui/Button";
import { useRouter } from "next/navigation";

import React, { FC } from "react";

const FindVacanLanding: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  const { push } = useRouter();

  const goTo = () => {
    push("/register/tutor");
  };

  return (
    <section id="become-tutor" className="flex justify-center mt-10 relative">
      <div className="absolute top-20 left-[-23px]">
        <Laptop />
      </div>
      <div className="absolute bottom-[-10px] left-[-32px]">
        <SearchHeart />
      </div>
      <div className="absolute bottom-60 right-[-52px]">
        <BookFind />
      </div>
      <div
        className="w-[1057px] flex flex-col bg-bggreen 
                   bg-opacity-40 rounded-[45px] py-24 px-16 gap-8 z-10"
      >
        <h1 className="font-bold text-5xl text-center">{t("findWord")}</h1>
        <p className="font-light text-3xl text-center mb-7 text-pcolor">{t("weAreCreate")}</p>
        <ul className="list-disc text-3xl px-12 leading-10 text-green">
          <li>{t("Availability")}</li>
          <li>{t("Support")}</li>
          <li>{t("Connect")}</li>
        </ul>
        <div className="">
          <Button onClick={goTo} className="py-2 px-14 text-xl font-semibold" variant={1}>
            {t("Fill")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FindVacanLanding;
