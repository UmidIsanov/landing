"use client";

import { FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import styles from "../../styles/auth.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
//images

import { RegState, RegStateType } from "../../types/regState";
import { RegContext } from "../../provider/RegistartionContext";

//validate
import { validateEmail } from "../../lib/validateEmail";
import { validatePassword } from "../../lib/validatePassword";

//ForrmUI
import FormInput from "@/src/shared/ui/FormInput/ui/FormClassicInput";
import FormModal from "@/src/shared/ui/FormModal/ui/FormModal";
import FormPasswordInput from "@/src/shared/ui/FormInput/ui/FormPasswordInput";

//MUI
import Button from "@/src/shared/ui/Button";
import Link from "@mui/material/Link";

//Hook Form
import { Controller, SubmitHandler, Validate, useForm } from "react-hook-form";

const Register: FC<PropsWithChildren> = ({ children }) => {
  const {
    control,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitSuccessful, errors, isValid, isSubmitted },
    getValues,
  } = useForm<RegState>({
    mode: "onChange",
    defaultValues: {
      confirmedPassword: "",
      password: "",
      email: "",
    },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const regContext = useContext(RegContext);

  const submitHandler: SubmitHandler<RegState> = data => {
    regContext?.setRegistrationState({
      password: data.password,
      confirmedPassword: data.confirmedPassword,
      email: data.email,
      phone: "",
      firstName: "",
      lastName: "",
      secondName: "",
    });
    regContext?.setActiveStep("FILL_ABOUT_INFO");
  };

  useEffect(() => {
    if (watch("password") !== watch("confirmedPassword")) {
      setError("confirmedPassword", { message: "FAIL" });
    } else {
      clearErrors("confirmedPassword");
    }
  }, [watch("password"), watch("confirmedPassword")]);

  const validateConfirmPassword: Validate<string | undefined, RegState> = useMemo(() => {
    return data => {
      const password = getValues("password");
      if (password !== data) return "FAIL";
      return true;
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      noValidate
      action=""
      className={"mb-32 w-[544px] bg-white  min-h-[710px] shadow-xl px-8 mt-16 rounded-[30px] " + styles.form}
    >
      <div className="w-[450px] flex flex-col justify-center mx-3">
        <h1 className="text-3xl text-center mt-5 p-6">Регистрация</h1>
        {/* Почта */}
        <Controller
          control={control}
          name="email"
          rules={{ required: true, validate: validateEmail }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <FormInput
                newClassNames="py-[8px]"
                withBlueBorder
                isRequired
                ref={ref}
                isSubmitSuccessful={isSubmitted}
                isError={Boolean(error)}
                successMessage="Поле заполнено верно"
                errorMessage="Неверный формат электронной почты"
                label="Ваша эл-почта"
                inputProps={{ type: "email", onChange, value, placeholder: "Почта" }}
              />
            );
          }}
        />
        {/* Пароль */}

        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
            validate: validatePassword,
          }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <div className="relative flex">
                <FormPasswordInput
                  newClassNames="py-[8px]"
                  withBlueBorder
                  isRequired
                  ref={ref}
                  isSubmitSuccessful={isSubmitted}
                  isError={Boolean(error)}
                  errorCodes={error && (error.message?.split(",") as ("SUCCESS" | "FAIL")[])}
                  successMessage="Успешно"
                  errorMessages={[
                    "Количество символов между [6; 20]",
                    "Как минимум 1 буква",
                    "Как минимум 1 цифра",
                    "Используются один из специальных символов @!&_",
                  ]}
                  label="Пароль"
                  inputProps={{ onChange, value, placeholder: "Пароль" }}
                />
              </div>
            );
          }}
        />
        <Controller
          control={control}
          name="confirmedPassword"
          rules={{ required: true, validate: validateConfirmPassword }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <FormPasswordInput
                withBlueBorder
                newClassNames="py-[8px]"
                ref={ref}
                isRequired
                successMessages={["Пароли совпадают"]}
                errorCodes={error && (error.message?.split(",") as ("SUCCESS" | "FAIL")[])}
                isSubmitSuccessful={isSubmitSuccessful}
                isError={Boolean(error)}
                successMessage="Успешно"
                errorMessages={["Пароли не совпадают"]}
                label="Подтвердите пароль"
                inputProps={{ onChange, value, placeholder: "Подтвердите пароль" }}
              />
            );
          }}
        />
        <div className="mt-8">
          <ReCAPTCHA style={{ width: "100%" }} sitekey="SITE KEY" />
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          variant={1}
          disabled={!isValid}
          type="submit"
          className="font-normal bg-green rounded-[16px] mt-6 h-14"
        >
          Продолжить
        </Button>

        <FormModal open={isOpen} handleClose={() => setIsOpen(false)} title="Подтвердите регистрацию">
          <div className="flex flex-col justify-center">
            <hr />
            <div className="mt-5 text-xs text-center ">
              <p>На почту example@mail.com выслано письмо с подтверждением</p>
            </div>
            <div className="flex flex-col justify-center mt-5 mx-auto">
              <Button variant={1} className="w-48 h-10 text-[10px] rounded-[25px] bg-green">
                Отправить код повторно
              </Button>
              <Link href="" className="text-[11px] text-grayCus">
                Не нашли письмо? Проверьте спам
              </Link>
            </div>
          </div>
        </FormModal>

        {children}
      </div>
    </form>
  );
};

export default Register;
