"use client";

import { useTranslation } from "@/app/i18n/client";
import IntroGroup from "@/src/shared/assets/Landing/IntroGroup";

import Button from "@/src/shared/ui/Button";
import { useRouter } from "next/navigation";
import { FC } from "react";

const IntroLanding: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");

  const { push } = useRouter();

  const goTo = () => {
    push("/register/hirer");
  };

  return (
    <section className="py-[160px] w-full max-w-[1200px] bg-introcolor h-[770px] ">
      <div className="flex justify-between mt-[52px] items-center">
        <div className="">
          <h1 className="font-bold text-6xl w-[600px] mb-7">
            {t("tutorFor")}
            <span className="text-green"> {t("foreveryone")}</span>
          </h1>
          <p className="pr-35 font-normal text-xl mb-7 text-pcolor">
            {t("weCanFind")}
            <br /> {t("everyBoy")}. {t("nowUdon't")}
            <br />
            {t("you'reTime")}. {t("forU")} <br /> {t("inOurPlatform")} <br /> {t("practice")}.
          </p>
          <Button onClick={goTo} className="py-2 px-14 text-xl" variant={1}>
            {t("start_now")}
          </Button>
        </div>
        <div className="">
          <IntroGroup />
        </div>
      </div>
    </section>
  );
};

export default IntroLanding;
