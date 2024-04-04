"use client";

import { FC, useState } from "react";
import { BoxWithGap, ModalStack, StackLabel } from "../styles";
import TextArea from "@/src/shared/ui/TextArea";
import { Typography } from "@mui/material";
import Select from "@/src/shared/ui/Select";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IPostHirer } from "@/src/entities/Hirer/types/application";
import { CustomOmit } from "@/src/shared/types/general";
import SearchSvg from "../../../shared/assets/search.svg";
import { Checkbox } from "@/src/shared/ui/CheckBox";
import { IHirerFormState, IRadioChoose } from "../types";
import Button from "@/src/shared/ui/Button";
import { specNeeds } from "../lib/specNeeds";
import SpecialNeedsChoice from "@/src/widgets/SpecialNeedsChoice";
import { SpecialNeedsContextIProps } from "@/src/widgets/SpecialNeedsChoice/providers/SpecialNeedsContext";
import DatePicker from "@/src/widgets/DatePicker";
import DropdownContext from "@/src/shared/ui/Select/providers/DropdownContext";
import FormStackLabel from "./FormStackLabel";
import { usePostHirerApplicationMutation } from "@/src/entities/Hirer/api";
import FormInput from "@/src/shared/ui/FormInput/ui/FormClassicInput";
import { convertHirerFormData } from "../lib/convertHirerFormData";

// export const RadioChoose: FC<IRadioChoose> = ({
//   gap,
//   fixedWidth,
//   mb,
//   title,
//   variations,
//   name,
//   wrapEveryTwo = false,
// }) => {
//   return (
//     <BoxWithGap sx={{ marginBottom: mb ? `${mb}px` : 0 }}>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <div>
//           <StackLabel>{title}</StackLabel>
//         </div>
//         <div
//           style={{ gap: `${gap}px`, flexWrap: wrapEveryTwo ? "wrap" : "nowrap", alignItems: "flex-start" }}
//           className={"flex"}
//         >
//           {variations.map((variation, index) => (
//             <div key={variation} className="flex items-center gap-[8px]">
//               <Checkbox id={name + variation} name={name} />
//               <StackLabel sx={{ width: fixedWidth && index === 0 ? "115px" : "auto" }} htmlFor={name + variation}>
//                 {variation}
//               </StackLabel>
//             </div>
//           ))}
//         </div>
//       </div>
//     </BoxWithGap>
//   );
// };

export const RadioChoose: FC<IRadioChoose> = ({
  gap,
  fixedWidth,
  mb,
  title,
  variations,
  value,
  setValue,
  name,
  wrapEveryTwo = false,
  required,
}) => {
  const toggleRadio = (val: string) => {
    setValue(val);
  };

  return (
    <BoxWithGap sx={{ marginBottom: mb ? `${mb}px` : 0 }}>
      <FormStackLabel required={required}>{title}</FormStackLabel>
      <div style={{ gap: `${gap}px`, flexWrap: wrapEveryTwo ? "wrap" : "nowrap" }} className={"flex"}>
        {variations.map((variation, index) => (
          <div onClick={() => toggleRadio(variation.val)} key={variation.val} className="flex items-center gap-[8px]">
            <Checkbox
              isChecked={value === variation.val}
              toggleCheckbox={() => toggleRadio(variation.val)}
              id={name + variation.val}
              name={name}
            />
            <StackLabel sx={{ width: fixedWidth && index === 0 ? "91px" : "auto" }} htmlFor={name + variation.val}>
              {variation.title}
            </StackLabel>
          </div>
        ))}
      </div>
    </BoxWithGap>
  );
};

const CreateHirer: FC = () => {
  const {
    control,
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<IHirerFormState>({
    defaultValues: { dateOfBirth: null, experience: null, gender: null },
  });

  const [selectedCity, setSelectedCity] = useState<Record<number, string>>({});
  const [selectedLanguages, setSelectedLanguages] = useState<Record<number, string>>({});
  const [specialNeeds, setSpecialNeeds] = useState<SpecialNeedsContextIProps["specialNeeds"]>({});

  const [postApplication, { isLoading, isError, error }] = usePostHirerApplicationMutation();

  const selectLanguage = (key: number, val: string) => {
    setSelectedLanguages(prev => ({ ...prev, [key]: val }));
  };

  const deleteLanguage = (key: number) => {
    setSelectedLanguages(prev => {
      const cities = Object.assign({}, prev);
      delete cities[key];
      return cities;
    });
  };

  const selectCity = (key: number, val: string) => {
    setSelectedCity({ [key]: val });
  };

  const deleteCity = (key: number) => {
    setSelectedCity({});
  };

  const submitHandler: SubmitHandler<IHirerFormState> = data => {
    const ownData = convertHirerFormData({ data, city: selectedCity, languages: selectedLanguages, specialNeeds });
    postApplication(ownData);
  };

  return (
    <DropdownContext>
      <ModalStack>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-[20px]">
          <BoxWithGap>
            <FormStackLabel required>Название заявки</FormStackLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name="title"
              render={({ field: { value, onChange, ref } }) => (
                <FormInput
                  isRequired
                  isErrorCheckDisable
                  newClassNames="py-[10px] px-[14px]"
                  noLabel
                  ref={ref}
                  inputProps={{
                    value,
                    onChange,
                    variant: "application",
                    width: 440,
                    placeholder: "Введите название",
                  }}
                />
              )}
            />
          </BoxWithGap>
          <BoxWithGap>
            <StackLabel htmlFor="tutor_info">Опишите тьютора, которого Вы ищете</StackLabel>
            <Controller
              control={control}
              name="tutorsWishes"
              render={({ field: { value, onChange } }) => (
                <TextArea
                  id="tutor_info"
                  value={value}
                  onChange={onChange}
                  rows={3}
                  width={440}
                  placeholder="Опишите тьютора"
                />
              )}
            />
          </BoxWithGap>
          <Typography
            color={"var(--color-200)"}
            fontSize={16}
            lineHeight={"38px"}
            textAlign={"center"}
            bgcolor={"var(--bg-main)"}
          >
            Ниже будет указана информация о человеке для которого нанимаете тьютора.
          </Typography>
          <BoxWithGap paddingY={"24px"}>
            <FormStackLabel required>Город</FormStackLabel>
            <Select
              id="city"
              width={440}
              addItem={selectCity}
              removeItem={deleteCity}
              selected={selectedCity}
              title="Поиск города"
              Icon={SearchSvg}
              data={[
                { id: 1, name: "Алматы" },
                { id: 2, name: "Астана" },
                { id: 3, name: "Караганда" },
                { id: 4, name: "Талдыкорган" },
                { id: 5, name: "Ааааа" },
                { id: 6, name: "ФЫВЫВОВЛВЫ" },
              ]}
            />
          </BoxWithGap>
          <BoxWithGap>
            <FormStackLabel required>Дата рождения</FormStackLabel>
            <Controller
              control={control}
              name="dateOfBirth"
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => {
                return (
                  <DatePicker id="date" currDate={value} setCurrDate={onChange} title="Дата рождения" width={328} />
                );
              }}
            />
          </BoxWithGap>
          <Controller
            rules={{ required: true }}
            control={control}
            name="gender"
            render={({ field: { value, onChange } }) => {
              return (
                <RadioChoose
                  required
                  value={value}
                  fixedWidth
                  setValue={onChange}
                  mb={10}
                  gap={32}
                  variations={[
                    { title: "Мужской", val: "Male" },
                    { title: "Женский", val: "Female" },
                  ]}
                  title="Пол"
                  name="gender"
                />
              );
            }}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="accompanimentIds"
            render={({ field: { value, onChange } }) => (
              <RadioChoose
                required
                value={value}
                setValue={onChange}
                mb={10}
                gap={32}
                fixedWidth
                variations={[
                  { title: "В школе", val: "1" },
                  { title: "В досуговой деятельности", val: "2" },
                ]}
                title="Сопровождение"
                name="accompaniment"
              />
            )}
          />
          <Controller
            rules={{ required: true }}
            control={control}
            name="accompanimentType"
            render={({ field: { value, onChange } }) => (
              <RadioChoose
                required
                value={value}
                setValue={onChange}
                mb={24}
                gap={32}
                fixedWidth
                variations={[
                  { title: "С родителем", val: "С родителями" },
                  { title: "Без родителя", val: "Без родителей" },
                ]}
                title="Тип сопровождения"
                name="accompaniment_type"
              />
            )}
          />
          <Controller
            rules={{ required: true }}
            control={control}
            name="experience"
            render={({ field: { value, onChange } }) => {
              return (
                <RadioChoose
                  required
                  value={value}
                  setValue={onChange}
                  mb={10}
                  gap={32}
                  variations={[
                    { val: "Нет опыта", title: "Нет опыта" },
                    { val: "Менее 1 года", title: "Менее 1 года" },
                    { val: "1-3 года", title: "1-3 года" },
                    { val: "Более 3 лет", title: "Более 3 лет" },
                  ]}
                  title="Опыт работы"
                  name="exp"
                />
              );
            }}
          />
          <BoxWithGap paddingY={"24px"}>
            <FormStackLabel required>Языки</FormStackLabel>
            <Select
              id="langs"
              width={440}
              addItem={selectLanguage}
              removeItem={deleteLanguage}
              selected={selectedLanguages}
              title="Поиск языков"
              Icon={SearchSvg}
              isMultiple
              data={[
                { id: 1, name: "Английский" },
                { id: 2, name: "Русский" },
                { id: 3, name: "Казахский" },
              ]}
            />
          </BoxWithGap>
          <BoxWithGap paddingY={"24px"}>
            <FormStackLabel required>Особенности</FormStackLabel>
            <SpecialNeedsChoice
              ownSpecialNeeds={specNeeds}
              setSpecialNeeds={setSpecialNeeds}
              specialNeeds={specialNeeds}
            />
          </BoxWithGap>
          <BoxWithGap>
            <StackLabel htmlFor="info">Дополнительная информация</StackLabel>
            <Controller
              control={control}
              name="info"
              render={({ field: { value, onChange } }) => (
                <TextArea
                  id="info"
                  value={value}
                  onChange={onChange}
                  rows={3}
                  width={440}
                  placeholder="Доп. информация"
                />
              )}
            />
          </BoxWithGap>
          <div style={{ textAlign: "end" }}>
            <Button type="submit" className="rounded-lg text-sm py-[8px] px-[23px]" variant={1}>
              Сохранить
            </Button>
          </div>
        </form>
      </ModalStack>
    </DropdownContext>
  );
};

export default CreateHirer;
