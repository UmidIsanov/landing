"use client";
import { useTranslation } from "@/app/i18n/client";
import CheckListHeart from "@/src/shared/assets/Landing/CheckListHeart";
import SearchHeart from "@/src/shared/assets/Landing/SearchHeart";
import SearchTutorIcon from "@/src/shared/assets/Landing/SearchTutorIcon";
import Button from "@/src/shared/ui/Button";
import { useRouter } from "next/navigation";
import { FC } from "react";

const SearchTutorLanding: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  const { push } = useRouter();

  const goTo = () => {
    push("/register/hirer");
  };

  return (
    <section className="flex justify-center h-[730px] mt-4">
      <article className="flex flex-col justify-center relative">
        <div className="absolute left-[-310px] top-9">
          <CheckListHeart />
        </div>
        <div className="absolute right-[-310px] top-9">
          <SearchHeart />
        </div>
        <h1 className="text-center font-bold text-6xl mb-24">{t("searchTutor")}</h1>
        <div className="flex justify-between mb-32 gap-10">
          <div className="w-[532px]">
            <div className="flex flex-col gap-4 mb-10">
              <label htmlFor="" className="font-bold text-4xl text-green">
                Тьютор
              </label>
              <p className="text-2xl font-medium">{t("totorIs")}.</p>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="" className="font-bold text-4xl text-green">
                {t("TutorRole")}
              </label>
              <p className="text-2xl font-medium">{t("missionOfTutor")}</p>
            </div>
          </div>
          <div className="">
            <SearchTutorIcon />
          </div>
        </div>
      </article>
    </section>
  );
};

export default SearchTutorLanding;
