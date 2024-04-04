"use client";

import { FC, useState } from "react";
import { BoxWithGap, ModalStack, StackLabel } from "../styles";
import PhoneSVG from "@/src/shared/assets/phone.svg";
import MailSVG from "@/src/shared/assets/mail.svg";
import FormInput from "@/src/shared/ui/FormInput/ui/FormClassicInput";
import Select from "@/src/shared/ui/Select";
import SearchSvg from "@/src/shared/assets/search.svg";
import { RadioChoose } from "./CreateHirerApplication";
import { FilePicker, FileList } from "@/src/shared/ui/FilePicker";
import SpecialNeedsChoice from "@/src/widgets/SpecialNeedsChoice";
import Input from "@/src/shared/ui/Input";
import { SpecialNeedsContextIProps } from "@/src/widgets/SpecialNeedsChoice/providers/SpecialNeedsContext";
import { specNeeds } from "../lib/specNeeds";
import DatePicker from "@/src/widgets/DatePicker";
import DropdownContext from "@/src/shared/ui/Select/providers/DropdownContext";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ITutorFormState } from "../types";
import Button from "@/src/shared/ui/Button";
import { videoLinkValidation } from "../lib/videoLinkValidation";
import FormStackLabel from "./FormStackLabel";
import { usePostTutorApplicationMutation } from "@/src/entities/Tutor/api";
import { convertFormData } from "../lib/convertTutorFormData";

const CreateTutor: FC = () => {
  const [selectedCity, setSelectedCity] = useState<Record<number, string>>({});
  const [selectedLanguages, setSelectedLanguages] = useState<Record<number, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [specialNeeds, setSpecialNeeds] = useState<SpecialNeedsContextIProps["specialNeeds"]>({});
  const [education, setEducation] = useState<Record<number, string>>({});
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ITutorFormState>({
    defaultValues: {
      gender: null,
      videoLink: "",
      readinessToContinueStudying: null,
      otherInfo: "",
      experience: null,
      interestsAndHobbies: "",
      posibilityOfIrregularSchedule: null,
      addEducation: "",
      businessTripOpportunity: null,
      dateOfBirth: null,
    },
    mode: "onChange",
  });

  const [postApplication, { isLoading, isError, error }] = usePostTutorApplicationMutation();

  const selectLanguage = (key: number, val: string) => {
    setSelectedLanguages(prev => ({ ...prev, [key]: val }));
  };
  const selectEducation = (key: number, val: string) => {
    setEducation({ [key]: val });
  };

  const deleteEducation = (key: number) => {
    setEducation({});
  };

  const isValidObjects = () => {
    const isValidCity = Object.keys(selectedCity).length > 0;
    const isValidSpecNeeds = Object.keys(specialNeeds).length > 0;
    const isValidLangs = Object.keys(selectedLanguages).length > 0;
    return isValidCity && isValidSpecNeeds && isValidLangs;
  };

  const addFile = (fileList: FileList) => {
    const resultArray: File[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const ownFile = fileList.item(i);
      if (!ownFile) continue;
      const foundFile = files.find(file => ownFile.name === file.name);
      if (foundFile) continue;
      resultArray.push(ownFile);
    }
    setFiles(prev => [...prev, ...resultArray]);
  };
  const removeFile = (file: File) => {
    setFiles(prev => {
      const filteredArr = prev.filter(f => f.name !== file.name);
      return filteredArr;
    });
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

  const submitHandler: SubmitHandler<ITutorFormState> = data => {
    const ownData = convertFormData({
      data,
      files,
      specialNeeds,
      languages: selectedLanguages,
      city: selectedCity,
      education,
    });
    postApplication(ownData);
  };

  return (
    <DropdownContext>
      <ModalStack>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-[20px]">
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Фамилия</FormStackLabel>
            <Input className="py-[10px] px-[14px] w-[440px]" variant="application" value={"aaa"} disabled />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Имя</FormStackLabel>
            <Input className="py-[10px] px-[14px] w-[440px]" variant="application" value={"aaa"} disabled />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Отчество</FormStackLabel>
            <Input className="py-[10px] px-[14px] w-[440px]" variant="application" value={"aaa"} disabled />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Телефон</FormStackLabel>
            <Input
              Icon={PhoneSVG}
              className="py-[10px] pl-[40px] w-[250px]"
              variant="application"
              value={"+7-707-786-1347"}
              disabled
            />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Email</FormStackLabel>
            <Input
              Icon={MailSVG}
              className="py-[10px] pl-[42px] w-[440px]"
              variant="application"
              value={"+7-707-786-1347"}
              disabled
            />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Ссылка на видео</FormStackLabel>
            <Controller
              control={control}
              name="videoLink"
              rules={{ required: true, validate: videoLinkValidation }}
              render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
                <FormInput
                  ref={ref}
                  isError={Boolean(error)}
                  errorMessage="Некорректный формат ссылки"
                  successMessage="Корректный формат ссылки"
                  inputProps={{ value, onChange, variant: "application", width: 440, placeholder: "Вставьте ссылку" }}
                  hint={"Вставьте ссылку на видео с YouTube с вашей самопрезентацией длиной не более 1 минуты"}
                  newClassNames="mb-[6px] py-[10px] px-[14px]"
                />
              )}
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
          <BoxWithGap sx={{ alignItems: "center" }}>
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
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Образование</FormStackLabel>
            <Select
              id="education"
              width={328}
              addItem={selectEducation}
              removeItem={deleteEducation}
              selected={education}
              title="Образование"
              data={[
                { id: 1, name: "Среднее" },
                { id: 2, name: "Средне-специальное" },
                { id: 3, name: "Высшее" },
              ]}
            />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel>Дополнительное образование</FormStackLabel>
            <Controller
              control={control}
              name="addEducation"
              render={({ field: { value, onChange, ref } }) => (
                <FormInput
                  isErrorCheckDisable
                  newClassNames="py-[10px] px-[14px]"
                  noLabel
                  ref={ref}
                  inputProps={{
                    value,
                    onChange,
                    variant: "application",
                    width: 328,
                    placeholder: "Дополнительное образование",
                  }}
                />
              )}
            />
          </BoxWithGap>
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
          <BoxWithGap>
            <FormStackLabel required>Особенности</FormStackLabel>
            <SpecialNeedsChoice
              ownSpecialNeeds={specNeeds}
              setSpecialNeeds={setSpecialNeeds}
              specialNeeds={specialNeeds}
            />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel>Хобби и интересы</FormStackLabel>
            <Controller
              control={control}
              name="interestsAndHobbies"
              render={({ field: { value, onChange, ref } }) => (
                <FormInput
                  noLabel
                  inputProps={{ width: 328 }}
                  ref={ref}
                  textAreaProps={{ value, onChange, width: 328, rows: 4, placeholder: "Ваши интересы..." }}
                  isTextArea
                  hint="Всего 250 символов"
                />
              )}
            />
          </BoxWithGap>
          <BoxWithGap sx={{ alignItems: "center" }}>
            <FormStackLabel required>Дополнительная информация</FormStackLabel>
            <Controller
              control={control}
              rules={{ required: true }}
              name="otherInfo"
              render={({ field: { value, onChange, ref } }) => (
                <FormInput
                  noLabel
                  inputProps={{ width: 328 }}
                  ref={ref}
                  textAreaProps={{ value, onChange, width: 328, rows: 4, placeholder: "Доп. информация" }}
                  isTextArea
                  hint="Всего 250 символов"
                />
              )}
            />
          </BoxWithGap>
          <Controller
            rules={{ required: true }}
            control={control}
            name="businessTripOpportunity"
            render={({ field: { value, onChange } }) => (
              <RadioChoose
                required
                value={value}
                setValue={onChange}
                mb={10}
                gap={32}
                variations={[
                  { val: "true", title: "Да" },
                  { val: "false", title: "Нет" },
                ]}
                title="Возможность командировки"
                name="trip"
              />
            )}
          />
          <Controller
            rules={{ required: true }}
            control={control}
            name="posibilityOfIrregularSchedule"
            render={({ field: { value, onChange } }) => {
              return (
                <RadioChoose
                  required
                  value={value}
                  setValue={onChange}
                  mb={10}
                  gap={32}
                  variations={[
                    { val: "true", title: "Да" },
                    { val: "false", title: "Нет" },
                  ]}
                  title="Возможность работать по ненормированному графику"
                  name="sch"
                />
              );
            }}
          />
          <Controller
            rules={{ required: true }}
            control={control}
            name="readinessToContinueStudying"
            render={({ field: { value, onChange } }) => (
              <RadioChoose
                required
                value={value}
                setValue={onChange}
                mb={10}
                gap={32}
                variations={[
                  { val: "true", title: "Да" },
                  { val: "false", title: "Нет" },
                ]}
                title="Готовность повышать квалификацию"
                name="studying"
              />
            )}
          />

          <BoxWithGap>
            <StackLabel sx={{ width: 120 }}>Дополнительные документы</StackLabel>
            <FileList files={files} removeFile={removeFile} />
          </BoxWithGap>
          <FilePicker limit={5} isMultiple files={files} addFile={addFile} />
          <div style={{ textAlign: "end" }}>
            <Button
              disabled={!(isValid && isValidObjects())}
              type="submit"
              className="rounded-lg text-sm py-[8px] px-[23px]"
              variant={1}
            >
              Сохранить
            </Button>
          </div>
        </form>
      </ModalStack>
    </DropdownContext>
  );
};

export default CreateTutor;
