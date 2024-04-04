"use client";

import { FC, PropsWithChildren, useContext, useEffect } from "react";
import styles from "../../styles/auth.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegState } from "../../types/regState";
import { RegContext } from "../../provider/RegistartionContext";
import { validateEmptyField } from "../../lib/validateEmptyField";

import FormInput from "@/src/shared/ui/FormInput/ui/FormClassicInput";

//MUI
import Button from "@/src/shared/ui/Button";
import { validateTel } from "../../lib/validateTel";
import { useAppDispatch, useAppSelector } from "@/src/shared/model";
import { authThunk, clearError, userFetchingSelector } from "@/src/entities/User";
import { useRouter } from "next/navigation";
import { RenderSingleErrorMessage } from "@/src/shared/ui/FormInput/ui/FormClassicInput/ui/FormInput";

const FillAboutInfo: FC<PropsWithChildren> = ({ children }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitSuccessful },
  } = useForm<RegState>({
    mode: "onChange",
    defaultValues: {
      phone: "+7",
      firstName: "",
      lastName: "",
      secondName: "",
    },
  });

  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const regContext = useContext(RegContext);
  const { isAuth, error, isLoading } = useAppSelector(userFetchingSelector);

  useEffect(() => {
    dispatch(clearError());
    return () => {
      dispatch(clearError());
    };
  }, []);

  useEffect(() => {
    if (isAuth) {
      push("/");
    }
  }, [isLoading]);

  const submitHandler: SubmitHandler<RegState> = data => {
    const requestData: Partial<RegState> = {
      ...regContext?.regState,
      phone: data.phone,
      firstName: data.firstName,
      secondName: data.secondName,
      lastName: data.lastName,
    };

    dispatch(authThunk(false, requestData));
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      noValidate
      className={"mb-32 w-[544px] bg-white min-h-[710px] shadow-xl px-8 mt-16 rounded-[30px] " + styles.form}
    >
      <div className="w-[450px] flex flex-col justify-center mx-3">
        <h1 className="text-3xl text-center mt-5 p-6">Регистрация</h1>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: true, validate: validateEmptyField }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <FormInput
                withBlueBorder
                isRequired
                ref={ref}
                isSubmitSuccessful={isSubmitSuccessful}
                isError={Boolean(error)}
                successMessage="Поле заполнено верно"
                errorMessage="Количество символов от 1 до 20. Допускается использование только букв и символа '-'"
                label="Ваше Имя"
                inputProps={{ type: "text", onChange, value, placeholder: "Имя" }}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="secondName"
          rules={{ required: true, validate: validateEmptyField }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <FormInput
                withBlueBorder
                isRequired
                ref={ref}
                isSubmitSuccessful={isSubmitSuccessful}
                isError={Boolean(error)}
                successMessage="Поле заполнено верно"
                errorMessage="Количество символов от 1 до 20. Допускается использование только букв и символа '-'"
                label="Вашa Фамилия "
                inputProps={{ type: "text", onChange, value, placeholder: "Фамилия" }}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="lastName"
          rules={{ required: true, validate: validateEmptyField }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <FormInput
                withBlueBorder
                isRequired
                ref={ref}
                isSubmitSuccessful={isSubmitSuccessful}
                isError={Boolean(error)}
                errorMessage="Количество символов от 1 до 20. Допускается использование только букв и символа '-'"
                successMessage="Поле заполнено верно"
                label="Ваше отчество"
                inputProps={{ type: "text", onChange, value, placeholder: "Отчество" }}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="phone"
          rules={{ required: true, validate: validateTel }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <FormInput
                withBlueBorder
                isRequired
                ref={ref}
                isSubmitSuccessful={isSubmitSuccessful}
                isError={Boolean(error)}
                successMessage="Поле заполнено верно"
                errorMessage="Неверный формат телефона"
                label="Номер телефона"
                inputProps={{ type: "tel", onChange, value, placeholder: "+7 (701) 456 78 90" }}
              />
            );
          }}
        />
        {error && (
          <div className="mt-5">
            <RenderSingleErrorMessage errorMessage={error} />
          </div>
        )}
        <Button disabled={!isValid} variant={1} type="submit" className="font-normal bg-green rounded-[16px] mt-6 h-14">
          Продолжить
        </Button>
        {children}
      </div>
    </form>
  );
};

export default FillAboutInfo;
