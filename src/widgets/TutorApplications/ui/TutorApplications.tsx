"use client";

import Button from "@/src/shared/ui/Button";
import React, { ChangeEvent, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Checkbox } from "@/src/shared/ui/CheckBox";
import ApplicationInput from "@/src/shared/ui/ApplicationInput";

import { Value, ValueKeys } from "@/src/shared/ui/ApplicationInput/types";
import ApplicationInputModal from "@/src/shared/ui/ApplicationInput/ui/ApplicationInputModal";

const TutorApplications = () => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const [initialValue, setInitialValue] = useState({
    city: "Алматы",
    education: "Среднее",
    dopEducation: "SparkLab",
    languages: "Русский",
    features: "Глухота",
    interests: "Люблю кушать",
    hobby: "Чтенеие",
    extraInfo: "Прошу не звонить ночью",
  });
  const [value, setValue] = useState<Value>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const { value } = e.target;
    setValue(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleBackChange = () => {
    setEditMode(!editMode);
    setValue({ ...initialValue });
  };
  const listOfFieldsFirst: Array<{ id: ValueKeys; label: string }> = [
    {
      id: "city",
      label: "Город",
    },
    {
      id: "education",
      label: "Образование",
    },
    {
      id: "dopEducation",
      label: "Дополнительное образование",
    },
  ];

  const listOfFieldsSecond: Array<{ id: ValueKeys; label: string }> = [
    {
      id: "languages",
      label: "Языки",
    },
    {
      id: "features",
      label: "Особенности с которыми работает тьютор",
    },
    {
      id: "interests",
      label: "Интересы",
    },
    {
      id: "hobby",
      label: "Хобби",
    },
  ] as const;

  const handleSubmit = () => {
    setEditMode(false);
    setInitialValue(value);
  };

  return (
    <main className="flex flex-col justify-center mb-28">
      <form onSubmit={handleSubmit}>
        <section className="w-[554px] bg-main rounded-[8px] shadow-xl pb-6 mb-14">
          <article className="flex justify-end  items-center gap-40 py-7">
            <h1 className="">Моя заявка</h1>
            <div className="w-[63px] h-[33px] mx-8">
              {!editMode ? (
                <Button
                  variant={1}
                  className="py-1 px-5 rounded-[8px] "
                  type="button"
                  onClick={() => setEditMode(!editMode)}
                >
                  <CreateIcon />
                </Button>
              ) : (
                ""
              )}
            </div>
          </article>

          <article className="flex flex-wrap mx-6 justify-start gap-7">
            {/* #1 */}
            <div className="flex justify-between gap-10 text-xs  items-center">
              <h1 className="w-[120px] ">Пол</h1>
              <div className="flex justify-start gap-10">
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"men"} /> Мужской
                </label>
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"woomen"} /> Женский
                </label>
              </div>
            </div>
            {/* #2 */}
            {/* со 2 по 4 нужно промапить */}

            {listOfFieldsFirst.map((field, index) => (
              <ApplicationInput
                key={index}
                label={field.label}
                id={field.id}
                className="w-[350px]"
                value={value[field.id] || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, field.id)}
                disabled={!editMode}
              />
            ))}

            {/* #5 */}
            <div className="flex justify-between gap-10 text-xs">
              <h1 className="w-[120px] ">Опыт работы</h1>
              <div className="">
                <div className="flex justify-start gap-10 mb-4">
                  <label htmlFor="" className="flex gap-2  items-center">
                    <Checkbox name={"men"} /> Нет опыта
                  </label>
                  <label htmlFor="" className="flex gap-2  items-center">
                    <Checkbox name={"woomen"} /> менее 1 года
                  </label>
                </div>
                <div className="flex justify-start gap-10">
                  <label htmlFor="" className="flex gap-2  items-center">
                    <Checkbox name={"men"} /> 1-3 года
                  </label>
                  <label htmlFor="" className="flex gap-2  items-center">
                    <Checkbox name={"woomen"} /> более 3 лет
                  </label>
                </div>
              </div>
            </div>
            {/* #6 */}

            {listOfFieldsSecond.map((field, id) => (
              <ApplicationInput
                label={field.label}
                key={id}
                id={field.id}
                className="w-[350px]"
                value={value[field.id] || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, field.id)}
                disabled={!editMode}
              />
            ))}

            {/* #10 */}
            <div className="flex justify-between gap-10 text-xs  items-center">
              <h1 className="w-[120px] ">Возможность командировки</h1>
              <div className="flex justify-start gap-10">
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"men"} /> Да
                </label>
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"woomen"} /> Нет
                </label>
              </div>
            </div>
            {/* #11 */}
            <div className="flex justify-between gap-10 text-xs  items-center">
              <h1 className="w-[120px] ">Возможность работать по не нормированному графику</h1>
              <div className="flex justify-start gap-10">
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"men"} /> Да
                </label>
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"woomen"} /> Нет
                </label>
              </div>
            </div>
            {/* #12 */}
            <div className="flex justify-between gap-10 text-xs  items-center">
              <h1 className="w-[120px] ">Готовность повышать квалификацию</h1>
              <div className="flex justify-start gap-10">
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"men"} /> Да
                </label>
                <label htmlFor="" className="flex gap-2  items-center">
                  <Checkbox name={"woomen"} /> Нет
                </label>
              </div>
            </div>
            {/* #13 */}
            <div className="">
              <article className="flex  justify-end gap-10">
                <video controls className="h-24">
                  <source src="your-video-source.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </article>
            </div>
            {/* #14 */}
            <div className="flex justify-between gap-10 text-xs  items-center">
              <h1 className="w-[120px] ">Дополнительная информация</h1>
              <div className="flex justify-start gap-10">
                <label htmlFor="" className="flex gap-2  items-center">
                  <textarea
                    className="w-[350px] outline-none  py-3 px-3 text-black border border-grayModal  rounded-md"
                    value="Прошу не звонить ночью"
                  ></textarea>
                </label>
              </div>
            </div>
            {/* #15 */}
            <div className="flex justify-between gap-10 text-xs items-center">
              <h1 className="w-[120px]">Дополнительные документы</h1>

              <div className="flex justify-start gap-10">
                <label htmlFor="" className="flex gap-2 items-center">
                  <input type="file" className="w-[350px]" />
                </label>
              </div>
            </div>
          </article>
        </section>

        {editMode ? (
          <div className="flex justify-start gap-5 ">
            <Button className="px-6 py-2 rounded-lg font-thin " variant={1} type="submit" onClick={handleSubmit}>
              Сохранить и отправить на модерацию
            </Button>
            <Button className="px-6 py-2 rounded-lg font-thin" variant={3} type="button" onClick={handleBackChange}>
              Отменить
            </Button>
          </div>
        ) : (
          ""
        )}
      </form>
    </main>
  );
};

export default TutorApplications;
