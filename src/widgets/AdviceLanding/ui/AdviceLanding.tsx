"use client";
import { useTranslation } from "@/app/i18n/client";
import Button from "@/src/shared/ui/Button";

import { FC } from "react";

const AdviceLanding: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  return (
    <section className="flex flex-col justify-center text-center py-24 ">
      <h1 className="max-w-[855px] font-bold text-5xl mb-7 uppercase m-auto px-10">
        {t("learn")}
        <span className="text-green"> {t("rigtNow")}</span>
      </h1>
      <p className="text-2xl mb-7 text-pcolor px-32">{t("aboutTabysu")}</p>
      <Button variant={1} className="m-auto py-2 px-14 text-xl">
        {t("start_now")}
      </Button>
    </section>
  );
};

export default AdviceLanding;
